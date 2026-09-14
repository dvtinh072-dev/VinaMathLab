import React, { useState } from "react";
import { CustomExam } from "@/types/customExam";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { exportExamToWord } from "@/lib/exportExamWord";
import { Eye, Download, FileText, CheckCircle2, Clock, Share2, ExternalLink, X, Check, BookOpen } from "lucide-react";

interface ExamPreviewModalProps {
  exam: CustomExam;
  onClose: () => void;
  onCopyLink: (id: string) => void;
}

export function ExamPreviewModal({ exam, onClose, onCopyLink }: ExamPreviewModalProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [copied, setCopied] = useState(false);

  const questions = exam.questions || [];
  const mcList = questions.filter(q => q.type === "multiple_choice");
  const tfList = questions.filter(q => q.type === "true_false");
  const saList = questions.filter(q => q.type === "short_answer");

  let qGlobalNum = 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-5xl rounded-3xl bg-[#0d1424] border-2 border-cyan-500/40 p-5 sm:p-7 space-y-5 shadow-2xl overflow-hidden max-h-[94vh] flex flex-col text-white">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-800 shrink-0 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-white">{exam.title}</h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                  Lớp: {exam.targetClass || "Tất cả"}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {exam.durationMinutes} phút
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {exam.totalQuestions} câu hỏi
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Xem trước toàn bộ nội dung đề thi chuẩn Bộ GD&ĐT 2025. Hỗ trợ tải file Word chuẩn Equation & MathType.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 shrink-0">
          {/* Toggle show answers */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowAnswers(!showAnswers)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                showAnswers
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{showAnswers ? "Đang Hiện Đáp Án & Lời Giải" : "Hiện Đáp Án & Lời Giải"}</span>
            </button>
          </div>

          {/* Export and Link buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => exportExamToWord(exam, { includeAnswers: false })}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              title="Tải đề thi file Word để in ấn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải File Word (Đề thi)</span>
            </button>

            <button
              type="button"
              onClick={() => exportExamToWord(exam, { includeAnswers: true })}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              title="Tải file Word kèm Bảng Đáp Án và Lời Giải Chi Tiết"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Tải Word (Kèm Lời Giải)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onCopyLink(exam.id);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? "Đã chép link" : "Sao Chép Link Thi"}</span>
            </button>

            <a
              href={`/kiem-tra/${exam.id}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Thi Thử Ngay</span>
            </a>
          </div>
        </div>

        {/* Exam Questions Content */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-1.5">
          {/* PHẦN I: Trắc nghiệm 4 lựa chọn */}
          {mcList.length > 0 && (
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-blue-300 uppercase">
                    Phần I: Câu trắc nghiệm nhiều phương án lựa chọn ({mcList.length} câu)
                  </h4>
                  <p className="text-[11px] text-slate-400 italic mt-0.5">
                    Mỗi câu hỏi thí sinh chỉ chọn một phương án A, B, C hoặc D. Điểm: 0.25 điểm / câu.
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {mcList.map((q: any) => {
                  const num = qGlobalNum++;
                  return (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-xs sm:text-sm font-medium text-slate-100 flex items-start gap-2">
                          <span className="font-black text-cyan-400 shrink-0">Câu {num}:</span>
                          <MathFormattedText text={q.stem} />
                        </div>
                        {q.difficulty && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold shrink-0">
                            {q.difficulty}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                        {(q.options || []).map((opt: any) => {
                          const isCorrect = showAnswers && q.correctKey === opt.key;
                          return (
                            <div
                              key={opt.key}
                              className={`p-2.5 rounded-xl border flex items-start gap-2 transition-all ${
                                isCorrect
                                  ? "bg-emerald-950/40 border-emerald-500/60 text-emerald-200 font-bold"
                                  : "bg-slate-950/50 border-slate-800 text-slate-300"
                              }`}
                            >
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${
                                isCorrect ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-400"
                              }`}>
                                {opt.key}
                              </span>
                              <div className="flex-1 pt-0.5">
                                <MathFormattedText text={opt.text} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {showAnswers && q.explanation && (
                        <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-1">
                          <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Đáp án đúng: {q.correctKey}</span>
                          </div>
                          <div className="text-slate-300 leading-relaxed pt-0.5">
                            <span className="font-semibold text-slate-400">Lời giải chi tiết: </span>
                            <MathFormattedText text={q.explanation} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PHẦN II: Trắc nghiệm Đúng / Sai */}
          {tfList.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="p-3 rounded-2xl bg-teal-950/30 border border-teal-500/30 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-teal-300 uppercase">
                    Phần II: Câu trắc nghiệm Đúng / Sai ({tfList.length} câu chùm)
                  </h4>
                  <p className="text-[11px] text-slate-400 italic mt-0.5">
                    Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai. Điểm: 0.1 - 0.25 - 0.5 - 1.0 điểm.
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {tfList.map((q: any) => {
                  const num = qGlobalNum++;
                  return (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-xs sm:text-sm font-medium text-slate-100 flex items-start gap-2">
                          <span className="font-black text-teal-400 shrink-0">Câu {num}:</span>
                          <MathFormattedText text={q.stem} />
                        </div>
                      </div>

                      <div className="space-y-2 pt-1">
                        {(q.subQuestions || q.statements || []).map((sub: any) => {
                          return (
                            <div
                              key={sub.key || sub.id}
                              className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-start justify-between gap-3 text-xs"
                            >
                              <div className="flex items-start gap-2 flex-1">
                                <span className="font-black text-slate-400 shrink-0">{sub.key || sub.id})</span>
                                <MathFormattedText text={sub.text} />
                              </div>
                              {showAnswers && (
                                <span className={`px-2 py-0.5 rounded text-[10px] font-black shrink-0 ${
                                  sub.isCorrect
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                                }`}>
                                  {sub.isCorrect ? "ĐÚNG" : "SAI"}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {showAnswers && q.explanation && (
                        <div className="p-3 rounded-xl bg-teal-950/20 border border-teal-500/30 text-xs space-y-1">
                          <div className="text-slate-300 leading-relaxed">
                            <span className="font-semibold text-teal-400">Hướng dẫn giải: </span>
                            <MathFormattedText text={q.explanation} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PHẦN III: Trả lời ngắn */}
          {saList.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-cyan-300 uppercase">
                    Phần III: Câu trắc nghiệm dạng Trả lời ngắn ({saList.length} câu)
                  </h4>
                  <p className="text-[11px] text-slate-400 italic mt-0.5">
                    Thí sinh điền kết quả hoặc đáp số vào phiếu trả lời. Điểm: 0.5 điểm / câu.
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {saList.map((q: any) => {
                  const num = qGlobalNum++;
                  return (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-xs sm:text-sm font-medium text-slate-100 flex items-start gap-2">
                          <span className="font-black text-cyan-400 shrink-0">Câu {num}:</span>
                          <MathFormattedText text={q.stem} />
                        </div>
                      </div>

                      {showAnswers ? (
                        <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-cyan-400">Đáp số chính xác:</span>
                            <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-black text-sm">
                              {q.correctAnswer}
                            </span>
                          </div>
                          {q.explanation && (
                            <div className="text-slate-300 leading-relaxed pt-0.5">
                              <span className="font-semibold text-slate-400">Lời giải chi tiết: </span>
                              <MathFormattedText text={q.explanation} />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-2.5 rounded-xl bg-slate-950/50 border border-dashed border-slate-800 text-xs text-slate-500 italic">
                          Thí sinh ghi đáp số vào phiếu làm bài...
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Hệ thống tạo đề chuẩn VinaMathLab & Bộ Giáo Dục 2025</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all cursor-pointer"
          >
            Đóng Xem Trước
          </button>
        </div>
      </div>
    </div>
  );
}
