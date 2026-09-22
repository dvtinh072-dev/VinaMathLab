import type {
  DetailedLessonData,
  QuizQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  TheorySection,
} from "../../allGradesLessonsData";

/**
 * BÀI HỌC: BÀI TẬP CUỐI CHƯƠNG IV - MÔN TOÁN 6
 * BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (TẬP 1)
 * CHỦ ĐỀ: MỘT SỐ HÌNH PHẲNG TRONG THỰC TIỄN
 * CẤU TRÚC:
 *   - SỔ TAY KIẾN THỨC CẦN NHỚ (4 chuyên đề lý thuyết + bảng tra cứu + ví dụ mẫu)
 *   - 3 ĐỀ ÔN TẬP TỔNG HỢP CHUẨN CẤU TRÚC BỘ GD&ĐT TỪ 2025
 *     (Mỗi đề gồm: 12 câu Trắc nghiệm 4 lựa chọn + 4 câu Đúng/Sai 16 ý + 6 câu Trả lời ngắn = 10,0 điểm)
 */

// =============================================================================
// SỔ TAY KIẾN THỨC CẦN NHỚ (THEORY SECTIONS)
// =============================================================================
const CHAPTER_4_REVIEW_THEORY: TheorySection[] = [
  {
    index: "1",
    title: "Các hình đều trong thực tiễn: Tam giác đều, Hình vuông, Lục giác đều",
    points: [
      "**Tam giác đều:**\n- Có $3$ cạnh bằng nhau: $AB = BC = CA$.\n- Có $3$ góc ở các đỉnh bằng nhau và mỗi góc bằng $60^\\circ$.\n- Chu vi: $C = 3a$.",
      "**Hình vuông:**\n- Có $4$ cạnh bằng nhau: $AB = BC = CD = DA$.\n- Có $4$ góc ở đỉnh đều là góc vuông ($90^\\circ$).\n- Hai đường chéo bằng nhau và vuông góc với nhau tại trung điểm mỗi đường: $AC = BD, AC \\perp BD$.\n- Hai cặp cạnh đối song song: $AB \\parallel CD, AD \\parallel BC$.\n- Chu vi: $C = 4a$. Diện tích: $S = a^2$.",
      "**Lục giác đều:**\n- Có $6$ cạnh bằng nhau và $6$ góc ở đỉnh bằng nhau (mỗi góc $120^\\circ$).\n- Có $3$ đường chéo chính bằng nhau và cùng cắt nhau tại tâm $O$: $AD = BE = CF$.\n- Lục giác đều được ghép từ $6$ tam giác đều bằng nhau chung đỉnh $O$.",
    ],
    formula: "C_{\\text{tg đều}} = 3a; \\quad C_{\\text{vuông}} = 4a, \\ S_{\\text{vuông}} = a^2; \\quad C_{\\text{lục giác đều}} = 6a",
    exampleTitle: "Ví dụ 1 (Đặc điểm hình đều)",
    exampleProblem: "Một lục giác đều $ABCDEF$ có cạnh bằng $5\\text{ cm}$. Tính độ dài đường chéo chính và chu vi của lục giác đều đó.",
    exampleSolution: "Lục giác đều gồm $6$ tam giác đều ghép lại có chung đỉnh tại tâm $O$. Do đó khoảng cách từ tâm đến đỉnh bằng cạnh của lục giác đều ($OA = 5\\text{ cm}$).\\nĐộ dài đường chéo chính là $AD = 2 \\cdot OA = 2 \\cdot 5 = 10\\text{ cm}$.\\nChu vi lục giác đều là $C = 6 \\cdot 5 = 30\\text{ cm}$.",
  },
  {
    index: "2",
    title: "Các tứ giác đặc biệt: Hình chữ nhật, Hình thoi, Hình bình hành, Hình thang cân",
    points: [
      "**Hình chữ nhật:**\n- Có $4$ góc vuông.\n- Hai cặp cạnh đối song song và bằng nhau từng đôi một: $AB = CD, AD = BC$.\n- Hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.",
      "**Hình thoi:**\n- Có $4$ cạnh bằng nhau.\n- Các góc đối bằng nhau: $\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$.\n- Hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường: $AC \\perp BD$.",
      "**Hình bình hành:**\n- Các cặp cạnh đối song song và bằng nhau.\n- Các góc đối bằng nhau.\n- Hai đường chéo cắt nhau tại trung điểm của mỗi đường.",
      "**Hình thang cân:**\n- Có hai đáy song song: $AB \\parallel CD$.\n- Hai cạnh bên bằng nhau: $AD = BC$.\n- Hai góc kề một đáy bằng nhau.\n- Hai đường chéo bằng nhau: $AC = BD$.",
    ],
    formula: "S_{\\text{HCN}} = a \\cdot b; \\quad S_{\\text{thoi}} = \\frac{1}{2} m \\cdot n; \\quad S_{\\text{HBH}} = a \\cdot h; \\quad S_{\\text{thang}} = \\frac{(a+b)h}{2}",
    exampleTitle: "Ví dụ 2 (Phân biệt tính chất đường chéo)",
    exampleProblem: "Nêu các tứ giác đã học có tính chất: a) Hai đường chéo bằng nhau; b) Hai đường chéo vuông góc với nhau.",
    exampleSolution: "a) Các hình có hai đường chéo bằng nhau là: Hình vuông, Hình chữ nhật, Hình thang cân.\\nb) Các hình có hai đường chéo vuông góc với nhau là: Hình vuông, Hình thoi.",
  },
  {
    index: "3",
    title: "Bảng tổng hợp công thức Chu vi và Diện tích các hình phẳng",
    points: [
      "**Hình vuông:** Chu vi $C = 4a$, Diện tích $S = a^2$.",
      "**Hình chữ nhật:** Chu vi $C = 2(a + b)$, Diện tích $S = a \\cdot b$.",
      "**Hình thoi:** Chu vi $C = 4a$, Diện tích $S = \\frac{1}{2} m \\cdot n$ ($m, n$ là độ dài hai đường chéo).",
      "**Hình bình hành:** Chu vi $C = 2(a + b)$, Diện tích $S = a \\cdot h$ ($a$ là đáy, $h$ là chiều cao tương ứng).",
      "**Hình thang cân:** Chu vi $C = a + b + 2c$, Diện tích $S = \\frac{(a + b) \\cdot h}{2}$ ($a, b$ là hai đáy, $h$ là chiều cao, $c$ là cạnh bên).",
      "**Đơn vị đo:** $1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\ 000\\text{ cm}^2$; $1\\text{ ha} = 10\\ 000\\text{ m}^2$.",
    ],
    formula: "S_{\\text{thoi}} = \\frac{1}{2}mn, \\quad S_{\\text{HBH}} = ah, \\quad S_{\\text{thang}} = \\frac{(a+b)h}{2}",
    exampleTitle: "Ví dụ 3 (Tính diện tích hình thoi và hình bình hành)",
    exampleProblem: "Tính diện tích hình thoi có hai đường chéo là $12\\text{ cm}$ và $8\\text{ cm}$, và diện tích hình bình hành có đáy $12\\text{ cm}$, chiều cao $8\\text{ cm}$.",
    exampleSolution: "- Diện tích hình thoi: $S_{\\text{thoi}} = \\frac{1}{2} \\cdot 12 \\cdot 8 = 48\\text{ cm}^2$.\\n- Diện tích hình bình hành: $S_{\\text{HBH}} = 12 \\cdot 8 = 96\\text{ cm}^2$.",
  },
  {
    index: "4",
    title: "Phương pháp giải bài toán thực tiễn & Kỹ thuật tính diện tích hình ghép",
    points: [
      "**Phương pháp phân tách (Cộng diện tích):** Chia mảnh sân hoặc bồn hoa phức tạp thành các hình quen thuộc (hình vuông, chữ nhật, tam giác, hình thang) rồi cộng lại: $S_{\\text{tổng}} = S_1 + S_2 + \\dots + S_k$.",
      "**Phương pháp phần bù (Trừ diện tích):** Coi hình cần tính là phần còn lại khi khoét đi các hình nhỏ bên trong: $S_{\\text{cần tính}} = S_{\\text{bao ngoài}} - S_{\\text{khoét bỏ}}$.",
      "**Bài toán lát sàn / đóng cọc rào:**\\n- Số viên gạch = Diện tích sàn : Diện tích 1 viên gạch.\\n- Chi phí = Số lượng $\\times$ Đơn giá.\\n- Chu vi khép kín: Số cọc rào = Chu vi : Khoảng cách giữa 2 cọc.",
    ],
    formula: "S_{\\text{hình ghép}} = \\sum S_i; \\quad \\text{Số viên gạch} = \\frac{S_{\\text{sàn}}}{S_{\\text{gạch}}}",
    exampleTitle: "Ví dụ 4 (Lối đi quanh khu vườn)",
    exampleProblem: "Một khu vườn hình chữ nhật dài $15\\text{ m}$, rộng $10\\text{ m}$. Người ta mở một lối đi quanh vườn rộng $1\\text{ m}$. Tính diện tích lối đi đó.",
    exampleSolution: "Diện tích toàn bộ khu vườn: $15 \\cdot 10 = 150\\text{ m}^2$.\\nPhần đất bên trong lối đi có chiều dài là $15 - 2 \\cdot 1 = 13\\text{ m}$, chiều rộng là $10 - 2 \\cdot 1 = 8\\text{ m}$.\\nDiện tích phần đất bên trong: $13 \\cdot 8 = 104\\text{ m}^2$.\\nDiện tích lối đi là: $150 - 104 = 46\\text{ m}^2$.",
  },
];

