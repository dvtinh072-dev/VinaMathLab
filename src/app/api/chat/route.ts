import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAiConfiguration } from "@/lib/geminiChatService";
import { queryEducationalKnowledgeBase } from "@/data/educationalKnowledgeBase";

const MATH_TUTOR_PROMPT = `
Bạn là Trợ lý Hướng dẫn Giải Toán chuyên nghiệp, súc tích, đi thẳng vào trọng tâm.

MỤC TIÊU: Giúp học sinh tự làm được bài toán của mình bằng cách quan sát một VÍ DỤ MẪU TƯƠNG TỰ.

CÁC NGUYÊN TẮC BẮT BUỘC (VI PHẠM LÀ LỖI NGHIÊM TRỌNG):
1. TUYỆT ĐỐI KHÔNG giải bài toán gốc của học sinh. Không đưa ra đáp số, không tính toán hộ trên các con số của đề bài học sinh đưa.
2. TUYỆT ĐỐI CẤM hỏi ngược lại học sinh (Nghiêm cấm các câu như: "Em có biết...?", "Đề bài cho gì nào?", "Em hãy thử tính...", "Em có hiểu không?"). Không chào hỏi vòng vo, đi thẳng vào cấu trúc trả lời.
3. KHÔNG dài dòng, không triết lý, không giải thích rườm rà.
4. LUÔN TRẢ LỜI ĐÚNG THEO KHUNG 3 PHẦN DƯỚI ĐÂY:

1. Phương pháp giải
(Liệt kê ngắn gọn 2 đến 3 bước cốt lõi hoặc công thức cần dùng bằng LaTeX).

💡 2. Ví dụ tương tự (Đọc kỹ để làm theo)
- Đề bài mẫu: (Tự tạo một bài toán cùng dạng y hệt bài của học sinh nhưng ĐỔI TOÀN BỘ SỐ LIỆU).
- Lời giải chi tiết: (Giải từng bước cặn kẽ bài toán mẫu này bằng công thức LaTeX chuẩn, có kết quả rõ ràng để học sinh bắt chước từng thao tác).

🚀 3. Gợi ý áp dụng cho bài của em
(Chỉ ra 1 câu ngắn: xác định các hệ số tương ứng trong bài của học sinh để các em tự thế số vào làm y hệt ví dụ trên).

QUY TẮC LATEX:
Mọi công thức, ký hiệu toán, biến số đều phải kẹp trong dấu $...$ (nội dòng) hoặc $$...$$ (dòng riêng).
`;

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
            maxOutputTokens: 1000,
          },
        });

        const result = await chat.sendMessage(latestUserMessage.content);
        responseText = result.response.text();
        providerSource = "Gemini 1.5 Flash (Khung 3 phần)";
      } catch (geminiError: any) {
        console.warn("Gemini API call failed, falling back to Socratic SGK Engine:", geminiError?.message);
      }
    }

    // 3. NẾU CHƯA CÓ KEY HOẶC GEMINI GẶP SỰ CỐ: Dùng bộ máy SGK xuất chuẩn khung 3 phần
    if (!responseText) {
      const kbMatchResult = queryEducationalKnowledgeBase(latestUserMessage.content);
      const k = kbMatchResult.match;

      if (k) {
        const stepsText = k.standardSteps && k.standardSteps.length > 0
          ? k.standardSteps.map((s, idx) => `- **Bước ${idx + 1}:** ${s}`).join("\n")
          : "- **Bước 1:** Xác định dữ kiện đã cho và đại lượng cần tìm.\n- **Bước 2:** Đổi về cùng đơn vị đo và áp dụng công thức tương ứng.";

        let deBaiMau = "";
        let loiGiaiMau = "";
        let goiYApDung = "";

        if (k.id === "kb-t6-chu-vi-dien-tich-hinh-phang") {
          deBaiMau = "Tính diện tích một mảnh đất hình chữ nhật có chiều dài $12\\text{ m}$ và chiều rộng $7\\text{ m}$.";
          loiGiaiMau = `- Chiều dài $a = 12\\text{ m}$, chiều rộng $b = 7\\text{ m}$ (đã cùng đơn vị mét).
- Áp dụng công thức diện tích $S = a \\cdot b$:
  $$S = 12 \\cdot 7 = 84\\text{ (m}^2\\text{)}$$`;
          goiYApDung = "Em hãy xác định chiều dài $a$ và chiều rộng $b$ trong bài của mình rồi nhân lại y hệt như ví dụ trên.";
        } else if (k.id === "kb-t10-dinh-ly-cosin") {
          deBaiMau = "Cho tam giác $ABC$ có cạnh $b = 5$, cạnh $c = 8$ và góc $\\widehat{A} = 60^\\circ$. Tính độ dài cạnh $a$.";
          loiGiaiMau = `- Áp dụng Định lý Côsin: $a^2 = b^2 + c^2 - 2bc \\cos A$
- Thay số:
  $$a^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 25 + 64 - 40 = 49$$
- Suy ra: $a = \\sqrt{49} = 7$.`;
          goiYApDung = "Em hãy xác định 2 cạnh và góc kẹp giữa trong bài của mình rồi thế vào công thức $a^2 = b^2 + c^2 - 2bc\\cos A$ để tính.";
        } else if (k.id === "kb-t11-so-trung-binh-ghep-nhom") {
          deBaiMau = "Cho mẫu số liệu ghép nhóm gồm 2 nhóm: $[1; 3)$ có tần số $m_1 = 4$ và $[3; 5)$ có tần số $m_2 = 6$. Tính số trung bình cộng.";
          loiGiaiMau = `- Giá trị đại diện các nhóm: $c_1 = \\frac{1+3}{2} = 2$, $c_2 = \\frac{3+5}{2} = 4$.
- Cỡ mẫu: $n = 4 + 6 = 10$.
- Số trung bình cộng:
  $$\\overline{x} = \\frac{4 \\cdot 2 + 6 \\cdot 4}{10} = \\frac{32}{10} = 3{,}2$$`;
          goiYApDung = "Em hãy tìm giá trị đại diện $c_i$ của từng nhóm rồi lấy tần số $m_i$ nhân với $c_i$ chia cho cỡ mẫu $n$ như ví dụ trên.";
        } else {
          deBaiMau = "Bài toán tương tự dạng của em với các số liệu mẫu.";
          loiGiaiMau = "- Áp dụng công thức ở mục 1 và làm theo các bước hướng dẫn.";
          goiYApDung = "Em hãy xác định các hệ số tương ứng trong bài của mình để tự thế số vào làm y hệt ví dụ trên.";
        }

        responseText = `### 1. Phương pháp giải
${k.officialContent}

${stepsText}

### 💡 2. Ví dụ tương tự (Đọc kỹ để làm theo)
- **Đề bài mẫu:** ${deBaiMau}
- **Lời giải chi tiết:**
${loiGiaiMau}

### 🚀 3. Gợi ý áp dụng cho bài của em
${goiYApDung}`;
      } else {
        responseText = `### 1. Phương pháp giải
- **Bước 1:** Đọc kỹ đề bài để nhận diện dạng toán và các đại lượng đã biết.
- **Bước 2:** Quy đổi các đại lượng về cùng một đơn vị đo thống nhất.
- **Bước 3:** Áp dụng công thức toán học hoặc thiết lập phương trình để giải.

### 💡 2. Ví dụ tương tự (Đọc kỹ để làm theo)
- **Đề bài mẫu:** Tính chu vi hình chữ nhật có chiều dài $6\\text{ cm}$ và chiều rộng $4\\text{ cm}$.
- **Lời giải chi tiết:**
  Áp dụng công thức chu vi $C = (a + b) \\cdot 2$:
  $$C = (6 + 4) \\cdot 2 = 20\\text{ (cm)}$$

### 🚀 3. Gợi ý áp dụng cho bài của em
Em hãy xác định các hệ số tương ứng trong bài của mình để tự thế số vào làm y hệt ví dụ trên.`;
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
