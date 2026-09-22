import type { DetailedLessonData } from "@/data/allGradesLessonsData";

/**
 * BÀI 18: TAM GIÁC ĐỀU. HÌNH VUÔNG. LỤC GIÁC ĐỀU - TOÁN 6
 * BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (TẬP 1)
 * ID: t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu
 * Đầy đủ: Lý thuyết + Hình vẽ SVG toán học + 10 câu TN Cốt lõi + 10 câu TN Luyện thêm + 4 câu Đúng/Sai (16 ý) + 6 câu Trả lời ngắn
 */
export const LESSON_18_DATA: DetailedLessonData = {
  id: "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu",
  lessonNumber: 18,
  title: "Bài 18: Tam giác đều. Hình vuông. Lục giác đều",
  bookChapter: "Chương IV: Một số hình phẳng trong thực tiễn",
  scenarioTitle: "Tình huống: Khám phá các hình phẳng đều trong tự nhiên và kiến trúc",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn An",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, khi quan sát biển báo giao thông nguy hiểm, nền sàn tòa nhà Quốc hội và các ô tổ ong mật, em thấy chúng đều có hình dáng rất cân đối và đẹp mắt. Đó là những hình gì và có đặc điểm hình học ra sao ạ?",
      visualGraphic: "box",
      mathNote: "C_{\\text{tam giác}} = 3a, \\ C_{\\text{vuông}} = 4a, \\ C_{\\text{lục giác}} = 6a",
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào An! Đó chính là tam giác đều, hình vuông và lục giác đều – ba hình phẳng đều quan trọng bậc nhất trong hình học và đời sống. Hôm nay chúng ta cùng khám phá các yếu tố đỉnh, cạnh, góc, đường chéo và cách tính chu vi, diện tích của chúng nhé!",
      visualGraphic: "graph",
      mathNote: "S_{\\text{vuông}} = a^2, \\ d_{\\text{lục giác}} = 2a",
    },
  ],
  theorySections: [
    {
      index: "1",
      title: "Tam giác đều (Equilateral Triangle)",
      points: [
        "**Định nghĩa & Yếu tố cơ bản:** Tam giác đều $ABC$ có:\n- Ba đỉnh: $A, B, C$.\n- Ba cạnh bằng nhau: $AB = BC = CA = a$.\n- Ba góc ở các đỉnh bằng nhau và mỗi góc đều bằng $60^\\circ$: $\\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ$.",
        "**Công thức chu vi:** Chu vi của tam giác đều cạnh $a$ bằng ba lần độ dài một cạnh: $C = 3a$.",
        "**Hình ảnh thực tế sinh động:**\n- Biển báo nguy hiểm giao thông đường bộ viền đỏ nền vàng (thường có cạnh $70\\text{ cm}$, chu vi $210\\text{ cm}$).\n- Khối Rubik biến thể (Pyraminx) là một khối tứ diện đều gồm $4$ mặt là $4$ tam giác đều bằng nhau.\n- Kệ gỗ treo tường tam giác đều trang trí phòng khách.",
      ],
      formula: "C = 3a \\quad (a \\text{ là độ dài cạnh tam giác đều})",
      exampleTitle: "Ví dụ 1 (Tính chu vi biển báo giao thông tam giác đều)",
      exampleProblem: "Một biển báo nguy hiểm giao thông đường bộ hình tam giác đều có độ dài cạnh bằng $70\\text{ cm}$.\na) Tính chu vi của biển báo giao thông đó.\nb) Nếu một biển báo tam giác đều khác có chu vi là $240\\text{ cm}$ thì độ dài mỗi cạnh của biển báo đó bằng bao nhiêu?",
      exampleSolution: "a) Chu vi của biển báo giao thông là:\n$C = 3 \\cdot 70 = 210\\text{ cm}$.\n\nb) Độ dài mỗi cạnh của biển báo có chu vi $240\\text{ cm}$ là:\n$a = 240 : 3 = 80\\text{ cm}$.",
      examples: [
        {
          title: "Hình vẽ chuẩn toán học: Tam giác đều ABC",
          problem: "Minh họa tam giác đều $ABC$ với ba cạnh bằng nhau và ba góc bằng $60^\\circ$:",
          solution: "Tam giác đều $ABC$ có: $AB = BC = CA = a$ (được đánh dấu bằng một vạch gạch ngang trên mỗi cạnh) và $\\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ$.",
          svgDiagram: `<svg viewBox="0 0 320 250" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Tam giác đều A(160, 35), B(60, 208), C(260, 208) -->
  <polygon points="160,35 60,208 260,208" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round" />
  
  <!-- Cung góc A (60 độ) -->
  <path d="M 148,56 A 25,25 0 0,0 172,56" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="160" y="75" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">60°</text>

  <!-- Cung góc B (60 độ) -->
  <path d="M 85,208 A 25,25 0 0,0 72,187" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="96" y="196" fill="#fbbf24" font-size="12" font-weight="bold">60°</text>

  <!-- Cung góc C (60 độ) -->
  <path d="M 248,187 A 25,25 0 0,0 235,208" fill="none" stroke="#fbbf24" stroke-width="2" />
  <text x="212" y="196" fill="#fbbf24" font-size="12" font-weight="bold">60°</text>

  <!-- Ký hiệu 3 cạnh bằng nhau: vạch chéo đơn ở giữa cạnh -->
  <!-- AB: giữa (110, 121.5) -->
  <line x1="104" y1="125" x2="116" y2="118" stroke="#f43f5e" stroke-width="2" />
  <!-- AC: giữa (210, 121.5) -->
  <line x1="204" y1="118" x2="216" y2="125" stroke="#f43f5e" stroke-width="2" />
  <!-- BC: giữa (160, 208) -->
  <line x1="160" y1="202" x2="160" y2="214" stroke="#f43f5e" stroke-width="2" />

  <!-- Tên đỉnh -->
  <text x="160" y="24" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">A</text>
  <text x="42" y="215" fill="#f8fafc" font-size="16" font-weight="bold">B</text>
  <text x="270" y="215" fill="#f8fafc" font-size="16" font-weight="bold">C</text>

  <!-- Độ dài cạnh a -->
  <text x="95" y="115" fill="#38bdf8" font-size="13" font-weight="bold">a</text>
  <text x="220" y="115" fill="#38bdf8" font-size="13" font-weight="bold">a</text>
  <text x="160" y="232" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">a</text>
</svg>`,
        },
      ],
    },
    {
      index: "2",
      title: "Hình vuông (Square)",
      points: [
        "**Định nghĩa & Yếu tố cơ bản:** Hình vuông $ABCD$ có:\n- Bốn đỉnh: $A, B, C, D$.\n- Bốn cạnh bằng nhau: $AB = BC = CD = DA = a$.\n- Bốn góc ở các đỉnh bằng nhau và bằng góc vuông ($90^\\circ$): $\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ$.\n- Hai đường chéo bằng nhau: $AC = BD$, cắt nhau tại trung điểm của mỗi đường và vuông góc với nhau tại tâm $O$.",
        "**Công thức chu vi và diện tích:**\n- Chu vi: $C = 4a$.\n- Diện tích: $S = a^2 = a \\cdot a$.",
        "**Hình ảnh thực tế sinh động:**\n- Nền tòa nhà Quốc hội Việt Nam tại Quảng trường Ba Đình (Hà Nội) là hình vuông cạnh $102\\text{ m}$.\n- Bàn cờ vua gồm $64$ ô vuông nhỏ xen kẽ hai màu trắng và đen ($8 \\times 8$ ô).\n- Chiếc bánh chưng ngày Tết có mặt hình vuông, thường được cắt thành $4$ hoặc $8$ phần đều nhau bằng lạt buộc.",
      ],
      formula: "C = 4a, \\quad S = a^2 \\quad (a \\text{ là độ dài cạnh hình vuông})",
      exampleTitle: "Ví dụ 2 (Tính chu vi và diện tích nền tòa nhà Quốc hội)",
      exampleProblem: "Mặt sàn tòa nhà Quốc hội Việt Nam là một hình vuông có độ dài cạnh $102\\text{ m}$.\na) Tính chu vi của mặt sàn tòa nhà Quốc hội.\nb) Tính diện tích mặt sàn tòa nhà Quốc hội.",
      exampleSolution: "a) Chu vi mặt sàn tòa nhà Quốc hội là:\n$C = 4 \\cdot 102 = 408\\text{ m}$.\n\nb) Diện tích mặt sàn tòa nhà Quốc hội là:\n$S = 102 \\cdot 102 = 10\\ 404\\text{ m}^2$.",
      examples: [
        {
          title: "Hình vẽ chuẩn toán học: Hình vuông ABCD",
          problem: "Minh họa hình vuông $ABCD$ với $4$ góc vuông, $4$ cạnh bằng nhau và $2$ đường chéo vuông góc tại tâm $O$:",
          solution: "Hình vuông $ABCD$ có $4$ cạnh bằng nhau ($AB = BC = CD = DA = a$), $4$ góc vuông $90^\\circ$ và hai đường chéo $AC, BD$ bằng nhau, vuông góc tại tâm $O$.",
          svgDiagram: `<svg viewBox="0 0 320 250" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình vuông ABCD: A(80, 45), B(240, 45), C(240, 205), D(80, 205) -->
  <polygon points="80,45 240,45 240,205 80,205" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="2.5" />

  <!-- Hai đường chéo AC và BD -->
  <line x1="80" y1="45" x2="240" y2="205" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3" />
  <line x1="240" y1="45" x2="80" y2="205" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3" />

  <!-- Tâm O (160, 125) -->
  <circle cx="160" cy="125" r="3.5" fill="#facc15" />
  <text x="160" y="145" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">O</text>

  <!-- Ký hiệu 4 góc vuông -->
  <rect x="80" y="45" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />
  <rect x="226" y="45" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />
  <rect x="226" y="191" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />
  <rect x="80" y="191" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />

  <!-- Ký hiệu góc vuông tại tâm O -->
  <polygon points="160,115 167,120 160,125 153,120" fill="none" stroke="#f43f5e" stroke-width="1.2" />

  <!-- Ký hiệu 4 cạnh bằng nhau: hai vạch đôi song song -->
  <!-- AB -->
  <line x1="157" y1="40" x2="157" y2="50" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="163" y1="40" x2="163" y2="50" stroke="#38bdf8" stroke-width="1.8" />
  <!-- CD -->
  <line x1="157" y1="200" x2="157" y2="210" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="163" y1="200" x2="163" y2="210" stroke="#38bdf8" stroke-width="1.8" />
  <!-- AD -->
  <line x1="75" y1="122" x2="85" y2="122" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="75" y1="128" x2="85" y2="128" stroke="#38bdf8" stroke-width="1.8" />
  <!-- BC -->
  <line x1="235" y1="122" x2="245" y2="122" stroke="#38bdf8" stroke-width="1.8" />
  <line x1="235" y1="128" x2="245" y2="128" stroke="#38bdf8" stroke-width="1.8" />

  <!-- Tên các đỉnh -->
  <text x="64" y="40" fill="#f8fafc" font-size="15" font-weight="bold">A</text>
  <text x="248" y="40" fill="#f8fafc" font-size="15" font-weight="bold">B</text>
  <text x="248" y="220" fill="#f8fafc" font-size="15" font-weight="bold">C</text>
  <text x="64" y="220" fill="#f8fafc" font-size="15" font-weight="bold">D</text>

  <!-- Kích thước cạnh a -->
  <text x="160" y="32" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">a</text>
  <text x="255" y="130" fill="#10b981" font-size="13" font-weight="bold">a</text>
</svg>`,
        },
      ],
    },
    {
      index: "3",
      title: "Lục giác đều (Regular Hexagon)",
      points: [
        "**Định nghĩa & Yếu tố cơ bản:** Hình lục giác đều $ABCDEF$ có:\n- Sáu đỉnh: $A, B, C, D, E, F$.\n- Sáu cạnh bằng nhau: $AB = BC = CD = DE = EF = FA = a$.\n- Sáu góc ở các đỉnh bằng nhau và mỗi góc đều bằng $120^\\circ$.\n- Ba đường chéo chính: $AD, BE, CF$ bằng nhau và cùng cắt nhau tại trung điểm $O$ của mỗi đường.",
        "**Cấu trúc đối xứng & Ghép tam giác đều:**\n- Giao điểm $O$ chia lục giác đều thành $6$ tam giác đều nhỏ bằng nhau: $\\Delta OAB, \\Delta OBC, \\Delta OCD, \\Delta ODE, \\Delta OEF, \\Delta OFA$.\n- Mỗi đường chéo chính có độ dài gấp đôi cạnh lục giác đều: $d = 2a$.\n- Các cặp cạnh đối diện song song và bằng nhau: $AB \\parallel DE$, $BC \\parallel EF$, $CD \\parallel FA$.",
        "**Công thức chu vi:** Chu vi lục giác đều cạnh $a$ là $C = 6a$.",
        "**Hình ảnh thực tế sinh động:**\n- Cấu trúc tổ ong mật gồm hàng nghìn lỗ hình lục giác đều xếp khít nhau, tối ưu không gian chứa mật và tiết kiệm sáp nhất trong tự nhiên.\n- Gạch lát vỉa hè, viên gạch bông trang trí tổ ong.\n- Đai ốc, bu-lông, đầu khóa lục giác (khóa lục lăng).",
      ],
      formula: "C = 6a, \\quad d = 2a \\quad (a \\text{ là cạnh, } d \\text{ là đường chéo chính})",
      exampleTitle: "Ví dụ 3 (Tính chu vi và đường chéo chính của lục giác đều)",
      exampleProblem: "Cho hình lục giác đều $ABCDEF$ có cạnh bằng $4\\text{ cm}$.\na) Tính chu vi của hình lục giác đều đó.\nb) Tính độ dài các đường chéo chính $AD, BE, CF$.\nc) Lục giác đều này được ghép bởi bao nhiêu tam giác đều có cạnh $4\\text{ cm}$?",
      exampleSolution: "a) Chu vi hình lục giác đều là:\n$C = 6 \\cdot 4 = 24\\text{ cm}$.\n\nb) Độ dài mỗi đường chéo chính gấp đôi độ dài cạnh:\n$AD = BE = CF = 2 \\cdot 4 = 8\\text{ cm}$.\n\nc) Lục giác đều $ABCDEF$ được chia bởi $3$ đường chéo chính thành đúng $6$ tam giác đều bằng nhau có cạnh bằng $4\\text{ cm}$.",
      examples: [
        {
          title: "Hình vẽ chuẩn toán học: Lục giác đều ABCDEF tâm O",
          problem: "Minh họa lục giác đều $ABCDEF$ với tâm $O$ và $3$ đường chéo chính chia thành $6$ tam giác đều:",
          solution: "Lục giác đều $ABCDEF$ có $6$ cạnh bằng nhau, các góc ở đỉnh bằng $120^\\circ$ và $3$ đường chéo chính $AD, BE, CF$ cắt nhau tại tâm $O$, tạo thành $6$ tam giác đều nhỏ.",
          svgDiagram: `<svg viewBox="0 0 320 260" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Lục giác đều tâm O(160, 130), bán kính R = 90 -->
  <!-- A: (250, 130)  B: (205, 52)   C: (115, 52)   D: (70, 130)   E: (115, 208)   F: (205, 208) -->
  <polygon points="250,130 205,52 115,52 70,130 115,208 205,208" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round" />

  <!-- 3 đường chéo chính cắt nhau tại O: AD, BE, CF -->
  <line x1="250" y1="130" x2="70" y2="130" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3" />
  <line x1="205" y1="52" x2="115" y2="208" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3" />
  <line x1="115" y1="52" x2="205" y2="208" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3" />

  <!-- Tâm O -->
  <circle cx="160" cy="130" r="4" fill="#38bdf8" />
  <text x="160" y="148" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">O</text>

  <!-- Cung đo góc 120 độ tại đỉnh C -->
  <path d="M 100,60 A 20,20 0 0,0 128,68" fill="none" stroke="#ec4899" stroke-width="2" />
  <text x="110" y="85" fill="#ec4899" font-size="11" font-weight="bold">120°</text>

  <!-- Vạch bằng nhau ở 6 cạnh -->
  <line x1="225" y1="91" x2="230" y2="91" stroke="#f59e0b" stroke-width="2" />
  <line x1="160" y1="50" x2="160" y2="55" stroke="#f59e0b" stroke-width="2" />
  <line x1="90" y1="91" x2="95" y2="91" stroke="#f59e0b" stroke-width="2" />
  <line x1="90" y1="169" x2="95" y2="169" stroke="#f59e0b" stroke-width="2" />
  <line x1="160" y1="205" x2="160" y2="210" stroke="#f59e0b" stroke-width="2" />
  <line x1="225" y1="169" x2="230" y2="169" stroke="#f59e0b" stroke-width="2" />

  <!-- Tên các đỉnh: A, B, C, D, E, F -->
  <text x="262" y="135" fill="#f8fafc" font-size="15" font-weight="bold">A</text>
  <text x="212" y="44" fill="#f8fafc" font-size="15" font-weight="bold">B</text>
  <text x="96" y="44" fill="#f8fafc" font-size="15" font-weight="bold">C</text>
  <text x="50" y="135" fill="#f8fafc" font-size="15" font-weight="bold">D</text>
  <text x="96" y="226" fill="#f8fafc" font-size="15" font-weight="bold">E</text>
  <text x="212" y="226" fill="#f8fafc" font-size="15" font-weight="bold">F</text>

  <!-- Cạnh a -->
  <text x="160" y="44" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">a</text>
  <text x="205" y="120" fill="#38bdf8" font-size="12" font-weight="bold">R = a</text>
</svg>`,
        },
      ],
    },
    {
      index: "4",
      title: "Tổng kết & Kỹ năng nhận biết ba hình phẳng đều",
      points: [
        "**Bảng đối chiếu đặc điểm ba hình:**\n- **Tam giác đều:** $3$ đỉnh, $3$ cạnh bằng nhau, $3$ góc bằng $60^\\circ$, không có đường chéo, chu vi $C = 3a$.\n- **Hình vuông:** $4$ đỉnh, $4$ cạnh bằng nhau, $4$ góc vuông $90^\\circ$, $2$ đường chéo bằng nhau và vuông góc tại trung điểm, chu vi $C = 4a$, diện tích $S = a^2$.\n- **Lục giác đều:** $6$ đỉnh, $6$ cạnh bằng nhau, $6$ góc bằng $120^\\circ$, $3$ đường chéo chính bằng nhau ($d = 2a$) chia thành $6$ tam giác đều, chu vi $C = 6a$.",
        "**Kỹ năng thực hành & Cắt gấp giấy:**\n- Cắt tam giác đều từ mảnh giấy hình vuông bằng cách gấp đôi lấy trục đối xứng rồi gập hai góc vào trục.\n- Ghép $6$ tam giác đều có cùng kích thước cạnh sẽ tạo thành đúng một hình lục giác đều.\n- Chia bánh chưng hình vuông: dùng $2$ sợi lạt buộc nối trung điểm các cạnh đối để chia thành $4$ hình vuông nhỏ, hoặc đặt theo $2$ đường chéo để chia thành $4$ tam giác bằng nhau, hoặc kết hợp cả hai để được $8$ phần đều nhau.",
      ],
      formula: "a_{\\text{tam giác}} = \\frac{C}{3}, \\quad a_{\\text{vuông}} = \\frac{C}{4}, \\quad a_{\\text{lục giác}} = \\frac{C}{6}",
      exampleTitle: "Ví dụ 4 (So sánh cạnh ba hình có cùng chu vi)",
      exampleProblem: "Một sợi dây thép dài $72\\text{ cm}$ được uốn thành:\na) Một tam giác đều.\nb) Một hình vuông.\nc) Một hình lục giác đều.\nHãy tính độ dài cạnh của mỗi hình tạo thành và cho biết hình nào có cạnh dài nhất?",
      exampleSolution: "Độ dài cạnh của các hình khi uốn cùng một sợi dây chu vi $72\\text{ cm}$ là:\na) Cạnh của tam giác đều là: $a_1 = 72 : 3 = 24\\text{ cm}$.\nb) Cạnh của hình vuông là: $a_2 = 72 : 4 = 18\\text{ cm}$.\nc) Cạnh của hình lục giác đều là: $a_3 = 72 : 6 = 12\\text{ cm}$.\n\nSo sánh: Vì $24 > 18 > 12$ nên tam giác đều có cạnh dài nhất.",
    },
  ],

  // MỤC 1: 10 CÂU TRẮC NGHIỆM CỐT LÕI (MỤC BÀI TẬP)
  quizQuestions: [
    {
      id: "t6-b18-q1",
      badge: "Bài tập 1",
      question: "Trong một hình tam giác đều, khẳng định nào sau đây là ĐÚNG?",
      options: [
        "Ba cạnh bằng nhau và ba góc bằng $60^\\circ$",
        "Ba cạnh bằng nhau và ba góc bằng $90^\\circ$",
        "Hai cạnh bằng nhau và một góc bằng $60^\\circ$",
        "Ba cạnh có độ dài khác nhau và các góc bằng nhau"
      ],
      correctIndex: 0,
      explanation: "Định nghĩa tam giác đều: Tam giác đều có 3 cạnh bằng nhau và 3 góc ở các đỉnh bằng nhau, mỗi góc đều bằng $60^\\circ$."
    },
    {
      id: "t6-b18-q2",
      badge: "Bài tập 2",
      question: "Một tam giác đều có độ dài cạnh bằng $6\\text{ cm}$. Chu vi của tam giác đều đó là:",
      options: [
        "$18\\text{ cm}$",
        "$12\\text{ cm}$",
        "$24\\text{ cm}$",
        "$36\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi của tam giác đều cạnh $a = 6\\text{ cm}$ là: $C = 3a = 3 \\cdot 6 = 18\\text{ cm}$."
    },
    {
      id: "t6-b18-q3",
      badge: "Bài tập 3",
      question: "Hình vuông $ABCD$ có đặc điểm nào sau đây về đường chéo?",
      options: [
        "Hai đường chéo bằng nhau và vuông góc với nhau tại trung điểm của mỗi đường",
        "Hai đường chéo có độ dài khác nhau và cắt nhau tại trung điểm",
        "Hai đường chéo song song với nhau",
        "Hình vuông chỉ có một đường chéo duy nhất"
      ],
      correctIndex: 0,
      explanation: "Hình vuông có 2 đường chéo bằng nhau ($AC = BD$), cắt nhau tại trung điểm của mỗi đường và vuông góc với nhau."
    },
    {
      id: "t6-b18-q4",
      badge: "Bài tập 4",
      question: "Một hình vuông có cạnh dài $5\\text{ cm}$. Chu vi và diện tích của hình vuông đó lần lượt là:",
      options: [
        "$C = 20\\text{ cm}$ và $S = 25\\text{ cm}^2$",
        "$C = 25\\text{ cm}$ và $S = 20\\text{ cm}^2$",
        "$C = 10\\text{ cm}$ và $S = 25\\text{ cm}^2$",
        "$C = 20\\text{ cm}$ và $S = 10\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Chu vi hình vuông là $C = 4 \\cdot 5 = 20\\text{ cm}$. Diện tích hình vuông là $S = 5^2 = 25\\text{ cm}^2$."
    },
    {
      id: "t6-b18-q5",
      badge: "Bài tập 5",
      question: "Hình lục giác đều có tất cả bao nhiêu cạnh và bao nhiêu đường chéo chính?",
      options: [
        "$6$ cạnh và $3$ đường chéo chính",
        "$6$ cạnh và $6$ đường chéo chính",
        "$5$ cạnh và $3$ đường chéo chính",
        "$6$ cạnh và $2$ đường chéo chính"
      ],
      correctIndex: 0,
      explanation: "Hình lục giác đều có đúng 6 cạnh bằng nhau và có đúng 3 đường chéo chính nối các đỉnh đối diện, cùng cắt nhau tại tâm $O$."
    },
    {
      id: "t6-b18-q6",
      badge: "Bài tập 6",
      question: "Cho hình lục giác đều có cạnh bằng $3\\text{ cm}$. Độ dài mỗi đường chéo chính của hình lục giác đều đó là:",
      options: [
        "$6\\text{ cm}$",
        "$3\\text{ cm}$",
        "$9\\text{ cm}$",
        "$12\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Trong hình lục giác đều, độ dài của mỗi đường chéo chính gấp đôi độ dài cạnh: $d = 2a = 2 \\cdot 3 = 6\\text{ cm}$."
    },
    {
      id: "t6-b18-q7",
      badge: "Bài tập 7",
      question: "Chu vi của một hình lục giác đều có cạnh bằng $5\\text{ cm}$ là:",
      options: [
        "$30\\text{ cm}$",
        "$25\\text{ cm}$",
        "$15\\text{ cm}$",
        "$36\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi hình lục giác đều có cạnh $a = 5\\text{ cm}$ là: $C = 6a = 6 \\cdot 5 = 30\\text{ cm}$."
    },
    {
      id: "t6-b18-q8",
      badge: "Bài tập 8",
      question: "Trong thực tế, hình ảnh nào sau đây có dạng hình lục giác đều?",
      options: [
        "Mặt cắt miệng lỗ của tổ ong mật",
        "Mặt bàn cờ vua tiêu chuẩn",
        "Biển báo nguy hiểm giao thông đường bộ",
        "Mặt chiếc bánh chưng ngày Tết"
      ],
      correctIndex: 0,
      explanation: "Tổ ong mật có cấu trúc các ô hình lục giác đều xếp khít nhau. Bàn cờ vua và bánh chưng có dạng hình vuông; biển báo nguy hiểm có dạng hình tam giác đều."
    },
    {
      id: "t6-b18-q9",
      badge: "Bài tập 9",
      question: "Một hình vuông có diện tích bằng $36\\text{ cm}^2$. Chu vi của hình vuông đó là:",
      options: [
        "$24\\text{ cm}$",
        "$18\\text{ cm}$",
        "$12\\text{ cm}$",
        "$36\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Vì diện tích $S = a^2 = 36\\text{ cm}^2$ nên cạnh hình vuông là $a = 6\\text{ cm}$ (do $6^2 = 36$). Do đó chu vi hình vuông là $C = 4 \\cdot 6 = 24\\text{ cm}$."
    },
    {
      id: "t6-b18-q10",
      badge: "Bài tập 10",
      question: "Cho lục giác đều $ABCDEF$ có tâm $O$ (giao điểm của các đường chéo chính). Lục giác đều này được ghép bởi bao nhiêu tam giác đều có đỉnh chung là $O$?",
      options: [
        "$6$ tam giác đều",
        "$4$ tam giác đều",
        "$8$ tam giác đều",
        "$3$ tam giác đều"
      ],
      correctIndex: 0,
      explanation: "Ba đường chéo chính $AD, BE, CF$ cắt nhau tại tâm $O$ chia hình lục giác đều thành đúng 6 tam giác đều bằng nhau: $OAB, OBC, OCD, ODE, OEF, OFA$."
    }
  ],

  // MỤC 2: 10 CÂU TRẮC NGHIỆM TỰ LUYỆN (MỤC LUYỆN THÊM)
  practiceQuestions: [
    {
      id: "t6-b18-p1",
      badge: "Luyện thêm 1",
      question: "Một biển báo nguy hiểm giao thông hình tam giác đều có độ dài một cạnh là $70\\text{ cm}$. Chu vi của biển báo đó bằng bao nhiêu?",
      options: [
        "$210\\text{ cm}$",
        "$140\\text{ cm}$",
        "$280\\text{ cm}$",
        "$350\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi biển báo tam giác đều cạnh $70\\text{ cm}$ là: $C = 3 \\cdot 70 = 210\\text{ cm}$."
    },
    {
      id: "t6-b18-p2",
      badge: "Luyện thêm 2",
      question: "Một tam giác đều có chu vi bằng $27\\text{ cm}$. Độ dài mỗi cạnh của tam giác đều đó là:",
      options: [
        "$9\\text{ cm}$",
        "$6\\text{ cm}$",
        "$8\\text{ cm}$",
        "$12\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài cạnh của tam giác đều là: $a = C : 3 = 27 : 3 = 9\\text{ cm}$."
    },
    {
      id: "t6-b18-p3",
      badge: "Luyện thêm 3",
      question: "Khẳng định nào sau đây là SAI khi nói về hình lục giác đều $ABCDEF$?",
      options: [
        "Hình lục giác đều có đúng $6$ đường chéo chính",
        "Sáu cạnh có độ dài bằng nhau",
        "Sáu góc ở các đỉnh bằng nhau và bằng $120^\\circ$",
        "Các cặp cạnh đối diện song song và bằng nhau"
      ],
      correctIndex: 0,
      explanation: "Hình lục giác đều chỉ có đúng 3 đường chéo chính ($AD, BE, CF$). Khẳng định có 6 đường chéo chính là sai."
    },
    {
      id: "t6-b18-p4",
      badge: "Luyện thêm 4",
      question: "Một hình vuông có chu vi bằng $32\\text{ cm}$. Diện tích của hình vuông đó bằng bao nhiêu?",
      options: [
        "$64\\text{ cm}^2$",
        "$32\\text{ cm}^2$",
        "$16\\text{ cm}^2$",
        "$128\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Cạnh hình vuông là $a = 32 : 4 = 8\\text{ cm}$. Diện tích hình vuông là $S = a^2 = 8^2 = 64\\text{ cm}^2$."
    },
    {
      id: "t6-b18-p5",
      badge: "Luyện thêm 5",
      question: "Bàn cờ vua là một hình vuông gồm $64$ ô vuông nhỏ xếp thành $8$ hàng và $8$ cột. Biết mỗi ô vuông nhỏ có cạnh bằng $4\\text{ cm}$. Chu vi của toàn bộ bàn cờ vua là:",
      options: [
        "$128\\text{ cm}$",
        "$64\\text{ cm}$",
        "$256\\text{ cm}$",
        "$32\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Cạnh của bàn cờ vua gồm 8 ô vuông nên có độ dài là $8 \\cdot 4 = 32\\text{ cm}$. Chu vi của bàn cờ vua là $C = 4 \\cdot 32 = 128\\text{ cm}$."
    },
    {
      id: "t6-b18-p6",
      badge: "Luyện thêm 6",
      question: "Ghép $6$ tam giác đều bằng nhau có cạnh $4\\text{ cm}$ thành một hình lục giác đều. Chu vi của hình lục giác đều tạo thành là:",
      options: [
        "$24\\text{ cm}$",
        "$18\\text{ cm}$",
        "$36\\text{ cm}$",
        "$48\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Khi ghép 6 tam giác đều cạnh $4\\text{ cm}$ thành lục giác đều, mỗi cạnh của lục giác đều chính là cạnh của tam giác đều ($a = 4\\text{ cm}$). Chu vi lục giác đều là $C = 6 \\cdot 4 = 24\\text{ cm}$."
    },
    {
      id: "t6-b18-p7",
      badge: "Luyện thêm 7",
      question: "Một viên gạch lát nền hình lục giác đều có cạnh dài $20\\text{ cm}$. Chu vi của viên gạch lát nền đó là:",
      options: [
        "$120\\text{ cm}$",
        "$80\\text{ cm}$",
        "$60\\text{ cm}$",
        "$100\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi của viên gạch lục giác đều là $C = 6 \\cdot 20 = 120\\text{ cm}$."
    },
    {
      id: "t6-b18-p8",
      badge: "Luyện thêm 8",
      question: "Một mảnh đất hình vuông có diện tích là $100\\text{ m}^2$. Người ta muốn rào xung quanh khu đất và để lại lối đi làm cổng rộng $2\\text{ m}$. Chiều dài hàng rào cần làm là:",
      options: [
        "$38\\text{ m}$",
        "$40\\text{ m}$",
        "$36\\text{ m}$",
        "$98\\text{ m}$"
      ],
      correctIndex: 0,
      explanation: "Vì diện tích $S = a^2 = 100\\text{ m}^2$ nên cạnh mảnh đất là $a = 10\\text{ m}$. Chu vi toàn bộ mảnh đất là $C = 4 \\cdot 10 = 40\\text{ m}$. Chiều dài hàng rào sau khi trừ cửa $2\\text{ m}$ là: $40 - 2 = 38\\text{ m}$."
    },
    {
      id: "t6-b18-p9",
      badge: "Luyện thêm 9",
      question: "Trong một hình lục giác đều $ABCDEF$, các cạnh nào sau đây song song với nhau?",
      options: [
        "Cạnh $AB$ và cạnh $DE$",
        "Cạnh $AB$ và cạnh $BC$",
        "Cạnh $BC$ và cạnh $CD$",
        "Cạnh $CD$ và cạnh $DE$"
      ],
      correctIndex: 0,
      explanation: "Trong hình lục giác đều, các cặp cạnh đối diện luôn song song và bằng nhau: $AB \\parallel DE$, $BC \\parallel EF$, $CD \\parallel FA$."
    },
    {
      id: "t6-b18-p10",
      badge: "Luyện thêm 10",
      question: "Một hình tam giác đều lớn được chia thành $4$ tam giác đều nhỏ bằng nhau. Trong hình vẽ đó có tất cả bao nhiêu hình tam giác đều?",
      options: [
        "$5$ tam giác đều",
        "$4$ tam giác đều",
        "$6$ tam giác đều",
        "$3$ tam giác đều"
      ],
      correctIndex: 0,
      explanation: "Hình có tất cả 4 tam giác đều nhỏ và 1 tam giác đều lớn bao quanh. Tổng cộng có $4 + 1 = 5$ tam giác đều.",
      svgDiagram: `<svg viewBox="0 0 300 240" class="w-full max-w-xs sm:max-w-sm mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Tam giác lớn: A(150, 25), B(50, 205), C(250, 205) -->
  <polygon points="150,25 50,205 250,205" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2.5" />
  
  <!-- Trung điểm: M(100, 115), N(200, 115), P(150, 205) -->
  <polygon points="100,115 200,115 150,205" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="2" />

  <!-- Đỉnh -->
  <text x="150" y="18" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">A</text>
  <text x="35" y="212" fill="#f8fafc" font-size="14" font-weight="bold">B</text>
  <text x="258" y="212" fill="#f8fafc" font-size="14" font-weight="bold">C</text>

  <!-- Nhãn 4 tam giác nhỏ: 1, 2, 3, 4 -->
  <text x="150" y="85" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">1</text>
  <text x="100" y="175" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">2</text>
  <text x="150" y="150" fill="#a7f3d0" font-size="13" font-weight="bold" text-anchor="middle">3</text>
  <text x="200" y="175" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">4</text>
</svg>`
    }
  ],

  // MỤC 3: 4 CÂU ĐÚNG / SAI (16 Ý A-B-C-D THEO MA TRẬN 2025)
  trueFalseQuestions: [
    {
      id: "t6-b18-tf1",
      badge: "Câu hỏi Đúng/Sai 1",
      prompt: "Xét tính Đúng hoặc Sai của các khẳng định hình học về tam giác đều sau đây:",
      subItems: [
        {
          id: "a",
          text: "Một hình tam giác có ba cạnh bằng nhau thì luôn là tam giác đều.",
          correctAnswer: true,
          explanation: "Đúng, theo định nghĩa tam giác đều là tam giác có 3 cạnh bằng nhau."
        },
        {
          id: "b",
          text: "Mỗi góc trong một tam giác đều có số đo bằng $90^\\circ$.",
          correctAnswer: false,
          explanation: "Sai, trong tam giác đều cả 3 góc đều bằng nhau và bằng $60^\\circ$."
        },
        {
          id: "c",
          text: "Nếu một tam giác đều có cạnh bằng $8\\text{ cm}$ thì chu vi của nó là $24\\text{ cm}$.",
          correctAnswer: true,
          explanation: "Đúng, vì chu vi tam giác đều là $C = 3 \\cdot 8 = 24\\text{ cm}$."
        },
        {
          id: "d",
          text: "Khối Rubik biến thể (Pyraminx) có các mặt là các hình tam giác đều.",
          correctAnswer: true,
          explanation: "Đúng, khối Pyraminx là khối tứ diện đều có 4 mặt đều là các hình tam giác đều."
        }
      ]
    },
    {
      id: "t6-b18-tf2",
      badge: "Câu hỏi Đúng/Sai 2",
      prompt: "Xét tính Đúng hoặc Sai của các khẳng định về hình vuông sau đây:",
      subItems: [
        {
          id: "a",
          text: "Hình vuông có bốn cạnh bằng nhau và bốn góc bằng nhau và bằng $90^\\circ$.",
          correctAnswer: true,
          explanation: "Đúng, đây là các tính chất cơ bản của hình vuông."
        },
        {
          id: "b",
          text: "Hai đường chéo của hình vuông có độ dài không bằng nhau.",
          correctAnswer: false,
          explanation: "Sai, hai đường chéo của hình vuông luôn có độ dài bằng nhau."
        },
        {
          id: "c",
          text: "Hai đường chéo của hình vuông vuông góc với nhau tại trung điểm của mỗi đường.",
          correctAnswer: true,
          explanation: "Đúng, hai đường chéo hình vuông vuông góc với nhau tại trung điểm của mỗi đường."
        },
        {
          id: "d",
          text: "Một hình vuông có chu vi là $20\\text{ cm}$ thì diện tích của nó là $25\\text{ cm}^2$.",
          correctAnswer: true,
          explanation: "Đúng, vì cạnh hình vuông là $20 : 4 = 5\\text{ cm}$, do đó diện tích là $5^2 = 25\\text{ cm}^2$."
        }
      ]
    },
    {
      id: "t6-b18-tf3",
      badge: "Câu hỏi Đúng/Sai 3",
      prompt: "Xét tính Đúng hoặc Sai của các khẳng định về hình lục giác đều sau đây:",
      subItems: [
        {
          id: "a",
          text: "Hình lục giác đều có sáu cạnh bằng nhau và sáu góc ở các đỉnh bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, lục giác đều có 6 cạnh bằng nhau và 6 góc bằng nhau (mỗi góc bằng $120^\\circ$)."
        },
        {
          id: "b",
          text: "Trong một hình lục giác đều, độ dài của mỗi đường chéo chính bằng một nửa độ dài cạnh.",
          correctAnswer: false,
          explanation: "Sai, độ dài mỗi đường chéo chính gấp đôi độ dài cạnh của lục giác đều ($d = 2a$)."
        },
        {
          id: "c",
          text: "Ba đường chéo chính của hình lục giác đều cắt nhau tại một điểm và chia hình thành $6$ tam giác đều bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, giao điểm $O$ của 3 đường chéo chính chia lục giác đều thành đúng 6 tam giác đều bằng nhau."
        },
        {
          id: "d",
          text: "Các cặp cạnh đối diện trong một hình lục giác đều vừa song song vừa bằng nhau.",
          correctAnswer: true,
          explanation: "Đúng, trong lục giác đều $ABCDEF$ có: $AB \\parallel DE$, $BC \\parallel EF$ và $CD \\parallel FA$."
        }
      ]
    },
    {
      id: "t6-b18-tf4",
      badge: "Câu hỏi Đúng/Sai 4",
      prompt: "Xét tính Đúng hoặc Sai của các bài toán thực tế sau:",
      subItems: [
        {
          id: "a",
          text: "Mặt sàn tòa nhà Quốc hội Việt Nam là một hình vuông có cạnh $102\\text{ m}$ thì chu vi sàn là $408\\text{ m}$.",
          correctAnswer: true,
          explanation: "Đúng, chu vi sàn nhà hình vuông là: $4 \\cdot 102 = 408\\text{ m}$."
        },
        {
          id: "b",
          text: "Một đĩa xôi có bề mặt hình lục giác đều cạnh $6\\text{ cm}$ thì chu vi đĩa xôi đó là $36\\text{ cm}$.",
          correctAnswer: true,
          explanation: "Đúng, chu vi của hình lục giác đều là $6 \\cdot 6 = 36\\text{ cm}$."
        },
        {
          id: "c",
          text: "Để cắt một chiếc bánh chưng hình vuông thành $4$ phần tam giác bằng nhau, ta đặt hai sợi lạt buộc trùng với hai đường chéo.",
          correctAnswer: true,
          explanation: "Đúng, hai đường chéo của hình vuông chia hình vuông thành 4 tam giác bằng nhau."
        },
        {
          id: "d",
          text: "Một tam giác đều và một hình vuông có cùng chu vi thì hình vuông sẽ có độ dài cạnh lớn hơn.",
          correctAnswer: false,
          explanation: "Sai, vì cùng chu vi $C$ thì cạnh tam giác đều là $\\frac{C}{3}$ còn cạnh hình vuông là $\\frac{C}{4}$. Vì $\\frac{C}{3} > \\frac{C}{4}$ nên tam giác đều có cạnh lớn hơn."
        }
      ]
    }
  ],

  // MỤC 4: 6 CÂU TRẢ LỜI NGẮN (ĐIỀN SỐ HỌC CHÍNH XÁC)
  shortAnswerQuestions: [
    {
      id: "t6-b18-sa1",
      badge: "Trả lời ngắn 1",
      prompt: "Một tam giác đều có chu vi bằng $45\\text{ cm}$. Độ dài mỗi cạnh của tam giác đều đó bằng bao nhiêu cm?",
      correctAnswer: "15",
      acceptableAnswers: ["15", "15 cm", "15cm"],
      explanation: "Độ dài cạnh của tam giác đều là: $a = C : 3 = 45 : 3 = 15\\text{ cm}$."
    },
    {
      id: "t6-b18-sa2",
      badge: "Trả lời ngắn 2",
      prompt: "Một hình vuông có diện tích bằng $81\\text{ cm}^2$. Chu vi của hình vuông đó bằng bao nhiêu cm?",
      correctAnswer: "36",
      acceptableAnswers: ["36", "36 cm", "36cm"],
      explanation: "Vì $S = a^2 = 81\\text{ cm}^2$ nên cạnh hình vuông là $a = 9\\text{ cm}$ (do $9^2 = 81$). Chu vi hình vuông là $C = 4 \\cdot 9 = 36\\text{ cm}$."
    },
    {
      id: "t6-b18-sa3",
      badge: "Trả lời ngắn 3",
      prompt: "Một hình lục giác đều có độ dài cạnh bằng $7\\text{ cm}$. Độ dài mỗi đường chéo chính của hình lục giác đều đó bằng bao nhiêu cm?",
      correctAnswer: "14",
      acceptableAnswers: ["14", "14 cm", "14cm"],
      explanation: "Trong hình lục giác đều, độ dài mỗi đường chéo chính gấp đôi độ dài cạnh: $d = 2a = 2 \\cdot 7 = 14\\text{ cm}$."
    },
    {
      id: "t6-b18-sa4",
      badge: "Trả lời ngắn 4",
      prompt: "Bác thợ gốm cần viền dây đồng xung quanh miệng một chiếc đĩa hình lục giác đều có cạnh bằng $12\\text{ cm}$. Hỏi chiều dài sợi dây đồng cần dùng là bao nhiêu cm?",
      correctAnswer: "72",
      acceptableAnswers: ["72", "72 cm", "72cm"],
      explanation: "Chiều dài sợi dây đồng bằng chu vi của miệng đĩa hình lục giác đều: $C = 6 \\cdot 12 = 72\\text{ cm}$."
    },
    {
      id: "t6-b18-sa5",
      badge: "Trả lời ngắn 5",
      prompt: "Một chiếc bánh chưng ngày Tết có mặt hình vuông với chu vi bằng $64\\text{ cm}$. Diện tích mặt chiếc bánh chưng đó bằng bao nhiêu $\\text{cm}^2$?",
      correctAnswer: "256",
      acceptableAnswers: ["256", "256 cm2", "256cm2"],
      explanation: "Cạnh của chiếc bánh chưng là: $a = 64 : 4 = 16\\text{ cm}$. Diện tích mặt bánh chưng là: $S = a^2 = 16^2 = 256\\text{ cm}^2$."
    },
    {
      id: "t6-b18-sa6",
      badge: "Trả lời ngắn 6",
      prompt: "Bác Nam có một đoạn dây thép dài $96\\text{ cm}$. Bác muốn uốn đoạn dây thép đó thành một hình vuông. Hãy tính diện tích của hình vuông mà bác Nam có thể tạo được theo $\\text{cm}^2$.",
      correctAnswer: "576",
      acceptableAnswers: ["576", "576 cm2", "576cm2"],
      explanation: "Đoạn dây thép dài $96\\text{ cm}$ chính là chu vi của hình vuông tạo thành. Cạnh của hình vuông là $a = 96 : 4 = 24\\text{ cm}$. Diện tích hình vuông là $S = 24^2 = 576\\text{ cm}^2$."
    }
  ]
};
