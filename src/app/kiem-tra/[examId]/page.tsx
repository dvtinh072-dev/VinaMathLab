import React from "react";
import { getCustomExamById } from "@/lib/customExamsStore";
import { SAMPLE_EXAMS } from "@/data/sampleExams";
import { StudentExamRoomClient } from "@/components/exam/StudentExamRoomClient";

interface Props {
  params: {
    examId: string;
  };
}

export const dynamic = "force-dynamic";

export default function StudentExamRoomPage({ params }: Props) {
  const { examId } = params;

  // 1. Check custom teacher exam on server
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

  return <StudentExamRoomClient examId={examId} initialExam={exam} />;
}

