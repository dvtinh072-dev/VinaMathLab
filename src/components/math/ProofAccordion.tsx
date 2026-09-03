"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProofStep {
  title: string;
  content: React.ReactNode;
}

interface ProofAccordionProps {
  title?: string;
  steps: ProofStep[];
  conclusion?: React.ReactNode;
  className?: string;
}

export function ProofAccordion({ title = "Xem chứng minh chi tiết từng bước", steps, conclusion, className }: ProofAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <div className={cn("my-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm overflow-hidden", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50/70 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left font-medium text-slate-800 dark:text-slate-100"
      >
        <div className="flex items-center gap-2.5">
          <Award className="w-4 h-4 text-primary" />
          <span>{title}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-normal">
            {steps.length} bước
          </span>
        </div>
        <ChevronDown className={cn("w-4 h-4 text-slate-500 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="p-4 space-y-4 border-t border-slate-200 dark:border-slate-800">
          <div className="relative border-l-2 border-primary/30 ml-3.5 pl-6 space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shadow-sm">
                  {idx + 1}
                </span>
                <div className="bg-slate-50/50 dark:bg-slate-800/30 p-3.5 rounded-lg border border-slate-100 dark:border-slate-800/80">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1.5">
                    {step.title}
                  </h4>
                  <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {conclusion && (
            <div className="mt-4 p-3.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div className="text-sm text-emerald-950 dark:text-emerald-200">
                <strong className="font-semibold">Kết luận (ĐPCM):</strong> {conclusion}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}