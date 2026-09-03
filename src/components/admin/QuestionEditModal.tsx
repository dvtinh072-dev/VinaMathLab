"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Save, Sparkles, Bot, Eye, CheckCircle2, Shapes, ArrowLeft } from "lucide-react";
import { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { GeometryDiagram, GeometryDiagramProps } from "@/components/math/GeometryDiagram";

interface QuestionEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: QuizQuestion;
  onSave: (updatedQuestion: QuizQuestion) => void;
}

const DIAGRAM_OPTIONS: { value: GeometryDiagramProps["type"] | "none"; label: string }[] = [
  { value: "none", label: "Không sử dụng hình vẽ" },
  { value: "tam-giac-deu", label: "Tam giác đều ABC" },
  { value: "hinh-vuong", label: "Hình vuông ABCD" },
  { value: "luc-giac-deu", label: "Lục giác đều ABCDEF" },
  { value: "hinh-chu-nhat", label: "Hình chữ nhật ABCD" },
  { value: "hinh-thoi", label: "Hình thoi ABCD (2 đường chéo vuông góc)" },
  { value: "hinh-binh-hanh", label: "Hình bình hành ABCD" },
  { value: "hinh-thang-can", label: "Hình thang cân ABCD" },
  { value: "doan-thang-trung-diem", label: "Đoạn thẳng & Trung điểm M" },
  { value: "goc-vuong", label: "Góc vuông (90°)" },
  { value: "goc-nhon", label: "Góc nhọn (< 90°)" },
  { value: "goc-tu", label: "Góc tù (> 90°)" },
  { value: "goc-bet", label: "Góc bẹt (180°)" },
  { value: "doi-xung-truc", label: "Hình có trục đối xứng d" },
  { value: "doi-xung-tam", label: "Hình có tâm đối xứng O" },
];

