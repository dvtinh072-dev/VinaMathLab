import { NextResponse } from "next/server";
import { drawExamFromBank } from "@/lib/questionBankService";
import { DrawExamConfig } from "@/types/questionBank";
import { saveCustomExam } from "@/lib/customExamsStore";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || !body.gradeNumber) {
      return NextResponse.json(
        { success: false, error: "Thiếu thông tin cấu hình rút đề" },
        { status: 400 }
      );
    }

    // Chuẩn hóa config để tương thích cả 2 định dạng payload từ client
    const config: DrawExamConfig = {
      title: body.title || `Đề Khảo Sát Toán ${body.gradeNumber} - Rút Từ Ngân Hàng`,
      gradeNumber: Number(body.gradeNumber) || 10,
      targetClass: body.targetClass || `Lớp ${body.gradeNumber}`,
      durationMinutes: Number(body.duration || body.durationMinutes) || 45,
      scopeMode: body.scopeMode || (body.chapterIds && body.chapterIds.length > 0 ? "selected_chapters" : "all"),
      selectedChapterIds: body.selectedChapterIds || body.chapterIds || [],
      counts: {
        multiple_choice: Number(body.counts?.multiple_choice ?? body.counts?.mc ?? 12),
        true_false: Number(body.counts?.true_false ?? body.counts?.tf ?? 4),
        short_answer: Number(body.counts?.short_answer ?? body.counts?.sa ?? 6),
        essay: Number(body.counts?.essay ?? 0),
      },
      levelDistribution: {
        NB: Number(body.levelDistribution?.NB ?? body.levels?.NB ?? 40),
        TH: Number(body.levelDistribution?.TH ?? body.levels?.TH ?? 30),
        VD: Number(body.levelDistribution?.VD ?? body.levels?.VD ?? 20),
        VDC: Number(body.levelDistribution?.VDC ?? body.levels?.VDC ?? 10),
      },
    };

    const result = drawExamFromBank(config);

    // Lưu đề thi vào kho lưu trữ server (customTeacherExams) để học sinh và giáo viên truy cập qua URL
    try {
      saveCustomExam(result.exam);
    } catch (saveErr) {
      console.warn("Could not persist drawn exam to server file:", saveErr);
    }

    return NextResponse.json({
      success: true,
      exam: result.exam,
      stats: result.stats,
      warnings: result.warnings,
    });
  } catch (error: any) {
    console.error("Error drawing exam from bank:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi rút đề từ ngân hàng" },
      { status: 500 }
    );
  }
}

