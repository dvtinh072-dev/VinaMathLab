import { NextResponse } from "next/server";
import { parseExamText } from "@/lib/examParser";

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
    } else if (fileName.endsWith(".txt") || fileName.endsWith(".md")) {
      extractedText = buffer.toString("utf-8");
    } else {
      return NextResponse.json(
        { success: false, error: "Định dạng file không được hỗ trợ. Vui lòng tải file Word (.docx) hoặc Text (.txt)" },
        { status: 400 }
      );
    }

    if (!extractedText.trim()) {
      return NextResponse.json(
        { success: false, error: "File rỗng hoặc không có nội dung văn bản" },
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
