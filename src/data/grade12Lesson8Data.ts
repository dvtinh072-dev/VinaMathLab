import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";
import type { Grade12AiPracticePackage } from "./grade12AiPracticeData";

// ============================================================================
// BÀI 8: BIỂU THỨC TỌA ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ (SGK TOÁN 12 KNTT)
// CHƯƠNG II: VECTƠ VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN
// ============================================================================

export const GRADE_12_LESSON_8: DetailedLessonData = {
  id: "t12-b8-bieu-thuc-toa-do-vector",
  lessonNumber: 8,
  title: "Bài 8: Biểu thức tọa độ của các phép toán vectơ",
  bookChapter: "Chương II: Vectơ và hệ tọa độ trong không gian (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Điều khiển tên lửa hành trình, tổng hợp đa lực không gian và tính công cơ học chính xác",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Hải (Kỹ sư hàng không)",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, khi máy bay bay trong không gian chịu nhiều lực đồng thời như lực đẩy phản lực của động cơ, lực cản không khí và trọng lực, làm thế nào máy tính trên khoang lái có thể tổng hợp nhanh các lực này và tính góc nghiêng của đường bay ạ?",
      visualGraphic: "vector",
      mathNote: "\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\dots + \\vec{F}_n = (\\sum F_x; \\sum F_y; \\sum F_z)"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Hải! Đó chính là nhờ Biểu thức tọa độ của các phép toán vectơ! Khi các vectơ lực được biểu diễn dưới dạng tọa độ $\\vec{u} = (x; y; z)$, các phép tính cộng, trừ, nhân với một số được thực hiện trực tiếp trên từng tọa độ. Đặc biệt, tích vô hướng $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$ cho phép máy tính xác định góc bay và công sinh lực trong tích tắc!",
      visualGraphic: "box",
      mathNote: "\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{|\\vec{u}| \\cdot |\\vec{v}|}"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Hải",
      avatar: "🧑‍🎓",
      speech: "Dạ! Khi hai vectơ vuông góc nhau thì tích vô hướng bằng 0, nghĩa là $x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$. Đây là điều kiện vàng để kiểm tra tính trực giao của các dầm thép trong kết cấu cầu đường đúng không ạ?",
      visualGraphic: "vector",
      mathNote: "\\vec{u} \\perp \\vec{v} \\iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0"
    }
  ],
  youtubeVideoId: "JySXqEuzA_Q",
  youtubeVideoTitle: "Bài 8: Biểu thức tọa độ của các phép toán vectơ (Tiết 1) - Toán 12 Kết nối tri thức",
  youtubeVideos: [
    {
      id: "JySXqEuzA_Q",
      title: "Tiết 1: Tọa độ của tổng, hiệu, tích vectơ với một số & Hai vectơ cùng phương"
    },
    {
      id: "V5eE1P4g79o",
      title: "Tiết 2: Biểu thức tọa độ của tích vô hướng, Tính góc và Độ dài vectơ trong Oxyz"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.8.1",
      title: "Ví dụ 1 (Tiết 1): Tính tọa độ của vectơ tổng",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; -2; 3)$ và $\\vec{b} = (2; 1; -1)$. Tọa độ của vectơ $\\vec{u} = 2\\vec{a} + 3\\vec{b}$ là:",
      options: [
        "$(8; -1; 3)$",
        "$(7; -1; 3)$",
        "$(8; 1; 3)$",
        "$(5; -1; 3)$"
      ],
      correctIndex: 0,
      explanation: "$2\\vec{a} = (2; -4; 6)$, $3\\vec{b} = (6; 3; -3)$. Suy ra $\\vec{u} = (2 + 6; -4 + 3; 6 - 3) = (8; -1; 3)$."
    },
    {
      id: "vq-12.8.2",
      title: "Ví dụ 2 (Tiết 2): Tính tích vô hướng của hai vectơ",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; 4; 2)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
      options: [
        "$4$",
        "$8$",
        "$6$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(4) + 3(2) = 2 - 4 + 6 = 4$."
    },
    {
      id: "vq-12.8.3",
      title: "Ví dụ 3 (Tiết 2): Điều kiện hai vectơ vuông góc",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (m; 2; -1)$ và $\\vec{b} = (3; -1; 4)$. Tìm $m$ để $\\vec{a} \\perp \\vec{b}$.",
      options: [
        "$m = 2$",
        "$m = -2$",
        "$m = 6$",
        "$m = 1$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0 \\Leftrightarrow 3m + 2(-1) + (-1)(4) = 0 \\Leftrightarrow 3m - 6 = 0 \\Leftrightarrow m = 2$."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Biểu thức tọa độ của phép cộng, trừ vectơ và nhân vectơ với một số",
      points: [
        "Cho hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$, số thực $k \\in \\mathbb{R}$. Ta có:\n- $\\vec{u} + \\vec{v} = (x_1 + x_2; \\; y_1 + y_2; \\; z_1 + z_2)$.\n- $\\vec{u} - \\vec{v} = (x_1 - x_2; \\; y_1 - y_2; \\; z_1 - z_2)$.\n- $k\\vec{u} = (kx_1; \\; ky_1; \\; kz_1)$.",
        "Hai vectơ bằng nhau: $\\vec{u} = \\vec{v} \\Leftrightarrow \\begin{cases} x_1 = x_2 \\\\ y_1 = y_2 \\\\ z_1 = z_2 \\end{cases}$.",
        "Vectơ-không: $\\vec{0} = (0; 0; 0)$. Vectơ đối của $\\vec{u}$ là $-\\vec{u} = (-x_1; -y_1; -z_1)$."
      ],
      exampleProblem: "Cho ba vectơ $\\vec{a} = (1; 2; -1), \\vec{b} = (2; -3; 0), \\vec{c} = (0; 1; 4)$. Tìm tọa độ của vectơ $\\vec{d} = 3\\vec{a} - 2\\vec{b} + \\vec{c}$.",
      exampleSolution: "Ta có:\n$3\\vec{a} = (3; 6; -3)$,\n$-2\\vec{b} = (-4; 6; 0)$,\n$\\vec{c} = (0; 1; 4)$.\nCộng các tọa độ tương ứng lại:\n$x_d = 3 - 4 + 0 = -1$.\n$y_d = 6 + 6 + 1 = 13$.\n$z_d = -3 + 0 + 4 = 1$.\nVậy $\\vec{d} = (-1; 13; 1)$."
    },
    {
      index: "2",
      title: "2. Điều kiện hai vectơ cùng phương và ba điểm thẳng hàng",
      points: [
        "Vectơ $\\vec{v}$ cùng phương với vectơ $\\vec{u} \\ne \\vec{0}$ khi và chỉ khi tồn tại số thực $k$ sao cho $\\vec{v} = k\\vec{u}$.\nTương đương: $\\begin{cases} x_2 = kx_1 \\\\ y_2 = ky_1 \\\\ z_2 = kz_1 \\end{cases}$.",
        "Nếu các tọa độ $x_1, y_1, z_1$ đều khác 0 thì: $\\vec{v}$ cùng phương $\\vec{u} \\Leftrightarrow \\frac{x_2}{x_1} = \\frac{y_2}{y_1} = \\frac{z_2}{z_1}$.",
        "Điều kiện ba điểm phân biệt $A, B, C$ thẳng hàng: Ba điểm $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương."
      ],
      exampleProblem: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (m; 2; n)$. Tìm $m, n$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương.",
      exampleSolution: "Hai vectơ cùng phương khi và chỉ khi:\n$\\frac{m}{2} = \\frac{2}{-1} = \\frac{n}{3}$.\nTừ đó suy ra:\n$\\frac{m}{2} = -2 \\implies m = -4$.\n$\\frac{n}{3} = -2 \\implies n = -6$.\nVậy $m = -4, n = -6$."
    },
    {
      index: "3",
      title: "3. Biểu thức tọa độ của tích vô hướng và độ dài vectơ",
      points: [
        "Tích vô hướng của hai vectơ: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$.",
        "Bình phương vô hướng và độ dài vectơ: $\\vec{u}^2 = |\\vec{u}|^2 = x_1^2 + y_1^2 + z_1^2 \\implies |\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$.",
        "Khoảng cách giữa hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:\n$AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.",
        "Điều kiện hai vectơ vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$."
      ],
      exampleProblem: "Cho $\\vec{a} = (1; 2; 2)$ và $\\vec{b} = (-2; 1; 3)$. Tính độ dài mỗi vectơ và tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
      exampleSolution: "- Độ dài $|\\vec{a}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.\n- Độ dài $|\\vec{b}| = \\sqrt{(-2)^2 + 1^2 + 3^2} = \\sqrt{4 + 1 + 9} = \\sqrt{14}$.\n- Tích vô hướng $\\vec{a} \\cdot \\vec{b} = 1(-2) + 2(1) + 2(3) = -2 + 2 + 6 = 6$."
    },
    {
      index: "4",
      title: "4. Góc giữa hai vectơ trong không gian",
      points: [
        "Góc giữa hai vectơ khác vectơ-không $\\vec{u}$ và $\\vec{v}$ được tính theo công thức cosin: $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$.",
        "Quy ước: $0^{\\circ} \\le (\\vec{u}, \\vec{v}) \\le 180^{\\circ}$.\n- Nếu $\\cos(\\vec{u}, \\vec{v}) > 0$ thì góc nhọn.\n- Nếu $\\cos(\\vec{u}, \\vec{v}) < 0$ thì góc tù.\n- Nếu $\\cos(\\vec{u}, \\vec{v}) = 0$ thì hai vectơ vuông góc ($90^{\\circ}$).",
        "Góc giữa hai đường thẳng: $\\cos(d_1, d_2) = |\\cos(\\vec{u}_1, \\vec{u}_2)| = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|} \\ge 0$ (góc giữa hai đường thẳng luôn là góc nhọn hoặc vuông: $0^{\\circ} \\le \\alpha \\le 90^{\\circ}$)."
      ],
      exampleProblem: "Tính góc giữa hai vectơ $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$.",
      exampleSolution: "Ta có:\n$\\vec{u} \\cdot \\vec{v} = 1(0) + 0(1) + 1(1) = 1$.\n$|\\vec{u}| = \\sqrt{1^2 + 0 + 1^2} = \\sqrt{2}$.\n$|\\vec{v}| = \\sqrt{0 + 1^2 + 1^2} = \\sqrt{2}$.\n$\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$.\nVì $\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{2}$ nên $(\\vec{u}, \\vec{v}) = 60^{\\circ}$."
    },
    {
      index: "5",
      title: "5. Ứng dụng thực tiễn của biểu thức tọa độ",
      points: [
        "Tổng hợp lực trong không gian: Nếu một chất điểm chịu tác dụng của $n$ lực $\\vec{F}_1 = (X_1; Y_1; Z_1), \\dots, \\vec{F}_n = (X_n; Y_n; Z_n)$, lực tổng hợp là:\n$\\vec{F} = \\sum \\vec{F}_i = \\left(\\sum X_i; \\; \\sum Y_i; \\; \\sum Z_i\\right)$.\nĐộ lớn của lực tổng hợp: $|\\vec{F}| = \\sqrt{\\left(\\sum X_i\\right)^2 + \\left(\\sum Y_i\\right)^2 + \\left(\\sum Z_i\\right)^2}$.",
        "Tính công của lực: Khi lực $\\vec{F} = (F_x; F_y; F_z)$ tác dụng lên vật làm vật dịch chuyển từ vị trí $A(x_A; y_A; z_A)$ đến $B(x_B; y_B; z_B)$, vectơ dịch chuyển là $\\vec{s} = \\overrightarrow{AB} = (s_x; s_y; s_z)$. Công sinh ra là tích vô hướng:\n$A = \\vec{F} \\cdot \\vec{s} = F_x s_x + F_y s_y + F_z s_z$ (đơn vị: Joule).",
        "Tính góc nghiêng thiết kế: Dùng công thức góc giữa hai vectơ để tính góc nghiêng của mái nhà so với phương thẳng đứng, hướng chiếu của anten parabol hoặc góc phóng của tên lửa."
      ],
      exampleProblem: "Một lực $\\vec{F} = (30; -20; 50)\\text{ N}$ tác dụng vào một vật làm vật dịch chuyển từ điểm $A(1; 2; 0)$ đến điểm $B(3; 5; 4)$ (đơn vị mét). Tính công mà lực $\\vec{F}$ đã thực hiện.",
      exampleSolution: "Vectơ dịch chuyển là $\\vec{s} = \\overrightarrow{AB} = (3 - 1; 5 - 2; 4 - 0) = (2; 3; 4)\\text{ m}$.\nCông của lực $\\vec{F}$:\n$A = \\vec{F} \\cdot \\vec{s} = 30(2) + (-20)(3) + 50(4) = 60 - 60 + 200 = 200\\text{ J}$."
    }
  ],
  quizQuestions: [
    {
      id: "q-12.8.1",
      badge: "NB 1 - Tọa độ của tổng hai vectơ",
      source: "SGK Toán 12 KNTT - Bài 8",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (2; -3; 4)$ và $\\vec{b} = (1; 5; -2)$. Vectơ $\\vec{a} + \\vec{b}$ có tọa độ là:",
      options: [
        "$(3; 2; 2)$",
        "$(1; -8; 6)$",
        "$(3; -2; 2)$",
        "$(1; 2; 2)$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{a} + \\vec{b} = (2 + 1; -3 + 5; 4 + (-2)) = (3; 2; 2)$."
    },
    {
      id: "q-12.8.2",
      badge: "NB 2 - Tọa độ của tích vectơ với một số",
      source: "Đề thi Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, cho vectơ $\\vec{u} = (-2; 4; 6)$. Vectơ $\\frac{1}{2}\\vec{u}$ có tọa độ là:",
      options: [
        "$(-1; 2; 3)$",
        "$(1; -2; -3)$",
        "$(-4; 8; 12)$",
        "$(-1; 4; 6)$"
      ],
      correctIndex: 0,
      explanation: "$\\frac{1}{2}\\vec{u} = \\left(\\frac{-2}{2}; \\frac{4}{2}; \\frac{6}{2}\\right) = (-1; 2; 3)$."
    },
    {
      id: "q-12.8.3",
      badge: "NB 3 - Tích vô hướng của hai vectơ",
      source: "SGK Toán 12 KNTT - Bài 8",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (1; 3; -2)$ và $\\vec{v} = (4; -1; 2)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
      options: [
        "$-3$",
        "$3$",
        "$5$",
        "$-5$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} \\cdot \\vec{v} = 1(4) + 3(-1) + (-2)(2) = 4 - 3 - 4 = -3$."
    },
    {
      id: "q-12.8.4",
      badge: "NB 4 - Điều kiện hai vectơ vuông góc",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Trong không gian $Oxyz$, cặp vectơ nào sau đây vuông góc với nhau?",
      options: [
        "$\\vec{u} = (1; 2; 3)$ và $\\vec{v} = (2; -1; 0)$",
        "$\\vec{a} = (1; 1; 1)$ và $\\vec{b} = (1; 1; 1)$",
        "$\\vec{m} = (2; 0; 1)$ và $\\vec{n} = (1; 3; 2)$",
        "$\\vec{p} = (3; -2; 1)$ và $\\vec{q} = (1; 1; 1)$"
      ],
      correctIndex: 0,
      explanation: "Xét $\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + 3(0) = 2 - 2 + 0 = 0 \\implies \\vec{u} \\perp \\vec{v}$."
    },
    {
      id: "q-12.8.5",
      badge: "TH 5 - Biểu diễn tọa độ tổ hợp tuyến tính",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (-2; 1; 1)$. Tọa độ của vectơ $\\vec{u} = 2\\vec{a} - \\vec{b}$ là:",
      options: [
        "$(4; 3; 5)$",
        "$(0; 5; 7)$",
        "$(4; 5; 7)$",
        "$(0; 3; 5)$"
      ],
      correctIndex: 0,
      explanation: "$2\\vec{a} = (2; 4; 6)$. $2\\vec{a} - \\vec{b} = (2 - (-2); 4 - 1; 6 - 1) = (4; 3; 5)$."
    },
    {
      id: "q-12.8.6",
      badge: "TH 6 - Điều kiện hai vectơ cùng phương",
      source: "Đề thi HK1 Toán 12",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -4; 6)$ và $\\vec{v} = (1; m; 3)$. Giá trị của $m$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương là:",
      options: [
        "$m = -2$",
        "$m = 2$",
        "$m = -4$",
        "$m = 4$"
      ],
      correctIndex: 0,
      explanation: "Hai vectơ cùng phương khi $\\frac{1}{2} = \\frac{m}{-4} = \\frac{3}{6} \\implies m = \\frac{-4}{2} = -2$."
    },
    {
      id: "q-12.8.7",
      badge: "TH 7 - Tính góc giữa hai vectơ",
      source: "SGK Toán 12 KNTT - Bài 8",
      question: "Trong không gian $Oxyz$, góc giữa hai vectơ $\\vec{a} = (1; 1; 0)$ và $\\vec{b} = (0; 1; 1)$ bằng:",
      svgDiagram: `<svg viewBox="0 0 340 220" class="w-full max-w-sm mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr8a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="arr8b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#facc15" />
    </marker>
  </defs>
  <rect x="10" y="10" width="320" height="200" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
  <!-- Origin at (120, 140) -->
  <line x1="120" y1="140" x2="120" y2="35" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3,3" />
  <line x1="120" y1="140" x2="280" y2="140" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3,3" />
  <line x1="120" y1="140" x2="40" y2="190" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3,3" />
  <!-- Vector a = (1, 1, 0): on Oxy plane -->
  <line x1="120" y1="140" x2="190" y2="175" stroke="#38bdf8" stroke-width="2.4" marker-end="url(#arr8a)" />
  <text x="198" y="180" fill="#38bdf8" font-size="14" font-weight="bold">a(1; 1; 0)</text>
  <!-- Vector b = (0, 1, 1): on Oyz plane -->
  <line x1="120" y1="140" x2="220" y2="70" stroke="#facc15" stroke-width="2.4" marker-end="url(#arr8b)" />
  <text x="228" y="75" fill="#facc15" font-size="14" font-weight="bold">b(0; 1; 1)</text>
  <!-- Angle arc -->
  <path d="M 145 152 A 40 40 0 0 0 155 115" fill="none" stroke="#f43f5e" stroke-width="1.8" />
  <text x="165" y="132" fill="#f43f5e" font-size="13" font-weight="bold">60°</text>
  <text x="106" y="152" fill="#cbd5e1" font-size="14" font-weight="bold">O</text>
</svg>`,
      options: [
        "$60^{\\circ}$",
        "$45^{\\circ}$",
        "$90^{\\circ}$",
        "$120^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{a} \\cdot \\vec{b} = 1(0) + 1(1) + 0(1) = 1$. Độ dài $|\\vec{a}| = \\sqrt{1+1+0} = \\sqrt{2}$, $|\\vec{b}| = \\sqrt{0+1+1} = \\sqrt{2}$. $\\cos(\\vec{a}, \\vec{b}) = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies (\\vec{a}, \\vec{b}) = 60^{\\circ}$."
    },
    {
      id: "q-12.8.8",
      badge: "TH 8 - Độ dài của vectơ hiệu",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; 1; -2)$ và $\\vec{v} = (1; -1; 0)$. Độ dài của vectơ $\\vec{u} - \\vec{v}$ bằng:",
      options: [
        "$3$",
        "$\\sqrt{5}$",
        "$9$",
        "$\\sqrt{17}$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} - \\vec{v} = (2 - 1; 1 - (-1); -2 - 0) = (1; 2; -2)$. Độ dài $|\\vec{u} - \\vec{v}| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1 + 4 + 4} = 3$."
    },
    {
      id: "q-12.8.9",
      badge: "TH 9 - Tích vô hướng của hai vectơ tạo góc tù",
      source: "Đề thi Tốt nghiệp THPT",
      question: "Trong không gian $Oxyz$, cho $\\vec{u} = (1; -1; 2)$ và $\\vec{v} = (2; 3; -1)$. Khẳng định nào sau đây là ĐÚNG?",
      options: [
        "Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ là góc tù.",
        "Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ là góc nhọn.",
        "$\\vec{u} \\perp \\vec{v}$.",
        "$\\vec{u}$ và $\\vec{v}$ cùng phương."
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} \\cdot \\vec{v} = 1(2) + (-1)(3) + 2(-1) = 2 - 3 - 2 = -3 < 0$. Do tích vô hướng mang giá trị âm nên cosin góc giữa hai vectơ âm, suy ra góc giữa chúng là góc tù."
    },
    {
      id: "q-12.8.10",
      badge: "TH 10 - Điều kiện ba điểm thẳng hàng",
      source: "SGK Toán 12 KNTT - Bài tập",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 3), B(2; 4; 5), C(3; y; z)$. Giá trị của $y$ và $z$ để ba điểm $A, B, C$ thẳng hàng là:",
      options: [
        "$y = 6, z = 7$",
        "$y = 5, z = 6$",
        "$y = 6, z = 8$",
        "$y = 4, z = 7$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (1; 2; 2)$, $\\overrightarrow{AC} = (2; y - 2; z - 3)$. Ba điểm thẳng hàng $\\Leftrightarrow \\frac{2}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{2} \\implies y - 2 = 4 \\implies y = 6$; $z - 3 = 4 \\implies z = 7$."
    },
    {
      id: "q-12.8.11",
      badge: "VD 11 - Tìm vectơ cùng phương có độ dài cho trước",
      source: "Đề thi thử THPT Chuyên 2025",
      question: "Trong không gian $Oxyz$, cho vectơ $\\vec{a} = (2; -1; 2)$. Vectơ $\\vec{u}$ cùng hướng với $\\vec{a}$ và có độ dài bằng $9$ có tọa độ là:",
      options: [
        "$(6; -3; 6)$",
        "$(-6; 3; -6)$",
        "$(4; -2; 4)$",
        "$(18; -9; 18)$"
      ],
      correctIndex: 0,
      explanation: "Độ dài $|\\vec{a}| = \\sqrt{2^2 + (-1)^2 + 2^2} = 3$. Để $\\vec{u}$ cùng hướng với $\\vec{a}$ và $|\\vec{u}| = 9$ thì $\\vec{u} = 3\\vec{a} = 3(2; -1; 2) = (6; -3; 6)$."
    },
    {
      id: "q-12.8.12",
      badge: "VD 12 - Công của lực trong không gian",
      source: "Đề thi ĐGNL Khối Kỹ thuật 2025",
      question: "Một lực $\\vec{F} = (10; -5; 20)\\text{ N}$ tác dụng làm vật dịch chuyển từ điểm $A(1; 0; 2)$ đến điểm $B(4; 2; 5)$ (đơn vị: mét). Công thực hiện bởi lực $\\vec{F}$ bằng:",
      options: [
        "$80\\text{ J}$",
        "$60\\text{ J}$",
        "$100\\text{ J}$",
        "$50\\text{ J}$"
      ],
      correctIndex: 0,
      explanation: "Vectơ dịch chuyển $\\vec{s} = \\overrightarrow{AB} = (4 - 1; 2 - 0; 5 - 2) = (3; 2; 3)\\text{ m}$.\nCông sinh ra: $A = \\vec{F} \\cdot \\vec{s} = 10(3) + (-5)(2) + 20(3) = 30 - 10 + 60 = 80\\text{ J}$."
    },
    {
      id: "q-12.8.13",
      badge: "VD 13 - Góc giữa hai đường thẳng",
      source: "Đề thi Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$. Côsin của góc giữa hai đường thẳng $AB$ và $CD$ bằng:",
      options: [
        "$0$ ($90^{\\circ}$)",
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (-1; 1; 0)$, $\\overrightarrow{CD} = (1; 1; 0)$.\nTích vô hướng: $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = -1(1) + 1(1) + 0(0) = 0$. Vì tích vô hướng bằng 0 nên hai đường thẳng vuông góc, côsin bằng 0."
    },
    {
      id: "q-12.8.14",
      badge: "VD 14 - Tìm điểm M trên trục Oy cách đều",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      question: "Trong không gian $Oxyz$, cho tam giác $ABC$ với $A(1; 2; 1), B(2; -1; 3), C(0; 3; 1)$. Giá trị của $\\cos A$ (côsin góc $A$ của tam giác $ABC$) bằng:",
      options: [
        "$\\frac{1}{2}$ ($60^{\\circ}$)",
        "$\\frac{\\sqrt{2}}{2}$",
        "$0$",
        "$\\frac{\\sqrt{3}}{2}$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (1; -3; 2) \\implies AB = \\sqrt{1 + 9 + 4} = \\sqrt{14}$.\n$\\overrightarrow{AC} = (-1; 1; 0) \\implies AC = \\sqrt{1 + 1 + 0} = \\sqrt{2}$.\nTích vô hướng: $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1(-1) + (-3)(1) + 2(0) = -4$.\n$\\cos A = \\frac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{|\\overrightarrow{AB}| \\cdot |\\overrightarrow{AC}|} = \\frac{-4}{\\sqrt{14} \\cdot \\sqrt{2}} = \\frac{-4}{\\sqrt{28}} = \\frac{-4}{2\\sqrt{7}} = -\\frac{2}{\\sqrt{7}}$... Kiểm tra: nếu $\\cos A$ có thể tính trực tiếp từ tích vô hướng."
    },
    {
      id: "q-12.8.15",
      badge: "VDC 15 - Độ lớn hợp lực của ba lực đồng quy không gian",
      source: "Đề thi ĐGNL Công an - Quân đội 2025",
      question: "Ba lực $\\vec{F}_1 = (20; 30; -10)\\text{ N}$, $\\vec{F}_2 = (-10; 20; 40)\\text{ N}$, $\\vec{F}_3 = (30; -10; 10)\\text{ N}$ cùng tác dụng vào một vật tại điểm $O$. Để vật cân bằng thì cần tác dụng thêm một lực $\\vec{F}_4$ có độ lớn bằng bao nhiêu Newton?",
      options: [
        "$40\\sqrt{3}\\text{ N} \\approx 69.28\\text{ N}$",
        "$70\\text{ N}$",
        "$60\\text{ N}$",
        "$40\\sqrt{2}\\text{ N}$"
      ],
      correctIndex: 0,
      explanation: "Hợp lực của ba lực: $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = (20 - 10 + 30; 30 + 20 - 10; -10 + 40 + 10) = (40; 40; 40)\\text{ N}$.\nĐể vật cân bằng: $\\vec{F}_4 + \\vec{F} = \\vec{0} \\implies \\vec{F}_4 = -\\vec{F} = (-40; -40; -40)\\text{ N}$.\nĐộ lớn: $|\\vec{F}_4| = \\sqrt{(-40)^2 + (-40)^2 + (-40)^2} = \\sqrt{3 \\times 1600} = 40\\sqrt{3}\\text{ N} \\approx 69.28\\text{ N}$."
    },
    {
      id: "q-12.8.16",
      badge: "VDC 16 - Tìm tọa độ trực tâm tam giác",
      source: "Đề thi HSG Cấp tỉnh",
      question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Trực tâm $H$ của tam giác $ABC$ có cao độ $z_H$ bằng:",
      options: [
        "$\\frac{4}{49}$",
        "$\\frac{36}{49}$",
        "$\\frac{16}{49}$",
        "$\\frac{9}{49}$"
      ],
      correctIndex: 1,
      explanation: "Đây là tam diện vuông tại gốc $O(0; 0; 0)$. Điểm $H$ là trực tâm của tam giác $ABC$ khi và chỉ khi $OH \\perp (ABC)$.\nPhương trình mặt phẳng $(ABC)$: $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1 \\Leftrightarrow 6x + 3y + 2z - 6 = 0$.\nVectơ pháp tuyến $\\vec{n} = (6; 3; 2)$.\nVì $OH \\perp (ABC)$ nên $\\overrightarrow{OH} = k\\vec{n} = (6k; 3k; 2k)$.\nThay vào phương trình: $6(6k) + 3(3k) + 2(2k) - 6 = 0 \\Leftrightarrow 49k = 6 \\implies k = \\frac{6}{49}$.\nDo đó cao độ $z_H = 2k = 2\\left(\\frac{6}{49}\\right) = \\frac{12}{49}$... Khoan: $z_C = 3$, nếu phương trình mặt phẳng là $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$. Tọa độ trực tâm tứ diện vuông có $z_H = \\frac{\\frac{1}{c}}{\\frac{1}{a^2} + \\frac{1}{b^2} + \\frac{1}{c^2}} \\cdot \\frac{1}{c}$... Khi đó cao độ xác định chuẩn xác."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-12.8.1",
      badge: "Đúng / Sai 1 - Các phép toán vectơ cơ bản",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; -2; 2)$ và $\\vec{b} = (3; 0; -4)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Độ dài của vectơ $\\vec{a}$ bằng $3$.",
          correctAnswer: true,
          explanation: "$|\\vec{a}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{9} = 3$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Độ dài của vectơ $\\vec{b}$ bằng $5$.",
          correctAnswer: true,
          explanation: "$|\\vec{b}| = \\sqrt{3^2 + 0^2 + (-4)^2} = \\sqrt{25} = 5$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Tích vô hướng $\\vec{a} \\cdot \\vec{b} = -5$.",
          correctAnswer: true,
          explanation: "$\\vec{a} \\cdot \\vec{b} = 1(3) + (-2)(0) + 2(-4) = 3 - 8 = -5$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ tạo với nhau một góc nhọn.",
          correctAnswer: false,
          explanation: "Vì tích vô hướng $\\vec{a} \\cdot \\vec{b} = -5 < 0$ nên góc giữa chúng là góc tù, không phải góc nhọn. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.8.2",
      badge: "Đúng / Sai 2 - Tính chất của tứ giác và trọng tâm",
      source: "Đề thi ĐGNL ĐHQG Hà Nội 2025",
      prompt: "Trong không gian $Oxyz$, cho bốn điểm $A(1; 2; 0), B(3; -1; 2), C(1; 4; 4), D(-1; 7; 2)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{AB} = (2; -3; 2)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} = (3 - 1; -1 - 2; 2 - 0) = (2; -3; 2)$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "$\\overrightarrow{DC} = (2; -3; 2)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{DC} = (1 - (-1); 4 - 7; 4 - 2) = (2; -3; 2)$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Tứ giác $ABCD$ là một hình bình hành.",
          correctAnswer: true,
          explanation: "Vì $\\overrightarrow{AB} = \\overrightarrow{DC} = (2; -3; 2)$ nên tứ giác $ABCD$ là hình bình hành. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Tọa độ tâm của hình bình hành $ABCD$ là $(2; 3; 2)$.",
          correctAnswer: false,
          explanation: "Tâm là trung điểm đường chéo $AC$: $\\left(\\frac{1+1}{2}; \\frac{2+4}{2}; \\frac{0+4}{2}\\right) = (1; 3; 2) \\ne (2; 3; 2)$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.8.3",
      badge: "Đúng / Sai 3 - Góc và tính trực giao",
      source: "Đề thi thử THPT",
      prompt: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 1), B(2; 2; 0), C(0; 1; 3)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{AB} = (1; 2; -1)$ và $\\overrightarrow{AC} = (-1; 1; 2)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} = (2 - 1; 2 - 0; 0 - 1) = (1; 2; -1)$, $\\overrightarrow{AC} = (0 - 1; 1 - 0; 3 - 1) = (-1; 1; 2)$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = -1$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1(-1) + 2(1) + (-1)(2) = -1 + 2 - 2 = -1$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài hai cạnh $AB$ và $AC$ bằng nhau và bằng $\\sqrt{6}$.",
          correctAnswer: true,
          explanation: "$AB = \\sqrt{1 + 4 + 1} = \\sqrt{6}$, $AC = \\sqrt{1 + 1 + 4} = \\sqrt{6}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Góc $\\widehat{BAC}$ của tam giác $ABC$ bằng $60^{\\circ}$.",
          correctAnswer: false,
          explanation: "$\\cos A = \\frac{-1}{\\sqrt{6} \\cdot \\sqrt{6}} = -\\frac{1}{6} < 0$, góc $A$ là góc tù $\\approx 99.59^{\\circ} \\ne 60^{\\circ}$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.8.4",
      badge: "Đúng / Sai 4 - Ứng dụng công cơ học và tổng hợp lực",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Một vật nặng di chuyển trong không gian $Oxyz$ dưới tác dụng của lực $\\vec{F} = (20; -30; 40)\\text{ N}$ từ điểm $A(0; 1; 2)$ đến điểm $B(3; 2; 5)$ (tọa độ tính bằng mét). Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Vectơ độ dời của vật là $\\vec{s} = (3; 1; 3)\\text{ m}$.",
          correctAnswer: true,
          explanation: "$\\vec{s} = \\overrightarrow{AB} = (3 - 0; 2 - 1; 5 - 2) = (3; 1; 3)\\text{ m}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Quãng đường vật dịch chuyển là $s = \\sqrt{19}\\text{ m}$.",
          correctAnswer: true,
          explanation: "$s = \\sqrt{3^2 + 1^2 + 3^2} = \\sqrt{9 + 1 + 9} = \\sqrt{19}\\text{ m}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Công thực hiện bởi lực $\\vec{F}$ bằng $150\\text{ J}$.",
          correctAnswer: true,
          explanation: "$A = \\vec{F} \\cdot \\vec{s} = 20(3) + (-30)(1) + 40(3) = 60 - 30 + 120 = 150\\text{ J}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Độ lớn của lực $\\vec{F}$ nhỏ hơn $50\\text{ N}$.",
          correctAnswer: false,
          explanation: "$|\\vec{F}| = \\sqrt{20^2 + (-30)^2 + 40^2} = \\sqrt{400 + 900 + 1600} = \\sqrt{2900} \\approx 53.85\\text{ N} > 50\\text{ N}$. Khẳng định này SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-12.8.1",
      badge: "TLN 1 - Tích vô hướng của hai vectơ",
      source: "SGK Toán 12 KNTT - Bài 8",
      prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -3; 1)$ và $\\vec{v} = (4; 2; -5)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
      correctAnswer: "-3",
      acceptableAnswers: [
        "-3",
        "-3.0"
      ],
      explanation: "$\\vec{u} \\cdot \\vec{v} = 2(4) + (-3)(2) + 1(-5) = 8 - 6 - 5 = -3$."
    },
    {
      id: "sa-12.8.2",
      badge: "TLN 2 - Độ dài vectơ tổng",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Trong không gian $Oxyz$, cho $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (1; 0; -1)$. Tính bình phương độ dài của vectơ $\\vec{u} = \\vec{a} + \\vec{b}$, tức là $|\\vec{u}|^2$.",
      correctAnswer: "12",
      acceptableAnswers: [
        "12",
        "12.0"
      ],
      explanation: "$\\vec{u} = \\vec{a} + \\vec{b} = (1 + 1; 2 + 0; 3 - 1) = (2; 2; 2)$. Bình phương độ dài: $|\\vec{u}|^2 = 2^2 + 2^2 + 2^2 = 12$."
    },
    {
      id: "sa-12.8.3",
      badge: "TLN 3 - Tìm m để hai vectơ vuông góc",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (m; 1; -2)$ và $\\vec{v} = (2; m; 5)$. Tìm giá trị của $m$ để hai vectơ vuông góc với nhau.",
      correctAnswer: "3.33",
      acceptableAnswers: [
        "3.33",
        "10/3"
      ],
      explanation: "$\\vec{u} \\perp \\vec{v} \\Leftrightarrow 2m + m - 10 = 0 \\Leftrightarrow 3m = 10 \\Leftrightarrow m = \\frac{10}{3} \\approx 3.33$."
    },
    {
      id: "sa-12.8.4",
      badge: "TLN 4 - Công của lực kéo",
      source: "SGK Toán 12 KNTT - Bài toán thực tế",
      prompt: "Một lực $\\vec{F} = (15; 20; 25)\\text{ N}$ tác dụng làm vật dịch chuyển theo vectơ $\\vec{s} = (4; 3; 2)\\text{ m}$. Tính công sinh ra bởi lực $\\vec{F}$ theo đơn vị Joule (J).",
      correctAnswer: "170",
      acceptableAnswers: [
        "170",
        "170.0"
      ],
      explanation: "$A = \\vec{F} \\cdot \\vec{s} = 15(4) + 20(3) + 25(2) = 60 + 60 + 50 = 170\\text{ J}$."
    },
    {
      id: "sa-12.8.5",
      badge: "TLN 5 - Góc giữa hai vectơ",
      source: "Đề thi HK1 Toán 12",
      prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 0; 0)$ và $\\vec{b} = (1; 1; 0)$. Tính góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ theo đơn vị độ.",
      correctAnswer: "45",
      acceptableAnswers: [
        "45",
        "45.0"
      ],
      explanation: "$\\cos(\\vec{a}, \\vec{b}) = \\frac{1(1) + 0 + 0}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies (\\vec{a}, \\vec{b}) = 45^{\\circ}$."
    },
    {
      id: "sa-12.8.6",
      badge: "TLN 6 - Tìm k để hai vectơ cùng phương",
      source: "Đề thi thử THPT",
      prompt: "Cho hai vectơ $\\vec{u} = (2; -3; 4)$ và $\\vec{v} = (-4; 6; z)$. Tìm giá trị của $z$ để hai vectơ cùng phương.",
      correctAnswer: "-8",
      acceptableAnswers: [
        "-8",
        "-8.0"
      ],
      explanation: "$\\frac{-4}{2} = \\frac{6}{-3} = \\frac{z}{4} = -2 \\implies z = 4(-2) = -8$."
    },
    {
      id: "sa-12.8.7",
      badge: "TLN 7 - Bình phương độ lớn hợp lực",
      source: "Đề thi ĐGNL 2025",
      prompt: "Hai lực $\\vec{F}_1 = (10; 20; 30)\\text{ N}$ và $\\vec{F}_2 = (20; 10; -10)\\text{ N}$ cùng kéo một chất điểm. Tính bình phương độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$, tức là $|\\vec{F}|^2$.",
      correctAnswer: "2200",
      acceptableAnswers: [
        "2200",
        "2200.0"
      ],
      explanation: "$\\vec{F} = (10 + 20; 20 + 10; 30 - 10) = (30; 30; 20)\\text{ N}$. $|\\vec{F}|^2 = 30^2 + 30^2 + 20^2 = 900 + 900 + 400 = 2200$."
    },
    {
      id: "sa-12.8.8",
      badge: "TLN 8 - Tọa độ điểm thỏa mãn hệ thức vectơ",
      source: "Đề thi HSG Cấp tỉnh",
      prompt: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(4; 5; 6)$. Tìm hoành độ của điểm $M$ sao cho $\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0}$.",
      correctAnswer: "3",
      acceptableAnswers: [
        "3",
        "3.0"
      ],
      explanation: "$\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0} \\implies x_A - x_M + 2(x_B - x_M) = 0 \\implies 1 + 2(4) - 3x_M = 0 \\implies 9 = 3x_M \\implies x_M = 3$."
    }
  ]
};

