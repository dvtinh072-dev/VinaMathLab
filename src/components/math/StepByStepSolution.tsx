"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  thought: string;
  math: React.ReactNode;
}

interface StepByStepSolutionProps {
  problem: React.ReactNode;
  steps: Step[];
  finalAnswer: React.ReactNode;
  className?: string;
}

export function StepByStepSolution({ problem, steps, finalAnswer, className }: StepByStepSolutionProps) {
  const [currentVisible, setCurrentVisible] = useState(1);

  return (
    <div className={cn("my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-sm space-y-4", className)}>
      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
        <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Đề bài ví dụ</div>
          <div className="text-slate-900 dark:text-slate-100 font-medium text-sm md:text-base leading-relaxed">{problem}</div>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Tiến trình giải (Bước {currentVisible}/{steps.length})</span>
          {currentVisible < steps.length && (
            <button
              onClick={() => setCurrentVisible(prev => Math.min(steps.length, prev + 1))}
              className="text-primary hover:underline flex items-center gap-1 font-semibold"
            >
              Hiện bước tiếp theo <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {steps.slice(0, currentVisible).map((step, idx) => (
          <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 transition-all">
            <div className="flex items-center gap-2 mb-2 font-semibold text-sm text-slate-800 dark:text-slate-200">
              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">
                {idx + 1}
              </span>
              <span>{step.title}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-2">
              💡 Phân tích: {step.thought}
            </p>
            <div className="text-sm text-slate-800 dark:text-slate-200">
              {step.math}
            </div>
          </div>
        ))}

        {currentVisible === steps.length && (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3">
            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-sm text-emerald-950 dark:text-emerald-200 font-semibold">
              Đáp số: {finalAnswer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}