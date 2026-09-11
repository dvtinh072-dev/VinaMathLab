"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Timer, Send, Flag, RotateCcw, Award, ArrowLeft, AlertTriangle } from "lucide-react";
import { MultipleChoiceQuestionData, QuestionMultipleChoice } from "./QuestionMultipleChoice";
import { TrueFalseQuestionData, QuestionTrueFalse } from "./QuestionTrueFalse";
import { ShortAnswerQuestionData, QuestionShortAnswer } from "./QuestionShortAnswer";
import { ExamResultModal } from "./ExamResultModal";
import { formatTime } from "@/lib/utils";
import confetti from "canvas-confetti";

export type QuestionData =
  | MultipleChoiceQuestionData
  | TrueFalseQuestionData
  | ShortAnswerQuestionData;

export interface ExamData {
  id: string;
  title: string;
  grade?: string; // "lop-6", "lop-7", "lop-8", "lop-9", "lop-10", "lop-11", "lop-12"
  gradeNumber?: number; // 6, 7, 8, 9, 10, 11, 12
  examType?: "giua-ky-1" | "cuoi-ky-1" | "giua-ky-2" | "cuoi-ky-2" | "tuyen-sinh-10" | "thpt-qg" | "dgnl";
  category?: string;
  subtitle?: string;
  durationMinutes: number;
  totalQuestions: number;
  questions: QuestionData[];
}

interface Props {
  exam: ExamData;
}

