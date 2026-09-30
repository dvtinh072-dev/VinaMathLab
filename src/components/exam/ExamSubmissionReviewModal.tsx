"use client";

import React, { useState } from "react";
import { PracticeExamResult } from "@/types/practiceExam";
import { SAMPLE_EXAMS } from "@/data/sampleExams";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { formatTime } from "@/lib/utils";
import {
  X,
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Calendar,
  FileCheck,
  User,
  GraduationCap,
  Eye,
  ShieldAlert,
  Printer,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ExamSubmissionReviewModalProps {
  submission: PracticeExamResult | any | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExamSubmissionReviewModal({
  submission,
  isOpen,
  onClose,
}: ExamSubmissionReviewModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllExplanations, setShowAllExplanations] = useState(true);

  if (!isOpen || !submission) return null;

  // Tìm đề thi gốc nếu có trong SAMPLE_EXAMS
  const examData = SAMPLE_EXAMS[submission.examId];
  const questions = examData?.questions || [];

  const score = Number(submission.score || 0);
  const getScoreBadge = (sc: number) => {
    if (sc >= 8.0) return { label: "Xuất sắc / Giỏi", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" };
    if (sc >= 6.5) return { label: "Khá", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" };
    if (sc >= 5.0) return { label: "Trung bình", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" };
    return { label: "Cần cố gắng", color: "bg-rose-500/20 text-rose-300 border-rose-500/40" };
  };

  const badge = getScoreBadge(score);

  const formattedDate = submission.submittedAt
    ? new Date(submission.submittedAt).toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "—";

  const mcAnswers = submission.mcAnswers || {};
  const tfAnswers = submission.tfAnswers || {};
  const saAnswers = submission.saAnswers || {};
  const essayFiles = submission.essayFiles || [];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="bg-[#0e1526] w-full max-w-4xl max-h-[92vh] rounded-3xl border-2 border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden text-white">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-[#111a30] flex items-center justify-between gap-4 shrink-0">
          <div className="space-y-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black border ${badge.color}`}>
                {badge.label}
              </span>
              {submission.grade && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 uppercase">
                  {submission.grade.replace("lop-", "Lớp ")}
                </span>
              )}
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {formattedDate}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-white truncate">
              {submission.examTitle || "Chi tiết bài làm kiểm tra"}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
              title="In kết quả bài làm"
            >
              <Printer className="w-4 h-4" />
              <span>In bài</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thông tin học sinh & Thống kê điểm */}
        <div className="p-4 sm:p-5 bg-[#090D16] border-b border-slate-800 shrink-0 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Học sinh info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-black text-lg">
                {submission.studentName ? submission.studentName.charAt(0).toUpperCase() : "H"}
              </div>
              <div>
                <div className="text-sm font-black text-white flex items-center gap-2">
                  <span>{submission.studentName || "Học sinh"}</span>
                  {submission.studentClass && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-bold">
                      {submission.studentClass}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    @{submission.studentUsername || submission.userId || "hoc-sinh"}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Làm trong: {formatTime(submission.timeSpentSeconds || 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Điểm tổng */}
            <div className="flex items-center gap-4 text-right">
              {submission.blurCount && submission.blurCount > 0 ? (
                <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-[11px] flex items-center gap-1.5 font-bold">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Rời màn hình: {submission.blurCount} lần</span>
                </div>
              ) : null}

              <div className="bg-slate-900/90 px-4 py-2 rounded-2xl border border-slate-800">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Tổng điểm bài thi
                </div>
                <div className="text-2xl font-black text-cyan-400">
                  {score.toFixed(2)}
                  <span className="text-xs font-bold text-slate-500"> / 10đ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Điểm thành phần */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
            <div className="p-2.5 rounded-xl bg-[#0e1526] border border-cyan-500/20">
              <span className="text-slate-400 block text-[11px]">Phần I: Trắc nghiệm 4 lựa chọn</span>
              <strong className="text-sm font-black text-cyan-300">
                {Number(submission.scorePart1 || 0).toFixed(2)} đ
              </strong>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0e1526] border border-purple-500/20">
              <span className="text-slate-400 block text-[11px]">Phần II: Đúng / Sai</span>
              <strong className="text-sm font-black text-purple-300">
                {Number(submission.scorePart2 || 0).toFixed(2)} đ
              </strong>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0e1526] border border-amber-500/20">
              <span className="text-slate-400 block text-[11px]">Phần III: Trả lời ngắn</span>
              <strong className="text-sm font-black text-amber-300">
                {Number(submission.scorePart3 || 0).toFixed(2)} đ
              </strong>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0e1526] border border-emerald-500/20">
              <span className="text-slate-400 block text-[11px]">Tự luận đã nộp</span>
              <strong className="text-sm font-black text-emerald-300">
                {essayFiles.length > 0 ? `${essayFiles.length} file đính kèm` : "Không có"}
              </strong>
            </div>
          </div>
        </div>

        {/* Nội dung chi tiết từng câu hỏi */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Đối Chiếu Chi Tiết Câu Trả Lời & Đáp Án</span>
            </h3>
            <button
              onClick={() => setShowAllExplanations(!showAllExplanations)}
              className="text-xs text-cyan-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              {showAllExplanations ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" /> Thu gọn lời giải
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" /> Xem tất cả lời giải
                </>
              )}
            </button>
          </div>

          {/* Nếu tìm thấy câu hỏi từ SAMPLE_EXAMS */}
          {questions.length > 0 ? (
            <div className="space-y-4">
              {questions.map((q: any, idx: number) => {
                const qNum = idx + 1;

                // 1. Dạng Trắc nghiệm 4 lựa chọn
                if (q.type === "multiple_choice") {
                  const studentAns = mcAnswers[q.id];
                  const isCorrect = studentAns && studentAns === q.correctKey;
                  const isAnswered = Boolean(studentAns);

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border transition-all space-y-3 ${
                        !isAnswered
                          ? "bg-slate-900/60 border-slate-800"
                          : isCorrect
                          ? "bg-emerald-950/20 border-emerald-500/40"
                          : "bg-rose-950/20 border-rose-500/40"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-xs font-black text-cyan-300">
                            Câu {qNum} (Trắc nghiệm)
                          </span>
                          {q.topic && (
                            <span className="text-[11px] text-slate-400 font-medium">
                              Chuyên đề: {q.topic}
                            </span>
                          )}
                        </div>

                        <div>
                          {!isAnswered ? (
                            <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                              Chưa làm
                            </span>
                          ) : isCorrect ? (
                            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Đúng (+0.25đ)
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold text-rose-400 bg-rose-500/20 border border-rose-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                              <XCircle className="w-3 h-3" /> Sai (0đ)
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-white">
                        <MathFormattedText text={q.stem} />
                      </div>

                      {/* Các lựa chọn A, B, C, D */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {q.options?.map((opt: any) => {
                          const isStudentSelected = studentAns === opt.key;
                          const isTheCorrectKey = opt.key === q.correctKey;

                          let itemStyle = "bg-slate-900 border-slate-800 text-slate-300";
                          if (isTheCorrectKey) {
                            itemStyle = "bg-emerald-950/50 border-emerald-500/60 text-emerald-200 font-bold";
                          } else if (isStudentSelected && !isTheCorrectKey) {
                            itemStyle = "bg-rose-950/50 border-rose-500/60 text-rose-200 font-bold";
                          }

                          return (
                            <div
                              key={opt.key}
                              className={`p-2.5 rounded-xl border flex items-start gap-2 ${itemStyle}`}
                            >
                              <span className="font-black shrink-0 px-1.5 py-0.5 rounded bg-black/40 text-[11px]">
                                {opt.key}
                              </span>
                              <div className="flex-1 min-w-0">
                                <MathFormattedText text={opt.text} />
                              </div>
                              {isStudentSelected && (
                                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 shrink-0">
                                  Học sinh chọn
                                </span>
                              )}
                              {isTheCorrectKey && (
                                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 shrink-0">
                                  Đáp án đúng
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Lời giải */}
                      {showAllExplanations && q.explanation && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1 text-slate-300">
                          <span className="font-bold text-amber-300 block">💡 Phương pháp & Lời giải:</span>
                          <MathFormattedText text={q.explanation} />
                        </div>
                      )}
                    </div>
                  );
                }

                // 2. Dạng Đúng / Sai
                if (q.type === "true_false") {
                  const studentChoices = tfAnswers[q.id] || {};

                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-2xl bg-slate-900/80 border border-purple-500/30 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-xs font-black text-purple-300">
                          Câu {qNum} (Trắc nghiệm Đúng / Sai)
                        </span>
                        {q.topic && (
                          <span className="text-[11px] text-slate-400 font-medium">
                            Chuyên đề: {q.topic}
                          </span>
                        )}
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-white">
                        <MathFormattedText text={q.stem} />
                      </div>

                      {/* Các ý a, b, c, d */}
                      <div className="space-y-2">
                        {q.subQuestions?.map((sub: any) => {
                          const choice = studentChoices[sub.key];
                          const hasChoice = choice !== undefined;
                          const isCorrect = hasChoice && choice === sub.isCorrect;

                          return (
                            <div
                              key={sub.key}
                              className={`p-3 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs ${
                                !hasChoice
                                  ? "bg-slate-950/60 border-slate-800 text-slate-400"
                                  : isCorrect
                                  ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                                  : "bg-rose-950/20 border-rose-500/30 text-rose-200"
                              }`}
                            >
                              <div className="flex items-start gap-2 flex-1">
                                <span className="font-black text-purple-300 uppercase shrink-0">
                                  {sub.key})
                                </span>
                                <div>
                                  <MathFormattedText text={sub.text} />
                                </div>
                              </div>

                              <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                                <div className="text-[11px]">
                                  Học sinh:{" "}
                                  <strong className={choice ? "text-emerald-400" : choice === false ? "text-rose-400" : "text-slate-500"}>
                                    {choice === true ? "Đúng" : choice === false ? "Sai" : "Chưa chọn"}
                                  </strong>
                                </div>
                                <div className="text-[11px]">
                                  Đáp án:{" "}
                                  <strong className={sub.isCorrect ? "text-emerald-400" : "text-rose-400"}>
                                    {sub.isCorrect ? "Đúng" : "Sai"}
                                  </strong>
                                </div>
                                {hasChoice && (
                                  <span>
                                    {isCorrect ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                      <XCircle className="w-4 h-4 text-rose-400" />
                                    )}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Lời giải */}
                      {showAllExplanations && q.explanation && (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1 text-slate-300">
                          <span className="font-bold text-amber-300 block">💡 Phân tích & Lời giải:</span>
                          <MathFormattedText text={q.explanation} />
                        </div>
                      )}
                    </div>
                  );
                }

                // 3. Dạng Trả lời ngắn
                if (q.type === "short_answer") {
                  const studentAns = (saAnswers[q.id] || "").trim();
                  const expected = (q.correctAnswer || "").trim();
                  const isCorrect = studentAns.toLowerCase() === expected.toLowerCase() ||
                    (q.acceptableAnswers && q.acceptableAnswers.some((a: string) => a.trim().toLowerCase() === studentAns.toLowerCase()));
                  const isAnswered = studentAns.length > 0;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border transition-all space-y-3 ${
                        !isAnswered
                          ? "bg-slate-900/60 border-slate-800"
                          : isCorrect
                          ? "bg-emerald-950/20 border-emerald-500/40"
                          : "bg-rose-950/20 border-rose-500/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-xs font-black text-amber-300">
                          Câu {qNum} (Trả lời ngắn)
                        </span>
                        <div>
                          {!isAnswered ? (
                            <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                              Chưa làm
                            </span>
                          ) : isCorrect ? (
                            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Đúng (+0.5đ)
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold text-rose-400 bg-rose-500/20 border border-rose-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                              <XCircle className="w-3 h-3" /> Sai (0đ)
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-white">
                        <MathFormattedText text={q.stem} />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px] font-medium">Học sinh đã nhập:</span>
                          <strong className={isCorrect ? "text-emerald-400 text-sm" : isAnswered ? "text-rose-400 text-sm" : "text-slate-500"}>
                            {studentAns || "— (Chưa điền đáp án)"}
                          </strong>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px] font-medium">Đáp án chuẩn của đề:</span>
                          <strong className="text-emerald-300 text-sm">
                            {expected || "Xem lời giải chi tiết bên dưới"}
                          </strong>
                        </div>
                      </div>

                      {/* Lời giải */}
                      {showAllExplanations && q.explanation && (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1 text-slate-300">
                          <span className="font-bold text-amber-300 block">💡 Phương pháp & Lời giải:</span>
                          <MathFormattedText text={q.explanation} />
                        </div>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ) : (
            // Nếu không có trong SAMPLE_EXAMS (đề giáo viên tùy biến)
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                <p className="font-bold text-white">
                  Đề thi trực tuyến của Giáo viên (Mã đề: {submission.examId})
                </p>
                <p className="text-slate-400">
                  Dưới đây là bảng ghi nhận kết quả và các phương án học sinh đã chọn trong bài thi:
                </p>
              </div>

              {/* Bảng tổng hợp đáp án Part 1 */}
              {Object.keys(mcAnswers).length > 0 && (
                <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-cyan-300">Phần I: Lựa chọn trắc nghiệm</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-xs">
                    {Object.entries(mcAnswers).map(([k, val]: any, i) => (
                      <div key={k} className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">Câu {i + 1}:</span>
                        <span className="font-black text-cyan-400">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bảng tổng hợp Part 2 */}
              {Object.keys(tfAnswers).length > 0 && (
                <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-purple-300">Phần II: Trắc nghiệm Đúng / Sai</h4>
                  <div className="space-y-2 text-xs">
                    {Object.entries(tfAnswers).map(([k, subs]: any, i) => (
                      <div key={k} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center gap-3">
                        <span className="text-slate-300 font-bold">Câu {i + 1}:</span>
                        {Object.entries(subs || {}).map(([subK, subV]: any) => (
                          <span key={subK} className="px-2 py-0.5 rounded bg-black/40 border border-slate-800">
                            Ý {subK}: <strong className={subV ? "text-emerald-400" : "text-rose-400"}>{subV ? "Đ" : "S"}</strong>
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bảng Part 3 */}
              {Object.keys(saAnswers).length > 0 && (
                <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-amber-300">Phần III: Trả lời ngắn đã điền</h4>
                  <div className="space-y-2 text-xs">
                    {Object.entries(saAnswers).map(([k, val]: any, i) => (
                      <div key={k} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">Câu {i + 1}:</span>
                        <span className="font-mono font-bold text-amber-300">{String(val)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Phần bài tự luận đính kèm (nếu có) */}
          {essayFiles.length > 0 && (
            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-3">
              <h4 className="text-xs font-black text-indigo-300 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                <span>Bài Làm Tự Luận Học Sinh Chụp Ảnh Nộp ({essayFiles.length} trang)</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {essayFiles.map((file: any, i: number) => (
                  <div
                    key={file.id || i}
                    onClick={() => setSelectedImage(file.fileUrl || file.dataUrl)}
                    className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 cursor-pointer aspect-[3/4] flex flex-col justify-end p-2"
                  >
                    {file.fileUrl || file.dataUrl ? (
                      <img
                        src={file.fileUrl || file.dataUrl}
                        alt={`Trang ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs">
                        Không có hình
                      </div>
                    )}
                    <div className="relative z-10 bg-black/70 backdrop-blur-sm p-1.5 rounded-lg text-[10px] text-white flex items-center justify-between">
                      <span>Trang {i + 1}</span>
                      <Eye className="w-3 h-3 text-cyan-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#111a30] flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            Mã kết quả bài thi: <span className="font-mono text-cyan-400">{submission.id}</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Đóng xem lại
          </button>
        </div>
      </div>

      {/* Lightbox phóng to ảnh bài tự luận */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImage} alt="Ảnh bài làm" className="max-w-full max-h-[90vh] object-contain rounded-2xl" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 p-2 rounded-full bg-slate-800 text-white hover:bg-rose-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
