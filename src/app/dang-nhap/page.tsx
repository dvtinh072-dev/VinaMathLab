"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Shield, GraduationCap, Lock, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function DangNhapPage() {
  const router = useRouter();
  const { loginStudent, loginAdmin, loginTeacher } = useAuth();

  const [activeRole, setActiveRole] = useState<"student" | "teacher" | "admin">("student");
  const [studentCode, setStudentCode] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [teacherUsername, setTeacherUsername] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const r = params.get("role");
      if (r === "teacher") setActiveRole("teacher");
      else if (r === "admin") setActiveRole("admin");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    const cleanStudentId = studentCode.trim();
    const cleanStudentPass = studentPassword.trim();
    const cleanAdminUser = adminUsername.trim();
    const cleanAdminPass = adminPassword.trim();
    const cleanTeacherUser = teacherUsername.trim();
    const cleanTeacherPass = teacherPassword.trim();

    if (activeRole === "student") {
      const res = await loginStudent(cleanStudentId, cleanStudentPass);
      if (res.success) {
        setSuccessMsg("Đăng nhập thành công! Đang chuyển hướng...");
        let redirectUrl = "/tai-khoan";
        try {
          const raw = localStorage.getItem("vinamath_auth_user");
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.role === "admin") redirectUrl = "/admin";
            else if (parsed.role === "teacher") redirectUrl = "/giao-vien";
          }
        } catch {}
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 800);
      } else {
        setErrorMsg(res.error || "Tên đăng nhập hoặc mật khẩu không chính xác.");
      }
    } else if (activeRole === "teacher") {
      const res = await loginTeacher(cleanTeacherUser, cleanTeacherPass);
      if (res.success) {
        setSuccessMsg("Đăng nhập thành công! Đang chuyển hướng về Bảng Quản Lý Lớp...");
        setTimeout(() => {
          window.location.href = "/giao-vien";
        }, 800);
      } else {
        setErrorMsg(res.error || "Tài khoản giáo viên hoặc mật khẩu không chính xác.");
      }
    } else {
      const res = await loginAdmin(cleanAdminUser, cleanAdminPass);
      if (res.success) {
        setSuccessMsg("Đăng nhập thành công! Đang chuyển hướng...");
        let redirectUrl = "/admin";
        try {
          const raw = localStorage.getItem("vinamath_auth_user");
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.role === "student") redirectUrl = "/tai-khoan";
            else if (parsed.role === "teacher") redirectUrl = "/giao-vien";
          }
        } catch {}
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 800);
      } else {
        setErrorMsg(res.error || "Tài khoản quản trị viên không chính xác.");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-3xl bg-[#0e1526] border-2 border-emerald-500/30 text-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Role Selector Tabs (3 Tabs: Học Sinh, Giáo Viên, Quản Trị Viên) */}
        <div className="flex border-b border-slate-800 bg-[#131d33]">
          <button
            type="button"
            onClick={() => {
              setActiveRole("student");
              setErrorMsg(null);
            }}
            className={`flex-1 py-3.5 text-xs font-black flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeRole === "student"
                ? "border-cyan-400 text-cyan-300 bg-cyan-500/10"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Học Sinh</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveRole("teacher");
              setErrorMsg(null);
            }}
            className={`flex-1 py-3.5 text-xs font-black flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeRole === "teacher"
                ? "border-emerald-400 text-emerald-300 bg-emerald-500/10"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <User className="w-4 h-4" />
            <span>Dành Cho Giáo Viên</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveRole("admin");
              setErrorMsg(null);
            }}
            className={`flex-1 py-3.5 text-xs font-black flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeRole === "admin"
                ? "border-amber-400 text-amber-300 bg-amber-500/10"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Quản Trị</span>
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4" autoComplete="on">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-black text-white">
              {activeRole === "student"
                ? "Đăng Nhập Học Sinh"
                : activeRole === "teacher"
                ? "Cổng Quản Lý Lớp Giáo Viên"
                : "Đăng Nhập Quản Trị Viên"}
            </h2>
            <p className="text-xs text-slate-400">
              {activeRole === "student"
                ? "Nhập Tên đăng nhập hoặc Mã học sinh để vào học tập"
                : activeRole === "teacher"
                ? "Đăng nhập để xem thống kê học sinh trong lớp được Admin phân công"
                : "Đăng nhập để xem báo cáo học sinh và quản trị hệ thống"}
            </p>
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
                  Tên Đăng Nhập <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    id="student-username"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck="false"
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                    placeholder="Ví dụ: annguyen6a"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Mật Khẩu <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="student-password"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    value={studentPassword}
                    onChange={(e) => setStudentPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </>
          ) : activeRole === "teacher" ? (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Tên Đăng Nhập Giáo Viên <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="teacher-user"
                    id="teacher-user"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck="false"
                    value={teacherUsername}
                    onChange={(e) => setTeacherUsername(e.target.value)}
                    placeholder="Ví dụ: gv_toan6 hoặc email..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Mật Khẩu <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    name="teacher-pass"
                    id="teacher-pass"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    value={teacherPassword}
                    onChange={(e) => setTeacherPassword(e.target.value)}
                    placeholder="Nhập mật khẩu giáo viên..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300/90 leading-relaxed">
                ℹ️ <strong>Lưu ý phân quyền:</strong> Tài khoản và danh sách lớp phụ trách do Quản trị viên (Admin) cấp. Giáo viên chỉ theo dõi được học sinh trong lớp mình được phân quyền.
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
                    name="admin-user"
                    id="admin-user"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck="false"
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    placeholder="Tên đăng nhập hoặc email..."
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
                    name="admin-pass"
                    id="admin-pass"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
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
                : activeRole === "teacher"
                ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-400 shadow-emerald-500/30"
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
