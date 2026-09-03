"use client";

import React from "react";
import { MathFormula } from "@/components/math/MathFormula";
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
      <div className="flex items-start gap-2">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 shrink-0">
          Câu {question.index} (Trả lời ngắn)
        </span>
        <div className="text-slate-900 dark:text-slate-100 font-medium text-sm md:text-base leading-relaxed">
          <MathFormula math={question.stem} />
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
              "w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20",
              showExplanation && correct && "border-emerald-500 bg-emerald-50/40 text-emerald-900 dark:text-emerald-200 dark:bg-emerald-950/30",
              showExplanation && !correct && "border-red-500 bg-red-50/40 text-red-900 dark:text-red-200 dark:bg-red-950/30",
              !showExplanation && "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            )}
          />
          {showExplanation && (
            <span className="absolute right-3 top-2.5">
              {correct ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
            </span>
          )}
        </div>
        {question.unit && <span className="text-xs font-semibold text-slate-500">{question.unit}</span>}
      </div>

      {showExplanation && (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2 mt-3">
          <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
            <span>💡 Lời giải chi tiết:</span>
            <span className="text-emerald-600">Đáp án chuẩn: {question.correctAnswer}</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
            <MathFormula math={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
}
