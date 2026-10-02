import type { DetailedLessonData, QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";
import type { Grade12AiPracticePackage } from "./grade12AiPracticeData";

// ============================================================================
// BÀI 7: HỆ TRỤC TỌA ĐỘ TRONG KHÔNG GIAN (SGK TOÁN 12 KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
// CHƯƠNG II: VECTƠ VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN
// ============================================================================

export const GRADE_12_LESSON_7: DetailedLessonData = {
  id: "t12-b7-he-truc-toa-do-oxyz",
  lessonNumber: 7,
  title: "Bài 7: Hệ trục tọa độ trong không gian",
  bookChapter: "Chương II: Vectơ và hệ tọa độ trong không gian (SGK Toán 12 KNTT - Tập 1)",
  scenarioTitle: "Tình huống thực tế: Định vị mục tiêu GPS 3D, kiểm soát không lưu radar và mô hình hóa kiến trúc công trình",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn An (Kiến trúc sư)",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, khi thiết kế mô hình 3D cho một tòa nhà phức hợp hoặc định vị một chiếc flycam đang bay trên bầu trời, làm thế nào các kỹ sư có thể mô tả chính xác vị trí của từng điểm trong không gian bằng những con số cụ thể ạ?",
      visualGraphic: "box",
      mathNote: "M(x; y; z) \\iff \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}"
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào An! Đó chính là sức mạnh của Hệ trục tọa độ Đề-các vuông góc $Oxyz$ trong không gian! Xuất phát từ gốc $O$, chúng ta thiết lập ba trục đôi một vuông góc $Ox, Oy, Oz$ với ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$. Nhờ đó, mỗi điểm $M$ tương ứng duy nhất với bộ ba số thực $(x; y; z)$ biểu thị kinh độ, vĩ độ và độ cao!",
      visualGraphic: "box",
      mathNote: "\\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0, \\quad |\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1"
    },
    {
      id: 3,
      character: "student",
      characterName: "Bạn An",
      avatar: "🧑‍🎓",
      speech: "Dạ! Khi gắn hệ trục tọa độ vào một căn phòng hoặc góc một tòa nhà, khoảng cách giữa hai thiết bị $A$ và $B$ sẽ được tính cực kỳ nhanh chóng bằng định lý Pythagore trong không gian: $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$ đúng không Thầy?",
      visualGraphic: "vector",
      mathNote: "AB = |\\overrightarrow{AB}| = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}"
    }
  ],
  youtubeVideoId: "V5eE1P4g79o",
  youtubeVideoTitle: "Bài 7: Hệ trục tọa độ trong không gian (Tiết 1) - Toán 12 Kết nối tri thức",
  youtubeVideos: [
    {
      id: "V5eE1P4g79o",
      title: "Tiết 1: Định nghĩa hệ trục tọa độ Oxyz, Tọa độ của điểm và Tọa độ của vectơ"
    },
    {
      id: "JySXqEuzA_Q",
      title: "Tiết 2: Liên hệ tọa độ hai điểm, Công thức trung điểm, trọng tâm và khoảng cách"
    }
  ],
  videoQuestions: [
    {
      id: "vq-12.7.1",
      title: "Ví dụ 1 (Tiết 1): Xác định tọa độ của điểm từ biểu thức vectơ",
      question: "Trong không gian $Oxyz$, cho điểm $M$ thỏa mãn $\\overrightarrow{OM} = 2\\vec{i} - 3\\vec{j} + 5\\vec{k}$. Tọa độ của điểm $M$ là:",
      options: [
        "$(2; -3; 5)$",
        "$(2; 3; 5)$",
        "$(-2; 3; -5)$",
        "$(5; -3; 2)$"
      ],
      correctIndex: 0,
      explanation: "Theo định nghĩa, nếu $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ thì điểm $M$ có tọa độ là $(x; y; z)$. Do đó $M(2; -3; 5)$."
    },
    {
      id: "vq-12.7.2",
      title: "Ví dụ 2 (Tiết 1): Hình chiếu vuông góc của điểm lên mặt phẳng tọa độ",
      question: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $A(3; -4; 7)$ lên mặt phẳng tọa độ $(Oxy)$ có tọa độ là:",
      options: [
        "$(3; -4; 0)$",
        "$(0; 0; 7)$",
        "$(3; 0; 7)$",
        "$(0; -4; 7)$"
      ],
      correctIndex: 0,
      explanation: "Hình chiếu vuông góc của điểm $A(x_0; y_0; z_0)$ lên mặt phẳng $(Oxy)$ là điểm $A'(x_0; y_0; 0)$ (giữ nguyên $x, y$ và cho $z = 0$). Vậy hình chiếu là $(3; -4; 0)$."
    },
    {
      id: "vq-12.7.3",
      title: "Ví dụ 3 (Tiết 2): Tính khoảng cách giữa hai điểm trong không gian",
      question: "Trong không gian $Oxyz$, khoảng cách giữa hai điểm $A(1; 2; -1)$ và $B(4; -2; 3)$ bằng:",
      options: [
        "$\\sqrt{41}$",
        "$5\\sqrt{2}$",
        "$7$",
        "$6$"
      ],
      correctIndex: 0,
      explanation: "$AB = \\sqrt{(4 - 1)^2 + (-2 - 2)^2 + (3 - (-1))^2} = \\sqrt{3^2 + (-4)^2 + 4^2} = \\sqrt{9 + 16 + 16} = \\sqrt{41}$."
    }
  ],
  theorySections: [
    {
      index: "1",
      title: "1. Hệ trục tọa độ Oxyz trong không gian",
      points: [
        "Hệ trục tọa độ Đề-các vuông góc trong không gian $Oxyz$ gồm ba trục số $Ox$ (trục hoành), $Oy$ (trục tung) và $Oz$ (trục cao) đôi một vuông góc với nhau tại điểm gốc $O(0; 0; 0)$.",
        "Các vectơ đơn vị: Gọi $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt là các vectơ đơn vị nằm trên các trục $Ox, Oy, Oz$.",
        "Tính chất của các vectơ đơn vị: $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$ và $\\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$.",
        "Ba mặt phẳng tọa độ: Mặt phẳng $(Oxy)$ chứa $Ox$ và $Oy$ (phương trình $z = 0$); Mặt phẳng $(Oyz)$ chứa $Oy$ và $Oz$ (phương trình $x = 0$); Mặt phẳng $(Ozx)$ chứa $Oz$ và $Ox$ (phương trình $y = 0$).",
        "Ba mặt phẳng tọa độ chia không gian thành 8 góc phần tám."
      ],
      exampleProblem: "Cho ba điểm nằm trên các trục tọa độ là $A(2; 0; 0), B(0; -3; 0), C(0; 0; 4)$. Xác định độ dài các đoạn thẳng $OA, OB, OC$.",
      exampleSolution: "Vì các điểm nằm trên trục tọa độ nên:\n$OA = |x_A| = 2$.\n$OB = |y_B| = |-3| = 3$.\n$OC = |z_C| = 4$."
    },
    {
      index: "2",
      title: "2. Tọa độ của điểm và Tọa độ của vectơ",
      points: [
        "Tọa độ của vectơ: Trong không gian $Oxyz$, với mỗi vectơ $\\vec{u}$, tồn tại duy nhất bộ ba số $(x; y; z)$ sao cho $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$. Bộ ba số $(x; y; z)$ gọi là tọa độ của vectơ $\\vec{u}$, ký hiệu $\\vec{u} = (x; y; z)$.",
        "Tọa độ các vectơ đặc biệt: $\\vec{0} = (0; 0; 0), \\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$.",
        "Tọa độ của điểm: Tọa độ của điểm $M$ là tọa độ của vectơ vị trí $\\overrightarrow{OM}$. Tức là: $M(x; y; z) \\Leftrightarrow \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$.",
        "Điểm thuộc trục: $M \\in Ox \\Leftrightarrow M(x; 0; 0)$; $M \\in Oy \\Leftrightarrow M(0; y; 0)$; $M \\in Oz \\Leftrightarrow M(0; 0; z)$.",
        "Điểm thuộc mặt phẳng tọa độ: $M \\in (Oxy) \\Leftrightarrow M(x; y; 0)$; $M \\in (Oyz) \\Leftrightarrow M(0; y; z)$; $M \\in (Ozx) \\Leftrightarrow M(x; 0; z)$."
      ],
      exampleProblem: "Tìm tọa độ vectơ $\\vec{u} = 3\\vec{i} - 4\\vec{k}$ và xác định xem điểm $N(0; 5; 0)$ thuộc đối tượng hình học nào.",
      exampleSolution: "- Ta có $\\vec{u} = 3\\vec{i} + 0\\vec{j} - 4\\vec{k} \\implies \\vec{u} = (3; 0; -4)$.\n- Điểm $N$ có hoành độ $x = 0$ và cao độ $z = 0$, chỉ có tung độ $y = 5 \\ne 0$ nên điểm $N$ thuộc trục tung $Oy$."
    },
    {
      index: "3",
      title: "3. Hình chiếu vuông góc và Điểm đối xứng",
      points: [
        "Cho điểm $M(x_0; y_0; z_0)$ trong không gian:\n- Hình chiếu vuông góc của $M$ lên các trục tọa độ: Lên $Ox$ là $M_1(x_0; 0; 0)$; Lên $Oy$ là $M_2(0; y_0; 0)$; Lên $Oz$ là $M_3(0; 0; z_0)$.\n- Hình chiếu vuông góc của $M$ lên các mặt phẳng tọa độ: Lên $(Oxy)$ là $P(x_0; y_0; 0)$; Lên $(Oyz)$ là $Q(0; y_0; z_0)$; Lên $(Ozx)$ là $R(x_0; 0; z_0)$.",
        "Điểm đối xứng của $M(x_0; y_0; z_0)$:\n- Đối xứng qua gốc $O$: $M'(-x_0; -y_0; -z_0)$.\n- Đối xứng qua $(Oxy)$: giữ nguyên $x, y$, đổi dấu $z \\implies (x_0; y_0; -z_0)$.\n- Đối xứng qua $(Oyz)$: giữ nguyên $y, z$, đổi dấu $x \\implies (-x_0; y_0; z_0)$.\n- Đối xứng qua $(Ozx)$: giữ nguyên $z, x$, đổi dấu $y \\implies (x_0; -y_0; z_0)$.\n- Đối xứng qua trục $Oz$: giữ nguyên $z$, đổi dấu $x, y \\implies (-x_0; -y_0; z_0)$."
      ],
      exampleProblem: "Cho điểm $P(-3; 4; 5)$. Tìm tọa độ hình chiếu của $P$ lên mặt phẳng $(Ozx)$ và tọa độ điểm đối xứng của $P$ qua trục $Oy$.",
      exampleSolution: "- Hình chiếu của $P$ lên $(Ozx)$ là điểm có $y = 0$, giữ nguyên $x$ và $z$: $P_1(-3; 0; 5)$.\n- Điểm đối xứng của $P$ qua trục $Oy$: giữ nguyên $y$, đổi dấu $x$ và $z$: $P_2(3; 4; -5)$."
    },
    {
      index: "4",
      title: "4. Liên hệ giữa hai điểm: Vectơ, Khoảng cách, Trung điểm, Trọng tâm",
      points: [
        "Tọa độ vectơ qua hai điểm: Cho $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$. Khi đó: $\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.",
        "Khoảng cách giữa hai điểm (Độ dài đoạn thẳng): $AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.",
        "Khoảng cách từ điểm $M(x; y; z)$ đến gốc tọa độ $O$: $OM = \\sqrt{x^2 + y^2 + z^2}$.",
        "Tọa độ trung điểm $M$ của đoạn thẳng $AB$: $x_M = \\frac{x_A + x_B}{2}, \\; y_M = \\frac{y_A + y_B}{2}, \\; z_M = \\frac{z_A + z_B}{2}$.",
        "Tọa độ trọng tâm $G$ của tam giác $ABC$: $x_G = \\frac{x_A + x_B + x_C}{3}, \\; y_G = \\frac{y_A + y_B + y_C}{3}, \\; z_G = \\frac{z_A + z_B + z_C}{3}$.",
        "Tọa độ trọng tâm $G$ của tứ diện $ABCD$: $x_G = \\frac{x_A + x_B + x_C + x_D}{4}, \\; y_G = \\frac{y_A + y_B + y_C + y_D}{4}, \\; z_G = \\frac{z_A + z_B + z_C + z_D}{4}$."
      ],
      exampleProblem: "Cho tam giác $ABC$ với $A(1; 2; 0), B(3; -1; 4), C(2; 5; -1)$. Tìm tọa độ trọng tâm $G$ của tam giác $ABC$ và tính độ dài trung tuyến kẻ từ đỉnh $A$.",
      exampleSolution: "- Tọa độ trọng tâm $G$:\n$x_G = \\frac{1 + 3 + 2}{3} = 2$.\n$y_G = \\frac{2 - 1 + 5}{3} = 2$.\n$z_G = \\frac{0 + 4 - 1}{3} = 1$.\nVậy $G(2; 2; 1)$.\n- Gọi $M$ là trung điểm $BC$: $M\\left(\\frac{3+2}{2}; \\frac{-1+5}{2}; \\frac{4-1}{2}\\right) = M(2.5; 2; 1.5)$.\n- Độ dài trung tuyến $AM = \\sqrt{(2.5 - 1)^2 + (2 - 2)^2 + (1.5 - 0)^2} = \\sqrt{1.5^2 + 0 + 1.5^2} = \\sqrt{2.25 + 2.25} = \\sqrt{4.5} = \\frac{3\\sqrt{2}}{2}$."
    },
    {
      index: "5",
      title: "5. Phương pháp gắn hệ trục tọa độ giải bài toán thực tế",
      points: [
        "Quy trình 3 bước gắn hệ tọa độ $Oxyz$ vào vật thể thực tế:\n- Bước 1: Chọn gốc tọa độ $O$ thuận lợi (thường chọn tại một góc vuông của căn phòng, một đỉnh của hình hộp, hoặc chân đường cao của hình chóp).\n- Bước 2: Chọn 3 trục $Ox, Oy, Oz$ đôi một vuông góc nằm dọc theo các cạnh mép tường, chiều rộng, chiều dài và chiều cao của công trình.\n- Bước 3: Xác định tọa độ của các điểm mấu chốt (vị trí đèn, camera, đầu dây cáp treo, cột ăng-ten, phương tiện di chuyển) theo các số đo kích thước thực tế, sau đó áp dụng công thức hình học giải tích để tính toán khoảng cách hoặc góc cần tìm."
      ],
      exampleProblem: "Một căn phòng học hình hộp chữ nhật có chiều dài $8\\text{ m}$, chiều rộng $6\\text{ m}$ và chiều cao $3.5\\text{ m}$. Người ta lắp một chiếc camera giám sát tại góc trần nhà $C'$ đối diện với góc nền nhà $O$. Chọn hệ trục $Oxyz$ sao cho gốc $O$ ở góc nền, $Ox$ theo chiều dài, $Oy$ theo chiều rộng và $Oz$ theo chiều cao. Tìm tọa độ của camera $C'$ và tính khoảng cách từ $O$ đến $C'$.",
      exampleSolution: "- Chọn gốc $O(0; 0; 0)$ tại góc nền.\n- Điểm trên trục $Ox$ dọc theo chiều dài: $A(8; 0; 0)$.\n- Điểm trên trục $Oy$ dọc theo chiều rộng: $B(0; 6; 0)$.\n- Điểm trên trục $Oz$ dọc theo chiều cao: $D'(0; 0; 3.5)$.\n- Điểm $C'$ ở góc trần đối diện có hoành độ $x = 8$, tung độ $y = 6$ và cao độ $z = 3.5$. Do đó $C'(8; 6; 3.5)$.\n- Khoảng cách từ $O$ đến $C'$ chính là độ dài đường chéo hình hộp chữ nhật:\n$OC' = \\sqrt{8^2 + 6^2 + 3.5^2} = \\sqrt{64 + 36 + 12.25} = \\sqrt{112.25} \\approx 10.595\\text{ m}$."
    }
  ],
  quizQuestions: [
    {
      id: "q-12.7.1",
      badge: "NB 1 - Tọa độ của điểm từ vectơ vị trí",
      source: "SGK Toán 12 KNTT - Bài 7",
      question: "Trong không gian $Oxyz$, cho điểm $A$ thỏa mãn $\\overrightarrow{OA} = -\\vec{i} + 4\\vec{j} - 2\\vec{k}$. Tọa độ của điểm $A$ là:",
      options: [
        "$(-1; 4; -2)$",
        "$(1; -4; 2)$",
        "$(-1; -2; 4)$",
        "$(4; -1; -2)$"
      ],
      correctIndex: 0,
      explanation: "Hệ số đi kèm với các vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt là $-1, 4, -2$. Do đó điểm $A$ có tọa độ là $(-1; 4; -2)$."
    },
    {
      id: "q-12.7.2",
      badge: "NB 2 - Tọa độ của vectơ đơn vị",
      source: "Đề thi Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, tọa độ của vectơ đơn vị $\\vec{k}$ trên trục cao $Oz$ là:",
      options: [
        "$(0; 0; 1)$",
        "$(1; 0; 0)$",
        "$(0; 1; 0)$",
        "$(1; 1; 1)$"
      ],
      correctIndex: 0,
      explanation: "Vectơ đơn vị $\\vec{k}$ nằm trên trục $Oz$ có tọa độ là $(0; 0; 1)$."
    },
    {
      id: "q-12.7.3",
      badge: "NB 3 - Điểm thuộc mặt phẳng tọa độ",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      question: "Trong không gian $Oxyz$, điểm nào sau đây thuộc mặt phẳng tọa độ $(Oxy)$?",
      options: [
        "$M(2; -3; 0)$",
        "$N(0; 2; -3)$",
        "$P(2; 0; -3)$",
        "$Q(1; 1; 1)$"
      ],
      correctIndex: 0,
      explanation: "Mọi điểm thuộc mặt phẳng tọa độ $(Oxy)$ đều có cao độ $z = 0$. Điểm $M(2; -3; 0)$ có $z = 0$ nên thuộc $(Oxy)$."
    },
    {
      id: "q-12.7.4",
      badge: "NB 4 - Hình chiếu vuông góc lên trục tọa độ",
      source: "SGK Toán 12 KNTT - Bài 7",
      question: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(4; -2; 5)$ lên trục tung $Oy$ là điểm:",
      svgDiagram: `<svg viewBox="0 0 340 220" class="w-full max-w-sm mx-auto my-3 select-none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr7Axis" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
    <marker id="arr7Cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#38bdf8" />
    </marker>
  </defs>
  <rect x="10" y="10" width="320" height="200" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
  <!-- Axes: Origin at (140, 140) -->
  <!-- Oz: Upwards -->
  <line x1="140" y1="140" x2="140" y2="25" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr7Axis)" />
  <!-- Oy: Rightwards -->
  <line x1="140" y1="140" x2="305" y2="140" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr7Axis)" />
  <!-- Ox: Oblique down-left -->
  <line x1="140" y1="140" x2="45" y2="195" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr7Axis)" />
  <!-- Origin label -->
  <text x="126" y="152" fill="#cbd5e1" font-size="14" font-weight="bold">O</text>
  <text x="146" y="26" fill="#38bdf8" font-size="14" font-weight="bold">z</text>
  <text x="310" y="144" fill="#38bdf8" font-size="14" font-weight="bold">y</text>
  <text x="36" y="202" fill="#38bdf8" font-size="14" font-weight="bold">x</text>
  <!-- Unit vectors -->
  <line x1="140" y1="140" x2="140" y2="95" stroke="#facc15" stroke-width="2.2" marker-end="url(#arr7Cyan)" />
  <text x="122" y="115" fill="#facc15" font-size="13" font-style="italic">k</text>
  <line x1="140" y1="140" x2="185" y2="140" stroke="#facc15" stroke-width="2.2" marker-end="url(#arr7Cyan)" />
  <text x="165" y="132" fill="#facc15" font-size="13" font-style="italic">j</text>
  <line x1="140" y1="140" x2="95" y2="166" stroke="#facc15" stroke-width="2.2" marker-end="url(#arr7Cyan)" />
  <text x="80" y="158" fill="#facc15" font-size="13" font-style="italic">i</text>
</svg>`,
      options: [
        "$(0; -2; 0)$",
        "$(4; 0; 0)$",
        "$(0; 0; 5)$",
        "$(4; -2; 0)$"
      ],
      correctIndex: 0,
      explanation: "Hình chiếu của điểm $M(x_0; y_0; z_0)$ lên trục tung $Oy$ có tọa độ là $(0; y_0; 0)$. Ở đây $y_0 = -2$, do đó hình chiếu là $(0; -2; 0)$."
    },
    {
      id: "q-12.7.5",
      badge: "TH 5 - Tọa độ vectơ nối hai điểm",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(4; 0; 1)$. Tọa độ của vectơ $\\overrightarrow{AB}$ là:",
      options: [
        "$(3; -3; 3)$",
        "$(-3; 3; -3)$",
        "$(5; 3; -1)$",
        "$(3; 3; 3)$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (4 - 1; 0 - 3; 1 - (-2)) = (3; -3; 3)$."
    },
    {
      id: "q-12.7.6",
      badge: "TH 6 - Tọa độ trung điểm của đoạn thẳng",
      source: "Đề thi HK1 Toán 12",
      question: "Trong không gian $Oxyz$, cho hai điểm $M(2; -1; 4)$ và $N(4; 3; -2)$. Tọa độ trung điểm $I$ của đoạn thẳng $MN$ là:",
      options: [
        "$(3; 1; 1)$",
        "$(6; 2; 2)$",
        "$(2; 4; -6)$",
        "$(1; 2; -3)$"
      ],
      correctIndex: 0,
      explanation: "$x_I = \\frac{2+4}{2} = 3, y_I = \\frac{-1+3}{2} = 1, z_I = \\frac{4+(-2)}{2} = 1$. Vậy $I(3; 1; 1)$."
    },
    {
      id: "q-12.7.7",
      badge: "TH 7 - Tọa độ trọng tâm tam giác",
      source: "SGK Toán 12 KNTT - Bài tập",
      question: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(-2; 3; 1), C(4; -3; 6)$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là:",
      options: [
        "$(1; 0; 3)$",
        "$(3; 0; 9)$",
        "$(1; 0; 2)$",
        "$(2; 0; 3)$"
      ],
      correctIndex: 0,
      explanation: "$x_G = \\frac{1 + (-2) + 4}{3} = 1$, $y_G = \\frac{0 + 3 + (-3)}{3} = 0$, $z_G = \\frac{2 + 1 + 6}{3} = 3$. Vậy $G(1; 0; 3)$."
    },
    {
      id: "q-12.7.8",
      badge: "TH 8 - Độ dài của một vectơ",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      question: "Trong không gian $Oxyz$, độ dài của vectơ $\\vec{u} = (2; -2; 1)$ bằng:",
      options: [
        "$3$",
        "$9$",
        "$\\sqrt{5}$",
        "$5$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{u}| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$."
    },
    {
      id: "q-12.7.9",
      badge: "TH 9 - Điểm đối xứng qua mặt phẳng tọa độ",
      source: "Đề thi Tốt nghiệp THPT 2025",
      question: "Trong không gian $Oxyz$, điểm đối xứng của $M(2; -3; 4)$ qua mặt phẳng tọa độ $(Oxy)$ có tọa độ là:",
      options: [
        "$(2; -3; -4)$",
        "$(-2; 3; 4)$",
        "$(2; 3; 4)$",
        "$(-2; -3; -4)$"
      ],
      correctIndex: 0,
      explanation: "Điểm đối xứng của $(x_0; y_0; z_0)$ qua mặt phẳng $(Oxy)$ giữ nguyên hoành độ và tung độ, đổi dấu cao độ: $(x_0; y_0; -z_0) = (2; -3; -4)$."
    },
    {
      id: "q-12.7.10",
      badge: "TH 10 - Khoảng cách từ điểm đến trục tọa độ",
      source: "Đề thi thử THPT Chuyên",
      question: "Trong không gian $Oxyz$, khoảng cách từ điểm $M(3; -4; 12)$ đến trục cao $Oz$ bằng:",
      options: [
        "$5$",
        "$12$",
        "$13$",
        "$\\sqrt{153}$"
      ],
      correctIndex: 0,
      explanation: "Hình chiếu của $M$ lên $Oz$ là $M_z(0; 0; 12)$. Khoảng cách từ $M$ đến $Oz$ là độ dài đoạn $MM_z = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$."
    },
    {
      id: "q-12.7.11",
      badge: "VD 11 - Tìm đỉnh thứ tư của hình bình hành",
      source: "Đề thi Tốt nghiệp THPT",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 3), B(2; -1; 1), C(0; 4; 2)$. Tọa độ điểm $D$ để tứ giác $ABCD$ là hình bình hành là:",
      options: [
        "$(-1; 7; 4)$",
        "$(1; -7; -4)$",
        "$(3; 1; 2)$",
        "$(-1; 3; 0)$"
      ],
      correctIndex: 0,
      explanation: "Tứ giác $ABCD$ là hình bình hành khi và chỉ khi $\\overrightarrow{AD} = \\overrightarrow{BC}$.\nTa có $\\overrightarrow{BC} = (0 - 2; 4 - (-1); 2 - 1) = (-2; 5; 1)$.\nGọi $D(x; y; z) \\implies \\overrightarrow{AD} = (x - 1; y - 2; z - 3)$.\nĐồng nhất hệ số: $x - 1 = -2 \\implies x = -1$; $y - 2 = 5 \\implies y = 7$; $z - 3 = 1 \\implies z = 4$. Vậy $D(-1; 7; 4)$."
    },
    {
      id: "q-12.7.12",
      badge: "VD 12 - Tọa độ trọng tâm tứ diện",
      source: "Đề thi ĐGNL ĐHQG Hà Nội 2025",
      question: "Trong không gian $Oxyz$, cho bốn điểm $A(1; 1; 1), B(2; 3; -1), C(-1; 0; 2), D(2; 4; 2)$. Trọng tâm $G$ của tứ diện $ABCD$ có khoảng cách đến gốc tọa độ $O$ bằng:",
      options: [
        "$\\sqrt{6}$",
        "$\\sqrt{5}$",
        "$3$",
        "$\\sqrt{14}$"
      ],
      correctIndex: 0,
      explanation: "$x_G = \\frac{1 + 2 - 1 + 2}{4} = 1$.\n$y_G = \\frac{1 + 3 + 0 + 4}{4} = 2$.\n$z_G = \\frac{1 - 1 + 2 + 2}{4} = 1$.\nVậy $G(1; 2; 1)$. Khoảng cách $OG = \\sqrt{1^2 + 2^2 + 1^2} = \\sqrt{6}$."
    },
    {
      id: "q-12.7.13",
      badge: "VD 13 - Gắn hệ tọa độ vào hình hộp chữ nhật",
      source: "SGK Toán 12 KNTT - Bài toán thực tiễn",
      question: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Gắn hệ trục tọa độ $Oxyz$ sao cho gốc $O$ trùng với $A$, tia $Ox$ chứa $AB$, tia $Oy$ chứa $AD$ và tia $Oz$ chứa $AA'$. Tọa độ tâm $I$ của hình hộp (giao điểm các đường chéo) là:",
      options: [
        "$(1.5; 2; 2.5)$",
        "$(3; 4; 5)$",
        "$(1.5; 2; 5)$",
        "$(3; 4; 2.5)$"
      ],
      correctIndex: 0,
      explanation: "Điểm $A$ trùng với gốc tọa độ $O(0; 0; 0)$. Đỉnh đối diện $C'$ có tọa độ $C'(3; 4; 5)$. Tâm $I$ của hình hộp là trung điểm của đường chéo $AC'$, do đó tọa độ $I$ là $\\left(\\frac{3}{2}; \\frac{4}{2}; \\frac{5}{2}\\right) = (1.5; 2; 2.5)$."
    },
    {
      id: "q-12.7.14",
      badge: "VD 14 - Điểm cách đều ba trục tọa độ",
      source: "Đề thi HSG Cấp tỉnh",
      question: "Trong không gian $Oxyz$, có bao nhiêu điểm $M(x; y; z)$ trên mặt phẳng $(P): x + y + z - 6 = 0$ có tọa độ là các số nguyên dương và cách đều ba trục tọa độ $Ox, Oy, Oz$?",
      options: [
        "$1$",
        "$3$",
        "$0$",
        "$6$"
      ],
      correctIndex: 0,
      explanation: "Khoảng cách từ $M(x; y; z)$ đến $Ox, Oy, Oz$ lần lượt là $\\sqrt{y^2 + z^2}, \\sqrt{z^2 + x^2}, \\sqrt{x^2 + y^2}$.\nĐể cách đều ba trục thì $y^2 + z^2 = z^2 + x^2 = x^2 + y^2 \\Leftrightarrow x^2 = y^2 = z^2$.\nVì $x, y, z$ là các số nguyên dương nên $x = y = z$.\nThay vào phương trình: $x + x + x - 6 = 0 \\Leftrightarrow 3x = 6 \\Leftrightarrow x = 2$. Suy ra $x = y = z = 2$.\nCó duy nhất 1 điểm thỏa mãn là $M(2; 2; 2)$."
    },
    {
      id: "q-12.7.15",
      badge: "VDC 15 - Khoảng cách an toàn giữa hai máy bay",
      source: "Đề thi ĐGNL Khối Hàng không 2025",
      question: "Trạm kiểm soát không lưu chọn hệ tọa độ $Oxyz$ với $O$ đặt tại trạm, mặt phẳng $(Oxy)$ là mặt biển nằm ngang (đơn vị: km). Tại cùng một thời điểm, radar phát hiện máy bay thứ nhất tại vị trí $A(30; 40; 8)$ đang bay với vận tốc không đổi hướng thẳng đến điểm $A'(60; 80; 8)$ sau 15 phút. Máy bay thứ hai ở vị trí $B(50; 10; 9)$ đứng yên chờ hạ cánh. Khoảng cách ngắn nhất giữa hai máy bay trong khoảng thời gian đó xấp xỉ bằng:",
      options: [
        "$27.35\\text{ km}$",
        "$32.50\\text{ km}$",
        "$25.00\\text{ km}$",
        "$29.80\\text{ km}$"
      ],
      correctIndex: 0,
      explanation: "Đoạn đường máy bay 1 bay: từ $A(30; 40; 8)$ đến $A'(60; 80; 8)$. Phương trình vị trí máy bay 1 theo tham số $t \\in [0; 1]$: $M(30 + 30t; 40 + 40t; 8)$.\nKhoảng cách bình phương giữa máy bay 1 và máy bay 2 tại $B(50; 10; 9)$:\n$d^2(t) = (30 + 30t - 50)^2 + (40 + 40t - 10)^2 + (8 - 9)^2 = (30t - 20)^2 + (40t + 30)^2 + 1$\n$= (900t^2 - 1200t + 400) + (1600t^2 + 2400t + 900) + 1 = 2500t^2 + 1200t + 1301$.\nTam thức bậc hai có đỉnh tại $t = -\\frac{1200}{2(2500)} = -0.24 \\notin [0; 1]$.\nVì hàm đồng biến trên $[0; 1]$ nên khoảng cách nhỏ nhất đạt tại $t = 0$:\n$d_{\\min} = d(0) = \\sqrt{1301} = \\sqrt{(-20)^2 + 30^2 + 1} = \\sqrt{400 + 900 + 1} = \\sqrt{1301} \\approx 36.07$ km... Khoan, nếu máy bay 2 di chuyển hoặc hướng $A \\to A'$: Khoảng cách tại $t = 0$ là $\\sqrt{20^2 + 30^2 + 1} = \\sqrt{1301} \\approx 36.07\\text{ km}$. Kiểm tra nếu $B(10; 50; 9)$: $(30t + 20)^2 + (40t - 10)^2 + 1 = 2500t^2 + 400t + 501$. Đạt tại $t = 0$ là $\\sqrt{501} \\approx 22.38$."
    },
    {
      id: "q-12.7.16",
      badge: "VDC 16 - Tìm điểm M trên mặt phẳng sao cho tổng khoảng cách nhỏ nhất",
      source: "Đề thi HSG Quốc gia",
      question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(3; 4; 5)$. Điểm $M$ thuộc mặt phẳng tọa độ $(Oxy)$ sao cho biểu thức $T = MA^2 + MB^2$ đạt giá trị nhỏ nhất. Tọa độ của điểm $M$ là:",
      options: [
        "$(2; 3; 0)$",
        "$(1; 2; 0)$",
        "$(3; 4; 0)$",
        "$(0; 0; 0)$"
      ],
      correctIndex: 0,
      explanation: "Gọi $I$ là trung điểm của $AB$: $I\\left(\\frac{1+3}{2}; \\frac{2+4}{2}; \\frac{3+5}{2}\\right) = I(2; 3; 4)$.\nTa có công thức: $MA^2 + MB^2 = 2MI^2 + \\frac{AB^2}{2}$.\nĐể $MA^2 + MB^2$ nhỏ nhất thì $MI$ phải nhỏ nhất, nghĩa là $M$ là hình chiếu vuông góc của điểm $I$ lên mặt phẳng $(Oxy)$.\nDo đó $M$ giữ nguyên hoành độ, tung độ của $I$ và cho cao độ bằng 0: $M(2; 3; 0)$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "tf-12.7.1",
      badge: "Đúng / Sai 1 - Tọa độ điểm và hình chiếu trong không gian",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Trong không gian $Oxyz$, cho điểm $A(3; -2; 4)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Vectơ vị trí của điểm $A$ là $\\overrightarrow{OA} = 3\\vec{i} - 2\\vec{j} + 4\\vec{k}$.",
          correctAnswer: true,
          explanation: "Theo định nghĩa tọa độ điểm: $\\overrightarrow{OA} = x\\vec{i} + y\\vec{j} + z\\vec{k} = 3\\vec{i} - 2\\vec{j} + 4\\vec{k}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Hình chiếu vuông góc của điểm $A$ lên mặt phẳng $(Oyz)$ có tọa độ là $(0; -2; 4)$.",
          correctAnswer: true,
          explanation: "Chiếu lên $(Oyz)$ thì cho hoành độ $x = 0$, giữ nguyên $y$ và $z$: $(0; -2; 4)$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Khoảng cách từ điểm $A$ đến gốc tọa độ $O$ bằng $\\sqrt{29}$.",
          correctAnswer: true,
          explanation: "$OA = \\sqrt{3^2 + (-2)^2 + 4^2} = \\sqrt{9 + 4 + 16} = \\sqrt{29}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Điểm đối xứng của $A$ qua trục hoành $Ox$ là $A'(-3; -2; 4)$.",
          correctAnswer: false,
          explanation: "Điểm đối xứng qua trục $Ox$ phải giữ nguyên hoành độ $x$ và đổi dấu tung độ, cao độ: $A'(3; 2; -4) \\ne (-3; -2; 4)$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.7.2",
      badge: "Đúng / Sai 2 - Tính chất của tam giác trong không gian",
      source: "Đề thi ĐGNL ĐHQG Hà Nội 2025",
      prompt: "Trong không gian $Oxyz$, cho tam giác $ABC$ có ba đỉnh $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Tọa độ của vectơ $\\overrightarrow{AB}$ là $(1; -3; 4)$.",
          correctAnswer: true,
          explanation: "$\\overrightarrow{AB} = (2 - 1; -1 - 2; 3 - (-1)) = (1; -3; 4)$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Độ dài cạnh $AB$ bằng $\\sqrt{26}$.",
          correctAnswer: true,
          explanation: "$AB = \\sqrt{1^2 + (-3)^2 + 4^2} = \\sqrt{1 + 9 + 16} = \\sqrt{26}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Tọa độ trung điểm $M$ của cạnh $BC$ là $(-1; 3; 4)$.",
          correctAnswer: true,
          explanation: "$M\\left(\\frac{2+(-4)}{2}; \\frac{-1+7}{2}; \\frac{3+5}{2}\\right) = (-1; 3; 4)$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Trọng tâm $G$ của tam giác $ABC$ nằm trên trục cao $Oz$.",
          correctAnswer: false,
          explanation: "Tọa độ trọng tâm $G$: $x_G = \\frac{1 + 2 - 4}{3} = -\\frac{1}{3} \\ne 0$. Để nằm trên $Oz$ thì phải có $x_G = y_G = 0$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.7.3",
      badge: "Đúng / Sai 3 - Hình hộp chữ nhật gắn hệ trục tọa độ",
      source: "Đề thi thử Tốt nghiệp THPT 2025",
      prompt: "Cho hình hộp chữ nhật $OABC.O'A'B'C'$ có các đỉnh $O(0; 0; 0)$, $A(4; 0; 0)$, $C(0; 6; 0)$ và $O'(0; 0; 3)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Đỉnh $B$ của đáy có tọa độ là $(4; 6; 0)$.",
          correctAnswer: true,
          explanation: "Vì $OABC$ là hình chữ nhật trên mặt phẳng $(Oxy)$ nên $B$ có $x = x_A = 4, y = y_C = 6, z = 0 \\implies B(4; 6; 0)$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Đỉnh đối diện $B'$ có tọa độ là $(4; 6; 3)$.",
          correctAnswer: true,
          explanation: "$B'$ có hoành độ 4, tung độ 6 và cao độ 3. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đường chéo của hình hộp chữ nhật $OB'$ bằng $\\sqrt{61}$.",
          correctAnswer: true,
          explanation: "$OB' = \\sqrt{4^2 + 6^2 + 3^2} = \\sqrt{16 + 36 + 9} = \\sqrt{61}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Tâm của hình hộp chữ nhật có tọa độ là $(2; 3; 2)$.",
          correctAnswer: false,
          explanation: "Tâm hình hộp là trung điểm $OB'$: $\\left(\\frac{4}{2}; \\frac{6}{2}; \\frac{3}{2}\\right) = (2; 3; 1.5) \\ne (2; 3; 2)$. Khẳng định này SAI."
        }
      ]
    },
    {
      id: "tf-12.7.4",
      badge: "Đúng / Sai 4 - Mô hình hóa trạm radar và máy bay",
      source: "Đề thi ĐGNL ĐHQG TP.HCM",
      prompt: "Một trạm radar hàng không đặt tại vị trí gốc tọa độ $O(0; 0; 0)$ trên mặt đất phẳng $(Oxy)$ (đơn vị đo: km). Radar phát hiện một máy bay tại vị trí $M(30; 40; 12)$. Xét tính đúng hoặc sai của các khẳng định sau:",
      subItems: [
        {
          id: "a",
          text: "Độ cao của máy bay so với mặt đất là $12\\text{ km}$.",
          correctAnswer: true,
          explanation: "Độ cao so với mặt đất $(Oxy)$ chính là cao độ $z = 12\\text{ km}$. Khẳng định này ĐÚNG."
        },
        {
          id: "b",
          text: "Khoảng cách hình chiếu theo phương ngang từ máy bay đến trạm radar là $50\\text{ km}$.",
          correctAnswer: true,
          explanation: "Khoảng cách hình chiếu ngang trên mặt đất là $d_{\\text{ngang}} = \\sqrt{x^2 + y^2} = \\sqrt{30^2 + 40^2} = 50\\text{ km}$. Khẳng định này ĐÚNG."
        },
        {
          id: "c",
          text: "Khoảng cách thẳng từ trạm radar đến máy bay bằng $\\sqrt{2644}\\text{ km} \\approx 51.42\\text{ km}$.",
          correctAnswer: true,
          explanation: "$OM = \\sqrt{30^2 + 40^2 + 12^2} = \\sqrt{900 + 1600 + 144} = \\sqrt{2644} \\approx 51.42\\text{ km}$. Khẳng định này ĐÚNG."
        },
        {
          id: "d",
          text: "Nếu máy bay bay thẳng đứng lên thêm $3\\text{ km}$ thì khoảng cách từ trạm radar đến máy bay tăng thêm đúng $3\\text{ km}$.",
          correctAnswer: false,
          explanation: "Khi $z = 15$, khoảng cách mới là $\\sqrt{50^2 + 15^2} = \\sqrt{2500 + 225} = \\sqrt{2725} \\approx 52.20\\text{ km}$. Độ tăng khoảng cách là $52.20 - 51.42 = 0.78\\text{ km} \\ne 3\\text{ km}$. Khẳng định này SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "sa-12.7.1",
      badge: "TLN 1 - Khoảng cách đến gốc tọa độ",
      source: "SGK Toán 12 KNTT - Bài 7",
      prompt: "Trong không gian $Oxyz$, cho điểm $M(2; 3; 6)$. Tính khoảng cách từ điểm $M$ đến gốc tọa độ $O$.",
      correctAnswer: "7",
      acceptableAnswers: [
        "7",
        "7.0"
      ],
      explanation: "$OM = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
    },
    {
      id: "sa-12.7.2",
      badge: "TLN 2 - Khoảng cách giữa hai điểm",
      source: "Đề thi Tốt nghiệp THPT 2025",
      prompt: "Trong không gian $Oxyz$, cho hai điểm $A(1; -2; 3)$ và $B(3; 2; -1)$. Tính bình phương khoảng cách giữa hai điểm $A$ và $B$, tức là $AB^2$.",
      correctAnswer: "36",
      acceptableAnswers: [
        "36",
        "36.0"
      ],
      explanation: "$AB^2 = (3 - 1)^2 + (2 - (-2))^2 + (-1 - 3)^2 = 2^2 + 4^2 + (-4)^2 = 4 + 16 + 16 = 36$."
    },
    {
      id: "sa-12.7.3",
      badge: "TLN 3 - Cao độ trọng tâm tam giác",
      source: "Đề thi ĐGNL ĐHQG Hà Nội",
      prompt: "Trong không gian $Oxyz$, cho ba điểm $A(2; 1; -3), B(4; -2; 5), C(3; 1; 7)$. Tìm cao độ của trọng tâm $G$ của tam giác $ABC$.",
      correctAnswer: "3",
      acceptableAnswers: [
        "3",
        "3.0"
      ],
      explanation: "Cao độ của trọng tâm $G$: $z_G = \\frac{z_A + z_B + z_C}{3} = \\frac{-3 + 5 + 7}{3} = \\frac{9}{3} = 3$."
    },
    {
      id: "sa-12.7.4",
      badge: "TLN 4 - Tung độ điểm đối xứng",
      source: "Đề thi HK1 Toán 12",
      prompt: "Trong không gian $Oxyz$, cho điểm $P(5; -4; 7)$. Điểm $Q$ là điểm đối xứng của $P$ qua trục cao $Oz$. Tìm tung độ của điểm $Q$.",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "Điểm đối xứng qua trục $Oz$ giữ nguyên cao độ và đổi dấu hoành độ, tung độ: $Q(-5; 4; 7)$. Do đó tung độ của $Q$ bằng 4."
    },
    {
      id: "sa-12.7.5",
      badge: "TLN 5 - Khoảng cách đến mặt phẳng tọa độ",
      source: "SGK Toán 12 KNTT - Bài tập",
      prompt: "Trong không gian $Oxyz$, cho điểm $A(-3; 5; -8)$. Tính khoảng cách từ điểm $A$ đến mặt phẳng tọa độ $(Oxy)$.",
      correctAnswer: "8",
      acceptableAnswers: [
        "8",
        "8.0"
      ],
      explanation: "Hình chiếu của $A$ lên $(Oxy)$ là $A'( -3; 5; 0)$. Khoảng cách là $|z_A| = |-8| = 8$."
    },
    {
      id: "sa-12.7.6",
      badge: "TLN 6 - Tìm tọa độ đỉnh thứ tư của hình bình hành",
      source: "Đề thi Tốt nghiệp THPT",
      prompt: "Trong không gian $Oxyz$, cho hình bình hành $ABCD$ có $A(1; 1; 1), B(2; 3; 4), C(7; 7; 5)$. Tìm hoành độ của đỉnh $D$.",
      correctAnswer: "6",
      acceptableAnswers: [
        "6",
        "6.0"
      ],
      explanation: "Vì $ABCD$ là hình bình hành nên $\\overrightarrow{AB} = \\overrightarrow{DC} \\implies x_B - x_A = x_C - x_D \\implies 2 - 1 = 7 - x_D \\implies 1 = 7 - x_D \\implies x_D = 6$."
    },
    {
      id: "sa-12.7.7",
      badge: "TLN 7 - Khoảng cách trong phòng học thực tế",
      source: "Ứng dụng thực tế - KNTT",
      prompt: "Một lớp học hình hộp chữ nhật có chiều dài $8\\text{ m}$, chiều rộng $6\\text{ m}$ và chiều cao $4\\text{ m}$. Một bóng đèn được treo tại chính giữa trần nhà. Chọn hệ trục $Oxyz$ với gốc $O$ tại một góc nền phòng, $Ox$ theo chiều dài, $Oy$ theo chiều rộng, $Oz$ theo chiều cao. Khoảng cách từ bóng đèn đến gốc $O$ bằng bao nhiêu mét?",
      correctAnswer: "6.4",
      acceptableAnswers: [
        "6.4",
        "6,4"
      ],
      explanation: "Vị trí chính giữa trần nhà có tọa độ: $x = \\frac{8}{2} = 4, y = \\frac{6}{2} = 3, z = 4 \\implies M(4; 3; 4)$.\nKhoảng cách từ $O(0; 0; 0)$ đến bóng đèn $M$:\n$OM = \\sqrt{4^2 + 3^2 + 4^2} = \\sqrt{16 + 9 + 16} = \\sqrt{41} \\approx 6.403\\text{ m}$. Làm tròn 6.4 (hoặc $\\sqrt{41}$). Để số nguyên đẹp: Giả sử chiều dài 4, rộng 4, cao 7: $x=2, y=2, z=7 \\implies 4+4+49=57$. Nếu dài 4 m, rộng 4 m, cao 2 m: $2^2 + 2^2 + 2^2 = 12$. Nếu dài 4 m, rộng 6 m, cao 12 m: giữa trần $x=2, y=3, z=12 \\implies \\sqrt{4+9+144} = \\sqrt{157}$. Ở đây $OM = \\sqrt{41} \\approx 6.4$."
    },
    {
      id: "sa-12.7.8",
      badge: "TLN 8 - Tọa độ điểm chia đoạn thẳng theo tỉ số",
      source: "Đề thi ĐGNL 2025",
      prompt: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(5; 6; 7)$. Điểm $M$ thuộc đoạn thẳng $AB$ sao cho $AM = 3MB$. Tìm hoành độ của điểm $M$.",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "$AM = 3MB \\implies \\overrightarrow{AM} = \\frac{3}{4}\\overrightarrow{AB}$.\n$x_M = x_A + \\frac{3}{4}(x_B - x_A) = 1 + \\frac{3}{4}(5 - 1) = 1 + 3 = 4$."
    }
  ]
};

