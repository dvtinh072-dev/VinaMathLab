"use client";

import React from "react";
import { MathFormattedText } from "@/components/math/MathFormattedText";
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
      <div className="flex items-start gap-2.5">
        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-xl text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
          Câu {question.index}
        </span>
        <div className="text-white font-medium text-sm md:text-base leading-relaxed flex-1">
          <MathFormattedText text={question.stem} />
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
                      ? "border-cyan-400 bg-cyan-950/40 text-cyan-100 font-bold shadow-[0_4px_0_0_#0891b2] -translate-y-0.5"
                      : "border-slate-750 bg-slate-850 hover:bg-slate-800 text-slate-100 hover:border-cyan-500/50 shadow-[0_3px_0_0_#1e293b] active:translate-y-0.5 active:shadow-none",
                    isCorrect &&
                      "border-emerald-400 bg-emerald-950/50 text-emerald-100 font-bold shadow-[0_4px_0_0_#059669]",
                    isWrong &&
                      "border-rose-400 bg-rose-950/50 text-rose-100 font-bold shadow-[0_4px_0_0_#e11d48]"
                  )}
                  style={{
                    backgroundColor: isSelected ? "rgba(8, 145, 178, 0.2)" : isCorrect ? "rgba(5, 150, 105, 0.25)" : isWrong ? "rgba(225, 29, 72, 0.25)" : "#162032",
                    borderColor: isSelected ? "#22d3ee" : isCorrect ? "#34d399" : isWrong ? "#fb7185" : "#2d3748"
                  }}
                >
                  <span
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border transition-all duration-150 mt-0.5",
                      isSelected
                        ? "bg-gradient-to-b from-cyan-500 to-blue-600 text-slate-950 border-cyan-300 font-black shadow-[0_2px_0_0_#0284c7]"
                        : "bg-slate-800 border-slate-700 text-slate-200",
                      isCorrect && "bg-gradient-to-b from-emerald-500 to-teal-600 text-slate-950 font-black border-emerald-300 shadow-[0_2px_0_0_#065f46]",
                      isWrong && "bg-gradient-to-b from-rose-500 to-red-600 text-white font-black border-rose-300 shadow-[0_2px_0_0_#9f1239]"
                    )}
                  >
                    {opt.key}
                  </span>
                  <div className="flex-1 min-w-0 break-words leading-relaxed overflow-visible pt-0.5 text-slate-100 font-medium">
                    <MathFormattedText text={opt.text} />
                  </div>
                </button>
              );
            })}
          </div>
        );
      })()}

      {showExplanation && (
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2 mt-3 text-slate-200">
          <div className="font-bold text-white flex items-center gap-2">
            <span>💡 Lời giải chi tiết:</span>
            <span className="text-emerald-400">Đáp án đúng: {question.correctKey}</span>
          </div>
          <div className="text-slate-300 leading-relaxed">
            <MathFormattedText text={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
