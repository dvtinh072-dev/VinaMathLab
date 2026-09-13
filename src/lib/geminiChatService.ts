import { KnowledgeItem } from "@/data/educationalKnowledgeBase";
import { supabase } from "@/lib/supabaseClient";

export interface AiConfig {
  geminiApiKey?: string;
  openaiApiKey?: string;
  provider: "gemini" | "openai" | "internal";
  temperature?: number;
}

export interface HybridChatInput {
  question: string;
  knowledgeMatch?: KnowledgeItem | null;
  curriculumMatch?: any;
  studentInfo?: {
    userId?: string;
    studentCode?: string;
    username?: string;
    fullName?: string;
    schoolClass?: string;
  };
}

export interface HybridChatOutput {
  reply: string;
  sources: { title: string; citation: string; url?: string }[];
  providerUsed: "Gemini + SGK" | "ChatGPT + SGK" | "Học liệu SGK chuẩn";
  isGroundedWithKnowledge: boolean;
}

/**
 * Đọc cấu hình AI từ Supabase hoặc biến môi trường
 */
export async function getAiConfiguration(): Promise<AiConfig> {
  const envGemini = process.env.GEMINI_API_KEY || "";
  const envOpenai = process.env.OPENAI_API_KEY || "";

  try {
    const { data, error } = await supabase
      .from("users")
      .select("school_class")
      .eq("id", "system_ai_config")
      .single();

    if (!error && data && data.school_class) {
      const parsed = JSON.parse(data.school_class);
      return {
        geminiApiKey: parsed.geminiApiKey || envGemini,
        openaiApiKey: parsed.openaiApiKey || envOpenai,
        provider: parsed.provider || (envGemini ? "gemini" : envOpenai ? "openai" : "internal"),
        temperature: parsed.temperature ?? 0.3,
      };
    }
  } catch (err) {
    console.warn("Lỗi đọc cấu hình AI từ Supabase:", err);
  }

  return {
    geminiApiKey: envGemini,
    openaiApiKey: envOpenai,
    provider: envGemini ? "gemini" : envOpenai ? "openai" : "internal",
    temperature: 0.3,
  };
}

/**
 * Lưu cấu hình AI vào Supabase
 */
export async function saveAiConfiguration(config: Partial<AiConfig>): Promise<boolean> {
  try {
    const current = await getAiConfiguration();
    const updated = {
      ...current,
      ...config,
    };

    const { error } = await supabase.from("users").upsert({
      id: "system_ai_config",
      username: "system_ai_config",
      role: "system",
      full_name: "AI Configuration Storage",
      password_hash: "system_config_hash",
      school_class: JSON.stringify(updated),
    });

    return !error;
  } catch (err) {
    console.error("Lỗi lưu cấu hình AI:", err);
    return false;
  }
}

/**
 * Xây dựng Grounding Prompt chặt chẽ cho mô hình AI
 */
function buildSystemPrompt(groundingContext: string): string {
  return `Bạn là **Trợ Lý Vina** - Chuyên gia Sư phạm Toán học trực thuộc dự án VinaMath.
Sứ mệnh của bạn là tra cứu phương pháp, công thức và hỗ trợ học sinh Việt Nam học Toán từ Lớp 6 đến Lớp 12 một cách chuẩn mực, dễ hiểu và truyền cảm hứng.

⚠️ **CÁC NGUYÊN TẮC BẮT BUỘC ĐỂ KIỂM SOÁT TÍNH CHÍNH XÁC:**
1. **CHUẨN CHƯƠNG TRÌNH:** Bám sát 100% Chương trình Giáo dục Phổ thông 2018 và bộ SGK Kết nối tri thức với cuộc sống của Bộ Giáo dục và Đào tạo Việt Nam.
2. **CĂN CỨ TÀI LIỆU CHÍNH THỐNG (GROUNDING):** Bạn PHẢI ưu tiên sử dụng tri thức trong phần "TƯ LIỆU SÁCH GIÁO KHOA CHÍNH THỐNG" dưới đây. Tuyệt đối không bịa đặt công thức, không dùng định nghĩa sai lệch so với chương trình phổ thông.
3. **CÔNG THỨC TOÁN HỌC:** Mọi biến số, biểu thức, công thức toán học PHẢI được viết chuẩn bằng LaTeX:
   - Viết trong dòng (inline): dùng cặp dấu \`$\` (ví dụ: \`$a^2 = b^2 + c^2 - 2bc \\cos A$\`, \`$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$\`).
   - Viết tách khối (display): dùng cặp dấu \`$$\` (ví dụ: \`$$\\frac{a}{\\sin A} = 2R$$\`).
4. **VĂN PHONG SƯ PHẠM:**
   - Trình bày mạch lạc: Phương pháp -> Công thức toán học -> Các bước giải chi tiết, rõ ràng có đáp số chuẩn xác.
   - Đi thẳng vào trọng tâm câu hỏi, không dài dòng triết lý hay rào đón khách sáo.
5. **TRÍCH DẪN NGUỒN:** Ở cuối câu trả lời, luôn có một dòng ngắn gọn trích dẫn nguồn SGK theo tài liệu đối chiếu.

---------------------
📚 **TƯ LIỆU SÁCH GIÁO KHOA CHÍNH THỐNG ĐỐI CHIẾU:**
${groundingContext}
---------------------`;
}

