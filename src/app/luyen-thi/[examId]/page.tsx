import React from "react";
import { notFound } from "next/navigation";
import { SAMPLE_EXAMS } from "@/data/sampleExams";
import { ExamEngine } from "@/components/exam/ExamEngine";

interface Props {
  params: {
    examId: string;
  };
}

export default function ExamRoomPage({ params }: Props) {
  const exam = SAMPLE_EXAMS[params.examId];
  if (!exam) notFound();

  return (
    <div className="space-y-6">
      <ExamEngine exam={exam} />
    </div>
  );
}
