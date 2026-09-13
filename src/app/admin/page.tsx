"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  UserCheck,
  UserPlus,
  KeyRound,
  Lock,
  Flag,
  MessageSquare,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import { GRADE_6_AI_PRACTICE_DATA } from "@/data/grade6AiPracticeData";
import { formatNaturalNumber } from "@/components/interactive/GamifiedMathQuiz";
import { getLocalStudentProgress } from "@/lib/studentProgressClient";
import { parseAssignedClasses, isStudentInAssignedClasses } from "@/lib/teacherClassUtils";
import { fetchQuestionReports, updateQuestionReportStatus, deleteQuestionReport, QuestionReportItem } from "@/lib/questionReportClient";
import { MathFormattedText } from "@/components/math/MathFormattedText";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { user, isAdmin, openAuthModal, logout, updateAdminCredentials } = useAuth();

  // TỰ ĐỘNG CHUYỂN HƯỚNG NẾU LÀ HỌC SINH (Học sinh không được vào trang quản trị)
  useEffect(() => {
    if (user && !isAdmin) {
      router.replace("/tai-khoan");
    }
  }, [user, isAdmin, router]);

  const [activeTab, setActiveTab] = useState<"lessons" | "students" | "teachers" | "mistakes" | "reports" | "backup" | "settings">("students");
  const [questionReports, setQuestionReports] = useState<QuestionReportItem[]>([]);
  const [reportFilterStatus, setReportFilterStatus] = useState<"all" | "pending" | "resolved" | "dismissed">("all");
  const [selectedReportDetail, setSelectedReportDetail] = useState<QuestionReportItem | null>(null);

  const pendingReportsCount = useMemo(() => {
    return questionReports.filter((r) => r.status === "pending").length;
  }, [questionReports]);
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState<any[]>([]);
  const [teachers, setTeachers] = useState<any[]>([]);
  const [progressData, setProgressData] = useState<any>({ students: [], topMistakes: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Bộ lọc trường & lớp & khối
  const [selectedSchool, setSelectedSchool] = useState<string>("all");
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");

  // Modal chi tiết học sinh
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<any | null>(null);

  // State Modal Phân Quyền Giáo Viên
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<any | null>(null);
  const [modalGradeTab, setModalGradeTab] = useState<number>(6);
  const [customClassesList, setCustomClassesList] = useState<string[]>([]);
  const [teacherFormData, setTeacherFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    schoolName: "THCS VinaMath",
    assignedClasses: [] as string[],
    customClass: "",
  });
  const [teacherError, setTeacherError] = useState<string | null>(null);
  const [isSavingTeacher, setIsSavingTeacher] = useState(false);

  // Form Đổi thông tin / Mật khẩu Admin
  const [adminForm, setAdminForm] = useState({
    currentUsername: user?.username || "admin",
    currentPassword: "",
    newUsername: "",
    newFullName: user?.fullName || "",
    newPassword: "",
    confirmPassword: "",
  });
  const [adminFormError, setAdminFormError] = useState<string | null>(null);
  const [adminFormSuccess, setAdminFormSuccess] = useState<string | null>(null);
  const [isUpdatingAdmin, setIsUpdatingAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      setAdminForm((prev) => ({
        ...prev,
        currentUsername: user.username || "admin",
        newFullName: user.fullName || "",
      }));
    }
  }, [user]);

  // Chỉ lấy dữ liệu quản trị khi là Admin
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
      let rawTeachers: any[] = [];
      if (dataUsers.success && dataUsers.users) {
        rawStudents = dataUsers.users.filter((u: any) => u.role === "student");
        rawTeachers = dataUsers.users.filter((u: any) => u.role === "teacher");
      }

      // 1b. Gộp danh sách học sinh & giáo viên lưu cục bộ (localStorage) để không bao giờ bị sót
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

          rawTeachers = rawTeachers.filter((t: any) => {
            const tId = t.id?.toLowerCase();
            const tUser = t.username?.toLowerCase();
            return !((tId && deletedSet.has(tId)) || (tUser && deletedSet.has(tUser)));
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

            const localTeachers = parsedLocal.filter((u: any) => {
              if (u.role !== "teacher") return false;
              const uId = u.id?.toLowerCase();
              const uUser = u.username?.toLowerCase();
              return !((uId && deletedSet.has(uId)) || (uUser && deletedSet.has(uUser)));
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

            localTeachers.forEach((lt: any) => {
              const matchIdx = rawTeachers.findIndex(
                (t: any) =>
                  (t.id && lt.id && t.id.toLowerCase() === lt.id.toLowerCase()) ||
                  (t.username && lt.username && t.username.toLowerCase() === lt.username.toLowerCase())
              );
              if (matchIdx >= 0) {
                rawTeachers[matchIdx] = {
                  ...rawTeachers[matchIdx],
                  assignedClasses: rawTeachers[matchIdx].assignedClasses?.length
                    ? rawTeachers[matchIdx].assignedClasses
                    : (lt.assignedClasses || []),
                  schoolClass: rawTeachers[matchIdx].schoolClass || lt.schoolClass,
                };
              }
            });

            // Dọn sạch vinamath_local_registered_users: loại trừ bất kỳ giáo viên nào không còn trên server hoặc đã bị xóa
            const validTeacherKeys = new Set(rawTeachers.map((t: any) => (t.id || t.username || "").toLowerCase()));
            const cleanedLocal = parsedLocal.filter((u: any) => {
              const uId = u.id?.toLowerCase();
              const uUser = u.username?.toLowerCase();
              if ((uId && deletedSet.has(uId)) || (uUser && deletedSet.has(uUser)) || u.role === "deleted") {
                return false;
              }
              if (u.role === "teacher") {
                return (uId && validTeacherKeys.has(uId)) || (uUser && validTeacherKeys.has(uUser));
              }
              return true;
            });
            localStorage.setItem("vinamath_local_registered_users", JSON.stringify(cleanedLocal));
          }
        } catch (e) {
          console.warn("Lỗi đọc local registered users:", e);
        }
      }

      setStudents(rawStudents);
      setTeachers(rawTeachers);

      // 2. Lấy dữ liệu tiến độ & báo cáo câu sai
      // 1.5. Lấy danh sách báo cáo sai sót câu hỏi
      try {
        const reportsList = await fetchQuestionReports();
        setQuestionReports(reportsList);
      } catch (repErr) {
        console.warn("Lỗi fetch question reports:", repErr);
      }

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

  // Tạo danh sách lớp theo khối: Khối 6 đến Khối 12, mỗi khối từ A1 đến A9 (Lớp 6A1, 6A2, ..., 12A9)
  const GRADE_TABS = [6, 7, 8, 9, 10, 11, 12];
  const GRADE_PRESETS: { [grade: number]: string[] } = useMemo(() => {
    const map: { [grade: number]: string[] } = {};
    GRADE_TABS.forEach((g) => {
      map[g] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => `Lớp ${g}A${num}`);
    });
    return map;
  }, []);

  const openAddTeacherModal = () => {
    setEditingTeacher(null);
    setModalGradeTab(6);
    setTeacherFormData({
      fullName: "",
      username: "",
      password: "",
      schoolName: "THCS VinaMath",
      assignedClasses: ["Lớp 6A1"],
      customClass: "",
    });
    setTeacherError(null);
    setIsTeacherModalOpen(true);
  };

  const openEditTeacherModal = (t: any) => {
    setEditingTeacher(t);
    const classes = parseAssignedClasses(t.assignedClasses || t.schoolClass);
    // Tự động chuyển tab khối sang lớp đầu tiên của giáo viên nếu có
    let firstGrade = 6;
    if (classes.length > 0) {
      const match = classes[0].match(/(\d+)/);
      if (match && GRADE_TABS.includes(Number(match[1]))) {
        firstGrade = Number(match[1]);
      }
    }
    setModalGradeTab(firstGrade);
    setTeacherFormData({
      fullName: t.fullName || "",
      username: t.username || "",
      password: "",
      schoolName: t.schoolName || "THCS VinaMath",
      assignedClasses: classes,
      customClass: "",
    });
    setTeacherError(null);
    setIsTeacherModalOpen(true);
  };

  const toggleClassAssignment = (className: string) => {
    setTeacherFormData((prev) => {
      const exists = prev.assignedClasses.includes(className);
      return {
        ...prev,
        assignedClasses: exists
          ? prev.assignedClasses.filter((c) => c !== className)
          : [...prev.assignedClasses, className],
      };
    });
  };

  const handleAddCustomClass = () => {
    const raw = teacherFormData.customClass.trim();
    if (!raw) return;
    const formatted = raw.startsWith("Lớp ") ? raw : `Lớp ${raw}`;
    
    // Thêm vào danh sách lớp đã chọn của giáo viên
    setTeacherFormData((prev) => ({
      ...prev,
      assignedClasses: prev.assignedClasses.includes(formatted)
        ? prev.assignedClasses
        : [...prev.assignedClasses, formatted],
      customClass: "",
    }));

    // Thêm vào danh sách lớp tùy chỉnh để hiển thị badge
    setCustomClassesList((prev) => (prev.includes(formatted) ? prev : [...prev, formatted]));
  };

  const handleRemoveAssignedClass = (className: string) => {
    setTeacherFormData((prev) => ({
      ...prev,
      assignedClasses: prev.assignedClasses.filter((c) => c !== className),
    }));
  };

  const handleSaveTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    setTeacherError(null);
    setIsSavingTeacher(true);

    const targetUsername = teacherFormData.username.trim().toLowerCase();
    const cleanFullName = teacherFormData.fullName.trim();
    const cleanSchoolName = teacherFormData.schoolName.trim();
    const assignedClasses = teacherFormData.assignedClasses;
    const assignedClassStr = assignedClasses.join(", ");

    try {
      if (editingTeacher) {
        const oldUsername = (editingTeacher.username || "").trim().toLowerCase();

        // Cập nhật thông tin, tên đăng nhập và phân công lớp
        const res = await fetch("/api/auth/users", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: editingTeacher.id,
            oldUsername: oldUsername,
            username: targetUsername,
            newUsername: targetUsername,
            fullName: cleanFullName,
            schoolName: cleanSchoolName,
            assignedClasses: assignedClasses,
            schoolClass: assignedClassStr,
            password: teacherFormData.password ? teacherFormData.password.trim() : undefined,
          }),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          // 1. Cập nhật state cục bộ ngay tức thì
          setTeachers((prev) =>
            prev.map((t) => {
              if (t.id === editingTeacher.id || t.username?.toLowerCase() === oldUsername) {
                return {
                  ...t,
                  username: targetUsername,
                  fullName: cleanFullName,
                  schoolName: cleanSchoolName,
                  assignedClasses: assignedClasses,
                  schoolClass: assignedClassStr,
                };
              }
              return t;
            })
          );

          // 2. Đồng bộ vào localStorage để phản ánh tức thì trên client
          try {
            const localSaved = localStorage.getItem("vinamath_local_registered_users");
            const list = localSaved ? JSON.parse(localSaved) : [];
            const idx = list.findIndex(
              (u: any) => u.id === editingTeacher.id || u.username?.toLowerCase() === oldUsername
            );
            if (idx >= 0) {
              list[idx].username = targetUsername;
              list[idx].fullName = cleanFullName;
              list[idx].schoolName = cleanSchoolName;
              list[idx].assignedClasses = assignedClasses;
              list[idx].schoolClass = assignedClassStr;
              if (teacherFormData.password?.trim()) {
                list[idx].password = teacherFormData.password.trim();
              }
            } else {
              list.unshift({
                ...editingTeacher,
                username: targetUsername,
                fullName: cleanFullName,
                schoolName: cleanSchoolName,
                assignedClasses: assignedClasses,
                schoolClass: assignedClassStr,
              });
            }
            localStorage.setItem("vinamath_local_registered_users", JSON.stringify(list));
          } catch (storageErr) {
            console.warn("Lỗi lưu localStorage:", storageErr);
          }

          setStatusMessage(`Đã cập nhật phân công lớp cho giáo viên ${cleanFullName}`);
          setIsTeacherModalOpen(false);
          fetchAdminData();
          setTimeout(() => setStatusMessage(null), 3000);
        } else {
          setTeacherError(data.error || "Không thể cập nhật giáo viên.");
        }
      } else {
        // Thêm giáo viên mới
        if (!targetUsername || !teacherFormData.password || !cleanFullName) {
          setTeacherError("Vui lòng điền đầy đủ họ tên, tên đăng nhập và mật khẩu.");
          setIsSavingTeacher(false);
          return;
        }
        const res = await fetch("/api/auth/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            role: "teacher",
            fullName: cleanFullName,
            username: targetUsername,
            password: teacherFormData.password.trim(),
            schoolName: cleanSchoolName,
            assignedClasses: assignedClasses,
            schoolClass: assignedClassStr,
          }),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          const newTeacherObj = {
            id: data.user?.id || `u-teacher-${Date.now()}`,
            username: targetUsername,
            fullName: cleanFullName,
            role: "teacher",
            schoolName: cleanSchoolName,
            assignedClasses: assignedClasses,
            schoolClass: assignedClassStr,
          };

          setTeachers((prev) => [newTeacherObj, ...prev]);

          try {
            const localSaved = localStorage.getItem("vinamath_local_registered_users");
            const list = localSaved ? JSON.parse(localSaved) : [];
            list.unshift(newTeacherObj);
            localStorage.setItem("vinamath_local_registered_users", JSON.stringify(list));
          } catch {}

          setStatusMessage(`Đã thêm mới và phân quyền giáo viên: ${cleanFullName}`);
          setIsTeacherModalOpen(false);
          fetchAdminData();
          setTimeout(() => setStatusMessage(null), 3000);
        } else {
          setTeacherError(data.error || "Không thể tạo tài khoản giáo viên.");
        }
      }
    } catch (err) {
      setTeacherError("Đã xảy ra lỗi khi lưu thông tin giáo viên.");
    } finally {
      setIsSavingTeacher(false);
    }
  };

  const handleDeleteTeacher = async (tId: string, tName: string) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa tài khoản giáo viên "${tName}" khỏi hệ thống?`)) return;
    try {
      setIsLoading(true);
      const res = await fetch(`/api/auth/users?id=${encodeURIComponent(tId)}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage(`Đã xóa tài khoản giáo viên: ${tName}`);

        // Dọn dẹp cả trong localStorage nếu có & lưu vào Blacklist cục bộ
        if (typeof window !== "undefined") {
          try {
            const deletedIdsRaw = localStorage.getItem("vinamath_deleted_user_ids");
            const deletedList: string[] = deletedIdsRaw ? JSON.parse(deletedIdsRaw) : [];
            const idsToAdd = [
              tId,
              tId.toLowerCase(),
              ...(data.deletedIdentifiers || [])
            ];
            idsToAdd.forEach((id) => {
              if (id && !deletedList.includes(id)) {
                deletedList.push(id);
              }
            });
            localStorage.setItem("vinamath_deleted_user_ids", JSON.stringify(deletedList));

            const localSaved = localStorage.getItem("vinamath_local_registered_users");
            if (localSaved) {
              const list = JSON.parse(localSaved);
              const filtered = list.filter(
                (u: any) =>
                  u.id !== tId &&
                  u.username?.toLowerCase() !== tId.toLowerCase()
              );
              localStorage.setItem("vinamath_local_registered_users", JSON.stringify(filtered));
            }
          } catch (e) {
            console.warn("Lỗi dọn local registered users:", e);
          }
        }

        setTeachers((prev) => prev.filter((t) => t.id !== tId && t.username !== tId));
        setTimeout(() => setStatusMessage(null), 3000);
      } else {
        alert(data.error || "Không thể xóa giáo viên.");
      }
    } catch (err) {
      alert("Đã xảy ra lỗi khi gửi yêu cầu xóa giáo viên.");
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

  const handleUpdateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminFormError(null);
    setAdminFormSuccess(null);

    const currentUsername = (adminForm.currentUsername || user?.username || "admin").trim();
    const currentPassword = adminForm.currentPassword.trim();
    const newUsername = adminForm.newUsername.trim();
    const newFullName = adminForm.newFullName.trim();
    const newPassword = adminForm.newPassword.trim();
    const confirmPassword = adminForm.confirmPassword.trim();

    if (!currentPassword) {
      setAdminFormError("Vui lòng nhập mật khẩu hiện tại để xác thực tài khoản quản trị.");
      return;
    }

    if (newPassword) {
      if (newPassword.length < 6) {
        setAdminFormError("Mật khẩu mới phải có ít nhất 6 ký tự.");
        return;
      }
      if (newPassword !== confirmPassword) {
        setAdminFormError("Mật khẩu mới và mật khẩu xác nhận không trùng khớp.");
        return;
      }
    }

    if (newUsername && newUsername.length < 3) {
      setAdminFormError("Tên đăng nhập mới phải có ít nhất 3 ký tự.");
      return;
    }

    if (!newUsername && !newPassword && !newFullName) {
      setAdminFormError("Vui lòng nhập ít nhất một thông tin muốn thay đổi.");
      return;
    }

    setIsUpdatingAdmin(true);
    try {
      const res = await updateAdminCredentials({
        currentUsername,
        currentPassword,
        newUsername: newUsername || undefined,
        newPassword: newPassword || undefined,
        newFullName: newFullName || undefined,
      });

      if (res.success) {
        setAdminFormSuccess(res.message || "Cập nhật tài khoản quản trị thành công!");
        setAdminForm((prev) => ({
          ...prev,
          currentUsername: newUsername || prev.currentUsername,
          currentPassword: newPassword || prev.currentPassword,
          newUsername: "",
          newPassword: "",
          confirmPassword: "",
          newFullName: newFullName || prev.newFullName,
        }));
        setTimeout(() => setAdminFormSuccess(null), 5000);
      } else {
        setAdminFormError(res.error || "Không thể cập nhật tài khoản quản trị viên.");
      }
    } catch (err) {
      console.error("Lỗi cập nhật admin:", err);
      setAdminFormError("Đã xảy ra lỗi khi gửi yêu cầu cập nhật.");
    } finally {
      setIsUpdatingAdmin(false);
    }
  };

  // 1. NẾU LÀ HỌC SINH ĐANG ĐĂNG NHẬP: TUYỆT ĐỐI KHÔNG HIỂN THỊ TRANG QUẢN TRỊ
  if (user && !isAdmin) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#0e1526] border-2 border-cyan-500/40 text-center space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <GraduationCap className="w-8 h-8 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-black text-white">Bạn đang đăng nhập tài khoản Học sinh</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Xin chào <strong>{user.fullName || user.username}</strong>! Khu vực Quản trị chỉ dành cho Thầy Cô và Quản trị viên. Hệ thống đang chuyển hướng bạn về trang Sổ tay học tập cá nhân...
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <Link
              href="/tai-khoan"
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs hover:scale-105 transition-all shadow-md shadow-cyan-500/30"
            >
              Về Trang Cá Nhân Học Sinh
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. NẾU CHƯA ĐĂNG NHẬP: HIỂN THỊ KHUNG ĐĂNG NHẬP QUẢN TRỊ VIÊN
  if (!isAdmin) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#0e1526] border-2 border-amber-500/40 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Shield className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-black text-white">Khu Vực Quản Trị Viên (Admin)</h2>
            <p className="text-xs text-slate-300">
              Vui lòng đăng nhập với tài khoản Quản trị viên để truy cập trang quản lý bài học và theo dõi tiến độ học tập chi tiết của học sinh.
            </p>
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
              Xin chào, <strong className="text-white">{user?.fullName || user?.username || "Quản trị viên"}</strong>
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
          onClick={() => setActiveTab("teachers")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "teachers"
              ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <UserCheck className="w-4 h-4 text-teal-400" />
          <span>Dành Cho Giáo Viên ({teachers.length})</span>
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
          onClick={() => setActiveTab("reports")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "reports"
              ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Flag className="w-4 h-4 text-rose-400" />
          <span>Báo Cáo Sai Sót ({questionReports.length})</span>
          {pendingReportsCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] animate-pulse">
              {pendingReportsCount} mới
            </span>
          )}
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

        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "settings"
              ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <KeyRound className="w-4 h-4 text-emerald-400" />
          <span>Cài Đặt & Đổi Mật Khẩu Admin</span>
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
      {/* TAB: PHÂN QUYỀN GIÁO VIÊN & PHÂN CÔNG LỚP HỌC                             */}
      {/* ========================================================================= */}
      {activeTab === "teachers" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#0e1526] border border-slate-800">
            <div>
              <h2 className="text-sm font-black text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-teal-400" />
                Danh Sách Giáo Viên & Phân Công Lớp Quản Lý
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Admin phân công các lớp phụ trách cho từng giáo viên. Giáo viên chỉ được xem và quản lý học sinh trong các lớp được phân quyền tại đây.
              </p>
            </div>
            <button
              onClick={openAddTeacherModal}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all shadow-md shadow-teal-500/20 shrink-0 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>+ Thêm Giáo Viên Mới</span>
            </button>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0e1526] overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 text-slate-400 font-bold border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">STT</th>
                    <th className="p-3.5">Giáo Viên</th>
                    <th className="p-3.5">Tên Đăng Nhập</th>
                    <th className="p-3.5">Trường Công Tác</th>
                    <th className="p-3.5">Các Lớp Được Phân Công</th>
                    <th className="p-3.5 text-center">HS Trong Lớp</th>
                    <th className="p-3.5 text-center">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {teachers.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-slate-500">
                        Chưa có giáo viên nào trong hệ thống. Hãy nhấn &quot;+ Thêm Giáo Viên Mới&quot; để tạo tài khoản và phân công lớp.
                      </td>
                    </tr>
                  ) : (
                    teachers.map((t, idx) => {
                      const tClasses = parseAssignedClasses(t.assignedClasses || t.schoolClass);
                      const myStudentsCount = students.filter((s) => isStudentInAssignedClasses(tClasses, s.schoolClass)).length;

                      return (
                        <tr key={t.id || t.username} className="hover:bg-slate-900/50 transition-colors">
                          <td className="p-3.5 font-mono text-slate-500">{idx + 1}</td>
                          <td className="p-3.5">
                            <div className="font-bold text-white flex items-center gap-1.5">
                              <span className="text-base">👨‍🏫</span>
                              <span>{t.fullName || t.username}</span>
                            </div>
                          </td>
                          <td className="p-3.5 font-mono text-teal-400 font-bold">{t.username}</td>
                          <td className="p-3.5 text-slate-400">{t.schoolName || "THCS VinaMath"}</td>
                          <td className="p-3.5">
                            <div className="flex flex-wrap gap-1.5">
                              {tClasses.length === 0 ? (
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                  Chưa phân công lớp
                                </span>
                              ) : (
                                tClasses.map((cls: string) => (
                                  <span
                                    key={cls}
                                    className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                                  >
                                    {cls}
                                  </span>
                                ))
                              )}
                            </div>
                          </td>
                          <td className="p-3.5 text-center font-bold text-white">
                            <span className="px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs">
                              {myStudentsCount} HS
                            </span>
                          </td>
                          <td className="p-3.5 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => openEditTeacherModal(t)}
                                className="px-3 py-1.5 rounded-xl bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 border border-teal-500/40 text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1"
                              >
                                <Edit3 className="w-3 h-3" />
                                <span>Sửa & Phân Công</span>
                              </button>
                              <button
                                onClick={() => handleDeleteTeacher(t.id || t.username, t.fullName || t.username)}
                                className="p-1.5 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 text-xs transition-all cursor-pointer"
                                title="Xóa tài khoản giáo viên này"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
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
      {/* TAB: BÁO CÁO SAI SÓT CÂU HỎI TỪ HỌC SINH                                 */}
      {/* ========================================================================= */}
      {activeTab === "reports" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Header & Filter Controls */}
          <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-md">
            <div className="space-y-1">
              <h2 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                <Flag className="w-4 h-4 text-rose-400" />
                <span>Hộp Thư Phản Ánh & Báo Cáo Sai Sót Từ Học Sinh</span>
              </h2>
              <p className="text-xs text-slate-400">
                Theo dõi các câu hỏi học sinh báo cáo sai đáp án, sai đề hoặc sai lời giải để kịp thời chỉnh sửa trực tiếp.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 self-stretch md:self-auto">
              <button
                onClick={() => setReportFilterStatus("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  reportFilterStatus === "all"
                    ? "bg-slate-700 text-white font-black shadow-sm"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                Tất cả ({questionReports.length})
              </button>
              <button
                onClick={() => setReportFilterStatus("pending")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  reportFilterStatus === "pending"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "bg-slate-900 text-amber-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>Chờ xử lý ({pendingReportsCount})</span>
              </button>
              <button
                onClick={() => setReportFilterStatus("resolved")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  reportFilterStatus === "resolved"
                    ? "bg-emerald-500 text-slate-950 font-black shadow-sm"
                    : "bg-slate-900 text-emerald-400 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                Đã chỉnh sửa ({questionReports.filter((r) => r.status === "resolved").length})
              </button>
              <button
                onClick={() => setReportFilterStatus("dismissed")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  reportFilterStatus === "dismissed"
                    ? "bg-slate-600 text-white font-black shadow-sm"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                Bỏ qua ({questionReports.filter((r) => r.status === "dismissed").length})
              </button>
            </div>
          </div>

          {/* Reports Table / List */}
          {(() => {
            const filteredReports = questionReports.filter((r) => {
              if (reportFilterStatus === "all") return true;
              return r.status === reportFilterStatus;
            });

            if (filteredReports.length === 0) {
              return (
                <div className="py-14 text-center rounded-3xl bg-[#0e1526] border border-slate-800 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">
                      {reportFilterStatus === "pending"
                        ? "Tuyệt vời! Không còn báo cáo nào đang chờ xử lý."
                        : "Chưa có báo cáo sai sót nào trong danh mục này."}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Khi học sinh bấm nút &quot;Báo lỗi câu này&quot;, dữ liệu chi tiết sẽ xuất hiện tại đây ngay lập tức.
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-1 gap-3.5">
                {filteredReports.map((item) => {
                  const reasonLabel = (() => {
                    switch (item.reportReason) {
                      case "wrong_answer":
                        return "Sai đáp án";
                      case "wrong_question":
                        return "Sai đề bài";
                      case "wrong_solution":
                        return "Sai lời giải";
                      case "typo_latex":
                        return "Lỗi công thức/hình";
                      default:
                        return "Góp ý khác";
                    }
                  })();

                  const gradeRoute = item.gradeKey ? item.gradeKey.replace("grade", "lop-") : "lop-6";

                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-2xl bg-[#0e1526] border transition-all space-y-3 shadow-md ${
                        item.status === "pending"
                          ? "border-amber-500/50 hover:border-amber-400"
                          : item.status === "resolved"
                          ? "border-emerald-500/30 hover:border-emerald-400"
                          : "border-slate-800 opacity-70"
                      }`}
                    >
                      {/* Top Row: Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              item.status === "pending"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                                : item.status === "resolved"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                : "bg-slate-800 text-slate-400 border border-slate-700"
                            }`}
                          >
                            {item.status === "pending"
                              ? "⏳ Chờ xử lý"
                              : item.status === "resolved"
                              ? "✓ Đã chỉnh sửa"
                              : "✕ Bỏ qua"}
                          </span>

                          <span className="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-300 border border-rose-500/30 text-[10px] font-bold">
                            {reasonLabel}
                          </span>

                          <span className="text-xs font-bold text-white">
                            {item.lessonTitle}
                          </span>

                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold">
                            {item.questionBadge || item.questionId}
                          </span>
                        </div>

                        <div className="text-[11px] text-slate-400 flex items-center gap-2">
                          <span>
                            Người báo: <strong className="text-slate-200">{item.reporter?.fullName || item.reporter?.username || "Học sinh"}</strong>
                            {item.reporter?.schoolClass ? ` (${item.reporter.schoolClass})` : ""}
                          </span>
                          <span>•</span>
                          <span className="font-mono text-slate-400">
                            {new Date(item.createdAt).toLocaleString("vi-VN")}
                          </span>
                        </div>
                      </div>

                      {/* Question Content */}
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-100 font-medium leading-relaxed">
                        <div className="text-slate-400 text-[10px] font-bold uppercase mb-1">
                          Nội dung câu hỏi:
                        </div>
                        <MathFormattedText text={item.questionText} />
                      </div>

                      {/* Answers & Feedback details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        {item.correctAnswer && (
                          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-emerald-300">
                            <span className="text-[10px] text-slate-400 block font-bold">Đáp án trong hệ thống:</span>
                            <span className="font-bold">{item.correctAnswer}</span>
                          </div>
                        )}

                        {item.description ? (
                          <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-200">
                            <span className="text-[10px] text-rose-400 block font-bold">Lời nhắn/Mô tả lỗi của học sinh:</span>
                            <span className="italic">{item.description}</span>
                          </div>
                        ) : (
                          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-slate-400 italic">
                            Học sinh không để lại mô tả bổ sung.
                          </div>
                        )}
                      </div>

                      {/* Actions Bar */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80">
                        <div className="flex items-center gap-2">
                          {item.lessonId && (
                            <Link
                              href={`/hoc-tap/${gradeRoute}/${item.lessonId}`}
                              target="_blank"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs hover:scale-105 transition-all shadow-sm"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Mở bài học để sửa ngay</span>
                            </Link>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {item.status === "pending" && (
                            <>
                              <button
                                onClick={async () => {
                                  await updateQuestionReportStatus(item.id, "resolved");
                                  const updated = await fetchQuestionReports();
                                  setQuestionReports(updated);
                                  setStatusMessage("Đã đánh dấu đã chỉnh sửa câu hỏi thành công!");
                                  setTimeout(() => setStatusMessage(null), 3000);
                                }}
                                className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Đánh dấu đã sửa</span>
                              </button>
                              <button
                                onClick={async () => {
                                  await updateQuestionReportStatus(item.id, "dismissed");
                                  const updated = await fetchQuestionReports();
                                  setQuestionReports(updated);
                                }}
                                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 text-xs font-bold transition-all cursor-pointer"
                              >
                                Bỏ qua
                              </button>
                            </>
                          )}

                          {item.status !== "pending" && (
                            <button
                              onClick={async () => {
                                await updateQuestionReportStatus(item.id, "pending");
                                const updated = await fetchQuestionReports();
                                setQuestionReports(updated);
                              }}
                              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold transition-all cursor-pointer"
                            >
                              Chuyển lại về Chờ xử lý
                            </button>
                          )}

                          <button
                            onClick={async () => {
                              if (!window.confirm("Bạn có chắc muốn xóa báo cáo này khỏi danh sách?")) return;
                              await deleteQuestionReport(item.id);
                              const updated = await fetchQuestionReports();
                              setQuestionReports(updated);
                              setStatusMessage("Đã xóa báo cáo.");
                              setTimeout(() => setStatusMessage(null), 3000);
                            }}
                            className="p-1.5 rounded-xl text-rose-400 hover:text-white hover:bg-rose-950/40 border border-rose-500/30 transition-all cursor-pointer"
                            title="Xóa báo cáo này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: CÀI ĐẶT & ĐỔI TÊN ĐĂNG NHẬP / MẬT KHẨU ADMIN                       */}
      {/* ========================================================================= */}
      {activeTab === "settings" && (
        <div className="space-y-6 max-w-3xl animate-in fade-in">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1526] border-2 border-emerald-500/30 space-y-6 shadow-xl">
            <div className="space-y-2 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <KeyRound className="w-5 h-5" />
                </span>
                <h2 className="text-xl font-black text-white">Đổi Tên Đăng Nhập & Mật Khẩu Quản Trị Viên</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Cập nhật thông tin quản trị viên để bảo mật hệ thống. Sau khi đổi, hệ thống sẽ xóa bỏ mọi thông tin tài khoản mặc định và chỉ cho phép đăng nhập bằng tài khoản mới của bạn.
              </p>
            </div>

            {/* Thông báo lỗi / thành công */}
            {adminFormError && (
              <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{adminFormError}</span>
              </div>
            )}

            {adminFormSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{adminFormSuccess}</span>
              </div>
            )}

            <form onSubmit={handleUpdateAdmin} className="space-y-5">
              {/* Phần 1: Xác thực hiện tại */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" /> 1. Xác thực tài khoản hiện tại
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Tên đăng nhập hiện tại</label>
                    <input
                      type="text"
                      value={adminForm.currentUsername}
                      onChange={(e) => setAdminForm({ ...adminForm, currentUsername: e.target.value })}
                      required
                      placeholder="admin"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-amber-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">
                      Mật khẩu hiện tại <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="password"
                      value={adminForm.currentPassword}
                      onChange={(e) => setAdminForm({ ...adminForm, currentPassword: e.target.value })}
                      required
                      placeholder="Nhập mật khẩu hiện tại..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-amber-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Phần 2: Thông tin mới */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <KeyRound className="w-3.5 h-3.5" /> 2. Thiết lập thông tin đăng nhập mới
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Tên đăng nhập mới</label>
                    <input
                      type="text"
                      value={adminForm.newUsername}
                      onChange={(e) => setAdminForm({ ...adminForm, newUsername: e.target.value })}
                      placeholder="Bỏ trống nếu giữ nguyên"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                    <span className="text-[10px] text-slate-500">Tối thiểu 3 ký tự viết liền không dấu</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Họ và tên Quản trị viên</label>
                    <input
                      type="text"
                      value={adminForm.newFullName}
                      onChange={(e) => setAdminForm({ ...adminForm, newFullName: e.target.value })}
                      placeholder="Quản Trị Viên VinaMath"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Mật khẩu mới</label>
                    <input
                      type="password"
                      value={adminForm.newPassword}
                      onChange={(e) => setAdminForm({ ...adminForm, newPassword: e.target.value })}
                      placeholder="Bỏ trống nếu không đổi mật khẩu"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                    <span className="text-[10px] text-slate-500">Tối thiểu 6 ký tự</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Xác nhận mật khẩu mới</label>
                    <input
                      type="password"
                      value={adminForm.confirmPassword}
                      onChange={(e) => setAdminForm({ ...adminForm, confirmPassword: e.target.value })}
                      placeholder="Nhập lại mật khẩu mới..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="submit"
                  disabled={isUpdatingAdmin}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs sm:text-sm hover:from-emerald-400 hover:to-teal-300 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <KeyRound className={`w-4 h-4 ${isUpdatingAdmin ? "animate-spin" : ""}`} />
                  <span>{isUpdatingAdmin ? "Đang lưu thay đổi..." : "Lưu Thông Tin Đăng Nhập Mới"}</span>
                </button>
              </div>
            </form>
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

            {/* Chi tiết thời gian xem video & tiến độ từng bài học của học sinh */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-white flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-rose-400" />
                  <span>Thời Gian Xem Video & Tiến Độ Từng Bài Học</span>
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Tổng: <strong className="text-rose-400">{selectedStudentDetail.progress?.totalVideoMinutes || 0} phút</strong>
                </span>
              </h3>

              {selectedStudentDetail.progress?.lessons &&
              Object.keys(selectedStudentDetail.progress.lessons).length > 0 ? (
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-inner">
                  <div className="max-h-56 overflow-y-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-[#131d33] text-[10px] font-black uppercase text-amber-300 border-b border-slate-800 sticky top-0 z-10">
                        <tr>
                          <th className="py-2.5 px-3">Mã Bài</th>
                          <th className="py-2.5 px-3">Tên Bài Học</th>
                          <th className="py-2.5 px-3 text-center">Thời Lượng Video</th>
                          <th className="py-2.5 px-3 text-center">Điểm</th>
                          <th className="py-2.5 px-3 text-center">Trạng Thái</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80 text-[11px]">
                        {Object.values(selectedStudentDetail.progress.lessons).map((l: any) => {
                          const sec = l.videoWatchedSeconds || 0;
                          const mins = Math.floor(sec / 60);
                          const remainSec = sec % 60;
                          const timeStr = mins > 0 
                            ? `${mins}p ${remainSec > 0 ? `${remainSec}s` : ""}`
                            : `${remainSec}s`;

                          return (
                            <tr key={l.lessonId} className="hover:bg-slate-800/40 transition-colors">
                              <td className="py-2 px-3 font-mono font-bold text-cyan-400">{l.lessonId}</td>
                              <td className="py-2 px-3 font-medium text-white max-w-xs truncate">{l.lessonTitle || l.lessonId}</td>
                              <td className="py-2 px-3 text-center font-bold text-rose-400">
                                ⏱ {timeStr}
                              </td>
                              <td className="py-2 px-3 text-center font-bold text-amber-300">
                                ⭐ {l.score || 0}
                              </td>
                              <td className="py-2 px-3 text-center">
                                {l.isCompleted ? (
                                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                                    ✓ Xong
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                                    Đang học
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
                  Học sinh chưa có lượt xem video bài học nào.
                </div>
              )}
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

      {/* ========================================================================= */}
      {/* MODAL: THÊM / CHỈNH SỬA PHÂN CÔNG LỚP CHO GIÁO VIÊN                        */}
      {/* ========================================================================= */}
      {isTeacherModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-[#0e1526] border-2 border-teal-500/40 p-6 space-y-5 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-black text-white">
                    {editingTeacher ? "Chỉnh Sửa Giáo Viên & Phân Công Lớp" : "Thêm Giáo Viên Mới"}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Cập nhật tên đăng nhập, thông tin và phân quyền các lớp phụ trách
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsTeacherModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error Message */}
            {teacherError && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{teacherError}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSaveTeacher} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Họ và Tên Giáo Viên <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={teacherFormData.fullName}
                  onChange={(e) => setTeacherFormData({ ...teacherFormData, fullName: e.target.value })}
                  placeholder="Ví dụ: Thầy Nguyễn Văn Toàn"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Tên Đăng Nhập <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={teacherFormData.username}
                    onChange={(e) => setTeacherFormData({ ...teacherFormData, username: e.target.value.toLowerCase().replace(/\s+/g, "") })}
                    placeholder="Ví dụ: gv_toan6"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-teal-400"
                  />
                  <span className="text-[10px] text-teal-400/90 block mt-1">
                    {editingTeacher ? "💡 Có thể thay đổi tên đăng nhập của giáo viên tại đây" : "Viết liền không dấu"}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {editingTeacher ? "Mật Khẩu Mới (bỏ trống nếu giữ nguyên)" : "Mật Khẩu Khởi Tạo *"}
                  </label>
                  <input
                    type="password"
                    required={!editingTeacher}
                    value={teacherFormData.password}
                    onChange={(e) => setTeacherFormData({ ...teacherFormData, password: e.target.value })}
                    placeholder={editingTeacher ? "Nhập nếu muốn đổi..." : "Ví dụ: gv123456"}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Đơn Vị Công Tác / Trường Học
                </label>
                <input
                  type="text"
                  value={teacherFormData.schoolName}
                  onChange={(e) => setTeacherFormData({ ...teacherFormData, schoolName: e.target.value })}
                  placeholder="Ví dụ: THCS VinaMath"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                />
              </div>

              {/* Phân Công Lớp Phụ Trách Theo Khối 6-12 & A1-A9 */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-300">
                    Phân Công Lớp Phụ Trách ({teacherFormData.assignedClasses.length} lớp đã chọn)
                  </label>
                  <span className="text-[10px] text-teal-400 font-medium">
                    (Giáo viên chỉ thấy học sinh các lớp này)
                  </span>
                </div>

                {/* Danh sách các lớp ĐÃ CHỌN (có nút x để bớt nhanh) */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 flex items-center justify-between">
                    <span>Lớp đã phân công cho giáo viên:</span>
                    {teacherFormData.assignedClasses.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setTeacherFormData((prev) => ({ ...prev, assignedClasses: [] }))}
                        className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                      >
                        Bỏ chọn tất cả
                      </button>
                    )}
                  </div>
                  {teacherFormData.assignedClasses.length === 0 ? (
                    <div className="text-xs text-rose-400 italic py-1">
                      ⚠️ Chưa chọn lớp nào. Hãy bấm chọn các lớp bên dưới hoặc nhập lớp mới.
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                      {teacherFormData.assignedClasses.map((cls) => (
                        <span
                          key={cls}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-bold"
                        >
                          <span>{cls}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveAssignedClass(cls)}
                            className="w-4 h-4 rounded-full bg-teal-500/30 hover:bg-rose-500 hover:text-white flex items-center justify-center text-[10px] transition-colors cursor-pointer"
                            title="Xóa lớp này khỏi danh sách phân công"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bộ chọn danh sách lớp theo từng Khối (Khối 6 -> 12) */}
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-300">
                    Chọn lớp theo Khối:
                  </div>

                  {/* Tabs chọn khối 6, 7, 8, 9, 10, 11, 12 */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {GRADE_TABS.map((g) => {
                      const isActive = modalGradeTab === g;
                      // Đếm xem có bao nhiêu lớp khối này đang được chọn
                      const selectedInGradeCount = teacherFormData.assignedClasses.filter((c) => {
                        const m = c.match(/(\d+)/);
                        return m && Number(m[1]) === g;
                      }).length;

                      return (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setModalGradeTab(g)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                            isActive
                              ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20"
                              : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                          }`}
                        >
                          <span>Khối {g}</span>
                          {selectedInGradeCount > 0 && (
                            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                              isActive ? "bg-slate-950 text-teal-300" : "bg-teal-500 text-slate-950"
                            }`}>
                              {selectedInGradeCount}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Danh sách các lớp A1 đến A9 của Khối đang chọn */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Các lớp Khối {modalGradeTab} (A1 - A9):</span>
                      <button
                        type="button"
                        onClick={() => {
                          const gradeClasses = GRADE_PRESETS[modalGradeTab] || [];
                          const allIn = gradeClasses.every((c) => teacherFormData.assignedClasses.includes(c));
                          if (allIn) {
                            // Bỏ chọn tất cả lớp của khối này
                            setTeacherFormData((prev) => ({
                              ...prev,
                              assignedClasses: prev.assignedClasses.filter((c) => !gradeClasses.includes(c)),
                            }));
                          } else {
                            // Chọn tất cả lớp của khối này
                            setTeacherFormData((prev) => ({
                              ...prev,
                              assignedClasses: Array.from(new Set([...prev.assignedClasses, ...gradeClasses])),
                            }));
                          }
                        }}
                        className="text-[10px] text-teal-400 hover:underline cursor-pointer"
                      >
                        {(GRADE_PRESETS[modalGradeTab] || []).every((c) => teacherFormData.assignedClasses.includes(c))
                          ? "Bỏ chọn cả khối"
                          : "Chọn cả khối"}
                      </button>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {(GRADE_PRESETS[modalGradeTab] || []).map((cls) => {
                        const isSelected = teacherFormData.assignedClasses.includes(cls);
                        return (
                          <button
                            type="button"
                            key={cls}
                            onClick={() => toggleClassAssignment(cls)}
                            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                              isSelected
                                ? "bg-teal-500 text-slate-950 shadow-sm shadow-teal-500/30 font-black scale-102"
                                : "bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/50"
                            }`}
                          >
                            <span>{isSelected ? "✓" : "+"}</span>
                            <span>{cls}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Thêm lớp tùy chỉnh (tự do thêm mọi tên lớp khác) */}
                  <div className="pt-2 border-t border-slate-800 space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-400">
                      Thêm tên lớp tùy chỉnh khác:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={teacherFormData.customClass}
                        onChange={(e) => setTeacherFormData({ ...teacherFormData, customClass: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddCustomClass();
                          }
                        }}
                        placeholder="Nhập tên lớp khác (Ví dụ: 6A10, 10A12, 12 Tin...)"
                        className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                      />
                      <button
                        type="button"
                        onClick={handleAddCustomClass}
                        className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-black cursor-pointer transition-colors shadow-sm shadow-teal-500/20"
                      >
                        + Thêm Lớp
                      </button>
                    </div>

                    {/* Hiển thị danh sách lớp tùy chỉnh đã tạo nếu có */}
                    {customClassesList.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="text-[10px] text-slate-500 self-center">Lớp tự thêm:</span>
                        {customClassesList.map((cls) => {
                          const isSelected = teacherFormData.assignedClasses.includes(cls);
                          return (
                            <button
                              key={cls}
                              type="button"
                              onClick={() => toggleClassAssignment(cls)}
                              className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                                  : "bg-slate-800 text-slate-400 hover:text-white"
                              }`}
                            >
                              {isSelected ? "✓ " : "+ "}{cls}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsTeacherModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSavingTeacher}
                  className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs transition-all shadow-md shadow-teal-500/20 cursor-pointer"
                >
                  {isSavingTeacher ? "Đang lưu..." : editingTeacher ? "Lưu Cập Nhật Phân Quyền" : "Tạo & Phân Quyền"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
