"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  X, 
  Flag, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  HelpCircle,
  BookOpen
} from "lucide-react";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { sendQuestionReport } from "@/lib/questionReportClient";
import { useAuth } from "@/context/AuthContext";

export interface ReportQuestionTarget {
  lessonId: string;
  lessonTitle: string;
  gradeKey?: string;
  questionId: string | number;
  questionBadge?: string;
  sectionTab: "multiple_choice" | "true_false" | "short_answer";
  quizMode: "sgk" | "ai";
  questionText: string;
  selectedAnswer?: string;
  correctAnswer?: string;
  explanation?: string;
}

interface ReportQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  target: ReportQuestionTarget | null;
}

const REPORT_REASONS = [
  { id: "wrong_answer", label: "Sai đáp án trắc nghiệm / kết quả", desc: "Đáp án đúng của hệ thống bị nhầm lẫn" },
  { id: "wrong_question", label: "Sai đề bài / Thiếu dữ kiện", desc: "Đề bài in sai số liệu hoặc thiếu điều kiện" },
  { id: "wrong_solution", label: "Sai lời giải chi tiết", desc: "Các bước giải có bước tính toán hoặc lập luận chưa chuẩn" },
  { id: "typo_latex", label: "Lỗi hiển thị công thức / Hình vẽ", desc: "Công thức toán bị lỗi cú pháp hoặc thiếu sơ đồ" },
  { id: "other", label: "Góp ý / Sai sót khác", desc: "Các vấn đề khác cần Thầy Cô xem xét" },
];

export function ReportQuestionModal({ isOpen, onClose, target }: ReportQuestionModalProps) {
  const { user } = useAuth();
  const [selectedReason, setSelectedReason] = useState<string>("wrong_answer");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSelectedReason("wrong_answer");
      setDescription("");
      setIsSuccess(false);
      setErrorMessage(null);
    }
  }, [isOpen]);

  if (!isOpen || !mounted || !target) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedReason) {
      setErrorMessage("Vui lòng chọn phân loại lỗi.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await sendQuestionReport({
        lessonId: target.lessonId,
        lessonTitle: target.lessonTitle,
        gradeKey: target.gradeKey,
        questionId: target.questionId,
        questionBadge: target.questionBadge,
        sectionTab: target.sectionTab,
        quizMode: target.quizMode,
        questionText: target.questionText,
        selectedAnswer: target.selectedAnswer,
        correctAnswer: target.correctAnswer,
        explanation: target.explanation,
        reportReason: selectedReason,
        description: description.trim(),
        reporter: {
          userId: user?.id,
          studentCode: user?.studentCode,
          fullName: user?.fullName || (user ? user.username : "Học sinh ẩn danh"),
          schoolClass: user?.schoolClass,
          username: user?.username,
        },
      });

      if (res.success) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2200);
      } else {
        setErrorMessage(res.error || "Không thể gửi báo cáo lúc này.");
      }
    } catch {
      setErrorMessage("Đã xảy ra sự cố khi gửi báo cáo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-3xl bg-[#0e1526] border-2 border-rose-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Flag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>Báo Cáo Sai Sót Câu Hỏi</span>
              </h2>
              <p className="text-[11px] text-slate-400">
                Gửi phản hồi trực tiếp đến Thầy Cô quản trị để kiểm tra và chỉnh sửa kịp thời
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            title="Đóng modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          {/* Trích đoạn câu hỏi đang báo cáo */}
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{target.lessonTitle}</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-black">
                {target.questionBadge || "Câu hỏi"}
              </span>
            </div>
            <div className="text-xs text-slate-200 line-clamp-3 leading-relaxed font-medium">
              <MathFormattedText text={target.questionText} />
            </div>
            {target.correctAnswer && (
              <div className="text-[11px] text-emerald-400 pt-1 border-t border-slate-800/80">
                Đáp án hiện tại: <strong className="text-emerald-300">{target.correctAnswer}</strong>
              </div>
            )}
          </div>

          {isSuccess ? (
            <div className="py-8 text-center space-y-3 animate-in zoom-in-95">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-white">Cảm ơn em đã gửi báo cáo!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thông tin sai sót đã được lưu vào hệ thống Quản trị. Thầy Cô sẽ rà soát và cập nhật lại câu hỏi trong thời gian sớm nhất.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Loại lỗi */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  Phân loại sai sót phát hiện được <span className="text-rose-400">*</span>:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {REPORT_REASONS.map((r) => {
                    const isSelected = selectedReason === r.id;
                    return (
                      <label
                        key={r.id}
                        className={`p-2.5 rounded-xl border text-xs cursor-pointer flex items-start gap-2.5 transition-all ${
                          isSelected
                            ? "bg-rose-950/40 border-rose-500 text-white shadow-sm shadow-rose-500/20"
                            : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="reportReason"
                          value={r.id}
                          checked={isSelected}
                          onChange={() => setSelectedReason(r.id)}
                          className="mt-0.5 accent-rose-500 cursor-pointer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold">{r.label}</div>
                          <div className="text-[10px] text-slate-400">{r.desc}</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Mô tả chi tiết */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Mô tả chi tiết lỗi (tùy chọn nhưng nên có):</span>
                  <span className="text-[10px] text-slate-500">Giúp Thầy Cô sửa nhanh hơn</span>
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ví dụ: Em tính ra kết quả là 15 chứ không phải 12, hoặc bước 2 của lời giải bị nhầm dấu âm..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-rose-400 transition-all resize-none placeholder-slate-500 shadow-inner"
                />
              </div>

              {/* Footer buttons */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-bold transition-all cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black text-xs hover:scale-105 active:scale-95 shadow-lg shadow-rose-500/25 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Đang gửi...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Gửi Báo Cáo Ngay</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
