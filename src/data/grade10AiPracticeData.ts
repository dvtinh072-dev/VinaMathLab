import type { QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export interface Grade10AiPracticePackage {
  quizQuestions: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
}

export const GRADE_10_AI_PRACTICE_DATA: Record<string, Grade10AiPracticePackage> = {
  // ==========================================
  // BÀI 1: MỆNH ĐỀ
  // ==========================================
  "t10-b1-menh-de": {
    // ------------------------------------------
    // PHẦN I: 10 CÂU TRẮC NGHIỆM 4 LỰA CHỌN
    // ------------------------------------------
    quizQuestions: [
      {
        id: "ai-10.1.1",
        badge: "Luyện thêm 1 - Nhận biết câu là mệnh đề",
        isAiGenerated: true,
        source: "Tài liệu chuyên đề Toán 10 KNTT Bài 1",
        question: "Trong các câu sau, câu nào là một mệnh đề?",
        options: [
          "Số 2025 chia hết cho 5.",
          "Bạn đang làm bài tập môn gì đó?",
          "Thời tiết hôm nay dễ chịu quá!",
          "Hãy giải bài tập này cẩn thận!"
        ],
        correctIndex: 0,
        explanation: "Câu \"Số 2025 chia hết cho 5\" là khẳng định đúng (tận cùng bằng 5) nên là mệnh đề. Các câu còn lại là câu hỏi, câu cảm thán và câu cầu khiến nên không phải mệnh đề."
      },
      {
        id: "ai-10.1.2",
        badge: "Luyện thêm 2 - Nhận biết câu không phải là mệnh đề",
        isAiGenerated: true,
        source: "Tài liệu chuyên đề Toán 10 KNTT Bài 2",
        question: "Trong các câu sau, câu nào không phải là mệnh đề?",
        options: [
          "Trời hôm nay nắng đẹp quá!",
          "Số 11 là số nguyên tố.",
          "Hình vuông có bốn cạnh bằng nhau.",
          "Tam giác có ba góc nhọn là tam giác nhọn."
        ],
        correctIndex: 0,
        explanation: "Câu \"Trời hôm nay nắng đẹp quá!\" là câu cảm thán biểu lộ cảm xúc cá nhân, không xác định được tính đúng sai nên không phải mệnh đề."
      },
      {
        id: "ai-10.1.3",
        badge: "Luyện thêm 3 - Mệnh đề chứa biến",
        isAiGenerated: true,
        source: "Chuyên đề Toán 10 KNTT Dạng 2 Câu 5",
        question: "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 9 = 0$\". Giá trị nào của $x$ dưới đây làm cho $P(x)$ là mệnh đề đúng?",
        options: [
          "$x = 3$",
          "$x = 1$",
          "$x = 2$",
          "$x = 0$"
        ],
        correctIndex: 0,
        explanation: "Phương trình $x^2 - 9 = 0 \\Leftrightarrow x = \\pm 3$. Thay $x = 3$ vào được $3^2 - 9 = 0$ (đúng). Do đó $x = 3$ làm cho $P(x)$ là mệnh đề đúng."
      },
      {
        id: "ai-10.1.4",
        badge: "Luyện thêm 4 - Phủ định mệnh đề hình học",
        isAiGenerated: true,
        source: "SGK Toán 10 KNTT Bài 1.2",
        question: "Mệnh đề phủ định của mệnh đề $P$: \"Tam giác $ABC$ là tam giác vuông\" là:",
        options: [
          "Tam giác $ABC$ không phải là tam giác vuông.",
          "Tam giác $ABC$ là tam giác đều.",
          "Tam giác $ABC$ là tam giác cân.",
          "Tam giác $ABC$ là tam giác tù."
        ],
        correctIndex: 0,
        explanation: "Phủ định của câu khẳng định \"Tam giác $ABC$ là tam giác vuông\" là thêm từ \"không phải là\": \"Tam giác $ABC$ không phải là tam giác vuông\"."
      },
      {
        id: "ai-10.1.5",
        badge: "Luyện thêm 5 - Phủ định bất đẳng thức",
        isAiGenerated: true,
        source: "Chuyên đề Toán 10 KNTT Dạng 3 Câu 12",
        question: "Mệnh đề phủ định của mệnh đề $P$: \"$x^2 + 1 \\ge 2x$\" là:",
        options: [
          "$x^2 + 1 < 2x$",
          "$x^2 + 1 \\le 2x$",
          "$x^2 + 1 > 2x$",
          "$x^2 + 1 = 2x$"
        ],
        correctIndex: 0,
        explanation: "Phủ định của dấu lớn hơn hoặc bằng (\"≥\") là dấu nhỏ hơn (\"<\"). Vậy mệnh đề phủ định là $x^2 + 1 < 2x$."
      },
      {
        id: "ai-10.1.6",
        badge: "Luyện thêm 6 - Phủ định mệnh đề chứa ký hiệu với mọi (∀)",
        isAiGenerated: true,
        source: "SGK Toán 10 KNTT Bài 1.4",
        question: "Mệnh đề phủ định của mệnh đề $P$: \"$\\forall x \\in \\mathbb{R}, x^2 - x + 1 > 0$\" là:",
        options: [
          "$\\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$",
          "$\\forall x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$",
          "$\\exists x \\in \\mathbb{R}, x^2 - x + 1 < 0$",
          "$\\forall x \\in \\mathbb{R}, x^2 - x + 1 < 0$"
        ],
        correctIndex: 0,
        explanation: "Phủ định của $\\forall$ là $\\exists$, và phủ định của dấu \">\" là dấu \"≤\". Vậy phủ định là $\\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0$."
      },
      {
        id: "ai-10.1.7",
        badge: "Luyện thêm 7 - Phủ định mệnh đề chứa ký hiệu tồn tại (∃)",
        isAiGenerated: true,
        source: "SGK Toán 10 KNTT Bài 1.5",
        question: "Mệnh đề phủ định của mệnh đề $Q$: \"$\\exists x \\in \\mathbb{Q}, 4x^2 - 1 = 0$\" là:",
        options: [
          "$\\forall x \\in \\mathbb{Q}, 4x^2 - 1 \\ne 0$",
          "$\\exists x \\in \\mathbb{Q}, 4x^2 - 1 \\ne 0$",
          "$\\forall x \\in \\mathbb{Q}, 4x^2 - 1 > 0$",
          "$\\forall x \\in \\mathbb{Q}, 4x^2 - 1 < 0$"
        ],
        correctIndex: 0,
        explanation: "Phủ định của $\\exists$ là $\\forall$, và phủ định của dấu \"=\" là dấu khác \"≠\". Vậy phủ định là $\\forall x \\in \\mathbb{Q}, 4x^2 - 1 \\ne 0$."
      },
      {
        id: "ai-10.1.8",
        badge: "Luyện thêm 8 - Mệnh đề kéo theo và điều kiện cần",
        isAiGenerated: true,
        source: "SGK Toán 10 KNTT Bài 1.3",
        question: "Cho định lý: \"Nếu tứ giác $ABCD$ là hình chữ nhật thì tứ giác $ABCD$ có hai đường chéo bằng nhau.\" Khẳng định nào sau đây là đúng?",
        options: [
          "Tứ giác $ABCD$ có hai đường chéo bằng nhau là điều kiện cần để tứ giác đó là hình chữ nhật.",
          "Tứ giác $ABCD$ có hai đường chéo bằng nhau là điều kiện đủ để tứ giác đó là hình chữ nhật.",
          "Tứ giác $ABCD$ là hình chữ nhật là điều kiện cần để tứ giác đó có hai đường chéo bằng nhau.",
          "Tứ giác $ABCD$ là hình chữ nhật khi và chỉ khi nó có hai đường chéo bằng nhau."
        ],
        correctIndex: 0,
        explanation: "Trong định lý $P \\Rightarrow Q$, kết luận $Q$ (\"có hai đường chéo bằng nhau\") là điều kiện cần để có giả thiết $P$ (\"là hình chữ nhật\")."
      },
      {
        id: "ai-10.1.9",
        badge: "Luyện thêm 9 - Mệnh đề đảo",
        isAiGenerated: true,
        source: "Chuyên đề Toán 10 KNTT Dạng 1 Câu 25",
        question: "Mệnh đề đảo của mệnh đề: \"Nếu $a$ và $b$ cùng chia hết cho $c$ thì $a + b$ chia hết cho $c$\" là:",
        options: [
          "Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$.",
          "Nếu $a$ và $b$ không cùng chia hết cho $c$ thì $a + b$ không chia hết cho $c$.",
          "Nếu $a + b$ không chia hết cho $c$ thì $a$ và $b$ không chia hết cho $c$.",
          "$a + b$ chia hết cho $c$ khi và chỉ khi $a$ và $b$ cùng chia hết cho $c$."
        ],
        correctIndex: 0,
        explanation: "Mệnh đề đảo của mệnh đề \"Nếu $P$ thì $Q$\" là mệnh đề \"Nếu $Q$ thì $P$\": \"Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$\"."
      },
      {
        id: "ai-10.1.10",
        badge: "Luyện thêm 10 - Mệnh đề tương đương hình học",
        isAiGenerated: true,
        source: "SGK Toán 10 KNTT Bài 1.6",
        question: "Khẳng định nào dưới đây là một mệnh đề tương đương đúng?",
        options: [
          "Tứ giác $ABCD$ là hình vuông khi và chỉ khi tứ giác $ABCD$ là hình thoi có một góc vuông.",
          "Tứ giác $ABCD$ là hình vuông khi và chỉ khi tứ giác $ABCD$ có bốn cạnh bằng nhau.",
          "Tứ giác $ABCD$ là hình chữ nhật khi và chỉ khi tứ giác $ABCD$ có hai đường chéo vuông góc.",
          "Tam giác $ABC$ vuông khi và chỉ khi tam giác $ABC$ có một góc bằng $45^\\circ$."
        ],
        correctIndex: 0,
        explanation: "Theo định nghĩa và tính chất hình học, hình thoi có một góc vuông chính là hình vuông, và hình vuông thì luôn là hình thoi có góc vuông. Cả hai chiều đều đúng nên mệnh đề tương đương này đúng."
      },
      {
        id: "ai-10.1.11",
        badge: "Luyện thêm 11 - Nhận biết câu là mệnh đề toán học",
        isAiGenerated: true,
        source: "Bộ đề thi thử Toán 10 KNTT",
        question: "Câu nào sau đây là một mệnh đề toán học?",
        options: [
          "Số 19 là số nguyên tố.",
          "Hôm nay bạn học toán có mệt không?",
          "Chúc các bạn đạt kết quả thật cao!",
          "Số 0 là số tự nhiên vô cùng thú vị."
        ],
        correctIndex: 0,
        explanation: "Câu 'Số 19 là số nguyên tố' là khẳng định đúng về số học nên là mệnh đề toán học. Các câu còn lại là câu hỏi, lời chúc và câu cảm thán."
      },
      {
        id: "ai-10.1.12",
        badge: "Luyện thêm 12 - Thông hiểu mệnh đề phủ định",
        isAiGenerated: true,
        source: "Bộ đề ôn luyện Toán 10 KNTT",
        question: "Mệnh đề phủ định của mệnh đề $P$: '$\\forall x \\in \\mathbb{R}, x^2 - x + 2 > 0$' là:",
        options: [
          "$\\exists x \\in \\mathbb{R}, x^2 - x + 2 \\le 0$",
          "$\\exists x \\in \\mathbb{R}, x^2 - x + 2 < 0$",
          "$\\forall x \\in \\mathbb{R}, x^2 - x + 2 \\le 0$",
          "$\\forall x \\in \\mathbb{R}, x^2 - x + 2 < 0$"
        ],
        correctIndex: 0,
        explanation: "Phủ định của ký hiệu với mọi $\\forall$ là tồn tại $\\exists$, và phủ định của dấu lớn hơn '>' là nhỏ hơn hoặc bằng '\\le'."
      }
    ],

    // ------------------------------------------
    // PHẦN II: 4 CÂU TRẮC NGHIỆM ĐÚNG / SAI (MỖI CÂU 4 Ý a, b, c, d)
    // ------------------------------------------
    trueFalseQuestions: [
      {
        id: "ai-tf-10.1.1",
        badge: "Đúng / Sai 1 - Tính đúng sai của các khẳng định số học",
        source: "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới",
        prompt: "Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
        subItems: [
          {
            id: "a",
            text: "Câu \"Số 2025 là số lẻ\" là một mệnh đề đúng.",
            correctAnswer: true,
            explanation: "Số 2025 tận cùng là 5 nên là số lẻ. Đây là khẳng định đúng."
          },
          {
            id: "b",
            text: "Câu \"Số 2 là số nguyên tố chẵn duy nhất\" là một mệnh đề đúng.",
            correctAnswer: true,
            explanation: "Số 2 chỉ chia hết cho 1 và 2 nên là số nguyên tố, mọi số chẵn lớn hơn 2 đều chia hết cho 2 nên là hợp số. Đây là khẳng định đúng."
          },
          {
            id: "c",
            text: "Câu \"Hình thoi là hình có bốn góc vuông\" là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Hình thoi có bốn cạnh bằng nhau, các góc không nhất thiết phải vuông. Hình có bốn góc vuông là hình chữ nhật. Khẳng định này sai."
          },
          {
            id: "d",
            text: "Câu \"Phương trình $x^2 - 2 = 0$ có nghiệm hữu tỉ\" là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Phương trình $x^2 - 2 = 0$ có nghiệm $x = \\pm \\sqrt{2}$, mà $\\sqrt{2}$ là số vô tỉ, không phải số hữu tỉ. Khẳng định này sai."
          }
        ]
      },
      {
        id: "ai-tf-10.1.2",
        badge: "Đúng / Sai 2 - Xét tính đúng sai của mệnh đề chứa ∀ và ∃",
        source: "Ngân hàng câu hỏi Mệnh đề - Tập hợp Toán 10 Lê Minh Kha",
        prompt: "Cho hai mệnh đề: $P$: \"$\\forall x \\in \\mathbb{R}, (x - 1)^2 \\ge 0$\" và $Q$: \"$\\exists n \\in \\mathbb{Z}, n^2 + 1 = 0$\". Xét tính Đúng hoặc Sai của các phát biểu sau:",
        subItems: [
          {
            id: "a",
            text: "Mệnh đề $P$ là một mệnh đề đúng.",
            correctAnswer: true,
            explanation: "Bình phương của mọi số thực luôn không âm: $(x - 1)^2 \\ge 0$ với mọi $x \\in \\mathbb{R}$. Do đó $P$ đúng."
          },
          {
            id: "b",
            text: "Mệnh đề $Q$ là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Ta có $n^2 + 1 \\ge 1 > 0$ với mọi $n \\in \\mathbb{Z}$, do đó không tồn tại số nguyên $n$ nào để $n^2 + 1 = 0$. Mệnh đề $Q$ sai."
          },
          {
            id: "c",
            text: "Mệnh đề phủ định của $P$ là $\\overline{P}$: \"$\\exists x \\in \\mathbb{R}, (x - 1)^2 < 0$\".",
            correctAnswer: true,
            explanation: "Phủ định của $\\forall$ là $\\exists$, và phủ định của \"≥\" là \"<\", nên khẳng định này đúng."
          },
          {
            id: "d",
            text: "Mệnh đề phủ định của $Q$ là $\\overline{Q}$: \"$\\forall n \\in \\mathbb{Z}, n^2 + 1 \\ne 0$\".",
            correctAnswer: true,
            explanation: "Phủ định của $\\exists$ là $\\forall$, và phủ định của \"=\" là \"≠\", nên khẳng định này đúng."
          }
        ]
      },
      {
        id: "ai-tf-10.1.3",
        badge: "Đúng / Sai 3 - Định lý hình học và điều kiện cần, đủ",
        source: "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới",
        prompt: "Cho định lý: \"Nếu hai góc đối đỉnh thì hai góc đó bằng nhau.\" Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subItems: [
          {
            id: "a",
            text: "Giả thiết của định lý là: \"Hai góc đối đỉnh\".",
            correctAnswer: true,
            explanation: "Mệnh đề đứng sau từ \"Nếu\" là giả thiết của định lý."
          },
          {
            id: "b",
            text: "\"Hai góc bằng nhau\" là điều kiện đủ để hai góc đó đối đỉnh.",
            correctAnswer: false,
            explanation: "\"Hai góc bằng nhau\" là kết luận $Q$, do đó nó là điều kiện cần chứ không phải điều kiện đủ."
          },
          {
            id: "c",
            text: "\"Hai góc đối đỉnh\" là điều kiện đủ để hai góc đó bằng nhau.",
            correctAnswer: true,
            explanation: "\"Hai góc đối đỉnh\" là giả thiết $P$, nên nó là điều kiện đủ để có kết luận $Q$."
          },
          {
            id: "d",
            text: "Mệnh đề đảo của định lý trên là một mệnh đề đúng.",
            correctAnswer: false,
            explanation: "Mệnh đề đảo là: \"Nếu hai góc bằng nhau thì hai góc đó đối đỉnh.\" Mệnh đề này sai vì hai góc bằng nhau hoàn toàn có thể ở vị trí so le trong hoặc đồng vị, không nhất thiết phải đối đỉnh."
          }
        ]
      },
      {
        id: "ai-tf-10.1.4",
        badge: "Đúng / Sai 4 - Mệnh đề tam giác cân và mệnh đề tương đương",
        source: "Bộ đề kiểm tra định kỳ mới Toán 10",
        prompt: "Cho hai mệnh đề: $P$: \"Tam giác $ABC$ cân tại $A$\" và $Q$: \"Tam giác $ABC$ có đường trung tuyến $AM$ đồng thời là đường cao\". Xét tính Đúng hoặc Sai của các khẳng định sau:",
        subItems: [
          {
            id: "a",
            text: "Mệnh đề kéo theo $P \\Rightarrow Q$ là một mệnh đề đúng.",
            correctAnswer: true,
            explanation: "Trong tam giác cân tại $A$, đường trung tuyến xuất phát từ đỉnh $A$ đồng thời là đường cao."
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
            explanation: "Mệnh đề đảo $Q \\Rightarrow P$ cũng đúng (tam giác có trung tuyến đồng thời là đường cao thì tam giác đó cân). Do đó $P \\Leftrightarrow Q$ là mệnh đề tương đương đúng."
          }
        ]
      }
    ],

    // ------------------------------------------
    // PHẦN III: 6 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN
    // ------------------------------------------
    shortAnswerQuestions: [
      {
        id: "ai-sa-10.1.1",
        badge: "Trả lời ngắn 1 - Đếm số lượng mệnh đề",
        source: "Chuyên đề Toán 10 KNTT Dạng 1",
        prompt: "Trong các câu sau đây, có tất cả bao nhiêu câu là mệnh đề?\n  (1) Số 20 là một hợp số.\n  (2) Tam giác đều có ba góc bằng $60^\\circ$.\n  (3) Ngày mai bạn có rảnh không?\n  (4) $3x + 2 = 11$.\n  (5) $7 > 10$.",
        correctAnswer: "3",
        acceptableAnswers: ["3", "ba"],
        explanation: "Các câu là mệnh đề gồm: (1) - đúng; (2) - đúng; (5) - sai. Câu (3) là câu hỏi, câu (4) là mệnh đề chứa biến chưa xác định $x$. Vậy có đúng 3 câu là mệnh đề."
      },
      {
        id: "ai-sa-10.1.2",
        badge: "Trả lời ngắn 2 - Nghiệm nguyên làm mệnh đề chứa biến đúng",
        source: "Chuyên đề Toán 10 KNTT Dạng 2",
        prompt: "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 7x + 12 = 0$\" với $x \\in \\mathbb{Z}$. Có bao nhiêu giá trị nguyên của $x$ trong đoạn $[-10; 10]$ để $P(x)$ trở thành một mệnh đề đúng?",
        correctAnswer: "2",
        acceptableAnswers: ["2", "hai"],
        explanation: "Giải phương trình $x^2 - 7x + 12 = 0 \\Leftrightarrow (x - 3)(x - 4) = 0 \\Leftrightarrow x = 3$ hoặc $x = 4$. Cả hai nghiệm đều là số nguyên thuộc đoạn $[-10; 10]$. Vậy có 2 giá trị."
      },
      {
        id: "ai-sa-10.1.3",
        badge: "Trả lời ngắn 3 - Số giá trị tự nhiên làm mệnh đề đúng",
        source: "SBT Toán 10 KNTT Bài 1.8",
        prompt: "Cho mệnh đề chứa biến $P(n)$: \"$n(n + 1)$ là số chẵn\" với $n \\in \\{1; 2; 3; 4; 5; 6; 7; 8; 9; 10\\}$. Có tất cả bao nhiêu giá trị của $n$ trong tập hợp đã cho làm cho $P(n)$ là mệnh đề đúng?",
        correctAnswer: "10",
        acceptableAnswers: ["10", "mười"],
        explanation: "Tích của hai số tự nhiên liên tiếp $n(n+1)$ luôn chia hết cho 2 với mọi số tự nhiên $n$. Do đó cả 10 giá trị của $n$ trong tập hợp đều làm cho $P(n)$ là mệnh đề đúng."
      },
      {
        id: "ai-sa-10.1.4",
        badge: "Trả lời ngắn 4 - Tìm số nguyên dương nhỏ nhất thỏa mãn mệnh đề ∀",
        source: "Bộ đề ôn tập thi định kì Toán 10 theo cấu trúc mới",
        prompt: "Tìm số nguyên dương nhỏ nhất của tham số $m$ để mệnh đề sau là một mệnh đề đúng:\n\"$\\forall x \\in \\mathbb{R}, x^2 - 4x + m > 0$\".",
        correctAnswer: "5",
        acceptableAnswers: ["5", "m=5"],
        explanation: "Tam thức bậc hai $x^2 - 4x + m$ có hệ số $a = 1 > 0$. Để tam thức luôn dương với mọi $x \\in \\mathbb{R}$ thì $\\Delta' = (-2)^2 - 1 \\cdot m = 4 - m < 0 \\Leftrightarrow m > 4$. Vì $m$ là số nguyên dương nhỏ nhất nên $m = 5$."
      },
      {
        id: "ai-sa-10.1.5",
        badge: "Trả lời ngắn 5 - Tìm nghiệm của phương trình trong mệnh đề tồn tại",
        source: "Chuyên đề Toán 10 KNTT Dạng 3",
        prompt: "Cho mệnh đề $P$: \"$\\exists x \\in \\mathbb{R}, 2x - 8 = 0$\". Giá trị thực của $x$ thỏa mãn mệnh đề $P$ là bao nhiêu?",
        correctAnswer: "4",
        acceptableAnswers: ["4", "x=4"],
        explanation: "Phương trình $2x - 8 = 0 \\Leftrightarrow 2x = 8 \\Leftrightarrow x = 4$. Vậy giá trị của $x$ là 4."
      },
      {
        id: "ai-sa-10.1.6",
        badge: "Trả lời ngắn 6 - Bài toán Venn câu lạc bộ thể thao",
        source: "SGK Toán 10 KNTT & Bộ đề cấu trúc mới",
        prompt: "Một nhóm gồm 30 học sinh tham gia sinh hoạt câu lạc bộ ngoại khóa: có 18 bạn tham gia CLB Bóng đá, 15 bạn tham gia CLB Bóng rổ, và 8 bạn tham gia cả hai CLB trên. Hỏi có bao nhiêu bạn học sinh trong nhóm không tham gia câu lạc bộ nào trong hai CLB trên?",
        correctAnswer: "5",
        acceptableAnswers: ["5", "năm", "5 học sinh"],
        explanation: "Số học sinh tham gia ít nhất một trong hai CLB là: $18 + 15 - 8 = 25$ bạn. Số học sinh không tham gia CLB nào là: $30 - 25 = 5$ bạn.",
        svgDiagram: `<svg viewBox="0 0 440 210" className="w-full max-w-md mx-auto my-2 select-none">
  <defs>
    <linearGradient id="gBongDa" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
      <stop offset="100%" stopColor="#047857" stopOpacity="0.10" />
    </linearGradient>
    <linearGradient id="gBongRo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
      <stop offset="100%" stopColor="#b45309" stopOpacity="0.10" />
    </linearGradient>
    <linearGradient id="gGiaoNhau" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
    </linearGradient>
  </defs>

  <!-- Khung chữ nhật bao quanh -->
  <rect x="10" y="10" width="420" height="190" rx="16" fill="#0b1329" stroke="#334155" strokeWidth="2" />

  <!-- Vùng màu nền 2 hình tròn -->
  <circle cx="170" cy="115" r="68" fill="url(#gBongDa)" />
  <circle cx="260" cy="115" r="68" fill="url(#gBongRo)" />

  <!-- Vùng giao nhau hình thấu kính -->
  <path d="M 215 64 A 68 68 0 0 1 215 166 A 68 68 0 0 1 215 64 Z" fill="url(#gGiaoNhau)" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 2" />

  <!-- Hai đường viền tròn cắt qua nhau rõ ràng -->
  <circle cx="170" cy="115" r="68" fill="none" stroke="#10b981" strokeWidth="2.5" />
  <circle cx="260" cy="115" r="68" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

  <!-- Biểu tượng Bóng đá và Bóng rổ -->
  <text x="170" y="40" fontSize="24" textAnchor="middle">⚽</text>
  <text x="260" y="40" fontSize="24" textAnchor="middle">🏀</text>

  <!-- Các con số -->
  <text x="135" y="123" fill="#a7f3d0" fontSize="22" fontWeight="bold" textAnchor="middle">10</text>
  <text x="215" y="123" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle">8</text>
  <text x="295" y="123" fill="#fef08a" fontSize="22" fontWeight="bold" textAnchor="middle">7</text>

  <!-- Số ở góc ngoài -->
  <text x="385" y="165" fill="#c4b5fd" fontSize="20" fontWeight="bold" textAnchor="middle">5</text>
</svg>`
      }
    ]
  }
,
  "t10-b2-tap-hop-cac-phep-toan": {
  "quizQuestions": [
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
},
  "t10-b3-bat-phuong-trinh-bac-nhat-hai-an": {
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
      "id": "ai-10.3.16",
      "badge": "Luyện thêm - Góc phần tư thứ II",
      "source": "Đề ôn tập Toán 10 KNTT",
      "question": "Tập hợp các điểm $(x; y)$ thỏa mãn điều kiện $\\begin{cases} x < 0 \\\\ y > 0 \\end{cases}$ là miền điểm thuộc góc phần tư thứ mấy?",
      "options": [
        "Góc phần tư thứ II",
        "Góc phần tư thứ I",
        "Góc phần tư thứ III",
        "Góc phần tư thứ IV"
      ],
      "correctIndex": 0,
      "explanation": "Các điểm có hoành độ âm ($x < 0$) và tung độ dương ($y > 0$) nằm ở góc phần tư thứ II của mặt phẳng tọa độ $Oxy$."
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
      "id": "ai-10.3.20",
      "badge": "Luyện thêm - Bài toán thực tế xưởng mộc",
      "source": "Đề bài toán kinh tế Toán 10 KNTT",
      "question": "Một thợ mộc có 40 giờ công để sản xuất $x$ chiếc bàn (mỗi chiếc tốn 4 giờ) và $y$ chiếc ghế (mỗi chiếc tốn 2 giờ). Bất phương trình biểu diễn quỹ thời gian của người thợ mộc là:",
      "options": [
        "$2x + y \\le 20$",
        "$4x + 2y < 40$",
        "$x + 2y \\le 20$",
        "$2x + y \\ge 20$"
      ],
      "correctIndex": 0,
      "explanation": "Thời gian làm bàn là $4x$, làm ghế là $2y$. Ta có: $4x + 2y \\le 40 \\Leftrightarrow 2x + y \\le 20$."
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
      "id": "ai-tf-10.3.7",
      "badge": "Luyện thêm Đúng / Sai 7 - Bài toán thực tế mua đồ dùng",
      "source": "Bài toán thực tế Toán 10",
      "prompt": "Một bạn học sinh có 100 nghìn đồng đi mua bánh ngọt (giá 10 nghìn đồng/cái) và sữa tươi (giá 8 nghìn đồng/hộp). Gọi $x, y$ lần lượt là số cái bánh và hộp sữa bạn mua ($x, y \\in \\mathbb{N}$). Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình mô tả ngân sách mua hàng là: $5x + 4y \\le 50$.",
          "correctAnswer": true,
          "explanation": "$10x + 8y \\le 100 \\Leftrightarrow 5x + 4y \\le 50$."
        },
        {
          "id": "b",
          "text": "Bạn có thể mua được 6 cái bánh ngọt và 6 hộp sữa tươi.",
          "correctAnswer": false,
          "explanation": "Thay $x = 6, y = 6$: $5(6) + 4(6) = 30 + 24 = 54 > 50$ (vượt ngân sách)."
        },
        {
          "id": "c",
          "text": "Nếu bạn mua 4 cái bánh ngọt thì có thể mua tối đa 7 hộp sữa tươi.",
          "correctAnswer": true,
          "explanation": "Với $x = 4 \\Rightarrow 5(4) + 4y \\le 50 \\Rightarrow 4y \\le 30 \\Rightarrow y \\le 7,5$. Do $y \\in \\mathbb{N}$ nên tối đa 7 hộp."
        },
        {
          "id": "d",
          "text": "Cặp số $(x; y) = (2; 10)$ thỏa mãn bất phương trình đã cho.",
          "correctAnswer": true,
          "explanation": "Thay $x = 2, y = 10$: $5(2) + 4(10) = 50 \\le 50$ (đúng)."
        }
      ]
    },
    {
      "id": "ai-tf-10.3.8",
      "badge": "Luyện thêm Đúng / Sai 8 - Bài toán sản xuất đồ chơi",
      "source": "Đề vận dụng kinh tế Toán 10",
      "prompt": "Một xưởng làm đồ chơi thủ công cần dùng tối đa 60 giờ làm việc để sản xuất $x$ chiếc ô tô gỗ (cần 3 giờ/chiếc) và $y$ chiếc máy bay gỗ (cần 5 giờ/chiếc) ($x, y \\in \\mathbb{N}$). Xét tính Đúng hoặc Sai của mỗi khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình ràng buộc số giờ làm việc là: $3x + 5y \\le 60$.",
          "correctAnswer": true,
          "explanation": "Thời gian làm ô tô là $3x$, máy bay là $5y$. Tổng thời gian: $3x + 5y \\le 60$."
        },
        {
          "id": "b",
          "text": "Xưởng có thể sản xuất được 10 chiếc ô tô và 7 chiếc máy bay.",
          "correctAnswer": false,
          "explanation": "Thay $x = 10, y = 7$: $3(10) + 5(7) = 30 + 35 = 65 > 60$."
        },
        {
          "id": "c",
          "text": "Nếu xưởng chỉ sản xuất ô tô gỗ ($y = 0$) thì có thể làm tối đa 20 chiếc.",
          "correctAnswer": true,
          "explanation": "$3x \\le 60 \\Rightarrow x \\le 20$."
        },
        {
          "id": "d",
          "text": "Nếu xưởng sản xuất 5 chiếc máy bay thì có thể làm tối đa 11 chiếc ô tô.",
          "correctAnswer": true,
          "explanation": "Với $y = 5 \\Rightarrow 3x + 25 \\le 60 \\Rightarrow 3x \\le 35 \\Rightarrow x \\le 11,67$. Tối đa 11 chiếc."
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
      "id": "ai-sa-10.3.10",
      "badge": "Luyện thêm Trả lời ngắn 10 - Bài toán thực tế mua cam xoài",
      "source": "Bài toán thực tế Toán 10",
      "prompt": "Bác Lan có 180 nghìn đồng để mua táo (giá 30 nghìn đồng/kg) và lê (giá 20 nghìn đồng/kg). Nếu bác Lan mua đúng 3 kg táo thì số kg lê tối đa bác có thể mua là bao nhiêu?",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4 kg"
      ],
      "explanation": "Mua 3 kg táo hết $3 \\cdot 30 = 90$ nghìn đồng. Còn lại $180 - 90 = 90$ nghìn đồng. Số kg lê tối đa mua được là $90 : 20 = 4,5$ kg, nhưng số nguyên kg là 4 kg (nếu tính kg nguyên)."
    },
    {
      "id": "ai-sa-10.3.11",
      "badge": "Luyện thêm Trả lời ngắn 11 - Bài toán xưởng may áo",
      "source": "Bài toán kinh tế Toán 10 KNTT",
      "prompt": "Một xưởng may có tối đa 80 mét vải để may áo sơ mi (cần 2 mét/chiếc) và váy (cần 3 mét/chiếc). Nếu xưởng đã may 25 chiếc áo sơ mi thì số chiếc váy tối đa có thể may thêm là bao nhiêu?",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10",
        "10 chiếc"
      ],
      "explanation": "May 25 áo sơ mi hết $25 \\cdot 2 = 50$ mét vải. Số vải còn lại: $80 - 50 = 30$ mét. Số váy tối đa may được: $30 : 3 = 10$ chiếc.",
      "svgDiagram": "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-sm select-none\">\n  <rect x=\"15\" y=\"10\" width=\"350\" height=\"200\" fill=\"#0f172a\" rx=\"12\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <line x1=\"40\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"348,180 338,176 338,184\" fill=\"#94a3b8\" />\n  <text x=\"330\" y=\"172\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">x (áo)</text>\n\n  <line x1=\"60\" y1=\"195\" x2=\"60\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"60,17 56,27 64,27\" fill=\"#94a3b8\" />\n  <text x=\"70\" y=\"30\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">y (váy)</text>\n  <text x=\"48\" y=\"193\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">O</text>\n\n  <!-- Tam giác 2x + 3y <= 80: x=40 (260, 180), y=26.7 (60, 55) -->\n  <polygon points=\"60,180 260,180 60,55\" fill=\"#059669\" fill-opacity=\"0.3\" stroke=\"#10b981\" stroke-width=\"2.5\" />\n  <text x=\"260\" y=\"194\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">40</text>\n  <text x=\"45\" y=\"58\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">26.7</text>\n\n  <!-- Điểm tại x = 25 (185), y = 10 (133) -->\n  <circle cx=\"185\" cy=\"133\" r=\"4.5\" fill=\"#facc15\" />\n  <line x1=\"185\" y1=\"180\" x2=\"185\" y2=\"133\" stroke=\"#facc15\" stroke-dasharray=\"3 3\" />\n  <line x1=\"60\" y1=\"133\" x2=\"185\" y2=\"133\" stroke=\"#facc15\" stroke-dasharray=\"3 3\" />\n  <text x=\"185\" y=\"194\" text-anchor=\"middle\" fill=\"#facc15\" font-size=\"10\" font-weight=\"bold\">25</text>\n  <text x=\"48\" y=\"137\" text-anchor=\"middle\" fill=\"#facc15\" font-size=\"10\" font-weight=\"bold\">10</text>\n  <text x=\"200\" y=\"125\" fill=\"#facc15\" font-size=\"11\" font-weight=\"bold\">(25; 10)</text>\n</svg>"
    },
    {
      "id": "ai-sa-10.3.12",
      "badge": "Luyện thêm Trả lời ngắn 12 - Bài toán xe du lịch",
      "source": "Đề toán thực tế kỳ thi Toán 10",
      "prompt": "Một trường học cần thuê xe chở tối đa 140 học sinh đi dã ngoại, gồm hai loại xe: xe 30 chỗ và xe 45 chỗ. Nếu trường đã thuê 2 xe loại 45 chỗ thì số xe loại 30 chỗ tối đa cần thuê thêm để chở hết số học sinh còn lại là bao nhiêu?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "2 xe"
      ],
      "explanation": "2 xe loại 45 chỗ chở được $2 \\cdot 45 = 90$ học sinh. Còn lại $140 - 90 = 50$ học sinh. Để chở đủ 50 học sinh thì cần ít nhất $50 : 30 = 1,67$ xe, tức là cần thuê 2 xe 30 chỗ.",
      "svgDiagram": "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-sm select-none\">\n  <rect x=\"15\" y=\"10\" width=\"350\" height=\"200\" fill=\"#0f172a\" rx=\"12\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <line x1=\"40\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"348,180 338,176 338,184\" fill=\"#94a3b8\" />\n  <text x=\"330\" y=\"172\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">x (xe 30)</text>\n\n  <line x1=\"60\" y1=\"195\" x2=\"60\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"60,17 56,27 64,27\" fill=\"#94a3b8\" />\n  <text x=\"70\" y=\"30\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"bold\">y (xe 45)</text>\n  <text x=\"48\" y=\"193\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">O</text>\n\n  <!-- BPT: 30x + 45y >= 140 -> 6x + 9y >= 28 -->\n  <polygon points=\"60,60 270,180 340,180 340,25 60,25\" fill=\"#f59e0b\" fill-opacity=\"0.25\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n\n  <!-- Điểm tại y = 2 -> 30x + 90 >= 140 -> x >= 1.67 -> chọn x = 2 -->\n  <circle cx=\"160\" cy=\"115\" r=\"4.5\" fill=\"#38bdf8\" />\n  <line x1=\"160\" y1=\"180\" x2=\"160\" y2=\"115\" stroke=\"#38bdf8\" stroke-dasharray=\"3 3\" />\n  <line x1=\"60\" y1=\"115\" x2=\"160\" y2=\"115\" stroke=\"#38bdf8\" stroke-dasharray=\"3 3\" />\n  <text x=\"160\" y=\"194\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">2</text>\n  <text x=\"48\" y=\"119\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">2</text>\n  <text x=\"180\" y=\"110\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">(2; 2)</text>\n</svg>"
    }
  ]
}


