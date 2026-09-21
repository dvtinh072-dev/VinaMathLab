"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Timer, Send, Flag, RotateCcw, Award, ArrowLeft, AlertTriangle, FileCheck, History, PenTool, Camera, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { MultipleChoiceQuestionData, QuestionMultipleChoice } from "./QuestionMultipleChoice";
import { TrueFalseQuestionData, QuestionTrueFalse } from "./QuestionTrueFalse";
import { ShortAnswerQuestionData, QuestionShortAnswer } from "./QuestionShortAnswer";
import { ExamResultModal } from "./ExamResultModal";
import EssaySubmissionUploader from "./EssaySubmissionUploader";
import PracticeExamHistoryModal from "./PracticeExamHistoryModal";
import { EssayAttachment, EssayPartData, EssayQuestionData } from "@/types/customExam";
import { PracticeExamResult } from "@/types/practiceExam";
import {
  saveLocalPracticeResult,
  getPracticeResultsByExamId,
  deletePracticeResult,
} from "@/lib/practiceExamStore";
import { useAuth } from "@/context/AuthContext";
import { formatTime } from "@/lib/utils";
import confetti from "canvas-confetti";
import { MathFormattedText } from "@/components/math/MathFormattedText";

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
  essayPart?: EssayPartData;
}

interface Props {
  exam: ExamData;
}

