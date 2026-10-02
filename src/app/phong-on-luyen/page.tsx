"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  PRACTICE_EXAMS_DATABASE, 
  DGNL_CATEGORIES, 
  PracticeExamItem, 
  DgnlCategoryInfo 
} from "@/data/practiceRoomsData";
import { 
  Trophy, Search, Filter, BookOpen, Clock, CheckCircle2, 
  Sparkles, Award, ShieldAlert, GraduationCap, Flame, ArrowRight,
  Shield, Compass, School, FileText, ChevronRight, Target, Download,
  Layers, CheckSquare, HelpCircle, ExternalLink
} from "lucide-react";

const GRADE_LIST = [
  { id: "lop-6", label: "Toán 6", gradeNumber: 6, icon: "🌱", color: "from-amber-500 to-orange-500", badge: "THCS" },
  { id: "lop-7", label: "Toán 7", gradeNumber: 7, icon: "🔺", color: "from-sky-500 to-cyan-600", badge: "THCS" },
  { id: "lop-8", label: "Toán 8", gradeNumber: 8, icon: "🔷", color: "from-blue-600 to-indigo-600", badge: "THCS" },
  { id: "lop-9", label: "Toán 9", gradeNumber: 9, icon: "🎯", color: "from-rose-500 to-red-600", badge: "Vào 10 & Chuyên", isSpecial: true },
  { id: "lop-10", label: "Toán 10", gradeNumber: 10, icon: "📐", color: "from-emerald-500 to-teal-600", badge: "THPT" },
  { id: "lop-11", label: "Toán 11", gradeNumber: 11, icon: "🚀", color: "from-violet-600 to-purple-600", badge: "THPT" },
  { id: "lop-12", label: "Toán 12", gradeNumber: 12, icon: "👑", color: "from-amber-500 via-rose-500 to-purple-600", badge: "TN THPT & ĐGNL", isSpecial: true },
];

