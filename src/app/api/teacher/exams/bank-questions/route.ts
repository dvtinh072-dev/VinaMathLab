import { NextResponse } from "next/server";
import { getChapterQuestions, getQuestionBankCatalog } from "@/lib/questionBankService";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const gradeNumber = Number(searchParams.get("gradeNumber")) || 10;
    const chapterId = searchParams.get("chapterId") || "";

    const catalog = getQuestionBankCatalog(gradeNumber);
    if (!catalog) {
      return NextResponse.json(
        { success: false, error: `Chưa có dữ liệu ngân hàng câu hỏi cho Khối ${gradeNumber}` },
        { status: 404 }
      );
    }

    // Nếu không truyền chapterId, lấy chương đầu tiên
    const targetChapter = chapterId
      ? catalog.chapters.find((c) => c.chapterId === chapterId || c.fileKey === chapterId)
      : catalog.chapters[0];

    if (!targetChapter) {
      return NextResponse.json(
        { success: false, error: `Không tìm thấy chương ${chapterId}` },
        { status: 404 }
      );
    }

    const questions = getChapterQuestions(gradeNumber, targetChapter.fileKey);

    return NextResponse.json({
      success: true,
      chapter: targetChapter,
      total: questions.length,
      questions,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi lấy câu hỏi từ ngân hàng đề" },
      { status: 500 }
    );
  }
}
