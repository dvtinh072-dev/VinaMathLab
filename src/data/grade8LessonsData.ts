import type { DetailedLessonData } from "./allGradesLessonsData";

export const GRADE_8_DETAILED_LESSONS: Record<string, DetailedLessonData> = {
  "t8-b1-don-thuc": {
    "id": "t8-b1-don-thuc",
    "lessonNumber": 1,
    "title": "Bài 1: Đơn thức",
    "bookChapter": "Chương I: Đa thức",
    "scenarioTitle": "Tình huống: Tính thể tích khối gỗ và diện tích hình lăng trụ",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Đơn thức & Đơn thức thu gọn",
        "points": [
          "Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến.",
          "Đơn thức thu gọn là đơn thức chỉ gồm tích của một số với các biến mà mỗi biến đã được nâng lên lũy thừa với số mũ nguyên dương.",
          "Trong đơn thức thu gọn có hai phần:",
          "  Phần hệ số (số đứng trước).",
          "  Phần biến (các biến nâng lên lũy thừa).",
          "Chú ý: Mỗi số khác 0 là một đơn thức thu gọn chỉ có phần hệ số. Trong đơn thức thu gọn, mỗi biến chỉ được viết một lần."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề Trang 2 & SGK Trang 6)",
        "exampleProblem": "Trong các biểu thức sau: $12x^2y;\\ x - 2y;\\ 18;\\ \\frac{x}{y}$, biểu thức nào là đơn thức? Xác định phần hệ số và phần biến của đơn thức thu gọn đó.",
        "exampleSolution": "• Biểu thức $12x^2y$ và $18$ là các đơn thức (biểu thức $x - 2y$ có phép trừ, $\\frac{x}{y}$ có biến ở mẫu nên không phải là đơn thức).\n• Đơn thức thu gọn $12x^2y$ có phần hệ số là $12$, phần biến là $x^2y$."
      },
      {
        "index": "2",
        "title": "Bậc của đơn thức",
        "points": [
          "Bậc của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến có trong đơn thức đó.",
          "Quy ước:",
          "  Số thực khác 0 là đơn thức bậc 0.",
          "  Số 0 được coi là đơn thức không có bậc."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề Trang 2 & SGK Trang 7)",
        "exampleProblem": "Xác định bậc của mỗi đơn thức sau: a) $5x^3y^2z$;  b) $-2x^2y$;  c) $2026$.",
        "exampleSolution": "a) Đơn thức $5x^3y^2z$ có các biến $x$ (mũ 3), $y$ (mũ 2), $z$ (mũ 1). Bậc là: $3 + 2 + 1 = 6$.\nb) Đơn thức $-2x^2y$ có bậc là: $2 + 1 = 3$.\nc) Số $2026 \\ne 0$ là đơn thức có bậc bằng $0$."
      },
      {
        "index": "3",
        "title": "Đơn thức đồng dạng",
        "points": [
          "Hai đơn thức đồng dạng là hai đơn thức có hệ số khác 0 và có cùng phần biến.",
          "Các số khác 0 được coi là những đơn thức đồng dạng với nhau."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 3 & SGK Trang 8)",
        "exampleProblem": "Trong các đơn thức sau, đơn thức nào đồng dạng với đơn thức $-3x^2yz$?\na) $-3xyz$;  b) $\\frac{2}{3}x^2yz$;  c) $4x^2y$;  d) $2yzx^2$.",
        "exampleSolution": "Phần biến của $-3x^2yz$ là $x^2yz$.\n• Đơn thức $\\frac{2}{3}x^2yz$ và $2yzx^2$ có cùng phần biến $x^2yz$ và hệ số khác 0 nên đồng dạng với $-3x^2yz$."
      },
      {
        "index": "4",
        "title": "Cộng và trừ các đơn thức đồng dạng",
        "points": [
          "Để cộng (hay trừ) các đơn thức đồng dạng, ta cộng (hay trừ) các hệ số với nhau và giữ nguyên phần biến:",
          "  $a \\cdot X + b \\cdot X = (a + b) \\cdot X$",
          "  $a \\cdot X - b \\cdot X = (a - b) \\cdot X$ (với $X$ là phần biến chung)."
        ],
        "exampleTitle": "Ví dụ 4 (Tài liệu chuyên đề Trang 3 & SGK Trang 9)",
        "exampleProblem": "Thực hiện phép tính: a) $3x^2y^3 + 4x^2y^3$;  b) $3x^2yz - 4x^2yz$.",
        "exampleSolution": "a) Cộng hệ số, giữ nguyên phần biến: $3x^2y^3 + 4x^2y^3 = (3 + 4)x^2y^3 = 7x^2y^3$.\nb) $3x^2yz - 4x^2yz = (3 - 4)x^2yz = -x^2yz$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-8.1.1",
        "badge": "Câu 1 - Nhận biết đơn thức",
        "source": "Tài liệu chuyên đề Toán 8 Câu 3 (Trang 77)",
        "question": "Trong các biểu thức đại số sau, biểu thức nào là đơn thức?",
        "options": [
          "$-\\frac{1}{5}x^4y^5$",
          "$2x + y$",
          "$\\frac{x + y}{y}$",
          "$x^2 - 3$"
        ],
        "correctIndex": 0,
        "explanation": "Đơn thức là biểu thức chỉ gồm một tích giữa các số và các biến. Do đó $-\\frac{1}{5}x^4y^5$ là đơn thức. Các biểu thức còn lại chứa phép cộng, trừ hoặc biến ở mẫu số."
      },
      {
        "id": "quiz-8.1.2",
        "badge": "Câu 2 - Nhận biết biểu thức không phải là đơn thức",
        "source": "Tài liệu chuyên đề Toán 8 Câu 1 (Trang 77)",
        "question": "Biểu thức nào dưới đây KHÔNG phải là đơn thức?",
        "options": [
          "$x + 2y$",
          "$\\frac{1}{4}$",
          "$-3xy^2z^3$",
          "$x$"
        ],
        "correctIndex": 0,
        "explanation": "Biểu thức $x + 2y$ chứa phép cộng giữa hai biến nên là một đa thức (không phải là đơn thức). Các biểu thức $\\frac{1}{4};\\ -3xy^2z^3;\\ x$ đều là các đơn thức."
      },
      {
        "id": "quiz-8.1.3",
        "badge": "Câu 3 - Nhận biết đơn thức chưa thu gọn",
        "source": "Tài liệu chuyên đề Toán 8 Câu 2 (Trang 77)",
        "question": "Trong những đơn thức sau, đơn thức nào CHƯA phải là đơn thức thu gọn?",
        "options": [
          "$2x^3y \\cdot x^2$",
          "$x$",
          "$x^2y^3$",
          "$-2$"
        ],
        "correctIndex": 0,
        "explanation": "Đơn thức $2x^3y \\cdot x^2$ có biến $x$ xuất hiện 2 lần nên chưa được thu gọn (sau khi thu gọn là $2x^5y$)."
      },
      {
        "id": "quiz-8.1.4",
        "badge": "Câu 4 - Thu gọn đơn thức",
        "source": "Tài liệu chuyên đề Toán 8 Câu 4 (Trang 77)",
        "question": "Sau khi thu gọn đơn thức $3x^2y \\cdot xy$ ta được đơn thức:",
        "options": [
          "$3x^3y^2$",
          "$3x^2y^3$",
          "$3x^3y^3$",
          "$3x^2y^4$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân các phần biến với nhau: $3x^2y \\cdot xy = 3 \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y) = 3x^3y^2$."
      },
      {
        "id": "quiz-8.1.5",
        "badge": "Câu 5 - Xác định hệ số và phần biến",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 3 (Trang 2)",
        "question": "Cho đơn thức thu gọn $-\\frac{3}{4}x^2y^3$. Phần hệ số và phần biến của đơn thức lần lượt là:",
        "options": [
          "Hệ số là $-\\frac{3}{4}$, phần biến là $x^2y^3$",
          "Hệ số là $\\frac{3}{4}$, phần biến là $x^2y^3$",
          "Hệ số là $-\\frac{3}{4}$, phần biến là $xy$",
          "Hệ số là $-3$, phần biến là $4x^2y^3$"
        ],
        "correctIndex": 0,
        "explanation": "Trong đơn thức thu gọn $-\\frac{3}{4}x^2y^3$, phần số đứng trước là hệ số ($-\\frac{3}{4}$), phần chứa các biến là phần biến ($x^2y^3$)."
      },
      {
        "id": "quiz-8.1.6",
        "badge": "Câu 6 - Bậc của đơn thức",
        "source": "SGK Toán 8 Bài 1.2 (Trang 10)",
        "question": "Bậc của đơn thức $5x^3y^2z$ là:",
        "options": [
          "6",
          "5",
          "3",
          "7"
        ],
        "correctIndex": 0,
        "explanation": "Bậc của đơn thức là tổng số mũ của tất cả các biến: $3 + 2 + 1 = 6$."
      },
      {
        "id": "quiz-8.1.7",
        "badge": "Câu 7 - Nhận biết đơn thức đồng dạng",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 7 (Trang 3)",
        "question": "Trong các đơn thức sau, đơn thức nào đồng dạng với đơn thức $-3x^2yz$?",
        "options": [
          "$\\frac{2}{3}x^2yz$",
          "$-3xyz$",
          "$4x^2y$",
          "$2yzx$"
        ],
        "correctIndex": 0,
        "explanation": "Đơn thức $\\frac{2}{3}x^2yz$ có cùng phần biến $x^2yz$ và hệ số khác 0 nên đồng dạng với $-3x^2yz$."
      },
      {
        "id": "quiz-8.1.8",
        "badge": "Câu 8 - Cộng hai đơn thức đồng dạng",
        "source": "Tài liệu chuyên đề Toán 8 Câu 6 (Trang 77)",
        "question": "Kết quả của phép tính $3x^2y^3 + 4x^2y^3$ là:",
        "options": [
          "$7x^2y^3$",
          "$12x^2y^3$",
          "$7x^4y^6$",
          "$12x^4y^6$"
        ],
        "correctIndex": 0,
        "explanation": "Cộng các hệ số và giữ nguyên phần biến: $3x^2y^3 + 4x^2y^3 = (3 + 4)x^2y^3 = 7x^2y^3$."
      },
      {
        "id": "quiz-8.1.9",
        "badge": "Câu 9 - Trừ hai đơn thức đồng dạng",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 8c (Trang 3)",
        "question": "Kết quả của phép tính $3x^2yz - 4x^2yz$ là:",
        "options": [
          "$-x^2yz$",
          "$x^2yz$",
          "$-7x^2yz$",
          "$-1$"
        ],
        "correctIndex": 0,
        "explanation": "Trừ hệ số và giữ nguyên phần biến: $3x^2yz - 4x^2yz = (3 - 4)x^2yz = -1x^2yz = -x^2yz$."
      },
      {
        "id": "quiz-8.1.10",
        "badge": "Câu 10 - Tính giá trị của đơn thức",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 9 (Trang 3) & Bài 13a (Trang 6)",
        "question": "Giá trị của đơn thức $2x^2y$ tại $x = -1$ và $y = 2$ là:",
        "options": [
          "4",
          "-4",
          "8",
          "-8"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = -1$ và $y = 2$ vào đơn thức ta được: $2 \\cdot (-1)^2 \\cdot 2 = 2 \\cdot 1 \\cdot 2 = 4$."
      }
    ]
  },
  "t8-b2-da-thuc": {
    "id": "t8-b2-da-thuc",
    "lessonNumber": 2,
    "title": "Bài 2: Đa thức",
    "bookChapter": "Chương I: Đa thức",
    "scenarioTitle": "Tình huống: Tính diện tích cắt dán mỹ thuật và sơn khối gỗ",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm đa thức & Hạng tử",
        "points": [
          "Đa thức là một tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức đó.",
          "Mỗi đơn thức cũng được coi là một đa thức (chỉ có một hạng tử).",
          "Số 0 được gọi là đa thức không."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề Trang 1 & SGK Trang 11)",
        "exampleProblem": "Trong các biểu thức sau: $x^2 - 2xy + 3;\\ 5x^2y;\\ \\frac{2}{x - y}$, biểu thức nào là đa thức? Chỉ ra các hạng tử của đa thức $x^2 - 2xy + 3$.",
        "exampleSolution": "• Các biểu thức $x^2 - 2xy + 3$ và $5x^2y$ là các đa thức (biểu thức $\\frac{2}{x - y}$ có biến ở mẫu nên không phải là đa thức).\n• Đa thức $x^2 - 2xy + 3$ có ba hạng tử là: $x^2;\\ -2xy;\\ 3$."
      },
      {
        "index": "2",
        "title": "Đa thức thu gọn",
        "points": [
          "Đa thức thu gọn là đa thức không còn hai hạng tử nào đồng dạng.",
          "Cách thu gọn một đa thức:",
          "  Bước 1: Nhóm các hạng tử đồng dạng với nhau (áp dụng tính chất giao hoán, kết hợp).",
          "  Bước 2: Cộng, trừ các đơn thức đồng dạng trong từng nhóm."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề Trang 4 & SGK Trang 12)",
        "exampleProblem": "Thu gọn đa thức: $A = 4x^2y - 6x^3y^2 + 10x^2y - 4x^3y^2$.",
        "exampleSolution": "• Nhóm các hạng tử đồng dạng: $A = (4x^2y + 10x^2y) + (-6x^3y^2 - 4x^3y^2) = 14x^2y - 10x^3y^2$."
      },
      {
        "index": "3",
        "title": "Bậc của đa thức",
        "points": [
          "Bậc của một đa thức là bậc của hạng tử có bậc cao nhất trong dạng thu gọn của đa thức đó.",
          "Quy ước:",
          "  Một số thực khác 0 là đa thức bậc 0.",
          "  Đa thức không (số 0) là đa thức không có bậc.",
          "  Chú ý: Muốn tìm bậc của một đa thức, trước hết ta phải thu gọn đa thức đó."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 4 & SGK Trang 13)",
        "exampleProblem": "Tìm bậc của đa thức: $B = 3x^4y - 2x^2y^2 - 3x^4y + 5xy^3 - 1$.",
        "exampleSolution": "• Bước 1 (Thu gọn đa thức): $B = (3x^4y - 3x^4y) - 2x^2y^2 + 5xy^3 - 1 = -2x^2y^2 + 5xy^3 - 1$.\n• Bước 2 (Tìm bậc cao nhất): Hạng tử có bậc cao nhất là $4$ (của $-2x^2y^2$ và $5xy^3$). Vậy bậc của đa thức $B$ là $4$."
      },
      {
        "index": "4",
        "title": "Giá trị của đa thức",
        "points": [
          "Để tính giá trị của một đa thức tại những giá trị cho trước của các biến, ta thu gọn đa thức (nếu cần), rồi thay các giá trị cho trước vào đa thức đó và thực hiện phép tính."
        ],
        "exampleTitle": "Ví dụ 4 (Tài liệu chuyên đề Trang 4 & SGK Trang 13)",
        "exampleProblem": "Tính giá trị của đa thức $P = xy + x^2y^2 - x^4y$ tại $x = -1$ và $y = -1$.",
        "exampleSolution": "• Thay $x = -1$ và $y = -1$ vào đa thức $P$ ta được: $P = (-1)(-1) + (-1)^2(-1)^2 - (-1)^4(-1) = 1 + 1 - (-1) = 3$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-8.2.1",
        "badge": "Câu 1 - Nhận biết đa thức",
        "source": "Tài liệu chuyên đề Toán 8 Câu 7 (Trang 77)",
        "question": "Trong các biểu thức đại số sau, biểu thức nào là đa thức?",
        "options": [
          "$x^2 - 2xy + y^2$",
          "$\\frac{x + y}{x - y}$",
          "$\\frac{2}{xy}$",
          "$\\frac{3}{x^2 + 1} + y$"
        ],
        "correctIndex": 0,
        "explanation": "Đa thức là tổng của những đơn thức. Biểu thức $x^2 - 2xy + y^2$ là tổng các đơn thức $x^2, -2xy, y^2$. Các biểu thức còn lại đều chứa biến ở mẫu số nên không phải là đa thức."
      },
      {
        "id": "quiz-8.2.2",
        "badge": "Câu 2 - Đếm số lượng đa thức",
        "source": "Tài liệu chuyên đề Toán 8 Câu 7 (Trang 77)",
        "question": "Cho các biểu thức: $x^2 + y^2;\\ 2xy;\\ 3x - y;\\ \\frac{x + y}{x - y};\\ x^2y - z;\\ \\frac{2}{x}$. Có bao nhiêu đa thức trong các biểu thức trên?",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "correctIndex": 0,
        "explanation": "Có 4 đa thức là: $x^2 + y^2$ (đa thức hai hạng tử), $2xy$ (đơn thức cũng là đa thức), $3x - y$ (đa thức hai hạng tử), $x^2y - z$ (đa thức hai hạng tử). Hai biểu thức $\\frac{x + y}{x - y}$ và $\\frac{2}{x}$ có biến ở mẫu nên không phải đa thức."
      },
      {
        "id": "quiz-8.2.3",
        "badge": "Câu 3 - Xác định các hạng tử của đa thức",
        "source": "SGK Toán 8 Bài 1.9 (Trang 14)",
        "question": "Các hạng tử của đa thức $P = 2x^2y - 3xy + 5$ là:",
        "options": [
          "$2x^2y;\\ -3xy;\\ 5$",
          "$2x^2y;\\ 3xy;\\ 5$",
          "$2x^2y;\\ -3xy;\\ -5$",
          "$x^2y;\\ xy;\\ 5$"
        ],
        "correctIndex": 0,
        "explanation": "Đa thức $P = 2x^2y + (-3xy) + 5$ nên gồm ba hạng tử lần lượt là $2x^2y$, $-3xy$ và $5$ (chú ý kèm theo dấu của mỗi số hạng)."
      },
      {
        "id": "quiz-8.2.4",
        "badge": "Câu 4 - Thu gọn đa thức cơ bản",
        "source": "Tài liệu chuyên đề Toán 8 Câu 8 (Trang 77)",
        "question": "Thu gọn đa thức $A = 4x^2y - 6x^3y^2 + 10x^2y - 4x^3y^2$ ta được kết quả là:",
        "options": [
          "$14x^2y - 10x^3y^2$",
          "$14x^2y + 10x^3y^2$",
          "$6x^2y - 10x^3y^2$",
          "$6x^2y + 10x^3y^2$"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm các hạng tử đồng dạng: $A = (4x^2y + 10x^2y) + (-6x^3y^2 - 4x^3y^2) = 14x^2y - 10x^3y^2$."
      },
      {
        "id": "quiz-8.2.5",
        "badge": "Câu 5 - Thu gọn đa thức nhiều biến",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 12a (Trang 4)",
        "question": "Thu gọn đa thức $M = 2x^2 - 3xy + 5x^2 + 2xy - 1$ ta được:",
        "options": [
          "$7x^2 - xy - 1$",
          "$7x^2 + xy - 1$",
          "$3x^2 - xy - 1$",
          "$7x^2 - 5xy - 1$"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm các hạng tử đồng dạng: $M = (2x^2 + 5x^2) + (-3xy + 2xy) - 1 = 7x^2 - xy - 1$."
      },
      {
        "id": "quiz-8.2.6",
        "badge": "Câu 6 - Bậc của đa thức đã thu gọn",
        "source": "SGK Toán 8 Bài 1.10 (Trang 14)",
        "question": "Bậc của đa thức $Q = 2x^3y^2 - 5x^4 + 3x^2y - 7$ là:",
        "options": [
          "5",
          "4",
          "3",
          "6"
        ],
        "correctIndex": 0,
        "explanation": "Đa thức đã thu gọn. Xét bậc từng hạng tử: $2x^3y^2$ có bậc $3 + 2 = 5$; $-5x^4$ có bậc $4$; $3x^2y$ có bậc $2 + 1 = 3$; $-7$ có bậc $0$. Bậc cao nhất là 5, vậy bậc của đa thức là 5."
      },
      {
        "id": "quiz-8.2.7",
        "badge": "Câu 7 - Bậc của đa thức chưa thu gọn",
        "source": "SGK Toán 8 Trang 13 & Chuyên đề Ví dụ 13e (Trang 4)",
        "question": "Bậc của đa thức $B = 3x^4y - 2x^2y^2 - 3x^4y + 5xy^3 - 1$ là:",
        "options": [
          "4",
          "5",
          "3",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "Thu gọn đa thức trước: $B = (3x^4y - 3x^4y) - 2x^2y^2 + 5xy^3 - 1 = -2x^2y^2 + 5xy^3 - 1$. Hạng tử bậc cao nhất có bậc là $2 + 2 = 4$ và $1 + 3 = 4$. Do đó bậc của đa thức là 4."
      },
      {
        "id": "quiz-8.2.8",
        "badge": "Câu 8 - Tính giá trị của đa thức",
        "source": "Tài liệu chuyên đề Toán 8 Câu 10 (Trang 77)",
        "question": "Giá trị của đa thức $P = xy + x^2y^2 - x^4y$ tại $x = -1$ và $y = -1$ là:",
        "options": [
          "3",
          "1",
          "-1",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = -1$ và $y = -1$ vào biểu thức: $P = (-1)(-1) + (-1)^2(-1)^2 - (-1)^4(-1) = 1 + 1 - (-1) = 3$."
      },
      {
        "id": "quiz-8.2.9",
        "badge": "Câu 9 - Tính giá trị của đa thức tại phân số",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 11a (Trang 4)",
        "question": "Giá trị của đa thức $A = 2x^2y - xy^2$ tại $x = -2$ và $y = \\frac{1}{2}$ là:",
        "options": [
          "$\\frac{9}{2}$",
          "$\\frac{7}{2}$",
          "$-\\frac{9}{2}$",
          "4"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = -2$ và $y = \\frac{1}{2}$ vào đa thức:\n$A = 2 \\cdot (-2)^2 \\cdot \\frac{1}{2} - (-2) \\cdot \\left(\\frac{1}{2}\\right)^2 = 2 \\cdot 4 \\cdot \\frac{1}{2} - (-2) \\cdot \\frac{1}{4} = 4 + \\frac{1}{2} = \\frac{9}{2}$."
      },
      {
        "id": "quiz-8.2.10",
        "badge": "Câu 10 - Bài toán thực tế Mỹ thuật",
        "source": "Tài liệu chuyên đề Toán 8 Câu 12 (Trang 77)",
        "question": "Bạn Hạnh cắt dán hai hình vuông cạnh lần lượt là $x\\text{ (cm)}, y\\text{ (cm)}$ và một hình tam giác vuông có hai cạnh góc vuông là $x\\text{ (cm)}, y\\text{ (cm)}$. Đa thức biểu thị tổng diện tích của hai hình vuông và hình tam giác vuông đó là:",
        "options": [
          "$x^2 + y^2 + \\frac{1}{2}xy\\text{ (cm}^2\\text{)}$",
          "$x^2 + y^2 + xy\\text{ (cm}^2\\text{)}$",
          "$2x + 2y + xy\\text{ (cm}^2\\text{)}$",
          "$x^2 + y^2 + 2xy\\text{ (cm}^2\\text{)}$"
        ],
        "correctIndex": 0,
        "explanation": "Diện tích hai hình vuông lần lượt là $x^2$ và $y^2$. Diện tích hình tam giác vuông là $\\frac{1}{2}xy$. Tổng diện tích là: $x^2 + y^2 + \\frac{1}{2}xy\\text{ (cm}^2\\text{)}$."
      }
    ]
  },
  "t8-b3-phep-cong-tru-da-thuc": {
    "id": "t8-b3-phep-cong-tru-da-thuc",
    "lessonNumber": 3,
    "title": "Bài 3: Phép cộng và phép trừ đa thức",
    "bookChapter": "Chương I: Đa thức",
    "scenarioTitle": "Tình huống: Tính chu vi hình tam giác và lượng nước trong bể",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Quy tắc cộng hai đa thức nhiều biến",
        "points": [
          "Để cộng hai đa thức theo hàng ngang, ta thực hiện theo các bước:",
          "  Bước 1: Viết tổng hai đa thức trong dấu ngoặc: $A + B = (A) + (B)$.",
          "  Bước 2: Bỏ dấu ngoặc (giữ nguyên dấu của các hạng tử bên trong).",
          "  Bước 3: Nhóm các hạng tử đồng dạng với nhau (sử dụng tính chất giao hoán, kết hợp).",
          "  Bước 4: Cộng các hạng tử đồng dạng để thu gọn đa thức."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề Trang 8 & SGK Trang 15)",
        "exampleProblem": "Cho hai đa thức $A = 2x^2 + 3xy - y^2$ và $B = x^2 - xy + 2y^2$. Tính tổng $A + B$.",
        "exampleSolution": "• Bước 1 (Đặt tính và bỏ ngoặc): $A + B = (2x^2 + 3xy - y^2) + (x^2 - xy + 2y^2) = 2x^2 + 3xy - y^2 + x^2 - xy + 2y^2$.\n• Bước 2 (Nhóm và thu gọn): $A + B = (2x^2 + x^2) + (3xy - xy) + (-y^2 + 2y^2) = 3x^2 + 2xy + y^2$."
      },
      {
        "index": "2",
        "title": "Quy tắc trừ hai đa thức nhiều biến",
        "points": [
          "Để trừ hai đa thức $A - B$, ta thực hiện theo các bước:",
          "  Bước 1: Viết hiệu hai đa thức trong dấu ngoặc: $A - B = (A) - (B)$.",
          "  Bước 2: Bỏ dấu ngoặc có dấu \"-\" đằng trước: đổi dấu tất cả các hạng tử trong đa thức $B$ (dấu \"+\" thành \"-\", dấu \"-\" thành \"+\").",
          "  Bước 3: Nhóm các hạng tử đồng dạng với nhau rồi thu gọn."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề Trang 8 & SGK Trang 16)",
        "exampleProblem": "Cho hai đa thức $A = 2x^2 + 3xy - y^2$ và $B = x^2 - xy + 2y^2$. Tính hiệu $A - B$.",
        "exampleSolution": "• Bước 1 (Bỏ ngoặc đổi dấu): $A - B = (2x^2 + 3xy - y^2) - (x^2 - xy + 2y^2) = 2x^2 + 3xy - y^2 - x^2 + xy - 2y^2$.\n• Bước 2 (Nhóm và thu gọn): $A - B = (2x^2 - x^2) + (3xy + xy) + (-y^2 - 2y^2) = x^2 + 4xy - 3y^2$."
      },
      {
        "index": "3",
        "title": "Quy tắc chuyển vế tìm đa thức chưa biết",
        "points": [
          "Tương tự như đối với số, khi chuyển một đa thức từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu đa thức đó:",
          "  Nếu $M + B = A$ thì $M = A - B$.",
          "  Nếu $M - B = A$ thì $M = A + B$.",
          "  Nếu $B - M = A$ thì $M = B - A$."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 8 & SGK Trang 17)",
        "exampleProblem": "Tìm đa thức $M$ biết rằng: $M + (x^2 - 2xy) = 3x^2 + xy - 1$.",
        "exampleSolution": "• Bước 1 (Chuyển vế đổi dấu): $M = (3x^2 + xy - 1) - (x^2 - 2xy) = 3x^2 + xy - 1 - x^2 + 2xy$.\n• Bước 2 (Thu gọn đa thức): $M = (3x^2 - x^2) + (xy + 2xy) - 1 = 2x^2 + 3xy - 1$."
      },
      {
        "index": "4",
        "title": "Tính giá trị của tổng và hiệu đa thức",
        "points": [
          "Khi tính giá trị của tổng hoặc hiệu hai đa thức tại các giá trị cho trước của biến:",
          "  Trước hết ta nên thực hiện phép cộng (hay trừ) để thu gọn đa thức.",
          "  Sau đó mới thay các giá trị của biến vào biểu thức thu gọn để tính toán nhanh và chính xác nhất."
        ],
        "exampleTitle": "Ví dụ 4 (Tài liệu chuyên đề Trang 12 & SGK Trang 18)",
        "exampleProblem": "Cho $A = 2x^2y + 3xy^2$ và $B = -x^2y + xy^2$. Tính giá trị của $A + B$ tại $x = 2$ và $y = -1$.",
        "exampleSolution": "• Bước 1 (Thu gọn tổng đa thức): $A + B = (2x^2y - x^2y) + (3xy^2 + xy^2) = x^2y + 4xy^2$.\n• Bước 2 (Thay số tính giá trị): Thay $x = 2, y = -1$ vào biểu thức: $A + B = 2^2 \\cdot (-1) + 4 \\cdot 2 \\cdot (-1)^2 = -4 + 8 = 4$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-8.3.1",
        "badge": "Câu 1 - Cộng hai đa thức cơ bản",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 1a (Trang 8)",
        "question": "Cho hai đa thức $A = 2x + y$ và $B = x - y$. Kết quả của $A + B$ là:",
        "options": [
          "$3x$",
          "$3x + 2y$",
          "$x + 2y$",
          "$3x - 2y$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $A + B = (2x + y) + (x - y) = (2x + x) + (y - y) = 3x$."
      },
      {
        "id": "quiz-8.3.2",
        "badge": "Câu 2 - Trừ hai đa thức cơ bản",
        "source": "Tài liệu chuyên đề Toán 8 Ví dụ 1a (Trang 8)",
        "question": "Cho hai đa thức $A = 2x + y$ và $B = x - y$. Kết quả của $A - B$ là:",
        "options": [
          "$x + 2y$",
          "$x$",
          "$3x + 2y$",
          "$x - 2y$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $A - B = (2x + y) - (x - y) = 2x + y - x + y = (2x - x) + (y + y) = x + 2y$."
      },
      {
        "id": "quiz-8.3.3",
        "badge": "Câu 3 - Bỏ dấu ngoặc có dấu trừ",
        "source": "SGK Toán 8 Trang 15",
        "question": "Khi bỏ dấu ngoặc trong biểu thức $A - (2x^2 - 3xy + y^2)$, ta được biểu thức:",
        "options": [
          "$A - 2x^2 + 3xy - y^2$",
          "$A - 2x^2 - 3xy + y^2$",
          "$A - 2x^2 - 3xy - y^2$",
          "$A + 2x^2 - 3xy + y^2$"
        ],
        "correctIndex": 0,
        "explanation": "Khi bỏ dấu ngoặc có dấu \"-\" đằng trước, ta đổi dấu tất cả các số hạng bên trong ngoặc: $2x^2 \\to -2x^2$; $-3xy \\to +3xy$; $y^2 \\to -y^2$."
      },
      {
        "id": "quiz-8.3.4",
        "badge": "Câu 4 - Cộng hai đa thức bậc hai",
        "source": "Tài liệu chuyên đề Toán 8 Bài 3a (Trang 11)",
        "question": "Cho hai đa thức $M = x^2 + 2xy + y^2$ và $N = x^2 - 2xy + y^2$. Kết quả của $M + N$ là:",
        "options": [
          "$2x^2 + 2y^2$",
          "$2x^2 + 4xy + 2y^2$",
          "$2x^2 - 2y^2$",
          "$4xy$"
        ],
        "correctIndex": 0,
        "explanation": "Cộng hai đa thức: $M + N = (x^2 + x^2) + (2xy - 2xy) + (y^2 + y^2) = 2x^2 + 2y^2$."
      },
      {
        "id": "quiz-8.3.5",
        "badge": "Câu 5 - Trừ hai đa thức bậc hai",
        "source": "Tài liệu chuyên đề Toán 8 Bài 3a (Trang 11)",
        "question": "Cho hai đa thức $M = x^2 + 2xy + y^2$ và $N = x^2 - 2xy + y^2$. Kết quả của $M - N$ là:",
        "options": [
          "$4xy$",
          "$2x^2 + 2y^2$",
          "$-4xy$",
          "$0$"
        ],
        "correctIndex": 0,
        "explanation": "Bỏ ngoặc đổi dấu: $M - N = (x^2 + 2xy + y^2) - (x^2 - 2xy + y^2) = x^2 + 2xy + y^2 - x^2 + 2xy - y^2 = 4xy$."
      },
      {
        "id": "quiz-8.3.6",
        "badge": "Câu 6 - Cộng hai đa thức chứa bậc 3",
        "source": "SGK Toán 8 Bài 1.14 (Trang 18)",
        "question": "Cho $A = x^3 - 3x^2y + 2$ và $B = 3x^2y - x^3 + 5$. Kết quả của $A + B$ là:",
        "options": [
          "$7$",
          "$2x^3 + 7$",
          "$-6x^2y + 7$",
          "$2x^3 - 6x^2y + 7$"
        ],
        "correctIndex": 0,
        "explanation": "Nhóm các hạng tử đối nhau: $A + B = (x^3 - x^3) + (-3x^2y + 3x^2y) + (2 + 5) = 7$."
      },
      {
        "id": "quiz-8.3.7",
        "badge": "Câu 7 - Trừ hai đa thức nhiều hạng tử",
        "source": "Tài liệu chuyên đề Toán 8 Câu 14 (Trang 78)",
        "question": "Cho $A = 3x^2y - 2xy^2 + xy$ và $B = 4xy^2 - 3x^2y + 2xy$. Kết quả của $A - B$ là:",
        "options": [
          "$6x^2y - 6xy^2 - xy$",
          "$-6xy^2 - xy$",
          "$6x^2y + 2xy^2 + 3xy$",
          "$6x^2y - 2xy^2 - xy$"
        ],
        "correctIndex": 0,
        "explanation": "Bỏ ngoặc đổi dấu rồi nhóm các hạng tử đồng dạng:\n$A - B = (3x^2y - (-3x^2y)) + (-2xy^2 - 4xy^2) + (xy - 2xy) = 6x^2y - 6xy^2 - xy$."
      },
      {
        "id": "quiz-8.3.8",
        "badge": "Câu 8 - Tìm đa thức M trong phép cộng",
        "source": "Tài liệu chuyên đề Toán 8 Bài 12a (Trang 12)",
        "question": "Tìm đa thức $M$ biết rằng: $M + (x^2 - 3xy) = 2x^2 - 3xy + y^2$:",
        "options": [
          "$M = x^2 + y^2$",
          "$M = 3x^2 - 6xy + y^2$",
          "$M = x^2 - 6xy + y^2$",
          "$M = x^2 - y^2$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển vế đổi dấu: $M = (2x^2 - 3xy + y^2) - (x^2 - 3xy) = 2x^2 - 3xy + y^2 - x^2 + 3xy = x^2 + y^2$."
      },
      {
        "id": "quiz-8.3.9",
        "badge": "Câu 9 - Tìm đa thức B trong phép trừ",
        "source": "Tài liệu chuyên đề Toán 8 Bài 11b (Trang 12)",
        "question": "Tìm đa thức $B$ biết rằng: $(2x^2 - y^2) - B = x^2 + 2y^2$:",
        "options": [
          "$B = x^2 - 3y^2$",
          "$B = 3x^2 + y^2$",
          "$B = x^2 + y^2$",
          "$B = -x^2 + 3y^2$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng quy tắc tìm số trừ: $B = (2x^2 - y^2) - (x^2 + 2y^2) = 2x^2 - y^2 - x^2 - 2y^2 = x^2 - 3y^2$."
      },
      {
        "id": "quiz-8.3.10",
        "badge": "Câu 10 - Bài toán thực tế chu vi hình tam giác",
        "source": "SGK Toán 8 Bài 1.17 (Trang 18)",
        "question": "Một hình tam giác có độ dài ba cạnh lần lượt là $x + 2y\\text{ (cm)}$, $2x - y\\text{ (cm)}$ và $3x + 4\\text{ (cm)}$. Đa thức biểu thị chu vi của tam giác đó là:",
        "options": [
          "$6x + y + 4\\text{ (cm)}$",
          "$6x - y + 4\\text{ (cm)}$",
          "$5x + y + 4\\text{ (cm)}$",
          "$6x + 3y + 4\\text{ (cm)}$"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi hình tam giác bằng tổng độ dài ba cạnh:\n$C = (x + 2y) + (2x - y) + (3x + 4) = (x + 2x + 3x) + (2y - y) + 4 = 6x + y + 4\\text{ (cm)}$."
      }
    ]
  },
  // BÀI 4: PHÉP NHÂN ĐA THỨC
  "t8-b4-phep-nhan-da-thuc": {
    "id": "t8-b4-phep-nhan-da-thuc",
    "lessonNumber": 4,
    "title": "Bài 4: Phép nhân đa thức",
    "bookChapter": "Chương I: Đa thức (SGK Toán 8 KNTT - Tập 1)",
    "scenarioTitle": "Tình huống: Tính diện tích mảnh vườn mở rộng và thể tích khối hộp",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn An",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, gia đình em có một mảnh vườn hình chữ nhật ban đầu có chiều dài x mét và chiều rộng y mét. Nay bố em muốn mở rộng: tăng chiều dài thêm 3 mét và tăng chiều rộng thêm 2 mét. Làm thế nào để tính diện tích mảnh vườn mới bằng một đa thức ạ?",
        "visualGraphic": "box",
        "mathNote": "S = (x + 3)(y + 2)"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào An! Đó chính là ứng dụng tuyệt vời của phép nhân đa thức! Ta chỉ việc nhân mỗi hạng tử của đa thức thứ nhất với từng hạng tử của đa thức thứ hai: S = (x + 3)(y + 2) = xy + 2x + 3y + 6. Bài học này sẽ giúp các em nắm vững toàn bộ quy tắc nhân đơn thức với đa thức và nhân đa thức với đa thức một cách dễ dàng và chuẩn xác!",
        "visualGraphic": "graph",
        "mathNote": "(A + B)(C + D) = AC + AD + BC + BD"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Nhân đơn thức với đa thức",
        "points": [
          "Quy tắc: Muốn nhân một đơn thức với một đa thức, ta nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích với nhau.",
          "Công thức tổng quát: $A(B + C) = AB + AC$.",
          "Chú ý dấu của các hạng tử:",
          "  $(+) \\cdot (+) = (+)$",
          "  $(+) \\cdot (-) = (-)$",
          "  $(-) \\cdot (-) = (+)$",
          "Khi nhân các biến, áp dụng quy tắc nhân hai lũy thừa cùng cơ số: $x^m \\cdot x^n = x^{m+n}$."
        ],
        "formula": "A(B + C) = AB + AC",
        "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 19)",
        "exampleProblem": "Thực hiện phép tính: a) $2x(x^2 - 3x + 1)$;  b) $(-3xy)(2x^2y - xy^2 + 4)$.",
        "exampleSolution": "a) Nhân $2x$ với từng hạng tử:\n$2x(x^2 - 3x + 1) = 2x \\cdot x^2 + 2x \\cdot (-3x) + 2x \\cdot 1 = 2x^3 - 6x^2 + 2x$.\nb) Nhân $(-3xy)$ với từng hạng tử:\n$(-3xy)(2x^2y - xy^2 + 4) = (-3xy) \\cdot (2x^2y) + (-3xy) \\cdot (-xy^2) + (-3xy) \\cdot 4 = -6x^3y^2 + 3x^2y^3 - 12xy$."
      },
      {
        "index": "2",
        "title": "Nhân đa thức với đa thức",
        "points": [
          "Quy tắc: Muốn nhân một đa thức với một đa thức, ta nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích với nhau.",
          "Công thức tổng quát: $(A + B)(C + D) = AC + AD + BC + BD$.",
          "Nếu đa thức có nhiều hơn hai hạng tử, ta thực hiện tương tự theo quy tắc phân phối.",
          "Sau khi nhân, luôn chú ý thu gọn các hạng tử đồng dạng để đa thức kết quả đạt dạng tối giản."
        ],
        "formula": "(A + B)(C + D) = AC + AD + BC + BD",
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 20)",
        "exampleProblem": "Thực hiện phép tính: a) $(x + 3)(x + 2)$;  b) $(2x - 1)(x^2 - 3x + 2)$.",
        "exampleSolution": "a) $(x + 3)(x + 2) = x \\cdot x + x \\cdot 2 + 3 \\cdot x + 3 \\cdot 2 = x^2 + 2x + 3x + 6 = x^2 + 5x + 6$.\nb) Nhân từng hạng tử của $(2x - 1)$ với đa thức sau:\n$(2x - 1)(x^2 - 3x + 2) = 2x(x^2 - 3x + 2) - 1(x^2 - 3x + 2)$\n$= 2x^3 - 6x^2 + 4x - x^2 + 3x - 2 = 2x^3 - 7x^2 + 7x - 2$."
      },
      {
        "index": "3",
        "title": "Rút gọn biểu thức và tính giá trị",
        "points": [
          "Để tính giá trị của biểu thức chứa phép nhân đa thức, thông thường ta nên rút gọn biểu thức trước rồi mới thay giá trị của biến vào.",
          "Dạng toán chứng minh giá trị biểu thức không phụ thuộc vào biến: Thực hiện phép nhân, thu gọn các hạng tử đồng dạng, nếu kết quả cuối cùng là một hằng số thì biểu thức không phụ thuộc vào biến.",
          "Dạng toán tìm $x$: Rút gọn vế trái để triệt tiêu các hạng tử bậc hai (nếu có), đưa về dạng phương trình bậc nhất quen thuộc $ax = b$."
        ],
        "formula": "P(x) = C \\quad (C \\text{ là hằng số})",
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 21)",
        "exampleProblem": "Rút gọn rồi tính giá trị của biểu thức: $A = (x - 2)(x + 2) - x(x - 3)$ tại $x = 4$.",
        "exampleSolution": "Thực hiện phép nhân và rút gọn:\n$A = (x^2 + 2x - 2x - 4) - (x^2 - 3x) = x^2 - 4 - x^2 + 3x = 3x - 4$.\nThay $x = 4$ vào biểu thức đã rút gọn: $A = 3 \\cdot 4 - 4 = 12 - 4 = 8$."
      },
      {
        "index": "4",
        "title": "Ứng dụng hình học và bài toán thực tế",
        "points": [
          "Tính diện tích hình chữ nhật: $S = a \\cdot b$, với $a, b$ là các đa thức biểu thị chiều dài và chiều rộng.",
          "Tính thể tích hình hộp chữ nhật: $V = a \\cdot b \\cdot c$, nhân ba kích thước dài, rộng và cao.",
          "Tính diện tích hình tam giác, hình thang có độ dài các cạnh hoặc chiều cao chứa biến."
        ],
        "formula": "S = a \\cdot b; \\quad V = a \\cdot b \\cdot c",
        "exampleTitle": "Ví dụ 4 (SGK Toán 8 KNTT Bài 1.25 Trang 21)",
        "exampleProblem": "Một tấm bìa hình chữ nhật có kích thước ban đầu là $x\\text{ (cm)}$ và $y\\text{ (cm)}$. Người ta cắt bớt mỗi chiều $2\\text{ (cm)}$. Viết đa thức biểu thị diện tích phần bìa còn lại.",
        "exampleSolution": "Kích thước của phần bìa còn lại là $(x - 2)\\text{ (cm)}$ và $(y - 2)\\text{ (cm)}$.\nDiện tích phần bìa còn lại là:\n$S = (x - 2)(y - 2) = x(y - 2) - 2(y - 2) = xy - 2x - 2y + 4\\text{ (cm}^2\\text{)}$."
      }
    ],
    "youtubeVideoId": "t8_b4_video",
    "youtubeVideoTitle": "Bài Giảng Video: Bài 4 - Phép nhân đa thức - Toán 8 KNTT",
    "youtubeVideos": [
      {
        "id": "t8_b4_video1",
        "title": "Tiết 1: Quy tắc nhân đơn thức với đa thức và các dạng toán cơ bản"
      },
      {
        "id": "t8_b4_video2",
        "title": "Tiết 2: Quy tắc nhân đa thức với đa thức và bài toán thực tế"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.4.1",
        "timeSeconds": 150,
        "timeLabel": "02:30",
        "title": "Ví dụ 1: Nhân đơn thức với đa thức",
        "question": "Kết quả của phép nhân $3x(2x - 5)$ là:",
        "options": [
          "$6x^2 - 15x$",
          "$6x^2 - 5$",
          "$6x - 15$",
          "$5x^2 - 15x$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân $3x$ với từng hạng tử: $3x \\cdot 2x + 3x \\cdot (-5) = 6x^2 - 15x$."
      },
      {
        "id": "vq-8.4.2",
        "timeSeconds": 360,
        "timeLabel": "06:00",
        "title": "Ví dụ 2: Quy tắc dấu khi nhân đơn thức âm",
        "question": "Kết quả của phép tính $(-2x)(x^2 - 3)$ là:",
        "options": [
          "$-2x^3 + 6x$",
          "$-2x^3 - 6x$",
          "$2x^3 + 6x$",
          "$-2x^3 - 3$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng quy tắc dấu: $(-2x) \\cdot x^2 + (-2x) \\cdot (-3) = -2x^3 + 6x$."
      },
      {
        "id": "vq-8.4.3",
        "timeSeconds": 180,
        "timeLabel": "03:00",
        "title": "Ví dụ 3: Nhân hai nhị thức bậc nhất",
        "question": "Khai triển của tích $(x + 2)(x + 5)$ là:",
        "options": [
          "$x^2 + 7x + 10$",
          "$x^2 + 10x + 7$",
          "$x^2 + 7x + 7$",
          "$x^2 + 10$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 2)(x + 5) = x^2 + 5x + 2x + 10 = x^2 + 7x + 10$."
      },
      {
        "id": "vq-8.4.4",
        "timeSeconds": 420,
        "timeLabel": "07:00",
        "title": "Ví dụ 4: Rút gọn biểu thức tích",
        "question": "Rút gọn biểu thức $P = x(x - 4) - x^2$ ta được:",
        "options": [
          "$-4x$",
          "$4x$",
          "$2x^2 - 4x$",
          "$-4$"
        ],
        "correctIndex": 0,
        "explanation": "Khai triển và trừ: $P = x^2 - 4x - x^2 = -4x$."
      }
    ],
    "tips": [
      "Nhân đơn thức với đa thức: Luôn nhớ nhân cả phần hệ số và cộng các số mũ của biến cùng loại: $x^m \\cdot x^n = x^{m+n}$.",
      "Nhân đa thức với đa thức: Viết lần lượt từng tích theo thứ tự để không bị sót hạng tử. Đa thức có $m$ hạng tử nhân với đa thức có $n$ hạng tử sẽ sinh ra $m \\cdot n$ tích ban đầu trước khi thu gọn.",
      "Quy tắc dấu đằng trước: Khi gặp dấu trừ trước tích đa thức như $-(x - 1)(x + 2)$, hãy để toàn bộ kết quả nhân trong dấu ngoặc rồi mới tiến hành đổi dấu tất cả các hạng tử.",
      "Mẹo kiểm tra nhanh khi nhân $(x + a)(x + b)$: Kết quả luôn có dạng $x^2 + (a + b)x + ab$ (hệ số bậc nhất là tổng, hệ số tự do là tích)."
    ],
    "traps": [
      "Bẫy nhân số mũ thay vì cộng số mũ: Viết $x^2 \\cdot x^3 = x^6$ là SAI, công thức đúng là $x^2 \\cdot x^3 = x^{2+3} = x^5$.",
      "Bẫy nhân quên hạng tử tự do: Khi nhân $2x(x + 1)$, nhiều học sinh chỉ nhân $2x \\cdot x = 2x^2$ mà quên $2x \\cdot 1 = 2x$, dẫn đến kết quả sai $2x^2 + 1$.",
      "Bẫy sai dấu khi nhân số âm: Khi nhân $(-3x)(2x - 4)$, học sinh dễ nhầm $(-3x) \\cdot (-4) = -12x$ thay vì $+12x$.",
      "Bẫy quên thu gọn các hạng tử đồng dạng: Sau khi nhân đa thức với đa thức, nếu không thu gọn $2x + 3x = 5x$ thì biểu thức chưa đạt dạng chuẩn tối giản."
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.4.1",
        "badge": "Câu 1 (NB) - Quy tắc nhân đơn thức với đa thức",
        "source": "SGK Toán 8 KNTT Trang 19",
        "question": "Công thức nào sau đây biểu diễn đúng quy tắc nhân đơn thức với đa thức?",
        "options": [
          "$A(B + C) = AB + AC$",
          "$A(B + C) = AB + C$",
          "$A(B + C) = A + BC$",
          "$A(B + C) = AB \\cdot AC$"
        ],
        "correctIndex": 0,
        "explanation": "Muốn nhân một đơn thức với một đa thức, ta nhân đơn thức với từng hạng tử của đa thức: $A(B + C) = AB + AC$."
      },
      {
        "id": "quiz-8.4.2",
        "badge": "Câu 2 (NB) - Nhân đơn thức bậc một với nhị thức",
        "source": "SGK Toán 8 KNTT Trang 19",
        "question": "Tích của đơn thức $x$ và đa thức $x + 1$ là:",
        "options": [
          "$x^2 + x$",
          "$x^2 + 1$",
          "$2x + 1$",
          "$x^2$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $x(x + 1) = x \\cdot x + x \\cdot 1 = x^2 + x$."
      },
      {
        "id": "quiz-8.4.3",
        "badge": "Câu 3 (NB) - Nhân đơn thức có hệ số",
        "source": "SGK Toán 8 KNTT Trang 19",
        "question": "Kết quả của phép nhân $2x(3x - 1)$ là:",
        "options": [
          "$6x^2 - 2x$",
          "$6x^2 - 1$",
          "$5x^2 - 2x$",
          "$6x - 2$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân $2x$ với từng hạng tử: $2x \\cdot 3x + 2x \\cdot (-1) = 6x^2 - 2x$."
      },
      {
        "id": "quiz-8.4.4",
        "badge": "Câu 4 (NB) - Nhân đơn thức chứa dấu trừ",
        "source": "SGK Toán 8 KNTT Trang 19",
        "question": "Kết quả của phép nhân $-x(2x - 3)$ là:",
        "options": [
          "$-2x^2 + 3x$",
          "$-2x^2 - 3x$",
          "$2x^2 - 3x$",
          "$-2x + 3$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $(-x) \\cdot 2x + (-x) \\cdot (-3) = -2x^2 + 3x$."
      },
      {
        "id": "quiz-8.4.5",
        "badge": "Câu 5 (NB) - Nhân đơn thức hai biến",
        "source": "SGK Toán 8 KNTT Trang 20",
        "question": "Tích của đơn thức $xy$ với đa thức $x - y$ là:",
        "options": [
          "$x^2y - xy^2$",
          "$x^2y - y$",
          "$xy - xy^2$",
          "$x^2 - y^2$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $xy \\cdot x - xy \\cdot y = x^2y - xy^2$."
      },
      {
        "id": "quiz-8.4.6",
        "badge": "Câu 6 (NB) - Nhân hai đơn thức",
        "source": "SGK Toán 8 KNTT Trang 19",
        "question": "Tích của hai đơn thức $2x^2$ và $-3x^3$ bằng:",
        "options": [
          "$-6x^5$",
          "$-6x^6$",
          "$6x^5$",
          "$-x^5$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân hệ số với hệ số, biến với biến: $2 \\cdot (-3) \\cdot (x^2 \\cdot x^3) = -6x^{2+3} = -6x^5$."
      },
      {
        "id": "quiz-8.4.7",
        "badge": "Câu 7 (NB) - Khai triển tích hai nhị thức cộng",
        "source": "SGK Toán 8 KNTT Trang 20",
        "question": "Khai triển tích $(x + 1)(x + 2)$ ta được:",
        "options": [
          "$x^2 + 3x + 2$",
          "$x^2 + 2x + 2$",
          "$x^2 + 3x + 3$",
          "$x^2 + 2$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 1)(x + 2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$."
      },
      {
        "id": "quiz-8.4.8",
        "badge": "Câu 8 (NB) - Tích tổng và hiệu",
        "source": "SGK Toán 8 KNTT Trang 20",
        "question": "Khai triển tích $(x - 1)(x + 1)$ ta được:",
        "options": [
          "$x^2 - 1$",
          "$x^2 + 1$",
          "$x^2 - 2x + 1$",
          "$x^2 - 2$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 1)(x + 1) = x^2 + x - x - 1 = x^2 - 1$."
      },
      {
        "id": "quiz-8.4.9",
        "badge": "Câu 9 (NB) - Tích hai nhị thức chứa dấu trừ",
        "source": "SGK Toán 8 KNTT Trang 20",
        "question": "Khai triển tích $(x - 2)(x - 3)$ ta được:",
        "options": [
          "$x^2 - 5x + 6$",
          "$x^2 - 5x - 6$",
          "$x^2 + 5x + 6$",
          "$x^2 - 6$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 2)(x - 3) = x^2 - 3x - 2x + 6 = x^2 - 5x + 6$."
      },
      {
        "id": "quiz-8.4.10",
        "badge": "Câu 10 (NB) - Bậc của đa thức tích",
        "source": "SGK Toán 8 KNTT Trang 20",
        "question": "Bậc của đa thức thu gọn sau khi nhân $2x^2(3x^3 - x + 1)$ là:",
        "options": [
          "$5$",
          "$6$",
          "$3$",
          "$4$"
        ],
        "correctIndex": 0,
        "explanation": "Hạng tử có bậc cao nhất là $2x^2 \\cdot 3x^3 = 6x^5$, do đó đa thức tích có bậc là $5$."
      },
      {
        "id": "quiz-8.4.11",
        "badge": "Câu 11 (TH) - Nhân đơn thức với đa thức nhiều biến",
        "source": "SGK Toán 8 KNTT Trang 20",
        "question": "Thực hiện phép tính $2xy(x^2 - 3xy + y^2)$ ta được kết quả là:",
        "options": [
          "$2x^3y - 6x^2y^2 + 2xy^3$",
          "$2x^3y - 3x^2y^2 + 2xy^3$",
          "$2x^3y - 6xy + 2xy^3$",
          "$2x^2y - 6x^2y^2 + 2xy^2$"
        ],
        "correctIndex": 0,
        "explanation": "$2xy \\cdot x^2 - 2xy \\cdot 3xy + 2xy \\cdot y^2 = 2x^3y - 6x^2y^2 + 2xy^3$."
      },
      {
        "id": "quiz-8.4.12",
        "badge": "Câu 12 (TH) - Nhân hai đa thức có hệ số",
        "source": "SGK Toán 8 KNTT Trang 21",
        "question": "Khai triển và thu gọn đa thức $(2x - 1)(x + 3)$ ta được:",
        "options": [
          "$2x^2 + 5x - 3$",
          "$2x^2 + 6x - 3$",
          "$2x^2 - 5x - 3$",
          "$2x^2 + 5x + 3$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x - 1)(x + 3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3$."
      },
      {
        "id": "quiz-8.4.13",
        "badge": "Câu 13 (TH) - Nhân nhị thức với tam thức",
        "source": "SGK Toán 8 KNTT Trang 21",
        "question": "Khai triển và thu gọn biểu thức $(x - y)(x^2 + xy + y^2)$ ta được:",
        "options": [
          "$x^3 - y^3$",
          "$x^3 + y^3$",
          "$x^3 - 2x^2y + y^3$",
          "$x^3 + 2xy^2 - y^3$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - y)(x^2 + xy + y^2) = x(x^2 + xy + y^2) - y(x^2 + xy + y^2) = x^3 + x^2y + xy^2 - x^2y - xy^2 - y^3 = x^3 - y^3$."
      },
      {
        "id": "quiz-8.4.14",
        "badge": "Câu 14 (TH) - Rút gọn biểu thức chứa phép nhân",
        "source": "SGK Toán 8 KNTT Trang 21",
        "question": "Rút gọn biểu thức $M = x(x - 2) - x^2$ ta được:",
        "options": [
          "$-2x$",
          "$2x$",
          "$x^2 - 2x$",
          "$-2$"
        ],
        "correctIndex": 0,
        "explanation": "$M = x^2 - 2x - x^2 = -2x$."
      },
      {
        "id": "quiz-8.4.15",
        "badge": "Câu 15 (TH) - Tính giá trị của biểu thức sau khi rút gọn",
        "source": "SGK Toán 8 KNTT Trang 21",
        "question": "Giá trị của biểu thức $A = x(x - y) + y(x + y)$ tại $x = 2$ và $y = 3$ là:",
        "options": [
          "$13$",
          "$5$",
          "$-5$",
          "$25$"
        ],
        "correctIndex": 0,
        "explanation": "Rút gọn biểu thức trước: $A = x^2 - xy + xy + y^2 = x^2 + y^2$. Thay $x = 2, y = 3$: $A = 2^2 + 3^2 = 4 + 9 = 13$."
      },
      {
        "id": "quiz-8.4.16",
        "badge": "Câu 16 (TH) - Tìm x bằng phép nhân đơn thức",
        "source": "SGK Toán 8 KNTT Trang 21",
        "question": "Tìm giá trị của $x$ thỏa mãn phương trình: $x(x + 2) - x^2 = 6$:",
        "options": [
          "$x = 3$",
          "$x = -3$",
          "$x = 6$",
          "$x = 2$"
        ],
        "correctIndex": 0,
        "explanation": "Khai triển vế trái: $x^2 + 2x - x^2 = 6 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."
      },
      {
        "id": "quiz-8.4.17",
        "badge": "Câu 17 (VD) - Rút gọn biểu thức tổng hợp",
        "source": "SGK Toán 8 KNTT Bài 1.24 Trang 21",
        "question": "Rút gọn biểu thức $P = (x - 3)(x + 3) - (x - 1)(x + 2)$ ta được:",
        "options": [
          "$-x - 7$",
          "$-x - 11$",
          "$x - 7$",
          "$-x + 7$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $(x - 3)(x + 3) = x^2 - 9$ và $(x - 1)(x + 2) = x^2 + 2x - x - 2 = x^2 + x - 2$.\nDo đó $P = (x^2 - 9) - (x^2 + x - 2) = x^2 - 9 - x^2 - x + 2 = -x - 7$."
      },
      {
        "id": "quiz-8.4.18",
        "badge": "Câu 18 (VD) - Chứng minh biểu thức không phụ thuộc biến",
        "source": "SGK Toán 8 KNTT Bài 1.26 Trang 21",
        "question": "Biểu thức $M = (x - 5)(2x + 3) - 2x(x - 3) + x + 7$ có giá trị bằng:",
        "options": [
          "$-8$",
          "$8$",
          "$-15$",
          "$0$"
        ],
        "correctIndex": 0,
        "explanation": "Khai triển: $(x - 5)(2x + 3) = 2x^2 + 3x - 10x - 15 = 2x^2 - 7x - 15$.\n$-2x(x - 3) = -2x^2 + 6x$.\nCộng lại: $M = (2x^2 - 7x - 15) - 2x^2 + 6x + x + 7 = (2x^2 - 2x^2) + (-7x + 6x + x) + (-15 + 7) = -8$."
      },
      {
        "id": "quiz-8.4.19",
        "badge": "Câu 19 (VD - Thực tế) - Diện tích mảnh vườn mở rộng",
        "source": "SGK Toán 8 KNTT - Bài toán thực tế hình chữ nhật",
        "question": "Một mảnh vườn hình chữ nhật ban đầu có chiều dài là $x\\text{ (m)}$ và chiều rộng là $y\\text{ (m)}$. Người ta tăng chiều dài thêm $3\\text{ m}$ và tăng chiều rộng thêm $2\\text{ m}$. Đa thức biểu thị diện tích mảnh vườn sau khi mở rộng là:",
        "options": [
          "$xy + 2x + 3y + 6\\text{ (m}^2\\text{)}$",
          "$xy + 3x + 2y + 6\\text{ (m}^2\\text{)}$",
          "$xy + 5\\text{ (m}^2\\text{)}$",
          "$xy + 6\\text{ (m}^2\\text{)}$"
        ],
        "correctIndex": 0,
        "explanation": "Kích thước mới của mảnh vườn là $(x + 3)\\text{ (m)}$ và $(y + 2)\\text{ (m)}$.\nDiện tích mới là: $S = (x + 3)(y + 2) = x(y + 2) + 3(y + 2) = xy + 2x + 3y + 6\\text{ (m}^2\\text{)}$."
      },
      {
        "id": "quiz-8.4.20",
        "badge": "Câu 20 (VD - Thực tế) - Thể tích khối hộp chữ nhật",
        "source": "Toán 8 KNTT - Ứng dụng hình học không gian",
        "question": "Một khối hộp chữ nhật có ba kích thước lần lượt là $x\\text{ (cm)}$, $x + 2\\text{ (cm)}$ và $x + 4\\text{ (cm)}$. Đa thức biểu thị thể tích của khối hộp đó là:",
        "options": [
          "$x^3 + 6x^2 + 8x\\text{ (cm}^3\\text{)}$",
          "$x^3 + 8x^2 + 6x\\text{ (cm}^3\\text{)}$",
          "$x^3 + 6x + 8\\text{ (cm}^3\\text{)}$",
          "$3x + 6\\text{ (cm}^3\\text{)}$"
        ],
        "correctIndex": 0,
        "explanation": "Thể tích khối hộp chữ nhật bằng tích ba kích thước:\n$V = x(x + 2)(x + 4) = x(x^2 + 4x + 2x + 8) = x(x^2 + 6x + 8) = x^3 + 6x^2 + 8x\\text{ (cm}^3\\text{)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.4.1",
        "badge": "Câu 1 (Đ/S) - Nhân đơn thức với đa thức",
        "prompt": "Cho đơn thức $A = 2x^2$ và đa thức $B = 3x^2 - 4x + 1$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Tích của $A$ và hạng tử bậc hai của $B$ là $6x^4$.",
            "correctAnswer": true,
            "explanation": "Đúng, $2x^2 \\cdot 3x^2 = 6x^{2+2} = 6x^4$."
          },
          {
            "id": "b",
            "text": "Tích của $A$ và hạng tử bậc nhất của $B$ là $8x^3$.",
            "correctAnswer": false,
            "explanation": "Sai, hạng tử bậc nhất của $B$ là $-4x$, do đó tích là $2x^2 \\cdot (-4x) = -8x^3$."
          },
          {
            "id": "c",
            "text": "Kết quả của phép nhân $A \\cdot B$ là $6x^4 - 8x^3 + 2x^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, nhân $2x^2$ với từng hạng tử của $B$ ta được $6x^4 - 8x^3 + 2x^2$."
          },
          {
            "id": "d",
            "text": "Bậc của đa thức tích $A \\cdot B$ bằng $6$.",
            "correctAnswer": false,
            "explanation": "Sai, hạng tử có bậc cao nhất là $6x^4$ nên bậc của đa thức tích là $4$."
          }
        ]
      },
      {
        "id": "tf-8.4.2",
        "badge": "Câu 2 (Đ/S) - Quy tắc nhân đa thức với đa thức",
        "prompt": "Xét tính đúng/sai của các công thức và phép tính sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khẳng định $(A + B)(C + D) = AC + BD$ là đúng.",
            "correctAnswer": false,
            "explanation": "Sai, công thức đầy đủ phải là $(A + B)(C + D) = AC + AD + BC + BD$."
          },
          {
            "id": "b",
            "text": "Khai triển $(x - 4)(x + 4)$ ta được kết quả $x^2 - 16$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x - 4)(x + 4) = x^2 + 4x - 4x - 16 = x^2 - 16$."
          },
          {
            "id": "c",
            "text": "Tích của $(x + 2)$ và $(x - 3)$ là $x^2 - x - 6$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x^2 - 3x + 2x - 6 = x^2 - x - 6$."
          },
          {
            "id": "d",
            "text": "Hệ số tự do của tích $(2x + 3)(3x - 5)$ bằng $15$.",
            "correctAnswer": false,
            "explanation": "Sai, hệ số tự do là $3 \\cdot (-5) = -15$."
          }
        ]
      },
      {
        "id": "tf-8.4.3",
        "badge": "Câu 3 (Đ/S) - Rút gọn và tính giá trị biểu thức",
        "prompt": "Cho biểu thức $P = (x - 2)(x^2 + 2x + 4) - x^2(x - 1)$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Khai triển tích $(x - 2)(x^2 + 2x + 4)$ ta được kết quả $x^3 - 8$.",
            "correctAnswer": true,
            "explanation": "Đúng, nhân ra và triệt tiêu các hạng tử đối nhau ta được $x^3 - 8$ (đây chính là hằng đẳng thức hiệu hai lập phương)."
          },
          {
            "id": "b",
            "text": "Khai triển $-x^2(x - 1)$ ta được $-x^3 - x^2$.",
            "correctAnswer": false,
            "explanation": "Sai, $(-x^2) \\cdot x + (-x^2) \\cdot (-1) = -x^3 + x^2$."
          },
          {
            "id": "c",
            "text": "Biểu thức $P$ sau khi thu gọn bằng $x^2 - 8$.",
            "correctAnswer": true,
            "explanation": "Đúng, $P = (x^3 - 8) - x^3 + x^2 = x^2 - 8$."
          },
          {
            "id": "d",
            "text": "Tại $x = -3$, giá trị của biểu thức $P$ bằng $1$.",
            "correctAnswer": true,
            "explanation": "Đúng, thay $x = -3$: $P = (-3)^2 - 8 = 9 - 8 = 1$."
          }
        ]
      },
      {
        "id": "tf-8.4.4",
        "badge": "Câu 4 (Đ/S) - Bài toán thực tế diện tích sân chơi",
        "prompt": "Một sân chơi hình chữ nhật có chiều dài là $2x + 5\\text{ (m)}$ và chiều rộng là $x + 2\\text{ (m)}$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Đa thức biểu thị diện tích sân chơi là một đa thức bậc hai.",
            "correctAnswer": true,
            "explanation": "Đúng, diện tích là tích của hai nhị thức bậc nhất nên có bậc là $1 + 1 = 2$."
          },
          {
            "id": "b",
            "text": "Đa thức biểu thị diện tích sân chơi là $2x^2 + 9x + 10\\text{ (m}^2\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S = (2x + 5)(x + 2) = 2x^2 + 4x + 5x + 10 = 2x^2 + 9x + 10\\text{ (m}^2\\text{)}$."
          },
          {
            "id": "c",
            "text": "Nếu $x = 10\\text{ m}$, diện tích sân chơi bằng $300\\text{ m}^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, chiều dài là $2(10) + 5 = 25\\text{ m}$, chiều rộng là $10 + 2 = 12\\text{ m}$. Diện tích là $25 \\cdot 12 = 300\\text{ m}^2$ (hoặc thay vào đa thức: $2(100) + 9(10) + 10 = 300$)."
          },
          {
            "id": "d",
            "text": "Đa thức biểu thị chu vi của sân chơi là $3x + 7\\text{ (m)}$.",
            "correctAnswer": false,
            "explanation": "Sai, chu vi là $2 \\cdot [(2x + 5) + (x + 2)] = 2(3x + 7) = 6x + 14\\text{ (m)}$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.4.1",
        "badge": "Câu 1 (TH) - Tính giá trị của tích tại giá trị của biến",
        "prompt": "Tính giá trị của biểu thức $M = (x - 1)(x + 1)$ tại $x = 5$.",
        "correctAnswer": "24",
        "acceptableAnswers": [
          "24",
          "hai mươi tư",
          "hai mươi bốn"
        ],
        "explanation": "Ta có $(x - 1)(x + 1) = x^2 - 1$. Với $x = 5$, giá trị biểu thức là $5^2 - 1 = 25 - 1 = 24$."
      },
      {
        "id": "sa-8.4.2",
        "badge": "Câu 2 (TH) - Tìm hệ số của x bình phương trong tích",
        "prompt": "Hệ số của $x^2$ trong đa thức kết quả của phép nhân $(2x - 3)(x + 4)$ bằng bao nhiêu?",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2",
          "hai"
        ],
        "explanation": "Khai triển: $(2x - 3)(x + 4) = 2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$. Hệ số của $x^2$ là $2$."
      },
      {
        "id": "sa-8.4.3",
        "badge": "Câu 3 (TH) - Tìm nghiệm phương trình bằng phép nhân đơn thức",
        "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $x(x - 3) - x^2 = 9$.",
        "correctAnswer": "-3",
        "acceptableAnswers": [
          "-3",
          "âm 3",
          "- 3"
        ],
        "explanation": "Khai triển vế trái: $x^2 - 3x - x^2 = 9 \\Leftrightarrow -3x = 9 \\Leftrightarrow x = -3$."
      },
      {
        "id": "sa-8.4.4",
        "badge": "Câu 4 (VD) - Tính giá trị của biểu thức tích sau rút gọn",
        "prompt": "Tính giá trị của biểu thức $A = (x - y)(x^2 + xy + y^2)$ tại $x = 3$ và $y = 2$.",
        "correctAnswer": "19",
        "acceptableAnswers": [
          "19",
          "mười chín"
        ],
        "explanation": "Ta có $A = x^3 - y^3$. Với $x = 3, y = 2$, giá trị là $3^3 - 2^3 = 27 - 8 = 19$."
      },
      {
        "id": "sa-8.4.5",
        "badge": "Câu 5 (VD - Thực tế) - Hệ số tự do của đa thức diện tích",
        "prompt": "Một mảnh đất hình chữ nhật có kích thước là $(x + 4)\\text{ (m)}$ và $(x + 6)\\text{ (m)}$. Hệ số tự do của đa thức biểu thị diện tích mảnh đất đó bằng bao nhiêu?",
        "correctAnswer": "24",
        "acceptableAnswers": [
          "24",
          "hai mươi tư",
          "hai mươi bốn"
        ],
        "explanation": "Diện tích là $S = (x + 4)(x + 6) = x^2 + 10x + 24$. Hệ số tự do là $4 \\cdot 6 = 24$."
      },
      {
        "id": "sa-8.4.6",
        "badge": "Câu 6 (VD) - Tìm x để biểu thức đạt giá trị cho trước",
        "prompt": "Cho biểu thức $Q = (2x - 1)(3x + 2) - 6x(x - 1)$. Tìm giá trị của $x$ để biểu thức $Q$ nhận giá trị bằng $19$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "ba"
        ],
        "explanation": "Rút gọn $Q$: $(6x^2 + 4x - 3x - 2) - (6x^2 - 6x) = 6x^2 + x - 2 - 6x^2 + 6x = 7x - 2$.\nĐể $Q = 19$ thì $7x - 2 = 19 \\Leftrightarrow 7x = 21 \\Leftrightarrow x = 3$."
      }
    ]
  },
  // BÀI 5: PHÉP CHIA ĐA THỨC CHO ĐƠN THỨC
  "t8-b5-phep-chia-da-thuc-don-thuc": {
    "id": "t8-b5-phep-chia-da-thuc-don-thuc",
    "lessonNumber": 5,
    "title": "Bài 5: Phép chia đa thức cho đơn thức",
    "bookChapter": "Chương I: Đa thức (SGK Toán 8 KNTT - Tập 1)",
    "scenarioTitle": "Tình huống: Tính chiều dài khu vườn và kích thước hồ bơi",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn Minh",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, bác bảo vệ trường em đang chia một khu vườn hình chữ nhật có tổng diện tích là S = 6x³y + 9x²y² mét vuông thành các luống hoa có chiều rộng đúng bằng 3x²y mét. Bác hỏi em chiều dài của khu vườn là bao nhiêu mét mà em chưa biết cách chia đa thức cho đơn thức ạ?",
        "visualGraphic": "box",
        "mathNote": "S = 6x^3y + 9x^2y^2; \\quad d = 3x^2y"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào Minh! Câu hỏi của bác bảo vệ chính là bài toán chia đa thức cho đơn thức rất thú vị! Muốn tìm chiều dài, ta chỉ cần chia từng hạng tử của đa thức diện tích cho đơn thức chiều rộng: (6x³y + 9x²y²) : (3x²y) = (6x³y : 3x²y) + (9x²y² : 3x²y) = 2x + 3y mét. Thầy trò ta cùng tìm hiểu kỹ quy tắc này nhé!",
        "visualGraphic": "graph",
        "mathNote": "(A + B) : C = A : C + B : C"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Phép chia đơn thức cho đơn thức",
        "points": [
          "Điều kiện chia hết: Đơn thức $A$ chia hết cho đơn thức $B$ ($B \\ne 0$) khi mỗi biến của $B$ đều là biến của $A$ với số mũ không lớn hơn số mũ của nó trong $A$.",
          "Quy tắc chia đơn thức cho đơn thức:",
          "  Bước 1: Chia hệ số của đơn thức $A$ cho hệ số của đơn thức $B$.",
          "  Bước 2: Chia lũy thừa của từng biến trong $A$ cho lũy thừa của cùng biến đó trong $B$: $x^m : x^n = x^{m-n}$ ($m \\ge n$).",
          "  Bước 3: Nhân các kết quả vừa tìm được với nhau.",
          "Quy ước: Với $x \\ne 0$, ta có $x^0 = 1$ và $x^m : x^m = 1$."
        ],
        "formula": "a x^m y^n : b x^p y^q = \\frac{a}{b} x^{m-p} y^{n-q} \\quad (b \\ne 0, m \\ge p, n \\ge q)",
        "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 22)",
        "exampleProblem": "Thực hiện phép tính: a) $15x^5 : 3x^2$;  b) $12x^3y^2 : (-4xy)$.",
        "exampleSolution": "a) Chia hệ số và trừ số mũ của biến $x$:\n$15x^5 : 3x^2 = (15 : 3) \\cdot (x^5 : x^2) = 5x^{5-2} = 5x^3$.\nb) $12x^3y^2 : (-4xy) = [12 : (-4)] \\cdot (x^3 : x) \\cdot (y^2 : y) = -3x^2y$."
      },
      {
        "index": "2",
        "title": "Phép chia đa thức cho đơn thức",
        "points": [
          "Điều kiện chia hết: Đa thức $A$ chia hết cho đơn thức $B$ nếu mọi hạng tử của $A$ đều chia hết cho $B$.",
          "Quy tắc: Muốn chia đa thức $A$ cho đơn thức $B$ (trường hợp chia hết), ta chia từng hạng tử của $A$ cho $B$ rồi cộng các kết quả với nhau.",
          "Công thức tổng quát: $(A + B + C) : D = A : D + B : D + C : D$.",
          "Lưu ý về dấu: Cần chú ý quy tắc dấu của từng thương khi chia các hạng tử mang dấu âm."
        ],
        "formula": "(A + B + C) : D = A : D + B : D + C : D",
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 23)",
        "exampleProblem": "Làm tính chia: a) $(6x^4 - 9x^3 + 3x^2) : 3x^2$;  b) $(4x^3y^2 - 8x^2y + 10xy) : 2xy$.",
        "exampleSolution": "a) Chia từng hạng tử cho $3x^2$:\n$(6x^4 - 9x^3 + 3x^2) : 3x^2 = (6x^4 : 3x^2) - (9x^3 : 3x^2) + (3x^2 : 3x^2) = 2x^2 - 3x + 1$.\nb) $(4x^3y^2 - 8x^2y + 10xy) : 2xy = (4x^3y^2 : 2xy) - (8x^2y : 2xy) + (10xy : 2xy) = 2x^2y - 4x + 5$."
      },
      {
        "index": "3",
        "title": "Rút gọn biểu thức và tính giá trị",
        "points": [
          "Khi biểu thức gồm cả phép nhân, chia, cộng, trừ: Ta thực hiện phép tính nhân, chia trước rồi thực hiện phép cộng, trừ sau.",
          "Thu gọn các hạng tử đồng dạng để thu được kết quả tối giản.",
          "Sau khi rút gọn, thay giá trị cụ thể của các biến vào biểu thức đã thu gọn để tính toán nhanh chóng và chính xác nhất."
        ],
        "formula": "P = A : B + C \\cdot D",
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 24)",
        "exampleProblem": "Rút gọn rồi tính giá trị của biểu thức $P = (12x^3y^2 - 8x^2y^3) : 4x^2y^2$ tại $x = 2, y = 1$.",
        "exampleSolution": "Thực hiện phép chia:\n$P = (12x^3y^2 : 4x^2y^2) - (8x^2y^3 : 4x^2y^2) = 3x - 2y$.\nThay $x = 2, y = 1$ vào $P$:\n$P = 3 \\cdot 2 - 2 \\cdot 1 = 6 - 2 = 4$."
      },
      {
        "index": "4",
        "title": "Ứng dụng hình học và thực tế",
        "points": [
          "Tìm kích thước hình chữ nhật: Biết diện tích $S$ và một kích thước $a$, kích thước còn lại là $b = S : a$.",
          "Tìm chiều cao khối hộp chữ nhật: Biết thể tích $V$ và diện tích đáy $S_{\\text{đáy}}$, chiều cao là $h = V : S_{\\text{đáy}}$.",
          "Bài toán toán học thực tế: Chia đều sản lượng, thời gian và năng suất lao động."
        ],
        "formula": "b = \\frac{S}{a}; \\quad h = \\frac{V}{S_{\\text{đáy}}}",
        "exampleTitle": "Ví dụ 4 (SGK Toán 8 KNTT Bài 1.32 Trang 24)",
        "exampleProblem": "Một hình hộp chữ nhật có thể tích là $V = 10x^3 + 15x^2\\text{ (cm}^3\\text{)}$ và diện tích mặt đáy là $S = 5x^2\\text{ (cm}^2\\text{)}$. Tính chiều cao của hình hộp chữ nhật đó.",
        "exampleSolution": "Chiều cao của hình hộp chữ nhật là:\n$h = V : S = (10x^3 + 15x^2) : 5x^2 = (10x^3 : 5x^2) + (15x^2 : 5x^2) = 2x + 3\\text{ (cm)}$."
      }
    ],
    "youtubeVideoId": "t8_b5_video",
    "youtubeVideoTitle": "Bài Giảng Video: Bài 5 - Phép chia đa thức cho đơn thức - Toán 8 KNTT",
    "youtubeVideos": [
      {
        "id": "t8_b5_video1",
        "title": "Tiết 1: Quy tắc chia đơn thức cho đơn thức và điều kiện chia hết"
      },
      {
        "id": "t8_b5_video2",
        "title": "Tiết 2: Quy tắc chia đa thức cho đơn thức và bài toán thực tế"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.5.1",
        "timeSeconds": 120,
        "timeLabel": "02:00",
        "title": "Ví dụ 1: Chia hai lũy thừa cùng cơ số",
        "question": "Kết quả của phép chia $x^7 : x^3$ là:",
        "options": [
          "$x^4$",
          "$x^{10}$",
          "$x^2$",
          "$x^5$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng quy tắc chia hai lũy thừa cùng cơ số: $x^7 : x^3 = x^{7-3} = x^4$."
      },
      {
        "id": "vq-8.5.2",
        "timeSeconds": 300,
        "timeLabel": "05:00",
        "title": "Ví dụ 2: Chia đơn thức cho đơn thức",
        "question": "Kết quả của phép chia $18x^4y^3 : 6x^2y$ là:",
        "options": [
          "$3x^2y^2$",
          "$3x^2y$",
          "$3x^6y^4$",
          "$12x^2y^2$"
        ],
        "correctIndex": 0,
        "explanation": "$18x^4y^3 : 6x^2y = (18 : 6)(x^4 : x^2)(y^3 : y) = 3x^2y^2$."
      },
      {
        "id": "vq-8.5.3",
        "timeSeconds": 200,
        "timeLabel": "03:20",
        "title": "Ví dụ 3: Chia đa thức cho đơn thức",
        "question": "Kết quả của phép chia $(6x^3 - 4x^2) : 2x^2$ là:",
        "options": [
          "$3x - 2$",
          "$3x - 2x$",
          "$3x^2 - 2$",
          "$3x + 2$"
        ],
        "correctIndex": 0,
        "explanation": "$(6x^3 - 4x^2) : 2x^2 = (6x^3 : 2x^2) - (4x^2 : 2x^2) = 3x - 2$."
      },
      {
        "id": "vq-8.5.4",
        "timeSeconds": 450,
        "timeLabel": "07:30",
        "title": "Ví dụ 4: Rút gọn biểu thức chia",
        "question": "Rút gọn biểu thức $A = (8x^2y - 4xy^2) : 4xy$ ta được:",
        "options": [
          "$2x - y$",
          "$2x - 4y$",
          "$2xy - y$",
          "$x - 2y$"
        ],
        "correctIndex": 0,
        "explanation": "$(8x^2y : 4xy) - (4xy^2 : 4xy) = 2x - y$."
      }
    ],
    "tips": [
      "Trừ số mũ, KHÔNG chia số mũ: Khi chia hai lũy thừa cùng cơ số $x^m : x^n = x^{m-n}$ (rất nhiều học sinh nhầm $x^6 : x^2 = x^3$).",
      "Khi số mũ bằng nhau: $x^m : x^m = x^0 = 1$, do đó nếu biến có cùng số mũ ở cả tử và mẫu thì triệt tiêu thành số 1.",
      "Chia từng hạng tử: Khi chia $(A + B) : C$, luôn nhớ chia TẤT CẢ các hạng tử của đa thức cho đơn thức $C$, không được bỏ sót hạng tử nào.",
      "Quy tắc dấu khi chia: Tương tự như phép nhân: $(+) : (+) = (+)$, $(-) : (-) = (+)$, $(+) : (-) = (-)$."
    ],
    "traps": [
      "Bẫy chia số mũ: Nhầm $x^8 : x^2 = x^4$ thay vì $x^{8-2} = x^6$.",
      "Bẫy chia hạng tử giống nhau bằng 0: Khi chia $(3x^2 + 2x) : x$, hạng tử $2x : x = 2$, không phải bằng 0.",
      "Bẫy quên đổi dấu khi đơn thức chia mang dấu âm: Khi chia $(6x^3 - 4x^2) : (-2x)$, kết quả là $-3x^2 + 2x$, rất dễ nhầm thành $-3x^2 - 2x$.",
      "Bẫy điều kiện chia hết: Đơn thức $A$ chia hết cho đơn thức $B$ khi mỗi biến của $B$ đều xuất hiện trong $A$ với số mũ không lớn hơn. Ví dụ $x^2y$ KHÔNG chia hết cho $x^2y^2$ vì số mũ của $y$ trong số chia lớn hơn."
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.5.1",
        "badge": "Câu 1 (NB) - Chia hai lũy thừa cùng cơ số",
        "source": "SGK Toán 8 KNTT Trang 22",
        "question": "Với $x \\ne 0$ và $m > n$, công thức nào sau đây là đúng?",
        "options": [
          "$x^m : x^n = x^{m-n}$",
          "$x^m : x^n = x^{m+n}$",
          "$x^m : x^n = x^{m:n}$",
          "$x^m : x^n = x^{m \\cdot n}$"
        ],
        "correctIndex": 0,
        "explanation": "Khi chia hai lũy thừa cùng cơ số (khác 0), ta giữ nguyên cơ số và trừ các số mũ: $x^m : x^n = x^{m-n}$."
      },
      {
        "id": "quiz-8.5.2",
        "badge": "Câu 2 (NB) - Phép chia lũy thừa cụ thể",
        "source": "SGK Toán 8 KNTT Trang 22",
        "question": "Kết quả của phép chia $x^5 : x^2$ là:",
        "options": [
          "$x^3$",
          "$x^7$",
          "$x^{2,5}$",
          "$x^{10}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $x^5 : x^2 = x^{5-2} = x^3$."
      },
      {
        "id": "quiz-8.5.3",
        "badge": "Câu 3 (NB) - Chia đơn thức một biến",
        "source": "SGK Toán 8 KNTT Trang 22",
        "question": "Kết quả của phép chia $6x^3 : 2x$ là:",
        "options": [
          "$3x^2$",
          "$3x^3$",
          "$4x^2$",
          "$3x$"
        ],
        "correctIndex": 0,
        "explanation": "Ta chia hệ số cho hệ số và trừ số mũ: $(6 : 2)(x^3 : x) = 3x^2$."
      },
      {
        "id": "quiz-8.5.4",
        "badge": "Câu 4 (NB) - Chia đơn thức hai biến",
        "source": "SGK Toán 8 KNTT Trang 22",
        "question": "Kết quả của phép chia $12x^2y : 3xy$ là:",
        "options": [
          "$4x$",
          "$4xy$",
          "$4y$",
          "$4x^2$"
        ],
        "correctIndex": 0,
        "explanation": "$12x^2y : 3xy = (12 : 3)(x^2 : x)(y : y) = 4 \\cdot x \\cdot 1 = 4x$."
      },
      {
        "id": "quiz-8.5.5",
        "badge": "Câu 5 (NB) - Chia đơn thức có dấu âm",
        "source": "SGK Toán 8 KNTT Trang 22",
        "question": "Kết quả của phép chia $-15x^4y^2 : 5x^2y$ là:",
        "options": [
          "$-3x^2y$",
          "$3x^2y$",
          "$-3x^2y^2$",
          "$-3x^6y^3$"
        ],
        "correctIndex": 0,
        "explanation": "$(-15 : 5)(x^4 : x^2)(y^2 : y) = -3x^2y$."
      },
      {
        "id": "quiz-8.5.6",
        "badge": "Câu 6 (NB) - Quy tắc chia đa thức cho đơn thức",
        "source": "SGK Toán 8 KNTT Trang 23",
        "question": "Công thức nào sau đây biểu diễn đúng quy tắc chia đa thức cho đơn thức?",
        "options": [
          "$(A + B) : C = A : C + B : C$",
          "$(A + B) : C = A : C + B$",
          "$(A + B) : C = A + B : C$",
          "$(A + B) : C = (A + B) \\cdot C$"
        ],
        "correctIndex": 0,
        "explanation": "Muốn chia đa thức $A + B$ cho đơn thức $C$, ta chia từng hạng tử của đa thức cho $C$: $(A + B) : C = A : C + B : C$."
      },
      {
        "id": "quiz-8.5.7",
        "badge": "Câu 7 (NB) - Chia nhị thức cho đơn thức",
        "source": "SGK Toán 8 KNTT Trang 23",
        "question": "Kết quả của phép chia $(4x^2 + 2x) : 2x$ là:",
        "options": [
          "$2x + 1$",
          "$2x$",
          "$2x + 2$",
          "$x + 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(4x^2 + 2x) : 2x = (4x^2 : 2x) + (2x : 2x) = 2x + 1$."
      },
      {
        "id": "quiz-8.5.8",
        "badge": "Câu 8 (NB) - Chia đa thức chứa dấu trừ",
        "source": "SGK Toán 8 KNTT Trang 23",
        "question": "Kết quả của phép chia $(6x^3 - 9x^2) : 3x^2$ là:",
        "options": [
          "$2x - 3$",
          "$2x + 3$",
          "$3x - 3$",
          "$2x^2 - 3$"
        ],
        "correctIndex": 0,
        "explanation": "$(6x^3 - 9x^2) : 3x^2 = (6x^3 : 3x^2) - (9x^2 : 3x^2) = 2x - 3$."
      },
      {
        "id": "quiz-8.5.9",
        "badge": "Câu 9 (NB) - Nhận biết đơn thức chia hết",
        "source": "SGK Toán 8 KNTT Trang 22",
        "question": "Đơn thức $6x^3y^2$ chia hết cho đơn thức nào sau đây?",
        "options": [
          "$2x^2y$",
          "$3x^4y$",
          "$4xy^3$",
          "$x^3y^3$"
        ],
        "correctIndex": 0,
        "explanation": "Đơn thức $2x^2y$ có số mũ của $x$ là $2 \\le 3$ và số mũ của $y$ là $1 \\le 2$, nên $6x^3y^2$ chia hết cho $2x^2y$."
      },
      {
        "id": "quiz-8.5.10",
        "badge": "Câu 10 (NB) - Bậc của đa thức thương",
        "source": "SGK Toán 8 KNTT Trang 23",
        "question": "Bậc của đa thức thương trong phép chia $(8x^5 - 4x^3) : 2x^2$ là:",
        "options": [
          "$3$",
          "$5$",
          "$2$",
          "$4$"
        ],
        "correctIndex": 0,
        "explanation": "$(8x^5 - 4x^3) : 2x^2 = 4x^3 - 2x$. Hạng tử có bậc cao nhất là $4x^3$ nên bậc của thương là $3$."
      },
      {
        "id": "quiz-8.5.11",
        "badge": "Câu 11 (TH) - Chia đa thức ba hạng tử",
        "source": "SGK Toán 8 KNTT Trang 23",
        "question": "Kết quả của phép chia $(12x^4 - 8x^3 + 4x^2) : 4x^2$ là:",
        "options": [
          "$3x^2 - 2x + 1$",
          "$3x^2 - 2x$",
          "$3x^2 - 2x + 4$",
          "$3x^2 - 4x + 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(12x^4 : 4x^2) - (8x^3 : 4x^2) + (4x^2 : 4x^2) = 3x^2 - 2x + 1$."
      },
      {
        "id": "quiz-8.5.12",
        "badge": "Câu 12 (TH) - Chia đa thức hai biến cho đơn thức",
        "source": "SGK Toán 8 KNTT Trang 23",
        "question": "Thực hiện phép tính $(6x^3y^2 - 9x^2y^3) : 3x^2y^2$ ta được kết quả là:",
        "options": [
          "$2x - 3y$",
          "$2x + 3y$",
          "$2xy - 3$",
          "$3x - 2y$"
        ],
        "correctIndex": 0,
        "explanation": "$(6x^3y^2 : 3x^2y^2) - (9x^2y^3 : 3x^2y^2) = 2x - 3y$."
      },
      {
        "id": "quiz-8.5.13",
        "badge": "Câu 13 (TH) - Chia đa thức cho đơn thức mang dấu âm",
        "source": "SGK Toán 8 KNTT Trang 23",
        "question": "Kết quả của phép chia $(10x^3 - 15x^2 + 5x) : (-5x)$ là:",
        "options": [
          "$-2x^2 + 3x - 1$",
          "$-2x^2 - 3x + 1$",
          "$2x^2 - 3x + 1$",
          "$-2x^2 + 3x$"
        ],
        "correctIndex": 0,
        "explanation": "$(10x^3 : -5x) - (15x^2 : -5x) + (5x : -5x) = -2x^2 + 3x - 1$."
      },
      {
        "id": "quiz-8.5.14",
        "badge": "Câu 14 (TH) - Rút gọn biểu thức chứa phép chia",
        "source": "SGK Toán 8 KNTT Trang 24",
        "question": "Rút gọn biểu thức $M = (4x^3 - 6x^2) : 2x^2 + 3$ ta được:",
        "options": [
          "$2x$",
          "$2x - 6$",
          "$2x + 3$",
          "$2x - 3$"
        ],
        "correctIndex": 0,
        "explanation": "$M = (2x - 3) + 3 = 2x$."
      },
      {
        "id": "quiz-8.5.15",
        "badge": "Câu 15 (TH) - Tính giá trị của biểu thức sau khi chia",
        "source": "SGK Toán 8 KNTT Trang 24",
        "question": "Giá trị của biểu thức $A = (15x^2y^2 - 10xy^3) : 5xy^2$ tại $x = 2$ và $y = 1$ là:",
        "options": [
          "$4$",
          "$6$",
          "$2$",
          "$8$"
        ],
        "correctIndex": 0,
        "explanation": "Rút gọn: $A = (15x^2y^2 : 5xy^2) - (10xy^3 : 5xy^2) = 3x - 2y$.\nThay $x = 2, y = 1$: $A = 3(2) - 2(1) = 6 - 2 = 4$."
      },
      {
        "id": "quiz-8.5.16",
        "badge": "Câu 16 (TH) - Tìm x bằng phép chia đa thức",
        "source": "SGK Toán 8 KNTT Trang 24",
        "question": "Tìm giá trị của $x$ thỏa mãn: $(6x^2 - 4x) : 2x = 7$:",
        "options": [
          "$x = 3$",
          "$x = -3$",
          "$x = 5$",
          "$x = 2$"
        ],
        "correctIndex": 0,
        "explanation": "Chia vế trái: $(6x^2 : 2x) - (4x : 2x) = 3x - 2$.\nPhương trình trở thành: $3x - 2 = 7 \\Leftrightarrow 3x = 9 \\Leftrightarrow x = 3$."
      },
      {
        "id": "quiz-8.5.17",
        "badge": "Câu 17 (VD) - Rút gọn biểu thức kết hợp nhân và chia",
        "source": "SGK Toán 8 KNTT Bài 1.31 Trang 24",
        "question": "Rút gọn biểu thức $P = (8x^3 - 12x^2) : 4x^2 - x(2 - x)$ ta được:",
        "options": [
          "$x^2 - 3$",
          "$x^2 + 4x - 3$",
          "$-x^2 - 3$",
          "$3 - x^2$"
        ],
        "correctIndex": 0,
        "explanation": "Thực hiện phép chia: $(8x^3 - 12x^2) : 4x^2 = 2x - 3$.\nThực hiện phép nhân: $-x(2 - x) = -2x + x^2$.\nCộng lại: $P = (2x - 3) - 2x + x^2 = x^2 - 3$."
      },
      {
        "id": "quiz-8.5.18",
        "badge": "Câu 18 (VD) - Tìm điều kiện của số tự nhiên n để phép chia hết",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Tìm số tự nhiên $n$ để đơn thức $A = 5x^n y^3$ chia hết cho đơn thức $B = 2x^2 y^n$:",
        "options": [
          "$n = 2$ hoặc $n = 3$",
          "$n = 2$",
          "$n = 3$",
          "$n \\ge 2$"
        ],
        "correctIndex": 0,
        "explanation": "Để $A$ chia hết cho $B$ thì số mũ của $x$ trong $A$ phải lớn hơn hoặc bằng trong $B$: $n \\ge 2$.\nSố mũ của $y$ trong $A$ phải lớn hơn hoặc bằng trong $B$: $3 \\ge n \\Leftrightarrow n \\le 3$.\nKết hợp lại ta được $2 \\le n \\le 3$. Vì $n \\in \\mathbb{N}$ nên $n \\in \\{2; 3\\}$."
      },
      {
        "id": "quiz-8.5.19",
        "badge": "Câu 19 (VD - Thực tế) - Tìm chiều dài khu vườn hình chữ nhật",
        "source": "SGK Toán 8 KNTT Bài 1.32 Trang 24",
        "question": "Một khu vườn hình chữ nhật có diện tích là $S = 6x^2y + 9xy^2\\text{ (m}^2\\text{)}$ và chiều rộng là $3xy\\text{ (m)}$. Đa thức biểu thị chiều dài của khu vườn là:",
        "options": [
          "$2x + 3y\\text{ (m)}$",
          "$3x + 2y\\text{ (m)}$",
          "$2x^2 + 3y^2\\text{ (m)}$",
          "$2x - 3y\\text{ (m)}$"
        ],
        "correctIndex": 0,
        "explanation": "Chiều dài khu vườn bằng diện tích chia cho chiều rộng:\n$d = S : r = (6x^2y + 9xy^2) : 3xy = (6x^2y : 3xy) + (9xy^2 : 3xy) = 2x + 3y\\text{ (m)}$."
      },
      {
        "id": "quiz-8.5.20",
        "badge": "Câu 20 (VD - Thực tế) - Chiều cao khối hộp chữ nhật",
        "source": "Toán 8 KNTT - Ứng dụng hình học không gian",
        "question": "Một khối hộp chữ nhật có thể tích là $V = 12x^3y + 8x^2y^2\\text{ (cm}^3\\text{)}$ và diện tích đáy là $S = 4x^2y\\text{ (cm}^2\\text{)}$. Đa thức biểu thị chiều cao của khối hộp là:",
        "options": [
          "$3x + 2y\\text{ (cm)}$",
          "$3x - 2y\\text{ (cm)}$",
          "$3x^2 + 2y\\text{ (cm)}$",
          "$4x + 2y\\text{ (cm)}$"
        ],
        "correctIndex": 0,
        "explanation": "Chiều cao khối hộp chữ nhật:\n$h = V : S = (12x^3y + 8x^2y^2) : 4x^2y = (12x^3y : 4x^2y) + (8x^2y^2 : 4x^2y) = 3x + 2y\\text{ (cm)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.5.1",
        "badge": "Câu 1 (Đ/S) - Điều kiện chia hết và phép chia đơn thức",
        "prompt": "Cho đơn thức $M = 8x^4y^3$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đơn thức $M$ chia hết cho đơn thức $2x^3y^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì số mũ của $x$ là $3 \\le 4$ và số mũ của $y$ là $2 \\le 3$."
          },
          {
            "id": "b",
            "text": "Kết quả của phép chia $M : 4x^2y$ là $2x^2y^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $8x^4y^3 : 4x^2y = (8:4)(x^4:x^2)(y^3:y) = 2x^2y^2$."
          },
          {
            "id": "c",
            "text": "Đơn thức $M$ chia hết cho đơn thức $x^5y$.",
            "correctAnswer": false,
            "explanation": "Sai, số mũ của $x$ trong số chia là $5 > 4$ nên không chia hết."
          },
          {
            "id": "d",
            "text": "Kết quả của phép chia $M : (-2x^4y^3)$ là $-4$.",
            "correctAnswer": true,
            "explanation": "Đúng, $8 : (-2) = -4$ và $(x^4:x^4)(y^3:y^3) = 1 \\cdot 1 = 1$, kết quả là $-4$."
          }
        ]
      },
      {
        "id": "tf-8.5.2",
        "badge": "Câu 2 (Đ/S) - Phép chia đa thức cho đơn thức",
        "prompt": "Cho đa thức $A = 15x^3y^2 - 10x^2y^3 + 5x^2y^2$ và đơn thức $B = 5x^2y^2$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Mọi hạng tử của đa thức $A$ đều chia hết cho đơn thức $B$.",
            "correctAnswer": true,
            "explanation": "Đúng, $15x^3y^2$, $-10x^2y^3$ và $5x^2y^2$ đều có số mũ của $x \\ge 2$ và $y \\ge 2$."
          },
          {
            "id": "b",
            "text": "Hạng tử thứ ba của $A$ chia cho $B$ được kết quả bằng $0$.",
            "correctAnswer": false,
            "explanation": "Sai, $5x^2y^2 : 5x^2y^2 = 1$, không phải bằng 0."
          },
          {
            "id": "c",
            "text": "Kết quả của phép chia $A : B$ là $3x - 2y + 1$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(15x^3y^2:5x^2y^2) - (10x^2y^3:5x^2y^2) + (5x^2y^2:5x^2y^2) = 3x - 2y + 1$."
          },
          {
            "id": "d",
            "text": "Tại $x = 1, y = 2$, giá trị của thương $A : B$ bằng $0$.",
            "correctAnswer": true,
            "explanation": "Đúng, thay $x = 1, y = 2$: $3(1) - 2(2) + 1 = 3 - 4 + 1 = 0$."
          }
        ]
      },
      {
        "id": "tf-8.5.3",
        "badge": "Câu 3 (Đ/S) - Rút gọn biểu thức tổng hợp",
        "prompt": "Cho biểu thức $Q = (12x^4 - 6x^3) : 3x^2 - 2x(2x - 1)$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Thương của phép chia $(12x^4 - 6x^3) : 3x^2$ là $4x^2 - 2x$.",
            "correctAnswer": true,
            "explanation": "Đúng, $12x^4 : 3x^2 - 6x^3 : 3x^2 = 4x^2 - 2x$."
          },
          {
            "id": "b",
            "text": "Khai triển tích $-2x(2x - 1)$ ta được $-4x^2 - 2x$.",
            "correctAnswer": false,
            "explanation": "Sai, $(-2x) \\cdot 2x + (-2x) \\cdot (-1) = -4x^2 + 2x$."
          },
          {
            "id": "c",
            "text": "Biểu thức $Q$ sau khi rút gọn có giá trị bằng $0$.",
            "correctAnswer": true,
            "explanation": "Đúng, $Q = (4x^2 - 2x) - 4x^2 + 2x = (4x^2 - 4x^2) + (-2x + 2x) = 0$."
          },
          {
            "id": "d",
            "text": "Giá trị của $Q$ phụ thuộc vào giá trị của biến $x$.",
            "correctAnswer": false,
            "explanation": "Sai, vì $Q = 0$ với mọi $x$ nên giá trị của $Q$ không phụ thuộc vào $x$."
          }
        ]
      },
      {
        "id": "tf-8.5.4",
        "badge": "Câu 4 (Đ/S) - Bài toán thực tế bể bơi hình chữ nhật",
        "prompt": "Một hồ bơi hình chữ nhật có diện tích đáy là $S = 20x^2 + 30xy\\text{ (m}^2\\text{)}$ và chiều rộng là $5x\\text{ (m)}$ (với $x, y > 0$). Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Đa thức biểu thị chiều dài đáy hồ bơi là $(20x^2 + 30xy) : 5x$.",
            "correctAnswer": true,
            "explanation": "Đúng, chiều dài bằng diện tích chia cho chiều rộng."
          },
          {
            "id": "b",
            "text": "Chiều dài của đáy hồ bơi là $4x + 6y\\text{ (m)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(20x^2 : 5x) + (30xy : 5x) = 4x + 6y\\text{ (m)}$."
          },
          {
            "id": "c",
            "text": "Đa thức biểu thị chu vi đáy hồ bơi là $9x + 6y\\text{ (m)}$.",
            "correctAnswer": false,
            "explanation": "Sai, chu vi là $2 \\cdot [(4x + 6y) + 5x] = 2(9x + 6y) = 18x + 12y\\text{ (m)}$."
          },
          {
            "id": "d",
            "text": "Nếu $x = 2\\text{ m}$ và $y = 3\\text{ m}$ thì chiều dài đáy hồ bơi là $26\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, thay $x = 2, y = 3$ vào chiều dài: $4(2) + 6(3) = 8 + 18 = 26\\text{ m}$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.5.1",
        "badge": "Câu 1 (TH) - Tìm hệ số của thương đơn thức",
        "prompt": "Hệ số của đơn thức thương trong phép chia $24x^5y^3 : 8x^2y^3$ bằng bao nhiêu?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "ba"
        ],
        "explanation": "Hệ số của thương bằng thương hai hệ số: $24 : 8 = 3$."
      },
      {
        "id": "sa-8.5.2",
        "badge": "Câu 2 (TH) - Tính giá trị của thương sau khi rút gọn",
        "prompt": "Tính giá trị của thương $(10x^3 - 6x^2) : 2x^2$ tại $x = 1$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2",
          "hai"
        ],
        "explanation": "Thương bằng $5x - 3$. Tại $x = 1$, giá trị là $5(1) - 3 = 2$."
      },
      {
        "id": "sa-8.5.3",
        "badge": "Câu 3 (TH) - Tìm nghiệm x bằng phép chia đa thức",
        "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(8x^2 - 12x) : 4x = -7$.",
        "correctAnswer": "-2",
        "acceptableAnswers": [
          "-2",
          "âm 2",
          "- 2"
        ],
        "explanation": "Thực hiện phép chia vế trái: $(8x^2 : 4x) - (12x : 4x) = 2x - 3$.\nPhương trình trở thành: $2x - 3 = -7 \\Leftrightarrow 2x = -4 \\Leftrightarrow x = -2$."
      },
      {
        "id": "sa-8.5.4",
        "badge": "Câu 4 (VD) - Tính giá trị của biểu thức hai biến",
        "prompt": "Tính giá trị của biểu thức $P = (18x^3y^2 - 12x^2y^3) : 6x^2y^2$ tại $x = 3$ và $y = 2$.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "năm"
        ],
        "explanation": "Rút gọn: $P = 3x - 2y$. Thay $x = 3, y = 2$: $P = 3(3) - 2(2) = 9 - 4 = 5$."
      },
      {
        "id": "sa-8.5.5",
        "badge": "Câu 5 (VD - Thực tế) - Tìm chiều dài mảnh đất",
        "prompt": "Một mảnh đất hình chữ nhật có diện tích $S = 75x^2 + 50xy\\text{ (m}^2\\text{)}$ và chiều rộng là $25x\\text{ (m)}$. Khi $x = 3\\text{ m}$ và $y = 8\\text{ m}$, chiều dài mảnh đất đó bằng bao nhiêu mét?",
        "correctAnswer": "25",
        "acceptableAnswers": [
          "25",
          "hai mươi lăm",
          "25m",
          "25 m"
        ],
        "explanation": "Chiều dài mảnh đất là $d = (75x^2 + 50xy) : 25x = 3x + 2y\\text{ (m)}$.\nKhi $x = 3, y = 8$: $d = 3(3) + 2(8) = 9 + 16 = 25\\text{ m}$."
      },
      {
        "id": "sa-8.5.6",
        "badge": "Câu 6 (VD) - Tìm số tự nhiên n lớn nhất để phép chia hết",
        "prompt": "Tìm số tự nhiên $n$ lớn nhất để đơn thức $6x^3y^2$ chia hết cho đơn thức $2x^n y^n$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2",
          "hai"
        ],
        "explanation": "Để $6x^3y^2$ chia hết cho $2x^n y^n$ thì $n \\le 3$ và $n \\le 2$. Do đó $n \\le 2$. Số tự nhiên $n$ lớn nhất thỏa mãn là $n = 2$."
      }
    ]
  },
};
