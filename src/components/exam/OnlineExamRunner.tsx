"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Timer,
  Send,
  Flag,
  Award,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  ShieldAlert,
  ArrowLeft,
  BookOpen,
  UserCheck,
  RotateCcw,
  Sparkles,
  FileCheck,
} from "lucide-react";
import { CustomExam, StudentExamSubmission, EssayAttachment } from "@/types/customExam";
import { QuestionData } from "./ExamEngine";
import { QuestionMultipleChoice } from "./QuestionMultipleChoice";
import { QuestionTrueFalse } from "./QuestionTrueFalse";
import { QuestionShortAnswer } from "./QuestionShortAnswer";
import EssaySubmissionUploader from "./EssaySubmissionUploader";
import { formatTime } from "@/lib/utils";
import confetti from "canvas-confetti";
import { useAuth } from "@/context/AuthContext";
import { MathFormattedText } from "@/components/math/MathFormattedText";

interface Props {
  exam: CustomExam;
}

export function OnlineExamRunner({ exam }: Props) {
  const { user } = useAuth();

  // Entrance Step: student enters name and class
  const [hasStarted, setHasStarted] = useState(false);
  const [studentName, setStudentName] = useState(user?.fullName || "");
  const [studentClass, setStudentClass] = useState(
    exam.targetClass && exam.targetClass !== "Tất cả các lớp"
      ? exam.targetClass
      : user?.schoolClass || ""
  );
  const [startError, setStartError] = useState("");

  // Exam Progress State
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isEssayActive, setIsEssayActive] = useState(false);
  const [essayFiles, setEssayFiles] = useState<EssayAttachment[]>([]);
  const [timeLeft, setTimeLeft] = useState(exam.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [flagged, setFlagged] = useState<{ [id: string]: boolean }>({});

  // Answers State
  const [mcAnswers, setMcAnswers] = useState<{ [id: string]: "A" | "B" | "C" | "D" }>({});
  const [tfAnswers, setTfAnswers] = useState<{
    [id: string]: { [key in "a" | "b" | "c" | "d"]?: boolean };
  }>({});
  const [saAnswers, setSaAnswers] = useState<{ [id: string]: string }>({});

  // Anti-Cheat: Screen / Tab Blur Tracking
  const [blurCount, setBlurCount] = useState(0);
  const [blurWarningOpen, setBlurWarningOpen] = useState(false);
  const blurEventsRef = useRef<{ timestamp: string; reason: string }[]>([]);
  const lastBlurTimeRef = useRef<number>(0);

  // Result State
  const [submissionResult, setSubmissionResult] = useState<StudentExamSubmission | null>(null);
  const [reviewMode, setReviewMode] = useState(false);

  // Prefill if user changes
  useEffect(() => {
    if (user?.fullName && !studentName) {
      setStudentName(user.fullName);
    }
    if (user?.schoolClass && !studentClass && exam.targetClass === "Tất cả các lớp") {
      setStudentClass(user.schoolClass);
    }
  }, [user]);

  // Anti-Cheat Event Listeners (Tab change, Window Blur, Fullscreen change)
  useEffect(() => {
    if (!hasStarted || isSubmitted || !exam.antiCheatEnabled) return;

    const recordViolation = (reason: string) => {
      const now = Date.now();
      // Debounce blur events within 2 seconds to avoid double-counting visibilitychange + blur
      if (now - lastBlurTimeRef.current < 2000) return;
      lastBlurTimeRef.current = now;

      const eventItem = {
        timestamp: new Date().toLocaleTimeString("vi-VN"),
        reason,
      };
      blurEventsRef.current.push(eventItem);

      setBlurCount((prev) => {
        const next = prev + 1;
        setBlurWarningOpen(true);
        return next;
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        recordViolation("Chuyển tab hoặc thu nhỏ trình duyệt");
      }
    };

    const handleWindowBlur = () => {
      recordViolation("Mất tiêu điểm màn hình thi (bấm ra ngoài hoặc mở app khác)");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [hasStarted, isSubmitted, exam.antiCheatEnabled]);

  // Countdown timer
  useEffect(() => {
    if (!hasStarted || isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          executeSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [hasStarted, isSubmitted, timeLeft]);

  // Check question answered
  const isAnswered = (q: QuestionData) => {
    if (q.type === "multiple_choice") return !!mcAnswers[q.id];
    if (q.type === "true_false") {
      const ans = tfAnswers[q.id];
      return ans && Object.keys(ans).length === 4;
    }
    if (q.type === "short_answer") return !!saAnswers[q.id]?.trim();
    return false;
  };

  const answeredCount = exam.questions.filter((q) => isAnswered(q)).length;
  const unansweredCount = exam.totalQuestions - answeredCount;

  // Handle Entrance
  const handleStartExam = () => {
    if (!studentName.trim()) {
      setStartError("Vui lòng nhập Họ và tên của bạn");
      return;
    }
    if (!studentClass.trim()) {
      setStartError("Vui lòng nhập Tên lớp (Ví dụ: 10A1, 6A...)");
      return;
    }
    setStartError("");
    setHasStarted(true);
  };

  // Submit test and auto-grade
  const executeSubmit = async () => {
    setIsSubmitting(true);
    setShowConfirmSubmit(false);

    // Auto grading calculation
    let scorePart1 = 0;
    let correctPart1 = 0;
    let scorePart2 = 0;
    let scorePart3 = 0;
    let correctPart3 = 0;

    exam.questions.forEach((q) => {
      if (q.type === "multiple_choice") {
        if (mcAnswers[q.id] === q.correctKey) {
          scorePart1 += 0.25;
          correctPart1 += 1;
        }
      } else if (q.type === "true_false") {
        const userAns = tfAnswers[q.id] || {};
        const subCorrect = q.subQuestions.filter((sub) => userAns[sub.key] === sub.isCorrect).length;
        if (subCorrect === 1) scorePart2 += 0.1;
        else if (subCorrect === 2) scorePart2 += 0.25;
        else if (subCorrect === 3) scorePart2 += 0.5;
        else if (subCorrect === 4) scorePart2 += 1.0;
      } else if (q.type === "short_answer") {
        const user = (saAnswers[q.id] || "").trim().toLowerCase();
        const correct = q.correctAnswer.trim().toLowerCase();
        const match =
          user === correct ||
          (q.acceptableAnswers && q.acceptableAnswers.some((a) => a.trim().toLowerCase() === user));
        if (match) {
          scorePart3 += 0.5;
          correctPart3 += 1;
        }
      }
    });

    const totalScore = parseFloat((scorePart1 + scorePart2 + scorePart3).toFixed(2));
    const timeSpentSeconds = exam.durationMinutes * 60 - timeLeft;

    const submissionPayload: Partial<StudentExamSubmission> = {
      examId: exam.id,
      studentName: studentName.trim(),
      studentClass: studentClass.trim(),
      studentUsername: user?.username || "",
      score: totalScore,
      scorePart1,
      scorePart2,
      scorePart3,
      totalQuestions: exam.totalQuestions,
      correctCount: correctPart1 + correctPart3,
      timeSpentSeconds,
      blurCount,
      blurEvents: blurEventsRef.current,
      mcAnswers,
      tfAnswers,
      saAnswers,
      essayFiles,
    };

    try {
      const res = await fetch(`/api/teacher/exams/${exam.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });
      const data = await res.json();
      if (data.success && data.submission) {
        setSubmissionResult(data.submission);
      } else {
        setSubmissionResult(submissionPayload as StudentExamSubmission);
      }
    } catch (e) {
      console.warn("Lỗi lưu bài thi lên server, lưu tạm tại máy học sinh:", e);
      setSubmissionResult(submissionPayload as StudentExamSubmission);
    }

    setIsSubmitted(true);
    setIsSubmitting(false);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {}
  };

  // =========================================================================
  // SCREEN 1: ENTRANCE MODAL (NHẬP HỌ TÊN VÀ LỚP TRƯỚC KHI THI)
  // =========================================================================
  if (!hasStarted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-3xl bg-[#0e1526] border-2 border-emerald-500/40 text-white p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <BookOpen className="w-8 h-8" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-black uppercase tracking-wider">
              {exam.targetClass ? `Dành Cho Lớp: ${exam.targetClass}` : "Đề Kiểm Tra Trực Tuyến"}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-white">{exam.title}</h1>
            {exam.subtitle && <p className="text-xs text-slate-400">{exam.subtitle}</p>}
          </div>

          {/* Thông tin đề thi */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <div className="p-2">
              <span className="text-[11px] text-slate-400 block">Thời gian</span>
              <strong className="text-sm font-black text-emerald-400">{exam.durationMinutes} phút</strong>
            </div>
            <div className="p-2">
              <span className="text-[11px] text-slate-400 block">Số lượng</span>
              <strong className="text-sm font-black text-cyan-400">{exam.totalQuestions} câu hỏi</strong>
            </div>
            <div className="p-2 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-400 block">Thang điểm</span>
              <strong className="text-sm font-black text-amber-400">10.0 điểm</strong>
            </div>
          </div>

          {/* Cảnh báo Giám sát Chống Thoát Màn Hình */}
          {exam.antiCheatEnabled && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs space-y-1.5 leading-relaxed">
              <div className="font-bold flex items-center gap-2 text-amber-400">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Quy chế giám sát làm bài online nghiêm ngặt:</span>
              </div>
              <p className="text-[11px] text-amber-200/90">
                Hệ thống tự động theo dõi và <strong>đếm số lần bạn thoát khỏi màn hình kiểm tra</strong> (chuyển sang tab khác, mở ứng dụng ngoài, thu nhỏ cửa sổ). Số lần vi phạm sẽ được gửi trực tiếp cho Thầy/Cô khi nộp bài.
              </p>
            </div>
          )}

          {/* Form Nhập Thông Tin */}
          <div className="space-y-4 pt-1">
            {startError && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{startError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Họ và Tên Học Sinh <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ví dụ: Nguyễn Văn An"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Lớp Học <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                placeholder="Ví dụ: 10A1, 10A2, 6A..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <button
              onClick={handleStartExam}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-slate-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/25 cursor-pointer active:scale-98 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>BẮT ĐẦU LÀM BÀI THI NGAY</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SCREEN 2: POST-EXAM RESULTS & DETAILED ANSWER KEYS REVIEW
  // =========================================================================
  if (isSubmitted && submissionResult && !reviewMode) {
    const isCleanCheating = submissionResult.blurCount === 0;

    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-3xl bg-[#0e1526] border-2 border-emerald-500/40 text-white p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-inner">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white">Hoàn Thành Bài Kiểm Tra!</h2>
            <p className="text-xs text-slate-300">
              Học sinh: <strong className="text-emerald-400">{submissionResult.studentName}</strong> | Lớp:{" "}
              <strong className="text-cyan-400">{submissionResult.studentClass}</strong>
            </p>
          </div>

          {/* Bảng Điểm Toàn Diện (Thang 10) */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-900/40 to-slate-900 border border-blue-500/30 text-center space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-blue-300">
              Tổng Điểm Bài Thi (Thang Điểm 10)
            </span>
            <div className="text-5xl font-black text-emerald-400 tracking-tight">
              {submissionResult.score.toFixed(2)} <span className="text-lg font-bold text-slate-400">/ 10.0</span>
            </div>
            <span className="text-xs text-slate-400 block pt-1">
              Thời gian làm bài: {Math.floor(submissionResult.timeSpentSeconds / 60)} phút{" "}
              {submissionResult.timeSpentSeconds % 60} giây
            </span>
          </div>

          {/* Bảng Điểm Thành Phần */}
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Phần I (Trắc nghiệm nhiều lựa chọn):</span>
              <strong className="text-emerald-400 font-bold">{submissionResult.scorePart1.toFixed(2)} đ</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Phần II (Trắc nghiệm Đúng / Sai):</span>
              <strong className="text-purple-400 font-bold">{submissionResult.scorePart2.toFixed(2)} đ</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Phần III (Trả lời ngắn / Điền số):</span>
              <strong className="text-amber-400 font-bold">{submissionResult.scorePart3.toFixed(2)} đ</strong>
            </div>
            {submissionResult.essayFiles && submissionResult.essayFiles.length > 0 ? (
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/40 flex justify-between items-center">
                <span className="text-indigo-300 font-medium flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-indigo-400" />
                  <span>Phần Tự Luận:</span>
                </span>
                <strong className="text-emerald-400 font-bold">
                  Đã nộp {submissionResult.essayFiles.length} trang bài làm
                </strong>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center text-slate-400">
                <span>Phần Tự Luận:</span>
                <span>Không có tệp đính kèm</span>
              </div>
            )}
          </div>

          {/* Thống kê Giám Sát Thoát Màn Hình */}
          <div
            className={`p-4 rounded-2xl border text-xs flex items-center gap-3 ${
              isCleanCheating
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-rose-500/15 border-rose-500/40 text-rose-300"
            }`}
          >
            {isCleanCheating ? (
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            ) : (
              <ShieldAlert className="w-5 h-5 shrink-0 text-rose-400" />
            )}
            <div>
              <strong>Ghi nhận giám sát làm bài:</strong>
              <div className="text-[11px] mt-0.5">
                {isCleanCheating ? (
                  <span>Tuyệt vời! Bạn không rời khỏi màn hình làm bài lần nào (0 vi phạm).</span>
                ) : (
                  <span>
                    Hệ thống ghi nhận bạn đã <strong>thoát màn hình {submissionResult.blurCount} lần</strong> trong quá trình làm bài.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Các nút hành động */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => setReviewMode(true)}
              className="w-full sm:flex-1 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs transition-all shadow-md shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>XEM ĐÁP ÁN & LỜI GIẢI CHI TIẾT</span>
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all text-center"
            >
              Về Trang Chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SCREEN 3: EXAM RUNNER & ACTIVE QUESTION INTERFACE (OR REVIEW MODE)
  // =========================================================================
  const currentQ = exam.questions[currentIdx];

  return (
    <div className="space-y-5 max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-3xl bg-[#0e1526] border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          {reviewMode ? (
            <button
              onClick={() => setReviewMode(false)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Bảng điểm</span>
            </button>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-black text-sm">
              KT
            </div>
          )}

          <div>
            <h2 className="text-sm sm:text-base font-black text-white line-clamp-1">{exam.title}</h2>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span>HS: <strong className="text-emerald-400">{studentName}</strong></span>
              <span>•</span>
              <span>Lớp: <strong className="text-cyan-400">{studentClass}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Status (Timer, Anti-cheat badge, Submit Button) */}
        <div className="flex items-center gap-3">
          {/* Anti-cheat badge */}
          {exam.antiCheatEnabled && (
            <div
              className={`px-3 py-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-1.5 ${
                blurCount === 0
                  ? "bg-slate-900 border-slate-700 text-emerald-400"
                  : "bg-rose-500/20 border-rose-500/40 text-rose-300 animate-pulse"
              }`}
              title="Số lần thoát màn hình thi"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Thoát màn hình: {blurCount}</span>
            </div>
          )}

          {/* Timer */}
          {!isSubmitted && (
            <div
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black flex items-center gap-1.5 border ${
                timeLeft < 300
                  ? "bg-rose-500/20 border-rose-500/50 text-rose-400 animate-pulse"
                  : "bg-slate-900 border-slate-700 text-cyan-400"
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}

          {/* Submit Button */}
          {!isSubmitted && (
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-black transition-all shadow-md shadow-emerald-500/20 cursor-pointer flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp bài</span>
            </button>
          )}

          {reviewMode && (
            <span className="px-3 py-1.5 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-black">
              Chế độ xem lời giải
            </span>
          )}
        </div>
      </div>

      {/* Main Examination Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Active Question Box / Essay Area */}
        <div className="lg:col-span-8 p-5 sm:p-7 rounded-3xl bg-[#0e1526] border border-slate-800 shadow-xl space-y-6">
          {isEssayActive ? (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-black flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Phần Tự Luận</span>
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Đính kèm bài làm viết tay dạng ảnh hoặc tệp PDF
                  </span>
                </div>
              </div>

              <EssaySubmissionUploader
                files={essayFiles}
                onChange={setEssayFiles}
                readOnly={isSubmitted || reviewMode}
                title="Tải Lên Bài Làm Tự Luận (Ảnh hoặc PDF)"
                description="Học sinh giải phần tự luận ra giấy kiểm tra, sau đó chụp ảnh các trang bài làm (hoặc scan file PDF) và tải lên tại đây để Thầy/Cô chấm điểm."
              />

              <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsEssayActive(false);
                    setCurrentIdx(exam.totalQuestions - 1);
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold hover:text-white transition-all cursor-pointer"
                >
                  ← Về câu trắc nghiệm ({exam.totalQuestions})
                </button>

                {!isSubmitted && (
                  <button
                    onClick={() => setShowConfirmSubmit(true)}
                    className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 text-xs font-black hover:from-emerald-400 hover:to-teal-500 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Nộp bài thi</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Question Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black">
                    Câu {currentIdx + 1} / {exam.totalQuestions}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {currentQ.type === "multiple_choice"
                      ? "Trắc nghiệm 4 lựa chọn (0.25đ)"
                      : currentQ.type === "true_false"
                      ? "Trắc nghiệm Đúng / Sai (1.0đ)"
                      : "Trả lời ngắn / Điền số (0.5đ)"}
                  </span>
                </div>

                {!isSubmitted && (
                  <button
                    onClick={() => setFlagged((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                    className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                      flagged[currentQ.id]
                        ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{flagged[currentQ.id] ? "Đã đánh dấu" : "Đánh dấu xem lại"}</span>
                  </button>
                )}
              </div>

              {/* Interactive Question Component */}
              {currentQ.type === "multiple_choice" && (
                <QuestionMultipleChoice
                  question={currentQ}
                  selectedKey={mcAnswers[currentQ.id]}
                  onSelect={(key: "A" | "B" | "C" | "D") =>
                    !isSubmitted && setMcAnswers((prev) => ({ ...prev, [currentQ.id]: key }))
                  }
                  showExplanation={isSubmitted || reviewMode}
                />
              )}

              {currentQ.type === "true_false" && (
                <QuestionTrueFalse
                  question={currentQ}
                  answers={tfAnswers[currentQ.id] || {}}
                  onAnswer={(subKey: "a" | "b" | "c" | "d", val: boolean) =>
                    !isSubmitted &&
                    setTfAnswers((prev) => ({
                      ...prev,
                      [currentQ.id]: { ...(prev[currentQ.id] || {}), [subKey]: val },
                    }))
                  }
                  showExplanation={isSubmitted || reviewMode}
                />
              )}

              {currentQ.type === "short_answer" && (
                <QuestionShortAnswer
                  question={currentQ}
                  userAnswer={saAnswers[currentQ.id] || ""}
                  onAnswer={(val) =>
                    !isSubmitted && setSaAnswers((prev) => ({ ...prev, [currentQ.id]: val }))
                  }
                  showExplanation={isSubmitted || reviewMode}
                />
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  ← Câu trước
                </button>
                <span className="text-xs font-bold text-slate-400">
                  Câu {currentIdx + 1} / {exam.totalQuestions}
                </span>
                {currentIdx < exam.totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => Math.min(exam.totalQuestions - 1, prev + 1))}
                    className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 text-xs font-black hover:from-emerald-400 hover:to-teal-500 transition-all cursor-pointer"
                  >
                    Câu tiếp theo →
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEssayActive(true)}
                    className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-black hover:from-indigo-500 hover:to-violet-500 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Nộp tự luận →</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Question Palette Sidebar */}
        <div className="lg:col-span-4 p-5 rounded-3xl bg-[#0e1526] border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-white">Bảng điều hướng câu hỏi</h3>
            <span className="text-xs text-slate-400 font-medium">
              Đã làm: {answeredCount}/{exam.totalQuestions}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {exam.questions.map((q, idx) => {
              const active = !isEssayActive && currentIdx === idx;
              const answered = isAnswered(q);
              const isFlag = flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setIsEssayActive(false);
                    setCurrentIdx(idx);
                  }}
                  className={`h-10 rounded-2xl font-black text-xs flex items-center justify-center relative transition-all cursor-pointer ${
                    active
                      ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 ring-2 ring-emerald-400 scale-105"
                      : answered
                      ? "bg-teal-700/60 text-white border border-teal-500/40 hover:bg-teal-600/60"
                      : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlag && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-[#0e1526]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Nút truy cập Phần Tự Luận */}
          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsEssayActive(true)}
              className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-between border transition-all cursor-pointer ${
                isEssayActive
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-400 shadow-md shadow-indigo-500/30 scale-[1.02]"
                  : essayFiles.length > 0
                  ? "bg-teal-700/60 text-white border-teal-500/40 hover:bg-teal-600/60"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                <span>Phần Tự Luận</span>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  essayFiles.length > 0
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {essayFiles.length > 0 ? `${essayFiles.length} trang` : "Chưa tải"}
              </span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-lg bg-teal-700/80 border border-teal-500/40" />
              <span>Đã hoàn thành</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-lg bg-slate-900 border border-slate-800" />
              <span>Chưa làm</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-lg bg-amber-500" />
              <span>Đã đánh dấu xem lại</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-lg bg-emerald-500 ring-1 ring-emerald-400" />
              <span>Đang chọn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1526] w-full max-w-md rounded-3xl border border-slate-700 p-6 sm:p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200 text-white">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/40">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl text-white">Xác nhận nộp bài thi?</h3>
              
              <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800 text-xs text-left space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Trắc nghiệm:</span>
                  <strong className="text-emerald-400 font-bold">{answeredCount}/{exam.totalQuestions} câu</strong>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Tự luận (ảnh/PDF):</span>
                  <strong className={essayFiles.length > 0 ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
                    {essayFiles.length > 0 ? `Đã đính kèm ${essayFiles.length} trang` : "Chưa tải trang nào"}
                  </strong>
                </div>
              </div>

              {unansweredCount > 0 && (
                <div className="text-amber-400 font-semibold text-xs text-left bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                  ⚠️ Còn {unansweredCount} câu trắc nghiệm chưa hoàn thành.
                </div>
              )}

              {essayFiles.length === 0 && (
                <div className="text-indigo-300 font-semibold text-xs text-left bg-indigo-500/10 p-2.5 rounded-xl border border-indigo-500/30">
                  💡 Bạn chưa tải ảnh/PDF bài làm tự luận. Nếu đề thi có phần tự luận, bạn có muốn tải lên trước khi nộp không?
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="w-full sm:flex-1 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold hover:text-white cursor-pointer"
              >
                Tiếp tục làm bài
              </button>
              <button
                disabled={isSubmitting}
                onClick={executeSubmit}
                className="w-full sm:flex-1 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 text-xs font-black hover:from-emerald-400 hover:to-teal-500 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Đang nộp..." : "Xác nhận nộp bài"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Anti-Cheat Warning Modal (When blur/tab change detected) */}
      {blurWarningOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#150a0a] w-full max-w-md rounded-3xl border-2 border-rose-500 text-white p-6 sm:p-7 shadow-2xl space-y-4 animate-in shake duration-300">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-rose-400 uppercase tracking-wide">
                CẢNH BÁO GIÁM SÁT THI TRỰC TUYẾN
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Hệ thống phát hiện bạn vừa <strong>rời khỏi màn hình làm bài</strong> (chuyển sang tab khác hoặc thoát ứng dụng)!
              </p>
              <div className="p-3 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-bold">
                Số lần vi phạm đã ghi nhận: {blurCount} lần
              </div>
              <p className="text-[11px] text-slate-400">
                Lưu ý: Mọi lần chuyển tab / thoát màn hình đều được lưu vào cơ sở dữ liệu và hiển thị trực tiếp cho Thầy/Cô khi chấm bài.
              </p>
            </div>

            <button
              onClick={() => setBlurWarningOpen(false)}
              className="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-black transition-all cursor-pointer"
            >
              Tôi Đã Hiểu, Quay Lại Làm Bài
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
