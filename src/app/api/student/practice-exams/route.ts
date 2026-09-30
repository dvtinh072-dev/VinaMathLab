import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PracticeExamResult } from "@/types/practiceExam";
import { getAllExamSubmissions, getAllCustomExams } from "@/lib/customExamsStore";
import { SAMPLE_EXAMS } from "@/data/sampleExams";
import { supabase } from "@/lib/supabaseClient";

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
  const updated = [item, ...current.filter((x) => x.id !== item.id)].slice(0, 1000);
  inMemoryPracticeResults = updated;
  try {
    ensurePracticeFile();
    fs.writeFileSync(practiceFilePath, JSON.stringify(updated, null, 2), "utf-8");
  } catch (e) {
    console.warn("Lỗi ghi studentPracticeExamResults.json, lưu bộ nhớ tạm:", e);
  }

  // Cố gắng đồng bộ lên Supabase (nếu có bảng practice_exam_results)
  try {
    Promise.resolve(
      supabase
        .from("practice_exam_results")
        .upsert({
          id: item.id,
          exam_id: item.examId,
          exam_title: item.examTitle,
          grade: item.grade,
          user_id: item.userId,
          student_name: item.studentName,
          student_class: item.studentClass,
          score: item.score,
          score_part1: item.scorePart1,
          score_part2: item.scorePart2,
          score_part3: item.scorePart3,
          total_questions: item.totalQuestions,
          correct_count: item.correctCount,
          time_spent_seconds: item.timeSpentSeconds,
          mc_answers: item.mcAnswers,
          tf_answers: item.tfAnswers,
          sa_answers: item.saAnswers,
          essay_files: item.essayFiles,
          submitted_at: item.submittedAt,
        }, { onConflict: "id" })
    ).catch(() => {});
  } catch {}
}

