import { NextResponse } from "next/server";
import { saveExamSubmission, getSubmissionsByExamId } from "@/lib/customExamsStore";
import { StudentExamSubmission } from "@/types/customExam";

export const dynamic = "force-dynamic";

interface Props {
  params: {
    id: string;
  };
}

export async function POST(request: Request, { params }: Props) {
  try {
    const { id: examId } = params;
    const body = await request.json();

    const {
      studentName,
      studentClass,
      studentUsername,
      score,
      scorePart1,
      scorePart2,
      scorePart3,
      totalQuestions,
      correctCount,
      timeSpentSeconds,
      blurCount,
      blurEvents,
      mcAnswers,
      tfAnswers,
      saAnswers,
      essayFiles,
    } = body;

    if (!studentName || !studentClass) {
      return NextResponse.json(
        { success: false, error: "Họ và tên hoặc Lớp của học sinh không được để trống" },
        { status: 400 }
      );
    }

    const submission: StudentExamSubmission = {
      id: `sub-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      examId,
      studentName: studentName.trim(),
      studentClass: studentClass.trim(),
      studentUsername: studentUsername?.trim() || "",
      score: Number(score) || 0,
      scorePart1: Number(scorePart1) || 0,
      scorePart2: Number(scorePart2) || 0,
      scorePart3: Number(scorePart3) || 0,
      totalQuestions: Number(totalQuestions) || 0,
      correctCount: Number(correctCount) || 0,
      timeSpentSeconds: Number(timeSpentSeconds) || 0,
      blurCount: Number(blurCount) || 0,
      blurEvents: blurEvents || [],
      submittedAt: new Date().toISOString(),
      mcAnswers: mcAnswers || {},
      tfAnswers: tfAnswers || {},
      saAnswers: saAnswers || {},
      essayFiles: Array.isArray(essayFiles) ? essayFiles : [],
    };

    saveExamSubmission(submission);

    return NextResponse.json({
      success: true,
      submission,
      message: "Đã nộp bài thành công!",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi xử lý nộp bài thi" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request, { params }: Props) {
  try {
    const { id: examId } = params;
    const submissions = getSubmissionsByExamId(examId);

    return NextResponse.json({
      success: true,
      submissions,
      totalSubmissions: submissions.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi lấy danh sách bài nộp" },
      { status: 500 }
    );
  }
}