export function ExamEngine({ exam }: Props) {
  const { user, addExpAndCoins } = useAuth();
  const isPureEssay = (!exam.questions || exam.questions.length === 0) && Boolean(exam.essayPart?.questions?.length);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isEssayActive, setIsEssayActive] = useState(isPureEssay);
  const [essayFiles, setEssayFiles] = useState<EssayAttachment[]>([]);
  const [essayTextAnswers, setEssayTextAnswers] = useState<Record<string, string>>({});
  const [essayActiveTab, setEssayActiveTab] = useState<"text" | "upload">("text");
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(exam.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [flagged, setFlagged] = useState<{ [id: string]: boolean }>({});

  // Lịch sử thi thử
  const [practiceHistory, setPracticeHistory] = useState<PracticeExamResult[]>([]);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  useEffect(() => {
    const list = getPracticeResultsByExamId(exam.id, user?.id || user?.studentCode);
    setPracticeHistory(list);
  }, [exam.id, user]);

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

    // Tự động tính điểm và lưu kết quả thi thử
    try {
      let scorePart1 = 0;
      let correctPart1 = 0;
      let scorePart2 = 0;
      let scorePart3 = 0;
      let correctPart3 = 0;

      exam.questions.forEach((q) => {
        if (q.type === "multiple_choice") {
          if (mcAnswers[q.id] === q.correctKey) {
            scorePart1 += 0.25;
            correctPart1 += 1;
          }
        } else if (q.type === "true_false") {
          const userAns = tfAnswers[q.id] || {};
          const subCorrect = q.subQuestions.filter((sub) => userAns[sub.key] === sub.isCorrect).length;
          if (subCorrect === 1) scorePart2 += 0.1;
          else if (subCorrect === 2) scorePart2 += 0.25;
          else if (subCorrect === 3) scorePart2 += 0.5;
          else if (subCorrect === 4) scorePart2 += 1.0;
        } else if (q.type === "short_answer") {
          const user = (saAnswers[q.id] || "").trim().toLowerCase();
          const correct = q.correctAnswer.trim().toLowerCase();
          const match =
            user === correct ||
            (q.acceptableAnswers && q.acceptableAnswers.some((a) => a.trim().toLowerCase() === user));
          if (match) {
            scorePart3 += 0.5;
            correctPart3 += 1;
          }
        }
      });

      const totalScore = parseFloat((scorePart1 + scorePart2 + scorePart3).toFixed(2));
      const correctCount = correctPart1 + correctPart3;
      const timeSpentSeconds = Math.max(0, exam.durationMinutes * 60 - timeLeft);

      const newResult: PracticeExamResult = {
        id: `pe_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        examId: exam.id,
        examTitle: exam.title,
        grade: exam.grade,
        totalQuestions: exam.totalQuestions,
        score: totalScore,
        totalScore,
        maxScore: 10,
        scorePart1: parseFloat(scorePart1.toFixed(2)),
        scorePart2: parseFloat(scorePart2.toFixed(2)),
        scorePart3: parseFloat(scorePart3.toFixed(2)),
        correctCount,
        timeSpentSeconds,
        submittedAt: new Date().toISOString(),
        mcAnswers,
        tfAnswers,
        saAnswers,
        essayFiles,
        essayTextAnswers,
        userId: user?.id || user?.studentCode,
        studentName: user?.fullName,
        studentClass: user?.schoolClass || user?.grade,
      };

      saveLocalPracticeResult(newResult);
      const updated = getPracticeResultsByExamId(exam.id, user?.id || user?.studentCode);
      setPracticeHistory(updated);

      // Thưởng EXP & Xu học tập
      if (addExpAndCoins) {
        const earnedExp = Math.max(10, Math.round(totalScore * 10));
        const earnedCoins = Math.max(2, Math.round(totalScore * 2));
        addExpAndCoins(earnedExp, earnedCoins);
      }
    } catch (e) {
      console.error("Lỗi khi lưu kết quả thi thử:", e);
    }
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
    setEssayFiles([]);
    setIsEssayActive(isPureEssay);
    setCurrentIdx(0);
  };

  const currentQ = exam.questions && exam.questions.length > 0 ? exam.questions[currentIdx] : null;

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

  const essayQuestions = exam.essayPart?.questions || [];
  const essayAnsweredCount = essayQuestions.filter(
    (eq) => Boolean(essayTextAnswers[eq.id]?.trim()) || essayFiles.length > 0
  ).length;

  const answeredCount = exam.questions ? exam.questions.filter((q) => isAnswered(q)).length : 0;
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
            {isPureEssay ? (
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 mt-0.5">
                <span>Đã làm: <strong className="text-emerald-400">{essayAnsweredCount}/{essayQuestions.length} bài</strong></span>
                <span>•</span>
                <span>Bài nộp: <strong className={essayFiles.length > 0 ? "text-emerald-400" : "text-indigo-400"}>{essayFiles.length > 0 ? `${essayFiles.length} tệp ảnh` : "Gõ trực tiếp"}</strong></span>
                <span>•</span>
                <span>Thời gian: <strong className="text-slate-200">{exam.durationMinutes} phút</strong></span>
                <span>•</span>
                <span className="text-indigo-400 font-bold">100% Tự Luận ({exam.essayPart?.totalPoints || 10}đ)</span>
              </div>
            ) : (
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 mt-0.5">
                <span>Đã làm: <strong className="text-cyan-400">{answeredCount}/{exam.totalQuestions} câu</strong></span>
                <span>•</span>
                <span>Tự luận: <strong className={essayFiles.length > 0 ? "text-emerald-400" : "text-amber-400"}>{essayFiles.length} trang</strong></span>
                <span>•</span>
                <span>Thời gian: <strong className="text-slate-200">{exam.durationMinutes} phút</strong></span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">Chuẩn BGD 2026</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Lịch sử làm bài */}
          <button
            onClick={() => setIsHistoryModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-xs font-bold transition-all flex items-center gap-1.5 select-none cursor-pointer"
            title="Xem lịch sử các lần thi thử"
          >
            <History className="w-4 h-4 text-cyan-400" />
            <span className="hidden md:inline">Lịch sử</span>
            {practiceHistory.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black border border-cyan-500/40">
                {practiceHistory.length}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950/70 border border-blue-500/40 text-cyan-300 font-mono font-black text-sm sm:text-base shadow-inner">
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
          {isEssayActive || !currentQ ? (
            <div className="space-y-6">
              {/* Header phần tự luận */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <div className="text-xs font-black text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-indigo-400" />
                    <span>{exam.essayPart?.title || "Phần Tự Luận"}</span>
                    {exam.essayPart?.totalPoints && (
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px]">
                        {exam.essayPart.totalPoints} điểm
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {exam.essayPart?.description ||
                      "Học sinh có thể gõ bài làm trực tiếp vào ô bên dưới hoặc làm ra giấy thi rồi chụp ảnh/tải tệp đính kèm."}
                  </p>
                </div>

                {/* Tab chuyển đổi chế độ làm bài tự luận */}
                <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setEssayActiveTab("text")}
                    className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                      essayActiveTab === "text"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <PenTool className="w-3.5 h-3.5" />
                    <span>Gõ bài giải</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEssayActiveTab("upload")}
                    className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                      essayActiveTab === "upload"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Chụp ảnh / Tải file</span>
                    {essayFiles.length > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px]">
                        {essayFiles.length}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Danh sách các câu tự luận */}
              <div className="space-y-6">
                {exam.essayPart?.questions.map((eq) => {
                  const hasSolution = Boolean(eq.solutionGuide);
                  const isExpanded = expandedSolutions[eq.id] ?? false;

                  return (
                    <div
                      key={eq.id}
                      id={eq.id}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800/90 space-y-4 hover:border-indigo-500/40 transition-colors shadow-lg"
                    >
                      {/* Tiêu đề & Điểm số bài tự luận */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                        <h4 className="font-extrabold text-sm sm:text-base text-indigo-300 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 flex items-center justify-center text-xs font-black">
                            {eq.index}
                          </span>
                          <span>{eq.title}</span>
                        </h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30 text-xs font-bold">
                          {eq.points} điểm
                        </span>
                      </div>

                      {/* Đề bài KaTeX */}
                      <div className="text-slate-100 text-sm sm:text-base leading-relaxed pl-1">
                        <MathFormattedText text={eq.stem} />
                      </div>

                      {/* Bảng số liệu nếu có */}
                      {eq.tableData && (
                        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950/60 p-2">
                          <table className="w-full text-xs text-left border-collapse">
                            <thead>
                              <tr className="border-b border-slate-700 text-indigo-300 font-bold bg-slate-900/80">
                                {eq.tableData.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="p-2.5">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 text-slate-200">
                              {eq.tableData.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-900/40">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-2.5 font-medium">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Hình vẽ vector SVG trực quan (Card nền trắng nổi bật chuẩn giấy thi) */}
                      {eq.svgDrawing && (
                        <div className="my-4 flex flex-col items-center justify-center">
                          <div
                            className="w-full max-w-xl rounded-2xl bg-white p-2 sm:p-3 shadow-lg border border-slate-300 flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: eq.svgDrawing }}
                          />
                          <span className="text-[11px] text-slate-400 mt-1.5 italic">
                            (Hình vẽ / Biểu đồ minh họa chuẩn đề thi chính thức)
                          </span>
                        </div>
                      )}

                      {/* Khu vực làm bài cho câu tự luận này */}
                      {essayActiveTab === "text" ? (
                        <div className="space-y-2 pt-2 border-t border-slate-800/80">
                          <label className="text-xs font-bold text-slate-400 flex items-center justify-between">
                            <span>Bài làm của bạn (gõ trực tiếp):</span>
                            <span className="text-[10px] text-slate-500 font-normal">
                              Tự động lưu vào bài thi
                            </span>
                          </label>
                          <textarea
                            value={essayTextAnswers[eq.id] || ""}
                            onChange={(e) =>
                              setEssayTextAnswers((prev) => ({
                                ...prev,
                                [eq.id]: e.target.value,
                              }))
                            }
                            placeholder={`Nhập các bước giải chi tiết cho ${eq.title}...`}
                            rows={5}
                            disabled={isSubmitted}
                            className="w-full p-3 rounded-xl bg-slate-950/90 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-100 text-xs sm:text-sm font-sans placeholder-slate-600 disabled:opacity-60 resize-y"
                          />
                        </div>
                      ) : null}

                      {/* Xem hướng dẫn giải và barem điểm khi đã nộp bài */}
                      {isSubmitted && hasSolution && (
                        <div className="pt-2 border-t border-slate-800">
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedSolutions((prev) => ({
                                ...prev,
                                [eq.id]: !isExpanded,
                              }))
                            }
                            className="w-full py-2 px-3 rounded-xl bg-indigo-950/40 hover:bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                          >
                            <span className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              <span>Xem Hướng dẫn giải chi tiết & Barem chấm</span>
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-indigo-500/30 text-xs sm:text-sm text-slate-200 space-y-2 leading-relaxed">
                              <MathFormattedText text={eq.solutionGuide!} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Tab tải file/ảnh nộp bài */}
              {essayActiveTab === "upload" && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-indigo-500/30 space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-black text-sm text-white flex items-center gap-2">
                      <Camera className="w-4 h-4 text-indigo-400" />
                      <span>Tải lên hình ảnh bài làm viết tay hoặc tệp PDF</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Làm bài ra giấy thi, chụp ảnh rõ nét và tải lên đây. Có thể nộp nhiều trang.
                    </p>
                  </div>

                  <EssaySubmissionUploader
                    files={essayFiles}
                    onChange={setEssayFiles}
                    maxFiles={10}
                    readOnly={isSubmitted}
                  />
                </div>
              )}

              {/* Chân trang phần tự luận */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                {!isPureEssay ? (
                  <button
                    type="button"
                    onClick={() => setIsEssayActive(false)}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    ← Quay lại Trắc nghiệm
                  </button>
                ) : <div />}

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
          ) : currentQ ? (
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
          ) : null}
        </div>

        {/* Question Palette Sidebar */}
        <div className="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-[#131B2E] border border-cyan-500/30 shadow-xl space-y-4">
          {isPureEssay ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-indigo-400" />
                  <span>Danh sách bài Tự Luận</span>
                </h3>
                <span className="text-xs text-indigo-300 font-bold px-2 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30">
                  {exam.essayPart?.totalPoints || 10} điểm
                </span>
              </div>

              <div className="space-y-2">
                {essayQuestions.map((eq) => {
                  const hasText = Boolean(essayTextAnswers[eq.id]?.trim());
                  const isDone = hasText || essayFiles.length > 0;
                  return (
                    <button
                      key={eq.id}
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(eq.id);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                        isDone
                          ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-200 hover:border-emerald-400"
                          : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:bg-slate-850"
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className="font-bold text-white block truncate">{eq.title}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{eq.points} điểm</span>
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-bold ${
                          isDone
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-slate-800 text-slate-400 border border-slate-700"
                        }`}
                      >
                        {isDone ? (hasText ? "Đã viết" : "Có ảnh") : "Chưa làm"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-indigo-200">
                💡 Thí sinh có thể nhập bài làm trực tiếp vào từng bài hoặc chụp ảnh toàn bộ bài giải trên giấy thi để nộp.
              </div>
            </div>
          ) : (
            <>
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
              {exam.essayPart && (
                <div className="pt-2 border-t border-slate-800">
                  {(() => {
                    const hasTextAnswers = Object.values(essayTextAnswers).some((t) => t.trim().length > 0);
                    const hasEssayDone = essayFiles.length > 0 || hasTextAnswers;
                    const totalEssayCount = exam.essayPart?.questions?.length;

                    return (
                      <button
                        type="button"
                        onClick={() => setIsEssayActive(true)}
                        className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-between border transition-all duration-150 cursor-pointer ${
                          isEssayActive
                            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-400 shadow-md shadow-indigo-500/30 scale-[1.02]"
                            : hasEssayDone
                            ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/80 hover:border-emerald-400"
                            : "bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700 hover:border-indigo-400"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-indigo-400" />
                          <span>Phần Tự Luận {totalEssayCount ? `(${totalEssayCount} bài)` : ""}</span>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            hasEssayDone
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {hasEssayDone
                            ? essayFiles.length > 0
                              ? `${essayFiles.length} tệp ảnh`
                              : "Đã làm lời giải"
                            : "Chưa làm"}
                        </span>
                      </button>
                    );
                  })()}
                </div>
              )}
            </>
          )}

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
          onOpenHistory={() => setIsHistoryModalOpen(true)}
        />
      )}

      {/* Modal Lịch sử các lần thi thử */}
      {isHistoryModalOpen && (
        <PracticeExamHistoryModal
          examTitle={exam.title}
          history={practiceHistory}
          isOpen={isHistoryModalOpen}
          onClose={() => {
            setIsHistoryModalOpen(false);
            setPracticeHistory(getPracticeResultsByExamId(exam.id, user?.id || user?.studentCode));
          }}
          onDelete={(id) => {
            deletePracticeResult(id);
            setPracticeHistory(getPracticeResultsByExamId(exam.id, user?.id || user?.studentCode));
          }}
        />
      )}
    </div>
  );
}