function removeResult(id: string): boolean {
  const current = getAllResults();
  const filtered = current.filter((x) => x.id !== id);
  inMemoryPracticeResults = filtered;
  try {
    ensurePracticeFile();
    fs.writeFileSync(practiceFilePath, JSON.stringify(filtered, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.warn("Lỗi xóa kết quả:", e);
    return false;
  }
}

// POST: Lưu hoặc cập nhật kết quả thi của học sinh
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PracticeExamResult;
    if (!body.examId || body.score === undefined) {
      return NextResponse.json(
        { success: false, error: "Dữ liệu kết quả thi không hợp lệ (thiếu examId hoặc score)" },
        { status: 400 }
      );
    }

    const newResult: PracticeExamResult = {
      ...body,
      id: body.id || `practice_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      submittedAt: body.submittedAt || new Date().toISOString(),
      score: Number(body.score) || 0,
      totalScore: Number(body.score) || 0,
      scorePart1: Number(body.scorePart1) || 0,
      scorePart2: Number(body.scorePart2) || 0,
      scorePart3: Number(body.scorePart3) || 0,
      timeSpentSeconds: Number(body.timeSpentSeconds) || 0,
    };

    saveResult(newResult);

    return NextResponse.json({
      success: true,
      result: newResult,
      message: "Đã lưu kết quả bài thi thành công!",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Lỗi lưu kết quả thi" },
      { status: 500 }
    );
  }
}

// GET: Lấy kết quả thi (cho học sinh cá nhân hoặc Admin)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const examId = searchParams.get("examId");
    const userId = searchParams.get("userId");
    const mode = searchParams.get("mode"); // "admin" | "all"
    const grade = searchParams.get("grade");

    let practiceList = getAllResults();

    // Lấy thêm các bài nộp từ đề giáo viên tạo để hợp nhất
    const teacherSubmissions = getAllExamSubmissions();
    const customExams = getAllCustomExams();
    const customExamsMap = new Map<string, any>();
    customExams.forEach((e) => customExamsMap.set(e.id, e));

    const convertedTeacherResults: PracticeExamResult[] = teacherSubmissions.map((sub) => {
      const parentExam = customExamsMap.get(sub.examId);
      return {
        id: sub.id,
        examId: sub.examId,
        examTitle: parentExam?.title || `Đề thi trực tuyến #${sub.examId}`,
        grade: parentExam?.grade || "lop-6",
        gradeNumber: parentExam?.gradeNumber || 6,
        examType: "teacher_exam",
        submittedAt: sub.submittedAt,
        timeSpentSeconds: sub.timeSpentSeconds || 0,
        score: sub.score,
        totalScore: sub.score,
        maxScore: 10,
        scorePart1: sub.scorePart1 || 0,
        scorePart2: sub.scorePart2 || 0,
        scorePart3: sub.scorePart3 || 0,
        totalQuestions: sub.totalQuestions || 0,
        correctCount: sub.correctCount || 0,
        mcAnswers: sub.mcAnswers || {},
        tfAnswers: sub.tfAnswers || {},
        saAnswers: sub.saAnswers || {},
        essayFiles: sub.essayFiles || [],
        userId: sub.studentUsername || sub.studentName,
        studentName: sub.studentName,
        studentClass: sub.studentClass,
      };
    });

    // Gộp tất cả các bài nộp, tránh trùng id
    const allMap = new Map<string, PracticeExamResult>();
    practiceList.forEach((item) => allMap.set(item.id, item));
    convertedTeacherResults.forEach((item) => {
      if (!allMap.has(item.id)) {
        allMap.set(item.id, item);
      }
    });

    let combinedList = Array.from(allMap.values()).sort(
      (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    // 1. Chế độ ADMIN: Lấy tất cả hoặc có bộ lọc
    if (mode === "admin" || mode === "all") {
      if (examId) {
        combinedList = combinedList.filter((item) => item.examId === examId);
      }
      if (grade && grade !== "all") {
        combinedList = combinedList.filter((item) => item.grade === grade);
      }

      // Tính toán thống kê KPI cho Admin
      const totalSubmissions = combinedList.length;
      const uniqueStudents = new Set(
        combinedList.map((item) => (item.userId || item.studentName || "").toLowerCase()).filter(Boolean)
      ).size;
      const avgScore = totalSubmissions > 0
        ? Math.round((combinedList.reduce((acc, cur) => acc + (cur.score || 0), 0) / totalSubmissions) * 10) / 10
        : 0;

      const excellentCount = combinedList.filter((x) => x.score >= 8.0).length;
      const goodCount = combinedList.filter((x) => x.score >= 6.5 && x.score < 8.0).length;
      const averageCount = combinedList.filter((x) => x.score >= 5.0 && x.score < 6.5).length;
      const belowAvgCount = combinedList.filter((x) => x.score < 5.0).length;

      return NextResponse.json({
        success: true,
        results: combinedList,
        total: totalSubmissions,
        kpi: {
          totalSubmissions,
          uniqueStudents,
          avgScore,
          excellentCount,
          goodCount,
          averageCount,
          belowAvgCount,
        },
      });
    }

    // 2. Chế độ HỌC SINH CÁ NHÂN (Lấy bài nộp theo userId / studentCode / username)
    if (userId) {
      const cleanUser = userId.trim().toLowerCase();
      combinedList = combinedList.filter((item) => {
        const uId = (item.userId || "").trim().toLowerCase();
        const sName = (item.studentName || "").trim().toLowerCase();
        return uId === cleanUser || sName === cleanUser;
      });
    }

    if (examId) {
      combinedList = combinedList.filter((item) => item.examId === examId);
    }

    return NextResponse.json({
      success: true,
      results: combinedList,
      total: combinedList.length,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Lỗi lấy kết quả thi" },
      { status: 500 }
    );
  }
}

// DELETE: Xóa 1 bài nộp (dành cho Admin hoặc dọn dẹp)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Thiếu ID bài thi cần xóa" }, { status: 400 });
    }

    const ok = removeResult(id);
    return NextResponse.json({
      success: ok,
      message: ok ? "Đã xóa bài thi thành công" : "Không tìm thấy bài thi cần xóa",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Lỗi xóa bài thi" },
      { status: 500 }
    );
  }
}