// =============================================================================
// VÍ DỤ MINH HỌA VIDEO (VIDEO QUESTIONS)
// =============================================================================
const CHAPTER_4_REVIEW_VIDEOS = [
  {
    id: "vq-6.c4.1",
    title: "Ví dụ 1: Nhận diện đặc điểm các hình phẳng",
    question: "Tứ giác nào sau đây có hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường nhưng các góc không nhất thiết phải vuông?",
    options: [
      "Hình thoi",
      "Hình chữ nhật",
      "Hình bình hành",
      "Hình thang cân",
    ],
    correctIndex: 0,
    explanation: "Hình thoi có bốn cạnh bằng nhau và hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường. Hình chữ nhật và hình thang cân có hai đường chéo bằng nhau nhưng không vuông góc. Hình bình hành hai đường chéo chỉ cắt nhau tại trung điểm chứ không vuông góc.",
  },
  {
    id: "vq-6.c4.2",
    title: "Ví dụ 2: Tính diện tích lối đi bằng phương pháp phần bù",
    question: "Một mảnh vườn hình chữ nhật có chiều dài $12\\text{ m}$, chiều rộng $8\\text{ m}$. Người ta xây một lối đi lát sỏi xung quanh vườn có chiều rộng $1\\text{ m}$, phần đất còn lại ở giữa để trồng hoa. Diện tích của lối đi lát sỏi là:",
    options: [
      "$36\\text{ m}^2$",
      "$40\\text{ m}^2$",
      "$32\\text{ m}^2$",
      "$96\\text{ m}^2$",
    ],
    correctIndex: 0,
    explanation: "Diện tích toàn bộ khu vườn là $S_{\\text{vườn}} = 12 \\cdot 8 = 96\\text{ m}^2$. Phần đất trồng hoa bên trong có chiều dài là $12 - 2 \\cdot 1 = 10\\text{ m}$, chiều rộng là $8 - 2 \\cdot 1 = 6\\text{ m}$. Diện tích trồng hoa là $S_{\\text{hoa}} = 10 \\cdot 6 = 60\\text{ m}^2$. Diện tích lối đi là $S_{\\text{lối đi}} = 96 - 60 = 36\\text{ m}^2$.",
  },
  {
    id: "vq-6.c4.3",
    title: "Ví dụ 3: Lát sàn phòng bằng gạch men",
    question: "Một căn phòng hình chữ nhật có kích thước $6\\text{ m} \\times 4\\text{ m}$. Bác thợ cần dùng bao nhiêu viên gạch men hình vuông cạnh $40\\text{ cm}$ để lát kín sàn nhà (bỏ qua mép vữa)?",
    options: [
      "$150$ viên",
      "$120$ viên",
      "$200$ viên",
      "$180$ viên",
    ],
    correctIndex: 0,
    explanation: "Đổi $6\\text{ m} = 600\\text{ cm}$, $4\\text{ m} = 400\\text{ cm}$. Diện tích nền nhà là $600 \\cdot 400 = 240\\ 000\\text{ cm}^2$. Diện tích một viên gạch là $40 \\cdot 40 = 1\\ 600\\text{ cm}^2$. Số viên gạch cần dùng là $240\\ 000 : 1\\ 600 = 150$ viên.",
  },
];

// =============================================================================
// ĐỀ SỐ 1: ĐỀ ÔN TẬP TỔNG HỢP SỐ 1 (CHUẨN MA TRẬN BỘ GD&ĐT)
// =============================================================================
const DE_1_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "otc4-d1-q1",
    badge: "Câu 1 (NB) - Nhận biết tam giác đều",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Trong các khẳng định sau về tam giác đều, khẳng định nào ĐÚNG?",
    options: [
      "Tam giác đều có ba cạnh bằng nhau và ba góc bằng nhau",
      "Tam giác đều có hai cạnh bằng nhau và một góc vuông",
      "Tam giác đều có ba cạnh không bằng nhau",
      "Tam giác đều có ba góc có số đo khác nhau",
    ],
    correctIndex: 0,
    explanation: "Theo định nghĩa SGK, tam giác đều là tam giác có ba cạnh bằng nhau và ba góc bằng nhau (mỗi góc bằng $60^\\circ$).",
  },
  {
    id: "otc4-d1-q2",
    badge: "Câu 2 (NB) - Tính chất đường chéo hình vuông",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Cho hình vuông $ABCD$. Khẳng định nào sau đây SAI?",
    options: [
      "Hai đường chéo $AC$ và $BD$ không bằng nhau",
      "Bốn cạnh bằng nhau: $AB = BC = CD = DA$",
      "Bốn góc ở đỉnh đều là góc vuông",
      "Hai đường chéo $AC$ và $BD$ vuông góc với nhau",
    ],
    correctIndex: 0,
    explanation: "Trong hình vuông, hai đường chéo luôn bằng nhau ($AC = BD$). Do đó khẳng định hai đường chéo không bằng nhau là sai.",
  },
  {
    id: "otc4-d1-q3",
    badge: "Câu 3 (NB) - Đường chéo chính lục giác đều",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Lục giác đều có tất cả bao nhiêu đường chéo chính?",
    options: [
      "$3$ đường chéo chính",
      "$6$ đường chéo chính",
      "$2$ đường chéo chính",
      "$4$ đường chéo chính",
    ],
    correctIndex: 0,
    explanation: "Lục giác đều có đúng $3$ đường chéo chính nối các cặp đỉnh đối diện và chúng cùng cắt nhau tại tâm.",
  },
  {
    id: "otc4-d1-q4",
    badge: "Câu 4 (NB) - Công thức diện tích hình thoi",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Công thức tính diện tích hình thoi có độ dài hai đường chéo là $m$ và $n$ là:",
    options: [
      "$S = \\frac{1}{2} m \\cdot n$",
      "$S = m \\cdot n$",
      "$S = 2(m + n)$",
      "$S = (m + n) : 2$",
    ],
    correctIndex: 0,
    explanation: "Diện tích hình thoi bằng nửa tích độ dài hai đường chéo: $S = \\frac{1}{2} m \\cdot n$.",
  },
  {
    id: "otc4-d1-q5",
    badge: "Câu 5 (NB) - Tính chất hình bình hành",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Trong một hình bình hành, hai đường chéo có tính chất nào sau đây?",
    options: [
      "Cắt nhau tại trung điểm của mỗi đường",
      "Bằng nhau và vuông góc với nhau",
      "Chỉ bằng nhau chứ không cắt nhau",
      "Luôn vuông góc với nhau",
    ],
    correctIndex: 0,
    explanation: "Trong hình bình hành, hai đường chéo cắt nhau tại trung điểm của mỗi đường.",
  },
  {
    id: "otc4-d1-q6",
    badge: "Câu 6 (NB) - Cạnh bên hình thang cân",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Cho hình thang cân $ABCD$ có hai đáy là $AB$ và $CD$. Khẳng định nào sau đây ĐÚNG?",
    options: [
      "$AD = BC$",
      "$AB = CD$",
      "$AC \\perp BD$",
      "$AD \\parallel BC$",
    ],
    correctIndex: 0,
    explanation: "Hình thang cân có hai cạnh bên bằng nhau, do đó $AD = BC$.",
  },
  {
    id: "otc4-d1-q7",
    badge: "Câu 7 (TH) - Chu vi tam giác đều",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Một tam giác đều có độ dài một cạnh là $8\\text{ cm}$. Chu vi của tam giác đều đó bằng:",
    options: [
      "$24\\text{ cm}$",
      "$16\\text{ cm}$",
      "$32\\text{ cm}$",
      "$64\\text{ cm}$",
    ],
    correctIndex: 0,
    explanation: "Chu vi tam giác đều cạnh $a = 8\\text{ cm}$ là: $C = 3 \\cdot 8 = 24\\text{ cm}$.",
  },
  {
    id: "otc4-d1-q8",
    badge: "Câu 8 (TH) - Tìm cạnh hình vuông khi biết diện tích",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Một mảnh đất hình vuông có diện tích bằng $144\\text{ m}^2$. Độ dài cạnh của mảnh đất đó là:",
    options: [
      "$12\\text{ m}$",
      "$14\\text{ m}$",
      "$36\\text{ m}$",
      "$72\\text{ m}$",
    ],
    correctIndex: 0,
    explanation: "Diện tích hình vuông $S = a^2 = 144\\text{ m}^2$. Vì $12 \\cdot 12 = 144$ nên cạnh mảnh đất là $a = 12\\text{ m}$.",
  },
  {
    id: "otc4-d1-q9",
    badge: "Câu 9 (TH) - Diện tích hình bình hành",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Một hình bình hành có độ dài đáy là $15\\text{ cm}$ và chiều cao tương ứng là $8\\text{ cm}$. Diện tích của hình bình hành đó là:",
    options: [
      "$120\\text{ cm}^2$",
      "$60\\text{ cm}^2$",
      "$46\\text{ cm}^2$",
      "$240\\text{ cm}^2$",
    ],
    correctIndex: 0,
    explanation: "Diện tích hình bình hành là: $S = a \\cdot h = 15 \\cdot 8 = 120\\text{ cm}^2$.",
  },
  {
    id: "otc4-d1-q10",
    badge: "Câu 10 (TH) - Diện tích hình thang cân",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Một thửa ruộng hình thang có độ dài hai đáy lần lượt là $20\\text{ m}$ và $14\\text{ m}$, chiều cao là $10\\text{ m}$. Diện tích thửa ruộng đó bằng:",
    options: [
      "$170\\text{ m}^2$",
      "$340\\text{ m}^2$",
      "$140\\text{ m}^2$",
      "$280\\text{ m}^2$",
    ],
    correctIndex: 0,
    explanation: "Diện tích hình thang là: $S = \\frac{(20 + 14) \\cdot 10}{2} = \\frac{34 \\cdot 10}{2} = 170\\text{ m}^2$.",
  },
  {
    id: "otc4-d1-q11",
    badge: "Câu 11 (VD) - Chu vi hàng rào quanh khu vườn",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Một mảnh vườn hình chữ nhật có chiều dài $25\\text{ m}$ và chiều rộng $15\\text{ m}$. Người ta muốn rào xung quanh vườn và để lại một cổng ra vào rộng $3\\text{ m}$. Chiều dài hàng rào cần làm là:",
    options: [
      "$77\\text{ m}$",
      "$80\\text{ m}$",
      "$74\\text{ m}$",
      "$83\\text{ m}$",
    ],
    correctIndex: 0,
    explanation: "Chu vi khu vườn là: $C = 2(25 + 15) = 2 \\cdot 40 = 80\\text{ m}$. Trừ đi cổng rộng $3\\text{ m}$, chiều dài hàng rào là: $80 - 3 = 77\\text{ m}$.",
  },
  {
    id: "otc4-d1-q12",
    badge: "Câu 12 (VD) - Thay đổi kích thước hình chữ nhật",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    question: "Một hình chữ nhật có diện tích $60\\text{ cm}^2$. Nếu tăng chiều dài lên gấp đôi và giữ nguyên chiều rộng thì diện tích hình chữ nhật mới là:",
    options: [
      "$120\\text{ cm}^2$",
      "$240\\text{ cm}^2$",
      "$180\\text{ cm}^2$",
      "$60\\text{ cm}^2$",
    ],
    correctIndex: 0,
    explanation: "Diện tích ban đầu $S = a \\cdot b = 60\\text{ cm}^2$. Khi chiều dài tăng gấp đôi thành $2a$, diện tích mới là $S' = (2a) \\cdot b = 2(a \\cdot b) = 2 \\cdot 60 = 120\\text{ cm}^2$.",
  },
];

