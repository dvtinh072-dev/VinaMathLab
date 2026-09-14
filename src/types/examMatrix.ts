export interface CognitiveLevelBreakdown {
  nb: number; // Nhận biết (Biết)
  th: number; // Thông hiểu (Hiểu)
  vd: number; // Vận dụng (VD)
  vdc: number; // Vận dụng cao (VDC)
}

export interface MatrixTopicItem {
  id: string;
  topicName: string; // Tên Chủ đề / Chương / Đơn vị kiến thức
  competencyRequired?: string; // Yêu cầu cần đạt / Năng lực đánh giá (Bản đặc tả CV 7991)
  part1: CognitiveLevelBreakdown; // Phần I: Trắc nghiệm 4 lựa chọn (0.25đ/câu - tỉ lệ chuẩn ~30%)
  part2: CognitiveLevelBreakdown; // Phần II: Trắc nghiệm Đúng/Sai (1.0đ/câu - 4 ý a,b,c,d - tỉ lệ chuẩn ~20%)
  part3: CognitiveLevelBreakdown; // Phần III: Trắc nghiệm Trả lời ngắn / Tự luận (0.5đ/câu - tỉ lệ chuẩn ~20% - 30%)
}

export interface ExamMatrix {
  id?: string;
  title: string;
  grade: string; // e.g. "lop-10", "lop-6"
  gradeNumber: number; // 10, 6, 7, 8, 9, 11, 12
  targetClass: string; // e.g. "10A1", "6A", "Tất cả các lớp"
  durationMinutes: number; // e.g. 45, 60, 90
  standardCode?: "CV7991" | "BGD2025" | "CUSTOM"; // Mã chuẩn ma trận
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
  isCV7991Standard?: boolean; // Đạt chuẩn Công văn 7991/BGDĐT-GDTrH
  scoreRatios?: {
    part1: number; // 3.0 điểm (30%)
    part2: number; // 2.0 điểm (20%)
    part3: number; // 2.0 điểm (20%)
    essayOrShortAdv: number; // 3.0 điểm (30%)
  };
  topics: MatrixTopicItem[];
}

