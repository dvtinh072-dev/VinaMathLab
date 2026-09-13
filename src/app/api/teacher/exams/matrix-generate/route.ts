import { NextResponse } from "next/server";
import { generateExamFromMatrix, parseMatrixFromRawText } from "@/lib/matrixExamGenerator";
import { ExamMatrix } from "@/types/examMatrix";
import { getAiConfiguration } from "@/lib/geminiChatService";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { matrix, rawText, gradeNumber } = body;

    let targetMatrix: ExamMatrix;

    if (matrix && matrix.topics && Array.isArray(matrix.topics)) {
      targetMatrix = matrix;
    } else if (rawText) {
      targetMatrix = parseMatrixFromRawText(rawText, Number(gradeNumber) || 10);
    } else {
      return NextResponse.json(
        { success: false, error: "Dữ liệu ma trận không hợp lệ hoặc thiếu thông tin chủ đề" },
        { status: 400 }
      );
    }

    const result = await generateExamFromMatrix(targetMatrix);

    return NextResponse.json({
      success: true,
      exam: result,
      sourceStats: {
        projectCount: result.projectCount,
        aiCount: result.aiCount,
        totalQuestions: result.totalQuestions,
      },
      warnings: result.warnings,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi tạo đề thi từ ma trận" },
      { status: 500 }
    );
  }
}
