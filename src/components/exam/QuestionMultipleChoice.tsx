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
  svgDiagram?: string;
}

interface Props {
  question: MultipleChoiceQuestionData;
  selectedKey?: "A" | "B" | "C" | "D";
  onSelect: (key: "A" | "B" | "C" | "D") => void;
  showExplanation?: boolean;
}

export function QuestionMultipleChoice({ question, selectedKey, onSelect, showExplanation = false }: Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shrink-0">
          Câu {question.index}
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

      {(() => {
        const isAnyLong = question.options.some((opt) => opt.text.length > 28);
        return (
          <div className={`grid gap-3 pt-1 ${isAnyLong ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
            {question.options.map((opt) => {
              const isSelected = selectedKey === opt.key;
              const isCorrect = showExplanation && opt.key === question.correctKey;
              const isWrong = showExplanation && isSelected && opt.key !== question.correctKey;

              let btnStyle =
                "bg-[#131B2E] hover:bg-[#1C2740] border-2 border-slate-700/80 text-white hover:border-cyan-400 hover:scale-[1.002] transition-all duration-150";

              if (showExplanation) {
                if (isCorrect) {
                  btnStyle =
                    "bg-emerald-950/90 border-2 border-emerald-400 text-emerald-100 shadow-md shadow-emerald-500/30";
                } else if (isWrong) {
                  btnStyle =
                    "bg-rose-950/90 border-2 border-rose-500 text-rose-100 shadow-md shadow-rose-500/30";
                } else {
                  btnStyle = "bg-slate-900/40 border-2 border-slate-800 text-slate-500 opacity-40";
                }
              } else if (isSelected) {
                btnStyle =
                  "bg-cyan-950/80 border-2 border-cyan-400 text-cyan-100 font-bold shadow-md shadow-cyan-500/20 scale-[1.003]";
              }

              return (
                <button
                  key={opt.key}
                  onClick={() => onSelect(opt.key)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left font-bold text-base sm:text-lg flex items-center justify-between gap-3.5 transition-all duration-150 shadow-sm min-h-[56px] select-none ${btnStyle}`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <span
                      className={cn(
                        "w-8 h-8 rounded-lg text-sm sm:text-base font-black flex items-center justify-center shrink-0 border transition-all mt-0.5",
                        isSelected
                          ? "bg-gradient-to-b from-cyan-500 to-blue-600 text-slate-950 border-cyan-300 font-black shadow-[0_2px_0_0_#0284c7]"
                          : isCorrect
                          ? "bg-gradient-to-b from-emerald-500 to-teal-600 text-slate-950 border-emerald-300 font-black"
                          : isWrong
                          ? "bg-gradient-to-b from-rose-500 to-red-600 text-white border-rose-300 font-black"
                          : "bg-white/10 text-cyan-300 border-white/15"
                      )}
                    >
                      {opt.key}
                    </span>
                    <div className="flex-1 min-w-0 break-words leading-relaxed overflow-visible pt-0.5 text-slate-100 font-bold text-base sm:text-lg">
                      <MathFormattedText text={opt.text} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        );
      })()}

      {showExplanation && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-cyan-400/40 text-xs sm:text-sm space-y-2 mt-3 text-slate-200">
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
