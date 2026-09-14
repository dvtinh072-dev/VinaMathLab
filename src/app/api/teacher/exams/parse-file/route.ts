import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { parseExamText } from "@/lib/examParser";
import { getAiConfiguration } from "@/lib/geminiChatService";

export const dynamic = "force-dynamic";

/**
 * Trích xuất text từ HTML (bảo toàn cấu trúc bảng table: mỗi <tr> thành 1 dòng, các ô <td>/<th> phân cách bằng \t)
 */
function extractTextFromHtml(html: string): string {
  // 1. Loại bỏ các thẻ style và script
  let cleanHtml = html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");

  // 2. Bảo toàn hàng trong bảng: mỗi <tr> thành 1 dòng, các ô phân cách bằng \t
  cleanHtml = cleanHtml.replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, (_, trContent) => {
    const cells: string[] = [];
    const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
    let cellMatch: RegExpExecArray | null;
    while ((cellMatch = cellRegex.exec(trContent)) !== null) {
      const cellText = cellMatch[1]
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;/gi, "'")
        .replace(/\s+/g, " ")
        .trim();
      cells.push(cellText);
    }
    return cells.join("\t") + "\n";
  });

  // 3. Xử lý các thẻ còn lại ngoài bảng
  const text = cleanHtml
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h\d)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");

  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .join("\n");
}

/**
 * Trích xuất text từ file Excel (.xlsx, .xls)
 */
function extractTextFromExcel(buffer: Buffer): string {
  try {
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const allCsvs: string[] = [];
    for (const name of workbook.SheetNames) {
      const sheet = workbook.Sheets[name];
      if (sheet) {
        const csv = XLSX.utils.sheet_to_csv(sheet, { FS: "\t" });
        if (csv.trim()) {
          allCsvs.push(csv.trim());
        }
      }
    }
    return allCsvs.join("\n\n");
  } catch (e: any) {
    console.warn("Lỗi đọc file Excel qua XLSX:", e?.message);
    return "";
  }
}

/**
 * Trích xuất text từ file Word .doc (cả HTML-based doc và binary doc)
 */
function extractTextFromDoc(buffer: Buffer): string {
  // 1. Kiểm tra xem có phải file HTML-based doc không
  const utf8Str = buffer.toString("utf-8");
  if (
    utf8Str.includes("<html") ||
    utf8Str.includes("<table") ||
    utf8Str.includes("<body") ||
    utf8Str.includes("xmlns:w") ||
    utf8Str.includes("xmlns:o")
  ) {
    return extractTextFromHtml(utf8Str);
  }

  // 2. Binary Word 97-2003: trích xuất chuỗi có nghĩa
  const latin1 = buffer.toString("latin1");
  if (latin1.includes("<html") || latin1.includes("<table")) {
    return extractTextFromHtml(latin1);
  }

  // Lấy các chuỗi ký tự in được (printable characters)
  const printable = buffer
    .toString("utf-8")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (printable.length > 50) {
    return printable;
  }

  return "";
}

/**
 * Trích xuất text từ file Word .docx
 */
async function extractTextFromDocx(buffer: Buffer): Promise<string> {
  // Kiểm tra nếu buffer thực chất là HTML được lưu với đuôi .docx
  const startStr = buffer.slice(0, 200).toString("utf-8");
  if (startStr.includes("<html") || startStr.includes("<table") || startStr.includes("<xml")) {
    return extractTextFromHtml(buffer.toString("utf-8"));
  }

  try {
    const mammoth = await import("mammoth");

    // Thử convert sang HTML trước để giữ trọn vẹn cấu trúc bảng (table rows)
    const htmlResult = await mammoth.convertToHtml({ buffer });
    if (htmlResult.value && htmlResult.value.includes("<table")) {
      const fromHtml = extractTextFromHtml(htmlResult.value);
      if (fromHtml.trim().length > 30) {
        return fromHtml;
      }
    }

    // Lấy raw text
    const mammothRes = await mammoth.extractRawText({ buffer });
    if (mammothRes.value && mammothRes.value.trim().length > 0) {
      return mammothRes.value;
    }

    if (htmlResult.value && htmlResult.value.trim().length > 0) {
      return extractTextFromHtml(htmlResult.value);
    }
  } catch (e: any) {
    console.warn("Lỗi đọc docx bằng mammoth:", e?.message);
  }

  return "";
}

/**
 * Trích xuất text từ file PDF
 */
