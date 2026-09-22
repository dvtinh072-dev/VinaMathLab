import type { QuizQuestion } from "@/data/allGradesLessonsData";
import { LESSON_14_DATA } from "./lesson14";

export const chapter3AiPracticeData: { [lessonId: string]: QuizQuestion[] } = {
  "t6-b14-tap-hop-so-nguyen": (LESSON_14_DATA.practiceQuestions || []).map((q, i) => ({
    ...q,
    id: `ai-14.${i + 1}`,
    badge: `Luyện tập ${i + 1}`,
    isAiGenerated: true,
  })),
};
