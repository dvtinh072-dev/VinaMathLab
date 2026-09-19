import { EssayAttachment } from "./customExam";

export interface PracticeExamResult {
  id: string;
  examId: string;
  examTitle: string;
  grade?: string;
  gradeNumber?: number;
  examType?: string;
  submittedAt: string; // ISO string
  timeSpentSeconds: number;
  score: number; // Thang 10 (e.g. 8.5)
  totalScore?: number; // Alias cho score
  maxScore?: number;
  scorePart1: number; // Trắc nghiệm 4 lựa chọn
  scorePart2: number; // Trắc nghiệm Đúng / Sai
  scorePart3: number; // Trả lời ngắn
  totalQuestions: number;
  correctCount: number;
  mcAnswers: { [id: string]: "A" | "B" | "C" | "D" };
  tfAnswers: { [id: string]: { [key in "a" | "b" | "c" | "d"]?: boolean } };
  saAnswers: { [id: string]: string };
  essayFiles?: EssayAttachment[];
  userId?: string;
  studentName?: string;
  studentClass?: string;
}

export interface PracticeExamSummary {
  examId: string;
  attemptsCount: number;
  bestScore: number;
  latestScore: number;
  latestSubmittedAt: string;
}