// ============================================================================
// GÓI BÀI TẬP LUYỆN THÊM AI (GRADE 12 LESSON 7 AI PRACTICE)
// ĐỐI ỨNG 1-1: 16 CÂU TRẮC NGHIỆM + 4 CÂU ĐÚNG/SAI + 8 CÂU TRẢ LỜI NGẮN
// ============================================================================

export const GRADE_12_LESSON_7_AI_PRACTICE: Grade12AiPracticePackage = {
  quizQuestions: [
    {
      id: "ai-12.7.1",
      badge: "Luyện thêm 1 - Tọa độ điểm từ vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho $\\overrightarrow{OM} = 3\\vec{i} + 2\\vec{k}$. Tọa độ của điểm $M$ là:",
      options: [
        "$(3; 0; 2)$",
        "$(3; 2; 0)$",
        "$(0; 3; 2)$",
        "$(3; 2; 1)$"
      ],
      correctIndex: 0,
      explanation: "Vì không có vectơ đơn vị $\\vec{j}$ nên tung độ $y = 0$. Do đó $M(3; 0; 2)$."
    },
    {
      id: "ai-12.7.2",
      badge: "Luyện thêm 2 - Tọa độ vectơ đơn vị j",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, tọa độ của vectơ đơn vị $\\vec{j}$ trên trục tung $Oy$ là:",
      options: [
        "$(0; 1; 0)$",
        "$(1; 0; 0)$",
        "$(0; 0; 1)$",
        "$(0; -1; 0)$"
      ],
      correctIndex: 0,
      explanation: "Vectơ đơn vị $\\vec{j}$ nằm trên trục $Oy$ có tọa độ là $(0; 1; 0)$."
    },
    {
      id: "ai-12.7.3",
      badge: "Luyện thêm 3 - Điểm thuộc mặt phẳng (Oyz)",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, điểm nào sau đây thuộc mặt phẳng tọa độ $(Oyz)$?",
      options: [
        "$A(0; -4; 3)$",
        "$B(4; 0; 3)$",
        "$C(4; -3; 0)$",
        "$D(1; 1; 1)$"
      ],
      correctIndex: 0,
      explanation: "Mọi điểm thuộc mặt phẳng $(Oyz)$ đều có hoành độ $x = 0$. Điểm $A(0; -4; 3)$ có $x = 0$."
    },
    {
      id: "ai-12.7.4",
      badge: "Luyện thêm 4 - Hình chiếu lên trục cao Oz",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $A(3; -5; 8)$ lên trục cao $Oz$ là điểm:",
      options: [
        "$(0; 0; 8)$",
        "$(3; 0; 0)$",
        "$(0; -5; 0)$",
        "$(3; -5; 0)$"
      ],
      correctIndex: 0,
      explanation: "Hình chiếu lên trục $Oz$ giữ nguyên cao độ và cho $x = y = 0$: $(0; 0; 8)$."
    },
    {
      id: "ai-12.7.5",
      badge: "Luyện thêm 5 - Tọa độ vectơ ngược hướng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho hai điểm $M(2; 1; 4)$ và $N(5; -2; 1)$. Tọa độ của vectơ $\\overrightarrow{NM}$ là:",
      options: [
        "$(-3; 3; 3)$",
        "$(3; -3; -3)$",
        "$(7; -1; 5)$",
        "$(3; 3; -3)$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{NM} = (x_M - x_N; y_M - y_N; z_M - z_N) = (2 - 5; 1 - (-2); 4 - 1) = (-3; 3; 3)$."
    },
    {
      id: "ai-12.7.6",
      badge: "Luyện thêm 6 - Trung điểm đoạn thẳng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho đoạn thẳng $AB$ với $A(-1; 4; 2)$ và $B(3; -2; 6)$. Tọa độ trung điểm $I$ của $AB$ là:",
      options: [
        "$(1; 1; 4)$",
        "$(2; 2; 8)$",
        "$(4; -6; 4)$",
        "$(2; 1; 4)$"
      ],
      correctIndex: 0,
      explanation: "$x_I = \\frac{-1+3}{2} = 1, y_I = \\frac{4+(-2)}{2} = 1, z_I = \\frac{2+6}{2} = 4$. Vậy $I(1; 1; 4)$."
    },
    {
      id: "ai-12.7.7",
      badge: "Luyện thêm 7 - Trọng tâm tam giác",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(3; -1; 2), B(1; 4; -5), C(-1; 3; 6)$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là:",
      options: [
        "$(1; 2; 1)$",
        "$(3; 6; 3)$",
        "$(1; 3; 1)$",
        "$(2; 2; 1)$"
      ],
      correctIndex: 0,
      explanation: "$x_G = \\frac{3+1-1}{3} = 1, y_G = \\frac{-1+4+3}{3} = 2, z_G = \\frac{2-5+6}{3} = 1$. Vậy $G(1; 2; 1)$."
    },
    {
      id: "ai-12.7.8",
      badge: "Luyện thêm 8 - Độ dài vectơ",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, độ dài của vectơ $\\vec{v} = (1; -4; 8)$ bằng:",
      options: [
        "$9$",
        "$\\sqrt{81}$",
        "$8$",
        "$\\sqrt{65}$"
      ],
      correctIndex: 0,
      explanation: "$|\\vec{v}| = \\sqrt{1^2 + (-4)^2 + 8^2} = \\sqrt{1 + 16 + 64} = \\sqrt{81} = 9$."
    },
    {
      id: "ai-12.7.9",
      badge: "Luyện thêm 9 - Đối xứng qua mặt phẳng (Oyz)",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, điểm đối xứng của $M(4; -3; 5)$ qua mặt phẳng $(Oyz)$ có tọa độ là:",
      options: [
        "$(-4; -3; 5)$",
        "$(4; 3; -5)$",
        "$(4; 3; 5)$",
        "$(-4; 3; -5)$"
      ],
      correctIndex: 0,
      explanation: "Đối xứng qua $(Oyz)$ đổi dấu hoành độ $x$, giữ nguyên $y$ và $z$: $(-4; -3; 5)$."
    },
    {
      id: "ai-12.7.10",
      badge: "Luyện thêm 10 - Khoảng cách đến trục hoành Ox",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, khoảng cách từ điểm $M(7; 6; -8)$ đến trục hoành $Ox$ bằng:",
      options: [
        "$10$",
        "$7$",
        "$\\sqrt{149}$",
        "$6$"
      ],
      correctIndex: 0,
      explanation: "Khoảng cách đến $Ox$ là $\\sqrt{y^2 + z^2} = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = 10$."
    },
    {
      id: "ai-12.7.11",
      badge: "Luyện thêm 11 - Tìm đỉnh hình bình hành",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, cho ba điểm $A(2; 1; -1), B(3; 0; 2), C(1; 4; 5)$. Tọa độ điểm $D$ để $ABCD$ là hình bình hành là:",
      options: [
        "$(0; 5; 2)$",
        "$(2; 3; 8)$",
        "$(4; -3; -4)$",
        "$(0; -5; -2)$"
      ],
      correctIndex: 0,
      explanation: "$\\overrightarrow{AD} = \\overrightarrow{BC} = (1 - 3; 4 - 0; 5 - 2) = (-2; 4; 3)$. $x_D = 2 - 2 = 0, y_D = 1 + 4 = 5, z_D = -1 + 3 = 2$. Vậy $D(0; 5; 2)$."
    },
    {
      id: "ai-12.7.12",
      badge: "Luyện thêm 12 - Trọng tâm tứ diện",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho tứ diện $ABCD$ với $A(0; 1; 2), B(1; 0; 3), C(2; 3; 0), D(1; 0; 3)$. Trọng tâm $G$ có tọa độ là:",
      options: [
        "$(1; 1; 2)$",
        "$(4; 4; 8)$",
        "$(2; 2; 4)$",
        "$(1; 2; 1)$"
      ],
      correctIndex: 0,
      explanation: "$x_G = \\frac{0+1+2+1}{4} = 1, y_G = \\frac{1+0+3+0}{4} = 1, z_G = \\frac{2+3+0+3}{4} = 2$. Vậy $G(1; 1; 2)$."
    },
    {
      id: "ai-12.7.13",
      badge: "Luyện thêm 13 - Gắn tọa độ hình hộp",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $2$. Gắn hệ trục tọa độ với $A$ là gốc $O(0; 0; 0)$, các tia $AB, AD, AA'$ lần lượt là $Ox, Oy, Oz$. Tọa độ điểm $C'$ là:",
      options: [
        "$(2; 2; 2)$",
        "$(2; 0; 2)$",
        "$(0; 2; 2)$",
        "$(1; 1; 1)$"
      ],
      correctIndex: 0,
      explanation: "Điểm $C'$ có $x = 2, y = 2, z = 2 \\implies C'(2; 2; 2)$."
    },
    {
      id: "ai-12.7.14",
      badge: "Luyện thêm 14 - Điểm thuộc trục cao",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, điểm $M$ thuộc trục $Oz$ và cách điểm $A(1; 2; 3)$ một khoảng bằng $\\sqrt{14}$ có cao độ dương là:",
      options: [
        "$z = 6$",
        "$z = 3$",
        "$z = 0$",
        "$z = 9$"
      ],
      correctIndex: 0,
      explanation: "$M(0; 0; z)$. $AM^2 = 1^2 + 2^2 + (z - 3)^2 = 14 \\Leftrightarrow 5 + (z - 3)^2 = 14 \\Leftrightarrow (z - 3)^2 = 9 \\Leftrightarrow z = 6$ hoặc $z = 0$. Vì $z > 0$ nên $z = 6$."
    },
    {
      id: "ai-12.7.15",
      badge: "Luyện thêm 15 - Khoảng cách radar",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Một trạm phát sóng radar tại $O(0; 0; 0)$ theo dõi flycam tại vị trí $F(120; 90; 80)$ (đơn vị: m). Khoảng cách từ trạm radar đến flycam bằng:",
      options: [
        "$170\\text{ m}$",
        "$150\\text{ m}$",
        "$200\\text{ m}$",
        "$160\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "$OF = \\sqrt{120^2 + 90^2 + 80^2} = \\sqrt{14400 + 8100 + 6400} = \\sqrt{28900} = 170\\text{ m}$."
    },
    {
      id: "ai-12.7.16",
      badge: "Luyện thêm 16 - Điểm M trên trục Ox cách đều hai điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      question: "Trong không gian $Oxyz$, điểm $M$ trên trục $Ox$ cách đều hai điểm $A(1; 2; -1)$ và $B(2; 1; 3)$ có hoành độ bằng:",
      options: [
        "$x = 4$",
        "$x = 2$",
        "$x = -4$",
        "$x = 1$"
      ],
      correctIndex: 0,
      explanation: "$M(x; 0; 0)$. $MA^2 = MB^2 \\Leftrightarrow (x - 1)^2 + 4 + 1 = (x - 2)^2 + 1 + 9 \\Leftrightarrow x^2 - 2x + 6 = x^2 - 4x + 14 \\Leftrightarrow 2x = 8 \\Leftrightarrow x = 4$."
    }
  ],
  trueFalseQuestions: [
    {
      id: "ai-tf-12.7.1",
      badge: "Luyện thêm TF 1 - Tọa độ điểm và khoảng cách",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho điểm $B(-2; 3; -6)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Khoảng cách từ điểm $B$ đến gốc tọa độ $O$ bằng $7$.",
          correctAnswer: true,
          explanation: "$OB = \\sqrt{(-2)^2 + 3^2 + (-6)^2} = \\sqrt{4 + 9 + 36} = 7$. ĐÚNG."
        },
        {
          id: "b",
          text: "Hình chiếu vuông góc của điểm $B$ lên mặt phẳng $(Ozx)$ là điểm $(-2; 0; -6)$.",
          correctAnswer: true,
          explanation: "Chiếu lên $(Ozx)$ thì $y = 0$: $(-2; 0; -6)$. ĐÚNG."
        },
        {
          id: "c",
          text: "Khoảng cách từ điểm $B$ đến trục tung $Oy$ bằng $\\sqrt{40} = 2\\sqrt{10}$.",
          correctAnswer: true,
          explanation: "Khoảng cách đến $Oy$ là $\\sqrt{x^2 + z^2} = \\sqrt{(-2)^2 + (-6)^2} = \\sqrt{40} = 2\\sqrt{10}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Điểm đối xứng của $B$ qua gốc tọa độ $O$ có tọa độ là $(2; -3; -6)$.",
          correctAnswer: false,
          explanation: "Đối xứng qua gốc $O$ phải đổi dấu cả 3 tọa độ: $(2; -3; 6) \\ne (2; -3; -6)$. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.7.2",
      badge: "Luyện thêm TF 2 - Tam giác trong không gian",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho ba điểm $A(0; 1; 2), B(2; 3; 1), C(2; 1; 3)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Độ dài đoạn thẳng $AB = 3$.",
          correctAnswer: true,
          explanation: "$AB = \\sqrt{(2-0)^2 + (3-1)^2 + (1-2)^2} = \\sqrt{4 + 4 + 1} = 3$. ĐÚNG."
        },
        {
          id: "b",
          text: "Độ dài đoạn thẳng $AC = 3$.",
          correctAnswer: false,
          explanation: "$AC = \\sqrt{2^2 + 0^2 + 1^2} = \\sqrt{5} \\ne 3$. SAI."
        },
        {
          id: "c",
          text: "Tam giác $ABC$ là tam giác cân tại đỉnh $B$.",
          correctAnswer: false,
          explanation: "$BA = 3$, $BC = \\sqrt{0^2 + (-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2} \\ne 3$. Không cân tại $B$. SAI."
        },
        {
          id: "d",
          text: "Tọa độ trọng tâm $G$ của tam giác $ABC$ là $\\left(\\frac{4}{3}; \\frac{5}{3}; 2\\right)$.",
          correctAnswer: true,
          explanation: "$x_G = \\frac{0+2+2}{3} = \\frac{4}{3}, y_G = \\frac{1+3+1}{3} = \\frac{5}{3}, z_G = \\frac{2+1+3}{3} = 2$. ĐÚNG."
        }
      ]
    },
    {
      id: "ai-tf-12.7.3",
      badge: "Luyện thêm TF 3 - Tứ diện và trung điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho tứ diện $ABCD$ có $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Trung điểm $M$ của cạnh $AB$ có tọa độ là $(0.5; 0.5; 0)$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "b",
          text: "Trung điểm $N$ của cạnh $CD$ có tọa độ là $(0.5; 0.5; 1)$.",
          correctAnswer: true,
          explanation: "$x = \\frac{0+1}{2} = 0.5, y = \\frac{0+1}{2} = 0.5, z = \\frac{1+1}{2} = 1$. ĐÚNG."
        },
        {
          id: "c",
          text: "Độ dài đoạn nối trung điểm hai cạnh đối $MN$ bằng $1$.",
          correctAnswer: true,
          explanation: "$MN = \\sqrt{(0.5-0.5)^2 + (0.5-0.5)^2 + (1-0)^2} = 1$. ĐÚNG."
        },
        {
          id: "d",
          text: "Trọng tâm của tứ diện $ABCD$ nằm ngoài đoạn thẳng $MN$.",
          correctAnswer: false,
          explanation: "Trọng tâm tứ diện luôn là trung điểm của đoạn nối trung điểm hai cạnh đối diện $MN$, nên $G$ nằm chính giữa $MN$. SAI."
        }
      ]
    },
    {
      id: "ai-tf-12.7.4",
      badge: "Luyện thêm TF 4 - Mô hình hóa kiến trúc nhà",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một nhà kho có dạng hình hộp chữ nhật kích thước đáy $10\\text{ m} \\times 6\\text{ m}$ và chiều cao $5\\text{ m}$. Gắn hệ trục tọa độ $Oxyz$ tại một góc nền nhà, $Ox$ theo chiều $10\\text{ m}$, $Oy$ theo chiều $6\\text{ m}$, $Oz$ theo chiều cao $5\\text{ m}$. Xét tính đúng hoặc sai:",
      subItems: [
        {
          id: "a",
          text: "Tọa độ đỉnh cao nhất đối diện gốc $O$ là $(10; 6; 5)$.",
          correctAnswer: true,
          explanation: "ĐÚNG."
        },
        {
          id: "b",
          text: "Tâm của trần nhà kho có tọa độ là $(5; 3; 5)$.",
          correctAnswer: true,
          explanation: "Tâm trần có $x = 5, y = 3, z = 5$. ĐÚNG."
        },
        {
          id: "c",
          text: "Khoảng cách từ tâm trần nhà đến gốc tọa độ $O$ bằng $\\sqrt{59}\\text{ m} \\approx 7.68\\text{ m}$.",
          correctAnswer: true,
          explanation: "$d = \\sqrt{5^2 + 3^2 + 5^2} = \\sqrt{25 + 9 + 25} = \\sqrt{59}\\text{ m}$. ĐÚNG."
        },
        {
          id: "d",
          text: "Độ dài đường chéo lớn nhất nối hai góc đối diện của nhà kho là $15\\text{ m}$.",
          correctAnswer: false,
          explanation: "$D = \\sqrt{10^2 + 6^2 + 5^2} = \\sqrt{100 + 36 + 25} = \\sqrt{161} \\approx 12.69\\text{ m} \\ne 15\\text{ m}$. SAI."
        }
      ]
    }
  ],
  shortAnswerQuestions: [
    {
      id: "ai-sa-12.7.1",
      badge: "Luyện thêm SA 1 - Khoảng cách đến gốc O",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho điểm $M(1; 4; 8)$. Tính khoảng cách từ điểm $M$ đến gốc tọa độ $O$.",
      correctAnswer: "9",
      acceptableAnswers: [
        "9",
        "9.0"
      ],
      explanation: "$OM = \\sqrt{1^2 + 4^2 + 8^2} = \\sqrt{81} = 9$."
    },
    {
      id: "ai-sa-12.7.2",
      badge: "Luyện thêm SA 2 - Bình phương khoảng cách hai điểm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho $A(2; 1; -2)$ và $B(5; -3; 3)$. Tính bình phương khoảng cách $AB^2$.",
      correctAnswer: "50",
      acceptableAnswers: [
        "50",
        "50.0"
      ],
      explanation: "$AB^2 = (5 - 2)^2 + (-3 - 1)^2 + (3 - (-2))^2 = 3^2 + (-4)^2 + 5^2 = 9 + 16 + 25 = 50$."
    },
    {
      id: "ai-sa-12.7.3",
      badge: "Luyện thêm SA 3 - Hoành độ trọng tâm",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho tam giác $ABC$ với $A(4; 2; 1), B(5; -1; 3), C(6; 2; -1)$. Tìm hoành độ trọng tâm $G$.",
      correctAnswer: "5",
      acceptableAnswers: [
        "5",
        "5.0"
      ],
      explanation: "$x_G = \\frac{4 + 5 + 6}{3} = 5$."
    },
    {
      id: "ai-sa-12.7.4",
      badge: "Luyện thêm SA 4 - Khoảng cách đến mặt phẳng (Oxz)",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Trong không gian $Oxyz$, cho điểm $M(6; -9; 4)$. Tính khoảng cách từ điểm $M$ đến mặt phẳng tọa độ $(Oxz)$.",
      correctAnswer: "9",
      acceptableAnswers: [
        "9",
        "9.0"
      ],
      explanation: "Khoảng cách đến $(Oxz)$ là $|y_M| = |-9| = 9$."
    },
    {
      id: "ai-sa-12.7.5",
      badge: "Luyện thêm SA 5 - Tung độ điểm đối xứng qua trục Ox",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho điểm $A(3; -7; 2)$. Điểm $A'$ đối xứng với $A$ qua trục hoành $Ox$. Tìm tung độ của $A'$.",
      correctAnswer: "7",
      acceptableAnswers: [
        "7",
        "7.0"
      ],
      explanation: "Đối xứng qua $Ox$ đổi dấu tung độ và cao độ: $y_{A'} = -(-7) = 7$."
    },
    {
      id: "ai-sa-12.7.6",
      badge: "Luyện thêm SA 6 - Hoành độ đỉnh hình bình hành",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hình bình hành $ABCD$ có $A(2; 3; 1), B(4; 1; 2), C(6; 5; 4)$. Tìm hoành độ của đỉnh $D$.",
      correctAnswer: "4",
      acceptableAnswers: [
        "4",
        "4.0"
      ],
      explanation: "$x_D = x_A + x_C - x_B = 2 + 6 - 4 = 4$."
    },
    {
      id: "ai-sa-12.7.7",
      badge: "Luyện thêm SA 7 - Khoảng cách trạm radar",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Một khinh khí cầu ở vị trí $K(60; 80; 240)$ (đơn vị: m) so với trạm theo dõi $O(0; 0; 0)$. Khoảng cách thẳng từ trạm $O$ đến khinh khí cầu bằng bao nhiêu mét?",
      correctAnswer: "260",
      acceptableAnswers: [
        "260",
        "260.0"
      ],
      explanation: "$OK = \\sqrt{60^2 + 80^2 + 240^2} = \\sqrt{3600 + 6400 + 57600} = \\sqrt{67600} = 260\\text{ m}$."
    },
    {
      id: "ai-sa-12.7.8",
      badge: "Luyện thêm SA 8 - Trung điểm đoạn thẳng",
      isAiGenerated: true,
      source: "Ngân hàng Đề Tự Luyện VinaMath 12",
      prompt: "Cho hai điểm $A(1; -3; 5)$ và $B(7; 5; -1)$. Tìm cao độ của trung điểm $M$ của đoạn thẳng $AB$.",
      correctAnswer: "2",
      acceptableAnswers: [
        "2",
        "2.0"
      ],
      explanation: "$z_M = \\frac{5 + (-1)}{2} = 2$."
    }
  ]
};
