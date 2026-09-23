import type { QuizQuestion } from "@/data/allGradesLessonsData";
import { LESSON_14_DATA } from "./lesson14";
import { LESSON_15_DATA } from "./lesson15";
import { LESSON_16_DATA } from "./lesson16";
import { LESSON_17_DATA } from "./lesson17";
import { GRADE_6_CHAPTER_3_REVIEW_LESSON } from "./chapter3Review";

export const chapter3AiPracticeData: { [lessonId: string]: QuizQuestion[] } = {
  "t6-b14-tap-hop-so-nguyen": (LESSON_14_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-14.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b15-phep-cong-tru-so-nguyen": (LESSON_15_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-15.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b16-phep-nhan-so-nguyen": (LESSON_16_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-16.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b17-phep-chia-het-so-nguyen": (LESSON_17_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-17.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-on-tap-chuong-3": (GRADE_6_CHAPTER_3_REVIEW_LESSON.examSets?.[1]?.quizQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-ot3.${i + 1}`,
    badge: `Luyện tập tổng hợp ${i + 1}`,
    isAiGenerated: true,
  })),
};