const DE_1_TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  {
    id: "otc4-d1-tf1",
    badge: "Câu 1 - Đặc điểm của các hình phẳng đều",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    prompt: "Cho các phát biểu sau về các hình học phẳng đều đã học:",
    subItems: [
      {
        id: "a",
        text: "Tam giác đều có ba cạnh bằng nhau và mỗi góc ở đỉnh bằng $60^\\circ$.",
        correctAnswer: true,
        explanation: "Đúng. Đây là định nghĩa và tính chất cơ bản của tam giác đều.",
      },
      {
        id: "b",
        text: "Hình vuông vừa là hình chữ nhật, vừa là hình thoi.",
        correctAnswer: true,
        explanation: "Đúng. Hình vuông có 4 góc vuông nên là hình chữ nhật, có 4 cạnh bằng nhau nên là hình thoi.",
      },
      {
        id: "c",
        text: "Lục giác đều có đúng $6$ đường chéo chính.",
        correctAnswer: false,
        explanation: "Sai. Lục giác đều chỉ có đúng 3 đường chéo chính nối các cặp đỉnh đối diện.",
      },
      {
        id: "d",
        text: "Ghép $6$ tam giác đều bằng nhau có chung một đỉnh sẽ tạo thành một lục giác đều.",
        correctAnswer: true,
        explanation: "Đúng. Sáu tam giác đều bằng nhau ghép xung quanh một điểm tạo nên lục giác đều.",
      },
    ],
  },
  {
    id: "otc4-d1-tf2",
    badge: "Câu 2 - Tính chất các tứ giác trong thực tiễn",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    prompt: "Xét tính đúng hay sai của các mệnh đề hình học sau:",
    subItems: [
      {
        id: "a",
        text: "Hình thoi có hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường.",
        correctAnswer: true,
        explanation: "Đúng. Đây là tính chất đặc trưng của hai đường chéo trong hình thoi.",
      },
      {
        id: "b",
        text: "Hình bình hành có hai đường chéo bằng nhau.",
        correctAnswer: false,
        explanation: "Sai. Hai đường chéo của hình bình hành nói chung không bằng nhau, chúng chỉ cắt nhau tại trung điểm mỗi đường.",
      },
      {
        id: "c",
        text: "Hình thang có hai cạnh bên bằng nhau luôn luôn là hình thang cân.",
        correctAnswer: false,
        explanation: "Sai. Hình bình hành có hai đáy song song và hai cạnh bên bằng nhau nhưng không phải là hình thang cân.",
      },
      {
        id: "d",
        text: "Trong hình thang cân, hai góc kề một đáy bằng nhau và hai đường chéo bằng nhau.",
        correctAnswer: true,
        explanation: "Đúng. Đây là các tính chất cơ bản của hình thang cân.",
      },
    ],
  },
  {
    id: "otc4-d1-tf3",
    badge: "Câu 3 - Chu vi và diện tích các hình phẳng",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    prompt: "Xét tính đúng hay sai của các khẳng định về chu vi và diện tích:",
    subItems: [
      {
        id: "a",
        text: "Hình vuông có cạnh $7\\text{ cm}$ thì có chu vi là $28\\text{ cm}$ và diện tích là $49\\text{ cm}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $C = 4 \\cdot 7 = 28\\text{ cm}$; $S = 7^2 = 49\\text{ cm}^2$.",
      },
      {
        id: "b",
        text: "Hình thoi có hai đường chéo $6\\text{ cm}$ và $8\\text{ cm}$ thì diện tích là $48\\text{ cm}^2$.",
        correctAnswer: false,
        explanation: "Sai. Diện tích hình thoi là $S = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24\\text{ cm}^2$, không phải $48\\text{ cm}^2$.",
      },
      {
        id: "c",
        text: "Hình bình hành có đáy $10\\text{ cm}$, cạnh bên $6\\text{ cm}$ thì chu vi là $32\\text{ cm}$.",
        correctAnswer: true,
        explanation: "Đúng. Chu vi là $C = 2(10 + 6) = 32\\text{ cm}$.",
      },
      {
        id: "d",
        text: "Nếu gấp đôi cạnh của một hình vuông thì diện tích của nó tăng gấp $4$ lần.",
        correctAnswer: true,
        explanation: "Đúng. Cạnh mới là $2a$, diện tích mới là $(2a)^2 = 4a^2 = 4S$.",
      },
    ],
  },
  {
    id: "otc4-d1-tf4",
    badge: "Câu 4 - Bài toán thực tế cải tạo sân vườn",
    source: "Đề ôn tập số 1 - Bài tập cuối chương IV",
    prompt: "Một mảnh đất hình chữ nhật có kích thước $20\\text{ m} \\times 10\\text{ m}$. Người ta xây một bồn hoa hình thoi ở chính giữa có hai đường chéo lần lượt bằng $8\\text{ m}$ và $6\\text{ m}$, phần còn lại trồng cỏ:",
    subItems: [
      {
        id: "a",
        text: "Diện tích của cả mảnh đất là $200\\text{ m}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $S_{\\text{đất}} = 20 \\cdot 10 = 200\\text{ m}^2$.",
      },
      {
        id: "b",
        text: "Diện tích của bồn hoa hình thoi là $48\\text{ m}^2$.",
        correctAnswer: false,
        explanation: "Sai. Diện tích bồn hoa hình thoi là $S_{\\text{thoi}} = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24\\text{ m}^2$.",
      },
      {
        id: "c",
        text: "Diện tích phần đất trồng cỏ là $176\\text{ m}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $S_{\\text{cỏ}} = 200 - 24 = 176\\text{ m}^2$.",
      },
      {
        id: "d",
        text: "Nếu chi phí trồng cỏ là $50\\ 000$ đồng/m$^2$ thì tổng số tiền trồng cỏ là $8\\ 800\\ 000$ đồng.",
        correctAnswer: true,
        explanation: "Đúng. Số tiền là $176 \\cdot 50\\ 000 = 8\\ 800\\ 000$ đồng.",
      },
    ],
  },
];

