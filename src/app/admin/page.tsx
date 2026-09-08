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
  Award,
  Sparkles,
  RefreshCw,
  Coins,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Video,
  Eye,
  Filter,
  Flame,
  ChevronRight,
  Clock,
  X,
  Layers,
  School,
  FileSpreadsheet,
  Trash2,
  UserCheck
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import { GRADE_6_AI_PRACTICE_DATA } from "@/data/grade6AiPracticeData";
import { formatNaturalNumber } from "@/components/interactive/GamifiedMathQuiz";
import { getLocalStudentProgress } from "@/lib/studentProgressClient";

export default function AdminDashboardPage() {
  const { user, isAdmin, openAuthModal, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<"lessons" | "students" | "mistakes" | "backup">("students");
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState<any[]>([]);
  const [progressData, setProgressData] = useState<any>({ students: [], topMistakes: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Bộ lọc trường & lớp & khối
  const [selectedSchool, setSelectedSchool] = useState<string>("all");
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");

  // Modal chi tiết học sinh
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<any | null>(null);

  // Lấy dữ liệu người dùng & tiến độ học tập từ API
  useEffect(() => {
    if (isAdmin) {
      fetchAdminData();
    }
  }, [isAdmin]);

  const fetchAdminData = async () => {
    setIsLoading(true);
    try {
      // 1. Lấy danh sách users từ máy chủ
      const resUsers = await fetch("/api/auth/users");
      const dataUsers = await resUsers.json();
      let rawStudents: any[] = [];
      if (dataUsers.success && dataUsers.users) {
        rawStudents = dataUsers.users.filter((u: any) => u.role === "student");
      }

      // 1b. Gộp danh sách học sinh đăng ký lưu cục bộ (localStorage) để không bao giờ bị sót học sinh mới
      if (typeof window !== "undefined") {
        try {
          const deletedIdsRaw = localStorage.getItem("vinamath_deleted_user_ids");
          const deletedSet: Set<string> = new Set(
            deletedIdsRaw ? JSON.parse(deletedIdsRaw).map((x: string) => String(x).toLowerCase()) : []
          );

          // Loại bỏ các user đã bị xóa khỏi danh sách server
          rawStudents = rawStudents.filter((s: any) => {
            const sId = s.id?.toLowerCase();
            const sUser = s.username?.toLowerCase();
            const sCode = s.studentCode?.toLowerCase();
            return !(
              (sId && deletedSet.has(sId)) ||
              (sUser && deletedSet.has(sUser)) ||
              (sCode && deletedSet.has(sCode))
            );
          });

          const localSaved = localStorage.getItem("vinamath_local_registered_users");
          if (localSaved) {
            const parsedLocal = JSON.parse(localSaved);
            const localStudents = parsedLocal.filter((u: any) => {
              if (u.role !== "student") return false;
              const uId = u.id?.toLowerCase();
              const uUser = u.username?.toLowerCase();
              const uCode = u.studentCode?.toLowerCase();
              return !(
                (uId && deletedSet.has(uId)) ||
                (uUser && deletedSet.has(uUser)) ||
                (uCode && deletedSet.has(uCode))
              );
            });

            const existingKeys = new Set(
              rawStudents.map((s) => s.id || s.username?.toLowerCase() || s.studentCode?.toLowerCase())
            );

            localStudents.forEach((ls: any) => {
              const key = ls.id || ls.username?.toLowerCase() || ls.studentCode?.toLowerCase();
              if (key && !existingKeys.has(key)) {
                rawStudents.unshift(ls);
                existingKeys.add(key);
              }
            });
          }
        } catch (e) {
          console.warn("Lỗi đọc local registered users:", e);
        }
      }

      setStudents(rawStudents);

      // 2. Lấy dữ liệu tiến độ & báo cáo câu sai
      const resProgress = await fetch("/api/student/progress?mode=admin");
      const dataProgress = await resProgress.json();
      if (dataProgress.success) {
        setProgressData(dataProgress);
      }
    } catch (e) {
      console.error("Lỗi lấy dữ liệu quản trị:", e);
    } finally {
      setIsLoading(false);
    }
  };

  // Danh sách trường học duy nhất để làm bộ lọc
  const uniqueSchools = Array.from(
    new Set(
      students
        .map((s) => s.schoolName)
        .filter((s): s is string => Boolean(s && s.trim().length > 0))
    )
  );

  // Danh sách lớp học duy nhất
  const uniqueClasses = Array.from(
    new Set(
      students
        .map((s) => s.schoolClass)
        .filter((s): s is string => Boolean(s && s.trim().length > 0))
    )
  );

  // Lọc học sinh theo từ khoá, trường, lớp, khối
  const filteredStudents = students.filter((s) => {
    const q = searchQuery.toLowerCase();
    const matchQuery =
      s.fullName?.toLowerCase().includes(q) ||
      s.studentCode?.toLowerCase().includes(q) ||
      s.username?.toLowerCase().includes(q) ||
      s.schoolName?.toLowerCase().includes(q) ||
      s.schoolClass?.toLowerCase().includes(q);

    const matchSchool = selectedSchool === "all" || s.schoolName === selectedSchool;
    const matchClass = selectedClass === "all" || s.schoolClass === selectedClass;
    const matchGrade = selectedGrade === "all" || s.grade === selectedGrade;

    return matchQuery && matchSchool && matchClass && matchGrade;
  });

  // Tìm thông tin tiến độ kèm theo học sinh (gộp cả dữ liệu máy chủ và localStorage)
  const getStudentProgress = (studentId: string, studentCode?: string, username?: string) => {
    const sId = (studentId || "").toLowerCase();
    const sCode = (studentCode || "").toLowerCase();
    const sUser = (username || "").toLowerCase();

    // 1. Tìm bản ghi từ server
    let serverProg: any = null;
    if (progressData?.students) {
      serverProg = progressData.students.find((p: any) => {
        const pId = (p.id || p.userId || "").toLowerCase();
        const pCode = (p.studentCode || "").toLowerCase();
        const pUser = (p.username || "").toLowerCase();

        return (
          (sId && (pId === sId || pCode === sId || pUser === sId)) ||
          (sCode && (pId === sCode || pCode === sCode || pUser === sCode)) ||
          (sUser && (pId === sUser || pCode === sUser || pUser === sUser))
        );
      }) || null;
    }

    // 2. Tìm bản ghi từ localStorage (phòng khi đang chạy trên Vercel serverless)
    const localRecord = getLocalStudentProgress(studentId) || 
      (studentCode ? getLocalStudentProgress(studentCode) : null) || 
      (username ? getLocalStudentProgress(username) : null);

    if (!localRecord) return serverProg;

    const wrongList = Object.values(localRecord.wrongQuestions || {});
    const activeWrongs = wrongList.filter((w: any) => !w.isResolved);
    const resolvedWrongs = wrongList.filter((w: any) => w.isResolved);
    const totalWrongAttempts = wrongList.reduce((sum: number, w: any) => sum + (w.wrongCount || 1), 0);
    const completedLessonsCount = Object.values(localRecord.lessons || {}).filter((l: any) => l.isCompleted).length;

    if (!serverProg) {
      return {
        id: studentId,
        studentCode,
        username,
        totalVideoMinutes: localRecord.totalVideoMinutes || 0,
        totalCompletedLessons: completedLessonsCount,
        lessonsProgress: localRecord.lessons || {},
        wrongQuestions: localRecord.wrongQuestions || {},
        wrongQuestionsList: wrongList,
        activeWrongCount: activeWrongs.length,
        resolvedWrongCount: resolvedWrongs.length,
        totalWrongAttempts,
      };
    }

    // Gộp cả 2 để lấy kết quả tối ưu nhất
    const mergedWrongMap = { ...(serverProg.wrongQuestions || {}), ...(localRecord.wrongQuestions || {}) };
    const mergedWrongList = Object.values(mergedWrongMap);

    return {
      ...serverProg,
      totalVideoMinutes: Math.max(serverProg.totalVideoMinutes || 0, localRecord.totalVideoMinutes || 0),
      totalCompletedLessons: Math.max(serverProg.totalCompletedLessons || 0, completedLessonsCount),
      lessonsProgress: { ...(serverProg.lessonsProgress || {}), ...(localRecord.lessons || {}) },
      wrongQuestions: mergedWrongMap,
      wrongQuestionsList: mergedWrongList,
      activeWrongCount: Math.max(serverProg.activeWrongCount || 0, activeWrongs.length),
      resolvedWrongCount: Math.max(serverProg.resolvedWrongCount || 0, resolvedWrongs.length),
      totalWrongAttempts: Math.max(serverProg.totalWrongAttempts || 0, totalWrongAttempts),
    };
  };

  const handleDeleteStudent = async (studentId: string, studentName: string) => {
    const isConfirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa học sinh "${studentName}" (ID: ${studentId}) khỏi hệ thống?\n\nToàn bộ tiến độ học tập và dữ liệu liên quan sẽ bị xóa vĩnh viễn.`
    );
    if (!isConfirmed) return;

    try {
      setIsLoading(true);
      const res = await fetch(`/api/auth/users?id=${encodeURIComponent(studentId)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage(`Đã xóa thành công học sinh: ${studentName}`);

        // Dọn dẹp cả trong localStorage nếu có & lưu vào Blacklist cục bộ
        if (typeof window !== "undefined") {
          try {
            // 1. Ghi nhận vào danh sách tài khoản đã xóa (vinamath_deleted_user_ids)
            const deletedIdsRaw = localStorage.getItem("vinamath_deleted_user_ids");
            const deletedList: string[] = deletedIdsRaw ? JSON.parse(deletedIdsRaw) : [];
            const idsToAdd = [
              studentId,
              studentId.toLowerCase(),
              ...(data.deletedIdentifiers || [])
            ];
            idsToAdd.forEach((id) => {
              if (id && !deletedList.includes(id)) {
                deletedList.push(id);
              }
            });
            localStorage.setItem("vinamath_deleted_user_ids", JSON.stringify(deletedList));

            // 2. Lọc bỏ khỏi danh sách tài khoản đã đăng ký trong máy
            const localSaved = localStorage.getItem("vinamath_local_registered_users");
            if (localSaved) {
              const list = JSON.parse(localSaved);
              const filtered = list.filter(
                (u: any) =>
                  u.id !== studentId &&
                  u.username?.toLowerCase() !== studentId.toLowerCase() &&
                  u.studentCode !== studentId &&
                  (!u.studentCode || u.studentCode.toLowerCase() !== studentId.toLowerCase())
              );
              localStorage.setItem("vinamath_local_registered_users", JSON.stringify(filtered));
            }
          } catch (e) {
            console.warn("Lỗi dọn local registered users:", e);
          }
        }

        // Cập nhật lại state trực tiếp
        setStudents((prev) =>
          prev.filter(
            (s) =>
              s.id !== studentId &&
              s.username?.toLowerCase() !== studentId.toLowerCase() &&
              s.studentCode !== studentId
          )
        );
        setTimeout(() => setStatusMessage(null), 3000);
      } else {
        alert(data.error || "Không thể xóa học sinh này.");
      }
    } catch (e) {
      console.error("Lỗi xóa học sinh:", e);
      alert("Đã xảy ra lỗi khi gửi yêu cầu xóa.");
    } finally {
      setIsLoading(false);
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
      studentProgress: progressData,
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vinamath-admin-backup-${new Date().toISOString().split("T")[0]}.json`;
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
              Vui lòng đăng nhập với tài khoản Quản trị viên để truy cập trang quản lý bài học và theo dõi tiến độ học tập chi tiết của học sinh.
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
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm hover:from-amber-400 hover:to-yellow-300 shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
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
            Quản Trị Thành Viên, Giám Sát Tiến Độ & Phân Tích Lỗ Hổng
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Theo dõi chi tiết số phút xem video, tỷ lệ hoàn thành bài học, số lần làm sai từng câu và các câu hỏi học sinh thường vướng mắc nhất để kịp thời bồi dưỡng.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={fetchAdminData}
            className="px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-700 text-slate-300 font-bold text-xs hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-cyan-400" : ""}`} />
            <span>Làm Mới</span>
          </button>
          <button
            onClick={handleExportBackup}
            className="px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-bold text-xs hover:bg-cyan-950/40 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" /> Xuất Báo Cáo & Backup
          </button>
          <button
            onClick={logout}
            className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold text-xs hover:bg-rose-950/40 transition-all cursor-pointer"
          >
            Đăng Xuất Admin
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("students")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "students"
              ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Học Sinh & Tiến Độ Học ({students.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("mistakes")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "mistakes"
              ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Cảnh Báo Lỗ Hổng Kiến Thức ({progressData.topMistakes?.length || 0})</span>
        </button>

        <button
          onClick={() => setActiveTab("lessons")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "lessons"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Quản Lý Đề & Bài Học ({Object.keys(GRADE_6_DETAILED_LESSONS).length})</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: DANH SÁCH HỌC SINH & TIẾN ĐỘ CHI TIẾT                             */}
      {/* ========================================================================= */}
      {activeTab === "students" && (
        <div className="space-y-4">
          {/* Bộ lọc nâng cao: Tìm kiếm, Trường, Lớp, Khối */}
          <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
              <Filter className="w-4 h-4" />
              <span>Bộ Lọc Theo Dõi Học Sinh Theo Trường & Lớp</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Họ tên, mã HS, username..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* School filter */}
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
              >
                <option value="all">🏢 Tất cả các trường ({uniqueSchools.length})</option>
                {uniqueSchools.map((sch) => (
                  <option key={sch} value={sch}>
                    {sch}
                  </option>
                ))}
              </select>

              {/* Class filter */}
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
              >
                <option value="all">🏫 Tất cả các lớp ({uniqueClasses.length})</option>
                {uniqueClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>

              {/* Grade filter */}
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
              >
                <option value="all">📚 Tất cả các khối</option>
                <option value="Khối 6">Khối 6</option>
                <option value="Khối 7">Khối 7</option>
                <option value="Khối 8">Khối 8</option>
                <option value="Khối 9">Khối 9</option>
                <option value="Khối 10">Khối 10</option>
                <option value="Khối 11">Khối 11</option>
                <option value="Khối 12">Khối 12</option>
              </select>
            </div>
          </div>

          {/* Bảng danh sách học sinh */}
          <div className="rounded-3xl bg-[#0e1526] border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#131d33] text-[11px] font-black uppercase text-cyan-300 border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">Học Sinh</th>
                    <th className="py-3.5 px-4">Trường Học</th>
                    <th className="py-3.5 px-4">Lớp / Khối</th>
                    <th className="py-3.5 px-4 text-center">Video Đã Xem</th>
                    <th className="py-3.5 px-4 text-center">Bài Hoàn Thành</th>
                    <th className="py-3.5 px-4 text-center">Câu Hỏi Sai</th>
                    <th className="py-3.5 px-4 text-center">Điểm EXP</th>
                    <th className="py-3.5 px-4 text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-500">
                        Không tìm thấy học sinh nào phù hợp với bộ lọc hiện tại.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((student) => {
                      const prog = getStudentProgress(student.id, student.studentCode, student.username);
                      const videoMinutes = prog?.totalVideoMinutes || 0;
                      const completedCount = prog?.totalCompletedLessons || 0;
                      const wrongCount = prog?.activeWrongCount ?? prog?.wrongQuestionsList?.length ?? 0;

                      return (
                        <tr key={student.id} className="hover:bg-slate-900/60 transition-colors">
                          <td className="py-3 px-4">
                            <div className="font-bold text-white flex items-center gap-1.5">
                              <span>{student.fullName}</span>
                            </div>
                            <div className="text-[11px] text-cyan-400 font-mono font-bold">
                              @{student.username || student.studentCode?.toLowerCase() || student.id}
                            </div>
                          </td>

                          <td className="py-3 px-4 text-slate-300 font-medium">
                            <div className="flex items-center gap-1">
                              <School className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{student.schoolName || "Chưa cập nhật"}</span>
                            </div>
                          </td>

                          <td className="py-3 px-4 text-slate-300">
                            <span className="font-bold text-white">{student.schoolClass || "Lớp 6A"}</span>
                            <span className="text-[10px] text-slate-500 block">{student.grade || "Khối 6"}</span>
                          </td>

                          {/* Số phút xem video */}
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-500/15 text-rose-300 border border-rose-500/30 font-black">
                              <Video className="w-3 h-3 text-rose-400" />
                              <span>{videoMinutes} phút</span>
                            </span>
                          </td>

                          {/* Số bài đã hoàn thành */}
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-black">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>{completedCount} bài</span>
                            </span>
                          </td>

                          {/* Số câu bị sai */}
                          <td className="py-3 px-4 text-center">
                            {wrongCount > 0 ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 font-black">
                                <AlertTriangle className="w-3 h-3 text-amber-400" />
                                <span>{wrongCount} câu</span>
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[11px]">0 lỗi</span>
                            )}
                          </td>

                          {/* EXP */}
                          <td className="py-3 px-4 text-center font-black text-amber-300">
                            ⭐ {formatNaturalNumber(student.exp || 0)}
                          </td>

                          {/* Nút thao tác: Xem Sổ Tay & Xóa thành viên */}
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setSelectedStudentDetail({ ...student, progress: prog })}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-slate-700 font-bold text-[11px] transition-all cursor-pointer shadow-sm"
                                title="Xem chi tiết tiến độ học sinh"
                              >
                                <Eye className="w-3 h-3" />
                                <span>Sổ Tay</span>
                              </button>
                              <button
                                onClick={() => handleDeleteStudent(student.id, student.fullName)}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/30 hover:border-rose-600 font-bold text-[11px] transition-all cursor-pointer shadow-sm"
                                title="Xóa tài khoản thành viên này"
                              >
                                <Trash2 className="w-3 h-3" />
                                <span>Xóa</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: CẢNH BÁO LỖ HỔNG KIẾN THỨC TOÀN HỆ THỐNG                            */}
      {/* ========================================================================= */}
      {activeTab === "mistakes" && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 via-amber-950/20 to-slate-900 border border-rose-500/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-black text-white">
                Bảng Thống Kê Các Câu Hỏi Học Sinh Sai Nhiều Lần Nhất (Top Mistakes)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hệ thống tự động gom nhóm các câu hỏi bị chọn sai từ 2 lần trở lên. Giáo viên và Admin có thể dùng danh sách này để nhắc nhở và giảng kỹ lại các phần kiến thức dễ nhầm lẫn.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {progressData.topMistakes && progressData.topMistakes.length > 0 ? (
              progressData.topMistakes.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 hover:border-amber-500/40 space-y-3 transition-all shadow-md"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase">
                      {item.badge || `Câu ${idx + 1}`}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-black flex items-center gap-1">
                      <Flame className="w-3 h-3 text-rose-400" />
                      <span>{item.studentsFailed} học sinh vướng mắc</span>
                    </span>
                  </div>

                  <div className="text-xs font-bold text-white leading-relaxed">
                    {item.questionText}
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] space-y-1">
                    <div className="text-emerald-400 font-bold">
                      ✓ Đáp án đúng: <span>{item.correctOption}</span>
                    </div>
                    {item.explanation && (
                      <div className="text-slate-400 pt-1 border-t border-slate-800 text-[10px] leading-relaxed">
                        💡 Giải thích: {item.explanation}
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                    <span>Mã câu: <code className="text-cyan-400">{item.questionId}</code></span>
                    <span>Tỷ lệ sửa đúng: <strong className="text-emerald-400">{item.resolvedCount || 0} HS đã sửa</strong></span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 py-12 text-center text-slate-500 bg-[#0e1526] rounded-2xl border border-slate-800">
                Chưa ghi nhận câu hỏi nào sai nghiêm trọng. Học sinh đang hoàn thành bài rất tốt!
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: QUẢN LÝ BÀI HỌC & CHỈNH SỬA                                        */}
      {/* ========================================================================= */}
      {activeTab === "lessons" && (
        <div className="space-y-4">
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
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-[11px] hover:scale-105 transition-all shadow-sm cursor-pointer"
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

      {/* ========================================================================= */}
      {/* MODAL CHI TIẾT HỌC SINH & SỔ TAY CÂU SAI                                   */}
      {/* ========================================================================= */}
      {selectedStudentDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0e1526] border-2 border-cyan-500/40 p-6 space-y-6 shadow-2xl text-white">
            {/* Header Modal */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] font-mono font-bold">
                    @{selectedStudentDetail.username || selectedStudentDetail.studentCode?.toLowerCase() || selectedStudentDetail.id}
                  </span>
                </div>
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <span>{selectedStudentDetail.fullName}</span>
                </h2>
                <div className="text-xs text-slate-400 flex items-center gap-3">
                  <span>🏢 {selectedStudentDetail.schoolName || "Chưa cập nhật trường"}</span>
                  <span>🏫 {selectedStudentDetail.schoolClass || "Lớp 6A"}</span>
                  <span>📚 {selectedStudentDetail.grade || "Khối 6"}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudentDetail(null)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chỉ số nhanh */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Thời Gian Xem Video</span>
                <span className="text-lg font-black text-rose-400 flex items-center justify-center gap-1">
                  <Video className="w-4 h-4" /> {selectedStudentDetail.progress?.totalVideoMinutes || 0} phút
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Bài Hoàn Thành</span>
                <span className="text-lg font-black text-emerald-400 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> {selectedStudentDetail.progress?.totalCompletedLessons || 0} bài
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Tổng Điểm Tích Lũy</span>
                <span className="text-lg font-black text-amber-300">
                  ⭐ {formatNaturalNumber(selectedStudentDetail.exp || 0)}
                </span>
              </div>
            </div>

            {/* Sổ tay câu sai của học sinh này */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>
                  Sổ Tay Câu Hỏi Học Sinh Đã Làm Sai (
                  {selectedStudentDetail.progress?.wrongQuestions
                    ? Object.keys(selectedStudentDetail.progress.wrongQuestions).length
                    : 0}{" "}
                  câu)
                </span>
              </h3>

              {selectedStudentDetail.progress?.wrongQuestions &&
              Object.keys(selectedStudentDetail.progress.wrongQuestions).length > 0 ? (
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {Object.values(selectedStudentDetail.progress.wrongQuestions).map((wq: any, i: number) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {wq.badge || `Câu ${i + 1}`} • {wq.lessonTitle}
                        </span>
                        <span className="text-rose-400 font-bold text-[11px]">
                          Sai {wq.wrongCount} lần
                        </span>
                      </div>
                      <div className="font-medium text-slate-200">{wq.questionText}</div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                        <div className="text-rose-400">✗ Học sinh chọn: {wq.lastSelectedOption}</div>
                        <div className="text-emerald-400 font-bold">✓ Đáp án đúng: {wq.correctOption}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
                  Học sinh chưa có câu sai nào cần lưu ý.
                </div>
              )}
            </div>

            {/* Footer Modal */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedStudentDetail(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
