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
    <div className="space-y-4">
      <div className="flex items-start gap-2.5">
        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-xl text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
          Câu {question.index} (Trả lời ngắn)
        </span>
        <div className="text-white font-medium text-sm md:text-base leading-relaxed flex-1">
          <MathFormattedText text={question.stem} />
        </div>
      </div>

      <div className="flex items-center gap-3 max-w-md pt-1">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Nhập kết quả số học..."
            value={userAnswer}
            onChange={(e) => onAnswer(e.target.value)}
            disabled={showExplanation}
            className={cn(
              "w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/30",
              showExplanation && correct && "border-emerald-500 bg-emerald-950/40 text-emerald-200 font-bold",
              showExplanation && !correct && "border-rose-500 bg-rose-950/40 text-rose-200 font-bold",
              !showExplanation && "border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:border-amber-400"
            )}
          />
          {showExplanation && (
            <span className="absolute right-3 top-3">
              {correct ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400" />
              )}
            </span>
          )}
        </div>
        {question.unit && <span className="text-xs font-bold text-slate-400">{question.unit}</span>}
      </div>

      {showExplanation && (
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2 mt-3 text-slate-200">
          <div className="flex items-center gap-2 font-bold text-white">
            <span>💡 Lời giải chi tiết:</span>
            <span className="text-amber-400 font-mono">Đáp án chuẩn: {question.correctAnswer}</span>
          </div>
          <div className="text-slate-300 leading-relaxed">
            <MathFormattedText text={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