const DE_1_SHORT_ANSWER_QUESTIONS: ShortAnswerQuestion[] = [
  {
    id: "otc4-d1-sa1",
    badge: "Câu 1 (TH) - Tìm chiều rộng hình chữ nhật",
    prompt: "Một thửa ruộng hình chữ nhật có chu vi bằng $68\\text{ m}$, chiều dài là $24\\text{ m}$. Tính chiều rộng của thửa ruộng đó theo mét.",
    correctAnswer: "10",
    acceptableAnswers: ["10", "mười", "10m"],
    explanation: "Nửa chu vi của thửa ruộng là $68 : 2 = 34\\text{ m}$. Chiều rộng thửa ruộng là: $34 - 24 = 10\\text{ m}$.",
  },
  {
    id: "otc4-d1-sa2",
    badge: "Câu 2 (TH) - Tính diện tích hình thoi",
    prompt: "Một tấm biển quảng cáo hình thoi có độ dài hai đường chéo là $14\\text{ dm}$ và $10\\text{ dm}$. Diện tích của tấm biển đó là bao nhiêu đề-xi-mét vuông?",
    correctAnswer: "70",
    acceptableAnswers: ["70", "bảy mươi", "70 dm2"],
    explanation: "Diện tích tấm biển là: $S = \\frac{1}{2} \\cdot 14 \\cdot 10 = 70\\text{ dm}^2$.",
  },
  {
    id: "otc4-d1-sa3",
    badge: "Câu 3 (TH) - Tính chiều cao hình bình hành",
    prompt: "Một hình bình hành có diện tích bằng $96\\text{ cm}^2$ và độ dài cạnh đáy tương ứng là $12\\text{ cm}$. Chiều cao của hình bình hành đó bằng bao nhiêu xăng-ti-mét?",
    correctAnswer: "8",
    acceptableAnswers: ["8", "tám", "8cm"],
    explanation: "Chiều cao của hình bình hành là: $h = S : a = 96 : 12 = 8\\text{ cm}$.",
  },
  {
    id: "otc4-d1-sa4",
    badge: "Câu 4 (VD) - Số viên gạch lát sàn",
    prompt: "Một phòng học hình chữ nhật có kích thước $8\\text{ m} \\times 6\\text{ m}$. Người ta dùng gạch men hình vuông cạnh $50\\text{ cm}$ để lát sàn. Cần tất cả bao nhiêu viên gạch để lát kín phòng học đó (coi mạch vữa không đáng kể)?",
    correctAnswer: "192",
    acceptableAnswers: ["192", "một trăm chín mươi hai", "192 viên"],
    explanation: "Diện tích sàn là $8 \\cdot 6 = 48\\text{ m}^2 = 480\\ 000\\text{ cm}^2$. Diện tích một viên gạch là $50 \\cdot 50 = 2\\ 500\\text{ cm}^2$. Số viên gạch cần là: $480\\ 000 : 2\\ 500 = 192$ viên.",
  },
  {
    id: "otc4-d1-sa5",
    badge: "Câu 5 (VD) - Diện tích mảnh đất hình thang",
    prompt: "Một mảnh đất hình thang cân có đáy nhỏ $15\\text{ m}$, đáy lớn gấp đôi đáy nhỏ, và khoảng cách giữa hai đáy (chiều cao) là $12\\text{ m}$. Diện tích mảnh đất đó bằng bao nhiêu mét vuông?",
    correctAnswer: "270",
    acceptableAnswers: ["270", "hai trăm bảy mươi", "270m2"],
    explanation: "Đáy lớn của mảnh đất là $15 \\cdot 2 = 30\\text{ m}$. Diện tích là: $S = \\frac{(15 + 30) \\cdot 12}{2} = \\frac{45 \\cdot 12}{2} = 45 \\cdot 6 = 270\\text{ m}^2$.",
  },
  {
    id: "otc4-d1-sa6",
    badge: "Câu 6 (VDC) - Tính diện tích lối đi quanh sân",
    prompt: "Một sân chơi hình vuông có cạnh $20\\text{ m}$. Xung quanh mép sân người ta làm một lối đi dạo có bề rộng $2\\text{ m}$ (nằm hoàn toàn phía trong sân). Diện tích của phần lối đi dạo này là bao nhiêu mét vuông?",
    correctAnswer: "144",
    acceptableAnswers: ["144", "một trăm bốn mươi bốn", "144m2"],
    explanation: "Diện tích toàn bộ sân là $20 \\cdot 20 = 400\\text{ m}^2$. Phần sân chơi bên trong lối đi là một hình vuông có cạnh bằng $20 - 2 \\cdot 2 = 16\\text{ m}$. Diện tích phần bên trong là $16 \\cdot 16 = 256\\text{ m}^2$. Diện tích lối đi là: $400 - 256 = 144\\text{ m}^2$.",
  },
];

// =============================================================================
// ĐỀ SỐ 2: ĐỀ ÔN TẬP TỔNG HỢP SỐ 2 (RÈN LUYỆN NÂNG CAO)
// =============================================================================
const DE_2_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "otc4-d2-q1",
    badge: "Câu 1 (NB) - Số đo góc tam giác đều",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Mỗi góc của tam giác đều có số đo bằng bao nhiêu độ?",
    options: [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "$120^\\circ$",
    ],
    correctIndex: 0,
    explanation: "Ba góc của tam giác đều bằng nhau và tổng ba góc là $180^\\circ$, do đó mỗi góc bằng $180^\\circ : 3 = 60^\\circ$.",
  },
  {
    id: "otc4-d2-q2",
    badge: "Câu 2 (NB) - Số đo góc lục giác đều",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Mỗi góc ở đỉnh của một lục giác đều có số đo bằng:",
    options: [
      "$120^\\circ$",
      "$90^\\circ$",
      "$60^\\circ$",
      "$108^\\circ$",
    ],
    correctIndex: 0,
    explanation: "Theo sách giáo khoa, mỗi góc ở đỉnh của hình lục giác đều có số đo bằng $120^\\circ$.",
  },
  {
    id: "otc4-d2-q3",
    badge: "Câu 3 (NB) - Hai cạnh đối của hình chữ nhật",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Trong hình chữ nhật $ABCD$, hai cạnh $AB$ và $CD$ có mối quan hệ gì?",
    options: [
      "Song song và bằng nhau",
      "Vuông góc với nhau",
      "Cắt nhau tại trung điểm",
      "Chỉ bằng nhau chứ không song song",
    ],
    correctIndex: 0,
    explanation: "Trong hình chữ nhật, các cặp cạnh đối luôn song song và bằng nhau ($AB \\parallel CD$ và $AB = CD$).",
  },
  {
    id: "otc4-d2-q4",
    badge: "Câu 4 (NB) - Nhận dạng hình thoi",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Tứ giác có bốn cạnh bằng nhau là hình gì?",
    options: [
      "Hình thoi",
      "Hình chữ nhật",
      "Hình thang cân",
      "Hình bình hành bất kì",
    ],
    correctIndex: 0,
    explanation: "Tứ giác có bốn cạnh bằng nhau theo định nghĩa chính là hình thoi.",
  },
  {
    id: "otc4-d2-q5",
    badge: "Câu 5 (NB) - Chu vi hình bình hành",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Một hình bình hành có độ dài hai cạnh liên tiếp là $a$ và $b$. Chu vi của hình bình hành đó là:",
    options: [
      "$C = 2(a + b)$",
      "$C = a + b$",
      "$C = 4(a + b)$",
      "$C = a \\cdot b$",
    ],
    correctIndex: 0,
    explanation: "Chu vi hình bình hành bằng tổng độ dài 4 cạnh: $C = 2(a + b)$.",
  },
  {
    id: "otc4-d2-q6",
    badge: "Câu 6 (NB) - Đường chéo hình thang cân",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Cho hình thang cân $EFGH$ với hai đáy là $EF$ và $GH$. Kết luận nào sau đây ĐÚNG?",
    options: [
      "$EG = FH$",
      "$EG \\perp FH$",
      "$EF = GH$",
      "$EG = EF$",
    ],
    correctIndex: 0,
    explanation: "Trong hình thang cân, hai đường chéo luôn bằng nhau, do đó $EG = FH$.",
  },
  {
    id: "otc4-d2-q7",
    badge: "Câu 7 (TH) - Chu vi lục giác đều",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Một lục giác đều có chu vi bằng $42\\text{ cm}$. Độ dài mỗi cạnh của lục giác đều đó là:",
    options: [
      "$7\\text{ cm}$",
      "$6\\text{ cm}$",
      "$14\\text{ cm}$",
      "$8\\text{ cm}$",
    ],
    correctIndex: 0,
    explanation: "Lục giác đều có 6 cạnh bằng nhau nên độ dài mỗi cạnh là: $a = 42 : 6 = 7\\text{ cm}$.",
  },
  {
    id: "otc4-d2-q8",
    badge: "Câu 8 (TH) - Chu vi hình thoi",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Một chiếc gương hình thoi có cạnh bằng $25\\text{ cm}$. Chiều dài sợi dây viền quanh mép gương là:",
    options: [
      "$100\\text{ cm}$",
      "$50\\text{ cm}$",
      "$75\\text{ cm}$",
      "$125\\text{ cm}$",
    ],
    correctIndex: 0,
    explanation: "Chu vi hình thoi là: $C = 4a = 4 \\cdot 25 = 100\\text{ cm}$.",
  },
  {
    id: "otc4-d2-q9",
    badge: "Câu 9 (TH) - Đổi đơn vị diện tích",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Giá trị của $3\\text{ m}^2\\ 25\\text{ dm}^2$ khi đổi sang đề-xi-mét vuông bằng:",
    options: [
      "$325\\text{ dm}^2$",
      "$3\\ 025\\text{ dm}^2$",
      "$3\\ 250\\text{ dm}^2$",
      "$55\\text{ dm}^2$",
    ],
    correctIndex: 0,
    explanation: "Vì $1\\text{ m}^2 = 100\\text{ dm}^2$ nên $3\\text{ m}^2\\ 25\\text{ dm}^2 = 300 + 25 = 325\\text{ dm}^2$.",
  },
  {
    id: "otc4-d2-q10",
    badge: "Câu 10 (TH) - Tính đường chéo thứ hai của hình thoi",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Một hình thoi có diện tích bằng $40\\text{ cm}^2$ và một đường chéo dài $8\\text{ cm}$. Độ dài đường chéo còn lại là:",
    options: [
      "$10\\text{ cm}$",
      "$5\\text{ cm}$",
      "$20\\text{ cm}$",
      "$16\\text{ cm}$",
    ],
    correctIndex: 0,
    explanation: "Ta có $S = \\frac{1}{2} m \\cdot n \\Rightarrow 40 = \\frac{1}{2} \\cdot 8 \\cdot n \\Rightarrow 40 = 4n \\Rightarrow n = 10\\text{ cm}$.",
  },
  {
    id: "otc4-d2-q11",
    badge: "Câu 11 (VD) - So sánh diện tích hai hình",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Một hình vuông có cạnh $10\\text{ cm}$ và một hình chữ nhật có kích thước $16\\text{ cm} \\times 6\\text{ cm}$. Kết luận nào sau đây ĐÚNG?",
    options: [
      "Diện tích hình vuông lớn hơn diện tích hình chữ nhật $4\\text{ cm}^2$",
      "Diện tích hình chữ nhật lớn hơn diện tích hình vuông $4\\text{ cm}^2$",
      "Hai hình có diện tích bằng nhau",
      "Chu vi hình vuông lớn hơn chu vi hình chữ nhật",
    ],
    correctIndex: 0,
    explanation: "Diện tích hình vuông $S_1 = 10^2 = 100\\text{ cm}^2$. Diện tích hình chữ nhật $S_2 = 16 \\cdot 6 = 96\\text{ cm}^2$. Hiệu là $100 - 96 = 4\\text{ cm}^2$.",
  },
  {
    id: "otc4-d2-q12",
    badge: "Câu 12 (VD) - Chi phí lắp kính cửa sổ",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    question: "Một khung cửa sổ hình chữ nhật có kích thước $150\\text{ cm} \\times 80\\text{ cm}$. Giá tiền một mét vuông kính là $400\\ 000$ đồng. Chi phí tiền kính cho cửa sổ đó là:",
    options: [
      "$480\\ 000$ đồng",
      "$960\\ 000$ đồng",
      "$240\\ 000$ đồng",
      "$600\\ 000$ đồng",
    ],
    correctIndex: 0,
    explanation: "Đổi $150\\text{ cm} = 1{,}5\\text{ m}$, $80\\text{ cm} = 0{,}8\\text{ m}$. Diện tích cửa sổ là $1{,}5 \\cdot 0{,}8 = 1{,}2\\text{ m}^2$. Tiền kính là $1{,}2 \\cdot 400\\ 000 = 480\\ 000$ đồng.",
  },
];

