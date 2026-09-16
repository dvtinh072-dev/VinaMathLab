"use client";

import React from "react";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

export interface ShortAnswerQuestionData {
  id: string;
  type: "short_answer";
  index: number;
  stem: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
  unit?: string;
  explanation: string;
  topic?: string;
  difficulty?: "NB" | "TH" | "VD" | "VDC";
  svgDiagram?: string;
}

interface Props {
  question: ShortAnswerQuestionData;
  userAnswer?: string;
  onAnswer: (val: string) => void;
  showExplanation?: boolean;
}

export function QuestionShortAnswer({ question, userAnswer = "", onAnswer, showExplanation = false }: Props) {
  const isCorrect = () => {
    const cleanUser = userAnswer.trim().toLowerCase().replace(/\s+/g, "");
    const cleanCorrect = question.correctAnswer.trim().toLowerCase().replace(/\s+/g, "");
    if (cleanUser === cleanCorrect) return true;
    if (question.acceptableAnswers) {
      return question.acceptableAnswers.some(
        (ans) => ans.trim().toLowerCase().replace(/\s+/g, "") === cleanUser
      );
    }
    return false;
  };

  const correct = isCorrect();

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
          Câu {question.index} (Trả lời ngắn)
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

      <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1120] border border-slate-800 space-y-3 shadow-inner max-w-xl">
        <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
          <span>✍️ Ô nhập kết quả số học:</span>
        </label>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Nhập số thập phân, phân số hoặc số nguyên..."
              value={userAnswer}
              onChange={(e) => onAnswer(e.target.value)}
              disabled={showExplanation}
              className={cn(
                "w-full px-4 py-3.5 rounded-xl border text-base font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/40",
                showExplanation && correct && "border-emerald-500 bg-emerald-950/60 text-emerald-200 font-black",
                showExplanation && !correct && "border-rose-500 bg-rose-950/60 text-rose-200 font-black",
                !showExplanation && "border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-amber-400 shadow-sm"
              )}
            />
            {showExplanation && (
              <span className="absolute right-3.5 top-3.5">
                {correct ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
              </span>
            )}
          </div>
          {question.unit && (
            <span className="text-sm font-bold text-cyan-300 bg-slate-900 px-3 py-3 rounded-xl border border-slate-800">
              {question.unit}
            </span>
          )}
        </div>
      </div>

      {showExplanation && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-indigo-950/80 border border-amber-500/40 text-xs sm:text-sm space-y-2 mt-4 text-slate-200 shadow-xl">
          <div className="flex items-center justify-between font-bold text-white border-b border-amber-500/30 pb-2">
            <span className="flex items-center gap-2">💡 <span>Lời giải chi tiết:</span></span>
            <span className="text-amber-300 font-mono font-black text-sm">
              Đáp án chuẩn: {question.correctAnswer} {question.unit || ""}
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