export default function PhongOnLuyenPage() {
  const [selectedGrade, setSelectedGrade] = useState<string>("lop-12");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSubTab, setSelectedSubTab] = useState<string>("all");
  const [selectedDgnlBranch, setSelectedDgnlBranch] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [selectedExamForModal, setSelectedExamForModal] = useState<PracticeExamItem | null>(null);

  // Switch grade handler with sub-tab reset
  const handleSelectGrade = (gradeId: string) => {
    setSelectedGrade(gradeId);
    setSelectedSubTab("all");
    setSelectedDgnlBranch("all");
  };

  // Filter exams based on current state
  const filteredExams = useMemo(() => {
    return PRACTICE_EXAMS_DATABASE.filter((exam) => {
      // Grade check
      if (exam.grade !== selectedGrade) return false;

      // Search query check
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchTitle = exam.title.toLowerCase().includes(q);
        const matchSubtitle = exam.subtitle.toLowerCase().includes(q);
        const matchTags = exam.tags.some(t => t.toLowerCase().includes(q));
        const matchTarget = exam.examTarget ? exam.examTarget.toLowerCase().includes(q) : false;
        if (!matchTitle && !matchSubtitle && !matchTags && !matchTarget) return false;
      }

      // Difficulty filter
      if (difficultyFilter !== "all" && exam.difficulty !== difficultyFilter) {
        return false;
      }

      // Grade 9 specific sub-tabs
      if (selectedGrade === "lop-9") {
        if (selectedSubTab === "tuyen-sinh-10" && exam.category !== "tuyen-sinh-10") return false;
        if (selectedSubTab === "tuyen-sinh-10-chuyen" && exam.category !== "tuyen-sinh-10-chuyen") return false;
        if (selectedSubTab === "dinh-ky" && exam.category !== "dinh-ky") return false;
      }

      // Grade 12 specific sub-tabs
      if (selectedGrade === "lop-12") {
        if (selectedSubTab === "tot-nghiep-thpt" && exam.category !== "tot-nghiep-thpt") return false;
        if (selectedSubTab === "dinh-ky" && exam.category !== "dinh-ky") return false;
        if (selectedSubTab === "dgnl") {
          const isDgnl = ["dgnl-dhqg", "dgnl-cong-an", "dgnl-quan-doi", "vsat-can-tho"].includes(exam.category);
          if (!isDgnl) return false;
          if (selectedDgnlBranch !== "all" && exam.category !== selectedDgnlBranch) return false;
        }
      }

      return true;
    });
  }, [selectedGrade, searchQuery, selectedSubTab, selectedDgnlBranch, difficultyFilter]);

  // Current active grade info
  const activeGradeInfo = useMemo(() => {
    return GRADE_LIST.find(g => g.id === selectedGrade) || GRADE_LIST[6];
  }, [selectedGrade]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ========================================================================= */}
        {/* HERO BANNER SECTION */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
              <span>Phòng Ôn Luyện Chuyên Sâu VinaMath</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Trung Tâm Ôn Luyện Toán Học <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-rose-400 bg-clip-text text-transparent">
                Toàn Diện Từ Lớp 6 Đến Lớp 12
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Hệ thống phòng ôn luyện trực tuyến chuẩn ma trận <strong>GDPT 2018</strong>. Đặc biệt tích hợp chuyên trang 
              <span className="text-rose-400 font-bold"> Ôn thi Tuyển sinh vào 10 (Lớp 9)</span> và 
              <span className="text-amber-400 font-bold"> Ôn thi Tốt nghiệp THPT & Đánh giá Năng lực (Lớp 12)</span> phân hóa theo 
              <strong> ĐHQG Hà Nội & TP.HCM, Bộ Công An, Khối Trường Quân Đội, và Kỳ thi V-SAT Đại học Cần Thơ</strong>.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-sky-400">7 Khối Lớp</div>
                <div className="text-xs text-slate-400 font-medium">Từ Lớp 6 đến Lớp 12</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-rose-400">Vào 10 & Chuyên</div>
                <div className="text-xs text-slate-400 font-medium">Hà Nội, TP.HCM, Chuyên SP</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-amber-400">TN THPT 2025+</div>
                <div className="text-xs text-slate-400 font-medium">Chuẩn ma trận Bộ GD&ĐT</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">4 Nhánh ĐGNL</div>
                <div className="text-xs text-slate-400 font-medium">ĐHQG, CA, QĐ, V-SAT Cần Thơ</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* GRADE SELECTOR TABS */}
        {/* ========================================================================= */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Chọn Khối Lớp Cần Ôn Luyện</span>
            </h2>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Nhấp vào khối lớp để xem danh mục đề ôn tập tương ứng
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {GRADE_LIST.map((grade) => {
              const isSelected = selectedGrade === grade.id;
              return (
                <button
                  key={grade.id}
                  onClick={() => handleSelectGrade(grade.id)}
                  type="button"
                  className={`relative p-3.5 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1.5 text-center ${
                    isSelected
                      ? `bg-gradient-to-b ${grade.color} text-white border-transparent shadow-lg shadow-indigo-500/20 scale-[1.03] ring-2 ring-white/30`
                      : "bg-slate-900/80 hover:bg-slate-800/90 text-slate-300 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {grade.isSpecial && (
                    <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow">
                      HOT
                    </span>
                  )}
                  <span className="text-2xl sm:text-3xl">{grade.icon}</span>
                  <span className="font-black text-sm sm:text-base leading-none">{grade.label}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    {grade.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SPECIAL GRADE 9 & GRADE 12 SUB-NAVBAR TABS */}
        {/* ========================================================================= */}
        {selectedGrade === "lop-9" && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-rose-950/40 border border-rose-500/30 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                <Target className="w-4 h-4 text-rose-400" />
                <span>Mục tiêu Lớp 9: Ôn tập định kỳ & Luyện thi Tuyển sinh vào 10 THPT</span>
              </div>
              <span className="text-xs text-rose-300/80">Cấu trúc đề công lập & trường chuyên</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedSubTab("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSubTab === "all"
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Tất Cả Đề Lớp 9
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubTab("tuyen-sinh-10")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedSubTab === "tuyen-sinh-10"
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <span>🏛️ Tuyển Sinh 10 Công Lập</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/30">Hà Nội, TP.HCM...</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubTab("tuyen-sinh-10-chuyen")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedSubTab === "tuyen-sinh-10-chuyen"
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <span>🏆 Tuyển Sinh 10 Chuyên</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/30">KHTN, Sư Phạm...</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubTab("dinh-ky")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSubTab === "dinh-ky"
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                📖 Ôn Tập Định Kỳ (GK1, CK1, GK2, CK2)
              </button>
            </div>
          </div>
        )}

        {selectedGrade === "lop-12" && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                <CrownIcon className="w-4 h-4 text-amber-400" />
                <span>Mục tiêu Lớp 12: Tốt Nghiệp THPT & Các Kỳ Thi Đánh Giá Năng Lực 2026</span>
              </div>
              <span className="text-xs text-purple-300/80">Phân luồng tuyển sinh Đại học trên toàn quốc</span>
            </div>

            {/* Level 1 Sub-tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedSubTab("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedSubTab === "all"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Tất Cả Đề Lớp 12
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubTab("tot-nghiep-thpt")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedSubTab === "tot-nghiep-thpt"
                    ? "bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-black shadow-md"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <span>🎓 Ôn Thi Tốt Nghiệp THPT (Chuẩn 2025)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20">Bộ GD&ĐT</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubTab("dgnl")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedSubTab === "dgnl"
                    ? "bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md shadow-indigo-500/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <span>⚡ Ôn Luyện Đánh Giá Năng Lực (ĐGNL)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30">4 Khối Chuyên Sâu</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubTab("dinh-ky")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedSubTab === "dinh-ky"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                📖 Ôn Định Kỳ SGK 12
              </button>
            </div>

            {/* Level 2 Sub-tabs: 4 DGNL Categories */}
            {selectedSubTab === "dgnl" && (
              <div className="pt-2 border-t border-white/10 space-y-2.5">
                <div className="text-xs text-indigo-300 font-bold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Chọn Phân Khối Kỳ Thi Đánh Giá Năng Lực:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {DGNL_CATEGORIES.map((cat) => {
                    const isBranchActive = selectedDgnlBranch === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedDgnlBranch(cat.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1 ${
                          isBranchActive
                            ? `bg-gradient-to-br ${cat.color} text-white border-white/30 shadow-lg scale-[1.02]`
                            : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">{cat.icon}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isBranchActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                          }`}>
                            {cat.badge}
                          </span>
                        </div>
                        <div className="font-bold text-xs sm:text-sm mt-1">{cat.name}</div>
                        <div className="text-[11px] opacity-80 line-clamp-2 leading-snug">
                          {cat.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SEARCH & FILTER CONTROLS */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Tìm kiếm đề thi ${activeGradeInfo.label}, chuyên đề, trường...`}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-indigo-400" /> Mức độ:
            </span>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-medium focus:outline-none focus:border-indigo-500"
            >
              <option value="all">Tất Cả Mức Độ</option>
              <option value="CoBan">Cơ Bản (Dưới 7đ)</option>
              <option value="Kha">Khá (7đ - 8đ)</option>
              <option value="Gioi">Giỏi (8đ - 9đ)</option>
              <option value="XuatSac">Xuất Sắc (9đ - 10đ)</option>
            </select>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXAMS GRID SECTION */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Danh Sách Đề Ôn Luyện ({filteredExams.length} đề thi sẵn sàng)</span>
            </h3>
            <span className="text-xs text-slate-400">
              Định dạng bài thi trực tuyến & tài liệu chi tiết
            </span>
          </div>

          {filteredExams.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
              <div className="text-base font-bold text-slate-300">Không tìm thấy đề thi phù hợp</div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Vui lòng thử tìm với từ khóa khác hoặc chuyển sang danh mục đề ôn tập khác.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSubTab("all");
                  setSelectedDgnlBranch("all");
                  setDifficultyFilter("all");
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredExams.map((exam) => (
                <div
                  key={exam.id}
                  className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all flex flex-col justify-between overflow-hidden p-5 space-y-4"
                >
                  {/* Top Header Card */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {exam.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{exam.durationMinutes} phút</span>
                      </div>
                    </div>

                    <h4 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {exam.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {exam.subtitle}
                    </p>
                  </div>

                  {/* Middle Specs */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-500">Cấu trúc đề:</span>
                      <span className="font-semibold text-right max-w-[200px] truncate">{exam.structureNote}</span>
                    </div>
                    {exam.examTarget && (
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-500">Cơ quan ra đề:</span>
                        <span className="font-bold text-amber-300 text-right">{exam.examTarget}</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {exam.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 text-[10px]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    {exam.examId ? (
                      <Link
                        href={`/luyen-thi/${exam.examId}`}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Vào Phòng Thi Ngay</span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedExamForModal(exam)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700 hover:border-indigo-500 transition-all"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Xem Chi Tiết & Ma Trận</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedExamForModal(exam)}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="Xem hướng dẫn giải và ma trận đề"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* DETAILED EXAM PREVIEW MODAL */}
        {/* ========================================================================= */}
        {selectedExamForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 p-6 space-y-5 shadow-2xl overflow-y-auto max-h-[90vh]">
              <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {selectedExamForModal.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5">
                    {selectedExamForModal.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {selectedExamForModal.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedExamForModal(null)}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Thời gian làm bài:</span>
                    <span className="font-bold text-white">{selectedExamForModal.durationMinutes} phút</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Số lượng câu:</span>
                    <span className="font-bold text-white">{selectedExamForModal.totalQuestions} câu hỏi</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Mức độ phân hóa:</span>
                    <span className="font-bold text-amber-400">{selectedExamForModal.difficulty}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-indigo-300 block">Quy cách & Ma trận cấu trúc đề:</span>
                  <p className="text-slate-300 text-xs">
                    {selectedExamForModal.structureNote}
                  </p>
                </div>

                {selectedExamForModal.examTarget && (
                  <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-indigo-200">
                    <strong>Đơn vị áp dụng / Cơ quan khảo thí: </strong>
                    <span>{selectedExamForModal.examTarget}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedExamForModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition-colors"
                >
                  Đóng
                </button>
                {selectedExamForModal.examId ? (
                  <Link
                    href={`/luyen-thi/${selectedExamForModal.examId}`}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center gap-1.5"
                  >
                    <span>Vào Thi Trực Tuyến</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href={`/hoc-tap/${selectedExamForModal.grade}`}
                    className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md hover:bg-indigo-500 transition-all flex items-center gap-1.5"
                  >
                    <span>Vào Học Liệu Khối Lớp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function CrownIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}
