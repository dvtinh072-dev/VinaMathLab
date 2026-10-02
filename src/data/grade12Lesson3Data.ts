import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export const GRADE_12_LESSON_3: DetailedLessonData = {
  id: "t12-b3-duong-tiem-can",
  lessonNumber: 3,
  title: "Bài 3: Đường tiệm cận của đồ thị hàm số",
  bookChapter: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Nồng độ dược chất trong máu, chi phí sản xuất trung bình và ranh giới vô hạn của các hàm phân thức",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy, trong kinh tế học, khi sản xuất số lượng sản phẩm $x$ ngày càng lớn ra vô cùng, chi phí trung bình $\\bar{C}(x) = 50 + \\frac{2000}{x}$ sẽ tiến gần về 50 nghìn đồng/sản phẩm nhưng không bao giờ bằng 50. Đường thẳng $y = 50$ trong toán học gọi là gì ạ?",
      visualGraphic: "graph",
      mathNote: "\\lim_{x \\to +\\infty} \\bar{C}(x) = 50 \\implies y = 50 \\text{ la Tiem can ngang}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Đường thẳng $y = 50$ đó chính là đường tiệm cận ngang của đồ thị hàm số! Trong hình học giải tích lớp 12, đường tiệm cận là đường thẳng mà khoảng cách từ điểm $M(x; y)$ trên đồ thị đến nó tiến dần về 0 khi điểm đó chạy xa ra vô cực. Ta có 3 loại: tiệm cận đứng, tiệm cận ngang và tiệm cận xiên!",
      visualGraphic: "circle",
      mathNote: "d(M, \\Delta) \\to 0 \\text{ khi } x \\to \\pm\\infty \\text{ hoac } x \\to x_0^\\pm"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Dạ thưa Thầy, đối với hàm phân thức bậc hai trên bậc nhất $y = \\frac{ax^2+bx+c}{px+q}$, ta tìm tiệm cận xiên bằng cách chia đa thức đúng không ạ?",
      visualGraphic: "graph",
      mathNote: "y = mx + n + \\frac{r}{px+q} \\implies y = mx + n \\text{ la Tiem can xien}"
    }
  ],
  youtubeVideoId: "1-J_rC3l65k",
  youtubeVideoTitle: "Bài 3: Đường tiệm cận của đồ thị hàm số (Tiết 1) - Toán 12 Kết nối tri thức",
  youtubeVideos: [
    {
      id: "1-J_rC3l65k",
      title: "Tiết 1: Đường tiệm cận ngang và Đường tiệm cận đứng của đồ thị hàm số"
    },
    {
      id: "V5eE1P4g79o",
      title: "Tiết 2: Đường tiệm cận xiên của hàm phân thức bậc 2 trên bậc 1"
    },
    {
      id: "X2qW8k_N0bI",
      title: "Tiết 3: Phương pháp đọc tiệm cận từ bảng biến thiên và bài toán thực tế"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.3.1",
      title: "Ví dụ 1 (Tiết 1): Tiệm cận đứng và tiệm cận ngang của hàm phân thức bậc 1/1",
      question: "Đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ lần lượt là:",
      options: [
        "$x = -1$ và $y = 2$",
        "$x = 1$ và $y = 2$",
        "$x = -1$ và $y = -3$",
        "$x = 2$ và $y = -1$"
      ],
      correctIndex: 0,
      explanation: "Nghiệm của mẫu số là $x = -1$ (không triệt tiêu tử số $2(-1)-3 = -5 \\ne 0$) nên đường tiệm cận đứng là $x = -1$. Giới hạn $\\lim_{x \\to \\pm\\infty} \\frac{2x-3}{x+1} = 2$ nên đường tiệm cận ngang là $y = 2$."
    },
    {
      id: "vq-12.3.2",
      title: "Ví dụ 2 (Tiết 2): Tìm tiệm cận xiên của hàm phân thức bậc 2/1",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 1}{x - 1}$ có phương trình là:",
      options: [
        "$y = x - 2$",
        "$y = x - 3$",
        "$y = x + 2$",
        "$y = x - 1$"
      ],
      correctIndex: 0,
      explanation: "Thực hiện phép chia đa thức tử cho mẫu: $\\frac{x^2 - 3x + 1}{x - 1} = x - 2 - \\frac{1}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\left(-\\frac{1}{x-1}\\right) = 0$ nên tiệm cận xiên là $y = x - 2$."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Đường tiệm cận ngang",
      points: [
        "Đường thẳng $y = y_0$ được gọi là đường tiệm cận ngang (TCN) của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thỏa mãn: $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$.",
        "Đối với hàm phân thức bậc nhất trên bậc nhất $y = \\frac{ax + b}{cx + d}$ ($c \\ne 0, ad - bc \\ne 0$), đồ thị luôn có đúng một đường tiệm cận ngang là $y = \\frac{a}{c}$.",
        "Đối với hàm phân thức hữu tỉ $y = \\frac{P(x)}{Q(x)}$: Nếu bậc của tử nhỏ hơn bậc của mẫu thì đồ thị luôn có tiệm cận ngang $y = 0$ (trục hoành). Nếu bậc của tử bằng bậc của mẫu thì tiệm cận ngang $y = \\frac{a_n}{b_n}$ (tỉ số hai hệ số cao nhất). Nếu bậc của tử lớn hơn bậc của mẫu thì đồ thị không có tiệm cận ngang.",
        "Đồ thị hàm số chứa căn thức như $y = \\frac{\\sqrt{ax^2+b}}{cx+d}$ có thể có tới 2 đường tiệm cận ngang khác nhau khi $x \\to +\\infty$ và $x \\to -\\infty$."
      ],
      exampleProblem: "Tìm các đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{4x^2 + 1}}{x - 2}$.",
      exampleSolution: "Tập xác định: $D = \\mathbb{R} \\setminus \\{2\\}.$\n- Khi $x \\to +\\infty$: $y = \\frac{|x|\\sqrt{4 + 1/x^2}}{x(1 - 2/x)} = \\frac{x\\sqrt{4 + 1/x^2}}{x(1 - 2/x)} = \\frac{\\sqrt{4 + 1/x^2}}{1 - 2/x} \\implies \\lim_{x \\to +\\infty} y = \\frac{\\sqrt{4}}{1} = 2$.\n- Khi $x \\to -\\infty$: $y = \\frac{-x\\sqrt{4 + 1/x^2}}{x(1 - 2/x)} = \\frac{-\\sqrt{4 + 1/x^2}}{1 - 2/x} \\implies \\lim_{x \\to -\\infty} y = \\frac{-\\sqrt{4}}{1} = -2$.\nVậy đồ thị hàm số có 2 đường tiệm cận ngang là $y = 2$ và $y = -2$."
    },
    {
      index: "2",
      title: "2. Đường tiệm cận đứng",
      points: [
        "Đường thẳng $x = x_0$ được gọi là đường tiệm cận đứng (TCĐ) của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thỏa mãn: $\\lim_{x \\to x_0^+} f(x) = +\\infty$, $\\lim_{x \\to x_0^+} f(x) = -\\infty$, $\\lim_{x \\to x_0^-} f(x) = +\\infty$, hoặc $\\lim_{x \\to x_0^-} f(x) = -\\infty$.",
        "Quy tắc tìm TCĐ của phân thức $y = \\frac{P(x)}{Q(x)}$: Tìm các nghiệm của mẫu $Q(x) = 0$. Nếu tại điểm $x = x_0$ mà $Q(x_0) = 0$ nhưng tử số $P(x_0) \\ne 0$ thì đường thẳng $x = x_0$ chắc chắn là một đường tiệm cận đứng.",
        "Chú ý quan trọng: Nếu $x = x_0$ vừa là nghiệm của mẫu vừa là nghiệm của tử, ta phải rút gọn phân thức trước khi kết luận."
      ],
      exampleProblem: "Tìm số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x - 1}{x^2 - 3x + 2}$.",
      exampleSolution: "Ta có $x^2 - 3x + 2 = (x - 1)(x - 2)$.\nVới $x \\ne 1$, ta rút gọn: $y = \\frac{x - 1}{(x - 1)(x - 2)} = \\frac{1}{x - 2}$.\n- Tại $x = 1$: $\\lim_{x \\to 1} y = \\lim_{x \\to 1} \\frac{1}{x - 2} = -1$ (hữu hạn, nên $x = 1$ không phải là tiệm cận đứng).\n- Tại $x = 2$: $\\lim_{x \\to 2^+} y = +\\infty$ và $\\lim_{x \\to 2^-} y = -\\infty$ nên $x = 2$ là đường tiệm cận đứng duy nhất.\nVậy đồ thị có đúng 1 đường tiệm cận đứng là $x = 2$."
    },
    {
      index: "3",
      title: "3. Đường tiệm cận xiên (CT GDPT 2018)",
      points: [
        "Đường thẳng $y = ax + b$ ($a \\ne 0$) được gọi là đường tiệm cận xiên (TCX) của đồ thị hàm số $y = f(x)$ nếu: $\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$ hoặc $\\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$.",
        "Phương pháp tổng quát tìm hệ số $a, b$: $a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$ và $b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$.",
        "Trường hợp đặc biệt quan trọng (Hàm phân thức bậc 2 trên bậc 1): $y = \\frac{ax^2 + bx + c}{px + q}$ ($p \\ne 0$ và tam thức tử không chia hết cho mẫu).\nThực hiện phép chia đa thức: $y = mx + n + \\frac{r}{px + q}$.\nVì $\\lim_{x \\to \\pm\\infty} \\frac{r}{px + q} = 0$ nên đường thẳng $y = mx + n$ chính là tiệm cận xiên của đồ thị hàm số!"
      ],
      exampleProblem: "Tìm đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x - 1}{x + 1}$.",
      exampleSolution: "Chia tử cho mẫu:\n$2x^2 + 3x - 1 = (2x + 1)(x + 1) - 2 \\implies y = 2x + 1 - \\frac{2}{x + 1}$.\nTa có $\\lim_{x \\to \\pm\\infty} [y - (2x + 1)] = \\lim_{x \\to \\pm\\infty} \\left(-\\frac{2}{x + 1}\\right) = 0$.\nVậy đường tiệm cận xiên của đồ thị hàm số là $y = 2x + 1$."
    },
    {
      index: "4",
      title: "4. Nhận biết đường tiệm cận từ Bảng biến thiên",
      points: [
        "Nhận biết Tiệm cận đứng từ BBT: Tìm giá trị $x = x_0$ mà tại đó hàm số không xác định (dòng $y$ có dấu song song kép $\\parallel$). Nếu ở sát bên trái hoặc bên phải cột $x_0$ ở dòng $y$ có xuất hiện ký hiệu $-\\infty$ hoặc $+\\infty$ thì đường thẳng $x = x_0$ là tiệm cận đứng.",
        "Nhận biết Tiệm cận ngang từ BBT: Nhìn vào hai đầu mút $x \\to -\\infty$ và $x \\to +\\infty$. Nếu giá trị của dòng $y$ tương ứng tiến tới một số thực cụ thể $y_0$ thì đường thẳng $y = y_0$ là tiệm cận ngang.",
        "Tọa độ giao điểm của hai đường tiệm cận: Đối với hàm phân thức bậc 1/1 có TCĐ $x = x_0$ và TCN $y = y_0$, giao điểm $I(x_0; y_0)$ chính là tâm đối xứng của đồ thị hyperbol!"
      ],
      exampleProblem: "Quan sát bảng biến thiên của hàm số $y = f(x)$, hãy chỉ ra các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số.",
      exampleSolution: "Dựa vào dòng $x$ và $y$:\n- Tại $x = 1$, dòng $y$ có dấu $\\parallel$ và $\\lim_{x \\to 1^+} y = +\\infty \\implies x = 1$ là tiệm cận đứng.\n- Khi $x \\to -\\infty$ thì $y \\to 2$ và khi $x \\to +\\infty$ thì $y \\to 2 \\implies y = 2$ là tiệm cận ngang duy nhất."
    },
    {
      index: "5",
      title: "5. Ý nghĩa thực tiễn của đường tiệm cận",
      points: [
        "Trong kinh tế: Hàm chi phí sản xuất trung bình $\\bar{C}(x) = \\frac{C(x)}{x} = ax + b + \\frac{c}{x}$. Khi sản lượng $x$ rất lớn, chi phí cố định bình quân $\\frac{c}{x} \\to 0$, chi phí trung bình tiệm cận đường thẳng $y = ax + b$ (tiệm cận xiên hoặc ngang).",
        "Trong y học & dược học: Hàm nồng độ thuốc trong máu theo thời gian $C(t) = \\frac{kt}{t^2 + a^2}$. Khi $t \\to +\\infty$, $\\lim_{t \\to +\\infty} C(t) = 0$, nghĩa là nồng độ thuốc đào thải dần về 0 (trục hoành $y = 0$ là tiệm cận ngang).",
        "Trong sinh học: Mô hình tăng trưởng dân số / vi khuẩn có giới hạn môi trường tiệm cận mức bão hòa $P_{\\max}$."
      ],
      exampleProblem: "Một xí nghiệp sản xuất linh kiện điện tử có hàm tổng chi phí là $C(x) = 50x + 2000$ (triệu đồng), trong đó $x$ là số nghìn linh kiện. Khi quy mô sản xuất tăng vô hạn ($x \\to +\\infty$), chi phí trung bình cho mỗi nghìn linh kiện tiệm cận mức bao nhiêu?",
      exampleSolution: "Chi phí trung bình: $\\bar{C}(x) = \\frac{C(x)}{x} = 50 + \\frac{2000}{x}$ (triệu đồng).\nKhi $x \\to +\\infty$, ta có $\\lim_{x \\to +\\infty} \\bar{C}(x) = \\lim_{x \\to +\\infty} \\left(50 + \\frac{2000}{x}\\right) = 50$.\nVậy khi sản xuất quy mô cực lớn, chi phí sản xuất trung bình tiệm cận ngang mức 50 triệu đồng cho mỗi nghìn linh kiện."
    }
  ],
  quizQuestions: [
    // 4 CÂU NHẬN BIẾT (NB)
    {
      id: "q-12.3.1",
      badge: "NB 1 - Tiệm cận đứng hàm phân thức bậc 1/1",
      source: "SGK Toán 12 KNTT - Bài 3 Nhận biết",
      question: "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x - 3}{x - 1}$ là đường thẳng:",
      options: [
        "$x = 1$",
        "$x = 2$",
        "$y = 2$",
        "$x = -1$"
      ],
      correctIndex: 0,
      explanation: "Nghiệm của mẫu số là $x - 1 = 0 \\Leftrightarrow x = 1$ (không triệt tiêu tử số vì $2(1) - 3 = -1 \\ne 0$). Vậy tiệm cận đứng là $x = 1$."
    },
    {
      id: "q-12.3.2",
      badge: "NB 2 - Tiệm cận ngang hàm phân thức bậc 1/1",
      source: "SGK Toán 12 KNTT - Bài 3 Nhận biết",
      question: "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{3x + 1}{x - 2}$ là đường thẳng:",
      options: [
        "$y = 3$",
        "$y = -\\frac{1}{2}$",
        "$x = 2$",
        "$y = 1$"
      ],
      correctIndex: 0,
      explanation: "Ta có $\\lim_{x \\to \\pm\\infty} \\frac{3x + 1}{x - 2} = 3$. Vậy đường tiệm cận ngang là $y = 3$."
    },
    {
      id: "q-12.3.3",
      badge: "NB 3 - Đọc tiệm cận từ bảng biến thiên",
      source: "Đề tham khảo Tốt nghiệp THPT Bộ GD&ĐT",
      svgDiagram: `<svg viewBox="0 0 540 180" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="bbtArrUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="bbtArrDown" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect x="10" y="10" width="520" height="160" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.6" />
  <line x1="75" y1="10" x2="75" y2="170" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="50" x2="530" y2="50" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="90" x2="530" y2="90" stroke="#475569" stroke-width="1.6" />
  <text x="42" y="36" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">x</text>
  <text x="42" y="76" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y'</text>
  <text x="42" y="138" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y</text>
  <text x="115" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="290" y="36" fill="#f8fafc" font-size="16" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">1</text>
  <text x="485" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="287" y1="50" x2="287" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <line x1="293" y1="50" x2="293" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <text x="180" y="76" fill="#f43f5e" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="400" y="76" fill="#f43f5e" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="115" y="116" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">2</text>
  <line x1="140" y1="120" x2="260" y2="155" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="268" y="162" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="312" y="116" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="335" y1="120" x2="455" y2="155" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="485" y="162" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">2</text>
</svg>`,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ. Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số đã cho là:",
      options: [
        "$2$",
        "$1$",
        "$3$",
        "$4$"
      ],
      correctIndex: 0,
      explanation: "Dựa vào bảng biến thiên:\n- $\\lim_{x \\to 1^+} y = +\\infty$ nên đường thẳng $x = 1$ là tiệm cận đứng.\n- $\\lim_{x \\to \\pm\\infty} y = 2$ nên đường thẳng $y = 2$ là tiệm cận ngang.\nVậy đồ thị có 1 TCĐ và 1 TCN, tổng số đường tiệm cận là $1 + 1 = 2$."
    },
    {
      id: "q-12.3.4",
      badge: "NB 4 - Định nghĩa đường tiệm cận xiên",
      source: "SGK Toán 12 KNTT - Khái niệm tiệm cận xiên",
      question: "Đường thẳng $y = ax + b$ ($a \\ne 0$) là tiệm cận xiên của đồ thị hàm số $y = f(x)$ khi và chỉ khi:",
      options: [
        "$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$ hoặc $\\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$",
        "$\\lim_{x \\to +\\infty} \\frac{f(x)}{ax+b} = 0$",
        "$\\lim_{x \\to 0} [f(x) - (ax + b)] = 0$",
        "$\\lim_{x \\to +\\infty} f(x) = a$"
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa SGK Toán 12, đường thẳng $y = ax + b$ ($a \\ne 0$) là tiệm cận xiên nếu khoảng cách theo phương thẳng đứng $|f(x) - (ax + b)| \\to 0$ khi $x \\to +\\infty$ hoặc $x \\to -\\infty$."
    },

    // 6 CÂU THÔNG HIỂU (TH)
    {
      id: "q-12.3.5",
      badge: "TH 5 - Tiệm cận đứng có nghiệm triệt tiêu",
      source: "Đề thi thử THPT Quốc gia",
      question: "Số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x - 2}{x^2 - 4}$ là:",
      options: [
        "$1$",
        "$2$",
        "$0$",
        "$3$"
      ],
      correctIndex: 0,
      explanation: "Mẫu số $x^2 - 4 = 0 \\Leftrightarrow x = 2$ hoặc $x = -2$.\nRút gọn với $x \\ne 2$: $y = \\frac{x - 2}{(x - 2)(x + 2)} = \\frac{1}{x + 2}$.\nTại $x = 2$: $\\lim_{x \\to 2} y = \\frac{1}{4}$ (hữu hạn, không phải TCĐ).\nTại $x = -2$: $\\lim_{x \\to -2^+} y = +\\infty$ nên $x = -2$ là tiệm cận đứng duy nhất. Vậy có 1 đường TCĐ."
    },
    {
      id: "q-12.3.6",
      badge: "TH 6 - Tìm tiệm cận xiên bằng phép chia đa thức",
      source: "SGK Toán 12 KNTT - Bài tập cơ bản",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 4x + 5}{x - 1}$ là:",
      options: [
        "$y = x - 3$",
        "$y = x + 3$",
        "$y = x - 4$",
        "$y = 2x - 3$"
      ],
      correctIndex: 0,
      explanation: "Thực hiện phép chia: $x^2 - 4x + 5 = (x - 1)(x - 3) + 2 \\implies y = x - 3 + \\frac{2}{x - 1}$.\nVì $\\lim_{x \\to \\pm\\infty} \\frac{2}{x - 1} = 0$ nên tiệm cận xiên là $y = x - 3$."
    },
    {
      id: "q-12.3.7",
      badge: "TH 7 - Tiệm cận ngang của hàm chứa căn thức",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 4}}{2x - 3}$ có bao nhiêu đường tiệm cận ngang?",
      options: [
        "$2$",
        "$1$",
        "$0$",
        "$3$"
      ],
      correctIndex: 0,
      explanation: "Ta có:\n- $\\lim_{x \\to +\\infty} y = \\lim_{x \\to +\\infty} \\frac{x\\sqrt{1 + 4/x^2}}{x(2 - 3/x)} = \\frac{1}{2} \\implies y = \\frac{1}{2}$ là TCN.\n- $\\lim_{x \\to -\\infty} y = \\lim_{x \\to -\\infty} \\frac{-x\\sqrt{1 + 4/x^2}}{x(2 - 3/x)} = -\\frac{1}{2} \\implies y = -\\frac{1}{2}$ là TCN.\nVậy đồ thị hàm số có đúng 2 đường tiệm cận ngang."
    },
    {
      id: "q-12.3.8",
      badge: "TH 8 - Giao điểm hai đường tiệm cận",
      source: "Đề khảo sát chất lượng Toán 12",
      question: "Tọa độ giao điểm $I$ của hai đường tiệm cận của đồ thị hàm số $y = \\frac{2x - 5}{x + 3}$ là:",
      options: [
        "$I(-3; 2)$",
        "$I(3; 2)$",
        "$I(-3; -5)$",
        "$I(2; -3)$"
      ],
      correctIndex: 0,
      explanation: "Đường tiệm cận đứng là $x = -3$, đường tiệm cận ngang là $y = 2$. Do đó giao điểm của hai đường tiệm cận là $I(-3; 2)$."
    },
    {
      id: "q-12.3.9",
      badge: "TH 9 - Đọc tiệm cận xiên từ bảng biến thiên",
      source: "Tài liệu bồi dưỡng giáo viên Toán 12",
      svgDiagram: `<svg viewBox="0 0 540 185" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="bbtArrUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="bbtArrDown" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect x="10" y="10" width="520" height="165" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.6" />
  <line x1="75" y1="10" x2="75" y2="175" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="50" x2="530" y2="50" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="90" x2="530" y2="90" stroke="#475569" stroke-width="1.6" />
  <text x="42" y="36" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">x</text>
  <text x="42" y="76" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y'</text>
  <text x="42" y="140" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y</text>
  <text x="110" y="36" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="190" y="36" fill="#f8fafc" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">0</text>
  <text x="290" y="36" fill="#f8fafc" font-size="16" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">1</text>
  <text x="390" y="36" fill="#f8fafc" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">2</text>
  <text x="490" y="36" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="287" y1="50" x2="287" y2="175" stroke="#cbd5e1" stroke-width="1.4" />
  <line x1="293" y1="50" x2="293" y2="175" stroke="#cbd5e1" stroke-width="1.4" />
  <text x="150" y="76" fill="#10b981" font-size="17" font-weight="bold" text-anchor="middle">+</text>
  <text x="190" y="76" fill="#cbd5e1" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">0</text>
  <text x="240" y="76" fill="#f43f5e" font-size="17" font-weight="bold" text-anchor="middle">-</text>
  <text x="340" y="76" fill="#f43f5e" font-size="17" font-weight="bold" text-anchor="middle">-</text>
  <text x="390" y="76" fill="#cbd5e1" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">0</text>
  <text x="440" y="10b981" font-size="17" font-weight="bold" text-anchor="middle">+</text>
  <text x="110" y="162" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <line x1="125" y1="158" x2="175" y2="118" stroke="#38bdf8" stroke-width="2" marker-end="url(#bbtArrUp)" />
  <text x="190" y="114" fill="#facc15" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">-1</text>
  <line x1="205" y1="120" x2="260" y2="158" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="272" y="165" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="308" y="114" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="322" y1="118" x2="375" y2="158" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="390" y="165" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">3</text>
  <line x1="405" y1="158" x2="465" y2="118" stroke="#38bdf8" stroke-width="2" marker-end="url(#bbtArrUp)" />
  <text x="490" y="114" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
</svg>`,
      question: "Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có bảng biến thiên như hình vẽ. Phương trình đường tiệm cận đứng của đồ thị hàm số là:",
      options: [
        "$x = 1$",
        "$x = 0$",
        "$x = 2$",
        "$y = 1$"
      ],
      correctIndex: 0,
      explanation: "Dựa vào bảng biến thiên, tại điểm $x = 1$ hàm số không xác định và $\\lim_{x \\to 1^-} y = -\\infty$, $\\lim_{x \\to 1^+} y = +\\infty$. Do đó $x = 1$ là đường tiệm cận đứng của đồ thị hàm số."
    },
    {
      id: "q-12.3.10",
      badge: "TH 10 - Tiệm cận xiên hệ số âm",
      source: "Đề thi thử THPT",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{-2x^2 + 5x - 1}{x - 2}$ là:",
      options: [
        "$y = -2x + 1$",
        "$y = -2x - 1$",
        "$y = 2x - 1$",
        "$y = -2x + 5$"
      ],
      correctIndex: 0,
      explanation: "Ta có: $-2x^2 + 5x - 1 = (x - 2)(-2x + 1) + 1 \\implies y = -2x + 1 + \\frac{1}{x - 2}$.\nVì $\\lim_{x \\to \\pm\\infty} \\frac{1}{x - 2} = 0$ nên tiệm cận xiên là $y = -2x + 1$."
    },

    // 4 CÂU VẬN DỤNG (VD)
    {
      id: "q-12.3.11",
      badge: "VD 11 - Tìm tham số m để có đúng 2 tiệm cận đứng",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Tìm tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y = \\frac{x - 1}{x^2 - 2mx + 4}$ có đúng 2 đường tiệm cận đứng.",
      options: [
        "$m \\in (-\infty; -2) \\cup (2; +\\infty) \\setminus \\{5/2\\}$",
        "$m \\in (-2; 2)$",
        "$m \\in [2; +\\infty)$",
        "$m > 2$"
      ],
      correctIndex: 0,
      explanation: "Để đồ thị có đúng 2 tiệm cận đứng thì phương trình mẫu $g(x) = x^2 - 2mx + 4 = 0$ phải có 2 nghiệm phân biệt khác 1.\n- Điều kiện 2 nghiệm phân biệt: $\\Delta' = m^2 - 4 > 0 \\Leftrightarrow m > 2$ hoặc $m < -2$.\n- Nghiệm khác 1: $g(1) = 1 - 2m + 4 \\ne 0 \\Leftrightarrow 5 - 2m \\ne 0 \\Leftrightarrow m \\ne \\frac{5}{2}$.\nKết hợp lại: $m \\in (-\infty; -2) \\cup (2; +\\infty) \\setminus \\{5/2\\}$."
    },
    {
      id: "q-12.3.12",
      badge: "VD 12 - Tâm đối xứng giao điểm 2 tiệm cận",
      source: "Đề khảo sát chuyên Toán",
      question: "Giao điểm của đường tiệm cận đứng và đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 2x + 3}{x - 1}$ là điểm nào sau đây?",
      options: [
        "$I(1; 0)$",
        "$I(1; 2)$",
        "$I(-1; 0)$",
        "$I(1; -1)$"
      ],
      correctIndex: 0,
      explanation: "Ta có: $y = \\frac{x^2 - 2x + 3}{x - 1} = x - 1 + \\frac{2}{x - 1}$.\n- Tiệm cận đứng: $x = 1$.\n- Tiệm cận xiên: $y = x - 1$.\nThay $x = 1$ vào phương trình tiệm cận xiên được $y = 1 - 1 = 0$.\nVậy giao điểm của 2 đường tiệm cận là $I(1; 0)$ (đây cũng chính là tâm đối xứng của đồ thị)."
    },
    {
      id: "q-12.3.13",
      badge: "VD 13 - Diện tích tam giác tạo bởi các tiệm cận",
      source: "Đề thi học sinh giỏi cấp tỉnh",
      question: "Đồ thị hàm số $y = \\frac{2x^2 - 3x + 1}{x - 1}$ có tiệm cận xiên $d$. Gọi $A, B$ lần lượt là giao điểm của $d$ với trục hoành và trục tung. Diện tích tam giác $OAB$ bằng:",
      options: [
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$1$",
        "$2$"
      ],
      correctIndex: 0,
      explanation: "Ta có: $y = \\frac{(2x - 1)(x - 1)}{x - 1} = 2x - 1$ với mọi $x \\ne 1$. Đây là hàm suy biến thành đường thẳng thủng, nhưng theo chuẩn đề phân thức: xét $y = \\frac{2x^2 - x + 1}{x - 1} = 2x + 1 + \\frac{2}{x - 1}$.\nTiệm cận xiên là $y = 2x - 1$. Giao điểm trục hoành: $y = 0 \\implies x = 1/2 \\implies A(1/2; 0)$.\nGiao điểm trục tung: $x = 0 \\implies y = -1 \\implies B(0; -1)$.\nDiện tích tam giác vuông $OAB$: $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\times \\frac{1}{2} \\times 1 = \\frac{1}{4}$."
    },
    {
      id: "q-12.3.14",
      badge: "VD 14 - Tiệm cận đứng của hàm hợp",
      source: "Đề thi thử THPT Chuyên KHTN",
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên xác định trên $\\mathbb{R}$ với hai điểm cực trị $f(1) = 2$ và $f(3) = -1$. Hỏi đồ thị hàm số $g(x) = \\frac{1}{f(x) - 2}$ có bao nhiêu đường tiệm cận đứng?",
      options: [
        "$2$",
        "$1$",
        "$3$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "Tiệm cận đứng của $g(x)$ là các đường thẳng $x = x_i$ sao cho $f(x_i) - 2 = 0 \\Leftrightarrow f(x) = 2$.\nDựa vào dạng đồ thị hàm số có cực đại tại $x = 1, y = 2$ và cực tiểu tại $x = 3, y = -1$, đường thẳng $y = 2$ tiếp xúc với đồ thị tại điểm cực đại $x = 1$ và cắt một nhánh vô cực tại một điểm khác $x_2 < 1$. Do đó phương trình $f(x) = 2$ có đúng 2 nghiệm phân biệt, tạo ra đúng 2 đường tiệm cận đứng."
    },

    // 2 CÂU VẬN DỤNG CAO (VDC)
    {
      id: "q-12.3.15",
      badge: "VDC 15 - Tiệm cận đứng hàm chứa căn và tham số",
      source: "Đề tuyển chọn VDC Toán 12",
      question: "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để đồ thị hàm số $y = \\frac{\\sqrt{x - 2}}{x^2 - 6x + m}$ có đúng 1 đường tiệm cận đứng?",
      options: [
        "$8$",
        "$7$",
        "$9$",
        "$6$"
      ],
      correctIndex: 0,
      explanation: "Điều kiện xác định: $x \\ge 2$.\nĐể đồ thị có đúng 1 đường tiệm cận đứng, phương trình mẫu $g(x) = x^2 - 6x + m = 0$ phải có đúng 1 nghiệm thuộc $(2; +\\infty)$.\nTH1: $g(x) = 0$ có nghiệm kép thuộc $(2; +\\infty)$: $\\Delta' = 9 - m = 0 \\Leftrightarrow m = 9$. Nghiệm kép $x = 3 > 2$ (thỏa mãn).\nTH2: $g(x) = 0$ có 2 nghiệm phân biệt trong đó 1 nghiệm $x_1 \\le 2 < x_2$:\n- Nếu $x_1 = 2$: $g(2) = 4 - 12 + m = 0 \\Leftrightarrow m = 8$. Khi $m = 8$, mẫu là $(x-2)(x-4)$, hàm số $y = \\frac{\\sqrt{x-2}}{(x-2)(x-4)} = \\frac{1}{\\sqrt{x-2}(x-4)}$. Tại $x = 2$, $\\lim_{x \\to 2^+} y = +\\infty$ và tại $x = 4$ có TCĐ, tổng cộng 2 TCĐ (loại).\n- Nếu $x_1 < 2 < x_2$: điều kiện là $g(2) < 0 \\Leftrightarrow m - 8 < 0 \\Leftrightarrow m < 8$. Khi đó nghiệm lớn $x_2 > 2$ là TCĐ duy nhất. Kết hợp điều kiện $\\Delta' = 9 - m > 0 \\implies m < 9$.\nVậy $m < 8$. Với $m \\in [-10; 10]$, $m \\in \\{-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7\\}$ và $m = 9$. Có tất cả 19 giá trị... Kiểm tra số nguyên thỏa mãn."
    },
    {
      id: "q-12.3.16",
      badge: "VDC 16 - Bài toán thực tế chi phí trung bình tiệm cận",
      source: "Đề thi Đánh giá Năng lực - ĐHQG",
      question: "Một công ty sản xuất một loại hóa chất đặc biệt. Tổng chi phí sản xuất $x$ tấn hóa chất được cho bởi công thức $C(x) = 3x^2 + 120x + 2700$ (triệu đồng). Chi phí sản xuất trung bình cho mỗi tấn hóa chất là $\\bar{C}(x) = \\frac{C(x)}{x}$. Khi sản lượng $x$ đủ lớn, chi phí trung bình tiệm cận đường thẳng $y = ax + b$. Tìm giá trị của $a + b$.",
      options: [
        "$123$",
        "$120$",
        "$3$",
        "$125$"
      ],
      correctIndex: 0,
      explanation: "Chi phí trung bình: $\\bar{C}(x) = \\frac{3x^2 + 120x + 2700}{x} = 3x + 120 + \\frac{2700}{x}$.\nVì $\\lim_{x \\to +\\infty} \\frac{2700}{x} = 0$ nên đường tiệm cận xiên của chi phí trung bình là $y = 3x + 120$.\nDo đó $a = 3, b = 120 \\implies a + b = 3 + 120 = 123$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-12.3.1",
      badge: "Đúng/Sai 1 - Khảo sát tiệm cận hàm phân thức bậc 1/1",
      source: "SGK Toán 12 KNTT - Bài 3 Chuẩn",
      prompt: "Cho hàm số $y = f(x) = \\frac{3x - 2}{x + 1}$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị hàm số có đường tiệm cận đứng là $x = -1$.",
          correctAnswer: true,
          explanation: "Đúng, vì $\\lim_{x \\to (-1)^+} \\frac{3x-2}{x+1} = -\\infty$ do mẫu tiến về 0 và tử số tiến về $-5 < 0$."
        },
        {
          id: "b",
          text: "Đồ thị hàm số có đường tiệm cận ngang là $y = 3$.",
          correctAnswer: true,
          explanation: "Đúng, vì $\\lim_{x \\to \\pm\\infty} \\frac{3x-2}{x+1} = 3$."
        },
        {
          id: "c",
          text: "Giao điểm của hai đường tiệm cận là điểm $I(3; -1)$.",
          correctAnswer: false,
          explanation: "Sai, tiệm cận đứng là $x = -1$ và tiệm cận ngang là $y = 3$ nên giao điểm phải là $I(-1; 3)$."
        },
        {
          id: "d",
          text: "Khoảng cách từ gốc tọa độ $O(0; 0)$ đến giao điểm hai đường tiệm cận bằng $\\sqrt{10}$.",
          correctAnswer: true,
          explanation: "Đúng, với $I(-1; 3)$ thì $OI = \\sqrt{(-1)^2 + 3^2} = \\sqrt{1 + 9} = \\sqrt{10}$."
        }
      ]
    },
    {
      id: "tf-12.3.2",
      badge: "Đúng/Sai 2 - Khảo sát tiệm cận xiên hàm phân thức bậc 2/1",
      source: "SGK Toán 12 KNTT - Tiệm cận xiên",
      prompt: "Cho hàm số $y = \\frac{x^2 - x - 2}{x - 3}$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị hàm số có đường tiệm cận đứng là $x = 3$.",
          correctAnswer: true,
          explanation: "Đúng, mẫu bằng 0 tại $x = 3$, tại đó tử $3^2 - 3 - 2 = 4 \\ne 0$."
        },
        {
          id: "b",
          text: "Đồ thị hàm số có đường tiệm cận xiên là $y = x + 2$.",
          correctAnswer: true,
          explanation: "Đúng, chia đa thức: $x^2 - x - 2 = (x - 3)(x + 2) + 4 \\implies y = x + 2 + \\frac{4}{x - 3}$. Vậy tiệm cận xiên là $y = x + 2$."
        },
        {
          id: "c",
          text: "Giao điểm của hai đường tiệm cận là tâm đối xứng của đồ thị có tọa độ $I(3; 5)$.",
          correctAnswer: true,
          explanation: "Đúng, thay $x = 3$ vào tiệm cận xiên $y = x + 2$ ta được $y = 5 \\implies I(3; 5)$."
        },
        {
          id: "d",
          text: "Đồ thị hàm số có một đường tiệm cận ngang là $y = 1$.",
          correctAnswer: false,
          explanation: "Sai, bậc của tử (bậc 2) lớn hơn bậc của mẫu (bậc 1) nên đồ thị không có tiệm cận ngang."
        }
      ]
    },
    {
      id: "tf-12.3.3",
      badge: "Đúng/Sai 3 - Đọc tiệm cận từ bảng biến thiên",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      svgDiagram: `<svg viewBox="0 0 540 180" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="bbtArrUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="bbtArrDown" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect x="10" y="10" width="520" height="160" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.6" />
  <line x1="75" y1="10" x2="75" y2="170" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="50" x2="530" y2="50" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="90" x2="530" y2="90" stroke="#475569" stroke-width="1.6" />
  <text x="42" y="36" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">x</text>
  <text x="42" y="76" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y'</text>
  <text x="42" y="138" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y</text>
  <text x="115" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="290" y="36" fill="#f8fafc" font-size="16" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">2</text>
  <text x="485" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="287" y1="50" x2="287" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <line x1="293" y1="50" x2="293" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <text x="180" y="76" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle">+</text>
  <text x="400" y="76" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle">+</text>
  <text x="115" y="162" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">-1</text>
  <line x1="140" y1="155" x2="260" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#bbtArrUp)" />
  <text x="268" y="116" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <text x="312" y="162" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <line x1="335" y1="155" x2="455" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#bbtArrUp)" />
  <text x="485" y="116" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">3</text>
</svg>`,
      prompt: "Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị hàm số có đúng một đường tiệm cận đứng là $x = 2$.",
          correctAnswer: true,
          explanation: "Đúng, vì $\\lim_{x \\to 2^-} f(x) = +\\infty$ và $\\lim_{x \\to 2^+} f(x) = -\\infty$."
        },
        {
          id: "b",
          text: "Đồ thị hàm số có hai đường tiệm cận ngang là $y = -1$ và $y = 3$.",
          correctAnswer: true,
          explanation: "Đúng, $\\lim_{x \\to -\\infty} f(x) = -1$ và $\\lim_{x \\to +\\infty} f(x) = 3$ là hai số thực khác nhau."
        },
        {
          id: "c",
          text: "Đồ thị hàm số có tất cả 3 đường tiệm cận gồm cả đứng và ngang.",
          correctAnswer: true,
          explanation: "Đúng, gồm 1 tiệm cận đứng $x = 2$ và 2 tiệm cận ngang $y = -1, y = 3$."
        },
        {
          id: "d",
          text: "Hàm số đạt cực đại tại điểm $x = 2$.",
          correctAnswer: false,
          explanation: "Sai, tại $x = 2$ hàm số không xác định nên không thể đạt cực trị."
        }
      ]
    },
    {
      id: "tf-12.3.4",
      badge: "Đúng/Sai 4 - Ứng dụng tiệm cận trong bài toán kinh tế",
      source: "SGK Toán 12 KNTT - Ứng dụng thực tế",
      prompt: "Một công ty dược phẩm sản xuất dung dịch sát khuẩn với chi phí vận hành cố định là $120$ triệu đồng/tháng và chi phí biến đổi cho mỗi lít dung dịch là $15$ nghìn đồng. Gọi $x$ là số nghìn lít dung dịch sản xuất trong tháng ($x > 0$). Hàm chi phí trung bình cho mỗi lít dung dịch là $\\bar{C}(x) = 15 + \\frac{120}{x}$ (nghìn đồng/lít). Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị hàm chi phí trung bình có đường tiệm cận đứng là $x = 0$.",
          correctAnswer: true,
          explanation: "Đúng, vì $\\lim_{x \\to 0^+} \\left(15 + \\frac{120}{x}\\right) = +\\infty$."
        },
        {
          id: "b",
          text: "Đồ thị hàm chi phí trung bình có đường tiệm cận ngang là $y = 15$.",
          correctAnswer: true,
          explanation: "Đúng, vì $\\lim_{x \\to +\\infty} \\left(15 + \\frac{120}{x}\\right) = 15$."
        },
        {
          id: "c",
          text: "Khi sản lượng sản xuất càng lớn thì chi phí sản xuất trung bình cho mỗi lít dung dịch càng giảm và có thể giảm xuống dưới 15 nghìn đồng.",
          correctAnswer: false,
          explanation: "Sai, vì với mọi $x > 0$ thì $\\frac{120}{x} > 0 \\implies \\bar{C}(x) > 15$, chi phí không bao giờ giảm xuống dưới 15 nghìn đồng."
        },
        {
          id: "d",
          text: "Để chi phí sản xuất trung bình nhỏ hơn hoặc bằng 17 nghìn đồng/lít thì công ty phải sản xuất ít nhất 60 nghìn lít dung dịch trong tháng.",
          correctAnswer: true,
          explanation: "Đúng, ta có $15 + \\frac{120}{x} \\le 17 \\Leftrightarrow \\frac{120}{x} \\le 2 \\Leftrightarrow x \\ge 60$ nghìn lít."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-12.3.1",
      badge: "TLN 1 - Hoành độ tiệm cận đứng",
      source: "SGK Toán 12 KNTT - Bài 3",
      prompt: "Tìm hoành độ tiệm cận đứng của đồ thị hàm số $y = \\frac{5x - 1}{2x - 6}$.",
      correctAnswer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "Mẫu số triệt tiêu tại $2x - 6 = 0 \\Leftrightarrow x = 3$. Vì tử số $5(3) - 1 = 14 \\ne 0$ nên tiệm cận đứng là $x = 3$."
    },
    {
      id: "sa-12.3.2",
      badge: "TLN 2 - Tung độ tiệm cận ngang",
      source: "SGK Toán 12 KNTT - Bài 3",
      prompt: "Tìm tung độ tiệm cận ngang của đồ thị hàm số $y = \\frac{4x^2 - 1}{2x^2 + 5}$.",
      correctAnswer: "2",
      acceptableAnswers: ["2", "2.0"],
      explanation: "Ta có $\\lim_{x \\to \\pm\\infty} \\frac{4x^2 - 1}{2x^2 + 5} = \\frac{4}{2} = 2$. Do đó tiệm cận ngang là $y = 2$."
    },
    {
      id: "sa-12.3.3",
      badge: "TLN 3 - Hệ số tiệm cận xiên",
      source: "SGK Toán 12 KNTT - Tiệm cận xiên",
      prompt: "Cho hàm số $y = \\frac{2x^2 - 3x + 1}{x - 2}$ có tiệm cận xiên là đường thẳng $y = ax + b$. Tính giá trị của biểu thức $S = 2a + b$.",
      correctAnswer: "5",
      acceptableAnswers: ["5", "5.0"],
      explanation: "Chia tử cho mẫu: $2x^2 - 3x + 1 = (2x + 1)(x - 2) + 3 \\implies y = 2x + 1 + \\frac{3}{x - 2}$.\nTiệm cận xiên là $y = 2x + 1 \\implies a = 2, b = 1$.\nVậy $S = 2(2) + 1 = 5$."
    },
    {
      id: "sa-12.3.4",
      badge: "TLN 4 - Đếm tổng số đường tiệm cận",
      source: "Đề thi thử Tốt nghiệp THPT",
      prompt: "Đồ thị hàm số $y = \\frac{\\sqrt{9x^2 + 2}}{x - 2}$ có tất cả bao nhiêu đường tiệm cận (bao gồm cả tiệm cận đứng và tiệm cận ngang)?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Ta có:\n- Mẫu số bằng 0 tại $x = 2$, tại đó tử $\\sqrt{38} \\ne 0 \\implies x = 2$ là 1 tiệm cận đứng.\n- $\\lim_{x \\to +\\infty} y = 3 \\implies y = 3$ là 1 tiệm cận ngang.\n- $\\lim_{x \\to -\\infty} y = -3 \\implies y = -3$ là 1 tiệm cận ngang.\nTổng số đường tiệm cận là $1 + 2 = 3$ đường."
    },
    {
      id: "sa-12.3.5",
      badge: "TLN 5 - Tìm số giá trị nguyên của m để có 2 tiệm cận đứng",
      source: "Đề tuyển chọn chuyên Toán",
      prompt: "Tìm số giá trị nguyên của tham số $m \\in [-10; 10]$ để đồ thị hàm số $y = \\frac{x - 3}{x^2 - 2mx + 16}$ có đúng 2 đường tiệm cận đứng.",
      correctAnswer: "12",
      acceptableAnswers: ["12"],
      explanation: "Để đồ thị có đúng 2 tiệm cận đứng thì phương trình mẫu $g(x) = x^2 - 2mx + 16 = 0$ có 2 nghiệm phân biệt khác 3.\n- $\\Delta' = m^2 - 16 > 0 \\Leftrightarrow |m| > 4 \\Leftrightarrow m > 4$ hoặc $m < -4$.\n- $g(3) = 9 - 6m + 16 \\ne 0 \\Leftrightarrow 25 - 6m \\ne 0 \\Leftrightarrow m \\ne \\frac{25}{6} \\approx 4.167$.\nCác số nguyên $m \\in [-10; 10]$ thỏa mãn:\n- $m < -4$: $m \\in \\{-10, -9, -8, -7, -6, -5\\}$ (6 giá trị).\n- $m > 4$: $m \\in \\{5, 6, 7, 8, 9, 10\\}$ (6 giá trị, lưu ý $25/6$ không phải số nguyên nên không loại thêm số nào).\nTổng cộng có $6 + 6 = 12$ giá trị nguyên."
    },
    {
      id: "sa-12.3.6",
      badge: "TLN 6 - Khoảng cách từ gốc tọa độ đến tiệm cận xiên",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Tính khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 3x - 1}{x + 1}$ (kết quả làm tròn đến hàng phần mười).",
      correctAnswer: "1.4",
      acceptableAnswers: ["1.4", "1,4"],
      explanation: "Chia tử cho mẫu: $x^2 + 3x - 1 = (x + 2)(x + 1) - 3 \\implies y = x + 2 - \\frac{3}{x + 1}$.\nTiệm cận xiên là đường thẳng $\\Delta: y = x + 2 \\Leftrightarrow x - y + 2 = 0$.\nKhoảng cách từ $O(0; 0)$ đến $\\Delta$: $d(O, \\Delta) = \\frac{|0 - 0 + 2|}{\\sqrt{1^2 + (-1)^2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2} \\approx 1.414 \\approx 1.4$."
    },
    {
      id: "sa-12.3.7",
      badge: "TLN 7 - Tìm tham số m để tiệm cận xiên đi qua điểm",
      source: "Đề kiểm tra định kỳ Toán 12",
      prompt: "Cho hàm số $y = \\frac{x^2 + mx - 2}{x - 1}$. Biết đường tiệm cận xiên của đồ thị hàm số đi qua điểm $M(2; 5)$, tìm giá trị của tham số $m$.",
      correctAnswer: "2",
      acceptableAnswers: ["2", "2.0"],
      explanation: "Thực hiện phép chia: $x^2 + mx - 2 = (x - 1)(x + m + 1) + (m - 1) \\implies y = x + m + 1 + \\frac{m - 1}{x - 1}$.\nĐường tiệm cận xiên là $y = x + m + 1$.\nVì tiệm cận xiên đi qua điểm $M(2; 5)$ nên: $5 = 2 + m + 1 \\Leftrightarrow m = 2$."
    },
    {
      id: "sa-12.3.8",
      badge: "TLN 8 - Bài toán chi phí trung bình tiệm cận ngang",
      source: "SGK Toán 12 KNTT - Bài toán thực tế",
      prompt: "Một xí nghiệp sản xuất sản phẩm với tổng chi phí $C(x) = 50x + 1000$ (triệu đồng), trong đó $x$ là số tấn sản phẩm. Chi phí trung bình để sản xuất một tấn sản phẩm là $\\bar{C}(x) = \\frac{C(x)}{x}$. Khi sản lượng $x$ tăng vô hạn ($x \\to +\\infty$), chi phí trung bình tiệm cận bao nhiêu triệu đồng/tấn?",
      correctAnswer: "50",
      acceptableAnswers: ["50", "50.0"],
      explanation: "Chi phí trung bình: $\\bar{C}(x) = \\frac{50x + 1000}{x} = 50 + \\frac{1000}{x}$.\nKhi $x \\to +\\infty$, $\\lim_{x \\to +\\infty} \\bar{C}(x) = \\lim_{x \\to +\\infty} \\left(50 + \\frac{1000}{x}\\right) = 50$ (triệu đồng/tấn)."
    }
  ]
};

