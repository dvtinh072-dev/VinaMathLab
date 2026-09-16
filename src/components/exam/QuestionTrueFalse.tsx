"use client";

import React from "react";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export interface TrueFalseSubQuestion {
  key: "a" | "b" | "c" | "d";
  text: string;
  isCorrect: boolean; // True = Đúng, False = Sai
}

export interface TrueFalseQuestionData {
  id: string;
  type: "true_false";
  index: number;
  stem: string;
  subQuestions: TrueFalseSubQuestion[];
  explanation: string;
  topic?: string;
  difficulty?: "NB" | "TH" | "VD" | "VDC";
  svgDiagram?: string;
}

interface Props {
  question: TrueFalseQuestionData;
  answers: { [key in "a" | "b" | "c" | "d"]?: boolean };
  onAnswer: (subKey: "a" | "b" | "c" | "d", val: boolean) => void;
  showExplanation?: boolean;
}

export function QuestionTrueFalse({ question, answers, onAnswer, showExplanation = false }: Props) {
  // MOET Scoring calculation helper
  const correctCount = question.subQuestions.filter(
    (sub) => answers[sub.key] === sub.isCorrect
  ).length;

  const scoreForQuestion =
    correctCount === 1 ? 0.1 : correctCount === 2 ? 0.25 : correctCount === 3 ? 0.5 : correctCount === 4 ? 1.0 : 0.0;

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl text-xs font-black bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
          Câu {question.index} (Đúng / Sai)
        </span>
        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed tracking-wide flex-1">
          <MathFormattedText text={question.stem} />
        </h4>
      </div>

      {question.svgDiagram && (
        <div
          className="my-3 flex justify-center w-full overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: question.svgDiagram }}
        />
      )}

      {/* 4 Sub-questions Table */}
      <div className="rounded-2xl border border-slate-800/80 overflow-hidden divide-y divide-slate-800/70 bg-[#0B1120] shadow-inner">
        {question.subQuestions.map((sub) => {
          const userVal = answers[sub.key];
          const isCorrect = userVal === sub.isCorrect;

          return (
            <div
              key={sub.key}
              className={cn(
                "p-3.5 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors",
                showExplanation && isCorrect && "bg-emerald-950/30",
                showExplanation && userVal !== undefined && !isCorrect && "bg-rose-950/30"
              )}
            >
              <div className="flex items-start gap-3 flex-1 text-slate-100">
                <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/30">
                  {sub.key})
                </span>
                <div className="leading-relaxed flex-1 pt-0.5 font-bold text-sm sm:text-base text-slate-100">
                  <MathFormattedText text={sub.text} />
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  type="button"
                  onClick={() => onAnswer(sub.key, true)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-150 select-none flex items-center gap-1.5 cursor-pointer border",
                    userVal === true
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-600/30 scale-105"
                      : "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-emerald-400 hover:text-emerald-300 active:scale-95"
                  )}
                >
                  <Check className="w-4 h-4 stroke-[3]" /> Đúng
                </button>

                <button
                  type="button"
                  onClick={() => onAnswer(sub.key, false)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-150 select-none flex items-center gap-1.5 cursor-pointer border",
                    userVal === false
                      ? "bg-rose-600 hover:bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-600/30 scale-105"
                      : "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-rose-400 hover:text-rose-300 active:scale-95"
                  )}
                >
                  <X className="w-4 h-4 stroke-[3]" /> Sai
                </button>

                {showExplanation && (
                  <span
                    className={cn(
                      "text-xs px-2.5 py-1 rounded-lg font-black ml-1 border",
                      sub.isCorrect
                        ? "bg-emerald-950/90 border-emerald-500/60 text-emerald-300"
                        : "bg-amber-950/90 border-amber-500/60 text-amber-300"
                    )}
                  >
                    Chuẩn: {sub.isCorrect ? "Đúng" : "Sai"}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showExplanation && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/40 text-xs sm:text-sm space-y-2 mt-4 text-slate-200 shadow-xl">
          <div className="flex items-center justify-between font-bold text-white border-b border-purple-500/30 pb-2">
            <span className="flex items-center gap-2">💡 <span>Phân tích & Lời giải chi tiết:</span></span>
            <span className="text-purple-300 font-black">
              Điểm đạt được: {scoreForQuestion}/1.0 điểm ({correctCount}/4 ý đúng)
            </span>
          </div>
          <div className="text-slate-200 leading-relaxed pt-1">
            <MathFormattedText text={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
