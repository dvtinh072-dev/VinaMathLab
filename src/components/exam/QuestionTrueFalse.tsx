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
    <div className="space-y-4">
      <div className="flex items-start gap-2.5">
        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-xl text-xs font-black bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
          Câu {question.index} (Đúng / Sai)
        </span>
        <div className="text-white font-medium text-sm md:text-base leading-relaxed flex-1">
          <MathFormattedText text={question.stem} />
        </div>
      </div>

      {/* 4 Sub-questions Table */}
      <div className="rounded-2xl border border-slate-800 overflow-hidden divide-y divide-slate-800 bg-[#0c1322]">
        {question.subQuestions.map((sub) => {
          const userVal = answers[sub.key];
          const isCorrect = userVal === sub.isCorrect;

          return (
            <div
              key={sub.key}
              className={cn(
                "p-3.5 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors",
                showExplanation && isCorrect && "bg-emerald-950/25",
                showExplanation && userVal !== undefined && !isCorrect && "bg-rose-950/25"
              )}
            >
              <div className="flex items-start gap-2.5 flex-1 text-sm text-slate-100">
                <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/30">
                  {sub.key})
                </span>
                <div className="leading-relaxed flex-1 pt-0.5 font-medium">
                  <MathFormattedText text={sub.text} />
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  onClick={() => onAnswer(sub.key, true)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-150 transform select-none flex items-center gap-1.5 cursor-pointer",
                    userVal === true
                      ? "bg-gradient-to-b from-emerald-400 to-emerald-600 text-slate-950 border-t border-emerald-300 shadow-[0_3px_0_0_#065f46] scale-105"
                      : "bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-[0_2px_0_0_#0f172a] hover:text-emerald-400 active:translate-y-0.5"
                  )}
                  style={{
                    backgroundColor: userVal === true ? undefined : "#1e293b"
                  }}
                >
                  <Check className="w-4 h-4 stroke-[3]" /> Đúng
                </button>

                <button
                  onClick={() => onAnswer(sub.key, false)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-150 transform select-none flex items-center gap-1.5 cursor-pointer",
                    userVal === false
                      ? "bg-gradient-to-b from-rose-500 to-red-600 text-white border-t border-rose-300 shadow-[0_3px_0_0_#9f1239] scale-105"
                      : "bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-[0_2px_0_0_#0f172a] hover:text-rose-400 active:translate-y-0.5"
                  )}
                  style={{
                    backgroundColor: userVal === false ? undefined : "#1e293b"
                  }}
                >
                  <X className="w-4 h-4 stroke-[3]" /> Sai
                </button>

                {showExplanation && (
                  <span
                    className={cn(
                      "text-xs px-2.5 py-1 rounded-lg font-bold ml-1",
                      sub.isCorrect
                        ? "bg-emerald-950/80 border border-emerald-500/50 text-emerald-300"
                        : "bg-amber-950/80 border border-amber-500/50 text-amber-300"
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
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2 mt-3 text-slate-200">
          <div className="flex items-center justify-between font-bold text-white">
            <span>💡 Lời giải & Phân tích từng ý:</span>
            <span className="text-purple-400">
              Điểm đạt được: {scoreForQuestion}/1.0 điểm ({correctCount}/4 ý đúng)
            </span>
          </div>
          <div className="text-slate-300 leading-relaxed">
            <MathFormattedText text={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
