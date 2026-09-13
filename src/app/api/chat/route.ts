import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAiConfiguration } from "@/lib/geminiChatService";
import { queryEducationalKnowledgeBase } from "@/data/educationalKnowledgeBase";

const SOCRATIC_MATH_TUTOR_PROMPT = `Bạn là "Gia sư Toán học AI" chuẩn mực, súc tích và đúng trọng tâm theo chương trình GDPT 2018 (sách Kết nối tri thức, Cánh diều, Chân trời sáng tạo).

🎯 NGUYÊN TẮC PHẢN HỒI BẮT BUỘC:
1. ĐÚNG TRỌNG TÂM, TÓM GỌN Ý CHÍNH:
   - Trả lời thẳng vào nội dung câu hỏi, không dài dòng, không rào đón khách sáo hay chào hỏi rườm rà.
   - Nêu trực diện công thức cốt lõi và các điều kiện đi kèm.
2. NÊU PHƯƠNG PHÁP GIẢI & GỢI Ý HƯỚNG ĐI (KHÔNG GIẢI HỘ TOÀN BỘ):
   - Nếu câu hỏi về công thức/lý thuyết: Cung cấp chính xác công thức toán học, giải thích ngắn gọn ký hiệu và lưu ý cần thiết.
   - Nếu câu hỏi bài tập cụ thể: TUYỆT ĐỐI KHÔNG giải trọn vẹn ra đáp số cuối cùng thay học sinh. Hãy tóm tắt ngắn gọn PHƯƠNG PHÁP GIẢI (2 - 3 bước) và gợi ý cách đặt phép tính để học sinh tự làm.
3. TUYỆT ĐỐI KHÔNG HỎI NGƯỢC LẠI NGƯỜI HỎI:
   - Nghiêm cấm đặt các câu hỏi vặn ngược như: "Em có biết...?", "Đề bài cho gì vậy em?", "Em hãy cho Thầy biết...", "Em tính ra bao nhiêu?", "Đến lượt em nhé...".
   - Luôn đưa ra lời chỉ dẫn dứt khoát, rõ ràng: "Bước 1: ...", "Bước 2: ...", "Áp dụng công thức: ...".
4. ĐỊNH DẠNG CÔNG THỨC TOÁN BẮT BUỘC DÙNG LATEX/KATEX:
   - Công thức nội dòng: kẹp giữa $ ... $ (Ví dụ: $S = a \\cdot b$, $x^2 - 4x + 3 = 0$).
   - Công thức hiển thị khối riêng biệt: kẹp giữa $$ ... $$.`;

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

    // 2. Thử gọi mô hình Gemini nếu có API Key
    if (apiKey) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: SOCRATIC_MATH_TUTOR_PROMPT,
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
            temperature: 0.3,
            maxOutputTokens: 1000,
          },
        });

        const result = await chat.sendMessage(latestUserMessage.content);
        responseText = result.response.text();
        providerSource = "Gemini 1.5 Flash + Socratic";
      } catch (geminiError: any) {
        console.warn("Gemini API call failed, falling back to Socratic SGK Engine:", geminiError?.message);
      }
    }

    // 3. NẾU CHƯA CÓ KEY HOẶC GEMINI GẶP SỰ CỐ: Dùng bộ máy tri thức sư phạm chuẩn SGK (Socratic Engine)
    if (!responseText) {
      const kbMatchResult = queryEducationalKnowledgeBase(latestUserMessage.content);
      const k = kbMatchResult.match;

      if (k) {
        // Trả lời thẳng vào trọng tâm, tóm gọn ý chính, nêu phương pháp giải, KHÔNG hỏi ngược
        const stepsBlock = k.standardSteps && k.standardSteps.length > 0
          ? "\n\n📌 **Phương pháp giải & Các bước áp dụng:**\n" + k.standardSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n")
          : "";

        responseText = `### 📖 ${k.topic}

**1. Kiến thức & Công thức cốt lõi:**
${k.officialContent}${stepsBlock}

*(Nguồn chuẩn: ${k.sourceName})*`;
      } else {
        // Nếu là bài toán cụ thể chưa có trong CSDL: Nêu phương pháp giải & các bước tiếp cận, không hỏi ngược
        responseText = `**Phương pháp giải bài toán:**

1. **Xác định đại lượng:** Nhận diện các dữ kiện đã cho và đại lượng cần tìm trong bài toán.
2. **Quy đổi đơn vị:** Đưa tất cả kích thước hoặc số liệu về cùng một đơn vị đo hợp chuẩn.
3. **Áp dụng công thức:** Thiết lập biểu thức toán học hoặc phương trình liên hệ giữa các đại lượng.
4. **Thực hiện phép tính & Đối chiếu:** Thay số vào công thức để tính toán và đối chiếu với điều kiện bài toán.`;
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
