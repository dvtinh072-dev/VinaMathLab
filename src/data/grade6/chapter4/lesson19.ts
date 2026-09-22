import type { DetailedLessonData } from "@/data/allGradesLessonsData";

/**
 * BÀI 19: HÌNH CHỮ NHẬT. HÌNH THOI. HÌNH BÌNH HÀNH. HÌNH THANG CÂN - TOÁN 6
 * BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (TẬP 1)
 * ID: t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can
 * Đầy đủ: Lý thuyết + 4 Hình vẽ SVG toán học + 10 câu TN Cốt lõi + 10 câu TN Luyện thêm + 4 câu Đúng/Sai (16 ý) + 6 câu Trả lời ngắn
 */
export const LESSON_19_DATA: DetailedLessonData = {
  id: "t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can",
  lessonNumber: 19,
  title: "Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân",
  bookChapter: "Chương IV: Một số hình phẳng trong thực tiễn",
  scenarioTitle: "Tình huống: Khung cửa, hoa văn thổ cẩm và các kết cấu kiến trúc",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Hoa",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, khi quan sát khung cửa sổ, cánh diều, hoa văn thổ cẩm và các bậc thang trượt, em thấy chúng có nhiều dạng tứ giác rất đặc biệt. Đó là những hình gì và làm sao để nhận biết chính xác từng hình ạ?",
      visualGraphic: "box",
      mathNote: "AB \\parallel CD, \\ AD = BC, \\ AC = BD",
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Hoa! Đó chính là bốn tứ giác quen thuộc trong đời sống: Hình chữ nhật, hình thoi, hình bình hành và hình thang cân. Hôm nay thầy trò mình sẽ cùng khám phá các tính chất về cạnh, góc, đường chéo và cách nhận biết của từng hình nhé!",
      visualGraphic: "graph",
      mathNote: "AC \\perp BD \\ (\\text{hình thoi}), \\ OA = OB = OC = OD \\ (\\text{hình chữ nhật})",
    },
  ],
  theorySections: [
    {
      index: "1",
      title: "Hình chữ nhật (Rectangle)",
      points: [
        "**Định nghĩa & Yếu tố cơ bản:** Hình chữ nhật $ABCD$ có:\n- Bốn đỉnh: $A, B, C, D$.\n- Hai cặp cạnh đối diện song song và bằng nhau: $AB \\parallel CD, AB = CD$; $AD \\parallel BC, AD = BC$.\n- Bốn góc ở các đỉnh bằng nhau và bằng góc vuông ($90^\\circ$): $\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ$.\n- Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường: $AC = BD$ và $OA = OC = OB = OD = \\frac{1}{2} AC$.",
        "**Công thức chu vi và diện tích:**\n- Chu vi: $C = 2(a + b)$ (với $a, b$ là chiều dài và chiều rộng).\n- Diện tích: $S = a \\cdot b$.",
        "**Hình ảnh thực tế:** Khung cửa đi, cánh cửa sổ, bảng đen lớp học, mặt bàn giáo viên, sân bóng đá tiêu chuẩn.",
      ],
      formula: "C = 2(a + b), \\quad S = a \\cdot b",
      exampleTitle: "Ví dụ 1 (Đường chéo và chu vi hình chữ nhật)",
      exampleProblem: "Cho hình chữ nhật $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Biết $OA = 6\\text{ cm}$, chiều rộng $AD = 6\\text{ cm}$ và chiều dài $AB = 8\\text{ cm}$.\na) Tính độ dài các đường chéo $AC$ và $BD$.\nb) Tính chu vi của hình chữ nhật $ABCD$.",
      exampleSolution: "a) Vì hai đường chéo của hình chữ nhật bằng nhau và cắt nhau tại trung điểm của mỗi đường nên:\n$AC = BD = 2 \\cdot OA = 2 \\cdot 6 = 12\\text{ cm}$.\n\nb) Chu vi của hình chữ nhật $ABCD$ là:\n$C = 2 \\cdot (AB + AD) = 2 \\cdot (8 + 6) = 2 \\cdot 14 = 28\\text{ cm}$.",
      examples: [
        {
          title: "Hình vẽ chuẩn toán học: Hình chữ nhật ABCD",
          problem: "Minh họa hình chữ nhật $ABCD$ với hai đường chéo cắt nhau tại trung điểm $O$:",
          solution: "Hình chữ nhật $ABCD$ có 4 góc vuông, các cặp cạnh đối diện song song và bằng nhau, hai đường chéo $AC, BD$ bằng nhau và cắt nhau tại trung điểm $O$.",
          svgDiagram: `<svg viewBox="0 0 320 230" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình chữ nhật ABCD: A(60, 40), B(260, 40), C(260, 180), D(60, 180) -->
  <polygon points="60,40 260,40 260,180 60,180" fill="#0284c7" fill-opacity="0.12" stroke="#38bdf8" stroke-width="2.5" />

  <!-- Hai đường chéo AC và BD -->
  <line x1="60" y1="40" x2="260" y2="180" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3" />
  <line x1="260" y1="40" x2="60" y2="180" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3" />

  <!-- Tâm O (160, 110) -->
  <circle cx="160" cy="110" r="3.5" fill="#facc15" />
  <text x="160" y="130" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">O</text>

  <!-- 4 góc vuông -->
  <rect x="60" y="40" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />
  <rect x="246" y="40" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />
  <rect x="246" y="166" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />
  <rect x="60" y="166" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />

  <!-- Ký hiệu cạnh đối: AB và CD hai vạch, AD và BC một vạch -->
  <line x1="157" y1="35" x2="157" y2="45" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="163" y1="35" x2="163" y2="45" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="157" y1="175" x2="157" y2="185" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="163" y1="175" x2="163" y2="185" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="55" y1="110" x2="65" y2="110" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="255" y1="110" x2="265" y2="110" stroke="#38bdf8" stroke-width="1.8" />

  <!-- Đỉnh -->
  <text x="44" y="38" fill="#f8fafc" font-size="15" font-weight="bold">A</text>
  <text x="268" y="38" fill="#f8fafc" font-size="15" font-weight="bold">B</text>
  <text x="268" y="195" fill="#f8fafc" font-size="15" font-weight="bold">C</text>
  <text x="44" y="195" fill="#f8fafc" font-size="15" font-weight="bold">D</text>

  <!-- Kích thước a, b -->
  <text x="160" y="28" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">a (chiều dài)</text>
  <text x="28" y="115" fill="#38bdf8" font-size="13" font-weight="bold">b</text>
</svg>`,
        },
      ],
    },
    {
      index: "2",
      title: "Hình thoi (Rhombus)",
      points: [
        "**Định nghĩa & Yếu tố cơ bản:** Hình thoi $ABCD$ có:\n- Bốn đỉnh: $A, B, C, D$.\n- Bốn cạnh bằng nhau: $AB = BC = CD = DA = a$.\n- Hai cặp cạnh đối diện song song: $AB \\parallel CD, AD \\parallel BC$.\n- Các góc đối bằng nhau: $\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$.\n- Hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường: $AC \\perp BD$ tại $O$, $OA = OC$ và $OB = OD$.",
        "**Công thức chu vi và diện tích:**\n- Chu vi: $C = 4a$.\n- Diện tích: $S = \\frac{1}{2} m \\cdot n$ (với $m, n$ là độ dài hai đường chéo $AC$ và $BD$).",
        "**Hình ảnh thực tế:** Hoa văn vải thổ cẩm của đồng bào miền núi, cánh diều hình thoi, viên gạch bông họa tiết quả trám, biểu tượng kim cương.",
      ],
      formula: "C = 4a, \\quad S = \\frac{1}{2} m \\cdot n \\quad (AC = m, \\ BD = n)",
      exampleTitle: "Ví dụ 2 (Tính chu vi con diều hình thoi)",
      exampleProblem: "Một con diều hình thoi $ABCD$ có độ dài một cạnh là $40\\text{ cm}$. Người ta dùng dây dù viền quanh 4 cạnh của con diều.\na) Tính chiều dài sợi dây dù cần dùng (bỏ qua độ dài mối nối).\nb) Biết hai đường chéo của diều cắt nhau tại $O$ và $AC = 60\\text{ cm}, BD = 48\\text{ cm}$. Tính diện tích bề mặt con diều.",
      exampleSolution: "a) Chiều dài sợi dây dù viền quanh con diều chính là chu vi hình thoi:\n$C = 4 \\cdot 40 = 160\\text{ cm}$.\n\nb) Diện tích bề mặt con diều là:\n$S = \\frac{1}{2} \\cdot 60 \\cdot 48 = 1\\ 440\\text{ cm}^2$.",
      examples: [
        {
          title: "Hình vẽ chuẩn toán học: Hình thoi ABCD",
          problem: "Minh họa hình thoi $ABCD$ với 4 cạnh bằng nhau và 2 đường chéo vuông góc tại tâm $O$:",
          solution: "Hình thoi $ABCD$ có 4 cạnh bằng nhau $AB = BC = CD = DA = a$ và hai đường chéo $AC \\perp BD$ tại trung điểm $O$ của mỗi đường.",
          svgDiagram: `<svg viewBox="0 0 320 250" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình thoi ABCD: A(160, 25), B(275, 125), C(160, 225), D(45, 125) -->
  <polygon points="160,25 275,125 160,225 45,125" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round" />

  <!-- Hai đường chéo AC và BD -->
  <line x1="160" y1="25" x2="160" y2="225" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3" />
  <line x1="45" y1="125" x2="275" y2="125" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3" />

  <!-- Tâm O (160, 125) -->
  <circle cx="160" cy="125" r="3.5" fill="#facc15" />
  <text x="175" y="142" fill="#facc15" font-size="13" font-weight="bold">O</text>

  <!-- Ký hiệu góc vuông tại O -->
  <polygon points="160,113 172,113 172,125 160,125" fill="none" stroke="#f43f5e" stroke-width="1.5" />

  <!-- Ký hiệu 4 cạnh bằng nhau: 1 vạch chéo đơn -->
  <line x1="213" y1="71" x2="222" y2="79" stroke="#f59e0b" stroke-width="2" />
  <line x1="213" y1="179" x2="222" y2="171" stroke="#f59e0b" stroke-width="2" />
  <line x1="98" y1="171" x2="107" y2="179" stroke="#f59e0b" stroke-width="2" />
  <line x1="98" y1="79" x2="107" y2="71" stroke="#f59e0b" stroke-width="2" />

  <!-- Đỉnh -->
  <text x="160" y="17" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle">A</text>
  <text x="283" y="130" fill="#f8fafc" font-size="15" font-weight="bold">B</text>
  <text x="160" y="243" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle">C</text>
  <text x="28" y="130" fill="#f8fafc" font-size="15" font-weight="bold">D</text>

  <!-- Nhãn độ dài m, n -->
  <text x="168" y="65" fill="#38bdf8" font-size="12" font-weight="bold">m</text>
  <text x="225" y="120" fill="#38bdf8" font-size="12" font-weight="bold">n</text>
</svg>`,
        },
      ],
    },
    {
      index: "3",
      title: "Hình bình hành (Parallelogram)",
      points: [
        "**Định nghĩa & Yếu tố cơ bản:** Hình bình hành $ABCD$ có:\n- Bốn đỉnh: $A, B, C, D$.\n- Hai cặp cạnh đối diện song song và bằng nhau: $AB \\parallel CD, AB = CD = a$; $AD \\parallel BC, AD = BC = b$.\n- Hai cặp góc đối diện bằng nhau: $\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$.\n- Hai đường chéo cắt nhau tại trung điểm của mỗi đường: $AC$ và $BD$ cắt nhau tại $O$ thì $OA = OC, OB = OD$.",
        "**Công thức chu vi và diện tích:**\n- Chu vi: $C = 2(a + b)$.\n- Diện tích: $S = a \\cdot h$ (với $h$ là độ dài đường cao tương ứng với cạnh đáy $a$).",
        "**Hình ảnh thực tế:** Khung giàn mái nhà xưởng, thanh lan can cầu thang dốc, tay vịn thang cuốn ở siêu thị, thanh xếp cửa kéo.",
      ],
      formula: "C = 2(a + b), \\quad S = a \\cdot h",
      exampleTitle: "Ví dụ 3 (Tính chu vi và nhận biết cạnh hình bình hành)",
      exampleProblem: "Một mảnh đất hình bình hành $ABCD$ có độ dài cạnh $AB = 12\\text{ m}$ và cạnh $BC = 8\\text{ m}$.\na) Hãy nêu độ dài các cạnh $CD$ và $DA$.\nb) Tính chu vi của mảnh đất hình bình hành đó.",
      exampleSolution: "a) Trong hình bình hành, các cạnh đối diện bằng nhau nên:\n$CD = AB = 12\\text{ m}$ và $DA = BC = 8\\text{ m}$.\n\nb) Chu vi của mảnh đất hình bình hành là:\n$C = 2 \\cdot (AB + BC) = 2 \\cdot (12 + 8) = 2 \\cdot 20 = 40\\text{ m}$.",
      examples: [
        {
          title: "Hình vẽ chuẩn toán học: Hình bình hành ABCD",
          problem: "Minh họa hình bình hành $ABCD$ với hai đường chéo cắt nhau tại trung điểm $O$ và đường cao $h$:",
          solution: "Hình bình hành $ABCD$ có $AB \\parallel CD, AD \\parallel BC$; các cạnh đối bằng nhau; hai đường chéo $AC, BD$ cắt nhau tại trung điểm $O$ và đường cao $AH = h$.",
          svgDiagram: `<svg viewBox="0 0 330 230" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình bình hành ABCD: A(100, 45), B(280, 45), C(230, 185), D(50, 185) -->
  <polygon points="100,45 280,45 230,185 50,185" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round" />

  <!-- Hai đường chéo AC và BD -->
  <line x1="100" y1="45" x2="230" y2="185" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3" />
  <line x1="280" y1="45" x2="50" y2="185" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3" />

  <!-- Đường cao AH hạ từ A(100, 45) vuông góc CD(50, 185 -> 230, 185): chân H tại (100, 185) -->
  <line x1="100" y1="45" x2="100" y2="185" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="3 3" />
  <rect x="100" y="171" width="12" height="12" fill="none" stroke="#f43f5e" stroke-width="1.5" />
  <text x="100" y="202" fill="#f43f5e" font-size="13" font-weight="bold" text-anchor="middle">H</text>
  <text x="84" y="120" fill="#f43f5e" font-size="13" font-weight="bold">h</text>

  <!-- Tâm O (165, 115) -->
  <circle cx="165" cy="115" r="3.5" fill="#facc15" />
  <text x="175" y="110" fill="#facc15" font-size="13" font-weight="bold">O</text>

  <!-- Đỉnh -->
  <text x="86" y="40" fill="#f8fafc" font-size="15" font-weight="bold">A</text>
  <text x="288" y="45" fill="#f8fafc" font-size="15" font-weight="bold">B</text>
  <text x="238" y="200" fill="#f8fafc" font-size="15" font-weight="bold">C</text>
  <text x="35" y="200" fill="#f8fafc" font-size="15" font-weight="bold">D</text>

  <!-- Cạnh đáy a và cạnh bên b -->
  <text x="190" y="35" fill="#10b981" font-size="13" font-weight="bold">a (đáy)</text>
  <text x="48" y="110" fill="#10b981" font-size="13" font-weight="bold">b</text>
</svg>`,
        },
      ],
    },
    {
      index: "4",
      title: "Hình thang cân (Isosceles Trapezoid)",
      points: [
        "**Định nghĩa & Yếu tố cơ bản:** Hình thang cân $ABCD$ có:\n- Hai cạnh đáy song song: $AB \\parallel CD$ (cạnh $AB$ gọi là đáy nhỏ, $CD$ gọi là đáy lớn).\n- Hai cạnh bên bằng nhau: $AD = BC$.\n- Hai góc kề một đáy bằng nhau: góc đỉnh $A$ bằng góc đỉnh $B$ ($\\widehat{A} = \\widehat{B}$); góc đỉnh $C$ bằng góc đỉnh $D$ ($\\widehat{C} = \\widehat{D}$).\n- Hai đường chéo bằng nhau: $AC = BD$.",
        "**Công thức chu vi:** Chu vi của hình thang cân bằng tổng độ dài $4$ cạnh: $C = a + b + c + d = AB + CD + 2 \\cdot AD$.",
        "**Chú ý phân biệt:**\n- Trong hình thang cân, chỉ có hai cạnh đáy song song, hai cạnh bên KHÔNG song song.\n- Hai đường chéo của hình thang cân bằng nhau nhưng KHÔNG cắt nhau tại trung điểm của mỗi đường.",
        "**Hình ảnh thực tế:** Chiếc thang gấp chữ A, chậu gốm trồng hoa hình thang cân, mặt cắt ngang của bờ mương hoặc con đê thoát nước.",
      ],
      formula: "C = a + b + 2c \\quad (a, b \\text{ là hai đáy, } c \\text{ là cạnh bên})",
      exampleTitle: "Ví dụ 4 (Tính cạnh bên và đường chéo hình thang cân)",
      exampleProblem: "Cho hình thang cân $ABCD$ với hai đáy là $AB$ và $CD$.\nBiết đáy $AB = 6\\text{ cm}$, đáy $CD = 14\\text{ cm}$, cạnh bên $AD = 5\\text{ cm}$ và đường chéo $AC = 12\\text{ cm}$.\na) Tính độ dài cạnh bên $BC$ và đường chéo $BD$.\nb) Tính chu vi của hình thang cân $ABCD$.",
      exampleSolution: "a) Trong hình thang cân, hai cạnh bên bằng nhau và hai đường chéo bằng nhau nên:\n$BC = AD = 5\\text{ cm}$ và $BD = AC = 12\\text{ cm}$.\n\nb) Chu vi hình thang cân $ABCD$ là:\n$C = AB + CD + AD + BC = 6 + 14 + 5 + 5 = 30\\text{ cm}$.",
      examples: [
        {
          title: "Hình vẽ chuẩn toán học: Hình thang cân ABCD",
          problem: "Minh họa hình thang cân $ABCD$ với $AB \\parallel CD$, hai cạnh bên bằng nhau và hai đường chéo bằng nhau:",
          solution: "Hình thang cân $ABCD$ có hai đáy $AB \\parallel CD$, hai cạnh bên $AD = BC$, hai góc kề đáy lớn $\\widehat{C} = \\widehat{D}$ và hai đường chéo $AC = BD$.",
          svgDiagram: `<svg viewBox="0 0 320 230" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình thang cân ABCD: A(100, 50), B(220, 50), C(270, 185), D(50, 185) -->
  <polygon points="100,50 220,50 270,185 50,185" fill="#a855f7" fill-opacity="0.12" stroke="#c084fc" stroke-width="2.5" stroke-linejoin="round" />

  <!-- Hai đường chéo AC và BD -->
  <line x1="100" y1="50" x2="270" y2="185" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3" />
  <line x1="220" y1="50" x2="50" y2="185" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3" />

  <!-- Ký hiệu hai cạnh bên bằng nhau AD và BC -->
  <line x1="71" y1="113" x2="79" y2="122" stroke="#c084fc" stroke-width="2" />
  <line x1="241" y1="122" x2="249" y2="113" stroke="#c084fc" stroke-width="2" />

  <!-- Cung đo hai góc kề đáy lớn bằng nhau tại C và D -->
  <path d="M 75,185 A 25,25 0 0,0 65,163" fill="none" stroke="#fbbf24" stroke-width="2" />
  <path d="M 245,163 A 25,25 0 0,0 255,185" fill="none" stroke="#fbbf24" stroke-width="2" />

  <!-- Đỉnh -->
  <text x="92" y="42" fill="#f8fafc" font-size="15" font-weight="bold">A</text>
  <text x="225" y="42" fill="#f8fafc" font-size="15" font-weight="bold">B</text>
  <text x="278" y="198" fill="#f8fafc" font-size="15" font-weight="bold">C</text>
  <text x="35" y="198" fill="#f8fafc" font-size="15" font-weight="bold">D</text>

  <!-- Nhãn đáy nhỏ a, đáy lớn b, cạnh bên c -->
  <text x="160" y="42" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">đáy nhỏ (a)</text>
  <text x="160" y="208" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">đáy lớn (b)</text>
  <text x="50" y="115" fill="#c084fc" font-size="12" font-weight="bold">c</text>
  <text x="260" y="115" fill="#c084fc" font-size="12" font-weight="bold">c</text>
</svg>`,
        },
      ],
    },
  ],

  // MỤC 1: 10 CÂU TRẮC NGHIỆM CỐT LÕI (MỤC BÀI TẬP)
  quizQuestions: [
    {
      id: "t6-b19-q1",
      badge: "Bài tập 1",
      question: "Khẳng định nào sau đây là SAI khi nói về hình chữ nhật?",
      options: [
        "Bốn cạnh của hình chữ nhật có độ dài bằng nhau",
        "Bốn góc ở các đỉnh bằng nhau và bằng $90^\\circ$",
        "Các cặp cạnh đối diện song song và bằng nhau",
        "Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường"
      ],
      correctIndex: 0,
      explanation: "Trong hình chữ nhật chỉ có các cặp cạnh đối diện bằng nhau chứ không phải cả 4 cạnh đều bằng nhau (tứ giác có 4 cạnh bằng nhau là hình thoi hoặc hình vuông)."
    },
    {
      id: "t6-b19-q2",
      badge: "Bài tập 2",
      question: "Trong một hình thoi, hai đường chéo có đặc điểm nào sau đây?",
      options: [
        "Vuông góc với nhau tại trung điểm của mỗi đường",
        "Bằng nhau và song song với nhau",
        "Có độ dài bằng nhau và không vuông góc",
        "Chỉ cắt nhau chứ không vuông góc và không đi qua trung điểm"
      ],
      correctIndex: 0,
      explanation: "Tính chất cơ bản của hình thoi: Hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường."
    },
    {
      id: "t6-b19-q3",
      badge: "Bài tập 3",
      question: "Điền cụm từ thích hợp vào chỗ trống: \"Trong hình bình hành, hai đường chéo ...\"",
      options: [
        "cắt nhau tại trung điểm của mỗi đường",
        "vuông góc với nhau",
        "có độ dài luôn bằng nhau",
        "song song với nhau"
      ],
      correctIndex: 0,
      explanation: "Trong hình bình hành, hai đường chéo cắt nhau tại trung điểm của mỗi đường."
    },
    {
      id: "t6-b19-q4",
      badge: "Bài tập 4",
      question: "Hình thang cân $ABCD$ ($AB \\parallel CD$) có đặc điểm nào sau đây?",
      options: [
        "Hai cạnh bên bằng nhau và hai đường chéo bằng nhau",
        "Hai cạnh bên song song với nhau",
        "Bốn cạnh có độ dài bằng nhau",
        "Hai đường chéo vuông góc với nhau tại trung điểm"
      ],
      correctIndex: 0,
      explanation: "Hình thang cân có hai cạnh đáy song song, hai cạnh bên bằng nhau ($AD = BC$), hai góc kề một đáy bằng nhau và hai đường chéo bằng nhau ($AC = BD$)."
    },
    {
      id: "t6-b19-q5",
      badge: "Bài tập 5",
      question: "Cho hình chữ nhật $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Biết $OA = 5\\text{ cm}$. Độ dài đường chéo $BD$ là:",
      options: [
        "$10\\text{ cm}$",
        "$5\\text{ cm}$",
        "$15\\text{ cm}$",
        "$20\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường. Do đó $BD = AC = 2 \\cdot OA = 2 \\cdot 5 = 10\\text{ cm}$."
    },
    {
      id: "t6-b19-q6",
      badge: "Bài tập 6",
      question: "Cho hình bình hành $ABCD$ có $AB = 8\\text{ cm}$ và $BC = 5\\text{ cm}$. Chu vi của hình bình hành đó là:",
      options: [
        "$26\\text{ cm}$",
        "$13\\text{ cm}$",
        "$40\\text{ cm}$",
        "$20\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi của hình bình hành là: $C = 2 \\cdot (AB + BC) = 2 \\cdot (8 + 5) = 2 \\cdot 13 = 26\\text{ cm}$."
    },
    {
      id: "t6-b19-q7",
      badge: "Bài tập 7",
      question: "Một cánh diều hình thoi có cạnh dài $30\\text{ cm}$. Người ta dùng dây dù viền xung quanh $4$ cạnh của con diều. Chiều dài dây dù cần dùng là:",
      options: [
        "$120\\text{ cm}$",
        "$60\\text{ cm}$",
        "$90\\text{ cm}$",
        "$150\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Hình thoi có 4 cạnh bằng nhau nên chu vi là: $C = 4 \\cdot 30 = 120\\text{ cm}$."
    },
    {
      id: "t6-b19-q8",
      badge: "Bài tập 8",
      question: "Cho hình thang cân $ABCD$ có hai đáy $AB \\parallel CD$. Biết cạnh bên $AD = 7\\text{ cm}$ và đường chéo $AC = 11\\text{ cm}$. Độ dài cạnh bên $BC$ và đường chéo $BD$ lần lượt là:",
      options: [
        "$BC = 7\\text{ cm}$ và $BD = 11\\text{ cm}$",
        "$BC = 11\\text{ cm}$ và $BD = 7\\text{ cm}$",
        "$BC = 14\\text{ cm}$ và $BD = 22\\text{ cm}$",
        "$BC = 7\\text{ cm}$ và $BD = 14\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Trong hình thang cân, hai cạnh bên bằng nhau ($BC = AD = 7\\text{ cm}$) và hai đường chéo bằng nhau ($BD = AC = 11\\text{ cm}$)."
    },
    {
      id: "t6-b19-q9",
      badge: "Bài tập 9",
      question: "Một mảnh vườn hình chữ nhật có chiều dài gấp đôi chiều rộng. Biết chiều rộng là $15\\text{ m}$. Chu vi của mảnh vườn đó là:",
      options: [
        "$90\\text{ m}$",
        "$45\\text{ m}$",
        "$60\\text{ m}$",
        "$120\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Chiều dài mảnh vườn là: $15 \\cdot 2 = 30\\text{ m}$. Chu vi mảnh vườn là: $C = 2 \\cdot (30 + 15) = 2 \\cdot 45 = 90\\text{ m}$."
    },
    {
      id: "t6-b19-q10",
      badge: "Bài tập 10",
      question: "Trong các hình gồm: Hình chữ nhật, hình thoi, hình bình hành và hình thang cân, hình nào luôn có bốn góc vuông?",
      options: [
        "Hình chữ nhật",
        "Hình thoi",
        "Hình bình hành",
        "Hình thang cân"
      ],
      correctIndex: 0,
      explanation: "Trong các hình trên, chỉ có hình chữ nhật là tứ giác luôn có 4 góc bằng nhau và bằng góc vuông ($90^\\circ$)."
    }
  ],

  // MỤC 2: 10 CÂU TRẮC NGHIỆM TỰ LUYỆN (MỤC LUYỆN THÊM)
  practiceQuestions: [
    {
      id: "t6-b19-p1",
      badge: "Luyện thêm 1",
      question: "Khẳng định nào sau đây là SAI khi nói về hình thang cân?",
      options: [
        "Hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường",
        "Hai cạnh đáy song song với nhau",
        "Hai cạnh bên có độ dài bằng nhau",
        "Hai góc kề một đáy có số đo bằng nhau"
      ],
      correctIndex: 0,
      explanation: "Trong hình thang cân hai đường chéo chỉ bằng nhau chứ không vuông góc và không cắt nhau tại trung điểm của mỗi đường."
    },
    {
      id: "t6-b19-p2",
      badge: "Luyện thêm 2",
      question: "Cho hình thoi $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Số đo của góc $\\widehat{AOB}$ là:",
      options: [
        "$90^\\circ$",
        "$60^\\circ$",
        "$120^\\circ$",
        "$45^\\circ$"
      ],
      correctIndex: 0,
      explanation: "Hai đường chéo của hình thoi vuông góc với nhau tại giao điểm $O$, do đó $\\widehat{AOB} = 90^\\circ$ (góc vuông)."
    },
    {
      id: "t6-b19-p3",
      badge: "Luyện thêm 3",
      question: "Cho hình bình hành $ABCD$ có góc $\\widehat{A} = 75^\\circ$. Số đo của góc đối diện $\\widehat{C}$ là:",
      options: [
        "$75^\\circ$",
        "$105^\\circ$",
        "$90^\\circ$",
        "$150^\\circ$"
      ],
      correctIndex: 0,
      explanation: "Trong hình bình hành, hai góc đối diện luôn bằng nhau, do đó $\\widehat{C} = \\widehat{A} = 75^\\circ$."
    },
    {
      id: "t6-b19-p4",
      badge: "Luyện thêm 4",
      question: "Nhà bạn An có một thửa ruộng hình chữ nhật có chiều rộng là $25\\text{ m}$ và chiều dài là $40\\text{ m}$. Bác nông dân cần đắp bờ bao xung quanh thửa ruộng. Chiều dài bờ cần đắp là:",
      options: [
        "$130\\text{ m}$",
        "$65\\text{ m}$",
        "$100\\text{ m}$",
        "$150\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Chiều dài bờ bao xung quanh thửa ruộng bằng chu vi thửa ruộng: $C = 2 \\cdot (40 + 25) = 2 \\cdot 65 = 130\\text{ m}$."
    },
    {
      id: "t6-b19-p5",
      badge: "Luyện thêm 5",
      question: "Bạn Hoa có một đoạn dây thép dài $48\\text{ cm}$. Hoa uốn sợi dây thành một hình thoi. Độ dài mỗi cạnh của hình thoi tạo thành là:",
      options: [
        "$12\\text{ cm}$",
        "$24\\text{ cm}$",
        "$16\\text{ cm}$",
        "$8\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài đoạn dây thép chính là chu vi hình thoi. Cạnh hình thoi là: $a = 48 : 4 = 12\\text{ cm}$."
    },
    {
      id: "t6-b19-p6",
      badge: "Luyện thêm 6",
      question: "Hình thang cân $MNPQ$ ($MN \\parallel PQ$) có góc đỉnh $P$ bằng $60^\\circ$. Số đo góc đỉnh $Q$ (cùng kề đáy lớn $PQ$) là:",
      options: [
        "$60^\\circ$",
        "$120^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$"
      ],
      correctIndex: 0,
      explanation: "Trong hình thang cân, hai góc kề một đáy bằng nhau. Vì $\\widehat{P}$ và $\\widehat{Q}$ cùng kề đáy $PQ$ nên $\\widehat{Q} = \\widehat{P} = 60^\\circ$."
    },
    {
      id: "t6-b19-p7",
      badge: "Luyện thêm 7",
      question: "Hình bình hành $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Biết $AC = 16\\text{ cm}$ và $BD = 12\\text{ cm}$. Độ dài của các đoạn thẳng $OA$ và $OB$ lần lượt là:",
      options: [
        "$OA = 8\\text{ cm}$ và $OB = 6\\text{ cm}$",
        "$OA = 16\\text{ cm}$ và $OB = 12\\text{ cm}$",
        "$OA = 6\\text{ cm}$ và $OB = 8\\text{ cm}$",
        "$OA = 4\\text{ cm}$ và $OB = 3\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Vì hai đường chéo của hình bình hành cắt nhau tại trung điểm của mỗi đường nên: $OA = AC : 2 = 16 : 2 = 8\\text{ cm}$ và $OB = BD : 2 = 12 : 2 = 6\\text{ cm}$."
    },
    {
      id: "t6-b19-p8",
      badge: "Luyện thêm 8",
      question: "Một chiếc khung cửa sổ bằng gỗ hình chữ nhật có chiều dài $1,5\\text{ m}$ và chiều rộng $0,8\\text{ m}$. Chu vi của chiếc khung cửa sổ đó là:",
      options: [
        "$4,6\\text{ m}$",
        "$2,3\\text{ m}$",
        "$3,2\\text{ m}$",
        "$5,0\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi của khung cửa sổ hình chữ nhật là: $C = 2 \\cdot (1,5 + 0,8) = 2 \\cdot 2,3 = 4,6\\text{ m}$."
    },
    {
      id: "t6-b19-p9",
      badge: "Luyện thêm 9",
      question: "Cho hình thoi có chu vi bằng $68\\text{ cm}$. Độ dài một cạnh của hình thoi đó là:",
      options: [
        "$17\\text{ cm}$",
        "$34\\text{ cm}$",
        "$16\\text{ cm}$",
        "$20\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài cạnh của hình thoi là: $a = 68 : 4 = 17\\text{ cm}$."
    },
    {
      id: "t6-b19-p10",
      badge: "Luyện thêm 10",
      question: "Một chiếc thang xếp chữ A khi mở ra, các bậc thang song song với mặt đất và hai thanh giằng hai bên tạo thành các hình có dạng gì?",
      options: [
        "Hình thang cân",
        "Hình bình hành",
        "Hình thoi",
        "Hình chữ nhật"
      ],
      correctIndex: 0,
      explanation: "Các bậc thang song song nhau đóng vai trò là hai đáy, hai thanh chống nghiêng đều nhau đóng vai trò là hai cạnh bên bằng nhau, tạo thành các hình thang cân."
    }
  ],

  // MỤC 3: 4 CÂU ĐÚNG / SAI (16 Ý A-B-C-D THEO MA TRẬN 2025)
  trueFalseQuestions: [
    {
      id: "t6-b19-tf1",
      badge: "Câu hỏi Đúng/Sai 1",
      prompt: "Xét tính Đúng hoặc Sai của các khẳng định về cạnh và góc của các tứ giác sau:",
      subItems: [
        {
          id: "a",
          text: "Trong hình chữ nhật, bốn góc ở các đỉnh luôn bằng nhau và bằng $90^\\circ$.",
          correctAnswer: true,
          explanation: "Đúng, định nghĩa hình chữ nhật là tứ giác có 4 góc vuông."
        },
        {
          id: "b",
          text: "Trong hình thoi, cả bốn cạnh đều có độ dài bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, định nghĩa hình thoi là tứ giác có 4 cạnh bằng nhau."
        },
        {
          id: "c",
          text: "Trong hình bình hành, hai góc đối diện có số đo khác nhau.",
          correctAnswer: false,
          explanation: "Sai, trong hình bình hành các góc đối diện luôn bằng nhau."
        },
        {
          id: "d",
          text: "Trong hình thang cân, hai cạnh bên luôn song song với nhau.",
          correctAnswer: false,
          explanation: "Sai, trong hình thang cân chỉ có hai cạnh đáy song song, hai cạnh bên cắt nhau nếu kéo dài."
        }
      ]
    },
    {
      id: "t6-b19-tf2",
      badge: "Câu hỏi Đúng/Sai 2",
      prompt: "Xét tính Đúng hoặc Sai của các khẳng định về đường chéo của các hình sau:",
      subItems: [
        {
          id: "a",
          text: "Hai đường chéo của hình chữ nhật có độ dài bằng nhau và cắt nhau tại trung điểm của mỗi đường.",
          correctAnswer: true,
          explanation: "Đúng, đây là tính chất đặc trưng của đường chéo hình chữ nhật."
        },
        {
          id: "b",
          text: "Hai đường chéo của hình thoi luôn vuông góc với nhau tại trung điểm của mỗi đường.",
          correctAnswer: true,
          explanation: "Đúng, đây là tính chất đặc trưng của đường chéo hình thoi."
        },
        {
          id: "c",
          text: "Hai đường chéo của hình bình hành luôn có độ dài bằng nhau.",
          correctAnswer: false,
          explanation: "Sai, đường chéo của hình bình hành nói chung có độ dài khác nhau, chúng chỉ cắt nhau tại trung điểm."
        },
        {
          id: "d",
          text: "Hai đường chéo của hình thang cân luôn có độ dài bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, tính chất quan trọng của hình thang cân là hai đường chéo bằng nhau."
        }
      ]
    },
    {
      id: "t6-b19-tf3",
      badge: "Câu hỏi Đúng/Sai 3",
      prompt: "Xét tính Đúng hoặc Sai của các bài toán tính toán kích thước sau:",
      subItems: [
        {
          id: "a",
          text: "Một mảnh vườn hình chữ nhật có chiều dài $20\\text{ m}$ và chiều rộng $12\\text{ m}$ thì chu vi là $64\\text{ m}$.",
          correctAnswer: true,
          explanation: "Đúng, chu vi là $C = 2 \\cdot (20 + 12) = 64\\text{ m}$."
        },
        {
          id: "b",
          text: "Một khung sắt hình thoi có cạnh $25\\text{ cm}$ thì tổng chiều dài các thanh sắt làm khung là $100\\text{ cm}$.",
          correctAnswer: true,
          explanation: "Đúng, tổng độ dài 4 cạnh là $4 \\cdot 25 = 100\\text{ cm}$."
        },
        {
          id: "c",
          text: "Hình bình hành $ABCD$ có $AB = 10\\text{ cm}, BC = 6\\text{ cm}$ thì chu vi của nó là $16\\text{ cm}$.",
          correctAnswer: false,
          explanation: "Sai, chu vi phải là $2 \\cdot (10 + 6) = 32\\text{ cm}$, chứ không phải nửa chu vi $16\\text{ cm}$."
        },
        {
          id: "d",
          text: "Hình thang cân $ABCD$ có đáy $AB = 5\\text{ cm}, CD = 11\\text{ cm}$ và cạnh bên $AD = 4\\text{ cm}$ thì chu vi là $24\\text{ cm}$.",
          correctAnswer: true,
          explanation: "Đúng, chu vi hình thang cân là $C = 5 + 11 + 4 + 4 = 24\\text{ cm}$."
        }
      ]
    },
    {
      id: "t6-b19-tf4",
      badge: "Câu hỏi Đúng/Sai 4",
      prompt: "Xét tính Đúng hoặc Sai của các khẳng định liên hệ thực tế sau:",
      subItems: [
        {
          id: "a",
          text: "Khung của chiếc bảng viết trong lớp học thường có dạng hình chữ nhật.",
          correctAnswer: true,
          explanation: "Đúng, bảng lớp học tiêu chuẩn có dạng hình chữ nhật."
        },
        {
          id: "b",
          text: "Mặt chiếc trống đồng Đông Sơn có viền ngoài là hình bình hành.",
          correctAnswer: false,
          explanation: "Sai, mặt trống đồng Đông Sơn có dạng hình tròn."
        },
        {
          id: "c",
          text: "Thanh xếp chéo của cánh cửa sắt kéo tạo thành các mắt lưới có dạng hình thoi.",
          correctAnswer: true,
          explanation: "Đúng, các thanh chéo của cửa xếp co giãn tạo thành các ô hình thoi."
        },
        {
          id: "d",
          text: "Mặt cắt ngang của một chiếc chậu hoa cảnh có hai cạnh đáy song song và hai cạnh bên nghiêng đều nhau là hình thang cân.",
          correctAnswer: true,
          explanation: "Đúng, đó là hình ảnh thực tế điển hình của hình thang cân."
        }
      ]
    }
  ],

  // MỤC 4: 6 CÂU TRẢ LỜI NGẮN (ĐIỀN SỐ HỌC CHÍNH XÁC)
  shortAnswerQuestions: [
    {
      id: "t6-b19-sa1",
      badge: "Trả lời ngắn 1",
      prompt: "Một hình bình hành có chu vi bằng $36\\text{ cm}$, biết độ dài một cạnh là $10\\text{ cm}$. Hỏi độ dài cạnh kề còn lại của hình bình hành đó bằng bao nhiêu cm?",
      correctAnswer: "8",
      acceptableAnswers: ["8", "8 cm", "8cm"],
      explanation: "Nửa chu vi hình bình hành là: $36 : 2 = 18\\text{ cm}$. Độ dài cạnh kề còn lại là: $18 - 10 = 8\\text{ cm}$."
    },
    {
      id: "t6-b19-sa2",
      badge: "Trả lời ngắn 2",
      prompt: "Một con diều hình thoi có cạnh dài $15\\text{ cm}$. Chu vi của con diều hình thoi đó bằng bao nhiêu cm?",
      correctAnswer: "60",
      acceptableAnswers: ["60", "60 cm", "60cm"],
      explanation: "Chu vi con diều hình thoi là: $C = 4 \\cdot 15 = 60\\text{ cm}$."
    },
    {
      id: "t6-b19-sa3",
      badge: "Trả lời ngắn 3",
      prompt: "Cho hình chữ nhật $ABCD$ có đường chéo $AC = 18\\text{ cm}$. Hai đường chéo cắt nhau tại $O$. Độ dài đoạn thẳng $OD$ bằng bao nhiêu cm?",
      correctAnswer: "9",
      acceptableAnswers: ["9", "9 cm", "9cm"],
      explanation: "Vì hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường nên $BD = AC = 18\\text{ cm}$ và $OD = BD : 2 = 18 : 2 = 9\\text{ cm}$."
    },
    {
      id: "t6-b19-sa4",
      badge: "Trả lời ngắn 4",
      prompt: "Một mảnh vườn hình chữ nhật có chiều dài $35\\text{ m}$ và chiều rộng $20\\text{ m}$. Bác An làm hàng rào bao quanh vườn và chừa lại một lối đi làm cổng rộng $3\\text{ m}$. Chiều dài hàng rào bác An cần làm là bao nhiêu mét?",
      correctAnswer: "107",
      acceptableAnswers: ["107", "107 m", "107m"],
      explanation: "Chu vi mảnh vườn hình chữ nhật là: $2 \\cdot (35 + 20) = 110\\text{ m}$. Chiều dài hàng rào sau khi trừ cổng $3\\text{ m}$ là: $110 - 3 = 107\\text{ m}$."
    },
    {
      id: "t6-b19-sa5",
      badge: "Trả lời ngắn 5",
      prompt: "Một hình thang cân $ABCD$ có chu vi bằng $50\\text{ cm}$. Biết độ dài hai cạnh đáy lần lượt là $AB = 12\\text{ cm}$ và $CD = 18\\text{ cm}$. Độ dài cạnh bên $AD$ bằng bao nhiêu cm?",
      correctAnswer: "10",
      acceptableAnswers: ["10", "10 cm", "10cm"],
      explanation: "Tổng độ dài hai cạnh bên là: $50 - (12 + 18) = 20\\text{ cm}$. Vì hai cạnh bên của hình thang cân bằng nhau nên độ dài cạnh bên $AD$ là: $20 : 2 = 10\\text{ cm}$."
    },
    {
      id: "t6-b19-sa6",
      badge: "Trả lời ngắn 6",
      prompt: "Bác Nam có một đoạn dây kẽm dài $84\\text{ cm}$. Bác muốn uốn đoạn dây đó thành một hình thoi. Độ dài mỗi cạnh của hình thoi mà bác Nam tạo được bằng bao nhiêu cm?",
      correctAnswer: "21",
      acceptableAnswers: ["21", "21 cm", "21cm"],
      explanation: "Đoạn dây kẽm dài $84\\text{ cm}$ chính là chu vi hình thoi. Độ dài mỗi cạnh hình thoi là: $84 : 4 = 21\\text{ cm}$."
    }
  ]
};
