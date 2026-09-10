"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Moon, Sun, Shield, GraduationCap, LogIn, LogOut, 
  BookOpen, Award, Sparkles, Menu, X, Home, Users
} from "lucide-react";
import { useTheme } from "next-themes";
import { useAuth } from "@/context/AuthContext";
import { VinaMathLogo } from "./VinaMathLogo";
import { formatNaturalNumber } from "@/components/interactive/GamifiedMathQuiz";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { user, isAdmin, isStudent, isTeacher, logout, openAuthModal } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Trang Chủ", icon: Home },
    { href: "/hoc-tap", label: "Học Liệu Khối Lớp", icon: BookOpen },
    { href: "/luyen-thi", label: "Phòng Thi Thử", icon: Award },
    { href: "/giao-vien", label: "Dành Cho Giáo Viên", icon: Users },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4 py-2 sm:py-3">
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <VinaMathLogo size="sm" className="sm:hidden" />
          <VinaMathLogo size="md" className="hidden sm:flex" />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-primary/30"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: User Profile & Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* User Auth Display */}
          {isAdmin ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/40 text-[11px] sm:text-xs font-black hover:bg-amber-500/30 transition-all shadow-sm"
              >
                <Shield className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Quản Trị</span>
                <span className="sm:hidden">Admin</span>
              </Link>

              <button
                onClick={logout}
                className="p-1.5 sm:p-2 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
                title="Đăng xuất Admin"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : isTeacher ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="/giao-vien"
                className="inline-flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 text-[11px] sm:text-xs font-black hover:bg-emerald-500/30 transition-all shadow-sm"
              >
                <Users className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Quản Lý Lớp: {user?.fullName || user?.username}</span>
                <span className="sm:hidden">Giáo Viên</span>
              </Link>

              <button
                onClick={logout}
                className="p-1.5 sm:p-2 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
                title="Đăng xuất Giáo viên"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : isStudent ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="/tai-khoan"
                className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-cyan-500/30 text-xs hover:border-cyan-500 transition-all cursor-pointer shadow-sm group"
                title="Xem Hồ sơ & Sổ tay tiến độ cá nhân"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black flex items-center justify-center text-[10px] shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <div className="font-black text-slate-800 dark:text-slate-200 text-[10px] sm:text-[11px] truncate max-w-[80px] sm:max-w-[120px] group-hover:text-primary transition-colors">
                    {user?.fullName}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
                    <span>⭐ {formatNaturalNumber(user?.exp || 0)}</span>
                  </div>
                </div>
              </Link>

              <button
                onClick={logout}
                className="p-1.5 sm:p-2 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
                title="Đăng xuất"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={() => openAuthModal("student", "login")}
                className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all flex items-center gap-1 shadow-sm"
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
            className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105 shadow-sm"
            title="Đổi giao diện Sáng / Tối"
            aria-label="Đổi giao diện Sáng / Tối"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-4 py-3 space-y-2 backdrop-blur-2xl shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-slate-100/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
