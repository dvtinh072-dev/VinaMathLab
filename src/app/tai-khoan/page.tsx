"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  School,
  User,
  Shield,
  Clock,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Flame,
  Coins,
  Award,
  ChevronRight,
  RefreshCw,
  LogOut,
  ExternalLink,
  BookMarked,
  Filter,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { formatNaturalNumber } from "@/components/interactive/GamifiedMathQuiz";
import { MathFormattedText } from "@/components/math/MathFormattedText";

export default function StudentProfilePage() {
  const router = useRouter();
  const { user, isStudent, isAdmin, logout, openAuthModal } = useAuth();

  const [progressData, setProgressData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterWrong, setFilterWrong] = useState<"all" | "active" | "resolved">("all");
  const [activeTab, setActiveTab] = useState<"overview" | "mistakes" | "lessons">("overview");
  const [retryingQuestionId, setRetryingQuestionId] = useState<string | null>(null);
  const [retryAnswer, setRetryAnswer] = useState<number | null>(null);
  const [retryFeedback, setRetryFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  useEffect(() => {
    if (user?.id || user?.studentCode) {
      fetchStudentProgress();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const fetchStudentProgress = async () => {
    setIsLoading(true);
    try {
      const id = user?.id || user?.studentCode || "";
      const res = await fetch(`/api/student/progress?userId=${encodeURIComponent(id)}`);
      const data = await res.json();
      if (data.success && data.progress) {
        setProgressData(data.progress);
      }
    } catch (e) {
      console.error("Lỗi tải tiến độ học tập:", e);
    } finally {
      setIsLoading(false);
    }
  };

  // Nếu chưa đăng nhập, hiển thị màn hình yêu cầu đăng nhập
  if (!user) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#0e1526] border-2 border-cyan-500/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <GraduationCap className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-black text-white">Hồ Sơ Học Tập Cá Nhân</h2>
            <p className="text-xs text-slate-300">
              Vui lòng đăng nhập hoặc đăng ký tài khoản học sinh để theo dõi thời gian xem video, bài học đã hoàn thành và xem Sổ tay câu sai.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <Link
              href="/dang-nhap"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black text-xs sm:text-sm hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Đăng Nhập Ngay</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dang-ky"
              className="w-full py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700 transition-all"
            >
              Chưa có tài khoản? Đăng ký thành viên
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const wrongList: any[] = progressData ? Object.values(progressData.wrongQuestions || {}) : [];
  const activeWrongs = wrongList.filter((w) => !w.isResolved);
  const resolvedWrongs = wrongList.filter((w) => w.isResolved);

  const displayedWrongs = wrongList.filter((w) => {
    if (filterWrong === "active") return !w.isResolved;
    if (filterWrong === "resolved") return w.isResolved;
    return true;
  });

  const lessonsMap = progressData?.lessons || {};
  const completedLessonsCount = Object.values(lessonsMap).filter((l: any) => l.isCompleted).length;
  const totalVideoMinutes = progressData?.totalVideoMinutes || 0;

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Profile Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d1c38] via-[#11244d] to-[#1a1738] border-2 border-cyan-500/30 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-600 border-2 border-cyan-300/40 flex items-center justify-center text-slate-950 font-black text-2xl shadow-lg shrink-0">
            {user.fullName ? user.fullName.charAt(0).toUpperCase() : "H"}
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white">{user.fullName}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] font-black font-mono">
                @{user.username || user.studentCode?.toLowerCase() || user.id}
              </span>
              {isAdmin && (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-black flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Admin
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <School className="w-3.5 h-3.5 text-cyan-400" />
                {user.schoolName || "Trường THCS VinaMath"}
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                {user.grade || "Khối 6"} - {user.schoolClass || "Lớp 6A"}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <User className="w-3.5 h-3.5 text-slate-400" />
                @{user.username || user.studentCode?.toLowerCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={fetchStudentProgress}
            className="px-3 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 font-bold text-xs hover:bg-slate-800 transition-all flex items-center gap-1.5"
            title="Đồng bộ lại tiến độ"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Đồng bộ</span>
          </button>
          <button
            onClick={logout}
            className="px-3 py-2 rounded-xl bg-slate-900/80 border border-rose-500/30 text-rose-300 font-bold text-xs hover:bg-rose-950/40 transition-all flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>

      {/* 2. Key Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="p-4 rounded-2xl bg-[#0e1526] border border-cyan-500/30 space-y-1">
          <div className="flex items-center justify-between text-xs text-cyan-400 font-bold">
            <span>Video Đã Xem</span>
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {totalVideoMinutes} <span className="text-xs font-bold text-slate-400">phút</span>
          </div>
          <p className="text-[10px] text-slate-400">Thời gian xem video bài giảng</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0e1526] border border-emerald-500/30 space-y-1">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
            <span>Bài Hoàn Thành</span>
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {completedLessonsCount} <span className="text-xs font-bold text-slate-400">bài</span>
          </div>
          <p className="text-[10px] text-slate-400">Đạt chuẩn kiến thức ≥ 80%</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0e1526] border border-amber-500/30 space-y-1">
          <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
            <span>Điểm Tích Lũy</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {formatNaturalNumber(user.exp || 0)} <span className="text-xs font-bold text-slate-400">EXP</span>
          </div>
          <p className="text-[10px] text-slate-400">🪙 {user.coins || 0} VinaCoins</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0e1526] border border-rose-500/30 space-y-1">
          <div className="flex items-center justify-between text-xs text-rose-400 font-bold">
            <span>Sổ Tay Câu Sai</span>
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {activeWrongs.length} <span className="text-xs font-bold text-slate-400">câu</span>
          </div>
          <p className="text-[10px] text-slate-400">
            {resolvedWrongs.length > 0 ? `Đã sửa ${resolvedWrongs.length} câu` : "Cần ôn tập lại"}
          </p>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
            activeTab === "overview"
              ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Tổng Quan Học Tập</span>
        </button>

        <button
          onClick={() => setActiveTab("mistakes")}
          className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
            activeTab === "mistakes"
              ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>Sổ Tay Câu Sai ({wrongList.length})</span>
          {activeWrongs.length > 0 && (
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("lessons")}
          className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
            activeTab === "lessons"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>Tiến Độ Từng Bài Học</span>
        </button>
      </div>

      {/* TAB 1: TỔNG QUAN */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl bg-[#0e1526] border border-slate-800 space-y-4 shadow-xl">
            <h3 className="text-sm font-black text-cyan-300 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Thành Tích & Huy Hiệu Đạt Được</span>
            </h3>

            <div className="space-y-2.5">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Chuỗi Ngày Học Liên Tiếp</div>
                    <div className="text-[11px] text-slate-400">Duy trì học tập mỗi ngày để nhân đôi điểm</div>
                  </div>
                </div>
                <span className="font-black text-amber-400 text-sm">🔥 x{user.streak || 1} ngày</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Số Dư VinaCoins</div>
                    <div className="text-[11px] text-slate-400">Dùng để đổi quà và mở khóa giao diện đặc biệt</div>
                  </div>
                </div>
                <span className="font-black text-yellow-400 text-sm">🪙 {user.coins || 0}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/hoc-tap/lop-6/t6-b1-tap-hop"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Vào Học Tiếp Ngay Bây Giờ</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-[#0e1526] border border-slate-800 space-y-4 shadow-xl">
            <h3 className="text-sm font-black text-rose-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Cần Ôn Lại ({activeWrongs.length} câu)</span>
              </span>
              <button
                onClick={() => setActiveTab("mistakes")}
                className="text-xs text-cyan-400 hover:underline font-bold"
              >
                Xem tất cả
              </button>
            </h3>

            {activeWrongs.length === 0 ? (
              <div className="p-8 text-center space-y-2 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-xs font-bold text-white">Tuyệt vời! Bạn không còn câu hỏi nào bị sai.</p>
                <p className="text-[11px] text-slate-400">Tiếp tục luyện tập thêm các bài học mới để duy trì phong độ!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {activeWrongs.slice(0, 3).map((w: any) => (
                  <div
                    key={w.id}
                    className="p-3 rounded-2xl bg-slate-900/90 border border-rose-500/30 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30">
                        {w.badge || w.lessonTitle || "Câu hỏi"}
                      </span>
                      <span className="text-[10px] font-bold text-amber-400">
                        Đã sai {w.wrongCount || 1} lần
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white line-clamp-2">
                      <MathFormattedText text={w.questionText} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: SỔ TAY CÂU SAI */}
      {activeTab === "mistakes" && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-black text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span>Sổ Tay Câu Sai & Điểm Yếu Cần Khắc Phục</span>
              </h2>
              <p className="text-xs text-slate-400">
                Tự động ghi nhận mỗi khi bạn làm sai câu hỏi để bạn ôn luyện lại cho đến khi thành thạo.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs">
              <button
                onClick={() => setFilterWrong("all")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  filterWrong === "all" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Tất cả ({wrongList.length})
              </button>
              <button
                onClick={() => setFilterWrong("active")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  filterWrong === "active" ? "bg-rose-500/20 text-rose-300 border border-rose-500/40" : "text-slate-400 hover:text-white"
                }`}
              >
                Chưa sửa ({activeWrongs.length})
              </button>
              <button
                onClick={() => setFilterWrong("resolved")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  filterWrong === "resolved" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "text-slate-400 hover:text-white"
                }`}
              >
                Đã sửa ({resolvedWrongs.length})
              </button>
            </div>
          </div>

          {displayedWrongs.length === 0 ? (
            <div className="p-12 text-center space-y-2 rounded-3xl bg-[#0e1526] border border-slate-800">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-sm font-bold text-white">Không có câu sai nào trong mục này!</h3>
              <p className="text-xs text-slate-400">Bạn đang làm bài rất xuất sắc.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {displayedWrongs.map((w: any) => (
                <div
                  key={w.id}
                  className={`p-4 rounded-3xl border transition-all space-y-3 ${
                    w.isResolved
                      ? "bg-slate-950/60 border-emerald-500/30"
                      : "bg-[#0e1526] border-rose-500/40 hover:border-rose-400"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {w.badge || w.lessonTitle || "Bài học"}
                      </span>
                      {w.isResolved ? (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Đã khắc phục
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Cần ôn lại
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-black text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                      Đã làm sai {w.wrongCount || 1} lần
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-white">
                    <MathFormattedText text={w.questionText} />
                  </div>

                  {w.lastSelectedOption && (
                    <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-200 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-rose-300">Lựa chọn sai gần nhất: </span>
                        <MathFormattedText text={w.lastSelectedOption} />
                      </div>
                    </div>
                  )}

                  {w.correctOption && (
                    <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-300">Đáp án chính xác: </span>
                        <MathFormattedText text={w.correctOption} />
                      </div>
                    </div>
                  )}

                  {w.explanation && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                      <span className="font-bold text-amber-300 block">💡 Hướng dẫn phương pháp giải:</span>
                      <MathFormattedText text={w.explanation} />
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-2 pt-1">
                    {w.lessonId && (
                      <Link
                        href={`/hoc-tap/${w.gradeKey || "lop-6"}/${w.lessonId}`}
                        className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all"
                      >
                        <span>Mở bài học này</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: TIẾN ĐỘ TỪNG BÀI HỌC */}
      {activeTab === "lessons" && (
        <div className="space-y-4">
          <h2 className="text-base font-black text-white flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-amber-400" />
            <span>Chi Tiết Tiến Độ Từng Bài Học</span>
          </h2>

          <div className="rounded-3xl bg-[#0e1526] border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#131d33] text-[11px] font-black uppercase text-amber-300 border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">Mã Bài</th>
                    <th className="py-3.5 px-4">Tên Bài Học</th>
                    <th className="py-3.5 px-4 text-center">Xem Video</th>
                    <th className="py-3.5 px-4 text-center">Điểm Đạt</th>
                    <th className="py-3.5 px-4 text-center">Trạng Thái</th>
                    <th className="py-3.5 px-4 text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {Object.keys(lessonsMap).length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-500">
                        Chưa có bài học nào được ghi nhận. Hãy bắt đầu học ngay nhé!
                      </td>
                    </tr>
                  ) : (
                    Object.values(lessonsMap).map((l: any) => {
                      const minutes = Math.round((l.videoWatchedSeconds || 0) / 60);
                      return (
                        <tr key={l.lessonId} className="hover:bg-slate-900/60 transition-colors">
                          <td className="py-3 px-4 font-black text-cyan-300">{l.lessonId}</td>
                          <td className="py-3 px-4 font-bold text-white">{l.lessonTitle}</td>
                          <td className="py-3 px-4 text-center font-bold text-cyan-400">
                            ⏱ {minutes} phút
                          </td>
                          <td className="py-3 px-4 text-center font-black text-amber-300">
                            ⭐ {l.score || 0} điểm
                          </td>
                          <td className="py-3 px-4 text-center">
                            {l.isCompleted ? (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                                ✓ Hoàn thành
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                                Đang học
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Link
                              href={`/hoc-tap/${l.gradeKey || "lop-6"}/${l.lessonId}`}
                              className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40"
                            >
                              <span>Vào học</span>
                              <ChevronRight className="w-3 h-3" />
                            </Link>
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
    </div>
  );
}
