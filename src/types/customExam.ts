import { QuestionData } from "@/components/exam/ExamEngine";

export interface CustomExam {
  id: string;
  title: string;
  subtitle?: string;
  grade?: string; // e.g. "lop-10", "lop-6", "lop-11", "lop-12"
  gradeNumber?: number; // 10, 6, 7, 8, 9, 11, 12
  targetClass: string; // e.g. "10A1", "6A", "Tất cả các lớp"
  authorTeacherId?: string;
  authorName?: string;
  durationMinutes: number; // e.g. 15, 45, 60, 90
  totalQuestions: number;
  questions: QuestionData[];
  createdAt: string; // ISO string
  allowReviewAnswers: boolean; // default true
  antiCheatEnabled: boolean; // default true (track focus/blur)
}

export interface StudentExamSubmission {
  id: string;
  examId: string;
  studentName: string;
  studentClass: string;
  studentUsername?: string;
  score: number; // Thang 10 (e.g. 8.5)
  scorePart1: number; // Trắc nghiệm 4 lựa chọn
  scorePart2: number; // Trắc nghiệm Đúng / Sai
  scorePart3: number; // Trả lời ngắn
  totalQuestions: number;
  correctCount: number;
  timeSpentSeconds: number;
  blurCount: number; // Số lần thoát/rời màn hình thi
  blurEvents?: { timestamp: string; reason: string }[];
  submittedAt: string; // ISO string
  mcAnswers: { [id: string]: "A" | "B" | "C" | "D" };
  tfAnswers: { [id: string]: { [key in "a" | "b" | "c" | "d"]?: boolean } };
  saAnswers: { [id: string]: string };
}
