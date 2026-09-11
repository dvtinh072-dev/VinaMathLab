"use client";

import React, { useState, useEffect } from "react";
import { Timer, Send, Flag, RotateCcw, Award } from "lucide-react";
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
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeft]);

  const handleSubmit = () => {
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

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="font-bold text-lg md:text-xl text-slate-900 dark:text-slate-100">
            {exam.title}
          </h2>
          <div className="text-xs text-slate-500 flex items-center gap-3 mt-1">
            <span>Tổng số: <strong>{exam.totalQuestions} câu</strong></span>
            <span>•</span>
            <span>Thời gian: <strong>{exam.durationMinutes} phút</strong></span>
            <span>•</span>
            <span className="text-primary font-semibold">Chuẩn ma trận BGD 2026</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-mono font-bold text-base">
            <Timer className="w-4 h-4 text-blue-600 animate-pulse" />
            {formatTime(timeLeft)}
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-xl bg-primary text-white font-semibold text-xs md:text-sm shadow-md hover:bg-primary/90 transition-all flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" /> Nộp bài
            </button>
          ) : (
            <button
              onClick={() => setShowResultModal(true)}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs md:text-sm shadow-md hover:bg-emerald-700 transition-all flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" /> Xem bảng điểm
            </button>
          )}
        </div>
      </div>

      {/* Main Examination View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        {/* Question Area */}
        <div className="lg:col-span-8 p-3.5 sm:p-6 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {currentQ.type === "multiple_choice" && "Phần I: Trắc nghiệm 4 lựa chọn (0.25đ/câu)"}
              {currentQ.type === "true_false" && "Phần II: Trắc nghiệm Đúng / Sai (Tối đa 1.0đ/câu)"}
              {currentQ.type === "short_answer" && "Phần III: Trắc nghiệm Trả lời ngắn (0.5đ/câu)"}
            </div>

            <button
              onClick={() =>
                setFlagged((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))
              }
              className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                flagged[currentQ.id]
                  ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600 border-amber-300"
                  : "text-slate-500 border-slate-200 dark:border-slate-800 hover:text-amber-500"
              }`}
            >
              <Flag className="w-3.5 h-3.5" /> {flagged[currentQ.id] ? "Đã đánh dấu" : "Đánh dấu xem lại"}
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

          {/* Prev / Next buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40"
            >
              ← Câu trước
            </button>
            <span className="text-xs text-slate-500 font-medium">
              Câu {currentIdx + 1} / {exam.totalQuestions}
            </span>
            <button
              disabled={currentIdx === exam.totalQuestions - 1}
              onClick={() => setCurrentIdx((prev) => Math.min(exam.totalQuestions - 1, prev + 1))}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold hover:opacity-90 disabled:opacity-40"
            >
              Câu tiếp theo →
            </button>
          </div>
        </div>

        {/* Question Palette Sidebar */}
        <div className="lg:col-span-4 p-3.5 sm:p-5 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 sm:space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Bảng điều hướng câu hỏi</h3>

          <div className="grid grid-cols-6 sm:grid-cols-5 gap-1.5 sm:gap-2">
            {exam.questions.map((q, idx) => {
              const active = currentIdx === idx;
              const answered = isAnswered(q);
              const isFlag = flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-10 rounded-xl font-bold text-xs flex flex-col items-center justify-center relative border transition-all ${
                    active
                      ? "ring-2 ring-primary border-primary bg-primary/10 text-primary"
                      : answered
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlag && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-600" /> Đã hoàn thành
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" /> Chưa làm
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-amber-500" /> Đã đánh dấu xem lại
            </div>
          </div>
        </div>
      </div>

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
