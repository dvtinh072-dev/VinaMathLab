import { NextResponse } from "next/server";
import { drawExamFromBank } from "@/lib/questionBankService";
import { DrawExamConfig } from "@/types/questionBank";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const config: DrawExamConfig = body;

    if (!config || !config.gradeNumber) {
      return NextResponse.json(
        { success: false, error: "Thiếu thông tin cấu hình rút đề" },
        { status: 400 }
      );
    }

    const result = drawExamFromBank(config);

    return NextResponse.json({
      success: true,
      exam: result.exam,
      stats: result.stats,
      warnings: result.warnings,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi rút đề từ ngân hàng" },
      { status: 500 }
    );
  }
}