async function extractTextFromPdf(buffer: Buffer): Promise<string> {
  let extractedText = "";

  // 1. Thử dùng pdf-parse
  try {
    const { PDFParse } = await import("pdf-parse");
    const parser = new PDFParse({ data: buffer });
    const pdfRes = await parser.getText();
    const anyRes = pdfRes as any;
    if (anyRes) {
      if (typeof anyRes.text === "string" && anyRes.text.trim()) {
        extractedText = anyRes.text.trim();
      } else if (anyRes.pages && Array.isArray(anyRes.pages)) {
        extractedText = anyRes.pages.map((p: any) => p.text || "").join("\n\n").trim();
      } else if (typeof anyRes === "string") {
        extractedText = anyRes.trim();
      }
    }
    await parser.destroy();
  } catch (pdfErr: any) {
    console.warn("Lỗi đọc PDF bằng pdf-parse:", pdfErr?.message);
  }

  // 2. Fallback stream decompression nếu pdf-parse trả về rỗng
  if (!extractedText || extractedText.trim().length < 40) {
    try {
      const zlib = await import("zlib");
      const content = buffer.toString("latin1");
      const streamRegex = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
      let match: RegExpExecArray | null;
      const streamTexts: string[] = [];

      while ((match = streamRegex.exec(content)) !== null) {
        const rawStream = Buffer.from(match[1], "latin1");
        let uncompressed: Buffer | null = null;
        try {
          uncompressed = zlib.inflateSync(rawStream);
        } catch {
          try {
            uncompressed = zlib.inflateRawSync(rawStream);
          } catch {
            uncompressed = rawStream;
          }
        }
        if (uncompressed) {
          const str = uncompressed.toString("utf-8");
          const textMatches = str.match(/\((.*?)\)\s*(?:Tj|'|")/g);
          if (textMatches) {
            const row = textMatches
              .map((m) => m.replace(/^\(|\)\s*(?:Tj|'|")$/g, ""))
              .join(" ")
              .trim();
            if (row.length > 2) streamTexts.push(row);
          }
        }
      }
      if (streamTexts.length > 0) {
        extractedText = streamTexts.join("\n");
      }
    } catch (streamErr: any) {
      console.warn("Lỗi fallback decompress PDF:", streamErr?.message);
    }
  }

  // 3. Fallback Gemini Vision nếu file scan và có API Key
  if (!extractedText || extractedText.trim().length < 60) {
    const aiConfig = await getAiConfiguration();
    if (aiConfig.geminiApiKey) {
      try {
        const aiText = await ocrWithGemini(buffer, "application/pdf", aiConfig.geminiApiKey);
        if (aiText) extractedText = aiText;
      } catch (ocrErr: any) {
        console.warn("Lỗi Gemini OCR PDF:", ocrErr?.message);
      }
    }
  }

  return extractedText;
}

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
      extractedText = await extractTextFromDocx(buffer);
    }
    // 2. File Word (.doc)
    else if (fileName.endsWith(".doc")) {
      extractedText = extractTextFromDoc(buffer);
    }
    // 3. File Excel (.xlsx, .xls)
    else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
      extractedText = extractTextFromExcel(buffer);
    }
    // 4. File CSV / TSV (.csv, .tsv)
    else if (fileName.endsWith(".csv") || fileName.endsWith(".tsv")) {
      let str = buffer.toString("utf-8").replace(/^\uFEFF/, "");
      if (str.includes("\x00")) {
        str = buffer.toString("utf16le");
      }
      extractedText = str;
    }
    // 5. File Text / Markdown (.txt, .md)
    else if (fileName.endsWith(".txt") || fileName.endsWith(".md")) {
      extractedText = buffer.toString("utf-8").replace(/^\uFEFF/, "");
    }
    // 6. File PDF (.pdf)
    else if (fileName.endsWith(".pdf")) {
      extractedText = await extractTextFromPdf(buffer);
    }
    // 7. File Ảnh (.jpg, .jpeg, .png, .webp, .bmp)
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
              "Để nhận diện đề thi từ file ảnh chụp (OCR hình ảnh), hệ thống cần cấu hình Gemini API Key. Thầy/Cô vui lòng cấu hình API Key trong mục Quản trị hệ thống hoặc tải lên file Word (.doc, .docx), Excel (.xlsx, .csv), PDF hoặc Text (.txt).",
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
    }
    // 8. Fallback định dạng văn bản bất kỳ
    else {
      const fallbackStr = buffer.toString("utf-8").replace(/^\uFEFF/, "").trim();
      if (fallbackStr.length > 20) {
        extractedText = fallbackStr;
      } else {
        return NextResponse.json(
          {
            success: false,
            error:
              "Định dạng file không được hỗ trợ. Vui lòng tải file Word (.doc, .docx), Excel (.xlsx, .csv), PDF (.pdf), File Ảnh (.jpg, .png) hoặc Text (.txt)",
          },
          { status: 400 }
        );
      }
    }

    if (!extractedText.trim()) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Không tìm thấy nội dung văn bản trong file đã tải lên. Nếu đây là file ảnh scan hoặc PDF hình chụp, vui lòng cấu hình Gemini API Key để nhận diện (OCR), hoặc dùng file Word (.doc, .docx), Excel (.xlsx, .csv) hoặc Text (.txt).",
        },
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
