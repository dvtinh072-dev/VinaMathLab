"use client";

import React from "react";
import { PracticeExamResult } from "@/types/practiceExam";
import {
  Award,
  Calendar,
  Clock,
  Trash2,
  X,
  FileCheck,
  TrendingUp,
  History,
  CheckCircle2,
} from "lucide-react";
import { formatTime } from "@/lib/utils";

interface PracticeExamHistoryModalProps {
  examTitle: string;
  history: PracticeExamResult[];
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (id: string) => void;
}

export default function PracticeExamHistoryModal({
  examTitle,
  history,
  isOpen,
  onClose,
  onDelete,
}: PracticeExamHistoryModalProps) {
  if (!isOpen) return null;

  const bestScore = history.length > 0 ? Math.max(...history.map((h) => h.score)) : 0;
  const avgScore =
    history.length > 0
      ? (history.reduce((sum, h) => sum + h.score, 0) / history.length).toFixed(1)
      : "0";

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-[#0e1526] w-full max-w-2xl rounded-3xl border-2 border-cyan-500/40 p-5 sm:p-7 shadow-2xl space-y-5 text-white max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white line-clamp-1">
                Lịch Sử Làm Bài Thi Thử
              </h3>
              <p className="text-xs text-slate-400 line-clamp-1">{examTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Summary Bar */}
        {history.length > 0 && (
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Số lần làm</span>
              <strong className="text-lg font-black text-cyan-400">
                {history.length} lần
              </strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Điểm cao nhất</span>
              <strong className="text-lg font-black text-emerald-400">
                {bestScore.toFixed(2)}/10
              </strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Điểm trung bình</span>
              <strong className="text-lg font-black text-amber-400">
                {avgScore}/10
              </strong>
            </div>
          </div>
        )}

        {/* List of Attempts */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {history.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <History className="w-10 h-10 mx-auto text-slate-600" />
              <p className="font-bold text-sm">Chưa có kết quả thi thử nào được lưu.</p>
              <p className="text-xs text-slate-500">
                Hãy hoàn thành bài thi và bấm &quot;Nộp bài thi&quot; để hệ thống tự động lưu lại lịch sử học tập của bạn.
              </p>
            </div>
          ) : (
            history.map((attempt, idx) => {
              const dateStr = new Date(attempt.submittedAt).toLocaleString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });
              const isBest = attempt.score === bestScore;

              return (
                <div
                  key={attempt.id || idx}
                  className={`p-4 rounded-2xl border transition-all space-y-3 ${
                    isBest
                      ? "bg-emerald-950/20 border-emerald-500/40 shadow-sm"
                      : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-xl bg-slate-800 text-xs font-bold text-slate-300">
                        Lần {history.length - idx}
                      </span>
                      {isBest && (
                        <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black flex items-center gap-1">
                          <Award className="w-3 h-3 text-emerald-400" /> Kỷ lục cao nhất
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-white">
                        <span className="text-cyan-400">{attempt.score.toFixed(2)}</span>
                        <span className="text-xs text-slate-500 font-bold"> / 10 đ</span>
                      </span>

                      {onDelete && (
                        <button
                          type="button"
                          onClick={() => onDelete(attempt.id)}
                          title="Xóa lần thi này"
                          className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors ml-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Chi tiết điểm thành phần */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-400">
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span>Phần I: </span>
                      <strong className="text-cyan-300">{attempt.scorePart1.toFixed(2)} đ</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span>Phần II: </span>
                      <strong className="text-purple-300">{attempt.scorePart2.toFixed(2)} đ</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span>Phần III: </span>
                      <strong className="text-amber-300">{attempt.scorePart3.toFixed(2)} đ</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                      <span>Tự luận:</span>
                      <strong className="text-emerald-300 font-bold">
                        {attempt.essayFiles && attempt.essayFiles.length > 0
                          ? `${attempt.essayFiles.length} trang`
                          : "0 trang"}
                      </strong>
                    </div>
                  </div>

                  {/* Footer thời gian */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {dateStr}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      Làm trong {formatTime(attempt.timeSpentSeconds)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Tự động lưu và bảo lưu kết quả
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
