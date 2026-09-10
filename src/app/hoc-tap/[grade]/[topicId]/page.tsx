"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CURRICULUM_DATA, LessonItem } from "@/data/curriculumData";
import { getUnifiedLessonDetail } from "@/data/allGradesLessonsData";
import { Sidebar } from "@/components/layout/Sidebar";
import { GamifiedMathQuiz } from "@/components/interactive/GamifiedMathQuiz";
import { useAuth } from "@/context/AuthContext";
import { Sparkles, ArrowLeft, Lock, LogIn, UserPlus, ShieldAlert } from "lucide-react";
import { canAccessGrade, getUserGradeKey } from "@/lib/teacherClassUtils";

interface Props {
  params: {
    grade: string;
    topicId: string;
  };
}

export default function TopicLessonPage({ params }: Props) {
  const { user, isStudent, isAdmin, openAuthModal } = useAuth();
  const isAuthenticated = Boolean(user && (isStudent || isAdmin));

  const gradeData = CURRICULUM_DATA[params.grade];
  if (!gradeData) notFound();

  const topic: LessonItem = gradeData.topics.find((t) => t.id === params.topicId) || gradeData.topics[0];
  if (!topic) notFound();

  // Lấy dữ liệu chi tiết bài học chuẩn SGK
  const lessonDetail = getUnifiedLessonDetail(params.grade, topic.id, topic, gradeData);

  // Nếu người dùng chưa đăng nhập, hiển thị Màn hình yêu cầu Đăng nhập / Đăng ký
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <Sidebar gradeData={gradeData} />
        <article className="flex-1 w-full min-w-0">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#0e1526] border-2 border-amber-500/40 text-center space-y-6 shadow-2xl max-w-xl mx-auto my-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-black">
                {gradeData.title} • {lessonDetail.title}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Vui Lòng Đăng Nhập Hoặc Đăng Ký
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Bạn cần đăng nhập tài khoản học sinh hoặc đăng ký thành viên mới để xem video bài giảng, thực hiện bài tập trắc nghiệm và lưu kết quả học tập.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => openAuthModal("student", "login")}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs sm:text-sm hover:from-blue-500 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Đăng Nhập Ngay</span>
              </button>
              <button
                onClick={() => openAuthModal("student", "register")}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white font-black text-xs sm:text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-amber-400" />
                <span>Đăng Ký Tài Khoản</span>
              </button>
            </div>

            <div className="pt-2 text-center">
              <Link
                href="/hoc-tap"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Quay lại chọn khối lớp khác</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Kiểm tra phân quyền khối học: Học sinh chỉ được học khối mình đã đăng ký
  const gradeCheck = canAccessGrade(user, params.grade);
  if (!gradeCheck.allowed && gradeCheck.reason === "GRADE_MISMATCH") {
    const userGradeKey = getUserGradeKey(user);
    const userGradeData = userGradeKey ? CURRICULUM_DATA[userGradeKey] : null;
    const userFirstLessonId = userGradeData?.chapters[0]?.lessons[0]?.id;
    const myGradeHref = userGradeKey
      ? (userFirstLessonId ? `/hoc-tap/${userGradeKey}/${userFirstLessonId}` : `/hoc-tap/${userGradeKey}`)
      : "/hoc-tap";

    return (
      <div className="max-w-2xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-[#0e1526] border-2 border-rose-500/40 text-center space-y-6 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-500/20">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 text-xs font-black">
            {gradeData.title} • Quyền Truy Cập Bị Giới Hạn
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Nội Dung Không Thuộc Khối Đã Đăng Ký
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
            Tài khoản của bạn đăng ký <strong className="text-cyan-400 font-bold">{gradeCheck.userGradeLabel}</strong>. Bạn chỉ có quyền học tập và làm bài trong khối của mình và không được phép xem nội dung của <strong className="text-rose-400 font-bold">{gradeCheck.targetGradeLabel}</strong>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {userGradeKey && (
            <Link
              href={myGradeHref}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs sm:text-sm hover:from-blue-500 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Vào Học {gradeCheck.userGradeLabel}</span>
            </Link>
          )}
          <Link
            href="/hoc-tap"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-white font-black text-xs sm:text-sm hover:bg-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Danh Sách Khối Lớp</span>
          </Link>
        </div>
      </div>
    );
  }

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
          youtubeVideoId={lessonDetail.youtubeVideoId}
          youtubeVideoTitle={lessonDetail.youtubeVideoTitle}
          youtubeVideos={lessonDetail.youtubeVideos}
          videoQuestions={lessonDetail.videoQuestions}
          showTextTheory={lessonDetail.showTextTheory}
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
