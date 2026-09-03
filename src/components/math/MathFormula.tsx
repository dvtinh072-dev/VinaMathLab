"use client";

import React, { useEffect, useRef, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MathFormulaProps {
  math: string;
  block?: boolean;
  className?: string;
  copyable?: boolean;
}

export function MathFormula({ math, block = false, className, copyable = false }: MathFormulaProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          strict: false,
        });
      } catch {
        if (containerRef.current) {
          containerRef.current.innerText = math;
        }
      }
    }
  }, [math, block]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(math);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (block) {
    return (
      <div
        className={cn(
          "group relative my-2 overflow-x-auto py-2.5 px-4 rounded-2xl text-center transition-all",
          className ? className : "bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100"
        )}
      >
        <span ref={containerRef} className="inline-block" />
        {copyable && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-primary shadow-sm"
            title="Sao chép mã LaTeX"
            aria-label="Sao chép mã LaTeX"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>
    );
  }

  return <span ref={containerRef} className={cn("inline-block mx-0.5", className)} />;
}