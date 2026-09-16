export type QuestionType = "multiple_choice" | "true_false" | "short_answer" | "essay";
export type CognitiveLevel = "NB" | "TH" | "VD" | "VDC";

export interface BankQuestion {
  id: string;                    // Mã định danh duy nhất (vd: bq-10-c1-mc-001)
  gradeNumber: number;          // 10
  chapterId: string;            // c1, c2, ..., c10
  chapterName: string;          // Chương I: Mệnh đề và tập hợp
  lessonId?: string;            // b1, b2, ...
  lessonTitle?: string;         // Bài 1: Mệnh đề
  type: QuestionType;           // multiple_choice | true_false | short_answer | essay
  level: CognitiveLevel;        // NB | TH | VD | VDC
  stem: string;                 // Nội dung câu hỏi (chứa công thức LaTeX KaTeX)
  options?: { key: "A" | "B" | "C" | "D"; text: string }[];
  correctKey?: string;          // Đáp án trắc nghiệm A, B, C, D
  statements?: { id: string; text: string; isCorrect: boolean }[]; // Đúng/Sai 4 ý a,b,c,d
  correctAnswer?: string;       // Đáp án trả lời ngắn (số nguyên, phân số, số thập phân)
  explanation: string;          // Lời giải chi tiết
  sourceCitation?: string;      // Nguồn tài liệu trong dự án
  source?: string;              // Nguồn trích dẫn hiển thị
  createdAt?: string;
}

export interface ChapterCatalogItem {
  chapterId: string;
  chapterNumber: number;
  chapterName: string;
  fileKey: string;              // Tên file lưu trữ JSON ở server (vd: c1-menh-de-tap-hop)
  totalQuestions: number;
  byType: {
    multiple_choice: number;
    true_false: number;
    short_answer: number;
    essay: number;
  };
  byLevel: {
    NB: number;
    TH: number;
    VD: number;
    VDC: number;
  };
}

export interface QuestionBankCatalog {
  gradeNumber: number;
  totalQuestions: number;
  updatedAt: string;
  chapters: ChapterCatalogItem[];
}

export interface DrawExamConfig {
  title: string;
  gradeNumber: number;
  targetClass?: string;
  durationMinutes: number;
  scopeMode: "all" | "selected_chapters";
  selectedChapterIds: string[];
  counts: {
    multiple_choice: number;    // Số câu trắc nghiệm 4 lựa chọn (mặc định 12)
    true_false: number;         // Số câu trắc nghiệm Đúng/Sai (mặc định 4)
    short_answer: number;       // Số câu trắc nghiệm Trả lời ngắn (mặc định 6)
    essay: number;              // Số câu tự luận (mặc định 0)
  };
  levelDistribution: {
    NB: number;                 // Tỉ lệ % hoặc trọng số Nhận biết (vd: 40)
    TH: number;                 // Tỉ lệ % hoặc trọng số Thông hiểu (vd: 30)
    VD: number;                 // Tỉ lệ % hoặc trọng số Vận dụng (vd: 20)
    VDC: number;                // Tỉ lệ % hoặc trọng số Vận dụng cao (vd: 10)
  };
}