export function QuestionEditModal({ isOpen, onClose, question, onSave }: QuestionEditModalProps) {
  const [badge, setBadge] = useState(question.badge || "");
  const [qText, setQText] = useState(question.question || "");
  const [options, setOptions] = useState<string[]>([...question.options]);
  const [correctIndex, setCorrectIndex] = useState<number>(question.correctIndex || 0);
  const [explanation, setExplanation] = useState(question.explanation || "");
  const [source, setSource] = useState(question.source || "");
  const [diagramType, setDiagramType] = useState<string>(question.diagram?.type || "none");
  const [diagramCaption, setDiagramCaption] = useState<string>(question.diagram?.caption || "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleOptionChange = (index: number, val: string) => {
    const next = [...options];
    next[index] = val;
    setOptions(next);
  };

  const handleSave = () => {
    const updated: QuizQuestion = {
      ...question,
      badge: badge.trim(),
      source: source.trim() || undefined,
      question: qText.trim(),
      options: options.map((o) => o.trim()),
      correctIndex,
      explanation: explanation.trim(),
      diagram:
        diagramType !== "none"
          ? {
              type: diagramType as GeometryDiagramProps["type"],
              caption: diagramCaption.trim() || undefined,
            }
          : { type: "none" as any },
    };
    onSave(updated);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0d1322] border-2 border-cyan-500/40 text-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#131b2e]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Chỉnh Sửa Bài Tập / Câu Hỏi (Admin)</h3>
              <p className="text-xs text-cyan-300">Cập nhật trực tiếp nội dung, đáp án, lời giải và hình vẽ toán học</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 2 Columns (Form & Live Preview) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Editor */}
            <div className="space-y-4">
              {/* Badge / Mã bài tập */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Mã bài tập / Tiêu đề (Badge)
                </label>
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  placeholder="Ví dụ: Bài 1.1 SGK Trang 8 hoặc 🤖 Tương tự Bài 1.1"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Đề bài câu hỏi */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Nội dung Đề bài (Hỗ trợ phân số ví dụ -3/4, 21/28 và $KaTeX$)
                </label>
                <textarea
                  rows={3}
                  value={qText}
                  onChange={(e) => setQText(e.target.value)}
                  placeholder="Nhập nội dung câu hỏi..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* 4 Lựa chọn và Đáp án đúng */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">
                  4 Phương án A, B, C, D (Click chấm tròn để chọn đáp án đúng)
                </label>
                {options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCorrectIndex(idx)}
                      className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center shrink-0 border transition-all ${
                        correctIndex === idx
                          ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/30"
                          : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                      }`}
                      title={correctIndex === idx ? "Đáp án ĐÚNG" : "Bấm để chọn làm đáp án đúng"}
                    >
                      {String.fromCharCode(65 + idx)}
                    </button>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => handleOptionChange(idx, e.target.value)}
                      placeholder={`Nội dung lựa chọn ${String.fromCharCode(65 + idx)}`}
                      className={`flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border text-xs font-medium focus:outline-none ${
                        correctIndex === idx
                          ? "border-emerald-500/70 text-emerald-200"
                          : "border-slate-700 text-white focus:border-cyan-400"
                      }`}
                    />
                    {correctIndex === idx && (
                      <span className="text-[10px] font-black text-emerald-400 shrink-0">Đúng ✅</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Lời giải chi tiết */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Lời giải chi tiết từng bước
                </label>
                <textarea
                  rows={2}
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Giải thích từng bước vì sao đáp án này đúng..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Nguồn tài liệu trích dẫn */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Nguồn tài liệu trích dẫn
                </label>
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Ví dụ: SH6-CĐ 1.3 - Thứ Tự Trong Tập Hợp Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Chọn hình vẽ hình học trực quan */}
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Shapes className="w-3.5 h-3.5" /> Hình vẽ hình học trực quan (Tùy chọn)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-400 mb-0.5">Dạng hình học</label>
                    <select
                      value={diagramType}
                      onChange={(e) => setDiagramType(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      {DIAGRAM_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-400 mb-0.5">Chú thích hình (Caption)</label>
                    <input
                      type="text"
                      value={diagramCaption}
                      onChange={(e) => setDiagramCaption(e.target.value)}
                      placeholder="Ví dụ: a = 6 cm"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Live Preview Column */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-black text-cyan-400 uppercase tracking-wide">
                <Eye className="w-3.5 h-3.5" /> Xem trước hiển thị thực tế trên Đấu Trường:
              </div>

              <div className="p-4 rounded-2xl bg-[#090D16] border-2 border-amber-500/40 space-y-3 text-white shadow-xl">
                {/* Question Badge */}
                {badge && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Sparkles className="w-3 h-3" />
                    {badge}
                  </span>
                )}

                {/* Question */}
                <h4 className="text-sm font-bold text-white leading-snug">
                  <MathFormattedText text={qText || "Nội dung câu hỏi sẽ hiển thị tại đây..."} />
                </h4>

                {/* Diagram Preview */}
                {diagramType !== "none" && (
                  <GeometryDiagram
                    type={diagramType as GeometryDiagramProps["type"]}
                    caption={diagramCaption || undefined}
                  />
                )}

                {/* Options Preview */}
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {options.map((opt, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between gap-2 ${
                        idx === correctIndex
                          ? "bg-emerald-950/80 border-emerald-500 text-emerald-100"
                          : "bg-[#131B2E] border-slate-700 text-white"
                      }`}
                    >
                      <div className="flex items-start gap-2 flex-1 min-w-0">
                        <span className="w-5 h-5 rounded-md bg-white/10 text-cyan-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1 break-words">
                          <MathFormattedText text={opt || `Lựa chọn ${String.fromCharCode(65 + idx)}`} />
                        </span>
                      </div>
                      {idx === correctIndex && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </div>
                  ))}
                </div>

                {/* Solution Preview */}
                {explanation && (
                  <div className="p-2.5 rounded-xl bg-blue-950/80 border border-cyan-400/30 space-y-1">
                    <span className="text-[10px] font-black text-amber-300 uppercase block">
                      💡 Lời giải chi tiết:
                    </span>
                    <div className="text-xs text-slate-200 leading-relaxed font-medium">
                      <MathFormattedText text={explanation} />
                    </div>
                  </div>
                )}

                {/* Source Preview */}
                {source && (
                  <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[10px] text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Nguồn: {source}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3 p-4 border-t border-slate-800 bg-[#131b2e]">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Trở Ra Ngoài</span>
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Lưu Lại</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
