"use client";

import React from "react";
import { MathFormula } from "@/components/math/MathFormula";
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
      <div className="flex items-start gap-2">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 shrink-0">
          Câu {question.index} (Đúng/Sai)
        </span>
        <div className="text-slate-900 dark:text-slate-100 font-medium text-sm md:text-base leading-relaxed">
          <MathFormula math={question.stem} />
        </div>
      </div>

      {/* 4 Sub-questions Table */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-200 dark:divide-slate-800 bg-card">
        {question.subQuestions.map((sub) => {
          const userVal = answers[sub.key];
          const isCorrect = userVal === sub.isCorrect;

          return (
            <div
              key={sub.key}
              className={cn(
                "p-3 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors",
                showExplanation && isCorrect && "bg-emerald-50/50 dark:bg-emerald-950/20",
                showExplanation && userVal !== undefined && !isCorrect && "bg-red-50/50 dark:bg-red-950/20"
              )}
            >
              <div className="flex items-start gap-2.5 flex-1 text-sm text-slate-800 dark:text-slate-200">
                <span className="font-bold text-primary shrink-0">{sub.key})</span>
                <div className="leading-relaxed">
                  <MathFormula math={sub.text} />
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  onClick={() => onAnswer(sub.key, true)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1",
                    userVal === true
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400"
                  )}
                >
                  <Check className="w-3.5 h-3.5" /> Đúng
                </button>

                <button
                  onClick={() => onAnswer(sub.key, false)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1",
                    userVal === false
                      ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400"
                  )}
                >
                  <X className="w-3.5 h-3.5" /> Sai
                </button>

                {showExplanation && (
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded font-semibold ml-1",
                      sub.isCorrect
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
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
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2 mt-3">
          <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
            <span>💡 Lời giải & Phân tích từng ý:</span>
            <span className="text-primary">
              Điểm đạt được: {scoreForQuestion}/1.0 điểm ({correctCount}/4 ý đúng)
            </span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
            <MathFormula math={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
