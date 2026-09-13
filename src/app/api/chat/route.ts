import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAiConfiguration } from "@/lib/geminiChatService";
import { queryEducationalKnowledgeBase } from "@/data/educationalKnowledgeBase";

const MATH_TUTOR_PROMPT = `Bạn là "Gia sư Toán học AI" chuyên sâu, thông minh, súc tích và chuẩn mực theo chương trình GDPT 2018 Việt Nam (sách Kết nối tri thức, Cánh diều, Chân trời sáng tạo).

🎯 NGUYÊN TẮC TRẢ LỜI CỐT LÕI:
1. ĐÚNG TRỌNG TÂM & TỐI GIẢN:
   - Trả lời trực diện, đúng điều người dùng đang hỏi.
   - Tuyệt đối KHÔNG dài dòng, không rào đón khách sáo hay triết lý rườm rà.
   - KHÔNG chia các mục ví dụ tương tự hay gợi ý gượng ép thừa thãi.
2. XỬ LÝ THEO TỪNG LOẠI CÂU HỎI:
   - Nếu hỏi công thức / định lý / khái niệm: Cung cấp chính xác công thức toán học, giải thích ngắn gọn ý nghĩa các ký hiệu và lưu ý (đơn vị đo, điều kiện xác định).
   - Nếu hỏi bài tập / bài toán cụ thể: Trình bày phương pháp giải và các bước tính toán chi tiết, rõ ràng, gãy gọn, có đáp số chính xác để học sinh hiểu sâu bản chất bài toán.
3. QUY TẮC ĐỊNH DẠNG LATEX / KATEX BẮT BUỘC:
   - Công thức nội dòng (inline): kẹp giữa MỘT dấu đô la $ ... $ (Ví dụ: $S = a \\cdot b$, $x^2 - 4x + 3 = 0$, $\\Delta = b^2 - 4ac$).
   - Công thức hiển thị khối riêng (block): kẹp giữa HAI dấu đô la:
     $$
     ...
     $$
     (Ví dụ: $$S = a \\cdot b$$ hoặc $$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$).`;

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
    let providerSource = "Socratic SGK Engine";

    // 2. Thử gọi mô hình Gemini (Ưu tiên gemini-2.0-flash thông minh hơn, dự phòng gemini-1.5-flash)
    if (apiKey) {
      const genAI = new GoogleGenerativeAI(apiKey);
      const modelsToTry = ["gemini-2.0-flash", "gemini-1.5-flash"];

      for (const modelName of modelsToTry) {
        try {
          const model = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: MATH_TUTOR_PROMPT,
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
              temperature: 0.2,
              maxOutputTokens: 1200,
            },
          });

          const result = await chat.sendMessage(latestUserMessage.content);
          responseText = result.response.text();
          providerSource = modelName === "gemini-2.0-flash" ? "Gemini 2.0 Flash (Smarter & Fast)" : "Gemini 1.5 Flash";
          break; // Thành công thì kết thúc vòng lặp
        } catch (geminiError: any) {
          console.warn(`Model ${modelName} call failed, trying next:`, geminiError?.message);
        }
      }
    }

    // 3. NẾU CHƯA CÓ KEY HOẶC GEMINI GẶP SỰ CỐ: Dùng kho học liệu SGK chuẩn mực trả lời thẳng vào câu hỏi
    if (!responseText) {
      const kbMatchResult = queryEducationalKnowledgeBase(latestUserMessage.content);
      const k = kbMatchResult.match;

      if (k) {
        const stepsBlock = k.standardSteps && k.standardSteps.length > 0
          ? "\n\n📌 **Các bước áp dụng chuẩn:**\n" + k.standardSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n")
          : "";

        responseText = `### 📖 ${k.topic}

${k.officialContent}${stepsBlock}

*(Nguồn trích dẫn: ${k.sourceName})*`;
      } else {
        responseText = `Chào em! Để giải bài toán này, em thực hiện theo các bước sau:
1. **Xác định dữ kiện:** Tóm tắt các đại lượng đã cho và đại lượng cần tìm.
2. **Quy đổi đơn vị:** Đưa các kích thước hoặc số liệu về cùng một đơn vị đo thống nhất.
3. **Áp dụng công thức:** Sử dụng công thức toán học tương ứng để tính toán ra kết quả.`;
      }
    }

    // 4. Đồng bộ nhật ký hỏi đáp lên Supabase Cloud để Thầy/Cô quản trị theo dõi chất lượng
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
        id: "socratic_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
        studentId: "student",
        studentName: "Học sinh (Gia sư Socratic)",
        studentClass: "Gia sư AI",
        question: latestUserMessage.content,
        answer: responseText,
        sources: [
          {
            title: `Gia sư Socratic AI (${providerSource})`,
            citation: "Phương pháp Socratic & GDPT 2018 Bộ Giáo dục và Đào tạo",
            url: "https://moet.gov.vn",
          },
        ],
        isAnsweredFromKnowledge: true,
        aiProvider: apiKey ? "Gemini + SGK" : "Học liệu SGK chuẩn",
        timestamp: new Date().toISOString(),
      });

      if (currentLogs.length > 200) currentLogs = currentLogs.slice(0, 200);

      await supabase.from("users").upsert({
        id: "system_ai_chat_logs",
        username: "system_ai_chat_logs",
        role: "system",
        full_name: "AI Socratic Chat Logs",
        password_hash: "system_config_hash",
        school_class: JSON.stringify(currentLogs),
      });
    } catch (logErr) {
      console.warn("Lỗi lưu nhật ký Socratic Chat lên Supabase:", logErr);
    }

    return NextResponse.json({
      reply: responseText,
      provider: providerSource,
    });
  } catch (error: any) {
    console.error("Lỗi Gia sư Toán AI (app/api/chat/route.ts):", error);
    return NextResponse.json(
      {
        reply:
          "Rất tiếc, Gia sư AI đang gặp chút sự cố kết nối (" +
          (error?.message || "Lỗi không xác định") +
          "). Em vui lòng gửi lại câu hỏi nhé!",
      },
      { status: 200 }
    );
  }
}
