import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";
import type { Grade12AiPracticePackage } from "./grade12AiPracticeData";

export const GRADE_12_LESSON_4: DetailedLessonData = {
  id: "t12-b4-khao-sat-do-thi",
  lessonNumber: 4,
  title: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
  bookChapter: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tình huống: Khảo sát quỹ đạo khí động học, mô hình cung - cầu kinh tế và quy luật năng suất cận biên",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Mai",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy, sau khi đã học về tính đơn điệu, cực trị và tiệm cận, làm thế nào để chúng ta kết hợp tất cả các kiến thức đó thành một quy trình chuẩn mực để vẽ được bức tranh hoàn chỉnh của một hàm số bất kỳ ạ?",
      visualGraphic: "graph",
      mathNote: "\\text{Quy trinh 3 buoc: TXD } \\to \\text{Bien thien (y', cuc tri, tiem can, BBT) } \\to \\text{Ve do thi}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Mai! Đó chính là bài toán khảo sát hàm số - kỹ năng tổng hợp quan trọng bậc nhất của giải tích lớp 12! Đặc biệt, trong chương trình GDPT 2018, chúng ta tập trung vào 3 dạng hàm cốt lõi: hàm đa thức bậc ba, hàm phân thức bậc nhất trên bậc nhất, và hàm phân thức bậc hai trên bậc nhất. Mỗi hàm đều có những đặc trưng đối xứng hình học tuyệt đẹp!",
      visualGraphic: "circle",
      mathNote: "\\text{Ham bac 3: Tam doi xung la diem uon } U(x_0; y_0); \\text{ Ham phan thuc: Tam doi xung la giao hai tiem can } I(x_I; y_I)"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Mai",
      avatar: "🧑‍🎓",
      speech: "Dạ thưa Thầy, trong các đề thi THPT và Đánh giá năng lực mới, dạng bài nhận dạng đồ thị và xác định dấu các hệ số $a, b, c, d$ xuất hiện rất nhiều. Có mẹo nào để xử lý nhanh và chính xác không ạ?",
      visualGraphic: "graph",
      mathNote: "\\text{Chot chan: } (1) \\lim_{x\\to +\\infty} y \\to \\text{dau } a; \\; (2) \\text{Giao } Oy (x=0); \\; (3) \\text{Tiem can dung/ngang/xien}; \\; (4) \\text{Cuc tri / Tam doi xung}"
    }
  ],
  youtubeVideoId: "uA8_12_4_vid1",
  youtubeVideoTitle: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số - Toán 12 KNTT",
  youtubeVideos: [
    {
      id: "uA8_12_4_vid1",
      title: "Tiết 1: Sơ đồ tổng quát & Khảo sát hàm số bậc ba y = ax^3 + bx^2 + cx + d"
    },
    {
      id: "uA8_12_4_vid2",
      title: "Tiết 2: Khảo sát hàm phân thức bậc nhất / bậc nhất y = (ax+b)/(cx+d)"
    },
    {
      id: "uA8_12_4_vid3",
      title: "Tiết 3: Khảo sát hàm phân thức bậc hai / bậc nhất y = (ax^2+bx+c)/(px+q) & Nhận dạng đồ thị"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.4.1",
      title: "Ví dụ 1 (Tiết 1): Tâm đối xứng của đồ thị hàm số bậc ba",
      question: "Đồ thị hàm số $y = x^3 - 3x^2 + 2$ có điểm uốn (tâm đối xứng) là điểm nào dưới đây?",
      options: [
        "$I(1; 0)$",
        "$I(0; 2)$",
        "$I(2; -2)$",
        "$I(-1; -2)$"
      ],
      correctIndex: 0,
      explanation: "Ta có $y' = 3x^2 - 6x$ và $y'' = 6x - 6$. Cho $y'' = 0 \\Leftrightarrow x = 1$. Thay $x = 1$ vào hàm số được $y(1) = 1^3 - 3(1)^2 + 2 = 0$. Vậy đồ thị hàm số luôn nhận điểm uốn $I(1; 0)$ làm tâm đối xứng."
    },
    {
      id: "vq-12.4.2",
      title: "Ví dụ 2 (Tiết 2): Tâm đối xứng của đồ thị hàm phân thức bậc 1 trên bậc 1",
      question: "Tâm đối xứng của đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ là giao điểm của hai đường tiệm cận, có tọa độ là:",
      options: [
        "$I(-1; 2)$",
        "$I(1; 2)$",
        "$I(-1; -3)$",
        "$I(2; -1)$"
      ],
      correctIndex: 0,
      explanation: "Đồ thị hàm số có tiệm cận đứng là $x = -1$ và tiệm cận ngang là $y = 2$. Do đó tâm đối xứng của đồ thị (giao điểm của hai đường tiệm cận) là $I(-1; 2)$."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Sơ đồ tổng quát khảo sát sự biến thiên và vẽ đồ thị hàm số",
      points: [
        "Bước 1: Tìm tập xác định của hàm số $y = f(x)$.",
        "Bước 2: Khảo sát sự biến thiên: (a) Tính đạo hàm $y' = f'(x)$; tìm các điểm mà tại đó $y' = 0$ hoặc $y'$ không xác định. (b) Xét dấu của $y'$, suy ra các khoảng đồng biến, nghịch biến và các điểm cực trị của hàm số. (c) Tìm giới hạn tại vô cực, giới hạn vô cực và xác định các đường tiệm cận của đồ thị (tiệm cận đứng, tiệm cận ngang, tiệm cận xiên nếu có). (d) Lập bảng biến thiên tổng hợp toàn diện các thông tin.",
        "Bước 3: Vẽ đồ thị hàm số: (a) Xác định các điểm đặc biệt: giao điểm với trục tung $Oy$ (cho $x = 0 \\implies y$), giao điểm với trục hoành $Ox$ (giải $y = 0$), các điểm cực trị, điểm uốn. (b) Vẽ các đường tiệm cận nếu có (vẽ bằng nét đứt). (c) Nối các điểm bằng đường cong trơn mượt theo đúng chiều mũi tên trong bảng biến thiên. Chú ý tính đối xứng (tâm đối xứng, trục đối xứng nếu có)."
      ],
      exampleProblem: "Khảo sát sự biến thiên và vẽ đồ thị hàm số $y = x^3 - 3x$.",
      exampleSolution: "1. TXĐ: $D = \\mathbb{R}$.\n2. Sự biến thiên:\n- $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$.\n- Khoảng biến thiên: $y' > 0$ trên $(-\\infty; -1)$ và $(1; +\\infty)$ (đồng biến); $y' < 0$ trên $(-1; 1)$ (nghịch biến).\n- Cực trị: Điểm cực đại $(-1; 2)$, điểm cực tiểu $(1; -2)$.\n- Giới hạn: $\\lim_{x \\to -\\infty} y = -\\infty$, $\\lim_{x \\to +\\infty} y = +\\infty$.\n3. Đồ thị: Giao $Oy$ tại $(0; 0)$, giao $Ox$ tại $x = 0, x = \\pm\\sqrt{3}$. Tâm đối xứng là gốc tọa độ $O(0; 0)$ vì $y(-x) = -y(x)$ (hàm số lẻ)."
    },
    {
      index: "2",
      title: "2. Khảo sát hàm số đa thức bậc ba y = ax^3 + bx^2 + cx + d (a ≠ 0)",
      points: [
        "Tập xác định: $D = \\mathbb{R}$. Đạo hàm: $y' = 3ax^2 + 2bx + c$.",
        "Số điểm cực trị phụ thuộc dấu biệt thức $\\Delta' = b^2 - 3ac$ của $y'$: Nếu $\\Delta' > 0$, hàm số có 2 điểm cực trị phân biệt; Nếu $\\Delta' \\le 0$, hàm số không có cực trị (đơn điệu trên toàn bộ $\\mathbb{R}$).",
        "Tâm đối xứng của đồ thị: Đồ thị hàm bậc ba luôn nhận điểm uốn $U(x_0; y_0)$ làm tâm đối xứng, trong đó hoành độ $x_0 = -\\frac{b}{3a}$ là nghiệm của phương trình đạo hàm cấp hai $y'' = 6ax + 2b = 0$.",
        "Hình dạng đồ thị: Nhánh vô cùng bên phải hướng lên trên khi $a > 0$ và hướng xuống dưới khi $a < 0$."
      ],
      exampleProblem: "Tìm tọa độ điểm uốn (tâm đối xứng) của đồ thị hàm số $y = -x^3 + 3x^2 - 4$.",
      exampleSolution: "Ta có $y' = -3x^2 + 6x$, $y'' = -6x + 6$. Cho $y'' = 0 \\Leftrightarrow x = 1$. Với $x = 1 \\implies y(1) = -(1)^3 + 3(1)^2 - 4 = -2$. Vậy điểm uốn của đồ thị là $U(1; -2)$, đây chính là tâm đối xứng của đồ thị."
    },
    {
      index: "3",
      title: "3. Khảo sát hàm phân thức bậc nhất trên bậc nhất y = (ax+b)/(cx+d) (c ≠ 0, ad - bc ≠ 0)",
      points: [
        "Tập xác định: $D = \\mathbb{R} \\setminus \\{-\\frac{d}{c}\\}$. Đạo hàm: $y' = \\frac{ad - bc}{(cx + d)^2}$.",
        "Tính đơn điệu: Đạo hàm $y'$ luôn cùng dấu trên từng khoảng xác định. Nếu $ad - bc > 0$, hàm số đồng biến trên mỗi khoảng $(-\\infty; -\\frac{d}{c})$ và $(-\\frac{d}{c}; +\\infty)$. Nếu $ad - bc < 0$, hàm số nghịch biến trên từng khoảng đó. Hàm số không bao giờ có cực trị!",
        "Tiệm cận: Tiệm cận đứng $x = -\\frac{d}{c}$; Tiệm cận ngang $y = \\frac{a}{c}$.",
        "Tâm đối xứng: Giao điểm hai đường tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$ là tâm đối xứng của đồ thị.",
        "Đồ thị: Là một đường hyperbol gồm hai nhánh nằm ở hai góc phần tư đối đỉnh tạo bởi hai đường tiệm cận."
      ],
      exampleProblem: "Xác định tâm đối xứng và các khoảng đồng biến, nghịch biến của hàm số $y = \\frac{2x + 1}{x - 1}$.",
      exampleSolution: "TXĐ: $D = \\mathbb{R} \\setminus \\{1\\}$.\n$y' = \\frac{2(-1) - 1(1)}{(x-1)^2} = \\frac{-3}{(x-1)^2} < 0, \\; \\forall x \\ne 1$.\nDo đó hàm số nghịch biến trên mỗi khoảng $(-\\infty; 1)$ và $(1; +\\infty)$.\nTiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$. Tâm đối xứng của đồ thị là $I(1; 2)$."
    },
    {
      index: "4",
      title: "4. Khảo sát hàm phân thức bậc hai trên bậc nhất y = (ax^2+bx+c)/(px+q) (a ≠ 0, p ≠ 0)",
      points: [
        "Biến đổi chia đa thức: $y = mx + n + \\frac{k}{px + q}$ ($k \\ne 0$).",
        "Tập xác định: $D = \\mathbb{R} \\setminus \\{-\\frac{q}{p}\\}$.",
        "Tiệm cận: Tiệm cận đứng là $x = -\\frac{q}{p}$; Tiệm cận xiên là $y = mx + n$.",
        "Tâm đối xứng: Giao điểm $I$ của tiệm cận đứng và tiệm cận xiên là tâm đối xứng của đồ thị: $x_I = -\\frac{q}{p}, \\; y_I = m\\left(-\\frac{q}{p}\\right) + n$.",
        "Cực trị: Nếu $y' = 0$ có 2 nghiệm phân biệt thì đồ thị có 2 điểm cực trị nằm về 2 phía của tiệm cận đứng và đối xứng nhau qua tâm đối xứng $I$."
      ],
      exampleProblem: "Tìm phương trình các đường tiệm cận và tọa độ tâm đối xứng của đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$.",
      exampleSolution: "Chia tử cho mẫu: $y = x + \\frac{1}{x - 1}$.\n- Tiệm cận đứng: $x = 1$.\n- Tiệm cận xiên: $y = x$ (vì $\\lim_{x \\to \\pm\\infty} [y - x] = \\lim_{x \\to \\pm\\infty} \\frac{1}{x-1} = 0$).\n- Tọa độ giao điểm của hai tiệm cận: Cho $x = 1 \\implies y = 1$. Vậy tâm đối xứng là $I(1; 1)$."
    },
    {
      index: "5",
      title: "5. Kỹ thuật nhận diện đồ thị và ứng dụng giải toán thực tế",
      points: [
        "Xác định dấu các hệ số của hàm bậc ba: (1) Nhánh cuối cùng bên phải đi lên $\\implies a > 0$; đi xuống $\\implies a < 0$. (2) Giao điểm với trục $Oy$ tại $(0; d) \\implies$ dấu của $d$. (3) Hoành độ điểm uốn $x_0 = -\\frac{b}{3a} \\implies$ dấu của $b$. (4) Tích hai điểm cực trị $x_1 x_2 = \\frac{c}{3a} \\implies$ dấu của $c$.",
        "Xác định dấu các hệ số của hàm phân thức $y = \\frac{ax+b}{cx+d}$: (1) Tiệm cận đứng $x = -\\frac{d}{c}$. (2) Tiệm cận ngang $y = \\frac{a}{c}$. (3) Giao điểm $Oy$ tại $\\left(0; \\frac{b}{d}\\right)$. (4) Giao điểm $Ox$ tại $\\left(-\\frac{b}{a}; 0\\right)$.",
        "Biện luận nghiệm phương trình bằng đồ thị: Số nghiệm của phương trình $f(x) = g(x, m)$ chính là số giao điểm của đồ thị $(C): y = f(x)$ với đường thẳng $d: y = g(x, m)$."
      ],
      exampleProblem: "Dựa vào đồ thị hàm số $y = x^3 - 3x$, tìm tất cả các giá trị của tham số $m$ để phương trình $x^3 - 3x - m = 0$ có 3 nghiệm thực phân biệt.",
      exampleSolution: "Phương trình tương đương: $x^3 - 3x = m$. Số nghiệm của phương trình là số giao điểm giữa đồ thị $(C): y = x^3 - 3x$ và đường thẳng nằm ngang $d: y = m$. Dựa vào đồ thị, hàm số có điểm cực đại $(-1; 2)$ và cực tiểu $(1; -2)$. Đường thẳng $y = m$ cắt đồ thị tại 3 điểm phân biệt khi và chỉ khi $y_{\\text{CT}} < m < y_{\\text{CD}} \\Leftrightarrow -2 < m < 2$."
    }
  ],
  quizQuestions: [
    {
      id: "q-12.4.1",
      badge: "NB 1 - Nhận dạng đồ thị hàm bậc ba a > 0",
      source: "Đề tham khảo Tốt nghiệp THPT 2025 - Bộ GD&ĐT",
      svgDiagram: `<svg viewBox="0 0 400 320" class="w-full max-w-md mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid12_4_1" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" />
    </pattern>
    <marker id="arr12_4_1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="400" height="320" fill="#0f172a" rx="8" />
  <rect width="400" height="320" fill="url(#grid12_4_1)" />
  <line x1="20" y1="160" x2="380" y2="160" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_1)" />
  <line x1="200" y1="300" x2="200" y2="20" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_1)" />
  <text x="385" y="165" fill="#94a3b8" font-size="14" font-style="italic" font-family="Times New Roman, serif">x</text>
  <text x="205" y="18" fill="#94a3b8" font-size="14" font-style="italic" font-family="Times New Roman, serif">y</text>
  <text x="188" y="178" fill="#94a3b8" font-size="13" font-family="Times New Roman, serif">O</text>
  <!-- Vạch chia trục Ox: -2, -1, 1, 2 -->
  <line x1="120" y1="157" x2="120" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="120" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">-2</text>
  <line x1="160" y1="157" x2="160" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="160" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">-1</text>
  <line x1="240" y1="157" x2="240" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="240" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">1</text>
  <line x1="280" y1="157" x2="280" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="280" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">2</text>
  <!-- Vạch chia trục Oy: -2, 2 -->
  <line x1="197" y1="80" x2="203" y2="80" stroke="#94a3b8" stroke-width="1.2" />
  <text x="188" y="84" fill="#94a3b8" font-size="12" text-anchor="end">2</text>
  <line x1="197" y1="240" x2="203" y2="240" stroke="#94a3b8" stroke-width="1.2" />
  <text x="188" y="244" fill="#94a3b8" font-size="12" text-anchor="end">-2</text>
  <!-- Dóng cực đại (-1; 2) và cực tiểu (1; -2) -->
  <line x1="160" y1="160" x2="160" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="160" y1="80" x2="200" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="240" y1="160" x2="240" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="240" y1="240" x2="200" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <!-- Dóng tại mốc (2; 2) và (-2; -2) -->
  <line x1="280" y1="160" x2="280" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="280" y1="80" x2="200" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="120" y1="160" x2="120" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="120" y1="240" x2="200" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <!-- Đồ thị chuẩn xác 100%: y = x^3 - 3x -->
  <path d="M 115.2 286.7 L 116.4 274.4 L 117.6 262.5 L 118.8 251.0 L 120.0 240.0 L 121.2 229.4 L 122.4 219.3 L 123.6 209.5 L 124.8 200.2 L 126.0 191.3 L 127.2 182.7 L 128.4 174.6 L 129.6 166.9 L 130.8 159.5 L 132.0 152.5 L 133.2 145.9 L 134.4 139.6 L 135.6 133.7 L 136.8 128.2 L 138.0 123.0 L 139.2 118.1 L 140.4 113.5 L 141.6 109.3 L 142.8 105.4 L 144.0 101.8 L 145.2 98.5 L 146.4 95.4 L 147.6 92.7 L 148.8 90.3 L 150.0 88.1 L 151.2 86.2 L 152.4 84.6 L 153.6 83.2 L 154.8 82.1 L 156.0 81.2 L 157.2 80.6 L 158.4 80.2 L 159.6 80.0 L 160.8 80.0 L 162.0 80.3 L 163.2 80.7 L 164.4 81.4 L 165.6 82.2 L 166.8 83.3 L 168.0 84.5 L 169.2 85.9 L 170.4 87.4 L 171.6 89.1 L 172.8 91.0 L 174.0 93.0 L 175.2 95.1 L 176.4 97.4 L 177.6 99.8 L 178.8 102.4 L 180.0 105.0 L 181.2 107.8 L 182.4 110.6 L 183.6 113.6 L 184.8 116.6 L 186.0 119.7 L 187.2 122.9 L 188.4 126.2 L 189.6 129.5 L 190.8 132.9 L 192.0 136.3 L 193.2 139.8 L 194.4 143.3 L 195.6 146.9 L 196.8 150.4 L 198.0 154.0 L 199.2 157.6 L 200.4 161.2 L 201.6 164.8 L 202.8 168.4 L 204.0 172.0 L 205.2 175.5 L 206.4 179.0 L 207.6 182.5 L 208.8 186.0 L 210.0 189.4 L 211.2 192.7 L 212.4 196.0 L 213.6 199.2 L 214.8 202.4 L 216.0 205.4 L 217.2 208.4 L 218.4 211.3 L 219.6 214.1 L 220.8 216.8 L 222.0 219.3 L 223.2 221.8 L 224.4 224.1 L 225.6 226.3 L 226.8 228.4 L 228.0 230.3 L 229.2 232.0 L 230.4 233.6 L 231.6 235.1 L 232.8 236.3 L 234.0 237.4 L 235.2 238.3 L 236.4 239.1 L 237.6 239.6 L 238.8 239.9 L 240.0 240.0 L 241.2 239.9 L 242.4 239.6 L 243.6 239.0 L 244.8 238.2 L 246.0 237.2 L 247.2 235.9 L 248.4 234.3 L 249.6 232.5 L 250.8 230.5 L 252.0 228.1 L 253.2 225.5 L 254.4 222.6 L 255.6 219.4 L 256.8 215.9 L 258.0 212.1 L 259.2 207.9 L 260.4 203.5 L 261.6 198.7 L 262.8 193.6 L 264.0 188.2 L 265.2 182.4 L 266.4 176.2 L 267.6 169.7 L 268.8 162.9 L 270.0 155.6 L 271.2 148.0 L 272.4 140.0 L 273.6 131.6 L 274.8 122.8 L 276.0 113.6 L 277.2 104.0 L 278.4 94.0 L 279.6 83.6 L 280.8 72.7 L 282.0 61.4 L 283.2 49.6 L 284.4 37.4 L 285.6 24.8" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <!-- Các điểm mốc -->
  <circle cx="160" cy="80" r="4" fill="#facc15" />
  <circle cx="240" cy="240" r="4" fill="#facc15" />
  <circle cx="200" cy="160" r="3.5" fill="#38bdf8" />
  <circle cx="280" cy="80" r="3" fill="#38bdf8" />
  <circle cx="120" cy="240" r="3" fill="#38bdf8" />
</svg>`,

      question: "Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?",
      options: [
        "$y = x^3 - 3x$",
        "$y = -x^3 + 3x$",
        "$y = x^4 - 2x^2$",
        "$y = x^3 - 3x^2$"
      ],
      correctIndex: 0,
      explanation: "Đường cong là đồ thị của hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ có nhánh vô cùng bên phải đi lên nên $a > 0$ (loại phương án $y = -x^3 + 3x$). Đồ thị đi qua gốc tọa độ $O(0; 0)$ và có điểm cực đại $(-1; 2)$, điểm cực tiểu $(1; -2)$. Thay tọa độ vào ta thấy chỉ có hàm số $y = x^3 - 3x$ thỏa mãn."
    },
    {
      id: "q-12.4.2",
      badge: "NB 2 - Đọc tọa độ tâm đối xứng từ đồ thị bậc ba",
      source: "Đề khảo sát chất lượng THPT",
      svgDiagram: `<svg viewBox="0 0 400 320" class="w-full max-w-md mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid12_4_2" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" />
    </pattern>
    <marker id="arr12_4_2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="400" height="320" fill="#0f172a" rx="8" />
  <rect width="400" height="320" fill="url(#grid12_4_2)" />
  <line x1="20" y1="160" x2="380" y2="160" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_2)" />
  <line x1="160" y1="300" x2="160" y2="20" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_2)" />
  <text x="385" y="165" fill="#94a3b8" font-size="14" font-style="italic">x</text>
  <text x="165" y="18" fill="#94a3b8" font-size="14" font-style="italic">y</text>
  <text x="148" y="178" fill="#94a3b8" font-size="13">O</text>
  <!-- Trục Ox ticks: 1, 2 -->
  <line x1="200" y1="157" x2="200" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="200" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">1</text>
  <line x1="240" y1="157" x2="240" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="240" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">2</text>
  <!-- Trục Oy ticks: 2, -2 -->
  <line x1="157" y1="80" x2="163" y2="80" stroke="#94a3b8" stroke-width="1.2" />
  <text x="148" y="84" fill="#94a3b8" font-size="12" text-anchor="end">2</text>
  <line x1="157" y1="240" x2="163" y2="240" stroke="#94a3b8" stroke-width="1.2" />
  <text x="148" y="244" fill="#94a3b8" font-size="12" text-anchor="end">-2</text>
  <!-- Dóng cực tiểu (2; -2) -->
  <line x1="240" y1="160" x2="240" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="240" y1="240" x2="160" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <!-- Đồ thị chuẩn xác 100%: y = x^3 - 3x^2 + 2 -->
  <path d="M 115.2 286.7 L 116.4 274.4 L 117.6 262.5 L 118.8 251.0 L 120.0 240.0 L 121.2 229.4 L 122.4 219.3 L 123.6 209.5 L 124.8 200.2 L 126.0 191.3 L 127.2 182.7 L 128.4 174.6 L 129.6 166.9 L 130.8 159.5 L 132.0 152.5 L 133.2 145.9 L 134.4 139.6 L 135.6 133.7 L 136.8 128.2 L 138.0 123.0 L 139.2 118.1 L 140.4 113.5 L 141.6 109.3 L 142.8 105.4 L 144.0 101.8 L 145.2 98.5 L 146.4 95.4 L 147.6 92.7 L 148.8 90.3 L 150.0 88.1 L 151.2 86.2 L 152.4 84.6 L 153.6 83.2 L 154.8 82.1 L 156.0 81.2 L 157.2 80.6 L 158.4 80.2 L 159.6 80.0 L 160.8 80.0 L 162.0 80.3 L 163.2 80.7 L 164.4 81.4 L 165.6 82.2 L 166.8 83.3 L 168.0 84.5 L 169.2 85.9 L 170.4 87.4 L 171.6 89.1 L 172.8 91.0 L 174.0 93.0 L 175.2 95.1 L 176.4 97.4 L 177.6 99.8 L 178.8 102.4 L 180.0 105.0 L 181.2 107.8 L 182.4 110.6 L 183.6 113.6 L 184.8 116.6 L 186.0 119.7 L 187.2 122.9 L 188.4 126.2 L 189.6 129.5 L 190.8 132.9 L 192.0 136.3 L 193.2 139.8 L 194.4 143.3 L 195.6 146.9 L 196.8 150.4 L 198.0 154.0 L 199.2 157.6 L 200.4 161.2 L 201.6 164.8 L 202.8 168.4 L 204.0 172.0 L 205.2 175.5 L 206.4 179.0 L 207.6 182.5 L 208.8 186.0 L 210.0 189.4 L 211.2 192.7 L 212.4 196.0 L 213.6 199.2 L 214.8 202.4 L 216.0 205.4 L 217.2 208.4 L 218.4 211.3 L 219.6 214.1 L 220.8 216.8 L 222.0 219.3 L 223.2 221.8 L 224.4 224.1 L 225.6 226.3 L 226.8 228.4 L 228.0 230.3 L 229.2 232.0 L 230.4 233.6 L 231.6 235.1 L 232.8 236.3 L 234.0 237.4 L 235.2 238.3 L 236.4 239.1 L 237.6 239.6 L 238.8 239.9 L 240.0 240.0 L 241.2 239.9 L 242.4 239.6 L 243.6 239.0 L 244.8 238.2 L 246.0 237.2 L 247.2 235.9 L 248.4 234.3 L 249.6 232.5 L 250.8 230.5 L 252.0 228.1 L 253.2 225.5 L 254.4 222.6 L 255.6 219.4 L 256.8 215.9 L 258.0 212.1 L 259.2 207.9 L 260.4 203.5 L 261.6 198.7 L 262.8 193.6 L 264.0 188.2 L 265.2 182.4 L 266.4 176.2 L 267.6 169.7 L 268.8 162.9 L 270.0 155.6 L 271.2 148.0 L 272.4 140.0 L 273.6 131.6 L 274.8 122.8 L 276.0 113.6 L 277.2 104.0 L 278.4 94.0 L 279.6 83.6 L 280.8 72.7 L 282.0 61.4 L 283.2 49.6 L 284.4 37.4 L 285.6 24.8" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <circle cx="160" cy="80" r="4" fill="#facc15" />
  <circle cx="240" cy="240" r="4" fill="#facc15" />
  <circle cx="200" cy="160" r="4.5" fill="#f43f5e" />
  <text x="202" y="150" fill="#f43f5e" font-size="13" font-weight="bold">I</text>
</svg>`,

      question: "Đồ thị hàm số $y = x^3 - 3x^2 + 2$ nhận điểm nào sau đây làm tâm đối xứng?",
      options: [
        "$I(1; 0)$",
        "$I(0; 2)$",
        "$I(2; -2)$",
        "$I(0; 0)$"
      ],
      correctIndex: 0,
      explanation: "Tâm đối xứng của đồ thị hàm bậc ba là điểm uốn $I(x_0; y_0)$ với $x_0$ là nghiệm phương trình $y'' = 0$. Ta có $y' = 3x^2 - 6x$, $y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\implies y(1) = 0$. Vậy tâm đối xứng là $I(1; 0)$."
    },
    {
      id: "q-12.4.3",
      badge: "NB 3 - Nhận diện đồ thị hàm phân thức 1/1",
      source: "Đề thi Tốt nghiệp THPT",
      svgDiagram: `<svg viewBox="0 0 420 320" class="w-full max-w-md mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid12_4_3" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#1e293b" stroke-width="0.8" />
    </pattern>
    <marker id="arr12_4_3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="420" height="320" fill="#0f172a" rx="8" />
  <rect width="420" height="320" fill="url(#grid12_4_3)" />

  <!-- Trục tọa độ Ox: y = 222 (y = 0) -->
  <line x1="20" y1="222" x2="400" y2="222" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_3)" />
  <text x="405" y="226" fill="#94a3b8" font-size="14" font-style="italic">x</text>

  <!-- Trục tọa độ Oy: x = 236 (x = 0) -->
  <line x1="236" y1="300" x2="236" y2="18" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_3)" />
  <text x="242" y="18" fill="#94a3b8" font-size="14" font-style="italic">y</text>

  <!-- Gốc tọa độ O -->
  <text x="222" y="238" fill="#94a3b8" font-size="13">O</text>

  <!-- Tiệm cận đứng x = -1 (x = 200) nét đứt màu vàng hổ phách -->
  <line x1="200" y1="18" x2="200" y2="300" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="5 3" />
  <text x="195" y="32" fill="#f59e0b" font-size="12" text-anchor="end" font-weight="bold">x = -1</text>

  <!-- Tiệm cận ngang y = 2 (y = 150) nét đứt màu vàng hổ phách -->
  <line x1="20" y1="150" x2="400" y2="150" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="5 3" />
  <text x="395" y="142" fill="#f59e0b" font-size="12" text-anchor="end" font-weight="bold">y = 2</text>

  <!-- Nhánh trái: x < -1 đối xứng hoàn hảo qua I(-1, 2) -->
  <path d="M 30.1 127.1 L 31.9 126.9 L 33.7 126.6 L 35.5 126.4 L 37.2 126.1 L 39.0 125.8 L 40.8 125.6 L 42.5 125.3 L 44.3 125.0 L 46.0 124.8 L 47.7 124.5 L 49.4 124.2 L 51.2 123.9 L 52.9 123.6 L 54.6 123.3 L 56.2 123.0 L 57.9 122.6 L 59.6 122.3 L 61.2 122.0 L 62.9 121.6 L 64.5 121.3 L 66.2 120.9 L 67.8 120.6 L 69.4 120.2 L 71.0 119.9 L 72.6 119.5 L 74.2 119.1 L 75.8 118.7 L 77.4 118.3 L 79.0 117.9 L 80.5 117.5 L 82.1 117.0 L 83.6 116.6 L 85.2 116.1 L 86.7 115.7 L 88.2 115.2 L 89.7 114.7 L 91.2 114.3 L 92.7 113.8 L 94.2 113.3 L 95.7 112.7 L 97.1 112.2 L 98.6 111.7 L 100.1 111.1 L 101.5 110.5 L 102.9 109.9 L 104.4 109.3 L 105.8 108.7 L 107.2 108.1 L 108.6 107.5 L 110.0 106.8 L 111.4 106.1 L 112.7 105.4 L 114.1 104.7 L 115.5 104.0 L 116.8 103.3 L 118.2 102.5 L 119.5 101.7 L 120.8 100.9 L 122.2 100.1 L 123.5 99.2 L 124.8 98.3 L 126.1 97.4 L 127.3 96.5 L 128.6 95.5 L 129.9 94.5 L 131.1 93.5 L 132.4 92.5 L 133.6 91.4 L 134.9 90.3 L 136.1 89.1 L 137.3 88.0 L 138.5 86.7 L 139.7 85.5 L 140.9 84.2 L 142.1 82.8 L 143.3 81.4 L 144.5 80.0 L 145.6 78.5 L 146.8 77.0 L 147.9 75.3 L 149.1 73.7 L 150.2 72.0 L 151.3 70.2 L 152.4 68.3 L 153.5 66.4 L 154.6 64.4 L 155.7 62.3 L 156.8 60.1 L 157.8 57.8 L 158.9 55.4 L 159.9 52.9 L 161.0 50.3 L 162.0 47.6 L 163.1 44.8 L 164.1 41.8 L 165.1 38.7 L 166.1 35.4 L 167.1 31.9 L 168.1 28.3 L 169.0 24.4" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />

  <!-- Nhánh phải: x > -1 đối xứng hoàn hảo qua I(-1, 2) -->
  <path d="M 231.0 275.6 L 231.9 271.7 L 232.9 268.1 L 233.9 264.6 L 234.9 261.3 L 235.9 258.2 L 236.9 255.2 L 238.0 252.4 L 239.0 249.7 L 240.1 247.1 L 241.1 244.6 L 242.2 242.2 L 243.2 239.9 L 244.3 237.7 L 245.4 235.6 L 246.5 233.6 L 247.6 231.7 L 248.7 229.8 L 249.8 228.0 L 250.9 226.3 L 252.1 224.7 L 253.2 223.0 L 254.4 221.5 L 255.5 220.0 L 256.7 218.6 L 257.9 217.2 L 259.1 215.8 L 260.3 214.5 L 261.5 213.3 L 262.7 212.0 L 263.9 210.9 L 265.1 209.7 L 266.4 208.6 L 267.6 207.5 L 268.9 206.5 L 270.1 205.5 L 271.4 204.5 L 272.7 203.5 L 273.9 202.6 L 275.2 201.7 L 276.5 200.8 L 277.8 199.9 L 279.2 199.1 L 280.5 198.3 L 281.8 197.5 L 283.2 196.7 L 284.5 196.0 L 285.9 195.3 L 287.3 194.6 L 288.6 193.9 L 290.0 193.2 L 291.4 192.5 L 292.8 191.9 L 294.2 191.3 L 295.6 190.7 L 297.1 190.1 L 298.5 189.5 L 299.9 188.9 L 301.4 188.3 L 302.9 187.8 L 304.3 187.3 L 305.8 186.7 L 307.3 186.2 L 308.8 185.7 L 310.3 185.3 L 311.8 184.8 L 313.3 184.3 L 314.8 183.9 L 316.4 183.4 L 317.9 183.0 L 319.5 182.5 L 321.0 182.1 L 322.6 181.7 L 324.2 181.3 L 325.8 180.9 L 327.4 180.5 L 329.0 180.1 L 330.6 179.8 L 332.2 179.4 L 333.8 179.1 L 335.5 178.7 L 337.1 178.4 L 338.8 178.0 L 340.4 177.7 L 342.1 177.4 L 343.8 177.0 L 345.4 176.7 L 347.1 176.4 L 348.8 176.1 L 350.6 175.8 L 352.3 175.5 L 354.0 175.2 L 355.7 175.0 L 357.5 174.7 L 359.2 174.4 L 361.0 174.2 L 362.8 173.9 L 364.5 173.6 L 366.3 173.4 L 368.1 173.1 L 369.9 172.9" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />

  <!-- Tâm đối xứng I(-1; 2) tại (200, 150) -->
  <circle cx="200" cy="150" r="4.5" fill="#f43f5e" />
  <text x="186" y="144" fill="#f43f5e" font-size="13" font-weight="bold">I</text>

  <!-- Điểm giao Oy (0; -1) tại (236, 258) -->
  <circle cx="236" cy="258" r="3.5" fill="#facc15" />
  <text x="247" y="262" fill="#facc15" font-size="11" font-weight="bold">-1</text>

  <!-- Điểm giao Ox (0.5; 0) tại (254, 222) -->
  <circle cx="254" cy="222" r="3.5" fill="#facc15" />
  <text x="256" y="238" fill="#facc15" font-size="11" font-weight="bold">1/2</text>
</svg>`,

      question: "Đường cong trong hình vẽ là đồ thị của hàm số nào dưới đây?",
      options: [
        "$y = \\frac{2x - 1}{x + 1}$",
        "$y = \\frac{2x + 1}{x - 1}$",
        "$y = \\frac{x - 2}{x + 1}$",
        "$y = \\frac{-2x + 1}{x + 1}$"
      ],
      correctIndex: 0,
      explanation: "Quan sát đồ thị ta thấy: (1) Đường tiệm cận đứng là $x = -1$ nên loại hàm có mẫu $x - 1$. (2) Đường tiệm cận ngang là $y = 2$ nên loại hàm có $y = 1$ hoặc $y = -2$. (3) Giao điểm với trục tung $Oy$ tại điểm $(0; -1)$. Do đó hàm số đúng là $y = \\frac{2x - 1}{x + 1}$."
    },
    {
      id: "q-12.4.4",
      badge: "NB 4 - Tâm đối xứng hàm phân thức bậc 2 trên bậc 1",
      source: "Đề thi thử chuyên KHTN",
      question: "Tâm đối xứng của đồ thị hàm số $y = \\frac{x^2 - 3x + 1}{x - 1}$ có tọa độ là:",
      options: [
        "$I(1; -1)$",
        "$I(1; 1)$",
        "$I(-1; 1)$",
        "$I(1; 2)$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $y = x - 2 - \\frac{1}{x - 1}$. Đường tiệm cận đứng là $x = 1$, tiệm cận xiên là $y = x - 2$. Tọa độ tâm đối xứng $I$ là giao điểm của hai đường tiệm cận: thay $x = 1$ vào phương trình tiệm cận xiên ta được $y = 1 - 2 = -1$. Vậy tâm đối xứng là $I(1; -1)$."
    },
    {
      id: "q-12.4.5",
      badge: "TH 5 - Nhận dạng hàm số từ bảng biến thiên",
      source: "Đề thi thử Sở GD&ĐT Hà Nội",
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
  <text x="110" y="36" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <text x="220" y="36" fill="#f8fafc" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">0</text>
  <text x="360" y="36" fill="#f8fafc" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">2</text>
  <text x="485" y="36" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <text x="165" y="76" fill="#f43f5e" font-size="17" font-weight="bold" text-anchor="middle">-</text>
  <text x="220" y="76" fill="#cbd5e1" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">0</text>
  <text x="290" y="76" fill="#10b981" font-size="17" font-weight="bold" text-anchor="middle">+</text>
  <text x="360" y="76" fill="#cbd5e1" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">0</text>
  <text x="425" y="76" fill="#f43f5e" font-size="17" font-weight="bold" text-anchor="middle">-</text>
  <text x="110" y="112" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <line x1="130" y1="116" x2="200" y2="154" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="220" y="162" fill="#38bdf8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">-1</text>
  <line x1="240" y1="154" x2="340" y2="116" stroke="#38bdf8" stroke-width="2" marker-end="url(#bbtArrUp)" />
  <text x="360" y="112" fill="#facc15" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">3</text>
  <line x1="380" y1="116" x2="465" y2="154" stroke="#f43f5e" stroke-width="2" marker-end="url(#bbtArrDown)" />
  <text x="485" y="162" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
</svg>`,
      question: "Bảng biến thiên trên là của hàm số nào trong các hàm số sau?",
      options: [
        "$y = -x^3 + 3x^2 - 1$",
        "$y = x^3 - 3x^2 - 1$",
        "$y = -x^3 + 3x - 1$",
        "$y = -x^3 + 3x^2 + 1$"
      ],
      correctIndex: 0,
      explanation: "Dựa vào bảng biến thiên: Khi $x \\to +\\infty$ thì $y \\to -\\infty$ nên hệ số $a < 0$. Hàm số có hai điểm cực trị là $x = 0$ (cực tiểu, $y = -1$) và $x = 2$ (cực đại, $y = 3$). Xét hàm số $y = -x^3 + 3x^2 - 1$: Ta có $y' = -3x^2 + 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$; $y(0) = -1$ và $y(2) = -(2)^3 + 3(2)^2 - 1 = 3$. Hoàn toàn khớp với bảng biến thiên."
    },
    {
      id: "q-12.4.6",
      badge: "TH 6 - Xác định dấu các hệ số của hàm bậc ba",
      source: "Đề thi thử THPT Quốc gia",
      svgDiagram: `<svg viewBox="0 0 400 320" class="w-full max-w-md mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid12_4_6" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" />
    </pattern>
    <marker id="arr12_4_6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="400" height="320" fill="#0f172a" rx="8" />
  <rect width="400" height="320" fill="url(#grid12_4_6)" />
  <line x1="20" y1="160" x2="380" y2="160" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_6)" />
  <line x1="180" y1="300" x2="180" y2="20" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_6)" />
  <text x="385" y="165" fill="#94a3b8" font-size="14" font-style="italic">x</text>
  <text x="185" y="18" fill="#94a3b8" font-size="14" font-style="italic">y</text>
  <text x="168" y="178" fill="#94a3b8" font-size="13">O</text>
  <!-- Đồ thị chuẩn xác 100%: y = x^3 - x^2 - 2x + 1 -->
  <path d="M 113.2 284.3 L 114.4 272.8 L 115.6 261.8 L 116.8 251.2 L 118.0 241.1 L 119.2 231.3 L 120.4 221.9 L 121.6 212.9 L 122.8 204.4 L 124.0 196.2 L 125.2 188.3 L 126.4 180.9 L 127.6 173.8 L 128.8 167.0 L 130.0 160.6 L 131.2 154.6 L 132.4 148.9 L 133.6 143.5 L 134.8 138.4 L 136.0 133.6 L 137.2 129.2 L 138.4 125.1 L 139.6 121.2 L 140.8 117.7 L 142.0 114.4 L 143.2 111.4 L 144.4 108.7 L 145.6 106.2 L 146.8 104.0 L 148.0 102.1 L 149.2 100.4 L 150.4 98.9 L 151.6 97.7 L 152.8 96.7 L 154.0 95.9 L 155.2 95.3 L 156.4 94.9 L 157.6 94.8 L 158.8 94.8 L 160.0 95.0 L 161.2 95.4 L 162.4 96.0 L 163.6 96.7 L 164.8 97.6 L 166.0 98.6 L 167.2 99.8 L 168.4 101.1 L 169.6 102.6 L 170.8 104.2 L 172.0 105.9 L 173.2 107.8 L 174.4 109.7 L 175.6 111.7 L 176.8 113.9 L 178.0 116.1 L 179.2 118.4 L 180.4 120.8 L 181.6 123.3 L 182.8 125.8 L 184.0 128.4 L 185.2 131.0 L 186.4 133.7 L 187.6 136.4 L 188.8 139.1 L 190.0 141.9 L 191.2 144.7 L 192.4 147.5 L 193.6 150.3 L 194.8 153.0 L 196.0 155.8 L 197.2 158.6 L 198.4 161.4 L 199.6 164.1 L 200.8 166.8 L 202.0 169.4 L 203.2 172.1 L 204.4 174.6 L 205.6 177.1 L 206.8 179.5 L 208.0 181.9 L 209.2 184.2 L 210.4 186.3 L 211.6 188.4 L 212.8 190.4 L 214.0 192.3 L 215.2 194.1 L 216.4 195.8 L 217.6 197.3 L 218.8 198.7 L 220.0 200.0 L 221.2 201.1 L 222.4 202.1 L 223.6 202.9 L 224.8 203.6 L 226.0 204.1 L 227.2 204.4 L 228.4 204.5 L 229.6 204.4 L 230.8 204.2 L 232.0 203.7 L 233.2 203.1 L 234.4 202.2 L 235.6 201.1 L 236.8 199.7 L 238.0 198.2 L 239.2 196.3 L 240.4 194.3 L 241.6 192.0 L 242.8 189.4 L 244.0 186.6 L 245.2 183.4 L 246.4 180.1 L 247.6 176.4 L 248.8 172.4 L 250.0 168.1 L 251.2 163.5 L 252.4 158.7 L 253.6 153.4 L 254.8 147.9 L 256.0 142.0 L 257.2 135.8 L 258.4 129.3 L 259.6 122.4 L 260.8 115.1 L 262.0 107.5 L 263.2 99.5 L 264.4 91.1 L 265.6 82.4 L 266.8 73.2 L 268.0 63.7 L 269.2 53.7 L 270.4 43.4 L 271.6 32.6 L 272.8 21.4" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <!-- Cắt Oy tại (0; 1) -> (180, 120) -->
  <circle cx="180" cy="120" r="4" fill="#facc15" />
  <text x="190" y="124" fill="#facc15" font-size="12">d</text>
  <!-- Cực đại (-0.55; 1.63) -> (158, 95) và cực tiểu (1.22; -1.11) -> (229, 204) -->
  <circle cx="158" cy="95" r="3.5" fill="#38bdf8" />
  <circle cx="229" cy="204" r="3.5" fill="#38bdf8" />
</svg>`,

      question: "Cho hàm số $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) có đồ thị như hình vẽ. Khẳng định nào sau đây là đúng?",
      options: [
        "$a > 0, b < 0, c < 0, d > 0$",
        "$a > 0, b > 0, c < 0, d > 0$",
        "$a < 0, b < 0, c > 0, d > 0$",
        "$a > 0, b < 0, c > 0, d < 0$"
      ],
      correctIndex: 0,
      explanation: "Phân tích dấu từng hệ số: (1) Nhánh cuối cùng đi lên khi $x \\to +\\infty \\implies a > 0$. (2) Đồ thị cắt trục tung tại điểm có tung độ dương $\\implies y(0) = d > 0$. (3) Hai điểm cực trị nằm về 2 phía trục tung nên $x_1 x_2 < 0 \\Leftrightarrow \\frac{c}{3a} < 0$. Do $a > 0 \\implies c < 0$. (4) Điểm uốn $I$ (nằm giữa 2 điểm cực trị) có hoành độ dương ($x_U > 0$). Do đó $x_U = -\\frac{b}{3a} > 0 \\implies b < 0$. Kết luận: $a > 0, b < 0, c < 0, d > 0$."
    },
    {
      id: "q-12.4.7",
      badge: "TH 7 - Nhận dạng hàm phân thức bậc 2 trên bậc 1",
      source: "Đề thi thử Sở GD&ĐT Nam Định",
      svgDiagram: `<svg viewBox="0 0 400 320" class="w-full max-w-md mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid12_4_7" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" />
    </pattern>
    <marker id="arr12_4_7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="400" height="320" fill="#0f172a" rx="8" />
  <rect width="400" height="320" fill="url(#grid12_4_7)" />
  <line x1="20" y1="160" x2="380" y2="160" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_7)" />
  <line x1="160" y1="300" x2="160" y2="20" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arr12_4_7)" />
  <text x="385" y="165" fill="#94a3b8" font-size="14" font-style="italic">x</text>
  <text x="165" y="18" fill="#94a3b8" font-size="14" font-style="italic">y</text>
  <text x="148" y="178" fill="#94a3b8" font-size="13">O</text>
  <!-- Tiệm cận đứng x = 1 (x = 200) -->
  <line x1="200" y1="20" x2="200" y2="300" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="4 3" />
  <text x="205" y="35" fill="#f59e0b" font-size="12">x = 1</text>
  <!-- Tiệm cận xiên y = x (qua O(160, 160) và (200, 120)) -->
  <line x1="30" y1="290" x2="310" y2="10" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="4 3" />
  <text x="315" y="25" fill="#f59e0b" font-size="12">y = x</text>
  <!-- Nhánh trái: x < 1 chuẩn 100% -->
  <path d="M 35.6 294.1 L 36.8 293.0 L 38.0 291.9 L 39.2 290.8 L 40.4 289.6 L 41.6 288.5 L 42.8 287.4 L 44.0 286.3 L 45.2 285.1 L 46.4 284.0 L 47.6 282.9 L 48.8 281.8 L 50.0 280.7 L 51.2 279.6 L 52.4 278.4 L 53.6 277.3 L 54.8 276.2 L 56.0 275.1 L 57.2 274.0 L 58.4 272.9 L 59.6 271.8 L 60.8 270.7 L 62.0 269.6 L 63.2 268.5 L 64.4 267.4 L 65.6 266.3 L 66.8 265.2 L 68.0 264.1 L 69.2 263.0 L 70.4 261.9 L 71.6 260.9 L 72.8 259.8 L 74.0 258.7 L 75.2 257.6 L 76.4 256.5 L 77.6 255.5 L 78.8 254.4 L 80.0 253.3 L 81.2 252.3 L 82.4 251.2 L 83.6 250.1 L 84.8 249.1 L 86.0 248.0 L 87.2 247.0 L 88.4 245.9 L 89.6 244.9 L 90.8 243.9 L 92.0 242.8 L 93.2 241.8 L 94.4 240.8 L 95.6 239.7 L 96.8 238.7 L 98.0 237.7 L 99.2 236.7 L 100.4 235.7 L 101.6 234.7 L 102.8 233.7 L 104.0 232.7 L 105.2 231.7 L 106.4 230.7 L 107.6 229.7 L 108.8 228.7 L 110.0 227.8 L 111.2 226.8 L 112.4 225.9 L 113.6 224.9 L 114.8 224.0 L 116.0 223.0 L 117.2 222.1 L 118.4 221.2 L 119.6 220.3 L 120.8 219.4 L 122.0 218.5 L 123.2 217.6 L 124.4 216.8 L 125.6 215.9 L 126.8 215.1 L 128.0 214.2 L 129.2 213.4 L 130.4 212.6 L 131.6 211.8 L 132.8 211.0 L 134.0 210.2 L 135.2 209.5 L 136.4 208.8 L 137.6 208.0 L 138.8 207.3 L 140.0 206.7 L 141.2 206.0 L 142.4 205.4 L 143.6 204.8 L 144.8 204.2 L 146.0 203.6 L 147.2 203.1 L 148.4 202.6 L 149.6 202.1 L 150.8 201.7 L 152.0 201.3 L 153.2 201.0 L 154.4 200.7 L 155.6 200.4 L 156.8 200.2 L 158.0 200.1 L 159.2 200.0 L 160.4 200.0 L 161.6 200.1 L 162.8 200.2 L 164.0 200.4 L 165.2 200.8 L 166.4 201.2 L 167.6 201.8 L 168.8 202.5 L 170.0 203.3 L 171.2 204.4 L 172.4 205.6 L 173.6 207.0 L 174.8 208.7 L 176.0 210.7 L 177.2 213.0 L 178.4 215.7 L 179.6 218.8 L 180.8 222.5 L 182.0 226.9 L 183.2 232.0 L 184.4 238.2 L 185.6 245.5 L 186.8 254.4 L 188.0 265.3" fill="none" stroke="#38bdf8" stroke-width="2.2" />
  <!-- Nhánh phải: x > 1 chuẩn 100% -->
  <path d="M 222.0 25.3 L 223.2 27.8 L 224.4 30.0 L 225.6 31.9 L 226.8 33.5 L 228.0 34.9 L 229.2 36.0 L 230.4 37.0 L 231.6 37.8 L 232.8 38.4 L 234.0 38.9 L 235.2 39.3 L 236.4 39.6 L 237.6 39.8 L 238.8 40.0 L 240.0 40.0 L 241.2 40.0 L 242.4 39.9 L 243.6 39.7 L 244.8 39.5 L 246.0 39.2 L 247.2 38.9 L 248.4 38.5 L 249.6 38.1 L 250.8 37.7 L 252.0 37.2 L 253.2 36.7 L 254.4 36.2 L 255.6 35.6 L 256.8 35.0 L 258.0 34.4 L 259.2 33.8 L 260.4 33.1 L 261.6 32.4 L 262.8 31.7 L 264.0 31.0 L 265.2 30.3 L 266.4 29.5 L 267.6 28.7 L 268.8 27.9 L 270.0 27.1 L 271.2 26.3 L 272.4 25.5 L 273.6 24.7" fill="none" stroke="#38bdf8" stroke-width="2.2" />
  <!-- Cực đại (0; -1) -> (160, 200) -->
  <circle cx="160" cy="200" r="4" fill="#facc15" />
  <text x="145" y="205" fill="#facc15" font-size="11">-1</text>
  <!-- Cực tiểu (2; 3) -> (240, 40) -->
  <circle cx="240" cy="40" r="4" fill="#facc15" />
  <text x="248" y="45" fill="#facc15" font-size="11">3</text>
  <!-- Tâm đối xứng I(1; 1) -> (200, 120) -->
  <circle cx="200" cy="120" r="4.5" fill="#f43f5e" />
  <text x="188" y="115" fill="#f43f5e" font-size="12" font-weight="bold">I</text>
