import type { DetailedLessonData } from "@/data/allGradesLessonsData";

/**
 * BÀI 20: CHU VI VÀ DIỆN TÍCH CỦA MỘT SỐ TỨ GIÁC ĐÃ HỌC - TOÁN 6
 * BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (TẬP 1)
 * ID: t6-b20-chu-vi-dien-tich-tu-giac
 * Đầy đủ: Lý thuyết + Hình vẽ SVG toán học + 10 câu TN Cốt lõi + 10 câu TN Luyện thêm + 4 câu Đúng/Sai (16 ý) + 6 câu Trả lời ngắn
 */
export const LESSON_20_DATA: DetailedLessonData = {
  id: "t6-b20-chu-vi-dien-tich-tu-giac",
  lessonNumber: 20,
  title: "Bài 20: Chu vi và diện tích của một số tứ giác đã học",
  bookChapter: "Chương IV: Một số hình phẳng trong thực tiễn",
  scenarioTitle: "Tình huống: Quy hoạch sân vườn, lát nền nhà và trang trí nội thất",
  scenarioFrames: [
    {
      id: 1,
      character: "student",
      characterName: "Bạn Bình",
      avatar: "🧑‍🎓",
      speech: "Thưa Thầy Tính, gia đình em đang hoàn thiện ngôi nhà mới gồm lát gạch sàn phòng khách, trồng cỏ sân vườn và viền bờ bồn hoa. Làm sao để tính chính xác chu vi và diện tích từng khu vực để mua đúng số lượng vật liệu ạ?",
      visualGraphic: "box",
      mathNote: "S_{\\text{thoi}} = \\frac{1}{2} m \\cdot n, \\ S_{\\text{bình hành}} = a \\cdot h, \\ S_{\\text{thang}} = \\frac{(a + b)h}{2}",
    },
    {
      id: 2,
      character: "teacher",
      characterName: "Thầy Tính (VinaMath)",
      avatar: "👨‍🏫",
      speech: "Chào Bình! Đây là một ứng dụng rất thực tế của hình học phẳng. Hôm nay chúng ta sẽ hệ thống hóa toàn bộ công thức tính chu vi, diện tích của hình chữ nhật, hình vuông, hình thoi, hình bình hành, hình thang cân và học cách chia nhỏ hình phức tạp để tính toán chính xác nhé!",
      visualGraphic: "graph",
      mathNote: "1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\ 000\\text{ cm}^2",
    },
  ],
  theorySections: [
    {
      index: "1",
      title: "Chu vi và diện tích Hình chữ nhật, Hình vuông",
      points: [
        "**Hình chữ nhật:**\n- Có chiều dài là $a$ và chiều rộng là $b$ (cùng đơn vị đo).\n- Chu vi: $C = 2(a + b)$.\n- Diện tích: $S = a \\cdot b$.",
        "**Hình vuông:**\n- Có độ dài một cạnh là $a$.\n- Chu vi: $C = 4a$.\n- Diện tích: $S = a^2 = a \\cdot a$.",
        "**Chuyển đổi đơn vị đo diện tích thường gặp:**\n- $1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\ 000\\text{ cm}^2$.\n- $1\\text{ dm}^2 = 100\\text{ cm}^2$.\n- $1\\text{ ha} = 10\\ 000\\text{ m}^2$.",
      ],
      formula: "C_{\\text{HCN}} = 2(a + b), \\ S_{\\text{HCN}} = a \\cdot b; \\quad C_{\\text{HV}} = 4a, \\ S_{\\text{HV}} = a^2",
      exampleTitle: "Ví dụ 1 (Tính số viên gạch lát nền phòng khách)",
      exampleProblem: "Một căn phòng khách hình chữ nhật có chiều dài $8\\text{ m}$ và chiều rộng $5\\text{ m}$. Bác An dự định lát nền bằng những viên gạch men hình vuông có cạnh bằng $50\\text{ cm}$.\na) Tính diện tích nền phòng khách.\nb) Tính số viên gạch men cần dùng để lát kín phòng khách (bỏ qua diện tích mạch vữa).",
      exampleSolution: "a) Diện tích nền phòng khách là:\n$S = 8 \\cdot 5 = 40\\text{ m}^2$.\n\nb) Đổi: $40\\text{ m}^2 = 400\\ 000\\text{ cm}^2$.\nDiện tích của một viên gạch men hình vuông là:\n$S_1 = 50 \\cdot 50 = 2\\ 500\\text{ cm}^2$.\nSố viên gạch men cần dùng để lát kín nền là:\n$400\\ 000 : 2\\ 500 = 160$ (viên).",
      examples: [
        {
          title: "Hình vẽ chuẩn: Hình chữ nhật và phân chia lưới gạch",
          problem: "Minh họa nền chữ nhật kích thước $a \\times b$ và viên gạch vuông cạnh $c$:",
          solution: "Diện tích nền bằng dài nhân rộng ($S = a \\cdot b$), số viên gạch bằng diện tích nền chia cho diện tích một viên gạch.",
          svgDiagram: `<svg viewBox="0 0 320 220" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Nền hình chữ nhật A(50, 40) đến (270, 180) -->
  <rect x="50" y="40" width="220" height="140" fill="#0284c7" fill-opacity="0.12" stroke="#38bdf8" stroke-width="2.5" rx="4" />
  
  <!-- Lưới gạch minh họa bên trong -->
  <line x1="105" y1="40" x2="105" y2="180" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" />
  <line x1="160" y1="40" x2="160" y2="180" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" />
  <line x1="215" y1="40" x2="215" y2="180" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" />
  <line x1="50" y1="110" x2="270" y2="110" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" />

  <!-- Viên gạch nổi bật ở góc -->
  <rect x="50" y="40" width="55" height="70" fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b" stroke-width="1.8" />
  <text x="77" y="79" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Gạch</text>

  <!-- Kích thước -->
  <text x="160" y="30" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Chiều dài a = 8 m</text>
  <text x="25" y="115" fill="#38bdf8" font-size="13" font-weight="bold">b = 5 m</text>
  <text x="160" y="150" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">S = a · b = 40 m²</text>
</svg>`,
        },
      ],
    },
    {
      index: "2",
      title: "Chu vi và diện tích Hình thoi",
      points: [
        "**Đặc điểm & Công thức:**\n- Hình thoi có độ dài cạnh là $a$ và độ dài hai đường chéo là $m, n$ (cùng đơn vị đo).\n- Chu vi: $C = 4a$.\n- Diện tích: $S = \\frac{1}{2} m \\cdot n$ (bằng **nửa tích độ dài hai đường chéo**).",
        "**Công thức suy diễn tìm đường chéo:**\n- Khi biết diện tích $S$ và độ dài một đường chéo $m$, độ dài đường chéo kia là: $n = \\frac{2S}{m}$.",
        "**Hình ảnh thực tế:** Khung con diều, hoa văn quả trám gạch bông, mặt bàn kính hình thoi trang trí phòng khách.",
      ],
      formula: "C = 4a, \\quad S = \\frac{1}{2} m \\cdot n, \\quad n = \\frac{2S}{m}",
      exampleTitle: "Ví dụ 2 (Tính diện tích và đường chéo hình thoi)",
      exampleProblem: "Một khung sắt hình thoi có cạnh dài $20\\text{ cm}$ và hai đường chéo có độ dài lần lượt là $24\\text{ cm}$ và $32\\text{ cm}$.\na) Tính chu vi của khung sắt hình thoi đó.\nb) Tính diện tích mặt phẳng tạo bởi khung sắt hình thoi đó.",
      exampleSolution: "a) Chu vi khung sắt hình thoi là:\n$C = 4 \\cdot 20 = 80\\text{ cm}$.\n\nb) Diện tích mặt phẳng hình thoi là:\n$S = \\frac{1}{2} \\cdot 24 \\cdot 32 = 384\\text{ cm}^2$.",
      examples: [
        {
          title: "Hình vẽ chuẩn: Hình thoi và hai đường chéo vuông góc",
          problem: "Minh họa hình thoi với hai đường chéo $m$ và $n$ cắt nhau vuông góc:",
          solution: "Diện tích hình thoi bằng nửa tích hai đường chéo: $S = \\frac{1}{2} m \\cdot n$.",
          svgDiagram: `<svg viewBox="0 0 320 230" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình thoi: đỉnh (160, 25), (280, 115), (160, 205), (40, 115) -->
  <polygon points="160,25 280,115 160,205 40,115" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2.5" />

  <!-- Đường chéo dọc m (160, 25) -> (160, 205) -->
  <line x1="160" y1="25" x2="160" y2="205" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3" />
  <!-- Đường chéo ngang n (40, 115) -> (280, 115) -->
  <line x1="40" y1="115" x2="280" y2="115" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3" />

  <!-- Ký hiệu góc vuông tại tâm -->
  <polygon points="160,103 172,103 172,115 160,115" fill="none" stroke="#f43f5e" stroke-width="1.5" />

  <!-- Kích thước -->
  <text x="168" y="70" fill="#38bdf8" font-size="12" font-weight="bold">m</text>
  <text x="230" y="110" fill="#38bdf8" font-size="12" font-weight="bold">n</text>
  <text x="230" y="65" fill="#f59e0b" font-size="12" font-weight="bold">cạnh a</text>
  <text x="160" y="150" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">S = ½ · m · n</text>
</svg>`,
        },
      ],
    },
    {
      index: "3",
      title: "Chu vi và diện tích Hình bình hành",
      points: [
        "**Đặc điểm & Công thức:**\n- Hình bình hành có độ dài hai cạnh là $a$ và $b$, độ dài đường cao ứng với cạnh đáy $a$ là $h$ (cùng đơn vị đo).\n- Chu vi: $C = 2(a + b)$.\n- Diện tích: $S = a \\cdot h$ (bằng **tích của một cạnh đáy với chiều cao tương ứng**).",
        "**Lưu ý quan trọng:** Chiều cao $h$ bắt buộc phải là đoạn thẳng vuông góc hạ từ một đỉnh xuống đường thẳng chứa cạnh đáy tương ứng, không nhầm lẫn giữa cạnh bên và chiều cao.",
        "**Hình ảnh thực tế:** Thửa ruộng hoặc bãi đỗ xe ô tô vạch nghiêng hình bình hành, biển quảng cáo hình bình hành.",
      ],
      formula: "C = 2(a + b), \\quad S = a \\cdot h \\quad (h \\text{ là chiều cao ứng với đáy } a)",
      exampleTitle: "Ví dụ 3 (Tính diện tích mảnh đất hình bình hành)",
      exampleProblem: "Một mảnh đất hình bình hành có độ dài cạnh đáy bằng $24\\text{ m}$ và chiều cao tương ứng bằng $15\\text{ m}$.\na) Tính diện tích mảnh đất hình bình hành đó.\nb) Người ta dùng $\\frac{3}{5}$ diện tích mảnh đất để trồng rau. Tính diện tích phần đất trồng rau.",
      exampleSolution: "a) Diện tích mảnh đất hình bình hành là:\n$S = a \\cdot h = 24 \\cdot 15 = 360\\text{ m}^2$.\n\nb) Diện tích phần đất dùng để trồng rau là:\n$S_{\\text{rau}} = 360 \\cdot \\frac{3}{5} = 216\\text{ m}^2$.",
      examples: [
        {
          title: "Hình vẽ chuẩn: Hình bình hành và đường cao",
          problem: "Minh họa hình bình hành với cạnh đáy $a$, cạnh bên $b$ và đường cao $h$ vuông góc với cạnh đáy:",
          solution: "Diện tích hình bình hành bằng cạnh đáy nhân với chiều cao tương ứng: $S = a \\cdot h$.",
          svgDiagram: `<svg viewBox="0 0 320 220" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình bình hành: (90, 45), (270, 45), (220, 175), (40, 175) -->
  <polygon points="90,45 270,45 220,175 40,175" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="2.5" />

  <!-- Chiều cao h hạ từ (90, 45) xuống cạnh đáy tại (90, 175) -->
  <line x1="90" y1="45" x2="90" y2="175" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3" />
  <rect x="90" y="161" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />

  <!-- Kích thước -->
  <text x="180" y="35" fill="#10b981" font-size="13" font-weight="bold">Đáy a = 24 m</text>
  <text x="50" y="105" fill="#10b981" font-size="12" font-weight="bold">b</text>
  <text x="96" y="115" fill="#f43f5e" font-size="13" font-weight="bold">h = 15 m</text>
  <text x="160" y="145" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">S = a · h = 360 m²</text>
</svg>`,
        },
      ],
    },
    {
      index: "4",
      title: "Chu vi, diện tích Hình thang cân & Phương pháp phân chia hình",
      points: [
        "**Hình thang cân:**\n- Độ dài đáy nhỏ là $a$, đáy lớn là $b$, cạnh bên là $c$ và chiều cao tương ứng là $h$ (cùng đơn vị đo).\n- Chu vi: $C = a + b + 2c$.\n- Diện tích: $S = \\frac{(a + b) \\cdot h}{2}$ (bằng **nửa tích của tổng hai đáy với chiều cao**).",
        "**Công thức suy biến tìm đáy:**\n- Tổng hai đáy: $a + b = \\frac{2S}{h}$.\n- Khi biết đáy nhỏ $a$, đáy lớn là: $b = \\frac{2S}{h} - a$.",
        "**Phương pháp phân chia hoặc bù trừ hình phức tạp trong thực tế:**\n- Để tính diện tích một mảnh đất hay bề mặt hình đa giác phức tạp, ta có thể chia nhỏ hình đó thành các hình quen thuộc (hình chữ nhật, hình vuông, hình tam giác, hình thang) rồi cộng các diện tích thành phần lại.\n- Hoặc vẽ một hình chữ nhật bao quanh rồi lấy diện tích hình chữ nhật lớn trừ đi diện tích các phần thừa.",
      ],
      formula: "S = \\frac{(a + b) \\cdot h}{2}, \\quad C = a + b + 2c",
      exampleTitle: "Ví dụ 4 (Tính diện tích mảnh vườn hình thang cân)",
      exampleProblem: "Một mảnh vườn hình thang cân có đáy nhỏ dài $15\\text{ m}$, đáy lớn dài $25\\text{ m}$, cạnh bên dài $13\\text{ m}$ và chiều cao bằng $12\\text{ m}$.\na) Tính chu vi mảnh vườn đó.\nb) Tính diện tích mảnh vườn đó.",
      exampleSolution: "a) Chu vi mảnh vườn hình thang cân là:\n$C = 15 + 25 + 2 \\cdot 13 = 40 + 26 = 66\\text{ m}$.\n\nb) Diện tích mảnh vườn hình thang cân là:\n$S = \\frac{(15 + 25) \\cdot 12}{2} = \\frac{40 \\cdot 12}{2} = 240\\text{ m}^2$.",
      examples: [
        {
          title: "Hình vẽ chuẩn: Hình thang cân và chiều cao",
          problem: "Minh họa hình thang cân với đáy nhỏ $a$, đáy lớn $b$, cạnh bên $c$ và chiều cao $h$:",
          solution: "Diện tích hình thang bằng nửa tích tổng hai đáy nhân chiều cao: $S = \\frac{(a+b)h}{2}$.",
          svgDiagram: `<svg viewBox="0 0 320 220" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Hình thang cân: (100, 45), (220, 45), (270, 175), (50, 175) -->
  <polygon points="100,45 220,45 270,175 50,175" fill="#a855f7" fill-opacity="0.12" stroke="#c084fc" stroke-width="2.5" />

  <!-- Chiều cao h hạ từ (100, 45) xuống đáy lớn tại (100, 175) -->
  <line x1="100" y1="45" x2="100" y2="175" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3" />
  <rect x="100" y="161" width="14" height="14" fill="none" stroke="#f43f5e" stroke-width="1.5" />

  <!-- Kích thước -->
  <text x="160" y="35" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">Đáy nhỏ a = 15 m</text>
  <text x="160" y="198" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">Đáy lớn b = 25 m</text>
  <text x="50" y="105" fill="#c084fc" font-size="12" font-weight="bold">c = 13 m</text>
  <text x="108" y="115" fill="#f43f5e" font-size="12" font-weight="bold">h = 12 m</text>
  <text x="180" y="125" fill="#f8fafc" font-size="13" font-weight="bold">S = 240 m²</text>
</svg>`,
        },
      ],
    },
  ],

  // MỤC 1: 10 CÂU TRẮC NGHIỆM CỐT LÕI (MỤC BÀI TẬP)
  quizQuestions: [
    {
      id: "t6-b20-q1",
      badge: "Bài tập 1",
      question: "Khẳng định nào sau đây là ĐÚNG về công thức tính diện tích hình thoi có độ dài hai đường chéo là $m$ và $n$?",
      options: [
        "$S = \\frac{1}{2} m \\cdot n$",
        "$S = m \\cdot n$",
        "$S = 2(m + n)$",
        "$S = \\frac{1}{2}(m + n)$"
      ],
      correctIndex: 0,
      explanation: "Diện tích hình thoi bằng nửa tích độ dài hai đường chéo: $S = \\frac{1}{2} m \\cdot n$."
    },
    {
      id: "t6-b20-q2",
      badge: "Bài tập 2",
      question: "Khẳng định nào sau đây là ĐÚNG về công thức tính diện tích hình thang có hai cạnh đáy $a, b$ và chiều cao $h$?",
      options: [
        "Diện tích bằng nửa tích của tổng hai đáy với chiều cao",
        "Diện tích bằng tích của tổng hai đáy với chiều cao",
        "Diện tích bằng nửa tích của hiệu hai đáy với chiều cao",
        "Diện tích bằng tích của một cạnh đáy với chiều cao"
      ],
      correctIndex: 0,
      explanation: "Công thức tính diện tích hình thang: $S = \\frac{(a + b) \\cdot h}{2}$ (nửa tích của tổng hai đáy với chiều cao)."
    },
    {
      id: "t6-b20-q3",
      badge: "Bài tập 3",
      question: "Khẳng định nào sau đây là ĐÚNG về công thức tính diện tích hình bình hành có cạnh đáy $a$ và chiều cao tương ứng $h$?",
      options: [
        "Diện tích bằng tích của một cạnh đáy với chiều cao tương ứng với cạnh đó",
        "Diện tích bằng nửa tích của một cạnh đáy với chiều cao tương ứng với cạnh đó",
        "Diện tích bằng tích độ dài hai cạnh bên kề nhau",
        "Diện tích bằng tổng độ dài cạnh đáy và chiều cao tương ứng"
      ],
      correctIndex: 0,
      explanation: "Diện tích hình bình hành bằng tích của một cạnh đáy với chiều cao tương ứng: $S = a \\cdot h$."
    },
    {
      id: "t6-b20-q4",
      badge: "Bài tập 4",
      question: "Một hình vuông có độ dài cạnh bằng $6\\text{ cm}$. Chu vi và diện tích của hình vuông đó lần lượt là:",
      options: [
        "$C = 24\\text{ cm}$ và $S = 36\\text{ cm}^2$",
        "$C = 36\\text{ cm}$ và $S = 24\\text{ cm}^2$",
        "$C = 12\\text{ cm}$ và $S = 36\\text{ cm}^2$",
        "$C = 24\\text{ cm}$ và $S = 24\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Chu vi hình vuông là $C = 4 \\cdot 6 = 24\\text{ cm}$. Diện tích hình vuông là $S = 6^2 = 36\\text{ cm}^2$."
    },
    {
      id: "t6-b20-q5",
      badge: "Bài tập 5",
      question: "Một hình chữ nhật có chiều dài là $12\\text{ cm}$ và chiều rộng là $8\\text{ cm}$. Chu vi của hình chữ nhật đó là:",
      options: [
        "$40\\text{ cm}$",
        "$20\\text{ cm}$",
        "$96\\text{ cm}$",
        "$48\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi của hình chữ nhật là: $C = 2 \\cdot (12 + 8) = 2 \\cdot 20 = 40\\text{ cm}$."
    },
    {
      id: "t6-b20-q6",
      badge: "Bài tập 6",
      question: "Một hình thoi có độ dài hai đường chéo lần lượt là $8\\text{ cm}$ và $6\\text{ cm}$. Diện tích của hình thoi đó là:",
      options: [
        "$24\\text{ cm}^2$",
        "$48\\text{ cm}^2$",
        "$14\\text{ cm}^2$",
        "$28\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích của hình thoi là: $S = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24\\text{ cm}^2$."
    },
    {
      id: "t6-b20-q7",
      badge: "Bài tập 7",
      question: "Một hình bình hành có độ dài cạnh đáy bằng $14\\text{ cm}$ và chiều cao tương ứng bằng $5\\text{ cm}$. Diện tích của hình bình hành đó là:",
      options: [
        "$70\\text{ cm}^2$",
        "$35\\text{ cm}^2$",
        "$38\\text{ cm}^2$",
        "$19\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích của hình bình hành là: $S = a \\cdot h = 14 \\cdot 5 = 70\\text{ cm}^2$."
    },
    {
      id: "t6-b20-q8",
      badge: "Bài tập 8",
      question: "Một hình thang cân có đáy lớn bằng $15\\text{ cm}$, đáy nhỏ bằng $9\\text{ cm}$ và chiều cao bằng $6\\text{ cm}$. Diện tích của hình thang cân đó là:",
      options: [
        "$72\\text{ cm}^2$",
        "$144\\text{ cm}^2$",
        "$36\\text{ cm}^2$",
        "$90\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích của hình thang cân là: $S = \\frac{(15 + 9) \\cdot 6}{2} = \\frac{24 \\cdot 6}{2} = 72\\text{ cm}^2$."
    },
    {
      id: "t6-b20-q9",
      badge: "Bài tập 9",
      question: "Một hình thang cân có độ dài đáy nhỏ là $6\\text{ cm}$, đáy lớn là $10\\text{ cm}$ và hai cạnh bên mỗi cạnh dài $5\\text{ cm}$. Chu vi của hình thang cân đó là:",
      options: [
        "$26\\text{ cm}$",
        "$21\\text{ cm}$",
        "$32\\text{ cm}$",
        "$16\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi hình thang cân là: $C = 6 + 10 + 5 + 5 = 26\\text{ cm}$."
    },
    {
      id: "t6-b20-q10",
      badge: "Bài tập 10",
      question: "Một miếng bìa hình chữ nhật có kích thước chiều dài $10\\text{ cm}$ và chiều rộng $5\\text{ cm}$. Cắt miếng bìa đó thành hai miếng bìa hình vuông bằng nhau. Diện tích của mỗi miếng bìa hình vuông là:",
      options: [
        "$25\\text{ cm}^2$",
        "$50\\text{ cm}^2$",
        "$20\\text{ cm}^2$",
        "$15\\text{ cm}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích miếng bìa hình chữ nhật là $10 \\cdot 5 = 50\\text{ cm}^2$. Cắt thành hai hình vuông bằng nhau thì mỗi hình vuông có diện tích là: $50 : 2 = 25\\text{ cm}^2$ (mỗi hình vuông có cạnh bằng $5\\text{ cm}$)."
    }
  ],

  // MỤC 2: 10 CÂU TRẮC NGHIỆM TỰ LUYỆN (MỤC LUYỆN THÊM)
  practiceQuestions: [
    {
      id: "t6-b20-p1",
      badge: "Luyện thêm 1",
      question: "Một tấm thảm hình chữ nhật trải sàn nhà có chiều dài $4\\text{ m}$ và chiều rộng $3\\text{ m}$. Diện tích của tấm thảm đó là:",
      options: [
        "$12\\text{ m}^2$",
        "$14\\text{ m}^2$",
        "$7\\text{ m}^2$",
        "$24\\text{ m}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích tấm thảm hình chữ nhật là: $S = 4 \\cdot 3 = 12\\text{ m}^2$."
    },
    {
      id: "t6-b20-p2",
      badge: "Luyện thêm 2",
      question: "Người ta muốn làm một khung kệ trang trí bằng dây thép gồm hai hình thoi bằng nhau ghép lại, mỗi hình thoi có độ dài cạnh là $15\\text{ cm}$. Chiều dài đoạn dây thép cần dùng là bao nhiêu? (Coi mối nối không đáng kể).",
      options: [
        "$120\\text{ cm}$",
        "$60\\text{ cm}$",
        "$90\\text{ cm}$",
        "$150\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chu vi của một hình thoi là $4 \\cdot 15 = 60\\text{ cm}$. Chiều dài đoạn dây thép để làm 2 hình thoi là: $2 \\cdot 60 = 120\\text{ cm}$."
    },
    {
      id: "t6-b20-p3",
      badge: "Luyện thêm 3",
      question: "Mỗi viên gạch men hình vuông có cạnh dài $40\\text{ cm}$. Người ta ghép $3$ viên gạch nối tiếp nhau tạo thành một hình chữ nhật. Chu vi của hình chữ nhật ghép được là:",
      options: [
        "$320\\text{ cm}$",
        "$160\\text{ cm}$",
        "$240\\text{ cm}$",
        "$480\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Hình chữ nhật ghép bởi 3 viên gạch có chiều dài là $3 \\cdot 40 = 120\\text{ cm}$ và chiều rộng là $40\\text{ cm}$. Chu vi là: $C = 2 \\cdot (120 + 40) = 2 \\cdot 160 = 320\\text{ cm}$."
    },
    {
      id: "t6-b20-p4",
      badge: "Luyện thêm 4",
      question: "Một căn phòng khách có diện tích sàn là $48\\text{ m}^2$. Để lát kín phòng khách này, người ta dùng các viên gạch vuông có cạnh $40\\text{ cm}$ (diện tích mỗi viên là $0,16\\text{ m}^2$). Số viên gạch cần dùng là:",
      options: [
        "$300$ viên",
        "$250$ viên",
        "$400$ viên",
        "$120$ viên"
      ],
      correctIndex: 0,
      explanation: "Số viên gạch cần dùng là: $48 : 0,16 = 300$ (viên)."
    },
    {
      id: "t6-b20-p5",
      badge: "Luyện thêm 5",
      question: "Một bộ cửa sổ gồm hai cánh cửa kính hình chữ nhật bằng nhau, mỗi cánh kính có chiều dài $1,2\\text{ m}$ và chiều rộng $0,6\\text{ m}$. Tổng diện tích kính của bộ cửa sổ đó là:",
      options: [
        "$1,44\\text{ m}^2$",
        "$0,72\\text{ m}^2$",
        "$2,88\\text{ m}^2$",
        "$3,6\\text{ m}^2$"
      ],
      correctIndex: 0,
      explanation: "Diện tích của một cánh kính là: $1,2 \\cdot 0,6 = 0,72\\text{ m}^2$. Tổng diện tích kính của cả 2 cánh cửa là: $0,72 \\cdot 2 = 1,44\\text{ m}^2$."
    },
    {
      id: "t6-b20-p6",
      badge: "Luyện thêm 6",
      question: "Một hình thoi có diện tích bằng $30\\text{ cm}^2$ và một đường chéo dài $6\\text{ cm}$. Độ dài đường chéo còn lại của hình thoi là:",
      options: [
        "$10\\text{ cm}$",
        "$5\\text{ cm}$",
        "$15\\text{ cm}$",
        "$8\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài đường chéo còn lại là: $n = \\frac{2S}{m} = \\frac{2 \\cdot 30}{6} = 10\\text{ cm}$."
    },
    {
      id: "t6-b20-p7",
      badge: "Luyện thêm 7",
      question: "Một hình chữ nhật có chiều rộng bằng $7\\text{ cm}$ và chiều dài gấp đôi chiều rộng. Chu vi của hình chữ nhật đó là:",
      options: [
        "$42\\text{ cm}$",
        "$21\\text{ cm}$",
        "$98\\text{ cm}$",
        "$28\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Chiều dài hình chữ nhật là: $7 \\cdot 2 = 14\\text{ cm}$. Chu vi hình chữ nhật là: $C = 2 \\cdot (14 + 7) = 2 \\cdot 21 = 42\\text{ cm}$."
    },
    {
      id: "t6-b20-p8",
      badge: "Luyện thêm 8",
      question: "Cho một hình vuông có chu vi là $24\\text{ cm}$. Nếu kéo dài mỗi cạnh của hình vuông đó thêm $3\\text{ cm}$ thì hình vuông mới có chu vi bằng bao nhiêu?",
      options: [
        "$36\\text{ cm}$",
        "$27\\text{ cm}$",
        "$30\\text{ cm}$",
        "$48\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Cạnh hình vuông ban đầu là $24 : 4 = 6\\text{ cm}$. Cạnh hình vuông mới là $6 + 3 = 9\\text{ cm}$. Chu vi hình vuông mới là: $4 \\cdot 9 = 36\\text{ cm}$ (hoặc tăng thêm $4 \\cdot 3 = 12\\text{ cm}$, chu vi mới là $24 + 12 = 36\\text{ cm}$)."
    },
    {
      id: "t6-b20-p9",
      badge: "Luyện thêm 9",
      question: "Một hình thang có đáy nhỏ là $4\\text{ cm}$, chiều cao là $5\\text{ cm}$ và diện tích là $40\\text{ cm}^2$. Độ dài đáy lớn của hình thang đó là:",
      options: [
        "$12\\text{ cm}$",
        "$8\\text{ cm}$",
        "$16\\text{ cm}$",
        "$10\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Tổng hai đáy của hình thang là: $\\frac{2S}{h} = \\frac{2 \\cdot 40}{5} = 16\\text{ cm}$. Độ dài đáy lớn là: $16 - 4 = 12\\text{ cm}$."
    },
    {
      id: "t6-b20-p10",
      badge: "Luyện thêm 10",
      question: "Một hình bình hành có diện tích bằng $48\\text{ cm}^2$ và chiều cao ứng với cạnh đáy là $6\\text{ cm}$. Độ dài cạnh đáy tương ứng là:",
      options: [
        "$8\\text{ cm}$",
        "$4\\text{ cm}$",
        "$16\\text{ cm}$",
        "$12\\text{ cm}$"
      ],
      correctIndex: 0,
      explanation: "Độ dài cạnh đáy của hình bình hành là: $a = S : h = 48 : 6 = 8\\text{ cm}$."
    }
  ],

  // MỤC 3: 4 CÂU ĐÚNG / SAI (16 Ý A-B-C-D THEO MA TRẬN 2025)
  trueFalseQuestions: [
    {
      id: "t6-b20-tf1",
      badge: "Câu hỏi Đúng/Sai 1",
      prompt: "Xét tính Đúng hoặc Sai của các khẳng định về công thức tính diện tích sau:",
      subItems: [
        {
          id: "a",
          text: "Diện tích hình chữ nhật bằng tích của chiều dài nhân với chiều rộng (cùng đơn vị đo).",
          correctAnswer: true,
          explanation: "Đúng, công thức $S = a \\cdot b$."
        },
        {
          id: "b",
          text: "Diện tích hình thoi bằng tích độ dài hai đường chéo.",
          correctAnswer: false,
          explanation: "Sai, diện tích hình thoi bằng nửa tích độ dài hai đường chéo ($S = \\frac{1}{2} m \\cdot n$)."
        },
        {
          id: "c",
          text: "Diện tích hình bình hành bằng tích của một cạnh đáy với chiều cao tương ứng với cạnh đáy đó.",
          correctAnswer: true,
          explanation: "Đúng, công thức $S = a \\cdot h$."
        },
        {
          id: "d",
          text: "Diện tích hình thang bằng nửa tích của tổng hai đáy với chiều cao tương ứng.",
          correctAnswer: true,
          explanation: "Đúng, công thức $S = \\frac{(a + b)h}{2}$."
        }
      ]
    },
    {
      id: "t6-b20-tf2",
      badge: "Câu hỏi Đúng/Sai 2",
      prompt: "Xét tính Đúng hoặc Sai của các phép đổi đơn vị đo diện tích sau:",
      subItems: [
        {
          id: "a",
          text: "$1\\text{ m}^2 = 100\\text{ dm}^2$.",
          correctAnswer: true,
          explanation: "Đúng, vì $1\\text{ m} = 10\\text{ dm}$ nên $1\\text{ m}^2 = 10 \\cdot 10 = 100\\text{ dm}^2$."
        },
        {
          id: "b",
          text: "$1\\text{ m}^2 = 1\\ 000\\text{ cm}^2$.",
          correctAnswer: false,
          explanation: "Sai, vì $1\\text{ m} = 100\\text{ cm}$ nên $1\\text{ m}^2 = 100 \\cdot 100 = 10\\ 000\\text{ cm}^2$."
        },
        {
          id: "c",
          text: "$40\\text{ m}^2 = 400\\ 000\\text{ cm}^2$.",
          correctAnswer: true,
          explanation: "Đúng, $40 \\cdot 10\\ 000 = 400\\ 000\\text{ cm}^2$."
        },
        {
          id: "d",
          text: "Một viên gạch hình vuông cạnh $50\\text{ cm}$ có diện tích là $0,25\\text{ m}^2$.",
          correctAnswer: true,
          explanation: "Đúng, vì $50\\text{ cm} = 0,5\\text{ m}$ nên $S = 0,5 \\cdot 0,5 = 0,25\\text{ m}^2$ (hoặc $2\\ 500\\text{ cm}^2 = 0,25\\text{ m}^2$)."
        }
      ]
    },
    {
      id: "t6-b20-tf3",
      badge: "Câu hỏi Đúng/Sai 3",
      prompt: "Xét tính Đúng hoặc Sai về sự thay đổi kích thước và diện tích của các hình sau:",
      subItems: [
        {
          id: "a",
          text: "Một hình chữ nhật nếu chiều dài và chiều rộng cùng tăng gấp $4$ lần thì diện tích của nó tăng $16$ lần.",
          correctAnswer: true,
          explanation: "Đúng, vì diện tích mới $S' = (4a) \\cdot (4b) = 16 \\cdot a \\cdot b = 16S$."
        },
        {
          id: "b",
          text: "Một hình vuông nếu tăng cạnh lên $3$ lần thì chu vi tăng $3$ lần và diện tích tăng $9$ lần.",
          correctAnswer: true,
          explanation: "Đúng, $C' = 4(3a) = 3(4a) = 3C$ và $S' = (3a)^2 = 9a^2 = 9S$."
        },
        {
          id: "c",
          text: "Một hình thang nếu đáy lớn và đáy nhỏ cùng tăng gấp $3$ lần (chiều cao giữ nguyên) thì diện tích của nó tăng $6$ lần.",
          correctAnswer: false,
          explanation: "Sai, diện tích mới $S' = \\frac{(3a + 3b)h}{2} = 3 \\cdot \\frac{(a+b)h}{2} = 3S$, chỉ tăng $3$ lần."
        },
        {
          id: "d",
          text: "Một hình thoi nếu một đường chéo tăng gấp đôi và đường chéo kia giữ nguyên thì diện tích tăng gấp đôi.",
          correctAnswer: true,
          explanation: "Đúng, vì $S' = \\frac{1}{2}(2m)n = 2 \\cdot (\\frac{1}{2}mn) = 2S$."
        }
      ]
    },
    {
      id: "t6-b20-tf4",
      badge: "Câu hỏi Đúng/Sai 4",
      prompt: "Xét tính Đúng hoặc Sai của các bài toán thực tế sau:",
      subItems: [
        {
          id: "a",
          text: "Một căn phòng có diện tích $40\\text{ m}^2$ lát bằng gạch vuông cạnh $50\\text{ cm}$ (diện tích $0,25\\text{ m}^2$) thì cần vừa đủ $160$ viên gạch.",
          correctAnswer: true,
          explanation: "Đúng, số viên gạch là: $40 : 0,25 = 160$ viên."
        },
        {
          id: "b",
          text: "Một mảnh đất hình bình hành có đáy $15\\text{ m}$, chiều cao $8\\text{ m}$ thì diện tích là $60\\text{ m}^2$.",
          correctAnswer: false,
          explanation: "Sai, diện tích là $S = 15 \\cdot 8 = 120\\text{ m}^2$ (không chia cho 2)."
        },
        {
          id: "c",
          text: "Một khu vườn hình thang cân có hai đáy là $12\\text{ m}$ và $18\\text{ m}$, chiều cao $10\\text{ m}$ thì diện tích là $150\\text{ m}^2$.",
          correctAnswer: true,
          explanation: "Đúng, $S = \\frac{(12 + 18) \\cdot 10}{2} = 150\\text{ m}^2$."
        },
        {
          id: "d",
          text: "Một khung sắt hình thoi có cạnh $25\\text{ cm}$ thì chu vi khung sắt là $50\\text{ cm}$.",
          correctAnswer: false,
          explanation: "Sai, chu vi hình thoi cạnh $25\\text{ cm}$ là $4 \\cdot 25 = 100\\text{ cm}$."
        }
      ]
    }
  ],

  // MỤC 4: 6 CÂU TRẢ LỜI NGẮN (ĐIỀN SỐ HỌC CHÍNH XÁC)
  shortAnswerQuestions: [
    {
      id: "t6-b20-sa1",
      badge: "Trả lời ngắn 1",
      prompt: "Một hình thoi có diện tích bằng $48\\text{ cm}^2$ và một đường chéo dài $8\\text{ cm}$. Độ dài đường chéo còn lại của hình thoi đó bằng bao nhiêu cm?",
      correctAnswer: "12",
      acceptableAnswers: ["12", "12 cm", "12cm"],
      explanation: "Độ dài đường chéo còn lại là: $n = \\frac{2S}{m} = \\frac{2 \\cdot 48}{8} = 12\\text{ cm}$."
    },
    {
      id: "t6-b20-sa2",
      badge: "Trả lời ngắn 2",
      prompt: "Một hình thang có diện tích bằng $96\\text{ cm}^2$, chiều cao bằng $8\\text{ cm}$ và độ dài đáy lớn là $16\\text{ cm}$. Độ dài đáy nhỏ của hình thang đó bằng bao nhiêu cm?",
      correctAnswer: "8",
      acceptableAnswers: ["8", "8 cm", "8cm"],
      explanation: "Tổng độ dài hai đáy là: $\\frac{2 \\cdot 96}{8} = 24\\text{ cm}$. Độ dài đáy nhỏ là: $24 - 16 = 8\\text{ cm}$."
    },
    {
      id: "t6-b20-sa3",
      badge: "Trả lời ngắn 3",
      prompt: "Một mảnh đất hình chữ nhật có chu vi bằng $60\\text{ m}$, biết chiều dài hơn chiều rộng $6\\text{ m}$. Diện tích của mảnh đất hình chữ nhật đó bằng bao nhiêu $\\text{m}^2$?",
      correctAnswer: "216",
      acceptableAnswers: ["216", "216 m2", "216m2"],
      explanation: "Nửa chu vi là: $60 : 2 = 30\\text{ m}$. Chiều dài là: $(30 + 6) : 2 = 18\\text{ m}$. Chiều rộng là: $30 - 18 = 12\\text{ m}$. Diện tích mảnh đất là: $18 \\cdot 12 = 216\\text{ m}^2$."
    },
    {
      id: "t6-b20-sa4",
      badge: "Trả lời ngắn 4",
      prompt: "Bác Nam lát sân hình vuông có cạnh dài $10\\text{ m}$ bằng các viên gạch men hình vuông cạnh $50\\text{ cm}$. Hỏi bác Nam cần dùng bao nhiêu viên gạch (bỏ qua mạch vữa)?",
      correctAnswer: "400",
      acceptableAnswers: ["400", "400 viên"],
      explanation: "Diện tích sân là $10 \\cdot 10 = 100\\text{ m}^2 = 1\\ 000\\text{ }000\\text{ cm}^2$. Diện tích một viên gạch là $50 \\cdot 50 = 2\\ 500\\text{ cm}^2$. Số viên gạch cần dùng là: $1\\ 000\\ 000 : 2\\ 500 = 400$ viên."
    },
    {
      id: "t6-b20-sa5",
      badge: "Trả lời ngắn 5",
      prompt: "Một hình bình hành có diện tích bằng $135\\text{ cm}^2$ và cạnh đáy dài $15\\text{ cm}$. Chiều cao tương ứng với cạnh đáy đó bằng bao nhiêu cm?",
      correctAnswer: "9",
      acceptableAnswers: ["9", "9 cm", "9cm"],
      explanation: "Chiều cao tương ứng của hình bình hành là: $h = S : a = 135 : 15 = 9\\text{ cm}$."
    },
    {
      id: "t6-b20-sa6",
      badge: "Trả lời ngắn 6",
      prompt: "Một mảnh ruộng hình thang cân có đáy nhỏ dài $7\\text{ m}$, đáy lớn dài $13\\text{ m}$ và khoảng cách giữa hai đáy (chiều cao) là $6\\text{ m}$. Diện tích của mảnh ruộng đó bằng bao nhiêu $\\text{m}^2$?",
      correctAnswer: "60",
      acceptableAnswers: ["60", "60 m2", "60m2"],
      explanation: "Diện tích mảnh ruộng hình thang cân là: $S = \\frac{(7 + 13) \\cdot 6}{2} = \\frac{20 \\cdot 6}{2} = 60\\text{ m}^2$."
    }
  ]
};
