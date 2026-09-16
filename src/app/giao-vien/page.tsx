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
  Copy,
  ExternalLink,
  PlusCircle,
  Trash2,
  ClipboardCheck,
  Upload,
  Code,
  Share2,
  ShieldAlert,
  Grid,
  Sliders,
  Globe,
  Database,
  HelpCircle,
  Check,
  UploadCloud,
  Folder,
  FolderPlus,
  FileSpreadsheet,
  Tag,
  MoveRight,
  Dices,
  Shuffle,
} from "lucide-react";
import { QuestionBankCatalog } from "@/types/questionBank";
import { useAuth, UserProfile } from "@/context/AuthContext";
import { TEACHER_RESOURCES } from "@/data/teacherResources";
import { GRADE_6_DETAILED_LESSONS } from "@/data/grade6LessonsData";
import {
  parseAssignedClasses,
  isStudentInAssignedClasses,
  isStudentInSpecificClass,
} from "@/lib/teacherClassUtils";
import { getLocalStudentProgress } from "@/lib/studentProgressClient";
import { CustomExam, StudentExamSubmission, ExamFolder } from "@/types/customExam";
import {
  parseExamText,
  SAMPLE_TEACHER_EXAM_TEXT_GRADE_10,
  SAMPLE_TEACHER_EXAM_TEXT_GRADE_6,
} from "@/lib/examParser";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { ExamMatrix, MatrixTopicItem, PrebuiltMatrix } from "@/types/examMatrix";
import { PREBUILT_EXAM_MATRICES } from "@/data/prebuiltMatrices";
import { parseMatrixFromRawText } from "@/lib/matrixExamGenerator";
import { ExamPreviewModal } from "@/components/exam/ExamPreviewModal";
import { QuestionBankViewerModal } from "@/components/exam/QuestionBankViewerModal";
import { exportExamToWord } from "@/lib/exportExamWord";

