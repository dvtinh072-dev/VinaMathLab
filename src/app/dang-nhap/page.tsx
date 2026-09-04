"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Shield, GraduationCap, Lock, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function DangNhapPage() {
  const router = useRouter();
  const { loginStudent, loginAdmin } = useAuth();

  const [activeRole, setActiveRole] = useState<"student" | "admin">("student");
  const [studentCode, setStudentCode] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    if (activeRole === "student") {
      const res = await loginStudent(studentCode, studentPassword);
      if (res.success) {
        setSuccessMsg("Đăng nhập học sinh thành công! Đang chuyển hướng...");
        setTimeout(() => router.push("/tai-khoan"), 1000);
      } else {
        setErrorMsg(res.error || "Tên đăng nhập hoặc mật khẩu không chính xác.");
      }
    } else {
      const res = await loginAdmin(adminUsername, adminPassword);
      if (res.success) {
        setSuccessMsg("Đăng nhập Quản trị viên thành công! Đang chuyển hướng...");
        setTimeout(() => router.push("/admin"), 1000);
      } else {
        setErrorMsg(res.error || "Tài khoản quản trị viên không chính xác.");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-3xl bg-[#0e1526] border-2 border-amber-500/40 text-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Role Selector Tabs */}
        <div className="flex border-b border-slate-800 bg-[#131d33]">
          <button
            onClick={() => {
              setActiveRole("student");
              setErrorMsg(null);
            }}
            className={`flex-1 py-4 text-xs font-black flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeRole === "student"
                ? "border-cyan-400 text-cyan-300 bg-cyan-500/10"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Học Sinh</span>
          </button>

          <button
            onClick={() => {
              setActiveRole("admin");
              setErrorMsg(null);
            }}
            className={`flex-1 py-4 text-xs font-black flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeRole === "admin"
                ? "border-amber-400 text-amber-300 bg-amber-500/10"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Quản Trị Viên</span>
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-black text-white">
              {activeRole === "student" ? "Đăng Nhập Học Sinh" : "Đăng Nhập Quản Trị Viên"}
            </h2>
            <p className="text-xs text-slate-400">
              {activeRole === "student"
                ? "Nhập Tên đăng nhập hoặc Mã học sinh để vào học tập"
                : "Đăng nhập để xem báo cáo học sinh và quản trị hệ thống"}
            </p>
          </div>

          {/* Quick Demo Pre-seed Badge */}
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 space-y-1">
            <div className="font-bold text-amber-400">💡 Tài khoản kiểm thử:</div>
            {activeRole === "student" ? (
              <div>
                Tên đăng nhập: <code className="bg-slate-800 px-1 py-0.5 rounded text-cyan-300 font-bold">annguyen6a</code> (hoặc <code className="bg-slate-800 px-1 py-0.5 rounded text-cyan-300 font-bold">HS6001</code>) | Mật khẩu: <code className="bg-slate-800 px-1 py-0.5 rounded text-cyan-300 font-bold">123456</code>
              </div>
            ) : (
              <div>
                Admin: <code className="bg-slate-800 px-1 py-0.5 rounded text-amber-300 font-bold">admin</code> | Mật khẩu: <code className="bg-slate-800 px-1 py-0.5 rounded text-amber-300 font-bold">admin123</code>
              </div>
            )}
          </div>

          {/* Alerts */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {activeRole === "student" ? (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Tên Đăng Nhập hoặc Mã Học Sinh <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                    placeholder="Ví dụ: annguyen6a hoặc HS6001"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Mật Khẩu <span className="text-rose-400">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={studentPassword}
                    onChange={(e) => setStudentPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Tên Đăng Nhập / Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    placeholder="admin hoặc email..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Mật Khẩu</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Nhập mật khẩu admin..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
              activeRole === "student"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 shadow-cyan-500/30"
                : "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 hover:from-amber-400 hover:to-yellow-300 shadow-amber-500/30"
            }`}
          >
            <span>{isSubmitting ? "Đang xử lý..." : "Đăng Nhập"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center pt-2 text-xs text-slate-400">
            Chưa có tài khoản?{" "}
            <Link href="/dang-ky" className="font-bold text-cyan-400 hover:underline">
              Đăng ký tài khoản mới ngay
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