/**
 * Gọi Gemini API thông qua REST API chính thức
 */
async function callGeminiApi(
  apiKey: string,
  prompt: string,
  systemInstruction: string,
  temperature: number = 0.2
): Promise<string | null> {
  const models = ["gemini-2.0-flash", "gemini-1.5-flash"];
  
  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 9000); // 9s timeout

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: temperature,
            maxOutputTokens: 2048,
          },
        }),
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text && text.trim().length > 10) {
          return text.trim();
        }
      } else {
        console.warn(`Gemini API model ${model} trả về lỗi HTTP:`, res.status);
      }
    } catch (e: any) {
      console.warn(`Lỗi khi gọi Gemini model ${model}:`, e.message);
    }
  }

  return null;
}

/**
 * Gọi OpenAI API (ChatGPT)
 */
async function callOpenAiApi(
  apiKey: string,
  prompt: string,
  systemInstruction: string,
  temperature: number = 0.3
): Promise<string | null> {
  try {
    const url = "https://api.openai.com/v1/chat/completions";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemInstruction },
          { role: "user", content: prompt },
        ],
        temperature: temperature,
        max_tokens: 2048,
      }),
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const text = data.choices?.[0]?.message?.content;
      if (text && text.trim().length > 10) {
        return text.trim();
      }
    }
  } catch (e: any) {
    console.warn("Lỗi khi gọi OpenAI API:", e.message);
  }

  return null;
}

/**
 * XỬ LÝ CHAT HYBRID: Kết hợp Gemini/ChatGPT với CSDL SGK chuẩn mực
 */
