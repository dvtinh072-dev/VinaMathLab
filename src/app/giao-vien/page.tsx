"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Users,
  UserCheck,
  Shield,
  Lock,
  Search,
  Filter,
  Video,
  Award,
  Clock,
  ChevronRight,
  Download,
  BookOpen,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Eye,
  LogOut,
  ArrowRight,
  FolderGit2,
  Flame,
  X,
  FileText,
  School,
} from "lucide-react";
import { useAuth, UserProfile } from "@/context/AuthContext";
import { TEACHER_RESOURCES } from "@/data/teacherResources";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import {
  parseAssignedClasses,
  isStudentInAssignedClasses,
  isStudentInSpecificClass,
} from "@/lib/teacherClassUtils";
import { getLocalStudentProgress } from "@/lib/studentProgressClient";

export default function GiaoVienPage() {
  const router = useRouter();
  const { user, isTeacher, isAdmin, isStudent, loginTeacher, logout, refreshProfile } = useAuth();

  // Login Form State (cho giáo viên chưa đăng nhập)
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Teacher Dashboard State
  const [activeTeacherTab, setActiveTeacherTab] = useState<"students" | "mistakes" | "resources">("students");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>("all");
  const [students, setStudents] = useState<any[]>([]);
  const [progressData, setProgressData] = useState<any>({ students: [], topMistakes: [] });
  const [isLoading, setIsLoading] = useState(false);

  // Modal Chi Tiết Học Sinh
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<any | null>(null);

  // Resource Filter (trong tab Kho Giáo Án)
  const [resourceFilter, setResourceFilter] = useState<string>("all");
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  // Danh sách các lớp được phân công phụ trách của Giáo Viên
  const assignedClasses = useMemo(() => {
    if (!user) return [];
    if (user.role === "admin") {
      // Admin có toàn quyền xem tất cả các lớp
      return [];
    }
    return parseAssignedClasses(user.assignedClasses || user.schoolClass);
  }, [user]);

  // Tải dữ liệu học sinh khi đã đăng nhập giáo viên hoặc admin
  useEffect(() => {
    if (user && (isTeacher || isAdmin)) {
      refreshProfile();
      fetchTeacherData();
    }
  }, [user?.id, user?.username, isTeacher, isAdmin]);

  const fetchTeacherData = async () => {
    setIsLoading(true);
    try {
      // 1. Lấy danh sách học sinh từ API
      const resUsers = await fetch("/api/auth/users");
      const dataUsers = await resUsers.json();
      let rawStudents: any[] = [];
      if (dataUsers.success && dataUsers.users) {
        rawStudents = dataUsers.users.filter((u: any) => u.role === "student");
      }

      // Gộp thêm học sinh từ localStorage nếu có
      if (typeof window !== "undefined") {
        try {
          const deletedIdsRaw = localStorage.getItem("vinamath_deleted_user_ids");
          const deletedSet: Set<string> = new Set(
            deletedIdsRaw ? JSON.parse(deletedIdsRaw).map((x: string) => String(x).toLowerCase()) : []
          );

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
          console.warn("Lỗi đọc local registered students:", e);
        }
      }

      setStudents(rawStudents);

      // 2. Lấy dữ liệu tiến độ làm bài
      const resProgress = await fetch("/api/student/progress?mode=admin");
      const dataProgress = await resProgress.json();
      if (dataProgress.success) {
        setProgressData(dataProgress);
      }
    } catch (err) {
      console.error("Lỗi lấy dữ liệu giáo viên:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTeacherLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);

    try {
      const res = await loginTeacher(loginUsername, loginPassword);
      if (!res.success) {
        setLoginError(res.error || "Tên đăng nhập hoặc mật khẩu giáo viên không chính xác.");
      }
    } catch (err) {
      setLoginError("Đã xảy ra lỗi khi gửi yêu cầu đăng nhập.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 3000);
  };

  // Helper lấy tiến độ học sinh
  const getStudentProgress = (studentId: string, studentCode?: string, username?: string) => {
    const sId = (studentId || "").toLowerCase();
    const sCode = (studentCode || "").toLowerCase();
    const sUser = (username || "").toLowerCase();

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

    const localRecord =
      getLocalStudentProgress(studentId) ||
      (studentCode ? getLocalStudentProgress(studentCode) : null) ||
      (username ? getLocalStudentProgress(username) : null);

    if (!localRecord) return serverProg;

    const wrongList = Object.values(localRecord.wrongQuestions || {});
    const completedLessonsCount = Object.values(localRecord.lessons || {}).filter(
      (l: any) => l.isCompleted
    ).length;

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
      };
    }

    const mergedWrongMap = {
      ...(serverProg.wrongQuestions || {}),
      ...(localRecord.wrongQuestions || {}),
    };

    return {
      ...serverProg,
      totalVideoMinutes: Math.max(
        serverProg.totalVideoMinutes || 0,
        localRecord.totalVideoMinutes || 0
      ),
      totalCompletedLessons: Math.max(
        serverProg.totalCompletedLessons || 0,
        completedLessonsCount
      ),
      lessonsProgress: { ...(serverProg.lessonsProgress || {}), ...(localRecord.lessons || {}) },
      wrongQuestions: mergedWrongMap,
      wrongQuestionsList: Object.values(mergedWrongMap),
    };
  };

  // =========================================================================
  // BẢO MẬT & PHÂN QUYỀN: Lọc học sinh THEO ĐÚNG CÁC LỚP ĐƯỢC ADMIN PHÂN CÔNG
  // =========================================================================
  const myAssignedStudents = useMemo(() => {
    if (isAdmin) {
      // Quản trị viên tối cao: Có thể giám sát tất cả các lớp
      return students;
    }
    if (!assignedClasses || assignedClasses.length === 0) {
      // Giáo viên chưa được admin phân công lớp nào -> Không hiển thị học sinh
      return [];
    }
    // CHỈ lấy học sinh thuộc các lớp mà giáo viên được phân quyền
    return students.filter((s) => isStudentInAssignedClasses(assignedClasses, s.schoolClass));
  }, [students, assignedClasses, isAdmin]);

  // Lọc học sinh theo từ khóa và bộ lọc lớp cụ thể
  const filteredStudents = useMemo(() => {
    return myAssignedStudents.filter((s) => {
      const q = searchQuery.toLowerCase();
      const matchQuery =
        !q ||
        s.fullName?.toLowerCase().includes(q) ||
        s.studentCode?.toLowerCase().includes(q) ||
        s.username?.toLowerCase().includes(q) ||
        s.schoolClass?.toLowerCase().includes(q);

      const matchClass =
        selectedClassFilter === "all" ||
        isStudentInSpecificClass(selectedClassFilter, s.schoolClass);

      return matchQuery && matchClass;
    });
  }, [myAssignedStudents, searchQuery, selectedClassFilter]);

  // Thống kê tổng hợp của các lớp phụ trách
  const classStats = useMemo(() => {
    const totalStudents = myAssignedStudents.length;
    let totalScore = 0;
    let scoreCount = 0;
    let totalVideoSec = 0;
    let completedLessonsCount = 0;

    myAssignedStudents.forEach((s) => {
      const prog = getStudentProgress(s.id, s.studentCode, s.username);
      if (prog) {
        if (prog.averageScore) {
          totalScore += prog.averageScore;
          scoreCount++;
        }
        if (prog.totalVideoMinutes) {
          totalVideoSec += prog.totalVideoMinutes * 60;
        }
        if (prog.totalCompletedLessons) {
          completedLessonsCount += prog.totalCompletedLessons;
        }
      }
    });

    const avgScore = scoreCount > 0 ? (totalScore / scoreCount).toFixed(1) : "0.0";
    const totalVideoHours = (totalVideoSec / 3600).toFixed(1);

    return {
      totalStudents,
      avgScore,
      totalVideoHours,
      completedLessonsCount,
    };
  }, [myAssignedStudents, progressData]);

  // Lọc câu sai thuộc về học sinh các lớp phụ trách
  const classMistakes = useMemo(() => {
    const studentUsernames = new Set(
      myAssignedStudents.map((s) => (s.username || "").toLowerCase()).filter(Boolean)
    );
    const studentIds = new Set(
      myAssignedStudents.map((s) => (s.id || "").toLowerCase()).filter(Boolean)
    );

    const mistakeMap: { [key: string]: any } = {};

    myAssignedStudents.forEach((s) => {
      const prog = getStudentProgress(s.id, s.studentCode, s.username);
      if (prog?.wrongQuestions) {
        Object.values(prog.wrongQuestions).forEach((wq: any) => {
          const key = wq.questionId || `${wq.lessonId}_${wq.questionText}`;
          if (!mistakeMap[key]) {
            mistakeMap[key] = {
              questionId: key,
              questionText: wq.questionText,
              badge: wq.badge,
              lessonTitle: wq.lessonTitle,
              correctOption: wq.correctOption,
              explanation: wq.explanation,
              failCount: 0,
              studentsFailed: new Set<string>(),
            };
          }
          mistakeMap[key].failCount += wq.wrongCount || 1;
          mistakeMap[key].studentsFailed.add(s.fullName || s.username);
        });
      }
    });

    return Object.values(mistakeMap)
      .map((item: any) => ({
        ...item,
        studentsCount: item.studentsFailed.size,
      }))
      .sort((a, b) => b.failCount - a.failCount);
  }, [myAssignedStudents, progressData]);

  // Tài nguyên bài giảng
  const filteredResources = TEACHER_RESOURCES.filter(
    (res) => resourceFilter === "all" || res.type === resourceFilter
  );

  // =========================================================================
  // TRƯỜNG HỢP 1: NẾU ĐANG ĐĂNG NHẬP VAI TRÒ HỌC SINH
  // =========================================================================
  if (user && isStudent) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#0e1526] border-2 border-emerald-500/40 text-center space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <UserCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-black text-white">Bạn Đang Đăng Nhập Tài Khoản Học Sinh</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Xin chào <strong>{user.fullName || user.username}</strong>! Cổng này dành riêng cho Giáo viên quản lý lớp theo phân quyền của Admin.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tai-khoan"
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs hover:scale-105 transition-all shadow-md shadow-cyan-500/30"
            >
              Về Trang Cá Nhân Học Sinh
            </Link>
            <button
              onClick={logout}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
            >
              Đăng Xuất Tài Khoản
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // TRƯỜNG HỢP 2: CHƯA ĐĂNG NHẬP -> HIỂN THỊ CỔNG ĐĂNG NHẬP QUẢN LÝ LỚP GIÁO VIÊN
  // =========================================================================
  if (!user || (!isTeacher && !isAdmin)) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4 py-10">
        <div className="w-full max-w-md rounded-3xl bg-[#0e1526] border-2 border-emerald-500/40 text-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header Banner */}
          <div className="p-6 bg-gradient-to-r from-emerald-900/60 via-teal-900/40 to-slate-900 border-b border-emerald-500/30 text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-500/20">
              <UserCheck className="w-7 h-7" />
            </div>
            <h1 className="text-xl font-black text-white">
              Cổng Quản Lý Lớp Dành Cho Giáo Viên
            </h1>
            <p className="text-xs text-emerald-200/90 leading-relaxed">
              Đăng nhập để theo dõi tiến độ, điểm trắc nghiệm và thời gian học tập của học sinh trong các lớp được Admin phân công.
            </p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleTeacherLogin} className="p-6 sm:p-8 space-y-4">
            {loginError && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Tên Đăng Nhập Giáo Viên <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Users className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
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
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Nhập mật khẩu giáo viên..."
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            {/* Chú thích bảo mật & phân quyền */}
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300/90 leading-relaxed space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                <Shield className="w-3.5 h-3.5" />
                <span>Quy định bảo mật phân quyền:</span>
              </div>
              <p>
                Tài khoản giáo viên và danh sách lớp phụ trách được Ban Quản Trị (Admin) cấp và bảo mật. Giáo viên chỉ có quyền xem thống kê học sinh trong lớp mình được phân quyền, không được thấy lớp khác khi chưa có sự cho phép của Admin.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
            >
              <span>{isLoggingIn ? "Đang xác thực..." : "Đăng Nhập Quản Lý Lớp"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center text-xs text-slate-400 space-y-1">
              <div>
                Chưa có tài khoản giáo viên? Vui lòng liên hệ <strong>Quản trị viên</strong> để được cấp quyền.
              </div>
              <div>
                Bạn là Quản trị viên tối cao?{" "}
                <Link href="/dang-nhap?role=admin" className="font-bold text-amber-400 hover:underline">
                  Đăng nhập Admin
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // TRƯỜNG HỢP 3: ĐÃ ĐĂNG NHẬP VAI TRÒ GIÁO VIÊN (HOẶC ADMIN GIÁM SÁT)
  // =========================================================================
  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner: Thông tin Giáo Viên & Các lớp được phân công */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 border-2 border-emerald-500/40 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 backdrop-blur-md">
              <UserCheck className="w-3.5 h-3.5" />
              {isAdmin ? "Toàn Quyền Quản Trị Hệ Thống" : "Cổng Giáo Viên Quản Lý Lớp"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
              <School className="w-3.5 h-3.5" />
              {user.schoolName || "THCS VinaMath"}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Kính chào Thầy/Cô: {user.fullName || user.username}
          </h1>

          {/* Phân quyền lớp được Admin giao */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-300">Lớp được Admin phân quyền phụ trách:</span>
            {isAdmin ? (
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                Toàn quyền giám sát tất cả các lớp
              </span>
            ) : assignedClasses.length === 0 ? (
              <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                Chưa có lớp nào được phân công. Vui lòng liên hệ Admin.
              </span>
            ) : (
              assignedClasses.map((cls) => (
                <span
                  key={cls}
                  className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-black border border-emerald-500/40 text-xs shadow-sm"
                >
                  ✓ {cls}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={fetchTeacherData}
            className="px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-700 text-slate-300 font-bold text-xs hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>{isLoading ? "Đang đồng bộ..." : "Đồng Bộ Dữ Liệu"}</span>
          </button>

          {isAdmin && (
            <Link
              href="/admin"
              className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md shadow-amber-500/20"
            >
              Vào Trang Admin
            </Link>
          )}

          <button
            onClick={logout}
            className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold text-xs hover:bg-rose-950/40 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đăng Xuất</span>
          </button>
        </div>
      </div>

      {/* Thông báo phân quyền nghiêm ngặt */}
      <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
        <Shield className="w-4 h-4 shrink-0 text-emerald-400" />
        <span>
          <strong>Cơ chế bảo mật dữ liệu lớp học:</strong> Hệ thống tự động lọc học sinh theo danh sách lớp được Admin phân công. Thầy/Cô chỉ có thể xem báo cáo và tiến độ học tập của các lớp phụ trách, không thể thấy lớp khác khi chưa có sự đồng ý của Admin.
        </span>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTeacherTab("students")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTeacherTab === "students"
              ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Học Sinh Lớp Phụ Trách ({myAssignedStudents.length})</span>
        </button>

        <button
          onClick={() => setActiveTeacherTab("mistakes")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTeacherTab === "mistakes"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Lỗ Hổng Kiến Thức Của Lớp ({classMistakes.length})</span>
        </button>

        <button
          onClick={() => setActiveTeacherTab("resources")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTeacherTab === "resources"
              ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <FolderGit2 className="w-4 h-4" />
          <span>Kho Giáo Án & Đề Thi 2026</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: DANH SÁCH HỌC SINH THUỘC LỚP PHÂN CÔNG                             */}
      {/* ========================================================================= */}
      {activeTeacherTab === "students" && (
        <div className="space-y-4">
          {/* 4 Thẻ Thống Kê Tổng Quan */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-slate-400">Sĩ Số Lớp Quản Lý</span>
              <div className="text-xl sm:text-2xl font-black text-cyan-400">
                {classStats.totalStudents} <span className="text-xs font-normal text-slate-400">học sinh</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-slate-400">Điểm Trung Bình Trắc Nghiệm</span>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {classStats.avgScore} <span className="text-xs font-normal text-slate-400">/ 10</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-slate-400">Tổng Giờ Xem Video</span>
              <div className="text-xl sm:text-2xl font-black text-amber-400">
                {classStats.totalVideoHours} <span className="text-xs font-normal text-slate-400">giờ</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-slate-400">Tổng Lượt Bài Hoàn Thành</span>
              <div className="text-xl sm:text-2xl font-black text-purple-400">
                {classStats.completedLessonsCount} <span className="text-xs font-normal text-slate-400">bài</span>
              </div>
            </div>
          </div>

          {/* Bộ Lọc Học Sinh: CHỈ CHO PHÉP LỌC TRONG CÁC LỚP ĐƯỢC PHÂN CÔNG */}
          <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm học sinh theo tên, mã học sinh, tài khoản..."
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-400 shrink-0" />
              <select
                value={selectedClassFilter}
                onChange={(e) => setSelectedClassFilter(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="all">
                  {isAdmin
                    ? "Tất cả các lớp toàn trường"
                    : `Tất cả lớp phụ trách (${assignedClasses.join(", ")})`}
                </option>
                {(isAdmin
                  ? Array.from(new Set(students.map((s) => s.schoolClass).filter(Boolean)))
                  : assignedClasses
                ).map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bảng Danh Sách Học Sinh Trong Lớp Được Phân Quyền */}
          <div className="rounded-2xl border border-slate-800 bg-[#0e1526] overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 text-slate-400 font-bold border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">STT</th>
                    <th className="p-3.5">Học Sinh</th>
                    <th className="p-3.5">Mã HS / Tên Đăng Nhập</th>
                    <th className="p-3.5">Lớp Phụ Trách</th>
                    <th className="p-3.5 text-center">Thời Gian Video</th>
                    <th className="p-3.5 text-center">Điểm TB</th>
                    <th className="p-3.5 text-center">Tiến Độ</th>
                    <th className="p-3.5 text-center">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-slate-500">
                        {assignedClasses.length === 0 && !isAdmin
                          ? "Thầy/Cô chưa được phân công lớp nào. Vui lòng liên hệ Quản trị viên (Admin) để thiết lập lớp phụ trách."
                          : "Không tìm thấy học sinh nào thuộc lớp phụ trách phù hợp với bộ lọc."}
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((student, idx) => {
                      const prog = getStudentProgress(student.id, student.studentCode, student.username);
                      const totalMins = prog?.totalVideoMinutes || 0;
                      const videoTimeDisplay =
                        totalMins >= 60
                          ? `${Math.floor(totalMins / 60)}g ${totalMins % 60}p`
                          : `${totalMins} phút`;
                      const avgScore = prog?.averageScore ? prog.averageScore.toFixed(1) : "0.0";
                      const completedCount = prog?.totalCompletedLessons || 0;

                      return (
                        <tr key={student.id || student.username} className="hover:bg-slate-900/50 transition-colors">
                          <td className="p-3.5 font-mono text-slate-500">{idx + 1}</td>
                          <td className="p-3.5">
                            <div className="font-bold text-white flex items-center gap-2">
                              <span>👨‍🎓</span>
                              <span>{student.fullName || student.username}</span>
                            </div>
                            <div className="text-[10px] text-slate-400">{student.schoolName}</div>
                          </td>
                          <td className="p-3.5 font-mono text-cyan-400">
                            {student.studentCode || student.username}
                          </td>
                          <td className="p-3.5">
                            <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                              {student.schoolClass || "Lớp 6A"}
                            </span>
                          </td>
                          <td className="p-3.5 text-center font-bold text-amber-300">
                            <div className="flex items-center justify-center gap-1">
                              <Video className="w-3.5 h-3.5 text-amber-400" />
                              <span>{videoTimeDisplay}</span>
                            </div>
                          </td>
                          <td className="p-3.5 text-center font-black">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs ${
                                Number(avgScore) >= 8
                                  ? "bg-emerald-500/20 text-emerald-300"
                                  : Number(avgScore) >= 5
                                  ? "bg-cyan-500/20 text-cyan-300"
                                  : "bg-rose-500/20 text-rose-300"
                              }`}
                            >
                              {avgScore} / 10
                            </span>
                          </td>
                          <td className="p-3.5 text-center font-bold text-purple-300">
                            {completedCount} bài
                          </td>
                          <td className="p-3.5 text-center">
                            <button
                              onClick={() => setSelectedStudentDetail({ ...student, progress: prog })}
                              className="px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-bold transition-all flex items-center gap-1 mx-auto cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Chi Tiết</span>
                            </button>
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
      {/* TAB 2: LỖ HỔNG KIẾN THỨC CỦA HỌC SINH TRONG LỚP PHỤ TRÁCH                */}
      {/* ========================================================================= */}
      {activeTeacherTab === "mistakes" && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-rose-950/20 to-slate-900 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-black text-white">
                Bảng Thống Kê Các Câu Hỏi Học Sinh Lớp Phụ Trách Hay Trả Lời Sai
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hệ thống tự động lọc các câu hỏi mà học sinh trong các lớp của thầy/cô chọn đáp án sai nhiều lần nhất. Thầy/Cô có thể sử dụng danh sách này trong tiết giảng hoặc buổi ôn tập trên lớp.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classMistakes.length === 0 ? (
              <div className="col-span-2 p-8 rounded-2xl bg-[#0e1526] border border-slate-800 text-center text-slate-500 text-xs">
                Chưa ghi nhận câu hỏi sai đáng kể từ học sinh trong các lớp phụ trách.
              </div>
            ) : (
              classMistakes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 hover:border-amber-500/40 space-y-3 transition-all shadow-md"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase">
                      {item.badge || `Câu ${idx + 1}`} • {item.lessonTitle}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-black flex items-center gap-1">
                      <Flame className="w-3 h-3 text-rose-400" />
                      <span>{item.failCount} lượt sai ({item.studentsCount} học sinh)</span>
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
                        💡 Hướng dẫn giải: {item.explanation}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: KHO GIÁO ÁN, CHUYÊN ĐỀ & ĐỀ THI MA TRẬN 2026                       */}
      {/* ========================================================================= */}
      {activeTeacherTab === "resources" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#0e1526] border border-slate-800">
            <div>
              <h2 className="text-sm font-black text-white flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-teal-400" />
                Kho Giáo Án (CV 5512), Ma Trận & Đề Thi Mới 2026
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Tài liệu chuẩn Công văn 5512, bản đặc tả ma trận đề thi THPT và mã nguồn LaTeX.
              </p>
            </div>

            <Link
              href="/ai-studio"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-purple-600/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dùng AI Sinh Đề Thi Mới</span>
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-1">
            <button
              onClick={() => setResourceFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                resourceFilter === "all"
                  ? "bg-teal-500 text-slate-950 font-black shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Tất cả tài nguyên
            </button>
            <button
              onClick={() => setResourceFilter("giao_an")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                resourceFilter === "giao_an"
                  ? "bg-teal-500 text-slate-950 font-black shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Giáo án (CV 5512)
            </button>
            <button
              onClick={() => setResourceFilter("chuyen_de")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                resourceFilter === "chuyen_de"
                  ? "bg-teal-500 text-slate-950 font-black shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Chuyên đề bồi dưỡng
            </button>
            <button
              onClick={() => setResourceFilter("de_thi")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                resourceFilter === "de_thi"
                  ? "bg-teal-500 text-slate-950 font-black shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Ma trận & Bản đặc tả
            </button>
            <button
              onClick={() => setResourceFilter("latex_template")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                resourceFilter === "latex_template"
                  ? "bg-teal-500 text-slate-950 font-black shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Mẫu mã nguồn LaTeX
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="p-5 rounded-2xl bg-[#0e1526] border border-slate-800 hover:border-teal-500/40 space-y-3 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span className="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {res.strand}
                    </span>
                    <span>{res.fileSize} • {res.downloads} lượt tải</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                    {res.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {res.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-500">Tác giả: {res.author}</span>
                  <button
                    onClick={() => handleDownload(res.id)}
                    className="px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    {downloadedId === res.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Đã tải!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Tải về</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: XEM CHI TIẾT HỌC SINH (VIDEO TỪNG BÀI + TIẾN ĐỘ)                    */}
      {/* ========================================================================= */}
      {selectedStudentDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-2xl rounded-3xl bg-[#0e1526] border-2 border-emerald-500/40 p-6 space-y-5 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold text-base">
                  👨‍🎓
                </div>
                <div>
                  <h2 className="text-base font-black text-white">
                    {selectedStudentDetail.fullName || selectedStudentDetail.username}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Mã HS: <span className="text-cyan-400 font-mono">{selectedStudentDetail.studentCode || selectedStudentDetail.username}</span> • {selectedStudentDetail.schoolClass} • {selectedStudentDetail.schoolName}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudentDetail(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bảng Chi Tiết Thời Gian Video Từng Bài Học */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-amber-400" />
                <span>Thời Gian Xem Video & Điểm Số Từng Bài Học</span>
              </h3>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
                <div className="overflow-x-auto max-h-56 overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800 sticky top-0">
                      <tr>
                        <th className="p-2.5">Mã Bài</th>
                        <th className="p-2.5">Tên Bài Học</th>
                        <th className="p-2.5 text-center">Thời Lượng Video</th>
                        <th className="p-2.5 text-center">Điểm Trắc Nghiệm</th>
                        <th className="p-2.5 text-center">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {selectedStudentDetail.progress?.lessonsProgress &&
                      Object.keys(selectedStudentDetail.progress.lessonsProgress).length > 0 ? (
                        Object.entries(selectedStudentDetail.progress.lessonsProgress).map(
                          ([lId, val]: [string, any]) => {
                            const secs = val.videoWatchedSeconds || 0;
                            const timeText =
                              secs >= 60
                                ? `${Math.floor(secs / 60)}p ${secs % 60}s`
                                : `${secs}s`;
                            const lessonInfo =
                              (GRADE_6_DETAILED_LESSONS as any)[lId] || null;

                            return (
                              <tr key={lId} className="hover:bg-slate-800/40">
                                <td className="p-2.5 font-mono text-cyan-400 text-[11px]">{lId}</td>
                                <td className="p-2.5 font-medium text-slate-200">
                                  {lessonInfo?.title || val.lessonTitle || lId}
                                </td>
                                <td className="p-2.5 text-center font-mono font-bold text-amber-300">
                                  {timeText}
                                </td>
                                <td className="p-2.5 text-center font-bold text-emerald-400">
                                  {val.score !== undefined ? `${val.score} đ` : "—"}
                                </td>
                                <td className="p-2.5 text-center">
                                  {val.isCompleted ? (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                                      Hoàn thành
                                    </span>
                                  ) : (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">
                                      Đang học
                                    </span>
                                  )}
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-4 text-center text-slate-500 text-xs">
                            Học sinh chưa có dữ liệu xem video chi tiết cho bài nào.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sổ tay các câu sai của học sinh này */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>
                  Câu Hỏi Học Sinh Đã Làm Sai (
                  {selectedStudentDetail.progress?.wrongQuestions
                    ? Object.keys(selectedStudentDetail.progress.wrongQuestions).length
                    : 0}{" "}
                  câu)
                </span>
              </h3>

              {selectedStudentDetail.progress?.wrongQuestions &&
              Object.keys(selectedStudentDetail.progress.wrongQuestions).length > 0 ? (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
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
                        <div className="text-rose-400">✗ Chọn: {wq.lastSelectedOption}</div>
                        <div className="text-emerald-400 font-bold">✓ Đúng: {wq.correctOption}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
                  Học sinh chưa có câu hỏi nào bị sai.
                </div>
              )}
            </div>

            {/* Modal Footer */}
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
