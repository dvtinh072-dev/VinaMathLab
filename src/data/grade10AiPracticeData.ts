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
        "5",
        "10",
        "20",
        "2.5"
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
        "2",
        "26",
        "13",
        "1"
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
};