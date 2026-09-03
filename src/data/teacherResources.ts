export interface TeacherResourceItem {
  id: string;
  title: string;
  grade: string;
  strand: string;
  type: "giao_an" | "chuyen_de" | "de_thi" | "latex_template";
  fileSize: string;
  downloads: number;
  author: string;
  description: string;
  tags: string[];
}

export const TEACHER_RESOURCES: TeacherResourceItem[] = [
  {
    id: "ga-lop12-kntt-chuong1",
    title: "Kế hoạch bài dạy (Giáo án) Toán 12 - Chương 1: Ứng dụng đạo hàm để khảo sát hàm số",
    grade: "Lớp 12",
    strand: "Đại số & Giải tích",
    type: "giao_an",
    fileSize: "4.2 MB (.docx / .pdf)",
    downloads: 1420,
    author: "Tổ Toán THPT Chuyên VinaMath",
    description: "Soạn chuẩn theo Công văn 5512 của Bộ GD&ĐT, đầy đủ 4 hoạt động: Khởi động, Hình thành kiến thức, Luyện tập, Vận dụng.",
    tags: ["CV 5512", "SGK Kết nối tri thức", "Đạo hàm", "Toán 12"],
  },
  {
    id: "cd-lop10-he-thuc-luong",
    title: "Chuyên đề Bồi dưỡng Học sinh giỏi & Ôn tập: Hệ thức lượng trong tam giác và Ứng dụng thực tế",
    grade: "Lớp 10",
    strand: "Hình học & Đo lường",
    type: "chuyen_de",
    fileSize: "8.5 MB (.pdf)",
    downloads: 2150,
    author: "ThS. Nguyễn Văn Toán",
    description: "Tuyển tập 150 bài toán thực tế đo đạc khoảng cách, chiều cao, bài toán cực trị hình học có lời giải chi tiết và hình vẽ vector SVG.",
    tags: ["Hệ thức lượng", "Định lý Sin-Cos", "Toán thực tế"],
  },
  {
    id: "matrix-thpt-qg-2026",
    title: "Bộ Ma trận & Bản đặc tả Đề kiểm tra Toán 12 theo Cấu trúc Mới Bộ GD&ĐT",
    grade: "Lớp 12",
    strand: "Đánh giá Năng lực",
    type: "de_thi",
    fileSize: "2.1 MB (.xlsx / .docx)",
    downloads: 3890,
    author: "Hội đồng Khảo thí VinaMath",
    description: "Bao gồm bảng ma trận 4 mức độ tư duy (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao) và tỉ lệ phân bổ 3 dạng trắc nghiệm chuẩn xác 100%.",
    tags: ["Ma trận đề thi", "Chuẩn BGD", "Đề minh họa 2026"],
  },
  {
    id: "latex-template-vnm-exam",
    title: "Gói Template LaTeX VinaMath-Exam: Soạn thảo Đề thi Toán 3 Định dạng Tự động",
    grade: "Toàn cấp",
    strand: "Công cụ Giáo viên",
    type: "latex_template",
    fileSize: "1.2 MB (.zip)",
    downloads: 5120,
    author: "Ban Công nghệ VinaMath",
    description: "Mẫu mã nguồn LaTeX tối ưu với gói `ex_test`, tự động định dạng Trắc nghiệm 4 chọn 1, Đúng/Sai bảng 4 ý và Trả lời ngắn, hỗ trợ TikZ/PGFPlots.",
    tags: ["LaTeX", "TikZ", "Đề thi", "TeX Maker"],
  },
];