,

  // ==========================================
  // BÀI 4: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN - BỘ LUYỆN THÊM AI ĐỐI ỨNG 1-1
  // ==========================================
  "t10-b4-he-bat-phuong-trinh-bac-nhat-hai-an": {
  "quizQuestions": [
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
      "id": "ai-10.4.14",
      "badge": "Luyện thêm 14 - Bài toán kinh tế thực tế thiết lập hệ BPT",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Bác An có tối đa 10 triệu đồng để mua $x$ bao phân bón loại A (giá 400 nghìn đồng/bao) và $y$ bao loại B (giá 500 nghìn đồng/bao). Bất phương trình nào mô tả điều kiện ngân sách?",
      "options": [
        "$4x + 5y \\le 100$",
        "$400x + 500y \\le 10$",
        "$4x + 5y \\ge 100$",
        "$5x + 4y \\le 100$"
      ],
      "correctIndex": 0,
      "explanation": "Đổi 10 triệu đồng = 10 000 nghìn đồng. BPT ngân sách: $400x + 500y \\le 10 000$. Chia cả hai vế cho 100 ta được $4x + 5y \\le 100$."
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
      "id": "ai-10.4.18",
      "badge": "Luyện thêm 18 - Tính chất miền nghiệm bị chặn",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Khẳng định nào sau đây là đúng về miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 2 \\\\ x - y \\le 0 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$?",
      "options": [
        "Miền nghiệm không bị chặn (miền mở)",
        "Miền nghiệm là một hình tam giác đóng",
        "Miền nghiệm là một hình tứ giác",
        "Miền nghiệm chỉ gồm một điểm duy nhất"
      ],
      "correctIndex": 0,
      "explanation": "Miền nghiệm gồm các điểm $(x; y)$ với $x \\ge 0, y \\ge x, y \\ge 2 - x$. Vì khi $x \\to +\\infty, y \\to +\\infty$ các BPT vẫn thỏa mãn nên miền này trải dài ra vô cực, là một miền không bị chặn."
    },
    {
      "id": "ai-10.4.19",
      "badge": "Luyện thêm 19 - Khoảng cách và giá trị hàm mục tiêu",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho hệ $\\begin{cases} 0 \\le x \\le 2 \\\\ 0 \\le y \\le 3 \\end{cases}$. Điểm $(x; y)$ thuộc miền nghiệm của hệ làm cho biểu thức $F(x, y) = 4x - y$ đạt giá trị lớn nhất là:",
      "options": [
        "$(2; 0)$",
        "$(2; 3)$",
        "$(0; 0)$",
        "$(0; 3)$"
      ],
      "correctIndex": 0,
      "explanation": "Để $F(x, y) = 4x - y$ lớn nhất thì $x$ phải lớn nhất ($x = 2$) và $y$ phải nhỏ nhất ($y = 0$). Khi đó $F(2, 0) = 4(2) - 0 = 8$."
    },
    {
      "id": "ai-10.4.20",
      "badge": "Luyện thêm 20 - Tối ưu hóa chi phí thực tế",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Một xí nghiệp vận chuyển cần thuê $x$ xe lớn và $y$ xe nhỏ với chi phí $C(x, y) = 4x + 3y$ (triệu đồng). Miền nghiệm cho phép thuê là đa giác có các đỉnh $A(2; 5), B(6; 1), C(4; 4)$. Chi phí thuê thấp nhất là:",
      "options": [
        "23 triệu đồng",
        "27 triệu đồng",
        "28 triệu đồng",
        "24 triệu đồng"
      ],
      "correctIndex": 0,
      "explanation": "Tính chi phí tại 3 đỉnh:\n$C(A) = 4(2) + 3(5) = 23$;\n$C(B) = 4(6) + 3(1) = 27$;\n$C(C) = 4(4) + 3(4) = 28$.\nChi phí nhỏ nhất là 23 triệu đồng tại điểm $A(2; 5)$."
    }
  ],
  "trueFalseQuestions": [
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
      "id": "ai-tf-10.4.4",
      "badge": "Luyện thêm Đ/S 4 - Bài toán dinh dưỡng và khẩu phần ăn",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Một bác sĩ khuyên người bệnh mỗi ngày cần bổ sung ít nhất 900 đơn vị protein và 1200 đơn vị lipit. Thức ăn X chứa 30 đơn vị protein, 20 đơn vị lipit trên 100g. Thức ăn Y chứa 10 đơn vị protein, 30 đơn vị lipit trên 100g. Gọi $x, y$ (lạng, 1 lạng = 100g) lần lượt là lượng thức ăn X và Y cần ăn mỗi ngày.",
      "subItems": [
        {
          "id": "a",
          "text": "Điều kiện của các biến số là $x \\ge 0, y \\ge 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì khối lượng thức ăn không thể âm."
        },
        {
          "id": "b",
          "text": "Bất phương trình biểu thị lượng protein cần nạp là $30x + 10y \\ge 900$.",
          "correctAnswer": true,
          "explanation": "Đúng vì cần ít nhất 900 đơn vị protein nên tổng lượng protein $30x + 10y \\ge 900$."
        },
        {
          "id": "c",
          "text": "Bất phương trình biểu thị lượng lipit cần nạp là $20x + 30y \\le 1200$.",
          "correctAnswer": false,
          "explanation": "Sai vì yêu cầu bổ sung ít nhất 1200 đơn vị lipit nên dấu phải là $\\ge 1200$ chứ không phải $\\le$."
        },
        {
          "id": "d",
          "text": "Nếu ăn 20 lạng thức ăn X và 30 lạng thức ăn Y thì người bệnh thỏa mãn cả hai tiêu chuẩn trên.",
          "correctAnswer": true,
          "explanation": "Đúng. Với $x = 20, y = 30$:\nProtein: $30(20) + 10(30) = 900 \\ge 900$ (Thỏa mãn);\nLipit: $20(20) + 30(30) = 1300 \\ge 1200$ (Thỏa mãn)."
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
      "id": "ai-tf-10.4.6",
      "badge": "Luyện thêm Đ/S 6 - Khảo sát số đỉnh và tính bị chặn của miền nghiệm",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Cho hệ bất phương trình $\\begin{cases} 2x + y \\ge 4 \\\\ x + 2y \\ge 5 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Xét tính đúng/sai của các mệnh đề sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ.",
          "correctAnswer": false,
          "explanation": "Sai vì $2(0) + 0 = 0 \\ge 4$ là sai."
        },
        {
          "id": "b",
          "text": "Giao điểm của hai đường thẳng $2x + y = 4$ và $x + 2y = 5$ là điểm $I(1; 2)$.",
          "correctAnswer": true,
          "explanation": "Đúng vì giải hệ: $y = 4 - 2x \\Rightarrow x + 2(4 - 2x) = 5 \\Leftrightarrow -3x = -3 \\Leftrightarrow x = 1 \\Rightarrow y = 2$."
        },
        {
          "id": "c",
          "text": "Miền nghiệm của hệ là một miền đa giác đóng (bị chặn).",
          "correctAnswer": false,
          "explanation": "Sai vì đây là miền mở (không bị chặn phía trên bên phải khi $x, y \\to +\\infty$)."
        },
        {
          "id": "d",
          "text": "Biểu thức $F(x, y) = 3x + 2y$ có giá trị nhỏ nhất trên miền nghiệm bằng $7$ tại điểm $I(1; 2)$.",
          "correctAnswer": true,
          "explanation": "Đúng vì tại 3 đỉnh của miền lồi vô hạn: $(0; 5/2) \\Rightarrow F = 5$; $(1; 2) \\Rightarrow F = 3(1) + 2(2) = 7$; $(2; 0) \\Rightarrow F = 3(2) + 0 = 6$. Khoan! Tại $(2; 0)$, BPT $x + 2y \\ge 5$ trở thành $2 \\ge 5$ (Sai). Điểm biên trên các trục tọa độ phải là: giao của $2x + y = 4$ với $Oy$ là $(0; 4)$ thỏa mãn $0 + 2(4) = 8 \\ge 5$; giao của $x + 2y = 5$ với $Ox$ là $(5; 0)$ thỏa mãn $2(5) + 0 = 10 \\ge 4$. Ba đỉnh thực sự của miền là $(0; 4), (1; 2), (5; 0)$.\nTính $F$: tại $(0; 4): F = 8$; tại $(1; 2): F = 7$; tại $(5; 0): F = 15$. Vì vậy GTNN chính xác là $7$ tại $I(1; 2)$."
        }
      ]
    },
    {
      "id": "ai-tf-10.4.7",
      "badge": "Luyện thêm Đ/S 7 - Bài toán lập kế hoạch kinh doanh của hợp tác xã",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Một hợp tác xã trồng hai loại cây: cam (chi phí giống 2 triệu/ha, công 30 ngày/ha, lợi nhuận 40 triệu/ha) và bưởi (chi phí giống 3 triệu/ha, công 20 ngày/ha, lợi nhuận 50 triệu/ha). Hợp tác xã có tối đa 10 ha đất, quỹ giống 24 triệu và 240 ngày công. Gọi $x, y$ (ha) lần lượt là diện tích trồng cam và bưởi.",
      "subItems": [
        {
          "id": "a",
          "text": "Bất phương trình về diện tích đất trồng là $x + y \\le 10$.",
          "correctAnswer": true,
          "explanation": "Đúng vì tổng diện tích trồng cam và bưởi không vượt quá 10 ha."
        },
        {
          "id": "b",
          "text": "Bất phương trình về quỹ giống là $2x + 3y \\le 24$.",
          "correctAnswer": true,
          "explanation": "Đúng vì tiền giống cam là $2x$ triệu, bưởi là $3y$ triệu, tổng không quá 24 triệu."
        },
        {
          "id": "c",
          "text": "Bất phương trình về ngày công lao động sau khi rút gọn là $3x + 2y \\le 24$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $30x + 20y \\le 240 \\Leftrightarrow 3x + 2y \\le 24$."
        },
        {
          "id": "d",
          "text": "Lợi nhuận lớn nhất hợp tác xã có thể đạt được là $432$ triệu đồng khi trồng $4{,}8$ ha cam và $4{,}8$ ha bưởi.",
          "correctAnswer": true,
          "explanation": "Đúng. Đỉnh tối ưu là giao điểm của $2x + 3y = 24$ và $3x + 2y = 24$, giải ra $x = 4{,}8$ và $y = 4{,}8$ (thỏa mãn $x + y = 9{,}6 \\le 10$). Lợi nhuận cực đại là $40(4{,}8) + 50(4{,}8) = 432$ triệu đồng."
        }
      ]
    },
    {
      "id": "ai-tf-10.4.8",
      "badge": "Luyện thêm Đ/S 8 - Tính chất tổng quát của bài toán quy hoạch tuyến tính",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Xét bài toán tìm cực trị của biểu thức bậc nhất hai ẩn $F(x, y) = ax + by + c$ trên miền đa giác nghiệm $D$ của một hệ bất phương trình bậc nhất hai ẩn.",
      "subItems": [
        {
          "id": "a",
          "text": "Miền nghiệm $D$ luôn luôn là một đa giác lồi (nếu $D$ là một miền đa giác hữu hạn).",
          "correctAnswer": true,
          "explanation": "Đúng vì giao của các nửa mặt phẳng luôn tạo ra một tập hợp lồi."
        },
        {
          "id": "b",
          "text": "Giá trị lớn nhất và nhỏ nhất của $F(x, y)$ trên miền đa giác $D$ luôn đạt được tại ít nhất một trong các đỉnh của $D$.",
          "correctAnswer": true,
          "explanation": "Đúng, đây là định lý nền tảng của quy hoạch tuyến tính hai biến."
        },
        {
          "id": "c",
          "text": "Nếu biểu thức $F(x, y)$ đạt giá trị lớn nhất tại hai đỉnh kề nhau của đa giác $D$ thì nó cũng đạt giá trị lớn nhất tại mọi điểm trên đoạn thẳng nối hai đỉnh đó.",
          "correctAnswer": true,
          "explanation": "Đúng vì trên đoạn thẳng nối hai đỉnh, hàm bậc nhất biến thiên tuyến tính, khi hai đầu mút bằng nhau thì hàm nhận giá trị không đổi trên toàn bộ đoạn thẳng."
        },
        {
          "id": "d",
          "text": "Nếu miền nghiệm $D$ không bị chặn thì $F(x, y)$ chắc chắn không thể có giá trị nhỏ nhất.",
          "correctAnswer": false,
          "explanation": "Sai vì mặc dù $D$ không bị chặn, $F(x, y)$ vẫn hoàn toàn có thể có giá trị nhỏ nhất (như đã thấy ở câu Đ/S 6: $F(x, y) = 3x + 2y$ với $x \\ge 0, y \\ge 0$ luôn có GTNN bằng 7)."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
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
      "id": "ai-sa-10.4.4",
      "badge": "Luyện thêm TLN 4 - GTLN của biểu thức mục tiêu F(x, y)",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Cho $(x; y)$ thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$. Tìm giá trị lớn nhất của biểu thức $F(x, y) = 2x + 3y$.",
      "correctAnswer": "18",
      "acceptableAnswers": [
        "18"
      ],
      "explanation": "Miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$ (vì giao của $x+y=6$ và $2x+y=8$ là $x=2, y=4$).\nTính $F$ tại các đỉnh:\n$F(0; 0) = 0$;\n$F(4; 0) = 8$;\n$F(2; 4) = 2(2) + 3(4) = 16$;\n$F(0; 6) = 2(0) + 3(6) = 18$.\nVậy giá trị lớn nhất là 18."
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
      "id": "ai-sa-10.4.6",
      "badge": "Luyện thêm TLN 6 - Số nghiệm nguyên dương của hệ",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn hệ bất phương trình $\\begin{cases} 2x + y \\le 5 \\\\ x \\ge 1 \\\\ y \\ge 1 \\end{cases}$?",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4 cặp",
        "bốn"
      ],
      "explanation": "Vì $x, y \\in \\mathbb{Z}^+$:\n- Với $x = 1 \\Rightarrow 2(1) + y \\le 5 \\Rightarrow y \\le 3$, ta có 3 cặp: $(1; 1), (1; 2), (1; 3)$.\n- Với $x = 2 \\Rightarrow 2(2) + y \\le 5 \\Rightarrow y \\le 1$, ta có 1 cặp: $(2; 1)$.\n- Với $x \\ge 3 \\Rightarrow 2x \\ge 6 > 5$ (loại).\nTổng cộng có 4 cặp số nguyên dương."
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
      "id": "ai-sa-10.4.9",
      "badge": "Luyện thêm TLN 9 - Giá trị nguyên lớn nhất của tham số m",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tìm số nguyên $m$ lớn nhất để điểm $M(m; 2)$ thuộc miền nghiệm của hệ $\\begin{cases} 3x - 4y \\le 10 \\\\ x + y \\ge 1 \\end{cases}$.",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6",
        "m = 6"
      ],
      "explanation": "Thay $(m; 2)$ vào hệ:\n1) $3m - 4(2) \\le 10 \\Leftrightarrow 3m \\le 18 \\Leftrightarrow m \\le 6$.\n2) $m + 2 \\ge 1 \\Leftrightarrow m \\ge -1$.\nDo đó $-1 \\le m \\le 6$. Giá trị nguyên lớn nhất của $m$ là 6."
    },
    {
      "id": "ai-sa-10.4.10",
      "badge": "Luyện thêm TLN 10 - Chu vi miền tam giác vuông nghiệm",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 12 \\end{cases}$ là một tam giác vuông. Tính chu vi của tam giác đó.",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12"
      ],
      "explanation": "Đường thẳng $3x + 4y = 12$ cắt hai trục tại $A(4; 0)$ và $B(0; 3)$. Độ dài hai cạnh góc vuông là $OA = 4, OB = 3$. Cạnh huyền $AB = \\sqrt{4^2 + 3^2} = 5$. Chu vi là $4 + 3 + 5 = 12$."
    },
    {
      "id": "ai-sa-10.4.11",
      "badge": "Luyện thêm TLN 11 - Giá trị hoành độ tại điểm tối ưu",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Biểu thức $F(x, y) = 3x + 2y$ đạt giá trị lớn nhất trên miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\\\ x + 2y \\le 8 \\end{cases}$ tại điểm $(x_0; y_0)$. Tìm giá trị của $x_0$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "x = 5"
      ],
      "explanation": "Miền nghiệm là tứ giác $OABC$ với các đỉnh $O(0; 0), A(5; 0), B(2; 3), C(0; 4)$.\nTính $F$:\n$F(0; 0) = 0$;\n$F(5; 0) = 3(5) + 0 = 15$;\n$F(2; 3) = 3(2) + 2(3) = 12$;\n$F(0; 4) = 3(0) + 2(4) = 8$.\nGiá trị lớn nhất là 15 đạt tại điểm $A(5; 0)$. Do đó $x_0 = 5$."
    },
    {
      "id": "ai-sa-10.4.12",
      "badge": "Luyện thêm TLN 12 - Số đỉnh của miền đa giác nghiệm",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x \\le 5 \\\\ y \\le 4 \\\\ x + y \\ge 2 \\end{cases}$ là một đa giác có bao nhiêu đỉnh?",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "5 đỉnh",
        "năm"
      ],
      "explanation": "Hình chữ nhật $0 \\le x \\le 5, 0 \\le y \\le 4$ bị đường thẳng $x + y = 2$ cắt cụt mất góc ở gốc tọa độ $O$. Năm đỉnh của đa giác nghiệm là $(2; 0), (5; 0), (5; 4), (0; 4), (0; 2)$. Vậy đa giác có 5 đỉnh."
    }
  ]
}
,

  // ==========================================
  // BÀI 5: GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC TỪ 0° ĐẾN 180° - LUYỆN THÊM AI
  // ==========================================
  "t10-b5-gia-tri-luong-giac-0-180": {
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
      "id": "ai-10.5.19",
      "badge": "Luyện thêm 19 - Tính hiệu sin và cos khi biết tích",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho góc $\\alpha$ tù thỏa mãn $\\sin \\alpha \\cos \\alpha = -\\frac{12}{25}$. Giá trị của $\\sin \\alpha - \\cos \\alpha$ là:",
      "options": [
        "$\\frac{7}{5}$",
        "$-\\frac{7}{5}$",
        "$\\frac{1}{5}$",
        "$-\\frac{1}{5}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $(\\sin \\alpha - \\cos \\alpha)^2 = \\sin^2 \\alpha + \\cos^2 \\alpha - 2\\sin \\alpha \\cos \\alpha = 1 - 2\\left(-\\frac{12}{25}\\right) = 1 + \\frac{24}{25} = \\frac{49}{25}$. Vì $\\alpha$ tù nên $\\sin \\alpha > 0$ và $\\cos \\alpha < 0$, suy ra $\\sin \\alpha - \\cos \\alpha > 0$. Do đó $\\sin \\alpha - \\cos \\alpha = \\frac{7}{5}$."
    },
    {
      "id": "ai-10.5.20",
      "badge": "Luyện thêm 20 - Biểu thức không phụ thuộc vào góc alpha",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Biểu thức $K = (\\sin \\alpha + \\cos \\alpha)^2 + (\\sin \\alpha - \\cos \\alpha)^2$ có giá trị bằng:",
      "options": [
        "$2$",
        "$1$",
        "$0$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Khai triển: $(\\sin^2 \\alpha + \\cos^2 \\alpha + 2\\sin \\alpha \\cos \\alpha) + (\\sin^2 \\alpha + \\cos^2 \\alpha - 2\\sin \\alpha \\cos \\alpha) = 1 + 1 = 2$."
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
      "id": "ai-tf-10.5.7",
      "badge": "Luyện thêm Đ/S 7 - Chuỗi góc đối xứng",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Xét tính đúng/sai của các giá trị chuỗi lượng giác sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\cos 10^\\circ + \\cos 170^\\circ = 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $170^\\circ = 180^\\circ - 10^\\circ$ nên hai cos đối dấu nhau."
        },
        {
          "id": "b",
          "text": "$\\sin 20^\\circ - \\sin 160^\\circ = 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin 160^\\circ = \\sin 20^\\circ$."
        },
        {
          "id": "c",
          "text": "$\\tan 30^\\circ + \\tan 150^\\circ = 0$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\tan 150^\\circ = -\\tan 30^\\circ$."
        },
        {
          "id": "d",
          "text": "$\\sin^2 30^\\circ + \\sin^2 150^\\circ = 1$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\sin 30^\\circ = \\frac{1}{2}, \\sin 150^\\circ = \\frac{1}{2}$, tổng bình phương là $\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2} \\ne 1$."
        }
      ]
    },
    {
      "id": "ai-tf-10.5.8",
      "svgDiagram": "<svg viewBox=\"0 0 450 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <!-- Mặt đất --> <line x1=\"30\" y1=\"185\" x2=\"420\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <!-- Mặt trời góc trái trên --> <g transform=\"translate(65, 45)\"> <circle cx=\"0\" cy=\"0\" r=\"16\" fill=\"#f59e0b\"/> <line x1=\"0\" y1=\"-23\" x2=\"0\" y2=\"-28\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"0\" y1=\"23\" x2=\"0\" y2=\"28\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"-23\" y1=\"0\" x2=\"-28\" y2=\"0\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"23\" y1=\"0\" x2=\"28\" y2=\"0\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"-16\" y1=\"-16\" x2=\"-20\" y2=\"-20\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"16\" y1=\"16\" x2=\"20\" y2=\"20\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"16\" y1=\"-16\" x2=\"20\" y2=\"-20\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"-16\" y1=\"16\" x2=\"-20\" y2=\"20\" stroke=\"#f59e0b\" stroke-width=\"2\"/> </g> <!-- Cọc tiêu thẳng đứng AB tại B(320, 185) --> <line x1=\"320\" y1=\"185\" x2=\"320\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"3\"/> <!-- Góc vuông tại B --> <rect x=\"308\" y=\"173\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/> <!-- Bóng cọc tiêu trên mặt đất từ B(320, 185) về C(145, 185) --> <line x1=\"145\" y1=\"185\" x2=\"320\" y2=\"185\" stroke=\"#eab308\" stroke-width=\"3.5\"/> <!-- Tia sáng mặt trời từ C lên đỉnh cọc A --> <line x1=\"145\" y1=\"185\" x2=\"320\" y2=\"85\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"6 3\"/> <!-- Cung góc nâng alpha tại C --> <path d=\"M 185 185 A 40 40 0 0 0 178 165\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <text x=\"195\" y=\"175\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">α</text> <!-- Số đo chiều cao và chiều dài bóng --> <text x=\"330\" y=\"140\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"600\">h = 1,5 m</text> <text x=\"200\" y=\"205\" fill=\"#eab308\" font-size=\"13\" font-weight=\"600\">Bóng = 1,5√3 m</text> <!-- Các điểm --> <circle cx=\"320\" cy=\"85\" r=\"4\" fill=\"#38bdf8\"/> <text x=\"325\" y=\"80\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">A (Đỉnh cọc)</text> <circle cx=\"320\" cy=\"185\" r=\"4\" fill=\"#38bdf8\"/> <text x=\"325\" y=\"195\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">B (Chân)</text> <circle cx=\"145\" cy=\"185\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"110\" y=\"195\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">C</text> </svg>",
      "badge": "Luyện thêm Đ/S 8 - Ứng dụng thực tế đo góc và bóng",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Một cọc tiêu cao $1{,}5$ m cắm thẳng đứng trên mặt đất. Khi bóng của cọc tiêu trên mặt đất dài $1{,}5\\sqrt{3}$ m, gọi $\\alpha$ là góc nâng của tia sáng Mặt Trời so với mặt đất ($0^\\circ < \\alpha < 90^\\circ$).",
      "subItems": [
        {
          "id": "a",
          "text": "Ta có $\\tan \\alpha = \\frac{1{,}5}{1{,}5\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\tan$ bằng cạnh đối chia cạnh kề: $\\tan \\alpha = \\frac{1{,}5}{1{,}5\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$."
        },
        {
          "id": "b",
          "text": "Góc nâng $\\alpha$ của tia sáng Mặt Trời bằng $30^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$."
        },
        {
          "id": "c",
          "text": "$\\sin \\alpha = \\frac{1}{2}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\sin 30^\\circ = \\frac{1}{2}$."
        },
        {
          "id": "d",
          "text": "$\\cos \\alpha = \\frac{1}{2}$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$."
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
      "id": "ai-sa-10.5.10",
      "badge": "Luyện thêm TLN 10 - Tích tan từ 10 độ đến 80 độ",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tính giá trị của biểu thức $T = \\tan 10^\\circ \\cdot \\tan 20^\\circ \\cdot \\dots \\cdot \\tan 80^\\circ$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Ghép các cặp phụ nhau: $(\\tan 10^\\circ \\cdot \\tan 80^\\circ) \\cdot (\\tan 20^\\circ \\cdot \\tan 70^\\circ) \\cdot (\\tan 30^\\circ \\cdot \\tan 60^\\circ) \\cdot (\\tan 40^\\circ \\cdot \\tan 50^\\circ) = 1 \\cdot 1 \\cdot 1 \\cdot 1 = 1$."
    },
    {
      "id": "ai-sa-10.5.11",
      "badge": "Luyện thêm TLN 11 - Giá trị biểu thức đối xứng bậc 6",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Biết $\\sin \\alpha \\cos \\alpha = \\frac{1}{2}$. Tính giá trị của biểu thức $E = 4(\\sin^6 \\alpha + \\cos^6 \\alpha)$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1"
      ],
      "explanation": "Ta có $\\sin^6 \\alpha + \\cos^6 \\alpha = (\\sin^2 \\alpha + \\cos^2 \\alpha)^3 - 3\\sin^2 \\alpha \\cos^2 \\alpha(\\sin^2 \\alpha + \\cos^2 \\alpha) = 1 - 3\\left(\\frac{1}{2}\\right)^2(1) = 1 - \\frac{3}{4} = \\frac{1}{4}$. Do đó $4 \\cdot \\frac{1}{4} = 1$."
    },
    {
      "id": "ai-sa-10.5.12",
      "svgDiagram": "<svg viewBox=\"0 0 440 230\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <marker id=\"rayArrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"> <path d=\"M 0 2 L 8 5 L 0 8 z\" fill=\"#fbbf24\"/> </marker> </defs> <!-- Gương phẳng nằm ngang --> <line x1=\"40\" y1=\"175\" x2=\"400\" y2=\"175\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <!-- Vạch chéo mặt sau của gương --> <line x1=\"70\" y1=\"175\" x2=\"60\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"1.5\"/> <line x1=\"120\" y1=\"175\" x2=\"110\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"1.5\"/> <line x1=\"170\" y1=\"175\" x2=\"160\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"1.5\"/> <line x1=\"220\" y1=\"175\" x2=\"210\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"1.5\"/> <line x1=\"270\" y1=\"175\" x2=\"260\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"1.5\"/> <line x1=\"320\" y1=\"175\" x2=\"310\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"1.5\"/> <line x1=\"370\" y1=\"175\" x2=\"360\" y2=\"188\" stroke=\"#64748b\" stroke-width=\"1.5\"/> <text x=\"340\" y=\"200\" fill=\"#94a3b8\" font-size=\"12\" font-style=\"italic\">Gương phẳng</text> <!-- Pháp tuyến IN thẳng đứng --> <line x1=\"220\" y1=\"175\" x2=\"220\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/> <text x=\"225\" y=\"42\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">N (Pháp tuyến)</text> <circle cx=\"220\" cy=\"175\" r=\"4\" fill=\"#38bdf8\"/> <text x=\"215\" y=\"195\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">I</text> <!-- Tia tới SI (góc tới 30 độ so với pháp tuyến) --> <line x1=\"130\" y1=\"45\" x2=\"220\" y2=\"175\" stroke=\"#fbbf24\" stroke-width=\"2.2\" marker-mid=\"url(#rayArrow)\"/> <circle cx=\"130\" cy=\"45\" r=\"3.5\" fill=\"#fbbf24\"/> <text x=\"110\" y=\"40\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">S (Tia tới)</text> <!-- Tia phản xạ IR (góc phản xạ 30 độ so với pháp tuyến) --> <line x1=\"220\" y1=\"175\" x2=\"310\" y2=\"45\" stroke=\"#fbbf24\" stroke-width=\"2.2\"/> <circle cx=\"310\" cy=\"45\" r=\"3.5\" fill=\"#fbbf24\"/> <text x=\"315\" y=\"40\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">R (Tia phản xạ)</text> <!-- Góc tới 30 độ và góc phản xạ 30 độ --> <path d=\"M 220 120 A 55 55 0 0 1 193 135\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/> <text x=\"180\" y=\"125\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"bold\">30°</text> <path d=\"M 220 120 A 55 55 0 0 0 247 135\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/> <text x=\"235\" y=\"125\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"bold\">30°</text> <!-- Góc hợp bởi tia tới kéo dài và tia phản xạ là alpha = 120 độ --> <line x1=\"220\" y1=\"175\" x2=\"265\" y2=\"240\" stroke=\"#cbd5e1\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/> <text x=\"200\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">α = 120°</text> </svg>",
      "badge": "Luyện thêm TLN 12 - Góc lệch tia phản xạ",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Một tia sáng chiếu tới gương phẳng với góc tới bằng $30^\\circ$. Góc hợp bởi tia tới và tia phản xạ là $\\alpha$. Tính giá trị của $2\\cos \\alpha$.",
      "correctAnswer": "-1",
      "acceptableAnswers": [
        "-1"
      ],
      "explanation": "Theo định luật phản xạ ánh sáng, góc phản xạ bằng góc tới ($30^\\circ$). Góc hợp bởi tia tới và tia phản xạ là $\\alpha = 180^\\circ - (30^\\circ + 30^\\circ) = 120^\\circ$. Ta có $\\cos 120^\\circ = -\\frac{1}{2} \\Rightarrow 2\\cos 120^\\circ = -1$."
    }
  ]
},

  // ==========================================
  // BÀI 6: HỆ THỨC LƯỢNG TRONG TAM GIÁC - LUYỆN THÊM AI
  // ==========================================
  "t10-b6-he-thuc-luong-tam-giac": {
  "quizQuestions": [
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
      "id": "ai-10.6.12",
      "badge": "Luyện thêm 12 - Công thức Heron tính S",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Tam giác $ABC$ có các cạnh $a = 7, b = 9, c = 8$. Diện tích của tam giác bằng:",
      "options": [
        "$12\\sqrt{5}$",
        "$24\\sqrt{5}$",
        "$6\\sqrt{5}$",
        "$18\\sqrt{5}$"
      ],
      "correctIndex": 0,
      "explanation": "Nửa chu vi $p = \\frac{7+9+8}{2} = 12$. Diện tích $S = \\sqrt{12(12-7)(12-9)(12-8)} = \\sqrt{12 \\cdot 5 \\cdot 3 \\cdot 4} = \\sqrt{720} = 12\\sqrt{5}$."
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
      "id": "ai-10.6.18",
      "badge": "Luyện thêm 18 - Tam giác có một góc 120 độ",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho tam giác $ABC$ có $AB = 2, AC = 3$ và $\\widehat{A} = 120^\\circ$. Độ dài cạnh $BC$ là:",
      "options": [
        "$\\sqrt{19}$",
        "$\\sqrt{13}$",
        "$\\sqrt{7}$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "$BC^2 = 2^2 + 3^2 - 2(2)(3)\\cos 120^\\circ = 4 + 9 - 12\\left(-\\frac{1}{2}\\right) = 13 + 6 = 19 \\Rightarrow BC = \\sqrt{19}$."
    },
    {
      "id": "ai-10.6.19",
      "badge": "Luyện thêm 19 - Bán kính đường tròn ngoại tiếp tam giác đều",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Bán kính đường tròn ngoại tiếp tam giác đều cạnh $a$ là:",
      "options": [
        "$\\frac{a\\sqrt{3}}{3}$",
        "$\\frac{a\\sqrt{3}}{6}$",
        "$\\frac{a\\sqrt{3}}{2}$",
        "$a\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "$R = \\frac{a}{2\\sin 60^\\circ} = \\frac{a}{2 \\cdot \\frac{\\sqrt{3}}{2}} = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$."
    },
    {
      "id": "ai-10.6.20",
      "badge": "Luyện thêm 20 - Tổng diện tích hai nửa tam giác",
      "isAiGenerated": true,
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "question": "Cho tam giác $ABC$ có trung tuyến $AM$. Nếu diện tích tam giác $ABC$ bằng $40$ thì diện tích tam giác $ABM$ bằng:",
      "options": [
        "$20$",
        "$10$",
        "$30$",
        "$25$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $M$ là trung điểm $BC$ nên hai tam giác $ABM$ và $ACM$ có chung đường cao và đáy bằng nhau. Do đó $S_{ABM} = \\frac{1}{2} S_{ABC} = 20$."
    }
  ],
  "trueFalseQuestions": [
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
      "id": "ai-tf-10.6.4",
      "badge": "Luyện thêm Đ/S 4 - Trung tuyến và trọng tâm",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Cho tam giác đều $ABC$ có cạnh bằng $2\\sqrt{3}$, trọng tâm $G$.",
      "subItems": [
        {
          "id": "a",
          "text": "Độ dài mỗi đường trung tuyến bằng $3$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $m = \\frac{a\\sqrt{3}}{2} = \\frac{2\\sqrt{3} \\cdot \\sqrt{3}}{2} = 3$."
        },
        {
          "id": "b",
          "text": "Khoảng cách từ trọng tâm $G$ đến mỗi đỉnh bằng $2$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $AG = \\frac{2}{3} m = \\frac{2}{3} \\cdot 3 = 2$."
        },
        {
          "id": "c",
          "text": "Khoảng cách từ $G$ đến mỗi cạnh bằng $1$.",
          "correctAnswer": true,
          "explanation": "Đúng vì bán kính nội tiếp $r = \\frac{1}{3} m = 1$."
        },
        {
          "id": "d",
          "text": "Diện tích tam giác $GBC$ bằng $\\frac{1}{2}$ diện tích tam giác $ABC$.",
          "correctAnswer": false,
          "explanation": "Sai vì trọng tâm chia tam giác thành 3 tam giác có diện tích bằng nhau, do đó $S_{GBC} = \\frac{1}{3} S_{ABC}$."
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
      "id": "ai-tf-10.6.6",
      "badge": "Luyện thêm Đ/S 6 - Nhận dạng tam giác qua tỉ lệ cạnh",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Cho tam giác $ABC$ có các cạnh thỏa mãn $a : b : c = 3 : 5 : 7$.",
      "subItems": [
        {
          "id": "a",
          "text": "Có thể đặt $a = 3k, b = 5k, c = 7k$ với $k > 0$.",
          "correctAnswer": true,
          "explanation": "Đúng theo tính chất dãy tỉ số bằng nhau."
        },
        {
          "id": "b",
          "text": "Góc lớn nhất của tam giác là góc $\\widehat{C}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $c$ là cạnh lớn nhất."
        },
        {
          "id": "c",
          "text": "$\\cos C = -\\frac{1}{2}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\cos C = \\frac{9k^2 + 25k^2 - 49k^2}{2(3k)(5k)} = \\frac{-15k^2}{30k^2} = -\\frac{1}{2}$."
        },
        {
          "id": "d",
          "text": "Số đo góc $\\widehat{C}$ bằng $150^\\circ$.",
          "correctAnswer": false,
          "explanation": "Sai vì $\\cos C = -\\frac{1}{2} \\Rightarrow \\widehat{C} = 120^\\circ$ chứ không phải $150^\\circ$."
        }
      ]
    },
    {
      "id": "ai-tf-10.6.7",
      "badge": "Luyện thêm Đ/S 7 - Các công thức diện tích mở rộng",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Xét tính đúng/sai của các công thức diện tích tam giác $ABC$:",
      "subItems": [
        {
          "id": "a",
          "text": "$S = 2R^2 \\sin A \\sin B \\sin C$.",
          "correctAnswer": true,
          "explanation": "Đúng vì thay $a = 2R\\sin A, b = 2R\\sin B, c = 2R\\sin C$ vào $S = \\frac{abc}{4R} = 2R^2 \\sin A \\sin B \\sin C$."
        },
        {
          "id": "b",
          "text": "$S = pr = \\frac{a+b+c}{2} \\cdot r$.",
          "correctAnswer": true,
          "explanation": "Đúng theo công thức diện tích qua bán kính nội tiếp."
        },
        {
          "id": "c",
          "text": "Nếu $a = 2R$ thì góc $\\widehat{A}$ bắt buộc phải bằng $90^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $\\frac{a}{\\sin A} = 2R \\Rightarrow \\sin A = 1 \\Rightarrow \\widehat{A} = 90^\\circ$."
        },
        {
          "id": "d",
          "text": "Chiều cao $h_a = \\frac{bc}{2R}$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $S = \\frac{1}{2} a h_a = \\frac{abc}{4R} \\Rightarrow h_a = \\frac{bc}{2R}$."
        }
      ]
    },
    {
      "id": "ai-tf-10.6.8",
      "svgDiagram": "<svg viewBox=\"0 0 460 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <!-- Mặt đất --> <line x1=\"30\" y1=\"195\" x2=\"430\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <!-- Ngọn núi cao tại D(385, 195) --> <polygon points=\"385,55 315,195 440,195\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"1.5\"/> <polyline points=\"385,55 372,85 385,80 398,90 385,55\" fill=\"#f8fafc\" opacity=\"0.8\"/> <!-- Chiều cao ngọn núi CD --> <line x1=\"385\" y1=\"55\" x2=\"385\" y2=\"195\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/> <rect x=\"373\" y=\"183\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/> <circle cx=\"385\" cy=\"55\" r=\"4.5\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"55\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C (Đỉnh núi)</text> <circle cx=\"385\" cy=\"195\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"395\" y=\"205\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">D</text> <!-- Tia ngắm từ B và A --> <line x1=\"255\" y1=\"195\" x2=\"385\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"90\" y1=\"195\" x2=\"385\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <!-- Cung góc nâng 45 độ tại B --> <path d=\"M 290 195 A 35 35 0 0 0 279 169\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"285\" y=\"185\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">45°</text> <!-- Cung góc nâng 30 độ tại A --> <path d=\"M 130 195 A 40 40 0 0 0 124 175\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"135\" y=\"187\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">30°</text> <!-- Kích thước AB = 200m --> <line x1=\"90\" y1=\"215\" x2=\"255\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <line x1=\"90\" y1=\"210\" x2=\"90\" y2=\"220\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <line x1=\"255\" y1=\"210\" x2=\"255\" y2=\"220\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <text x=\"150\" y=\"230\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"600\">AB = 200 m</text> <!-- Điểm A và B --> <circle cx=\"90\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"80\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"255\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"245\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <text x=\"405\" y=\"130\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">h = CD</text> </svg>",
      "badge": "Luyện thêm Đ/S 8 - Ứng dụng thực tế đo góc nâng",
      "source": "Bộ đề thi thử Toán 10 mới",
      "prompt": "Một người đứng tại vị trí $A$ quan sát đỉnh $C$ của một ngọn núi thấy góc nâng bằng $30^\\circ$. Người đó tiến lại gần ngọn núi thêm $200$ m đến điểm $B$ thì thấy góc nâng là $45^\\circ$ ($A, B$ và chân núi $D$ thẳng hàng).",
      "subItems": [
        {
          "id": "a",
          "text": "Tam giác $ABC$ có góc $\\widehat{CAB} = 30^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng theo giả thiết góc nâng từ $A$."
        },
        {
          "id": "b",
          "text": "Góc $\\widehat{ACB} = 45^\\circ - 30^\\circ = 15^\\circ$.",
          "correctAnswer": true,
          "explanation": "Đúng vì góc ngoài tại $B$ bằng $45^\\circ$."
        },
        {
          "id": "c",
          "text": "Độ dài đoạn $BC = \\frac{200 \\sin 30^\\circ}{\\sin 15^\\circ}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo định lý Sin trong tam giác $ABC$."
        },
        {
          "id": "d",
          "text": "Chiều cao ngọn núi $CD = BC \\cos 45^\\circ$.",
          "correctAnswer": false,
          "explanation": "Sai vì trong tam giác vuông $CBD$, $CD = BC \\sin 45^\\circ$ (mặc dù $\\sin 45^\\circ = \\cos 45^\\circ$ về giá trị nhưng hệ thức lý thuyết góc đối là sin)."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
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
      "id": "ai-sa-10.6.6",
      "badge": "Luyện thêm TLN 6 - Bán kính đường tròn nội tiếp r",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tam giác có ba cạnh $a = 6, b = 8, c = 10$. Tính bán kính đường tròn nội tiếp $r$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Tam giác vuông, $S = \\frac{1}{2}(6)(8) = 24$, $p = 12 \\Rightarrow r = \\frac{24}{12} = 2$."
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
      "id": "ai-sa-10.6.9",
      "svgDiagram": "<svg viewBox=\"0 0 460 240\" class=\"w-full max-w-md mx-auto h-auto rounded-xl shadow-lg border border-slate-700/60 bg-slate-900/95 my-2.5\" xmlns=\"http://www.w3.org/2000/svg\"> <!-- Mặt đất --> <line x1=\"30\" y1=\"195\" x2=\"430\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <!-- Tòa nhà cao tầng tại D(380, 195) --> <rect x=\"360\" y=\"45\" width=\"40\" height=\"150\" fill=\"#1e293b\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <!-- Cửa sổ tòa nhà --> <rect x=\"368\" y=\"60\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <rect x=\"384\" y=\"60\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <rect x=\"368\" y=\"85\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <rect x=\"384\" y=\"85\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <rect x=\"368\" y=\"110\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <rect x=\"384\" y=\"110\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <rect x=\"368\" y=\"135\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <rect x=\"384\" y=\"135\" width=\"8\" height=\"10\" fill=\"#38bdf8\" opacity=\"0.7\"/> <!-- Đỉnh C và chân D --> <circle cx=\"380\" cy=\"45\" r=\"4.5\" fill=\"#f59e0b\"/> <text x=\"390\" y=\"45\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">C (Nóc nhà)</text> <circle cx=\"380\" cy=\"195\" r=\"4\" fill=\"#f59e0b\"/> <text x=\"390\" y=\"210\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"bold\">D</text> <!-- Tia ngắm từ B và A --> <line x1=\"260\" y1=\"195\" x2=\"380\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"195\" x2=\"380\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2\"/> <!-- Cung góc nâng 60 độ tại B --> <path d=\"M 290 195 A 30 30 0 0 0 276 174\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"288\" y=\"186\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">60°</text> <!-- Cung góc nâng 30 độ tại A --> <path d=\"M 140 195 A 40 40 0 0 0 134 175\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\"/> <text x=\"145\" y=\"188\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">30°</text> <!-- Kích thước AB = 60m --> <line x1=\"100\" y1=\"215\" x2=\"260\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <line x1=\"100\" y1=\"210\" x2=\"100\" y2=\"220\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <line x1=\"260\" y1=\"210\" x2=\"260\" y2=\"220\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/> <text x=\"160\" y=\"230\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"600\">AB = 60 m</text> <!-- Điểm A và B --> <circle cx=\"100\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"90\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">A</text> <circle cx=\"260\" cy=\"195\" r=\"5\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <text x=\"250\" y=\"190\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">B</text> <text x=\"410\" y=\"120\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">h = ?</text> </svg>",
      "badge": "Luyện thêm TLN 9 - Khoảng cách ngọn hải đăng",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Hai người cùng quan sát một tòa nhà cao từ hai điểm $A$ và $B$ cách nhau $60$ m. Biết từ $A$ và $B$ nhìn thấy đỉnh tòa nhà dưới góc $30^\\circ$ và $60^\\circ$ ($A, B$ và chân tòa nhà thẳng hàng). Tính chiều cao của tòa nhà (lấy kết quả chính xác dưới dạng $a\\sqrt{3}$, hãy điền giá trị $a$).",
      "correctAnswer": "30",
      "acceptableAnswers": [
        "30"
      ],
      "explanation": "Góc ngoài tại $B$ là $60^\\circ$, góc $\\widehat{A} = 30^\\circ \\Rightarrow \\widehat{ACB} = 60^\\circ - 30^\\circ = 30^\\circ$. Tam giác $ABC$ cân tại $B \\Rightarrow BC = AB = 60$ m. Chiều cao $h = BC \\sin 60^\\circ = 60 \\cdot \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}$ m. Vậy $a = 30$."
    },
    {
      "id": "ai-sa-10.6.10",
      "badge": "Luyện thêm TLN 10 - Chu vi tam giác",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tam giác $ABC$ có diện tích $S = 24$ và bán kính đường tròn nội tiếp $r = 2$. Tính chu vi của tam giác $ABC$.",
      "correctAnswer": "24",
      "acceptableAnswers": [
        "24"
      ],
      "explanation": "$S = pr \\Rightarrow p = \\frac{S}{r} = \\frac{24}{2} = 12$. Chu vi $2p = 24$."
    },
    {
      "id": "ai-sa-10.6.11",
      "badge": "Luyện thêm TLN 11 - Cạnh của tam giác đều khi biết R",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Một tam giác đều có bán kính đường tròn ngoại tiếp $R = 2\\sqrt{3}$. Tính độ dài cạnh của tam giác đó.",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6"
      ],
      "explanation": "$a = R\\sqrt{3} = 2\\sqrt{3} \\cdot \\sqrt{3} = 6$."
    },
    {
      "id": "ai-sa-10.6.12",
      "badge": "Luyện thêm TLN 12 - Tích abc của ba cạnh",
      "source": "Bộ đề bồi dưỡng Toán 10 KNTT",
      "prompt": "Tam giác $ABC$ có diện tích $S = 15$ và bán kính ngoại tiếp $R = 5$. Tính tích độ dài ba cạnh $a \\cdot b \\cdot c$.",
      "correctAnswer": "300",
      "acceptableAnswers": [
        "300"
      ],
      "explanation": "$S = \\frac{abc}{4R} \\Rightarrow abc = 4RS = 4(5)(15) = 300$."
    }
  ]
}
};