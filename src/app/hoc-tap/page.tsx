"use client";

import React from "react";
import Link from "next/link";
import { MathFormula } from "@/components/math/MathFormula";
import { CURRICULUM_DATA } from "@/data/curriculumData";

export default function HocTapGradeSelectionPage() {
  const getFirstLessonHref = (gradeId: string) => {
    const gradeData = CURRICULUM_DATA[gradeId];
    const firstLessonId = gradeData?.chapters[0]?.lessons[0]?.id;
    return firstLessonId ? `/hoc-tap/${gradeId}/${firstLessonId}` : `/hoc-tap/${gradeId}`;
  };
  const middleSchoolGrades = [
    {
      id: "lop-6",
      label: "Toán 6",
      cardBg: "bg-gradient-to-br from-amber-500/20 via-slate-900/90 to-orange-500/10",
      borderColor: "border-amber-400/50 hover:border-amber-300",
      glowEffect: "hover:shadow-2xl hover:shadow-amber-500/30",
      badgeBg: "bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-white shadow-lg shadow-amber-500/40 border border-amber-300/40",
      symbol: "📐",
    },
    {
      id: "lop-7",
      label: "Toán 7",
      cardBg: "bg-gradient-to-br from-rose-500/20 via-slate-900/90 to-pink-500/10",
      borderColor: "border-rose-400/50 hover:border-rose-300",
      glowEffect: "hover:shadow-2xl hover:shadow-rose-500/30",
      badgeBg: "bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 text-white shadow-lg shadow-rose-500/40 border border-rose-300/40",
      symbol: "🔺",
    },
    {
      id: "lop-8",
      label: "Toán 8",
      cardBg: "bg-gradient-to-br from-cyan-500/20 via-slate-900/90 to-teal-500/10",
      borderColor: "border-cyan-400/50 hover:border-cyan-300",
      glowEffect: "hover:shadow-2xl hover:shadow-cyan-500/30",
      badgeBg: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 text-slate-950 font-black shadow-lg shadow-cyan-500/40 border border-cyan-300/40",
      symbol: "⚡",
    },
    {
      id: "lop-9",
      label: "Toán 9",
      cardBg: "bg-gradient-to-br from-emerald-500/20 via-slate-900/90 to-green-500/10",
      borderColor: "border-emerald-400/50 hover:border-emerald-300",
      glowEffect: "hover:shadow-2xl hover:shadow-emerald-500/30",
      badgeBg: "bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 text-slate-950 font-black shadow-lg shadow-emerald-500/40 border border-emerald-300/40",
      symbol: "🎯",
    },
  ];

  const highSchoolGrades = [
    {
      id: "lop-10",
      label: "Toán 10",
      cardBg: "bg-gradient-to-br from-blue-500/20 via-slate-900/90 to-indigo-500/10",
      borderColor: "border-blue-400/50 hover:border-blue-300",
      glowEffect: "hover:shadow-2xl hover:shadow-blue-500/30",
      badgeBg: "bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/40 border border-blue-300/40",
      symbol: "🚀",
    },
    {
      id: "lop-11",
      label: "Toán 11",
      cardBg: "bg-gradient-to-br from-violet-500/20 via-slate-900/90 to-purple-500/10",
      borderColor: "border-violet-400/50 hover:border-violet-300",
      glowEffect: "hover:shadow-2xl hover:shadow-violet-500/30",
      badgeBg: "bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 text-white shadow-lg shadow-violet-500/40 border border-purple-300/40",
      symbol: "💎",
    },
    {
      id: "lop-12",
      label: "Toán 12",
      cardBg: "bg-gradient-to-br from-rose-500/20 via-slate-900/90 to-amber-500/10",
      borderColor: "border-rose-400/50 hover:border-rose-300",
      glowEffect: "hover:shadow-2xl hover:shadow-rose-500/30",
      badgeBg: "bg-gradient-to-br from-purple-600 via-rose-600 to-amber-500 text-white shadow-lg shadow-rose-500/40 border border-amber-300/40",
      symbol: "🏆",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 border border-indigo-500/30 p-8 sm:p-12 text-white space-y-12 shadow-2xl">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Ambient Floating Math Symbols */}
      <div className="absolute top-8 left-10 text-xl text-cyan-400/30 font-bold select-none animate-float hidden sm:block">
        <MathFormula math="\pi \approx 3.14" />
      </div>
      <div className="absolute top-8 right-12 text-xl text-pink-400/30 font-bold select-none animate-float-reverse hidden sm:block">
        <MathFormula math="\int f(x)\,dx" />
      </div>
      <div className="absolute bottom-8 left-12 text-xl text-amber-400/30 font-bold select-none animate-float hidden sm:block">
        <MathFormula math="\Delta = b^2 - 4ac" />
      </div>
      <div className="absolute bottom-8 right-12 text-xl text-emerald-400/30 font-bold select-none animate-float-reverse hidden sm:block">
        <MathFormula math="\vec{u} \cdot \vec{v}" />
      </div>



      {/* 2. HÀNG 1: CẤP THCS (TOÁN 6, TOÁN 7, TOÁN 8, TOÁN 9) */}
      <div className="relative z-10 space-y-4">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400/80 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30">
            Cấp Trung Học Cơ Sở (THCS)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {middleSchoolGrades.map((grade) => (
            <Link
              key={grade.id}
              href={getFirstLessonHref(grade.id)}
              className={`group relative overflow-hidden rounded-3xl border ${grade.borderColor} ${grade.cardBg} ${grade.glowEffect} p-7 transition-all duration-300 hover:-translate-y-2 flex items-center justify-center text-center backdrop-blur-xl shadow-xl`}
            >
              {/* Logo Badge chứa chữ 'Toán 6', 'Toán 7', ... */}
              <div className={`w-full py-5 px-6 rounded-2xl ${grade.badgeBg} flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-105`}>
                <span className="text-2xl drop-shadow-md">{grade.symbol}</span>
                <span className="font-black text-2xl sm:text-3xl tracking-tight drop-shadow-md">
                  {grade.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. HÀNG 2: CẤP THPT (TOÁN 10, TOÁN 11, TOÁN 12) */}
      <div className="relative z-10 space-y-4 pt-2">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-widest text-purple-400/80 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30">
            Cấp Trung Học Phổ Thông (THPT)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highSchoolGrades.map((grade) => (
            <Link
              key={grade.id}
              href={getFirstLessonHref(grade.id)}
              className={`group relative overflow-hidden rounded-3xl border ${grade.borderColor} ${grade.cardBg} ${grade.glowEffect} p-7 transition-all duration-300 hover:-translate-y-2 flex items-center justify-center text-center backdrop-blur-xl shadow-xl`}
            >
              {/* Logo Badge chứa chữ 'Toán 10', 'Toán 11', 'Toán 12' */}
              <div className={`w-full py-5 px-6 rounded-2xl ${grade.badgeBg} flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-105`}>
                <span className="text-2xl drop-shadow-md">{grade.symbol}</span>
                <span className="font-black text-2xl sm:text-3xl tracking-tight drop-shadow-md">
                  {grade.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
