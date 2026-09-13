import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAiConfiguration } from "@/lib/geminiChatService";

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
    const { messages, message } = body;

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

    // Đọc API Key từ biến môi trường hoặc cấu hình hệ thống
    const systemConfig = await getAiConfiguration();
    const apiKey = process.env.GEMINI_API_KEY || systemConfig.geminiApiKey;

    if (!apiKey) {
      return NextResponse.json({
        reply:
          "Chào em! Hiện tại hệ thống chưa cấu hình biến môi trường `GEMINI_API_KEY`. Thầy/Cô quản trị vui lòng cấu hình API Key trong file `.env.local` hoặc tại trang Quản trị `/admin` để kích hoạt Gia sư Toán học AI nhé!",
      });
    }

    // Khởi tạo Google Generative AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SOCRATIC_MATH_TUTOR_PROMPT,
    });

    // Chuẩn bị lịch sử hội thoại cho Gemini (bỏ qua tin nhắn cuối vì sẽ gửi qua sendMessage)
    const priorMessages = chatHistory.slice(0, -1);
    
    // Đảm bảo cấu trúc role đan xen user -> model -> user...
    const formattedHistory: Array<{ role: "user" | "model"; parts: [{ text: string }] }> = [];
    for (const msg of priorMessages) {
      if (!msg.content || typeof msg.content !== "string") continue;
      formattedHistory.push({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      });
    }

    // Đảm bảo tin nhắn đầu tiên trong history là của user (nếu có history)
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
    const responseText = result.response.text();

    // Đồng bộ nhật ký hỏi đáp lên Supabase Cloud để Thầy/Cô quản trị theo dõi chất lượng
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
            title: "Gia sư Socratic AI (Gemini 1.5 Flash)",
            citation: "Phương pháp Socratic & GDPT 2018 Bộ Giáo dục và Đào tạo",
            url: "https://moet.gov.vn",
          },
        ],
        isAnsweredFromKnowledge: true,
        aiProvider: "Gemini + SGK",
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
    });
  } catch (error: any) {
    console.error("Lỗi Gia sư Toán AI (app/api/chat/route.ts):", error);
    return NextResponse.json(
      {
        reply:
          "Rất tiếc, Gia sư AI đang gặp chút sự cố kết nối với hệ thống AI (" +
          (error?.message || "Lỗi không xác định") +
          "). Em vui lòng thử lại sau ít giây nhé!",
      },
      { status: 200 }
    );
  }
}
