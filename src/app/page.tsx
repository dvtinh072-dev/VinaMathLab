"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Heart, ShieldCheck, UserCheck } from "lucide-react";
import { MathFormula } from "@/components/math/MathFormula";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] space-y-6 sm:space-y-12 py-2 sm:py-4">
      {/* 1. Hero Gateway Banner */}
      <section className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border border-indigo-500/30 p-5 sm:p-12 md:p-16 text-center text-white space-y-6 sm:space-y-8 shadow-2xl">
        {/* Glow orbs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Floating math symbols */}
        <div className="absolute top-8 left-8 text-xl md:text-2xl text-cyan-400/60 font-bold select-none animate-float hidden sm:block">
          <MathFormula math="\pi \approx 3.14" />
        </div>
        <div className="absolute top-10 right-10 text-xl md:text-2xl text-pink-400/60 font-bold select-none animate-float-reverse hidden sm:block">
          <MathFormula math="\int f(x)\,dx" />
        </div>
        <div className="absolute bottom-8 left-12 text-xl md:text-2xl text-amber-400/60 font-bold select-none animate-float hidden sm:block">
          <MathFormula math="\Delta = b^2 - 4ac" />
        </div>
        <div className="absolute bottom-8 right-12 text-xl md:text-2xl text-emerald-400/60 font-bold select-none animate-float-reverse hidden sm:block">
          <MathFormula math="\vec{u} \cdot \vec{v}" />
        </div>

        {/* Main Title */}
        <div className="max-w-4xl mx-auto pt-1 sm:pt-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Hệ Thống Học Liệu{" "}
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-teal-300 to-rose-400 bg-clip-text text-transparent">
              VinaMath
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300/90 max-w-xl mx-auto mt-2 leading-relaxed">
            Học toán tương tác chuẩn SGK Kết nối tri thức 2026, thi thử THPT & ĐGNL trên máy tính và điện thoại di động.
          </p>
        </div>

        {/* 2 Main Gateway Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 max-w-xl mx-auto pt-1 sm:pt-2 w-full">
          {/* Nút 1: Dành Cho Học Sinh */}
          <Link
            href="/hoc-tap"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-blue-500/30 hover:scale-105 hover:shadow-blue-500/50 active:scale-95"
          >
            <span className="text-xl">🎓</span>
            <span>Dành Cho Học Sinh</span>
          </Link>

          {/* Nút 2: Dành Cho Giáo Viên */}
          <Link
            href="/giao-vien"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl bg-slate-900/90 text-slate-200 border border-slate-700 hover:border-emerald-400 hover:text-white hover:bg-slate-800 hover:scale-105 active:scale-95"
          >
            <span className="text-xl">👨‍🏫</span>
            <span>Dành Cho Giáo Viên</span>
          </Link>
        </div>
      </section>

      {/* 2. Thông Tin Web & Liên Hệ Tác Giả */}
      <section className="w-full max-w-4xl p-6 sm:p-8 rounded-3xl bg-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Thông Tin Nền Tảng VinaMath
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Hệ thống học liệu và toán học tương tác, tự học & luyện thi trực tuyến chất lượng cao.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Phiên bản 2026
          </span>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
            <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-primary" /> Tác Giả & Biên Soạn
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Đoàn Văn Tính & Nhóm Phát Triển VinaMath
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
            <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-500" /> Email Liên Hệ
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              contact@vinamath.edu.vn
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
            <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-500" /> Hỗ Trợ Kỹ Thuật & Đóng Góp
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Cộng đồng Giáo viên & Học sinh Toán Việt Nam
            </p>
          </div>
        </div>

        <div className="text-center pt-2 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <span>Phát triển vì mục tiêu nâng cao chất lượng dạy và học Toán học Việt Nam</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>
      </section>
    </div>
  );
}
