"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SAMPLE_EXAMS, GRADE_EXAM_TABS, EXAM_PERIODS } from "@/data/sampleExams";
import { 
  Award, Timer, ArrowRight, Sparkles, Filter, 
  BookOpen, CheckCircle2, ShieldAlert, GraduationCap, Flame
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { canAccessGrade } from "@/lib/teacherClassUtils";

const GRADE_STYLES: {
  [key: string]: {
    activeBg: string;
    activeBorder: string;
    activeShadow: string;
    activeRing: string;
    inactiveBg: string;
    inactiveBorder: string;
    inactiveText: string;
    inactiveShadow: string;
    badge: string;
  };
} = {
  "lop-6": {
    activeBg: "bg-gradient-to-b from-emerald-500 via-emerald-600 to-teal-700 text-white",
    activeBorder: "border-t border-emerald-300",
    activeShadow: "shadow-[0_5px_0_0_#065f46]",
    activeRing: "ring-2 ring-emerald-400 ring-offset-2 dark:ring-offset-slate-900",
    inactiveBg: "bg-emerald-50/70 hover:bg-emerald-100/90 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40",
    inactiveBorder: "border-emerald-300 dark:border-emerald-800/70",
    inactiveText: "text-emerald-800 dark:text-emerald-300",
    inactiveShadow: "shadow-[0_3px_0_0_#a7f3d0] dark:shadow-[0_3px_0_0_#064e3b]",
    badge: "THCS",
  },
  "lop-7": {
    activeBg: "bg-gradient-to-b from-sky-500 via-sky-600 to-cyan-700 text-white",
    activeBorder: "border-t border-sky-300",
    activeShadow: "shadow-[0_5px_0_0_#0369a1]",
    activeRing: "ring-2 ring-sky-400 ring-offset-2 dark:ring-offset-slate-900",
    inactiveBg: "bg-sky-50/70 hover:bg-sky-100/90 dark:bg-sky-950/20 dark:hover:bg-sky-950/40",
    inactiveBorder: "border-sky-300 dark:border-sky-800/70",
    inactiveText: "text-sky-800 dark:text-sky-300",
    inactiveShadow: "shadow-[0_3px_0_0_#bae6fd] dark:shadow-[0_3px_0_0_#0c4a6e]",
    badge: "THCS",
  },
  "lop-8": {
    activeBg: "bg-gradient-to-b from-blue-600 via-indigo-600 to-indigo-700 text-white",
    activeBorder: "border-t border-blue-300",
    activeShadow: "shadow-[0_5px_0_0_#1e3a8a]",
    activeRing: "ring-2 ring-blue-400 ring-offset-2 dark:ring-offset-slate-900",
    inactiveBg: "bg-blue-50/70 hover:bg-blue-100/90 dark:bg-blue-950/20 dark:hover:bg-blue-950/40",
    inactiveBorder: "border-blue-300 dark:border-blue-800/70",
    inactiveText: "text-blue-800 dark:text-blue-300",
    inactiveShadow: "shadow-[0_3px_0_0_#bfdbfe] dark:shadow-[0_3px_0_0_#172554]",
    badge: "THCS",
  },
  "lop-9": {
    activeBg: "bg-gradient-to-b from-rose-500 via-red-500 to-rose-600 text-white",
    activeBorder: "border-t border-rose-200",
    activeShadow: "shadow-[0_5px_0_0_#9f1239]",
    activeRing: "ring-2 ring-rose-400 ring-offset-2 dark:ring-offset-slate-900",
    inactiveBg: "bg-rose-50/70 hover:bg-rose-100/90 dark:bg-rose-950/20 dark:hover:bg-rose-950/40",
    inactiveBorder: "border-rose-300 dark:border-rose-800/70",
    inactiveText: "text-rose-800 dark:text-rose-300",
    inactiveShadow: "shadow-[0_3px_0_0_#fecdd3] dark:shadow-[0_3px_0_0_#4c0519]",
    badge: "Vào 10",
  },
  "lop-10": {
    activeBg: "bg-gradient-to-b from-violet-600 via-purple-600 to-purple-700 text-white",
    activeBorder: "border-t border-violet-300",
    activeShadow: "shadow-[0_5px_0_0_#4c1d95]",
    activeRing: "ring-2 ring-violet-400 ring-offset-2 dark:ring-offset-slate-900",
    inactiveBg: "bg-purple-50/70 hover:bg-purple-100/90 dark:bg-purple-950/20 dark:hover:bg-purple-950/40",
    inactiveBorder: "border-purple-300 dark:border-purple-800/70",
    inactiveText: "text-purple-800 dark:text-purple-300",
    inactiveShadow: "shadow-[0_3px_0_0_#e9d5ff] dark:shadow-[0_3px_0_0_#3b0764]",
    badge: "THPT",
  },
  "lop-11": {
    activeBg: "bg-gradient-to-b from-fuchsia-600 via-pink-600 to-pink-700 text-white",
    activeBorder: "border-t border-fuchsia-300",
    activeShadow: "shadow-[0_5px_0_0_#701a75]",
    activeRing: "ring-2 ring-fuchsia-400 ring-offset-2 dark:ring-offset-slate-900",
    inactiveBg: "bg-fuchsia-50/70 hover:bg-fuchsia-100/90 dark:bg-fuchsia-950/20 dark:hover:bg-fuchsia-950/40",
    inactiveBorder: "border-fuchsia-300 dark:border-fuchsia-800/70",
    inactiveText: "text-fuchsia-800 dark:text-fuchsia-300",
    inactiveShadow: "shadow-[0_3px_0_0_#f5d0fe] dark:shadow-[0_3px_0_0_#4a044e]",
    badge: "THPT",
  },
  "lop-12": {
    activeBg: "bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 text-white",
    activeBorder: "border-t border-amber-200",
    activeShadow: "shadow-[0_5px_0_0_#9a3412]",
    activeRing: "ring-2 ring-amber-400 ring-offset-2 dark:ring-offset-slate-900",
    inactiveBg: "bg-amber-50/70 hover:bg-amber-100/90 dark:bg-amber-950/20 dark:hover:bg-amber-950/40",
    inactiveBorder: "border-amber-300 dark:border-amber-800/70",
    inactiveText: "text-amber-800 dark:text-amber-300",
    inactiveShadow: "shadow-[0_3px_0_0_#fde68a] dark:shadow-[0_3px_0_0_#451a03]",
    badge: "TN THPT",
  },
};

export default function LuyenThiPage() {
  const { user, isStudent, isAdmin, isTeacher, openAuthModal } = useAuth();

  // Xác định khối lớp mặc định dựa trên tài khoản học sinh (nếu đã đăng nhập)
  const defaultGradeId = useMemo(() => {
    if (user?.role === "student") {
      const uGrade = user.grade || user.schoolClass || "";
      const match = uGrade.match(/(\d+)/);
      if (match) {
        const gNum = parseInt(match[1], 10);
        if (gNum >= 6 && gNum <= 12) return `lop-${gNum}`;
      }
    }
    return "lop-9"; // Mặc định Lớp 9
  }, [user]);

  const [selectedGrade, setSelectedGrade] = useState<string>(defaultGradeId);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("all");
  const [accessWarning, setAccessWarning] = useState<string | null>(null);

  // Đổi khối lớp
  const handleSelectGrade = (gradeId: string) => {
    setAccessWarning(null);

    // Kiểm tra phân quyền học sinh
    if (user && isStudent) {
      const allowed = canAccessGrade(user, gradeId);
      if (!allowed) {
        const studentGrade = user.grade || user.schoolClass || "khối khác";
        setAccessWarning(
          `⚠️ Bạn đang đăng ký tài khoản ${studentGrade}. Để xem và thi đề ${GRADE_EXAM_TABS.find(g => g.id === gradeId)?.label}, vui lòng liên hệ Thầy/Cô hoặc Quản trị viên cập nhật phân lớp.`
        );
      }
    }

    setSelectedGrade(gradeId);
    setSelectedPeriod("all"); // reset bộ lọc kỳ thi
  };

  const activeGradeObj = useMemo(() => {
    return GRADE_EXAM_TABS.find((g) => g.id === selectedGrade) || GRADE_EXAM_TABS[0];
  }, [selectedGrade]);

  // Danh sách các kỳ thi có sẵn cho khối lớp đang chọn
  const availablePeriods = useMemo(() => {
    return EXAM_PERIODS.filter((p) => {
      if (!p.specialForGrade) return true;
      return p.specialForGrade === selectedGrade;
    });
  }, [selectedGrade]);

  // Danh sách đề thi được lọc
  const filteredExams = useMemo(() => {
    return Object.values(SAMPLE_EXAMS).filter((exam) => {
      if (exam.grade !== selectedGrade) return false;
      if (selectedPeriod !== "all" && exam.examType !== selectedPeriod) return false;
      return true;
    });
  }, [selectedGrade, selectedPeriod]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* THANH CHỌN KHỐI LỚP (TABS) - MÀU SẮC ĐẸP, NÉT, HIỆN ĐẠI */}
      <div className="space-y-3.5 pt-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2.5 tracking-tight">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span>Phòng Luyện Thi Theo Khối Lớp</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              Chọn khối lớp để luyện tập các đề thi Giữa kỳ, Cuối kỳ và Chuyên đề chuẩn cấu trúc Bộ GD&ĐT
            </p>
          </div>

          {user && isStudent && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs text-blue-700 dark:text-blue-300 font-medium">
              <span>Lớp của bạn:</span>
              <strong className="text-primary font-bold">{user.grade || user.schoolClass || "Chưa chọn"}</strong>
            </div>
          )}
        </div>

        {/* 7 NÚT KHỐI LỚP 3D SẮC NÉT HIỆN ĐẠI */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {GRADE_EXAM_TABS.map((tab) => {
            const isSelected = selectedGrade === tab.id;
            const style = GRADE_STYLES[tab.id] || GRADE_STYLES["lop-6"];

            return (
              <button
                key={tab.id}
                onClick={() => handleSelectGrade(tab.id)}
                className={`group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border transition-all duration-150 transform select-none ${
                  isSelected
                    ? `${style.activeBg} ${style.activeBorder} ${style.activeShadow} ${style.activeRing} scale-[1.04] -translate-y-1 font-black`
                    : `${style.inactiveBg} ${style.inactiveBorder} ${style.inactiveText} ${style.inactiveShadow} hover:scale-[1.02] active:translate-y-0.5 active:shadow-none font-bold`
                }`}
              >
                {/* Badge phân cấp */}
                <span
                  className={`absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${
                    isSelected
                      ? "bg-white/25 text-white backdrop-blur-sm shadow-xs"
                      : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 shadow-xs border border-black/5 dark:border-white/5"
                  }`}
                >
                  {style.badge}
                </span>

                <span className="text-2xl sm:text-3xl mb-1.5 filter drop-shadow-sm transition-transform duration-150 group-hover:scale-110">
                  {tab.icon}
                </span>
                <span className="text-sm font-black tracking-tight">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {accessWarning && (
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2 shadow-sm">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{accessWarning}</span>
          </div>
        )}
      </div>

      {/* BỘ LỌC KỲ THI CHO KHỐI ĐANG CHỌN */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
          <Filter className="w-3.5 h-3.5" />
          Kỳ thi trong năm học:
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setSelectedPeriod("all")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-150 transform select-none ${
              selectedPeriod === "all"
                ? "bg-gradient-to-b from-slate-800 to-slate-950 text-white border-t border-slate-600 shadow-[0_3px_0_0_#0f172a] scale-105"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-[0_2px_0_0_#cbd5e1] dark:shadow-[0_2px_0_0_#0f172a] hover:bg-slate-200 dark:hover:bg-slate-750 active:translate-y-0.5 active:shadow-none"
            }`}
          >
            Tất cả các kỳ ({filteredExams.length})
          </button>

          {availablePeriods.map((period) => {
            const isSelected = selectedPeriod === period.id;
            const count = Object.values(SAMPLE_EXAMS).filter(
              (e) => e.grade === selectedGrade && e.examType === period.id
            ).length;

            const isSpecial = Boolean(period.specialForGrade);

            return (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all duration-150 transform select-none ${
                  isSelected
                    ? isSpecial
                      ? "bg-gradient-to-b from-rose-500 via-orange-500 to-amber-600 text-white border-t border-amber-300 shadow-[0_3px_0_0_#9a3412] scale-105"
                      : "bg-gradient-to-b from-blue-600 to-indigo-600 text-white border-t border-blue-300 shadow-[0_3px_0_0_#1e40af] scale-105"
                    : isSpecial
                    ? "bg-rose-50/90 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-850 text-rose-700 dark:text-rose-300 shadow-[0_2px_0_0_#fecdd3] dark:shadow-[0_2px_0_0_#4c0519] hover:bg-rose-100 dark:hover:bg-rose-900/50 active:translate-y-0.5 active:shadow-none"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-[0_2px_0_0_#cbd5e1] dark:shadow-[0_2px_0_0_#0f172a] hover:bg-slate-200 dark:hover:bg-slate-750 active:translate-y-0.5 active:shadow-none"
                }`}
              >
                {isSpecial && <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />}
                <span>{period.label}</span>
                <span className="text-[10px] opacity-80 font-normal">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DANH SÁCH ĐỀ THI */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Đề Thi {activeGradeObj.label}</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
              {filteredExams.length} đề thi
            </span>
          </h3>
        </div>

        {filteredExams.length === 0 ? (
          <div className="text-center py-12 p-6 rounded-3xl bg-card border border-dashed border-slate-300 dark:border-slate-800 space-y-2">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">
              Không có đề thi nào phù hợp với bộ lọc đã chọn.
            </p>
            <p className="text-xs text-slate-500">
              Vui lòng chọn kỳ thi khác hoặc bấm &quot;Tất cả các kỳ&quot; để xem danh sách đầy đủ.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredExams.map((exam) => {
              const periodObj = EXAM_PERIODS.find((p) => p.id === exam.examType);
              const isSpecial = Boolean(periodObj?.specialForGrade);

              return (
                <div
                  key={exam.id}
                  className={`p-5 sm:p-6 rounded-3xl bg-card border transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 ${
                    isSpecial
                      ? "border-amber-400/60 dark:border-amber-500/40 shadow-md shadow-amber-500/10 hover:border-amber-400"
                      : "border-slate-200 dark:border-slate-800 hover:border-primary/40 shadow-sm"
                  }`}
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      {isSpecial ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-black bg-gradient-to-r from-amber-400 to-rose-500 text-white shadow-sm flex items-center gap-1">
                          <Flame className="w-3 h-3" /> {periodObj?.label}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
                          {periodObj?.label || "Đề Thi Khảo Sát"}
                        </span>
                      )}

                      <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <Timer className="w-3.5 h-3.5" /> {exam.durationMinutes} phút
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        • {exam.totalQuestions} câu hỏi
                      </span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Tự động chấm điểm
                      </span>
                    </div>

                    <h4 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100">
                      {exam.title}
                    </h4>

                    {exam.subtitle && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {exam.subtitle}
                      </p>
                    )}
                  </div>

                  <Link
                    href={`/luyen-thi/${exam.id}`}
                    className={`w-full md:w-auto px-6 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-150 transform select-none flex items-center justify-center gap-2 shrink-0 ${
                      isSpecial
                        ? "bg-gradient-to-b from-rose-600 via-orange-600 to-amber-600 text-white border-t border-amber-300 shadow-[0_5px_0_0_#9a3412] hover:brightness-110 active:translate-y-1 active:shadow-none"
                        : "bg-gradient-to-b from-blue-600 via-indigo-600 to-indigo-700 text-white border-t border-blue-400 shadow-[0_5px_0_0_#1e3a8a] hover:from-blue-500 hover:to-indigo-600 active:translate-y-1 active:shadow-none"
                    }`}
                  >
                    <span>Vào làm bài ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