</svg>`,

      question: "Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?",
      options: [
        "$y = \\frac{x^2 - x + 1}{x - 1}$",
        "$y = \\frac{x^2 + x + 1}{x - 1}$",
        "$y = \\frac{x^2 - 2x + 2}{x - 1}$",
        "$y = \\frac{x^2 + 1}{x - 1}$"
      ],
      correctIndex: 0,
      explanation: "Phân tích đồ thị: (1) Đường tiệm cận đứng là $x = 1$. (2) Đường tiệm cận xiên là $y = x$. (3) Đồ thị cắt trục tung tại điểm $(0; -1)$. Thay $x = 0$ vào hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ ta được $y(0) = \\frac{1}{-1} = -1$. Ngoài ra, $y = x + \\frac{1}{x-1}$ có tiệm cận xiên $y = x$ và cực tiểu tại $(2; 3)$, cực đại tại $(0; -1)$ hoàn toàn trùng khớp."
    },
    {
      id: "q-12.4.8",
      badge: "TH 8 - Biện luận số nghiệm phương trình bằng đồ thị",
      source: "Đề thi thử Sở GD&ĐT Nghệ An",
      question: "Cho hàm số $y = f(x)$ có đồ thị như hình vẽ sau (hàm bậc ba có điểm cực đại $(-1; 2)$ và điểm cực tiểu $(1; -2)$). Tìm tất cả các giá trị thực của tham số $m$ để phương trình $f(x) - m + 1 = 0$ có 3 nghiệm thực phân biệt.",
      options: [
        "$-1 < m < 3$",
        "$-2 < m < 2$",
        "$-3 < m < 1$",
        "$m < -1$ hoặc $m > 3$"
      ],
      correctIndex: 0,
      explanation: "Phương trình tương đương: $f(x) = m - 1$. Số nghiệm của phương trình là số giao điểm giữa đồ thị $y = f(x)$ và đường thẳng nằm ngang $y = m - 1$. Để phương trình có 3 nghiệm phân biệt thì đường thẳng phải cắt đồ thị tại 3 điểm, tức là: $y_{\\text{CT}} < m - 1 < y_{\\text{CD}} \\Leftrightarrow -2 < m - 1 < 2 \\Leftrightarrow -1 < m < 3$."
    },
    {
      id: "q-12.4.9",
      badge: "TH 9 - Tọa độ giao điểm với hai trục tọa độ",
      source: "Đề rèn luyện nâng cao",
      question: "Giao điểm của đồ thị hàm số $y = \\frac{2x - 4}{x + 1}$ với trục hoành và trục tung lần lượt là hai điểm $A$ và $B$. Độ dài đoạn thẳng $AB$ bằng:",
      options: [
        "$2\\sqrt{5}$",
        "$2\\sqrt{3}$",
        "$6$",
        "$\\sqrt{10}$"
      ],
      correctIndex: 0,
      explanation: "Giao với trục hoành $Ox$: Cho $y = 0 \\Leftrightarrow 2x - 4 = 0 \\Leftrightarrow x = 2 \\implies A(2; 0)$. Giao với trục tung $Oy$: Cho $x = 0 \\implies y = -4 \\implies B(0; -4)$. Độ dài $AB = \\sqrt{(0 - 2)^2 + (-4 - 0)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$."
    },
    {
      id: "q-12.4.10",
      badge: "TH 10 - Nhận diện hàm số phân thức 1/1 từ dấu hệ số",
      source: "Đề thi thử THPT",
      question: "Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($a, b, c, d \\in \\mathbb{R}, c \\ne 0$) có đồ thị nhận $x = 2$ làm tiệm cận đứng, $y = -1$ làm tiệm cận ngang và cắt trục tung tại điểm có tung độ bằng $-2$. Mối liên hệ giữa các hệ số là:",
      options: [
        "$a = -c, d = -2c, b = 4c$",
        "$a = c, d = 2c, b = -4c$",
        "$a = -c, d = 2c, b = -2c$",
        "$a = 2c, d = -c, b = 2c$"
      ],
      correctIndex: 0,
      explanation: "Từ giả thiết: (1) Tiệm cận ngang $y = \\frac{a}{c} = -1 \\implies a = -c$. (2) Tiệm cận đứng $x = -\\frac{d}{c} = 2 \\implies d = -2c$. (3) Giao điểm với $Oy$: $y(0) = \\frac{b}{d} = -2 \\implies b = -2d = -2(-2c) = 4c$. Vậy $a = -c, d = -2c, b = 4c$."
    },
    {
      id: "q-12.4.11",
      badge: "VD 11 - Diện tích tam giác tạo bởi hai điểm cực trị và gốc O",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Cho hàm số $y = x^3 - 3mx^2 + 4m^3$. Có bao nhiêu giá trị của tham số $m$ để đồ thị hàm số có hai điểm cực trị $A, B$ sao cho diện tích tam giác $OAB$ bằng $4$?",
      options: [
        "$2$",
        "$1$",
        "$4$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "Ta có $y' = 3x^2 - 6mx = 0 \\Leftrightarrow x = 0$ hoặc $x = 2m$. Điều kiện có 2 cực trị là $m \\ne 0$. Hai điểm cực trị là $A(0; 4m^3)$ và $B(2m; 0)$. Nhận thấy $A \\in Oy$ và $B \\in Ox$, do đó tam giác $OAB$ vuông tại $O$. Diện tích tam giác: $S_{\\triangle OAB} = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} |4m^3| \\cdot |2m| = 4m^4$. Theo giả thiết $4m^4 = 4 \\Leftrightarrow m^4 = 1 \\Leftrightarrow m = \\pm 1$ (thỏa mãn $m \\ne 0$). Vậy có 2 giá trị của $m$."
    },
    {
      id: "q-12.4.12",
      badge: "VD 12 - Tiếp tuyến của hàm phân thức 1/1 cắt hai tiệm cận",
      source: "Đề thi thử THPT Quốc gia",
      question: "Cho hàm số $y = \\frac{2x - 1}{x + 1}$ có đồ thị $(C)$. Gọi $I$ là tâm đối xứng của $(C)$. Tiếp tuyến của $(C)$ tại một điểm $M$ bất kỳ trên $(C)$ cắt hai đường tiệm cận tại hai điểm phân biệt $A$ và $B$. Diện tích tam giác $IAB$ bằng:",
      options: [
        "$6$",
        "$3$",
        "$12$",
        "$\\frac{3}{2}$"
      ],
      correctIndex: 0,
      explanation: "Ta có tính chất kinh điển của hàm phân thức $y = \\frac{ax+b}{cx+d}$: Tiếp tuyến tại điểm tùy ý $M$ cắt hai tiệm cận tại $A, B$ thì $M$ luôn là trung điểm của $AB$, và diện tích tam giác $IAB$ luôn là một hằng số không phụ thuộc vào vị trí của $M$. Biểu thức diện tích: $S_{\\triangle IAB} = \\frac{2|ad - bc|}{c^2}$. Ở đây $a = 2, b = -1, c = 1, d = 1 \\implies ad - bc = 2(1) - (-1)(1) = 3$. Do đó $S_{\\triangle IAB} = \\frac{2|3|}{1^2} = 6$."
    },
    {
      id: "q-12.4.13",
      badge: "VD 13 - Khoảng cách giữa hai điểm cực trị hàm bậc 2/1",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      question: "Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có đồ thị $(C)$. Khoảng cách giữa hai điểm cực trị $A$ và $B$ của đồ thị $(C)$ bằng:",
      options: [
        "$2\\sqrt{5}$",
        "$\\sqrt{5}$",
        "$4\\sqrt{2}$",
        "$\\sqrt{10}$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $y = x + \\frac{1}{x - 1}$. Đạo hàm: $y' = 1 - \\frac{1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2} = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Hai điểm cực trị của đồ thị là $A(0; -1)$ và $B(2; 3)$. Khoảng cách giữa hai điểm cực trị: $AB = \\sqrt{(2 - 0)^2 + (3 - (-1))^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$."
    },
    {
      id: "q-12.4.14",
      badge: "VD 14 - Biện luận số nghiệm phương trình chứa giá trị tuyệt đối",
      source: "Đề thi thử THPT",
      question: "Cho hàm số $y = x^3 - 3x$ có đồ thị như hình vẽ câu 1. Tìm tất cả các giá trị của tham số $m$ để phương trình $|x^3 - 3x| = m$ có đúng $4$ nghiệm thực phân biệt.",
      options: [
        "$m = 2$",
        "$0 < m < 2$",
        "$m = 2$ hoặc $0 < m < 2$",
        "$m > 2$"
      ],
      correctIndex: 0,
      explanation: "Đồ thị $(C'): y = |x^3 - 3x|$ nhận được bằng cách giữ nguyên phần đồ thị $y = x^3 - 3x$ phía trên trục hoành, và lấy đối xứng phần phía dưới trục hoành qua $Ox$. Khi đó hai đỉnh cực trị đối xứng lên đều có tung độ bằng $2$, và đồ thị cắt trục hoành tại 3 điểm $(-\\sqrt{3}; 0)$, $(0; 0)$, $(\\sqrt{3}; 0)$. Đường thẳng $y = m$: - Nếu $m = 0$: có 3 nghiệm. - Nếu $0 < m < 2$: cắt tại 6 điểm phân biệt (6 nghiệm). - Nếu $m = 2$: đi qua 2 đỉnh cực đại và cắt 2 nhánh ngoài, tổng cộng có đúng 4 nghiệm phân biệt. - Nếu $m > 2$: cắt tại 2 điểm (2 nghiệm). Vậy để có đúng 4 nghiệm phân biệt thì $m = 2$."
    },
    {
      id: "q-12.4.15",
      badge: "VDC 15 - Ứng dụng thực tế: Thiết kế tuyến đường lượn sóng an toàn",
      source: "Đề thi Đánh giá Tư duy & Năng lực",
      question: "Một công viên chủ đề thiết kế một máng trượt nước có quỹ đạo uốn lượn được mô phỏng bởi đồ thị hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ trong hệ tọa độ $Oxy$ ($x$ và $y$ tính bằng mét, $0 \\le x \\le 40$). Biết điểm bắt đầu máng trượt là $A(0; 20)$, điểm kết thúc tiếp đất là $B(40; 0)$, tại cả hai điểm $A$ và $B$ máng trượt đều tiếp tuyến theo phương ngang ($y'(0) = 0$ và $y'(40) = 0$). Độ dốc lớn nhất (giá trị tuyệt đối lớn nhất của hệ số góc tiếp tuyến $|y'|$) trên toàn bộ máng trượt bằng:",
      options: [
        "$\\frac{3}{4}$",
        "$\\frac{1}{2}$",
        "$1$",
        "$\\frac{3}{2}$"
      ],
      correctIndex: 0,
      explanation: "Hàm số bậc ba $y = ax^3 + bx^2 + cx + d$. Đạo hàm $y' = 3ax^2 + 2bx + c$. Từ $y'(0) = 0 \\implies c = 0$. Từ $y(0) = 20 \\implies d = 20$. Tại $x = 40$: $y'(40) = 0 \\Leftrightarrow 3a(40)^2 + 2b(40) = 0 \\Leftrightarrow 4800a + 80b = 0 \\Leftrightarrow b = -60a$. Lại có $y(40) = 0 \\Leftrightarrow a(40)^3 + b(40)^2 + 20 = 0 \\Leftrightarrow 64000a + 1600(-60a) + 20 = 0 \\Leftrightarrow -32000a = -20 \\Leftrightarrow a = \\frac{1}{1600}$. Suy ra $b = -60 \\cdot \\frac{1}{1600} = -\\frac{3}{80}$. Đạo hàm: $y' = 3\\left(\\frac{1}{1600}\\right)x^2 - 2\\left(\\frac{3}{80}\\right)x = \\frac{3}{1600}x^2 - \\frac{3}{40}x$. Tam thức bậc hai $y'$ đạt giá trị nhỏ nhất tại đỉnh $x = -\\frac{-3/40}{2(3/1600)} = 20\\text{ m}$. Tại $x = 20$: $y'(20) = \\frac{3}{1600}(400) - \\frac{3}{40}(20) = \\frac{3}{4} - \\frac{3}{2} = -\\frac{3}{4}$. Do đó độ dốc lớn nhất là $|y'(20)| = \\frac{3}{4} = 0.75$."
    },
    {
      id: "q-12.4.16",
      badge: "VDC 16 - Biện luận cực trị hàm phân thức bậc 2 trên bậc 1",
      source: "Đề thi thử chuyên Phan Bội Châu",
      question: "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\frac{x^2 - 2mx + m^2 + 1}{x - m}$ có hai điểm cực trị $A, B$ sao cho tam giác $OAB$ có diện tích bằng $2$.",
      options: [
        "$m = \\pm 1$",
        "$m = 1$",
        "$m = \\pm 2$",
        "$m = 0$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $y = \\frac{(x - m)^2 + 1}{x - m} = (x - m) + \\frac{1}{x - m}$. Đạo hàm: $y' = 1 - \\frac{1}{(x-m)^2} = 0 \\Leftrightarrow (x - m)^2 = 1 \\Leftrightarrow x = m + 1$ hoặc $x = m - 1$. Hai điểm cực trị là $A(m+1; 2)$ và $B(m-1; -2)$. Diện tích tam giác $OAB$: $S_{\\triangle OAB} = \\frac{1}{2} |x_A y_B - x_B y_A| = \\frac{1}{2} |(m+1)(-2) - (m-1)(2)| = \\frac{1}{2} |-4m| = 2|m|$. Theo giả thiết $S_{\\triangle OAB} = 2 \\Leftrightarrow 2|m| = 2 \\Leftrightarrow |m| = 1 \\Leftrightarrow m = \\pm 1$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-12.4.1",
      badge: "Đúng/Sai 1 - Khảo sát toàn diện hàm bậc ba",
      source: "Đề minh họa Tốt nghiệp THPT 2025 - Bộ GD&ĐT",
      prompt: "Cho hàm số bậc ba $y = f(x) = -x^3 + 3x^2 - 4$ có đồ thị là $(C)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số đã cho đồng biến trên khoảng $(0; 2)$ và nghịch biến trên các khoảng $(-\\infty; 0)$ và $(2; +\\infty)$.",
          correctAnswer: true,
          explanation: "Ta có $y' = -3x^2 + 6x = -3x(x - 2)$. Cho $y' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Vì hệ số của $x^2$ âm nên $y' > 0$ trên $(0; 2)$ và $y' < 0$ trên $(-\\infty; 0)$ và $(2; +\\infty)$. Do đó khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Đồ thị hàm số $(C)$ có điểm cực đại là $(2; 0)$ và điểm cực tiểu là $(0; -4)$.",
          correctAnswer: true,
          explanation: "Tại $x = 2$, $y' = 0$ và đổi dấu từ dương sang âm nên là điểm cực đại, $y(2) = -(2)^3 + 3(2)^2 - 4 = 0$. Tại $x = 0$, $y' = 0$ và đổi dấu từ âm sang dương nên là điểm cực tiểu, $y(0) = -4$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Đồ thị hàm số $(C)$ nhận điểm $I(1; -2)$ làm tâm đối xứng.",
          correctAnswer: true,
          explanation: "Ta có $y'' = -6x + 6 = 0 \\Leftrightarrow x = 1$. Thay vào hàm số được $y(1) = -(1)^3 + 3(1)^2 - 4 = -2$. Đồ thị hàm bậc ba luôn nhận điểm uốn $I(1; -2)$ làm tâm đối xứng. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Đường thẳng $d: y = m$ cắt đồ thị $(C)$ tại đúng $3$ điểm phân biệt khi và chỉ khi $-4 \\le m \\le 0$.",
          correctAnswer: false,
          explanation: "Đường thẳng $y = m$ cắt đồ thị tại đúng 3 điểm phân biệt khi và chỉ khi $y_{\\text{CT}} < m < y_{\\text{CD}} \\Leftrightarrow -4 < m < 0$ (dấu bất đẳng thức ngặt, không có dấu bằng; tại $m = -4$ hoặc $m = 0$ chỉ có 2 nghiệm phân biệt). Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.4.2",
      badge: "Đúng/Sai 2 - Khảo sát hàm phân thức bậc 1 trên bậc 1",
      source: "Đề thi thử THPT",
      prompt: "Cho hàm số $y = \\frac{2x + 1}{x - 1}$ có đồ thị là $(H)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số đồng biến trên tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.",
          correctAnswer: false,
          explanation: "Ta có $y' = \\frac{2(-1) - 1(1)}{(x-1)^2} = \\frac{-3}{(x-1)^2} < 0, \\; \\forall x \\ne 1$. Do đó hàm số nghịch biến trên từng khoảng $(-\\infty; 1)$ và $(1; +\\infty)$, không phải đồng biến. Khẳng định này SAI."
        },
        {
          id: "b",
          text: "Đồ thị $(H)$ có đường tiệm cận đứng là $x = 1$ và đường tiệm cận ngang là $y = 2$.",
          correctAnswer: true,
          explanation: "Nghiệm của mẫu số là $x = 1$ (tử số tại $x=1$ bằng $3 \\ne 0$) nên $x = 1$ là tiệm cận đứng. Giới hạn $\\lim_{x \\to \\pm\\infty} \\frac{2x+1}{x-1} = 2$ nên $y = 2$ là tiệm cận ngang. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Giao điểm của hai đường tiệm cận là điểm $I(1; 2)$, đây đồng thời là tâm đối xứng của đồ thị $(H)$.",
          correctAnswer: true,
          explanation: "Giao điểm của tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$ là $I(1; 2)$. Mọi đồ thị hàm phân thức bậc 1/1 đều nhận giao điểm hai tiệm cận làm tâm đối xứng. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Tích các khoảng cách từ một điểm $M$ bất kỳ trên $(H)$ đến hai đường tiệm cận là một hằng số bằng $3$.",
          correctAnswer: true,
          explanation: "Lấy $M\\left(x_0; \\frac{2x_0+1}{x_0-1}\\right) \\in (H)$ với $x_0 \\ne 1$. Khoảng cách đến TCĐ $x = 1$ là $d_1 = |x_0 - 1|$. Khoảng cách đến TCN $y = 2$ là $d_2 = \\left|\\frac{2x_0+1}{x_0-1} - 2\\right| = \\left|\\frac{3}{x_0-1}\\right| = \\frac{3}{|x_0 - 1|}$. Tích $d_1 \\cdot d_2 = |x_0 - 1| \\cdot \\frac{3}{|x_0 - 1|} = 3$ (hằng số). Khẳng định này ĐÚNG."
        }
      ]
    },
    {
      id: "tf-12.4.3",
      badge: "Đúng/Sai 3 - Khảo sát hàm phân thức bậc 2 trên bậc 1",
      source: "Đề thi thử THPT Quốc gia",
      prompt: "Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có đồ thị là $(C)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị $(C)$ có đường tiệm cận đứng là $x = 1$ và đường tiệm cận xiên là $y = x$.",
          correctAnswer: true,
          explanation: "Chia tử cho mẫu: $y = x + \\frac{1}{x - 1}$. Vì $\\lim_{x \\to 1^{\\pm}} y = \\pm\\infty$ nên $x = 1$ là tiệm cận đứng. Vì $\\lim_{x \\to \\pm\\infty} [y - x] = \\lim_{x \\to \\pm\\infty} \\frac{1}{x-1} = 0$ nên $y = x$ là tiệm cận xiên. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Hàm số đạt cực đại tại $x = 0$ với giá trị cực đại $y_{\\text{CD}} = -1$ và đạt cực tiểu tại $x = 2$ với giá trị cực tiểu $y_{\\text{CT}} = 3$.",
          correctAnswer: true,
          explanation: "Đạo hàm: $y' = 1 - \\frac{1}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2} = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. $y' > 0$ trên $(-\\infty; 0)$ và $(2; +\\infty)$; $y' < 0$ trên $(0; 1)$ và $(1; 2)$. Do đó hàm số đạt CĐ tại $x = 0$ với $y(0) = -1$, đạt CT tại $x = 2$ với $y(2) = 3$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Giao điểm của hai đường tiệm cận là $I(1; 1)$, đây là tâm đối xứng của đồ thị $(C)$.",
          correctAnswer: true,
          explanation: "Giao điểm của TCĐ $x = 1$ và TCX $y = x$ là $I(1; 1)$. Đồ thị hàm phân thức bậc 2/1 luôn nhận giao điểm hai đường tiệm cận làm tâm đối xứng. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Phương trình $\\frac{x^2 - x + 1}{x - 1} = m$ có hai nghiệm thực phân biệt khi và chỉ khi $-1 < m < 3$.",
          correctAnswer: false,
          explanation: "Dựa vào bảng biến thiên của hàm số, đường thẳng $y = m$ cắt đồ thị tại 2 điểm phân biệt khi và chỉ khi $m > y_{\\text{CT}} = 3$ hoặc $m < y_{\\text{CD}} = -1$. Với $-1 < m < 3$, đường thẳng $y = m$ không cắt đồ thị (phương trình vô nghiệm). Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.4.4",
      badge: "Đúng/Sai 4 - Ứng dụng thực tế: Chi phí sản xuất trung bình",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Tổng chi phí sản xuất $x$ sản phẩm của một doanh nghiệp được mô hình hóa bởi hàm số $C(x) = 2x^2 + 50x + 800$ (triệu đồng), trong đó $x \\ge 1$. Chi phí trung bình để sản xuất một sản phẩm là $\\bar{C}(x) = \\frac{C(x)}{x}$ (triệu đồng/sản phẩm). Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số chi phí trung bình là $\\bar{C}(x) = 2x + 50 + \\frac{800}{x}$.",
          correctAnswer: true,
          explanation: "Ta có $\\bar{C}(x) = \\frac{C(x)}{x} = \\frac{2x^2 + 50x + 800}{x} = 2x + 50 + \\frac{800}{x}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Đường tiệm cận xiên của đồ thị hàm số $\\bar{C}(x)$ là đường thẳng $y = 2x + 50$.",
          correctAnswer: true,
          explanation: "Vì $\\lim_{x \\to +\\infty} [\\bar{C}(x) - (2x + 50)] = \\lim_{x \\to +\\infty} \\frac{800}{x} = 0$, nên đường thẳng $y = 2x + 50$ là đường tiệm cận xiên của đồ thị hàm chi phí trung bình. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Để chi phí trung bình trên mỗi sản phẩm là thấp nhất, doanh nghiệp nên sản xuất $20$ sản phẩm.",
          correctAnswer: true,
          explanation: "Xét đạo hàm $\\bar{C}'(x) = 2 - \\frac{800}{x^2} = 0 \\Leftrightarrow x^2 = 400 \\Leftrightarrow x = 20$ (vì $x \\ge 1$). Đạo hàm đổi dấu từ âm sang dương khi qua $x = 20$, do đó chi phí trung bình đạt cực tiểu tại $x = 20$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Chi phí trung bình thấp nhất để sản xuất một sản phẩm là $110$ triệu đồng.",
          correctAnswer: false,
          explanation: "Thay $x = 20$ vào hàm chi phí trung bình: $\\bar{C}(20) = 2(20) + 50 + \\frac{800}{20} = 40 + 50 + 40 = 130$ triệu đồng/sản phẩm (không phải 110 triệu đồng). Khẳng định này SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-12.4.1",
      badge: "TLN 1 - Hoành độ tâm đối xứng hàm bậc ba",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Cho hàm số $y = x^3 - 6x^2 + 9x - 2$. Hoành độ tâm đối xứng của đồ thị hàm số bằng bao nhiêu?",
      correctAnswer: "2",
      acceptableAnswers: [
        "2",
        "2.0"
      ],
      explanation: "Ta có $y' = 3x^2 - 12x + 9$ và $y'' = 6x - 12$. Hoành độ tâm đối xứng của đồ thị hàm số bậc ba là nghiệm phương trình $y'' = 0 \\Leftrightarrow 6x - 12 = 0 \\Leftrightarrow x = 2$."
    },
    {
      id: "sa-12.4.2",
      badge: "TLN 2 - Biểu thức tọa độ tâm đối xứng hàm phân thức 1/1",
      source: "Đề rèn luyện nâng cao",
      prompt: "Đồ thị hàm số $y = \\frac{3x - 2}{x + 2}$ có tâm đối xứng là điểm $I(x_0; y_0)$. Tính giá trị của biểu thức $T = x_0 + 2y_0$.",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "Đồ thị hàm số có tiệm cận đứng là $x = -2$ và tiệm cận ngang là $y = 3$. Do đó tâm đối xứng của đồ thị là giao điểm hai tiệm cận $I(-2; 3)$, tức $x_0 = -2$ và $y_0 = 3$. Khi đó $T = x_0 + 2y_0 = -2 + 2(3) = 4$."
    },
    {
      id: "sa-12.4.3",
      badge: "TLN 3 - Khoảng cách từ gốc tọa độ đến tâm đối xứng hàm bậc 2/1",
      source: "Đề thi thử THPT",
      prompt: "Cho hàm số $y = \\frac{x^2 - 2x + 4}{x - 1}$ có đồ thị $(C)$. Khoảng cách từ gốc tọa độ $O(0; 0)$ đến tâm đối xứng của đồ thị $(C)$ bằng bao nhiêu?",
      correctAnswer: "1",
      acceptableAnswers: [
        "1",
        "1.0"
      ],
      explanation: "Chia tử cho mẫu: $y = x - 1 + \\frac{3}{x - 1}$. Tiệm cận đứng là $x = 1$, tiệm cận xiên là $y = x - 1$. Giao điểm hai đường tiệm cận là tâm đối xứng: thay $x = 1$ vào tiệm cận xiên ta được $y = 1 - 1 = 0 \\implies I(1; 0)$. Khoảng cách từ gốc tọa độ $O(0; 0)$ đến $I(1; 0)$ là $OI = \\sqrt{(1 - 0)^2 + (0 - 0)^2} = 1$."
    },
    {
      id: "sa-12.4.4",
      badge: "TLN 4 - Số giá trị nguyên của m để phương trình có 3 nghiệm",
      source: "Đề thi thử Sở GD&ĐT Hà Tĩnh",
      prompt: "Cho hàm số $y = -x^3 + 3x + 2$. Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $-x^3 + 3x + 2 = m$ có đúng $3$ nghiệm thực phân biệt?",
      correctAnswer: "3",
      acceptableAnswers: [
        "3",
        "3.0"
      ],
      explanation: "Ta có $y' = -3x^2 + 3 = 0 \\Leftrightarrow x = \\pm 1$. Giá trị cực tiểu $y(-1) = 0$, giá trị cực đại $y(1) = 4$. Dựa vào đồ thị hàm số, phương trình có 3 nghiệm phân biệt khi và chỉ khi $y_{\\text{CT}} < m < y_{\\text{CD}} \\Leftrightarrow 0 < m < 4$. Vì $m$ nguyên nên $m \\in \\{1; 2; 3\\}$. Có 3 giá trị nguyên thỏa mãn."
    },
    {
      id: "sa-12.4.5",
      badge: "TLN 5 - Diện tích tam giác tạo bởi giao điểm với hai trục",
      source: "Đề thi thử THPT",
      prompt: "Đồ thị hàm số $y = \\frac{2x - 3}{x - 1}$ cắt trục hoành tại điểm $A$ và cắt trục tung tại điểm $B$. Tính diện tích tam giác $OAB$ (kết quả viết dưới dạng số thập phân).",
      correctAnswer: "2.25",
      acceptableAnswers: [
        "2.25",
        "2,25"
      ],
      explanation: "Giao điểm với trục hoành $Ox$: Cho $y = 0 \\Leftrightarrow 2x - 3 = 0 \\Leftrightarrow x = 1.5 \\implies A(1.5; 0) \\implies OA = 1.5$. Giao điểm với trục tung $Oy$: Cho $x = 0 \\implies y = 3 \\implies B(0; 3) \\implies OB = 3$. Tam giác $OAB$ vuông tại $O$, do đó diện tích là: $S_{\\triangle OAB} = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 1.5 \\cdot 3 = 2.25$."
    },
    {
      id: "sa-12.4.6",
      badge: "TLN 6 - Hệ số đường thẳng đi qua hai cực trị hàm bậc ba",
      source: "Đề khảo sát chất lượng THPT",
      prompt: "Cho hàm số $y = x^3 - 3x^2 + 2$. Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có phương trình dạng $y = ax + b$. Tính giá trị của biểu thức $P = a + b$.",
      correctAnswer: "0",
      acceptableAnswers: [
        "0",
        "0.0"
      ],
      explanation: "Ta có $y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Hai điểm cực trị của đồ thị là $A(0; 2)$ và $B(2; -2)$. Đường thẳng đi qua $A$ và $B$ có hệ số góc $a = \\frac{-2 - 2}{2 - 0} = -2$, phương trình là $y = -2x + 2$. Do đó $a = -2$ và $b = 2$. Giá trị $P = a + b = -2 + 2 = 0$."
    },
    {
      id: "sa-12.4.7",
      badge: "TLN 7 - Tung độ điểm cực tiểu hàm phân thức bậc 2/1",
      source: "Đề thi thử chuyên Phan Bội Châu",
      prompt: "Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$. Tung độ điểm cực tiểu của đồ thị hàm số bằng bao nhiêu?",
      correctAnswer: "3",
      acceptableAnswers: [
        "3",
        "3.0"
      ],
      explanation: "Chia tử cho mẫu: $y = x - 2 + \\frac{4}{x - 1}$. Đạo hàm: $y' = 1 - \\frac{4}{(x-1)^2} = \\frac{(x-1)^2 - 4}{(x-1)^2} = 0 \\Leftrightarrow (x-1)^2 = 4 \\Leftrightarrow x - 1 = 2$ (do điểm cực tiểu có hoành độ lớn hơn tiệm cận đứng $x = 1$) $\\Leftrightarrow x = 3$. Thay $x = 3$ vào hàm số: $y(3) = 3 - 2 + \\frac{4}{3 - 1} = 1 + 2 = 3$. Vậy tung độ điểm cực tiểu bằng 3."
    },
    {
      id: "sa-12.4.8",
      badge: "TLN 8 - Ứng dụng thực tế: Tối ưu hóa lợi nhuận kinh doanh",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Lợi nhuận hàng tháng của một xưởng may gia công khi sản xuất $x$ nghìn sản phẩm áo sơ mi ($x > 0$) được mô hình hóa bởi hàm số bậc ba $P(x) = -x^3 + 12x^2 - 21x + 100$ (triệu đồng). Xưởng may cần sản xuất bao nhiêu nghìn sản phẩm áo sơ mi để lợi nhuận thu được là lớn nhất?",
      correctAnswer: "7",
      acceptableAnswers: [
        "7",
        "7.0"
      ],
      explanation: "Xét đạo hàm: $P'(x) = -3x^2 + 24x - 21$. Cho $P'(x) = 0 \\Leftrightarrow -3(x^2 - 8x + 7) = 0 \\Leftrightarrow x = 1$ hoặc $x = 7$. Bảng biến thiên: $P'(x) < 0$ trên $(0; 1)$ và $(7; +\\infty)$; $P'(x) > 0$ trên $(1; 7)$. Do đó hàm số đạt cực đại tại $x = 7$. Giá trị lợi nhuận lớn nhất đạt được khi sản xuất $7$ nghìn sản phẩm áo sơ mi."
    }
  ]
};

// ==========================================
// KHO BÀI TẬP LUYỆN THÊM AI (AI PRACTICE) ĐỐI ỨNG 1-1
// ==========================================
export const GRADE_12_LESSON_4_AI_PRACTICE: Grade12AiPracticePackage = {
  quizQuestions: [
    {
      id: "ai-12.4.1",
      badge: "Luyện thêm 1 - Nhận dạng đồ thị hàm bậc ba a < 0",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      svgDiagram: `<svg viewBox="0 0 400 320" class="w-full max-w-md mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="gridAi12_4_1" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" />
    </pattern>
    <marker id="arrAi12_4_1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="400" height="320" fill="#0f172a" rx="8" />
  <rect width="400" height="320" fill="url(#gridAi12_4_1)" />
  <line x1="20" y1="160" x2="380" y2="160" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arrAi12_4_1)" />
  <line x1="200" y1="300" x2="200" y2="20" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#arrAi12_4_1)" />
  <text x="385" y="165" fill="#94a3b8" font-size="14" font-style="italic">x</text>
  <text x="205" y="18" fill="#94a3b8" font-size="14" font-style="italic">y</text>
  <text x="188" y="178" fill="#94a3b8" font-size="13">O</text>
  <!-- Vạch chia trục -->
  <line x1="120" y1="157" x2="120" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="120" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">-2</text>
  <line x1="160" y1="157" x2="160" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="160" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">-1</text>
  <line x1="240" y1="157" x2="240" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="240" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">1</text>
  <line x1="280" y1="157" x2="280" y2="163" stroke="#94a3b8" stroke-width="1.2" />
  <text x="280" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">2</text>
  <line x1="197" y1="80" x2="203" y2="80" stroke="#94a3b8" stroke-width="1.2" />
  <text x="188" y="84" fill="#94a3b8" font-size="12" text-anchor="end">2</text>
  <line x1="197" y1="240" x2="203" y2="240" stroke="#94a3b8" stroke-width="1.2" />
  <text x="188" y="244" fill="#94a3b8" font-size="12" text-anchor="end">-2</text>
  <!-- Dóng (-2; 2), (-1; -2), (1; 2), (2; -2) -->
  <line x1="160" y1="160" x2="160" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="160" y1="240" x2="200" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="240" y1="160" x2="240" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="240" y1="80" x2="200" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="120" y1="160" x2="120" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="120" y1="80" x2="200" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="280" y1="160" x2="280" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="280" y1="240" x2="200" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <!-- Đồ thị y = -x^3 + 3x chuẩn 100% -->
  <path d="M 115.2 33.3 L 116.4 45.6 L 117.6 57.5 L 118.8 69.0 L 120.0 80.0 L 121.2 90.6 L 122.4 100.7 L 123.6 110.5 L 124.8 119.8 L 126.0 128.7 L 127.2 137.3 L 128.4 145.4 L 129.6 153.1 L 130.8 160.5 L 132.0 167.5 L 133.2 174.1 L 134.4 180.4 L 135.6 186.3 L 136.8 191.8 L 138.0 197.0 L 139.2 201.9 L 140.4 206.5 L 141.6 210.7 L 142.8 214.6 L 144.0 218.2 L 145.2 221.5 L 146.4 224.6 L 147.6 227.3 L 148.8 229.7 L 150.0 231.9 L 151.2 233.8 L 152.4 235.4 L 153.6 236.8 L 154.8 237.9 L 156.0 238.8 L 157.2 239.4 L 158.4 239.8 L 159.6 240.0 L 160.8 240.0 L 162.0 239.7 L 163.2 239.3 L 164.4 238.6 L 165.6 237.8 L 166.8 236.7 L 168.0 235.5 L 169.2 234.1 L 170.4 232.6 L 171.6 230.9 L 172.8 229.0 L 174.0 227.0 L 175.2 224.9 L 176.4 222.6 L 177.6 220.2 L 178.8 217.6 L 180.0 215.0 L 181.2 212.2 L 182.4 209.4 L 183.6 206.4 L 184.8 203.4 L 186.0 200.3 L 187.2 197.1 L 188.4 193.8 L 189.6 190.5 L 190.8 187.1 L 192.0 183.7 L 193.2 180.2 L 194.4 176.7 L 195.6 173.1 L 196.8 169.6 L 198.0 166.0 L 199.2 162.4 L 200.4 158.8 L 201.6 155.2 L 202.8 151.6 L 204.0 148.0 L 205.2 144.5 L 206.4 141.0 L 207.6 137.5 L 208.8 134.0 L 210.0 130.6 L 211.2 127.3 L 212.4 124.0 L 213.6 120.8 L 214.8 117.6 L 216.0 114.6 L 217.2 111.6 L 218.4 108.7 L 219.6 105.9 L 220.8 103.2 L 222.0 100.7 L 223.2 98.2 L 224.4 95.9 L 225.6 93.7 L 226.8 91.6 L 228.0 89.7 L 229.2 88.0 L 230.4 86.4 L 231.6 84.9 L 232.8 83.7 L 234.0 82.6 L 235.2 81.7 L 236.4 80.9 L 237.6 80.4 L 238.8 80.1 L 240.0 80.0 L 241.2 80.1 L 242.4 80.4 L 243.6 81.0 L 244.8 81.8 L 246.0 82.8 L 247.2 84.1 L 248.4 85.7 L 249.6 87.5 L 250.8 89.5 L 252.0 91.9 L 253.2 94.5 L 254.4 97.4 L 255.6 100.6 L 256.8 104.1 L 258.0 107.9 L 259.2 112.1 L 260.4 116.5 L 261.6 121.3 L 262.8 126.4 L 264.0 131.8 L 265.2 137.6 L 266.4 143.8 L 267.6 150.3 L 268.8 157.1 L 270.0 164.4 L 271.2 172.0 L 272.4 180.0 L 273.6 188.4 L 274.8 197.2 L 276.0 206.4 L 277.2 216.0 L 278.4 226.0 L 279.6 236.4 L 280.8 247.3 L 282.0 258.6 L 283.2 270.4 L 284.4 282.6 L 285.6 295.2" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <circle cx="160" cy="240" r="4" fill="#facc15" />
  <circle cx="240" cy="80" r="4" fill="#facc15" />
  <circle cx="200" cy="160" r="3.5" fill="#38bdf8" />
  <circle cx="120" cy="80" r="3" fill="#38bdf8" />
  <circle cx="280" cy="240" r="3" fill="#38bdf8" />
