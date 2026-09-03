"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  GraduationCap,
  BookOpen,
  Search,
  Edit3,
  ExternalLink,
  Download,
  Upload,
  UserCheck,
  Award,
  Sparkles,
  RefreshCw,
  Coins,
  CheckCircle2,
  AlertCircle,
  Plus,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import { GRADE_6_AI_PRACTICE_DATA } from "@/data/grade6AiPracticeData";
import { formatNaturalNumber } from "@/components/interactive/GamifiedMathQuiz";

export default function AdminDashboardPage() {
  const { user, isAdmin, openAuthModal, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<"lessons" | "students" | "backup">("lessons");
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState<any[]>([]);
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Fetch registered users when admin is authenticated
  useEffect(() => {
    if (isAdmin) {
      fetchStudents();
    }
  }, [isAdmin]);

  const fetchStudents = async () => {
    setIsLoadingStudents(true);
    try {
      const res = await fetch("/api/auth/users");
      const data = await res.json();
      if (data.success && data.users) {
        setStudents(data.users.filter((u: any) => u.role === "student"));
      }
    } catch (e) {
      console.error("Lỗi lấy danh sách học sinh", e);
    } finally {
      setIsLoadingStudents(false);
    }
  };

  const lessonsList = Object.values(GRADE_6_DETAILED_LESSONS).filter((lesson) => {
    const q = searchQuery.toLowerCase();
    return (
      lesson.title.toLowerCase().includes(q) ||
      lesson.bookChapter.toLowerCase().includes(q) ||
      lesson.id.toLowerCase().includes(q)
    );
  });

  const handleExportBackup = () => {
    const backupData = {
      timestamp: new Date().toISOString(),
      grade6Lessons: GRADE_6_DETAILED_LESSONS,
      grade6AiPractice: GRADE_6_AI_PRACTICE_DATA,
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vinamath-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatusMessage("Đã xuất file dự phòng JSON thành công!");
    setTimeout(() => setStatusMessage(null), 3000);
  };

  // If not admin, show login gate
  if (!isAdmin) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#0e1526] border-2 border-amber-500/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Shield className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-black text-white">Khu Vực Quản Trị Viên (Admin)</h2>
            <p className="text-xs text-slate-300">
              Vui lòng đăng nhập với tài khoản Quản trị viên để truy cập trang quản lý bài học và danh sách học sinh.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
            <span className="text-amber-400 font-bold block">💡 Tài khoản Admin mặc định:</span>
            <span>
              Tên: <code className="text-amber-300 font-bold">admin</code> | Mật khẩu: <code className="text-amber-300 font-bold">admin123</code>
            </span>
          </div>

          <button
            onClick={() => openAuthModal("admin", "login")}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm hover:from-amber-400 hover:to-yellow-300 shadow-lg shadow-amber-500/30 transition-all"
          >
            Đăng Nhập Quản Trị Viên Ngay
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d162b] via-[#112247] to-[#1a1c3d] border-2 border-amber-500/30 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black">
              <Shield className="w-3.5 h-3.5" /> Trung Tâm Quản Trị Hệ Thống
            </span>
            <span className="text-xs text-slate-400">
              Xin chào, <strong className="text-white">{user?.fullName || user?.username}</strong>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Quản Lý Bài Tập SGK, Đề Luyện Thêm & Học Sinh
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Chỉnh sửa trực tiếp 100% nội dung câu hỏi, công thức KaTeX, đáp án đúng và hình vẽ hình học trên nền tảng VinaMath.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={handleExportBackup}
            className="px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-bold text-xs hover:bg-cyan-950/40 transition-all flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" /> Xuất Backup JSON
          </button>
          <button
            onClick={logout}
            className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold text-xs hover:bg-rose-950/40 transition-all"
          >
            Đăng Xuất Admin
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("lessons")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all ${
            activeTab === "lessons"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Danh Sách 43 Bài Học & Bài Tập ({Object.keys(GRADE_6_DETAILED_LESSONS).length})</span>
        </button>

        <button
          onClick={() => setActiveTab("students")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all ${
            activeTab === "students"
              ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Danh Sách Học Sinh & Bảng Điểm ({students.length})</span>
        </button>
      </div>

      {/* TAB 1: LESSONS MANAGEMENT */}
      {activeTab === "lessons" && (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài học, chương, mã bài..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Lessons Table */}
          <div className="rounded-3xl bg-[#0e1526] border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#131d33] text-[11px] font-black uppercase text-amber-300 border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">Bài Số</th>
                    <th className="py-3.5 px-4">Tên Bài Học</th>
                    <th className="py-3.5 px-4">Chương SGK</th>
                    <th className="py-3.5 px-4 text-center">Số Bài SGK</th>
                    <th className="py-3.5 px-4 text-center">Số Câu Luyện Thêm</th>
                    <th className="py-3.5 px-4 text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {lessonsList.map((lesson) => {
                    const sgkCount = lesson.quizQuestions ? lesson.quizQuestions.length : 0;
                    const aiList = GRADE_6_AI_PRACTICE_DATA[lesson.id] || [];
                    const aiCount = aiList.length;

                    return (
                      <tr key={lesson.id} className="hover:bg-slate-900/60 transition-colors">
                        <td className="py-3 px-4 font-black text-amber-400">
                          Bài {lesson.lessonNumber}
                        </td>
                        <td className="py-3 px-4 font-bold text-white max-w-xs truncate">
                          {lesson.title}
                        </td>
                        <td className="py-3 px-4 text-slate-400 text-[11px]">
                          {lesson.bookChapter}
                        </td>
                        <td className="py-3 px-4 text-center font-black">
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            {sgkCount} bài
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center font-black">
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {aiCount} câu
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Link
                            href={`/hoc-tap/lop-6/${lesson.id}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-[11px] hover:scale-105 transition-all shadow-sm"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Mở Sửa Trực Tiếp</span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STUDENTS MANAGEMENT */}
      {activeTab === "students" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Danh Sách Học Sinh Đã Đăng Ký ({students.length})</span>
            </h3>

            <button
              onClick={fetchStudents}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold hover:text-white flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Làm mới
            </button>
          </div>

          <div className="rounded-3xl bg-[#0e1526] border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#131d33] text-[11px] font-black uppercase text-cyan-300 border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">Mã Học Sinh</th>
                    <th className="py-3.5 px-4">Họ và Tên</th>
                    <th className="py-3.5 px-4">Khối / Lớp</th>
                    <th className="py-3.5 px-4 text-center">Tổng Điểm EXP</th>
                    <th className="py-3.5 px-4 text-center">VinaCoins</th>
                    <th className="py-3.5 px-4 text-center">Chuỗi Streak</th>
                    <th className="py-3.5 px-4 text-right">Ngày Đăng Ký</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-900/60 transition-colors">
                      <td className="py-3 px-4 font-black text-cyan-300">
                        {student.studentCode}
                      </td>
                      <td className="py-3 px-4 font-bold text-white">
                        {student.fullName}
                      </td>
                      <td className="py-3 px-4 text-slate-400">
                        {student.grade || "Khối 6"} - {student.schoolClass || "Lớp 6A"}
                      </td>
                      <td className="py-3 px-4 text-center font-black text-amber-300">
                        ⭐ {formatNaturalNumber(student.exp || 0)} EXP
                      </td>
                      <td className="py-3 px-4 text-center font-black text-yellow-400">
                        🪙 {student.coins || 0}
                      </td>
                      <td className="py-3 px-4 text-center font-black text-orange-400">
                        🔥 x{student.streak || 1}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-500 text-[11px]">
                        {student.createdAt ? new Date(student.createdAt).toLocaleDateString("vi-VN") : "30/08/2026"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
