"use client";

import React from "react";
import { BookOpen, AlertTriangle, Lightbulb, Sparkles, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "theorem" | "definition" | "formula" | "caution" | "example";

interface FormulaCalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const config = {
  theorem: {
    label: "Định lý & Tính chất",
    icon: Sparkles,
    badgeBg: "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300",
    border: "border-l-4 border-l-blue-600 border-slate-200 dark:border-slate-800",
    bg: "bg-blue-50/40 dark:bg-blue-950/20",
  },
  definition: {
    label: "Định nghĩa cơ bản",
    icon: BookOpen,
    badgeBg: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300",
    border: "border-l-4 border-l-emerald-600 border-slate-200 dark:border-slate-800",
    bg: "bg-emerald-50/40 dark:bg-emerald-950/20",
  },
  formula: {
    label: "Công thức cốt lõi",
    icon: Lightbulb,
    badgeBg: "bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300",
    border: "border-l-4 border-l-purple-600 border-slate-200 dark:border-slate-800",
    bg: "bg-purple-50/40 dark:bg-purple-950/20",
  },
  caution: {
    label: "Lưu ý & Sai lầm phổ biến",
    icon: AlertTriangle,
    badgeBg: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300",
    border: "border-l-4 border-l-amber-600 border-slate-200 dark:border-slate-800",
    bg: "bg-amber-50/40 dark:bg-amber-950/20",
  },
  example: {
    label: "Ví dụ trực quan",
    icon: HelpCircle,
    badgeBg: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
    border: "border-l-4 border-l-slate-600 border-slate-200 dark:border-slate-800",
    bg: "bg-slate-50 dark:bg-slate-900/30",
  },
};

export function FormulaCallout({ type = "theorem", title, children, className }: FormulaCalloutProps) {
  const item = config[type];
  const Icon = item.icon;

  return (
    <div className={cn("my-5 rounded-xl border p-4.5 shadow-sm transition-all", item.border, item.bg, className)}>
      <div className="flex items-center gap-2 mb-2.5">
        <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide", item.badgeBg)}>
          <Icon className="w-3.5 h-3.5" />
          {title || item.label}
        </span>
      </div>
      <div className="text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}