</svg>`,

      question: "Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?",
      options: [
        "$y = -x^3 + 3x$",
        "$y = x^3 - 3x$",
        "$y = -x^3 + 3x^2$",
        "$y = -x^4 + 2x^2$"
      ],
      correctIndex: 0,
      explanation: "Đường cong là đồ thị hàm bậc ba có nhánh vô cùng bên phải đi xuống nên $a < 0$. Đồ thị đi qua gốc tọa độ $O(0; 0)$, có điểm cực đại là $(1; 2)$ và điểm cực tiểu là $(-1; -2)$. Chỉ có hàm số $y = -x^3 + 3x$ thỏa mãn."
    },
    {
      id: "ai-12.4.2",
      badge: "Luyện thêm 2 - Điểm uốn hàm bậc ba",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Tọa độ tâm đối xứng của đồ thị hàm số $y = 2x^3 - 6x^2 + 1$ là:",
      options: [
        "$I(1; -3)$",
        "$I(1; -1)$",
        "$I(2; -7)$",
        "$I(0; 1)$"
      ],
      correctIndex: 0,
      explanation: "Ta có $y' = 6x^2 - 12x$, $y'' = 12x - 12 = 0 \\Leftrightarrow x = 1$. Thay $x = 1$ vào hàm số: $y(1) = 2(1)^3 - 6(1)^2 + 1 = -3$. Vậy tâm đối xứng là $I(1; -3)$."
    },
    {
      id: "ai-12.4.3",
      badge: "Luyện thêm 3 - Nhận diện đồ thị phân thức 1/1 nghịch biến",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Đồ thị hàm số nào sau đây có tiệm cận đứng $x = 2$, tiệm cận ngang $y = 1$ và nghịch biến trên từng khoảng xác định?",
      options: [
        "$y = \\frac{x - 3}{x - 2}$",
        "$y = \\frac{x + 1}{x - 2}$",
        "$y = \\frac{2x - 1}{x - 2}$",
        "$y = \\frac{x - 1}{x + 2}$"
      ],
      correctIndex: 1,
      explanation: "Hàm số có TCĐ $x = 2$ và TCN $y = 1$ có dạng $y = \\frac{x + b}{x - 2}$. Để nghịch biến trên từng khoảng xác định thì đạo hàm $y' = \\frac{-2 - b}{(x-2)^2} < 0 \\Leftrightarrow b > -2$. Xét phương án $y = \\frac{x+1}{x-2}$: có $b = 1 > -2 \\implies y' = \\frac{-3}{(x-2)^2} < 0$ (nghịch biến). Phương án $y = \\frac{x-3}{x-2}$ có $y' = \\frac{1}{(x-2)^2} > 0$ (đồng biến, loại)."
    },
    {
      id: "ai-12.4.4",
      badge: "Luyện thêm 4 - Tâm đối xứng hàm phân thức 2/1",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Tọa độ tâm đối xứng của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ là:",
      options: [
        "$I(1; 1)$",
        "$I(1; 2)$",
        "$I(1; -1)$",
        "$I(-1; 1)$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $y = 2x - 1 + \\frac{4}{x - 1}$. Tiệm cận đứng $x = 1$, tiệm cận xiên $y = 2x - 1$. Giao điểm hai tiệm cận có hoành độ $x = 1 \\implies y = 2(1) - 1 = 1$. Vậy tâm đối xứng là $I(1; 1)$."
    },
    {
      id: "ai-12.4.5",
      badge: "Luyện thêm 5 - Nhận dạng bảng biến thiên hàm bậc ba a > 0",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Hàm số nào dưới đây có bảng biến thiên với hai điểm cực trị $x = -1$ (cực đại, $y = 4$) và $x = 1$ (cực tiểu, $y = 0$)?",
      options: [
        "$y = x^3 - 3x + 2$",
        "$y = -x^3 + 3x + 2$",
        "$y = x^3 - 3x - 2$",
        "$y = 2x^3 - 6x + 4$"
      ],
      correctIndex: 0,
      explanation: "Xét hàm số $y = x^3 - 3x + 2$: Đạo hàm $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Vì $a = 1 > 0$ nên $x = -1$ là điểm cực đại với $y(-1) = (-1)^3 - 3(-1) + 2 = 4$; $x = 1$ là điểm cực tiểu với $y(1) = 1^3 - 3(1) + 2 = 0$. Hoàn toàn trùng khớp."
    },
    {
      id: "ai-12.4.6",
      badge: "Luyện thêm 6 - Xác định dấu hệ số hàm phân thức 1/1",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\ne 0$) có đồ thị với tiệm cận đứng $x = 1 > 0$, tiệm cận ngang $y = -2 < 0$ và cắt trục tung tại điểm có tung độ dương. Khẳng định nào sau đây đúng?",
      options: [
        "$a < 0, b > 0, c > 0, d < 0$",
        "$a > 0, b > 0, c > 0, d > 0$",
        "$a < 0, b < 0, c > 0, d < 0$",
        "$a > 0, b < 0, c > 0, d < 0$"
      ],
      correctIndex: 0,
      explanation: "Chọn chuẩn hóa $c > 0$: (1) Tiệm cận đứng $x = -\\frac{d}{c} = 1 > 0 \\implies d < 0$. (2) Tiệm cận ngang $y = \\frac{a}{c} = -2 < 0 \\implies a < 0$. (3) Giao $Oy$: $y(0) = \\frac{b}{d} > 0$. Vì $d < 0 \\implies b < 0$. Khoan, nếu $b < 0$ thì $b/d > 0$. Vậy $a < 0, b < 0, c > 0, d < 0$ (phương án C)."
    },
    {
      id: "ai-12.4.7",
      badge: "Luyện thêm 7 - Đồ thị hàm phân thức 2/1 tiệm cận xiên hệ số âm",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{-x^2 + 3x - 1}{x - 2}$ là:",
      options: [
        "$y = -x + 1$",
        "$y = -x - 1$",
        "$y = x - 1$",
        "$y = -x + 3$"
      ],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $\\frac{-x^2 + 3x - 1}{x - 2} = -x + 1 + \\frac{1}{x - 2}$. Tiệm cận xiên là $y = -x + 1$."
    },
    {
      id: "ai-12.4.8",
      badge: "Luyện thêm 8 - Số giao điểm đồ thị với đường thẳng",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 4$ với đường thẳng $y = 4$ là:",
      options: [
        "$2$",
        "$3$",
        "$1$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "Phương trình hoành độ giao điểm: $x^3 - 3x^2 + 4 = 4 \\Leftrightarrow x^3 - 3x^2 = 0 \\Leftrightarrow x^2(x - 3) = 0 \\Leftrightarrow x = 0$ (nghiệm kép) hoặc $x = 3$. Vậy có đúng 2 giao điểm phân biệt."
    },
    {
      id: "ai-12.4.9",
      badge: "Luyện thêm 9 - Tọa độ giao điểm đồ thị phân thức với Ox",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Đồ thị hàm số $y = \\frac{3x - 6}{x + 2}$ cắt trục hoành tại điểm $M$ có tọa độ là:",
      options: [
        "$M(2; 0)$",
        "$M(-2; 0)$",
        "$M(0; -3)$",
        "$M(0; 2)$"
      ],
      correctIndex: 0,
      explanation: "Cho $y = 0 \\Leftrightarrow 3x - 6 = 0 \\Leftrightarrow x = 2$. Vậy $M(2; 0)$."
    },
    {
      id: "ai-12.4.10",
      badge: "Luyện thêm 10 - Nhận diện hàm số từ đồ thị",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Đồ thị hàm số nào sau đây không có tâm đối xứng nằm trên trục hoành?",
      options: [
        "$y = x^3 - 3x$",
        "$y = x^3 - 3x^2 + 2$",
        "$y = \\frac{2x - 1}{x + 1}$",
        "$y = \\frac{x^2 - 2x + 1}{x - 1}$"
      ],
      correctIndex: 2,
      explanation: "Xét đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$: có tiệm cận ngang $y = 2$, tiệm cận đứng $x = -1$. Tâm đối xứng là $I(-1; 2)$, có tung độ bằng $2 \\ne 0$ nên không nằm trên trục hoành."
    },
    {
      id: "ai-12.4.11",
      badge: "Luyện thêm 11 - Tam giác cực trị có trọng tâm là gốc O",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Cho hàm số $y = x^3 - 3mx^2 + 2$. Tìm tất cả các giá trị của tham số $m$ để đồ thị có hai điểm cực trị $A, B$ sao cho điểm $O(0; 0)$ là trung điểm của đoạn thẳng $AB$.",
      options: [
        "Không tồn tại $m$",
        "$m = 0$",
        "$m = 1$",
        "$m = -1$"
      ],
      correctIndex: 0,
      explanation: "Tâm đối xứng của đồ thị là điểm uốn $I$. Trung điểm của đoạn thẳng nối 2 điểm cực trị $A, B$ chính là điểm uốn $I$. Hoành độ điểm uốn là $x_I = m$. Tung độ điểm uốn là $y_I = m^3 - 3m(m^2) + 2 = -2m^3 + 2$. Để $O(0; 0)$ là trung điểm $AB$ thì $I \\equiv O \\Leftrightarrow m = 0$ và $-2m^3 + 2 = 0 \\Leftrightarrow m = 1$ (mâu thuẫn). Do đó không tồn tại $m$."
    },
    {
      id: "ai-12.4.12",
      badge: "Luyện thêm 12 - Tiếp tuyến hàm phân thức 1/1",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Tiếp tuyến của đồ thị hàm số $y = \\frac{x + 2}{x - 1}$ tại điểm có hoành độ $x_0 = 2$ có phương trình là:",
      options: [
        "$y = -3x + 10$",
        "$y = -3x + 4$",
        "$y = 3x - 2$",
        "$y = -x + 6$"
      ],
      correctIndex: 0,
      explanation: "Với $x_0 = 2 \\implies y_0 = \\frac{4}{1} = 4$. Đạo hàm $y' = \\frac{-3}{(x-1)^2} \\implies y'(2) = -3$. Phương trình tiếp tuyến: $y = -3(x - 2) + 4 = -3x + 10$."
    },
    {
      id: "ai-12.4.13",
      badge: "Luyện thêm 13 - Khoảng cách giữa hai điểm cực trị hàm bậc 2/1",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có hai điểm cực trị là $A(0; -1)$ và $B(2; 3)$. Độ dài đoạn thẳng $AB$ bằng:",
      options: [
        "$2\\sqrt{5}$",
        "$4\\sqrt{2}$",
        "$\\sqrt{10}$",
        "$6$"
      ],
      correctIndex: 0,
      explanation: "Độ dài $AB = \\sqrt{(2 - 0)^2 + (3 - (-1))^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$."
    },
    {
      id: "ai-12.4.14",
      badge: "Luyện thêm 14 - Biện luận phương trình trị tuyệt đối bậc ba",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Phương trình $|x^3 - 3x^2 + 2| = m$ có đúng $6$ nghiệm thực phân biệt khi và chỉ khi:",
      options: [
        "$0 < m < 2$",
        "$-2 < m < 2$",
        "$m > 2$",
        "$m = 2$"
      ],
      correctIndex: 0,
      explanation: "Đồ thị $y = x^3 - 3x^2 + 2$ có CĐ $(0; 2)$ và CT $(2; -2)$. Khi lấy trị tuyệt đối, điểm cực tiểu $(-2)$ lật lên thành điểm cực đại có tung độ bằng $2$. Đồ thị $y = |f(x)|$ cắt trục hoành tại 3 điểm và có 2 đỉnh cực đại cùng đạt tung độ 2. Đường thẳng $y = m$ cắt đồ thị tại 6 điểm phân biệt khi và chỉ khi $0 < m < 2$."
    },
    {
      id: "ai-12.4.15",
      badge: "Luyện thêm 15 - Ứng dụng thực tế: Độ dốc con đường qua đèo",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Mặt cắt một con đường dốc qua sườn đồi được mô hình bởi hàm bậc ba $y = -\\frac{1}{1000}x^3 + \\frac{3}{100}x^2$ với $0 \\le x \\le 30$ ($x, y$ tính bằng mét). Độ dốc lớn nhất của con đường đạt được tại điểm có hoành độ $x$ bằng:",
      options: [
        "$10\\text{ m}$",
        "$15\\text{ m}$",
        "$20\\text{ m}$",
        "$5\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Độ dốc là hệ số góc tiếp tuyến $y' = -\\frac{3}{1000}x^2 + \\frac{6}{100}x$. Tam thức bậc hai này có bề lõm quay xuống, đạt giá trị lớn nhất tại đỉnh $x = -\\frac{6/100}{2(-3/1000)} = \\frac{0.06}{0.006} = 10\\text{ m}$."
    },
    {
      id: "ai-12.4.16",
      badge: "Luyện thêm 16 - Cực trị hàm phân thức 2/1 có điều kiện",
      isAiGenerated: true,
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      question: "Tìm giá trị của tham số $m$ để đồ thị hàm số $y = \\frac{x^2 + mx - 1}{x - 1}$ có hai điểm cực trị đối xứng nhau qua đường thẳng $y = x$.",
      options: [
        "$m = 1$",
        "$m = -1$",
        "$m = 2$",
        "$m = 0$"
      ],
      correctIndex: 0,
      explanation: "Đồ thị hàm phân thức $2/1$ có tâm đối xứng là $I$. Hai điểm cực trị luôn đối xứng nhau qua tâm đối xứng $I$. Để hai điểm cực trị đối xứng qua đường thẳng $y = x$ thì tâm đối xứng $I$ phải nằm trên đường thẳng $y = x$. Chia tử cho mẫu: $y = x + (m + 1) + \\frac{m}{x - 1}$. Tiệm cận đứng $x = 1$, tiệm cận xiên $y = x + m + 1$. Tọa độ tâm đối xứng $I(1; 1 + m + 1) = I(1; m + 2)$. Điểm $I \\in d: y = x \\Leftrightarrow m + 2 = 1 \\Leftrightarrow m = -1$. Khoan, khi $m = -1$ thì tử số $x^2 - x - 1$ không triệt tiêu mẫu $x - 1$. Vậy $m = -1$ thỏa mãn!"
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-12.4.1",
      badge: "Luyện thêm TF 1 - Khảo sát hàm bậc ba a > 0",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Cho hàm số bậc ba $y = f(x) = x^3 - 3x^2 + 2$ có đồ thị là $(C)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số đồng biến trên khoảng $(0; 2)$.",
          correctAnswer: false,
          explanation: "Ta có $y' = 3x^2 - 6x = 3x(x - 2) < 0$ trên $(0; 2)$, do đó hàm số nghịch biến trên khoảng $(0; 2)$. Khẳng định này SAI."
        },
        {
          id: "b",
          text: "Điểm cực đại của đồ thị hàm số là $(0; 2)$ và điểm cực tiểu là $(2; -2)$.",
          correctAnswer: true,
          explanation: "Tại $x = 0$, $y' = 0$ và đổi dấu từ dương sang âm nên là điểm cực đại, $y(0) = 2$. Tại $x = 2$, $y' = 0$ và đổi dấu từ âm sang dương nên là điểm cực tiểu, $y(2) = -2$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Đồ thị $(C)$ nhận điểm uốn $I(1; 0)$ làm tâm đối xứng.",
          correctAnswer: true,
          explanation: "Ta có $y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\implies y(1) = 0$. Điểm uốn $I(1; 0)$ chính là tâm đối xứng của $(C)$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Phương trình $x^3 - 3x^2 + 2 = m$ có đúng $3$ nghiệm thực phân biệt khi và chỉ khi $-2 < m < 2$.",
          correctAnswer: true,
          explanation: "Đường thẳng $y = m$ cắt đồ thị tại 3 điểm phân biệt khi và chỉ khi $y_{\\text{CT}} < m < y_{\\text{CD}} \\Leftrightarrow -2 < m < 2$. Khẳng định này ĐÚNG."
        }
      ]
    },
    {
      id: "ai-tf-12.4.2",
      badge: "Luyện thêm TF 2 - Khảo sát hàm phân thức 1/1 đồng biến",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Cho hàm số $y = \\frac{2x - 1}{x + 1}$ có đồ thị là $(H)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.",
          correctAnswer: true,
          explanation: "Đạo hàm $y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\; \\forall x \\ne -1$. Do đó hàm số đồng biến trên từng khoảng xác định. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Đồ thị $(H)$ có đường tiệm cận đứng là $x = -1$ và đường tiệm cận ngang là $y = 2$.",
          correctAnswer: true,
          explanation: "Tiệm cận đứng $x = -1$, tiệm cận ngang $y = 2$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Tâm đối xứng của đồ thị $(H)$ là điểm $I(-1; 2)$.",
          correctAnswer: true,
          explanation: "Giao điểm của hai đường tiệm cận là $I(-1; 2)$, đây chính là tâm đối xứng. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Đồ thị $(H)$ cắt trục hoành tại điểm có hoành độ bằng $-1$.",
          correctAnswer: false,
          explanation: "Cho $y = 0 \\Leftrightarrow 2x - 1 = 0 \\Leftrightarrow x = 0.5$ (không phải $-1$). Khẳng định này SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.4.3",
      badge: "Luyện thêm TF 3 - Khảo sát hàm phân thức bậc 2/1",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Cho hàm số $y = \\frac{x^2 + 2x - 2}{x + 1}$ có đồ thị là $(C)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đồ thị $(C)$ có đường tiệm cận đứng $x = -1$ và tiệm cận xiên $y = x + 1$.",
          correctAnswer: true,
          explanation: "Chia tử cho mẫu: $y = x + 1 - \\frac{3}{x + 1}$. Tiệm cận đứng $x = -1$, tiệm cận xiên $y = x + 1$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Tâm đối xứng của đồ thị $(C)$ là điểm $I(-1; 0)$.",
          correctAnswer: true,
          explanation: "Thay $x = -1$ vào phương trình tiệm cận xiên được $y = -1 + 1 = 0$. Tâm đối xứng là $I(-1; 0)$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Đạo hàm $y' = 1 + \\frac{3}{(x+1)^2} > 0$ với mọi $x \\ne -1$, do đó đồ thị không có điểm cực trị.",
          correctAnswer: true,
          explanation: "Ta có $y' = 1 + \\frac{3}{(x+1)^2} > 0, \\; \\forall x \\ne -1$. Hàm số luôn đồng biến trên từng khoảng xác định và không có cực trị. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Đồ thị $(C)$ không bao giờ cắt trục tung $Oy$.",
          correctAnswer: false,
          explanation: "Với $x = 0 \\implies y = \\frac{-2}{1} = -2$. Đồ thị cắt trục tung tại $(0; -2)$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.4.4",
      badge: "Luyện thêm TF 4 - Ứng dụng kinh tế: Giá thành và sản lượng tối ưu",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Hàm tổng chi phí sản xuất $x$ tấn sản phẩm hóa chất là $C(x) = x^3 - 30x^2 + 400x + 500$ (triệu đồng) với $0 < x \\le 25$. Chi phí cận biên tại mức sản lượng $x$ là $C'(x)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm chi phí cận biên là $C'(x) = 3x^2 - 60x + 400$.",
          correctAnswer: true,
          explanation: "Lấy đạo hàm: $C'(x) = 3x^2 - 60x + 400$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Chi phí cận biên đạt giá trị nhỏ nhất tại mức sản lượng $x = 10$ tấn.",
          correctAnswer: true,
          explanation: "Tam thức bậc hai $C'(x) = 3x^2 - 60x + 400$ đạt cực tiểu tại đỉnh $x = -\\frac{-60}{2(3)} = 10$ tấn. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Giá trị chi phí cận biên nhỏ nhất bằng $100$ triệu đồng/tấn.",
          correctAnswer: true,
          explanation: "Thay $x = 10$ vào $C'(x)$: $C'(10) = 3(10)^2 - 60(10) + 400 = 300 - 600 + 400 = 100$ triệu đồng/tấn. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Hàm tổng chi phí $C(x)$ nghịch biến trên khoảng $(5; 15)$.",
          correctAnswer: false,
          explanation: "Vì $C'(x) \\ge 100 > 0$ với mọi $x$, nên $C(x)$ luôn đồng biến trên toàn bộ khoảng $(0; 25]$. Khẳng định này SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-12.4.1",
      badge: "Luyện thêm SA 1 - Hoành độ điểm uốn hàm bậc ba",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Cho hàm số $y = -2x^3 + 6x^2 - 3x + 1$. Hoành độ tâm đối xứng của đồ thị hàm số bằng bao nhiêu?",
      correctAnswer: "1",
      acceptableAnswers: [
        "1",
        "1.0"
      ],
      explanation: "$y' = -6x^2 + 12x - 3$, $y'' = -12x + 12 = 0 \\Leftrightarrow x = 1$."
    },
    {
      id: "ai-sa-12.4.2",
      badge: "Luyện thêm SA 2 - Tọa độ tâm đối xứng hàm phân thức 1/1",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Đồ thị hàm số $y = \\frac{4x + 1}{2x - 6}$ có tâm đối xứng là điểm $I(x_0; y_0)$. Tính tích $x_0 \\cdot y_0$.",
      correctAnswer: "6",
      acceptableAnswers: [
        "6",
        "6.0"
      ],
      explanation: "Tiệm cận đứng $x = 3$, tiệm cận ngang $y = \\frac{4}{2} = 2$. Tâm đối xứng $I(3; 2) \\implies x_0 y_0 = 3 \\cdot 2 = 6$."
    },
    {
      id: "ai-sa-12.4.3",
      badge: "Luyện thêm SA 3 - Tâm đối xứng hàm phân thức 2/1",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Cho hàm số $y = \\frac{x^2 - 4x + 7}{x - 2}$. Tung độ tâm đối xứng của đồ thị hàm số bằng bao nhiêu?",
      correctAnswer: "0",
      acceptableAnswers: [
        "0",
        "0.0"
      ],
      explanation: "Chia tử cho mẫu: $y = x - 2 + \\frac{3}{x - 2}$. Tiệm cận đứng $x = 2$, tiệm cận xiên $y = x - 2$. Thay $x = 2$ vào tiệm cận xiên: $y = 2 - 2 = 0$. Tung độ tâm đối xứng bằng 0."
    },
    {
      id: "ai-sa-12.4.4",
      badge: "Luyện thêm SA 4 - Số giá trị nguyên tham số m để có 3 nghiệm",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Cho hàm số $y = x^3 - 3x^2 + 1$. Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $x^3 - 3x^2 + 1 = m$ có đúng $3$ nghiệm thực phân biệt?",
      correctAnswer: "3",
      acceptableAnswers: [
        "3",
        "3.0"
      ],
      explanation: "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Cực đại $y(0) = 1$, cực tiểu $y(2) = -3$. Phương trình có 3 nghiệm phân biệt khi $-3 < m < 1$. Các số nguyên là $m \\in \\{-2; -1; 0\\}$. Có 3 giá trị nguyên."
    },
    {
      id: "ai-sa-12.4.5",
      badge: "Luyện thêm SA 5 - Diện tích tam giác giao trục",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Đồ thị hàm số $y = \\frac{x - 4}{x - 2}$ cắt trục hoành tại $A$ và cắt trục tung tại $B$. Tính diện tích tam giác $OAB$.",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "$A(4; 0)$ và $B(0; 2)$. Diện tích $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 4 \\cdot 2 = 4$."
    },
    {
      id: "ai-sa-12.4.6",
      badge: "Luyện thêm SA 6 - Khoảng cách hai điểm cực trị hàm bậc ba",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Đồ thị hàm số $y = -x^3 + 3x + 1$ có hai điểm cực trị $A$ và $B$. Tính bình phương khoảng cách $AB^2$.",
      correctAnswer: "20",
      acceptableAnswers: [
        "20",
        "20.0"
      ],
      explanation: "$y' = -3x^2 + 3 = 0 \\Leftrightarrow x = \\pm 1$. Cực tiểu $A(-1; -1)$, cực đại $B(1; 3)$. $AB^2 = (1 - (-1))^2 + (3 - (-1))^2 = 4 + 16 = 20$."
    },
    {
      id: "ai-sa-12.4.7",
      badge: "Luyện thêm SA 7 - Tung độ điểm cực đại hàm phân thức 2/1",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$. Tung độ điểm cực đại của đồ thị hàm số bằng bao nhiêu?",
      correctAnswer: "-1",
      acceptableAnswers: [
        "-1",
        "-1.0"
      ],
      explanation: "Hàm số đạt cực đại tại $x = 0$ với tung độ cực đại $y(0) = \\frac{1}{-1} = -1$."
    },
    {
      id: "ai-sa-12.4.8",
      badge: "Luyện thêm SA 8 - Tối ưu hóa sản lượng lợi nhuận cực đại",
      source: "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 4",
      prompt: "Lợi nhuận của một cơ sở sản xuất khi bán $x$ lô hàng được mô hình bởi hàm số bậc ba $P(x) = -x^3 + 15x^2 - 48x + 100$ (triệu đồng) với $x > 0$. Cơ sở nên sản xuất bao nhiêu lô hàng để lợi nhuận thu được đạt cực đại?",
      correctAnswer: "8",
      acceptableAnswers: [
        "8",
        "8.0"
      ],
      explanation: "Xét đạo hàm: $P'(x) = -3x^2 + 30x - 48 = -3(x^2 - 10x + 16) = -3(x - 2)(x - 8)$. Cho $P'(x) = 0 \\Leftrightarrow x = 2$ hoặc $x = 8$. Bảng biến thiên: $P'(x) < 0$ trên $(0; 2)$ và $(8; +\\infty)$; $P'(x) > 0$ trên $(2; 8)$. Do đó hàm số đạt cực đại tại $x = 8$. Cơ sở nên sản xuất 8 lô hàng để đạt lợi nhuận lớn nhất."
    }
  ]
};
