import { NextResponse } from "next/server";
import { parseExamText } from "@/lib/examParser";
import { getAiConfiguration } from "@/lib/geminiChatService";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const gradeNumber = Number(formData.get("gradeNumber")) || 10;

    if (!file) {
      return NextResponse.json({ success: false, error: "Chưa chọn file đề thi" }, { status: 400 });
    }

    const fileName = file.name.toLowerCase();
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let extractedText = "";

    // 1. File Word (.docx)
    if (fileName.endsWith(".docx")) {
      try {
        const mammoth = await import("mammoth");
        const mammothRes = await mammoth.extractRawText({ buffer });
        extractedText = mammothRes.value;
      } catch (e: any) {
        return NextResponse.json(
          { success: false, error: "Không thể đọc file Word (.docx): " + (e?.message || "") },
          { status: 400 }
        );
      }
    }
    // 2. File Text / Markdown (.txt, .md)
    else if (fileName.endsWith(".txt") || fileName.endsWith(".md")) {
      extractedText = buffer.toString("utf-8");
    }
    // 3. File PDF (.pdf)
    else if (fileName.endsWith(".pdf")) {
      try {
        const { PDFParse } = await import("pdf-parse");
        const parser = new PDFParse({ data: buffer });
        const pdfRes = await parser.getText();
        if (pdfRes && pdfRes.pages && Array.isArray(pdfRes.pages)) {
          extractedText = pdfRes.pages.map((p: any) => p.text).join("\n\n");
        } else if (typeof pdfRes === "string") {
          extractedText = pdfRes;
        }
        await parser.destroy();
      } catch (pdfErr: any) {
        console.warn("Lỗi đọc PDF bằng pdf-parse:", pdfErr);
      }

      // Nếu PDF ít chữ hoặc là PDF dạng ảnh scan, thử dùng Gemini Vision nếu có API Key
      if (!extractedText || extractedText.trim().length < 60) {
        const aiConfig = await getAiConfiguration();
        if (aiConfig.geminiApiKey) {
          try {
            const aiText = await ocrWithGemini(buffer, "application/pdf", aiConfig.geminiApiKey);
            if (aiText) extractedText = aiText;
          } catch (ocrErr: any) {
            console.warn("Lỗi Gemini OCR PDF:", ocrErr);
          }
        }
      }
    }
    // 4. File Ảnh (.jpg, .jpeg, .png, .webp, .bmp)
    else if (
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg") ||
      fileName.endsWith(".png") ||
      fileName.endsWith(".webp") ||
      fileName.endsWith(".bmp")
    ) {
      const mimeType = fileName.endsWith(".png")
        ? "image/png"
        : fileName.endsWith(".webp")
        ? "image/webp"
        : "image/jpeg";

      const aiConfig = await getAiConfiguration();
      if (!aiConfig.geminiApiKey) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Để nhận diện đề thi từ file ảnh chụp (OCR hình ảnh), hệ thống cần cấu hình Gemini API Key. Thầy/Cô vui lòng cấu hình API Key trong mục Quản trị hệ thống hoặc tải lên file Word (.docx), PDF hoặc Text (.txt).",
          },
          { status: 400 }
        );
      }

      try {
        extractedText = await ocrWithGemini(buffer, mimeType, aiConfig.geminiApiKey);
      } catch (imgErr: any) {
        return NextResponse.json(
          {
            success: false,
            error: "Lỗi nhận diện hình ảnh qua Gemini AI: " + (imgErr?.message || "Không thể phân tích ảnh"),
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        {
          success: false,
          error:
            "Định dạng file không được hỗ trợ. Vui lòng tải file Word (.docx), PDF (.pdf), File Ảnh (.jpg, .png) hoặc Text (.txt)",
        },
        { status: 400 }
      );
    }

    if (!extractedText.trim()) {
      return NextResponse.json(
        { success: false, error: "Không tìm thấy nội dung văn bản trong file đã tải lên" },
        { status: 400 }
      );
    }

    const parsed = parseExamText(extractedText, gradeNumber);

    return NextResponse.json({
      success: true,
      rawText: extractedText,
      parsed,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi xử lý file đề thi" },
      { status: 500 }
    );
  }
}

/**
 * Sử dụng Gemini Vision để OCR đề thi toán học từ hình ảnh hoặc PDF scan
 */
async function ocrWithGemini(buffer: Buffer, mimeType: string, apiKey: string): Promise<string> {
  const { GoogleGenerativeAI } = await import("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(apiKey);

  const prompt = `Bạn là chuyên gia số hóa đề thi Toán học Việt Nam.
Hãy đọc toàn bộ văn bản và công thức toán học từ tài liệu/hình ảnh đề thi này và chuyển thành văn bản chuẩn theo mẫu sau để hệ thống tự động nhận diện:

ĐỀ KIỂM TRA MÔN TOÁN
Thời gian làm bài: 45 phút

Câu 1: [Nội dung câu hỏi, công thức toán KaTeX như $x^2$, $\\overrightarrow{AB}$]
A. [Phương án A]
B. [Phương án B]
C. [Phương án C]
D. [Phương án D]
Đáp án: A
Lời giải: [Hướng dẫn giải nếu có trên đề hoặc tự giải vắn tắt]

Câu 2: [Nội dung trắc nghiệm đúng sai nếu có]
a) [Ý a] (Đúng hoặc Sai)
b) [Ý b] (Đúng hoặc Sai)
c) [Ý c] (Đúng hoặc Sai)
d) [Ý d] (Đúng hoặc Sai)
Lời giải: [Giải thích]

Câu 3: [Nội dung câu trả lời ngắn nếu có]
Đáp số: [Giá trị số]
Lời giải: [Giải thích]

QUY TẮC BẮT BUỘC:
1. Đọc chính xác 100% câu hỏi và các phương án.
2. Mọi công thức toán phải đặt trong dấu $...$. Vectơ nhiều chữ cái dùng \\overrightarrow{AB}, \\overrightarrow{MN}.
3. Chỉ xuất nội dung đề thi theo mẫu trên, KHÔNG viết lời chào mở đầu hay kết thúc ngoài lề.`;

  const models = ["gemini-2.0-flash", "gemini-1.5-flash"];
  let lastError: any = null;

  for (const modelName of models) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: { temperature: 0.1 },
      });

      const result = await model.generateContent([
        {
          inlineData: {
            data: buffer.toString("base64"),
            mimeType,
          },
        },
        prompt,
      ]);

      const text = result.response.text();
      if (text && text.trim().length > 20) {
        return text.trim();
      }
    } catch (e: any) {
      lastError = e;
      console.warn(`Lỗi gọi model ${modelName} khi OCR:`, e?.message);
    }
  }

  throw lastError || new Error("Không thể trích xuất văn bản từ hình ảnh");
}
