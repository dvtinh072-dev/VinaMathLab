"use client";

import React, { useState, useEffect, useMemo } from "react";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { BankQuestion, QuestionBankCatalog, CognitiveLevel, QuestionType } from "@/types/questionBank";
import {
  BookOpen,
  X,
  Search,
  CheckCircle2,
  Sparkles,
  CheckSquare,
  Edit3,
  Bookmark,
  Layers,
  Filter,
  RefreshCw,
  Loader2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

interface QuestionBankViewerModalProps {
  onClose: () => void;
  onOpenDrawModal?: (chapterId?: string) => void;
}

export function QuestionBankViewerModal({ onClose, onOpenDrawModal }: QuestionBankViewerModalProps) {
  const [catalog, setCatalog] = useState<QuestionBankCatalog | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string>("chuong-1");
  const [questions, setQuestions] = useState<BankQuestion[]>([]);
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(true);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  // Filters
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAnswers, setShowAnswers] = useState(true);

  // Fetch Catalog
  useEffect(() => {
    async function loadCatalog() {
      setIsLoadingCatalog(true);
      try {
        const res = await fetch("/api/teacher/exams/bank-stats?gradeNumber=10");
        const data = await res.json();
        if (data.success && data.catalog) {
          setCatalog(data.catalog);
          if (data.catalog.chapters && data.catalog.chapters.length > 0) {
            setSelectedChapterId(data.catalog.chapters[0].chapterId);
          }
        }
      } catch (err) {
        console.error("Lỗi tải mục lục ngân hàng đề:", err);
      } finally {
        setIsLoadingCatalog(false);
      }
    }
    loadCatalog();
  }, []);

  // Fetch Chapter Questions when selectedChapterId changes
  useEffect(() => {
    if (!selectedChapterId) return;

    async function loadQuestions() {
      setIsLoadingQuestions(true);
      try {
        const res = await fetch(`/api/teacher/exams/bank-questions?gradeNumber=10&chapterId=${selectedChapterId}`);
        const data = await res.json();
        if (data.success && data.questions) {
          setQuestions(data.questions);
        } else {
          setQuestions([]);
        }
      } catch (err) {
        console.error("Lỗi tải câu hỏi:", err);
        setQuestions([]);
      } finally {
        setIsLoadingQuestions(false);
      }
    }
    loadQuestions();
  }, [selectedChapterId]);

  // Selected Chapter Info
  const currentChapter = useMemo(() => {
    if (!catalog?.chapters) return null;
    return catalog.chapters.find((c) => c.chapterId === selectedChapterId) || catalog.chapters[0];
  }, [catalog, selectedChapterId]);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    let list = questions;

    if (selectedType !== "all") {
      list = list.filter((q) => q.type === selectedType);
    }

    if (selectedLevel !== "all") {
      list = list.filter((q) => q.level === selectedLevel);
    }

    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        const stem = (item.stem || "").toLowerCase();
        const expl = (item.explanation || "").toLowerCase();
        const src = ((item as any).source || (item as any).sourceCitation || "").toLowerCase();
        return stem.includes(qLower) || expl.includes(qLower) || src.includes(qLower);
      });
    }

    return list;
  }, [questions, selectedType, selectedLevel, searchQuery]);

  // Helper render Difficulty badge
  const renderDifficultyBadge = (diff?: string) => {
    if (!diff) return null;
    const d = diff.toUpperCase();
    if (d === "NB") {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-500/20 text-blue-300 border border-blue-500/30">
          Nhận biết (NB)
        </span>
      );
    }
    if (d === "TH") {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Thông hiểu (TH)
        </span>
      );
    }
    if (d === "VD") {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
          Vận dụng (VD)
        </span>
      );
    }
    if (d === "VDC") {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/30">
          Vận dụng cao (VDC)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-slate-300 border border-slate-700">
        {diff}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-6xl rounded-3xl bg-[#0b1329] border-2 border-cyan-500/40 p-4 sm:p-6 space-y-4 shadow-2xl overflow-hidden max-h-[96vh] flex flex-col text-white">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-800 shrink-0 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 border border-cyan-400/50 flex items-center justify-center text-slate-950 font-black shrink-0 shadow-lg shadow-cyan-500/20">
              <BookOpen className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-white">
                  Ngân Hàng Câu Hỏi Chuẩn Hóa Toán 10 (2025)
                </h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                  {catalog?.totalQuestions || 1197} câu hỏi hoàn hảo
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  10 Chương SGK Kết Nối Tri Thức
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Duyệt xem toàn bộ câu hỏi trắc nghiệm, đúng/sai và trả lời ngắn với định dạng KaTeX chuẩn như bài học.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar: Chapter selector, Filters, Search & Toggle Answer */}
        <div className="space-y-2.5 shrink-0">
          {/* Chapter Tabs Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {catalog?.chapters?.map((ch) => {
              const isSelected = ch.chapterId === selectedChapterId;
              return (
                <button
                  key={ch.chapterId}
                  onClick={() => setSelectedChapterId(ch.chapterId)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 ring-2 ring-cyan-300"
                      : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  <span>{ch.chapterName}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    {ch.totalQuestions}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 rounded-2xl bg-[#0e172e] border border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white font-bold focus:outline-none focus:border-cyan-400"
              >
                <option value="all">Tất cả dạng câu</option>
                <option value="multiple_choice">Phần I: Trắc nghiệm 4 lựa chọn</option>
                <option value="true_false">Phần II: Đúng / Sai 4 ý</option>
                <option value="short_answer">Phần III: Trả lời ngắn</option>
              </select>

              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white font-bold focus:outline-none focus:border-cyan-400"
              >
                <option value="all">Tất cả mức độ</option>
                <option value="NB">Nhận biết (NB)</option>
                <option value="TH">Thông hiểu (TH)</option>
                <option value="VD">Vận dụng (VD)</option>
                <option value="VDC">Vận dụng cao (VDC)</option>
              </select>

              {/* Show Answers Toggle */}
              <button
                type="button"
                onClick={() => setShowAnswers(!showAnswers)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  showAnswers
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 ring-2 ring-emerald-300"
                    : "bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{showAnswers ? "Đang Hiện Lời Giải" : "Hiện Lời Giải & Đáp Án"}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Quick Search */}
              <div className="relative w-48 sm:w-60">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm trong chương..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Draw Exam from this chapter */}
              {onOpenDrawModal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenDrawModal(selectedChapterId);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Rút Đề Từ Chương Này</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Cards Stream */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1.5">
          {isLoadingQuestions ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-3 text-cyan-400">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p className="text-xs font-bold text-slate-400">Đang tải danh sách câu hỏi chuẩn hóa...</p>
            </div>
          ) : filteredQuestions.length === 0 ? (
            <div className="p-10 rounded-2xl bg-slate-900/50 border border-slate-800 text-center space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
              <p className="text-sm text-slate-300 font-bold">Không tìm thấy câu hỏi nào phù hợp với bộ lọc.</p>
              <p className="text-xs text-slate-500">Hãy thử đổi mức độ nhận thức hoặc xóa từ khóa tìm kiếm.</p>
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const globalIndex = idx + 1;

              // DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN
              if (q.type === "multiple_choice") {
                const options = q.options || [];
                const isAnyOptionLong = options.some((opt: any) => (opt.text || opt || "").length > 32);

                return (
                  <div
                    key={q.id || idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#131B2E] border border-cyan-500/30 space-y-3.5 shadow-lg transition-all hover:border-cyan-400/60"
                  >
                    {/* Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-slate-800/80">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>Câu {globalIndex} (Trắc nghiệm 4 lựa chọn)</span>
                        </span>

                        {renderDifficultyBadge(q.level)}

                        <span className="text-[10px] font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                          0.25 điểm
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {((q as any).source || (q as any).sourceCitation) && (
                          <span
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 truncate max-w-[240px]"
                            title={(q as any).source || (q as any).sourceCitation}
                          >
                            <Bookmark className="w-2.5 h-2.5 shrink-0 text-cyan-400" />
                            <span className="truncate">{(q as any).source || (q as any).sourceCitation}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Question Stem */}
                    <div className="text-base sm:text-lg font-bold text-white leading-relaxed tracking-wide">
                      <MathFormattedText text={q.stem} />
                    </div>

                    {/* Options Grid */}
                    <div className={`grid gap-2.5 pt-1 ${isAnyOptionLong ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
                      {options.map((opt: any, optIdx: number) => {
                        const optKey = opt.key || String.fromCharCode(65 + optIdx);
                        const optText = typeof opt === "string" ? opt : opt.text;
                        const isCorrect = showAnswers && q.correctKey === optKey;

                        return (
                          <div
                            key={optKey}
                            className={`p-3 sm:p-3.5 rounded-xl border-2 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-3 transition-all ${
                              isCorrect
                                ? "bg-emerald-950/90 border-emerald-400 text-emerald-100 shadow-md shadow-emerald-500/25"
                                : "bg-[#0f172a]/90 border-slate-700/80 text-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <span
                                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-black text-xs sm:text-sm flex items-center justify-center shrink-0 border ${
                                  isCorrect
                                    ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-sm"
                                    : "bg-white/10 text-cyan-300 border-white/15"
                                }`}
                              >
                                {optKey}
                              </span>
                              <div className="font-bold flex-1 min-w-0 break-words leading-relaxed text-sm sm:text-base">
                                <MathFormattedText text={optText} />
                              </div>
                            </div>

                            {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Lời giải chi tiết */}
                    {showAnswers && q.explanation && (
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-cyan-400/40 space-y-1.5 animate-in fade-in duration-150 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-amber-300 font-black text-xs uppercase tracking-wide">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Lời Giải Chi Tiết (Đáp án đúng: {q.correctKey})</span>
                          </div>
                          <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            Đáp án: {q.correctKey}
                          </span>
                        </div>
                        <div className="text-slate-100 leading-relaxed font-medium pt-1 text-xs sm:text-sm">
                          <MathFormattedText text={q.explanation} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // DẠNG 2: CÂU HỎI ĐÚNG / SAI 4 Ý
              if (q.type === "true_false") {
                const subQuestions = (q as any).subQuestions || (q as any).subItems || q.statements || [];

                return (
                  <div
                    key={q.id || idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#131B2E] border border-teal-500/40 space-y-3.5 shadow-lg transition-all hover:border-teal-400/60"
                  >
                    {/* Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-slate-800/80">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-teal-500/20 text-teal-300 border border-teal-500/30">
                          <CheckSquare className="w-3 h-3 text-teal-400" />
                          <span>Câu {globalIndex} (Đúng / Sai 4 ý)</span>
                        </span>

                        {renderDifficultyBadge(q.level)}

                        <span className="text-[10px] font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                          0.1 - 0.25 - 0.5 - 1.0 điểm
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {((q as any).source || (q as any).sourceCitation) && (
                          <span
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-teal-950/60 text-teal-300 border border-teal-500/30 truncate max-w-[240px]"
                            title={(q as any).source || (q as any).sourceCitation}
                          >
                            <Bookmark className="w-2.5 h-2.5 shrink-0 text-teal-400" />
                            <span className="truncate">{(q as any).source || (q as any).sourceCitation}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Question Stem */}
                    <div className="text-base sm:text-lg font-bold text-white leading-relaxed tracking-wide">
                      <MathFormattedText text={q.stem} />
                    </div>

                    {/* Sub-items List a, b, c, d */}
                    <div className="space-y-2.5 pt-1">
                      {subQuestions.map((sub: any, subIdx: number) => {
                        const key = sub.key || sub.id || ["a", "b", "c", "d"][subIdx];
                        const isCorrectVal = Boolean(sub.isCorrect ?? sub.correctAnswer);

                        return (
                          <div
                            key={key}
                            className="p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm"
                          >
                            <div className="flex items-start gap-2.5 flex-1 min-w-0">
                              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-teal-500/20 text-teal-300 font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/30">
                                {key}
                              </span>
                              <div className="text-slate-100 font-medium leading-relaxed break-words text-xs sm:text-sm pt-0.5">
                                <MathFormattedText text={sub.text || sub.prompt} />
                              </div>
                            </div>

                            {showAnswers && (
                              <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                                <span
                                  className={`px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1 border shadow-sm ${
                                    isCorrectVal
                                      ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/60 shadow-emerald-500/20"
                                      : "bg-rose-950/80 text-rose-300 border-rose-500/60 shadow-rose-500/20"
                                  }`}
                                >
                                  {isCorrectVal ? (
                                    <>
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                      <span>ĐÚNG</span>
                                    </>
                                  ) : (
                                    <>
                                      <X className="w-3.5 h-3.5 text-rose-400" />
                                      <span>SAI</span>
                                    </>
                                  )}
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Lời giải chi tiết */}
                    {showAnswers && q.explanation && (
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-teal-950/90 via-slate-900 to-emerald-950/90 border border-teal-400/40 space-y-1.5 animate-in fade-in duration-150 text-xs">
                        <div className="flex items-center gap-1.5 text-amber-300 font-black text-xs uppercase tracking-wide">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Hướng Dẫn Giải Chi Tiết:</span>
                        </div>
                        <div className="text-slate-100 leading-relaxed font-medium pt-1 text-xs sm:text-sm">
                          <MathFormattedText text={q.explanation} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // DẠNG 3: TRẢ LỜI NGẮN
              if (q.type === "short_answer") {
                return (
                  <div
                    key={q.id || idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#131B2E] border border-amber-500/40 space-y-3.5 shadow-lg transition-all hover:border-amber-400/60"
                  >
                    {/* Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-slate-800/80">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          <Edit3 className="w-3 h-3 text-amber-400" />
                          <span>Câu {globalIndex} (Trả lời ngắn)</span>
                        </span>

                        {renderDifficultyBadge(q.level)}

                        <span className="text-[10px] font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                          0.5 điểm
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {((q as any).source || (q as any).sourceCitation) && (
                          <span
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-950/60 text-amber-300 border border-amber-500/30 truncate max-w-[240px]"
                            title={(q as any).source || (q as any).sourceCitation}
                          >
                            <Bookmark className="w-2.5 h-2.5 shrink-0 text-amber-400" />
                            <span className="truncate">{(q as any).source || (q as any).sourceCitation}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Question Stem */}
                    <div className="text-base sm:text-lg font-bold text-white leading-relaxed tracking-wide">
                      <MathFormattedText text={q.stem} />
                    </div>

                    {/* Đáp số & Hướng dẫn */}
                    {showAnswers ? (
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/90 via-slate-900 to-yellow-950/90 border border-amber-400/40 space-y-2 animate-in fade-in duration-150 text-xs">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-amber-300 text-xs uppercase tracking-wide flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Đáp số chính xác:</span>
                          </span>
                          <span className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 font-black text-sm sm:text-base">
                            <MathFormattedText text={String(q.correctAnswer)} />
                          </span>
                        </div>

                        {q.explanation && (
                          <div className="pt-1 text-slate-100 leading-relaxed font-medium text-xs sm:text-sm">
                            <span className="font-semibold text-amber-400">Lời giải chi tiết: </span>
                            <MathFormattedText text={q.explanation} />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-dashed border-slate-700 text-xs text-slate-400 italic flex items-center gap-2">
                        <Edit3 className="w-4 h-4 text-slate-500 shrink-0" />
                        <span>Học sinh điền kết quả vào ô trả lời trên phiếu làm bài...</span>
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 shrink-0 gap-2">
          <span>
            Đang hiển thị <strong className="text-cyan-400">{filteredQuestions.length}</strong> / {questions.length} câu hỏi của {currentChapter?.chapterName}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all cursor-pointer border border-slate-700 hover:border-slate-600"
          >
            Đóng Ngân Hàng
          </button>
        </div>
      </div>
    </div>
  );
}
