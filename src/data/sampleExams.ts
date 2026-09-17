import { ExamData } from "@/components/exam/ExamEngine";

export const EXAM_PERIODS = [
  { id: "giua-ky-1", label: "Giữa kỳ 1", badge: "GK1" },
  { id: "cuoi-ky-1", label: "Cuối kỳ 1", badge: "CK1" },
  { id: "giua-ky-2", label: "Giữa kỳ 2", badge: "GK2" },
  { id: "cuoi-ky-2", label: "Cuối kỳ 2", badge: "CK2" },
  { id: "tuyen-sinh-10", label: "Ôn thi Tuyển sinh vào lớp 10", badge: "TS10", specialForGrade: "lop-9" },
  { id: "thpt-qg", label: "Ôn thi Tốt nghiệp THPT 2026", badge: "TNTHPT", specialForGrade: "lop-12" },
  { id: "dgnl", label: "Ôn thi Đánh giá năng lực (ĐHQG / TSA)", badge: "ĐGNL", specialForGrade: "lop-12" },
];

export const GRADE_EXAM_TABS = [
  { id: "lop-6", label: "Toán 6", gradeNumber: 6, icon: "🌱", color: "from-amber-500 to-orange-500" },
  { id: "lop-7", label: "Toán 7", gradeNumber: 7, icon: "🔺", color: "from-rose-500 to-pink-500" },
  { id: "lop-8", label: "Toán 8", gradeNumber: 8, icon: "🔷", color: "from-cyan-500 to-teal-500" },
  { id: "lop-9", label: "Toán 9", gradeNumber: 9, icon: "🎯", color: "from-blue-600 to-indigo-600" },
  { id: "lop-10", label: "Toán 10", gradeNumber: 10, icon: "📐", color: "from-emerald-500 to-teal-600" },
  { id: "lop-11", label: "Toán 11", gradeNumber: 11, icon: "🚀", color: "from-purple-600 to-indigo-600" },
  { id: "lop-12", label: "Toán 12", gradeNumber: 12, icon: "👑", color: "from-amber-500 via-rose-500 to-purple-600" },
];

export const SAMPLE_EXAMS: { [key: string]: ExamData } = {
  // =========================================================================
  // TOÁN 6
  // =========================================================================
  "t6-gk1": {
    id: "t6-gk1",
    title: "Đề Thi Khảo Sát Giữa Học Kỳ 1 - Toán 6 (KNTT)",
    grade: "lop-6",
    gradeNumber: 6,
    examType: "giua-ky-1",
    category: "LOP_6",
    subtitle: "Trọng tâm Chương I: Tập hợp các số tự nhiên & Phép tính lũy thừa",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t6-gk1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Cho tập hợp $M = \\{x \\in \\mathbb{N} \\mid 5 < x \\le 9\\}$. Các phần tử của tập hợp $M$ viết theo cách liệt kê là:",
        options: [
          { key: "A", text: "M = {6; 7; 8; 9}" },
          { key: "B", text: "M = {5; 6; 7; 8; 9}" },
          { key: "C", text: "M = {6; 7; 8}" },
          { key: "D", text: "M = {5; 6; 7; 8}" },
        ],
        correctKey: "A",
        explanation: "Vì $5 < x \\le 9$ và $x \\in \\mathbb{N}$ nên $x \\in \\{6; 7; 8; 9\\}$.",
        topic: "Tập hợp số tự nhiên",
        difficulty: "NB",
      },
      {
        id: "t6-gk1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Kết quả của phép tính lũy thừa $2^3 \\cdot 2^2$ bằng:",
        options: [
          { key: "A", text: "2^5 = 32" },
          { key: "B", text: "2^6 = 64" },
          { key: "C", text: "4^5 = 1024" },
          { key: "D", text: "2^1 = 2" },
        ],
        correctKey: "A",
        explanation: "Áp dụng công thức nhân hai lũy thừa cùng cơ số: $a^m \\cdot a^n = a^{m+n}$. Do đó $2^3 \\cdot 2^2 = 2^{3+2} = 2^5 = 32$.",
        topic: "Lũy thừa với số mũ tự nhiên",
        difficulty: "NB",
      },
      {
        id: "t6-gk1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các phát biểu sau về tính chất chia hết và số nguyên tố:",
        subQuestions: [
          { key: "a", text: "Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.", isCorrect: true },
          { key: "b", text: "Số 2 là số nguyên tố chẵn duy nhất.", isCorrect: true },
          { key: "c", text: "Tổng $15 + 30 + 45$ chia hết cho 5 nhưng không chia hết cho 3.", isCorrect: false },
          { key: "d", text: "Nếu một số chia hết cho 9 thì số đó chắc chắn chia hết cho 3.", isCorrect: true },
        ],
        explanation: "Phân tích:\n- a, b: Định nghĩa và tính chất số nguyên tố (Đúng).\n- c: Vì cả 15, 30, 45 đều chia hết cho 3 nên tổng chia hết cho cả 3 và 5 (Sai).\n- d: Vì 9 chia hết cho 3 nên số chia hết cho 9 luôn chia hết cho 3 (Đúng).",
        topic: "Tính chất chia hết",
        difficulty: "TH",
      },
      {
        id: "t6-gk1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho hình vuông $ABCD$ có độ dài cạnh $a = 6\\text{ cm}$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Chu vi của hình vuông $ABCD$ là $C = 24\\text{ cm}$.", isCorrect: true },
          { key: "b", text: "Diện tích của hình vuông $ABCD$ là $S = 36\\text{ cm}^2$.", isCorrect: true },
          { key: "c", text: "Hai đường chéo $AC$ và $BD$ song song với nhau.", isCorrect: false },
          { key: "d", text: "Hình vuông $ABCD$ có 4 góc ở các đỉnh đều bằng nhau và bằng $90^\\circ$.", isCorrect: true },
        ],
        explanation: "Chu vi $C = 4 \\times 6 = 24\\text{ cm}$. Diện tích $S = 6^2 = 36\\text{ cm}^2$. Hai đường chéo hình vuông vuông góc và cắt nhau tại trung điểm chứ không song song.",
        topic: "Hình học trực quan",
        difficulty: "TH",
      },
      {
        id: "t6-gk1-q5",
        type: "short_answer",
        index: 5,
        stem: "Tìm số tự nhiên $x$, biết: $2x + 15 = 35$.",
        correctAnswer: "10",
        acceptableAnswers: ["10"],
        explanation: "$2x = 35 - 15 = 20 \\Rightarrow x = 20 : 2 = 10$.",
        topic: "Tìm x số tự nhiên",
        difficulty: "TH",
      },
      {
        id: "t6-gk1-q6",
        type: "short_answer",
        index: 6,
        stem: "Tìm ước chung lớn nhất của hai số $24$ và $36$: $\\text{ƯCLN}(24, 36) = ?$",
        correctAnswer: "12",
        acceptableAnswers: ["12"],
        explanation: "Ta có: $24 = 2^3 \\cdot 3$ và $36 = 2^2 \\cdot 3^2$. Suy ra $\\text{ƯCLN}(24, 36) = 2^2 \\cdot 3 = 12$.",
        topic: "Ước chung lớn nhất",
        difficulty: "TH",
      },
    ],
  },

  "t6-ck1": {
    id: "t6-ck1",
    title: "Đề Thi Cuối Học Kỳ 1 - Toán 6 (KNTT)",
    grade: "lop-6",
    gradeNumber: 6,
    examType: "cuoi-ky-1",
    category: "LOP_6",
    subtitle: "Tổng hợp Số tự nhiên, Tập hợp các số nguyên ℤ và Hình học trực quan",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t6-ck1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Kết quả của phép tính $(-15) + (-25)$ là:",
        options: [
          { key: "A", text: "-40" },
          { key: "B", text: "40" },
          { key: "C", text: "-10" },
          { key: "D", text: "10" },
        ],
        correctKey: "A",
        explanation: "Cộng hai số nguyên âm: $(-15) + (-25) = -(15 + 25) = -40$.",
        topic: "Số nguyên",
        difficulty: "NB",
      },
      {
        id: "t6-ck1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Hình nào sau đây có tâm đối xứng?",
        options: [
          { key: "A", text: "Hình bình hành" },
          { key: "B", text: "Tam giác đều" },
          { key: "C", text: "Hình thang cân (không là hình chữ nhật)" },
          { key: "D", text: "Hình ngũ giác đều" },
        ],
        correctKey: "A",
        explanation: "Hình bình hành luôn có tâm đối xứng là giao điểm của hai đường chéo.",
        topic: "Hình có tâm đối xứng",
        difficulty: "NB",
      },
      {
        id: "t6-ck1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các phép tính trên tập hợp số nguyên $\\mathbb{Z}$:",
        subQuestions: [
          { key: "a", text: "Tích của hai số nguyên cùng dấu luôn là một số nguyên dương.", isCorrect: true },
          { key: "b", text: "Tích $(-4) \\cdot (-5) = -20$.", isCorrect: false },
          { key: "c", text: "Số $0$ là bội của mọi số nguyên khác $0$.", isCorrect: true },
          { key: "d", text: "Nếu $a \\cdot b = 0$ thì $a = 0$ hoặc $b = 0$.", isCorrect: true },
        ],
        explanation: "Ý b sai vì $(-4) \\cdot (-5) = +20$.",
        topic: "Nhân hai số nguyên",
        difficulty: "TH",
      },
      {
        id: "t6-ck1-q4",
        type: "true_false",
        index: 4,
        stem: "Một mảnh vườn hình chữ nhật có chiều dài $15\\text{ m}$ và chiều rộng $10\\text{ m}$.",
        subQuestions: [
          { key: "a", text: "Chu vi mảnh vườn là $50\\text{ m}$.", isCorrect: true },
          { key: "b", text: "Diện tích mảnh vườn là $150\\text{ m}^2$.", isCorrect: true },
          { key: "c", text: "Nếu làm hàng rào bao quanh để cổng vào rộng $2\\text{ m}$, chiều dài hàng rào cần làm là $48\\text{ m}$.", isCorrect: true },
          { key: "d", text: "Nếu chi phí làm mỗi mét hàng rào là 100.000 đồng thì tổng chi phí là 5.000.000 đồng.", isCorrect: false },
        ],
        explanation: "Chiều dài rào: $50 - 2 = 48\\text{ m}$. Chi phí: $48 \\times 100.000 = 4.800.000$ đồng (ý d sai).",
        topic: "Hình chữ nhật thực tế",
        difficulty: "TH",
      },
      {
        id: "t6-ck1-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính giá trị của biểu thức: $A = (-8) \\cdot 12 + (-8) \\cdot 88$.",
        correctAnswer: "-800",
        acceptableAnswers: ["-800"],
        explanation: "Đặt $-8$ làm thừa số chung: $A = (-8) \\cdot (12 + 88) = (-8) \\cdot 100 = -800$.",
        topic: "Tính nhanh số nguyên",
        difficulty: "TH",
      },
      {
        id: "t6-ck1-q6",
        type: "short_answer",
        index: 6,
        stem: "Nhiệt độ buổi sáng ở đỉnh Mẫu Sơn là $-2^\\circ\\text{C}$, đến buổi trưa tăng thêm $5^\\circ\\text{C}$. Hỏi nhiệt độ buổi trưa là bao nhiêu độ C?",
        correctAnswer: "3",
        acceptableAnswers: ["3", "3 độ", "3°C"],
        explanation: "Nhiệt độ buổi trưa: $(-2) + 5 = 3^\\circ\\text{C}$.",
        topic: "Ứng dụng số nguyên âm thực tế",
        difficulty: "NB",
      },
    ],
  },

  "t6-gk2": {
    id: "t6-gk2",
    title: "Đề Thi Giữa Học Kỳ 2 - Toán 6 (KNTT)",
    grade: "lop-6",
    gradeNumber: 6,
    examType: "giua-ky-2",
    category: "LOP_6",
    subtitle: "Trọng tâm Phân số, Số thập phân và Các phép toán cơ bản",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t6-gk2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Phân số nào sau đây bằng phân số $\\frac{-2}{3}$?",
        options: [
          { key: "A", text: "-4/6" },
          { key: "B", text: "4/6" },
          { key: "C", text: "-2/-3" },
          { key: "D", text: "6/-4" },
        ],
        correctKey: "A",
        explanation: "Nhân cả tử và mẫu của $\\frac{-2}{3}$ với 2 ta được $\\frac{-4}{6}$.",
        topic: "Phân số bằng nhau",
        difficulty: "NB",
      },
      {
        id: "t6-gk2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Kết quả của phép tính $\\frac{3}{5} + \\frac{1}{5}$ bằng:",
        options: [
          { key: "A", text: "4/5" },
          { key: "B", text: "4/10" },
          { key: "C", text: "2/5" },
          { key: "D", text: "3/25" },
        ],
        correctKey: "A",
        explanation: "Cộng hai phân số cùng mẫu: $\\frac{3+1}{5} = \\frac{4}{5}$.",
        topic: "Cộng phân số",
        difficulty: "NB",
      },
      {
        id: "t6-gk2-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các khẳng định về số thập phân và phân số:",
        subQuestions: [
          { key: "a", text: "Số thập phân $-3,25$ có phần nguyên là $-3$ và phần thập phân là $0,25$.", isCorrect: true },
          { key: "b", text: "Hỗn số $2\\frac{1}{3}$ được viết dưới dạng phân số là $\\frac{7}{3}$.", isCorrect: true },
          { key: "c", text: "Số đối của $-\\frac{5}{7}$ là $\\frac{5}{7}$.", isCorrect: true },
          { key: "d", text: "Nghịch đảo của phân số $-\\frac{3}{4}$ là $\\frac{4}{3}$.", isCorrect: false },
        ],
        explanation: "Nghịch đảo của $-\\frac{3}{4}$ là $-\\frac{4}{3}$ (phải giữ nguyên dấu âm). Do đó d là Sai.",
        topic: "Số thập phân và phân số",
        difficulty: "TH",
      },
      {
        id: "t6-gk2-q4",
        type: "true_false",
        index: 4,
        stem: "Trong các phát biểu sau về hình học phẳng cơ bản:",
        subQuestions: [
          { key: "a", text: "Qua hai điểm phân biệt chỉ vẽ được duy nhất một đường thẳng.", isCorrect: true },
          { key: "b", text: "Điểm $M$ nằm giữa hai điểm $A$ và $B$ khi và chỉ khi $AM + MB = AB$.", isCorrect: true },
          { key: "c", text: "Đoạn thẳng $AB$ là hình gồm điểm $A$, điểm $B$ và tất cả các điểm nằm ngoài hai điểm đó.", isCorrect: false },
          { key: "d", text: "Trung điểm của đoạn thẳng là điểm nằm giữa và cách đều hai đầu mút của đoạn thẳng đó.", isCorrect: true },
        ],
        explanation: "Ý c sai vì đoạn thẳng $AB$ gồm các điểm nằm GIỮA $A$ và $B$.",
        topic: "Điểm và đoạn thẳng",
        difficulty: "TH",
      },
      {
        id: "t6-gk2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tìm $x$, biết: $x - \\frac{1}{4} = \\frac{3}{2}$. Điền kết quả dưới dạng phân số tối giản (dạng a/b):",
        correctAnswer: "7/4",
        acceptableAnswers: ["7/4", "1.75"],
        explanation: "$x = \\frac{3}{2} + \\frac{1}{4} = \\frac{6}{4} + \\frac{1}{4} = \\frac{7}{4}$.",
        topic: "Tìm x phân số",
        difficulty: "TH",
      },
      {
        id: "t6-gk2-q6",
        type: "short_answer",
        index: 6,
        stem: "Một lớp học có 40 học sinh, trong đó số học sinh giỏi chiếm $\\frac{2}{5}$ số học sinh cả lớp. Hỏi lớp đó có bao nhiêu học sinh giỏi?",
        correctAnswer: "16",
        acceptableAnswers: ["16", "16 học sinh"],
        explanation: "Số học sinh giỏi: $40 \\times \\frac{2}{5} = 16$ học sinh.",
        topic: "Bài toán giá trị phân số",
        difficulty: "NB",
      },
    ],
  },

  "t6-ck2": {
    id: "t6-ck2",
    title: "Đề Thi Cuối Học Kỳ 2 - Toán 6 (KNTT)",
    grade: "lop-6",
    gradeNumber: 6,
    examType: "cuoi-ky-2",
    category: "LOP_6",
    subtitle: "Tổng hợp toàn bộ kiến thức Toán 6: Dữ liệu và xác suất thực nghiệm, Góc, Đoạn thẳng",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t6-ck2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Tung một đồng xu 20 lần thấy có 12 lần xuất hiện mặt sấp ($S$). Xác suất thực nghiệm xuất hiện mặt sấp là:",
        options: [
          { key: "A", text: "12/20 = 3/5" },
          { key: "B", text: "8/20 = 2/5" },
          { key: "C", text: "1/2" },
          { key: "D", text: "12/8" },
        ],
        correctKey: "A",
        explanation: "Xác suất thực nghiệm mặt sấp: $\\frac{12}{20} = \\frac{3}{5} = 0,6$.",
        topic: "Xác suất thực nghiệm",
        difficulty: "NB",
      },
      {
        id: "t6-ck2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Góc có số đo bằng $90^\\circ$ là:",
        options: [
          { key: "A", text: "Góc vuông" },
          { key: "B", text: "Góc nhọn" },
          { key: "C", text: "Góc tù" },
          { key: "D", text: "Góc bẹt" },
        ],
        correctKey: "A",
        explanation: "Góc vuông có số đo đúng bằng $90^\\circ$.",
        topic: "Các loại góc",
        difficulty: "NB",
      },
      {
        id: "t6-ck2-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các khẳng định về dữ liệu thống kê:",
        subQuestions: [
          { key: "a", text: "Dữ liệu dạng số còn gọi là số liệu.", isCorrect: true },
          { key: "b", text: "Biểu đồ cột kép thường dùng để so sánh hai tập dữ liệu cùng loại.", isCorrect: true },
          { key: "c", text: "Khi điều tra về chiều cao học sinh, kết quả thu được là dữ liệu định tính không là số.", isCorrect: false },
          { key: "d", text: "Bảng số liệu thống kê giúp trình bày dữ liệu một cách khoa học và dễ đọc.", isCorrect: true },
        ],
        explanation: "Chiều cao là số đo (cm, m) nên là số liệu (dữ liệu định lượng). Khẳng định c là Sai.",
        topic: "Thu thập và tổ chức dữ liệu",
        difficulty: "TH",
      },
      {
        id: "t6-ck2-q4",
        type: "true_false",
        index: 4,
        stem: "Cho đoạn thẳng $AB = 8\\text{ cm}$. Gọi $M$ là trung điểm của đoạn thẳng $AB$ và $N$ là trung điểm của $AM$.",
        subQuestions: [
          { key: "a", text: "Độ dài đoạn thẳng $AM = 4\\text{ cm}$.", isCorrect: true },
          { key: "b", text: "Độ dài đoạn thẳng $MN = 2\\text{ cm}$.", isCorrect: true },
          { key: "c", text: "Độ dài đoạn thẳng $NB = 6\\text{ cm}$.", isCorrect: true },
          { key: "d", text: "Điểm $M$ là trung điểm của đoạn thẳng $NB$.", isCorrect: false },
        ],
        explanation: "$N$ là trung điểm $AM \\Rightarrow AN = NM = 2\\text{ cm}$. $NB = NM + MB = 2 + 4 = 6\\text{ cm}$. Trung điểm của $NB$ cách $N$ khoảng $3\\text{ cm}$, trong khi $NM = 2\\text{ cm}$ nên $M$ không là trung điểm $NB$ (Sai).",
        topic: "Trung điểm đoạn thẳng",
        difficulty: "TH",
      },
      {
        id: "t6-ck2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính tỉ số phần trăm của $25$ và $100$: ... %",
        correctAnswer: "25",
        acceptableAnswers: ["25", "25%"],
        explanation: "$\\frac{25}{100} \\times 100\\% = 25\\%$.",
        topic: "Tỉ số phần trăm",
        difficulty: "NB",
      },
      {
        id: "t6-ck2-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho $\\widehat{xOy} = 120^\\circ$, tia $Oz$ là tia phân giác của $\\widehat{xOy}$. Số đo của $\\widehat{xOz}$ bằng bao nhiêu độ?",
        correctAnswer: "60",
        acceptableAnswers: ["60", "60 độ", "60°"],
        explanation: "Vì $Oz$ là tia phân giác nên $\\widehat{xOz} = \\frac{\\widehat{xOy}}{2} = \\frac{120^\\circ}{2} = 60^\\circ$.",
        topic: "Tia phân giác của góc",
        difficulty: "NB",
      },
    ],
  },

  // =========================================================================
  // TOÁN 7
  // =========================================================================
  "t7-gk1": {
    id: "t7-gk1",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 7 (KNTT)",
    grade: "lop-7",
    gradeNumber: 7,
    examType: "giua-ky-1",
    category: "LOP_7",
    subtitle: "Trọng tâm Số hữu tỉ ℚ, Lũy thừa số hữu tỉ & Góc kề bù, so le trong",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t7-gk1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Tập hợp các số hữu tỉ được kí hiệu là:",
        options: [
          { key: "A", text: "Q" },
          { key: "B", text: "Z" },
          { key: "C", text: "N" },
          { key: "D", text: "R" },
        ],
        correctKey: "A",
        explanation: "Kí hiệu chuẩn: $\\mathbb{Q}$ là tập hợp các số hữu tỉ.",
        topic: "Tập hợp số hữu tỉ",
        difficulty: "NB",
      },
      {
        id: "t7-gk1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Hai góc kề bù có tổng số đo bằng:",
        options: [
          { key: "A", text: "180°" },
          { key: "B", text: "90°" },
          { key: "C", text: "360°" },
          { key: "D", text: "45°" },
        ],
        correctKey: "A",
        explanation: "Theo định nghĩa, hai góc kề bù có tổng số đo bằng $180^\\circ$.",
        topic: "Hai góc kề bù",
        difficulty: "NB",
      },
      {
        id: "t7-gk1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các khẳng định về số hữu tỉ và lũy thừa:",
        subQuestions: [
          { key: "a", text: "Số thập phân vô hạn tuần hoàn $0,(3) = \\frac{1}{3}$ là một số hữu tỉ.", isCorrect: true },
          { key: "b", text: "Với mọi $x \\in \\mathbb{Q}, x \\ne 0$, ta có $x^0 = 1$.", isCorrect: true },
          { key: "c", text: "Lũy thừa bậc chẵn của một số âm luôn là số âm.", isCorrect: false },
          { key: "d", text: "Tích $(-\\frac{1}{2})^2 \\cdot (-\\frac{1}{2})^3 = (-\\frac{1}{2})^5$.", isCorrect: true },
        ],
        explanation: "Lũy thừa bậc chẵn của số âm luôn ra số dương (ví dụ $(-2)^2 = 4 > 0$). Ý c là Sai.",
        topic: "Lũy thừa số hữu tỉ",
        difficulty: "TH",
      },
      {
        id: "t7-gk1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho đường thẳng $c$ cắt hai đường thẳng song song $a$ và $b$:",
        subQuestions: [
          { key: "a", text: "Hai góc so le trong bằng nhau.", isCorrect: true },
          { key: "b", text: "Hai góc đồng vị bằng nhau.", isCorrect: true },
          { key: "c", text: "Hai góc trong cùng phía bù nhau (tổng bằng $180^\\circ$).", isCorrect: true },
          { key: "d", text: "Hai góc ngoài cùng phía luôn phụ nhau (tổng bằng $90^\\circ$).", isCorrect: false },
        ],
        explanation: "Hai góc ngoài cùng phía cũng bù nhau (tổng $180^\\circ$) chứ không phụ nhau. Ý d là Sai.",
        topic: "Hai đường thẳng song song",
        difficulty: "TH",
      },
      {
        id: "t7-gk1-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính giá trị của biểu thức: $M = \\frac{3}{7} \\cdot \\frac{5}{11} + \\frac{3}{7} \\cdot \\frac{6}{11}$. Điền kết quả dạng phân số tối giản (a/b):",
        correctAnswer: "3/7",
        acceptableAnswers: ["3/7"],
        explanation: "$M = \\frac{3}{7} \\cdot (\\frac{5}{11} + \\frac{6}{11}) = \\frac{3}{7} \\cdot 1 = \\frac{3}{7}$.",
        topic: "Tính nhanh số hữu tỉ",
        difficulty: "TH",
      },
      {
        id: "t7-gk1-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho hai góc đối đỉnh $\\widehat{A_1}$ và $\\widehat{A_2}$. Biết $\\widehat{A_1} = 75^\\circ$. Số đo của góc $\\widehat{A_2}$ là bao nhiêu độ?",
        correctAnswer: "75",
        acceptableAnswers: ["75", "75 độ", "75°"],
        explanation: "Hai góc đối đỉnh thì luôn bằng nhau, do đó $\\widehat{A_2} = 75^\\circ$.",
        topic: "Hai góc đối đỉnh",
        difficulty: "NB",
      },
    ],
  },

  "t7-ck1": {
    id: "t7-ck1",
    title: "Đề Thi Cuối Học Kỳ 1 - Toán 7 (KNTT)",
    grade: "lop-7",
    gradeNumber: 7,
    examType: "cuoi-ky-1",
    category: "LOP_7",
    subtitle: "Tổng hợp Số thực ℝ, Căn bậc hai số học, Tam giác bằng nhau (c-c-c, c-g-c, g-c-g)",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t7-ck1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Căn bậc hai số học của $49$ là:",
        options: [
          { key: "A", text: "7" },
          { key: "B", text: "-7" },
          { key: "C", text: "±7" },
          { key: "D", text: "49" },
        ],
        correctKey: "A",
        explanation: "Căn bậc hai số học của số không âm $a$ là số không âm $\\sqrt{a}$. $\\sqrt{49} = 7$.",
        topic: "Căn bậc hai số học",
        difficulty: "NB",
      },
      {
        id: "t7-ck1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Cho $\\Delta ABC = \\Delta MNP$. Khẳng định nào sau đây là SAI?",
        options: [
          { key: "A", text: "AB = MP" },
          { key: "B", text: "AB = MN" },
          { key: "C", text: "BC = NP" },
          { key: "D", text: "Góc A = Góc M" },
        ],
        correctKey: "A",
        explanation: "Vì các đỉnh tương ứng: $A \\leftrightarrow M, B \\leftrightarrow N, C \\leftrightarrow P$ nên $AB = MN$, khẳng định $AB = MP$ là Sai.",
        topic: "Tam giác bằng nhau",
        difficulty: "NB",
      },
      {
        id: "t7-ck1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các phát biểu về tập hợp số thực $\\mathbb{R}$:",
        subQuestions: [
          { key: "a", text: "Số vô tỉ là số viết được dưới dạng số thập phân vô hạn không tuần hoàn.", isCorrect: true },
          { key: "b", text: "Số $\\sqrt{2}$ và số $\\pi$ đều là các số vô tỉ.", isCorrect: true },
          { key: "c", text: "Tập hợp số thực $\\mathbb{R}$ bao gồm cả số hữu tỉ và số vô tỉ.", isCorrect: true },
          { key: "d", text: "Giá trị tuyệt đối của một số thực bất kỳ luôn là số dương $> 0$.", isCorrect: false },
        ],
        explanation: "Giá trị tuyệt đối $|0| = 0$ không phải số dương $> 0$ (mà là không âm $\\ge 0$). Ý d là Sai.",
        topic: "Số thực và giá trị tuyệt đối",
        difficulty: "TH",
      },
      {
        id: "t7-ck1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho tam giác $ABC$ cân tại $A$ có $\\widehat{A} = 40^\\circ$.",
        subQuestions: [
          { key: "a", text: "Độ dài hai cạnh bên $AB = AC$.", isCorrect: true },
          { key: "b", text: "Hai góc ở đáy $\\widehat{B} = \\widehat{C} = 70^\\circ$.", isCorrect: true },
          { key: "c", text: "Đường phân giác xuất phát từ đỉnh $A$ đồng thời là đường cao và đường trung tuyến.", isCorrect: true },
          { key: "d", text: "Tam giác $ABC$ là tam giác đều.", isCorrect: false },
        ],
        explanation: "Tam giác đều phải có 3 góc bằng $60^\\circ$, ở đây góc đỉnh bằng $40^\\circ$ nên không đều. Ý d là Sai.",
        topic: "Tam giác cân",
        difficulty: "TH",
      },
      {
        id: "t7-ck1-q5",
        type: "short_answer",
        index: 5,
        stem: "Tìm $x$, biết: $|x - 2| = 5$ với $x > 0$. Kết quả $x = ?$",
        correctAnswer: "7",
        acceptableAnswers: ["7"],
        explanation: "$x - 2 = 5 \\Rightarrow x = 7$ (thỏa mãn $x > 0$). Trường hợp $x - 2 = -5 \\Rightarrow x = -3 < 0$ (loại).",
        topic: "Phương trình chứa dấu giá trị tuyệt đối",
        difficulty: "TH",
      },
      {
        id: "t7-ck1-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho tam giác vuông $ABC$ vuông tại $A$, biết $\\widehat{B} = 35^\\circ$. Tính số đo của góc $\\widehat{C}$ (theo độ):",
        correctAnswer: "55",
        acceptableAnswers: ["55", "55 độ", "55°"],
        explanation: "Trong tam giác vuông, hai góc nhọn phụ nhau: $\\widehat{C} = 90^\\circ - 35^\\circ = 55^\\circ$.",
        topic: "Tổng các góc trong tam giác",
        difficulty: "NB",
      },
    ],
  },

  "t7-gk2": {
    id: "t7-gk2",
    title: "Đề Thi Giữa Học Kỳ 2 - Toán 7 (KNTT)",
    grade: "lop-7",
    gradeNumber: 7,
    examType: "giua-ky-2",
    category: "LOP_7",
    subtitle: "Trọng tâm Tỉ lệ thức, Đại lượng tỉ lệ thuận, tỉ lệ nghịch & Biểu thức đại số",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t7-gk2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Từ đẳng thức $a \\cdot d = b \\cdot c$ (với $a, b, c, d \\ne 0$), ta có thể suy ra tỉ lệ thức nào?",
        options: [
          { key: "A", text: "a/b = c/d" },
          { key: "B", text: "a/d = b/c" },
          { key: "C", text: "a/c = d/b" },
          { key: "D", text: "b/a = c/d" },
        ],
        correctKey: "A",
        explanation: "Tích trung tỉ bằng tích ngoại tỉ: $ad = bc \\Leftrightarrow \\frac{a}{b} = \\frac{c}{d}$.",
        topic: "Tỉ lệ thức",
        difficulty: "NB",
      },
      {
        id: "t7-gk2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Đơn thức nào sau đây đồng dạng với đơn thức $3x^2y$?",
        options: [
          { key: "A", text: "-5x^2y" },
          { key: "B", text: "3xy^2" },
          { key: "C", text: "2x^3y" },
          { key: "D", text: "4xy" },
        ],
        correctKey: "A",
        explanation: "Hai đơn thức đồng dạng có hệ số khác 0 và có cùng phần biến ($x^2y$).",
        topic: "Đơn thức đồng dạng",
        difficulty: "NB",
      },
      {
        id: "t7-gk2-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các mệnh đề về tỉ lệ thuận và tỉ lệ nghịch:",
        subQuestions: [
          { key: "a", text: "Nếu đại lượng $y$ tỉ lệ thuận với đại lượng $x$ theo hệ số tỉ lệ $k$ thì $y = kx$.", isCorrect: true },
          { key: "b", text: "Nếu $y$ tỉ lệ nghịch với $x$ theo hệ số $a$ thì $y = \\frac{a}{x}$.", isCorrect: true },
          { key: "c", text: "Thời gian đi trên cùng một quãng đường tỉ lệ thuận với vận tốc chuyển động.", isCorrect: false },
          { key: "d", text: "Số công nhân và thời gian hoàn thành cùng một công việc là hai đại lượng tỉ lệ nghịch.", isCorrect: true },
        ],
        explanation: "Vận tốc tăng thì thời gian giảm (tỉ lệ nghịch chứ không phải tỉ lệ thuận). Ý c là Sai.",
        topic: "Tỉ lệ thuận và tỉ lệ nghịch",
        difficulty: "TH",
      },
      {
        id: "t7-gk2-q4",
        type: "true_false",
        index: 4,
        stem: "Cho đa thức một biến $P(x) = 2x^3 - 5x^2 + 3x - 7$:",
        subQuestions: [
          { key: "a", text: "Bậc của đa thức $P(x)$ là $3$.", isCorrect: true },
          { key: "b", text: "Hệ số cao nhất của đa thức là $2$.", isCorrect: true },
          { key: "c", text: "Hệ số tự do của đa thức là $7$.", isCorrect: false },
          { key: "d", text: "Giá trị của $P(0) = -7$.", isCorrect: true },
        ],
        explanation: "Hệ số tự do là $-7$ chứ không phải $+7$. Do đó ý c là Sai.",
        topic: "Đa thức một biến",
        difficulty: "TH",
      },
      {
        id: "t7-gk2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tìm hai số $x$ và $y$ biết $\\frac{x}{3} = \\frac{y}{5}$ và $x + y = 32$. Giá trị của $x$ bằng:",
        correctAnswer: "12",
        acceptableAnswers: ["12"],
        explanation: "Áp dụng tính chất dãy tỉ số bằng nhau: $\\frac{x}{3} = \\frac{y}{5} = \\frac{x+y}{3+5} = \\frac{32}{8} = 4$. Do đó $x = 3 \\times 4 = 12$.",
        topic: "Dãy tỉ số bằng nhau",
        difficulty: "TH",
      },
      {
        id: "t7-gk2-q6",
        type: "short_answer",
        index: 6,
        stem: "Nghiệm của đa thức $A(x) = 3x - 15$ là $x = ?$",
        correctAnswer: "5",
        acceptableAnswers: ["5"],
        explanation: "$3x - 15 = 0 \\Leftrightarrow 3x = 15 \\Leftrightarrow x = 5$.",
        topic: "Nghiệm của đa thức",
        difficulty: "NB",
      },
    ],
  },

  "t7-ck2": {
    id: "t7-ck2",
    title: "Đề Thi Cuối Học Kỳ 2 - Toán 7 (KNTT)",
    grade: "lop-7",
    gradeNumber: 7,
    examType: "cuoi-ky-2",
    category: "LOP_7",
    subtitle: "Tổng kết Toán 7: Quan hệ giữa các yếu tố trong tam giác, Ba đường đồng quy & Biểu thức đại số",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t7-ck2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Giao điểm của ba đường trung tuyến trong một tam giác được gọi là:",
        options: [
          { key: "A", text: "Trọng tâm" },
          { key: "B", text: "Trực tâm" },
          { key: "C", text: "Tâm đường tròn ngoại tiếp" },
          { key: "D", text: "Tâm đường tròn nội tiếp" },
        ],
        correctKey: "A",
        explanation: "Giao điểm ba đường trung tuyến gọi là trọng tâm tam giác.",
        topic: "Đường trung tuyến của tam giác",
        difficulty: "NB",
      },
      {
        id: "t7-ck2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Trong một tam giác, trực tâm là giao điểm của:",
        options: [
          { key: "A", text: "Ba đường cao" },
          { key: "B", text: "Ba đường trung tuyến" },
          { key: "C", text: "Ba đường phân giác" },
          { key: "D", text: "Ba đường trung trực" },
        ],
        correctKey: "A",
        explanation: "Trực tâm là giao điểm của 3 đường cao trong tam giác.",
        topic: "Đường cao của tam giác",
        difficulty: "NB",
      },
      {
        id: "t7-ck2-q3",
        type: "true_false",
        index: 3,
        stem: "Cho tam giác $ABC$ có độ dài ba cạnh là $a, b, c$:",
        subQuestions: [
          { key: "a", text: "Bất đẳng thức tam giác luôn thỏa mãn: $|b - c| < a < b + c$.", isCorrect: true },
          { key: "b", text: "Góc đối diện với cạnh lớn hơn luôn là góc lớn hơn.", isCorrect: true },
          { key: "c", text: "Ba đoạn thẳng có độ dài $3\\text{ cm}, 4\\text{ cm}, 8\\text{ cm}$ có thể tạo thành một tam giác.", isCorrect: false },
          { key: "d", text: "Trong tam giác vuông, cạnh huyền là cạnh có độ dài lớn nhất.", isCorrect: true },
        ],
        explanation: "Vì $3 + 4 = 7 < 8$ (vi phạm bất đẳng thức tam giác tổng 2 cạnh phải lớn hơn cạnh còn lại), nên ý c là Sai.",
        topic: "Bất đẳng thức tam giác",
        difficulty: "TH",
      },
      {
        id: "t7-ck2-q4",
        type: "true_false",
        index: 4,
        stem: "Xét biến cố và xác suất trong trò chơi rút thăm:",
        subQuestions: [
          { key: "a", text: "Biến cố chắc chắn có xác suất bằng 1.", isCorrect: true },
          { key: "b", text: "Biến cố không thể có xác suất bằng 0.", isCorrect: true },
          { key: "c", text: "Gieo một con xúc xắc 6 mặt, biến cố 'Xuất hiện mặt 7 chấm' là biến cố không thể.", isCorrect: true },
          { key: "d", text: "Xác suất của một biến cố ngẫu nhiên bất kỳ có thể lớn hơn 1.", isCorrect: false },
        ],
        explanation: "Xác suất của mọi biến cố luôn nằm trong đoạn $[0; 1]$. Ý d là Sai.",
        topic: "Xác suất biến cố",
        difficulty: "NB",
      },
      {
        id: "t7-ck2-q5",
        type: "short_answer",
        index: 5,
        stem: "Cho tam giác $ABC$ có đường trung tuyến $AM = 9\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác. Tính độ dài đoạn thẳng $AG$ (theo cm):",
        correctAnswer: "6",
        acceptableAnswers: ["6", "6cm"],
        explanation: "Trọng tâm cách đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến: $AG = \\frac{2}{3} AM = \\frac{2}{3} \\cdot 9 = 6\\text{ cm}$.",
        topic: "Tính chất trọng tâm",
        difficulty: "TH",
      },
      {
        id: "t7-ck2-q6",
        type: "short_answer",
        index: 6,
        stem: "Rút gọn biểu thức $B = (2x + 1)(x - 3) - 2x^2$. Kết quả khi $x = 5$ là:",
        correctAnswer: "-28",
        acceptableAnswers: ["-28"],
        explanation: "$B = 2x^2 - 6x + x - 3 - 2x^2 = -5x - 3$. Khi $x = 5$: $B = -5(5) - 3 = -28$.",
        topic: "Nhân đa thức",
        difficulty: "VD",
      },
    ],
  },

  // =========================================================================
  // TOÁN 8
  // =========================================================================
  "t8-gk1": {
    id: "t8-gk1",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 8 (KNTT)",
    grade: "lop-8",
    gradeNumber: 8,
    examType: "giua-ky-1",
    category: "LOP_8",
    subtitle: "Trọng tâm Đa thức nhiều biến, 7 Hằng đẳng thức đáng nhớ & Tứ giác lồi",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t8-gk1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Khai triển của hằng đẳng thức $(A + B)^2$ là:",
        options: [
          { key: "A", text: "A^2 + 2AB + B^2" },
          { key: "B", text: "A^2 + AB + B^2" },
          { key: "C", text: "A^2 - 2AB + B^2" },
          { key: "D", text: "A^2 + B^2" },
        ],
        correctKey: "A",
        explanation: "Hằng đẳng thức bình phương một tổng: $(A+B)^2 = A^2 + 2AB + B^2$.",
        topic: "7 Hằng đẳng thức đáng nhớ",
        difficulty: "NB",
      },
      {
        id: "t8-gk1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Tổng các góc trong một tứ giác lồi luôn bằng:",
        options: [
          { key: "A", text: "360°" },
          { key: "B", text: "180°" },
          { key: "C", text: "270°" },
          { key: "D", text: "90°" },
        ],
        correctKey: "A",
        explanation: "Định lý: Tổng các góc của một tứ giác luôn bằng $360^\\circ$.",
        topic: "Tứ giác lồi",
        difficulty: "NB",
      },
      {
        id: "t8-gk1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các khai triển hằng đẳng thức sau:",
        subQuestions: [
          { key: "a", text: "$A^2 - B^2 = (A - B)(A + B)$.", isCorrect: true },
          { key: "b", text: "$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$.", isCorrect: true },
          { key: "c", text: "$A^3 + B^3 = (A + B)(A^2 + AB + B^2)$.", isCorrect: false },
          { key: "d", text: "$(x - 2)^2 = x^2 - 4x + 4$.", isCorrect: true },
        ],
        explanation: "Ý c sai vì công thức chuẩn là $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ (dấu trừ ở tích $AB$).",
        topic: "Hằng đẳng thức",
        difficulty: "TH",
      },
      {
        id: "t8-gk1-q4",
        type: "true_false",
        index: 4,
        stem: "Xét dấu hiệu nhận biết các hình tứ giác đặc biệt:",
        subQuestions: [
          { key: "a", text: "Hình bình hành có một góc vuông là hình chữ nhật.", isCorrect: true },
          { key: "b", text: "Hình thoi có hai đường chéo vuông góc với nhau.", isCorrect: true },
          { key: "c", text: "Tứ giác có 4 cạnh bằng nhau là hình vuông.", isCorrect: false },
          { key: "d", text: "Hình chữ nhật có hai đường chéo vuông góc với nhau là hình vuông.", isCorrect: true },
        ],
        explanation: "Tứ giác có 4 cạnh bằng nhau mới là hình thoi (chưa chắc là hình vuông nếu các góc không vuông). Ý c là Sai.",
        topic: "Dấu hiệu nhận biết tứ giác",
        difficulty: "TH",
      },
      {
        id: "t8-gk1-q5",
        type: "short_answer",
        index: 5,
        stem: "Phân tích đa thức thành nhân tử: $x^2 - 25 = 0$. Nghiệm dương của phương trình là $x = ?$",
        correctAnswer: "5",
        acceptableAnswers: ["5"],
        explanation: "$(x-5)(x+5) = 0 \\Rightarrow x = 5$ hoặc $x = -5$. Nghiệm dương là $5$.",
        topic: "Phân tích đa thức thành nhân tử",
        difficulty: "TH",
      },
      {
        id: "t8-gk1-q6",
        type: "short_answer",
        index: 6,
        stem: "Một hình thang có độ dài hai đáy lần lượt là $6\\text{ cm}$ và $10\\text{ cm}$. Tính độ dài đường trung bình của hình thang đó (theo cm):",
        correctAnswer: "8",
        acceptableAnswers: ["8", "8cm"],
        explanation: "Độ dài đường trung bình bằng nửa tổng hai đáy: $\\frac{6 + 10}{2} = 8\\text{ cm}$.",
        topic: "Đường trung bình hình thang",
        difficulty: "NB",
      },
    ],
  },

  "t8-ck1": {
    id: "t8-ck1",
    title: "Đề Thi Cuối Học Kỳ 1 - Toán 8 (KNTT)",
    grade: "lop-8",
    gradeNumber: 8,
    examType: "cuoi-ky-1",
    category: "LOP_8",
    subtitle: "Phân thức đại số, Các phép toán phân thức & Hình chữ nhật, hình thoi, hình vuông",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t8-ck1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Điều kiện xác định của phân thức $\\frac{x + 1}{x - 3}$ là:",
        options: [
          { key: "A", text: "x ≠ 3" },
          { key: "B", text: "x ≠ -1" },
          { key: "C", text: "x = 3" },
          { key: "D", text: "x ≠ 0" },
        ],
        correctKey: "A",
        explanation: "Mẫu thức phải khác $0$: $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$.",
        topic: "Điều kiện xác định phân thức",
        difficulty: "NB",
      },
      {
        id: "t8-ck1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Rút gọn phân thức $\\frac{x^2 - y^2}{x + y}$ ta được:",
        options: [
          { key: "A", text: "x - y" },
          { key: "B", text: "x + y" },
          { key: "C", text: "1" },
          { key: "D", text: "(x - y)^2" },
        ],
        correctKey: "A",
        explanation: "$\\frac{(x-y)(x+y)}{x+y} = x - y$.",
        topic: "Rút gọn phân thức",
        difficulty: "NB",
      },
      {
        id: "t8-ck1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các khẳng định về hình học tứ giác:",
        subQuestions: [
          { key: "a", text: "Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.", isCorrect: true },
          { key: "b", text: "Hình thoi có hai đường chéo bằng nhau là hình vuông.", isCorrect: true },
          { key: "c", text: "Đường trung tuyến ứng với cạnh huyền của tam giác vuông bằng nửa cạnh huyền.", isCorrect: true },
          { key: "d", text: "Hình thang có hai góc kề một đáy bằng nhau là hình bình hành.", isCorrect: false },
        ],
        explanation: "Hình thang có hai góc kề một đáy bằng nhau là hình thang cân chứ không phải hình bình hành. Ý d là Sai.",
        topic: "Tính chất hình học tứ giác",
        difficulty: "TH",
      },
      {
        id: "t8-ck1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho phân thức $P = \\frac{2x}{x^2 - 4}$:",
        subQuestions: [
          { key: "a", text: "Điều kiện xác định của $P$ là $x \\ne 2$ và $x \\ne -2$.", isCorrect: true },
          { key: "b", text: "Mẫu thức $x^2 - 4 = (x - 2)(x + 2)$.", isCorrect: true },
          { key: "c", text: "Tại $x = 3$, giá trị của phân thức $P = \\frac{6}{5}$.", isCorrect: true },
          { key: "d", text: "Giá trị của phân thức $P$ không thể bằng 0 với mọi $x$.", isCorrect: false },
        ],
        explanation: "Khi $x = 0$ (thỏa mãn ĐKXĐ) thì $P = \\frac{0}{-4} = 0$. Ý d là Sai.",
        topic: "Phân thức đại số",
        difficulty: "TH",
      },
      {
        id: "t8-ck1-q5",
        type: "short_answer",
        index: 5,
        stem: "Tìm giá trị của $x$ để phân thức $\\frac{3x - 6}{x + 1} = 0$. Kết quả $x = ?$",
        correctAnswer: "2",
        acceptableAnswers: ["2"],
        explanation: "Tử số bằng $0$: $3x - 6 = 0 \\Leftrightarrow x = 2$ (thỏa mãn mẫu $2 + 1 \\ne 0$).",
        topic: "Phương trình phân thức",
        difficulty: "TH",
      },
      {
        id: "t8-ck1-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Độ dài đường trung tuyến $AM$ bằng bao nhiêu cm?",
        correctAnswer: "5",
        acceptableAnswers: ["5", "5cm"],
        explanation: "Theo định lý Pytago, cạnh huyền $BC = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Trung tuyến ứng với cạnh huyền $AM = \\frac{BC}{2} = 5\\text{ cm}$.",
        topic: "Định lý Pytago và trung tuyến",
        difficulty: "TH",
      },
    ],
  },

  "t8-gk2": {
    id: "t8-gk2",
    title: "Đề Thi Giữa Học Kỳ 2 - Toán 8 (KNTT)",
    grade: "lop-8",
    gradeNumber: 8,
    examType: "giua-ky-2",
    category: "LOP_8",
    subtitle: "Trọng tâm Phương trình bậc nhất một ẩn, Hàm số bậc nhất & Định lý Thales",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t8-gk2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Phương trình nào sau đây là phương trình bậc nhất một ẩn?",
        options: [
          { key: "A", text: "2x - 3 = 0" },
          { key: "B", text: "x^2 - 4 = 0" },
          { key: "C", text: "0x + 5 = 0" },
          { key: "D", text: "1/x + 2 = 0" },
        ],
        correctKey: "A",
        explanation: "Phương trình bậc nhất một ẩn có dạng $ax + b = 0$ với $a \\ne 0$. Do đó $2x - 3 = 0$ là phương trình bậc nhất một ẩn.",
        topic: "Phương trình bậc nhất",
        difficulty: "NB",
      },
      {
        id: "t8-gk2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Hàm số bậc nhất $y = ax + b$ đồng biến trên $\\mathbb{R}$ khi và chỉ khi:",
        options: [
          { key: "A", text: "a > 0" },
          { key: "B", text: "a < 0" },
          { key: "C", text: "a = 0" },
          { key: "D", text: "b > 0" },
        ],
        correctKey: "A",
        explanation: "Hàm số bậc nhất đồng biến khi hệ số góc $a > 0$, nghịch biến khi $a < 0$.",
        topic: "Hàm số bậc nhất",
        difficulty: "NB",
      },
      {
        id: "t8-gk2-q3",
        type: "true_false",
        index: 3,
        stem: "Cho tam giác $ABC$, đường thẳng $d$ song song với $BC$ cắt $AB$ tại $D$ và cắt $AC$ tại $E$ (Định lý Thales):",
        subQuestions: [
          { key: "a", text: "Tỉ số $\\frac{AD}{AB} = \\frac{AE}{AC}$.", isCorrect: true },
          { key: "b", text: "Tỉ số $\\frac{AD}{DB} = \\frac{AE}{EC}$.", isCorrect: true },
          { key: "c", text: "Hệ quả: $\\frac{DE}{BC} = \\frac{AD}{AB} = \\frac{AE}{AC}$.", isCorrect: true },
          { key: "d", text: "Nếu $\\frac{AD}{AB} = \\frac{AE}{AC}$ thì $DE$ vuông góc với $BC$.", isCorrect: false },
        ],
        explanation: "Theo định lý Thales đảo, $DE$ song song với $BC$ chứ không phải vuông góc. Ý d là Sai.",
        topic: "Định lý Thales",
        difficulty: "TH",
      },
      {
        id: "t8-gk2-q4",
        type: "true_false",
        index: 4,
        stem: "Xét đường thẳng $d: y = 2x - 4$ trên mặt phẳng tọa độ $Oxy$:",
        subQuestions: [
          { key: "a", text: "Hệ số góc của đường thẳng $d$ là $k = 2$.", isCorrect: true },
          { key: "b", text: "Đường thẳng $d$ cắt trục tung tại điểm $A(0; -4)$.", isCorrect: true },
          { key: "c", text: "Đường thẳng $d$ cắt trục hoành tại điểm $B(2; 0)$.", isCorrect: true },
          { key: "d", text: "Đường thẳng $d$ song song với đường thẳng $y = -2x + 1$.", isCorrect: false },
        ],
        explanation: "Hai đường thẳng song song phải có cùng hệ số góc ($a = a'$). Ở đây $2 \\ne -2$ nên chúng cắt nhau. Ý d là Sai.",
        topic: "Đồ thị hàm số bậc nhất",
        difficulty: "TH",
      },
      {
        id: "t8-gk2-q5",
        type: "short_answer",
        index: 5,
        stem: "Giải phương trình: $5x - 7 = 2x + 8$. Nghiệm của phương trình là $x = ?$",
        correctAnswer: "5",
        acceptableAnswers: ["5"],
        explanation: "$5x - 2x = 8 + 7 \\Leftrightarrow 3x = 15 \\Leftrightarrow x = 5$.",
        topic: "Giải phương trình",
        difficulty: "NB",
      },
      {
        id: "t8-gk2-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho $\\Delta ABC$ có $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Biết $AM = 4\\text{ cm}, MB = 2\\text{ cm}, AN = 6\\text{ cm}$. Tính độ dài đoạn thẳng $NC$ (theo cm):",
        correctAnswer: "3",
        acceptableAnswers: ["3", "3cm"],
        explanation: "Theo định lý Thales: $\\frac{AM}{MB} = \\frac{AN}{NC} \\Leftrightarrow \\frac{4}{2} = \\frac{6}{NC} \\Leftrightarrow NC = \\frac{2 \\times 6}{4} = 3\\text{ cm}$.",
        topic: "Tính độ dài bằng Thales",
        difficulty: "TH",
      },
    ],
  },

  "t8-ck2": {
    id: "t8-ck2",
    title: "Đề Thi Cuối Học Kỳ 2 - Toán 8 (KNTT)",
    grade: "lop-8",
    gradeNumber: 8,
    examType: "cuoi-ky-2",
    category: "LOP_8",
    subtitle: "Tam giác đồng dạng, Hình chóp tam giác đều, chóp tứ giác đều & Dữ liệu thống kê",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t8-ck2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Nếu $\\Delta ABC \\backsim \\Delta A'B'C'$ theo tỉ số đồng dạng $k = 2$ thì tỉ số diện tích $\\frac{S_{\\Delta ABC}}{S_{\\Delta A'B'C'}}$ bằng:",
        options: [
          { key: "A", text: "4" },
          { key: "B", text: "2" },
          { key: "C", text: "1/2" },
          { key: "D", text: "1/4" },
        ],
        correctKey: "A",
        explanation: "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: $k^2 = 2^2 = 4$.",
        topic: "Tam giác đồng dạng",
        difficulty: "NB",
      },
      {
        id: "t8-ck2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Thể tích $V$ của hình chóp đều có diện tích đáy $S$ và chiều cao $h$ được tính theo công thức:",
        options: [
          { key: "A", text: "V = 1/3 S * h" },
          { key: "B", text: "V = S * h" },
          { key: "C", text: "V = 1/2 S * h" },
          { key: "D", text: "V = 4/3 S * h" },
        ],
        correctKey: "A",
        explanation: "Thể tích hình chóp: $V = \\frac{1}{3} S \\cdot h$.",
        topic: "Thể tích hình chóp đều",
        difficulty: "NB",
      },
      {
        id: "t8-ck2-q3",
        type: "true_false",
        index: 3,
        stem: "Cho tam giác $ABC$ có đường phân giác trong $AD$ ($D \\in BC$):",
        subQuestions: [
          { key: "a", text: "Tính chất đường phân giác: $\\frac{DB}{DC} = \\frac{AB}{AC}$.", isCorrect: true },
          { key: "b", text: "Nếu $AB = 6\\text{ cm}, AC = 9\\text{ cm}$ thì $\\frac{DB}{DC} = \\frac{2}{3}$.", isCorrect: true },
          { key: "c", text: "Đường phân giác trong luôn chia đôi diện tích tam giác thành hai phần bằng nhau.", isCorrect: false },
          { key: "d", text: "Khi tam giác $ABC$ cân tại $A$ thì điểm $D$ là trung điểm của cạnh $BC$.", isCorrect: true },
        ],
        explanation: "Tỉ số diện tích hai tam giác bằng tỉ số hai cạnh đáy $DB/DC = AB/AC$, chỉ bằng nhau khi tam giác cân ($AB=AC$). Ý c là Sai.",
        topic: "Tính chất đường phân giác",
        difficulty: "TH",
      },
      {
        id: "t8-ck2-q4",
        type: "true_false",
        index: 4,
        stem: "Một hình chóp tứ giác đều có cạnh đáy bằng $6\\text{ cm}$, chiều cao $h = 4\\text{ cm}$:",
        subQuestions: [
          { key: "a", text: "Đáy của hình chóp là một hình vuông.", isCorrect: true },
          { key: "b", text: "Diện tích đáy của hình chóp là $S_{\\text{đáy}} = 36\\text{ cm}^2$.", isCorrect: true },
          { key: "c", text: "Thể tích của hình chóp là $V = 48\\text{ cm}^3$.", isCorrect: true },
          { key: "d", text: "Các mặt bên của hình chóp là các tam giác vuông cân.", isCorrect: false },
        ],
        explanation: "Thể tích $V = \\frac{1}{3} \\cdot 36 \\cdot 4 = 48\\text{ cm}^3$. Các mặt bên của hình chóp đều là các tam giác CÂN (chưa chắc vuông cân). Ý d là Sai.",
        topic: "Hình chóp tứ giác đều",
        difficulty: "TH",
      },
      {
        id: "t8-ck2-q5",
        type: "short_answer",
        index: 5,
        stem: "Cho hình chóp tam giác đều có diện tích đáy $S = 30\\text{ cm}^2$ và thể tích $V = 50\\text{ cm}^3$. Tính chiều cao $h$ của hình chóp (theo cm):",
        correctAnswer: "5",
        acceptableAnswers: ["5", "5cm"],
        explanation: "$V = \\frac{1}{3} S \\cdot h \\Rightarrow 50 = \\frac{1}{3} \\cdot 30 \\cdot h \\Rightarrow 10h = 50 \\Rightarrow h = 5\\text{ cm}$.",
        topic: "Tính chiều cao hình chóp",
        difficulty: "TH",
      },
      {
        id: "t8-ck2-q6",
        type: "short_answer",
        index: 6,
        stem: "Một cột cờ cao $8\\text{ m}$ có bóng trên mặt đất dài $12\\text{ m}$. Cùng thời điểm đó, một tòa nhà có bóng dài $36\\text{ m}$. Hỏi chiều cao tòa nhà là bao nhiêu mét?",
        correctAnswer: "24",
        acceptableAnswers: ["24", "24m", "24 mét"],
        explanation: "Theo tỉ số đồng dạng của tam giác vuông tạo bởi bóng mặt trời: $\\frac{h}{8} = \\frac{36}{12} = 3 \\Rightarrow h = 8 \\times 3 = 24\\text{ m}$.",
        topic: "Ứng dụng thực tế tam giác đồng dạng",
        difficulty: "VD",
      },
    ],
  },

  // =========================================================================
  // TOÁN 9
  // =========================================================================
  "t9-gk1": {
    id: "t9-gk1",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 9 (KNTT)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "giua-ky-1",
    category: "LOP_9",
    subtitle: "Phương trình & Hệ phương trình bậc nhất hai ẩn, Căn thức bậc hai",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t9-gk1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Cặp số $(x; y) = (2; 1)$ là nghiệm của hệ phương trình nào sau đây?",
        options: [
          { key: "A", text: "{ 2x - y = 3 ; x + 3y = 5 }" },
          { key: "B", text: "{ x + y = 4 ; 2x - y = 1 }" },
          { key: "C", text: "{ 3x - y = 4 ; x + y = 2 }" },
          { key: "D", text: "{ x - 2y = 1 ; 2x + y = 6 }" },
        ],
        correctKey: "A",
        explanation: "Thay $(2; 1)$ vào: $2(2) - 1 = 3$ và $2 + 3(1) = 5$ (đều thỏa mãn).",
        topic: "Hệ phương trình bậc nhất hai ẩn",
        difficulty: "NB",
      },
      {
        id: "t9-gk1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Biểu thức $\\sqrt{2x - 6}$ có nghĩa khi và chỉ khi:",
        options: [
          { key: "A", text: "x ≥ 3" },
          { key: "B", text: "x > 3" },
          { key: "C", text: "x ≤ 3" },
          { key: "D", text: "x ≥ 6" },
        ],
        correctKey: "A",
        explanation: "Điều kiện xác định căn bậc hai: $2x - 6 \\ge 0 \\Leftrightarrow 2x \\ge 6 \\Leftrightarrow x \\ge 3$.",
        topic: "Điều kiện căn thức",
        difficulty: "NB",
      },
      {
        id: "t9-gk1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các phép biến đổi căn thức bậc hai:",
        subQuestions: [
          { key: "a", text: "$\\sqrt{A^2} = |A|$ với mọi biểu thức $A$.", isCorrect: true },
          { key: "b", text: "$\\sqrt{9 \\cdot 16} = \\sqrt{9} \\cdot \\sqrt{16} = 3 \\cdot 4 = 12$.", isCorrect: true },
          { key: "c", text: "$\\sqrt{(-5)^2} = -5$.", isCorrect: false },
          { key: "d", text: "Với $A \\ge 0, B > 0$ ta có $\\frac{\\sqrt{A}}{\\sqrt{B}} = \\sqrt{\\frac{A}{B}}$.", isCorrect: true },
        ],
        explanation: "$\\sqrt{(-5)^2} = |-5| = +5$. Khẳng định c là Sai.",
        topic: "Hằng đẳng thức căn thức",
        difficulty: "TH",
      },
      {
        id: "t9-gk1-q4",
        type: "true_false",
        index: 4,
        stem: "Trong tam giác vuông $ABC$ vuông tại $A$ có góc nhọn $B$:",
        subQuestions: [
          { key: "a", text: "$\\sin B = \\frac{\\text{cạnh đối}}{\\text{cạnh huyền}} = \\frac{AC}{BC}$.", isCorrect: true },
          { key: "b", text: "$\\cos B = \\frac{\\text{cạnh kề}}{\\text{cạnh huyền}} = \\frac{AB}{BC}$.", isCorrect: true },
          { key: "c", text: "Công thức cơ bản: $\\sin^2 B + \\cos^2 B = 1$.", isCorrect: true },
          { key: "d", text: "Khi góc nhọn tăng từ $0^\\circ$ đến $90^\\circ$ thì $\\cos$ của góc đó cũng tăng theo.", isCorrect: false },
        ],
        explanation: "Khi góc tăng từ $0^\\circ$ đến $90^\\circ$, $\\sin$ tăng nhưng $\\cos$ giảm (ví dụ $\\cos 0^\\circ = 1 > \\cos 60^\\circ = 0,5$). Ý d là Sai.",
        topic: "Tỉ số lượng giác góc nhọn",
        difficulty: "TH",
      },
      {
        id: "t9-gk1-q5",
        type: "short_answer",
        index: 5,
        stem: "Giải hệ phương trình $\\begin{cases} x + y = 7 \\\\ 2x - y = 2 \\end{cases}$. Giá trị của $x$ bằng:",
        correctAnswer: "3",
        acceptableAnswers: ["3"],
        explanation: "Cộng hai phương trình vế theo vế: $3x = 9 \\Rightarrow x = 3$ (và $y = 4$).",
        topic: "Giải hệ phương trình",
        difficulty: "TH",
      },
      {
        id: "t9-gk1-q6",
        type: "short_answer",
        index: 6,
        stem: "Rút gọn biểu thức $P = \\sqrt{50} - 2\\sqrt{18} + \\sqrt{8}$. Kết quả có dạng $k\\sqrt{2}$. Giá trị nguyên của $k$ là:",
        correctAnswer: "1",
        acceptableAnswers: ["1"],
        explanation: "$P = 5\\sqrt{2} - 2(3\\sqrt{2}) + 2\\sqrt{2} = (5 - 6 + 2)\\sqrt{2} = 1\\sqrt{2} \\Rightarrow k = 1$.",
        topic: "Rút gọn căn số",
        difficulty: "TH",
      },
    ],
  },

  "t9-ck1": {
    id: "t9-ck1",
    title: "Đề Thi Cuối Học Kỳ 1 - Toán 9 (KNTT)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "cuoi-ky-1",
    category: "LOP_9",
    subtitle: "Tổng hợp Hàm số bậc nhất, Hệ hai phương trình & Đường tròn",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t9-ck1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Cho đường tròn $(O; R)$ và đường thẳng $d$. Nếu khoảng cách $d(O, d) = R$ thì vị trí tương đối giữa đường thẳng và đường tròn là:",
        options: [
          { key: "A", text: "Đường thẳng tiếp xúc với đường tròn" },
          { key: "B", text: "Đường thẳng cắt đường tròn tại 2 điểm" },
          { key: "C", text: "Đường thẳng không giao nhau với đường tròn" },
          { key: "D", text: "Đường thẳng đi qua tâm đường tròn" },
        ],
        correctKey: "A",
        explanation: "Khoảng cách từ tâm đến đường thẳng bằng bán kính $R$ thì đường thẳng là tiếp tuyến của đường tròn (tiếp xúc).",
        topic: "Vị trí tương đối của đường thẳng và đường tròn",
        difficulty: "NB",
      },
      {
        id: "t9-ck1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Hai đường thẳng $d_1: y = 2x - 1$ và $d_2: y = 2x + 3$ có vị trí tương đối là:",
        options: [
          { key: "A", text: "Song song với nhau" },
          { key: "B", text: "Cắt nhau tại một điểm" },
          { key: "C", text: "Trùng nhau" },
          { key: "D", text: "Vuông góc với nhau" },
        ],
        correctKey: "A",
        explanation: "Cùng hệ số góc $a = 2$ và tung độ gốc khác nhau ($-1 \\ne 3$) nên $d_1 \\parallel d_2$.",
        topic: "Vị trí tương đối hai đường thẳng",
        difficulty: "NB",
      },
      {
        id: "t9-ck1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính chất của hai tiếp tuyến cắt nhau của đường tròn $(O)$ xuất phát từ điểm $M$ bên ngoài đường tròn, tiếp xúc tại $A$ và $B$:",
        subQuestions: [
          { key: "a", text: "Độ dài hai đoạn tiếp tuyến bằng nhau: $MA = MB$.", isCorrect: true },
          { key: "b", text: "Tia $MO$ là tia phân giác của góc $\\widehat{AMB}$.", isCorrect: true },
          { key: "c", text: "Tia $OM$ là tia phân giác của góc $\\widehat{AOB}$.", isCorrect: true },
          { key: "d", text: "Đường thẳng $MO$ song song với đoạn thẳng nối hai tiếp điểm $AB$.", isCorrect: false },
        ],
        explanation: "$MO$ là đường trung trực của $AB$, tức là $MO \\perp AB$ chứ không phải song song. Ý d là Sai.",
        topic: "Tính chất hai tiếp tuyến cắt nhau",
        difficulty: "TH",
      },
      {
        id: "t9-ck1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho biểu thức $P = \\left(\\frac{1}{\\sqrt{x} - 1} - \\frac{1}{\\sqrt{x} + 1}\\right) : \\frac{2}{x - 1}$ với $x \\ge 0, x \\ne 1$:",
        subQuestions: [
          { key: "a", text: "Điều kiện xác định của $P$ là $x \\ge 0$ và $x \\ne 1$.", isCorrect: true },
          { key: "b", text: "Mẫu thức chung trong ngoặc là $(\\sqrt{x} - 1)(\\sqrt{x} + 1) = x - 1$.", isCorrect: true },
          { key: "c", text: "Kết quả rút gọn biểu thức trong ngoặc là $\\frac{2}{x - 1}$.", isCorrect: true },
          { key: "d", text: "Giá trị rút gọn cuối cùng của $P$ phụ thuộc vào biến $x$.", isCorrect: false },
        ],
        explanation: "$P = \\frac{2}{x-1} : \\frac{2}{x-1} = 1$ (kết quả là hằng số 1 không phụ thuộc $x$). Ý d là Sai.",
        topic: "Rút gọn biểu thức chứa căn",
        difficulty: "VD",
      },
      {
        id: "t9-ck1-q5",
        type: "short_answer",
        index: 5,
        stem: "Từ điểm $A$ cách tâm $O$ của đường tròn bán kính $R = 3\\text{ cm}$ một khoảng $OA = 5\\text{ cm}$, kẻ tiếp tuyến $AB$ với đường tròn ($B$ là tiếp điểm). Tính độ dài tiếp tuyến $AB$ (theo cm):",
        correctAnswer: "4",
        acceptableAnswers: ["4", "4cm"],
        explanation: "Tam giác $ABO$ vuông tại $B$ vì $AB \\perp OB$. $AB = \\sqrt{OA^2 - OB^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4\\text{ cm}$.",
        topic: "Độ dài tiếp tuyến",
        difficulty: "TH",
      },
      {
        id: "t9-ck1-q6",
        type: "short_answer",
        index: 6,
        stem: "Tìm tọa độ giao điểm của đường thẳng $y = 3x - 6$ với trục hoành $Ox$. Giá trị hoành độ $x = ?$",
        correctAnswer: "2",
        acceptableAnswers: ["2"],
        explanation: "Giao với $Ox$ thì $y = 0 \\Rightarrow 3x - 6 = 0 \\Rightarrow x = 2$.",
        topic: "Giao điểm đồ thị",
        difficulty: "NB",
      },
    ],
  },

  "t9-gk2": {
    id: "t9-gk2",
    title: "Đề Thi Giữa Học Kỳ 2 - Toán 9 (KNTT)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "giua-ky-2",
    category: "LOP_9",
    subtitle: "Hàm số $y = ax^2$, Phương trình bậc hai & Góc với đường tròn",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t9-gk2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
        options: [
          { key: "A", text: "90°" },
          { key: "B", text: "180°" },
          { key: "C", text: "45°" },
          { key: "D", text: "60°" },
        ],
        correctKey: "A",
        explanation: "Định lý: Góc nội tiếp chắn nửa đường tròn là góc vuông ($90^\\circ$).",
        topic: "Góc nội tiếp",
        difficulty: "NB",
      },
      {
        id: "t9-gk2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Biệt thức $\\Delta$ của phương trình bậc hai $ax^2 + bx + c = 0$ ($a \\ne 0$) là:",
        options: [
          { key: "A", text: "Δ = b^2 - 4ac" },
          { key: "B", text: "Δ = b^2 - 2ac" },
          { key: "C", text: "Δ = b^2 + 4ac" },
          { key: "D", text: "Δ = 4ac - b^2" },
        ],
        correctKey: "A",
        explanation: "Công thức nghiệm chuẩn: $\\Delta = b^2 - 4ac$.",
        topic: "Công thức nghiệm phương trình bậc hai",
        difficulty: "NB",
      },
      {
        id: "t9-gk2-q3",
        type: "true_false",
        index: 3,
        stem: "Cho phương trình $x^2 - 5x + 6 = 0$ có hai nghiệm $x_1, x_2$. Theo hệ thức Viète:",
        subQuestions: [
          { key: "a", text: "Tổng hai nghiệm $S = x_1 + x_2 = 5$.", isCorrect: true },
          { key: "b", text: "Tích hai nghiệm $P = x_1 x_2 = 6$.", isCorrect: true },
          { key: "c", text: "Hai nghiệm của phương trình là $x_1 = 2$ và $x_2 = 3$.", isCorrect: true },
          { key: "d", text: "Giá trị biểu thức $x_1^2 + x_2^2 = 25$.", isCorrect: false },
        ],
        explanation: "$x_1^2 + x_2^2 = S^2 - 2P = 5^2 - 2(6) = 25 - 12 = 13 \\ne 25$. Ý d là Sai.",
        topic: "Hệ thức Viète",
        difficulty: "TH",
      },
      {
        id: "t9-gk2-q4",
        type: "true_false",
        index: 4,
        stem: "Cho đồ thị parabol $(P): y = x^2$ và đường thẳng $d: y = 2x + 3$:",
        subQuestions: [
          { key: "a", text: "Parabol $(P)$ đi qua gốc tọa độ $O(0;0)$ và có bề lõm quay lên trên.", isCorrect: true },
          { key: "b", text: "Phương trình hoành độ giao điểm là $x^2 - 2x - 3 = 0$.", isCorrect: true },
          { key: "c", text: "Đường thẳng $d$ cắt parabol $(P)$ tại đúng 2 điểm phân biệt.", isCorrect: true },
          { key: "d", text: "Hai giao điểm đều có hoành độ âm.", isCorrect: false },
        ],
        explanation: "Phương trình $x^2 - 2x - 3 = 0$ có nghiệm $x = -1$ (âm) và $x = 3$ (dương). Khẳng định d là Sai.",
        topic: "Tương giao Parabol và đường thẳng",
        difficulty: "TH",
      },
      {
        id: "t9-gk2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính tổng hai nghiệm của phương trình bậc hai: $2x^2 - 8x + 3 = 0$.",
        correctAnswer: "4",
        acceptableAnswers: ["4"],
        explanation: "Theo Viète: $S = -\\frac{b}{a} = -\\frac{-8}{2} = 4$.",
        topic: "Ứng dụng định lý Viète",
        difficulty: "NB",
      },
      {
        id: "t9-gk2-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho góc ở tâm $\\widehat{AOB} = 80^\\circ$ của đường tròn $(O)$. Số đo góc nội tiếp $\\widehat{ACB}$ cùng chắn cung $AB$ bằng bao nhiêu độ?",
        correctAnswer: "40",
        acceptableAnswers: ["40", "40 độ", "40°"],
        explanation: "Số đo góc nội tiếp bằng một nửa số đo góc ở tâm cùng chắn một cung: $\\frac{80^\\circ}{2} = 40^\\circ$.",
        topic: "Góc nội tiếp và góc ở tâm",
        difficulty: "NB",
      },
    ],
  },

  "t9-ck2": {
    id: "t9-ck2",
    title: "Đề Thi Cuối Học Kỳ 2 - Toán 9 (KNTT)",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "cuoi-ky-2",
    category: "LOP_9",
    subtitle: "Tổng hợp toàn bộ kiến thức Toán 9: Tứ giác nội tiếp, Hình trụ - Nón - Cầu, Bất đẳng thức",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t9-ck2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Một tứ giác nội tiếp được trong đường tròn khi và chỉ khi:",
        options: [
          { key: "A", text: "Tổng hai góc đối nhau bằng 180°" },
          { key: "B", text: "Hai góc kề một cạnh bằng nhau" },
          { key: "C", text: "Có hai đường chéo bằng nhau" },
          { key: "D", text: "Bốn cạnh bằng nhau" },
        ],
        correctKey: "A",
        explanation: "Định lý: Tứ giác có tổng hai góc đối diện bằng $180^\\circ$ là tứ giác nội tiếp.",
        topic: "Tứ giác nội tiếp",
        difficulty: "NB",
      },
      {
        id: "t9-ck2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Diện tích xung quanh của hình trụ có bán kính đáy $r$ và chiều cao $h$ là:",
        options: [
          { key: "A", text: "S_xq = 2πrh" },
          { key: "B", text: "S_xq = πrh" },
          { key: "C", text: "S_xq = πr^2h" },
          { key: "D", text: "S_xq = 2πr^2" },
        ],
        correctKey: "A",
        explanation: "Công thức diện tích xung quanh hình trụ: $S_{xq} = 2\\pi rh$.",
        topic: "Hình trụ",
        difficulty: "NB",
      },
      {
        id: "t9-ck2-q3",
        type: "true_false",
        index: 3,
        stem: "Xét các công thức tính diện tích và thể tích hình không gian tròn xoay:",
        subQuestions: [
          { key: "a", text: "Thể tích khối nón có bán kính đáy $r$ và chiều cao $h$ là $V = \\frac{1}{3} \\pi r^2 h$.", isCorrect: true },
          { key: "b", text: "Thể tích khối cầu bán kính $R$ là $V = \\frac{4}{3} \\pi R^3$.", isCorrect: true },
          { key: "c", text: "Diện tích mặt cầu bán kính $R$ là $S = 4\\pi R^2$.", isCorrect: true },
          { key: "d", text: "Đường sinh $l$ của hình nón thỏa mãn $l = h + r$.", isCorrect: false },
        ],
        explanation: "Theo định lý Pytago trong tam giác vuông tạo bởi trục, đường sinh và bán kính: $l = \\sqrt{h^2 + r^2} \\ne h + r$. Ý d là Sai.",
        topic: "Hình nón và mặt cầu",
        difficulty: "TH",
      },
      {
        id: "t9-ck2-q4",
        type: "true_false",
        index: 4,
        stem: "Cho tam giác nhọn $ABC$ có hai đường cao $BD$ và $CE$ cắt nhau tại $H$:",
        subQuestions: [
          { key: "a", text: "Tứ giác $AEHD$ có $\\widehat{AEH} + \\widehat{ADH} = 180^\\circ$ nên nội tiếp đường tròn.", isCorrect: true },
          { key: "b", text: "Tứ giác $BEDC$ có hai đỉnh kề $E$ và $D$ cùng nhìn cạnh $BC$ dưới góc $90^\\circ$ nên nội tiếp.", isCorrect: true },
          { key: "c", text: "Tâm đường tròn ngoại tiếp tứ giác $BEDC$ là trung điểm của đoạn thẳng $BC$.", isCorrect: true },
          { key: "d", text: "Điểm $H$ là trọng tâm của tam giác $ABC$.", isCorrect: false },
        ],
        explanation: "Giao điểm của các đường cao $H$ là TRỰC TÂM tam giác chứ không phải trọng tâm. Ý d là Sai.",
        topic: "Tứ giác nội tiếp và trực tâm",
        difficulty: "VD",
      },
      {
        id: "t9-ck2-q5",
        type: "short_answer",
        index: 5,
        stem: "Một hình nón có bán kính đáy $r = 3\\text{ cm}$ và chiều cao $h = 4\\text{ cm}$. Tính độ dài đường sinh $l$ của hình nón (theo cm):",
        correctAnswer: "5",
        acceptableAnswers: ["5", "5cm"],
        explanation: "Độ dài đường sinh: $l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\text{ cm}$.",
        topic: "Tính đường sinh hình nón",
        difficulty: "TH",
      },
      {
        id: "t9-ck2-q6",
        type: "short_answer",
        index: 6,
        stem: "Tìm giá trị nhỏ nhất của biểu thức $A = x - 2\\sqrt{x} + 5$ với $x \\ge 0$.",
        correctAnswer: "4",
        acceptableAnswers: ["4"],
        explanation: "$A = (\\sqrt{x} - 1)^2 + 4 \\ge 4$. Dấu bằng xảy ra khi $\\sqrt{x} = 1 \\Leftrightarrow x = 1$. Giá trị nhỏ nhất là 4.",
        topic: "Giá trị nhỏ nhất",
        difficulty: "VD",
      },
    ],
  },

  // ĐỀ ĐẶC BIỆT LỚP 9: ÔN THI TUYỂN SINH VÀO LỚP 10
  "t9-tuyen-sinh-10": {
    id: "t9-tuyen-sinh-10",
    title: "Đề Thi Thử Tuyển Sinh Vào Lớp 10 THPT 2026 - Môn Toán",
    grade: "lop-9",
    gradeNumber: 9,
    examType: "tuyen-sinh-10",
    category: "LOP_9",
    subtitle: "Đề thi chuẩn cấu trúc tuyển sinh lớp 10 các Sở GD&ĐT: Rút gọn, Giải bài toán bằng cách lập hệ, Hình học & BĐT",
    durationMinutes: 120,
    totalQuestions: 6,
    questions: [
      {
        id: "t9-ts10-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Rút gọn biểu thức $A = \\sqrt{(2 - \\sqrt{5})^2} + \\sqrt{5}$ ta được kết quả là:",
        options: [
          { key: "A", text: "2√5 - 2" },
          { key: "B", text: "2" },
          { key: "C", text: "-2" },
          { key: "D", text: "2√5 + 2" },
        ],
        correctKey: "A",
        explanation: "$\\sqrt{(2 - \\sqrt{5})^2} + \\sqrt{5} = |2 - \\sqrt{5}| + \\sqrt{5} = (\\sqrt{5} - 2) + \\sqrt{5} = 2\\sqrt{5} - 2$.",
        topic: "Rút gọn căn số thi vào 10",
        difficulty: "TH",
      },
      {
        id: "t9-ts10-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Hai ca nô khởi hành cùng lúc từ bến $A$ đến bến $B$ cách nhau $60\\text{ km}$. Ca nô thứ nhất chạy nhanh hơn ca nô thứ hai $5\\text{ km/h}$ nên đến $B$ sớm hơn $1$ giờ. Gọi vận tốc ca nô thứ hai là $x\\text{ (km/h, } x > 0\\text{)}$. Phương trình biểu thị mối quan hệ thời gian là:",
        options: [
          { key: "A", text: "60/x - 60/(x + 5) = 1" },
          { key: "B", text: "60/(x + 5) - 60/x = 1" },
          { key: "C", text: "60/x + 60/(x + 5) = 1" },
          { key: "D", text: "60(x + 5) - 60x = 1" },
        ],
        correctKey: "A",
        explanation: "Thời gian ca nô hai đi là $\\frac{60}{x}$, ca nô một là $\\frac{60}{x+5}$. Vì ca nô một đến sớm hơn 1 giờ nên: $\\frac{60}{x} - \\frac{60}{x+5} = 1$.",
        topic: "Lập phương trình chuyển động",
        difficulty: "TH",
      },
      {
        id: "t9-ts10-q3",
        type: "true_false",
        index: 3,
        stem: "Cho parabol $(P): y = x^2$ và đường thẳng $(d): y = 2(m - 1)x + 3 - 2m$:",
        subQuestions: [
          { key: "a", text: "Phương trình hoành độ giao điểm là $x^2 - 2(m - 1)x + 2m - 3 = 0$.", isCorrect: true },
          { key: "b", text: "Biệt thức thu gọn $\\Delta' = (m - 1)^2 - (2m - 3) = m^2 - 4m + 4 = (m - 2)^2$.", isCorrect: true },
          { key: "c", text: "Với mọi $m \\ne 2$, đường thẳng $(d)$ luôn cắt $(P)$ tại hai điểm phân biệt.", isCorrect: true },
          { key: "d", text: "Khi $m = 2$, đường thẳng $(d)$ không có điểm chung với parabol $(P)$.", isCorrect: false },
        ],
        explanation: "Khi $m = 2$ thì $\\Delta' = 0$, đường thẳng $(d)$ tiếp xúc với parabol tại 1 điểm duy nhất chứ không phải không có điểm chung. Ý d là Sai.",
        topic: "Tương giao có chứa tham số m",
        difficulty: "VD",
      },
      {
        id: "t9-ts10-q4",
        type: "true_false",
        index: 4,
        stem: "Từ điểm $M$ nằm ngoài đường tròn $(O; R)$, vẽ hai tiếp tuyến $MA, MB$ ($A, B$ là tiếp điểm) và cát tuyến $MCD$ ($C$ nằm giữa $M$ và $D$):",
        subQuestions: [
          { key: "a", text: "Tứ giác $MAOB$ nội tiếp đường tròn đường kính $MO$.", isCorrect: true },
          { key: "b", text: "Hệ thức lượng: $MA^2 = MC \\cdot MD$.", isCorrect: true },
          { key: "c", text: "Đoạn thẳng $MO$ vuông góc với dây cung $AB$.", isCorrect: true },
          { key: "d", text: "Góc $\\widehat{MAC}$ luôn bằng góc $\\widehat{MCD}$.", isCorrect: false },
        ],
        explanation: "Theo định lý góc tạo bởi tia tiếp tuyến và dây cung: $\\widehat{MAC} = \\widehat{MDA}$ chứ không phải $\\widehat{MCD}$. Ý d là Sai.",
        topic: "Hình học tiếp tuyến cát tuyến",
        difficulty: "VD",
      },
      {
        id: "t9-ts10-q5",
        type: "short_answer",
        index: 5,
        stem: "Tìm vận tốc của ca nô thứ hai (km/h) trong bài toán chuyển động: $\\frac{60}{x} - \\frac{60}{x + 5} = 1$.",
        correctAnswer: "15",
        acceptableAnswers: ["15", "15 km/h", "15km/h"],
        explanation: "$60(x+5) - 60x = x(x+5) \\Leftrightarrow 300 = x^2 + 5x \\Leftrightarrow x^2 + 5x - 300 = 0$. Nghiệm dương $x = 15$ (km/h).",
        topic: "Giải phương trình chứa ẩn ở mẫu",
        difficulty: "VD",
      },
      {
        id: "t9-ts10-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho $a, b > 0$ thỏa mãn $a + b = 2$. Tìm giá trị nhỏ nhất của biểu thức $P = \\frac{1}{a} + \\frac{1}{b}$.",
        correctAnswer: "2",
        acceptableAnswers: ["2"],
        explanation: "Áp dụng BĐT Cauchy: $(a + b)(\\frac{1}{a} + \\frac{1}{b}) \\ge 4 \\Rightarrow P \\ge \\frac{4}{a+b} = \\frac{4}{2} = 2$. Dấu bằng khi $a = b = 1$.",
        topic: "Bất đẳng thức phân loại thi vào 10",
        difficulty: "VDC",
      },
    ],
  },

  // =========================================================================
  // TOÁN 10
  // =========================================================================
  "t10-gk1": {
    id: "t10-gk1",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 10 (Đề số 1)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "giua-ky-1",
    category: "LOP_10",
    subtitle: "Trọng tâm Chương I (Mệnh đề & Tập hợp), Chương II (BPT & Hệ BPT bậc nhất hai ẩn), Chương III (Hệ thức lượng trong tam giác)",
    durationMinutes: 90,
    totalQuestions: 22,
    questions: [
      {
        id: "t10-gk1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Mệnh đề phủ định của mệnh đề: \"Mọi hình vuông đều là hình bình hành\" là:",
        options: [
          {
            key: "A",
            text: "Có ít nhất một hình vuông không phải là hình bình hành."
          },
          {
            key: "B",
            text: "Mọi hình vuông đều không phải là hình bình hành."
          },
          {
            key: "C",
            text: "Có ít nhất một hình bình hành không phải là hình vuông."
          },
          {
            key: "D",
            text: "Mọi hình bình hành đều là hình vuông."
          }
        ],
        correctKey: "A",
        explanation: "Phủ định của mệnh đề: \"$\\forall x \\in X, P(x)$\" là \"$\\exists x \\in X, \\overline{P(x)}$\". Do đó, phủ định của \"Mọi hình vuông đều là hình bình hành\" là \"Có ít nhất một hình vuông không phải là hình bình hành\".",
        topic: "Mệnh đề & Mệnh đề phủ định",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Cho tập hợp $M = \\{x \\in \\mathbb{R} \\mid 1 < x \\le 7\\}$. Tập hợp $M$ được viết dưới dạng khoảng, nửa khoảng là:",
        options: [
          {
            key: "A",
            text: "$(1; 7)$"
          },
          {
            key: "B",
            text: "$[1; 7]$"
          },
          {
            key: "C",
            text: "$(1; 7]$"
          },
          {
            key: "D",
            text: "$[1; 7)$"
          }
        ],
        correctKey: "C",
        explanation: "Vì $1 < x \\le 7$ nên điểm đầu 1 không lấy (ngoặc tròn) và điểm cuối 7 lấy (ngoặc vuông). Vậy $M = (1; 7]$.",
        topic: "Các tập hợp số",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Cho hai tập hợp $A = (-\\infty; 4)$ và $B = [0; +\\infty)$. Tập hợp $A \\cap B$ là:",
        options: [
          {
            key: "A",
            text: "$[0; 4)$"
          },
          {
            key: "B",
            text: "$(0; 4)$"
          },
          {
            key: "C",
            text: "$[0; 4]$"
          },
          {
            key: "D",
            text: "$(-\\infty; +\\infty)$"
          }
        ],
        correctKey: "A",
        explanation: "Giao của hai tập hợp là tập hợp các phần tử vừa thuộc $A$ vừa thuộc $B$: $A \\cap B = (-\\infty; 4) \\cap [0; +\\infty) = [0; 4)$.",
        topic: "Các phép toán trên tập hợp",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Khảo sát 60 học sinh, có 35 bạn thích xem phim hoạt hình, 30 bạn thích xem phim khoa học và 15 bạn thích cả hai thể loại. Số bạn không thích cả hai thể loại phim trên là:",
        options: [
          {
            key: "A",
            text: "$15$"
          },
          {
            key: "B",
            text: "$10$"
          },
          {
            key: "C",
            text: "$20$"
          },
          {
            key: "D",
            text: "$5$"
          }
        ],
        correctKey: "B",
        explanation: "Số học sinh thích ít nhất một thể loại phim là: $|A \\cup B| = |A| + |B| - |A \\cap B| = 35 + 30 - 15 = 50$ (bạn).\\nDo đó, số học sinh không thích cả hai thể loại là: $60 - 50 = 10$ (bạn).",
        topic: "Các phép toán tập hợp",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Miền nghiệm của bất phương trình $x \\le -2$ trên mặt phẳng tọa độ $Oxy$ là:",
        options: [
          {
            key: "A",
            text: "Nửa mặt phẳng nằm bên phải đường thẳng $x = -2$ (kể cả bờ)."
          },
          {
            key: "B",
            text: "Nửa mặt phẳng nằm phía trên đường thẳng $y = -2$."
          },
          {
            key: "C",
            text: "Nửa mặt phẳng nằm bên trái đường thẳng $x = -2$ (kể cả bờ)."
          },
          {
            key: "D",
            text: "Nửa mặt phẳng nằm phía dưới đường thẳng $y = -2$."
          }
        ],
        correctKey: "C",
        explanation: "Đường thẳng $x = -2$ song song với trục tung $Oy$. Tập hợp các điểm có hoành độ $x \\le -2$ tạo thành nửa mặt phẳng nằm bên trái đường thẳng $x = -2$ (kể cả bờ).",
        topic: "Bất phương trình bậc nhất hai ẩn",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Miền nghiệm của bất phương trình $-3x + 2y - 4 \\ge 0$ KHÔNG chứa điểm nào trong các điểm sau?",
        options: [
          {
            key: "A",
            text: "$A(-2; 0)$"
          },
          {
            key: "B",
            text: "$B(-1; 1)$"
          },
          {
            key: "C",
            text: "$C(0; 3)$"
          },
          {
            key: "D",
            text: "$O(0; 0)$"
          }
        ],
        correctKey: "D",
        explanation: "Thay tọa độ $O(0; 0)$ vào vế trái: $-3(0) + 2(0) - 4 = -4 \\ge 0$ (khẳng định sai). Do đó miền nghiệm không chứa điểm $O(0; 0)$.",
        topic: "Bất phương trình bậc nhất hai ẩn",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 2y \\le 6 \\end{cases}$ là một miền đa giác. Đó là hình gì?",
        options: [
          {
            key: "A",
            text: "Hình thang vuông"
          },
          {
            key: "B",
            text: "Tam giác vuông"
          },
          {
            key: "C",
            text: "Tứ giác lồi"
          },
          {
            key: "D",
            text: "Hình bình hành"
          }
        ],
        correctKey: "B",
        explanation: "Miền nghiệm giới hạn bởi hai trục tọa độ $Ox, Oy$ và đường thẳng $3x + 2y = 6$. Ba đỉnh của miền nghiệm là $O(0; 0)$, $A(2; 0)$, $B(0; 3)$, tạo thành một tam giác vuông tại $O$.",
        topic: "Hệ bất phương trình bậc nhất hai ẩn",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Một đỉnh của miền nghiệm hệ $\\begin{cases} x + y \\le 5 \\\\ 2x - y \\le 4 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là giao điểm của hai đường thẳng $x + y = 5$ và $2x - y = 4$. Tọa độ đỉnh này là:",
        options: [
          {
            key: "A",
            text: "$(2; 3)$"
          },
          {
            key: "B",
            text: "$(1; 4)$"
          },
          {
            key: "C",
            text: "$(3; 2)$"
          },
          {
            key: "D",
            text: "$(4; 1)$"
          }
        ],
        correctKey: "C",
        explanation: "Giải hệ phương trình tọa độ giao điểm: $\\begin{cases} x + y = 5 \\\\ 2x - y = 4 \\end{cases} \\Leftrightarrow \\begin{cases} 3x = 9 \\\\ y = 5 - x \\end{cases} \\Leftrightarrow \\begin{cases} x = 3 \\\\ y = 2 \\end{cases}$. Vậy tọa độ đỉnh là $(3; 2)$.",
        topic: "Hệ bất phương trình bậc nhất hai ẩn",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Giá trị của biểu thức $A = \\sin 120^\\circ + \\cos 150^\\circ$ bằng:",
        options: [
          {
            key: "A",
            text: "$\\sqrt{3}$"
          },
          {
            key: "B",
            text: "$-\\sqrt{3}$"
          },
          {
            key: "C",
            text: "$1$"
          },
          {
            key: "D",
            text: "$0$"
          }
        ],
        correctKey: "D",
        explanation: "Áp dụng quan hệ góc bù: $\\sin 120^\\circ = \\sin(180^\\circ - 60^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, và $\\cos 150^\\circ = -\\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$. Do đó $A = \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{2} = 0$.",
        topic: "Giá trị lượng giác của một góc từ 0° đến 180°",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Cho tam giác $ABC$ có $b = 4, c = 5$ và $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
        options: [
          {
            key: "A",
            text: "$\\sqrt{41}$"
          },
          {
            key: "B",
            text: "$\\sqrt{21}$"
          },
          {
            key: "C",
            text: "$\\sqrt{61}$"
          },
          {
            key: "D",
            text: "$5$"
          }
        ],
        correctKey: "B",
        explanation: "Theo định lý Cosin: $a^2 = b^2 + c^2 - 2bc\\cos A = 4^2 + 5^2 - 2 \\cdot 4 \\cdot 5 \\cdot \\cos 60^\\circ = 16 + 25 - 40 \\cdot 0,5 = 21 \\Rightarrow a = \\sqrt{21}$.",
        topic: "Định lý Cosin trong tam giác",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Tam giác $ABC$ có cạnh $b = 8$ và góc $\\widehat{B} = 45^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ là:",
        options: [
          {
            key: "A",
            text: "$8\\sqrt{2}$"
          },
          {
            key: "B",
            text: "$4$"
          },
          {
            key: "C",
            text: "$4\\sqrt{2}$"
          },
          {
            key: "D",
            text: "$8$"
          }
        ],
        correctKey: "C",
        explanation: "Theo định lý Sin: $\\frac{b}{\\sin B} = 2R \\Rightarrow 2R = \\frac{8}{\\sin 45^\\circ} = \\frac{8}{\\frac{\\sqrt{2}}{2}} = 8\\sqrt{2} \\Rightarrow R = 4\\sqrt{2}$.",
        topic: "Định lý Sin trong tam giác",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Tam giác $ABC$ có $a = 6, c = 8$ và $\\widehat{B} = 135^\\circ$. Diện tích của tam giác $ABC$ bằng:",
        options: [
          {
            key: "A",
            text: "$24\\sqrt{2}$"
          },
          {
            key: "B",
            text: "$12$"
          },
          {
            key: "C",
            text: "$24$"
          },
          {
            key: "D",
            text: "$12\\sqrt{2}$"
          }
        ],
        correctKey: "D",
        explanation: "Áp dụng công thức tính diện tích: $S = \\frac{1}{2} ac \\sin B = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin 135^\\circ = 24 \\cdot \\frac{\\sqrt{2}}{2} = 12\\sqrt{2}$.",
        topic: "Các công thức tính diện tích tam giác",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-q13",
        type: "true_false",
        index: 13,
        stem: "Cho hai mệnh đề: $P$: \"$\\forall x \\in \\mathbb{R}, (x - 1)^2 \\ge 0$\" và $Q$: \"$\\exists n \\in \\mathbb{Z}, n^2 + 1 = 0$\". Xét tính Đúng hoặc Sai của mỗi phát biểu sau:",
        subQuestions: [
          {
            key: "a",
            text: "Mệnh đề $P$ là một mệnh đề đúng.",
            isCorrect: true
          },
          {
            key: "b",
            text: "Mệnh đề $Q$ là một mệnh đề đúng.",
            isCorrect: false
          },
          {
            key: "c",
            text: "Mệnh đề phủ định của $P$ là $\\overline{P}$: \"$\\exists x \\in \\mathbb{R}, (x - 1)^2 < 0$\".",
            isCorrect: true
          },
          {
            key: "d",
            text: "Mệnh đề phủ định của $Q$ là $\\overline{Q}$: \"$\\forall n \\in \\mathbb{Z}, n^2 + 1 \\ne 0$\".",
            isCorrect: true
          }
        ],
        explanation: "Phân tích chi tiết từng ý:\n- a) ĐÚNG vì bình phương của mọi số thực luôn không âm: $(x - 1)^2 \\ge 0, \\forall x \\in \\mathbb{R}$.\n- b) SAI vì với mọi số nguyên $n$, $n^2 \\ge 0 \\Rightarrow n^2 + 1 \\ge 1 > 0$, do đó không tồn tại số nguyên nào để $n^2 + 1 = 0$.\n- c) ĐÚNG vì phủ định của \"$\\forall$\" là \"$\\exists$\" và phủ định của \"$\\ge$\" là \"$<$\".\n- d) ĐÚNG vì phủ định của \"$\\exists$\" là \"$\\forall$\" và phủ định của \"$=\"$ là \"$\\ne$\".",
        topic: "Mệnh đề toán học & Kí hiệu với mọi, tồn tại",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q14",
        type: "true_false",
        index: 14,
        stem: "Cho hai tập hợp $A = (-\\infty; 2]$ và $B = [0; 5)$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
        subQuestions: [
          {
            key: "a",
            text: "Phần bù của $A$ trong tập số thực $\\mathbb{R}$ là $C_{\\mathbb{R}} A = (2; +\\infty)$.",
            isCorrect: true
          },
          {
            key: "b",
            text: "Giao của hai tập hợp là $A \\cap B = [0; 2]$.",
            isCorrect: true
          },
          {
            key: "c",
            text: "Hợp của hai tập hợp là $A \\cup B = (-\\infty; 5]$.",
            isCorrect: false
          },
          {
            key: "d",
            text: "Hiệu của hai tập hợp là $B \\setminus A = (2; 5)$.",
            isCorrect: true
          }
        ],
        explanation: "Phân tích chi tiết từng ý:\n- a) ĐÚNG: $C_{\\mathbb{R}} A = \\mathbb{R} \\setminus (-\\infty; 2] = (2; +\\infty)$.\n- b) ĐÚNG: Biểu diễn trên trục số, phần chung của $(-\\infty; 2]$ và $[0; 5)$ là đoạn $[0; 2]$.\n- c) SAI: Vì $5 \\notin B$ nên cận trên là ngoặc tròn: $A \\cup B = (-\\infty; 5)$, khẳng định dùng ngoặc vuông $(-\\infty; 5]$ là sai.\n- d) ĐÚNG: $B \\setminus A$ là các phần tử thuộc $[0; 5)$ nhưng không thuộc $(-\\infty; 2]$, tức là các số thực lớn hơn 2 và nhỏ hơn 5: $(2; 5)$.",
        topic: "Các phép toán trên tập hợp con của ℝ",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q15",
        type: "true_false",
        index: 15,
        stem: "Cho hệ bất phương trình $\\begin{cases} x + y \\le 5 \\\\ x - 2y \\le 2 \\\\ x + 1 \\ge 0 \\end{cases}$ và điểm $A(m; 1)$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subQuestions: [
          {
            key: "a",
            text: "Đường thẳng biên $x + 1 = 0$ là đường thẳng song song với trục tung $Oy$.",
            isCorrect: true
          },
          {
            key: "b",
            text: "Để điểm $A(m; 1)$ thỏa mãn bất phương trình thứ ba của hệ thì $m \\ge -1$.",
            isCorrect: true
          },
          {
            key: "c",
            text: "Để điểm $A(m; 1)$ thuộc miền nghiệm của cả hệ bất phương trình thì $-1 \\le m \\le 4$.",
            isCorrect: true
          },
          {
            key: "d",
            text: "Có tất cả 5 giá trị nguyên của tham số $m$ để điểm $A(m; 1)$ thuộc miền nghiệm của hệ.",
            isCorrect: false
          }
        ],
        explanation: "Phân tích chi tiết từng ý:\n- a) ĐÚNG: Phương trình $x = -1$ biểu diễn đường thẳng song song với trục tung $Oy$ và đi qua điểm $(-1; 0)$.\n- b) ĐÚNG: Thay $x = m$ vào $x + 1 \\ge 0$ ta được $m + 1 \\ge 0 \\Leftrightarrow m \\ge -1$.\n- c) ĐÚNG: Điểm $A(m; 1)$ thuộc miền nghiệm của hệ khi và chỉ khi:\n  $\\begin{cases} m + 1 \\le 5 \\\\ m - 2(1) \\le 2 \\\\ m + 1 \\ge 0 \\end{cases} \\Leftrightarrow \\begin{cases} m \\le 4 \\\\ m \\le 4 \\\\ m \\ge -1 \\end{cases} \\Leftrightarrow -1 \\le m \\le 4$.\n- d) SAI: Các số nguyên $m$ thỏa mãn $-1 \\le m \\le 4$ là $\\{-1; 0; 1; 2; 3; 4\\}$, có tất cả 6 giá trị nguyên chứ không phải 5.",
        topic: "Hệ bất phương trình bậc nhất hai ẩn chứa tham số",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-q16",
        type: "true_false",
        index: 16,
        stem: "Cho tam giác $ABC$ có $\\widehat{A} = 60^\\circ, \\widehat{B} = 45^\\circ$ và cạnh $b = 4$. Xét tính Đúng hoặc Sai của các phát biểu sau:",
        subQuestions: [
          {
            key: "a",
            text: "Số đo góc $\\widehat{C} = 75^\\circ$.",
            isCorrect: true
          },
          {
            key: "b",
            text: "Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = 2\\sqrt{2}$.",
            isCorrect: true
          },
          {
            key: "c",
            text: "Độ dài cạnh $a = 2\\sqrt{6}$.",
            isCorrect: true
          },
          {
            key: "d",
            text: "Độ dài cạnh $a$ ngắn hơn độ dài cạnh $b$.",
            isCorrect: false
          }
        ],
        explanation: "Phân tích chi tiết từng ý:\n- a) ĐÚNG: $\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (60^\\circ + 45^\\circ) = 75^\\circ$.\n- b) ĐÚNG: Theo định lý Sin: $2R = \\frac{b}{\\sin B} = \\frac{4}{\\sin 45^\\circ} = \\frac{4}{\\frac{\\sqrt{2}}{2}} = 4\\sqrt{2} \\Rightarrow R = 2\\sqrt{2}$.\n- c) ĐÚNG: $a = 2R \\sin A = 4\\sqrt{2} \\cdot \\sin 60^\\circ = 4\\sqrt{2} \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{6}$.\n- d) SAI: Ta có $a = 2\\sqrt{6} = \\sqrt{24} \\approx 4,899 > b = 4$. Cạnh $a$ dài hơn cạnh $b$ (phù hợp với tính chất góc đối diện $60^\\circ > 45^\\circ$).",
        topic: "Định lý Sin và giải tam giác",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q17",
        type: "short_answer",
        index: 17,
        stem: "Trong một giải điền kinh gồm 32 vận động viên: có 19 bạn tham gia Chạy, 16 bạn tham gia Nhảy xa, và 7 bạn tham gia cả hai nội dung. Hỏi có bao nhiêu vận động viên chỉ tham gia đúng một nội dung thi đấu?",
        correctAnswer: "21",
        acceptableAnswers: [
          "21",
          "21 vận động viên",
          "hai mươi mốt"
        ],
        explanation: "Số vận động viên chỉ tham gia Chạy là: $19 - 7 = 12$ người.\nSố vận động viên chỉ tham gia Nhảy xa là: $16 - 7 = 9$ người.\nVậy số vận động viên chỉ tham gia đúng một nội dung thi đấu là: $12 + 9 = 21$ người.",
        topic: "Ứng dụng biểu đồ Ven đếm số phần tử",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q18",
        type: "short_answer",
        index: 18,
        stem: "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để đoạn $[m; m + 3]$ là tập con của đoạn $[-2; 6]$?",
        correctAnswer: "6",
        acceptableAnswers: [
          "6",
          "sáu"
        ],
        explanation: "Điều kiện để $[m; m + 3] \\subset [-2; 6]$ là: $\\begin{cases} m \\ge -2 \\\\ m + 3 \\le 6 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge -2 \\\\ m \\le 3 \\end{cases} \\Leftrightarrow -2 \\le m \\le 3$.\nVì $m$ nguyên và thuộc $[-10; 10]$ nên $m \\in \\{-2; -1; 0; 1; 2; 3\\}$. Có tất cả 6 giá trị nguyên.",
        topic: "Tập hợp con chứa tham số",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-q19",
        type: "short_answer",
        index: 19,
        stem: "Cho cặp số $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$. Tìm giá trị lớn nhất của biểu thức mục tiêu $F(x, y) = 2x + 3y$.",
        correctAnswer: "18",
        acceptableAnswers: [
          "18",
          "mười tám"
        ],
        explanation: "Miền nghiệm của hệ là tứ giác lồi $OABC$ với tọa độ các đỉnh:\n- $O(0; 0) \\Rightarrow F(0; 0) = 0$.\n- $A(4; 0)$ (giao của $2x + y = 8$ và $y = 0$) $\\Rightarrow F(4; 0) = 2(4) + 0 = 8$.\n- $B(2; 4)$ (giao của $x + y = 6$ và $2x + y = 8$) $\\Rightarrow F(2; 4) = 2(2) + 3(4) = 16$.\n- $C(0; 6)$ (giao của $x + y = 6$ và $x = 0$) $\\Rightarrow F(0; 6) = 2(0) + 3(6) = 18$.\nSo sánh các giá trị, ta được giá trị lớn nhất của $F(x, y)$ bằng 18 đạt tại điểm $C(0; 6)$.",
        topic: "Bài toán quy hoạch tuyến tính tối ưu hàm mục tiêu",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-q20",
        type: "short_answer",
        index: 20,
        stem: "Cho tam giác $ABC$ có $b = 3, c = 4$ và góc $\\widehat{A} = 60^\\circ$. Tính giá trị của $a^2$.",
        correctAnswer: "13",
        acceptableAnswers: [
          "13",
          "mười ba"
        ],
        explanation: "Theo định lý Cosin trong tam giác $ABC$:\n$a^2 = b^2 + c^2 - 2bc\\cos A = 3^2 + 4^2 - 2 \\cdot 3 \\cdot 4 \\cdot \\cos 60^\\circ = 9 + 16 - 24 \\cdot 0,5 = 25 - 12 = 13$.",
        topic: "Định lý Cosin tính bình phương cạnh",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-q21",
        type: "short_answer",
        index: 21,
        stem: "Tam giác $ABC$ có độ dài ba cạnh là $a = 6, b = 8, c = 10$. Tính bán kính đường tròn nội tiếp $r$ của tam giác $ABC$.",
        correctAnswer: "2",
        acceptableAnswers: [
          "2",
          "hai"
        ],
        explanation: "Nhận xét: $a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100 = 10^2 = c^2$, do đó tam giác $ABC$ vuông tại $C$.\nDiện tích tam giác: $S = \\frac{1}{2} a b = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$.\nNửa chu vi tam giác: $p = \\frac{a + b + c}{2} = \\frac{6 + 8 + 10}{2} = 12$.\nBán kính đường tròn nội tiếp: $r = \\frac{S}{p} = \\frac{24}{12} = 2$.",
        topic: "Bán kính đường tròn nội tiếp tam giác",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-q22",
        type: "short_answer",
        index: 22,
        stem: "Tam giác $ABC$ có diện tích $S = 15$ và bán kính đường tròn ngoại tiếp $R = 5$. Tính tích độ dài ba cạnh $a \\cdot b \\cdot c$ của tam giác đó.",
        correctAnswer: "300",
        acceptableAnswers: [
          "300",
          "ba trăm"
        ],
        explanation: "Áp dụng hệ thức liên hệ giữa diện tích, các cạnh và bán kính đường tròn ngoại tiếp: $S = \\frac{abc}{4R} \\Rightarrow abc = 4RS$.\nThay số: $abc = 4 \\cdot 5 \\cdot 15 = 300$.",
        topic: "Hệ thức diện tích và bán kính ngoại tiếp",
        difficulty: "VD"
      }
    ]
  },

  "t10-gk1-de2": {
    id: "t10-gk1-de2",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 10 (Đề số 2)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "giua-ky-1",
    category: "LOP_10",
    subtitle: "Cấu trúc chuẩn ma trận: 4 điểm Nhận biết - 3 điểm Thông hiểu - 3 điểm Vận dụng (Chương I, II, III)",
    durationMinutes: 90,
    totalQuestions: 22,
    questions: [
      {
        id: "t10-gk1-de2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Trong các câu sau, câu nào là một mệnh đề?",
        options: [
          { key: "A", text: "Số 2025 chia hết cho 5." },
          { key: "B", text: "Bạn đang làm bài tập môn gì đó?" },
          { key: "C", text: "Thời tiết hôm nay dễ chịu quá!" },
          { key: "D", text: "Hãy giải bài tập này cẩn thận!" },
        ],
        correctKey: "A",
        explanation: "Câu \"Số 2025 chia hết cho 5\" là khẳng định đúng (tận cùng bằng 5) nên là mệnh đề. Các câu còn lại là câu hỏi, câu cảm thán và câu cầu khiến nên không phải mệnh đề.",
        topic: "Mệnh đề",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Mệnh đề phủ định của mệnh đề $P$: \"Tam giác $ABC$ là tam giác vuông\" là:",
        options: [
          { key: "A", text: "Tam giác $ABC$ là tam giác đều." },
          { key: "B", text: "Tam giác $ABC$ không phải là tam giác vuông." },
          { key: "C", text: "Tam giác $ABC$ là tam giác cân." },
          { key: "D", text: "Tam giác $ABC$ là tam giác tù." },
        ],
        correctKey: "B",
        explanation: "Phủ định của câu khẳng định \"Tam giác $ABC$ là tam giác vuông\" là thêm từ \"không phải là\": \"Tam giác $ABC$ không phải là tam giác vuông\".",
        topic: "Mệnh đề phủ định",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Cho hai tập hợp $X$ và $Y$ thỏa mãn $X \\subset Y$. Khẳng định nào sau đây luôn ĐÚNG?",
        options: [
          { key: "A", text: "$X \\cup Y = X$" },
          { key: "B", text: "$X \\cap Y = Y$" },
          { key: "C", text: "$X \\cup Y = Y$" },
          { key: "D", text: "$Y \\setminus X = \\emptyset$" },
        ],
        correctKey: "C",
        explanation: "Vì $X \\subset Y$ nên khi hợp hai tập hợp lại ta được toàn bộ tập $Y$, tức là $X \\cup Y = Y$.",
        topic: "Tập hợp và tập con",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn $x, y$?",
        options: [
          { key: "A", text: "$3x + y^3 \\le 2$" },
          { key: "B", text: "$2x - y + z \\ge 0$" },
          { key: "C", text: "$x^2 - y^2 < 1$" },
          { key: "D", text: "$3x - 4y > 7$" },
        ],
        correctKey: "D",
        explanation: "Bất phương trình $3x - 4y > 7$ có bậc 1 đối với cả hai ẩn $x, y$ và hệ số $a = 3, b = -4$ thỏa mãn $a^2 + b^2 \\ne 0$.",
        topic: "Bất phương trình bậc nhất hai ẩn",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Bất phương trình nào sau đây KHÔNG PHẢI là bất phương trình bậc nhất hai ẩn?",
        options: [
          { key: "A", text: "$4x + 3y^2 \\ge 5$" },
          { key: "B", text: "$2x - y \\le 1$" },
          { key: "C", text: "$x + 7y > 0$" },
          { key: "D", text: "$-3y < 6$" },
        ],
        correctKey: "A",
        explanation: "Bất phương trình $4x + 3y^2 \\ge 5$ chứa $y^2$ có bậc 2 nên không phải bậc nhất.",
        topic: "Bất phương trình bậc nhất hai ẩn",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Trong các hệ bất phương trình sau, hệ nào là hệ bất phương trình bậc nhất hai ẩn?",
        options: [
          { key: "A", text: "$\\begin{cases} x^2 + y \\ge 2 \\\\ 2x - y < 5 \\end{cases}$" },
          { key: "B", text: "$\\begin{cases} 3x - 2y \\le 7 \\\\ x + 4y > -1 \\end{cases}$" },
          { key: "C", text: "$\\begin{cases} x + 2y - 3z \\le 0 \\\\ x - y > 1 \\end{cases}$" },
          { key: "D", text: "$\\begin{cases} 2xy \\le 3 \\\\ x + 3y \\ge 1 \\end{cases}$" },
        ],
        correctKey: "B",
        explanation: "Hệ $\\begin{cases} 3x - 2y \\le 7 \\\\ x + 4y > -1 \\end{cases}$ chỉ gồm các nhị thức bậc nhất đối với hai ẩn $x, y$. Các hệ còn lại chứa $x^2$, chứa 3 ẩn ($x, y, z$) hoặc chứa tích $xy$.",
        topic: "Hệ bất phương trình bậc nhất hai ẩn",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Giá trị của $\\cot 120^\\circ$ bằng:",
        options: [
          { key: "A", text: "$\\frac{\\sqrt{3}}{3}$" },
          { key: "B", text: "$-\\sqrt{3}$" },
          { key: "C", text: "$-\\frac{\\sqrt{3}}{3}$" },
          { key: "D", text: "$\\sqrt{3}$" },
        ],
        correctKey: "C",
        explanation: "$\\cot 120^\\circ = -\\cot 60^\\circ = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$.",
        topic: "Giá trị lượng giác 0° - 180°",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Một tam giác đều có cạnh bằng 4 cm thì diện tích bằng:",
        options: [
          { key: "A", text: "$8\\sqrt{3}\\text{ cm}^2$" },
          { key: "B", text: "$16\\sqrt{3}\\text{ cm}^2$" },
          { key: "C", text: "$2\\sqrt{3}\\text{ cm}^2$" },
          { key: "D", text: "$4\\sqrt{3}\\text{ cm}^2$" },
        ],
        correctKey: "D",
        explanation: "Diện tích tam giác đều cạnh $a$ là $S = \\frac{a^2\\sqrt{3}}{4} = \\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}\\text{ cm}^2$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Cho hai tập hợp $A = [-1; 3]$ và $B = (2; 6)$. Tìm tập hợp $A \\cup B$.",
        options: [
          { key: "A", text: "$[-1; 6)$" },
          { key: "B", text: "$(2; 3]$" },
          { key: "C", text: "$[-1; 6]$" },
          { key: "D", text: "$(-1; 6)$" },
        ],
        correctKey: "A",
        explanation: "Hợp hai tập hợp lấy từ mút nhỏ nhất $-1$ (ngoặc vuông) đến mút lớn nhất $6$ (ngoặc tròn). Vậy $A \\cup B = [-1; 6)$.",
        topic: "Các phép toán trên tập hợp",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de2-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Khi biểu diễn miền nghiệm của bất phương trình $x - 3y \\le 6$, đường thẳng bờ $x - 3y = 6$ được vẽ bằng:",
        options: [
          { key: "A", text: "Nét đứt và không thuộc miền nghiệm" },
          { key: "B", text: "Nét liền và thuộc miền nghiệm" },
          { key: "C", text: "Nét liền và không thuộc miền nghiệm" },
          { key: "D", text: "Nét đứt và thuộc miền nghiệm" },
        ],
        correctKey: "B",
        explanation: "Bất phương trình mang dấu $\\le$ (có dấu bằng) nên đường bờ vẽ nét liền và các điểm trên bờ thuộc miền nghiệm.",
        topic: "Miền nghiệm BPT bậc nhất hai ẩn",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de2-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Rút gọn biểu thức $M = \\sin(180^\\circ - x) - \\cos(90^\\circ - x)$. Kết quả là:",
        options: [
          { key: "A", text: "$2\\sin x$" },
          { key: "B", text: "$-2\\sin x$" },
          { key: "C", text: "$0$" },
          { key: "D", text: "$2\\cos x$" },
        ],
        correctKey: "C",
        explanation: "Ta có $\\sin(180^\\circ - x) = \\sin x$ và $\\cos(90^\\circ - x) = \\sin x$. Do đó $M = \\sin x - \\sin x = 0$.",
        topic: "Giá trị lượng giác 0° - 180°",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de2-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Cho tam giác $ABC$ có $AB = 2, AC = 3$ và $\\widehat{A} = 120^\\circ$. Độ dài cạnh $BC$ là:",
        options: [
          { key: "A", text: "$\\sqrt{13}$" },
          { key: "B", text: "$\\sqrt{7}$" },
          { key: "C", text: "$4$" },
          { key: "D", text: "$\\sqrt{19}$" },
        ],
        correctKey: "D",
        explanation: "$BC^2 = 2^2 + 3^2 - 2(2)(3)\\cos 120^\\circ = 4 + 9 - 12\\left(-\\frac{1}{2}\\right) = 13 + 6 = 19 \\Rightarrow BC = \\sqrt{19}$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de2-q13",
        type: "true_false",
        index: 13,
        stem: "Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Câu \"Số 2025 là số lẻ\" là một mệnh đề đúng.", isCorrect: true },
          { key: "b", text: "Câu \"Số 2 là số nguyên tố chẵn duy nhất\" là một mệnh đề đúng.", isCorrect: true },
          { key: "c", text: "Câu \"Hình thoi là hình có bốn góc vuông\" là một mệnh đề đúng.", isCorrect: false },
          { key: "d", text: "Câu \"Phương trình $x^2 - 2 = 0$ có nghiệm hữu tỉ\" là một mệnh đề đúng.", isCorrect: false },
        ],
        explanation: "(a) Đúng. Số 2025 tận cùng là 5 nên là số lẻ. Đây là khẳng định đúng.\n(b) Đúng. Số 2 chỉ chia hết cho 1 và 2 nên là số nguyên tố, mọi số chẵn lớn hơn 2 đều chia hết cho 2 nên là hợp số. Đây là khẳng định đúng.\n(c) Sai. Hình thoi có bốn cạnh bằng nhau, các góc không nhất thiết phải vuông. Hình có bốn góc vuông là hình chữ nhật. Khẳng định này sai.\n(d) Sai. Phương trình $x^2 - 2 = 0$ có nghiệm $x = \\pm \\sqrt{2}$, mà $\\sqrt{2}$ là số vô tỉ, không phải số hữu tỉ. Khẳng định này sai.",
        topic: "Mệnh đề & Phủ định mệnh đề",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q14",
        type: "true_false",
        index: 14,
        stem: "Xét tính Đúng hoặc Sai của mỗi khẳng định sau về bất phương trình bậc nhất hai ẩn:",
        subQuestions: [
          { key: "a", text: "Bất phương trình $5x - 2y + 3 > 0$ là bất phương trình bậc nhất hai ẩn.", isCorrect: true },
          { key: "b", text: "Bất phương trình $x + y^2 \\le 4$ là bất phương trình bậc nhất hai ẩn.", isCorrect: false },
          { key: "c", text: "Bất phương trình $0x + 0y < 1$ là bất phương trình bậc nhất hai ẩn.", isCorrect: false },
          { key: "d", text: "Bất phương trình $4y \\ge 8$ có thể coi là bất phương trình bậc nhất hai ẩn $x, y$.", isCorrect: true },
        ],
        explanation: "(a) Đúng. Hai ẩn $x, y$ có bậc 1 và $5^2 + (-2)^2 = 29 \\ne 0$.\n(b) Sai. Chứa số hạng $y^2$ bậc 2 nên không phải bậc nhất.\n(c) Sai. Cả hai hệ số $a, b$ đồng thời bằng 0 nên không thỏa mãn điều kiện $a^2 + b^2 \\ne 0$.\n(d) Đúng. Viết được dạng $0x + 4y \\ge 8$ với $a = 0, b = 4$ thỏa mãn $a^2 + b^2 = 16 \\ne 0$.",
        topic: "Bất phương trình bậc nhất hai ẩn",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de2-q15",
        type: "true_false",
        index: 15,
        stem: "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (x^2 - 4)(2x^2 - 3x + 1) = 0\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x \\le 2\\}$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Phương trình $(x^2 - 4)(2x^2 - 3x + 1) = 0$ có 4 nghiệm thực phân biệt.", isCorrect: true },
          { key: "b", text: "Tập hợp $A$ có đúng 3 phần tử.", isCorrect: true },
          { key: "c", text: "Tập hợp $B$ gồm đúng 2 phần tử.", isCorrect: false },
          { key: "d", text: "Giao của hai tập hợp là $A \\cap B = \\{1; 2\\}$.", isCorrect: true },
        ],
        explanation: "(a) Đúng. Các nghiệm thực là $x = 2, x = -2, x = 1, x = 1/2$.\n(b) Đúng. Vì $x \\in \\mathbb{Z}$ nên $A = \\{-2; 1; 2\\}$, gồm 3 phần tử.\n(c) Sai. $B = \\{0; 1; 2\\}$, gồm 3 phần tử (tính cả số 0).\n(d) Đúng. Các phần tử chung là 1 và 2.",
        topic: "Các phép toán trên tập hợp",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de2-q16",
        type: "true_false",
        index: 16,
        stem: "Cho tam giác $ABC$ có các cạnh $a = 6, b = 7, c = 8$.",
        subQuestions: [
          { key: "a", text: "Cạnh lớn nhất của tam giác là cạnh $c = 8$.", isCorrect: true },
          { key: "b", text: "Góc $\\widehat{C}$ là góc lớn nhất trong ba góc của tam giác.", isCorrect: true },
          { key: "c", text: "$\\cos C = \\frac{6^2 + 7^2 - 8^2}{2(6)(7)} = \\frac{21}{84} = \\frac{1}{4}$.", isCorrect: true },
          { key: "d", text: "Tam giác $ABC$ là tam giác tù.", isCorrect: false },
        ],
        explanation: "(a) Đúng. Đúng vì $8 > 7 > 6$.\n(b) Đúng. Đúng vì trong tam giác, góc đối diện cạnh lớn nhất là góc lớn nhất.\n(c) Đúng. Đúng vì $\\frac{36 + 49 - 64}{84} = \\frac{21}{84} = \\frac{1}{4}$.\n(d) Sai. Sai vì góc lớn nhất $\\widehat{C}$ có $\\cos C = \\frac{1}{4} > 0$ nên $\\widehat{C} < 90^\\circ$, tam giác là tam giác nhọn.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de2-q17",
        type: "short_answer",
        index: 17,
        stem: "Một nhóm 35 học sinh: có 20 bạn tham gia CLB Bóng đá, 18 bạn tham gia CLB Bóng rổ, và 9 bạn tham gia cả hai CLB. Hỏi có bao nhiêu bạn không tham gia CLB nào trong hai CLB trên?",
        correctAnswer: "6",
        acceptableAnswers: ["6", "sáu", "6 học sinh"],
        explanation: "Số bạn tham gia ít nhất một trong hai CLB là:\\n$|A \\cup B| = |A| + |B| - |A \\cap B| = 20 + 18 - 9 = 29$ bạn.\\nSố bạn không tham gia CLB nào là:\\n$35 - 29 = 6$ bạn.",
        topic: "Số phần tử của tập hợp",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-de2-q18",
        type: "short_answer",
        index: 18,
        stem: "Tìm giá trị nguyên nhỏ nhất của tham số $m$ để điểm $A(1; 2)$ thuộc miền nghiệm của bất phương trình $2x + my + 6 \\ge 0$.",
        correctAnswer: "-4",
        acceptableAnswers: ["-4"],
        explanation: "Thay $A(1; 2)$ vào BPT: $2(1) + m(2) + 6 \\ge 0 \\Leftrightarrow 2m + 8 \\ge 0 \\Leftrightarrow 2m \\ge -8 \\Leftrightarrow m \\ge -4$. Giá trị nguyên nhỏ nhất của $m$ là $-4$.",
        topic: "Tham số trong bất phương trình",
        difficulty: "VD",
      },
      {
        id: "t10-gk1-de2-q19",
        type: "short_answer",
        index: 19,
        stem: "Tính diện tích của miền tam giác nghiệm xác định bởi hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 24 \\end{cases}$.",
        correctAnswer: "24",
        acceptableAnswers: ["24"],
        explanation: "Đường thẳng $3x + 4y = 24$ cắt trục hoành tại $A(8; 0)$ và trục tung tại $B(0; 6)$. Tam giác vuông $OAB$ có diện tích $S = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24$.",
        topic: "Miền nghiệm hệ bất phương trình",
        difficulty: "VD",
      },
      {
        id: "t10-gk1-de2-q20",
        type: "short_answer",
        index: 20,
        stem: "Một xưởng làm bàn ghế cần sản xuất $x$ bàn và $y$ ghế. Doanh thu là $F(x, y) = 500x + 200y$ (nghìn đồng). Biết miền nghiệm thỏa mãn các đỉnh là $O(0; 0), A(10; 0), B(8; 6), C(0; 12)$. Tìm doanh thu lớn nhất (tính bằng nghìn đồng).",
        correctAnswer: "5200",
        acceptableAnswers: ["5200", "5200 nghìn", "5.200"],
        explanation: "Doanh thu $F(x, y) = 500x + 200y$ (nghìn đồng).\\nTính giá trị tại các đỉnh:\\n- Tại $O(0; 0): F = 0$;\\n- Tại $A(10; 0): F = 500(10) = 5000$;\\n- Tại $B(8; 6): F = 500(8) + 200(6) = 4000 + 1200 = 5200$;\\n- Tại $C(0; 12): F = 200(12) = 2400$.\\nDoanh thu lớn nhất là 5200 nghìn đồng khi sản xuất 8 bàn và 6 ghế.",
        topic: "Bài toán quy hoạch tuyến tính thực tế",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-de2-q21",
        type: "short_answer",
        index: 21,
        stem: "Cho tam giác cân $ABC$ có $AB = AC = 5$ và cạnh đáy $BC = 6$. Tính độ dài đường trung tuyến kẻ từ đỉnh $A$.",
        correctAnswer: "4",
        acceptableAnswers: ["4"],
        explanation: "Trong tam giác cân, đường trung tuyến kẻ từ đỉnh $A$ đồng thời là đường cao. Gọi $M$ là trung điểm $BC$, ta có $BM = 3$. Áp dụng Pythagore trong tam giác vuông $ABM$: $AM = \\sqrt{AB^2 - BM^2} = \\sqrt{5^2 - 3^2} = 4$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "VD",
      },
      {
        id: "t10-gk1-de2-q22",
        type: "short_answer",
        index: 22,
        stem: "Để đo khoảng cách $AB$ qua hồ nước, người ta đo được $CA = 30\\text{ m}, CB = 50\\text{ m}$ và góc $\\widehat{ACB} = 120^\\circ$. Tính khoảng cách $AB$ (đơn vị: mét).",
        correctAnswer: "70",
        acceptableAnswers: ["70", "70m", "70 m"],
        explanation: "Áp dụng định lý côsin trong tam giác $ABC$:\\n$AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos \\widehat{ACB}$\\n$= 30^2 + 50^2 - 2 \\cdot 30 \\cdot 50 \\cdot \\cos 120^\\circ = 900 + 2500 - 3000 \\cdot \\left(-\\frac{1}{2}\\right) = 3400 + 1500 = 4900$.\\nDo đó $AB = \\sqrt{4900} = 70\\text{ m}$.",
        topic: "Ứng dụng thực tế hệ thức lượng tam giác",
        difficulty: "VD"
      }
    ],
  },

  "t10-gk1-de3": {
    id: "t10-gk1-de3",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 10 (Đề số 3)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "giua-ky-1",
    category: "LOP_10",
    subtitle: "Cấu trúc chuẩn ma trận: 4 điểm Nhận biết - 3 điểm Thông hiểu - 3 điểm Vận dụng (Chương I, II, III)",
    durationMinutes: 90,
    totalQuestions: 22,
    questions: [
      {
        id: "t10-gk1-de3-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 9 = 0$\". Giá trị nào của $x$ dưới đây làm cho $P(x)$ là mệnh đề đúng?",
        options: [
          { key: "A", text: "$x = 1$" },
          { key: "B", text: "$x = 3$" },
          { key: "C", text: "$x = 2$" },
          { key: "D", text: "$x = 0$" },
        ],
        correctKey: "B",
        explanation: "Phương trình $x^2 - 9 = 0 \\Leftrightarrow x = \\pm 3$. Thay $x = 3$ vào được $3^2 - 9 = 0$ (đúng). Do đó $x = 3$ làm cho $P(x)$ là mệnh đề đúng.",
        topic: "Mệnh đề chứa biến",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Mệnh đề đảo của mệnh đề: \"Nếu $a$ và $b$ cùng chia hết cho $c$ thì $a + b$ chia hết cho $c$\" là:",
        options: [
          { key: "A", text: "Nếu $a$ và $b$ không cùng chia hết cho $c$ thì $a + b$ không chia hết cho $c$." },
          { key: "B", text: "Nếu $a + b$ không chia hết cho $c$ thì $a$ và $b$ không chia hết cho $c$." },
          { key: "C", text: "Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$." },
          { key: "D", text: "$a + b$ chia hết cho $c$ khi và chỉ khi $a$ và $b$ cùng chia hết cho $c$." },
        ],
        correctKey: "C",
        explanation: "Mệnh đề đảo của mệnh đề \"Nếu $P$ thì $Q$\" là mệnh đề \"Nếu $Q$ thì $P$\": \"Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$\".",
        topic: "Ký hiệu với mọi và tồn tại",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Số tập con của một tập hợp có 5 phần tử là:",
        options: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$16$" },
          { key: "C", text: "$25$" },
          { key: "D", text: "$32$" },
        ],
        correctKey: "D",
        explanation: "Số tập con của tập hợp có 5 phần tử là $2^5 = 32$.",
        topic: "Tập hợp và số phần tử",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Cho hai tập hợp $A = \\{a, b, c, d\\}$ và $B = \\{b, d, e\\}$. Tập hợp $A \\cap B$ có bao nhiêu phần tử?",
        options: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$1$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$5$" },
        ],
        correctKey: "A",
        explanation: "Các phần tử chung là $b$ và $d$, tổng cộng có 2 phần tử.",
        topic: "Các phép toán trên tập hợp",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Cặp số nào sau đây là một nghiệm của bất phương trình $x - 3y + 4 \\ge 0$?",
        options: [
          { key: "A", text: "$(1; 2)$" },
          { key: "B", text: "$(0; 0)$" },
          { key: "C", text: "$(2; 3)$" },
          { key: "D", text: "$(0; 2)$" },
        ],
        correctKey: "B",
        explanation: "Thay $(0; 0)$ vào vế trái: $0 - 3(0) + 4 = 4 \\ge 0$ (luôn đúng).",
        topic: "Bất phương trình bậc nhất hai ẩn",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Đường thẳng bờ của miền nghiệm bất phương trình $4x - 3y - 12 \\ge 0$ có phương trình là:",
        options: [
          { key: "A", text: "$4x + 3y = 12$" },
          { key: "B", text: "$3x - 4y = 12$" },
          { key: "C", text: "$4x - 3y = 12$" },
          { key: "D", text: "$4x - 3y = -12$" },
        ],
        correctKey: "C",
        explanation: "Đổi dấu bất phương trình thành dấu bằng: $4x - 3y - 12 = 0 \\Leftrightarrow 4x - 3y = 12$.",
        topic: "Bất phương trình bậc nhất hai ẩn",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Khẳng định nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "$\\cos 180^\\circ = 1$" },
          { key: "B", text: "$\\tan 180^\\circ = 1$" },
          { key: "C", text: "$\\sin 180^\\circ = -1$" },
          { key: "D", text: "$\\sin 180^\\circ = 0$" },
        ],
        correctKey: "D",
        explanation: "Tại góc $180^\\circ$, điểm biểu diễn là $(-1; 0)$, do đó tung độ $\\sin 180^\\circ = 0$.",
        topic: "Giá trị lượng giác 0° - 180°",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Bán kính đường tròn ngoại tiếp tam giác đều cạnh $a$ là:",
        options: [
          { key: "A", text: "$\\frac{a\\sqrt{3}}{3}$" },
          { key: "B", text: "$\\frac{a\\sqrt{3}}{6}$" },
          { key: "C", text: "$\\frac{a\\sqrt{3}}{2}$" },
          { key: "D", text: "$a\\sqrt{3}$" },
        ],
        correctKey: "A",
        explanation: "$R = \\frac{a}{2\\sin 60^\\circ} = \\frac{a}{2 \\cdot \\frac{\\sqrt{3}}{2}} = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Cho tập hợp $B = \\{x \\in \\mathbb{R} \\mid x^2 - 9 < 0\\}$. Khi đó tập $B$ là:",
        options: [
          { key: "A", text: "$[-3; 3]$" },
          { key: "B", text: "$(-3; 3)$" },
          { key: "C", text: "$(-\\infty; -3) \\cup (3; +\\infty)$" },
          { key: "D", text: "$[0; 3)$" },
        ],
        correctKey: "B",
        explanation: "$x^2 - 9 < 0 \\Leftrightarrow -3 < x < 3$. Vậy $B = (-3; 3)$.",
        topic: "Các phép toán trên tập hợp",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de3-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x \\le 3 \\\\ y \\le 4 \\end{cases}$ có bao nhiêu đỉnh?",
        options: [
          { key: "A", text: "3 đỉnh" },
          { key: "B", text: "5 đỉnh" },
          { key: "C", text: "4 đỉnh" },
          { key: "D", text: "Vô số đỉnh" },
        ],
        correctKey: "C",
        explanation: "Miền nghiệm là hình chữ nhật giới hạn bởi $0 \\le x \\le 3$ và $0 \\le y \\le 4$, có 4 đỉnh là $O(0; 0), A(3; 0), B(3; 4), C(0; 4)$.",
        topic: "Miền nghiệm hệ bất phương trình",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de3-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Cho góc tù $\\alpha$ có $\\sin \\alpha = \\frac{5}{13}$. Giá trị của $\\tan \\alpha$ bằng:",
        options: [
          { key: "A", text: "$\\frac{5}{12}$" },
          { key: "B", text: "$-\\frac{12}{5}$" },
          { key: "C", text: "$\\frac{12}{5}$" },
          { key: "D", text: "$-\\frac{5}{12}$" },
        ],
        correctKey: "D",
        explanation: "Vì $\\alpha$ tù nên $\\cos \\alpha < 0 \\Rightarrow \\cos \\alpha = -\\sqrt{1 - (5/13)^2} = -\\frac{12}{13}$. Do đó $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = -\\frac{5}{12}$.",
        topic: "Giá trị lượng giác 0° - 180°",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de3-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Tam giác $ABC$ có ba cạnh lần lượt là $a = 3, b = 5, c = 7$. Góc lớn nhất của tam giác $ABC$ có số đo bằng:",
        options: [
          { key: "A", text: "$120^\\circ$" },
          { key: "B", text: "$150^\\circ$" },
          { key: "C", text: "$135^\\circ$" },
          { key: "D", text: "$90^\\circ$" },
        ],
        correctKey: "A",
        explanation: "Cạnh lớn nhất là $c = 7$ nên góc lớn nhất là $\\widehat{C}$. Ta có $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{9 + 25 - 49}{2(3)(5)} = \\frac{-15}{30} = -\\frac{1}{2} \\Rightarrow \\widehat{C} = 120^\\circ$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de3-q13",
        type: "true_false",
        index: 13,
        stem: "Cho định lý: \"Nếu hai góc đối đỉnh thì hai góc đó bằng nhau.\" Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Giả thiết của định lý là: \"Hai góc đối đỉnh\".", isCorrect: true },
          { key: "b", text: "\"Hai góc bằng nhau\" là điều kiện đủ để hai góc đó đối đỉnh.", isCorrect: false },
          { key: "c", text: "\"Hai góc đối đỉnh\" là điều kiện đủ để hai góc đó bằng nhau.", isCorrect: true },
          { key: "d", text: "Mệnh đề đảo của định lý trên là một mệnh đề đúng.", isCorrect: false },
        ],
        explanation: "(a) Đúng. Mệnh đề đứng sau từ \"Nếu\" là giả thiết của định lý.\n(b) Sai. \"Hai góc bằng nhau\" là kết luận $Q$, do đó nó là điều kiện cần chứ không phải điều kiện đủ.\n(c) Đúng. \"Hai góc đối đỉnh\" là giả thiết $P$, nên nó là điều kiện đủ để có kết luận $Q$.\n(d) Sai. Mệnh đề đảo là: \"Nếu hai góc bằng nhau thì hai góc đó đối đỉnh.\" Mệnh đề này sai vì hai góc bằng nhau hoàn toàn có thể ở vị trí so le trong hoặc đồng vị, không nhất thiết phải đối đỉnh.",
        topic: "Mệnh đề thuận và đảo",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q14",
        type: "true_false",
        index: 14,
        stem: "Xét điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị ứng với góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$).",
        subQuestions: [
          { key: "a", text: "Tọa độ điểm $M$ luôn thỏa mãn $x_0^2 + y_0^2 = 1$.", isCorrect: true },
          { key: "b", text: "Tung độ $y_0$ luôn nhận giá trị không âm.", isCorrect: true },
          { key: "c", text: "Nếu $x_0 < 0$ thì $\\alpha$ là góc nhọn.", isCorrect: false },
          { key: "d", text: "Nếu $x_0 = 0$ thì $\\alpha = 90^\\circ$.", isCorrect: true },
        ],
        explanation: "(a) Đúng. Đúng vì $M$ thuộc đường tròn đơn vị có bán kính $R = 1$.\n(b) Đúng. Đúng vì nửa đường tròn đơn vị nằm phía trên trục hoành ($y \\ge 0$).\n(c) Sai. Sai vì $x_0 = \\cos \\alpha < 0$ thì $\\alpha$ phải là góc tù.\n(d) Đúng. Đúng vì $\\cos 90^\\circ = 0$ và điểm đó là $B(0; 1)$.",
        topic: "Giá trị lượng giác 0° - 180°",
        difficulty: "NB",
      },
      {
        id: "t10-gk1-de3-q15",
        type: "true_false",
        index: 15,
        stem: "Cho hệ bất phương trình bậc nhất hai ẩn $(I): \\begin{cases} x + 2y \\le 6 \\\\ 2x - y \\ge 2 \\\\ y \\ge 0 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Hệ $(I)$ là một hệ bất phương trình bậc nhất hai ẩn.", isCorrect: true },
          { key: "b", text: "Cặp số $(2; 1)$ là một nghiệm của hệ $(I)$.", isCorrect: true },
          { key: "c", text: "Gốc tọa độ $O(0; 0)$ là một nghiệm của hệ $(I)$.", isCorrect: false },
          { key: "d", text: "Điểm $K(0; 3)$ thuộc miền nghiệm của hệ $(I)$.", isCorrect: false },
        ],
        explanation: "(a) Đúng. Đúng vì mỗi bất phương trình trong hệ đều là bất phương trình bậc nhất hai ẩn $x, y$.\n(b) Đúng. Đúng vì $2 + 2(1) = 4 \\le 6$, $2(2) - 1 = 3 \\ge 2$, $1 \\ge 0$ đều thỏa mãn.\n(c) Sai. Sai vì thay $(0; 0)$ vào BPT thứ hai: $2(0) - 0 = 0 \\ge 2$ là sai.\n(d) Sai. Sai vì thay $K(0; 3)$ vào BPT thứ hai: $2(0) - 3 = -3 \\ge 2$ là sai.",
        topic: "Hệ bất phương trình bậc nhất hai ẩn",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de3-q16",
        type: "true_false",
        index: 16,
        stem: "Cho tam giác $ABC$ có ba cạnh $a = 5, b = 12, c = 13$.",
        subQuestions: [
          { key: "a", text: "Tam giác $ABC$ vuông tại $C$.", isCorrect: true },
          { key: "b", text: "Diện tích tam giác $ABC$ bằng $30$.", isCorrect: true },
          { key: "c", text: "Bán kính đường tròn ngoại tiếp $R = 6{,}5$.", isCorrect: true },
          { key: "d", text: "Bán kính đường tròn nội tiếp $r = 3$.", isCorrect: false },
        ],
        explanation: "(a) Đúng. Đúng vì $5^2 + 12^2 = 25 + 144 = 169 = 13^2$, tam giác vuông tại đỉnh đối diện cạnh $c$.\n(b) Đúng. Đúng vì $S = \\frac{1}{2} a b = \\frac{1}{2}(5)(12) = 30$.\n(c) Đúng. Đúng vì $R = \\frac{c}{2} = \\frac{13}{2} = 6{,}5$.\n(d) Sai. Sai vì nửa chu vi $p = \\frac{5+12+13}{2} = 15 \\Rightarrow r = \\frac{S}{p} = \\frac{30}{15} = 2 \\ne 3$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "TH",
      },
      {
        id: "t10-gk1-de3-q17",
        type: "short_answer",
        index: 17,
        stem: "Cho tập hợp $A$ có 7 phần tử phân biệt. Có tất cả bao nhiêu tập con gồm đúng 2 phần tử của tập hợp $A$?",
        correctAnswer: "21",
        acceptableAnswers: ["21","hai mươi mốt"],
        explanation: "Số tập con gồm 2 phần tử là: $C_7^2 = \\frac{7 \\cdot 6}{2} = 21$.",
        topic: "Tập hợp và tập con",
        difficulty: "VD",
      },
      {
        id: "t10-gk1-de3-q18",
        type: "short_answer",
        index: 18,
        stem: "Tìm giá trị nguyên lớn nhất của tham số $m$ để hai khoảng $(0; 5)$ và $(m; +\\infty)$ có phần tử chung (tức là giao nhau khác rỗng)?",
        correctAnswer: "4",
        acceptableAnswers: ["4","m=4","bốn"],
        explanation: "Để $(0; 5) \\cap (m; +\\infty) \\ne \\emptyset$ thì $m < 5$. Số nguyên lớn nhất thỏa mãn là 4.",
        topic: "Tham số trong tập hợp",
        difficulty: "VD",
      },
      {
        id: "t10-gk1-de3-q19",
        type: "short_answer",
        index: 19,
        stem: "Cho $(x; y)$ thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$. Tìm giá trị lớn nhất của biểu thức $F(x, y) = 2x + 3y$.",
        correctAnswer: "18",
        acceptableAnswers: ["18"],
        explanation: "Miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$ (vì giao của $x+y=6$ và $2x+y=8$ là $x=2, y=4$).\nTính $F$ tại các đỉnh:\n$F(0; 0) = 0$;\n$F(4; 0) = 8$;\n$F(2; 4) = 2(2) + 3(4) = 16$;\n$F(0; 6) = 2(0) + 3(6) = 18$.\nVậy giá trị lớn nhất là 18.",
        topic: "Miền nghiệm hệ bất phương trình",
        difficulty: "VD",
      },
      {
        id: "t10-gk1-de3-q20",
        type: "short_answer",
        index: 20,
        stem: "Một xưởng sản xuất hai loại quạt A và B. Lợi nhuận bán một chiếc quạt A là 400 nghìn đồng, quạt B là 500 nghìn đồng. Do giới hạn về nhân công và linh kiện, số lượng quạt $(x; y)$ sản xuất mỗi ngày thỏa mãn miền tứ giác có 4 đỉnh: $O(0; 0), A(10; 0), B(8; 6), C(0; 8)$. Hỏi lợi nhuận tối đa xưởng có thể đạt được trong một ngày là bao nhiêu triệu đồng?",
        correctAnswer: "6.2",
        acceptableAnswers: ["6.2", "6,2", "6.2 triệu", "6,2 triệu"],
        explanation: "Lợi nhuận thu được là $F(x, y) = 0{,}4x + 0{,}5y$ (triệu đồng).\\nTính giá trị tại 4 đỉnh của miền tứ giác nghiệm:\\n- Tại $O(0; 0): F = 0$;\\n- Tại $A(10; 0): F = 0{,}4(10) = 4$ triệu đồng;\\n- Tại $C(0; 8): F = 0{,}5(8) = 4$ triệu đồng;\\n- Tại $B(8; 6): F = 0{,}4(8) + 0{,}5(6) = 3{,}2 + 3 = 6{,}2$ triệu đồng.\\nVậy lợi nhuận lớn nhất xưởng có thể đạt được trong một ngày là 6,2 triệu đồng (đạt khi sản xuất 8 quạt A và 6 quạt B).",
        topic: "Bài toán quy hoạch tuyến tính thực tế",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-de3-q21",
        type: "short_answer",
        index: 21,
        stem: "Tam giác có ba cạnh $a = 6, b = 8, c = 10$. Tính bán kính đường tròn nội tiếp $r$.",
        correctAnswer: "2",
        acceptableAnswers: ["2"],
        explanation: "Tam giác vuông, $S = \\frac{1}{2}(6)(8) = 24$, $p = 12 \\Rightarrow r = \\frac{24}{12} = 2$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "VD",
      },
      {
        id: "t10-gk1-de3-q22",
        type: "short_answer",
        index: 22,
        stem: "Hai người cùng quan sát đỉnh một tòa tháp cao từ hai điểm $A$ và $B$ cách nhau $60\\text{ m}$ trên mặt đất ($A, B$ và chân tháp thẳng hàng, chân tháp nằm cùng phía với $B$ so với $A$). Biết từ $A$ và $B$ nhìn thấy đỉnh tòa tháp dưới các góc nâng lần lượt là $30^\\circ$ và $60^\\circ$. Tính chiều cao của tháp (lấy kết quả chính xác dưới dạng $a\\sqrt{3}\\text{ m}$, hãy điền giá trị của $a$).",
        correctAnswer: "30",
        acceptableAnswers: ["30"],
        explanation: "Gọi $C$ là đỉnh tháp, $D$ là chân tháp. Góc ngoài tại $B$ của tam giác $ABC$ là $60^\\circ$, mà $\\widehat{A} = 30^\\circ$ nên $\\widehat{ACB} = 60^\\circ - 30^\\circ = 30^\\circ$.\\nTam giác $ABC$ có $\\widehat{A} = \\widehat{ACB} = 30^\\circ$ nên cân tại $B$, suy ra $BC = AB = 60\\text{ m}$.\\nTrong tam giác vuông $BCD$ tại $D$:\\nChiều cao tháp là: $h = CD = BC \\cdot \\sin 60^\\circ = 60 \\cdot \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}\\text{ m}$.\\nVậy $a = 30$.",
        topic: "Ứng dụng thực tế hệ thức lượng tam giác",
        difficulty: "VD"
      }
    ],
  },

  "t10-gk1-de4": {
    id: "t10-gk1-de4",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 10 (Đề số 4)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "giua-ky-1",
    category: "LOP_10",
    subtitle: "Đề thi chính thức THPT Nguyễn Trãi - Hội An (Sở GD&ĐT Đà Nẵng) - Năm học 2025 - 2026",
    durationMinutes: 90,
    totalQuestions: 22,
    questions: [
      {
        id: "t10-gk1-de4-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Trong các đẳng thức sau đây, đẳng thức nào sai?",
        options: [
          { key: "A", text: "$\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$" },
          { key: "B", text: "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha$" },
          { key: "C", text: "$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$" },
          { key: "D", text: "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$" }
        ],
        correctKey: "B",
        explanation: "Theo tính chất của hai góc bù nhau:\n$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$;\n$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$;\n$\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$;\n$\\cot(180^\\circ - \\alpha) = -\\cot \\alpha$.\nDo đó đẳng thức $\\cot(180^\\circ - \\alpha) = \\cot \\alpha$ là sai.",
        topic: "Giá trị lượng giác của hai góc bù nhau",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Cho mệnh đề: “Nếu một tứ giác là hình chữ nhật thì tứ giác đó có hai đường chéo bằng nhau”. Trong các mệnh đề sau đây, đâu là mệnh đề đảo của mệnh đề trên?",
        options: [
          { key: "A", text: "Nếu tứ giác có hai đường chéo không bằng nhau thì tứ giác đó không là hình chữ nhật." },
          { key: "B", text: "Nếu tứ giác có hai đường chéo bằng nhau thì tứ giác đó là hình chữ nhật." },
          { key: "C", text: "Nếu tứ giác không là hình chữ nhật thì tứ giác đó không có hai đường chéo bằng nhau." },
          { key: "D", text: "Nếu tứ giác là hình chữ nhật thì tứ giác đó có hai đường chéo bằng nhau." }
        ],
        correctKey: "B",
        explanation: "Mệnh đề có dạng $P \\Rightarrow Q$. Mệnh đề đảo có dạng $Q \\Rightarrow P$: \"Nếu tứ giác có hai đường chéo bằng nhau thì tứ giác đó là hình chữ nhật\".",
        topic: "Mệnh đề đảo",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Trong $\\triangle ABC$ có $AB = c, AC = b, BC = a$. Đẳng thức nào sau đây đúng?",
        options: [
          { key: "A", text: "$c^2 = a^2 + b^2 + 2ab \\cos C$" },
          { key: "B", text: "$c^2 = a^2 + b^2 - 2ab \\cos A$" },
          { key: "C", text: "$c^2 = a^2 + b^2 - 2ab \\cos B$" },
          { key: "D", text: "$c^2 = a^2 + b^2 - 2ab \\cos C$" }
        ],
        correctKey: "D",
        explanation: "Theo định lí côsin trong tam giác: $c^2 = a^2 + b^2 - 2ab \\cos C$.",
        topic: "Định lí côsin trong tam giác",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Mệnh đề phủ định của mệnh đề \"$\\exists x \\in \\mathbb{R},\\; x^2 + x + 5 \\ge 0$\" là:",
        options: [
          { key: "A", text: "$\\exists x \\in \\mathbb{R},\\; x^2 + x + 5 \\le 0$" },
          { key: "B", text: "$\\exists x \\in \\mathbb{R},\\; x^2 + x + 5 < 0$" },
          { key: "C", text: "$\\forall x \\in \\mathbb{R},\\; x^2 + x + 5 \\le 0$" },
          { key: "D", text: "$\\forall x \\in \\mathbb{R},\\; x^2 + x + 5 < 0$" }
        ],
        correctKey: "D",
        explanation: "Phủ định của kí hiệu $\\exists$ là $\\forall$, và phủ định của bất đẳng thức $\\ge 0$ là $< 0$. Do đó phủ định của mệnh đề đã cho là: \"$\\forall x \\in \\mathbb{R},\\; x^2 + x + 5 < 0$\".",
        topic: "Mệnh đề phủ định",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Viết mệnh đề sau bằng cách sử dụng kí hiệu $\\forall$ hoặc $\\exists$: “Mọi số thực nhân với 1 đều bằng chính nó”.",
        options: [
          { key: "A", text: "$\\exists x \\in \\mathbb{R},\\; x + 1 = x$" },
          { key: "B", text: "$\\forall x \\in \\mathbb{R},\\; x \\cdot 1 = x$" },
          { key: "C", text: "$\\exists x \\in \\mathbb{R},\\; x \\cdot 1 = x$" },
          { key: "D", text: "$\\forall x \\in \\mathbb{R},\\; x = x + 1$" }
        ],
        correctKey: "B",
        explanation: "\"Mọi số thực\" tương ứng kí hiệu $\\forall x \\in \\mathbb{R}$, \"nhân với 1 đều bằng chính nó\" tương ứng $x \\cdot 1 = x$.",
        topic: "Kí hiệu với mọi và tồn tại",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Cho tập hợp $B = \\{a; 1; b; 3\\}$. Mệnh đề nào sau đây là sai?",
        options: [
          { key: "A", text: "$\\{1\\} \\subset B$" },
          { key: "B", text: "$\\{-2\\} \\not\\subset B$" },
          { key: "C", text: "$3 \\notin B$" },
          { key: "D", text: "$b \\in B$" }
        ],
        correctKey: "C",
        explanation: "Phần tử 3 thuộc tập hợp $B$ ($3 \\in B$), vì vậy mệnh đề \"$3 \\notin B$\" là mệnh đề sai.",
        topic: "Khái niệm và quan hệ tập hợp",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Trong các đẳng thức sau đây, đẳng thức nào là đúng?",
        options: [
          { key: "A", text: "$\\cot 150^\\circ = \\sqrt{3}$" },
          { key: "B", text: "$\\tan 150^\\circ = \\frac{1}{\\sqrt{3}}$" },
          { key: "C", text: "$\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$" },
          { key: "D", text: "$\\sin 150^\\circ = -\\frac{1}{2}$" }
        ],
        correctKey: "C",
        explanation: "Ta có $\\cos 150^\\circ = \\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.\nCác giá trị khác: $\\sin 150^\\circ = \\frac{1}{2}$, $\\tan 150^\\circ = -\\frac{1}{\\sqrt{3}}$, $\\cot 150^\\circ = -\\sqrt{3}$.",
        topic: "Giá trị lượng giác góc đặc biệt",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Trong $\\triangle ABC$ có $AB = c, AC = b, BC = a$. Chọn công thức tính diện tích đúng trong các đáp án sau:",
        options: [
          { key: "A", text: "$S = ac \\sin B$" },
          { key: "B", text: "$S = \\frac{1}{2} ac \\sin C$" },
          { key: "C", text: "$S = \\frac{1}{2} ac \\sin A$" },
          { key: "D", text: "$S = \\frac{1}{2} ac \\sin B$" }
        ],
        correctKey: "D",
        explanation: "Công thức tính diện tích tam giác theo tích hai cạnh và sin của góc xen giữa là $S = \\frac{1}{2} ac \\sin B$.",
        topic: "Công thức diện tích tam giác",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Hệ nào dưới đây là hệ bất phương trình bậc nhất hai ẩn?",
        options: [
          { key: "A", text: "$\\begin{cases} x + y^2 \\le 0 \\\\ x^2 - y < 1 \\end{cases}$" },
          { key: "B", text: "$\\begin{cases} \\sqrt{x} + 2y > 3 \\\\ x - 2y \\le 2 \\end{cases}$" },
          { key: "C", text: "$\\begin{cases} 2x + 3y < 1 \\\\ xy \\ge -3 \\end{cases}$" },
          { key: "D", text: "$\\begin{cases} x + 2y > 3 \\\\ x - y \\le -4 \\end{cases}$" }
        ],
        correctKey: "D",
        explanation: "Hệ bất phương trình bậc nhất hai ẩn gồm các bất phương trình bậc nhất đối với hai ẩn $x, y$. Hệ ở phương án D thỏa mãn. Các hệ còn lại chứa $y^2, x^2, \\sqrt{x}, xy$ nên không phải bậc nhất hai ẩn.",
        topic: "Nhận biết hệ bất phương trình bậc nhất hai ẩn",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Trong các câu sau, câu nào không phải là mệnh đề?",
        options: [
          { key: "A", text: "8 là số chính phương." },
          { key: "B", text: "Buồn ngủ quá!" },
          { key: "C", text: "Băng Cốc là thủ đô của Mianma." },
          { key: "D", text: "Hình thoi có hai đường chéo vuông góc với nhau." }
        ],
        correctKey: "B",
        explanation: "\"Buồn ngủ quá!\" là một câu cảm thán, bộc lộ cảm xúc, không thể xác định tính đúng hoặc sai nên không phải là mệnh đề.",
        topic: "Khái niệm mệnh đề",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de4-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Điểm nào dưới đây thuộc miền nghiệm của bất phương trình $2x + y < 1$?",
        options: [
          { key: "A", text: "$P(2; -2)$" },
          { key: "B", text: "$M(1; -2)$" },
          { key: "C", text: "$N(1; 0)$" },
          { key: "D", text: "$Q(1; 1)$" }
        ],
        correctKey: "B",
        explanation: "Thay tọa độ các điểm vào biểu thức $2x + y$:\n- Với $M(1; -2)$: $2(1) + (-2) = 0 < 1$ (thỏa mãn).\n- Với $P(2; -2)$: $2(2) + (-2) = 2 \\not< 1$.\n- Với $N(1; 0)$: $2(1) + 0 = 2 \\not< 1$.\n- Với $Q(1; 1)$: $2(1) + 1 = 3 \\not< 1$.",
        topic: "Miền nghiệm bất phương trình bậc nhất hai ẩn",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de4-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 5x + 4 = 0$\". Mệnh đề nào dưới đây đúng?",
        options: [
          { key: "A", text: "$P(1)$" },
          { key: "B", text: "$P(-1)$" },
          { key: "C", text: "$P(-5)$" },
          { key: "D", text: "$P(2)$" }
        ],
        correctKey: "A",
        explanation: "Thay $x = 1$ vào phương trình ta được $1^2 - 5(1) + 4 = 0$ (đúng). Do đó $P(1)$ là mệnh đề đúng.",
        topic: "Mệnh đề chứa biến",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de4-q13",
        type: "true_false",
        index: 13,
        stem: "Cho hai tập hợp: $A = \\{-3; -1; 0; 2\\}$ và $B = \\{-2; -1; 2; 4\\}$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Tập hợp $A$ có 4 phần tử.", isCorrect: true },
          { key: "b", text: "Tập hợp $X = \\{-1; 2\\}$ là một tập hợp con của tập hợp $A$.", isCorrect: true },
          { key: "c", text: "$A \\cap B = \\{-2; 2\\}$.", isCorrect: false },
          { key: "d", text: "$B \\setminus A = \\{-2; 2\\}$.", isCorrect: false }
        ],
        explanation: "(a) Đúng. Tập hợp $A$ có đúng 4 phần tử là $-3, -1, 0, 2$.\n(b) Đúng. Cả hai phần tử $-1$ và $2$ đều thuộc $A$ nên $X \\subset A$.\n(c) Sai. Các phần tử chung của $A$ và $B$ là $-1$ và $2$, do đó $A \\cap B = \\{-1; 2\\}$.\n(d) Sai. Các phần tử thuộc $B$ mà không thuộc $A$ là $-2$ và $4$, do đó $B \\setminus A = \\{-2; 4\\}$.",
        topic: "Các phép toán trên tập hợp",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de4-q14",
        type: "true_false",
        index: 14,
        stem: "Cho miền được gạch chéo trong hình vẽ biểu diễn miền nghiệm của hệ bất phương trình $(I)$ gồm các bất phương trình giới hạn bởi hai trục tọa độ $Ox, Oy$ và đường thẳng $d$ đi qua $(0; 2)$ và $(2; 0)$. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Đường thẳng $d$ đi qua điểm có tọa độ $(0; 2)$.", isCorrect: true },
          { key: "b", text: "Các điểm thuộc miền nghiệm của hệ bất phương trình $(I)$ đều có hoành độ không âm.", isCorrect: true },
          { key: "c", text: "Miền nghiệm của hệ bất phương trình $(I)$ chứa điểm $M(1; -1)$.", isCorrect: false },
          { key: "d", text: "Miền nghiệm của hệ bất phương trình $(I)$ là miền tam giác.", isCorrect: true }
        ],
        explanation: "(a) Đúng. Theo hình vẽ đề bài, đường thẳng $d$ cắt trục tung tại điểm $(0; 2)$.\n(b) Đúng. Miền nghiệm nằm ở nửa mặt phẳng bên phải trục tung, thỏa mãn $x \\ge 0$.\n(c) Sai. Điểm $M(1; -1)$ có tung độ $y = -1 < 0$ nằm ngoài miền nghiệm.\n(d) Đúng. Miền nghiệm là miền tam giác giới hạn bởi hai trục tọa độ và đường thẳng $d$.",
        topic: "Biểu diễn miền nghiệm của hệ bất phương trình",
        difficulty: "TH",
        svgDiagram: `<svg viewBox="0 0 320 280" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl bg-slate-900/90 border border-slate-700/70 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatch_c14" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#38bdf8" stroke-width="1.5" />
    </pattern>
    <marker id="arr_axis_c14" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
    </marker>
  </defs>

  <!-- Miền tam giác gạch chéo nghiệm OAB (tỉ lệ 1:1, OA = OB = 100px) -->
  <polygon points="90,200 190,200 90,100" fill="url(#hatch_c14)" fill-opacity="0.8" stroke="#38bdf8" stroke-width="2" />

  <!-- Trục tọa độ Ox, Oy (đơn vị trực chuẩn 1:1, mỗi đơn vị = 50px) -->
  <line x1="30" y1="200" x2="265" y2="200" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_axis_c14)" />
  <text x="268" y="204" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">x</text>

  <line x1="90" y1="245" x2="90" y2="35" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_axis_c14)" />
  <text x="96" y="32" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">y</text>

  <!-- Gốc tọa độ O -->
  <text x="74" y="216" fill="#94a3b8" font-size="13" font-weight="bold">O</text>

  <!-- Đường thẳng d đi qua (0; 2) và (2; 0) kéo dài -->
  <line x1="45" y1="55" x2="235" y2="245" stroke="#f43f5e" stroke-width="2" />
  <text x="240" y="250" fill="#f43f5e" font-size="14" font-style="italic" font-weight="bold">d</text>

  <!-- Điểm và số 2 trên trục Oy -->
  <circle cx="90" cy="100" r="3.5" fill="#f8fafc" />
  <text x="74" y="105" fill="#f8fafc" font-size="13" font-weight="bold">2</text>

  <!-- Điểm và số 2 trên trục Ox -->
  <circle cx="190" cy="200" r="3.5" fill="#f8fafc" />
  <text x="187" y="218" fill="#f8fafc" font-size="13" font-weight="bold">2</text>
</svg>`
      },
      {
        id: "t10-gk1-de4-q15",
        type: "true_false",
        index: 15,
        stem: "Câu lạc bộ thể dục thể thao của trường có 30 học sinh yêu thích môn bóng đá, 25 học sinh yêu thích môn bóng bàn, 20 học sinh yêu thích môn cầu lông, 15 học sinh yêu thích cả hai môn bóng đá và bóng bàn, 12 học sinh yêu thích cả hai môn bóng bàn và cầu lông, 10 học sinh yêu thích cả hai môn bóng đá và cầu lông, 5 học sinh yêu thích cả ba môn bóng đá, bóng bàn và cầu lông. Gọi $m, n, p$ lần lượt là số học sinh chỉ thích một môn bóng đá, bóng bàn, cầu lông. Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Số học sinh chỉ thích môn bóng đá là $m = 10$.", isCorrect: true },
          { key: "b", text: "Số học sinh chỉ thích môn bóng bàn là $n = 3$.", isCorrect: true },
          { key: "c", text: "Số học sinh chỉ thích môn cầu lông là $p = 5$.", isCorrect: false },
          { key: "d", text: "Tổng số học sinh chỉ thích đúng một trong ba môn thể thao trên là $S = m + n + p = 16$.", isCorrect: true }
        ],
        explanation: "Sử dụng biểu đồ Venn ba tập hợp:\n- Số học sinh chỉ thích bóng đá và bóng bàn: $15 - 5 = 10$.\n- Số học sinh chỉ thích bóng đá và cầu lông: $10 - 5 = 5$.\n- Số học sinh chỉ thích bóng bàn và cầu lông: $12 - 5 = 7$.\n(a) Đúng. Số học sinh chỉ thích bóng đá là: $m = 30 - (10 + 5 + 5) = 10$.\n(b) Đúng. Số học sinh chỉ thích bóng bàn là: $n = 25 - (10 + 7 + 5) = 3$.\n(c) Sai. Số học sinh chỉ thích cầu lông là: $p = 20 - (5 + 7 + 5) = 3$.\n(d) Đúng. Tổng số học sinh chỉ thích một môn là: $S = m + n + p = 10 + 3 + 3 = 16$.",
        topic: "Ứng dụng biểu đồ Venn trong bài toán thực tế",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-de4-q16",
        type: "true_false",
        index: 16,
        stem: "Một xưởng sản xuất bàn và ghế. Một chiếc bàn cần 1,5 giờ lắp ráp và 1 giờ hoàn thiện; một chiếc ghế cần 1 giờ lắp ráp và 2 giờ hoàn thiện. Bộ phận lắp ráp có 3 nhân công, bộ phận hoàn thiện có 4 nhân công. Mỗi công nhân làm việc không quá 8 tiếng mỗi ngày. Thị trường luôn tiêu thụ hết sản phẩm của xưởng và lượng ghế tiêu thụ không vượt quá 3,5 lần số bàn. Giả sử trong một ngày xưởng sản xuất $x$ chiếc bàn và $y$ chiếc ghế ($x, y \\ge 0$). Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Tổng thời gian làm việc tối đa của bộ phận lắp ráp là 24 giờ và bộ phận hoàn thiện là 32 giờ.", isCorrect: true },
          { key: "b", text: "Hệ bất phương trình biểu thị các điều kiện của bài toán là $\\begin{cases} 1{,}5x + y \\le 24 \\\\ x + 2y \\le 32 \\\\ y \\le 3{,}5x \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.", isCorrect: true },
          { key: "c", text: "Điểm có tọa độ $(8; 12)$ thuộc miền nghiệm của hệ bất phương trình trên.", isCorrect: true },
          { key: "d", text: "Nếu mỗi chiếc bàn lãi 600 nghìn đồng và mỗi chiếc ghế lãi 450 nghìn đồng thì xưởng thu tiền lãi cao nhất khi chỉ sản xuất 16 chiếc bàn và 0 chiếc ghế.", isCorrect: false }
        ],
        explanation: "(a) Đúng. Bộ phận lắp ráp: $3 \\times 8 = 24$ giờ; hoàn thiện: $4 \\times 8 = 32$ giờ.\n(b) Đúng. Điều kiện thời gian lắp ráp: $1{,}5x + y \\le 24$; hoàn thiện: $x + 2y \\le 32$; tỉ lệ: $y \\le 3{,}5x$; số lượng $x, y \\ge 0$.\n(c) Đúng. Thay $(8; 12)$ vào hệ: $1{,}5(8) + 12 = 24 \\le 24$; $8 + 2(12) = 32 \\le 32$; $12 \\le 3{,}5(8) = 28$; $8 \\ge 0, 12 \\ge 0$ (thỏa mãn tất cả).\n(d) Sai. Hàm tiền lãi: $F(x, y) = 600x + 450y$ (nghìn đồng).\n- Tại $(16; 0)$: $F = 600(16) = 9600$ nghìn đồng.\n- Tại $(8; 12)$: $F = 600(8) + 450(12) = 4800 + 5400 = 10200$ nghìn đồng.\nDo $10200 > 9600$, sản xuất 8 bàn và 12 ghế đem lại lợi nhuận cao hơn phương án chỉ làm 16 bàn.",
        topic: "Quy hoạch tuyến tính thực tế",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-de4-q17",
        type: "short_answer",
        index: 17,
        stem: "Cho hai tập hợp $A = (-3; 2]$ và $B = [-1; +\\infty)$. Khi đó tập hợp $A \\cap B$ có bao nhiêu phần tử là số nguyên?",
        correctAnswer: "4",
        acceptableAnswers: ["4", "bốn"],
        explanation: "Ta có: $A \\cap B = (-3; 2] \\cap [-1; +\\infty) = [-1; 2]$.\nCác số nguyên thuộc đoạn $[-1; 2]$ gồm: $-1, 0, 1, 2$.\nVậy có tất cả 4 phần tử là số nguyên.",
        topic: "Giao của hai tập hợp số",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de4-q18",
        type: "short_answer",
        index: 18,
        stem: "Một cửa hàng bán hai loại bánh: Bánh kem loại A giá 350.000 đồng/cái và bánh kem loại B giá 250.000 đồng/cái. Cửa hàng cần đạt được tổng doanh thu ít nhất là 7.000.000 đồng trong tuần này. Gọi $x, y$ lần lượt là số lượng bánh kem loại A và loại B đã bán được. Bất phương trình bậc nhất hai ẩn $x$ và $y$ thể hiện điều kiện về kinh doanh tối thiểu của cửa hàng có dạng $mx + 5y \\ge n$. Tính giá trị của biểu thức: $T = 2n - m$.",
        correctAnswer: "273",
        acceptableAnswers: ["273"],
        explanation: "Tổng doanh thu bán bánh của cửa hàng là: $350000x + 250000y$ (đồng).\nTheo yêu cầu, doanh thu ít nhất 7.000.000 đồng nên ta có bất phương trình:\n$350000x + 250000y \\ge 7000000$.\nChia cả hai vế cho 50.000, ta được:\n$7x + 5y \\ge 140$.\nĐồng nhất với dạng $mx + 5y \\ge n$, suy ra $m = 7$ và $n = 140$.\nGiá trị của biểu thức $T = 2n - m = 2(140) - 7 = 280 - 7 = 273$.",
        topic: "Ứng dụng bất phương trình bậc nhất hai ẩn",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de4-q19",
        type: "short_answer",
        index: 19,
        stem: "Cho $\\sin \\alpha = \\frac{\\sqrt{2}}{5}$ và $\\alpha \\in (0^\\circ; 90^\\circ)$. Khi đó $\\cos \\alpha = \\frac{\\sqrt{a}}{b}$ với $a, b \\in \\mathbb{Z}$ và $a$ là số nguyên tố. Tính giá trị của biểu thức $a - 2b$.",
        correctAnswer: "13",
        acceptableAnswers: ["13"],
        explanation: "Vì $0^\\circ < \\alpha < 90^\\circ$ nên $\\cos \\alpha > 0$.\nÁp dụng hệ thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, ta có:\n$\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\left(\\frac{\\sqrt{2}}{5}\\right)^2 = 1 - \\frac{2}{25} = \\frac{23}{25}$.\nSuy ra $\\cos \\alpha = \\frac{\\sqrt{23}}{5}$.\nDo $a, b \\in \\mathbb{Z}$ và $a$ là số nguyên tố nên $a = 23$ và $b = 5$.\nVậy $a - 2b = 23 - 2(5) = 23 - 10 = 13$.",
        topic: "Giá trị lượng giác của một góc",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de4-q20",
        type: "short_answer",
        index: 20,
        stem: "Để đo khoảng cách từ vị trí $A$ trên bờ sông đến vị trí $C$ của con tàu bị mắc cạn gần một cù lao giữa sông, bạn Minh đi dọc bờ sông từ vị trí $A$ đến vị trí $B$ cách $A$ một khoảng bằng $60\\text{ m}$ và đo các góc $\\widehat{BAC} = 85^\\circ$, $\\widehat{ABC} = 45^\\circ$. Tính khoảng cách $AC$ theo đơn vị mét (làm tròn kết quả đến hàng đơn vị).",
        correctAnswer: "55",
        acceptableAnswers: ["55", "55m", "55 m"],
        explanation: "Trong tam giác $ABC$, số đo góc $\\widehat{ACB}$ là:\n$\\widehat{ACB} = 180^\\circ - (\\widehat{BAC} + \\widehat{ABC}) = 180^\\circ - (85^\\circ + 45^\\circ) = 50^\\circ$.\nÁp dụng định lí sin trong tam giác $ABC$, ta có:\n$\\frac{AC}{\\sin \\widehat{ABC}} = \\frac{AB}{\\sin \\widehat{ACB}} \\Rightarrow AC = \\frac{AB \\cdot \\sin 45^\\circ}{\\sin 50^\\circ} = \\frac{60 \\cdot \\sin 45^\\circ}{\\sin 50^\\circ} \\approx \\frac{42{,}4264}{0{,}7660} \\approx 55{,}38\\text{ m}$.\nLàm tròn kết quả đến hàng đơn vị ta được $AC \\approx 55\\text{ m}$.",
        topic: "Ứng dụng thực tế định lí sin giải tam giác",
        difficulty: "VD",
        svgDiagram: `<svg viewBox="0 0 380 230" class="w-full max-w-sm mx-auto my-3 select-none rounded-xl bg-slate-900/90 border border-slate-700/70 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr_dim_c20" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 8 5 L 0 8 z" fill="#94a3b8" />
    </marker>
  </defs>

  <!-- Tam giác ABC tô nền xanh tươi sáng -->
  <polygon points="80,170 240,170 94,30" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="2.2" />

  <!-- Cung góc BAC = 85 độ tại A(80, 170) -->
  <path d="M 115 170 A 35 35 0 0 0 83 135" fill="none" stroke="#f59e0b" stroke-width="2" />
  <text x="96" y="156" fill="#f59e0b" font-size="12" font-weight="bold">85°</text>

  <!-- Cung góc ABC = 45 độ tại B(240, 170) -->
  <path d="M 205 170 A 35 35 0 0 1 215 145" fill="none" stroke="#f59e0b" stroke-width="2" />
  <text x="186" y="162" fill="#f59e0b" font-size="12" font-weight="bold">45°</text>

  <!-- Các đỉnh A, B, C -->
  <circle cx="80" cy="170" r="4.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
  <text x="64" y="176" fill="#38bdf8" font-size="14" font-weight="bold">A</text>

  <circle cx="240" cy="170" r="4.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
  <text x="248" y="176" fill="#38bdf8" font-size="14" font-weight="bold">B</text>

  <circle cx="94" cy="30" r="4.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1.5" />
  <text x="94" y="20" fill="#f43f5e" font-size="14" font-weight="bold" text-anchor="middle">C</text>

  <!-- Kích thước bờ sông AB = 60 m -->
  <line x1="80" y1="195" x2="240" y2="195" stroke="#94a3b8" stroke-width="1.4" marker-start="url(#arr_dim_c20)" marker-end="url(#arr_dim_c20)" />
  <text x="160" y="212" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">60 m</text>
</svg>`
      },
      {
        id: "t10-gk1-de4-q21",
        type: "short_answer",
        index: 21,
        stem: "Cho hai tập hợp $A = [-4; 3)$ và $B = (-\\infty; 1]$. Khi đó tập hợp $A \\cap B$ có bao nhiêu phần tử là số nguyên?",
        correctAnswer: "6",
        acceptableAnswers: ["6", "sáu"],
        explanation: "Ta có: $A \\cap B = [-4; 3) \\cap (-\\infty; 1] = [-4; 1]$.\nCác số nguyên thuộc đoạn $[-4; 1]$ là: $-4, -3, -2, -1, 0, 1$.\nVậy có tất cả 6 phần tử là số nguyên.",
        topic: "Phép toán giao các tập hợp con của R",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de4-q22",
        type: "short_answer",
        index: 22,
        stem: "Câu lạc bộ thể thao trường THPT Nguyễn Trãi có 30 học sinh yêu thích bóng đá, 25 học sinh yêu thích bóng bàn, 20 học sinh yêu thích cầu lông; 15 học sinh thích cả bóng đá và bóng bàn; 12 học sinh thích cả bóng bàn và cầu lông; 10 học sinh thích cả bóng đá và cầu lông; 5 học sinh thích cả ba môn. Gọi $m, n, p$ lần lượt là số học sinh chỉ thích đúng một môn thể thao bóng đá, bóng bàn, cầu lông. Tính giá trị của tổng $S = m + n + p$.",
        correctAnswer: "16",
        acceptableAnswers: ["16", "mười sáu"],
        explanation: "Áp dụng biểu đồ Venn để xác định số học sinh cho từng phần riêng biệt:\n- Số học sinh chỉ thích đúng môn bóng đá là: $m = 30 - [(15 - 5) + (10 - 5) + 5] = 30 - (10 + 5 + 5) = 10$.\n- Số học sinh chỉ thích đúng môn bóng bàn là: $n = 25 - [(15 - 5) + (12 - 5) + 5] = 25 - (10 + 7 + 5) = 3$.\n- Số học sinh chỉ thích đúng môn cầu lông là: $p = 20 - [(10 - 5) + (12 - 5) + 5] = 20 - (5 + 7 + 5) = 3$.\nVậy tổng số học sinh chỉ thích một môn thể thao là: $S = m + n + p = 10 + 3 + 3 = 16$.",
        topic: "Bài toán đếm và tập hợp trong thực tế",
        difficulty: "VD"
      }
    ],
  },

  "t10-gk1-de5": {
    id: "t10-gk1-de5",
    title: "Đề Kiểm Tra Giữa Học Kỳ 1 - Toán 10 (Đề số 5)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "giua-ky-1",
    category: "LOP_10",
    subtitle: "Đề kiểm tra chính thức THPT Gia Bình Số 1 (Sở GD&ĐT Bắc Ninh) - Năm học 2025 - 2026",
    durationMinutes: 90,
    totalQuestions: 21,
    questions: [
      {
        id: "t10-gk1-de5-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Trong các câu sau, câu nào là mệnh đề Toán học?",
        options: [
          { key: "A", text: "Số 9 là một số hữu tỉ." },
          { key: "B", text: "Bạn học lớp mấy?" },
          { key: "C", text: "Các bạn đã làm bài tập chưa?" },
          { key: "D", text: "Bắc Ninh là một Tỉnh của nước Việt Nam." }
        ],
        correctKey: "A",
        explanation: "\"Số 9 là một số hữu tỉ\" là một khẳng định đúng về một đối tượng trong toán học ($9 = \\frac{9}{1} \\in \\mathbb{Q}$), vì vậy đây là mệnh đề toán học. B và C là câu nghi vấn, D là mệnh đề thuộc lĩnh vực địa lí.",
        topic: "Mệnh đề toán học",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Mệnh đề phủ định của mệnh đề: $P: \"\\exists x \\in \\mathbb{R}: x^2 - 1 > 0\"$ là",
        options: [
          { key: "A", text: "$\\overline{P}: \"\\forall x \\in \\mathbb{R}: x^2 - 1 \\ge 0\"$." },
          { key: "B", text: "$\\overline{P}: \"\\forall x \\in \\mathbb{R}: x^2 - 1 > 0\"$." },
          { key: "C", text: "$\\overline{P}: \"\\forall x \\in \\mathbb{R}: x^2 - 1 \\le 0\"$." },
          { key: "D", text: "$\\overline{P}: \"\\exists x \\in \\mathbb{R}: x^2 - 1 < 0\"$." }
        ],
        correctKey: "C",
        explanation: "Phủ định của lượng từ $\\exists$ là $\\forall$, và phủ định của bất đẳng thức $> 0$ là $\\le 0$. Do đó mệnh đề phủ định là: $\\overline{P}: \"\\forall x \\in \\mathbb{R}: x^2 - 1 \\le 0\"$.",
        topic: "Mệnh đề phủ định",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Cách phát biểu nào sau đây không dùng để phát biểu định lí toán học dưới dạng $A \\Rightarrow B$?",
        options: [
          { key: "A", text: "Nếu $A$ thì $B$." },
          { key: "B", text: "$A$ kéo theo $B$." },
          { key: "C", text: "$A$ là điều kiện đủ để có $B$." },
          { key: "D", text: "$A$ là điều kiện cần để có $B$." }
        ],
        correctKey: "D",
        explanation: "Trong mệnh đề kéo theo $A \\Rightarrow B$, $A$ được gọi là giả thiết (điều kiện đủ để có $B$), còn $B$ được gọi là kết luận (điều kiện cần để có $A$). Do đó câu \"$A$ là điều kiện cần để có $B$\" là không dùng để phát biểu định lí.",
        topic: "Điều kiện cần và đủ",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Tập hợp $A = \\{x \\in \\mathbb{R} \\mid -1 < x \\le 3\\}$ là tập nào sau đây?",
        options: [
          { key: "A", text: "$\\{0; 1; 2; 3\\}$." },
          { key: "B", text: "$(-1; 3]$." },
          { key: "C", text: "$(-1; 3)$." },
          { key: "D", text: "$[-1; 3)$." }
        ],
        correctKey: "B",
        explanation: "Theo định nghĩa về các tập con của $\\mathbb{R}$, tập hợp $\\{x \\in \\mathbb{R} \\mid -1 < x \\le 3\\}$ là nửa khoảng $(-1; 3]$.",
        topic: "Các tập con của số thực",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Cho hai tập hợp $A = \\{x \\in \\mathbb{N} \\mid x \\le 4\\}$ và $B = \\left\\{-1; -\\frac{1}{2}; 0; 1; 3\\right\\}$. Mệnh đề nào sau đây đúng?",
        options: [
          { key: "A", text: "$A \\setminus B = \\{2; 4\\}$." },
          { key: "B", text: "$A \\setminus B = \\left\\{-1; -\\frac{1}{2}\\right\\}$." },
          { key: "C", text: "$A \\setminus B = \\{4\\}$." },
          { key: "D", text: "$A \\setminus B = \\{0; 1; 3\\}$." }
        ],
        correctKey: "A",
        explanation: "Ta có $A = \\{0; 1; 2; 3; 4\\}$. Hiệu $A \\setminus B$ là tập hợp gồm các phần tử thuộc $A$ mà không thuộc $B$. Vậy $A \\setminus B = \\{2; 4\\}$.",
        topic: "Hiệu của hai tập hợp",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid x + 3 \\le 4 + 2x\\}$ và $B = \\{x \\in \\mathbb{R} \\mid 5x - 7 < 3x - 1\\}$. Có bao nhiêu số nguyên thuộc tập hợp $A \\cap B$?",
        options: [
          { key: "A", text: "3." },
          { key: "B", text: "4." },
          { key: "C", text: "5." },
          { key: "D", text: "2." }
        ],
        correctKey: "B",
        explanation: "Giải bất phương trình tìm tập hợp:\n+ $x + 3 \\le 4 + 2x \\Leftrightarrow 2x - x \\ge 3 - 4 \\Leftrightarrow x \\ge -1 \\Rightarrow A = [-1; +\\infty)$.\n+ $5x - 7 < 3x - 1 \\Leftrightarrow 2x < 6 \\Leftrightarrow x < 3 \\Rightarrow B = (-\\infty; 3)$.\nSuy ra $A \\cap B = [-1; 3)$.\nCác số nguyên thuộc $[-1; 3)$ là: $-1; 0; 1; 2$ (gồm 4 số nguyên).",
        topic: "Giao của hai tập hợp",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de5-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Phần không bị gạch chéo trong hình vẽ dưới đây (bao gồm cả đường thẳng $d$) là miền nghiệm của bất phương trình bậc nhất hai ẩn nào dưới đây?",
        options: [
          { key: "A", text: "$2x - y \\le 0$." },
          { key: "B", text: "$x + 2y \\le 0$." },
          { key: "C", text: "$2x + y \\le 0$." },
          { key: "D", text: "$2x + y < 0$." }
        ],
        correctKey: "C",
        explanation: "Đường thẳng $d$ đi qua gốc tọa độ $O(0; 0)$ và điểm $(-1; 2)$ nên có phương trình $2x + y = 0$. Vì miền nghiệm bao gồm cả đường thẳng $d$ nên lấy dấu $\\le$ hoặc $\\ge$. Lấy điểm $(-1; -1)$ thuộc phần không bị gạch chéo, thay vào: $2(-1) + (-1) = -3 \\le 0$ (thỏa mãn). Vậy miền nghiệm là $2x + y \\le 0$.",
        topic: "Miền nghiệm của bất phương trình bậc nhất hai ẩn",
        difficulty: "TH",
        svgDiagram: `<svg viewBox="0 0 320 280" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl bg-slate-900/90 border border-slate-700/70 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatch_de5_q7" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#38bdf8" stroke-width="1.3" />
    </pattern>
    <marker id="arr_de5_q7" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
    </marker>
  </defs>

  <!-- Vùng gạch chéo nửa mặt phẳng bị loại 2x + y > 0 -->
  <polygon points="90,20 300,20 300,260 210,260" fill="url(#hatch_de5_q7)" fill-opacity="0.85" />

  <!-- Hệ trục tọa độ chuẩn tỉ lệ 1:1, mỗi đơn vị = 40px, gốc O(150, 140) -->
  <line x1="30" y1="140" x2="280" y2="140" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_de5_q7)" />
  <text x="283" y="144" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">x</text>

  <line x1="150" y1="260" x2="150" y2="25" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_de5_q7)" />
  <text x="156" y="22" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">y</text>

  <!-- Gốc tọa độ O -->
  <text x="134" y="156" fill="#94a3b8" font-size="13" font-weight="bold">O</text>

  <!-- Vạch và số trên Ox: -2, -1, 1, 2 -->
  <line x1="70" y1="137" x2="70" y2="143" stroke="#64748b" stroke-width="1.2" />
  <text x="70" y="156" fill="#94a3b8" font-size="11" text-anchor="middle">-2</text>
  <line x1="110" y1="137" x2="110" y2="143" stroke="#64748b" stroke-width="1.2" />
  <text x="110" y="156" fill="#94a3b8" font-size="11" text-anchor="middle">-1</text>
  <line x1="190" y1="137" x2="190" y2="143" stroke="#64748b" stroke-width="1.2" />
  <text x="190" y="156" fill="#94a3b8" font-size="11" text-anchor="middle">1</text>
  <line x1="230" y1="137" x2="230" y2="143" stroke="#64748b" stroke-width="1.2" />
  <text x="230" y="156" fill="#94a3b8" font-size="11" text-anchor="middle">2</text>

  <!-- Vạch và số trên Oy: -2, -1, 1, 2 -->
  <line x1="147" y1="60" x2="153" y2="60" stroke="#64748b" stroke-width="1.2" />
  <text x="138" y="64" fill="#94a3b8" font-size="11" text-anchor="end">2</text>
  <line x1="147" y1="100" x2="153" y2="100" stroke="#64748b" stroke-width="1.2" />
  <text x="138" y="104" fill="#94a3b8" font-size="11" text-anchor="end">1</text>
  <line x1="147" y1="180" x2="153" y2="180" stroke="#64748b" stroke-width="1.2" />
  <text x="138" y="184" fill="#94a3b8" font-size="11" text-anchor="end">-1</text>
  <line x1="147" y1="220" x2="153" y2="220" stroke="#64748b" stroke-width="1.2" />
  <text x="138" y="224" fill="#94a3b8" font-size="11" text-anchor="end">-2</text>

  <!-- Đường thẳng d: 2x + y = 0 đi qua (0;0), (-1; 2)->(110,60), (1;-2)->(190,220) -->
  <line x1="90" y1="20" x2="210" y2="260" stroke="#f43f5e" stroke-width="2.2" />
  <text x="80" y="32" fill="#f43f5e" font-size="14" font-style="italic" font-weight="bold">d</text>

  <!-- Đường dóng nét đứt điểm (-1; 2) -->
  <line x1="110" y1="140" x2="110" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="110" y1="60" x2="150" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3" />
  <circle cx="110" cy="60" r="3" fill="#facc15" />
</svg>`
      },
      {
        id: "t10-gk1-de5-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Trong các điểm sau, điểm nào thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x + 3y - 2 \\ge 0 \\\\ 2x + y + 1 \\le 0 \\end{cases}$?",
        options: [
          { key: "A", text: "$M(0; 1)$." },
          { key: "B", text: "$N(-1; 1)$." },
          { key: "C", text: "$P(1; 3)$." },
          { key: "D", text: "$Q(-1; 0)$." }
        ],
        correctKey: "B",
        explanation: "Thay tọa độ $N(-1; 1)$ vào hệ:\n$\\begin{cases} -1 + 3(1) - 2 = 0 \\ge 0 \\\\ 2(-1) + 1 + 1 = 0 \\le 0 \\end{cases}$ (thỏa mãn cả hai bất phương trình).\nVậy điểm $N(-1; 1)$ thuộc miền nghiệm của hệ.",
        topic: "Hệ bất phương trình bậc nhất hai ẩn",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de5-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Cho $0^\\circ \\le x \\le 180^\\circ$. Chọn mệnh đề đúng trong các mệnh đề sau:",
        options: [
          { key: "A", text: "$\\sin x = -\\sin(180^\\circ - x)$." },
          { key: "B", text: "$\\tan x = \\tan(180^\\circ - x)$." },
          { key: "C", text: "$\\cot x = -\\cot(180^\\circ - x)$." },
          { key: "D", text: "$\\cos x = \\cos(180^\\circ - x)$." }
        ],
        correctKey: "C",
        explanation: "Hai góc $x$ và $180^\\circ - x$ là hai góc bù nhau, ta có: $\\sin(180^\\circ - x) = \\sin x$, $\\cos(180^\\circ - x) = -\\cos x$, $\\tan(180^\\circ - x) = -\\tan x$, $\\cot(180^\\circ - x) = -\\cot x \\Leftrightarrow \\cot x = -\\cot(180^\\circ - x)$.",
        topic: "Giá trị lượng giác của hai góc bù nhau",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Cho tam giác $ABC$. Chọn khẳng định sai trong các khẳng định sau:",
        options: [
          { key: "A", text: "$S = \\frac{1}{2} bc \\sin A$." },
          { key: "B", text: "$S = \\sqrt{p(p - a)(p - b)(p - c)}$." },
          { key: "C", text: "$\\frac{a}{\\sin A} = \\frac{1}{2R}$." },
          { key: "D", text: "$a^2 = b^2 + c^2 - 2bc \\cos A$." }
        ],
        correctKey: "C",
        explanation: "Theo định lí sin trong tam giác, ta có $\\frac{a}{\\sin A} = 2R$. Do đó khẳng định $\\frac{a}{\\sin A} = \\frac{1}{2R}$ là sai.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Cho các điểm phân biệt $A, B, C$. Đẳng thức nào sau đây đúng?",
        options: [
          { key: "A", text: "$\\vec{AB} = \\vec{AC} - \\vec{CB}$." },
          { key: "B", text: "$\\vec{AB} = \\vec{CA} - \\vec{CB}$." },
          { key: "C", text: "$\\vec{AB} = \\vec{BC} + \\vec{CA}$." },
          { key: "D", text: "$\\vec{AB} = \\vec{AC} + \\vec{CB}$." }
        ],
        correctKey: "D",
        explanation: "Theo quy tắc ba điểm đối với phép cộng vectơ: $\\vec{AC} + \\vec{CB} = \\vec{AB}$.",
        topic: "Các phép toán vectơ",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Chọn phát biểu đúng trong các phát biểu sau:",
        options: [
          { key: "A", text: "Hai vectơ được gọi là cùng phương khi và chỉ khi giá của chúng song song với nhau." },
          { key: "B", text: "Hai vectơ được gọi là bằng nhau khi chúng cùng phương và cùng độ dài." },
          { key: "C", text: "Vectơ – không là vectơ có điểm đầu và điểm cuối trùng nhau, kí hiệu là $\\vec{0}$." },
          { key: "D", text: "Vectơ $\\vec{0}$ cùng phương, ngược hướng với mọi vectơ." }
        ],
        correctKey: "C",
        explanation: "Theo định nghĩa, vectơ-không là vectơ có điểm đầu và điểm cuối trùng nhau, kí hiệu là $\\vec{0}$. Khẳng định A thiếu trường hợp trùng nhau; khẳng định B thiếu điều kiện cùng hướng; khẳng định D sai vì $\\vec{0}$ cùng hướng với mọi vectơ.",
        topic: "Khái niệm vectơ",
        difficulty: "NB"
      },
      {
        id: "t10-gk1-de5-q13",
        type: "true_false",
        index: 13,
        stem: "Cho tam giác đều $ABC$ có cạnh bằng 5 và $M$ là trung điểm của $BC$ (tham khảo hình vẽ bên).",
        subQuestions: [
          { key: "a", text: "$\\vec{AB} + \\vec{BC} = \\vec{CA}$.", isCorrect: false },
          { key: "b", text: "$\\vec{AC} - \\vec{AB} = \\vec{BC}$.", isCorrect: true },
          { key: "c", text: "$|\\vec{AB} - \\vec{AC}| = 0$.", isCorrect: false },
          { key: "d", text: "$|\\vec{CM} + \\vec{AC}| = \\frac{5\\sqrt{2}}{3}$.", isCorrect: false }
        ],
        explanation: "(a) Sai. Theo quy tắc ba điểm: $\\vec{AB} + \\vec{BC} = \\vec{AC} = -\\vec{CA} \\ne \\vec{CA}$.\n(b) Đúng. Theo quy tắc trừ hai vectơ chung gốc: $\\vec{AC} - \\vec{AB} = \\vec{BC}$.\n(c) Sai. $|\\vec{AB} - \\vec{AC}| = |\\vec{CB}| = BC = 5 \\ne 0$.\n(d) Sai. Ta có $\\vec{CM} + \\vec{AC} = \\vec{AC} + \\vec{CM} = \\vec{AM}$. Tam giác $ABC$ đều cạnh bằng 5 nên độ dài đường trung tuyến $AM = \\frac{5\\sqrt{3}}{2} \\ne \\frac{5\\sqrt{2}}{3}$.",
        topic: "Tổng và hiệu của hai vectơ",
        difficulty: "TH",
        svgDiagram: `<svg viewBox="0 0 320 230" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl bg-slate-900/90 border border-slate-700/70 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Tam giác đều ABC -->
  <polygon points="160,35 70,190 250,190" fill="#38bdf8" fill-opacity="0.12" stroke="#38bdf8" stroke-width="2.2" />

  <!-- Đường trung tuyến AM -->
  <line x1="160" y1="35" x2="160" y2="190" stroke="#f43f5e" stroke-width="1.8" stroke-dasharray="4 3" />

  <!-- Góc vuông tại M -->
  <rect x="160" y="176" width="14" height="14" fill="none" stroke="#94a3b8" stroke-width="1.2" />

  <!-- Các điểm A, B, C, M -->
  <circle cx="160" cy="35" r="4.5" fill="#f8fafc" />
  <text x="160" y="24" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">A</text>

  <circle cx="70" cy="190" r="4.5" fill="#f8fafc" />
  <text x="54" y="196" fill="#f8fafc" font-size="14" font-weight="bold">B</text>

  <circle cx="250" cy="190" r="4.5" fill="#f8fafc" />
  <text x="258" y="196" fill="#f8fafc" font-size="14" font-weight="bold">C</text>

  <circle cx="160" cy="190" r="4" fill="#facc15" />
  <text x="160" y="210" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">M</text>

  <!-- Nhãn cạnh bên bằng 5 -->
  <text x="105" y="105" fill="#38bdf8" font-size="13" font-weight="bold">5</text>
</svg>`
      },
      {
        id: "t10-gk1-de5-q14",
        type: "true_false",
        index: 14,
        stem: "Trong một cuộc thi pha chế đồ uống gồm hai loại là $X$ và $Y$, mỗi đội chơi được sử dụng tối đa $24\\text{ g}$ hương liệu, $9$ cốc nước lọc và $210\\text{ g}$ đường. Để pha chế 1 cốc đồ uống loại $X$ cần 1 cốc nước lọc, $30\\text{ g}$ đường và $1\\text{ g}$ hương liệu. Để pha chế 1 cốc đồ uống loại $Y$ cần 1 cốc nước lọc, $10\\text{ g}$ đường và $4\\text{ g}$ hương liệu. Mỗi cốc đồ uống loại $X$ nhận được 6 điểm thưởng, mỗi cốc đồ uống loại $Y$ nhận được 8 điểm thưởng. Gọi $x, y$ lần lượt là số cốc đồ uống loại $X$, loại $Y$ mà đội chơi cần pha chế.",
        subQuestions: [
          {
            key: "a",
            text: "Điều kiện của $x, y$ là các số tự nhiên và thỏa mãn:\n$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 9 \\\\ 30x + 10y \\le 210 \\\\ x + 4y \\le 24 \\end{cases} \\quad (I)$",
            isCorrect: true
          },
          { key: "b", text: "Điểm $M(2; 1)$ thuộc miền nghiệm của hệ $(I)$.", isCorrect: true },
          { key: "c", text: "Miền nghiệm của hệ $(I)$ là miền tứ giác.", isCorrect: false },
          { key: "d", text: "Để đạt được số điểm thưởng cao nhất, đội chơi cần pha chế 6 cốc đồ uống loại $X$ và 3 cốc đồ uống loại $Y$.", isCorrect: false }
        ],
        explanation: "(a) Đúng. Số lượng nước lọc: $x + y \\le 9$; lượng đường: $30x + 10y \\le 210$; lượng hương liệu: $x + 4y \\le 24$ và số cốc $x, y \\ge 0, x, y \\in \\mathbb{N}$.\n(b) Đúng. Thay $x = 2, y = 1$ vào hệ: $2 + 1 = 3 \\le 9$; $30(2) + 10(1) = 70 \\le 210$; $2 + 4(1) = 6 \\le 24$ (thỏa mãn).\n(c) Sai. Miền nghiệm của hệ $(I)$ là miền ngũ giác giới hạn bởi 5 đường biên, có 5 đỉnh: $(0; 0), (7; 0), (6; 3), (4; 5), (0; 6)$.\n(d) Sai. Số điểm thưởng nhận được là $F(x, y) = 6x + 8y$.\n- Tại $(6; 3)$: $F = 6(6) + 8(3) = 36 + 24 = 60$ điểm.\n- Tại $(4; 5)$: $F = 6(4) + 8(5) = 24 + 40 = 64$ điểm.\nVì $64 > 60$ nên pha chế 4 cốc loại $X$ và 5 cốc loại $Y$ mới đạt điểm thưởng cao nhất.",
        topic: "Ứng dụng hệ bất phương trình bậc nhất hai ẩn",
        difficulty: "VD"
      },
      {
        id: "t10-gk1-de5-q15",
        type: "short_answer",
        index: 15,
        stem: "Lớp 10A có 40 học sinh. Trong danh sách đăng kí tham gia tiết mục múa và tiết mục hát chào mừng ngày nhà giáo Việt Nam 20/11 của lớp có 20 học sinh tham gia tiết mục múa, 5 học sinh tham gia cả hai tiết mục. Hỏi lớp 10A có bao nhiêu học sinh tham gia tiết mục hát? Biết rằng lớp có 13 học sinh không tham gia tiết mục nào.",
        correctAnswer: "12",
        acceptableAnswers: ["12", "mười hai"],
        explanation: "Số học sinh tham gia ít nhất một tiết mục (múa hoặc hát) là:\n$40 - 13 = 27$ (học sinh).\nÁp dụng công thức số phần tử của hợp hai tập hợp:\n$|M \\cup H| = |M| + |H| - |M \\cap H|$\n$\\Leftrightarrow 27 = 20 + |H| - 5 \\Leftrightarrow 27 = 15 + |H| \\Leftrightarrow |H| = 12$.\nVậy có 12 học sinh tham gia tiết mục hát.",
        topic: "Ứng dụng tập hợp trong thực tế",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de5-q16",
        type: "short_answer",
        index: 16,
        stem: "Miền nghiệm của bất phương trình $ax - y < b$ được biểu diễn bởi nửa mặt phẳng không bị gạch (không kể bờ $d$) được minh họa bằng hình vẽ sau. Khi đó $a + b$ bằng bao nhiêu?",
        correctAnswer: "5",
        acceptableAnswers: ["5", "năm"],
        explanation: "Bờ của miền nghiệm là đường thẳng $d: ax - y = b \\Leftrightarrow y = ax - b$.\nTừ hình vẽ, đường thẳng $d$ cắt trục tung $Oy$ tại điểm $(0; -3)$, suy ra: $-b = -3 \\Leftrightarrow b = 3$.\nĐường thẳng $d$ đi qua điểm $(1{,}5; 0)$ trên trục hoành, thay vào: $a(1{,}5) - 3 = 0 \\Leftrightarrow 1{,}5a = 3 \\Leftrightarrow a = 2$.\nKiểm tra miền không bị gạch chứa gốc tọa độ $O(0; 0)$: $2(0) - 0 = 0 < 3$ (thỏa mãn bất phương trình).\nVậy $a = 2, b = 3 \\Rightarrow a + b = 2 + 3 = 5$.",
        topic: "Xác định bất phương trình từ miền nghiệm",
        difficulty: "TH",
        svgDiagram: `<svg viewBox="0 0 320 280" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl bg-slate-900/90 border border-slate-700/70 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatch_de5_q16" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#38bdf8" stroke-width="1.3" />
    </pattern>
    <marker id="arr_de5_q16" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
    </marker>
  </defs>

  <!-- Nửa mặt phẳng bị gạch chéo ax - y > b -->
  <polygon points="175,20 290,20 290,260 70,260" fill="url(#hatch_de5_q16)" fill-opacity="0.85" />

  <!-- Hệ trục tọa độ tỉ lệ 1:1, mỗi đơn vị = 35px, gốc O(130, 110) -->
  <line x1="30" y1="110" x2="280" y2="110" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_de5_q16)" />
  <text x="283" y="114" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">x</text>

  <line x1="130" y1="260" x2="130" y2="25" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_de5_q16)" />
  <text x="136" y="22" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">y</text>

  <!-- Gốc O -->
  <text x="114" y="126" fill="#94a3b8" font-size="13" font-weight="bold">O</text>

  <!-- Điểm (0; -3) trên trục tung -> y = 110 + 3*35 = 215 -->
  <circle cx="130" cy="215" r="3.5" fill="#f8fafc" />
  <text x="112" y="219" fill="#f8fafc" font-size="12" font-weight="bold">-3</text>

  <!-- Đường thẳng d: 2x - y = 3 (nét đứt vì không kể bờ d) -->
  <line x1="175" y1="20" x2="70" y2="260" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 4" />
  <text x="180" y="32" fill="#f43f5e" font-size="14" font-style="italic" font-weight="bold">d</text>
</svg>`
      },
      {
        id: "t10-gk1-de5-q17",
        type: "short_answer",
        index: 17,
        stem: "Cho $x + y = 180^\\circ$, $\\sin x = 0{,}81$. Tính $\\sin y$.",
        correctAnswer: "0.81",
        acceptableAnswers: ["0.81", "0,81"],
        explanation: "Vì $x + y = 180^\\circ$ nên hai góc $x$ và $y$ là hai góc bù nhau.\nTheo tính chất giá trị lượng giác của hai góc bù nhau, ta có:\n$\\sin y = \\sin(180^\\circ - x) = \\sin x = 0{,}81$.",
        topic: "Giá trị lượng giác của góc bù nhau",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de5-q18",
        type: "short_answer",
        index: 18,
        stem: "Tỉnh A và B bị ngăn cách nhau bởi một ngọn núi. Để đi từ tỉnh A đến tỉnh B, người ta đi theo lộ trình từ tỉnh A qua tỉnh C, rồi từ tỉnh C đến tỉnh B. Biết rằng lộ trình từ A đến C dài 70km, từ C đến B dài 100km, và hai con đường tạo với nhau góc $60^\\circ$. Để thuận lợi cho việc đi lại, người ta dự kiến làm một đường hầm xuyên núi để đi từ tỉnh A đến tỉnh B (tham khảo hình vẽ bên). Hỏi nếu đi theo đường hầm thì quãng đường đó ngắn hơn bao nhiêu km so với quãng đường đi từ A qua C và đến B (làm tròn đến hàng phần chục)?",
        correctAnswer: "81.1",
        acceptableAnswers: ["81.1", "81,1", "81.1 km", "81,1 km"],
        explanation: "Áp dụng định lí côsin trong tam giác $ABC$, khoảng cách đường hầm $AB$ là:\n$AB^2 = CA^2 + CB^2 - 2CA \\cdot CB \\cdot \\cos C = 70^2 + 100^2 - 2 \\cdot 70 \\cdot 100 \\cdot \\cos 60^\\circ$\n$= 4900 + 10000 - 14000 \\cdot 0{,}5 = 7900$\n$\\Rightarrow AB = \\sqrt{7900} \\approx 88{,}8819\\text{ km}$.\nQuãng đường đi vòng từ A qua C đến B dài:\n$s_1 = CA + CB = 70 + 100 = 170\\text{ km}$.\nQuãng đường đi theo đường hầm ngắn hơn là:\n$\\Delta s = 170 - 88{,}8819 = 81{,}1181\\text{ km} \\approx 81{,}1\\text{ km}$.",
        topic: "Ứng dụng thực tế hệ thức lượng tam giác",
        difficulty: "VD",
        svgDiagram: `<svg viewBox="0 0 380 230" class="w-full max-w-sm mx-auto my-3 select-none rounded-xl bg-slate-900/90 border border-slate-700/70 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <!-- Ngọn núi cách điệu giữa A và B -->
  <path d="M 130 175 Q 185 85 240 175 Z" fill="#312e81" fill-opacity="0.6" stroke="#4338ca" stroke-width="1.5" />
  <path d="M 160 175 Q 200 65 260 175 Z" fill="#1e1b4b" fill-opacity="0.7" stroke="#3730a3" stroke-width="1.5" />

  <!-- Lộ trình CA và CB -->
  <line x1="70" y1="175" x2="140" y2="55" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="70" y1="175" x2="280" y2="175" stroke="#38bdf8" stroke-width="2.5" />

  <!-- Đường hầm xuyên núi AB (nét đứt đỏ nổi bật) -->
  <line x1="140" y1="55" x2="280" y2="175" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6 4" />

  <!-- Cung góc 60 độ tại C -->
  <path d="M 98 175 A 28 28 0 0 0 84 151" fill="none" stroke="#f59e0b" stroke-width="2" />
  <text x="100" y="162" fill="#f59e0b" font-size="12" font-weight="bold">60°</text>

  <!-- Các đỉnh A, B, C -->
  <circle cx="140" cy="55" r="4.5" fill="#f8fafc" />
  <text x="140" y="42" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">A</text>

  <circle cx="280" cy="175" r="4.5" fill="#f8fafc" />
  <text x="290" y="180" fill="#f8fafc" font-size="14" font-weight="bold">B</text>

  <circle cx="70" cy="175" r="4.5" fill="#f8fafc" />
  <text x="56" y="180" fill="#f8fafc" font-size="14" font-weight="bold">C</text>

  <!-- Nhãn độ dài -->
  <text x="92" y="105" fill="#38bdf8" font-size="12" font-weight="bold" transform="rotate(-60 92 105)">70 km</text>
  <text x="175" y="195" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">100 km</text>
  <text x="225" y="105" fill="#f43f5e" font-size="12" font-weight="bold">Đường hầm AB</text>
</svg>`
      },
      {
        id: "t10-gk1-de5-q19",
        type: "short_answer",
        index: 19,
        stem: "Phần IV. Tự luận - Câu 19: Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid 2x + 5 \\ge 7\\}$ và $B = \\{x \\in \\mathbb{R} \\mid -5 \\le x < 5\\}$.\na) Viết các tập $A, B$ dưới dạng khoảng, nửa khoảng, đoạn, rồi biểu diễn chúng trên trục số.\nb) Xác định các tập $A \\cap B, A \\cup B$.",
        correctAnswer: "[1;5)",
        acceptableAnswers: ["[1;5)", "[1; 5)", "[1;5) và [-5;+vô cùng)"],
        explanation: "Lời giải sơ lược chi tiết (theo barem chấm THPT Gia Bình 1):\na) Ta có:\n+ $2x + 5 \\ge 7 \\Leftrightarrow 2x \\ge 2 \\Leftrightarrow x \\ge 1 \\Rightarrow A = [1; +\\infty)$.\n+ $B = [-5; 5)$.\nBiểu diễn trên trục số:\n- Tập $A = [1; +\\infty)$: lấy từ điểm 1 sang phải (dùng móc vuông [), gạch bỏ phần bên trái điểm 1.\n- Tập $B = [-5; 5)$: lấy từ điểm -5 đến trước điểm 5 (dùng [ tại -5 và ) tại 5), gạch bỏ phần bên ngoài đoạn.\nb) Xác định các tập hợp:\n+ $A \\cap B = [1; +\\infty) \\cap [-5; 5) = [1; 5)$.\n+ $A \\cup B = [1; +\\infty) \\cup [-5; 5) = [-5; +\\infty)$.",
        topic: "Tập hợp và các phép toán trên tập hợp (Tự luận)",
        difficulty: "TH"
      },
      {
        id: "t10-gk1-de5-q20",
        type: "short_answer",
        index: 20,
        stem: "Phần IV. Tự luận - Câu 20: Biểu diễn miền nghiệm của bất phương trình $x - 2y \\le 2$ trên mặt phẳng tọa độ $Oxy$.",
        correctAnswer: "x-2y<=2",
        acceptableAnswers: ["x-2y<=2", "Oxy", "thỏa mãn"],
        explanation: "Lời giải sơ lược chi tiết (theo barem chấm THPT Gia Bình 1):\n1. Vẽ đường thẳng $d: x - 2y = 2$ đi qua hai điểm $A(2; 0)$ và $B(0; -1)$.\n2. Thay tọa độ gốc $O(0; 0)$ vào vế trái của bất phương trình:\nTa thấy $0 - 2(0) = 0 < 2$ (thỏa mãn).\nDo đó gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.\n3. Kết luận: Miền nghiệm của bất phương trình $x - 2y \\le 2$ là nửa mặt phẳng có bờ là đường thẳng $d$ chứa gốc tọa độ $O$ (phần không bị gạch, tính cả đường thẳng $d$).",
        topic: "Biểu diễn miền nghiệm bất phương trình bậc nhất hai ẩn (Tự luận)",
        difficulty: "TH",
        svgDiagram: `<svg viewBox="0 0 340 260" class="w-full max-w-xs sm:max-w-sm mx-auto my-3 select-none rounded-xl bg-slate-900/90 border border-slate-700/70 p-2 shadow-lg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatch_de5_q20" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#38bdf8" stroke-width="1.3" />
    </pattern>
    <marker id="arr_de5_q20" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
    </marker>
  </defs>

  <!-- Nửa mặt phẳng bị gạch x - 2y > 2 -->
  <polygon points="60,200 300,200 300,240 60,240" fill="url(#hatch_de5_q20)" fill-opacity="0.8" />
  <polygon points="60,200 300,80 300,240 60,240" fill="url(#hatch_de5_q20)" fill-opacity="0.8" />

  <!-- Hệ trục Oxy chuẩn 1:1, mỗi đơn vị = 40px, gốc O(140, 120) -->
  <line x1="30" y1="120" x2="300" y2="120" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_de5_q20)" />
  <text x="303" y="124" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">x</text>

  <line x1="140" y1="240" x2="140" y2="25" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arr_de5_q20)" />
  <text x="146" y="22" fill="#cbd5e1" font-size="14" font-style="italic" font-weight="bold">y</text>

  <!-- Gốc O -->
  <text x="124" y="136" fill="#94a3b8" font-size="13" font-weight="bold">O</text>

  <!-- Điểm A(2; 0) -> x = 140 + 80 = 220, y = 120 -->
  <circle cx="220" cy="120" r="3.5" fill="#f8fafc" />
  <text x="218" y="138" fill="#f8fafc" font-size="12" font-weight="bold">2</text>

  <!-- Điểm B(0; -1) -> x = 140, y = 120 + 40 = 160 -->
  <circle cx="140" cy="160" r="3.5" fill="#f8fafc" />
  <text x="124" y="164" fill="#f8fafc" font-size="12" font-weight="bold">-1</text>

  <!-- Đường thẳng d: x - 2y = 2 đi qua (2;0) và (0;-1) -->
  <line x1="40" y1="210" x2="300" y2="80" stroke="#f43f5e" stroke-width="2.2" />
  <text x="45" y="225" fill="#f43f5e" font-size="14" font-style="italic" font-weight="bold">d</text>
</svg>`
      },
      {
        id: "t10-gk1-de5-q21",
        type: "short_answer",
        index: 21,
        stem: "Phần IV. Tự luận - Câu 21:\na) Cho hình vuông $ABCD$ có cạnh bằng $a$. Tính $|\\vec{AB} + \\vec{AD}|$.\nb) Cho $0^\\circ < x < 180^\\circ$ và $\\cos x = -\\frac{3}{5}$. Tính giá trị của biểu thức:\n$$P = \\frac{\\tan^3 x + 2\\tan^2 x \\sin x - \\sin^3 x}{2\\tan^3 x \\cos^3 x}$$",
        correctAnswer: "-1/27",
        acceptableAnswers: ["-1/27", "-0.037", "-1/27 và a*căn(2)"],
        explanation: "Lời giải sơ lược chi tiết (theo barem chấm THPT Gia Bình 1):\na) Theo quy tắc hình bình hành (áp dụng cho hình vuông $ABCD$):\n$\\vec{AB} + \\vec{AD} = \\vec{AC}$.\nDo đó $|\\vec{AB} + \\vec{AD}| = |\\vec{AC}| = AC$.\nÁp dụng định lí Pythagore trong tam giác vuông $ABC$:\n$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{a^2 + a^2} = a\\sqrt{2}$.\nb) Do $0^\\circ < x < 180^\\circ$ nên $\\sin x > 0$.\nDo $\\cos x = -\\frac{3}{5} \\ne 0$ nên $\\tan x = \\frac{\\sin x}{\\cos x} \\ne 0$.\nTa có $\\frac{\\sin x}{\\tan x} = \\cos x$. Chia cả tử và mẫu của $P$ cho $\\tan^3 x$:\n$$P = \\frac{1 + 2\\frac{\\sin x}{\\tan x} - \\frac{\\sin^3 x}{\\tan^3 x}}{2\\cos^3 x} = \\frac{1 + 2\\cos x - \\cos^3 x}{2\\cos^3 x}$$\nThay $\\cos x = -\\frac{3}{5}$ vào biểu thức:\n$$P = \\frac{1 + 2\\left(-\\frac{3}{5}\\right) - \\left(-\\frac{3}{5}\\right)^3}{2\\left(-\\frac{3}{5}\\right)^3} = \\frac{1 - \\frac{6}{5} + \\frac{27}{125}}{2\\left(-\\frac{27}{125}\\right)} = \\frac{-\\frac{1}{5} + \\frac{27}{125}}{-\\frac{54}{125}} = \\frac{\\frac{2}{125}}{-\\frac{54}{125}} = -\\frac{2}{54} = -\\frac{1}{27}$$.",
        topic: "Vectơ và Biểu thức lượng giác (Tự luận)",
        difficulty: "VDC"
      }
    ],
  },

  "t10-ck1": {
    id: "t10-ck1",
    title: "Đề Thi Cuối Học Kỳ 1 - Toán 10 (KNTT)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "cuoi-ky-1",
    category: "LOP_10",
    subtitle: "Vectơ, Các phép toán vectơ, Tích vô hướng & Số đặc trưng đo xu thế trung tâm",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t10-ck1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Cho hình bình hành $ABCD$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "AB + AD = AC" },
          { key: "B", text: "AB + AC = AD" },
          { key: "C", text: "BA + BC = BD" },
          { key: "D", text: "AB + CD = AC" },
        ],
        correctKey: "A",
        explanation: "Quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
        topic: "Quy tắc hình bình hành",
        difficulty: "NB",
      },
      {
        id: "t10-ck1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Trong mặt phẳng tọa độ $Oxy$, cho $\\vec{a} = (2; -3)$ và $\\vec{b} = (4; 1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
        options: [
          { key: "A", text: "5" },
          { key: "B", text: "11" },
          { key: "C", text: "-5" },
          { key: "D", text: "8" },
        ],
        correctKey: "A",
        explanation: "Tích vô hướng trong tọa độ: $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 = 2(4) + (-3)(1) = 8 - 3 = 5$.",
        topic: "Tích vô hướng của hai vectơ",
        difficulty: "NB",
      },
      {
        id: "t10-ck1-q3",
        type: "true_false",
        index: 3,
        stem: "Cho tam giác đều $ABC$ cạnh $a$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Độ dài $|\\vec{AB} - \\vec{AC}| = |\\vec{CB}| = a$.", isCorrect: true },
          { key: "b", text: "Góc giữa hai vectơ $(\\vec{AB}, \\vec{AC}) = 60^\\circ$.", isCorrect: true },
          { key: "c", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$.", isCorrect: true },
          { key: "d", text: "Góc giữa hai vectơ $(\\vec{AB}, \\vec{BC}) = 60^\\circ$.", isCorrect: false },
        ],
        explanation: "Góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $180^\\circ - 60^\\circ = 120^\\circ$. Ý d là Sai.",
        topic: "Góc giữa hai vectơ",
        difficulty: "TH",
      },
      {
        id: "t10-ck1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho mẫu số liệu điểm kiểm tra của 9 học sinh: $4, 6, 7, 7, 8, 8, 8, 9, 10$:",
        subQuestions: [
          { key: "a", text: "Mốt của mẫu số liệu là $M_o = 8$ (xuất hiện 3 lần).", isCorrect: true },
          { key: "b", text: "Trung vị của mẫu số liệu là $M_e = 8$ (số ở vị trí thứ 5).", isCorrect: true },
          { key: "c", text: "Điểm trung bình của mẫu số liệu là $\\bar{x} = \\frac{70}{9} \\approx 7,78$.", isCorrect: true },
          { key: "d", text: "Khoảng biến thiên của mẫu số liệu là $R = 10 - 4 = 7$.", isCorrect: false },
        ],
        explanation: "Khoảng biến thiên $R = X_{max} - X_{min} = 10 - 4 = 6 \\ne 7$. Ý d là Sai.",
        topic: "Số đặc trưng đo xu thế trung tâm",
        difficulty: "TH",
      },
      {
        id: "t10-ck1-q5",
        type: "short_answer",
        index: 5,
        stem: "Cho đoạn thẳng $AB$ có độ dài bằng $8$. Gọi $I$ là trung điểm của $AB$. Tính độ dài vectơ $\\vec{u} = \\vec{IA} - \\vec{IB}$.",
        correctAnswer: "8",
        acceptableAnswers: ["8"],
        explanation: "$\\vec{u} = \\vec{IA} - \\vec{IB} = \\vec{BA} \\Rightarrow |\\vec{u}| = BA = 8$.",
        topic: "Độ dài vectơ",
        difficulty: "TH",
      },
      {
        id: "t10-ck1-q6",
        type: "short_answer",
        index: 6,
        stem: "Trong mặt phẳng $Oxy$, cho $A(1; 2), B(-2; 6)$. Tìm tọa độ $x_M$ của trung điểm $M$ của đoạn thẳng $AB$.",
        correctAnswer: "-0.5",
        acceptableAnswers: ["-0.5", "-1/2"],
        explanation: "$x_M = \\frac{1 + (-2)}{2} = -\\frac{1}{2} = -0,5$.",
        topic: "Tọa độ trung điểm",
        difficulty: "NB",
      },
    ],
  },

  "t10-gk2": {
    id: "t10-gk2",
    title: "Đề Thi Giữa Học Kỳ 2 - Toán 10 (KNTT)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "giua-ky-2",
    category: "LOP_10",
    subtitle: "Dấu của tam thức bậc hai, Phương trình quy về bậc hai, Đường thẳng trong mặt phẳng",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t10-gk2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Tập nghiệm của bất phương trình bậc hai $x^2 - 4x + 3 < 0$ là:",
        options: [
          { key: "A", text: "(1; 3)" },
          { key: "B", text: "(-∞; 1) ∪ (3; +∞)" },
          { key: "C", text: "[1; 3]" },
          { key: "D", text: "(-3; -1)" },
        ],
        correctKey: "A",
        explanation: "Tam thức có 2 nghiệm $1$ và $3$, hệ số $a = 1 > 0$. Trong khoảng hai nghiệm trái dấu với $a$ (mang dấu âm), vậy tập nghiệm là $(1; 3)$.",
        topic: "Dấu tam thức bậc hai",
        difficulty: "NB",
      },
      {
        id: "t10-gk2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Một vectơ pháp tuyến của đường thẳng $d: 3x - 4y + 5 = 0$ là:",
        options: [
          { key: "A", text: "n = (3; -4)" },
          { key: "B", text: "n = (4; 3)" },
          { key: "C", text: "n = (3; 4)" },
          { key: "D", text: "n = (-4; 3)" },
        ],
        correctKey: "A",
        explanation: "Phương trình $Ax + By + C = 0$ có VTPT là $\\vec{n} = (A; B) = (3; -4)$.",
        topic: "Phương trình đường thẳng",
        difficulty: "NB",
      },
      {
        id: "t10-gk2-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các bài toán liên quan đến tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \\ne 0$):",
        subQuestions: [
          { key: "a", text: "Nếu $\\Delta < 0$ thì $f(x)$ luôn cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$.", isCorrect: true },
          { key: "b", text: "Bất phương trình $x^2 + 2x + 5 > 0$ nghiệm đúng với mọi số thực $x$.", isCorrect: true },
          { key: "c", text: "Phương trình $\\sqrt{2x - 3} = x - 3$ có hai nghiệm phân biệt.", isCorrect: false },
          { key: "d", text: "Khoảng cách từ điểm $M(1; 2)$ đến đường thẳng $\\Delta: 3x + 4y - 1 = 0$ là $d = 2$.", isCorrect: true },
        ],
        explanation: "Giải $\\sqrt{2x-3} = x-3$: ĐK $x \\ge 3$. Bình phương: $2x-3 = x^2 - 6x + 9 \\Leftrightarrow x^2 - 8x + 12 = 0 \\Leftrightarrow x = 6$ hoặc $x = 2$ (loại vì $2 < 3$). Chỉ có 1 nghiệm duy nhất là $x = 6$. Khẳng định c là Sai.",
        topic: "Phương trình quy về bậc hai",
        difficulty: "VD",
      },
      {
        id: "t10-gk2-q4",
        type: "true_false",
        index: 4,
        stem: "Cho hai đường thẳng $d_1: 2x - y + 1 = 0$ và $d_2: x + 2y - 5 = 0$:",
        subQuestions: [
          { key: "a", text: "VTPT của $d_1$ là $\\vec{n}_1 = (2; -1)$, của $d_2$ là $\\vec{n}_2 = (1; 2)$.", isCorrect: true },
          { key: "b", text: "Tích vô hướng $\\vec{n}_1 \\cdot \\vec{n}_2 = 2(1) + (-1)(2) = 0$.", isCorrect: true },
          { key: "c", text: "Hai đường thẳng $d_1$ và $d_2$ vuông góc với nhau.", isCorrect: true },
          { key: "d", text: "Góc giữa hai đường thẳng bằng $45^\\circ$.", isCorrect: false },
        ],
        explanation: "Vì tích vô hướng bằng 0 nên hai đường thẳng vuông góc, góc giữa chúng bằng $90^\\circ$. Ý d là Sai.",
        topic: "Góc giữa hai đường thẳng",
        difficulty: "TH",
      },
      {
        id: "t10-gk2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng $d: 3x - 4y + 10 = 0$.",
        correctAnswer: "2",
        acceptableAnswers: ["2"],
        explanation: "$d(O, d) = \\frac{|3(0) - 4(0) + 10|}{\\sqrt{3^2 + (-4)^2}} = \\frac{10}{5} = 2$.",
        topic: "Khoảng cách từ điểm đến đường thẳng",
        difficulty: "NB",
      },
      {
        id: "t10-gk2-q6",
        type: "short_answer",
        index: 6,
        stem: "Tìm nghiệm của phương trình: $\\sqrt{x^2 - 3x + 2} = x - 1$.",
        correctAnswer: "1",
        acceptableAnswers: ["1"],
        explanation: "ĐK $x \\ge 1$. Bình phương: $x^2 - 3x + 2 = x^2 - 2x + 1 \\Leftrightarrow -x = -1 \\Leftrightarrow x = 1$ (thỏa mãn).",
        topic: "Phương trình vô tỉ",
        difficulty: "TH",
      },
    ],
  },

  "t10-ck2": {
    id: "t10-ck2",
    title: "Đề Thi Cuối Học Kỳ 2 - Toán 10 (KNTT)",
    grade: "lop-10",
    gradeNumber: 10,
    examType: "cuoi-ky-2",
    category: "LOP_10",
    subtitle: "Đường tròn, Ba đường Conic (Elip, Hypebol, Parabol), Đại số tổ hợp & Xác suất",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t10-ck2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Đường tròn $(C): (x - 2)^2 + (y + 3)^2 = 16$ có tâm $I$ và bán kính $R$ là:",
        options: [
          { key: "A", text: "I(2; -3), R = 4" },
          { key: "B", text: "I(-2; 3), R = 4" },
          { key: "C", text: "I(2; -3), R = 16" },
          { key: "D", text: "I(-2; 3), R = 16" },
        ],
        correctKey: "A",
        explanation: "Dạng chuẩn $(x-a)^2 + (y-b)^2 = R^2$ cho tâm $I(a; b) = (2; -3)$ và $R = \\sqrt{16} = 4$.",
        topic: "Phương trình đường tròn",
        difficulty: "NB",
      },
      {
        id: "t10-ck2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Số cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi làm nhiệm vụ là:",
        options: [
          { key: "A", text: "C(10,3) = 120" },
          { key: "B", text: "A(10,3) = 720" },
          { key: "C", text: "10^3 = 1000" },
          { key: "D", text: "30" },
        ],
        correctKey: "A",
        explanation: "Chọn không phân biệt thứ tự nhiệm vụ là một tổ hợp chập 3 của 10 phần tử: $C_{10}^3 = 120$.",
        topic: "Tổ hợp",
        difficulty: "NB",
      },
      {
        id: "t10-ck2-q3",
        type: "true_false",
        index: 3,
        stem: "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Độ dài trục lớn $2a = 10$.", isCorrect: true },
          { key: "b", text: "Độ dài trục nhỏ $2b = 6$.", isCorrect: true },
          { key: "c", text: "Tiêu cự $2c$ thỏa mãn $c^2 = a^2 - b^2 = 25 - 9 = 16 \\Rightarrow 2c = 8$.", isCorrect: true },
          { key: "d", text: "Tọa độ hai tiêu điểm là $F_1(0; -4)$ và $F_2(0; 4)$.", isCorrect: false },
        ],
        explanation: "Vì $a > b$ nằm dưới $x^2$ nên hai tiêu điểm nằm trên trục hoành $Ox$: $F_1(-4; 0)$ và $F_2(4; 0)$. Ý d là Sai.",
        topic: "Đường Elip",
        difficulty: "TH",
      },
      {
        id: "t10-ck2-q4",
        type: "true_false",
        index: 4,
        stem: "Gieo ngẫu nhiên một đồng xu cân đối đồng chất 3 lần liên tiếp:",
        subQuestions: [
          { key: "a", text: "Số phần tử của không gian mẫu là $n(\\Omega) = 2^3 = 8$.", isCorrect: true },
          { key: "b", text: "Biến cố 'Có đúng 2 lần xuất hiện mặt sấp' có 3 kết quả thuận lợi.", isCorrect: true },
          { key: "c", text: "Xác suất để có ít nhất một lần xuất hiện mặt sấp là $\\frac{7}{8}$.", isCorrect: true },
          { key: "d", text: "Xác suất để cả 3 lần đều xuất hiện mặt ngửa là $\\frac{1}{2}$.", isCorrect: false },
        ],
        explanation: "Cả 3 lần mặt ngửa là biến cố duy nhất $(N, N, N)$, xác suất là $\\frac{1}{8} \\ne \\frac{1}{2}$. Ý d là Sai.",
        topic: "Xác suất cổ điển",
        difficulty: "TH",
      },
      {
        id: "t10-ck2-q5",
        type: "short_answer",
        index: 5,
        stem: "Có bao nhiêu số tự nhiên có 4 chữ số khác nhau được lập từ các chữ số $\\{1; 2; 3; 4; 5\\}$?",
        correctAnswer: "120",
        acceptableAnswers: ["120"],
        explanation: "Số các số lập được là chỉnh hợp chập 4 của 5: $A_5^4 = \\frac{5!}{(5-4)!} = 120$.",
        topic: "Chỉnh hợp",
        difficulty: "TH",
      },
      {
        id: "t10-ck2-q6",
        type: "short_answer",
        index: 6,
        stem: "Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức Newton $(x + 2)^5$.",
        correctAnswer: "40",
        acceptableAnswers: ["40"],
        explanation: "Số hạng tổng quát: $C_5^k x^{5-k} 2^k$. Chứa $x^3 \\Rightarrow 5 - k = 3 \\Rightarrow k = 2$. Hệ số là $C_5^2 \\cdot 2^2 = 10 \\cdot 4 = 40$.",
        topic: "Khai triển nhị thức Newton",
        difficulty: "VD",
      },
    ],
  },

  // =========================================================================
  // TOÁN 11
  // =========================================================================
  "t11-gk1": {
    id: "t11-gk1",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 11 (Đề số 1)",
    grade: "lop-11",
    gradeNumber: 11,
    examType: "giua-ky-1",
    category: "LOP_11",
    subtitle: "Cấu trúc chuẩn ma trận: 4 điểm Nhận biết - 3 điểm Thông hiểu - 3 điểm Vận dụng (Chương I, II, III)",
    durationMinutes: 90,
    totalQuestions: 22,
    questions: [
      {
        id: "t11-gk1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Đổi góc có số đo $150^\\circ$ sang đơn vị radian, ta được kết quả là:",
        options: [
          { key: "A", text: "$\\dfrac{5\\pi}{6}$" },
          { key: "B", text: "$\\dfrac{2\\pi}{3}$" },
          { key: "C", text: "$\\dfrac{3\\pi}{4}$" },
          { key: "D", text: "$\\dfrac{7\\pi}{6}$" },
        ],
        correctKey: "A",
        explanation: "Áp dụng công thức đổi độ sang radian: $\\alpha = a \\cdot \\dfrac{\\pi}{180} = 150 \\cdot \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{6}$ rad.",
        topic: "Giá trị lượng giác của góc lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Trong các đẳng thức lượng giác sau, đẳng thức nào ĐÚNG với mọi góc lượng giác $\\alpha$?",
        options: [
          { key: "A", text: "$\\sin(\\pi - \\alpha) = -\\sin\\alpha$" },
          { key: "B", text: "$\\cos(\\pi - \\alpha) = -\\cos\\alpha$" },
          { key: "C", text: "$\\sin(-\\alpha) = \\sin\\alpha$" },
          { key: "D", text: "$\\cos(-\\alpha) = -\\cos\\alpha$" },
        ],
        correctKey: "B",
        explanation: "Theo công thức hai góc bù nhau (hơn kém $\\pi$): $\\sin(\\pi - \\alpha) = \\sin\\alpha$, còn $\\cos(\\pi - \\alpha) = -\\cos\\alpha$. Theo công thức hai góc đối: $\\cos(-\\alpha) = \\cos\\alpha$ và $\\sin(-\\alpha) = -\\sin\\alpha$. Do đó phương án B đúng.",
        topic: "Giá trị lượng giác của góc lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Công thức nào sau đây là ĐÚNG với mọi góc lượng giác $a$ và $b$?",
        options: [
          { key: "A", text: "$\\sin(a + b) = \\sin a \\sin b + \\cos a \\cos b$" },
          { key: "B", text: "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$" },
          { key: "C", text: "$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$" },
          { key: "D", text: "$\\sin(a - b) = \\sin a \\cos b + \\cos a \\sin b$" },
        ],
        correctKey: "C",
        explanation: "Theo công thức cộng lượng giác đối với hàm cos: $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$ và $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$.",
        topic: "Công thức lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Tập xác định $D$ của hàm số lượng giác $y = \\tan x$ là:",
        options: [
          { key: "A", text: "$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$" },
          { key: "B", text: "$D = \\mathbb{R}$" },
          { key: "C", text: "$D = [-1; 1]$" },
          { key: "D", text: "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$" },
        ],
        correctKey: "D",
        explanation: "Hàm số $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi và chỉ khi $\\cos x \\neq 0 \\Leftrightarrow x \\neq \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$. Vậy $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$.",
        topic: "Hàm số lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Cho dãy số $(u_n)$ xác định bởi công thức số hạng tổng quát $u_n = 3n - 2$. Giá trị của số hạng thứ tư $u_4$ bằng:",
        options: [
          { key: "A", text: "10" },
          { key: "B", text: "8" },
          { key: "C", text: "12" },
          { key: "D", text: "14" },
        ],
        correctKey: "A",
        explanation: "Thay $n = 4$ vào công thức số hạng tổng quát: $u_4 = 3(4) - 2 = 12 - 2 = 10$.",
        topic: "Dãy số",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 5$. Số hạng thứ hai $u_2$ bằng:",
        options: [
          { key: "A", text: "10" },
          { key: "B", text: "7" },
          { key: "C", text: "3" },
          { key: "D", text: "-3" },
        ],
        correctKey: "B",
        explanation: "Theo định nghĩa cấp số cộng: $u_2 = u_1 + d = 2 + 5 = 7$.",
        topic: "Cấp số cộng",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Số hạng thứ ba $u_3$ bằng:",
        options: [
          { key: "A", text: "6" },
          { key: "B", text: "18" },
          { key: "C", text: "12" },
          { key: "D", text: "24" },
        ],
        correctKey: "C",
        explanation: "Công thức số hạng tổng quát cấp số nhân: $u_n = u_1 \\cdot q^{n-1} \\Rightarrow u_3 = 3 \\cdot 2^{3-1} = 3 \\cdot 4 = 12$.",
        topic: "Cấp số nhân",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Trong mẫu số liệu ghép nhóm, giá trị đại diện của nhóm số liệu $[20; 30)$ là:",
        options: [
          { key: "A", text: "20" },
          { key: "B", text: "30" },
          { key: "C", text: "10" },
          { key: "D", text: "25" },
        ],
        correctKey: "D",
        explanation: "Giá trị đại diện của nhóm $[a_i; a_{i+1})$ là trung bình cộng hai đầu mút: $c_i = \\dfrac{a_i + a_{i+1}}{2} = \\dfrac{20 + 30}{2} = 25$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\cos\\alpha = -\\dfrac{3}{5}$ và $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Giá trị của $\\sin\\alpha$ bằng:",
        options: [
          { key: "A", text: "$\\dfrac{4}{5}$" },
          { key: "B", text: "$-\\dfrac{4}{5}$" },
          { key: "C", text: "$\\dfrac{16}{25}$" },
          { key: "D", text: "$\\dfrac{2}{5}$" },
        ],
        correctKey: "A",
        explanation: "Ta có $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\left(-\\dfrac{3}{5}\\right)^2 = \\dfrac{16}{25}$. Vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư thứ II) nên $\\sin\\alpha > 0$. Do đó $\\sin\\alpha = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}$.",
        topic: "Giá trị lượng giác của góc lượng giác",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Tất cả các nghiệm của phương trình lượng giác cơ bản $\\sin 2x = \\dfrac{\\sqrt{3}}{2}$ là:",
        options: [
          { key: "A", text: "$x = \\dfrac{\\pi}{3} + k\\pi, x = \\dfrac{2\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "B", text: "$x = \\dfrac{\\pi}{6} + k\\pi, x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "C", text: "$x = \\dfrac{\\pi}{6} + k2\\pi, x = \\dfrac{5\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "D", text: "$x = \\dfrac{\\pi}{12} + k\\pi, x = \\dfrac{5\\pi}{12} + k\\pi \\ (k \\in \\mathbb{Z})$" },
        ],
        correctKey: "B",
        explanation: "Phương trình: $\\sin 2x = \\sin\\dfrac{\\pi}{3} \\Leftrightarrow 2x = \\dfrac{\\pi}{3} + k2\\pi$ hoặc $2x = \\pi - \\dfrac{\\pi}{3} + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{6} + k\\pi$ hoặc $x = \\dfrac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$).",
        topic: "Phương trình lượng giác cơ bản",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Biết số hạng thứ $n$ là $u_n = 39$, giá trị của $n$ là:",
        options: [
          { key: "A", text: "9" },
          { key: "B", text: "11" },
          { key: "C", text: "10" },
          { key: "D", text: "12" },
        ],
        correctKey: "C",
        explanation: "Áp dụng công thức số hạng tổng quát: $u_n = u_1 + (n-1)d \\Leftrightarrow 39 = 3 + (n-1)4 \\Leftrightarrow 4(n-1) = 36 \\Leftrightarrow n - 1 = 9 \\Leftrightarrow n = 10$.",
        topic: "Cấp số cộng",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Khảo sát thời gian hoàn thành bài tập của 40 học sinh: nhóm $[0; 5)$ có 6 học sinh, nhóm $[5; 10)$ có 14 học sinh, nhóm $[10; 15)$ có 12 học sinh, nhóm $[15; 20)$ có 8 học sinh. Nhóm chứa mốt của mẫu số liệu trên là:",
        options: [
          { key: "A", text: "$[0; 5)$" },
          { key: "B", text: "$[10; 15)$" },
          { key: "C", text: "$[15; 20)$" },
          { key: "D", text: "$[5; 10)$" },
        ],
        correctKey: "D",
        explanation: "Nhóm chứa mốt là nhóm có tần số lớn nhất trong mẫu số liệu ghép nhóm. Ở đây nhóm $[5; 10)$ có tần số lớn nhất là $m = 14$, nên nhóm chứa mốt là $[5; 10)$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-q13",
        type: "true_false",
        index: 13,
        stem: "Cho góc lượng giác $\\alpha$ bất kì và các hệ thức lượng giác cơ bản. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Đẳng thức $\\sin^2\\alpha + \\cos^2\\alpha = 1$ luôn đúng với mọi góc lượng giác $\\alpha$.", isCorrect: true },
          { key: "b", text: "Hệ thức $\\tan\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha}$ luôn đúng với mọi góc $\\alpha \\neq k\\pi$ ($k \\in \\mathbb{Z}$).", isCorrect: false },
          { key: "c", text: "Giá trị của $\\sin 0^\\circ = 0$ và $\\cos 0^\\circ = 1$.", isCorrect: true },
          { key: "d", text: "Nếu $\\alpha$ thuộc góc phần tư thứ II thì $\\cos\\alpha > 0$.", isCorrect: false },
        ],
        explanation: "- a) Đúng: Hệ thức lượng giác cơ bản $\\sin^2\\alpha + \\cos^2\\alpha = 1$ luôn thỏa mãn với mọi $\\alpha$.\n- b) Sai: Định nghĩa đúng là $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$, còn $\\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\cot\\alpha$.\n- c) Đúng: Điểm biểu diễn góc $0^\\circ$ trên đường tròn lượng giác là $A(1;0)$, do đó hoành độ $\\cos 0^\\circ = 1$ và tung độ $\\sin 0^\\circ = 0$.\n- d) Sai: Trong góc phần tư thứ II, hoành độ điểm biểu diễn mang dấu âm, nên $\\cos\\alpha < 0$.",
        topic: "Giá trị lượng giác của góc lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q14",
        type: "true_false",
        index: 14,
        stem: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = -2$. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Số hạng thứ hai của cấp số nhân là $u_2 = -6$.", isCorrect: true },
          { key: "b", text: "Công thức số hạng tổng quát của cấp số nhân là $u_n = 3 \\cdot (-2)^{n-1}$ ($n \\ge 1$).", isCorrect: true },
          { key: "c", text: "Số hạng thứ ba của cấp số nhân là $u_3 = -12$.", isCorrect: false },
          { key: "d", text: "Dãy số $(u_n)$ là một dãy số giảm.", isCorrect: false },
        ],
        explanation: "- a) Đúng: $u_2 = u_1 \\cdot q = 3 \\cdot (-2) = -6$.\n- b) Đúng: Áp dụng công thức $u_n = u_1 \\cdot q^{n-1} = 3 \\cdot (-2)^{n-1}$.\n- c) Sai: $u_3 = u_1 \\cdot q^2 = 3 \\cdot (-2)^2 = 3 \\cdot 4 = 12$ (chứ không phải $-12$).\n- d) Sai: Các số hạng của dãy là $3, -6, 12, -24, 48...$ có dấu đan xen luân phiên nên không phải là dãy số giảm cũng không phải dãy số tăng.",
        topic: "Cấp số nhân",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-q15",
        type: "true_false",
        index: 15,
        stem: "Cho phương trình lượng giác $\\cos\\left(x - \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Phương trình tương đương với $\\cos\\left(x - \\dfrac{\\pi}{3}\\right) = \\cos\\dfrac{\\pi}{3}$.", isCorrect: true },
          { key: "b", text: "Phương trình có các họ nghiệm là $x = \\dfrac{2\\pi}{3} + k2\\pi$ và $x = k2\\pi$ ($k \\in \\mathbb{Z}$).", isCorrect: true },
          { key: "c", text: "Nghiệm dương nhỏ nhất của phương trình đã cho là $x = \\dfrac{\\pi}{3}$.", isCorrect: false },
          { key: "d", text: "Trên đoạn $[0; 2\\pi]$, phương trình có đúng 2 nghiệm phân biệt.", isCorrect: false },
        ],
        explanation: "- a) Đúng: Vì $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$.\n- b) Đúng: $x - \\dfrac{\\pi}{3} = \\pm\\dfrac{\\pi}{3} + k2\\pi \\Leftrightarrow x = \\dfrac{2\\pi}{3} + k2\\pi$ hoặc $x = k2\\pi$ ($k \\in \\mathbb{Z}$).\n- c) Sai: Khi $k = 0$, họ $x = k2\\pi$ cho $x = 0$ (không dương), họ $x = \\dfrac{2\\pi}{3} + k2\\pi$ cho nghiệm dương nhỏ nhất là $x = \\dfrac{2\\pi}{3}$.\n- d) Sai: Trên đoạn $[0; 2\\pi]$, họ $x = k2\\pi$ cho 2 nghiệm $x = 0$ và $x = 2\\pi$; họ $x = \\dfrac{2\\pi}{3} + k2\\pi$ cho nghiệm $x = \\dfrac{2\\pi}{3}$. Như vậy có tất cả 3 nghiệm thuộc $[0; 2\\pi]$.",
        topic: "Phương trình lượng giác cơ bản",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-q16",
        type: "true_false",
        index: 16,
        stem: "Thống kê thời gian sử dụng Internet trong một ngày (giờ) của 50 học sinh: nhóm $[0; 2)$ có 8 học sinh, nhóm $[2; 4)$ có 16 học sinh, nhóm $[4; 6)$ có 18 học sinh, nhóm $[6; 8)$ có 8 học sinh. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Cỡ mẫu của số liệu khảo sát là $n = 50$.", isCorrect: true },
          { key: "b", text: "Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 8$ giờ.", isCorrect: true },
          { key: "c", text: "Nhóm chứa trung vị của mẫu số liệu là nhóm $[2; 4)$.", isCorrect: false },
          { key: "d", text: "Số học sinh sử dụng từ 4 đến dưới 6 giờ chiếm tỉ lệ $36\\%$ tổng số học sinh.", isCorrect: true },
        ],
        explanation: "- a) Đúng: Cỡ mẫu $n = 8 + 16 + 18 + 8 = 50$.\n- b) Đúng: Khoảng biến thiên $R = a_4 - a_0 = 8 - 0 = 8$ giờ.\n- c) Sai: Vị trí trung vị là $\\dfrac{n}{2} = 25$. Tần số tích lũy: nhóm 1 có 8, nhóm 2 tích lũy là $8 + 16 = 24 < 25$. Do đó học sinh thứ 25 và 26 nằm ở nhóm $[4; 6)$, nên nhóm chứa trung vị là $[4; 6)$.\n- d) Đúng: Tỉ lệ học sinh nhóm $[4; 6)$ là $\\dfrac{18}{50} = 0{,}36 = 36\\%$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-q17",
        type: "short_answer",
        index: 17,
        stem: "Một bánh xe đạp có đường kính $70\\text{ cm}$. Một học sinh đi xe đạp trên đường thẳng, sau khi bánh xe quay được đúng $200$ vòng thì xe đi được quãng đường dài bao nhiêu mét? (Lấy $\\pi \\approx 3{,}1416$, làm tròn kết quả đến hàng đơn vị).",
        correctAnswer: "440",
        acceptableAnswers: ["440","440m","440 m"],
        explanation: "Bán kính bánh xe đạp là $R = 35\\text{ cm} = 0{,}35\\text{ m}$. Chu vi của bánh xe khi quay trọn một vòng là: $C = 2\\pi R = 2\\pi \\cdot 0{,}35 = 0{,}7\\pi\\text{ m}$. Khi bánh xe quay $200$ vòng, quãng đường xe đi được là: $S = 200 \\cdot C = 200 \\cdot 0{,}7\\pi = 140\\pi \\approx 140 \\times 3{,}1416 = 439{,}824\\text{ m} \\approx 440\\text{ m}$.",
        topic: "Toán thực tế - Cung tròn & Chuyển động quay",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-q18",
        type: "short_answer",
        index: 18,
        stem: "Độ cao mực nước biển (tính bằng mét) tại một cảng biển vào thời điểm $t$ giờ ($0 \\le t \\le 24$) trong ngày được mô hình hóa bởi hàm số: $h(t) = 5\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 9$. Hỏi trong ngày hôm đó, mực nước biển đạt độ cao lớn nhất bằng bao nhiêu mét?",
        correctAnswer: "14",
        acceptableAnswers: ["14","14m","14 m"],
        explanation: "Ta có: $-1 \\le \\cos\\left(\\dfrac{\\pi t}{6}\\right) \\le 1$ với mọi $t$. Do đó: $h(t) = 5\\cos\\left(\\dfrac{\\pi t}{6}\\right) + 9 \\le 5(1) + 9 = 14\\text{ m}$. Dấu \"=\" xảy ra khi $\\cos\\left(\\dfrac{\\pi t}{6}\\right) = 1 \\Leftrightarrow \\dfrac{\\pi t}{6} = k2\\pi \\Leftrightarrow t = 12k$. Với $0 \\le t \\le 24$, ta có $t = 0$, $t = 12$, $t = 24$ giờ trong ngày. Vậy độ cao lớn nhất là 14 mét.",
        topic: "Toán thực tế - Hàm số lượng giác & Thủy triều",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-q19",
        type: "short_answer",
        index: 19,
        stem: "Một rạp hát có tất cả $20$ hàng ghế. Hàng đầu tiên có $15$ chiếc ghế, mỗi hàng tiếp theo nhiều hơn hàng ngay trước nó $2$ chiếc ghế. Hỏi rạp hát đó có tổng cộng bao nhiêu chiếc ghế?",
        correctAnswer: "680",
        acceptableAnswers: ["680","680 ghế"],
        explanation: "Số lượng ghế ở mỗi hàng lập thành một cấp số cộng với số hạng đầu $u_1 = 15$, công sai $d = 2$ và số hàng ghế $n = 20$. Tổng số ghế trong rạp chính là tổng của 20 số hạng đầu tiên: $S_{20} = \\dfrac{20}{2}[2u_1 + (20 - 1)d] = 10[2(15) + 19(2)] = 10[30 + 38] = 10 \\cdot 68 = 680$ chiếc ghế.",
        topic: "Toán thực tế - Cấp số cộng rạp hát",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-q20",
        type: "short_answer",
        index: 20,
        stem: "Một người gửi $50$ triệu đồng vào ngân hàng theo thể thức lãi kép với kì hạn 1 tháng và lãi suất $0{,}5\\%/\\text{tháng}$. Hỏi sau đúng $12$ tháng (1 năm), người đó nhận được số tiền cả gốc lẫn lãi là bao nhiêu triệu đồng? (Làm tròn kết quả đến hàng phần mười).",
        correctAnswer: "53.1",
        acceptableAnswers: ["53.1","53,1","53.1 triệu","53.08"],
        explanation: "Áp dụng công thức lãi kép: $T = A(1 + r)^n$. Với số vốn gốc $A = 50$ triệu, lãi suất mỗi kì $r = 0{,}5\\% = 0{,}005$, số kì gửi $n = 12$ tháng: $T = 50 \\cdot (1 + 0{,}005)^{12} \\approx 50 \\times 1{,}061678 \\approx 53{,}0839$ triệu đồng $\\approx 53{,}1$ triệu đồng.",
        topic: "Toán thực tế - Lãi kép ngân hàng",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-q21",
        type: "short_answer",
        index: 21,
        stem: "Khảo sát thời gian tập thể dục mỗi ngày của 40 học sinh thu được bảng ghép nhóm: $[20; 40)$ có 6 học sinh; $[40; 60)$ có 12 học sinh; $[60; 80)$ có 14 học sinh; $[80; 100)$ có 8 học sinh. Tính thời gian tập thể dục trung bình $\\bar{x}$ của 40 học sinh trên (tính bằng phút).",
        correctAnswer: "62",
        acceptableAnswers: ["62","62 phút"],
        explanation: "Giá trị đại diện của các nhóm lần lượt là: $c_1 = \\dfrac{20+40}{2} = 30$, $c_2 = \\dfrac{40+60}{2} = 50$, $c_3 = \\dfrac{60+80}{2} = 70$, $c_4 = \\dfrac{80+100}{2} = 90$. Số trung bình là: $\\bar{x} = \\dfrac{6 \\cdot 30 + 12 \\cdot 50 + 14 \\cdot 70 + 8 \\cdot 90}{40} = \\dfrac{180 + 600 + 980 + 720}{40} = \\dfrac{2480}{40} = 62$ phút.",
        topic: "Số trung bình mẫu số liệu ghép nhóm",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-q22",
        type: "short_answer",
        index: 22,
        stem: "Cho mẫu số liệu ghép nhóm về thời gian tập thể dục của 40 học sinh ở Câu 21. Hãy tính trung vị $M_e$ của mẫu số liệu ghép nhóm này (tính bằng phút, làm tròn kết quả đến chữ số thập phân thứ nhất).",
        correctAnswer: "62.9",
        acceptableAnswers: ["62.9","62,9","62.86"],
        explanation: "Cỡ mẫu $n = 40 \\Rightarrow \\dfrac{n}{2} = 20$. Tần số tích lũy: $cf_1 = 6$, $cf_2 = 18 < 20 < cf_3 = 32$. Do đó nhóm chứa trung vị là nhóm $[60; 80)$, có đầu mút trái $a_3 = 60$, độ dài nhóm $h = 20$, tần số $m_3 = 14$, tần số tích lũy của nhóm trước là $cf_2 = 18$. Áp dụng công thức tính trung vị mẫu ghép nhóm: $M_e = a_3 + \\dfrac{\\dfrac{n}{2} - cf_2}{m_3} \\cdot h = 60 + \\dfrac{20 - 18}{14} \\cdot 20 = 60 + \\dfrac{40}{14} = 60 + \\dfrac{20}{7} \\approx 60 + 2{,}857 \\approx 62{,}9$ phút.",
        topic: "Trung vị mẫu số liệu ghép nhóm",
        difficulty: "VD",
      },
    ],
  },
  "t11-gk1-de2": {
    id: "t11-gk1-de2",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 11 (Đề số 2)",
    grade: "lop-11",
    gradeNumber: 11,
    examType: "giua-ky-1",
    category: "LOP_11",
    subtitle: "Cấu trúc chuẩn ma trận: 4 điểm Nhận biết - 3 điểm Thông hiểu - 3 điểm Vận dụng (Chương I, II, III)",
    durationMinutes: 90,
    totalQuestions: 22,
    questions: [
      {
        id: "t11-gk1-de2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Đổi góc có số đo $315^\\circ$ sang đơn vị radian, ta được kết quả là:",
        options: [
          { key: "A", text: "$\\dfrac{7\\pi}{4}$" },
          { key: "B", text: "$\\dfrac{3\\pi}{2}$" },
          { key: "C", text: "$\\dfrac{5\\pi}{4}$" },
          { key: "D", text: "$\\dfrac{9\\pi}{4}$" },
        ],
        correctKey: "A",
        explanation: "Ta có: $315^\\circ = 315 \\cdot \\dfrac{\\pi}{180} = \\dfrac{7\\pi}{4}$ (rad).",
        topic: "Giá trị lượng giác của góc lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Công thức nhân đôi nào sau đây là ĐÚNG với mọi góc lượng giác $a$?",
        options: [
          { key: "A", text: "$\\cos 2a = \\cos^2 a + \\sin^2 a$" },
          { key: "B", text: "$\\cos 2a = \\cos^2 a - \\sin^2 a$" },
          { key: "C", text: "$\\sin 2a = \\sin a \\cos a$" },
          { key: "D", text: "$\\cos 2a = 1 - 2\\cos^2 a$" },
        ],
        correctKey: "B",
        explanation: "Công thức nhân đôi đối với hàm cos là $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$.",
        topic: "Công thức lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Tập giá trị của hàm số lượng giác $y = \\cos x$ là:",
        options: [
          { key: "A", text: "$[0; 1]$" },
          { key: "B", text: "$\\mathbb{R}$" },
          { key: "C", text: "$[-1; 1]$" },
          { key: "D", text: "$[-2; 2]$" },
        ],
        correctKey: "C",
        explanation: "Với mọi số thực $x$, ta luôn có $-1 \\le \\cos x \\le 1$. Do đó tập giá trị của hàm số $y = \\cos x$ là $[-1; 1]$.",
        topic: "Hàm số lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Tất cả các nghiệm của phương trình lượng giác cơ bản $\\sin x = 0$ là:",
        options: [
          { key: "A", text: "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "B", text: "$x = k2\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "C", text: "$x = \\dfrac{\\pi}{2} + k2\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "D", text: "$x = k\\pi \\ (k \\in \\mathbb{Z})$" },
        ],
        correctKey: "D",
        explanation: "Phương trình $\\sin x = 0 \\Leftrightarrow x = k\\pi \\ (k \\in \\mathbb{Z})$.",
        topic: "Phương trình lượng giác cơ bản",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\dfrac{n}{n + 1}$. Giá trị của số hạng thứ ba $u_3$ bằng:",
        options: [
          { key: "A", text: "$\\dfrac{3}{4}$" },
          { key: "B", text: "$\\dfrac{2}{3}$" },
          { key: "C", text: "$\\dfrac{4}{5}$" },
          { key: "D", text: "$\\dfrac{1}{2}$" },
        ],
        correctKey: "A",
        explanation: "Thay $n = 3$ vào công thức số hạng tổng quát: $u_3 = \\dfrac{3}{3 + 1} = \\dfrac{3}{4}$.",
        topic: "Dãy số",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -3$ và công sai $d = 4$. Số hạng thứ ba $u_3$ bằng:",
        options: [
          { key: "A", text: "1" },
          { key: "B", text: "5" },
          { key: "C", text: "-7" },
          { key: "D", text: "9" },
        ],
        correctKey: "B",
        explanation: "Áp dụng công thức số hạng tổng quát: $u_3 = u_1 + 2d = -3 + 2(4) = -3 + 8 = 5$.",
        topic: "Cấp số cộng",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 5$ và công bội $q = 3$. Số hạng thứ hai $u_2$ bằng:",
        options: [
          { key: "A", text: "8" },
          { key: "B", text: "2" },
          { key: "C", text: "15" },
          { key: "D", text: "45" },
        ],
        correctKey: "C",
        explanation: "Ta có: $u_2 = u_1 \\cdot q = 5 \\cdot 3 = 15$.",
        topic: "Cấp số nhân",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Trong mẫu số liệu ghép nhóm, độ dài của nhóm số liệu $[40; 60)$ bằng:",
        options: [
          { key: "A", text: "50" },
          { key: "B", text: "100" },
          { key: "C", text: "10" },
          { key: "D", text: "20" },
        ],
        correctKey: "D",
        explanation: "Độ dài của nhóm $[a; b)$ được tính bằng hiệu $b - a = 60 - 40 = 20$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Cho góc $\\alpha$ thỏa mãn $\\sin\\alpha = \\dfrac{1}{3}$. Giá trị của $\\cos 2\\alpha$ bằng:",
        options: [
          { key: "A", text: "$\\dfrac{7}{9}$" },
          { key: "B", text: "$\\dfrac{8}{9}$" },
          { key: "C", text: "$-\\dfrac{7}{9}$" },
          { key: "D", text: "$\\dfrac{2}{3}$" },
        ],
        correctKey: "A",
        explanation: "Áp dụng công thức nhân đôi: $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha = 1 - 2\\left(\\dfrac{1}{3}\\right)^2 = 1 - \\dfrac{2}{9} = \\dfrac{7}{9}$.",
        topic: "Công thức lượng giác",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de2-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Chu kỳ tuần hoàn $T$ của hàm số lượng giác $y = \\sin 2x$ là:",
        options: [
          { key: "A", text: "$T = 2\\pi$" },
          { key: "B", text: "$T = \\pi$" },
          { key: "C", text: "$T = \\dfrac{\\pi}{2}$" },
          { key: "D", text: "$T = 4\\pi$" },
        ],
        correctKey: "B",
        explanation: "Hàm số $y = \\sin(\\omega x + \\varphi)$ có chu kỳ tuần hoàn là $T = \\dfrac{2\\pi}{|\\omega|}$. Với $\\omega = 2$, ta có $T = \\dfrac{2\\pi}{2} = \\pi$.",
        topic: "Hàm số lượng giác",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de2-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Biết số hạng thứ $n$ là $u_n = 96$, giá trị của $n$ là:",
        options: [
          { key: "A", text: "5" },
          { key: "B", text: "7" },
          { key: "C", text: "6" },
          { key: "D", text: "8" },
        ],
        correctKey: "C",
        explanation: "Ta có: $u_n = u_1 \\cdot q^{n-1} \\Leftrightarrow 96 = 3 \\cdot 2^{n-1} \\Leftrightarrow 2^{n-1} = 32 = 2^5 \\Leftrightarrow n - 1 = 5 \\Leftrightarrow n = 6$.",
        topic: "Cấp số nhân",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de2-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Khảo sát chiều cao của 40 học sinh: nhóm $[150; 155)$ có 5 học sinh, nhóm $[155; 160)$ có 12 học sinh, nhóm $[160; 165)$ có 15 học sinh, nhóm $[165; 170)$ có 8 học sinh. Nhóm chứa trung vị của mẫu số liệu trên là:",
        options: [
          { key: "A", text: "$[150; 155)$" },
          { key: "B", text: "$[155; 160)$" },
          { key: "C", text: "$[165; 170)$" },
          { key: "D", text: "$[160; 165)$" },
        ],
        correctKey: "D",
        explanation: "Cỡ mẫu $n = 40 \\Rightarrow \\dfrac{n}{2} = 20$. Tần số tích lũy: nhóm 1 có 5; nhóm 2 có $5 + 12 = 17 < 20$; nhóm 3 có $17 + 15 = 32 > 20$. Do đó trung vị rơi vào nhóm $[160; 165)$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de2-q13",
        type: "true_false",
        index: 13,
        stem: "Cho các góc lượng giác $a, b$ bất kì. Xét tính đúng sai của các công thức lượng giác sau:",
        subQuestions: [
          { key: "a", text: "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$.", isCorrect: true },
          { key: "b", text: "$\\sin 2a = 2\\sin a \\cos a$.", isCorrect: true },
          { key: "c", text: "$\\cos 2a = 2\\cos^2 a + 1$.", isCorrect: false },
          { key: "d", text: "$\\tan 2a = \\dfrac{2\\tan a}{1 + \\tan^2 a}$ (với các biểu thức có nghĩa).", isCorrect: false },
        ],
        explanation: "- a) Đúng: Công thức cộng $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$.\n- b) Đúng: Công thức nhân đôi $\\sin 2a = 2\\sin a \\cos a$.\n- c) Sai: Công thức đúng là $\\cos 2a = 2\\cos^2 a - 1$ (chứ không phải $+ 1$).\n- d) Sai: Công thức đúng là $\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$ (dưới mẫu là dấu trừ).",
        topic: "Công thức lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q14",
        type: "true_false",
        index: 14,
        stem: "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 2n + 1$ ($n \\ge 1$). Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Ba số hạng đầu tiên của dãy số lần lượt là $u_1 = 3, u_2 = 5, u_3 = 7$.", isCorrect: true },
          { key: "b", text: "Dãy số $(u_n)$ là một cấp số cộng với công sai $d = 2$.", isCorrect: true },
          { key: "c", text: "Số hạng thứ 10 của dãy số là $u_{10} = 20$.", isCorrect: false },
          { key: "d", text: "Dãy số $(u_n)$ là một dãy số giảm.", isCorrect: false },
        ],
        explanation: "- a) Đúng: $u_1 = 2(1) + 1 = 3, u_2 = 2(2) + 1 = 5, u_3 = 2(3) + 1 = 7$.\n- b) Đúng: Hiệu $u_{n+1} - u_n = [2(n+1) + 1] - (2n + 1) = 2$ không đổi, nên $(u_n)$ là cấp số cộng có $d = 2$.\n- c) Sai: $u_{10} = 2(10) + 1 = 21 \\neq 20$.\n- d) Sai: Vì $d = 2 > 0$ nên $(u_n)$ là dãy số tăng ngặt.",
        topic: "Cấp số cộng",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de2-q15",
        type: "true_false",
        index: 15,
        stem: "Cho phương trình lượng giác $\\tan x = \\sqrt{3}$. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Điều kiện xác định của phương trình là $x \\neq \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$.", isCorrect: true },
          { key: "b", text: "Nghiệm của phương trình là $x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$.", isCorrect: true },
          { key: "c", text: "Trong khoảng $(0; 2\\pi)$, phương trình có đúng 3 nghiệm phân biệt.", isCorrect: false },
          { key: "d", text: "Nghiệm âm lớn nhất của phương trình là $x = -\\dfrac{2\\pi}{3}$.", isCorrect: true },
        ],
        explanation: "- a) Đúng: Vì $\\tan x = \\dfrac{\\sin x}{\\cos x}$ nên điều kiện là $\\cos x \\neq 0 \\Leftrightarrow x \\neq \\dfrac{\\pi}{2} + k\\pi$.\n- b) Đúng: $\\tan x = \\sqrt{3} = \\tan\\dfrac{\\pi}{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$.\n- c) Sai: Trong $(0; 2\\pi)$ chỉ có 2 nghiệm: $k = 0 \\Rightarrow x = \\dfrac{\\pi}{3}$ và $k = 1 \\Rightarrow x = \\dfrac{4\\pi}{3}$.\n- d) Đúng: Nghiệm âm lớn nhất ứng với $k = -1 \\Rightarrow x = \\dfrac{\\pi}{3} - \\pi = -\\dfrac{2\\pi}{3}$.",
        topic: "Phương trình lượng giác cơ bản",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de2-q16",
        type: "true_false",
        index: 16,
        stem: "Thống kê điểm kiểm tra môn Toán của 45 học sinh theo mẫu ghép nhóm: $[3{,}5; 5{,}0)$ có 4 học sinh, $[5{,}0; 6{,}5)$ có 18 học sinh, $[6{,}5; 8{,}0)$ có 15 học sinh, $[8{,}0; 10{,}0)$ có 8 học sinh. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Tổng số học sinh tham gia làm bài kiểm tra là $n = 45$.", isCorrect: true },
          { key: "b", text: "Giá trị đại diện của nhóm $[6{,}5; 8{,}0)$ là $7{,}25$.", isCorrect: true },
          { key: "c", text: "Tần số tích lũy của nhóm thứ hai $[5{,}0; 6{,}5)$ là 22.", isCorrect: true },
          { key: "d", text: "Nhóm chứa mốt là nhóm $[8{,}0; 10{,}0)$ vì có các điểm số cao nhất.", isCorrect: false },
        ],
        explanation: "- a) Đúng: Cỡ mẫu $n = 4 + 18 + 15 + 8 = 45$.\n- b) Đúng: Giá trị đại diện $c_3 = \\dfrac{6{,}5 + 8{,}0}{2} = 7{,}25$.\n- c) Đúng: Tần số tích lũy nhóm 2 là $cf_2 = 4 + 18 = 22$.\n- d) Sai: Nhóm chứa mốt là nhóm có tần số lớn nhất. Ở đây nhóm $[5{,}0; 6{,}5)$ có tần số lớn nhất là $m_2 = 18$, nên nhóm chứa mốt là $[5{,}0; 6{,}5)$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de2-q17",
        type: "short_answer",
        index: 17,
        stem: "Một cabin của vòng quay Mặt Trời có độ cao so với mặt đất (tính bằng mét) sau $t$ phút ($t \\ge 0$) chuyển động được xác định bởi công thức: $h(t) = 55 - 45\\cos\\left(\\dfrac{\\pi t}{15}\\right)$. Hỏi độ cao lớn nhất mà cabin đạt được so với mặt đất là bao nhiêu mét?",
        correctAnswer: "100",
        acceptableAnswers: ["100","100m","100 m"],
        explanation: "Ta có: $-1 \\le \\cos\\left(\\dfrac{\\pi t}{15}\\right) \\le 1$ với mọi $t \\ge 0$. Do đó: $-45 \\le -45\\cos\\left(\\dfrac{\\pi t}{15}\\right) \\le 45 \\Rightarrow h(t) \\le 55 + 45 = 100\\text{ m}$. Độ cao lớn nhất đạt được khi $\\cos\\left(\\dfrac{\\pi t}{15}\\right) = -1 \\Leftrightarrow \\dfrac{\\pi t}{15} = \\pi + k2\\pi \\Leftrightarrow t = 15 + 30k$ ($t = 15$ phút). Vậy độ cao lớn nhất là 100 mét.",
        topic: "Toán thực tế - Vòng quay Ferris & Lượng giác",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de2-q18",
        type: "short_answer",
        index: 18,
        stem: "Kim giờ của một chiếc đồng hồ treo tường có chiều dài $10\\text{ cm}$. Hỏi trong khoảng thời gian từ $12$ giờ trưa đến $3$ giờ chiều cùng ngày (tức sau $3$ giờ), đầu mút của kim giờ đã vạch nên một cung tròn có độ dài bằng bao nhiêu centimet? (Lấy $\\pi \\approx 3{,}1416$, làm tròn kết quả đến hàng phần mười).",
        correctAnswer: "15.7",
        acceptableAnswers: ["15.7","15,7","15.7cm","15.7 cm"],
        explanation: "Một vòng tròn đồng hồ chia làm 12 giờ ứng với góc quét $2\\pi$ radian. Trong 3 giờ, kim giờ quay được góc: $\\alpha = \\dfrac{3}{12} \\cdot 2\\pi = \\dfrac{\\pi}{2}$ radian. Độ dài cung tròn do đầu kim vạch nên là: $l = R \\cdot \\alpha = 10 \\cdot \\dfrac{\\pi}{2} = 5\\pi \\approx 5 \\times 3{,}1416 = 15{,}708\\text{ cm} \\approx 15{,}7\\text{ cm}$.",
        topic: "Toán thực tế - Kim đồng hồ & Cung tròn",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de2-q19",
        type: "short_answer",
        index: 19,
        stem: "Một người thợ xây một bức tường trang trí hình tam giác bằng các viên gạch xếp chồng lên nhau. Hàng trên cùng (hàng 1) có đúng $1$ viên gạch, mỗi hàng bên dưới đều nhiều hơn hàng ngay phía trên nó $2$ viên gạch. Biết bức tường xây được tổng cộng $25$ hàng gạch. Hỏi người thợ đã sử dụng tất cả bao nhiêu viên gạch?",
        correctAnswer: "625",
        acceptableAnswers: ["625","625 viên"],
        explanation: "Số viên gạch ở mỗi hàng lập thành cấp số cộng có số hạng đầu $u_1 = 1$, công sai $d = 2$, số hàng $n = 25$. Tổng số viên gạch là tổng của 25 số hạng đầu: $S_{25} = \\dfrac{25}{2}[2u_1 + (25 - 1)d] = \\dfrac{25}{2}[2(1) + 24(2)] = \\dfrac{25}{2}[2 + 48] = \\dfrac{25}{2} \\cdot 50 = 25 \\times 25 = 625$ viên gạch.",
        topic: "Toán thực tế - Cấp số cộng tháp gạch",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de2-q20",
        type: "short_answer",
        index: 20,
        stem: "Một loài vi khuẩn cứ sau mỗi chu kỳ $20$ phút thì phân đôi một lần. Giả sử ban đầu trong môi trường nuôi cấy có $50$ cá thể vi khuẩn. Hỏi sau đúng $3$ giờ nuôi cấy, trong môi trường có tất cả bao nhiêu cá thể vi khuẩn? (Biết không có vi khuẩn nào bị chết).",
        correctAnswer: "25600",
        acceptableAnswers: ["25600","25600 con","25600 cá thể"],
        explanation: "Thời gian 3 giờ đổi ra phút là $3 \\times 60 = 180$ phút. Số lần phân chia của vi khuẩn là: $n = \\dfrac{180}{20} = 9$ lần. Số lượng vi khuẩn ban đầu là $u_0 = 50$, sau mỗi lần phân đôi tăng gấp 2 lần (công bội $q = 2$). Số vi khuẩn sau 9 lần phân chia là: $u_9 = 50 \\cdot 2^9 = 50 \\cdot 512 = 25600$ cá thể.",
        topic: "Toán thực tế - Cấp số nhân phân chia vi khuẩn",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de2-q21",
        type: "short_answer",
        index: 21,
        stem: "Khảo sát năng suất lúa (tạ/ha) của 50 thửa ruộng: $[50; 55)$ có 8 thửa; $[55; 60)$ có 16 thửa; $[60; 65)$ có 18 thửa; $[65; 70)$ có 8 thửa. Tính trung vị $M_e$ của mẫu số liệu ghép nhóm trên (làm tròn kết quả đến chữ số thập phân thứ hai).",
        correctAnswer: "60.28",
        acceptableAnswers: ["60.28","60,28","60.3"],
        explanation: "Cỡ mẫu $n = 50 \\Rightarrow \\dfrac{n}{2} = 25$. Tần số tích lũy: $cf_1 = 8$, $cf_2 = 24 < 25 < cf_3 = 42$. Nhóm chứa trung vị là $[60; 65)$ có đầu mút trái $a_3 = 60$, độ dài $h = 5$, tần số $m_3 = 18$, tần số tích lũy nhóm trước $cf_2 = 24$. Áp dụng công thức: $M_e = a_3 + \\dfrac{\\dfrac{n}{2} - cf_2}{m_3} \\cdot h = 60 + \\dfrac{25 - 24}{18} \\cdot 5 = 60 + \\dfrac{5}{18} \\approx 60 + 0{,}2778 \\approx 60{,}28$ tạ/ha.",
        topic: "Trung vị mẫu số liệu ghép nhóm",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de2-q22",
        type: "short_answer",
        index: 22,
        stem: "Cho mẫu số liệu ghép nhóm về năng suất lúa của 50 thửa ruộng ở Câu 21. Hãy tính mốt $M_o$ của mẫu số liệu ghép nhóm này (làm tròn kết quả đến chữ số thập phân thứ hai).",
        correctAnswer: "60.83",
        acceptableAnswers: ["60.83","60,83","60.8"],
        explanation: "Nhóm chứa mốt là nhóm $[60; 65)$ có tần số lớn nhất $m_3 = 18$. Các tần số liền kề: $m_2 = 16$, $m_4 = 8$. Đầu mút trái $a_3 = 60$, độ dài $h = 5$. Áp dụng công thức tính mốt của mẫu ghép nhóm: $M_o = a_3 + \\dfrac{m_3 - m_2}{(m_3 - m_2) + (m_3 - m_4)} \\cdot h = 60 + \\dfrac{18 - 16}{(18 - 16) + (18 - 8)} \\cdot 5 = 60 + \\dfrac{2}{2 + 10} \\cdot 5 = 60 + \\dfrac{10}{12} = 60 + \\dfrac{5}{6} \\approx 60 + 0{,}8333 \\approx 60{,}83$.",
        topic: "Mốt của mẫu số liệu ghép nhóm",
        difficulty: "VD",
      },
    ],
  },
  "t11-gk1-de3": {
    id: "t11-gk1-de3",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 11 (Đề số 3)",
    grade: "lop-11",
    gradeNumber: 11,
    examType: "giua-ky-1",
    category: "LOP_11",
    subtitle: "Cấu trúc chuẩn ma trận: 4 điểm Nhận biết - 3 điểm Thông hiểu - 3 điểm Vận dụng (Chương I, II, III)",
    durationMinutes: 90,
    totalQuestions: 22,
    questions: [
      {
        id: "t11-gk1-de3-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Đổi góc có số đo $\\dfrac{2\\pi}{3}$ radian sang đơn vị độ, ta được kết quả là:",
        options: [
          { key: "A", text: "$120^\\circ$" },
          { key: "B", text: "$135^\\circ$" },
          { key: "C", text: "$150^\\circ$" },
          { key: "D", text: "$60^\\circ$" },
        ],
        correctKey: "A",
        explanation: "Ta có: $\\dfrac{2\\pi}{3}$ rad $= \\dfrac{2\\pi}{3} \\cdot \\dfrac{180^\\circ}{\\pi} = \\dfrac{2 \\times 180^\\circ}{3} = 120^\\circ$.",
        topic: "Giá trị lượng giác của góc lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Cho góc lượng giác $\\alpha$ bất kì. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "$\\sin 2\\alpha = \\sin\\alpha\\cos\\alpha$" },
          { key: "B", text: "$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$" },
          { key: "C", text: "$\\sin 2\\alpha = 2\\sin\\alpha$" },
          { key: "D", text: "$\\sin 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha$" },
        ],
        correctKey: "B",
        explanation: "Theo công thức nhân đôi: $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$.",
        topic: "Công thức lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q3",
        type: "multiple_choice",
        index: 3,
        stem: "Hàm số lượng giác nào sau đây là hàm số lẻ?",
        options: [
          { key: "A", text: "$y = \\cos x$" },
          { key: "B", text: "$y = \\cos 2x$" },
          { key: "C", text: "$y = \\sin x$" },
          { key: "D", text: "$y = \\cos^2 x$" },
        ],
        correctKey: "C",
        explanation: "Hàm số $y = \\sin x$ có tập xác định $D = \\mathbb{R}$ đối xứng và $\\sin(-x) = -\\sin x = -y(x)$, do đó là hàm số lẻ. Các hàm số chứa cos là hàm số chẵn.",
        topic: "Hàm số lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q4",
        type: "multiple_choice",
        index: 4,
        stem: "Tất cả các nghiệm của phương trình lượng giác cơ bản $\\tan x = 0$ là:",
        options: [
          { key: "A", text: "$x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "B", text: "$x = \\dfrac{\\pi}{4} + k\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "C", text: "$x = k2\\pi \\ (k \\in \\mathbb{Z})$" },
          { key: "D", text: "$x = k\\pi \\ (k \\in \\mathbb{Z})$" },
        ],
        correctKey: "D",
        explanation: "Phương trình $\\tan x = 0 \\Leftrightarrow x = k\\pi \\ (k \\in \\mathbb{Z})$.",
        topic: "Phương trình lượng giác cơ bản",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q5",
        type: "multiple_choice",
        index: 5,
        stem: "Dãy số $(u_n)$ nào sau đây là một dãy số tăng?",
        options: [
          { key: "A", text: "$u_n = 2n + 3$" },
          { key: "B", text: "$u_n = -3n + 1$" },
          { key: "C", text: "$u_n = \\dfrac{1}{n}$" },
          { key: "D", text: "$u_n = (-1)^n$" },
        ],
        correctKey: "A",
        explanation: "Xét $u_n = 2n + 3$: ta có $u_{n+1} - u_n = [2(n+1) + 3] - (2n + 3) = 2 > 0$ với mọi $n \\ge 1$, nên dãy số tăng ngặt.",
        topic: "Dãy số",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q6",
        type: "multiple_choice",
        index: 6,
        stem: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = -2$. Số hạng thứ hai $u_2$ bằng:",
        options: [
          { key: "A", text: "7" },
          { key: "B", text: "3" },
          { key: "C", text: "-10" },
          { key: "D", text: "1" },
        ],
        correctKey: "B",
        explanation: "Theo định nghĩa cấp số cộng: $u_2 = u_1 + d = 5 + (-2) = 3$.",
        topic: "Cấp số cộng",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q7",
        type: "multiple_choice",
        index: 7,
        stem: "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 4$ và công bội $q = 3$. Công thức số hạng tổng quát $u_n$ ($n \\ge 1$) là:",
        options: [
          { key: "A", text: "$u_n = 4 + (n-1)3$" },
          { key: "B", text: "$u_n = 4 \\cdot 3^n$" },
          { key: "C", text: "$u_n = 4 \\cdot 3^{n-1}$" },
          { key: "D", text: "$u_n = 12^{n-1}$" },
        ],
        correctKey: "C",
        explanation: "Công thức số hạng tổng quát của cấp số nhân là $u_n = u_1 \\cdot q^{n-1} = 4 \\cdot 3^{n-1}$.",
        topic: "Cấp số nhân",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q8",
        type: "multiple_choice",
        index: 8,
        stem: "Trong mẫu số liệu ghép nhóm, độ dài của mỗi nhóm số liệu $[a_i; a_{i+1})$ được xác định bằng công thức nào sau đây?",
        options: [
          { key: "A", text: "$\\dfrac{a_i + a_{i+1}}{2}$" },
          { key: "B", text: "$a_i + a_{i+1}$" },
          { key: "C", text: "$a_i - a_{i+1}$" },
          { key: "D", text: "$a_{i+1} - a_i$" },
        ],
        correctKey: "D",
        explanation: "Độ dài của nhóm $[a_i; a_{i+1})$ bằng hiệu số giữa đầu mút phải và đầu mút trái: $h = a_{i+1} - a_i$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q9",
        type: "multiple_choice",
        index: 9,
        stem: "Giá trị của biểu thức $P = \\cos 75^\\circ \\cos 15^\\circ - \\sin 75^\\circ \\sin 15^\\circ$ bằng:",
        options: [
          { key: "A", text: "0" },
          { key: "B", text: "1" },
          { key: "C", text: "$\\dfrac{1}{2}$" },
          { key: "D", text: "$\\dfrac{\\sqrt{3}}{2}$" },
        ],
        correctKey: "A",
        explanation: "Áp dụng công thức cộng: $\\cos a \\cos b - \\sin a \\sin b = \\cos(a + b)$. Do đó $P = \\cos(75^\\circ + 15^\\circ) = \\cos 90^\\circ = 0$.",
        topic: "Công thức lượng giác",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de3-q10",
        type: "multiple_choice",
        index: 10,
        stem: "Số nghiệm của phương trình lượng giác $\\cos x = 1$ trên đoạn $[0; 4\\pi]$ là:",
        options: [
          { key: "A", text: "2" },
          { key: "B", text: "3" },
          { key: "C", text: "4" },
          { key: "D", text: "5" },
        ],
        correctKey: "B",
        explanation: "Phương trình $\\cos x = 1 \\Leftrightarrow x = k2\\pi \\ (k \\in \\mathbb{Z})$. Điều kiện $0 \\le k2\\pi \\le 4\\pi \\Leftrightarrow 0 \\le k \\le 2$. Vì $k \\in \\mathbb{Z}$ nên $k \\in \\{0; 1; 2\\}$, tương ứng với 3 nghiệm: $x = 0$, $x = 2\\pi$, $x = 4\\pi$.",
        topic: "Phương trình lượng giác cơ bản",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de3-q11",
        type: "multiple_choice",
        index: 11,
        stem: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Tổng của 10 số hạng đầu tiên $S_{10}$ bằng:",
        options: [
          { key: "A", text: "145" },
          { key: "B", text: "175" },
          { key: "C", text: "155" },
          { key: "D", text: "165" },
        ],
        correctKey: "C",
        explanation: "Áp dụng công thức tổng $n$ số hạng đầu của cấp số cộng: $S_n = \\dfrac{n}{2}[2u_1 + (n-1)d]$. Với $n = 10$: $S_{10} = \\dfrac{10}{2}[2(2) + 9(3)] = 5[4 + 27] = 5 \\cdot 31 = 155$.",
        topic: "Cấp số cộng",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de3-q12",
        type: "multiple_choice",
        index: 12,
        stem: "Khảo sát thời gian hoàn thành cự ly 100m của 30 học sinh: nhóm $[12; 13)$ có 5 học sinh; nhóm $[13; 14)$ có 12 học sinh; nhóm $[14; 15)$ có 9 học sinh; nhóm $[15; 16)$ có 4 học sinh. Tần số tích lũy của nhóm $[13; 14)$ là:",
        options: [
          { key: "A", text: "5" },
          { key: "B", text: "12" },
          { key: "C", text: "26" },
          { key: "D", text: "17" },
        ],
        correctKey: "D",
        explanation: "Tần số tích lũy của nhóm thứ hai $[13; 14)$ là tổng tần số của các nhóm từ nhóm 1 đến nhóm 2: $cf_2 = m_1 + m_2 = 5 + 12 = 17$.",
        topic: "Mẫu số liệu ghép nhóm",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de3-q13",
        type: "true_false",
        index: 13,
        stem: "Cho góc lượng giác $\\alpha$ thỏa mãn $0 < \\alpha < \\dfrac{\\pi}{2}$ (góc phần tư thứ I). Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Cả $\\sin\\alpha$ và $\\cos\\alpha$ đều mang giá trị dương.", isCorrect: true },
          { key: "b", text: "$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$.", isCorrect: true },
          { key: "c", text: "$\\sin(\\alpha + \\pi) = \\sin\\alpha$.", isCorrect: false },
          { key: "d", text: "$\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$.", isCorrect: true },
        ],
        explanation: "- a) Đúng: Trong góc phần tư thứ I, cả hoành độ và tung độ đều dương nên $\\sin\\alpha > 0$ và $\\cos\\alpha > 0$.\n- b) Đúng: Định nghĩa hàm tang là tỉ số giữa sin và cos.\n- c) Sai: Theo công thức hơn kém $\\pi$, $\\sin(\\alpha + \\pi) = -\\sin\\alpha$.\n- d) Đúng: Theo tính chất hai góc phụ nhau, $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$.",
        topic: "Giá trị lượng giác của góc lượng giác",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q14",
        type: "true_false",
        index: 14,
        stem: "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 7$ và số hạng thứ hai $u_2 = 11$. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Công sai của cấp số cộng là $d = 4$.", isCorrect: true },
          { key: "b", text: "Số hạng thứ ba của cấp số cộng là $u_3 = 15$.", isCorrect: true },
          { key: "c", text: "Công thức số hạng tổng quát của cấp số cộng là $u_n = 4n + 3$ ($n \\ge 1$).", isCorrect: true },
          { key: "d", text: "Số 100 là một số hạng của cấp số cộng $(u_n)$.", isCorrect: false },
        ],
        explanation: "- a) Đúng: Công sai $d = u_2 - u_1 = 11 - 7 = 4$.\n- b) Đúng: $u_3 = u_2 + d = 11 + 4 = 15$.\n- c) Đúng: $u_n = u_1 + (n-1)d = 7 + (n-1)4 = 4n + 3$.\n- d) Sai: Giả sử $u_n = 100 \\Leftrightarrow 4n + 3 = 100 \\Leftrightarrow 4n = 97 \\Leftrightarrow n = 24{,}25 \\notin \\mathbb{N}^*$, do đó 100 không thuộc cấp số cộng.",
        topic: "Cấp số cộng",
        difficulty: "NB",
      },
      {
        id: "t11-gk1-de3-q15",
        type: "true_false",
        index: 15,
        stem: "Cho phương trình lượng giác $\\sin 2x - \\cos x = 0$. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Phương trình tương đương với $\\cos x(2\\sin x - 1) = 0$.", isCorrect: true },
          { key: "b", text: "Phương trình có họ nghiệm $x = \\dfrac{\\pi}{2} + k\\pi$ và $x = \\dfrac{\\pi}{6} + k2\\pi$, $x = \\dfrac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$).", isCorrect: true },
          { key: "c", text: "Trên khoảng $(0; \\pi)$, phương trình có đúng 2 nghiệm phân biệt.", isCorrect: false },
          { key: "d", text: "Nghiệm dương nhỏ nhất của phương trình đã cho là $x = \\dfrac{\\pi}{6}$.", isCorrect: true },
        ],
        explanation: "- a) Đúng: Áp dụng công thức nhân đôi $\\sin 2x = 2\\sin x\\cos x$, ta có $2\\sin x\\cos x - \\cos x = 0 \\Leftrightarrow \\cos x(2\\sin x - 1) = 0$.\n- b) Đúng: $\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$; $2\\sin x - 1 = 0 \\Leftrightarrow \\sin x = \\dfrac{1}{2} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\dfrac{5\\pi}{6} + k2\\pi$.\n- c) Sai: Trên khoảng $(0; \\pi)$ có đúng 3 nghiệm: $x = \\dfrac{\\pi}{6}, x = \\dfrac{\\pi}{2}, x = \\dfrac{5\\pi}{6}$.\n- d) Đúng: Trong các nghiệm dương, nghiệm nhỏ nhất là $x = \\dfrac{\\pi}{6}$.",
        topic: "Phương trình lượng giác",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de3-q16",
        type: "true_false",
        index: 16,
        stem: "Thống kê mức lương hàng tháng (triệu đồng) của 60 công nhân phân xưởng theo mẫu số liệu ghép nhóm. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Cỡ mẫu của mẫu số liệu là $n = 60$.", isCorrect: true },
          { key: "b", text: "Tứ phân vị thứ nhất $Q_1$ chia mẫu số liệu thành 2 phần: $25\\%$ giá trị nhỏ hơn và $75\\%$ giá trị lớn hơn.", isCorrect: true },
          { key: "c", text: "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ luôn nhận giá trị không âm.", isCorrect: true },
          { key: "d", text: "Trong mọi mẫu số liệu ghép nhóm, số trung bình luôn bằng trung vị.", isCorrect: false },
        ],
        explanation: "- a) Đúng: Cỡ mẫu là tổng số quan sát $n = 60$.\n- b) Đúng: Theo định nghĩa, $Q_1$ chia 25% số liệu phía dưới và 75% số liệu phía trên.\n- c) Đúng: Vì $Q_3 \\ge Q_1$ nên $\\Delta_Q = Q_3 - Q_1 \\ge 0$.\n- d) Sai: Số trung bình chỉ bằng trung vị khi phân bố dữ liệu hoàn toàn đối xứng, trong thực tế hai giá trị này thường khác nhau.",
        topic: "Các số đặc trưng đo xu thế trung tâm",
        difficulty: "TH",
      },
      {
        id: "t11-gk1-de3-q17",
        type: "short_answer",
        index: 17,
        stem: "Nhiệt độ ngoài trời $T$ (tính bằng $^\\circ\\text{C}$) tại một thành phố vào thời điểm $t$ giờ ($0 \\le t \\le 24$) trong ngày được dự báo bởi công thức: $T(t) = 25 + 5\\sin\\left(\\dfrac{\\pi(t - 9)}{12}\\right)$. Hỏi vào lúc mấy giờ trong ngày thì nhiệt độ ngoài trời đạt giá trị cao nhất?",
        correctAnswer: "15",
        acceptableAnswers: ["15","15 giờ","15h"],
        explanation: "Ta có: $\\sin\\left(\\dfrac{\\pi(t - 9)}{12}\\right) \\le 1$. Do đó: $T(t) \\le 25 + 5(1) = 30^\\circ\\text{C}$. Dấu \"=\" xảy ra khi: $\\sin\\left(\\dfrac{\\pi(t - 9)}{12}\\right) = 1 \\Leftrightarrow \\dfrac{\\pi(t - 9)}{12} = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow t - 9 = 6 + 24k \\Leftrightarrow t = 15 + 24k$. Vì $0 \\le t \\le 24$ nên chọn $k = 0 \\Rightarrow t = 15$. Vậy vào lúc 15 giờ trong ngày (3 giờ chiều), nhiệt độ đạt mức cao nhất là $30^\\circ\\text{C}$.",
        topic: "Toán thực tế - Hàm số lượng giác & Nhiệt độ",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de3-q18",
        type: "short_answer",
        index: 18,
        stem: "Một bánh xe có bán kính $R = 0{,}5\\text{ m}$ quay đều với tốc độ góc $\\omega = 6\\pi\\text{ rad/s}$. Tính tốc độ dài chuyển động của một điểm nằm trên vành bánh xe theo đơn vị mét trên giây (m/s)? (Lấy $\\pi \\approx 3{,}1416$, làm tròn kết quả đến hàng phần mười).",
        correctAnswer: "9.4",
        acceptableAnswers: ["9.4","9,4","9.4 m/s","9.42"],
        explanation: "Tốc độ dài của một điểm trên vành bánh xe chuyển động tròn đều là: $v = R \\cdot \\omega = 0{,}5 \\cdot 6\\pi = 3\\pi\\text{ m/s}$. Với $\\pi \\approx 3{,}1416$, ta có: $v \\approx 3 \\times 3{,}1416 = 9{,}4248\\text{ m/s} \\approx 9{,}4\\text{ m/s}$.",
        topic: "Toán thực tế - Tốc độ góc & Cung tròn",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de3-q19",
        type: "short_answer",
        index: 19,
        stem: "Một công ty khoan giếng đưa ra mức giá khoan một cái giếng sâu $30\\text{ m}$ như sau: giá của mét khoan đầu tiên là $200\\,000$ đồng, kể từ mét khoan thứ hai trở đi, giá của mỗi mét khoan tăng thêm $30\\,000$ đồng so với mét liền trước nó. Hỏi để hoàn thành cái giếng sâu $30\\text{ m}$ đó, khách hàng phải trả tổng chi phí là bao nhiêu triệu đồng?",
        correctAnswer: "19.05",
        acceptableAnswers: ["19.05","19,05","19.05 triệu","19050000"],
        explanation: "Chi phí cho mỗi mét khoan lập thành cấp số cộng với số hạng đầu $u_1 = 200\\,000$ đồng, công sai $d = 30\\,000$ đồng và số mét khoan $n = 30$. Tổng chi phí là: $S_{30} = \\dfrac{30}{2}[2u_1 + (30 - 1)d] = 15[2(200\\,000) + 29(30\\,000)] = 15[400\\,000 + 870\\,000] = 15 \\times 1\\,270\\,000 = 19\\,050\\,000$ đồng $= 19{,}05$ triệu đồng.",
        topic: "Toán thực tế - Cấp số cộng khoan giếng",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de3-q20",
        type: "short_answer",
        index: 20,
        stem: "Trong trò chơi Tháp Hà Nội có $7$ chiếc đĩa kích thước khác nhau nằm trên một cọc theo thứ tự từ lớn đến nhỏ. Biết rằng số bước di chuyển tối thiểu để chuyển toàn bộ $n$ chiếc đĩa sang cọc khác theo đúng luật chơi là $S_n = 2^n - 1$. Hỏi để chuyển toàn bộ $7$ chiếc đĩa sang một cọc khác thì người chơi cần thực hiện ít nhất bao nhiêu bước di chuyển?",
        correctAnswer: "127",
        acceptableAnswers: ["127","127 bước"],
        explanation: "Số bước di chuyển tối thiểu với $n = 7$ chiếc đĩa là: $S_7 = 2^7 - 1 = 128 - 1 = 127$ bước.",
        topic: "Toán thực tế - Dãy số Tháp Hà Nội",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de3-q21",
        type: "short_answer",
        index: 21,
        stem: "Khảo sát thời gian hoàn thành cự ly chạy $100\\text{ m}$ (giây) của 30 học sinh: $[12{,}0; 13{,}0)$ có 5 học sinh; $[13{,}0; 14{,}0)$ có 12 học sinh; $[14{,}0; 15{,}0)$ có 9 học sinh; $[15{,}0; 16{,}0)$ có 4 học sinh. Hãy tính thời gian chạy trung bình $\\bar{x}$ của 30 học sinh trên (tính bằng giây, làm tròn kết quả đến hàng phần mười).",
        correctAnswer: "13.9",
        acceptableAnswers: ["13.9","13,9","13.9 giây"],
        explanation: "Giá trị đại diện các nhóm: $c_1 = 12{,}5; c_2 = 13{,}5; c_3 = 14{,}5; c_4 = 15{,}5$. Thời gian chạy trung bình là: $\\bar{x} = \\dfrac{5(12{,}5) + 12(13{,}5) + 9(14{,}5) + 4(15{,}5)}{30} = \\dfrac{62{,}5 + 162 + 130{,}5 + 62}{30} = \\dfrac{417}{30} = 13{,}9$ giây.",
        topic: "Số trung bình mẫu số liệu ghép nhóm",
        difficulty: "VD",
      },
      {
        id: "t11-gk1-de3-q22",
        type: "short_answer",
        index: 22,
        stem: "Cho mẫu số liệu ghép nhóm về thời gian chạy $100\\text{ m}$ của 30 học sinh ở Câu 21. Hãy tính tứ phân vị thứ ba $Q_3$ của mẫu số liệu ghép nhóm này (tính bằng giây, làm tròn kết quả đến chữ số thập phân thứ hai).",
        correctAnswer: "14.61",
        acceptableAnswers: ["14.61","14,61","14.6"],
        explanation: "Cỡ mẫu $n = 30 \\Rightarrow \\dfrac{3n}{4} = \\dfrac{3 \\times 30}{4} = 22{,}5$. Tần số tích lũy: $cf_1 = 5, cf_2 = 17 < 22{,}5 < cf_3 = 26$. Nhóm chứa $Q_3$ là nhóm $[14{,}0; 15{,}0)$ có đầu mút trái $a_3 = 14{,}0$, độ dài $h = 1{,}0$, tần số $m_3 = 9$, tần số tích lũy của nhóm trước là $cf_2 = 17$. Áp dụng công thức: $Q_3 = a_3 + \\dfrac{\\dfrac{3n}{4} - cf_2}{m_3} \\cdot h = 14{,}0 + \\dfrac{22{,}5 - 17}{9} \\cdot 1 = 14 + \\dfrac{5{,}5}{9} = 14 + \\dfrac{11}{18} \\approx 14 + 0{,}6111 \\approx 14{,}61$ giây.",
        topic: "Tứ phân vị mẫu số liệu ghép nhóm",
        difficulty: "VD",
      },
    ],
  },

  "t11-ck1": {
    id: "t11-ck1",
    title: "Đề Thi Cuối Học Kỳ 1 - Toán 11 (KNTT)",
    grade: "lop-11",
    gradeNumber: 11,
    examType: "cuoi-ky-1",
    category: "LOP_11",
    subtitle: "Giới hạn dãy số & hàm số, Hàm số liên tục, Quan hệ song song trong không gian",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t11-ck1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Tính giới hạn $\\lim_{n \\to +\\infty} \\frac{2n + 1}{n - 3}$:",
        options: [
          { key: "A", text: "2" },
          { key: "B", text: "1" },
          { key: "C", text: "-3" },
          { key: "D", text: "+∞" },
        ],
        correctKey: "A",
        explanation: "Chia cả tử và mẫu cho $n$: $\\lim \\frac{2 + 1/n}{1 - 3/n} = \\frac{2}{1} = 2$.",
        topic: "Giới hạn dãy số",
        difficulty: "NB",
      },
      {
        id: "t11-ck1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Cho hai đường thẳng phân biệt $a$ và $b$ cùng song song với mặt phẳng $(P)$. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          { key: "A", text: "Vị trí của a và b có thể song song, cắt nhau hoặc chéo nhau" },
          { key: "B", text: "a và b chắc chắn song song với nhau" },
          { key: "C", text: "a và b chắc chắn chéo nhau" },
          { key: "D", text: "a và b vuông góc với nhau" },
        ],
        correctKey: "A",
        explanation: "Hai đường thẳng cùng song song với một mặt phẳng thì có thể song song, cắt nhau hoặc chéo nhau.",
        topic: "Đường thẳng song song mặt phẳng",
        difficulty: "NB",
      },
      {
        id: "t11-ck1-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính liên tục của hàm số $f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & \\text{khi } x \\ne 2 \\\\ 4 & \\text{khi } x = 2 \\end{cases}$:",
        subQuestions: [
          { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R}$.", isCorrect: true },
          { key: "b", text: "Giới hạn $\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x + 2) = 4$.", isCorrect: true },
          { key: "c", text: "Giá trị $f(2) = 4$.", isCorrect: true },
          { key: "d", text: "Hàm số bị gián đoạn tại điểm $x = 2$.", isCorrect: false },
        ],
        explanation: "Vì $\\lim_{x \\to 2} f(x) = f(2) = 4$ nên hàm số LIÊN TỤC tại $x = 2$. Khẳng định d là Sai.",
        topic: "Hàm số liên tục",
        difficulty: "TH",
      },
      {
        id: "t11-ck1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$:",
        subQuestions: [
          { key: "a", text: "Giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng $SO$.", isCorrect: true },
          { key: "b", text: "Đường thẳng $AB$ song song với mặt phẳng $(SCD)$.", isCorrect: true },
          { key: "c", text: "Đường thẳng $CD$ song song với mặt phẳng $(SAB)$.", isCorrect: true },
          { key: "d", text: "Mặt phẳng $(SAB)$ song song với mặt phẳng $(SCD)$.", isCorrect: false },
        ],
        explanation: "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ nên cắt nhau theo giao tuyến qua $S$ song song với $AB$ và $CD$, không thể song song. Ý d là Sai.",
        topic: "Giao tuyến và quan hệ song song",
        difficulty: "TH",
      },
      {
        id: "t11-ck1-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính giới hạn $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
        correctAnswer: "6",
        acceptableAnswers: ["6"],
        explanation: "$\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x + 3) = 6$.",
        topic: "Khử dạng vô định 0/0",
        difficulty: "NB",
      },
      {
        id: "t11-ck1-q6",
        type: "short_answer",
        index: 6,
        stem: "Tính tổng vô hạn của cấp số nhân lùi vô hạn có số hạng đầu $u_1 = 1$ và công bội $q = \\frac{1}{2}$: $S = ?$",
        correctAnswer: "2",
        acceptableAnswers: ["2"],
        explanation: "$S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 0,5} = 2$.",
        topic: "Tổng cấp số nhân lùi vô hạn",
        difficulty: "TH",
      },
    ],
  },

  "t11-gk2": {
    id: "t11-gk2",
    title: "Đề Thi Giữa Học Kỳ 2 - Toán 11 (KNTT)",
    grade: "lop-11",
    gradeNumber: 11,
    examType: "giua-ky-2",
    category: "LOP_11",
    subtitle: "Hàm số mũ & logarit, Phương trình mũ - logarit & Quan hệ vuông góc trong không gian",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t11-gk2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Giá trị của $\\log_2 16$ bằng:",
        options: [
          { key: "A", text: "4" },
          { key: "B", text: "8" },
          { key: "C", text: "2" },
          { key: "D", text: "16" },
        ],
        correctKey: "A",
        explanation: "Vì $2^4 = 16$ nên $\\log_2 16 = 4$.",
        topic: "Logarit cơ bản",
        difficulty: "NB",
      },
      {
        id: "t11-gk2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Nghiệm của phương trình mũ $3^{x - 1} = 27$ là:",
        options: [
          { key: "A", text: "x = 4" },
          { key: "B", text: "x = 3" },
          { key: "C", text: "x = 2" },
          { key: "D", text: "x = 5" },
        ],
        correctKey: "A",
        explanation: "$3^{x-1} = 3^3 \\Leftrightarrow x - 1 = 3 \\Leftrightarrow x = 4$.",
        topic: "Phương trình mũ",
        difficulty: "NB",
      },
      {
        id: "t11-gk2-q3",
        type: "true_false",
        index: 3,
        stem: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $SA \\perp (ABC)$:",
        subQuestions: [
          { key: "a", text: "Đường thẳng $SA$ vuông góc với cạnh đáy $BC$.", isCorrect: true },
          { key: "b", text: "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAB)$.", isCorrect: true },
          { key: "c", text: "Tam giác $SBC$ là tam giác vuông tại $B$.", isCorrect: true },
          { key: "d", text: "Đường thẳng $SC$ vuông góc với mặt phẳng đáy $(ABC)$.", isCorrect: false },
        ],
        explanation: "Chỉ có $SA \\perp (ABC)$, đường thẳng $SC$ là đường xiên chứ không vuông góc đáy. Ý d là Sai.",
        topic: "Đường thẳng vuông góc mặt phẳng",
        difficulty: "TH",
      },
      {
        id: "t11-gk2-q4",
        type: "true_false",
        index: 4,
        stem: "Xét các tính chất của hàm số logarit và hàm số mũ:",
        subQuestions: [
          { key: "a", text: "Hàm số $y = a^x$ ($a > 0, a \\ne 1$) có tập xác định là $\\mathbb{R}$ và tập giá trị $(0; +\\infty)$.", isCorrect: true },
          { key: "b", text: "Hàm số $y = \\log_a x$ ($a > 0, a \\ne 1$) có tập xác định $(0; +\\infty)$.", isCorrect: true },
          { key: "c", text: "Khi $a > 1$, hàm số $y = a^x$ đồng biến trên $\\mathbb{R}$.", isCorrect: true },
          { key: "d", text: "Đồ thị hàm số $y = 2^x$ luôn cắt trục hoành tại điểm có hoành độ bằng 1.", isCorrect: false },
        ],
        explanation: "$2^x > 0$ với mọi $x$, đồ thị không bao giờ cắt trục hoành. Ý d là Sai.",
        topic: "Hàm số mũ và logarit",
        difficulty: "TH",
      },
      {
        id: "t11-gk2-q5",
        type: "short_answer",
        index: 5,
        stem: "Nghiệm của phương trình $\\log_3 (2x - 1) = 2$ là $x = ?$",
        correctAnswer: "5",
        acceptableAnswers: ["5"],
        explanation: "$2x - 1 = 3^2 = 9 \\Rightarrow 2x = 10 \\Rightarrow x = 5$ (thỏa mãn ĐK $2x - 1 > 0$).",
        topic: "Phương trình logarit",
        difficulty: "TH",
      },
      {
        id: "t11-gk2-q6",
        type: "short_answer",
        index: 6,
        stem: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'B'$ và $BC$ bằng bao nhiêu độ?",
        correctAnswer: "90",
        acceptableAnswers: ["90", "90 độ", "90°"],
        explanation: "Vì $A'B' \\parallel AB$ nên góc giữa $A'B'$ và $BC$ bằng góc giữa $AB$ và $BC$. Do $ABCD$ là hình vuông nên $\\widehat{ABC} = 90^\\circ$.",
        topic: "Góc giữa hai đường thẳng trong không gian",
        difficulty: "TH",
      },
    ],
  },

  "t11-ck2": {
    id: "t11-ck2",
    title: "Đề Thi Cuối Học Kỳ 2 - Toán 11 (KNTT)",
    grade: "lop-11",
    gradeNumber: 11,
    examType: "cuoi-ky-2",
    category: "LOP_11",
    subtitle: "Đạo hàm, Ý nghĩa hình học của đạo hàm, Khoảng cách & Thể tích trong không gian",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t11-ck2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Đạo hàm của hàm số $y = x^4 - 2x^2 + 5$ là:",
        options: [
          { key: "A", text: "y' = 4x^3 - 4x" },
          { key: "B", text: "y' = 4x^3 - 2x" },
          { key: "C", text: "y' = x^3 - 4x" },
          { key: "D", text: "y' = 4x^3 - 4x + 5" },
        ],
        correctKey: "A",
        explanation: "Áp dụng $(x^n)' = n x^{n-1}$ và $(C)' = 0$: $y' = 4x^3 - 4x$.",
        topic: "Quy tắc tính đạo hàm",
        difficulty: "NB",
      },
      {
        id: "t11-ck2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Hệ số góc của tiếp tuyến với đồ thị hàm số $y = f(x)$ tại điểm có hoành độ $x_0$ bằng:",
        options: [
          { key: "A", text: "k = f'(x_0)" },
          { key: "B", text: "k = f(x_0)" },
          { key: "C", text: "k = f(x_0)/x_0" },
          { key: "D", text: "k = f''(x_0)" },
        ],
        correctKey: "A",
        explanation: "Ý nghĩa hình học của đạo hàm: Hệ số góc của tiếp tuyến tại $x_0$ là $k = f'(x_0)$.",
        topic: "Ý nghĩa hình học của đạo hàm",
        difficulty: "NB",
      },
      {
        id: "t11-ck2-q3",
        type: "true_false",
        index: 3,
        stem: "Cho hàm số $y = x^3 - 3x + 1$ có đồ thị $(C)$:",
        subQuestions: [
          { key: "a", text: "Đạo hàm $y' = 3x^2 - 3$.", isCorrect: true },
          { key: "b", text: "Phương trình $y' = 0$ có hai nghiệm phân biệt là $x = 1$ và $x = -1$.", isCorrect: true },
          { key: "c", text: "Hệ số góc của tiếp tuyến với đồ thị $(C)$ tại giao điểm với trục tung (x = 0) là $k = -3$.", isCorrect: true },
          { key: "d", text: "Tiếp tuyến tại điểm có hoành độ $x = 1$ có hệ số góc bằng 3.", isCorrect: false },
        ],
        explanation: "Tại $x = 1$: $y'(1) = 3(1)^2 - 3 = 0$ (tiếp tuyến nằm ngang) chứ không phải bằng 3. Ý d là Sai.",
        topic: "Tiếp tuyến đồ thị hàm số",
        difficulty: "TH",
      },
      {
        id: "t11-ck2-q4",
        type: "true_false",
        index: 4,
        stem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$:",
        subQuestions: [
          { key: "a", text: "Khoảng cách từ điểm $S$ đến mặt phẳng $(ABCD)$ chính bằng độ dài đoạn thẳng $SA = a\\sqrt{2}$.", isCorrect: true },
          { key: "b", text: "Diện tích mặt đáy hình vuông là $S_{ABCD} = a^2$.", isCorrect: true },
          { key: "c", text: "Thể tích khối chóp là $V = \\frac{1}{3} a^2 \\cdot a\\sqrt{2} = \\frac{a^3\\sqrt{2}}{3}$.", isCorrect: true },
          { key: "d", text: "Góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ là góc $\\widehat{SCA} = 60^\\circ$.", isCorrect: false },
        ],
        explanation: "Đáy hình vuông cạnh $a \\Rightarrow AC = a\\sqrt{2}$. Vì $SA = AC = a\\sqrt{2}$ nên tam giác $SAC$ vuông cân tại $A$, do đó $\\widehat{SCA} = 45^\\circ \\ne 60^\\circ$. Ý d là Sai.",
        topic: "Thể tích và góc trong không gian",
        difficulty: "VD",
      },
      {
        id: "t11-ck2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính đạo hàm của hàm số $y = \\sin 2x$ tại điểm $x = \\frac{\\pi}{6}$.",
        correctAnswer: "1",
        acceptableAnswers: ["1"],
        explanation: "$y' = (\\sin 2x)' = 2\\cos 2x$. Tại $x = \\frac{\\pi}{6}$: $y' = 2\\cos \\frac{\\pi}{3} = 2 \\times 0,5 = 1$.",
        topic: "Đạo hàm hàm hợp lượng giác",
        difficulty: "TH",
      },
      {
        id: "t11-ck2-q6",
        type: "short_answer",
        index: 6,
        stem: "Một vật chuyển động theo phương trình $s(t) = t^3 - 3t^2 + 9t$ ($t$ tính bằng giây, $s$ tính bằng mét). Tính vận tốc tức thời của vật tại thời điểm $t = 3$ giây (theo m/s):",
        correctAnswer: "18",
        acceptableAnswers: ["18", "18 m/s"],
        explanation: "Vận tốc tức thời là đạo hàm quãng đường: $v(t) = s'(t) = 3t^2 - 6t + 9$. Tại $t = 3$: $v(3) = 3(9) - 6(3) + 9 = 27 - 18 + 9 = 18\\text{ m/s}$.",
        topic: "Ý nghĩa vật lý của đạo hàm",
        difficulty: "VD",
      },
    ],
  },

  // =========================================================================
  // TOÁN 12
  // =========================================================================
  "t12-gk1": {
    id: "t12-gk1",
    title: "Đề Thi Giữa Học Kỳ 1 - Toán 12 (KNTT)",
    grade: "lop-12",
    gradeNumber: 12,
    examType: "giua-ky-1",
    category: "LOP_12",
    subtitle: "Tính đơn điệu, Cực trị, Giá trị lớn nhất - nhỏ nhất & Đường tiệm cận của đồ thị hàm số",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t12-gk1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Cho hàm số $y = f(x)$ có bảng xét dấu đạo hàm: $f'(x) > 0$ trên $(-\\infty; 1)$ và $(3; +\\infty)$, $f'(x) < 0$ trên $(1; 3)$. Hàm số đã cho đồng biến trên khoảng nào?",
        options: [
          { key: "A", text: "(3; +∞)" },
          { key: "B", text: "(1; 3)" },
          { key: "C", text: "(1; +∞)" },
          { key: "D", text: "(-1; 3)" },
        ],
        correctKey: "A",
        explanation: "Hàm số đồng biến khi $f'(x) > 0$, tức là trên khoảng $(-\\infty; 1)$ và $(3; +\\infty)$.",
        topic: "Tính đơn điệu hàm số",
        difficulty: "NB",
      },
      {
        id: "t12-gk1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ có đường tiệm cận đứng là:",
        options: [
          { key: "A", text: "x = -1" },
          { key: "B", text: "x = 2" },
          { key: "C", text: "y = 2" },
          { key: "D", text: "y = -1" },
        ],
        correctKey: "A",
        explanation: "Mẫu thức triệt tiêu tại $x = -1$ và tử thức khác 0 nên tiệm cận đứng là $x = -1$.",
        topic: "Đường tiệm cận của đồ thị",
        difficulty: "NB",
      },
      {
        id: "t12-gk1-q3",
        type: "true_false",
        index: 3,
        stem: "Cho hàm số bậc ba $y = f(x) = x^3 - 3x^2 + 2$ có đồ thị là $(C)$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Đạo hàm $f'(x) = 3x^2 - 6x = 3x(x - 2)$.", isCorrect: true },
          { key: "b", text: "Hàm số đạt cực đại tại điểm $x = 0$ và giá trị cực đại $y_{CĐ} = 2$.", isCorrect: true },
          { key: "c", text: "Hàm số đạt cực tiểu tại điểm $x = 2$ và giá trị cực tiểu $y_{CT} = -2$.", isCorrect: true },
          { key: "d", text: "Đồ thị $(C)$ có tâm đối xứng là gốc tọa độ $O(0; 0)$.", isCorrect: false },
        ],
        explanation: "Tâm đối xứng của đồ thị bậc ba là điểm uốn: $y'' = 6x - 6 = 0 \\Rightarrow x = 1, y = 0 \\Rightarrow I(1; 0) \\ne O(0; 0)$. Khẳng định d là Sai.",
        topic: "Khảo sát hàm số bậc ba",
        difficulty: "TH",
      },
      {
        id: "t12-gk1-q4",
        type: "true_false",
        index: 4,
        stem: "Tìm giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$:",
        subQuestions: [
          { key: "a", text: "Đạo hàm $y' = 4x^3 - 4x = 4x(x^2 - 1)$.", isCorrect: true },
          { key: "b", text: "Trên khoảng $(0; 2)$, phương trình $y' = 0$ có một nghiệm duy nhất là $x = 1$.", isCorrect: true },
          { key: "c", text: "Giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ là $m = y(1) = 2$.", isCorrect: true },
          { key: "d", text: "Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ là $M = y(0) = 3$.", isCorrect: false },
        ],
        explanation: "Ta có $y(0) = 3$, $y(1) = 2$, $y(2) = 16 - 8 + 3 = 11$. Do đó giá trị lớn nhất $M = 11$ tại $x = 2$ chứ không phải $3$. Ý d là Sai.",
        topic: "GTLN và GTNN trên đoạn",
        difficulty: "TH",
      },
      {
        id: "t12-gk1-q5",
        type: "short_answer",
        index: 5,
        stem: "Một người nông dân muốn rào một khu vườn hình chữ nhật có diện tích $200\\text{ m}^2$ bằng hàng rào thép, một cạnh giáp bờ tường nên không cần rào. Chiều dài hàng rào ngắn nhất cần dùng là bao nhiêu mét?",
        correctAnswer: "40",
        acceptableAnswers: ["40", "40m"],
        explanation: "Gọi hai cạnh là $x$ (2 cạnh) và $y$ (1 cạnh). $xy = 200 \\Rightarrow y = \\frac{200}{x}$. Chiều dài rào $L = 2x + y = 2x + \\frac{200}{x} \\ge 2\\sqrt{2x \\cdot \\frac{200}{x}} = 2\\sqrt{400} = 40\\text{ m}$.",
        topic: "Ứng dụng tối ưu hóa thực tế",
        difficulty: "VD",
      },
      {
        id: "t12-gk1-q6",
        type: "short_answer",
        index: 6,
        stem: "Đồ thị hàm số $y = \\frac{x^2 - 3x + 2}{x - 1}$ có tất cả bao nhiêu đường tiệm cận?",
        correctAnswer: "0",
        acceptableAnswers: ["0", "không có"],
        explanation: "Ta có $y = \\frac{(x-1)(x-2)}{x-1} = x - 2$ với $x \\ne 1$. Đây là một đường thẳng khuyết điểm tại $x = 1$, không có tiệm cận đứng cũng không có tiệm cận ngang.",
        topic: "Bẫy đường tiệm cận",
        difficulty: "VD",
      },
    ],
  },

  "t12-ck1": {
    id: "t12-ck1",
    title: "Đề Thi Cuối Học Kỳ 1 - Toán 12 (KNTT)",
    grade: "lop-12",
    gradeNumber: 12,
    examType: "cuoi-ky-1",
    category: "LOP_12",
    subtitle: "Vectơ trong không gian, Phương pháp tọa độ Oxyz & Khảo sát hàm số nâng cao",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t12-ck1-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): 2x - 3y + z - 5 = 0$. Một vectơ pháp tuyến của $(\\alpha)$ là:",
        options: [
          { key: "A", text: "n = (2; -3; 1)" },
          { key: "B", text: "n = (2; 3; 1)" },
          { key: "C", text: "n = (2; -3; -5)" },
          { key: "D", text: "n = (-2; 3; 1)" },
        ],
        correctKey: "A",
        explanation: "Phương trình mặt phẳng $Ax + By + Cz + D = 0$ có VTPT $\\vec{n} = (A; B; C) = (2; -3; 1)$.",
        topic: "Vectơ pháp tuyến Oxyz",
        difficulty: "NB",
      },
      {
        id: "t12-ck1-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 25$ có bán kính $R$ bằng:",
        options: [
          { key: "A", text: "5" },
          { key: "B", text: "25" },
          { key: "C", text: "√5" },
          { key: "D", text: "10" },
        ],
        correctKey: "A",
        explanation: "Bán kính mặt cầu $R = \\sqrt{25} = 5$.",
        topic: "Mặt cầu Oxyz",
        difficulty: "NB",
      },
      {
        id: "t12-ck1-q3",
        type: "true_false",
        index: 3,
        stem: "Trong không gian $Oxyz$, cho điểm $A(1; 2; -1)$, $B(3; 0; 1)$ và mặt phẳng $(P): x + y - z + 2 = 0$:",
        subQuestions: [
          { key: "a", text: "Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là $I(2; 1; 0)$.", isCorrect: true },
          { key: "b", text: "Vectơ $\\vec{AB} = (2; -2; 2) = 2(1; -1; 1)$.", isCorrect: true },
          { key: "c", text: "Đường thẳng $AB$ vuông góc với mặt phẳng $(P)$.", isCorrect: false },
          { key: "d", text: "Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ là $d(A, (P)) = 2\\sqrt{3}$.", isCorrect: true },
        ],
        explanation: "VTPT $\\vec{n} = (1; 1; -1)$ không cùng phương $\\vec{AB} = (2; -2; 2)$ vì $\\frac{2}{1} \\ne \\frac{-2}{1}$. Ý c là Sai. $d(A, (P)) = \\frac{|1+2+1+2|}{\\sqrt{3}} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$ (Ý d Đúng).",
        topic: "Hình học tọa độ Oxyz",
        difficulty: "TH",
      },
      {
        id: "t12-ck1-q4",
        type: "true_false",
        index: 4,
        stem: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Chọn hệ trục tọa độ $Oxyz$ với gốc $A(0;0;0)$:",
        subQuestions: [
          { key: "a", text: "Tọa độ các đỉnh $B(a; 0; 0), D(0; a; 0), A'(0; 0; a)$.", isCorrect: true },
          { key: "b", text: "Tọa độ đỉnh đối diện $C'(a; a; a)$.", isCorrect: true },
          { key: "c", text: "Độ dài đường chéo hình lập phương là $AC' = a\\sqrt{3}$.", isCorrect: true },
          { key: "d", text: "Tích vô hướng $\\vec{AC'} \\cdot \\vec{BD} = a^2$.", isCorrect: false },
        ],
        explanation: "Ta có $\\vec{AC'} = (a; a; a)$ và $\\vec{BD} = (-a; a; 0)$. Tích vô hướng: $a(-a) + a(a) + a(0) = -a^2 + a^2 = 0$ (hai đường chéo vuông góc nhau). Ý d là Sai.",
        topic: "Tọa độ hóa hình lập phương",
        difficulty: "VD",
      },
      {
        id: "t12-ck1-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng $(\\alpha): 2x - 2y + z = 0$.",
        correctAnswer: "3",
        acceptableAnswers: ["3"],
        explanation: "$d(M, \\alpha) = \\frac{|2(1) - 2(-2) + 3|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 + 4 + 3|}{\\sqrt{9}} = \\frac{9}{3} = 3$.",
        topic: "Khoảng cách trong Oxyz",
        difficulty: "NB",
      },
      {
        id: "t12-ck1-q6",
        type: "short_answer",
        index: 6,
        stem: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$. Bán kính của mặt cầu bằng bao nhiêu?",
        correctAnswer: "5",
        acceptableAnswers: ["5"],
        explanation: "Tâm $I(1; -2; 3)$, $d = -11$. Bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1 + 4 + 9 - (-11)} = \\sqrt{25} = 5$.",
        topic: "Bán kính mặt cầu dạng khai triển",
        difficulty: "TH",
      },
    ],
  },

  "t12-gk2": {
    id: "t12-gk2",
    title: "Đề Thi Giữa Học Kỳ 2 - Toán 12 (KNTT)",
    grade: "lop-12",
    gradeNumber: 12,
    examType: "giua-ky-2",
    category: "LOP_12",
    subtitle: "Nguyên hàm, Tích phân & Phương pháp tọa độ mặt phẳng - đường thẳng trong Oxyz",
    durationMinutes: 60,
    totalQuestions: 6,
    questions: [
      {
        id: "t12-gk2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Họ nguyên hàm của hàm số $f(x) = 3x^2 + \\sin x$ là:",
        options: [
          { key: "A", text: "F(x) = x^3 - cos x + C" },
          { key: "B", text: "F(x) = x^3 + cos x + C" },
          { key: "C", text: "F(x) = 6x + cos x + C" },
          { key: "D", text: "F(x) = x^3/3 - cos x + C" },
        ],
        correctKey: "A",
        explanation: "$\\int (3x^2 + \\sin x)\\,dx = x^3 - \\cos x + C$.",
        topic: "Nguyên hàm cơ bản",
        difficulty: "NB",
      },
      {
        id: "t12-gk2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Trong không gian $Oxyz$, một vectơ chỉ phương của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 3}{-1} = \\frac{z}{4}$ là:",
        options: [
          { key: "A", text: "u = (2; -1; 4)" },
          { key: "B", text: "u = (1; -3; 0)" },
          { key: "C", text: "u = (-2; 1; 4)" },
          { key: "D", text: "u = (2; 1; 4)" },
        ],
        correctKey: "A",
        explanation: "Các mẫu số của phương trình chính tắc là tọa độ VTCP $\\vec{u} = (2; -1; 4)$.",
        topic: "Vectơ chỉ phương đường thẳng",
        difficulty: "NB",
      },
      {
        id: "t12-gk2-q3",
        type: "true_false",
        index: 3,
        stem: "Xét tính đúng sai của các công thức tính tích phân:",
        subQuestions: [
          { key: "a", text: "$\\int_{a}^{b} f(x)\\,dx = -\\int_{b}^{a} f(x)\\,dx$.", isCorrect: true },
          { key: "b", text: "Nếu $f(x)$ là hàm số liên tục trên $[a; b]$ thì $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$.", isCorrect: true },
          { key: "c", text: "$\\int_{0}^{\\pi} \\sin x\\,dx = 0$.", isCorrect: false },
          { key: "d", text: "$\\int_{1}^{e} \\frac{1}{x}\\,dx = 1$.", isCorrect: true },
        ],
        explanation: "$\\int_{0}^{\\pi} \\sin x\\,dx = [-\\cos x]_{0}^{\\pi} = -(-1) - (-1) = 2 \\ne 0$. Khẳng định c là Sai.",
        topic: "Tính chất tích phân",
        difficulty: "TH",
      },
      {
        id: "t12-gk2-q4",
        type: "true_false",
        index: 4,
        stem: "Trong không gian $Oxyz$, cho đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 3 - t \\end{cases}$ và mặt phẳng $(P): x + y + 3z - 6 = 0$:",
        subQuestions: [
          { key: "a", text: "VTCP của đường thẳng là $\\vec{u} = (2; 1; -1)$.", isCorrect: true },
          { key: "b", text: "VTPT của mặt phẳng $(P)$ là $\\vec{n} = (1; 1; 3)$.", isCorrect: true },
          { key: "c", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 2(1) + 1(1) + (-1)(3) = 0$.", isCorrect: true },
          { key: "d", text: "Đường thẳng $d$ vuông góc với mặt phẳng $(P)$.", isCorrect: false },
        ],
        explanation: "Vì $\\vec{u} \\cdot \\vec{n} = 0$, VTCP vuông góc với VTPT nên đường thẳng $d$ SONG SONG hoặc nằm trong mặt phẳng $(P)$ chứ không phải vuông góc. Ý d là Sai.",
        topic: "Vị trí tương đối đường và mặt",
        difficulty: "VD",
      },
      {
        id: "t12-gk2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính tích phân $I = \\int_{0}^{2} (3x^2 - 2x + 1)\\,dx$.",
        correctAnswer: "6",
        acceptableAnswers: ["6"],
        explanation: "$F(x) = x^3 - x^2 + x$. $I = F(2) - F(0) = (8 - 4 + 2) - 0 = 6$.",
        topic: "Tính tích phân cơ bản",
        difficulty: "TH",
      },
      {
        id: "t12-gk2-q6",
        type: "short_answer",
        index: 6,
        stem: "Trong không gian $Oxyz$, tìm tọa độ giao điểm của đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{-1}$ với mặt phẳng $(Oxy)$. Giá trị cao độ $z = ?$",
        correctAnswer: "0",
        acceptableAnswers: ["0"],
        explanation: "Giao với mặt phẳng tọa độ $(Oxy)$ thì cao độ $z$ luôn luôn bằng 0.",
        topic: "Mặt phẳng tọa độ Oxy",
        difficulty: "NB",
      },
    ],
  },

  "t12-ck2": {
    id: "t12-ck2",
    title: "Đề Thi Cuối Học Kỳ 2 - Toán 12 (KNTT)",
    grade: "lop-12",
    gradeNumber: 12,
    examType: "cuoi-ky-2",
    category: "LOP_12",
    subtitle: "Ứng dụng hình học của tích phân (Diện tích hình phẳng, Thể tích vật thể), Xác suất có điều kiện & Phân bố xác suất",
    durationMinutes: 90,
    totalQuestions: 6,
    questions: [
      {
        id: "t12-ck2-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục trên $[a; b]$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$ được tính theo công thức:",
        options: [
          { key: "A", text: "S = ∫ |f(x)| dx" },
          { key: "B", text: "S = ∫ f(x) dx" },
          { key: "C", text: "S = π ∫ f^2(x) dx" },
          { key: "D", text: "S = ∫ f^2(x) dx" },
        ],
        correctKey: "A",
        explanation: "Công thức diện tích hình phẳng: $S = \\int_a^b |f(x)|\\,dx$.",
        topic: "Diện tích hình phẳng",
        difficulty: "NB",
      },
      {
        id: "t12-ck2-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục $Ox$ và hai đường thẳng $x = a, x = b$ quanh trục $Ox$ là:",
        options: [
          { key: "A", text: "V = π ∫ f^2(x) dx" },
          { key: "B", text: "V = ∫ f^2(x) dx" },
          { key: "C", text: "V = 2π ∫ f(x) dx" },
          { key: "D", text: "V = π^2 ∫ f^2(x) dx" },
        ],
        correctKey: "A",
        explanation: "Công thức thể tích tròn xoay quay quanh trục $Ox$: $V = \\pi \\int_a^b f^2(x)\\,dx$.",
        topic: "Thể tích khối tròn xoay",
        difficulty: "NB",
      },
      {
        id: "t12-ck2-q3",
        type: "true_false",
        index: 3,
        stem: "Một hộp chứa 6 quả cầu đỏ và 4 quả cầu xanh. Lấy ngẫu nhiên lần lượt không hoàn lại 2 quả cầu. Gọi $A$ là biến cố 'Quả cầu thứ nhất đỏ', $B$ là 'Quả cầu thứ hai đỏ':",
        subQuestions: [
          { key: "a", text: "Xác suất $P(A) = \\frac{6}{10} = \\frac{3}{5}$.", isCorrect: true },
          { key: "b", text: "Xác suất có điều kiện $P(B \\mid A) = \\frac{5}{9}$.", isCorrect: true },
          { key: "c", text: "Xác suất để cả hai quả cầu đều màu đỏ là $P(AB) = \\frac{1}{3}$.", isCorrect: true },
          { key: "d", text: "Hai biến cố $A$ và $B$ là hai biến cố độc lập.", isCorrect: false },
        ],
        explanation: "Lấy không hoàn lại nên kết quả lần 1 ảnh hưởng đến xác suất lần 2: $P(B|A) \\ne P(B)$. Do đó $A$ và $B$ phụ thuộc (không độc lập). Ý d là Sai.",
        topic: "Xác suất có điều kiện",
        difficulty: "TH",
      },
      {
        id: "t12-ck2-q4",
        type: "true_false",
        index: 4,
        stem: "Cho hình phẳng $(H)$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$:",
        subQuestions: [
          { key: "a", text: "Phương trình hoành độ giao điểm là $x^2 - 2x = 0$, có hai nghiệm là $x = 0$ và $x = 2$.", isCorrect: true },
          { key: "b", text: "Trên đoạn $[0; 2]$, ta có $2x \\ge x^2$.", isCorrect: true },
          { key: "c", text: "Diện tích hình phẳng $(H)$ là $S = \\int_{0}^{2} (2x - x^2)\\,dx = \\frac{4}{3}$.", isCorrect: true },
          { key: "d", text: "Diện tích hình phẳng $(H)$ bằng $\\frac{8}{3}$.", isCorrect: false },
        ],
        explanation: "$S = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$. Khẳng định d là Sai.",
        topic: "Diện tích hình phẳng giới hạn bởi 2 đồ thị",
        difficulty: "VD",
      },
      {
        id: "t12-ck2-q5",
        type: "short_answer",
        index: 5,
        stem: "Tính diện tích hình phẳng giới hạn bởi đường parabol $y = -x^2 + 4$ và trục hoành $Ox$.",
        correctAnswer: "32/3",
        acceptableAnswers: ["32/3", "10.67"],
        explanation: "Giao với $Ox$: $-x^2 + 4 = 0 \\Leftrightarrow x = \\pm 2$. $S = \\int_{-2}^{2} (4 - x^2)\\,dx = [4x - \\frac{x^3}{3}]_{-2}^{2} = \\frac{32}{3}$.",
        topic: "Ứng dụng tích phân tính diện tích",
        difficulty: "TH",
      },
      {
        id: "t12-ck2-q6",
        type: "short_answer",
        index: 6,
        stem: "Theo công thức xác suất toàn phần: Cho hệ đầy đủ biến cố $A$ và $\\bar{A}$. Biết $P(A) = 0,4$, $P(B \\mid A) = 0,8$ và $P(B \\mid \\bar{A}) = 0,2$. Tính xác suất $P(B)$:",
        correctAnswer: "0.44",
        acceptableAnswers: ["0.44", "0,44", "11/25"],
        explanation: "$P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A}) = 0,4 \\times 0,8 + (1 - 0,4) \\times 0,2 = 0,32 + 0,12 = 0,44$.",
        topic: "Công thức xác suất toàn phần",
        difficulty: "VD",
      },
    ],
  },

  // ĐỀ ĐẶC BIỆT LỚP 12: ÔN THI TỐT NGHIỆP THPT CHUẨN 2026
  "thpt-qg-2026-chuan": {
    id: "thpt-qg-2026-chuan",
    title: "Đề Thi Thử Tốt Nghiệp THPT 2026 - Môn Toán (Chuẩn Ma Trận Mới Bộ GD&ĐT)",
    grade: "lop-12",
    gradeNumber: 12,
    examType: "thpt-qg",
    category: "THPT_QG",
    subtitle: "Ma trận 3 phần chuẩn Bộ GD&ĐT: Trắc nghiệm 4 chọn, Đúng/Sai lũy tiến & Trả lời ngắn điền số",
    durationMinutes: 90,
    totalQuestions: 10,
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        index: 1,
        stem: "Cho hàm số $y = f(x)$ có bảng biến thiên với $f'(x) > 0$ trên $(-\\infty; 1)$ và $(3; +\\infty)$, $f'(x) < 0$ trên $(1; 3)$. Hàm số đã cho đạt cực đại tại điểm nào?",
        options: [
          { key: "A", text: "x = 1" },
          { key: "B", text: "x = 3" },
          { key: "C", text: "x = -1" },
          { key: "D", text: "x = 2" },
        ],
        correctKey: "A",
        explanation: "Ta có $f'(x)$ đổi dấu từ dương sang âm khi đi qua điểm $x = 1$, do đó hàm số đạt cực đại tại $x = 1$.",
        topic: "Khảo sát hàm số",
        difficulty: "NB",
      },
      {
        id: "q2",
        type: "multiple_choice",
        index: 2,
        stem: "Họ nguyên hàm của hàm số $f(x) = 3x^2 + \\sin x$ là:",
        options: [
          { key: "A", text: "F(x) = x^3 - cos x + C" },
          { key: "B", text: "F(x) = x^3 + cos x + C" },
          { key: "C", text: "F(x) = 6x + cos x + C" },
          { key: "D", text: "F(x) = x^3/3 - cos x + C" },
        ],
        correctKey: "A",
        explanation: "$\\int (3x^2 + \\sin x)\\,dx = x^3 - \\cos x + C$.",
        topic: "Nguyên hàm - Tích phân",
        difficulty: "NB",
      },
      {
        id: "q3",
        type: "multiple_choice",
        index: 3,
        stem: "Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): 2x - 3y + z - 5 = 0$. Một vector pháp tuyến của $(\\alpha)$ là:",
        options: [
          { key: "A", text: "n = (2; -3; 1)" },
          { key: "B", text: "n = (2; 3; 1)" },
          { key: "C", text: "n = (2; -3; -5)" },
          { key: "D", text: "n = (-2; 3; 1)" },
        ],
        correctKey: "A",
        explanation: "Mặt phẳng có dạng $Ax + By + Cz + D = 0$ có vector pháp tuyến $\\vec{n} = (A; B; C) = (2; -3; 1)$.",
        topic: "Hình học Oxyz",
        difficulty: "NB",
      },
      {
        id: "q4",
        type: "multiple_choice",
        index: 4,
        stem: "Cho tam giác $ABC$ có $a = 7, b = 8, c = 5$. Giá trị của $\\cos A$ bằng:",
        options: [
          { key: "A", text: "1/2" },
          { key: "B", text: "√3/2" },
          { key: "C", text: "1/5" },
          { key: "D", text: "2/3" },
        ],
        correctKey: "A",
        explanation: "Theo định lý Cosin: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{8^2 + 5^2 - 7^2}{2 \\cdot 8 \\cdot 5} = \\frac{64 + 25 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$.",
        topic: "Hệ thức lượng trong tam giác",
        difficulty: "TH",
      },
      {
        id: "q5",
        type: "true_false",
        index: 5,
        stem: "Cho hàm số $y = f(x) = \\frac{2x - 1}{x + 1}$ có đồ thị là $(C)$. Xét tính đúng sai của các khẳng định sau:",
        subQuestions: [
          { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", isCorrect: true },
          { key: "b", text: "Đạo hàm $f'(x) = \\frac{3}{(x+1)^2} > 0, \\forall x \\neq -1$.", isCorrect: true },
          { key: "c", text: "Đồ thị $(C)$ có đường tiệm cận đứng là $x = 2$ và tiệm cận ngang là $y = -1$.", isCorrect: false },
          { key: "d", text: "Tiếp tuyến của $(C)$ tại giao điểm với trục tung có phương trình là $y = 3x - 1$.", isCorrect: true },
        ],
        explanation: "Phân tích từng ý:\n- a) Đúng vì mẫu số $x + 1 \\neq 0 \\Leftrightarrow x \\neq -1$.\n- b) $f'(x) = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$ với mọi $x \\neq -1$ (Đúng).\n- c) Tiệm cận đứng là $x = -1$, tiệm cận ngang là $y = 2$. Do đó khẳng định c là Sai.\n- d) Giao với $Oy$: $x = 0 \\Rightarrow y = -1 \\Rightarrow M(0; -1)$. Hệ số góc $k = f'(0) = 3$. Phương trình tiếp tuyến $y = 3(x - 0) - 1 = 3x - 1$ (Đúng).",
        topic: "Khảo sát hàm số",
        difficulty: "TH",
      },
      {
        id: "q6",
        type: "true_false",
        index: 6,
        stem: "Trong không gian $Oxyz$, cho điểm $A(1; 2; -1)$, $B(3; 0; 1)$ và mặt phẳng $(P): x + y - z + 2 = 0$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là $I(2; 1; 0)$.", isCorrect: true },
          { key: "b", text: "Vector $\\vec{AB} = (2; -2; 2) = 2(1; -1; 1)$.", isCorrect: true },
          { key: "c", text: "Đường thẳng $AB$ vuông góc với mặt phẳng $(P)$.", isCorrect: false },
          { key: "d", text: "Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ là $d(A, (P)) = 2\\sqrt{3}$.", isCorrect: true },
        ],
        explanation: "Phân tích từng ý:\n- a) $I(2; 1; 0)$ (Đúng).\n- b) $\\vec{AB} = (2; -2; 2)$ (Đúng).\n- c) $\\vec{n}_P = (1; 1; -1)$. $\\vec{AB}$ không cùng phương $\\vec{n}_P$ (Sai).\n- d) $d(A, (P)) = \\frac{|1 + 2 - (-1) + 2|}{\\sqrt{1^2 + 1^2 + (-1)^2}} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$ (Đúng).",
        topic: "Phương pháp tọa độ Oxyz",
        difficulty: "VD",
      },
      {
        id: "q7",
        type: "true_false",
        index: 7,
        stem: "Một hộp chứa 6 quả cầu đỏ và 4 quả cầu xanh. Lấy ngẫu nhiên lần lượt không hoàn lại 2 quả cầu. Gọi $A$ là biến cố 'Quả cầu thứ nhất màu đỏ', $B$ là biến cố 'Quả cầu thứ hai màu đỏ'.",
        subQuestions: [
          { key: "a", text: "Xác suất $P(A) = \\frac{3}{5}$.", isCorrect: true },
          { key: "b", text: "Xác suất có điều kiện $P(B \\mid A) = \\frac{5}{9}$.", isCorrect: true },
          { key: "c", text: "Xác suất để cả hai quả cầu lấy ra đều màu đỏ là $P(A \\cap B) = \\frac{1}{3}$.", isCorrect: true },
          { key: "d", text: "Hai biến cố $A$ và $B$ là hai biến cố độc lập.", isCorrect: false },
        ],
        explanation: "- a) $P(A) = \\frac{6}{10} = \\frac{3}{5}$ (Đúng).\n- b) Sau khi lấy 1 quả đỏ, còn 5 đỏ trong tổng 9 quả $\\Rightarrow P(B \\mid A) = \\frac{5}{9}$ (Đúng).\n- c) $P(A \\cap B) = P(A) \\cdot P(B \\mid A) = \\frac{3}{5} \\cdot \\frac{5}{9} = \\frac{1}{3}$ (Đúng).\n- d) Vì $P(B \\mid A) = \\frac{5}{9} \\neq P(A)$ và phép thử không hoàn lại nên $A, B$ phụ thuộc (Sai).",
        topic: "Xác suất có điều kiện",
        difficulty: "TH",
      },
      {
        id: "q8",
        type: "short_answer",
        index: 8,
        stem: "Một công ty sản xuất một loại sản phẩm. Biết rằng hàm chi phí sản xuất $x$ sản phẩm ($x > 0$) là $C(x) = 2x^2 + 50x + 1800$ (triệu đồng). Tìm số lượng sản phẩm $x$ cần sản xuất để chi phí trung bình trên mỗi sản phẩm $\\bar{C}(x) = \\frac{C(x)}{x}$ đạt giá trị nhỏ nhất.",
        correctAnswer: "30",
        acceptableAnswers: ["30", "30 sản phẩm"],
        unit: "sản phẩm",
        explanation: "Chi phí trung bình $\\bar{C}(x) = 2x + 50 + \\frac{1800}{x}$. Áp dụng bất đẳng thức Cauchy cho $2x > 0$ và $\\frac{1800}{x} > 0$:\n$\\bar{C}(x) \\ge 50 + 2\\sqrt{2x \\cdot \\frac{1800}{x}} = 50 + 2\\sqrt{3600} = 50 + 120 = 170$.\nDấu bằng xảy ra khi $2x = \\frac{1800}{x} \\Leftrightarrow 2x^2 = 1800 \\Leftrightarrow x^2 = 900 \\Leftrightarrow x = 30$.",
        topic: "Ứng dụng thực tế của đạo hàm",
        difficulty: "VD",
      },
      {
        id: "q9",
        type: "short_answer",
        index: 9,
        stem: "Tính tích phân $I = \\int_{0}^{2} (3x^2 - 2x + 1) \\, dx$.",
        correctAnswer: "6",
        acceptableAnswers: ["6"],
        explanation: "Ta có nguyên hàm $F(x) = x^3 - x^2 + x$.\n$I = F(2) - F(0) = (2^3 - 2^2 + 2) - 0 = 8 - 4 + 2 = 6$.",
        topic: "Tích phân",
        difficulty: "TH",
      },
      {
        id: "q10",
        type: "short_answer",
        index: 10,
        stem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 4$, $SA \\perp (ABCD)$ và $SA = 3$. Tính thể tích $V$ của khối chóp $S.ABCD$.",
        correctAnswer: "16",
        acceptableAnswers: ["16"],
        explanation: "Diện tích đáy $S_{ABCD} = 4^2 = 16$.\nChiều cao hình chóp $h = SA = 3$.\nThể tích khối chóp $V = \\frac{1}{3} S_{ABCD} \\cdot h = \\frac{1}{3} \\cdot 16 \\cdot 3 = 16$.",
        topic: "Thể tích khối đa diện",
        difficulty: "TH",
      },
    ],
  },

  // ĐỀ ĐẶC BIỆT LỚP 12: ÔN THI ĐÁNH GIÁ NĂNG LỰC (ĐHQG & BÁCH KHOA TSA)
  "dgnl-dhqg-2026": {
    id: "dgnl-dhqg-2026",
    title: "Đề Thi Thử Đánh Giá Năng Lực (ĐGNL ĐHQG & TSA Bách Khoa) - Phần Tư Duy Định Lượng",
    grade: "lop-12",
    gradeNumber: 12,
    examType: "dgnl",
    category: "DGNL_DHQG",
    subtitle: "Tư duy toán học, Xử lý số liệu, Thống kê ứng dụng & Phân tích logic đa lĩnh vực",
    durationMinutes: 75,
    totalQuestions: 6,
    questions: [
      {
        id: "dgnl-q1",
        type: "multiple_choice",
        index: 1,
        stem: "Một mẫu số liệu thống kê mức lương của 10 nhân viên (đơn vị: triệu đồng/tháng) như sau: $8, 9, 10, 10, 12, 14, 15, 16, 20, 50$. Số đặc trưng nào sau đây mô tả xu thế trung tâm của mẫu số liệu trên phù hợp nhất khi có giá trị ngoại lai $50$?",
        options: [
          { key: "A", text: "Số trung vị (Median)" },
          { key: "B", text: "Số trung bình cộng (Mean)" },
          { key: "C", text: "Độ lệch chuẩn (Standard Deviation)" },
          { key: "D", text: "Khoảng biến thiên (Range)" },
        ],
        correctKey: "A",
        explanation: "Khi mẫu số liệu có giá trị ngoại lai (cực trị đột biến bất thường như 50), số trung vị (Median) là đại lượng ít bị ảnh hưởng nhất và phản ánh trung thực nhất xu thế trung tâm.",
        topic: "Tư duy định lượng & Thống kê",
        difficulty: "TH",
      },
      {
        id: "dgnl-q2",
        type: "multiple_choice",
        index: 2,
        stem: "Dân số của một thành phố sau $t$ năm kể từ năm 2020 được ước tính theo công thức $P(t) = P_0 \\cdot e^{0,02t}$, trong đó $P_0$ là dân số năm 2020. Hỏi sau bao nhiêu năm thì dân số thành phố sẽ tăng gấp đôi so với năm 2020? (Lấy $\\ln 2 \\approx 0,693$).",
        options: [
          { key: "A", text: "Khoảng 35 năm" },
          { key: "B", text: "Khoảng 50 năm" },
          { key: "C", text: "Khoảng 20 năm" },
          { key: "D", text: "Khoảng 70 năm" },
        ],
        correctKey: "A",
        explanation: "$P(t) = 2P_0 \\Leftrightarrow e^{0,02t} = 2 \\Leftrightarrow 0,02t = \\ln 2 \\Rightarrow t = \\frac{0,693}{0,02} = 34,65 \\approx 35$ năm.",
        topic: "Mô hình tăng trưởng logarit thực tế",
        difficulty: "TH",
      },
      {
        id: "dgnl-q3",
        type: "true_false",
        index: 3,
        stem: "Một công ty dược phẩm thử nghiệm một bộ kit xét nghiệm nhanh cho một loại virus. Tỉ lệ người mắc bệnh trong cộng đồng là $1\\%$. Nếu một người mắc bệnh, xét nghiệm cho kết quả dương tính là $98\\%$. Nếu một người không mắc bệnh, xét nghiệm cho kết quả dương tính giả là $2\\%$. Xét tính đúng sai:",
        subQuestions: [
          { key: "a", text: "Xác suất một người bất kỳ có kết quả xét nghiệm dương tính là $P(D) = 0,01 \\times 0,98 + 0,99 \\times 0,02 = 0,0296$.", isCorrect: true },
          { key: "b", text: "Theo công thức Bayes, xác suất một người thực sự mắc bệnh biết rằng người đó có kết quả dương tính là $P(B \\mid D) = \\frac{0,01 \\times 0,98}{0,0296} \\approx 33,1\\%$.", isCorrect: true },
          { key: "c", text: "Một người nhận kết quả dương tính thì chắc chắn trên $90\\%$ là đã bị nhiễm bệnh.", isCorrect: false },
          { key: "d", text: "Nghịch lý xét nghiệm xảy ra do tỉ lệ mắc bệnh trong cộng đồng (tỉ lệ nền) rất thấp.", isCorrect: true },
        ],
        explanation: "Dù độ nhạy 98%, nhưng do tỉ lệ mắc bệnh chỉ 1% nên số ca dương tính giả chiếm số lượng lớn. Xác suất nhiễm thật chỉ ~33,1% (khẳng định c là Sai).",
        topic: "Tư duy xác suất & Công thức Bayes",
        difficulty: "VD",
      },
      {
        id: "dgnl-q4",
        type: "true_false",
        index: 4,
        stem: "Một bể chứa nước dạng hình nón ngược có bán kính miệng $R = 2\\text{ m}$, chiều cao $H = 4\\text{ m}$. Nước được bơm vào bể với tốc độ không đổi $v = 0,5\\text{ m}^3\\text{/phút}$. Gọi $h(t)$ là mực nước tại thời điểm $t$:",
        subQuestions: [
          { key: "a", text: "Tại mọi thời điểm, bán kính mặt thoáng $r$ tỉ lệ với mực nước $h$: $r = \\frac{R}{H} h = \\frac{1}{2} h$.", isCorrect: true },
          { key: "b", text: "Thể tích nước trong bể tại mực nước $h$ là $V(h) = \\frac{1}{3} \\pi r^2 h = \\frac{\\pi}{12} h^3$.", isCorrect: true },
          { key: "c", text: "Mối liên hệ giữa tốc độ thay đổi thể tích và tốc độ dâng nước là $\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}$.", isCorrect: true },
          { key: "d", text: "Khi mực nước dâng lên càng cao thì tốc độ dâng nước $\\frac{dh}{dt}$ càng tăng nhanh.", isCorrect: false },
        ],
        explanation: "Vì $\\frac{dh}{dt} = \\frac{dV/dt}{\\frac{\\pi}{4} h^2} = \\frac{2}{\\pi h^2}$, khi $h$ càng tăng (miệng nón càng rộng) thì tốc độ dâng nước $\\frac{dh}{dt}$ càng GIẢM CHẬM LẠI. Ý d là Sai.",
        topic: "Tốc độ biến thiên liên quan (Related Rates)",
        difficulty: "VD",
      },
      {
        id: "dgnl-q5",
        type: "short_answer",
        index: 5,
        stem: "Một cửa hàng bán trà sữa với chi phí nguyên liệu cho 1 cốc là $10.000$ đồng. Với giá bán $x$ (nghìn đồng/cốc, $x > 10$), số lượng cốc bán được mỗi ngày là $N(x) = 300 - 10x$. Để lợi nhuận hàng ngày đạt tối đa thì cửa hàng nên đặt giá bán $x$ là bao nhiêu nghìn đồng?",
        correctAnswer: "20",
        acceptableAnswers: ["20", "20 nghìn", "20.000"],
        explanation: "Lợi nhuận mỗi cốc: $x - 10$. Tổng lợi nhuận: $P(x) = (x - 10)(300 - 10x) = -10x^2 + 400x - 3000$. Đỉnh parabol tại $x = -\\frac{b}{2a} = -\\frac{400}{2(-10)} = 20$ (nghìn đồng).",
        topic: "Tối ưu hóa kinh tế thực tiễn",
        difficulty: "TH",
      },
      {
        id: "dgnl-q6",
        type: "short_answer",
        index: 6,
        stem: "Ba bạn An, Bình, Cường cùng giải một bài toán định lượng logic độc lập nhau. Xác suất giải được bài toán của An, Bình, Cường lần lượt là $0,7; 0,8; 0,9$. Tính xác suất để bài toán ĐƯỢC GIẢI QUYẾT (có ít nhất một bạn giải đúng):",
        correctAnswer: "0.994",
        acceptableAnswers: ["0.994", "0,994", "99.4%"],
        explanation: "Biến cố đối: Cả 3 bạn cùng không giải được bài toán. $P(\\text{đối}) = (1 - 0,7)(1 - 0,8)(1 - 0,9) = 0,3 \\times 0,2 \\times 0,1 = 0,006$. Xác suất có ít nhất một bạn giải được: $1 - 0,006 = 0,994$.",
        topic: "Biến cố đối trong bài toán thực tế",
        difficulty: "TH",
      },
    ],
  },
};
