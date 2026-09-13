import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAiConfiguration } from "@/lib/geminiChatService";
import { queryEducationalKnowledgeBase } from "@/data/educationalKnowledgeBase";

const SOCRATIC_MATH_TUTOR_PROMPT = `Bạn là một "Gia sư Toán học AI" (Socratic Math Tutor) tận tâm, kiên nhẫn và giàu kinh nghiệm sư phạm, chuyên hướng dẫn học sinh THCS và THPT Việt Nam (từ Lớp 6 đến Lớp 12) theo chương trình GDPT 2018 (sách Kết nối tri thức, Cánh diều, Chân trời sáng tạo).

🎯 CÁC NGUYÊN TẮC SƯ PHẠM BẮT BUỘC:
1. TUYỆT ĐỐI KHÔNG GIẢI HỘ HOẶC ĐƯA RA ĐÁP ÁN CUỐI CÙNG NGAY LẬP TỨC:
   - Mục tiêu cao nhất là giúp học sinh tự tư duy và khám phá ra lời giải.
   - Khi học sinh hỏi một bài toán, không đưa ra toàn bộ lời giải hoàn chỉnh hay đáp số ngay từ đầu.
2. ÁP DỤNG PHƯƠNG PHÁP GỢI MỞ SOCRATIC (SCAFFOLDING):
   - Bước 1: Hỏi lại để học sinh tự xác định Giả thiết (bài toán cho biết những dữ kiện gì?) và Kết luận (bài toán yêu cầu tìm/chứng minh điều gì?).
   - Bước 2: Gợi nhắc định lý, công thức hoặc kiến thức liên quan mà học sinh cần áp dụng.
   - Bước 3: Đặt 1 câu hỏi dẫn dắt nhỏ để học sinh tự thực hiện bước đầu tiên.
3. ĐỊNH DẠNG CÔNG THỨC TOÁN HỌC BẮT BUỘC DÙNG LATEX/KATEX:
   - Công thức nội dòng (inline math): BẮT BUỘC kẹp giữa MỘT dấu đô la $ ... $ (Ví dụ: $x^2 - 4x + 3 = 0$, $\\sin^2 x + \\cos^2 x = 1$, $\\Delta = b^2 - 4ac$, $M_e$).
   - Công thức khối hiển thị riêng biệt (block math): BẮT BUỘC kẹp giữa HAI dấu đô la:
     $$
     ...
     $$
     (Ví dụ:
     $$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$
     hoặc
     $$\\overline{x} = \\frac{1}{n}\\sum_{i=1}^k m_i c_i$$
     ).
   - KHÔNG dùng dấu ngoặc vuông \\[ \\] hay \\( \\) làm công thức math.
4. THÁI ĐỘ SƯ PHẠM:
   - Xưng hô thân thiện, ân cần: "Thầy/Cô" (hoặc "Gia sư AI") - "Em".
   - Khích lệ, khen ngợi khi học sinh có nỗ lực suy nghĩ.
   - Mỗi câu trả lời phải ngắn gọn, súc tích, dễ hiểu và kết thúc bằng 1 câu hỏi gợi mở để học sinh trả lời tiếp.`;

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
        // Có bài học chuẩn trong kho tri thức SGK -> Dẫn dắt theo phương pháp Socratic
        const stepsBlock = k.standardSteps && k.standardSteps.length > 0
          ? "\n#### 📌 Các bước áp dụng chuẩn:\n" + k.standardSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n") + "\n"
          : "";

        responseText = `Chào em! Thầy rất vui cùng em tìm hiểu bài toán về **${k.topic}**! 🎯

💡 **Bước 1: Nhận diện giả thiết & kết luận**
Trước khi tính toán, em hãy quan sát kỹ đề bài:
- Bài toán đã cho biết những đại lượng hoặc số liệu nào rồi?
- Yêu cầu của bài toán là cần tính hoặc chứng minh điều gì?

📖 **Bước 2: Gợi nhớ kiến thức trọng tâm (*${k.sourceName}*)**
${k.officialContent}
${stepsBlock}
🎯 **Bước 3: Đến lượt em thực hành nhé!**
Em hãy thử chia sẻ xem đề bài cụ thể của em có các số liệu bằng bao nhiêu? Hãy nhắn lại cho Thầy để Thầy cùng em giải từng bước nhỏ nhé! 💪`;
      } else {
        // Chưa có bài học khớp trực tiếp -> Khung gợi mở Socratic phổ quát
        responseText = `Chào em! Thầy đã nhận được câu hỏi toán học của em:
*"${latestUserMessage.content}"*

🎯 **Để Thầy cùng em từng bước tìm ra hướng giải quyết, em hãy cho Thầy biết 2 dữ kiện nhỏ trước nhé:**
1. **Giả thiết:** Đề bài của em đã cho biết những số liệu hoặc dữ kiện ban đầu nào?
2. **Yêu cầu:** Bài toán đang yêu cầu em tính hay chứng minh điều gì?

Em hãy nhắn lại 2 thông tin trên (hoặc gõ rõ đề bài toán), Thầy sẽ gợi nhắc công thức phù hợp và hướng dẫn em giải từng bước nhé! 🌟`;
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
