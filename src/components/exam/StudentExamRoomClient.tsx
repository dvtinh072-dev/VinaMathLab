"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CustomExam } from "@/types/customExam";
import { OnlineExamRunner } from "@/components/exam/OnlineExamRunner";
import { AlertCircle, ArrowLeft, Loader2, Sparkles } from "lucide-react";

interface Props {
  examId: string;
  initialExam: CustomExam | null;
}

export function StudentExamRoomClient({ examId, initialExam }: Props) {
  const [exam, setExam] = useState<CustomExam | null>(initialExam);
  const [loading, setLoading] = useState(!initialExam);

  useEffect(() => {
    if (exam) return;

    // 1. Kiểm tra trong localStorage (đề vừa tạo phía giáo viên hoặc lưu offline)
    try {
      const localExamsRaw = localStorage.getItem("vina_teacher_custom_exams");
      if (localExamsRaw) {
        const localList: CustomExam[] = JSON.parse(localExamsRaw);
        const matched = localList.find((e) => e.id === examId);
        if (matched) {
          setExam(matched);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn("Lỗi đọc đề từ localStorage:", err);
    }

    // 2. Nếu vẫn chưa thấy, gọi fetch API từ server kiểm tra lại lần nữa
    fetch(`/api/teacher/exams`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.exams)) {
          const matched = data.exams.find((e: CustomExam) => e.id === examId);
          if (matched) {
            setExam(matched);
          }
        }
      })
      .catch((e) => console.warn("Lỗi fetch kiểm tra lại:", e))
      .finally(() => {
        setLoading(false);
      });
  }, [exam, examId]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 space-y-4 text-white">
        <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
        <p className="text-sm font-semibold text-slate-300">Đang tải dữ liệu bài thi...</p>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#0e1526] border-2 border-rose-500/40 text-center space-y-5 shadow-2xl text-white">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-black">Không Tìm Thấy Đề Kiểm Tra</h1>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mã đề <strong className="text-rose-300">{examId}</strong> không tồn tại hoặc Thầy/Cô đã gỡ khỏi hệ thống.
            </p>
            {examId === "undefined" && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300 text-left space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Lưu ý hệ thống:
                </p>
                <p>
                  Đề thi này được tạo trước khi hệ thống cập nhật mã định danh tự động. Thầy/Cô vui lòng quay lại trang Giáo viên và bấm nút <strong>Rút Đề Từ Ngân Hàng</strong> để tạo và kích hoạt mã đề thi mới nhất.
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/giao-vien"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-black transition-all"
            >
              <span>Vào Trang Giáo Viên</span>
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Về Trang Chủ</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4 px-2 sm:px-4">
      <OnlineExamRunner exam={exam} />
    </div>
  );
}
