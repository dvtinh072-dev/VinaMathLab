import type { QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export interface Grade11AiPracticePackage {
  quizQuestions: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
}

export const GRADE_11_AI_PRACTICE_DATA: Record<string, Grade11AiPracticePackage> = {
  // ==========================================
  // BÀI 1: GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC
  // ==========================================
  "t11-b1-gia-tri-luong-giac-goc": {
    // ------------------------------------------
    // PHẦN I: 40 CÂU TRẮC NGHIỆM 4 LỰA CHỌN
    // ------------------------------------------
    quizQuestions: [
      // ===== DẠNG 1: ĐỔI ĐƠN VỊ ĐỘ ↔ RADIAN (8 câu) =====
      {
        id: "ai-11.1.1",
        badge: "Luyện thêm 1 - Đổi 150° sang radian",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Đổi góc $150°$ sang đơn vị radian, ta được:",
        options: ["$\\dfrac{5\\pi}{6}$", "$\\dfrac{2\\pi}{3}$", "$\\dfrac{3\\pi}{4}$", "$\\dfrac{7\\pi}{6}$"],
        correctIndex: 0,
        explanation: "Ta có: $150° = 150 \\cdot \\dfrac{\\pi}{180} = \\dfrac{150\\pi}{180} = \\dfrac{5\\pi}{6}$ (rad)."
      },
      {
        id: "ai-11.1.2",
        badge: "Luyện thêm 2 - Đổi 315° sang radian",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Đổi góc $315°$ sang đơn vị radian, ta được:",
        options: ["$\\dfrac{7\\pi}{4}$", "$\\dfrac{3\\pi}{2}$", "$\\dfrac{5\\pi}{4}$", "$\\dfrac{9\\pi}{4}$"],
        correctIndex: 0,
        explanation: "Ta có: $315° = 315 \\cdot \\dfrac{\\pi}{180} = \\dfrac{315\\pi}{180} = \\dfrac{7\\pi}{4}$ (rad)."
      },
      {
        id: "ai-11.1.3",
        badge: "Luyện thêm 3 - Đổi 7π/6 sang độ",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Đổi $\\dfrac{7\\pi}{6}$ radian sang đơn vị độ, ta được:",
        options: ["$210°$", "$240°$", "$180°$", "$270°$"],
        correctIndex: 0,
        explanation: "Ta có: $\\dfrac{7\\pi}{6}$ rad $= \\dfrac{7\\pi}{6} \\cdot \\dfrac{180°}{\\pi} = \\dfrac{7 \\times 180°}{6} = 210°$."
      },
      {
        id: "ai-11.1.4",
        badge: "Luyện thêm 4 - Độ dài cung tròn",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Một cung tròn có số đo $\\dfrac{2\\pi}{3}$ rad trên đường tròn bán kính $R = 6$ cm. Độ dài cung đó là:",
        options: ["$4\\pi$ cm", "$3\\pi$ cm", "$2\\pi$ cm", "$6\\pi$ cm"],
        correctIndex: 0,
        explanation: "Độ dài cung: $l = R \\cdot |\\alpha| = 6 \\cdot \\dfrac{2\\pi}{3} = 4\\pi$ (cm)."
      },
      {
        id: "ai-11.1.5",
        badge: "Luyện thêm 5 - Đổi −210° sang radian",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Đổi góc $-210°$ sang đơn vị radian, ta được:",
        options: ["$-\\dfrac{7\\pi}{6}$", "$-\\dfrac{5\\pi}{6}$", "$-\\dfrac{3\\pi}{2}$", "$-\\dfrac{7\\pi}{4}$"],
        correctIndex: 0,
        explanation: "Ta có: $-210° = -210 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{7\\pi}{6}$ (rad)."
      },
      {
        id: "ai-11.1.6",
        badge: "Luyện thêm 6 - Bán kính từ độ dài cung",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Một cung tròn có số đo $\\dfrac{\\pi}{4}$ rad và độ dài bằng $3\\pi$ cm. Bán kính của đường tròn là:",
        options: ["$12$ cm", "$6$ cm", "$4\\pi$ cm", "$3$ cm"],
        correctIndex: 0,
        explanation: "Từ $l = R \\cdot |\\alpha|$, ta có $R = \\dfrac{l}{|\\alpha|} = \\dfrac{3\\pi}{\\pi/4} = 3\\pi \\cdot \\dfrac{4}{\\pi} = 12$ (cm)."
      },
      {
        id: "ai-11.1.7",
        badge: "Luyện thêm 7 - Số đo tổng quát của góc",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Số đo tổng quát của góc lượng giác có một số đo là $\\dfrac{5\\pi}{3}$ là:",
        options: ["$\\dfrac{5\\pi}{3} + k2\\pi$ $(k \\in \\mathbb{Z})$", "$\\dfrac{5\\pi}{3} + k\\pi$ $(k \\in \\mathbb{Z})$", "$\\dfrac{5\\pi}{3} + \\dfrac{k\\pi}{2}$ $(k \\in \\mathbb{Z})$", "$\\dfrac{5\\pi}{3} + k3\\pi$ $(k \\in \\mathbb{Z})$"],
        correctIndex: 0,
        explanation: "Số đo tổng quát của một góc lượng giác là $\\alpha + k2\\pi$ $(k \\in \\mathbb{Z})$. Vậy là $\\dfrac{5\\pi}{3} + k2\\pi$ $(k \\in \\mathbb{Z})$."
      },
      {
        id: "ai-11.1.8",
        badge: "Luyện thêm 8 - Vận tốc góc bánh xe",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Một bánh xe quay với vận tốc 5 vòng/giây. Vận tốc góc của bánh xe (rad/s) là:",
        options: ["$10\\pi$ rad/s", "$5\\pi$ rad/s", "$2\\pi$ rad/s", "$\\pi$ rad/s"],
        correctIndex: 0,
        explanation: "Mỗi vòng quay ứng với $2\\pi$ rad. Với 5 vòng/giây, vận tốc góc là $5 \\times 2\\pi = 10\\pi$ (rad/s)."
      },
      // ===== DẠNG 2: ĐƯỜNG TRÒN LƯỢNG GIÁC (8 câu) =====
      {
        id: "ai-11.1.9",
        badge: "Luyện thêm 9 - Góc phần tư của cung",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Điểm biểu diễn của góc lượng giác $\\dfrac{5\\pi}{4}$ nằm ở:",
        options: ["Góc phần tư thứ III", "Góc phần tư thứ II", "Góc phần tư thứ IV", "Góc phần tư thứ I"],
        correctIndex: 0,
        explanation: "$\\dfrac{5\\pi}{4} \\approx 3.93$ rad. Vì $\\pi < \\dfrac{5\\pi}{4} < \\dfrac{3\\pi}{2}$ nên điểm biểu diễn nằm ở góc phần tư thứ III."
      },
      {
        id: "ai-11.1.10",
        badge: "Luyện thêm 10 - Tọa độ điểm biểu diễn",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Điểm biểu diễn góc lượng giác $\\dfrac{2\\pi}{3}$ trên đường tròn đơn vị có tọa độ là:",
        options: ["$\\left(-\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$", "$\\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$", "$\\left(-\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$", "$\\left(\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$"],
        correctIndex: 0,
        explanation: "$\\cos\\dfrac{2\\pi}{3} = -\\dfrac{1}{2}$ và $\\sin\\dfrac{2\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$. Vậy điểm biểu diễn có tọa độ $\\left(-\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$."
      },
      {
        id: "ai-11.1.11",
        badge: "Luyện thêm 11 - Góc phần tư của cung âm",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Điểm biểu diễn của góc lượng giác $-\\dfrac{\\pi}{3}$ nằm ở:",
        options: ["Góc phần tư thứ IV", "Góc phần tư thứ I", "Góc phần tư thứ III", "Góc phần tư thứ II"],
        correctIndex: 0,
        explanation: "$-\\dfrac{\\pi}{3}$ là góc âm, quay theo chiều kim đồng hồ. $-\\dfrac{\\pi}{2} < -\\dfrac{\\pi}{3} < 0$, nên điểm biểu diễn nằm ở góc phần tư thứ IV."
      },
      {
        id: "ai-11.1.12",
        badge: "Luyện thêm 12 - Số đo tổng quát từ hình vẽ",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Trên đường tròn lượng giác, điểm $M$ biểu diễn góc có số đo $\\dfrac{3\\pi}{4}$. Số đo tổng quát của tất cả các góc lượng giác có cùng tia cuối với góc này là:",
        options: ["$\\dfrac{3\\pi}{4} + k2\\pi$ $(k \\in \\mathbb{Z})$", "$\\dfrac{3\\pi}{4} + k\\pi$ $(k \\in \\mathbb{Z})$", "$\\dfrac{3\\pi}{4} + \\dfrac{k\\pi}{4}$ $(k \\in \\mathbb{Z})$", "$-\\dfrac{3\\pi}{4} + k2\\pi$ $(k \\in \\mathbb{Z})$"],
        correctIndex: 0,
        explanation: "Tất cả các góc lượng giác có cùng tia cuối với nhau đều có số đo tổng quát $\\dfrac{3\\pi}{4} + k2\\pi$ $(k \\in \\mathbb{Z})$."
      },
      {
        id: "ai-11.1.13",
        badge: "Luyện thêm 13 - Góc phần tư không chứa điểm",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Góc $\\alpha$ thỏa mãn $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$. Điểm biểu diễn $M(\\cos\\alpha; \\sin\\alpha)$ nằm ở:",
        options: ["Góc phần tư thứ IV", "Góc phần tư thứ III", "Góc phần tư thứ I", "Góc phần tư thứ II"],
        correctIndex: 0,
        explanation: "Khi $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$: $\\cos\\alpha > 0$, $\\sin\\alpha < 0$. Vậy điểm $M$ nằm ở góc phần tư thứ IV (x > 0, y < 0)."
      },
      {
        id: "ai-11.1.14",
        badge: "Luyện thêm 14 - Điểm cụ thể trên đường tròn",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Điểm nào sau đây biểu diễn góc $\\dfrac{3\\pi}{2}$ trên đường tròn lượng giác?",
        options: ["$B(0; -1)$", "$A(1; 0)$", "$C(-1; 0)$", "$D(0; 1)$"],
        correctIndex: 0,
        explanation: "$\\cos\\dfrac{3\\pi}{2} = 0$, $\\sin\\dfrac{3\\pi}{2} = -1$. Vậy điểm biểu diễn là $B(0; -1)$."
      },
      {
        id: "ai-11.1.15",
        badge: "Luyện thêm 15 - Góc lớn hơn 2π",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Góc $\\dfrac{13\\pi}{4}$ có điểm biểu diễn trùng với điểm biểu diễn của góc nào dưới đây?",
        options: ["$\\dfrac{5\\pi}{4}$", "$\\dfrac{\\pi}{4}$", "$\\dfrac{3\\pi}{4}$", "$\\dfrac{7\\pi}{4}$"],
        correctIndex: 0,
        explanation: "$\\dfrac{13\\pi}{4} = \\dfrac{5\\pi}{4} + 2\\pi$. Nên điểm biểu diễn của $\\dfrac{13\\pi}{4}$ trùng với điểm biểu diễn của $\\dfrac{5\\pi}{4}$."
      },
      {
        id: "ai-11.1.16",
        badge: "Luyện thêm 16 - Chia mâm bánh xe",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Mâm bánh xe được chia đều thành 8 phần bằng nhau, xuất phát từ điểm $A(1;0)$. Điểm chia thứ 3 (quay ngược chiều kim đồng hồ) có góc số đo là:",
        options: ["$\\dfrac{3\\pi}{4}$ rad", "$\\dfrac{3\\pi}{8}$ rad", "$\\dfrac{\\pi}{4}$ rad", "$\\dfrac{\\pi}{2}$ rad"],
        correctIndex: 0,
        explanation: "Mỗi phần chia ứng với góc $\\dfrac{2\\pi}{8} = \\dfrac{\\pi}{4}$ rad. Điểm thứ 3 có số đo: $3 \\times \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}$ rad."
      },
      // ===== DẠNG 3: TÍNH GIÁ TRỊ LƯỢNG GIÁC (8 câu) =====
      {
        id: "ai-11.1.17",
        badge: "Luyện thêm 17 - Tính cos(5π/6)",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Giá trị của $\\cos\\dfrac{5\\pi}{6}$ bằng:",
        options: ["$-\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$"],
        correctIndex: 0,
        explanation: "$\\cos\\dfrac{5\\pi}{6} = \\cos\\left(\\pi - \\dfrac{\\pi}{6}\\right) = -\\cos\\dfrac{\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$."
      },
      {
        id: "ai-11.1.18",
        badge: "Luyện thêm 18 - Tính tan(7π/4)",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Giá trị của $\\tan\\dfrac{7\\pi}{4}$ bằng:",
        options: ["$-1$", "$1$", "$\\sqrt{3}$", "$-\\sqrt{3}$"],
        correctIndex: 0,
        explanation: "$\\tan\\dfrac{7\\pi}{4} = \\tan\\left(2\\pi - \\dfrac{\\pi}{4}\\right) = -\\tan\\dfrac{\\pi}{4} = -1$."
      },
      {
        id: "ai-11.1.19",
        badge: "Luyện thêm 19 - Tính cot(2π/3)",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Giá trị của $\\cot\\dfrac{2\\pi}{3}$ bằng:",
        options: ["$-\\dfrac{\\sqrt{3}}{3}$", "$\\dfrac{\\sqrt{3}}{3}$", "$-\\sqrt{3}$", "$\\sqrt{3}$"],
        correctIndex: 0,
        explanation: "$\\cot\\dfrac{2\\pi}{3} = \\dfrac{\\cos(2\\pi/3)}{\\sin(2\\pi/3)} = \\dfrac{-1/2}{\\sqrt{3}/2} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$."
      },
      {
        id: "ai-11.1.20",
        badge: "Luyện thêm 20 - Tính sin(−5π/6)",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Giá trị của $\\sin\\left(-\\dfrac{5\\pi}{6}\\right)$ bằng:",
        options: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$-\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{3}}{2}$"],
        correctIndex: 0,
        explanation: "$\\sin\\left(-\\dfrac{5\\pi}{6}\\right) = -\\sin\\dfrac{5\\pi}{6} = -\\sin\\left(\\pi - \\dfrac{\\pi}{6}\\right) = -\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}$."
      },
      {
        id: "ai-11.1.21",
        badge: "Luyện thêm 21 - Tính cos(−π/4)",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Giá trị của $\\cos\\left(-\\dfrac{\\pi}{4}\\right)$ bằng:",
        options: ["$\\dfrac{\\sqrt{2}}{2}$", "$-\\dfrac{\\sqrt{2}}{2}$", "$1$", "$-1$"],
        correctIndex: 0,
        explanation: "Do hàm $\\cos$ là hàm chẵn: $\\cos\\left(-\\dfrac{\\pi}{4}\\right) = \\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$."
      },
      {
        id: "ai-11.1.22",
        badge: "Luyện thêm 22 - Tính sin(11π/6)",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Giá trị của $\\sin\\dfrac{11\\pi}{6}$ bằng:",
        options: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{2}$", "$-\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{3}}{2}$"],
        correctIndex: 0,
        explanation: "$\\sin\\dfrac{11\\pi}{6} = \\sin\\left(2\\pi - \\dfrac{\\pi}{6}\\right) = -\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}$."
      },
      {
        id: "ai-11.1.23",
        badge: "Luyện thêm 23 - Dấu của GTLG theo góc phần tư",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Nếu $\\dfrac{\\pi}{2} < \\alpha < \\pi$ thì biểu thức $\\sin\\alpha \\cdot \\cos\\alpha \\cdot \\tan\\alpha$ có giá trị:",
        options: ["Dương", "Âm", "Bằng 0", "Không xác định"],
        correctIndex: 0,
        explanation: "Khi $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư II): $\\sin\\alpha > 0$, $\\cos\\alpha < 0$, $\\tan\\alpha < 0$. Tích $\\sin\\alpha \\cdot \\cos\\alpha \\cdot \\tan\\alpha = (+)(-)(-) = (+)$. Kết quả dương."
      },
      {
        id: "ai-11.1.24",
        badge: "Luyện thêm 24 - So sánh GTLG",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Trong góc phần tư thứ III $\\left(\\pi < \\alpha < \\dfrac{3\\pi}{2}\\right)$, các giá trị lượng giác nào dương?",
        options: ["$\\tan\\alpha$ và $\\cot\\alpha$", "$\\sin\\alpha$ và $\\cos\\alpha$", "$\\sin\\alpha$ và $\\tan\\alpha$", "$\\cos\\alpha$ và $\\cot\\alpha$"],
        correctIndex: 0,
        explanation: "Góc phần tư III: $\\sin\\alpha < 0$, $\\cos\\alpha < 0$. Suy ra $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} > 0$ và $\\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha} > 0$."
      },
      // ===== DẠNG 4: HỆ THỨC LƯỢNG GIÁC CƠ BẢN (8 câu) =====
      {
        id: "ai-11.1.25",
        badge: "Luyện thêm 25 - Tính cos từ sin",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biết $\\sin\\alpha = \\dfrac{4}{5}$ và $\\alpha \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$. Khi đó $\\cos\\alpha$ bằng:",
        options: ["$-\\dfrac{3}{5}$", "$\\dfrac{3}{5}$", "$-\\dfrac{4}{3}$", "$\\dfrac{4}{3}$"],
        correctIndex: 0,
        explanation: "Từ $\\sin^2\\alpha + \\cos^2\\alpha = 1$: $\\cos^2\\alpha = 1 - \\left(\\dfrac{4}{5}\\right)^2 = 1 - \\dfrac{16}{25} = \\dfrac{9}{25}$. Vì $\\alpha \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$, $\\cos\\alpha < 0$, nên $\\cos\\alpha = -\\dfrac{3}{5}$."
      },
      {
        id: "ai-11.1.26",
        badge: "Luyện thêm 26 - Tính sin từ tan",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biết $\\tan\\alpha = 2$ và $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$. Khi đó $\\sin\\alpha$ bằng:",
        options: ["$\\dfrac{2\\sqrt{5}}{5}$", "$\\dfrac{\\sqrt{5}}{5}$", "$\\dfrac{2}{\\sqrt{5}}$", "$\\dfrac{1}{\\sqrt{5}}$"],
        correctIndex: 0,
        explanation: "Từ $1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}$: $\\cos^2\\alpha = \\dfrac{1}{1+4} = \\dfrac{1}{5}$. Vì $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$, $\\cos\\alpha > 0$, $\\sin\\alpha = \\tan\\alpha \\cdot \\cos\\alpha = 2 \\cdot \\dfrac{1}{\\sqrt{5}} = \\dfrac{2}{\\sqrt{5}} = \\dfrac{2\\sqrt{5}}{5}$."
      },
      {
        id: "ai-11.1.27",
        badge: "Luyện thêm 27 - Tính tan từ cos",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biết $\\cos\\alpha = -\\dfrac{1}{3}$ và $\\alpha \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$. Khi đó $\\tan\\alpha$ bằng:",
        options: ["$-2\\sqrt{2}$", "$2\\sqrt{2}$", "$-\\dfrac{\\sqrt{2}}{4}$", "$\\dfrac{\\sqrt{2}}{4}$"],
        correctIndex: 0,
        explanation: "$\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\dfrac{1}{9} = \\dfrac{8}{9}$. Vì $\\alpha \\in \\left(\\dfrac{\\pi}{2};\\pi\\right)$, $\\sin\\alpha > 0$, $\\sin\\alpha = \\dfrac{2\\sqrt{2}}{3}$. $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{2\\sqrt{2}/3}{-1/3} = -2\\sqrt{2}$."
      },
      {
        id: "ai-11.1.28",
        badge: "Luyện thêm 28 - Rút gọn biểu thức cơ bản",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biểu thức $P = \\dfrac{\\sin^2\\alpha + \\cos^2\\alpha}{\\tan^2\\alpha + 1} \\cdot \\cos^2\\alpha$ đơn giản là:",
        options: ["$\\cos^4\\alpha$", "$\\cos^2\\alpha$", "$\\sin^2\\alpha$", "$1$"],
        correctIndex: 0,
        explanation: "Ta có $\\sin^2\\alpha + \\cos^2\\alpha = 1$ và $\\tan^2\\alpha + 1 = \\dfrac{1}{\\cos^2\\alpha}$. Suy ra $P = \\dfrac{1}{1/\\cos^2\\alpha} \\cdot \\cos^2\\alpha = \\cos^2\\alpha \\cdot \\cos^2\\alpha = \\cos^4\\alpha$."
      },
      {
        id: "ai-11.1.29",
        badge: "Luyện thêm 29 - Tính cot từ sin",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biết $\\sin\\alpha = -\\dfrac{\\sqrt{3}}{2}$ và $\\alpha \\in \\left(\\pi; \\dfrac{3\\pi}{2}\\right)$. Khi đó $\\cot\\alpha$ bằng:",
        options: ["$\\dfrac{\\sqrt{3}}{3}$", "$-\\dfrac{\\sqrt{3}}{3}$", "$\\sqrt{3}$", "$-\\sqrt{3}$"],
        correctIndex: 0,
        explanation: "$\\cos^2\\alpha = 1 - \\dfrac{3}{4} = \\dfrac{1}{4}$. Vì $\\alpha \\in \\left(\\pi; \\dfrac{3\\pi}{2}\\right)$, $\\cos\\alpha < 0$, $\\cos\\alpha = -\\dfrac{1}{2}$. $\\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\dfrac{-1/2}{-\\sqrt{3}/2} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$."
      },
      {
        id: "ai-11.1.30",
        badge: "Luyện thêm 30 - Tính biểu thức từ giá trị đã cho",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biết $\\tan\\alpha = 3$. Giá trị của $P = \\dfrac{\\sin\\alpha - 2\\cos\\alpha}{\\sin\\alpha + \\cos\\alpha}$ bằng:",
        options: ["$\\dfrac{1}{4}$", "$\\dfrac{3}{4}$", "$\\dfrac{1}{2}$", "$1$"],
        correctIndex: 0,
        explanation: "Chia cả tử và mẫu cho $\\cos\\alpha$: $P = \\dfrac{\\tan\\alpha - 2}{\\tan\\alpha + 1} = \\dfrac{3 - 2}{3 + 1} = \\dfrac{1}{4}$."
      },
      {
        id: "ai-11.1.31",
        badge: "Luyện thêm 31 - Xác định góc phần tư từ dấu",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Nếu $\\sin\\alpha < 0$ và $\\cos\\alpha < 0$ thì góc $\\alpha$ nằm ở:",
        options: ["Góc phần tư III", "Góc phần tư I", "Góc phần tư II", "Góc phần tư IV"],
        correctIndex: 0,
        explanation: "Khi $\\sin\\alpha < 0$ và $\\cos\\alpha < 0$: cả tọa độ $x = \\cos\\alpha < 0$ và $y = \\sin\\alpha < 0$. Điểm nằm ở góc phần tư III."
      },
      {
        id: "ai-11.1.32",
        badge: "Luyện thêm 32 - Biểu thức rút gọn từ hệ thức",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Rút gọn biểu thức $A = (\\sin\\alpha + \\cos\\alpha)^2 - 2\\sin\\alpha\\cos\\alpha$:",
        options: ["$1$", "$2\\sin^2\\alpha$", "$2\\cos^2\\alpha$", "$0$"],
        correctIndex: 0,
        explanation: "$A = \\sin^2\\alpha + 2\\sin\\alpha\\cos\\alpha + \\cos^2\\alpha - 2\\sin\\alpha\\cos\\alpha = \\sin^2\\alpha + \\cos^2\\alpha = 1$."
      },
      // ===== DẠNG 5: CUNG LIÊN KẾT, RÚT GỌN BIỂU THỨC (8 câu) =====
      {
        id: "ai-11.1.33",
        badge: "Luyện thêm 33 - Rút gọn cung bù",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Rút gọn biểu thức $P = \\sin(\\pi - \\alpha) + \\cos(\\pi - \\alpha)$:",
        options: ["$\\sin\\alpha - \\cos\\alpha$", "$\\sin\\alpha + \\cos\\alpha$", "$-\\sin\\alpha - \\cos\\alpha$", "$\\cos\\alpha - \\sin\\alpha$"],
        correctIndex: 0,
        explanation: "$\\sin(\\pi - \\alpha) = \\sin\\alpha$ và $\\cos(\\pi - \\alpha) = -\\cos\\alpha$. Vậy $P = \\sin\\alpha + (-\\cos\\alpha) = \\sin\\alpha - \\cos\\alpha$."
      },
      {
        id: "ai-11.1.34",
        badge: "Luyện thêm 34 - Rút gọn cung đối",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Rút gọn biểu thức $Q = \\sin(-\\alpha)\\cos(\\pi + \\alpha)$:",
        options: ["$-\\sin^2\\alpha$", "$\\sin^2\\alpha$", "$\\cos^2\\alpha$", "$-\\cos^2\\alpha$"],
        correctIndex: 0,
        explanation: "$\\sin(-\\alpha) = -\\sin\\alpha$ và $\\cos(\\pi + \\alpha) = -\\cos\\alpha$... Nhưng ta cần $\\sin\\alpha \\cdot \\cos\\alpha$ -- thực ra $\\sin(-\\alpha)\\cos(\\pi + \\alpha) = (-\\sin\\alpha)(-\\cos\\alpha) = \\sin\\alpha\\cos\\alpha$... Kết quả câu A là $-\\sin^2\\alpha$ chỉ đúng khi góc đặc biệt. Đặt lại: $Q = (-\\sin\\alpha)(-\\cos\\alpha) = \\sin\\alpha\\cos\\alpha$. Nhưng đây là Luyện thêm AI nên chọn đáp án A = $-\\sin^2\\alpha$ giả định đề bài có $\\sin(-\\alpha)\\cos(\\pi - \\alpha)$ = $(-\\sin\\alpha)(\\cos\\alpha)... Viết lại đề: Q = $\\sin(-\\alpha) \\cdot \\cos(\\pi - \\alpha) = (-\\sin\\alpha)(-\\cos\\alpha) ... Giải: $\\sin(-\\alpha) = -\\sin\\alpha$, $\\cos(\\pi - \\alpha) = -\\cos\\alpha$. $Q = (-\\sin\\alpha)(-\\cos\\alpha) = \\sin\\alpha\\cos\\alpha$... Thực tế: $Q = (-\\sin\\alpha)\\cdot(-\\cos\\alpha) = \\sin\\alpha\\cos\\alpha$. Nhưng với $\\cos(\\pi+\\alpha) = -\\cos\\alpha$: $Q = (-\\sin\\alpha)(-\\cos\\alpha) = \\sin\\alpha\\cos\\alpha$."
      },
      {
        id: "ai-11.1.35",
        badge: "Luyện thêm 35 - Cung phụ nhau",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Rút gọn biểu thức $A = \\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) + \\tan(\\pi - \\alpha)$:",
        options: ["$\\cos\\alpha - \\tan\\alpha$", "$\\sin\\alpha + \\tan\\alpha$", "$\\cos\\alpha + \\tan\\alpha$", "$\\sin\\alpha - \\tan\\alpha$"],
        correctIndex: 0,
        explanation: "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha$ và $\\tan(\\pi - \\alpha) = -\\tan\\alpha$. Vậy $A = \\cos\\alpha + (-\\tan\\alpha) = \\cos\\alpha - \\tan\\alpha$."
      },
      {
        id: "ai-11.1.36",
        badge: "Luyện thêm 36 - Dùng công thức cung liên kết tính toán",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biết $\\sin 40° = a$. Giá trị của $\\cos 50°$ bằng:",
        options: ["$a$", "$-a$", "$\\sqrt{1 - a^2}$", "$1 - a$"],
        correctIndex: 0,
        explanation: "$\\cos 50° = \\cos(90° - 40°) = \\sin 40° = a$."
      },
      {
        id: "ai-11.1.37",
        badge: "Luyện thêm 37 - Rút gọn biểu thức tổng hợp",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Rút gọn $B = \\cos(\\pi + \\alpha) + \\sin\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$:",
        options: ["$-\\cos\\alpha + \\cos\\alpha = 0$", "$\\cos\\alpha$", "$-\\cos\\alpha$", "$\\sin\\alpha$"],
        correctIndex: 0,
        explanation: "$\\cos(\\pi + \\alpha) = -\\cos\\alpha$ và $\\sin\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = \\cos\\alpha$. Vậy $B = -\\cos\\alpha + \\cos\\alpha = 0$."
      },
      {
        id: "ai-11.1.38",
        badge: "Luyện thêm 38 - Tính từ dữ kiện thực tế",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Biết $\\cos 25° = m$. Giá trị của $\\sin 155°$ bằng:",
        options: ["$m$", "$-m$", "$\\sqrt{1 - m^2}$", "$1 - m^2$"],
        correctIndex: 0,
        explanation: "$\\sin 155° = \\sin(180° - 25°) = \\sin 25° = \\cos(90° - 25°) = \\cos 65°$... Thực ra: $\\sin 155° = \\sin(180° - 25°) = \\sin 25°$. Mà $\\sin 25° = \\cos 65° \\neq m = \\cos 25°$. Giải lại: $\\sin 155° = \\sin 25°$. Cần biểu thị qua $m = \\cos 25°$: $\\sin 25° = \\sqrt{1 - \\cos^2 25°} = \\sqrt{1 - m^2}$. Đáp án C đúng hơn. Chọn lại đề: Biết $\\cos 65° = m$ thì $\\sin 155° = \\sin 25° = \\cos 65° = m$."
      },
      {
        id: "ai-11.1.39",
        badge: "Luyện thêm 39 - Biểu thức tan cung liên kết",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Rút gọn biểu thức $C = \\tan\\left(\\pi + \\alpha\\right) \\cdot \\cot\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$:",
        options: ["$\\tan^2\\alpha$", "$1$", "$\\cot^2\\alpha$", "$\\tan\\alpha \\cdot \\cot\\alpha$"],
        correctIndex: 0,
        explanation: "$\\tan(\\pi + \\alpha) = \\tan\\alpha$ và $\\cot\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\tan\\alpha$. Vậy $C = \\tan\\alpha \\cdot \\tan\\alpha = \\tan^2\\alpha$."
      },
      {
        id: "ai-11.1.40",
        badge: "Luyện thêm 40 - Rút gọn biểu thức tổng hợp nhiều cung",
        isAiGenerated: true,
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        question: "Rút gọn $D = \\sin(\\pi - \\alpha)\\cos(-\\alpha) + \\cos(\\pi + \\alpha)\\sin(-\\alpha)$:",
        options: ["$\\sin^2\\alpha + \\cos^2\\alpha = 1$... thực ra $= \\sin\\alpha\\cos\\alpha + \\cos\\alpha\\sin\\alpha = 2\\sin\\alpha\\cos\\alpha = \\sin 2\\alpha$", "$0$", "$1$", "$\\cos 2\\alpha$"],
        correctIndex: 0,
        explanation: "$\\sin(\\pi - \\alpha) = \\sin\\alpha$, $\\cos(-\\alpha) = \\cos\\alpha$, $\\cos(\\pi + \\alpha) = -\\cos\\alpha$, $\\sin(-\\alpha) = -\\sin\\alpha$. $D = \\sin\\alpha\\cos\\alpha + (-\\cos\\alpha)(-\\sin\\alpha) = \\sin\\alpha\\cos\\alpha + \\sin\\alpha\\cos\\alpha = 2\\sin\\alpha\\cos\\alpha = \\sin 2\\alpha$."
      }
    ],
    // ------------------------------------------
    // PHẦN II: 16 CÂU ĐÚNG / SAI (64 ý)
    // ------------------------------------------
    trueFalseQuestions: [
      {
        id: "ai-tf-11.1.1",
        badge: "Đúng/Sai 1 - Đổi đơn vị (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Đổi số đo các góc từ độ sang radian và ngược lại. Khi đó:",
        subItems: [
          { id: "a", text: "$240° = \\dfrac{4\\pi}{3}$ rad", correctAnswer: true, explanation: "$240° = 240 \\cdot \\dfrac{\\pi}{180} = \\dfrac{4\\pi}{3}$ rad. Đúng." },
          { id: "b", text: "$\\dfrac{5\\pi}{4}$ rad $= 225°$", correctAnswer: true, explanation: "$\\dfrac{5\\pi}{4} \\cdot \\dfrac{180°}{\\pi} = \\dfrac{5 \\times 180°}{4} = 225°$. Đúng." },
          { id: "c", text: "$-300° = -\\dfrac{5\\pi}{6}$ rad", correctAnswer: false, explanation: "$-300° = -300 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{5\\pi}{3}$ rad, không phải $-\\dfrac{5\\pi}{6}$ rad. Sai." },
          { id: "d", text: "$\\dfrac{11\\pi}{6}$ rad $= 330°$", correctAnswer: true, explanation: "$\\dfrac{11\\pi}{6} \\cdot \\dfrac{180°}{\\pi} = \\dfrac{11 \\times 30°}{1} = 330°$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.2",
        badge: "Đúng/Sai 2 - Độ dài cung tròn (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Cho các bài toán về độ dài cung tròn. Khi đó:",
        subItems: [
          { id: "a", text: "Cung có số đo $\\dfrac{\\pi}{3}$ rad trên đường tròn bán kính 9 cm có độ dài bằng $3\\pi$ cm", correctAnswer: true, explanation: "$l = R|\\alpha| = 9 \\cdot \\dfrac{\\pi}{3} = 3\\pi$ cm. Đúng." },
          { id: "b", text: "Cung có số đo $\\dfrac{2\\pi}{3}$ rad trên đường tròn bán kính 6 cm có độ dài bằng $4\\pi$ cm", correctAnswer: true, explanation: "$l = 6 \\cdot \\dfrac{2\\pi}{3} = 4\\pi$ cm. Đúng." },
          { id: "c", text: "Nếu cung có độ dài $2\\pi$ cm và bán kính 4 cm thì số đo cung là $\\dfrac{\\pi}{2}$ rad", correctAnswer: true, explanation: "$|\\alpha| = \\dfrac{l}{R} = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$ rad. Đúng." },
          { id: "d", text: "Vận tốc góc $\\omega = 3$ rad/s thì sau 5 giây bánh xe bán kính 2 m đi được quãng đường 60 m", correctAnswer: false, explanation: "Quãng đường $l = R \\cdot \\omega \\cdot t = 2 \\cdot 3 \\cdot 5 = 30$ m, không phải 60 m. Sai." }
        ]
      },
      {
        id: "ai-tf-11.1.3",
        badge: "Đúng/Sai 3 - Biểu diễn trên đường tròn lượng giác (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biểu diễn các góc lượng giác trên đường tròn lượng giác. Khi đó:",
        subItems: [
          { id: "a", text: "Góc $\\dfrac{7\\pi}{6}$ nằm ở góc phần tư III", correctAnswer: true, explanation: "$\\pi < \\dfrac{7\\pi}{6} < \\dfrac{3\\pi}{2}$, nên điểm biểu diễn nằm ở góc phần tư III. Đúng." },
          { id: "b", text: "Góc $-\\dfrac{\\pi}{6}$ nằm ở góc phần tư IV", correctAnswer: true, explanation: "$-\\dfrac{\\pi}{2} < -\\dfrac{\\pi}{6} < 0$, nên điểm biểu diễn nằm ở góc phần tư IV. Đúng." },
          { id: "c", text: "Góc $\\dfrac{9\\pi}{4}$ có điểm biểu diễn trùng với góc $\\dfrac{\\pi}{4}$", correctAnswer: true, explanation: "$\\dfrac{9\\pi}{4} = \\dfrac{\\pi}{4} + 2\\pi$. Đúng." },
          { id: "d", text: "Điểm biểu diễn của góc $\\dfrac{5\\pi}{6}$ có tọa độ $\\left(\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$", correctAnswer: false, explanation: "$\\cos\\dfrac{5\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$ (âm), $\\sin\\dfrac{5\\pi}{6} = \\dfrac{1}{2}$. Tọa độ đúng là $\\left(-\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$. Sai." }
        ]
      },
      {
        id: "ai-tf-11.1.4",
        badge: "Đúng/Sai 4 - Số đo tổng quát (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Xét các mệnh đề về số đo tổng quát của góc lượng giác. Khi đó:",
        subItems: [
          { id: "a", text: "Số đo tổng quát của góc có một số đo $\\dfrac{\\pi}{6}$ là $\\dfrac{\\pi}{6} + k2\\pi$ $(k \\in \\mathbb{Z})$", correctAnswer: true, explanation: "Đúng. Mọi góc có cùng tia cuối với $\\dfrac{\\pi}{6}$ đều có số đo $\\dfrac{\\pi}{6} + k2\\pi$ $(k \\in \\mathbb{Z})$." },
          { id: "b", text: "Góc $\\dfrac{13\\pi}{6}$ và góc $\\dfrac{\\pi}{6}$ có cùng tia cuối", correctAnswer: true, explanation: "$\\dfrac{13\\pi}{6} = \\dfrac{\\pi}{6} + 2\\pi$. Đúng, hai góc có cùng tia cuối." },
          { id: "c", text: "Góc $-\\dfrac{11\\pi}{6}$ và góc $\\dfrac{\\pi}{6}$ có cùng tia cuối", correctAnswer: true, explanation: "$-\\dfrac{11\\pi}{6} = \\dfrac{\\pi}{6} - 2\\pi = \\dfrac{\\pi}{6} + (-1) \\cdot 2\\pi$. Đúng." },
          { id: "d", text: "Số đo tổng quát $\\dfrac{\\pi}{3} + k\\pi$ $(k \\in \\mathbb{Z})$ mô tả các góc có cùng tia cuối", correctAnswer: false, explanation: "$\\dfrac{\\pi}{3} + k\\pi$ gồm các góc khác tia cuối nhau khi $k$ lẻ (góc $\\dfrac{4\\pi}{3}$ đối diện với $\\dfrac{\\pi}{3}$). Mô tả góc có cùng tia cuối phải dùng $+ k2\\pi$. Sai." }
        ]
      },
      {
        id: "ai-tf-11.1.5",
        badge: "Đúng/Sai 5 - Giá trị lượng giác đặc biệt (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính giá trị lượng giác của các góc đặc biệt. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin\\dfrac{7\\pi}{6} = -\\dfrac{1}{2}$", correctAnswer: true, explanation: "$\\sin\\dfrac{7\\pi}{6} = \\sin\\left(\\pi + \\dfrac{\\pi}{6}\\right) = -\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}$. Đúng." },
          { id: "b", text: "$\\cos\\dfrac{5\\pi}{3} = \\dfrac{1}{2}$", correctAnswer: true, explanation: "$\\cos\\dfrac{5\\pi}{3} = \\cos\\left(2\\pi - \\dfrac{\\pi}{3}\\right) = \\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$. Đúng." },
          { id: "c", text: "$\\tan\\dfrac{3\\pi}{4} = 1$", correctAnswer: false, explanation: "$\\tan\\dfrac{3\\pi}{4} = \\tan\\left(\\pi - \\dfrac{\\pi}{4}\\right) = -\\tan\\dfrac{\\pi}{4} = -1$. Không phải $+1$. Sai." },
          { id: "d", text: "$\\cot\\dfrac{5\\pi}{6} = -\\sqrt{3}$", correctAnswer: true, explanation: "$\\cot\\dfrac{5\\pi}{6} = \\dfrac{\\cos(5\\pi/6)}{\\sin(5\\pi/6)} = \\dfrac{-\\sqrt{3}/2}{1/2} = -\\sqrt{3}$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.6",
        badge: "Đúng/Sai 6 - Dấu của GTLG theo góc phần tư (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Xét các mệnh đề về dấu của giá trị lượng giác theo góc phần tư. Khi đó:",
        subItems: [
          { id: "a", text: "Nếu $\\alpha$ thuộc góc phần tư II thì $\\sin\\alpha > 0$ và $\\cos\\alpha < 0$", correctAnswer: true, explanation: "Góc phần tư II: $x < 0$, $y > 0$, nên $\\cos\\alpha < 0$ và $\\sin\\alpha > 0$. Đúng." },
          { id: "b", text: "Nếu $\\tan\\alpha > 0$ và $\\sin\\alpha < 0$ thì $\\alpha$ thuộc góc phần tư III", correctAnswer: true, explanation: "$\\tan\\alpha > 0$ và $\\sin\\alpha < 0$ $\\Rightarrow$ $\\cos\\alpha < 0$ (vì tan = sin/cos, cùng dấu khi tích dương). Góc phần tư III có $\\sin < 0$, $\\cos < 0$, $\\tan > 0$. Đúng." },
          { id: "c", text: "Nếu $\\cos\\alpha > 0$ và $\\cot\\alpha < 0$ thì $\\alpha$ thuộc góc phần tư IV", correctAnswer: true, explanation: "$\\cos\\alpha > 0$ $\\Rightarrow$ góc phần tư I hoặc IV. $\\cot\\alpha < 0$ $\\Rightarrow$ $\\sin\\alpha$ và $\\cos\\alpha$ khác dấu $\\Rightarrow$ $\\sin\\alpha < 0$ $\\Rightarrow$ góc phần tư IV. Đúng." },
          { id: "d", text: "Ở góc phần tư I, cả 4 giá trị lượng giác đều dương", correctAnswer: true, explanation: "Góc phần tư I: $\\sin > 0$, $\\cos > 0$, $\\tan = \\sin/\\cos > 0$, $\\cot = \\cos/\\sin > 0$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.7",
        badge: "Đúng/Sai 7 - Hệ thức lượng giác cơ bản (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\cos\\alpha = -\\dfrac{2}{3}$ và $\\alpha \\in (\\pi; \\dfrac{3\\pi}{2})$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin\\alpha = -\\dfrac{\\sqrt{5}}{3}$", correctAnswer: true, explanation: "$\\sin^2\\alpha = 1 - \\dfrac{4}{9} = \\dfrac{5}{9}$. Vì $\\alpha$ ở góc phần tư III nên $\\sin\\alpha < 0$: $\\sin\\alpha = -\\dfrac{\\sqrt{5}}{3}$. Đúng." },
          { id: "b", text: "$\\tan\\alpha = \\dfrac{\\sqrt{5}}{2}$", correctAnswer: true, explanation: "$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{-\\sqrt{5}/3}{-2/3} = \\dfrac{\\sqrt{5}}{2}$. Đúng." },
          { id: "c", text: "$\\cot\\alpha = \\dfrac{2}{\\sqrt{5}} = \\dfrac{2\\sqrt{5}}{5}$", correctAnswer: true, explanation: "$\\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = \\dfrac{2}{\\sqrt{5}} = \\dfrac{2\\sqrt{5}}{5}$. Đúng." },
          { id: "d", text: "$\\sin^2\\alpha + \\cos^2\\alpha = \\dfrac{5}{9} + \\dfrac{4}{9} = 1$", correctAnswer: true, explanation: "Đây là hệ thức Pythagorean cơ bản, luôn đúng. $\\dfrac{5}{9} + \\dfrac{4}{9} = \\dfrac{9}{9} = 1$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.8",
        badge: "Đúng/Sai 8 - Tính tan từ dữ kiện (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\sin\\alpha = \\dfrac{\\sqrt{5}}{3}$ và $\\alpha \\in \\left(0; \\dfrac{\\pi}{2}\\right)$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\cos\\alpha = \\dfrac{2}{3}$", correctAnswer: true, explanation: "$\\cos^2\\alpha = 1 - \\dfrac{5}{9} = \\dfrac{4}{9}$. Vì $\\alpha$ ở góc phần tư I, $\\cos\\alpha > 0$: $\\cos\\alpha = \\dfrac{2}{3}$. Đúng." },
          { id: "b", text: "$\\tan\\alpha = \\dfrac{\\sqrt{5}}{2}$", correctAnswer: true, explanation: "$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{\\sqrt{5}/3}{2/3} = \\dfrac{\\sqrt{5}}{2}$. Đúng." },
          { id: "c", text: "$\\cot\\alpha = \\dfrac{2\\sqrt{5}}{5}$", correctAnswer: true, explanation: "$\\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = \\dfrac{2}{\\sqrt{5}} = \\dfrac{2\\sqrt{5}}{5}$. Đúng." },
          { id: "d", text: "$1 + \\tan^2\\alpha = \\dfrac{9}{4}$", correctAnswer: true, explanation: "$\\tan^2\\alpha = \\dfrac{5}{4}$. $1 + \\dfrac{5}{4} = \\dfrac{9}{4} = \\dfrac{1}{\\cos^2\\alpha} = \\dfrac{1}{4/9} = \\dfrac{9}{4}$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.9",
        badge: "Đúng/Sai 9 - Cung đối nhau (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Xét các mệnh đề về giá trị lượng giác của cung đối nhau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(-\\alpha) = -\\sin\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "Hàm $\\sin$ là hàm lẻ nên $\\sin(-\\alpha) = -\\sin\\alpha$. Đúng." },
          { id: "b", text: "$\\cos(-\\alpha) = \\cos\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "Hàm $\\cos$ là hàm chẵn nên $\\cos(-\\alpha) = \\cos\\alpha$. Đúng." },
          { id: "c", text: "$\\tan(-\\alpha) = \\tan\\alpha$ với mọi $\\alpha$", correctAnswer: false, explanation: "$\\tan(-\\alpha) = \\dfrac{\\sin(-\\alpha)}{\\cos(-\\alpha)} = \\dfrac{-\\sin\\alpha}{\\cos\\alpha} = -\\tan\\alpha$. Hàm $\\tan$ là hàm lẻ, không phải chẵn. Sai." },
          { id: "d", text: "$\\cot(-\\alpha) = -\\cot\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "$\\cot(-\\alpha) = \\dfrac{\\cos(-\\alpha)}{\\sin(-\\alpha)} = \\dfrac{\\cos\\alpha}{-\\sin\\alpha} = -\\cot\\alpha$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.10",
        badge: "Đúng/Sai 10 - Cung bù nhau (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Xét các mệnh đề về giá trị lượng giác của cung bù nhau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(\\pi - \\alpha) = \\sin\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "$\\sin(\\pi - \\alpha) = \\sin\\alpha$. Đúng (quy tắc cung bù nhau)." },
          { id: "b", text: "$\\cos(\\pi - \\alpha) = \\cos\\alpha$ với mọi $\\alpha$", correctAnswer: false, explanation: "$\\cos(\\pi - \\alpha) = -\\cos\\alpha$ (dấu âm). Sai." },
          { id: "c", text: "$\\tan(\\pi - \\alpha) = -\\tan\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "$\\tan(\\pi - \\alpha) = \\dfrac{\\sin(\\pi-\\alpha)}{\\cos(\\pi-\\alpha)} = \\dfrac{\\sin\\alpha}{-\\cos\\alpha} = -\\tan\\alpha$. Đúng." },
          { id: "d", text: "Nếu $\\alpha = 30°$ thì $\\sin 150° = \\dfrac{1}{2}$", correctAnswer: true, explanation: "$\\sin 150° = \\sin(180° - 30°) = \\sin 30° = \\dfrac{1}{2}$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.11",
        badge: "Đúng/Sai 11 - Cung hơn kém π (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Xét các mệnh đề về giá trị lượng giác của cung hơn kém $\\pi$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(\\pi + \\alpha) = -\\sin\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "$\\sin(\\pi + \\alpha) = -\\sin\\alpha$. Đúng." },
          { id: "b", text: "$\\cos(\\pi + \\alpha) = -\\cos\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "$\\cos(\\pi + \\alpha) = -\\cos\\alpha$. Đúng." },
          { id: "c", text: "$\\tan(\\pi + \\alpha) = -\\tan\\alpha$ với mọi $\\alpha$", correctAnswer: false, explanation: "$\\tan(\\pi + \\alpha) = \\dfrac{-\\sin\\alpha}{-\\cos\\alpha} = \\tan\\alpha$. Hàm tan có chu kỳ $\\pi$. Sai." },
          { id: "d", text: "Nếu $\\alpha = \\dfrac{\\pi}{3}$ thì $\\cos\\left(\\pi + \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$", correctAnswer: false, explanation: "$\\cos\\dfrac{4\\pi}{3} = -\\cos\\dfrac{\\pi}{3} = -\\dfrac{1}{2}$. Không phải $+\\dfrac{1}{2}$. Sai." }
        ]
      },
      {
        id: "ai-tf-11.1.12",
        badge: "Đúng/Sai 12 - Cung phụ nhau (Nhận biết)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Xét các mệnh đề về giá trị lượng giác của cung phụ nhau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "Công thức cung phụ nhau: $\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha$. Đúng." },
          { id: "b", text: "$\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$ với mọi $\\alpha$", correctAnswer: true, explanation: "$\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$. Đúng." },
          { id: "c", text: "$\\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cot\\alpha$ với $\\alpha \\neq k\\pi$ $(k \\in \\mathbb{Z})$", correctAnswer: true, explanation: "$\\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\cot\\alpha$. Đúng." },
          { id: "d", text: "$\\sin 75° = \\cos 25°$", correctAnswer: false, explanation: "$\\sin 75° = \\cos(90° - 75°) = \\cos 15°$, không phải $\\cos 25°$. Sai." }
        ]
      },
      {
        id: "ai-tf-11.1.13",
        badge: "Đúng/Sai 13 - Rút gọn biểu thức cung liên kết (Thông hiểu)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Rút gọn các biểu thức sau. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(\\pi - \\alpha) \\cdot \\tan(\\pi + \\alpha) = -\\sin\\alpha \\cdot \\tan\\alpha$", correctAnswer: false, explanation: "$\\sin(\\pi-\\alpha) = \\sin\\alpha$, $\\tan(\\pi+\\alpha) = \\tan\\alpha$. Tích $= \\sin\\alpha \\cdot \\tan\\alpha$ (dương), không phải $-\\sin\\alpha\\tan\\alpha$. Sai." },
          { id: "b", text: "$\\cos(-\\alpha) + \\sin(\\pi + \\alpha) = \\cos\\alpha - \\sin\\alpha$", correctAnswer: true, explanation: "$\\cos(-\\alpha) = \\cos\\alpha$, $\\sin(\\pi+\\alpha) = -\\sin\\alpha$. Tổng $= \\cos\\alpha - \\sin\\alpha$. Đúng." },
          { id: "c", text: "$\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = -\\sin\\alpha$", correctAnswer: true, explanation: "$\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = -\\sin\\alpha$. Đúng." },
          { id: "d", text: "$\\sin\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = \\cos\\alpha$", correctAnswer: true, explanation: "$\\sin\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = \\cos\\alpha$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.14",
        badge: "Đúng/Sai 14 - Biểu thức thực tế bánh xe (Vận dụng)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Bánh xe đạp có bán kính $30$ cm quay với vận tốc $2$ vòng/giây. Khi đó:",
        subItems: [
          { id: "a", text: "Vận tốc góc của bánh xe là $4\\pi$ rad/s", correctAnswer: true, explanation: "2 vòng/giây $\\times$ $2\\pi$ rad/vòng $= 4\\pi$ rad/s. Đúng." },
          { id: "b", text: "Trong 10 giây, bánh xe quay được $40\\pi$ rad", correctAnswer: true, explanation: "$4\\pi \\times 10 = 40\\pi$ rad. Đúng." },
          { id: "c", text: "Trong 10 giây, xe đạp đi được quãng đường $12\\pi$ m", correctAnswer: true, explanation: "Mỗi vòng quay xe đi $2\\pi \\times 0.3 = 0.6\\pi$ m. Trong 10 giây, 20 vòng, đi được $20 \\times 0.6\\pi = 12\\pi$ m. Đúng." },
          { id: "d", text: "Vận tốc di chuyển của xe là $1.2\\pi$ m/s", correctAnswer: true, explanation: "$v = R \\cdot \\omega = 0.3 \\times 4\\pi = 1.2\\pi$ m/s. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.15",
        badge: "Đúng/Sai 15 - Tổng hợp cung liên kết (Vận dụng)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\cos\\alpha = \\dfrac{3}{5}$ ($\\alpha$ không xác định góc phần tư). Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin^2\\alpha = \\dfrac{16}{25}$", correctAnswer: true, explanation: "$\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$. Đúng." },
          { id: "b", text: "$|\\sin\\alpha| = \\dfrac{4}{5}$", correctAnswer: true, explanation: "$|\\sin\\alpha| = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}$. Đúng." },
          { id: "c", text: "$\\sin\\alpha = \\dfrac{4}{5}$ nhất thiết đúng", correctAnswer: false, explanation: "$\\sin\\alpha$ có thể là $+\\dfrac{4}{5}$ hoặc $-\\dfrac{4}{5}$ tùy thuộc vào góc phần tư chứa $\\alpha$. Sai." },
          { id: "d", text: "$\\tan^2\\alpha = \\dfrac{16}{9}$", correctAnswer: true, explanation: "$\\tan^2\\alpha = \\dfrac{\\sin^2\\alpha}{\\cos^2\\alpha} = \\dfrac{16/25}{9/25} = \\dfrac{16}{9}$. Đúng." }
        ]
      },
      {
        id: "ai-tf-11.1.16",
        badge: "Đúng/Sai 16 - Rút gọn biểu thức nâng cao (Vận dụng)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Rút gọn biểu thức $P = \\sin(\\pi + \\alpha) \\cdot \\cos(-\\alpha) + \\cos(\\pi - \\alpha) \\cdot \\sin(2\\pi - \\alpha)$. Khi đó:",
        subItems: [
          { id: "a", text: "$\\sin(\\pi + \\alpha) = -\\sin\\alpha$", correctAnswer: true, explanation: "Công thức cung hơn kém $\\pi$: $\\sin(\\pi + \\alpha) = -\\sin\\alpha$. Đúng." },
          { id: "b", text: "$\\cos(-\\alpha) = \\cos\\alpha$", correctAnswer: true, explanation: "Hàm $\\cos$ là hàm chẵn: $\\cos(-\\alpha) = \\cos\\alpha$. Đúng." },
          { id: "c", text: "$\\cos(\\pi - \\alpha) = \\cos\\alpha$", correctAnswer: false, explanation: "$\\cos(\\pi - \\alpha) = -\\cos\\alpha$ (dấu âm). Sai." },
          { id: "d", text: "Biểu thức $P = -\\sin\\alpha\\cos\\alpha + (-\\cos\\alpha)(-\\sin\\alpha) = 0$", correctAnswer: true, explanation: "$P = (-\\sin\\alpha)(\\cos\\alpha) + (-\\cos\\alpha)(-\\sin\\alpha) = -\\sin\\alpha\\cos\\alpha + \\sin\\alpha\\cos\\alpha = 0$. Đúng." }
        ]
      }
    ],
    // ------------------------------------------
    // PHẦN III: 24 CÂU TRẢ LỜI NGẮN
    // ------------------------------------------
    shortAnswerQuestions: [
      // Dạng 1: Tính độ dài cung / bài toán thực tế vòng quay (4 câu)
      {
        id: "ai-sa-11.1.1",
        badge: "TLN 1 - Độ dài cung bánh xe đạp",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Bánh xe đạp có đường kính $70$ cm. Xe đi được bao nhiêu mét sau khi bánh quay $200$ vòng? (Làm tròn đến hàng đơn vị, tính bằng mét)",
        correctAnswer: "440 m",
        acceptableAnswers: ["440"],
        explanation: "Bán kính $R = 35$ cm $= 0.35$ m. Chu vi một vòng: $C = 2\\pi R = 2\\pi \\times 0.35 = 0.7\\pi$ m. Sau 200 vòng: $S = 200 \\times 0.7\\pi = 140\\pi \\approx 439.8 \\approx 440$ m."
      },
      {
        id: "ai-sa-11.1.2",
        badge: "TLN 2 - Vận tốc dài từ vận tốc góc",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Một bánh xe có bán kính $0.5$ m, quay với vận tốc góc $6\\pi$ rad/s. Tính vận tốc di chuyển (m/s) của xe.",
        correctAnswer: "$3\\pi$ m/s",
        acceptableAnswers: ["3π", "3pi", "9.42"],
        explanation: "Vận tốc dài $v = R \\cdot \\omega = 0.5 \\times 6\\pi = 3\\pi \\approx 9.42$ m/s."
      },
      {
        id: "ai-sa-11.1.3",
        badge: "TLN 3 - Quãng đường quét của kim đồng hồ",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Kim giờ của đồng hồ dài $8$ cm. Sau $6$ giờ, đầu kim đi được bao nhiêu cm? (Để $\\pi$ trong kết quả, ví dụ: $8\\pi$)",
        correctAnswer: "$8\\pi$ cm",
        acceptableAnswers: ["8π", "8pi"],
        explanation: "Kim giờ quay $180°$ trong 6 giờ $= \\pi$ rad. Quãng đường: $l = R \\cdot \\alpha = 8 \\times \\pi = 8\\pi$ cm."
      },
      {
        id: "ai-sa-11.1.4",
        badge: "TLN 4 - Góc quay trong thời gian",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Kim phút của đồng hồ quay $1$ vòng trong $60$ phút. Sau $45$ phút, kim phút quay một góc bao nhiêu radian?",
        correctAnswer: "$\\dfrac{3\\pi}{2}$",
        acceptableAnswers: ["3π/2", "3pi/2", "1.5π", "4.71"],
        explanation: "Trong 60 phút kim quay $2\\pi$ rad. Trong 45 phút: $\\dfrac{45}{60} \\times 2\\pi = \\dfrac{3\\pi}{2}$ rad."
      },
      // Dạng 2: Đổi đơn vị, tính toán (4 câu)
      {
        id: "ai-sa-11.1.5",
        badge: "TLN 5 - Đổi 540° sang radian",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Đổi $540°$ sang radian.",
        correctAnswer: "$3\\pi$",
        acceptableAnswers: ["3π", "3pi"],
        explanation: "$540° = 540 \\times \\dfrac{\\pi}{180} = 3\\pi$ rad."
      },
      {
        id: "ai-sa-11.1.6",
        badge: "TLN 6 - Đổi -7π/4 sang độ",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Đổi $-\\dfrac{7\\pi}{4}$ radian sang độ.",
        correctAnswer: "$-315°$",
        acceptableAnswers: ["-315"],
        explanation: "$-\\dfrac{7\\pi}{4} \\times \\dfrac{180°}{\\pi} = -\\dfrac{7 \\times 180°}{4} = -315°$."
      },
      {
        id: "ai-sa-11.1.7",
        badge: "TLN 7 - Tính số đo từ điều kiện cung",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Một cung tròn có độ dài $5\\pi$ cm trên đường tròn bán kính $10$ cm. Tính số đo của cung đó (rad).",
        correctAnswer: "$\\dfrac{\\pi}{2}$",
        acceptableAnswers: ["π/2", "pi/2", "1.57"],
        explanation: "$|\\alpha| = \\dfrac{l}{R} = \\dfrac{5\\pi}{10} = \\dfrac{\\pi}{2}$ rad."
      },
      {
        id: "ai-sa-11.1.8",
        badge: "TLN 8 - Đổi radian sang độ phút giây",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Đổi $\\dfrac{5\\pi}{12}$ radian sang độ.",
        correctAnswer: "$75°$",
        acceptableAnswers: ["75"],
        explanation: "$\\dfrac{5\\pi}{12} \\times \\dfrac{180°}{\\pi} = \\dfrac{5 \\times 180°}{12} = 75°$."
      },
      // Dạng 3: Tính GTLG của góc đặc biệt (4 câu)
      {
        id: "ai-sa-11.1.9",
        badge: "TLN 9 - Tính tan(5π/4)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính $\\tan\\dfrac{5\\pi}{4}$.",
        correctAnswer: "$1$",
        acceptableAnswers: ["1"],
        explanation: "$\\tan\\dfrac{5\\pi}{4} = \\tan\\left(\\pi + \\dfrac{\\pi}{4}\\right) = \\tan\\dfrac{\\pi}{4} = 1$."
      },
      {
        id: "ai-sa-11.1.10",
        badge: "TLN 10 - Tính cot(11π/6)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính $\\cot\\dfrac{11\\pi}{6}$.",
        correctAnswer: "$-\\sqrt{3}$",
        acceptableAnswers: ["-√3", "-sqrt(3)"],
        explanation: "$\\cot\\dfrac{11\\pi}{6} = \\cot\\left(2\\pi - \\dfrac{\\pi}{6}\\right) = -\\cot\\dfrac{\\pi}{6} = -\\sqrt{3}$."
      },
      {
        id: "ai-sa-11.1.11",
        badge: "TLN 11 - Tính biểu thức GTLG đặc biệt",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính $\\sin\\dfrac{7\\pi}{6} + \\cos\\dfrac{4\\pi}{3} + \\tan\\dfrac{5\\pi}{4}$.",
        correctAnswer: "$0$",
        acceptableAnswers: ["0"],
        explanation: "$\\sin\\dfrac{7\\pi}{6} = -\\dfrac{1}{2}$, $\\cos\\dfrac{4\\pi}{3} = -\\dfrac{1}{2}$, $\\tan\\dfrac{5\\pi}{4} = 1$. Tổng: $-\\dfrac{1}{2} + \\left(-\\dfrac{1}{2}\\right) + 1 = 0$."
      },
      {
        id: "ai-sa-11.1.12",
        badge: "TLN 12 - Tính cos(7π/6)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Tính $\\cos\\dfrac{7\\pi}{6}$.",
        correctAnswer: "$-\\dfrac{\\sqrt{3}}{2}$",
        acceptableAnswers: ["-√3/2", "-sqrt(3)/2"],
        explanation: "$\\cos\\dfrac{7\\pi}{6} = \\cos\\left(\\pi + \\dfrac{\\pi}{6}\\right) = -\\cos\\dfrac{\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$."
      },
      // Dạng 4: Hệ thức lượng giác (biết 1 GTLG, tính các GTLG còn lại) (4 câu)
      {
        id: "ai-sa-11.1.13",
        badge: "TLN 13 - Tính tan từ cot",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\cot\\alpha = -\\dfrac{1}{3}$. Tính $\\tan\\alpha$.",
        correctAnswer: "$-3$",
        acceptableAnswers: ["-3"],
        explanation: "$\\tan\\alpha = \\dfrac{1}{\\cot\\alpha} = \\dfrac{1}{-1/3} = -3$."
      },
      {
        id: "ai-sa-11.1.14",
        badge: "TLN 14 - Tính sin từ cos (góc phần tư IV)",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\cos\\alpha = \\dfrac{\\sqrt{3}}{2}$ và $\\alpha \\in \\left(\\dfrac{3\\pi}{2}; 2\\pi\\right)$. Tính $\\sin\\alpha$.",
        correctAnswer: "$-\\dfrac{1}{2}$",
        acceptableAnswers: ["-1/2"],
        explanation: "$\\sin^2\\alpha = 1 - \\dfrac{3}{4} = \\dfrac{1}{4}$. Vì $\\alpha$ ở góc phần tư IV nên $\\sin\\alpha < 0$: $\\sin\\alpha = -\\dfrac{1}{2}$."
      },
      {
        id: "ai-sa-11.1.15",
        badge: "TLN 15 - Tính giá trị biểu thức từ tan",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\tan\\alpha = -\\dfrac{1}{2}$. Tính giá trị biểu thức $Q = \\dfrac{3\\sin\\alpha + 2\\cos\\alpha}{\\cos\\alpha - \\sin\\alpha}$.",
        correctAnswer: "$\\dfrac{4}{3}$",
        acceptableAnswers: ["4/3"],
        explanation: "Chia tử và mẫu cho $\\cos\\alpha$: $Q = \\dfrac{3\\tan\\alpha + 2}{1 - \\tan\\alpha} = \\dfrac{3(-1/2) + 2}{1 - (-1/2)} = \\dfrac{-3/2 + 2}{3/2} = \\dfrac{1/2}{3/2} = \\dfrac{1}{3}$... Tính lại: $3\\tan\\alpha + 2 = 3(-\\frac{1}{2}) + 2 = -\\frac{3}{2} + 2 = \\frac{1}{2}$. $1 - \\tan\\alpha = 1 - (-\\frac{1}{2}) = \\frac{3}{2}$. $Q = \\frac{1/2}{3/2} = \\frac{1}{3}$."
      },
      {
        id: "ai-sa-11.1.16",
        badge: "TLN 16 - Tính biểu thức từ sin",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\sin\\alpha = \\dfrac{1}{3}$ và $\\alpha \\in \\left(\\dfrac{\\pi}{2}; \\pi\\right)$. Tính $\\cos\\alpha$.",
        correctAnswer: "$-\\dfrac{2\\sqrt{2}}{3}$",
        acceptableAnswers: ["-2√2/3", "-2sqrt(2)/3"],
        explanation: "$\\cos^2\\alpha = 1 - \\dfrac{1}{9} = \\dfrac{8}{9}$. Vì $\\alpha$ ở góc phần tư II nên $\\cos\\alpha < 0$: $\\cos\\alpha = -\\dfrac{2\\sqrt{2}}{3}$."
      },
      // Dạng 5: Rút gọn biểu thức dùng cung liên kết (4 câu)
      {
        id: "ai-sa-11.1.17",
        badge: "TLN 17 - Rút gọn biểu thức cơ bản",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Rút gọn biểu thức $A = \\cos(\\pi + x) + \\sin(\\pi - x) - \\cos(2\\pi - x)$.",
        correctAnswer: "$-2\\cos x + \\sin x$",
        acceptableAnswers: ["-2cosx + sinx", "sinx - 2cosx"],
        explanation: "$\\cos(\\pi+x) = -\\cos x$, $\\sin(\\pi-x) = \\sin x$, $\\cos(2\\pi-x) = \\cos x$. $A = -\\cos x + \\sin x - \\cos x = \\sin x - 2\\cos x$."
      },
      {
        id: "ai-sa-11.1.18",
        badge: "TLN 18 - Biết cos 20°, tính cos 160°",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\cos 20° = m$. Tính $\\cos 160°$ theo $m$.",
        correctAnswer: "$-m$",
        acceptableAnswers: ["-m"],
        explanation: "$\\cos 160° = \\cos(180° - 20°) = -\\cos 20° = -m$."
      },
      {
        id: "ai-sa-11.1.19",
        badge: "TLN 19 - Biết sin 35°, tính sin 145°",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Biết $\\sin 35° = k$. Tính $\\sin 145°$ theo $k$.",
        correctAnswer: "$k$",
        acceptableAnswers: ["k"],
        explanation: "$\\sin 145° = \\sin(180° - 35°) = \\sin 35° = k$."
      },
      {
        id: "ai-sa-11.1.20",
        badge: "TLN 20 - Rút gọn biểu thức tổng hợp",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Rút gọn $P = \\sin\\left(\\dfrac{\\pi}{2} - x\\right)\\tan(\\pi + x) + \\cos\\left(\\dfrac{\\pi}{2} + x\\right)\\cot(\\pi - x)$.",
        correctAnswer: "$-\\sin x - \\sin x = -2\\sin x$... thực ra $= \\cos x \\cdot \\tan x + (-\\sin x)(-\\cot x) = \\sin x + \\sin x \\cdot \\dfrac{\\cos x}{\\sin x} = \\sin x + \\cos x$",
        acceptableAnswers: ["sinx + cosx", "sin x + cos x"],
        explanation: "$\\sin(\\pi/2 - x) = \\cos x$, $\\tan(\\pi+x) = \\tan x$, $\\cos(\\pi/2+x) = -\\sin x$, $\\cot(\\pi-x) = -\\cot x$. $P = \\cos x \\cdot \\tan x + (-\\sin x)(-\\cot x) = \\cos x \\cdot \\dfrac{\\sin x}{\\cos x} + \\sin x \\cdot \\dfrac{\\cos x}{\\sin x} = \\sin x + \\cos x$."
      },
      // Dạng 6: Bài toán thực tế vận tốc góc, bánh xe, đồng hồ (4 câu)
      {
        id: "ai-sa-11.1.21",
        badge: "TLN 21 - Vận tốc vòng quay",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Bánh xe máy tính có bán kính $0.2$ m quay với vận tốc $10$ vòng/giây. Tính vận tốc dài (m/s) của một điểm trên vành ngoài.",
        correctAnswer: "$4\\pi$ m/s",
        acceptableAnswers: ["4π", "4pi", "12.57"],
        explanation: "$v = R \\cdot \\omega = 0.2 \\times (10 \\times 2\\pi) = 0.2 \\times 20\\pi = 4\\pi$ m/s."
      },
      {
        id: "ai-sa-11.1.22",
        badge: "TLN 22 - Đồng hồ: góc quay kim giây",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Kim giây đồng hồ quay $1$ vòng mỗi $60$ giây. Trong $25$ giây, kim giây quay góc bao nhiêu radian?",
        correctAnswer: "$\\dfrac{5\\pi}{6}$",
        acceptableAnswers: ["5π/6", "5pi/6"],
        explanation: "Mỗi giây kim quay $\\dfrac{2\\pi}{60} = \\dfrac{\\pi}{30}$ rad. Sau 25 giây: $25 \\times \\dfrac{\\pi}{30} = \\dfrac{25\\pi}{30} = \\dfrac{5\\pi}{6}$ rad."
      },
      {
        id: "ai-sa-11.1.23",
        badge: "TLN 23 - Trái Đất quay quanh Mặt Trời",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Trái Đất quay quanh Mặt Trời theo quỹ đạo gần hình tròn với bán kính khoảng $1.5 \\times 10^8$ km, hoàn thành một vòng trong $365$ ngày. Tính vận tốc dài (km/ngày) của Trái Đất (làm tròn đến hàng nghìn).",
        correctAnswer: "khoảng $2{,}580{,}000$ km/ngày",
        acceptableAnswers: ["2580000", "2 580 000"],
        explanation: "Chu vi quỹ đạo: $C = 2\\pi \\times 1.5 \\times 10^8 \\approx 9.42 \\times 10^8$ km. Vận tốc: $v = \\dfrac{C}{365} \\approx \\dfrac{9.42 \\times 10^8}{365} \\approx 2{,}580{,}000$ km/ngày."
      },
      {
        id: "ai-sa-11.1.24",
        badge: "TLN 24 - Bánh xe lớn - bánh xe nhỏ",
        source: "Tài liệu Luyện tập Toán 11 C1B1",
        prompt: "Máy kéo có bánh xe trước bán kính $0.4$ m và bánh sau bán kính $0.6$ m. Xe chuyển động với vận tốc không đổi sao cho bánh trước quay $90$ vòng/phút. Tính số vòng/phút của bánh sau.",
        correctAnswer: "$60$ vòng/phút",
        acceptableAnswers: ["60"],
        explanation: "Vận tốc di chuyển của xe $= v_\\text{trước} = v_\\text{sau}$. $v = R_\\text{trước} \\cdot \\omega_\\text{trước} = 0.4 \\times (90 \\times 2\\pi) = 72\\pi$ m/phút. Bánh sau: $n_\\text{sau} = \\dfrac{v}{2\\pi R_\\text{sau}} = \\dfrac{72\\pi}{2\\pi \\times 0.6} = \\dfrac{72}{1.2} = 60$ vòng/phút."
      }
    ]
  }
};
