"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CURRICULUM_DATA, LessonItem } from "@/data/curriculumData";
import { getUnifiedLessonDetail } from "@/data/allGradesLessonsData";
import { Sidebar } from "@/components/layout/Sidebar";
import { GamifiedMathQuiz } from "@/components/interactive/GamifiedMathQuiz";
import { Sparkles, ArrowLeft, Gamepad2 } from "lucide-react";

interface Props {
  params: {
    grade: string;
    topicId: string;
  };
}

export default function TopicLessonPage({ params }: Props) {
  const gradeData = CURRICULUM_DATA[params.grade];
  if (!gradeData) notFound();

  const topic: LessonItem = gradeData.topics.find((t) => t.id === params.topicId) || gradeData.topics[0];
  if (!topic) notFound();

  // Lấy dữ liệu chi tiết bài học chuẩn SGK
  const lessonDetail = getUnifiedLessonDetail(params.grade, topic.id, topic, gradeData);

  return (
    <div className="flex flex-col lg:flex-row gap-5 items-start">
      {/* Sidebar Navigation */}
      <Sidebar gradeData={gradeData} />

      {/* Main Real-Combat Arena Body: Cố định vị trí trên màn hình khi cuộn danh sách bài */}
      <article className="flex-1 w-full space-y-3.5 min-w-0 lg:sticky lg:top-20">
        {/* Compact Header: Điều hướng & Tiêu đề bài học */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Link
              href="/hoc-tap"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white transition-all shadow-sm shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Đổi Khối Lớp
            </Link>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-500 text-[11px] font-black truncate">
              <Sparkles className="w-3 h-3 shrink-0" />
              <span className="truncate">{lessonDetail.bookChapter}</span>
            </div>
          </div>

          <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-slate-100 tracking-tight truncate">
            {lessonDetail.title}
          </h1>
        </div>

        {/* ĐẤU TRƯỜNG THỰC CHIẾN GỌN GÀNG VỪA VẶN MÀN HÌNH */}
        <GamifiedMathQuiz
          key={topic.id}
          lessonTitle={`${lessonDetail.title} (SGK Kết Nối Tri Thức)`}
          gradeKey={params.grade}
          lessonId={topic.id}
          gradeTitle={gradeData.title}
          questions={lessonDetail.quizQuestions}
          theorySections={lessonDetail.theorySections}
          tips={lessonDetail.tips}
          traps={lessonDetail.traps}
          trueFalseQuestions={lessonDetail.trueFalseQuestions}
          shortAnswerQuestions={lessonDetail.shortAnswerQuestions}
          examSets={lessonDetail.examSets}
        />
      </article>
    </div>
  );
}
