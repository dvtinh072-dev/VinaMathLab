import { QuizQuestion } from "@/data/allGradesLessonsData";
import { LESSON_8_DATA } from "./lesson8";
import { LESSON_9_DATA } from "./lesson9";
import { LESSON_10_DATA } from "./lesson10";
import { LESSON_11_DATA } from "./lesson11";
import { LESSON_12_DATA } from "./lesson12";
import { LESSON_13_DATA } from "./lesson13";
import { GRADE_6_CHAPTER_2_REVIEW_LESSON } from "./chapter2Review";

export const chapter2AiPracticeData: { [lessonId: string]: QuizQuestion[] } = {
  "t6-b8-quan-he-chia-het": (LESSON_8_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-8.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b9-dau-hieu-chia-het-2-5": (LESSON_9_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-9.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b10-dau-hieu-chia-het-3-9": (LESSON_10_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-10.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b11-so-nguyen-to": (LESSON_11_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-11.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b12-uoc-chung-ucln": (LESSON_12_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-12.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-b13-boi-chung-bcnn": (LESSON_13_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-13.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
  "t6-on-tap-chuong-2": (GRADE_6_CHAPTER_2_REVIEW_LESSON.examSets?.[1]?.quizQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-ot2.${i + 1}`,
    badge: `Luyện tập tổng hợp ${i + 1}`,
    isAiGenerated: true,
  })),
};