export function ExamEngine({ exam }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exam.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [flagged, setFlagged] = useState<{ [id: string]: boolean }>({});

  // User answers state
  const [mcAnswers, setMcAnswers] = useState<{ [id: string]: "A" | "B" | "C" | "D" }>({});
  const [tfAnswers, setTfAnswers] = useState<{
    [id: string]: { [key in "a" | "b" | "c" | "d"]?: boolean };
  }>({});
  const [saAnswers, setSaAnswers] = useState<{ [id: string]: string }>({});

  // Countdown timer
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          confirmAndSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeft]);

  const confirmAndSubmit = () => {
    setShowConfirmSubmit(false);
    setIsSubmitted(true);
    setShowResultModal(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleRestart = () => {
    setIsSubmitted(false);
    setShowResultModal(false);
    setShowConfirmSubmit(false);
    setTimeLeft(exam.durationMinutes * 60);
    setMcAnswers({});
    setTfAnswers({});
    setSaAnswers({});
    setFlagged({});
    setCurrentIdx(0);
  };

  const currentQ = exam.questions[currentIdx];

  // Helper check if question is answered
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

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/luyen-thi"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-850 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-[0_3px_0_0_#cbd5e1] dark:shadow-[0_3px_0_0_#0f172a] hover:from-slate-50 hover:to-slate-150 active:translate-y-0.5 active:shadow-none text-xs font-extrabold select-none transition-all duration-150 shrink-0"
            title="Rời phòng thi"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Thoát</span>
          </Link>

          <div>
            <h2 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100">
              {exam.title}
            </h2>
            <div className="text-xs text-slate-500 flex flex-wrap items-center gap-2 mt-0.5">
              <span>Đã làm: <strong className="text-emerald-600 dark:text-emerald-400">{answeredCount}/{exam.totalQuestions} câu</strong></span>
              <span>•</span>
              <span>Thời gian: <strong>{exam.durationMinutes} phút</strong></span>
              <span>•</span>
              <span className="text-primary font-semibold">Chuẩn BGD 2026</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/80 dark:from-blue-950/60 dark:to-blue-900/40 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-mono font-black text-sm sm:text-base shadow-[0_3px_0_0_#bfdbfe] dark:shadow-[0_3px_0_0_#1e3a8a]">
            <Timer className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            {formatTime(timeLeft)}
          </div>

          {!isSubmitted ? (
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-b from-emerald-500 via-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm border-t border-emerald-300 shadow-[0_4px_0_0_#065f46] hover:brightness-105 active:translate-y-1 active:shadow-none transition-all duration-150 flex items-center gap-2 select-none"
            >
              <Send className="w-4 h-4" /> Nộp bài thi
            </button>
          ) : (
            <button
              onClick={() => setShowResultModal(true)}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-b from-emerald-500 to-teal-600 text-white font-black text-xs sm:text-sm border-t border-emerald-300 shadow-[0_4px_0_0_#065f46] hover:brightness-105 active:translate-y-1 active:shadow-none transition-all duration-150 flex items-center gap-2 select-none"
            >
              <Award className="w-4 h-4" /> Xem bảng điểm
            </button>
          )}
        </div>
      </div>

      {/* Main Examination View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        {/* Question Area */}
        <div className="lg:col-span-8 p-4 sm:p-7 rounded-3xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 sm:space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-200 dark:border-slate-800">
            <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
              {currentQ.type === "multiple_choice" && "Phần I: Trắc nghiệm 4 lựa chọn (0.25đ/câu)"}
              {currentQ.type === "true_false" && "Phần II: Trắc nghiệm Đúng / Sai (Tối đa 1.0đ/câu)"}
              {currentQ.type === "short_answer" && "Phần III: Trắc nghiệm Trả lời ngắn (0.5đ/câu)"}
            </div>

            <button
              onClick={() =>
                setFlagged((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))
              }
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-150 transform select-none ${
                flagged[currentQ.id]
                  ? "bg-gradient-to-b from-amber-400 to-amber-500 text-amber-950 border-t border-amber-200 shadow-[0_3px_0_0_#b45309] scale-105 active:translate-y-0.5 active:shadow-none"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-[0_2px_0_0_#cbd5e1] dark:shadow-[0_2px_0_0_#0f172a] hover:bg-slate-200 dark:hover:bg-slate-750 active:translate-y-0.5 active:shadow-none"
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${flagged[currentQ.id] ? "fill-amber-950" : ""}`} />
              <span>{flagged[currentQ.id] ? "Đã đánh dấu cờ" : "Đánh dấu xem lại"}</span>
            </button>
          </div>

          {currentQ.type === "multiple_choice" && (
            <QuestionMultipleChoice
              question={currentQ}
              selectedKey={mcAnswers[currentQ.id]}
              onSelect={(key) =>
                !isSubmitted && setMcAnswers((prev) => ({ ...prev, [currentQ.id]: key }))
              }
              showExplanation={isSubmitted}
            />
          )}

          {currentQ.type === "true_false" && (
            <QuestionTrueFalse
              question={currentQ}
              answers={tfAnswers[currentQ.id] || {}}
              onAnswer={(subKey, val) =>
                !isSubmitted &&
                setTfAnswers((prev) => ({
                  ...prev,
                  [currentQ.id]: { ...(prev[currentQ.id] || {}), [subKey]: val },
                }))
              }
              showExplanation={isSubmitted}
            />
          )}

          {currentQ.type === "short_answer" && (
            <QuestionShortAnswer
              question={currentQ}
              userAnswer={saAnswers[currentQ.id] || ""}
              onAnswer={(val) =>
                !isSubmitted && setSaAnswers((prev) => ({ ...prev, [currentQ.id]: val }))
              }
              showExplanation={isSubmitted}
            />
          )}

          {/* Prev / Next 3D Buttons */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-200 dark:border-slate-800">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-extrabold bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-850 shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#1e293b] hover:from-slate-50 hover:to-slate-150 active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:pointer-events-none transition-all duration-150 select-none"
            >
              ← Câu trước
            </button>
            <span className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">
              Câu {currentIdx + 1} / {exam.totalQuestions}
            </span>
            <button
              disabled={currentIdx === exam.totalQuestions - 1}
              onClick={() => setCurrentIdx((prev) => Math.min(exam.totalQuestions - 1, prev + 1))}
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-b from-blue-600 via-indigo-600 to-indigo-700 text-white text-xs sm:text-sm font-black border-t border-blue-400 shadow-[0_4px_0_0_#1e40af] hover:from-blue-500 hover:to-indigo-600 active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:pointer-events-none transition-all duration-150 select-none"
            >
              Câu tiếp theo →
            </button>
          </div>
        </div>

        {/* Question Palette Sidebar */}
        <div className="lg:col-span-4 p-4 sm:p-5 rounded-3xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Bảng điều hướng câu hỏi</h3>
            <span className="text-xs text-slate-500 font-medium">{exam.totalQuestions} câu</span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
            {exam.questions.map((q, idx) => {
              const active = currentIdx === idx;
              const answered = isAnswered(q);
              const isFlag = flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-11 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center relative transition-all duration-150 transform select-none ${
                    active
                      ? "bg-gradient-to-b from-blue-500 to-indigo-600 text-white border-t border-blue-300 shadow-[0_4px_0_0_#1e3a8a] ring-2 ring-blue-400 ring-offset-2 scale-105 -translate-y-0.5"
                      : answered
                      ? "bg-gradient-to-b from-emerald-500 to-teal-600 text-white border-t border-emerald-300 shadow-[0_3px_0_0_#065f46] hover:brightness-110 active:translate-y-1 active:shadow-none"
                      : "bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-[0_3px_0_0_#cbd5e1] dark:shadow-[0_3px_0_0_#0f172a] hover:border-blue-400 hover:text-blue-600 active:translate-y-1 active:shadow-none"
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlag && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white dark:border-slate-900 shadow-sm flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3.5 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-lg bg-gradient-to-b from-emerald-500 to-teal-600 shadow-[0_2px_0_0_#065f46]" />
              <span>Đã hoàn thành</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-lg bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-850 border border-slate-200 dark:border-slate-700 shadow-[0_2px_0_0_#cbd5e1] dark:shadow-[0_2px_0_0_#0f172a]" />
              <span>Chưa làm</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-lg bg-gradient-to-b from-amber-400 to-amber-500 shadow-[0_2px_0_0_#b45309]" />
              <span>Đã đánh dấu xem lại</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-lg bg-gradient-to-b from-blue-500 to-indigo-600 shadow-[0_2px_0_0_#1e3a8a] ring-1 ring-blue-400" />
              <span>Đang chọn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-inner">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl text-slate-900 dark:text-slate-100">
                Xác nhận nộp bài thi?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bạn đã hoàn thành <strong className="text-emerald-600 dark:text-emerald-400">{answeredCount}/{exam.totalQuestions}</strong> câu hỏi.
                {unansweredCount > 0 && (
                  <span className="block mt-1 text-amber-600 dark:text-amber-400 font-semibold">
                    ⚠️ Còn {unansweredCount} câu chưa trả lời. Bạn có chắc chắn muốn kết thúc bài thi ngay bây giờ?
                  </span>
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="w-full sm:flex-1 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-extrabold bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-850 shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#1e293b] hover:from-slate-50 hover:to-slate-150 active:translate-y-1 active:shadow-none transition-all duration-150 select-none"
              >
                Tiếp tục làm bài
              </button>
              <button
                onClick={confirmAndSubmit}
                className="w-full sm:flex-1 py-3 rounded-2xl bg-gradient-to-b from-emerald-500 via-emerald-600 to-teal-700 text-white text-xs sm:text-sm font-black border-t border-emerald-300 shadow-[0_4px_0_0_#065f46] hover:brightness-105 active:translate-y-1 active:shadow-none transition-all duration-150 select-none flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Nộp bài ngay</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showResultModal && (
        <ExamResultModal
          exam={exam}
          mcAnswers={mcAnswers}
          tfAnswers={tfAnswers}
          saAnswers={saAnswers}
          onClose={() => setShowResultModal(false)}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
