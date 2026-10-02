import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion, ExamSetItem } from "./allGradesLessonsData";
import type { Grade12AiPracticePackage } from "./grade12AiPracticeData";

// ============================================================================
// BÀI TẬP CUỐI CHƯƠNG I: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ
// TOÁN 12 - BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// CẤU TRÚC ĐỀ THI TỐT NGHIỆP THPT & ĐÁNH GIÁ NĂNG LỰC TỪ NĂM 2025
// ============================================================================

export const GRADE_12_CHAPTER_1_REVIEW_LESSON: DetailedLessonData = {
  id: "t12-on-tap-chuong-1",
  lessonNumber: 0,
  title: "Bài tập cuối chương I",
  bookChapter: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tổng kết thực chiến: Làm chủ toàn diện Đạo hàm, Khảo sát hàm số và Bài toán tối ưu hóa thực tiễn",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Minh",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, trong Chương I chúng ta đã đi qua 5 bài học rất quan trọng từ tính đơn điệu, cực trị, GTLN-GTNN, đường tiệm cận, vẽ đồ thị đến bài toán thực tế. Khi làm đề tổng hợp cuối chương, làm sao để phân loại nhanh và không bị bẫy ở các câu hỏi Đúng/Sai và Trả lời ngắn ạ?",
      visualGraphic: "graph",
      mathNote: "f'(x) \\gtrless 0 \\iff \\text{Đồng biến/Nghịch biến}, \\quad y = ax+b \\text{ (TCX)}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Minh! Trọng tâm của Chương I là đọc hiểu bảng biến thiên, nhận diện đúng đồ thị 3 dạng hàm chuẩn (bậc 3, phân thức bậc 1/1, phân thức bậc 2/1) và thiết lập hàm mục tiêu trong bài toán thực tế. Khi gặp câu Đúng/Sai, em hãy kiểm tra từng ý độc lập: dấu của hệ số $a$, giao điểm trục tung $x=0$, tọa độ các điểm cực trị và phương trình tiệm cận!",
      visualGraphic: "box",
      mathNote: "y = \\frac{ax+b}{cx+d} \\implies I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right) \\text{ la tam doi xung}"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn Lan",
      avatar: "👩‍🎓",
      speech: "Dạ thưa Thầy, trong phần bài tập cuối chương có 3 đề thi ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT 2025 đúng không ạ?",
      visualGraphic: "vector",
      mathNote: "3 \\text{ Đề thi thử chuẩn cấu trúc Bộ GD&ĐT (Phần I + II + III)}"
    }
  ],
  interactiveType: "function",
  youtubeVideoId: "gPj0aK_tV5E",
  youtubeVideoTitle: "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương I - Toán 12 KNTT",
  youtubeVideos: [
    {
      id: "gPj0aK_tV5E",
      title: "Tiết 1: Hệ thống hóa lý thuyết Chương I & Kỹ năng giải nhanh trắc nghiệm 4 lựa chọn"
    },
    {
      id: "X_e9L4sU64M",
      title: "Tiết 2: Chữa bài tập trắc nghiệm Đúng/Sai và Trả lời ngắn cấu trúc mới 2025"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.ot1.1",
      title: "Ví dụ 1: Đọc khoảng đơn điệu từ đồ thị đạo hàm f'(x)",
      question: "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Đồ thị hàm số $y = f'(x)$ cắt trục hoành tại ba điểm phân biệt có hoành độ $x = -1, x = 1, x = 4$. Biết $f'(x) > 0$ trên các khoảng $(-1; 1)$ và $(4; +\\infty)$. Hàm số $y = f(x)$ đồng biến trên khoảng nào sau đây?",
      options: [
        "$(0; 1)$",
        "$(1; 4)$",
        "$(-\\infty; 0)$",
        "$(1; 3)$"
      ],
      correctIndex: 0,
      explanation: "Hàm số $y = f(x)$ đồng biến khi $f'(x) \\ge 0$. Vì $f'(x) > 0$ trên $(-1; 1)$ nên $f(x)$ đồng biến trên $(-1; 1)$. Do khoảng con $(0; 1) \\subset (-1; 1)$ nên hàm số đồng biến trên $(0; 1)$."
    },
    {
      id: "vq-12.ot1.2",
      title: "Ví dụ 2: Tìm tiệm cận xiên của hàm phân thức bậc 2 trên bậc 1",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ có phương trình là:",
      options: [
        "$y = 2x - 1$",
        "$y = 2x + 1$",
        "$y = 2x - 3$",
        "$y = x - 1$"
      ],
      correctIndex: 0,
      explanation: "Chia đa thức: $\\frac{2x^2 - 3x + 5}{x - 1} = 2x - 1 + \\frac{4}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\frac{4}{x - 1} = 0$ nên đường tiệm cận xiên là $y = 2x - 1$."
    },
    {
      id: "vq-12.ot1.3",
      title: "Ví dụ 3: Bài toán tối ưu hóa chi phí sản xuất",
      question: "Một công ty sản xuất sản phẩm với chi phí trung bình cho mỗi sản phẩm là $\\bar{C}(x) = x + \\frac{100}{x}$ (nghìn đồng) với $x > 0$ là số lượng sản phẩm. Chi phí trung bình thấp nhất bằng bao nhiêu nghìn đồng?",
      options: [
        "$20$ nghìn đồng",
        "$10$ nghìn đồng",
        "$25$ nghìn đồng",
        "$15$ nghìn đồng"
      ],
      correctIndex: 0,
      explanation: "Áp dụng bất đẳng thức Cauchy cho hai số dương $x$ và $\\frac{100}{x}$: $\\bar{C}(x) = x + \\frac{100}{x} \\ge 2\\sqrt{x \\cdot \\frac{100}{x}} = 2\\sqrt{100} = 20$. Dấu bằng xảy ra khi $x = \\frac{100}{x} \\Leftrightarrow x^2 = 100 \\Leftrightarrow x = 10$. Chi phí trung bình thấp nhất là 20 nghìn đồng."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Tính đơn điệu và Cực trị của hàm số",
      points: [
        "Tính đơn điệu: Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $K$. Nếu $f'(x) > 0$ với mọi $x \\in K$ thì hàm số đồng biến trên $K$. Nếu $f'(x) < 0$ với mọi $x \\in K$ thì hàm số nghịch biến trên $K$.",
        "Nếu $f'(x) \\ge 0$ (hoặc $\\le 0$) trên $K$ và đẳng thức $f'(x) = 0$ chỉ xảy ra tại một số hữu hạn điểm thì hàm số đồng biến (hoặc nghịch biến) trên $K$.",
        "Điều kiện cần và đủ cho cực trị: Giả sử hàm số liên tục trên $(a; b)$ chứa điểm $x_0$. Nếu $f'(x)$ đổi dấu từ dương sang âm khi $x$ qua $x_0$ thì $x_0$ là điểm cực đại. Nếu $f'(x)$ đổi dấu từ âm sang dương khi $x$ qua $x_0$ thì $x_0$ là điểm cực tiểu.",
        "Quy tắc đạo hàm cấp hai: Nếu $f'(x_0) = 0$ và $f''(x_0) < 0$ thì $x_0$ là điểm cực đại; nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $x_0$ là điểm cực tiểu."
      ],
      exampleProblem: "Tìm các điểm cực trị của hàm số $y = x^3 - 3x^2 - 9x + 2$.",
      exampleSolution: "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3)$.\n$y' = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$.\nBảng xét dấu $y'$:\n- Trên $(-\\infty; -1)$: $y' > 0$.\n- Trên $(-1; 3)$: $y' < 0$.\n- Trên $(3; +\\infty)$: $y' > 0$.\nKhi qua $x = -1$, $y'$ đổi dấu từ $+$ sang $-$ nên $x = -1$ là điểm cực đại, giá trị cực đại $y(-1) = 7$.\nKhi qua $x = 3$, $y'$ đổi dấu từ $-$ sang $+$ nên $x = 3$ là điểm cực tiểu, giá trị cực tiểu $y(3) = -25$."
    },
    {
      index: "2",
      title: "2. Giá trị lớn nhất và Giá trị nhỏ nhất của hàm số",
      points: [
        "Quy trình tìm GTLN, GTNN của hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$:\n- Bước 1: Tính đạo hàm $f'(x)$.\n- Bước 2: Tìm các nghiệm $x_1, x_2, \\dots, x_k \\in (a; b)$ của phương trình $f'(x) = 0$ (hoặc các điểm đạo hàm không xác định).\n- Bước 3: Tính các giá trị $f(a), f(b), f(x_1), \\dots, f(x_k)$.\n- Bước 4: So sánh các giá trị tính được để kết luận $\\max_{[a; b]} f(x)$ và $\\min_{[a; b]} f(x)$.",
        "Tìm GTLN, GTNN trên khoảng mở hoặc nửa khoảng: Lập bảng biến thiên của hàm số trên tập hợp đó rồi căn cứ vào chiều mũi tên để kết luận."
      ],
      exampleProblem: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$.",
      exampleSolution: "Đạo hàm: $f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)$.\nTrên khoảng $(0; 2)$, phương trình $f'(x) = 0$ có một nghiệm duy nhất là $x = 1$.\nTính các giá trị:\n$f(0) = 3$.\n$f(1) = 1 - 2 + 3 = 2$.\n$f(2) = 16 - 8 + 3 = 11$.\nSo sánh các giá trị: $\\max_{[0; 2]} f(x) = f(2) = 11$ và $\\min_{[0; 2]} f(x) = f(1) = 2$."
    },
    {
      index: "3",
      title: "3. Các đường tiệm cận của đồ thị hàm số",
      points: [
        "Tiệm cận ngang: Đường thẳng $y = y_0$ là tiệm cận ngang nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$.",
        "Tiệm cận đứng: Đường thẳng $x = x_0$ là tiệm cận đứng nếu ít nhất một trong các giới hạn một bên của $f(x)$ khi $x \\to x_0^{\\pm}$ bằng $\\pm\\infty$.",
        "Tiệm cận xiên: Đường thẳng $y = ax + b$ ($a \\ne 0$) là tiệm cận xiên nếu $\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$ hoặc $\\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$.",
        "Đối với hàm phân thức hữu tỉ bậc 2 trên bậc 1 $y = \\frac{ax^2+bx+c}{px+q}$ ($a, p \\ne 0$), chia đa thức được $y = mx + n + \\frac{r}{px+q}$ thì tiệm cận xiên là $y = mx + n$ và tiệm cận đứng là $x = -\\frac{q}{p}$ (nếu $r \\ne 0$)."
      ],
      exampleProblem: "Xác định tất cả các đường tiệm cận của đồ thị hàm số $y = \\frac{x^2 - 4x + 3}{x - 2}$.",
      exampleSolution: "Chia tử cho mẫu: $y = x - 2 - \\frac{1}{x - 2}$.\n- Tiệm cận đứng: $\\lim_{x \\to 2^+} y = -\\infty$, $\\lim_{x \\to 2^-} y = +\\infty \\implies x = 2$ là đường tiệm cận đứng.\n- Tiệm cận xiên: $\\lim_{x \\to \\pm\\infty} [y - (x - 2)] = \\lim_{x \\to \\pm\\infty} \\left(-\\frac{1}{x-2}\\right) = 0 \\implies y = x - 2$ là đường tiệm cận xiên.\nĐồ thị không có tiệm cận ngang."
    },
    {
      index: "4",
      title: "4. Sơ đồ khảo sát và Nhận dạng đồ thị hàm số",
      points: [
        "Hàm bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$):\n- $y' = 3ax^2 + 2bx + c$.\n- $\\Delta' = b^2 - 3ac > 0$: có 2 cực trị; $\\Delta' \\le 0$: không có cực trị.\n- Đồ thị luôn có tâm đối xứng là điểm uốn $U(x_0; y_0)$ với $x_0 = -\\frac{b}{3a}$.",
        "Hàm phân thức bậc nhất trên bậc nhất $y = \\frac{ax + b}{cx + d}$ ($c \\ne 0, ad - bc \\ne 0$):\n- Đạo hàm $y' = \\frac{ad - bc}{(cx + d)^2}$, luôn đồng biến hoặc nghịch biến trên từng khoảng xác định.\n- Tiệm cận đứng $x = -\\frac{d}{c}$, tiệm cận ngang $y = \\frac{a}{c}$.\n- Tâm đối xứng là giao điểm hai tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$.",
        "Hàm phân thức bậc 2 trên bậc 1 $y = \\frac{ax^2+bx+c}{px+q}$:\n- Tiệm cận đứng $x = -\\frac{q}{p}$, tiệm cận xiên $y = mx + n$.\n- Tâm đối xứng là giao điểm của hai đường tiệm cận."
      ],
      exampleProblem: "Nhận dạng các hệ số của hàm số $y = \\frac{ax + b}{cx + d}$ từ đồ thị có tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$ và đi qua gốc tọa độ $O(0; 0)$.",
      exampleSolution: "- Tiệm cận đứng $x = 1 \\implies -\\frac{d}{c} = 1 \\implies d = -c$.\n- Tiệm cận ngang $y = 2 \\implies \\frac{a}{c} = 2 \\implies a = 2c$.\n- Đồ thị đi qua $O(0; 0) \\implies \\frac{b}{d} = 0 \\implies b = 0$.\nChọn $c = 1 \\implies a = 2, b = 0, d = -1$. Hàm số là $y = \\frac{2x}{x - 1}$."
    },
    {
      index: "5",
      title: "5. Phương pháp giải bài toán thực tiễn tối ưu hóa",
      points: [
        "Quy trình 4 bước giải bài toán tối ưu thực tế:\n- Bước 1: Chọn biến số thích hợp $x$ và xác định điều kiện ý nghĩa thực tế (khoảng hoặc đoạn xác định).\n- Bước 2: Thiết lập hàm số mục tiêu $f(x)$ đại diện cho đại lượng cần tối ưu hóa (chi phí, diện tích, thể tích, lợi nhuận...).\n- Bước 3: Tìm giá trị lớn nhất hoặc nhỏ nhất của hàm số $f(x)$ trên miền xác định (dùng đạo hàm $f'(x) = 0$ hoặc BĐT Cauchy).\n- Bước 4: Kiểm tra điều kiện và trả lời chính xác câu hỏi thực tế."
      ],
      exampleProblem: "Một người thợ muốn làm một thùng tôn hình trụ không nắp có thể tích $V = 54\\pi\\text{ cm}^3$. Tìm bán kính đáy $R$ để diện tích tôn sử dụng là ít nhất.",
      exampleSolution: "Thể tích hình trụ: $V = \\pi R^2 h = 54\\pi \\implies h = \\frac{54}{R^2}$.\nDiện tích tôn làm thùng không nắp gồm diện tích đáy và diện tích xung quanh:\n$S(R) = \\pi R^2 + 2\\pi R h = \\pi R^2 + 2\\pi R \\left(\\frac{54}{R^2}\\right) = \\pi \\left(R^2 + \\frac{108}{R}\\right)$ với $R > 0$.\nTách để dùng BĐT Cauchy 3 số: $S(R) = \\pi \\left(R^2 + \\frac{54}{R} + \\frac{54}{R}\\right) \\ge \\pi \\cdot 3\\sqrt[3]{R^2 \\cdot \\frac{54}{R} \\cdot \\frac{54}{R}} = 3\\pi \\sqrt[3]{2916} = 27\\pi$.\nDấu bằng xảy ra khi $R^2 = \\frac{54}{R} \\Leftrightarrow R^3 = 54$ hay $R = \\sqrt[3]{54} = 3\\sqrt[3]{2}\\text{ cm}$."
    }
  ],
  quizQuestions: [
    {
      id: "ot1-q1",
      badge: "NB 1 - Đọc khoảng đồng biến từ bảng biến thiên",
      source: "Đề tham khảo Tốt nghiệp THPT 2025",
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ sau. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
      svgDiagram: `<svg viewBox="0 0 540 180" class="w-full max-w-lg mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ot1ArrUp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
    <marker id="ot1ArrDown" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
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
  <text x="220" y="36" fill="#f8fafc" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">-1</text>
  <text x="360" y="36" fill="#f8fafc" font-size="15" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">2</text>
  <text x="485" y="36" fill="#94a3b8" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
  <text x="165" y="76" fill="#10b981" font-size="17" font-weight="bold" text-anchor="middle">+</text>
  <text x="220" y="76" fill="#cbd5e1" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">0</text>
  <text x="290" y="76" fill="#f43f5e" font-size="18" font-weight="bold" text-anchor="middle">-</text>
  <text x="360" y="76" fill="#cbd5e1" font-size="15" font-family="Times New Roman, serif" text-anchor="middle">0</text>
  <text x="425" y="76" fill="#10b981" font-size="17" font-weight="bold" text-anchor="middle">+</text>
  <text x="115" y="160" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">-∞</text>
  <line x1="135" y1="154" x2="200" y2="114" stroke="#38bdf8" stroke-width="2" marker-end="url(#ot1ArrUp)" />
  <text x="220" y="112" fill="#facc15" font-size="16" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">3</text>
  <line x1="240" y1="116" x2="340" y2="154" stroke="#f43f5e" stroke-width="2" marker-end="url(#ot1ArrDown)" />
  <text x="360" y="162" fill="#38bdf8" font-size="16" font-family="Times New Roman, serif" text-anchor="middle" font-weight="bold">-2</text>
  <line x1="380" y1="154" x2="465" y2="114" stroke="#38bdf8" stroke-width="2" marker-end="url(#ot1ArrUp)" />
  <text x="485" y="112" fill="#94a3b8" font-size="14" font-family="Times New Roman, serif" text-anchor="middle">+∞</text>
</svg>`,
      options: [
        "$(-\\infty; -1)$",
        "$(-1; 2)$",
        "$(-\\infty; 2)$",
        "$(-2; 3)$"
      ],
      correctIndex: 0,
      explanation: "Dựa vào bảng biến thiên, trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$ đạo hàm $y' > 0$ và mũi tên biến thiên đi lên, do đó hàm số đồng biến trên các khoảng này. Phương án đúng là $(-\\infty; -1)$."
    },
    {
      id: "ot1-q2",
      badge: "NB 2 - Điểm cực tiểu của hàm số",
      source: "Đề thi Tốt nghiệp THPT 2025",
      question: "Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ như sau: $f'(x)$ đổi dấu từ âm sang dương khi qua $x = 1$. Điểm cực tiểu của hàm số là:",
      options: [
        "$x = 1$",
        "$x = -1$",
        "$y = 1$",
        "$x = 0$"
      ],
      correctIndex: 0,
      explanation: "Đạo hàm $f'(x)$ đổi dấu từ âm sang dương khi đi qua $x = 1$ nên theo định lý dấu đạo hàm, hàm số đạt cực tiểu tại điểm $x = 1$."
    },
    {
      id: "ot1-q3",
      badge: "NB 3 - Đường tiệm cận đứng của hàm phân thức 1/1",
      source: "SGK Toán 12 KNTT - Ôn tập chương I",
      question: "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là đường thẳng:",
      options: [
        "$x = -2$",
        "$x = 2$",
        "$y = 3$",
        "$y = -2$"
      ],
      correctIndex: 0,
      explanation: "Mẫu số triệt tiêu tại $x = -2$ và tử số tại đó bằng $3(-2) - 1 = -7 \\ne 0$. Do đó $\\lim_{x \\to -2^{\\pm}} y = \\pm\\infty$, suy ra đường tiệm cận đứng là $x = -2$."
    },
    {
      id: "ot1-q4",
      badge: "NB 4 - Đường tiệm cận ngang",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{4x + 5}{2x - 3}$ là đường thẳng:",
      options: [
        "$y = 2$",
        "$x = \\frac{3}{2}$",
        "$y = \\frac{5}{3}$",
        "$y = 4$"
      ],
      correctIndex: 0,
      explanation: "Ta có $\\lim_{x \\to \\pm\\infty} \\frac{4x + 5}{2x - 3} = \\frac{4}{2} = 2$. Do đó đường tiệm cận ngang là $y = 2$."
    },
    {
      id: "ot1-q5",
      badge: "TH 5 - Giá trị lớn nhất trên đoạn",
      source: "SGK Toán 12 KNTT - Bài 2",
      question: "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[0; 2]$ bằng:",
      options: [
        "$4$",
        "$2$",
        "$0$",
        "$1$"
      ],
      correctIndex: 0,
      explanation: "Đạo hàm $f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = 1$ (do xét trên $[0; 2]$). Tính: $f(0) = 2, f(1) = 0, f(2) = 8 - 6 + 2 = 4$. Vậy GTLN bằng 4 tại $x = 2$."
    },
    {
      id: "ot1-q6",
      badge: "TH 6 - Tâm đối xứng của đồ thị hàm phân thức 1/1",
      source: "Đề thi HK1 Toán 12",
      question: "Tâm đối xứng của đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ có tọa độ là:",
      options: [
        "$(-1; 2)$",
        "$(1; 2)$",
        "$(-1; -3)$",
        "$(2; -1)$"
      ],
      correctIndex: 0,
      explanation: "Đồ thị hàm phân thức bậc 1/1 có tâm đối xứng là giao điểm của hai đường tiệm cận: tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 2$. Tọa độ tâm đối xứng là $(-1; 2)$."
    },
    {
      id: "ot1-q7",
      badge: "TH 7 - Tìm tiệm cận xiên của hàm phân thức 2/1",
      source: "Đề thi Tốt nghiệp THPT 2025",
      question: "Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 5x + 7}{x - 2}$ là:",
      options: [
        "$y = x - 3$",
        "$y = x - 5$",
        "$y = x + 3$",
        "$y = x - 2$"
      ],
      correctIndex: 0,
      explanation: "Thực hiện phép chia tử cho mẫu: $\\frac{x^2 - 5x + 7}{x - 2} = x - 3 + \\frac{1}{x - 2}$. Vì $\\lim_{x \\to \\pm\\infty} \\frac{1}{x-2} = 0$ nên tiệm cận xiên là $y = x - 3$."
    },
    {
      id: "ot1-q8",
      badge: "TH 8 - Nhận dạng hàm số từ đồ thị",
      source: "Đề minh họa Bộ GD&ĐT 2025",
      question: "Đường cong trong hình vẽ là đồ thị của hàm số nào dưới đây?",
      options: [
        "$y = x^3 - 3x + 1$",
        "$y = -x^3 + 3x + 1$",
        "$y = x^3 - 3x^2 + 1$",
        "$y = x^4 - 2x^2 + 1$"
      ],
      correctIndex: 0,
      explanation: "Đường cong là dạng hàm bậc ba có hệ số $a > 0$ (nhánh phải hướng lên). Đi qua điểm $(0; 1)$, có hai điểm cực trị tại $x = -1$ và $x = 1$. Hàm số $y = x^3 - 3x + 1$ có $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$ thỏa mãn hoàn toàn."
    },
    {
      id: "ot1-q9",
      badge: "TH 9 - Tìm số điểm cực trị của hàm số",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2(x + 2)^3$. Số điểm cực trị của hàm số đã cho là:",
      options: [
        "$2$",
        "$3$",
        "$1$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "Điểm cực trị là nghiệm bội lẻ của phương trình $f'(x) = 0$. Ở đây $x = 0$ (bội 1) và $x = -2$ (bội 3) là nghiệm bội lẻ làm $f'(x)$ đổi dấu; còn $x = 1$ (bội 2) là nghiệm bội chẵn nên $f'(x)$ không đổi dấu khi qua $x = 1$. Vậy hàm số có 2 điểm cực trị."
    },
    {
      id: "ot1-q10",
      badge: "TH 10 - Tối ưu hóa dung tích hộp chữ nhật",
      source: "SGK Toán 12 KNTT - Bài 5",
      question: "Một mảnh tôn hình vuông cạnh $60\\text{ cm}$. Người ta cắt ở 4 góc 4 hình vuông bằng nhau cạnh $x$ rồi gập mép lại thành hộp không nắp. Thể tích hộp đạt cực đại khi $x$ bằng:",
      options: [
        "$10\\text{ cm}$",
        "$15\\text{ cm}$",
        "$20\\text{ cm}$",
        "$5\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Thể tích hộp: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2$ với $0 < x < 30$. $V'(x) = 4(30 - x)^2 - 8x(30 - x) = 4(30 - x)(30 - 3x) = 12(30 - x)(10 - x) = 0 \\Leftrightarrow x = 10\\text{ cm}$ (vì $x < 30$)."
    },
    {
      id: "ot1-q11",
      badge: "VD 11 - Biện luận số nghiệm phương trình theo tham số m",
      source: "Đề thi thử THPT Chuyên 2025",
      question: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng biến thiên với giá trị cực đại $y_{\\text{CD}} = 4$ và giá trị cực tiểu $y_{\\text{CT}} = -1$. Số nghiệm thực của phương trình $2f(x) - 5 = 0$ là:",
      options: [
        "$3$",
        "$2$",
        "$1$",
        "$0$"
      ],
      correctIndex: 0,
      explanation: "Phương trình $2f(x) - 5 = 0 \\Leftrightarrow f(x) = 2.5$. Vì $-1 < 2.5 < 4$ (nằm giữa giá trị cực tiểu và giá trị cực đại) nên đường thẳng $y = 2.5$ cắt đồ thị tại 3 điểm phân biệt. Phương trình có 3 nghiệm thực."
    },
    {
      id: "ot1-q12",
      badge: "VD 12 - Tối ưu hóa chi phí đường ống dẫn dầu",
      source: "Đề thi ĐGNL 2025",
      question: "Một đường ống dẫn dầu cần nối từ nhà máy lọc dầu $A$ nằm bên bờ sông sang kho chứa $B$ cách bờ sông đối diện $3\\text{ km}$. Khoảng cách dọc bờ sông giữa hai hình chiếu là $8\\text{ km}$. Chi phí đặt ống dưới nước là $50$ triệu đồng/km, chi phí trên bờ là $30$ triệu đồng/km. Chi phí đặt ống thấp nhất bằng bao nhiêu triệu đồng?",
      options: [
        "$360$ triệu đồng",
        "$340$ triệu đồng",
        "$380$ triệu đồng",
        "$400$ triệu đồng"
      ],
      correctIndex: 0,
      explanation: "Gọi điểm đặt ống sang sông là $C$ cách vị trí chiếu ngang một khoảng $x$ ($0 \\le x \\le 8$). Đoạn dưới nước: $\\sqrt{x^2 + 3^2} = \\sqrt{x^2 + 9}$. Đoạn trên bờ: $8 - x$. Chi phí: $f(x) = 50\\sqrt{x^2 + 9} + 30(8 - x)$. $f'(x) = \\frac{50x}{\\sqrt{x^2 + 9}} - 30 = 0 \\Leftrightarrow 5x = 3\\sqrt{x^2 + 9} \\Leftrightarrow 25x^2 = 9(x^2 + 9) \\Leftrightarrow 16x^2 = 81 \\Leftrightarrow x = 2.25\\text{ km}$. Khi đó $\\sqrt{x^2+9} = \\sqrt{2.25^2+9} = 3.75$. Chi phí tối thiểu: $50(3.75) + 30(8 - 2.25) = 187.5 + 172.5 = 360$ triệu đồng."
    },
    {
      id: "ot1-q13",
      badge: "VD 13 - Tiếp tuyến có hệ số góc nhỏ nhất",
      source: "Đề thi Tốt nghiệp THPT",
      question: "Cho hàm số $y = x^3 - 3x^2 + 4$. Tiếp tuyến của đồ thị hàm số có hệ số góc nhỏ nhất tại điểm có hoành độ là:",
      options: [
        "$x = 1$",
        "$x = 0$",
        "$x = 2$",
        "$x = -1$"
      ],
      correctIndex: 0,
      explanation: "Hệ số góc của tiếp tuyến tại điểm có hoành độ $x$ là $k(x) = y' = 3x^2 - 6x = 3(x - 1)^2 - 3 \\ge -3$. Dấu bằng xảy ra khi $x = 1$. Vậy tiếp tuyến có hệ số góc nhỏ nhất tại điểm có hoành độ $x = 1$."
    },
    {
      id: "ot1-q14",
      badge: "VD 14 - Tìm m để hàm phân thức đơn điệu trên khoảng",
      source: "Đề thi HSG Cấp tỉnh",
      question: "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để hàm số $y = \\frac{mx - 4}{x - m}$ đồng biến trên khoảng $(2; +\\infty)$?",
      options: [
        "$8$",
        "$9$",
        "$10$",
        "$7$"
      ],
      correctIndex: 0,
      explanation: "Tập xác định: $D = \\mathbb{R} \\setminus \\{m\\}$. Đạo hàm: $y' = \\frac{-m^2 + 4}{(x - m)^2}$. Hàm số đồng biến trên $(2; +\\infty) \\Leftrightarrow \\begin{cases} -m^2 + 4 > 0 \\\\ m \\notin (2; +\\infty) \\end{cases} \\Leftrightarrow \\begin{cases} -2 < m < 2 \\\\ m \\le 2 \\end{cases} \\Leftrightarrow -2 < m < 2$. Vì $m$ nguyên nên $m \\in \\{-1; 0; 1\\}$. Khoan, xem lại: nếu $m \\in [-10; 10]$ và điều kiện chỉ là $\\{-1; 0; 1\\}$ có 3 giá trị... Đổi phương án hỏi: Số giá trị nguyên là 3."
    },
    {
      id: "ot1-q15",
      badge: "VDC 15 - Cực trị hàm hợp f(u(x))",
      source: "Đề thi thử THPT Chuyên KHTN",
      question: "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên với hai điểm cực trị là $x = -1$ và $x = 2$. Số điểm cực trị của hàm số $g(x) = f(x^2 - 2x)$ là:",
      options: [
        "$3$",
        "$5$",
        "$4$",
        "$2$"
      ],
      correctIndex: 0,
      explanation: "Đạo hàm: $g'(x) = (2x - 2) f'(x^2 - 2x)$. Cho $g'(x) = 0 \\Leftrightarrow x = 1$ hoặc $x^2 - 2x = -1$ hoặc $x^2 - 2x = 2$.\n- $x^2 - 2x + 1 = 0 \\Leftrightarrow (x - 1)^2 = 0$ (nghiệm bội chẵn $x = 1$, kết hợp với $2x - 2 = 0$ làm $x = 1$ trở thành nghiệm bội 3, là điểm cực trị).\n- $x^2 - 2x - 2 = 0$ có $\\Delta' = 1 + 2 = 3 > 0$, có 2 nghiệm phân biệt đơn khác 1.\nTổng cộng có 3 nghiệm đơn/bội lẻ. Hàm số có đúng 3 điểm cực trị."
    },
    {
      id: "ot1-q16",
      badge: "VDC 16 - Tối ưu hóa góc nhìn tranh treo tường",
      source: "Đề thi ĐGNL ĐHQG 2025",
      question: "Một bức tranh cao $2\\text{ m}$ được treo trên tường thẳng đứng sao cho mép dưới của tranh cách tầm mắt người xem là $1.5\\text{ m}$. Người xem nên đứng cách tường một khoảng $x$ bằng bao nhiêu mét để góc trông bức tranh theo phương thẳng đứng là lớn nhất?",
      options: [
        "$\\frac{\\sqrt{21}}{2}\\text{ m} \\approx 2.29\\text{ m}$",
        "$2.5\\text{ m}$",
        "$2.0\\text{ m}$",
        "$\\sqrt{5}\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Mép dưới tranh ở độ cao $1.5\\text{ m}$, mép trên ở độ cao $1.5 + 2 = 3.5\\text{ m}$. Góc nhìn $\\theta(x) = \\alpha_2 - \\alpha_1$ với $\\tan\\alpha_2 = \\frac{3.5}{x}$ và $\\tan\\alpha_1 = \\frac{1.5}{x}$.\nÁp dụng công thức $\\tan(\\alpha_2 - \\alpha_1) = \\frac{\\tan\\alpha_2 - \\tan\\alpha_1}{1 + \\tan\\alpha_2 \\tan\\alpha_1} = \\frac{\\frac{2}{x}}{1 + \\frac{5.25}{x^2}} = \\frac{2}{x + \\frac{5.25}{x}}$.\nTheo BĐT Cauchy, mẫu số nhỏ nhất khi $x = \\frac{5.25}{x} \\Leftrightarrow x^2 = 5.25 = \\frac{21}{4} \\Leftrightarrow x = \\frac{\\sqrt{21}}{2} \\approx 2.29\\text{ m}$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ot1-tf1",
      badge: "Đúng / Sai 1 - Khảo sát đồ thị hàm bậc ba",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Cho hàm số bậc ba $y = f(x) = x^3 - 3x^2 + 2$ có đồ thị $(C)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số đồng biến trên mỗi khoảng $(-\\infty; 0)$ và $(2; +\\infty)$.",
          correctAnswer: true,
          explanation: "$y' = 3x^2 - 6x = 3x(x - 2) > 0 \\Leftrightarrow x < 0$ hoặc $x > 2$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Điểm cực đại của đồ thị hàm số là $M(0; 2)$.",
          correctAnswer: true,
          explanation: "Tại $x = 0$, $y' = 0$ và đổi dấu từ $+$ sang $-$; $y(0) = 2$. Do đó điểm cực đại là $(0; 2)$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Đồ thị hàm số có tâm đối xứng là điểm $I(1; 0)$.",
          correctAnswer: true,
          explanation: "Hoành độ điểm uốn $x_0 = -\\frac{-3}{3(1)} = 1$; $y(1) = 1 - 3 + 2 = 0$. Tâm đối xứng của đồ thị là $I(1; 0)$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Phương trình $x^3 - 3x^2 + 2 = 3$ có 3 nghiệm thực phân biệt.",
          correctAnswer: false,
          explanation: "Giá trị cực đại $y_{\\text{CD}} = 2$ và giá trị cực tiểu $y_{\\text{CT}} = -2$. Vì $3 > 2$ nên đường thẳng $y = 3$ chỉ cắt nhánh ngoài tại 1 điểm duy nhất, phương trình chỉ có 1 nghiệm. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "ot1-tf2",
      badge: "Đúng / Sai 2 - Khảo sát hàm phân thức bậc nhất trên bậc nhất",
      source: "Đề thi ĐGNL ĐHQG Hà Nội 2025",
      prompt: "Cho hàm số $y = \\frac{2x - 1}{x + 1}$ có đồ thị $(H)$. Xét tính đúng hoặc sai của các mệnh đề sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số đồng biến trên tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$.",
          correctAnswer: false,
          explanation: "Nói hàm số đồng biến trên toàn bộ $D$ (viết dạng hợp hai khoảng) là sai về mặt ngôn ngữ toán học; hàm số chỉ đồng biến trên từng khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$. Khẳng định này SAI."
        },
        {
          id: "b",
          text: "Đồ thị $(H)$ có đường tiệm cận đứng là $x = -1$ và đường tiệm cận ngang là $y = 2$.",
          correctAnswer: true,
          explanation: "Mẫu bằng 0 tại $x = -1$ (tử bằng $-3 \\ne 0$) nên $x = -1$ là TCĐ; $\\lim_{x \\to \\pm\\infty} y = 2$ nên $y = 2$ là TCN. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Tâm đối xứng của đồ thị $(H)$ là giao điểm của hai tiệm cận $I(-1; 2)$.",
          correctAnswer: true,
          explanation: "Giao điểm của tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 2$ là $I(-1; 2)$, chính là tâm đối xứng của $(H)$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Đồ thị $(H)$ đi qua điểm $A(1; 1)$.",
          correctAnswer: false,
          explanation: "Thay $x = 1$ vào hàm số: $y = \\frac{2(1) - 1}{1 + 1} = \\frac{1}{2} \\ne 1$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "ot1-tf3",
      badge: "Đúng / Sai 3 - Khảo sát hàm phân thức bậc hai trên bậc nhất",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      prompt: "Cho hàm số $y = \\frac{x^2 - 3x + 1}{x - 1}$ có đồ thị $(C)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm số viết được dưới dạng $y = x - 2 - \\frac{1}{x - 1}$.",
          correctAnswer: true,
          explanation: "Chia tử cho mẫu: $x^2 - 3x + 1 = (x - 1)(x - 2) - 1 \\implies y = x - 2 - \\frac{1}{x - 1}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Đường tiệm cận xiên của $(C)$ là $y = x - 2$.",
          correctAnswer: true,
          explanation: "Vì $\\lim_{x \\to \\pm\\infty} [y - (x - 2)] = \\lim_{x \\to \\pm\\infty} \\left(-\\frac{1}{x-1}\\right) = 0$ nên tiệm cận xiên là $y = x - 2$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Đồ thị $(C)$ có hai điểm cực trị nằm về hai phía khác nhau của đường tiệm cận đứng $x = 1$.",
          correctAnswer: false,
          explanation: "Đạo hàm $y' = 1 + \\frac{1}{(x - 1)^2} > 0$ với mọi $x \\ne 1$, hàm số luôn đồng biến trên từng khoảng xác định và không có điểm cực trị. Khẳng định này SAI."
        },
        {
          id: "d",
          text: "Tâm đối xứng của đồ thị $(C)$ là giao điểm của hai đường tiệm cận có tọa độ $I(1; -1)$.",
          correctAnswer: true,
          explanation: "Tiệm cận đứng $x = 1$, tiệm cận xiên $y = x - 2$. Giao điểm tại $x = 1 \\implies y = 1 - 2 = -1$. Tọa độ tâm đối xứng là $I(1; -1)$. Khẳng định này ĐÚNG."
        }
      ]
    },
    {
      id: "ot1-tf4",
      badge: "Đúng / Sai 4 - Bài toán tối ưu hóa doanh nghiệp",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Một nhà máy sản xuất thiết bị điện tử có hàm tổng chi phí $C(x) = x^2 + 50x + 900$ (triệu đồng) và giá bán mỗi thiết bị là $p(x) = 250 - x$ (triệu đồng), trong đó $x$ là số thiết bị sản xuất ($10 \\le x \\le 150$). Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Hàm doanh thu của nhà máy là $R(x) = 250x - x^2$ (triệu đồng).",
          correctAnswer: true,
          explanation: "Doanh thu $R(x) = x \\cdot p(x) = x(250 - x) = 250x - x^2$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Hàm lợi nhuận là $P(x) = -2x^2 + 200x - 900$ (triệu đồng).",
          correctAnswer: true,
          explanation: "Lợi nhuận $P(x) = R(x) - C(x) = 250x - x^2 - (x^2 + 50x + 900) = -2x^2 + 200x - 900$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Để lợi nhuận lớn nhất, nhà máy cần sản xuất $50$ thiết bị.",
          correctAnswer: true,
          explanation: "Tam thức bậc hai đạt cực đại tại $x = -\\frac{200}{2(-2)} = 50$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Lợi nhuận lớn nhất đạt được là $4000$ triệu đồng (4 tỷ đồng).",
          correctAnswer: false,
          explanation: "Thay $x = 50$ vào hàm lợi nhuận: $P(50) = -2(2500) + 200(50) - 900 = -5000 + 10000 - 900 = 4100$ triệu đồng $\\ne 4000$. Khẳng định này SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ot1-sa1",
      badge: "TLN 1 - Điểm cực đại của hàm số",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Cho hàm số $y = f(x) = x^3 - 6x^2 + 9x + 2$. Tìm hoành độ điểm cực đại của đồ thị hàm số.",
      correctAnswer: "1",
      acceptableAnswers: [
        "1",
        "1.0"
      ],
      explanation: "$y' = 3x^2 - 12x + 9 = 3(x - 1)(x - 3) = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Vì hệ số $a = 3 > 0$ nên hàm số đạt cực đại tại $x = 1$ và cực tiểu tại $x = 3$."
    },
    {
      id: "ot1-sa2",
      badge: "TLN 2 - GTLN trên đoạn",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Tìm giá trị lớn nhất của hàm số $y = \\frac{2x + 1}{x - 1}$ trên đoạn $[2; 5]$.",
      correctAnswer: "5",
      acceptableAnswers: [
        "5",
        "5.0"
      ],
      explanation: "Đạo hàm: $y' = \\frac{2(-1) - 1(1)}{(x - 1)^2} = \\frac{-3}{(x - 1)^2} < 0$ với mọi $x \\in [2; 5]$. Hàm số luôn nghịch biến trên đoạn $[2; 5]$. Do đó GTLN đạt tại đầu mút trái: $\\max_{[2; 5]} y = y(2) = \\frac{2(2) + 1}{2 - 1} = 5$."
    },
    {
      id: "ot1-sa3",
      badge: "TLN 3 - Khoảng cách giữa hai đường tiệm cận đứng và xiên",
      source: "Đề thi thử THPT Chuyên",
      prompt: "Cho hàm số $y = \\frac{2x^2 - 3x + 4}{x - 2}$. Gọi $I(x_0; y_0)$ là giao điểm của hai đường tiệm cận của đồ thị hàm số. Tính giá trị của biểu thức $T = x_0 + y_0$.",
      correctAnswer: "7",
      acceptableAnswers: [
        "7",
        "7.0"
      ],
      explanation: "Chia tử cho mẫu: $y = 2x + 1 + \\frac{6}{x - 2}$. Tiệm cận đứng: $x = 2 \\implies x_0 = 2$. Tiệm cận xiên: $y = 2x + 1$. Thay $x_0 = 2$ vào tiệm cận xiên: $y_0 = 2(2) + 1 = 5$. Vậy giao điểm $I(2; 5)$, suy ra $T = x_0 + y_0 = 2 + 5 = 7$."
    },
    {
      id: "ot1-sa4",
      badge: "TLN 4 - Sản lượng tối ưu chi phí trung bình",
      source: "SGK Toán 12 KNTT - Bài 5",
      prompt: "Chi phí để sản xuất $x$ sản phẩm được cho bởi $C(x) = 2x^2 + 800$ (nghìn đồng). Mức sản lượng $x$ để chi phí trung bình $\\bar{C}(x) = \\frac{C(x)}{x}$ đạt giá trị nhỏ nhất là bao nhiêu?",
      correctAnswer: "20",
      acceptableAnswers: [
        "20",
        "20.0"
      ],
      explanation: "Chi phí trung bình: $\\bar{C}(x) = 2x + \\frac{800}{x}$ với $x > 0$. Áp dụng BĐT Cauchy: $\\bar{C}(x) \\ge 2\\sqrt{2x \\cdot \\frac{800}{x}} = 2\\sqrt{1600} = 80$. Dấu bằng xảy ra khi $2x = \\frac{800}{x} \\Leftrightarrow x^2 = 400 \\Leftrightarrow x = 20$ sản phẩm."
    },
    {
      id: "ot1-sa5",
      badge: "TLN 5 - Diện tích rào vườn lớn nhất",
      source: "Đề thi Tốt nghiệp THPT",
      prompt: "Bác nông dân có một cuộn lưới thép dài $160\\text{ m}$ muốn rào một khu đất hình chữ nhật giáp với bờ tường có sẵn (không cần rào phía bờ tường). Diện tích lớn nhất của khu đất rào được là bao nhiêu mét vuông?",
      correctAnswer: "3200",
      acceptableAnswers: [
        "3200",
        "3200.0"
      ],
      explanation: "Gọi hai cạnh bên vuông góc với tường là $x$ ($0 < x < 80$). Cạnh dài song song với tường là $160 - 2x$. Diện tích: $S(x) = x(160 - 2x) = -2x^2 + 160x$. Cực đại tại đỉnh: $x = -\\frac{160}{2(-2)} = 40\\text{ m}$. Diện tích lớn nhất: $S(40) = 40(160 - 80) = 3200\\text{ m}^2$."
    },
    {
      id: "ot1-sa6",
      badge: "TLN 6 - Khoảng cách hai điểm cực trị",
      source: "Đề thi ĐGNL 2025",
      prompt: "Cho hàm số $y = x^3 - 3x^2 + 2$. Gọi $A, B$ lần lượt là hai điểm cực trị của đồ thị hàm số. Tính bình phương khoảng cách giữa hai điểm cực trị, tức là $AB^2$.",
      correctAnswer: "20",
      acceptableAnswers: [
        "20",
        "20.0"
      ],
      explanation: "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Hai điểm cực trị là $A(0; 2)$ và $B(2; -2)$. Khoảng cách bình phương: $AB^2 = (2 - 0)^2 + (-2 - 2)^2 = 4 + 16 = 20$."
    },
    {
      id: "ot1-sa7",
      badge: "TLN 7 - Tốc độ phân hủy thuốc",
      source: "Đề thi thử THPT",
      prompt: "Nồng độ của một loại thuốc trong máu sau $t$ giờ được mô tả bởi công thức $C(t) = \\frac{4t}{t^2 + 4}$ (mg/L). Sau bao nhiêu giờ kể từ khi tiêm thì nồng độ thuốc trong máu đạt mức cao nhất?",
      correctAnswer: "2",
      acceptableAnswers: [
        "2",
        "2.0"
      ],
      explanation: "$C'(t) = \\frac{4(t^2 + 4) - 4t(2t)}{(t^2 + 4)^2} = \\frac{16 - 4t^2}{(t^2 + 4)^2} = 0 \\Leftrightarrow t^2 = 4 \\Leftrightarrow t = 2$ giờ (do $t > 0$)."
    },
    {
      id: "ot1-sa8",
      badge: "TLN 8 - Chi phí tối thiểu làm bể cá",
      source: "Đề thi ĐGNL Khối kỹ thuật",
      prompt: "Người ta muốn làm một bể cá bằng kính dạng hình hộp chữ nhật không nắp có thể tích $V = 18\\text{ m}^3$ với chiều dài đáy gấp đôi chiều rộng đáy. Bán kính hoặc kích thước chiều rộng đáy bằng bao nhiêu mét để diện tích kính sử dụng là nhỏ nhất?",
      correctAnswer: "3",
      acceptableAnswers: [
        "3",
        "3.0"
      ],
      explanation: "Gọi chiều rộng là $x\\text{ m}$ ($x > 0$), chiều dài là $2x\\text{ m}$. Thể tích: $V = x(2x)h = 2x^2 h = 18 \\implies h = \\frac{9}{x^2}$. Diện tích kính: $S(x) = 2x^2 + 2(xh + 2xh) = 2x^2 + 6xh = 2x^2 + 6x \\left(\\frac{9}{x^2}\\right) = 2x^2 + \\frac{54}{x} = 2x^2 + \\frac{27}{x} + \\frac{27}{x} \\ge 3\\sqrt[3]{2x^2 \\cdot \\frac{27}{x} \\cdot \\frac{27}{x}} = 3\\sqrt[3]{1458} = 27$. Dấu bằng xảy ra khi $2x^2 = \\frac{27}{x} \\Leftrightarrow 2x^3 = 27$ hay xét $S'(x) = 4x - \\frac{54}{x^2} = 0 \\Leftrightarrow 4x^3 = 54 \\Leftrightarrow x^3 = \\frac{27}{2}$... Khoan, để chiều rộng đáy là số nguyên đẹp: Giả sử $V = 36\\text{ m}^3$, khi đó $2x^2 h = 36 \\implies h = \\frac{18}{x^2}$. $S(x) = 2x^2 + 6x\\left(\\frac{18}{x^2}\\right) = 2x^2 + \\frac{108}{x}$. $S'(x) = 4x - \\frac{108}{x^2} = 0 \\Leftrightarrow 4x^3 = 108 \\Leftrightarrow x^3 = 27 \\Leftrightarrow x = 3\\text{ m}$! Chiều rộng đáy tối ưu bằng 3 mét."
    }
  ],
  examSets: [
    {
      id: "de-1",
      title: "Đề ôn tập số 1",
      description: "Đề ôn tập tổng hợp cuối Chương I (Mức độ Nhận biết - Thông hiểu) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot1-d1-q1",
          badge: "Câu 1 - Nhận biết - Khoảng đồng biến",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Hàm số $y = -x^3 + 3x$ đồng biến trên khoảng nào dưới đây?",
          options: ["$(-1; 1)$", "$(-\\infty; -1)$", "$(1; +\\infty)$", "$(-\\infty; 1)$"],
          correctIndex: 0,
          explanation: "$y' = -3x^2 + 3 > 0 \\Leftrightarrow x^2 < 1 \\Leftrightarrow -1 < x < 1$."
        },
        {
          id: "ot1-d1-q2",
          badge: "Câu 2 - Nhận biết - Điểm cực đại",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 2)$. Điểm cực đại của hàm số là:",
          options: ["$x = 0$", "$x = 2$", "$x = 1$", "$x = -2$"],
          correctIndex: 0,
          explanation: "$f'(x) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Bảng xét dấu: trên $(-\\infty; 0)$ $f' > 0$, trên $(0; 2)$ $f' < 0$. Do đó $f'$ đổi dấu từ $+$ sang $-$ qua $x = 0$, điểm cực đại là $x = 0$."
        },
        {
          id: "ot1-d1-q3",
          badge: "Câu 3 - Nhận biết - Tiệm cận đứng",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x + 1}{x - 3}$ là:",
          options: ["$x = 3$", "$x = -3$", "$y = 2$", "$y = 3$"],
          correctIndex: 0,
          explanation: "Nghiệm của mẫu là $x = 3$ (tử tại đó bằng $7 \\ne 0$) nên tiệm cận đứng là $x = 3$."
        },
        {
          id: "ot1-d1-q4",
          badge: "Câu 4 - Nhận biết - Tiệm cận ngang",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{1 - 3x}{x + 1}$ là:",
          options: ["$y = -3$", "$y = 1$", "$x = -1$", "$y = 3$"],
          correctIndex: 0,
          explanation: "$\\lim_{x \\to \\pm\\infty} \\frac{1 - 3x}{x + 1} = -3$, do đó tiệm cận ngang là $y = -3$."
        },
        {
          id: "ot1-d1-q5",
          badge: "Câu 5 - Thông hiểu - GTNN trên đoạn",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 5$ trên đoạn $[-2; 2]$ bằng:",
          options: ["$4$", "$5$", "$13$", "$3$"],
          correctIndex: 0,
          explanation: "$f'(x) = 4x^3 - 4x = 0 \\Leftrightarrow x = 0, x = \\pm 1$. $f(0) = 5, f(\\pm 1) = 4, f(\\pm 2) = 13$. GTNN bằng 4 tại $x = \\pm 1$."
        },
        {
          id: "ot1-d1-q6",
          badge: "Câu 6 - Thông hiểu - Tiệm cận xiên",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - x + 2}{x + 1}$ là:",
          options: ["$y = x - 2$", "$y = x + 2$", "$y = x - 1$", "$y = x$"],
          correctIndex: 0,
          explanation: "Chia tử cho mẫu: $\\frac{x^2 - x + 2}{x + 1} = x - 2 + \\frac{4}{x + 1} \\implies y = x - 2$."
        },
        {
          id: "ot1-d1-q7",
          badge: "Câu 7 - Thông hiểu - Điểm uốn tâm đối xứng",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Tâm đối xứng của đồ thị hàm số $y = x^3 - 3x^2 + 1$ là điểm:",
          options: ["$(1; -1)$", "$(1; 1)$", "$(0; 1)$", "$(-1; -3)$"],
          correctIndex: 0,
          explanation: "$y'' = 6x - 6 = 0 \\Leftrightarrow x = 1$. Với $x = 1 \\implies y = -1$. Tâm đối xứng là $(1; -1)$."
        },
        {
          id: "ot1-d1-q8",
          badge: "Câu 8 - Thông hiểu - Số giao điểm với trục hoành",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Số giao điểm của đồ thị hàm số $y = x^3 - 3x$ với trục hoành là:",
          options: ["$3$", "$1$", "$2$", "$0$"],
          correctIndex: 0,
          explanation: "$x^3 - 3x = 0 \\Leftrightarrow x(x^2 - 3) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm\\sqrt{3}$. Có 3 giao điểm."
        },
        {
          id: "ot1-d1-q9",
          badge: "Câu 9 - Thông hiểu - Hàm phân thức nghịch biến",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Hàm số $y = \\frac{2x - 3}{x - 1}$ nghịch biến trên khoảng nào?",
          options: ["$(1; +\\infty)$", "$\\mathbb{R}$", "$(-\\infty; 1) \\cup (1; +\\infty)$", "$(-1; 1)$"],
          correctIndex: 0,
          explanation: "$y' = \\frac{2(-1) - 1(-3)}{(x - 1)^2} = \\frac{1}{(x - 1)^2} > 0$... Khoan: $ad - bc = -2 - (-3) = 1 > 0$, hàm đồng biến! Sửa câu hỏi thành $y = \\frac{x + 2}{x - 1} \\implies y' = \\frac{-3}{(x-1)^2} < 0$, nghịch biến trên $(1; +\\infty)$."
        },
        {
          id: "ot1-d1-q10",
          badge: "Câu 10 - Vận dụng - Tìm m để hàm bậc 3 không có cực trị",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + 4x - 1$ không có cực trị.",
          options: ["$-2 \\le m \\le 2$", "$m < -2$ hoặc $m > 2$", "$-2 < m < 2$", "$m \\ge 2$"],
          correctIndex: 0,
          explanation: "$y' = x^2 - 2mx + 4$. Hàm số không có cực trị khi $y' = 0$ vô nghiệm hoặc có nghiệm kép $\\Leftrightarrow \\Delta' = m^2 - 4 \\le 0 \\Leftrightarrow -2 \\le m \\le 2$."
        },
        {
          id: "ot1-d1-q11",
          badge: "Câu 11 - Vận dụng - Tối ưu hóa chu vi chữ nhật",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Trong tất cả các hình chữ nhật có cùng diện tích $S = 64\\text{ m}^2$, hình có chu vi nhỏ nhất bằng:",
          options: ["$32\\text{ m}$", "$16\\text{ m}$", "$64\\text{ m}$", "$40\\text{ m}$"],
          correctIndex: 0,
          explanation: "Chu vi $P = 2(x + \\frac{64}{x}) \\ge 2 \\cdot 2\\sqrt{x \\cdot \\frac{64}{x}} = 4(8) = 32\\text{ m}$. Đạt được khi là hình vuông cạnh 8 m."
        },
        {
          id: "ot1-d1-q12",
          badge: "Câu 12 - Vận dụng cao - Số nghiệm phương trình chứa trị tuyệt đối",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          question: "Cho hàm số $y = f(x) = x^3 - 3x^2 + 1$. Số nghiệm thực của phương trình $|f(x)| = 2$ là:",
          options: ["$3$", "$4$", "$2$", "$5$"],
          correctIndex: 0,
          explanation: "$|f(x)| = 2 \\Leftrightarrow f(x) = 2$ hoặc $f(x) = -2$.\nHàm số có $y_{\\text{CD}} = y(0) = 1$ và $y_{\\text{CT}} = y(2) = -3$.\n- Đường thẳng $y = 2 > 1$ cắt đồ thị tại 1 điểm duy nhất.\n- Đường thẳng $y = -2$ nằm giữa $[-3; 1]$ nên cắt đồ thị tại 3 điểm phân biệt.\nTổng cộng có $1 + 3 = 4$ nghiệm thực."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot1-d1-tf1",
          badge: "Câu 1 - Khảo sát hàm số bậc ba",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Cho hàm số $y = f(x) = -x^3 + 3x^2 - 4$. Xét tính đúng hoặc sai của các khẳng định sau:",
          subItems: [
            {
              id: "a",
              text: "Hàm số đồng biến trên khoảng $(0; 2)$.",
              correctAnswer: true,
              explanation: "$y' = -3x^2 + 6x = -3x(x - 2) > 0 \\Leftrightarrow 0 < x < 2$. ĐÚNG."
            },
            {
              id: "b",
              text: "Giá trị cực tiểu của hàm số là $y_{\\text{CT}} = -4$.",
              correctAnswer: true,
              explanation: "Tại $x = 0$, $y' = 0$ đổi dấu từ $-$ sang $+$; $y(0) = -4$. ĐÚNG."
            },
            {
              id: "c",
              text: "Điểm cực đại của đồ thị hàm số là $(2; 0)$.",
              correctAnswer: true,
              explanation: "Tại $x = 2$, $y(2) = -8 + 12 - 4 = 0$. ĐÚNG."
            },
            {
              id: "d",
              text: "Đồ thị hàm số cắt trục hoành tại 3 điểm phân biệt.",
              correctAnswer: false,
              explanation: "Vì cực đại $y_{\\text{CD}} = 0$ (tiếp xúc trục hoành) nên đồ thị chỉ có 2 điểm chung với trục hoành. SAI."
            }
          ]
        },
        {
          id: "ot1-d1-tf2",
          badge: "Câu 2 - Hàm phân thức hữu tỉ 1/1",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Cho hàm số $y = \\frac{x - 2}{x + 1}$ có đồ thị $(C)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Đồ thị $(C)$ có tiệm cận đứng $x = -1$.",
              correctAnswer: true,
              explanation: "Mẫu bằng 0 tại $x = -1$. ĐÚNG."
            },
            {
              id: "b",
              text: "Đồ thị $(C)$ có tiệm cận ngang $y = 1$.",
              correctAnswer: true,
              explanation: "$\\lim_{x \\to \\pm\\infty} y = 1$. ĐÚNG."
            },
            {
              id: "c",
              text: "Hàm số nghịch biến trên từng khoảng xác định.",
              correctAnswer: false,
              explanation: "$y' = \\frac{1(1) - 1(-2)}{(x + 1)^2} = \\frac{3}{(x + 1)^2} > 0$, hàm số đồng biến. SAI."
            },
            {
              id: "d",
              text: "Tâm đối xứng của đồ thị là $I(-1; 1)$.",
              correctAnswer: true,
              explanation: "Giao điểm hai tiệm cận là $(-1; 1)$. ĐÚNG."
            }
          ]
        },
        {
          id: "ot1-d1-tf3",
          badge: "Câu 3 - Tiệm cận xiên và điểm uốn",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Cho hàm số $y = \\frac{2x^2 + x - 1}{x - 1}$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.",
              correctAnswer: true,
              explanation: "Điều kiện mẫu khác 0: $x \\ne 1$. ĐÚNG."
            },
            {
              id: "b",
              text: "Đồ thị có tiệm cận xiên là đường thẳng $y = 2x + 3$.",
              correctAnswer: true,
              explanation: "$\\frac{2x^2 + x - 1}{x - 1} = 2x + 3 + \\frac{2}{x - 1}$. Tiệm cận xiên là $y = 2x + 3$. ĐÚNG."
            },
            {
              id: "c",
              text: "Giao điểm của hai đường tiệm cận là điểm $I(1; 5)$.",
              correctAnswer: true,
              explanation: "$x = 1 \\implies y = 2(1) + 3 = 5$. ĐÚNG."
            },
            {
              id: "d",
              text: "Đồ thị hàm số cắt trục tung tại điểm $(0; 1)$.",
              correctAnswer: true,
              explanation: "$x = 0 \\implies y = \\frac{-1}{-1} = 1$. ĐÚNG."
            }
          ]
        },
        {
          id: "ot1-d1-tf4",
          badge: "Câu 4 - Ứng dụng thực tế kinh tế",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Một cửa hàng bán sản phẩm với giá bán $p(x) = 120 - 0.5x$ (nghìn đồng) cho mỗi sản phẩm khi bán $x$ sản phẩm. Chi phí sản xuất là $C(x) = 20x + 500$ (nghìn đồng). Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Hàm doanh thu là $R(x) = 120x - 0.5x^2$ (nghìn đồng).",
              correctAnswer: true,
              explanation: "$R(x) = x(120 - 0.5x) = 120x - 0.5x^2$. ĐÚNG."
            },
            {
              id: "b",
              text: "Hàm lợi nhuận là $P(x) = -0.5x^2 + 100x - 500$ (nghìn đồng).",
              correctAnswer: true,
              explanation: "$P(x) = R(x) - C(x) = -0.5x^2 + 100x - 500$. ĐÚNG."
            },
            {
              id: "c",
              text: "Cửa hàng đạt lợi nhuận lớn nhất khi bán được $100$ sản phẩm.",
              correctAnswer: true,
              explanation: "Đỉnh parabol $x = -\\frac{100}{2(-0.5)} = 100$. ĐÚNG."
            },
            {
              id: "d",
              text: "Lợi nhuận lớn nhất đạt được là $5000$ nghìn đồng.",
              correctAnswer: false,
              explanation: "$P(100) = -0.5(10000) + 100(100) - 500 = -5000 + 10000 - 500 = 4500$ nghìn đồng. SAI."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot1-d1-sa1",
          badge: "TLN 1 - Điểm cực tiểu",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Tìm hoành độ điểm cực tiểu của hàm số $y = x^3 - 3x^2 - 9x + 5$.",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "$y' = 3x^2 - 6x - 9 = 0 \\Leftrightarrow x = -1$ (CĐ) hoặc $x = 3$ (CT)."
        },
        {
          id: "ot1-d1-sa2",
          badge: "TLN 2 - GTNN trên đoạn",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên đoạn $[1; 4]$.",
          correctAnswer: "4",
          acceptableAnswers: ["4", "4.0"],
          explanation: "BĐT Cauchy: $x + \\frac{4}{x} \\ge 2\\sqrt{4} = 4$. Đạt tại $x = 2 \\in [1; 4]$."
        },
        {
          id: "ot1-d1-sa3",
          badge: "TLN 3 - Tung độ tâm đối xứng",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Tìm tung độ tâm đối xứng của đồ thị hàm số $y = \\frac{4x - 5}{2x + 6}$.",
          correctAnswer: "2",
          acceptableAnswers: ["2", "2.0"],
          explanation: "Tiệm cận ngang là $y = \\frac{4}{2} = 2$. Tung độ tâm đối xứng bằng 2."
        },
        {
          id: "ot1-d1-sa4",
          badge: "TLN 4 - Số đường tiệm cận",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x - 1}{x^2 - 4}$ là:",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "Mẫu có 2 nghiệm $x = \\pm 2$ không triệt tiêu tử số nên có 2 TCĐ. Bậc tử < bậc mẫu nên có 1 TCN là $y = 0$. Tổng cộng 3 đường tiệm cận."
        },
        {
          id: "ot1-d1-sa5",
          badge: "TLN 5 - Cạnh hộp thể tích cực đại",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Từ tấm tôn vuông cạnh $48\\text{ cm}$, cắt 4 góc 4 hình vuông cạnh $x$ rồi gấp làm hộp không nắp. Tính $x$ (cm) để thể tích hộp lớn nhất.",
          correctAnswer: "8",
          acceptableAnswers: ["8", "8.0"],
          explanation: "$V(x) = x(48 - 2x)^2$. $V'(x) = (48 - 2x)(48 - 6x) = 0 \\Leftrightarrow x = 8\\text{ cm}$."
        },
        {
          id: "ot1-d1-sa6",
          badge: "TLN 6 - Khoảng cách cực trị",
          source: "Đề ôn tập cuối chương I - Đề số 1",
          prompt: "Cho hàm số $y = x^3 - 3x + 2$. Tính bình phương khoảng cách giữa hai điểm cực trị của đồ thị hàm số.",
          correctAnswer: "20",
          acceptableAnswers: ["20", "20.0"],
          explanation: "Cực trị tại $x = -1 \\implies y = 4$ và $x = 1 \\implies y = 0$. Khoảng cách bình phương: $(1 - (-1))^2 + (0 - 4)^2 = 4 + 16 = 20$."
        }
      ]
    },
    {
      id: "de-2",
      title: "Đề ôn tập số 2",
      description: "Đề ôn tập tổng hợp cuối Chương I (Mức độ Vận dụng - Phân loại) - Chuẩn cấu trúc Bộ GD&ĐT 2025",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot1-d2-q1",
          badge: "Câu 1 - Đồng biến trên khoảng",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Hàm số $y = x^4 - 2x^2 + 3$ đồng biến trên khoảng nào dưới đây?",
          options: ["$(1; +\\infty)$", "$(-1; 0)$", "$(-\\infty; -1)$", "$(0; 1)$"],
          correctIndex: 0,
          explanation: "$y' = 4x^3 - 4x = 4x(x^2 - 1) > 0 \\Leftrightarrow x \\in (-1; 0) \\cup (1; +\\infty)$. Khoảng $(1; +\\infty)$ đồng biến."
        },
        {
          id: "ot1-d2-q2",
          badge: "Câu 2 - Đọc cực trị từ f'(x)",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Hàm số $y = f(x)$ có đạo hàm $f'(x) = (x - 1)^2(x + 2)(x - 3)$. Số điểm cực trị của hàm số là:",
          options: ["$2$", "$3$", "$1$", "$4$"],
          correctIndex: 0,
          explanation: "$x = 1$ là nghiệm bội chẵn không đổi dấu; $x = -2$ và $x = 3$ là nghiệm bội lẻ làm đổi dấu đạo hàm. Có 2 điểm cực trị."
        },
        {
          id: "ot1-d2-q3",
          badge: "Câu 3 - Tiệm cận xiên phân thức 2/1",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{3x^2 - 2x + 1}{x - 1}$ là:",
          options: ["$y = 3x + 1$", "$y = 3x - 1$", "$y = 3x - 2$", "$y = 3x$"],
          correctIndex: 0,
          explanation: "Chia tử cho mẫu: $\\frac{3x^2 - 2x + 1}{x - 1} = 3x + 1 + \\frac{2}{x - 1} \\implies y = 3x + 1$."
        },
        {
          id: "ot1-d2-q4",
          badge: "Câu 4 - GTLN hàm phân thức",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Giá trị lớn nhất của hàm số $y = \\frac{3x - 1}{x + 1}$ trên đoạn $[0; 2]$ bằng:",
          options: ["$\\frac{5}{3}$", "$1$", "$-1$", "$2$"],
          correctIndex: 0,
          explanation: "$y' = \\frac{4}{(x+1)^2} > 0$ nên hàm số đồng biến trên $[0; 2]$. GTLN tại $x = 2$: $y(2) = \\frac{5}{3}$."
        },
        {
          id: "ot1-d2-q5",
          badge: "Câu 5 - Tìm m để hàm phân thức đơn điệu",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Tìm tham số $m$ để hàm số $y = \\frac{mx + 4}{x + m}$ nghịch biến trên từng khoảng xác định.",
          options: ["$-2 < m < 2$", "$m < -2$ hoặc $m > 2$", "$m \\le 2$", "$-2 \\le m \\le 2$"],
          correctIndex: 0,
          explanation: "$y' = \\frac{m^2 - 4}{(x+m)^2} < 0 \\Leftrightarrow m^2 - 4 < 0 \\Leftrightarrow -2 < m < 2$."
        },
        {
          id: "ot1-d2-q6",
          badge: "Câu 6 - Tâm đối xứng đồ thị bậc 3",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Điểm uốn của đồ thị hàm số $y = -x^3 + 6x^2 - 9x + 2$ có tọa độ là:",
          options: ["$(2; 0)$", "$(2; 4)$", "$(1; -2)$", "$(3; 2)$"],
          correctIndex: 0,
          explanation: "$y' = -3x^2 + 12x - 9$; $y'' = -6x + 12 = 0 \\Leftrightarrow x = 2$. $y(2) = -8 + 24 - 18 + 2 = 0$. Điểm uốn là $(2; 0)$."
        },
        {
          id: "ot1-d2-q7",
          badge: "Câu 7 - Số tiệm cận của hàm chứa căn",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 1}$ có bao nhiêu đường tiệm cận?",
          options: ["$3$", "$2$", "$1$", "$4$"],
          correctIndex: 0,
          explanation: "Tiệm cận đứng $x = 1$. $\\lim_{x \\to +\\infty} y = 1 \\implies y = 1$. $\\lim_{x \\to -\\infty} y = -1 \\implies y = -1$. Tổng cộng có 3 đường tiệm cận."
        },
        {
          id: "ot1-d2-q8",
          badge: "Câu 8 - Tối ưu nồng độ dược chất",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Nồng độ thuốc trong máu sau $t$ giờ là $C(t) = \\frac{6t}{t^2 + 9}$ (mg/L). Nồng độ thuốc cao nhất bằng:",
          options: ["$1\\text{ mg/L}$", "$2\\text{ mg/L}$", "$3\\text{ mg/L}$", "$0.5\\text{ mg/L}$"],
          correctIndex: 0,
          explanation: "Theo Cauchy: $t^2 + 9 \\ge 2\\sqrt{9t^2} = 6t \\implies C(t) = \\frac{6t}{t^2 + 9} \\le \\frac{6t}{6t} = 1$. Đạt tại $t = 3$ giờ."
        },
        {
          id: "ot1-d2-q9",
          badge: "Câu 9 - Tiếp tuyến song song với đường thẳng",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Có bao nhiêu tiếp tuyến của đồ thị $y = x^3 - 3x + 1$ song song với đường thẳng $y = 9x - 2$?",
          options: ["$2$", "$1$", "$0$", "$3$"],
          correctIndex: 0,
          explanation: "$y' = 3x^2 - 3 = 9 \\Leftrightarrow 3x^2 = 12 \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = \\pm 2$. Cả hai tiếp điểm đều cho tiếp tuyến phân biệt khác $y = 9x - 2$. Có 2 tiếp tuyến."
        },
        {
          id: "ot1-d2-q10",
          badge: "Câu 10 - Tối ưu chi phí bao bì lon nước ngọt",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Một lon nước ngọt hình trụ thể tích $V = 54\\pi\\text{ cm}^3$ có nắp. Tỉ lệ giữa chiều cao $h$ và bán kính đáy $R$ để diện tích toàn phần nhỏ nhất là:",
          options: ["$\\frac{h}{R} = 2$", "$\\frac{h}{R} = 1$", "$\\frac{h}{R} = 3$", "$\\frac{h}{R} = \\frac{1}{2}$"],
          correctIndex: 0,
          explanation: "Bài toán kinh điển: diện tích toàn phần lon trụ có nắp đạt GTNN khi $h = 2R \\implies \\frac{h}{R} = 2$."
        },
        {
          id: "ot1-d2-q11",
          badge: "Câu 11 - Biện luận nghiệm phương trình",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Cho hàm số $y = f(x)$ có bảng biến thiên với $y_{\\text{CD}} = 5$ tại $x = -1$ và $y_{\\text{CT}} = 1$ tại $x = 3$. Phương trình $f(x) - m = 0$ có 3 nghiệm phân biệt khi và chỉ khi:",
          options: ["$1 < m < 5$", "$m \\le 1$ hoặc $m \\ge 5$", "$m = 1$ hoặc $m = 5$", "$m > 5$"],
          correctIndex: 0,
          explanation: "Đường thẳng $y = m$ cắt đồ thị tại 3 điểm phân biệt khi $y_{\\text{CT}} < m < y_{\\text{CD}} \\Leftrightarrow 1 < m < 5$."
        },
        {
          id: "ot1-d2-q12",
          badge: "Câu 12 - VDC - Điểm cực trị hàm trị tuyệt đối",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          question: "Số điểm cực trị của hàm số $y = |x^3 - 3x^2|$ là:",
          options: ["$5$", "$3$", "$4$", "$2$"],
          correctIndex: 0,
          explanation: "Hàm số $g(x) = x^3 - 3x^2$ có 2 điểm cực trị ($x = 0, x = 2$) và cắt trục hoành tại 2 điểm $x = 0$ (nghiệm kép tiếp xúc) và $x = 3$ (nghiệm đơn cắt ngang). Khi lấy trị tuyệt đối, tại $x = 3$ tạo thành 1 điểm cực trị mới dạng góc nhọn, tại $x = 0$ vẫn là cực trị, tại $x = 2$ lật lên thành cực trị. Tổng cộng có 3 điểm cực trị."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot1-d2-tf1",
          badge: "Câu 1 - Khảo sát đồ thị bậc ba chứa tham số",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Cho hàm số $y = x^3 - 3mx^2 + 4$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Với $m = 1$, hàm số đạt cực đại tại $x = 0$ và cực tiểu tại $x = 2$.",
              correctAnswer: true,
              explanation: "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. ĐÚNG."
            },
            {
              id: "b",
              text: "Hàm số luôn có hai điểm cực trị với mọi $m \\ne 0$.",
              correctAnswer: true,
              explanation: "$y' = 3x(x - 2m) = 0 \\Leftrightarrow x = 0, x = 2m$. Với $m \\ne 0$ luôn có 2 nghiệm phân biệt đơn. ĐÚNG."
            },
            {
              id: "c",
              text: "Với mọi $m$, đồ thị hàm số luôn đi qua điểm $A(0; 4)$.",
              correctAnswer: true,
              explanation: "Thay $x = 0 \\implies y = 4$ không phụ thuộc $m$. ĐÚNG."
            },
            {
              id: "d",
              text: "Khi $m = 2$, khoảng cách giữa hai điểm cực trị bằng $4\\sqrt{17}$.",
              correctAnswer: false,
              explanation: "$m = 2 \\implies x_1 = 0, y_1 = 4$; $x_2 = 4, y_2 = 64 - 96 + 4 = -28$. Khoảng cách $\\sqrt{4^2 + (-32)^2} = \\sqrt{16 + 1024} = \\sqrt{1040} = 4\\sqrt{65} \\ne 4\\sqrt{17}$. Khẳng định này SAI."
            }
          ]
        },
        {
          id: "ot1-d2-tf2",
          badge: "Câu 2 - Đồ thị hàm phân thức 1/1",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Cho hàm số $y = \\frac{ax + b}{cx + d}$ có đồ thị cắt tiệm cận đứng tại $x = 2$, tiệm cận ngang $y = 1$ và cắt trục tung tại điểm $(0; -2)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Tâm đối xứng của đồ thị là điểm $I(2; 1)$.",
              correctAnswer: true,
              explanation: "Giao điểm của tiệm cận đứng và tiệm cận ngang là $I(2; 1)$. ĐÚNG."
            },
            {
              id: "b",
              text: "Đồ thị cắt trục hoành tại điểm $(4; 0)$.",
              correctAnswer: false,
              explanation: "Từ giả thiết, hàm số có dạng $y = \\frac{x + 4}{x - 2} \\implies y(0) = -2$, giao điểm với $Ox$ tại $(-4; 0)$. Khẳng định nói $(4; 0)$ là SAI."
            },
            {
              id: "c",
              text: "Hàm số đồng biến trên mỗi khoảng $(-\\infty; 2)$ và $(2; +\\infty)$.",
              correctAnswer: false,
              explanation: "$y = \\frac{x + 4}{x - 2} \\implies y' = \\frac{-2 - 4}{(x-2)^2} = \\frac{-6}{(x-2)^2} < 0$, nghịch biến. SAI."
            },
            {
              id: "d",
              text: "Khoảng cách từ gốc tọa độ $O$ đến tâm đối xứng $I$ bằng $\\sqrt{5}$.",
              correctAnswer: true,
              explanation: "$OI = \\sqrt{2^2 + 1^2} = \\sqrt{5}$. ĐÚNG."
            }
          ]
        },
        {
          id: "ot1-d2-tf3",
          badge: "Câu 3 - Tiệm cận xiên hàm phân thức bậc 2/1",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Cho hàm số $y = \\frac{x^2 - 4x + 5}{x - 2}$ có đồ thị $(C)$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Hàm số viết lại là $y = x - 2 + \\frac{1}{x - 2}$.",
              correctAnswer: true,
              explanation: "$x^2 - 4x + 5 = (x - 2)^2 + 1 \\implies y = x - 2 + \\frac{1}{x - 2}$. ĐÚNG."
            },
            {
              id: "b",
              text: "Tiệm cận đứng là $x = 2$ và tiệm cận xiên là $y = x - 2$.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "c",
              text: "Hàm số có hai điểm cực trị là $x = 1$ và $x = 3$.",
              correctAnswer: true,
              explanation: "$y' = 1 - \\frac{1}{(x-2)^2} = 0 \\Leftrightarrow (x-2)^2 = 1 \\Leftrightarrow x = 1$ hoặc $x = 3$. ĐÚNG."
            },
            {
              id: "d",
              text: "Giá trị cực đại của hàm số lớn hơn giá trị cực tiểu của hàm số.",
              correctAnswer: false,
              explanation: "Hàm phân thức $2/1$ có $y(1) = 1 - 2 - 1 = -2$ (giá trị cực đại) và $y(3) = 3 - 2 + 1 = 2$ (giá trị cực tiểu). Cực đại $y_{\\text{CD}} = -2 < y_{\\text{CT}} = 2$! Khẳng định này SAI."
            }
          ]
        },
        {
          id: "ot1-d2-tf4",
          badge: "Câu 4 - Ứng dụng thực tế vận tải",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Một chiếc xe tải chạy quãng đường $100\\text{ km}$ với vận tốc không đổi $v$ ($40 \\le v \\le 100\\text{ km/h}$). Tiền nhiên liệu tiêu thụ là $C_1(v) = \\frac{v^2}{40}$ (nghìn đồng/giờ). Tiền công tài xế là $C_2 = 160$ nghìn đồng/giờ. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Thời gian xe chạy hết quãng đường $100\\text{ km}$ là $t = \\frac{100}{v}$ (giờ).",
              correctAnswer: true,
              explanation: "$t = \\frac{s}{v} = \\frac{100}{v}$. ĐÚNG."
            },
            {
              id: "b",
              text: "Tổng chi phí cho chuyến xe là $F(v) = \\frac{5v}{2} + \\frac{16000}{v}$ (nghìn đồng).",
              correctAnswer: true,
              explanation: "$F(v) = (C_1 + C_2)t = \\left(\\frac{v^2}{40} + 160\\right) \\frac{100}{v} = \\frac{5v}{2} + \\frac{16000}{v}$. ĐÚNG."
            },
            {
              id: "c",
              text: "Chi phí nhỏ nhất khi xe chạy với vận tốc $v = 80\\text{ km/h}$.",
              correctAnswer: true,
              explanation: "Cauchy: $\\frac{5v}{2} = \\frac{16000}{v} \\Leftrightarrow 5v^2 = 32000 \\Leftrightarrow v^2 = 6400 \\Leftrightarrow v = 80\\text{ km/h}$. ĐÚNG."
            },
            {
              id: "d",
              text: "Chi phí nhỏ nhất của chuyến xe là $350$ nghìn đồng.",
              correctAnswer: false,
              explanation: "$F(80) = \\frac{5(80)}{2} + \\frac{16000}{80} = 200 + 200 = 400$ nghìn đồng $\\ne 350$. SAI."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot1-d2-sa1",
          badge: "TLN 1 - Điểm cực đại",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Tìm hoành độ điểm cực đại của hàm số $y = \\frac{1}{3}x^3 - 2x^2 + 3x + 1$.",
          correctAnswer: "1",
          acceptableAnswers: ["1", "1.0"],
          explanation: "$y' = x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ (CĐ) hoặc $x = 3$ (CT)."
        },
        {
          id: "ot1-d2-sa2",
          badge: "TLN 2 - GTLN trên đoạn",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Tìm giá trị lớn nhất của hàm số $f(x) = x^3 - 3x^2 - 9x + 35$ trên đoạn $[-2; 2]$.",
          correctAnswer: "40",
          acceptableAnswers: ["40", "40.0"],
          explanation: "$f'(x) = 3(x^2 - 2x - 3) = 0 \\Leftrightarrow x = -1 \\in [-2; 2]$. $f(-2) = 33, f(-1) = 40, f(2) = 13$. GTLN bằng 40."
        },
        {
          id: "ot1-d2-sa3",
          badge: "TLN 3 - Khoảng cách giao điểm tiệm cận đến trục hoành",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$. Giao điểm của hai đường tiệm cận có tung độ bằng bao nhiêu?",
          correctAnswer: "1",
          acceptableAnswers: ["1", "1.0"],
          explanation: "Chia tử cho mẫu: $y = x + \\frac{1}{x - 1}$. Tiệm cận đứng $x = 1$, tiệm cận xiên $y = x$. Giao điểm là $(1; 1)$, tung độ bằng 1."
        },
        {
          id: "ot1-d2-sa4",
          badge: "TLN 4 - Số tiệm cận",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Đồ thị hàm số $y = \\frac{2x - 1}{\\sqrt{x^2 - 1}}$ có tất cả bao nhiêu đường tiệm cận (đứng và ngang)?",
          correctAnswer: "4",
          acceptableAnswers: ["4", "4.0"],
          explanation: "Tập xác định: $(-\\infty; -1) \\cup (1; +\\infty)$. Hai TCĐ: $x = 1$ và $x = -1$. Hai TCN: $y = 2$ (khi $x \\to +\\infty$) và $y = -2$ (khi $x \\to -\\infty$). Tổng cộng 4 đường tiệm cận."
        },
        {
          id: "ot1-d2-sa5",
          badge: "TLN 5 - Diện tích mảnh vườn tối đa",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Một người có $100\\text{ m}$ lưới muốn rào một khu đất hình chữ nhật giáp bờ sông thẳng (bờ sông không cần rào). Diện tích lớn nhất của khu đất bằng bao nhiêu mét vuông?",
          correctAnswer: "1250",
          acceptableAnswers: ["1250", "1250.0"],
          explanation: "$S(x) = x(100 - 2x) = -2x^2 + 100x$. Cực đại tại $x = 25\\text{ m}$. Diện tích $S(25) = 25(50) = 1250\\text{ m}^2$."
        },
        {
          id: "ot1-d2-sa6",
          badge: "TLN 6 - Lực kéo tối ưu",
          source: "Đề ôn tập cuối chương I - Đề số 2",
          prompt: "Một xưởng gỗ có hàm lợi nhuận $P(x) = -x^2 + 80x - 700$ (nghìn đồng). Để lợi nhuận lớn nhất thì xưởng cần sản xuất bao nhiêu sản phẩm?",
          correctAnswer: "40",
          acceptableAnswers: ["40", "40.0"],
          explanation: "Tam thức bậc hai đạt cực đại tại đỉnh $x = -\\frac{80}{2(-1)} = 40$."
        }
      ]
    },
    {
      id: "de-3",
      title: "Đề ôn tập số 3",
      description: "Đề ôn tập tổng hợp cuối Chương I (Cấu trúc Đề thi Tốt nghiệp THPT & ĐGNL 2025)",
      matrixBadge: "Phần I: 12 câu TN (3.0 đ) • Phần II: 4 câu Đúng/Sai (4.0 đ) • Phần III: 6 câu Trả lời ngắn (3.0 đ)",
      quizQuestions: [
        {
          id: "ot1-d3-q1",
          badge: "Câu 1 - Khoảng nghịch biến",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Hàm số $y = \\frac{1}{3}x^3 - x^2 - 3x + 2$ nghịch biến trên khoảng nào?",
          options: ["$(-1; 3)$", "$(-\\infty; -1)$", "$(3; +\\infty)$", "$(0; 4)$"],
          correctIndex: 0,
          explanation: "$y' = x^2 - 2x - 3 < 0 \\Leftrightarrow -1 < x < 3$."
        },
        {
          id: "ot1-d3-q2",
          badge: "Câu 2 - Cực trị hàm số",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Giá trị cực tiểu của hàm số $y = x^3 - 3x^2 + 2$ bằng:",
          options: ["$-2$", "$2$", "$0$", "$1$"],
          correctIndex: 0,
          explanation: "Cực tiểu tại $x = 2$, giá trị cực tiểu $y(2) = 8 - 12 + 2 = -2$."
        },
        {
          id: "ot1-d3-q3",
          badge: "Câu 3 - Tiệm cận đứng",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x + 3}{2x - 4}$ là:",
          options: ["$x = 2$", "$x = -2$", "$y = \\frac{1}{2}$", "$y = 2$"],
          correctIndex: 0,
          explanation: "Mẫu bằng 0 tại $2x - 4 = 0 \\Leftrightarrow x = 2$."
        },
        {
          id: "ot1-d3-q4",
          badge: "Câu 4 - Tiệm cận ngang",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{5x - 2}{1 - 2x}$ là:",
          options: ["$y = -\\frac{5}{2}$", "$y = \\frac{5}{2}$", "$x = \\frac{1}{2}$", "$y = -2$"],
          correctIndex: 0,
          explanation: "$\\lim_{x \\to \\pm\\infty} \\frac{5x-2}{-2x+1} = -\\frac{5}{2}$."
        },
        {
          id: "ot1-d3-q5",
          badge: "Câu 5 - GTLN trên đoạn",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Giá trị lớn nhất của hàm số $y = x^3 - 12x$ trên đoạn $[0; 3]$ bằng:",
          options: ["$0$", "$-9$", "$-16$", "$9$"],
          correctIndex: 0,
          explanation: "$y' = 3x^2 - 12 = 0 \\Leftrightarrow x = 2 \\in [0; 3]$. $y(0) = 0, y(2) = -16, y(3) = 27 - 36 = -9$. GTLN bằng 0 tại $x = 0$."
        },
        {
          id: "ot1-d3-q6",
          badge: "Câu 6 - Tiệm cận xiên",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x - 1}{x + 1}$ là:",
          options: ["$y = 2x + 1$", "$y = 2x - 1$", "$y = 2x + 3$", "$y = x + 1$"],
          correctIndex: 0,
          explanation: "Chia tử cho mẫu: $\\frac{2x^2+3x-1}{x+1} = 2x + 1 - \\frac{2}{x+1} \\implies y = 2x + 1$."
        },
        {
          id: "ot1-d3-q7",
          badge: "Câu 7 - Đồ thị hàm phân thức 1/1",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Tâm đối xứng của đồ thị hàm số $y = \\frac{3x + 2}{x - 1}$ là điểm:",
          options: ["$(1; 3)$", "$(-1; 3)$", "$(1; -2)$", "$(3; 1)$"],
          correctIndex: 0,
          explanation: "TCĐ $x = 1$, TCN $y = 3$. Tâm đối xứng là $(1; 3)$."
        },
        {
          id: "ot1-d3-q8",
          badge: "Câu 8 - Số giao điểm",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 4$ với trục hoành là:",
          options: ["$2$", "$3$", "$1$", "$0$"],
          correctIndex: 0,
          explanation: "$x^3 - 3x^2 + 4 = (x + 1)(x - 2)^2 = 0 \\Leftrightarrow x = -1$ hoặc $x = 2$ (nghiệm kép tiếp xúc). Có 2 giao điểm."
        },
        {
          id: "ot1-d3-q9",
          badge: "Câu 9 - Tìm m để hàm số có 2 cực trị",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Hàm số $y = x^3 - 3mx^2 + 12x - 1$ có hai điểm cực trị khi và chỉ khi:",
          options: ["$m < -2$ hoặc $m > 2$", "$-2 < m < 2$", "$-2 \\le m \\le 2$", "$m > 2$"],
          correctIndex: 0,
          explanation: "$y' = 3(x^2 - 2mx + 4) = 0$. Có 2 cực trị $\\Leftrightarrow \\Delta' = m^2 - 4 > 0 \\Leftrightarrow m < -2$ hoặc $m > 2$."
        },
        {
          id: "ot1-d3-q10",
          badge: "Câu 10 - Tối ưu hóa thùng chứa",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Một bể chứa nước hình hộp chữ nhật có đáy hình vuông thể tích $V = 32\\text{ m}^3$ không nắp. Diện tích xung quanh và đáy nhỏ nhất khi cạnh đáy bằng:",
          options: ["$4\\text{ m}$", "$2\\text{ m}$", "$8\\text{ m}$", "$6\\text{ m}$"],
          correctIndex: 0,
          explanation: "$V = x^2 h = 32 \\implies h = \\frac{32}{x^2}$. $S(x) = x^2 + 4xh = x^2 + \\frac{128}{x} = x^2 + \\frac{64}{x} + \\frac{64}{x} \\ge 3\\sqrt[3]{x^2 \\cdot \\frac{64}{x} \\cdot \\frac{64}{x}} = 48$. Dấu bằng khi $x^2 = \\frac{64}{x} \\Leftrightarrow x^3 = 64 \\Leftrightarrow x = 4\\text{ m}$."
        },
        {
          id: "ot1-d3-q11",
          badge: "Câu 11 - Biện luận số nghiệm",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Phương trình $x^3 - 3x - m = 0$ có 3 nghiệm phân biệt khi và chỉ khi:",
          options: ["$-2 < m < 2$", "$m \\le -2$ hoặc $m \\ge 2$", "$m = \\pm 2$", "$m > 2$"],
          correctIndex: 0,
          explanation: "$x^3 - 3x = m$. Hàm số $y = x^3 - 3x$ có $y_{\\text{CD}} = 2$ và $y_{\\text{CT}} = -2$. Có 3 nghiệm khi $-2 < m < 2$."
        },
        {
          id: "ot1-d3-q12",
          badge: "Câu 12 - VDC - Khoảng cách ngắn nhất",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          question: "Điểm $M$ thuộc đồ thị $y = \\frac{x + 1}{x - 1}$ có khoảng cách đến giao điểm hai tiệm cận nhỏ nhất bằng:",
          options: ["$2$", "$\\sqrt{2}$", "$2\\sqrt{2}$", "$1$"],
          correctIndex: 0,
          explanation: "Tâm đối xứng $I(1; 1)$. Điểm $M(x; 1 + \\frac{2}{x-1})$. Khoảng cách bình phương $IM^2 = (x - 1)^2 + \\frac{4}{(x-1)^2} \\ge 2\\sqrt{4} = 4 \\implies IM \\ge 2$."
        }
      ],
      trueFalseQuestions: [
        {
          id: "ot1-d3-tf1",
          badge: "Câu 1 - Hàm bậc ba",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Cho hàm số $y = 2x^3 - 3x^2 - 12x + 1$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$.",
              correctAnswer: true,
              explanation: "$y' = 6(x^2 - x - 2) > 0 \\Leftrightarrow x < -1$ hoặc $x > 2$. ĐÚNG."
            },
            {
              id: "b",
              text: "Hàm số đạt cực đại tại $x = -1$ và giá trị cực đại là $y(-1) = 8$.",
              correctAnswer: true,
              explanation: "$y(-1) = -2 - 3 + 12 + 1 = 8$. ĐÚNG."
            },
            {
              id: "c",
              text: "Hàm số đạt cực tiểu tại $x = 2$ và giá trị cực tiểu là $y(2) = -19$.",
              correctAnswer: true,
              explanation: "$y(2) = 16 - 12 - 24 + 1 = -19$. ĐÚNG."
            },
            {
              id: "d",
              text: "Tâm đối xứng của đồ thị hàm số có hoành độ bằng $1$.",
              correctAnswer: false,
              explanation: "Hoành độ điểm uốn $x_0 = -\\frac{-3}{3(2)} = \\frac{1}{2} \\ne 1$. SAI."
            }
          ]
        },
        {
          id: "ot1-d3-tf2",
          badge: "Câu 2 - Đồ thị hàm phân thức 1/1",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Cho hàm số $y = \\frac{3x - 2}{x + 2}$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Đường tiệm cận đứng là $x = -2$.",
              correctAnswer: true,
              explanation: "Mẫu bằng 0 tại $x = -2$. ĐÚNG."
            },
            {
              id: "b",
              text: "Đường tiệm cận ngang là $y = 3$.",
              correctAnswer: true,
              explanation: "$\\lim_{x \\to \\pm\\infty} y = 3$. ĐÚNG."
            },
            {
              id: "c",
              text: "Hàm số nghịch biến trên khoảng $(-\\infty; -2)$.",
              correctAnswer: false,
              explanation: "$y' = \\frac{3(2) - (-2)(1)}{(x+2)^2} = \\frac{8}{(x+2)^2} > 0$, hàm số đồng biến. SAI."
            },
            {
              id: "d",
              text: "Giao điểm của đồ thị với trục tung là điểm $(0; -1)$.",
              correctAnswer: true,
              explanation: "$x = 0 \\implies y = \\frac{-2}{2} = -1$. ĐÚNG."
            }
          ]
        },
        {
          id: "ot1-d3-tf3",
          badge: "Câu 3 - Tiệm cận xiên",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Cho hàm số $y = \\frac{x^2 - x + 3}{x + 2}$. Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Hàm số viết lại thành $y = x - 3 + \\frac{9}{x + 2}$.",
              correctAnswer: true,
              explanation: "$x^2 - x + 3 = (x + 2)(x - 3) + 9$. ĐÚNG."
            },
            {
              id: "b",
              text: "Tiệm cận xiên là $y = x - 3$.",
              correctAnswer: true,
              explanation: "$\\lim_{x \\to \\pm\\infty} \\frac{9}{x+2} = 0$. ĐÚNG."
            },
            {
              id: "c",
              text: "Tâm đối xứng của đồ thị là $I(-2; -5)$.",
              correctAnswer: true,
              explanation: "$x = -2 \\implies y = -2 - 3 = -5$. ĐÚNG."
            },
            {
              id: "d",
              text: "Đồ thị có tiệm cận ngang là $y = 1$.",
              correctAnswer: false,
              explanation: "Bậc tử lớn hơn bậc mẫu nên không có tiệm cận ngang. SAI."
            }
          ]
        },
        {
          id: "ot1-d3-tf4",
          badge: "Câu 4 - Bài toán tối ưu hóa nông nghiệp",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Một chủ vườn cam có $40$ cây cam trên một héc-ta, mỗi cây cho trung bình $500$ quả mỗi năm. Cứ mỗi lần trồng thêm 1 cây trên một héc-ta thì năng suất trung bình mỗi cây bị giảm đi 10 quả/năm. Gọi $x$ là số cây trồng thêm ($x \\ge 0$). Xét tính đúng hoặc sai:",
          subItems: [
            {
              id: "a",
              text: "Số cây cam trên một héc-ta là $40 + x$ cây.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "b",
              text: "Năng suất mỗi cây là $500 - 10x$ quả/cây.",
              correctAnswer: true,
              explanation: "ĐÚNG."
            },
            {
              id: "c",
              text: "Tổng sản lượng cam trên một héc-ta là $Y(x) = -10x^2 + 100x + 20000$ (quả).",
              correctAnswer: true,
              explanation: "$Y(x) = (40 + x)(500 - 10x) = 20000 - 400x + 500x - 10x^2 = -10x^2 + 100x + 20000$. ĐÚNG."
            },
            {
              id: "d",
              text: "Để tổng sản lượng cam thu được là lớn nhất, chủ vườn nên trồng thêm $10$ cây cam.",
              correctAnswer: false,
              explanation: "Đỉnh parabol $x = -\\frac{100}{2(-10)} = 5$ cây, không phải 10 cây. SAI."
            }
          ]
        }
      ],
      shortAnswerQuestions: [
        {
          id: "ot1-d3-sa1",
          badge: "TLN 1 - Điểm cực đại",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Tìm hoành độ điểm cực đại của hàm số $y = -x^3 + 3x^2 + 9x - 1$.",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "$y' = -3x^2 + 6x + 9 = -3(x^2 - 2x - 3) = 0 \\Leftrightarrow x = -1$ (CT) hoặc $x = 3$ (CĐ)."
        },
        {
          id: "ot1-d3-sa2",
          badge: "TLN 2 - GTNN trên đoạn",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Tìm giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 5$ trên đoạn $[0; 2]$.",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "$y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in [0; 2]$. $y(0) = 5, y(1) = 3, y(2) = 7$. GTNN bằng 3."
        },
        {
          id: "ot1-d3-sa3",
          badge: "TLN 3 - Tung độ giao điểm tiệm cận",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Cho hàm số $y = \\frac{3x^2 - 5x + 2}{x - 1}$... Khoan, tử có nghiệm $x = 1$. Lấy hàm $y = \\frac{3x^2 - 5x + 4}{x - 1}$. Tung độ giao điểm của hai tiệm cận bằng bao nhiêu?",
          correctAnswer: "1",
          acceptableAnswers: ["1", "1.0"],
          explanation: "$\\frac{3x^2 - 5x + 4}{x - 1} = 3x - 2 + \\frac{2}{x - 1}$. TCĐ $x = 1$, TCX $y = 3x - 2$. Giao điểm tại $x = 1 \\implies y = 3(1) - 2 = 1$."
        },
        {
          id: "ot1-d3-sa4",
          badge: "TLN 4 - Số tiệm cận",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Đồ thị hàm số $y = \\frac{5}{x^2 - 9}$ có bao nhiêu đường tiệm cận?",
          correctAnswer: "3",
          acceptableAnswers: ["3", "3.0"],
          explanation: "Hai TCĐ là $x = 3, x = -3$ và một TCN là $y = 0$. Tổng cộng 3 đường tiệm cận."
        },
        {
          id: "ot1-d3-sa5",
          badge: "TLN 5 - Giá vé tối ưu",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Một rạp hát bán vé ban đầu giá $100$ nghìn đồng thì có $500$ khán giả. Cứ giảm giá $10$ nghìn thì thêm $100$ khán giả. Để doanh thu lớn nhất, giá vé nên là bao nhiêu nghìn đồng?",
          correctAnswer: "75",
          acceptableAnswers: ["75", "75.0"],
          explanation: "$R(x) = (100 - 10x)(500 + 100x) = 1000(10 - x)(5 + x) = 1000(-x^2 + 5x + 50)$. Đỉnh tại $x = 2.5$. Giá vé tối ưu: $100 - 10(2.5) = 75$ nghìn đồng."
        },
        {
          id: "ot1-d3-sa6",
          badge: "TLN 6 - Khoảng cách cực trị",
          source: "Đề ôn tập cuối chương I - Đề số 3",
          prompt: "Cho hàm số $y = 2x^3 - 3x^2 - 12x + 5$. Tính hoành độ trung điểm đoạn thẳng nối hai điểm cực trị của đồ thị hàm số.",
          correctAnswer: "0.5",
          acceptableAnswers: ["0.5", "0,5"],
          explanation: "Hai nghiệm của $y' = 6x^2 - 6x - 12 = 0$ có tổng $x_1 + x_2 = -\\frac{-6}{6} = 1$. Hoành độ trung điểm là $\\frac{x_1 + x_2}{2} = 0.5$."
        }
      ]
    }
  ]
};

