import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabaseClient";

export interface QuestionReport {
  id: string;
  lessonId: string;
  lessonTitle: string;
  gradeKey?: string;
  questionId: string | number;
  questionBadge?: string;
  sectionTab: "multiple_choice" | "true_false" | "short_answer";
  quizMode: "sgk" | "ai";
  questionText: string;
  selectedAnswer?: string;
  correctAnswer?: string;
  explanation?: string;
  reportReason: string;
  description?: string;
  reporter?: {
    userId?: string;
    studentCode?: string;
    fullName?: string;
    schoolClass?: string;
    username?: string;
  };
  status: "pending" | "resolved" | "dismissed";
  adminNote?: string;
  createdAt: string;
  updatedAt: string;
}

const reportsFilePath = path.join(process.cwd(), "src/data/questionReportsData.json");

function readLocalReports(): QuestionReport[] {
  try {
    if (!fs.existsSync(reportsFilePath)) return [];
    const raw = fs.readFileSync(reportsFilePath, "utf-8");
    return JSON.parse(raw) || [];
  } catch (err) {
    console.error("Lỗi đọc questionReportsData.json:", err);
    return [];
  }
}

function writeLocalReports(reports: QuestionReport[]): void {
  try {
    fs.writeFileSync(reportsFilePath, JSON.stringify(reports, null, 2), "utf-8");
  } catch (err) {
    console.error("Lỗi ghi questionReportsData.json:", err);
  }
}

export async function GET(request: Request) {
  try {
    let reports = readLocalReports();

    try {
      const { data, error } = await supabase
        .from("question_reports")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && Array.isArray(data) && data.length > 0) {
        const suReports: QuestionReport[] = data.map((item: any) => ({
          id: item.id,
          lessonId: item.lesson_id || item.lessonId,
          lessonTitle: item.lesson_title || item.lessonTitle,
          gradeKey: item.grade_key || item.gradeKey,
          questionId: item.question_id || item.questionId,
          questionBadge: item.question_badge || item.questionBadge,
          sectionTab: item.section_tab || item.sectionTab,
          quizMode: item.quiz_mode || item.quizMode,
          questionText: item.question_text || item.questionText,
          selectedAnswer: item.selected_answer || item.selectedAnswer,
          correctAnswer: item.correct_answer || item.correctAnswer,
          explanation: item.explanation,
          reportReason: item.report_reason || item.reportReason,
          description: item.description,
          reporter: item.reporter,
          status: item.status || "pending",
          adminNote: item.admin_note || item.adminNote,
          createdAt: item.created_at || item.createdAt,
          updatedAt: item.updated_at || item.updatedAt,
        }));

        const localMap = new Map(reports.map((r) => [r.id, r]));
        suReports.forEach((sr) => {
          localMap.set(sr.id, sr);
        });
        reports = Array.from(localMap.values());
      }
    } catch {
      // Supabase fallback
    }

    reports.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ success: true, reports });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      lessonId,
      lessonTitle,
      gradeKey,
      questionId,
      questionBadge,
      sectionTab,
      quizMode,
      questionText,
      selectedAnswer,
      correctAnswer,
      explanation,
      reportReason,
      description,
      reporter,
    } = body;

    if (!lessonId || !questionText || !reportReason) {
      return NextResponse.json(
        { success: false, error: "Thiếu thông tin bắt buộc của báo cáo." },
        { status: 400 }
      );
    }

    const newReport: QuestionReport = {
      id: "rep_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      lessonId: String(lessonId),
      lessonTitle: String(lessonTitle || lessonId),
      gradeKey: gradeKey ? String(gradeKey) : undefined,
      questionId: questionId || "",
      questionBadge: questionBadge || undefined,
      sectionTab: sectionTab || "multiple_choice",
      quizMode: quizMode || "sgk",
      questionText: String(questionText),
      selectedAnswer: selectedAnswer ? String(selectedAnswer) : undefined,
      correctAnswer: correctAnswer ? String(correctAnswer) : undefined,
      explanation: explanation ? String(explanation) : undefined,
      reportReason: String(reportReason),
      description: description ? String(description).trim() : "",
      reporter: reporter || {},
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const reports = readLocalReports();
    reports.unshift(newReport);
    writeLocalReports(reports);

    try {
      await supabase.from("question_reports").insert([
        {
          id: newReport.id,
          lesson_id: newReport.lessonId,
          lesson_title: newReport.lessonTitle,
          grade_key: newReport.gradeKey,
          question_id: String(newReport.questionId),
          question_badge: newReport.questionBadge,
          section_tab: newReport.sectionTab,
          quiz_mode: newReport.quizMode,
          question_text: newReport.questionText,
          selected_answer: newReport.selectedAnswer,
          correct_answer: newReport.correctAnswer,
          explanation: newReport.explanation,
          report_reason: newReport.reportReason,
          description: newReport.description,
          reporter: newReport.reporter,
          status: newReport.status,
          created_at: newReport.createdAt,
          updated_at: newReport.updatedAt,
        },
      ]);
    } catch (sbErr) {
      console.warn("Supabase insert report skipped:", sbErr);
    }

    return NextResponse.json({ success: true, report: newReport });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, status, adminNote } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Thiếu ID báo cáo." }, { status: 400 });
    }

    const reports = readLocalReports();
    const targetIdx = reports.findIndex((r) => r.id === id);

    if (targetIdx === -1) {
      return NextResponse.json({ success: false, error: "Không tìm thấy báo cáo." }, { status: 404 });
    }

    if (status) reports[targetIdx].status = status;
    if (adminNote !== undefined) reports[targetIdx].adminNote = adminNote;
    reports[targetIdx].updatedAt = new Date().toISOString();

    writeLocalReports(reports);

    try {
      await supabase
        .from("question_reports")
        .update({
          status: reports[targetIdx].status,
          admin_note: reports[targetIdx].adminNote,
          updated_at: reports[targetIdx].updatedAt,
        })
        .eq("id", id);
    } catch (sbErr) {
      console.warn("Supabase update report skipped:", sbErr);
    }

    return NextResponse.json({ success: true, report: reports[targetIdx] });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Thiếu ID báo cáo." }, { status: 400 });
    }

    let reports = readLocalReports();
    reports = reports.filter((r) => r.id !== id);
    writeLocalReports(reports);

    try {
      await supabase.from("question_reports").delete().eq("id", id);
    } catch (sbErr) {
      console.warn("Supabase delete report skipped:", sbErr);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