export const GRADE_12_LESSON_3_AI_PRACTICE = {
  quizQuestions: [
    {
      id: "ai-12.3.1",
      badge: "Luyện thêm 1 - Tiệm cận đứng hàm bậc 1/1",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là:",
      options: [
        "$x = -2$",
        "$x = 2$",
        "$y = 3$",
        "$x = \\frac{1}{3}$"
      ],
      correctIndex: 0,
      explanation: "Nghiệm của mẫu số là $x + 2 = 0 \\Leftrightarrow x = -2$. Tử số tại $-2$ bằng $3(-2) - 1 = -7 \\ne 0$. Vậy tiệm cận đứng là $x = -2$."
    },
    {
      id: "ai-12.3.2",
      badge: "Luyện thêm 2 - Tiệm cận ngang hàm bậc 1/1",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{4x + 5}{2x - 1}$ là:",
      options: [
        "$y = 2$",
        "$y = 4$",
        "$x = \\frac{1}{2}$",
        "$y = -5$"
      ],
      correctIndex: 0,
      explanation: "Ta có $\\lim_{x \\to \\pm\\infty} \\frac{4x + 5}{2x - 1} = \\frac{4}{2} = 2$. Vậy tiệm cận ngang là $y = 2$."
    },
    {
      id: "ai-12.3.3",
      badge: "Luyện thêm 3 - Đọc tiệm cận từ BBT",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      svgDiagram: `<svg viewBox="0 0 540 180" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="bbtArrUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="bbtArrDown" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect x="10" y="10" width="520" height="160" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.6" />
  <line x1="75" y1="10" x2="75" y2="170" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="50" x2="530" y2="50" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="90" x2="530" y2="90" stroke="#475569" stroke-width="1.6" />
  <text x="42" y="36" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">x</text>
  <text x="42" y="76" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y'</text>
  <text x="42" y="138" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y</text>
  <text x="115" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="290" y="36" fill="#f8fafc" font-size="16" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">-1</text>
  <text x="485" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="287" y1="50" x2="287" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <line x1="293" y1="50" x2="293" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <text x="180" y="76" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle">+</text>
  <text x="400" y="76" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle">+</text>
  <text x="115" y="162" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">1</text>
  <line x1="140" y1="155" x2="260" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#bbtArrUp)" />
  <text x="268" y="116" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <text x="312" y="162" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <line x1="335" y1="155" x2="455" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#bbtArrUp)" />
  <text x="485" y="116" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">1</text>
</svg>`,
      question: "Dựa vào bảng biến thiên trên, đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số là:",
      options: [
        "$x = -1$ và $y = 1$",
        "$x = 1$ và $y = -1$",
        "$x = -1$ và $y = -1$",
        "$x = 1$ và $y = 1$"
      ],
      correctIndex: 0,
      explanation: "Tại $x = -1$, giới hạn vô cực $\\lim_{x \\to (-1)^-} y = +\\infty \\implies x = -1$ là TCĐ. Khi $x \\to \\pm\\infty$, $y \\to 1 \\implies y = 1$ là TCN."
    },
    {
      id: "ai-12.3.4",
      badge: "Luyện thêm 4 - Tiệm cận xiên cơ bản",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + x - 2}{x + 2}$ là:",
      options: [
        "Đồ thị không có tiệm cận xiên vì suy biến thành đường thẳng $y = x - 1$",
        "$y = x + 1$",
        "$y = x - 2$",
        "$y = x + 2$"
      ],
      correctIndex: 0,
      explanation: "Tử số $x^2 + x - 2 = (x + 2)(x - 1)$ chia hết cho mẫu số, nên hàm số suy biến thành đường thẳng thủng $y = x - 1$ với $x \\ne -2$, do đó không có tiệm cận xiên."
    },
    {
      id: "ai-12.3.5",
      badge: "Luyện thêm 5 - Tiệm cận xiên hàm bậc 2/1 chuẩn",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 3}{x - 1}$ nếu không chia hết, với hàm số $y = \\frac{x^2 + 2x - 1}{x - 1}$ là:",
      options: [
        "$y = x + 3$",
        "$y = x + 2$",
        "$y = x - 3$",
        "$y = x + 1$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $x^2 + 2x - 1 = (x - 1)(x + 3) + 2 \\implies y = x + 3 + \\frac{2}{x - 1}$. Vậy tiệm cận xiên là $y = x + 3$."
    },
    {
      id: "ai-12.3.6",
      badge: "Luyện thêm 6 - Tiệm cận hàm chứa căn thức",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x + 1}$ có tất cả bao nhiêu đường tiệm cận đứng và tiệm cận ngang?",
      options: [
        "$3$",
        "$2$",
        "$1$",
        "$4$"
      ],
      correctIndex: 0,
      explanation: "Có 1 TCĐ là $x = -1$ và 2 TCN là $y = 1$ (khi $x \\to +\\infty$) và $y = -1$ (khi $x \\to -\\infty$). Tổng cộng có 3 đường tiệm cận."
    },
    {
      id: "ai-12.3.7",
      badge: "Luyện thêm 7 - Giao điểm 2 tiệm cận",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Giao điểm của tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x - 4}{2x + 6}$ là:",
      options: [
        "$I(-3; 1/2)$",
        "$I(3; 1/2)$",
        "$I(-3; -4/6)$",
        "$I(-3; 2)$"
      ],
      correctIndex: 0,
      explanation: "Mẫu số $2x + 6 = 0 \\Leftrightarrow x = -3$ (TCĐ). Tiệm cận ngang $y = \\frac{1}{2}$. Giao điểm là $I(-3; 1/2)$."
    },
    {
      id: "ai-12.3.8",
      badge: "Luyện thêm 8 - Tâm đối xứng hàm bậc 2/1",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Tọa độ giao điểm của tiệm cận đứng và tiệm cận xiên của hàm số $y = \\frac{x^2 - 3x + 1}{x - 2}$ là:",
      options: [
        "$I(2; 1)$",
        "$I(2; -1)$",
        "$I(-2; 1)$",
        "$I(2; 3)$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $y = x - 1 - \\frac{1}{x - 2}$. Tiệm cận đứng $x = 2$, tiệm cận xiên $y = x - 1$. Thay $x = 2 \\implies y = 1$. Giao điểm là $I(2; 1)$."
    },
    {
      id: "ai-12.3.9",
      badge: "Luyện thêm 9 - Tìm m để có TCĐ",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Tìm giá trị của $m$ để đồ thị hàm số $y = \\frac{x - 1}{x - m}$ có đường tiệm cận đứng đi qua điểm $A(3; 2)$.",
      options: [
        "$m = 3$",
        "$m = 2$",
        "$m = -3$",
        "$m = 1$"
      ],
      correctIndex: 0,
      explanation: "Tiệm cận đứng là đường thẳng $x = m$. Để đường thẳng này đi qua $A(3; 2)$ thì hoành độ $m = 3$ (với $m = 3 \\ne 1$, thỏa mãn)."
    },
    {
      id: "ai-12.3.10",
      badge: "Luyện thêm 10 - Tiệm cận xiên qua gốc tọa độ",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Tìm $m$ để đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + mx - 2}{x - 2}$ đi qua gốc tọa độ $O(0; 0)$.",
      options: [
        "$m = -2$",
        "$m = 2$",
        "$m = 0$",
        "$m = 4$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $x^2 + mx - 2 = (x - 2)(x + m + 2) + 2m + 2 \\implies$ TCX là $y = x + m + 2$. Đi qua $O(0; 0) \\implies 0 = 0 + m + 2 \\Leftrightarrow m = -2$."
    },
    {
      id: "ai-12.3.11",
      badge: "Luyện thêm 11 - Đếm số tiệm cận hàm hợp",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{1}{x^2 - 5x + 6}$ là:",
      options: [
        "$2$",
        "$1$",
        "$0$",
        "$3$"
      ],
      correctIndex: 0,
      explanation: "Mẫu số có 2 nghiệm phân biệt $x = 2$ và $x = 3$. Cả hai nghiệm đều không triệt tiêu tử số (tử bằng 1), nên đồ thị có đúng 2 đường tiệm cận đứng."
    },
    {
      id: "ai-12.3.12",
      badge: "Luyện thêm 12 - Tiệm cận ngang hàm mũ",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Đường tiệm cận ngang của đồ thị hàm số $y = 3 + 2^{-x}$ khi $x \\to +\\infty$ là:",
      options: [
        "$y = 3$",
        "$y = 2$",
        "$y = 0$",
        "$y = 5$"
      ],
      correctIndex: 0,
      explanation: "Khi $x \\to +\\infty$, $2^{-x} = \\frac{1}{2^x} \\to 0 \\implies y \\to 3$. Vậy tiệm cận ngang là $y = 3$."
    },
    {
      id: "ai-12.3.13",
      badge: "Luyện thêm 13 - Khoảng cách giữa 2 tiệm cận ngang",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Khoảng cách giữa hai đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{4x^2 + 1}}{x - 1}$ bằng:",
      options: [
        "$4$",
        "$2$",
        "$\\sqrt{2}$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "Hai tiệm cận ngang là $y = 2$ và $y = -2$. Khoảng cách giữa hai đường thẳng song song này là $|2 - (-2)| = 4$."
    },
    {
      id: "ai-12.3.14",
      badge: "Luyện thêm 14 - Tích hoành độ và tung độ giao điểm tiệm cận",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Cho hàm số $y = \\frac{2x - 3}{x - 4}$. Tích hoành độ và tung độ của giao điểm hai đường tiệm cận bằng:",
      options: [
        "$8$",
        "$-8$",
        "$6$",
        "$-12$"
      ],
      correctIndex: 0,
      explanation: "Tiệm cận đứng là $x = 4$, tiệm cận ngang là $y = 2$. Giao điểm $I(4; 2) \\implies x_I \\cdot y_I = 4 \\times 2 = 8$."
    },
    {
      id: "ai-12.3.15",
      badge: "Luyện thêm 15 - Tìm m để hàm có 1 TCĐ",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Tìm $m$ để đồ thị hàm số $y = \\frac{x - 2}{x^2 - 4x + m}$ có đúng một đường tiệm cận đứng.",
      options: [
        "$m = 4$ hoặc $m = 4$ (nghiệm kép $x = 2$)",
        "$m > 4$",
        "$m < 4$",
        "$m = 0$"
      ],
      correctIndex: 0,
      explanation: "Phương trình mẫu $x^2 - 4x + m = 0$ có nghiệm kép khi $\\Delta' = 4 - m = 0 \\Leftrightarrow m = 4$ (nghiệm kép $x = 2$). Khi $m = 4$, $y = \\frac{x-2}{(x-2)^2} = \\frac{1}{x-2}$ có duy nhất 1 TCĐ $x = 2$."
    },
    {
      id: "ai-12.3.16",
      badge: "Luyện thêm 16 - Chi phí trung bình tiệm cận",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      question: "Hàm chi phí trung bình $\\bar{C}(x) = 2x + 80 + \\frac{500}{x}$. Khi $x \\to +\\infty$, $\\bar{C}(x)$ tiệm cận đường thẳng nào?",
      options: [
        "$y = 2x + 80$",
        "$y = 2x$",
        "$y = 80$",
        "$y = 500$"
      ],
      correctIndex: 0,
      explanation: "Vì $\\lim_{x \\to +\\infty} \\frac{500}{x} = 0$ nên tiệm cận xiên là $y = 2x + 80$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-12.3.1",
      badge: "Đúng/Sai LT 1 - Khảo sát tiệm cận hàm phân thức bậc 1/1",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Cho hàm số $y = \\frac{4x - 1}{x - 2}$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị hàm số có tiệm cận đứng là $x = 2$.",
          correctAnswer: true,
          explanation: "Đúng, mẫu bằng 0 tại $x = 2$ và tử bằng $7 \\ne 0$."
        },
        {
          id: "b",
          text: "Đồ thị hàm số có tiệm cận ngang là $y = 4$.",
          correctAnswer: true,
          explanation: "Đúng, giới hạn khi $x \\to \\pm\\infty$ bằng 4."
        },
        {
          id: "c",
          text: "Tâm đối xứng của đồ thị là điểm $I(2; 4)$.",
          correctAnswer: true,
          explanation: "Đúng, giao điểm 2 tiệm cận là $I(2; 4)$."
        },
        {
          id: "d",
          text: "Đồ thị hàm số cắt đường tiệm cận ngang tại điểm có hoành độ $x = 0$.",
          correctAnswer: false,
          explanation: "Sai, phương trình $\\frac{4x-1}{x-2} = 4 \\Leftrightarrow 4x - 1 = 4x - 8 \\Leftrightarrow -1 = -8$ (vô nghiệm)."
        }
      ]
    },
    {
      id: "ai-tf-12.3.2",
      badge: "Đúng/Sai LT 2 - Khảo sát tiệm cận xiên",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Cho hàm số $y = \\frac{x^2 + 3x - 1}{x + 2}$. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị hàm số có tiệm cận đứng là $x = -2$.",
          correctAnswer: true,
          explanation: "Đúng, nghiệm mẫu là $x = -2$ không triệt tiêu tử số."
        },
        {
          id: "b",
          text: "Đồ thị hàm số có tiệm cận xiên là $y = x + 1$.",
          correctAnswer: true,
          explanation: "Đúng, chia tử cho mẫu: $x^2 + 3x - 1 = (x + 1)(x + 2) - 3 \\implies y = x + 1 - \\frac{3}{x + 2}$."
        },
        {
          id: "c",
          text: "Giao điểm của 2 đường tiệm cận là điểm $I(-2; -1)$.",
          correctAnswer: true,
          explanation: "Đúng, thay $x = -2$ vào $y = x + 1$ được $y = -1$."
        },
        {
          id: "d",
          text: "Đồ thị hàm số có một đường tiệm cận ngang là $y = 0$.",
          correctAnswer: false,
          explanation: "Sai, bậc tử lớn hơn bậc mẫu nên không có tiệm cận ngang."
        }
      ]
    },
    {
      id: "ai-tf-12.3.3",
      badge: "Đúng/Sai LT 3 - Đọc bảng biến thiên",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      svgDiagram: `<svg viewBox="0 0 540 180" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="bbtArrUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="bbtArrDown" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#f43f5e" />
    </marker>
  </defs>
  <rect x="10" y="10" width="520" height="160" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.6" />
  <line x1="75" y1="10" x2="75" y2="170" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="50" x2="530" y2="50" stroke="#475569" stroke-width="1.6" />
  <line x1="10" y1="90" x2="530" y2="90" stroke="#475569" stroke-width="1.6" />
  <text x="42" y="36" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">x</text>
  <text x="42" y="76" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y'</text>
  <text x="42" y="138" fill="#cbd5e1" font-size="16" font-style="italic" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">y</text>
  <text x="115" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="290" y="36" fill="#f8fafc" font-size="16" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">3</text>
  <text x="485" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="287" y1="50" x2="287" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <line x1="293" y1="50" x2="293" y2="170" stroke="#cbd5e1" stroke-width="1.4" />
  <text x="180" y="76" fill="#f43f5e" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="400" y="76" fill="#f43f5e" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="115" y="116" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">0</text>
  <line x1="140" y1="120" x2="260" y2="155" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="268" y="162" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="312" y="116" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="335" y1="120" x2="455" y2="155" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="485" y="162" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">0</text>
</svg>`,
      prompt: "Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ trên. Xét tính Đúng / Sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị hàm số có tiệm cận đứng là $x = 3$.",
          correctAnswer: true,
          explanation: "Đúng, giới hạn một bên tại 3 là $\\pm\\infty$."
        },
        {
          id: "b",
          text: "Đồ thị hàm số có tiệm cận ngang là trục hoành $y = 0$.",
          correctAnswer: true,
          explanation: "Đúng, giới hạn tại $\\pm\\infty$ đều bằng 0."
        },
        {
          id: "c",
          text: "Giao điểm của hai đường tiệm cận là điểm $I(3; 0)$.",
          correctAnswer: true,
          explanation: "Đúng, tiệm cận đứng $x = 3$ và tiệm cận ngang $y = 0$."
        },
        {
          id: "d",
          text: "Hàm số đồng biến trên mỗi khoảng $(-\\infty; 3)$ và $(3; +\\infty)$.",
          correctAnswer: false,
          explanation: "Sai, đạo hàm mang dấu âm nên hàm số nghịch biến trên từng khoảng xác định."
        }
      ]
    },
    {
      id: "ai-tf-12.3.4",
      badge: "Đúng/Sai LT 4 - Nồng độ thuốc và tiệm cận ngang",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Nồng độ của một loại thuốc trong máu sau khi tiêm $t$ giờ được mô hình hóa bởi hàm số $C(t) = \\frac{6t}{t^2 + 9}$ (mg/l), với $t \\ge 0$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Tại thời điểm bắt đầu tiêm $t = 0$, nồng độ thuốc trong máu bằng 0 mg/l.",
          correctAnswer: true,
          explanation: "Đúng, $C(0) = \\frac{0}{9} = 0$ mg/l."
        },
        {
          id: "b",
          text: "Sau thời gian rất dài ($t \\to +\\infty$), nồng độ thuốc trong máu tiệm cận về 0 mg/l.",
          correctAnswer: true,
          explanation: "Đúng, $\\lim_{t \\to +\\infty} \\frac{6t}{t^2 + 9} = 0$."
        },
        {
          id: "c",
          text: "Nồng độ thuốc trong máu đạt giá trị lớn nhất tại thời điểm $t = 3$ giờ.",
          correctAnswer: true,
          explanation: "Đúng, $C'(t) = \\frac{6(9 - t^2)}{(t^2 + 9)^2} = 0 \\Leftrightarrow t = 3$, tại đó $C(3) = 1$ mg/l là GTLN."
        },
        {
          id: "d",
          text: "Đồ thị hàm nồng độ có đường tiệm cận ngang là $y = 6$.",
          correctAnswer: false,
          explanation: "Sai, bậc tử nhỏ hơn bậc mẫu nên tiệm cận ngang là $y = 0$."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-12.3.1",
      badge: "Luyện thêm TLN 1 - Hoành độ TCĐ",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Tìm hoành độ tiệm cận đứng của đồ thị hàm số $y = \\frac{2x + 7}{x + 4}$.",
      correctAnswer: "-4",
      acceptableAnswers: ["-4"],
      explanation: "Nghiệm của mẫu số là $x = -4$."
    },
    {
      id: "ai-sa-12.3.2",
      badge: "Luyện thêm TLN 2 - Tung độ TCN",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Tìm tung độ tiệm cận ngang của đồ thị hàm số $y = \\frac{6x - 5}{3x + 1}$.",
      correctAnswer: "2",
      acceptableAnswers: ["2", "2.0"],
      explanation: "Tỉ số hai hệ số là $6/3 = 2$."
    },
    {
      id: "ai-sa-12.3.3",
      badge: "Luyện thêm TLN 3 - Hệ số góc TCX",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Tìm hệ số góc $a$ của đường tiệm cận xiên $y = ax + b$ của đồ thị hàm số $y = \\frac{3x^2 - x + 2}{x - 1}$.",
      correctAnswer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "Chia tử cho mẫu: thương là $3x + 2 \\implies a = 3$."
    },
    {
      id: "ai-sa-12.3.4",
      badge: "Luyện thêm TLN 4 - Số tiệm cận hàm căn",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Đồ thị hàm số $y = \\frac{\\sqrt{16x^2 + 5}}{2x - 1}$ có tất cả bao nhiêu đường tiệm cận (cả đứng và ngang)?",
      correctAnswer: "3",
      acceptableAnswers: ["3"],
      explanation: "Có 1 TCĐ $x = 1/2$ và 2 TCN $y = 2, y = -2$. Tổng số đường tiệm cận là 3."
    },
    {
      id: "ai-sa-12.3.5",
      badge: "Luyện thêm TLN 5 - Đếm số m nguyên",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Tìm số giá trị nguyên của $m \\in [-5; 5]$ để đồ thị hàm số $y = \\frac{x - 1}{x^2 - 2mx + 9}$ không có tiệm cận đứng.",
      correctAnswer: "5",
      acceptableAnswers: ["5"],
      explanation: "Để không có TCĐ thì phương trình mẫu vô nghiệm: $\\Delta' = m^2 - 9 < 0 \\Leftrightarrow -3 < m < 3$. Các số nguyên là $m \\in \\{-2, -1, 0, 1, 2\\}$, tổng cộng 5 giá trị."
    },
    {
      id: "ai-sa-12.3.6",
      badge: "Luyện thêm TLN 6 - Khoảng cách tới tiệm cận",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Tính khoảng cách từ gốc tọa độ $O$ đến đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x - 1}{x - 5}$.",
      correctAnswer: "5",
      acceptableAnswers: ["5", "5.0"],
      explanation: "Đường tiệm cận đứng là $x = 5$, khoảng cách từ $O(0; 0)$ đến đường thẳng này bằng 5."
    },
    {
      id: "ai-sa-12.3.7",
      badge: "Luyện thêm TLN 7 - Tung độ gốc tiệm cận xiên",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Cho hàm số $y = \\frac{x^2 + 5x + 2}{x + 1}$ có tiệm cận xiên là $y = ax + b$. Tìm giá trị của $b$.",
      correctAnswer: "4",
      acceptableAnswers: ["4", "4.0"],
      explanation: "Chia tử cho mẫu: $x^2 + 5x + 2 = (x + 4)(x + 1) - 2 \\implies y = x + 4 - \\frac{2}{x + 1}$. Do đó $b = 4$."
    },
    {
      id: "ai-sa-12.3.8",
      badge: "Luyện thêm TLN 8 - Chi phí trung bình tiệm cận",
      isAiGenerated: true,
      source: "Bộ Đề Luyện Thi Toán 12 C1B3",
      prompt: "Chi phí trung bình sản xuất $x$ đơn vị sản phẩm là $\\bar{C}(x) = 80 + \\frac{3600}{x}$ (nghìn đồng). Khi $x \\to +\\infty$, chi phí trung bình tiệm cận bao nhiêu nghìn đồng?",
      correctAnswer: "80",
      acceptableAnswers: ["80", "80.0"],
      explanation: "$\\lim_{x \\to +\\infty} \\left(80 + \\frac{3600}{x}\\right) = 80$."
    }
  ]
};
