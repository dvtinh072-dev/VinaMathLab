import { PrebuiltMatrix } from "@/types/examMatrix";

export const PREBUILT_EXAM_MATRICES: PrebuiltMatrix[] = [
  // =========================================================================
  // TOÁN 10
  // =========================================================================
  {
    id: "matrix-t10-gk1",
    title: "Ma trận Đề Giữa Học Kỳ 1 - Toán 10 (Chuẩn Cấu Trúc BGD 2025)",
    gradeNumber: 10,
    examType: "giua-ky-1",
    durationMinutes: 90,
    description: "Trọng tâm: Mệnh đề & Tập hợp, Bất phương trình & Hệ BPT bậc nhất hai ẩn, Hệ thức lượng trong tam giác.",
    topics: [
      {
        id: "t10-ch1",
        topicName: "Chương I: Mệnh đề và tập hợp",
        part1: { nb: 3, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
      {
        id: "t10-ch2",
        topicName: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
        part1: { nb: 2, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
      {
        id: "t10-ch3",
        topicName: "Chương III: Hệ thức lượng trong tam giác & Định lý sin, cosin",
        part1: { nb: 2, th: 1, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 1 },
        part3: { nb: 0, th: 0, vd: 1, vdc: 1 },
      },
    ],
  },
  {
    id: "matrix-t10-ck1",
    title: "Ma trận Đề Cuối Học Kỳ 1 - Toán 10 (Chuẩn Cấu Trúc BGD 2025)",
    gradeNumber: 10,
    examType: "cuoi-ky-1",
    durationMinutes: 90,
    description: "Trọng tâm toàn học kỳ 1: Mệnh đề, Tập hợp, Hệ thức lượng, Vectơ & Các phép toán vectơ, Tích vô hướng.",
    topics: [
      {
        id: "t10-ch1-ck",
        topicName: "Chương I & II: Mệnh đề, Tập hợp & BPT bậc nhất hai ẩn",
        part1: { nb: 3, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 0, vdc: 0 },
      },
      {
        id: "t10-ch3-ck",
        topicName: "Chương III: Hệ thức lượng trong tam giác",
        part1: { nb: 2, th: 1, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
      {
        id: "t10-ch4-ck",
        topicName: "Chương IV: Vectơ, các phép toán vectơ & Tích vô hướng",
        part1: { nb: 2, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 1 },
      },
    ],
  },
  {
    id: "matrix-t10-45p-vecto",
    title: "Ma trận Đề Khảo Sát 45 Phút: Chuyên Đề Vectơ - Toán 10",
    gradeNumber: 10,
    examType: "khao-sat-45p",
    durationMinutes: 45,
    description: "Khái niệm vectơ, tổng và hiệu hai vectơ, tích của một số với một vectơ, tích vô hướng của hai vectơ.",
    topics: [
      {
        id: "t10-vecto-kn",
        topicName: "Khái niệm vectơ & Hai vectơ cùng phương, cùng hướng, bằng nhau",
        part1: { nb: 2, th: 1, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 0, vdc: 0 },
      },
      {
        id: "t10-vecto-phep-toan",
        topicName: "Tổng và hiệu hai vectơ, tích vectơ với một số",
        part1: { nb: 2, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
      {
        id: "t10-vecto-tich-vo-huong",
        topicName: "Tích vô hướng của hai vectơ & Ứng dụng hình học",
        part1: { nb: 1, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 0, vd: 1, vdc: 0 },
        part3: { nb: 0, th: 0, vd: 1, vdc: 1 },
      },
    ],
  },

  // =========================================================================
  // TOÁN 6
  // =========================================================================
  {
    id: "matrix-t6-gk1",
    title: "Ma trận Đề Giữa Học Kỳ 1 - Toán 6 (KNTT)",
    gradeNumber: 6,
    examType: "giua-ky-1",
    durationMinutes: 60,
    description: "Tập hợp số tự nhiên, Các phép tính số tự nhiên, Lũy thừa, Tính chất chia hết, Tam giác đều, Hình vuông, Lục giác đều.",
    topics: [
      {
        id: "t6-ch1",
        topicName: "Chương I: Tập hợp các số tự nhiên & Phép tính lũy thừa",
        part1: { nb: 3, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
      {
        id: "t6-ch2",
        topicName: "Chương II: Tính chất chia hết & Số nguyên tố, Hợp số, ƯCLN, BCNN",
        part1: { nb: 2, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 1 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
      {
        id: "t6-ch3",
        topicName: "Chương III: Hình học trực quan (Tam giác đều, Hình vuông, Hình lục giác đều, Hình chữ nhật)",
        part1: { nb: 2, th: 1, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 0, vdc: 1 },
      },
    ],
  },
  {
    id: "matrix-t6-ck1",
    title: "Ma trận Đề Cuối Học Kỳ 1 - Toán 6 (KNTT)",
    gradeNumber: 6,
    examType: "cuoi-ky-1",
    durationMinutes: 90,
    description: "Số tự nhiên, Số nguyên (Tập hợp Z, các phép tính cộng trừ nhân chia số nguyên), Hình học trực quan.",
    topics: [
      {
        id: "t6-ck-stn",
        topicName: "Số tự nhiên & Tính chất chia hết, ƯCLN, BCNN",
        part1: { nb: 3, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 0 },
      },
      {
        id: "t6-ck-snguyen",
        topicName: "Số nguyên: Cộng, trừ, nhân, chia số nguyên & Quy tắc dấu ngoặc",
        part1: { nb: 3, th: 2, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 1, vdc: 0 },
        part3: { nb: 0, th: 1, vd: 1, vdc: 1 },
      },
      {
        id: "t6-ck-hinh",
        topicName: "Hình học trực quan & Tính chu vi, diện tích các hình phẳng",
        part1: { nb: 1, th: 1, vd: 0, vdc: 0 },
        part2: { nb: 0, th: 1, vd: 0, vdc: 0 },
        part3: { nb: 0, th: 0, vd: 1, vdc: 0 },
      },
    ],
  },
];
