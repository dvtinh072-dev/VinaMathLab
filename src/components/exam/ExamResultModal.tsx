"use client";

import React from "react";
import { Award, CheckCircle2, RotateCcw, X, FileCheck, Eye } from "lucide-react";
import { ExamData } from "./ExamEngine";
import { EssayAttachment } from "@/types/customExam";

interface Props {
  exam: ExamData;
  mcAnswers: { [id: string]: "A" | "B" | "C" | "D" };
  tfAnswers: { [id: string]: { [key in "a" | "b" | "c" | "d"]?: boolean } };
  saAnswers: { [id: string]: string };
  essayFiles?: EssayAttachment[];
  onClose: () => void;
  onRestart: () => void;
  onOpenEssay?: () => void;
}

export function ExamResultModal({
  exam,
  mcAnswers,
  tfAnswers,
  saAnswers,
  essayFiles = [],
  onClose,
  onRestart,
  onOpenEssay,
}: Props) {
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
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#131B2E] w-full max-w-lg rounded-3xl border-2 border-cyan-500/40 p-6 md:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200 text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 hover:bg-slate-800 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="font-extrabold text-2xl text-white">
            Kết Quả Bài Thi VinaMath
          </h3>
          <p className="text-xs text-slate-400">{exam.title}</p>
        </div>

        {/* Score Badge */}
        <div className="p-5 rounded-2xl bg-[#0B1120] border border-cyan-500/40 text-center space-y-1 shadow-inner">
          <div className="text-xs uppercase tracking-wider font-bold text-cyan-400">
            Tổng điểm trắc nghiệm (Thang 10)
          </div>
          <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
            <span className="text-cyan-400">{totalScore}</span> <span className="text-xl font-bold text-slate-500">/ 10.0</span>
          </div>
        </div>

        {/* Breakdown by MOET Formats */}
        <div className="space-y-2 text-xs">
          <div className="p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 flex justify-between items-center text-slate-200">
            <span className="font-medium">Phần I (Trắc nghiệm 4 lựa chọn):</span>
            <strong className="text-cyan-400 font-bold">{scorePart1.toFixed(2)} đ ({correctPart1} câu đúng)</strong>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 flex justify-between items-center text-slate-200">
            <span className="font-medium">Phần II (Trắc nghiệm Đúng / Sai):</span>
            <strong className="text-purple-400 font-bold">{scorePart2.toFixed(2)} đ</strong>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 flex justify-between items-center text-slate-200">
            <span className="font-medium">Phần III (Trả lời ngắn / Điền số):</span>
            <strong className="text-amber-400 font-bold">{scorePart3.toFixed(2)} đ ({correctPart3} câu đúng)</strong>
          </div>

          {essayFiles && essayFiles.length > 0 ? (
            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/40 flex justify-between items-center text-slate-200">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                <span className="font-medium">Phần Tự luận (Đã nộp):</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">{essayFiles.length} trang</span>
                {onOpenEssay && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEssay();
                    }}
                    className="px-2 py-1 bg-indigo-600/80 hover:bg-indigo-600 text-white rounded-lg text-[11px] font-semibold transition-colors flex items-center gap-1"
                  >
                    <Eye className="w-3 h-3" /> Xem bài
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex justify-between items-center text-slate-400 text-[11px]">
              <span>Phần Tự luận:</span>
              <span>Chưa đính kèm bài làm</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={onRestart}
            className="w-full sm:flex-1 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs sm:text-sm font-extrabold bg-slate-900 hover:bg-slate-850 flex items-center justify-center gap-2 transition-all duration-150 select-none cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Làm lại bài thi
          </button>
          <button
            onClick={onClose}
            className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-black border border-cyan-400/40 shadow-lg shadow-cyan-900/30 flex items-center justify-center gap-2 transition-all duration-150 select-none cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" /> Xem chi tiết lời giải
          </button>
        </div>
      </div>
    </div>
  );
}
