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
          <div className={`grid gap-2.5 pt-1 ${isAnyLong ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
            {question.options.map((opt) => {
              const isSelected = selectedKey === opt.key;
              const isCorrect = showExplanation && opt.key === question.correctKey;
              const isWrong = showExplanation && isSelected && opt.key !== question.correctKey;

              return (
                <button
                  key={opt.key}
                  onClick={() => onSelect(opt.key)}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-xl border text-left text-sm transition-all min-h-[48px]",
                    isSelected
                      ? "border-primary bg-primary/10 text-primary font-medium ring-1 ring-primary"
                      : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300",
                    isCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold ring-1 ring-emerald-500",
                    isWrong && "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 ring-1 ring-red-500"
                  )}
                >
                  <span
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 border mt-0.5",
                      isSelected
                        ? "bg-primary text-white border-primary"
                        : "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300",
                      isCorrect && "bg-emerald-600 text-white border-emerald-600",
                      isWrong && "bg-red-600 text-white border-red-600"
                    )}
                  >
                    {opt.key}
                  </span>
                  <div className="flex-1 min-w-0 break-words leading-relaxed overflow-visible">
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