const DE_2_TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  {
    id: "otc4-d2-tf1",
    badge: "Câu 1 - Khẳng định về đường chéo và góc",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    prompt: "Xét tính đúng hay sai của các khẳng định sau về các hình phẳng:",
    subItems: [
      {
        id: "a",
        text: "Hình chữ nhật có hai đường chéo bằng nhau và vuông góc với nhau.",
        correctAnswer: false,
        explanation: "Sai. Hai đường chéo của hình chữ nhật bằng nhau nhưng không nhất thiết phải vuông góc với nhau (chỉ vuông góc khi là hình vuông).",
      },
      {
        id: "b",
        text: "Hình thoi có các góc đối bằng nhau.",
        correctAnswer: true,
        explanation: "Đúng. Đây là tính chất của hình thoi (vì hình thoi cũng là hình bình hành).",
      },
      {
        id: "c",
        text: "Hình thang cân có hai đường chéo bằng nhau.",
        correctAnswer: true,
        explanation: "Đúng. Tính chất của hình thang cân là hai đường chéo bằng nhau.",
      },
      {
        id: "d",
        text: "Tam giác đều có $3$ trục đối xứng đi qua ba đỉnh và trung điểm cạnh đối diện.",
        correctAnswer: true,
        explanation: "Đúng. Tam giác đều có đúng 3 trục đối xứng.",
      },
    ],
  },
  {
    id: "otc4-d2-tf2",
    badge: "Câu 2 - Chu vi các hình hình học",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    prompt: "Cho các phát biểu về chu vi của các hình sau:",
    subItems: [
      {
        id: "a",
        text: "Hình thoi cạnh $a$ và hình vuông cạnh $a$ có chu vi bằng nhau.",
        correctAnswer: true,
        explanation: "Đúng. Cả hai đều có chu vi bằng $4a$.",
      },
      {
        id: "b",
        text: "Hình bình hành có độ dài đáy $8\\text{ cm}$ và cạnh bên $5\\text{ cm}$ có chu vi là $26\\text{ cm}$.",
        correctAnswer: true,
        explanation: "Đúng. $C = 2(8 + 5) = 2 \\cdot 13 = 26\\text{ cm}$.",
      },
      {
        id: "c",
        text: "Hình thang cân có hai đáy $6\\text{ cm}$ và $10\\text{ cm}$, cạnh bên $4\\text{ cm}$ có chu vi là $20\\text{ cm}$.",
        correctAnswer: false,
        explanation: "Sai. Hình thang cân có 2 cạnh bên bằng nhau nên $C = 6 + 10 + 2 \\cdot 4 = 24\\text{ cm}$.",
      },
      {
        id: "d",
        text: "Nếu chu vi một hình chữ nhật là $40\\text{ cm}$ thì tổng chiều dài và chiều rộng của nó là $20\\text{ cm}$.",
        correctAnswer: true,
        explanation: "Đúng. Nửa chu vi là $40 : 2 = 20\\text{ cm}$.",
      },
    ],
  },
  {
    id: "otc4-d2-tf3",
    badge: "Câu 3 - Diện tích các hình và tỉ số biến thiên",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    prompt: "Xét tính đúng hay sai của các bài toán diện tích sau:",
    subItems: [
      {
        id: "a",
        text: "Diện tích hình bình hành có đáy $12\\text{ cm}$ và chiều cao $7\\text{ cm}$ là $84\\text{ cm}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $S = 12 \\cdot 7 = 84\\text{ cm}^2$.",
      },
      {
        id: "b",
        text: "Hình thang có độ dài hai đáy lần lượt là $8\\text{ cm}$ và $12\\text{ cm}$, chiều cao $5\\text{ cm}$ thì diện tích là $100\\text{ cm}^2$.",
        correctAnswer: false,
        explanation: "Sai. $S = \\frac{(8 + 12) \\cdot 5}{2} = \\frac{20 \\cdot 5}{2} = 50\\text{ cm}^2$, không phải $100\\text{ cm}^2$.",
      },
      {
        id: "c",
        text: "Nếu cả chiều dài và chiều rộng của hình chữ nhật đều tăng gấp đôi thì diện tích tăng gấp $4$ lần.",
        correctAnswer: true,
        explanation: "Đúng. $S' = (2a) \\cdot (2b) = 4(ab) = 4S$.",
      },
      {
        id: "d",
        text: "Một hình thoi có độ dài hai đường chéo cùng tăng lên $3$ lần thì diện tích tăng lên $6$ lần.",
        correctAnswer: false,
        explanation: "Sai. $S' = \\frac{1}{2}(3m)(3n) = 9 \\cdot \\left(\\frac{1}{2}mn\\right) = 9S$, tức tăng 9 lần chứ không phải 6 lần.",
      },
    ],
  },
  {
    id: "otc4-d2-tf4",
    badge: "Câu 4 - Lát sàn nhà kết hợp",
    source: "Đề ôn tập số 2 - Bài tập cuối chương IV",
    prompt: "Một căn phòng có nền hình chữ nhật dài $8\\text{ m}$ và rộng $5\\text{ m}$. Người ta dùng các viên gạch men hình vuông cạnh $40\\text{ cm}$ để lát sàn:",
    subItems: [
      {
        id: "a",
        text: "Diện tích nền căn phòng là $40\\text{ m}^2 = 400\\ 000\\text{ cm}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $8 \\cdot 5 = 40\\text{ m}^2 = 400\\ 000\\text{ cm}^2$.",
      },
      {
        id: "b",
        text: "Diện tích một viên gạch men là $1\\ 600\\text{ cm}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $40 \\cdot 40 = 1\\ 600\\text{ cm}^2$.",
      },
      {
        id: "c",
        text: "Cần đúng $200$ viên gạch để lát hết nền phòng học.",
        correctAnswer: false,
        explanation: "Sai. Số viên gạch cần là $400\\ 000 : 1\\ 600 = 250$ viên, không phải 200 viên.",
      },
      {
        id: "d",
        text: "Nếu giá một hộp gạch gồm $5$ viên là $120\\ 000$ đồng thì tổng tiền mua gạch là $6\\ 000\\ 000$ đồng.",
        correctAnswer: true,
        explanation: "Đúng. Số hộp gạch cần mua là $250 : 5 = 50$ hộp. Tiền mua là $50 \\cdot 120\\ 000 = 6\\ 000\\ 000$ đồng.",
      },
    ],
  },
];

