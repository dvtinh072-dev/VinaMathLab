"use client";

import React from "react";
import { MathFormula } from "@/components/math/MathFormula";
import { cn } from "@/lib/utils";

export interface MultipleChoiceQuestionData {
  id: string;
  type: "multiple_choice";
  index: number;
  stem: string;
  options: {
    key: "A" | "B" | "C" | "D";
    text: string;
  }[];
  correctKey: "A" | "B" | "C" | "D";
  explanation: string;
  topic?: string;
  difficulty?: "NB" | "TH" | "VD" | "VDC";
}

interface Props {
  question: MultipleChoiceQuestionData;
  selectedKey?: "A" | "B" | "C" | "D";
  onSelect: (key: "A" | "B" | "C" | "D") => void;
  showExplanation?: boolean;
}

export function QuestionMultipleChoice({ question, selectedKey, onSelect, showExplanation = false }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary shrink-0">
          Câu {question.index}
        </span>
        <div className="text-slate-900 dark:text-slate-100 font-medium text-sm md:text-base leading-relaxed">
          <MathFormula math={question.stem} />
        </div>
      </div>

      {(() => {
        const isAnyLong = question.options.some((opt) => opt.text.length > 28);
        return (
          <div className={`grid gap-3 pt-1 ${isAnyLong ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
            {question.options.map((opt) => {
              const isSelected = selectedKey === opt.key;
              const isCorrect = showExplanation && opt.key === question.correctKey;
              const isWrong = showExplanation && isSelected && opt.key !== question.correctKey;

              return (
                <button
                  key={opt.key}
                  onClick={() => onSelect(opt.key)}
                  className={cn(
                    "flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl border text-left text-sm transition-all duration-150 transform select-none min-h-[52px]",
                    isSelected
                      ? "border-blue-500 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 dark:from-blue-950/50 dark:to-indigo-950/50 text-blue-950 dark:text-blue-100 font-bold shadow-[0_4px_0_0_#2563eb] dark:shadow-[0_4px_0_0_#1d4ed8] -translate-y-0.5"
                      : "border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-[0_3px_0_0_#e2e8f0] dark:shadow-[0_3px_0_0_#1e293b] hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 active:translate-y-0.5 active:shadow-none",
                    isCorrect &&
                      "border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 text-emerald-950 dark:text-emerald-100 font-bold shadow-[0_4px_0_0_#059669]",
                    isWrong &&
                      "border-rose-500 bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-950/40 dark:to-red-950/40 text-rose-950 dark:text-rose-100 font-bold shadow-[0_4px_0_0_#e11d48]"
                  )}
                >
                  <span
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border transition-all duration-150 mt-0.5",
                      isSelected
                        ? "bg-gradient-to-b from-blue-500 to-indigo-600 text-white border-t border-blue-300 shadow-[0_2px_0_0_#1e40af]"
                        : "bg-slate-100 dark:bg-slate-750 border-b-2 border-slate-300 dark:border-slate-650 text-slate-700 dark:text-slate-300",
                      isCorrect && "bg-gradient-to-b from-emerald-500 to-teal-600 text-white border-t border-emerald-300 shadow-[0_2px_0_0_#065f46]",
                      isWrong && "bg-gradient-to-b from-rose-500 to-red-600 text-white border-t border-rose-300 shadow-[0_2px_0_0_#9f1239]"
                    )}
                  >
                    {opt.key}
                  </span>
                  <div className="flex-1 min-w-0 break-words leading-relaxed overflow-visible pt-0.5">
                    <MathFormula math={opt.text} />
                  </div>
                </button>
              );
            })}
          </div>
        );
      })()}

      {showExplanation && (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2 mt-3">
          <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <span>💡 Lời giải chi tiết:</span>
            <span className="text-emerald-600">Đáp án đúng: {question.correctKey}</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
            <MathFormula math={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
