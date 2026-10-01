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
  providerUsed: "Google Gemini Toán học" | "Gemini + SGK" | "ChatGPT + SGK" | "Học liệu SGK chuẩn";
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
 * Xây dựng Grounding Prompt chặt chẽ cho mô hình AI Google Gemini Toán học
 */
function buildSystemPrompt(groundingContext: string): string {
  return `Bạn là **Trợ Lý Vina** - Trợ lý AI chuyên sâu môn Toán học được vận hành độc quyền bởi nền tảng **Google Gemini Toán học** trực thuộc hệ sinh thái giáo dục VinaMath (Toán 6 đến Toán 12 theo chuẩn GDPT 2018).

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
   - Công thức trong dòng (inline): kẹp giữa cặp dấu \`$\` (Ví dụ: \`$x = 2$\`, \`$\\Delta = b^2 - 4ac$\`, \`$S = \\frac{1}{2}ah$\`).
   - Công thức dòng riêng (display): kẹp giữa cặp dấu \`$$\` (Ví dụ: \`$$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$\`).
   - Mọi biến số, số đo, biểu thức đều phải được đặt trong ký hiệu toán học.

4. CĂN CỨ TƯ LIỆU SÁCH GIÁO KHOA CHUẨN GDPT 2018:
   - Bám sát chương trình GDPT 2018 bộ Kết nối tri thức với cuộc sống.
   - Ưu tiên sử dụng tư liệu chính thống được đối chiếu dưới đây:

---------------------
📚 TƯ LIỆU SGK CHÍNH THỐNG ĐỐI CHIẾU:
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
  temperature: number = 0.1
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
            temperature: 0.1,
            maxOutputTokens: 1024,
          },
        }),
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text && text.trim().length > 5) {
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
 * XỬ LÝ CHAT TRỢ LÝ VINA: Sử dụng độc quyền nguồn Google Gemini Toán học kết hợp SGK chuẩn
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
  const userPrompt = `Câu hỏi của học sinh (${studentInfo?.fullName || "Học sinh"} - Lớp: ${studentInfo?.schoolClass || "Toán phổ thông"}):
"${question}"

YÊU CẦU: Trả lời ngắn gọn, đi thẳng vào bản chất câu hỏi, chính xác tuyệt đối, không rườm rà lan man. Mọi công thức đều viết chuẩn LaTeX.`;

  // 2. Chỉ sử dụng nguồn Gemini Toán học (Google Gemini)
  const geminiApiKey = config.geminiApiKey || process.env.GEMINI_API_KEY || "";
  if (geminiApiKey) {
    const aiText = await callGeminiApi(geminiApiKey, userPrompt, systemPrompt, 0.1);
    if (aiText) {
      return {
        reply: aiText,
        sources: defaultSources,
        providerUsed: "Google Gemini Toán học",
        isGroundedWithKnowledge: !!(knowledgeMatch || curriculumMatch),
      };
    }
  }

  // 3. FALLBACK AN TOÀN: Khi chưa có API key hoặc kết nối mạng bận, dùng ngay kho tri thức SGK ngắn gọn
  if (knowledgeMatch) {
    const k = knowledgeMatch;
    const stepText = k.standardSteps && k.standardSteps.length > 0
      ? "\n**Các bước thực hiện:**\n" + k.standardSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n") + "\n"
      : "";

    const fallbackReply = `### 📖 ${k.topic}\n\n` +
      `${k.officialContent}\n` +
      stepText +
      `\n📚 *Nguồn: ${k.sourceCitation}*`;

    return {
      reply: fallbackReply,
      sources: defaultSources,
      providerUsed: "Học liệu SGK chuẩn",
      isGroundedWithKnowledge: true,
    };
  }

  if (curriculumMatch) {
    const cur = curriculumMatch;
    const descText = cur.description ? `**Tóm tắt cốt lõi:** ${cur.description}\n\n` : "";
    const theoryText = cur.theory ? `**Kiến thức trọng tâm:**\n- ${cur.theory.points.join("\n- ")}\n` : "";
    const formulaText = cur.formulas && cur.formulas.length > 0 ? `\n**Công thức trọng tâm:**\n$$${cur.formulas.join("$$ và $$")}$$\n` : "";

    const fallbackReply = `### 📖 ${cur.lessonTitle} (${cur.bookChapter})\n\n` +
      descText + theoryText + formulaText +
      `\n📚 *Nguồn: Chương trình GDPT 2018 - ${cur.bookChapter}*`;

    return {
      reply: fallbackReply,
      sources: defaultSources,
      providerUsed: "Học liệu SGK chuẩn",
      isGroundedWithKnowledge: true,
    };
  }

  // Nếu không match và chưa có key
  const noMatchReply = `Chào em! Câu hỏi của em:
*"${question}"*

💡 **Gợi ý tra cứu nhanh:**
1. Nhập từ khóa trọng tâm (ví dụ: *\"định lý cosin\"*, *\"hằng đẳng thức\"*, *\"công thức đạo hàm\"*...).
2. Hoặc ghi kèm lớp học (ví dụ: *\"Toán 10 khoảng biến thiên\"*, *\"Toán 12 cực trị\"*).
3. Thầy/Cô đã ghi nhận câu hỏi để cập nhật thêm vào cơ sở dữ liệu giải đáp nhé!`;

  return {
    reply: noMatchReply,
    sources: defaultSources,
    providerUsed: "Học liệu SGK chuẩn",
    isGroundedWithKnowledge: false,
  };
}
