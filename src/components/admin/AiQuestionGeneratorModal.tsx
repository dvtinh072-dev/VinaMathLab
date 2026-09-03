"use client";

import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Bot,
  Sparkles,
  RefreshCw,
  Plus,
  CheckCircle2,
  BookOpen,
  Layers,
  Award,
  Edit3,
  Eye,
  Sliders,
  Check,
  Save,
  ArrowLeft,
  Bookmark,
} from "lucide-react";
import { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { GeometryDiagram } from "@/components/math/GeometryDiagram";
import {
  getCurriculumObjectivesForLesson,
  COGNITIVE_LEVELS,
  CurriculumObjective,
} from "@/data/curriculumStandardsData";
import { generateAiQuestionByCurriculum } from "@/utils/aiQuestionEngine";

interface AiQuestionGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonId: string;
  lessonTitle: string;
  existingQuestions: QuizQuestion[];
  onAddQuestion: (newQuestion: QuizQuestion) => void;
}

export function AiQuestionGeneratorModal({
  isOpen,
  onClose,
  lessonId,
  lessonTitle,
  existingQuestions,
  onAddQuestion,
}: AiQuestionGeneratorModalProps) {
  const [mounted, setMounted] = useState(false);

  const curriculum = useMemo(
    () => getCurriculumObjectivesForLesson(lessonId, lessonTitle),
    [lessonId, lessonTitle]
  );

  // Mức độ nhận thức (Mặc định là Thông hiểu)
  const [selectedLevel, setSelectedLevel] = useState<
    "nhan_biet" | "thong_hieu" | "van_dung" | "van_dung_cao"
  >("thong_hieu");

  // Mục Yêu Cầu Cần Đạt (YCCĐ)
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string>(
    curriculum.objectives[0]?.id || ""
  );

  // Tùy chọn yêu cầu thêm từ giáo viên (prompt)
  const [customNote, setCustomNote] = useState<string>("");

  // Trạng thái câu hỏi vừa được AI sinh ra
  const [generatedQuestion, setGeneratedQuestion] = useState<QuizQuestion | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Tìm objective hiện tại
  const currentObjective = useMemo(() => {
    return (
      curriculum.objectives.find((o) => o.id === selectedObjectiveId) ||
      curriculum.objectives[0]
    );
  }, [curriculum, selectedObjectiveId]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Tự động sinh sẵn 1 câu hỏi mẫu ngay khi mở modal để giáo viên thấy ngay phần xem trước và nút Lưu lại
  useEffect(() => {
    if (isOpen && !generatedQuestion && currentObjective) {
      const initialQ = generateAiQuestionByCurriculum(
        lessonId,
        lessonTitle,
        selectedLevel,
        currentObjective,
        existingQuestions
      );
      setGeneratedQuestion(initialQ);
    }
  }, [isOpen, lessonId, lessonTitle, selectedLevel, currentObjective, existingQuestions, generatedQuestion]);

  if (!isOpen || !mounted) return null;

  // Hàm kích hoạt AI sinh câu hỏi (có hỗ trợ tham số trực tiếp khi click)
  const triggerGenerate = (
    levelOverride?: "nhan_biet" | "thong_hieu" | "van_dung" | "van_dung_cao",
    objectiveOverride?: CurriculumObjective
  ) => {
    setIsGenerating(true);
    const targetLvl = levelOverride || selectedLevel;
    const targetObj = objectiveOverride || currentObjective;
    setTimeout(() => {
      if (targetObj) {
        const q = generateAiQuestionByCurriculum(
          lessonId,
          lessonTitle,
          targetLvl,
          targetObj,
          existingQuestions,
          customNote.trim() || undefined
        );
        setGeneratedQuestion(q);
        setIsEditMode(false);
      }
      setIsGenerating(false);
    }, 180);
  };

  const handleGenerate = () => {
    triggerGenerate();
  };

  // Lưu chỉnh sửa câu hỏi nếu giáo viên muốn sửa thêm
  const handleOptionChange = (idx: number, val: string) => {
    if (!generatedQuestion) return;
    const nextOpts = [...generatedQuestion.options];
    nextOpts[idx] = val;
    setGeneratedQuestion({ ...generatedQuestion, options: nextOpts });
  };

  // Xác nhận thêm câu hỏi vào bài học
  const handleConfirmAdd = () => {
    if (!generatedQuestion) return;
    onAddQuestion(generatedQuestion);
    onClose();
  };

  // Sử dụng createPortal để gắn trực tiếp vào document.body, giải phóng khỏi mọi overflow-hidden và backdrop-blur của cha
  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Khung Modal Rộng Rãi Toàn Màn Hình */}
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[880px] flex flex-col rounded-3xl bg-[#0b1120] border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30 text-white overflow-hidden">
        
        {/* ============================================================= */}
        {/* 1. HEADER CỐ ĐỊNH: TIÊU ĐỀ & NÚT TRỞ RA NGOÀI                */}
        {/* ============================================================= */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-[#0f172a] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/40 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  AI Sinh Câu Hỏi Chuẩn Bộ GD&ĐT
                </h3>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  CT GDPT 2018
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate">
                Bài học: <b className="text-amber-400">{lessonTitle}</b> ({curriculum.chapter})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-black flex items-center gap-1.5 transition-all shadow-sm"
              title="Đóng và trở ra ngoài"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Trở ra ngoài</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================= */}
        {/* 2. BODY CHÍNH: CHIA 2 CỘT RỘNG RÃI TRÊN MÀN HÌNH MÁY TÍNH     */}
        {/* ============================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
          
          {/* CỘT TRÁI (5/12): THIẾT LẬP MỨC ĐỘ & YCCĐ BỘ GIÁO DỤC */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-400 tracking-wider">
                <Sliders className="w-4 h-4" /> 1. Thiết Lập Mức Độ & YCCĐ
              </div>

              {/* Chọn Mức Độ Nhận Thức (4 Khối) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Mức độ nhận thức (Chuẩn đánh giá năng lực):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {COGNITIVE_LEVELS.map((lvl) => {
                    const isSel = selectedLevel === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl.id as any);
                          triggerGenerate(lvl.id as any, currentObjective);
                        }}
                        className={`p-2.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between gap-1 ${
                          isSel
                            ? `${lvl.color} ring-2 ring-purple-400 shadow-md scale-[1.02]`
                            : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-black text-xs">{lvl.name}</span>
                          {isSel && <Check className="w-3.5 h-3.5 text-current" />}
                        </div>
                        <span className="text-[10px] leading-tight opacity-80 line-clamp-2">
                          {lvl.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Chọn Yêu Cầu Cần Đạt (YCCĐ) theo Chương trình 2018 */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Yêu Cầu Cần Đạt (YCCĐ) của Bộ GD&ĐT:</span>
                  <span className="text-[10px] font-normal text-slate-400">
                    {curriculum.objectives.length} mục tiêu
                  </span>
                </label>
                <div className="grid grid-cols-1 gap-2 max-h-56 overflow-y-auto pr-1">
                  {curriculum.objectives.map((obj) => {
                    const isSel = selectedObjectiveId === obj.id;
                    return (
                      <div
                        key={obj.id}
                        onClick={() => {
                          setSelectedObjectiveId(obj.id);
                          triggerGenerate(selectedLevel, obj);
                        }}
                        className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                          isSel
                            ? "bg-purple-950/50 border-purple-400 text-purple-100 shadow-sm"
                            : "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px] shrink-0 font-bold">
                          {obj.code}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-white leading-snug">{obj.title}</p>
                          <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                            {obj.description}
                          </p>
                        </div>
                        {isSel && <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Gợi ý thêm */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">
                  Gợi ý thêm cho AI (Tùy chọn):
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Ví dụ: Gắn với đời sống thực tế, số liệu nhỏ hơn 50..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            {/* Nút Sinh Đề */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-all shadow-lg shadow-purple-600/30 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AI Đang Phân Tích & Sinh Câu Hỏi...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>✨ AI Sinh Câu Hỏi Tương Tự Mới</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CỘT PHẢI (7/12): XEM TRƯỚC CÂU HỎI TRỰC QUAN & CHỈNH SỬA */}
          <div className="lg:col-span-7 flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-cyan-400 tracking-wider">
                <Eye className="w-4 h-4" /> 2. Xem Trước Trực Quan & Chỉnh Sửa
              </div>

              {generatedQuestion && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditMode(!isEditMode)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1 transition-all"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{isEditMode ? "Xem trước" : "Sửa câu chữ"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerGenerate()}
                    disabled={isGenerating}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-cyan-200 text-xs font-black flex items-center gap-1.5 transition-all shadow-sm active:scale-95 disabled:opacity-50"
                    title="Tạo ngẫu nhiên một câu hỏi khác"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? "animate-spin text-purple-400" : ""}`} />
                    <span>{isGenerating ? "Đang tạo..." : "Đổi câu khác"}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Vùng Thẻ Câu Hỏi */}
            <div className="flex-1 p-4 sm:p-5 rounded-2xl bg-[#0f172a] border-2 border-cyan-500/40 overflow-y-auto space-y-4 shadow-xl">
              {generatedQuestion ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5" />
                      {generatedQuestion.badge}
                    </span>
                    <span className="text-xs text-slate-400">
                      Mức độ: <b className="text-amber-400">{COGNITIVE_LEVELS.find(l => l.id === selectedLevel)?.name}</b>
                    </span>
                  </div>

                  {!isEditMode ? (
                    <div className="space-y-4">
                      {/* Nội dung đề bài */}
                      <div className="text-sm sm:text-base font-bold text-white leading-relaxed p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <MathFormattedText text={generatedQuestion.question} />
                      </div>

                      {/* Hình vẽ nếu có */}
                      {generatedQuestion.diagram && (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                          <GeometryDiagram
                            type={generatedQuestion.diagram.type}
                            caption={generatedQuestion.diagram.caption}
                          />
                        </div>
                      )}

                      {/* 4 Lựa chọn A, B, C, D */}
                      {(() => {
                        const isAnyLong = generatedQuestion.options.some((opt) => opt.length > 28);
                        return (
                          <div className={`grid gap-2.5 ${isAnyLong ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
                            {generatedQuestion.options.map((opt, idx) => {
                              const isCorrect = idx === generatedQuestion.correctIndex;
                              return (
                                <div
                                  key={idx}
                                  className={`p-3 rounded-xl border text-xs font-bold flex items-start justify-between gap-2.5 transition-all ${
                                    isCorrect
                                      ? "bg-emerald-950/90 border-emerald-400 text-emerald-100 shadow-md shadow-emerald-500/20"
                                      : "bg-slate-900/70 border-slate-800 text-slate-300"
                                  }`}
                                >
                                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                                    <span className="w-6 h-6 rounded-lg bg-white/10 text-cyan-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                                      {String.fromCharCode(65 + idx)}
                                    </span>
                                    <span className="flex-1 break-words leading-relaxed">
                                      <MathFormattedText text={opt} />
                                    </span>
                                  </div>
                                  {isCorrect && (
                                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-black shrink-0 mt-0.5">
                                      Đáp án đúng ✅
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })()}

                      {/* Lời giải chi tiết */}
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-cyan-500/30 text-xs space-y-1.5">
                        <span className="text-amber-300 font-black uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Lời giải chi tiết từng bước:
                        </span>
                        <div className="text-slate-100 leading-relaxed font-medium">
                          <MathFormattedText text={generatedQuestion.explanation} />
                        </div>
                      </div>

                      {/* Nguồn tài liệu trích dẫn */}
                      {generatedQuestion.source && (
                        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-2 text-xs">
                          <Bookmark className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] uppercase font-black tracking-wider text-cyan-400 block">
                              Nguồn gốc câu hỏi:
                            </span>
                            <span className="font-bold text-slate-100">
                              {generatedQuestion.source}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* CHẾ ĐỘ SỬA CÂU CHỮ */
                    <div className="space-y-3.5">
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 block mb-1">
                          Nội dung câu hỏi:
                        </label>
                        <textarea
                          rows={3}
                          value={generatedQuestion.question}
                          onChange={(e) =>
                            setGeneratedQuestion({
                              ...generatedQuestion,
                              question: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {generatedQuestion.options.map((opt, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center justify-between text-[11px] font-bold">
                              <span>Phương án {String.fromCharCode(65 + idx)}:</span>
                              <label className="flex items-center gap-1 cursor-pointer text-emerald-400">
                                <input
                                  type="radio"
                                  name="aiCorrectIndex"
                                  checked={generatedQuestion.correctIndex === idx}
                                  onChange={() =>
                                    setGeneratedQuestion({
                                      ...generatedQuestion,
                                      correctIndex: idx,
                                    })
                                  }
                                />
                                <span>Đáp án đúng</span>
                              </label>
                            </div>
                            <input
                              type="text"
                              value={opt}
                              onChange={(e) => handleOptionChange(idx, e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-300 block mb-1">
                          Lời giải chi tiết:
                        </label>
                        <textarea
                          rows={2}
                          value={generatedQuestion.explanation}
                          onChange={(e) =>
                            setGeneratedQuestion({
                              ...generatedQuestion,
                              explanation: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-300 block mb-1">
                          Nguồn tài liệu trích dẫn:
                        </label>
                        <input
                          type="text"
                          value={generatedQuestion.source || ""}
                          onChange={(e) =>
                            setGeneratedQuestion({
                              ...generatedQuestion,
                              source: e.target.value,
                            })
                          }
                          placeholder="Ví dụ: Chuyên đề Dạy thêm Toán 6 KNTT (Thư mục Anti/Tài Liệu Lớp 6)"
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400 space-y-3">
                  <Bot className="w-12 h-12 text-purple-400 animate-pulse" />
                  <p className="text-xs">
                    👈 Chọn tiêu chí bên trái và bấm <b>&quot;AI Sinh Câu Hỏi&quot;</b> để xem trước câu hỏi tại đây.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/* 3. FOOTER CỐ ĐỊNH: LUÔN HIỆN RÕ NÚT "TRỞ RA NGOÀI" & "LƯU LẠI" */}
        {/* ============================================================= */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#0f172a] flex items-center justify-between gap-3 shrink-0 shadow-2xl">
          {/* NÚT TRỞ RA NGOÀI */}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Trở ra ngoài</span>
          </button>

          {/* NÚT LƯU LẠI */}
          {generatedQuestion && (
            <button
              type="button"
              onClick={handleConfirmAdd}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Lưu lại câu hỏi này</span>
            </button>
          )}
        </div>

      </div>
    </div>,
    document.body
  );
}
