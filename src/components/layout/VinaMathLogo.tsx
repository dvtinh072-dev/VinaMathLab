"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  className?: string;
}

export function VinaMathLogo({ size = "md", showSubtitle = true, className }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl md:text-4xl",
  };

  return (
    <Link href="/" className={cn("flex items-center gap-3 group select-none", className)}>
      {/* Dynamic 3D Geometric Math Badge */}
      <div className={cn("relative flex items-center justify-center shrink-0", iconSizes[size])}>
        {/* Ambient Glow Aura */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse" />

        {/* Main Logo Container */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 border border-white/30 p-2 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300 overflow-hidden">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:6px_6px]" />

          {/* Stylized 'V' + Infinity + Sigma Mathematical Icon */}
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-md">
            <defs>
              <linearGradient id="vGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
              <linearGradient id="glowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Infinity loop background trace */}
            <path
              d="M12 20 C12 16 16 16 20 20 C24 24 28 24 28 20 C28 16 24 16 20 20 C16 24 12 24 12 20 Z"
              stroke="url(#glowGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />

            {/* Bold Stylized Vector 'V' */}
            <path
              d="M8 12 L20 32 L32 12"
              stroke="url(#vGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Sparkle node on top right vertex */}
            <circle cx="32" cy="12" r="2.5" fill="#FDE047" className="animate-ping opacity-75" />
            <circle cx="32" cy="12" r="2" fill="#FDE047" />
          </svg>
        </div>
      </div>

      {/* Brand Text Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={cn("font-black tracking-tight text-slate-900 dark:text-white", textSizes[size])}>
            Vina
          </span>
          <span className={cn("font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500 bg-clip-text text-transparent", textSizes[size])}>
            Math
          </span>
          <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-gradient-to-r from-amber-400 to-rose-500 text-white shadow-sm tracking-wide">
            2026
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wide mt-0.5">
            Hệ Thống Học Liệu
          </span>
        )}
      </div>
    </Link>
  );
}
