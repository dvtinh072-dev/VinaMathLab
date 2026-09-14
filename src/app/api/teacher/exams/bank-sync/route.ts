import { NextResponse } from "next/server";
import { getQuestionBankCatalog } from "@/lib/questionBankService";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const gradeNumber = Number(searchParams.get("gradeNumber")) || 10;

    const catalog = getQuestionBankCatalog(gradeNumber);

    return NextResponse.json({
      success: true,
      message: `Ngân hàng đề Khối ${gradeNumber} đã sẵn sàng với ${catalog?.totalQuestions || 0} câu hỏi độc lập.`,
      totalQuestions: catalog?.totalQuestions || 0,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi đồng bộ ngân hàng câu hỏi" },
      { status: 500 }
    );
  }
}
