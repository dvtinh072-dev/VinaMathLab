import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PracticeExamResult } from "@/types/practiceExam";

export const dynamic = "force-dynamic";

const practiceFilePath = path.join(
  process.cwd(),
  "src/data/studentPracticeExamResults.json"
);

let inMemoryPracticeResults: PracticeExamResult[] = [];

function ensurePracticeFile() {
  try {
    const dir = path.join(process.cwd(), "src/data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(practiceFilePath)) {
      fs.writeFileSync(practiceFilePath, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (e) {
    console.warn("Could not ensure practice exams file:", e);
  }
}

function getAllResults(): PracticeExamResult[] {
  ensurePracticeFile();
  try {
    if (fs.existsSync(practiceFilePath)) {
      const raw = fs.readFileSync(practiceFilePath, "utf-8");
      const list = JSON.parse(raw);
      if (Array.isArray(list)) {
        inMemoryPracticeResults = list;
        return list;
      }
    }
  } catch (e) {
    console.warn("Lỗi đọc studentPracticeExamResults.json:", e);
  }
  return inMemoryPracticeResults;
}

function saveResult(item: PracticeExamResult) {
  const current = getAllResults();
  const updated = [item, ...current.filter((x) => x.id !== item.id)].slice(0, 500);
  inMemoryPracticeResults = updated;
  try {
    ensurePracticeFile();
    fs.writeFileSync(practiceFilePath, JSON.stringify(updated, null, 2), "utf-8");
  } catch (e) {
    console.warn("Lỗi ghi studentPracticeExamResults.json, lưu bộ nhớ tạm:", e);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PracticeExamResult;
    if (!body.examId || body.score === undefined) {
      return NextResponse.json(
        { success: false, error: "Dữ liệu kết quả thi thử không hợp lệ" },
        { status: 400 }
      );
    }

    const newResult: PracticeExamResult = {
      ...body,
      id: body.id || `practice_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      submittedAt: body.submittedAt || new Date().toISOString(),
    };

    saveResult(newResult);

    return NextResponse.json({
      success: true,
      result: newResult,
      message: "Đã lưu kết quả thi thử thành công!",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Lỗi lưu kết quả thi thử" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const examId = searchParams.get("examId");
    const userId = searchParams.get("userId");

    let list = getAllResults();

    if (examId) {
      list = list.filter((item) => item.examId === examId);
    }
    if (userId) {
      const cleanUser = userId.trim().toLowerCase();
      list = list.filter(
        (item) => !item.userId || item.userId.trim().toLowerCase() === cleanUser
      );
    }

    return NextResponse.json({
      success: true,
      results: list,
      total: list.length,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Lỗi lấy kết quả thi thử" },
      { status: 500 }
    );
  }
}