const DE_2_SHORT_ANSWER_QUESTIONS: ShortAnswerQuestion[] = [
  {
    id: "otc4-d2-sa1",
    badge: "Câu 1 (TH) - Tìm chiều cao hình thang",
    prompt: "Một mảnh ruộng hình thang có diện tích bằng $180\\text{ m}^2$, tổng độ dài hai đáy là $36\\text{ m}$. Chiều cao của mảnh ruộng hình thang đó bằng bao nhiêu mét?",
    correctAnswer: "10",
    acceptableAnswers: ["10", "mười", "10m"],
    explanation: "Ta có $S = \\frac{(a+b)h}{2} \\Rightarrow 180 = \\frac{36 \\cdot h}{2} = 18h \\Rightarrow h = 180 : 18 = 10\\text{ m}$.",
  },
  {
    id: "otc4-d2-sa2",
    badge: "Câu 2 (TH) - Chu vi hình chữ nhật",
    prompt: "Một hình chữ nhật có diện tích bằng $96\\text{ cm}^2$ và chiều rộng bằng $8\\text{ cm}$. Chu vi của hình chữ nhật đó là bao nhiêu xăng-ti-mét?",
    correctAnswer: "40",
    acceptableAnswers: ["40", "bốn mươi", "40cm"],
    explanation: "Chiều dài là: $96 : 8 = 12\\text{ cm}$. Chu vi là: $2(12 + 8) = 40\\text{ cm}$.",
  },
  {
    id: "otc4-d2-sa3",
    badge: "Câu 3 (TH) - Diện tích lục giác đều ghép từ tam giác đều",
    prompt: "Một lục giác đều được ghép lại từ $6$ tam giác đều bằng nhau. Biết mỗi tam giác đều có diện tích bằng $15\\text{ cm}^2$. Diện tích của hình lục giác đều đó là bao nhiêu xăng-ti-mét vuông?",
    correctAnswer: "90",
    acceptableAnswers: ["90", "chín mươi", "90cm2"],
    explanation: "Diện tích lục giác đều bằng tổng diện tích 6 tam giác đều: $6 \\cdot 15 = 90\\text{ cm}^2$.",
  },
  {
    id: "otc4-d2-sa4",
    badge: "Câu 4 (VD) - Mảnh đất hình chữ nhật chia bồn hoa",
    prompt: "Một mảnh vườn hình chữ nhật có chiều dài $18\\text{ m}$ và chiều rộng $12\\text{ m}$. Người ta xây một bồn hoa hình vuông cạnh $4\\text{ m}$ ở góc vườn. Diện tích phần đất còn lại của vườn là bao nhiêu mét vuông?",
    correctAnswer: "200",
    acceptableAnswers: ["200", "hai trăm", "200m2"],
    explanation: "Diện tích cả mảnh vườn là $18 \\cdot 12 = 216\\text{ m}^2$. Diện tích bồn hoa hình vuông là $4 \\cdot 4 = 16\\text{ m}^2$. Diện tích phần đất còn lại là: $216 - 16 = 200\\text{ m}^2$.",
  },
  {
    id: "otc4-d2-sa5",
    badge: "Câu 5 (VD) - Tính số cọc rào xung quanh vườn",
    prompt: "Một khu đất hình vuông có cạnh $24\\text{ m}$. Người ta rào cọc xung quanh khu đất đó, cứ cách $3\\text{ m}$ đóng một cọc (tại mỗi góc vuông đều có cọc). Hỏi cần đóng tất cả bao nhiêu cọc?",
    correctAnswer: "32",
    acceptableAnswers: ["32", "ba mươi hai", "32 cọc"],
    explanation: "Chu vi của khu đất là $24 \\cdot 4 = 96\\text{ m}$. Vì chu vi là đường khép kín nên số cọc bằng chu vi chia cho khoảng cách giữa hai cọc: $96 : 3 = 32$ cọc.",
  },
  {
    id: "otc4-d2-sa6",
    badge: "Câu 6 (VDC) - Tính diện tích hình ghép phức hợp",
    prompt: "Một mảnh đất có hình dạng gồm một hình chữ nhật kích thước $10\\text{ m} \\times 6\\text{ m}$ và gắn liền với một hình thang cân có đáy lớn là một cạnh dài của hình chữ nhật ($10\\text{ m}$), đáy nhỏ $6\\text{ m}$ và chiều cao của hình thang là $4\\text{ m}$. Diện tích của toàn bộ mảnh đất đó là bao nhiêu mét vuông?",
    correctAnswer: "92",
    acceptableAnswers: ["92", "chín mươi hai", "92m2"],
    explanation: "Diện tích phần hình chữ nhật là: $S_1 = 10 \\cdot 6 = 60\\text{ m}^2$. Diện tích phần hình thang cân là: $S_2 = \\frac{(10 + 6) \\cdot 4}{2} = \\frac{16 \\cdot 4}{2} = 32\\text{ m}^2$. Tổng diện tích mảnh đất là: $S = 60 + 32 = 92\\text{ m}^2$.",
  },
];

// =============================================================================
// ĐỀ SỐ 3: ĐỀ ÔN TẬP TỔNG HỢP SỐ 3 (THỰC CHIẾN & VẬN DỤNG THỰC TẾ)
// =============================================================================
const DE_3_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "otc4-d3-q1",
    badge: "Câu 1 (NB) - Cạnh của hình vuông",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Một hình vuông có chu vi là $36\\text{ cm}$. Độ dài cạnh của hình vuông đó là:",
    options: [
      "$9\\text{ cm}$",
      "$6\\text{ cm}$",
      "$18\\text{ cm}$",
      "$12\\text{ cm}$",
    ],
    correctIndex: 0,
    explanation: "Cạnh của hình vuông là: $a = C : 4 = 36 : 4 = 9\\text{ cm}$.",
  },
  {
    id: "otc4-d3-q2",
    badge: "Câu 2 (NB) - Tính chất các góc đối hình thoi",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Cho hình thoi $ABCD$. Khẳng định nào sau đây ĐÚNG về các góc của hình thoi?",
    options: [
      "$\\widehat{A} = \\widehat{C}$ và $\\widehat{B} = \\widehat{D}$",
      "$\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ$",
      "Bốn góc có số đo đôi một khác nhau",
      "$\\widehat{A} + \\widehat{C} = 90^\\circ$",
    ],
    correctIndex: 0,
    explanation: "Trong hình thoi, hai góc đối diện luôn bằng nhau ($\\\\widehat{A} = \\\\widehat{C}$ và $\\\\widehat{B} = \\\\widehat{D}$).",
  },
  {
    id: "otc4-d3-q3",
    badge: "Câu 3 (NB) - Công thức diện tích hình chữ nhật",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Công thức tính diện tích hình chữ nhật có chiều dài $a$ và chiều rộng $b$ là:",
    options: [
      "$S = a \\cdot b$",
      "$S = 2(a + b)$",
      "$S = a + b$",
      "$S = a^2$",
    ],
    correctIndex: 0,
    explanation: "Diện tích hình chữ nhật bằng tích chiều dài nhân chiều rộng: $S = a \\cdot b$.",
  },
  {
    id: "otc4-d3-q4",
    badge: "Câu 4 (NB) - Cạnh đáy và cạnh bên hình thang",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Trong hình thang, hai cạnh song song với nhau được gọi là:",
    options: [
      "Hai cạnh đáy",
      "Hai cạnh bên",
      "Hai đường chéo",
      "Hai đường cao",
    ],
    correctIndex: 0,
    explanation: "Theo định nghĩa, hai cạnh song song trong hình thang được gọi là hai cạnh đáy.",
  },
  {
    id: "otc4-d3-q5",
    badge: "Câu 5 (NB) - Số trục đối xứng của hình chữ nhật",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Hình chữ nhật (không phải hình vuông) có tất cả bao nhiêu trục đối xứng?",
    options: [
      "$2$ trục đối xứng",
      "$4$ trục đối xứng",
      "$1$ trục đối xứng",
      "$0$ trục đối xứng",
    ],
    correctIndex: 0,
    explanation: "Hình chữ nhật có 2 trục đối xứng là hai đường trung trực của các cặp cạnh đối diện.",
  },
  {
    id: "otc4-d3-q6",
    badge: "Câu 6 (NB) - Đặc điểm cạnh hình bình hành",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Trong hình bình hành $MNPQ$, cặp cạnh nào sau đây song song và bằng nhau?",
    options: [
      "$MN$ và $PQ$",
      "$MN$ và $NP$",
      "$MQ$ và $MN$",
      "$MP$ và $NQ$",
    ],
    correctIndex: 0,
    explanation: "Trong hình bình hành $MNPQ$, cặp cạnh đối $MN$ và $PQ$ song song và bằng nhau.",
  },
  {
    id: "otc4-d3-q7",
    badge: "Câu 7 (TH) - Diện tích tam giác đều ghép thành lục giác đều",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Một lục giác đều có diện tích bằng $72\\text{ cm}^2$. Khi nối tâm của lục giác đều với $6$ đỉnh, ta được $6$ tam giác đều bằng nhau. Diện tích của mỗi tam giác đều đó là:",
    options: [
      "$12\\text{ cm}^2$",
      "$18\\text{ cm}^2$",
      "$24\\text{ cm}^2$",
      "$36\\text{ cm}^2$",
    ],
    correctIndex: 0,
    explanation: "Diện tích của mỗi tam giác đều là: $72 : 6 = 12\\text{ cm}^2$.",
  },
  {
    id: "otc4-d3-q8",
    badge: "Câu 8 (TH) - Tính cạnh đáy hình bình hành",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Một mảnh đất hình bình hành có diện tích $150\\text{ m}^2$ và chiều cao bằng $10\\text{ m}$. Độ dài cạnh đáy tương ứng là:",
    options: [
      "$15\\text{ m}$",
      "$30\\text{ m}$",
      "$75\\text{ m}$",
      "$20\\text{ m}$",
    ],
    correctIndex: 0,
    explanation: "Độ dài cạnh đáy là: $a = S : h = 150 : 10 = 15\\text{ m}$.",
  },
  {
    id: "otc4-d3-q9",
    badge: "Câu 9 (TH) - Chu vi hình thang cân",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Một hình thang cân có độ dài hai đáy là $12\\text{ cm}$ và $8\\text{ cm}$, cạnh bên dài $5\\text{ cm}$. Chu vi của hình thang cân đó là:",
    options: [
      "$30\\text{ cm}$",
      "$25\\text{ cm}$",
      "$35\\text{ cm}$",
      "$40\\text{ cm}$",
    ],
    correctIndex: 0,
    explanation: "Hình thang cân có 2 cạnh bên bằng nhau nên chu vi là: $C = 12 + 8 + 5 \\cdot 2 = 20 + 10 = 30\\text{ cm}$.",
  },
  {
    id: "otc4-d3-q10",
    badge: "Câu 10 (TH) - Diện tích hình thoi theo đường chéo",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Một tấm tôn hình thoi có đường chéo lớn dài $16\\text{ dm}$, đường chéo bé bằng một nửa đường chéo lớn. Diện tích tấm tôn đó là:",
    options: [
      "$64\\text{ dm}^2$",
      "$128\\text{ dm}^2$",
      "$32\\text{ dm}^2$",
      "$256\\text{ dm}^2$",
    ],
    correctIndex: 0,
    explanation: "Đường chéo bé là $16 : 2 = 8\\text{ dm}$. Diện tích tấm tôn là: $S = \\frac{1}{2} \\cdot 16 \\cdot 8 = 64\\text{ dm}^2$.",
  },
  {
    id: "otc4-d3-q11",
    badge: "Câu 11 (VD) - Chi phí mua lưới rào mảnh vườn",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Một vườn hoa hình vuông có cạnh $15\\text{ m}$. Bác Ba muốn mua lưới B40 rào quanh vườn, biết giá mỗi mét lưới là $70\\ 000$ đồng. Tổng số tiền bác Ba phải trả là:",
    options: [
      "$4\\ 200\\ 000$ đồng",
      "$2\\ 100\\ 000$ đồng",
      "$15\\ 750\\ 000$ đồng",
      "$1\\ 050\\ 000$ đồng",
    ],
    correctIndex: 0,
    explanation: "Chu vi vườn hoa là $4 \\cdot 15 = 60\\text{ m}$. Số tiền mua lưới là: $60 \\cdot 70\\ 000 = 4\\ 200\\ 000$ đồng.",
  },
  {
    id: "otc4-d3-q12",
    badge: "Câu 12 (VD) - Thu hoạch lúa trên thửa ruộng hình thang",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    question: "Một thửa ruộng hình thang có diện tích $600\\text{ m}^2$. Trung bình cứ $100\\text{ m}^2$ thu hoạch được $70\\text{ kg}$ thóc. Hỏi cả thửa ruộng thu hoạch được bao nhiêu tạ thóc?",
    options: [
      "$4{,}2$ tạ",
      "$42$ tạ",
      "$420$ tạ",
      "$0{,}42$ tạ",
    ],
    correctIndex: 0,
    explanation: "Số kg thóc thu hoạch được là: $(600 : 100) \\cdot 70 = 6 \\cdot 70 = 420\\text{ kg}$. Đổi $420\\text{ kg} = 4{,}2$ tạ thóc.",
  },
];