export async function generateHybridAiResponse(
  input: HybridChatInput
): Promise<HybridChatOutput> {
  const { question, knowledgeMatch, curriculumMatch, studentInfo } = input;
  const config = await getAiConfiguration();

  // 1. Chuẩn bị Context dữ liệu chính thống làm Grounding
  let groundingContext = "";
  let defaultSources: { title: string; citation: string; url?: string }[] = [];

  if (knowledgeMatch) {
    groundingContext = `CHỦ ĐỀ: ${knowledgeMatch.topic} (Môn Toán Lớp ${knowledgeMatch.grade})\n` +
      `TÓM TẮT: ${knowledgeMatch.summary}\n` +
      `NỘI DUNG SGK CHUẨN:\n${knowledgeMatch.officialContent}\n` +
      (knowledgeMatch.standardSteps ? `CÁC BƯỚC THỰC HIỆN:\n- ${knowledgeMatch.standardSteps.join("\n- ")}\n` : "") +
      `NGUỒN TRÍCH DẪN: ${knowledgeMatch.sourceName} - ${knowledgeMatch.sourceCitation}`;

    defaultSources = [
      {
        title: knowledgeMatch.sourceName,
        citation: knowledgeMatch.sourceCitation,
        url: knowledgeMatch.sourceUrl,
      },
    ];
  } else if (curriculumMatch) {
    groundingContext = `BÀI HỌC: ${curriculumMatch.lessonTitle} (${curriculumMatch.bookChapter})\n` +
      (curriculumMatch.description ? `MÔ TẢ: ${curriculumMatch.description}\n` : "") +
      (curriculumMatch.theory ? `LÝ THUYẾT:\n- ${curriculumMatch.theory.points?.join("\n- ")}\n` : "") +
      (curriculumMatch.formulas ? `CÔNG THỨC:\n- ${curriculumMatch.formulas.join("\n- ")}\n` : "") +
      `NGUỒN TRÍCH DẪN: SGK Toán Kết Nối Tri Thức Với Cuộc Sống - ${curriculumMatch.bookChapter}`;

    defaultSources = [
      {
        title: `SGK Kết Nối Tri Thức - ${curriculumMatch.bookChapter}`,
        citation: `Chương trình GDPT 2018 môn Toán, bài ${curriculumMatch.lessonTitle}`,
        url: "https://hanhtrangso.nxbgd.vn",
      },
    ];
  } else {
    groundingContext = "Chưa tìm thấy bài học đối chiếu trực tiếp trong kho tri thức nội bộ. Bạn hãy giải đáp dựa trên chương trình Toán phổ thông chuẩn mực của Bộ Giáo dục và Đào tạo Việt Nam.";
    defaultSources = [
      {
        title: "Bộ Giáo Dục và Đào Tạo - Chương trình GDPT 2018",
        citation: "Cổng thông tin điện tử Bộ GD&ĐT: moet.gov.vn & Thư viện sách giáo khoa số",
        url: "https://moet.gov.vn",
      },
    ];
  }

  const systemPrompt = buildSystemPrompt(groundingContext);
  const userPrompt = `Câu hỏi của học sinh (${studentInfo?.fullName || "Học sinh"} - Lớp: ${studentInfo?.schoolClass || "Chưa rõ"}):
"${question}"

Em đang cần hỗ trợ giải đáp toán học. Em hãy giải thích chi tiết, chính xác, định dạng công thức toán học đẹp mắt theo chuẩn KaTeX.`;

  // 2. Thử gọi LLM nếu có cấu hình API Key
  if (config.provider === "gemini" && config.geminiApiKey) {
    const aiText = await callGeminiApi(config.geminiApiKey, userPrompt, systemPrompt, config.temperature);
    if (aiText) {
      return {
        reply: aiText,
        sources: defaultSources,
        providerUsed: "Gemini + SGK",
        isGroundedWithKnowledge: !!(knowledgeMatch || curriculumMatch),
      };
    }
  } else if (config.provider === "openai" && config.openaiApiKey) {
    const aiText = await callOpenAiApi(config.openaiApiKey, userPrompt, systemPrompt, config.temperature);
    if (aiText) {
      return {
        reply: aiText,
        sources: defaultSources,
        providerUsed: "ChatGPT + SGK",
        isGroundedWithKnowledge: !!(knowledgeMatch || curriculumMatch),
      };
    }
  }

  // 3. FALLBACK AN TOÀN TUYỆT ĐỐI: Dùng kho tri thức chuẩn SGK đã biên soạn nếu không dùng LLM hoặc LLM lỗi
  if (knowledgeMatch) {
    const k = knowledgeMatch;
    const stepText = k.standardSteps && k.standardSteps.length > 0
      ? "\n#### 📌 Các bước áp dụng chuẩn:\n" + k.standardSteps.join("\n") + "\n"
      : "";

    const fallbackReply = "Chào em! Dưới đây là kiến thức chuẩn mực về **" + k.topic + "** được trích dẫn từ sách giáo khoa:\n\n" +
      "### 📖 " + k.topic + "\n" +
      k.officialContent + "\n" +
      stepText +
      "\n📚 **Nguồn trích dẫn:** *" + k.sourceCitation + "*";

    return {
      reply: fallbackReply,
      sources: defaultSources,
      providerUsed: "Học liệu SGK chuẩn",
      isGroundedWithKnowledge: true,
    };
  }

  if (curriculumMatch) {
    const cur = curriculumMatch;
    const descText = cur.description ? "**Tóm tắt cốt lõi:** " + cur.description + "\n\n" : "";
    const theoryText = cur.theory ? "**Kiến thức trọng tâm:**\n- " + cur.theory.points.join("\n- ") + "\n" : "";
    const formulaText = cur.formulas && cur.formulas.length > 0 ? "\n**Công thức trọng tâm:**\n$$" + cur.formulas.join("$$ và $$") + "$$\n" : "";

    const fallbackReply = "Chào em! Dưới đây là kiến thức chuẩn của bài học **" + cur.lessonTitle + "** (" + cur.bookChapter + "):\n\n" +
      descText + theoryText + formulaText +
      "\n📚 **Nguồn trích dẫn:** *Chương trình Giáo dục phổ thông 2018 môn Toán - " + cur.bookChapter + "*";

    return {
      reply: fallbackReply,
      sources: defaultSources,
      providerUsed: "Học liệu SGK chuẩn",
      isGroundedWithKnowledge: true,
    };
  }

  // Nếu không match gì cả và không có LLM
  const noMatchReply = "Chào em! Hiện tại hệ thống chưa tìm thấy mục bài học hoặc định lý đối chiếu cho câu hỏi:\n" +
    "*" + question + "*\n\n" +
    "💡 **Gợi ý tra cứu:**\n" +
    "1. Em hãy nhập từ khóa ngắn gọn, đúng trọng tâm (ví dụ: *\"định lý cosin\"*, *\"định lý sin\"*, *\"hằng đẳng thức\"*, *\"căn bậc hai\"*, *\"đạo hàm\"*...).\n" +
    "2. Hoặc ghi kèm lớp học (ví dụ: *\"Toán 10 định lý cosin\"*, *\"Toán 6 dấu hiệu chia hết\"*).\n" +
    "3. Thầy/Cô quản trị đã ghi nhận câu hỏi này trên trang quản trị để kịp thời giải đáp cho em nhé!";

  return {
    reply: noMatchReply,
    sources: defaultSources,
    providerUsed: "Học liệu SGK chuẩn",
    isGroundedWithKnowledge: false,
  };
}
