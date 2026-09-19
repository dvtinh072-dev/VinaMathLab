"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Timer, Send, Flag, RotateCcw, Award, ArrowLeft, AlertTriangle, FileCheck } from "lucide-react";
import { MultipleChoiceQuestionData, QuestionMultipleChoice } from "./QuestionMultipleChoice";
import { TrueFalseQuestionData, QuestionTrueFalse } from "./QuestionTrueFalse";
import { ShortAnswerQuestionData, QuestionShortAnswer } from "./QuestionShortAnswer";
import { ExamResultModal } from "./ExamResultModal";
import EssaySubmissionUploader from "./EssaySubmissionUploader";
import { EssayAttachment } from "@/types/customExam";
import { formatTime } from "@/lib/utils";
import confetti from "canvas-confetti";

export type QuestionData =
  | MultipleChoiceQuestionData
  | TrueFalseQuestionData
  | ShortAnswerQuestionData;

export interface ExamData {
  id: string;
  title: string;
  grade?: string; // "lop-6", "lop-7", "lop-8", "lop-9", "lop-10", "lop-11", "lop-12"
  gradeNumber?: number; // 6, 7, 8, 9, 10, 11, 12
  examType?: "giua-ky-1" | "cuoi-ky-1" | "giua-ky-2" | "cuoi-ky-2" | "tuyen-sinh-10" | "thpt-qg" | "dgnl";
  category?: string;
  subtitle?: string;
  durationMinutes: number;
  totalQuestions: number;
  questions: QuestionData[];
}

interface Props {
  exam: ExamData;
}

