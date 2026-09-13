import React from "react";
import Link from "next/link";
import { getCustomExamById } from "@/lib/customExamsStore";
import { SAMPLE_EXAMS } from "@/data/sampleExams";
import { OnlineExamRunner } from "@/components/exam/OnlineExamRunner";
import { AlertCircle, ArrowLeft, BookOpen } from "lucide-react";

interface Props {
  params: {
    examId: string;
  };
}

export const dynamic = "force-dynamic";

export default function StudentExamRoomPage({ params }: Props) {
  const { examId } = params;

  // 1. Check custom teacher exam
  let exam = getCustomExamById(examId);

  // 2. Fallback check sample exams
  if (!exam && SAMPLE_EXAMS[examId]) {
    const s = SAMPLE_EXAMS[examId];
    exam = {
      ...s,
      grade: s.grade || "lop-10",
      gradeNumber: s.gradeNumber || 10,
      targetClass: "Tất cả các lớp",
      createdAt: new Date().toISOString(),
      allowReviewAnswers: true,
      antiCheatEnabled: true,
    };
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
              Mã đề <strong>{examId}</strong> không tồn tại hoặc Thầy/Cô đã gỡ khỏi hệ thống. Vui lòng kiểm tra lại liên kết bài thi.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Về Trang Chủ VinaMath</span>
          </Link>
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
