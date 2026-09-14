import { NextResponse } from "next/server";
import { getQuestionBankCatalog } from "@/lib/questionBankService";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const gradeNumber = Number(searchParams.get("gradeNumber")) || 10;

    const catalog = getQuestionBankCatalog(gradeNumber);
    if (!catalog) {
      return NextResponse.json(
        { success: false, error: `Chưa có dữ liệu ngân hàng câu hỏi cho Khối ${gradeNumber}` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      catalog,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi lấy thống kê ngân hàng đề" },
      { status: 500 }
    );
  }
}