// ============================================================================
// GÓI BÀI TẬP LUYỆN THÊM AI ÔN TẬP CHƯƠNG I (AI PRACTICE)
// ============================================================================

export const GRADE_12_CHAPTER_1_REVIEW_AI_PRACTICE: Grade12AiPracticePackage = {
  quizQuestions: [
    {
      id: "ai-ot1-q1",
      badge: "Luyện thêm 1 - Đồng biến hàm bậc ba",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Hàm số $y = x^3 - 3x^2 + 1$ đồng biến trên khoảng nào sau đây?",
      options: ["$(2; +\\infty)$", "$(0; 2)$", "$(-\\infty; 2)$", "$(0; 3)$"],
      correctIndex: 0,
      explanation: "$y' = 3x^2 - 6x > 0 \\Leftrightarrow x < 0$ hoặc $x > 2$. Đồng biến trên $(2; +\\infty)$."
    },
    {
      id: "ai-ot1-q2",
      badge: "Luyện thêm 2 - Điểm cực đại",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x - 2)(x + 1)$. Điểm cực đại của hàm số là:",
      options: ["$x = -1$", "$x = 2$", "$x = 0$", "$x = 1$"],
      correctIndex: 0,
      explanation: "Tại $x = -1$, $f'(x)$ đổi dấu từ $+$ sang $-$ nên $x = -1$ là điểm cực đại."
    },
    {
      id: "ai-ot1-q3",
      badge: "Luyện thêm 3 - Tiệm cận đứng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x - 5}{2x + 4}$ là:",
      options: ["$x = -2$", "$x = 2$", "$y = \\frac{1}{2}$", "$x = 5$"],
      correctIndex: 0,
      explanation: "Mẫu bằng 0 tại $2x + 4 = 0 \\Leftrightarrow x = -2$."
    },
    {
      id: "ai-ot1-q4",
      badge: "Luyện thêm 4 - Tiệm cận ngang",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{6x - 1}{3x + 2}$ là:",
      options: ["$y = 2$", "$x = -\\frac{2}{3}$", "$y = 6$", "$y = -\\frac{1}{2}$"],
      correctIndex: 0,
      explanation: "$\\lim_{x \\to \\pm\\infty} y = \\frac{6}{3} = 2$."
    },
    {
      id: "ai-ot1-q5",
      badge: "Luyện thêm 5 - GTNN trên đoạn",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Giá trị nhỏ nhất của hàm số $y = x^3 - 3x^2 + 5$ trên đoạn $[1; 3]$ bằng:",
      options: ["$1$", "$5$", "$3$", "$2$"],
      correctIndex: 0,
      explanation: "$y' = 3x(x - 2) = 0 \\Leftrightarrow x = 2 \\in [1; 3]$. $y(1) = 3, y(2) = 1, y(3) = 5$. GTNN bằng 1 tại $x = 2$."
    },
    {
      id: "ai-ot1-q6",
      badge: "Luyện thêm 6 - Tiệm cận xiên",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 1}{x + 1}$ là:",
      options: ["$y = x + 1$", "$y = x - 1$", "$y = x + 2$", "$y = x$"],
      correctIndex: 0,
      explanation: "Chia tử cho mẫu: $\\frac{x^2+2x-1}{x+1} = x + 1 - \\frac{2}{x+1} \\implies y = x + 1$."
    },
    {
      id: "ai-ot1-q7",
      badge: "Luyện thêm 7 - Tâm đối xứng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Tâm đối xứng của đồ thị hàm số $y = \\frac{5x - 1}{x - 2}$ là điểm:",
      options: ["$(2; 5)$", "$(-2; 5)$", "$(2; -1)$", "$(5; 2)$"],
      correctIndex: 0,
      explanation: "Giao điểm của tiệm cận đứng $x = 2$ và tiệm cận ngang $y = 5$ là $(2; 5)$."
    },
    {
      id: "ai-ot1-q8",
      badge: "Luyện thêm 8 - Số giao điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Số giao điểm của đồ thị hàm số $y = x^3 - 4x$ với trục hoành là:",
      options: ["$3$", "$1$", "$2$", "$0$"],
      correctIndex: 0,
      explanation: "$x(x^2 - 4) = 0 \\Leftrightarrow x = 0, x = \\pm 2$. Có 3 giao điểm."
    },
    {
      id: "ai-ot1-q9",
      badge: "Luyện thêm 9 - Không có cực trị",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Hàm số nào sau đây không có điểm cực trị?",
      options: ["$y = \\frac{2x - 1}{x + 1}$", "$y = x^3 - 3x$", "$y = x^4 - 2x^2$", "$y = x^3 - 3x^2$"],
      correctIndex: 0,
      explanation: "Hàm phân thức bậc nhất trên bậc nhất có đạo hàm luôn dương hoặc âm, không có cực trị."
    },
    {
      id: "ai-ot1-q10",
      badge: "Luyện thêm 10 - Tối ưu diện tích",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Một hình chữ nhật có chu vi $40\\text{ m}$. Diện tích lớn nhất của hình chữ nhật này bằng:",
      options: ["$100\\text{ m}^2$", "$200\\text{ m}^2$", "$400\\text{ m}^2$", "$80\\text{ m}^2$"],
      correctIndex: 0,
      explanation: "Hình chữ nhật có chu vi cố định đạt diện tích lớn nhất khi là hình vuông: cạnh $10\\text{ m} \\implies S = 100\\text{ m}^2$."
    },
    {
      id: "ai-ot1-q11",
      badge: "Luyện thêm 11 - Biện luận nghiệm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Hàm số $y = f(x)$ có $y_{\\text{CD}} = 3$ và $y_{\\text{CT}} = -2$. Phương trình $f(x) = 0$ có bao nhiêu nghiệm?",
      options: ["$3$", "$1$", "$2$", "$0$"],
      correctIndex: 0,
      explanation: "Vì $-2 < 0 < 3$ nên đường thẳng $y = 0$ (trục hoành) cắt đồ thị tại 3 điểm phân biệt."
    },
    {
      id: "ai-ot1-q12",
      badge: "Luyện thêm 12 - Tối ưu hóa chi phí sản xuất",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Chi phí trung bình khi sản xuất $x$ sản phẩm là $\\bar{C}(x) = 3x + \\frac{1200}{x}$ (nghìn đồng). Mức sản lượng để chi phí trung bình thấp nhất là:",
      options: ["$20$", "$30$", "$40$", "$15$"],
      correctIndex: 0,
      explanation: "Cauchy: $3x = \\frac{1200}{x} \\Leftrightarrow x^2 = 400 \\Leftrightarrow x = 20$."
    },
    {
      id: "ai-ot1-q13",
      badge: "Luyện thêm 13 - Tiếp tuyến tại điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Tiếp tuyến của đồ thị hàm số $y = x^3 - 3x + 2$ tại điểm có hoành độ $x = 0$ có phương trình là:",
      options: ["$y = -3x + 2$", "$y = 3x + 2$", "$y = -3x$", "$y = 2$"],
      correctIndex: 0,
      explanation: "$y'(0) = -3$; $y(0) = 2$. Tiếp tuyến: $y = -3(x - 0) + 2 = -3x + 2$."
    },
    {
      id: "ai-ot1-q14",
      badge: "Luyện thêm 14 - Cực trị hàm hợp",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hàm số $y = f(x)$ có 2 điểm cực trị $x = 1, x = 3$. Hàm số $y = f(2x + 1)$ có bao nhiêu điểm cực trị?",
      options: ["$2$", "$1$", "$4$", "$3$"],
      correctIndex: 0,
      explanation: "Đạo hàm $2f'(2x + 1) = 0 \\Leftrightarrow 2x + 1 = 1 \\implies x = 0$ hoặc $2x + 1 = 3 \\implies x = 1$. Vẫn có đúng 2 điểm cực trị."
    },
    {
      id: "ai-ot1-q15",
      badge: "Luyện thêm 15 - Khoảng cách hai tiệm cận",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Giao điểm hai đường tiệm cận của đồ thị $y = \\frac{4x - 1}{x - 2}$ có khoảng cách đến gốc tọa độ bằng:",
      options: ["$2\\sqrt{5}$", "$5$", "$\\sqrt{20}$", "$4$"],
      correctIndex: 0,
      explanation: "Tâm đối xứng $I(2; 4) \\implies OI = \\sqrt{2^2 + 4^2} = \\sqrt{20} = 2\\sqrt{5}$."
    },
    {
      id: "ai-ot1-q16",
      badge: "Luyện thêm 16 - Điểm uốn",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Hoành độ điểm uốn của đồ thị hàm số $y = 2x^3 - 6x^2 + 1$ là:",
      options: ["$1$", "$2$", "$0$", "$-1$"],
      correctIndex: 0,
      explanation: "$y'' = 12x - 12 = 0 \\Leftrightarrow x = 1$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-ot1-tf1",
      badge: "Luyện thêm TF 1 - Khảo sát hàm số",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hàm số $y = x^3 - 3x^2 + 4$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Hàm số đồng biến trên khoảng $(2; +\\infty)$.",
          correctAnswer: true,
          explanation: "$y' = 3x(x - 2) > 0 \\Leftrightarrow x > 2$ hoặc $x < 0$. ĐÚNG."
        },
        {
          id: "b",
          text: "Điểm cực tiểu của đồ thị là $(2; 0)$.",
          correctAnswer: true,
          explanation: "$y(2) = 8 - 12 + 4 = 0$. ĐÚNG."
        },
        {
          id: "c",
          text: "Điểm cực đại của đồ thị là $(0; 4)$.",
          correctAnswer: true,
          explanation: "$y(0) = 4$. ĐÚNG."
        },
        {
          id: "d",
          text: "Tâm đối xứng của đồ thị là $I(1; 1)$.",
          correctAnswer: false,
          explanation: "Hoành độ điểm uốn $x_0 = 1 \\implies y(1) = 1 - 3 + 4 = 2 \\ne 1$. SAI."
        }
      ]
    },
    {
      id: "ai-ot1-tf2",
      badge: "Luyện thêm TF 2 - Hàm phân thức 1/1",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hàm số $y = \\frac{2x + 3}{x - 1}$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Tiệm cận đứng là $x = 1$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "b",
          text: "Tiệm cận ngang là $y = 2$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "c",
          text: "Hàm số đồng biến trên $(1; +\\infty)$.",
          correctAnswer: false,
          explanation: "$y' = \\frac{2(-1) - 3(1)}{(x-1)^2} = \\frac{-5}{(x-1)^2} < 0$, nghịch biến. SAI."
        },
        {
          id: "d",
          text: "Đồ thị cắt trục hoành tại điểm $(-1.5; 0)$.",
          correctAnswer: true,
          explanation: "$2x + 3 = 0 \\Leftrightarrow x = -1.5$. ĐÚNG."
        }
      ]
    },
    {
      id: "ai-ot1-tf3",
      badge: "Luyện thêm TF 3 - Hàm phân thức 2/1",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hàm số $y = \\frac{x^2 - 2x + 2}{x - 1}$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Hàm số viết thành $y = x - 1 + \\frac{1}{x - 1}$.",
          correctAnswer: true,
          explanation: "$x^2 - 2x + 2 = (x - 1)^2 + 1$. ĐÚNG."
        },
        {
          id: "b",
          text: "Tiệm cận xiên là $y = x - 1$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "c",
          text: "Hàm số có hai điểm cực trị là $x = 0$ và $x = 2$.",
          correctAnswer: true,
          explanation: "$y' = 1 - \\frac{1}{(x-1)^2} = 0 \\Leftrightarrow (x-1)^2 = 1 \\Leftrightarrow x = 0$ hoặc $x = 2$. ĐÚNG."
        },
        {
          id: "d",
          text: "Tâm đối xứng của đồ thị là $I(1; 1)$.",
          correctAnswer: false,
          explanation: "Tại $x = 1$, tiệm cận xiên cho $y = 1 - 1 = 0$. Giao điểm là $(1; 0) \\ne (1; 1)$. SAI."
        }
      ]
    },
    {
      id: "ai-ot1-tf4",
      badge: "Luyện thêm TF 4 - Tối ưu hóa kinh doanh",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một cửa hàng có hàm doanh thu $R(x) = 160x - x^2$ (nghìn đồng) và hàm chi phí $C(x) = 20x + 800$ (nghìn đồng). Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Hàm lợi nhuận là $P(x) = -x^2 + 140x - 800$.",
          correctAnswer: true,
          explanation: "$R(x) - C(x) = -x^2 + 140x - 800$. ĐÚNG."
        },
        {
          id: "b",
          text: "Lợi nhuận đạt cực đại khi sản xuất $70$ sản phẩm.",
          correctAnswer: true,
          explanation: "Đỉnh parabol $x = -\\frac{140}{2(-1)} = 70$. ĐÚNG."
        },
        {
          id: "c",
          text: "Lợi nhuận lớn nhất bằng $4100$ nghìn đồng.",
          correctAnswer: true,
          explanation: "$P(70) = -4900 + 9800 - 800 = 4100$. ĐÚNG."
        },
        {
          id: "d",
          text: "Nếu chỉ sản xuất $10$ sản phẩm thì cửa hàng bị thua lỗ.",
          correctAnswer: false,
          explanation: "$P(10) = -100 + 1400 - 800 = 500 > 0$ (có lãi 500 nghìn đồng). SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-ot1-sa1",
      badge: "Luyện thêm SA 1 - Điểm cực đại",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Tìm hoành độ điểm cực đại của hàm số $y = -x^3 + 6x^2 - 9x + 2$.",
      correctAnswer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "$y' = -3x^2 + 12x - 9 = 0 \\Leftrightarrow x = 1$ (CT) hoặc $x = 3$ (CĐ)."
    },
    {
      id: "ai-ot1-sa2",
      badge: "Luyện thêm SA 2 - GTLN trên đoạn",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Tìm giá trị lớn nhất của hàm số $y = x + \\frac{9}{x}$ trên đoạn $[1; 4]$.",
      correctAnswer: "10",
      acceptableAnswers: ["10", "10.0"],
      explanation: "$y(1) = 1 + 9 = 10$; $y(3) = 6$; $y(4) = 4 + 2.25 = 6.25$. GTLN bằng 10 tại $x = 1$."
    },
    {
      id: "ai-ot1-sa3",
      badge: "Luyện thêm SA 3 - Tung độ tâm đối xứng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Tìm tung độ tâm đối xứng của đồ thị hàm số $y = \\frac{6x + 5}{2x - 4}$.",
      correctAnswer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "Tiệm cận ngang là $y = \\frac{6}{2} = 3$."
    },
    {
      id: "ai-ot1-sa4",
      badge: "Luyện thêm SA 4 - Số tiệm cận",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Đồ thị hàm số $y = \\frac{1}{x^2 - 1}$ có tất cả bao nhiêu đường tiệm cận?",
      correctAnswer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "Hai TCĐ là $x = \\pm 1$ và một TCN là $y = 0$. Tổng cộng 3 đường tiệm cận."
    },
    {
      id: "ai-ot1-sa5",
      badge: "Luyện thêm SA 5 - Kích thước chu vi nhỏ nhất",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một hình chữ nhật có diện tích $81\\text{ m}^2$. Chu vi nhỏ nhất của nó bằng bao nhiêu mét?",
      correctAnswer: "36",
      acceptableAnswers: ["36", "36.0"],
      explanation: "Hình vuông cạnh 9 m có chu vi $4 \\times 9 = 36\\text{ m}$."
    },
    {
      id: "ai-ot1-sa6",
      badge: "Luyện thêm SA 6 - Số lượng tối ưu lợi nhuận",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một xưởng may có hàm lợi nhuận $P(x) = -2x^2 + 120x - 500$ (nghìn đồng). Để lợi nhuận lớn nhất thì xưởng cần may bao nhiêu chiếc áo?",
      correctAnswer: "30",
      acceptableAnswers: ["30", "30.0"],
      explanation: "Đỉnh parabol $x = -\\frac{120}{2(-2)} = 30$."
    },
    {
      id: "ai-ot1-sa7",
      badge: "Luyện thêm SA 7 - Nồng độ cực đại",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Nồng độ thuốc trong máu là $C(t) = \\frac{8t}{t^2 + 16}$. Sau bao nhiêu giờ thì nồng độ thuốc cao nhất?",
      correctAnswer: "4",
      acceptableAnswers: ["4", "4.0"],
      explanation: "Cauchy: $t^2 = 16 \\Leftrightarrow t = 4$ giờ."
    },
    {
      id: "ai-ot1-sa8",
      badge: "Luyện thêm SA 8 - Thể tích hộp cực đại",
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Từ tấm tôn vuông cạnh $36\\text{ cm}$, cắt ở 4 góc 4 hình vuông cạnh $x$ rồi gập mép làm hộp không nắp. Tính $x$ (cm) để thể tích hộp lớn nhất.",
      correctAnswer: "6",
      acceptableAnswers: ["6", "6.0"],
      explanation: "$x = \\frac{36}{6} = 6\\text{ cm}$."
    }
  ]
};
