export interface CognitiveLevelBreakdown {
  nb: number; // Nhận biết
  th: number; // Thông hiểu
  vd: number; // Vận dụng
  vdc: number; // Vận dụng cao
}

export interface MatrixTopicItem {
  id: string;
  topicName: string; // e.g. "Mệnh đề và tập hợp", "Vectơ và các phép toán"
  part1: CognitiveLevelBreakdown; // Trắc nghiệm 4 lựa chọn (0.25đ/câu)
  part2: CognitiveLevelBreakdown; // Trắc nghiệm Đúng/Sai (1.0đ/câu - 4 ý)
  part3: CognitiveLevelBreakdown; // Trắc nghiệm Trả lời ngắn (0.5đ/câu)
}

export interface ExamMatrix {
  id?: string;
  title: string;
  grade: string; // e.g. "lop-10", "lop-6"
  gradeNumber: number; // 10, 6, 7, 8, 9, 11, 12
  targetClass: string; // e.g. "10A1", "6A", "Tất cả các lớp"
  durationMinutes: number; // e.g. 45, 60, 90
  topics: MatrixTopicItem[];
  sourceOption: "project" | "internet" | "hybrid";
  note?: string;
}

export interface PrebuiltMatrix {
  id: string;
  title: string;
  gradeNumber: number;
  examType: "giua-ky-1" | "cuoi-ky-1" | "giua-ky-2" | "cuoi-ky-2" | "khao-sat-45p";
  durationMinutes: number;
  description: string;
  topics: MatrixTopicItem[];
}
