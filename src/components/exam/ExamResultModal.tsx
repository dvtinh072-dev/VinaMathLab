"use client";

import React from "react";
import { Award, CheckCircle2, RotateCcw, X } from "lucide-react";
import { ExamData } from "./ExamEngine";

interface Props {
  exam: ExamData;
  mcAnswers: { [id: string]: "A" | "B" | "C" | "D" };
  tfAnswers: { [id: string]: { [key in "a" | "b" | "c" | "d"]?: boolean } };
  saAnswers: { [id: string]: string };
  onClose: () => void;
  onRestart: () => void;
}

export function ExamResultModal({ exam, mcAnswers, tfAnswers, saAnswers, onClose, onRestart }: Props) {
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
  const maxPossibleScore = 10.0;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="font-extrabold text-2xl text-slate-900 dark:text-slate-100">
            Kết Quả Bài Thi VinaMath
          </h3>
          <p className="text-xs text-slate-500">{exam.title}</p>
        </div>

        {/* Score Badge */}
        <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-center space-y-1">
          <div className="text-xs uppercase tracking-wider font-bold text-blue-700 dark:text-blue-400">
            Tổng điểm đạt được (Thang 10)
          </div>
          <div className="text-4xl md:text-5xl font-black text-primary tracking-tight">
            {totalScore} <span className="text-xl font-bold text-slate-400">/ 10.0</span>
          </div>
        </div>

        {/* Breakdown by 3 MOET Formats */}
        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <span>Phần I (Trắc nghiệm 4 lựa chọn):</span>
            <strong className="text-primary font-bold">{scorePart1.toFixed(2)} đ ({correctPart1} câu đúng)</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <span>Phần II (Trắc nghiệm Đúng / Sai):</span>
            <strong className="text-purple-600 font-bold">{scorePart2.toFixed(2)} đ</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <span>Phần III (Trả lời ngắn / Điền số):</span>
            <strong className="text-amber-600 font-bold">{scorePart3.toFixed(2)} đ ({correctPart3} câu đúng)</strong>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
          <button
            onClick={onRestart}
            className="w-full sm:flex-1 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-extrabold bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-850 shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#1e293b] hover:from-slate-50 hover:to-slate-150 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition-all duration-150 select-none"
          >
            <RotateCcw className="w-4 h-4" /> Làm lại bài thi
          </button>
          <button
            onClick={onClose}
            className="w-full sm:flex-1 py-3 rounded-2xl bg-gradient-to-b from-blue-600 via-indigo-600 to-indigo-700 text-white text-xs sm:text-sm font-black border-t border-blue-400 shadow-[0_4px_0_0_#1e40af] hover:from-blue-500 hover:to-indigo-600 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition-all duration-150 select-none"
          >
            <CheckCircle2 className="w-4 h-4" /> Xem chi tiết lời giải
          </button>
        </div>
      </div>
    </div>
  );
}
