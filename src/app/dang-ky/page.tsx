"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Shield, GraduationCap, Lock, KeyRound, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function DangKyPage() {
  const router = useRouter();
  const { registerStudent, registerAdmin } = useAuth();

  const [activeRole, setActiveRole] = useState<"student" | "admin">("student");

  // Student form
  const [studentFullName, setStudentFullName] = useState("");
  const [studentSchool, setStudentSchool] = useState("");
  const [studentGrade, setStudentGrade] = useState("Khối 6");
  const [studentClass, setStudentClass] = useState("Lớp 6A");
  const [studentUsername, setStudentUsername] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  // Admin form
  const [adminFullName, setAdminFullName] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    if (activeRole === "student") {
      const res = await registerStudent({
        fullName: studentFullName,
        schoolName: studentSchool,
        username: studentUsername,
        password: studentPassword,
        grade: studentGrade,
        schoolClass: studentClass,
      });
      if (res.success) {
        setSuccessMsg("Đăng ký tài khoản học sinh thành công! Đang chuyển hướng...");
        setTimeout(() => router.push("/tai-khoan"), 1200);
      } else {
        setErrorMsg(res.error || "Đăng ký thất bại.");
      }
    } else {
      const res = await registerAdmin({
        fullName: adminFullName,
        username: adminUsername,
        email: adminEmail,
        password: adminPassword,
        adminSecret,
      });
      if (res.success) {
        setSuccessMsg("Tạo tài khoản Quản trị viên thành công! Đang chuyển hướng...");
        setTimeout(() => router.push("/admin"), 1200);
      } else {
        setErrorMsg(res.error || "Đăng ký quản trị viên thất bại.");
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
            <span>Tài Khoản Học Sinh</span>
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
            <span>Tài Khoản Quản Trị</span>
          </button>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-black text-white">
              {activeRole === "student" ? "Đăng Ký Tài Khoản Học Sinh" : "Tạo Tài Khoản Quản Trị Viên"}
            </h2>
            <p className="text-xs text-slate-400">
              {activeRole === "student"
                ? "Sử dụng Tên đăng nhập để lưu trữ tiến độ học tập và thành tích cá nhân"
                : "Yêu cầu Mã bảo mật hệ thống để kích hoạt quyền Admin"}
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
                <label className="block text-xs font-bold text-slate-300 mb-1">Họ và Tên Học Sinh <span className="text-rose-400">*</span></label>
                <input
                  type="text"
                  required
                  value={studentFullName}
                  onChange={(e) => setStudentFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Trường Học <span className="text-rose-400">*</span></label>
                <input
                  type="text"
                  required
                  value={studentSchool}
                  onChange={(e) => setStudentSchool(e.target.value)}
                  placeholder="Ví dụ: THCS Giảng Võ, THCS Trưng Vương..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Khối Lớp</label>
                  <select
                    value={studentGrade}
                    onChange={(e) => setStudentGrade(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Khối 6">Khối 6</option>
                    <option value="Khối 7">Khối 7</option>
                    <option value="Khối 8">Khối 8</option>
                    <option value="Khối 9">Khối 9</option>
                    <option value="Khối 10">Khối 10</option>
                    <option value="Khối 11">Khối 11</option>
                    <option value="Khối 12">Khối 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Tên Lớp <span className="text-rose-400">*</span></label>
                  <input
                    type="text"
                    required
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    placeholder="Ví dụ: 6A1, 10A2..."
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

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
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck="false"
                    value={studentUsername}
                    onChange={(e) => setStudentUsername(e.target.value.toLowerCase().replace(/\s+/g, ""))}
                    placeholder="Ví dụ: annguyen6a (viết liền, không dấu)"
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
                    placeholder="Tối thiểu 6 ký tự..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Họ và Tên Quản Trị</label>
                <input
                  type="text"
                  required
                  value={adminFullName}
                  onChange={(e) => setAdminFullName(e.target.value)}
                  placeholder="Ví dụ: Thầy Trần Quang C"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Tên Đăng Nhập</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    placeholder="Ví dụ: gv_toan6"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="admin@vinamath.edu.vn"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Mật Khẩu Quản Trị</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Tạo mật khẩu admin..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1">
                  Mã Bảo Mật Hệ Thống (Admin Secret Key)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-400">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={adminSecret}
                    onChange={(e) => setAdminSecret(e.target.value)}
                    placeholder="Nhập VINAMATH2026..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-amber-500/50 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  * Mã kích hoạt quản trị mặc định: <code className="text-amber-400">VINAMATH2026</code>
                </p>
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
            <span>{isSubmitting ? "Đang tạo tài khoản..." : "Hoàn Tất Đăng Ký"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center pt-2 text-xs text-slate-400">
            Đã có tài khoản?{" "}
            <Link href="/dang-nhap" className="font-bold text-cyan-400 hover:underline">
              Đăng nhập ngay
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
