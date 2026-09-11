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
    return "lop-6";
  }, [user]);

  const [selectedGrade, setSelectedGrade] = useState<string>(defaultGradeId);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("all");
  const [accessWarning, setAccessWarning] = useState<string | null>(null);

  // Danh sách đề thi theo khối đã chọn
  const activeGradeObj = useMemo(() => {
    return GRADE_EXAM_TABS.find((g) => g.id === selectedGrade) || GRADE_EXAM_TABS[0];
  }, [selectedGrade]);

  // Các kỳ thi hợp lệ cho khối lớp đang chọn
  const availablePeriods = useMemo(() => {
    return EXAM_PERIODS.filter((p) => {
      if (!p.specialForGrade) return true;
      return p.specialForGrade === selectedGrade;
    });
  }, [selectedGrade]);

  // Danh sách đề thi được lọc
  const filteredExams = useMemo(() => {
    const allExams = Object.values(SAMPLE_EXAMS);
    return allExams.filter((exam) => {
      // Lọc theo khối
      if (exam.grade && exam.grade !== selectedGrade) return false;
      // Lọc theo kỳ thi
      if (selectedPeriod !== "all") {
        if (exam.examType !== selectedPeriod) return false;
      }
      return true;
    });
  }, [selectedGrade, selectedPeriod]);

  // Kiểm tra quyền khi học sinh bấm chọn khối
  const handleSelectGrade = (gradeId: string) => {
    setAccessWarning(null);

    // Nếu học sinh click khối khác khối mình đăng ký
    if (user && isStudent) {
      const check = canAccessGrade(user, gradeId);
      if (!check.allowed && check.reason === "GRADE_MISMATCH") {
        setAccessWarning(
          `Tài khoản của bạn đăng ký ${check.userGradeLabel}. Bạn được ưu tiên luyện thi các đề thuộc khối của mình.`
        );
      }
    }

    setSelectedGrade(gradeId);
    setSelectedPeriod("all"); // reset bộ lọc kỳ thi
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Banner Hiện Đại */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white shadow-xl space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            Hệ Thống Khảo Sát & Phòng Thi Thử 2026
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-300/30">
            Khối Lớp 6 - 12
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
          Phòng Thi Thử Trực Tuyến Chuẩn Cấu Trúc Bộ GD&ĐT
        </h1>
        <p className="text-xs sm:text-sm text-blue-100 max-w-3xl leading-relaxed">
          Hệ thống đề thi chuẩn hóa phân theo từng khối lớp từ Lớp 6 đến Lớp 12: Đầy đủ các kỳ <strong>Giữa kỳ 1, Cuối kỳ 1, Giữa kỳ 2, Cuối kỳ 2</strong>; đặc biệt <strong>Lớp 9</strong> tích hợp chuyên đề <strong>Ôn thi Tuyển sinh vào lớp 10</strong>, và <strong>Lớp 12</strong> có trọn bộ <strong>Ôn thi TN THPT 2026 & Đánh giá năng lực (ĐHQG, TSA)</strong>.
        </p>
      </div>

      {/* 3 Formats Explainer Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
          <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-black text-xs flex items-center justify-center shrink-0">
            I
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Trắc nghiệm nhiều lựa chọn</div>
            <div className="text-[11px] text-slate-500">0.25đ / câu • 1 đáp án chính xác duy nhất</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
          <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 font-black text-xs flex items-center justify-center shrink-0">
            II
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Trắc nghiệm Đúng / Sai</div>
            <div className="text-[11px] text-slate-500">4 ý / câu • Tính điểm lũy tiến chuẩn BGD (tối đa 1.0đ)</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
          <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-black text-xs flex items-center justify-center shrink-0">
            III
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Trả lời ngắn / Điền số học</div>
            <div className="text-[11px] text-slate-500">0.5đ / câu • Điền kết quả số, phân số hoặc giá trị thực</div>
          </div>
        </div>
      </div>

      {/* THANH CHỌN KHỐI LỚP (TABS) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Chọn Khối Lớp Luyện Thi:
          </h2>
          {user && isStudent && (
            <span className="text-xs text-slate-500 font-medium">
              Bạn đang học: <strong className="text-primary">{user.grade || user.schoolClass || "Chưa chọn"}</strong>
            </span>
          )}
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5 sm:gap-3">
          {GRADE_EXAM_TABS.map((tab) => {
            const isSelected = selectedGrade === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectGrade(tab.id)}
                className={`flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl transition-all duration-150 transform select-none ${
                  isSelected
                    ? "bg-gradient-to-b from-blue-600 via-indigo-600 to-indigo-700 text-white border-t border-blue-300 shadow-[0_5px_0_0_#1e3a8a] scale-[1.04] -translate-y-1 font-black ring-2 ring-blue-400 ring-offset-2 dark:ring-offset-slate-900"
                    : "bg-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-[0_3px_0_0_#e2e8f0] dark:shadow-[0_3px_0_0_#0f172a] hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 active:translate-y-0.5 active:shadow-none font-bold"
                }`}
              >
                <span className="text-xl sm:text-2xl mb-1.5 filter drop-shadow-sm">{tab.icon}</span>
                <span className="text-xs sm:text-sm tracking-tight">{tab.label}</span>
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