const DE_3_TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  {
    id: "otc4-d3-tf1",
    badge: "Câu 1 - Định nghĩa và phân loại hình học",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    prompt: "Xét tính đúng hay sai của các mệnh đề hình học sau:",
    subItems: [
      {
        id: "a",
        text: "Mọi hình vuông đều là hình chữ nhật và cũng đều là hình thoi.",
        correctAnswer: true,
        explanation: "Đúng. Hình vuông có 4 góc vuông nên là hình chữ nhật, có 4 cạnh bằng nhau nên là hình thoi.",
      },
      {
        id: "b",
        text: "Hình thoi có bốn góc bằng nhau.",
        correctAnswer: false,
        explanation: "Sai. Hình thoi chỉ có các góc đối bằng nhau. Khi bốn góc bằng nhau (cùng bằng 90 độ) thì hình thoi trở thành hình vuông.",
      },
      {
        id: "c",
        text: "Tam giác đều là tam giác có ba cạnh bằng nhau.",
        correctAnswer: true,
        explanation: "Đúng. Đây là định nghĩa tam giác đều.",
      },
      {
        id: "d",
        text: "Lục giác đều có tất cả các cạnh bằng nhau và các góc bằng nhau.",
        correctAnswer: true,
        explanation: "Đúng. Đây là định nghĩa lục giác đều.",
      },
    ],
  },
  {
    id: "otc4-d3-tf2",
    badge: "Câu 2 - Công thức tính chu vi và diện tích",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    prompt: "Cho các khẳng định về công thức tính:",
    subItems: [
      {
        id: "a",
        text: "Chu vi của lục giác đều cạnh $a$ bằng $6a$.",
        correctAnswer: true,
        explanation: "Đúng. Lục giác đều có 6 cạnh bằng nhau nên chu vi $C = 6a$.",
      },
      {
        id: "b",
        text: "Diện tích hình thang bằng tổng độ dài hai đáy nhân với chiều cao.",
        correctAnswer: false,
        explanation: "Sai. Diện tích hình thang bằng tổng độ dài hai đáy nhân với chiều cao rồi chia cho 2.",
      },
      {
        id: "c",
        text: "Diện tích hình bình hành có đáy $a$ và chiều cao $h$ tương ứng là $S = a \\cdot h$.",
        correctAnswer: true,
        explanation: "Đúng. Công thức tính diện tích hình bình hành là $S = a \\cdot h$.",
      },
      {
        id: "d",
        text: "Nếu một hình chữ nhật có chu vi $30\\text{ cm}$ thì diện tích của nó chắc chắn bằng $56\\text{ cm}^2$.",
        correctAnswer: false,
        explanation: "Sai. Có rất nhiều cặp chiều dài và chiều rộng có nửa chu vi là 15 (ví dụ 10 và 5 thì diện tích là 50, 9 và 6 thì diện tích là 54,...).",
      },
    ],
  },
  {
    id: "otc4-d3-tf3",
    badge: "Câu 3 - Đổi đơn vị và tính toán diện tích",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    prompt: "Xét tính đúng hay sai của các phép đổi đơn vị và tính toán:",
    subItems: [
      {
        id: "a",
        text: "$1\\text{ m}^2 = 10\\ 000\\text{ cm}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $1\\text{ m} = 100\\text{ cm} \\Rightarrow 1\\text{ m}^2 = 100^2 = 10\\ 000\\text{ cm}^2$.",
      },
      {
        id: "b",
        text: "Một hình vuông có diện tích $81\\text{ cm}^2$ thì có chu vi là $36\\text{ cm}$.",
        correctAnswer: true,
        explanation: "Đúng. Cạnh là $9\\text{ cm}$ vì $9^2 = 81$. Chu vi là $4 \\cdot 9 = 36\\text{ cm}$.",
      },
      {
        id: "c",
        text: "Hình thoi có đường chéo $5\\text{ m}$ và $40\\text{ dm}$ có diện tích là $100\\text{ m}^2$.",
        correctAnswer: false,
        explanation: "Sai. Đổi $40\\text{ dm} = 4\\text{ m}$. Diện tích là $S = \\frac{1}{2} \\cdot 5 \\cdot 4 = 10\\text{ m}^2$.",
      },
      {
        id: "d",
        text: "Một khu vườn hình chữ nhật $40\\text{ m} \\times 25\\text{ m}$ có diện tích đúng bằng $0{,}1\\text{ ha}$.",
        correctAnswer: true,
        explanation: "Đúng. Diện tích là $40 \\cdot 25 = 1\\ 000\\text{ m}^2$. Vì $1\\text{ ha} = 10\\ 000\\text{ m}^2$ nên $1\\ 000\\text{ m}^2 = 0{,}1\\text{ ha}$.",
      },
    ],
  },
  {
    id: "otc4-d3-tf4",
    badge: "Câu 4 - Lát gạch trang trí hình thoi",
    source: "Đề ôn tập số 3 - Bài tập cuối chương IV",
    prompt: "Một sảnh tòa nhà hình chữ nhật có kích thước $12\\text{ m} \\times 6\\text{ m}$. Người ta thiết kế một hoa văn hình thoi ở giữa có hai đường chéo dài $8\\text{ m}$ và $4\\text{ m}$ lát bằng đá cẩm thạch màu xanh, phần còn lại lát đá hoa cương màu trắng:",
    subItems: [
      {
        id: "a",
        text: "Diện tích của cả sảnh tòa nhà là $72\\text{ m}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $12 \\cdot 6 = 72\\text{ m}^2$.",
      },
      {
        id: "b",
        text: "Diện tích phần hoa văn hình thoi lát đá xanh là $16\\text{ m}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $S_{\\text{thoi}} = \\frac{1}{2} \\cdot 8 \\cdot 4 = 16\\text{ m}^2$.",
      },
      {
        id: "c",
        text: "Diện tích phần lát đá hoa cương màu trắng là $56\\text{ m}^2$.",
        correctAnswer: true,
        explanation: "Đúng. $72 - 16 = 56\\text{ m}^2$.",
      },
      {
        id: "d",
        text: "Nếu giá đá xanh là $600\\ 000$ đồng/m$^2$ và đá trắng là $400\\ 000$ đồng/m$^2$ thì tổng tiền đá lát sàn là $35\\ 000\\ 000$ đồng.",
        correctAnswer: false,
        explanation: "Sai. Tiền đá xanh: $16 \\cdot 600\\ 000 = 9\\ 600\\ 000$ đồng. Tiền đá trắng: $56 \\cdot 400\\ 000 = 22\\ 400\\ 000$ đồng. Tổng cộng là $9\\ 600\\ 000 + 22\\ 400\\ 000 = 32\\ 000\\ 000$ đồng.",
      },
    ],
  },
];

