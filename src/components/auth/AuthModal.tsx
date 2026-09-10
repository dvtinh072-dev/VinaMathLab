"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, User, Shield, GraduationCap, Lock, KeyRound, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function AuthModal() {
  const router = useRouter();
  const { isAuthModalOpen, closeAuthModal, authModalConfig, loginStudent, loginAdmin, registerStudent, registerAdmin } = useAuth();

  const [activeRole, setActiveRole] = useState<"student" | "admin">("student");
  const [isRegister, setIsRegister] = useState(false);

  // Student Form State
  const [studentCode, setStudentCode] = useState("");
  const [studentUsername, setStudentUsername] = useState("");
  const [studentSchool, setStudentSchool] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentFullName, setStudentFullName] = useState("");
  const [studentGrade, setStudentGrade] = useState("Khối 6");
  const [studentClass, setStudentClass] = useState("Lớp 6A");

  // Admin Form State
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminFullName, setAdminFullName] = useState("");
  const [adminSecret, setAdminSecret] = useState("");

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthModalOpen) {
      setActiveRole(authModalConfig.defaultRole);
      setIsRegister(authModalConfig.defaultTab === "register");
      setErrorMsg(null);
      setSuccessMsg(null);
    }
  }, [isAuthModalOpen, authModalConfig]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    if (activeRole === "student") {
      if (isRegister) {
        const res = await registerStudent({
          fullName: studentFullName,
          schoolName: studentSchool,
          username: studentUsername,
          password: studentPassword,
          grade: studentGrade,
          schoolClass: studentClass,
        });
        if (res.success) {
          setSuccessMsg("Đăng ký tài khoản học sinh thành công!");
          setTimeout(() => {
            closeAuthModal();
            router.push("/tai-khoan");
          }, 1000);
        } else {
          setErrorMsg(res.error || "Đăng ký thất bại.");
        }
      } else {
        const res = await loginStudent(studentCode, studentPassword);
        if (res.success) {
          setSuccessMsg("Đăng nhập học sinh thành công!");
          setTimeout(() => {
            closeAuthModal();
            router.push("/tai-khoan");
          }, 800);
        } else {
          setErrorMsg(res.error || "Đăng nhập thất bại.");
        }
      }
    } else {
      // Admin
      if (isRegister) {
        const res = await registerAdmin({
          fullName: adminFullName,
          username: adminUsername,
          password: adminPassword,
          adminSecret,
        });
        if (res.success) {
          setSuccessMsg("Tạo tài khoản quản trị viên thành công!");
          setTimeout(() => {
            closeAuthModal();
            router.push("/admin");
          }, 1000);
        } else {
          setErrorMsg(res.error || "Đăng ký admin thất bại.");
        }
      } else {
        const res = await loginAdmin(adminUsername, adminPassword);
        if (res.success) {
          setSuccessMsg("Đăng nhập Quản trị viên thành công!");
          setTimeout(() => {
            closeAuthModal();
            router.push("/admin");
          }, 800);
        } else {
          setErrorMsg(res.error || "Đăng nhập thất bại.");
        }
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0e1526] border-2 border-amber-500/40 text-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header Tabs: Chọn Học Sinh hoặc Quản Trị */}
        <div className="flex border-b border-slate-800 bg-[#131d33]">
          <button
            onClick={() => {
              setActiveRole("student");
              setErrorMsg(null);
            }}
            className={`flex-1 py-3.5 px-4 text-xs font-black flex items-center justify-center gap-2 border-b-2 transition-all ${
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
            className={`flex-1 py-3.5 px-4 text-xs font-black flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeRole === "admin"
                ? "border-amber-400 text-amber-300 bg-amber-500/10"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Quản Trị Viên</span>
          </button>

          <button
            onClick={closeAuthModal}
            className="p-3 text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all border-l border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-lg font-black text-white">
              {activeRole === "student"
                ? isRegister
                  ? "Tạo Tài Khoản Học Sinh Mới"
                  : "Đăng Nhập Học Sinh"
                : isRegister
                ? "Tạo Tài Khoản Quản Trị Viên"
                : "Đăng Nhập Quản Trị Viên"}
            </h3>
            <p className="text-xs text-slate-400">
              {activeRole === "student"
                ? "Sử dụng Tên đăng nhập để lưu trữ tiến độ học tập và thành tích"
                : "Dành cho Giáo viên & Quản trị viên quản trị hệ thống bài học"}
            </p>
          </div>


          {/* Notification Messages */}
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

          {/* Form Fields: Student */}
          {activeRole === "student" && (
            <>
              {isRegister && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Họ và Tên Học Sinh</label>
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
                    <label className="block text-xs font-bold text-slate-300 mb-1">Trường Học</label>
                    <input
                      type="text"
                      required
                      value={studentSchool}
                      onChange={(e) => setStudentSchool(e.target.value)}
                      placeholder="Ví dụ: THCS Giảng Võ, THCS Cầu Giấy..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Khối Lớp</label>
                      <select
                        value={studentGrade}
                        onChange={(e) => setStudentGrade(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
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
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Tên Lớp</label>
                      <input
                        type="text"
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        placeholder="Ví dụ: Lớp 6A"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Tên Đăng Nhập {isRegister ? "(viết liền không dấu)" : ""}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={isRegister ? studentUsername : studentCode}
                    onChange={(e) => {
                      const val = e.target.value.toLowerCase().replace(/\s+/g, "");
                      if (isRegister) {
                        setStudentUsername(val);
                      } else {
                        setStudentCode(val);
                      }
                    }}
                    placeholder={isRegister ? "Ví dụ: annguyen6a" : "Nhập tên đăng nhập (ví dụ: annguyen6a)"}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 font-mono"
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
                    value={studentPassword}
                    onChange={(e) => setStudentPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </>
          )}

          {/* Form Fields: Admin */}
          {activeRole === "admin" && (
            <>
              {isRegister && (
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Họ và Tên Quản Trị</label>
                  <input
                    type="text"
                    required
                    value={adminFullName}
                    onChange={(e) => setAdminFullName(e.target.value)}
                    placeholder="Ví dụ: Thầy Nguyễn Văn B"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}

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
                    placeholder="Tên đăng nhập hoặc email..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
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
                    placeholder="Nhập mật khẩu admin..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {isRegister && (
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
                      placeholder="Nhập mã VINAMATH2026..."
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-amber-500/50 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    * Mã bảo mật mặc định: <code className="text-amber-400">VINAMATH2026</code>
                  </p>
                </div>
              )}
            </>
          )}

          {/* Action Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
              activeRole === "student"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 shadow-cyan-500/30"
                : "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 hover:from-amber-400 hover:to-yellow-300 shadow-amber-500/30"
            }`}
          >
            <span>
              {isSubmitting
                ? "Đang xử lý..."
                : isRegister
                ? "Đăng Ký Tài Khoản Ngay"
                : "Đăng Nhập Vào Hệ Thống"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Switch Login / Register Mode */}
          <div className="text-center pt-2 text-xs text-slate-400">
            {isRegister ? (
              <span>
                Đã có tài khoản?{" "}
                <button
                  type="button"
                  onClick={() => setIsRegister(false)}
                  className="font-bold text-cyan-400 hover:underline"
                >
                  Đăng nhập ngay
                </button>
              </span>
            ) : (
              <span>
                Chưa có tài khoản?{" "}
                <button
                  type="button"
                  onClick={() => setIsRegister(true)}
                  className="font-bold text-amber-400 hover:underline"
                >
                  Tạo tài khoản mới
                </button>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