export function ExamEngine({ exam }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isEssayActive, setIsEssayActive] = useState(false);
  const [essayFiles, setEssayFiles] = useState<EssayAttachment[]>([]);
  const [timeLeft, setTimeLeft] = useState(exam.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [flagged, setFlagged] = useState<{ [id: string]: boolean }>({});

  // User answers state
  const [mcAnswers, setMcAnswers] = useState<{ [id: string]: "A" | "B" | "C" | "D" }>({});
  const [tfAnswers, setTfAnswers] = useState<{
    [id: string]: { [key in "a" | "b" | "c" | "d"]?: boolean };
  }>({});
  const [saAnswers, setSaAnswers] = useState<{ [id: string]: string }>({});

  // Countdown timer
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          confirmAndSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeft]);

  const confirmAndSubmit = () => {
    setShowConfirmSubmit(false);
    setIsSubmitted(true);
    setShowResultModal(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleRestart = () => {
    setIsSubmitted(false);
    setShowResultModal(false);
    setShowConfirmSubmit(false);
    setTimeLeft(exam.durationMinutes * 60);
    setMcAnswers({});
    setTfAnswers({});
    setSaAnswers({});
    setFlagged({});
    setEssayFiles([]);
    setIsEssayActive(false);
    setCurrentIdx(0);
  };

  const currentQ = exam.questions[currentIdx];

  // Helper check if question is answered
  const isAnswered = (q: QuestionData) => {
    if (q.type === "multiple_choice") return !!mcAnswers[q.id];
    if (q.type === "true_false") {
      const ans = tfAnswers[q.id];
      return ans && Object.keys(ans).length === 4;
    }
    if (q.type === "short_answer") return !!saAnswers[q.id]?.trim();
    return false;
  };

  const answeredCount = exam.questions.filter((q) => isAnswered(q)).length;
  const unansweredCount = exam.totalQuestions - answeredCount;

  return (
    <div className="space-y-6 bg-[#090D16] text-white p-3 sm:p-6 rounded-3xl border sm:border-2 border-slate-800/80 shadow-2xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#131B2E] border border-cyan-500/30 shadow-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/luyen-thi"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400 shadow-sm active:translate-y-0.5 text-xs font-extrabold select-none transition-all shrink-0"
            title="Rời phòng thi"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Thoát</span>
          </Link>

          <div>
            <h2 className="font-extrabold text-base sm:text-lg md:text-xl text-white">
              {exam.title}
            </h2>
            <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 mt-0.5">
              <span>Đã làm: <strong className="text-cyan-400">{answeredCount}/{exam.totalQuestions} câu</strong></span>
              <span>•</span>
              <span>Tự luận: <strong className={essayFiles.length > 0 ? "text-emerald-400" : "text-amber-400"}>{essayFiles.length} trang</strong></span>
              <span>•</span>
              <span>Thời gian: <strong className="text-slate-200">{exam.durationMinutes} phút</strong></span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Chuẩn BGD 2026</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/70 border border-blue-500/40 text-cyan-300 font-mono font-black text-sm sm:text-base shadow-inner">
            <Timer className="w-4 h-4 text-cyan-400 animate-pulse" />
            {formatTime(timeLeft)}
          </div>

          {!isSubmitted ? (
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm border border-emerald-400/50 shadow-lg shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 select-none cursor-pointer"
            >
              <Send className="w-4 h-4" /> Nộp bài thi
            </button>
          ) : (
            <button
              onClick={() => setShowResultModal(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black text-xs sm:text-sm border border-cyan-400/40 shadow-lg shadow-blue-950/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 select-none cursor-pointer"
            >
              <Award className="w-4 h-4" /> Xem bảng điểm
            </button>
          )}
        </div>
      </div>

      {/* Main Examination View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        {/* Question or Essay Area */}
        <div className="lg:col-span-8 p-4 sm:p-6 rounded-2xl bg-[#131B2E] border border-cyan-500/30 shadow-xl space-y-5 sm:space-y-6">
          {isEssayActive ? (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>Phần Tự Luận: Nộp bài làm viết tay hoặc tệp PDF</span>
                </div>
              </div>

              <EssaySubmissionUploader
                files={essayFiles}
                onChange={setEssayFiles}
                readOnly={isSubmitted}
                title="Tải Lên Bài Làm Tự Luận (Ảnh hoặc PDF)"
                description="Học sinh giải bài tự luận ra giấy kiểm tra, sau đó bấm 'Chụp ảnh bài làm' bằng camera điện thoại hoặc tải file PDF/ảnh từ máy."
              />

              {/* Prev / Next Buttons in Essay Mode */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsEssayActive(false);
                    setCurrentIdx(exam.totalQuestions - 1);
                  }}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white text-xs sm:text-sm font-extrabold bg-slate-900 hover:bg-slate-850 transition-all select-none cursor-pointer"
                >
                  ← Về câu trắc nghiệm ({exam.totalQuestions})
                </button>

                {!isSubmitted ? (
                  <button
                    onClick={() => setShowConfirmSubmit(true)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs sm:text-sm font-black border border-emerald-400/50 shadow-lg shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all select-none flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Nộp bài thi
                  </button>
                ) : (
                  <button
                    onClick={() => setShowResultModal(true)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-black border border-cyan-400/40 shadow-lg shadow-blue-950/40 hover:scale-105 active:scale-95 transition-all select-none flex items-center gap-2 cursor-pointer"
                  >
                    <Award className="w-4 h-4" /> Xem bảng điểm
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
                <div className="text-[11px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {currentQ.type === "multiple_choice" && "Phần I: Trắc nghiệm 4 lựa chọn (0.25đ/câu)"}
                  {currentQ.type === "true_false" && "Phần II: Trắc nghiệm Đúng / Sai (Tối đa 1.0đ/câu)"}
                  {currentQ.type === "short_answer" && "Phần III: Trắc nghiệm Trả lời ngắn (0.5đ/câu)"}
                </div>

                <button
                  onClick={() =>
                    setFlagged((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))
                  }
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-150 select-none cursor-pointer ${
                    flagged[currentQ.id]
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-700 hover:border-amber-400 hover:text-amber-300"
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${flagged[currentQ.id] ? "fill-amber-400 text-amber-400" : ""}`} />
                  <span>{flagged[currentQ.id] ? "Đã đánh dấu cờ" : "Đánh dấu xem lại"}</span>
                </button>
              </div>

              {currentQ.type === "multiple_choice" && (
                <QuestionMultipleChoice
                  question={currentQ}
                  selectedKey={mcAnswers[currentQ.id]}
                  onSelect={(key) =>
                    !isSubmitted && setMcAnswers((prev) => ({ ...prev, [currentQ.id]: key }))
                  }
                  showExplanation={isSubmitted}
                />
              )}

              {currentQ.type === "true_false" && (
                <QuestionTrueFalse
                  question={currentQ}
                  answers={tfAnswers[currentQ.id] || {}}
                  onAnswer={(subKey, val) =>
                    !isSubmitted &&
                    setTfAnswers((prev) => ({
                      ...prev,
                      [currentQ.id]: { ...(prev[currentQ.id] || {}), [subKey]: val },
                    }))
                  }
                  showExplanation={isSubmitted}
                />
              )}

              {currentQ.type === "short_answer" && (
                <QuestionShortAnswer
                  question={currentQ}
                  userAnswer={saAnswers[currentQ.id] || ""}
                  onAnswer={(val) =>
                    !isSubmitted && setSaAnswers((prev) => ({ ...prev, [currentQ.id]: val }))
                  }
                  showExplanation={isSubmitted}
                />
              )}

              {/* Prev / Next Buttons */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white text-xs sm:text-sm font-extrabold bg-slate-900 hover:bg-slate-850 transition-all select-none disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  ← Câu trước
                </button>
                <span className="text-xs sm:text-sm font-bold text-slate-300">
                  Câu {currentIdx + 1} / {exam.totalQuestions}
                </span>
                {currentIdx < exam.totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => Math.min(exam.totalQuestions - 1, prev + 1))}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-black border border-cyan-400/40 shadow-lg shadow-cyan-900/30 transition-all select-none cursor-pointer"
                  >
                    Câu tiếp theo →
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEssayActive(true)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs sm:text-sm font-black border border-indigo-400/40 shadow-lg shadow-indigo-900/30 transition-all select-none cursor-pointer flex items-center gap-1.5"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Nộp tự luận →</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Question Palette Sidebar */}
        <div className="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-[#131B2E] border border-cyan-500/30 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-white">Bảng điều hướng câu hỏi</h3>
            <span className="text-xs text-slate-400 font-medium">{exam.totalQuestions} câu</span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
            {exam.questions.map((q, idx) => {
              const active = !isEssayActive && currentIdx === idx;
              const answered = isAnswered(q);
              const isFlag = flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setIsEssayActive(false);
                    setCurrentIdx(idx);
                  }}
                  className={`h-11 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center relative transition-all duration-150 transform select-none cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border border-cyan-300 shadow-md shadow-cyan-500/30 scale-105"
                      : answered
                      ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/80 hover:border-emerald-400"
                      : "bg-slate-900 text-slate-300 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300"
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlag && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border border-slate-900 flex items-center justify-center shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-950" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Nút truy cập Phần Tự Luận */}
          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsEssayActive(true)}
              className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-between border transition-all duration-150 cursor-pointer ${
                isEssayActive
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-400 shadow-md shadow-indigo-500/30 scale-[1.02]"
                  : essayFiles.length > 0
                  ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/80 hover:border-emerald-400"
                  : "bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700 hover:border-indigo-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                <span>Phần Tự Luận</span>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  essayFiles.length > 0
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {essayFiles.length > 0 ? `${essayFiles.length} trang` : "Chưa nộp"}
              </span>
            </button>
          </div>

          <div className="pt-3.5 border-t border-slate-800 space-y-2 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-950 border border-emerald-500/80" />
              <span>Đã hoàn thành</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-900 border border-slate-700" />
              <span>Chưa làm</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded bg-amber-400" />
              <span>Đã đánh dấu xem lại</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded bg-gradient-to-r from-blue-600 to-cyan-500 border border-cyan-300" />
              <span>Đang chọn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#131B2E] w-full max-w-md rounded-2xl border-2 border-cyan-500/40 p-6 md:p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200 text-white">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl text-white">
                Xác nhận nộp bài thi?
              </h3>
              <div className="bg-[#0B1120] p-3.5 rounded-xl border border-slate-800 text-xs text-left space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Trắc nghiệm:</span>
                  <strong className="text-cyan-400 font-bold">{answeredCount}/{exam.totalQuestions} câu</strong>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Tự luận (ảnh/PDF):</span>
                  <strong className={essayFiles.length > 0 ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
                    {essayFiles.length > 0 ? `Đã đính kèm ${essayFiles.length} trang` : "Chưa tải trang nào"}
                  </strong>
                </div>
              </div>

              {unansweredCount > 0 && (
                <div className="text-amber-300 font-semibold bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 text-xs text-left">
                  ⚠️ Còn {unansweredCount} câu trắc nghiệm chưa hoàn thành.
                </div>
              )}

              {essayFiles.length === 0 && (
                <div className="text-amber-300 font-semibold bg-indigo-500/10 p-2.5 rounded-xl border border-indigo-500/30 text-xs text-left">
                  💡 Bạn chưa tải ảnh/PDF bài làm tự luận. Nếu đề thi có phần tự luận, bạn có muốn tải lên trước khi nộp không?
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="w-full sm:flex-1 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs sm:text-sm font-extrabold bg-slate-900 hover:bg-slate-850 transition-all select-none cursor-pointer"
              >
                Tiếp tục làm bài
              </button>
              <button
                onClick={confirmAndSubmit}
                className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs sm:text-sm font-black border border-emerald-400/50 shadow-lg shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all select-none flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Nộp bài ngay</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showResultModal && (
        <ExamResultModal
          exam={exam}
          mcAnswers={mcAnswers}
          tfAnswers={tfAnswers}
          saAnswers={saAnswers}
          essayFiles={essayFiles}
          onClose={() => setShowResultModal(false)}
          onRestart={handleRestart}
          onOpenEssay={() => setIsEssayActive(true)}
        />
      )}
    </div>
  );
}
