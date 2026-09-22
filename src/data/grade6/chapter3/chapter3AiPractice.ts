import type { QuizQuestion } from "@/data/allGradesLessonsData";
import { LESSON_14_DATA } from "./lesson14";
import { LESSON_15_DATA } from "./lesson15";

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
};