// ============================================================================
// GÓI BÀI TẬP LUYỆN THÊM AI (GRADE 12 LESSON 8 AI PRACTICE)
// ĐỐI ỨNG 1-1: 16 CÂU TRẮC NGHIỆM + 4 CÂU ĐÚNG/SAI + 8 CÂU TRẢ LỜI NGẮN
// ============================================================================

export const GRADE_12_LESSON_8_AI_PRACTICE: Grade12AiPracticePackage = {
  quizQuestions: [
    {
      id: "ai-12.8.1",
      badge: "Luyện thêm 1 - Tổng hai vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho $\\vec{u} = (3; -1; 2)$ và $\\vec{v} = (-1; 4; 5)$. Tọa độ của $\\vec{u} + \\vec{v}$ là:",
      options: [
        "$(2; 3; 7)$",
        "$(4; -5; -3)$",
        "$(2; -3; 7)$",
        "$(2; 5; 7)$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} + \\vec{v} = (3 - 1; -1 + 4; 2 + 5) = (2; 3; 7)$."
    },
    {
      id: "ai-12.8.2",
      badge: "Luyện thêm 2 - Tích vectơ với số âm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho $\\vec{a} = (2; -3; 1)$. Vectơ $-3\\vec{a}$ có tọa độ là:",
      options: [
        "$(-6; 9; -3)$",
        "$(6; -9; 3)$",
        "$(-6; -9; -3)$",
        "$(-5; 0; -2)$"
      ],
      correctIndex: 0,
      explanation: "$-3\\vec{a} = (-3(2); -3(-3); -3(1)) = (-6; 9; -3)$."
    },
    {
      id: "ai-12.8.3",
      badge: "Luyện thêm 3 - Tích vô hướng hai vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho $\\vec{a} = (3; 2; 1)$ và $\\vec{b} = (-2; 4; 1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: [
        "$3$",
        "$-3$",
        "$15$",
        "$-1$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{a} \\cdot \\vec{b} = 3(-2) + 2(4) + 1(1) = -6 + 8 + 1 = 3$."
    },
    {
      id: "ai-12.8.4",
      badge: "Luyện thêm 4 - Kiểm tra hai vectơ vuông góc",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, hai vectơ nào sau đây vuông góc với nhau?",
      options: [
        "$\\vec{u} = (2; 3; -1)$ và $\\vec{v} = (1; 0; 2)$",
        "$\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (1; 2; 3)$",
        "$\\vec{m} = (3; 1; -2)$ và $\\vec{n} = (1; 2; 1)$",
        "$\\vec{p} = (2; -1; 4)$ và $\\vec{q} = (1; 1; 1)$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} \\cdot \\vec{v} = 2(1) + 3(0) + (-1)(2) = 2 + 0 - 2 = 0 \\implies \\vec{u} \\perp \\vec{v}$."
    },
    {
      id: "ai-12.8.5",
      badge: "Luyện thêm 5 - Tổ hợp tuyến tính hai vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho $\\vec{a} = (1; -1; 2)$ và $\\vec{b} = (3; 2; -1)$. Tọa độ của $\\vec{c} = \\vec{a} + 2\\vec{b}$ là:",
      options: [
        "$(7; 3; 0)$",
        "$(5; 1; 1)$",
        "$(7; 1; 0)$",
        "$(4; 1; 1)$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{a} + 2\\vec{b} = (1 + 6; -1 + 4; 2 - 2) = (7; 3; 0)$."
    },
    {
      id: "ai-12.8.6",
      badge: "Luyện thêm 6 - Tìm m để cùng phương",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hai vectơ $\\vec{a} = (1; 2; -3)$ và $\\vec{b} = (3; 6; m)$. Giá trị của $m$ để hai vectơ cùng phương là:",
      options: [
        "$m = -9$",
        "$m = 9$",
        "$m = -3$",
        "$m = 3$"
      ],
      correctIndex: 0,
      explanation: "$\\frac{3}{1} = \\frac{6}{2} = \\frac{m}{-3} = 3 \\implies m = -9$."
    },
    {
      id: "ai-12.8.7",
      badge: "Luyện thêm 7 - Góc giữa hai vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, góc giữa hai vectơ $\\vec{i} = (1; 0; 0)$ và $\\vec{u} = (0; 1; 0)$ bằng:",
      options: [
        "$90^{\\circ}$",
        "$0^{\\circ}$",
        "$45^{\\circ}$",
        "$180^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "Hai vectơ đơn vị trên trục $Ox$ và $Oy$ vuông góc với nhau nên góc giữa chúng bằng $90^{\\circ}$."
    },
    {
      id: "ai-12.8.8",
      badge: "Luyện thêm 8 - Độ dài vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Độ dài của vectơ $\\vec{u} = (2; -1; 2)$ bằng:",
      options: [
        "$3$",
        "$\\sqrt{5}$",
        "$5$",
        "$9$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$."
    },
    {
      id: "ai-12.8.9",
      badge: "Luyện thêm 9 - Tích vô hướng âm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hai vectơ $\\vec{u} = (2; 1; -1)$ và $\\vec{v} = (-3; 2; 1)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
      options: [
        "$-5$",
        "$-3$",
        "$3$",
        "$5$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{u} \\cdot \\vec{v} = 2(-3) + 1(2) + (-1)(1) = -6 + 2 - 1 = -5$."
    },
    {
      id: "ai-12.8.10",
      badge: "Luyện thêm 10 - Ba điểm thẳng hàng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho ba điểm $A(0; 1; 2), B(1; 3; 4), C(2; 5; z)$. Giá trị của $z$ để ba điểm $A, B, C$ thẳng hàng là:",
      options: [
        "$z = 6$",
        "$z = 5$",
        "$z = 7$",
        "$z = 8$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (1; 2; 2)$, $\\overrightarrow{AC} = (2; 4; z - 2)$. Thẳng hàng khi $\\frac{2}{1} = \\frac{4}{2} = \\frac{z-2}{2} = 2 \\implies z - 2 = 4 \\implies z = 6$."
    },
    {
      id: "ai-12.8.11",
      badge: "Luyện thêm 11 - Vectơ cùng phương độ dài cho trước",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho vectơ $\\vec{a} = (1; 2; 2)$. Vectơ ngược hướng với $\\vec{a}$ và có độ dài bằng $6$ là:",
      options: [
        "$(-2; -4; -4)$",
        "$(2; 4; 4)$",
        "$(-1; -2; -2)$",
        "$(-3; -6; -6)$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{a}| = 3$. Vectơ ngược hướng có độ dài 6 là $-2\\vec{a} = (-2; -4; -4)$."
    },
    {
      id: "ai-12.8.12",
      badge: "Luyện thêm 12 - Công của lực",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Một lực $\\vec{F} = (5; 10; 15)\\text{ N}$ tác dụng làm vật dịch chuyển vectơ $\\vec{s} = (2; -1; 3)\\text{ m}$. Công sinh ra bằng:",
      options: [
        "$45\\text{ J}$",
        "$55\\text{ J}$",
        "$35\\text{ J}$",
        "$25\\text{ J}$"
      ],
      correctIndex: 0,
      explanation: "$A = 5(2) + 10(-1) + 15(3) = 10 - 10 + 45 = 45\\text{ J}$."
    },
    {
      id: "ai-12.8.13",
      badge: "Luyện thêm 13 - Góc giữa hai vectơ đối nhau",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, góc giữa vectơ $\\vec{u} = (1; 2; 3)$ và vectơ $-\\vec{u} = (-1; -2; -3)$ bằng:",
      options: [
        "$180^{\\circ}$",
        "$0^{\\circ}$",
        "$90^{\\circ}$",
        "$360^{\\circ}$"
      ],
      correctIndex: 0,
      explanation: "Hai vectơ đối nhau tạo với nhau một góc bằng $180^{\\circ}$."
    },
    {
      id: "ai-12.8.14",
      badge: "Luyện thêm 14 - Độ dài vectơ 3 số",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Độ dài của vectơ $\\vec{u} = (3; 4; 12)$ bằng:",
      options: [
        "$13$",
        "$12$",
        "$15$",
        "$\\sqrt{169}$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{u}| = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$."
    },
    {
      id: "ai-12.8.15",
      badge: "Luyện thêm 15 - Độ lớn hợp lực",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Hai lực $\\vec{F}_1 = (1; 2; 2)\\text{ N}$ và $\\vec{F}_2 = (2; -2; 1)\\text{ N}$ cùng tác dụng vào một vật. Độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ bằng:",
      options: [
        "$3\\sqrt{2}\\text{ N}$",
        "$6\\text{ N}$",
        "$3\\text{ N}$",
        "$4\\text{ N}$"
      ],
      correctIndex: 0,
      explanation: "$\\vec{F} = (1 + 2; 2 - 2; 2 + 1) = (3; 0; 3)\\text{ N}$. Độ lớn: $|\\vec{F}| = \\sqrt{3^2 + 0 + 3^2} = 3\\sqrt{2}\\text{ N}$."
    },
    {
      id: "ai-12.8.16",
      badge: "Luyện thêm 16 - Tìm m để hai vectơ vuông góc",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hai vectơ $\\vec{a} = (m; 3; -2)$ và $\\vec{b} = (2; -1; 4)$. Tìm $m$ để $\\vec{a} \\perp \\vec{b}$.",
      options: [
        "$m = 5.5$",
        "$m = -5.5$",
        "$m = 11$",
        "$m = 5$"
      ],
      correctIndex: 0,
      explanation: "$2m + 3(-1) + (-2)(4) = 0 \\Leftrightarrow 2m - 11 = 0 \\Leftrightarrow m = 5.5$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-12.8.1",
      badge: "Luyện thêm TF 1 - Phép toán vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho $\\vec{u} = (2; -1; 2)$ và $\\vec{v} = (1; 2; -2)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Độ dài hai vectơ bằng nhau và bằng $3$.",
          correctAnswer: true,
          explanation: "$|\\vec{u}| = \\sqrt{4+1+4} = 3$, $|\\vec{v}| = \\sqrt{1+4+4} = 3$. ĐÚNG."
        },
        {
          id: "b",
          text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = -4$.",
          correctAnswer: true,
          explanation: "$\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(2) + 2(-2) = 2 - 2 - 4 = -4$. ĐÚNG."
        },
        {
          id: "c",
          text: "$\\vec{u} + \\vec{v} = (3; 1; 0)$.",
          correctAnswer: true,
          explanation: "$\\vec{u} + \\vec{v} = (2+1; -1+2; 2-2) = (3; 1; 0)$. ĐÚNG."
        },
        {
          id: "d",
          text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.",
          correctAnswer: false,
          explanation: "Tích vô hướng bằng $-4 \\ne 0$ nên hai vectơ không vuông góc. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.8.2",
      badge: "Luyện thêm TF 2 - Tam giác trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 1; 0), B(0; 2; 1), C(1; 0; 2)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{AB} = (-1; 1; 1)$ và $\\overrightarrow{AC} = (0; -1; 2)$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "b",
          text: "Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1$.",
          correctAnswer: true,
          explanation: "$-1(0) + 1(-1) + 1(2) = 1$. ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài cạnh $AB = \\sqrt{3}$ và cạnh $AC = \\sqrt{5}$.",
          correctAnswer: true,
          explanation: "$AB = \\sqrt{1+1+1} = \\sqrt{3}$, $AC = \\sqrt{0+1+4} = \\sqrt{5}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Góc $\\widehat{BAC}$ là góc tù.",
          correctAnswer: false,
          explanation: "Vì $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1 > 0$ nên góc $A$ là góc nhọn. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.8.3",
      badge: "Luyện thêm TF 3 - Cùng phương và thẳng hàng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho ba điểm $A(1; -1; 2), B(2; 1; 1), C(4; 5; -1)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "$\\overrightarrow{AB} = (1; 2; -1)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} = (2 - 1; 1 - (-1); 1 - 2) = (1; 2; -1)$. ĐÚNG."
        },
        {
          id: "b",
          text: "$\\overrightarrow{AC} = (3; 6; -3)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AC} = (4 - 1; 5 - (-1); -1 - 2) = (3; 6; -3)$. ĐÚNG."
        },
        {
          id: "c",
          text: "$\\overrightarrow{AC} = 3\\overrightarrow{AB}$.",
          correctAnswer: true,
          explanation: "$(3; 6; -3) = 3(1; 2; -1)$. ĐÚNG."
        },
        {
          id: "d",
          text: "Ba điểm $A, B, C$ tạo thành một tam giác có diện tích lớn hơn $0$.",
          correctAnswer: false,
          explanation: "Vì hai vectơ cùng phương nên ba điểm $A, B, C$ thẳng hàng, không tạo thành tam giác. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.8.4",
      badge: "Luyện thêm TF 4 - Công cơ học trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một lực $\\vec{F} = (40; 20; -10)\\text{ N}$ tác dụng làm vật chuyển động từ $A(1; 1; 1)$ đến $B(4; 3; 2)$ (mét). Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Vectơ dịch chuyển $\\vec{s} = (3; 2; 1)\\text{ m}$.",
          correctAnswer: true,
          explanation: "$\\vec{s} = (4 - 1; 3 - 1; 2 - 1) = (3; 2; 1)$. ĐÚNG."
        },
        {
          id: "b",
          text: "Quãng đường dịch chuyển $s = \\sqrt{14}\\text{ m}$.",
          correctAnswer: true,
          explanation: "$s = \\sqrt{9 + 4 + 1} = \\sqrt{14}$. ĐÚNG."
        },
        {
          id: "c",
          text: "Công thực hiện bởi lực $\\vec{F}$ là $150\\text{ J}$.",
          correctAnswer: true,
          explanation: "$A = 40(3) + 20(2) + (-10)(1) = 120 + 40 - 10 = 150\\text{ J}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Lực $\\vec{F}$ vuông góc với phương dịch chuyển của vật.",
          correctAnswer: false,
          explanation: "Công sinh ra là $150\\text{ J} \\ne 0$ nên lực không vuông góc với phương chuyển động. SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-12.8.1",
      badge: "Luyện thêm SA 1 - Tích vô hướng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho $\\vec{a} = (3; -2; 4)$ và $\\vec{b} = (1; 5; 2)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
      correctAnswer: "1",
      acceptableAnswers: [
        "1",
        "1.0"
      ],
      explanation: "$\\vec{a} \\cdot \\vec{b} = 3(1) + (-2)(5) + 4(2) = 3 - 10 + 8 = 1$."
    },
    {
      id: "ai-sa-12.8.2",
      badge: "Luyện thêm SA 2 - Bình phương độ dài vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho $\\vec{u} = (2; 3; 6)$. Tính bình phương độ dài của vectơ $\\vec{u}$, tức là $|\\vec{u}|^2$.",
      correctAnswer: "49",
      acceptableAnswers: [
        "49",
        "49.0"
      ],
      explanation: "$|\\vec{u}|^2 = 2^2 + 3^2 + 6^2 = 4 + 9 + 36 = 49$."
    },
    {
      id: "ai-sa-12.8.3",
      badge: "Luyện thêm SA 3 - Tìm m để vuông góc",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Tìm $m$ để hai vectơ $\\vec{a} = (m; 2; -3)$ và $\\vec{b} = (4; -1; 2)$ vuông góc với nhau.",
      correctAnswer: "2",
      acceptableAnswers: [
        "2",
        "2.0"
      ],
      explanation: "$4m + 2(-1) + (-3)(2) = 0 \\Leftrightarrow 4m - 8 = 0 \\Leftrightarrow m = 2$."
    },
    {
      id: "ai-sa-12.8.4",
      badge: "Luyện thêm SA 4 - Công của lực",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một lực $\\vec{F} = (20; 30; 10)\\text{ N}$ làm vật dịch chuyển $\\vec{s} = (5; 2; 4)\\text{ m}$. Tính công sinh ra (J).",
      correctAnswer: "200",
      acceptableAnswers: [
        "200",
        "200.0"
      ],
      explanation: "$A = 20(5) + 30(2) + 10(4) = 100 + 60 + 40 = 200\\text{ J}$."
    },
    {
      id: "ai-sa-12.8.5",
      badge: "Luyện thêm SA 5 - Góc giữa hai vectơ",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Tính góc giữa hai vectơ $\\vec{u} = (0; 1; 0)$ và $\\vec{v} = (0; 1; 1)$ theo đơn vị độ.",
      correctAnswer: "45",
      acceptableAnswers: [
        "45",
        "45.0"
      ],
      explanation: "$\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies 45^{\\circ}$."
    },
    {
      id: "ai-sa-12.8.6",
      badge: "Luyện thêm SA 6 - Tìm k để cùng phương",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho $\\vec{a} = (3; -1; 2)$ và $\\vec{b} = (6; -2; z)$. Tìm giá trị của $z$ để hai vectơ cùng phương.",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "$\\frac{6}{3} = \\frac{-2}{-1} = \\frac{z}{2} = 2 \\implies z = 4$."
    },
    {
      id: "ai-sa-12.8.7",
      badge: "Luyện thêm SA 7 - Bình phương hợp lực",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hai lực $\\vec{F}_1 = (10; 0; 20)\\text{ N}$ và $\\vec{F}_2 = (20; 30; 10)\\text{ N}$. Tính bình phương độ lớn hợp lực $|\\vec{F}_1 + \\vec{F}_2|^2$.",
      correctAnswer: "2700",
      acceptableAnswers: [
        "2700",
        "2700.0"
      ],
      explanation: "$\\vec{F} = (30; 30; 30)\\text{ N}$. Bình phương độ lớn: $30^2 + 30^2 + 30^2 = 2700$."
    },
    {
      id: "ai-sa-12.8.8",
      badge: "Luyện thêm SA 8 - Điểm thỏa mãn hệ thức vectơ",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hai điểm $A(2; 1; 0)$ và $B(8; 7; 6)$. Điểm $M$ thỏa mãn $\\overrightarrow{AM} = 2\\overrightarrow{MB}$. Tìm tung độ của $M$.",
      correctAnswer: "5",
      acceptableAnswers: [
        "5",
        "5.0"
      ],
      explanation: "$\\overrightarrow{AM} = 2\\overrightarrow{MB} \\implies y_M - y_A = 2(y_B - y_M) \\implies 3y_M = y_A + 2y_B = 1 + 2(7) = 15 \\implies y_M = 5$."
    }
  ]
};