export default function GiaoVienPage() {
  const router = useRouter();
  const { user, isTeacher, isAdmin, isStudent, loginTeacher, logout, refreshProfile } = useAuth();

  // Login Form State (cho giáo viên chưa đăng nhập)
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Teacher Dashboard State
  const [activeTeacherTab, setActiveTeacherTab] = useState<"students" | "mistakes" | "resources" | "exams">("students");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>("all");
  const [students, setStudents] = useState<any[]>([]);
  const [progressData, setProgressData] = useState<any>({ students: [], topMistakes: [] });
  const [isLoading, setIsLoading] = useState(false);

  // Online Exam Management States
  const [teacherExams, setTeacherExams] = useState<CustomExam[]>([]);
  const [isLoadingExams, setIsLoadingExams] = useState(false);
  const [selectedExamForSubmissions, setSelectedExamForSubmissions] = useState<CustomExam | null>(null);
  const [examSubmissionsList, setExamSubmissionsList] = useState<StudentExamSubmission[]>([]);
  const [isLoadingSubmissions, setIsLoadingSubmissions] = useState(false);
  const [copiedExamId, setCopiedExamId] = useState<string | null>(null);
  const [examClassFilter, setExamClassFilter] = useState<string>("all");
  const [selectedSubmissionDetail, setSelectedSubmissionDetail] = useState<StudentExamSubmission | null>(null);
  const [previewingExam, setPreviewingExam] = useState<CustomExam | null>(null);

  // Exam Folder Management States
  const [examFolders, setExamFolders] = useState<ExamFolder[]>([
    { id: "folder-all", name: "Tất cả đề thi", icon: "folder", color: "blue" },
    { id: "folder-cv7991", name: "Đề chuẩn CV 7991 (2025)", icon: "sparkles", color: "amber" },
    { id: "folder-gk1", name: "Đề Giữa Học Kỳ 1", icon: "calendar", color: "sky" },
    { id: "folder-ck1", name: "Đề Cuối Học Kỳ 1", icon: "book-open", color: "indigo" },
    { id: "folder-gk2", name: "Đề Giữa Học Kỳ 2", icon: "calendar", color: "teal" },
    { id: "folder-ck2", name: "Đề Cuối Học Kỳ 2", icon: "book-open", color: "emerald" },
    { id: "folder-chuyende", name: "Đề Khảo Sát & Chuyên Đề", icon: "layers", color: "purple" },
  ]);
  const [selectedFolderId, setSelectedFolderId] = useState<string>("folder-all");
  const [isNewFolderModalOpen, setIsNewFolderModalOpen] = useState(false);
  const [newFolderNameInput, setNewFolderNameInput] = useState("");
  const [movingExam, setMovingExam] = useState<CustomExam | null>(null);
  const [targetMoveFolderId, setTargetMoveFolderId] = useState<string>("folder-all");
  const [newExamFolderId, setNewExamFolderId] = useState<string>("folder-all");

  // Create Exam Modal States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newExamTitle, setNewExamTitle] = useState("");
  const [newExamTargetClass, setNewExamTargetClass] = useState("");
  const [newExamGradeNumber, setNewExamGradeNumber] = useState<number>(10);
  const [newExamDuration, setNewExamDuration] = useState<number>(45);
  const [newExamInputMode, setNewExamInputMode] = useState<"paste" | "upload">("paste");
  const [newExamRawText, setNewExamRawText] = useState("");
  const [parsedPreviewQuestions, setParsedPreviewQuestions] = useState<any[]>([]);
  const [parseErrors, setParseErrors] = useState<string[]>([]);
  const [isParsingFile, setIsParsingFile] = useState(false);
  const [isSavingExam, setIsSavingExam] = useState(false);
  const [examCreationSuccess, setExamCreationSuccess] = useState<string | null>(null);

  // Bank Exam Drawer States
  const [isBankViewerModalOpen, setIsBankViewerModalOpen] = useState(false);
  const [isBankDrawModalOpen, setIsBankDrawModalOpen] = useState(false);
  const [bankCatalog, setBankCatalog] = useState<QuestionBankCatalog | null>(null);
  const [isLoadingBankCatalog, setIsLoadingBankCatalog] = useState(false);
  const [bankGradeNumber, setBankGradeNumber] = useState<number>(10);
  const [bankExamTitle, setBankExamTitle] = useState("Đề kiểm tra trích xuất từ Ngân hàng đề Toán 10");
  const [bankTargetClass, setBankTargetClass] = useState("");
  const [bankDuration, setBankDuration] = useState<number>(45);
  const [bankScope, setBankScope] = useState<"all" | "custom">("all");
  const [bankSelectedChapters, setBankSelectedChapters] = useState<string[]>([]);
  const [bankCountMC, setBankCountMC] = useState<number>(12);
  const [bankCountTF, setBankCountTF] = useState<number>(2);
  const [bankCountSA, setBankCountSA] = useState<number>(4);
  const [bankLevelNB, setBankLevelNB] = useState<number>(6);
  const [bankLevelTH, setBankLevelTH] = useState<number>(6);
  const [bankLevelVD, setBankLevelVD] = useState<number>(4);
  const [bankLevelVDC, setBankLevelVDC] = useState<number>(2);
  const [isDrawingFromBank, setIsDrawingFromBank] = useState(false);
  const [bankDrawError, setBankDrawError] = useState<string | null>(null);

  const fetchBankCatalog = async (grade = 10) => {
    setIsLoadingBankCatalog(true);
    setBankDrawError(null);
    try {
      const res = await fetch(`/api/teacher/exams/bank-stats?gradeNumber=${grade}`);
      const data = await res.json();
      if (data.success && data.catalog) {
        setBankCatalog(data.catalog);
        if (bankSelectedChapters.length === 0) {
          setBankSelectedChapters(data.catalog.chapters.map((c: any) => c.chapterId));
        }
      }
    } catch (err: any) {
      console.error("Lỗi tải catalog ngân hàng đề:", err);
    } finally {
      setIsLoadingBankCatalog(false);
    }
  };

  const applyBankPreset = (preset: '15m' | '45m' | '90m') => {
    if (preset === '15m') {
      setBankExamTitle("Kiểm tra 15 phút - Toán 10");
      setBankDuration(15);
      setBankCountMC(10);
      setBankCountTF(0);
      setBankCountSA(0);
      setBankLevelNB(5);
      setBankLevelTH(3);
      setBankLevelVD(2);
      setBankLevelVDC(0);
    } else if (preset === '45m') {
      setBankExamTitle("Kiểm tra định kỳ 45 phút - Toán 10");
      setBankDuration(45);
      setBankCountMC(12);
      setBankCountTF(2);
      setBankCountSA(4);
      setBankLevelNB(6);
      setBankLevelTH(6);
      setBankLevelVD(4);
      setBankLevelVDC(2);
    } else if (preset === '90m') {
      setBankExamTitle("Đề kiểm tra học kỳ chuẩn CV 7991 (90 phút) - Toán 10");
      setBankDuration(90);
      setBankCountMC(12);
      setBankCountTF(4);
      setBankCountSA(6);
      setBankLevelNB(7);
      setBankLevelTH(7);
      setBankLevelVD(5);
      setBankLevelVDC(3);
    }
  };

  const handleDrawExamFromBank = async () => {
    if (!bankExamTitle.trim()) {
      alert("Vui lòng nhập tên đề thi");
      return;
    }
    const targetCls = bankTargetClass || (assignedClasses.length > 0 ? assignedClasses[0] : "10A1");
    setIsDrawingFromBank(true);
    setBankDrawError(null);
    try {
      const res = await fetch("/api/teacher/exams/bank-draw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gradeNumber: bankGradeNumber,
          title: bankExamTitle,
          targetClass: targetCls,
          duration: bankDuration,
          chapterIds: bankScope === "all" ? [] : bankSelectedChapters,
          counts: {
            mc: bankCountMC,
            tf: bankCountTF,
            sa: bankCountSA,
          },
          levels: {
            NB: bankLevelNB,
            TH: bankLevelTH,
            VD: bankLevelVD,
            VDC: bankLevelVDC,
          },
        }),
      });

      const data = await res.json();
      if (!data.success) {
        setBankDrawError(data.error || "Không thể rút đề từ ngân hàng");
        return;
      }

      const newExam = {
        ...data.exam,
        id: data.exam?.id || `exam-bank-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        grade: data.exam?.grade || `lop-${bankGradeNumber}`,
        gradeNumber: data.exam?.gradeNumber || bankGradeNumber,
        targetClass: data.exam?.targetClass || targetCls,
        createdAt: data.exam?.createdAt || new Date().toISOString(),
      };

      setTeacherExams(prev => [newExam, ...prev]);

      try {
        const stored = localStorage.getItem("vina_teacher_custom_exams");
        const list = stored ? JSON.parse(stored) : [];
        localStorage.setItem("vina_teacher_custom_exams", JSON.stringify([newExam, ...list]));
      } catch (e) {
        console.warn("Could not save to localStorage:", e);
      }

      setIsBankDrawModalOpen(false);
      setPreviewingExam(newExam);
      setExamCreationSuccess(`Đã rút thành công đề thi "${newExam.title}" với ${newExam.totalQuestions} câu hỏi từ Ngân hàng đề!`);
      setTimeout(() => setExamCreationSuccess(null), 6000);
    } catch (err: any) {
      setBankDrawError(err.message || "Lỗi kết nối máy chủ");
    } finally {
      setIsDrawingFromBank(false);
    }
  };

  // Matrix Generator States
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState(false);
  const [matrixGradeNumber, setMatrixGradeNumber] = useState<number>(10);
  const [matrixTargetClass, setMatrixTargetClass] = useState("");
  const [matrixTitle, setMatrixTitle] = useState("");
  const [matrixDuration, setMatrixDuration] = useState<number>(45);
  const [matrixSourceOption, setMatrixSourceOption] = useState<"project" | "internet" | "hybrid">("hybrid");
  const [matrixTopics, setMatrixTopics] = useState<MatrixTopicItem[]>([]);
  const [isGeneratingFromMatrix, setIsGeneratingFromMatrix] = useState(false);
  const [matrixRawText, setMatrixRawText] = useState("");
  const [matrixUploadMode, setMatrixUploadMode] = useState<"prebuilt" | "manual" | "upload">("prebuilt");
  const [selectedPrebuiltId, setSelectedPrebuiltId] = useState<string>("matrix-t10-gk1");

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

      // 3. Lấy danh sách đề thi trực tuyến của giáo viên
      await fetchTeacherExams();
      await fetchExamFolders();
    } catch (err) {
      console.error("Lỗi lấy dữ liệu giáo viên:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchExamFolders = async () => {
    try {
      const res = await fetch("/api/teacher/exams/folders");
      const data = await res.json();
      if (data.success && Array.isArray(data.folders) && data.folders.length > 0) {
        setExamFolders(data.folders);
      }
    } catch (e) {
      console.warn("Lỗi tải danh mục thư mục đề:", e);
    }
  };

  const fetchTeacherExams = async () => {
    setIsLoadingExams(true);
    try {
      const res = await fetch("/api/teacher/exams");
      const data = await res.json();
      if (data.success && data.exams) {
        setTeacherExams(data.exams);
      }
    } catch (e) {
      console.warn("Lỗi tải danh sách đề thi:", e);
    } finally {
      setIsLoadingExams(false);
    }
  };

  const handleCreateNewFolder = async () => {
    if (!newFolderNameInput.trim()) {
      alert("Vui lòng nhập tên thư mục đề thi");
      return;
    }
    try {
      const res = await fetch("/api/teacher/exams/folders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newFolderNameInput.trim(), color: "indigo" }),
      });
      const data = await res.json();
      if (data.success && data.folder) {
        setExamFolders((prev) => [...prev, data.folder]);
        setSelectedFolderId(data.folder.id);
        setIsNewFolderModalOpen(false);
        setNewFolderNameInput("");
      } else {
        alert(data.error || "Không thể tạo thư mục");
      }
    } catch (e: any) {
      alert("Lỗi khi tạo thư mục: " + e?.message);
    }
  };

  const handleDeleteFolder = async (folderId: string) => {
    if (folderId === "folder-all") {
      alert("Không thể xóa thư mục mặc định");
      return;
    }
    if (!confirm("Thầy/Cô có chắc chắn muốn xóa thư mục này? Các đề thi trong thư mục sẽ tự động được chuyển về thư mục chung.")) {
      return;
    }
    try {
      const res = await fetch(`/api/teacher/exams/folders?id=${folderId}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setExamFolders((prev) => prev.filter((f) => f.id !== folderId));
        if (selectedFolderId === folderId) {
          setSelectedFolderId("folder-all");
        }
        await fetchTeacherExams();
      } else {
        alert(data.error || "Không thể xóa thư mục");
      }
    } catch (e: any) {
      alert("Lỗi xóa thư mục: " + e?.message);
    }
  };

  const handleExecuteMoveExam = async () => {
    if (!movingExam) return;
    try {
      const targetFolder = examFolders.find((f) => f.id === targetMoveFolderId);
      const res = await fetch("/api/teacher/exams", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId: movingExam.id,
          folderId: targetMoveFolderId,
          folderName: targetFolder?.name || "Tất cả đề thi",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setTeacherExams((prev) =>
          prev.map((e) =>
            e.id === movingExam.id
              ? { ...e, folderId: targetMoveFolderId, folderName: targetFolder?.name || "Tất cả đề thi" }
              : e
          )
        );
        setMovingExam(null);
      } else {
        alert(data.error || "Không thể chuyển thư mục");
      }
    } catch (e: any) {
      alert("Lỗi chuyển thư mục: " + e?.message);
    }
  };

  const copyExamLink = (examId: string) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://vina-math-lab.vercel.app";
    const url = `${origin}/kiem-tra/${examId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
    }
    setCopiedExamId(examId);
    setTimeout(() => setCopiedExamId(null), 3000);
  };

  const openExamSubmissions = async (exam: CustomExam) => {
    setSelectedExamForSubmissions(exam);
    setIsLoadingSubmissions(true);
    try {
      const res = await fetch(`/api/teacher/exams/${exam.id}/submit`);
      const data = await res.json();
      if (data.success && data.submissions) {
        setExamSubmissionsList(data.submissions);
      } else {
        setExamSubmissionsList([]);
      }
    } catch (e) {
      console.warn("Lỗi tải bài nộp:", e);
      setExamSubmissionsList([]);
    } finally {
      setIsLoadingSubmissions(false);
    }
  };

  const handleDeleteExam = async (examId: string) => {
    if (!confirm("Thầy/Cô có chắc chắn muốn xóa đề kiểm tra này khỏi hệ thống?")) return;
    try {
      await fetch(`/api/teacher/exams?id=${examId}`, { method: "DELETE" });
      setTeacherExams((prev) => prev.filter((e) => e.id !== examId));
    } catch (e) {
      console.error("Lỗi xóa đề:", e);
    }
  };

  const handleParseText = () => {
    if (!newExamRawText.trim()) {
      alert("Vui lòng nhập hoặc dán nội dung đề thi");
      return;
    }
    const res = parseExamText(newExamRawText, newExamGradeNumber);
    setParsedPreviewQuestions(res.questions);
    setParseErrors(res.errors);
    if (!newExamTitle && res.title) {
      setNewExamTitle(res.title);
    }
    if (res.durationMinutes) {
      setNewExamDuration(res.durationMinutes);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsParsingFile(true);
    setParseErrors([]);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("gradeNumber", String(newExamGradeNumber));

      const res = await fetch("/api/teacher/exams/parse-file", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setNewExamRawText(data.rawText || "");
        if (data.parsed) {
          setParsedPreviewQuestions(data.parsed.questions || []);
          setParseErrors(data.parsed.errors || []);
          if (!newExamTitle && data.parsed.title) {
            setNewExamTitle(data.parsed.title);
          }
          if (data.parsed.durationMinutes) {
            setNewExamDuration(data.parsed.durationMinutes);
          }
        }
      } else {
        setParseErrors([data.error || "Không thể đọc file"]);
      }
    } catch (err: any) {
      setParseErrors([err?.message || "Lỗi xử lý file"]);
    } finally {
      setIsParsingFile(false);
    }
  };

  const loadSampleExam = (gradeNum: number) => {
    setNewExamGradeNumber(gradeNum);
    if (gradeNum === 10) {
      setNewExamRawText(SAMPLE_TEACHER_EXAM_TEXT_GRADE_10);
      const res = parseExamText(SAMPLE_TEACHER_EXAM_TEXT_GRADE_10, 10);
      setParsedPreviewQuestions(res.questions);
      setParseErrors(res.errors);
      setNewExamTitle(res.title);
      setNewExamDuration(res.durationMinutes);
      setNewExamTargetClass(assignedClasses[0] || "10A1");
    } else {
      setNewExamRawText(SAMPLE_TEACHER_EXAM_TEXT_GRADE_6);
      const res = parseExamText(SAMPLE_TEACHER_EXAM_TEXT_GRADE_6, 6);
      setParsedPreviewQuestions(res.questions);
      setParseErrors(res.errors);
      setNewExamTitle(res.title);
      setNewExamDuration(res.durationMinutes);
      setNewExamTargetClass(assignedClasses[0] || "6A");
    }
  };

  const handleSaveExam = async () => {
    if (!newExamTitle.trim()) {
      alert("Vui lòng nhập tên đề kiểm tra");
      return;
    }
    if (parsedPreviewQuestions.length === 0) {
      alert("Chưa có câu hỏi nào được phân tích thành công. Vui lòng bấm 'Đọc & Chuyển Hóa Đề Thi' trước khi xuất bản.");
      return;
    }
    setIsSavingExam(true);
    try {
      const payload = {
        title: newExamTitle.trim(),
        targetClass: newExamTargetClass.trim() || (assignedClasses[0] || "Tất cả các lớp"),
        gradeNumber: newExamGradeNumber,
        grade: `lop-${newExamGradeNumber}`,
        folderId: newExamFolderId || "folder-all",
        folderName: examFolders.find((f) => f.id === newExamFolderId)?.name || "Tất cả đề thi",
        durationMinutes: newExamDuration,
        questions: parsedPreviewQuestions,
        authorTeacherId: user?.id || "",
        authorName: user?.fullName || user?.username || "Giáo viên",
        allowReviewAnswers: true,
        antiCheatEnabled: true,
      };

      const res = await fetch("/api/teacher/exams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success && data.exam) {
        setTeacherExams((prev) => [data.exam, ...prev]);
        setPreviewingExam(data.exam);
        setExamCreationSuccess(`Đã xuất bản đề thi thành công! Đường dẫn làm bài: /kiem-tra/${data.exam.id}`);
        setTimeout(() => {
          setIsCreateModalOpen(false);
          setExamCreationSuccess(null);
          setNewExamTitle("");
          setNewExamRawText("");
          setParsedPreviewQuestions([]);
        }, 1200);
      } else {
        alert(data.error || "Không thể tạo đề thi");
      }
    } catch (e: any) {
      alert("Lỗi khi lưu đề thi: " + e?.message);
    } finally {
      setIsSavingExam(false);
    }
  };

  const exportSubmissionsCSV = (exam: CustomExam, submissions: StudentExamSubmission[]) => {
    let csv = "STT,Họ và Tên,Lớp,Điểm Tổng (Thang 10),Phần I,Phần II,Phần III,Thời Gian Làm (phút),Số Lần Thoát Màn Hình,Thời Điểm Nộp\n";
    submissions.forEach((sub, idx) => {
      const timeMins = (sub.timeSpentSeconds / 60).toFixed(1);
      const dateStr = new Date(sub.submittedAt).toLocaleString("vi-VN");
      csv += `${idx + 1},"${sub.studentName}","${sub.studentClass}",${sub.score},${sub.scorePart1},${sub.scorePart2},${sub.scorePart3},${timeMins},${sub.blurCount},"${dateStr}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `BangDiem_${exam.title.replace(/\s+/g, "_")}_${exam.targetClass}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadPrebuiltMatrix = (matrixId: string) => {
    setSelectedPrebuiltId(matrixId);
    const found = PREBUILT_EXAM_MATRICES.find((m) => m.id === matrixId);
    if (found) {
      setMatrixGradeNumber(found.gradeNumber);
      setMatrixTitle(found.title);
      setMatrixDuration(found.durationMinutes);
      setMatrixTopics(JSON.parse(JSON.stringify(found.topics)));
      if (!matrixTargetClass && assignedClasses.length > 0) {
        setMatrixTargetClass(assignedClasses[0]);
      }
    }
  };

  const handleAddMatrixTopic = () => {
    const newId = `topic-${Date.now()}`;
    setMatrixTopics((prev) => [
      ...prev,
      {
        id: newId,
        topicName: `Chủ đề mới ${prev.length + 1}`,
        part1: { nb: 2, th: 1, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
    ]);
  };

  const handleRemoveMatrixTopic = (id: string) => {
    setMatrixTopics((prev) => prev.filter((t) => t.id !== id));
  };

  const handleUpdateMatrixCell = (
    topicId: string,
    part: "part1" | "part2" | "part3",
    level: "nb" | "th" | "vd" | "vdc",
    val: number
  ) => {
    setMatrixTopics((prev) =>
      prev.map((t) => {
        if (t.id !== topicId) return t;
        return {
          ...t,
          [part]: {
            ...t[part],
            [level]: Math.max(0, val),
          },
        };
      })
    );
  };

  const handleGenerateFromMatrix = async () => {
    if (!matrixTitle.trim()) {
      alert("Vui lòng nhập tên đề thi theo ma trận");
      return;
    }
    if (matrixTopics.length === 0) {
      alert("Ma trận chưa có chủ đề nào. Vui lòng thêm ít nhất 1 chủ đề.");
      return;
    }
    setIsGeneratingFromMatrix(true);
    try {
      const payloadMatrix: ExamMatrix = {
        title: matrixTitle.trim(),
        grade: `lop-${matrixGradeNumber}`,
        gradeNumber: matrixGradeNumber,
        targetClass: matrixTargetClass.trim() || (assignedClasses[0] || "Tất cả các lớp"),
        durationMinutes: matrixDuration,
        topics: matrixTopics,
        sourceOption: matrixSourceOption,
      };

      const res = await fetch("/api/teacher/exams/matrix-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matrix: payloadMatrix }),
      });
      const data = await res.json();
      if (data.success && data.exam) {
        setNewExamTitle(data.exam.title || matrixTitle);
        setNewExamTargetClass(data.exam.targetClass || matrixTargetClass || (assignedClasses[0] || "Tất cả các lớp"));
        setNewExamGradeNumber(data.exam.gradeNumber || matrixGradeNumber);
        setNewExamDuration(data.exam.durationMinutes || matrixDuration);
        setParsedPreviewQuestions(data.exam.questions || []);
        setParseErrors(data.warnings || []);

        setIsMatrixModalOpen(false);
        setIsCreateModalOpen(true);
      } else {
        alert(data.error || "Không thể tạo đề thi từ ma trận");
      }
    } catch (e: any) {
      alert("Lỗi khi tạo đề từ ma trận: " + (e?.message || ""));
    } finally {
      setIsGeneratingFromMatrix(false);
    }
  };

  const handleMatrixFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsGeneratingFromMatrix(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("gradeNumber", String(matrixGradeNumber));

      const res = await fetch("/api/teacher/exams/parse-file", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.rawText) {
        setMatrixRawText(data.rawText);
        const parsedMat = parseMatrixFromRawText(data.rawText, matrixGradeNumber);
        if (parsedMat.topics && parsedMat.topics.length > 0) {
          setMatrixTitle(parsedMat.title || matrixTitle);
          setMatrixDuration(parsedMat.durationMinutes || matrixDuration);
          setMatrixTopics(parsedMat.topics);
          setMatrixUploadMode("manual");
        } else {
          alert("Đã nhận diện nội dung văn bản file nhưng chưa bóc tách được bảng ma trận phân phối câu hỏi. Vui lòng kiểm tra lại cấu trúc bảng hoặc dùng file biểu mẫu tải về từ hệ thống.");
        }
      } else {
        alert(data.error || "Không thể phân tích file ma trận");
      }
    } catch (err: any) {
      alert("Lỗi xử lý file ma trận: " + err?.message);
    } finally {
      setIsGeneratingFromMatrix(false);
      e.target.value = "";
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

        <button
          onClick={() => setActiveTeacherTab("exams")}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTeacherTab === "exams"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/25"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Đề Kiểm Tra Theo Lớp & Thi Online ({teacherExams.length})</span>
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
      {/* TAB 4: QUẢN LÝ ĐỀ KIỂM TRA THEO LỚP & THI TRỰC TUYẾN                      */}
      {/* ========================================================================= */}
      {activeTeacherTab === "exams" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Header Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900/50 via-indigo-900/40 to-slate-900 border border-blue-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Số Hóa Đề Thi & Chấm Tự Động</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Hệ Thống Đề Kiểm Tra Theo Lớp & Thi Online 2026
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tải lên đề thi (Word / Text), web tự động chuyển hóa thành dạng bài tập tương tác chuẩn Bộ GD&ĐT (Trắc nghiệm 4 lựa chọn, Đúng/Sai, Trả lời ngắn). Giáo viên xuất link cho học sinh kiểm tra online <strong>không cần cài phần mềm</strong>, chấm tự động và <strong>ghi nhận số lần học sinh thoát/đóng màn hình</strong>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsBankViewerModalOpen(true)}
                className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black text-xs transition-all shadow-lg shadow-purple-500/25 cursor-pointer flex items-center gap-2 shrink-0 hover:scale-[1.02] active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>📚 Xem Thử Ngân Hàng Đề (1.197 Câu)</span>
              </button>

              <button
                onClick={() => {
                  setIsBankDrawModalOpen(true);
                  if (assignedClasses.length > 0 && !bankTargetClass) {
                    setBankTargetClass(assignedClasses[0]);
                  }
                  fetchBankCatalog(10);
                }}
                className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center gap-2 shrink-0"
              >
                <Dices className="w-4 h-4" />
                <span>🎲 Rút Đề Từ Ngân Hàng (Khối 10)</span>
              </button>

              <button
                onClick={() => {
                  setIsMatrixModalOpen(true);
                  loadPrebuiltMatrix("matrix-t10-gk1");
                }}
                className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-orange-500/25 cursor-pointer flex items-center gap-2 shrink-0"
              >
                <Grid className="w-4 h-4" />
                <span>Tạo Đề Từ Ma Trận Đề Thi</span>
              </button>

              <button
                onClick={() => {
                  setIsCreateModalOpen(true);
                  if (assignedClasses.length > 0 && !newExamTargetClass) {
                    setNewExamTargetClass(assignedClasses[0]);
                  }
                }}
                className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-black text-xs transition-all shadow-lg shadow-blue-500/30 cursor-pointer flex items-center gap-2 shrink-0"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Tạo Đề Thủ Công / Tải File</span>
              </button>
            </div>
          </div>

          {/* Bộ Lọc Theo Lớp & Thống Kê Nhanh */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold">Tổng Đề Thi Đã Tạo</span>
              <div className="text-2xl font-black text-cyan-400">{teacherExams.length} đề</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold">Chế Độ Giám Sát Làm Bài</span>
              <div className="text-2xl font-black text-emerald-400 flex items-center gap-2">
                <span>Chống gian lận</span>
                <span className="text-xs font-normal text-slate-400">(Focus Tracker)</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0e1526] border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold">Hình Thức Kiểm Tra</span>
              <div className="text-2xl font-black text-amber-400">Web Online 100%</div>
            </div>
          </div>

          {/* Toast thông báo sao chép */}
          {copiedExamId && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Đã sao chép liên kết bài thi!</strong> Thầy/Cô có thể gửi trực tiếp link này qua Zalo, Facebook, Google Classroom. Học sinh bấm vào là làm bài ngay trên điện thoại hoặc máy tính, không cần cài bất kỳ ứng dụng nào!
              </span>
            </div>
          )}

          {/* Hệ Thống Thư Mục Quản Lý Đề Thi (Exam Folders) */}
          <div className="p-4 rounded-3xl bg-[#0e1526] border border-slate-800 space-y-3 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-black uppercase text-white tracking-wider">
                  Thư Mục Quản Lý Đề Kiểm Tra ({examFolders.length})
                </span>
              </div>
              <button
                onClick={() => setIsNewFolderModalOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <FolderPlus className="w-3.5 h-3.5" />
                <span>Thêm Thư Mục Mới</span>
              </button>
            </div>

            {/* Folder Badges / Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-800">
              {examFolders.map((f) => {
                const isSelected = selectedFolderId === f.id;
                const count =
                  f.id === "folder-all"
                    ? teacherExams.length
                    : teacherExams.filter((e) => e.folderId === f.id).length;

                return (
                  <div key={f.id} className="relative group shrink-0 flex items-center">
                    <button
                      onClick={() => setSelectedFolderId(f.id)}
                      className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20"
                          : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      <Folder className={`w-3.5 h-3.5 ${isSelected ? "text-slate-950" : "text-amber-400"}`} />
                      <span>{f.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                          isSelected ? "bg-slate-950 text-amber-300" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                    {f.id !== "folder-all" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteFolder(f.id);
                        }}
                        title="Xóa thư mục"
                        className="ml-1 p-1 text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Danh Sách Các Đề Thi Của Giáo Viên */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>
                  Danh Sách Đề: {examFolders.find((f) => f.id === selectedFolderId)?.name || "Tất cả"} (
                  {
                    (selectedFolderId === "folder-all"
                      ? teacherExams
                      : teacherExams.filter((e) => e.folderId === selectedFolderId)
                    ).length
                  }
                  )
                </span>
              </h3>
              <button
                onClick={fetchTeacherExams}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {isLoadingExams ? "Đang tải..." : "Làm mới danh sách"}
              </button>
            </div>

            {teacherExams.length === 0 ? (
              <div className="p-10 rounded-3xl bg-[#0e1526] border border-slate-800 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-black text-white">Chưa có đề kiểm tra trực tuyến nào</h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Thầy/Cô hãy tạo đề thi đầu tiên bằng cách tải lên file Word (.docx), dán văn bản đề thi, hoặc sử dụng các đề thi mẫu chuẩn Bộ GD&ĐT có sẵn.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsCreateModalOpen(true);
                      loadSampleExam(10);
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-blue-600/20"
                  >
                    ⚡ Thử Ngay Đề Mẫu Toán 10 (Vectơ)
                  </button>
                  <button
                    onClick={() => {
                      setIsCreateModalOpen(true);
                      loadSampleExam(6);
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-teal-600/20"
                  >
                    ⚡ Thử Ngay Đề Mẫu Toán 6 (Số Học)
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(selectedFolderId === "folder-all"
                  ? teacherExams
                  : teacherExams.filter((e) => e.folderId === selectedFolderId)
                ).map((exam) => (
                  <div
                    key={exam.id}
                    className="p-5 rounded-3xl bg-[#0e1526] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 flex flex-col justify-between shadow-lg"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-bold text-[11px]">
                            Lớp: {exam.targetClass || "Tất cả các lớp"}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-bold flex items-center gap-1">
                            <Folder className="w-2.5 h-2.5" />
                            <span>{exam.folderName || "Tất cả đề thi"}</span>
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          {exam.createdAt ? new Date(exam.createdAt).toLocaleDateString("vi-VN") : ""}
                        </span>
                      </div>

                      <h4 className="text-base font-black text-white line-clamp-2">{exam.title}</h4>
                      {exam.subtitle && (
                        <p className="text-xs text-slate-400 line-clamp-1">{exam.subtitle}</p>
                      )}

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>{exam.durationMinutes} phút</span>
                        </span>
                        <span>•</span>
                        <span className="text-cyan-300 font-bold">{exam.totalQuestions} câu hỏi</span>
                        <span>•</span>
                        <span className="text-emerald-400 font-medium">Giám sát thoát màn hình ✓</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                      {/* Nút sao chép link */}
                      <button
                        onClick={() => copyExamLink(exam.id)}
                        className="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-black text-xs transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                        title="Sao chép link làm bài gửi cho học sinh"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Sao Chép Link Thi</span>
                      </button>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        {/* Nút Xem Đề */}
                        <button
                          onClick={() => setPreviewingExam(exam)}
                          className="px-3 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                          title="Xem chi tiết toàn bộ nội dung đề thi"
                        >
                          <Eye className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Xem Đề</span>
                        </button>

                        {/* Nút Tải Word */}
                        <button
                          onClick={() => exportExamToWord(exam, { includeAnswers: true })}
                          className="px-3 py-2 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-300 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                          title="Tải về file Word (.doc) chuẩn MathType / Equation kèm đáp án & lời giải"
                        >
                          <Download className="w-3.5 h-3.5 text-blue-400" />
                          <span>Tải Word</span>
                        </button>

                        {/* Nút xem bảng điểm & giám sát */}
                        <button
                          onClick={() => openExamSubmissions(exam)}
                          className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5"
                          title="Xem danh sách điểm số và số lần học sinh thoát màn hình"
                        >
                          <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Bảng Điểm</span>
                        </button>

                        {/* Nút chuyển thư mục */}
                        <button
                          onClick={() => {
                            setMovingExam(exam);
                            setTargetMoveFolderId(exam.folderId || "folder-all");
                          }}
                          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-400 hover:text-amber-300 transition-all cursor-pointer"
                          title="Chuyển vào thư mục khác"
                        >
                          <Folder className="w-4 h-4" />
                        </button>

                        {/* Nút làm thử */}
                        <Link
                          href={`/kiem-tra/${exam.id}`}
                          target="_blank"
                          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-all"
                          title="Mở thi thử trên tab mới"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>

                        {/* Nút xóa */}
                        <button
                          onClick={() => handleDeleteExam(exam.id)}
                          className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/40 border border-rose-500/30 text-rose-400 transition-all cursor-pointer"
                          title="Xóa đề kiểm tra"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 1: TẠO ĐỀ KIỂM TRA MỚI THEO LỚP & TỰ ĐỘNG CHUYỂN HÓA                 */}
      {/* ========================================================================= */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-3xl rounded-3xl bg-[#0e1526] border-2 border-blue-500/40 p-6 sm:p-7 space-y-5 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-white">
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Tạo Đề Kiểm Tra Mới Theo Lớp
                  </h3>
                  <p className="text-xs text-slate-400">
                    Hệ thống tự động đọc đề Word (.docx) hoặc Text và chuyển hóa thành bài thi tương tác
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Thông báo tạo thành công nếu có */}
            {examCreationSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{examCreationSuccess}</span>
              </div>
            )}

            {/* Nút Nạp Đề Mẫu Nhanh */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Nạp đề mẫu chuẩn BGD (Thử nghiệm nhanh):</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => loadSampleExam(10)}
                  className="px-3 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 text-blue-300 text-xs font-bold transition-all cursor-pointer"
                >
                  Toán 10 (Vectơ)
                </button>
                <button
                  type="button"
                  onClick={() => loadSampleExam(6)}
                  className="px-3 py-1.5 rounded-xl bg-teal-600/30 hover:bg-teal-600/50 border border-teal-500/40 text-teal-300 text-xs font-bold transition-all cursor-pointer"
                >
                  Toán 6 (Số Học)
                </button>
              </div>
            </div>

            {/* Form Thiết Lập Cơ Bản */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 space-y-1">
                <label className="block text-xs font-bold text-slate-300">
                  Tên Đề Kiểm Tra <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={newExamTitle}
                  onChange={(e) => setNewExamTitle(e.target.value)}
                  placeholder="Ví dụ: Kiểm tra 45 phút Vectơ & Tọa độ - Toán 10"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-300">
                  Áp Dụng Cho Lớp <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={newExamTargetClass}
                  onChange={(e) => setNewExamTargetClass(e.target.value)}
                  placeholder="Ví dụ: 10A1, 6A, Tất cả..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-300">Khối Lớp</label>
                <select
                  value={newExamGradeNumber}
                  onChange={(e) => setNewExamGradeNumber(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                >
                  <option value={6}>Khối 6 (THCS)</option>
                  <option value={7}>Khối 7 (THCS)</option>
                  <option value={8}>Khối 8 (THCS)</option>
                  <option value={9}>Khối 9 (THCS)</option>
                  <option value={10}>Khối 10 (THPT)</option>
                  <option value={11}>Khối 11 (THPT)</option>
                  <option value={12}>Khối 12 (THPT)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-300">Thời Gian Làm Bài</label>
                <select
                  value={newExamDuration}
                  onChange={(e) => setNewExamDuration(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                >
                  <option value={15}>15 phút (Kiểm tra nhanh)</option>
                  <option value={45}>45 phút (1 tiết)</option>
                  <option value={60}>60 phút (Kiểm tra định kỳ)</option>
                  <option value={90}>90 phút (Giữa kỳ / Cuối kỳ)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-300">Thư Mục Đề Thi</label>
                <select
                  value={newExamFolderId}
                  onChange={(e) => setNewExamFolderId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-400"
                >
                  {examFolders.map((f) => (
                    <option key={f.id} value={f.id}>
                      📁 {f.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-3 p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Chế độ giám sát thông minh (Focus Tracker)</strong>: Tự động ghi nhận số lần học sinh chuyển tab hoặc thoát toàn màn hình khi làm bài.</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-black text-[10px] uppercase tracking-wider shrink-0 border border-emerald-500/30">
                  Đang Bật
                </span>
              </div>
            </div>

            {/* Chế Độ Nhập Đề: Tab Dán Văn Bản vs Tab Tải File Word */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <button
                  type="button"
                  onClick={() => setNewExamInputMode("paste")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    newExamInputMode === "paste"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-900 text-slate-400 hover:text-white"
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Dán Văn Bản Đề Thi</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNewExamInputMode("upload")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    newExamInputMode === "upload"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-900 text-slate-400 hover:text-white"
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Tải File Đề Thi (Word, PDF, Ảnh Chụp, Text)</span>
                </button>
              </div>

              {newExamInputMode === "paste" ? (
                <div className="space-y-2">
                  <textarea
                    rows={8}
                    value={newExamRawText}
                    onChange={(e) => setNewExamRawText(e.target.value)}
                    placeholder="Dán nội dung đề kiểm tra vào đây... Cú pháp hỗ trợ:
Câu 1: Cho tập hợp...
A. {1; 2}  B. {2; 3}  C. {3; 4}  D. {4; 5}
Đáp án: A
Lời giải: Giải thích chi tiết...

Câu 2: Xét tính đúng sai:
a) Khẳng định 1 (Đúng)
b) Khẳng định 2 (Sai)

Câu 3: Tìm x...
Đáp số: 10"
                    className="w-full p-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-blue-400 leading-relaxed"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Hỗ trợ công thức Toán học KaTeX: $x^2 + y^2 = 1$, $\overrightarrow&#123;AB&#125;$
                    </span>
                    <button
                      type="button"
                      onClick={handleParseText}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>🔍 Đọc & Chuyển Hóa Đề Thi</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-900/60 border-2 border-dashed border-slate-700 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-200">
                      Tải lên file Word (.docx), PDF (.pdf) hoặc File Ảnh Chụp (.png, .jpg, .jpeg)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Hệ thống tự động trích xuất văn bản hoặc dùng Trí tuệ nhân tạo (AI Vision OCR) để nhận diện công thức toán học và chuyển hóa thành câu hỏi tương tác.
                    </p>
                  </div>
                  <input
                    type="file"
                    accept=".docx,.doc,.xlsx,.xls,.csv,.txt,.md,.pdf,.png,.jpg,.jpeg,.webp,.bmp"
                    onChange={handleFileUpload}
                    className="text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
                  />
                  {isParsingFile && (
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs text-cyan-300 font-bold animate-pulse flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin text-cyan-400" />
                      <span>Đang phân tích & nhận diện đề thi (Word / PDF / AI Vision OCR)... Vui lòng đợi trong giây lát</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Hiển thị lỗi phân tích nếu có */}
            {parseErrors.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs space-y-1">
                <strong className="flex items-center gap-1 text-amber-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Cảnh báo phân tích cú pháp ({parseErrors.length}):</span>
                </strong>
                <ul className="list-disc pl-5 space-y-0.5 text-[11px]">
                  {parseErrors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Xem trước trực quan các câu hỏi đã chuyển hóa */}
            {parsedPreviewQuestions.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      Đã Chuyển Hóa Thành Công {parsedPreviewQuestions.length} Câu Hỏi Tương Tác:
                    </span>
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    Phần I: {parsedPreviewQuestions.filter((q) => q.type === "multiple_choice").length} câu • 
                    Phần II: {parsedPreviewQuestions.filter((q) => q.type === "true_false").length} câu • 
                    Phần III: {parsedPreviewQuestions.filter((q) => q.type === "short_answer").length} câu
                  </span>
                </div>

                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {parsedPreviewQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-[10px]">
                          Câu {idx + 1} ({q.type === "multiple_choice" ? "Trắc nghiệm 4 lựa chọn" : q.type === "true_false" ? "Đúng / Sai" : "Trả lời ngắn"})
                        </span>
                        {q.correctKey && (
                          <span className="text-emerald-400 font-bold text-[11px]">
                            Đáp án: {q.correctKey}
                          </span>
                        )}
                        {q.correctAnswer && (
                          <span className="text-emerald-400 font-bold text-[11px]">
                            Đáp số: {q.correctAnswer}
                          </span>
                        )}
                      </div>

                      <div className="font-medium text-slate-200">
                        <MathFormattedText text={q.stem} />
                      </div>

                      {q.options && (
                        <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                          {q.options.map((opt: any) => (
                            <div
                              key={opt.key}
                              className={`p-1.5 rounded-lg border ${
                                opt.key === q.correctKey
                                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-bold"
                                  : "bg-slate-950/60 border-slate-800 text-slate-400"
                              }`}
                            >
                              {opt.key}. <MathFormattedText text={opt.text} />
                            </div>
                          ))}
                        </div>
                      )}

                      {q.subQuestions && (
                        <div className="space-y-1 pt-1 text-[11px]">
                          {q.subQuestions.map((sub: any) => (
                            <div
                              key={sub.key}
                              className="flex items-center justify-between p-1.5 rounded bg-slate-950/60 border border-slate-800"
                            >
                              <span>
                                {sub.key}) <MathFormattedText text={sub.text} />
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  sub.isCorrect
                                    ? "bg-emerald-500/20 text-emerald-300"
                                    : "bg-rose-500/20 text-rose-300"
                                }`}
                              >
                                {sub.isCorrect ? "Đúng" : "Sai"}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {q.explanation && (
                        <div className="text-[11px] text-slate-400 bg-slate-950/40 p-2 rounded-lg border border-slate-800/80">
                          <strong className="text-amber-400">Lời giải: </strong>
                          <MathFormattedText text={q.explanation} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions Footer */}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Hủy Bỏ
              </button>
              <button
                type="button"
                disabled={isSavingExam || parsedPreviewQuestions.length === 0}
                onClick={handleSaveExam}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-slate-950 font-black text-xs transition-all shadow-md shadow-emerald-500/20 cursor-pointer disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isSavingExam ? "Đang xuất bản..." : "XUẤT BẢN ĐỀ THI & LẤY LINK LÀM BÀI"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL MATRIX: TẠO ĐỀ THI TỪ MA TRẬN & NGÂN HÀNG CÂU HỎI                    */}
      {/* ========================================================================= */}
      {isMatrixModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-4xl rounded-3xl bg-[#0d1424] border-2 border-orange-500/40 p-6 sm:p-7 space-y-5 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-white">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <Grid className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <span>Tạo Đề Thi Tự Động Từ Ma Trận Đề</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold">
                      Chuẩn BGD 2025
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Chọn ma trận có sẵn, chỉnh sửa hoặc tải file ma trận lên để hệ thống tự động bốc câu hỏi từ ngân hàng dự án & AI
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMatrixModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chế độ ma trận */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMatrixUploadMode("prebuilt")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    matrixUploadMode === "prebuilt"
                      ? "bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20"
                      : "bg-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  Ma trận mẫu Bộ GD&ĐT
                </button>
                <button
                  type="button"
                  onClick={() => setMatrixUploadMode("manual")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    matrixUploadMode === "manual"
                      ? "bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20"
                      : "bg-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  Tùy chỉnh số câu theo cấp độ
                </button>
                <button
                  type="button"
                  onClick={() => setMatrixUploadMode("upload")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    matrixUploadMode === "upload"
                      ? "bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20"
                      : "bg-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  Tải file ma trận lên
                </button>
              </div>

              {/* Nguồn tạo câu hỏi */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400 font-medium">Nguồn câu hỏi:</span>
                <select
                  value={matrixSourceOption}
                  onChange={(e: any) => setMatrixSourceOption(e.target.value)}
                  className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-xs focus:outline-none focus:border-orange-500 cursor-pointer"
                >
                  <option value="hybrid">⚡ Kết hợp (Dự án + AI/Internet)</option>
                  <option value="project">📚 Nguồn trong dự án (Ngân hàng chuẩn)</option>
                  <option value="internet">🌐 Nguồn Internet / AI Generator</option>
                </select>
              </div>
            </div>

            {/* Chọn ma trận có sẵn */}
            {matrixUploadMode === "prebuilt" && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-orange-400" />
                  <span>Chọn mẫu ma trận chuẩn Bộ GD&ĐT:</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {PREBUILT_EXAM_MATRICES.map((m) => {
                    const isSelected = selectedPrebuiltId === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => loadPrebuiltMatrix(m.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative ${
                          isSelected
                            ? "bg-orange-500/10 border-orange-500 shadow-md shadow-orange-500/10"
                            : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-slate-800 text-amber-300">
                            Khối {m.gradeNumber} • {m.durationMinutes} phút
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-orange-400" />}
                        </div>
                        <h4 className="text-xs font-bold text-white line-clamp-1">{m.title}</h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{m.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tải về biểu mẫu chuẩn CV 7991 */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-white">Biểu mẫu Ma trận chuẩn Công văn 7991/BGDĐT-GDTrH</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                      Mới 2025
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Thầy/Cô tải file mẫu Word (.doc) hoặc Excel/CSV (.csv) về máy để chỉnh sửa các chủ đề và số lượng câu hỏi, sau đó tải lên lại hệ thống để tạo đề tự động.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`/api/teacher/exams/template-matrix?format=doc&grade=${matrixGradeNumber}`}
                  download
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Tải biểu mẫu Microsoft Word chuẩn Phụ lục CV 7991"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải Mẫu Word (.doc)</span>
                </a>
                <a
                  href={`/api/teacher/exams/template-matrix?format=csv&grade=${matrixGradeNumber}`}
                  download
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Tải bảng tính Excel/CSV chuẩn CV 7991"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Tải Mẫu Excel/CSV</span>
                </a>
              </div>
            </div>

            {/* Chế độ tải file ma trận */}
            {matrixUploadMode === "upload" && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-dashed border-orange-500/40 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tải file ma trận đề thi lên (Word / Excel / PDF / Ảnh)</h4>
                  <p className="text-xs text-slate-400 mt-0.5 max-w-md mx-auto">
                    Hỗ trợ file biểu mẫu Word (.doc, .docx), Excel (.xlsx, .csv), file scan PDF (.pdf) hoặc ảnh bảng ma trận. Hệ thống tự động bóc tách số câu theo từng dạng và cấp độ.
                  </p>
                </div>
                <div className="flex justify-center">
                  <label className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs cursor-pointer inline-flex items-center gap-2 transition-all shadow-md shadow-orange-500/20">
                    <UploadCloud className="w-4 h-4" />
                    <span>Chọn file ma trận từ máy tính</span>
                    <input
                      type="file"
                      accept=".docx,.doc,.pdf,.png,.jpg,.jpeg,.xlsx,.xls,.csv,.txt"
                      onChange={handleMatrixFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {matrixRawText && (
                  <p className="text-[11px] text-emerald-400 font-medium">
                    ✓ Đã nhận diện nội dung file ma trận! Bạn có thể kiểm tra bảng chủ đề bên dưới.
                  </p>
                )}
              </div>
            )}

            {/* Thông tin chung */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">Tên đề thi theo ma trận</label>
                <input
                  type="text"
                  value={matrixTitle}
                  onChange={(e) => setMatrixTitle(e.target.value)}
                  placeholder="VD: Kiểm tra Giữa Kì 1 - Toán 10"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Khối lớp & Lớp kiểm tra</label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={matrixGradeNumber}
                    onChange={(e) => setMatrixGradeNumber(Number(e.target.value))}
                    className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value={10}>Toán 10</option>
                    <option value={6}>Toán 6</option>
                  </select>
                  <input
                    type="text"
                    value={matrixTargetClass}
                    onChange={(e) => setMatrixTargetClass(e.target.value)}
                    placeholder="VD: 10A1, 6A"
                    className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Thời gian làm bài (phút)</label>
                <input
                  type="number"
                  min={15}
                  max={180}
                  step={5}
                  value={matrixDuration}
                  onChange={(e) => setMatrixDuration(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Bảng ma trận đặc tả chi tiết */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-orange-400" />
                  <span>Đặc tả số câu hỏi theo từng chủ đề & cấp độ tư duy</span>
                </span>
                <button
                  type="button"
                  onClick={handleAddMatrixTopic}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-orange-300 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Thêm chủ đề</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950/80 text-slate-300 border-b border-slate-800">
                      <th className="p-2.5 font-black text-[11px] min-w-[180px]">Chủ đề / Bài học</th>
                      <th colSpan={4} className="p-2 text-center font-bold text-sky-300 bg-sky-950/30 border-l border-r border-slate-800">
                        Phần I: TN 4 Lựa Chọn (0.25đ/câu)
                        <div className="grid grid-cols-4 text-[10px] text-slate-400 mt-0.5">
                          <span>NB</span><span>TH</span><span>VD</span><span>VDC</span>
                        </div>
                      </th>
                      <th colSpan={4} className="p-2 text-center font-bold text-amber-300 bg-amber-950/30 border-r border-slate-800">
                        Phần II: Đúng/Sai (1.0đ/câu 4 ý)
                        <div className="grid grid-cols-4 text-[10px] text-slate-400 mt-0.5">
                          <span>NB</span><span>TH</span><span>VD</span><span>VDC</span>
                        </div>
                      </th>
                      <th colSpan={4} className="p-2 text-center font-bold text-emerald-300 bg-emerald-950/30 border-r border-slate-800">
                        Phần III: Trả lời ngắn (0.5đ/câu)
                        <div className="grid grid-cols-4 text-[10px] text-slate-400 mt-0.5">
                          <span>NB</span><span>TH</span><span>VD</span><span>VDC</span>
                        </div>
                      </th>
                      <th className="p-2 text-center font-bold w-12">Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrixTopics.map((topic, idx) => {
                      return (
                        <tr key={topic.id || idx} className="border-b border-slate-800/60 hover:bg-slate-800/30">
                          <td className="p-2">
                            <input
                              type="text"
                              value={topic.topicName}
                              onChange={(e) => {
                                const val = e.target.value;
                                setMatrixTopics((prev) =>
                                  prev.map((t) => (t.id === topic.id ? { ...t, topicName: val } : t))
                                );
                              }}
                              className="w-full px-2 py-1 rounded-lg bg-slate-950 border border-slate-800 text-white font-medium text-xs focus:outline-none focus:border-orange-500"
                            />
                          </td>

                          {/* Part 1: NB, TH, VD, VDC */}
                          {(["nb", "th", "vd", "vdc"] as const).map((lvl) => (
                            <td key={`p1-${lvl}`} className="p-1 text-center bg-sky-950/10">
                              <input
                                type="number"
                                min={0}
                                max={20}
                                value={topic.part1[lvl] || 0}
                                onChange={(e) =>
                                  handleUpdateMatrixCell(topic.id, "part1", lvl, Number(e.target.value))
                                }
                                className="w-10 text-center py-1 rounded bg-slate-950 border border-slate-800 text-sky-300 font-bold text-xs"
                              />
                            </td>
                          ))}

                          {/* Part 2: NB, TH, VD, VDC */}
                          {(["nb", "th", "vd", "vdc"] as const).map((lvl) => (
                            <td key={`p2-${lvl}`} className="p-1 text-center bg-amber-950/10">
                              <input
                                type="number"
                                min={0}
                                max={10}
                                value={topic.part2[lvl] || 0}
                                onChange={(e) =>
                                  handleUpdateMatrixCell(topic.id, "part2", lvl, Number(e.target.value))
                                }
                                className="w-10 text-center py-1 rounded bg-slate-950 border border-slate-800 text-amber-300 font-bold text-xs"
                              />
                            </td>
                          ))}

                          {/* Part 3: NB, TH, VD, VDC */}
                          {(["nb", "th", "vd", "vdc"] as const).map((lvl) => (
                            <td key={`p3-${lvl}`} className="p-1 text-center bg-emerald-950/10">
                              <input
                                type="number"
                                min={0}
                                max={15}
                                value={topic.part3[lvl] || 0}
                                onChange={(e) =>
                                  handleUpdateMatrixCell(topic.id, "part3", lvl, Number(e.target.value))
                                }
                                className="w-10 text-center py-1 rounded bg-slate-950 border border-slate-800 text-emerald-300 font-bold text-xs"
                              />
                            </td>
                          ))}

                          <td className="p-1 text-center">
                            <button
                              type="button"
                              onClick={() => handleRemoveMatrixTopic(topic.id)}
                              className="p-1 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4 mx-auto" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  {/* Footer tổng kết số câu */}
                  <tfoot>
                    <tr className="bg-slate-950 font-bold text-[11px] text-slate-300 border-t border-slate-700">
                      <td className="p-2 font-black text-orange-400">TỔNG SỐ CÂU:</td>
                      <td colSpan={4} className="p-2 text-center text-sky-300">
                        {matrixTopics.reduce(
                          (acc, t) => acc + t.part1.nb + t.part1.th + t.part1.vd + t.part1.vdc,
                          0
                        )}{" "}
                        câu (Phần I)
                      </td>
                      <td colSpan={4} className="p-2 text-center text-amber-300">
                        {matrixTopics.reduce(
                          (acc, t) => acc + t.part2.nb + t.part2.th + t.part2.vd + t.part2.vdc,
                          0
                        )}{" "}
                        câu (Phần II)
                      </td>
                      <td colSpan={4} className="p-2 text-center text-emerald-300">
                        {matrixTopics.reduce(
                          (acc, t) => acc + t.part3.nb + t.part3.th + t.part3.vd + t.part3.vdc,
                          0
                        )}{" "}
                        câu (Phần III)
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Footer Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>Hệ thống sẽ lấy từ ngân hàng dự án trước, câu thiếu sẽ được AI tạo tức thì.</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsMatrixModalOpen(false)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  disabled={isGeneratingFromMatrix || matrixTopics.length === 0}
                  onClick={handleGenerateFromMatrix}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-orange-500/25 cursor-pointer disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isGeneratingFromMatrix ? "Đang bốc đề thi từ ma trận..." : "BỐC ĐỀ THI TỪ MA TRẬN"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: RÚT ĐỀ TỰ ĐỘNG TỪ NGÂN HÀNG ĐỀ TOÁN 10                             */}
      {/* ========================================================================= */}
      {isBankDrawModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-4xl rounded-3xl bg-[#0d1424] border-2 border-emerald-500/40 p-6 sm:p-7 space-y-5 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-white">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Dices className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2 flex-wrap">
                    <span>Rút Đề Tự Động Từ Ngân Hàng Câu Hỏi (Khối 10)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                      {bankCatalog?.totalQuestions || 1197} câu hỏi hoàn hảo
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Trích xuất câu hỏi ngẫu nhiên theo số lượng, mức độ và phạm vi chương. 100% chuẩn cấu trúc Bộ GD&ĐT 2025.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsBankViewerModalOpen(true)}
                  className="px-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                  <span>Xem Thử Ngân Hàng Đề</span>
                </button>
                <button
                  onClick={() => setIsBankDrawModalOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Presets rút nhanh */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Mẫu cấu hình đề thi chuẩn BGD 2025:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => applyBankPreset('15m')}
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-400 group-hover:text-emerald-300">⚡ 15 Phút</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">10 câu</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">10 Trắc nghiệm (5 NB, 3 TH, 2 VD)</p>
                </button>

                <button
                  type="button"
                  onClick={() => applyBankPreset('45m')}
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/50 hover:bg-teal-950/20 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-teal-400 group-hover:text-teal-300">⏱️ 45 Phút (Định kỳ)</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">18 câu</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">12 TN + 2 Đúng/Sai + 4 Ngắn</p>
                </button>

                <button
                  type="button"
                  onClick={() => applyBankPreset('90m')}
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-400 group-hover:text-cyan-300">🎯 90 Phút (Học kỳ - CV 7991)</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">22 câu</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">12 TN + 4 Đúng/Sai + 6 Ngắn</p>
                </button>
              </div>
            </div>

            {/* Thông tin cơ bản */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Tên đề thi kiểm tra</label>
                <input
                  type="text"
                  value={bankExamTitle}
                  onChange={(e) => setBankExamTitle(e.target.value)}
                  placeholder="Nhập tên đề kiểm tra..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Thời gian làm bài (phút)</label>
                <input
                  type="number"
                  min={5}
                  max={180}
                  value={bankDuration}
                  onChange={(e) => setBankDuration(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Phạm vi chương */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Phạm vi kiến thức kiểm tra:</span>
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBankScope('all')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      bankScope === 'all'
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Toàn bộ chương trình (10 chương)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBankScope('custom')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      bankScope === 'custom'
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Tùy chọn từng chương
                  </button>
                </div>
              </div>

              {bankScope === 'custom' && bankCatalog && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 pr-2">
                  {bankCatalog.chapters.map((ch) => {
                    const isChecked = bankSelectedChapters.includes(ch.chapterId);
                    return (
                      <div
                        key={ch.chapterId}
                        onClick={() => {
                          if (isChecked) {
                            if (bankSelectedChapters.length > 1) {
                              setBankSelectedChapters(bankSelectedChapters.filter(id => id !== ch.chapterId));
                            }
                          } else {
                            setBankSelectedChapters([...bankSelectedChapters, ch.chapterId]);
                          }
                        }}
                        className={`p-2.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-emerald-950/30 border-emerald-500/50 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] font-black ${
                            isChecked ? 'bg-emerald-500 text-slate-950' : 'border border-slate-700'
                          }`}>
                            {isChecked && '✓'}
                          </div>
                          <span className="truncate font-medium">{ch.chapterName}</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-emerald-400 shrink-0 font-bold ml-2">
                          {ch.totalQuestions} câu
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Cấu hình Số lượng câu hỏi & Mức độ nhận thức */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Cột số lượng theo dạng câu */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-200">Số lượng câu theo cấu trúc BGD:</label>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-black">
                    Tổng: {bankCountMC + bankCountTF + bankCountSA} câu
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Phần I: Trắc nghiệm 4 lựa chọn (MC)</span>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={bankCountMC}
                      onChange={(e) => setBankCountMC(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-center text-emerald-400 font-bold focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Phần II: Đúng / Sai (TF)</span>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={bankCountTF}
                      onChange={(e) => setBankCountTF(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-center text-teal-400 font-bold focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Phần III: Trả lời ngắn (SA)</span>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={bankCountSA}
                      onChange={(e) => setBankCountSA(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-center text-cyan-400 font-bold focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Cột mức độ nhận thức */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-200">Phân bổ mức độ nhận thức:</label>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
                    (bankLevelNB + bankLevelTH + bankLevelVD + bankLevelVDC) === (bankCountMC + bankCountTF + bankCountSA)
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    Tổng mức độ: {bankLevelNB + bankLevelTH + bankLevelVD + bankLevelVDC} / {bankCountMC + bankCountTF + bankCountSA}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Nhận biết (NB)</span>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={bankLevelNB}
                      onChange={(e) => setBankLevelNB(Math.max(0, Number(e.target.value)))}
                      className="w-12 px-2 py-1 rounded-lg bg-slate-900 border border-slate-700 text-center text-blue-400 font-bold focus:outline-none"
                    />
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Thông hiểu (TH)</span>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={bankLevelTH}
                      onChange={(e) => setBankLevelTH(Math.max(0, Number(e.target.value)))}
                      className="w-12 px-2 py-1 rounded-lg bg-slate-900 border border-slate-700 text-center text-emerald-400 font-bold focus:outline-none"
                    />
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Vận dụng (VD)</span>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={bankLevelVD}
                      onChange={(e) => setBankLevelVD(Math.max(0, Number(e.target.value)))}
                      className="w-12 px-2 py-1 rounded-lg bg-slate-900 border border-slate-700 text-center text-amber-400 font-bold focus:outline-none"
                    />
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">V.Dụng cao (VDC)</span>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={bankLevelVDC}
                      onChange={(e) => setBankLevelVDC(Math.max(0, Number(e.target.value)))}
                      className="w-12 px-2 py-1 rounded-lg bg-slate-900 border border-slate-700 text-center text-rose-400 font-bold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      const total = bankCountMC + bankCountTF + bankCountSA;
                      const nb = Math.round(total * 0.35);
                      const th = Math.round(total * 0.35);
                      const vd = Math.round(total * 0.20);
                      const vdc = Math.max(0, total - nb - th - vd);
                      setBankLevelNB(nb);
                      setBankLevelTH(th);
                      setBankLevelVD(vd);
                      setBankLevelVDC(vdc);
                    }}
                    className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Tự động cân bằng tỉ lệ 35% - 35% - 20% - 10%</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Báo lỗi nếu có */}
            {bankDrawError && (
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{bankDrawError}</span>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <div className="text-[11px] text-slate-400">
                Lớp nhận đề: <span className="font-bold text-white">{bankTargetClass || (assignedClasses.length > 0 ? assignedClasses[0] : '10A1')}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsBankDrawModalOpen(false)}
                  disabled={isDrawingFromBank}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                >
                  Hủy
                </button>

                <button
                  type="button"
                  onClick={handleDrawExamFromBank}
                  disabled={isDrawingFromBank || (bankCountMC + bankCountTF + bankCountSA === 0)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {isDrawingFromBank ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Đang bốc câu hỏi từ ngân hàng...</span>
                    </>
                  ) : (
                    <>
                      <Shuffle className="w-4 h-4" />
                      <span>🎲 Bắt Đầu Rút Đề</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* MODAL: TẠO THƯ MỤC ĐỀ THI MỚI                                            */}
      {/* ========================================================================= */}
      {isNewFolderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl bg-[#0e1526] border-2 border-amber-500/40 p-6 space-y-5 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                  <FolderPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">Tạo Thư Mục Đề Thi Mới</h3>
                  <p className="text-xs text-slate-400">Phân loại và quản lý đề kiểm tra theo khối, học kỳ hoặc chủ đề</p>
                </div>
              </div>
              <button
                onClick={() => setIsNewFolderModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                Tên Thư Mục <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={newFolderNameInput}
                onChange={(e) => setNewFolderNameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreateNewFolder();
                }}
                placeholder="Ví dụ: Đề Ôn Thi Học Kỳ 2, Kiểm Tra 15 Phút..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                autoFocus
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsNewFolderModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleCreateNewFolder}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <FolderPlus className="w-4 h-4" />
                <span>Tạo Thư Mục</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: CHUYỂN ĐỀ THI VÀO THƯ MỤC                                          */}
      {/* ========================================================================= */}
      {movingExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl bg-[#0e1526] border-2 border-indigo-500/40 p-6 space-y-5 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                  <MoveRight className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">Chuyển Thư Mục Cho Đề Thi</h3>
                  <p className="text-xs text-slate-400 truncate max-w-[240px]">{movingExam.title}</p>
                </div>
              </div>
              <button
                onClick={() => setMovingExam(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                Chọn Thư Mục Đích <span className="text-rose-400">*</span>
              </label>
              <select
                value={targetMoveFolderId}
                onChange={(e) => setTargetMoveFolderId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-400"
              >
                {examFolders.map((f) => (
                  <option key={f.id} value={f.id}>
                    📁 {f.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setMovingExam(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleExecuteMoveExam}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <MoveRight className="w-4 h-4" />
                <span>Chuyển Thư Mục</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: BẢNG ĐIỂM & THEO DÕI HỌC SINH THOÁT MÀN HÌNH THEO LỚP              */}
      {/* ========================================================================= */}
      {selectedExamForSubmissions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-4xl rounded-3xl bg-[#0e1526] border-2 border-emerald-500/40 p-6 sm:p-7 space-y-5 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-white">
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Bảng Điểm & Giám Sát: {selectedExamForSubmissions.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Lớp áp dụng: <strong className="text-cyan-400">{selectedExamForSubmissions.targetClass}</strong> • 
                    Thời lượng: {selectedExamForSubmissions.durationMinutes} phút • 
                    Số câu: {selectedExamForSubmissions.totalQuestions} câu
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedExamForSubmissions(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Thống kê nhanh kết quả */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Số Học Sinh Nộp Bài</span>
                <strong className="text-xl font-black text-cyan-400">
                  {examSubmissionsList.length} học sinh
                </strong>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Điểm Trung Bình</span>
                <strong className="text-xl font-black text-emerald-400">
                  {examSubmissionsList.length > 0
                    ? (
                        examSubmissionsList.reduce((acc, s) => acc + s.score, 0) /
                        examSubmissionsList.length
                      ).toFixed(2)
                    : "—"}{" "}
                  <span className="text-xs text-slate-400">/ 10</span>
                </strong>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Điểm Cao Nhất</span>
                <strong className="text-xl font-black text-amber-400">
                  {examSubmissionsList.length > 0
                    ? Math.max(...examSubmissionsList.map((s) => s.score)).toFixed(2)
                    : "—"}
                </strong>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Vi Phạm Thoát Màn Hình</span>
                <strong className="text-xl font-black text-rose-400">
                  {examSubmissionsList.filter((s) => s.blurCount > 0).length} em
                </strong>
              </div>
            </div>

            {/* Bảng Danh Sách Học Sinh & Giám Sát */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">
                  Danh Sách Học Sinh Đã Hoàn Thành Bài Kiểm Tra:
                </span>
                <button
                  onClick={() => exportSubmissionsCSV(selectedExamForSubmissions, examSubmissionsList)}
                  disabled={examSubmissionsList.length === 0}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Xuất Excel / CSV Bảng Điểm</span>
                </button>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
                <div className="overflow-x-auto max-h-72 overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800 sticky top-0">
                      <tr>
                        <th className="p-3">STT</th>
                        <th className="p-3">Họ và Tên Học Sinh</th>
                        <th className="p-3">Lớp</th>
                        <th className="p-3 text-center">Điểm (Thang 10)</th>
                        <th className="p-3 text-center">Thời Gian Làm</th>
                        <th className="p-3 text-center">
                          <span className="text-rose-400">Thoát Màn Hình</span>
                        </th>
                        <th className="p-3 text-center">Thời Điểm Nộp</th>
                        <th className="p-3 text-right">Chi Tiết</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {examSubmissionsList.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="p-8 text-center text-slate-500">
                            Chưa có học sinh nào nộp bài cho đề thi này. Hãy sao chép link và gửi cho học sinh!
                          </td>
                        </tr>
                      ) : (
                        examSubmissionsList.map((sub, idx) => (
                          <tr key={sub.id || idx} className="hover:bg-slate-800/40">
                            <td className="p-3 text-slate-500 font-mono">{idx + 1}</td>
                            <td className="p-3 font-bold text-white">
                              {sub.studentName}
                              {sub.studentUsername && (
                                <span className="text-[10px] text-slate-400 font-normal block">
                                  @{sub.studentUsername}
                                </span>
                              )}
                            </td>
                            <td className="p-3 text-cyan-300 font-medium">{sub.studentClass}</td>
                            <td className="p-3 text-center">
                              <span className="px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm">
                                {sub.score.toFixed(2)}
                              </span>
                            </td>
                            <td className="p-3 text-center text-slate-400 font-mono">
                              {Math.floor(sub.timeSpentSeconds / 60)}p {sub.timeSpentSeconds % 60}s
                            </td>
                            <td className="p-3 text-center">
                              {sub.blurCount === 0 ? (
                                <span className="px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 font-bold text-[11px]">
                                  0 lần (Tốt)
                                </span>
                              ) : (
                                <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 font-black text-[11px] animate-pulse">
                                  ⚠️ {sub.blurCount} lần vi phạm
                                </span>
                              )}
                            </td>
                            <td className="p-3 text-center text-slate-400 text-[11px]">
                              {sub.submittedAt ? new Date(sub.submittedAt).toLocaleTimeString("vi-VN") : "—"}
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => setSelectedSubmissionDetail(sub)}
                                className="px-2.5 py-1 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 font-bold text-[11px] transition-colors cursor-pointer"
                              >
                                Xem bài
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedExamForSubmissions(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Đóng Bảng Điểm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: XEM CHI TIẾT BÀI LÀM CỦA 1 HỌC SINH (ĐÁP ÁN ĐÚNG/SAI & LỜI GIẢI) */}
      {/* ========================================================================= */}
      {selectedSubmissionDetail && selectedExamForSubmissions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-2xl rounded-3xl bg-[#0e1526] border-2 border-cyan-500/40 p-6 space-y-5 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-white">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h4 className="text-base font-black text-white">
                  Bài Làm: {selectedSubmissionDetail.studentName}
                </h4>
                <p className="text-xs text-slate-400">
                  Lớp: <strong className="text-cyan-400">{selectedSubmissionDetail.studentClass}</strong> • 
                  Điểm số: <strong className="text-emerald-400">{selectedSubmissionDetail.score.toFixed(2)}/10 đ</strong> • 
                  Thoát màn hình: <strong className="text-rose-400">{selectedSubmissionDetail.blurCount} lần</strong>
                </p>
              </div>
              <button
                onClick={() => setSelectedSubmissionDetail(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Danh sách câu hỏi và câu trả lời của học sinh */}
            <div className="space-y-3">
              {selectedExamForSubmissions.questions.map((q, idx) => {
                let isCorrect = false;
                let userChoiceText = "Chưa làm";

                if (q.type === "multiple_choice") {
                  const ans = selectedSubmissionDetail.mcAnswers[q.id];
                  userChoiceText = ans ? `Chọn ${ans}` : "Chưa chọn";
                  isCorrect = ans === q.correctKey;
                } else if (q.type === "true_false") {
                  const ans = selectedSubmissionDetail.tfAnswers[q.id] || {};
                  userChoiceText = Object.entries(ans)
                    .map(([k, v]) => `${k}: ${v ? "Đ" : "S"}`)
                    .join(", ") || "Chưa làm";
                } else if (q.type === "short_answer") {
                  const ans = selectedSubmissionDetail.saAnswers[q.id];
                  userChoiceText = ans || "Chưa điền";
                  isCorrect = (ans || "").trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                }

                return (
                  <div
                    key={q.id}
                    className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-300">
                        Câu {idx + 1} ({q.type === "multiple_choice" ? "Trắc nghiệm" : q.type === "true_false" ? "Đúng/Sai" : "Trả lời ngắn"})
                      </span>
                      {q.type === "multiple_choice" && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            isCorrect
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-rose-500/20 text-rose-300"
                          }`}
                        >
                          {isCorrect ? "✓ Chính xác" : "✗ Chưa chính xác"}
                        </span>
                      )}
                    </div>

                    <div className="text-slate-200">
                      <MathFormattedText text={q.stem} />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400 block">Học sinh trả lời:</span>
                        <strong className="text-cyan-300">{userChoiceText}</strong>
                      </div>
                      <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400 block">Đáp án chính xác:</span>
                        <strong className="text-emerald-400">
                          {q.type === "multiple_choice"
                            ? q.correctKey
                            : q.type === "short_answer"
                            ? q.correctAnswer
                            : "Xem lời giải"}
                        </strong>
                      </div>
                    </div>

                    {q.explanation && (
                      <div className="p-2 rounded bg-slate-950/40 text-[11px] text-slate-400">
                        <strong className="text-amber-400">Lời giải: </strong>
                        <MathFormattedText text={q.explanation} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedSubmissionDetail(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
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

      {/* Modal Khám Phá & Xem Thử Ngân Hàng Câu Hỏi Toán 10 (1.197 Câu Chuẩn) */}
      {isBankViewerModalOpen && (
        <QuestionBankViewerModal
          onClose={() => setIsBankViewerModalOpen(false)}
          onOpenDrawModal={(chapterId) => {
            setIsBankViewerModalOpen(false);
            if (chapterId) {
              setBankScope("custom");
              setBankSelectedChapters([chapterId]);
            }
            setIsBankDrawModalOpen(true);
            fetchBankCatalog(10);
          }}
        />
      )}

      {/* Modal Xem Trước Đề Thi & Tải File Word Chuẩn Equation / MathType */}
      {previewingExam && (
        <ExamPreviewModal
          exam={previewingExam}
          onClose={() => setPreviewingExam(null)}
          onCopyLink={copyExamLink}
        />
      )}
    </div>
  );
}
