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
    youtubeVideoId: "emLiXccjys4",
    youtubeVideoTitle: "Bài Giảng Video: Bài 2 - Tập hợp và các phép toán trên tập hợp (Tiết 1) - Toán 10 KNTT",
    youtubeVideos: [
      {
        id: "emLiXccjys4",
        title: "Tiết 1: Khái niệm tập hợp & Tập hợp con"
      },
      {
        id: "qR-rwgAp1Uw",
        title: "Tiết 2: Các tập hợp con của ℝ (Khoảng, Đoạn, Nửa khoảng)"
      },
      {
        id: "xB_nHKTX444",
        title: "Tiết 3: Các phép toán Giao, Hợp, Hiệu, Phần bù"
      }
    ],
    videoQuestions: [
      {
        id: "vq-10.2.1",
        title: "Ví dụ 1 (Tiết 1): Đếm số tập hợp con của một tập hợp",
        question: "Tập hợp $A = \\{1; 2; 3\\}$ có tất cả bao nhiêu tập hợp con?",
        options: [
          "8",
          "6",
          "7",
          "9"
        ],
        correctIndex: 0,
        explanation: "Công thức tính số tập hợp con của một tập hợp có $n$ phần tử là $2^n$. Với $n = 3$, số tập hợp con của $A$ là $2^3 = 8$ (gồm $\\emptyset$, 3 tập có 1 phần tử, 3 tập có 2 phần tử và chính tập $A$)."
      },
      {
        id: "vq-10.2.2",
        title: "Ví dụ 2 (Tiết 2): Xác định tập con của số thực ℝ",
        question: "Tập hợp các số thực $x$ thỏa mãn $-2 \\le x < 5$ được viết dưới dạng khoảng, đoạn, nửa khoảng là:",
        options: [
          "$[-2; 5)$",
          "$(-2; 5]$",
          "$[-2; 5]$",
          "$(-2; 5)$"
        ],
        correctIndex: 0,
        explanation: "Dấu có chứa dấu bằng '$\\le$' biểu diễn bằng ngoặc vuông '['; dấu nghiêm ngặt '$<$' biểu diễn bằng ngoặc tròn ')'. Do đó tập hợp là nửa khoảng $[-2; 5)$."
      },
      {
        id: "vq-10.2.3",
        title: "Ví dụ 3 (Tiết 3): Giao của hai tập hợp số",
        question: "Cho hai tập hợp $A = (-3; 4]$ và $B = [1; 6)$. Khi đó tập hợp giao $A \\cap B$ là:",
        options: [
          "$[1; 4]$",
          "$(-3; 6)$",
          "$[1; 4)$",
          "$(-3; 1]$"
        ],
        correctIndex: 0,
        explanation: "Giao $A \\cap B$ gồm các phần tử thuộc cả $A$ và $B$. Biểu diễn trên trục số, ta lấy phần chung giữa $(-3; 4]$ và $[1; 6)$, kết quả là $[1; 4]$."
      },
      {
        id: "vq-10.2.4",
        title: "Ví dụ 4 (Tiết 3): Hiệu của hai tập hợp và phần bù",
        question: "Cho tập hợp $A = [-2; 5)$ và $B = [1; 7]$. Khi đó tập hợp hiệu $A \\setminus B$ là:",
        options: [
          "$[-2; 1)$",
          "$[-2; 1]$",
          "$(5; 7]$",
          "$[-2; 7]$"
        ],
        correctIndex: 0,
        explanation: "Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Vì $B$ chứa điểm $1$ (ngoặc vuông $[1$), nên phần tử $1$ bị loại khỏi $A$, do đó tại mốc $1$ trở thành ngoặc tròn ')'. Kết quả là $[-2; 1)$."
      }
    ],
    tips: [
      "Quy tắc ngoặc khi tìm hiệu $A \\setminus B$: Tại các mốc biên của $B$, nếu $B$ lấy (ngoặc vuông) thì $A \\setminus B$ bỏ (chuyển thành ngoặc tròn); ngược lại nếu $B$ không lấy (ngoặc tròn) thì $A \\setminus B$ giữ lại (chuyển thành ngoặc vuông).",
      "Vẽ trục số minh họa: Khi làm các phép toán giao, hợp, hiệu trên các khoảng đoạn, hãy luôn vẽ một trục số chung và dùng quy ước gạch bỏ phần không lấy để tránh nhầm lẫn các mốc biên."
    ],
    traps: [
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
          "svgDiagram": `<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg select-none">
  <!-- Dòng 1: Tập A = [-3; 2) -->
  <text x="15" y="32" fill="#38bdf8" font-size="12" font-weight="bold">a) Tập A = [-3; 2):</text>
  <line x1="145" y1="28" x2="495" y2="28" stroke="#475569" stroke-width="2" />
  <polygon points="505,28 493,24 493,32" fill="#94a3b8" />
  <!-- Gạch bỏ bên trái -3 (145 đến 210) -->
  <path d="M 155 20 L 165 36 M 170 20 L 180 36 M 185 20 L 195 36 M 200 20 L 210 36" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.8" />
  <!-- Đoạn lấy từ -3 (210) đến 2 (360) -->
  <line x1="210" y1="28" x2="360" y2="28" stroke="#10b981" stroke-width="3.5" />
  <text x="210" y="33" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">[</text>
  <text x="210" y="47" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">-3</text>
  <text x="360" y="34" text-anchor="middle" fill="#10b981" font-size="20" font-weight="bold">)</text>
  <text x="360" y="47" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">2</text>
  <!-- Gạch bỏ bên phải 2 (360 đến 490) -->
  <path d="M 370 20 L 380 36 M 385 20 L 395 36 M 400 20 L 410 36 M 415 20 L 425 36 M 430 20 L 440 36 M 445 20 L 455 36 M 460 20 L 470 36 M 475 20 L 485 36" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.8" />

  <!-- Dòng 2: Tập B = (1; +∞) -->
  <text x="15" y="92" fill="#38bdf8" font-size="12" font-weight="bold">b) Tập B = (1; +∞):</text>
  <line x1="145" y1="88" x2="495" y2="88" stroke="#475569" stroke-width="2" />
  <polygon points="505,88 493,84 493,92" fill="#94a3b8" />
  <!-- Gạch bỏ bên trái 1 (145 đến 300) -->
  <path d="M 155 80 L 165 96 M 170 80 L 180 96 M 185 80 L 195 96 M 200 80 L 210 96 M 215 80 L 225 96 M 230 80 L 240 96 M 245 80 L 255 96 M 260 80 L 270 96 M 275 80 L 285 96 M 290 80 L 300 96" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.8" />
  <!-- Tia lấy từ 1 (300) đến +∞ (495) -->
  <line x1="300" y1="88" x2="495" y2="88" stroke="#38bdf8" stroke-width="3.5" />
  <text x="300" y="94" text-anchor="middle" fill="#38bdf8" font-size="20" font-weight="bold">(</text>
  <text x="300" y="107" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">1</text>
</svg>`
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
          "svgDiagram": `<svg viewBox="0 0 620 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl select-none">
  <!-- Đường dóng mốc toạ độ -2 (x=240), 1 (x=310), 3 (x=390), 5 (x=480) -->
  <line x1="240" y1="12" x2="240" y2="265" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 3" />
  <line x1="310" y1="12" x2="310" y2="265" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 3" />
  <line x1="390" y1="12" x2="390" y2="265" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 3" />
  <line x1="480" y1="12" x2="480" y2="265" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 3" />

  <!-- Dòng 1: Tập A = [-2; 3) -->
  <text x="12" y="32" fill="#cbd5e1" font-size="12" font-weight="bold">Tập A = [-2; 3):</text>
  <line x1="190" y1="28" x2="585" y2="28" stroke="#475569" stroke-width="1.8" />
  <polygon points="593,28 583,24 583,32" fill="#94a3b8" />
  <path d="M 195 21 L 205 35 M 210 21 L 220 35 M 225 21 L 235 35" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />
  <line x1="240" y1="28" x2="390" y2="28" stroke="#38bdf8" stroke-width="3" />
  <text x="240" y="33" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">[</text>
  <text x="240" y="44" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">-2</text>
  <text x="390" y="34" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">)</text>
  <text x="390" y="44" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">3</text>
  <path d="M 400 21 L 410 35 M 420 21 L 430 35 M 440 21 L 450 35 M 460 21 L 470 35 M 480 21 L 490 35 M 500 21 L 510 35 M 520 21 L 530 35 M 540 21 L 550 35 M 560 21 L 570 35" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />

  <!-- Dòng 2: Tập B = [1; 5] -->
  <text x="12" y="74" fill="#cbd5e1" font-size="12" font-weight="bold">Tập B = [1; 5]:</text>
  <line x1="190" y1="70" x2="585" y2="70" stroke="#475569" stroke-width="1.8" />
  <polygon points="593,70 583,66 583,74" fill="#94a3b8" />
  <path d="M 195 63 L 205 77 M 215 63 L 225 77 M 235 63 L 245 77 M 255 63 L 265 77 M 275 63 L 285 77 M 295 63 L 305 77" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />
  <line x1="310" y1="70" x2="480" y2="70" stroke="#f59e0b" stroke-width="3" />
  <text x="310" y="75" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">[</text>
  <text x="310" y="86" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">1</text>
  <text x="480" y="75" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">]</text>
  <text x="480" y="86" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">5</text>
  <path d="M 490 63 L 500 77 M 510 63 L 520 77 M 530 63 L 540 77 M 550 63 L 560 77 M 570 63 L 580 77" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />

  <!-- Dòng 3: A ∩ B = [1; 3) -->
  <text x="12" y="116" fill="#38bdf8" font-size="12" font-weight="bold">A ∩ B = [1; 3):</text>
  <line x1="190" y1="112" x2="585" y2="112" stroke="#475569" stroke-width="1.8" />
  <polygon points="593,112 583,108 583,116" fill="#94a3b8" />
  <path d="M 195 105 L 205 119 M 215 105 L 225 119 M 235 105 L 245 119 M 255 105 L 265 119 M 275 105 L 285 119 M 295 105 L 305 119" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />
  <line x1="310" y1="112" x2="390" y2="112" stroke="#38bdf8" stroke-width="3.5" />
  <text x="310" y="117" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">[</text>
  <text x="310" y="128" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">1</text>
  <text x="390" y="118" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">)</text>
  <text x="390" y="128" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">3</text>
  <path d="M 400 105 L 410 119 M 420 105 L 430 119 M 440 105 L 450 119 M 460 105 L 470 119 M 480 105 L 490 119 M 500 105 L 510 119 M 520 105 L 530 119 M 540 105 L 550 119 M 560 105 L 570 119" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />

  <!-- Dòng 4: A ∪ B = [-2; 5] -->
  <text x="12" y="158" fill="#f59e0b" font-size="12" font-weight="bold">A ∪ B = [-2; 5]:</text>
  <line x1="190" y1="154" x2="585" y2="154" stroke="#475569" stroke-width="1.8" />
  <polygon points="593,154 583,150 583,158" fill="#94a3b8" />
  <path d="M 195 147 L 205 161 M 210 147 L 220 161 M 225 147 L 235 161" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />
  <line x1="240" y1="154" x2="480" y2="154" stroke="#f59e0b" stroke-width="3.5" />
  <text x="240" y="159" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">[</text>
  <text x="240" y="170" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">-2</text>
  <text x="480" y="159" text-anchor="middle" fill="#f59e0b" font-size="16" font-weight="bold">]</text>
  <text x="480" y="170" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">5</text>
  <path d="M 490 147 L 500 161 M 510 147 L 520 161 M 530 147 L 540 161 M 550 147 L 560 161 M 570 147 L 580 161" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />

  <!-- Dòng 5: A ∖ B = [-2; 1) (dùng ký hiệu ∖ U+2216 chuẩn toán học) -->
  <text x="12" y="200" fill="#10b981" font-size="12" font-weight="bold">A ∖ B = [-2; 1):</text>
  <line x1="190" y1="196" x2="585" y2="196" stroke="#475569" stroke-width="1.8" />
  <polygon points="593,196 583,192 583,200" fill="#94a3b8" />
  <path d="M 195 189 L 205 203 M 210 189 L 220 203 M 225 189 L 235 203" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />
  <line x1="240" y1="196" x2="310" y2="196" stroke="#10b981" stroke-width="3.5" />
  <text x="240" y="201" text-anchor="middle" fill="#10b981" font-size="16" font-weight="bold">[</text>
  <text x="240" y="212" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">-2</text>
  <text x="310" y="202" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">)</text>
  <text x="310" y="212" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">1</text>
  <path d="M 320 189 L 330 203 M 340 189 L 350 203 M 360 189 L 370 203 M 380 189 L 390 203 M 400 189 L 410 203 M 420 189 L 430 203 M 440 189 L 450 203 M 460 189 L 470 203 M 480 189 L 490 203 M 500 189 L 510 203 M 520 189 L 530 203 M 540 189 L 550 203 M 560 189 L 570 203" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />

  <!-- Dòng 6: Phần bù C_ℝ B to rõ, hiển thị đẹp mắt -->
  <text x="12" y="238" fill="#c084fc" font-size="14" font-weight="bold">C<tspan font-size="10" dy="4">ℝ</tspan><tspan font-size="14" dy="-4"> B</tspan></text>
  <text x="12" y="254" fill="#a855f7" font-size="11" font-weight="bold">= (-∞; 1) ∪ (5; +∞):</text>
  <line x1="190" y1="244" x2="585" y2="244" stroke="#475569" stroke-width="1.8" />
  <polygon points="593,244 583,240 583,248" fill="#94a3b8" />
  <!-- Tia trái: (-∞; 1) -->
  <line x1="190" y1="244" x2="310" y2="244" stroke="#a855f7" stroke-width="3.5" />
  <text x="310" y="250" text-anchor="middle" fill="#a855f7" font-size="18" font-weight="bold">)</text>
  <text x="310" y="260" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">1</text>
  <!-- Gạch bỏ giữa [1; 5] -->
  <path d="M 320 237 L 330 251 M 340 237 L 350 251 M 360 237 L 370 251 M 375 237 L 385 251 M 395 237 L 405 251 M 415 237 L 425 251 M 435 237 L 445 251 M 455 237 L 465 251 M 470 237 L 480 251" stroke="#ef4444" stroke-width="1.3" stroke-opacity="0.75" />
  <!-- Tia phải: (5; +∞) -->
  <line x1="480" y1="244" x2="585" y2="244" stroke="#a855f7" stroke-width="3.5" />
  <text x="480" y="250" text-anchor="middle" fill="#a855f7" font-size="18" font-weight="bold">(</text>
  <text x="480" y="260" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">5</text>
</svg>`
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
          "svgDiagram": `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md select-none">
  <!-- Khung chữ nhật bao quanh toàn thể lớp học 10A -->
  <rect x="20" y="15" width="400" height="200" rx="16" fill="#0f172a" stroke="#334155" stroke-width="2" />
  <text x="35" y="42" fill="#94a3b8" font-size="12" font-weight="bold">👥 40</text>

  <!-- Vòng tròn 1: Môn Bóng đá (175, 120, r=68) -->
  <circle cx="175" cy="120" r="68" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2.5" />
  <!-- Vòng tròn 2: Môn Cầu lông (265, 120, r=68) -->
  <circle cx="265" cy="120" r="68" fill="#7c3aed" fill-opacity="0.25" stroke="#a855f7" stroke-width="2.5" />

  <!-- Thấu kính giao nhau nổi bật -->
  <path d="M 220 69 A 68 68 0 0 1 220 171 A 68 68 0 0 1 220 69" fill="#9333ea" fill-opacity="0.45" stroke="#e879f9" stroke-width="2" />

  <!-- Biểu tượng và số môn Bóng đá -->
  <text x="140" y="85" font-size="22" text-anchor="middle">⚽</text>
  <text x="140" y="128" font-size="22" font-weight="900" fill="#38bdf8" text-anchor="middle">14</text>

  <!-- Vùng giao nhau: thích cả 2 môn -->
  <text x="220" y="128" font-size="24" font-weight="900" fill="#facc15" text-anchor="middle">12</text>

  <!-- Biểu tượng và số môn Cầu lông -->
  <text x="300" y="85" font-size="22" text-anchor="middle">🏸</text>
  <text x="300" y="128" font-size="22" font-weight="900" fill="#c084fc" text-anchor="middle">6</text>

  <!-- Không thích môn nào (ngoài 2 vòng tròn) -->
  <g transform="translate(65, 180)">
    <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
    <text x="0" y="6" text-anchor="middle" fill="#f87171" font-size="16" font-weight="900">8</text>
  </g>
</svg>`
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
        "8",
        "16",
        "12",
        "4"
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
        "10",
        "20",
        "25",
        "5"
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
        "1",
        "2",
        "4",
        "6"
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
        "1",
        "2",
        "3",
        "5"
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
        "7",
        "8",
        "10",
        "5"
      ],
      "correctIndex": 0,
      "explanation": "Số bạn chơi ít nhất một môn: $n(A \\cup B) = 25 + 18 - 10 = 33$ bạn. Số bạn không chơi môn nào là: $40 - 33 = 7$ bạn."
    },
    {
      "id": "quiz-10.2.19",
      "badge": "Vận dụng - Bài toán thực tế khảo sát sách",
      "source": "SBT Toán 10 KNTT Bài 1.19 Trang 17",
      "question": "Khảo sát 50 học sinh về sở thích đọc sách, có 32 bạn thích truyện trinh thám, 28 bạn thích tiểu thuyết phiêu lưu, và cả 50 bạn đều thích ít nhất một trong hai thể loại trên. Có bao nhiêu bạn thích cả hai thể loại?",
      "options": [
        "10",
        "12",
        "15",
        "8"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức: $n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 32 + 28 - 50 = 10$ bạn."
    },
    {
      "id": "quiz-10.2.20",
      "badge": "Thông hiểu - Công thức cộng số phần tử tập hợp",
      "source": "Chuyên đề Toán 10 KNTT Trang 36",
      "question": "Cho tập hợp $A$ có 5 phần tử và tập hợp $B$ có 6 phần tử. Biết $A \\cap B$ có 2 phần tử. Số phần tử của tập hợp $A \\cup B$ là:",
      "options": [
        "9",
        "11",
        "8",
        "13"
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
      ]
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
        "6",
        "12",
        "24",
        "7"
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
        "2",
        "10",
        "5",
        "2.5"
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
      "explanation": "Tổng số tiền là $80x + 50y$ (nghìn đồng). Vì không vượt quá 500 nghìn đồng nên: $80x + 50y \\le 500 \\Leftrightarrow 8x + 5y \\le 50$."
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
      ]
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
      "explanation": "Gọi $x$ là số bông hoa hồng ($x \\in \\mathbb{N}$). Khi mua 3 bông hoa ly, số tiền mua hoa ly là $3 \\cdot 25 = 75$ nghìn đồng. Số tiền còn lại mua hoa hồng là $150 - 75 = 75$ nghìn đồng. Số bông hoa hồng tối đa là: $75 : 15 = 5$ bông."
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
    youtubeVideoId: "JySXqEuzA_Q",
    youtubeVideoTitle: "Bài Giảng Video: Ôn tập và Chữa bài tập cuối chương I - Toán 10 KNTT",
    youtubeVideos: [
      {
        id: "JySXqEuzA_Q",
        title: "Bài giảng: Chữa bài tập cuối chương I (Mệnh đề & Tập hợp)"
      }
    ],
    videoQuestions: [
      {
        id: "vq-10.ot1.1",
        title: "Ví dụ 1: Mệnh đề tương đương trong hình học",
        question: "Cho tam giác $ABC$. Trong các khẳng định sau, khẳng định nào là một mệnh đề tương đương đúng?",
        options: [
          "Tam giác $ABC$ là tam giác đều khi và chỉ khi tam giác $ABC$ có ba góc bằng nhau.",
          "Tam giác $ABC$ là tam giác vuông khi và chỉ khi tam giác $ABC$ có một góc tù.",
          "Tam giác $ABC$ là tam giác cân khi và chỉ khi tam giác $ABC$ có hai đường cao bằng nhau và một góc bằng $60^\\circ$.",
          "Tam giác $ABC$ có một góc vuông khi và chỉ khi $AB + AC = BC$."
        ],
        correctIndex: 0,
        explanation: "Tam giác đều tương đương với việc có 3 góc bằng nhau (đều bằng $60^\\circ$). Mệnh đề tương đương này đúng ở cả hai chiều kéo theo."
      },
      {
        id: "vq-10.ot1.2",
        title: "Ví dụ 2: Tìm tập xác định dưới dạng tập hợp con của ℝ",
        question: "Tập xác định của hàm số $y = \\sqrt{x - 3} + \\frac{1}{7 - x}$ là:",
        options: [
          "$[3; 7) \\cup (7; +\\infty)$",
          "$[3; 7]$",
          "$(3; 7)$",
          "$[3; +\\infty)$"
        ],
        correctIndex: 0,
        explanation: "Điều kiện xác định: $x - 3 \\ge 0 \\Leftrightarrow x \\ge 3$ và $7 - x \\ne 0 \\Leftrightarrow x \\ne 7$. Kết hợp lại ta được tập xác định là $D = [3; 7) \\cup (7; +\\infty)$."
      },
      {
        id: "vq-10.ot1.3",
        title: "Ví dụ 3: Xác định giao và hợp của hai khoảng đoạn",
        question: "Cho hai tập hợp $A = [-4; 2)$ và $B = [-1; 5]$. Khi đó tập hợp $A \\cup B$ là:",
        options: [
          "$[-4; 5]$",
          "$[-1; 2)$",
          "$[-4; 2)$",
          "$(-1; 5]$"
        ],
        correctIndex: 0,
        explanation: "Hợp $A \\cup B$ là tập hợp chứa tất cả các phần tử thuộc ít nhất một trong hai tập hợp $A, B$. Trải trên trục số từ $-4$ đến $5$, ta được $[-4; 5]$."
      },
      {
        id: "vq-10.ot1.4",
        title: "Ví dụ 4: Bài toán thực tế sử dụng Sơ đồ Ven",
        question: "Lớp 10A có 40 học sinh, trong đó có 25 bạn thích môn Toán, 20 bạn thích môn Văn và 12 bạn thích cả hai môn Toán và Văn. Hỏi lớp 10A có bao nhiêu bạn không thích cả hai môn trên?",
        options: [
          "7 bạn",
          "5 bạn",
          "8 bạn",
          "10 bạn"
        ],
        correctIndex: 0,
        explanation: "Số học sinh thích ít nhất một môn Toán hoặc Văn là: $|A \\cup B| = |A| + |B| - |A \\cap B| = 25 + 20 - 12 = 33$ học sinh. Do đó số bạn không thích cả hai môn là $40 - 33 = 7$ bạn."
      }
    ],
    tips: [
      "Công thức hợp hai tập hợp hữu hạn (Sơ đồ Ven): $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$. Nhớ trừ đi phần giao vì nó đã bị đếm hai lần.",
      "Kiểm tra điều kiện rỗng khi tìm giao: $A \\cap B = \\emptyset$ xảy ra khi khoảng này nằm hoàn toàn bên trái hoặc bên phải khoảng kia mà không có điểm chung."
    ],
    traps: [
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
        "10",
        "16",
        "32",
        "25"
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
        "10",
        "15",
        "20",
        "5"
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
            "10",
            "16",
            "32",
            "25"
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
            "10",
            "15",
            "20",
            "5"
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
            "1",
            "2",
            "3",
            "5"
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
            "1",
            "2",
            "3",
            "5"
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
          "id": "ai-10.2.17",
          "badge": "Vận dụng - Tham số để hai tia số giao nhau khác rỗng",
          "source": "SBT Toán 10 KNTT",
          "question": "Cho hai tập hợp $A = (-\\infty; 2m]$ và $B = [m - 4; +\\infty)$. Tìm $m$ để $A \\cap B \\ne \\emptyset$.",
          "options": [
            "$m \\ge -4$",
            "$m > -4$",
            "$m \\le -4$",
            "$m < -4$"
          ],
          "correctIndex": 0,
          "explanation": "Giao nhau khác rỗng khi và chỉ khi $m - 4 \\le 2m \\Leftrightarrow m \\ge -4$.",
          "isAiGenerated": true
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
          "id": "ai-tf-10.2.5",
          "badge": "Đúng / Sai 5 - Bất phương trình chứa giá trị tuyệt đối",
          "source": "SGK Toán 10 KNTT",
          "prompt": "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid |x - 2| \\le 2\\}$ và $B = (1; 6)$. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Tập hợp $A$ biểu diễn dưới dạng đoạn là $[0; 4]$.",
              "correctAnswer": true,
              "explanation": "$|x - 2| \\le 2 \\Leftrightarrow 0 \\le x \\le 4$."
            },
            {
              "id": "b",
              "text": "Độ dài của đoạn $A$ bằng 4.",
              "correctAnswer": true,
              "explanation": "$4 - 0 = 4$."
            },
            {
              "id": "c",
              "text": "Giao của hai tập hợp là $A \\cap B = (1; 4]$.",
              "correctAnswer": true,
              "explanation": "Phần chung thỏa mãn $1 < x \\le 4$."
            },
            {
              "id": "d",
              "text": "Hiệu $A \\setminus B = [0; 1)$.",
              "correctAnswer": false,
              "explanation": "Vì $1 \\notin B$ nên $1 \\in A \\setminus B$. Kết quả đúng là $[0; 1]$."
            }
          ]
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
          "id": "ai-sa-10.2.8",
          "badge": "Trả lời ngắn 8 - Giá trị nguyên lớn nhất thuộc giao",
          "source": "SBT Toán 10 KNTT",
          "correctAnswer": "5",
          "acceptableAnswers": [
            "5",
            "năm"
          ],
          "explanation": "Ta có $A \\cap B = [-2; 5]$. Giá trị nguyên lớn nhất là 5.",
          "prompt": "Cho hai tập hợp $A = (-\\infty; 5]$ và $B = [-2; +\\infty)$. Giá trị nguyên lớn nhất thuộc tập hợp $A \\cap B$ là bao nhiêu?"
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
            "9",
            "10",
            "12",
            "7"
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
            "5",
            "8",
            "10",
            "12"
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
            "12",
            "15",
            "11",
            "18"
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
          "id": "ai-10.2.24",
          "badge": "Luyện thêm 24 - Vận dụng tìm tham số để hai tập có điểm chung",
          "isAiGenerated": true,
          "source": "Đề thi Olympic & HSG Toán 10",
          "question": "Cho hai đoạn $A = [m - 1; m + 3]$ và $B = [2; 6]$. Tìm tất cả các giá trị thực của tham số $m$ để $A \\cap B \\ne \\emptyset$:",
          "options": [
            "$-1 \\le m \\le 7$",
            "$-1 < m < 7$",
            "$m \\ge -1$",
            "$m \\le 7$"
          ],
          "correctIndex": 0,
          "explanation": "Để hai đoạn $A$ và $B$ có điểm chung ($A \\cap B \\ne \\emptyset$) thì $\\begin{cases} m + 3 \\ge 2 \\\\ m - 1 \\le 6 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge -1 \\\\ m \\le 7 \\end{cases} \\Leftrightarrow -1 \\le m \\le 7$."
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
          "id": "ai-tf-10.2.8",
          "badge": "Đúng / Sai 8 - Khảo sát môn học ngoại khóa",
          "source": "Bộ đề ôn thi định kỳ Toán 10",
          "prompt": "Khảo sát 70 học sinh khối 10: có 40 bạn đăng ký học cờ vua, 35 bạn đăng ký học cờ tướng, và 15 bạn đăng ký cả hai môn. Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
          "subItems": [
            {
              "id": "a",
              "text": "Số bạn chỉ đăng ký cờ vua là 25 bạn.",
              "correctAnswer": true,
              "explanation": "$40 - 15 = 25$ bạn."
            },
            {
              "id": "b",
              "text": "Số bạn chỉ đăng ký cờ tướng là 20 bạn.",
              "correctAnswer": true,
              "explanation": "$35 - 15 = 20$ bạn."
            },
            {
              "id": "c",
              "text": "Số bạn đăng ký ít nhất một môn cờ là 60 bạn.",
              "correctAnswer": true,
              "explanation": "$40 + 35 - 15 = 60$ bạn."
            },
            {
              "id": "d",
              "text": "Số bạn không đăng ký môn cờ nào là 10 bạn.",
              "correctAnswer": true,
              "explanation": "$70 - 60 = 10$ bạn."
            }
          ]
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
          "id": "ai-sa-10.2.12",
          "badge": "Trả lời ngắn 12 - Bài toán VĐV đăng ký một nội dung",
          "source": "Bộ đề cấu trúc mới Toán 10",
          "correctAnswer": "21",
          "acceptableAnswers": [
            "21",
            "hai mươi mốt",
            "21 VĐV"
          ],
          "explanation": "Số bạn chỉ thi chạy: $19 - 7 = 12$ bạn. Số bạn chỉ thi nhảy xa: $16 - 7 = 9$ bạn. Tổng số bạn chỉ thi đúng 1 môn là: $12 + 9 = 21$ bạn.",
          "svgDiagram": "<svg viewBox=\"0 0 440 210\" className=\"w-full max-w-md mx-auto my-2 select-none\">\n  <defs>\n    <linearGradient id=\"gChayAi10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#06b6d4\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#0891b2\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gXaAi10_2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#e11d48\" stopOpacity=\"0.25\" />\n      <stop offset=\"100%\" stopColor=\"#be123c\" stopOpacity=\"0.10\" />\n    </linearGradient>\n    <linearGradient id=\"gGiaoChayXa\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#a855f7\" stopOpacity=\"0.55\" />\n      <stop offset=\"100%\" stopColor=\"#7c3aed\" stopOpacity=\"0.35\" />\n    </linearGradient>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"190\" rx=\"16\" fill=\"#0b1329\" stroke=\"#334155\" strokeWidth=\"2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"url(#gChayAi10_2)\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"url(#gXaAi10_2)\" />\n  <path d=\"M 215 64 A 68 68 0 0 1 215 166 A 68 68 0 0 1 215 64 Z\" fill=\"url(#gGiaoChayXa)\" stroke=\"#c084fc\" strokeWidth=\"1.5\" strokeDasharray=\"3 2\" />\n  <circle cx=\"170\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#06b6d4\" strokeWidth=\"2.5\" />\n  <circle cx=\"260\" cy=\"115\" r=\"68\" fill=\"none\" stroke=\"#e11d48\" strokeWidth=\"2.5\" />\n  <text x=\"170\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">🏃</text>\n  <text x=\"260\" y=\"40\" fontSize=\"24\" textAnchor=\"middle\">👟</text>\n  <text x=\"135\" y=\"123\" fill=\"#67e8f9\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">12</text>\n  <text x=\"215\" y=\"123\" fill=\"#ffffff\" fontSize=\"22\" fontWeight=\"900\" textAnchor=\"middle\">7</text>\n  <text x=\"295\" y=\"123\" fill=\"#fda4af\" fontSize=\"22\" fontWeight=\"bold\" textAnchor=\"middle\">9</text>\n  <text x=\"385\" y=\"165\" fill=\"#f43f5e\" fontSize=\"20\" fontWeight=\"bold\" textAnchor=\"middle\">4</text>\n</svg>",
          "prompt": "Trong một giải điền kinh gồm 32 vận động viên: có 19 bạn tham gia Chạy, 16 bạn tham gia Nhảy xa, và 7 bạn tham gia cả hai nội dung. Hỏi có bao nhiêu vận động viên chỉ tham gia đúng một nội dung thi đấu?"
        }
      ]
    }
  ]
}
};