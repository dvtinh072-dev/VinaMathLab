import { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";
import { CurriculumObjective } from "@/data/curriculumStandardsData";
import {
  generateGrade6Question,
  shuffleAnswers,
  randomInt,
  formatNumberVN,
  CognitiveLevel,
} from "@/lib/math-engine/grade6-generator";

export { shuffleAnswers, randomInt, formatNumberVN };
export type { CognitiveLevel };

/**
 * BỘ TẠO ĐỀ THÔNG MINH TOÁN 6 THEO CHUẨN MA TRẬN YCCĐ
 * (Tương thích ngược 100% với các component và API hiện tại)
 */
export function generateAiQuestionByCurriculum(
  lessonId: string,
  lessonTitle: string,
  level: CognitiveLevel,
  objective: CurriculumObjective,
  existingQuestions: QuizQuestion[] = [],
  customPrompt?: string
): QuizQuestion {
  return generateGrade6Question(lessonId, lessonTitle, level, objective, existingQuestions, customPrompt);
}

export const generateAiQuestion = generateAiQuestionByCurriculum;
