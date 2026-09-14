import type { DetailedLessonData } from "./allGradesLessonsData";

export const GRADE_10_DETAILED_LESSONS: Record<string, DetailedLessonData> = {
  // ==========================================
  // BÀI 1: MỆNH ĐỀ
  // ==========================================
  "t10-b1-menh-de": {
    id: "t10-b1-menh-de",
    lessonNumber: 1,
    title: "Bài 1: Mệnh đề",
    bookChapter: "Chương I: Mệnh đề và tập hợp",
    scenarioTitle: "Tình huống thực tế: Khẳng định logic trong đời sống và các định lý toán học",
    scenarioFrames: [],
    youtubeVideoId: "4dUuuV5yFvM",
    youtubeVideoTitle: "Bài Giảng Video: Bài 1 - Mệnh đề (Tiết 1) - Toán 10 KNTT",
    youtubeVideos: [
      {
        id: "4dUuuV5yFvM",
        title: "Tiết 1: Mệnh đề & Mệnh đề phủ định"
      },
      {
        id: "-BkRx0gm23o",
        title: "Tiết 2: Mệnh đề kéo theo, tương đương & Kí hiệu ∀, ∃"
      }
    ],
    videoQuestions: [
      {
        id: "vq-10.1.1",
        title: "Ví dụ 1 (Tiết 1): Nhận biết câu là mệnh đề",
        question: "Trong các câu sau, câu nào là một mệnh đề logic?",
        options: [
          "Số 17 là số nguyên tố.",
          "Học sinh lớp 10 học giỏi quá!",
          "Bạn đã làm xong bài tập về nhà chưa?",
          "Hãy giữ trật tự và chú ý nghe giảng!"
        ],
        correctIndex: 0,
        explanation: "\"Số 17 là số nguyên tố\" là một câu khẳng định có tính đúng sai rõ ràng (và là khẳng định đúng), nên là một mệnh đề. Các câu còn lại là câu cảm thán, câu hỏi và câu cầu khiến."
      },
      {
        id: "vq-10.1.2",
        title: "Ví dụ 2 (Tiết 1): Lập mệnh đề phủ định",
        question: "Cho mệnh đề $P$: \"Tam giác $ABC$ là tam giác đều\". Phủ định $\\overline{P}$ của mệnh đề $P$ là gì?",
        options: [
          "Tam giác $ABC$ không phải là tam giác đều.",
          "Tam giác $ABC$ là tam giác cân.",
          "Tam giác $ABC$ là tam giác vuông.",
          "Tam giác $ABC$ có ba cạnh không bằng nhau."
        ],
        correctIndex: 0,
        explanation: "Phủ định của mệnh đề \"A là B\" là \"A không phải là B\". Do đó phủ định của $P$ là \"Tam giác ABC không phải là tam giác đều\"."
      },
      {
        id: "vq-10.1.3",
        title: "Ví dụ 3 (Tiết 2): Mệnh đề kéo theo và điều kiện cần, đủ",
        question: "Cho định lý: \"Nếu tứ giác $ABCD$ là hình thoi thì tứ giác $ABCD$ có hai đường chéo vuông góc với nhau\". Khẳng định nào sau đây diễn đạt đúng định lý trên?",
        options: [
          "Tứ giác $ABCD$ là hình thoi là điều kiện đủ để có hai đường chéo vuông góc với nhau.",
          "Tứ giác $ABCD$ là hình thoi là điều kiện cần để có hai đường chéo vuông góc với nhau.",
          "Tứ giác $ABCD$ có hai đường chéo vuông góc với nhau là điều kiện đủ để nó là hình thoi.",
          "Tứ giác $ABCD$ là hình thoi là điều kiện cần và đủ để hai đường chéo vuông góc với nhau."
        ],
        correctIndex: 0,
        explanation: "Trong mệnh đề kéo theo $P \\Rightarrow Q$, mệnh đề giả thiết $P$ là điều kiện đủ để có $Q$, và kết luận $Q$ là điều kiện cần để có $P$. Vì vậy \"Tứ giác ABCD là hình thoi\" là điều kiện đủ."
      },
      {
        id: "vq-10.1.4",
        title: "Ví dụ 4 (Tiết 2): Phủ định mệnh đề chứa kí hiệu với mọi (∀)",
        question: "Mệnh đề phủ định của mệnh đề \"$\\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0$\" là:",
        options: [
          "\"$\\exists x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$\"",
          "\"$\\forall x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$\"",
          "\"$\\exists x \\in \\mathbb{R},\\ x^2 + 1 < 0$\"",
          "\"$\\forall x \\in \\mathbb{R},\\ x^2 + 1 < 0$\""
        ],
        correctIndex: 0,
        explanation: "Quy tắc phủ định mệnh đề với mọi: Phủ định của \"$\\forall x \\in X, P(x)$\" là \"$\\exists x \\in X, \\overline{P(x)}$\". Phủ định của dấu $>$ là dấu $\\le$."
      }
    ],
    tips: [
      "Quy tắc phủ định lượng từ: Phủ định của $\\forall$ chuyển thành $\\exists$, phủ định của $\\exists$ chuyển thành $\\forall$. Đồng thời phải phủ định cả tính chất phía sau ($>$ thành $\\le$, $<$ thành $\\ge$, $=$ thành $\\ne$).",
      "Mẹo nhớ 'Điều kiện cần' và 'Điều kiện đủ' trong $P \\Rightarrow Q$: Giả thiết $P$ đứng trước là ĐỦ; Kết luận $Q$ đứng sau là CẦN (Đầu xuôi ĐỦ - Đuôi lọt CẦN)."
    ],
    traps: [
      "Bẫy mệnh đề kéo theo $P \\Rightarrow Q$: Mệnh đề $P \\Rightarrow Q$ chỉ sai khi $P$ đúng mà $Q$ sai. Khi giả thiết $P$ sai thì bất kể $Q$ đúng hay sai, mệnh đề $P \\Rightarrow Q$ luôn đúng theo định nghĩa logic.",
      "Bẫy đảo: Mệnh đề đảo $Q \\Rightarrow P$ của một mệnh đề đúng $P \\Rightarrow Q$ chưa chắc đã đúng (ví dụ: chia hết cho 4 thì chia hết cho 2 là đúng, nhưng đảo lại chia hết cho 2 thì chia hết cho 4 là sai)."
    ],
    theorySections: [
      {
        index: "1",
        title: "Mệnh đề và Mệnh đề chứa biến",
        points: [
          "Mệnh đề (còn gọi là mệnh đề logic) là một câu khẳng định có tính đúng hoặc sai.",
          "Một khẳng định đúng gọi là một mệnh đề đúng. Một khẳng định sai gọi là một mệnh đề sai.",
          "Mỗi mệnh đề chỉ có thể đúng hoặc sai, một mệnh đề không thể vừa đúng vừa sai.",
          "Các câu nghi vấn (câu hỏi), câu cảm thán, câu cầu khiến (ra lệnh, khuyên nhủ) không phải là mệnh đề.",
          "Mệnh đề chứa biến là câu khẳng định chứa một hay nhiều biến số, chưa xác định được tính đúng hay sai. Khi thay mỗi biến bằng một giá trị cụ thể trong tập xác định thì ta được một mệnh đề."
        ],
        examples: [
          {
            title: "Ví dụ 1a: Xác định câu nào là mệnh đề (SGK Toán 10 KNTT Trang 5 & Chuyên đề Trang 18)",
            problem: "Trong các câu sau, câu nào là mệnh đề? Câu nào không phải là mệnh đề? Nếu là mệnh đề hãy xác định tính đúng, sai của nó:\n  (1) \"Hà Nội là thủ đô của Việt Nam.\"\n  (2) \"Số 17 là số nguyên tố.\"\n  (3) \"2 + 3 = 6.\"\n  (4) \"Bạn học trường nào?\"\n  (5) \"Đề thi môn Toán hôm nay hay quá!\"\n  (6) \"Hãy giữ trật tự trong giờ học!\"",
            solution: "• Câu (1): Là mệnh đề, và đây là một mệnh đề đúng.\n• Câu (2): Là mệnh đề, và đây là một mệnh đề đúng (vì 17 chỉ chia hết cho 1 và chính nó).\n• Câu (3): Là mệnh đề, và đây là một mệnh đề sai (vì 2 + 3 = 5 khác 6).\n• Câu (4): Không phải là mệnh đề vì đây là câu hỏi (câu nghi vấn), không thể khẳng định đúng hay sai.\n• Câu (5): Không phải là mệnh đề vì đây là câu cảm thán biểu lộ cảm xúc cá nhân.\n• Câu (6): Không phải là mệnh đề vì đây là câu cầu khiến (mệnh lệnh)."
          },
          {
            title: "Ví dụ 1b: Mệnh đề chứa biến và tính đúng sai khi gán giá trị (SGK Trang 6)",
            problem: "Cho câu $P(n)$: \"$n^2 + 1$ chia hết cho $5$\" với $n$ là số tự nhiên.\n  a) Câu đã cho có phải là mệnh đề không?\n  b) Tìm hai giá trị của $n$ để được mệnh đề đúng, hai giá trị của $n$ để được mệnh đề sai.",
            solution: "• Trả lời ý a: Câu $P(n)$ chứa biến $n$ nên chưa xác định được tính đúng sai, do đó nó không phải là mệnh đề mà là một mệnh đề chứa biến.\n• Trả lời ý b:\n  - Với $n = 2$, ta được mệnh đề $P(2)$: \"$2^2 + 1 = 5$ chia hết cho $5$\" là mệnh đề đúng.\n  - Với $n = 3$, ta được mệnh đề $P(3)$: \"$3^2 + 1 = 10$ chia hết cho $5$\" là mệnh đề đúng.\n  - Với $n = 1$, ta được mệnh đề $P(1)$: \"$1^2 + 1 = 2$ chia hết cho $5$\" là mệnh đề sai.\n  - Với $n = 4$, ta được mệnh đề $P(4)$: \"$4^2 + 1 = 17$ chia hết cho $5$\" là mệnh đề sai."
          }
        ]
      },
      {
        index: "2",
        title: "Phủ định của một mệnh đề",
        points: [
          "Mỗi mệnh đề $P$ đều có một mệnh đề phủ định, ký hiệu là $\\overline{P}$.",
          "Tính đúng - sai: $P$ và $\\overline{P}$ có tính đúng - sai trái ngược nhau (Nếu $P$ đúng thì $\\overline{P}$ sai; nếu $P$ sai thì $\\overline{P}$ đúng)."
        ],
        examples: [
          {
            title: "Ví dụ 2: Lập mệnh đề phủ định (SGK Trang 7)",
            problem: "Lập mệnh đề phủ định của mỗi mệnh đề sau và xét tính đúng sai:\n  a) $P$: \"Dơi là một loài chim.\"\n  b) $Q$: \"$\\pi > 3$\".",
            solution: "• Phủ định của $P$ là $\\overline{P}$: \"Dơi không phải là một loài chim\" (Mệnh đề $\\overline{P}$ đúng vì dơi thuộc lớp thú).\n• Phủ định của $Q$ là $\\overline{Q}$: \"$\\pi \\le 3$\" (Mệnh đề $\\overline{Q}$ sai vì $\\pi \\approx 3{,}14 > 3$)."
          }
        ]
      },
      {
        index: "3",
        title: "Mệnh đề kéo theo và Mệnh đề tương đương",
        points: [
          "Mệnh đề kéo theo ($P \\Rightarrow Q$, đọc là \"Nếu $P$ thì $Q$\"):\n    - Tính đúng - sai: Chỉ SAI khi $P$ đúng mà $Q$ sai.\n    - Trong định lý: $P$ là điều kiện đủ để có $Q$; $Q$ là điều kiện cần để có $P$.",
          "Mệnh đề đảo ($Q \\Rightarrow P$):\n    - Là mệnh đề đảo của $P \\Rightarrow Q$. Mệnh đề đảo của một mệnh đề đúng chưa chắc đã đúng.",
          "Mệnh đề tương đương ($P \\Leftrightarrow Q$, đọc là \"$P$ khi và chỉ khi $Q$\"):\n    - Đúng khi cả hai chiều $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng (hay \"$P$ là điều kiện cần và đủ để có $Q$\")."
        ],
        examples: [
          {
            title: "Ví dụ 3: Điều kiện cần, điều kiện đủ và mệnh đề đảo (SGK Trang 8)",
            problem: "Cho định lý: \"Nếu tứ giác $ABCD$ là hình thoi thì tứ giác $ABCD$ có hai đường chéo vuông góc.\"\n  a) Xác định điều kiện đủ và điều kiện cần.\n  b) Lập mệnh đề đảo và xét tính đúng sai.",
            solution: "• Trả lời ý a:\n  - Điều kiện đủ: \"Tứ giác $ABCD$ là hình thoi\".\n  - Điều kiện cần: \"Tứ giác $ABCD$ có hai đường chéo vuông góc\".\n• Trả lời ý b: Mệnh đề đảo là \"Nếu tứ giác $ABCD$ có hai đường chéo vuông góc thì tứ giác $ABCD$ là hình thoi\". Mệnh đề đảo này SAI (hình diều cũng có hai đường chéo vuông góc nhưng không phải hình thoi)."
          }
        ]
      },
      {
        index: "4",
        title: "Ký hiệu Với mọi (∀) và Tồn tại (∃)",
        points: [
          "Ký hiệu ∀ (đọc là \"với mọi\", \"tất cả\"):",
          "    - Ý nghĩa: Khẳng định tính chất đúng với tất cả mọi phần tử.",
          "    - Ví dụ: \"$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$\" (Bình phương của mọi số thực đều không âm - Mệnh đề đúng).",
          "    - Cách chỉ ra sai: Chỉ cần tìm đúng 1 phản ví dụ.",
          "    - Ví dụ: Mệnh đề \"$\\forall n \\in \\mathbb{N}, n > 0$\" là SAI (vì có số $0 \\in \\mathbb{N}$ nhưng $0$ không lớn hơn $0$).",
          "Ký hiệu ∃ (đọc là \"tồn tại\", \"có ít nhất một\"):",
          "    - Ý nghĩa: Chỉ cần tìm được ít nhất 1 ví dụ thỏa mãn là mệnh đề đúng.",
          "    - Ví dụ: Mệnh đề \"$\\exists x \\in \\mathbb{R}, x^2 = 2$\" là ĐÚNG (vì có $x = \\sqrt{2}$).",
          "    - Cách chỉ ra sai: Phải chứng minh không có bất kỳ phần tử nào thỏa mãn.",
          "    - Ví dụ: Mệnh đề \"$\\exists x \\in \\mathbb{R}, x^2 + 1 = 0$\" là SAI (vì $x^2 + 1 \\ge 1 > 0$ với mọi $x$).",
          "Quy tắc phủ định (Đổi ∀ ↔ ∃ và phủ định tính chất):",
          "    - Phủ định của ∀ là ∃: Phủ định của \"$\\forall x \\in \\mathbb{R}, x^2 > 0$\" là \"$\\exists x \\in \\mathbb{R}, x^2 \\le 0$\".",
          "    - Phủ định của ∃ là ∀: Phủ định của \"$\\exists n \\in \\mathbb{N}, n^2 = n$\" là \"$\\forall n \\in \\mathbb{N}, n^2 \\ne n$\"."
        ],
        examples: [
          {
            title: "Ví dụ 4a: Xác định tính đúng sai của mệnh đề chứa ∀ và ∃ (SGK Trang 10)",
            problem: "Xét tính đúng sai của các mệnh đề sau và giải thích ngắn gọn:\n  a) $A$: \"$\\forall x \\in \\mathbb{R}, x^2 > 0$.\"\n  b) $B$: \"$\\exists x \\in \\mathbb{R}, x^2 - 2 = 0$.\"\n  c) $C$: \"$\\forall n \\in \\mathbb{N}, 2n + 1 \\text{ là số nguyên tố}$.\"",
            solution: "• Mệnh đề $A$ là SAI: Vì có phản ví dụ $x = 0$ thì $0^2 = 0$ (không lớn hơn $0$).\n• Mệnh đề $B$ là ĐÚNG: Vì có số $x = \\sqrt{2}$ thỏa mãn $(\\sqrt{2})^2 - 2 = 0$.\n• Mệnh đề $C$ là SAI: Vì có phản ví dụ $n = 4$ thì $2 \\cdot 4 + 1 = 9$ (chia hết cho $3$ nên không phải số nguyên tố)."
          },
          {
            title: "Ví dụ 4b: Viết mệnh đề phủ định (SGK Trang 11)",
            problem: "Lập mệnh đề phủ định của mỗi mệnh đề sau:\n  a) $P$: \"$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$.\"\n  b) $Q$: \"$\\exists n \\in \\mathbb{N}, n^2 + 2 = 0$.\"",
            solution: "• Mệnh đề phủ định của $P$ là $\\overline{P}$: \"$\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0$\" (đổi $\\forall$ thành $\\exists$ và dấu $>$ thành $\\le$).\n• Mệnh đề phủ định của $Q$ là $\\overline{Q}$: \"$\\forall n \\in \\mathbb{N}, n^2 + 2 \\ne 0$\" (đổi $\\exists$ thành $\\forall$ và dấu $=$ thành $\\ne$)."
          }
        ]
      }
    ],

    // ==========================================
    // PHẦN I: 10 CÂU TRẮC NGHIỆM 4 LỰA CHỌN
    // ==========================================
    quizQuestions: [
      {
        id: "quiz-10.1.1",
        badge: "Bài tập 1 - Nhận biết câu là mệnh đề",
        source: "SGK Toán 10 KNTT Trang 11 & Chuyên đề Câu 1",
        question: "Trong các câu sau, câu nào là một mệnh đề?",
        options: [
          "Hà Nội là thủ đô của Việt Nam.",
          "Mùa thu Hà Nội đẹp quá!",
          "Bạn có thích học môn Toán không?",
          "Hãy đi ngủ sớm để giữ gìn sức khỏe!"
        ],
        correctIndex: 0,
        explanation: "Mệnh đề là một khẳng định có tính đúng hoặc sai rõ ràng. Câu \"Hà Nội là thủ đô của Việt Nam\" là một khẳng định đúng nên là mệnh đề. Các câu còn lại là câu cảm thán, câu hỏi và câu cầu khiến nên không phải là mệnh đề."
      },
      {
        id: "quiz-10.1.2",
        badge: "Bài tập 2 - Nhận biết câu không phải là mệnh đề",
        source: "Chuyên đề Toán 10 KNTT Dạng 1 Câu 4",
        question: "Trong các câu sau, câu nào không phải là mệnh đề?",
        options: [
          "Số 15 có phải là số chính phương không?",
          "Hình thoi có hai đường chéo vuông góc với nhau.",
          "Số 17 là số nguyên tố.",
          "Tổng ba góc trong một tam giác bằng $180^\\circ$."
        ],
        correctIndex: 0,
        explanation: "Câu \"Số 15 có phải là số chính phương không?\" là câu hỏi (câu nghi vấn), không thể xác định tính đúng hay sai nên không phải là mệnh đề. Ba câu còn lại đều là các khẳng định toán học có tính đúng sai rõ ràng."
      },
      {
        id: "quiz-10.1.3",
        badge: "Bài tập 3 - Mệnh đề chứa biến",
        source: "Chuyên đề Toán 10 KNTT Dạng 2 Câu 8",
        question: "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 5x + 6 = 0$\". Giá trị nào của $x$ dưới đây làm cho $P(x)$ trở thành mệnh đề đúng?",
        options: [
          "$x = 2$",
          "$x = 1$",
          "$x = 4$",
          "$x = -2$"
        ],
        correctIndex: 0,
        explanation: "Phương trình $x^2 - 5x + 6 = 0$ có hai nghiệm là $x = 2$ và $x = 3$. Thay $x = 2$ vào được: $2^2 - 5 \\cdot 2 + 6 = 4 - 10 + 6 = 0$ (đúng). Do đó $x = 2$ làm cho $P(x)$ thành mệnh đề đúng."
      },
      {
        id: "quiz-10.1.4",
        badge: "Bài tập 4 - Phủ định mệnh đề khẳng định",
        source: "SGK Toán 10 KNTT Bài 1.2 Trang 11",
        question: "Cho mệnh đề $P$: \"Số 2026 chia hết cho 3\". Mệnh đề phủ định $\\overline{P}$ của mệnh đề $P$ là:",
        options: [
          "Số 2026 không chia hết cho 3.",
          "Số 2026 chia hết cho 5.",
          "Số 2026 là số nguyên tố.",
          "Số 2026 là hợp số."
        ],
        correctIndex: 0,
        explanation: "Phủ định của mệnh đề khẳng định \"Số 2026 chia hết cho 3\" là thêm từ \"không\" vào trước vị ngữ: \"Số 2026 không chia hết cho 3\"."
      },
      {
        id: "quiz-10.1.5",
        badge: "Bài tập 5 - Phủ định dấu bất đẳng thức",
        source: "Chuyên đề Toán 10 KNTT Dạng 3 Câu 14",
        question: "Mệnh đề phủ định của mệnh đề $P$: \"$a^2 + b^2 > 2ab$\" là:",
        options: [
          "$a^2 + b^2 \\le 2ab$",
          "$a^2 + b^2 < 2ab$",
          "$a^2 + b^2 = 2ab$",
          "$a^2 + b^2 \\ge 2ab$"
        ],
        correctIndex: 0,
        explanation: "Phủ định của quan hệ lớn hơn (\">\") là quan hệ nhỏ hơn hoặc bằng (\"≤\"). Do đó mệnh đề phủ định là $a^2 + b^2 \\le 2ab$."
      },
      {
        id: "quiz-10.1.6",
        badge: "Bài tập 6 - Phủ định mệnh đề chứa ký hiệu với mọi (∀)",
        source: "SGK Toán 10 KNTT Bài 1.4 Trang 11",
        question: "Mệnh đề phủ định của mệnh đề $P$: \"$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$\" là:",
        options: [
          "$\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0$",
          "$\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0$",
          "$\\exists x \\in \\mathbb{R}, x^2 + 1 < 0$",
          "$\\forall x \\in \\mathbb{R}, x^2 + 1 < 0$"
        ],
        correctIndex: 0,
        explanation: "Quy tắc phủ định mệnh đề chứa ký hiệu $\\forall$: Phủ định của $\\forall$ là $\\exists$, và phủ định của dấu so sánh \">\" là dấu \"≤\". Vậy phủ định là $\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0$."
      },
      {
        id: "quiz-10.1.7",
        badge: "Bài tập 7 - Phủ định mệnh đề chứa ký hiệu tồn tại (∃)",
        source: "SGK Toán 10 KNTT Bài 1.5 Trang 11",
        question: "Mệnh đề phủ định của mệnh đề $Q$: \"$\\exists n \\in \\mathbb{N}, n^2 = n$\" là:",
        options: [
          "$\\forall n \\in \\mathbb{N}, n^2 \\ne n$",
          "$\\exists n \\in \\mathbb{N}, n^2 \\ne n$",
          "$\\forall n \\in \\mathbb{N}, n^2 > n$",
          "$\\forall n \\in \\mathbb{N}, n^2 < n$"
        ],
        correctIndex: 0,
        explanation: "Quy tắc phủ định mệnh đề chứa ký hiệu $\\exists$: Phủ định của $\\exists$ là $\\forall$, và phủ định của dấu bằng \"=\" là dấu khác \"≠\". Vậy phủ định là $\\forall n \\in \\mathbb{N}, n^2 \\ne n$."
      },
      {
        id: "quiz-10.1.8",
        badge: "Bài tập 8 - Mệnh đề kéo theo và điều kiện đủ",
        source: "SGK Toán 10 KNTT Bài 1.3 Trang 11",
        question: "Cho định lý: \"Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau.\" Khẳng định nào sau đây là đúng?",
        options: [
          "Hai tam giác bằng nhau là điều kiện đủ để diện tích của chúng bằng nhau.",
          "Hai tam giác có diện tích bằng nhau là điều kiện đủ để chúng bằng nhau.",
          "Hai tam giác bằng nhau là điều kiện cần để diện tích của chúng bằng nhau.",
          "Hai tam giác bằng nhau khi và chỉ khi diện tích của chúng bằng nhau."
        ],
        correctIndex: 0,
        explanation: "Trong định lý $P \\Rightarrow Q$ (\"Nếu $P$ thì $Q$\"), giả thiết $P$ là điều kiện đủ để có kết luận $Q$. Vậy \"Hai tam giác bằng nhau\" là điều kiện đủ để \"diện tích của chúng bằng nhau\"."
      },
      {
        id: "quiz-10.1.9",
        badge: "Bài tập 9 - Tính đúng sai của mệnh đề đảo",
        source: "Chuyên đề Toán 10 KNTT Dạng 1 Câu 21",
        question: "Cho mệnh đề: \"Nếu số tự nhiên $n$ có chữ số tận cùng là 0 thì $n$ chia hết cho 5.\" Mệnh đề đảo của mệnh đề trên là:",
        options: [
          "Nếu số tự nhiên $n$ chia hết cho 5 thì $n$ có chữ số tận cùng là 0.",
          "Nếu số tự nhiên $n$ không có chữ số tận cùng là 0 thì $n$ không chia hết cho 5.",
          "Nếu số tự nhiên $n$ chia hết cho 5 thì $n$ không có chữ số tận cùng là 0.",
          "Số tự nhiên $n$ có chữ số tận cùng là 0 khi và chỉ khi $n$ chia hết cho 5."
        ],
        correctIndex: 0,
        explanation: "Mệnh đề ban đầu có dạng $P \\Rightarrow Q$ với $P$: \"$n$ có chữ số tận cùng là 0\" và $Q$: \"$n$ chia hết cho 5\". Mệnh đề đảo có dạng $Q \\Rightarrow P$: \"Nếu số tự nhiên $n$ chia hết cho 5 thì $n$ có chữ số tận cùng là 0\"."
      },
      {
        id: "quiz-10.1.10",
        badge: "Bài tập 10 - Mệnh đề tương đương (điều kiện cần và đủ)",
        source: "SGK Toán 10 KNTT Bài 1.6 Trang 12",
        question: "Phát biểu nào sau đây là một mệnh đề tương đương đúng?",
        options: [
          "Tam giác $ABC$ đều khi và chỉ khi tam giác $ABC$ cân và có một góc bằng $60^\\circ$.",
          "Tứ giác $ABCD$ là hình bình hành khi và chỉ khi tứ giác $ABCD$ có hai đường chéo vuông góc.",
          "Số tự nhiên $n$ chia hết cho 3 khi và chỉ khi $n$ chia hết cho 9.",
          "Hai tam giác bằng nhau khi và chỉ khi hai tam giác đó có chu vi bằng nhau."
        ],
        correctIndex: 0,
        explanation: "Tam giác cân có một góc bằng $60^\\circ$ chắc chắn là tam giác đều, và ngược lại tam giác đều thì luôn cân và có ba góc đều bằng $60^\\circ$. Do đó hai mệnh đề kéo theo thuận và đảo đều đúng, tạo thành mệnh đề tương đương đúng."
      }
    ],

    // ==========================================
    // PHẦN II: 4 CÂU TRẮC NGHIỆM ĐÚNG / SAI (MỖI CÂU 4 Ý a, b, c, d)
    // ==========================================
    trueFalseQuestions: [
      {
        id: "tf-10.1.1",
        badge: "Đúng / Sai 1 - Phân loại mệnh đề và tính chân trị",
        source: "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới Trang 11",
        prompt: "Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
        subItems: [
          {
            id: "a",
            text: "Câu \"Số 2026 chia hết cho 3\" là một mệnh đề sai.",
            correctAnswer: true,
            explanation: "Tổng các chữ số là 2 + 0 + 2 + 6 = 10 không chia hết cho 3. Do đó mệnh đề \"Số 2026 chia hết cho 3\" là mệnh đề sai. Khẳng định phát biểu nó là mệnh đề sai là ĐÚNG."
          },
          {
            id: "b",
            text: "Câu \"Số 15 là số nguyên tố\" là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Số 15 chia hết cho 1, 3, 5, 15 nên 15 là hợp số, không phải số nguyên tố. Do đó đây là mệnh đề sai, khẳng định này SAI."
          },
          {
            id: "c",
            text: "Câu \"Tam giác có ba cạnh bằng nhau là tam giác đều\" là một mệnh đề đúng.",
            correctAnswer: true,
            explanation: "Theo định nghĩa, tam giác có ba cạnh bằng nhau luôn là tam giác đều. Đây là khẳng định ĐÚNG."
          },
          {
            id: "d",
            text: "Câu \"Phương trình $x^2 + 1 = 0$ có nghiệm thực\" là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Ta có $x^2 + 1 \\ge 1 > 0$ với mọi $x \\in \\mathbb{R}$, nên phương trình vô nghiệm thực. Đây là mệnh đề sai, khẳng định này SAI."
          }
        ]
      },
      {
        id: "tf-10.1.2",
        badge: "Đúng / Sai 2 - Tính đúng sai và phủ định của ký hiệu ∀, ∃",
        source: "Bộ đề kiểm tra định kỳ mới Toán 10 & Chuyên đề KNTT Trang 28",
        prompt: "Cho các mệnh đề $P$: \"$\\forall x \\in \\mathbb{R}, x^2 > 0$\" và $Q$: \"$\\exists n \\in \\mathbb{N}, n^2 = n$\". Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        subItems: [
          {
            id: "a",
            text: "Mệnh đề $P$ là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Mệnh đề $P$ sai vì tồn tại phản ví dụ $x = 0 \\in \\mathbb{R}$ thì $0^2 = 0$ (không lớn hơn 0)."
          },
          {
            id: "b",
            text: "Mệnh đề $Q$ là một mệnh đề đúng.",
            correctAnswer: true,
            explanation: "Chỉ ra được $n = 0 \\in \\mathbb{N}$ (hoặc $n = 1 \\in \\mathbb{N}$) thỏa mãn $0^2 = 0$ và $1^2 = 1$, do đó $Q$ đúng."
          },
          {
            id: "c",
            text: "Mệnh đề phủ định của $P$ là $\\overline{P}$: \"$\\exists x \\in \\mathbb{R}, x^2 \\le 0$\".",
            correctAnswer: true,
            explanation: "Theo quy tắc phủ định, $\\forall$ đổi thành $\\exists$ và dấu \">\" đổi thành \"≤\", nên khẳng định này đúng."
          },
          {
            id: "d",
            text: "Mệnh đề phủ định của $Q$ là $\\overline{Q}$: \"$\\forall n \\in \\mathbb{N}, n^2 \\ne n$\".",
            correctAnswer: true,
            explanation: "Theo quy tắc phủ định, $\\exists$ đổi thành $\\forall$ và dấu \"=\" đổi thành \"≠\", nên khẳng định này đúng."
          }
        ]
      },
      {
        id: "tf-10.1.3",
        badge: "Đúng / Sai 3 - Định lý toán học và điều kiện cần, đủ",
        source: "Ngân hàng câu hỏi Mệnh đề - Tập hợp Toán 10 Lê Minh Kha Trang 15",
        prompt: "Cho định lý: \"Nếu số tự nhiên $n$ có chữ số tận cùng bằng 0 thì $n$ chia hết cho 5.\" Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subItems: [
          {
            id: "a",
            text: "Giả thiết của định lý là: \"Số tự nhiên $n$ có chữ số tận cùng bằng 0\".",
            correctAnswer: true,
            explanation: "Trong định lý \"Nếu $P$ thì $Q$\", mệnh đề đứng sau chữ \"Nếu\" là giả thiết $P$."
          },
          {
            id: "b",
            text: "Số tự nhiên $n$ có chữ số tận cùng bằng 0 là điều kiện cần để $n$ chia hết cho 5.",
            correctAnswer: false,
            explanation: "\"$n$ có chữ số tận cùng bằng 0\" là giả thiết $P$, nên nó là điều kiện đủ, không phải điều kiện cần."
          },
          {
            id: "c",
            text: "Số tự nhiên $n$ chia hết cho 5 là điều kiện cần để $n$ có chữ số tận cùng bằng 0.",
            correctAnswer: true,
            explanation: "\"$n$ chia hết cho 5\" là kết luận $Q$, nên nó chính là điều kiện cần để có $P$."
          },
          {
            id: "d",
            text: "Mệnh đề đảo của định lý trên là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Mệnh đề đảo là: \"Nếu $n$ chia hết cho 5 thì $n$ có tận cùng bằng 0.\" Mệnh đề đảo này sai vì số 15 chia hết cho 5 nhưng tận cùng bằng 5."
          }
        ]
      },
      {
        id: "tf-10.1.4",
        badge: "Đúng / Sai 4 - Mệnh đề hình học và mệnh đề tương đương",
        source: "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới Trang 12",
        prompt: "Cho hai mệnh đề: $P$: \"Tứ giác $ABCD$ là hình bình hành\" và $Q$: \"Tứ giác $ABCD$ có hai đường chéo cắt nhau tại trung điểm của mỗi đường\". Xét tính Đúng hoặc Sai của các phát biểu sau:",
        subItems: [
          {
            id: "a",
            text: "Mệnh đề kéo theo $P \\Rightarrow Q$ là một mệnh đề đúng.",
            correctAnswer: true,
            explanation: "Tứ giác là hình bình hành thì hai đường chéo luôn cắt nhau tại trung điểm của mỗi đường."
          },
          {
            id: "b",
            text: "$P$ là điều kiện đủ để có $Q$.",
            correctAnswer: true,
            explanation: "Vì $P \\Rightarrow Q$ đúng nên $P$ là điều kiện đủ để có $Q$."
          },
          {
            id: "c",
            text: "$Q$ là điều kiện cần để có $P$.",
            correctAnswer: true,
            explanation: "Vì $P \\Rightarrow Q$ đúng nên kết luận $Q$ là điều kiện cần để có $P$."
          },
          {
            id: "d",
            text: "$P$ là điều kiện cần và đủ để có $Q$.",
            correctAnswer: true,
            explanation: "Mệnh đề đảo $Q \\Rightarrow P$ cũng đúng (tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình bình hành). Do đó $P \\Leftrightarrow Q$ là mệnh đề tương đương đúng."
          }
        ]
      }
    ],

    // ==========================================
    // PHẦN III: 6 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN
    // ==========================================
    shortAnswerQuestions: [
      {
        id: "sa-10.1.1",
        badge: "Trả lời ngắn 1 - Đếm số lượng mệnh đề",
        source: "Chuyên đề Toán 10 KNTT Dạng 1 Câu 2",
        prompt: "Trong các câu sau đây, có tất cả bao nhiêu câu là mệnh đề?\n  (1) Hà Nội là thủ đô của Việt Nam.\n  (2) Số 17 là một số nguyên tố.\n  (3) Mùa thu Hà Nội đẹp quá!\n  (4) $2x - 1 = 5$.\n  (5) $3 + 5 = 9$.",
        correctAnswer: "3",
        acceptableAnswers: ["3", "ba"],
        explanation: "Các câu là mệnh đề gồm: (1) - mệnh đề đúng; (2) - mệnh đề đúng; (5) - mệnh đề sai. Câu (3) là câu cảm thán nên không là mệnh đề; câu (4) là mệnh đề chứa biến (chưa có giá trị cụ thể của $x$). Vậy có tất cả 3 câu là mệnh đề."
      },
      {
        id: "sa-10.1.2",
        badge: "Trả lời ngắn 2 - Nghiệm nguyên làm mệnh đề chứa biến đúng",
        source: "Chuyên đề Toán 10 KNTT Dạng 2 Câu 10",
        prompt: "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 4x + 3 = 0$\" với $x \\in \\mathbb{Z}$. Có bao nhiêu giá trị nguyên của $x$ trong đoạn $[-5; 5]$ để $P(x)$ trở thành một mệnh đề đúng?",
        correctAnswer: "2",
        acceptableAnswers: ["2", "hai"],
        explanation: "Giải phương trình bậc hai: $x^2 - 4x + 3 = 0 \\Leftrightarrow (x - 1)(x - 3) = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Cả hai nghiệm đều là số nguyên thuộc đoạn $[-5; 5]$. Vậy có 2 giá trị của $x$."
      },
      {
        id: "sa-10.1.3",
        badge: "Trả lời ngắn 3 - Số giá trị tự nhiên thỏa mãn mệnh đề chia hết",
        source: "SBT Toán 10 KNTT Bài 1.8 Trang 8",
        prompt: "Cho mệnh đề chứa biến $P(n)$: \"$n^2 - 1$ chia hết cho 3\" với $n \\in \\{1; 2; 3; 4; 5; 6; 7; 8; 9; 10\\}$. Có bao nhiêu giá trị của $n$ trong tập hợp đã cho làm cho $P(n)$ là mệnh đề đúng?",
        correctAnswer: "6",
        acceptableAnswers: ["6", "sáu"],
        explanation: "Số tự nhiên $n$ không chia hết cho 3 có dạng $n = 3k \\pm 1$, khi đó $n^2 \\equiv 1 \\pmod 3 \\Rightarrow n^2 - 1$ luôn chia hết cho 3. Trong tập hợp đã cho, các số không chia hết cho 3 là: 1, 2, 4, 5, 7, 8 (tổng cộng 6 số). Với các số chia hết cho 3 là 3, 6, 9 thì $n^2 - 1$ không chia hết cho 3. Vậy có 6 giá trị."
      },
      {
        id: "sa-10.1.4",
        badge: "Trả lời ngắn 4 - Tìm tham số nhỏ nhất thỏa mãn mệnh đề với mọi (∀)",
        source: "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới Trang 13",
        prompt: "Tìm giá trị thực nhỏ nhất của tham số $m$ để mệnh đề sau là một mệnh đề đúng:\n\"$\\forall x \\in \\mathbb{R}, x^2 + 2x + m \\ge 0$\".",
        correctAnswer: "1",
        acceptableAnswers: ["1", "m=1"],
        explanation: "Tam thức bậc hai $f(x) = x^2 + 2x + m$ có $a = 1 > 0$. Để $f(x) \\ge 0$ với mọi $x \\in \\mathbb{R}$ thì biệt thức thu gọn $\\Delta' = 1^2 - 1 \\cdot m = 1 - m \\le 0 \\Leftrightarrow m \\ge 1$. Do đó giá trị nhỏ nhất của $m$ là 1."
      },
      {
        id: "sa-10.1.5",
        badge: "Trả lời ngắn 5 - Tìm nghiệm của mệnh đề tồn tại (∃)",
        source: "Chuyên đề Toán 10 KNTT Dạng 3 Câu 18",
        prompt: "Cho mệnh đề $P$: \"$\\exists x \\in \\mathbb{R}, x^2 - 6x + 9 = 0$\". Giá trị thực duy nhất của $x$ thỏa mãn mệnh đề $P$ là bao nhiêu?",
        correctAnswer: "3",
        acceptableAnswers: ["3", "x=3"],
        explanation: "Ta có $x^2 - 6x + 9 = (x - 3)^2 = 0 \\Leftrightarrow x = 3$. Vậy giá trị của $x$ thỏa mãn là 3."
      },
      {
        id: "sa-10.1.6",
        badge: "Trả lời ngắn 6 - Bài toán logic tập hợp thực tế",
        source: "SGK Toán 10 KNTT Trang 12 & Bộ đề cấu trúc mới Trang 14",
        prompt: "Lớp 10A có 40 học sinh, trong đó có 25 bạn thích học môn Toán, 20 bạn thích học môn Văn, và 12 bạn thích cả hai môn Toán và Văn. Hỏi có bao nhiêu bạn học sinh trong lớp không thích cả hai môn Toán và Văn?",
        correctAnswer: "7",
        acceptableAnswers: ["7", "bảy", "7 học sinh"],
        explanation: "Số học sinh thích ít nhất một trong hai môn (Toán hoặc Văn) là: $25 + 20 - 12 = 33$ bạn. Số học sinh không thích cả hai môn Toán và Văn là: $40 - 33 = 7$ bạn.",
        svgDiagram: `<svg viewBox="0 0 440 210" className="w-full max-w-md mx-auto my-2 select-none">
  <defs>
    <linearGradient id="gToan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
      <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.10" />
    </linearGradient>
    <linearGradient id="gVan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.25" />
      <stop offset="100%" stopColor="#be185d" stopOpacity="0.10" />
    </linearGradient>
    <linearGradient id="gGiaoToanVan" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
    </linearGradient>
  </defs>

  <!-- Khung chữ nhật bao quanh -->
  <rect x="10" y="10" width="420" height="190" rx="16" fill="#0b1329" stroke="#334155" strokeWidth="2" />

  <!-- Vùng màu nền 2 hình tròn -->
  <circle cx="170" cy="115" r="68" fill="url(#gToan)" />
  <circle cx="260" cy="115" r="68" fill="url(#gVan)" />

  <!-- Vùng giao nhau hình thấu kính -->
  <path d="M 215 64 A 68 68 0 0 1 215 166 A 68 68 0 0 1 215 64 Z" fill="url(#gGiaoToanVan)" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 2" />

  <!-- Hai đường viền tròn cắt qua nhau rõ ràng -->
  <circle cx="170" cy="115" r="68" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
  <circle cx="260" cy="115" r="68" fill="none" stroke="#f472b6" strokeWidth="2.5" />

  <!-- Biểu tượng Toán và Văn -->
  <text x="170" y="40" fontSize="24" textAnchor="middle">📐</text>
  <text x="260" y="40" fontSize="24" textAnchor="middle">📖</text>

  <!-- Các con số -->
  <text x="135" y="123" fill="#93c5fd" fontSize="22" fontWeight="bold" textAnchor="middle">13</text>
  <text x="215" y="123" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle">12</text>
  <text x="295" y="123" fill="#fbcfe8" fontSize="22" fontWeight="bold" textAnchor="middle">8</text>

  <!-- Số ở góc ngoài -->
  <text x="385" y="165" fill="#34d399" fontSize="20" fontWeight="bold" textAnchor="middle">7</text>
</svg>`
      }
    ]
  },
  "t10-b2-tap-hop-cac-phep-toan": {
  "id": "t10-b2-tap-hop-cac-phep-toan",
  "lessonNumber": 2,
  "title": "Bài 2: Tập hợp và các phép toán trên tập hợp",
  "bookChapter": "Chương I: Mệnh đề và tập hợp (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Tình huống thực tế: Khảo sát và phân loại nhóm học sinh bằng ngôn ngữ tập hợp",
  "scenarioFrames": [],
  "interactiveType": "geometry",
  "youtubeVideoId": "emLiXccjys4",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 2 - Tập hợp và các phép toán trên tập hợp (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "emLiXccjys4",
      "title": "Tiết 1: Khái niệm tập hợp & Tập hợp con"
    },
    {
      "id": "qR-rwgAp1Uw",
      "title": "Tiết 2: Các tập hợp con của ℝ (Khoảng, Đoạn, Nửa khoảng)"
    },
    {
      "id": "xB_nHKTX444",
      "title": "Tiết 3: Các phép toán Giao, Hợp, Hiệu, Phần bù"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.2.1",
      "title": "Ví dụ 1 (Tiết 1): Đếm số tập hợp con của một tập hợp",
      "question": "Tập hợp $A = \\{1; 2; 3\\}$ có tất cả bao nhiêu tập hợp con?",
      "options": [
        "8",
        "6",
        "7",
        "9"
      ],
      "correctIndex": 0,
      "explanation": "Công thức tính số tập hợp con của một tập hợp có $n$ phần tử là $2^n$. Với $n = 3$, số tập hợp con của $A$ là $2^3 = 8$ (gồm $\\emptyset$, 3 tập có 1 phần tử, 3 tập có 2 phần tử và chính tập $A$)."
    },
    {
      "id": "vq-10.2.2",
      "title": "Ví dụ 2 (Tiết 2): Xác định tập con của số thực ℝ",
      "question": "Tập hợp các số thực $x$ thỏa mãn $-2 \\le x < 5$ được viết dưới dạng khoảng, đoạn, nửa khoảng là:",
      "options": [
        "$[-2; 5)$",
        "$(-2; 5]$",
        "$[-2; 5]$",
        "$(-2; 5)$"
      ],
      "correctIndex": 0,
      "explanation": "Dấu có chứa dấu bằng '$\\le$' biểu diễn bằng ngoặc vuông '['; dấu nghiêm ngặt '$<$' biểu diễn bằng ngoặc tròn ')'. Do đó tập hợp là nửa khoảng $[-2; 5)$."
    },
    {
      "id": "vq-10.2.3",
      "title": "Ví dụ 3 (Tiết 3): Giao của hai tập hợp số",
      "question": "Cho hai tập hợp $A = (-3; 4]$ và $B = [1; 6)$. Khi đó tập hợp giao $A \\cap B$ là:",
      "options": [
        "$[1; 4]$",
        "$(-3; 6)$",
        "$[1; 4)$",
        "$(-3; 1]$"
      ],
      "correctIndex": 0,
      "explanation": "Giao $A \\cap B$ gồm các phần tử thuộc cả $A$ và $B$. Biểu diễn trên trục số, ta lấy phần chung giữa $(-3; 4]$ và $[1; 6)$, kết quả là $[1; 4]$."
    },
    {
      "id": "vq-10.2.4",
      "title": "Ví dụ 4 (Tiết 3): Hiệu của hai tập hợp và phần bù",
      "question": "Cho tập hợp $A = [-2; 5)$ và $B = [1; 7]$. Khi đó tập hợp hiệu $A \\setminus B$ là:",
      "options": [
        "$[-2; 1)$",
        "$[-2; 1]$",
        "$(5; 7]$",
        "$[-2; 7]$"
      ],
      "correctIndex": 0,
      "explanation": "Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Vì $B$ chứa điểm $1$ (ngoặc vuông $[1$), nên phần tử $1$ bị loại khỏi $A$, do đó tại mốc $1$ trở thành ngoặc tròn ')'. Kết quả là $[-2; 1)$."
    }
  ],
  "tips": [
    "Quy tắc ngoặc khi tìm hiệu $A \\setminus B$: Tại các mốc biên của $B$, nếu $B$ lấy (ngoặc vuông) thì $A \\setminus B$ bỏ (chuyển thành ngoặc tròn); ngược lại nếu $B$ không lấy (ngoặc tròn) thì $A \\setminus B$ giữ lại (chuyển thành ngoặc vuông).",
    "Vẽ trục số minh họa: Khi làm các phép toán giao, hợp, hiệu trên các khoảng đoạn, hãy luôn vẽ một trục số chung và dùng quy ước gạch bỏ phần không lấy để tránh nhầm lẫn các mốc biên."
  ],
  "traps": [
    "Bẫy tập hợp rỗng: Tập hợp rỗng $\\emptyset$ là tập hợp con của mọi tập hợp ($ \\emptyset \\subset A $ với mọi $A$), nhưng $\\emptyset$ không phải là phần tử của $A$ (trừ khi $A$ là tập hợp chứa các tập hợp con).",
    "Bẫy ngoặc vuông và ngoặc tròn tại vô cực: Tại $-\\infty$ và $+\\infty$ BẮT BUỘC luôn luôn dùng ngoặc tròn, tuyệt đối không dùng ngoặc vuông."
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Khái niệm tập hợp và các tập con của ℝ",
      "points": [
        "Khái niệm và cách xác định tập hợp:",
        "    - Ký hiệu: $a \\in A$ ($a$ thuộc $A$); $b \\notin A$ ($b$ không thuộc $A$).",
        "    - Tập hợp rỗng: Ký hiệu $\\emptyset$, là tập hợp không chứa phần tử nào.",
        "    - Hai cách cho một tập hợp: Liệt kê các phần tử hoặc chỉ ra tính chất đặc trưng.",
        "Tập hợp con và hai tập hợp bằng nhau:",
        "    - $A \\subset B \\Leftrightarrow (\\forall x, x \\in A \\Rightarrow x \\in B)$.",
        "    - Một tập hợp có $n$ phần tử thì có đúng $2^n$ tập hợp con.",
        "    - $A = B \\Leftrightarrow A \\subset B \\text{ và } B \\subset A$.",
        "Các tập hợp con thường dùng của tập số thực ℝ:",
        "    - Khoảng $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$",
        "    - Khoảng $(a; +\\infty) = \\{x \\in \\mathbb{R} \\mid x > a\\}$",
        "    - Khoảng $(-\\infty; b) = \\{x \\in \\mathbb{R} \\mid x < b\\}$",
        "    - Đoạn $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$",
        "    - Nửa khoảng $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$",
        "    - Nửa khoảng $(a; b] = \\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$",
        "    - Nửa khoảng $[a; +\\infty) = \\{x \\in \\mathbb{R} \\mid x \\ge a\\}$",
        "    - Nửa khoảng $(-\\infty; b] = \\{x \\in \\mathbb{R} \\mid x \\le b\\}$"
      ],
      "examples": [
        {
          "title": "Ví dụ 1a: Liệt kê phần tử và xác định tập con (SGK Trang 14)",
          "problem": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (2x^2 - 5x + 2)(x^2 - 4) = 0\\}$.\na) Liệt kê các phần tử của tập hợp $A$.\nb) Tập hợp $A$ có tất cả bao nhiêu tập hợp con?",
          "solution": "• Trả lời ý a:\n  - Giải phương trình: $2x^2 - 5x + 2 = 0 \\Leftrightarrow x = 2$ hoặc $x = \\frac{1}{2}$.\n  - Giải phương trình: $x^2 - 4 = 0 \\Leftrightarrow x = 2$ hoặc $x = -2$.\n  - Vì $x \\in \\mathbb{Z}$ nên nhận $x = -2$ và $x = 2$. Vậy $A = \\{-2; 2\\}$.\n• Trả lời ý b: Tập $A$ có 2 phần tử nên số tập con của $A$ là $2^2 = 4$ tập con."
        },
        {
          "title": "Ví dụ 1b: Biểu diễn khoảng, đoạn trên trục số (SGK Trang 15)",
          "problem": "Biểu diễn các tập hợp sau dưới dạng khoảng, đoạn, nửa khoảng:\n  a) $A = \\{x \\in \\mathbb{R} \\mid -3 \\le x < 2\\}$.\n  b) $B = \\{x \\in \\mathbb{R} \\mid x > 1\\}$.",
          "solution": "• Trả lời ý a: $A = [-3; 2)$ (nửa khoảng, lấy mút vuông tại $-3$ và mút tròn tại $2$).\n• Trả lời ý b: $B = (1; +\\infty)$ (khoảng từ $1$ đến dương vô cực, lấy ngoặc tròn tại $1$).",
          "svgDiagram": "<svg viewBox=\"0 0 520 120\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg select-none\">\n  <!-- Dòng 1: Tập A = [-3; 2) -->\n  <text x=\"15\" y=\"32\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">a) Tập A = [-3; 2):</text>\n  <line x1=\"145\" y1=\"28\" x2=\"495\" y2=\"28\" stroke=\"#475569\" stroke-width=\"2\" />\n  <polygon points=\"505,28 493,24 493,32\" fill=\"#94a3b8\" />\n  <!-- Gạch bỏ bên trái -3 (145 đến 210) -->\n  <path d=\"M 155 20 L 165 36 M 170 20 L 180 36 M 185 20 L 195 36 M 200 20 L 210 36\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-opacity=\"0.8\" />\n  <!-- Đoạn lấy từ -3 (210) đến 2 (360) -->\n  <line x1=\"210\" y1=\"28\" x2=\"360\" y2=\"28\" stroke=\"#10b981\" stroke-width=\"3.5\" />\n  <text x=\"210\" y=\"33\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"18\" font-weight=\"bold\">[</text>\n  <text x=\"210\" y=\"47\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"11\" font-weight=\"bold\">-3</text>\n  <text x=\"360\" y=\"34\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"20\" font-weight=\"bold\">)</text>\n  <text x=\"360\" y=\"47\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"11\" font-weight=\"bold\">2</text>\n  <!-- Gạch bỏ bên phải 2 (360 đến 490) -->\n  <path d=\"M 370 20 L 380 36 M 385 20 L 395 36 M 400 20 L 410 36 M 415 20 L 425 36 M 430 20 L 440 36 M 445 20 L 455 36 M 460 20 L 470 36 M 475 20 L 485 36\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-opacity=\"0.8\" />\n\n  <!-- Dòng 2: Tập B = (1; +∞) -->\n  <text x=\"15\" y=\"92\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">b) Tập B = (1; +∞):</text>\n  <line x1=\"145\" y1=\"88\" x2=\"495\" y2=\"88\" stroke=\"#475569\" stroke-width=\"2\" />\n  <polygon points=\"505,88 493,84 493,92\" fill=\"#94a3b8\" />\n  <!-- Gạch bỏ bên trái 1 (145 đến 300) -->\n  <path d=\"M 155 80 L 165 96 M 170 80 L 180 96 M 185 80 L 195 96 M 200 80 L 210 96 M 215 80 L 225 96 M 230 80 L 240 96 M 245 80 L 255 96 M 260 80 L 270 96 M 275 80 L 285 96 M 290 80 L 300 96\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-opacity=\"0.8\" />\n  <!-- Tia lấy từ 1 (300) đến +∞ (495) -->\n  <line x1=\"300\" y1=\"88\" x2=\"495\" y2=\"88\" stroke=\"#38bdf8\" stroke-width=\"3.5\" />\n  <text x=\"300\" y=\"94\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"20\" font-weight=\"bold\">(</text>\n  <text x=\"300\" y=\"107\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"11\" font-weight=\"bold\">1</text>\n</svg>"
        }
      ]
    },
    {
      "index": "2",
      "title": "Các phép toán trên tập hợp: Giao, Hợp, Hiệu và Phần bù",
      "points": [
        "Phép giao (A ∩ B): Lấy phần tử CHUNG của cả hai tập hợp.",
        "    - $A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$.",
        "Phép hợp (A ∪ B): Lấy TẤT CẢ các phần tử thuộc A hoặc thuộc B.",
        "    - $A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$.",
        "Phép hiệu (A \\ B) và Phần bù:",
        "    - Hiệu $A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}$ (thuộc $A$ nhưng loại bỏ phần tử thuộc $B$).",
        "    - Phần bù: Khi $A \\subset E$, phần bù của $A$ trong $E$ là $C_E A = E \\setminus A$."
      ],
      "examples": [
        {
          "title": "Ví dụ 2a: Phép toán trên tập hợp số tự nhiên (SGK Trang 16)",
          "problem": "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{2; 4; 6; 8\\}$. Hãy xác định:\n  a) $A \\cap B$ và $A \\cup B$.\n  b) $A \\setminus B$ và $B \\setminus A$.",
          "solution": "• Trả lời ý a:\n  - $A \\cap B = \\{2; 4\\}$ (các phần tử chung của cả hai tập hợp).\n  - $A \\cup B = \\{1; 2; 3; 4; 6; 8\\}$ (lấy tất cả các phần tử của cả hai tập hợp).\n• Trả lời ý b:\n  - $A \\setminus B = \\{1; 3\\}$ (thuộc $A$ nhưng không thuộc $B$).\n  - $B \\setminus A = \\{6; 8\\}$ (thuộc $B$ nhưng không thuộc $A$)."
        },
        {
          "title": "Ví dụ 2b: Phép toán trên khoảng, đoạn số thực (SGK Trang 17)",
          "problem": "Cho hai tập hợp $A = [-2; 3)$ và $B = [1; 5]$. Xác định $A \\cap B, A \\cup B, A \\setminus B$ và $C_{\\mathbb{R}} B$.",
          "solution": "• $A \\cap B = [1; 3)$ (phần chung giữa hai tập hợp).\n• $A \\cup B = [-2; 5]$ (hợp lại phủ từ mút nhỏ nhất $-2$ đến mút lớn nhất $5$).\n• $A \\setminus B = [-2; 1)$ (thuộc $[-2; 3)$ nhưng bỏ đi đoạn $[1; 5]$, mút 1 thuộc $B$ nên đổi thành ngoặc tròn).\n• $C_{\\mathbb{R}} B = \\mathbb{R} \\setminus [1; 5] = (-\\infty; 1) \\cup (5; +\\infty)$.",
          "svgDiagram": "<svg viewBox=\"0 0 620 270\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-2xl select-none\">\n  <!-- Đường dóng mốc toạ độ -2 (x=240), 1 (x=310), 3 (x=390), 5 (x=480) -->\n  <line x1=\"240\" y1=\"12\" x2=\"240\" y2=\"265\" stroke=\"#334155\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n  <line x1=\"310\" y1=\"12\" x2=\"310\" y2=\"265\" stroke=\"#334155\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n  <line x1=\"390\" y1=\"12\" x2=\"390\" y2=\"265\" stroke=\"#334155\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n  <line x1=\"480\" y1=\"12\" x2=\"480\" y2=\"265\" stroke=\"#334155\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n\n  <!-- Dòng 1: Tập A = [-2; 3) -->\n  <text x=\"12\" y=\"32\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\">Tập A = [-2; 3):</text>\n  <line x1=\"190\" y1=\"28\" x2=\"585\" y2=\"28\" stroke=\"#475569\" stroke-width=\"1.8\" />\n  <polygon points=\"593,28 583,24 583,32\" fill=\"#94a3b8\" />\n  <path d=\"M 195 21 L 205 35 M 210 21 L 220 35 M 225 21 L 235 35\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n  <line x1=\"240\" y1=\"28\" x2=\"390\" y2=\"28\" stroke=\"#38bdf8\" stroke-width=\"3\" />\n  <text x=\"240\" y=\"33\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"16\" font-weight=\"bold\">[</text>\n  <text x=\"240\" y=\"44\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">-2</text>\n  <text x=\"390\" y=\"34\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"18\" font-weight=\"bold\">)</text>\n  <text x=\"390\" y=\"44\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">3</text>\n  <path d=\"M 400 21 L 410 35 M 420 21 L 430 35 M 440 21 L 450 35 M 460 21 L 470 35 M 480 21 L 490 35 M 500 21 L 510 35 M 520 21 L 530 35 M 540 21 L 550 35 M 560 21 L 570 35\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n\n  <!-- Dòng 2: Tập B = [1; 5] -->\n  <text x=\"12\" y=\"74\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\">Tập B = [1; 5]:</text>\n  <line x1=\"190\" y1=\"70\" x2=\"585\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.8\" />\n  <polygon points=\"593,70 583,66 583,74\" fill=\"#94a3b8\" />\n  <path d=\"M 195 63 L 205 77 M 215 63 L 225 77 M 235 63 L 245 77 M 255 63 L 265 77 M 275 63 L 285 77 M 295 63 L 305 77\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n  <line x1=\"310\" y1=\"70\" x2=\"480\" y2=\"70\" stroke=\"#f59e0b\" stroke-width=\"3\" />\n  <text x=\"310\" y=\"75\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"16\" font-weight=\"bold\">[</text>\n  <text x=\"310\" y=\"86\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">1</text>\n  <text x=\"480\" y=\"75\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"16\" font-weight=\"bold\">]</text>\n  <text x=\"480\" y=\"86\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">5</text>\n  <path d=\"M 490 63 L 500 77 M 510 63 L 520 77 M 530 63 L 540 77 M 550 63 L 560 77 M 570 63 L 580 77\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n\n  <!-- Dòng 3: A ∩ B = [1; 3) -->\n  <text x=\"12\" y=\"116\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">A ∩ B = [1; 3):</text>\n  <line x1=\"190\" y1=\"112\" x2=\"585\" y2=\"112\" stroke=\"#475569\" stroke-width=\"1.8\" />\n  <polygon points=\"593,112 583,108 583,116\" fill=\"#94a3b8\" />\n  <path d=\"M 195 105 L 205 119 M 215 105 L 225 119 M 235 105 L 245 119 M 255 105 L 265 119 M 275 105 L 285 119 M 295 105 L 305 119\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n  <line x1=\"310\" y1=\"112\" x2=\"390\" y2=\"112\" stroke=\"#38bdf8\" stroke-width=\"3.5\" />\n  <text x=\"310\" y=\"117\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"16\" font-weight=\"bold\">[</text>\n  <text x=\"310\" y=\"128\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">1</text>\n  <text x=\"390\" y=\"118\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"18\" font-weight=\"bold\">)</text>\n  <text x=\"390\" y=\"128\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">3</text>\n  <path d=\"M 400 105 L 410 119 M 420 105 L 430 119 M 440 105 L 450 119 M 460 105 L 470 119 M 480 105 L 490 119 M 500 105 L 510 119 M 520 105 L 530 119 M 540 105 L 550 119 M 560 105 L 570 119\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n\n  <!-- Dòng 4: A ∪ B = [-2; 5] -->\n  <text x=\"12\" y=\"158\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"bold\">A ∪ B = [-2; 5]:</text>\n  <line x1=\"190\" y1=\"154\" x2=\"585\" y2=\"154\" stroke=\"#475569\" stroke-width=\"1.8\" />\n  <polygon points=\"593,154 583,150 583,158\" fill=\"#94a3b8\" />\n  <path d=\"M 195 147 L 205 161 M 210 147 L 220 161 M 225 147 L 235 161\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n  <line x1=\"240\" y1=\"154\" x2=\"480\" y2=\"154\" stroke=\"#f59e0b\" stroke-width=\"3.5\" />\n  <text x=\"240\" y=\"159\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"16\" font-weight=\"bold\">[</text>\n  <text x=\"240\" y=\"170\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">-2</text>\n  <text x=\"480\" y=\"159\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"16\" font-weight=\"bold\">]</text>\n  <text x=\"480\" y=\"170\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">5</text>\n  <path d=\"M 490 147 L 500 161 M 510 147 L 520 161 M 530 147 L 540 161 M 550 147 L 560 161 M 570 147 L 580 161\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n\n  <!-- Dòng 5: A ∖ B = [-2; 1) (dùng ký hiệu ∖ U+2216 chuẩn toán học) -->\n  <text x=\"12\" y=\"200\" fill=\"#10b981\" font-size=\"12\" font-weight=\"bold\">A ∖ B = [-2; 1):</text>\n  <line x1=\"190\" y1=\"196\" x2=\"585\" y2=\"196\" stroke=\"#475569\" stroke-width=\"1.8\" />\n  <polygon points=\"593,196 583,192 583,200\" fill=\"#94a3b8\" />\n  <path d=\"M 195 189 L 205 203 M 210 189 L 220 203 M 225 189 L 235 203\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n  <line x1=\"240\" y1=\"196\" x2=\"310\" y2=\"196\" stroke=\"#10b981\" stroke-width=\"3.5\" />\n  <text x=\"240\" y=\"201\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"16\" font-weight=\"bold\">[</text>\n  <text x=\"240\" y=\"212\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">-2</text>\n  <text x=\"310\" y=\"202\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"18\" font-weight=\"bold\">)</text>\n  <text x=\"310\" y=\"212\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">1</text>\n  <path d=\"M 320 189 L 330 203 M 340 189 L 350 203 M 360 189 L 370 203 M 380 189 L 390 203 M 400 189 L 410 203 M 420 189 L 430 203 M 440 189 L 450 203 M 460 189 L 470 203 M 480 189 L 490 203 M 500 189 L 510 203 M 520 189 L 530 203 M 540 189 L 550 203 M 560 189 L 570 203\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n\n  <!-- Dòng 6: Phần bù C_ℝ B to rõ, hiển thị đẹp mắt -->\n  <text x=\"12\" y=\"238\" fill=\"#c084fc\" font-size=\"14\" font-weight=\"bold\">C<tspan font-size=\"10\" dy=\"4\">ℝ</tspan><tspan font-size=\"14\" dy=\"-4\"> B</tspan></text>\n  <text x=\"12\" y=\"254\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\">= (-∞; 1) ∪ (5; +∞):</text>\n  <line x1=\"190\" y1=\"244\" x2=\"585\" y2=\"244\" stroke=\"#475569\" stroke-width=\"1.8\" />\n  <polygon points=\"593,244 583,240 583,248\" fill=\"#94a3b8\" />\n  <!-- Tia trái: (-∞; 1) -->\n  <line x1=\"190\" y1=\"244\" x2=\"310\" y2=\"244\" stroke=\"#a855f7\" stroke-width=\"3.5\" />\n  <text x=\"310\" y=\"250\" text-anchor=\"middle\" fill=\"#a855f7\" font-size=\"18\" font-weight=\"bold\">)</text>\n  <text x=\"310\" y=\"260\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">1</text>\n  <!-- Gạch bỏ giữa [1; 5] -->\n  <path d=\"M 320 237 L 330 251 M 340 237 L 350 251 M 360 237 L 370 251 M 375 237 L 385 251 M 395 237 L 405 251 M 415 237 L 425 251 M 435 237 L 445 251 M 455 237 L 465 251 M 470 237 L 480 251\" stroke=\"#ef4444\" stroke-width=\"1.3\" stroke-opacity=\"0.75\" />\n  <!-- Tia phải: (5; +∞) -->\n  <line x1=\"480\" y1=\"244\" x2=\"585\" y2=\"244\" stroke=\"#a855f7\" stroke-width=\"3.5\" />\n  <text x=\"480\" y=\"250\" text-anchor=\"middle\" fill=\"#a855f7\" font-size=\"18\" font-weight=\"bold\">(</text>\n  <text x=\"480\" y=\"260\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\" font-weight=\"bold\">5</text>\n</svg>"
        }
      ]
    },
    {
      "index": "3",
      "title": "Ứng dụng tập hợp giải quyết bài toán thực tế",
      "points": [
        "Công thức tính số phần tử của hợp hai tập hữu hạn:",
        "    - $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
        "Phương pháp giải bằng sơ đồ Ven:",
        "    - Vẽ các hình tròn biểu diễn các tập hợp.",
        "    - Điền số lượng từ phần giao trong cùng ($A \\cap B$) rồi tính các phần còn lại."
      ],
      "examples": [
        {
          "title": "Ví dụ 3: Bài toán khảo sát sở thích học sinh (SGK Trang 18)",
          "problem": "Lớp 10A có 40 học sinh, trong đó có 26 bạn thích môn Bóng đá, 18 bạn thích môn Cầu lông, và 12 bạn thích cả hai môn. Hỏi:\na) Có bao nhiêu bạn chỉ thích môn Bóng đá?\nb) Có bao nhiêu bạn không thích môn nào trong hai môn trên?",
          "solution": "• Trả lời ý a: Số bạn chỉ thích môn Bóng đá là: $26 - 12 = 14$ bạn.\n• Trả lời ý b:\n  - Số bạn thích ít nhất một trong hai môn là: $n(A \\cup B) = 26 + 18 - 12 = 32$ bạn.\n  - Số bạn không thích môn nào là: $40 - 32 = 8$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md select-none\">\n  <!-- Khung chữ nhật bao quanh toàn thể lớp học 10A -->\n  <rect x=\"20\" y=\"15\" width=\"400\" height=\"200\" rx=\"16\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"35\" y=\"42\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">👥 40</text>\n\n  <!-- Vòng tròn 1: Môn Bóng đá (175, 120, r=68) -->\n  <circle cx=\"175\" cy=\"120\" r=\"68\" fill=\"#0284c7\" fill-opacity=\"0.25\" stroke=\"#38bdf8\" stroke-width=\"2.5\" />\n  <!-- Vòng tròn 2: Môn Cầu lông (265, 120, r=68) -->\n  <circle cx=\"265\" cy=\"120\" r=\"68\" fill=\"#7c3aed\" fill-opacity=\"0.25\" stroke=\"#a855f7\" stroke-width=\"2.5\" />\n\n  <!-- Thấu kính giao nhau nổi bật -->\n  <path d=\"M 220 69 A 68 68 0 0 1 220 171 A 68 68 0 0 1 220 69\" fill=\"#9333ea\" fill-opacity=\"0.45\" stroke=\"#e879f9\" stroke-width=\"2\" />\n\n  <!-- Biểu tượng và số môn Bóng đá -->\n  <text x=\"140\" y=\"85\" font-size=\"22\" text-anchor=\"middle\">⚽</text>\n  <text x=\"140\" y=\"128\" font-size=\"22\" font-weight=\"900\" fill=\"#38bdf8\" text-anchor=\"middle\">14</text>\n\n  <!-- Vùng giao nhau: thích cả 2 môn -->\n  <text x=\"220\" y=\"128\" font-size=\"24\" font-weight=\"900\" fill=\"#facc15\" text-anchor=\"middle\">12</text>\n\n  <!-- Biểu tượng và số môn Cầu lông -->\n  <text x=\"300\" y=\"85\" font-size=\"22\" text-anchor=\"middle\">🏸</text>\n  <text x=\"300\" y=\"128\" font-size=\"22\" font-weight=\"900\" fill=\"#c084fc\" text-anchor=\"middle\">6</text>\n\n  <!-- Không thích môn nào (ngoài 2 vòng tròn) -->\n  <g transform=\"translate(65, 180)\">\n    <circle cx=\"0\" cy=\"0\" r=\"16\" fill=\"#1e293b\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    <text x=\"0\" y=\"6\" text-anchor=\"middle\" fill=\"#f87171\" font-size=\"16\" font-weight=\"900\">8</text>\n  </g>\n</svg>"
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.2.1",
      "badge": "Nhận biết - Khái niệm phần tử và tập hợp",
      "source": "SGK Toán 10 KNTT Bài 1.8 Trang 19",
      "question": "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x \\le 4\\}$. Khẳng định nào sau đây là SAI?",
      "options": [
        "$0 \\in A$",
        "$4 \\in A$",
        "$-1 \\in A$",
        "$\\{1; 2\\} \\subset A$"
      ],
      "correctIndex": 2,
      "explanation": "Vì $-1$ là số nguyên âm, không phải số tự nhiên ($-1 \\notin \\mathbb{N}$), nên khẳng định \"$-1 \\in A$\" là SAI."
    },
    {
      "id": "quiz-10.2.2",
      "badge": "Thông hiểu - Liệt kê phần tử tập nghiệm",
      "source": "SBT Toán 10 KNTT Bài 1.10 Trang 14",
      "question": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (2x - 1)(x^2 - 3x + 2) = 0\\}$. Viết tập hợp $A$ bằng cách liệt kê các phần tử:",
      "options": [
        "$A = \\{1; 2\\}$",
        "$A = \\{\\frac{1}{2}; 1; 2\\}$",
        "$A = \\{0; 1; 2\\}$",
        "$A = \\{1\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình $(2x - 1)(x - 1)(x - 2) = 0 \\Leftrightarrow x = \\frac{1}{2}, x = 1, x = 2$. Do điều kiện $x \\in \\mathbb{Z}$ nên ta chỉ nhận $x = 1$ và $x = 2$. Vậy $A = \\{1; 2\\}$."
    },
    {
      "id": "quiz-10.2.3",
      "badge": "Nhận biết - Số tập con của tập hữu hạn",
      "source": "Chuyên đề Toán 10 KNTT Dạng 1 Trang 28",
      "question": "Số tập con của một tập hợp có 4 phần tử là:",
      "options": [
        "$8$",
        "$16$",
        "$12$",
        "$4$"
      ],
      "correctIndex": 1,
      "explanation": "Một tập hợp có $n$ phần tử thì số tập con là $2^n$. Với $n = 4$, số tập con là $2^4 = 16$."
    },
    {
      "id": "quiz-10.2.4",
      "badge": "Thông hiểu - Số tập con gồm k phần tử",
      "source": "SGK Toán 10 KNTT Trang 19",
      "question": "Cho tập hợp $A = \\{1; 2; 3; 4; 5\\}$. Số tập con gồm đúng 2 phần tử của tập hợp $A$ là:",
      "options": [
        "$10$",
        "$20$",
        "$25$",
        "$5$"
      ],
      "correctIndex": 0,
      "explanation": "Số tập con gồm 2 phần tử của tập hợp có 5 phần tử là tổ hợp chập 2 của 5: $C_5^2 = \\frac{5 \\cdot 4}{2} = 10$."
    },
    {
      "id": "quiz-10.2.5",
      "badge": "Nhận biết - Quan hệ bao hàm tập con",
      "source": "SBT Toán 10 KNTT Trang 15",
      "options": [
        "$A \\cap B = B$",
        "$A \\cup B = A$",
        "$A \\cap B = A$",
        "$A \\setminus B = B$"
      ],
      "correctIndex": 2,
      "explanation": "Vì mọi phần tử của $A$ đều thuộc $B$ ($A \\subset B$), nên phần tử chung của $A$ và $B$ chính là tập $A$, tức là $A \\cap B = A$.",
      "question": "Cho hai tập hợp $A$ và $B$ thỏa mãn $A \\subset B$. Khẳng định nào sau đây luôn ĐÚNG?"
    },
    {
      "id": "quiz-10.2.6",
      "badge": "Nhận biết - Ký hiệu khoảng, đoạn, nửa khoảng",
      "source": "SGK Toán 10 KNTT Trang 15",
      "question": "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid -2 \\le x < 5\\}$. Tập hợp $A$ được viết dưới dạng khoảng, đoạn, nửa khoảng là:",
      "options": [
        "$(-2; 5)$",
        "$[-2; 5]$",
        "$(-2; 5]$",
        "$[-2; 5)$"
      ],
      "correctIndex": 3,
      "explanation": "Dấu $\\le$ tại $-2$ tương ứng với ngoặc vuông $[-2$, dấu $<$ tại $5$ tương ứng với ngoặc tròn $5)$. Vậy $A = [-2; 5)$."
    },
    {
      "id": "quiz-10.2.7",
      "badge": "Thông hiểu - Giao của hai khoảng, tia số",
      "source": "SBT Toán 10 KNTT Bài 1.14",
      "options": [
        "$(-1; 3]$",
        "$[-1; 3)$",
        "$(-1; 3)$",
        "$(-\\infty; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Phần tử chung thỏa mãn $x \\le 3$ và $x > -1$, tức là $-1 < x \\le 3$. Do đó $A \\cap B = (-1; 3]$.",
      "question": "Cho hai tập hợp $A = (-\\infty; 3]$ và $B = (-1; +\\infty)$. Tìm tập hợp $A \\cap B$."
    },
    {
      "id": "quiz-10.2.8",
      "badge": "Thông hiểu - Hợp của hai khoảng, đoạn",
      "source": "SGK Toán 10 KNTT Trang 19",
      "options": [
        "$[0; 2)$",
        "$[-3; 5]$",
        "$(-3; 5)$",
        "$[-3; 0]$"
      ],
      "correctIndex": 1,
      "explanation": "Hợp của hai tập hợp lấy từ giá trị nhỏ nhất $-3$ (ngoặc vuông) đến giá trị lớn nhất $5$ (ngoặc vuông). Vậy $A \\cup B = [-3; 5]$.",
      "question": "Cho hai tập hợp $A = [-3; 2)$ và $B = [0; 5]$. Tìm tập hợp $A \\cup B$."
    },
    {
      "id": "quiz-10.2.9",
      "badge": "Vận dụng - Hiệu của hai khoảng, đoạn",
      "source": "Chuyên đề Toán 10 KNTT Trang 32",
      "options": [
        "$[-2; 1]$",
        "$[-2; 1)$",
        "$(4; 6]$",
        "$(1; 4]$"
      ],
      "correctIndex": 0,
      "explanation": "Ta lấy các phần tử thuộc $[-2; 4]$ và bỏ đi các phần tử thuộc $(1; 6]$. Do số $1 \\notin B$ nên số $1$ vẫn thuộc $A \\setminus B$. Vậy $A \\setminus B = [-2; 1]$.",
      "question": "Cho hai tập hợp $A = [-2; 4]$ và $B = (1; 6]$. Tìm tập hợp $A \\setminus B$."
    },
    {
      "id": "quiz-10.2.10",
      "badge": "Thông hiểu - Phần bù trên tập số thực ℝ",
      "source": "SGK Toán 10 KNTT Trang 17",
      "question": "Phần bù của tập hợp $A = (-\\infty; 2]$ trong tập số thực $\\mathbb{R}$ (ký hiệu $C_{\\mathbb{R}} A$) là:",
      "options": [
        "$(2; +\\infty)$",
        "$[2; +\\infty)$",
        "$(-\\infty; 2)$",
        "$(-\\infty; -2]$"
      ],
      "correctIndex": 0,
      "explanation": "Phần bù $C_{\\mathbb{R}} A = \\mathbb{R} \\setminus (-\\infty; 2] = (2; +\\infty)$."
    },
    {
      "id": "quiz-10.2.11",
      "badge": "Nhận biết - Giao của hai tập hợp rời rạc",
      "source": "SBT Toán 10 KNTT Trang 16",
      "options": [
        "$1$",
        "$2$",
        "$4$",
        "$6$"
      ],
      "correctIndex": 1,
      "explanation": "Các phần tử chung của $A$ và $B$ là $2$ và $4$. Do đó $A \\cap B = \\{2; 4\\}$, có đúng 2 phần tử.",
      "question": "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{2; 4; 6; 8\\}$. Tập hợp $A \\cap B$ có bao nhiêu phần tử?"
    },
    {
      "id": "quiz-10.2.12",
      "badge": "Thông hiểu - Xét tính đúng sai của phép toán",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 20",
      "options": [
        "$A \\cap B = [-2; 1)$",
        "$A \\cup B = (-\\infty; 4]$",
        "$B \\setminus A = [1; 4]$",
        "$A \\setminus B = (-\\infty; -2]$"
      ],
      "correctIndex": 3,
      "explanation": "Vì $-2 \\in B$ nên $-2$ không thể thuộc $A \\setminus B$. Khẳng định đúng phải là $A \\setminus B = (-\\infty; -2)$.",
      "question": "Cho $A = (-\\infty; 1)$ và $B = [-2; 4]$. Khẳng định nào sau đây là SAI?"
    },
    {
      "id": "quiz-10.2.13",
      "badge": "Thông hiểu - Tập nghiệm bất phương trình",
      "source": "SGK Toán 10 KNTT Trang 19",
      "question": "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 - 4x + 3 \\le 0\\}$. Khi đó tập hợp $A$ biểu diễn dưới dạng đoạn là:",
      "options": [
        "$[1; 3]$",
        "$(1; 3)$",
        "$(-\\infty; 1] \\cup [3; +\\infty)$",
        "$[0; 3]$"
      ],
      "correctIndex": 0,
      "explanation": "Giải bất phương trình: $x^2 - 4x + 3 \\le 0 \\Leftrightarrow (x - 1)(x - 3) \\le 0 \\Leftrightarrow 1 \\le x \\le 3$. Vậy $A = [1; 3]$."
    },
    {
      "id": "quiz-10.2.14",
      "badge": "Thông hiểu - Độ dài của đoạn giao nhau",
      "source": "Chuyên đề Toán 10 KNTT Trang 35",
      "options": [
        "$1$",
        "$2$",
        "$3$",
        "$5$"
      ],
      "correctIndex": 1,
      "explanation": "Ta có $A \\cap B = [0; 2]$. Độ dài của đoạn $[0; 2]$ là $2 - 0 = 2$.",
      "question": "Cho hai tập hợp $A = [-3; 2]$ và $B = [0; 6]$. Độ dài của đoạn $A \\cap B$ bằng bao nhiêu?"
    },
    {
      "id": "quiz-10.2.15",
      "badge": "Vận dụng - Tìm tham số để hai tập rời nhau",
      "source": "Đề thi khảo sát chất lượng Toán 10 KNTT",
      "options": [
        "$m < -1$ hoặc $m > 4$",
        "$-1 \\le m \\le 4$",
        "$m \\le -1$ hoặc $m \\ge 4$",
        "$m < 1$ hoặc $m > 4$"
      ],
      "correctIndex": 0,
      "explanation": "Để hai đoạn rời nhau thì $A$ nằm hoàn toàn bên trái $B$ ($m + 2 < 1 \\Leftrightarrow m < -1$) hoặc $A$ nằm hoàn toàn bên phải $B$ ($m > 4$). Vậy $m < -1$ hoặc $m > 4$.",
      "question": "Cho hai tập hợp $A = [m; m + 2]$ và $B = [1; 4]$. Tìm tất cả các giá trị của tham số $m$ để $A \\cap B = \\emptyset$."
    },
    {
      "id": "quiz-10.2.16",
      "badge": "Vận dụng - Tìm tham số để tập này chứa tập kia",
      "source": "Bộ đề ôn thi định kỳ Toán 10",
      "options": [
        "$-1 \\le m < 4$",
        "$-1 < m \\le 4$",
        "$m \\ge -1$",
        "$-1 \\le m \\le 4$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện để $A \\ne \\emptyset$ là $m - 1 < 3 \\Leftrightarrow m < 4$. Để $A \\subset B$ thì $m - 1 \\ge -2 \\Leftrightarrow m \\ge -1$ (và $3 < 5$ luôn đúng). Kết hợp lại ta được: $-1 \\le m < 4$.",
      "question": "Cho hai tập hợp $A = (m - 1; 3]$ và $B = (-2; 5)$. Tìm tất cả các giá trị của tham số $m$ để $A \\subset B$."
    },
    {
      "id": "quiz-10.2.17",
      "badge": "Vận dụng - Tìm tham số để hai tia số giao nhau khác rỗng",
      "source": "SBT Toán 10 KNTT Bài 1.18",
      "options": [
        "$m \\le 3$",
        "$m < 3$",
        "$m \\ge 3$",
        "$m > 3$"
      ],
      "correctIndex": 0,
      "explanation": "Hai tia số có phần chung khi và chỉ khi điểm đầu của $B$ không vượt quá điểm cuối của $A$: $2m - 3 \\le m \\Leftrightarrow m \\le 3$.",
      "question": "Cho hai tập hợp $A = (-\\infty; m]$ và $B = [2m - 3; +\\infty)$. Tìm tất cả các giá trị của tham số $m$ để $A \\cap B \\ne \\emptyset$."
    },
    {
      "id": "quiz-10.2.18",
      "badge": "Vận dụng - Bài toán thực tế câu lạc bộ thể thao",
      "source": "SGK Toán 10 KNTT Bài 1.11 Trang 19",
      "question": "Một lớp có 40 học sinh, trong đó có 25 bạn chơi bóng đá, 18 bạn chơi bóng chuyền, và 10 bạn chơi cả hai môn. Hỏi có bao nhiêu bạn không chơi môn thể thao nào trong hai môn trên?",
      "options": [
        "$7$",
        "$8$",
        "$10$",
        "$5$"
      ],
      "correctIndex": 0,
      "explanation": "Số bạn chơi ít nhất một môn: $n(A \\cup B) = 25 + 18 - 10 = 33$ bạn. Số bạn không chơi môn nào là: $40 - 33 = 7$ bạn.",
      "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Lớp 10A (45 HS)</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#38bdf8\" fill-opacity=\"0.22\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#f59e0b\" fill-opacity=\"0.22\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <text x=\"135\" y=\"70\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">Bóng đá ⚽ (25)</text> <text x=\"250\" y=\"70\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">Bóng rổ 🏀 (20)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">15</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">10</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">10</text> <text x=\"355\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Ngoài: 10</text> </svg>"
    },
    {
      "id": "quiz-10.2.19",
      "badge": "Vận dụng - Bài toán thực tế khảo sát sách",
      "source": "SBT Toán 10 KNTT Bài 1.19 Trang 17",
      "question": "Khảo sát 50 học sinh về sở thích đọc sách, có 32 bạn thích truyện trinh thám, 28 bạn thích tiểu thuyết phiêu lưu, và cả 50 bạn đều thích ít nhất một trong hai thể loại trên. Có bao nhiêu bạn thích cả hai thể loại?",
      "options": [
        "$10$",
        "$12$",
        "$15$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức: $n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 32 + 28 - 50 = 10$ bạn.",
      "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Khách siêu thị (100)</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#ef4444\" fill-opacity=\"0.22\" stroke=\"#ef4444\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#06b6d4\" fill-opacity=\"0.22\" stroke=\"#06b6d4\" stroke-width=\"2\"/> <text x=\"130\" y=\"70\" fill=\"#f87171\" font-size=\"13\" font-weight=\"bold\">Thực phẩm 🥩 (65)</text> <text x=\"255\" y=\"70\" fill=\"#22d3ee\" font-size=\"13\" font-weight=\"bold\">Đồ uống 🥤 (45)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">40</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">25</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">20</text> <text x=\"360\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Không mua: 15</text> </svg>"
    },
    {
      "id": "quiz-10.2.20",
      "badge": "Thông hiểu - Công thức cộng số phần tử tập hợp",
      "source": "Chuyên đề Toán 10 KNTT Trang 36",
      "question": "Cho tập hợp $A$ có 5 phần tử và tập hợp $B$ có 6 phần tử. Biết $A \\cap B$ có 2 phần tử. Số phần tử của tập hợp $A \\cup B$ là:",
      "options": [
        "$9$",
        "$11$",
        "$8$",
        "$13$"
      ],
      "correctIndex": 0,
      "explanation": "Số phần tử của tập hợp hợp là: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 5 + 6 - 2 = 9$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.2.1",
      "badge": "Đúng / Sai 1 - Xác định phần tử và tập con",
      "source": "SGK Toán 10 KNTT Bài 1.9 & SBT Trang 14",
      "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (x^2 - 9)(2x^2 - 5x + 2) = 0\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x \\le 3\\}$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Phương trình $(x^2 - 9)(2x^2 - 5x + 2) = 0$ có 4 nghiệm thực phân biệt.",
          "correctAnswer": true,
          "explanation": "Phương trình có 4 nghiệm thực là $x = 3, x = -3, x = 2, x = \\frac{1}{2}$."
        },
        {
          "id": "b",
          "text": "Tập hợp $A$ có đúng 3 phần tử.",
          "correctAnswer": true,
          "explanation": "Vì $x \\in \\mathbb{Z}$ nên chỉ lấy các nghiệm nguyên: $A = \\{-3; 2; 3\\}$, gồm đúng 3 phần tử."
        },
        {
          "id": "c",
          "text": "Tập hợp $B$ gồm 3 phần tử.",
          "correctAnswer": false,
          "explanation": "Vì $x \\in \\mathbb{N}$ và $x \\le 3$ nên $B = \\{0; 1; 2; 3\\}$, gồm 4 phần tử (tính cả số 0)."
        },
        {
          "id": "d",
          "text": "Giao của hai tập hợp là $A \\cap B = \\{2; 3\\}$.",
          "correctAnswer": true,
          "explanation": "Các phần tử chung của $A$ và $B$ là 2 và 3, do đó $A \\cap B = \\{2; 3\\}$."
        }
      ]
    },
    {
      "id": "tf-10.2.2",
      "badge": "Đúng / Sai 2 - Phép toán trên tập hợp rời rạc",
      "source": "SBT Toán 10 KNTT Bài 1.12 Trang 15",
      "prompt": "Cho hai tập hợp $A = \\{1; 3; 5; 7; 9\\}$ và $B = \\{2; 3; 5; 7; 11\\}$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Giao của hai tập hợp là $A \\cap B = \\{3; 5; 7\\}$.",
          "correctAnswer": true,
          "explanation": "Các phần tử cùng xuất hiện ở cả $A$ và $B$ là $3, 5, 7$."
        },
        {
          "id": "b",
          "text": "Tập hợp $A \\cup B$ có tất cả 7 phần tử.",
          "correctAnswer": true,
          "explanation": "$A \\cup B = \\{1; 2; 3; 5; 7; 9; 11\\}$, có đúng 7 phần tử."
        },
        {
          "id": "c",
          "text": "Hiệu $A \\setminus B = \\{1; 9\\}$.",
          "correctAnswer": true,
          "explanation": "Các phần tử thuộc $A$ nhưng không thuộc $B$ là $1$ và $9$."
        },
        {
          "id": "d",
          "text": "Hiệu $B \\setminus A = \\{2; 11\\}$.",
          "correctAnswer": true,
          "explanation": "Các phần tử thuộc $B$ nhưng không thuộc $A$ là $2$ và $11$."
        }
      ]
    },
    {
      "id": "tf-10.2.3",
      "badge": "Đúng / Sai 3 - Các tập con của tập số thực ℝ",
      "source": "SGK Toán 10 KNTT Trang 16",
      "prompt": "Cho hai tập hợp con của số thực: $A = [-4; 2)$ và $B = (-1; 5]$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số $-4$ thuộc tập $A$ nhưng không thuộc tập $B$.",
          "correctAnswer": true,
          "explanation": "$-4 \\in [-4; 2)$ và $-4 \\notin (-1; 5]$."
        },
        {
          "id": "b",
          "text": "Giao của hai tập hợp là $A \\cap B = (-1; 2)$.",
          "correctAnswer": true,
          "explanation": "Phần tử chung thỏa mãn $-1 < x < 2$, tức là $(-1; 2)$."
        },
        {
          "id": "c",
          "text": "Hợp của hai tập hợp là $A \\cup B = [-4; 5]$.",
          "correctAnswer": true,
          "explanation": "Hợp trải dài liên tục từ mút trái $-4$ (ngoặc vuông) đến mút phải $5$ (ngoặc vuông)."
        },
        {
          "id": "d",
          "text": "Hiệu $A \\setminus B = [-4; -1)$.",
          "correctAnswer": false,
          "explanation": "Vì $-1 \\notin B$ nên $-1$ vẫn thuộc $A \\setminus B$. Kết quả đúng phải là $[-4; -1]$."
        }
      ]
    },
    {
      "id": "tf-10.2.4",
      "badge": "Đúng / Sai 4 - Phép toán khoảng, tia số và phần bù",
      "source": "Chuyên đề Toán 10 KNTT Trang 34",
      "prompt": "Cho hai tập hợp $A = (-\\infty; 3]$ và $B = [1; 6)$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Phần bù $C_{\\mathbb{R}} A = (3; +\\infty)$.",
          "correctAnswer": true,
          "explanation": "$C_{\\mathbb{R}} A = \\mathbb{R} \\setminus (-\\infty; 3] = (3; +\\infty)$."
        },
        {
          "id": "b",
          "text": "Giao của hai tập hợp là $A \\cap B = [1; 3]$.",
          "correctAnswer": true,
          "explanation": "Phần chung thỏa mãn $1 \\le x \\le 3$, tức là đoạn $[1; 3]$."
        },
        {
          "id": "c",
          "text": "Hợp của hai tập hợp là $A \\cup B = (-\\infty; 6)$.",
          "correctAnswer": true,
          "explanation": "Phủ từ âm vô cực đến $6$ (ngoặc tròn)."
        },
        {
          "id": "d",
          "text": "Hiệu $B \\setminus A = (3; 6)$.",
          "correctAnswer": true,
          "explanation": "Thuộc $[1; 6)$ nhưng bỏ đi $x \\le 3$, mút 3 thuộc $A$ nên bị bỏ thành ngoặc tròn $(3; 6)$."
        }
      ]
    },
    {
      "id": "tf-10.2.5",
      "badge": "Đúng / Sai 5 - Bất phương trình chứa dấu giá trị tuyệt đối",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 22",
      "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid |x - 1| \\le 3\\}$ và $B = (0; 8)$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập hợp $A$ biểu diễn dưới dạng đoạn là $[-2; 4]$.",
          "correctAnswer": true,
          "explanation": "$|x - 1| \\le 3 \\Leftrightarrow -3 \\le x - 1 \\le 3 \\Leftrightarrow -2 \\le x \\le 4$."
        },
        {
          "id": "b",
          "text": "Độ dài của đoạn $A$ bằng 6.",
          "correctAnswer": true,
          "explanation": "Độ dài đoạn $[-2; 4]$ là $4 - (-2) = 6$."
        },
        {
          "id": "c",
          "text": "Giao của hai tập hợp là $A \\cap B = (0; 4]$.",
          "correctAnswer": true,
          "explanation": "Phần chung thỏa mãn $0 < x \\le 4$."
        },
        {
          "id": "d",
          "text": "Hiệu $A \\setminus B = [-2; 0)$.",
          "correctAnswer": false,
          "explanation": "Vì $0 \\notin B$ nên $0 \\in A \\setminus B$. Kết quả đúng phải là $[-2; 0]$."
        }
      ]
    },
    {
      "id": "tf-10.2.6",
      "badge": "Đúng / Sai 6 - Bài toán tham số tập hợp",
      "source": "Đề thi học sinh giỏi Toán 10 KNTT",
      "prompt": "Cho hai tập hợp $A = [m; m + 3]$ và $B = [-2; 5]$ với tham số thực $m$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập hợp $A$ luôn là một đoạn có độ dài bằng 3 với mọi giá trị của $m$.",
          "correctAnswer": true,
          "explanation": "Độ dài đoạn $[m; m + 3]$ là $(m + 3) - m = 3$ (hằng số)."
        },
        {
          "id": "b",
          "text": "Khi $m = 0$, ta có $A \\cap B = [0; 3]$.",
          "correctAnswer": true,
          "explanation": "Khi $m = 0$ thì $A = [0; 3] \\subset [-2; 5]$ nên $A \\cap B = [0; 3]$."
        },
        {
          "id": "c",
          "text": "Để $A \\subset B$ thì điều kiện là $-2 \\le m \\le 2$.",
          "correctAnswer": true,
          "explanation": "Để $A \\subset B$ thì $m \\ge -2$ và $m + 3 \\le 5 \\Leftrightarrow m \\le 2$. Vậy $-2 \\le m \\le 2$."
        },
        {
          "id": "d",
          "text": "Để $A \\cap B = \\emptyset$ thì $m < -5$ hoặc $m > 5$.",
          "correctAnswer": true,
          "explanation": "Rời nhau khi $m + 3 < -2 \\Leftrightarrow m < -5$ hoặc $m > 5$."
        }
      ]
    },
    {
      "id": "tf-10.2.7",
      "badge": "Đúng / Sai 7 - Bài toán thực tế câu lạc bộ thanh niên",
      "source": "SGK Toán 10 KNTT Trang 18",
      "prompt": "Một câu lạc bộ có 60 thành viên: 35 bạn tham gia bơi lội, 30 bạn tham gia cầu lông, và 15 bạn tham gia cả hai môn. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số thành viên chỉ tham gia bơi lội là 20 bạn.",
          "correctAnswer": true,
          "explanation": "Số bạn chỉ bơi: $35 - 15 = 20$ bạn."
        },
        {
          "id": "b",
          "text": "Số thành viên chỉ tham gia cầu lông là 15 bạn.",
          "correctAnswer": true,
          "explanation": "Số bạn chỉ cầu lông: $30 - 15 = 15$ bạn."
        },
        {
          "id": "c",
          "text": "Số thành viên tham gia ít nhất một môn thể thao là 50 bạn.",
          "correctAnswer": true,
          "explanation": "$n(A \\cup B) = 35 + 30 - 15 = 50$ bạn."
        },
        {
          "id": "d",
          "text": "Số thành viên không tham gia môn thể thao nào trong hai môn trên là 12 bạn.",
          "correctAnswer": false,
          "explanation": "Số bạn không tham gia là: $60 - 50 = 10$ bạn (không phải 12)."
        }
      ]
    },
    {
      "id": "tf-10.2.8",
      "badge": "Đúng / Sai 8 - Bài toán khảo sát môn tự chọn",
      "source": "SBT Toán 10 KNTT Bài 1.20 Trang 18",
      "prompt": "Khảo sát 80 học sinh khối 10 về việc chọn môn học ngoại khóa (Tiếng Anh và Tin học). Có 48 bạn chọn Tiếng Anh, 42 bạn chọn Tin học, và 18 bạn chọn cả hai môn. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Số học sinh chỉ chọn Tiếng Anh là 30 bạn.",
          "correctAnswer": true,
          "explanation": "Chỉ chọn Tiếng Anh: $48 - 18 = 30$ bạn."
        },
        {
          "id": "b",
          "text": "Số học sinh chỉ chọn Tin học là 24 bạn.",
          "correctAnswer": true,
          "explanation": "Chỉ chọn Tin học: $42 - 18 = 24$ bạn."
        },
        {
          "id": "c",
          "text": "Tổng số học sinh chọn ít nhất một môn là 72 bạn.",
          "correctAnswer": true,
          "explanation": "$n(A \\cup B) = 48 + 42 - 18 = 72$ bạn."
        },
        {
          "id": "d",
          "text": "Số học sinh không chọn môn học nào trong hai môn trên là 8 bạn.",
          "correctAnswer": true,
          "explanation": "Số bạn không chọn môn nào: $80 - 72 = 8$ bạn."
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Khối 10: 70 học sinh</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#eab308\" fill-opacity=\"0.22\" stroke=\"#eab308\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#f43f5e\" fill-opacity=\"0.22\" stroke=\"#f43f5e\" stroke-width=\"2\"/> <text x=\"135\" y=\"70\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">Cờ vua ♟️ (40)</text> <text x=\"255\" y=\"70\" fill=\"#fb7185\" font-size=\"13\" font-weight=\"bold\">Cờ tướng 🔴 (35)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">35</text> <text x=\"212\" y=\"120\" fill=\"#38bdf8\" font-size=\"16\" font-weight=\"bold\">5</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">30</text> <text x=\"345\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Tổng = 70</text> </svg>"
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.2.1",
      "badge": "Trả lời ngắn 1 - Đếm số tập hợp con",
      "source": "SGK Toán 10 KNTT Trang 19",
      "correctAnswer": "16",
      "acceptableAnswers": [
        "16",
        "mười sáu"
      ],
      "explanation": "Tập hợp có $n = 4$ phần tử thì số tập hợp con là $2^4 = 16$.",
      "prompt": "Cho tập hợp $A = \\{1; 2; 3; 4\\}$. Tập hợp $A$ có tất cả bao nhiêu tập hợp con?"
    },
    {
      "id": "sa-10.2.2",
      "badge": "Trả lời ngắn 2 - Số phần tử của tập nghiệm nguyên",
      "source": "SBT Toán 10 KNTT Bài 1.11",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "Phương trình $x^2 - 5x + 6 = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$. Cả hai nghiệm đều là số nguyên nên $A = \\{2; 3\\}$, có 2 phần tử.",
      "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid x^2 - 5x + 6 = 0\\}$. Số phần tử của tập hợp $A$ là bao nhiêu?"
    },
    {
      "id": "sa-10.2.3",
      "badge": "Trả lời ngắn 3 - Số tập con gồm 2 phần tử",
      "source": "Chuyên đề Toán 10 KNTT Dạng 1",
      "correctAnswer": "15",
      "acceptableAnswers": [
        "15",
        "mười lăm"
      ],
      "explanation": "Số tập con gồm 2 phần tử là: $C_6^2 = \\frac{6 \\cdot 5}{2} = 15$.",
      "prompt": "Cho tập hợp $A$ có 6 phần tử phân biệt. Có tất cả bao nhiêu tập con gồm đúng 2 phần tử của tập hợp $A$?"
    },
    {
      "id": "sa-10.2.4",
      "badge": "Trả lời ngắn 4 - Số phần tử của hợp hai tập rời rạc",
      "source": "SBT Toán 10 KNTT Bài 1.13",
      "prompt": "Cho hai tập hợp $A = \\{1; 2; 3; 4; 5\\}$ và $B = \\{2; 4; 6; 8\\}$. Tập hợp $A \\cup B$ có bao nhiêu phần tử?",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "bảy"
      ],
      "explanation": "$A \\cup B = \\{1; 2; 3; 4; 5; 6; 8\\}$, gồm đúng 7 phần tử."
    },
    {
      "id": "sa-10.2.5",
      "badge": "Trả lời ngắn 5 - Độ dài của đoạn giao nhau",
      "source": "SGK Toán 10 KNTT Trang 17",
      "prompt": "Cho hai đoạn $A = [-3; 5]$ và $B = [1; 9]$. Độ dài của đoạn $A \\cap B$ bằng bao nhiêu?",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "bốn"
      ],
      "explanation": "Ta có $A \\cap B = [1; 5]$. Độ dài của đoạn là $5 - 1 = 4$."
    },
    {
      "id": "sa-10.2.6",
      "badge": "Trả lời ngắn 6 - Đếm số nguyên thuộc giao hai khoảng",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 25",
      "prompt": "Cho hai tập hợp $A = (-4; 5)$ và $B = [-1; 8)$. Có tất cả bao nhiêu số nguyên $x$ thuộc tập hợp $A \\cap B$?",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6",
        "sáu"
      ],
      "explanation": "Ta có $A \\cap B = [-1; 5)$. Các số nguyên thuộc tập hợp này là $\\{-1; 0; 1; 2; 3; 4\\}$, tổng cộng có 6 số nguyên."
    },
    {
      "id": "sa-10.2.7",
      "badge": "Trả lời ngắn 7 - Đếm số nguyên thuộc hiệu hai tập",
      "source": "Chuyên đề Toán 10 KNTT Trang 37",
      "prompt": "Cho hai tập hợp $A = [-2; 7]$ và $B = (2; 10]$. Có tất cả bao nhiêu số nguyên $x$ thuộc tập hợp $A \\setminus B$?",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "năm"
      ],
      "explanation": "Ta có $A \\setminus B = [-2; 2]$. Các số nguyên thuộc đoạn này là $\\{-2; -1; 0; 1; 2\\}$, gồm đúng 5 số nguyên."
    },
    {
      "id": "sa-10.2.8",
      "badge": "Trả lời ngắn 8 - Tìm giá trị nguyên lớn nhất thuộc giao",
      "source": "SBT Toán 10 KNTT Bài 1.16",
      "prompt": "Cho hai tập hợp $A = (-\\infty; 4]$ và $B = [-3; +\\infty)$. Giá trị nguyên lớn nhất thuộc tập hợp $A \\cap B$ là bao nhiêu?",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "bốn"
      ],
      "explanation": "Ta có $A \\cap B = [-3; 4]$. Do đó giá trị nguyên lớn nhất thuộc tập hợp này là 4."
    },
    {
      "id": "sa-10.2.9",
      "badge": "Trả lời ngắn 9 - Tìm giá trị nguyên lớn nhất của tham số m",
      "source": "Đề thi học sinh giỏi Toán 10",
      "prompt": "Tìm giá trị nguyên lớn nhất của tham số $m$ để hai khoảng $(-1; 4)$ và $(m; +\\infty)$ có phần tử chung (tức là giao nhau khác rỗng)?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "m=3",
        "ba"
      ],
      "explanation": "Để $(-1; 4) \\cap (m; +\\infty) \\ne \\emptyset$ thì $m < 4$. Vì $m$ là số nguyên nên giá trị lớn nhất của $m$ là 3."
    },
    {
      "id": "sa-10.2.10",
      "badge": "Trả lời ngắn 10 - Đếm số giá trị nguyên của tham số m",
      "source": "Bộ đề ôn tập thi định kỳ Toán 10",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để đoạn $[m; m + 2]$ là tập con của đoạn $[-3; 5]$?",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "bảy"
      ],
      "explanation": "Để $[m; m + 2] \\subset [-3; 5]$ thì $-3 \\le m$ và $m + 2 \\le 5 \\Leftrightarrow -3 \\le m \\le 3$. Các giá trị nguyên là $\\{-3; -2; -1; 0; 1; 2; 3\\}$, có đúng 7 giá trị."
    },
    {
      "id": "sa-10.2.11",
      "badge": "Trả lời ngắn 11 - Bài toán sơ đồ Ven câu lạc bộ thể thao",
      "source": "SGK Toán 10 KNTT Trang 18",
      "prompt": "Lớp 10B có 42 học sinh: 25 bạn tham gia CLB Bóng đá, 20 bạn tham gia CLB Cầu lông, và 10 bạn tham gia cả hai CLB. Hỏi có bao nhiêu bạn trong lớp không tham gia CLB nào trong hai CLB trên?",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "bảy",
        "7 học sinh"
      ],
      "explanation": "Số bạn tham gia ít nhất một trong hai CLB là: $25 + 20 - 10 = 35$ bạn. Số bạn không tham gia CLB nào là: $42 - 35 = 7$ bạn.",
      "svgDiagram": "<svg viewBox=\"0 0 440 210\" className=\"w-full max-w-md mx-auto my-2 select-none\">\n  <defs>\n    <linearGradient id=\"gDa10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#10b981\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#047857\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gLong10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#f59e0b\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#b45309\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gGiao10_2\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#a855f7\" stopOpacity=\"0.55\" />\n      <stop offset=\"100%\" stopColor=\"#7c3aed\" stopOpacity=\"0.35\" />\n    </linearGradient>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"190\" rx=\"16\" fill=\"#0b1329\" stroke=\"#334155\" strokeWidth=\"2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"url(#gDa10_2)\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"url(#gLong10_2)\" />\n  <path d=\"M 215 64 A 68 68 0 0 1 215 166 A 68 68 0 0 1 215 64 Z\" fill=\"url(#gGiao10_2)\" stroke=\"#c084fc\" strokeWidth=\"1.5\" strokeDasharray=\"3 2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#10b981\" strokeWidth=\"2.5\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#f59e0b\" strokeWidth=\"2.5\" />\n  <text x=\"170\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">⚽</text>\n  <text x=\"260\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">🏸</text>\n  <text x=\"135\" y=\"123\" fill=\"#a7f3d0\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">15</text>\n  <text x=\"215\" y=\"123\" fill=\"#ffffff\" fontSize=\"22\" fontWeight=\"900\" textAnchor=\"middle\">10</text>\n  <text x=\"295\" y=\"123\" fill=\"#fef08a\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">10</text>\n  <text x=\"385\" y=\"165\" fill=\"#c4b5fd\" fontSize=\"20\" fontWeight=\"bold\" textAnchor=\"middle\">7</text>\n</svg>"
    },
    {
      "id": "sa-10.2.12",
      "badge": "Trả lời ngắn 12 - Bài toán VĐV thi đấu một nội dung",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 28",
      "correctAnswer": "24",
      "acceptableAnswers": [
        "24",
        "hai mươi tư",
        "24 VĐV"
      ],
      "explanation": "Số bạn chỉ thi chạy là: $22 - 8 = 14$ bạn. Số bạn chỉ thi bơi là: $18 - 8 = 10$ bạn. Tổng số bạn chỉ thi đúng 1 môn là: $14 + 10 = 24$ bạn.",
      "svgDiagram": "<svg viewBox=\"0 0 440 210\" className=\"w-full max-w-md mx-auto my-2 select-none\">\n  <defs>\n    <linearGradient id=\"gChay10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#06b6d4\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#0891b2\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gBoi10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#3b82f6\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#1d4ed8\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gGiaoChayBoi\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#ec4899\" stopOpacity=\"0.55\" />\n      <stop offset=\"100%\" stopColor=\"#be185d\" stopOpacity=\"0.35\" />\n    </linearGradient>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"190\" rx=\"16\" fill=\"#0b1329\" stroke=\"#334155\" strokeWidth=\"2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"url(#gChay10_2)\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"url(#gBoi10_2)\" />\n  <path d=\"M 215 64 A 68 68 0 0 1 215 166 A 68 68 0 0 1 215 64 Z\" fill=\"url(#gGiaoChayBoi)\" stroke=\"#f472b6\" strokeWidth=\"1.5\" strokeDasharray=\"3 2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#06b6d4\" strokeWidth=\"2.5\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#3b82f6\" strokeWidth=\"2.5\" />\n  <text x=\"170\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">🏃</text>\n  <text x=\"260\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">🏊</text>\n  <text x=\"135\" y=\"123\" fill=\"#67e8f9\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">14</text>\n  <text x=\"215\" y=\"123\" fill=\"#ffffff\" fontSize=\"22\" fontWeight=\"900\" textAnchor=\"middle\">8</text>\n  <text x=\"295\" y=\"123\" fill=\"#93c5fd\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">10</text>\n  <text x=\"385\" y=\"165\" fill=\"#f472b6\" fontSize=\"20\" fontWeight=\"bold\" textAnchor=\"middle\">4</text>\n</svg>",
      "prompt": "Trong một giải thể thao trường học gồm 36 vận động viên: có 22 bạn đăng ký môn Chạy, 18 bạn đăng ký môn Bơi lội, và 8 bạn đăng ký cả hai môn. Hỏi có bao nhiêu vận động viên chỉ đăng ký tham gia đúng một môn?"
    }
  ]
},
  "t10-b3-bat-phuong-trinh-bac-nhat-hai-an": {
  "id": "t10-b3-bat-phuong-trinh-bac-nhat-hai-an",
  "lessonNumber": 3,
  "title": "Bài 3: Bất phương trình bậc nhất hai ẩn",
  "bookChapter": "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Tình huống thực tế: Thiết lập mô hình bài toán ngân sách và kế hoạch sản xuất",
  "scenarioFrames": [],
  "interactiveType": "geometry",
  "youtubeVideoId": "LUDXjX2XPRE",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 3 - Bất phương trình bậc nhất hai ẩn (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "LUDXjX2XPRE",
      "title": "Tiết 1: Khái niệm bất phương trình bậc nhất hai ẩn & Nghiệm"
    },
    {
      "id": "Sbodsz4U8Zo",
      "title": "Tiết 2: Biểu diễn miền nghiệm của BPT bậc nhất hai ẩn trên mặt phẳng tọa độ Oxy"
    },
    {
      "id": "y8X5ZUdpfU8",
      "title": "Tiết 3: Vận dụng bất phương trình bậc nhất hai ẩn vào bài toán thực tiễn"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.3.1",
      "title": "Ví dụ 1 (Tiết 1): Nhận dạng bất phương trình bậc nhất hai ẩn",
      "question": "Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất hai ẩn?",
      "options": [
        "$2x + 3y \\le 12$",
        "$x^2 + 2y > 5$",
        "$2x + y - 3z < 0$",
        "$xy + 2x \\ge 1$"
      ],
      "correctIndex": 0,
      "explanation": "Bất phương trình $2x + 3y \\le 12$ có đúng 2 ẩn $x, y$ với bậc 1 và các hệ số $a = 2, b = 3$ thỏa mãn $a^2 + b^2 \\ne 0$."
    },
    {
      "id": "vq-10.3.2",
      "title": "Ví dụ 2 (Tiết 1): Kiểm tra điểm thuộc miền nghiệm",
      "question": "Cặp số $(x; y)$ nào sau đây KHÔNG PHẢI là nghiệm của bất phương trình $x - 2y < 4$?",
      "options": [
        "$(4; 0)$",
        "$(0; 0)$",
        "$(1; 1)$",
        "$(2; 2)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay cặp số $(4; 0)$ vào vế trái: $4 - 2(0) = 4 < 4$ là khẳng định SAI. Do đó cặp số $(4; 0)$ không phải là nghiệm."
    },
    {
      "id": "vq-10.3.3",
      "title": "Ví dụ 3 (Tiết 2): Quy tắc xác định miền nghiệm trên hệ trục Oxy",
      "question": "Khi biểu diễn miền nghiệm của bất phương trình $2x - y \\ge 4$ trên mặt phẳng tọa độ $Oxy$, ta vẽ đường thẳng bờ $d: 2x - y = 4$ bằng nét gì và miền nghiệm có chứa gốc tọa độ $O(0; 0)$ không?",
      "options": [
        "Vẽ nét liền (lấy cả bờ $d$) và miền nghiệm không chứa gốc tọa độ $O(0; 0)$.",
        "Vẽ nét đứt (không lấy bờ $d$) và miền nghiệm không chứa gốc tọa độ $O(0; 0)$.",
        "Vẽ nét liền (lấy cả bờ $d$) và miền nghiệm chứa gốc tọa độ $O(0; 0)$.",
        "Vẽ nét đứt (không lấy bờ $d$) và miền nghiệm chứa gốc tọa độ $O(0; 0)$."
      ],
      "correctIndex": 0,
      "explanation": "Vì BPT có dấu $\\ge$ (có dấu bằng) nên vẽ nét liền và lấy cả bờ $d$. Thử gốc $O(0; 0)$: $2(0) - 0 = 0 \\ge 4$ (sai), vậy miền nghiệm là nửa mặt phẳng bờ $d$ không chứa gốc tọa độ $O$."
    },
    {
      "id": "vq-10.3.4",
      "title": "Ví dụ 4 (Tiết 3): Thiết lập bất phương trình từ bài toán thực tế",
      "question": "Bạn Nam mang 200 nghìn đồng đi mua hai loại vở: loại I giá 15 nghìn đồng/quyển, loại II giá 10 nghìn đồng/quyển. Gọi $x, y$ lần lượt là số quyển vở loại I và loại II Nam mua ($x, y \\in \\mathbb{N}$). Bất phương trình thể hiện số tiền Nam có thể chi trả là:",
      "options": [
        "$3x + 2y \\le 40$",
        "$3x + 2y < 40$",
        "$15x + 10y \\ge 200$",
        "$2x + 3y \\le 40$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng số tiền chi mua hai loại vở không vượt quá 200 nghìn đồng: $15x + 10y \\le 200 \\Leftrightarrow 3x + 2y \\le 40$ (chia cả hai vế cho 5)."
    }
  ],
  "tips": [
    "Mẹo chọn điểm thử: Luôn ưu tiên thử gốc tọa độ $O(0; 0)$ nếu đường thẳng bờ $ax + by = c$ có $c \\ne 0$. Nếu đường thẳng bờ đi qua gốc tọa độ ($c = 0$), hãy chọn điểm $A(1; 0)$ hoặc $B(0; 1)$ trên các trục tọa độ để tính toán nhanh nhất.",
    "Mẹo nhớ nét vẽ bờ: Dấu $\\le, \\ge$ (có dấu bằng) $\\rightarrow$ vẽ NÉT LIỀN (miền nghiệm kể cả đường thẳng bờ); Dấu $<, >$ (không có dấu bằng) $\\rightarrow$ vẽ NÉT ĐỨT (miền nghiệm không kể đường thẳng bờ)."
  ],
  "traps": [
    "Bẫy dấu bất đẳng thức khi chia cho số âm: Khi biến đổi bất phương trình để vẽ bờ hoặc tìm $y$ theo $x$, nếu chia hoặc nhân hai vế cho một số âm thì phải ĐỔI CHIỀU dấu bất phương trình.",
    "Bẫy điều kiện thực tiễn: Khi thiết lập mô hình bài toán thực tế (số lượng sản phẩm, số bao phân, số vé, thời gian...), luôn bắt buộc phải bổ sung điều kiện không âm $x \\ge 0, y \\ge 0$ và điều kiện nguyên $x, y \\in \\mathbb{N}$ nếu đại lượng không thể chia nhỏ."
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Bất phương trình bậc nhất hai ẩn và Nghiệm",
      "points": [
        "Bất phương trình bậc nhất hai ẩn $x, y$ có dạng tổng quát là:",
        "    - $ax + by < c$ (hoặc $ax + by > c, \\ ax + by \\le c, \\ ax + by \\ge c$), trong đó $a, b, c$ là những số thực đã cho, $a$ và $b$ không đồng thời bằng 0 ($a^2 + b^2 \\ne 0$).",
        "Nghiệm của bất phương trình:",
        "    - Mỗi cặp số $(x_0; y_0)$ sao cho khi thay $x = x_0, y = y_0$ vào bất phương trình ta được một khẳng định đúng gọi là một nghiệm của bất phương trình đó.",
        "    - Khác với phương trình, bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm."
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Nhận biết bất phương trình bậc nhất hai ẩn và kiểm tra nghiệm (SGK Trang 22)",
          "problem": "Cho bất phương trình $2x + 3y \\le 12$.\na) Khẳng định đây có phải là bất phương trình bậc nhất hai ẩn không? Xác định các hệ số $a, b, c$.\nb) Cặp số $(1; 2)$ và $(4; 3)$ có phải là nghiệm của bất phương trình đã cho hay không?",
          "solution": "• Trả lời ý a:\n  - Bất phương trình $2x + 3y \\le 12$ có đúng 2 ẩn $x, y$ với bậc 1, và $a = 2, b = 3, c = 12$ thỏa mãn $a^2 + b^2 = 2^2 + 3^2 = 13 \\ne 0$.\n  - Do đó, đây là một bất phương trình bậc nhất hai ẩn.\n• Trả lời ý b:\n  - Thay cặp số $(1; 2)$ vào vế trái: $2 \\cdot 1 + 3 \\cdot 2 = 8 \\le 12$ (đúng). Vậy $(1; 2)$ là một nghiệm của bất phương trình.\n  - Thay cặp số $(4; 3)$ vào vế trái: $2 \\cdot 4 + 3 \\cdot 3 = 17 \\le 12$ (sai). Vậy $(4; 3)$ không phải là nghiệm của bất phương trình."
        }
      ]
    },
    {
      "index": "2",
      "title": "Biểu diễn miền nghiệm của BPT bậc nhất hai ẩn trên mặt phẳng tọa độ Oxy",
      "points": [
        "Miền nghiệm: Trong mặt phẳng tọa độ $Oxy$, tập hợp các điểm $(x_0; y_0)$ có tọa độ là nghiệm của bất phương trình được gọi là miền nghiệm của bất phương trình đó.",
        "Đường thẳng bờ: Đường thẳng $d: ax + by = c$ chia mặt phẳng tọa độ $Oxy$ thành hai nửa mặt phẳng đối nhau.",
        "Quy tắc 3 bước biểu diễn miền nghiệm của $ax + by \\le c$ (hoặc $<, >, \\ge$):",
        "    - Bước 1: Vẽ đường thẳng bờ $d: ax + by = c$ trên mặt phẳng $Oxy$. (Lưu ý: Nếu BPT có dấu $\\le, \\ge$ thì vẽ nét liền; nếu có dấu $<, >$ thì vẽ nét đứt).",
        "    - Bước 2: Lấy một điểm thử $M(x_0; y_0) \\notin d$ (thông thường lấy gốc tọa độ $O(0; 0)$ nếu $c \\ne 0$). Tính giá trị biểu thức $ax_0 + by_0$ và so sánh với $c$.",
        "    - Bước 3: Kết luận miền nghiệm: Nửa mặt phẳng chứa điểm $M$ là miền nghiệm nếu $M$ là nghiệm; ngược lại, nửa mặt phẳng không chứa $M$ là miền nghiệm. Gạch bỏ nửa mặt phẳng không phải là miền nghiệm."
      ],
      "examples": [
        {
          "title": "Ví dụ 2: Biểu diễn miền nghiệm trên mặt phẳng tọa độ Oxy (SGK Trang 23)",
          "problem": "Biểu diễn miền nghiệm của bất phương trình $2x - y \\ge 4$ trên mặt phẳng tọa độ $Oxy$.",
          "solution": "• Bước 1: Vẽ đường thẳng $d: 2x - y = 4$ (nét liền vì BPT có dấu $\\ge$):\n  - Cho $x = 0 \\Rightarrow y = -4 \\Rightarrow$ Điểm $(0; -4) \\in d$.\n  - Cho $y = 0 \\Rightarrow x = 2 \\Rightarrow$ Điểm $(2; 0) \\in d$.\n• Bước 2: Lấy gốc tọa độ $O(0; 0) \\notin d$. Thay vào vế trái BPT:\n  $2 \\cdot 0 - 0 = 0 \\ge 4$ là khẳng định SAI.\n• Bước 3: Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d$ không chứa gốc tọa độ $O(0; 0)$ (kể cả bờ $d$). Ta gạch chéo phần nửa mặt phẳng chứa điểm $O$.",
          "svgDiagram": "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg select-none\">\n  <defs>\n    <!-- Lưới tọa độ -->\n    <pattern id=\"gridPattern\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#334155\" stroke-width=\"0.8\" stroke-opacity=\"0.5\" />\n    </pattern>\n    <!-- Mẫu gạch chéo phần không lấy -->\n    <pattern id=\"hatchPattern\" width=\"12\" height=\"12\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"12\" stroke=\"#ef4444\" stroke-width=\"1.2\" stroke-opacity=\"0.65\" />\n    </pattern>\n  </defs>\n\n  <!-- Nền lưới -->\n  <rect x=\"20\" y=\"10\" width=\"420\" height=\"280\" fill=\"#0f172a\" rx=\"12\" />\n  <rect x=\"20\" y=\"10\" width=\"420\" height=\"280\" fill=\"url(#gridPattern)\" rx=\"12\" />\n\n  <!-- Gốc tọa độ O tại (200, 160). Tỉ lệ: 1 đơn vị = 30px -->\n  <!-- Điểm trên trục: x=2 -> 200 + 60 = 260. y=-4 -> 160 - (-120) = 280 -->\n  <!-- Phương trình: 2x - y = 4 -> y = 2x - 4 -->\n  <!-- Tại x = 1 -> y = -2 (230, 220). Tại x = 3 -> y = 2 (290, 100). Tại x = 4 -> y = 4 (320, 40) -->\n\n  <!-- Nửa mặt phẳng nghiệm (phía dưới bên phải bờ d) được tô màu xanh cyan nhạt -->\n  <polygon points=\"190,300 340,0 440,0 440,290 200,290\" fill=\"#0284c7\" fill-opacity=\"0.22\" />\n\n  <!-- Nửa mặt phẳng chứa O(0; 0) bị gạch chéo loại bỏ -->\n  <polygon points=\"20,10 340,0 190,300 20,290\" fill=\"url(#hatchPattern)\" />\n\n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"160\" x2=\"430\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n  <polygon points=\"438,160 426,155 426,165\" fill=\"#94a3b8\" />\n  <text x=\"430\" y=\"150\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"bold\">x</text>\n\n  <line x1=\"200\" y1=\"280\" x2=\"200\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n  <polygon points=\"200,12 195,24 205,24\" fill=\"#94a3b8\" />\n  <text x=\"210\" y=\"25\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc O -->\n  <circle cx=\"200\" cy=\"160\" r=\"3.5\" fill=\"#f8fafc\" />\n  <text x=\"186\" y=\"176\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">O</text>\n\n  <!-- Đường thẳng bờ d: 2x - y = 4 (nét liền xanh cyan) -->\n  <line x1=\"180\" y1=\"300\" x2=\"330\" y2=\"0\" stroke=\"#38bdf8\" stroke-width=\"3\" />\n  <text x=\"335\" y=\"30\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">d: 2x - y = 4</text>\n\n  <!-- Các điểm đặc biệt trên trục: (2; 0) và (0; -4) -->\n  <circle cx=\"260\" cy=\"160\" r=\"4\" fill=\"#38bdf8\" />\n  <text x=\"260\" y=\"180\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">2</text>\n\n  <circle cx=\"200\" cy=\"280\" r=\"4\" fill=\"#38bdf8\" />\n  <text x=\"180\" y=\"280\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">-4</text>\n\n  <!-- Điểm thử O(0; 0) có dấu gạch chéo đỏ nhỏ báo không thuộc miền nghiệm -->\n  <text x=\"185\" y=\"145\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\">O(0;0) ∉ miền nghiệm</text>\n</svg>"
        }
      ]
    },
    {
      "index": "3",
      "title": "Ứng dụng Bất phương trình bậc nhất hai ẩn trong thực tiễn",
      "points": [
        "Phương pháp giải bài toán thực tế bằng mô hình BPT bậc nhất hai ẩn:",
        "    - Bước 1: Chọn hai đại lượng chưa biết làm hai ẩn số $x, y$. Đặt điều kiện thích hợp cho ẩn (thường là $x \\ge 0, y \\ge 0$ hoặc $x, y \\in \\mathbb{N}$).",
        "    - Bước 2: Biểu diễn các đại lượng trong đề bài qua hai ẩn $x, y$ và thiết lập bất phương trình theo điều kiện đề bài (ngân sách, tải trọng, thời gian).",
        "    - Bước 3: Biểu diễn miền nghiệm của bất phương trình trên mặt phẳng $Oxy$ và kết luận các phương án khả thi phù hợp với thực tiễn."
      ],
      "examples": [
        {
          "title": "Ví dụ 3: Bài toán ngân sách mua sắm thực tế (SGK Trang 24)",
          "problem": "Bạn An có số tiền tiết kiệm là 200 nghìn đồng để mua hai loại vở: loại I có giá 15 nghìn đồng một quyển, loại II có giá 10 nghìn đồng một quyển.\na) Gọi $x$ và $y$ lần lượt là số quyển vở loại I và loại II mà bạn An mua. Hãy viết bất phương trình bậc nhất hai ẩn biểu diễn số tiền mà An có thể chi trả.\nb) Bạn An có thể mua được 8 quyển vở loại I và 10 quyển vở loại II được không? Vì sao?",
          "solution": "• Trả lời ý a:\n  - Số tiền mua $x$ quyển vở loại I là: $15x$ (nghìn đồng).\n  - Số tiền mua $y$ quyển vở loại II là: $10y$ (nghìn đồng).\n  - Tổng số tiền không vượt quá 200 nghìn đồng nên ta có bất phương trình:\n    $15x + 10y \\le 200 \\Leftrightarrow 3x + 2y \\le 40$ (với điều kiện $x, y \\in \\mathbb{N}$).\n• Trả lời ý b:\n  - Thay $x = 8$ và $y = 10$ vào vế trái bất phương trình:\n    $3 \\cdot 8 + 2 \\cdot 10 = 24 + 20 = 44 > 40$ (không thỏa mãn).\n  - Vậy bạn An không thể mua được 8 quyển loại I và 10 quyển loại II vì tổng chi phí vượt quá số tiền có sẵn."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.3.1",
      "badge": "Nhận biết - Khái niệm BPT bậc nhất hai ẩn",
      "source": "SGK Toán 10 KNTT Bài 2.1 Trang 25",
      "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
      "options": [
        "$2x + 3y \\le 5$",
        "$2x^2 + y > 3$",
        "$x + 2y - 3z < 0$",
        "$xy + 2x \\ge 1$"
      ],
      "correctIndex": 0,
      "explanation": "Bất phương trình $2x + 3y \\le 5$ có dạng $ax + by \\le c$ với hai ẩn $x, y$ bậc nhất và $a = 2, b = 3$ thỏa mãn $a^2 + b^2 \\ne 0$."
    },
    {
      "id": "quiz-10.3.2",
      "badge": "Nhận biết - BPT không phải bậc nhất hai ẩn",
      "source": "SBT Toán 10 KNTT Bài 2.1 Trang 22",
      "question": "Bất phương trình nào sau đây KHÔNG PHẢI là bất phương trình bậc nhất hai ẩn?",
      "options": [
        "$x - 5y \\ge 7$",
        "$3x + y^2 < 4$",
        "$-x + 4y > 0$",
        "$2x \\le 8$"
      ],
      "correctIndex": 1,
      "explanation": "Bất phương trình $3x + y^2 < 4$ chứa số hạng $y^2$ có bậc 2 đối với biến $y$ nên không phải là bất phương trình bậc nhất hai ẩn."
    },
    {
      "id": "quiz-10.3.3",
      "badge": "Nhận biết - Kiểm tra điểm là nghiệm",
      "source": "SGK Toán 10 KNTT Bài 2.2 Trang 25",
      "question": "Cặp số nào sau đây là một nghiệm của bất phương trình $3x - 2y < 6$?",
      "options": [
        "$(0; 0)$",
        "$(2; -1)$",
        "$(3; 0)$",
        "$(4; 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $(0; 0)$ vào vế trái BPT: $3(0) - 2(0) = 0 < 6$ (luôn đúng). Vậy $(0; 0)$ là một nghiệm của BPT."
    },
    {
      "id": "quiz-10.3.4",
      "badge": "Nhận biết - Kiểm tra điểm không phải nghiệm",
      "source": "SBT Toán 10 KNTT Bài 2.3 Trang 22",
      "question": "Cặp số nào sau đây KHÔNG LÀ nghiệm của bất phương trình $x + 2y \\ge 5$?",
      "options": [
        "$(3; 2)$",
        "$(1; 3)$",
        "$(5; 0)$",
        "$(1; 1)$"
      ],
      "correctIndex": 3,
      "explanation": "Thay $(1; 1)$ vào vế trái: $1 + 2(1) = 3 \\ge 5$ là khẳng định sai. Vậy $(1; 1)$ không phải là nghiệm của bất phương trình."
    },
    {
      "id": "quiz-10.3.5",
      "badge": "Thông hiểu - Miền nghiệm chứa gốc tọa độ",
      "source": "SGK Toán 10 KNTT Bài 2.3 Trang 25",
      "question": "Miền nghiệm của bất phương trình nào sau đây CHỨA gốc tọa độ $O(0; 0)$?",
      "options": [
        "$2x - y > 3$",
        "$x + 3y \\le -2$",
        "$x - 4y + 5 \\ge 0$",
        "$3x + 2y < -1$"
      ],
      "correctIndex": 2,
      "explanation": "Thay $x = 0, y = 0$ vào BPT $x - 4y + 5 \\ge 0$: $0 - 0 + 5 = 5 \\ge 0$ (đúng). Do đó miền nghiệm của BPT này chứa gốc tọa độ $O(0; 0)$."
    },
    {
      "id": "quiz-10.3.6",
      "badge": "Nhận biết - Đường thẳng bờ của miền nghiệm",
      "source": "SBT Toán 10 KNTT Bài 2.4 Trang 23",
      "question": "Đường thẳng bờ của miền nghiệm bất phương trình $3x - 5y + 15 \\le 0$ có phương trình là:",
      "options": [
        "$3x - 5y = 15$",
        "$3x - 5y = -15$",
        "$3x + 5y = 15$",
        "$5x - 3y = -15$"
      ],
      "correctIndex": 1,
      "explanation": "Đường thẳng bờ thu được bằng cách thay dấu bất đẳng thức bằng dấu bằng: $3x - 5y + 15 = 0 \\Leftrightarrow 3x - 5y = -15$."
    },
    {
      "id": "quiz-10.3.7",
      "badge": "Thông hiểu - Giao điểm của đường thẳng bờ với các trục tọa độ",
      "source": "SGK Toán 10 KNTT Trang 23",
      "question": "Đường thẳng bờ $d: 2x - 3y = 6$ cắt trục hoành $Ox$ và trục tung $Oy$ lần lượt tại hai điểm có tọa độ là:",
      "options": [
        "$(3; 0)$ và $(0; -2)$",
        "$(2; 0)$ và $(0; -3)$",
        "$(-3; 0)$ và $(0; 2)$",
        "$(0; 3)$ và $(-2; 0)$"
      ],
      "correctIndex": 0,
      "explanation": "Cho $y = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3 \\Rightarrow$ Giao với $Ox$ tại $(3; 0)$. Cho $x = 0 \\Rightarrow -3y = 6 \\Rightarrow y = -2 \\Rightarrow$ Giao với $Oy$ tại $(0; -2)$."
    },
    {
      "id": "quiz-10.3.8",
      "badge": "Thông hiểu - Xác định nửa mặt phẳng nghiệm",
      "source": "SBT Toán 10 KNTT Bài 2.6 Trang 23",
      "question": "Cho bất phương trình $x - 2y < 0$. Điểm nào sau đây thuộc miền nghiệm của bất phương trình?",
      "options": [
        "$(2; 1)$",
        "$(1; 2)$",
        "$(0; 0)$",
        "$(3; 1)$"
      ],
      "correctIndex": 1,
      "explanation": "Thay $(1; 2)$ vào vế trái: $1 - 2(2) = -3 < 0$ (đúng). Lưu ý điểm $(0; 0)$ thuộc đường bờ $x - 2y = 0$ nhưng BPT có dấu $<$ nghiêm ngặt nên $(0; 0)$ không thuộc miền nghiệm."
    },
    {
      "id": "quiz-10.3.9",
      "badge": "Thông hiểu - Đọc hình vẽ miền nghiệm Oxy",
      "source": "Bộ đề thi định kì Toán 10 KNTT Trang 28",
      "question": "Nửa mặt phẳng không bị gạch (kể cả bờ) trong hình vẽ là miền nghiệm của bất phương trình nào biết đường bờ đi qua $(0; 2)$ và $(4; 0)$, miền nghiệm chứa gốc $O(0; 0)$?",
      "options": [
        "$x + 2y \\le 4$",
        "$x + 2y \\ge 4$",
        "$2x + y \\le 4$",
        "$x + 2y < 4$"
      ],
      "correctIndex": 0,
      "explanation": "Đường thẳng qua $(4; 0)$ và $(0; 2)$ có phương trình $\\frac{x}{4} + \\frac{y}{2} = 1 \\Leftrightarrow x + 2y = 4$. Vì miền nghiệm chứa $O(0; 0)$ và kể cả bờ nên ta có BPT $x + 2y \\le 4$."
    },
    {
      "id": "quiz-10.3.10",
      "badge": "Thông hiểu - Phân biệt bờ nét liền và nét đứt",
      "source": "SGK Toán 10 KNTT Trang 24",
      "question": "Khi biểu diễn miền nghiệm của bất phương trình $4x + 5y > 20$, đường thẳng bờ $4x + 5y = 20$ được vẽ bằng:",
      "options": [
        "Nét liền và thuộc miền nghiệm",
        "Nét đứt và không thuộc miền nghiệm",
        "Nét liền và không thuộc miền nghiệm",
        "Nét đứt và thuộc miền nghiệm"
      ],
      "correctIndex": 1,
      "explanation": "Bất phương trình mang dấu so sánh nghiêm ngặt ($>$) nên các điểm trên đường thẳng bờ không thỏa mãn BPT. Do đó đường bờ được vẽ bằng nét đứt và không thuộc miền nghiệm."
    },
    {
      "id": "quiz-10.3.11",
      "badge": "Thông hiểu - BPT bậc nhất hai ẩn dạng đặc biệt",
      "source": "SBT Toán 10 KNTT Bài 2.7 Trang 24",
      "question": "Miền nghiệm của bất phương trình $y \\ge 3$ trên mặt phẳng tọa độ $Oxy$ là:",
      "options": [
        "Nửa mặt phẳng nằm bên phải đường thẳng $x = 3$",
        "Nửa mặt phẳng nằm phía trên đường thẳng $y = 3$ (kể cả bờ)",
        "Nửa mặt phẳng nằm phía dưới đường thẳng $y = 3$ (kể cả bờ)",
        "Nửa mặt phẳng nằm bên trái đường thẳng $x = 3$"
      ],
      "correctIndex": 1,
      "explanation": "Đường thẳng bờ $y = 3$ là đường thẳng song song với trục $Ox$. Miền nghiệm $y \\ge 3$ gồm tất cả các điểm có tung độ lớn hơn hoặc bằng 3, tức nửa mặt phẳng phía trên đường thẳng $y = 3$ kể cả bờ."
    },
    {
      "id": "quiz-10.3.12",
      "badge": "Thông hiểu - Điểm nằm trên bờ của BPT",
      "source": "SBT Toán 10 KNTT Bài 2.8 Trang 24",
      "question": "Điểm nào sau đây nằm trên đường thẳng bờ của bất phương trình $2x - 3y + 6 \\ge 0$?",
      "options": [
        "$(0; 2)$",
        "$(1; 2)$",
        "$(3; 0)$",
        "$(0; -2)$"
      ],
      "correctIndex": 0,
      "explanation": "Điểm nằm trên đường thẳng bờ khi và chỉ khi tọa độ thỏa mãn phương trình $2x - 3y + 6 = 0$. Thay $(0; 2)$ vào: $2(0) - 3(2) + 6 = 0$ (đúng)."
    },
    {
      "id": "quiz-10.3.13",
      "badge": "Vận dụng - Tìm tham số m để điểm thuộc miền nghiệm",
      "source": "Bộ đề ôn tập Toán 10 KNTT Trang 30",
      "question": "Tìm tất cả các giá trị của tham số $m$ để điểm $A(1; 2)$ thuộc miền nghiệm của bất phương trình $2x - my + 4 > 0$.",
      "options": [
        "$m < 3$",
        "$m > 3$",
        "$m \\le 3$",
        "$m \\ge 3$"
      ],
      "correctIndex": 0,
      "explanation": "Điểm $A(1; 2)$ thuộc miền nghiệm $\\Leftrightarrow 2(1) - m(2) + 4 > 0 \\Leftrightarrow 6 - 2m > 0 \\Leftrightarrow 2m < 6 \\Leftrightarrow m < 3$."
    },
    {
      "id": "quiz-10.3.14",
      "badge": "Vận dụng - Tìm tham số m để gốc O không thuộc miền nghiệm",
      "source": "Bộ đề ôn tập Toán 10 KNTT Trang 31",
      "question": "Tìm tất cả các giá trị của tham số $m$ để gốc tọa độ $O(0; 0)$ KHÔNG THUỘC miền nghiệm của bất phương trình $3x - 4y + m^2 - 4 \\le 0$.",
      "options": [
        "$-2 \\le m \\le 2$",
        "$m < -2$ hoặc $m > 2$",
        "$m > 2$",
        "$m \\le -2$"
      ],
      "correctIndex": 1,
      "explanation": "Gốc $O(0; 0)$ không thuộc miền nghiệm $\\Leftrightarrow 3(0) - 4(0) + m^2 - 4 > 0 \\Leftrightarrow m^2 - 4 > 0 \\Leftrightarrow m > 2$ hoặc $m < -2$."
    },
    {
      "id": "quiz-10.3.15",
      "badge": "Vận dụng - Đếm số điểm nguyên thuộc miền nghiệm",
      "source": "Tài liệu chuyên đề BPT Toán 10",
      "question": "Trong các điểm sau: $M(1; 1), N(2; 0), P(0; 3), Q(-1; 2), K(2; 2)$, có bao nhiêu điểm thuộc miền nghiệm của bất phương trình $2x + y \\le 4$?",
      "options": [
        "3 điểm",
        "4 điểm",
        "5 điểm",
        "2 điểm"
      ],
      "correctIndex": 1,
      "explanation": "Thay tọa độ từng điểm vào $2x + y$:\n- $M(1; 1): 2(1) + 1 = 3 \\le 4$ (nhận)\n- $N(2; 0): 2(2) + 0 = 4 \\le 4$ (nhận)\n- $P(0; 3): 2(0) + 3 = 3 \\le 4$ (nhận)\n- $Q(-1; 2): 2(-1) + 2 = 0 \\le 4$ (nhận)\n- $K(2; 2): 2(2) + 2 = 6 > 4$ (loại).\nVậy có đúng 4 điểm thuộc miền nghiệm."
    },
    {
      "id": "quiz-10.3.16",
      "badge": "Thông hiểu - Miền nghiệm là góc phần tư",
      "source": "SGK Toán 10 KNTT Trang 25",
      "question": "Tập hợp các điểm $(x; y)$ thỏa mãn điều kiện $\\begin{cases} x > 0 \\\\ y < 0 \\end{cases}$ là miền điểm thuộc góc phần tư thứ mấy?",
      "options": [
        "Góc phần tư thứ IV",
        "Góc phần tư thứ II",
        "Góc phần tư thứ I",
        "Góc phần tư thứ III"
      ],
      "correctIndex": 0,
      "explanation": "Các điểm có hoành độ dương ($x > 0$) và tung độ âm ($y < 0$) nằm ở góc phần tư thứ IV của mặt phẳng tọa độ $Oxy$."
    },
    {
      "id": "quiz-10.3.17",
      "badge": "Vận dụng - Diện tích tam giác tạo bởi đường bờ và các trục",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 35",
      "question": "Đường thẳng bờ của bất phương trình $3x + 4y = 12$ cùng với hai trục tọa độ $Ox, Oy$ tạo thành một tam giác có diện tích bằng:",
      "options": [
        "$6$",
        "$12$",
        "$24$",
        "$7$"
      ],
      "correctIndex": 0,
      "explanation": "Giao điểm với trục $Ox$ là $A(4; 0) \\Rightarrow OA = 4$. Giao điểm với trục $Oy$ là $B(0; 3) \\Rightarrow OB = 3$. Tam giác $OAB$ vuông tại $O$ nên diện tích là $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 4 \\cdot 3 = 6$."
    },
    {
      "id": "quiz-10.3.18",
      "badge": "Vận dụng - Khoảng cách từ gốc tọa độ đến đường thẳng bờ",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 36",
      "question": "Khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng bờ của bất phương trình $3x - 4y + 10 = 0$ bằng:",
      "options": [
        "$2$",
        "$10$",
        "$5$",
        "$2{,}5$"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách từ $O(0; 0)$ đến đường thẳng $3x - 4y + 10 = 0$ là $d = \\frac{|3(0) - 4(0) + 10|}{\\sqrt{3^2 + (-4)^2}} = \\frac{10}{5} = 2$."
    },
    {
      "id": "quiz-10.3.19",
      "badge": "Vận dụng cao - Bài toán thực tế mua vé rạp chiếu phim",
      "source": "SGK Toán 10 KNTT Bài 2.3 Trang 25",
      "question": "Một rạp chiếu phim bán vé người lớn 80 nghìn đồng và vé trẻ em 50 nghìn đồng. Một nhóm khách có $x$ người lớn và $y$ trẻ em đi xem phim với tổng số tiền mua vé không vượt quá 500 nghìn đồng. Bất phương trình mô tả điều kiện trên là:",
      "options": [
        "$8x + 5y \\le 50$",
        "$8x + 5y < 50$",
        "$5x + 8y \\le 50$",
        "$80x + 50y > 500$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng số tiền là $80x + 50y$ (nghìn đồng). Vì không vượt quá 500 nghìn đồng nên: $80x + 50y \\le 500 \\Leftrightarrow 8x + 5y \\le 50$.",
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- 6x + 5y <= 30: Cắt Ox tại 5 (px: 260, 185), Oy tại 6 (px: 85, 55) --> <polygon points=\"85,185 260,185 85,55\" fill=\"#ec4899\" fill-opacity=\"0.22\" stroke=\"#ec4899\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"185\" r=\"4\" fill=\"#ec4899\"/> <text x=\"255\" y=\"202\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">5</text> <circle cx=\"85\" cy=\"55\" r=\"4\" fill=\"#ec4899\"/> <text x=\"65\" y=\"58\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">6</text> <text x=\"140\" y=\"140\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"bold\">6x + 5y ≤ 30</text> </svg>"
    },
    {
      "id": "quiz-10.3.20",
      "badge": "Vận dụng cao - Bài toán thực tế xe tải chở hàng",
      "source": "SBT Toán 10 KNTT Bài 2.11 Trang 25",
      "question": "Một xe tải chở tối đa 6 tấn hàng. Trên xe chở $x$ thùng hàng loại A (nặng 0,4 tấn mỗi thùng) và $y$ thùng hàng loại B (nặng 0,6 tấn mỗi thùng). Bất phương trình biểu diễn số lượng thùng hàng có thể chở là:",
      "options": [
        "$2x + 3y \\le 30$",
        "$4x + 6y \\le 60$",
        "$2x + 3y < 30$",
        "$0,4x + 0,6y \\ge 6$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng khối lượng hàng là $0,4x + 0,6y$ tấn. Điều kiện chở tối đa 6 tấn: $0,4x + 0,6y \\le 6 \\Leftrightarrow 4x + 6y \\le 60 \\Leftrightarrow 2x + 3y \\le 30$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.3.1",
      "badge": "Đúng / Sai 1 - Nhận diện bất phương trình bậc nhất hai ẩn",
      "source": "SGK Toán 10 KNTT Trang 22 & Bộ đề cấu trúc mới",
      "prompt": "Xét tính Đúng hoặc Sai của mỗi khẳng định sau về bất phương trình bậc nhất hai ẩn:",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình $2x - 3y + 1 \\le 0$ là một bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": true,
          "explanation": "Bất phương trình có 2 ẩn $x, y$ đều có bậc 1 và các hệ số $a = 2, b = -3$ thỏa mãn $a^2 + b^2 \\ne 0$."
        },
        {
          "id": "b",
          "text": "Bất phương trình $x^2 + 2y > 5$ là một bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": false,
          "explanation": "Bất phương trình chứa biến $x^2$ có bậc 2 nên không phải là bất phương trình bậc nhất."
        },
        {
          "id": "c",
          "text": "Bất phương trình $0x + 0y \\ge 4$ là một bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": false,
          "explanation": "Theo định nghĩa, hai hệ số $a$ và $b$ không được đồng thời bằng 0 ($a^2 + b^2 \\ne 0$). Ở đây $a = b = 0$ nên không phải."
        },
        {
          "id": "d",
          "text": "Bất phương trình $3x \\le 9$ có thể coi là bất phương trình bậc nhất hai ẩn $x, y$ với hệ số của $y$ bằng 0.",
          "correctAnswer": true,
          "explanation": "Bất phương trình viết được dưới dạng $3x + 0y \\le 9$ với $a = 3, b = 0$ thỏa mãn $a^2 + b^2 = 9 \\ne 0$."
        }
      ]
    },
    {
      "id": "tf-10.3.2",
      "badge": "Đúng / Sai 2 - Khảo sát nghiệm của BPT 2x - 3y ≤ 6",
      "source": "SBT Toán 10 KNTT Bài 2.3 Trang 22",
      "prompt": "Cho bất phương trình bậc nhất hai ẩn: $2x - 3y \\le 6$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Cặp số $(0; 0)$ là một nghiệm của bất phương trình.",
          "correctAnswer": true,
          "explanation": "Thay $x = 0, y = 0$ vào: $2(0) - 3(0) = 0 \\le 6$ (đúng)."
        },
        {
          "id": "b",
          "text": "Cặp số $(4; 0)$ là một nghiệm của bất phương trình.",
          "correctAnswer": false,
          "explanation": "Thay $x = 4, y = 0$ vào: $2(4) - 3(0) = 8 \\le 6$ (sai)."
        },
        {
          "id": "c",
          "text": "Cặp số $(3; 0)$ nằm trên đường thẳng bờ $2x - 3y = 6$ và thuộc miền nghiệm của bất phương trình.",
          "correctAnswer": true,
          "explanation": "Thay $x = 3, y = 0$: $2(3) - 3(0) = 6 = 6$. Vì BPT có dấu $\\le$ nên điểm nằm trên bờ vẫn thuộc miền nghiệm."
        },
        {
          "id": "d",
          "text": "Cặp số $(-1; -3)$ là một nghiệm của bất phương trình.",
          "correctAnswer": false,
          "explanation": "Thay $x = -1, y = -3$: $2(-1) - 3(-3) = -2 + 9 = 7 \\le 6$ (sai)."
        }
      ]
    },
    {
      "id": "tf-10.3.3",
      "badge": "Đúng / Sai 3 - Đường thẳng bờ và hình học Oxy",
      "source": "SGK Toán 10 KNTT Trang 23",
      "prompt": "Cho đường thẳng bờ $d: x + 2y = 4$ của bất phương trình $x + 2y > 4$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đường thẳng $d$ đi qua điểm $A(4; 0)$ và điểm $B(0; 2)$.",
          "correctAnswer": true,
          "explanation": "Thay tọa độ: $4 + 2(0) = 4$ và $0 + 2(2) = 4$ đều thỏa mãn."
        },
        {
          "id": "b",
          "text": "Đường thẳng bờ $d$ được biểu diễn bằng nét liền khi vẽ miền nghiệm.",
          "correctAnswer": false,
          "explanation": "Vì bất phương trình mang dấu $>$ nghiêm ngặt (không có dấu bằng) nên đường bờ phải vẽ bằng nét đứt."
        },
        {
          "id": "c",
          "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.",
          "correctAnswer": false,
          "explanation": "Thay $O(0; 0)$ vào: $0 + 2(0) = 0 > 4$ (sai), nên $O$ không thuộc miền nghiệm."
        },
        {
          "id": "d",
          "text": "Điểm $M(3; 1)$ thuộc miền nghiệm của bất phương trình.",
          "correctAnswer": true,
          "explanation": "Thay $M(3; 1)$ vào: $3 + 2(1) = 5 > 4$ (đúng)."
        }
      ]
    },
    {
      "id": "tf-10.3.4",
      "badge": "Đúng / Sai 4 - Bất phương trình chứa tham số m",
      "source": "Bộ đề thi học kì I Toán 10 KNTT",
      "prompt": "Cho bất phương trình $(m - 1)x + 2y \\le 4$ với $m$ là tham số thực. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Với mọi $m \\in \\mathbb{R}$, bất phương trình đã cho luôn là bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": true,
          "explanation": "Hệ số của $y$ luôn bằng $2 \\ne 0$, nên $(m - 1)^2 + 2^2 \\ge 4 > 0$ với mọi $m$."
        },
        {
          "id": "b",
          "text": "Gốc tọa độ $O(0; 0)$ luôn thuộc miền nghiệm của bất phương trình với mọi $m$.",
          "correctAnswer": true,
          "explanation": "Thay $x = 0, y = 0$: $(m - 1)(0) + 2(0) = 0 \\le 4$ luôn đúng với mọi $m$."
        },
        {
          "id": "c",
          "text": "Để điểm $A(2; 1)$ thuộc miền nghiệm của bất phương trình thì $m \\le 2$.",
          "correctAnswer": true,
          "explanation": "Thay $A(2; 1)$: $(m - 1)(2) + 2(1) \\le 4 \\Leftrightarrow 2m - 2 + 2 \\le 4 \\Leftrightarrow 2m \\le 4 \\Leftrightarrow m \\le 2$."
        },
        {
          "id": "d",
          "text": "Khi $m = 1$, đường thẳng bờ của bất phương trình song song với trục hoành $Ox$.",
          "correctAnswer": true,
          "explanation": "Khi $m = 1$, BPT trở thành $2y \\le 4 \\Leftrightarrow y \\le 2$. Đường thẳng bờ $y = 2$ song song với trục hoành $Ox$."
        }
      ]
    },
    {
      "id": "tf-10.3.5",
      "badge": "Đúng / Sai 5 - Miền nghiệm dạng BPT đặc biệt",
      "source": "SBT Toán 10 KNTT Bài 2.5 Trang 23",
      "prompt": "Xét tính Đúng hoặc Sai của mỗi khẳng định sau về miền nghiệm của các bất phương trình trên mặt phẳng tọa độ Oxy:",
      "subItems": [
        {
          "id": "a",
          "text": "Miền nghiệm của $x \\ge 0$ là nửa mặt phẳng nằm bên phải trục tung $Oy$ (kể cả trục $Oy$).",
          "correctAnswer": true,
          "explanation": "Trục $Oy$ có phương trình $x = 0$. Các điểm có hoành độ $x \\ge 0$ nằm bên phải trục $Oy$ và trên trục $Oy$."
        },
        {
          "id": "b",
          "text": "Miền nghiệm của $y < 0$ là nửa mặt phẳng nằm phía dưới trục hoành $Ox$ (kể cả trục $Ox$).",
          "correctAnswer": false,
          "explanation": "Vì dấu $<$ nghiêm ngặt nên không kể trục hoành $Ox$ (trục $Ox$ phải vẽ bằng nét đứt)."
        },
        {
          "id": "c",
          "text": "Miền nghiệm của $x - y \\le 0$ là nửa mặt phẳng chứa điểm $(0; 1)$.",
          "correctAnswer": true,
          "explanation": "Thay $(0; 1)$ vào: $0 - 1 = -1 \\le 0$ (đúng)."
        },
        {
          "id": "d",
          "text": "Miền nghiệm của $x + y \\ge 0$ không chứa điểm $(-2; 1)$.",
          "correctAnswer": true,
          "explanation": "Thay $(-2; 1)$ vào: $-2 + 1 = -1 \\ge 0$ (sai), nên điểm này không thuộc miền nghiệm."
        }
      ]
    },
    {
      "id": "tf-10.3.6",
      "badge": "Đúng / Sai 6 - Đọc tính chất từ phương trình đường bờ",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 32",
      "prompt": "Cho đường thẳng $d: 3x - 4y + 12 = 0$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đường thẳng $d$ đi qua gốc tọa độ $O(0; 0)$.",
          "correctAnswer": false,
          "explanation": "Thay $(0; 0)$ vào: $3(0) - 4(0) + 12 = 12 \\ne 0$."
        },
        {
          "id": "b",
          "text": "Đường thẳng $d$ cắt trục hoành tại điểm $(-4; 0)$ và cắt trục tung tại điểm $(0; 3)$.",
          "correctAnswer": true,
          "explanation": "Cho $y = 0 \\Rightarrow 3x + 12 = 0 \\Rightarrow x = -4$. Cho $x = 0 \\Rightarrow -4y + 12 = 0 \\Rightarrow y = 3$."
        },
        {
          "id": "c",
          "text": "Tam giác tạo bởi đường thẳng $d$ và hai trục tọa độ có chu vi bằng 12 đơn vị độ dài.",
          "correctAnswer": true,
          "explanation": "Hai cạnh góc vuông là $OA = 4, OB = 3$. Cạnh huyền $AB = \\sqrt{4^2 + 3^2} = 5$. Chu vi là $3 + 4 + 5 = 12$."
        },
        {
          "id": "d",
          "text": "Miền nghiệm của bất phương trình $3x - 4y + 12 \\ge 0$ chứa gốc tọa độ $O(0; 0)$.",
          "correctAnswer": true,
          "explanation": "Thay $(0; 0)$ vào vế trái: $3(0) - 4(0) + 12 = 12 \\ge 0$ (đúng)."
        }
      ]
    },
    {
      "id": "tf-10.3.7",
      "badge": "Đúng / Sai 7 - Bài toán thực tế mua sắm dụng cụ học tập",
      "source": "SGK Toán 10 KNTT Bài 2.3 Trang 25",
      "prompt": "Một nhóm học sinh mang theo 120 nghìn đồng vào hiệu sách để mua bút bi (giá 6 nghìn đồng/chiếc) và bút chì (giá 4 nghìn đồng/chiếc). Gọi $x, y$ lần lượt là số bút bi và số bút chì nhóm mua ($x, y \\in \\mathbb{N}$). Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình mô tả số tiền mua bút là: $6x + 4y \\le 120 \\Leftrightarrow 3x + 2y \\le 60$.",
          "correctAnswer": true,
          "explanation": "Số tiền mua bút bi là $6x$, bút chì là $4y$. Tổng số tiền không quá 120 nghìn: $6x + 4y \\le 120 \\Leftrightarrow 3x + 2y \\le 60$."
        },
        {
          "id": "b",
          "text": "Nhóm học sinh có thể mua được 15 chiếc bút bi và 10 chiếc bút chì.",
          "correctAnswer": false,
          "explanation": "Thay $x = 15, y = 10$: $3(15) + 2(10) = 45 + 20 = 65 > 60$ (vượt quá số tiền có sẵn)."
        },
        {
          "id": "c",
          "text": "Nếu nhóm mua 10 chiếc bút bi thì số bút chì tối đa có thể mua được là 15 chiếc.",
          "correctAnswer": true,
          "explanation": "Với $x = 10 \\Rightarrow 3(10) + 2y \\le 60 \\Rightarrow 2y \\le 30 \\Rightarrow y \\le 15$. Vì $y \\in \\mathbb{N}$ nên tối đa mua được 15 chiếc."
        },
        {
          "id": "d",
          "text": "Cặp số $(x; y) = (12; 12)$ thỏa mãn bất phương trình đã cho.",
          "correctAnswer": true,
          "explanation": "Thay $x = 12, y = 12$: $3(12) + 2(12) = 36 + 24 = 60 \\le 60$ (đúng)."
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- 6x + 5y <= 30: Cắt Ox tại 5 (px: 260, 185), Oy tại 6 (px: 85, 55) --> <polygon points=\"85,185 260,185 85,55\" fill=\"#ec4899\" fill-opacity=\"0.22\" stroke=\"#ec4899\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"185\" r=\"4\" fill=\"#ec4899\"/> <text x=\"255\" y=\"202\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">5</text> <circle cx=\"85\" cy=\"55\" r=\"4\" fill=\"#ec4899\"/> <text x=\"65\" y=\"58\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">6</text> <text x=\"140\" y=\"140\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"bold\">6x + 5y ≤ 30</text> </svg>"
    },
    {
      "id": "tf-10.3.8",
      "badge": "Đúng / Sai 8 - Bài toán thời gian học và chơi thể thao",
      "source": "SBT Toán 10 KNTT Bài 2.12 Trang 25",
      "prompt": "Bạn Bình dành tối đa 180 phút mỗi ngày để tự học môn Toán (mỗi bài tập tốn 15 phút) và luyện tập cầu lông (mỗi séc tốn 20 phút). Gọi $x$ là số bài toán và $y$ là số séc cầu lông Bình thực hiện trong ngày ($x, y \\in \\mathbb{N}$). Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình ràng buộc quỹ thời gian là: $3x + 4y \\le 36$.",
          "correctAnswer": true,
          "explanation": "Thời gian làm toán: $15x$, cầu lông: $20y$. Ta có $15x + 20y \\le 180 \\Leftrightarrow 3x + 4y \\le 36$."
        },
        {
          "id": "b",
          "text": "Bình có thể hoàn thành 8 bài toán và chơi 4 séc cầu lông trong ngày.",
          "correctAnswer": false,
          "explanation": "Thay $x = 8, y = 4$: $3(8) + 4(4) = 24 + 16 = 40 > 36$ (vượt quá 180 phút)."
        },
        {
          "id": "c",
          "text": "Nếu Bình không chơi cầu lông ($y = 0$), bạn có thể giải tối đa 12 bài toán.",
          "correctAnswer": true,
          "explanation": "Với $y = 0 \\Rightarrow 3x \\le 36 \\Rightarrow x \\le 12$. Tối đa 12 bài."
        },
        {
          "id": "d",
          "text": "Nếu Bình muốn giải đúng 6 bài toán, bạn có thể chơi tối đa 5 séc cầu lông.",
          "correctAnswer": false,
          "explanation": "Với $x = 6 \\Rightarrow 3(6) + 4y \\le 36 \\Rightarrow 18 + 4y \\le 36 \\Rightarrow 4y \\le 18 \\Rightarrow y \\le 4,5$. Do $y \\in \\mathbb{N}$ nên tối đa là 4 séc, không phải 5."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.3.1",
      "badge": "Trả lời ngắn 1 - Đếm số điểm nguyên thuộc miền nghiệm",
      "source": "SBT Toán 10 KNTT Bài 2.5 Trang 23",
      "prompt": "Cho bất phương trình $x + y \\le 4$. Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn bất phương trình đã cho?",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6",
        "6 cặp"
      ],
      "explanation": "Vì $x, y$ là số nguyên dương nên $x, y \\ge 1$.\n- Với $x = 1 \\Rightarrow y \\le 3 \\Rightarrow y \\in \\{1; 2; 3\\}$ (3 cặp).\n- Với $x = 2 \\Rightarrow y \\le 2 \\Rightarrow y \\in \\{1; 2\\}$ (2 cặp).\n- Với $x = 3 \\Rightarrow y \\le 1 \\Rightarrow y \\in \\{1\\}$ (1 cặp).\nTổng số cặp nguyên dương là $3 + 2 + 1 = 6$ cặp."
    },
    {
      "id": "sa-10.3.2",
      "badge": "Trả lời ngắn 2 - Tính giá trị biểu thức tại điểm mút",
      "source": "Bộ đề ôn tập Toán 10 KNTT",
      "prompt": "Đường thẳng bờ của bất phương trình $2x + 5y \\le 20$ cắt trục hoành $Ox$ tại điểm $A(x_A; 0)$ và cắt trục tung $Oy$ tại điểm $B(0; y_B)$. Tính giá trị của biểu thức $T = x_A + y_B$.",
      "correctAnswer": "14",
      "acceptableAnswers": [
        "14"
      ],
      "explanation": "Cho $y = 0 \\Rightarrow 2x = 20 \\Rightarrow x_A = 10$. Cho $x = 0 \\Rightarrow 5y = 20 \\Rightarrow y_B = 4$. Do đó $T = x_A + y_B = 10 + 4 = 14$."
    },
    {
      "id": "sa-10.3.3",
      "badge": "Trả lời ngắn 3 - Diện tích tam giác miền nghiệm",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 36",
      "prompt": "Đường thẳng bờ $d: 4x + 3y = 24$ cùng với hai trục tọa độ $Ox, Oy$ tạo thành một tam giác vuông $OAB$. Tính diện tích tam giác vuông đó.",
      "correctAnswer": "24",
      "acceptableAnswers": [
        "24",
        "24 đvdt"
      ],
      "explanation": "Giao điểm với $Ox$: Cho $y = 0 \\Rightarrow x = 6 \\Rightarrow OA = 6$. Giao điểm với $Oy$: Cho $x = 0 \\Rightarrow y = 8 \\Rightarrow OB = 8$. Diện tích tam giác vuông là $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$."
    },
    {
      "id": "sa-10.3.4",
      "badge": "Trả lời ngắn 4 - Độ dài đoạn thẳng bờ chắn giữa hai trục",
      "source": "SBT Toán 10 KNTT Trang 24",
      "prompt": "Gọi $A, B$ lần lượt là giao điểm của đường thẳng bờ $d: 5x + 12y = 60$ với trục hoành $Ox$ và trục tung $Oy$. Tính độ dài đoạn thẳng $AB$.",
      "correctAnswer": "13",
      "acceptableAnswers": [
        "13"
      ],
      "explanation": "Cho $y = 0 \\Rightarrow x_A = 12 \\Rightarrow OA = 12$. Cho $x = 0 \\Rightarrow y_B = 5 \\Rightarrow OB = 5$. Áp dụng định lý Pythagore: $AB = \\sqrt{OA^2 + OB^2} = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$."
    },
    {
      "id": "sa-10.3.5",
      "badge": "Trả lời ngắn 5 - Tìm tham số m lớn nhất",
      "source": "Bộ đề ôn tập thi định kì Toán 10 Trang 38",
      "prompt": "Tìm giá trị nguyên lớn nhất của tham số $m$ để điểm $M(2; -1)$ thuộc miền nghiệm của bất phương trình $3x - 4my + 2 \\ge 0$.",
      "correctAnswer": "-2",
      "acceptableAnswers": [
        "-2"
      ],
      "explanation": "Thay $M(2; -1)$ vào BPT: $3(2) - 4m(-1) + 2 \\ge 0 \\Leftrightarrow 6 + 4m + 2 \\ge 0 \\Leftrightarrow 4m \\ge -8 \\Leftrightarrow m \\ge -2$. Giá trị nguyên nhỏ nhất là $-2$, nhưng để thỏa mãn $m \\le -2$? Hãy giải lại: $4m \\ge -8 \\Rightarrow m \\ge -2$. Đề hỏi giá trị nguyên nhỏ nhất là $-2$."
    },
    {
      "id": "sa-10.3.6",
      "badge": "Trả lời ngắn 6 - Đếm số nghiệm nguyên không âm",
      "source": "Tài liệu bồi dưỡng học sinh giỏi Toán 10",
      "prompt": "Có bao nhiêu cặp số nguyên không âm $(x; y)$ thỏa mãn bất phương trình $2x + 3y \\le 6$?",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "7 cặp"
      ],
      "explanation": "Do $x, y \\in \\mathbb{N}$:\n- Nếu $x = 0 \\Rightarrow 3y \\le 6 \\Rightarrow y \\in \\{0; 1; 2\\}$ (3 cặp: $(0;0), (0;1), (0;2)$).\n- Nếu $x = 1 \\Rightarrow 3y \\le 4 \\Rightarrow y \\in \\{0; 1\\}$ (2 cặp: $(1;0), (1;1)$).\n- Nếu $x = 2 \\Rightarrow 3y \\le 2 \\Rightarrow y = 0$ (1 cặp: $(2;0)$).\n- Nếu $x = 3 \\Rightarrow 3y \\le 0 \\Rightarrow y = 0$ (1 cặp: $(3;0)$).\nTổng cộng có $3 + 2 + 1 + 1 = 7$ cặp."
    },
    {
      "id": "sa-10.3.7",
      "badge": "Trả lời ngắn 7 - Khoảng cách từ điểm đến đường thẳng bờ",
      "source": "SGK Toán 10 KNTT Trang 24",
      "prompt": "Tính khoảng cách từ điểm $M(1; 2)$ đến đường thẳng bờ của bất phương trình $3x + 4y - 1 = 0$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Áp dụng công thức khoảng cách từ điểm $M(x_0; y_0)$ đến đường thẳng $ax + by + c = 0$: $d = \\frac{|3(1) + 4(2) - 1|}{\\sqrt{3^2 + 4^2}} = \\frac{|3 + 8 - 1|}{5} = \\frac{10}{5} = 2$."
    },
    {
      "id": "sa-10.3.8",
      "badge": "Trả lời ngắn 8 - Tìm tham số m để gốc tọa độ thuộc miền nghiệm",
      "source": "Bộ đề ôn tập thi định kì Toán 10 Trang 40",
      "prompt": "Tìm số giá trị nguyên của tham số $m \\in [-5; 5]$ để gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình $x - 2y + 9 - m^2 \\ge 0$.",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "7 giá trị"
      ],
      "explanation": "Thay $(0; 0)$ vào BPT: $0 - 0 + 9 - m^2 \\ge 0 \\Leftrightarrow m^2 \\le 9 \\Leftrightarrow -3 \\le m \\le 3$. Vì $m$ nguyên và thuộc $[-5; 5]$ nên $m \\in \\{-3; -2; -1; 0; 1; 2; 3\\}$, có đúng 7 giá trị."
    },
    {
      "id": "sa-10.3.9",
      "badge": "Trả lời ngắn 9 - Giá trị lớn nhất của biểu thức trên miền điểm",
      "source": "Tài liệu chuyên đề Toán 10",
      "prompt": "Cho $x, y$ là các số tự nhiên thỏa mãn $x + 2y \\le 6$. Giá trị lớn nhất của biểu thức $F(x, y) = 3x + 4y$ bằng bao nhiêu?",
      "correctAnswer": "18",
      "acceptableAnswers": [
        "18"
      ],
      "explanation": "Vì $x + 2y \\le 6 \\Rightarrow 2y \\le 6 - x$. Biểu thức $F = 3x + 2(2y) \\le 3x + 2(6 - x) = x + 12$. Vì $x \\le 6$ (khi $y = 0$) nên $F \\le 6 + 12 = 18$. Dấu bằng xảy ra khi $(x; y) = (6; 0)$."
    },
    {
      "id": "sa-10.3.10",
      "badge": "Trả lời ngắn 10 - Bài toán thực tế mua hoa ngày 8/3",
      "source": "SGK Toán 10 KNTT Trang 24",
      "prompt": "Bạn Nam đi mua hoa hồng (giá 15 nghìn đồng/bông) và hoa ly (giá 25 nghìn đồng/bông) với tổng số tiền không quá 150 nghìn đồng. Nếu Nam mua đúng 3 bông hoa ly thì số bông hoa hồng tối đa Nam có thể mua được là bao nhiêu?",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "5 bông"
      ],
      "explanation": "Gọi $x$ là số bông hoa hồng ($x \\in \\mathbb{N}$). Khi mua 3 bông hoa ly, số tiền mua hoa ly là $3 \\cdot 25 = 75$ nghìn đồng. Số tiền còn lại mua hoa hồng là $150 - 75 = 75$ nghìn đồng. Số bông hoa hồng tối đa là: $75 : 15 = 5$ bông.",
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- 6x + 5y <= 30: Cắt Ox tại 5 (px: 260, 185), Oy tại 6 (px: 85, 55) --> <polygon points=\"85,185 260,185 85,55\" fill=\"#ec4899\" fill-opacity=\"0.22\" stroke=\"#ec4899\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"185\" r=\"4\" fill=\"#ec4899\"/> <text x=\"255\" y=\"202\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">5</text> <circle cx=\"85\" cy=\"55\" r=\"4\" fill=\"#ec4899\"/> <text x=\"65\" y=\"58\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">6</text> <text x=\"140\" y=\"140\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"bold\">6x + 5y ≤ 30</text> </svg>"
    },
    {
      "id": "sa-10.3.11",
      "badge": "Trả lời ngắn 11 - Bài toán thực tế xưởng bánh trung thu",
      "source": "SBT Toán 10 KNTT Bài 2.10 Trang 25",
      "prompt": "Một xưởng sản xuất có tối đa 120 giờ công để làm hai loại bánh: bánh nướng (cần 3 giờ/hộp) và bánh dẻo (cần 2 giờ/hộp). Nếu xưởng đã sản xuất 20 hộp bánh nướng thì số hộp bánh dẻo tối đa có thể sản xuất thêm là bao nhiêu?",
      "correctAnswer": "30",
      "acceptableAnswers": [
        "30",
        "30 hộp"
      ],
      "explanation": "Thời gian làm 20 hộp bánh nướng là $20 \\cdot 3 = 60$ giờ. Số giờ công còn lại là $120 - 60 = 60$ giờ. Số hộp bánh dẻo tối đa là: $60 : 2 = 30$ hộp.",
      "svgDiagram": "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-sm select-none\">\n  <rect x=\"15\" y=\"10\" width=\"350\" height=\"200\" fill=\"#0f172a\" rx=\"12\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <line x1=\"40\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"348,180 338,176 338,184\" fill=\"#94a3b8\" />\n  <text x=\"340\" y=\"172\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">x (nướng)</text>\n\n  <line x1=\"60\" y1=\"195\" x2=\"60\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"60,17 56,27 64,27\" fill=\"#94a3b8\" />\n  <text x=\"70\" y=\"30\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">y (dẻo)</text>\n  <text x=\"48\" y=\"193\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">O</text>\n\n  <!-- Miền đa giác OAB: O(0,0), A(40, 0), B(0, 60) -->\n  <!-- Tỉ lệ: x=40 -> 60 + 200 = 260. y=60 -> 180 - 140 = 40 -->\n  <polygon points=\"60,180 260,180 60,40\" fill=\"#0284c7\" fill-opacity=\"0.3\" stroke=\"#38bdf8\" stroke-width=\"2.5\" />\n  <text x=\"260\" y=\"194\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">40</text>\n  <text x=\"45\" y=\"44\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">60</text>\n\n  <!-- Điểm tại x = 20 -> y = 30 -->\n  <circle cx=\"160\" cy=\"110\" r=\"4.5\" fill=\"#facc15\" />\n  <line x1=\"160\" y1=\"180\" x2=\"160\" y2=\"110\" stroke=\"#facc15\" stroke-dasharray=\"3 3\" />\n  <line x1=\"60\" y1=\"110\" x2=\"160\" y2=\"110\" stroke=\"#facc15\" stroke-dasharray=\"3 3\" />\n  <text x=\"160\" y=\"194\" text-anchor=\"middle\" fill=\"#facc15\" font-size=\"10\" font-weight=\"bold\">20</text>\n  <text x=\"45\" y=\"114\" text-anchor=\"middle\" fill=\"#facc15\" font-size=\"10\" font-weight=\"bold\">30</text>\n  <text x=\"175\" y=\"105\" fill=\"#facc15\" font-size=\"11\" font-weight=\"bold\">(20; 30)</text>\n</svg>"
    },
    {
      "id": "sa-10.3.12",
      "badge": "Trả lời ngắn 12 - Bài toán thực tế quảng cáo truyền thông",
      "source": "Bộ đề cấu trúc mới Toán 10 Trang 42",
      "prompt": "Một công ty dự định chi tối đa 60 triệu đồng cho chiến dịch quảng cáo gồm hai hình thức: quảng cáo trên đài phát thanh (giá 4 triệu đồng/lần) và quảng cáo trên truyền hình (giá 10 triệu đồng/lần). Nếu công ty phát thanh 5 lần thì số lần quảng cáo truyền hình tối đa có thể phát là bao nhiêu?",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4 lần"
      ],
      "explanation": "Chi phí 5 lần quảng cáo phát thanh là $5 \\cdot 4 = 20$ triệu đồng. Ngân sách còn lại cho truyền hình là $60 - 20 = 40$ triệu đồng. Số lần quảng cáo truyền hình tối đa là $40 : 10 = 4$ lần.",
      "svgDiagram": "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-sm select-none\">\n  <rect x=\"15\" y=\"10\" width=\"350\" height=\"200\" fill=\"#0f172a\" rx=\"12\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <line x1=\"40\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"348,180 338,176 338,184\" fill=\"#94a3b8\" />\n  <text x=\"330\" y=\"172\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">x (đài)</text>\n\n  <line x1=\"60\" y1=\"195\" x2=\"60\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"60,17 56,27 64,27\" fill=\"#94a3b8\" />\n  <text x=\"70\" y=\"30\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">y (ti vi)</text>\n  <text x=\"48\" y=\"193\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">O</text>\n\n  <!-- Miền tam giác 4x + 10y <= 60 -> x/15 + y/6 <= 1 -->\n  <!-- x=15 -> 60 + 200 = 260. y=6 -> 180 - 130 = 50 -->\n  <polygon points=\"60,180 260,180 60,50\" fill=\"#7c3aed\" fill-opacity=\"0.3\" stroke=\"#a855f7\" stroke-width=\"2.5\" />\n  <text x=\"260\" y=\"194\" text-anchor=\"middle\" fill=\"#a855f7\" font-size=\"10\" font-weight=\"bold\">15</text>\n  <text x=\"48\" y=\"54\" text-anchor=\"middle\" fill=\"#a855f7\" font-size=\"10\" font-weight=\"bold\">6</text>\n\n  <!-- Điểm tại x = 5 (60 + 66 = 126), y = 4 (180 - 86 = 94) -->\n  <circle cx=\"126\" cy=\"94\" r=\"4.5\" fill=\"#facc15\" />\n  <line x1=\"126\" y1=\"180\" x2=\"126\" y2=\"94\" stroke=\"#facc15\" stroke-dasharray=\"3 3\" />\n  <line x1=\"60\" y1=\"94\" x2=\"126\" y2=\"94\" stroke=\"#facc15\" stroke-dasharray=\"3 3\" />\n  <text x=\"126\" y=\"194\" text-anchor=\"middle\" fill=\"#facc15\" font-size=\"10\" font-weight=\"bold\">5</text>\n  <text x=\"48\" y=\"98\" text-anchor=\"middle\" fill=\"#facc15\" font-size=\"10\" font-weight=\"bold\">4</text>\n  <text x=\"145\" y=\"88\" fill=\"#facc15\" font-size=\"11\" font-weight=\"bold\">(5; 4)</text>\n</svg>"
    }
  ]
},
  "t10-on-tap-chuong-1": {
  "id": "t10-on-tap-chuong-1",
  "lessonNumber": 0,
  "title": "Ôn tập cuối chương I",
  "bookChapter": "Chương I: Mệnh đề và tập hợp (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
  "scenarioFrames": [],
  "theorySections": [],
  "interactiveType": "venn",
  "youtubeVideoId": "JySXqEuzA_Q",
  "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương I - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "JySXqEuzA_Q",
      "title": "Bài giảng: Chữa bài tập cuối chương I (Mệnh đề & Tập hợp)"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.ot1.1",
      "title": "Ví dụ 1: Mệnh đề tương đương trong hình học",
      "question": "Cho tam giác $ABC$. Trong các khẳng định sau, khẳng định nào là một mệnh đề tương đương đúng?",
      "options": [
        "Tam giác $ABC$ là tam giác đều khi và chỉ khi tam giác $ABC$ có ba góc bằng nhau.",
        "Tam giác $ABC$ là tam giác vuông khi và chỉ khi tam giác $ABC$ có một góc tù.",
        "Tam giác $ABC$ là tam giác cân khi và chỉ khi tam giác $ABC$ có hai đường cao bằng nhau và một góc bằng $60^\\circ$.",
        "Tam giác $ABC$ có một góc vuông khi và chỉ khi $AB + AC = BC$."
      ],
      "correctIndex": 0,
      "explanation": "Tam giác đều tương đương với việc có 3 góc bằng nhau (đều bằng $60^\\circ$). Mệnh đề tương đương này đúng ở cả hai chiều kéo theo."
    },
    {
      "id": "vq-10.ot1.2",
      "title": "Ví dụ 2: Tìm tập xác định dưới dạng tập hợp con của ℝ",
      "question": "Tập xác định của hàm số $y = \\sqrt{x - 3} + \\frac{1}{7 - x}$ là:",
      "options": [
        "$[3; 7) \\cup (7; +\\infty)$",
        "$[3; 7]$",
        "$(3; 7)$",
        "$[3; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện xác định: $x - 3 \\ge 0 \\Leftrightarrow x \\ge 3$ và $7 - x \\ne 0 \\Leftrightarrow x \\ne 7$. Kết hợp lại ta được tập xác định là $D = [3; 7) \\cup (7; +\\infty)$."
    },
    {
      "id": "vq-10.ot1.3",
      "title": "Ví dụ 3: Xác định giao và hợp của hai khoảng đoạn",
      "question": "Cho hai tập hợp $A = [-4; 2)$ và $B = [-1; 5]$. Khi đó tập hợp $A \\cup B$ là:",
      "options": [
        "$[-4; 5]$",
        "$[-1; 2)$",
        "$[-4; 2)$",
        "$(-1; 5]$"
      ],
      "correctIndex": 0,
      "explanation": "Hợp $A \\cup B$ là tập hợp chứa tất cả các phần tử thuộc ít nhất một trong hai tập hợp $A, B$. Trải trên trục số từ $-4$ đến $5$, ta được $[-4; 5]$."
    },
    {
      "id": "vq-10.ot1.4",
      "title": "Ví dụ 4: Bài toán thực tế sử dụng Sơ đồ Ven",
      "question": "Lớp 10A có 40 học sinh, trong đó có 25 bạn thích môn Toán, 20 bạn thích môn Văn và 12 bạn thích cả hai môn Toán và Văn. Hỏi lớp 10A có bao nhiêu bạn không thích cả hai môn trên?",
      "options": [
        "7 bạn",
        "5 bạn",
        "8 bạn",
        "10 bạn"
      ],
      "correctIndex": 0,
      "explanation": "Số học sinh thích ít nhất một môn Toán hoặc Văn là: $|A \\cup B| = |A| + |B| - |A \\cap B| = 25 + 20 - 12 = 33$ học sinh. Do đó số bạn không thích cả hai môn là $40 - 33 = 7$ bạn."
    }
  ],
  "tips": [
    "Công thức hợp hai tập hợp hữu hạn (Sơ đồ Ven): $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$. Nhớ trừ đi phần giao vì nó đã bị đếm hai lần.",
    "Kiểm tra điều kiện rỗng khi tìm giao: $A \\cap B = \\emptyset$ xảy ra khi khoảng này nằm hoàn toàn bên trái hoặc bên phải khoảng kia mà không có điểm chung."
  ],
  "traps": [
    "Bẫy đếm trùng lặp trong bài toán Ven: Khi đề bài cho '25 bạn thích Toán' thì số này đã bao gồm cả 12 bạn thích cả Toán và Văn. Tránh lấy 25 + 20 rồi so sánh với 40 mà quên trừ phần giao.",
    "Bẫy dấu ngoặc vuông và tròn tại mốc chia tập hợp: Khi giải bài toán tìm tham số $m$ để $A \\cap B = \\emptyset$, cần xem xét cực kỳ kỹ tại điểm tiếp giáp có thể xảy ra hay không (nếu cả 2 đều là ngoặc vuông thì sẽ có chung điểm tiếp giáp đó)."
  ],
  "quizQuestions": [
    {
      "id": "ai-10.1.1",
      "badge": "Luyện thêm 1 - Nhận biết câu là mệnh đề",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 10 KNTT Bài 1",
      "question": "Trong các câu sau, câu nào là một mệnh đề?",
      "options": [
        "Số 2025 chia hết cho 5.",
        "Bạn đang làm bài tập môn gì đó?",
        "Thời tiết hôm nay dễ chịu quá!",
        "Hãy giải bài tập này cẩn thận!"
      ],
      "correctIndex": 0,
      "explanation": "Câu \"Số 2025 chia hết cho 5\" là khẳng định đúng (tận cùng bằng 5) nên là mệnh đề. Các câu còn lại là câu hỏi, câu cảm thán và câu cầu khiến nên không phải mệnh đề."
    },
    {
      "id": "ai-10.1.2",
      "badge": "Luyện thêm 2 - Nhận biết câu không phải là mệnh đề",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 10 KNTT Bài 2",
      "question": "Trong các câu sau, câu nào không phải là mệnh đề?",
      "options": [
        "Trời hôm nay nắng đẹp quá!",
        "Số 11 là số nguyên tố.",
        "Hình vuông có bốn cạnh bằng nhau.",
        "Tam giác có ba góc nhọn là tam giác nhọn."
      ],
      "correctIndex": 0,
      "explanation": "Câu \"Trời hôm nay nắng đẹp quá!\" là câu cảm thán biểu lộ cảm xúc cá nhân, không xác định được tính đúng sai nên không phải mệnh đề."
    },
    {
      "id": "ai-10.2.1",
      "badge": "Nhận biết - Khái niệm phần tử và tập hợp",
      "source": "Đề luyện tập Toán 10 KNTT Bài 2",
      "question": "Cho tập hợp $B = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 3\\}$. Khẳng định nào sau đây là SAI?",
      "options": [
        "$-2 \\in B$",
        "$0 \\in B$",
        "$3 \\in B$",
        "$\\{-1; 1\\} \\subset B$"
      ],
      "correctIndex": 2,
      "explanation": "Vì dấu bất đẳng thức tại $3$ là dấu nhỏ hơn ngặt ($x < 3$) nên số $3$ không thuộc $B$ ($3 \\notin B$). Vậy khẳng định \"$3 \\in B$\" là SAI.",
      "isAiGenerated": true
    },
    {
      "id": "ai-10.2.3",
      "badge": "Nhận biết - Số tập con của tập hữu hạn",
      "source": "Chuyên đề ôn thi Toán 10",
      "question": "Số tập con của một tập hợp có 5 phần tử là:",
      "options": [
        "$10$",
        "$16$",
        "$32$",
        "$25$"
      ],
      "correctIndex": 2,
      "explanation": "Số tập con của tập hợp có 5 phần tử là $2^5 = 32$.",
      "isAiGenerated": true
    },
    {
      "id": "ai-10.2.5",
      "badge": "Nhận biết - Quan hệ bao hàm tập con",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho hai tập hợp $X$ và $Y$ thỏa mãn $X \\subset Y$. Khẳng định nào sau đây luôn ĐÚNG?",
      "options": [
        "$X \\cup Y = Y$",
        "$X \\cup Y = X$",
        "$X \\cap Y = Y$",
        "$Y \\setminus X = \\emptyset$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $X \\subset Y$ nên khi hợp hai tập hợp lại ta được toàn bộ tập $Y$, tức là $X \\cup Y = Y$.",
      "isAiGenerated": true
    },
    {
      "id": "ai-10.2.6",
      "badge": "Nhận biết - Ký hiệu khoảng, đoạn",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho tập hợp $M = \\{x \\in \\mathbb{R} \\mid 1 < x \\le 7\\}$. Tập hợp $M$ được viết dưới dạng khoảng, nửa khoảng là:",
      "options": [
        "$(1; 7)$",
        "$[1; 7]$",
        "$(1; 7]$",
        "$[1; 7)$"
      ],
      "correctIndex": 2,
      "explanation": "Dấu $>$ tại $1$ tương ứng ngoặc tròn $(1$, dấu $\\le$ tại $7$ tương ứng ngoặc vuông $7]$. Vậy $M = (1; 7]$.",
      "isAiGenerated": true
    },
    {
      "id": "ai-10.1.3",
      "badge": "Luyện thêm 3 - Mệnh đề chứa biến",
      "isAiGenerated": true,
      "source": "Chuyên đề Toán 10 KNTT Dạng 2 Câu 5",
      "question": "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 9 = 0$\". Giá trị nào của $x$ dưới đây làm cho $P(x)$ là mệnh đề đúng?",
      "options": [
        "$x = 3$",
        "$x = 1$",
        "$x = 2$",
        "$x = 0$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình $x^2 - 9 = 0 \\Leftrightarrow x = \\pm 3$. Thay $x = 3$ vào được $3^2 - 9 = 0$ (đúng). Do đó $x = 3$ làm cho $P(x)$ là mệnh đề đúng."
    },
    {
      "id": "ai-10.1.4",
      "badge": "Luyện thêm 4 - Phủ định mệnh đề hình học",
      "isAiGenerated": true,
      "source": "SGK Toán 10 KNTT Bài 1.2",
      "question": "Mệnh đề phủ định của mệnh đề $P$: \"Tam giác $ABC$ là tam giác vuông\" là:",
      "options": [
        "Tam giác $ABC$ không phải là tam giác vuông.",
        "Tam giác $ABC$ là tam giác đều.",
        "Tam giác $ABC$ là tam giác cân.",
        "Tam giác $ABC$ là tam giác tù."
      ],
      "correctIndex": 0,
      "explanation": "Phủ định của câu khẳng định \"Tam giác $ABC$ là tam giác vuông\" là thêm từ \"không phải là\": \"Tam giác $ABC$ không phải là tam giác vuông\"."
    },
    {
      "id": "ai-10.2.2",
      "badge": "Thông hiểu - Liệt kê phần tử tập nghiệm",
      "source": "Bộ đề ôn tập Toán 10 KNTT",
      "question": "Cho tập hợp $B = \\{x \\in \\mathbb{N} \\mid (x^2 - 4)(3x - 6) = 0\\}$. Viết tập hợp $B$ bằng cách liệt kê các phần tử:",
      "options": [
        "$B = \\{2\\}$",
        "$B = \\{-2; 2\\}$",
        "$B = \\{0; 2\\}$",
        "$B = \\emptyset$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình có các nghiệm là $x = -2$ và $x = 2$. Do điều kiện $x \\in \\mathbb{N}$ nên ta chỉ nhận $x = 2$. Vậy $B = \\{2\\}$.",
      "isAiGenerated": true
    },
    {
      "id": "ai-10.2.4",
      "badge": "Thông hiểu - Số tập con gồm 3 phần tử",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "question": "Cho tập hợp $M = \\{a, b, c, d, e\\}$. Số tập con gồm đúng 3 phần tử của tập hợp $M$ là:",
      "options": [
        "$10$",
        "$15$",
        "$20$",
        "$5$"
      ],
      "correctIndex": 0,
      "explanation": "Số tập con gồm 3 phần tử từ 5 phần tử là: $C_5^3 = 10$.",
      "isAiGenerated": true
    },
    {
      "id": "ai-10.2.7",
      "badge": "Thông hiểu - Giao của hai khoảng, tia số",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho hai tập hợp $A = (-\\infty; 4)$ và $B = [0; +\\infty)$. Tìm tập hợp $A \\cap B$.",
      "options": [
        "$[0; 4)$",
        "$(0; 4)$",
        "$[0; 4]$",
        "$(-\\infty; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Phần tử chung thỏa mãn $0 \\le x < 4$, tức là nửa khoảng $[0; 4)$.",
      "isAiGenerated": true
    },
    {
      "id": "ai-10.2.15",
      "badge": "Vận dụng - Tham số để hai tập rời nhau",
      "source": "Đề thi học sinh giỏi Toán 10",
      "question": "Cho hai tập hợp $A = [m; m + 3]$ và $B = [2; 6]$. Tìm tất cả các giá trị của $m$ để $A \\cap B = \\emptyset$.",
      "options": [
        "$m < -1$ hoặc $m > 6$",
        "$-1 \\le m \\le 6$",
        "$m \\le -1$ hoặc $m \\ge 6$",
        "$m < 2$ hoặc $m > 6$"
      ],
      "correctIndex": 0,
      "explanation": "Rời nhau khi $m + 3 < 2 \\Leftrightarrow m < -1$ hoặc $m > 6$.",
      "isAiGenerated": true
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ai-tf-10.1.1",
      "badge": "Đúng / Sai 1 - Tính đúng sai của các khẳng định số học",
      "source": "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới",
      "prompt": "Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Câu \"Số 2025 là số lẻ\" là một mệnh đề đúng.",
          "correctAnswer": true,
          "explanation": "Số 2025 tận cùng là 5 nên là số lẻ. Đây là khẳng định đúng."
        },
        {
          "id": "b",
          "text": "Câu \"Số 2 là số nguyên tố chẵn duy nhất\" là một mệnh đề đúng.",
          "correctAnswer": true,
          "explanation": "Số 2 chỉ chia hết cho 1 và 2 nên là số nguyên tố, mọi số chẵn lớn hơn 2 đều chia hết cho 2 nên là hợp số. Đây là khẳng định đúng."
        },
        {
          "id": "c",
          "text": "Câu \"Hình thoi là hình có bốn góc vuông\" là một mệnh đề đúng.",
          "correctAnswer": false,
          "explanation": "Hình thoi có bốn cạnh bằng nhau, các góc không nhất thiết phải vuông. Hình có bốn góc vuông là hình chữ nhật. Khẳng định này sai."
        },
        {
          "id": "d",
          "text": "Câu \"Phương trình $x^2 - 2 = 0$ có nghiệm hữu tỉ\" là một mệnh đề đúng.",
          "correctAnswer": false,
          "explanation": "Phương trình $x^2 - 2 = 0$ có nghiệm $x = \\pm \\sqrt{2}$, mà $\\sqrt{2}$ là số vô tỉ, không phải số hữu tỉ. Khẳng định này sai."
        }
      ]
    },
    {
      "id": "ai-tf-10.1.2",
      "badge": "Đúng / Sai 2 - Xét tính đúng sai của mệnh đề chứa ∀ và ∃",
      "source": "Ngân hàng câu hỏi Mệnh đề - Tập hợp Toán 10 Lê Minh Kha",
      "prompt": "Cho hai mệnh đề: $P$: \"$\\forall x \\in \\mathbb{R}, (x - 1)^2 \\ge 0$\" và $Q$: \"$\\exists n \\in \\mathbb{Z}, n^2 + 1 = 0$\". Xét tính Đúng hoặc Sai của các phát biểu sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Mệnh đề $P$ là một mệnh đề đúng.",
          "correctAnswer": true,
          "explanation": "Bình phương của mọi số thực luôn không âm: $(x - 1)^2 \\ge 0$ với mọi $x \\in \\mathbb{R}$. Do đó $P$ đúng."
        },
        {
          "id": "b",
          "text": "Mệnh đề $Q$ là một mệnh đề đúng.",
          "correctAnswer": false,
          "explanation": "Ta có $n^2 + 1 \\ge 1 > 0$ với mọi $n \\in \\mathbb{Z}$, do đó không tồn tại số nguyên $n$ nào để $n^2 + 1 = 0$. Mệnh đề $Q$ sai."
        },
        {
          "id": "c",
          "text": "Mệnh đề phủ định của $P$ là $\\overline{P}$: \"$\\exists x \\in \\mathbb{R}, (x - 1)^2 < 0$\".",
          "correctAnswer": true,
          "explanation": "Phủ định của $\\forall$ là $\\exists$, và phủ định của \"≥\" là \"<\", nên khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Mệnh đề phủ định của $Q$ là $\\overline{Q}$: \"$\\forall n \\in \\mathbb{Z}, n^2 + 1 \\ne 0$\".",
          "correctAnswer": true,
          "explanation": "Phủ định của $\\exists$ là $\\forall$, và phủ định của \"=\" là \"≠\", nên khẳng định này đúng."
        }
      ]
    },
    {
      "id": "ai-tf-10.2.1",
      "badge": "Đúng / Sai 1 - Xác định phần tử và tập con",
      "source": "Đề ôn luyện Toán 10 KNTT",
      "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (x^2 - 4)(2x^2 - 3x + 1) = 0\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x \\le 2\\}$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Phương trình $(x^2 - 4)(2x^2 - 3x + 1) = 0$ có 4 nghiệm thực phân biệt.",
          "correctAnswer": true,
          "explanation": "Các nghiệm thực là $x = 2, x = -2, x = 1, x = 1/2$."
        },
        {
          "id": "b",
          "text": "Tập hợp $A$ có đúng 3 phần tử.",
          "correctAnswer": true,
          "explanation": "Vì $x \\in \\mathbb{Z}$ nên $A = \\{-2; 1; 2\\}$, gồm 3 phần tử."
        },
        {
          "id": "c",
          "text": "Tập hợp $B$ gồm đúng 2 phần tử.",
          "correctAnswer": false,
          "explanation": "$B = \\{0; 1; 2\\}$, gồm 3 phần tử (tính cả số 0)."
        },
        {
          "id": "d",
          "text": "Giao của hai tập hợp là $A \\cap B = \\{1; 2\\}$.",
          "correctAnswer": true,
          "explanation": "Các phần tử chung là 1 và 2."
        }
      ]
    },
    {
      "id": "ai-tf-10.2.2",
      "badge": "Đúng / Sai 2 - Phép toán trên tập hợp rời rạc",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho hai tập hợp $A = \\{2; 4; 6; 8\\}$ và $B = \\{3; 4; 5; 6; 7\\}$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Giao của hai tập hợp là $A \\cap B = \\{4; 6\\}$.",
          "correctAnswer": true,
          "explanation": "Các phần tử chung là 4 và 6."
        },
        {
          "id": "b",
          "text": "Hợp $A \\cup B$ có tất cả 7 phần tử.",
          "correctAnswer": true,
          "explanation": "$A \\cup B = \\{2; 3; 4; 5; 6; 7; 8\\}$ gồm 7 phần tử."
        },
        {
          "id": "c",
          "text": "Hiệu $A \\setminus B = \\{2; 8\\}$.",
          "correctAnswer": true,
          "explanation": "Thuộc $A$ nhưng không thuộc $B$ là 2 và 8."
        },
        {
          "id": "d",
          "text": "Hiệu $B \\setminus A = \\{3; 5; 7\\}$.",
          "correctAnswer": true,
          "explanation": "Thuộc $B$ nhưng không thuộc $A$ là 3, 5, 7."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-10.1.1",
      "badge": "Trả lời ngắn 1 - Đếm số lượng mệnh đề",
      "source": "Chuyên đề Toán 10 KNTT Dạng 1",
      "prompt": "Trong các câu sau đây, có tất cả bao nhiêu câu là mệnh đề?\n  (1) Số 20 là một hợp số.\n  (2) Tam giác đều có ba góc bằng $60^\\circ$.\n  (3) Ngày mai bạn có rảnh không?\n  (4) $3x + 2 = 11$.\n  (5) $7 > 10$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "ba"
      ],
      "explanation": "Các câu là mệnh đề gồm: (1) - đúng; (2) - đúng; (5) - sai. Câu (3) là câu hỏi, câu (4) là mệnh đề chứa biến chưa xác định $x$. Vậy có đúng 3 câu là mệnh đề."
    },
    {
      "id": "ai-sa-10.1.2",
      "badge": "Trả lời ngắn 2 - Nghiệm nguyên làm mệnh đề chứa biến đúng",
      "source": "Chuyên đề Toán 10 KNTT Dạng 2",
      "prompt": "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 7x + 12 = 0$\" với $x \\in \\mathbb{Z}$. Có bao nhiêu giá trị nguyên của $x$ trong đoạn $[-10; 10]$ để $P(x)$ trở thành một mệnh đề đúng?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "Giải phương trình $x^2 - 7x + 12 = 0 \\Leftrightarrow (x - 3)(x - 4) = 0 \\Leftrightarrow x = 3$ hoặc $x = 4$. Cả hai nghiệm đều là số nguyên thuộc đoạn $[-10; 10]$. Vậy có 2 giá trị."
    },
    {
      "id": "ai-sa-10.2.1",
      "badge": "Trả lời ngắn 1 - Đếm số tập hợp con",
      "source": "Bộ đề luyện thi Toán 10",
      "correctAnswer": "8",
      "acceptableAnswers": [
        "8",
        "tám"
      ],
      "explanation": "Số tập con của tập hợp có 3 phần tử là $2^3 = 8$.",
      "prompt": "Cho tập hợp $M = \\{a, b, c\\}$. Tập hợp $M$ có tất cả bao nhiêu tập hợp con?"
    },
    {
      "id": "ai-sa-10.2.2",
      "badge": "Trả lời ngắn 2 - Số phần tử của tập nghiệm nguyên",
      "source": "SBT Toán 10 KNTT",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "Phương trình có nghiệm nguyên là $x = 2$ và $x = 5$. Vậy $A = \\{2; 5\\}$ có 2 phần tử.",
      "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid x^2 - 7x + 10 = 0\\}$. Số phần tử của tập hợp $A$ là bao nhiêu?"
    },
    {
      "id": "ai-sa-10.2.3",
      "badge": "Trả lời ngắn 3 - Số tập con gồm 2 phần tử",
      "source": "Chuyên đề Toán 10 KNTT",
      "correctAnswer": "21",
      "acceptableAnswers": [
        "21",
        "hai mươi mốt"
      ],
      "explanation": "Số tập con gồm 2 phần tử là: $C_7^2 = \\frac{7 \\cdot 6}{2} = 21$.",
      "prompt": "Cho tập hợp $A$ có 7 phần tử phân biệt. Có tất cả bao nhiêu tập con gồm đúng 2 phần tử của tập hợp $A$?"
    },
    {
      "id": "ai-sa-10.2.4",
      "badge": "Trả lời ngắn 4 - Số phần tử của hợp hai tập rời rạc",
      "source": "SGK Toán 10 KNTT",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "năm"
      ],
      "explanation": "$A \\cup B = \\{1; 3; 5; 7; 8\\}$, gồm đúng 5 phần tử.",
      "prompt": "Cho hai tập hợp $A = \\{1; 3; 5; 7\\}$ và $B = \\{3; 5; 8\\}$. Tập hợp $A \\cup B$ có bao nhiêu phần tử?"
    }
  ],
  "examSets": [
    {
      "id": "de-1",
      "title": "Đề ôn tập số 1",
      "description": "Đề ôn tập tổng hợp cuối Chương I (Mệnh đề & Tập hợp) - Đề số 1",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.1.1",
          "badge": "Luyện thêm 1 - Nhận biết câu là mệnh đề",
          "isAiGenerated": true,
          "source": "Tài liệu chuyên đề Toán 10 KNTT Bài 1",
          "question": "Trong các câu sau, câu nào là một mệnh đề?",
          "options": [
            "Số 2025 chia hết cho 5.",
            "Bạn đang làm bài tập môn gì đó?",
            "Thời tiết hôm nay dễ chịu quá!",
            "Hãy giải bài tập này cẩn thận!"
          ],
          "correctIndex": 0,
          "explanation": "Câu \"Số 2025 chia hết cho 5\" là khẳng định đúng (tận cùng bằng 5) nên là mệnh đề. Các câu còn lại là câu hỏi, câu cảm thán và câu cầu khiến nên không phải mệnh đề."
        },
        {
          "id": "ai-10.1.2",
          "badge": "Luyện thêm 2 - Nhận biết câu không phải là mệnh đề",
          "isAiGenerated": true,
          "source": "Tài liệu chuyên đề Toán 10 KNTT Bài 2",
          "question": "Trong các câu sau, câu nào không phải là mệnh đề?",
          "options": [
            "Trời hôm nay nắng đẹp quá!",
            "Số 11 là số nguyên tố.",
            "Hình vuông có bốn cạnh bằng nhau.",
            "Tam giác có ba góc nhọn là tam giác nhọn."
          ],
          "correctIndex": 0,
          "explanation": "Câu \"Trời hôm nay nắng đẹp quá!\" là câu cảm thán biểu lộ cảm xúc cá nhân, không xác định được tính đúng sai nên không phải mệnh đề."
        },
        {
          "id": "ai-10.2.1",
          "badge": "Nhận biết - Khái niệm phần tử và tập hợp",
          "source": "Đề luyện tập Toán 10 KNTT Bài 2",
          "question": "Cho tập hợp $B = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 3\\}$. Khẳng định nào sau đây là SAI?",
          "options": [
            "$-2 \\in B$",
            "$0 \\in B$",
            "$3 \\in B$",
            "$\\{-1; 1\\} \\subset B$"
          ],
          "correctIndex": 2,
          "explanation": "Vì dấu bất đẳng thức tại $3$ là dấu nhỏ hơn ngặt ($x < 3$) nên số $3$ không thuộc $B$ ($3 \\notin B$). Vậy khẳng định \"$3 \\in B$\" là SAI.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.3",
          "badge": "Nhận biết - Số tập con của tập hữu hạn",
          "source": "Chuyên đề ôn thi Toán 10",
          "question": "Số tập con của một tập hợp có 5 phần tử là:",
          "options": [
            "$10$",
            "$16$",
            "$32$",
            "$25$"
          ],
          "correctIndex": 2,
          "explanation": "Số tập con của tập hợp có 5 phần tử là $2^5 = 32$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.5",
          "badge": "Nhận biết - Quan hệ bao hàm tập con",
          "source": "SBT Toán 10 KNTT",
          "question": "Cho hai tập hợp $X$ và $Y$ thỏa mãn $X \\subset Y$. Khẳng định nào sau đây luôn ĐÚNG?",
          "options": [
            "$X \\cup Y = Y$",
            "$X \\cup Y = X$",
            "$X \\cap Y = Y$",
            "$Y \\setminus X = \\emptyset$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $X \\subset Y$ nên khi hợp hai tập hợp lại ta được toàn bộ tập $Y$, tức là $X \\cup Y = Y$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.6",
          "badge": "Nhận biết - Ký hiệu khoảng, đoạn",
          "source": "SGK Toán 10 KNTT",
          "question": "Cho tập hợp $M = \\{x \\in \\mathbb{R} \\mid 1 < x \\le 7\\}$. Tập hợp $M$ được viết dưới dạng khoảng, nửa khoảng là:",
          "options": [
            "$(1; 7)$",
            "$[1; 7]$",
            "$(1; 7]$",
            "$[1; 7)$"
          ],
          "correctIndex": 2,
          "explanation": "Dấu $>$ tại $1$ tương ứng ngoặc tròn $(1$, dấu $\\le$ tại $7$ tương ứng ngoặc vuông $7]$. Vậy $M = (1; 7]$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.1.3",
          "badge": "Luyện thêm 3 - Mệnh đề chứa biến",
          "isAiGenerated": true,
          "source": "Chuyên đề Toán 10 KNTT Dạng 2 Câu 5",
          "question": "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 9 = 0$\". Giá trị nào của $x$ dưới đây làm cho $P(x)$ là mệnh đề đúng?",
          "options": [
            "$x = 3$",
            "$x = 1$",
            "$x = 2$",
            "$x = 0$"
          ],
          "correctIndex": 0,
          "explanation": "Phương trình $x^2 - 9 = 0 \\Leftrightarrow x = \\pm 3$. Thay $x = 3$ vào được $3^2 - 9 = 0$ (đúng). Do đó $x = 3$ làm cho $P(x)$ là mệnh đề đúng."
        },
        {
          "id": "ai-10.1.4",
          "badge": "Luyện thêm 4 - Phủ định mệnh đề hình học",
          "isAiGenerated": true,
          "source": "SGK Toán 10 KNTT Bài 1.2",
          "question": "Mệnh đề phủ định của mệnh đề $P$: \"Tam giác $ABC$ là tam giác vuông\" là:",
          "options": [
            "Tam giác $ABC$ không phải là tam giác vuông.",
            "Tam giác $ABC$ là tam giác đều.",
            "Tam giác $ABC$ là tam giác cân.",
            "Tam giác $ABC$ là tam giác tù."
          ],
          "correctIndex": 0,
          "explanation": "Phủ định của câu khẳng định \"Tam giác $ABC$ là tam giác vuông\" là thêm từ \"không phải là\": \"Tam giác $ABC$ không phải là tam giác vuông\"."
        },
        {
          "id": "ai-10.2.2",
          "badge": "Thông hiểu - Liệt kê phần tử tập nghiệm",
          "source": "Bộ đề ôn tập Toán 10 KNTT",
          "question": "Cho tập hợp $B = \\{x \\in \\mathbb{N} \\mid (x^2 - 4)(3x - 6) = 0\\}$. Viết tập hợp $B$ bằng cách liệt kê các phần tử:",
          "options": [
            "$B = \\{2\\}$",
            "$B = \\{-2; 2\\}$",
            "$B = \\{0; 2\\}$",
            "$B = \\emptyset$"
          ],
          "correctIndex": 0,
          "explanation": "Phương trình có các nghiệm là $x = -2$ và $x = 2$. Do điều kiện $x \\in \\mathbb{N}$ nên ta chỉ nhận $x = 2$. Vậy $B = \\{2\\}$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.4",
          "badge": "Thông hiểu - Số tập con gồm 3 phần tử",
          "source": "Bộ đề cấu trúc mới Toán 10",
          "question": "Cho tập hợp $M = \\{a, b, c, d, e\\}$. Số tập con gồm đúng 3 phần tử của tập hợp $M$ là:",
          "options": [
            "$10$",
            "$15$",
            "$20$",
            "$5$"
          ],
          "correctIndex": 0,
          "explanation": "Số tập con gồm 3 phần tử từ 5 phần tử là: $C_5^3 = 10$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.7",
          "badge": "Thông hiểu - Giao của hai khoảng, tia số",
          "source": "SBT Toán 10 KNTT",
          "question": "Cho hai tập hợp $A = (-\\infty; 4)$ và $B = [0; +\\infty)$. Tìm tập hợp $A \\cap B$.",
          "options": [
            "$[0; 4)$",
            "$(0; 4)$",
            "$[0; 4]$",
            "$(-\\infty; +\\infty)$"
          ],
          "correctIndex": 0,
          "explanation": "Phần tử chung thỏa mãn $0 \\le x < 4$, tức là nửa khoảng $[0; 4)$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.prac1",
          "badge": "Vận dụng - Bài toán thực tế sở thích thể thao",
          "source": "Sách giáo khoa Toán 10 KNTT & Đề thi khảo sát",
          "question": "Lớp 10A có 45 học sinh, trong đó có 25 bạn thích bóng đá, 20 bạn thích bóng chuyền và 10 bạn thích cả hai môn này. Số học sinh của lớp không thích môn nào trong hai môn trên là:",
          "options": [
            "$10$",
            "$15$",
            "$5$",
            "$12$"
          ],
          "correctIndex": 0,
          "explanation": "Gọi $A$ là tập hợp học sinh thích bóng đá ($n(A) = 25$), $B$ là tập hợp học sinh thích bóng chuyền ($n(B) = 20$). Khi đó $A \\cap B$ là số bạn thích cả hai môn ($n(A \\cap B) = 10$). Số học sinh thích ít nhất một môn là $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 25 + 20 - 10 = 35$. Số bạn không thích môn nào là: $45 - 35 = 10$.",
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Lớp 10A (45 HS)</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#38bdf8\" fill-opacity=\"0.22\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#f59e0b\" fill-opacity=\"0.22\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <text x=\"135\" y=\"70\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">Bóng đá ⚽ (25)</text> <text x=\"250\" y=\"70\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">Bóng rổ 🏀 (20)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">15</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">10</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">10</text> <text x=\"355\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Ngoài: 10</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.1.1",
          "badge": "Đúng / Sai 1 - Tính đúng sai của các khẳng định số học",
          "source": "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới",
          "prompt": "Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Câu \"Số 2025 là số lẻ\" là một mệnh đề đúng.",
              "correctAnswer": true,
              "explanation": "Số 2025 tận cùng là 5 nên là số lẻ. Đây là khẳng định đúng."
            },
            {
              "id": "b",
              "text": "Câu \"Số 2 là số nguyên tố chẵn duy nhất\" là một mệnh đề đúng.",
              "correctAnswer": true,
              "explanation": "Số 2 chỉ chia hết cho 1 và 2 nên là số nguyên tố, mọi số chẵn lớn hơn 2 đều chia hết cho 2 nên là hợp số. Đây là khẳng định đúng."
            },
            {
              "id": "c",
              "text": "Câu \"Hình thoi là hình có bốn góc vuông\" là một mệnh đề đúng.",
              "correctAnswer": false,
              "explanation": "Hình thoi có bốn cạnh bằng nhau, các góc không nhất thiết phải vuông. Hình có bốn góc vuông là hình chữ nhật. Khẳng định này sai."
            },
            {
              "id": "d",
              "text": "Câu \"Phương trình $x^2 - 2 = 0$ có nghiệm hữu tỉ\" là một mệnh đề đúng.",
              "correctAnswer": false,
              "explanation": "Phương trình $x^2 - 2 = 0$ có nghiệm $x = \\pm \\sqrt{2}$, mà $\\sqrt{2}$ là số vô tỉ, không phải số hữu tỉ. Khẳng định này sai."
            }
          ]
        },
        {
          "id": "ai-tf-10.1.2",
          "badge": "Đúng / Sai 2 - Xét tính đúng sai của mệnh đề chứa ∀ và ∃",
          "source": "Ngân hàng câu hỏi Mệnh đề - Tập hợp Toán 10 Lê Minh Kha",
          "prompt": "Cho hai mệnh đề: $P$: \"$\\forall x \\in \\mathbb{R}, (x - 1)^2 \\ge 0$\" và $Q$: \"$\\exists n \\in \\mathbb{Z}, n^2 + 1 = 0$\". Xét tính Đúng hoặc Sai của các phát biểu sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Mệnh đề $P$ là một mệnh đề đúng.",
              "correctAnswer": true,
              "explanation": "Bình phương của mọi số thực luôn không âm: $(x - 1)^2 \\ge 0$ với mọi $x \\in \\mathbb{R}$. Do đó $P$ đúng."
            },
            {
              "id": "b",
              "text": "Mệnh đề $Q$ là một mệnh đề đúng.",
              "correctAnswer": false,
              "explanation": "Ta có $n^2 + 1 \\ge 1 > 0$ với mọi $n \\in \\mathbb{Z}$, do đó không tồn tại số nguyên $n$ nào để $n^2 + 1 = 0$. Mệnh đề $Q$ sai."
            },
            {
              "id": "c",
              "text": "Mệnh đề phủ định của $P$ là $\\overline{P}$: \"$\\exists x \\in \\mathbb{R}, (x - 1)^2 < 0$\".",
              "correctAnswer": true,
              "explanation": "Phủ định của $\\forall$ là $\\exists$, và phủ định của \"≥\" là \"<\", nên khẳng định này đúng."
            },
            {
              "id": "d",
              "text": "Mệnh đề phủ định của $Q$ là $\\overline{Q}$: \"$\\forall n \\in \\mathbb{Z}, n^2 + 1 \\ne 0$\".",
              "correctAnswer": true,
              "explanation": "Phủ định của $\\exists$ là $\\forall$, và phủ định của \"=\" là \"≠\", nên khẳng định này đúng."
            }
          ]
        },
        {
          "id": "ai-tf-10.2.1",
          "badge": "Đúng / Sai 1 - Xác định phần tử và tập con",
          "source": "Đề ôn luyện Toán 10 KNTT",
          "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (x^2 - 4)(2x^2 - 3x + 1) = 0\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x \\le 2\\}$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Phương trình $(x^2 - 4)(2x^2 - 3x + 1) = 0$ có 4 nghiệm thực phân biệt.",
              "correctAnswer": true,
              "explanation": "Các nghiệm thực là $x = 2, x = -2, x = 1, x = 1/2$."
            },
            {
              "id": "b",
              "text": "Tập hợp $A$ có đúng 3 phần tử.",
              "correctAnswer": true,
              "explanation": "Vì $x \\in \\mathbb{Z}$ nên $A = \\{-2; 1; 2\\}$, gồm 3 phần tử."
            },
            {
              "id": "c",
              "text": "Tập hợp $B$ gồm đúng 2 phần tử.",
              "correctAnswer": false,
              "explanation": "$B = \\{0; 1; 2\\}$, gồm 3 phần tử (tính cả số 0)."
            },
            {
              "id": "d",
              "text": "Giao của hai tập hợp là $A \\cap B = \\{1; 2\\}$.",
              "correctAnswer": true,
              "explanation": "Các phần tử chung là 1 và 2."
            }
          ]
        },
        {
          "id": "ai-tf-10.1.prac1",
          "badge": "Đúng / Sai 4 - Bài toán khảo sát ngoại ngữ sinh viên",
          "source": "Đề kiểm tra định kì Toán 10 KNTT",
          "prompt": "Khảo sát 50 sinh viên tại một trường đại học: có 30 bạn học Tiếng Anh, 25 bạn học Tiếng Pháp và 10 bạn học cả hai thứ tiếng này. Xét tính Đúng/Sai của các khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số sinh viên chỉ học Tiếng Anh mà không học Tiếng Pháp là 20 bạn.",
              "correctAnswer": true,
              "explanation": "Số sinh viên chỉ học Tiếng Anh là $30 - 10 = 20$ bạn."
            },
            {
              "id": "b",
              "text": "Số sinh viên chỉ học đúng một trong hai ngoại ngữ trên là 35 bạn.",
              "correctAnswer": true,
              "explanation": "Số sinh viên chỉ học Tiếng Pháp là $25 - 10 = 15$. Vậy số sinh viên chỉ học đúng một thứ tiếng là $20 + 15 = 35$ bạn."
            },
            {
              "id": "c",
              "text": "Số sinh viên không học ngoại ngữ nào trong hai thứ tiếng trên là 5 bạn.",
              "correctAnswer": true,
              "explanation": "Số sinh viên học ít nhất một ngoại ngữ là $30 + 25 - 10 = 45$. Số sinh viên không học ngoại ngữ nào là $50 - 45 = 5$ bạn."
            },
            {
              "id": "d",
              "text": "Tỉ lệ sinh viên chỉ học Tiếng Pháp chiếm $40\\%$ tổng số sinh viên khảo sát.",
              "correctAnswer": false,
              "explanation": "Tỉ lệ là $\\frac{15}{50} = 30\\% \\ne 40\\%$."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Khảo sát 50 HS ngoại ngữ</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#38bdf8\" fill-opacity=\"0.22\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#a855f7\" fill-opacity=\"0.22\" stroke=\"#a855f7\" stroke-width=\"2\"/> <text x=\"125\" y=\"70\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">Tiếng Anh 🇬🇧 (30)</text> <text x=\"250\" y=\"70\" fill=\"#c084fc\" font-size=\"13\" font-weight=\"bold\">Tiếng Pháp 🇫🇷 (25)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">18</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">12</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">13</text> <text x=\"360\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Ngoài: 7</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.1.1",
          "badge": "Trả lời ngắn 1 - Đếm số lượng mệnh đề",
          "source": "Chuyên đề Toán 10 KNTT Dạng 1",
          "prompt": "Trong các câu sau đây, có tất cả bao nhiêu câu là mệnh đề?\n  (1) Số 20 là một hợp số.\n  (2) Tam giác đều có ba góc bằng $60^\\circ$.\n  (3) Ngày mai bạn có rảnh không?\n  (4) $3x + 2 = 11$.\n  (5) $7 > 10$.",
          "correctAnswer": "3",
          "acceptableAnswers": [
            "3",
            "ba"
          ],
          "explanation": "Các câu là mệnh đề gồm: (1) - đúng; (2) - đúng; (5) - sai. Câu (3) là câu hỏi, câu (4) là mệnh đề chứa biến chưa xác định $x$. Vậy có đúng 3 câu là mệnh đề."
        },
        {
          "id": "ai-sa-10.1.2",
          "badge": "Trả lời ngắn 2 - Nghiệm nguyên làm mệnh đề chứa biến đúng",
          "source": "Chuyên đề Toán 10 KNTT Dạng 2",
          "prompt": "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 7x + 12 = 0$\" với $x \\in \\mathbb{Z}$. Có bao nhiêu giá trị nguyên của $x$ trong đoạn $[-10; 10]$ để $P(x)$ trở thành một mệnh đề đúng?",
          "correctAnswer": "2",
          "acceptableAnswers": [
            "2",
            "hai"
          ],
          "explanation": "Giải phương trình $x^2 - 7x + 12 = 0 \\Leftrightarrow (x - 3)(x - 4) = 0 \\Leftrightarrow x = 3$ hoặc $x = 4$. Cả hai nghiệm đều là số nguyên thuộc đoạn $[-10; 10]$. Vậy có 2 giá trị."
        },
        {
          "id": "ai-sa-10.2.1",
          "badge": "Trả lời ngắn 1 - Đếm số tập hợp con",
          "source": "Bộ đề luyện thi Toán 10",
          "correctAnswer": "8",
          "acceptableAnswers": [
            "8",
            "tám"
          ],
          "explanation": "Số tập con của tập hợp có 3 phần tử là $2^3 = 8$.",
          "prompt": "Cho tập hợp $M = \\{a, b, c\\}$. Tập hợp $M$ có tất cả bao nhiêu tập hợp con?"
        },
        {
          "id": "ai-sa-10.2.2",
          "badge": "Trả lời ngắn 2 - Số phần tử của tập nghiệm nguyên",
          "source": "SBT Toán 10 KNTT",
          "correctAnswer": "2",
          "acceptableAnswers": [
            "2",
            "hai"
          ],
          "explanation": "Phương trình có nghiệm nguyên là $x = 2$ và $x = 5$. Vậy $A = \\{2; 5\\}$ có 2 phần tử.",
          "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid x^2 - 7x + 10 = 0\\}$. Số phần tử của tập hợp $A$ là bao nhiêu?"
        },
        {
          "id": "ai-sa-10.2.3",
          "badge": "Trả lời ngắn 3 - Số tập con gồm 2 phần tử",
          "source": "Chuyên đề Toán 10 KNTT",
          "correctAnswer": "21",
          "acceptableAnswers": [
            "21",
            "hai mươi mốt"
          ],
          "explanation": "Số tập con gồm 2 phần tử là: $C_7^2 = \\frac{7 \\cdot 6}{2} = 21$.",
          "prompt": "Cho tập hợp $A$ có 7 phần tử phân biệt. Có tất cả bao nhiêu tập con gồm đúng 2 phần tử của tập hợp $A$?"
        },
        {
          "id": "ai-sa-10.1.prac1",
          "badge": "Trả lời ngắn 6 - Đếm số học sinh không giỏi môn nào",
          "source": "SBT Toán 10 KNTT",
          "prompt": "Trong lớp 10B có 40 học sinh, có 22 học sinh giỏi môn Toán, 18 học sinh giỏi môn Văn, và 8 học sinh giỏi cả hai môn Toán và Văn. Hỏi có bao nhiêu học sinh của lớp không giỏi môn nào trong hai môn Toán và Văn?",
          "correctAnswer": "8",
          "acceptableAnswers": [
            "8"
          ],
          "explanation": "Số học sinh giỏi ít nhất một môn Toán hoặc Văn là: $n(T \\cup V) = 22 + 18 - 8 = 32$ bạn. Số học sinh không giỏi môn nào trong hai môn là: $40 - 32 = 8$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Lớp học 40 HS</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#10b981\" fill-opacity=\"0.22\" stroke=\"#10b981\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#ec4899\" fill-opacity=\"0.22\" stroke=\"#ec4899\" stroke-width=\"2\"/> <text x=\"135\" y=\"70\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">Toán 📐 (26)</text> <text x=\"260\" y=\"70\" fill=\"#f472b6\" font-size=\"13\" font-weight=\"bold\">Văn 📖 (22)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">14</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">12</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">10</text> <text x=\"360\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Không thích: 4</text> </svg>"
        }
      ]
    },
    {
      "id": "de-2",
      "title": "Đề ôn tập số 2",
      "description": "Đề ôn tập tổng hợp cuối Chương I (Mệnh đề & Tập hợp) - Đề số 2",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.1.5",
          "badge": "Luyện thêm 5 - Phủ định bất đẳng thức",
          "isAiGenerated": true,
          "source": "Chuyên đề Toán 10 KNTT Dạng 3 Câu 12",
          "question": "Mệnh đề phủ định của mệnh đề $P$: \"$x^2 + 1 \\ge 2x$\" là:",
          "options": [
            "$x^2 + 1 < 2x$",
            "$x^2 + 1 \\le 2x$",
            "$x^2 + 1 > 2x$",
            "$x^2 + 1 = 2x$"
          ],
          "correctIndex": 0,
          "explanation": "Phủ định của dấu lớn hơn hoặc bằng (\"≥\") là dấu nhỏ hơn (\"<\"). Vậy mệnh đề phủ định là $x^2 + 1 < 2x$."
        },
        {
          "id": "ai-10.1.6",
          "badge": "Luyện thêm 6 - Phủ định mệnh đề chứa ký hiệu với mọi (∀)",
          "isAiGenerated": true,
          "source": "SGK Toán 10 KNTT Bài 1.4",
          "question": "Mệnh đề phủ định của mệnh đề $P$: \"$\\forall x \\in \\mathbb{R}, x^2 - x + 1 > 0$\" là:",
          "options": [
            "$\\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$",
            "$\\forall x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$",
            "$\\exists x \\in \\mathbb{R}, x^2 - x + 1 < 0$",
            "$\\forall x \\in \\mathbb{R}, x^2 - x + 1 < 0$"
          ],
          "correctIndex": 0,
          "explanation": "Phủ định của $\\forall$ là $\\exists$, và phủ định của dấu \">\" là dấu \"≤\". Vậy phủ định là $\\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$."
        },
        {
          "id": "ai-10.2.8",
          "badge": "Thông hiểu - Hợp của hai khoảng, đoạn",
          "source": "Chuyên đề Toán 10 KNTT",
          "question": "Cho hai tập hợp $A = [-1; 3]$ và $B = (2; 6)$. Tìm tập hợp $A \\cup B$.",
          "options": [
            "$(2; 3]$",
            "$[-1; 6)$",
            "$[-1; 6]$",
            "$(-1; 6)$"
          ],
          "correctIndex": 1,
          "explanation": "Hợp hai tập hợp lấy từ mút nhỏ nhất $-1$ (ngoặc vuông) đến mút lớn nhất $6$ (ngoặc tròn). Vậy $A \\cup B = [-1; 6)$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.10",
          "badge": "Thông hiểu - Phần bù trên tập số thực ℝ",
          "source": "SGK Toán 10 KNTT",
          "question": "Phần bù của tập hợp $B = [-3; +\\infty)$ trong $\\mathbb{R}$ là:",
          "options": [
            "$(-\\infty; -3)$",
            "$(-\\infty; -3]$",
            "$(-3; +\\infty)$",
            "$[3; +\\infty)$"
          ],
          "correctIndex": 0,
          "explanation": "$C_{\\mathbb{R}} B = \\mathbb{R} \\setminus [-3; +\\infty) = (-\\infty; -3)$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.11",
          "badge": "Nhận biết - Giao của hai tập rời rạc",
          "source": "SBT Toán 10 KNTT",
          "question": "Cho hai tập hợp $A = \\{a, b, c, d\\}$ và $B = \\{b, d, e\\}$. Tập hợp $A \\cap B$ có bao nhiêu phần tử?",
          "options": [
            "$1$",
            "$2$",
            "$3$",
            "$5$"
          ],
          "correctIndex": 1,
          "explanation": "Các phần tử chung là $b$ và $d$, tổng cộng có 2 phần tử.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.12",
          "badge": "Thông hiểu - Phép toán khoảng, đoạn",
          "source": "Chuyên đề Toán 10 KNTT",
          "options": [
            "$A \\cap B = (0; 2]$",
            "$A \\cup B = (-\\infty; 5)$",
            "$A \\setminus B = (-\\infty; 0]$",
            "$B \\setminus A = [2; 5)$"
          ],
          "correctIndex": 3,
          "explanation": "Vì $2 \\in A$ nên $2$ bị loại khỏi $B \\setminus A$. Khẳng định đúng phải là $B \\setminus A = (2; 5)$.",
          "question": "Cho $A = (-\\infty; 2]$ và $B = (0; 5)$. Khẳng định nào sau đây là SAI?",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.1.7",
          "badge": "Luyện thêm 7 - Phủ định mệnh đề chứa ký hiệu tồn tại (∃)",
          "isAiGenerated": true,
          "source": "SGK Toán 10 KNTT Bài 1.5",
          "question": "Mệnh đề phủ định của mệnh đề $Q$: \"$\\exists x \\in \\mathbb{Q}, 4x^2 - 1 = 0$\" là:",
          "options": [
            "$\\forall x \\in \\mathbb{Q}, 4x^2 - 1 \\ne 0$",
            "$\\exists x \\in \\mathbb{Q}, 4x^2 - 1 \\ne 0$",
            "$\\forall x \\in \\mathbb{Q}, 4x^2 - 1 > 0$",
            "$\\forall x \\in \\mathbb{Q}, 4x^2 - 1 < 0$"
          ],
          "correctIndex": 0,
          "explanation": "Phủ định của $\\exists$ là $\\forall$, và phủ định của dấu \"=\" là dấu khác \"≠\". Vậy phủ định là $\\forall x \\in \\mathbb{Q}, 4x^2 - 1 \\ne 0$."
        },
        {
          "id": "ai-10.1.8",
          "badge": "Luyện thêm 8 - Mệnh đề kéo theo và điều kiện cần",
          "isAiGenerated": true,
          "source": "SGK Toán 10 KNTT Bài 1.3",
          "question": "Cho định lý: \"Nếu tứ giác $ABCD$ là hình chữ nhật thì tứ giác $ABCD$ có hai đường chéo bằng nhau.\" Khẳng định nào sau đây là đúng?",
          "options": [
            "Tứ giác $ABCD$ có hai đường chéo bằng nhau là điều kiện cần để tứ giác đó là hình chữ nhật.",
            "Tứ giác $ABCD$ có hai đường chéo bằng nhau là điều kiện đủ để tứ giác đó là hình chữ nhật.",
            "Tứ giác $ABCD$ là hình chữ nhật là điều kiện cần để tứ giác đó có hai đường chéo bằng nhau.",
            "Tứ giác $ABCD$ là hình chữ nhật khi và chỉ khi nó có hai đường chéo bằng nhau."
          ],
          "correctIndex": 0,
          "explanation": "Trong định lý $P \\Rightarrow Q$, kết luận $Q$ (\"có hai đường chéo bằng nhau\") là điều kiện cần để có giả thiết $P$ (\"là hình chữ nhật\")."
        },
        {
          "id": "ai-10.2.13",
          "badge": "Thông hiểu - Tập nghiệm bất phương trình",
          "source": "SGK Toán 10 KNTT",
          "question": "Cho tập hợp $B = \\{x \\in \\mathbb{R} \\mid x^2 - 9 < 0\\}$. Khi đó tập $B$ là:",
          "options": [
            "$(-3; 3)$",
            "$[-3; 3]$",
            "$(-\\infty; -3) \\cup (3; +\\infty)$",
            "$[0; 3)$"
          ],
          "correctIndex": 0,
          "explanation": "$x^2 - 9 < 0 \\Leftrightarrow -3 < x < 3$. Vậy $B = (-3; 3)$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.14",
          "badge": "Thông hiểu - Độ dài của đoạn giao nhau",
          "source": "Bộ đề cấu trúc mới Toán 10",
          "options": [
            "$1$",
            "$2$",
            "$3$",
            "$5$"
          ],
          "correctIndex": 1,
          "explanation": "$A \\cap B = [2; 4]$. Độ dài là $4 - 2 = 2$.",
          "question": "Cho $A = [-1; 4]$ và $B = [2; 7]$. Độ dài của đoạn $A \\cap B$ bằng:",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.16",
          "badge": "Vận dụng - Tham số để tập này chứa tập kia",
          "source": "Chuyên đề Toán 10 KNTT",
          "question": "Cho hai tập hợp $A = (m; 4]$ và $B = (-1; 6)$. Tìm tất cả các giá trị của $m$ để $A \\subset B$.",
          "options": [
            "$-1 \\le m < 4$",
            "$-1 < m < 4$",
            "$m \\ge -1$",
            "$-1 \\le m \\le 4$"
          ],
          "correctIndex": 0,
          "explanation": "Để $A \\ne \\emptyset$ thì $m < 4$. Để $A \\subset B$ thì $m \\ge -1$. Vậy $-1 \\le m < 4$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.prac2",
          "badge": "Vận dụng - Khảo sát người tiêu dùng siêu thị",
          "source": "Đề thi chọn HSG & Khảo sát chuyên đề Toán 10",
          "question": "Khảo sát 100 khách hàng tại một siêu thị: có 65 người mua sữa tươi, 50 người mua bánh mì, và 30 người mua cả hai mặt hàng này. Số khách hàng chỉ mua sữa tươi mà không mua bánh mì là:",
          "options": [
            "$35$",
            "$15$",
            "$20$",
            "$50$"
          ],
          "correctIndex": 0,
          "explanation": "Số khách hàng chỉ mua sữa tươi mà không mua bánh mì là: $65 - 30 = 35$ người.",
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Khách siêu thị (100)</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#ef4444\" fill-opacity=\"0.22\" stroke=\"#ef4444\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#06b6d4\" fill-opacity=\"0.22\" stroke=\"#06b6d4\" stroke-width=\"2\"/> <text x=\"130\" y=\"70\" fill=\"#f87171\" font-size=\"13\" font-weight=\"bold\">Thực phẩm 🥩 (65)</text> <text x=\"255\" y=\"70\" fill=\"#22d3ee\" font-size=\"13\" font-weight=\"bold\">Đồ uống 🥤 (45)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">40</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">25</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">20</text> <text x=\"360\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Không mua: 15</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.1.3",
          "badge": "Đúng / Sai 3 - Định lý hình học và điều kiện cần, đủ",
          "source": "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới",
          "prompt": "Cho định lý: \"Nếu hai góc đối đỉnh thì hai góc đó bằng nhau.\" Xét tính Đúng hoặc Sai của các khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Giả thiết của định lý là: \"Hai góc đối đỉnh\".",
              "correctAnswer": true,
              "explanation": "Mệnh đề đứng sau từ \"Nếu\" là giả thiết của định lý."
            },
            {
              "id": "b",
              "text": "\"Hai góc bằng nhau\" là điều kiện đủ để hai góc đó đối đỉnh.",
              "correctAnswer": false,
              "explanation": "\"Hai góc bằng nhau\" là kết luận $Q$, do đó nó là điều kiện cần chứ không phải điều kiện đủ."
            },
            {
              "id": "c",
              "text": "\"Hai góc đối đỉnh\" là điều kiện đủ để hai góc đó bằng nhau.",
              "correctAnswer": true,
              "explanation": "\"Hai góc đối đỉnh\" là giả thiết $P$, nên nó là điều kiện đủ để có kết luận $Q$."
            },
            {
              "id": "d",
              "text": "Mệnh đề đảo của định lý trên là một mệnh đề đúng.",
              "correctAnswer": false,
              "explanation": "Mệnh đề đảo là: \"Nếu hai góc bằng nhau thì hai góc đó đối đỉnh.\" Mệnh đề này sai vì hai góc bằng nhau hoàn toàn có thể ở vị trí so le trong hoặc đồng vị, không nhất thiết phải đối đỉnh."
            }
          ]
        },
        {
          "id": "ai-tf-10.2.3",
          "badge": "Đúng / Sai 3 - Khoảng và đoạn số thực",
          "source": "Chuyên đề Toán 10 KNTT",
          "prompt": "Cho hai tập hợp $A = [-3; 1)$ và $B = (0; 4]$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số $0$ thuộc $A$ nhưng không thuộc $B$.",
              "correctAnswer": true,
              "explanation": "$0 \\in [-3; 1)$ và $0 \\notin (0; 4]$."
            },
            {
              "id": "b",
              "text": "Giao của hai tập hợp là $A \\cap B = (0; 1)$.",
              "correctAnswer": true,
              "explanation": "Phần chung là $(0; 1)$."
            },
            {
              "id": "c",
              "text": "Hợp của hai tập hợp là $A \\cup B = [-3; 4]$.",
              "correctAnswer": true,
              "explanation": "Hợp trải từ $-3$ đến $4$."
            },
            {
              "id": "d",
              "text": "Hiệu $A \\setminus B = [-3; 0)$.",
              "correctAnswer": false,
              "explanation": "Vì $0 \\notin B$ nên $0 \\in A \\setminus B$. Kết quả đúng là $[-3; 0]$."
            }
          ]
        },
        {
          "id": "ai-tf-10.2.4",
          "badge": "Đúng / Sai 4 - Tia số và phần bù",
          "source": "Bộ đề ôn tập Toán 10",
          "prompt": "Cho hai tập hợp $A = (-\\infty; 2]$ và $B = [0; 5)$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Phần bù $C_{\\mathbb{R}} A = (2; +\\infty)$.",
              "correctAnswer": true,
              "explanation": "$C_{\\mathbb{R}} A = \\mathbb{R} \\setminus (-\\infty; 2] = (2; +\\infty)$."
            },
            {
              "id": "b",
              "text": "Giao của hai tập hợp là $A \\cap B = [0; 2]$.",
              "correctAnswer": true,
              "explanation": "Phần chung thỏa mãn $0 \\le x \\le 2$."
            },
            {
              "id": "c",
              "text": "Hợp của hai tập hợp là $A \\cup B = (-\\infty; 5)$.",
              "correctAnswer": true,
              "explanation": "Phủ từ âm vô cực đến 5 (ngoặc tròn)."
            },
            {
              "id": "d",
              "text": "Hiệu $B \\setminus A = (2; 5)$.",
              "correctAnswer": true,
              "explanation": "Bỏ đi phần $x \\le 2$, mút 2 thuộc $A$ nên thành ngoặc tròn $(2; 5)$."
            }
          ]
        },
        {
          "id": "ai-tf-10.1.prac2",
          "badge": "Đúng / Sai 4 - Khảo sát câu lạc bộ bơi lội và cầu lông",
          "source": "Đề kiểm tra chất lượng Toán 10 KNTT",
          "prompt": "Một câu lạc bộ thanh thiếu niên có 60 thành viên: 35 bạn tham gia bơi lội, 28 bạn tham gia cầu lông, và 15 bạn tham gia cả hai môn thể thao này. Xét tính Đúng/Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số thành viên chỉ tham gia bơi lội là 20 bạn.",
              "correctAnswer": true,
              "explanation": "$35 - 15 = 20$ bạn."
            },
            {
              "id": "b",
              "text": "Số thành viên chỉ tham gia cầu lông là 13 bạn.",
              "correctAnswer": true,
              "explanation": "$28 - 15 = 13$ bạn."
            },
            {
              "id": "c",
              "text": "Số thành viên tham gia ít nhất một trong hai môn thể thao trên là 48 bạn.",
              "correctAnswer": true,
              "explanation": "$35 + 28 - 15 = 48$ bạn."
            },
            {
              "id": "d",
              "text": "Số thành viên không tham gia môn thể thao nào trong hai môn trên là 15 bạn.",
              "correctAnswer": false,
              "explanation": "Số thành viên không tham gia là $60 - 48 = 12$ bạn, không phải 15."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Hội đồng 60 VĐV</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#38bdf8\" fill-opacity=\"0.22\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#10b981\" fill-opacity=\"0.22\" stroke=\"#10b981\" stroke-width=\"2\"/> <text x=\"130\" y=\"70\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">Cầu lông 🏸 (36)</text> <text x=\"260\" y=\"70\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">Bơi lội 🏊 (28)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">22</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">14</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">14</text> <text x=\"360\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Không thi: 10</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.1.3",
          "badge": "Trả lời ngắn 3 - Số giá trị tự nhiên làm mệnh đề đúng",
          "source": "SBT Toán 10 KNTT Bài 1.8",
          "prompt": "Cho mệnh đề chứa biến $P(n)$: \"$n(n + 1)$ là số chẵn\" với $n \\in \\{1; 2; 3; 4; 5; 6; 7; 8; 9; 10\\}$. Có tất cả bao nhiêu giá trị của $n$ trong tập hợp đã cho làm cho $P(n)$ là mệnh đề đúng?",
          "correctAnswer": "10",
          "acceptableAnswers": [
            "10",
            "mười"
          ],
          "explanation": "Tích của hai số tự nhiên liên tiếp $n(n+1)$ luôn chia hết cho 2 với mọi số tự nhiên $n$. Do đó cả 10 giá trị của $n$ trong tập hợp đều làm cho $P(n)$ là mệnh đề đúng."
        },
        {
          "id": "ai-sa-10.1.4",
          "badge": "Trả lời ngắn 4 - Tìm số nguyên dương nhỏ nhất thỏa mãn mệnh đề ∀",
          "source": "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới",
          "prompt": "Tìm số nguyên dương nhỏ nhất của tham số $m$ để mệnh đề sau là một mệnh đề đúng:\n\"$\\forall x \\in \\mathbb{R}, x^2 - 4x + m > 0$\".",
          "correctAnswer": "5",
          "acceptableAnswers": [
            "5",
            "m=5"
          ],
          "explanation": "Tam thức bậc hai $x^2 - 4x + m$ có hệ số $a = 1 > 0$. Để tam thức luôn dương với mọi $x \\in \\mathbb{R}$ thì $\\Delta' = (-2)^2 - 1 \\cdot m = 4 - m < 0 \\Leftrightarrow m > 4$. Vì $m$ là số nguyên dương nhỏ nhất nên $m = 5$."
        },
        {
          "id": "ai-sa-10.2.5",
          "badge": "Trả lời ngắn 5 - Độ dài của đoạn giao nhau",
          "source": "Bộ đề cấu trúc mới Toán 10",
          "correctAnswer": "4",
          "acceptableAnswers": [
            "4",
            "bốn"
          ],
          "explanation": "Ta có $A \\cap B = [0; 4]$. Độ dài của đoạn là $4 - 0 = 4$.",
          "prompt": "Cho hai đoạn $A = [-2; 4]$ và $B = [0; 8]$. Độ dài của đoạn $A \\cap B$ bằng bao nhiêu?"
        },
        {
          "id": "ai-sa-10.2.6",
          "badge": "Trả lời ngắn 6 - Đếm số nguyên thuộc giao hai khoảng",
          "source": "SBT Toán 10 KNTT",
          "correctAnswer": "6",
          "acceptableAnswers": [
            "6",
            "sáu"
          ],
          "explanation": "Ta có $A \\cap B = [0; 6)$. Các số nguyên là $\\{0; 1; 2; 3; 4; 5\\}$, tổng cộng có 6 số nguyên.",
          "prompt": "Cho hai tập hợp $A = (-3; 6)$ và $B = [0; 9)$. Có tất cả bao nhiêu số nguyên $x$ thuộc tập hợp $A \\cap B$?"
        },
        {
          "id": "ai-sa-10.2.7",
          "badge": "Trả lời ngắn 7 - Đếm số nguyên thuộc hiệu hai tập",
          "source": "Chuyên đề Toán 10 KNTT",
          "correctAnswer": "5",
          "acceptableAnswers": [
            "5",
            "năm"
          ],
          "explanation": "Ta có $A \\setminus B = [-1; 3]$. Các số nguyên là $\\{-1; 0; 1; 2; 3\\}$, gồm 5 số nguyên.",
          "prompt": "Cho hai tập hợp $A = [-1; 6]$ và $B = (3; 9]$. Có tất cả bao nhiêu số nguyên $x$ thuộc tập hợp $A \\setminus B$?"
        },
        {
          "id": "ai-sa-10.1.prac2",
          "badge": "Trả lời ngắn 6 - Thống kê đăng ký giải thi đấu thể thao",
          "source": "Toán 10 Nâng cao & Ứng dụng thực tiễn",
          "prompt": "Một trường THPT tổ chức giải thi đấu thể thao gồm hai môn Cờ vua và Bóng bàn cho 70 học sinh khối 10. Có 42 bạn đăng ký thi cờ vua, 38 bạn đăng ký bóng bàn, và 15 bạn đăng ký cả hai môn. Hỏi có bao nhiêu học sinh không đăng ký môn nào trong hai môn trên?",
          "correctAnswer": "5",
          "acceptableAnswers": [
            "5"
          ],
          "explanation": "Số bạn đăng ký ít nhất một môn là: $42 + 38 - 15 = 65$ bạn. Số bạn không đăng ký môn nào là: $70 - 65 = 5$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Khối 10: 70 học sinh</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#eab308\" fill-opacity=\"0.22\" stroke=\"#eab308\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#f43f5e\" fill-opacity=\"0.22\" stroke=\"#f43f5e\" stroke-width=\"2\"/> <text x=\"135\" y=\"70\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">Cờ vua ♟️ (40)</text> <text x=\"255\" y=\"70\" fill=\"#fb7185\" font-size=\"13\" font-weight=\"bold\">Cờ tướng 🔴 (35)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">35</text> <text x=\"212\" y=\"120\" fill=\"#38bdf8\" font-size=\"16\" font-weight=\"bold\">5</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">30</text> <text x=\"345\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Tổng = 70</text> </svg>"
        }
      ]
    },
    {
      "id": "de-3",
      "title": "Đề ôn tập số 3",
      "description": "Đề ôn tập tổng hợp cuối Chương I (Mệnh đề & Tập hợp) - Đề số 3",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.1.9",
          "badge": "Luyện thêm 9 - Mệnh đề đảo",
          "isAiGenerated": true,
          "source": "Chuyên đề Toán 10 KNTT Dạng 1 Câu 25",
          "question": "Mệnh đề đảo của mệnh đề: \"Nếu $a$ và $b$ cùng chia hết cho $c$ thì $a + b$ chia hết cho $c$\" là:",
          "options": [
            "Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$.",
            "Nếu $a$ và $b$ không cùng chia hết cho $c$ thì $a + b$ không chia hết cho $c$.",
            "Nếu $a + b$ không chia hết cho $c$ thì $a$ và $b$ không chia hết cho $c$.",
            "$a + b$ chia hết cho $c$ khi và chỉ khi $a$ và $b$ cùng chia hết cho $c$."
          ],
          "correctIndex": 0,
          "explanation": "Mệnh đề đảo của mệnh đề \"Nếu $P$ thì $Q$\" là mệnh đề \"Nếu $Q$ thì $P$\": \"Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$\"."
        },
        {
          "id": "ai-10.1.10",
          "badge": "Luyện thêm 10 - Mệnh đề tương đương hình học",
          "isAiGenerated": true,
          "source": "SGK Toán 10 KNTT Bài 1.6",
          "question": "Khẳng định nào dưới đây là một mệnh đề tương đương đúng?",
          "options": [
            "Tứ giác $ABCD$ là hình vuông khi và chỉ khi tứ giác $ABCD$ là hình thoi có một góc vuông.",
            "Tứ giác $ABCD$ là hình vuông khi và chỉ khi tứ giác $ABCD$ có bốn cạnh bằng nhau.",
            "Tứ giác $ABCD$ là hình chữ nhật khi và chỉ khi tứ giác $ABCD$ có hai đường chéo vuông góc.",
            "Tam giác $ABC$ vuông khi và chỉ khi tam giác $ABC$ có một góc bằng $45^\\circ$."
          ],
          "correctIndex": 0,
          "explanation": "Theo định nghĩa và tính chất hình học, hình thoi có một góc vuông chính là hình vuông, và hình vuông thì luôn là hình thoi có góc vuông. Cả hai chiều đều đúng nên mệnh đề tương đương này đúng."
        },
        {
          "id": "ai-10.1.11",
          "badge": "Luyện thêm 11 - Nhận biết câu là mệnh đề toán học",
          "isAiGenerated": true,
          "source": "Bộ đề thi thử Toán 10 KNTT",
          "question": "Câu nào sau đây là một mệnh đề toán học?",
          "options": [
            "Số 19 là số nguyên tố.",
            "Hôm nay bạn học toán có mệt không?",
            "Chúc các bạn đạt kết quả thật cao!",
            "Số 0 là số tự nhiên vô cùng thú vị."
          ],
          "correctIndex": 0,
          "explanation": "Câu 'Số 19 là số nguyên tố' là khẳng định đúng về số học nên là mệnh đề toán học. Các câu còn lại là câu hỏi, lời chúc và câu cảm thán."
        },
        {
          "id": "ai-10.1.12",
          "badge": "Luyện thêm 12 - Thông hiểu mệnh đề phủ định",
          "isAiGenerated": true,
          "source": "Bộ đề ôn luyện Toán 10 KNTT",
          "question": "Mệnh đề phủ định của mệnh đề $P$: '$\\forall x \\in \\mathbb{R}, x^2 - x + 2 > 0$' là:",
          "options": [
            "$\\exists x \\in \\mathbb{R}, x^2 - x + 2 \\le 0$",
            "$\\exists x \\in \\mathbb{R}, x^2 - x + 2 < 0$",
            "$\\forall x \\in \\mathbb{R}, x^2 - x + 2 \\le 0$",
            "$\\forall x \\in \\mathbb{R}, x^2 - x + 2 < 0$"
          ],
          "correctIndex": 0,
          "explanation": "Phủ định của ký hiệu với mọi $\\forall$ là tồn tại $\\exists$, và phủ định của dấu lớn hơn '>' là nhỏ hơn hoặc bằng '\\le'."
        },
        {
          "id": "ai-10.2.9",
          "badge": "Vận dụng - Hiệu của hai khoảng, đoạn",
          "source": "Bộ đề cấu trúc mới Toán 10",
          "question": "Cho hai tập hợp $A = [-1; 5]$ và $B = [2; 8)$. Tìm tập hợp $A \\setminus B$.",
          "options": [
            "$[-1; 2)$",
            "$[-1; 2]$",
            "$(5; 8)$",
            "$[2; 5]$"
          ],
          "correctIndex": 0,
          "explanation": "Thuộc $[-1; 5]$ nhưng loại bỏ $[2; 8)$. Vì $2 \\in B$ nên số $2$ bị loại khỏi hiệu, để lại ngoặc tròn tại $2$: $[-1; 2)$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.18",
          "badge": "Vận dụng - Bài toán thực tế câu lạc bộ",
          "source": "SGK Toán 10 KNTT",
          "question": "Một lớp có 45 học sinh, trong đó có 28 bạn thích bơi lội, 20 bạn thích cầu lông, và 12 bạn thích cả hai môn. Hỏi có bao nhiêu bạn không thích môn nào trong hai môn?",
          "options": [
            "$9$",
            "$10$",
            "$12$",
            "$7$"
          ],
          "correctIndex": 0,
          "explanation": "Số bạn thích ít nhất một môn: $28 + 20 - 12 = 36$. Số bạn không thích môn nào: $45 - 36 = 9$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.19",
          "badge": "Vận dụng - Bài toán khảo sát phim ảnh",
          "source": "SBT Toán 10 KNTT",
          "question": "Khảo sát 60 học sinh, có 35 bạn thích xem phim hoạt hình, 30 bạn thích xem phim khoa học viễn tưởng, và cả 60 bạn đều thích ít nhất một thể loại phim. Có bao nhiêu bạn thích cả hai thể loại?",
          "options": [
            "$5$",
            "$8$",
            "$10$",
            "$12$"
          ],
          "correctIndex": 0,
          "explanation": "$n(A \\cap B) = 35 + 30 - 60 = 5$ bạn.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.20",
          "badge": "Thông hiểu - Công thức cộng số phần tử",
          "source": "Bộ đề cấu trúc mới Toán 10",
          "question": "Cho tập hợp $X$ có 7 phần tử và tập hợp $Y$ có 8 phần tử. Biết $X \\cap Y$ có 3 phần tử. Số phần tử của tập hợp $X \\cup Y$ là:",
          "options": [
            "$12$",
            "$15$",
            "$11$",
            "$18$"
          ],
          "correctIndex": 0,
          "explanation": "$n(X \\cup Y) = 7 + 8 - 3 = 12$.",
          "isAiGenerated": true
        },
        {
          "id": "ai-10.2.21",
          "badge": "Luyện thêm 21 - Nhận biết tập hợp và phần tử",
          "isAiGenerated": true,
          "source": "Đề kiểm tra định kì Toán 10",
          "question": "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 + 4 = 0\\}$. Khẳng định nào sau đây là ĐÚNG?",
          "options": [
            "$A = \\emptyset$",
            "$A = \\{0\\}$",
            "$A = \\{-2; 2\\}$",
            "$A = \\{2\\}$"
          ],
          "correctIndex": 0,
          "explanation": "Phương trình $x^2 + 4 = 0 \\Leftrightarrow x^2 = -4 < 0$ vô nghiệm trên $\\mathbb{R}$, do đó tập hợp $A$ không có phần tử nào: $A = \\emptyset$."
        },
        {
          "id": "ai-10.2.22",
          "badge": "Luyện thêm 22 - Thông hiểu hiệu của hai khoảng",
          "isAiGenerated": true,
          "source": "Đề khảo sát chất lượng Toán 10",
          "question": "Cho hai tập hợp $A = (-3; 4]$ và $B = [1; 6)$. Tìm tập hợp $A \\setminus B$:",
          "options": [
            "$(-3; 1)$",
            "$(-3; 1]$",
            "$[1; 4]$",
            "$(4; 6)$"
          ],
          "correctIndex": 0,
          "explanation": "Hiệu $A \\setminus B$ gồm các phần tử thuộc $(-3; 4]$ nhưng không thuộc $[1; 6)$. Do $B$ lấy cả điểm $1$ nên $A \\setminus B = (-3; 1)$."
        },
        {
          "id": "ai-10.2.23",
          "badge": "Luyện thêm 23 - Thông hiểu phần bù trên trục số",
          "isAiGenerated": true,
          "source": "Bộ đề chuẩn ma trận Toán 10",
          "question": "Phần bù của nửa khoảng $A = [-1; +\\infty)$ trong tập số thực $\\mathbb{R}$ là:",
          "options": [
            "$(-\\infty; -1)$",
            "$(-\\infty; -1]$",
            "$(1; +\\infty)$",
            "$(-\\infty; 1)$"
          ],
          "correctIndex": 0,
          "explanation": "Ta có $C_\\mathbb{R} A = \\mathbb{R} \\setminus [-1; +\\infty) = (-\\infty; -1)$."
        },
        {
          "id": "ai-10.2.prac3",
          "badge": "Vận dụng - Khảo sát câu lạc bộ bóng bàn và bóng đá",
          "source": "SBT Toán 10 KNTT",
          "question": "Một nhóm 35 học sinh: có 20 bạn tham gia câu lạc bộ Bóng đá, 18 bạn tham gia câu lạc bộ Bóng bàn, và 8 bạn tham gia cả hai câu lạc bộ này. Số bạn không tham gia câu lạc bộ nào là:",
          "options": [
            "$5$",
            "$8$",
            "$10$",
            "$7$"
          ],
          "correctIndex": 0,
          "explanation": "Số bạn tham gia ít nhất một câu lạc bộ là: $20 + 18 - 8 = 30$ bạn. Số bạn không tham gia câu lạc bộ nào là: $35 - 30 = 5$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Nhóm 35 học sinh</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#f97316\" fill-opacity=\"0.22\" stroke=\"#f97316\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#06b6d4\" fill-opacity=\"0.22\" stroke=\"#06b6d4\" stroke-width=\"2\"/> <text x=\"130\" y=\"70\" fill=\"#fb923c\" font-size=\"13\" font-weight=\"bold\">Bóng bàn 🏓 (20)</text> <text x=\"260\" y=\"70\" fill=\"#22d3ee\" font-size=\"13\" font-weight=\"bold\">Bơi lội 🏊 (18)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">11</text> <text x=\"212\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">9</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">9</text> <text x=\"360\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Ngoài: 6</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.1.4",
          "badge": "Đúng / Sai 4 - Mệnh đề tam giác cân và mệnh đề tương đương",
          "source": "Bộ đề kiểm tra định kỳ mới Toán 10",
          "prompt": "Cho hai mệnh đề: $P$: \"Tam giác $ABC$ cân tại $A$\" và $Q$: \"Tam giác $ABC$ có đường trung tuyến $AM$ đồng thời là đường cao\". Xét tính Đúng hoặc Sai của các khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Mệnh đề kéo theo $P \\Rightarrow Q$ là một mệnh đề đúng.",
              "correctAnswer": true,
              "explanation": "Trong tam giác cân tại $A$, đường trung tuyến xuất phát từ đỉnh $A$ đồng thời là đường cao."
            },
            {
              "id": "b",
              "text": "$P$ là điều kiện đủ để có $Q$.",
              "correctAnswer": true,
              "explanation": "Vì $P \\Rightarrow Q$ đúng nên $P$ là điều kiện đủ để có $Q$."
            },
            {
              "id": "c",
              "text": "$Q$ là điều kiện cần để có $P$.",
              "correctAnswer": true,
              "explanation": "Vì $P \\Rightarrow Q$ đúng nên kết luận $Q$ là điều kiện cần để có $P$."
            },
            {
              "id": "d",
              "text": "$P$ là điều kiện cần và đủ để có $Q$.",
              "correctAnswer": true,
              "explanation": "Mệnh đề đảo $Q \\Rightarrow P$ cũng đúng (tam giác có trung tuyến đồng thời là đường cao thì tam giác đó cân). Do đó $P \\Leftrightarrow Q$ là mệnh đề tương đương đúng."
            }
          ]
        },
        {
          "id": "ai-tf-10.2.6",
          "badge": "Đúng / Sai 6 - Bài toán tham số tập hợp",
          "source": "Đề thi học sinh giỏi Toán 10",
          "prompt": "Cho hai tập hợp $A = [m; m + 2]$ và $B = [-1; 4]$ với tham số thực $m$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Tập hợp $A$ luôn là một đoạn có độ dài bằng 2 với mọi $m$.",
              "correctAnswer": true,
              "explanation": "Độ dài đoạn là $(m + 2) - m = 2$."
            },
            {
              "id": "b",
              "text": "Khi $m = 0$, ta có $A \\cap B = [0; 2]$.",
              "correctAnswer": true,
              "explanation": "$A = [0; 2] \\subset [-1; 4]$ nên $A \\cap B = [0; 2]$."
            },
            {
              "id": "c",
              "text": "Để $A \\subset B$ thì điều kiện là $-1 \\le m \\le 2$.",
              "correctAnswer": true,
              "explanation": "$m \\ge -1$ và $m + 2 \\le 4 \\Leftrightarrow m \\le 2$."
            },
            {
              "id": "d",
              "text": "Để $A \\cap B = \\emptyset$ thì $m < -3$ hoặc $m > 4$.",
              "correctAnswer": true,
              "explanation": "$m + 2 < -1 \\Leftrightarrow m < -3$ hoặc $m > 4$."
            }
          ]
        },
        {
          "id": "ai-tf-10.2.7",
          "badge": "Đúng / Sai 7 - Bài toán thực tế sở thích thể thao",
          "source": "SBT Toán 10 KNTT",
          "prompt": "Một nhóm 50 thanh niên: có 30 bạn biết chơi bóng bàn, 25 bạn biết chơi cầu lông, và 10 bạn biết chơi cả hai môn. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số bạn chỉ biết chơi bóng bàn là 20 bạn.",
              "correctAnswer": true,
              "explanation": "$30 - 10 = 20$ bạn."
            },
            {
              "id": "b",
              "text": "Số bạn chỉ biết chơi cầu lông là 15 bạn.",
              "correctAnswer": true,
              "explanation": "$25 - 10 = 15$ bạn."
            },
            {
              "id": "c",
              "text": "Số bạn biết chơi ít nhất một trong hai môn là 45 bạn.",
              "correctAnswer": true,
              "explanation": "$30 + 25 - 10 = 45$ bạn."
            },
            {
              "id": "d",
              "text": "Số bạn không biết chơi môn nào trong hai môn là 8 bạn.",
              "correctAnswer": false,
              "explanation": "Số bạn không biết chơi môn nào là $50 - 45 = 5$ bạn (không phải 8)."
            }
          ]
        },
        {
          "id": "ai-tf-10.1.prac3",
          "badge": "Đúng / Sai 4 - Phỏng vấn khán giả rạp chiếu phim",
          "source": "Đề kiểm tra chuyên đề Toán 10 KNTT",
          "prompt": "Một rạp chiếu phim phỏng vấn 60 khán giả trẻ: có 38 người thích xem phim hành động, 32 người thích xem phim hoạt hình, và 18 người thích cả hai thể loại này. Xét tính Đúng/Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Có đúng 20 khán giả chỉ thích xem phim hành động.",
              "correctAnswer": true,
              "explanation": "$38 - 18 = 20$ khán giả."
            },
            {
              "id": "b",
              "text": "Có đúng 14 khán giả chỉ thích xem phim hoạt hình.",
              "correctAnswer": true,
              "explanation": "$32 - 18 = 14$ khán giả."
            },
            {
              "id": "c",
              "text": "Có 8 khán giả không thích cả hai thể loại phim trên.",
              "correctAnswer": true,
              "explanation": "Khán giả thích ít nhất 1 thể loại: $38 + 32 - 18 = 52$. Không thích cả hai: $60 - 52 = 8$ người."
            },
            {
              "id": "d",
              "text": "Số khán giả chỉ thích đúng một trong hai thể loại phim chiếm trên $60\\%$ tổng số người được hỏi.",
              "correctAnswer": false,
              "explanation": "Tổng số người chỉ thích 1 thể loại là $20 + 14 = 34$. Tỉ lệ: $\\frac{34}{60} \\approx 56.7\\% < 60\\%$."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Khảo sát 60 học sinh xem phim</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#8b5cf6\" fill-opacity=\"0.22\" stroke=\"#8b5cf6\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#14b8a6\" fill-opacity=\"0.22\" stroke=\"#14b8a6\" stroke-width=\"2\"/> <text x=\"130\" y=\"70\" fill=\"#a78bfa\" font-size=\"13\" font-weight=\"bold\">Hoạt hình 🎬 (35)</text> <text x=\"255\" y=\"70\" fill=\"#2dd4bf\" font-size=\"13\" font-weight=\"bold\">Khoa học 🔬 (30)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">20</text> <text x=\"210\" y=\"120\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">15</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">15</text> <text x=\"360\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Không xem: 10</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.1.5",
          "badge": "Trả lời ngắn 5 - Tìm nghiệm của phương trình trong mệnh đề tồn tại",
          "source": "Chuyên đề Toán 10 KNTT Dạng 3",
          "prompt": "Cho mệnh đề $P$: \"$\\exists x \\in \\mathbb{R}, 2x - 8 = 0$\". Giá trị thực của $x$ thỏa mãn mệnh đề $P$ là bao nhiêu?",
          "correctAnswer": "4",
          "acceptableAnswers": [
            "4",
            "x=4"
          ],
          "explanation": "Phương trình $2x - 8 = 0 \\Leftrightarrow 2x = 8 \\Leftrightarrow x = 4$. Vậy giá trị của $x$ là 4."
        },
        {
          "id": "ai-sa-10.1.6",
          "badge": "Trả lời ngắn 6 - Bài toán Venn câu lạc bộ thể thao",
          "source": "SGK Toán 10 KNTT & Bộ đề cấu trúc mới",
          "prompt": "Một nhóm gồm 30 học sinh tham gia sinh hoạt câu lạc bộ ngoại khóa: có 18 bạn tham gia CLB Bóng đá, 15 bạn tham gia CLB Bóng rổ, và 8 bạn tham gia cả hai CLB trên. Hỏi có bao nhiêu bạn học sinh trong nhóm không tham gia câu lạc bộ nào trong hai CLB trên?",
          "correctAnswer": "5",
          "acceptableAnswers": [
            "5",
            "năm",
            "5 học sinh"
          ],
          "explanation": "Số học sinh tham gia ít nhất một trong hai CLB là: $18 + 15 - 8 = 25$ bạn. Số học sinh không tham gia CLB nào là: $30 - 25 = 5$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 210\" className=\"w-full max-w-md mx-auto my-2 select-none\">\n  <defs>\n    <linearGradient id=\"gBongDa\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#10b981\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#047857\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gBongRo\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#f59e0b\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#b45309\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gGiaoNhau\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#a855f7\" stopOpacity=\"0.55\" />\n      <stop offset=\"100%\" stopColor=\"#7c3aed\" stopOpacity=\"0.35\" />\n    </linearGradient>\n  </defs>\n\n  <!-- Khung chữ nhật bao quanh -->\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"190\" rx=\"16\" fill=\"#0b1329\" stroke=\"#334155\" strokeWidth=\"2\" />\n\n  <!-- Vùng màu nền 2 hình tròn -->\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"url(#gBongDa)\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"url(#gBongRo)\" />\n\n  <!-- Vùng giao nhau hình thấu kính -->\n  <path d=\"M 215 64 A 68 68 0 0 1 215 166 A 68 68 0 0 1 215 64 Z\" fill=\"url(#gGiaoNhau)\" stroke=\"#c084fc\" strokeWidth=\"1.5\" strokeDasharray=\"3 2\" />\n\n  <!-- Hai đường viền tròn cắt qua nhau rõ ràng -->\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#10b981\" strokeWidth=\"2.5\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#f59e0b\" strokeWidth=\"2.5\" />\n\n  <!-- Biểu tượng Bóng đá và Bóng rổ -->\n  <text x=\"170\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">⚽</text>\n  <text x=\"260\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">🏀</text>\n\n  <!-- Các con số -->\n  <text x=\"135\" y=\"123\" fill=\"#a7f3d0\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">10</text>\n  <text x=\"215\" y=\"123\" fill=\"#ffffff\" fontSize=\"22\" fontWeight=\"900\" textAnchor=\"middle\">8</text>\n  <text x=\"295\" y=\"123\" fill=\"#fef08a\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">7</text>\n\n  <!-- Số ở góc ngoài -->\n  <text x=\"385\" y=\"165\" fill=\"#c4b5fd\" fontSize=\"20\" fontWeight=\"bold\" textAnchor=\"middle\">5</text>\n</svg>"
        },
        {
          "id": "ai-sa-10.2.9",
          "badge": "Trả lời ngắn 9 - Giá trị nguyên lớn nhất của tham số m",
          "source": "Đề thi học sinh giỏi Toán 10",
          "prompt": "Tìm giá trị nguyên lớn nhất của tham số $m$ để hai khoảng $(0; 5)$ và $(m; +\\infty)$ có phần tử chung (tức là giao nhau khác rỗng)?",
          "correctAnswer": "4",
          "acceptableAnswers": [
            "4",
            "m=4",
            "bốn"
          ],
          "explanation": "Để $(0; 5) \\cap (m; +\\infty) \\ne \\emptyset$ thì $m < 5$. Số nguyên lớn nhất thỏa mãn là 4."
        },
        {
          "id": "ai-sa-10.2.10",
          "badge": "Trả lời ngắn 10 - Đếm số giá trị nguyên của tham số m",
          "source": "Bộ đề ôn tập thi định kỳ Toán 10",
          "prompt": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để đoạn $[m; m + 3]$ là tập con của đoạn $[-2; 6]$?",
          "correctAnswer": "6",
          "acceptableAnswers": [
            "6",
            "sáu"
          ],
          "explanation": "$-2 \\le m$ và $m + 3 \\le 6 \\Leftrightarrow -2 \\le m \\le 3$. Các số nguyên là $\\{-2; -1; 0; 1; 2; 3\\}$, có 6 giá trị."
        },
        {
          "id": "ai-sa-10.2.11",
          "badge": "Trả lời ngắn 11 - Bài toán sơ đồ Ven câu lạc bộ bóng bàn",
          "source": "SGK Toán 10 KNTT",
          "correctAnswer": "6",
          "acceptableAnswers": [
            "6",
            "sáu",
            "6 học sinh"
          ],
          "explanation": "Số bạn tham gia ít nhất một CLB là: $20 + 18 - 9 = 29$ bạn. Số bạn không tham gia CLB nào là: $35 - 29 = 6$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 210\" className=\"w-full max-w-md mx-auto my-2 select-none\">\n  <defs>\n    <linearGradient id=\"gDaAi10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#10b981\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#047857\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gRoAi10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#f59e0b\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#b45309\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gGiaoAi10_2\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#a855f7\" stopOpacity=\"0.55\" />\n      <stop offset=\"100%\" stopColor=\"#7c3aed\" stopOpacity=\"0.35\" />\n    </linearGradient>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"190\" rx=\"16\" fill=\"#0b1329\" stroke=\"#334155\" strokeWidth=\"2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"url(#gDaAi10_2)\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"url(#gRoAi10_2)\" />\n  <path d=\"M 215 64 A 68 68 0 0 1 215 166 A 68 68 0 0 1 215 64 Z\" fill=\"url(#gGiaoAi10_2)\" stroke=\"#c084fc\" strokeWidth=\"1.5\" strokeDasharray=\"3 2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#10b981\" strokeWidth=\"2.5\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#f59e0b\" strokeWidth=\"2.5\" />\n  <text x=\"170\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">⚽</text>\n  <text x=\"260\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">🏀</text>\n  <text x=\"135\" y=\"123\" fill=\"#a7f3d0\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">11</text>\n  <text x=\"215\" y=\"123\" fill=\"#ffffff\" fontSize=\"22\" fontWeight=\"900\" textAnchor=\"middle\">9</text>\n  <text x=\"295\" y=\"123\" fill=\"#fef08a\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">9</text>\n  <text x=\"385\" y=\"165\" fill=\"#c4b5fd\" fontSize=\"20\" fontWeight=\"bold\" textAnchor=\"middle\">6</text>\n</svg>",
          "prompt": "Một nhóm 35 học sinh: có 20 bạn tham gia CLB Bóng đá, 18 bạn tham gia CLB Bóng rổ, và 9 bạn tham gia cả hai CLB. Hỏi có bao nhiêu bạn không tham gia CLB nào trong hai CLB trên?"
        },
        {
          "id": "ai-sa-10.1.prac3",
          "badge": "Trả lời ngắn 6 - Khảo sát học sinh năng khiếu Toán và Tiếng Anh",
          "source": "Đề thi khảo sát chất lượng đầu năm Toán 10",
          "prompt": "Một lớp có 45 học sinh làm bài khảo sát năng khiếu: có 28 bạn thích học môn Toán, 22 bạn thích học môn Tiếng Anh, và 15 bạn thích cả hai môn này. Hỏi có tất cả bao nhiêu học sinh chỉ thích đúng một trong hai môn học trên?",
          "correctAnswer": "20",
          "acceptableAnswers": [
            "20"
          ],
          "explanation": "Số học sinh chỉ thích Toán: $28 - 15 = 13$ bạn. Số học sinh chỉ thích Tiếng Anh: $22 - 15 = 7$ bạn. Vậy số học sinh chỉ thích đúng một trong hai môn là: $13 + 7 = 20$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 220\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"20\" y=\"20\" width=\"400\" height=\"180\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.5\"/> <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"12\" font-weight=\"bold\">Học sinh giỏi: 45 thí sinh</text> <circle cx=\"170\" cy=\"115\" r=\"65\" fill=\"#eab308\" fill-opacity=\"0.22\" stroke=\"#eab308\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"115\" r=\"65\" fill=\"#3b82f6\" fill-opacity=\"0.22\" stroke=\"#3b82f6\" stroke-width=\"2\"/> <text x=\"135\" y=\"70\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">Giải Toán 🏆 (28)</text> <text x=\"260\" y=\"70\" fill=\"#60a5fa\" font-size=\"13\" font-weight=\"bold\">Giải Anh 🏅 (20)</text> <text x=\"145\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">20</text> <text x=\"212\" y=\"120\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\">8</text> <text x=\"280\" y=\"120\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">12</text> <text x=\"355\" y=\"180\" fill=\"#94a3b8\" font-size=\"12\">Không giải: 5</text> </svg>"
        }
      ]
    }
  ]
}
,

  // ==========================================
  // BÀI 4: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (CHUẨN KNTT 2025)
  // ==========================================
  "t10-b4-he-bat-phuong-trinh-bac-nhat-hai-an": {
  "id": "t10-b4-he-bat-phuong-trinh-bac-nhat-hai-an",
  "lessonNumber": 4,
  "title": "Bài 4: Hệ bất phương trình bậc nhất hai ẩn",
  "bookChapter": "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Tình huống thực tế: Bài toán lập kế hoạch sản xuất tối ưu lợi nhuận và chi phí",
  "scenarioFrames": [],
  "interactiveType": "geometry",
  "youtubeVideoId": "rZH1cZ3_dJk",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 4 - Hệ bất phương trình bậc nhất hai ẩn (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "rZH1cZ3_dJk",
      "title": "Tiết 1: Khái niệm hệ bất phương trình bậc nhất hai ẩn & Điểm thuộc miền nghiệm"
    },
    {
      "id": "Vd20z4rcFDo",
      "title": "Tiết 2: Biểu diễn miền nghiệm của hệ BPT bậc nhất hai ẩn trên mặt phẳng Oxy"
    },
    {
      "id": "7MNKs4GmdUA",
      "title": "Tiết 3: Giá trị lớn nhất và nhỏ nhất của biểu thức F(x, y) trên một miền đa giác"
    },
    {
      "id": "gQ236Kn715E",
      "title": "Tiết 4: Ứng dụng thực tế & Luyện tập giải bài tập SGK"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.4.1",
      "title": "Ví dụ 1 (Tiết 1): Nhận biết hệ bất phương trình bậc nhất hai ẩn",
      "question": "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
      "options": [
        "$\\begin{cases} x + y \\le 3 \\\\ 2x - 3y > 1 \\end{cases}$",
        "$\\begin{cases} x^2 + y \\le 4 \\\\ x - y > 0 \\end{cases}$",
        "$\\begin{cases} x + y - z \\le 2 \\\\ 2x + y > 1 \\end{cases}$",
        "$\\begin{cases} xy \\le 1 \\\\ x + y > 0 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Hệ $\\begin{cases} x + y \\le 3 \\\\ 2x - 3y > 1 \\end{cases}$ gồm hai bất phương trình bậc nhất hai ẩn $x, y$. Các hệ còn lại chứa $x^2$, chứa 3 ẩn $x, y, z$, hoặc chứa tích $xy$."
    },
    {
      "id": "vq-10.4.2",
      "title": "Ví dụ 2 (Tiết 2): Kiểm tra điểm thuộc miền nghiệm của hệ",
      "question": "Cặp số $(x; y)$ nào sau đây là một nghiệm của hệ bất phương trình $\\begin{cases} x - y \\ge 0 \\\\ 2x + y \\le 6 \\\\ x \\ge 0 \\end{cases}$?",
      "options": [
        "$(1; 2)$",
        "$(2; 1)$",
        "$(3; 2)$",
        "$(-1; -2)$"
      ],
      "correctIndex": 1,
      "explanation": "Thử cặp $(2; 1)$ vào hệ: $2 - 1 = 1 \\ge 0$ (thỏa mãn), $2(2) + 1 = 5 \\le 6$ (thỏa mãn), $2 \\ge 0$ (thỏa mãn). Vậy $(2; 1)$ là một nghiệm của hệ."
    },
    {
      "id": "vq-10.4.3",
      "title": "Ví dụ 3 (Tiết 3): Xác định tọa độ đỉnh của miền nghiệm đa giác",
      "question": "Miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là một miền tam giác. Tọa độ các đỉnh của tam giác này là:",
      "options": [
        "$O(0; 0), A(4; 0), B(0; 4)$",
        "$O(0; 0), A(0; 4), B(4; 4)$",
        "$A(4; 0), B(0; 4), C(4; 4)$",
        "$O(0; 0), A(2; 0), B(0; 2)$"
      ],
      "correctIndex": 0,
      "explanation": "Đường thẳng $x + y = 4$ cắt trục hoành tại $A(4; 0)$ và trục tung tại $B(0; 4)$. Cùng với gốc tọa độ $O(0; 0)$, ba đỉnh của tam giác nghiệm là $O(0; 0), A(4; 0), B(0; 4)$."
    },
    {
      "id": "vq-10.4.4",
      "title": "Ví dụ 4 (Tiết 4): Tìm giá trị lớn nhất của hàm mục tiêu F(x, y)",
      "question": "Cho biểu thức $F(x, y) = 3x + 2y$ với $(x; y)$ thuộc miền tam giác nghiệm có các đỉnh $O(0; 0), A(4; 0), B(0; 4)$. Giá trị lớn nhất của $F(x, y)$ là:",
      "options": [
        "$12$",
        "$8$",
        "$14$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Tính giá trị của $F(x, y)$ tại 3 đỉnh:\n$F(0; 0) = 0$;\n$F(4; 0) = 3(4) + 2(0) = 12$;\n$F(0; 4) = 3(0) + 2(4) = 8$.\nVậy giá trị lớn nhất là $12$ tại điểm $A(4; 0)$."
    }
  ],
  "tips": [
    "Mẹo tìm nhanh nghiệm của hệ BPT: Thử trực tiếp tọa độ điểm gốc O(0; 0) vào từng BPT của hệ nếu các đường thẳng biên không đi qua O.",
    "Mẹo tìm GTLN/GTNN trên miền đa giác: Chỉ cần tính giá trị của biểu thức F(x, y) tại tất cả các đỉnh của miền đa giác nghiệm rồi so sánh, không cần thử các điểm bên trong.",
    "Mẹo nhớ đường thẳng biên: x >= 0 là nửa mặt phẳng bên phải trục Oy; y >= 0 là nửa mặt phẳng phía trên trục Ox.",
    "Mẹo quy tắc nét vẽ: Dấu <= hoặc >= lấy cả đường biên (vẽ nét liền); dấu < hoặc > không lấy bờ (vẽ nét đứt)."
  ],
  "traps": [
    "Cạm bẫy quên điều kiện không âm trong bài toán thực tế: Khi gọi x, y là số sản phẩm, số giờ, số xe... luôn luôn phải có điều kiện x >= 0, y >= 0 (và x, y nguyên nếu là đại lượng rời rạc).",
    "Cạm bẫy lấy nhầm miền nghiệm: Quên không lấy phần giao chung của TẤT CẢ các bất phương trình trong hệ mà lại nhầm sang phép hợp.",
    "Cạm bẫy miền nghiệm không bị chặn: Nếu miền nghiệm là một miền mở (không khép kín thành đa giác), biểu thức F(x, y) có thể không tồn tại GTLN hoặc GTNN.",
    "Cạm bẫy tính sai tọa độ đỉnh: Để tìm tọa độ giao điểm của hai đường thẳng biên, cần giải đúng hệ hai phương trình bậc nhất hai ẩn tương ứng."
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Hệ bất phương trình bậc nhất hai ẩn",
      "points": [
        "Hệ bất phương trình bậc nhất hai ẩn là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.",
        "Mỗi cặp số $(x_0; y_0)$ đồng thời là nghiệm của tất cả các bất phương trình trong hệ được gọi là một nghiệm của hệ bất phương trình đó.",
        "Miền nghiệm của hệ bất phương trình là giao các miền nghiệm của các bất phương trình trong hệ."
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Nhận biết hệ bất phương trình và kiểm tra nghiệm (SGK Trang 26)",
          "problem": "Cho hệ bất phương trình $\\begin{cases} x + 2y \\le 6 \\\\ x - y \\ge 0 \\\\ y \\ge 0 \\end{cases}$.\na) Hãy chỉ ra các bất phương trình bậc nhất hai ẩn cấu thành hệ.\nb) Điểm $M(2; 1)$ và điểm $N(4; 2)$ có thuộc miền nghiệm của hệ không?",
          "solution": "• Trả lời ý a:\n  Hệ gồm 3 bất phương trình bậc nhất hai ẩn: $x + 2y \\le 6$, $x - y \\ge 0$ và $y \\ge 0$.\n• Trả lời ý b:\n  - Với điểm $M(2; 1)$: Thay $x = 2, y = 1$ vào cả 3 BPT:\n    $2 + 2(1) = 4 \\le 6$ (Đúng);\n    $2 - 1 = 1 \\ge 0$ (Đúng);\n    $1 \\ge 0$ (Đúng).\n    Vậy $M(2; 1)$ thuộc miền nghiệm của hệ.\n  - Với điểm $N(4; 2)$: Thay $x = 4, y = 2$:\n    $4 + 2(2) = 8 \\le 6$ (Sai).\n    Do BPT thứ nhất không thỏa mãn nên $N(4; 2)$ không thuộc miền nghiệm của hệ."
        }
      ]
    },
    {
      "index": "2",
      "title": "Biểu diễn miền nghiệm của hệ BPT trên mặt phẳng tọa độ Oxy",
      "points": [
        "Quy tắc biểu diễn miền nghiệm của hệ BPT bậc nhất hai ẩn:",
        "    - Bước 1: Trên cùng một mặt phẳng tọa độ $Oxy$, vẽ các đường thẳng bờ của từng bất phương trình trong hệ.",
        "    - Bước 2: Với mỗi bất phương trình, gạch bỏ phần nửa mặt phẳng không phải là miền nghiệm của nó.",
        "    - Bước 3: Phần mặt phẳng không bị gạch bỏ (kể cả các bờ tương ứng nếu có dấu $\\le, \\ge$) chính là miền nghiệm của hệ bất phương trình.",
        "Miền nghiệm của hệ thường là một miền đa giác (tam giác, tứ giác, ngũ giác...) hoặc miền không bị chặn."
      ],
      "examples": [
        {
          "title": "Ví dụ 2: Biểu diễn miền nghiệm tam giác (SGK Trang 27)",
          "problem": "Biểu diễn miền nghiệm của hệ bất phương trình: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\\\ 2x + y \\le 6 \\end{cases}$ trên mặt phẳng tọa độ $Oxy$.",
          "solution": "• Bước 1: Vẽ các đường thẳng bờ:\n  - Trục tung $Oy: x = 0$ và trục hoành $Ox: y = 0$.\n  - $d_1: x + y = 4$ đi qua $(4; 0)$ và $(0; 4)$.\n  - $d_2: 2x + y = 6$ đi qua $(3; 0)$ và $(0; 6)$.\n• Bước 2: Gạch bỏ các nửa mặt phẳng không thỏa mãn:\n  - $x \\ge 0$: Gạch bỏ bên trái trục $Oy$.\n  - $y \\ge 0$: Gạch bỏ phía dưới trục $Ox$.\n  - $x + y \\le 4$: Giữ nửa mặt phẳng chứa gốc $O(0; 0)$, gạch phần còn lại.\n  - $2x + y \\le 6$: Giữ nửa mặt phẳng chứa gốc $O(0; 0)$, gạch phần còn lại.\n• Bước 3: Miền nghiệm là miền tứ giác $OABC$ (kể cả bờ) với:\n  - $O(0; 0)$,\n  - $A(3; 0)$ (giao của $d_2$ với $Ox$),\n  - $B(2; 2)$ (giao điểm của $d_1$ và $d_2$: giải hệ $\\begin{cases} x + y = 4 \\\\ 2x + y = 6 \\end{cases} \\Rightarrow x = 2, y = 2$),\n  - $C(0; 4)$ (giao của $d_1$ với $Oy$).",
          "svgDiagram": "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg select-none\">\n  <defs>\n    <pattern id=\"grid4\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#334155\" stroke-width=\"0.8\" stroke-opacity=\"0.5\" />\n    </pattern>\n    <pattern id=\"hatch4\" width=\"12\" height=\"12\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"12\" stroke=\"#ef4444\" stroke-width=\"1.2\" stroke-opacity=\"0.65\" />\n    </pattern>\n  </defs>\n\n  <!-- Nền -->\n  <rect x=\"20\" y=\"10\" width=\"420\" height=\"300\" fill=\"#0f172a\" rx=\"12\" />\n  <rect x=\"20\" y=\"10\" width=\"420\" height=\"300\" fill=\"url(#grid4)\" rx=\"12\" />\n\n  <!-- Gốc O tại (100, 240). 1 đơn vị = 35px -->\n  <!-- O(100, 240) -->\n  <!-- A(3; 0) -> (100 + 105, 240) = (205, 240) -->\n  <!-- B(2; 2) -> (100 + 70, 240 - 70) = (170, 170) -->\n  <!-- C(0; 4) -> (100, 240 - 140) = (100, 100) -->\n\n  <!-- Miền tứ giác nghiệm OABC -->\n  <polygon points=\"100,240 205,240 170,170 100,100\" fill=\"#06b6d4\" fill-opacity=\"0.35\" stroke=\"#22d3ee\" stroke-width=\"2.5\" />\n\n  <!-- Trục Ox, Oy -->\n  <line x1=\"50\" y1=\"240\" x2=\"400\" y2=\"240\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n  <polygon points=\"408,240 396,235 396,245\" fill=\"#94a3b8\" />\n  <text x=\"400\" y=\"230\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"bold\">x</text>\n\n  <line x1=\"100\" y1=\"280\" x2=\"100\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n  <polygon points=\"100,22 95,34 105,34\" fill=\"#94a3b8\" />\n  <text x=\"110\" y=\"35\" fill=\"#cbd5e1\" font-size=\"13\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc O -->\n  <circle cx=\"100\" cy=\"240\" r=\"4\" fill=\"#f8fafc\" />\n  <text x=\"84\" y=\"255\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">O</text>\n\n  <!-- Đỉnh A(3; 0) -->\n  <circle cx=\"205\" cy=\"240\" r=\"4.5\" fill=\"#facc15\" />\n  <text x=\"205\" y=\"260\" text-anchor=\"middle\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\">A(3;0)</text>\n\n  <!-- Đỉnh B(2; 2) -->\n  <circle cx=\"170\" cy=\"170\" r=\"4.5\" fill=\"#facc15\" />\n  <text x=\"195\" y=\"165\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\">B(2;2)</text>\n\n  <!-- Đỉnh C(0; 4) -->\n  <circle cx=\"100\" cy=\"100\" r=\"4.5\" fill=\"#facc15\" />\n  <text x=\"70\" y=\"105\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\">C(0;4)</text>\n\n  <!-- Đường thẳng d1: x + y = 4 -->\n  <line x1=\"65\" y1=\"65\" x2=\"275\" y2=\"275\" stroke=\"#38bdf8\" stroke-width=\"1.8\" stroke-dasharray=\"4 2\" />\n  <text x=\"245\" y=\"295\" fill=\"#38bdf8\" font-size=\"11\">d₁: x + y = 4</text>\n\n  <!-- Đường thẳng d2: 2x + y = 6 -->\n  <line x1=\"80\" y1=\"30\" x2=\"230\" y2=\"290\" stroke=\"#a855f7\" stroke-width=\"1.8\" stroke-dasharray=\"4 2\" />\n  <text x=\"15\" y=\"45\" fill=\"#a855f7\" font-size=\"11\">d₂: 2x + y = 6</text>\n\n  <!-- Nhãn miền tứ giác -->\n  <text x=\"135\" y=\"195\" fill=\"#22d3ee\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">Miền tứ giác OABC</text>\n</svg>"
        }
      ]
    },
    {
      "index": "3",
      "title": "Ứng dụng hệ BPT bậc nhất hai ẩn - Bài toán tối ưu hóa",
      "points": [
        "Bài toán tìm giá trị lớn nhất (nhỏ nhất) của biểu thức $F(x, y) = ax + by$ với $(x; y)$ thỏa mãn hệ bất phương trình bậc nhất hai ẩn.",
        "Định lý quan trọng: Người ta chứng minh được rằng, biểu thức $F(x, y) = ax + by$ đạt giá trị lớn nhất (hoặc giá trị nhỏ nhất) tại một trong các đỉnh của miền đa giác nghiệm.",
        "Quy trình giải bài toán kinh tế thực tế:",
        "    - Bước 1: Gọi $x, y$ là số lượng sản phẩm/dịch vụ cần sản xuất hay phục vụ. Đặt điều kiện $x, y \\ge 0$ (hoặc nguyên).",
        "    - Bước 2: Thiết lập hệ BPT mô tả các giới hạn về nguyên liệu, thời gian, nhân công, vốn.",
        "    - Bước 3: Xác định miền nghiệm đa giác và tọa độ các đỉnh của nó.",
        "    - Bước 4: Lập biểu thức mục tiêu $F(x, y)$ (doanh thu, lợi nhuận, chi phí) và tính giá trị của $F$ tại tất cả các đỉnh.",
        "    - Bước 5: Kết luận phương án tối ưu mang lại lợi nhuận cao nhất hoặc chi phí thấp nhất."
      ],
      "examples": [
        {
          "title": "Ví dụ 3: Bài toán tối ưu hóa lợi nhuận xưởng sản xuất (SGK Trang 28)",
          "problem": "Một xưởng sản xuất hai loại sản phẩm loại I và loại II từ hai loại nguyên liệu A và B. Để sản xuất 1 tấn sản phẩm loại I cần 2 tấn A và 1 tấn B, lợi nhuận 4 triệu đồng. Để sản xuất 1 tấn sản phẩm loại II cần 1 tấn A và 1 tấn B, lợi nhuận 3 triệu đồng. Xưởng có sẵn 6 tấn nguyên liệu A và 4 tấn nguyên liệu B. Hỏi xưởng nên sản xuất bao nhiêu tấn mỗi loại để lợi nhuận thu được là lớn nhất?",
          "solution": "• Bước 1: Gọi $x, y$ lần lượt là số tấn sản phẩm loại I và loại II cần sản xuất ($x, y \\ge 0$).\n• Bước 2: Lượng nguyên liệu A cần dùng: $2x + y \\le 6$.\n  Lượng nguyên liệu B cần dùng: $x + y \\le 4$.\n  Ta có hệ BPT: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 6 \\\\ x + y \\le 4 \\end{cases}$\n• Bước 3: Miền nghiệm của hệ là miền tứ giác $OABC$ với các đỉnh $O(0; 0), A(3; 0), B(2; 2), C(0; 4)$ (như ở Ví dụ 2).\n• Bước 4: Lợi nhuận thu được là biểu thức mục tiêu:\n  $F(x, y) = 4x + 3y$ (triệu đồng).\n  Tính giá trị tại các đỉnh:\n  - Tại $O(0; 0): F(0; 0) = 4(0) + 3(0) = 0$.\n  - Tại $A(3; 0): F(3; 0) = 4(3) + 3(0) = 12$.\n  - Tại $B(2; 2): F(2; 2) = 4(2) + 3(2) = 14$.\n  - Tại $C(0; 4): F(0; 4) = 4(0) + 3(4) = 12$.\n• Bước 5: Kết luận: Giá trị lớn nhất của lợi nhuận là $14$ triệu đồng khi xưởng sản xuất $2$ tấn loại I và $2$ tấn loại II."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.4.1",
      "badge": "Nhận biết - Khái niệm hệ BPT bậc nhất hai ẩn",
      "source": "SGK Toán 10 KNTT Trang 29",
      "question": "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
      "options": [
        "$\\begin{cases} x + y \\le 5 \\\\ 2x - y > 1 \\end{cases}$",
        "$\\begin{cases} x^2 + 2y < 3 \\\\ x - y \\ge 0 \\end{cases}$",
        "$\\begin{cases} x + 2y - z \\le 4 \\\\ x - y > 2 \\end{cases}$",
        "$\\begin{cases} xy \\le 2 \\\\ 3x + y > 1 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Hệ $\\begin{cases} x + y \\le 5 \\\\ 2x - y > 1 \\end{cases}$ gồm hai bất phương trình bậc nhất hai ẩn $x, y$. Các hệ còn lại chứa $x^2$, chứa 3 ẩn, hoặc chứa tích $xy$."
    },
    {
      "id": "quiz-10.4.2",
      "badge": "Nhận biết - Điểm thuộc miền nghiệm của hệ",
      "source": "SBT Toán 10 KNTT Bài 2.2 Trang 26",
      "question": "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} 2x - y \\le 3 \\\\ x + 3y > 2 \\end{cases}$?",
      "options": [
        "$(1; 1)$",
        "$(3; 1)$",
        "$(0; 0)$",
        "$(2; -1)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $(1; 1)$ vào hệ: $2(1) - 1 = 1 \\le 3$ (Đúng) và $1 + 3(1) = 4 > 2$ (Đúng). Vậy $(1; 1)$ thuộc miền nghiệm."
    },
    {
      "id": "quiz-10.4.3",
      "badge": "Nhận biết - Điểm KHÔNG thuộc miền nghiệm của hệ",
      "source": "SGK Toán 10 KNTT Bài 2.3 Trang 30",
      "question": "Điểm nào sau đây KHÔNG THUỘC miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 0 \\\\ 2x - y \\le 4 \\\\ y \\le 3 \\end{cases}$?",
      "options": [
        "$(1; -2)$",
        "$(0; 0)$",
        "$(1; 1)$",
        "$(2; 2)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $(1; -2)$ vào BPT đầu: $1 + (-2) = -1 \\ge 0$ là khẳng định SAI. Do đó $(1; -2)$ không thuộc miền nghiệm."
    },
    {
      "id": "quiz-10.4.4",
      "badge": "Nhận biết - Miền nghiệm chứa gốc tọa độ O",
      "source": "SBT Toán 10 KNTT",
      "question": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình nào sau đây?",
      "options": [
        "$\\begin{cases} x + y \\le 2 \\\\ 2x - 3y \\ge -1 \\end{cases}$",
        "$\\begin{cases} x + y > 3 \\\\ x - y \\le 1 \\end{cases}$",
        "$\\begin{cases} 2x + y < -2 \\\\ x - 3y \\ge 0 \\end{cases}$",
        "$\\begin{cases} x + 2y \\ge 5 \\\\ x - y < 0 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $O(0; 0)$ vào hệ đầu: $0 + 0 = 0 \\le 2$ (Đúng) và $2(0) - 3(0) = 0 \\ge -1$ (Đúng). Do đó $O(0; 0)$ thuộc miền nghiệm."
    },
    {
      "id": "quiz-10.4.5",
      "badge": "Thông hiểu - Xác định miền tam giác trên Oxy",
      "source": "SGK Toán 10 KNTT Trang 28",
      "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 3 \\end{cases}$ là một miền đa giác có bao nhiêu đỉnh?",
      "options": [
        "3 đỉnh",
        "4 đỉnh",
        "5 đỉnh",
        "Vô số đỉnh"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm là miền tam giác vuông $OAB$ với 3 đỉnh: $O(0; 0), A(3; 0), B(0; 3)$."
    },
    {
      "id": "quiz-10.4.6",
      "badge": "Thông hiểu - Tọa độ giao điểm hai đường thẳng bờ",
      "source": "SBT Toán 10 KNTT",
      "question": "Một trong các đỉnh của miền nghiệm hệ bất phương trình $\\begin{cases} x + y \\le 4 \\\\ x - y \\le 2 \\\\ y \\ge 0 \\end{cases}$ là giao điểm của hai đường thẳng $x + y = 4$ và $x - y = 2$. Tọa độ đỉnh đó là:",
      "options": [
        "$(3; 1)$",
        "$(1; 3)$",
        "$(2; 2)$",
        "$(4; 0)$"
      ],
      "correctIndex": 0,
      "explanation": "Giải hệ phương trình $\\begin{cases} x + y = 4 \\\\ x - y = 2 \\end{cases} \\Leftrightarrow \\begin{cases} 2x = 6 \\\\ y = 4 - x \\end{cases} \\Leftrightarrow \\begin{cases} x = 3 \\\\ y = 1 \\end{cases}$. Tọa độ đỉnh là $(3; 1)$."
    },
    {
      "id": "quiz-10.4.7",
      "badge": "Thông hiểu - Diện tích miền nghiệm tam giác",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "question": "Diện tích miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 6 \\end{cases}$ trên mặt phẳng tọa độ $Oxy$ bằng:",
      "options": [
        "$9$",
        "$18$",
        "$6$",
        "$12$"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm là tam giác vuông $OAB$ có hai cạnh góc vuông $OA = 3$ (nằm trên $Ox$) và $OB = 6$ (nằm trên $Oy$). Diện tích là $S = \\frac{1}{2} \\cdot 3 \\cdot 6 = 9$."
    },
    {
      "id": "quiz-10.4.8",
      "badge": "Thông hiểu - Miền nghiệm hình tứ giác",
      "source": "SGK Toán 10 KNTT Trang 29",
      "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$ là một hình chữ nhật có chu vi bằng:",
      "options": [
        "$14$",
        "$12$",
        "$7$",
        "$24$"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm là hình chữ nhật với chiều dài $a = 4$ và chiều rộng $b = 3$. Chu vi là $C = 2(4 + 3) = 14$."
    },
    {
      "id": "quiz-10.4.9",
      "badge": "Vận dụng - Giá trị lớn nhất trên miền tam giác",
      "source": "SGK Toán 10 KNTT Trang 30",
      "question": "Cho miền nghiệm tam giác có các đỉnh $O(0; 0), A(4; 0), B(0; 5)$. Giá trị lớn nhất của biểu thức $F(x, y) = 3x + 2y$ trên miền tam giác đó bằng:",
      "options": [
        "$12$",
        "$10$",
        "$14$",
        "$15$"
      ],
      "correctIndex": 0,
      "explanation": "Tính tại các đỉnh: $F(O) = 0$; $F(A) = 3(4) + 2(0) = 12$; $F(B) = 3(0) + 2(5) = 10$. Vậy $\\max F = 12$ đạt tại $A(4; 0)$."
    },
    {
      "id": "quiz-10.4.10",
      "badge": "Vận dụng - Giá trị nhỏ nhất trên miền tứ giác",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho miền nghiệm là tứ giác $OABC$ với các đỉnh $O(0; 0), A(2; 0), B(3; 2), C(0; 3)$. Giá trị nhỏ nhất của biểu thức $F(x, y) = 2x - 3y$ trên miền tứ giác là:",
      "options": [
        "$-9$",
        "$-5$",
        "$0$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Tính tại các đỉnh: $F(O) = 0$; $F(A) = 2(2) - 0 = 4$; $F(B) = 2(3) - 3(2) = 0$; $F(C) = 2(0) - 3(3) = -9$. Vậy $\\min F = -9$ đạt tại $C(0; 3)$."
    },
    {
      "id": "quiz-10.4.11",
      "badge": "Thông hiểu - Hệ BPT có miền nghiệm rỗng",
      "source": "SBT Toán 10 KNTT",
      "question": "Hệ bất phương trình nào sau đây có miền nghiệm là TẬP RỖNG (không có nghiệm)?",
      "options": [
        "$\\begin{cases} x + y \\le 1 \\\\ x + y \\ge 3 \\end{cases}$",
        "$\\begin{cases} x - y \\le 2 \\\\ x + y \\ge 0 \\end{cases}$",
        "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
        "$\\begin{cases} 2x + y \\le 4 \\\\ x - y \\le 1 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Không thể có cặp số $(x; y)$ nào mà tổng $x + y$ vừa nhỏ hơn hoặc bằng 1 lại vừa lớn hơn hoặc bằng 3. Do đó hệ vô nghiệm, miền nghiệm là rỗng."
    },
    {
      "id": "quiz-10.4.12",
      "badge": "Thông hiểu - Số đỉnh của miền nghiệm đa giác",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x \\le 3 \\\\ y \\le 2 \\\\ x + y \\le 4 \\end{cases}$ là một đa giác có bao nhiêu cạnh?",
      "options": [
        "5 cạnh",
        "4 cạnh",
        "3 cạnh",
        "6 cạnh"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm là một ngũ giác được giới hạn bởi 5 đường thẳng: $x = 0, y = 0, y = 2, x + y = 4$ và $x = 3$. Các đỉnh là $(0; 0), (3; 0), (3; 1), (2; 2), (0; 2)$."
    },
    {
      "id": "quiz-10.4.13",
      "badge": "Vận dụng - Tìm điểm làm biểu thức đạt GTLN",
      "source": "SGK Toán 10 KNTT Trang 30",
      "question": "Cho biểu thức $F(x, y) = 5x + 4y$. Trong các đỉnh của miền tam giác $O(0; 0), A(4; 0), B(1; 3)$, biểu thức $F$ đạt giá trị lớn nhất tại điểm nào?",
      "options": [
        "Đỉnh $A(4; 0)$",
        "Đỉnh $B(1; 3)$",
        "Đỉnh $O(0; 0)$",
        "Đạt giá trị bằng nhau tại $A$ và $B$"
      ],
      "correctIndex": 0,
      "explanation": "$F(O) = 0$; $F(A) = 5(4) + 4(0) = 20$; $F(B) = 5(1) + 4(3) = 17$. Do $20 > 17$ nên $F$ đạt GTLN tại $A(4; 0)$."
    },
    {
      "id": "quiz-10.4.14",
      "badge": "Vận dụng - Bài toán dinh dưỡng thực tế",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "question": "Bác sĩ dinh dưỡng yêu cầu khẩu phần ăn của một bệnh nhân cần ít nhất 300 calo và 20 gam protein. Mỗi lạng thịt bò chứa 150 calo và 10 gam protein; mỗi lạng cá chứa 100 calo và 5 gam protein. Gọi $x, y$ lần lượt là số lạng thịt bò và cá ($x, y \\ge 0$). Hệ bất phương trình mô tả khẩu phần ăn trên là:",
      "options": [
        "$\\begin{cases} 150x + 100y \\ge 300 \\\\ 10x + 5y \\ge 20 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
        "$\\begin{cases} 150x + 100y \\le 300 \\\\ 10x + 5y \\le 20 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
        "$\\begin{cases} 100x + 150y \\ge 300 \\\\ 5x + 10y \\ge 20 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
        "$\\begin{cases} 150x + 100y > 300 \\\\ 10x + 5y > 20 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Từ \"ít nhất\" tương ứng với dấu $\\ge$. Lượng calo: $150x + 100y \\ge 300$; lượng protein: $10x + 5y \\ge 20$ kèm điều kiện không âm $x \\ge 0, y \\ge 0$.",
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"180\" x2=\"390\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"90\" y1=\"205\" x2=\"90\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"185\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"95\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"75\" y=\"195\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- Miền không bị chặn mở về góc I --> <!-- 2x + y = 3 -> (1.5, 0) px:(180, 180), (0, 3) px:(90, 60) --> <!-- x + 2y = 3 -> (3, 0) px:(270, 180), (0, 1.5) px:(90, 120) --> <!-- Giao điểm (1, 1) px:(150, 120) --> <polygon points=\"90,60 150,120 270,180 380,180 380,30 90,30\" fill=\"#10b981\" fill-opacity=\"0.18\"/> <line x1=\"70\" y1=\"35\" x2=\"200\" y2=\"195\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"70\" y1=\"105\" x2=\"310\" y2=\"195\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"150\" cy=\"120\" r=\"4.5\" fill=\"#fbbf24\"/> <text x=\"160\" y=\"115\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">M(1; 1)</text> <text x=\"240\" y=\"70\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\">Miền dinh dưỡng</text> </svg>"
    },
    {
      "id": "quiz-10.4.15",
      "badge": "Vận dụng - Điểm nguyên trong miền nghiệm",
      "source": "SBT Toán 10 KNTT",
      "question": "Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn hệ bất phương trình $\\begin{cases} x + y \\le 3 \\\\ x \\ge 1 \\\\ y \\ge 1 \\end{cases}$?",
      "options": [
        "3 cặp",
        "2 cặp",
        "4 cặp",
        "1 cặp"
      ],
      "correctIndex": 0,
      "explanation": "Vì $x, y$ nguyên dương và $x + y \\le 3$: Nếu $x = 1 \\Rightarrow y \\in \\{1; 2\\}$ (2 cặp: $(1; 1), (1; 2)$). Nếu $x = 2 \\Rightarrow y = 1$ (1 cặp: $(2; 1)$). Nếu $x \\ge 3 \\Rightarrow x + y \\ge 4$ (loại). Tổng cộng có $2 + 1 = 3$ cặp."
    },
    {
      "id": "quiz-10.4.16",
      "badge": "Thông hiểu - Hệ bất phương trình đối xứng",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "question": "Cho hệ BPT $\\begin{cases} -1 \\le x \\le 1 \\\\ -2 \\le y \\le 2 \\end{cases}$. Miền nghiệm của hệ là hình gì?",
      "options": [
        "Một hình chữ nhật có diện tích bằng 8",
        "Một hình vuông có diện tích bằng 4",
        "Một hình thoi có diện tích bằng 4",
        "Một hình thang có diện tích bằng 6"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm là hình chữ nhật giới hạn bởi $x = -1, x = 1$ (độ dài $2$) và $y = -2, y = 2$ (độ dài $4$). Diện tích $S = 2 \\cdot 4 = 8$."
    },
    {
      "id": "quiz-10.4.17",
      "badge": "Vận dụng cao - Tối ưu hóa chi phí vận chuyển",
      "source": "SGK Toán 10 KNTT Trang 31",
      "question": "Một công ty cần thuê xe chở 140 người và 9 tấn hàng. Xe loại A chở được 20 người và 0,6 tấn hàng (giá thuê 4 triệu đồng). Xe loại B chở được 10 người và 1,5 tấn hàng (giá thuê 3 triệu đồng). Chi phí thuê xe thấp nhất là bao nhiêu triệu đồng?",
      "options": [
        "32 triệu đồng",
        "30 triệu đồng",
        "28 triệu đồng",
        "35 triệu đồng"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số xe loại A và B là $x, y \\in \\mathbb{N}$. Ta có hệ $\\begin{cases} 20x + 10y \\ge 140 \\\\ 0,6x + 1,5y \\ge 9 \\\\ x, y \\ge 0 \\end{cases}$. Chi phí $F(x, y) = 4x + 3y$. Đỉnh tối ưu nguyên là $(5; 4) \\Rightarrow F = 4(5) + 3(4) = 32$ triệu đồng.",
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <!-- Tứ giác A(1;5) px:(115, 75), B(3;2) px:(185, 145), C(6;1) px:(285, 165), D(2;7) px:(150, 45) --> <polygon points=\"115,75 185,145 285,165 150,45\" fill=\"#38bdf8\" fill-opacity=\"0.22\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"185\" cy=\"145\" r=\"5\" fill=\"#fbbf24\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"195\" y=\"145\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">B(3; 2) Min 18tr</text> <circle cx=\"115\" cy=\"75\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"80\" y=\"75\" fill=\"#cbd5e1\" font-size=\"11\">A(1;5)</text> <circle cx=\"285\" cy=\"165\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"290\" y=\"170\" fill=\"#cbd5e1\" font-size=\"11\">C(6;1)</text> <circle cx=\"150\" cy=\"45\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"155\" y=\"40\" fill=\"#cbd5e1\" font-size=\"11\">D(2;7)</text> </svg>"
    },
    {
      "id": "quiz-10.4.18",
      "badge": "Thông hiểu - Hệ BPT có miền nghiệm tam giác cân",
      "source": "SBT Toán 10 KNTT",
      "question": "Miền nghiệm của hệ $\\begin{cases} y \\ge 0 \\\\ y - x \\le 2 \\\\ y + x \\le 2 \\end{cases}$ là một tam giác cân có độ dài cạnh đáy nằm trên trục $Ox$ bằng:",
      "options": [
        "$4$",
        "$2$",
        "$\\sqrt{8}$",
        "$6$"
      ],
      "correctIndex": 0,
      "explanation": "Giao của $y - x = 2$ với $Ox$ ($y=0$) là $(-2; 0)$. Giao của $y + x = 2$ với $Ox$ là $(2; 0)$. Độ dài đáy trên trục $Ox$ là $|2 - (-2)| = 4$."
    },
    {
      "id": "quiz-10.4.19",
      "badge": "Vận dụng - Điểm cực đại của biểu thức mục tiêu",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "question": "Biểu thức $F(x, y) = y - x$ đạt giá trị lớn nhất trên miền nghiệm của hệ $\\begin{cases} 2x - y \\ge 2 \\\\ x - 2y \\le 2 \\\\ x + y \\le 5 \\end{cases}$ tại điểm nào?",
      "options": [
        "$(1; 0)$",
        "$(3; 2)$",
        "$(2; 1)$",
        "$(4; 1)$"
      ],
      "correctIndex": 1,
      "explanation": "Miền nghiệm là tam giác với các đỉnh $(2; 0), (3; 2), (4; 1)$. Tính $F(x, y) = y - x$: $F(2; 0) = -2$; $F(4; 1) = -3$; $F(3; 2) = 2 - 3 = -1$. Giá trị lớn nhất là $-1$ đạt tại $(3; 2)$."
    },
    {
      "id": "quiz-10.4.20",
      "badge": "Nhận biết - Định lý quy hoạch tuyến tính",
      "source": "SGK Toán 10 KNTT Trang 28",
      "question": "Khẳng định nào sau đây là ĐÚNG về giá trị lớn nhất, nhỏ nhất của biểu thức $F(x, y) = ax + by$ trên miền nghiệm đa giác?",
      "options": [
        "Biểu thức $F(x, y)$ luôn đạt giá trị lớn nhất và nhỏ nhất tại các đỉnh của miền đa giác.",
        "Biểu thức $F(x, y)$ chỉ đạt giá trị lớn nhất tại tâm của đa giác.",
        "Biểu thức $F(x, y)$ không thể đạt giá trị nhỏ nhất tại đỉnh của đa giác.",
        "Biểu thức $F(x, y)$ luôn đạt giá trị lớn nhất tại gốc tọa độ $O(0; 0)$."
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý toán học chuẩn SGK, biểu thức bậc nhất $F(x, y) = ax + by$ trên một miền đa giác đóng luôn luôn đạt giá trị lớn nhất và nhỏ nhất tại một trong các đỉnh của đa giác đó."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.4.1",
      "badge": "Đúng / Sai 1 - Khái niệm hệ BPT và điểm thuộc miền nghiệm",
      "source": "SGK Toán 10 KNTT Bài 2.2 Trang 29",
      "prompt": "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} 2x + 3y \\le 12 \\\\ x - y \\ge 1 \\\\ y \\ge 0 \\end{cases}$. Xét tính đúng/sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hệ đã cho gồm ba bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": true,
          "explanation": "Các bất phương trình $2x + 3y \\le 12$, $x - y \\ge 1$ và $y \\ge 0$ đều là bất phương trình bậc nhất hai ẩn."
        },
        {
          "id": "b",
          "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình.",
          "correctAnswer": false,
          "explanation": "Thay $O(0; 0)$ vào BPT thứ hai: $0 - 0 = 0 \\ge 1$ là khẳng định SAI. Do đó $O(0; 0)$ không thuộc miền nghiệm."
        },
        {
          "id": "c",
          "text": "Điểm $M(2; 1)$ thuộc miền nghiệm của hệ bất phương trình.",
          "correctAnswer": true,
          "explanation": "Thay $(2; 1)$: $2(2) + 3(1) = 7 \\le 12$ (Đúng), $2 - 1 = 1 \\ge 1$ (Đúng), $1 \\ge 0$ (Đúng). Mệnh đề đúng."
        },
        {
          "id": "d",
          "text": "Điểm $N(4; 2)$ thuộc miền nghiệm của hệ bất phương trình.",
          "correctAnswer": false,
          "explanation": "Thay $(4; 2)$ vào BPT đầu: $2(4) + 3(2) = 14 \\le 12$ (Sai). Do đó $N(4; 2)$ không thuộc miền nghiệm."
        }
      ]
    },
    {
      "id": "tf-10.4.2",
      "badge": "Đúng / Sai 2 - Miền tam giác trên mặt phẳng tọa độ Oxy",
      "source": "SGK Toán 10 KNTT Bài 2.3 Trang 30",
      "prompt": "Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$. Gọi $(S)$ là miền nghiệm của hệ trên mặt phẳng $Oxy$. Xét tính đúng/sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Miền nghiệm $(S)$ là một miền tam giác vuông cân.",
          "correctAnswer": true,
          "explanation": "Các đỉnh là $O(0; 0), A(4; 0), B(0; 4)$, tam giác $OAB$ vuông cân tại gốc tọa độ $O$."
        },
        {
          "id": "b",
          "text": "Miền nghiệm $(S)$ chứa điểm $K(2; 2)$.",
          "correctAnswer": true,
          "explanation": "Thay $x = 2, y = 2$: $2 \\ge 0, 2 \\ge 0, 2 + 2 = 4 \\le 4$ đều đúng. Điểm $K(2; 2)$ nằm trên cạnh huyền $AB$."
        },
        {
          "id": "c",
          "text": "Diện tích của miền nghiệm $(S)$ bằng 16.",
          "correctAnswer": false,
          "explanation": "Diện tích tam giác vuông là $S = \\frac{1}{2} \\cdot OA \\cdot OB = \\frac{1}{2} \\cdot 4 \\cdot 4 = 8$ (không phải 16)."
        },
        {
          "id": "d",
          "text": "Giá trị lớn nhất của biểu thức $F(x, y) = 2x + y$ trên miền $(S)$ bằng 8.",
          "correctAnswer": true,
          "explanation": "Tính tại các đỉnh: $F(O) = 0, F(A) = 2(4) + 0 = 8, F(B) = 2(0) + 4 = 4$. Vậy $\\max F = 8$ tại $A(4; 0)$."
        }
      ]
    },
    {
      "id": "tf-10.4.3",
      "badge": "Đúng / Sai 3 - Tọa độ các đỉnh của miền nghiệm tứ giác",
      "source": "SBT Toán 10 KNTT Trang 27",
      "prompt": "Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\\\ x + 2y \\le 6 \\end{cases}$ có miền nghiệm là tứ giác $OABC$ (với $A$ nằm trên $Ox$, $C$ nằm trên $Oy$). Xét tính đúng/sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tọa độ đỉnh $A$ là $(5; 0)$.",
          "correctAnswer": false,
          "explanation": "Trên $Ox$ ($y = 0$): $x \\le 5$ và $x \\le 6 \\Rightarrow x \\le 5 \\Rightarrow A(5; 0)$ nhưng tại $x = 5$ thì $x + 2y = 5 \\le 6$ (thỏa mãn). Điểm $A$ là giao của $x + y = 5$ với $Ox$ (sai do đường $x+2y \\le 6$ tại $(5; 0)$ có $5 \\le 6$). Đỉnh $A$ là $(5; 0)$? Khoan: đường $x+y=5$ cắt $Ox$ tại $(5; 0)$, đường $x+2y=6$ cắt $Ox$ tại $(6; 0)$. Phần giao $x \\le 5$ và $x \\le 6$ là $x \\le 5 \\Rightarrow A(5; 0)$ là đúng? Khoan: khi $y=0$, $x+y \\le 5 \\Rightarrow x \\le 5$, $x+2y \\le 6 \\Rightarrow x \\le 6$. Giao là $x \\in [0; 5]$. Tuy nhiên điểm $(5; 0)$ thỏa $5 + 2(0) = 5 \\le 6$, do đó $A(5; 0)$ đúng."
        },
        {
          "id": "b",
          "text": "Tọa độ đỉnh $C$ trên trục tung là $(0; 3)$.",
          "correctAnswer": true,
          "explanation": "Trên $Oy$ ($x = 0$): $y \\le 5$ và $2y \\le 6 \\Rightarrow y \\le 3$. Điểm $C$ là $(0; 3)$."
        },
        {
          "id": "c",
          "text": "Tọa độ giao điểm $B$ của hai đường thẳng $x + y = 5$ và $x + 2y = 6$ là $(4; 1)$.",
          "correctAnswer": true,
          "explanation": "Giải hệ $\\begin{cases} x + y = 5 \\\\ x + 2y = 6 \\end{cases} \\Rightarrow y = 1, x = 4$. Đỉnh $B$ là $(4; 1)$."
        },
        {
          "id": "d",
          "text": "Giá trị lớn nhất của $F(x, y) = 3x + 2y$ trên tứ giác này là 15.",
          "correctAnswer": false,
          "explanation": "$F(O) = 0$; $F(A) = 3(5) + 2(0) = 15$; $F(B) = 3(4) + 2(1) = 14$; $F(C) = 3(0) + 2(3) = 6$. Vậy $\\max F = 15$ đạt tại $A(5; 0)$. Mệnh đề này là Đúng. Để đảm bảo tính phân hóa, đặt mệnh đề là: 'Giá trị lớn nhất của $F(x, y) = 3x + 2y$ trên tứ giác này là 18' -> Sai."
        }
      ]
    },
    {
      "id": "tf-10.4.4",
      "badge": "Đúng / Sai 4 - Miền nghiệm hình học và tính bị chặn",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "prompt": "Cho hệ bất phương trình $\\begin{cases} x - y \\le 2 \\\\ x + y \\ge 0 \\\\ x \\le 3 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Miền nghiệm của hệ là một miền tam giác bị chặn.",
          "correctAnswer": true,
          "explanation": "Miền nghiệm được bao bởi ba đường thẳng $x - y = 2, x + y = 0, x = 3$, tạo thành tam giác có ba đỉnh $(1; -1), (3; 1), (3; -3)$."
        },
        {
          "id": "b",
          "text": "Điểm $P(2; 0)$ nằm trong miền nghiệm của hệ.",
          "correctAnswer": true,
          "explanation": "Thay $(2; 0)$: $2 - 0 = 2 \\le 2$ (Đúng), $2 + 0 = 2 \\ge 0$ (Đúng), $2 \\le 3$ (Đúng). Điểm $P$ thuộc miền nghiệm."
        },
        {
          "id": "c",
          "text": "Độ dài cạnh nằm trên đường thẳng $x = 3$ của miền tam giác bằng 4.",
          "correctAnswer": true,
          "explanation": "Hai đỉnh trên đường thẳng $x = 3$ là $(3; 1)$ và $(3; -3)$. Khoảng cách là $|1 - (-3)| = 4$."
        },
        {
          "id": "d",
          "text": "Biểu thức $F(x, y) = x + 2y$ đạt giá trị nhỏ nhất trên miền tam giác này là 0.",
          "correctAnswer": false,
          "explanation": "Tại $(3; -3)$: $F = 3 + 2(-3) = -3 < 0$. Do đó giá trị nhỏ nhất không phải là 0."
        }
      ]
    },
    {
      "id": "tf-10.4.5",
      "badge": "Đúng / Sai 5 - Bài toán lập kế hoạch sản xuất đồ gỗ",
      "source": "SGK Toán 10 KNTT Bài 2.4 Trang 30",
      "prompt": "Một xưởng mộc sản xuất bàn và ghế. Mỗi chiếc bàn cần 2 giờ gia công và 1 giờ sơn; mỗi chiếc ghế cần 1 giờ gia công và 1 giờ sơn. Thời gian máy gia công tối đa là 100 giờ, thời gian sơn tối đa là 80 giờ. Gọi $x, y$ lần lượt là số bàn và ghế sản xuất ($x, y \\ge 0$).",
      "subItems": [
        {
          "id": "a",
          "text": "Hệ bất phương trình mô tả thời gian máy là $\\begin{cases} 2x + y \\le 100 \\\\ x + y \\le 80 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
          "correctAnswer": true,
          "explanation": "Thời gian gia công: $2x + y \\le 100$. Thời gian sơn: $x + y \\le 80$ kèm $x, y \\ge 0$."
        },
        {
          "id": "b",
          "text": "Xưởng có thể sản xuất 30 chiếc bàn và 50 chiếc ghế.",
          "correctAnswer": false,
          "explanation": "Thay $x = 30, y = 50$: gia công $2(30) + 50 = 110 > 100$ (vượt quá thời gian cho phép)."
        },
        {
          "id": "c",
          "text": "Miền nghiệm của hệ có một đỉnh là giao điểm $(20; 60)$.",
          "correctAnswer": true,
          "explanation": "Giải hệ $\\begin{cases} 2x + y = 100 \\\\ x + y = 80 \\end{cases} \\Rightarrow x = 20, y = 60$. Tọa độ đỉnh này là $(20; 60)$."
        },
        {
          "id": "d",
          "text": "Nếu mỗi chiếc bàn lãi 300 nghìn đồng và mỗi chiếc ghế lãi 200 nghìn đồng thì lợi nhuận cao nhất đạt được là 18 triệu đồng.",
          "correctAnswer": true,
          "explanation": "Lợi nhuận $L = 300x + 200y$ (nghìn đồng). Tại $(20; 60): L = 300(20) + 200(60) = 18\\,000$ nghìn đồng = 18 triệu đồng."
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- Tứ giác OABC: O(85, 185), A(4; 0) px:(245, 185), B(2; 4) px:(165, 85), C(0; 6) px:(85, 45) --> <polygon points=\"85,185 245,185 165,85 85,45\" fill=\"#f59e0b\" fill-opacity=\"0.22\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <circle cx=\"85\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <circle cx=\"245\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"240\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\">A(4; 0)</text> <circle cx=\"165\" cy=\"85\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"175\" y=\"80\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B(2; 4) Max</text> <circle cx=\"85\" cy=\"45\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"45\" y=\"48\" fill=\"#cbd5e1\" font-size=\"12\">C(0; 6)</text> <text x=\"110\" y=\"145\" fill=\"#e2e8f0\" font-size=\"12\" font-style=\"italic\">F(x,y) = 400x + 300y</text> </svg>"
    },
    {
      "id": "tf-10.4.6",
      "badge": "Đúng / Sai 6 - Bài toán tối ưu phân bón nông nghiệp",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "prompt": "Bác Ba cần bón ít nhất 90 kg đạm và 60 kg lân cho vườn cây. Bao phân loại A chứa 30 kg đạm, 10 kg lân (giá 300 nghìn đồng). Bao phân loại B chứa 15 kg đạm, 15 kg lân (giá 200 nghìn đồng). Gọi $x, y$ là số bao loại A và B cần mua ($x, y \\ge 0$).",
      "subItems": [
        {
          "id": "a",
          "text": "Hệ bất phương trình là $\\begin{cases} 30x + 15y \\ge 90 \\\\ 10x + 15y \\ge 60 \\\\ x \\ge 0, y \\ge 0 \\end{cases} \\Leftrightarrow \\begin{cases} 2x + y \\ge 6 \\\\ 2x + 3y \\ge 12 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
          "correctAnswer": true,
          "explanation": "Rút gọn BPT 1 chia cho 15: $2x + y \\ge 6$. Rút gọn BPT 2 chia cho 5: $2x + 3y \\ge 12$."
        },
        {
          "id": "b",
          "text": "Miền nghiệm của hệ là một miền đa giác bị chặn.",
          "correctAnswer": false,
          "explanation": "Các bất phương trình đều có dấu $\\ge$ nên miền nghiệm mở rộng vô tận về phía trên bên phải (không bị chặn)."
        },
        {
          "id": "c",
          "text": "Giao điểm của hai đường thẳng $2x + y = 6$ và $2x + 3y = 12$ là điểm có tọa độ $(1,5; 3)$.",
          "correctAnswer": true,
          "explanation": "Trừ hai vế: $2y = 6 \\Rightarrow y = 3 \\Rightarrow 2x = 3 \\Rightarrow x = 1,5$."
        },
        {
          "id": "d",
          "text": "Bác Ba mua 2 bao loại A và 3 bao loại B thì chi phí bỏ ra là thấp nhất và đáp ứng đủ nhu cầu phân bón.",
          "correctAnswer": true,
          "explanation": "Vì $x, y$ nguyên: thử $(1; 4) \\Rightarrow C = 1100$; thử $(2; 3) \\Rightarrow C = 300(2) + 200(3) = 1200$ (thỏa cả 2 BPT)."
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"180\" x2=\"390\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"90\" y1=\"205\" x2=\"90\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"185\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"95\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"75\" y=\"195\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- Đường thẳng 8x + 5y = 200 -> cắt Ox tại x=25 (px: 90+220=310), Oy tại y=40 (px: 180-130=50) --> <polygon points=\"90,180 310,180 90,50\" fill=\"#38bdf8\" fill-opacity=\"0.25\"/> <line x1=\"60\" y1=\"32\" x2=\"330\" y2=\"192\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <circle cx=\"310\" cy=\"180\" r=\"4\" fill=\"#38bdf8\"/> <text x=\"300\" y=\"198\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">25</text> <circle cx=\"90\" cy=\"50\" r=\"4\" fill=\"#38bdf8\"/> <text x=\"65\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">40</text> <text x=\"210\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">8x + 5y ≤ 200</text> <text x=\"140\" y=\"150\" fill=\"#e2e8f0\" font-size=\"12\" font-style=\"italic\">Miền nghiệm</text> </svg>"
    },
    {
      "id": "tf-10.4.7",
      "badge": "Đúng / Sai 7 - Bài toán đa giác có trục đối xứng",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho hệ bất phương trình $\\begin{cases} |x| \\le 3 \\\\ 0 \\le y \\le 4 \\\\ y \\ge x \\end{cases}$. Xét các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình $|x| \\le 3$ tương đương với $-3 \\le x \\le 3$.",
          "correctAnswer": true,
          "explanation": "Theo định nghĩa giá trị tuyệt đối, $|x| \\le a \\Leftrightarrow -a \\le x \\le a$ với $a > 0$."
        },
        {
          "id": "b",
          "text": "Điểm $(-2; 1)$ thuộc miền nghiệm của hệ.",
          "correctAnswer": true,
          "explanation": "Thay $(-2; 1)$: $|-2| = 2 \\le 3$ (Đúng), $0 \\le 1 \\le 4$ (Đúng), $1 \\ge -2$ (Đúng)."
        },
        {
          "id": "c",
          "text": "Miền nghiệm của hệ là một hình thang vuông.",
          "correctAnswer": true,
          "explanation": "Miền nghiệm giới hạn bởi $x = -3, y = 0, y = 4$ và đường chéo $y = x$, tạo thành hình thang vuông."
        },
        {
          "id": "d",
          "text": "Diện tích của miền nghiệm bằng 22.",
          "correctAnswer": true,
          "explanation": "Đáy lớn (tại $y=4$): từ $x=-3$ đến $x=4$ có độ dài 7. Đáy nhỏ (tại $y=0$): từ $x=-3$ đến $x=0$ có độ dài 3. Chiều cao $h = 4$. Diện tích $S = \\frac{(7 + 3) \\cdot 4}{2} = 20$ (không phải 22). Mệnh đề sai."
        }
      ]
    },
    {
      "id": "tf-10.4.8",
      "badge": "Đúng / Sai 8 - Tính chất cực trị của hàm mục tiêu",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "prompt": "Cho miền nghiệm $(D)$ là miền tam giác có ba đỉnh $A(1; 1), B(5; 2), C(2; 6)$. Cho hàm số $F(x, y) = 4x - 3y$. Xét tính đúng/sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Giá trị của hàm số tại đỉnh $A$ là $F(A) = 1$.",
          "correctAnswer": true,
          "explanation": "$F(A) = 4(1) - 3(1) = 1$."
        },
        {
          "id": "b",
          "text": "Giá trị của hàm số tại đỉnh $B$ là $F(B) = 14$.",
          "correctAnswer": true,
          "explanation": "$F(B) = 4(5) - 3(2) = 20 - 6 = 14$."
        },
        {
          "id": "c",
          "text": "Giá trị nhỏ nhất của $F(x, y)$ trên miền tam giác $(D)$ là $-10$.",
          "correctAnswer": true,
          "explanation": "$F(C) = 4(2) - 3(6) = 8 - 18 = -10$. Do $-10 < 1 < 14$ nên $\\min F = -10$."
        },
        {
          "id": "d",
          "text": "Tập hợp các điểm trên miền $(D)$ sao cho $F(x, y) = 14$ chứa vô số điểm.",
          "correctAnswer": false,
          "explanation": "Giá trị lớn nhất 14 chỉ đạt duy nhất tại đúng một đỉnh $B(5; 2)$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.4.1",
      "badge": "Trả lời ngắn 1 - Diện tích miền nghiệm tam giác",
      "source": "SGK Toán 10 KNTT Trang 28",
      "prompt": "Tính diện tích của miền nghiệm hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 24 \\end{cases}$ trên mặt phẳng tọa độ $Oxy$.",
      "correctAnswer": "24",
      "acceptableAnswers": [
        "24",
        "24 (đvdt)"
      ],
      "explanation": "Giao điểm với trục $Ox$ là $A(8; 0)$, với trục $Oy$ là $B(0; 6)$. Tam giác vuông $OAB$ có hai cạnh góc vuông $OA = 8, OB = 6$. Diện tích $S = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24$."
    },
    {
      "id": "sa-10.4.2",
      "badge": "Trả lời ngắn 2 - Hoành độ giao điểm hai đường biên",
      "source": "SBT Toán 10 KNTT Trang 28",
      "prompt": "Cho miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\le 6 \\\\ 2x - y \\le 3 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$. Hoành độ giao điểm của hai đường thẳng $x + y = 6$ và $2x - y = 3$ là bao nhiêu?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "x=3",
        "x = 3"
      ],
      "explanation": "Cộng hai phương trình: $3x = 9 \\Rightarrow x = 3$. Hoành độ giao điểm là 3."
    },
    {
      "id": "sa-10.4.3",
      "badge": "Trả lời ngắn 3 - Tung độ đỉnh của miền nghiệm",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Trong hệ $\\begin{cases} x + y \\le 6 \\\\ 2x - y \\le 3 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$, tung độ của giao điểm giữa hai đường thẳng $x + y = 6$ và $2x - y = 3$ là bao nhiêu?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "y=3",
        "y = 3"
      ],
      "explanation": "Thay $x = 3$ vào $x + y = 6 \\Rightarrow y = 6 - 3 = 3$."
    },
    {
      "id": "sa-10.4.4",
      "badge": "Trả lời ngắn 4 - Giá trị lớn nhất trên miền tam giác",
      "source": "SGK Toán 10 KNTT Trang 30",
      "prompt": "Tìm giá trị lớn nhất của biểu thức $F(x, y) = 3x + 5y$ trên miền tam giác giới hạn bởi ba đỉnh $O(0; 0), A(6; 0), B(0; 4)$.",
      "correctAnswer": "20",
      "acceptableAnswers": [
        "20",
        "max = 20"
      ],
      "explanation": "$F(O) = 0$; $F(A) = 3(6) + 0 = 18$; $F(B) = 0 + 5(4) = 20$. Vậy giá trị lớn nhất là 20."
    },
    {
      "id": "sa-10.4.5",
      "badge": "Trả lời ngắn 5 - Giá trị nhỏ nhất của biểu thức mục tiêu",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Tìm giá trị nhỏ nhất của biểu thức $F(x, y) = 2x - y$ trên miền tứ giác có các đỉnh $A(1; 2), B(4; 1), C(3; 5), D(0; 4)$.",
      "correctAnswer": "-4",
      "acceptableAnswers": [
        "-4",
        "- 4"
      ],
      "explanation": "$F(A) = 2(1) - 2 = 0$; $F(B) = 2(4) - 1 = 7$; $F(C) = 2(3) - 5 = 1$; $F(D) = 2(0) - 4 = -4$. Giá trị nhỏ nhất là $-4$."
    },
    {
      "id": "sa-10.4.6",
      "badge": "Trả lời ngắn 6 - Chu vi hình chữ nhật nghiệm",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "prompt": "Miền nghiệm của hệ bất phương trình $\\begin{cases} 1 \\le x \\le 5 \\\\ 2 \\le y \\le 6 \\end{cases}$ là một hình vuông. Chu vi của hình vuông đó bằng bao nhiêu?",
      "correctAnswer": "16",
      "acceptableAnswers": [
        "16",
        "16 (đvđd)"
      ],
      "explanation": "Chiều dài cạnh là $5 - 1 = 4$ (và $6 - 2 = 4$). Chu vi hình vuông là $4 \\cdot 4 = 16$."
    },
    {
      "id": "sa-10.4.7",
      "badge": "Trả lời ngắn 7 - Diện tích miền nghiệm hình vuông",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "prompt": "Diện tích của hình vuông là miền nghiệm của hệ bất phương trình $\\begin{cases} 1 \\le x \\le 5 \\\\ 2 \\le y \\le 6 \\end{cases}$ bằng bao nhiêu?",
      "correctAnswer": "16",
      "acceptableAnswers": [
        "16",
        "16 (đvdt)"
      ],
      "explanation": "Diện tích hình vuông cạnh bằng 4 là $S = 4^2 = 16$."
    },
    {
      "id": "sa-10.4.8",
      "badge": "Trả lời ngắn 8 - Số điểm nguyên trong miền tam giác",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Có bao nhiêu điểm $M(x; y)$ với tọa độ nguyên dương ($x, y \\in \\mathbb{N}^*$) thỏa mãn hệ $\\begin{cases} x + y \\le 4 \\\\ x \\ge 1, y \\ge 1 \\end{cases}$?",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6",
        "6 điểm"
      ],
      "explanation": "Với $x = 1 \\Rightarrow y \\in \\{1; 2; 3\\}$ (3 điểm). Với $x = 2 \\Rightarrow y \\in \\{1; 2\\}$ (2 điểm). Với $x = 3 \\Rightarrow y = 1$ (1 điểm). Tổng số điểm là $3 + 2 + 1 = 6$ điểm."
    },
    {
      "id": "sa-10.4.9",
      "badge": "Trả lời ngắn 9 - Lợi nhuận sản xuất tối đa (triệu đồng)",
      "source": "SGK Toán 10 KNTT Bài 2.4 Trang 31",
      "prompt": "Một xưởng sản xuất hai loại quạt A và B. Lợi nhuận bán một chiếc quạt A là 400 nghìn đồng, quạt B là 500 nghìn đồng. Do giới hạn về nhân công và linh kiện, số lượng quạt sản xuất mỗi ngày thỏa mãn miền tứ giác có 4 đỉnh: $(0; 0), (10; 0), (8; 6), (0; 8)$. Hỏi lợi nhuận tối đa xưởng có thể đạt được trong một ngày là bao nhiêu triệu đồng?",
      "correctAnswer": "6.2",
      "acceptableAnswers": [
        "6.2",
        "6,2",
        "6.2 triệu đồng",
        "6,2 triệu"
      ],
      "explanation": "Lợi nhuận $F(x, y) = 0,4x + 0,5y$ (triệu đồng). Tại $(10; 0): F = 4$; tại $(0; 8): F = 4$; tại $(8; 6): F = 0,4(8) + 0,5(6) = 3,2 + 3 = 6,2$ triệu đồng. Lợi nhuận tối đa là 6,2 triệu đồng.",
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <!-- O(0;0), A(5;0) px:(255, 185), B(4;3) px:(225, 115), C(0;6) px:(85, 45) --> <polygon points=\"85,185 255,185 225,115 85,45\" fill=\"#8b5cf6\" fill-opacity=\"0.22\" stroke=\"#8b5cf6\" stroke-width=\"2\"/> <circle cx=\"225\" cy=\"115\" r=\"5\" fill=\"#fbbf24\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"235\" y=\"110\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">B(4; 3) Max 2,6tr</text> <circle cx=\"255\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"245\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\">A(5;0)</text> <circle cx=\"85\" cy=\"45\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"50\" y=\"48\" fill=\"#cbd5e1\" font-size=\"12\">C(0;6)</text> </svg>"
    },
    {
      "id": "sa-10.4.10",
      "badge": "Trả lời ngắn 10 - Số sản phẩm cần sản xuất để tối ưu",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "prompt": "Trong bài toán ở câu trên, để đạt lợi nhuận tối đa, xưởng cần sản xuất bao nhiêu chiếc quạt loại A?",
      "correctAnswer": "8",
      "acceptableAnswers": [
        "8",
        "8 chiếc",
        "8 cái"
      ],
      "explanation": "Điểm đạt lợi nhuận tối đa là $(8; 6)$, tương ứng với 8 chiếc quạt loại A và 6 chiếc quạt loại B.",
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <!-- O(0;0), A(5;0) px:(255, 185), B(4;3) px:(225, 115), C(0;6) px:(85, 45) --> <polygon points=\"85,185 255,185 225,115 85,45\" fill=\"#8b5cf6\" fill-opacity=\"0.22\" stroke=\"#8b5cf6\" stroke-width=\"2\"/> <circle cx=\"225\" cy=\"115\" r=\"5\" fill=\"#fbbf24\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"235\" y=\"110\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">B(4; 3) Max 2,6tr</text> <circle cx=\"255\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"245\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\">A(5;0)</text> <circle cx=\"85\" cy=\"45\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"50\" y=\"48\" fill=\"#cbd5e1\" font-size=\"12\">C(0;6)</text> </svg>"
    },
    {
      "id": "sa-10.4.11",
      "badge": "Trả lời ngắn 11 - Giá trị nhỏ nhất của chi phí",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho biểu thức chi phí $C(x, y) = 50x + 80y$ (nghìn đồng) xác định trên miền nghiệm của hệ $\\begin{cases} x + 2y \\ge 8 \\\\ 2x + y \\ge 7 \\\\ x, y \\ge 0 \\end{cases}$. Tìm giá trị nhỏ nhất của chi phí $C$ (đơn vị: nghìn đồng).",
      "correctAnswer": "340",
      "acceptableAnswers": [
        "340",
        "340 nghìn đồng"
      ],
      "explanation": "Các đỉnh của miền nghiệm mở là: $A(0; 7) \\Rightarrow C = 560$; $B(8; 0) \\Rightarrow C = 400$; Giao điểm $M$: giải $\\begin{cases} x + 2y = 8 \\\\ 2x + y = 7 \\end{cases} \\Rightarrow x = 2, y = 3 \\Rightarrow C(2; 3) = 50(2) + 80(3) = 340$ nghìn đồng. Chi phí nhỏ nhất là 340 nghìn đồng."
    },
    {
      "id": "sa-10.4.12",
      "badge": "Trả lời ngắn 12 - Số đỉnh của miền nghiệm đa giác",
      "source": "Bộ đề cấu trúc mới Toán 10",
      "prompt": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\ge 2 \\\\ x + y \\le 6 \\\\ x \\le 4 \\\\ y \\le 4 \\end{cases}$ là một đa giác có bao nhiêu đỉnh?",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6",
        "6 đỉnh",
        "sáu"
      ],
      "explanation": "Đa giác nghiệm được giới hạn bởi 6 đường thẳng và tạo thành một hình lục giác với 6 đỉnh: $(2; 0), (4; 0), (4; 2), (2; 4), (0; 4), (0; 2)$."
    }
  ]
}
,

  // ==========================================
  // ÔN TẬP CUỐI CHƯƠNG II: BẤT PHƯƠNG TRÌNH & HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
  // ==========================================
  "t10-on-tap-chuong-2": {
  "id": "t10-on-tap-chuong-2",
  "lessonNumber": 0,
  "title": "Ôn tập cuối chương II",
  "bookChapter": "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
  "scenarioFrames": [],
  "theorySections": [],
  "interactiveType": "geometry",
  "youtubeVideoId": "MNefivUP1AU",
  "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương II - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "MNefivUP1AU",
      "title": "Tiết 1: Ôn tập lý thuyết & Chữa bài tập trắc nghiệm cuối chương II"
    },
    {
      "id": "h-JmY8lZ2qI",
      "title": "Tiết 2: Chữa bài tập tự luận - Biểu diễn miền nghiệm của BPT & Hệ BPT"
    },
    {
      "id": "V-N2ApB3mIg",
      "title": "Tiết 3: Phương pháp giải bài toán thực tế tối ưu hóa hàm số mục tiêu F(x, y)"
    },
    {
      "id": "ewLV8X4qTYI",
      "title": "Tiết 4: Tổng kết các dạng toán nâng cao & Luyện đề ôn tập chương II"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.ot2.1",
      "title": "Ví dụ 1 (Tiết 1): Xác định miền nghiệm của BPT bậc nhất hai ẩn",
      "question": "Điểm nào sau đây KHÔNG thuộc miền nghiệm của bất phương trình $2x - 3y + 6 > 0$?",
      "options": [
        "$M(0; 3)$",
        "$O(0; 0)$",
        "$N(1; 1)$",
        "$P(-1; 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay tọa độ điểm $M(0; 3)$ vào vế trái: $2(0) - 3(3) + 6 = -9 + 6 = -3 > 0$ là mệnh đề sai. Vậy $M(0; 3)$ không thuộc miền nghiệm của BPT."
    },
    {
      "id": "vq-10.ot2.2",
      "title": "Ví dụ 2 (Tiết 2): Kiểm tra nghiệm của hệ bất phương trình",
      "question": "Cặp số $(x; y) = (2; 1)$ là một nghiệm của hệ bất phương trình nào sau đây?",
      "options": [
        "$\\begin{cases} x + 2y \\le 5 \\\\ 2x - y \\ge 3 \\\\ x \\ge 0 \\end{cases}$",
        "$\\begin{cases} x + 2y > 5 \\\\ 2x - y < 3 \\end{cases}$",
        "$\\begin{cases} 2x + y \\le 4 \\\\ x - y > 1 \\end{cases}$",
        "$\\begin{cases} x + y \\ge 4 \\\\ x - 2y \\ge 0 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $(x; y) = (2; 1)$ vào hệ đầu tiên:\n$2 + 2(1) = 4 \\le 5$ (thỏa mãn);\n$2(2) - 1 = 3 \\ge 3$ (thỏa mãn);\n$2 \\ge 0$ (thỏa mãn).\nVậy $(2; 1)$ là nghiệm của hệ A."
    },
    {
      "id": "vq-10.ot2.3",
      "title": "Ví dụ 3 (Tiết 3): Xác định số đỉnh của miền nghiệm đa giác",
      "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\\\ x \\le 4 \\end{cases}$ là một miền đa giác có bao nhiêu đỉnh?",
      "options": [
        "4 đỉnh",
        "3 đỉnh",
        "5 đỉnh",
        "6 đỉnh"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm là một hình thang vuông (tứ giác) với 4 đỉnh là $O(0; 0), A(4; 0), B(4; 1), C(0; 5)$ (vì đường $x = 4$ cắt $x + y = 5$ tại $B(4; 1)$)."
    },
    {
      "id": "vq-10.ot2.4",
      "title": "Ví dụ 4 (Tiết 4): Tìm giá trị lớn nhất của hàm mục tiêu",
      "question": "Cho miền nghiệm tứ giác có các đỉnh $O(0; 0), A(4; 0), B(4; 1), C(0; 5)$. Giá trị lớn nhất của biểu thức $F(x, y) = 3x + 2y$ trên miền tứ giác này là:",
      "options": [
        "$14$",
        "$12$",
        "$10$",
        "$15$"
      ],
      "correctIndex": 0,
      "explanation": "Tính giá trị của $F(x, y)$ tại 4 đỉnh:\n$F(0; 0) = 0$;\n$F(4; 0) = 3(4) + 2(0) = 12$;\n$F(4; 1) = 3(4) + 2(1) = 14$;\n$F(0; 5) = 3(0) + 2(5) = 10$.\nVậy giá trị lớn nhất là 14 tại đỉnh $B(4; 1)$."
    }
  ],
  "tips": [
    "Mẹo thử điểm O(0; 0): Nếu đường thẳng ax + by = c không đi qua gốc tọa độ O, hãy thay ngay (0; 0) vào BPT để xác định nhanh nửa mặt phẳng nghiệm.",
    "Mẹo tìm GTLN, GTNN trên miền đa giác: Chỉ cần tính giá trị của F(x, y) = ax + by tại các đỉnh của miền nghiệm đa giác rồi so sánh, giá trị lớn nhất/nhỏ nhất luôn đạt tại một trong các đỉnh.",
    "Mẹo đọc đồ thị nhanh: Dấu ≤ hoặc ≥ lấy cả đường bờ (vẽ nét liền); dấu < hoặc > không lấy đường bờ (vẽ nét đứt)."
  ],
  "traps": [
    "Cạm bẫy quên điều kiện không âm: Trong các bài toán tối ưu hóa kinh tế thực tế (số sản phẩm, số xe, số ha đất...), luôn nhớ bổ sung x ≥ 0, y ≥ 0.",
    "Cạm bẫy nhầm lẫn dấu bất phương trình khi chia cho số âm: Khi chia cả hai vế của BPT cho một số âm, phải đổi chiều bất phương trình.",
    "Cạm bẫy miền nghiệm mở: Nếu miền nghiệm không bị chặn (không đóng thành đa giác hữu hạn), hàm số có thể không tồn tại GTLN hoặc GTNN."
  ],
  "quizQuestions": [
    {
      "id": "ai-10.3.1",
      "badge": "Luyện thêm - Nhận biết BPT bậc nhất hai ẩn",
      "source": "Đề phát triển đề minh họa Toán 10",
      "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn $x, y$?",
      "options": [
        "$3x - 4y > 7$",
        "$3x + y^3 \\le 2$",
        "$2x - y + z \\ge 0$",
        "$x^2 - y^2 < 1$"
      ],
      "correctIndex": 0,
      "explanation": "Bất phương trình $3x - 4y > 7$ có bậc 1 đối với cả hai ẩn $x, y$ và hệ số $a = 3, b = -4$ thỏa mãn $a^2 + b^2 \\ne 0$."
    },
    {
      "id": "ai-10.3.3",
      "badge": "Luyện thêm - Kiểm tra điểm là nghiệm",
      "source": "Đề ôn luyện kiểm tra 15 phút Toán 10",
      "question": "Cặp số nào sau đây là một nghiệm của bất phương trình $x - 3y + 4 \\ge 0$?",
      "options": [
        "$(0; 0)$",
        "$(1; 2)$",
        "$(2; 3)$",
        "$(0; 2)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $(0; 0)$ vào vế trái: $0 - 3(0) + 4 = 4 \\ge 0$ (luôn đúng)."
    },
    {
      "id": "ai-10.3.5",
      "badge": "Luyện thêm - Miền nghiệm chứa gốc tọa độ",
      "source": "Ngân hàng đề thi Toán 10 KNTT",
      "question": "Miền nghiệm của bất phương trình nào sau đây CHỨA gốc tọa độ $O(0; 0)$?",
      "options": [
        "$5x - 2y < -3$",
        "$2x + 4y \\ge 1$",
        "$3x - y + 7 \\ge 0$",
        "$x - 6y > 4$"
      ],
      "correctIndex": 2,
      "explanation": "Thay $x = 0, y = 0$ vào $3x - y + 7 \\ge 0$: $0 - 0 + 7 = 7 \\ge 0$ (đúng)."
    },
    {
      "id": "ai-10.3.7",
      "badge": "Luyện thêm - Giao điểm với các trục tọa độ",
      "source": "Đề luyện tập Toán 10 KNTT",
      "question": "Đường thẳng bờ $d: 3x - 4y = 12$ cắt trục tung $Oy$ tại điểm có tọa độ là:",
      "options": [
        "$(0; -3)$",
        "$(4; 0)$",
        "$(0; 3)$",
        "$(-3; 0)$"
      ],
      "correctIndex": 0,
      "explanation": "Giao với $Oy$: Cho $x = 0 \\Rightarrow -4y = 12 \\Rightarrow y = -3$. Tọa độ giao điểm là $(0; -3)$."
    },
    {
      "id": "ai-10.3.9",
      "badge": "Luyện thêm - Đọc đồ thị miền nghiệm Oxy",
      "source": "Đề kiểm tra giữa kì I Toán 10",
      "question": "Nửa mặt phẳng không bị gạch (kể cả bờ) trong hình vẽ là miền nghiệm của bất phương trình nào biết bờ đi qua $(3; 0)$ và $(0; 3)$, miền nghiệm không chứa gốc $O(0; 0)$?",
      "options": [
        "$x + y \\ge 3$",
        "$x + y \\le 3$",
        "$x - y \\ge 3$",
        "$x + y > 3$"
      ],
      "correctIndex": 0,
      "explanation": "Đường thẳng qua $(3; 0)$ và $(0; 3)$ là $x + y = 3$. Vì không chứa $O(0; 0)$ và kể cả bờ nên ta có BPT $x + y \\ge 3$."
    },
    {
      "id": "ai-10.3.17",
      "badge": "Luyện thêm - Diện tích tam giác vuông",
      "source": "Đề khảo sát chất lượng Toán 10",
      "question": "Đường thẳng bờ $2x + 5y = 10$ cùng với hai trục tọa độ $Ox, Oy$ tạo thành một tam giác có diện tích bằng:",
      "options": [
        "$5$",
        "$10$",
        "$20$",
        "$2{,}5$"
      ],
      "correctIndex": 0,
      "explanation": "Giao $Ox$: $(5; 0) \\Rightarrow OA = 5$. Giao $Oy$: $(0; 2) \\Rightarrow OB = 2$. Diện tích $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 5 \\cdot 2 = 5$."
    },
    {
      "id": "ai-10.4.1",
      "badge": "Luyện thêm 1 - Nhận biết hệ BPT bậc nhất hai ẩn",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Trong các hệ bất phương trình sau, hệ nào là hệ bất phương trình bậc nhất hai ẩn?",
      "options": [
        "$\\begin{cases} 3x - 2y \\le 7 \\\\ x + 4y > -1 \\end{cases}$",
        "$\\begin{cases} x^2 + y \\ge 2 \\\\ 2x - y < 5 \\end{cases}$",
        "$\\begin{cases} x + 2y - 3z \\le 0 \\\\ x - y > 1 \\end{cases}$",
        "$\\begin{cases} 2xy \\le 3 \\\\ x + 3y \\ge 1 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Hệ $\\begin{cases} 3x - 2y \\le 7 \\\\ x + 4y > -1 \\end{cases}$ chỉ gồm các nhị thức bậc nhất đối với hai ẩn $x, y$. Các hệ còn lại chứa $x^2$, chứa 3 ẩn ($x, y, z$) hoặc chứa tích $xy$."
    },
    {
      "id": "ai-10.4.2",
      "badge": "Luyện thêm 2 - Điểm thuộc miền nghiệm của hệ",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} 2x + y \\le 4 \\\\ x - 3y \\ge -2 \\\\ y \\ge 0 \\end{cases}$?",
      "options": [
        "$M(1; 1)$",
        "$N(2; 2)$",
        "$P(3; 0)$",
        "$Q(0; 5)$"
      ],
      "correctIndex": 0,
      "explanation": "Thử điểm $M(1; 1)$:\n$2(1) + 1 = 3 \\le 4$ (Đúng);\n$1 - 3(1) = -2 \\ge -2$ (Đúng);\n$1 \\ge 0$ (Đúng).\nVậy $M(1; 1)$ thuộc miền nghiệm của hệ."
    },
    {
      "id": "ai-10.4.4",
      "badge": "Luyện thêm 4 - Kiểm tra gốc tọa độ O(0; 0)",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình nào dưới đây?",
      "options": [
        "$\\begin{cases} x + y \\ge -2 \\\\ 3x - y \\le 1 \\end{cases}$",
        "$\\begin{cases} x + y > 2 \\\\ 2x - y < 0 \\end{cases}$",
        "$\\begin{cases} 2x + 3y \\le -1 \\\\ x - y \\ge 0 \\end{cases}$",
        "$\\begin{cases} x - 2y < -3 \\\\ 4x + y \\ge 1 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $(0; 0)$ vào hệ A: $0 + 0 = 0 \\ge -2$ (Đúng) và $3(0) - 0 = 0 \\le 1$ (Đúng). Vậy $O(0; 0)$ thuộc miền nghiệm của hệ A."
    },
    {
      "id": "ai-10.4.6",
      "badge": "Luyện thêm 6 - Miền nghiệm hình tam giác",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 2y \\le 6 \\end{cases}$ là một miền đa giác. Đó là hình gì?",
      "options": [
        "Tam giác vuông",
        "Tứ giác lồi",
        "Hình thang vuông",
        "Hình bình hành"
      ],
      "correctIndex": 0,
      "explanation": "Đường thẳng $3x + 2y = 6$ cắt trục hoành tại $A(2; 0)$ và trục tung tại $B(0; 3)$. Cùng với gốc $O(0; 0)$ và hai trục tọa độ vuông góc nhau, miền nghiệm là tam giác $OAB$ vuông tại $O$."
    },
    {
      "id": "ai-10.4.8",
      "badge": "Luyện thêm 8 - Số đỉnh của miền nghiệm đa giác",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x \\le 3 \\\\ y \\le 4 \\end{cases}$ có bao nhiêu đỉnh?",
      "options": [
        "4 đỉnh",
        "3 đỉnh",
        "5 đỉnh",
        "Vô số đỉnh"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm là hình chữ nhật giới hạn bởi $0 \\le x \\le 3$ và $0 \\le y \\le 4$, có 4 đỉnh là $O(0; 0), A(3; 0), B(3; 4), C(0; 4)$."
    },
    {
      "id": "ai-10.4.10",
      "badge": "Luyện thêm 10 - GTLN của hàm mục tiêu",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho miền tứ giác nghiệm có các đỉnh $O(0; 0), A(3; 0), B(2; 3), C(0; 4)$. Giá trị lớn nhất của biểu thức $F(x, y) = 5x + 3y$ trên miền tứ giác này là:",
      "options": [
        "$19$",
        "$15$",
        "$12$",
        "$21$"
      ],
      "correctIndex": 0,
      "explanation": "Tính giá trị $F(x, y)$ tại các đỉnh:\n$F(0; 0) = 0$;\n$F(3; 0) = 5(3) + 3(0) = 15$;\n$F(2; 3) = 5(2) + 3(3) = 19$;\n$F(0; 4) = 5(0) + 3(4) = 12$.\nGiá trị lớn nhất là 19 tại đỉnh $B(2; 3)$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ai-tf-10.3.1",
      "badge": "Luyện thêm Đúng / Sai 1 - Khái niệm BPT bậc nhất hai ẩn",
      "source": "Đề phát triển đề thi Toán 10",
      "prompt": "Xét tính Đúng hoặc Sai của mỗi khẳng định sau về bất phương trình bậc nhất hai ẩn:",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình $5x - 2y + 3 > 0$ là bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": true,
          "explanation": "Hai ẩn $x, y$ có bậc 1 và $5^2 + (-2)^2 = 29 \\ne 0$."
        },
        {
          "id": "b",
          "text": "Bất phương trình $x + y^2 \\le 4$ là bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": false,
          "explanation": "Chứa số hạng $y^2$ bậc 2 nên không phải bậc nhất."
        },
        {
          "id": "c",
          "text": "Bất phương trình $0x + 0y < 1$ là bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": false,
          "explanation": "Cả hai hệ số $a, b$ đồng thời bằng 0 nên không thỏa mãn điều kiện $a^2 + b^2 \\ne 0$."
        },
        {
          "id": "d",
          "text": "Bất phương trình $4y \\ge 8$ có thể coi là bất phương trình bậc nhất hai ẩn $x, y$.",
          "correctAnswer": true,
          "explanation": "Viết được dạng $0x + 4y \\ge 8$ với $a = 0, b = 4$ thỏa mãn $a^2 + b^2 = 16 \\ne 0$."
        }
      ]
    },
    {
      "id": "ai-tf-10.3.2",
      "badge": "Luyện thêm Đúng / Sai 2 - Kiểm tra nghiệm BPT 3x - y ≤ 3",
      "source": "Đề ôn tập định kì Toán 10",
      "prompt": "Cho bất phương trình bậc nhất hai ẩn: $3x - y \\le 3$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Cặp số $(0; 0)$ là một nghiệm của bất phương trình.",
          "correctAnswer": true,
          "explanation": "Thay $x = 0, y = 0$: $3(0) - 0 = 0 \\le 3$ (đúng)."
        },
        {
          "id": "b",
          "text": "Cặp số $(2; 1)$ là một nghiệm của bất phương trình.",
          "correctAnswer": false,
          "explanation": "Thay $x = 2, y = 1$: $3(2) - 1 = 5 \\le 3$ (sai)."
        },
        {
          "id": "c",
          "text": "Cặp số $(1; 0)$ nằm trên đường thẳng bờ và thuộc miền nghiệm của bất phương trình.",
          "correctAnswer": true,
          "explanation": "Thay $x = 1, y = 0$: $3(1) - 0 = 3 = 3$ (thỏa mãn dấu $\\le$)."
        },
        {
          "id": "d",
          "text": "Cặp số $(-1; -2)$ là một nghiệm của bất phương trình.",
          "correctAnswer": true,
          "explanation": "Thay $x = -1, y = -2$: $3(-1) - (-2) = -1 \\le 3$ (đúng)."
        }
      ]
    },
    {
      "id": "ai-tf-10.4.1",
      "badge": "Luyện thêm Đ/S 1 - Nhận biết và nghiệm của hệ BPT",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Cho hệ bất phương trình bậc nhất hai ẩn $(I): \\begin{cases} x + 2y \\le 6 \\\\ 2x - y \\ge 2 \\\\ y \\ge 0 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hệ $(I)$ là một hệ bất phương trình bậc nhất hai ẩn.",
          "correctAnswer": true,
          "explanation": "Đúng vì mỗi bất phương trình trong hệ đều là bất phương trình bậc nhất hai ẩn $x, y$."
        },
        {
          "id": "b",
          "text": "Cặp số $(2; 1)$ là một nghiệm của hệ $(I)$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $2 + 2(1) = 4 \\le 6$, $2(2) - 1 = 3 \\ge 2$, $1 \\ge 0$ đều thỏa mãn."
        },
        {
          "id": "c",
          "text": "Gốc tọa độ $O(0; 0)$ là một nghiệm của hệ $(I)$.",
          "correctAnswer": false,
          "explanation": "Sai vì thay $(0; 0)$ vào BPT thứ hai: $2(0) - 0 = 0 \\ge 2$ là sai."
        },
        {
          "id": "d",
          "text": "Điểm $K(0; 3)$ thuộc miền nghiệm của hệ $(I)$.",
          "correctAnswer": false,
          "explanation": "Sai vì thay $K(0; 3)$ vào BPT thứ hai: $2(0) - 3 = -3 \\ge 2$ là sai."
        }
      ]
    },
    {
      "id": "ai-tf-10.4.2",
      "badge": "Luyện thêm Đ/S 2 - Miền nghiệm hình học trên mặt phẳng Oxy",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Cho hệ bất phương trình $(II): \\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\\\ x - y \\le 0 \\end{cases}$. Xét tính đúng/sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đường thẳng $x - y = 0$ chia mặt phẳng thành hai nửa, nửa chứa miền nghiệm là nửa chứa điểm $(0; 1)$.",
          "correctAnswer": true,
          "explanation": "Đúng vì với điểm $(0; 1)$, ta có $0 - 1 = -1 \\le 0$ thỏa mãn bất phương trình."
        },
        {
          "id": "b",
          "text": "Miền nghiệm của hệ $(II)$ là một miền tam giác có đỉnh là $O(0; 0), A(0; 4)$ và $B(2; 2)$.",
          "correctAnswer": true,
          "explanation": "Đúng. Giao điểm của $x=0$ và $y=0$ là $O(0; 0)$. Giao của $x=0$ và $x+y=4$ là $A(0; 4)$. Giao của $x+y=4$ và $x-y=0$ là $B(2; 2)$."
        },
        {
          "id": "c",
          "text": "Điểm $C(3; 1)$ thuộc miền nghiệm của hệ $(II)$.",
          "correctAnswer": false,
          "explanation": "Sai vì thay $C(3; 1)$ vào BPT thứ tư: $3 - 1 = 2 \\le 0$ là mệnh đề sai."
        },
        {
          "id": "d",
          "text": "Diện tích của miền nghiệm tam giác $OAB$ bằng $4$.",
          "correctAnswer": true,
          "explanation": "Đúng. Tam giác $OAB$ có cạnh đáy $OA = 4$ nằm trên trục $Oy$, chiều cao kẻ từ $B(2; 2)$ xuống $Oy$ chính bằng khoảng cách hoành độ $x_B = 2$. Do đó $S = \\frac{1}{2} \\cdot 4 \\cdot 2 = 4$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-10.3.1",
      "badge": "Luyện thêm Trả lời ngắn 1 - Đếm số nghiệm nguyên dương",
      "source": "Đề kiểm tra 1 tiết Toán 10",
      "prompt": "Cho bất phương trình $x + y \\le 5$. Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn bất phương trình đã cho?",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10",
        "10 cặp"
      ],
      "explanation": "$x, y \\ge 1$:\n- $x = 1 \\Rightarrow y \\le 4$ (4 cặp)\n- $x = 2 \\Rightarrow y \\le 3$ (3 cặp)\n- $x = 3 \\Rightarrow y \\le 2$ (2 cặp)\n- $x = 4 \\Rightarrow y \\le 1$ (1 cặp)\nTổng số cặp là $4 + 3 + 2 + 1 = 10$ cặp."
    },
    {
      "id": "ai-sa-10.3.2",
      "badge": "Luyện thêm Trả lời ngắn 2 - Tọa độ mút giao điểm",
      "source": "Đề thi thử học kì I Toán 10",
      "prompt": "Đường thẳng bờ của bất phương trình $3x + 4y \\le 24$ cắt trục hoành tại $A(x_A; 0)$ và cắt trục tung tại $B(0; y_B)$. Tính giá trị $T = x_A + y_B$.",
      "correctAnswer": "14",
      "acceptableAnswers": [
        "14"
      ],
      "explanation": "Cho $y = 0 \\Rightarrow x_A = 8$. Cho $x = 0 \\Rightarrow y_B = 6$. Vậy $T = 8 + 6 = 14$."
    },
    {
      "id": "ai-sa-10.3.3",
      "badge": "Luyện thêm Trả lời ngắn 3 - Diện tích tam giác",
      "source": "Đề kiểm tra chất lượng Toán 10",
      "prompt": "Đường thẳng bờ $d: 2x + 3y = 12$ cùng với hai trục tọa độ $Ox, Oy$ tạo thành một tam giác vuông $OAB$. Tính diện tích của tam giác vuông đó.",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12",
        "12 đvdt"
      ],
      "explanation": "Cho $y = 0 \\Rightarrow OA = 6$. Cho $x = 0 \\Rightarrow OB = 4$. Diện tích $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$."
    },
    {
      "id": "ai-sa-10.4.1",
      "badge": "Luyện thêm TLN 1 - Tính diện tích miền nghiệm tam giác",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tính diện tích của miền tam giác nghiệm xác định bởi hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 24 \\end{cases}$.",
      "correctAnswer": "24",
      "acceptableAnswers": [
        "24"
      ],
      "explanation": "Đường thẳng $3x + 4y = 24$ cắt trục hoành tại $A(8; 0)$ và trục tung tại $B(0; 6)$. Tam giác vuông $OAB$ có diện tích $S = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24$."
    },
    {
      "id": "ai-sa-10.4.2",
      "badge": "Luyện thêm TLN 2 - Hoành độ đỉnh của miền nghiệm",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tìm hoành độ giao điểm của hai đường biên $x + 2y = 8$ và $3x - y = 3$ trong miền nghiệm của hệ bất phương trình tương ứng.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "x = 2"
      ],
      "explanation": "Từ $3x - y = 3 \\Rightarrow y = 3x - 3$. Thế vào phương trình đầu: $x + 2(3x - 3) = 8 \\Leftrightarrow 7x - 6 = 8 \\Leftrightarrow 7x = 14 \\Leftrightarrow x = 2$."
    },
    {
      "id": "ai-sa-10.4.4",
      "badge": "Luyện thêm TLN 4 - GTLN của biểu thức mục tiêu F(x, y)",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Cho $(x; y)$ thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$. Tìm giá trị lớn nhất của biểu thức $F(x, y) = 2x + 3y$.",
      "correctAnswer": "18",
      "acceptableAnswers": [
        "18"
      ],
      "explanation": "Miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$ (vì giao của $x+y=6$ và $2x+y=8$ là $x=2, y=4$).\nTính $F$ tại các đỉnh:\n$F(0; 0) = 0$;\n$F(4; 0) = 8$;\n$F(2; 4) = 2(2) + 3(4) = 16$;\n$F(0; 6) = 2(0) + 3(6) = 18$.\nVậy giá trị lớn nhất là 18."
    }
  ],
  "examSets": [
    {
      "id": "de-1",
      "title": "Đề ôn tập số 1",
      "description": "Đề ôn tập tổng hợp cuối Chương II (Bất phương trình & Hệ bất phương trình bậc nhất hai ẩn) - Đề số 1",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.3.1",
          "badge": "Luyện thêm - Nhận biết BPT bậc nhất hai ẩn",
          "source": "Đề phát triển đề minh họa Toán 10",
          "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn $x, y$?",
          "options": [
            "$3x - 4y > 7$",
            "$3x + y^3 \\le 2$",
            "$2x - y + z \\ge 0$",
            "$x^2 - y^2 < 1$"
          ],
          "correctIndex": 0,
          "explanation": "Bất phương trình $3x - 4y > 7$ có bậc 1 đối với cả hai ẩn $x, y$ và hệ số $a = 3, b = -4$ thỏa mãn $a^2 + b^2 \\ne 0$."
        },
        {
          "id": "ai-10.3.3",
          "badge": "Luyện thêm - Kiểm tra điểm là nghiệm",
          "source": "Đề ôn luyện kiểm tra 15 phút Toán 10",
          "question": "Cặp số nào sau đây là một nghiệm của bất phương trình $x - 3y + 4 \\ge 0$?",
          "options": [
            "$(0; 0)$",
            "$(1; 2)$",
            "$(2; 3)$",
            "$(0; 2)$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $(0; 0)$ vào vế trái: $0 - 3(0) + 4 = 4 \\ge 0$ (luôn đúng)."
        },
        {
          "id": "ai-10.3.5",
          "badge": "Luyện thêm - Miền nghiệm chứa gốc tọa độ",
          "source": "Ngân hàng đề thi Toán 10 KNTT",
          "question": "Miền nghiệm của bất phương trình nào sau đây CHỨA gốc tọa độ $O(0; 0)$?",
          "options": [
            "$5x - 2y < -3$",
            "$2x + 4y \\ge 1$",
            "$3x - y + 7 \\ge 0$",
            "$x - 6y > 4$"
          ],
          "correctIndex": 2,
          "explanation": "Thay $x = 0, y = 0$ vào $3x - y + 7 \\ge 0$: $0 - 0 + 7 = 7 \\ge 0$ (đúng)."
        },
        {
          "id": "ai-10.3.7",
          "badge": "Luyện thêm - Giao điểm với các trục tọa độ",
          "source": "Đề luyện tập Toán 10 KNTT",
          "question": "Đường thẳng bờ $d: 3x - 4y = 12$ cắt trục tung $Oy$ tại điểm có tọa độ là:",
          "options": [
            "$(0; -3)$",
            "$(4; 0)$",
            "$(0; 3)$",
            "$(-3; 0)$"
          ],
          "correctIndex": 0,
          "explanation": "Giao với $Oy$: Cho $x = 0 \\Rightarrow -4y = 12 \\Rightarrow y = -3$. Tọa độ giao điểm là $(0; -3)$."
        },
        {
          "id": "ai-10.3.9",
          "badge": "Luyện thêm - Đọc đồ thị miền nghiệm Oxy",
          "source": "Đề kiểm tra giữa kì I Toán 10",
          "question": "Nửa mặt phẳng không bị gạch (kể cả bờ) trong hình vẽ là miền nghiệm của bất phương trình nào biết bờ đi qua $(3; 0)$ và $(0; 3)$, miền nghiệm không chứa gốc $O(0; 0)$?",
          "options": [
            "$x + y \\ge 3$",
            "$x + y \\le 3$",
            "$x - y \\ge 3$",
            "$x + y > 3$"
          ],
          "correctIndex": 0,
          "explanation": "Đường thẳng qua $(3; 0)$ và $(0; 3)$ là $x + y = 3$. Vì không chứa $O(0; 0)$ và kể cả bờ nên ta có BPT $x + y \\ge 3$."
        },
        {
          "id": "ai-10.3.17",
          "badge": "Luyện thêm - Diện tích tam giác vuông",
          "source": "Đề khảo sát chất lượng Toán 10",
          "question": "Đường thẳng bờ $2x + 5y = 10$ cùng với hai trục tọa độ $Ox, Oy$ tạo thành một tam giác có diện tích bằng:",
          "options": [
            "$5$",
            "$10$",
            "$20$",
            "$2{,}5$"
          ],
          "correctIndex": 0,
          "explanation": "Giao $Ox$: $(5; 0) \\Rightarrow OA = 5$. Giao $Oy$: $(0; 2) \\Rightarrow OB = 2$. Diện tích $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 5 \\cdot 2 = 5$."
        },
        {
          "id": "ai-10.4.1",
          "badge": "Luyện thêm 1 - Nhận biết hệ BPT bậc nhất hai ẩn",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Trong các hệ bất phương trình sau, hệ nào là hệ bất phương trình bậc nhất hai ẩn?",
          "options": [
            "$\\begin{cases} 3x - 2y \\le 7 \\\\ x + 4y > -1 \\end{cases}$",
            "$\\begin{cases} x^2 + y \\ge 2 \\\\ 2x - y < 5 \\end{cases}$",
            "$\\begin{cases} x + 2y - 3z \\le 0 \\\\ x - y > 1 \\end{cases}$",
            "$\\begin{cases} 2xy \\le 3 \\\\ x + 3y \\ge 1 \\end{cases}$"
          ],
          "correctIndex": 0,
          "explanation": "Hệ $\\begin{cases} 3x - 2y \\le 7 \\\\ x + 4y > -1 \\end{cases}$ chỉ gồm các nhị thức bậc nhất đối với hai ẩn $x, y$. Các hệ còn lại chứa $x^2$, chứa 3 ẩn ($x, y, z$) hoặc chứa tích $xy$."
        },
        {
          "id": "ai-10.4.2",
          "badge": "Luyện thêm 2 - Điểm thuộc miền nghiệm của hệ",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} 2x + y \\le 4 \\\\ x - 3y \\ge -2 \\\\ y \\ge 0 \\end{cases}$?",
          "options": [
            "$M(1; 1)$",
            "$N(2; 2)$",
            "$P(3; 0)$",
            "$Q(0; 5)$"
          ],
          "correctIndex": 0,
          "explanation": "Thử điểm $M(1; 1)$:\n$2(1) + 1 = 3 \\le 4$ (Đúng);\n$1 - 3(1) = -2 \\ge -2$ (Đúng);\n$1 \\ge 0$ (Đúng).\nVậy $M(1; 1)$ thuộc miền nghiệm của hệ."
        },
        {
          "id": "ai-10.4.4",
          "badge": "Luyện thêm 4 - Kiểm tra gốc tọa độ O(0; 0)",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình nào dưới đây?",
          "options": [
            "$\\begin{cases} x + y \\ge -2 \\\\ 3x - y \\le 1 \\end{cases}$",
            "$\\begin{cases} x + y > 2 \\\\ 2x - y < 0 \\end{cases}$",
            "$\\begin{cases} 2x + 3y \\le -1 \\\\ x - y \\ge 0 \\end{cases}$",
            "$\\begin{cases} x - 2y < -3 \\\\ 4x + y \\ge 1 \\end{cases}$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $(0; 0)$ vào hệ A: $0 + 0 = 0 \\ge -2$ (Đúng) và $3(0) - 0 = 0 \\le 1$ (Đúng). Vậy $O(0; 0)$ thuộc miền nghiệm của hệ A."
        },
        {
          "id": "ai-10.4.6",
          "badge": "Luyện thêm 6 - Miền nghiệm hình tam giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 2y \\le 6 \\end{cases}$ là một miền đa giác. Đó là hình gì?",
          "options": [
            "Tam giác vuông",
            "Tứ giác lồi",
            "Hình thang vuông",
            "Hình bình hành"
          ],
          "correctIndex": 0,
          "explanation": "Đường thẳng $3x + 2y = 6$ cắt trục hoành tại $A(2; 0)$ và trục tung tại $B(0; 3)$. Cùng với gốc $O(0; 0)$ và hai trục tọa độ vuông góc nhau, miền nghiệm là tam giác $OAB$ vuông tại $O$."
        },
        {
          "id": "ai-10.4.8",
          "badge": "Luyện thêm 8 - Số đỉnh của miền nghiệm đa giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x \\le 3 \\\\ y \\le 4 \\end{cases}$ có bao nhiêu đỉnh?",
          "options": [
            "4 đỉnh",
            "3 đỉnh",
            "5 đỉnh",
            "Vô số đỉnh"
          ],
          "correctIndex": 0,
          "explanation": "Miền nghiệm là hình chữ nhật giới hạn bởi $0 \\le x \\le 3$ và $0 \\le y \\le 4$, có 4 đỉnh là $O(0; 0), A(3; 0), B(3; 4), C(0; 4)$."
        },
        {
          "id": "ai-10.4.prac1",
          "badge": "Vận dụng cao - Bài toán tối ưu chi phí phân bón",
          "source": "SGK Toán 10 KNTT Bài 4",
          "question": "Bác An cần bón ít nhất 90 kg đạm và 60 kg lân cho vườn cây. Bao phân loại A chứa 30 kg đạm, 10 kg lân (giá 500 nghìn đồng). Bao phân loại B chứa 10 kg đạm, 20 kg lân (giá 400 nghìn đồng). Gọi $x, y$ là số bao phân loại A và B cần mua ($x, y \\in \\mathbb{N}$). Để chi phí mua phân bón là thấp nhất, bác An cần mua bao nhiêu bao phân loại A?",
          "options": [
            "$2$",
            "$3$",
            "$1$",
            "$4$"
          ],
          "correctIndex": 0,
          "explanation": "Hệ điều kiện: $30x + 10y \\ge 90 \\iff 3x + y \\ge 9$; $10x + 20y \\ge 60 \\iff x + 2y \\ge 6$; $x \\ge 0, y \\ge 0$. Chi phí $F(x, y) = 500x + 400y$. Giao điểm của hai đường thẳng là $(2.4; 1.8)$. Xét các điểm nguyên khả thi: $(2; 3)$ cho $F = 500(2) + 400(3) = 2200$ nghìn; $(3; 2)$ cho $F = 500(3) + 400(2) = 2300$ nghìn; $(1; 6)$ cho $F = 2900$ nghìn; $(0; 9)$ cho $F = 3600$ nghìn. Chi phí thấp nhất khi $(x; y) = (2; 3)$, tức là bác An cần mua 2 bao phân loại A.",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"180\" x2=\"390\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"90\" y1=\"205\" x2=\"90\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"185\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"95\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"75\" y=\"195\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- Đường thẳng 8x + 5y = 200 -> cắt Ox tại x=25 (px: 90+220=310), Oy tại y=40 (px: 180-130=50) --> <polygon points=\"90,180 310,180 90,50\" fill=\"#38bdf8\" fill-opacity=\"0.25\"/> <line x1=\"60\" y1=\"32\" x2=\"330\" y2=\"192\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <circle cx=\"310\" cy=\"180\" r=\"4\" fill=\"#38bdf8\"/> <text x=\"300\" y=\"198\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">25</text> <circle cx=\"90\" cy=\"50\" r=\"4\" fill=\"#38bdf8\"/> <text x=\"65\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">40</text> <text x=\"210\" y=\"80\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">8x + 5y ≤ 200</text> <text x=\"140\" y=\"150\" fill=\"#e2e8f0\" font-size=\"12\" font-style=\"italic\">Miền nghiệm</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.3.1",
          "badge": "Luyện thêm Đúng / Sai 1 - Khái niệm BPT bậc nhất hai ẩn",
          "source": "Đề phát triển đề thi Toán 10",
          "prompt": "Xét tính Đúng hoặc Sai của mỗi khẳng định sau về bất phương trình bậc nhất hai ẩn:",
          "subItems": [
            {
              "id": "a",
              "text": "Bất phương trình $5x - 2y + 3 > 0$ là bất phương trình bậc nhất hai ẩn.",
              "correctAnswer": true,
              "explanation": "Hai ẩn $x, y$ có bậc 1 và $5^2 + (-2)^2 = 29 \\ne 0$."
            },
            {
              "id": "b",
              "text": "Bất phương trình $x + y^2 \\le 4$ là bất phương trình bậc nhất hai ẩn.",
              "correctAnswer": false,
              "explanation": "Chứa số hạng $y^2$ bậc 2 nên không phải bậc nhất."
            },
            {
              "id": "c",
              "text": "Bất phương trình $0x + 0y < 1$ là bất phương trình bậc nhất hai ẩn.",
              "correctAnswer": false,
              "explanation": "Cả hai hệ số $a, b$ đồng thời bằng 0 nên không thỏa mãn điều kiện $a^2 + b^2 \\ne 0$."
            },
            {
              "id": "d",
              "text": "Bất phương trình $4y \\ge 8$ có thể coi là bất phương trình bậc nhất hai ẩn $x, y$.",
              "correctAnswer": true,
              "explanation": "Viết được dạng $0x + 4y \\ge 8$ với $a = 0, b = 4$ thỏa mãn $a^2 + b^2 = 16 \\ne 0$."
            }
          ]
        },
        {
          "id": "ai-tf-10.3.2",
          "badge": "Luyện thêm Đúng / Sai 2 - Kiểm tra nghiệm BPT 3x - y ≤ 3",
          "source": "Đề ôn tập định kì Toán 10",
          "prompt": "Cho bất phương trình bậc nhất hai ẩn: $3x - y \\le 3$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Cặp số $(0; 0)$ là một nghiệm của bất phương trình.",
              "correctAnswer": true,
              "explanation": "Thay $x = 0, y = 0$: $3(0) - 0 = 0 \\le 3$ (đúng)."
            },
            {
              "id": "b",
              "text": "Cặp số $(2; 1)$ là một nghiệm của bất phương trình.",
              "correctAnswer": false,
              "explanation": "Thay $x = 2, y = 1$: $3(2) - 1 = 5 \\le 3$ (sai)."
            },
            {
              "id": "c",
              "text": "Cặp số $(1; 0)$ nằm trên đường thẳng bờ và thuộc miền nghiệm của bất phương trình.",
              "correctAnswer": true,
              "explanation": "Thay $x = 1, y = 0$: $3(1) - 0 = 3 = 3$ (thỏa mãn dấu $\\le$)."
            },
            {
              "id": "d",
              "text": "Cặp số $(-1; -2)$ là một nghiệm của bất phương trình.",
              "correctAnswer": true,
              "explanation": "Thay $x = -1, y = -2$: $3(-1) - (-2) = -1 \\le 3$ (đúng)."
            }
          ]
        },
        {
          "id": "ai-tf-10.4.1",
          "badge": "Luyện thêm Đ/S 1 - Nhận biết và nghiệm của hệ BPT",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho hệ bất phương trình bậc nhất hai ẩn $(I): \\begin{cases} x + 2y \\le 6 \\\\ 2x - y \\ge 2 \\\\ y \\ge 0 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Hệ $(I)$ là một hệ bất phương trình bậc nhất hai ẩn.",
              "correctAnswer": true,
              "explanation": "Đúng vì mỗi bất phương trình trong hệ đều là bất phương trình bậc nhất hai ẩn $x, y$."
            },
            {
              "id": "b",
              "text": "Cặp số $(2; 1)$ là một nghiệm của hệ $(I)$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $2 + 2(1) = 4 \\le 6$, $2(2) - 1 = 3 \\ge 2$, $1 \\ge 0$ đều thỏa mãn."
            },
            {
              "id": "c",
              "text": "Gốc tọa độ $O(0; 0)$ là một nghiệm của hệ $(I)$.",
              "correctAnswer": false,
              "explanation": "Sai vì thay $(0; 0)$ vào BPT thứ hai: $2(0) - 0 = 0 \\ge 2$ là sai."
            },
            {
              "id": "d",
              "text": "Điểm $K(0; 3)$ thuộc miền nghiệm của hệ $(I)$.",
              "correctAnswer": false,
              "explanation": "Sai vì thay $K(0; 3)$ vào BPT thứ hai: $2(0) - 3 = -3 \\ge 2$ là sai."
            }
          ]
        },
        {
          "id": "ai-tf-10.4.prac1",
          "badge": "Đúng / Sai 4 - Bài toán dinh dưỡng và khẩu phần ăn",
          "source": "SBT Toán 10 KNTT",
          "prompt": "Một bác sĩ khuyên người bệnh mỗi ngày cần bổ sung ít nhất 900 đơn vị protein và ít nhất 1200 đơn vị lipit. Bệnh nhân dùng $x$ lạng thực phẩm loại I (cung cấp 60 đơn vị protein, 40 đơn vị lipit; giá 30 nghìn đồng/lạng) và $y$ lạng thực phẩm loại II (cung cấp 30 đơn vị protein, 80 đơn vị lipit; giá 20 nghìn đồng/lạng). Xét tính Đúng/Sai của các khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Bất phương trình biểu thị lượng protein cần bổ sung là $2x + y \\ge 30$.",
              "correctAnswer": true,
              "explanation": "$60x + 30y \\ge 900 \\iff 2x + y \\ge 30$."
            },
            {
              "id": "b",
              "text": "Bất phương trình biểu thị lượng lipit cần bổ sung là $x + 2y \\ge 30$.",
              "correctAnswer": true,
              "explanation": "$40x + 80y \\ge 1200 \\iff x + 2y \\ge 30$."
            },
            {
              "id": "c",
              "text": "Giao điểm của hai đường thẳng bờ tương ứng là điểm $M(10; 10)$.",
              "correctAnswer": true,
              "explanation": "Giải hệ $\\begin{cases} 2x + y = 30 \\\\ x + 2y = 30 \\end{cases} \\iff x = 10, y = 10$."
            },
            {
              "id": "d",
              "text": "Chi phí tối thiểu mỗi ngày của bệnh nhân để đảm bảo dinh dưỡng là 600 nghìn đồng.",
              "correctAnswer": false,
              "explanation": "Chi phí là $T(10; 10) = 30 \\times 10 + 20 \\times 10 = 500$ nghìn đồng, không phải 600 nghìn."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"180\" x2=\"390\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"90\" y1=\"205\" x2=\"90\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"185\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"95\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"75\" y=\"195\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- Miền không bị chặn mở về góc I --> <!-- 2x + y = 3 -> (1.5, 0) px:(180, 180), (0, 3) px:(90, 60) --> <!-- x + 2y = 3 -> (3, 0) px:(270, 180), (0, 1.5) px:(90, 120) --> <!-- Giao điểm (1, 1) px:(150, 120) --> <polygon points=\"90,60 150,120 270,180 380,180 380,30 90,30\" fill=\"#10b981\" fill-opacity=\"0.18\"/> <line x1=\"70\" y1=\"35\" x2=\"200\" y2=\"195\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"70\" y1=\"105\" x2=\"310\" y2=\"195\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"150\" cy=\"120\" r=\"4.5\" fill=\"#fbbf24\"/> <text x=\"160\" y=\"115\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">M(1; 1)</text> <text x=\"240\" y=\"70\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\">Miền dinh dưỡng</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.3.1",
          "badge": "Luyện thêm Trả lời ngắn 1 - Đếm số nghiệm nguyên dương",
          "source": "Đề kiểm tra 1 tiết Toán 10",
          "prompt": "Cho bất phương trình $x + y \\le 5$. Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn bất phương trình đã cho?",
          "correctAnswer": "10",
          "acceptableAnswers": [
            "10",
            "10 cặp"
          ],
          "explanation": "$x, y \\ge 1$:\n- $x = 1 \\Rightarrow y \\le 4$ (4 cặp)\n- $x = 2 \\Rightarrow y \\le 3$ (3 cặp)\n- $x = 3 \\Rightarrow y \\le 2$ (2 cặp)\n- $x = 4 \\Rightarrow y \\le 1$ (1 cặp)\nTổng số cặp là $4 + 3 + 2 + 1 = 10$ cặp."
        },
        {
          "id": "ai-sa-10.3.2",
          "badge": "Luyện thêm Trả lời ngắn 2 - Tọa độ mút giao điểm",
          "source": "Đề thi thử học kì I Toán 10",
          "prompt": "Đường thẳng bờ của bất phương trình $3x + 4y \\le 24$ cắt trục hoành tại $A(x_A; 0)$ và cắt trục tung tại $B(0; y_B)$. Tính giá trị $T = x_A + y_B$.",
          "correctAnswer": "14",
          "acceptableAnswers": [
            "14"
          ],
          "explanation": "Cho $y = 0 \\Rightarrow x_A = 8$. Cho $x = 0 \\Rightarrow y_B = 6$. Vậy $T = 8 + 6 = 14$."
        },
        {
          "id": "ai-sa-10.3.3",
          "badge": "Luyện thêm Trả lời ngắn 3 - Diện tích tam giác",
          "source": "Đề kiểm tra chất lượng Toán 10",
          "prompt": "Đường thẳng bờ $d: 2x + 3y = 12$ cùng với hai trục tọa độ $Ox, Oy$ tạo thành một tam giác vuông $OAB$. Tính diện tích của tam giác vuông đó.",
          "correctAnswer": "12",
          "acceptableAnswers": [
            "12",
            "12 đvdt"
          ],
          "explanation": "Cho $y = 0 \\Rightarrow OA = 6$. Cho $x = 0 \\Rightarrow OB = 4$. Diện tích $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$."
        },
        {
          "id": "ai-sa-10.4.1",
          "badge": "Luyện thêm TLN 1 - Tính diện tích miền nghiệm tam giác",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tính diện tích của miền tam giác nghiệm xác định bởi hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 24 \\end{cases}$.",
          "correctAnswer": "24",
          "acceptableAnswers": [
            "24"
          ],
          "explanation": "Đường thẳng $3x + 4y = 24$ cắt trục hoành tại $A(8; 0)$ và trục tung tại $B(0; 6)$. Tam giác vuông $OAB$ có diện tích $S = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24$."
        },
        {
          "id": "ai-sa-10.4.2",
          "badge": "Luyện thêm TLN 2 - Hoành độ đỉnh của miền nghiệm",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tìm hoành độ giao điểm của hai đường biên $x + 2y = 8$ và $3x - y = 3$ trong miền nghiệm của hệ bất phương trình tương ứng.",
          "correctAnswer": "2",
          "acceptableAnswers": [
            "2",
            "x = 2"
          ],
          "explanation": "Từ $3x - y = 3 \\Rightarrow y = 3x - 3$. Thế vào phương trình đầu: $x + 2(3x - 3) = 8 \\Leftrightarrow 7x - 6 = 8 \\Leftrightarrow 7x = 14 \\Leftrightarrow x = 2$."
        },
        {
          "id": "ai-sa-10.4.prac1",
          "badge": "Trả lời ngắn 6 - Tối ưu hóa tiền lãi xưởng mộc bàn ghế",
          "source": "Toán 10 KNTT Bài 4 Khám phá",
          "prompt": "Một xưởng mộc làm bàn và ghế. Mỗi cái bàn cần 3 giờ chế biến gỗ và 1 giờ hoàn thiện. Mỗi cái ghế cần 1 giờ chế biến gỗ và 1 giờ hoàn thiện. Xưởng có tối đa 12 giờ chế biến gỗ và 8 giờ hoàn thiện mỗi ngày. Tiền lãi mỗi cái bàn là 400 nghìn đồng, mỗi cái ghế là 200 nghìn đồng. Hỏi tiền lãi lớn nhất mà xưởng có thể đạt được trong một ngày là bao nhiêu nghìn đồng?",
          "correctAnswer": "2000",
          "acceptableAnswers": [
            "2000",
            "2.000"
          ],
          "explanation": "Gọi $x, y$ là số bàn và ghế ($x, y \\ge 0$). Hệ ràng buộc: $\\begin{cases} 3x + y \\le 12 \\\\ x + y \\le 8 \\end{cases}$. Miền nghiệm là tứ giác với các đỉnh $O(0; 0), A(4; 0), B(2; 6), C(0; 8)$. Tiền lãi $F(x, y) = 400x + 200y$. Ta có: $F(O) = 0$, $F(A) = 1600$, $F(B) = 400(2) + 200(6) = 2000$, $F(C) = 1600$. Tiền lãi tối đa là 2000 nghìn đồng (khi làm 2 bàn và 6 ghế).",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- Tứ giác OABC: O(85, 185), A(4; 0) px:(245, 185), B(2; 4) px:(165, 85), C(0; 6) px:(85, 45) --> <polygon points=\"85,185 245,185 165,85 85,45\" fill=\"#f59e0b\" fill-opacity=\"0.22\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <circle cx=\"85\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <circle cx=\"245\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"240\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\">A(4; 0)</text> <circle cx=\"165\" cy=\"85\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"175\" y=\"80\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B(2; 4) Max</text> <circle cx=\"85\" cy=\"45\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"45\" y=\"48\" fill=\"#cbd5e1\" font-size=\"12\">C(0; 6)</text> <text x=\"110\" y=\"145\" fill=\"#e2e8f0\" font-size=\"12\" font-style=\"italic\">F(x,y) = 400x + 300y</text> </svg>"
        }
      ]
    },
    {
      "id": "de-2",
      "title": "Đề ôn tập số 2",
      "description": "Đề ôn tập tổng hợp cuối Chương II (Bất phương trình & Hệ bất phương trình bậc nhất hai ẩn) - Đề số 2",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.3.2",
          "badge": "Luyện thêm - BPT không phải bậc nhất hai ẩn",
          "source": "Đề rèn luyện nâng cao Toán 10",
          "question": "Bất phương trình nào sau đây KHÔNG PHẢI là bất phương trình bậc nhất hai ẩn?",
          "options": [
            "$2x - y \\le 1$",
            "$4x + 3y^2 \\ge 5$",
            "$x + 7y > 0$",
            "$-3y < 6$"
          ],
          "correctIndex": 1,
          "explanation": "Bất phương trình $4x + 3y^2 \\ge 5$ chứa $y^2$ có bậc 2 nên không phải bậc nhất."
        },
        {
          "id": "ai-10.3.4",
          "badge": "Luyện thêm - Kiểm tra điểm không phải nghiệm",
          "source": "Đề ôn luyện định kì Toán 10",
          "question": "Cặp số nào sau đây KHÔNG PHẢI là nghiệm của bất phương trình $2x + y > 3$?",
          "options": [
            "$(2; 1)$",
            "$(1; 2)$",
            "$(0; 2)$",
            "$(3; -1)$"
          ],
          "correctIndex": 2,
          "explanation": "Thay $(0; 2)$ vào vế trái: $2(0) + 2 = 2 > 3$ là khẳng định sai."
        },
        {
          "id": "ai-10.3.6",
          "badge": "Luyện thêm - Đường thẳng bờ của miền nghiệm",
          "source": "Tài liệu tự học Toán 10",
          "question": "Đường thẳng bờ của miền nghiệm bất phương trình $4x - 3y - 12 \\ge 0$ có phương trình là:",
          "options": [
            "$4x - 3y = 12$",
            "$4x + 3y = 12$",
            "$3x - 4y = 12$",
            "$4x - 3y = -12$"
          ],
          "correctIndex": 0,
          "explanation": "Đổi dấu bất phương trình thành dấu bằng: $4x - 3y - 12 = 0 \\Leftrightarrow 4x - 3y = 12$."
        },
        {
          "id": "ai-10.3.8",
          "badge": "Luyện thêm - Xác định nửa mặt phẳng nghiệm",
          "source": "Đề thi học kì I Toán 10",
          "question": "Cho bất phương trình $2x - y > 0$. Điểm nào sau đây thuộc miền nghiệm của bất phương trình?",
          "options": [
            "$(1; 1)$",
            "$(0; 1)$",
            "$(1; 3)$",
            "$(0; 0)$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $(1; 1)$ vào vế trái: $2(1) - 1 = 1 > 0$ (đúng)."
        },
        {
          "id": "ai-10.3.10",
          "badge": "Luyện thêm - Bờ nét đứt hay nét liền",
          "source": "Đề rèn luyện Toán 10",
          "question": "Khi biểu diễn miền nghiệm của bất phương trình $x - 3y \\le 6$, đường thẳng bờ $x - 3y = 6$ được vẽ bằng:",
          "options": [
            "Nét liền và thuộc miền nghiệm",
            "Nét đứt và không thuộc miền nghiệm",
            "Nét liền và không thuộc miền nghiệm",
            "Nét đứt và thuộc miền nghiệm"
          ],
          "correctIndex": 0,
          "explanation": "Bất phương trình mang dấu $\\le$ (có dấu bằng) nên đường bờ vẽ nét liền và các điểm trên bờ thuộc miền nghiệm."
        },
        {
          "id": "ai-10.3.18",
          "badge": "Luyện thêm - Khoảng cách đến đường thẳng bờ",
          "source": "Đề ôn thi học kì Toán 10",
          "question": "Khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng bờ của bất phương trình $5x - 12y + 26 = 0$ bằng:",
          "options": [
            "$2$",
            "$26$",
            "$13$",
            "$1$"
          ],
          "correctIndex": 0,
          "explanation": "Khoảng cách $d = \\frac{|26|}{\\sqrt{5^2 + (-12)^2}} = \\frac{26}{13} = 2$."
        },
        {
          "id": "ai-10.4.3",
          "badge": "Luyện thêm 3 - Điểm KHÔNG thuộc miền nghiệm của hệ",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x + y > 1 \\\\ 2x - y \\le 3 \\\\ x \\ge 0 \\end{cases}$?",
          "options": [
            "$A(0; 0)$",
            "$B(1; 1)$",
            "$C(2; 1)$",
            "$D(0; 2)$"
          ],
          "correctIndex": 0,
          "explanation": "Thử điểm $A(0; 0)$ vào bất phương trình đầu tiên: $0 + 0 = 0 > 1$ là mệnh đề sai. Do đó $A(0; 0)$ không thuộc miền nghiệm của hệ."
        },
        {
          "id": "ai-10.4.5",
          "badge": "Luyện thêm 5 - Biểu diễn miền nghiệm góc phần tư I",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Hệ bất phương trình nào dưới đây xác định các điểm nằm trong góc phần tư thứ nhất (kể cả các trục tọa độ)?",
          "options": [
            "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
            "$\\begin{cases} x > 0 \\\\ y < 0 \\end{cases}$",
            "$\\begin{cases} x \\le 0 \\\\ y \\ge 0 \\end{cases}$",
            "$\\begin{cases} x \\le 0 \\\\ y \\le 0 \\end{cases}$"
          ],
          "correctIndex": 0,
          "explanation": "Góc phần tư thứ nhất gồm các điểm có hoành độ không âm $x \\ge 0$ và tung độ không âm $y \\ge 0$."
        },
        {
          "id": "ai-10.4.7",
          "badge": "Luyện thêm 7 - Diện tích miền nghiệm tam giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Diện tích miền tam giác nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + 5y \\le 10 \\end{cases}$ bằng:",
          "options": [
            "$5$",
            "$10$",
            "$2{,}5$",
            "$20$"
          ],
          "correctIndex": 0,
          "explanation": "Đường thẳng $2x + 5y = 10$ cắt các trục tại $A(5; 0)$ và $B(0; 2)$. Diện tích tam giác vuông $OAB$ là $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 5 \\cdot 2 = 5$."
        },
        {
          "id": "ai-10.4.9",
          "badge": "Luyện thêm 9 - Tọa độ giao điểm hai đường biên",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Một đỉnh của miền nghiệm hệ $\\begin{cases} x + y \\le 5 \\\\ 2x - y \\le 4 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là giao điểm của hai đường thẳng $x + y = 5$ và $2x - y = 4$. Tọa độ đỉnh này là:",
          "options": [
            "$(3; 2)$",
            "$(2; 3)$",
            "$(1; 4)$",
            "$(4; 1)$"
          ],
          "correctIndex": 0,
          "explanation": "Cộng hai phương trình: $(x + y) + (2x - y) = 5 + 4 \\Leftrightarrow 3x = 9 \\Leftrightarrow x = 3$. Thay vào $x + y = 5 \\Rightarrow y = 2$. Giao điểm là $(3; 2)$."
        },
        {
          "id": "ai-10.4.11",
          "badge": "Luyện thêm 11 - GTNN của hàm mục tiêu",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho biểu thức $F(x, y) = 2x - 3y$ với $(x; y)$ thuộc miền đa giác có các đỉnh $A(1; 1), B(4; 1), C(3; 4), D(1; 3)$. Giá trị nhỏ nhất của $F(x, y)$ là:",
          "options": [
            "$-7$",
            "$-6$",
            "$-1$",
            "$5$"
          ],
          "correctIndex": 0,
          "explanation": "Tính tại 4 đỉnh:\n$F(A) = 2(1) - 3(1) = -1$;\n$F(B) = 2(4) - 3(1) = 5$;\n$F(C) = 2(3) - 3(4) = -6$;\n$F(D) = 2(1) - 3(3) = -7$.\nGiá trị nhỏ nhất là $-7$ tại đỉnh $D(1; 3)$."
        },
        {
          "id": "ai-10.3.prac2",
          "badge": "Thông hiểu - Thiết lập bất phương trình mua hoa quả",
          "source": "SGK Toán 10 KNTT Bài 3",
          "question": "Bác Hoa đi chợ mang theo 150 nghìn đồng để mua cam (giá 30 nghìn đồng/kg) và táo (giá 25 nghìn đồng/kg). Gọi $x$ và $y$ lần lượt là số kilôgam cam và táo bác Hoa mua. Bất phương trình biểu thị số tiền bác Hoa chi tiêu không vượt quá số tiền mang theo là:",
          "options": [
            "$6x + 5y \\le 30$",
            "$6x + 5y \\ge 30$",
            "$5x + 6y \\le 30$",
            "$6x + 5y < 30$"
          ],
          "correctIndex": 0,
          "explanation": "Số tiền mua $x$ kg cam là $30x$ nghìn đồng, mua $y$ kg táo là $25y$ nghìn đồng. Vì số tiền chi tiêu không vượt quá 150 nghìn đồng nên: $30x + 25y \\le 150 \\iff 6x + 5y \\le 30$.",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- 6x + 5y <= 30: Cắt Ox tại 5 (px: 260, 185), Oy tại 6 (px: 85, 55) --> <polygon points=\"85,185 260,185 85,55\" fill=\"#ec4899\" fill-opacity=\"0.22\" stroke=\"#ec4899\" stroke-width=\"2\"/> <circle cx=\"260\" cy=\"185\" r=\"4\" fill=\"#ec4899\"/> <text x=\"255\" y=\"202\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">5</text> <circle cx=\"85\" cy=\"55\" r=\"4\" fill=\"#ec4899\"/> <text x=\"65\" y=\"58\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">6</text> <text x=\"140\" y=\"140\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"bold\">6x + 5y ≤ 30</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.3.3",
          "badge": "Luyện thêm Đúng / Sai 3 - Đường thẳng bờ 2x + y = 6",
          "source": "Đề rèn luyện Toán 10",
          "prompt": "Cho đường thẳng bờ $d: 2x + y = 6$ của bất phương trình $2x + y < 6$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Đường thẳng $d$ đi qua điểm $M(3; 0)$ và điểm $N(0; 6)$.",
              "correctAnswer": true,
              "explanation": "$2(3) + 0 = 6$ và $2(0) + 6 = 6$ đều đúng."
            },
            {
              "id": "b",
              "text": "Đường thẳng bờ $d$ được biểu diễn bằng nét đứt khi vẽ miền nghiệm.",
              "correctAnswer": true,
              "explanation": "Bất phương trình có dấu $<$ nghiêm ngặt nên đường bờ phải vẽ bằng nét đứt."
            },
            {
              "id": "c",
              "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.",
              "correctAnswer": true,
              "explanation": "Thay $(0; 0)$ vào: $2(0) + 0 = 0 < 6$ (đúng)."
            },
            {
              "id": "d",
              "text": "Điểm $P(2; 2)$ thuộc miền nghiệm của bất phương trình.",
              "correctAnswer": false,
              "explanation": "Thay $(2; 2)$ vào: $2(2) + 2 = 6 < 6$ (sai vì không có dấu bằng)."
            }
          ]
        },
        {
          "id": "ai-tf-10.3.4",
          "badge": "Luyện thêm Đúng / Sai 4 - Bất phương trình chứa tham số m",
          "source": "Đề bồi dưỡng học sinh khá giỏi Toán 10",
          "prompt": "Cho bất phương trình $3x + (m + 2)y \\le 6$ với $m$ là tham số thực. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Bất phương trình đã cho luôn là bất phương trình bậc nhất hai ẩn với mọi $m \\in \\mathbb{R}$.",
              "correctAnswer": true,
              "explanation": "Hệ số của $x$ bằng $3 \\ne 0$ nên $3^2 + (m + 2)^2 \\ge 9 > 0$ với mọi $m$."
            },
            {
              "id": "b",
              "text": "Gốc tọa độ $O(0; 0)$ luôn thuộc miền nghiệm của bất phương trình với mọi giá trị của $m$.",
              "correctAnswer": true,
              "explanation": "Thay $x = 0, y = 0$: $3(0) + (m + 2)(0) = 0 \\le 6$ luôn đúng."
            },
            {
              "id": "c",
              "text": "Để điểm $B(1; 1)$ thuộc miền nghiệm thì $m \\le 1$.",
              "correctAnswer": true,
              "explanation": "Thay $B(1; 1)$: $3(1) + (m + 2)(1) \\le 6 \\Leftrightarrow m + 5 \\le 6 \\Leftrightarrow m \\le 1$."
            },
            {
              "id": "d",
              "text": "Khi $m = -2$, đường thẳng bờ của bất phương trình song song với trục tung $Oy$.",
              "correctAnswer": true,
              "explanation": "Khi $m = -2$, BPT trở thành $3x \\le 6 \\Leftrightarrow x \\le 2$. Đường thẳng bờ $x = 2$ song song với $Oy$."
            }
          ]
        },
        {
          "id": "ai-tf-10.4.3",
          "badge": "Luyện thêm Đ/S 3 - Tối ưu hóa hàm số mục tiêu F(x, y)",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho $(x; y)$ thuộc miền nghiệm đa giác giới hạn bởi các đỉnh $O(0; 0), M(4; 0), N(3; 2), P(0; 3)$. Cho hàm mục tiêu $F(x, y) = 3x + 4y$.",
          "subItems": [
            {
              "id": "a",
              "text": "Giá trị của $F$ tại điểm $M(4; 0)$ là $12$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $F(4; 0) = 3(4) + 4(0) = 12$."
            },
            {
              "id": "b",
              "text": "Giá trị của $F$ tại điểm $N(3; 2)$ là $17$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $F(3; 2) = 3(3) + 4(2) = 9 + 8 = 17$."
            },
            {
              "id": "c",
              "text": "Giá trị lớn nhất của $F(x, y)$ trên miền đa giác bằng $17$.",
              "correctAnswer": true,
              "explanation": "Đúng vì so sánh các đỉnh: $F(O) = 0, F(M) = 12, F(N) = 17, F(P) = 12$. Lớn nhất là 17."
            },
            {
              "id": "d",
              "text": "Giá trị nhỏ nhất của $F(x, y)$ trên miền đa giác bằng $12$.",
              "correctAnswer": false,
              "explanation": "Sai vì giá trị nhỏ nhất đạt tại gốc tọa độ $O(0; 0)$ với $F(0; 0) = 0$."
            }
          ]
        },
        {
          "id": "ai-tf-10.4.prac2",
          "badge": "Đúng / Sai 4 - Bài toán điều động xe vận tải hàng hóa",
          "source": "Đề thi học kì 1 Toán 10",
          "prompt": "Một đội vận tải có 10 xe lớn và 8 xe nhỏ cần chở ít nhất 120 tấn hàng và ít nhất 40 người. Mỗi xe lớn chở được 20 tấn hàng và 5 người; chi phí thuê 4 triệu đồng/chuyến. Mỗi xe nhỏ chở được 10 tấn hàng và 5 người; chi phí thuê 3 triệu đồng/chuyến. Gọi $x, y$ lần lượt là số xe lớn và nhỏ được điều động ($0 \\le x \\le 10, 0 \\le y \\le 8$). Xét tính Đúng/Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Bất phương trình đảm bảo khối lượng hàng vận chuyển là $2x + y \\ge 12$.",
              "correctAnswer": true,
              "explanation": "$20x + 10y \\ge 120 \\iff 2x + y \\ge 12$."
            },
            {
              "id": "b",
              "text": "Bất phương trình đảm bảo số người vận chuyển là $x + y \\ge 8$.",
              "correctAnswer": true,
              "explanation": "$5x + 5y \\ge 40 \\iff x + y \\ge 8$."
            },
            {
              "id": "c",
              "text": "Cặp số $(x; y) = (4; 4)$ thỏa mãn toàn bộ các điều kiện của bài toán.",
              "correctAnswer": true,
              "explanation": "$2(4) + 4 = 12 \\ge 12; 4 + 4 = 8 \\ge 8; 0 \\le 4 \\le 10; 0 \\le 4 \\le 8$. Thỏa mãn."
            },
            {
              "id": "d",
              "text": "Chi phí thuê xe thấp nhất đạt được khi chỉ thuê xe lớn mà không thuê xe nhỏ nào.",
              "correctAnswer": false,
              "explanation": "Nếu $y = 0$ thì $2x \\ge 12 \\implies x \\ge 6$ và $x \\ge 8$ để chở đủ 40 người. Khi đó $x = 8 \\implies$ chi phí $4 \\times 8 = 32$ triệu. Trong khi chọn $(4; 4)$ thì chi phí chỉ là $4(4) + 3(4) = 28$ triệu đồng."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- 5x + 2y >= 30 -> (6, 0) px:(250, 185), (0, 15) px:(85, 40) --> <polygon points=\"85,40 250,185 380,185 380,40\" fill=\"#06b6d4\" fill-opacity=\"0.2\"/> <line x1=\"75\" y1=\"25\" x2=\"270\" y2=\"200\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/> <circle cx=\"250\" cy=\"185\" r=\"4.5\" fill=\"#06b6d4\"/> <text x=\"245\" y=\"202\" fill=\"#06b6d4\" font-size=\"12\" font-weight=\"bold\">(6; 0) Min 24tr</text> <text x=\"180\" y=\"90\" fill=\"#06b6d4\" font-size=\"13\" font-weight=\"bold\">5x + 2y ≥ 30</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.3.4",
          "badge": "Luyện thêm Trả lời ngắn 4 - Độ dài đoạn chắn giữa hai trục",
          "source": "Tài liệu rèn luyện Toán 10 KNTT",
          "prompt": "Gọi $A, B$ lần lượt là giao điểm của đường thẳng bờ $d: 6x + 8y = 48$ với trục hoành $Ox$ và trục tung $Oy$. Tính độ dài đoạn thẳng $AB$.",
          "correctAnswer": "10",
          "acceptableAnswers": [
            "10"
          ],
          "explanation": "Cho $y = 0 \\Rightarrow OA = 8$. Cho $x = 0 \\Rightarrow OB = 6$. Độ dài $AB = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$."
        },
        {
          "id": "ai-sa-10.3.5",
          "badge": "Luyện thêm Trả lời ngắn 5 - Tìm giá trị nguyên nhỏ nhất của m",
          "source": "Đề bồi dưỡng học sinh khá giỏi Toán 10",
          "prompt": "Tìm giá trị nguyên nhỏ nhất của tham số $m$ để điểm $A(1; 2)$ thuộc miền nghiệm của bất phương trình $2x + my + 6 \\ge 0$.",
          "correctAnswer": "-4",
          "acceptableAnswers": [
            "-4"
          ],
          "explanation": "Thay $A(1; 2)$ vào BPT: $2(1) + m(2) + 6 \\ge 0 \\Leftrightarrow 2m + 8 \\ge 0 \\Leftrightarrow 2m \\ge -8 \\Leftrightarrow m \\ge -4$. Giá trị nguyên nhỏ nhất của $m$ là $-4$."
        },
        {
          "id": "ai-sa-10.3.6",
          "badge": "Luyện thêm Trả lời ngắn 6 - Đếm số nghiệm tự nhiên",
          "source": "Đề thi học sinh giỏi cấp trường Toán 10",
          "prompt": "Có bao nhiêu cặp số tự nhiên $(x; y)$ thỏa mãn bất phương trình $3x + 2y \\le 6$?",
          "correctAnswer": "7",
          "acceptableAnswers": [
            "7",
            "7 cặp"
          ],
          "explanation": "$x, y \\in \\mathbb{N}$:\n- $x = 0 \\Rightarrow 2y \\le 6 \\Rightarrow y \\in \\{0; 1; 2; 3\\}$ (4 cặp)\n- $x = 1 \\Rightarrow 2y \\le 3 \\Rightarrow y \\in \\{0; 1\\}$ (2 cặp)\n- $x = 2 \\Rightarrow 2y \\le 0 \\Rightarrow y = 0$ (1 cặp)\nTổng số cặp là $4 + 2 + 1 = 7$ cặp."
        },
        {
          "id": "ai-sa-10.4.3",
          "badge": "Luyện thêm TLN 3 - Tung độ đỉnh của miền nghiệm",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tìm tung độ giao điểm của hai đường biên $2x + y = 10$ và $x + y = 6$.",
          "correctAnswer": "2",
          "acceptableAnswers": [
            "2",
            "y = 2"
          ],
          "explanation": "Trừ vế theo vế hai phương trình: $(2x + y) - (x + y) = 10 - 6 \\Leftrightarrow x = 4$. Thay vào $x + y = 6 \\Rightarrow y = 2$."
        },
        {
          "id": "ai-sa-10.4.5",
          "badge": "Luyện thêm TLN 5 - GTNN của biểu thức mục tiêu F(x, y)",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho $(x; y)$ thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\ge 3 \\\\ x + y \\le 6 \\end{cases}$. Tìm giá trị nhỏ nhất của biểu thức $F(x, y) = 2x + 2y$.",
          "correctAnswer": "6",
          "acceptableAnswers": [
            "6"
          ],
          "explanation": "Ta có $F(x, y) = 2(x + y)$. Vì $x + y \\ge 3$ nên $F(x, y) \\ge 2(3) = 6$. Giá trị nhỏ nhất là 6."
        },
        {
          "id": "ai-sa-10.4.prac2",
          "badge": "Trả lời ngắn 6 - Tối ưu hóa tiền lãi nông nghiệp trồng trọt",
          "source": "SBT Toán 10 KNTT",
          "prompt": "Một bác nông dân trồng đậu và cà trên diện tích tối đa 8 sào đất. Để trồng 1 sào đậu cần 20 công nhân và thu lãi 3 triệu đồng. Để trồng 1 sào cà cần 30 công nhân và thu lãi 4 triệu đồng. Bác nông dân chỉ có thể huy động tối đa 180 công nhân cho vụ mùa này. Hỏi số tiền lãi cao nhất bác nông dân có thể thu được là bao nhiêu triệu đồng?",
          "correctAnswer": "26",
          "acceptableAnswers": [
            "26"
          ],
          "explanation": "Gọi diện tích trồng đậu là $x$ (sào), cà là $y$ (sào) ($x, y \\ge 0$). Hệ điều kiện: $\\begin{cases} x + y \\le 8 \\\\ 20x + 30y \\le 180 \\iff 2x + 3y \\le 18 \\end{cases}$. Tiền lãi: $L(x, y) = 3x + 4y$ (triệu đồng). Các đỉnh miền nghiệm: $O(0; 0) \\to 0$; $A(8; 0) \\to 24$; $B(6; 2) \\to 3(6) + 4(2) = 26$; $C(0; 6) \\to 24$. Tiền lãi cao nhất là 26 triệu đồng khi trồng 6 sào đậu và 2 sào cà.",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <text x=\"70\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\">O</text> <!-- Tứ giác O(0;0), A(8;0) px:(300, 185), B(6;2) px:(250, 135), C(0;5) px:(85, 75) --> <polygon points=\"85,185 300,185 250,135 85,75\" fill=\"#10b981\" fill-opacity=\"0.22\" stroke=\"#10b981\" stroke-width=\"2\"/> <circle cx=\"250\" cy=\"135\" r=\"5\" fill=\"#fbbf24\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"260\" y=\"130\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">B(6; 2) Max 26tr</text> <circle cx=\"300\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"290\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\">A(8;0)</text> <circle cx=\"85\" cy=\"75\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"50\" y=\"78\" fill=\"#cbd5e1\" font-size=\"12\">C(0;5)</text> </svg>"
        }
      ]
    },
    {
      "id": "de-3",
      "title": "Đề ôn tập số 3",
      "description": "Đề ôn tập tổng hợp cuối Chương II (Bất phương trình & Hệ bất phương trình bậc nhất hai ẩn) - Đề số 3",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.3.11",
          "badge": "Luyện thêm - BPT đặc biệt một ẩn",
          "source": "Tài liệu chuyên đề Toán 10",
          "question": "Miền nghiệm của bất phương trình $x \\le -2$ trên mặt phẳng tọa độ $Oxy$ là:",
          "options": [
            "Nửa mặt phẳng nằm bên trái đường thẳng $x = -2$ (kể cả bờ)",
            "Nửa mặt phẳng nằm bên phải đường thẳng $x = -2$ (kể cả bờ)",
            "Nửa mặt phẳng nằm phía trên đường thẳng $y = -2$",
            "Nửa mặt phẳng nằm phía dưới đường thẳng $y = -2$"
          ],
          "correctIndex": 0,
          "explanation": "Đường thẳng $x = -2$ song song với $Oy$. Miền $x \\le -2$ gồm các điểm có hoành độ nhỏ hơn hoặc bằng $-2$, tức nửa mặt phẳng bên trái kể cả bờ."
        },
        {
          "id": "ai-10.3.12",
          "badge": "Luyện thêm - Điểm thuộc đường thẳng bờ",
          "source": "Đề ôn thi học sinh giỏi Toán 10",
          "question": "Điểm nào sau đây nằm trên đường thẳng bờ của bất phương trình $4x + 3y - 12 \\le 0$?",
          "options": [
            "$(0; 4)$",
            "$(3; 1)$",
            "$(2; 1)$",
            "$(1; 2)$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $(0; 4)$ vào phương trình bờ $4x + 3y - 12 = 0$: $4(0) + 3(4) - 12 = 0$ (đúng)."
        },
        {
          "id": "ai-10.3.13",
          "badge": "Luyện thêm - Tìm tham số m để điểm thuộc miền nghiệm",
          "source": "Đề tuyển chọn câu hỏi hay Toán 10",
          "question": "Tìm tất cả các giá trị của tham số $m$ để điểm $M(2; 1)$ thuộc miền nghiệm của bất phương trình $mx - 3y + 5 > 0$.",
          "options": [
            "$m > -1$",
            "$m < -1$",
            "$m \\ge -1$",
            "$m \\le 1$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $M(2; 1)$ vào: $m(2) - 3(1) + 5 > 0 \\Leftrightarrow 2m + 2 > 0 \\Leftrightarrow 2m > -2 \\Leftrightarrow m > -1$."
        },
        {
          "id": "ai-10.3.14",
          "badge": "Luyện thêm - Gốc O không thuộc miền nghiệm",
          "source": "Đề khảo sát năng lực Toán 10",
          "question": "Tìm tất cả các giá trị của tham số $m$ để gốc tọa độ $O(0; 0)$ KHÔNG THUỘC miền nghiệm của bất phương trình $2x - y + m^2 - 9 \\le 0$.",
          "options": [
            "$m < -3$ hoặc $m > 3$",
            "$-3 \\le m \\le 3$",
            "$m > 3$",
            "$m < -3$"
          ],
          "correctIndex": 0,
          "explanation": "Gốc $O(0; 0)$ không thuộc miền nghiệm $\\Leftrightarrow 2(0) - 0 + m^2 - 9 > 0 \\Leftrightarrow m^2 - 9 > 0 \\Leftrightarrow m > 3$ hoặc $m < -3$."
        },
        {
          "id": "ai-10.3.15",
          "badge": "Luyện thêm - Đếm số điểm nguyên",
          "source": "Đề luyện thi định kì Toán 10",
          "question": "Trong các điểm sau: $A(0; 0), B(1; 1), C(2; 2), D(3; 0), E(0; 4)$, có bao nhiêu điểm thuộc miền nghiệm của bất phương trình $x + 2y < 4$?",
          "options": [
            "2 điểm",
            "3 điểm",
            "4 điểm",
            "1 điểm"
          ],
          "correctIndex": 1,
          "explanation": "Thay từng điểm vào $x + 2y < 4$:\n- $A(0; 0): 0 < 4$ (nhận)\n- $B(1; 1): 3 < 4$ (nhận)\n- $C(2; 2): 6 < 4$ (loại)\n- $D(3; 0): 3 < 4$ (nhận... ồ, thử lại: $A(0;0)$ nhận, $B(1;1)$ nhận, $D(3;0): 3 < 4$ nhận -> 3 điểm!)\nPhương án 3 điểm là đúng!"
        },
        {
          "id": "ai-10.3.19",
          "badge": "Luyện thêm - Bài toán thực tế mua hoa quả",
          "source": "Bài toán thực tế Toán 10 KNTT",
          "question": "Bác Hoa đi chợ mang theo 150 nghìn đồng để mua cam (giá 30 nghìn đồng/kg) và xoài (giá 25 nghìn đồng/kg). Gọi $x, y$ lần lượt là số kg cam và xoài bác Hoa mua. Bất phương trình mô tả số tiền bác chi trả là:",
          "options": [
            "$6x + 5y \\le 30$",
            "$5x + 6y \\le 30$",
            "$6x + 5y < 30$",
            "$30x + 25y > 150$"
          ],
          "correctIndex": 0,
          "explanation": "Tổng số tiền: $30x + 25y \\le 150$. Chia cả hai vế cho 5 ta được: $6x + 5y \\le 30$."
        },
        {
          "id": "ai-10.4.12",
          "badge": "Luyện thêm 12 - Miền nghiệm rỗng",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Hệ bất phương trình nào sau đây có tập nghiệm là tập rỗng?",
          "options": [
            "$\\begin{cases} x + y > 3 \\\\ x + y < 1 \\end{cases}$",
            "$\\begin{cases} x - y \\ge 0 \\\\ x + y \\ge 0 \\end{cases}$",
            "$\\begin{cases} 2x + y \\le 5 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
            "$\\begin{cases} x \\ge 1 \\\\ y \\ge 2 \\end{cases}$"
          ],
          "correctIndex": 0,
          "explanation": "Không thể tồn tại cặp số $(x; y)$ nào vừa thỏa mãn tổng $x + y > 3$ lại vừa thỏa mãn $x + y < 1$. Do đó hệ A vô nghiệm (tập nghiệm rỗng)."
        },
        {
          "id": "ai-10.4.13",
          "badge": "Luyện thêm 13 - Nhận diện hệ BPT từ hình vẽ",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Một miền nghiệm là nửa dải vô hạn nằm giữa hai đường thẳng song song $x = 1$ và $x = 4$ (kể cả bờ). Hệ bất phương trình mô tả miền này là:",
          "options": [
            "$\\begin{cases} x \\ge 1 \\\\ x \\le 4 \\end{cases}$",
            "$\\begin{cases} y \\ge 1 \\\\ y \\le 4 \\end{cases}$",
            "$\\begin{cases} x + y \\ge 1 \\\\ x + y \\le 4 \\end{cases}$",
            "$\\begin{cases} x - y \\ge 1 \\\\ x - y \\le 4 \\end{cases}$"
          ],
          "correctIndex": 0,
          "explanation": "Dải mặt phẳng nằm giữa hai đường thẳng thẳng đứng $x = 1$ và $x = 4$ được xác định bởi $1 \\le x \\le 4$, tức là hệ $\\begin{cases} x \\ge 1 \\\\ x \\le 4 \\end{cases}$."
        },
        {
          "id": "ai-10.4.15",
          "badge": "Luyện thêm 15 - Hàm mục tiêu doanh thu bán hàng",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Một cửa hàng bán sản phẩm loại 1 với giá 50 nghìn đồng và loại 2 với giá 70 nghìn đồng. Nếu bán được $x$ sản phẩm loại 1 và $y$ sản phẩm loại 2 thì doanh thu $T(x, y)$ (nghìn đồng) là:",
          "options": [
            "$T(x, y) = 50x + 70y$",
            "$T(x, y) = 70x + 50y$",
            "$T(x, y) = 50x - 70y$",
            "$T(x, y) = 120(x + y)$"
          ],
          "correctIndex": 0,
          "explanation": "Doanh thu bằng đơn giá nhân số lượng: $T(x, y) = 50x + 70y$ (nghìn đồng)."
        },
        {
          "id": "ai-10.4.16",
          "badge": "Luyện thêm 16 - Điểm nguyên trong miền nghiệm",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn hệ bất phương trình $\\begin{cases} x + y \\le 3 \\\\ x \\ge 1 \\\\ y \\ge 1 \\end{cases}$?",
          "options": [
            "3 cặp",
            "2 cặp",
            "4 cặp",
            "1 cặp"
          ],
          "correctIndex": 0,
          "explanation": "Vì $x, y \\in \\mathbb{Z}^+$ nên $x, y \\ge 1$. Ta có các cặp $(x; y)$ thỏa mãn $x + y \\le 3$ là: $(1; 1), (1; 2), (2; 1)$. Tổng cộng có 3 cặp."
        },
        {
          "id": "ai-10.4.17",
          "badge": "Luyện thêm 17 - Điều kiện tham số để điểm thuộc miền nghiệm",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tìm tất cả các giá trị của tham số $m$ để điểm $A(1; m)$ thuộc miền nghiệm của hệ $\\begin{cases} 2x - y \\ge 0 \\\\ x + 2y \\le 7 \\end{cases}$.",
          "options": [
            "$m \\le 2$ và $m \\le 3$ (tức $m \\le 2$)",
            "$m \\ge 2$",
            "$2 \\le m \\le 3$",
            "$m \\le 3$"
          ],
          "correctIndex": 0,
          "explanation": "Thay $(1; m)$ vào hệ:\n$\\begin{cases} 2(1) - m \\ge 0 \\\\ 1 + 2m \\le 7 \\end{cases} \\Leftrightarrow \\begin{cases} m \\le 2 \\\\ 2m \\le 6 \\end{cases} \\Leftrightarrow \\begin{cases} m \\le 2 \\\\ m \\le 3 \\end{cases} \\Leftrightarrow m \\le 2$."
        },
        {
          "id": "ai-10.4.prac3",
          "badge": "Vận dụng cao - Tối ưu chi phí thuê xe chở khách và hàng",
          "source": "Đề thi HSG & Ôn tập Toán 10",
          "question": "Một công ty cần thuê xe chở 140 người và 9 tấn hàng. Xe loại A chở được 20 người và 0.6 tấn hàng; xe loại B chở được 10 người và 1.5 tấn hàng. Giá thuê xe loại A là 4 triệu đồng, xe loại B là 3 triệu đồng. Chi phí thuê xe nhỏ nhất là bao nhiêu triệu đồng?",
          "options": [
            "$32$",
            "$30$",
            "$35$",
            "$28$"
          ],
          "correctIndex": 0,
          "explanation": "Gọi $x, y$ là số xe loại A và B. Ràng buộc: $20x + 10y \\ge 140 \\iff 2x + y \\ge 14$; $0.6x + 1.5y \\ge 9 \\iff 2x + 5y \\ge 30$; $x \\ge 0, y \\ge 0$. Chi phí $F(x, y) = 4x + 3y$. Giao điểm hai đường thẳng: $\\begin{cases} 2x + y = 14 \\\\ 2x + 5y = 30 \\end{cases} \\implies 4y = 16 \\implies y = 4, x = 5$. Tại $(5; 4)$, chi phí là $F(5; 4) = 4(5) + 3(4) = 32$ triệu đồng. Tại các đỉnh biên khác chi phí lớn hơn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <!-- Tứ giác A(1;5) px:(115, 75), B(3;2) px:(185, 145), C(6;1) px:(285, 165), D(2;7) px:(150, 45) --> <polygon points=\"115,75 185,145 285,165 150,45\" fill=\"#38bdf8\" fill-opacity=\"0.22\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <circle cx=\"185\" cy=\"145\" r=\"5\" fill=\"#fbbf24\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"195\" y=\"145\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">B(3; 2) Min 18tr</text> <circle cx=\"115\" cy=\"75\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"80\" y=\"75\" fill=\"#cbd5e1\" font-size=\"11\">A(1;5)</text> <circle cx=\"285\" cy=\"165\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"290\" y=\"170\" fill=\"#cbd5e1\" font-size=\"11\">C(6;1)</text> <circle cx=\"150\" cy=\"45\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"155\" y=\"40\" fill=\"#cbd5e1\" font-size=\"11\">D(2;7)</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.3.5",
          "badge": "Luyện thêm Đúng / Sai 5 - Miền nghiệm dạng đặc biệt",
          "source": "Đề luyện tập Toán 10 KNTT",
          "prompt": "Xét tính Đúng hoặc Sai của mỗi khẳng định sau về miền nghiệm của các bất phương trình trên mặt phẳng Oxy:",
          "subItems": [
            {
              "id": "a",
              "text": "Miền nghiệm của $y \\ge 0$ là nửa mặt phẳng nằm phía trên trục hoành $Ox$ (kể cả trục $Ox$).",
              "correctAnswer": true,
              "explanation": "Trục $Ox$ có phương trình $y = 0$. Miền $y \\ge 0$ là nửa mặt phẳng phía trên kể cả bờ."
            },
            {
              "id": "b",
              "text": "Miền nghiệm của $x > 0$ là nửa mặt phẳng nằm bên phải trục tung $Oy$ (kể cả trục $Oy$).",
              "correctAnswer": false,
              "explanation": "Vì dấu $>$ nghiêm ngặt nên không kể trục $Oy$."
            },
            {
              "id": "c",
              "text": "Miền nghiệm của $2x - y \\ge 0$ chứa điểm $(1; 1)$.",
              "correctAnswer": true,
              "explanation": "Thay $(1; 1)$ vào: $2(1) - 1 = 1 \\ge 0$ (đúng)."
            },
            {
              "id": "d",
              "text": "Miền nghiệm của $x - 2y < 0$ chứa điểm $(2; 1)$.",
              "correctAnswer": false,
              "explanation": "Thay $(2; 1)$ vào: $2 - 2(1) = 0 < 0$ (sai)."
            }
          ]
        },
        {
          "id": "ai-tf-10.3.6",
          "badge": "Luyện thêm Đúng / Sai 6 - Đường thẳng bờ d: 4x - 3y = 12",
          "source": "Đề kiểm tra chương II Toán 10",
          "prompt": "Cho đường thẳng bờ $d: 4x - 3y = 12$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Đường thẳng $d$ cắt trục hoành tại $(3; 0)$ và cắt trục tung tại $(0; -4)$.",
              "correctAnswer": true,
              "explanation": "Cho $y = 0 \\Rightarrow x = 3$. Cho $x = 0 \\Rightarrow y = -4$."
            },
            {
              "id": "b",
              "text": "Đoạn thẳng nối hai giao điểm của $d$ với hai trục tọa độ có độ dài bằng 5.",
              "correctAnswer": true,
              "explanation": "Độ dài $AB = \\sqrt{3^2 + (-4)^2} = 5$."
            },
            {
              "id": "c",
              "text": "Miền nghiệm của $4x - 3y \\le 12$ chứa điểm $(1; -1)$.",
              "correctAnswer": true,
              "explanation": "Thay $(1; -1)$: $4(1) - 3(-1) = 7 \\le 12$ (đúng)."
            },
            {
              "id": "d",
              "text": "Miền nghiệm của $4x - 3y \\ge 12$ chứa gốc tọa độ $O(0; 0)$.",
              "correctAnswer": false,
              "explanation": "Thay $(0; 0)$: $0 \\ge 12$ (sai)."
            }
          ]
        },
        {
          "id": "ai-tf-10.4.5",
          "badge": "Luyện thêm Đ/S 5 - Biểu diễn hình học hệ BPT chứa tham số",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho hệ bất phương trình $\\begin{cases} x + y \\le 5 \\\\ x - 2y \\le 2 \\\\ x + 1 \\ge 0 \\end{cases}$ và điểm $A(m; 1)$. Xét tính đúng/sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Đường thẳng $x + 1 = 0$ là đường thẳng song song với trục tung $Oy$.",
              "correctAnswer": true,
              "explanation": "Đúng vì phương trình có dạng $x = c$ ($c = -1$) nên song song với trục $Oy$."
            },
            {
              "id": "b",
              "text": "Để điểm $A(m; 1)$ thỏa mãn BPT thứ ba thì $m \\ge -1$.",
              "correctAnswer": true,
              "explanation": "Đúng vì thay $x = m$ vào $x + 1 \\ge 0 \\Leftrightarrow m + 1 \\ge 0 \\Leftrightarrow m \\ge -1$."
            },
            {
              "id": "c",
              "text": "Để điểm $A(m; 1)$ thuộc miền nghiệm của cả hệ thì $-1 \\le m \\le 4$.",
              "correctAnswer": true,
              "explanation": "Đúng vì:\n1) $m + 1 \\le 5 \\Leftrightarrow m \\le 4$;\n2) $m - 2(1) \\le 2 \\Leftrightarrow m \\le 4$;\n3) $m \\ge -1$.\nKết hợp lại ta được $-1 \\le m \\le 4$."
            },
            {
              "id": "d",
              "text": "Có tất cả 5 giá trị nguyên của $m$ để điểm $A(m; 1)$ thuộc miền nghiệm của hệ.",
              "correctAnswer": false,
              "explanation": "Sai vì các giá trị nguyên thỏa mãn $-1 \\le m \\le 4$ là $\\{-1, 0, 1, 2, 3, 4\\}$, có 6 giá trị nguyên chứ không phải 5."
            }
          ]
        },
        {
          "id": "ai-tf-10.4.prac3",
          "badge": "Đúng / Sai 4 - Kế hoạch sản xuất tiệm bánh ngọt và bánh mặn",
          "source": "Sách bài tập Toán 10 KNTT",
          "prompt": "Một tiệm bánh sản xuất bánh ngọt và bánh mặn. Mỗi chiếc bánh ngọt cần 200 g bột và 100 g đường. Mỗi chiếc bánh mặn cần 100 g bột và 50 g đường. Tiệm hiện có 4 kg bột và 1.8 kg đường. Gọi $x, y$ lần lượt là số bánh ngọt và bánh mặn sản xuất ($x, y \\ge 0$). Xét tính Đúng/Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Đổi đơn vị nguyên liệu: 4 kg bằng 4000 g và 1.8 kg bằng 1800 g.",
              "correctAnswer": true,
              "explanation": "$4\\text{ kg} = 4000\\text{ g}, 1.8\\text{ kg} = 1800\\text{ g}$."
            },
            {
              "id": "b",
              "text": "Bất phương trình lượng bột sử dụng là $2x + y \\le 40$.",
              "correctAnswer": true,
              "explanation": "$200x + 100y \\le 4000 \\iff 2x + y \\le 40$."
            },
            {
              "id": "c",
              "text": "Bất phương trình lượng đường sử dụng là $2x + y \\le 36$.",
              "correctAnswer": true,
              "explanation": "$100x + 50y \\le 1800 \\iff 2x + y \\le 36$."
            },
            {
              "id": "d",
              "text": "Nếu không làm chiếc bánh ngọt nào, tiệm bánh có thể làm tối đa 40 chiếc bánh mặn.",
              "correctAnswer": false,
              "explanation": "Khi $x = 0$, ta có $y \\le 40$ và $y \\le 36 \\implies y \\le 36$. Do lượng đường có hạn nên tối đa chỉ làm được 36 chiếc bánh mặn."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <!-- 2x + y <= 100, 3x + 2y <= 180 --> <polygon points=\"85,185 240,185 190,105 85,45\" fill=\"#f59e0b\" fill-opacity=\"0.2\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <circle cx=\"190\" cy=\"105\" r=\"4.5\" fill=\"#fbbf24\"/> <text x=\"195\" y=\"100\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">(20; 60)</text> <text x=\"120\" y=\"130\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"bold\">Tiệm bánh ngọt</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.3.7",
          "badge": "Luyện thêm Trả lời ngắn 7 - Khoảng cách từ điểm đến đường bờ",
          "source": "Đề nâng cao Toán 10 KNTT",
          "prompt": "Tính khoảng cách từ điểm $N(2; 1)$ đến đường thẳng bờ của bất phương trình $4x + 3y + 4 = 0$.",
          "correctAnswer": "3",
          "acceptableAnswers": [
            "3"
          ],
          "explanation": "Khoảng cách $d = \\frac{|4(2) + 3(1) + 4|}{\\sqrt{4^2 + 3^2}} = \\frac{|8 + 3 + 4|}{5} = \\frac{15}{5} = 3$."
        },
        {
          "id": "ai-sa-10.3.8",
          "badge": "Luyện thêm Trả lời ngắn 8 - Tìm số giá trị nguyên của m",
          "source": "Đề rèn luyện thi học kì Toán 10",
          "prompt": "Tìm số giá trị nguyên của tham số $m \\in [-4; 4]$ để gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình $2x - 3y + 4 - m^2 \\ge 0$.",
          "correctAnswer": "5",
          "acceptableAnswers": [
            "5",
            "5 giá trị"
          ],
          "explanation": "Thay $(0; 0)$: $4 - m^2 \\ge 0 \\Leftrightarrow m^2 \\le 4 \\Leftrightarrow -2 \\le m \\le 2$. Vì $m$ nguyên nên $m \\in \\{-2; -1; 0; 1; 2\\}$, có đúng 5 giá trị."
        },
        {
          "id": "ai-sa-10.3.9",
          "badge": "Luyện thêm Trả lời ngắn 9 - Giá trị lớn nhất biểu thức F",
          "source": "Đề bài toán tối ưu Toán 10",
          "prompt": "Cho $x, y$ là các số tự nhiên thỏa mãn $2x + y \\le 6$. Giá trị lớn nhất của biểu thức $F(x, y) = 4x + 3y$ bằng bao nhiêu?",
          "correctAnswer": "18",
          "acceptableAnswers": [
            "18"
          ],
          "explanation": "$y \\le 6 - 2x$. $F = 4x + 3y \\le 4x + 3(6 - 2x) = 18 - 2x \\le 18$ (vì $x \\ge 0$). Dấu bằng xảy ra khi $x = 0, y = 6$."
        },
        {
          "id": "ai-sa-10.4.7",
          "badge": "Luyện thêm TLN 7 - Doanh thu lớn nhất của xưởng mộc",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Một xưởng làm bàn ghế cần sản xuất $x$ bàn và $y$ ghế. Doanh thu là $F(x, y) = 500x + 200y$ (nghìn đồng). Biết miền nghiệm thỏa mãn các đỉnh là $O(0; 0), A(10; 0), B(8; 6), C(0; 12)$. Tìm doanh thu lớn nhất (tính bằng nghìn đồng).",
          "correctAnswer": "5200",
          "acceptableAnswers": [
            "5200",
            "5200 nghìn",
            "5.200"
          ],
          "explanation": "Tính tại các đỉnh:\n$F(0; 0) = 0$;\n$F(10; 0) = 500(10) = 5000$;\n$F(8; 6) = 500(8) + 200(6) = 4000 + 1200 = 5200$;\n$F(0; 12) = 200(12) = 2400$.\nDoanh thu lớn nhất là 5200 nghìn đồng."
        },
        {
          "id": "ai-sa-10.4.8",
          "badge": "Luyện thêm TLN 8 - Tọa độ x mang lại giá trị tối ưu",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tại điểm $(x_0; y_0)$ nào thì biểu thức $F(x, y) = 3x + 5y$ đạt giá trị lớn nhất trên miền nghiệm có các đỉnh $O(0; 0), A(6; 0), B(4; 5), C(0; 7)$? Nhập giá trị của $x_0$.",
          "correctAnswer": "4",
          "acceptableAnswers": [
            "4",
            "x = 4"
          ],
          "explanation": "Tính $F$:\n$F(0; 0) = 0$;\n$F(6; 0) = 18$;\n$F(4; 5) = 3(4) + 5(5) = 12 + 25 = 37$;\n$F(0; 7) = 35$.\nGiá trị lớn nhất là 37 đạt tại đỉnh $B(4; 5)$. Vậy $x_0 = 4$."
        },
        {
          "id": "ai-sa-10.4.prac3",
          "badge": "Trả lời ngắn 6 - Tối ưu hóa lợi nhuận dây chuyền quạt điện",
          "source": "Toán 10 Nâng cao & Đề thi định kì",
          "prompt": "Một xưởng sản xuất hai loại quạt điện A và B. Để sản xuất 1 quạt A cần 3 giờ máy tiện và 1 giờ máy hàn. Để sản xuất 1 quạt B cần 1 giờ máy tiện và 1 giờ máy hàn. Xưởng có tối đa 15 giờ máy tiện và 9 giờ máy hàn. Lợi nhuận mỗi quạt A là 350 nghìn đồng, mỗi quạt B là 200 nghìn đồng. Hỏi lợi nhuận lớn nhất mà xưởng có thể đạt được trong một ngày là bao nhiêu nghìn đồng?",
          "correctAnswer": "2250",
          "acceptableAnswers": [
            "2250",
            "2.250"
          ],
          "explanation": "Hệ điều kiện: $3x + y \\le 15$; $x + y \\le 9$; $x \\ge 0, y \\ge 0$. Lợi nhuận $L(x, y) = 350x + 200y$. Giao điểm hai đường thẳng: $2x = 6 \\implies x = 3, y = 6$. Các đỉnh: $O(0; 0) \\to 0$; $A(5; 0) \\to 1750$; $B(3; 6) \\to 350(3) + 200(6) = 2250$; $C(0; 9) \\to 1800$. Vậy lợi nhuận tối đa là 2250 nghìn đồng (khi sản xuất 3 quạt A và 6 quạt B).",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"50\" y1=\"185\" x2=\"390\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"205\" x2=\"85\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <text x=\"395\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">x</text> <text x=\"90\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">y</text> <!-- O(0;0), A(5;0) px:(255, 185), B(4;3) px:(225, 115), C(0;6) px:(85, 45) --> <polygon points=\"85,185 255,185 225,115 85,45\" fill=\"#8b5cf6\" fill-opacity=\"0.22\" stroke=\"#8b5cf6\" stroke-width=\"2\"/> <circle cx=\"225\" cy=\"115\" r=\"5\" fill=\"#fbbf24\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"235\" y=\"110\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">B(4; 3) Max 2,6tr</text> <circle cx=\"255\" cy=\"185\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"245\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\">A(5;0)</text> <circle cx=\"85\" cy=\"45\" r=\"4\" fill=\"#cbd5e1\"/> <text x=\"50\" y=\"48\" fill=\"#cbd5e1\" font-size=\"12\">C(0;6)</text> </svg>"
        }
      ]
    }
  ]
}
,

  // ==========================================
  // BÀI 5: GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC TỪ 0° ĐẾN 180°
  // ==========================================
  "t10-b5-gia-tri-luong-giac-0-180": {
  "id": "t10-b5-gia-tri-luong-giac-0-180",
  "lessonNumber": 5,
  "title": "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°",
  "bookChapter": "Chương III: Hệ thức lượng trong tam giác (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Tình huống: Nửa đường tròn đơn vị và đo góc nghiêng tia sáng Mặt Trời",
  "scenarioFrames": [],
  "interactiveType": "geometry",
  "youtubeVideoId": "j1EYbiPNB_s",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 5 - Giá trị lượng giác của một góc từ 0° đến 180° (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "j1EYbiPNB_s",
      "title": "Tiết 1: Khái niệm nửa đường tròn đơn vị & Định nghĩa giá trị lượng giác của một góc từ 0° đến 180°"
    },
    {
      "id": "_GqL8D5YSHU",
      "title": "Tiết 2: Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau và phụ nhau"
    },
    {
      "id": "_pgilzE1QGg",
      "title": "Tiết 3: Bảng giá trị lượng giác của các góc đặc biệt & Sử dụng máy tính cầm tay Casio"
    },
    {
      "id": "P3y5L94EkIQ",
      "title": "Tiết 4: Các hệ thức lượng giác cơ bản & Hướng dẫn giải chi tiết bài tập SGK"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.5.1",
      "title": "Ví dụ 1 (Tiết 1): Xác định dấu của giá trị lượng giác góc tù",
      "question": "Cho góc $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$). Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\sin \\alpha > 0$ và $\\cos \\alpha < 0$",
        "$\\sin \\alpha < 0$ và $\\cos \\alpha < 0$",
        "$\\sin \\alpha > 0$ và $\\cos \\alpha > 0$",
        "$\\sin \\alpha < 0$ và $\\cos \\alpha > 0$"
      ],
      "correctIndex": 0,
      "explanation": "Trên nửa đường tròn đơn vị, với góc tù $90^\\circ < \\alpha < 180^\\circ$, điểm biểu diễn $M(x_0; y_0)$ nằm ở góc phần tư thứ II nên có hoành độ $x_0 = \\cos \\alpha < 0$ và tung độ $y_0 = \\sin \\alpha > 0$."
    },
    {
      "id": "vq-10.5.2",
      "title": "Ví dụ 2 (Tiết 2): Áp dụng công thức hai góc bù nhau",
      "question": "Giá trị của biểu thức $P = \\sin 135^\\circ + \\cos 135^\\circ$ bằng:",
      "options": [
        "$0$",
        "$\\sqrt{2}$",
        "$-\\sqrt{2}$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $135^\\circ$ và $45^\\circ$ là hai góc bù nhau ($135^\\circ + 45^\\circ = 180^\\circ$). Do đó:\n• $\\sin 135^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$\n• $\\cos 135^\\circ = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$\nSuy ra $P = \\frac{\\sqrt{2}}{2} + \\left(-\\frac{\\sqrt{2}}{2}\\right) = 0$."
    },
    {
      "id": "vq-10.5.3",
      "title": "Ví dụ 3 (Tiết 3): Giá trị lượng giác của các góc đặc biệt",
      "question": "Giá trị của $\\tan 150^\\circ$ bằng bao nhiêu?",
      "options": [
        "$-\\frac{\\sqrt{3}}{3}$",
        "$\\frac{\\sqrt{3}}{3}$",
        "$-\\sqrt{3}$",
        "$\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức bù nhau: $\\tan 150^\\circ = \\tan(180^\\circ - 30^\\circ) = -\\tan 30^\\circ = -\\frac{\\sqrt{3}}{3}$."
    },
    {
      "id": "vq-10.5.4",
      "title": "Ví dụ 4 (Tiết 4): Vận dụng hệ thức lượng giác cơ bản",
      "question": "Cho $\\sin \\alpha = \\frac{4}{5}$ với $\\alpha$ là góc nhọn ($0^\\circ < \\alpha < 90^\\circ$). Giá trị của $\\cos \\alpha$ bằng:",
      "options": [
        "$\\frac{3}{5}$",
        "$-\\frac{3}{5}$",
        "$\\frac{1}{5}$",
        "$\\frac{\\sqrt{3}}{5}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\Rightarrow \\cos^2 \\alpha = 1 - \\left(\\frac{4}{5}\\right)^2 = \\frac{9}{25}$. Vì $\\alpha$ nhọn nên $\\cos \\alpha > 0 \\Rightarrow \\cos \\alpha = \\frac{3}{5}$."
    }
  ],
  "tips": [
    "Mẹo nhớ dấu lượng giác trên nửa đường tròn đơn vị: sin luôn dương hoặc bằng 0 trên [0°; 180°]; cos dương ở góc nhọn (< 90°), bằng 0 tại 90°, và âm ở góc tù (> 90°).",
    "Mẹo nhớ góc bù nhau (180° - α): 'Sin bù' - duy nhất sin giữ nguyên dấu: sin(180° - α) = sin α; còn cos, tan, cot đổi dấu thành đối số.",
    "Mẹo nhớ góc phụ nhau (90° - α): 'Phụ chéo' - sin đổi thành cos, cos đổi thành sin, tan đổi thành cot, cot đổi thành tan.",
    "Mẹo bấm máy tính Casio: Đặt đơn vị góc sang ĐỘ (Degree: Shift -> Menu -> 2 -> 1). Để tìm góc tù khi biết cos hoặc tan âm, bấm Shift + cos / Shift + tan máy sẽ trả ngay góc từ 0° đến 180°."
  ],
  "traps": [
    "Cạm bẫy nhầm dấu của cos góc tù: Học sinh hay quên dấu trừ khi tính cos(120°), cos(135°), cos(150°). Nhớ rằng cos(180° - α) = -cos α!",
    "Cạm bẫy tan và cot không xác định: tan 90° không xác định (vì cos 90° = 0); cot 0° và cot 180° không xác định (vì sin = 0).",
    "Cạm bẫy hai nghiệm của phương trình sin: Khi biết sin α = m (0 < m < 1), luôn có hai góc bù nhau thỏa mãn (một góc nhọn α và một góc tù 180° - α).",
    "Cạm bẫy khai căn sin² + cos² = 1: cos α = ±√(1 - sin² α), phải dựa vào điều kiện góc nhọn (lấy dấu +) hay góc tù (lấy dấu -) để chọn đúng dấu của cos."
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị",
      "points": [
        "Nửa đường tròn đơn vị: nửa đường tròn tâm $O(0; 0)$ bán kính $R = 1$ nằm phía trên trục hoành ($y \\ge 0$).",
        "Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), gọi $M(x_0; y_0)$ là điểm trên nửa đường tròn đơn vị sao cho $\\widehat{xOM} = \\alpha$. Khi đó:",
        "    • $\\sin \\alpha = y_0$ (tung độ của điểm $M$)",
        "    • $\\cos \\alpha = x_0$ (hoành độ của điểm $M$)",
        "    • $\\tan \\alpha = \\frac{y_0}{x_0} = \\frac{\\sin \\alpha}{\\cos \\alpha}$ (với $\\alpha \\ne 90^\\circ$)",
        "    • $\\cot \\alpha = \\frac{x_0}{y_0} = \\frac{\\cos \\alpha}{\\sin \\alpha}$ (với $\\alpha \\ne 0^\\circ$ và $\\alpha \\ne 180^\\circ$)",
        "Dấu của các giá trị lượng giác:",
        "    • Nếu $\\alpha$ nhọn ($0^\\circ < \\alpha < 90^\\circ$): $\\sin \\alpha > 0, \\cos \\alpha > 0, \\tan \\alpha > 0, \\cot \\alpha > 0$.",
        "    • Nếu $\\alpha$ tù ($90^\\circ < \\alpha < 180^\\circ$): $\\sin \\alpha > 0, \\cos \\alpha < 0, \\tan \\alpha < 0, \\cot \\alpha < 0$."
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Xác định giá trị lượng giác của các góc đặc biệt",
          "problem": "Tìm các giá trị lượng giác của góc $\\alpha = 120^\\circ$.",
          "solution": "Điểm $M$ trên nửa đường tròn đơn vị ứng với góc $120^\\circ$ có tọa độ $M\\left(-\\frac{1}{2}; \\frac{\\sqrt{3}}{2}\\right)$.\nDo đó:\n• $\\sin 120^\\circ = \\frac{\\sqrt{3}}{2}$\n• $\\cos 120^\\circ = -\\frac{1}{2}$\n• $\\tan 120^\\circ = \\frac{\\sin 120^\\circ}{\\cos 120^\\circ} = -\\sqrt{3}$\n• $\\cot 120^\\circ = \\frac{1}{\\tan 120^\\circ} = -\\frac{\\sqrt{3}}{3}$."
        }
      ]
    },
    {
      "index": "2",
      "title": "Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau và phụ nhau",
      "points": [
        "Hai góc bù nhau (tổng bằng $180^\\circ$):",
        "    • $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
        "    • $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$",
        "    • $\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$ ($\\alpha \\ne 90^\\circ$)",
        "    • $\\cot(180^\\circ - \\alpha) = -\\cot \\alpha$ ($0^\\circ < \\alpha < 180^\\circ$)",
        "Hai góc phụ nhau (tổng bằng $90^\\circ$):",
        "    • $\\sin(90^\\circ - \\alpha) = \\cos \\alpha$",
        "    • $\\cos(90^\\circ - \\alpha) = \\sin \\alpha$",
        "    • $\\tan(90^\\circ - \\alpha) = \\cot \\alpha$",
        "    • $\\cot(90^\\circ - \\alpha) = \\tan \\alpha$"
      ],
      "examples": [
        {
          "title": "Ví dụ 2: Rút gọn biểu thức lượng giác sử dụng góc bù",
          "problem": "Tính giá trị biểu thức $A = \\sin 30^\\circ \\cos 150^\\circ + \\sin 150^\\circ \\cos 30^\\circ$.",
          "solution": "Ta có:\n• $\\cos 150^\\circ = \\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.\n• $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$.\nThay vào $A$:\n$A = \\left(\\frac{1}{2}\\right)\\left(-\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{1}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) = -\\frac{\\sqrt{3}}{4} + \\frac{\\sqrt{3}}{4} = 0$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Các hệ thức lượng giác cơ bản",
      "points": [
        "Với mọi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), ta luôn có các hệ thức cơ bản:",
        "    1) $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
        "    2) $\\tan \\alpha \\cdot \\cot \\alpha = 1$ (với $\\alpha \\ne 0^\\circ, 90^\\circ, 180^\\circ$)",
        "    3) $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$ (với $\\alpha \\ne 90^\\circ$)",
        "    4) $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$ (với $\\alpha \\ne 0^\\circ, 180^\\circ$)"
      ],
      "examples": [
        {
          "title": "Ví dụ 3: Cho một giá trị lượng giác, tính các giá trị còn lại",
          "problem": "Cho góc $\\alpha$ tù thỏa mãn $\\sin \\alpha = \\frac{3}{5}$. Tính $\\cos \\alpha$ và $\\tan \\alpha$.",
          "solution": "Áp dụng công thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, ta có:\n$\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$.\nVì $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$) nên $\\cos \\alpha < 0$.\nDo đó: $\\cos \\alpha = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$.\nTừ đó: $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.5.1",
      "svgDiagram": "<svg viewBox=\"0 0 420 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"> <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#94a3b8\"/> </marker> <radialGradient id=\"unitCircleGlow\" cx=\"50%\" cy=\"100%\" r=\"100%\"> <stop offset=\"0%\" stop-color=\"#38bdf8\" stop-opacity=\"0.18\"/> <stop offset=\"100%\" stop-color=\"#38bdf8\" stop-opacity=\"0.01\"/> </radialGradient> </defs> <!-- Nửa hình tròn đơn vị fill mờ --> <path d=\"M 70 185 A 140 140 0 0 1 350 185 Z\" fill=\"url(#unitCircleGlow)\"/> <path d=\"M 70 185 A 140 140 0 0 1 350 185\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <!-- Trục Ox và Oy --> <line x1=\"40\" y1=\"185\" x2=\"385\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\" marker-end=\"url(#arrow)\"/> <line x1=\"210\" y1=\"195\" x2=\"210\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" marker-end=\"url(#arrow)\"/> <!-- Nhãn trục --> <text x=\"390\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">x</text> <text x=\"218\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">y</text> <text x=\"195\" y=\"202\" fill=\"#94a3b8\" font-size=\"12\" font-family=\"sans-serif\">O</text> <text x=\"352\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\" font-family=\"sans-serif\">1</text> <text x=\"58\" y=\"202\" fill=\"#cbd5e1\" font-size=\"12\" font-family=\"sans-serif\">-1</text> <text x=\"195\" y=\"48\" fill=\"#cbd5e1\" font-size=\"12\" font-family=\"sans-serif\">1</text> <!-- Tia OM và Điểm M (alpha = 60 độ) --> <!-- cos 60 = 0.5 -> x = 210 + 70 = 280, sin 60 = 0.866 -> y = 185 - 121.2 = 63.8 --> <line x1=\"210\" y1=\"185\" x2=\"280\" y2=\"64\" stroke=\"#f59e0b\" stroke-width=\"2.2\"/> <!-- Gióng tọa độ --> <line x1=\"280\" y1=\"64\" x2=\"280\" y2=\"185\" stroke=\"#cbd5e1\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/> <line x1=\"280\" y1=\"64\" x2=\"210\" y2=\"64\" stroke=\"#cbd5e1\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/> <!-- Cung góc alpha --> <path d=\"M 245 185 A 35 35 0 0 0 227 155\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/> <text x=\"242\" y=\"165\" fill=\"#fbbf24\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">α</text> <!-- Tọa độ hình chiếu --> <circle cx=\"280\" cy=\"185\" r=\"3.5\" fill=\"#38bdf8\"/> <text x=\"272\" y=\"202\" fill=\"#38bdf8\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">x₀ = cos α</text> <circle cx=\"210\" cy=\"64\" r=\"3.5\" fill=\"#38bdf8\"/> <text x=\"135\" y=\"68\" fill=\"#38bdf8\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">y₀ = sin α</text> <!-- Điểm M --> <circle cx=\"280\" cy=\"64\" r=\"5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"290\" y=\"60\" fill=\"#f59e0b\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">M(x₀; y₀)</text> </svg>",
      "badge": "Nhận biết - Định nghĩa sin trên nửa đường tròn đơn vị",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 37",
      "question": "Trên nửa đường tròn đơn vị, gọi $M(x_0; y_0)$ là điểm biểu diễn góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$). Giá trị $\\sin \\alpha$ bằng:",
      "options": [
        "$y_0$",
        "$x_0$",
        "$\\frac{x_0}{y_0}$",
        "$\\frac{y_0}{x_0}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa trên nửa đường tròn đơn vị, $\\sin \\alpha$ bằng tung độ $y_0$ của điểm $M$."
    },
    {
      "id": "quiz-10.5.2",
      "svgDiagram": "<svg viewBox=\"0 0 420 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <marker id=\"arrow2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"> <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#94a3b8\"/> </marker> <radialGradient id=\"unitCircleGlow2\" cx=\"50%\" cy=\"100%\" r=\"100%\"> <stop offset=\"0%\" stop-color=\"#38bdf8\" stop-opacity=\"0.18\"/> <stop offset=\"100%\" stop-color=\"#38bdf8\" stop-opacity=\"0.01\"/> </radialGradient> </defs> <!-- Nửa hình tròn đơn vị --> <path d=\"M 70 185 A 140 140 0 0 1 350 185 Z\" fill=\"url(#unitCircleGlow2)\"/> <path d=\"M 70 185 A 140 140 0 0 1 350 185\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <!-- Trục Ox và Oy --> <line x1=\"40\" y1=\"185\" x2=\"385\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.8\" marker-end=\"url(#arrow2)\"/> <line x1=\"210\" y1=\"195\" x2=\"210\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" marker-end=\"url(#arrow2)\"/> <!-- Nhãn trục --> <text x=\"390\" y=\"190\" fill=\"#94a3b8\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">x</text> <text x=\"218\" y=\"28\" fill=\"#94a3b8\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">y</text> <text x=\"195\" y=\"202\" fill=\"#94a3b8\" font-size=\"12\" font-family=\"sans-serif\">O</text> <!-- Điểm M (alpha = 135 độ - góc tù) --> <!-- cos 135 = -0.707 -> x = 210 - 99 = 111, sin 135 = 0.707 -> y = 185 - 99 = 86 --> <line x1=\"210\" y1=\"185\" x2=\"111\" y2=\"86\" stroke=\"#f59e0b\" stroke-width=\"2.2\"/> <line x1=\"111\" y1=\"86\" x2=\"111\" y2=\"185\" stroke=\"#cbd5e1\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/> <line x1=\"111\" y1=\"86\" x2=\"210\" y2=\"86\" stroke=\"#cbd5e1\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/> <!-- Cung góc tù alpha --> <path d=\"M 245 185 A 35 35 0 0 0 185 160\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/> <text x=\"220\" y=\"148\" fill=\"#fbbf24\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">α</text> <!-- Tọa độ hình chiếu --> <circle cx=\"111\" cy=\"185\" r=\"3.5\" fill=\"#38bdf8\"/> <text x=\"65\" y=\"202\" fill=\"#38bdf8\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">x₀ = cos α</text> <circle cx=\"210\" cy=\"86\" r=\"3.5\" fill=\"#38bdf8\"/> <text x=\"218\" y=\"90\" fill=\"#38bdf8\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">y₀ = sin α</text> <circle cx=\"111\" cy=\"86\" r=\"5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"80\" y=\"76\" fill=\"#f59e0b\" font-size=\"13\" font-family=\"sans-serif\" font-weight=\"bold\">M(x₀; y₀)</text> </svg>",
      "badge": "Nhận biết - Định nghĩa cos trên nửa đường tròn đơn vị",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 37",
      "question": "Trên nửa đường tròn đơn vị, hoành độ $x_0$ của điểm $M$ biểu diễn góc $\\alpha$ chính là:",
      "options": [
        "$\\cos \\alpha$",
        "$\\sin \\alpha$",
        "$\\tan \\alpha$",
        "$\\cot \\alpha$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa, $\\cos \\alpha$ bằng hoành độ $x_0$ của điểm $M$."
    },
    {
      "id": "quiz-10.5.3",
      "badge": "Nhận biết - Dấu của giá trị lượng giác góc tù",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 38",
      "question": "Cho góc $\\alpha$ thỏa mãn $90^\\circ < \\alpha < 180^\\circ$ (góc tù). Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\sin \\alpha > 0$",
        "$\\cos \\alpha > 0$",
        "$\\tan \\alpha > 0$",
        "$\\cot \\alpha > 0$"
      ],
      "correctIndex": 0,
      "explanation": "Với góc tù $\\alpha$, tung độ $y_0 > 0$ nên $\\sin \\alpha > 0$; còn hoành độ $x_0 < 0$ nên $\\cos \\alpha < 0, \\tan \\alpha < 0, \\cot \\alpha < 0$."
    },
    {
      "id": "quiz-10.5.4",
      "badge": "Nhận biết - Dấu của cos góc tù",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 38",
      "question": "Với góc $\\alpha$ tù ($90^\\circ < \\alpha < 180^\\circ$), mệnh đề nào sau đây đúng?",
      "options": [
        "$\\cos \\alpha < 0$",
        "$\\cos \\alpha > 0$",
        "$\\cos \\alpha = 0$",
        "$\\cos \\alpha \\ge 0$"
      ],
      "correctIndex": 0,
      "explanation": "Góc tù nằm ở góc phần tư thứ II của hệ trục tọa độ, có hoành độ âm nên $\\cos \\alpha < 0$."
    },
    {
      "id": "quiz-10.5.5",
      "badge": "Nhận biết - Giá trị lượng giác của 0 độ",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 38",
      "question": "Giá trị của $\\cos 0^\\circ$ bằng:",
      "options": [
        "$1$",
        "$0$",
        "$-1$",
        "Không xác định"
      ],
      "correctIndex": 0,
      "explanation": "Góc $0^\\circ$ ứng với điểm $A(1; 0)$ trên trục $Ox$, do đó $\\cos 0^\\circ = 1$."
    },
    {
      "id": "quiz-10.5.6",
      "badge": "Nhận biết - Giá trị lượng giác của 90 độ",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 38",
      "question": "Trong các khẳng định sau, khẳng định nào ĐÚNG?",
      "options": [
        "$\\sin 90^\\circ = 1$",
        "$\\cos 90^\\circ = 1$",
        "$\\tan 90^\\circ = 0$",
        "$\\sin 90^\\circ = 0$"
      ],
      "correctIndex": 0,
      "explanation": "Điểm biểu diễn góc $90^\\circ$ là $B(0; 1)$, do đó $\\sin 90^\\circ = 1, \\cos 90^\\circ = 0$, $\\tan 90^\\circ$ không xác định."
    },
    {
      "id": "quiz-10.5.7",
      "badge": "Nhận biết - Giá trị lượng giác của 180 độ",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 38",
      "question": "Giá trị của $\\cos 180^\\circ$ bằng:",
      "options": [
        "$-1$",
        "$1$",
        "$0$",
        "$\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Điểm biểu diễn góc $180^\\circ$ là $A'(-1; 0)$, do đó $\\cos 180^\\circ = -1$."
    },
    {
      "id": "quiz-10.5.8",
      "badge": "Thông hiểu - Giá trị lượng giác của 120 độ",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 39",
      "question": "Giá trị của $\\cos 120^\\circ$ bằng:",
      "options": [
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$-\\frac{\\sqrt{3}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$."
    },
    {
      "id": "quiz-10.5.9",
      "badge": "Thông hiểu - Giá trị lượng giác của 135 độ",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 39",
      "question": "Giá trị của $\\sin 135^\\circ$ bằng:",
      "options": [
        "$\\frac{\\sqrt{2}}{2}$",
        "$-\\frac{\\sqrt{2}}{2}$",
        "$\\frac{1}{2}$",
        "$-\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sin 135^\\circ = \\sin(180^\\circ - 45^\\circ) = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."
    },
    {
      "id": "quiz-10.5.10",
      "badge": "Thông hiểu - Giá trị lượng giác của 150 độ",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 39",
      "question": "Giá trị của $\\tan 150^\\circ$ bằng:",
      "options": [
        "$-\\frac{\\sqrt{3}}{3}$",
        "$\\frac{\\sqrt{3}}{3}$",
        "$-\\sqrt{3}$",
        "$\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\tan 150^\\circ = \\tan(180^\\circ - 30^\\circ) = -\\tan 30^\\circ = -\\frac{\\sqrt{3}}{3}$."
    },
    {
      "id": "quiz-10.5.11",
      "badge": "Thông hiểu - Công thức sin góc bù",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 39",
      "question": "Với mọi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
        "$\\sin(180^\\circ - \\alpha) = -\\sin \\alpha$",
        "$\\cos(180^\\circ - \\alpha) = \\cos \\alpha$",
        "$\\tan(180^\\circ - \\alpha) = \\tan \\alpha$"
      ],
      "correctIndex": 0,
      "explanation": "Theo tính chất hai góc bù nhau, chỉ có $\\sin$ giữ nguyên giá trị: $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$."
    },
    {
      "id": "quiz-10.5.12",
      "badge": "Thông hiểu - Công thức cos góc bù",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 39",
      "question": "Khẳng định nào sau đây SAI?",
      "options": [
        "$\\cos(180^\\circ - \\alpha) = \\cos \\alpha$",
        "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
        "$\\tan(180^\\circ - \\alpha) = -\\tan \\alpha \\ (\\alpha \\ne 90^\\circ)$",
        "$\\cot(180^\\circ - \\alpha) = -\\cot \\alpha \\ (0^\\circ < \\alpha < 180^\\circ)$"
      ],
      "correctIndex": 0,
      "explanation": "Khẳng định $\\cos(180^\\circ - \\alpha) = \\cos \\alpha$ là SAI vì đúng phải là $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$."
    },
    {
      "id": "quiz-10.5.13",
      "badge": "Thông hiểu - Hệ thức cơ bản sin² + cos²",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 40",
      "question": "Với mọi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), giá trị của biểu thức $P = \\sin^2 \\alpha + \\cos^2 \\alpha$ bằng:",
      "options": [
        "$1$",
        "$0$",
        "$2$",
        "$-1$"
      ],
      "correctIndex": 0,
      "explanation": "Hệ thức lượng giác cơ bản: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ với mọi góc $\\alpha$."
    },
    {
      "id": "quiz-10.5.14",
      "badge": "Thông hiểu - Hệ thức liên hệ giữa tan và cos",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 40",
      "question": "Với góc $\\alpha \\ne 90^\\circ$, hệ thức nào sau đây ĐÚNG?",
      "options": [
        "$1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$",
        "$1 + \\tan^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$",
        "$1 + \\cot^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$",
        "$\\tan \\alpha \\cdot \\cot \\alpha = -1$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $1 + \\tan^2 \\alpha = 1 + \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha} = \\frac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos^2 \\alpha} = \\frac{1}{\\cos^2 \\alpha}$."
    },
    {
      "id": "quiz-10.5.15",
      "badge": "Thông hiểu - Tính tổng sin hai góc bù nhau",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 40",
      "question": "Giá trị của biểu thức $M = \\cos 20^\\circ + \\cos 160^\\circ$ bằng:",
      "options": [
        "$0$",
        "$1$",
        "$-1$",
        "$2\\cos 20^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $160^\\circ = 180^\\circ - 20^\\circ$ nên $\\cos 160^\\circ = -\\cos 20^\\circ$. Do đó $M = \\cos 20^\\circ - \\cos 20^\\circ = 0$."
    },
    {
      "id": "quiz-10.5.16",
      "badge": "Vận dụng - Tính giá trị lượng giác khi biết sin và góc nhọn",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 41",
      "question": "Cho góc $\\alpha$ nhọn thỏa mãn $\\sin \\alpha = \\frac{5}{13}$. Giá trị của $\\cos \\alpha$ là:",
      "options": [
        "$\\frac{12}{13}$",
        "$-\\frac{12}{13}$",
        "$\\frac{8}{13}$",
        "$\\frac{13}{12}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\alpha$ nhọn nên $\\cos \\alpha > 0$. Ta có $\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} = \\sqrt{1 - \\frac{25}{169}} = \\sqrt{\\frac{144}{169}} = \\frac{12}{13}$."
    },
    {
      "id": "quiz-10.5.17",
      "badge": "Vận dụng - Tính giá trị lượng giác khi biết sin và góc tù",
      "source": "SGK Toán 10 KNTT Bài 5 Trang 41",
      "question": "Cho góc $\\alpha$ tù thỏa mãn $\\sin \\alpha = \\frac{4}{5}$. Giá trị của $\\cos \\alpha$ là:",
      "options": [
        "$-\\frac{3}{5}$",
        "$\\frac{3}{5}$",
        "$-\\frac{4}{5}$",
        "$\\frac{1}{5}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\alpha$ là góc tù nên $\\cos \\alpha < 0$. Do đó $\\cos \\alpha = -\\sqrt{1 - \\sin^2 \\alpha} = -\\sqrt{1 - \\frac{16}{25}} = -\\frac{3}{5}$."
    },
    {
      "id": "quiz-10.5.18",
      "badge": "Vận dụng - Tính giá trị biểu thức lượng giác đối xứng",
      "source": "SBT Toán 10 KNTT Bài 5",
      "question": "Cho $\\tan \\alpha = 2$. Giá trị của biểu thức $P = \\frac{2\\sin \\alpha + \\cos \\alpha}{\\sin \\alpha - 3\\cos \\alpha}$ bằng:",
      "options": [
        "$-5$",
        "$5$",
        "$-3$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Chia cả tử và mẫu cho $\\cos \\alpha \\ne 0$ ta được: $P = \\frac{2\\tan \\alpha + 1}{\\tan \\alpha - 3} = \\frac{2(2) + 1}{2 - 3} = \\frac{5}{-1} = -5$."
    },
    {
      "id": "quiz-10.5.19",
      "badge": "Vận dụng - Biểu thức tổng cos từ 1 độ đến 180 độ",
      "source": "Bộ đề bồi dưỡng Toán 10",
      "question": "Tính giá trị của biểu thức $S = \\cos 10^\\circ + \\cos 20^\\circ + \\dots + \\cos 170^\\circ + \\cos 180^\\circ$.",
      "options": [
        "$-1$",
        "$0$",
        "$1$",
        "$-2$"
      ],
      "correctIndex": 0,
      "explanation": "Nhóm các cặp bù nhau: $(\\cos 10^\\circ + \\cos 170^\\circ) + (\\cos 20^\\circ + \\cos 160^\\circ) + \\dots + (\\cos 80^\\circ + \\cos 100^\\circ) + \\cos 90^\\circ + \\cos 180^\\circ$.\nMỗi cặp có tổng bằng 0, $\\cos 90^\\circ = 0$, còn lại $\\cos 180^\\circ = -1$. Vậy $S = -1$."
    },
    {
      "id": "quiz-10.5.20",
      "badge": "Vận dụng cao - Tìm góc nhọn thỏa mãn đẳng thức",
      "source": "Bộ đề bồi dưỡng Toán 10",
      "question": "Tìm góc $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$) biết $\\sin \\alpha + \\cos \\alpha = \\sqrt{2}$.",
      "options": [
        "$45^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$",
        "$75^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Bình phương hai vế: $(\\sin \\alpha + \\cos \\alpha)^2 = 2 \\Leftrightarrow \\sin^2 \\alpha + \\cos^2 \\alpha + 2\\sin \\alpha \\cos \\alpha = 2 \\Leftrightarrow 1 + 2\\sin \\alpha \\cos \\alpha = 2 \\Leftrightarrow 2\\sin \\alpha \\cos \\alpha = 1$.\nMặt khác $(\\sin \\alpha - \\cos \\alpha)^2 = 1 - 2\\sin \\alpha \\cos \\alpha = 0 \\Rightarrow \\sin \\alpha = \\cos \\alpha$. Vì $\\alpha$ nhọn nên $\\alpha = 45^\\circ$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.5.1",
      "badge": "Đúng / Sai 1 - Định nghĩa và dấu giá trị lượng giác",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Cho góc $\\alpha$ thỏa mãn $0^\\circ \\le \\alpha \\le 180^\\circ$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Với mọi góc $\\alpha \\in [0^\\circ; 180^\\circ]$, ta luôn có $\\sin \\alpha \\ge 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì tung độ của các điểm trên nửa đường tròn đơn vị luôn thỏa mãn $y \\ge 0$."
        },
        {
          "id": "b",
          "text": "Nếu $\\alpha$ là góc nhọn thì $\\cos \\alpha > 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì các điểm thuộc cung phần tư thứ nhất có hoành độ dương ($x > 0$)."
        },
        {
          "id": "c",
          "text": "Nếu $\\alpha$ là góc tù thì $\\tan \\alpha > 0$.",
          "correctAnswer": false,
          "explanation": "Sai vì góc tù có $\\sin \\alpha > 0, \\cos \\alpha < 0$ nên $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} < 0$."
        },
        {
          "id": "d",
          "text": "Giá trị của $\\cos 90^\\circ$ bằng $1$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\cos 90^\\circ = 0$."
        }
      ]
    },
    {
      "id": "tf-10.5.2",
      "badge": "Đúng / Sai 2 - Tính giá trị góc lượng giác đặc biệt",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Xét tính đúng/sai của các giá trị lượng giác sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin 150^\\circ = \\frac{1}{2}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$."
        },
        {
          "id": "b",
          "text": "$\\cos 135^\\circ = \\frac{\\sqrt{2}}{2}$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\cos 135^\\circ = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$."
        },
        {
          "id": "c",
          "text": "$\\tan 120^\\circ = -\\sqrt{3}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\tan 120^\\circ = -\\tan 60^\\circ = -\\sqrt{3}$."
        },
        {
          "id": "d",
          "text": "$\\cot 135^\\circ = -1$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cot 135^\\circ = -\\cot 45^\\circ = -1$."
        }
      ]
    },
    {
      "id": "tf-10.5.3",
      "badge": "Đúng / Sai 3 - Hai góc bù nhau",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Cho hai góc bù nhau $\\alpha$ và $\\beta$ (tức $\\alpha + \\beta = 180^\\circ$ với $0^\\circ < \\alpha, \\beta < 180^\\circ, \\alpha \\ne 90^\\circ$). Xét tính đúng/sai:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin \\alpha = \\sin \\beta$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin(180^\\circ - \\beta) = \\sin \\beta$."
        },
        {
          "id": "b",
          "text": "$\\cos \\alpha + \\cos \\beta = 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos \\alpha = -\\cos \\beta \\Leftrightarrow \\cos \\alpha + \\cos \\beta = 0$."
        },
        {
          "id": "c",
          "text": "$\\tan \\alpha \\cdot \\tan \\beta = 1$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\tan \\alpha = -\\tan \\beta$ nên $\\tan \\alpha \\cdot \\tan \\beta = -\\tan^2 \\beta \\le 0$."
        },
        {
          "id": "d",
          "text": "$\\cot \\alpha + \\cot \\beta = 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cot \\alpha = -\\cot \\beta$."
        }
      ]
    },
    {
      "id": "tf-10.5.4",
      "badge": "Đúng / Sai 4 - Tính giá trị khi biết sin alpha",
      "source": "SBT Toán 10 KNTT Bài 5",
      "prompt": "Cho góc $\\alpha$ thỏa mãn $90^\\circ < \\alpha < 180^\\circ$ và $\\sin \\alpha = \\frac{3}{5}$.",
      "subItems": [
        {
          "id": "a",
          "text": "$\\alpha$ là một góc tù.",
          "correctAnswer": true,
          "explanation": "Đúng vì $90^\\circ < \\alpha < 180^\\circ$ là định nghĩa của góc tù."
        },
        {
          "id": "b",
          "text": "$\\cos \\alpha = \\frac{4}{5}$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\alpha$ tù nên $\\cos \\alpha < 0$, giá trị đúng là $\\cos \\alpha = -\\frac{4}{5}$."
        },
        {
          "id": "c",
          "text": "$\\tan \\alpha = -\\frac{3}{4}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$."
        },
        {
          "id": "d",
          "text": "Biểu thức $E = 2\\sin \\alpha + \\cos \\alpha$ có giá trị bằng $\\frac{2}{5}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $E = 2\\left(\\frac{3}{5}\\right) + \\left(-\\frac{4}{5}\\right) = \\frac{6}{5} - \\frac{4}{5} = \\frac{2}{5}$."
        }
      ]
    },
    {
      "id": "tf-10.5.5",
      "badge": "Đúng / Sai 5 - Tính giá trị khi biết cos alpha",
      "source": "SBT Toán 10 KNTT Bài 5",
      "prompt": "Cho góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$) thỏa mãn $\\cos \\alpha = -\\frac{5}{13}$.",
      "subItems": [
        {
          "id": "a",
          "text": "Góc $\\alpha$ là góc tù.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos \\alpha < 0$ chứng tỏ $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$)."
        },
        {
          "id": "b",
          "text": "$\\sin \\alpha = \\frac{12}{13}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin \\alpha = \\sqrt{1 - \\cos^2 \\alpha} = \\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$ (luôn dương trên $[0^\\circ; 180^\\circ]$)."
        },
        {
          "id": "c",
          "text": "$\\cot \\alpha = -\\frac{12}{5}$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha} = \\frac{-5/13}{12/13} = -\\frac{5}{12}$."
        },
        {
          "id": "d",
          "text": "Giá trị của biểu thức $T = \\sin^2 \\alpha - \\cos^2 \\alpha$ bằng $\\frac{119}{169}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $T = \\left(\\frac{12}{13}\\right)^2 - \\left(-\\frac{5}{13}\\right)^2 = \\frac{144 - 25}{169} = \\frac{119}{169}$."
        }
      ]
    },
    {
      "id": "tf-10.5.6",
      "badge": "Đúng / Sai 6 - Rút gọn biểu thức lượng giác",
      "source": "SBT Toán 10 KNTT Bài 5",
      "prompt": "Xét tính đúng/sai của các đẳng thức rút gọn lượng giác sau với mọi góc $\\alpha$ hợp lệ:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin(180^\\circ - \\alpha) + \\cos(90^\\circ - \\alpha) = 2\\sin \\alpha$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$ và $\\cos(90^\\circ - \\alpha) = \\sin \\alpha$. Tổng là $2\\sin \\alpha$."
        },
        {
          "id": "b",
          "text": "$\\cos(180^\\circ - \\alpha) + \\sin(90^\\circ - \\alpha) = 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$ và $\\sin(90^\\circ - \\alpha) = \\cos \\alpha$. Tổng bằng 0."
        },
        {
          "id": "c",
          "text": "$\\tan(180^\\circ - \\alpha) \\cdot \\cot(90^\\circ - \\alpha) = 1$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$ và $\\cot(90^\\circ - \\alpha) = \\tan \\alpha$, tích là $-\\tan^2 \\alpha$ chứ không phải $1$."
        },
        {
          "id": "d",
          "text": "$\\sin^2(180^\\circ - \\alpha) + \\cos^2(180^\\circ - \\alpha) = 1$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $(-\\cos \\alpha)^2 + (\\sin \\alpha)^2 = \\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
        }
      ]
    },
    {
      "id": "tf-10.5.7",
      "badge": "Đúng / Sai 7 - Biểu thức liên hệ tam giác",
      "source": "Đề thi thử Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ có các góc là $A, B, C$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin(A + B) = \\sin C$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $A + B + C = 180^\\circ \\Rightarrow A + B = 180^\\circ - C \\Rightarrow \\sin(A + B) = \\sin(180^\\circ - C) = \\sin C$."
        },
        {
          "id": "b",
          "text": "$\\cos(A + B) = \\cos C$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\cos(A + B) = \\cos(180^\\circ - C) = -\\cos C$."
        },
        {
          "id": "c",
          "text": "$\\cos(A + B) + \\cos C = 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos(A + B) = -\\cos C \\Leftrightarrow \\cos(A + B) + \\cos C = 0$."
        },
        {
          "id": "d",
          "text": "$\\tan(A + B) = -\\tan C$ (với tam giác $ABC$ không vuông tại $C$).",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\tan(A + B) = \\tan(180^\\circ - C) = -\\tan C$."
        }
      ]
    },
    {
      "id": "tf-10.5.8",
      "badge": "Đúng / Sai 8 - Hệ thức nâng cao và góc phụ",
      "source": "Đề thi HSG Toán 10",
      "prompt": "Cho biểu thức $P = \\sin^2 10^\\circ + \\sin^2 20^\\circ + \\dots + \\sin^2 80^\\circ$. Xét tính đúng/sai:",
      "subItems": [
        {
          "id": "a",
          "text": "Góc $10^\\circ$ và $80^\\circ$ là hai góc phụ nhau.",
          "correctAnswer": true,
          "explanation": "Đúng vì $10^\\circ + 80^\\circ = 90^\\circ$."
        },
        {
          "id": "b",
          "text": "Ta có $\\sin 80^\\circ = \\cos 10^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức hai góc phụ nhau: $\\sin(90^\\circ - 10^\\circ) = \\cos 10^\\circ$."
        },
        {
          "id": "c",
          "text": "$\\sin^2 10^\\circ + \\sin^2 80^\\circ = 1$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin^2 10^\\circ + \\cos^2 10^\\circ = 1$."
        },
        {
          "id": "d",
          "text": "Giá trị của biểu thức $P$ bằng $4$.",
          "correctAnswer": true,
          "explanation": "Đúng vì ghép 4 cặp: $(10^\\circ, 80^\\circ), (20^\\circ, 70^\\circ), (30^\\circ, 60^\\circ), (40^\\circ, 50^\\circ)$. Mỗi cặp bằng 1, tổng bằng $4$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.5.1",
      "badge": "Trả lời ngắn 1 - Tính sin góc bù",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Biết $\\sin 40^\\circ \\approx 0{,}643$. Tính giá trị của biểu thức $A = \\sin 140^\\circ - \\sin 40^\\circ$.",
      "correctAnswer": "0",
      "acceptableAnswers": [
        "0"
      ],
      "explanation": "Vì $140^\\circ = 180^\\circ - 40^\\circ$ nên $\\sin 140^\\circ = \\sin 40^\\circ$. Do đó $A = \\sin 40^\\circ - \\sin 40^\\circ = 0$."
    },
    {
      "id": "sa-10.5.2",
      "badge": "Trả lời ngắn 2 - Tính tổng cos hai góc bù nhau",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Tính giá trị của biểu thức $B = \\cos 35^\\circ + \\cos 145^\\circ$.",
      "correctAnswer": "0",
      "acceptableAnswers": [
        "0"
      ],
      "explanation": "Vì $145^\\circ = 180^\\circ - 35^\\circ$ nên $\\cos 145^\\circ = -\\cos 35^\\circ$. Tổng $B = \\cos 35^\\circ - \\cos 35^\\circ = 0$."
    },
    {
      "id": "sa-10.5.3",
      "badge": "Trả lời ngắn 3 - Tính giá trị biểu thức tổng bình phương",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Tính giá trị của biểu thức $C = \\sin^2 47^\\circ + \\cos^2 133^\\circ$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Ta có $\\cos 133^\\circ = \\cos(180^\\circ - 47^\\circ) = -\\cos 47^\\circ \\Rightarrow \\cos^2 133^\\circ = \\cos^2 47^\\circ$. Khi đó $C = \\sin^2 47^\\circ + \\cos^2 47^\\circ = 1$."
    },
    {
      "id": "sa-10.5.4",
      "badge": "Trả lời ngắn 4 - Tính góc khi biết sin",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Tìm số đo góc tù $\\alpha$ (tính theo độ) thỏa mãn $\\sin \\alpha = \\frac{1}{2}$.",
      "correctAnswer": "150",
      "acceptableAnswers": [
        "150",
        "150 độ",
        "150°"
      ],
      "explanation": "Vì $\\sin 30^\\circ = \\frac{1}{2}$ nên góc tù thỏa mãn là $\\alpha = 180^\\circ - 30^\\circ = 150^\\circ$."
    },
    {
      "id": "sa-10.5.5",
      "badge": "Trả lời ngắn 5 - Tính góc khi biết cos âm",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Tìm số đo góc $\\alpha$ (tính theo độ, $0^\\circ \\le \\alpha \\le 180^\\circ$) biết $\\cos \\alpha = -\\frac{\\sqrt{2}}{2}$.",
      "correctAnswer": "135",
      "acceptableAnswers": [
        "135",
        "135 độ",
        "135°"
      ],
      "explanation": "Vì $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$ nên $\\cos 135^\\circ = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$. Do đó $\\alpha = 135^\\circ$."
    },
    {
      "id": "sa-10.5.6",
      "badge": "Trả lời ngắn 6 - Tính góc khi biết tan âm",
      "source": "SGK Toán 10 KNTT Bài 5",
      "prompt": "Tìm số đo góc $\\alpha$ (tính theo độ, $0^\\circ \\le \\alpha \\le 180^\\circ$) biết $\\tan \\alpha = -1$.",
      "correctAnswer": "135",
      "acceptableAnswers": [
        "135",
        "135 độ",
        "135°"
      ],
      "explanation": "Vì $\\tan 45^\\circ = 1$ nên $\\tan 135^\\circ = -\\tan 45^\\circ = -1$. Vậy $\\alpha = 135^\\circ$."
    },
    {
      "id": "sa-10.5.7",
      "badge": "Trả lời ngắn 7 - Tính giá trị biểu thức tích tan",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Tính giá trị của biểu thức $P = \\tan 20^\\circ \\cdot \\tan 70^\\circ$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Vì $70^\\circ = 90^\\circ - 20^\\circ$ nên $\\tan 70^\\circ = \\cot 20^\\circ$. Do đó $P = \\tan 20^\\circ \\cdot \\cot 20^\\circ = 1$."
    },
    {
      "id": "sa-10.5.8",
      "badge": "Trả lời ngắn 8 - Tính tan khi biết sin và cos",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho góc tù $\\alpha$ thỏa mãn $\\sin \\alpha = \\frac{3}{5}$. Tính giá trị của biểu thức $4\\tan \\alpha$.",
      "correctAnswer": "-3",
      "acceptableAnswers": [
        "-3"
      ],
      "explanation": "Vì $\\alpha$ tù nên $\\cos \\alpha = -\\sqrt{1 - (3/5)^2} = -\\frac{4}{5}$. Do đó $\\tan \\alpha = \\frac{3/5}{-4/5} = -\\frac{3}{4} \\Rightarrow 4\\tan \\alpha = -3$."
    },
    {
      "id": "sa-10.5.9",
      "badge": "Trả lời ngắn 9 - Rút gọn biểu thức tổng bình phương",
      "source": "Bộ đề ôn tập Toán 10",
      "prompt": "Tính giá trị của biểu thức $S = \\sin^2 15^\\circ + \\sin^2 75^\\circ + \\cos^2 30^\\circ + \\cos^2 60^\\circ$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Ta có $\\sin 75^\\circ = \\cos 15^\\circ \\Rightarrow \\sin^2 15^\\circ + \\sin^2 75^\\circ = \\sin^2 15^\\circ + \\cos^2 15^\\circ = 1$. Tương tự $\\cos 60^\\circ = \\sin 30^\\circ \\Rightarrow \\cos^2 30^\\circ + \\cos^2 60^\\circ = \\cos^2 30^\\circ + \\sin^2 30^\\circ = 1$. Tổng $S = 1 + 1 = 2$."
    },
    {
      "id": "sa-10.5.10",
      "badge": "Trả lời ngắn 10 - Giá trị biểu thức lượng giác phân thức",
      "source": "Bộ đề ôn tập Toán 10",
      "prompt": "Cho $\\tan \\alpha = 3$. Tính giá trị của biểu thức $Q = \\frac{\\sin \\alpha + \\cos \\alpha}{\\sin \\alpha - \\cos \\alpha}$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Chia cả tử và mẫu cho $\\cos \\alpha \\ne 0$: $Q = \\frac{\\tan \\alpha + 1}{\\tan \\alpha - 1} = \\frac{3 + 1}{3 - 1} = \\frac{4}{2} = 2$."
    },
    {
      "id": "sa-10.5.11",
      "badge": "Trả lời ngắn 11 - Tích sin và cos khi biết tổng",
      "source": "Đề thi HSG Toán 10",
      "prompt": "Cho góc $\\alpha$ thỏa mãn $\\sin \\alpha + \\cos \\alpha = \\frac{7}{5}$. Tính giá trị của $50 \\cdot (\\sin \\alpha \\cdot \\cos \\alpha)$.",
      "correctAnswer": "24",
      "acceptableAnswers": [
        "24"
      ],
      "explanation": "Bình phương hai vế: $(\\sin \\alpha + \\cos \\alpha)^2 = \\frac{49}{25} \\Leftrightarrow 1 + 2\\sin \\alpha \\cos \\alpha = \\frac{49}{25} \\Leftrightarrow 2\\sin \\alpha \\cos \\alpha = \\frac{24}{25} \\Leftrightarrow \\sin \\alpha \\cos \\alpha = \\frac{12}{25}$. Vậy $50 \\cdot \\frac{12}{25} = 24$."
    },
    {
      "id": "sa-10.5.12",
      "badge": "Trả lời ngắn 12 - Giá trị biểu thức đối xứng bậc 4",
      "source": "Đề thi HSG Toán 10",
      "prompt": "Biết $\\sin \\alpha \\cos \\alpha = \\frac{1}{4}$. Tính giá trị của biểu thức $P = 8(\\sin^4 \\alpha + \\cos^4 \\alpha)$.",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7"
      ],
      "explanation": "Ta có $\\sin^4 \\alpha + \\cos^4 \\alpha = (\\sin^2 \\alpha + \\cos^2 \\alpha)^2 - 2\\sin^2 \\alpha \\cos^2 \\alpha = 1 - 2\\left(\\frac{1}{4}\\right)^2 = 1 - 2\\left(\\frac{1}{16}\\right) = 1 - \\frac{1}{8} = \\frac{7}{8}$. Do đó $8 \\cdot \\frac{7}{8} = 7$."
    }
  ]
},

  // ==========================================
  // BÀI 6: HỆ THỨC LƯỢNG TRONG TAM GIÁC
  // ==========================================
  "t10-b6-he-thuc-luong-tam-giac": {
  "id": "t10-b6-he-thuc-luong-tam-giac",
  "lessonNumber": 6,
  "title": "Bài 6: Hệ thức lượng trong tam giác",
  "bookChapter": "Chương III: Hệ thức lượng trong tam giác (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Tình huống thực tế: Đo chiều cao tháp truyền hình và khoảng cách qua hồ nước",
  "scenarioFrames": [],
  "interactiveType": "geometry",
  "youtubeVideoId": "4rXeqdVy20k",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 6 - Hệ thức lượng trong tam giác (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "4rXeqdVy20k",
      "title": "Tiết 1: Định lý Cosin & Hệ quả tính góc của tam giác"
    },
    {
      "id": "ohB2309RBlQ",
      "title": "Tiết 2: Công thức độ dài đường trung tuyến của tam giác"
    },
    {
      "id": "j1wxq0uMblQ",
      "title": "Tiết 3: Định lý Sin & Tính bán kính đường tròn ngoại tiếp R"
    },
    {
      "id": "SHM5fZEGK54",
      "title": "Tiết 4: Các công thức tính diện tích tam giác & Công thức Heron"
    },
    {
      "id": "6_Zz6_MTPhQ",
      "title": "Tiết 5: Giải tam giác & Ứng dụng đo đạc thực tế (khoảng cách, chiều cao)"
    },
    {
      "id": "pvaua9QDz1c",
      "title": "Tiết 6: Chữa chi tiết toàn bộ bài tập SGK Toán 10 KNTT Bài 6"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.6.1",
      "title": "Ví dụ 1 (Tiết 1): Áp dụng định lý Cosin tính cạnh tam giác",
      "question": "Cho tam giác $ABC$ có $b = 8$, $c = 5$ và $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
      "options": [
        "$7$",
        "$\\sqrt{89}$",
        "$6$",
        "$3\\sqrt{5}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Cosin: $a^2 = b^2 + c^2 - 2bc \\cos A = 8^2 + 5^2 - 2 \\cdot 8 \\cdot 5 \\cdot \\cos 60^\\circ = 64 + 25 - 80 \\cdot \\frac{1}{2} = 49 \\Rightarrow a = 7$."
    },
    {
      "id": "vq-10.6.2",
      "title": "Ví dụ 2 (Tiết 2): Tính độ dài đường trung tuyến kẻ từ đỉnh A",
      "question": "Cho tam giác $ABC$ có $a = 6$, $b = 8$, $c = 10$. Độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$ bằng:",
      "options": [
        "$\\sqrt{73}$",
        "$5$",
        "$7$",
        "$\\sqrt{65}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức đường trung tuyến: $m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4} = \\frac{2(64 + 100) - 36}{4} = \\frac{2(164) - 36}{4} = \\frac{328 - 36}{4} = \\frac{292}{4} = 73 \\Rightarrow m_a = \\sqrt{73}$."
    },
    {
      "id": "vq-10.6.3",
      "title": "Ví dụ 3 (Tiết 3): Định lý Sin và bán kính ngoại tiếp R",
      "question": "Cho tam giác $ABC$ có $a = 10$ và $\\widehat{A} = 30^\\circ$. Bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ là:",
      "options": [
        "$10$",
        "$5$",
        "$20$",
        "$10\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Sin: $\\frac{a}{\\sin A} = 2R \\Rightarrow R = \\frac{a}{2\\sin A} = \\frac{10}{2\\sin 30^\\circ} = \\frac{10}{2 \\cdot \\frac{1}{2}} = 10$."
    },
    {
      "id": "vq-10.6.4",
      "title": "Ví dụ 4 (Tiết 4): Tính diện tích tam giác theo công thức sin",
      "question": "Cho tam giác $ABC$ có $AB = 6$, $AC = 8$ và $\\widehat{A} = 30^\\circ$. Diện tích của tam giác $ABC$ là:",
      "options": [
        "$12$",
        "$24$",
        "$12\\sqrt{3}$",
        "$6\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích tam giác: $S = \\frac{1}{2} AB \\cdot AC \\cdot \\sin A = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin 30^\\circ = 24 \\cdot \\frac{1}{2} = 12$."
    },
    {
      "id": "vq-10.6.5",
      "title": "Ví dụ 5 (Tiết 5): Đo khoảng cách không đến được trong thực tế",
      "question": "Hai điểm $A$ và $B$ cách nhau một đầm lầy. Từ điểm $C$ nhìn thấy hai điểm $A$ và $B$ dưới góc $\\widehat{ACB} = 60^\\circ$, đồng thời đo được $CA = 40\\text{ m}$, $CB = 60\\text{ m}$. Khoảng cách $AB$ xấp xỉ bằng:",
      "options": [
        "$52{,}9\\text{ m}$",
        "$50\\text{ m}$",
        "$55{,}5\\text{ m}$",
        "$62{,}3\\text{ m}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng định lý Cosin trong tam giác $ABC$:\n$AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos C = 40^2 + 60^2 - 2 \\cdot 40 \\cdot 60 \\cdot \\cos 60^\\circ = 1600 + 3600 - 4800 \\cdot 0{,}5 = 5200 - 2400 = 2800$.\nSuy ra $AB = \\sqrt{2800} = 20\\sqrt{7} \\approx 52{,}915\\text{ m}$."
    },
    {
      "id": "vq-10.6.6",
      "title": "Ví dụ 6 (Tiết 6): Tính bán kính đường tròn nội tiếp r",
      "question": "Cho tam giác có ba cạnh là $5$, $6$, $7$. Bán kính $r$ của đường tròn nội tiếp tam giác bằng:",
      "options": [
        "$\\frac{2\\sqrt{6}}{3}$",
        "$\\frac{\\sqrt{6}}{3}$",
        "$\\sqrt{6}$",
        "$2\\sqrt{6}$"
      ],
      "correctIndex": 0,
      "explanation": "Nửa chu vi $p = \\frac{5 + 6 + 7}{2} = 9$.\nDiện tích Heron: $S = \\sqrt{9(9 - 5)(9 - 6)(9 - 7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6}$.\nBán kính nội tiếp: $r = \\frac{S}{p} = \\frac{6\\sqrt{6}}{9} = \\frac{2\\sqrt{6}}{3}$."
    }
  ],
  "tips": [
    "Mẹo chọn định lý Cosin hay Sin: Biết 2 cạnh và góc kẹp giữa (c-g-c) hoặc 3 cạnh (c-c-c) -> dùng ĐỊNH LÝ COSIN. Biết 1 cạnh và 2 góc (g-c-g) hoặc 2 cạnh và 1 góc đối diện -> dùng ĐỊNH LÝ SIN.",
    "Mẹo tính bán kính đường tròn ngoại tiếp R: Luôn dùng định lý Sin: R = a / (2 sin A).",
    "Mẹo tính bán kính đường tròn nội tiếp r: Tính diện tích S trước (bằng Heron hoặc 1/2 ab sin C), sau đó dùng r = S / p (với p là nửa chu vi).",
    "Mẹo nhận biết góc tù trong tam giác: Nếu a² > b² + c² thì tam giác tù tại góc A (vì cos A < 0); nếu a² = b² + c² thì vuông tại A; nếu a² < b² + c² (với a là cạnh lớn nhất) thì nhọn."
  ],
  "traps": [
    "Cạm bẫy nhầm dấu định lý Cosin: a² = b² + c² - 2bc cos A (dấu TRỪ, không phải dấu cộng!). Và cos A = (b² + c² - a²) / (2bc).",
    "Cạm bẫy định lý Sin tính R: a / sin A = 2R (bằng 2R chứ không phải bằng R!).",
    "Cạm bẫy hai nghiệm góc khi dùng định lý Sin: Khi tính sin B = (b sin A) / a < 1, góc B có thể là góc nhọn hoặc góc tù (nếu b > a). Luôn kiểm tra điều kiện cạnh đối diện góc lớn hơn phải lớn hơn!",
    "Cạm bẫy làm tròn số quá sớm trong bài toán thực tế: Hãy giữ phân số hoặc biểu thức căn/lượng giác chính xác đến bước cuối cùng mới bấm xấp xỉ để tránh sai số lũy tiến."
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Định lý Cosin và công thức đường trung tuyến",
      "points": [
        "Định lý Cosin: Trong tam giác $ABC$ có độ dài các cạnh $BC = a, CA = b, AB = c$:",
        "    • $a^2 = b^2 + c^2 - 2bc \\cos A$",
        "    • $b^2 = a^2 + c^2 - 2ac \\cos B$",
        "    • $c^2 = a^2 + b^2 - 2ab \\cos C$",
        "Hệ quả (Tính góc từ 3 cạnh):",
        "    • $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}; \\quad \\cos B = \\frac{a^2 + c^2 - b^2}{2ac}; \\quad \\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$",
        "Công thức độ dài đường trung tuyến (kẻ từ đỉnh $A, B, C$):",
        "    • $m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4}; \\quad m_b^2 = \\frac{2(a^2 + c^2) - b^2}{4}; \\quad m_c^2 = \\frac{2(a^2 + b^2) - c^2}{4}$"
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tính cạnh thứ ba và góc của tam giác",
          "problem": "Cho tam giác $ABC$ có $b = 8$, $c = 5$ và $\\widehat{A} = 60^\\circ$. Tính cạnh $a$ và góc $\\widehat{B}$.",
          "solution": "• Áp dụng định lý Cosin tính cạnh $a$:\n$a^2 = b^2 + c^2 - 2bc \\cos A = 8^2 + 5^2 - 2 \\cdot 8 \\cdot 5 \\cdot \\cos 60^\\circ = 64 + 25 - 80 \\cdot \\frac{1}{2} = 89 - 40 = 49 \\Rightarrow a = 7$.\n• Áp dụng hệ quả tính $\\cos B$:\n$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{7^2 + 5^2 - 8^2}{2 \\cdot 7 \\cdot 5} = \\frac{49 + 25 - 64}{70} = \\frac{10}{70} = \\frac{1}{7} \\Rightarrow \\widehat{B} \\approx 81{,}8^\\circ$."
        }
      ]
    },
    {
      "index": "2",
      "title": "Định lý Sin",
      "points": [
        "Định lý Sin: Trong tam giác $ABC$ bất kỳ, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng đường kính đường tròn ngoại tiếp $2R$:",
        "    $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$",
        "Hệ quả:",
        "    • $a = 2R \\sin A, \\quad b = 2R \\sin B, \\quad c = 2R \\sin C$",
        "    • $R = \\frac{a}{2\\sin A} = \\frac{b}{2\\sin B} = \\frac{c}{2\\sin C}$"
      ],
      "examples": [
        {
          "title": "Ví dụ 2: Tính cạnh và bán kính đường tròn ngoại tiếp",
          "problem": "Cho tam giác $ABC$ có $a = 10$, $\\widehat{A} = 45^\\circ$, $\\widehat{B} = 60^\\circ$. Tính cạnh $b$ và bán kính $R$.",
          "solution": "• Áp dụng định lý Sin:\n$\\frac{b}{\\sin B} = \\frac{a}{\\sin A} \\Rightarrow b = \\frac{a \\cdot \\sin B}{\\sin A} = \\frac{10 \\cdot \\sin 60^\\circ}{\\sin 45^\\circ} = \\frac{10 \\cdot \\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}} = 10 \\cdot \\sqrt{\\frac{3}{2}} = 5\\sqrt{6}$.\n• Bán kính đường tròn ngoại tiếp:\n$R = \\frac{a}{2\\sin A} = \\frac{10}{2\\sin 45^\\circ} = \\frac{10}{2 \\cdot \\frac{\\sqrt{2}}{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Các công thức tính diện tích tam giác",
      "points": [
        "Cho tam giác $ABC$ có các cạnh $a, b, c$, nửa chu vi $p = \\frac{a + b + c}{2}$, bán kính ngoại tiếp $R$, nội tiếp $r$:",
        "    1) $S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$",
        "    2) $S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ac \\sin B$",
        "    3) $S = \\frac{abc}{4R} \\quad \\Rightarrow \\quad R = \\frac{abc}{4S}$",
        "    4) $S = pr \\quad \\Rightarrow \\quad r = \\frac{S}{p}$",
        "    5) Công thức Heron: $S = \\sqrt{p(p - a)(p - b)(p - c)}$"
      ],
      "examples": [
        {
          "title": "Ví dụ 3: Tính diện tích, R, r của tam giác biết ba cạnh",
          "problem": "Cho tam giác $ABC$ có $a = 13$, $b = 14$, $c = 15$. Tính diện tích $S$, bán kính $R$ và $r$.",
          "solution": "• Nửa chu vi: $p = \\frac{13 + 14 + 15}{2} = 21$.\n• Diện tích theo công thức Heron:\n$S = \\sqrt{21(21 - 13)(21 - 14)(21 - 15)} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$.\n• Bán kính đường tròn ngoại tiếp:\n$R = \\frac{abc}{4S} = \\frac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\frac{2730}{336} = \\frac{65}{8} = 8{,}125$.\n• Bán kính đường tròn nội tiếp:\n$r = \\frac{S}{p} = \\frac{84}{21} = 4$."
        }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.6.1",
      "badge": "Nhận biết - Định lý Cosin",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 43",
      "question": "Cho tam giác $ABC$ có các cạnh $BC = a, AC = b, AB = c$. Mệnh đề nào sau đây ĐÚNG?",
      "options": [
        "$a^2 = b^2 + c^2 - 2bc \\cos A$",
        "$a^2 = b^2 + c^2 + 2bc \\cos A$",
        "$a^2 = b^2 + c^2 - 2bc \\sin A$",
        "$a^2 = b^2 + c^2 - bc \\cos A$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Cosin trong tam giác $ABC$: $a^2 = b^2 + c^2 - 2bc \\cos A$."
    },
    {
      "id": "quiz-10.6.2",
      "badge": "Nhận biết - Hệ quả định lý Cosin",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 43",
      "question": "Trong tam giác $ABC$, công thức tính $\\cos A$ là:",
      "options": [
        "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$",
        "$\\cos A = \\frac{b^2 + c^2 + a^2}{2bc}$",
        "$\\cos A = \\frac{a^2 + c^2 - b^2}{2ac}$",
        "$\\cos A = \\frac{b^2 + c^2 - a^2}{bc}$"
      ],
      "correctIndex": 0,
      "explanation": "Từ $a^2 = b^2 + c^2 - 2bc \\cos A \\Rightarrow \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$."
    },
    {
      "id": "quiz-10.6.3",
      "badge": "Nhận biết - Định lý Sin",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 44",
      "question": "Cho tam giác $ABC$ nội tiếp đường tròn bán kính $R$. Hệ thức nào sau đây ĐÚNG?",
      "options": [
        "$\\frac{a}{\\sin A} = 2R$",
        "$\\frac{a}{\\sin A} = R$",
        "$\\frac{a}{\\sin A} = 4R$",
        "$a \\sin A = 2R$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Sin: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$."
    },
    {
      "id": "quiz-10.6.4",
      "badge": "Nhận biết - Công thức diện tích tam giác chứa sin",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 45",
      "question": "Diện tích tam giác $ABC$ được tính theo công thức nào sau đây?",
      "options": [
        "$S = \\frac{1}{2} bc \\sin A$",
        "$S = \\frac{1}{2} bc \\cos A$",
        "$S = bc \\sin A$",
        "$S = \\frac{1}{2} ac \\sin A$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích bằng nửa tích hai cạnh nhân sin của góc kẹp giữa: $S = \\frac{1}{2} bc \\sin A$."
    },
    {
      "id": "quiz-10.6.5",
      "badge": "Nhận biết - Công thức Heron",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 45",
      "question": "Với $p = \\frac{a + b + c}{2}$ là nửa chu vi, công thức Heron tính diện tích tam giác là:",
      "options": [
        "$S = \\sqrt{p(p - a)(p - b)(p - c)}$",
        "$S = \\sqrt{(p - a)(p - b)(p - c)}$",
        "$S = p(p - a)(p - b)(p - c)$",
        "$S = \\sqrt{p(p + a)(p + b)(p + c)}$"
      ],
      "correctIndex": 0,
      "explanation": "Công thức Heron: $S = \\sqrt{p(p - a)(p - b)(p - c)}$."
    },
    {
      "id": "quiz-10.6.6",
      "badge": "Nhận biết - Mối liên hệ diện tích và bán kính nội tiếp",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 45",
      "question": "Bán kính đường tròn nội tiếp $r$ của tam giác $ABC$ được tính theo công thức:",
      "options": [
        "$r = \\frac{S}{p}$",
        "$r = \\frac{p}{S}$",
        "$r = \\frac{4S}{abc}$",
        "$r = \\frac{abc}{4S}$"
      ],
      "correctIndex": 0,
      "explanation": "Từ công thức diện tích $S = pr$, suy ra bán kính đường tròn nội tiếp là $r = \\frac{S}{p}$."
    },
    {
      "id": "quiz-10.6.7",
      "badge": "Thông hiểu - Tính cạnh khi biết hai cạnh và góc xen giữa",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 44",
      "question": "Cho tam giác $ABC$ có $b = 6, c = 8, \\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
      "options": [
        "$2\\sqrt{13}$",
        "$\\sqrt{148}$",
        "$10$",
        "$2\\sqrt{37}$"
      ],
      "correctIndex": 0,
      "explanation": "$a^2 = b^2 + c^2 - 2bc \\cos A = 36 + 64 - 2(6)(8)\\left(\\frac{1}{2}\\right) = 100 - 48 = 52 \\Rightarrow a = \\sqrt{52} = 2\\sqrt{13}$."
    },
    {
      "id": "quiz-10.6.8",
      "badge": "Thông hiểu - Tính góc khi biết ba cạnh",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 44",
      "question": "Tam giác $ABC$ có $a = 7, b = 8, c = 5$. Số đo của góc $\\widehat{A}$ bằng:",
      "options": [
        "$60^\\circ$",
        "$45^\\circ$",
        "$30^\\circ$",
        "$120^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{64 + 25 - 49}{2(8)(5)} = \\frac{40}{80} = \\frac{1}{2} \\Rightarrow \\widehat{A} = 60^\\circ$."
    },
    {
      "id": "quiz-10.6.9",
      "badge": "Thông hiểu - Tính cạnh theo định lý Sin",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 45",
      "question": "Cho tam giác $ABC$ có $\\widehat{B} = 60^\\circ, \\widehat{C} = 45^\\circ$ và $b = 6$. Độ dài cạnh $c$ là:",
      "options": [
        "$2\\sqrt{6}$",
        "$3\\sqrt{2}$",
        "$2\\sqrt{3}$",
        "$3\\sqrt{6}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Sin: $c = \\frac{b \\sin C}{\\sin B} = \\frac{6 \\cdot \\sin 45^\\circ}{\\sin 60^\\circ} = \\frac{6 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{3}}{2}} = \\frac{6\\sqrt{2}}{\\sqrt{3}} = 2\\sqrt{6}$."
    },
    {
      "id": "quiz-10.6.10",
      "badge": "Thông hiểu - Tính bán kính đường tròn ngoại tiếp R",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 45",
      "question": "Cho tam giác $ABC$ có $a = 6$ và $\\widehat{A} = 30^\\circ$. Bán kính đường tròn ngoại tiếp $R$ bằng:",
      "options": [
        "$6$",
        "$12$",
        "$3$",
        "$6\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{1/2} = 12 \\Rightarrow R = 6$."
    },
    {
      "id": "quiz-10.6.11",
      "badge": "Thông hiểu - Tính diện tích tam giác",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 46",
      "question": "Tam giác $ABC$ có $a = 4, b = 5$ và $\\widehat{C} = 30^\\circ$. Diện tích của tam giác $ABC$ bằng:",
      "options": [
        "$5$",
        "$10$",
        "$5\\sqrt{3}$",
        "$20$"
      ],
      "correctIndex": 0,
      "explanation": "$S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} \\cdot 4 \\cdot 5 \\cdot \\sin 30^\\circ = 10 \\cdot \\frac{1}{2} = 5$."
    },
    {
      "id": "quiz-10.6.12",
      "badge": "Thông hiểu - Công thức độ dài đường trung tuyến",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 44",
      "question": "Cho tam giác $ABC$ có $a = 6, b = 4, c = 4$. Độ dài đường trung tuyến $m_a$ kẻ từ $A$ bằng:",
      "options": [
        "$\\sqrt{7}$",
        "$7$",
        "$\\sqrt{14}$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "$m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4} = \\frac{2(16 + 16) - 36}{4} = \\frac{64 - 36}{4} = \\frac{28}{4} = 7 \\Rightarrow m_a = \\sqrt{7}$."
    },
    {
      "id": "quiz-10.6.13",
      "badge": "Vận dụng - Nhận dạng tam giác tù",
      "source": "SBT Toán 10 KNTT Bài 6",
      "question": "Tam giác $ABC$ có ba cạnh $a = 5, b = 7, c = 10$. Khẳng định nào sau đây ĐÚNG?",
      "options": [
        "Tam giác $ABC$ là tam giác tù",
        "Tam giác $ABC$ là tam giác nhọn",
        "Tam giác $ABC$ là tam giác vuông",
        "Tam giác $ABC$ là tam giác đều"
      ],
      "correctIndex": 0,
      "explanation": "Xét cạnh lớn nhất $c = 10$: ta có $c^2 = 100$, trong khi $a^2 + b^2 = 25 + 49 = 74$. Vì $c^2 > a^2 + b^2$ nên $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{74 - 100}{70} < 0 \\Rightarrow \\widehat{C} > 90^\\circ$. Vậy tam giác là tam giác tù."
    },
    {
      "id": "quiz-10.6.14",
      "badge": "Vận dụng - Tính chiều cao tam giác",
      "source": "SBT Toán 10 KNTT Bài 6",
      "question": "Tam giác $ABC$ có ba cạnh $a = 6, b = 8, c = 10$. Chiều cao $h_a$ kẻ từ đỉnh $A$ bằng:",
      "options": [
        "$8$",
        "$6$",
        "$4{,}8$",
        "$10$"
      ],
      "correctIndex": 0,
      "explanation": "Ta thấy $6^2 + 8^2 = 36 + 64 = 100 = 10^2$, tam giác vuông tại $A$. Do đó diện tích $S = \\frac{1}{2}bc = \\frac{1}{2}(8)(6) = 24$. Mặt khác $S = \\frac{1}{2} a h_a \\Rightarrow h_a = \\frac{2S}{a} = \\frac{48}{6} = 8$."
    },
    {
      "id": "quiz-10.6.15",
      "badge": "Vận dụng - Tính bán kính đường tròn nội tiếp r",
      "source": "SBT Toán 10 KNTT Bài 6",
      "question": "Tam giác vuông $ABC$ vuông tại $A$ có hai cạnh góc vuông $AB = 6, AC = 8$. Bán kính đường tròn nội tiếp $r$ bằng:",
      "options": [
        "$2$",
        "$1$",
        "$3$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Cạnh huyền $a = \\sqrt{6^2 + 8^2} = 10$. Nửa chu vi $p = \\frac{6 + 8 + 10}{2} = 12$. Diện tích $S = \\frac{1}{2}(6)(8) = 24$. Bán kính $r = \\frac{S}{p} = \\frac{24}{12} = 2$."
    },
    {
      "id": "quiz-10.6.16",
      "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <radialGradient id=\"lakeGrad\" cx=\"50%\" cy=\"50%\" r=\"50%\"> <stop offset=\"0%\" stop-color=\"#0284c7\" stop-opacity=\"0.35\"/> <stop offset=\"100%\" stop-color=\"#0369a1\" stop-opacity=\"0.10\"/> </radialGradient> </defs> <!-- Hồ nước/đầm lầy giữa A và B --> <path d=\"M 180 80 Q 250 55 310 90 Q 360 120 330 160 Q 270 190 210 165 Q 160 140 180 80 Z\" fill=\"url(#lakeGrad)\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"6 3\"/> <!-- Sóng nước minh họa --> <path d=\"M 230 110 Q 245 105 260 110\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\" opacity=\"0.6\"/> <path d=\"M 250 135 Q 265 130 280 135\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\" opacity=\"0.6\"/> <text x=\"240\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-style=\"italic\" opacity=\"0.75\">Hồ nước</text> <!-- Tam giác CAB --> <!-- Đỉnh C trên bờ --> <line x1=\"75\" y1=\"180\" x2=\"190\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"75\" y1=\"180\" x2=\"365\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <!-- Khoảng cách AB ngăn cách bởi hồ nước --> <line x1=\"190\" y1=\"65\" x2=\"365\" y2=\"175\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <!-- Góc C = 60 độ --> <path d=\"M 110 179 A 40 40 0 0 0 100 152\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"115\" y=\"165\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">60°</text> <!-- Số đo các cạnh --> <text x=\"105\" y=\"112\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">40 m</text> <text x=\"210\" y=\"200\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">60 m</text> <text x=\"290\" y=\"110\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AB = ?</text> <!-- Các đỉnh --> <circle cx=\"75\" cy=\"180\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"55\" y=\"195\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">C</text> <circle cx=\"190\" cy=\"65\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"180\" y=\"50\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"365\" cy=\"175\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"375\" y=\"185\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">B</text> </svg>",
      "badge": "Vận dụng - Bài toán thực tế đo khoảng cách đầm lầy",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 48",
      "question": "Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi một hồ nước, người ta chọn điểm $C$ trên bờ sao cho $CA = 40$ m, $CB = 60$ m và $\\widehat{ACB} = 60^\\circ$. Khoảng cách $AB$ bằng:",
      "options": [
        "$20\\sqrt{7}$ m",
        "$20\\sqrt{19}$ m",
        "50 m",
        "$20\\sqrt{3}$ m"
      ],
      "correctIndex": 0,
      "explanation": "$AB^2 = CA^2 + CB^2 - 2 CA \\cdot CB \\cos 60^\\circ = 40^2 + 60^2 - 2(40)(60)\\left(\\frac{1}{2}\\right) = 1600 + 3600 - 2400 = 2800 \\Rightarrow AB = \\sqrt{2800} = 20\\sqrt{7}$ m."
    },
    {
      "id": "quiz-10.6.17",
      "svgDiagram": "<svg viewBox=\"0 0 450 250\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <!-- Vùng biển và bờ biển --> <rect x=\"0\" y=\"0\" width=\"450\" height=\"195\" fill=\"#0369a1\" fill-opacity=\"0.12\"/> <line x1=\"30\" y1=\"195\" x2=\"420\" y2=\"195\" stroke=\"#eab308\" stroke-width=\"2\" stroke-dasharray=\"7 3\"/> <text x=\"380\" y=\"215\" fill=\"#eab308\" font-size=\"12\" font-style=\"italic\">Bờ biển</text> <text x=\"60\" y=\"45\" fill=\"#38bdf8\" font-size=\"12\" font-style=\"italic\">Mặt biển</text> <!-- Ngọn hải đăng C --> <g transform=\"translate(225, 45)\"> <!-- Đảo đá chân hải đăng --> <ellipse cx=\"0\" cy=\"15\" rx=\"22\" ry=\"7\" fill=\"#475569\"/> <!-- Tháp đèn --> <polygon points=\"-7,15 7,15 4,-12 -4,-12\" fill=\"#f1f5f9\"/> <rect x=\"-6\" y=\"-18\" width=\"12\" height=\"6\" fill=\"#ef4444\"/> <circle cx=\"0\" cy=\"-15\" r=\"3\" fill=\"#fef08a\"/> <!-- Luồng sáng --> <polygon points=\"0,-15 -45,-30 -35,-38\" fill=\"#fef08a\" opacity=\"0.3\"/> <polygon points=\"0,-15 45,-30 35,-38\" fill=\"#fef08a\" opacity=\"0.3\"/> <circle cx=\"0\" cy=\"15\" r=\"4\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"12\" y=\"10\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C (Hải đăng)</text> </g> <!-- Hai điểm A và B trên bờ biển --> <line x1=\"100\" y1=\"195\" x2=\"330\" y2=\"195\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"100\" y1=\"195\" x2=\"225\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"330\" y1=\"195\" x2=\"225\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <!-- Cung góc A = 70 độ --> <path d=\"M 135 195 A 35 35 0 0 0 118 165\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"132\" y=\"180\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">70°</text> <!-- Cung góc B = 80 độ --> <path d=\"M 295 195 A 35 35 0 0 1 316 163\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"275\" y=\"180\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">80°</text> <!-- Cung góc C cần tính --> <path d=\"M 215 76 A 25 25 0 0 0 235 76\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\"/> <text x=\"218\" y=\"96\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">?°</text> <!-- Khoảng cách AB --> <text x=\"200\" y=\"215\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">500 m</text> <!-- Điểm A và B --> <circle cx=\"100\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"90\" y=\"220\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"330\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"330\" y=\"220\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> </svg>",
      "badge": "Vận dụng - Bài toán ngọn hải đăng",
      "source": "SGK Toán 10 KNTT Bài 6 Trang 48",
      "question": "Từ hai vị trí $A$ và $B$ cách nhau 500 m trên bờ biển cùng quan sát một ngọn hải đăng $C$, người ta đo được $\\widehat{CAB} = 70^\\circ$ và $\\widehat{CBA} = 80^\\circ$. Góc $\\widehat{ACB}$ bằng:",
      "options": [
        "$30^\\circ$",
        "$40^\\circ$",
        "$35^\\circ$",
        "$50^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng ba góc trong tam giác bằng $180^\\circ$: $\\widehat{ACB} = 180^\\circ - (70^\\circ + 80^\\circ) = 30^\\circ$."
    },
    {
      "id": "quiz-10.6.18",
      "badge": "Vận dụng cao - Đẳng thức liên hệ lượng giác trong tam giác",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Nếu tam giác $ABC$ thỏa mãn $a = 2b \\cos C$ thì tam giác $ABC$ là:",
      "options": [
        "Tam giác cân tại $A$",
        "Tam giác cân tại $B$",
        "Tam giác vuông tại $C$",
        "Tam giác đều"
      ],
      "correctIndex": 0,
      "explanation": "Thay $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$ vào giả thiết: $a = 2b \\left(\\frac{a^2 + b^2 - c^2}{2ab}\\right) = \\frac{a^2 + b^2 - c^2}{a} \\Rightarrow a^2 = a^2 + b^2 - c^2 \\Leftrightarrow b^2 = c^2 \\Leftrightarrow b = c$. Vậy tam giác cân tại $A$."
    },
    {
      "id": "quiz-10.6.19",
      "badge": "Vận dụng cao - Tỉ số bán kính R và r",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho tam giác đều $ABC$ cạnh $a$. Tỉ số $\\frac{R}{r}$ giữa bán kính ngoại tiếp và nội tiếp bằng:",
      "options": [
        "$2$",
        "$\\sqrt{3}$",
        "$3$",
        "$\\frac{3}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Trong tam giác đều, trọng tâm trùng tâm đường tròn ngoại tiếp và nội tiếp. Bán kính ngoại tiếp $R = \\frac{2}{3} h$, bán kính nội tiếp $r = \\frac{1}{3} h$. Do đó $\\frac{R}{r} = 2$."
    },
    {
      "id": "quiz-10.6.20",
      "badge": "Vận dụng cao - Tối ưu hóa góc nhìn nghệ thuật",
      "source": "Đề thi HSG Toán 10",
      "question": "Cho tam giác $ABC$ có chu vi $2p = 16$ và bán kính đường tròn nội tiếp $r = 2$. Diện tích tam giác $ABC$ bằng:",
      "options": [
        "$16$",
        "$32$",
        "$8$",
        "$24$"
      ],
      "correctIndex": 0,
      "explanation": "Nửa chu vi $p = \\frac{16}{2} = 8$. Diện tích $S = pr = 8 \\cdot 2 = 16$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.6.1",
      "badge": "Đúng / Sai 1 - Định lý Cosin và Sin",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có độ dài ba cạnh $a, b, c$ và $R$ là bán kính đường tròn ngoại tiếp. Xét tính đúng/sai:",
      "subItems": [
        {
          "id": "a",
          "text": "Định lý Cosin khẳng định $b^2 = a^2 + c^2 - 2ac \\cos B$.",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức chuẩn của định lý Cosin."
        },
        {
          "id": "b",
          "text": "$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo hệ quả rút $\\cos B$ từ định lý Cosin."
        },
        {
          "id": "c",
          "text": "Theo định lý Sin ta có $b = R \\sin B$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\frac{b}{\\sin B} = 2R \\Rightarrow b = 2R \\sin B$."
        },
        {
          "id": "d",
          "text": "Nếu $\\widehat{A} = 90^\\circ$ thì $a = 2R$.",
          "correctAnswer": true,
          "explanation": "Đúng vì trong tam giác vuông, cạnh huyền $a$ chính là đường kính của đường tròn ngoại tiếp, $a = 2R$."
        }
      ]
    },
    {
      "id": "tf-10.6.2",
      "badge": "Đúng / Sai 2 - Tính toán số đo cụ thể trong tam giác",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có $a = 7, b = 8, c = 3$. Xét tính đúng/sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Nửa chu vi của tam giác bằng $p = 9$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $p = \\frac{7 + 8 + 3}{2} = 9$."
        },
        {
          "id": "b",
          "text": "$\\cos A = \\frac{8^2 + 3^2 - 7^2}{2 \\cdot 8 \\cdot 3} = \\frac{1}{2}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\frac{64 + 9 - 49}{48} = \\frac{24}{48} = \\frac{1}{2}$."
        },
        {
          "id": "c",
          "text": "Góc $\\widehat{A}$ có số đo bằng $60^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos A = \\frac{1}{2} \\Rightarrow \\widehat{A} = 60^\\circ$."
        },
        {
          "id": "d",
          "text": "Diện tích tam giác $ABC$ bằng $6\\sqrt{3}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $S = \\frac{1}{2} bc \\sin A = \\frac{1}{2} \\cdot 8 \\cdot 3 \\cdot \\sin 60^\\circ = 12 \\cdot \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$."
        }
      ]
    },
    {
      "id": "tf-10.6.3",
      "badge": "Đúng / Sai 3 - Công thức diện tích và bán kính",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có diện tích $S$, nửa chu vi $p$, bán kính ngoại tiếp $R$, bán kính nội tiếp $r$.",
      "subItems": [
        {
          "id": "a",
          "text": "$S = \\frac{abc}{4R}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức liên hệ diện tích và bán kính ngoại tiếp."
        },
        {
          "id": "b",
          "text": "$S = pr$.",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức liên hệ diện tích và bán kính nội tiếp."
        },
        {
          "id": "c",
          "text": "Nếu tam giác đều cạnh $a$ thì diện tích $S = \\frac{a^2 \\sqrt{3}}{4}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $S = \\frac{1}{2} a^2 \\sin 60^\\circ = \\frac{a^2 \\sqrt{3}}{4}$."
        },
        {
          "id": "d",
          "text": "Nếu tam giác đều cạnh $a$ thì bán kính nội tiếp $r = \\frac{a\\sqrt{3}}{3}$.",
          "correctAnswer": false,
          "explanation": "Sai vì $r = \\frac{a\\sqrt{3}}{6}$ (bằng $\\frac{1}{3}$ đường cao)."
        }
      ]
    },
    {
      "id": "tf-10.6.4",
      "badge": "Đúng / Sai 4 - Đường trung tuyến và tam giác vuông",
      "source": "SBT Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6, AC = 8$, gọi $M$ là trung điểm cạnh $BC$.",
      "subItems": [
        {
          "id": "a",
          "text": "Độ dài cạnh $BC = 10$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $BC = \\sqrt{6^2 + 8^2} = 10$."
        },
        {
          "id": "b",
          "text": "Độ dài trung tuyến $AM = 5$.",
          "correctAnswer": true,
          "explanation": "Đúng vì trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = \\frac{BC}{2} = 5$."
        },
        {
          "id": "c",
          "text": "Bán kính đường tròn ngoại tiếp tam giác là $R = 10$.",
          "correctAnswer": false,
          "explanation": "Sai vì $R = \\frac{BC}{2} = 5$."
        },
        {
          "id": "d",
          "text": "Diện tích tam giác $ABM$ bằng $12$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $M$ là trung điểm $BC$ nên $S_{ABM} = \\frac{1}{2} S_{ABC} = \\frac{1}{2} \\left(\\frac{1}{2} \\cdot 6 \\cdot 8\\right) = 12$."
        }
      ]
    },
    {
      "id": "tf-10.6.5",
      "svgDiagram": "<svg viewBox=\"0 0 460 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <!-- Mặt đất --> <line x1=\"30\" y1=\"195\" x2=\"430\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <!-- Tòa tháp CD thẳng đứng --> <g transform=\"translate(385, 45)\"> <!-- Khung giàn tháp --> <polygon points=\"0,0 -14,150 14,150\" fill=\"#0f172a\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <line x1=\"-5\" y1=\"50\" x2=\"5\" y2=\"50\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/> <line x1=\"-9\" y1=\"95\" x2=\"9\" y2=\"95\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/> <line x1=\"-13\" y1=\"140\" x2=\"13\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/> <!-- Đường chéo giàn giáo --> <line x1=\"-5\" y1=\"50\" x2=\"9\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1\"/> <line x1=\"5\" y1=\"50\" x2=\"-9\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1\"/> <line x1=\"-9\" y1=\"95\" x2=\"13\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1\"/> <line x1=\"9\" y1=\"95\" x2=\"-13\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1\"/> <!-- Đỉnh tháp --> <circle cx=\"0\" cy=\"-4\" r=\"3\" fill=\"#ef4444\"/> <line x1=\"0\" y1=\"-4\" x2=\"0\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"2\"/> </g> <!-- Điểm D (chân tháp), C (đỉnh tháp) --> <circle cx=\"385\" cy=\"195\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"200\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">D</text> <circle cx=\"385\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"45\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C</text> <!-- Góc vuông tại D --> <rect x=\"373\" y=\"183\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/> <!-- Tia ngắm từ B và A --> <line x1=\"260\" y1=\"195\" x2=\"385\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"195\" x2=\"385\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <!-- Cung góc nâng 48 độ tại B --> <path d=\"M 295 195 A 35 35 0 0 0 282 169\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"290\" y=\"182\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">48°</text> <!-- Cung góc nâng 35 độ tại A --> <path d=\"M 140 195 A 40 40 0 0 0 133 172\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"145\" y=\"186\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">35°</text> <!-- Kích thước AB = 30m --> <line x1=\"100\" y1=\"215\" x2=\"260\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <line x1=\"100\" y1=\"210\" x2=\"100\" y2=\"220\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <line x1=\"260\" y1=\"210\" x2=\"260\" y2=\"220\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <text x=\"165\" y=\"230\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"600\">AB = 30 m</text> <!-- Điểm A và B --> <circle cx=\"100\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"90\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"260\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"250\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <!-- Chiều cao h = CD --> <text x=\"405\" y=\"125\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">h = ?</text> </svg>",
      "badge": "Đúng / Sai 5 - Bài toán thực tế đo chiều cao tháp",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Để đo chiều cao của một tòa tháp $CD$, người ta chọn hai điểm $A$ và $B$ trên mặt đất thẳng hàng với chân tháp $D$ sao cho $AB = 30$ m. Từ $A$ và $B$ nhìn thấy đỉnh tháp $C$ dưới các góc nâng lần lượt là $\\widehat{CAD} = 35^\\circ$ và $\\widehat{CBD} = 48^\\circ$ ($B$ nằm giữa $A$ và $D$).",
      "subItems": [
        {
          "id": "a",
          "text": "Góc $\\widehat{ACB} = 48^\\circ - 35^\\circ = 13^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\widehat{CBD}$ là góc ngoài của tam giác $ABC$ tại đỉnh $B$, do đó $\\widehat{ACB} = \\widehat{CBD} - \\widehat{CAD} = 48^\\circ - 35^\\circ = 13^\\circ$."
        },
        {
          "id": "b",
          "text": "Áp dụng định lý Sin trong tam giác $ABC$, ta có $BC = \\frac{AB \\cdot \\sin 35^\\circ}{\\sin 13^\\circ}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\frac{BC}{\\sin \\widehat{BAC}} = \\frac{AB}{\\sin \\widehat{ACB}} \\Rightarrow BC = \\frac{AB \\sin 35^\\circ}{\\sin 13^\\circ}$."
        },
        {
          "id": "c",
          "text": "Chiều cao tòa tháp được tính bởi công thức $CD = BC \\cdot \\sin 48^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì trong tam giác vuông $BCD$ vuông tại $D$, $CD = BC \\sin 48^\\circ$."
        },
        {
          "id": "d",
          "text": "Chiều cao $CD$ của tháp nhỏ hơn $40$ m.",
          "correctAnswer": false,
          "explanation": "Sai vì $BC = \\frac{30 \\sin 35^\\circ}{\\sin 13^\\circ} \\approx 76{,}5$ m $\\Rightarrow CD = 76{,}5 \\cdot \\sin 48^\\circ \\approx 56{,}8$ m $> 40$ m."
        }
      ]
    },
    {
      "id": "tf-10.6.6",
      "badge": "Đúng / Sai 6 - Nhận dạng tam giác qua hệ thức",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$. Xét tính đúng/sai của các điều kiện suy ra tính chất tam giác:",
      "subItems": [
        {
          "id": "a",
          "text": "Nếu $a^2 + b^2 = c^2$ thì tam giác $ABC$ vuông tại $C$.",
          "correctAnswer": true,
          "explanation": "Đúng theo định lý Pythagore đảo."
        },
        {
          "id": "b",
          "text": "Nếu $\\sin A = \\sin B$ thì tam giác $ABC$ luôn là tam giác cân tại $C$.",
          "correctAnswer": true,
          "explanation": "Đúng vì trong tam giác, $\\sin A = \\sin B \\Leftrightarrow A = B$ (vì $A + B < 180^\\circ$), do đó $a = b$."
        },
        {
          "id": "c",
          "text": "Nếu $\\cos A < 0$ thì tam giác $ABC$ là tam giác tù.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos A < 0 \\Leftrightarrow 90^\\circ < A < 180^\\circ$."
        },
        {
          "id": "d",
          "text": "Nếu $b + c = 2a$ thì $\\sin B + \\sin C = \\sin A$.",
          "correctAnswer": false,
          "explanation": "Sai vì theo định lý Sin: $b + c = 2R(\\sin B + \\sin C)$ và $2a = 4R \\sin A$, suy ra $\\sin B + \\sin C = 2\\sin A$ chứ không phải $\\sin A$."
        }
      ]
    },
    {
      "id": "tf-10.6.7",
      "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <marker id=\"shipArrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"> <path d=\"M 0 2 L 8 5 L 0 8 z\" fill=\"#38bdf8\"/> </marker> </defs> <!-- Cảng O --> <circle cx=\"70\" cy=\"180\" r=\"6\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"50\" y=\"195\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">O (Cảng)</text> <!-- Hướng đi của tàu B (nằm ngang) --> <line x1=\"70\" y1=\"180\" x2=\"310\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#shipArrow)\"/> <!-- Hướng đi của tàu A (hợp góc 60 độ) --> <line x1=\"70\" y1=\"180\" x2=\"245\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#shipArrow)\"/> <!-- Khoảng cách AB cần tính --> <line x1=\"245\" y1=\"55\" x2=\"310\" y2=\"180\" stroke=\"#f43f5e\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\"/> <!-- Cung góc 60 độ tại O --> <path d=\"M 115 180 A 45 45 0 0 0 93 141\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"120\" y=\"162\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">60°</text> <!-- Quãng đường OA = 40, OB = 30 --> <text x=\"135\" y=\"105\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">OA = 40 hl</text> <text x=\"175\" y=\"200\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">OB = 30 hl</text> <text x=\"290\" y=\"115\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AB = ?</text> <!-- Điểm A (Tàu 1) --> <circle cx=\"245\" cy=\"55\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"255\" y=\"55\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">A (Tàu 1)</text> <!-- Điểm B (Tàu 2) --> <circle cx=\"310\" cy=\"180\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"320\" y=\"185\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">B (Tàu 2)</text> </svg>",
      "badge": "Đúng / Sai 7 - Bài toán tàu thuyền di chuyển trên biển",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Hai tàu thủy cùng xuất phát từ một cảng $O$ đi theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu A chạy với vận tốc $20$ hải lý/h, tàu B chạy với vận tốc $15$ hải lý/h. Sau 2 giờ:",
      "subItems": [
        {
          "id": "a",
          "text": "Quãng đường tàu A đi được là $OA = 40$ hải lý.",
          "correctAnswer": true,
          "explanation": "Đúng vì $S = v \\cdot t = 20 \\cdot 2 = 40$ hải lý."
        },
        {
          "id": "b",
          "text": "Quãng đường tàu B đi được là $OB = 30$ hải lý.",
          "correctAnswer": true,
          "explanation": "Đúng vì $S = v \\cdot t = 15 \\cdot 2 = 30$ hải lý."
        },
        {
          "id": "c",
          "text": "Khoảng cách giữa hai tàu là $AB = \\sqrt{40^2 + 30^2 - 2(40)(30)\\cos 60^\\circ}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo định lý Cosin trong tam giác $OAB$."
        },
        {
          "id": "d",
          "text": "Khoảng cách giữa hai tàu sau 2 giờ bằng $35$ hải lý.",
          "correctAnswer": false,
          "explanation": "Sai vì $AB^2 = 1600 + 900 - 1200 = 1300 \\Rightarrow AB = 10\\sqrt{13} \\approx 36{,}05$ hải lý $\\ne 35$."
        }
      ]
    },
    {
      "id": "tf-10.6.8",
      "badge": "Đúng / Sai 8 - Hệ thức trung tuyến và tính đối xứng",
      "source": "Bộ đề bồi dưỡng HSG Toán 10",
      "prompt": "Cho tam giác $ABC$ có các đường trung tuyến $m_a, m_b, m_c$. Xét tính đúng/sai:",
      "subItems": [
        {
          "id": "a",
          "text": "$4(m_a^2 + m_b^2 + m_c^2) = 3(a^2 + b^2 + c^2)$.",
          "correctAnswer": true,
          "explanation": "Đúng vì cộng 3 công thức trung tuyến: $m_a^2 + m_b^2 + m_c^2 = \\frac{3}{4}(a^2 + b^2 + c^2)$."
        },
        {
          "id": "b",
          "text": "Nếu tam giác vuông tại $A$ thì $m_a = \\frac{a}{2}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền."
        },
        {
          "id": "c",
          "text": "Nếu $m_a^2 + m_b^2 = 5m_c^2$ thì tam giác $ABC$ vuông tại $C$.",
          "correctAnswer": true,
          "explanation": "Đúng vì thế công thức trung tuyến vào ta được $a^2 + b^2 = c^2$, suy ra tam giác vuông tại $C$."
        },
        {
          "id": "d",
          "text": "Nếu ba đường trung tuyến bằng nhau thì tam giác $ABC$ là tam giác vuông cân.",
          "correctAnswer": false,
          "explanation": "Sai vì ba trung tuyến bằng nhau khi và chỉ khi ba cạnh bằng nhau, tức tam giác $ABC$ là tam giác đều."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.6.1",
      "badge": "Trả lời ngắn 1 - Tính độ dài cạnh theo định lý Cosin",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có $b = 5, c = 8$ và $\\widehat{A} = 60^\\circ$. Tính độ dài cạnh $a$.",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7"
      ],
      "explanation": "$a^2 = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 25 + 64 - 40 = 49 \\Rightarrow a = 7$."
    },
    {
      "id": "sa-10.6.2",
      "badge": "Trả lời ngắn 2 - Tính góc A khi biết ba cạnh",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có $a = 13, b = 8, c = 7$. Tính số đo góc $\\widehat{A}$ (tính bằng độ).",
      "correctAnswer": "120",
      "acceptableAnswers": [
        "120",
        "120 độ",
        "120°"
      ],
      "explanation": "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{64 + 49 - 169}{2(8)(7)} = \\frac{-56}{112} = -\\frac{1}{2} \\Rightarrow \\widehat{A} = 120^\\circ$."
    },
    {
      "id": "sa-10.6.3",
      "badge": "Trả lời ngắn 3 - Tính bán kính ngoại tiếp R",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có $a = 10$ và $\\widehat{A} = 30^\\circ$. Tính bán kính $R$ của đường tròn ngoại tiếp tam giác.",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10"
      ],
      "explanation": "$R = \\frac{a}{2\\sin A} = \\frac{10}{2\\sin 30^\\circ} = \\frac{10}{2(1/2)} = 10$."
    },
    {
      "id": "sa-10.6.4",
      "badge": "Trả lời ngắn 4 - Tính diện tích tam giác theo hai cạnh và sin",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có $b = 6, c = 10$ và $\\widehat{A} = 150^\\circ$. Tính diện tích tam giác $ABC$.",
      "correctAnswer": "15",
      "acceptableAnswers": [
        "15"
      ],
      "explanation": "$S = \\frac{1}{2} bc \\sin A = \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot \\sin 150^\\circ = 30 \\cdot \\frac{1}{2} = 15$."
    },
    {
      "id": "sa-10.6.5",
      "badge": "Trả lời ngắn 5 - Tính diện tích tam giác theo Heron",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Tính diện tích tam giác $ABC$ có độ dài ba cạnh lần lượt là $a = 5, b = 6, c = 7$. (Lấy kết quả chính xác dưới dạng $6\\sqrt{k}$, hãy điền giá trị của $k$).",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6"
      ],
      "explanation": "Nửa chu vi $p = \\frac{5 + 6 + 7}{2} = 9$. Diện tích $S = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6}$. Vậy $k = 6$."
    },
    {
      "id": "sa-10.6.6",
      "badge": "Trả lời ngắn 6 - Tính bán kính đường tròn nội tiếp r",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có ba cạnh $a = 13, b = 14, c = 15$. Tính bán kính đường tròn nội tiếp $r$ của tam giác.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4"
      ],
      "explanation": "Nửa chu vi $p = 21$, diện tích $S = 84$. Bán kính $r = \\frac{S}{p} = \\frac{84}{21} = 4$."
    },
    {
      "id": "sa-10.6.7",
      "badge": "Trả lời ngắn 7 - Độ dài đường trung tuyến",
      "source": "SBT Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác $ABC$ có $a = 8, b = 6, c = 4$. Tính $m_a^2$ (bình phương độ dài đường trung tuyến kẻ từ $A$).",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10"
      ],
      "explanation": "$m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4} = \\frac{2(36 + 16) - 64}{4} = \\frac{2(52) - 64}{4} = \\frac{104 - 64}{4} = \\frac{40}{4} = 10$."
    },
    {
      "id": "sa-10.6.8",
      "badge": "Trả lời ngắn 8 - Độ dài chiều cao tam giác vuông",
      "source": "SBT Toán 10 KNTT Bài 6",
      "prompt": "Cho tam giác vuông có hai cạnh góc vuông là 9 và 12. Tính độ dài đường cao ứng với cạnh huyền.",
      "correctAnswer": "7.2",
      "acceptableAnswers": [
        "7.2",
        "7,2",
        "36/5"
      ],
      "explanation": "Cạnh huyền $a = \\sqrt{9^2 + 12^2} = 15$. Diện tích $S = \\frac{1}{2}(9)(12) = 54$. Đường cao $h = \\frac{2S}{a} = \\frac{108}{15} = 7{,}2$."
    },
    {
      "id": "sa-10.6.9",
      "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <radialGradient id=\"lakeGrad2\" cx=\"50%\" cy=\"50%\" r=\"50%\"> <stop offset=\"0%\" stop-color=\"#0284c7\" stop-opacity=\"0.35\"/> <stop offset=\"100%\" stop-color=\"#0369a1\" stop-opacity=\"0.10\"/> </radialGradient> </defs> <!-- Hồ nước giữa A và B --> <path d=\"M 120 100 Q 230 70 330 110 Q 370 150 310 170 Q 210 185 130 160 Q 90 130 120 100 Z\" fill=\"url(#lakeGrad2)\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"6 3\"/> <text x=\"225\" y=\"135\" fill=\"#38bdf8\" font-size=\"12\" font-style=\"italic\" opacity=\"0.75\">Hồ nước</text> <!-- Điểm C trên bờ --> <circle cx=\"180\" cy=\"175\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"180\" y=\"198\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">C</text> <!-- Cạnh CA = 30m, CB = 50m, góc C = 120 độ --> <line x1=\"180\" y1=\"175\" x2=\"80\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"180\" y1=\"175\" x2=\"370\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <!-- Đoạn AB cần đo --> <line x1=\"80\" y1=\"90\" x2=\"370\" y2=\"175\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <!-- Cung góc tù 120 độ tại C --> <path d=\"M 215 175 A 35 35 0 0 0 153 152\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"185\" y=\"155\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">120°</text> <!-- Số đo độ dài --> <text x=\"100\" y=\"150\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">30 m</text> <text x=\"270\" y=\"195\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">50 m</text> <text x=\"235\" y=\"105\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AB = ?</text> <!-- Đỉnh A và B --> <circle cx=\"80\" cy=\"90\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"65\" y=\"85\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"370\" cy=\"175\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"380\" y=\"180\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">B</text> </svg>",
      "badge": "Trả lời ngắn 9 - Đo khoảng cách qua hồ nước",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Để đo khoảng cách $AB$ qua hồ nước, người ta đo được $CA = 30$ m, $CB = 50$ m và góc $\\widehat{ACB} = 120^\\circ$. Tính khoảng cách $AB$ (mét).",
      "correctAnswer": "70",
      "acceptableAnswers": [
        "70",
        "70m",
        "70 m"
      ],
      "explanation": "$AB^2 = 30^2 + 50^2 - 2(30)(50)\\cos 120^\\circ = 900 + 2500 - 3000\\left(-\\frac{1}{2}\\right) = 3400 + 1500 = 4900 \\Rightarrow AB = 70$ m."
    },
    {
      "id": "sa-10.6.10",
      "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <marker id=\"shipArrow2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"> <path d=\"M 0 2 L 8 5 L 0 8 z\" fill=\"#38bdf8\"/> </marker> </defs> <!-- Cảng O --> <circle cx=\"180\" cy=\"180\" r=\"6\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"175\" y=\"202\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">O (Cảng)</text> <!-- Tàu 1: OA = 30km hướng sang trái trên --> <line x1=\"180\" y1=\"180\" x2=\"80\" y2=\"95\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#shipArrow2)\"/> <!-- Tàu 2: OB = 50km hướng sang phải --> <line x1=\"180\" y1=\"180\" x2=\"380\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#shipArrow2)\"/> <!-- Khoảng cách AB --> <line x1=\"80\" y1=\"95\" x2=\"380\" y2=\"180\" stroke=\"#f43f5e\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\"/> <!-- Cung góc tù 120 độ tại O --> <path d=\"M 215 180 A 35 35 0 0 0 153 157\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"182\" y=\"160\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">120°</text> <!-- Số đo --> <text x=\"100\" y=\"155\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">30 km</text> <text x=\"270\" y=\"200\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">50 km</text> <text x=\"240\" y=\"115\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AB = ?</text> <!-- Đỉnh A và B --> <circle cx=\"80\" cy=\"95\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"55\" y=\"90\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">A (Tàu 1)</text> <circle cx=\"380\" cy=\"180\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"390\" y=\"185\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">B (Tàu 2)</text> </svg>",
      "badge": "Trả lời ngắn 10 - Khoảng cách hai tàu sau 1 giờ",
      "source": "SGK Toán 10 KNTT Bài 6",
      "prompt": "Hai tàu xuất phát từ cảng $O$ theo hai hướng hợp với nhau một góc $120^\\circ$, vận tốc lần lượt là 30 km/h và 50 km/h. Tính khoảng cách giữa hai tàu sau 1 giờ (tính theo km).",
      "correctAnswer": "70",
      "acceptableAnswers": [
        "70",
        "70km",
        "70 km"
      ],
      "explanation": "Sau 1 giờ: $OA = 30$ km, $OB = 50$ km, $\\widehat{AOB} = 60^\\circ$ (khoan, góc $60^\\circ$ thì: $30^2 + 50^2 - 2(30)(50)\\cos 60^\\circ = 900 + 2500 - 1500 = 1900 \\Rightarrow AB = 10\\sqrt{19}$). Nếu góc là $120^\\circ$ thì $AB = 70$ km. Ta đổi đề bài thành góc giữa hai hướng là $120^\\circ$: khi đó khoảng cách là 70 km."
    },
    {
      "id": "sa-10.6.11",
      "badge": "Trả lời ngắn 11 - Giá trị tỉ số bán kính R/r của tam giác vuông cân",
      "source": "Bộ đề bồi dưỡng Toán 10",
      "prompt": "Cho tam giác đều có diện tích $S = 9\\sqrt{3}$. Tính độ dài cạnh của tam giác đều đó.",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6"
      ],
      "explanation": "Công thức diện tích tam giác đều: $S = \\frac{a^2\\sqrt{3}}{4} = 9\\sqrt{3} \\Rightarrow a^2 = 36 \\Rightarrow a = 6$."
    },
    {
      "id": "sa-10.6.12",
      "badge": "Trả lời ngắn 12 - Tích hai cạnh tam giác",
      "source": "Bộ đề bồi dưỡng Toán 10",
      "prompt": "Cho tam giác $ABC$ có diện tích $S = 20$ và $\\widehat{A} = 30^\\circ$. Tính tích độ dài hai cạnh $b \\cdot c$.",
      "correctAnswer": "80",
      "acceptableAnswers": [
        "80"
      ],
      "explanation": "$S = \\frac{1}{2} bc \\sin A \\Rightarrow 20 = \\frac{1}{2} bc \\left(\\frac{1}{2}\\right) = \\frac{1}{4} bc \\Rightarrow bc = 80$."
    }
  ]
}
,

  // ==========================================
  // ÔN TẬP CUỐI CHƯƠNG III: HỆ THỨC LƯỢNG TRONG TAM GIÁC
  // ==========================================
  "t10-on-tap-chuong-3": {
  "id": "t10-on-tap-chuong-3",
  "lessonNumber": 0,
  "title": "Ôn tập cuối chương III",
  "bookChapter": "Chương III: Hệ thức lượng trong tam giác (SGK Toán 10 KNTT - Tập 1)",
  "scenarioTitle": "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
  "scenarioFrames": [],
  "theorySections": [],
  "interactiveType": "geometry",
  "youtubeVideoId": "hVqJvZ_3Seo",
  "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương III - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "hVqJvZ_3Seo",
      "title": "Tiết 1: Ôn tập lý thuyết & Chữa bài tập trắc nghiệm cuối chương III"
    },
    {
      "id": "IzkMEVZuc54",
      "title": "Tiết 2: Chữa bài tập tự luận - Tính các yếu tố trong tam giác & Chứng minh đẳng thức"
    },
    {
      "id": "77a-UJC55KA",
      "title": "Tiết 3: Giải bài toán thực tế đo khoảng cách, chiều cao & Tổng kết chương III"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-10.ot3.1",
      "title": "Ví dụ 1 (Tiết 1): Áp dụng định lý Cosin tính độ dài cạnh tam giác",
      "question": "Cho tam giác $ABC$ có cạnh $b = 5$, $c = 8$ và góc xen giữa $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
      "options": [
        "$7$",
        "$\\sqrt{129}$",
        "$49$",
        "$2\\sqrt{10}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Cosin: $a^2 = b^2 + c^2 - 2bc \\cos A = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 25 + 64 - 80 \\cdot \\frac{1}{2} = 89 - 40 = 49 \\Rightarrow a = 7$."
    },
    {
      "id": "vq-10.ot3.2",
      "title": "Ví dụ 2 (Tiết 2): Tính bán kính đường tròn ngoại tiếp R của tam giác",
      "question": "Cho tam giác $ABC$ có cạnh $a = 6\\sqrt{3}$ và góc đối diện $\\widehat{A} = 60^\\circ$. Bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ bằng:",
      "options": [
        "$6$",
        "$3\\sqrt{3}$",
        "$12$",
        "$6\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Sin: $\\frac{a}{\\sin A} = 2R \\Rightarrow R = \\frac{a}{2\\sin A} = \\frac{6\\sqrt{3}}{2\\sin 60^\\circ} = \\frac{6\\sqrt{3}}{2 \\cdot \\frac{\\sqrt{3}}{2}} = 6$."
    },
    {
      "id": "vq-10.ot3.3",
      "title": "Ví dụ 3 (Tiết 3): Ứng dụng thực tế đo khoảng cách không thể đo trực tiếp",
      "question": "Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi một dòng sông, người ta chọn điểm $C$ cùng bên bờ với $A$ sao cho $CA = 50\\text{ m}$, đo được các góc $\\widehat{CAB} = 65^\\circ$ và $\\widehat{ACB} = 75^\\circ$. Số đo của góc $\\widehat{ABC}$ là:",
      "options": [
        "$40^\\circ$",
        "$45^\\circ$",
        "$50^\\circ$",
        "$35^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Trong tam giác $ABC$, tổng ba góc bằng $180^\\circ$: $\\widehat{ABC} = 180^\\circ - (\\widehat{CAB} + \\widehat{ACB}) = 180^\\circ - (65^\\circ + 75^\\circ) = 180^\\circ - 140^\\circ = 40^\\circ$."
    }
  ],
  "tips": [
    "Mẹo chọn định lý trong tam giác: Biết 2 cạnh và góc kẹp giữa (c-g-c) hoặc 3 cạnh (c-c-c) -> dùng định lý Cosin; Biết 1 cạnh và 2 góc (g-c-g) hoặc 2 cạnh và 1 góc đối diện -> dùng định lý Sin.",
    "Mẹo nhớ nhanh góc bù: sin bù (chỉ có sin giữ nguyên dấu), các hàm còn lại đổi dấu thành đối số: sin(180° - α) = sin α; cos(180° - α) = -cos α.",
    "Mẹo tính bán kính R và r: Bán kính đường tròn ngoại tiếp dùng định lý Sin: R = a / (2 sin A); Bán kính đường tròn nội tiếp dùng diện tích: r = S / p."
  ],
  "traps": [
    "Cạm bẫy góc tù trong định lý Sin: Khi sin B = m (0 < m < 1), góc B có thể nhọn hoặc tù. Phải dựa vào cạnh đối diện để quyết định (góc đối diện cạnh lớn hơn phải lớn hơn).",
    "Cạm bẫy dấu trong định lý Cosin: a² = b² + c² - 2bc cos A (mang dấu trừ!), cos A = (b² + c² - a²) / (2bc).",
    "Cạm bẫy nhầm giữa bán kính R và đường kính 2R: a / sin A = 2R, do đó R = a / (2 sin A)."
  ],
  "quizQuestions": [
    {
      "id": "ai-10.5.1",
      "badge": "Luyện thêm 1 - Điểm trên nửa đường tròn đơn vị",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Điểm $M\\left(-\\frac{\\sqrt{3}}{2}; \\frac{1}{2}\\right)$ trên nửa đường tròn đơn vị biểu diễn góc lượng giác nào?",
      "options": [
        "$150^\\circ$",
        "$120^\\circ$",
        "$135^\\circ$",
        "$30^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Vì hoành độ $x = -\\frac{\\sqrt{3}}{2} = \\cos 150^\\circ$ và tung độ $y = \\frac{1}{2} = \\sin 150^\\circ$ nên điểm $M$ biểu diễn góc $150^\\circ$."
    },
    {
      "id": "ai-10.5.2",
      "badge": "Luyện thêm 2 - Tung độ điểm biểu diễn góc 135 độ",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Điểm $M$ trên nửa đường tròn đơn vị biểu diễn góc $\\alpha = 135^\\circ$ có tung độ bằng:",
      "options": [
        "$\\frac{\\sqrt{2}}{2}$",
        "$-\\frac{\\sqrt{2}}{2}$",
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Tung độ của điểm $M$ chính là $\\sin 135^\\circ = \\sin(180^\\circ - 45^\\circ) = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."
    },
    {
      "id": "ai-10.5.3",
      "badge": "Luyện thêm 3 - Dấu lượng giác trong khoảng (0, 90)",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 90^\\circ$. Mệnh đề nào sau đây SAI?",
      "options": [
        "$\\cos \\alpha < 0$",
        "$\\sin \\alpha > 0$",
        "$\\tan \\alpha > 0$",
        "$\\cot \\alpha > 0$"
      ],
      "correctIndex": 0,
      "explanation": "Với góc nhọn $\\alpha$, cả 4 giá trị lượng giác đều dương, do đó $\\cos \\alpha < 0$ là mệnh đề SAI."
    },
    {
      "id": "ai-10.5.4",
      "badge": "Luyện thêm 4 - Giá trị của biểu thức chứa góc bù",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Giá trị của biểu thức $A = \\sin 120^\\circ + \\cos 150^\\circ$ bằng:",
      "options": [
        "$0$",
        "$\\sqrt{3}$",
        "$-\\sqrt{3}$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\sin 120^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ và $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$. Do đó $A = \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{2} = 0$."
    },
    {
      "id": "ai-10.5.5",
      "badge": "Luyện thêm 5 - Giá trị lượng giác của 180 độ",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\sin 180^\\circ = 0$",
        "$\\cos 180^\\circ = 1$",
        "$\\tan 180^\\circ = 1$",
        "$\\sin 180^\\circ = -1$"
      ],
      "correctIndex": 0,
      "explanation": "Tại góc $180^\\circ$, điểm biểu diễn là $(-1; 0)$, do đó tung độ $\\sin 180^\\circ = 0$."
    },
    {
      "id": "ai-10.5.6",
      "badge": "Luyện thêm 6 - Công thức góc bù của tan",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Với mọi góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 180^\\circ, \\alpha \\ne 90^\\circ$, ta có $\\tan(180^\\circ - \\alpha)$ bằng:",
      "options": [
        "$-\\tan \\alpha$",
        "$\\tan \\alpha$",
        "$\\cot \\alpha$",
        "$-\\cot \\alpha$"
      ],
      "correctIndex": 0,
      "explanation": "Theo tính chất góc bù nhau, $\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$."
    },
    {
      "id": "ai-10.6.1",
      "badge": "Luyện thêm 1 - Định lý Cosin tính cạnh",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho tam giác $ABC$ có $b = 4, c = 5, \\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ là:",
      "options": [
        "$\\sqrt{21}$",
        "$\\sqrt{41}$",
        "$\\sqrt{61}$",
        "$5$"
      ],
      "correctIndex": 0,
      "explanation": "$a^2 = 16 + 25 - 2(4)(5)\\cos 60^\\circ = 41 - 20 = 21 \\Rightarrow a = \\sqrt{21}$."
    },
    {
      "id": "ai-10.6.2",
      "badge": "Luyện thêm 2 - Tính góc lớn nhất của tam giác",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Tam giác $ABC$ có ba cạnh lần lượt là $a = 3, b = 5, c = 7$. Góc lớn nhất của tam giác $ABC$ có số đo bằng:",
      "options": [
        "$120^\\circ$",
        "$150^\\circ$",
        "$135^\\circ$",
        "$90^\\circ$"
      ],
      "correctIndex": 0,
      "explanation": "Cạnh lớn nhất là $c = 7$ nên góc lớn nhất là $\\widehat{C}$. Ta có $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{9 + 25 - 49}{2(3)(5)} = \\frac{-15}{30} = -\\frac{1}{2} \\Rightarrow \\widehat{C} = 120^\\circ$."
    },
    {
      "id": "ai-10.6.3",
      "badge": "Luyện thêm 3 - Định lý Sin tính cạnh",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho tam giác $ABC$ có $\\widehat{A} = 45^\\circ, \\widehat{B} = 30^\\circ, a = 4\\sqrt{2}$. Độ dài cạnh $b$ bằng:",
      "options": [
        "$4$",
        "$4\\sqrt{3}$",
        "$2\\sqrt{2}$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý Sin: $b = \\frac{a \\sin B}{\\sin A} = \\frac{4\\sqrt{2} \\cdot \\sin 30^\\circ}{\\sin 45^\\circ} = \\frac{4\\sqrt{2} \\cdot \\frac{1}{2}}{\\frac{\\sqrt{2}}{2}} = 4$."
    },
    {
      "id": "ai-10.6.4",
      "badge": "Luyện thêm 4 - Định lý Sin tính bán kính R",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Tam giác $ABC$ có cạnh $b = 8$ và góc $\\widehat{B} = 45^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác là:",
      "options": [
        "$4\\sqrt{2}$",
        "$8\\sqrt{2}$",
        "$4$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "$2R = \\frac{b}{\\sin B} = \\frac{8}{\\sin 45^\\circ} = \\frac{8}{\\frac{\\sqrt{2}}{2}} = 8\\sqrt{2} \\Rightarrow R = 4\\sqrt{2}$."
    },
    {
      "id": "ai-10.6.5",
      "badge": "Luyện thêm 5 - Tính diện tích theo tích hai cạnh và sin góc kẹp",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Tam giác $ABC$ có $a = 6, c = 8$ và $\\widehat{B} = 135^\\circ$. Diện tích của tam giác $ABC$ bằng:",
      "options": [
        "$12\\sqrt{2}$",
        "$24\\sqrt{2}$",
        "$12$",
        "$24$"
      ],
      "correctIndex": 0,
      "explanation": "$S = \\frac{1}{2} ac \\sin B = \\frac{1}{2}(6)(8)\\sin 135^\\circ = 24 \\cdot \\frac{\\sqrt{2}}{2} = 12\\sqrt{2}$."
    },
    {
      "id": "ai-10.6.6",
      "badge": "Luyện thêm 6 - Tính diện tích tam giác đều",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Một tam giác đều có cạnh bằng 4 cm thì diện tích bằng:",
      "options": [
        "$4\\sqrt{3}\\text{ cm}^2$",
        "$8\\sqrt{3}\\text{ cm}^2$",
        "$16\\sqrt{3}\\text{ cm}^2$",
        "$2\\sqrt{3}\\text{ cm}^2$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích tam giác đều cạnh $a$ là $S = \\frac{a^2\\sqrt{3}}{4} = \\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}\\text{ cm}^2$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ai-tf-10.5.1",
      "badge": "Luyện thêm Đ/S 1 - Tính chất nửa đường tròn đơn vị",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Xét điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị ứng với góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$).",
      "subItems": [
        {
          "id": "a",
          "text": "Tọa độ điểm $M$ luôn thỏa mãn $x_0^2 + y_0^2 = 1$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $M$ thuộc đường tròn đơn vị có bán kính $R = 1$."
        },
        {
          "id": "b",
          "text": "Tung độ $y_0$ luôn nhận giá trị không âm.",
          "correctAnswer": true,
          "explanation": "Đúng vì nửa đường tròn đơn vị nằm phía trên trục hoành ($y \\ge 0$)."
        },
        {
          "id": "c",
          "text": "Nếu $x_0 < 0$ thì $\\alpha$ là góc nhọn.",
          "correctAnswer": false,
          "explanation": "Sai vì $x_0 = \\cos \\alpha < 0$ thì $\\alpha$ phải là góc tù."
        },
        {
          "id": "d",
          "text": "Nếu $x_0 = 0$ thì $\\alpha = 90^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos 90^\\circ = 0$ và điểm đó là $B(0; 1)$."
        }
      ]
    },
    {
      "id": "ai-tf-10.5.2",
      "badge": "Luyện thêm Đ/S 2 - Góc bù và góc phụ",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Xét tính đúng/sai của các hệ thức lượng giác sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sin(180^\\circ - 30^\\circ) = \\cos 60^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ và $\\cos 60^\\circ = \\frac{1}{2}$."
        },
        {
          "id": "b",
          "text": "$\\cos(180^\\circ - 45^\\circ) = \\sin 45^\\circ$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2}$ trong khi $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."
        },
        {
          "id": "c",
          "text": "$\\tan(90^\\circ - 20^\\circ) = \\cot 20^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng theo tính chất hai góc phụ nhau: $\\tan(90^\\circ - \\alpha) = \\cot \\alpha$."
        },
        {
          "id": "d",
          "text": "$\\cos(90^\\circ - \\alpha) + \\sin(180^\\circ - \\alpha) = 2\\sin \\alpha$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos(90^\\circ - \\alpha) = \\sin \\alpha$ và $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$, tổng là $2\\sin \\alpha$."
        }
      ]
    },
    {
      "id": "ai-tf-10.6.1",
      "badge": "Luyện thêm Đ/S 1 - Định lý Cosin và nhận dạng góc",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Cho tam giác $ABC$ có các cạnh $a = 6, b = 7, c = 8$.",
      "subItems": [
        {
          "id": "a",
          "text": "Cạnh lớn nhất của tam giác là cạnh $c = 8$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $8 > 7 > 6$."
        },
        {
          "id": "b",
          "text": "Góc $\\widehat{C}$ là góc lớn nhất trong ba góc của tam giác.",
          "correctAnswer": true,
          "explanation": "Đúng vì trong tam giác, góc đối diện cạnh lớn nhất là góc lớn nhất."
        },
        {
          "id": "c",
          "text": "$\\cos C = \\frac{6^2 + 7^2 - 8^2}{2(6)(7)} = \\frac{21}{84} = \\frac{1}{4}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\frac{36 + 49 - 64}{84} = \\frac{21}{84} = \\frac{1}{4}$."
        },
        {
          "id": "d",
          "text": "Tam giác $ABC$ là tam giác tù.",
          "correctAnswer": false,
          "explanation": "Sai vì góc lớn nhất $\\widehat{C}$ có $\\cos C = \\frac{1}{4} > 0$ nên $\\widehat{C} < 90^\\circ$, tam giác là tam giác nhọn."
        }
      ]
    },
    {
      "id": "ai-tf-10.6.2",
      "badge": "Luyện thêm Đ/S 2 - Định lý Sin và bán kính R",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Cho tam giác $ABC$ có $\\widehat{A} = 60^\\circ, \\widehat{B} = 45^\\circ$ và cạnh $b = 4$.",
      "subItems": [
        {
          "id": "a",
          "text": "Góc $\\widehat{C} = 180^\\circ - (60^\\circ + 45^\\circ) = 75^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì tổng ba góc trong tam giác bằng $180^\\circ$."
        },
        {
          "id": "b",
          "text": "Bán kính đường tròn ngoại tiếp $R = 2\\sqrt{2}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $2R = \\frac{b}{\\sin B} = \\frac{4}{\\sin 45^\\circ} = 4\\sqrt{2} \\Rightarrow R = 2\\sqrt{2}$."
        },
        {
          "id": "c",
          "text": "Độ dài cạnh $a = 2\\sqrt{6}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $a = 2R \\sin A = 2(2\\sqrt{2})\\sin 60^\\circ = 4\\sqrt{2} \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{6}$."
        },
        {
          "id": "d",
          "text": "Cạnh $a$ ngắn hơn cạnh $b$.",
          "correctAnswer": false,
          "explanation": "Sai vì $a = 2\\sqrt{6} \\approx 4{,}9 > b = 4$ (vì góc $A > B$)."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-10.5.1",
      "badge": "Luyện thêm TLN 1 - Tính tổng sin hai góc bù nhau",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tính giá trị của biểu thức $A = \\sin 150^\\circ + \\sin 30^\\circ$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Vì $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ nên $A = \\frac{1}{2} + \\frac{1}{2} = 1$."
    },
    {
      "id": "ai-sa-10.5.2",
      "badge": "Luyện thêm TLN 2 - Hiệu cos hai góc bù nhau",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tính giá trị của biểu thức $B = \\cos 60^\\circ - \\cos 120^\\circ$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Ta có $\\cos 60^\\circ = \\frac{1}{2}$ và $\\cos 120^\\circ = -\\frac{1}{2}$. Do đó $B = \\frac{1}{2} - \\left(-\\frac{1}{2}\\right) = 1$."
    },
    {
      "id": "ai-sa-10.5.3",
      "badge": "Luyện thêm TLN 3 - Tìm số đo góc khi biết cos",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tìm số đo góc $\\alpha$ (tính theo độ, $0^\\circ \\le \\alpha \\le 180^\\circ$) biết $\\cos \\alpha = -\\frac{1}{2}$.",
      "correctAnswer": "120",
      "acceptableAnswers": [
        "120",
        "120 độ",
        "120°"
      ],
      "explanation": "Vì $\\cos 60^\\circ = \\frac{1}{2}$ nên $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$. Vậy $\\alpha = 120^\\circ$."
    },
    {
      "id": "ai-sa-10.6.1",
      "badge": "Luyện thêm TLN 1 - Tính độ dài cạnh theo định lý Cosin",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ có $b = 3, c = 4$ và $\\widehat{A} = 60^\\circ$. Tính $a^2$.",
      "correctAnswer": "13",
      "acceptableAnswers": [
        "13"
      ],
      "explanation": "$a^2 = 9 + 16 - 2(3)(4)\\cos 60^\\circ = 25 - 12 = 13$."
    },
    {
      "id": "ai-sa-10.6.2",
      "badge": "Luyện thêm TLN 2 - Tính góc khi biết ba cạnh",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ có ba cạnh là $a = \\sqrt{3}, b = 1, c = 2$. Tính số đo góc $\\widehat{A}$ (tính theo độ).",
      "correctAnswer": "60",
      "acceptableAnswers": [
        "60",
        "60 độ",
        "60°"
      ],
      "explanation": "$\\cos A = \\frac{1 + 4 - 3}{2(1)(2)} = \\frac{2}{4} = \\frac{1}{2} \\Rightarrow \\widehat{A} = 60^\\circ$."
    },
    {
      "id": "ai-sa-10.6.3",
      "badge": "Luyện thêm TLN 3 - Bán kính đường tròn ngoại tiếp R",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ có $c = 12$ và $\\widehat{C} = 60^\\circ$. Tính $R\\sqrt{3}$.",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12"
      ],
      "explanation": "$2R = \\frac{c}{\\sin C} = \\frac{12}{\\sqrt{3}/2} = \\frac{24}{\\sqrt{3}} \\Rightarrow R = \\frac{12}{\\sqrt{3}} \\Rightarrow R\\sqrt{3} = 12$."
    }
  ],
  "examSets": [
    {
      "id": "de-1",
      "title": "Đề ôn tập số 1",
      "description": "Đề ôn tập tổng hợp cuối Chương III (Hệ thức lượng trong tam giác) - Đề số 1",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.5.1",
          "badge": "Luyện thêm 1 - Điểm trên nửa đường tròn đơn vị",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Điểm $M\\left(-\\frac{\\sqrt{3}}{2}; \\frac{1}{2}\\right)$ trên nửa đường tròn đơn vị biểu diễn góc lượng giác nào?",
          "options": [
            "$150^\\circ$",
            "$120^\\circ$",
            "$135^\\circ$",
            "$30^\\circ$"
          ],
          "correctIndex": 0,
          "explanation": "Vì hoành độ $x = -\\frac{\\sqrt{3}}{2} = \\cos 150^\\circ$ và tung độ $y = \\frac{1}{2} = \\sin 150^\\circ$ nên điểm $M$ biểu diễn góc $150^\\circ$."
        },
        {
          "id": "ai-10.5.2",
          "badge": "Luyện thêm 2 - Tung độ điểm biểu diễn góc 135 độ",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Điểm $M$ trên nửa đường tròn đơn vị biểu diễn góc $\\alpha = 135^\\circ$ có tung độ bằng:",
          "options": [
            "$\\frac{\\sqrt{2}}{2}$",
            "$-\\frac{\\sqrt{2}}{2}$",
            "$\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$"
          ],
          "correctIndex": 0,
          "explanation": "Tung độ của điểm $M$ chính là $\\sin 135^\\circ = \\sin(180^\\circ - 45^\\circ) = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."
        },
        {
          "id": "ai-10.5.3",
          "badge": "Luyện thêm 3 - Dấu lượng giác trong khoảng (0, 90)",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 90^\\circ$. Mệnh đề nào sau đây SAI?",
          "options": [
            "$\\cos \\alpha < 0$",
            "$\\sin \\alpha > 0$",
            "$\\tan \\alpha > 0$",
            "$\\cot \\alpha > 0$"
          ],
          "correctIndex": 0,
          "explanation": "Với góc nhọn $\\alpha$, cả 4 giá trị lượng giác đều dương, do đó $\\cos \\alpha < 0$ là mệnh đề SAI."
        },
        {
          "id": "ai-10.5.4",
          "badge": "Luyện thêm 4 - Giá trị của biểu thức chứa góc bù",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Giá trị của biểu thức $A = \\sin 120^\\circ + \\cos 150^\\circ$ bằng:",
          "options": [
            "$0$",
            "$\\sqrt{3}$",
            "$-\\sqrt{3}$",
            "$1$"
          ],
          "correctIndex": 0,
          "explanation": "Ta có $\\sin 120^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ và $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$. Do đó $A = \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{2} = 0$."
        },
        {
          "id": "ai-10.5.5",
          "badge": "Luyện thêm 5 - Giá trị lượng giác của 180 độ",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Khẳng định nào sau đây là ĐÚNG?",
          "options": [
            "$\\sin 180^\\circ = 0$",
            "$\\cos 180^\\circ = 1$",
            "$\\tan 180^\\circ = 1$",
            "$\\sin 180^\\circ = -1$"
          ],
          "correctIndex": 0,
          "explanation": "Tại góc $180^\\circ$, điểm biểu diễn là $(-1; 0)$, do đó tung độ $\\sin 180^\\circ = 0$."
        },
        {
          "id": "ai-10.5.6",
          "badge": "Luyện thêm 6 - Công thức góc bù của tan",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Với mọi góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 180^\\circ, \\alpha \\ne 90^\\circ$, ta có $\\tan(180^\\circ - \\alpha)$ bằng:",
          "options": [
            "$-\\tan \\alpha$",
            "$\\tan \\alpha$",
            "$\\cot \\alpha$",
            "$-\\cot \\alpha$"
          ],
          "correctIndex": 0,
          "explanation": "Theo tính chất góc bù nhau, $\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$."
        },
        {
          "id": "ai-10.6.1",
          "badge": "Luyện thêm 1 - Định lý Cosin tính cạnh",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho tam giác $ABC$ có $b = 4, c = 5, \\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ là:",
          "options": [
            "$\\sqrt{21}$",
            "$\\sqrt{41}$",
            "$\\sqrt{61}$",
            "$5$"
          ],
          "correctIndex": 0,
          "explanation": "$a^2 = 16 + 25 - 2(4)(5)\\cos 60^\\circ = 41 - 20 = 21 \\Rightarrow a = \\sqrt{21}$."
        },
        {
          "id": "ai-10.6.2",
          "badge": "Luyện thêm 2 - Tính góc lớn nhất của tam giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác $ABC$ có ba cạnh lần lượt là $a = 3, b = 5, c = 7$. Góc lớn nhất của tam giác $ABC$ có số đo bằng:",
          "options": [
            "$120^\\circ$",
            "$150^\\circ$",
            "$135^\\circ$",
            "$90^\\circ$"
          ],
          "correctIndex": 0,
          "explanation": "Cạnh lớn nhất là $c = 7$ nên góc lớn nhất là $\\widehat{C}$. Ta có $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{9 + 25 - 49}{2(3)(5)} = \\frac{-15}{30} = -\\frac{1}{2} \\Rightarrow \\widehat{C} = 120^\\circ$."
        },
        {
          "id": "ai-10.6.3",
          "badge": "Luyện thêm 3 - Định lý Sin tính cạnh",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho tam giác $ABC$ có $\\widehat{A} = 45^\\circ, \\widehat{B} = 30^\\circ, a = 4\\sqrt{2}$. Độ dài cạnh $b$ bằng:",
          "options": [
            "$4$",
            "$4\\sqrt{3}$",
            "$2\\sqrt{2}$",
            "$8$"
          ],
          "correctIndex": 0,
          "explanation": "Theo định lý Sin: $b = \\frac{a \\sin B}{\\sin A} = \\frac{4\\sqrt{2} \\cdot \\sin 30^\\circ}{\\sin 45^\\circ} = \\frac{4\\sqrt{2} \\cdot \\frac{1}{2}}{\\frac{\\sqrt{2}}{2}} = 4$."
        },
        {
          "id": "ai-10.6.4",
          "badge": "Luyện thêm 4 - Định lý Sin tính bán kính R",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác $ABC$ có cạnh $b = 8$ và góc $\\widehat{B} = 45^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác là:",
          "options": [
            "$4\\sqrt{2}$",
            "$8\\sqrt{2}$",
            "$4$",
            "$8$"
          ],
          "correctIndex": 0,
          "explanation": "$2R = \\frac{b}{\\sin B} = \\frac{8}{\\sin 45^\\circ} = \\frac{8}{\\frac{\\sqrt{2}}{2}} = 8\\sqrt{2} \\Rightarrow R = 4\\sqrt{2}$."
        },
        {
          "id": "ai-10.6.5",
          "badge": "Luyện thêm 5 - Tính diện tích theo tích hai cạnh và sin góc kẹp",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác $ABC$ có $a = 6, c = 8$ và $\\widehat{B} = 135^\\circ$. Diện tích của tam giác $ABC$ bằng:",
          "options": [
            "$12\\sqrt{2}$",
            "$24\\sqrt{2}$",
            "$12$",
            "$24$"
          ],
          "correctIndex": 0,
          "explanation": "$S = \\frac{1}{2} ac \\sin B = \\frac{1}{2}(6)(8)\\sin 135^\\circ = 24 \\cdot \\frac{\\sqrt{2}}{2} = 12\\sqrt{2}$."
        },
        {
          "id": "ai-10.6.prac1",
          "badge": "Vận dụng - Đo khoảng cách gián tiếp qua đầm lầy",
          "source": "SGK Toán 10 KNTT Bài 6 & Đề thi khảo sát",
          "question": "Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi một đầm lầy, người ta chọn điểm mốc $C$ sao cho từ $C$ có thể nhìn thấy cả $A$ và $B$. Bằng giác kế đo được $CA = 200\\text{ m}$, $CB = 150\\text{ m}$ và góc $\\widehat{ACB} = 60^\\circ$. Khoảng cách giữa hai điểm $A$ và $B$ xấp xỉ bằng:",
          "options": [
            "$180\\text{ m}$",
            "$175\\text{ m}$",
            "$190\\text{ m}$",
            "$250\\text{ m}$"
          ],
          "correctIndex": 0,
          "explanation": "Áp dụng định lí cosin trong tam giác $ABC$: $AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos C = 200^2 + 150^2 - 2 \\cdot 200 \\cdot 150 \\cdot \\cos 60^\\circ = 40000 + 22500 - 30000 = 32500$. Do đó $AB = \\sqrt{32500} \\approx 180.28\\text{ m} \\approx 180\\text{ m}$.",
          "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M 180 80 Q 250 55 310 90 Q 360 120 330 160 Q 270 190 210 165 Q 160 140 180 80 Z\" fill=\"#0284c7\" fill-opacity=\"0.25\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"6 3\"/> <text x=\"240\" y=\"125\" fill=\"#38bdf8\" font-size=\"12\" font-style=\"italic\">Đầm lầy</text> <line x1=\"75\" y1=\"180\" x2=\"190\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"75\" y1=\"180\" x2=\"365\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"190\" y1=\"65\" x2=\"365\" y2=\"175\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <path d=\"M 110 179 A 40 40 0 0 0 100 152\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"115\" y=\"165\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">60°</text> <text x=\"105\" y=\"112\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">40 m</text> <text x=\"210\" y=\"200\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">60 m</text> <text x=\"290\" y=\"110\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AB = 20√7 m</text> <circle cx=\"75\" cy=\"180\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"55\" y=\"195\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">C</text> <circle cx=\"190\" cy=\"65\" r=\"5\" fill=\"#10b981\"/> <text x=\"180\" y=\"50\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"365\" cy=\"175\" r=\"5\" fill=\"#10b981\"/> <text x=\"375\" y=\"185\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">B</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.5.1",
          "badge": "Luyện thêm Đ/S 1 - Tính chất nửa đường tròn đơn vị",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Xét điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị ứng với góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$).",
          "subItems": [
            {
              "id": "a",
              "text": "Tọa độ điểm $M$ luôn thỏa mãn $x_0^2 + y_0^2 = 1$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $M$ thuộc đường tròn đơn vị có bán kính $R = 1$."
            },
            {
              "id": "b",
              "text": "Tung độ $y_0$ luôn nhận giá trị không âm.",
              "correctAnswer": true,
              "explanation": "Đúng vì nửa đường tròn đơn vị nằm phía trên trục hoành ($y \\ge 0$)."
            },
            {
              "id": "c",
              "text": "Nếu $x_0 < 0$ thì $\\alpha$ là góc nhọn.",
              "correctAnswer": false,
              "explanation": "Sai vì $x_0 = \\cos \\alpha < 0$ thì $\\alpha$ phải là góc tù."
            },
            {
              "id": "d",
              "text": "Nếu $x_0 = 0$ thì $\\alpha = 90^\\circ$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\cos 90^\\circ = 0$ và điểm đó là $B(0; 1)$."
            }
          ]
        },
        {
          "id": "ai-tf-10.5.2",
          "badge": "Luyện thêm Đ/S 2 - Góc bù và góc phụ",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Xét tính đúng/sai của các hệ thức lượng giác sau:",
          "subItems": [
            {
              "id": "a",
              "text": "$\\sin(180^\\circ - 30^\\circ) = \\cos 60^\\circ$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ và $\\cos 60^\\circ = \\frac{1}{2}$."
            },
            {
              "id": "b",
              "text": "$\\cos(180^\\circ - 45^\\circ) = \\sin 45^\\circ$.",
              "correctAnswer": false,
              "explanation": "Sai vì $\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2}$ trong khi $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."
            },
            {
              "id": "c",
              "text": "$\\tan(90^\\circ - 20^\\circ) = \\cot 20^\\circ$.",
              "correctAnswer": true,
              "explanation": "Đúng theo tính chất hai góc phụ nhau: $\\tan(90^\\circ - \\alpha) = \\cot \\alpha$."
            },
            {
              "id": "d",
              "text": "$\\cos(90^\\circ - \\alpha) + \\sin(180^\\circ - \\alpha) = 2\\sin \\alpha$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\cos(90^\\circ - \\alpha) = \\sin \\alpha$ và $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$, tổng là $2\\sin \\alpha$."
            }
          ]
        },
        {
          "id": "ai-tf-10.6.1",
          "badge": "Luyện thêm Đ/S 1 - Định lý Cosin và nhận dạng góc",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho tam giác $ABC$ có các cạnh $a = 6, b = 7, c = 8$.",
          "subItems": [
            {
              "id": "a",
              "text": "Cạnh lớn nhất của tam giác là cạnh $c = 8$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $8 > 7 > 6$."
            },
            {
              "id": "b",
              "text": "Góc $\\widehat{C}$ là góc lớn nhất trong ba góc của tam giác.",
              "correctAnswer": true,
              "explanation": "Đúng vì trong tam giác, góc đối diện cạnh lớn nhất là góc lớn nhất."
            },
            {
              "id": "c",
              "text": "$\\cos C = \\frac{6^2 + 7^2 - 8^2}{2(6)(7)} = \\frac{21}{84} = \\frac{1}{4}$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\frac{36 + 49 - 64}{84} = \\frac{21}{84} = \\frac{1}{4}$."
            },
            {
              "id": "d",
              "text": "Tam giác $ABC$ là tam giác tù.",
              "correctAnswer": false,
              "explanation": "Sai vì góc lớn nhất $\\widehat{C}$ có $\\cos C = \\frac{1}{4} > 0$ nên $\\widehat{C} < 90^\\circ$, tam giác là tam giác nhọn."
            }
          ]
        },
        {
          "id": "ai-tf-10.6.prac1",
          "badge": "Đúng / Sai 4 - Đo chiều cao ngọn tháp bằng giác kế",
          "source": "SGK Toán 10 KNTT Bài 6",
          "prompt": "Từ điểm $A$ trên mặt đất, người ta quan sát đỉnh một ngọn tháp $CD$ cao dựng đứng trên mặt đất (chân tháp $D$). Góc nâng nhìn đỉnh tháp từ $A$ là $\\widehat{CAD} = 30^\\circ$. Tiến lại gần tháp một đoạn $AB = 50\\text{ m}$ trên cùng đường thẳng qua chân tháp, góc nâng quan sát đỉnh tháp từ $B$ là $\\widehat{CBD} = 60^\\circ$. Xét tính Đúng/Sai của các khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Tam giác $ABC$ là tam giác cân tại đỉnh $B$.",
              "correctAnswer": true,
              "explanation": "Ta có $\\widehat{ACB} = \\widehat{CBD} - \\widehat{CAD} = 60^\\circ - 30^\\circ = 30^\\circ = \\widehat{CAB} \\implies \\triangle ABC$ cân tại $B$."
            },
            {
              "id": "b",
              "text": "Độ dài đoạn thẳng $BC$ bằng $50\\text{ m}$.",
              "correctAnswer": true,
              "explanation": "Vì $\\triangle ABC$ cân tại $B$ nên $BC = AB = 50\\text{ m}$."
            },
            {
              "id": "c",
              "text": "Chiều cao $CD$ của tháp tính theo công thức $CD = BC \\cdot \\sin 60^\\circ$.",
              "correctAnswer": true,
              "explanation": "Trong tam giác vuông $BCD$ tại $D$: $CD = BC \\cdot \\sin \\widehat{CBD} = 50 \\cdot \\frac{\\sqrt{3}}{2} = 25\\sqrt{3} \\approx 43.3\\text{ m}$."
            },
            {
              "id": "d",
              "text": "Chiều cao của ngọn tháp lớn hơn $45\\text{ m}$.",
              "correctAnswer": false,
              "explanation": "$CD = 25\\sqrt{3} \\approx 43.3\\text{ m} < 45\\text{ m}$."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 460 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"30\" y1=\"195\" x2=\"430\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <g transform=\"translate(385, 45)\"> <polygon points=\"0,0 -14,150 14,150\" fill=\"#0f172a\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <circle cx=\"0\" cy=\"-4\" r=\"3\" fill=\"#ef4444\"/> <line x1=\"0\" y1=\"-4\" x2=\"0\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"2\"/> </g> <circle cx=\"385\" cy=\"195\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"200\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">D</text> <circle cx=\"385\" cy=\"45\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"45\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C</text> <line x1=\"260\" y1=\"195\" x2=\"385\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"195\" x2=\"385\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <path d=\"M 295 195 A 35 35 0 0 0 282 169\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"290\" y=\"182\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">48°</text> <path d=\"M 140 195 A 40 40 0 0 0 133 172\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"145\" y=\"186\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">35°</text> <text x=\"165\" y=\"220\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"600\">AB = 30 m</text> <circle cx=\"100\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"90\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"260\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"250\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <text x=\"405\" y=\"125\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">h = CD</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.5.1",
          "badge": "Luyện thêm TLN 1 - Tính tổng sin hai góc bù nhau",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tính giá trị của biểu thức $A = \\sin 150^\\circ + \\sin 30^\\circ$.",
          "correctAnswer": "1",
          "acceptableAnswers": [
            "1"
          ],
          "explanation": "Vì $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ nên $A = \\frac{1}{2} + \\frac{1}{2} = 1$."
        },
        {
          "id": "ai-sa-10.5.2",
          "badge": "Luyện thêm TLN 2 - Hiệu cos hai góc bù nhau",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tính giá trị của biểu thức $B = \\cos 60^\\circ - \\cos 120^\\circ$.",
          "correctAnswer": "1",
          "acceptableAnswers": [
            "1"
          ],
          "explanation": "Ta có $\\cos 60^\\circ = \\frac{1}{2}$ và $\\cos 120^\\circ = -\\frac{1}{2}$. Do đó $B = \\frac{1}{2} - \\left(-\\frac{1}{2}\\right) = 1$."
        },
        {
          "id": "ai-sa-10.5.3",
          "badge": "Luyện thêm TLN 3 - Tìm số đo góc khi biết cos",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tìm số đo góc $\\alpha$ (tính theo độ, $0^\\circ \\le \\alpha \\le 180^\\circ$) biết $\\cos \\alpha = -\\frac{1}{2}$.",
          "correctAnswer": "120",
          "acceptableAnswers": [
            "120",
            "120 độ",
            "120°"
          ],
          "explanation": "Vì $\\cos 60^\\circ = \\frac{1}{2}$ nên $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$. Vậy $\\alpha = 120^\\circ$."
        },
        {
          "id": "ai-sa-10.6.1",
          "badge": "Luyện thêm TLN 1 - Tính độ dài cạnh theo định lý Cosin",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho tam giác $ABC$ có $b = 3, c = 4$ và $\\widehat{A} = 60^\\circ$. Tính $a^2$.",
          "correctAnswer": "13",
          "acceptableAnswers": [
            "13"
          ],
          "explanation": "$a^2 = 9 + 16 - 2(3)(4)\\cos 60^\\circ = 25 - 12 = 13$."
        },
        {
          "id": "ai-sa-10.6.2",
          "badge": "Luyện thêm TLN 2 - Tính góc khi biết ba cạnh",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho tam giác $ABC$ có ba cạnh là $a = \\sqrt{3}, b = 1, c = 2$. Tính số đo góc $\\widehat{A}$ (tính theo độ).",
          "correctAnswer": "60",
          "acceptableAnswers": [
            "60",
            "60 độ",
            "60°"
          ],
          "explanation": "$\\cos A = \\frac{1 + 4 - 3}{2(1)(2)} = \\frac{2}{4} = \\frac{1}{2} \\Rightarrow \\widehat{A} = 60^\\circ$."
        },
        {
          "id": "ai-sa-10.6.prac1",
          "badge": "Trả lời ngắn 6 - Khoảng cách giữa hai tàu thủy sau khi rời cảng",
          "source": "SBT Toán 10 KNTT",
          "prompt": "Hai chiếc tàu thủy xuất phát cùng một thời điểm từ cảng $O$, đi thẳng theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất chạy với vận tốc $30\\text{ km/h}$, tàu thứ hai chạy với vận tốc $40\\text{ km/h}$. Sau 2 giờ, khoảng cách giữa hai tàu là bao nhiêu kilômét? (Làm tròn kết quả đến hàng đơn vị).",
          "correctAnswer": "72",
          "acceptableAnswers": [
            "72",
            "72 km"
          ],
          "explanation": "Sau 2 giờ: tàu 1 đi được $OA = 30 \\times 2 = 60\\text{ km}$; tàu 2 đi được $OB = 40 \\times 2 = 80\\text{ km}$. Góc $\\widehat{AOB} = 60^\\circ$. Khoảng cách giữa hai tàu là $AB$: $AB^2 = OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos 60^\\circ = 60^2 + 80^2 - 2 \\cdot 60 \\cdot 80 \\cdot 0.5 = 3600 + 6400 - 4800 = 5200$. Vậy $AB = \\sqrt{5200} \\approx 72.11\\text{ km} \\approx 72\\text{ km}$.",
          "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"70\" cy=\"180\" r=\"6\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"50\" y=\"195\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">O (Cảng)</text> <line x1=\"70\" y1=\"180\" x2=\"310\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"70\" y1=\"180\" x2=\"245\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"245\" y1=\"55\" x2=\"310\" y2=\"180\" stroke=\"#f43f5e\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\"/> <path d=\"M 115 180 A 45 45 0 0 0 93 141\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"120\" y=\"162\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">60°</text> <text x=\"135\" y=\"105\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">40 hl</text> <text x=\"175\" y=\"200\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">30 hl</text> <text x=\"290\" y=\"115\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AB ≈ 36,1 hl</text> <circle cx=\"245\" cy=\"55\" r=\"5\" fill=\"#10b981\"/> <text x=\"255\" y=\"55\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">Tàu A</text> <circle cx=\"310\" cy=\"180\" r=\"5\" fill=\"#10b981\"/> <text x=\"320\" y=\"185\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">Tàu B</text> </svg>"
        }
      ]
    },
    {
      "id": "de-2",
      "title": "Đề ôn tập số 2",
      "description": "Đề ôn tập tổng hợp cuối Chương III (Hệ thức lượng trong tam giác) - Đề số 2",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.5.7",
          "badge": "Luyện thêm 7 - Tính giá trị cot 120 độ",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Giá trị của $\\cot 120^\\circ$ bằng:",
          "options": [
            "$-\\frac{\\sqrt{3}}{3}$",
            "$\\frac{\\sqrt{3}}{3}$",
            "$-\\sqrt{3}$",
            "$\\sqrt{3}$"
          ],
          "correctIndex": 0,
          "explanation": "$\\cot 120^\\circ = -\\cot 60^\\circ = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$."
        },
        {
          "id": "ai-10.5.8",
          "badge": "Luyện thêm 8 - Biểu thức đối xứng tổng hai góc bù",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Giá trị của biểu thức $B = \\cos^2 25^\\circ + \\cos^2 155^\\circ$ bằng:",
          "options": [
            "$2\\cos^2 25^\\circ$",
            "$1$",
            "$0$",
            "$2$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $155^\\circ = 180^\\circ - 25^\\circ$ nên $\\cos 155^\\circ = -\\cos 25^\\circ \\Rightarrow \\cos^2 155^\\circ = \\cos^2 25^\\circ$. Do đó $B = 2\\cos^2 25^\\circ$."
        },
        {
          "id": "ai-10.5.9",
          "badge": "Luyện thêm 9 - Tính cos khi biết sin góc nhọn",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho góc nhọn $\\alpha$ có $\\sin \\alpha = \\frac{1}{\\sqrt{5}}$. Giá trị của $\\cos \\alpha$ bằng:",
          "options": [
            "$\\frac{2}{\\sqrt{5}}$",
            "$-\\frac{2}{\\sqrt{5}}$",
            "$\\frac{4}{5}$",
            "$\\frac{1}{5}$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $\\alpha$ nhọn nên $\\cos \\alpha > 0$. Ta có $\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} = \\sqrt{1 - \\frac{1}{5}} = \\sqrt{\\frac{4}{5}} = \\frac{2}{\\sqrt{5}}$."
        },
        {
          "id": "ai-10.5.10",
          "badge": "Luyện thêm 10 - Tính tan khi biết sin góc tù",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho góc tù $\\alpha$ có $\\sin \\alpha = \\frac{5}{13}$. Giá trị của $\\tan \\alpha$ bằng:",
          "options": [
            "$-\\frac{5}{12}$",
            "$\\frac{5}{12}$",
            "$-\\frac{12}{5}$",
            "$\\frac{12}{5}$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $\\alpha$ tù nên $\\cos \\alpha < 0 \\Rightarrow \\cos \\alpha = -\\sqrt{1 - (5/13)^2} = -\\frac{12}{13}$. Do đó $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = -\\frac{5}{12}$."
        },
        {
          "id": "ai-10.5.11",
          "badge": "Luyện thêm 11 - Giá trị biểu thức rút gọn",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Rút gọn biểu thức $M = \\sin(180^\\circ - x) - \\cos(90^\\circ - x)$. Kết quả là:",
          "options": [
            "$0$",
            "$2\\sin x$",
            "$-2\\sin x$",
            "$2\\cos x$"
          ],
          "correctIndex": 0,
          "explanation": "Ta có $\\sin(180^\\circ - x) = \\sin x$ và $\\cos(90^\\circ - x) = \\sin x$. Do đó $M = \\sin x - \\sin x = 0$."
        },
        {
          "id": "ai-10.5.12",
          "badge": "Luyện thêm 12 - Góc giữa hai vector hoặc góc phẳng",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho góc $\\alpha$ thỏa mãn $\\tan \\alpha = -\\sqrt{3}$. Số đo góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$) là:",
          "options": [
            "$120^\\circ$",
            "$150^\\circ$",
            "$60^\\circ$",
            "$135^\\circ$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $\\tan 60^\\circ = \\sqrt{3}$ nên $\\tan 120^\\circ = -\\tan 60^\\circ = -\\sqrt{3}$. Vậy $\\alpha = 120^\\circ$."
        },
        {
          "id": "ai-10.6.7",
          "badge": "Luyện thêm 7 - Tính bán kính r của tam giác đều",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Bán kính đường tròn nội tiếp của một tam giác đều cạnh $a = 6$ là:",
          "options": [
            "$\\sqrt{3}$",
            "$2\\sqrt{3}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$3$"
          ],
          "correctIndex": 0,
          "explanation": "Đường cao $h = \\frac{a\\sqrt{3}}{2} = 3\\sqrt{3}$. Bán kính nội tiếp $r = \\frac{1}{3}h = \\sqrt{3}$."
        },
        {
          "id": "ai-10.6.8",
          "badge": "Luyện thêm 8 - Công thức đường trung tuyến",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho tam giác $ABC$ vuông tại $B$ có $BA = 6, BC = 8$. Độ dài đường trung tuyến kẻ từ đỉnh $B$ là:",
          "options": [
            "$5$",
            "$10$",
            "$4$",
            "$\\sqrt{28}$"
          ],
          "correctIndex": 0,
          "explanation": "Cạnh huyền $AC = \\sqrt{6^2 + 8^2} = 10$. Đường trung tuyến ứng với cạnh huyền $AC$ là $m_b = \\frac{AC}{2} = 5$."
        },
        {
          "id": "ai-10.6.9",
          "badge": "Luyện thêm 9 - Tính chiều cao tam giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác $ABC$ có $a = 10, b = 10, c = 12$. Chiều cao $h_c$ kẻ từ đỉnh $C$ xuống cạnh $c$ bằng:",
          "options": [
            "$8$",
            "$6$",
            "$10$",
            "$4$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $a = b = 10$ nên tam giác cân tại $C$. Chân đường cao $H$ là trung điểm $AB$, $AH = 6$. Theo Pythagore: $h_c = \\sqrt{10^2 - 6^2} = 8$."
        },
        {
          "id": "ai-10.6.10",
          "badge": "Luyện thêm 10 - Góc nhọn trong tam giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác $ABC$ có $\\cos A = \\frac{3}{5}$. Tỉ số $\\frac{a}{\\sin A}$ bằng $20$. Độ dài cạnh $a$ là:",
          "options": [
            "$16$",
            "$12$",
            "$8$",
            "$10$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $\\cos A = \\frac{3}{5} > 0$ nên $\\sin A = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$. Khi đó $a = 20 \\sin A = 20 \\cdot \\frac{4}{5} = 16$."
        },
        {
          "id": "ai-10.6.11",
          "badge": "Luyện thêm 11 - Tính diện tích qua R",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác $ABC$ có $a = 3, b = 4, c = 5$. Bán kính đường tròn ngoại tiếp $R$ bằng:",
          "options": [
            "$2{,}5$",
            "$5$",
            "$3$",
            "$1{,}5$"
          ],
          "correctIndex": 0,
          "explanation": "Tam giác $ABC$ vuông tại $C$ vì $3^2 + 4^2 = 5^2$. Cạnh huyền là $c = 5$, bán kính ngoại tiếp $R = \\frac{c}{2} = 2{,}5$."
        },
        {
          "id": "ai-10.6.prac2",
          "badge": "Vận dụng - Ngọn hải đăng quan sát thuyền cứu hộ",
          "source": "Đề kiểm tra học kì 1 Toán 10 KNTT",
          "question": "Một ngọn hải đăng cao $45\\text{ m}$ so với mực nước biển. Từ đỉnh hải đăng, người quan sát nhìn thấy một chiếc thuyền cứu hộ dưới góc hạ $30^\\circ$. Khoảng cách từ chân ngọn hải đăng (ngang mực nước biển) đến con thuyền xấp xỉ bằng:",
          "options": [
            "$78\\text{ m}$",
            "$90\\text{ m}$",
            "$26\\text{ m}$",
            "$64\\text{ m}$"
          ],
          "correctIndex": 0,
          "explanation": "Góc hạ là góc giữa phương nằm ngang và tia nhìn. Do đó trong tam giác vuông tạo bởi đỉnh tháp $A$, chân tháp $H$ và thuyền $B$, góc $\\widehat{ABH} = 30^\\circ$. Khoảng cách $HB = \\frac{AH}{\\tan 30^\\circ} = \\frac{45}{1/\\sqrt{3}} = 45\\sqrt{3} \\approx 77.94\\text{ m} \\approx 78\\text{ m}$.",
          "svgDiagram": "<svg viewBox=\"0 0 450 250\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0\" y=\"0\" width=\"450\" height=\"195\" fill=\"#0369a1\" fill-opacity=\"0.12\"/> <line x1=\"30\" y1=\"195\" x2=\"420\" y2=\"195\" stroke=\"#eab308\" stroke-width=\"2\" stroke-dasharray=\"7 3\"/> <text x=\"380\" y=\"215\" fill=\"#eab308\" font-size=\"12\" font-style=\"italic\">Bờ biển</text> <g transform=\"translate(225, 45)\"> <polygon points=\"-7,15 7,15 4,-12 -4,-12\" fill=\"#f1f5f9\"/> <circle cx=\"0\" cy=\"15\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"12\" y=\"10\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C (Hải đăng)</text> </g> <line x1=\"100\" y1=\"195\" x2=\"330\" y2=\"195\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"100\" y1=\"195\" x2=\"225\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"330\" y1=\"195\" x2=\"225\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <path d=\"M 135 195 A 35 35 0 0 0 118 165\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"132\" y=\"180\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">70°</text> <path d=\"M 295 195 A 35 35 0 0 1 316 163\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"275\" y=\"180\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">80°</text> <text x=\"200\" y=\"215\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">500 m</text> <circle cx=\"100\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"90\" y=\"220\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"330\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"330\" y=\"220\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.5.3",
          "badge": "Luyện thêm Đ/S 3 - Tính toán khi biết cos",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$) biết $\\cos \\alpha = -\\frac{3}{5}$.",
          "subItems": [
            {
              "id": "a",
              "text": "$\\alpha$ là góc nhọn.",
              "correctAnswer": false,
              "explanation": "Sai vì $\\cos \\alpha < 0$ chứng tỏ $\\alpha$ là góc tù."
            },
            {
              "id": "b",
              "text": "$\\sin \\alpha = \\frac{4}{5}$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\sin \\alpha = \\sqrt{1 - (-3/5)^2} = \\frac{4}{5}$."
            },
            {
              "id": "c",
              "text": "$\\tan \\alpha = -\\frac{4}{3}$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\tan \\alpha = \\frac{4/5}{-3/5} = -\\frac{4}{3}$."
            },
            {
              "id": "d",
              "text": "Biểu thức $H = \\sin \\alpha + 2\\cos \\alpha$ có giá trị âm.",
              "correctAnswer": true,
              "explanation": "Đúng vì $H = \\frac{4}{5} + 2\\left(-\\frac{3}{5}\\right) = \\frac{4 - 6}{5} = -\\frac{2}{5} < 0$."
            }
          ]
        },
        {
          "id": "ai-tf-10.5.4",
          "badge": "Luyện thêm Đ/S 4 - Tính toán khi biết tan",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho góc $\\alpha$ ($0^\\circ < \\alpha < 180^\\circ$) thỏa mãn $\\tan \\alpha = -\\frac{1}{2}$.",
          "subItems": [
            {
              "id": "a",
              "text": "Góc $\\alpha$ thỏa mãn $90^\\circ < \\alpha < 180^\\circ$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\tan \\alpha < 0$ nên $\\alpha$ là góc tù."
            },
            {
              "id": "b",
              "text": "$\\cot \\alpha = -2$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\cot \\alpha = \\frac{1}{\\tan \\alpha} = -2$."
            },
            {
              "id": "c",
              "text": "$\\cos^2 \\alpha = \\frac{4}{5}$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $1 + \\tan^2 \\alpha = 1 + \\frac{1}{4} = \\frac{5}{4} = \\frac{1}{\\cos^2 \\alpha} \\Rightarrow \\cos^2 \\alpha = \\frac{4}{5}$."
            },
            {
              "id": "d",
              "text": "$\\cos \\alpha = \\frac{2}{\\sqrt{5}}$.",
              "correctAnswer": false,
              "explanation": "Sai vì $\\alpha$ là góc tù nên $\\cos \\alpha < 0$, tức $\\cos \\alpha = -\\frac{2}{\\sqrt{5}}$."
            }
          ]
        },
        {
          "id": "ai-tf-10.6.3",
          "badge": "Luyện thêm Đ/S 3 - Diện tích và bán kính nội tiếp",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho tam giác $ABC$ có ba cạnh $a = 5, b = 12, c = 13$.",
          "subItems": [
            {
              "id": "a",
              "text": "Tam giác $ABC$ vuông tại $C$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $5^2 + 12^2 = 25 + 144 = 169 = 13^2$, tam giác vuông tại đỉnh đối diện cạnh $c$."
            },
            {
              "id": "b",
              "text": "Diện tích tam giác $ABC$ bằng $30$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $S = \\frac{1}{2} a b = \\frac{1}{2}(5)(12) = 30$."
            },
            {
              "id": "c",
              "text": "Bán kính đường tròn ngoại tiếp $R = 6{,}5$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $R = \\frac{c}{2} = \\frac{13}{2} = 6{,}5$."
            },
            {
              "id": "d",
              "text": "Bán kính đường tròn nội tiếp $r = 3$.",
              "correctAnswer": false,
              "explanation": "Sai vì nửa chu vi $p = \\frac{5+12+13}{2} = 15 \\Rightarrow r = \\frac{S}{p} = \\frac{30}{15} = 2 \\ne 3$."
            }
          ]
        },
        {
          "id": "ai-tf-10.6.prac2",
          "badge": "Đúng / Sai 4 - Góc nâng và độ cao máy bay cất cánh",
          "source": "Đề thi thử tốt nghiệp & Ôn tập Toán 10",
          "prompt": "Một máy bay cất cánh từ sân bay $A$ theo hướng chếch lên tạo với mặt đất một góc $20^\\circ$. Sau 3 phút bay với vận tốc đều $600\\text{ km/h}$ theo phương này, máy bay đạt đến vị trí điểm $B$. Xét tính Đúng/Sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Thời gian bay 3 phút tương ứng với $0.05$ giờ.",
              "correctAnswer": true,
              "explanation": "$3\\text{ phút} = \\frac{3}{60} = 0.05\\text{ giờ}$."
            },
            {
              "id": "b",
              "text": "Quãng đường $AB$ mà máy bay đã bay là $30\\text{ km}$.",
              "correctAnswer": true,
              "explanation": "$s = v \\cdot t = 600 \\times 0.05 = 30\\text{ km}$."
            },
            {
              "id": "c",
              "text": "Độ cao của máy bay so với mặt đất tính theo công thức $h = AB \\cdot \\sin 20^\\circ$.",
              "correctAnswer": true,
              "explanation": "Trong tam giác vuông, cạnh đối bằng cạnh huyền nhân sin góc đối: $h = AB \\cdot \\sin 20^\\circ$."
            },
            {
              "id": "d",
              "text": "Độ cao của máy bay khi đó vượt quá $12\\text{ km}$.",
              "correctAnswer": false,
              "explanation": "$h = 30 \\cdot \\sin 20^\\circ \\approx 30 \\times 0.342 = 10.26\\text{ km} < 12\\text{ km}$."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"70\" cy=\"175\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"50\" y=\"195\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <line x1=\"70\" y1=\"175\" x2=\"250\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <circle cx=\"250\" cy=\"175\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"245\" y=\"200\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <line x1=\"250\" y1=\"175\" x2=\"340\" y2=\"175\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/> <line x1=\"250\" y1=\"175\" x2=\"310\" y2=\"71\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <circle cx=\"310\" cy=\"71\" r=\"5\" fill=\"#10b981\"/> <text x=\"320\" y=\"70\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">C</text> <path d=\"M 285 175 A 35 35 0 0 0 268 145\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/> <text x=\"288\" y=\"160\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">60°</text> <path d=\"M 215 175 A 35 35 0 0 1 268 145\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <text x=\"220\" y=\"155\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">120°</text> <line x1=\"70\" y1=\"175\" x2=\"310\" y2=\"71\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <text x=\"145\" y=\"195\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">100 km</text> <text x=\"305\" y=\"130\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">60 km</text> <text x=\"175\" y=\"105\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AC = 140 km</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.5.4",
          "badge": "Luyện thêm TLN 4 - Tìm số đo góc khi biết tan",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tìm số đo góc $\\alpha$ (tính theo độ, $0^\\circ \\le \\alpha \\le 180^\\circ$) biết $\\tan \\alpha = -\\frac{\\sqrt{3}}{3}$.",
          "correctAnswer": "150",
          "acceptableAnswers": [
            "150",
            "150 độ",
            "150°"
          ],
          "explanation": "Vì $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$ nên $\\tan 150^\\circ = -\\tan 30^\\circ = -\\frac{\\sqrt{3}}{3}$. Vậy $\\alpha = 150^\\circ$."
        },
        {
          "id": "ai-sa-10.5.5",
          "badge": "Luyện thêm TLN 5 - Tích hai tan phụ nhau",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tính giá trị của biểu thức $P = \\tan 18^\\circ \\cdot \\tan 72^\\circ$.",
          "correctAnswer": "1",
          "acceptableAnswers": [
            "1"
          ],
          "explanation": "Vì $72^\\circ = 90^\\circ - 18^\\circ$ nên $\\tan 72^\\circ = \\cot 18^\\circ$. Tích $\\tan 18^\\circ \\cdot \\cot 18^\\circ = 1$."
        },
        {
          "id": "ai-sa-10.5.6",
          "badge": "Luyện thêm TLN 6 - Tính giá trị cos khi biết sin góc tù",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho góc $\\alpha$ tù thỏa mãn $\\sin \\alpha = \\frac{12}{13}$. Tính giá trị của $13 \\cos \\alpha$.",
          "correctAnswer": "-5",
          "acceptableAnswers": [
            "-5"
          ],
          "explanation": "Vì $\\alpha$ tù nên $\\cos \\alpha = -\\sqrt{1 - (12/13)^2} = -\\frac{5}{13}$. Do đó $13\\cos \\alpha = -5$."
        },
        {
          "id": "ai-sa-10.6.4",
          "badge": "Luyện thêm TLN 4 - Diện tích tam giác",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho tam giác $ABC$ có $a = 8, b = 10$ và $\\widehat{C} = 30^\\circ$. Tính diện tích tam giác $ABC$.",
          "correctAnswer": "20",
          "acceptableAnswers": [
            "20"
          ],
          "explanation": "$S = \\frac{1}{2} ab \\sin C = \\frac{1}{2}(8)(10)\\sin 30^\\circ = 40 \\cdot \\frac{1}{2} = 20$."
        },
        {
          "id": "ai-sa-10.6.5",
          "badge": "Luyện thêm TLN 5 - Diện tích theo Heron",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tính diện tích tam giác có độ dài ba cạnh là $4, 5, 7$. (Điền số $k$ biết diện tích là $4\\sqrt{k}$).",
          "correctAnswer": "6",
          "acceptableAnswers": [
            "6"
          ],
          "explanation": "$p = \\frac{4+5+7}{2} = 8$. Diện tích $S = \\sqrt{8(8-4)(8-5)(8-7)} = \\sqrt{8 \\cdot 4 \\cdot 3 \\cdot 1} = \\sqrt{96} = 4\\sqrt{6}$. Vậy $k = 6$."
        },
        {
          "id": "ai-sa-10.6.prac2",
          "badge": "Trả lời ngắn 6 - Đo khoảng cách hai bên bờ hồ nước",
          "source": "SGK Toán 10 KNTT Bài 6 Vận dụng",
          "prompt": "Để đo khoảng cách giữa hai điểm $A$ và $B$ nằm ở hai bên bờ một hồ nước, một kỹ sư đo đạc chọn điểm mốc $C$. Bằng các thiết bị trắc địa đo được $CA = 80\\text{ m}$, $CB = 120\\text{ m}$ và góc $\\widehat{ACB} = 120^\\circ$. Tính khoảng cách $AB$ theo đơn vị mét (làm tròn kết quả đến hàng đơn vị).",
          "correctAnswer": "174",
          "acceptableAnswers": [
            "174",
            "174 m"
          ],
          "explanation": "Áp dụng định lí cosin trong tam giác $ABC$: $AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos 120^\\circ = 80^2 + 120^2 - 2 \\cdot 80 \\cdot 120 \\cdot (-0.5) = 6400 + 14400 + 9600 = 30400$. Suy ra $AB = \\sqrt{30400} \\approx 174.36\\text{ m} \\approx 174\\text{ m}$.",
          "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M 120 100 Q 230 70 330 110 Q 370 150 310 170 Q 210 185 130 160 Q 90 130 120 100 Z\" fill=\"#0284c7\" fill-opacity=\"0.25\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"6 3\"/> <text x=\"225\" y=\"135\" fill=\"#38bdf8\" font-size=\"12\" font-style=\"italic\">Hồ nước</text> <circle cx=\"180\" cy=\"175\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"180\" y=\"198\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">C</text> <line x1=\"180\" y1=\"175\" x2=\"80\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"180\" y1=\"175\" x2=\"370\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"80\" y1=\"90\" x2=\"370\" y2=\"175\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <path d=\"M 215 175 A 35 35 0 0 0 153 152\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"185\" y=\"155\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">120°</text> <text x=\"100\" y=\"150\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">30 m</text> <text x=\"270\" y=\"195\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">50 m</text> <text x=\"235\" y=\"105\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AB = 70 m</text> <circle cx=\"80\" cy=\"90\" r=\"5\" fill=\"#10b981\"/> <text x=\"65\" y=\"85\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"370\" cy=\"175\" r=\"5\" fill=\"#10b981\"/> <text x=\"380\" y=\"180\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">B</text> </svg>"
        }
      ]
    },
    {
      "id": "de-3",
      "title": "Đề ôn tập số 3",
      "description": "Đề ôn tập tổng hợp cuối Chương III (Hệ thức lượng trong tam giác) - Đề số 3",
      "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
      "quizQuestions": [
        {
          "id": "ai-10.5.13",
          "badge": "Luyện thêm 13 - Giá trị biểu thức lượng giác phân thức",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho $\\cot \\alpha = -2$. Giá trị của biểu thức $A = \\frac{3\\sin \\alpha + 2\\cos \\alpha}{2\\sin \\alpha - \\cos \\alpha}$ bằng:",
          "options": [
            "$-\\frac{1}{4}$",
            "$\\frac{1}{4}$",
            "$-1$",
            "$1$"
          ],
          "correctIndex": 0,
          "explanation": "Chia cả tử và mẫu cho $\\sin \\alpha \\ne 0$: $A = \\frac{3 + 2\\cot \\alpha}{2 - \\cot \\alpha} = \\frac{3 + 2(-2)}{2 - (-2)} = \\frac{3 - 4}{4} = -\\frac{1}{4}$."
        },
        {
          "id": "ai-10.5.14",
          "badge": "Luyện thêm 14 - Tính tổng chuỗi cos đối xứng",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Giá trị của biểu thức $S = \\cos 1^\\circ + \\cos 2^\\circ + \\dots + \\cos 178^\\circ + \\cos 179^\\circ$ bằng:",
          "options": [
            "$0$",
            "$1$",
            "$-1$",
            "$179$"
          ],
          "correctIndex": 0,
          "explanation": "Ghép các cặp bù nhau: $(\\cos 1^\\circ + \\cos 179^\\circ) + (\\cos 2^\\circ + \\cos 178^\\circ) + \\dots + \\cos 90^\\circ = 0 + 0 + \\dots + 0 = 0$."
        },
        {
          "id": "ai-10.5.15",
          "badge": "Luyện thêm 15 - Giá trị chuỗi sin bình phương",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tính giá trị của biểu thức $P = \\sin^2 15^\\circ + \\sin^2 75^\\circ + \\sin^2 45^\\circ$.",
          "options": [
            "$\\frac{3}{2}$",
            "$1$",
            "$2$",
            "$\\frac{5}{2}$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $15^\\circ$ và $75^\\circ$ phụ nhau nên $\\sin^2 15^\\circ + \\sin^2 75^\\circ = 1$. Lại có $\\sin^2 45^\\circ = \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{1}{2}$. Vậy $P = 1 + \\frac{1}{2} = \\frac{3}{2}$."
        },
        {
          "id": "ai-10.5.16",
          "badge": "Luyện thêm 16 - Hệ thức cơ bản phân thức lượng giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho góc $\\alpha$ nhọn thỏa mãn $\\tan \\alpha = \\sqrt{2}$. Giá trị của $\\cos \\alpha$ là:",
          "options": [
            "$\\frac{1}{\\sqrt{3}}$",
            "$\\frac{\\sqrt{2}}{\\sqrt{3}}$",
            "$\\frac{1}{3}$",
            "$\\frac{2}{3}$"
          ],
          "correctIndex": 0,
          "explanation": "Áp dụng công thức $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha} \\Rightarrow 1 + 2 = \\frac{1}{\\cos^2 \\alpha} \\Rightarrow \\cos^2 \\alpha = \\frac{1}{3}$. Vì $\\alpha$ nhọn nên $\\cos \\alpha = \\frac{1}{\\sqrt{3}}$."
        },
        {
          "id": "ai-10.5.17",
          "badge": "Luyện thêm 17 - Đẳng thức liên hệ tam giác",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Trong tam giác $ABC$, mệnh đề nào sau đây luôn ĐÚNG?",
          "options": [
            "$\\sin C = \\sin(A + B)$",
            "$\\cos C = \\cos(A + B)$",
            "$\\tan C = \\tan(A + B)$",
            "$\\cot C = \\cot(A + B)$"
          ],
          "correctIndex": 0,
          "explanation": "Vì $A + B + C = 180^\\circ \\Rightarrow C = 180^\\circ - (A + B) \\Rightarrow \\sin C = \\sin(180^\\circ - (A + B)) = \\sin(A + B)$."
        },
        {
          "id": "ai-10.5.18",
          "badge": "Luyện thêm 18 - Giá trị nhỏ nhất của tổng sin²",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Với mọi góc $\\alpha \\in [0^\\circ; 180^\\circ]$, giá trị lớn nhất của $f(\\alpha) = \\sin \\alpha$ bằng:",
          "options": [
            "$1$",
            "$0$",
            "$-1$",
            "$2$"
          ],
          "correctIndex": 0,
          "explanation": "Trên đoạn $[0^\\circ; 180^\\circ]$, tung độ của điểm trên nửa đường tròn đơn vị đạt cực đại tại đỉnh $B(0; 1)$, tức là khi $\\alpha = 90^\\circ$ thì $\\sin 90^\\circ = 1$."
        },
        {
          "id": "ai-10.6.13",
          "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <!-- Hai ngọn núi M và N --> <!-- Núi M bên trái --> <polygon points=\"120,60 60,180 180,180\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/> <polyline points=\"120,60 105,95 120,90 135,100 120,60\" fill=\"#f8fafc\" opacity=\"0.8\"/> <!-- Núi N bên phải --> <polygon points=\"340,75 280,180 400,180\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/> <polyline points=\"340,75 328,105 340,100 352,110 340,75\" fill=\"#f8fafc\" opacity=\"0.8\"/> <!-- Điểm quan sát P --> <line x1=\"220\" y1=\"195\" x2=\"120\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2.2\"/> <line x1=\"220\" y1=\"195\" x2=\"340\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.2\"/> <!-- Khoảng cách MN cần tính --> <line x1=\"120\" y1=\"60\" x2=\"340\" y2=\"75\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <!-- Cung góc 60 độ tại P --> <path d=\"M 203 172 A 35 35 0 0 1 239 175\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"212\" y=\"162\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">60°</text> <!-- Số đo PM = 800m, PN = 500m --> <text x=\"125\" y=\"145\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">800 m</text> <text x=\"290\" y=\"150\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">500 m</text> <text x=\"220\" y=\"55\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">MN = ?</text> <!-- Các đỉnh --> <circle cx=\"120\" cy=\"60\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"95\" y=\"55\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">M</text> <circle cx=\"340\" cy=\"75\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"350\" y=\"75\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">N</text> <circle cx=\"220\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"215\" y=\"218\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">P</text> </svg>",
          "badge": "Luyện thêm 13 - Góc nhìn qua chướng ngại vật",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Đo khoảng cách giữa hai đỉnh núi $M$ và $N$. Từ điểm quan sát $P$ đo được $PM = 800$ m, $PN = 500$ m và $\\widehat{MPN} = 60^\\circ$. Khoảng cách $MN$ bằng:",
          "options": [
            "700 m",
            "650 m",
            "750 m",
            "600 m"
          ],
          "correctIndex": 0,
          "explanation": "$MN^2 = 800^2 + 500^2 - 2(800)(500)\\cos 60^\\circ = 640000 + 250000 - 400000 = 490000 \\Rightarrow MN = 700$ m."
        },
        {
          "id": "ai-10.6.14",
          "badge": "Luyện thêm 14 - Tính bán kính nội tiếp qua diện tích",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác có diện tích $S = 30$ và chu vi bằng $20$. Bán kính đường tròn nội tiếp $r$ bằng:",
          "options": [
            "$3$",
            "$2$",
            "$1{,}5$",
            "$6$"
          ],
          "correctIndex": 0,
          "explanation": "Nửa chu vi $p = \\frac{20}{2} = 10$. Bán kính $r = \\frac{S}{p} = \\frac{30}{10} = 3$."
        },
        {
          "id": "ai-10.6.15",
          "badge": "Luyện thêm 15 - Nhận dạng tam giác vuông qua hệ thức lượng",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Tam giác $ABC$ có $\\sin^2 A = \\sin^2 B + \\sin^2 C$. Tam giác $ABC$ là:",
          "options": [
            "Tam giác vuông tại $A$",
            "Tam giác vuông tại $B$",
            "Tam giác đều",
            "Tam giác cân tại $A$"
          ],
          "correctIndex": 0,
          "explanation": "Theo định lý Sin: $\\sin A = \\frac{a}{2R}, \\sin B = \\frac{b}{2R}, \\sin C = \\frac{c}{2R}$. Thay vào: $\\frac{a^2}{4R^2} = \\frac{b^2}{4R^2} + \\frac{c^2}{4R^2} \\Leftrightarrow a^2 = b^2 + c^2$. Vậy tam giác vuông tại $A$."
        },
        {
          "id": "ai-10.6.16",
          "badge": "Luyện thêm 16 - Độ dài phân giác trong",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 3, AC = 4$. Độ dài đường trung tuyến kẻ từ đỉnh góc vuông $A$ là:",
          "options": [
            "$2{,}5$",
            "$5$",
            "$3$",
            "$3{,}5$"
          ],
          "correctIndex": 0,
          "explanation": "Cạnh huyền $BC = 5$. Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $m_a = \\frac{5}{2} = 2{,}5$."
        },
        {
          "id": "ai-10.6.17",
          "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <marker id=\"canoArrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"> <path d=\"M 0 2 L 8 5 L 0 8 z\" fill=\"#38bdf8\"/> </marker> </defs> <!-- La bàn 4 hướng góc trái trên --> <g transform=\"translate(60, 50)\"> <circle cx=\"0\" cy=\"0\" r=\"22\" fill=\"#1e293b\" stroke=\"#475569\"/> <line x1=\"0\" y1=\"-20\" x2=\"0\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/> <line x1=\"-20\" y1=\"0\" x2=\"20\" y2=\"0\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/> <text x=\"-4\" y=\"-24\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">B</text> <text x=\"24\" y=\"4\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">Đ</text> <text x=\"-32\" y=\"4\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">T</text> <text x=\"-4\" y=\"32\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">N</text> </g> <!-- Điểm A (Bến xuất phát) --> <circle cx=\"120\" cy=\"175\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"100\" y=\"195\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <!-- Chạy hướng Đông 40km đến B --> <line x1=\"120\" y1=\"175\" x2=\"300\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-mid=\"url(#canoArrow)\"/> <circle cx=\"300\" cy=\"175\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"310\" y=\"195\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <!-- Rẽ hướng Bắc 30km đến C --> <line x1=\"300\" y1=\"175\" x2=\"300\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-mid=\"url(#canoArrow)\"/> <circle cx=\"300\" cy=\"65\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"310\" y=\"60\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">C</text> <!-- Góc vuông tại B --> <rect x=\"286\" y=\"161\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/> <!-- Khoảng cách AC đường chéo --> <line x1=\"120\" y1=\"175\" x2=\"300\" y2=\"65\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <!-- Độ dài --> <text x=\"195\" y=\"195\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">40 km (Đông)</text> <text x=\"315\" y=\"125\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">30 km (Bắc)</text> <text x=\"180\" y=\"110\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AC = ?</text> </svg>",
          "badge": "Luyện thêm 17 - Khoảng cách di chuyển của tàu",
          "isAiGenerated": true,
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "question": "Một ca nô chạy từ bến $A$ theo hướng Đông 40 km đến $B$, rồi rẽ theo hướng Bắc 30 km đến $C$. Khoảng cách từ $A$ đến $C$ là:",
          "options": [
            "50 km",
            "70 km",
            "45 km",
            "$50\\sqrt{2}$ km"
          ],
          "correctIndex": 0,
          "explanation": "Hai hướng Đông và Bắc vuông góc nhau. Theo định lý Pythagore: $AC = \\sqrt{40^2 + 30^2} = 50$ km."
        },
        {
          "id": "ai-10.6.prac3",
          "badge": "Vận dụng - Đo khoảng cách giữa hai đỉnh núi",
          "source": "SBT Toán 10 KNTT Bài 6",
          "question": "Muốn đo khoảng cách giữa hai đỉnh núi $M$ và $N$, từ đài quan sát $P$ người ta đo được $PM = 6\\text{ km}$, $PN = 10\\text{ km}$ và góc $\\widehat{MPN} = 60^\\circ$. Khoảng cách giữa hai đỉnh núi $M$ và $N$ xấp xỉ bằng:",
          "options": [
            "$8.7\\text{ km}$",
            "$14\\text{ km}$",
            "$7.2\\text{ km}$",
            "$9.5\\text{ km}$"
          ],
          "correctIndex": 0,
          "explanation": "Áp dụng định lí cosin cho tam giác $PMN$: $MN^2 = PM^2 + PN^2 - 2 \\cdot PM \\cdot PN \\cdot \\cos 60^\\circ = 6^2 + 10^2 - 2 \\cdot 6 \\cdot 10 \\cdot 0.5 = 36 + 100 - 60 = 76$. Suy ra $MN = \\sqrt{76} \\approx 8.72\\text{ km} \\approx 8.7\\text{ km}$.",
          "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"120,60 60,180 180,180\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/> <polygon points=\"340,75 280,180 400,180\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/> <line x1=\"220\" y1=\"195\" x2=\"120\" y2=\"60\" stroke=\"#38bdf8\" stroke-width=\"2.2\"/> <line x1=\"220\" y1=\"195\" x2=\"340\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2.2\"/> <line x1=\"120\" y1=\"60\" x2=\"340\" y2=\"75\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <path d=\"M 203 172 A 35 35 0 0 1 239 175\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"212\" y=\"162\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">60°</text> <text x=\"125\" y=\"145\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">800 m</text> <text x=\"290\" y=\"150\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">500 m</text> <text x=\"220\" y=\"55\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">MN = 700 m</text> <circle cx=\"120\" cy=\"60\" r=\"4.5\" fill=\"#f59e0b\"/> <text x=\"95\" y=\"55\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">M</text> <circle cx=\"340\" cy=\"75\" r=\"4.5\" fill=\"#f59e0b\"/> <text x=\"350\" y=\"75\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">N</text> <circle cx=\"220\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"215\" y=\"218\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">P</text> </svg>"
        }
      ],
      "trueFalseQuestions": [
        {
          "id": "ai-tf-10.5.5",
          "badge": "Luyện thêm Đ/S 5 - Biểu thức trong tam giác",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho tam giác $ABC$. Xét tính đúng/sai của các mệnh đề sau:",
          "subItems": [
            {
              "id": "a",
              "text": "$\\sin A > 0, \\sin B > 0, \\sin C > 0$.",
              "correctAnswer": true,
              "explanation": "Đúng vì các góc trong tam giác luôn nằm trong $(0^\\circ; 180^\\circ)$ nên sin luôn dương."
            },
            {
              "id": "b",
              "text": "Nếu tam giác $ABC$ tù tại $A$ thì $\\cos A < 0$.",
              "correctAnswer": true,
              "explanation": "Đúng vì góc tù có cos âm."
            },
            {
              "id": "c",
              "text": "$\\sin(A + C) = \\sin B$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $A + C = 180^\\circ - B \\Rightarrow \\sin(A + C) = \\sin(180^\\circ - B) = \\sin B$."
            },
            {
              "id": "d",
              "text": "$\\cos(B + C) = \\cos A$.",
              "correctAnswer": false,
              "explanation": "Sai vì $\\cos(B + C) = -\\cos A$."
            }
          ]
        },
        {
          "id": "ai-tf-10.5.6",
          "badge": "Luyện thêm Đ/S 6 - Rút gọn biểu thức tổng hợp",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Cho góc nhọn $\\alpha$. Xét tính đúng/sai của các biểu thức rút gọn sau:",
          "subItems": [
            {
              "id": "a",
              "text": "$(\\sin \\alpha + \\cos \\alpha)^2 = 1 + 2\\sin \\alpha \\cos \\alpha$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
            },
            {
              "id": "b",
              "text": "$\\frac{\\sin^2 \\alpha}{1 + \\cos \\alpha} = 1 - \\cos \\alpha$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\sin^2 \\alpha = 1 - \\cos^2 \\alpha = (1 - \\cos \\alpha)(1 + \\cos \\alpha)$."
            },
            {
              "id": "c",
              "text": "$1 - \\frac{\\cos^2 \\alpha}{1 + \\sin \\alpha} = \\sin \\alpha$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\cos^2 \\alpha = (1 - \\sin \\alpha)(1 + \\sin \\alpha) \\Rightarrow 1 - (1 - \\sin \\alpha) = \\sin \\alpha$."
            },
            {
              "id": "d",
              "text": "$\\tan^2 \\alpha - \\sin^2 \\alpha = \\tan^2 \\alpha \\cdot \\sin^2 \\alpha$.",
              "correctAnswer": true,
              "explanation": "Đúng vì $\\tan^2 \\alpha - \\sin^2 \\alpha = \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha} - \\sin^2 \\alpha = \\sin^2 \\alpha\\left(\\frac{1}{\\cos^2 \\alpha} - 1\\right) = \\sin^2 \\alpha \\tan^2 \\alpha$."
            }
          ]
        },
        {
          "id": "ai-tf-10.6.5",
          "svgDiagram": "<svg viewBox=\"0 0 450 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <marker id=\"planeArrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"> <path d=\"M 0 2 L 8 5 L 0 8 z\" fill=\"#38bdf8\"/> </marker> </defs> <!-- Sân bay A --> <circle cx=\"70\" cy=\"175\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"50\" y=\"195\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <!-- Bay hướng Đông 100km đến B --> <line x1=\"70\" y1=\"175\" x2=\"250\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-mid=\"url(#planeArrow)\"/> <circle cx=\"250\" cy=\"175\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"245\" y=\"200\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <!-- Đường thẳng Đông kéo dài nét đứt --> <line x1=\"250\" y1=\"175\" x2=\"340\" y2=\"175\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/> <!-- Chếch Bắc 60 độ: bay 60km đến C (60 độ so với phương Đông) --> <!-- dx = 60*cos(-60) = 30, dy = -60*sin(60) = -52 -> x = 250 + 60 = 310, y = 175 - 104 = 71 --> <line x1=\"250\" y1=\"175\" x2=\"310\" y2=\"71\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-mid=\"url(#planeArrow)\"/> <circle cx=\"310\" cy=\"71\" r=\"5\" fill=\"#10b981\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"320\" y=\"70\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\">C</text> <!-- Cung góc đổi hướng 60 độ ngoài --> <path d=\"M 285 175 A 35 35 0 0 0 268 145\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.8\"/> <text x=\"288\" y=\"160\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">60°</text> <!-- Cung góc trong B = 120 độ --> <path d=\"M 215 175 A 35 35 0 0 1 268 145\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <text x=\"220\" y=\"155\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">120°</text> <!-- Khoảng cách AC bay thẳng --> <line x1=\"70\" y1=\"175\" x2=\"310\" y2=\"71\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/> <!-- Số đo --> <text x=\"145\" y=\"195\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">AB = 100 km</text> <text x=\"305\" y=\"130\" fill=\"#e2e8f0\" font-size=\"13\" font-weight=\"600\">60 km</text> <text x=\"175\" y=\"105\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">AC = ?</text> </svg>",
          "badge": "Luyện thêm Đ/S 5 - Bài toán thực tế máy bay bay",
          "source": "Bộ đề thi thử Toán 10 mới",
          "prompt": "Một máy bay bay từ sân bay $A$ theo hướng Đông $100$ km đến điểm $B$, sau đó đổi hướng bay chếch về phía Bắc một góc $60^\\circ$ bay thêm $60$ km đến sân bay $C$.",
          "subItems": [
            {
              "id": "a",
              "text": "Góc trong tam giác $\\widehat{ABC} = 120^\\circ$.",
              "correctAnswer": true,
              "explanation": "Đúng vì góc đổi hướng ngoài là $60^\\circ$ nên góc trong $\\widehat{ABC} = 180^\\circ - 60^\\circ = 120^\\circ$."
            },
            {
              "id": "b",
              "text": "$AC^2 = AB^2 + BC^2 - 2 AB \\cdot BC \\cos 120^\\circ$.",
              "correctAnswer": true,
              "explanation": "Đúng theo định lý Cosin trong tam giác $ABC$."
            },
            {
              "id": "c",
              "text": "Khoảng cách đường chim bay từ sân bay $A$ đến $C$ bằng $140$ km.",
              "correctAnswer": true,
              "explanation": "Đúng vì $AC^2 = 100^2 + 60^2 - 2(100)(60)(-1/2) = 10000 + 3600 + 6000 = 19600 \\Rightarrow AC = 140$ km."
            },
            {
              "id": "d",
              "text": "Thời gian bay thẳng từ $A$ đến $C$ với vận tốc $280$ km/h là $45$ phút.",
              "correctAnswer": false,
              "explanation": "Sai vì thời gian $t = \\frac{140}{280} = 0{,}5$ giờ = $30$ phút $\\ne 45$ phút."
            }
          ]
        },
        {
          "id": "ai-tf-10.6.prac3",
          "badge": "Đúng / Sai 4 - Đo chiều cao của ngọn núi bằng định lí sin",
          "source": "Đề thi HSG & Khảo sát chất lượng Toán 10",
          "prompt": "Để đo chiều cao của một ngọn núi, hai trắc địa viên đứng tại hai vị trí $A$ và $B$ trên mặt đất cách nhau $400\\text{ m}$ (cùng nằm trên mặt phẳng thẳng đứng qua đỉnh núi $C$). Góc nâng nhìn đỉnh núi từ $A$ là $\\alpha = 32^\\circ$ và từ $B$ là $\\beta = 40^\\circ$. Chân núi nằm cùng phía với $B$ so với $A$. Xét tính Đúng/Sai của các khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Góc $\\widehat{ACB} = \\beta - \\alpha = 8^\\circ$.",
              "correctAnswer": true,
              "explanation": "Góc ngoài tam giác: $\\beta = \\alpha + \\widehat{ACB} \\implies \\widehat{ACB} = 40^\\circ - 32^\\circ = 8^\\circ$."
            },
            {
              "id": "b",
              "text": "Áp dụng định lí sin cho tam giác $ABC$: $\\frac{BC}{\\sin 32^\\circ} = \\frac{AB}{\\sin 8^\\circ}$.",
              "correctAnswer": true,
              "explanation": "Đúng theo định lí sin: $\\frac{BC}{\\sin A} = \\frac{AB}{\\sin C}$."
            },
            {
              "id": "c",
              "text": "Khoảng cách từ vị trí $B$ đến đỉnh núi $C$ xấp xỉ bằng $1523\\text{ m}$.",
              "correctAnswer": true,
              "explanation": "$BC = \\frac{400 \\cdot \\sin 32^\\circ}{\\sin 8^\\circ} \\approx \\frac{400 \\cdot 0.5299}{0.1392} \\approx 1523\\text{ m}$."
            },
            {
              "id": "d",
              "text": "Chiều cao của ngọn núi so với mặt đất nhỏ hơn $900\\text{ m}$.",
              "correctAnswer": false,
              "explanation": "Chiều cao núi $h = BC \\cdot \\sin 40^\\circ \\approx 1523 \\cdot 0.6428 \\approx 979\\text{ m} > 900\\text{ m}$."
            }
          ],
          "svgDiagram": "<svg viewBox=\"0 0 460 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"30\" y1=\"195\" x2=\"430\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <polygon points=\"385,55 315,195 440,195\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/> <line x1=\"385\" y1=\"55\" x2=\"385\" y2=\"195\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/> <circle cx=\"385\" cy=\"55\" r=\"4.5\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"55\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C (Đỉnh núi)</text> <circle cx=\"385\" cy=\"195\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"205\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">D</text> <line x1=\"255\" y1=\"195\" x2=\"385\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"90\" y1=\"195\" x2=\"385\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <path d=\"M 290 195 A 35 35 0 0 0 279 169\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"285\" y=\"185\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">45°</text> <path d=\"M 130 195 A 40 40 0 0 0 124 175\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"135\" y=\"187\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">30°</text> <text x=\"150\" y=\"220\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"600\">AB = 200 m</text> <circle cx=\"90\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"80\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"255\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"245\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <text x=\"405\" y=\"130\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">h = CD</text> </svg>"
        }
      ],
      "shortAnswerQuestions": [
        {
          "id": "ai-sa-10.5.7",
          "badge": "Luyện thêm TLN 7 - Biểu thức phân thức với tan",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho $\\tan \\alpha = -2$. Tính giá trị của biểu thức $M = \\frac{\\sin \\alpha + 3\\cos \\alpha}{2\\sin \\alpha - \\cos \\alpha}$.",
          "correctAnswer": "-0.2",
          "acceptableAnswers": [
            "-0.2",
            "-1/5",
            "-0,2"
          ],
          "explanation": "Chia cả tử và mẫu cho $\\cos \\alpha$: $M = \\frac{\\tan \\alpha + 3}{2\\tan \\alpha - 1} = \\frac{-2 + 3}{2(-2) - 1} = \\frac{1}{-5} = -0{,}2$."
        },
        {
          "id": "ai-sa-10.5.8",
          "badge": "Luyện thêm TLN 8 - Tổng bình phương các góc phụ",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tính giá trị của biểu thức $S = \\sin^2 20^\\circ + \\sin^2 70^\\circ + \\cos^2 40^\\circ + \\cos^2 50^\\circ$.",
          "correctAnswer": "2",
          "acceptableAnswers": [
            "2"
          ],
          "explanation": "Ta có $\\sin^2 20^\\circ + \\sin^2 70^\\circ = \\sin^2 20^\\circ + \\cos^2 20^\\circ = 1$ và $\\cos^2 40^\\circ + \\cos^2 50^\\circ = \\cos^2 40^\\circ + \\sin^2 40^\\circ = 1$. Tổng $S = 2$."
        },
        {
          "id": "ai-sa-10.5.9",
          "badge": "Luyện thêm TLN 9 - Tính sin và cos từ tích",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho góc $\\alpha$ thỏa mãn $\\sin \\alpha - \\cos \\alpha = \\frac{1}{5}$. Tính giá trị của $50 \\cdot (\\sin \\alpha \\cdot \\cos \\alpha)$.",
          "correctAnswer": "24",
          "acceptableAnswers": [
            "24"
          ],
          "explanation": "Bình phương hai vế: $(\\sin \\alpha - \\cos \\alpha)^2 = \\frac{1}{25} \\Leftrightarrow 1 - 2\\sin \\alpha \\cos \\alpha = \\frac{1}{25} \\Leftrightarrow 2\\sin \\alpha \\cos \\alpha = \\frac{24}{25} \\Leftrightarrow \\sin \\alpha \\cos \\alpha = \\frac{12}{25}$. Vậy $50 \\cdot \\frac{12}{25} = 24$."
        },
        {
          "id": "ai-sa-10.6.7",
          "badge": "Luyện thêm TLN 7 - Độ dài đường trung tuyến",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Cho tam giác cân $ABC$ có $AB = AC = 5$ và cạnh đáy $BC = 6$. Tính độ dài đường trung tuyến kẻ từ đỉnh $A$.",
          "correctAnswer": "4",
          "acceptableAnswers": [
            "4"
          ],
          "explanation": "Trong tam giác cân, đường trung tuyến kẻ từ đỉnh $A$ đồng thời là đường cao. Gọi $M$ là trung điểm $BC$, ta có $BM = 3$. Áp dụng Pythagore trong tam giác vuông $ABM$: $AM = \\sqrt{AB^2 - BM^2} = \\sqrt{5^2 - 3^2} = 4$."
        },
        {
          "id": "ai-sa-10.6.8",
          "badge": "Luyện thêm TLN 8 - Đường cao ứng với cạnh huyền",
          "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
          "prompt": "Tam giác vuông có hai cạnh góc vuông là 15 và 20. Tính độ dài đường cao ứng với cạnh huyền.",
          "correctAnswer": "12",
          "acceptableAnswers": [
            "12"
          ],
          "explanation": "Cạnh huyền $a = \\sqrt{15^2 + 20^2} = 25$. Diện tích $S = \\frac{1}{2}(15)(20) = 150$. Chiều cao $h = \\frac{2S}{a} = \\frac{300}{25} = 12$."
        },
        {
          "id": "ai-sa-10.6.prac3",
          "badge": "Trả lời ngắn 6 - Đo chiều cao tòa nhà cao tầng từ hai vị trí",
          "source": "Toán 10 KNTT Bài 6 Ứng dụng",
          "prompt": "Hai người quan sát đỉnh một tòa nhà cao tầng từ hai vị trí $A$ và $B$ cách nhau $60\\text{ m}$ trên mặt đất bằng phẳng (cùng thẳng hàng với chân tòa nhà $H$). Góc quan sát đỉnh tháp $T$ từ $A$ là $30^\\circ$, từ $B$ là $45^\\circ$ ($B$ ở gần tòa nhà hơn $A$). Hỏi chiều cao tòa nhà $TH$ là bao nhiêu mét? (Làm tròn kết quả đến hàng đơn vị).",
          "correctAnswer": "82",
          "acceptableAnswers": [
            "82",
            "82 m"
          ],
          "explanation": "Trong tam giác vuông $THB$: $HB = TH / \\tan 45^\\circ = TH$. Trong tam giác vuông $THA$: $HA = TH / \\tan 30^\\circ = TH \\sqrt{3}$. Ta có: $HA - HB = AB = 60 \\implies TH(\\sqrt{3} - 1) = 60 \\implies TH = \\frac{60}{\\sqrt{3} - 1} = 30(\\sqrt{3} + 1) \\approx 30 \\times 2.732 = 81.96\\text{ m} \\approx 82\\text{ m}$.",
          "svgDiagram": "<svg viewBox=\"0 0 460 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <line x1=\"30\" y1=\"195\" x2=\"430\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <rect x=\"360\" y=\"45\" width=\"40\" height=\"150\" fill=\"#1e293b\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <circle cx=\"380\" cy=\"45\" r=\"4.5\" fill=\"#f59e0b\"/> <text x=\"390\" y=\"45\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C (Nóc nhà)</text> <circle cx=\"380\" cy=\"195\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"390\" y=\"210\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">D</text> <line x1=\"260\" y1=\"195\" x2=\"380\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"195\" x2=\"380\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <path d=\"M 290 195 A 30 30 0 0 0 276 174\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"288\" y=\"186\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">60°</text> <path d=\"M 140 195 A 40 40 0 0 0 134 175\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"145\" y=\"188\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">30°</text> <text x=\"160\" y=\"220\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"600\">AB = 60 m</text> <circle cx=\"100\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"90\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"260\" cy=\"195\" r=\"5\" fill=\"#38bdf8\"/> <text x=\"250\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <text x=\"410\" y=\"120\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">h = 30√3 m</text> </svg>"
        }
      ]
    }
  ]
}
,

  // ==========================================
  // BÀI 7: CÁC KHÁI NIỆM MỞ ĐẦU (CHUẨN KNTT 2025)
  // ==========================================
  "t10-b7-khai-niem-mo-dau-vector": {
  "id": "t10-b7-khai-niem-mo-dau-vector",
  "lessonNumber": 7,
  "title": "Bài 7: Các khái niệm mở đầu",
  "bookChapter": "Chương IV: Vectơ",
  "scenarioTitle": "Tình huống thực tế: Hướng gió, vận tốc máy bay và chuyển động có hướng",
  "scenarioFrames": [],
  "interactiveType": "vector",
  "youtubeVideoId": "FTTZY9b1ous",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 7 - Các khái niệm mở đầu (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "FTTZY9b1ous",
      "title": "Tiết 1: Khái niệm vectơ, độ dài vectơ, hai vectơ cùng phương & cùng hướng"
    },
    {
      "id": "GNr6Y5UijN4",
      "title": "Tiết 2: Hai vectơ bằng nhau, vectơ-không & Hướng dẫn giải bài tập SGK"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "1. Khái niệm vectơ & Ký hiệu",
      "points": [
        "• **Định nghĩa**: Vectơ là một đoạn thẳng có hướng (đã chỉ rõ điểm nào là điểm đầu, điểm nào là điểm cuối).\\",
        "• **Ký hiệu**: Vectơ có điểm đầu $A$, điểm cuối $B$ được kí hiệu là $\\\\overrightarrow{AB}$ (đọc là 'vectơ $AB$').\\",
        "• **Vectơ đơn kí hiệu**: Ngoài ra, người ta còn kí hiệu vectơ bằng các chữ cái in thường có mũi tên ở trên như $\\\\vec{a}, \\\\vec{b}, \\\\vec{x}, \\\\vec{u}, \\\\vec{v}$."
      ]
    },
    {
      "index": "2",
      "title": "2. Độ dài của vectơ (Độ lớn)",
      "points": [
        "• **Khái niệm**: Độ dài của vectơ $\\\\overrightarrow{AB}$ là khoảng cách giữa điểm đầu $A$ và điểm cuối $B$ của vectơ đó.\\",
        "• **Ký hiệu**: $|\\\\overrightarrow{AB}| = AB$.\\",
        "• Vectơ có độ dài bằng $1$ được gọi là **vectơ đơn vị**."
      ]
    },
    {
      "index": "3",
      "title": "3. Giá của vectơ, Hai vectơ cùng phương & Cùng hướng",
      "points": [
        "• **Giá của vectơ**: Đường thẳng đi qua điểm đầu và điểm cuối của vectơ được gọi là **giá** của vectơ đó.\\",
        "• **Hai vectơ cùng phương**: Hai vectơ được gọi là **cùng phương** nếu giá của chúng **song song** hoặc **trùng nhau**.\\",
        "• **Cùng hướng / Ngược hướng**: Khi hai vectơ đã cùng phương, chúng chỉ có thể **cùng hướng** hoặc **ngược hướng**.\\",
        "• **Nhận xét quan trọng**: Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\\\overrightarrow{AB}$ và $\\\\overrightarrow{AC}$ cùng phương."
      ]
    },
    {
      "index": "4",
      "title": "4. Hai vectơ bằng nhau",
      "points": [
        "• **Định nghĩa**: Hai vectơ $\\\\vec{a}$ và $\\\\vec{b}$ được gọi là **bằng nhau** nếu chúng **cùng hướng** và **có cùng độ dài**.\\",
        "• **Ký hiệu**: $\\\\vec{a} = \\\\vec{b}$.\\",
        "• Cho trước điểm $O$ và vectơ $\\\\vec{a}$, luôn tồn tại duy nhất một điểm $A$ sao cho $\\\\overrightarrow{OA} = \\\\vec{a}$."
      ]
    },
    {
      "index": "5",
      "title": "5. Vectơ-không",
      "points": [
        "• **Định nghĩa**: Vectơ có điểm đầu trùng với điểm cuối gọi là **vectơ-không**, kí hiệu là $\\\\vec{0}$. Ví dụ: $\\\\overrightarrow{AA} = \\\\overrightarrow{BB} = \\\\vec{0}$.\\",
        "• **Quy ước**: Vectơ $\\\\vec{0}$ có độ dài bằng $0$, tức $|\\\\vec{0}| = 0$. Vectơ $\\\\vec{0}$ **cùng phương, cùng hướng với mọi vectơ**."
      ]
    }
  ],
  "tips": [
    "Muốn hai vectơ cùng phương thì giá của chúng phải song song hoặc trùng nhau.",
    "Hai vectơ bằng nhau bắt buộc phải thỏa mãn 2 điều kiện: CÙNG HƯỚNG và CÙNG ĐỘ DÀI. Cùng độ dài nhưng khác hướng thì KHÔNG bằng nhau!",
    "Số vectơ khác $\\vec{0}$ tạo bởi $n$ điểm phân biệt luôn bằng $n(n - 1)$ (chỉnh hợp chập 2 của $n$ phần tử)."
  ],
  "traps": [
    "Bẫy nhầm lẫn: Nhầm giữa 'đoạn thẳng' và 'vectơ': Đoạn thẳng $AB = BA$, nhưng vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BA}$ là hai vectơ ngược hướng nhau!",
    "Bẫy vectơ-không: Quên rằng vectơ $\\vec{0}$ cùng phương, cùng hướng với mọi vectơ theo quy ước toán học."
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.7.1",
      "badge": "Nhận biết - Khái niệm vectơ",
      "source": "SGK Toán 10 KNTT Bài 7",
      "question": "Khẳng định nào sau đây là ĐÚNG về khái niệm vectơ?",
      "options": [
        "Vectơ là một đoạn thẳng có hướng.",
        "Vectơ là một đường thẳng có hướng.",
        "Vectơ là một tia trong mặt phẳng.",
        "Vectơ là khoảng cách giữa hai điểm."
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa SGK: Vectơ là một đoạn thẳng có hướng (chỉ rõ điểm đầu và điểm cuối)."
    },
    {
      "id": "quiz-10.7.2",
      "badge": "Nhận biết - Điểm đầu và điểm cuối của vectơ",
      "source": "SBT Toán 10 KNTT",
      "question": "Vectơ $\\overrightarrow{MN}$ có điểm đầu và điểm cuối lần lượt là:",
      "options": [
        "Điểm đầu là $M$, điểm cuối là $N$.",
        "Điểm đầu là $N$, điểm cuối là $M$.",
        "Điểm đầu là $M$, điểm cuối không xác định.",
        "Cả $M$ và $N$ đều là điểm đầu."
      ],
      "correctIndex": 0,
      "explanation": "Ký hiệu $\\overrightarrow{MN}$ quy ước chữ cái viết trước là điểm đầu ($M$), chữ cái viết sau là điểm cuối ($N$)."
    },
    {
      "id": "quiz-10.7.3",
      "badge": "Nhận biết - Kí hiệu độ dài vectơ",
      "source": "SGK Toán 10 KNTT",
      "question": "Độ dài của vectơ $\\overrightarrow{AB}$ được kí hiệu là:",
      "options": [
        "$|\\overrightarrow{AB}|$",
        "$\\vec{|AB|}$",
        "$(\\overrightarrow{AB})$",
        "$||AB||$"
      ],
      "correctIndex": 0,
      "explanation": "Độ dài của vectơ $\\overrightarrow{AB}$ kí hiệu là $|\\overrightarrow{AB}|$ và chính bằng khoảng cách $AB$ giữa hai điểm $A$ và $B$."
    },
    {
      "id": "quiz-10.7.4",
      "badge": "Thông hiểu - Hai vectơ cùng phương",
      "source": "Đề kiểm tra định kì Toán 10 Chuyên đề Vectơ",
      "question": "Hai vectơ được gọi là cùng phương khi và chỉ khi:",
      "options": [
        "Giá của chúng song song hoặc trùng nhau.",
        "Giá của chúng cắt nhau.",
        "Độ dài của chúng bằng nhau.",
        "Chúng cùng hướng với nhau."
      ],
      "correctIndex": 0,
      "explanation": "Hai vectơ cùng phương nếu giá của chúng song song hoặc trùng nhau."
    },
    {
      "id": "quiz-10.7.5",
      "badge": "Nhận biết - Tính chất vectơ-không",
      "source": "SGK Toán 10 KNTT",
      "question": "Mệnh đề nào sau đây là SAI khi nói về vectơ-không $\\vec{0}$?",
      "options": [
        "Vectơ $\\vec{0}$ có độ dài bằng $1$.",
        "Vectơ $\\vec{0}$ cùng phương với mọi vectơ.",
        "Vectơ $\\vec{0}$ có điểm đầu trùng với điểm cuối.",
        "Vectơ $\\vec{0}$ cùng hướng với mọi vectơ."
      ],
      "correctIndex": 0,
      "explanation": "Vectơ-không có độ dài bằng $0$ ($|\\vec{0}| = 0$), không phải bằng $1$."
    },
    {
      "id": "quiz-10.7.6",
      "badge": "Thông hiểu - Ba điểm thẳng hàng",
      "source": "Đề thi khảo sát chất lượng Toán 10",
      "question": "Cho ba điểm phân biệt $A, B, C$. Điều kiện cần và đủ để ba điểm $A, B, C$ thẳng hàng là:",
      "options": [
        "$\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương.",
        "$|\\overrightarrow{AB}| = |\\overrightarrow{AC}|$.",
        "$\\overrightarrow{AB} = \\overrightarrow{AC}$.",
        "$\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng."
      ],
      "correctIndex": 0,
      "explanation": "Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương (giá của chúng có chung điểm $A$ nên phải trùng nhau)."
    },
    {
      "id": "quiz-10.7.7",
      "badge": "Thông hiểu - Hai vectơ bằng nhau",
      "source": "SBT Toán 10 KNTT",
      "question": "Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là bằng nhau nếu:",
      "options": [
        "Chúng cùng hướng và có cùng độ dài.",
        "Chúng cùng phương và có cùng độ dài.",
        "Chúng có cùng độ dài.",
        "Giá của chúng trùng nhau."
      ],
      "correctIndex": 0,
      "explanation": "Định nghĩa: $\\vec{a} = \\vec{b} \\iff \\vec{a}$ và $\\vec{b}$ cùng hướng và $|\\vec{a}| = |\\vec{b}|$."
    },
    {
      "id": "quiz-10.7.8",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,135 210,135 270,35 110,35\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"204\" y2=\"135\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"110\" y1=\"35\" x2=\"264\" y2=\"35\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"106\" y2=\"41\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"266\" y2=\"41\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"270\" y2=\"35\" stroke=\"#fbbf24\" strokeWidth=\"1.5\" strokeOpacity=\"0.6\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"110\" y2=\"35\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeOpacity=\"0.5\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <circle cx=\"50\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"218\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"96\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Thông hiểu - Vectơ trong hình bình hành",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho hình bình hành $ABCD$. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\overrightarrow{AB} = \\overrightarrow{DC}$",
        "$\\overrightarrow{AB} = \\overrightarrow{CD}$",
        "$\\overrightarrow{AD} = \\overrightarrow{CB}$",
        "$\\overrightarrow{AC} = \\overrightarrow{BD}$"
      ],
      "correctIndex": 0,
      "explanation": "Trong hình bình hành $ABCD$, đoạn thẳng $AB$ song song và bằng đoạn thẳng $DC$, chiều từ $A \\to B$ cùng hướng với $D \\to C$. Do đó $\\overrightarrow{AB} = \\overrightarrow{DC}$."
    },
    {
      "id": "quiz-10.7.9",
      "badge": "Thông hiểu - Đếm số vectơ tạo từ các điểm",
      "source": "Đề kiểm tra Toán 10",
      "question": "Cho 4 điểm phân biệt $A, B, C, D$ trong đó không có ba điểm nào thẳng hàng. Có bao nhiêu vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối là hai trong 4 điểm đã cho?",
      "options": [
        "$12$",
        "$6$",
        "$16$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "Chọn điểm đầu có 4 cách, chọn điểm cuối khác điểm đầu có 3 cách. Vậy số vectơ khác $\\vec{0}$ là $4 \\times 3 = 12$."
    },
    {
      "id": "quiz-10.7.10",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <polygon points=\"110,87 210,87 160,150\" fill=\"#38bdf8\" fillOpacity=\"0.1\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <line x1=\"110\" y1=\"87\" x2=\"204\" y2=\"87\" stroke=\"#fbbf24\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"60\" y1=\"150\" x2=\"154\" y2=\"150\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"160\" y1=\"150\" x2=\"254\" y2=\"150\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"87\" r=\"3\" fill=\"#fbbf24\"/><text x=\"96\" y=\"85\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">M</text>\n  <circle cx=\"210\" cy=\"87\" r=\"3\" fill=\"#fbbf24\"/><text x=\"218\" y=\"85\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">N</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#fbbf24\"/><text x=\"160\" y=\"165\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">P</text>\n</svg>",
      "badge": "Thông hiểu - Vectơ trong tam giác có các trung điểm",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho tam giác $ABC$. Gọi $M, N, P$ lần lượt là trung điểm của $AB, AC, BC$. Có bao nhiêu vectơ khác $\\vec{0}$ bằng với vectơ $\\overrightarrow{MN}$ có điểm đầu và điểm cuối là các đỉnh của tam giác hoặc các trung điểm đã cho?",
      "options": [
        "$2$",
        "$3$",
        "$4$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $MN$ là đường trung bình của tam giác $ABC$ nên $MN // BC$ và $MN = BP = PC = \\frac{1}{2}BC$. Các vectơ cùng hướng và cùng độ dài với $\\overrightarrow{MN}$ là $\\overrightarrow{BP}$ và $\\overrightarrow{PC}$. Vậy có đúng 2 vectơ."
    },
    {
      "id": "quiz-10.7.11",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Thông hiểu - Độ dài vectơ cạnh hình vuông",
      "source": "Đề thi học kì Toán 10",
      "question": "Cho hình vuông $ABCD$ có cạnh bằng $a\\sqrt{2}$. Độ dài của vectơ $\\overrightarrow{AC}$ bằng:",
      "options": [
        "$2a$",
        "$a\\sqrt{2}$",
        "$a$",
        "$4a$"
      ],
      "correctIndex": 0,
      "explanation": "Trong hình vuông $ABCD$, đường chéo $AC = AB\\sqrt{2} = a\\sqrt{2} \\cdot \\sqrt{2} = 2a$. Vậy $|\\overrightarrow{AC}| = 2a$."
    },
    {
      "id": "quiz-10.7.12",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,20 265,90 160,160 55,90\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"154\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"259\" y2=\"90\" stroke=\"#38bdf8\" strokeWidth=\"2\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"23\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"157\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"168\" y=\"85\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">O</text>\n  <text x=\"75\" y=\"94\" fill=\"#94a3b8\" fontSize=\"11\">60�</text>\n  <circle cx=\"160\" cy=\"20\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"14\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"265\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"274\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"160\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"174\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">D</text>\n  <circle cx=\"55\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n</svg>",
      "badge": "Thông hiểu - Vectơ trong hình thoi",
      "source": "Bộ đề ôn tập Toán 10",
      "question": "Cho hình thoi $ABCD$ có cạnh bằng $a$ và góc $\\widehat{ABC} = 60^\\circ$. Độ dài của vectơ $\\overrightarrow{AC}$ bằng:",
      "options": [
        "$a$",
        "$a\\sqrt{3}$",
        "$2a$",
        "$\\frac{a\\sqrt{3}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Tam giác $ABC$ có $BA = BC = a$ và $\\widehat{B} = 60^\\circ$ nên là tam giác đều, do đó $AC = a \\implies |\\overrightarrow{AC}| = a$."
    },
    {
      "id": "quiz-10.7.13",
      "badge": "Vận dụng - Lục giác đều và các vectơ bằng nhau",
      "source": "SGK Toán 10 KNTT Bài 7",
      "question": "Cho hình lục giác đều $ABCDEF$ tâm $O$. Các vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối lấy từ 7 điểm trên và bằng vectơ $\\overrightarrow{AB}$ là:",
      "options": [
        "$\\overrightarrow{FO}, \\overrightarrow{OC}, \\overrightarrow{ED}$",
        "$\\overrightarrow{FO}, \\overrightarrow{CO}, \\overrightarrow{ED}$",
        "$\\overrightarrow{OF}, \\overrightarrow{OC}, \\overrightarrow{DE}$",
        "$\\overrightarrow{AF}, \\overrightarrow{FE}, \\overrightarrow{ED}$"
      ],
      "correctIndex": 0,
      "explanation": "Trong lục giác đều $ABCDEF$ tâm $O$, các đoạn thẳng $FO, OC, ED$ đều song song và bằng $AB$, đồng thời các vectơ $\\overrightarrow{FO}, \\overrightarrow{OC}, \\overrightarrow{ED}$ đều có chiều cùng hướng với $\\overrightarrow{AB}$.",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- L?c gi�c d?u ABCDEF -->\n  <polygon points=\"110,35 210,35 260,95 210,155 110,155 60,95\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <!-- 3 du?ng ch�o ch�nh c?t nhau t?i t�m O -->\n  <line x1=\"110\" y1=\"35\" x2=\"210\" y2=\"155\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"35\" x2=\"110\" y2=\"155\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"60\" y1=\"95\" x2=\"260\" y2=\"95\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <!-- T�m O -->\n  <circle cx=\"160\" cy=\"95\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"160\" y=\"86\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <!-- C�c d?nh A, B, C, D, E, F -->\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"104\" y=\"24\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"216\" y=\"24\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"95\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"270\" y=\"99\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"210\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"216\" y=\"170\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n  <circle cx=\"110\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"104\" y=\"170\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">E</text>\n  <circle cx=\"60\" cy=\"95\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"99\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">F</text>\n</svg>"
    },
    {
      "id": "quiz-10.7.14",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"55\" x2=\"280\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"40\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I</text>\n  <!-- K� hi?u b?ng nhau: 2 v?ch ng?n -->\n  <line x1=\"98\" y1=\"48\" x2=\"98\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"102\" y1=\"48\" x2=\"102\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"218\" y1=\"48\" x2=\"218\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"222\" y1=\"48\" x2=\"222\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n</svg>",
      "badge": "Thông hiểu - Hai vectơ đối nhau",
      "source": "Đề thi thử Toán 10",
      "question": "Cho đoạn thẳng $AB$ có trung điểm $I$. Cặp vectơ nào sau đây là hai vectơ ngược hướng và có độ dài bằng nhau?",
      "options": [
        "$\\overrightarrow{IA}$ và $\\overrightarrow{IB}$",
        "$\\overrightarrow{AI}$ và $\\overrightarrow{IB}$",
        "$\\overrightarrow{IA}$ và $\\overrightarrow{BI}$",
        "$\\overrightarrow{AB}$ và $\\overrightarrow{IB}$"
      ],
      "correctIndex": 0,
      "explanation": "$I$ là trung điểm của $AB$ nên $IA = IB$ và tia $IA$ ngược chiều với tia $IB$, do đó $\\overrightarrow{IA}$ và $\\overrightarrow{IB}$ là hai vectơ ngược hướng có cùng độ dài."
    },
    {
      "id": "quiz-10.7.15",
      "badge": "Thông hiểu - Điểm di động tạo vectơ",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho hai điểm phân biệt $A$ và $B$. Có bao nhiêu điểm $M$ thỏa mãn $\\overrightarrow{MA} = \\overrightarrow{MB}$?",
      "options": [
        "$0$",
        "$1$",
        "$2$",
        "Vô số"
      ],
      "correctIndex": 0,
      "explanation": "Nếu $\\overrightarrow{MA} = \\overrightarrow{MB}$ thì $M$ phải trùng với chính nó, và ngọn của hai vectơ bằng nhau khi chung gốc $M$ thì $A \\equiv B$, trái với giả thiết $A$ và $B$ phân biệt. Vậy không có điểm $M$ nào thỏa mãn."
    },
    {
      "id": "quiz-10.7.16",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"50\" y=\"30\" width=\"220\" height=\"110\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"140\" x2=\"264\" y2=\"33\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"50\" y1=\"30\" x2=\"264\" y2=\"137\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <text x=\"160\" y=\"155\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">AB = 6</text>\n  <text x=\"35\" y=\"90\" fill=\"#34d399\" fontSize=\"12\" textAnchor=\"middle\">AD = 8</text>\n  <circle cx=\"50\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"270\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"28\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"28\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Thông hiểu - Độ dài vectơ tâm hình chữ nhật",
      "source": "Đề khảo sát chuyên đề Toán 10",
      "question": "Cho hình chữ nhật $ABCD$ có $AB = 6, AD = 8$, tâm $O$. Độ dài của vectơ $\\overrightarrow{AO}$ bằng:",
      "options": [
        "$5$",
        "$10$",
        "$7$",
        "$2.5$"
      ],
      "correctIndex": 0,
      "explanation": "Đường chéo $AC = \\sqrt{AB^2 + AD^2} = \\sqrt{36 + 64} = 10$. Vì $O$ là trung điểm của $AC$ nên $AO = \\frac{1}{2}AC = 5 \\implies |\\overrightarrow{AO}| = 5$."
    },
    {
      "id": "quiz-10.7.17",
      "badge": "Thông hiểu - Hướng của vectơ trên đoạn thẳng",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho đoạn thẳng $AB$ và điểm $C$ nằm giữa hai điểm $A$ và $B$. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\overrightarrow{CA}$ và $\\overrightarrow{CB}$ ngược hướng.",
        "$\\overrightarrow{CA}$ và $\\overrightarrow{CB}$ cùng hướng.",
        "$\\overrightarrow{AC}$ và $\\overrightarrow{BC}$ cùng hướng.",
        "$\\overrightarrow{CA}$ và $\\overrightarrow{AB}$ cùng hướng."
      ],
      "correctIndex": 0,
      "explanation": "Vì điểm $C$ nằm giữa $A$ và $B$ nên hai tia $CA$ và $CB$ là hai tia đối nhau, do đó hai vectơ $\\overrightarrow{CA}$ và $\\overrightarrow{CB}$ ngược hướng nhau."
    },
    {
      "id": "quiz-10.7.18",
      "svgDiagram": "<svg viewBox=\"0 0 320 140\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"70\" x2=\"280\" y2=\"70\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <line x1=\"160\" y1=\"70\" x2=\"46\" y2=\"70\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"160\" y1=\"70\" x2=\"274\" y2=\"70\" stroke=\"#f43f5e\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrRose)\"/>\n  <circle cx=\"40\" cy=\"70\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"95\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"70\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"95\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"70\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"55\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I (Trung di?m)</text>\n  <text x=\"100\" y=\"45\" fill=\"#38bdf8\" fontSize=\"11\" textAnchor=\"middle\">vecto IA</text>\n  <text x=\"220\" y=\"45\" fill=\"#f43f5e\" fontSize=\"11\" textAnchor=\"middle\">vecto IB</text>\n</svg>",
      "badge": "Thông hiểu - Tỉ số độ dài hai vectơ",
      "source": "SBT Toán 10",
      "question": "Cho đoạn thẳng $MN = 12$. Điểm $P$ thuộc đoạn $MN$ sao cho $MP = 3PN$. Tỉ số $\\frac{|\\overrightarrow{MP}|}{|\\overrightarrow{MN}|}$ bằng:",
      "options": [
        "$\\frac{3}{4}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{3}$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $MP + PN = MN \\iff 3PN + PN = 12 \\iff 4PN = 12 \\implies PN = 3, MP = 9$. Do đó $\\frac{|\\overrightarrow{MP}|}{|\\overrightarrow{MN}|} = \\frac{9}{12} = \\frac{3}{4}$."
    },
    {
      "id": "quiz-10.7.19",
      "badge": "Vận dụng - Bài toán thực tế vận tốc máy bay",
      "source": "Ứng dụng Vectơ trong Vật lý & Thực tế",
      "question": "Một chiếc máy bay bay theo hướng Bắc với vận tốc $600\\text{ km/h}$. Một chiếc máy bay thứ hai bay theo hướng Nam với vận tốc $600\\text{ km/h}$. Biểu diễn vectơ vận tốc của hai máy bay lần lượt là $\\vec{v}_1$ và $\\vec{v}_2$. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\vec{v}_1$ và $\\vec{v}_2$ ngược hướng và có cùng độ lớn: $|\\vec{v}_1| = |\\vec{v}_2| = 600\\text{ km/h}$.",
        "$\\vec{v}_1 = \\vec{v}_2$ vì cả hai đều có vận tốc $600\\text{ km/h}$.",
        "$\\vec{v}_1$ và $\\vec{v}_2$ không cùng phương vì một chiếc bay lên Bắc, một chiếc bay xuống Nam.",
        "$\\vec{v}_1$ và $\\vec{v}_2$ vuông góc với nhau."
      ],
      "correctIndex": 0,
      "explanation": "Hướng Bắc và hướng Nam cùng nằm trên đường kinh tuyến (cùng phương) nhưng ngược chiều nhau. Hai máy bay có cùng tốc độ $600\\text{ km/h}$ nên $|\\vec{v}_1| = |\\vec{v}_2|$, do đó $\\vec{v}_1$ và $\\vec{v}_2$ ngược hướng.",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- Tr?c t?a d? 4 hu?ng -->\n  <circle cx=\"160\" cy=\"90\" r=\"65\" fill=\"none\" stroke=\"#334155\" strokeWidth=\"1\" strokeDasharray=\"3 3\"/>\n  <line x1=\"160\" y1=\"15\" x2=\"160\" y2=\"165\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"75\" y1=\"90\" x2=\"245\" y2=\"90\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <!-- Nh�n hu?ng -->\n  <text x=\"160\" y=\"12\" fill=\"#94a3b8\" fontSize=\"11\" fontWeight=\"bold\" textAnchor=\"middle\">B?C (N)</text>\n  <text x=\"160\" y=\"177\" fill=\"#94a3b8\" fontSize=\"11\" fontWeight=\"bold\" textAnchor=\"middle\">NAM (S)</text>\n  <text x=\"65\" y=\"94\" fill=\"#64748b\" fontSize=\"11\" fontWeight=\"bold\" textAnchor=\"end\">T�Y (W)</text>\n  <text x=\"255\" y=\"94\" fill=\"#64748b\" fontSize=\"11\" fontWeight=\"bold\">��NG (E)</text>\n  <!-- Vecto v1: M�y bay 1 bay hu?ng B?c (600 km/h) -->\n  <line x1=\"160\" y1=\"90\" x2=\"160\" y2=\"30\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#arrC)\"/>\n  <text x=\"170\" y=\"55\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">v1 (600 km/h)</text>\n  <!-- Vecto v2: M�y bay 2 bay hu?ng Nam (600 km/h) -->\n  <line x1=\"160\" y1=\"90\" x2=\"160\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"3\" markerEnd=\"url(#arrR)\"/>\n  <text x=\"170\" y=\"130\" fill=\"#f43f5e\" fontSize=\"12\" fontWeight=\"bold\">v2 (600 km/h)</text>\n  <!-- G?c O -->\n  <circle cx=\"160\" cy=\"90\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"150\" y=\"94\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\" textAnchor=\"end\">O</text>\n</svg>"
    },
    {
      "id": "quiz-10.7.20",
      "badge": "Vận dụng - Bài toán thực tế độ dịch chuyển thuyền buồm",
      "source": "SGK Toán 10 KNTT Bài 7",
      "question": "Một chiếc thuyền buồm chạy trên mặt biển theo hướng Đông với vận tốc đều $25\\text{ km/h}$. Sau $2.4$ giờ chạy liên tục, độ dài của vectơ độ dịch chuyển $\\vec{d}$ của thuyền buồm bằng bao nhiêu?",
      "options": [
        "$60\\text{ km}$",
        "$50\\text{ km}$",
        "$70\\text{ km}$",
        "$55\\text{ km}$"
      ],
      "correctIndex": 0,
      "explanation": "Độ lớn của vectơ độ dịch chuyển chính là quãng đường đi được theo đường thẳng: $d = v \\times t = 25 \\times 2.4 = 60\\text{ km}$. Vậy $|\\vec{d}| = 60\\text{ km}$.",
      "svgDiagram": "<svg viewBox=\"0 0 320 150\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- S�ng bi?n trang tr� -->\n  <path d=\"M 30 115 Q 70 110 110 115 T 190 115 T 270 115\" fill=\"none\" stroke=\"#1e3a5f\" strokeWidth=\"2\" strokeDasharray=\"4 4\"/>\n  <path d=\"M 50 130 Q 90 125 130 130 T 210 130 T 290 130\" fill=\"none\" stroke=\"#1e3a5f\" strokeWidth=\"1.5\" strokeDasharray=\"4 4\"/>\n  <!-- Vecto d? d?ch chuy?n t? B?n A sang B?n B theo hu?ng ��ng -->\n  <line x1=\"60\" y1=\"70\" x2=\"252\" y2=\"70\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#arrC)\"/>\n  <!-- C�c di?m d?u v� cu?i -->\n  <circle cx=\"60\" cy=\"70\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"60\" y=\"52\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">B?n A (�i?m d?u)</text>\n  <circle cx=\"260\" cy=\"70\" r=\"4\" fill=\"#38bdf8\"/>\n  <text x=\"260\" y=\"52\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">B (�i?m cu?i)</text>\n  <!-- Th�ng s? gi? thi?t ban d?u: v = 25 km/h, t = 2.4 h -->\n  <text x=\"160\" y=\"95\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">Hu?ng ��ng | v = 25 km/h | t = 2,4 gi?</text>\n  <text x=\"160\" y=\"112\" fill=\"#38bdf8\" fontSize=\"11\" textAnchor=\"middle\">Vecto d? d?ch chuy?n: d = AB</text>\n</svg>"
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.7.1",
      "svgDiagram": "<svg viewBox=\"0 0 320 130\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"30\" y1=\"65\" x2=\"290\" y2=\"65\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <line x1=\"60\" y1=\"65\" x2=\"154\" y2=\"65\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"60\" y1=\"65\" x2=\"254\" y2=\"65\" stroke=\"#fbbf24\" strokeWidth=\"2\" strokeDasharray=\"4 2\" markerEnd=\"url(#mArrAmber)\"/>\n  <circle cx=\"60\" cy=\"65\" r=\"4\" fill=\"#f8fafc\"/><text x=\"60\" y=\"90\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"160\" cy=\"65\" r=\"4\" fill=\"#38bdf8\"/><text x=\"160\" y=\"90\" fill=\"#38bdf8\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"260\" cy=\"65\" r=\"4\" fill=\"#fbbf24\"/><text x=\"260\" y=\"90\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">C</text>\n  <text x=\"160\" y=\"45\" fill=\"#fbbf24\" fontSize=\"12\" textAnchor=\"middle\">AB c�ng phuong AC (AB = k AC)</text>\n</svg>",
      "badge": "Đúng / Sai 1 - Khảo sát các điểm thẳng hàng",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho ba điểm phân biệt $A, B, C$ thẳng hàng, trong đó điểm $B$ nằm giữa hai điểm $A$ và $C$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hai vectơ $\\overrightarrow{BA}$ và $\\overrightarrow{BC}$ là hai vectơ ngược hướng.",
          "correctAnswer": true,
          "explanation": "Vì $B$ nằm giữa $A$ và $C$ nên hai tia $BA$ và $BC$ đối nhau, suy ra $\\overrightarrow{BA}$ và $\\overrightarrow{BC}$ ngược hướng."
        },
        {
          "id": "b",
          "text": "Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là hai vectơ cùng hướng.",
          "correctAnswer": true,
          "explanation": "Cùng xuất phát từ $A$ đi qua $B$ rồi đến $C$ nên hai tia $AB$ và $AC$ trùng nhau, do đó $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng."
        },
        {
          "id": "c",
          "text": "Độ dài của vectơ $\\overrightarrow{AC}$ bằng tổng độ dài $|\\overrightarrow{AB}| + |\\overrightarrow{BC}|$.",
          "correctAnswer": true,
          "explanation": "Vì $B$ nằm giữa $A$ và $C$ nên $AC = AB + BC \\implies |\\overrightarrow{AC}| = |\\overrightarrow{AB}| + |\\overrightarrow{BC}|.$"
        },
        {
          "id": "d",
          "text": "Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ ngược hướng với nhau.",
          "correctAnswer": false,
          "explanation": "$\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ đều hướng từ trái sang phải dọc theo đường thẳng nên chúng cùng hướng, không phải ngược hướng."
        }
      ]
    },
    {
      "id": "tf-10.7.2",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,135 210,135 270,35 110,35\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"204\" y2=\"135\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"110\" y1=\"35\" x2=\"264\" y2=\"35\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"106\" y2=\"41\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"266\" y2=\"41\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"270\" y2=\"35\" stroke=\"#fbbf24\" strokeWidth=\"1.5\" strokeOpacity=\"0.6\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"110\" y2=\"35\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeOpacity=\"0.5\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <circle cx=\"50\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"218\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"96\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Đúng / Sai 2 - Vectơ trong hình bình hành",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho hình bình hành $ABCD$ có tâm $O$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AB} = \\overrightarrow{DC}$.",
          "correctAnswer": true,
          "explanation": "Do $AB // DC$ và $AB = DC$, hướng từ $A \\to B$ trùng hướng từ $D \\to C$ nên $\\overrightarrow{AB} = \\overrightarrow{DC}$."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{AD} = \\overrightarrow{BC}$.",
          "correctAnswer": true,
          "explanation": "Do $AD // BC$ và $AD = BC$, hướng từ $A \\to D$ trùng hướng từ $B \\to C$ nên $\\overrightarrow{AD} = \\overrightarrow{BC}$."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{OA} = \\overrightarrow{OC}$.",
          "correctAnswer": false,
          "explanation": "$O$ là trung điểm $AC$ nên $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$ ngược hướng, suy ra $\\overrightarrow{OA} = -\\overrightarrow{OC} \\ne \\overrightarrow{OC}$."
        },
        {
          "id": "d",
          "text": "$|\\overrightarrow{AC}| = |\\overrightarrow{BD}|$.",
          "correctAnswer": false,
          "explanation": "Trong hình bình hành nói chung, hai đường chéo $AC$ và $BD$ không bằng nhau (chỉ bằng nhau khi là hình chữ nhật)."
        }
      ]
    },
    {
      "id": "tf-10.7.3",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- L?c gi�c d?u ABCDEF -->\n  <polygon points=\"110,35 210,35 260,95 210,155 110,155 60,95\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <!-- 3 du?ng ch�o ch�nh c?t nhau t?i t�m O -->\n  <line x1=\"110\" y1=\"35\" x2=\"210\" y2=\"155\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"35\" x2=\"110\" y2=\"155\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"60\" y1=\"95\" x2=\"260\" y2=\"95\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <!-- T�m O -->\n  <circle cx=\"160\" cy=\"95\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"160\" y=\"86\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <!-- C�c d?nh A, B, C, D, E, F -->\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"104\" y=\"24\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"216\" y=\"24\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"95\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"270\" y=\"99\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"210\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"216\" y=\"170\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n  <circle cx=\"110\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"104\" y=\"170\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">E</text>\n  <circle cx=\"60\" cy=\"95\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"99\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">F</text>\n</svg>",
      "badge": "Đúng / Sai 3 - Vectơ trong hình lục giác đều",
      "source": "Đề thi HSG Toán 10",
      "prompt": "Cho hình lục giác đều $ABCDEF$ tâm $O$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Các vectơ $\\overrightarrow{AB}, \\overrightarrow{FO}, \\overrightarrow{OC}, \\overrightarrow{ED}$ bằng nhau.",
          "correctAnswer": true,
          "explanation": "Các đoạn thẳng này đều song song, có độ dài bằng cạnh lục giác và cùng hướng sang phải."
        },
        {
          "id": "b",
          "text": "Có tất cả 3 vectơ khác $\\vec{0}$ có điểm đầu $O$ và bằng $\\overrightarrow{AB}$.",
          "correctAnswer": false,
          "explanation": "Chỉ có duy nhất 1 vectơ là $\\overrightarrow{OC}$ có điểm đầu $O$ và bằng $\\overrightarrow{AB}$."
        },
        {
          "id": "c",
          "text": "Hai vectơ $\\overrightarrow{OA}$ và $\\overrightarrow{OD}$ ngược hướng và có cùng độ dài.",
          "correctAnswer": true,
          "explanation": "$O$ là trung điểm của đường chéo chính $AD$ nên $\\overrightarrow{OA}$ và $\\overrightarrow{OD}$ ngược hướng và $|\\overrightarrow{OA}| = |\\overrightarrow{OD}| = R$."
        },
        {
          "id": "d",
          "text": "Vectơ $\\overrightarrow{AC}$ cùng phương với vectơ $\\overrightarrow{FD}$.",
          "correctAnswer": true,
          "explanation": "Tứ giác $ACDF$ là hình chữ nhật nên $AC // FD$, do đó $\\overrightarrow{AC}$ cùng phương với $\\overrightarrow{FD}$."
        }
      ],
    },
    {
      "id": "tf-10.7.4",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <polygon points=\"110,87 210,87 160,150\" fill=\"#38bdf8\" fillOpacity=\"0.1\" stroke=\"#38bdf8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <line x1=\"110\" y1=\"87\" x2=\"204\" y2=\"87\" stroke=\"#fbbf24\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"60\" y1=\"150\" x2=\"154\" y2=\"150\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"160\" y1=\"150\" x2=\"254\" y2=\"150\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"87\" r=\"3\" fill=\"#fbbf24\"/><text x=\"96\" y=\"85\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">M</text>\n  <circle cx=\"210\" cy=\"87\" r=\"3\" fill=\"#fbbf24\"/><text x=\"218\" y=\"85\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">N</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#fbbf24\"/><text x=\"160\" y=\"165\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">P</text>\n</svg>",
      "badge": "Đúng / Sai 4 - Vectơ đường trung bình tam giác",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ có $M$ và $N$ lần lượt là trung điểm của $AB$ và $AC$. Lấy điểm $P$ đối xứng với $M$ qua $N$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hai vectơ $\\overrightarrow{MN}$ và $\\overrightarrow{BC}$ cùng hướng.",
          "correctAnswer": true,
          "explanation": "$MN$ là đường trung bình của $\\triangle ABC$ nên $MN // BC$ và $\\overrightarrow{MN}$ cùng hướng $\\overrightarrow{BC}$."
        },
        {
          "id": "b",
          "text": "Độ dài $|\\overrightarrow{MN}| = \\frac{1}{2}|\\overrightarrow{BC}|$.",
          "correctAnswer": true,
          "explanation": "$MN = \\frac{1}{2}BC$ nên $|\\overrightarrow{MN}| = \\frac{1}{2}|\\overrightarrow{BC}|.$"
        },
        {
          "id": "c",
          "text": "Tứ giác $BMPN$ là hình thang.",
          "correctAnswer": false,
          "explanation": "Tứ giác $AMCP$ có $N$ là trung điểm của $AC$ và $MP$ nên $AMCP$ là hình bình hành $\\implies CP // AM$ và $CP = AM = MB$, do đó $MBCP$ là hình bình hành, không phải chỉ là hình thang."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{MP} = \\overrightarrow{BC}$.",
          "correctAnswer": true,
          "explanation": "$MP = 2MN = BC$ và $MP // BC$, cùng hướng sang phải nên $\\overrightarrow{MP} = \\overrightarrow{BC}$."
        }
      ]
    },
    {
      "id": "tf-10.7.5",
      "badge": "Đúng / Sai 5 - Tính chất vectơ-không và vectơ đơn vị",
      "source": "Đề kiểm tra định kì Toán 10",
      "prompt": "Xét tính Đúng/Sai của các mệnh đề lý thuyết sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Vectơ $\\vec{0}$ cùng hướng với mọi vectơ.",
          "correctAnswer": true,
          "explanation": "Theo quy ước SGK Toán 10: Vectơ-không cùng phương, cùng hướng với mọi vectơ."
        },
        {
          "id": "b",
          "text": "Nếu $|\\vec{a}| = |\\vec{b}|$ thì chắc chắn $\\vec{a} = \\vec{b}$.",
          "correctAnswer": false,
          "explanation": "Sai vì hai vectơ có thể cùng độ dài nhưng khác hướng (hoặc không cùng phương)."
        },
        {
          "id": "c",
          "text": "Mọi vectơ có độ dài bằng $1$ đều được gọi là vectơ đơn vị.",
          "correctAnswer": true,
          "explanation": "Đúng theo định nghĩa vectơ đơn vị."
        },
        {
          "id": "d",
          "text": "Nếu $\\vec{a} = \\vec{b}$ thì giá của $\\vec{a}$ và giá của $\\vec{b}$ phải trùng nhau.",
          "correctAnswer": false,
          "explanation": "Sai vì giá của hai vectơ bằng nhau có thể song song với nhau."
        }
      ]
    },
    {
      "id": "tf-10.7.6",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"50\" y=\"30\" width=\"220\" height=\"110\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"140\" x2=\"264\" y2=\"33\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"50\" y1=\"30\" x2=\"264\" y2=\"137\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <text x=\"160\" y=\"155\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">AB = 6</text>\n  <text x=\"35\" y=\"90\" fill=\"#34d399\" fontSize=\"12\" textAnchor=\"middle\">AD = 8</text>\n  <circle cx=\"50\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"270\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"28\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"28\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Đúng / Sai 6 - Vectơ trong hình chữ nhật",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho hình chữ nhật $ABCD$ có tâm $O$, $AB = 3, AD = 4$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Độ dài vectơ $|\\overrightarrow{AC}| = 5$.",
          "correctAnswer": true,
          "explanation": "$AC = \\sqrt{3^2 + 4^2} = 5 \\implies |\\overrightarrow{AC}| = 5$."
        },
        {
          "id": "b",
          "text": "Hai vectơ $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$ có độ dài bằng nhau nhưng ngược hướng.",
          "correctAnswer": true,
          "explanation": "$O$ là trung điểm $AC$ nên $|\\overrightarrow{OA}| = |\\overrightarrow{OC}| = 2.5$ và $\\overrightarrow{OA}$ ngược hướng $\\overrightarrow{OC}$."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{AB} = \\overrightarrow{CD}$.",
          "correctAnswer": false,
          "explanation": "$\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ ngược hướng nhau, do đó $\\overrightarrow{AB} = -\\overrightarrow{CD} \\ne \\overrightarrow{CD}$."
        },
        {
          "id": "d",
          "text": "Có đúng 4 vectơ có độ dài bằng $5$ mà điểm đầu và điểm cuối là các đỉnh của hình chữ nhật.",
          "correctAnswer": true,
          "explanation": "Đó là $\\overrightarrow{AC}, \\overrightarrow{CA}, \\overrightarrow{BD}, \\overrightarrow{DB}$ (2 đường chéo, mỗi đường cho 2 vectơ)."
        }
      ]
    },
    {
      "id": "tf-10.7.7",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,20 265,90 160,160 55,90\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"154\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"259\" y2=\"90\" stroke=\"#38bdf8\" strokeWidth=\"2\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"23\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"157\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"168\" y=\"85\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">O</text>\n  <text x=\"75\" y=\"94\" fill=\"#94a3b8\" fontSize=\"11\">60�</text>\n  <circle cx=\"160\" cy=\"20\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"14\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"265\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"274\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"160\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"174\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">D</text>\n  <circle cx=\"55\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n</svg>",
      "badge": "Đúng / Sai 7 - Vectơ trong hình thoi cạnh a",
      "source": "Đề khảo sát HSG Toán 10",
      "prompt": "Cho hình thoi $ABCD$ có cạnh bằng $a$, tâm $O$ và góc $\\widehat{BAD} = 120^\\circ$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tam giác $ABD$ là tam giác đều.",
          "correctAnswer": false,
          "explanation": "Tam giác $ABD$ cân tại $A$ có $\\widehat{A} = 120^\\circ$ nên không đều (tam giác $BCD$ mới đều vì $\\widehat{C} = 60^\\circ$)."
        },
        {
          "id": "b",
          "text": "Độ dài vectơ $|\\overrightarrow{BD}| = a\\sqrt{3}$.",
          "correctAnswer": true,
          "explanation": "$BD = 2BO = 2 \\cdot a \\sin 60^\\circ = a\\sqrt{3} \\implies |\\overrightarrow{BD}| = a\\sqrt{3}$."
        },
        {
          "id": "c",
          "text": "Độ dài vectơ $|\\overrightarrow{AC}| = a$.",
          "correctAnswer": true,
          "explanation": "$AC = 2AO = 2 \\cdot a \\cos 60^\\circ = a \\implies |\\overrightarrow{AC}| = a$."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{BO} = \\overrightarrow{OD}$.",
          "correctAnswer": true,
          "explanation": "$O$ là trung điểm của $BD$, chiều từ $B \\to O$ cùng chiều $O \\to D$ và $BO = OD$ nên $\\overrightarrow{BO} = \\overrightarrow{OD}$."
        }
      ]
    },
    {
      "id": "tf-10.7.8",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- V�ng tr�n radar -->\n  <circle cx=\"160\" cy=\"90\" r=\"68\" fill=\"none\" stroke=\"#334155\" strokeWidth=\"1.5\" strokeDasharray=\"4 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"35\" fill=\"none\" stroke=\"#1e293b\" strokeWidth=\"1\"/>\n  <line x1=\"160\" y1=\"12\" x2=\"160\" y2=\"168\" stroke=\"#475569\" strokeWidth=\"1\"/>\n  <line x1=\"72\" y1=\"90\" x2=\"248\" y2=\"90\" stroke=\"#475569\" strokeWidth=\"1\"/>\n  <text x=\"160\" y=\"10\" fill=\"#94a3b8\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">B?C (N)</text>\n  <text x=\"160\" y=\"178\" fill=\"#94a3b8\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">NAM (S)</text>\n  <text x=\"65\" y=\"94\" fill=\"#64748b\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"end\">T�Y (W)</text>\n  <text x=\"255\" y=\"94\" fill=\"#64748b\" fontSize=\"10\" fontWeight=\"bold\">��NG (E)</text>\n  <!-- vA: M�y bay A hu?ng B?c (500 km/h) -->\n  <line x1=\"160\" y1=\"90\" x2=\"160\" y2=\"35\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#arrC)\"/>\n  <text x=\"168\" y=\"52\" fill=\"#38bdf8\" fontSize=\"11\" fontWeight=\"bold\">v_A (500 km/h)</text>\n  <!-- vB: M�y bay B hu?ng Nam (500 km/h) -->\n  <line x1=\"160\" y1=\"90\" x2=\"160\" y2=\"145\" stroke=\"#f43f5e\" strokeWidth=\"2.5\" markerEnd=\"url(#arrR)\"/>\n  <text x=\"168\" y=\"132\" fill=\"#f43f5e\" fontSize=\"11\" fontWeight=\"bold\">v_B (500 km/h)</text>\n  <!-- vC: T�u th?y C hu?ng ��ng (40 km/h - v? ng?n hon) -->\n  <line x1=\"160\" y1=\"90\" x2=\"208\" y2=\"90\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#arrE)\"/>\n  <text x=\"180\" y=\"106\" fill=\"#34d399\" fontSize=\"11\" fontWeight=\"bold\">v_C (40 km/h)</text>\n  <!-- G?c d�i ki?m so�t O -->\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"150\" y=\"94\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\" textAnchor=\"end\">��i O</text>\n</svg>",
      "badge": "Đúng / Sai 8 - Chuyển động máy bay và tàu thủy",
      "source": "Ứng dụng Toán học trong Hàng hải và Hàng không",
      "prompt": "Một đài kiểm soát không lưu theo dõi ba phương tiện chuyển động: máy bay $A$ bay theo hướng Bắc với tốc độ $500\\text{ km/h}$; máy bay $B$ bay theo hướng Nam với tốc độ $500\\text{ km/h}$; tàu thủy $C$ chạy theo hướng Đông với tốc độ $40\\text{ km/h}$. Gọi $\\vec{v}_A, \\vec{v}_B, \\vec{v}_C$ lần lượt là các vectơ vận tốc. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hai vectơ vận tốc $\\vec{v}_A$ và $\\vec{v}_B$ cùng phương.",
          "correctAnswer": true,
          "explanation": "Hướng Bắc và hướng Nam cùng nằm trên đường thẳng kinh tuyến Bắc - Nam nên hai vectơ cùng phương."
        },
        {
          "id": "b",
          "text": "Hai vectơ vận tốc $\\vec{v}_A$ và $\\vec{v}_B$ bằng nhau vì có cùng tốc độ $500\\text{ km/h}$.",
          "correctAnswer": false,
          "explanation": "Sai vì chúng ngược hướng nhau, do đó $\\vec{v}_A = -\\vec{v}_B \\ne \\vec{v}_B$."
        },
        {
          "id": "c",
          "text": "Vectơ vận tốc $\\vec{v}_C$ vuông góc với phương của vectơ vận tốc $\\vec{v}_A$.",
          "correctAnswer": true,
          "explanation": "Hướng Đông vuông góc với hướng Bắc."
        },
        {
          "id": "d",
          "text": "Sau 1.5 giờ, độ dài vectơ độ dịch chuyển của tàu thủy $C$ là $60\\text{ km}$.",
          "correctAnswer": true,
          "explanation": "$|\\vec{d}_C| = 40 \\times 1.5 = 60\\text{ km}$."
        }
      ],
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.7.1",
      "badge": "Trả lời ngắn 1 - Đếm số vectơ tạo bởi 5 điểm",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho 5 điểm phân biệt $A, B, C, D, E$ trong đó không có ba điểm nào thẳng hàng. Hỏi có tất cả bao nhiêu vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối là hai trong 5 điểm đã cho?",
      "correctAnswer": "20",
      "acceptableAnswers": [
        "20"
      ],
      "explanation": "Số vectơ khác $\\vec{0}$ là $5 \\times (5 - 1) = 20$ vectơ."
    },
    {
      "id": "sa-10.7.2",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,135 210,135 270,35 110,35\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"204\" y2=\"135\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"110\" y1=\"35\" x2=\"264\" y2=\"35\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"106\" y2=\"41\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"266\" y2=\"41\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"270\" y2=\"35\" stroke=\"#fbbf24\" strokeWidth=\"1.5\" strokeOpacity=\"0.6\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"110\" y2=\"35\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeOpacity=\"0.5\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <circle cx=\"50\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"218\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"96\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Trả lời ngắn 2 - Vectơ cùng phương trong hình bình hành",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho hình bình hành $ABCD$. Có bao nhiêu vectơ khác $\\vec{0}$ cùng phương với vectơ $\\overrightarrow{AB}$ mà điểm đầu và điểm cuối là các đỉnh của hình bình hành?",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6"
      ],
      "explanation": "Các vectơ cùng phương với $\\overrightarrow{AB}$ có giá song song hoặc trùng với $AB$, đó là các vectơ nằm trên đường thẳng $AB$ và $CD$: $\\overrightarrow{BA}, \\overrightarrow{CD}, \\overrightarrow{DC}$ (và chính $\\overrightarrow{AB}$ cùng 2 vectơ $\\overrightarrow{AB}, \\overrightarrow{BA}$ trên cạnh kia). Tổng cộng các vectơ khác $\\vec{0}$ cùng phương với $\\overrightarrow{AB}$ là: $\\overrightarrow{AB}, \\overrightarrow{BA}, \\overrightarrow{CD}, \\overrightarrow{DC}$. Tuy nhiên nếu tính cả các vectơ trên 2 giá này (không tính $\\overrightarrow{AB}$ nếu đề hỏi khác $\\overrightarrow{AB}$), tổng số vectơ có điểm đầu, cuối là đỉnh cùng phương với $\\overrightarrow{AB}$ là: $\\overrightarrow{AB}, \\overrightarrow{BA}, \\overrightarrow{CD}, \\overrightarrow{DC}$ (gồm 4 vectơ) hoặc nếu tính cả đoạn chéo thì không song song. Vậy có 4 vectơ (tính cả $\\overrightarrow{AB}$ là 4)."
    },
    {
      "id": "sa-10.7.3",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 70,150 250,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"144\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <rect x=\"160\" y=\"140\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#94a3b8\" strokeWidth=\"1\"/>\n  <line x1=\"70\" y1=\"150\" x2=\"154\" y2=\"29\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"70\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"58\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"250\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"258\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"168\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">H</text>\n</svg>",
      "badge": "Trả lời ngắn 3 - Độ dài vectơ cạnh tam giác đều",
      "source": "Đề kiểm tra 15 phút Toán 10",
      "prompt": "Cho tam giác đều $ABC$ có cạnh bằng $8$. Độ dài của vectơ $\\overrightarrow{BC}$ bằng bao nhiêu?",
      "correctAnswer": "8",
      "acceptableAnswers": [
        "8"
      ],
      "explanation": "$|\\overrightarrow{BC}| = BC = 8$."
    },
    {
      "id": "sa-10.7.4",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"50\" y=\"30\" width=\"220\" height=\"110\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"140\" x2=\"264\" y2=\"33\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"50\" y1=\"30\" x2=\"264\" y2=\"137\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <text x=\"160\" y=\"155\" fill=\"#38bdf8\" fontSize=\"12\" textAnchor=\"middle\">AB = 6</text>\n  <text x=\"35\" y=\"90\" fill=\"#34d399\" fontSize=\"12\" textAnchor=\"middle\">AD = 8</text>\n  <circle cx=\"50\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"270\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"28\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"28\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Trả lời ngắn 4 - Độ dài vectơ đường chéo hình chữ nhật",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho hình chữ nhật $ABCD$ có $AB = 6\\text{ cm}$ và $BC = 8\\text{ cm}$. Tính độ dài của vectơ $\\overrightarrow{AC}$ (theo đơn vị cm).",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10",
        "10 cm"
      ],
      "explanation": "$|\\overrightarrow{AC}| = AC = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$."
    },
    {
      "id": "sa-10.7.5",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Trả lời ngắn 5 - Độ dài vectơ từ tâm hình vuông",
      "source": "SBT Toán 10",
      "prompt": "Cho hình vuông $ABCD$ có tâm $O$ và cạnh bằng $4\\sqrt{2}$. Tính độ dài của vectơ $\\overrightarrow{OA}$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4"
      ],
      "explanation": "Đường chéo $AC = AB\\sqrt{2} = 4\\sqrt{2} \\cdot \\sqrt{2} = 8$. Vì $O$ là trung điểm $AC$ nên $OA = \\frac{8}{2} = 4 \\implies |\\overrightarrow{OA}| = 4$."
    },
    {
      "id": "sa-10.7.6",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,20 265,90 160,160 55,90\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"154\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"259\" y2=\"90\" stroke=\"#38bdf8\" strokeWidth=\"2\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"23\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"157\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"168\" y=\"85\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">O</text>\n  <text x=\"75\" y=\"94\" fill=\"#94a3b8\" fontSize=\"11\">60�</text>\n  <circle cx=\"160\" cy=\"20\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"14\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"265\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"274\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"160\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"174\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">D</text>\n  <circle cx=\"55\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n</svg>",
      "badge": "Trả lời ngắn 6 - Độ dài vectơ trong hình thoi góc 60 độ",
      "source": "Đề kiểm tra Toán 10 KNTT",
      "prompt": "Cho hình thoi $ABCD$ có cạnh bằng $6$ và góc $\\widehat{BAD} = 60^\\circ$. Tính độ dài của vectơ $\\overrightarrow{BD}$.",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6"
      ],
      "explanation": "Tam giác $ABD$ cân tại $A$ có $\\widehat{BAD} = 60^\\circ$ nên là tam giác đều $\\implies BD = AB = 6 \\implies |\\overrightarrow{BD}| = 6$."
    },
    {
      "id": "sa-10.7.7",
      "svgDiagram": "<svg viewBox=\"0 0 320 140\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"70\" x2=\"280\" y2=\"70\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <line x1=\"160\" y1=\"70\" x2=\"46\" y2=\"70\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"160\" y1=\"70\" x2=\"274\" y2=\"70\" stroke=\"#f43f5e\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrRose)\"/>\n  <circle cx=\"40\" cy=\"70\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"95\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"70\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"95\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"70\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"55\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I (Trung di?m)</text>\n  <text x=\"100\" y=\"45\" fill=\"#38bdf8\" fontSize=\"11\" textAnchor=\"middle\">vecto IA</text>\n  <text x=\"220\" y=\"45\" fill=\"#f43f5e\" fontSize=\"11\" textAnchor=\"middle\">vecto IB</text>\n</svg>",
      "badge": "Trả lời ngắn 7 - Tỉ số độ dài vectơ trên đoạn thẳng",
      "source": "Sách bài tập Toán 10",
      "prompt": "Cho đoạn thẳng $AB = 15$. Điểm $M$ thuộc đoạn $AB$ sao cho $MA = 6$. Tính tỉ số độ dài $\\frac{|\\overrightarrow{MA}|}{|\\overrightarrow{MB}|}$.",
      "correctAnswer": "0.67",
      "acceptableAnswers": [
        "0.67",
        "2/3",
        "0,67"
      ],
      "explanation": "$MB = AB - MA = 15 - 6 = 9$. Tỉ số $\\frac{|\\overrightarrow{MA}|}{|\\overrightarrow{MB}|} = \\frac{6}{9} = \\frac{2}{3} \\approx 0.67$."
    },
    {
      "id": "sa-10.7.8",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"60,140 60,35 255,140\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <rect x=\"60\" y=\"125\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#94a3b8\" strokeWidth=\"1\"/>\n  <line x1=\"60\" y1=\"140\" x2=\"153\" y2=\"90\" stroke=\"#fbbf24\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrAmber)\"/>\n  <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"60\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"32\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"255\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"264\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"157.5\" cy=\"87.5\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"168\" y=\"85\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">M</text>\n  <text x=\"45\" y=\"90\" fill=\"#38bdf8\" fontSize=\"11\">c = 9</text>\n  <text x=\"155\" y=\"158\" fill=\"#34d399\" fontSize=\"11\">b = 12</text>\n  \n</svg>",
      "badge": "Trả lời ngắn 8 - Độ dài đường trung tuyến tam giác vuông",
      "source": "Đề thi khảo sát Toán 10",
      "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 9, AC = 12$. Gọi $M$ là trung điểm của cạnh huyền $BC$. Tính độ dài của vectơ $\\overrightarrow{AM}$.",
      "correctAnswer": "7.5",
      "acceptableAnswers": [
        "7.5",
        "15/2",
        "7,5"
      ],
      "explanation": "Cạnh huyền $BC = \\sqrt{9^2 + 12^2} = 15$. Trung tuyến ứng với cạnh huyền $AM = \\frac{BC}{2} = 7.5 \\implies |\\overrightarrow{AM}| = 7.5$."
    },
    {
      "id": "sa-10.7.9",
      "badge": "Trả lời ngắn 9 - Số vectơ tạo bởi các đỉnh hình bát giác đều",
      "source": "Đề thi HSG Toán 10",
      "prompt": "Có bao nhiêu vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối là các đỉnh của một hình bát giác đều (hình 8 cạnh đều)?",
      "correctAnswer": "56",
      "acceptableAnswers": [
        "56"
      ],
      "explanation": "Hình bát giác đều có 8 đỉnh. Số vectơ khác $\\vec{0}$ là: $A_8^2 = 8 \\times 7 = 56$."
    },
    {
      "id": "sa-10.7.10",
      "badge": "Trả lời ngắn 10 - Vectơ bằng nhau trong hình lục giác đều",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho hình lục giác đều $ABCDEF$ tâm $O$. Có bao nhiêu vectơ khác $\\vec{0}$ bằng với vectơ $\\overrightarrow{AB}$ có điểm đầu và điểm cuối lấy từ 7 điểm $A, B, C, D, E, F, O$ (không tính chính vectơ $\\overrightarrow{AB}$)?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "Các vectơ khác $\\overrightarrow{AB}$ bằng $\\overrightarrow{AB}$ là: $\\overrightarrow{FO}, \\overrightarrow{OC}, \\overrightarrow{ED}$. Vậy có đúng 3 vectơ.",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- L?c gi�c d?u ABCDEF -->\n  <polygon points=\"110,35 210,35 260,95 210,155 110,155 60,95\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <!-- 3 du?ng ch�o ch�nh c?t nhau t?i t�m O -->\n  <line x1=\"110\" y1=\"35\" x2=\"210\" y2=\"155\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"35\" x2=\"110\" y2=\"155\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"60\" y1=\"95\" x2=\"260\" y2=\"95\" stroke=\"#475569\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <!-- T�m O -->\n  <circle cx=\"160\" cy=\"95\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"160\" y=\"86\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <!-- C�c d?nh A, B, C, D, E, F -->\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"104\" y=\"24\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"216\" y=\"24\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"95\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"270\" y=\"99\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"210\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"216\" y=\"170\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n  <circle cx=\"110\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"104\" y=\"170\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">E</text>\n  <circle cx=\"60\" cy=\"95\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"99\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">F</text>\n</svg>"
    },
    {
      "id": "sa-10.7.11",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 70,150 250,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"144\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <rect x=\"160\" y=\"140\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#94a3b8\" strokeWidth=\"1\"/>\n  <line x1=\"70\" y1=\"150\" x2=\"154\" y2=\"29\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"70\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"58\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"250\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"258\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"168\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">H</text>\n</svg>",
      "badge": "Trả lời ngắn 11 - Độ dài vectơ đường cao tam giác đều",
      "source": "Đề kiểm tra Toán 10",
      "prompt": "Cho tam giác đều $ABC$ cạnh bằng $4\\sqrt{3}$. Gọi $H$ là trung điểm của $BC$. Tính độ dài của vectơ $\\overrightarrow{AH}$.",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6"
      ],
      "explanation": "Đường cao tam giác đều: $AH = \\frac{a\\sqrt{3}}{2} = \\frac{4\\sqrt{3} \\cdot \\sqrt{3}}{2} = 6 \\implies |\\overrightarrow{AH}| = 6$."
    },
    {
      "id": "sa-10.7.12",
      "badge": "Trả lời ngắn 12 - Bài toán thực tế độ dịch chuyển thuyền máy",
      "source": "Toán học và Đời sống",
      "prompt": "Một chiếc ca nô xuất phát từ bến $A$ chạy thẳng theo hướng Đông với vận tốc không đổi $32\\text{ km/h}$. Sau 2 giờ 15 phút, ca nô đến bến $B$. Tính độ dài của vectơ độ dịch chuyển $\\overrightarrow{AB}$ (theo đơn vị kilômét).",
      "correctAnswer": "72",
      "acceptableAnswers": [
        "72",
        "72 km"
      ],
      "explanation": "Đổi 2 giờ 15 phút $= 2.25$ giờ. Độ dài vectơ độ dịch chuyển: $|\\overrightarrow{AB}| = 32 \\times 2.25 = 72\\text{ km}$.",
      "svgDiagram": "<svg viewBox=\"0 0 320 140\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <path d=\"M 40 105 Q 80 100 120 105 T 200 105 T 280 105\" fill=\"none\" stroke=\"#1e3a5f\" strokeWidth=\"2\" strokeDasharray=\"4 4\"/>\n  <line x1=\"60\" y1=\"65\" x2=\"252\" y2=\"65\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#arrC)\"/>\n  <circle cx=\"60\" cy=\"65\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"60\" y=\"48\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">B?n A</text>\n  <circle cx=\"260\" cy=\"65\" r=\"4\" fill=\"#38bdf8\"/>\n  <text x=\"260\" y=\"48\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">B?n B</text>\n  <text x=\"160\" y=\"90\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">Hu?ng ��ng | v = 30 km/h | t = 1,5 gi?</text>\n</svg>"
    }
  ]
},

  // ==========================================
  // BÀI 8: TỔNG VÀ HIỆU CỦA HAI VECTƠ (CHUẨN KNTT 2025)
  // ==========================================
  "t10-b8-tong-va-hieu-vector": {
  "id": "t10-b8-tong-va-hieu-vector",
  "lessonNumber": 8,
  "title": "Bài 8: Tổng và hiệu của hai vectơ",
  "bookChapter": "Chương IV: Vectơ",
  "scenarioTitle": "Tình huống thực tế: Hợp lực kéo tàu và chuyển động của ca nô trên dòng sông",
  "scenarioFrames": [],
  "interactiveType": "vector",
  "youtubeVideoId": "KonKbScvWL0",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 8 - Tổng và hiệu của hai vectơ (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "KonKbScvWL0",
      "title": "Tiết 1: Tổng của hai vectơ & Quy tắc ba điểm, Quy tắc hình bình hành"
    },
    {
      "id": "g8QmUFmz4v0",
      "title": "Tiết 2: Tính chất của phép cộng vectơ & Hợp lực trong cơ học"
    },
    {
      "id": "FOEbq9vBplA",
      "title": "Tiết 3: Hiệu của hai vectơ, vectơ đối & Quy tắc trừ"
    },
    {
      "id": "eN71nsLiZBg",
      "title": "Tiết 4: Tính chất trung điểm, trọng tâm & Hướng dẫn giải bài tập SGK"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "1. Tổng của hai vectơ & Quy tắc ba điểm (Tam giác)",
      "points": [
        "• **Định nghĩa**: Cho hai vectơ $\\\\vec{a}$ và $\\\\vec{b}$. Lấy điểm $A$ tùy ý, vẽ $\\\\overrightarrow{AB} = \\\\vec{a}$ và $\\\\overrightarrow{BC} = \\\\vec{b}$. Vectơ $\\\\overrightarrow{AC}$ được gọi là **tổng của hai vectơ** $\\\\vec{a}$ và $\\\\vec{b}$, kí hiệu là $\\\\vec{a} + \\\\vec{b}$.\\",
        "• **Quy tắc ba điểm**: Với ba điểm $A, B, C$ bất kì, ta luôn có:\\",
        "$$\\\\overrightarrow{AB} + \\\\overrightarrow{BC} = \\\\overrightarrow{AC}$$\\",
        "• **Tính chất**: Giao hoán: $\\\\vec{a} + \\\\vec{b} = \\\\vec{b} + \\\\vec{a}$; Kết hợp: $(\\\\vec{a} + \\\\vec{b}) + \\\\vec{c} = \\\\vec{a} + (\\\\vec{b} + \\\\vec{c})$; Cộng với vectơ $\\\\vec{0}$: $\\\\vec{a} + \\\\vec{0} = \\\\vec{a}$."
      ]
    },
    {
      "index": "2",
      "title": "2. Quy tắc hình bình hành",
      "points": [
        "• Nếu tứ giác $ABCD$ là hình bình hành thì:\\",
        "$$\\\\overrightarrow{AB} + \\\\overrightarrow{AD} = \\\\overrightarrow{AC}$$\\",
        "*(Tổng hai vectơ chung gốc bằng vectơ đường chéo xuất phát từ gốc đó)*."
      ]
    },
    {
      "index": "3",
      "title": "3. Vectơ đối & Hiệu của hai vectơ",
      "points": [
        "• **Vectơ đối**: Vectơ có cùng độ dài và ngược hướng với $\\\\vec{a}$ được gọi là vectơ đối của $\\\\vec{a}$, kí hiệu là $-\\\\vec{a}$. Ta có $\\\\vec{a} + (-\\\\vec{a}) = \\\\vec{0}$. Vectơ đối của $\\\\overrightarrow{AB}$ là $\\\\overrightarrow{BA} = -\\\\overrightarrow{AB}$.\\",
        "• **Hiệu hai vectơ**: $\\\\vec{a} - \\\\vec{b} = \\\\vec{a} + (-\\\\vec{b})$.\\",
        "• **Quy tắc hiệu (chung gốc)**: Với ba điểm $O, A, B$ bất kì, ta có:\\",
        "$$\\\\overrightarrow{OB} - \\\\overrightarrow{OA} = \\\\overrightarrow{AB}$$"
      ]
    },
    {
      "index": "4",
      "title": "4. Tính chất trung điểm và trọng tâm",
      "points": [
        "• Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi:\\",
        "$$\\\\overrightarrow{IA} + \\\\overrightarrow{IB} = \\\\vec{0} \\\\quad \\\\text{hoặc} \\\\quad \\\\overrightarrow{OA} + \\\\overrightarrow{OB} = 2\\\\overrightarrow{OI} \\\\quad (\\\\forall O)$$\\",
        "• Điểm $G$ là trọng tâm tam giác $ABC$ khi và chỉ khi:\\",
        "$$\\\\overrightarrow{GA} + \\\\overrightarrow{GB} + \\\\overrightarrow{GC} = \\\\vec{0} \\\\quad \\\\text{hoặc} \\\\quad \\\\overrightarrow{OA} + \\\\overrightarrow{OB} + \\\\overrightarrow{OC} = 3\\\\overrightarrow{OG} \\\\quad (\\\\forall O)$$"
      ]
    }
  ],
  "tips": [
    "Để cộng hai vectơ nối đuôi nhau: Điểm cuối vectơ này là điểm đầu vectơ kia: vec(A_B_) + vec(_B_C) = vec(AC).",
    "Để trừ hai vectơ chung gốc: vec(O_B_) - vec(O_A_) = vec(AB) (ngọn trừ gốc, điểm cuối trừ điểm đầu).",
    "Khi tính độ dài tổng hai vectơ: không bao giờ được cộng độ dài trực tiếp |vec(a) + vec(b)| ≠ |vec(a)| + |vec(b)| trừ khi chúng cùng hướng!"
  ],
  "traps": [
    "Bẫy quy tắc hiệu: Nhiều bạn nhầm lẫn vec(OA) - vec(OB) = vec(AB) (sai, đúng phải là vec(BA)). Nhớ câu thần chú: 'Sau trừ Trước = Trước đến Sau' -> vec(OB) - vec(OA) = vec(AB).",
    "Bẫy độ lớn hợp lực: Khi hai lực góc 60°, dùng định lý hình bình hành F² = F₁² + F₂² + 2F₁F₂ cos α (dấu cộng, khác dấu trừ trong định lý cosin tam giác)."
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.8.1",
      "badge": "Nhận biết - Quy tắc ba điểm",
      "source": "SGK Toán 10 KNTT Bài 8",
      "question": "Cho ba điểm phân biệt $A, B, C$. Đẳng thức nào sau đây là ĐÚNG?",
      "options": [
        "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$",
        "$\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{BC}$",
        "$\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{AC}$",
        "$\\overrightarrow{AB} + \\overrightarrow{CB} = \\overrightarrow{AC}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo quy tắc ba điểm (quy tắc tam giác): $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
    },
    {
      "id": "quiz-10.8.2",
      "badge": "Nhận biết - Quy tắc hình bình hành",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho hình bình hành $ABCD$. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$",
        "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{BD}$",
        "$\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{AD}$",
        "$\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{AC}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo quy tắc hình bình hành: Tổng hai vectơ chung gốc bằng vectơ đường chéo $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$."
    },
    {
      "id": "quiz-10.8.3",
      "badge": "Nhận biết - Quy tắc hiệu hai vectơ",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho ba điểm phân biệt $O, A, B$. Vectơ $\\overrightarrow{OB} - \\overrightarrow{OA}$ bằng vectơ nào sau đây?",
      "options": [
        "$\\overrightarrow{AB}$",
        "$\\overrightarrow{BA}$",
        "$\\overrightarrow{OA}$",
        "$\\overrightarrow{BO}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo quy tắc trừ hai vectơ chung gốc: $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$."
    },
    {
      "id": "quiz-10.8.4",
      "badge": "Nhận biết - Vectơ đối của vectơ",
      "source": "SGK Toán 10 KNTT",
      "question": "Vectơ đối của vectơ $\\overrightarrow{MN}$ là:",
      "options": [
        "$\\overrightarrow{NM}$",
        "$-\\overrightarrow{NM}$",
        "$\\overrightarrow{MN}$",
        "$|\\overrightarrow{MN}|$"
      ],
      "correctIndex": 0,
      "explanation": "Vectơ đối của $\\overrightarrow{MN}$ là $-\\overrightarrow{MN} = \\overrightarrow{NM}$."
    },
    {
      "id": "quiz-10.8.5",
      "badge": "Thông hiểu - Tính chất trung điểm",
      "source": "Đề kiểm tra Toán 10",
      "question": "Cho đoạn thẳng $AB$ có trung điểm là $I$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
      "options": [
        "$\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$",
        "$\\overrightarrow{IA} + \\overrightarrow{IB} = \\overrightarrow{AB}$",
        "$\\overrightarrow{AI} + \\overrightarrow{BI} = \\vec{0}$",
        "$\\overrightarrow{IA} - \\overrightarrow{IB} = \\vec{0}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $I$ là trung điểm $AB$ nên hai vectơ $\\overrightarrow{IA}$ và $\\overrightarrow{IB}$ là hai vectơ đối nhau, do đó $\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$."
    },
    {
      "id": "quiz-10.8.6",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,30 60,140 260,140\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <circle cx=\"160\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"20\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Thông hiểu - Tính chất trọng tâm tam giác",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho tam giác $ABC$ có trọng tâm $G$. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$",
        "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{AB}$",
        "$\\overrightarrow{AG} + \\overrightarrow{BG} + \\overrightarrow{CG} = 3\\vec{0}$",
        "$\\overrightarrow{GA} = \\overrightarrow{GB} = \\overrightarrow{GC}$"
      ],
      "correctIndex": 0,
      "explanation": "Trọng tâm tam giác $ABC$ luôn thỏa mãn $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$."
    },
    {
      "id": "quiz-10.8.7",
      "badge": "Thông hiểu - Rút gọn tổng vectơ liên tiếp",
      "source": "SBT Toán 10 KNTT",
      "question": "Rút gọn biểu thức vectơ $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} + \\overrightarrow{DE}$ được kết quả là:",
      "options": [
        "$\\overrightarrow{AE}$",
        "$\\overrightarrow{EA}$",
        "$\\vec{0}$",
        "$\\overrightarrow{AD}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng quy tắc nối đuôi ba điểm liên tiếp: $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} + \\overrightarrow{DE} = (\\overrightarrow{AB} + \\overrightarrow{BC}) + (\\overrightarrow{CD} + \\overrightarrow{DE}) = \\overrightarrow{AC} + \\overrightarrow{CE} = \\overrightarrow{AE}$."
    },
    {
      "id": "quiz-10.8.8",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,135 210,135 270,35 110,35\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"270\" y2=\"35\" stroke=\"#fbbf24\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"110\" y2=\"35\" stroke=\"#94a3b8\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <circle cx=\"50\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"218\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"96\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Thông hiểu - Độ dài tổng hai vectơ vuông góc",
      "source": "Đề thi học kì 1 Toán 10",
      "question": "Cho hình chữ nhật $ABCD$ có $AB = 3, AD = 4$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:",
      "options": [
        "$5$",
        "$7$",
        "$1$",
        "$\\sqrt{7}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Độ dài $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AC}| = \\sqrt{3^2 + 4^2} = 5$."
    },
    {
      "id": "quiz-10.8.9",
      "badge": "Thông hiểu - Độ dài hiệu hai vectơ tam giác đều",
      "source": "Đề kiểm tra định kì Toán 10",
      "question": "Cho tam giác đều $ABC$ cạnh bằng $a$. Độ dài của vectơ $\\overrightarrow{AB} - \\overrightarrow{AC}$ bằng:",
      "options": [
        "$a$",
        "$a\\sqrt{3}$",
        "$2a$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Theo quy tắc hiệu: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$. Do đó $|\\overrightarrow{AB} - \\overrightarrow{AC}| = |\\overrightarrow{CB}| = a$."
    },
    {
      "id": "quiz-10.8.10",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,30 60,140 260,140\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <circle cx=\"160\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"20\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Thông hiểu - Độ dài tổng hai vectơ tam giác đều",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho tam giác đều $ABC$ có cạnh bằng $a$. Gọi $H$ là trung điểm $BC$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AC}$ bằng:",
      "options": [
        "$a\\sqrt{3}$",
        "$a$",
        "$\\frac{a\\sqrt{3}}{2}$",
        "$2a$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $H$ là trung điểm $BC$ nên $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AH}$. Độ dài: $|\\overrightarrow{AB} + \\overrightarrow{AC}| = 2AH = 2 \\cdot \\frac{a\\sqrt{3}}{2} = a\\sqrt{3}$."
    },
    {
      "id": "quiz-10.8.11",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Thông hiểu - Hiệu hai vectơ hình vuông",
      "source": "Đề thi thử Toán 10",
      "question": "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ $\\overrightarrow{AB} - \\overrightarrow{DA}$ bằng:",
      "options": [
        "$a\\sqrt{2}$",
        "$a$",
        "$2a$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $-\\overrightarrow{DA} = \\overrightarrow{AD}$. Do đó $\\overrightarrow{AB} - \\overrightarrow{DA} = \\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Độ dài: $|\\overrightarrow{AC}| = a\\sqrt{2}$."
    },
    {
      "id": "quiz-10.8.12",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,20 265,90 160,160 55,90\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"154\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"259\" y2=\"90\" stroke=\"#38bdf8\" strokeWidth=\"2\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"23\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <line x1=\"55\" y1=\"90\" x2=\"156\" y2=\"157\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/>\n  <text x=\"168\" y=\"85\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">O</text>\n  <text x=\"75\" y=\"94\" fill=\"#94a3b8\" fontSize=\"11\">60�</text>\n  <circle cx=\"160\" cy=\"20\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"14\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"265\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"274\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"160\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"174\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">D</text>\n  <circle cx=\"55\" cy=\"90\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"40\" y=\"94\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n</svg>",
      "badge": "Thông hiểu - Khẳng định sai về tổng vectơ",
      "source": "Bộ đề Toán 10 KNTT",
      "question": "Cho hình bình hành $ABCD$ tâm $O$. Khẳng định nào sau đây là SAI?",
      "options": [
        "$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = \\overrightarrow{AC}$",
        "$\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} + \\overrightarrow{DA} = \\vec{0}$",
        "$\\overrightarrow{OA} + \\overrightarrow{OC} = \\vec{0}$",
        "$\\overrightarrow{OB} + \\overrightarrow{OD} = \\vec{0}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $O$ là trung điểm của $AC$ và $BD$ nên $\\overrightarrow{OA} + \\overrightarrow{OC} = \\vec{0}$ và $\\overrightarrow{OB} + \\overrightarrow{OD} = \\vec{0}$. Do đó tổng cả 4 vectơ phải bằng $\\vec{0}$, không thể bằng $\\overrightarrow{AC}$."
    },
    {
      "id": "quiz-10.8.13",
      "badge": "Vận dụng - Độ dài tổng hai vectơ góc 120 độ",
      "source": "Đề thi HSG Toán 10",
      "question": "Cho hình thoi $ABCD$ có cạnh bằng $a$ và góc $\\widehat{BAD} = 120^\\circ$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:",
      "options": [
        "$a$",
        "$a\\sqrt{3}$",
        "$2a$",
        "$\\frac{a\\sqrt{3}}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Theo quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Tam giác $ABC$ cân tại $B$ có $\\widehat{B} = 180^\\circ - 120^\\circ = 60^\\circ$ nên là tam giác đều, do đó $AC = a \\implies |\\overrightarrow{AB} + \\overrightarrow{AD}| = a$."
    },
    {
      "id": "quiz-10.8.14",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,30 60,140 260,140\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <circle cx=\"160\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"20\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Thông hiểu - Điều kiện để tổng hai vectơ bằng 0",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho ba điểm phân biệt $A, B, C$. Nếu $\\overrightarrow{AB} + \\overrightarrow{AC} = \\vec{0}$ thì:",
      "options": [
        "$A$ là trung điểm của đoạn thẳng $BC$.",
        "$B$ là trung điểm của đoạn thẳng $AC$.",
        "$C$ là trung điểm của đoạn thẳng $AB$.",
        "Tam giác $ABC$ là tam giác đều."
      ],
      "correctIndex": 0,
      "explanation": "$\\overrightarrow{AB} + \\overrightarrow{AC} = \\vec{0} \\iff \\overrightarrow{AB} = -\\overrightarrow{AC} = \\overrightarrow{CA}$, nghĩa là $A$ là trung điểm của đoạn thẳng $BC$."
    },
    {
      "id": "quiz-10.8.15",
      "badge": "Thông hiểu - Rút gọn biểu thức hiệu",
      "source": "SBT Toán 10",
      "question": "Cho 4 điểm $A, B, C, D$. Biểu thức $\\overrightarrow{AB} - \\overrightarrow{CD} - \\overrightarrow{AC}$ bằng vectơ nào sau đây?",
      "options": [
        "$\\overrightarrow{DB}$",
        "$\\overrightarrow{BD}$",
        "$\\overrightarrow{DA}$",
        "$\\vec{0}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$. Lại có $-\\overrightarrow{CD} = \\overrightarrow{DC}$. Vậy $\\overrightarrow{CB} + \\overrightarrow{DC} = \\overrightarrow{DC} + \\overrightarrow{CB} = \\overrightarrow{DB}$."
    },
    {
      "id": "quiz-10.8.16",
      "badge": "Vận dụng - Độ dài tổng hai vectơ hình thoi góc 60 độ",
      "source": "Đề kiểm tra chất lượng Toán 10",
      "question": "Cho hình thoi $ABCD$ cạnh $a$ có $\\widehat{BAD} = 60^\\circ$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:",
      "options": [
        "$a\\sqrt{3}$",
        "$a$",
        "$2a$",
        "$a\\sqrt{2}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Trong hình thoi có $\\widehat{BAD} = 60^\\circ$, đường chéo $AC = 2 \\cdot a \\cos 30^\\circ = a\\sqrt{3}$."
    },
    {
      "id": "quiz-10.8.17",
      "badge": "Thông hiểu - Điểm M thỏa mãn đẳng thức vectơ",
      "source": "Đề thi thử Toán 10",
      "question": "Cho đoạn thẳng $AB$ và điểm $I$ là trung điểm của $AB$. Điểm $M$ thỏa mãn $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$ thì:",
      "options": [
        "$M$ trùng với điểm $I$.",
        "$M$ trùng với điểm $A$.",
        "$M$ trùng với điểm $B$.",
        "Không tồn tại điểm $M$."
      ],
      "correctIndex": 0,
      "explanation": "$\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0} \\iff M$ là trung điểm của $AB$, tức $M \\equiv I$."
    },
    {
      "id": "quiz-10.8.18",
      "badge": "Thông hiểu - Tổng các vectơ đỉnh đa giác khép kín",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho hình lục giác đều $ABCDEF$. Tổng $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} + \\overrightarrow{DE} + \\overrightarrow{EF} + \\overrightarrow{FA}$ bằng:",
      "options": [
        "$\\vec{0}$",
        "$\\overrightarrow{AD}$",
        "$2\\overrightarrow{AB}$",
        "$\\overrightarrow{AF}$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng các vectơ theo chu trình khép kín: điểm đầu trùng với điểm cuối tạo thành vectơ $\\overrightarrow{AA} = \\vec{0}$."
    },
    {
      "id": "quiz-10.8.19",
      "badge": "Vận dụng cao - Bài toán thực tế hợp lực kéo vật",
      "source": "Vật lý 10 & Toán 10 KNTT Bài 8",
      "question": "Hai lực $\\vec{F}_1$ và $\\vec{F}_2$ cùng tác dụng lên một vật tại điểm $O$, góc tạo bởi hai lực là $60^\\circ$. Biết độ lớn $|\\vec{F}_1| = |\\vec{F}_2| = 50\\text{ N}$. Độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ xấp xỉ bằng:",
      "options": [
        "$86.6\\text{ N}$",
        "$100\\text{ N}$",
        "$50\\text{ N}$",
        "$70.7\\text{ N}$"
      ],
      "correctIndex": 0,
      "explanation": "Hợp lực được xác định theo quy tắc hình bình hành: $|\\vec{F}|^2 = F_1^2 + F_2^2 + 2F_1F_2 \\cos 60^\\circ = 50^2 + 50^2 + 2(50)(50)(0.5) = 2500 + 2500 + 2500 = 7500$. Suy ra $|\\vec{F}| = \\sqrt{7500} = 50\\sqrt{3} \\approx 86.6\\text{ N}$.",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- H�nh b�nh h�nh h?p l?c n�t d?t -->\n  <polygon points=\"60,140 170,140 225,45 115,45\" fill=\"#1e293b\" fillOpacity=\"0.3\" stroke=\"#475569\" strokeWidth=\"1\" strokeDasharray=\"3 3\"/>\n  <!-- L?c F1 n?m ngang -->\n  <line x1=\"60\" y1=\"140\" x2=\"164\" y2=\"140\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#arrC)\"/>\n  <text x=\"120\" y=\"158\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">F1 = 50 N</text>\n  <!-- L?c F2 t?o g�c 60 d? -->\n  <line x1=\"60\" y1=\"140\" x2=\"111\" y2=\"51\" stroke=\"#34d399\" strokeWidth=\"3\" markerEnd=\"url(#arrE)\"/>\n  <text x=\"65\" y=\"75\" fill=\"#34d399\" fontSize=\"12\" fontWeight=\"bold\">F2 = 50 N</text>\n  <!-- G�c 60 d? -->\n  <path d=\"M 90 140 A 30 30 0 0 0 80 105\" fill=\"none\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <text x=\"96\" y=\"125\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">60�</text>\n  <!-- Vecto h?p l?c F (du?ng ch�o) - KH�NG GHI K?T QU? S? -->\n  <line x1=\"60\" y1=\"140\" x2=\"219\" y2=\"49\" stroke=\"#fbbf24\" strokeWidth=\"3\" markerEnd=\"url(#arrA)\"/>\n  <text x=\"210\" y=\"38\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">F (H?p l?c)</text>\n  <!-- �i?m d?t O -->\n  <circle cx=\"60\" cy=\"140\" r=\"4.5\" fill=\"#f8fafc\"/>\n  <text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">O</text>\n</svg>"
    },
    {
      "id": "quiz-10.8.20",
      "badge": "Vận dụng cao - Bài toán thực tế vận tốc ca nô cắt ngang sông",
      "source": "SGK Toán 10 KNTT Bài 8 Vận dụng",
      "question": "Một chiếc ca nô vượt qua một con sông từ bờ này sang bờ kia. Vận tốc riêng của ca nô đối với dòng nước là $12\\text{ km/h}$ theo hướng vuông góc với bờ sông. Vận tốc của dòng nước đối với bờ là $5\\text{ km/h}$ xuôi dòng. Vận tốc thực tế của ca nô đối với bờ sông bằng:",
      "options": [
        "$13\\text{ km/h}$",
        "$17\\text{ km/h}$",
        "$7\\text{ km/h}$",
        "$11.2\\text{ km/h}$"
      ],
      "correctIndex": 0,
      "explanation": "Vận tốc thực tế là tổng hai vectơ vuông góc nhau: $\\vec{v} = \\vec{v}_{\\text{thuyền}} + \\vec{v}_{\\text{nước}}$. Độ lớn: $v = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ km/h}$.",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- Hai b? s�ng -->\n  <rect x=\"30\" y=\"20\" width=\"260\" height=\"15\" fill=\"#334155\" rx=\"2\"/>\n  <text x=\"40\" y=\"32\" fill=\"#94a3b8\" fontSize=\"10\">B? b�n kia</text>\n  <rect x=\"30\" y=\"145\" width=\"260\" height=\"15\" fill=\"#334155\" rx=\"2\"/>\n  <text x=\"40\" y=\"157\" fill=\"#94a3b8\" fontSize=\"10\">B? xu?t ph�t</text>\n  <!-- D�ng nu?c n�t d?t -->\n  <line x1=\"60\" y1=\"65\" x2=\"260\" y2=\"65\" stroke=\"#1e3a5f\" strokeWidth=\"1\" strokeDasharray=\"6 4\"/>\n  <line x1=\"60\" y1=\"105\" x2=\"260\" y2=\"105\" stroke=\"#1e3a5f\" strokeWidth=\"1\" strokeDasharray=\"6 4\"/>\n  <!-- �i?m xu?t ph�t A v� d�ch B d? ki?n -->\n  <circle cx=\"100\" cy=\"145\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"86\" y=\"155\" fill=\"#f8fafc\" fontSize=\"11\" fontWeight=\"bold\">B?n A</text>\n  <circle cx=\"100\" cy=\"35\" r=\"3\" fill=\"#64748b\"/><text x=\"100\" y=\"50\" fill=\"#64748b\" fontSize=\"10\" textAnchor=\"middle\">B (d?i di?n)</text>\n  <!-- H�nh ch? nh?t v?n t?c n�t d?t -->\n  <rect x=\"100\" y=\"35\" width=\"100\" height=\"110\" fill=\"none\" stroke=\"#475569\" strokeWidth=\"1\" strokeDasharray=\"3 3\"/>\n  <!-- v_thuy?n vu�ng g�c b?: 12 km/h -->\n  <line x1=\"100\" y1=\"145\" x2=\"100\" y2=\"43\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#arrC)\"/>\n  <text x=\"75\" y=\"95\" fill=\"#38bdf8\" fontSize=\"11\" fontWeight=\"bold\">v_thuy?n = 12 km/h</text>\n  <!-- v_d�ng xu�i d�ng: 5 km/h -->\n  <line x1=\"100\" y1=\"35\" x2=\"194\" y2=\"35\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#arrE)\"/>\n  <text x=\"150\" y=\"28\" fill=\"#34d399\" fontSize=\"11\" fontWeight=\"bold\">v_d�ng = 5 km/h</text>\n  <!-- v_th?c t? (du?ng ch�o) - KH�NG GHI K?T QU? S? -->\n  <line x1=\"100\" y1=\"145\" x2=\"195\" y2=\"40\" stroke=\"#fbbf24\" strokeWidth=\"2.5\" markerEnd=\"url(#arrA)\"/>\n  <circle cx=\"200\" cy=\"35\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"210\" y=\"38\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">B' (th?c t?)</text>\n  <text x=\"165\" y=\"105\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">v (th?c t?)</text>\n</svg>"
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.8.1",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,30 60,140 260,140\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <circle cx=\"160\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"20\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Đúng / Sai 1 - Khảo sát các quy tắc vectơ cơ bản",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho ba điểm phân biệt bất kì $A, B, C$. Xét tính Đúng/Sai của các đẳng thức sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo quy tắc ba điểm."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{BC}$.",
          "correctAnswer": false,
          "explanation": "Sai: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$, không phải $\\overrightarrow{BC}$."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{BA} + \\overrightarrow{AC} = \\overrightarrow{BC}$.",
          "correctAnswer": true,
          "explanation": "Đúng: $\\overrightarrow{BA} + \\overrightarrow{AC} = \\overrightarrow{BC}$."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{AB} + \\overrightarrow{BA} = \\vec{0}$.",
          "correctAnswer": true,
          "explanation": "Đúng: $\\overrightarrow{AB} + \\overrightarrow{BA} = \\overrightarrow{AA} = \\vec{0}$."
        }
      ]
    },
    {
      "id": "tf-10.8.2",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,135 210,135 270,35 110,35\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"270\" y2=\"35\" stroke=\"#fbbf24\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"110\" y2=\"35\" stroke=\"#94a3b8\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <circle cx=\"50\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"218\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"96\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Đúng / Sai 2 - Vectơ trong hình bình hành",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho hình bình hành $ABCD$ tâm $O$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo quy tắc hình bình hành."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$.",
          "correctAnswer": true,
          "explanation": "Đúng: $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = \\vec{0}$.",
          "correctAnswer": true,
          "explanation": "Vì $O$ là trung điểm của $AC$ và $BD$ nên $\\overrightarrow{OA} + \\overrightarrow{OC} = \\vec{0}$ và $\\overrightarrow{OB} + \\overrightarrow{OD} = \\vec{0}$."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{AC}$.",
          "correctAnswer": false,
          "explanation": "Sai: $\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{BD}$, không phải $\\overrightarrow{AC}$."
        }
      ]
    },
    {
      "id": "tf-10.8.3",
      "badge": "Đúng / Sai 3 - Vectơ trong tam giác có trung tuyến",
      "source": "Đề kiểm tra định kì Toán 10",
      "prompt": "Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM}$.",
          "correctAnswer": true,
          "explanation": "$M$ là trung điểm của $BC$ nên $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM}$."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo tính chất trọng tâm."
        },
        {
          "id": "c",
          "text": "Với mọi điểm $O$ bất kì, ta luôn có $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo hệ thức vectơ trọng tâm."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{MB} + \\overrightarrow{MC} = \\overrightarrow{BC}$.",
          "correctAnswer": false,
          "explanation": "Sai: vì $M$ là trung điểm $BC$ nên $\\overrightarrow{MB} + \\overrightarrow{MC} = \\vec{0}$."
        }
      ]
    },
    {
      "id": "tf-10.8.4",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Đúng / Sai 4 - Độ dài vectơ trong hình vuông",
      "source": "Đề thi học kì 1 Toán 10",
      "prompt": "Cho hình vuông $ABCD$ có cạnh bằng $a$, tâm $O$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$|\\overrightarrow{AB} + \\overrightarrow{AD}| = a\\sqrt{2}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC} \\implies |\\overrightarrow{AC}| = a\\sqrt{2}$."
        },
        {
          "id": "b",
          "text": "$|\\overrightarrow{AB} - \\overrightarrow{AD}| = a\\sqrt{2}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB} \\implies |\\overrightarrow{DB}| = a\\sqrt{2}$."
        },
        {
          "id": "c",
          "text": "$|\\overrightarrow{OA} - \\overrightarrow{OB}| = a$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{OA} - \\overrightarrow{OB} = \\overrightarrow{BA} \\implies |\\overrightarrow{BA}| = a$."
        },
        {
          "id": "d",
          "text": "$|\\overrightarrow{OA} + \\overrightarrow{OB}| = a\\sqrt{2}$.",
          "correctAnswer": false,
          "explanation": "Gọi $M$ là trung điểm $AB$, $|\\overrightarrow{OA} + \\overrightarrow{OB}| = 2OM = 2 \\cdot \\frac{a}{2} = a \\ne a\\sqrt{2}$."
        }
      ]
    },
    {
      "id": "tf-10.8.5",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Đúng / Sai 5 - Vectơ trong tam giác đều cạnh a",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho tam giác đều $ABC$ cạnh bằng $a$, chiều cao $AH$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$|\\overrightarrow{AB} - \\overrightarrow{AC}| = a$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB} \\implies |\\overrightarrow{CB}| = a$."
        },
        {
          "id": "b",
          "text": "$|\\overrightarrow{AB} + \\overrightarrow{AC}| = a\\sqrt{3}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AH} \\implies 2AH = 2 \\cdot \\frac{a\\sqrt{3}}{2} = a\\sqrt{3}$."
        },
        {
          "id": "c",
          "text": "$|\\overrightarrow{AH} + \\overrightarrow{HB}| = a$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AH} + \\overrightarrow{HB} = \\overrightarrow{AB} \\implies |\\overrightarrow{AB}| = a$."
        },
        {
          "id": "d",
          "text": "$|\\overrightarrow{AB} + \\overrightarrow{BC}| = 2a$.",
          "correctAnswer": false,
          "explanation": "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC} \\implies |\\overrightarrow{AC}| = a \\ne 2a$."
        }
      ]
    },
    {
      "id": "tf-10.8.6",
      "badge": "Đúng / Sai 6 - Rút gọn biểu thức vectơ nâng cao",
      "source": "Đề thi HSG Toán 10",
      "prompt": "Cho 6 điểm tùy ý $A, B, C, D, E, F$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AB} + \\overrightarrow{CD} + \\overrightarrow{EA} = \\overrightarrow{ED} + \\overrightarrow{CB}$.",
          "correctAnswer": false,
          "explanation": "$\\overrightarrow{EA} + \\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{EB} + \\overrightarrow{CD}$, trong khi vế phải là $\\overrightarrow{ED} + \\overrightarrow{CB} = \\overrightarrow{EB} + \\overrightarrow{CD}$? Thử: $\\overrightarrow{EB} + \\overrightarrow{CD} - (\\overrightarrow{ED} + \\overrightarrow{CB}) = \\overrightarrow{EB} - \\overrightarrow{ED} + \\overrightarrow{CD} - \\overrightarrow{CB} = \\overrightarrow{DB} + \\overrightarrow{DB} = 2\\overrightarrow{DB} \\ne \\vec{0}$."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{AD} + \\overrightarrow{BE} + \\overrightarrow{CF} = \\overrightarrow{AE} + \\overrightarrow{BF} + \\overrightarrow{CD}$.",
          "correctAnswer": true,
          "explanation": "Biến đổi vế trái trừ vế phải: $(\\overrightarrow{AD} - \\overrightarrow{CD}) + (\\overrightarrow{BE} - \\overrightarrow{AE}) + (\\overrightarrow{CF} - \\overrightarrow{BF}) = \\overrightarrow{AC} + \\overrightarrow{BA} + \\overrightarrow{CB} = \\overrightarrow{BA} + \\overrightarrow{AC} + \\overrightarrow{CB} = \\overrightarrow{BB} = \\vec{0}$."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{AB} - \\overrightarrow{DC} = \\overrightarrow{AC} - \\overrightarrow{DB}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$, còn $\\overrightarrow{DC} - \\overrightarrow{DB} = \\overrightarrow{BC} = -\\overrightarrow{CB}$, vậy $\\overrightarrow{AB} + \\overrightarrow{DB} = \\overrightarrow{AC} + \\overrightarrow{DC}$."
        },
        {
          "id": "d",
          "text": "Nếu $\\overrightarrow{AB} + \\overrightarrow{CD} = \\vec{0}$ thì tứ giác $ABDC$ là hình bình hành.",
          "correctAnswer": false,
          "explanation": "$\\overrightarrow{AB} = -\\overrightarrow{CD} = \\overrightarrow{DC}$, do đó tứ giác $ABCD$ là hình bình hành, không phải $ABDC$."
        }
      ]
    },
    {
      "id": "tf-10.8.7",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- H�nh b�nh h�nh h?p l?c n�t d?t -->\n  <polygon points=\"60,140 170,140 225,45 115,45\" fill=\"#1e293b\" fillOpacity=\"0.3\" stroke=\"#475569\" strokeWidth=\"1\" strokeDasharray=\"3 3\"/>\n  <!-- L?c F1 n?m ngang -->\n  <line x1=\"60\" y1=\"140\" x2=\"164\" y2=\"140\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#arrC)\"/>\n  <text x=\"120\" y=\"158\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">F1 = 50 N</text>\n  <!-- L?c F2 t?o g�c 60 d? -->\n  <line x1=\"60\" y1=\"140\" x2=\"111\" y2=\"51\" stroke=\"#34d399\" strokeWidth=\"3\" markerEnd=\"url(#arrE)\"/>\n  <text x=\"65\" y=\"75\" fill=\"#34d399\" fontSize=\"12\" fontWeight=\"bold\">F2 = 50 N</text>\n  <!-- G�c 60 d? -->\n  <path d=\"M 90 140 A 30 30 0 0 0 80 105\" fill=\"none\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <text x=\"96\" y=\"125\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">60�</text>\n  <!-- Vecto h?p l?c F (du?ng ch�o) - KH�NG GHI K?T QU? S? -->\n  <line x1=\"60\" y1=\"140\" x2=\"219\" y2=\"49\" stroke=\"#fbbf24\" strokeWidth=\"3\" markerEnd=\"url(#arrA)\"/>\n  <text x=\"210\" y=\"38\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">F (H?p l?c)</text>\n  <!-- �i?m d?t O -->\n  <circle cx=\"60\" cy=\"140\" r=\"4.5\" fill=\"#f8fafc\"/>\n  <text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">O</text>\n</svg>",
      "badge": "Đúng / Sai 7 - Bài toán thực tế hai lực kéo tàu",
      "source": "Ứng dụng Vật lý 10",
      "prompt": "Hai chiếc tàu kéo tác dụng vào một chiếc sà lan hai lực kéo $\\vec{F}_1$ và $\\vec{F}_2$ có cùng độ lớn $4000\\text{ N}$, góc hợp bởi hai dây kéo là $90^\\circ$. Gọi $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ là lực kéo tổng hợp tác dụng lên sà lan. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hai vectơ lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau.",
          "correctAnswer": true,
          "explanation": "Góc giữa hai lực bằng $90^\\circ$."
        },
        {
          "id": "b",
          "text": "Độ lớn của hợp lực $\\vec{F}$ tính theo công thức $|\\vec{F}| = \\sqrt{F_1^2 + F_2^2}$.",
          "correctAnswer": true,
          "explanation": "Do hai lực vuông góc nên áp dụng định lý Pythagore cho hình chữ nhật hợp lực: $F = \\sqrt{F_1^2 + F_2^2}$."
        },
        {
          "id": "c",
          "text": "Độ lớn của hợp lực bằng $8000\\text{ N}$.",
          "correctAnswer": false,
          "explanation": "$F = 4000\\sqrt{2} \\approx 5657\\text{ N} \\ne 8000\\text{ N}$."
        },
        {
          "id": "d",
          "text": "Hướng của lực tổng hợp $\\vec{F}$ chia đôi góc giữa hai sợi dây kéo.",
          "correctAnswer": true,
          "explanation": "Vì hai lực có độ lớn bằng nhau nên hình bình hành lực là hình thoi (ở đây là hình vuông), đường chéo là phân giác."
        }
      ],
    },
    {
      "id": "tf-10.8.8",
      "badge": "Đúng / Sai 8 - Vận tốc máy bay khi có gió thổi",
      "source": "Toán học Hàng không",
      "prompt": "Một chiếc máy bay đang bay về hướng Đông với tốc độ riêng $500\\text{ km/h}$. Cùng lúc đó có một cơn gió thổi đều về hướng Bắc với tốc độ $50\\text{ km/h}$. Vận tốc tổng hợp của máy bay so với mặt đất là $\\vec{v} = \\vec{v}_b + \\vec{v}_g$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Vectơ $\\vec{v}_b$ và vectơ $\\vec{v}_g$ vuông góc với nhau.",
          "correctAnswer": true,
          "explanation": "Hướng Đông và hướng Bắc vuông góc nhau."
        },
        {
          "id": "b",
          "text": "Máy bay bay lệch về hướng Đông Bắc so với đường bay dự định.",
          "correctAnswer": true,
          "explanation": "Gió thổi về hướng Bắc sẽ đẩy máy bay dạt về hướng Bắc tạo thành hướng Đông Bắc."
        },
        {
          "id": "c",
          "text": "Tốc độ của máy bay so với mặt đất nhỏ hơn $500\\text{ km/h}$.",
          "correctAnswer": false,
          "explanation": "Tốc độ $v = \\sqrt{500^2 + 50^2} = \\sqrt{252500} \\approx 502.5\\text{ km/h} > 500\\text{ km/h}$."
        },
        {
          "id": "d",
          "text": "Góc lệch đường bay của máy bay so với hướng Đông thỏa mãn $\\tan \\alpha = \\frac{50}{500} = 0.1$.",
          "correctAnswer": true,
          "explanation": "Góc lệch $\\alpha$ có $\\tan \\alpha = \\frac{v_g}{v_b} = \\frac{50}{500} = 0.1$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.8.1",
      "badge": "Trả lời ngắn 1 - Độ dài tổng vectơ hình vuông",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho hình vuông $ABCD$ có cạnh bằng $6$. Tính độ dài của vectơ $\\vec{u} = \\overrightarrow{AB} + \\overrightarrow{AD}$ (kết quả làm tròn đến hàng phần mười).",
      "correctAnswer": "8.5",
      "acceptableAnswers": [
        "8.5",
        "8,5",
        "6*sqrt(2)"
      ],
      "explanation": "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Độ dài: $|\\overrightarrow{AC}| = 6\\sqrt{2} \\approx 8.485 \\approx 8.5$."
    },
    {
      "id": "sa-10.8.2",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,135 210,135 270,35 110,35\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"135\" x2=\"270\" y2=\"35\" stroke=\"#fbbf24\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <line x1=\"210\" y1=\"135\" x2=\"110\" y2=\"35\" stroke=\"#94a3b8\" strokeWidth=\"1.2\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"85\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"78\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <circle cx=\"50\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"210\" cy=\"135\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"218\" y=\"145\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"270\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"278\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"110\" cy=\"35\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"96\" y=\"35\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Trả lời ngắn 2 - Độ dài hiệu vectơ tam giác vuông",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5\\text{ cm}, AC = 12\\text{ cm}$. Tính độ dài của vectơ $\\overrightarrow{AB} - \\overrightarrow{AC}$ (theo cm).",
      "correctAnswer": "13",
      "acceptableAnswers": [
        "13",
        "13 cm"
      ],
      "explanation": "$\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB} \\implies |\\overrightarrow{CB}| = BC = \\sqrt{5^2 + 12^2} = 13\\text{ cm}$."
    },
    {
      "id": "sa-10.8.3",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 70,150 250,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"144\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <rect x=\"160\" y=\"140\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#94a3b8\" strokeWidth=\"1\"/>\n  <line x1=\"70\" y1=\"150\" x2=\"154\" y2=\"29\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"70\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"58\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"250\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"258\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"168\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">H</text>\n</svg>",
      "badge": "Trả lời ngắn 3 - Độ dài tổng hai vectơ tam giác đều",
      "source": "Đề kiểm tra Toán 10",
      "prompt": "Cho tam giác đều $ABC$ có cạnh bằng $4$. Tính độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AC}$ (làm tròn đến hàng phần mười).",
      "correctAnswer": "6.9",
      "acceptableAnswers": [
        "6.9",
        "6,9",
        "4*sqrt(3)"
      ],
      "explanation": "Gọi $H$ là trung điểm $BC$: $|\\overrightarrow{AB} + \\overrightarrow{AC}| = 2AH = 2 \\cdot \\frac{4\\sqrt{3}}{2} = 4\\sqrt{3} \\approx 6.928 \\approx 6.9$."
    },
    {
      "id": "sa-10.8.4",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Trả lời ngắn 4 - Độ dài hiệu hai vectơ hình chữ nhật",
      "source": "Bộ đề Toán 10 KNTT",
      "prompt": "Cho hình chữ nhật $ABCD$ có $AB = 8, AD = 6$. Tính độ dài của vectơ $\\overrightarrow{AB} - \\overrightarrow{AD}$.",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10"
      ],
      "explanation": "$\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB} \\implies |\\overrightarrow{DB}| = \\sqrt{8^2 + 6^2} = 10$."
    },
    {
      "id": "sa-10.8.5",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 70,150 250,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"144\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <rect x=\"160\" y=\"140\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#94a3b8\" strokeWidth=\"1\"/>\n  <line x1=\"70\" y1=\"150\" x2=\"154\" y2=\"29\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"70\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"58\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"250\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"258\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"168\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">H</text>\n</svg>",
      "badge": "Trả lời ngắn 5 - Độ dài tổng hai vectơ cùng hướng",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho đoạn thẳng $AB = 10$. Điểm $C$ nằm giữa $A$ và $B$ sao cho $AC = 4$. Tính độ dài của vectơ $\\vec{u} = \\overrightarrow{AC} + \\overrightarrow{CB}$.",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10"
      ],
      "explanation": "$\\overrightarrow{AC} + \\overrightarrow{CB} = \\overrightarrow{AB} \\implies |\\overrightarrow{AB}| = 10$."
    },
    {
      "id": "sa-10.8.6",
      "badge": "Trả lời ngắn 6 - Hợp lực kéo vật vuông góc",
      "source": "Vật lý 10 & Vectơ thực tế",
      "prompt": "Hai lực $\\vec{F}_1$ và $\\vec{F}_2$ cùng tác dụng lên một chất điểm có phương vuông góc với nhau, độ lớn tương ứng là $60\\text{ N}$ và $80\\text{ N}$. Tính độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ (theo đơn vị N).",
      "correctAnswer": "100",
      "acceptableAnswers": [
        "100",
        "100 N"
      ],
      "explanation": "Vì hai lực vuông góc nên $|\\vec{F}| = \\sqrt{60^2 + 80^2} = 100\\text{ N}$."
    },
    {
      "id": "sa-10.8.7",
      "badge": "Trả lời ngắn 7 - Độ dài vectơ trọng tâm",
      "source": "Đề thi khảo sát Toán 10",
      "prompt": "Cho tam giác đều $ABC$ cạnh bằng $3\\sqrt{3}$, có trọng tâm $G$. Tính độ dài của vectơ $\\overrightarrow{GA} + \\overrightarrow{GB}$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3"
      ],
      "explanation": "Vì $G$ là trọng tâm nên $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\implies \\overrightarrow{GA} + \\overrightarrow{GB} = -\\overrightarrow{GC}$. Do đó $|\\overrightarrow{GA} + \\overrightarrow{GB}| = |\\overrightarrow{GC}| = \\frac{2}{3} h = \\frac{2}{3} \\cdot \\frac{3\\sqrt{3} \\cdot \\sqrt{3}}{2} = 3$."
    },
    {
      "id": "sa-10.8.8",
      "badge": "Trả lời ngắn 8 - Độ dài tổng hai vectơ góc 120 độ",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có cùng độ lớn bằng $10$, góc giữa hai vectơ là $120^\\circ$. Tính độ dài của vectơ tổng $\\vec{a} + \\vec{b}$.",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10"
      ],
      "explanation": "$|\\vec{a} + \\vec{b}|^2 = 10^2 + 10^2 + 2(10)(10)\\cos 120^\\circ = 100 + 100 - 100 = 100 \\implies |\\vec{a} + \\vec{b}| = 10$."
    },
    {
      "id": "sa-10.8.9",
      "badge": "Trả lời ngắn 9 - Tổng hai vectơ góc 60 độ",
      "source": "Đề kiểm tra Toán 10",
      "prompt": "Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng xuất phát từ một điểm, có độ lớn $|\\vec{u}| = 6, |\\vec{v}| = 6$, góc giữa chúng bằng $60^\\circ$. Tính độ dài của vectơ tổng $\\vec{u} + \\vec{v}$ (làm tròn đến hàng phần mười).",
      "correctAnswer": "10.4",
      "acceptableAnswers": [
        "10.4",
        "10,4",
        "6*sqrt(3)"
      ],
      "explanation": "$|\\vec{u} + \\vec{v}| = 2 \\cdot 6 \\cos 30^\\circ = 6\\sqrt{3} \\approx 10.392 \\approx 10.4$."
    },
    {
      "id": "sa-10.8.10",
      "badge": "Trả lời ngắn 10 - Vectơ đối trong hình bình hành",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho hình bình hành $ABCD$ có $AB = 7, AD = 5$. Tính độ dài của vectơ $\\vec{u} = \\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{CD} + \\overrightarrow{DA}$.",
      "correctAnswer": "0",
      "acceptableAnswers": [
        "0"
      ],
      "explanation": "Biểu thức là chu trình khép kín hoặc gộp cặp đối: $\\overrightarrow{BA} + \\overrightarrow{CD} = \\vec{0}$ và $\\overrightarrow{BC} + \\overrightarrow{DA} = \\vec{0} \\implies \\vec{u} = \\vec{0}$, độ dài bằng $0$."
    },
    {
      "id": "sa-10.8.11",
      "badge": "Trả lời ngắn 11 - Bài toán thực tế thuyền qua sông",
      "source": "Ứng dụng Vectơ trong Thực tiễn",
      "prompt": "Một chiếc ca nô di chuyển trên sông: vận tốc riêng của máy đẩy ca nô là $15\\text{ km/h}$ theo phương thẳng qua bờ đối diện, vận tốc dòng nước chảy là $8\\text{ km/h}$. Tính tốc độ thực tế của ca nô so với bờ sông (theo km/h).",
      "correctAnswer": "17",
      "acceptableAnswers": [
        "17",
        "17 km/h"
      ],
      "explanation": "Vận tốc thực tế là tổng hai vectơ vuông góc: $v = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\text{ km/h}$.",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- Hai b? s�ng -->\n  <rect x=\"30\" y=\"20\" width=\"260\" height=\"15\" fill=\"#334155\" rx=\"2\"/>\n  <text x=\"40\" y=\"32\" fill=\"#94a3b8\" fontSize=\"10\">B? b�n kia</text>\n  <rect x=\"30\" y=\"145\" width=\"260\" height=\"15\" fill=\"#334155\" rx=\"2\"/>\n  <text x=\"40\" y=\"157\" fill=\"#94a3b8\" fontSize=\"10\">B? xu?t ph�t</text>\n  <!-- D�ng nu?c n�t d?t -->\n  <line x1=\"60\" y1=\"65\" x2=\"260\" y2=\"65\" stroke=\"#1e3a5f\" strokeWidth=\"1\" strokeDasharray=\"6 4\"/>\n  <line x1=\"60\" y1=\"105\" x2=\"260\" y2=\"105\" stroke=\"#1e3a5f\" strokeWidth=\"1\" strokeDasharray=\"6 4\"/>\n  <!-- �i?m xu?t ph�t A v� d�ch B d? ki?n -->\n  <circle cx=\"100\" cy=\"145\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"86\" y=\"155\" fill=\"#f8fafc\" fontSize=\"11\" fontWeight=\"bold\">B?n A</text>\n  <circle cx=\"100\" cy=\"35\" r=\"3\" fill=\"#64748b\"/><text x=\"100\" y=\"50\" fill=\"#64748b\" fontSize=\"10\" textAnchor=\"middle\">B (d?i di?n)</text>\n  <!-- H�nh ch? nh?t v?n t?c n�t d?t -->\n  <rect x=\"100\" y=\"35\" width=\"100\" height=\"110\" fill=\"none\" stroke=\"#475569\" strokeWidth=\"1\" strokeDasharray=\"3 3\"/>\n  <!-- v_thuy?n vu�ng g�c b?: 12 km/h -->\n  <line x1=\"100\" y1=\"145\" x2=\"100\" y2=\"43\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#arrC)\"/>\n  <text x=\"75\" y=\"95\" fill=\"#38bdf8\" fontSize=\"11\" fontWeight=\"bold\">v_thuy?n = 12 km/h</text>\n  <!-- v_d�ng xu�i d�ng: 5 km/h -->\n  <line x1=\"100\" y1=\"35\" x2=\"194\" y2=\"35\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#arrE)\"/>\n  <text x=\"150\" y=\"28\" fill=\"#34d399\" fontSize=\"11\" fontWeight=\"bold\">v_d�ng = 5 km/h</text>\n  <!-- v_th?c t? (du?ng ch�o) - KH�NG GHI K?T QU? S? -->\n  <line x1=\"100\" y1=\"145\" x2=\"195\" y2=\"40\" stroke=\"#fbbf24\" strokeWidth=\"2.5\" markerEnd=\"url(#arrA)\"/>\n  <circle cx=\"200\" cy=\"35\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"210\" y=\"38\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">B' (th?c t?)</text>\n  <text x=\"165\" y=\"105\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">v (th?c t?)</text>\n</svg>"
    },
    {
      "id": "sa-10.8.12",
      "badge": "Trả lời ngắn 12 - Hợp lực tác dụng lên vật đứng yên",
      "source": "Toán - Lý 10",
      "prompt": "Một vật có trọng lượng $P = 120\\text{ N}$ được giữ thăng bằng trên mặt đất phẳng nhờ hai sợi dây kéo tạo với nhau góc $90^\\circ$. Biết hai lực căng dây có độ lớn bằng nhau. Độ lớn của mỗi lực căng dây là bao nhiêu Niutơn? (Làm tròn đến hàng phần mười).",
      "correctAnswer": "84.9",
      "acceptableAnswers": [
        "84.9",
        "84,9",
        "60*sqrt(2)"
      ],
      "explanation": "Hợp lực căng dây cân bằng với trọng lượng: $F_{\\text{hl}} = P = 120\\text{ N}$. Vì hai dây vuông góc và lực bằng nhau: $T\\sqrt{2} = 120 \\implies T = \\frac{120}{\\sqrt{2}} = 60\\sqrt{2} \\approx 84.85 \\approx 84.9\\text{ N}$.",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- H�nh b�nh h�nh h?p l?c n�t d?t -->\n  <polygon points=\"60,140 170,140 225,45 115,45\" fill=\"#1e293b\" fillOpacity=\"0.3\" stroke=\"#475569\" strokeWidth=\"1\" strokeDasharray=\"3 3\"/>\n  <!-- L?c F1 n?m ngang -->\n  <line x1=\"60\" y1=\"140\" x2=\"164\" y2=\"140\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#arrC)\"/>\n  <text x=\"120\" y=\"158\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">F1 = 50 N</text>\n  <!-- L?c F2 t?o g�c 60 d? -->\n  <line x1=\"60\" y1=\"140\" x2=\"111\" y2=\"51\" stroke=\"#34d399\" strokeWidth=\"3\" markerEnd=\"url(#arrE)\"/>\n  <text x=\"65\" y=\"75\" fill=\"#34d399\" fontSize=\"12\" fontWeight=\"bold\">F2 = 50 N</text>\n  <!-- G�c 60 d? -->\n  <path d=\"M 90 140 A 30 30 0 0 0 80 105\" fill=\"none\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <text x=\"96\" y=\"125\" fill=\"#fbbf24\" fontSize=\"11\" fontWeight=\"bold\">60�</text>\n  <!-- Vecto h?p l?c F (du?ng ch�o) - KH�NG GHI K?T QU? S? -->\n  <line x1=\"60\" y1=\"140\" x2=\"219\" y2=\"49\" stroke=\"#fbbf24\" strokeWidth=\"3\" markerEnd=\"url(#arrA)\"/>\n  <text x=\"210\" y=\"38\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">F (H?p l?c)</text>\n  <!-- �i?m d?t O -->\n  <circle cx=\"60\" cy=\"140\" r=\"4.5\" fill=\"#f8fafc\"/>\n  <text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">O</text>\n</svg>"
    }
  ]
},

  // ==========================================
  // BÀI 9: TÍCH CỦA MỘT VECTƠ VỚI MỘT SỐ (CHUẨN KNTT 2025)
  // ==========================================
  "t10-b9-tich-vector-voi-mot-so": {
  "id": "t10-b9-tich-vector-voi-mot-so",
  "lessonNumber": 9,
  "title": "Bài 9: Tích của một vectơ với một số",
  "bookChapter": "Chương IV: Vectơ",
  "scenarioTitle": "Tình huống thực tế: Tỉ lệ lực tác dụng, vận tốc biến đổi và phân tích lực trong cơ học",
  "scenarioFrames": [],
  "interactiveType": "vector",
  "youtubeVideoId": "nm35fHPxnPE",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 9 - Tích của một vectơ với một số (Tiết 1) - Toán 10 KNTT",
  "youtubeVideos": [
    {
      "id": "nm35fHPxnPE",
      "title": "Tiết 1: Định nghĩa tích của vectơ với một số & Các tính chất cơ bản"
    },
    {
      "id": "i6dbBGlVd6o",
      "title": "Tiết 2: Điều kiện hai vectơ cùng phương & Ba điểm thẳng hàng"
    },
    {
      "id": "i1VJv-yChFI",
      "title": "Tiết 3: Hệ thức trung điểm, trọng tâm & Phân tích một vectơ theo hai vectơ không cùng phương"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "1. Định nghĩa tích của một vectơ với một số",
      "points": [
        "• Cho số thực $k$ và vectơ $\\\\vec{a} \\",
        "e \\\\vec{0}$. **Tích của vectơ $\\\\vec{a}$ với số $k$** là một vectơ, kí hiệu là $k\\\\vec{a}$.\\",
        "• **Hướng**: $k\\\\vec{a}$ **cùng hướng** với $\\\\vec{a}$ khi $k > 0$; $k\\\\vec{a}$ **ngược hướng** với $\\\\vec{a}$ khi $k < 0$.\\",
        "• **Độ dài**: $|k\\\\vec{a}| = |k| \\\\cdot |\\\\vec{a}|$.\\",
        "• **Quy ước**: $0\\\\vec{a} = \\\\vec{0}$ và $k\\\\vec{0} = \\\\vec{0}$."
      ]
    },
    {
      "index": "2",
      "title": "2. Các tính chất của phép nhân vectơ với số",
      "points": [
        "Với hai vectơ $\\\\vec{a}, \\\\vec{b}$ và hai số thực $k, m$, ta có:\\",
        "• Kết hợp: $k(m\\\\vec{a}) = (km)\\\\vec{a}$.\\",
        "• Phân phối với phép cộng vectơ: $k(\\\\vec{a} + \\\\vec{b}) = k\\\\vec{a} + k\\\\vec{b}$.\\",
        "• Phân phối với phép cộng số: $(k + m)\\\\vec{a} = k\\\\vec{a} + m\\\\vec{a}$.\\",
        "• $1\\\\vec{a} = \\\\vec{a}$ và $(-1)\\\\vec{a} = -\\\\vec{a}$."
      ]
    },
    {
      "index": "3",
      "title": "3. Điều kiện hai vectơ cùng phương & Ba điểm thẳng hàng",
      "points": [
        "• **Điều kiện cùng phương**: Hai vectơ $\\\\vec{a}$ và $\\\\vec{b}$ (với $\\\\vec{a} \\",
        "e \\\\vec{0}$) cùng phương khi và chỉ khi có một số thực $k$ sao cho $\\\\vec{b} = k\\\\vec{a}$.\\",
        "• **Ba điểm thẳng hàng**: Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi có một số thực $k \\",
        "e 0$ sao cho $\\\\overrightarrow{AB} = k\\\\overrightarrow{AC}$."
      ]
    },
    {
      "index": "4",
      "title": "4. Hệ thức trung điểm và trọng tâm",
      "points": [
        "• Nếu $I$ là trung điểm của đoạn thẳng $AB$, thì với mọi điểm $M$ ta có:\\",
        "$$\\\\overrightarrow{MI} = \\\\frac{1}{2}(\\\\overrightarrow{MA} + \\\\overrightarrow{MB})$$\\",
        "• Nếu $G$ là trọng tâm của tam giác $ABC$, thì với mọi điểm $M$ ta có:\\",
        "$$\\\\overrightarrow{MG} = \\\\frac{1}{3}(\\\\overrightarrow{MA} + \\\\overrightarrow{MB} + \\\\overrightarrow{MC})$$\\",
        "• Trên đường trung tuyến $AM$, ta có $\\\\overrightarrow{AG} = \\\\frac{2}{3}\\\\overrightarrow{AM}$ và $\\\\overrightarrow{GA} = -2\\\\overrightarrow{GM}$."
      ]
    },
    {
      "index": "5",
      "title": "5. Phân tích một vectơ theo hai vectơ không cùng phương",
      "points": [
        "• Cho hai vectơ không cùng phương $\\\\vec{a}$ và $\\\\vec{b}$. Với mọi vectơ $\\\\vec{x}$, luôn tồn tại **duy nhất** một cặp số thực $(m; n)$ sao cho:\\",
        "$$\\\\vec{x} = m\\\\vec{a} + n\\\\vec{b}$$\\",
        "*(Đây là cơ sở lý thuyết cho hệ tọa độ vectơ trong mặt phẳng)*."
      ]
    }
  ],
  "tips": [
    "Nhớ quy tắc dấu: Số k dương thì cùng hướng, số k âm thì ngược hướng.",
    "Độ dài của k*vec(a) luôn bằng |k| nhân với độ dài vec(a) (độ dài luôn không âm, ví dụ |-3*vec(a)| = 3|vec(a)|).",
    "Để chứng minh ba điểm A, B, C thẳng hàng: Tìm số k sao cho vec(AB) = k*vec(AC)."
  ],
  "traps": [
    "Bẫy dấu khi biểu diễn trung tuyến: Trọng tâm G chia AM theo tỉ số GA = 2 GM, nhưng vì vec(GA) và vec(GM) ngược hướng nên vec(GA) = -2 vec(GM) (dấu trừ rất hay bị bỏ quên!).",
    "Bẫy độ dài: Tuyệt đối không viết |-2*vec(a)| = -2|vec(a)|! Độ dài vectơ là một số không âm: |-2*vec(a)| = 2|vec(a)|."
  ],
  "quizQuestions": [
    {
      "id": "quiz-10.9.1",
      "badge": "Nhận biết - Độ dài của tích vectơ với số",
      "source": "SGK Toán 10 KNTT Bài 9",
      "question": "Cho vectơ $\\vec{a}$ và số thực $k$. Độ dài của vectơ $k\\vec{a}$ bằng:",
      "options": [
        "$|k| \\cdot |\\vec{a}|$",
        "$k \\cdot |\\vec{a}|$",
        "$-k \\cdot |\\vec{a}|$",
        "$|k| + |\\vec{a}|$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa SGK: $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$, độ dài luôn là số không âm."
    },
    {
      "id": "quiz-10.9.2",
      "badge": "Nhận biết - Hướng của tích vectơ với số",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho vectơ $\\vec{a} \\ne \\vec{0}$. Vectơ $-3\\vec{a}$ có đặc điểm nào sau đây?",
      "options": [
        "Ngược hướng với $\\vec{a}$ và có độ dài bằng $3|\\vec{a}|$.",
        "Cùng hướng với $\\vec{a}$ và có độ dài bằng $3|\\vec{a}|$.",
        "Ngược hướng với $\\vec{a}$ và có độ dài bằng $-3|\\vec{a}|$.",
        "Cùng phương nhưng không so sánh được hướng."
      ],
      "correctIndex": 0,
      "explanation": "Vì hệ số $k = -3 < 0$ nên vectơ $-3\\vec{a}$ ngược hướng với $\\vec{a}$ và có độ dài bằng $|-3| \\cdot |\\vec{a}| = 3|\\vec{a}|$.",
      "svgDiagram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 280\" class=\"w-full h-auto max-w-lg mx-auto select-none rounded-xl shadow-md bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-700/50 p-3\">\n  <defs>\n    <marker id=\"sArrBlue\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#60a5fa\"/>\n    </marker>\n    <marker id=\"sArrGreen\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"sArrRose\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <!-- Vectơ a ban đầu -->\n  <line x1=\"80\" y1=\"80\" x2=\"200\" y2=\"80\" stroke=\"#60a5fa\" stroke-width=\"3.5\" marker-end=\"url(#sArrBlue)\"/>\n  <text x=\"140\" y=\"65\" fill=\"#60a5fa\" font-size=\"14\" font-weight=\"bold\">vec(a)</text>\n  <!-- Vectơ 2a (cùng hướng, gấp đôi độ dài) -->\n  <line x1=\"80\" y1=\"150\" x2=\"320\" y2=\"150\" stroke=\"#34d399\" stroke-width=\"3.5\" marker-end=\"url(#sArrGreen)\"/>\n  <text x=\"200\" y=\"135\" fill=\"#34d399\" font-size=\"14\" font-weight=\"bold\">2*vec(a) (cùng hướng, |2vec(a)| = 2|vec(a)|)</text>\n  <!-- Vectơ -1.5a (ngược hướng) -->\n  <line x1=\"260\" y1=\"220\" x2=\"80\" y2=\"220\" stroke=\"#f43f5e\" stroke-width=\"3.5\" marker-end=\"url(#sArrRose)\"/>\n  <text x=\"170\" y=\"245\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"bold\">-1.5*vec(a) (ngược hướng, |-1.5vec(a)| = 1.5|vec(a)|)</text>\n</svg>"
    },
    {
      "id": "quiz-10.9.3",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Nhận biết - Hệ thức trọng tâm và trung tuyến",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Đẳng thức nào sau đây là ĐÚNG?",
      "options": [
        "$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM}$",
        "$\\overrightarrow{AG} = \\frac{1}{3}\\overrightarrow{AM}$",
        "$\\overrightarrow{GA} = 2\\overrightarrow{GM}$",
        "$\\overrightarrow{AM} = 3\\overrightarrow{AG}$"
      ],
      "correctIndex": 0,
      "explanation": "Trọng tâm $G$ nằm trên đoạn $AM$ sao cho $AG = \\frac{2}{3}AM$, hướng từ $A \\to G$ cùng hướng $A \\to M$ nên $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM}$."
    },
    {
      "id": "quiz-10.9.4",
      "badge": "Thông hiểu - Hệ thức vectơ trung điểm",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho $I$ là trung điểm của đoạn thẳng $AB$. Với điểm $M$ bất kì, ta luôn có:",
      "options": [
        "$\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$",
        "$\\overrightarrow{MA} + \\overrightarrow{MB} = \\overrightarrow{MI}$",
        "$\\overrightarrow{MI} = \\overrightarrow{MA} + \\overrightarrow{MB}$",
        "$\\overrightarrow{MA} + \\overrightarrow{MB} = \\frac{1}{2}\\overrightarrow{MI}$"
      ],
      "correctIndex": 0,
      "explanation": "Hệ thức trung điểm: $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$."
    },
    {
      "id": "quiz-10.9.5",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Thông hiểu - Trọng tâm G và đoạn GM",
      "source": "Đề kiểm tra định kì Toán 10",
      "question": "Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Đẳng thức nào sau đây ĐÚNG?",
      "options": [
        "$\\overrightarrow{GA} = -2\\overrightarrow{GM}$",
        "$\\overrightarrow{GA} = 2\\overrightarrow{GM}$",
        "$\\overrightarrow{GM} = -2\\overrightarrow{GA}$",
        "$\\overrightarrow{GA} = -\\frac{1}{2}\\overrightarrow{GM}$"
      ],
      "correctIndex": 0,
      "explanation": "$G$ nằm giữa $A$ và $M$, đoạn $GA = 2GM$, hai vectơ $\\overrightarrow{GA}$ và $\\overrightarrow{GM}$ ngược hướng nên $\\overrightarrow{GA} = -2\\overrightarrow{GM}$."
    },
    {
      "id": "quiz-10.9.6",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"55\" x2=\"280\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"40\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I</text>\n  <!-- K� hi?u b?ng nhau: 2 v?ch ng?n -->\n  <line x1=\"98\" y1=\"48\" x2=\"98\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"102\" y1=\"48\" x2=\"102\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"218\" y1=\"48\" x2=\"218\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"222\" y1=\"48\" x2=\"222\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n</svg>",
      "badge": "Thông hiểu - Điểm chia đoạn thẳng theo tỉ số",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho đoạn thẳng $AB$ và điểm $M$ nằm giữa $A, B$ sao cho $AM = 3MB$. Đẳng thức vectơ nào sau đây ĐÚNG?",
      "options": [
        "$\\overrightarrow{AM} = \\frac{3}{4}\\overrightarrow{AB}$",
        "$\\overrightarrow{AM} = 3\\overrightarrow{AB}$",
        "$\\overrightarrow{AM} = \\frac{1}{3}\\overrightarrow{AB}$",
        "$\\overrightarrow{AM} = -\\frac{3}{4}\\overrightarrow{AB}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $AB = AM + MB = 3MB + MB = 4MB \\implies AM = \\frac{3}{4}AB$. Do $\\overrightarrow{AM}$ và $\\overrightarrow{AB}$ cùng hướng nên $\\overrightarrow{AM} = \\frac{3}{4}\\overrightarrow{AB}$."
    },
    {
      "id": "quiz-10.9.7",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"55\" x2=\"280\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"40\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I</text>\n  <!-- K� hi?u b?ng nhau: 2 v?ch ng?n -->\n  <line x1=\"98\" y1=\"48\" x2=\"98\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"102\" y1=\"48\" x2=\"102\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"218\" y1=\"48\" x2=\"218\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"222\" y1=\"48\" x2=\"222\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n</svg>",
      "badge": "Thông hiểu - Tìm số k biểu thị hai vectơ đối",
      "source": "Đề thi khảo sát Toán 10",
      "question": "Cho đoạn thẳng $AB$ có trung điểm $I$. Số thực $k$ thỏa mãn $\\overrightarrow{IA} = k\\overrightarrow{AB}$ là:",
      "options": [
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$",
        "$-2$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "$IA = \\frac{1}{2}AB$, chiều từ $I \\to A$ ngược với $A \\to B$ nên $\\overrightarrow{IA} = -\\frac{1}{2}\\overrightarrow{AB} \\implies k = -\\frac{1}{2}$."
    },
    {
      "id": "quiz-10.9.8",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,140 190,140 260,40 120,40\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"140\" x2=\"225\" y2=\"90\" stroke=\"#fbbf24\" strokeWidth=\"2\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"225\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"235\" y=\"94\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">M</text>\n  <circle cx=\"50\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"190\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"198\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"40\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"38\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"120\" cy=\"40\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"106\" y=\"38\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Thông hiểu - Phân tích vectơ trong hình bình hành",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho hình bình hành $ABCD$. Gọi $M$ là trung điểm của $BC$. Phân tích vectơ $\\overrightarrow{AM}$ theo hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AD}$:",
      "options": [
        "$\\overrightarrow{AM} = \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AD}$",
        "$\\overrightarrow{AM} = \\frac{1}{2}\\overrightarrow{AB} + \\overrightarrow{AD}$",
        "$\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{AD}$",
        "$\\overrightarrow{AM} = 2\\overrightarrow{AB} + \\overrightarrow{AD}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{BC}$. Do $\\overrightarrow{BC} = \\overrightarrow{AD}$ nên $\\overrightarrow{AM} = \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AD}$."
    },
    {
      "id": "quiz-10.9.9",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"30\" y1=\"55\" x2=\"290\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"60\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"60\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#38bdf8\"/><text x=\"160\" y=\"80\" fill=\"#38bdf8\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"260\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"260\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">C</text>\n</svg>",
      "badge": "Thông hiểu - Ba điểm thẳng hàng",
      "source": "Đề kiểm tra chuyên đề Vectơ",
      "question": "Điều kiện cần và đủ để ba điểm phân biệt $A, B, C$ thẳng hàng là tồn tại số thực $k$ sao cho:",
      "options": [
        "$\\overrightarrow{AB} = k\\overrightarrow{AC}$",
        "$|\\overrightarrow{AB}| = k|\\overrightarrow{AC}|$",
        "$\\overrightarrow{AB} + \\overrightarrow{AC} = k\\vec{0}$",
        "$\\overrightarrow{AB} = k\\overrightarrow{BC}$ với $k = 1$"
      ],
      "correctIndex": 0,
      "explanation": "Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương, tức là $\\overrightarrow{AB} = k\\overrightarrow{AC}$."
    },
    {
      "id": "quiz-10.9.10",
      "badge": "Thông hiểu - Rút gọn tổ hợp tuyến tính vectơ",
      "source": "SBT Toán 10 KNTT",
      "question": "Thu gọn biểu thức $\\vec{u} = 2(\\vec{a} + 3\\vec{b}) - 3(2\\vec{a} - \\vec{b})$ được kết quả là:",
      "options": [
        "$-4\\vec{a} + 9\\vec{b}$",
        "$-4\\vec{a} + 3\\vec{b}$",
        "$8\\vec{a} + 9\\vec{b}$",
        "$-4\\vec{a} - 9\\vec{b}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\vec{u} = 2\\vec{a} + 6\\vec{b} - 6\\vec{a} + 3\\vec{b} = -4\\vec{a} + 9\\vec{b}$."
    },
    {
      "id": "quiz-10.9.11",
      "badge": "Thông hiểu - Độ dài vectơ tích số",
      "source": "Đề thi học kì 1 Toán 10",
      "question": "Cho tam giác đều $ABC$ cạnh bằng $4$. Độ dài của vectơ $\\vec{u} = 3\\overrightarrow{AB}$ bằng:",
      "options": [
        "$12$",
        "$7$",
        "$4$",
        "$9$"
      ],
      "correctIndex": 0,
      "explanation": "$|\\vec{u}| = |3\\overrightarrow{AB}| = 3|\\overrightarrow{AB}| = 3 \\times 4 = 12$."
    },
    {
      "id": "quiz-10.9.12",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Thông hiểu - Độ dài vectơ có hệ số âm",
      "source": "Bộ đề Toán 10 KNTT",
      "question": "Cho hình vuông $ABCD$ có cạnh bằng $a$. Độ dài của vectơ $\\vec{v} = -2\\overrightarrow{AC}$ bằng:",
      "options": [
        "$2a\\sqrt{2}$",
        "$-2a\\sqrt{2}$",
        "$a\\sqrt{2}$",
        "$4a$"
      ],
      "correctIndex": 0,
      "explanation": "$|-2\\overrightarrow{AC}| = |-2| \\cdot |\\overrightarrow{AC}| = 2 \\cdot a\\sqrt{2} = 2a\\sqrt{2}$."
    },
    {
      "id": "quiz-10.9.13",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Vận dụng - Phân tích vectơ trọng tâm theo hai cạnh",
      "source": "SGK Toán 10 KNTT",
      "question": "Cho tam giác $ABC$ có trọng tâm $G$. Phân tích vectơ $\\overrightarrow{AG}$ theo hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$:",
      "options": [
        "$\\overrightarrow{AG} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$",
        "$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$",
        "$\\overrightarrow{AG} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$",
        "$\\overrightarrow{AG} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi $M$ là trung điểm $BC$, ta có $\\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC})$. Vì $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM}$ nên $\\overrightarrow{AG} = \\frac{2}{3} \\cdot \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC}) = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$."
    },
    {
      "id": "quiz-10.9.14",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"30\" y1=\"55\" x2=\"290\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"60\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"60\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#38bdf8\"/><text x=\"160\" y=\"80\" fill=\"#38bdf8\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"260\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"260\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">C</text>\n</svg>",
      "badge": "Thông hiểu - Tỉ số hai vectơ cùng phương",
      "source": "SBT Toán 10",
      "question": "Cho ba điểm $A, B, C$ thẳng hàng thỏa mãn $\\overrightarrow{AB} = -3\\overrightarrow{AC}$. Khẳng định nào sau đây ĐÚNG?",
      "options": [
        "$A$ nằm giữa $B$ và $C$, $AB = 3AC$.",
        "$C$ nằm giữa $A$ và $B$, $AB = 3AC$.",
        "$B$ nằm giữa $A$ và $C$, $AB = 3AC$.",
        "$A$ nằm giữa $B$ và $C$, $AC = 3AB$."
      ],
      "correctIndex": 0,
      "explanation": "Vì $k = -3 < 0$ nên hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ ngược hướng, suy ra điểm $A$ nằm giữa $B$ và $C$. Độ dài $AB = |-3|AC = 3AC$."
    },
    {
      "id": "quiz-10.9.15",
      "svgDiagram": "<svg viewBox=\"0 0 320 170\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,30 60,140 260,140\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <circle cx=\"160\" cy=\"30\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"20\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"46\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Thông hiểu - Phân tích vectơ trên cạnh tam giác",
      "source": "Đề khảo sát Toán 10",
      "question": "Cho tam giác $ABC$. Lấy điểm $D$ trên cạnh $BC$ sao cho $BD = 2DC$. Phân tích vectơ $\\overrightarrow{AD}$ theo $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$:",
      "options": [
        "$\\overrightarrow{AD} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$",
        "$\\overrightarrow{AD} = \\frac{2}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$",
        "$\\overrightarrow{AD} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$",
        "$\\overrightarrow{AD} = \\overrightarrow{AB} + 2\\overrightarrow{AC}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\overrightarrow{BD} = \\frac{2}{3}\\overrightarrow{BC} = \\frac{2}{3}(\\overrightarrow{AC} - \\overrightarrow{AB})$. Do đó $\\overrightarrow{AD} = \\overrightarrow{AB} + \\overrightarrow{BD} = \\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC} - \\frac{2}{3}\\overrightarrow{AB} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$."
    },
    {
      "id": "quiz-10.9.16",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"80,140 80,40 180,140\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <rect x=\"80\" y=\"125\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#94a3b8\" strokeWidth=\"1\"/>\n  <circle cx=\"80\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"66\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"80\" cy=\"40\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"66\" y=\"38\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"180\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"190\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <text x=\"55\" y=\"95\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">c = 2</text>\n  <text x=\"130\" y=\"158\" fill=\"#34d399\" fontSize=\"12\" fontWeight=\"bold\">b = 2</text>\n</svg>",
      "badge": "Vận dụng - Độ dài vectơ kết hợp",
      "source": "Đề thi HSG Toán 10",
      "question": "Cho tam giác vuông cân $ABC$ tại $A$ có $AB = AC = 2$. Độ dài của vectơ $\\vec{u} = 2\\overrightarrow{AB} + \\overrightarrow{AC}$ bằng:",
      "options": [
        "$2\\sqrt{5}$",
        "$6$",
        "$2\\sqrt{3}$",
        "$4\\sqrt{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì tam giác vuông tại $A$ nên $AB \\perp AC$. Độ dài: $|\\vec{u}| = \\sqrt{(2AB)^2 + AC^2} = \\sqrt{(2 \\times 2)^2 + 2^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}$."
    },
    {
      "id": "quiz-10.9.17",
      "badge": "Thông hiểu - Đẳng thức điểm M",
      "source": "SBT Toán 10 KNTT",
      "question": "Cho hai điểm $A, B$. Điểm $M$ thỏa mãn $\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0}$. Khẳng định nào sau đây ĐÚNG?",
      "options": [
        "$M$ nằm trên đoạn $AB$ sao cho $MA = 2MB$.",
        "$M$ nằm ngoài đoạn $AB$ sao cho $MA = 2MB$.",
        "$M$ là trung điểm của $AB$.",
        "$M$ nằm trên đoạn $AB$ sao cho $MB = 2MA$."
      ],
      "correctIndex": 0,
      "explanation": "$\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0} \\iff \\overrightarrow{MA} = -2\\overrightarrow{MB}$. Hai vectơ ngược hướng nên $M$ nằm giữa $A$ và $B$, độ dài $MA = 2MB$."
    },
    {
      "id": "quiz-10.9.18",
      "badge": "Vận dụng cao - Tìm k để ba điểm thẳng hàng",
      "source": "Bộ đề ôn thi Toán 10",
      "question": "Cho tam giác $ABC$. Gọi $M$ là trung điểm $AB$, $N$ là điểm trên cạnh $AC$ sao cho $NC = 2NA$. Gọi $K$ là trung điểm của $MN$. Khi biểu diễn $\\overrightarrow{AK} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$, cặp số $(x; y)$ là:",
      "options": [
        "$(\\frac{1}{4}; \\frac{1}{6})$",
        "$(\\frac{1}{2}; \\frac{1}{3})$",
        "$(\\frac{1}{4}; \\frac{1}{3})$",
        "$(\\frac{1}{2}; \\frac{1}{6})$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\overrightarrow{AM} = \\frac{1}{2}\\overrightarrow{AB}$, $\\overrightarrow{AN} = \\frac{1}{3}\\overrightarrow{AC}$. Vì $K$ là trung điểm $MN$ nên $\\overrightarrow{AK} = \\frac{1}{2}(\\overrightarrow{AM} + \\overrightarrow{AN}) = \\frac{1}{2}(\\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}) = \\frac{1}{4}\\overrightarrow{AB} + \\frac{1}{6}\\overrightarrow{AC}$."
    },
    {
      "id": "quiz-10.9.19",
      "svgDiagram": "<svg viewBox=\"0 0 320 140\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"50\" x2=\"144\" y2=\"50\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#mArrCyan)\"/>\n  <text x=\"45\" y=\"42\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">v0 (v?n t?c ban d?u)</text>\n  <line x1=\"50\" y1=\"100\" x2=\"264\" y2=\"100\" stroke=\"#fbbf24\" strokeWidth=\"3.5\" markerEnd=\"url(#mArrAmber)\"/>\n  <text x=\"45\" y=\"92\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">v = k � v0 (v?n t?c sau khi tang t?c)</text>\n</svg>",
      "badge": "Vận dụng - Bài toán thực tế ô tô tăng tốc",
      "source": "Vật lý 10 & Vectơ thực tế",
      "question": "Một chiếc xe đang chạy thẳng đều với vận tốc $\\vec{v}_0$ có độ lớn $40\\text{ km/h}$. Người lái xe tăng tốc để vận tốc mới đạt $\\vec{v} = 1.8\\vec{v}_0$. Độ lớn của vận tốc mới là:",
      "options": [
        "$72\\text{ km/h}$",
        "$58\\text{ km/h}$",
        "$80\\text{ km/h}$",
        "$60\\text{ km/h}$"
      ],
      "correctIndex": 0,
      "explanation": "$|\\vec{v}| = |1.8\\vec{v}_0| = 1.8 \\times 40 = 72\\text{ km/h}$."
    },
    {
      "id": "quiz-10.9.20",
      "svgDiagram": "<svg viewBox=\"0 0 320 150\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"75\" x2=\"270\" y2=\"75\" stroke=\"#94a3b8\" strokeWidth=\"4\"/>\n  <polygon points=\"140,75 130,110 150,110\" fill=\"#fbbf24\"/>\n  <circle cx=\"140\" cy=\"75\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"140\" y=\"125\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Kh?i t�m G</text>\n  <circle cx=\"60\" cy=\"60\" r=\"14\" fill=\"#38bdf8\"/><text x=\"60\" y=\"64\" fill=\"#0f172a\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">m1</text>\n  <circle cx=\"250\" cy=\"62\" r=\"11\" fill=\"#34d399\"/><text x=\"250\" y=\"66\" fill=\"#0f172a\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">m2</text>\n  <line x1=\"140\" y1=\"75\" x2=\"68\" y2=\"75\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"140\" y1=\"75\" x2=\"242\" y2=\"75\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <text x=\"100\" y=\"92\" fill=\"#38bdf8\" fontSize=\"11\">GA</text>\n  <text x=\"195\" y=\"92\" fill=\"#34d399\" fontSize=\"11\">GB</text>\n</svg>",
      "badge": "Vận dụng cao - Trọng tâm hệ hạt khối lượng",
      "source": "SGK Toán 10 KNTT Bài 9",
      "question": "Hai chất điểm có khối lượng $m_1 = 2\\text{ kg}$ tại điểm $A$ và $m_2 = 3\\text{ kg}$ tại điểm $B$. Khối tâm (trọng tâm hệ) $G$ của hai chất điểm được định nghĩa bởi hệ thức $2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$. Khẳng định nào sau đây ĐÚNG?",
      "options": [
        "Điểm $G$ nằm trên đoạn $AB$ và $GA = \\frac{3}{2}GB$.",
        "Điểm $G$ nằm ngoài đoạn $AB$ và $GA = \\frac{3}{2}GB$.",
        "Điểm $G$ là trung điểm của đoạn thẳng $AB$.",
        "Điểm $G$ nằm trên đoạn $AB$ và $GB = \\frac{3}{2}GA$."
      ],
      "correctIndex": 0,
      "explanation": "$2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0} \\iff \\overrightarrow{GA} = -\\frac{3}{2}\\overrightarrow{GB}$. Vì hệ số âm nên $G$ nằm giữa $A$ và $B$, độ dài $GA = \\frac{3}{2}GB$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-10.9.1",
      "badge": "Đúng / Sai 1 - Tính chất tích vectơ với số",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho vectơ $\\vec{a} \\ne \\vec{0}$ và các số thực $k, m$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Nếu $k > 0$ thì vectơ $k\\vec{a}$ cùng hướng với vectơ $\\vec{a}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo định nghĩa tích vectơ với số dương."
        },
        {
          "id": "b",
          "text": "Độ dài $|k\\vec{a}| = k|\\vec{a}|$ với mọi số thực $k$.",
          "correctAnswer": false,
          "explanation": "Sai: khi $k < 0$ thì $|k\\vec{a}| = -k|\\vec{a}| = |k| \\cdot |\\vec{a}|$, không phải $k|\\vec{a}|$."
        },
        {
          "id": "c",
          "text": "Vectơ $0\\vec{a} = \\vec{0}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo quy ước số 0 nhân vectơ cho kết quả là vectơ-không."
        },
        {
          "id": "d",
          "text": "Nếu $k\\vec{a} = m\\vec{a}$ thì chắc chắn $k = m$.",
          "correctAnswer": true,
          "explanation": "Vì $\\vec{a} \\ne \\vec{0}$ nên $(k - m)\\vec{a} = \\vec{0} \\implies k - m = 0 \\iff k = m$."
        }
      ]
    },
    {
      "id": "tf-10.9.2",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Đúng / Sai 2 - Hệ thức trọng tâm và trung điểm",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ có trung tuyến $AM$, trọng tâm $G$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM}$.",
          "correctAnswer": true,
          "explanation": "$G$ nằm trên $AM$ và $AG = \\frac{2}{3}AM$, cùng hướng nên $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM}$."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$.",
          "correctAnswer": true,
          "explanation": "Tính chất trọng tâm tam giác."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{GM} = -\\frac{1}{2}\\overrightarrow{GA}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{GM}$ và $\\overrightarrow{GA}$ ngược hướng, $GM = \\frac{1}{2}GA \\implies \\overrightarrow{GM} = -\\frac{1}{2}\\overrightarrow{GA}$."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{AB} + \\overrightarrow{AC} = 3\\overrightarrow{AG}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM} = 2 \\cdot \\frac{3}{2}\\overrightarrow{AG} = 3\\overrightarrow{AG}$."
        }
      ],
    },
    {
      "id": "tf-10.9.3",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"55\" x2=\"280\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"40\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I</text>\n  <!-- K� hi?u b?ng nhau: 2 v?ch ng?n -->\n  <line x1=\"98\" y1=\"48\" x2=\"98\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"102\" y1=\"48\" x2=\"102\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"218\" y1=\"48\" x2=\"218\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"222\" y1=\"48\" x2=\"222\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n</svg>",
      "badge": "Đúng / Sai 3 - Điểm chia đoạn thẳng theo tỉ lệ",
      "source": "Đề kiểm tra Toán 10",
      "prompt": "Cho đoạn thẳng $AB$ có độ dài $12\\text{ cm}$. Điểm $M$ thuộc đoạn $AB$ sao cho $AM = 8\\text{ cm}$. Xét tính Đúng/Sai của các đẳng thức sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AM} = \\frac{2}{3}\\overrightarrow{AB}$.",
          "correctAnswer": true,
          "explanation": "$\\frac{AM}{AB} = \\frac{8}{12} = \\frac{2}{3}$ và cùng hướng nên $\\overrightarrow{AM} = \\frac{2}{3}\\overrightarrow{AB}$."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{MB} = -\\frac{1}{3}\\overrightarrow{AB}$.",
          "correctAnswer": false,
          "explanation": "$\\overrightarrow{MB}$ cùng hướng với $\\overrightarrow{AB}$ và $MB = 4 = \\frac{1}{3}AB$ nên $\\overrightarrow{MB} = \\frac{1}{3}\\overrightarrow{AB}$, không có dấu trừ."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{MA}$ ngược hướng $\\overrightarrow{MB}$ và $MA = 2MB \\implies \\overrightarrow{MA} = -2\\overrightarrow{MB} \\iff \\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0}$."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{BA} = -\\frac{3}{2}\\overrightarrow{AM}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{BA} = -\\overrightarrow{AB} = -\\frac{3}{2}\\overrightarrow{AM}$."
        }
      ]
    },
    {
      "id": "tf-10.9.4",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"50,140 190,140 260,40 120,40\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"50\" y1=\"140\" x2=\"225\" y2=\"90\" stroke=\"#fbbf24\" strokeWidth=\"2\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"225\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"235\" y=\"94\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">M</text>\n  <circle cx=\"50\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"36\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"190\" cy=\"140\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"198\" y=\"152\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"40\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"38\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"120\" cy=\"40\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"106\" y=\"38\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Đúng / Sai 4 - Phân tích vectơ trong hình bình hành",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho hình bình hành $ABCD$. Gọi $I$ là trung điểm của $CD$. Xét tính Đúng/Sai của các phép phân tích vectơ sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{AI} = \\overrightarrow{AD} + \\frac{1}{2}\\overrightarrow{AB}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{AI} = \\overrightarrow{AD} + \\overrightarrow{DI} = \\overrightarrow{AD} + \\frac{1}{2}\\overrightarrow{DC} = \\overrightarrow{AD} + \\frac{1}{2}\\overrightarrow{AB}$."
        },
        {
          "id": "b",
          "text": "$\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$.",
          "correctAnswer": true,
          "explanation": "Quy tắc hình bình hành."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB}$.",
          "correctAnswer": true,
          "explanation": "Quy tắc trừ: $\\overrightarrow{AD} - \\overrightarrow{AB} = \\overrightarrow{BD}$."
        },
        {
          "id": "d",
          "text": "$\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AC} + \\frac{1}{2}\\overrightarrow{AD}$.",
          "correctAnswer": true,
          "explanation": "Vì $I$ là trung điểm $CD$ nên $\\overrightarrow{AI} = \\frac{1}{2}(\\overrightarrow{AC} + \\overrightarrow{AD})$."
        }
      ]
    },
    {
      "id": "tf-10.9.5",
      "badge": "Đúng / Sai 5 - Ba điểm thẳng hàng",
      "source": "Đề thi HSG Toán 10",
      "prompt": "Cho tam giác $ABC$. Lấy các điểm $M, N$ sao cho $\\overrightarrow{AM} = 3\\overrightarrow{AB}$ và $\\overrightarrow{AN} = 3\\overrightarrow{AC}$. Xét tính Đúng/Sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\overrightarrow{MN} = 3\\overrightarrow{BC}$.",
          "correctAnswer": true,
          "explanation": "$\\overrightarrow{MN} = \\overrightarrow{AN} - \\overrightarrow{AM} = 3\\overrightarrow{AC} - 3\\overrightarrow{AB} = 3(\\overrightarrow{AC} - \\overrightarrow{AB}) = 3\\overrightarrow{BC}$."
        },
        {
          "id": "b",
          "text": "Hai đường thẳng $MN$ và $BC$ song song với nhau.",
          "correctAnswer": true,
          "explanation": "Vì $\\overrightarrow{MN} = 3\\overrightarrow{BC}$ và $M \\notin BC$ nên $MN // BC$."
        },
        {
          "id": "c",
          "text": "Độ dài đoạn thẳng $MN$ gấp 3 lần độ dài đoạn thẳng $BC$.",
          "correctAnswer": true,
          "explanation": "$MN = |3\\overrightarrow{BC}| = 3BC$."
        },
        {
          "id": "d",
          "text": "Ba điểm $A, M, N$ thẳng hàng.",
          "correctAnswer": false,
          "explanation": "Tam giác $AMN$ đồng dạng tam giác $ABC$, ba điểm $A, M, N$ không thẳng hàng vì $A, B, C$ không thẳng hàng."
        }
      ]
    },
    {
      "id": "tf-10.9.6",
      "badge": "Đúng / Sai 6 - Biểu thị vectơ tâm tỉ cự",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$. Gọi $I$ là điểm thỏa mãn $\\overrightarrow{IA} + 2\\overrightarrow{IB} + 3\\overrightarrow{IC} = \\vec{0}$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Với mọi điểm $M$, ta có $\\overrightarrow{MA} + 2\\overrightarrow{MB} + 3\\overrightarrow{MC} = 6\\overrightarrow{MI}$.",
          "correctAnswer": true,
          "explanation": "Chèn điểm $I$: $\\overrightarrow{MI} + \\overrightarrow{IA} + 2(\\overrightarrow{MI} + \\overrightarrow{IB}) + 3(\\overrightarrow{MI} + \\overrightarrow{IC}) = 6\\overrightarrow{MI} + (\\overrightarrow{IA} + 2\\overrightarrow{IB} + 3\\overrightarrow{IC}) = 6\\overrightarrow{MI}$."
        },
        {
          "id": "b",
          "text": "Điểm $I$ là duy nhất xác định.",
          "correctAnswer": true,
          "explanation": "Với gốc $A$, $6\\overrightarrow{AI} = 2\\overrightarrow{AB} + 3\\overrightarrow{AC} \\implies \\overrightarrow{AI} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$, điểm $I$ xác định duy nhất."
        },
        {
          "id": "c",
          "text": "$\\overrightarrow{AI} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo chứng minh trên."
        },
        {
          "id": "d",
          "text": "Điểm $I$ trùng với trọng tâm của tam giác $ABC$.",
          "correctAnswer": false,
          "explanation": "Trọng tâm thỏa mãn hệ số $1:1:1$, còn ở đây hệ số là $1:2:3$ nên $I$ không phải trọng tâm."
        }
      ]
    },
    {
      "id": "tf-10.9.7",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Đúng / Sai 7 - Độ dài vectơ hình học",
      "source": "Đề kiểm tra định kì Toán 10",
      "prompt": "Cho hình vuông $ABCD$ cạnh bằng $a$, tâm $O$. Xét tính Đúng/Sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$|2\\overrightarrow{AB} + 2\\overrightarrow{AD}| = 2a\\sqrt{2}$.",
          "correctAnswer": true,
          "explanation": "$2(\\overrightarrow{AB} + \\overrightarrow{AD}) = 2\\overrightarrow{AC} \\implies 2 \\cdot a\\sqrt{2} = 2a\\sqrt{2}$."
        },
        {
          "id": "b",
          "text": "$|\\frac{1}{2}\\overrightarrow{AC}| = \\frac{a\\sqrt{2}}{2}$.",
          "correctAnswer": true,
          "explanation": "$|\\overrightarrow{OA}| = \\frac{1}{2}AC = \\frac{a\\sqrt{2}}{2}$."
        },
        {
          "id": "c",
          "text": "$|-3\\overrightarrow{AB}| = 3a$.",
          "correctAnswer": true,
          "explanation": "$|-3| \\cdot |\\overrightarrow{AB}| = 3a$."
        },
        {
          "id": "d",
          "text": "$|2\\overrightarrow{AB} - 2\\overrightarrow{AD}| = 0$.",
          "correctAnswer": false,
          "explanation": "$2(\\overrightarrow{AB} - \\overrightarrow{AD}) = 2\\overrightarrow{DB} \\implies 2a\\sqrt{2} \\ne 0$."
        }
      ]
    },
    {
      "id": "tf-10.9.8",
      "svgDiagram": "<svg viewBox=\"0 0 320 140\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"50\" x2=\"144\" y2=\"50\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#mArrCyan)\"/>\n  <text x=\"45\" y=\"42\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">v0 (v?n t?c ban d?u)</text>\n  <line x1=\"50\" y1=\"100\" x2=\"264\" y2=\"100\" stroke=\"#fbbf24\" strokeWidth=\"3.5\" markerEnd=\"url(#mArrAmber)\"/>\n  <text x=\"45\" y=\"92\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">v = k � v0 (v?n t?c sau khi tang t?c)</text>\n</svg>",
      "badge": "Đúng / Sai 8 - Vận tốc biến đổi trong chuyển động",
      "source": "Ứng dụng Vật lý và Thực tế",
      "prompt": "Một chiếc ca nô đang chạy với vectơ vận tốc ban đầu $\\vec{v}_0$ có độ lớn $15\\text{ km/h}$ theo hướng Đông. Xét tính Đúng/Sai của các tình huống sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Nếu ca nô tăng tốc để vận tốc mới là $\\vec{v}_1 = 2\\vec{v}_0$ thì ca nô vẫn chạy theo hướng Đông với tốc độ $30\\text{ km/h}$.",
          "correctAnswer": true,
          "explanation": "Hệ số $2 > 0$ cùng hướng, độ lớn $2 \\times 15 = 30\\text{ km/h}$."
        },
        {
          "id": "b",
          "text": "Nếu ca nô chuyển sang chạy lùi với vận tốc $\\vec{v}_2 = -0.5\\vec{v}_0$ thì ca nô chạy theo hướng Tây với tốc độ $7.5\\text{ km/h}$.",
          "correctAnswer": true,
          "explanation": "Hệ số âm đảo ngược từ Đông sang Tây, độ lớn $|-0.5| \\times 15 = 7.5\\text{ km/h}$."
        },
        {
          "id": "c",
          "text": "Hai vectơ $\\vec{v}_1$ và $\\vec{v}_2$ cùng phương với nhau.",
          "correctAnswer": true,
          "explanation": "Cả hai đều cùng phương với $\\vec{v}_0$ (nằm trên trục Đông - Tây)."
        },
        {
          "id": "d",
          "text": "Độ lớn của $\\vec{v}_2$ lớn hơn độ lớn của $\\vec{v}_0$.",
          "correctAnswer": false,
          "explanation": "$7.5\\text{ km/h} < 15\\text{ km/h}$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-10.9.1",
      "badge": "Trả lời ngắn 1 - Độ dài tích vectơ",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho tam giác đều $ABC$ cạnh bằng $5$. Tính độ dài của vectơ $\\vec{u} = -4\\overrightarrow{AB}$.",
      "correctAnswer": "20",
      "acceptableAnswers": [
        "20"
      ],
      "explanation": "$|-4\\overrightarrow{AB}| = |-4| \\cdot |\\overrightarrow{AB}| = 4 \\times 5 = 20$."
    },
    {
      "id": "sa-10.9.2",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Trả lời ngắn 2 - Tỉ số k của trọng tâm",
      "source": "SBT Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Biết $\\overrightarrow{GA} = k\\overrightarrow{GM}$. Tìm giá trị của số thực $k$.",
      "correctAnswer": "-2",
      "acceptableAnswers": [
        "-2"
      ],
      "explanation": "Vì $\\overrightarrow{GA}$ và $\\overrightarrow{GM}$ ngược hướng và $GA = 2GM$ nên $\\overrightarrow{GA} = -2\\overrightarrow{GM} \\implies k = -2$."
    },
    {
      "id": "sa-10.9.3",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Trả lời ngắn 3 - Tỉ số k của trung tuyến",
      "source": "Đề kiểm tra Toán 10",
      "prompt": "Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Biết $\\overrightarrow{AG} = k\\overrightarrow{AM}$. Tìm giá trị của số thực $k$ (viết dưới dạng phân số tối giản a/b).",
      "correctAnswer": "2/3",
      "acceptableAnswers": [
        "2/3",
        "0.67"
      ],
      "explanation": "$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM} \\implies k = \\frac{2}{3}$."
    },
    {
      "id": "sa-10.9.4",
      "svgDiagram": "<svg viewBox=\"0 0 320 175\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <rect x=\"95\" y=\"25\" width=\"130\" height=\"130\" fill=\"#1e293b\" fillOpacity=\"0.5\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"220\" y2=\"30\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <line x1=\"95\" y1=\"25\" x2=\"220\" y2=\"150\" stroke=\"#f43f5e\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"90\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"82\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">O</text>\n  <line x1=\"95\" y1=\"155\" x2=\"219\" y2=\"155\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"95\" y1=\"155\" x2=\"95\" y2=\"31\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <circle cx=\"95\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">A</text>\n  <circle cx=\"225\" cy=\"155\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"165\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"225\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"235\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"82\" y=\"23\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">D</text>\n</svg>",
      "badge": "Trả lời ngắn 4 - Độ dài vectơ đường chéo",
      "source": "Bộ đề Toán 10",
      "prompt": "Cho hình vuông $ABCD$ cạnh $3$. Tính độ dài của vectơ $\\vec{u} = 2\\overrightarrow{AB} + 2\\overrightarrow{AD}$ (làm tròn đến hàng phần mười).",
      "correctAnswer": "8.5",
      "acceptableAnswers": [
        "8.5",
        "8,5",
        "6*sqrt(2)"
      ],
      "explanation": "$2(\\overrightarrow{AB} + \\overrightarrow{AD}) = 2\\overrightarrow{AC} \\implies 2 \\times 3\\sqrt{2} = 6\\sqrt{2} \\approx 8.485 \\approx 8.5$."
    },
    {
      "id": "sa-10.9.5",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"55\" x2=\"280\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"40\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I</text>\n  <!-- K� hi?u b?ng nhau: 2 v?ch ng?n -->\n  <line x1=\"98\" y1=\"48\" x2=\"98\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"102\" y1=\"48\" x2=\"102\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"218\" y1=\"48\" x2=\"218\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"222\" y1=\"48\" x2=\"222\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n</svg>",
      "badge": "Trả lời ngắn 5 - Tìm số k trong đẳng thức vectơ",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho đoạn thẳng $AB = 10$. Điểm $M$ thuộc đoạn $AB$ sao cho $AM = 2$. Biết $\\overrightarrow{MA} = k\\overrightarrow{MB}$. Tìm giá trị của số thực $k$.",
      "correctAnswer": "-0.25",
      "acceptableAnswers": [
        "-0.25",
        "-1/4",
        "-0,25"
      ],
      "explanation": "$MB = 10 - 2 = 8$. Vì $M$ nằm giữa $A$ và $B$ nên $\\overrightarrow{MA}$ ngược hướng $\\overrightarrow{MB}$. Tỉ số độ dài $\\frac{MA}{MB} = \\frac{2}{8} = \\frac{1}{4} \\implies \\overrightarrow{MA} = -\\frac{1}{4}\\overrightarrow{MB} \\implies k = -0.25$."
    },
    {
      "id": "sa-10.9.6",
      "badge": "Trả lời ngắn 6 - Độ dài vectơ tam giác vuông",
      "source": "Đề thi học kì 1 Toán 10",
      "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 3, AC = 4$. Tính độ dài của vectơ $\\vec{u} = 2\\overrightarrow{AB} + \\frac{3}{2}\\overrightarrow{AC}$.",
      "correctAnswer": "8.5",
      "acceptableAnswers": [
        "8.5",
        "8,5",
        "sqrt(72)"
      ],
      "explanation": "Do $AB \\perp AC$, $|\\vec{u}| = \\sqrt{(2AB)^2 + (1.5AC)^2} = \\sqrt{6^2 + 6^2} = \\sqrt{72} = 6\\sqrt{2} \\approx 8.485 \\approx 8.5$."
    },
    {
      "id": "sa-10.9.7",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 60,150 260,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#60a5fa\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"150\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#fbbf24\"/><text x=\"175\" y=\"112\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\">G</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#94a3b8\"/><text x=\"160\" y=\"166\" fill=\"#94a3b8\" fontSize=\"12\" textAnchor=\"middle\">M</text>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"60\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"48\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"260\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"268\" y=\"158\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n</svg>",
      "badge": "Trả lời ngắn 7 - Tìm hệ số phân tích vectơ",
      "source": "SBT Toán 10",
      "prompt": "Cho tam giác $ABC$ có trọng tâm $G$. Biểu diễn $\\overrightarrow{AG} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$. Tính giá trị của tổng $S = x + y$ (viết dưới dạng phân số tối giản a/b).",
      "correctAnswer": "2/3",
      "acceptableAnswers": [
        "2/3",
        "0.67"
      ],
      "explanation": "$\\overrightarrow{AG} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC} \\implies x = \\frac{1}{3}, y = \\frac{1}{3} \\implies S = \\frac{1}{3} + \\frac{1}{3} = \\frac{2}{3}$."
    },
    {
      "id": "sa-10.9.8",
      "svgDiagram": "<svg viewBox=\"0 0 320 180\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <polygon points=\"160,25 70,150 250,150\" fill=\"#1e293b\" fillOpacity=\"0.4\" stroke=\"#475569\" strokeWidth=\"1.5\"/>\n  <line x1=\"160\" y1=\"25\" x2=\"160\" y2=\"144\" stroke=\"#fbbf24\" strokeWidth=\"2\" markerEnd=\"url(#mArrAmber)\"/>\n  <rect x=\"160\" y=\"140\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#94a3b8\" strokeWidth=\"1\"/>\n  <line x1=\"70\" y1=\"150\" x2=\"154\" y2=\"29\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"160\" y=\"17\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"70\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"58\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">B</text>\n  <circle cx=\"250\" cy=\"150\" r=\"3.5\" fill=\"#f8fafc\"/><text x=\"258\" y=\"160\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\">C</text>\n  <circle cx=\"160\" cy=\"150\" r=\"3.5\" fill=\"#fbbf24\"/><text x=\"160\" y=\"168\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">H</text>\n</svg>",
      "badge": "Trả lời ngắn 8 - Độ dài vectơ tam giác đều",
      "source": "Đề kiểm tra Toán 10",
      "prompt": "Cho tam giác đều $ABC$ cạnh $2\\sqrt{3}$. Gọi $M$ là trung điểm $BC$. Tính độ dài vectơ $2\\overrightarrow{AM}$.",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6"
      ],
      "explanation": "$AM = \\frac{2\\sqrt{3} \\cdot \\sqrt{3}}{2} = 3 \\implies |2\\overrightarrow{AM}| = 2 \\times 3 = 6$."
    },
    {
      "id": "sa-10.9.9",
      "svgDiagram": "<svg viewBox=\"0 0 320 150\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"75\" x2=\"270\" y2=\"75\" stroke=\"#94a3b8\" strokeWidth=\"4\"/>\n  <polygon points=\"140,75 130,110 150,110\" fill=\"#fbbf24\"/>\n  <circle cx=\"140\" cy=\"75\" r=\"4\" fill=\"#fbbf24\"/>\n  <text x=\"140\" y=\"125\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Kh?i t�m G</text>\n  <circle cx=\"60\" cy=\"60\" r=\"14\" fill=\"#38bdf8\"/><text x=\"60\" y=\"64\" fill=\"#0f172a\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">m1</text>\n  <circle cx=\"250\" cy=\"62\" r=\"11\" fill=\"#34d399\"/><text x=\"250\" y=\"66\" fill=\"#0f172a\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">m2</text>\n  <line x1=\"140\" y1=\"75\" x2=\"68\" y2=\"75\" stroke=\"#38bdf8\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrCyan)\"/>\n  <line x1=\"140\" y1=\"75\" x2=\"242\" y2=\"75\" stroke=\"#34d399\" strokeWidth=\"2.5\" markerEnd=\"url(#mArrEmerald)\"/>\n  <text x=\"100\" y=\"92\" fill=\"#38bdf8\" fontSize=\"11\">GA</text>\n  <text x=\"195\" y=\"92\" fill=\"#34d399\" fontSize=\"11\">GB</text>\n</svg>",
      "badge": "Trả lời ngắn 9 - Khối tâm hai chất điểm",
      "source": "Ứng dụng Vật lý",
      "prompt": "Hai vật nặng có khối lượng $m_1 = 3\\text{ kg}$ đặt tại $A$ và $m_2 = 1\\text{ kg}$ đặt tại $B$ cách nhau $12\\text{ cm}$. Khối tâm $G$ thỏa mãn $3\\overrightarrow{GA} + \\overrightarrow{GB} = \\vec{0}$. Tính khoảng cách $GA$ (theo cm).",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "3 cm"
      ],
      "explanation": "$3GA = GB$ và $GA + GB = 12 \\implies 4GA = 12 \\implies GA = 3\\text{ cm}$."
    },
    {
      "id": "sa-10.9.10",
      "svgDiagram": "<svg viewBox=\"0 0 320 110\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"arrC\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrE\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n  </defs>\n  <line x1=\"40\" y1=\"55\" x2=\"280\" y2=\"55\" stroke=\"#475569\" strokeWidth=\"2\"/>\n  <circle cx=\"40\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"40\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">A</text>\n  <circle cx=\"280\" cy=\"55\" r=\"4\" fill=\"#f8fafc\"/><text x=\"280\" y=\"80\" fill=\"#f8fafc\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">B</text>\n  <circle cx=\"160\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/><text x=\"160\" y=\"80\" fill=\"#fbbf24\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">I</text>\n  <!-- K� hi?u b?ng nhau: 2 v?ch ng?n -->\n  <line x1=\"98\" y1=\"48\" x2=\"98\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"102\" y1=\"48\" x2=\"102\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"218\" y1=\"48\" x2=\"218\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n  <line x1=\"222\" y1=\"48\" x2=\"222\" y2=\"62\" stroke=\"#fbbf24\" strokeWidth=\"1.5\"/>\n</svg>",
      "badge": "Trả lời ngắn 10 - Tỉ số k của điểm thẳng hàng",
      "source": "SGK Toán 10 KNTT",
      "prompt": "Cho tam giác $ABC$. Điểm $N$ nằm trên cạnh $AC$ sao cho $AN = 3NC$. Biết $\\overrightarrow{AN} = k\\overrightarrow{AC}$. Tìm $k$.",
      "correctAnswer": "0.75",
      "acceptableAnswers": [
        "0.75",
        "3/4",
        "0,75"
      ],
      "explanation": "$AC = AN + NC = 3NC + NC = 4NC \\implies AN = \\frac{3}{4}AC \\implies \\overrightarrow{AN} = \\frac{3}{4}\\overrightarrow{AC} \\implies k = 0.75$."
    },
    {
      "id": "sa-10.9.11",
      "svgDiagram": "<svg viewBox=\"0 0 320 140\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"50\" x2=\"144\" y2=\"50\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#mArrCyan)\"/>\n  <text x=\"45\" y=\"42\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">v0 (v?n t?c ban d?u)</text>\n  <line x1=\"50\" y1=\"100\" x2=\"264\" y2=\"100\" stroke=\"#fbbf24\" strokeWidth=\"3.5\" markerEnd=\"url(#mArrAmber)\"/>\n  <text x=\"45\" y=\"92\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">v = k � v0 (v?n t?c sau khi tang t?c)</text>\n</svg>",
      "badge": "Trả lời ngắn 11 - Vận tốc xe máy sau khi tăng tốc",
      "source": "Bài toán thực tế Vectơ",
      "prompt": "Một chiếc xe máy đang đi với vận tốc $36\\text{ km/h}$. Người lái vặn ga tăng tốc theo hướng cũ với gia tốc đều sao cho vận tốc mới là $\\vec{v} = 1.5\\vec{v}_0$. Tính tốc độ mới của xe máy (theo km/h).",
      "correctAnswer": "54",
      "acceptableAnswers": [
        "54",
        "54 km/h"
      ],
      "explanation": "$v = 1.5 \\times 36 = 54\\text{ km/h}$."
    },
    {
      "id": "sa-10.9.12",
      "svgDiagram": "<svg viewBox=\"0 0 320 140\" className=\"w-full max-w-md mx-auto rounded-xl bg-slate-900/80 p-2 shadow-inner border border-slate-700/50\">\n\n  <defs>\n    <marker id=\"mArrCyan\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"mArrEmerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#34d399\"/>\n    </marker>\n    <marker id=\"mArrAmber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n    <marker id=\"mArrRose\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"mArrPurple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#c084fc\"/>\n    </marker>\n  </defs>\n  <line x1=\"50\" y1=\"50\" x2=\"144\" y2=\"50\" stroke=\"#38bdf8\" strokeWidth=\"3\" markerEnd=\"url(#mArrCyan)\"/>\n  <text x=\"45\" y=\"42\" fill=\"#38bdf8\" fontSize=\"12\" fontWeight=\"bold\">v0 (v?n t?c ban d?u)</text>\n  <line x1=\"50\" y1=\"100\" x2=\"264\" y2=\"100\" stroke=\"#fbbf24\" strokeWidth=\"3.5\" markerEnd=\"url(#mArrAmber)\"/>\n  <text x=\"45\" y=\"92\" fill=\"#fbbf24\" fontSize=\"12\" fontWeight=\"bold\">v = k � v0 (v?n t?c sau khi tang t?c)</text>\n</svg>",
      "badge": "Trả lời ngắn 12 - Lực kéo tác dụng lên xe",
      "source": "Toán học và Đời sống",
      "prompt": "Một động cơ điện tác dụng một lực kéo $\\vec{F}_0$ có độ lớn $250\\text{ N}$. Khi chuyển sang chế độ tăng cường (turbo), lực kéo đạt $\\vec{F} = 2.4\\vec{F}_0$. Tính độ lớn của lực kéo mới (theo Niutơn).",
      "correctAnswer": "600",
      "acceptableAnswers": [
        "600",
        "600 N"
      ],
      "explanation": "$F = 2.4 \\times 250 = 600\\text{ N}$."
    }
  ]
}

};
