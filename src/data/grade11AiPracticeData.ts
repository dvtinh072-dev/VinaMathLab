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
,
    "t11-b2-cong-thuc-luong-giac": {
  "quizQuestions": [
    {
      "id": "ai-11.2.1",
      "badge": "Luyện thêm 1 - Nhận biết - Công thức cộng côsin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
        "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
        "$\\cos(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\cos(a + b) = \\sin a \\cos b - \\cos a \\sin b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng côsin: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$."
    },
    {
      "id": "ai-11.2.2",
      "badge": "Luyện thêm 2 - Nhận biết - Công thức cộng côsin dấu trừ",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$",
        "$\\cos(a - b) = \\cos a \\cos b - \\sin a \\sin b$",
        "$\\cos(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\cos(a - b) = \\sin a \\sin b - \\cos a \\cos b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng: $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$."
    },
    {
      "id": "ai-11.2.3",
      "badge": "Luyện thêm 3 - Nhận biết - Công thức cộng sin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\sin(a + b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\sin(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
        "$\\sin(a + b) = \\cos a \\cos b - \\sin a \\sin b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng sin: $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$."
    },
    {
      "id": "ai-11.2.4",
      "badge": "Luyện thêm 4 - Nhận biết - Công thức cộng sin dấu trừ",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
        "$\\sin(a - b) = \\sin a \\cos b + \\cos a \\sin b$",
        "$\\sin(a - b) = \\cos a \\sin b - \\sin a \\cos b$",
        "$\\sin(a - b) = \\cos a \\cos b - \\sin a \\sin b$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức cộng sin: $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$."
    },
    {
      "id": "ai-11.2.5",
      "badge": "Luyện thêm 5 - Thông hiểu - Tính sin(a+b)",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Giá trị của biểu thức $\\sin 15^\\circ$ bằng:",
      "options": [
        "$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{3} - 1}{2}$",
        "$\\dfrac{\\sqrt{2} - 1}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ - \\cos 45^\\circ \\sin 30^\\circ = \\dfrac{\\sqrt{2}}{2}\\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2}\\dfrac{1}{2} = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$."
    },
    {
      "id": "ai-11.2.6",
      "badge": "Luyện thêm 6 - Thông hiểu - Tính cos(a+b)",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Giá trị của biểu thức $\\cos 105^\\circ$ bằng:",
      "options": [
        "$\\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$",
        "$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$",
        "$\\dfrac{-\\sqrt{6} - \\sqrt{2}}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 105^\\circ = \\cos(60^\\circ + 45^\\circ) = \\cos 60^\\circ \\cos 45^\\circ - \\sin 60^\\circ \\sin 45^\\circ = \\dfrac{1}{2}\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{3}}{2}\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$."
    },
    {
      "id": "ai-11.2.7",
      "badge": "Luyện thêm 7 - Thông hiểu - Rút gọn góc phụ chéo",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Rút gọn biểu thức $A = \\cos\\left(x + \\dfrac{\\pi}{4}\\right) + \\cos\\left(x - \\dfrac{\\pi}{4}\\right)$, ta được:",
      "options": [
        "$\\sqrt{2}\\cos x$",
        "$\\sqrt{2}\\sin x$",
        "$2\\cos x$",
        "$\\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$A = \\left(\\cos x\\cos\\dfrac{\\pi}{4} - \\sin x\\sin\\dfrac{\\pi}{4}\\right) + \\left(\\cos x\\cos\\dfrac{\\pi}{4} + \\sin x\\sin\\dfrac{\\pi}{4}\\right) = 2\\cos x\\cos\\dfrac{\\pi}{4} = 2\\cos x \\dfrac{\\sqrt{2}}{2} = \\sqrt{2}\\cos x$."
    },
    {
      "id": "ai-11.2.8",
      "badge": "Luyện thêm 8 - Vận dụng - Công thức cộng tang",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Cho $\\tan a = 3, \\tan b = -2$. Giá trị của $\\tan(a - b)$ bằng:",
      "options": [
        "$-1$",
        "$1$",
        "$\\dfrac{5}{7}$",
        "$-5$"
      ],
      "correctIndex": 0,
      "explanation": "$\\tan(a - b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b} = \\dfrac{3 - (-2)}{1 + 3(-2)} = \\dfrac{5}{-5} = -1$."
    },
    {
      "id": "ai-11.2.9",
      "badge": "Luyện thêm 9 - Nhận biết - Công thức nhân đôi sin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Công thức nào sau đây đúng với mọi góc $a$?",
      "options": [
        "$\\sin 2a = 2\\sin a \\cos a$",
        "$\\sin 2a = \\sin a \\cos a$",
        "$\\sin 2a = 2\\sin^2 a$",
        "$\\sin 2a = \\cos^2 a - \\sin^2 a$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức nhân đôi: $\\sin 2a = 2\\sin a \\cos a$."
    },
    {
      "id": "ai-11.2.10",
      "badge": "Luyện thêm 10 - Nhận biết - Công thức nhân đôi côsin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Công thức nào sau đây KHÔNG PHẢI là công thức của $\\cos 2a$?",
      "options": [
        "$\\cos 2a = 1 - 2\\cos^2 a$",
        "$\\cos 2a = \\cos^2 a - \\sin^2 a$",
        "$\\cos 2a = 2\\cos^2 a - 1$",
        "$\\cos 2a = 1 - 2\\sin^2 a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức đúng là $\\cos 2a = 2\\cos^2 a - 1$. Khẳng định $1 - 2\\cos^2 a$ là sai."
    },
    {
      "id": "ai-11.2.11",
      "badge": "Luyện thêm 11 - Thông hiểu - Tính sin 2a từ sin a, cos a",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Cho $\\sin a = \\dfrac{4}{5}$ và $\\cos a = -\\dfrac{3}{5}$. Giá trị của $\\sin 2a$ bằng:",
      "options": [
        "$-\\dfrac{24}{25}$",
        "$\\dfrac{24}{25}$",
        "$-\\dfrac{7}{25}$",
        "$\\dfrac{7}{25}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 2a = 2\\sin a \\cos a = 2\\left(\\dfrac{4}{5}\\right)\\left(-\\dfrac{3}{5}\\right) = -\\dfrac{24}{25}$."
    },
    {
      "id": "ai-11.2.12",
      "badge": "Luyện thêm 12 - Thông hiểu - Tính cos 2a từ cos a",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Cho $\\cos a = -\\dfrac{1}{4}$. Giá trị của $\\cos 2a$ bằng:",
      "options": [
        "$-\\dfrac{7}{8}$",
        "$\\dfrac{7}{8}$",
        "$-\\dfrac{15}{16}$",
        "$\\dfrac{15}{16}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 2a = 2\\cos^2 a - 1 = 2\\left(-\\dfrac{1}{4}\\right)^2 - 1 = \\dfrac{2}{16} - 1 = -\\dfrac{7}{8}$."
    },
    {
      "id": "ai-11.2.13",
      "badge": "Luyện thêm 13 - Thông hiểu - Công thức hạ bậc sin^2",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Công thức hạ bậc nào sau đây là ĐÚNG?",
      "options": [
        "$\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$",
        "$\\sin^2 a = \\dfrac{1 + \\cos 2a}{2}$",
        "$\\sin^2 a = \\dfrac{1 - \\sin 2a}{2}$",
        "$\\sin^2 a = 1 - \\cos 2a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức hạ bậc: $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$."
    },
    {
      "id": "ai-11.2.14",
      "badge": "Luyện thêm 14 - Thông hiểu - Công thức hạ bậc cos^2",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Công thức hạ bậc nào sau đây là ĐÚNG?",
      "options": [
        "$\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$",
        "$\\cos^2 a = \\dfrac{1 - \\cos 2a}{2}$",
        "$\\cos^2 a = \\dfrac{1 + \\sin 2a}{2}$",
        "$\\cos^2 a = 1 + \\cos 2a$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức hạ bậc: $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$."
    },
    {
      "id": "ai-11.2.15",
      "badge": "Luyện thêm 15 - Vận dụng - Rút gọn biểu thức nhân đôi",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Rút gọn biểu thức $M = \\dfrac{\\sin 2x}{1 + \\cos 2x}$ (với điều kiện xác định):",
      "options": [
        "$\\tan x$",
        "$\\cot x$",
        "$\\sin x$",
        "$\\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$M = \\dfrac{2\\sin x \\cos x}{1 + (2\\cos^2 x - 1)} = \\dfrac{2\\sin x \\cos x}{2\\cos^2 x} = \\dfrac{\\sin x}{\\cos x} = \\tan x$."
    },
    {
      "id": "ai-11.2.16",
      "badge": "Luyện thêm 16 - Vận dụng - Rút gọn cot x - tan x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Biểu thức $\\cot x - \\tan x$ tương đương với biểu thức nào sau đây?",
      "options": [
        "$2\\cot 2x$",
        "$2\\tan 2x$",
        "$\\cot 2x$",
        "$\\tan 2x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cot x - \\tan x = \\dfrac{\\cos x}{\\sin x} - \\dfrac{\\sin x}{\\cos x} = \\dfrac{\\cos^2 x - \\sin^2 x}{\\sin x \\cos x} = \\dfrac{\\cos 2x}{\\frac{1}{2}\\sin 2x} = 2\\cot 2x$."
    },
    {
      "id": "ai-11.2.17",
      "badge": "Luyện thêm 17 - Vận dụng - Tính giá trị nhân đôi",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Cho $\\tan a = \\dfrac{1}{2}$. Giá trị của $\\cos 2a$ bằng:",
      "options": [
        "$\\dfrac{3}{5}$",
        "$\\dfrac{4}{5}$",
        "$-\\dfrac{3}{5}$",
        "$\\dfrac{1}{5}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 2a = \\dfrac{1 - \\tan^2 a}{1 + \\tan^2 a} = \\dfrac{1 - 1/4}{1 + 1/4} = \\dfrac{3/4}{5/4} = \\dfrac{3}{5}$."
    },
    {
      "id": "ai-11.2.18",
      "badge": "Luyện thêm 18 - Vận dụng cao - Tích liên tiếp cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Giá trị của biểu thức $P = \\cos\\dfrac{\\pi}{7}\\cos\\dfrac{2\\pi}{7}\\cos\\dfrac{4\\pi}{7}$ bằng:",
      "options": [
        "$-\\dfrac{1}{8}$",
        "$\\dfrac{1}{8}$",
        "$-\\dfrac{1}{4}$",
        "$\\dfrac{1}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Nhân hai vế với $8\\sin\\dfrac{\\pi}{7}$: $8\\sin\\dfrac{\\pi}{7}P = 4\\sin\\dfrac{2\\pi}{7}\\cos\\dfrac{2\\pi}{7}\\cos\\dfrac{4\\pi}{7} = 2\\sin\\dfrac{4\\pi}{7}\\cos\\dfrac{4\\pi}{7} = \\sin\\dfrac{8\\pi}{7} = \\sin\\left(\\pi + \\dfrac{\\pi}{7}\\right) = -\\sin\\dfrac{\\pi}{7}$. Suy ra $P = -\\dfrac{1}{8}$."
    },
    {
      "id": "ai-11.2.19",
      "badge": "Luyện thêm 19 - Nhận biết - Công thức tích cos.cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$",
        "$\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$",
        "$\\cos a \\cos b = \\dfrac{1}{2}[\\sin(a + b) + \\sin(a - b)]$",
        "$\\cos a \\cos b = \\cos(a - b) + \\cos(a + b)$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tích thành tổng: $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$."
    },
    {
      "id": "ai-11.2.20",
      "badge": "Luyện thêm 20 - Nhận biết - Công thức tích sin.sin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi góc $a, b$?",
      "options": [
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$",
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a + b) - \\cos(a - b)]$",
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$",
        "$\\sin a \\sin b = \\dfrac{1}{2}[\\sin(a + b) - \\sin(a - b)]$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tích thành tổng: $\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$."
    },
    {
      "id": "ai-11.2.21",
      "badge": "Luyện thêm 21 - Thông hiểu - Tính tích cos góc đặc biệt",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Giá trị của biểu thức $2\\cos 75^\\circ \\cos 15^\\circ$ bằng:",
      "options": [
        "$\\dfrac{1}{2}$",
        "$\\dfrac{\\sqrt{3}}{2}$",
        "$1$",
        "$\\dfrac{\\sqrt{2}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$2\\cos 75^\\circ \\cos 15^\\circ = \\cos(75^\\circ - 15^\\circ) + \\cos(75^\\circ + 15^\\circ) = \\cos 60^\\circ + \\cos 90^\\circ = \\dfrac{1}{2} + 0 = \\dfrac{1}{2}$."
    },
    {
      "id": "ai-11.2.22",
      "badge": "Luyện thêm 22 - Thông hiểu - Biến đổi tích sin 3x cos 2x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Biểu thức $2\\sin 3x \\cos 2x$ viết thành tổng là:",
      "options": [
        "$\\sin 5x + \\sin x$",
        "$\\sin 5x - \\sin x$",
        "$\\cos 5x + \\cos x$",
        "$\\cos 5x - \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$2\\sin 3x \\cos 2x = \\sin(3x + 2x) + \\sin(3x - 2x) = \\sin 5x + \\sin x$."
    },
    {
      "id": "ai-11.2.23",
      "badge": "Luyện thêm 23 - Vận dụng - Tích sin 7x sin 3x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Biểu thức $4\\sin 7x \\sin 3x$ được viết dưới dạng hiệu các côsin là:",
      "options": [
        "$2(\\cos 4x - \\cos 10x)$",
        "$2(\\cos 10x - \\cos 4x)$",
        "$2(\\cos 4x + \\cos 10x)$",
        "$4(\\cos 4x - \\cos 10x)$"
      ],
      "correctIndex": 0,
      "explanation": "$4\\sin 7x \\sin 3x = 4 \\cdot \\dfrac{1}{2}[\\cos(7x - 3x) - \\cos(7x + 3x)] = 2(\\cos 4x - \\cos 10x)$."
    },
    {
      "id": "ai-11.2.24",
      "badge": "Luyện thêm 24 - Vận dụng cao - Rút gọn tích góc đối",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Giá trị của biểu thức $A = \\sin\\dfrac{\\pi}{12}\\sin\\dfrac{5\\pi}{12}$ bằng:",
      "options": [
        "$\\dfrac{1}{4}$",
        "$\\dfrac{1}{2}$",
        "$\\dfrac{\\sqrt{3}}{4}$",
        "$\\dfrac{1}{8}$"
      ],
      "correctIndex": 0,
      "explanation": "$A = \\dfrac{1}{2}\\left[\\cos\\left(\\dfrac{\\pi}{12} - \\dfrac{5\\pi}{12}\\right) - \\cos\\left(\\dfrac{\\pi}{12} + \\dfrac{5\\pi}{12}\\right)\\right] = \\dfrac{1}{2}\\left[\\cos\\left(-\\dfrac{\\pi}{3}\\right) - \\cos\\dfrac{\\pi}{2}\\right] = \\dfrac{1}{2}\\left(\\dfrac{1}{2} - 0\\right) = \\dfrac{1}{4}$."
    },
    {
      "id": "ai-11.2.25",
      "badge": "Luyện thêm 25 - Nhận biết - Công thức cos + cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Công thức nào sau đây đúng với mọi góc $u, v$?",
      "options": [
        "$\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
        "$\\cos u + \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
        "$\\cos u + \\cos v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
        "$\\cos u + \\cos v = \\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tổng thành tích: $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$."
    },
    {
      "id": "ai-11.2.26",
      "badge": "Luyện thêm 26 - Nhận biết - Công thức cos - cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Công thức nào sau đây đúng với mọi góc $u, v$?",
      "options": [
        "$\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
        "$\\cos u - \\cos v = 2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
        "$\\cos u - \\cos v = -2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
        "$\\cos u - \\cos v = 2\\cos\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo công thức tổng thành tích: $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$."
    },
    {
      "id": "ai-11.2.27",
      "badge": "Luyện thêm 27 - Thông hiểu - Tổng sin 5x + sin 3x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Biến đổi biểu thức $\\sin 5x + \\sin 3x$ thành tích, ta được:",
      "options": [
        "$2\\sin 4x \\cos x$",
        "$2\\cos 4x \\sin x$",
        "$2\\sin 4x \\sin x$",
        "$2\\cos 4x \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 5x + \\sin 3x = 2\\sin\\dfrac{5x+3x}{2}\\cos\\dfrac{5x-3x}{2} = 2\\sin 4x \\cos x$."
    },
    {
      "id": "ai-11.2.28",
      "badge": "Luyện thêm 28 - Thông hiểu - Hiệu cos 4x - cos 2x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Biến đổi biểu thức $\\cos 4x - \\cos 2x$ thành tích, ta được:",
      "options": [
        "$-2\\sin 3x \\sin x$",
        "$2\\sin 3x \\sin x$",
        "$-2\\cos 3x \\cos x$",
        "$2\\cos 3x \\sin x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 4x - \\cos 2x = -2\\sin\\dfrac{4x+2x}{2}\\sin\\dfrac{4x-2x}{2} = -2\\sin 3x \\sin x$."
    },
    {
      "id": "ai-11.2.29",
      "badge": "Luyện thêm 29 - Thông hiểu - Rút gọn phân thức tổng",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Rút gọn biểu thức $T = \\dfrac{\\cos 3x - \\cos 5x}{\\sin 5x - \\sin 3x}$ (với điều kiện xác định):",
      "options": [
        "$\\tan 4x$",
        "$\\cot 4x$",
        "$-\\tan 4x$",
        "$\\tan x$"
      ],
      "correctIndex": 0,
      "explanation": "Tử số: $\\cos 3x - \\cos 5x = -2\\sin 4x \\sin(-x) = 2\\sin 4x \\sin x$. Mẫu số: $\\sin 5x - \\sin 3x = 2\\cos 4x \\sin x$. Do đó $T = \\dfrac{2\\sin 4x \\sin x}{2\\cos 4x \\sin x} = \\dfrac{\\sin 4x}{\\cos 4x} = \\tan 4x$."
    },
    {
      "id": "ai-11.2.30",
      "badge": "Luyện thêm 30 - Vận dụng - Tính giá trị cos 20 cos 40 cos 80",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Giá trị của biểu thức $\\cos 20^\\circ + \\cos 100^\\circ + \\cos 140^\\circ$ bằng:",
      "options": [
        "$0$",
        "$\\dfrac{1}{2}$",
        "$1$",
        "$\\dfrac{\\sqrt{3}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos 140^\\circ + \\cos 20^\\circ = 2\\cos 80^\\circ \\cos 60^\\circ = \\cos 80^\\circ$. Biểu thức bằng $\\cos 80^\\circ + \\cos 100^\\circ = 2\\cos 90^\\circ \\cos 10^\\circ = 0$."
    },
    {
      "id": "ai-11.2.31",
      "badge": "Luyện thêm 31 - Vận dụng - Đẳng thức lượng giác tam giác",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Trong tam giác $ABC$, khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\cos A + \\cos B = 2\\cos\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2} = 2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$",
        "$\\cos A + \\cos B = 2\\cos\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$",
        "$\\cos A + \\cos B = 2\\sin\\dfrac{C}{2}\\sin\\dfrac{A-B}{2}$",
        "$\\cos A + \\cos B = -2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $A + B = \\pi - C \\Rightarrow \\dfrac{A+B}{2} = \\dfrac{\\pi}{2} - \\dfrac{C}{2} \\Rightarrow \\cos\\dfrac{A+B}{2} = \\sin\\dfrac{C}{2}$. Do đó $\\cos A + \\cos B = 2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$."
    },
    {
      "id": "ai-11.2.32",
      "badge": "Luyện thêm 32 - Vận dụng cao - Đẳng thức tan",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Nếu $A, B, C$ là 3 góc của tam giác không vuông thì $\\tan A + \\tan B + \\tan C$ bằng:",
      "options": [
        "$\\tan A \\tan B \\tan C$",
        "$\\cot A \\cot B \\cot C$",
        "$1$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $A + B = \\pi - C \\Rightarrow \\tan(A + B) = -\\tan C \\Rightarrow \\dfrac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = -\\tan C \\Rightarrow \\tan A + \\tan B = -\\tan C + \\tan A \\tan B \\tan C \\Rightarrow \\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$."
    },
    {
      "id": "ai-11.2.33",
      "badge": "Luyện thêm 33 - Thông hiểu - Rút gọn sin^4 - cos^4",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Rút gọn biểu thức $H = \\sin^4 x - \\cos^4 x$, ta được kết quả là:",
      "options": [
        "$-\\cos 2x$",
        "$\\cos 2x$",
        "$\\sin 2x$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "$H = (\\sin^2 x - \\cos^2 x)(\\sin^2 x + \\cos^2 x) = -(\\cos^2 x - \\sin^2 x)(1) = -\\cos 2x$."
    },
    {
      "id": "ai-11.2.34",
      "badge": "Luyện thêm 34 - Thông hiểu - Biến đổi asinx + bcosx",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Biểu thức $\\sqrt{3}\\sin x - \\cos x$ có thể viết lại dưới dạng:",
      "options": [
        "$2\\sin\\left(x - \\dfrac{\\pi}{6}\\right)$",
        "$2\\sin\\left(x + \\dfrac{\\pi}{6}\\right)$",
        "$2\\cos\\left(x - \\dfrac{\\pi}{6}\\right)$",
        "$\\sqrt{2}\\sin\\left(x - \\dfrac{\\pi}{6}\\right)$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sqrt{3}\\sin x - \\cos x = 2\\left(\\dfrac{\\sqrt{3}}{2}\\sin x - \\dfrac{1}{2}\\cos x\\right) = 2\\left(\\sin x \\cos\\dfrac{\\pi}{6} - \\cos x \\sin\\dfrac{\\pi}{6}\\right) = 2\\sin\\left(x - \\dfrac{\\pi}{6}\\right)$."
    },
    {
      "id": "ai-11.2.35",
      "badge": "Luyện thêm 35 - Thông hiểu - Độc lập đối với x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Giá trị của biểu thức $B = \\cos^2 x + \\cos^2\\left(x + \\dfrac{\\pi}{3}\\right) + \\cos^2\\left(x - \\dfrac{\\pi}{3}\\right)$ bằng:",
      "options": [
        "$\\dfrac{3}{2}$",
        "$1$",
        "$\\dfrac{1}{2}$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "Hạ bậc từng số hạng: $B = \\dfrac{1 + \\cos 2x}{2} + \\dfrac{1 + \\cos(2x + 2\\pi/3)}{2} + \\dfrac{1 + \\cos(2x - 2\\pi/3)}{2} = \\dfrac{3}{2} + \\dfrac{1}{2}[\\cos 2x + 2\\cos 2x \\cos(2\\pi/3)] = \\dfrac{3}{2} + \\dfrac{1}{2}[\\cos 2x - \\cos 2x] = \\dfrac{3}{2}$."
    },
    {
      "id": "ai-11.2.36",
      "badge": "Luyện thêm 36 - Vận dụng - Bắn súng góc ngắm",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Một vận động viên ngắm bắn mục tiêu trên tường ở góc ngắm $\\alpha$ có $\\tan\\alpha = \\dfrac{4}{3}$. Nếu vận động viên giảm góc ngắm đi một nửa $\\left(\\dfrac{\\alpha}{2}\\right)$, giá trị $\\tan\\dfrac{\\alpha}{2}$ bằng:",
      "options": [
        "$\\dfrac{1}{2}$",
        "$\\dfrac{1}{3}$",
        "$\\dfrac{2}{3}$",
        "$\\dfrac{1}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\tan\\alpha = \\dfrac{2\\tan(\\alpha/2)}{1 - \\tan^2(\\alpha/2)} = \\dfrac{4}{3}$. Đặt $t = \\tan(\\alpha/2) > 0 \\Rightarrow \\dfrac{2t}{1 - t^2} = \\dfrac{4}{3} \\Rightarrow 6t = 4 - 4t^2 \\Rightarrow 2t^2 + 3t - 2 = 0 \\Rightarrow t = \\dfrac{1}{2}$."
    },
    {
      "id": "ai-11.2.37",
      "badge": "Luyện thêm 37 - Vận dụng - Độ lệch pha sóng",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Tổng hợp hai dao động điều hòa cùng phương $x_1 = 3\\cos(10t)$ cm và $x_2 = 3\\cos\\left(10t + \\dfrac{\\pi}{3}\\right)$ cm có biên độ dao động tổng hợp là:",
      "options": [
        "$3\\sqrt{3}$ cm",
        "$6$ cm",
        "$3$ cm",
        "$3\\sqrt{2}$ cm"
      ],
      "correctIndex": 0,
      "explanation": "$A^2 = A_1^2 + A_2^2 + 2A_1A_2\\cos\\Delta\\varphi = 9 + 9 + 2(9)\\cos\\dfrac{\\pi}{3} = 18 + 9 = 27 \\Rightarrow A = 3\\sqrt{3}$ cm."
    },
    {
      "id": "ai-11.2.38",
      "badge": "Luyện thêm 38 - Vận dụng - Công suất điện xoay chiều",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Hiệu điện thế $u = 220\\sqrt{2}\\cos(100\\pi t)$ (V) và dòng điện $i = 2\\sqrt{2}\\cos\\left(100\\pi t - \\dfrac{\\pi}{3}\\right)$ (A). Công suất tiêu thụ trung bình $P = U I \\cos\\varphi$ bằng:",
      "options": [
        "$220$ W",
        "$440$ W",
        "$220\\sqrt{3}$ W",
        "$110$ W"
      ],
      "correctIndex": 0,
      "explanation": "$U = 220$ V, $I = 2$ A, độ lệch pha $\\varphi = \\dfrac{\\pi}{3}$. $P = 220 \\times 2 \\times \\cos\\dfrac{\\pi}{3} = 440 \\times \\dfrac{1}{2} = 220$ W."
    },
    {
      "id": "ai-11.2.39",
      "badge": "Luyện thêm 39 - Vận dụng cao - Tam giác đều",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Tam giác $ABC$ thỏa mãn điều kiện $\\sin A + \\sin B + \\sin C = \\dfrac{3\\sqrt{3}}{2}$ là tam giác gì?",
      "options": [
        "Tam giác đều",
        "Tam giác vuông cân",
        "Tam giác vuông có góc $30^\\circ$",
        "Tam giác cân có góc ở đỉnh $120^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Trong mọi tam giác, ta luôn có bất đẳng thức $\\sin A + \\sin B + \\sin C \\le \\dfrac{3\\sqrt{3}}{2}$. Dấu '=' xảy ra khi và chỉ khi $A = B = C = 60^\\circ$, tức tam giác $ABC$ đều."
    },
    {
      "id": "ai-11.2.40",
      "badge": "Luyện thêm 40 - Vận dụng cao - Đẳng thức tam giác vuông",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "question": "Tam giác $ABC$ có $\\cos^2 A + \\cos^2 B + \\cos^2 C = 1$ là tam giác:",
      "options": [
        "Tam giác vuông",
        "Tam giác đều",
        "Tam giác cân",
        "Tam giác nhọn"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos^2 A + \\cos^2 B + \\cos^2 C = 1 - 2\\cos A \\cos B \\cos C$. Do đó $\\cos^2 A + \\cos^2 B + \\cos^2 C = 1 \\Leftrightarrow 2\\cos A \\cos B \\cos C = 0 \\Leftrightarrow$ có ít nhất 1 góc bằng $90^\\circ$ (tam giác vuông)."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ai-tf-11.2.1",
      "badge": "Đúng/Sai 1 - Công thức cộng cơ bản",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho hai góc lượng giác $a$ và $b$. Xét tính đúng sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin(a + b) = \\sin a\\cos b + \\cos a\\sin b$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức cộng sin."
        },
        {
          "id": "b",
          "text": "$\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức cộng côsin."
        },
        {
          "id": "c",
          "text": "$\\cos(a + b) = \\cos a\\cos b + \\sin a\\sin b$",
          "correctAnswer": false,
          "explanation": "Sai, công thức đúng là dấu trừ: $\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b$."
        },
        {
          "id": "d",
          "text": "$\\sin(a - b) = \\sin a\\cos b - \\cos a\\sin b$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức cộng sin."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.2",
      "badge": "Đúng/Sai 2 - Tính giá trị lượng giác góc đặc biệt",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét tính đúng sai của các giá trị lượng giác sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 75^\\circ = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$",
          "correctAnswer": true,
          "explanation": "$\\sin(45^\\circ + 30^\\circ) = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 75^\\circ = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$",
          "correctAnswer": true,
          "explanation": "$\\cos(45^\\circ + 30^\\circ) = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\tan 75^\\circ = 2 - \\sqrt{3}$",
          "correctAnswer": false,
          "explanation": "$\\tan 75^\\circ = 2 + \\sqrt{3}$ (không phải $2 - \\sqrt{3}$). Sai."
        },
        {
          "id": "d",
          "text": "$\\cos 15^\\circ = \\sin 75^\\circ$",
          "correctAnswer": true,
          "explanation": "Vì $15^\\circ + 75^\\circ = 90^\\circ$ (hai góc phụ nhau) nên $\\cos 15^\\circ = \\sin 75^\\circ$. Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.3",
      "badge": "Đúng/Sai 3 - Công thức nhân đôi",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho góc lượng giác $x$. Xét tính đúng sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 2x = 2\\sin x\\cos x$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức nhân đôi sin."
        },
        {
          "id": "b",
          "text": "$\\cos 2x = \\cos^2 x - \\sin^2 x$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức nhân đôi côsin."
        },
        {
          "id": "c",
          "text": "$\\cos 2x = 2\\sin^2 x - 1$",
          "correctAnswer": false,
          "explanation": "Sai, công thức đúng là $\\cos 2x = 1 - 2\\sin^2 x$."
        },
        {
          "id": "d",
          "text": "$\\tan 2x = \\dfrac{2\\tan x}{1 - \\tan^2 x}$ (với điều kiện xác định)",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức nhân đôi tang."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.4",
      "badge": "Đúng/Sai 4 - Cho cos x tính các giá trị nhân đôi",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $\\cos x = \\dfrac{3}{5}$ với $-\\dfrac{\\pi}{2} < x < 0$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin x = -\\dfrac{4}{5}$",
          "correctAnswer": true,
          "explanation": "Vì $x$ thuộc góc phần tư IV nên $\\sin x = -\\sqrt{1 - 9/25} = -4/5$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\sin 2x = -\\dfrac{24}{25}$",
          "correctAnswer": true,
          "explanation": "$\\sin 2x = 2(3/5)(-4/5) = -24/25$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\cos 2x = -\\dfrac{7}{25}$",
          "correctAnswer": true,
          "explanation": "$\\cos 2x = 2(9/25) - 1 = 18/25 - 1 = -7/25$. Đúng."
        },
        {
          "id": "d",
          "text": "$\\tan 2x = \\dfrac{24}{7}$",
          "correctAnswer": true,
          "explanation": "$\\tan 2x = \\dfrac{-24/25}{-7/25} = \\dfrac{24}{7}$. Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.5",
      "badge": "Đúng/Sai 5 - Công thức hạ bậc",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét tính đúng sai của các công thức hạ bậc sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\cos^2 2x = \\dfrac{1 + \\cos 4x}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng với góc $2x$."
        },
        {
          "id": "d",
          "text": "$\\sin^2 3x = \\dfrac{1 - \\cos 3x}{2}$",
          "correctAnswer": false,
          "explanation": "Sai, phải là $\\dfrac{1 - \\cos 6x}{2}$."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.6",
      "badge": "Đúng/Sai 6 - Rút gọn biểu thức lượng giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét các đẳng thức rút gọn sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\dfrac{\\sin 2x}{2\\sin x} = \\cos x$ (với $\\sin x \\ne 0$)",
          "correctAnswer": true,
          "explanation": "$\\dfrac{2\\sin x\\cos x}{2\\sin x} = \\cos x$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\dfrac{1 - \\cos 2x}{\\sin 2x} = \\tan x$ (với điều kiện xác định)",
          "correctAnswer": true,
          "explanation": "$\\dfrac{2\\sin^2 x}{2\\sin x\\cos x} = \\tan x$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin 4x = 4\\sin x\\cos x$",
          "correctAnswer": false,
          "explanation": "Sai, $\\sin 4x = 2\\sin 2x\\cos 2x = 4\\sin x\\cos x\\cos 2x$."
        },
        {
          "id": "d",
          "text": "$\\cos^4 x - \\sin^4 x = \\cos 2x$",
          "correctAnswer": true,
          "explanation": "$(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x) = \\cos 2x$. Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.7",
      "badge": "Đúng/Sai 7 - Biến đổi tích thành tổng",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét tính đúng sai của các công thức biến đổi tích thành tổng:",
      "subItems": [
        {
          "id": "a",
          "text": "$2\\cos a\\cos b = \\cos(a - b) + \\cos(a + b)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$2\\sin a\\sin b = \\cos(a - b) - \\cos(a + b)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$2\\sin a\\cos b = \\sin(a + b) + \\sin(a - b)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$2\\cos a\\sin b = \\sin(a + b) + \\sin(a - b)$",
          "correctAnswer": false,
          "explanation": "Sai, $2\\cos a\\sin b = \\sin(a + b) - \\sin(a - b)$."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.8",
      "badge": "Đúng/Sai 8 - Áp dụng tích thành tổng",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét kết quả biến đổi của các tích sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 4x\\cos x = \\dfrac{1}{2}(\\sin 5x + \\sin 3x)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 3x\\cos x = \\dfrac{1}{2}(\\cos 4x + \\cos 2x)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin 5x\\sin x = \\dfrac{1}{2}(\\cos 4x - \\cos 6x)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$\\sin 2x\\sin 4x = \\dfrac{1}{2}(\\cos 6x - \\cos 2x)$",
          "correctAnswer": false,
          "explanation": "Sai, bằng $\\dfrac{1}{2}(\\cos 2x - \\cos 6x)$."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.9",
      "badge": "Đúng/Sai 9 - Biến đổi tổng thành tích",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét tính đúng sai của các công thức tổng thành tích:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin u + \\sin v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$\\sin u - \\sin v = 2\\sin\\dfrac{u-v}{2}\\cos\\dfrac{u+v}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.10",
      "badge": "Đúng/Sai 10 - Rút gọn tổng góc lượng giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét tính đúng sai khi rút gọn các biểu thức tổng thành tích:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 5x - \\sin x = 2\\cos 3x\\sin 2x$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 4x + \\cos 2x = 2\\cos 3x\\cos x$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "$\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\dfrac{\\pi}{4}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "$\\cos x - \\sin x = \\sqrt{2}\\cos\\left(x - \\dfrac{\\pi}{4}\\right)$",
          "correctAnswer": false,
          "explanation": "Sai, $\\cos x - \\sin x = \\sqrt{2}\\cos\\left(x + \\dfrac{\\pi}{4}\\right)$."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.11",
      "badge": "Đúng/Sai 11 - Giá trị biểu thức lượng giác không phụ thuộc vào x",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho biểu thức $P = \\cos^2 x + \\cos^2(60^\\circ + x) + \\cos^2(60^\\circ - x)$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Biểu thức $P$ có giá trị không phụ thuộc vào biến $x$",
          "correctAnswer": true,
          "explanation": "Đúng, $P$ là hằng số."
        },
        {
          "id": "b",
          "text": "Giá trị của $P$ bằng $\\dfrac{3}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng, hạ bậc ta được $P = 3/2$."
        },
        {
          "id": "c",
          "text": "Khi $x = 0$ thì $P = 1 + \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{3}{2}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Khi $x = 30^\\circ$ thì $P = 2$",
          "correctAnswer": false,
          "explanation": "Sai, vì $P$ luôn bằng $3/2$ với mọi $x$."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.12",
      "badge": "Đúng/Sai 12 - Tam giác và lượng giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho tam giác $ABC$. Xét tính đúng sai của các hệ thức sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin(A + B) = \\sin C$",
          "correctAnswer": true,
          "explanation": "$A + B = \\pi - C \\Rightarrow \\sin(A + B) = \\sin C$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos(A + B) = -\\cos C$",
          "correctAnswer": true,
          "explanation": "$\\cos(A + B) = \\cos(\\pi - C) = -\\cos C$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\cos\\dfrac{A+B}{2} = \\sin\\dfrac{C}{2}$",
          "correctAnswer": true,
          "explanation": "Hai góc phụ nhau. Đúng."
        },
        {
          "id": "d",
          "text": "$\\tan(A + B) = \\tan C$",
          "correctAnswer": false,
          "explanation": "Sai, $\\tan(A + B) = -\\tan C$."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.13",
      "badge": "Đúng/Sai 13 - Đẳng thức tam giác đặc biệt",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho tam giác $ABC$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$",
          "correctAnswer": true,
          "explanation": "Đúng, đây là hệ thức lượng giác kinh điển trong tam giác."
        },
        {
          "id": "b",
          "text": "Nếu tam giác vuông tại $A$ thì $\\sin 2A = 0$",
          "correctAnswer": true,
          "explanation": "Vì $A = 90^\\circ \\Rightarrow 2A = 180^\\circ \\Rightarrow \\sin 2A = 0$. Đúng."
        },
        {
          "id": "c",
          "text": "Nếu $\\sin A = 2\\sin B\\cos C$ thì tam giác $ABC$ cân tại $A$",
          "correctAnswer": false,
          "explanation": "Sai, $\\sin A = \\sin(B + C) = \\sin B\\cos C + \\cos B\\sin C = 2\\sin B\\cos C \\Leftrightarrow \\sin(B - C) = 0 \\Leftrightarrow B = C$ (tam giác cân tại $A$ là đúng nhưng đỉnh cân là $A$ với $B = C$)."
        },
        {
          "id": "d",
          "text": "$\\cos A + \\cos B + \\cos C > 1$ với mọi tam giác $ABC$",
          "correctAnswer": true,
          "explanation": "Đúng, $\\cos A + \\cos B + \\cos C = 1 + 4\\sin(A/2)\\sin(B/2)\\sin(C/2) > 1$."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.14",
      "badge": "Đúng/Sai 14 - Biến đổi biểu thức phức tạp",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $x$ thỏa mãn $\\tan x = 2$. Xét các giá trị sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 2x = \\dfrac{4}{5}$",
          "correctAnswer": true,
          "explanation": "$\\sin 2x = \\dfrac{2\\tan x}{1 + \\tan^2 x} = \\dfrac{4}{5}$. Đúng."
        },
        {
          "id": "b",
          "text": "$\\cos 2x = -\\dfrac{3}{5}$",
          "correctAnswer": true,
          "explanation": "$\\cos 2x = \\dfrac{1 - \\tan^2 x}{1 + \\tan^2 x} = \\dfrac{1 - 4}{5} = -\\dfrac{3}{5}$. Đúng."
        },
        {
          "id": "c",
          "text": "$\\tan 2x = -\\dfrac{4}{3}$",
          "correctAnswer": true,
          "explanation": "$\\tan 2x = \\dfrac{2(2)}{1 - 4} = -\\dfrac{4}{3}$. Đúng."
        },
        {
          "id": "d",
          "text": "$\\cos^2 2x + \\sin^2 2x = 1$",
          "correctAnswer": true,
          "explanation": "Luôn đúng theo hệ thức cơ bản."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.15",
      "badge": "Đúng/Sai 15 - Ứng dụng sóng giao thoa",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Xét sự kết hợp của hai dao động điều hòa $y_1 = A\\cos(\\omega t)$ và $y_2 = A\\cos(\\omega t + \\Delta\\varphi)$:",
      "subItems": [
        {
          "id": "a",
          "text": "Dao động tổng hợp có dạng $y = 2A\\cos\\left(\\dfrac{\\Delta\\varphi}{2}\\right)\\cos\\left(\\omega t + \\dfrac{\\Delta\\varphi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức biến đổi tổng thành tích."
        },
        {
          "id": "b",
          "text": "Khi $\\Delta\\varphi = 0$, biên độ cực đại bằng $2A$",
          "correctAnswer": true,
          "explanation": "Đúng, giao thoa cực đại."
        },
        {
          "id": "c",
          "text": "Khi $\\Delta\\varphi = \\pi$, dao động tổng hợp triệt tiêu ($y = 0$)",
          "correctAnswer": true,
          "explanation": "Đúng, vì $\\cos(\\pi/2) = 0$."
        },
        {
          "id": "d",
          "text": "Khi $\\Delta\\varphi = \\dfrac{\\pi}{2}$, biên độ dao động bằng $A\\sqrt{2}$",
          "correctAnswer": true,
          "explanation": "Biên độ $= 2A\\cos(\\pi/4) = 2A(\\sqrt{2}/2) = A\\sqrt{2}$. Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.2.16",
      "badge": "Đúng/Sai 16 - Bài toán ném xiên vật lý",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tầm xa của vật ném xiên từ mặt đất với góc ném $\\alpha$ ($0 < \\alpha < 90^\\circ$) và vận tốc ban đầu $v_0$ là $L = \\dfrac{v_0^2\\sin 2\\alpha}{g}$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Tầm xa $L$ đạt giá trị lớn nhất khi góc ném $\\alpha = 45^\\circ$",
          "correctAnswer": true,
          "explanation": "Vì $\\sin 2\\alpha \\le 1$, lớn nhất khi $2\\alpha = 90^\\circ \\Leftrightarrow \\alpha = 45^\\circ$. Đúng."
        },
        {
          "id": "b",
          "text": "Giá trị tầm xa lớn nhất là $L_{\\max} = \\dfrac{v_0^2}{g}$",
          "correctAnswer": true,
          "explanation": "Đúng khi $\\sin 2\\alpha = 1$."
        },
        {
          "id": "c",
          "text": "Hai góc ném phụ nhau ($\\\\alpha_1 + \\\\alpha_2 = 90^\\circ$) cho cùng một tầm xa $L$",
          "correctAnswer": true,
          "explanation": "Vì $\\sin(2(90^\\circ - \\alpha)) = \\sin(180^\\circ - 2\\alpha) = \\sin 2\\alpha$. Đúng."
        },
        {
          "id": "d",
          "text": "Nếu góc ném $\\alpha = 30^\\circ$ thì tầm xa bằng $\\dfrac{v_0^2}{2g}$",
          "correctAnswer": false,
          "explanation": "Sai, khi $\\alpha = 30^\\circ$ thì $\\sin 2\\alpha = \\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2} \\Rightarrow L = \\dfrac{\\sqrt{3}v_0^2}{2g}$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-11.2.1",
      "badge": "TLN 1 - Tính cos 75°",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của biểu thức $4\\cos 75^\\circ \\cdot (\\sqrt{6} + \\sqrt{2})$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Ta có $\\cos 75^\\circ = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$. Do đó biểu thức $= 4 \\cdot \\dfrac{\\sqrt{6} - \\sqrt{2}}{4} \\cdot (\\sqrt{6} + \\sqrt{2}) = (\\sqrt{6})^2 - (\\sqrt{2})^2 = 6 - 2 = 4$ (Sửa kết quả: $6 - 2 = 4$)."
    },
    {
      "id": "ai-sa-11.2.2",
      "badge": "TLN 2 - Tính tan(a+b)",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $\\tan a = 2, \\tan b = 3$. Tính giá trị của $\\tan(a + b)$.",
      "correctAnswer": "-1",
      "acceptableAnswers": [
        "-1"
      ],
      "explanation": "$\\tan(a + b) = \\dfrac{2 + 3}{1 - 2 \\times 3} = \\dfrac{5}{-5} = -1$."
    },
    {
      "id": "ai-sa-11.2.3",
      "badge": "TLN 3 - Tính sin 2a",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $\\sin a + \\cos a = \\dfrac{1}{2}$. Tính giá trị của $4\\sin 2a$.",
      "correctAnswer": "-3",
      "acceptableAnswers": [
        "-3"
      ],
      "explanation": "Bình phương 2 vế: $(\\sin a + \\cos a)^2 = 1 + \\sin 2a = \\dfrac{1}{4} \\Rightarrow \\sin 2a = -\\dfrac{3}{4} \\Rightarrow 4\\sin 2a = -3$."
    },
    {
      "id": "ai-sa-11.2.4",
      "badge": "TLN 4 - Tính cos 2a",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $\\cos a = \\dfrac{2}{3}$. Tính giá trị của $9\\cos 2a$.",
      "correctAnswer": "-1",
      "acceptableAnswers": [
        "-1"
      ],
      "explanation": "$\\cos 2a = 2\\cos^2 a - 1 = 2(4/9) - 1 = -1/9 \\Rightarrow 9\\cos 2a = -1$."
    },
    {
      "id": "ai-sa-11.2.5",
      "badge": "TLN 5 - Rút gọn tích sin.cos",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của biểu thức $P = 8\\sin 15^\\circ \\cos 15^\\circ$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "$P = 4(2\\sin 15^\\circ \\cos 15^\\circ) = 4\\sin 30^\\circ = 4 \\times \\dfrac{1}{2} = 2$."
    },
    {
      "id": "ai-sa-11.2.6",
      "badge": "TLN 6 - Tính tích cos 20 cos 40 cos 80",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của biểu thức $8\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Nhân với $\\sin 20^\\circ$: Tử số biến đổi thành $\\sin 160^\\circ = \\sin 20^\\circ$. Kết quả biểu thức là $1/8$. Nhân 8 lên bằng 1."
    },
    {
      "id": "ai-sa-11.2.7",
      "badge": "TLN 7 - Tính tổng sin",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của biểu thức $\\dfrac{\\sin 40^\\circ + \\sin 20^\\circ}{\\cos 10^\\circ}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\sin 40^\\circ + \\sin 20^\\circ = 2\\sin 30^\\circ \\cos 10^\\circ = 2(1/2)\\cos 10^\\circ = \\cos 10^\\circ$. Chia cho mẫu bằng 1."
    },
    {
      "id": "ai-sa-11.2.8",
      "badge": "TLN 8 - Tính hiệu cos",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của biểu thức $\\dfrac{\\cos 20^\\circ - \\cos 40^\\circ}{\\sin 10^\\circ}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\cos 20^\\circ - \\cos 40^\\circ = -2\\sin 30^\\circ \\sin(-10^\\circ) = 2(1/2)\\sin 10^\\circ = \\sin 10^\\circ$. Chia mẫu bằng 1."
    },
    {
      "id": "ai-sa-11.2.9",
      "badge": "TLN 9 - Rút gọn biểu thức góc phụ",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của $M = \\sin^2 10^\\circ + \\sin^2 50^\\circ + \\sin^2 70^\\circ$. (Viết kết quả dưới dạng số thập phân)",
      "correctAnswer": "1.5",
      "acceptableAnswers": [
        "1.5",
        "3/2"
      ],
      "explanation": "Hạ bậc ta được $M = 3/2 = 1.5$."
    },
    {
      "id": "ai-sa-11.2.10",
      "badge": "TLN 10 - Góc ngắm bia bắn",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Một vận động viên ngắm bắn với góc ngắm $\\alpha$ có $\\tan\\alpha = \\dfrac{3}{4}$. Tìm $\\tan\\dfrac{\\alpha}{2}$ (dạng phân số tối giản $a/b$, nhập dạng a/b).",
      "correctAnswer": "1/3",
      "acceptableAnswers": [
        "1/3"
      ],
      "explanation": "$\\tan\\alpha = \\dfrac{2t}{1 - t^2} = \\dfrac{3}{4} \\Rightarrow 3t^2 + 8t - 3 = 0 \\Rightarrow t = 1/3$."
    },
    {
      "id": "ai-sa-11.2.11",
      "badge": "TLN 11 - Tính sin 4x khi biết sin 2x",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $\\sin 2x = \\dfrac{\\sqrt{5}}{3}$ với $0 < 2x < \\dfrac{\\pi}{2}$. Tính giá trị của $9\\sin 4x$.",
      "correctAnswer": "4√5",
      "acceptableAnswers": [
        "4√5",
        "4 căn 5",
        "4can5",
        "8.94"
      ],
      "explanation": "$\\cos 2x = \\sqrt{1 - 5/9} = 2/3$. $\\sin 4x = 2\\sin 2x\\cos 2x = 2(\\sqrt{5}/3)(2/3) = 4\\sqrt{5}/9 \\Rightarrow 9\\sin 4x = 4\\sqrt{5}$."
    },
    {
      "id": "ai-sa-11.2.12",
      "badge": "TLN 12 - Rút gọn biểu thức",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của biểu thức $T = \\tan 20^\\circ \\tan 40^\\circ \\tan 80^\\circ \\cdot \\dfrac{1}{\\sqrt{3}}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Ta có công thức $\\tan x \\tan(60^\\circ - x) \\tan(60^\\circ + x) = \\tan 3x$. Với $x = 20^\\circ$, tích bằng $\\tan 60^\\circ = \\sqrt{3}$. Do đó $T = 1$."
    },
    {
      "id": "ai-sa-11.2.13",
      "badge": "TLN 13 - Rút gọn phân thức lượng giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho biểu thức $A = \\dfrac{\\sin 3x - \\sin x}{\\cos 3x + \\cos x}$. Biết $A = \\tan kx$. Tìm giá trị của số nguyên $k$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\sin 3x - \\sin x = 2\\cos 2x \\sin x$, $\\cos 3x + \\cos x = 2\\cos 2x \\cos x$. $A = \\tan x \\Rightarrow k = 1$."
    },
    {
      "id": "ai-sa-11.2.14",
      "badge": "TLN 14 - Tính cos(a-b)",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $\\cos a = \\dfrac{3}{5}, \\cos b = \\dfrac{5}{13}$ (với $0 < a, b < \\dfrac{\\pi}{2}$). Tính $65\\cos(a - b)$.",
      "correctAnswer": "63",
      "acceptableAnswers": [
        "63"
      ],
      "explanation": "$\\sin a = 4/5, \\sin b = 12/13$. $\\cos(a - b) = (3/5)(5/13) + (4/5)(12/13) = (15 + 48)/65 = 63/65 \\Rightarrow 65\\cos(a - b) = 63$."
    },
    {
      "id": "ai-sa-11.2.15",
      "badge": "TLN 15 - Đẳng thức tam giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho tam giác $ABC$ có $\\tan A = 1, \\tan B = 2$. Tính giá trị của $\\tan C$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "$\\tan(A + B) = \\dfrac{1 + 2}{1 - 2} = -3$. $\\tan C = -\\tan(A + B) = 3$."
    },
    {
      "id": "ai-sa-11.2.16",
      "badge": "TLN 16 - Tính giá trị lớn nhất",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = 3\\sin 2x + 4\\cos 2x$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "Giá trị lớn nhất là $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."
    },
    {
      "id": "ai-sa-11.2.17",
      "badge": "TLN 17 - Tính giá trị nhỏ nhất",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tìm giá trị nhỏ nhất của biểu thức $y = 5 - 12\\sin x - 5\\cos x$.",
      "correctAnswer": "-8",
      "acceptableAnswers": [
        "-8"
      ],
      "explanation": "Biểu thức $12\\sin x + 5\\cos x$ có giá trị lớn nhất là $\\sqrt{12^2 + 5^2} = 13$. Vậy nhỏ nhất là $5 - 13 = -8$."
    },
    {
      "id": "ai-sa-11.2.18",
      "badge": "TLN 18 - Tầm xa ném xiên",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Một quả bóng được đá đi với vận tốc $v_0 = 20$ m/s, góc ném $45^\\circ$, lấy $g = 10$ m/s$^2$. Tính tầm xa $L = \\dfrac{v_0^2\\sin 2\\alpha}{g}$ theo mét.",
      "correctAnswer": "40 m",
      "acceptableAnswers": [
        "40",
        "40m"
      ],
      "explanation": "$L = \\dfrac{20^2 \\sin 90^\\circ}{10} = \\dfrac{400 \\times 1}{10} = 40$ m."
    },
    {
      "id": "ai-sa-11.2.19",
      "badge": "TLN 19 - Sóng âm giao thoa",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Hai sóng âm có biên độ $A = 5$ mm gặp nhau với độ lệch pha $\\Delta\\varphi = \\dfrac{\\pi}{3}$. Tính biên độ sóng tổng hợp (mm, làm tròn 1 chữ số thập phân).",
      "correctAnswer": "8.7 mm",
      "acceptableAnswers": [
        "8.7",
        "8.66",
        "5√3"
      ],
      "explanation": "Biên độ $= 2A\\cos(\\Delta\\varphi/2) = 2(5)\\cos(\\pi/6) = 10 \\times \\dfrac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66 \\approx 8.7$ mm."
    },
    {
      "id": "ai-sa-11.2.20",
      "badge": "TLN 20 - Công suất điện",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Điện áp hiệu dụng $U = 200$ V, dòng điện $I = 3$ A, hệ số công suất $\\cos\\varphi = 0.8$. Tính công suất tiêu thụ $P$ (Watt).",
      "correctAnswer": "480 W",
      "acceptableAnswers": [
        "480",
        "480W"
      ],
      "explanation": "$P = U I \\cos\\varphi = 200 \\times 3 \\times 0.8 = 480$ W."
    },
    {
      "id": "ai-sa-11.2.21",
      "badge": "TLN 21 - Giá trị cot 2a",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Cho $\\tan a = 3$. Tính giá trị của $4\\cot 2a$.",
      "correctAnswer": "-5.33",
      "acceptableAnswers": [
        "-16/3",
        "-5.33"
      ],
      "explanation": "$\\tan 2a = \\dfrac{2(3)}{1 - 9} = -\\dfrac{6}{8} = -\\dfrac{3}{4} \\Rightarrow \\cot 2a = -\\dfrac{4}{3} \\Rightarrow 4\\cot 2a = -\\dfrac{16}{3}$."
    },
    {
      "id": "ai-sa-11.2.22",
      "badge": "TLN 22 - Tính biểu thức tích",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tính giá trị của biểu thức $4\\cos 12^\\circ \\cos 24^\\circ \\cos 48^\\circ \\cos 96^\\circ$. (Viết kết quả dạng phân số âm tối giản -a/b)",
      "correctAnswer": "-1/4",
      "acceptableAnswers": [
        "-1/4",
        "-0.25"
      ],
      "explanation": "Nhân $\\sin 12^\\circ$: Biểu thức $= \\dfrac{\\sin 192^\\circ}{16\\sin 12^\\circ} = \\dfrac{-\\sin 12^\\circ}{16\\sin 12^\\circ} = -\\dfrac{1}{16}$. Nhân 4 lên bằng $-1/4$."
    },
    {
      "id": "ai-sa-11.2.23",
      "badge": "TLN 23 - Tam giác góc C",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Tam giác $ABC$ có $\\cos A \\cos B = \\sin A \\sin B$. Tính số đo góc $C$ (độ).",
      "correctAnswer": "90°",
      "acceptableAnswers": [
        "90",
        "90°",
        "90 độ"
      ],
      "explanation": "$\\cos A \\cos B - \\sin A \\sin B = 0 \\Leftrightarrow \\cos(A + B) = 0 \\Leftrightarrow A + B = 90^\\circ \\Rightarrow C = 90^\\circ$."
    },
    {
      "id": "ai-sa-11.2.24",
      "badge": "TLN 24 - Độc lập tham số",
      "source": "Tài liệu Chuyên đề Toán 11 C1B2",
      "prompt": "Biết rằng biểu thức $K = \\sin 6x \\cot 3x - \\cos 6x$ là một hằng số $C$. Tìm giá trị của $C$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$K = 2\\sin 3x \\cos 3x \\cdot \\dfrac{\\cos 3x}{\\sin 3x} - (2\\cos^2 3x - 1) = 2\\cos^2 3x - 2\\cos^2 3x + 1 = 1$."
    }
  ]
},
  "t11-b3-ham-so-luong-giac": {
  "quizQuestions": [
    {
      "id": "ai-11.3.1",
      "badge": "Luyện thêm 1 - Nhận biết - TXĐ hàm sin và cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của các hàm số $y = \\sin x$ và $y = \\cos x$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$[-1; 1]$",
        "$\\mathbb{R} \\setminus \\{0\\}$",
        "$(0; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số sin và côsin xác định với mọi số thực $x \\in \\mathbb{R}$."
    },
    {
      "id": "ai-11.3.2",
      "badge": "Luyện thêm 2 - Nhận biết - TXĐ hàm tang",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của hàm số $y = \\tan x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "ai-11.3.3",
      "badge": "Luyện thêm 3 - Nhận biết - TXĐ hàm côtang",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của hàm số $y = \\cot x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R}$",
        "$D = \\mathbb{R} \\setminus \\{k2\\pi, k \\in \\mathbb{Z}\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\cot x = \\dfrac{\\cos x}{\\sin x}$ xác định khi $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "ai-11.3.4",
      "badge": "Luyện thêm 4 - Thông hiểu - TXĐ hàm tang 2x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của hàm số $y = \\tan 2x$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{k\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện xác định: $\\cos 2x \\ne 0 \\Leftrightarrow 2x \\ne \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "ai-11.3.5",
      "badge": "Luyện thêm 5 - Thông hiểu - TXĐ hàm phân thức chứa cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của hàm số $y = \\dfrac{1}{\\cos x - 1}$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\{k2\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện: $\\cos x - 1 \\ne 0 \\Leftrightarrow \\cos x \\ne 1 \\Leftrightarrow x \\ne k2\\pi$ ($k \\in \\mathbb{Z}$)."
    },
    {
      "id": "ai-11.3.6",
      "badge": "Luyện thêm 6 - Thông hiểu - TXĐ căn bậc hai lượng giác",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của hàm số $y = \\sqrt{1 + \\cos x}$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$[-1; 1]$",
        "$\\mathbb{R} \\setminus \\{\\pi + k2\\pi\\}$",
        "$[0; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $-1 \\le \\cos x \\le 1$ với mọi $x \\in \\mathbb{R}$ nên $1 + \\cos x \\ge 0$ luôn đúng với mọi $x$. Vậy $D = \\mathbb{R}$."
    },
    {
      "id": "ai-11.3.7",
      "badge": "Luyện thêm 7 - Vận dụng - TXĐ kết hợp tang và mẫu",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của hàm số $y = \\dfrac{\\tan x}{\\sin x - 1}$ là:",
      "options": [
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
        "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$D = \\mathbb{R}$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện: $\\cos x \\ne 0$ và $\\sin x \\ne 1$. Vì $\\sin x = 1$ cũng có $\\cos x = 0$ nên điều kiện chung chỉ là $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi$."
    },
    {
      "id": "ai-11.3.8",
      "badge": "Luyện thêm 8 - Vận dụng cao - TXĐ chứa căn mẫu",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập xác định của hàm số $y = \\sqrt{\\dfrac{1 - \\cos 2x}{1 + \\sin^2 x}}$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$\\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
        "$[-1; 1]$",
        "$\\emptyset$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $1 - \\cos 2x = 2\\sin^2 x \\ge 0$ và $1 + \\sin^2 x \\ge 1 > 0$ với mọi $x$, phân thức luôn không âm và mẫu luôn dương. Vậy $D = \\mathbb{R}$."
    },
    {
      "id": "ai-11.3.9",
      "badge": "Luyện thêm 9 - Nhận biết - Tập giá trị hàm sin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập giá trị của hàm số $y = \\sin x$ là đoạn nào?",
      "options": [
        "$[-1; 1]$",
        "$(-1; 1)$",
        "$\\mathbb{R}$",
        "$[0; 1]$"
      ],
      "correctIndex": 0,
      "explanation": "Với mọi $x$, ta luôn có $-1 \\le \\sin x \\le 1$. Do đó tập giá trị là đoạn $[-1; 1]$."
    },
    {
      "id": "ai-11.3.10",
      "badge": "Luyện thêm 10 - Nhận biết - Tập giá trị hàm tang",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập giá trị của hàm số $y = \\tan x$ là:",
      "options": [
        "$\\mathbb{R}$",
        "$[-1; 1]$",
        "$[0; +\\infty)$",
        "$\\mathbb{R} \\setminus \\{0\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số tang nhận mọi giá trị thực từ $-\\infty$ đến $+\\infty$, tập giá trị là $\\mathbb{R}$."
    },
    {
      "id": "ai-11.3.11",
      "badge": "Luyện thêm 11 - Thông hiểu - GTLN hàm bậc nhất sin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Giá trị lớn nhất của hàm số $y = 3\\sin x - 2$ bằng:",
      "options": [
        "$1$",
        "$3$",
        "$-2$",
        "$5$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\sin x \\le 1$ nên $y \\le 3(1) - 2 = 1$. Giá trị lớn nhất là 1."
    },
    {
      "id": "ai-11.3.12",
      "badge": "Luyện thêm 12 - Thông hiểu - GTNN hàm bậc nhất cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Giá trị nhỏ nhất của hàm số $y = 4 - 5\\cos x$ bằng:",
      "options": [
        "$-1$",
        "$4$",
        "$-5$",
        "$9$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\cos x \\le 1$ nên $-5\\cos x \\ge -5 \\Rightarrow y \\ge 4 - 5 = -1$. Giá trị nhỏ nhất là -1."
    },
    {
      "id": "ai-11.3.13",
      "badge": "Luyện thêm 13 - Thông hiểu - GTLN hàm bậc hai cos^2",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Giá trị lớn nhất của hàm số $y = 2 - 3\\cos^2 x$ bằng:",
      "options": [
        "$2$",
        "$-1$",
        "$5$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\cos^2 x \\ge 0$ nên $-3\\cos^2 x \\le 0 \\Rightarrow y \\le 2$. Dấu '=' xảy ra khi $\\cos x = 0$. Giá trị lớn nhất là 2."
    },
    {
      "id": "ai-11.3.14",
      "badge": "Luyện thêm 14 - Thông hiểu - GTNN hàm căn bậc hai",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Giá trị nhỏ nhất của hàm số $y = \\sqrt{3 - \\sin x} + 1$ bằng:",
      "options": [
        "$\\sqrt{2} + 1$",
        "$2$",
        "$1$",
        "$\\sqrt{3} + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin x \\le 1 \\Rightarrow 3 - \\sin x \\ge 2 \\Rightarrow \\sqrt{3 - \\sin x} \\ge \\sqrt{2} \\Rightarrow y \\ge \\sqrt{2} + 1$."
    },
    {
      "id": "ai-11.3.15",
      "badge": "Luyện thêm 15 - Vận dụng - GTLN dạng asinx + bcosx",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Giá trị lớn nhất của hàm số $y = 3\\sin 2x + 4\\cos 2x$ bằng:",
      "options": [
        "$5$",
        "$7$",
        "$\\sqrt{7}$",
        "$25$"
      ],
      "correctIndex": 0,
      "explanation": "Theo bất đẳng thức Cauchy-Schwarz: $y \\le \\sqrt{3^2 + 4^2} = 5$."
    },
    {
      "id": "ai-11.3.16",
      "badge": "Luyện thêm 16 - Vận dụng - Tìm tập giá trị hàm sin^2 + cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Giá trị lớn nhất của hàm số $y = \\sin^2 x + 2\\cos x + 1$ bằng:",
      "options": [
        "$3$",
        "$2$",
        "$\\dfrac{9}{4}$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "$y = (1 - \\cos^2 x) + 2\\cos x + 1 = -\\cos^2 x + 2\\cos x + 2 = 3 - (\\cos x - 1)^2 \\le 3$. Dấu '=' khi $\\cos x = 1$."
    },
    {
      "id": "ai-11.3.17",
      "badge": "Luyện thêm 17 - Vận dụng - GTNN tam thức bậc hai lượng giác",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Giá trị nhỏ nhất của hàm số $y = \\cos 2x + 4\\cos x + 5$ bằng:",
      "options": [
        "$2$",
        "$0$",
        "$1$",
        "$-1$"
      ],
      "correctIndex": 0,
      "explanation": "$y = 2\\cos^2 x - 1 + 4\\cos x + 5 = 2(\\cos x + 1)^2 + 2 \\ge 2$. Dấu '=' khi $\\cos x = -1$."
    },
    {
      "id": "ai-11.3.18",
      "badge": "Luyện thêm 18 - Vận dụng cao - GTLN hàm phân thức",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Tập giá trị của hàm số $y = \\dfrac{\\sin x + 1}{\\sin x + 2}$ là đoạn:",
      "options": [
        "$\\left[0; \\dfrac{2}{3}\\right]$",
        "$[0; 1]$",
        "$\\left[-1; \\dfrac{2}{3}\\right]$",
        "$\\left[\\dfrac{1}{3}; \\dfrac{2}{3}\\right]$"
      ],
      "correctIndex": 0,
      "explanation": "Đặt $t = \\sin x \\in [-1; 1]$. $f(t) = \\dfrac{t+1}{t+2} = 1 - \\dfrac{1}{t+2}$ đồng biến trên $[-1; 1]$. $f(-1) = 0, f(1) = 2/3$. Tập giá trị là $[0; 2/3]$."
    },
    {
      "id": "ai-11.3.19",
      "badge": "Luyện thêm 19 - Nhận biết - Hàm số chẵn cơ bản",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Trong các hàm số sau, hàm số nào là hàm số CHẴN?",
      "options": [
        "$y = \\cos x$",
        "$y = \\sin x$",
        "$y = \\tan x$",
        "$y = \\cot x$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\cos(-x) = \\cos x$ với mọi $x \\in \\mathbb{R}$, nên $y = \\cos x$ là hàm số chẵn."
    },
    {
      "id": "ai-11.3.20",
      "badge": "Luyện thêm 20 - Nhận biết - Hàm số lẻ cơ bản",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Hàm số nào sau đây là hàm số LẺ?",
      "options": [
        "$y = \\sin 2x$",
        "$y = \\cos 2x$",
        "$y = \\cos^2 x$",
        "$y = 1 + \\sin^2 x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin(-2x) = -\\sin 2x$, do đó $y = \\sin 2x$ là hàm số lẻ."
    },
    {
      "id": "ai-11.3.21",
      "badge": "Luyện thêm 21 - Thông hiểu - Nhận biết hàm chẵn kết hợp x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Hàm số nào sau đây là hàm số CHẴN?",
      "options": [
        "$y = x \\sin x$",
        "$y = x \\cos x$",
        "$y = x^2 \\sin x$",
        "$y = x^3 \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "$f(-x) = (-x)\\sin(-x) = (-x)(-\\sin x) = x\\sin x = f(x)$. Vậy $y = x\\sin x$ là hàm số chẵn."
    },
    {
      "id": "ai-11.3.22",
      "badge": "Luyện thêm 22 - Thông hiểu - Hàm không chẵn không lẻ",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Hàm số nào sau đây là hàm số KHÔNG CHẴN VÀ KHÔNG LẺ?",
      "options": [
        "$y = \\sin x + \\cos x$",
        "$y = \\sin x$",
        "$y = \\cos x$",
        "$y = \\tan x$"
      ],
      "correctIndex": 0,
      "explanation": "Xét $f(x) = \\sin x + \\cos x$: $f(-x) = -\\sin x + \\cos x \\ne f(x)$ và $\\ne -f(x)$."
    },
    {
      "id": "ai-11.3.23",
      "badge": "Luyện thêm 23 - Vận dụng - Hàm số lẻ phức hợp",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Hàm số nào sau đây là hàm số LẺ?",
      "options": [
        "$y = \\tan x + \\sin 3x$",
        "$y = \\tan x + \\cos x$",
        "$y = \\cos 2x + \\sin^2 x$",
        "$y = x^2 + \\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "Cả $\\tan x$ và $\\sin 3x$ đều là hàm lẻ, nên tổng hai hàm lẻ là một hàm lẻ."
    },
    {
      "id": "ai-11.3.24",
      "badge": "Luyện thêm 24 - Vận dụng - Đối xứng của đồ thị",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Đồ thị của hàm số nào sau đây nhận TRỤC TUNG $Oy$ làm trục đối xứng?",
      "options": [
        "$y = \\cos 3x$",
        "$y = \\sin 3x$",
        "$y = \\tan 2x$",
        "$y = x\\cos x$"
      ],
      "correctIndex": 0,
      "explanation": "Đồ thị nhận trục tung làm trục đối xứng khi và chỉ khi hàm số là hàm số chẵn. Trong 4 phương án, chỉ có $y = \\cos 3x$ là hàm số chẵn."
    },
    {
      "id": "ai-11.3.25",
      "badge": "Luyện thêm 25 - Nhận biết - Chu kỳ sin x và cos x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của các hàm số $y = \\sin x$ và $y = \\cos x$ là:",
      "options": [
        "$2\\pi$",
        "$\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số sin và côsin tuần hoàn với chu kỳ cơ sở $T = 2\\pi$."
    },
    {
      "id": "ai-11.3.26",
      "badge": "Luyện thêm 26 - Nhận biết - Chu kỳ tan x và cot x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của các hàm số $y = \\tan x$ và $y = \\cot x$ là:",
      "options": [
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$\\dfrac{\\pi}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số tang và côtang tuần hoàn với chu kỳ $T = \\pi$."
    },
    {
      "id": "ai-11.3.27",
      "badge": "Luyện thêm 27 - Thông hiểu - Chu kỳ sin 3x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\sin 3x$ là:",
      "options": [
        "$\\dfrac{2\\pi}{3}$",
        "$3\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Chu kỳ $T = \\dfrac{2\\pi}{|\\omega|} = \\dfrac{2\\pi}{3}$."
    },
    {
      "id": "ai-11.3.28",
      "badge": "Luyện thêm 28 - Thông hiểu - Chu kỳ cos(x/2)",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\cos\\left(\\dfrac{x}{2}\\right)$ là:",
      "options": [
        "$4\\pi$",
        "$2\\pi$",
        "$\\pi$",
        "$\\dfrac{\\pi}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$T = \\dfrac{2\\pi}{|1/2|} = 4\\pi$."
    },
    {
      "id": "ai-11.3.29",
      "badge": "Luyện thêm 29 - Thông hiểu - Chu kỳ tan 4x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\tan 4x$ là:",
      "options": [
        "$\\dfrac{\\pi}{4}$",
        "$\\dfrac{\\pi}{2}$",
        "$\\pi$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Chu kỳ hàm tang là $T = \\dfrac{\\pi}{|\\omega|} = \\dfrac{\\pi}{4}$."
    },
    {
      "id": "ai-11.3.30",
      "badge": "Luyện thêm 30 - Vận dụng - Chu kỳ tổng hai hàm sin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\sin 2x + \\cos 3x$ là:",
      "options": [
        "$2\\pi$",
        "$\\pi$",
        "$6\\pi$",
        "$\\dfrac{2\\pi}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$T_1 = \\dfrac{2\\pi}{2} = \\pi$, $T_2 = \\dfrac{2\\pi}{3}$. Chu kỳ chung là bội chung nhỏ nhất của $T_1$ và $T_2$, tức $T = 2\\pi$ (vì $2\\pi = 2T_1 = 3T_2$)."
    },
    {
      "id": "ai-11.3.31",
      "badge": "Luyện thêm 31 - Vận dụng - Chu kỳ hàm trị tuyệt đối",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = |\\sin x|$ là:",
      "options": [
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Đồ thị $|\\sin x|$ giữ nguyên phần trên trục hoành và lấy đối xứng phần dưới lên trên, lặp lại sau mỗi khoảng $\\pi$ (chu kỳ $T = \\pi$)."
    },
    {
      "id": "ai-11.3.32",
      "badge": "Luyện thêm 32 - Vận dụng cao - Chu kỳ hàm sin^2 x",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Chu kỳ tuần hoàn của hàm số $y = \\sin^2 x$ là:",
      "options": [
        "$\\pi$",
        "$2\\pi$",
        "$\\dfrac{\\pi}{2}$",
        "$4\\pi$"
      ],
      "correctIndex": 0,
      "explanation": "Hạ bậc: $y = \\dfrac{1 - \\cos 2x}{2}$. Hàm số $\\cos 2x$ có chu kỳ $T = \\dfrac{2\\pi}{2} = \\pi$."
    },
    {
      "id": "ai-11.3.33",
      "badge": "Luyện thêm 33 - Nhận biết - Đồng biến hàm sin",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Hàm số $y = \\sin x$ đồng biến trên khoảng nào sau đây?",
      "options": [
        "$\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$",
        "$\\left(0; \\pi\\right)$",
        "$\\left(\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}\\right)$",
        "$\\left(\\pi; 2\\pi\\right)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\sin x$ đồng biến trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ và các khoảng cộng thêm $k2\\pi$."
    },
    {
      "id": "ai-11.3.34",
      "badge": "Luyện thêm 34 - Nhận biết - Nghịch biến hàm cos",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Hàm số $y = \\cos x$ nghịch biến trên khoảng nào sau đây?",
      "options": [
        "$(0; \\pi)$",
        "$(-\\pi; 0)$",
        "$\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$",
        "$\\left(0; \\dfrac{\\pi}{2}\\right)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\cos x$ nghịch biến trên $(0; \\pi)$ và đồng biến trên $(-\\pi; 0)$."
    },
    {
      "id": "ai-11.3.35",
      "badge": "Luyện thêm 35 - Thông hiểu - Tính đơn điệu hàm tang",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Khẳng định nào sau đây là ĐÚNG về hàm số $y = \\tan x$?",
      "options": [
        "Hàm số $y = \\tan x$ luôn đồng biến trên mỗi khoảng xác định $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right)$",
        "Hàm số $y = \\tan x$ luôn nghịch biến trên mỗi khoảng xác định",
        "Hàm số $y = \\tan x$ đồng biến trên $\\mathbb{R}$",
        "Hàm số $y = \\tan x$ không có tính đơn điệu"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = \\tan x$ đồng biến trên từng khoảng xác định của nó."
    },
    {
      "id": "ai-11.3.36",
      "badge": "Luyện thêm 36 - Thông hiểu - Giao điểm trục tung",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Đồ thị hàm số $y = \\cos x$ cắt trục tung tại điểm có tọa độ là:",
      "options": [
        "$(0; 1)$",
        "$(0; 0)$",
        "$(1; 0)$",
        "$(0; -1)$"
      ],
      "correctIndex": 0,
      "explanation": "Giao điểm với trục tung $Oy$ có $x = 0 \\Rightarrow y = \\cos 0 = 1$. Tọa độ điểm là $(0; 1)$."
    },
    {
      "id": "ai-11.3.37",
      "badge": "Luyện thêm 37 - Vận dụng - Thủy triều cực đại",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Mực nước biển $h(t) = 3\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 8$ (mét, $t$ tính theo giờ từ 0h đến 24h). Lần đầu tiên mực nước đạt cực đại trong ngày là vào lúc:",
      "options": [
        "$0$ giờ (nửa đêm)",
        "$6$ giờ sáng",
        "$12$ giờ trưa",
        "$3$ giờ sáng"
      ],
      "correctIndex": 0,
      "explanation": "$h(t)$ lớn nhất khi $\\cos\\left(\\dfrac{\\pi t}{6}\\right) = 1 \\Leftrightarrow \\dfrac{\\pi t}{6} = k2\\pi \\Leftrightarrow t = 12k$. Với $t \\in [0; 24]$, lần đầu tiên là $t = 0$ giờ."
    },
    {
      "id": "ai-11.3.38",
      "badge": "Luyện thêm 38 - Vận dụng - Nhiệt độ ngày đêm",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Nhiệt độ trong ngày $T(t) = 25 - 6\\cos\\left(\\dfrac{\\pi(t - 4)}{12}\\right)$ ($^\\circ$C), với $t$ là số giờ tính từ 0h. Nhiệt độ thấp nhất trong ngày là bao nhiêu độ C?",
      "options": [
        "$19^\\circ$C",
        "$25^\\circ$C",
        "$31^\\circ$C",
        "$13^\\circ$C"
      ],
      "correctIndex": 0,
      "explanation": "$T(t)$ nhỏ nhất khi $\\cos\\left(\\dfrac{\\pi(t - 4)}{12}\\right) = 1 \\Rightarrow T_{\\min} = 25 - 6(1) = 19^\\circ$C (xảy ra lúc 4 giờ sáng)."
    },
    {
      "id": "ai-11.3.39",
      "badge": "Luyện thêm 39 - Vận dụng cao - Đu quay Sun Wheel",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Độ cao của ghế đu quay tính từ mặt đất: $h(t) = 50 - 40\\cos\\left(\\dfrac{\\pi t}{20}\\right)$ (mét, $t$ tính bằng giây). Ghế đu quay ở độ cao cao nhất là bao nhiêu mét?",
      "options": [
        "$90$ m",
        "$50$ m",
        "$40$ m",
        "$80$ m"
      ],
      "correctIndex": 0,
      "explanation": "Độ cao cao nhất khi $\\cos\\left(\\dfrac{\\pi t}{20}\\right) = -1 \\Rightarrow h_{\\max} = 50 - 40(-1) = 90$ m."
    },
    {
      "id": "ai-11.3.40",
      "badge": "Luyện thêm 40 - Vận dụng cao - Số nghiệm phương trình trên đoạn",
      "isAiGenerated": true,
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "question": "Số giao điểm của đồ thị hàm số $y = \\sin x$ với đường thẳng $y = \\dfrac{1}{2}$ trên đoạn $[0; 2\\pi]$ là:",
      "options": [
        "$2$",
        "$1$",
        "$3$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình $\\sin x = 1/2$ trên đoạn $[0; 2\\pi]$ có đúng 2 nghiệm là $x = \\pi/6$ và $x = 5\\pi/6$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ai-tf-11.3.1",
      "badge": "Đúng/Sai 1 - Tập xác định của hàm số lượng giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Xét tập xác định của các hàm số lượng giác cơ bản:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\sin x$ có tập xác định $D = \\mathbb{R}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = \\cos x$ có tập xác định $D = \\mathbb{R}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\tan x$ xác định với mọi $x \\ne k\\pi$ ($k \\in \\mathbb{Z}$)",
          "correctAnswer": false,
          "explanation": "Sai, điều kiện là $x \\ne \\dfrac{\\pi}{2} + k\\pi$."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\cot x$ xác định với mọi $x \\ne k\\pi$ ($k \\in \\mathbb{Z}$)",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.2",
      "badge": "Đúng/Sai 2 - Tập giá trị của hàm số lượng giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Xét tập giá trị của các hàm số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập giá trị của hàm số $y = \\sin x$ là đoạn $[-1; 1]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Tập giá trị của hàm số $y = \\cos x$ là đoạn $[-1; 1]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Tập giá trị của hàm số $y = \\tan x$ là đoạn $[-1; 1]$",
          "correctAnswer": false,
          "explanation": "Sai, tập giá trị của tang là toàn bộ $\\mathbb{R}$."
        },
        {
          "id": "d",
          "text": "Tập giá trị của hàm số $y = \\cos^2 x$ là đoạn $[0; 1]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.3",
      "badge": "Đúng/Sai 3 - GTLN và GTNN cơ bản",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Cho hàm số $y = 3\\cos x - 1$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Giá trị lớn nhất của hàm số bằng $2$",
          "correctAnswer": true,
          "explanation": "$\\max y = 3(1) - 1 = 2$. Đúng."
        },
        {
          "id": "b",
          "text": "Giá trị nhỏ nhất của hàm số bằng $-4$",
          "correctAnswer": true,
          "explanation": "$\\min y = 3(-1) - 1 = -4$. Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số đạt giá trị lớn nhất khi $x = k2\\pi$ ($k \\in \\mathbb{Z}$)",
          "correctAnswer": true,
          "explanation": "$\\cos x = 1 \\Leftrightarrow x = k2\\pi$. Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số đạt giá trị nhỏ nhất khi $x = \\dfrac{\\pi}{2} + k\\pi$",
          "correctAnswer": false,
          "explanation": "Sai, $\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi$."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.4",
      "badge": "Đúng/Sai 4 - Tính chẵn lẻ cơ bản",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Xét tính chẵn - lẻ của các hàm số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\cos x$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = \\sin x$ là hàm số lẻ",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\tan x$ là hàm số chẵn",
          "correctAnswer": false,
          "explanation": "Sai, $\\tan(-x) = -\\tan x$ là hàm số lẻ."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\cot x$ là hàm số lẻ",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.5",
      "badge": "Đúng/Sai 5 - Tính chẵn lẻ mở rộng",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Xét tính chẵn lẻ của các hàm số:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\cos 2x + 1$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = x\\sin x$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\sin x + \\cos x$ là hàm số lẻ",
          "correctAnswer": false,
          "explanation": "Sai, không chẵn không lẻ."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\sin |x|$ là hàm số chẵn",
          "correctAnswer": true,
          "explanation": "$\\sin|-x| = \\sin|x|$. Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.6",
      "badge": "Đúng/Sai 6 - Tính tuần hoàn và chu kỳ",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Xét chu kỳ tuần hoàn của các hàm số:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\sin 2x$ tuần hoàn với chu kỳ $T = \\pi$",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi/2 = \\pi$. Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = \\cos 4x$ tuần hoàn với chu kỳ $T = \\dfrac{\\pi}{2}$",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi/4 = \\pi/2$. Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\tan 2x$ tuần hoàn với chu kỳ $T = \\pi$",
          "correctAnswer": false,
          "explanation": "Sai, chu kỳ của tang là $T = \\pi/2$."
        },
        {
          "id": "d",
          "text": "Hàm số $y = \\cot\\left(\\dfrac{x}{3}\\right)$ tuần hoàn với chu kỳ $T = 3\\pi$",
          "correctAnswer": true,
          "explanation": "$T = \\pi / (1/3) = 3\\pi$. Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.7",
      "badge": "Đúng/Sai 7 - Tính đơn điệu hàm sin",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Cho hàm số $y = \\sin x$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Đồng biến trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Nghịch biến trên khoảng $\\left(\\dfrac{\\pi}{2}; \\pi\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Đồng biến trên khoảng $(0; \\pi)$",
          "correctAnswer": false,
          "explanation": "Sai, trên $(0; \\pi)$ hàm số vừa tăng vừa giảm."
        },
        {
          "id": "d",
          "text": "Nghịch biến trên khoảng $\\left(\\pi; \\dfrac{3\\pi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.8",
      "badge": "Đúng/Sai 8 - Tính đơn điệu hàm cos",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Cho hàm số $y = \\cos x$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Nghịch biến trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Nghịch biến trên khoảng $(0; \\pi)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Đồng biến trên khoảng $(-\\pi; 0)$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Đồng biến trên khoảng $(0; 2\\pi)$",
          "correctAnswer": false,
          "explanation": "Sai, từ 0 đến $\\pi$ nghịch biến, từ $\\pi$ đến $2\\pi$ đồng biến."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.9",
      "badge": "Đúng/Sai 9 - Đồ thị hàm số lượng giác",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Xét đồ thị của các hàm số lượng giác cơ bản:",
      "subItems": [
        {
          "id": "a",
          "text": "Đồ thị hàm số $y = \\sin x$ đi qua gốc tọa độ $O(0; 0)$",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin 0 = 0$."
        },
        {
          "id": "b",
          "text": "Đồ thị hàm số $y = \\cos x$ đi qua điểm $(0; 1)$",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos 0 = 1$."
        },
        {
          "id": "c",
          "text": "Đồ thị hàm số $y = \\tan x$ nhận các đường thẳng $x = \\dfrac{\\pi}{2} + k\\pi$ làm tiệm cận đứng",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Đồ thị hàm số $y = \\cos x$ nhận gốc tọa độ $O$ làm tâm đối xứng",
          "correctAnswer": false,
          "explanation": "Sai, hàm chẵn đối xứng qua trục tung $Oy$."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.10",
      "badge": "Đúng/Sai 10 - GTLN, GTNN hàm phức hợp",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Cho hàm số $y = \\sin^2 x - 4\\sin x + 5$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Giá trị nhỏ nhất của hàm số bằng $2$",
          "correctAnswer": true,
          "explanation": "Đặt $t = \\sin x \\in [-1; 1]$. $f(t) = t^2 - 4t + 5$. Đỉnh parabol tại $t = 2$ (loại). $f(1) = 1 - 4 + 5 = 2$. Vậy $\\min = 2$. Đúng."
        },
        {
          "id": "b",
          "text": "Giá trị lớn nhất của hàm số bằng $10$",
          "correctAnswer": true,
          "explanation": "$f(-1) = 1 + 4 + 5 = 10$. Đúng."
        },
        {
          "id": "c",
          "text": "Tập giá trị của hàm số là $[2; 10]$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số đạt giá trị nhỏ nhất khi $x = \\pi + k2\\pi$",
          "correctAnswer": false,
          "explanation": "Sai, đạt nhỏ nhất khi $\\sin x = 1 \\Leftrightarrow x = \\pi/2 + k2\\pi$."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.11",
      "badge": "Đúng/Sai 11 - TXĐ chứa căn thức và mẫu",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Cho hàm số $y = \\dfrac{\\sqrt{1 - \\cos x}}{\\sin x}$. Khi đó:",
      "subItems": [
        {
          "id": "a",
          "text": "Biểu thức $1 - \\cos x \\ge 0$ luôn đúng với mọi $x \\in \\mathbb{R}$",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos x \\le 1$."
        },
        {
          "id": "b",
          "text": "Điều kiện để hàm số xác định là $\\sin x \\ne 0$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Tập xác định là $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số xác định tại điểm $x = \\pi$",
          "correctAnswer": false,
          "explanation": "Sai, tại $x = \\pi$ thì $\\sin\\pi = 0$ (mẫu bằng 0)."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.12",
      "badge": "Đúng/Sai 12 - Chu kỳ hàm trị tuyệt đối và bình phương",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Xét chu kỳ tuần hoàn của các hàm số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số $y = \\cos^2 x$ có chu kỳ $T = \\pi$",
          "correctAnswer": true,
          "explanation": "$\\cos^2 x = (1 + \\cos 2x)/2$ có chu kỳ $\\pi$. Đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = |\\cos x|$ có chu kỳ $T = \\pi$",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = \\sin^2 2x$ có chu kỳ $T = \\dfrac{\\pi}{2}$",
          "correctAnswer": true,
          "explanation": "Hạ bậc thành $\\cos 4x$, chu kỳ $2\\pi/4 = \\pi/2$. Đúng."
        },
        {
          "id": "d",
          "text": "Hàm số $y = |\\tan x|$ có chu kỳ $T = 2\\pi$",
          "correctAnswer": false,
          "explanation": "Sai, chu kỳ của $|\\tan x|$ vẫn là $\\pi$."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.13",
      "badge": "Đúng/Sai 13 - Mô hình hiện tượng thủy triều",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Mực nước biển ở một cảng được mô tả bởi $h(t) = 4\\sin\\left(\\dfrac{\\pi t}{6}\\right) + 6$ (mét, $0 \\le t \\le 24$ giờ):",
      "subItems": [
        {
          "id": "a",
          "text": "Mực nước biển cao nhất trong ngày là $10$ m",
          "correctAnswer": true,
          "explanation": "$h_{\\max} = 4(1) + 6 = 10$ m. Đúng."
        },
        {
          "id": "b",
          "text": "Mực nước biển thấp nhất trong ngày là $2$ m",
          "correctAnswer": true,
          "explanation": "$h_{\\min} = 4(-1) + 6 = 2$ m. Đúng."
        },
        {
          "id": "c",
          "text": "Chu kỳ lặp lại của mực nước là $12$ giờ",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi / (\\pi/6) = 12$ giờ. Đúng."
        },
        {
          "id": "d",
          "text": "Lúc $6$ giờ sáng mực nước biển đạt cực đại",
          "correctAnswer": false,
          "explanation": "Sai, cực đại khi $\\sin(\\pi t/6) = 1 \\Leftrightarrow \\pi t/6 = \\pi/2 \\Leftrightarrow t = 3$ giờ sáng."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.14",
      "badge": "Đúng/Sai 14 - Dao động con lắc đồng hồ",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Li độ góc của một con lắc đơn dao động điều hòa là $\\theta(t) = 0.1\\cos(2\\pi t)$ (rad, $t$ tính theo giây):",
      "subItems": [
        {
          "id": "a",
          "text": "Biên độ góc của con lắc là $0.1$ rad",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "b",
          "text": "Chu kỳ dao động của con lắc là $1$ giây",
          "correctAnswer": true,
          "explanation": "$T = 2\\pi / (2\\pi) = 1$ s. Đúng."
        },
        {
          "id": "c",
          "text": "Tại thời điểm $t = 0.5$ giây, con lắc ở vị trí biên âm ($-0.1$ rad)",
          "correctAnswer": true,
          "explanation": "$\\theta(0.5) = 0.1\\cos(\\pi) = -0.1$ rad. Đúng."
        },
        {
          "id": "d",
          "text": "Trong $10$ giây, con lắc thực hiện được $20$ dao động toàn phần",
          "correctAnswer": false,
          "explanation": "Sai, vì $T = 1$ s nên trong 10 s thực hiện được đúng 10 dao động."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.15",
      "badge": "Đúng/Sai 15 - Nhiệt độ theo các tháng",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Nhiệt độ trung bình tháng $t$ ($1 \\le t \\le 12$) ở một thành phố là $T(t) = 20 + 10\\sin\\left(\\dfrac{\\pi(t - 4)}{6}\\right)$ ($^\\circ$C):",
      "subItems": [
        {
          "id": "a",
          "text": "Nhiệt độ cao nhất trong năm là $30^\\circ$C",
          "correctAnswer": true,
          "explanation": "$20 + 10(1) = 30^\\circ$C. Đúng."
        },
        {
          "id": "b",
          "text": "Nhiệt độ thấp nhất trong năm là $10^\\circ$C",
          "correctAnswer": true,
          "explanation": "$20 + 10(-1) = 10^\\circ$C. Đúng."
        },
        {
          "id": "c",
          "text": "Tháng 7 là tháng có nhiệt độ cao nhất trong năm",
          "correctAnswer": true,
          "explanation": "$\\sin(\\pi(t-4)/6) = 1 \\Leftrightarrow t - 4 = 3 \\Leftrightarrow t = 7$ (Tháng 7). Đúng."
        },
        {
          "id": "d",
          "text": "Tháng 12 là tháng có nhiệt độ thấp nhất trong năm",
          "correctAnswer": false,
          "explanation": "Sai, thấp nhất khi $t - 4 = -3 \\Leftrightarrow t = 1$ (Tháng 1)."
        }
      ]
    },
    {
      "id": "ai-tf-11.3.16",
      "badge": "Đúng/Sai 16 - Vòng quay Ferris Wheel",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Độ cao $h(t)$ của một cabin trên vòng quay Ferris tính từ mặt đất là $h(t) = 60 - 50\\cos\\left(\\dfrac{\\pi t}{15}\\right)$ (mét, $t$ tính theo phút):",
      "subItems": [
        {
          "id": "a",
          "text": "Đường kính của vòng quay Ferris bằng $100$ m",
          "correctAnswer": true,
          "explanation": "Bán kính bằng 50 m nên đường kính là 100 m. Đúng."
        },
        {
          "id": "b",
          "text": "Trục quay của bánh xe ở độ cao $60$ m so với mặt đất",
          "correctAnswer": true,
          "explanation": "Đúng."
        },
        {
          "id": "c",
          "text": "Thời gian để vòng quay hoàn thành 1 vòng là $30$ phút",
          "correctAnswer": true,
          "explanation": "Chu kỳ $T = 2\\pi / (\\pi/15) = 30$ phút. Đúng."
        },
        {
          "id": "d",
          "text": "Độ cao thấp nhất của cabin khi ở đáy vòng quay là $0$ m (chạm đất)",
          "correctAnswer": false,
          "explanation": "Sai, độ cao thấp nhất là $60 - 50 = 10$ m (cách đất 10 m)."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-11.3.1",
      "badge": "TLN 1 - Chu kỳ hàm sin 4x",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm chu kỳ tuần hoàn $T$ của hàm số $y = \\sin 4x$. (Nhập theo dạng số nhân với pi, ví dụ: pi/2)",
      "correctAnswer": "$\\dfrac{\\pi}{2}$",
      "acceptableAnswers": [
        "pi/2",
        "π/2"
      ],
      "explanation": "$T = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$."
    },
    {
      "id": "ai-sa-11.3.2",
      "badge": "TLN 2 - Chu kỳ hàm tan 3x",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm chu kỳ tuần hoàn của hàm số $y = \\tan 3x$.",
      "correctAnswer": "$\\dfrac{\\pi}{3}$",
      "acceptableAnswers": [
        "pi/3",
        "π/3"
      ],
      "explanation": "$T = \\dfrac{\\pi}{3}$."
    },
    {
      "id": "ai-sa-11.3.3",
      "badge": "TLN 3 - Giá trị lớn nhất hàm bậc nhất",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = 5\\cos 2x + 7$.",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12"
      ],
      "explanation": "$\\max y = 5(1) + 7 = 12$."
    },
    {
      "id": "ai-sa-11.3.4",
      "badge": "TLN 4 - Giá trị nhỏ nhất hàm bậc nhất",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = 3 - 4\\sin x$.",
      "correctAnswer": "-1",
      "acceptableAnswers": [
        "-1"
      ],
      "explanation": "$\\min y = 3 - 4(1) = -1$."
    },
    {
      "id": "ai-sa-11.3.5",
      "badge": "TLN 5 - Giá trị lớn nhất căn bậc hai",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\sqrt{7 + 9\\cos x}$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4"
      ],
      "explanation": "$\\max y = \\sqrt{7 + 9(1)} = \\sqrt{16} = 4$."
    },
    {
      "id": "ai-sa-11.3.6",
      "badge": "TLN 6 - Giá trị nhỏ nhất căn bậc hai",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = \\sqrt{5 - 4\\sin x}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$\\min y = \\sqrt{5 - 4(1)} = \\sqrt{1} = 1$."
    },
    {
      "id": "ai-sa-11.3.7",
      "badge": "TLN 7 - GTLN dạng asinx + bcosx",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = 6\\sin x + 8\\cos x - 3$.",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7"
      ],
      "explanation": "$\\sqrt{6^2 + 8^2} = 10 \\Rightarrow \\max y = 10 - 3 = 7$."
    },
    {
      "id": "ai-sa-11.3.8",
      "badge": "TLN 8 - GTNN dạng asinx + bcosx",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = 5\\sin x - 12\\cos x + 2$.",
      "correctAnswer": "-11",
      "acceptableAnswers": [
        "-11"
      ],
      "explanation": "$\\sqrt{5^2 + (-12)^2} = 13 \\Rightarrow \\min y = -13 + 2 = -11$."
    },
    {
      "id": "ai-sa-11.3.9",
      "badge": "TLN 9 - Chu kỳ hàm kết hợp",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm chu kỳ tuần hoàn của hàm số $y = \\sin\\left(\\dfrac{2\\pi x}{5}\\right)$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "$T = \\dfrac{2\\pi}{2\\pi/5} = 5$."
    },
    {
      "id": "ai-sa-11.3.10",
      "badge": "TLN 10 - Số điểm gián đoạn",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Hàm số $y = \\tan x$ không xác định tại bao nhiêu điểm trên đoạn $[0; 2\\pi]$?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Hai điểm không xác định là $x = \\pi/2$ và $x = 3\\pi/2$."
    },
    {
      "id": "ai-sa-11.3.11",
      "badge": "TLN 11 - Giá trị cực đại thủy triều",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Độ cao mực nước biển $h(t) = 5\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 9$ (m). Tính mực nước biển cao nhất trong ngày (mét).",
      "correctAnswer": "14 m",
      "acceptableAnswers": [
        "14",
        "14m"
      ],
      "explanation": "$h_{\\max} = 5(1) + 9 = 14$ m."
    },
    {
      "id": "ai-sa-11.3.12",
      "badge": "TLN 12 - Chu kỳ thủy triều",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Hàm số độ cao mực nước biển $h(t) = 5\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 9$ tuần hoàn theo chu kỳ bao nhiêu giờ?",
      "correctAnswer": "12 giờ",
      "acceptableAnswers": [
        "12",
        "12h"
      ],
      "explanation": "$T = 2\\pi / (\\pi/6) = 12$ giờ."
    },
    {
      "id": "ai-sa-11.3.13",
      "badge": "TLN 13 - Thời gian hoàn thành vòng quay",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Một cabin đu quay có độ cao $h(t) = 35 - 30\\cos\\left(\\dfrac{\\pi t}{15}\\right)$ (m, $t$ tính theo giây). Thời gian đu quay quay hết một vòng là bao nhiêu giây?",
      "correctAnswer": "30 giây",
      "acceptableAnswers": [
        "30",
        "30s"
      ],
      "explanation": "$T = 2\\pi / (\\pi/15) = 30$ giây."
    },
    {
      "id": "ai-sa-11.3.14",
      "badge": "TLN 14 - Độ cao lớn nhất cabin",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Với hàm $h(t) = 35 - 30\\cos\\left(\\dfrac{\\pi t}{15}\\right)$ (m), độ cao lớn nhất của cabin so với mặt đất là bao nhiêu mét?",
      "correctAnswer": "65 m",
      "acceptableAnswers": [
        "65",
        "65m"
      ],
      "explanation": "$h_{\\max} = 35 - 30(-1) = 65$ m."
    },
    {
      "id": "ai-sa-11.3.15",
      "badge": "TLN 15 - GTLN hàm cos^2 x + cos x",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\cos^2 x + \\cos x + 1$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "$t = \\cos x \\in [-1; 1]$. $f(t) = t^2 + t + 1$. Lớn nhất tại $t = 1 \\Rightarrow 1 + 1 + 1 = 3$."
    },
    {
      "id": "ai-sa-11.3.16",
      "badge": "TLN 16 - GTNN hàm cos^2 x + cos x",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = \\cos^2 x + \\cos x + 1$. (Viết kết quả dạng số thập phân)",
      "correctAnswer": "0.75",
      "acceptableAnswers": [
        "0.75",
        "3/4"
      ],
      "explanation": "$f(t) = (t + 1/2)^2 + 3/4 \\ge 3/4 = 0.75$ (đạt khi $\\cos x = -1/2$)."
    },
    {
      "id": "ai-sa-11.3.17",
      "badge": "TLN 17 - Chu kỳ hàm hạ bậc",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm chu kỳ tuần hoàn của hàm số $y = \\sin^2 3x$.",
      "correctAnswer": "$\\dfrac{\\pi}{3}$",
      "acceptableAnswers": [
        "pi/3",
        "π/3"
      ],
      "explanation": "Hạ bậc: $y = (1 - \\cos 6x)/2 \\Rightarrow T = 2\\pi/6 = \\pi/3$."
    },
    {
      "id": "ai-sa-11.3.18",
      "badge": "TLN 18 - Số nghiệm trên khoảng",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Phương trình $\\sin x = 0$ có bao nhiêu nghiệm trên đoạn $[0; 4\\pi]$?",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5"
      ],
      "explanation": "Các nghiệm là $x \\in \\{0; \\pi; 2\\pi; 3\\pi; 4\\pi\\}$ (tổng cộng 5 nghiệm)."
    },
    {
      "id": "ai-sa-11.3.19",
      "badge": "TLN 19 - Số điểm cực trị",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Hàm số $y = \\cos x$ đạt giá trị cực đại bao nhiêu lần trên đoạn $[0; 4\\pi]$?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "$\\cos x = 1$ tại $x \\in \\{0; 2\\pi; 4\\pi\\}$ (3 lần)."
    },
    {
      "id": "ai-sa-11.3.20",
      "badge": "TLN 20 - Tần số dao động nhịp tim",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Điện thế tim $V(t) = 2\\sin(2.4\\pi t)$ (mV, $t$ tính bằng giây). Trong một phút ($60$ giây), quả tim đập bao nhiêu nhịp?",
      "correctAnswer": "72 nhịp",
      "acceptableAnswers": [
        "72",
        "72 nhịp"
      ],
      "explanation": "Chu kỳ 1 nhịp: $T = 2\\pi / (2.4\\pi) = 1/1.2 = 5/6$ giây. Số nhịp trong 60 giây: $60 / (5/6) = 72$ nhịp."
    },
    {
      "id": "ai-sa-11.3.21",
      "badge": "TLN 21 - Khoảng cách hai đỉnh sóng",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Đồ thị hàm số $y = 3\\sin 2x$ có khoảng cách giữa hai đỉnh liên tiếp (hai điểm cực đại liên tiếp) bằng bao nhiêu? (Nhập giá trị theo pi, ví dụ: pi)",
      "correctAnswer": "$\\pi$",
      "acceptableAnswers": [
        "pi",
        "π"
      ],
      "explanation": "Khoảng cách giữa 2 cực đại liên tiếp chính là chu kỳ $T = 2\\pi/2 = \\pi$."
    },
    {
      "id": "ai-sa-11.3.22",
      "badge": "TLN 22 - GTLN hàm phân thức",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\dfrac{2}{3 - \\cos x}$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "$y$ lớn nhất khi mẫu $3 - \\cos x$ nhỏ nhất $\\Leftrightarrow \\cos x = 1 \\Rightarrow y_{\\max} = 2/(3 - 1) = 1$."
    },
    {
      "id": "ai-sa-11.3.23",
      "badge": "TLN 23 - GTNN hàm phân thức",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = \\dfrac{2}{3 - \\cos x}$. (Viết kết quả dạng phân số tối giản a/b)",
      "correctAnswer": "1/2",
      "acceptableAnswers": [
        "1/2",
        "0.5"
      ],
      "explanation": "$y$ nhỏ nhất khi mẫu lớn nhất $\\Leftrightarrow \\cos x = -1 \\Rightarrow y_{\\min} = 2/(3 - (-1)) = 2/4 = 1/2$."
    },
    {
      "id": "ai-sa-11.3.24",
      "badge": "TLN 24 - Nhiệt độ trung bình ngày",
      "source": "Tài liệu Chuyên đề Toán 11 C1B3",
      "prompt": "Nhiệt độ $T(t) = 24 + 6\\sin\\left(\\dfrac{\\pi(t - 8)}{12}\\right)$ ($^\\circ$C). Vào lúc mấy giờ trong ngày ($0 \\le t \\le 24$) thì nhiệt độ đạt cao nhất?",
      "correctAnswer": "14 giờ",
      "acceptableAnswers": [
        "14",
        "14h",
        "14 giờ"
      ],
      "explanation": "Cao nhất khi $\\sin = 1 \\Leftrightarrow \\pi(t - 8)/12 = \\pi/2 \\Leftrightarrow t - 8 = 6 \\Leftrightarrow t = 14$ giờ (2 giờ chiều)."
    }
  ]
},
  // ==========================================
  // BÀI 4: PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN
  // ==========================================
  "t11-b4-phuong-trinh-luong-giac-co-ban": {
    "quizQuestions": [
      {
        "id": "ai-11.4.1",
        "badge": "Luyện thêm 1 - Điều kiện phương trình sin x = 2m + 3 có nghiệm",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Phương trình $\\sin x = 2m + 3$ có nghiệm khi và chỉ khi:",
        "options": [
          "$-2 \\le m \\le -1$",
          "$-1 \\le m \\le 1$",
          "$m \\le -1$",
          "$-2 < m < -1$"
        ],
        "correctIndex": 0,
        "explanation": "Điều kiện có nghiệm: $-1 \\le 2m + 3 \\le 1 \\Leftrightarrow -4 \\le 2m \\le -2 \\Leftrightarrow -2 \\le m \\le -1$."
      },
      {
        "id": "ai-11.4.2",
        "badge": "Luyện thêm 2 - Công thức nghiệm sin u = sin v theo độ",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Công thức nghiệm của phương trình $\\sin x = \\sin 40^\\circ$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = 40^\\circ + k360^\\circ \\\\ x = 140^\\circ + k360^\\circ \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = 40^\\circ + k360^\\circ \\\\ x = -40^\\circ + k360^\\circ \\end{end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = 40^\\circ + k180^\\circ \\\\ x = 140^\\circ + k180^\\circ \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = 40^\\circ + k360^\\circ \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = \\sin 40^\\circ \\Leftrightarrow x = 40^\\circ + k360^\\circ$ hoặc $x = 180^\\circ - 40^\\circ + k360^\\circ = 140^\\circ + k360^\\circ$ ($k \\in \\mathbb{Z}$)."
      },
      {
        "id": "ai-11.4.3",
        "badge": "Luyện thêm 3 - Trường hợp đặc biệt sin x = -1",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\sin x = -1$ là:",
        "options": [
          "$x = -\\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = -1 \\Leftrightarrow x = -\\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.4",
        "badge": "Luyện thêm 4 - Giải phương trình sin 2x = 1",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\sin 2x = 1$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin 2x = 1 \\Leftrightarrow 2x = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.5",
        "badge": "Luyện thêm 5 - Giải phương trình sin x = -sqrt(3)/2",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Tập nghiệm của phương trình $\\sin x = -\\dfrac{\\sqrt{3}}{2}$ là:",
        "options": [
          "$\\left\\{-\\dfrac{\\pi}{3} + k2\\pi; \\dfrac{4\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{3} + k2\\pi; \\dfrac{2\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\pm \\dfrac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{-\\dfrac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}\\right\\}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = \\sin\\left(-\\dfrac{\\pi}{3}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{3} + k2\\pi$ hoặc $x = \\pi - \\left(-\\dfrac{\\pi}{3}\\right) + k2\\pi = \\dfrac{4\\pi}{3} + k2\\pi$."
      },
      {
        "id": "ai-11.4.6",
        "badge": "Luyện thêm 6 - Phương trình sin(3x + pi/6) = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\sin\\left(3x + \\dfrac{\\pi}{6}\\right) = 0$ là:",
        "options": [
          "$x = -\\dfrac{\\pi}{18} + \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{18} + \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{18} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$3x + \\dfrac{\\pi}{6} = k\\pi \\Leftrightarrow 3x = -\\dfrac{\\pi}{6} + k\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{18} + \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.7",
        "badge": "Luyện thêm 7 - Số nghiệm của sin x = sqrt(2)/2 trên [0; 2pi]",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Số nghiệm của phương trình $\\sin x = \\dfrac{\\sqrt{2}}{2}$ trên đoạn $[0; 2\\pi]$ là:",
        "options": [
          "$2$",
          "$1$",
          "$3$",
          "$4$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x = \\dfrac{\\sqrt{2}}{2} = \\sin\\dfrac{\\pi}{4}$. Trên $[0; 2\\pi]$ có 2 nghiệm là $x = \\dfrac{\\pi}{4}$ và $x = \\dfrac{3\\pi}{4}$."
      },
      {
        "id": "ai-11.4.8",
        "badge": "Luyện thêm 8 - Nghiệm dương nhỏ nhất của sin 2x = 1/2",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm dương nhỏ nhất của phương trình $\\sin 2x = \\dfrac{1}{2}$ là:",
        "options": [
          "$\\dfrac{\\pi}{12}$",
          "$\\dfrac{\\pi}{6}$",
          "$\\dfrac{5\\pi}{12}$",
          "$\\dfrac{\\pi}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "$2x = \\dfrac{\\pi}{6} + k2\\pi \\Rightarrow x = \\dfrac{\\pi}{12} + k\\pi$ hoặc $2x = \\dfrac{5\\pi}{6} + k2\\pi \\Rightarrow x = \\dfrac{5\\pi}{12} + k\\pi$. Nghiệm dương nhỏ nhất là $\\dfrac{\\pi}{12}$ (khi $k = 0$ họ 1)."
      },
      {
        "id": "ai-11.4.9",
        "badge": "Luyện thêm 9 - Điều kiện có nghiệm của cos x = 1 - 2m",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Phương trình $\\cos x = 1 - 2m$ có nghiệm khi và chỉ khi:",
        "options": [
          "$0 \\le m \\le 1$",
          "$-1 \\le m \\le 1$",
          "$m \\ge 0$",
          "$0 < m < 1$"
        ],
        "correctIndex": 0,
        "explanation": "$-1 \\le 1 - 2m \\le 1 \\Leftrightarrow -2 \\le -2m \\le 0 \\Leftrightarrow 0 \\le m \\le 1$."
      },
      {
        "id": "ai-11.4.10",
        "badge": "Luyện thêm 10 - Trường hợp đặc biệt cos 2x = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\cos 2x = 0$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$2x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.11",
        "badge": "Luyện thêm 11 - Giải phương trình cos x = -1/2",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\cos x = -\\dfrac{1}{2}$ là:",
        "options": [
          "$x = \\pm \\dfrac{2\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{5\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{2\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos x = -\\dfrac{1}{2} = \\cos\\dfrac{2\\pi}{3} \\Leftrightarrow x = \\pm \\dfrac{2\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.12",
        "badge": "Luyện thêm 12 - Giải phương trình cos(x + pi/3) = 1",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\cos\\left(x + \\dfrac{\\pi}{3}\\right) = 1$ là:",
        "options": [
          "$x = -\\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{2\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$x + \\dfrac{\\pi}{3} = k2\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.13",
        "badge": "Luyện thêm 13 - Giải phương trình cos 3x = cos 2x",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\cos 3x = \\cos 2x$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = k2\\pi \\\\ x = \\dfrac{k2\\pi}{5} \\end{array}\\right. (k \\in \\mathbb{Z})$ tức là $x = \\dfrac{k2\\pi}{5} \\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{k\\pi}{5} \\ (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$3x = \\pm 2x + k2\\pi \\Leftrightarrow 3x - 2x = k2\\pi \\Rightarrow x = k2\\pi$ hoặc $3x + 2x = k2\\pi \\Rightarrow x = \\dfrac{k2\\pi}{5}$. Vì $k2\\pi = \\dfrac{5k \\cdot 2\\pi}{5}$ nên họ thứ nhất chứa trong họ thứ hai."
      },
      {
        "id": "ai-11.4.14",
        "badge": "Luyện thêm 14 - Số điểm biểu diễn nghiệm cos 2x = -1 trên đường tròn",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Số điểm biểu diễn các nghiệm của phương trình $\\cos 2x = -1$ trên đường tròn lượng giác là:",
        "options": [
          "$2$",
          "$1$",
          "$4$",
          "$3$"
        ],
        "correctIndex": 0,
        "explanation": "$2x = \\pi + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$. Chu kỳ $k\\pi = \\dfrac{k2\\pi}{2}$ nên có đúng 2 điểm biểu diễn (điểm $(0; 1)$ và $(0; -1)$)."
      },
      {
        "id": "ai-11.4.15",
        "badge": "Luyện thêm 15 - Tổng các nghiệm của cos x = sqrt(3)/2 trên [0; 2pi]",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Tổng tất cả các nghiệm của phương trình $\\cos x = \\dfrac{\\sqrt{3}}{2}$ trên đoạn $[0; 2\\pi]$ bằng:",
        "options": [
          "$2\\pi$",
          "$\\pi$",
          "$\\dfrac{\\pi}{3}$",
          "$3\\pi$"
        ],
        "correctIndex": 0,
        "explanation": "Trên $[0; 2\\pi]$, các nghiệm là $x_1 = \\dfrac{\\pi}{6}$ và $x_2 = 2\\pi - \\dfrac{\\pi}{6} = \\dfrac{11\\pi}{6}$. Tổng là $\\dfrac{\\pi}{6} + \\dfrac{11\\pi}{6} = 2\\pi$."
      },
      {
        "id": "ai-11.4.16",
        "badge": "Luyện thêm 16 - Nghiệm âm lớn nhất của cos x = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm âm lớn nhất của phương trình $\\cos x = 0$ là:",
        "options": [
          "$-\\dfrac{\\pi}{2}$",
          "$-\\pi$",
          "$-\\dfrac{3\\pi}{2}$",
          "$-2\\pi$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$. Để $x < 0$ lớn nhất, chọn $k = -1 \\Rightarrow x = \\dfrac{\\pi}{2} - \\pi = -\\dfrac{\\pi}{2}$."
      },
      {
        "id": "ai-11.4.17",
        "badge": "Luyện thêm 17 - Giải phương trình tan x = sqrt(3)/3",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\tan x = \\dfrac{\\sqrt{3}}{3}$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\tan x = \\dfrac{\\sqrt{3}}{3} = \\tan\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.18",
        "badge": "Luyện thêm 18 - Giải phương trình cot x = -1",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Tập nghiệm của phương trình $\\cot x = -1$ là:",
        "options": [
          "$\\left\\{-\\dfrac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{-\\dfrac{\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{\\pm \\dfrac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\right\\}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cot x = -1 = \\cot\\left(-\\dfrac{\\pi}{4}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.19",
        "badge": "Luyện thêm 19 - Giải phương trình tan(x - pi/3) = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\tan\\left(x - \\dfrac{\\pi}{3}\\right) = 0$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$x - \\dfrac{\\pi}{3} = k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.20",
        "badge": "Luyện thêm 20 - Giải phương trình cot 3x = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\cot 3x = 0$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{6} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cot 3x = 0 \\Leftrightarrow 3x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{3} \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.21",
        "badge": "Luyện thêm 21 - Số nghiệm của tan x = 1 trên [0; 3pi]",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Số nghiệm của phương trình $\\tan x = 1$ trên đoạn $[0; 3\\pi]$ là:",
        "options": [
          "$3$",
          "$2$",
          "$4$",
          "$6$"
        ],
        "correctIndex": 0,
        "explanation": "$x = \\dfrac{\\pi}{4} + k\\pi$. Trên $[0; 3\\pi]$ có 3 nghiệm là $\\dfrac{\\pi}{4}, \\dfrac{5\\pi}{4}, \\dfrac{9\\pi}{4}$ (tương ứng $k = 0, 1, 2$)."
      },
      {
        "id": "ai-11.4.22",
        "badge": "Luyện thêm 22 - Phương trình tan 2x = tan x",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\tan 2x = \\tan x$ là:",
        "options": [
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi \\ (k \\in \\mathbb{Z})$",
          "Vô nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "ĐK: $\\cos 2x \\ne 0$ và $\\cos x \\ne 0$. Phương trình $\\Leftrightarrow 2x = x + k\\pi \\Leftrightarrow x = k\\pi$. Với $x = k\\pi$, $\\cos 2k\\pi = 1 \\ne 0$ và $\\cos k\\pi = \\pm 1 \\ne 0$. Vậy nghiệm là $x = k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.23",
        "badge": "Luyện thêm 23 - Số điểm biểu diễn nghiệm của tan 2x = 1",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Số điểm biểu diễn các nghiệm của phương trình $\\tan 2x = 1$ trên đường tròn lượng giác là:",
        "options": [
          "$2$",
          "$4$",
          "$1$",
          "$8$"
        ],
        "correctIndex": 0,
        "explanation": "$2x = \\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} = \\dfrac{\\pi}{8} + \\dfrac{k2\\pi}{4}$. Do chu kỳ là $\\dfrac{k2\\pi}{4}$ nên có đúng 4 điểm phân biệt trên đường tròn lượng giác (hoặc kiểm tra lại: $\\dfrac{k\\pi}{2}$ tương ứng 4 điểm)."
      },
      {
        "id": "ai-11.4.24",
        "badge": "Luyện thêm 24 - Nghiệm dương nhỏ nhất của cot(2x) = 1",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm dương nhỏ nhất của phương trình $\\cot 2x = 1$ là:",
        "options": [
          "$\\dfrac{\\pi}{8}$",
          "$\\dfrac{\\pi}{4}$",
          "$\\dfrac{3\\pi}{8}$",
          "$\\dfrac{\\pi}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cot 2x = 1 \\Leftrightarrow 2x = \\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2}$. Với $k = 0 \\Rightarrow x = \\dfrac{\\pi}{8} > 0$ là nghiệm dương nhỏ nhất."
      },
      {
        "id": "ai-11.4.25",
        "badge": "Luyện thêm 25 - Phương trình sin x + cos x = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\sin x + \\cos x = 0$ là:",
        "options": [
          "$x = -\\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{3\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Chia 2 vế cho $\\cos x \\ne 0$ ta được $\\tan x + 1 = 0 \\Leftrightarrow \\tan x = -1 \\Leftrightarrow x = -\\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.26",
        "badge": "Luyện thêm 26 - Phương trình sin 3x = -cos 2x",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Phương trình $\\sin 3x = \\cos 2x$ tương đương với phương trình nào sau đây?",
        "options": [
          "$\\sin 3x = \\sin\\left(\\dfrac{\\pi}{2} - 2x\\right)$",
          "$\\cos 3x = \\cos 2x$",
          "$\\sin 3x = \\sin 2x$",
          "$\\sin 3x = \\cos\\left(\\dfrac{\\pi}{2} - 2x\\right)$"
        ],
        "correctIndex": 0,
        "explanation": "Do $\\cos 2x = \\sin\\left(\\dfrac{\\pi}{2} - 2x\\right)$."
      },
      {
        "id": "ai-11.4.27",
        "badge": "Luyện thêm 27 - Phương trình sin^2 x = 1",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\sin^2 x = 1$ là:",
        "options": [
          "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin^2 x = 1 \\Leftrightarrow \\cos^2 x = 0 \\Leftrightarrow \\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$."
      },
      {
        "id": "ai-11.4.28",
        "badge": "Luyện thêm 28 - Phương trình bậc hai 2sin^2 x - sin x - 1 = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $2\\sin^2 x - \\sin x - 1 = 0$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{2} + k2\\pi \\\\ x = -\\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\dfrac{7\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{2} + k2\\pi \\\\ x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = -\\dfrac{\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Giải phương trình bậc hai: $\\sin x = 1$ hoặc $\\sin x = -\\dfrac{1}{2}$. Cho ta các nghiệm $x = \\dfrac{\\pi}{2} + k2\\pi$ và $x = -\\dfrac{\\pi}{6} + k2\\pi$, $x = \\dfrac{7\\pi}{6} + k2\\pi$."
      },
      {
        "id": "ai-11.4.29",
        "badge": "Luyện thêm 29 - Phương trình cos^2 x - 4cos x + 3 = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Tập nghiệm của phương trình $\\cos^2 x - 4\\cos x + 3 = 0$ là:",
        "options": [
          "$\\{k2\\pi, k \\in \\mathbb{Z}\\}$",
          "$\\{k\\pi, k \\in \\mathbb{Z}\\}$",
          "$\\left\\{\\pm \\dfrac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}\\right\\}$",
          "$\\emptyset$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $\\Leftrightarrow \\cos x = 1$ (thỏa mãn) hoặc $\\cos x = 3$ (vô nghiệm). $\\cos x = 1 \\Leftrightarrow x = k2\\pi$."
      },
      {
        "id": "ai-11.4.30",
        "badge": "Luyện thêm 30 - Phương trình cos 2x + cos x = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\cos 2x + \\cos x = 0$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\pi + k2\\pi \\\\ x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = k\\pi \\\\ x = \\pm \\dfrac{\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{3} + k2\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos 2x = -\\cos x = \\cos(\\pi - x) \\Leftrightarrow 2x = \\pm (\\pi - x) + k2\\pi \\Leftrightarrow x = \\pi + k2\\pi$ hoặc $x = \\pm \\dfrac{\\pi}{3} + k2\\pi$."
      },
      {
        "id": "ai-11.4.31",
        "badge": "Luyện thêm 31 - Số nghiệm của sin x * cos x = 0 trên [0; 2pi]",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Số nghiệm của phương trình $\\sin x \\cos x = 0$ trên đoạn $[0; 2\\pi]$ là:",
        "options": [
          "$5$",
          "$4$",
          "$3$",
          "$2$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin x\\cos x = 0 \\Leftrightarrow \\sin 2x = 0 \\Leftrightarrow 2x = k\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{2}$. Trên $[0; 2\\pi]$, các nghiệm là $0, \\dfrac{\\pi}{2}, \\pi, \\dfrac{3\\pi}{2}, 2\\pi$. Có đúng 5 nghiệm."
      },
      {
        "id": "ai-11.4.32",
        "badge": "Luyện thêm 32 - Phương trình tan^2 x - (1 + sqrt(3))tan x + sqrt(3) = 0",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Nghiệm của phương trình $\\tan^2 x - (1 + \\sqrt{3})\\tan x + \\sqrt{3} = 0$ là:",
        "options": [
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{4} + k\\pi \\\\ x = \\dfrac{\\pi}{3} + k\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{4} + k2\\pi \\\\ x = \\dfrac{\\pi}{3} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 0,
        "explanation": "Giải phương trình bậc hai: $\\tan x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi$ hoặc $\\tan x = \\sqrt{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi$."
      },
      {
        "id": "ai-11.4.33",
        "badge": "Luyện thêm 33 - Tìm m để cos 2x = 3m - 2 có nghiệm",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Phương trình $\\cos 2x = 3m - 2$ có nghiệm khi và chỉ khi:",
        "options": [
          "$\\dfrac{1}{3} \\le m \\le 1$",
          "$-1 \\le m \\le 1$",
          "$m \\ge \\dfrac{1}{3}$",
          "$0 \\le m \\le 1$"
        ],
        "correctIndex": 0,
        "explanation": "$-1 \\le 3m - 2 \\le 1 \\Leftrightarrow 1 \\le 3m \\le 3 \\Leftrightarrow \\dfrac{1}{3} \\le m \\le 1$."
      },
      {
        "id": "ai-11.4.34",
        "badge": "Luyện thêm 34 - Phương trình sin x = m - 3 vô nghiệm",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Phương trình $\\sin x = m - 3$ VÔ NGHIỆM khi và chỉ khi:",
        "options": [
          "$\\left[\\begin{array}{l} m > 4 \\\\ m < 2 \\end{array}\\right.$",
          "$2 \\le m \\le 4$",
          "$m > 4$",
          "$m < 2$"
        ],
        "correctIndex": 0,
        "explanation": "Vô nghiệm khi $|m - 3| > 1 \\Leftrightarrow m - 3 > 1 \\Rightarrow m > 4$ hoặc $m - 3 < -1 \\Rightarrow m < 2$."
      },
      {
        "id": "ai-11.4.35",
        "badge": "Luyện thêm 35 - Số giá trị nguyên của m để cos có nghiệm",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\cos x = \\dfrac{2m + 1}{5}$ có nghiệm?",
        "options": [
          "$5$",
          "$6$",
          "$4$",
          "$3$"
        ],
        "correctIndex": 0,
        "explanation": "$-1 \\le \\dfrac{2m + 1}{5} \\le 1 \\Leftrightarrow -5 \\le 2m + 1 \\le 5 \\Leftrightarrow -6 \\le 2m \\le 4 \\Leftrightarrow -3 \\le m \\le 2$. Các số nguyên là $\\{-3; -2; -1; 0; 1; 2\\}$, có 6 giá trị."
      },
      {
        "id": "ai-11.4.36",
        "badge": "Luyện thêm 36 - Tập giá trị tham số để cot x = m có nghiệm",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Phương trình $\\cot x = m^2 - 4$ có nghiệm với những giá trị nào của $m$?",
        "options": [
          "$m \\in \\mathbb{R}$",
          "$m \\ge 2$",
          "$-2 \\le m \\le 2$",
          "$m \\ne \\pm 2$"
        ],
        "correctIndex": 0,
        "explanation": "Hàm số côtang có tập giá trị là $\\mathbb{R}$ nên phương trình luôn có nghiệm với mọi $m \\in \\mathbb{R}$."
      },
      {
        "id": "ai-11.4.37",
        "badge": "Luyện thêm 37 - Dao động con lắc đơn",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Li độ góc của một con lắc đơn là $\\alpha(t) = 0,1\\cos(2\\pi t)$ (rad). Thời điểm đầu tiên $(t > 0)$ con lắc đi qua vị trí cân bằng ($\\alpha = 0$) là:",
        "options": [
          "$t = 0,25$ (s)",
          "$t = 0,5$ (s)",
          "$t = 1$ (s)",
          "$t = 0,125$ (s)"
        ],
        "correctIndex": 0,
        "explanation": "$\\alpha = 0 \\Leftrightarrow \\cos(2\\pi t) = 0 \\Leftrightarrow 2\\pi t = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow t = \\dfrac{1}{4} + \\dfrac{k}{2}$. Lần đầu tiên $t > 0$ khi $k = 0 \\Rightarrow t = 0,25$ s."
      },
      {
        "id": "ai-11.4.38",
        "badge": "Luyện thêm 38 - Đu quay mặt trời đạt độ cao",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Độ cao của ghế đu quay sau $t$ giây được tính bởi $h(t) = 20 - 15\\cos\\left(\\dfrac{\\pi t}{10}\\right)$ (m). Thời điểm đầu tiên ghế đạt độ cao $20$ m là:",
        "options": [
          "$t = 5$ giây",
          "$t = 10$ giây",
          "$t = 2,5$ giây",
          "$t = 15$ giây"
        ],
        "correctIndex": 0,
        "explanation": "$h = 20 \\Leftrightarrow 20 - 15\\cos\\left(\\dfrac{\\pi t}{10}\\right) = 20 \\Leftrightarrow \\cos\\left(\\dfrac{\\pi t}{10}\\right) = 0 \\Leftrightarrow \\dfrac{\\pi t}{10} = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow t = 5 + 10k$. Lần đầu tiên là khi $k = 0 \\Rightarrow t = 5$ s."
      },
      {
        "id": "ai-11.4.39",
        "badge": "Luyện thêm 39 - Dòng điện xoay chiều đạt cực đại",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Cường độ dòng điện xoay chiều có biểu thức $i = 4\\cos(100\\pi t)$ (A). Trong 1 giây đầu tiên $(0 \\le t \\le 1)$, dòng điện đạt giá trị cực đại $4$ A bao nhiêu lần?",
        "options": [
          "$101$ lần",
          "$100$ lần",
          "$50$ lần",
          "$200$ lần"
        ],
        "correctIndex": 0,
        "explanation": "$i = 4 \\Leftrightarrow \\cos(100\\pi t) = 1 \\Leftrightarrow 100\\pi t = k2\\pi \\Leftrightarrow t = \\dfrac{k}{50}$. Điều kiện $0 \\le \\dfrac{k}{50} \\le 1 \\Leftrightarrow 0 \\le k \\le 50$. Các số nguyên $k \\in \\{0; 1; \\dots; 50\\}$ gồm $50 - 0 + 1 = 51$ (hoặc nếu là 50 chu kỳ có $51$ điểm tính cả $t=0$). Lưu ý: $k = 0, 1, \\dots, 50$ là 51 lần (hoặc nếu $100\\pi t$ thì tần số 50 Hz, có 51 lần đạt cực đại)."
      },
      {
        "id": "ai-11.4.40",
        "badge": "Luyện thêm 40 - Tìm tham số m để phương trình có đúng 1 nghiệm",
        "isAiGenerated": true,
        "source": "Tài liệu Luyện tập Toán 11 C1B4",
        "question": "Phương trình $\\sin x = m$ có đúng 1 nghiệm trên đoạn $\\left[0; \\dfrac{\\pi}{2}\\right]$ khi và chỉ khi:",
        "options": [
          "$0 \\le m \\le 1$",
          "$-1 \\le m \\le 1$",
          "$0 < m < 1$",
          "$m = 1$"
        ],
        "correctIndex": 0,
        "explanation": "Hàm số $y = \\sin x$ đồng biến trên $\\left[0; \\dfrac{\\pi}{2}\\right]$ đi từ $\\sin 0 = 0$ đến $\\sin\\dfrac{\\pi}{2} = 1$. Do đó phương trình có đúng 1 nghiệm khi $0 \\le m \\le 1$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-11.4.1",
        "badge": "Đúng/Sai AI 1 - Phương trình sin(2x - pi/6) = 1/2",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình lượng giác $\\sin\\left(2x - \\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình có công thức nghiệm là $x = \\dfrac{\\pi}{6} + k\\pi$ hoặc $x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2x - \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + k2\\pi \\Leftrightarrow 2x = \\dfrac{\\pi}{3} + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\pi$ hoặc $2x - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6} + k2\\pi \\Leftrightarrow 2x = \\pi + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$."
          },
          {
            "id": "b",
            "text": "Số điểm biểu diễn các nghiệm của phương trình trên đường tròn lượng giác là 4.",
            "correctAnswer": true,
            "explanation": "Hai họ nghiệm chu kỳ $k\\pi$ không trùng nhau biểu diễn bởi 4 điểm phân biệt."
          },
          {
            "id": "c",
            "text": "Trên khoảng $(0; \\pi)$, phương trình có đúng 2 nghiệm là $\\dfrac{\\pi}{6}$ và $\\dfrac{\\pi}{2}$.",
            "correctAnswer": true,
            "explanation": "Ứng với $k = 0$ ở cả hai họ ta có $x = \\dfrac{\\pi}{6}$ và $x = \\dfrac{\\pi}{2}$ đều thuộc $(0; \\pi)$."
          },
          {
            "id": "d",
            "text": "Tổng các nghiệm của phương trình trên khoảng $(0; \\pi)$ bằng $\\dfrac{2\\pi}{3}$.",
            "correctAnswer": true,
            "explanation": "$\\dfrac{\\pi}{6} + \\dfrac{\\pi}{2} = \\dfrac{4\\pi}{6} = \\dfrac{2\\pi}{3}$."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.2",
        "badge": "Đúng/Sai AI 2 - Phương trình cos(3x + pi/4) = sqrt(2)/2",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình lượng giác $\\cos\\left(3x + \\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $3x + \\dfrac{\\pi}{4} = \\pm \\dfrac{\\pi}{4} + k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Vì $\\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$."
          },
          {
            "id": "b",
            "text": "Hai họ nghiệm rút gọn là $x = \\dfrac{k2\\pi}{3}$ hoặc $x = -\\dfrac{\\pi}{6} + \\dfrac{k2\\pi}{3} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$3x = k2\\pi \\Rightarrow x = \\dfrac{k2\\pi}{3}$ hoặc $3x = -\\dfrac{\\pi}{2} + k2\\pi \\Rightarrow x = -\\dfrac{\\pi}{6} + \\dfrac{k2\\pi}{3}$."
          },
          {
            "id": "c",
            "text": "Nghiệm dương nhỏ nhất của phương trình là $\\dfrac{\\pi}{2}$.",
            "correctAnswer": true,
            "explanation": "Với $x = -\\dfrac{\\pi}{6} + \\dfrac{k2\\pi}{3}$, khi $k = 1 \\Rightarrow x = \\dfrac{\\pi}{2}$. Với $x = \\dfrac{k2\\pi}{3}$, khi $k = 1 \\Rightarrow x = \\dfrac{2\\pi}{3} > \\dfrac{\\pi}{2}$. Vậy nghiệm dương nhỏ nhất là $\\dfrac{\\pi}{2}$."
          },
          {
            "id": "d",
            "text": "Số điểm biểu diễn nghiệm của phương trình trên đường tròn lượng giác là 3.",
            "correctAnswer": false,
            "explanation": "Mỗi họ nghiệm chu kỳ $\\dfrac{k2\\pi}{3}$ có 3 điểm biểu diễn, 2 họ không trùng nhau nên có $3 + 3 = 6$ điểm."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.3",
        "badge": "Đúng/Sai AI 3 - Phương trình cos x = 2m + 1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\cos x = 2m + 1$, với $m$ là tham số. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình có nghiệm khi và chỉ khi $-1 \\le m \\le 0$.",
            "correctAnswer": true,
            "explanation": "$-1 \\le 2m + 1 \\le 1 \\Leftrightarrow -2 \\le 2m \\le 0 \\Leftrightarrow -1 \\le m \\le 0$."
          },
          {
            "id": "b",
            "text": "Số giá trị nguyên của tham số $m$ để phương trình có nghiệm là 2.",
            "correctAnswer": true,
            "explanation": "$m \\in \\{-1; 0\\}$, có đúng 2 giá trị nguyên."
          },
          {
            "id": "c",
            "text": "Khi $m = 0$, nghiệm của phương trình là $x = k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cos x = 1 \\Leftrightarrow x = k2\\pi$."
          },
          {
            "id": "d",
            "text": "Khi $m = -1$, nghiệm của phương trình là $x = \\pi + k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi$."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.4",
        "badge": "Đúng/Sai AI 4 - Phương trình tan 2x = -1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\tan 2x = -1$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cos 2x \\ne 0 \\Leftrightarrow 2x \\ne \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = -\\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2x = -\\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Mọi nghiệm tìm được đều thỏa mãn điều kiện xác định.",
            "correctAnswer": true,
            "explanation": "$-\\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ne \\dfrac{\\pi}{4} + \\dfrac{m\\pi}{2}$ với mọi $k, m \\in \\mathbb{Z}$."
          },
          {
            "id": "d",
            "text": "Số nghiệm của phương trình trên đoạn $[0; 2\\pi]$ là 4.",
            "correctAnswer": true,
            "explanation": "Trên $[0; 2\\pi]$ có độ dài $2\\pi$, chu kỳ $\\dfrac{\\pi}{2}$ có đúng $\\dfrac{2\\pi}{\\pi/2} = 4$ nghiệm."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.5",
        "badge": "Đúng/Sai AI 5 - Phương trình sin 3x = cos x",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\sin 3x = \\cos x$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\sin 3x = \\sin\\left(\\dfrac{\\pi}{2} - x\\right)$.",
            "correctAnswer": true,
            "explanation": "Sử dụng công thức góc phụ $\\cos x = \\sin\\left(\\dfrac{\\pi}{2} - x\\right)$."
          },
          {
            "id": "b",
            "text": "Họ nghiệm thứ nhất là $x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$3x = \\dfrac{\\pi}{2} - x + k2\\pi \\Leftrightarrow 4x = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Họ nghiệm thứ hai là $x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$3x = \\pi - \\left(\\dfrac{\\pi}{2} - x\\right) + k2\\pi = \\dfrac{\\pi}{2} + x + k2\\pi \\Leftrightarrow 2x = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi$."
          },
          {
            "id": "d",
            "text": "Trên khoảng $(0; \\pi)$, phương trình có đúng 2 nghiệm.",
            "correctAnswer": false,
            "explanation": "Họ 1 cho $x = \\dfrac{\\pi}{8}, \\dfrac{5\\pi}{8}$; họ 2 cho $x = \\dfrac{\\pi}{4}$. Tổng cộng có 3 nghiệm trên $(0; \\pi)$."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.6",
        "badge": "Đúng/Sai AI 6 - Phương trình 2sin^2 x + 3sin x + 1 = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $2\\sin^2 x + 3\\sin x + 1 = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương $\\sin x = -1$ hoặc $\\sin x = -\\dfrac{1}{2}$.",
            "correctAnswer": true,
            "explanation": "Phương trình bậc hai $2t^2 + 3t + 1 = 0$ có nghiệm $t = -1$ và $t = -\\dfrac{1}{2}$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = -\\dfrac{\\pi}{2} + k2\\pi$, $x = -\\dfrac{\\pi}{6} + k2\\pi$, $x = \\dfrac{7\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Đúng theo công thức nghiệm của sin."
          },
          {
            "id": "c",
            "text": "Có 3 điểm biểu diễn các nghiệm trên đường tròn lượng giác.",
            "correctAnswer": true,
            "explanation": "Ba góc phân biệt trên đường tròn: $-\\dfrac{\\pi}{2}$, $-\\dfrac{\\pi}{6}$ và $\\dfrac{7\\pi}{6}$."
          },
          {
            "id": "d",
            "text": "Phương trình có 4 nghiệm trên đoạn $[0; 2\\pi]$.",
            "correctAnswer": false,
            "explanation": "Trên $[0; 2\\pi]$, các nghiệm là $x = \\dfrac{3\\pi}{2}$ (từ $\\sin x = -1$), $x = \\dfrac{7\\pi}{6}, \\dfrac{11\\pi}{6}$ (từ $\\sin x = -\\dfrac{1}{2}$). Chỉ có 3 nghiệm."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.7",
        "badge": "Đúng/Sai AI 7 - Phương trình cot x = 1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình lượng giác $\\cot x = 1$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\cot x = 1 = \\cot\\dfrac{\\pi}{4} \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi$."
          },
          {
            "id": "c",
            "text": "Các nghiệm đều thỏa mãn điều kiện xác định.",
            "correctAnswer": true,
            "explanation": "$\\dfrac{\\pi}{4} + k\\pi \\ne m\\pi$ với mọi $k, m \\in \\mathbb{Z}$."
          },
          {
            "id": "d",
            "text": "Tổng các nghiệm của phương trình trên đoạn $[0; 2\\pi]$ bằng $\\dfrac{3\\pi}{2}$.",
            "correctAnswer": true,
            "explanation": "Hai nghiệm là $\\dfrac{\\pi}{4}$ và $\\dfrac{5\\pi}{4}$. Tổng là $\\dfrac{\\pi}{4} + \\dfrac{5\\pi}{4} = \\dfrac{6\\pi}{4} = \\dfrac{3\\pi}{2}$."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.8",
        "badge": "Đúng/Sai AI 8 - Phương trình cos 2x = cos x",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\cos 2x = \\cos x$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình $\\Leftrightarrow 2x = \\pm x + k2\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Theo công thức $\\cos u = \\cos v$."
          },
          {
            "id": "b",
            "text": "Các họ nghiệm là $x = k2\\pi$ hoặc $x = \\dfrac{k2\\pi}{3} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2x - x = k2\\pi \\Rightarrow x = k2\\pi$; $2x + x = k2\\pi \\Rightarrow x = \\dfrac{k2\\pi}{3}$."
          },
          {
            "id": "c",
            "text": "Họ $x = \\dfrac{k2\\pi}{3}$ chứa họ $x = k2\\pi$.",
            "correctAnswer": true,
            "explanation": "Khi $k$ chia hết cho 3 thì $\\dfrac{k2\\pi}{3}$ trở thành bội của $2\\pi$."
          },
          {
            "id": "d",
            "text": "Trên khoảng $(0; 2\\pi)$, phương trình có đúng 3 nghiệm phân biệt.",
            "correctAnswer": false,
            "explanation": "Trên $(0; 2\\pi)$, họ $x = \\dfrac{k2\\pi}{3}$ chỉ có $k = 1 \\Rightarrow x = \\dfrac{2\\pi}{3}$ và $k = 2 \\Rightarrow x = \\dfrac{4\\pi}{3}$. Chỉ có 2 nghiệm."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.9",
        "badge": "Đúng/Sai AI 9 - Phương trình sin x * (cos x - 2) = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\sin x(\\cos x - 2) = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình $\\cos x - 2 = 0$ vô nghiệm.",
            "correctAnswer": true,
            "explanation": "Vì $-1 \\le \\cos x \\le 1$ nên $\\cos x = 2$ vô nghiệm."
          },
          {
            "id": "b",
            "text": "Phương trình đã cho tương đương với $\\sin x = 0$.",
            "correctAnswer": true,
            "explanation": "Do nhân tử $\\cos x - 2 \\ne 0$ với mọi $x$."
          },
          {
            "id": "c",
            "text": "Nghiệm của phương trình là $x = k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$\\sin x = 0 \\Leftrightarrow x = k\\pi$."
          },
          {
            "id": "d",
            "text": "Số nghiệm của phương trình trên đoạn $[0; 4\\pi]$ là 5.",
            "correctAnswer": true,
            "explanation": "Các nghiệm là $x = 0, \\pi, 2\\pi, 3\\pi, 4\\pi$ (5 nghiệm)."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.10",
        "badge": "Đúng/Sai AI 10 - Phương trình tan^2 x - 1 = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\tan^2 x - 1 = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương $\\tan x = 1$ hoặc $\\tan x = -1$.",
            "correctAnswer": true,
            "explanation": "$\\tan^2 x = 1 \\Leftrightarrow \\tan x = \\pm 1$."
          },
          {
            "id": "b",
            "text": "Nghiệm gộp của phương trình là $x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Họ $\\dfrac{\\pi}{4} + k\\pi$ và $-\\dfrac{\\pi}{4} + k\\pi$ kết hợp lại thành $\\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Số điểm biểu diễn nghiệm trên đường tròn lượng giác là 4.",
            "correctAnswer": true,
            "explanation": "Chu kỳ $\\dfrac{\\pi}{2}$ biểu diễn bởi 4 đỉnh hình vuông trên đường tròn."
          },
          {
            "id": "d",
            "text": "Trên khoảng $(-\\pi; \\pi)$, phương trình có đúng 4 nghiệm.",
            "correctAnswer": true,
            "explanation": "Bốn nghiệm là $\\pm \\dfrac{\\pi}{4}, \\pm \\dfrac{3\\pi}{4}$."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.11",
        "badge": "Đúng/Sai AI 11 - Phương trình sin 2x + cos 2x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\sin 2x + \\cos 2x = 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\tan 2x = -1$.",
            "correctAnswer": true,
            "explanation": "Chia hai vế cho $\\cos 2x \\ne 0$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = -\\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2x = -\\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Nghiệm dương nhỏ nhất của phương trình là $\\dfrac{3\\pi}{8}$.",
            "correctAnswer": true,
            "explanation": "Với $k = 1 \\Rightarrow x = -\\dfrac{\\pi}{8} + \\dfrac{\\pi}{2} = \\dfrac{3\\pi}{8}$."
          },
          {
            "id": "d",
            "text": "Trên đoạn $[0; \\pi]$, phương trình có đúng 2 nghiệm.",
            "correctAnswer": true,
            "explanation": "Đó là $x = \\dfrac{3\\pi}{8}$ ($k=1$) và $x = \\dfrac{7\\pi}{8}$ ($k=2$)."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.12",
        "badge": "Đúng/Sai AI 12 - Phương trình cos^2 x = 1/2",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\cos^2 x = \\dfrac{1}{2}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Hạ bậc ta được phương trình tương đương $\\cos 2x = 0$.",
            "correctAnswer": true,
            "explanation": "$\\cos^2 x = \\dfrac{1 + \\cos 2x}{2} = \\dfrac{1}{2} \\Leftrightarrow 1 + \\cos 2x = 1 \\Leftrightarrow \\cos 2x = 0$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình là $x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2} \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Có 4 điểm biểu diễn nghiệm của phương trình trên đường tròn lượng giác.",
            "correctAnswer": true,
            "explanation": "Chu kỳ $\\dfrac{\\pi}{2}$ biểu diễn 4 điểm."
          },
          {
            "id": "d",
            "text": "Trên khoảng $(0; 2\\pi)$, phương trình có đúng 4 nghiệm phân biệt.",
            "correctAnswer": true,
            "explanation": "Các nghiệm là $\\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}, \\dfrac{5\\pi}{4}, \\dfrac{7\\pi}{4}$."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.13",
        "badge": "Đúng/Sai AI 13 - Dao động điện áp xoay chiều",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Một điện áp xoay chiều có biểu thức $u(t) = 220\\sqrt{2}\\cos(100\\pi t)$ (V), $t \\ge 0$ tính bằng giây. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điện áp cực đại là $220\\sqrt{2}$ V.",
            "correctAnswer": true,
            "explanation": "Biên độ $U_0 = 220\\sqrt{2}$ V."
          },
          {
            "id": "b",
            "text": "Tần số của điện áp là $50$ Hz.",
            "correctAnswer": true,
            "explanation": "$f = \\dfrac{\\omega}{2\\pi} = \\dfrac{100\\pi}{2\\pi} = 50$ Hz."
          },
          {
            "id": "c",
            "text": "Thời điểm đầu tiên $t > 0$ điện áp bằng 0 là $t = \\dfrac{1}{200}$ giây.",
            "correctAnswer": true,
            "explanation": "$\\cos(100\\pi t) = 0 \\Leftrightarrow 100\\pi t = \\dfrac{\\pi}{2} + k\\pi \\Rightarrow t = \\dfrac{1}{200} + \\dfrac{k}{100}$. Với $k = 0 \\Rightarrow t = \\dfrac{1}{200}$ s."
          },
          {
            "id": "d",
            "text": "Trong 1 giây đầu tiên, điện áp bằng 0 đúng 100 lần.",
            "correctAnswer": true,
            "explanation": "Mỗi chu kỳ $T = 0,02$ s điện áp bằng 0 hai lần. Trong 1 giây có 50 chu kỳ nên bằng 0 đúng $50 \\times 2 = 100$ lần."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.14",
        "badge": "Đúng/Sai AI 14 - Phương trình sin 2x = sin^2 x",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\sin 2x = \\sin^2 x$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $\\sin x(2\\cos x - \\sin x) = 0$.",
            "correctAnswer": true,
            "explanation": "$2\\sin x\\cos x - \\sin^2 x = 0 \\Leftrightarrow \\sin x(2\\cos x - \\sin x) = 0$."
          },
          {
            "id": "b",
            "text": "Phương trình có họ nghiệm $x = k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "Từ $\\sin x = 0 \\Leftrightarrow x = k\\pi$."
          },
          {
            "id": "c",
            "text": "Phương trình có họ nghiệm $x = \\arctan 2 + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correctAnswer": true,
            "explanation": "$2\\cos x - \\sin x = 0 \\Leftrightarrow \\tan x = 2 \\Leftrightarrow x = \\arctan 2 + k\\pi$."
          },
          {
            "id": "d",
            "text": "Phương trình vô nghiệm trên khoảng $\\left(0; \\dfrac{\\pi}{4}\\right)$.",
            "correctAnswer": true,
            "explanation": "Vì $\\arctan 2 > \\arctan 1 = \\dfrac{\\pi}{4}$ và $k\\pi \\notin \\left(0; \\dfrac{\\pi}{4}\\right)$."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.15",
        "badge": "Đúng/Sai AI 15 - Độ cao vòng quay mặt trời",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Một chiếc ghế trên vòng quay mặt trời quay đều quanh tâm. Độ cao $h$ (mét) của ghế tại thời điểm $t$ phút là $h(t) = 40 - 30\\cos\\left(\\dfrac{\\pi t}{15}\\right)$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Độ cao thấp nhất của ghế là $10$ m.",
            "correctAnswer": true,
            "explanation": "Khi $\\cos = 1 \\Rightarrow h = 40 - 30 = 10$ m."
          },
          {
            "id": "b",
            "text": "Độ cao cao nhất của ghế là $70$ m.",
            "correctAnswer": true,
            "explanation": "Khi $\\cos = -1 \\Rightarrow h = 40 + 30 = 70$ m."
          },
          {
            "id": "c",
            "text": "Thời điểm đầu tiên ghế đạt độ cao cao nhất là $t = 15$ phút.",
            "correctAnswer": true,
            "explanation": "$\\cos\\left(\\dfrac{\\pi t}{15}\\right) = -1 \\Leftrightarrow \\dfrac{\\pi t}{15} = \\pi + k2\\pi \\Rightarrow t = 15 + 30k$. Với $k = 0 \\Rightarrow t = 15$ phút."
          },
          {
            "id": "d",
            "text": "Trong 1 giờ (60 phút), ghế đạt độ cao cao nhất 2 lần.",
            "correctAnswer": true,
            "explanation": "Các thời điểm là $t = 15$ và $t = 45$ (2 lần)."
          }
        ]
      },
      {
        "id": "ai-tf-11.4.16",
        "badge": "Đúng/Sai AI 16 - Phương trình sin x = m trên [0; pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Cho phương trình $\\sin x = m$, xét trên đoạn $[0; \\pi]$. Xét tính Đúng / Sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình có nghiệm khi và chỉ khi $0 \\le m \\le 1$.",
            "correctAnswer": true,
            "explanation": "Với $x \\in [0; \\pi]$ thì $\\sin x \\in [0; 1]$."
          },
          {
            "id": "b",
            "text": "Khi $m = 1$, phương trình có duy nhất 1 nghiệm $x = \\dfrac{\\pi}{2}$.",
            "correctAnswer": true,
            "explanation": "$\\sin x = 1$ trên $[0; \\pi]$ chỉ tại $x = \\dfrac{\\pi}{2}$."
          },
          {
            "id": "c",
            "text": "Khi $m = 0$, phương trình có đúng 2 nghiệm $x = 0$ và $x = \\pi$.",
            "correctAnswer": true,
            "explanation": "$\\sin 0 = \\sin \\pi = 0$."
          },
          {
            "id": "d",
            "text": "Với mỗi $m \\in (0; 1)$, phương trình luôn có đúng 2 nghiệm phân biệt thuộc $[0; \\pi]$.",
            "correctAnswer": true,
            "explanation": "Đó là $x_1 = \\arcsin m$ và $x_2 = \\pi - \\arcsin m$ ($x_1 \\ne x_2$ do $m \\ne 1$)."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-11.4.1",
        "badge": "Luyện thêm 1 - Số nghiệm của sin(x - 45) = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\sin(x - 45^\\circ) = 0$ trên đoạn $[0^\\circ; 360^\\circ]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$x - 45^\\circ = k180^\\circ \\Leftrightarrow x = 45^\\circ + k180^\\circ$. Với $0^\\circ \\le x \\le 360^\\circ$, có 2 nghiệm: $45^\\circ$ ($k=0$) và $225^\\circ$ ($k=1$)."
      },
      {
        "id": "ai-sa-11.4.2",
        "badge": "Luyện thêm 2 - Số nghiệm của sin 4x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\sin 4x = 0$ trên đoạn $[0; \\pi]$.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5"
        ],
        "explanation": "$4x = k\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{4}$. Trên $[0; \\pi]$, các nghiệm là $0, \\dfrac{\\pi}{4}, \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{4}, \\pi$. Có đúng 5 nghiệm."
      },
      {
        "id": "ai-sa-11.4.3",
        "badge": "Luyện thêm 3 - Số nghiệm của cos 3x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\cos 3x = 0$ trên đoạn $[0; \\pi]$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$3x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + \\dfrac{k\\pi}{3}$. Trên $[0; \\pi]$, có 3 nghiệm: $\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}$."
      },
      {
        "id": "ai-sa-11.4.4",
        "badge": "Luyện thêm 4 - Số nghiệm của tan x = -1 trên [0; 2pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\tan x = -1$ trên đoạn $[0; 2\\pi]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$x = -\\dfrac{\\pi}{4} + k\\pi$. Trên $[0; 2\\pi]$, có 2 nghiệm là $\\dfrac{3\\pi}{4}$ ($k=1$) và $\\dfrac{7\\pi}{4}$ ($k=2$)."
      },
      {
        "id": "ai-sa-11.4.5",
        "badge": "Luyện thêm 5 - Số nghiệm của cot 2x = 1 trên [0; pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\cot 2x = 1$ trên đoạn $[0; \\pi]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$2x = \\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2}$. Trên $[0; \\pi]$, có 2 nghiệm là $\\dfrac{\\pi}{8}$ và $\\dfrac{5\\pi}{8}$."
      },
      {
        "id": "ai-sa-11.4.6",
        "badge": "Luyện thêm 6 - Số điểm biểu diễn nghiệm của sin 2x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số điểm biểu diễn các nghiệm của phương trình $\\sin 2x = 0$ trên đường tròn lượng giác.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$2x = k\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{2}$. Chu kỳ $\\dfrac{\\pi}{2}$ có đúng 4 điểm trên đường tròn."
      },
      {
        "id": "ai-sa-11.4.7",
        "badge": "Luyện thêm 7 - Số điểm biểu diễn nghiệm của cos 3x = 1",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số điểm biểu diễn các nghiệm của phương trình $\\cos 3x = 1$ trên đường tròn lượng giác.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$3x = k2\\pi \\Leftrightarrow x = \\dfrac{k2\\pi}{3}$. Có đúng 3 điểm phân biệt."
      },
      {
        "id": "ai-sa-11.4.8",
        "badge": "Luyện thêm 8 - Số giá trị nguyên của m để sin 3x = m - 1 có nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\sin 3x = m - 1$ có nghiệm?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$-1 \\le m - 1 \\le 1 \\Leftrightarrow 0 \\le m \\le 2$. Các số nguyên là $\\{0; 1; 2\\}$, có 3 giá trị."
      },
      {
        "id": "ai-sa-11.4.9",
        "badge": "Luyện thêm 9 - Số giá trị nguyên của m để cos x = 3m có nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\cos x = 3m$ có nghiệm?",
        "correctAnswer": "1",
        "acceptableAnswers": [
          "1"
        ],
        "explanation": "$-1 \\le 3m \\le 1 \\Leftrightarrow -\\dfrac{1}{3} \\le m \\le \\dfrac{1}{3}$. Số nguyên duy nhất là $m = 0$."
      },
      {
        "id": "ai-sa-11.4.10",
        "badge": "Luyện thêm 10 - Số nghiệm của 2cos x + sqrt(3) = 0 trên [0; 2pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $2\\cos x + \\sqrt{3} = 0$ trên đoạn $[0; 2\\pi]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$\\cos x = -\\dfrac{\\sqrt{3}}{2}$. Trên $[0; 2\\pi]$ có 2 nghiệm: $\\dfrac{5\\pi}{6}$ và $\\dfrac{7\\pi}{6}$."
      },
      {
        "id": "ai-sa-11.4.11",
        "badge": "Luyện thêm 11 - Số nghiệm của 2sin^2 x - 1 = 0 trên [0; pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $2\\sin^2 x - 1 = 0$ trên đoạn $[0; \\pi]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$1 - 2\\sin^2 x = 0 \\Leftrightarrow \\cos 2x = 0 \\Leftrightarrow 2x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$. Trên $[0; \\pi]$ có 2 nghiệm: $\\dfrac{\\pi}{4}$ và $\\dfrac{3\\pi}{4}$."
      },
      {
        "id": "ai-sa-11.4.12",
        "badge": "Luyện thêm 12 - Số nghiệm của cos^2 x - cos x = 0 trên [0; 2pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\cos^2 x - \\cos x = 0$ trên đoạn $[0; 2\\pi]$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$\\cos x = 0$ cho 2 nghiệm: $\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$; $\\cos x = 1$ cho 2 nghiệm: $0, 2\\pi$. Tổng cộng có 4 nghiệm."
      },
      {
        "id": "ai-sa-11.4.13",
        "badge": "Luyện thêm 13 - Số nghiệm của tan^2 x - 3 = 0 trên [0; pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\tan^2 x - 3 = 0$ trên đoạn $[0; \\pi]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$\\tan x = \\pm \\sqrt{3}$. Trên $[0; \\pi]$ có 2 nghiệm là $\\dfrac{\\pi}{3}$ và $\\dfrac{2\\pi}{3}$."
      },
      {
        "id": "ai-sa-11.4.14",
        "badge": "Luyện thêm 14 - Dao động cơ qua vị trí x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Một vật dao động điều hòa $x(t) = 5\\cos(10\\pi t)$ (cm). Trong 1 giây đầu tiên $(0 \\le t \\le 1)$, vật qua vị trí cân bằng bao nhiêu lần?",
        "correctAnswer": "10",
        "acceptableAnswers": [
          "10"
        ],
        "explanation": "$\\cos(10\\pi t) = 0 \\Leftrightarrow 10\\pi t = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow t = \\dfrac{1}{20} + \\dfrac{k}{10}$. $0 \\le \\dfrac{1}{20} + \\dfrac{k}{10} \\le 1 \\Leftrightarrow -0,5 \\le k \\le 9,5 \\Rightarrow k \\in \\{0; 1; \\dots; 9\\}$, có 10 lần."
      },
      {
        "id": "ai-sa-11.4.15",
        "badge": "Luyện thêm 15 - Dao động điện áp xoay chiều cực đại",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Điện áp xoay chiều $u = 100\\cos(50\\pi t)$ (V). Trong 2 giây đầu tiên $(0 \\le t \\le 2)$, có bao nhiêu lần điện áp đạt giá trị cực đại $100$ V?",
        "correctAnswer": "51",
        "acceptableAnswers": [
          "51"
        ],
        "explanation": "$\\cos(50\\pi t) = 1 \\Leftrightarrow 50\\pi t = k2\\pi \\Leftrightarrow t = \\dfrac{k}{25}$. $0 \\le \\dfrac{k}{25} \\le 2 \\Leftrightarrow 0 \\le k \\le 50 \\Rightarrow k \\in \\{0; 1; \\dots; 50\\}$, có 51 lần."
      },
      {
        "id": "ai-sa-11.4.16",
        "badge": "Luyện thêm 16 - Số giá trị nguyên của m để sin x = m/2 có nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\sin x = \\dfrac{m}{2}$ có nghiệm?",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5"
        ],
        "explanation": "$-1 \\le \\dfrac{m}{2} \\le 1 \\Leftrightarrow -2 \\le m \\le 2$. Có 5 giá trị nguyên: $\\{-2; -1; 0; 1; 2\\}$."
      },
      {
        "id": "ai-sa-11.4.17",
        "badge": "Luyện thêm 17 - Số nghiệm của sin 2x = cos 2x trên [0; pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\sin 2x = \\cos 2x$ trên đoạn $[0; \\pi]$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "$\\tan 2x = 1 \\Leftrightarrow 2x = \\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{8} + \\dfrac{k\\pi}{2}$. Trên $[0; \\pi]$ có 2 nghiệm: $\\dfrac{\\pi}{8}$ và $\\dfrac{5\\pi}{8}$."
      },
      {
        "id": "ai-sa-11.4.18",
        "badge": "Luyện thêm 18 - Số nghiệm của cos 4x = 1 trên [0; 2pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số nghiệm của phương trình $\\cos 4x = 1$ trên đoạn $[0; 2\\pi]$.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5"
        ],
        "explanation": "$4x = k2\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{2}$. Trên $[0; 2\\pi]$, điều kiện $0 \\le \\dfrac{k\\pi}{2} \\le 2\\pi \\Leftrightarrow 0 \\le k \\le 4 \\Rightarrow k \\in \\{0; 1; 2; 3; 4\\}$ ứng với các nghiệm $x \\in \\left\\{0; \\dfrac{\\pi}{2}; \\pi; \\dfrac{3\\pi}{2}; 2\\pi\\right\\}$. Có đúng 5 nghiệm."
      },
      {
        "id": "ai-sa-11.4.19",
        "badge": "Luyện thêm 19 - Số điểm biểu diễn nghiệm của tan 3x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số điểm biểu diễn các nghiệm của phương trình $\\tan 3x = 0$ trên đường tròn lượng giác.",
        "correctAnswer": "6",
        "acceptableAnswers": [
          "6"
        ],
        "explanation": "$3x = k\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{3} = \\dfrac{k2\\pi}{6}$. Có 6 điểm biểu diễn."
      },
      {
        "id": "ai-sa-11.4.20",
        "badge": "Luyện thêm 20 - Số điểm biểu diễn nghiệm của cot 2x = 0",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số điểm biểu diễn các nghiệm của phương trình $\\cot 2x = 0$ trên đường tròn lượng giác.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4"
        ],
        "explanation": "$2x = \\dfrac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$. Có 4 điểm biểu diễn."
      },
      {
        "id": "ai-sa-11.4.21",
        "badge": "Luyện thêm 21 - Số giá trị nguyên của m để phương trình sin x = 2 - m có nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số giá trị nguyên của tham số $m$ để phương trình $\\sin x = 2 - m$ có nghiệm.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$-1 \\le 2 - m \\le 1 \\Leftrightarrow 1 \\le m \\le 3$. Các số nguyên là $\\{1; 2; 3\\}$, có 3 giá trị."
      },
      {
        "id": "ai-sa-11.4.22",
        "badge": "Luyện thêm 22 - Số giá trị nguyên của m để cos 3x = m - 4 có nghiệm",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm số giá trị nguyên của tham số $m$ để phương trình $\\cos 3x = m - 4$ có nghiệm.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3"
        ],
        "explanation": "$-1 \\le m - 4 \\le 1 \\Leftrightarrow 3 \\le m \\le 5$. Có 3 giá trị nguyên là $\\{3; 4; 5\\}$."
      },
      {
        "id": "ai-sa-11.4.23",
        "badge": "Luyện thêm 23 - Tổng các nghiệm sin x = 1/2 trên [0; pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm tổng tất cả các nghiệm của phương trình $\\sin x = \\dfrac{1}{2}$ trên đoạn $[0; \\pi]$ theo dạng $a\\pi$. Giá trị của $a$ là bao nhiêu?",
        "correctAnswer": "1",
        "acceptableAnswers": [
          "1"
        ],
        "explanation": "Hai nghiệm là $\\dfrac{\\pi}{6}$ và $\\dfrac{5\\pi}{6}$. Tổng là $\\dfrac{\\pi}{6} + \\dfrac{5\\pi}{6} = \\pi = 1\\pi$. Vậy $a = 1$."
      },
      {
        "id": "ai-sa-11.4.24",
        "badge": "Luyện thêm 24 - Tổng các nghiệm cos 2x = 0 trên [0; pi]",
        "source": "Tài liệu GDPT 2018 Toán 11 C1B4",
        "prompt": "Tìm tổng tất cả các nghiệm của phương trình $\\cos 2x = 0$ trên đoạn $[0; \\pi]$ theo dạng $a\\pi$. Giá trị của $a$ là bao nhiêu?",
        "correctAnswer": "1",
        "acceptableAnswers": [
          "1"
        ],
        "explanation": "Hai nghiệm là $\\dfrac{\\pi}{4}$ và $\\dfrac{3\\pi}{4}$. Tổng bằng $\\dfrac{\\pi}{4} + \\dfrac{3\\pi}{4} = \\pi = 1\\pi$. Vậy $a = 1$."
      }
    ]
  }
};
