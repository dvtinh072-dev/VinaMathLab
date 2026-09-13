import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAiConfiguration } from "@/lib/geminiChatService";
import {
  queryEducationalKnowledgeBase,
  getVinaCurriculumGroundingContext,
} from "@/data/educationalKnowledgeBase";

function buildVinaAssistantPrompt(groundingText?: string): string {
  return `Bạn là **Trợ Lý Vina** - Trợ lý AI Sư phạm Toán học thông minh, chuẩn mực trực thuộc nền tảng giáo dục VinaMath (bao trọn chương trình GDPT 2018 từ Toán 6 đến Toán 12).

🎯 TÍNH NĂNG VÀ NHIỆM VỤ CHÍNH CỦA TRỢ LÝ VINA:
1. TRA CỨU PHƯƠNG PHÁP & CÔNG THỨC TOÁN HỌC:
   - Tra cứu nhanh, chuẩn xác định nghĩa, định lý, hệ thức và công thức toán học từ Lớp 6 đến Lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức, Cánh diều, Chân trời sáng tạo).
   - Giải thích ngắn gọn ý nghĩa các ký hiệu, đại lượng, đơn vị đo và điều kiện xác định.
2. HỖ TRỢ HỌC SINH LÀM BÀI KHI CẦN:
   - Khi học sinh hỏi bài tập / bài toán: Nêu rõ phương pháp tư duy, định hướng các bước giải và trình bày bài giải chi tiết, rõ ràng, tính toán mạch lạc có đáp số chính xác giúp học sinh tự tin nắm vững bản chất bài toán.
   - Đi thẳng vào trọng tâm câu hỏi, súc tích, không rào đón khách sáo, không dài dòng triết lý.
3. QUY TẮC ĐỊNH DẠNG LATEX / KATEX BẮT BUỘC:
   - Công thức nội dòng (inline): kẹp giữa MỘT dấu đô la $ ... $ (Ví dụ: $S = a \\cdot b$, $x^2 - 4x + 3 = 0$, $\\Delta = b^2 - 4ac$).
   - Công thức hiển thị khối riêng (block): kẹp giữa HAI dấu đô la:
     $$
     ...
     $$
     (Ví dụ: $$S = a \\cdot b$$ hoặc $$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$).
${
  groundingText
    ? `\n---\n${groundingText}\n*Lưu ý: Hãy ưu tiên bám sát công thức và phương pháp chuẩn mực được trích xuất từ cơ sở dữ liệu VinaMath ở trên để giải đáp cho học sinh.*\n---`
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
              temperature: 0.2,
              maxOutputTokens: 1200,
            },
          });

          const result = await chat.sendMessage(latestUserMessage.content);
          responseText = result.response.text();
          providerSource =
            modelName === "gemini-2.0-flash"
              ? "Gemini 2.0 Flash (Trợ Lý Vina)"
              : "Gemini 1.5 Flash (Trợ Lý Vina)";
          break; // Thành công thì kết thúc vòng lặp
        } catch (geminiError: any) {
          console.warn(`Model ${modelName} call failed, trying next:`, geminiError?.message);
        }
      }
    }

    // 4. NẾU CHƯA CÓ KEY HOẶC GEMINI GẶP SỰ CỐ: Dùng kho học liệu Toán 6 - 12 chuẩn SGK
    if (!responseText) {
      const k = matchedItem || queryEducationalKnowledgeBase(latestUserMessage.content).match;

      if (k) {
        const stepsBlock =
          k.standardSteps && k.standardSteps.length > 0
            ? "\n\n📌 **Các bước áp dụng chuẩn:**\n" +
              k.standardSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n")
            : "";

        responseText = `### 📖 ${k.topic}

${k.officialContent}${stepsBlock}

*(Nguồn trích dẫn: ${k.sourceName})*`;
      } else {
        responseText = `Chào em! Thầy là **Trợ Lý Vina**. Để giải bài toán này, em thực hiện theo các bước sau:
1. **Xác định dữ kiện:** Tóm tắt các đại lượng đã cho và đại lượng cần tìm.
2. **Quy đổi đơn vị:** Đưa các kích thước hoặc số liệu về cùng một đơn vị đo thống nhất.
3. **Áp dụng công thức:** Sử dụng công thức toán học tương ứng từ SGK để tính toán ra kết quả.`;
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