const DE_3_SHORT_ANSWER_QUESTIONS: ShortAnswerQuestion[] = [
  {
    id: "otc4-d3-sa1",
    badge: "Câu 1 (TH) - Tìm chiều dài hình chữ nhật",
    prompt: "Một mảnh đất hình chữ nhật có chu vi bằng $80\\text{ m}$. Biết chiều rộng bằng $16\\text{ m}$. Chiều dài của mảnh đất đó bằng bao nhiêu mét?",
    correctAnswer: "24",
    acceptableAnswers: ["24", "hai mươi bốn", "24m"],
    explanation: "Nửa chu vi là $80 : 2 = 40\\text{ m}$. Chiều dài là $40 - 16 = 24\\text{ m}$.",
  },
  {
    id: "otc4-d3-sa2",
    badge: "Câu 2 (TH) - Chu vi tam giác đều",
    prompt: "Một tam giác đều có chu vi bằng $45\\text{ cm}$. Độ dài một cạnh của tam giác đều đó là bao nhiêu xăng-ti-mét?",
    correctAnswer: "15",
    acceptableAnswers: ["15", "mười lăm", "15cm"],
    explanation: "Độ dài một cạnh là: $45 : 3 = 15\\text{ cm}$.",
  },
  {
    id: "otc4-d3-sa3",
    badge: "Câu 3 (TH) - Diện tích hình bình hành",
    prompt: "Một khu đất hình bình hành có đáy dài $25\\text{ m}$ và chiều cao bằng $14\\text{ m}$. Diện tích của khu đất đó là bao nhiêu mét vuông?",
    correctAnswer: "350",
    acceptableAnswers: ["350", "ba trăm năm mươi", "350m2"],
    explanation: "Diện tích khu đất là: $25 \\cdot 14 = 350\\text{ m}^2$.",
  },
  {
    id: "otc4-d3-sa4",
    badge: "Câu 4 (VD) - Chi phí đóng nẹp viền tranh",
    prompt: "Một bức tranh hình chữ nhật có kích thước $90\\text{ cm} \\times 60\\text{ cm}$. Người ta đóng khung gỗ viền quanh mép bức tranh với chi phí $20\\ 000$ đồng cho mỗi mét nẹp gỗ. Hỏi tổng chi phí mua nẹp gỗ viền quanh bức tranh là bao nhiêu nghìn đồng?",
    correctAnswer: "60",
    acceptableAnswers: ["60", "sáu mươi", "60 nghìn", "60.000", "60 000"],
    explanation: "Chu vi bức tranh là $2(90 + 60) = 300\\text{ cm} = 3\\text{ m}$. Chi phí là: $3 \\cdot 20\\ 000 = 60\\ 000$ đồng, tức 60 nghìn đồng.",
  },
  {
    id: "otc4-d3-sa5",
    badge: "Câu 5 (VD) - Số cây trồng quanh vườn",
    prompt: "Một mảnh vườn hình chữ nhật có chiều dài $30\\text{ m}$ và chiều rộng $20\\text{ m}$. Xung quanh vườn người ta trồng cây, cứ cách $2\\text{ m}$ trồng một cây (tại mỗi góc vườn đều có cây). Hỏi trồng được tất cả bao nhiêu cây?",
    correctAnswer: "50",
    acceptableAnswers: ["50", "năm mươi", "50 cây"],
    explanation: "Chu vi vườn là $2(30 + 20) = 100\\text{ m}$. Vì đường bao quanh vườn là khép kín nên số cây bằng chu vi chia khoảng cách: $100 : 2 = 50$ cây.",
  },
  {
    id: "otc4-d3-sa6",
    badge: "Câu 6 (VDC) - Tính diện tích phần đất mở rộng",
    prompt: "Một cái ao hình vuông có cạnh $15\\text{ m}$. Nay người ta mở rộng cái ao đó về bốn phía, mỗi phía thêm $2\\text{ m}$ để được một ao mới cũng hình vuông. Diện tích phần ao được mở rộng thêm là bao nhiêu mét vuông?",
    correctAnswer: "136",
    acceptableAnswers: ["136", "một trăm ba mươi sáu", "136m2"],
    explanation: "Diện tích ao ban đầu là $15 \\cdot 15 = 225\\text{ m}^2$. Khi mở rộng mỗi phía $2\\text{ m}$ thì cạnh ao mới là $15 + 2 + 2 = 19\\text{ m}$. Diện tích ao mới là $19 \\cdot 19 = 361\\text{ m}^2$. Phần diện tích mở rộng thêm là: $361 - 225 = 136\\text{ m}^2$.",
  },
];

// =============================================================================
// ĐỐI TƯỢNG BÀI HỌC HOÀN CHỈNH (DETAILED LESSON DATA)
// =============================================================================
export const GRADE_6_CHAPTER_4_REVIEW_LESSON: DetailedLessonData = {
  id: "t6-on-tap-chuong-4",
  lessonNumber: 0,
  title: "Bài tập cuối chương IV",
  bookChapter: "Chương IV: Một số hình phẳng trong thực tiễn (SGK Toán 6 KNTT - Tập 1)",
  scenarioTitle: "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
  scenarioFrames: [],
  theorySections: CHAPTER_4_REVIEW_THEORY,
  interactiveType: "geometry",
  youtubeVideoId: "gG9jU2d5G1g",
  youtubeVideoTitle: "Bài Giảng Video: Ôn tập và giải bài tập cuối chương IV - Toán 6 KNTT",
  youtubeVideos: [
    {
      id: "gG9jU2d5G1g",
      title: "Tiết 1: Ôn tập Tam giác đều, Hình vuông, Lục giác đều và các Tứ giác đặc biệt",
    },
    {
      id: "jL8vN1w3H4k",
      title: "Tiết 2: Ôn tập Chu vi, Diện tích các hình phẳng và Giải bài toán thực tiễn",
    },
  ],
  videoQuestions: CHAPTER_4_REVIEW_VIDEOS,
  tips: [
    "Mẹo nhớ công thức diện tích hình thoi và hình thang: Với hình thoi nhớ 'nửa tích hai đường chéo' ($S = \\frac{1}{2}mn$); với hình thang nhớ 'tổng hai đáy nhân chiều cao rồi chia đôi' ($S = \\frac{(a+b)h}{2}$).",
    "Mẹo giải bài toán hình ghép thực tế: Hãy luôn quan sát xem hình cần tính có thể chia thành các hình quen thuộc (cộng diện tích) hay là lấy một hình lớn trừ đi phần khoét bỏ (phương pháp phần bù).",
    "Mẹo kiểm tra đơn vị đo: Luôn quy đổi tất cả các đại lượng (dài, rộng, cạnh viên gạch) về cùng một đơn vị (thường là cm hoặc m) trước khi thực hiện các phép nhân chia diện tích.",
  ],
  traps: [
    "Bẫy nhầm lẫn giữa chu vi và diện tích: Chu vi là độ dài đường bao quanh (đơn vị m, cm), còn diện tích là độ lớn mặt phẳng (đơn vị m$^2$, cm$^2$). Tránh nhầm lấy cạnh bình phương khi tính chu vi hình vuông.",
    "Bẫy quên chia 2 ở công thức hình thoi và hình thang: Học sinh rất hay quên nhân $\\frac{1}{2}$ ở hình thoi ($S = m \\cdot n$ là sai) hoặc quên chia 2 ở hình thang ($S = (a+b)h$ là sai).",
    "Bẫy quy đổi đơn vị diện tích: Rất nhiều học sinh nhầm $1\\text{ m}^2 = 100\\text{ cm}^2$ (sai). Nhớ rằng $1\\text{ m} = 100\\text{ cm} \\Rightarrow 1\\text{ m}^2 = 100 \\times 100 = 10\\ 000\\text{ cm}^2$.",
  ],

  // DỮ LIỆU ĐỀ MẶC ĐỊNH CỦA BÀI HỌC (SỬ DỤNG ĐỀ 1)
  quizQuestions: DE_1_QUIZ_QUESTIONS,
  trueFalseQuestions: DE_1_TRUE_FALSE_QUESTIONS,
  shortAnswerQuestions: DE_1_SHORT_ANSWER_QUESTIONS,

  // BỘ 3 ĐỀ ÔN TẬP TỔNG HỢP ĐỘC LẬP CHUẨN CẤU TRÚC BỘ GD&ĐT (THANG ĐIỂM 10.0)
  examSets: [
    {
      id: "de-1",
      title: "Đề ôn tập số 1",
      description: "Đề ôn tập tổng hợp cuối Chương IV (Một số hình phẳng trong thực tiễn) - Đề số 1 chuẩn cấu trúc Bộ GD&ĐT",
      matrixBadge: "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      quizQuestions: DE_1_QUIZ_QUESTIONS,
      trueFalseQuestions: DE_1_TRUE_FALSE_QUESTIONS,
      shortAnswerQuestions: DE_1_SHORT_ANSWER_QUESTIONS,
    },
    {
      id: "de-2",
      title: "Đề ôn tập số 2",
      description: "Đề ôn tập tổng hợp cuối Chương IV (Một số hình phẳng trong thực tiễn) - Đề số 2 rèn luyện nâng cao kỹ năng",
      matrixBadge: "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      quizQuestions: DE_2_QUIZ_QUESTIONS,
      trueFalseQuestions: DE_2_TRUE_FALSE_QUESTIONS,
      shortAnswerQuestions: DE_2_SHORT_ANSWER_QUESTIONS,
    },
    {
      id: "de-3",
      title: "Đề ôn tập số 3",
      description: "Đề ôn tập tổng hợp cuối Chương IV (Một số hình phẳng trong thực tiễn) - Đề số 3 thực chiến ứng dụng thực tế",
      matrixBadge: "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      quizQuestions: DE_3_QUIZ_QUESTIONS,
      trueFalseQuestions: DE_3_TRUE_FALSE_QUESTIONS,
      shortAnswerQuestions: DE_3_SHORT_ANSWER_QUESTIONS,
    },
  ],
};
