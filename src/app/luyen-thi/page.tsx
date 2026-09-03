import React from "react";
import Link from "next/link";
import { SAMPLE_EXAMS } from "@/data/sampleExams";
import { Award, Timer, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function LuyenThiPage() {
  const exams = Object.values(SAMPLE_EXAMS);

  return (
    <div className="space-y-10">
      {/* Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white shadow-xl space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
          <Award className="w-3.5 h-3.5 text-amber-300" />
          Phòng Thi Thử Chuẩn Hóa 2026
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          Luyện Thi Tốt Nghiệp THPT & Đánh Giá Năng Lực
        </h1>
        <p className="text-sm text-purple-100 max-w-3xl leading-relaxed">
          Đề thi được biên soạn theo đúng ma trận cấu trúc 3 phần mới nhất của Bộ GD&ĐT. Tự động chấm điểm, tính điểm chuẩn xác và cung cấp lời giải chi tiết.
        </p>
      </div>

      {/* 3 Formats Explainer Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
          <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0">
            I
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Trắc nghiệm 4 lựa chọn</div>
            <div className="text-[11px] text-slate-500">12 câu • 0.25đ/câu • 1 đáp án đúng</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
          <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">
            II
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Trắc nghiệm Đúng / Sai</div>
            <div className="text-[11px] text-slate-500">4 câu (16 ý) • Tối đa 1.0đ/câu • Lũy tiến</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3">
          <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
            III
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Trả lời ngắn / Điền số</div>
            <div className="text-[11px] text-slate-500">6 câu • 0.5đ/câu • Điền kết quả số học</div>
          </div>
        </div>
      </div>

      {/* Exams List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Danh Sách Đề Thi Khảo Sát & Luyện Tập:
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="p-6 rounded-3xl bg-card border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
                    Cấu Trúc Mới 2026
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Timer className="w-3.5 h-3.5" /> {exam.durationMinutes} phút
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    • {exam.totalQuestions} câu hỏi
                  </span>
                </div>

                <h3 className="font-extrabold text-lg md:text-xl text-slate-900 dark:text-slate-100">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Bao gồm đầy đủ 3 dạng: Trắc nghiệm 4 chọn 1, Đúng/Sai 4 ý tính điểm chuẩn BGD, và Trả lời ngắn điền số.
                </p>
              </div>

              <Link
                href={`/luyen-thi/${exam.id}`}
                className="px-6 py-3 rounded-2xl bg-primary text-white font-bold text-xs md:text-sm shadow-md hover:bg-primary/90 transition-all flex items-center gap-2 shrink-0"
              >
                Vào làm bài ngay <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
