"use client";

import React from "react";
import Link from "next/link";
import { Moon, Sun, User, Shield, GraduationCap, LogIn, LogOut, Sparkles, Coins } from "lucide-react";
import { useTheme } from "next-themes";
import { useAuth } from "@/context/AuthContext";
import { VinaMathLogo } from "./VinaMathLogo";
import { formatNaturalNumber } from "@/components/interactive/GamifiedMathQuiz";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { user, isAdmin, isStudent, logout, openAuthModal } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 py-3">
        {/* Logo VinaMath */}
        <VinaMathLogo size="md" />

        {/* User Profile & Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* User Auth Display */}
          {isAdmin ? (
            <div className="flex items-center gap-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/40 text-xs font-black hover:bg-amber-500/30 transition-all shadow-sm"
              >
                <Shield className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Trang Quản Trị</span>
                <span className="sm:hidden">Admin</span>
              </Link>

              <button
                onClick={logout}
                className="p-2 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
                title="Đăng xuất Admin"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : isStudent ? (
            <div className="flex items-center gap-2">
              {/* Student Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-cyan-500/30 text-xs">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black flex items-center justify-center text-[10px] shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div className="hidden sm:block text-left leading-tight">
                  <div className="font-black text-slate-800 dark:text-slate-200 text-[11px] truncate max-w-[120px]">
                    {user?.fullName}
                  </div>
                  <div className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
                    <span>{user?.studentCode}</span>
                    <span>• ⭐ {formatNaturalNumber(user?.exp || 0)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={logout}
                className="p-2 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
                title="Đăng xuất"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => openAuthModal("student", "login")}
                className="px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all flex items-center gap-1 shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Đăng Nhập</span>
              </button>

              <button
                onClick={() => openAuthModal("student", "register")}
                className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Đăng Ký
              </button>
            </div>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105 shadow-sm"
            title="Đổi giao diện Sáng / Tối"
            aria-label="Đổi giao diện Sáng / Tối"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}
