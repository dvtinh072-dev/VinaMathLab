import { NextResponse } from "next/server";
import { getCustomExamById } from "@/lib/customExamsStore";
import { SAMPLE_EXAMS } from "@/data/sampleExams";

export const dynamic = "force-dynamic";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Props) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ success: false, error: "Thiếu ID đề thi" }, { status: 400 });
    }

    // 1. First check teacher custom exams
    const customExam = getCustomExamById(id);
    if (customExam) {
      return NextResponse.json({
        success: true,
        exam: customExam,
      });
    }

    // 2. Fallback check sample exams in system (e.g. t6-gk1, t10-gk1, etc.)
    const sample = SAMPLE_EXAMS[id];
    if (sample) {
      return NextResponse.json({
        success: true,
        exam: {
          ...sample,
          targetClass: "Tất cả các lớp",
          allowReviewAnswers: true,
          antiCheatEnabled: true,
        },
      });
    }

    return NextResponse.json(
      { success: false, error: "Không tìm thấy đề thi này" },
      { status: 404 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi tải đề thi" },
      { status: 500 }
    );
  }
}
