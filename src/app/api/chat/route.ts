import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAiConfiguration } from "@/lib/geminiChatService";
import {
  queryEducationalKnowledgeBase,
  getVinaCurriculumGroundingContext,
} from "@/data/educationalKnowledgeBase";

function buildVinaAssistantPrompt(groundingText?: string): string {
  return `Bạn là **Trợ Lý Vina** - Trợ lý AI chuyên sâu môn Toán học được vận hành độc quyền bởi nền tảng **Google Gemini Toán học** trực thuộc hệ thống giáo dục VinaMath (Toán 6 đến Toán 12 theo chuẩn GDPT 2018).

⚡ NGUYÊN TẮC BẮT BUỘC ĐỂ TRẢ LỜI GỌN GÀNG, CHÍNH XÁC, KHÔNG RƯỜM RÀ LAN MAN:
1. ĐI THẲNG VÀO TRỌNG TÂM CÂU HỎI:
   - Tuyệt đối không chào hỏi dài dòng, không rào đón khách sáo (chỉ cần "Chào em!" ngắn gọn ở đầu nếu là câu hỏi mới, hoặc đi thẳng vào bài giải).
   - Tuyệt đối không nói triết lý sống, không khuyên nhủ đạo đức ngoài lề, không viết câu cảm thán hay bình luận thừa thãi.
   - Trả lời đúng, đủ, súc tích và chính xác tuyệt đối.

2. CHUẨN XÁC VỀ MẶT TOÁN HỌC 100%:
   - Khi hỏi công thức / định lý: Nêu trực tiếp công thức chuẩn, điều kiện áp dụng và giải thích ngắn gọn ký hiệu.
   - Khi hỏi bài tập / bài toán: Trình bày các bước giải ngắn gọn, logic, tính toán chính xác và in đậm rõ ràng **ĐÁP SỐ**.
   - Khi hỏi câu trắc nghiệm: Đưa ra ngay phương án chọn (Ví dụ: **Chọn B**) kèm 2 - 3 dòng giải thích/chứng minh trọng tâm.

3. ĐỊNH DẠNG TOÁN HỌC KATEX CHUẨN MỰC:
   - Công thức trong dòng (inline): kẹp giữa cặp dấu $ ... $ (Ví dụ: $x = 2$, $\Delta = b^2 - 4ac$, $S = \frac{1}{2}ah$).
   - Công thức dòng riêng (display): kẹp giữa cặp dấu $$ ... $$ (Ví dụ: $$x = \frac{-b \pm \sqrt{\Delta}}{2a}$$).
   - Mọi biến số, số đo, biểu thức đều phải được đặt trong ký hiệu toán học.

4. CĂN CỨ TƯ LIỆU SÁCH GIÁO KHOA CHUẨN GDPT 2018:
   - Bám sát chương trình GDPT 2018 bộ Kết nối tri thức với cuộc sống.
${
  groundingText
    ? `\n---\n📚 TƯ LIỆU SGK CHÍNH THỐNG ĐỐI CHIẾU:\n${groundingText}\n*Căn cứ tài liệu chuẩn mực ở trên để giải đáp chuẩn xác.*\n---`
    : ""
}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, message, apiKey: clientBodyKey } = body;

    // Chuẩn hoá danh sách tin nhắn
    let chatHistory: Array<{ role: "user" | "assistant"; content: string }> = [];

    if (Array.isArray(messages) && messages.length > 0) {
      chatHistory = messages;
    } else if (typeof message === "string" && message.trim().length > 0) {
      chatHistory = [{ role: "user", content: message.trim() }];
    } else {
      return NextResponse.json(
        { error: "Vui lòng cung cấp nội dung tin nhắn hợp lệ." },
        { status: 400 }
      );
    }

    const latestUserMessage = chatHistory[chatHistory.length - 1];
    if (!latestUserMessage || !latestUserMessage.content) {
      return NextResponse.json(
        { error: "Tin nhắn cuối cùng không được để trống." },
        { status: 400 }
      );
    }

    // 1. Xác định API Key từ nhiều nguồn: Client gửi lên -> Biến môi trường -> Supabase
    const headerKey = req.headers.get("x-gemini-key") || "";
    const systemConfig = await getAiConfiguration();
    const apiKey =
      (clientBodyKey && clientBodyKey.trim()) ||
      (headerKey && headerKey.trim()) ||
      process.env.GEMINI_API_KEY ||
      systemConfig.geminiApiKey ||
      "";

    let responseText = "";
    let providerSource = "Kho Học Liệu VinaMath (GDPT 2018)";

    // 2. Trích xuất tri thức bám sát GDPT 2018 Toán 6 - 12 của hệ thống VinaMath
    const { groundingText, matchedItem } = getVinaCurriculumGroundingContext(
      latestUserMessage.content
    );
    const dynamicSystemPrompt = buildVinaAssistantPrompt(groundingText);

    // 3. Thử gọi mô hình Gemini (Ưu tiên gemini-2.0-flash thông minh hơn, dự phòng gemini-1.5-flash)
    if (apiKey) {
      const genAI = new GoogleGenerativeAI(apiKey);
      const modelsToTry = ["gemini-2.0-flash", "gemini-1.5-flash"];

      for (const modelName of modelsToTry) {
        try {
          const model = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: dynamicSystemPrompt,
          });

          const priorMessages = chatHistory.slice(0, -1);
          const formattedHistory: Array<{ role: "user" | "model"; parts: [{ text: string }] }> = [];
          for (const msg of priorMessages) {
            if (!msg.content || typeof msg.content !== "string") continue;
            formattedHistory.push({
              role: msg.role === "assistant" ? "model" : "user",
              parts: [{ text: msg.content }],
            });
          }

          while (formattedHistory.length > 0 && formattedHistory[0].role !== "user") {
            formattedHistory.shift();
          }

          const chat = model.startChat({
            history: formattedHistory,
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 1024,
            },
          });

          const result = await chat.sendMessage(latestUserMessage.content);
          responseText = result.response.text();
          providerSource = "Google Gemini Toán học (Trợ Lý Vina)";
          break; // Thành công thì kết thúc vòng lặp
        } catch (geminiError: any) {
          console.warn(`Model ${modelName} call failed, trying next:`, geminiError?.message);
        }
      }
    }

    // 4. NẾU CHƯA CÓ KEY HOẶC GEMINI GẶP SỰ CỐ: Dùng kho học liệu Toán 6 - 12 chuẩn SGK ngắn gọn
    if (!responseText) {
      const k = matchedItem || queryEducationalKnowledgeBase(latestUserMessage.content).match;

      if (k) {
        const stepsBlock =
          k.standardSteps && k.standardSteps.length > 0
            ? "\n\n**Các bước áp dụng:**\n" +
              k.standardSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n")
            : "";

        responseText = `### 📖 ${k.topic}\n\n${k.officialContent}${stepsBlock}\n\n📚 *Nguồn: ${k.sourceCitation}*`;
        providerSource = "Kho Học Liệu SGK Chuẩn VinaMath (GDPT 2018)";
      } else {
        responseText = `Chào em! Thầy là **Trợ Lý Vina** (Google Gemini Toán học).

Để được giải đáp nhanh và chuẩn xác nhất, em vui lòng:
1. Nhập từ khóa trọng tâm (ví dụ: *\"định lý sin\"*, *\"hằng đẳng thức\"*, *\"công thức đạo hàm\"*...).
2. Hoặc dán đề bài toán cụ thể kèm yêu cầu tính toán.

Thầy sẽ giải đáp ngay với đáp số và các bước giải ngắn gọn, chuẩn xác!`;
        providerSource = "Google Gemini Toán học (Trợ Lý Vina)";
      }
    }

    // 5. Đồng bộ nhật ký hỏi đáp lên Supabase Cloud để Thầy/Cô quản trị theo dõi chất lượng
    try {
      const { supabase } = await import("@/lib/supabaseClient");
      const { data: cloudData } = await supabase
        .from("users")
        .select("school_class")
        .eq("id", "system_ai_chat_logs")
        .single();

      let currentLogs: any[] = [];
      if (cloudData && cloudData.school_class) {
        currentLogs = JSON.parse(cloudData.school_class) || [];
      }

      currentLogs.unshift({
        id: "vina_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
        studentId: "student",
        studentName: "Học sinh (Trợ Lý Vina)",
        studentClass: "Trợ Lý Vina AI",
        question: latestUserMessage.content,
        answer: responseText,
        sources: [
          {
            title: `Trợ Lý Vina AI (${providerSource})`,
            citation: "Học liệu GDPT 2018 Bộ Giáo dục và Đào tạo (Toán 6 - 12)",
            url: "https://moet.gov.vn",
          },
        ],
        isAnsweredFromKnowledge: true,
        aiProvider: apiKey ? "Gemini 2.0 Flash + GDPT 2018" : "Kho Học Liệu VinaMath",
        timestamp: new Date().toISOString(),
      });

      if (currentLogs.length > 200) currentLogs = currentLogs.slice(0, 200);

      await supabase.from("users").upsert({
        id: "system_ai_chat_logs",
        username: "system_ai_chat_logs",
        role: "system",
        full_name: "AI Vina Chat Logs",
        password_hash: "system_config_hash",
        school_class: JSON.stringify(currentLogs),
      });
    } catch (logErr) {
      console.warn("Lỗi lưu nhật ký Trợ Lý Vina lên Supabase:", logErr);
    }

    return NextResponse.json({
      reply: responseText,
      provider: providerSource,
    });
  } catch (error: any) {
    console.error("Lỗi Trợ Lý Vina (app/api/chat/route.ts):", error);
    return NextResponse.json(
      {
        reply:
          "Rất tiếc, Trợ Lý Vina đang gặp chút sự cố kết nối (" +
          (error?.message || "Lỗi không xác định") +
          "). Em vui lòng gửi lại câu hỏi nhé!",
      },
      { status: 200 }
    );
  }
}
