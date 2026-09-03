import { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";
import { CurriculumObjective } from "@/data/curriculumStandardsData";

export type CognitiveLevel = "nhan_biet" | "thong_hieu" | "van_dung" | "van_dung_cao";

/**
 * Thuật toán xáo trộn vị trí đáp án ngẫu nhiên và cập nhật lại correctIndex chính xác
 */
export function shuffleAnswers(options: string[], correctIdx: number = 0): { options: string[]; correctIndex: number } {
  const originalCorrect = options[correctIdx];
  const indices = [0, 1, 2, 3];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const shuffled = indices.map((i) => options[i]);
  return {
    options: shuffled,
    correctIndex: shuffled.indexOf(originalCorrect),
  };
}

/**
 * Trình tạo số tự nhiên ngẫu nhiên có dấu cách chuẩn SGK
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatNumberVN(n: number): string {
  return n.toLocaleString("vi-VN").replace(/\./g, " ");
}

/**
 * BỘ TẠO ĐỀ THÔNG MINH TOÁN 6 DỰA TRÊN YCCĐ VÀ MỨC ĐỘ NHẬN THỨC
 * Nguồn tài liệu ưu tiên: Thư mục Anti/Tài Liệu Lớp 6
 */
export function generateGrade6Question(
  lessonId: string,
  lessonTitle: string,
  level: CognitiveLevel,
  objective: CurriculumObjective,
  existingQuestions: QuizQuestion[] = [],
  customPrompt?: string
): QuizQuestion {
  const ts = Date.now();
  const id = lessonId.toLowerCase();
  const objCode = objective.code || "";
  const objId = objective.id || "";

  const levelLabels: Record<CognitiveLevel, string> = {
    nhan_biet: "Nhận biết",
    thong_hieu: "Thông hiểu",
    van_dung: "Vận dụng",
    van_dung_cao: "Vận dụng cao",
  };

  const badgePrefix = `🤖 [${levelLabels[level]}] ${objective.code}`;

  interface AuthenticQuestionItem {
    objectiveCodes: string[];
    level: string;
    badge: string;
    source: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }

  // Hàm hỗ trợ chọn câu hỏi chuẩn YCCĐ & Mức độ, tránh lặp lại câu hỏi đang hiển thị
  function pickAuthenticQuestion(
    pool: AuthenticQuestionItem[],
    targetObjCode: string,
    targetLevel: string,
    existingList: QuizQuestion[] = []
  ) {
    const normObj = targetObjCode.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // 1. Lọc theo mã YCCĐ (ví dụ: "2.1", "1.1", "nb-1", ...)
    let matches = pool.filter(q =>
      q.objectiveCodes.some(c => {
        const normC = c.toLowerCase().replace(/[^a-z0-9]/g, "");
        return normObj.includes(normC) || normC.includes(normObj);
      })
    );

    // 2. Nếu có câu hỏi đúng YCCĐ, ưu tiên lọc theo đúng mức độ nhận thức (level)
    const levelAndObjMatches = matches.filter(q => q.level === targetLevel);
    if (levelAndObjMatches.length > 0) {
      matches = levelAndObjMatches;
    }

    // 3. Nếu không có match YCCĐ, lọc theo level trên toàn bộ pool bài học
    if (matches.length === 0) {
      matches = pool.filter(q => q.level === targetLevel);
    }

    // 4. Nếu vẫn không có, lấy toàn bộ pool
    if (matches.length === 0) {
      matches = pool;
    }

    // 5. Loại bỏ các câu hỏi đã có trên màn hình (existingQuestions) để khi "Đổi câu khác" sẽ ra câu mới
    const existingTexts = new Set(existingList.map(q => q.question.trim()));
    const unusedMatches = matches.filter(q => !existingTexts.has(q.question.trim()));

    const chosen = unusedMatches.length > 0
      ? unusedMatches[randomInt(0, unusedMatches.length - 1)]
      : matches[randomInt(0, matches.length - 1)];

    return chosen;
  }

  // =========================================================================
  // BÀI 1: TẬP HỢP
  // =========================================================================
  if (id.includes("b1-tap-hop") || id.includes("tap-hop")) {
    const poolB1 = [
      // YCCĐ 1.1: Nhận biết khái niệm tập hợp và các phần tử
      {
        objectiveCodes: ["1.1", "b1-nb-1"],
        level: "nhan_biet",
        badge: "Câu 6 - TN6 CI Bài 1",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Phần tử nào sau đây thuộc tập hợp $Q = \\{0; 2; 4; 6; 8\\}$?",
        options: ["0", "1", "3", "5"],
        correctIndex: 0,
        explanation: "Phần tử 0 có mặt trong tập hợp $Q = \\{0; 2; 4; 6; 8\\}$ nên $0 \\in Q$. Các số 1, 3, 5 không có mặt trong $Q$."
      },
      {
        objectiveCodes: ["1.1", "b1-nb-1"],
        level: "nhan_biet",
        badge: "Câu 8 - TN6 CI Bài 1",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Trên bàn có 2 cái thước kẻ, 2 cái bút bi, 1 cái bút chì, 1 cục tẩy và 1 cái bánh mì. Gọi $M$ là tập hợp đồ dùng học tập ở trên bàn. Số phần tử của tập hợp $M$ là:",
        options: ["4 phần tử", "6 phần tử", "7 phần tử", "5 phần tử"],
        correctIndex: 0,
        explanation: "Tập hợp đồ dùng học tập gồm các phần tử khác nhau: thước kẻ, bút bi, bút chì, tẩy (bánh mì là thực phẩm, không phải đồ dùng học tập). Vậy $M = \\{\\text{thước kẻ; bút bi; bút chì; tẩy}\\}$ có đúng 4 phần tử."
      },
      {
        objectiveCodes: ["1.1", "b1-nb-1"],
        level: "nhan_biet",
        badge: "Bài 1.1 - SGK Toán 6 Tập 1 Trang 7",
        source: "SGK Toán 6 Tập 1 Trang 7 (Bộ Kết Nối Tri Thức)",
        question: "Cho tập hợp $A = \\{a; b; c; x; y\\}$. Khẳng định nào sau đây là ĐÚNG?",
        options: ["$b \\in A$", "$d \\in A$", "$x \\notin A$", "$u \\in A$"],
        correctIndex: 0,
        explanation: "Phần tử $b$ nằm trong danh sách các phần tử của tập hợp $A$ nên $b \\in A$ là khẳng định đúng."
      },
      // YCCĐ 1.2: Sử dụng đúng các kí hiệu ∈ và ∉
      {
        objectiveCodes: ["1.2", "b1-nb-2"],
        level: "nhan_biet",
        badge: "Dạng 2 Bài 4 - SH6-CĐ 1.1 BTVN",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho $M$ là tập hợp các chữ cái có mặt trong từ \"CHĂM CHỈ\". Trong các khẳng định sau, khẳng định nào là ĐÚNG?",
        options: ["$\\text{H} \\in M$", "$\\text{X} \\in M$", "$\\text{C} \\notin M$", "$\\text{M} \\notin M$"],
        correctIndex: 0,
        explanation: "Các chữ cái có mặt trong từ \"CHĂM CHỈ\" gồm: C, H, Ă, M, I. Do đó khẳng định $\\text{H} \\in M$ là ĐÚNG."
      },
      {
        objectiveCodes: ["1.2", "b1-nb-2"],
        level: "nhan_biet",
        badge: "Câu 1 - TN6 CI Bài 1",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho tập hợp $M = \\{a; b; c\\}$. Cách viết nào sau đây là ĐÚNG?",
        options: ["$a \\in M$", "$a \\subset M$", "$\\{a\\} \\in M$", "$d \\in M$"],
        correctIndex: 0,
        explanation: "Kí hiệu $\\in$ dùng giữa phần tử và tập hợp. Vì $a$ là phần tử của $M$ nên viết $a \\in M$."
      },
      // YCCĐ 1.3: Mô tả tập hợp bằng cách liệt kê các phần tử
      {
        objectiveCodes: ["1.3", "b1-th-1"],
        level: "thong_hieu",
        badge: "Dạng 1 Bài 3d - SH6-CĐ 1.1",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Viết tập hợp $D$ gồm các số tự nhiên chia 3 dư 1 và không vượt quá 16 ($D = \\{x \\in \\mathbb{N} \\mid x = 3k + 1, x \\le 16\\}$) bằng cách liệt kê phần tử:",
        options: ["$D = \\{1; 4; 7; 10; 13; 16\\}$", "$D = \\{4; 7; 10; 13; 16\\}$", "$D = \\{1; 4; 7; 10; 13\\}$", "$D = \\{0; 1; 4; 7; 10; 13; 16\\}$"],
        correctIndex: 0,
        explanation: "Các số tự nhiên chia 3 dư 1 bắt đầu từ $3 \\times 0 + 1 = 1$ và không vượt quá 16 gồm: 1; 4; 7; 10; 13; 16. Do đó $D = \\{1; 4; 7; 10; 13; 16\\}$."
      },
      {
        objectiveCodes: ["1.3", "b1-th-1"],
        level: "thong_hieu",
        badge: "BTVN Bài 1 - SH6-CĐ 1.1",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Viết tập hợp các số tự nhiên lớn hơn 7 và nhỏ hơn 15 bằng cách liệt kê các phần tử:",
        options: ["$\\{8; 9; 10; 11; 12; 13; 14\\}$", "$\\{7; 8; 9; 10; 11; 12; 13; 14\\}$", "$\\{8; 9; 10; 11; 12; 13; 14; 15\\}$", "$\\{7; 8; 9; 10; 11; 12; 13; 14; 15\\}$"],
        correctIndex: 0,
        explanation: "Các số tự nhiên lớn hơn 7 và nhỏ hơn 15 gồm: 8; 9; 10; 11; 12; 13; 14."
      },
      {
        objectiveCodes: ["1.3", "b1-th-1"],
        level: "thong_hieu",
        badge: "BTVN Bài 2 - SH6-CĐ 1.1",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Viết tập hợp $T$ các chữ cái xuất hiện trong từ \"TOÁN HỌC\" bằng cách liệt kê các phần tử:",
        options: ["$T = \\{\\text{T; O; A; N; H; C}\\}$", "$T = \\{\\text{T; O; A; N; H; O; C}\\}$", "$T = \\{\\text{T; O; A; N; H}\\}$", "$T = \\{\\text{O; A; N; H; C}\\}$"],
        correctIndex: 0,
        explanation: "Trong từ \"TOÁN HỌC\", chữ O xuất hiện 2 lần nhưng chỉ được viết 1 lần. Tập hợp gồm các chữ cái: T, O, A, N, H, C."
      },
      // YCCĐ 1.4: Mô tả tập hợp bằng cách chỉ ra tính chất đặc trưng
      {
        objectiveCodes: ["1.4", "b1-th-2"],
        level: "thong_hieu",
        badge: "Dạng 1 Bài 4c - SH6-CĐ 1.1",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho tập hợp $D = \\{2; 5; 8; 11; 14; 17; 20\\}$. Cách viết nào sau đây chỉ ra tính chất đặc trưng cho các phần tử của tập hợp $D$?",
        options: [
          "$D = \\{x \\in \\mathbb{N} \\mid x \\text{ chia 3 dư 2 và } x \\le 20\\}$",
          "$D = \\{x \\in \\mathbb{N} \\mid x \\text{ chia 3 dư 1 và } x \\le 20\\}$",
          "$D = \\{x \\in \\mathbb{N} \\mid x \\text{ chia hết cho 3 và } x \\le 20\\}$",
          "$D = \\{x \\in \\mathbb{N} \\mid 2 \\le x < 20\\}$"
        ],
        correctIndex: 0,
        explanation: "Mỗi phần tử của $D$ khi chia cho 3 đều có số dư là 2 ($2 = 3 \\times 0 + 2, 5 = 3 \\times 1 + 2, \\dots, 20 = 3 \\times 6 + 2$). Vậy $D = \\{x \\in \\mathbb{N} \\mid x \\text{ chia 3 dư 2 và } x \\le 20\\}$."
      },
      // YCCĐ 1.5: Vận dụng tập hợp vào phân loại dữ liệu thực tế
      {
        objectiveCodes: ["1.5", "b1-vd-1"],
        level: "van_dung",
        badge: "BTVN Bài 5a - SH6-CĐ 1.1",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Viết tập hợp $G$ các số tự nhiên có hai chữ số trong đó chữ số hàng chục hơn chữ số hàng đơn vị là 1:",
        options: [
          "$G = \\{10; 21; 32; 43; 54; 65; 76; 87; 98\\}$",
          "$G = \\{21; 32; 43; 54; 65; 76; 87; 98\\}$",
          "$G = \\{10; 21; 32; 43; 54; 65; 76; 87; 98; 109\\}$",
          "$G = \\{12; 23; 34; 45; 56; 67; 78; 89\\}$"
        ],
        correctIndex: 0,
        explanation: "Gọi số có hai chữ số là $\\overline{ab}$ ($1 \\le a \\le 9, 0 \\le b \\le 8$). Vì $a - b = 1 \\Rightarrow a = b + 1$. Với $b \\in \\{0; 1; 2; 3; 4; 5; 6; 7; 8\\}$, ta được các số: 10; 21; 32; 43; 54; 65; 76; 87; 98."
      },
      {
        objectiveCodes: ["1.5", "b1-vd-1"],
        level: "van_dung",
        badge: "BTVN Bài 6 - SH6-CĐ 1.1",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho ba chữ số $0; 2; 3$. Viết tập hợp $H$ các số tự nhiên có hai chữ số lập được từ ba chữ số đã cho:",
        options: [
          "$H = \\{20; 22; 23; 30; 32; 33\\}$",
          "$H = \\{20; 23; 30; 32\\}$",
          "$H = \\{02; 03; 20; 22; 23; 30; 32; 33\\}$",
          "$H = \\{22; 23; 32; 33\\}$"
        ],
        correctIndex: 0,
        explanation: "Chữ số hàng chục khác 0 có 2 cách chọn (2 hoặc 3). Chữ số hàng đơn vị có 3 cách chọn (0; 2; 3). Các số lập được là: 20; 22; 23; 30; 32; 33."
      },
      {
        objectiveCodes: ["1.5", "b1-vd-1"],
        level: "van_dung",
        badge: "Câu 15 - TN6 CI Bài 1",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho $B$ là tập hợp các số tự nhiên chẵn nhỏ hơn 10. Tập hợp $B$ có bao nhiêu tập hợp con?",
        options: ["32 tập hợp con", "16 tập hợp con", "15 tập hợp con", "30 tập hợp con"],
        correctIndex: 0,
        explanation: "Tập hợp $B = \\{0; 2; 4; 6; 8\\}$ gồm có 5 phần tử. Một tập hợp có $n$ phần tử thì có $2^n$ tập hợp con. Do đó số tập hợp con của $B$ là $2^5 = 32$ tập hợp con."
      },
      {
        objectiveCodes: ["1.5", "b1-vd-1"],
        level: "van_dung_cao",
        badge: "Câu 16 - TN6 CI Bài 1",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Biết $A$ là tập hợp các số tự nhiên lớn hơn 100 và chia hết cho 3, $B$ là tập hợp các số tự nhiên nhỏ hơn 1000 và chia hết cho 2, $C$ là tập hợp tất cả các số vừa thuộc $A$ vừa thuộc $B$. Số phần tử của tập hợp $C$ là:",
        options: ["150 phần tử", "148 phần tử", "149 phần tử", "151 phần tử"],
        correctIndex: 0,
        explanation: "$C$ là tập hợp các số vừa thuộc $A$ vừa thuộc $B$ nên các phần tử của $C$ lớn hơn 100, nhỏ hơn 1000 và chia hết cho cả 2 và 3 (tức chia hết cho 6). Dãy số đó là: $C = \\{102; 108; 114; \\dots; 996\\}$. Số phần tử của $C$ là: $(996 - 102) : 6 + 1 = 150$ phần tử."
      },
      {
        objectiveCodes: ["1.5", "b1-vd-1"],
        level: "van_dung_cao",
        badge: "Câu 17 - TN6 CI Bài 1",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Kết quả điều tra ở một lớp học cho thấy: Có 20 học sinh thích bóng đá, 17 học sinh thích bơi, 36 học sinh thích bóng chuyền, 14 học sinh thích đá bóng và bơi, 13 học sinh thích bơi và bóng chuyền, 15 học sinh thích bóng đá và bóng chuyền, 10 học sinh thích cả ba môn, 12 học sinh không thích môn nào. Lớp học đó có tất cả bao nhiêu học sinh?",
        options: ["53 học sinh", "45 học sinh", "43 học sinh", "48 học sinh"],
        correctIndex: 0,
        explanation: "Số HS chỉ thích đá bóng: $20 - 4 - 5 - 10 = 1$ (bạn). Số HS chỉ thích bơi: $17 - 10 - 4 - 3 = 0$ (bạn). Số HS chỉ thích bóng chuyền: $36 - 3 - 5 - 10 = 18$ (bạn). Số HS thích đúng 2 môn: $(14 - 10) + (15 - 10) + (13 - 10) = 4 + 5 + 3 = 12$ (bạn). Số HS cả 3 môn: 10 (bạn). Số HS không thích môn nào: 12 (bạn). Tổng số HS của lớp là: $1 + 0 + 18 + 12 + 10 + 12 = 53$ học sinh."
      }
    ];

    const selectedB1 = pickAuthenticQuestion(poolB1, objId || objCode, level, existingQuestions);
    const { options, correctIndex } = shuffleAnswers(selectedB1.options);

    return {
      id: `ai-gen-${ts}`,
      badge: `${badgePrefix} - ${selectedB1.badge}`,
      source: selectedB1.source,
      isAiGenerated: true,
      question: selectedB1.question,
      options,
      correctIndex,
      explanation: selectedB1.explanation,
    };
  }

  // =========================================================================
  // BÀI 2: CÁCH GHI SỐ TỰ NHIÊN
  // =========================================================================
  if (id.includes("b2-cach-ghi-so-tu-nhien") || id.includes("cach-ghi-so")) {
    const poolB2 = [
      // -----------------------------------------------------------------------
      // YCCĐ 2.1: Nhận biết cấu tạo hệ thập phân và giá trị chữ số (Nhận biết)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Câu 2 - TN6 CI Bài 2 & SGK",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 10",
        question: "Trong số $46\\ 308\\ 000$, chữ số $6$ nằm ở hàng nào và có giá trị bằng bao nhiêu?",
        options: [
          "Hàng triệu, có giá trị là $6\\ 000\\ 000$",
          "Hàng trăm nghìn, có giá trị là $600\\ 000$",
          "Hàng chục triệu, có giá trị là $60\\ 000\\ 000$",
          "Hàng nghìn, có giá trị là $6\\ 000$"
        ],
        correctIndex: 0,
        explanation: "Số $46\\ 308\\ 000$ có chữ số $6$ ở hàng triệu (thuộc lớp triệu), nên có giá trị là: $6 \\times 1\\ 000\\ 000 = 6\\ 000\\ 000$."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Câu 7 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 Dạng 1 Bài 1",
        question: "Cho số tự nhiên $5432$. Số chục và chữ số hàng chục của số này lần lượt là:",
        options: [
          "Số chục là $543$, chữ số hàng chục là $3$",
          "Số chục là $32$, chữ số hàng chục là $3$",
          "Số chục là $3$, chữ số hàng chục là $3$",
          "Số chục là $43$, chữ số hàng chục là $3$"
        ],
        correctIndex: 0,
        explanation: "Trong số $5432$, chữ số đứng ở hàng chục là $3$, còn số chục là $543$ (vì $5432 = 543 \\times 10 + 2$)."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 1a - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 1 Bài 1a",
        question: "Viết số tự nhiên có số chục là $135$ và chữ số hàng đơn vị là $7$:",
        options: [
          "$1357$",
          "$13507$",
          "$1375$",
          "$1537$"
        ],
        correctIndex: 0,
        explanation: "Số tự nhiên có số chục là $135$, chữ số hàng đơn vị là $7$ được viết là: $135 \\times 10 + 7 = 1357$."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 1b - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 1 Bài 1b",
        question: "Cho số $1425$. Số trăm và chữ số hàng trăm của số này lần lượt là:",
        options: [
          "Số trăm là $14$, chữ số hàng trăm là $4$",
          "Số trăm là $4$, chữ số hàng trăm là $4$",
          "Số trăm là $142$, chữ số hàng trăm là $2$",
          "Số trăm là $14$, chữ số hàng trăm là $1$"
        ],
        correctIndex: 0,
        explanation: "Trong số $1425$, chữ số đứng ở hàng trăm là $4$, còn số trăm là $14$ (vì $1425 = 14 \\times 100 + 25$)."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 1b - SH6-CĐ 1.2 (Số 2307)",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 1 Bài 1b",
        question: "Cho số $2307$. Số trăm và chữ số hàng trăm của số này lần lượt là:",
        options: [
          "Số trăm là $23$, chữ số hàng trăm là $3$",
          "Số trăm là $3$, chữ số hàng trăm là $3$",
          "Số trăm là $230$, chữ số hàng trăm là $0$",
          "Số trăm là $23$, chữ số hàng trăm là $2$"
        ],
        correctIndex: 0,
        explanation: "Trong số $2307$, chữ số đứng ở hàng trăm là $3$, còn số trăm là $23$ (vì $2307 = 23 \\times 100 + 7$)."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Câu 1 - TN6 CI Bài 2 & SGK",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 9",
        question: "Viết số tự nhiên sau: \"Ba trăm hai mươi bảy tỉ bốn trăm chín mươi triệu không trăm ba mươi mốt nghìn năm trăm tám mươi bảy\":",
        options: [
          "$327\\ 490\\ 031\\ 587$",
          "$32\\ 749\\ 031\\ 587$",
          "$327\\ 409\\ 031\\ 587$",
          "$300\\ 274\\ 031\\ 587$"
        ],
        correctIndex: 0,
        explanation: "Số gồm 327 tỉ, 490 triệu, 031 nghìn và 587 đơn vị. Ta viết là: $327\\ 490\\ 031\\ 587$."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 2b - SH6-CĐ 1.2 & TN6 CI",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 1 Bài 2b",
        question: "Số tự nhiên nhỏ nhất có bốn chữ số khác nhau là:",
        options: [
          "$1023$",
          "$1000$",
          "$1234$",
          "$1032$"
        ],
        correctIndex: 0,
        explanation: "Chữ số hàng nghìn nhỏ nhất khác 0 là $1$, chữ số hàng trăm nhỏ nhất còn lại là $0$, chữ số hàng chục nhỏ nhất là $2$, chữ số hàng đơn vị nhỏ nhất là $3$. Số nhỏ nhất là $1023$."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Câu 4 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 Dạng 1 Bài 2",
        question: "Số tự nhiên lớn nhất có ba chữ số khác nhau là:",
        options: [
          "$987$",
          "$999$",
          "$988$",
          "$989$"
        ],
        correctIndex: 0,
        explanation: "Để số lớn nhất thì chữ số hàng trăm phải là lớn nhất ($9$), chữ số hàng chục lớn nhất tiếp theo khác 9 là $8$, chữ số hàng đơn vị lớn nhất khác 9 và 8 là $7$. Vậy số đó là $987$."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Câu 14 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 Dạng 1 Bài 5",
        question: "Viết tập hợp các chữ số của số tự nhiên $2021$ bằng cách liệt kê phần tử:",
        options: [
          "$\\{0; 1; 2\\}$",
          "$\\{2; 0; 2; 1\\}$",
          "$\\{2; 2; 1\\}$",
          "$\\{0; 2\\}$"
        ],
        correctIndex: 0,
        explanation: "Số $2021$ được cấu tạo từ các chữ số $2, 0, 1$. Trong tập hợp mỗi phần tử chỉ liệt kê một lần: $\\{0; 1; 2\\}$."
      },
      {
        objectiveCodes: ["2.1", "b2-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 3a - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 1 Bài 3a",
        question: "Số tự nhiên nhỏ nhất có tám chữ số là:",
        options: [
          "$10\\ 000\\ 000$",
          "$100\\ 000\\ 000$",
          "$1\\ 000\\ 000$",
          "$10\\ 000\\ 001$"
        ],
        correctIndex: 0,
        explanation: "Số tự nhiên nhỏ nhất có tám chữ số gồm chữ số 1 đứng đầu và 7 chữ số 0 đứng sau: $10\\ 000\\ 000$ (mười triệu)."
      },

      // -----------------------------------------------------------------------
      // YCCĐ 2.2: Đọc và nhận biết các chữ số La Mã từ 1 đến 30 (Nhận biết)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["2.2", "b2-nb-2"],
        level: "nhan_biet",
        badge: "Câu 3 - TN6 CI Bài 2 & SGK",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 11",
        question: "Số La Mã $\\text{XXVII}$ tương ứng với giá trị nào trong hệ thập phân?",
        options: [
          "$27$",
          "$28$",
          "$29$",
          "$23$"
        ],
        correctIndex: 0,
        explanation: "Theo quy tắc ghi số La Mã: $\\text{XXVII} = 10 + 10 + 5 + 1 + 1 = 27$."
      },
      {
        objectiveCodes: ["2.2", "b2-nb-2"],
        level: "nhan_biet",
        badge: "Câu 5 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 Dạng 4 Bài 1b",
        question: "Viết các số tự nhiên $19$ và $25$ bằng chữ số La Mã:",
        options: [
          "$\\text{XIX}$ và $\\text{XXV}$",
          "$\\text{XVIV}$ và $\\text{XXV}$",
          "$\\text{XVIIII}$ và $\\text{XXV}$",
          "$\\text{XIX}$ và $\\text{XV}$"
        ],
        correctIndex: 0,
        explanation: "Số $19 = 10 + (10 - 1)$ viết là $\\text{XIX}$; số $25 = 20 + 5$ viết là $\\text{XXV}$."
      },
      {
        objectiveCodes: ["2.2", "b2-nb-2"],
        level: "nhan_biet",
        badge: "Câu 8 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Đại hội đại biểu toàn quốc lần thứ XIII của Đảng Cộng Sản Việt Nam được ghi bằng số La Mã là XIII. Số XIII có giá trị là bao nhiêu trong hệ thập phân?",
        options: ["13", "8", "12", "11"],
        correctIndex: 0,
        explanation: "Theo quy tắc số La Mã: $\\text{XIII} = 10 + 1 + 1 + 1 = 13$."
      },
      {
        objectiveCodes: ["2.2", "b2-nb-2"],
        level: "nhan_biet",
        badge: "Câu 10 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Các số La Mã $\\text{XI}$ và $\\text{XXII}$ lần lượt tương ứng với giá trị nào trong hệ thập phân?",
        options: [
          "$11$ và $22$",
          "$11$ và $21$",
          "$9$ và $22$",
          "$11$ và $20$"
        ],
        correctIndex: 0,
        explanation: "$\\text{XI} = 10 + 1 = 11$; $\\text{XXII} = 10 + 10 + 1 + 1 = 22$."
      },
      {
        objectiveCodes: ["2.2", "b2-nb-2"],
        level: "nhan_biet",
        badge: "Dạng 4 Bài 1a - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 4 Bài 1a",
        question: "Đọc các số La Mã sau trong hệ thập phân: $\\text{XIV}$ và $\\text{XXVI}$:",
        options: [
          "$14$ và $26$",
          "$16$ và $24$",
          "$14$ và $24$",
          "$15$ và $26$"
        ],
        correctIndex: 0,
        explanation: "$\\text{XIV} = 10 + (5 - 1) = 14$; $\\text{XXVI} = 10 + 10 + 5 + 1 = 26$."
      },
      {
        objectiveCodes: ["2.2", "b2-nb-2"],
        level: "nhan_biet",
        badge: "Bài 1.6 - SGK Toán 6 Tập 1 Trang 11",
        source: "SGK Toán 6 Tập 1 Trang 11 (Bộ Kết Nối Tri Thức)",
        question: "Số La Mã $\\text{XXIV}$ tương ứng với giá trị nào trong hệ thập phân?",
        options: [
          "$24$",
          "$26$",
          "$29$",
          "$19$"
        ],
        correctIndex: 0,
        explanation: "Theo quy tắc đọc chữ số La Mã: $\\text{XXIV} = 10 + 10 + (5 - 1) = 24$."
      },

      // -----------------------------------------------------------------------
      // YCCĐ 2.3: Biểu diễn số tự nhiên thành tổng giá trị các hàng (Thông hiểu)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Câu 13 - TN6 CI Bài 2 & SGK",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 10",
        question: "Cho số tự nhiên có tổng giá trị các chữ số của nó là: $3 \\times 1000 + 8 \\times 10 + 6$. Số đó là:",
        options: [
          "$3086$",
          "$3806$",
          "$3860$",
          "$3068$"
        ],
        correctIndex: 0,
        explanation: "Ta có: $3 \\times 1000 + 8 \\times 10 + 6 = 3000 + 80 + 6 = 3086$. Số cần tìm là $3086$."
      },
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Bài 1.7 - SGK Toán 6 Tập 1 Trang 11",
        source: "SGK Toán 6 Tập 1 Trang 11 (Bộ Kết Nối Tri Thức)",
        question: "Biểu diễn số tự nhiên $5\\ 408$ thành tổng giá trị các chữ số theo các hàng:",
        options: [
          "$5 \\times 1000 + 4 \\times 100 + 0 \\times 10 + 8$",
          "$5 \\times 100 + 4 \\times 10 + 8$",
          "$5000 + 48$",
          "$54 \\times 100 + 8$"
        ],
        correctIndex: 0,
        explanation: "Số $5\\ 408$ gồm 5 nghìn, 4 trăm, 0 chục và 8 đơn vị: $5 \\times 1000 + 4 \\times 100 + 0 \\times 10 + 8$."
      },
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Câu 9 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho số tự nhiên có bốn chữ số $9753$. Phát biểu nào sau đây là SAI?",
        options: [
          "Là số tự nhiên lớn nhất có 4 chữ số",
          "Chữ số hàng chục là $5$",
          "Số trăm là $97$",
          "$9753 = 9 \\times 1000 + 7 \\times 100 + 5 \\times 10 + 3$"
        ],
        correctIndex: 0,
        explanation: "Số tự nhiên lớn nhất có bốn chữ số là $9999$, do đó phát biểu \"$9753$ là số tự nhiên lớn nhất có 4 chữ số\" là SAI."
      },
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Câu 12 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Một số tự nhiên được viết bởi ba chữ số $1$ và ba chữ số $0$ nằm xen kẽ nhau. Số đó là:",
        options: [
          "$101010$",
          "$010101$",
          "$10101$",
          "$111000$"
        ],
        correctIndex: 0,
        explanation: "Chữ số đầu tiên của số tự nhiên phải khác 0, nên chữ số đầu tiên là 1. Các chữ số 1 và 0 xen kẽ nhau: $101010$."
      },
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Câu 11 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Viết tập hợp các số tự nhiên $x$ thỏa mãn $x \\in \\mathbb{N}^*$ và $x \\le 7$ bằng cách liệt kê phần tử:",
        options: [
          "$\\{1; 2; 3; 4; 5; 6; 7\\}$",
          "$\\{0; 1; 2; 3; 4; 5; 6; 7\\}$",
          "$\\{1; 2; 3; 4; 5; 6\\}$",
          "$\\{0; 1; 2; 3; 4; 5; 6\\}$"
        ],
        correctIndex: 0,
        explanation: "Các số tự nhiên khác 0 và không vượt quá 7 gồm: $1; 2; 3; 4; 5; 6; 7$. Do đó tập hợp là $\\{1; 2; 3; 4; 5; 6; 7\\}$."
      },
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Dạng 2 Bài 6a - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 2 Bài 6a",
        question: "Viết tập hợp các số tự nhiên có hai chữ số trong đó chữ số hàng chục nhỏ hơn chữ số hàng đơn vị là 4:",
        options: [
          "$\\{15; 26; 37; 48; 59\\}$",
          "$\\{14; 25; 36; 47; 58\\}$",
          "$\\{15; 26; 37; 48\\}$",
          "$\\{26; 37; 48; 59\\}$"
        ],
        correctIndex: 0,
        explanation: "Gọi số có hai chữ số là $\\overline{ab}$ ($1 \\le a \\le 9, 0 \\le b \\le 9$). Ta có $b - a = 4 \\Rightarrow b = a + 4$. Vì $b \\le 9$ nên $a \\in \\{1; 2; 3; 4; 5\\}$. Khi đó ta được các số: $15; 26; 37; 48; 59$."
      },
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Dạng 2 Bài 6b - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 2 Bài 6b",
        question: "Viết tập hợp các số tự nhiên có hai chữ số mà chữ số hàng chục gấp ba lần chữ số hàng đơn vị bằng cách liệt kê:",
        options: [
          "$\\{31; 62; 93\\}$",
          "$\\{30; 31; 62; 93\\}$",
          "$\\{13; 26; 39\\}$",
          "$\\{31; 62\\}$"
        ],
        correctIndex: 0,
        explanation: "Gọi số đó là $\\overline{ab}$ ($a, b \\in \\mathbb{N}, 1 \\le a \\le 9, 0 \\le b \\le 9$). Vì $a = 3b$ và $a > 0$ nên $b \\in \\{1; 2; 3\\}$. Khi đó $a$ tương ứng là $3; 6; 9$. Ta được các số: $31; 62; 93$."
      },
      {
        objectiveCodes: ["2.3", "b2-th-1"],
        level: "thong_hieu",
        badge: "Dạng 2 Bài 6c - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 2 Bài 6c",
        question: "Viết tập hợp các số tự nhiên có hai chữ số trong đó chữ số hàng chục nhỏ hơn chữ số hàng đơn vị và tổng hai chữ số bằng 12:",
        options: [
          "$\\{39; 48; 57\\}$",
          "$\\{39; 48; 57; 66\\}$",
          "$\\{48; 57; 66\\}$",
          "$\\{39; 48; 57; 75; 84; 93\\}$"
        ],
        correctIndex: 0,
        explanation: "Gọi số đó là $\\overline{ab}$ ($a < b$ và $a + b = 12$). Vì $a < b$ nên $a < 6$. Ta có các cặp $(a, b)$ là: $(3, 9); (4, 8); (5, 7)$. Các số lập được là: $39; 48; 57$."
      },

      // -----------------------------------------------------------------------
      // YCCĐ 2.4: Ứng dụng viết số La Mã và số tự nhiên trong đời sống (Vận dụng & Vận dụng cao)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Câu 6 - TN6 CI Bài 2 & SGK",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 11",
        question: "Đồng hồ mặt số La Mã có kim ngắn chỉ số X và kim dài chỉ số II. Đồng hồ đang chỉ mấy giờ?",
        options: [
          "$10$ giờ $10$ phút",
          "$10$ giờ $2$ phút",
          "$2$ giờ $10$ phút",
          "$9$ giờ $10$ phút"
        ],
        correctIndex: 0,
        explanation: "Kim ngắn chỉ số X tương ứng với 10 giờ. Kim dài chỉ số II tương ứng với 10 phút. Vậy đồng hồ đang chỉ 10 giờ 10 phút."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Bài 1.9 - SGK Toán 6 Tập 1 Trang 12",
        source: "SGK Toán 6 Tập 1 Trang 12 (Bộ Kết Nối Tri Thức)",
        question: "Bác Hồ đọc Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa vào năm 1945. Năm 1945 thuộc thế kỉ nào (được viết bằng chữ số La Mã)?",
        options: [
          "Thế kỉ $\\text{XX}$",
          "Thế kỉ $\\text{XIX}$",
          "Thế kỉ $\\text{XXI}$",
          "Thế kỉ $\\text{XVIII}$"
        ],
        correctIndex: 0,
        explanation: "Năm 1945 thuộc khoảng từ năm 1901 đến 2000, tức thế kỉ 20. Viết bằng chữ số La Mã là thế kỉ $\\text{XX}$."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Câu 15 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 Dạng 2 Bài 1",
        question: "Dùng ba chữ số $0; 6; 8$ để viết số tự nhiên, hỏi có bao nhiêu số tự nhiên có ba chữ số mà các chữ số khác nhau?",
        options: [
          "$4$ số",
          "$2$ số",
          "$3$ số",
          "$5$ số"
        ],
        correctIndex: 0,
        explanation: "Chữ số hàng trăm phải khác 0 nên có 2 cách chọn ($6$ hoặc $8$). Các số viết được là: $608; 680; 806; 860$. Vậy có tất cả $4$ số."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Dạng 2 Bài 2 - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 2 Bài 2",
        question: "Dùng cả năm chữ số $0; 2; 5; 6; 9$ (mỗi chữ số chỉ được viết một lần), số tự nhiên lớn nhất có thể viết được là:",
        options: [
          "$96\\ 520$",
          "$96\\ 502$",
          "$95\\ 620$",
          "$96\\ 250$"
        ],
        correctIndex: 0,
        explanation: "Để viết số lớn nhất, ta xếp các chữ số theo thứ tự giảm dần từ hàng cao nhất đến hàng thấp nhất: hàng chục nghìn là 9, hàng nghìn là 6, hàng trăm là 5, hàng chục là 2, hàng đơn vị là 0. Số lớn nhất là $96\\ 520$."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Câu 16 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Dùng bốn chữ số $0; 3; 5; 7$, viết số tự nhiên nhỏ nhất có bốn chữ số khác nhau mà chữ số $7$ có giá trị bằng $70$. Số đó là:",
        options: [
          "$3075$",
          "$3570$",
          "$5370$",
          "$3057$"
        ],
        correctIndex: 0,
        explanation: "Chữ số 7 có giá trị bằng 70 nên chữ số 7 phải đứng ở hàng chục. Để số nhỏ nhất, chữ số hàng nghìn phải là chữ số nhỏ nhất khác 0 trong các chữ số còn lại ($3$), hàng trăm là $0$, hàng chục là $7$, hàng đơn vị là $5$. Vậy số đó là $3075$."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Câu 17 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Nếu thêm chữ số $5$ vào sau một số tự nhiên có ba chữ số thì được số tự nhiên mới như thế nào so với số cũ?",
        options: [
          "Tăng gấp $10$ lần và thêm $5$ đơn vị so với số tự nhiên cũ",
          "Tăng $5$ đơn vị so với số tự nhiên cũ",
          "Tăng gấp $10$ lần so với số tự nhiên cũ",
          "Giảm $10$ lần và thêm $5$ đơn vị so với số tự nhiên cũ"
        ],
        correctIndex: 0,
        explanation: "Gọi số cũ là $\\overline{abc}$. Khi thêm chữ số $5$ vào bên phải ta được số mới là $\\overline{abc5} = \\overline{abc} \\times 10 + 5$. Do đó số mới tăng gấp $10$ lần và thêm $5$ đơn vị so với số cũ."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Câu 18 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Mẹ cho An 1 tờ tiền mệnh giá $100\\ 000$ đồng, 3 tờ tiền $20\\ 000$ đồng, 4 tờ tiền $10\\ 000$ đồng và 1 tờ tiền $5\\ 000$ đồng để mua vở. Biết giá mỗi quyển vở là $5\\ 500$ đồng. Hỏi An mua được nhiều nhất bao nhiêu quyển vở?",
        options: [
          "$37$ quyển vở",
          "$38$ quyển vở",
          "$39$ quyển vở",
          "$40$ quyển vở"
        ],
        correctIndex: 0,
        explanation: "Tổng số tiền mẹ đưa cho An là: $100\\ 000 + 3 \\times 20\\ 000 + 4 \\times 10\\ 000 + 5\\ 000 = 205\\ 000$ (đồng). Ta có: $205\\ 000 : 5\\ 500 = 37$ (dư $1\\ 500$ đồng). Vậy An mua được nhiều nhất $37$ quyển vở."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Dạng 3 Bài 4b - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 3 Bài 4b",
        question: "Có tất cả bao nhiêu số tự nhiên có ba chữ số?",
        options: [
          "$900$ số",
          "$899$ số",
          "$901$ số",
          "$999$ số"
        ],
        correctIndex: 0,
        explanation: "Số nhỏ nhất có ba chữ số là $100$, số lớn nhất có ba chữ số là $999$. Số các số có ba chữ số là: $(999 - 100) + 1 = 900$ số."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Dạng 3 Bài 2 - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 3 Bài 2",
        question: "Tính số các số tự nhiên chẵn có bốn chữ số:",
        options: [
          "4500 số",
          "4499 số",
          "4501 số",
          "5000 số"
        ],
        correctIndex: 0,
        explanation: "Các số tự nhiên chẵn có bốn chữ số là $1000; 1002; \\dots; 9998$. Khoảng cách giữa hai số liên tiếp là 2. Số lượng các số là: $(9998 - 1000) : 2 + 1 = 4500$ số."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung",
        badge: "Dạng 4 Bài 2 - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 Dạng 4 Bài 2",
        question: "Số La Mã $\\text{CDXCV}$ có giá trị tương ứng là bao nhiêu trong hệ thập phân?",
        options: [
          "495",
          "615",
          "445",
          "595"
        ],
        correctIndex: 0,
        explanation: "$\\text{CD} = 400$, $\\text{XC} = 90$, $\\text{V} = 5$. Do đó: $\\text{CDXCV} = 400 + 90 + 5 = 495$."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung_cao",
        badge: "Câu 19 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Viết tất cả các số tự nhiên từ $100$ đến $200$ phải dùng tất cả bao nhiêu chữ số $1$?",
        options: [
          "120 chữ số 1",
          "100 chữ số 1",
          "110 chữ số 1",
          "121 chữ số 1"
        ],
        correctIndex: 0,
        explanation: "Trong các số từ $100$ đến $200$:\n- Hàng trăm: Từ 100 đến 199 có 100 chữ số 1.\n- Hàng chục: Các số $110, 111, \\dots, 119$ có 10 chữ số 1.\n- Hàng đơn vị: Các số $101, 111, \\dots, 191$ có 10 chữ số 1.\nTổng số chữ số 1 cần dùng là: $100 + 10 + 10 = 120$ chữ số 1."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung_cao",
        badge: "Câu 20 - TN6 CI Bài 2",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Trong một đợt quyên góp, nhà trường ủng hộ được 9 thùng khẩu trang và 9 hộp khẩu trang. Biết mỗi thùng chứa 50 hộp, mỗi hộp có 50 chiếc khẩu trang. Hỏi trường đã ủng hộ tất cả bao nhiêu chiếc khẩu trang?",
        options: [
          "22 950 chiếc",
          "22 500 chiếc",
          "22 900 chiếc",
          "22 550 chiếc"
        ],
        correctIndex: 0,
        explanation: "9 thùng chứa số hộp là: $9 \\times 50 = 450$ (hộp). Tổng số hộp khẩu trang là: $450 + 9 = 459$ (hộp). Tổng số chiếc khẩu trang là: $459 \\times 50 = 22\\ 950$ (chiếc)."
      },
      {
        objectiveCodes: ["2.4", "b2-vd-1"],
        level: "van_dung_cao",
        badge: "Dạng 3 Bài 3 - SH6-CĐ 1.2",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Muốn viết tất cả các số tự nhiên từ $100$ đến $999$ phải dùng tất cả bao nhiêu chữ số $9$?",
        options: [
          "280 chữ số 9",
          "270 chữ số 9",
          "300 chữ số 9",
          "180 chữ số 9"
        ],
        correctIndex: 0,
        explanation: "Ta tính chữ số 9 ở từng hàng:\n- Hàng đơn vị: Có 90 số có chữ số 9 ở hàng đơn vị.\n- Hàng chục: Có 90 số có chữ số 9 ở hàng chục.\n- Hàng trăm: Từ 900 đến 999 có 100 chữ số 9 ở hàng trăm.\nTổng cộng cần dùng: $90 + 90 + 100 = 280$ chữ số 9."
      }
    ];

    const selectedB2 = pickAuthenticQuestion(poolB2, objId || objCode, level, existingQuestions);
    const { options, correctIndex } = shuffleAnswers(selectedB2.options);

    return {
      id: `ai-gen-${ts}`,
      badge: `${badgePrefix} - ${selectedB2.badge}`,
      source: selectedB2.source,
      isAiGenerated: true,
      question: selectedB2.question,
      options,
      correctIndex,
      explanation: selectedB2.explanation,
    };
  }

  // =========================================================================
  // BÀI 3: THỨ TỰ TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN
  // =========================================================================
  if (id.includes("b3") || id.includes("thu-tu")) {
    const poolB3: AuthenticQuestionItem[] = [
      // -----------------------------------------------------------------------
      // YCCĐ 3.1: Nhận biết số liền trước, số liền sau của số tự nhiên (Nhận biết)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Câu 1 Trắc nghiệm - SH6-CĐ 1.3 & SGK",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Số tự nhiên liền trước số $7428$ là số nào?",
        options: [
          "$7427$",
          "$7429$",
          "$7439$",
          "$7426$"
        ],
        correctIndex: 0,
        explanation: "Số tự nhiên liền trước của số $7428$ là: $7428 - 1 = 7427$."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 1a - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 Dạng 1 Bài 1",
        question: "Số tự nhiên liền sau mỗi số $48;\\ 957;\\ 4782$ lần lượt là:",
        options: [
          "$49;\\ 958;\\ 4783$",
          "$47;\\ 956;\\ 4781$",
          "$49;\\ 957;\\ 4783$",
          "$48;\\ 958;\\ 4782$"
        ],
        correctIndex: 0,
        explanation: "Số liền sau của 48 là 49, của 957 là 958, của 4782 là 4783."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 1b - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 Dạng 1 Bài 1",
        question: "Số tự nhiên liền trước mỗi số $78;\\ 167;\\ 9479$ lần lượt là:",
        options: [
          "$77;\\ 166;\\ 9478$",
          "$79;\\ 168;\\ 9480$",
          "$77;\\ 167;\\ 9478$",
          "$78;\\ 166;\\ 9479$"
        ],
        correctIndex: 0,
        explanation: "Số liền trước của 78 là 77, của 167 là 166, của 9479 là 9478."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 1c - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 Dạng 1 Bài 1",
        question: "Cho số tự nhiên $m$ ($m \\in \\mathbb{N}^*$). Số liền trước của số $m + 1$ là:",
        options: [
          "$m$",
          "$m + 2$",
          "$m - 1$",
          "$2m$"
        ],
        correctIndex: 0,
        explanation: "Số liền trước của $(m + 1)$ là $(m + 1) - 1 = m$."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 3a - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 Dạng 1 Bài 3",
        question: "Cho số tự nhiên $m$ ($m \\in \\mathbb{N}^*$). Số liền sau của số $m - 1$ là:",
        options: [
          "$m$",
          "$m - 2$",
          "$m + 1$",
          "$2m$"
        ],
        correctIndex: 0,
        explanation: "Số liền sau của $(m - 1)$ là $(m - 1) + 1 = m$."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Câu 5a - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Điền vào chỗ trống để ba số là ba số tự nhiên liên tiếp tăng dần: $\\dots, 1200, \\dots$",
        options: [
          "$1199;\\ 1200;\\ 1201$",
          "$1198;\\ 1200;\\ 1202$",
          "$1201;\\ 1200;\\ 1199$",
          "$1190;\\ 1200;\\ 1210$"
        ],
        correctIndex: 0,
        explanation: "Số liền trước là $1200 - 1 = 1199$, số liền sau là $1200 + 1 = 1201$. Ba số liên tiếp tăng dần là: $1199;\\ 1200;\\ 1201$."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Dạng 1 Bài 3 - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 Dạng 1 Bài 3",
        question: "Số tự nhiên liền sau của số $199$ và số tự nhiên liền trước của số $400$ lần lượt là:",
        options: [
          "$200$ và $399$",
          "$198$ và $401$",
          "$200$ và $401$",
          "$198$ và $399$"
        ],
        correctIndex: 0,
        explanation: "Số liền sau của 199 là $199 + 1 = 200$. Số liền trước của 400 là $400 - 1 = 399$."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Câu 13 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Tích của số liền sau $2$ với số liền trước $4$ là:",
        options: [
          "$9$",
          "$6$",
          "$8$",
          "$12$"
        ],
        correctIndex: 0,
        explanation: "Số liền sau của 2 là 3, số liền trước của 4 là 3. Tích của chúng là: $3 \\times 3 = 9$."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Câu 19 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Trong các bộ ba số dưới đây, bộ ba số nào cho ta ba số tự nhiên liên tiếp tăng dần (với $a \\in \\mathbb{N}^*$)?",
        options: [
          "$a - 1;\\ a;\\ a + 1$",
          "$a + 1;\\ a;\\ a - 1$",
          "$a - 2;\\ a;\\ a + 2$",
          "$a;\\ a + 2;\\ a + 3$"
        ],
        correctIndex: 0,
        explanation: "Với $a \\in \\mathbb{N}^*$, ta có $a - 1 < a < a + 1$ và mỗi số hơn số đứng trước 1 đơn vị. Do đó $a - 1;\\ a;\\ a + 1$ là ba số tự nhiên liên tiếp tăng dần."
      },
      {
        objectiveCodes: ["3.1", "b3-nb-1"],
        level: "nhan_biet",
        badge: "Câu 10 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Trong các cặp số dưới đây, cặp số nào KHÔNG phải là hai số tự nhiên liên tiếp?",
        options: [
          "$6$ và $4$",
          "$9$ và $10$",
          "$100$ và $101$",
          "$49$ và $50$"
        ],
        correctIndex: 0,
        explanation: "Hai số tự nhiên liên tiếp hơn kém nhau đúng 1 đơn vị. Cặp $6$ và $4$ có hiệu $6 - 4 = 2$ nên không phải là hai số tự nhiên liên tiếp."
      },

      // -----------------------------------------------------------------------
      // YCCĐ 3.2: Biểu diễn số tự nhiên trên tia số nằm ngang (Nhận biết)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 1 - TN6 CI Bài 3 & SGK Trang 13",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 13",
        question: "Chọn phát biểu ĐÚNG trong các phát biểu sau. Cho hai số tự nhiên $a$ và $b$, nếu $a < b$ thì:",
        options: [
          "Điểm $a$ nằm bên trái điểm $b$ trên tia số nằm ngang",
          "Điểm $a$ nằm bên phải điểm $b$ trên tia số nằm ngang",
          "Điểm $a$ và điểm $b$ trùng nhau trên tia số nằm ngang",
          "Điểm $b$ nằm bên trái điểm $a$ trên tia số nằm ngang"
        ],
        correctIndex: 0,
        explanation: "Trên tia số nằm ngang có chiều mũi tên từ trái sang phải, nếu $a < b$ thì điểm $a$ nằm bên trái điểm $b$."
      },
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 2 - TN6 CI Bài 3 & SH6-CĐ 1.3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Điểm biểu diễn số tự nhiên nằm ngay bên trái điểm $4$ trên tia số là:",
        options: [
          "Điểm $3$",
          "Điểm $5$",
          "Điểm $2$",
          "Điểm $0$"
        ],
        correctIndex: 0,
        explanation: "Số tự nhiên nằm ngay bên trái số 4 là số liền trước của 4: $4 - 1 = 3$. Do đó điểm nằm ngay bên trái điểm 4 là điểm 3."
      },
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 3 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Điểm biểu diễn số tự nhiên nằm ngay bên phải điểm $9$ trên tia số là:",
        options: [
          "Điểm $10$",
          "Điểm $8$",
          "Điểm $11$",
          "Điểm $0$"
        ],
        correctIndex: 0,
        explanation: "Số tự nhiên nằm ngay bên phải số 9 trên tia số là số liền sau của 9: $9 + 1 = 10$. Do đó điểm nằm ngay bên phải điểm 9 là điểm 10."
      },
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 6 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Trên tia số, có bao nhiêu điểm biểu diễn các số tự nhiên nằm giữa điểm $4$ và điểm $5$?",
        options: [
          "$0$ điểm",
          "$1$ điểm",
          "$2$ điểm",
          "Vô số điểm"
        ],
        correctIndex: 0,
        explanation: "Không có số tự nhiên nào nằm giữa hai số tự nhiên liên tiếp 4 và 5. Do đó không có điểm biểu diễn số tự nhiên nào nằm giữa hai điểm 4 và 5."
      },
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 8 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho $x$ là một số tự nhiên lớn hơn $5$ và nhỏ hơn $8$. Khi đó vị trí của điểm $x$ trên tia số nằm ngang là:",
        options: [
          "Nằm giữa điểm $5$ và điểm $8$",
          "Ở bên trái điểm $5$",
          "Ở bên phải điểm $8$",
          "Trùng với điểm $5$"
        ],
        correctIndex: 0,
        explanation: "Vì $5 < x < 8$ nên trên tia số nằm ngang, điểm $x$ nằm bên phải điểm $5$ và bên trái điểm $8$, tức là nằm giữa điểm $5$ và điểm $8$."
      },
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 9 - TN6 CI Bài 3 & SGK",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 13",
        question: "Cho ba số tự nhiên $a, b, c$, trong đó $c$ là số lớn nhất. Biết rằng trên tia số điểm $b$ nằm giữa hai điểm $a$ và $c$. Khi đó khẳng định nào sau đây là ĐÚNG?",
        options: [
          "$a < b < c$",
          "$b < a < c$",
          "$c < b < a$",
          "$a < c < b$"
        ],
        correctIndex: 0,
        explanation: "Vì điểm $b$ nằm giữa hai điểm $a$ và $c$, đồng thời $c$ là số lớn nhất nên trên tia số nằm ngang ta có thứ tự $a$ ở bên trái $b$, $b$ ở bên trái $c$, suy ra $a < b < c$."
      },
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 10 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho bốn điểm $A, B, C, D$ trên cùng một tia số nằm ngang sắp xếp theo thứ tự từ trái sang phải. Biết rằng chúng biểu diễn bốn số $12; 15; 19; 24$. Điểm $C$ biểu diễn số nào?",
        options: [
          "Điểm $C$ biểu diễn số $19$",
          "Điểm $C$ biểu diễn số $15$",
          "Điểm $C$ biểu diễn số $12$",
          "Điểm $C$ biểu diễn số $24$"
        ],
        correctIndex: 0,
        explanation: "Sắp xếp tăng dần: $12 < 15 < 19 < 24$. Bốn điểm $A, B, C, D$ từ trái sang phải tương ứng là: $A = 12, B = 15, C = 19, D = 24$. Vậy điểm $C$ biểu diễn số $19$."
      },
      {
        objectiveCodes: ["3.2", "b3-nb-2"],
        level: "nhan_biet",
        badge: "Câu 7 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Gọi $P$ là tập hợp các điểm biểu diễn các số tự nhiên nằm bên phải điểm $5$ và nằm bên trái điểm $7$. Tập hợp $P$ có bao nhiêu phần tử?",
        options: [
          "$1$ phần tử",
          "$0$ phần tử",
          "$2$ phần tử",
          "$3$ phần tử"
        ],
        correctIndex: 0,
        explanation: "Số tự nhiên nằm bên phải điểm 5 và bên trái điểm 7 thỏa mãn $5 < x < 7$. Chỉ có duy nhất số $6$ thỏa mãn. Vậy tập hợp $P$ có 1 phần tử."
      },

      // -----------------------------------------------------------------------
      // YCCĐ 3.3: So sánh hai số tự nhiên và dùng kí hiệu <, >, ≤, ≥ (Thông hiểu)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 5 - TN6 CI Bài 3 & SGK Trang 14",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 14",
        question: "Trên tia số, hai điểm $A$ và $B$ lần lượt biểu diễn số $6$ và số $10$. Gọi $M$ là tập hợp các số tự nhiên biểu diễn trên đoạn thẳng $AB$. Tập hợp $M$ được viết là:",
        options: [
          "$M = \\{x \\in \\mathbb{N} \\mid 6 \\le x \\le 10\\}$",
          "$M = \\{x \\in \\mathbb{N} \\mid 6 < x < 10\\}$",
          "$M = \\{x \\in \\mathbb{N} \\mid 6 \\le x < 10\\}$",
          "$M = \\{x \\in \\mathbb{N} \\mid 6 < x \\le 10\\}$"
        ],
        correctIndex: 0,
        explanation: "Các điểm nằm trên đoạn thẳng $AB$ bao gồm cả hai đầu mút biểu diễn số 6 và số 10. Do đó $M = \\{x \\in \\mathbb{N} \\mid 6 \\le x \\le 10\\}$."
      },
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 12 - TN6 CI Bài 3 & SGK Trang 14",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 14",
        question: "Cho ba số tự nhiên $a, b, c$ thỏa mãn $a < b$ và $b < c$. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          "$a < c$",
          "$c < a$",
          "$a = c$",
          "$a > c$"
        ],
        correctIndex: 0,
        explanation: "Theo tính chất bắc cầu của thứ tự trong tập hợp số tự nhiên: nếu $a < b$ và $b < c$ thì $a < c$."
      },
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 3 Trắc nghiệm - SH6-CĐ 1.3 & TN6 CI",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Có bao nhiêu số tự nhiên $x$ thỏa mãn điều kiện $748 < x < 760$?",
        options: [
          "$11$ số",
          "$10$ số",
          "$12$ số",
          "$13$ số"
        ],
        correctIndex: 0,
        explanation: "Các số tự nhiên $x$ thỏa mãn $748 < x < 760$ gồm: $749, 750, \\dots, 759$. Số lượng các số là: $(759 - 749) + 1 = 11$ số."
      },
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 14 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid 12 \\le x \\le 16\\}$. Tích các phần tử của tập hợp $A$ có chữ số tận cùng là:",
        options: [
          "$0$",
          "$2$",
          "$4$",
          "$6$"
        ],
        correctIndex: 0,
        explanation: "Tập hợp $A = \\{12; 13; 14; 15; 16\\}$. Tích các phần tử chứa thừa số $15$ và các số chẵn ($12, 14, 16$) nên có tận cùng là chữ số $0$."
      },
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 16 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Tính tổng các phần tử của tập hợp $B = \\{x \\in \\mathbb{N} \\mid 21 \\le x \\le 25\\}$:",
        options: [
          "$115$",
          "$110$",
          "$120$",
          "$125$"
        ],
        correctIndex: 0,
        explanation: "Tập hợp $B = \\{21; 22; 23; 24; 25\\}$. Tổng các phần tử là: $21 + 22 + 23 + 24 + 25 = 115$."
      },
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 17 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho tập hợp $C = \\{x \\in \\mathbb{N}^* \\mid x \\le 4\\}$. Hãy mô tả lại tập hợp $C$ bằng cách liệt kê phần tử:",
        options: [
          "$C = \\{1; 2; 3; 4\\}$",
          "$C = \\{0; 1; 2; 3; 4\\}$",
          "$C = \\{1; 2; 3\\}$",
          "$C = \\{0; 1; 2; 3\\}$"
        ],
        correctIndex: 0,
        explanation: "Vì $x \\in \\mathbb{N}^*$ nên $x > 0$. Kết hợp $x \\le 4$ ta được $C = \\{1; 2; 3; 4\\}$."
      },
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 18 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Gọi $D$ là tập hợp các số tự nhiên chia cho $3$ dư $1$ và không vượt quá $100$. Khi đó số phần tử của tập hợp $D$ là:",
        options: [
          "$34$ phần tử",
          "$33$ phần tử",
          "$35$ phần tử",
          "$30$ phần tử"
        ],
        correctIndex: 0,
        explanation: "Tập hợp $D = \\{1; 4; 7; \\dots; 100\\}$. Số phần tử của tập hợp $D$ là: $(100 - 1) : 3 + 1 = 34$ phần tử."
      },
      {
        objectiveCodes: ["3.3", "b3-th-1"],
        level: "thong_hieu",
        badge: "Câu 15 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho tập hợp $E = \\{1; 3; 5\\}$, có bao nhiêu số tự nhiên có hai chữ số khác nhau mà chữ số hàng chục nhỏ hơn chữ số hàng đơn vị được lập bởi các số trong tập hợp $E$?",
        options: [
          "$3$ số",
          "$2$ số",
          "$4$ số",
          "$6$ số"
        ],
        correctIndex: 0,
        explanation: "Các số có hai chữ số khác nhau lập được từ $E$ là: $13; 15; 31; 35; 51; 53$. Trong đó các số có hàng chục nhỏ hơn hàng đơn vị là: $13; 15; 35$. Vậy có tất cả $3$ số."
      },

      // -----------------------------------------------------------------------
      // YCCĐ 3.4: Sắp xếp các số tự nhiên theo thứ tự tăng dần / giảm dần (Thông hiểu)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["3.4", "b3-th-2"],
        level: "thong_hieu",
        badge: "Câu 4 Trắc nghiệm - SH6-CĐ 1.3 & TN6 CI",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Trong các dòng sau, dòng nào cho ta ba số tự nhiên liên tiếp giảm dần (với $m \\in \\mathbb{N}$)?",
        options: [
          "$m + 2;\\ m + 1;\\ m$",
          "$m;\\ m + 1;\\ m + 2$",
          "$m - 1;\\ m;\\ m + 1$",
          "$m + 1;\\ m + 2;\\ m + 3$"
        ],
        correctIndex: 0,
        explanation: "Vì $(m + 2) - (m + 1) = 1$ và $(m + 1) - m = 1$, các số giảm dần 1 đơn vị liên tiếp. Vậy dòng $m + 2;\\ m + 1;\\ m$ là ba số tự nhiên liên tiếp giảm dần."
      },
      {
        objectiveCodes: ["3.4", "b3-th-2"],
        level: "thong_hieu",
        badge: "Dạng 1 Bài 2 - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 Dạng 1 Bài 2",
        question: "Tìm các số liền trước và liền sau của hai số $1209$ và $1212$ để được sáu số tự nhiên rồi sắp xếp sáu số đó theo thứ tự từ bé đến lớn:",
        options: [
          "$1208 < 1209 < 1210 < 1211 < 1212 < 1213$",
          "$1209 < 1208 < 1210 < 1211 < 1212 < 1213$",
          "$1208 < 1209 < 1211 < 1210 < 1212 < 1213$",
          "$1213 < 1212 < 1211 < 1210 < 1209 < 1208$"
        ],
        correctIndex: 0,
        explanation: "Số liền trước và sau của 1209 là 1208 và 1210; của 1212 là 1211 và 1213. Sắp xếp tăng dần: $1208 < 1209 < 1210 < 1211 < 1212 < 1213$."
      },
      {
        objectiveCodes: ["3.4", "b3-th-2"],
        level: "thong_hieu",
        badge: "Bài 1.13 - SGK Toán 6 Tập 1 Trang 14",
        source: "SGK Toán 6 Tập 1 Trang 14 (Bộ Kết Nối Tri Thức)",
        question: "Sắp xếp các số tự nhiên sau theo thứ tự TĂNG DẦN: $12\\ 050;\\ 12\\ 500;\\ 12\\ 005;\\ 12\\ 550$",
        options: [
          "$12\\ 005 < 12\\ 050 < 12\\ 500 < 12\\ 550$",
          "$12\\ 050 < 12\\ 005 < 12\\ 500 < 12\\ 550$",
          "$12\\ 550 < 12\\ 500 < 12\\ 050 < 12\\ 005$",
          "$12\\ 005 < 12\\ 500 < 12\\ 050 < 12\\ 550$"
        ],
        correctIndex: 0,
        explanation: "So sánh các hàng: $12\\ 005 < 12\\ 050 < 12\\ 500 < 12\\ 550$."
      },
      {
        objectiveCodes: ["3.4", "b3-th-2"],
        level: "thong_hieu",
        badge: "Bài 1.14 - SGK Toán 6 Tập 1 Trang 14",
        source: "SGK Toán 6 Tập 1 Trang 14 (Bộ Kết Nối Tri Thức)",
        question: "Sắp xếp các số tự nhiên sau theo thứ tự GIẢM DẦN: $45\\ 670;\\ 45\\ 760;\\ 45\\ 076;\\ 45\\ 607$",
        options: [
          "$45\\ 760 > 45\\ 670 > 45\\ 607 > 45\\ 076$",
          "$45\\ 670 > 45\\ 760 > 45\\ 607 > 45\\ 076$",
          "$45\\ 760 > 45\\ 607 > 45\\ 670 > 45\\ 076$",
          "$45\\ 076 > 45\\ 607 > 45\\ 670 > 45\\ 760$"
        ],
        correctIndex: 0,
        explanation: "So sánh các hàng: $45\\ 760 > 45\\ 670 > 45\\ 607 > 45\\ 076$."
      },

      // -----------------------------------------------------------------------
      // YCCĐ 3.5: Vận dụng so sánh số tự nhiên vào dữ liệu thực tế & Nâng cao (Vận dụng)
      // -----------------------------------------------------------------------
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung",
        badge: "Bài 1.15 - SGK Toán 6 Tập 1 Trang 15",
        source: "SGK Toán 6 Tập 1 Trang 15 & SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Bảng độ cao (theo mét) của 4 đỉnh núi tại Việt Nam: Fansipan ($3\\ 143\\text{ m}$), Pu Si Lung ($3\\ 083\\text{ m}$), Bạch Mộc Lương Tử ($3\\ 046\\text{ m}$), Tây Côn Lĩnh ($2\\ 427\\text{ m}$). Sắp xếp tên các đỉnh núi theo thứ tự độ cao GIẢM DẦN:",
        options: [
          "Fansipan > Pu Si Lung > Bạch Mộc Lương Tử > Tây Côn Lĩnh",
          "Fansipan > Bạch Mộc Lương Tử > Pu Si Lung > Tây Côn Lĩnh",
          "Pu Si Lung > Fansipan > Bạch Mộc Lương Tử > Tây Côn Lĩnh",
          "Tây Côn Lĩnh > Bạch Mộc Lương Tử > Pu Si Lung > Fansipan"
        ],
        correctIndex: 0,
        explanation: "So sánh độ cao các đỉnh núi: $3\\ 143 > 3\\ 083 > 3\\ 046 > 2\\ 427$. Vậy thứ tự giảm dần là: Fansipan > Pu Si Lung > Bạch Mộc Lương Tử > Tây Côn Lĩnh."
      },
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung",
        badge: "Dạng 1 Bài 4 - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Tìm ba số tự nhiên liên tiếp, biết rằng tổng của chúng bằng $24$:",
        options: [
          "$7;\\ 8;\\ 9$",
          "$6;\\ 7;\\ 8$",
          "$8;\\ 9;\\ 10$",
          "$5;\\ 6;\\ 7$"
        ],
        correctIndex: 0,
        explanation: "Gọi ba số tự nhiên liên tiếp là $n, n+1, n+2$. Ta có $n + (n+1) + (n+2) = 24 \\Rightarrow 3n + 3 = 24 \\Rightarrow 3n = 21 \\Rightarrow n = 7$. Ba số cần tìm là $7;\\ 8;\\ 9$."
      },
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung",
        badge: "SH6-CĐ 1.3 Dạng 2 Bài 6",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Tìm bốn số tự nhiên liên tiếp, biết rằng tổng của chúng bằng $2010$:",
        options: [
          "$501;\\ 502;\\ 503;\\ 504$",
          "$500;\\ 501;\\ 502;\\ 503$",
          "$502;\\ 503;\\ 504;\\ 505$",
          "$499;\\ 500;\\ 501;\\ 502$"
        ],
        correctIndex: 0,
        explanation: "Gọi bốn số tự nhiên liên tiếp là $x, x+1, x+2, x+3$. Ta có: $4x + 6 = 2010 \\Rightarrow 4x = 2004 \\Rightarrow x = 501$. Bốn số cần tìm là: $501;\\ 502;\\ 503;\\ 504$."
      },
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung",
        badge: "Câu 9 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Ba bạn Giang cao $145\\text{ cm}$, Cường cao $148\\text{ cm}$, Hiển cao $152\\text{ cm}$. Đánh dấu chiều cao của ba bạn lên tường bởi ba điểm $A, B, C$ theo thứ tự từ trên xuống dưới. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          "Điểm $A$ ứng với bạn Hiển, $B$ ứng với bạn Cường, $C$ ứng với bạn Giang",
          "Điểm $A$ ứng với bạn Giang, $B$ ứng với bạn Cường, $C$ ứng với bạn Hiển",
          "Điểm $A$ ứng với bạn Cường, $B$ ứng với bạn Hiển, $C$ ứng với bạn Giang",
          "Điểm $A$ ứng với bạn Hiển, $B$ ứng với bạn Giang, $C$ ứng với bạn Cường"
        ],
        correctIndex: 0,
        explanation: "So sánh chiều cao: $152\\text{ cm} > 148\\text{ cm} > 145\\text{ cm}$. Từ trên xuống dưới điểm cao nhất là $A$ (bạn Hiển), tiếp theo là $B$ (bạn Cường), điểm thấp nhất là $C$ (bạn Giang)."
      },
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung_cao",
        badge: "Câu 20 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Cho năm số tự nhiên liên tiếp có trung bình cộng là $k$ (với $k \\in \\mathbb{N}, k \\ge 2$). Năm số đó là:",
        options: [
          "$k - 2;\\ k - 1;\\ k;\\ k + 1;\\ k + 2$",
          "$k;\\ k + 1;\\ k + 2;\\ k + 3;\\ k + 4$",
          "$k - 4;\\ k - 3;\\ k - 2;\\ k - 1;\\ k$",
          "$k - 2;\\ k - 1;\\ k;\\ k + 2;\\ k + 4$"
        ],
        correctIndex: 0,
        explanation: "Tổng của năm số là $5k$. Năm số tự nhiên liên tiếp có số ở chính giữa là $k$, hai số liền trước là $k-2, k-1$, hai số liền sau là $k+1, k+2$ có tổng là $(k-2)+(k-1)+k+(k+1)+(k+2) = 5k$."
      },
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung_cao",
        badge: "Câu 21 - TN6 CI Bài 3",
        source: "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Ba số tự nhiên $a, b, c$ đồng thời thỏa mãn các điều kiện: $a < b < c$, $a + b + c = 15$ và $c - a = 2$. Tính tích $a \\times b \\times c$:",
        options: [
          "$120$",
          "$105$",
          "$150$",
          "$90$"
        ],
        correctIndex: 0,
        explanation: "Vì $a < b < c$ và $c - a = 2$ nên ba số $a, b, c$ là ba số tự nhiên liên tiếp: $b = a + 1$ và $c = a + 2$. Khi đó $a + (a+1) + (a+2) = 15 \\Rightarrow 3a + 3 = 15 \\Rightarrow a = 4, b = 5, c = 6$. Tích là $4 \\times 5 \\times 6 = 120$."
      },
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung_cao",
        badge: "Dạng 1 Bài 7 - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 Dạng 1 Bài 7",
        question: "Tập hợp $S$ gồm $n$ số tự nhiên liên tiếp được biểu diễn bởi $n$ điểm trên tia số. Trong $n$ điểm đó, có một điểm thỏa mãn: nếu đếm từ trái sang phải thì ở vị trí thứ $12$, còn nếu đếm từ phải sang trái thì ở vị trí thứ $15$. Tìm số phần tử $n$ của tập hợp $S$:",
        options: [
          "$n = 26$",
          "$n = 27$",
          "$n = 25$",
          "$n = 28$"
        ],
        correctIndex: 0,
        explanation: "Vì điểm đó được đếm hai lần nên tổng số điểm là: $n = 12 + 15 - 1 = 26$ phần tử."
      },
      {
        objectiveCodes: ["3.5", "b3-vd-1"],
        level: "van_dung",
        badge: "Câu 2 Trắc nghiệm - SH6-CĐ 1.3",
        source: "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        question: "Số tự nhiên lớn nhất có hai chữ số là số nào?",
        options: [
          "$99$",
          "$98$",
          "$97$",
          "$100$"
        ],
        correctIndex: 0,
        explanation: "Các số tự nhiên có hai chữ số từ $10$ đến $99$. Vậy số tự nhiên lớn nhất có hai chữ số là $99$."
      }
    ];

    const selectedB3 = pickAuthenticQuestion(poolB3, objId || objCode, level, existingQuestions);
    const { options, correctIndex } = shuffleAnswers(selectedB3.options);

    return {
      id: `ai-gen-${ts}`,
      badge: `${badgePrefix} - ${selectedB3.badge}`,
      source: selectedB3.source,
      isAiGenerated: true,
      question: selectedB3.question,
      options,
      correctIndex,
      explanation: selectedB3.explanation,
    };
  }

  // =========================================================================
  // BÀI 4: PHÉP CỘNG VÀ PHÉP TRỪ
  // =========================================================================
  if (id.includes("b4") || id.includes("cong-tru")) {
    const a = randomInt(11, 49);
    const b = randomInt(15, 85);
    const roundA = 100 - a;
    const sumTotal = 100 + b;

    const { options, correctIndex } = shuffleAnswers([
      `$${sumTotal}$`,
      `$${sumTotal + 10}$`,
      `$${sumTotal - 10}$`,
      `$${sumTotal + 20}$`,
    ]);

    return {
      id: `ai-gen-${ts}`,
      badge: `${badgePrefix} - Tính nhanh hợp lí`,
      source: "SH6-CĐ 1.4 - Phép Cộng Trừ Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6/Dạy Thêm KNTT)",
      isAiGenerated: true,
      question: `Áp dụng tính chất giao hoán và kết hợp của phép cộng để tính nhanh: $${a} + ${b} + ${roundA}$`,
      options,
      correctIndex,
      explanation: `Nhóm hai số có tổng tròn trăm: $(${a} + ${roundA}) + ${b} = 100 + ${b} = ${sumTotal}$.`,
    };
  }

  // =========================================================================
  // BÀI 5: PHÉP NHÂN VÀ PHÉP CHIA
  // =========================================================================
  if (id.includes("b5") || id.includes("nhan-chia")) {
    const k = randomInt(11, 35);
    const x1 = randomInt(12, 45);
    const x2 = 100 - x1;
    const prod = k * 100;

    const { options, correctIndex } = shuffleAnswers([
      `${formatNumberVN(prod)}`,
      `${formatNumberVN(prod + 100)}`,
      `${formatNumberVN(prod - 100)}`,
      `${formatNumberVN(k * x1 + x2)}`,
    ]);

    return {
      id: `ai-gen-${ts}`,
      badge: `${badgePrefix} - Tính chất phân phối`,
      source: "SH6-CĐ 1.4 - Phép Nhân Chia Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6/Dạy Thêm KNTT)",
      isAiGenerated: true,
      question: `Tính nhanh biểu thức bằng cách đặt thừa số chung: $${k} \\cdot ${x1} + ${k} \\cdot ${x2}$`,
      options,
      correctIndex,
      explanation: `Áp dụng tính chất phân phối $a \\cdot b + a \\cdot c = a \\cdot (b + c)$: $${k} \\cdot (${x1} + ${x2}) = ${k} \\cdot 100 = ${formatNumberVN(prod)}$.`,
    };
  }

  // =========================================================================
  // BÀI 6: LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN
  // =========================================================================
  if (id.includes("b6") || id.includes("luy-thua")) {
    const base = randomInt(2, 7);
    const m = randomInt(2, 4);
    const n = randomInt(2, 5);

    const { options, correctIndex } = shuffleAnswers([
      `$${base}^{${m + n}}$`,
      `$${base}^{${m * n}}$`,
      `$${base * 2}^{${m + n}}$`,
      `$${base}^{${Math.abs(m - n)}}$`,
    ]);

    return {
      id: `ai-gen-${ts}`,
      badge: `${badgePrefix} - Nhân hai lũy thừa`,
      source: "SH6-CĐ 1.5 - Lũy Thừa Với Số Mũ Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6/Dạy Thêm KNTT)",
      isAiGenerated: true,
      question: `Viết tích sau dưới dạng một lũy thừa: $${base}^${m} \\cdot ${base}^${n}$`,
      options,
      correctIndex,
      explanation: `Quy tắc nhân hai lũy thừa cùng cơ số: Giữ nguyên cơ số và cộng các số mũ: $${base}^${m} \\cdot ${base}^${n} = ${base}^{${m} + ${n}} = ${base}^{${m + n}}$.`,
    };
  }

  // =========================================================================
  // HÌNH HỌC TRỰC QUAN (TAM GIÁC ĐỀU, HÌNH VUÔNG, LỤC GIÁC ĐỀU)
  // =========================================================================
  if (id.includes("tam-giac-deu") || id.includes("hinh-vuong") || id.includes("luc-giac-deu") || id.includes("b18") || id.includes("b19")) {
    const side = randomInt(4, 12);
    const peri = side * 4;
    const { options, correctIndex } = shuffleAnswers([
      `${peri} cm`,
      `${side * side} cm`,
      `${side * 2} cm`,
      `${side * 6} cm`,
    ]);

    return {
      id: `ai-gen-${ts}`,
      badge: `${badgePrefix} - Chu vi hình vuông`,
      source: "Phiếu 16 - Tam Giác Đều, Hình Vuông, Lục Giác Đều (Thư mục Anti/Tài Liệu Lớp 6/Phiếu Bài Tập KNTT)",
      isAiGenerated: true,
      question: `Một chiếc khung tranh hình vuông có độ dài cạnh là $${side}\\text{ cm}$. Chu vi của chiếc khung tranh đó là:`,
      options,
      correctIndex,
      explanation: `Chu vi hình vuông bằng 4 lần độ dài cạnh: $C = 4 \\times a = 4 \\times ${side} = ${peri}\\text{ cm}$.`,
      diagram: {
        type: "hinh-vuong",
        caption: `Hình vuông có cạnh bằng ${side} cm`,
      },
    };
  }

  // =========================================================================
  // FALLBACK TỔNG QUÁT THEO ĐẶC TẢ YCCĐ
  // =========================================================================
  const fallbackVariants = [
    {
      q: `Theo yêu cầu cần đạt của bài "${lessonTitle}", câu khẳng định nào sau đây là ĐÚNG nhất?`,
      correct: `${objective.description}`,
      wrongs: [
        `Quy tắc chỉ áp dụng cho các số chẵn, không áp dụng cho số lẻ`,
        `Không tuân theo các tính chất giao hoán và kết hợp thông thường`,
        `Chỉ được tính toán khi có sự hỗ trợ của máy tính cầm tay`,
      ],
      exp: `Cốt lõi kiến thức SGK: ${objective.description}.`,
    },
    {
      q: `Trong nội dung "${objective.title}" của bài "${lessonTitle}", khi thực hiện bài toán, bước nào sau đây là quan trọng nhất?`,
      correct: `Nắm vững định nghĩa và quy tắc đã học trong bài`,
      wrongs: [
        `Bỏ qua các điều kiện xác định của bài toán`,
        `Thực hiện phép tính từ phải sang trái`,
        `Chỉ cần đoán mò kết quả mà không cần lập luận`,
      ],
      exp: `Để giải chính xác các bài toán thuộc dạng "${objective.title}", học sinh cần áp dụng đúng định nghĩa và quy tắc cơ bản trong SGK.`,
    },
  ];

  const chosenVariant = fallbackVariants[randomInt(0, fallbackVariants.length - 1)];
  const { options, correctIndex } = shuffleAnswers([
    chosenVariant.correct,
    chosenVariant.wrongs[0],
    chosenVariant.wrongs[1],
    chosenVariant.wrongs[2],
  ]);

  return {
    id: `ai-gen-${ts}`,
    badge: `${badgePrefix} - ${levelLabels[level]}`,
    source:
      level === "van_dung_cao"
        ? "Tài liệu Bồi Dưỡng Học Sinh Giỏi Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)"
        : "Ngân Hàng Câu Hỏi & Đề Kiểm Tra Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
    isAiGenerated: true,
    question: customPrompt ? `${chosenVariant.q} (Gợi ý thêm: ${customPrompt})` : chosenVariant.q,
    options,
    correctIndex,
    explanation: chosenVariant.exp,
  };
}
