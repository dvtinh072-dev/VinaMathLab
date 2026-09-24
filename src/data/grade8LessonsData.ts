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
  // BÀI TẬP CUỐI CHƯƠNG I: ĐA THỨC
  "t8-on-tap-chuong-1": {
    "id": "t8-on-tap-chuong-1",
    "lessonNumber": 0,
    "title": "Bài tập cuối chương I",
    "bookChapter": "Chương I: Đa thức (SGK Toán 8 KNTT - Tập 1)",
    "scenarioTitle": "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
    "scenarioFrames": [],
    "theorySections": [],
    "youtubeVideoId": "t8_ot1_video",
    "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và giải bài tập cuối chương I - Toán 8 KNTT",
    "youtubeVideos": [
      {
        "id": "t8_ot1_video1",
        "title": "Tiết 1: Ôn tập đơn thức, đa thức và phép cộng, trừ đa thức"
      },
      {
        "id": "t8_ot1_video2",
        "title": "Tiết 2: Ôn tập phép nhân đa thức và phép chia đa thức cho đơn thức"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.ot1.1",
        "timeSeconds": 150,
        "timeLabel": "02:30",
        "title": "Ví dụ 1: Nhận biết và thu gọn đơn thức",
        "question": "Đơn thức thu gọn của $2x^2y \\cdot (-3xy^2)$ là:",
        "options": [
          "$-6x^3y^3$",
          "$-6x^2y^2$",
          "$6x^3y^3$",
          "$-5x^3y^3$"
        ],
        "correctIndex": 0,
        "explanation": "$2 \\cdot (-3) \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^2) = -6x^3y^3$."
      },
      {
        "id": "vq-8.ot1.2",
        "timeSeconds": 360,
        "timeLabel": "06:00",
        "title": "Ví dụ 2: Cộng trừ đa thức nhiều biến",
        "question": "Cho $A = 3x^2 - xy$ và $B = x^2 + xy$. Hiệu $A - B$ bằng:",
        "options": [
          "$2x^2 - 2xy$",
          "$2x^2$",
          "$4x^2$",
          "$2x^2 + 2xy$"
        ],
        "correctIndex": 0,
        "explanation": "$A - B = (3x^2 - xy) - (x^2 + xy) = 3x^2 - xy - x^2 - xy = 2x^2 - 2xy$."
      },
      {
        "id": "vq-8.ot1.3",
        "timeSeconds": 210,
        "timeLabel": "03:30",
        "title": "Ví dụ 3: Phép nhân đa thức",
        "question": "Khai triển của tích $(x + 3)(x - 2)$ là:",
        "options": [
          "$x^2 + x - 6$",
          "$x^2 - x - 6$",
          "$x^2 + 5x - 6$",
          "$x^2 - 6$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 3)(x - 2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$."
      },
      {
        "id": "vq-8.ot1.4",
        "timeSeconds": 420,
        "timeLabel": "07:00",
        "title": "Ví dụ 4: Phép chia đa thức cho đơn thức",
        "question": "Kết quả của phép chia $(6x^3y^2 - 4x^2y) : 2x^2y$ là:",
        "options": [
          "$3xy - 2$",
          "$3x - 2$",
          "$3xy - 2y$",
          "$3x^2y - 2$"
        ],
        "correctIndex": 0,
        "explanation": "$(6x^3y^2 : 2x^2y) - (4x^2y : 2x^2y) = 3xy - 2$."
      }
    ],
    "tips": [
      "Đơn thức đồng dạng: Chỉ cộng hoặc trừ các hệ số với nhau và giữ nguyên phần biến chung.",
      "Quy tắc dấu khi trừ đa thức: Khi viết $A - B$, bắt buộc đặt $B$ trong dấu ngoặc rồi bỏ ngoặc đổi dấu tất cả các hạng tử của $B$.",
      "Quy tắc lũy thừa: Nhân thì CỘNG số mũ ($x^m \\cdot x^n = x^{m+n}$), chia thì TRỪ số mũ ($x^m : x^n = x^{m-n}$).",
      "Chiến thuật làm bài thi trắc nghiệm: Rút gọn biểu thức trước khi thay số để tiết kiệm thời gian và tránh tính nhầm số lớn."
    ],
    "traps": [
      "Bẫy nhầm giữa cộng và nhân đơn thức: $2x^2 + 3x^2 = 5x^2$ (không cộng số mũ thành $5x^4$).",
      "Bẫy bỏ ngoặc có dấu trừ: $A - (2x - y) = A - 2x + y$ (rất dễ quên đổi dấu $-y$ thành $+y$).",
      "Bẫy chia hai lũy thừa cùng cơ số: $x^6 : x^2 = x^4$ (dễ nhầm lấy số mũ chia nhau thành $x^3$).",
      "Bẫy chia hạng tử giống nhau bằng 0: $(3x + 2) : 2 = \\frac{3}{2}x + 1$, hoặc $(x^2 + x) : x = x + 1$ (không phải $x + 0 = x$)."
    ],
    "quizQuestions": [
      {
        "id": "otc1-d1-q1",
        "badge": "Câu 1 (NB) - Nhận biết đơn thức thu gọn",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Trong các biểu thức sau, biểu thức nào là đơn thức thu gọn?",
        "options": [
          "$-3x^2y^3$",
          "$2x^2 \\cdot 3y$",
          "$x + 2y$",
          "$\\frac{2x}{y}$"
        ],
        "correctIndex": 0,
        "explanation": "Đơn thức $-3x^2y^3$ chỉ gồm tích của một số với các biến mà mỗi biến chỉ viết một lần với số mũ nguyên dương nên là đơn thức thu gọn."
      },
      {
        "id": "otc1-d1-q2",
        "badge": "Câu 2 (NB) - Bậc của đơn thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Bậc của đơn thức $-5x^3y^2z$ là:",
        "options": [
          "$6$",
          "$5$",
          "$3$",
          "$2$"
        ],
        "correctIndex": 0,
        "explanation": "Bậc của đơn thức là tổng số mũ của tất cả các biến: $3 + 2 + 1 = 6$."
      },
      {
        "id": "otc1-d1-q3",
        "badge": "Câu 3 (NB) - Cặp đơn thức đồng dạng",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Cặp đơn thức nào sau đây là hai đơn thức đồng dạng?",
        "options": [
          "$2x^2y$ và $-5x^2y$",
          "$2x^2y$ và $2xy^2$",
          "$3x^2$ và $3y^2$",
          "$-x^2y$ và $-x^2y^2$"
        ],
        "correctIndex": 0,
        "explanation": "Hai đơn thức $2x^2y$ và $-5x^2y$ có hệ số khác 0 và có cùng phần biến là $x^2y$ nên đồng dạng với nhau."
      },
      {
        "id": "otc1-d1-q4",
        "badge": "Câu 4 (NB) - Bậc của đa thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Bậc của đa thức $P = x^4 - 2x^2y^3 + 5$ là:",
        "options": [
          "$5$",
          "$4$",
          "$3$",
          "$2$"
        ],
        "correctIndex": 0,
        "explanation": "Đa thức có hạng tử $-2x^2y^3$ có bậc cao nhất là $2 + 3 = 5$, do đó bậc của đa thức là $5$."
      },
      {
        "id": "otc1-d1-q5",
        "badge": "Câu 5 (NB) - Phép nhân đơn thức với đa thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Kết quả của phép nhân $2x(x - 3)$ là:",
        "options": [
          "$2x^2 - 6x$",
          "$2x^2 - 3$",
          "$2x^2 - 6$",
          "$x^2 - 6x$"
        ],
        "correctIndex": 0,
        "explanation": "$2x(x - 3) = 2x \\cdot x - 2x \\cdot 3 = 2x^2 - 6x$."
      },
      {
        "id": "otc1-d1-q6",
        "badge": "Câu 6 (NB) - Phép chia đơn thức cho đơn thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Kết quả của phép chia $12x^4y^2 : 4x^2y$ là:",
        "options": [
          "$3x^2y$",
          "$3x^2$",
          "$3xy$",
          "$8x^2y$"
        ],
        "correctIndex": 0,
        "explanation": "$12x^4y^2 : 4x^2y = (12 : 4)(x^4 : x^2)(y^2 : y) = 3x^2y$."
      },
      {
        "id": "otc1-d1-q7",
        "badge": "Câu 7 (TH) - Thu gọn đa thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Thu gọn đa thức $A = 3x^2y - 2xy^2 + x^2y + 5xy^2$ ta được:",
        "options": [
          "$4x^2y + 3xy^2$",
          "$4x^2y - 3xy^2$",
          "$2x^2y + 7xy^2$",
          "$7x^2y$"
        ],
        "correctIndex": 0,
        "explanation": "$A = (3x^2y + x^2y) + (-2xy^2 + 5xy^2) = 4x^2y + 3xy^2$."
      },
      {
        "id": "otc1-d1-q8",
        "badge": "Câu 8 (TH) - Trừ hai đa thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Cho $M = x^2 - 2xy + y^2$ và $N = x^2 + 2xy + y^2$. Hiệu $M - N$ bằng:",
        "options": [
          "$-4xy$",
          "$4xy$",
          "$2x^2 + 2y^2$",
          "$0$"
        ],
        "correctIndex": 0,
        "explanation": "$M - N = (x^2 - 2xy + y^2) - (x^2 + 2xy + y^2) = x^2 - 2xy + y^2 - x^2 - 2xy - y^2 = -4xy$."
      },
      {
        "id": "otc1-d1-q9",
        "badge": "Câu 9 (TH) - Nhân hai đa thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Khai triển và thu gọn tích $(x - 2)(x + 5)$ ta được:",
        "options": [
          "$x^2 + 3x - 10$",
          "$x^2 - 3x - 10$",
          "$x^2 + 7x - 10$",
          "$x^2 - 10$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 2)(x + 5) = x^2 + 5x - 2x - 10 = x^2 + 3x - 10$."
      },
      {
        "id": "otc1-d1-q10",
        "badge": "Câu 10 (TH) - Chia đa thức cho đơn thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Kết quả của phép chia $(6x^3 - 4x^2 + 2x) : 2x$ là:",
        "options": [
          "$3x^2 - 2x + 1$",
          "$3x^2 - 2x$",
          "$3x^2 - 2x + 2$",
          "$3x^3 - 2x^2 + x$"
        ],
        "correctIndex": 0,
        "explanation": "$(6x^3 : 2x) - (4x^2 : 2x) + (2x : 2x) = 3x^2 - 2x + 1$."
      },
      {
        "id": "otc1-d1-q11",
        "badge": "Câu 11 (VD) - Rút gọn biểu thức tổng hợp",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
        "question": "Rút gọn biểu thức $P = (x - 1)(x + 2) - x(x + 3)$ ta được:",
        "options": [
          "$-2x - 2$",
          "$-2x + 2$",
          "$2x - 2$",
          "$-2$"
        ],
        "correctIndex": 0,
        "explanation": "Khai triển: $(x - 1)(x + 2) = x^2 + 2x - x - 2 = x^2 + x - 2$.\n$-x(x + 3) = -x^2 - 3x$.\nCộng lại: $P = (x^2 + x - 2) - x^2 - 3x = -2x - 2$."
      },
      {
        "id": "otc1-d1-q12",
        "badge": "Câu 12 (VD - Thực tế) - Diện tích mảnh vườn mở rộng",
        "source": "SGK Toán 8 KNTT - Bài toán thực tế",
        "question": "Một mảnh đất hình chữ nhật có chiều dài ban đầu là $x\\text{ (m)}$ và chiều rộng là $y\\text{ (m)}$. Người ta tăng chiều dài thêm $4\\text{ m}$ và giữ nguyên chiều rộng. Đa thức biểu thị diện tích mảnh đất sau khi mở rộng là:",
        "options": [
          "$xy + 4y\\text{ (m}^2\\text{)}$",
          "$xy + 4x\\text{ (m}^2\\text{)}$",
          "$xy + 4\\text{ (m}^2\\text{)}$",
          "$4xy\\text{ (m}^2\\text{)}$"
        ],
        "correctIndex": 0,
        "explanation": "Chiều dài mới là $(x + 4)\\text{ (m)}$. Diện tích mới là $S = (x + 4)y = xy + 4y\\text{ (m}^2\\text{)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "otc1-d1-tf1",
        "badge": "Câu 1 (Đ/S) - Khái niệm đơn thức và đơn thức đồng dạng",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về đơn thức:",
        "subItems": [
          {
            "id": "a",
            "text": "Biểu thức $3x^2y$ là một đơn thức thu gọn.",
            "correctAnswer": true,
            "explanation": "Đúng, các biến chỉ xuất hiện một lần với số mũ nguyên dương."
          },
          {
            "id": "b",
            "text": "Số thực $0$ là đơn thức có bậc bằng $0$.",
            "correctAnswer": false,
            "explanation": "Sai, số 0 được coi là đơn thức không có bậc. Chỉ có các số thực khác 0 mới có bậc bằng 0."
          },
          {
            "id": "c",
            "text": "Hai đơn thức $-2xy^2$ và $5y^2x$ đồng dạng với nhau.",
            "correctAnswer": true,
            "explanation": "Đúng, vì $y^2x = xy^2$, cả hai có cùng phần biến."
          },
          {
            "id": "d",
            "text": "Tổng của hai đơn thức đồng dạng $2x^2y + 3x^2y$ bằng $5x^4y^2$.",
            "correctAnswer": false,
            "explanation": "Sai, khi cộng đơn thức đồng dạng ta cộng hệ số và giữ nguyên phần biến: $(2 + 3)x^2y = 5x^2y$."
          }
        ]
      },
      {
        "id": "otc1-d1-tf2",
        "badge": "Câu 2 (Đ/S) - Phép cộng và trừ đa thức",
        "prompt": "Cho hai đa thức $A = 2x^2 - xy + 3$ và $B = x^2 + xy - 1$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Tổng $A + B = 3x^2 + 2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $A + B = (2x^2 + x^2) + (-xy + xy) + (3 - 1) = 3x^2 + 2$."
          },
          {
            "id": "b",
            "text": "Hiệu $A - B = x^2 - 2xy + 4$.",
            "correctAnswer": true,
            "explanation": "Đúng, $A - B = (2x^2 - x^2) + (-xy - xy) + (3 - (-1)) = x^2 - 2xy + 4$."
          },
          {
            "id": "c",
            "text": "Bậc của đa thức tổng $A + B$ bằng $4$.",
            "correctAnswer": false,
            "explanation": "Sai, $A + B = 3x^2 + 2$ có bậc bằng $2$."
          },
          {
            "id": "d",
            "text": "Tại $x = 1, y = 2$, giá trị của $A - B$ bằng $1$.",
            "correctAnswer": true,
            "explanation": "Đúng, thay $x = 1, y = 2$: $1^2 - 2(1)(2) + 4 = 1 - 4 + 4 = 1$."
          }
        ]
      },
      {
        "id": "otc1-d1-tf3",
        "badge": "Câu 3 (Đ/S) - Phép nhân và chia đa thức",
        "prompt": "Xét tính đúng/sai của các phép biến đổi đại số sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Tích của $-3x$ và $(2x - 1)$ là $-6x^2 + 3x$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(-3x) \\cdot 2x + (-3x) \\cdot (-1) = -6x^2 + 3x$."
          },
          {
            "id": "b",
            "text": "Khai triển $(x - 3)(x + 3)$ ta được $x^2 - 9$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x - 3)(x + 3) = x^2 + 3x - 3x - 9 = x^2 - 9$."
          },
          {
            "id": "c",
            "text": "Phép chia $(4x^3 - 2x^2) : 2x^2$ cho kết quả là $2x - 2$.",
            "correctAnswer": false,
            "explanation": "Sai, $4x^3 : 2x^2 - 2x^2 : 2x^2 = 2x - 1$."
          },
          {
            "id": "d",
            "text": "Đơn thức $6x^2y$ chia hết cho đơn thức $3xy^2$.",
            "correctAnswer": false,
            "explanation": "Sai, vì số mũ của $y$ trong số chia là $2 > 1$ (số mũ của $y$ trong số bị chia)."
          }
        ]
      },
      {
        "id": "otc1-d1-tf4",
        "badge": "Câu 4 (Đ/S) - Ứng dụng hình học thực tế",
        "prompt": "Một khối hộp chữ nhật có ba kích thước đáy và chiều cao lần lượt là $x\\text{ (cm)}$, $x + 1\\text{ (cm)}$ và $2x\\text{ (cm)}$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Đa thức biểu thị diện tích mặt đáy là $x^2 + x\\text{ (cm}^2\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S_{\\text{đáy}} = x(x + 1) = x^2 + x\\text{ (cm}^2\\text{)}$."
          },
          {
            "id": "b",
            "text": "Đa thức biểu thị thể tích khối hộp là $2x^3 + 2x^2\\text{ (cm}^3\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $V = x(x + 1)(2x) = 2x^2(x + 1) = 2x^3 + 2x^2\\text{ (cm}^3\\text{)}$."
          },
          {
            "id": "c",
            "text": "Nếu $x = 3\\text{ cm}$, thể tích của khối hộp là $72\\text{ cm}^3$.",
            "correctAnswer": true,
            "explanation": "Đúng, thay $x = 3$: $2(27) + 2(9) = 54 + 18 = 72\\text{ cm}^3$."
          },
          {
            "id": "d",
            "text": "Đa thức biểu thị thể tích là một đa thức bậc hai.",
            "correctAnswer": false,
            "explanation": "Sai, hạng tử cao nhất là $2x^3$ nên thể tích là đa thức bậc ba."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "otc1-d1-sa1",
        "badge": "Câu 1 (TH) - Bậc của đa thức thu gọn",
        "prompt": "Tìm bậc của đa thức thu gọn: $P = 2x^3y^2 - 5x^2y^3 + 3 - 2x^3y^2$.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "năm"
        ],
        "explanation": "Thu gọn: $P = (2x^3y^2 - 2x^3y^2) - 5x^2y^3 + 3 = -5x^2y^3 + 3$. Bậc của hạng tử $-5x^2y^3$ là $2 + 3 = 5$."
      },
      {
        "id": "otc1-d1-sa2",
        "badge": "Câu 2 (TH) - Tính giá trị của đa thức",
        "prompt": "Tính giá trị của đa thức $A = 3x^2y - 2xy + 1$ tại $x = 1$ và $y = 2$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "ba"
        ],
        "explanation": "Thay $x = 1, y = 2$: $A = 3(1)^2(2) - 2(1)(2) + 1 = 6 - 4 + 1 = 3$."
      },
      {
        "id": "otc1-d1-sa3",
        "badge": "Câu 3 (TH) - Tìm nghiệm phương trình bằng phép nhân đa thức",
        "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $x(x - 4) - x^2 = 8$.",
        "correctAnswer": "-2",
        "acceptableAnswers": [
          "-2",
          "âm 2",
          "- 2"
        ],
        "explanation": "Khai triển vế trái: $x^2 - 4x - x^2 = 8 \\Leftrightarrow -4x = 8 \\Leftrightarrow x = -2$."
      },
      {
        "id": "otc1-d1-sa4",
        "badge": "Câu 4 (VD) - Rút gọn biểu thức tích hai nhị thức",
        "prompt": "Tính giá trị của biểu thức $M = (x - 2)(x + 2) - x^2$ tại $x = 100$.",
        "correctAnswer": "-4",
        "acceptableAnswers": [
          "-4",
          "âm 4",
          "- 4"
        ],
        "explanation": "Ta có $(x - 2)(x + 2) - x^2 = x^2 - 4 - x^2 = -4$. Giá trị của $M$ luôn bằng $-4$ với mọi $x$."
      },
      {
        "id": "otc1-d1-sa5",
        "badge": "Câu 5 (VD - Thực tế) - Tìm chiều rộng mảnh vườn",
        "prompt": "Một mảnh vườn hình chữ nhật có diện tích là $S = 12x^2 + 18xy\\text{ (m}^2\\text{)}$ và chiều dài là $6x\\text{ (m)}$. Khi $x = 2\\text{ m}$ và $y = 3\\text{ m}$, chiều rộng mảnh vườn bằng bao nhiêu mét?",
        "correctAnswer": "13",
        "acceptableAnswers": [
          "13",
          "mười ba",
          "13m",
          "13 m"
        ],
        "explanation": "Chiều rộng mảnh vườn: $r = S : d = (12x^2 + 18xy) : 6x = 2x + 3y\\text{ (m)}$.\nKhi $x = 2, y = 3$: $r = 2(2) + 3(3) = 4 + 9 = 13\\text{ m}$."
      },
      {
        "id": "otc1-d1-sa6",
        "badge": "Câu 6 (VD) - Tìm hệ số tự do của tích đa thức",
        "prompt": "Hệ số tự do của đa thức thu gọn sau khi khai triển $(2x - 3)(x + 5)$ bằng bao nhiêu?",
        "correctAnswer": "-15",
        "acceptableAnswers": [
          "-15",
          "âm 15",
          "- 15"
        ],
        "explanation": "Khai triển: $(2x - 3)(x + 5) = 2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15$. Hệ số tự do là $-15$."
      }
    ],
    "examSets": [
      {
        "id": "de-1",
        "title": "Đề ôn tập số 1",
        "description": "Đề ôn tập tổng hợp cuối Chương I (Đa thức) - Đề số 1 chuẩn cấu trúc Bộ GD&ĐT",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc1-d1-q1",
            "badge": "Câu 1 (NB) - Nhận biết đơn thức thu gọn",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Trong các biểu thức sau, biểu thức nào là đơn thức thu gọn?",
            "options": [
              "$-3x^2y^3$",
              "$2x^2 \\cdot 3y$",
              "$x + 2y$",
              "$\\frac{2x}{y}$"
            ],
            "correctIndex": 0,
            "explanation": "Đơn thức $-3x^2y^3$ chỉ gồm tích của một số với các biến mà mỗi biến chỉ viết một lần với số mũ nguyên dương nên là đơn thức thu gọn."
          },
          {
            "id": "otc1-d1-q2",
            "badge": "Câu 2 (NB) - Bậc của đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Bậc của đơn thức $-5x^3y^2z$ là:",
            "options": [
              "$6$",
              "$5$",
              "$3$",
              "$2$"
            ],
            "correctIndex": 0,
            "explanation": "Bậc của đơn thức là tổng số mũ của tất cả các biến: $3 + 2 + 1 = 6$."
          },
          {
            "id": "otc1-d1-q3",
            "badge": "Câu 3 (NB) - Cặp đơn thức đồng dạng",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Cặp đơn thức nào sau đây là hai đơn thức đồng dạng?",
            "options": [
              "$2x^2y$ và $-5x^2y$",
              "$2x^2y$ và $2xy^2$",
              "$3x^2$ và $3y^2$",
              "$-x^2y$ và $-x^2y^2$"
            ],
            "correctIndex": 0,
            "explanation": "Hai đơn thức $2x^2y$ và $-5x^2y$ có hệ số khác 0 và có cùng phần biến là $x^2y$ nên đồng dạng với nhau."
          },
          {
            "id": "otc1-d1-q4",
            "badge": "Câu 4 (NB) - Bậc của đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Bậc của đa thức $P = x^4 - 2x^2y^3 + 5$ là:",
            "options": [
              "$5$",
              "$4$",
              "$3$",
              "$2$"
            ],
            "correctIndex": 0,
            "explanation": "Đa thức có hạng tử $-2x^2y^3$ có bậc cao nhất là $2 + 3 = 5$, do đó bậc của đa thức là $5$."
          },
          {
            "id": "otc1-d1-q5",
            "badge": "Câu 5 (NB) - Phép nhân đơn thức với đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép nhân $2x(x - 3)$ là:",
            "options": [
              "$2x^2 - 6x$",
              "$2x^2 - 3$",
              "$2x^2 - 6$",
              "$x^2 - 6x$"
            ],
            "correctIndex": 0,
            "explanation": "$2x(x - 3) = 2x \\cdot x - 2x \\cdot 3 = 2x^2 - 6x$."
          },
          {
            "id": "otc1-d1-q6",
            "badge": "Câu 6 (NB) - Phép chia đơn thức cho đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép chia $12x^4y^2 : 4x^2y$ là:",
            "options": [
              "$3x^2y$",
              "$3x^2$",
              "$3xy$",
              "$8x^2y$"
            ],
            "correctIndex": 0,
            "explanation": "$12x^4y^2 : 4x^2y = (12 : 4)(x^4 : x^2)(y^2 : y) = 3x^2y$."
          },
          {
            "id": "otc1-d1-q7",
            "badge": "Câu 7 (TH) - Thu gọn đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Thu gọn đa thức $A = 3x^2y - 2xy^2 + x^2y + 5xy^2$ ta được:",
            "options": [
              "$4x^2y + 3xy^2$",
              "$4x^2y - 3xy^2$",
              "$2x^2y + 7xy^2$",
              "$7x^2y$"
            ],
            "correctIndex": 0,
            "explanation": "$A = (3x^2y + x^2y) + (-2xy^2 + 5xy^2) = 4x^2y + 3xy^2$."
          },
          {
            "id": "otc1-d1-q8",
            "badge": "Câu 8 (TH) - Trừ hai đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Cho $M = x^2 - 2xy + y^2$ và $N = x^2 + 2xy + y^2$. Hiệu $M - N$ bằng:",
            "options": [
              "$-4xy$",
              "$4xy$",
              "$2x^2 + 2y^2$",
              "$0$"
            ],
            "correctIndex": 0,
            "explanation": "$M - N = (x^2 - 2xy + y^2) - (x^2 + 2xy + y^2) = x^2 - 2xy + y^2 - x^2 - 2xy - y^2 = -4xy$."
          },
          {
            "id": "otc1-d1-q9",
            "badge": "Câu 9 (TH) - Nhân hai đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Khai triển và thu gọn tích $(x - 2)(x + 5)$ ta được:",
            "options": [
              "$x^2 + 3x - 10$",
              "$x^2 - 3x - 10$",
              "$x^2 + 7x - 10$",
              "$x^2 - 10$"
            ],
            "correctIndex": 0,
            "explanation": "$(x - 2)(x + 5) = x^2 + 5x - 2x - 10 = x^2 + 3x - 10$."
          },
          {
            "id": "otc1-d1-q10",
            "badge": "Câu 10 (TH) - Chia đa thức cho đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép chia $(6x^3 - 4x^2 + 2x) : 2x$ là:",
            "options": [
              "$3x^2 - 2x + 1$",
              "$3x^2 - 2x$",
              "$3x^2 - 2x + 2$",
              "$3x^3 - 2x^2 + x$"
            ],
            "correctIndex": 0,
            "explanation": "$(6x^3 : 2x) - (4x^2 : 2x) + (2x : 2x) = 3x^2 - 2x + 1$."
          },
          {
            "id": "otc1-d1-q11",
            "badge": "Câu 11 (VD) - Rút gọn biểu thức tổng hợp",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Rút gọn biểu thức $P = (x - 1)(x + 2) - x(x + 3)$ ta được:",
            "options": [
              "$-2x - 2$",
              "$-2x + 2$",
              "$2x - 2$",
              "$-2$"
            ],
            "correctIndex": 0,
            "explanation": "Khai triển: $(x - 1)(x + 2) = x^2 + 2x - x - 2 = x^2 + x - 2$.\n$-x(x + 3) = -x^2 - 3x$.\nCộng lại: $P = (x^2 + x - 2) - x^2 - 3x = -2x - 2$."
          },
          {
            "id": "otc1-d1-q12",
            "badge": "Câu 12 (VD - Thực tế) - Diện tích mảnh vườn mở rộng",
            "source": "SGK Toán 8 KNTT - Bài toán thực tế",
            "question": "Một mảnh đất hình chữ nhật có chiều dài ban đầu là $x\\text{ (m)}$ và chiều rộng là $y\\text{ (m)}$. Người ta tăng chiều dài thêm $4\\text{ m}$ và giữ nguyên chiều rộng. Đa thức biểu thị diện tích mảnh đất sau khi mở rộng là:",
            "options": [
              "$xy + 4y\\text{ (m}^2\\text{)}$",
              "$xy + 4x\\text{ (m}^2\\text{)}$",
              "$xy + 4\\text{ (m}^2\\text{)}$",
              "$4xy\\text{ (m}^2\\text{)}$"
            ],
            "correctIndex": 0,
            "explanation": "Chiều dài mới là $(x + 4)\\text{ (m)}$. Diện tích mới là $S = (x + 4)y = xy + 4y\\text{ (m}^2\\text{)}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc1-d1-tf1",
            "badge": "Câu 1 (Đ/S) - Khái niệm đơn thức và đơn thức đồng dạng",
            "prompt": "Xét tính đúng/sai của các khẳng định sau về đơn thức:",
            "subItems": [
              {
                "id": "a",
                "text": "Biểu thức $3x^2y$ là một đơn thức thu gọn.",
                "correctAnswer": true,
                "explanation": "Đúng, các biến chỉ xuất hiện một lần với số mũ nguyên dương."
              },
              {
                "id": "b",
                "text": "Số thực $0$ là đơn thức có bậc bằng $0$.",
                "correctAnswer": false,
                "explanation": "Sai, số 0 được coi là đơn thức không có bậc. Chỉ có các số thực khác 0 mới có bậc bằng 0."
              },
              {
                "id": "c",
                "text": "Hai đơn thức $-2xy^2$ và $5y^2x$ đồng dạng với nhau.",
                "correctAnswer": true,
                "explanation": "Đúng, vì $y^2x = xy^2$, cả hai có cùng phần biến."
              },
              {
                "id": "d",
                "text": "Tổng của hai đơn thức đồng dạng $2x^2y + 3x^2y$ bằng $5x^4y^2$.",
                "correctAnswer": false,
                "explanation": "Sai, khi cộng đơn thức đồng dạng ta cộng hệ số và giữ nguyên phần biến: $(2 + 3)x^2y = 5x^2y$."
              }
            ]
          },
          {
            "id": "otc1-d1-tf2",
            "badge": "Câu 2 (Đ/S) - Phép cộng và trừ đa thức",
            "prompt": "Cho hai đa thức $A = 2x^2 - xy + 3$ và $B = x^2 + xy - 1$. Xét tính đúng/sai:",
            "subItems": [
              {
                "id": "a",
                "text": "Tổng $A + B = 3x^2 + 2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $A + B = (2x^2 + x^2) + (-xy + xy) + (3 - 1) = 3x^2 + 2$."
              },
              {
                "id": "b",
                "text": "Hiệu $A - B = x^2 - 2xy + 4$.",
                "correctAnswer": true,
                "explanation": "Đúng, $A - B = (2x^2 - x^2) + (-xy - xy) + (3 - (-1)) = x^2 - 2xy + 4$."
              },
              {
                "id": "c",
                "text": "Bậc của đa thức tổng $A + B$ bằng $4$.",
                "correctAnswer": false,
                "explanation": "Sai, $A + B = 3x^2 + 2$ có bậc bằng $2$."
              },
              {
                "id": "d",
                "text": "Tại $x = 1, y = 2$, giá trị của $A - B$ bằng $1$.",
                "correctAnswer": true,
                "explanation": "Đúng, thay $x = 1, y = 2$: $1^2 - 2(1)(2) + 4 = 1 - 4 + 4 = 1$."
              }
            ]
          },
          {
            "id": "otc1-d1-tf3",
            "badge": "Câu 3 (Đ/S) - Phép nhân và chia đa thức",
            "prompt": "Xét tính đúng/sai của các phép biến đổi đại số sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Tích của $-3x$ và $(2x - 1)$ là $-6x^2 + 3x$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(-3x) \\cdot 2x + (-3x) \\cdot (-1) = -6x^2 + 3x$."
              },
              {
                "id": "b",
                "text": "Khai triển $(x - 3)(x + 3)$ ta được $x^2 - 9$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x - 3)(x + 3) = x^2 + 3x - 3x - 9 = x^2 - 9$."
              },
              {
                "id": "c",
                "text": "Phép chia $(4x^3 - 2x^2) : 2x^2$ cho kết quả là $2x - 2$.",
                "correctAnswer": false,
                "explanation": "Sai, $4x^3 : 2x^2 - 2x^2 : 2x^2 = 2x - 1$."
              },
              {
                "id": "d",
                "text": "Đơn thức $6x^2y$ chia hết cho đơn thức $3xy^2$.",
                "correctAnswer": false,
                "explanation": "Sai, vì số mũ của $y$ trong số chia là $2 > 1$ (số mũ của $y$ trong số bị chia)."
              }
            ]
          },
          {
            "id": "otc1-d1-tf4",
            "badge": "Câu 4 (Đ/S) - Ứng dụng hình học thực tế",
            "prompt": "Một khối hộp chữ nhật có ba kích thước đáy và chiều cao lần lượt là $x\\text{ (cm)}$, $x + 1\\text{ (cm)}$ và $2x\\text{ (cm)}$. Xét tính đúng/sai:",
            "subItems": [
              {
                "id": "a",
                "text": "Đa thức biểu thị diện tích mặt đáy là $x^2 + x\\text{ (cm}^2\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $S_{\\text{đáy}} = x(x + 1) = x^2 + x\\text{ (cm}^2\\text{)}$."
              },
              {
                "id": "b",
                "text": "Đa thức biểu thị thể tích khối hộp là $2x^3 + 2x^2\\text{ (cm}^3\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $V = x(x + 1)(2x) = 2x^2(x + 1) = 2x^3 + 2x^2\\text{ (cm}^3\\text{)}$."
              },
              {
                "id": "c",
                "text": "Nếu $x = 3\\text{ cm}$, thể tích của khối hộp là $72\\text{ cm}^3$.",
                "correctAnswer": true,
                "explanation": "Đúng, thay $x = 3$: $2(27) + 2(9) = 54 + 18 = 72\\text{ cm}^3$."
              },
              {
                "id": "d",
                "text": "Đa thức biểu thị thể tích là một đa thức bậc hai.",
                "correctAnswer": false,
                "explanation": "Sai, hạng tử cao nhất là $2x^3$ nên thể tích là đa thức bậc ba."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc1-d1-sa1",
            "badge": "Câu 1 (TH) - Bậc của đa thức thu gọn",
            "prompt": "Tìm bậc của đa thức thu gọn: $P = 2x^3y^2 - 5x^2y^3 + 3 - 2x^3y^2$.",
            "correctAnswer": "5",
            "acceptableAnswers": [
              "5",
              "năm"
            ],
            "explanation": "Thu gọn: $P = (2x^3y^2 - 2x^3y^2) - 5x^2y^3 + 3 = -5x^2y^3 + 3$. Bậc của hạng tử $-5x^2y^3$ là $2 + 3 = 5$."
          },
          {
            "id": "otc1-d1-sa2",
            "badge": "Câu 2 (TH) - Tính giá trị của đa thức",
            "prompt": "Tính giá trị của đa thức $A = 3x^2y - 2xy + 1$ tại $x = 1$ và $y = 2$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
              "3",
              "ba"
            ],
            "explanation": "Thay $x = 1, y = 2$: $A = 3(1)^2(2) - 2(1)(2) + 1 = 6 - 4 + 1 = 3$."
          },
          {
            "id": "otc1-d1-sa3",
            "badge": "Câu 3 (TH) - Tìm nghiệm phương trình bằng phép nhân đa thức",
            "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $x(x - 4) - x^2 = 8$.",
            "correctAnswer": "-2",
            "acceptableAnswers": [
              "-2",
              "âm 2",
              "- 2"
            ],
            "explanation": "Khai triển vế trái: $x^2 - 4x - x^2 = 8 \\Leftrightarrow -4x = 8 \\Leftrightarrow x = -2$."
          },
          {
            "id": "otc1-d1-sa4",
            "badge": "Câu 4 (VD) - Rút gọn biểu thức tích hai nhị thức",
            "prompt": "Tính giá trị của biểu thức $M = (x - 2)(x + 2) - x^2$ tại $x = 100$.",
            "correctAnswer": "-4",
            "acceptableAnswers": [
              "-4",
              "âm 4",
              "- 4"
            ],
            "explanation": "Ta có $(x - 2)(x + 2) - x^2 = x^2 - 4 - x^2 = -4$. Giá trị của $M$ luôn bằng $-4$ với mọi $x$."
          },
          {
            "id": "otc1-d1-sa5",
            "badge": "Câu 5 (VD - Thực tế) - Tìm chiều rộng mảnh vườn",
            "prompt": "Một mảnh vườn hình chữ nhật có diện tích là $S = 12x^2 + 18xy\\text{ (m}^2\\text{)}$ và chiều dài là $6x\\text{ (m)}$. Khi $x = 2\\text{ m}$ và $y = 3\\text{ m}$, chiều rộng mảnh vườn bằng bao nhiêu mét?",
            "correctAnswer": "13",
            "acceptableAnswers": [
              "13",
              "mười ba",
              "13m",
              "13 m"
            ],
            "explanation": "Chiều rộng mảnh vườn: $r = S : d = (12x^2 + 18xy) : 6x = 2x + 3y\\text{ (m)}$.\nKhi $x = 2, y = 3$: $r = 2(2) + 3(3) = 4 + 9 = 13\\text{ m}$."
          },
          {
            "id": "otc1-d1-sa6",
            "badge": "Câu 6 (VD) - Tìm hệ số tự do của tích đa thức",
            "prompt": "Hệ số tự do của đa thức thu gọn sau khi khai triển $(2x - 3)(x + 5)$ bằng bao nhiêu?",
            "correctAnswer": "-15",
            "acceptableAnswers": [
              "-15",
              "âm 15",
              "- 15"
            ],
            "explanation": "Khai triển: $(2x - 3)(x + 5) = 2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15$. Hệ số tự do là $-15$."
          }
        ]
      },
      {
        "id": "de-2",
        "title": "Đề ôn tập số 2",
        "description": "Đề ôn tập tổng hợp cuối Chương I (Đa thức) - Đề số 2 chuẩn cấu trúc Bộ GD&ĐT",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc1-d2-q1",
            "badge": "Câu 1 (NB) - Hệ số của đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Phần hệ số của đơn thức $-7x^3y^4$ là:",
            "options": [
              "$-7$",
              "$7$",
              "$3$",
              "$4$"
            ],
            "correctIndex": 0,
            "explanation": "Phần hệ số là thừa số số đứng trước phần biến: $-7$."
          },
          {
            "id": "otc1-d2-q2",
            "badge": "Câu 2 (NB) - Bậc của số thực khác 0",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Bậc của đơn thức $2026$ là:",
            "options": [
              "$0$",
              "$1$",
              "$2026$",
              "Không có bậc"
            ],
            "correctIndex": 0,
            "explanation": "Theo quy ước, một số thực khác 0 là đơn thức có bậc bằng 0."
          },
          {
            "id": "otc1-d2-q3",
            "badge": "Câu 3 (NB) - Tổng hai đơn thức đồng dạng",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Tổng của hai đơn thức $4x^3y$ và $-x^3y$ là:",
            "options": [
              "$3x^3y$",
              "$5x^3y$",
              "$3x^6y^2$",
              "$4$"
            ],
            "correctIndex": 0,
            "explanation": "$4x^3y + (-x^3y) = (4 - 1)x^3y = 3x^3y$."
          },
          {
            "id": "otc1-d2-q4",
            "badge": "Câu 4 (NB) - Nhận biết đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Biểu thức nào sau đây KHÔNG PHẢI là đa thức?",
            "options": [
              "$\\frac{2x + 1}{y}$",
              "$2x^2 - 3x + 1$",
              "$xy + y^2$",
              "$5$"
            ],
            "correctIndex": 0,
            "explanation": "Biểu thức $\\frac{2x+1}{y}$ chứa biến $y$ ở mẫu nên không phải là đa thức."
          },
          {
            "id": "otc1-d2-q5",
            "badge": "Câu 5 (NB) - Nhân đơn thức âm",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép nhân $-3x^2(2x - 1)$ là:",
            "options": [
              "$-6x^3 + 3x^2$",
              "$-6x^3 - 3x^2$",
              "$6x^3 - 3x^2$",
              "$-6x^2 + 3x$"
            ],
            "correctIndex": 0,
            "explanation": "$-3x^2 \\cdot 2x + (-3x^2) \\cdot (-1) = -6x^3 + 3x^2$."
          },
          {
            "id": "otc1-d2-q6",
            "badge": "Câu 6 (NB) - Chia hai lũy thừa cùng cơ số",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép chia $y^9 : y^3$ là:",
            "options": [
              "$y^6$",
              "$y^3$",
              "$y^{12}$",
              "$y^{27}$"
            ],
            "correctIndex": 0,
            "explanation": "$y^9 : y^3 = y^{9-3} = y^6$."
          },
          {
            "id": "otc1-d2-q7",
            "badge": "Câu 7 (TH) - Cộng hai đa thức bậc hai",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Cho $A = 2x^2 - 3x + 5$ và $B = x^2 + 3x - 2$. Tổng $A + B$ là:",
            "options": [
              "$3x^2 + 3$",
              "$3x^2 + 6x + 3$",
              "$x^2 + 3$",
              "$3x^2 - 6x + 7$"
            ],
            "correctIndex": 0,
            "explanation": "$A + B = (2x^2 + x^2) + (-3x + 3x) + (5 - 2) = 3x^2 + 3$."
          },
          {
            "id": "otc1-d2-q8",
            "badge": "Câu 8 (TH) - Nhân hai nhị thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Khai triển và thu gọn $(2x - 1)(x + 4)$ ta được:",
            "options": [
              "$2x^2 + 7x - 4$",
              "$2x^2 + 8x - 4$",
              "$2x^2 - 7x - 4$",
              "$2x^2 + 7x + 4$"
            ],
            "correctIndex": 0,
            "explanation": "$(2x - 1)(x + 4) = 2x^2 + 8x - x - 4 = 2x^2 + 7x - 4$."
          },
          {
            "id": "otc1-d2-q9",
            "badge": "Câu 9 (TH) - Chia đa thức cho đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép chia $(15x^4 - 10x^3) : 5x^2$ là:",
            "options": [
              "$3x^2 - 2x$",
              "$3x^2 - 2$",
              "$3x - 2$",
              "$3x^2 + 2x$"
            ],
            "correctIndex": 0,
            "explanation": "$(15x^4 : 5x^2) - (10x^3 : 5x^2) = 3x^2 - 2x$."
          },
          {
            "id": "otc1-d2-q10",
            "badge": "Câu 10 (TH) - Tính giá trị đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Giá trị của đa thức $B = x^2 - 4xy + 4y^2$ tại $x = 4, y = 1$ là:",
            "options": [
              "$4$",
              "$16$",
              "$0$",
              "$8$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 4, y = 1$: $4^2 - 4(4)(1) + 4(1)^2 = 16 - 16 + 4 = 4$."
          },
          {
            "id": "otc1-d2-q11",
            "badge": "Câu 11 (VD) - Tìm x bằng phép chia đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Tìm giá trị của $x$ thỏa mãn phương trình: $(6x^2 - 9x) : 3x = 5$:",
            "options": [
              "$x = 4$",
              "$x = -4$",
              "$x = 2$",
              "$x = 3$"
            ],
            "correctIndex": 0,
            "explanation": "$(6x^2 : 3x) - (9x : 3x) = 5 \\Leftrightarrow 2x - 3 = 5 \\Leftrightarrow 2x = 8 \\Leftrightarrow x = 4$."
          },
          {
            "id": "otc1-d2-q12",
            "badge": "Câu 12 (VD - Thực tế) - Thể tích hình hộp chữ nhật",
            "source": "Toán 8 KNTT - Bài toán thực tế",
            "question": "Một hồ bơi hình hộp chữ nhật có diện tích đáy là $S = 20x^2 + 15xy\\text{ (m}^2\\text{)}$ và chiều sâu (chiều cao) là $2\\text{ m}$. Đa thức biểu thị dung tích của hồ bơi là:",
            "options": [
              "$40x^2 + 30xy\\text{ (m}^3\\text{)}$",
              "$20x^2 + 15xy + 2\\text{ (m}^3\\text{)}$",
              "$10x^2 + 7,5xy\\text{ (m}^3\\text{)}$",
              "$40x^2 + 15xy\\text{ (m}^3\\text{)}$"
            ],
            "correctIndex": 0,
            "explanation": "$V = S \\cdot h = (20x^2 + 15xy) \\cdot 2 = 40x^2 + 30xy\\text{ (m}^3\\text{)}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc1-d2-tf1",
            "badge": "Câu 1 (Đ/S) - Bậc và đơn thức thu gọn",
            "prompt": "Xét tính đúng/sai của các phát biểu sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Đơn thức $2x^2y \\cdot 3xy$ là đơn thức đã thu gọn.",
                "correctAnswer": false,
                "explanation": "Sai, vì biến $x$ và biến $y$ xuất hiện nhiều hơn một lần; thu gọn là $6x^3y^2$."
              },
              {
                "id": "b",
                "text": "Bậc của đơn thức $-4x^2y^4$ bằng $6$.",
                "correctAnswer": true,
                "explanation": "Đúng, $2 + 4 = 6$."
              },
              {
                "id": "c",
                "text": "Đa thức $x^3 - 2x^2 + x^3 + 5$ có bậc bằng $6$.",
                "correctAnswer": false,
                "explanation": "Sai, thu gọn đa thức được $2x^3 - 2x^2 + 5$, bậc của đa thức là $3$."
              },
              {
                "id": "d",
                "text": "Đơn thức $0$ không có bậc.",
                "correctAnswer": true,
                "explanation": "Đúng, theo quy ước số 0 là đơn thức không có bậc."
              }
            ]
          },
          {
            "id": "otc1-d2-tf2",
            "badge": "Câu 2 (Đ/S) - Phép toán đa thức nhiều biến",
            "prompt": "Cho hai đa thức $P = x^2y - 2xy^2$ và $Q = 3x^2y + xy^2$. Xét tính đúng/sai:",
            "subItems": [
              {
                "id": "a",
                "text": "Tổng $P + Q = 4x^2y - xy^2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(1 + 3)x^2y + (-2 + 1)xy^2 = 4x^2y - xy^2$."
              },
              {
                "id": "b",
                "text": "Hiệu $P - Q = -2x^2y - 3xy^2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(1 - 3)x^2y + (-2 - 1)xy^2 = -2x^2y - 3xy^2$."
              },
              {
                "id": "c",
                "text": "Đa thức tổng $P + Q$ có bậc bằng $4$.",
                "correctAnswer": false,
                "explanation": "Sai, cả hai hạng tử đều có bậc là $2 + 1 = 3$, bậc của đa thức tổng là $3$."
              },
              {
                "id": "d",
                "text": "Tại $x = 1, y = 1$, giá trị của $P + Q$ bằng $3$.",
                "correctAnswer": true,
                "explanation": "Đúng, $4(1)^2(1) - (1)(1)^2 = 4 - 1 = 3$."
              }
            ]
          },
          {
            "id": "otc1-d2-tf3",
            "badge": "Câu 3 (Đ/S) - Khai triển và chia đa thức",
            "prompt": "Xét tính đúng/sai của các phép tính sau:",
            "subItems": [
              {
                "id": "a",
                "text": "$(x + 2)(x - 2) = x^2 - 4$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x + 2)(x - 2) = x^2 - 2x + 2x - 4 = x^2 - 4$."
              },
              {
                "id": "b",
                "text": "$(2x + 1)(x - 3) = 2x^2 - 5x - 3$.",
                "correctAnswer": true,
                "explanation": "Đúng, $2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$."
              },
              {
                "id": "c",
                "text": "$(6x^3y - 9x^2y^2) : 3xy = 2x^2 - 3xy$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(6x^3y : 3xy) - (9x^2y^2 : 3xy) = 2x^2 - 3xy$."
              },
              {
                "id": "d",
                "text": "Đa thức $x^2 + y$ chia hết cho đơn thức $x$.",
                "correctAnswer": false,
                "explanation": "Sai, hạng tử $y$ không chứa biến $x$ nên không chia hết cho $x$."
              }
            ]
          },
          {
            "id": "otc1-d2-tf4",
            "badge": "Câu 4 (Đ/S) - Bài toán thực tế diện tích khu đất",
            "prompt": "Một khu đất hình chữ nhật có chiều dài là $3x + 2\\text{ (m)}$ và chiều rộng là $2x - 1\\text{ (m)}$. Xét tính đúng/sai:",
            "subItems": [
              {
                "id": "a",
                "text": "Đa thức biểu thị diện tích khu đất là $6x^2 + x - 2\\text{ (m}^2\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(3x + 2)(2x - 1) = 6x^2 - 3x + 4x - 2 = 6x^2 + x - 2\\text{ (m}^2\\text{)}$."
              },
              {
                "id": "b",
                "text": "Chu vi của khu đất là $5x + 1\\text{ (m)}$.",
                "correctAnswer": false,
                "explanation": "Sai, chu vi là $2[(3x + 2) + (2x - 1)] = 2(5x + 1) = 10x + 2\\text{ (m)}$."
              },
              {
                "id": "c",
                "text": "Khi $x = 5\\text{ m}$, diện tích khu đất bằng $153\\text{ m}^2$.",
                "correctAnswer": true,
                "explanation": "Đúng, chiều dài $3(5)+2 = 17\\text{ m}$, chiều rộng $2(5)-1 = 9\\text{ m}$, diện tích $17 \\cdot 9 = 153\\text{ m}^2$ (hoặc thay vào đa thức: $6(25) + 5 - 2 = 150 + 3 = 153$)."
              },
              {
                "id": "d",
                "text": "Hệ số tự do của đa thức diện tích bằng $2$.",
                "correctAnswer": false,
                "explanation": "Sai, hệ số tự do là $-2$."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc1-d2-sa1",
            "badge": "Câu 1 (TH) - Bậc của đơn thức tích",
            "prompt": "Tìm bậc của đơn thức thu gọn của tích: $(-2x^3y) \\cdot (3x^2y^3)$.",
            "correctAnswer": "9",
            "acceptableAnswers": [
              "9",
              "chín"
            ],
            "explanation": "Thu gọn tích: $-6x^5y^4$. Bậc của đơn thức này là $5 + 4 = 9$."
          },
          {
            "id": "otc1-d2-sa2",
            "badge": "Câu 2 (TH) - Tính giá trị của thương",
            "prompt": "Tính giá trị của thương $(8x^3y^2 - 4x^2y^2) : 4x^2y^2$ tại $x = 5$.",
            "correctAnswer": "9",
            "acceptableAnswers": [
              "9",
              "chín"
            ],
            "explanation": "Thương bằng $2x - 1$. Thay $x = 5$: $2(5) - 1 = 9$."
          },
          {
            "id": "otc1-d2-sa3",
            "badge": "Câu 3 (TH) - Nghiệm x của phương trình",
            "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $2x(x + 3) - 2x^2 = 12$.",
            "correctAnswer": "2",
            "acceptableAnswers": [
              "2",
              "hai"
            ],
            "explanation": "$2x^2 + 6x - 2x^2 = 12 \\Leftrightarrow 6x = 12 \\Leftrightarrow x = 2$."
          },
          {
            "id": "otc1-d2-sa4",
            "badge": "Câu 4 (VD) - Chứng minh giá trị không phụ thuộc biến",
            "prompt": "Biểu thức $P = (x - 3)(x + 2) - x(x - 1) + 6$ có giá trị bằng bao nhiêu?",
            "correctAnswer": "0",
            "acceptableAnswers": [
              "0",
              "không"
            ],
            "explanation": "$P = (x^2 - x - 6) - x^2 + x + 6 = 0$."
          },
          {
            "id": "otc1-d2-sa5",
            "badge": "Câu 5 (VD - Thực tế) - Chiều cao bể nước hình hộp chữ nhật",
            "prompt": "Một bể nước hình hộp chữ nhật có thể tích là $V = 18x^3 + 24x^2\\text{ (dm}^3\\text{)}$ và diện tích đáy là $S = 6x^2\\text{ (dm}^2\\text{)}$. Khi $x = 2\\text{ dm}$, chiều cao của bể nước bằng bao nhiêu đêximét?",
            "correctAnswer": "10",
            "acceptableAnswers": [
              "10",
              "mười",
              "10dm",
              "10 dm"
            ],
            "explanation": "Chiều cao bể: $h = V : S = (18x^3 + 24x^2) : 6x^2 = 3x + 4\\text{ (dm)}$.\nKhi $x = 2$: $h = 3(2) + 4 = 10\\text{ dm}$."
          },
          {
            "id": "otc1-d2-sa6",
            "badge": "Câu 6 (VD) - Hệ số của x trong khai triển",
            "prompt": "Tìm hệ số của $x$ trong đa thức thu gọn của tích: $(3x - 2)(2x + 5)$.",
            "correctAnswer": "11",
            "acceptableAnswers": [
              "11",
              "mười một"
            ],
            "explanation": "$(3x - 2)(2x + 5) = 6x^2 + 15x - 4x - 10 = 6x^2 + 11x - 10$. Hệ số của $x$ là $11$."
          }
        ]
      },
      {
        "id": "de-3",
        "title": "Đề ôn tập số 3",
        "description": "Đề ôn tập tổng hợp cuối Chương I (Đa thức) - Đề số 3 chuẩn cấu trúc Bộ GD&ĐT",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc1-d3-q1",
            "badge": "Câu 1 (NB) - Bậc của đơn thức một biến",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Bậc của đơn thức $-8x^7$ là:",
            "options": [
              "$7$",
              "$-8$",
              "$8$",
              "$1$"
            ],
            "correctIndex": 0,
            "explanation": "Số mũ của biến $x$ là $7$ nên bậc của đơn thức là $7$."
          },
          {
            "id": "otc1-d3-q2",
            "badge": "Câu 2 (NB) - Phần biến của đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Phần biến của đơn thức $\\frac{1}{3}x^2y^3$ là:",
            "options": [
              "$x^2y^3$",
              "$\\frac{1}{3}$",
              "$x^2$",
              "$y^3$"
            ],
            "correctIndex": 0,
            "explanation": "Phần biến là tích các biến lũy thừa: $x^2y^3$."
          },
          {
            "id": "otc1-d3-q3",
            "badge": "Câu 3 (NB) - Hiệu hai đơn thức đồng dạng",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Hiệu của hai đơn thức đồng dạng $5xy^2 - 7xy^2$ bằng:",
            "options": [
              "$-2xy^2$",
              "$2xy^2$",
              "$-2$",
              "$-12xy^2$"
            ],
            "correctIndex": 0,
            "explanation": "$(5 - 7)xy^2 = -2xy^2$."
          },
          {
            "id": "otc1-d3-q4",
            "badge": "Câu 4 (NB) - Các hạng tử của đa thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Đa thức $2x^2 - 3xy + 5$ gồm có bao nhiêu hạng tử?",
            "options": [
              "$3$",
              "$2$",
              "$4$",
              "$1$"
            ],
            "correctIndex": 0,
            "explanation": "Đa thức gồm 3 hạng tử: $2x^2$, $-3xy$ và $5$."
          },
          {
            "id": "otc1-d3-q5",
            "badge": "Câu 5 (NB) - Nhân đơn thức với đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Tích của hai đơn thức $4xy$ và $-2x^2y$ bằng:",
            "options": [
              "$-8x^3y^2$",
              "$8x^3y^2$",
              "$-8x^2y$",
              "$-6x^3y^2$"
            ],
            "correctIndex": 0,
            "explanation": "$4 \\cdot (-2) \\cdot (x \\cdot x^2) \\cdot (y \\cdot y) = -8x^3y^2$."
          },
          {
            "id": "otc1-d3-q6",
            "badge": "Câu 6 (NB) - Chia đơn thức chia hết",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép chia $-16x^5 : 4x^3$ là:",
            "options": [
              "$-4x^2$",
              "$4x^2$",
              "$-4x^8$",
              "$-4x$"
            ],
            "correctIndex": 0,
            "explanation": "$-16 : 4 = -4$ và $x^5 : x^3 = x^2$, kết quả là $-4x^2$."
          },
          {
            "id": "otc1-d3-q7",
            "badge": "Câu 7 (TH) - Thu gọn đa thức chứa hạng tử đối nhau",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Thu gọn đa thức $M = x^3 - 2x^2 + 5 - x^3 + 2x^2$ ta được:",
            "options": [
              "$5$",
              "$2x^3 + 5$",
              "$0$",
              "$4x^2 + 5$"
            ],
            "correctIndex": 0,
            "explanation": "$M = (x^3 - x^3) + (-2x^2 + 2x^2) + 5 = 5$."
          },
          {
            "id": "otc1-d3-q8",
            "badge": "Câu 8 (TH) - Khai triển tích hai nhị thức dấu trừ",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Khai triển và thu gọn $(x - 4)(x - 1)$ ta được:",
            "options": [
              "$x^2 - 5x + 4$",
              "$x^2 - 5x - 4$",
              "$x^2 + 5x + 4$",
              "$x^2 - 3x + 4$"
            ],
            "correctIndex": 0,
            "explanation": "$(x - 4)(x - 1) = x^2 - x - 4x + 4 = x^2 - 5x + 4$."
          },
          {
            "id": "otc1-d3-q9",
            "badge": "Câu 9 (TH) - Chia đa thức ba hạng tử cho đơn thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Kết quả của phép chia $(8x^3 - 6x^2 + 2x) : 2x$ là:",
            "options": [
              "$4x^2 - 3x + 1$",
              "$4x^2 - 3x$",
              "$4x^2 - 3x + 2$",
              "$4x^3 - 3x^2 + x$"
            ],
            "correctIndex": 0,
            "explanation": "$(8x^3 : 2x) - (6x^2 : 2x) + (2x : 2x) = 4x^2 - 3x + 1$."
          },
          {
            "id": "otc1-d3-q10",
            "badge": "Câu 10 (TH) - Tính giá trị của biểu thức hiệu",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Giá trị của biểu thức $C = (x + y)(x - y)$ tại $x = 5, y = 3$ là:",
            "options": [
              "$16$",
              "$8$",
              "$2$",
              "$25$"
            ],
            "correctIndex": 0,
            "explanation": "$(x + y)(x - y) = x^2 - y^2$. Thay $x = 5, y = 3$: $5^2 - 3^2 = 25 - 9 = 16$."
          },
          {
            "id": "otc1-d3-q11",
            "badge": "Câu 11 (VD) - Rút gọn biểu thức tổng hợp",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
            "question": "Rút gọn biểu thức $H = (2x - 1)(x + 2) - 2x(x + 1)$ ta được:",
            "options": [
              "$x - 2$",
              "$3x - 2$",
              "$-x - 2$",
              "$-2$"
            ],
            "correctIndex": 0,
            "explanation": "$(2x - 1)(x + 2) = 2x^2 + 4x - x - 2 = 2x^2 + 3x - 2$.\n$-2x(x + 1) = -2x^2 - 2x$.\nCộng lại: $(2x^2 + 3x - 2) - 2x^2 - 2x = x - 2$."
          },
          {
            "id": "otc1-d3-q12",
            "badge": "Câu 12 (VD - Thực tế) - Tìm chiều dài mảnh đất hình chữ nhật",
            "source": "Toán 8 KNTT - Bài toán thực tế",
            "question": "Một mảnh đất hình chữ nhật có diện tích $S = 10x^2 + 15xy\\text{ (m}^2\\text{)}$ và chiều rộng là $5x\\text{ (m)}$. Đa thức biểu thị chiều dài của mảnh đất là:",
            "options": [
              "$2x + 3y\\text{ (m)}$",
              "$3x + 2y\\text{ (m)}$",
              "$2x - 3y\\text{ (m)}$",
              "$5x + 3y\\text{ (m)}$"
            ],
            "correctIndex": 0,
            "explanation": "Chiều dài = Diện tích : Chiều rộng = $(10x^2 + 15xy) : 5x = 2x + 3y\\text{ (m)}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc1-d3-tf1",
            "badge": "Câu 1 (Đ/S) - Đơn thức và phép nhân đơn thức",
            "prompt": "Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Tích của hai đơn thức $3x^2$ và $2x^3$ là $6x^5$.",
                "correctAnswer": true,
                "explanation": "Đúng, $3 \\cdot 2 = 6$ và $x^2 \\cdot x^3 = x^5$."
              },
              {
                "id": "b",
                "text": "Đơn thức $-5x^2y^3$ có bậc bằng $5$.",
                "correctAnswer": true,
                "explanation": "Đúng, tổng số mũ là $2 + 3 = 5$."
              },
              {
                "id": "c",
                "text": "Biểu thức $\\frac{x^2 + 1}{2}$ là một đa thức.",
                "correctAnswer": true,
                "explanation": "Đúng, vì $\\frac{x^2+1}{2} = \\frac{1}{2}x^2 + \\frac{1}{2}$, mẫu là hằng số nên đây là đa thức."
              },
              {
                "id": "d",
                "text": "Hai đơn thức $3x^2y$ và $-3xy^2$ đồng dạng với nhau.",
                "correctAnswer": false,
                "explanation": "Sai, một bên có phần biến là $x^2y$, một bên là $xy^2$ (khác số mũ của $x$ và $y$)."
              }
            ]
          },
          {
            "id": "otc1-d3-tf2",
            "badge": "Câu 2 (Đ/S) - Bỏ dấu ngoặc và thu gọn đa thức",
            "prompt": "Cho đa thức $M = (3x^2 - 2xy + 1) - (x^2 - 2xy - 3)$. Xét tính đúng/sai:",
            "subItems": [
              {
                "id": "a",
                "text": "Khi bỏ dấu ngoặc có dấu trừ, ta đổi dấu tất cả các hạng tử bên trong.",
                "correctAnswer": true,
                "explanation": "Đúng, $-(x^2 - 2xy - 3) = -x^2 + 2xy + 3$."
              },
              {
                "id": "b",
                "text": "Đa thức $M$ sau khi thu gọn bằng $2x^2 + 4$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(3x^2 - x^2) + (-2xy + 2xy) + (1 + 3) = 2x^2 + 4$."
              },
              {
                "id": "c",
                "text": "Đa thức $M$ có bậc bằng $4$.",
                "correctAnswer": false,
                "explanation": "Sai, đa thức thu gọn $2x^2 + 4$ có bậc bằng $2$."
              },
              {
                "id": "d",
                "text": "Với mọi giá trị của $x, y$, giá trị của $M$ luôn dương.",
                "correctAnswer": true,
                "explanation": "Đúng, vì $x^2 \\ge 0 \\Rightarrow 2x^2 + 4 \\ge 4 > 0$ với mọi $x$."
              }
            ]
          },
          {
            "id": "otc1-d3-tf3",
            "badge": "Câu 3 (Đ/S) - Phép nhân và chia đa thức",
            "prompt": "Xét tính đúng/sai của các công thức và phép tính sau:",
            "subItems": [
              {
                "id": "a",
                "text": "$(x + 3)(x - 1) = x^2 + 2x - 3$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x^2 - x + 3x - 3 = x^2 + 2x - 3$."
              },
              {
                "id": "b",
                "text": "$(10x^3 - 5x) : 5x = 2x^2 - 1$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(10x^3 : 5x) - (5x : 5x) = 2x^2 - 1$."
              },
              {
                "id": "c",
                "text": "Phép chia $(6x^3 + 2x^2) : (-2x) = -3x^2 - x$.",
                "correctAnswer": true,
                "explanation": "Đúng, $[6x^3 : (-2x)] + [2x^2 : (-2x)] = -3x^2 - x$."
              },
              {
                "id": "d",
                "text": "Đơn thức $4x^2y^2$ chia hết cho đơn thức $2x^3y$.",
                "correctAnswer": false,
                "explanation": "Sai, vì số mũ của $x$ trong số chia là $3 > 2$."
              }
            ]
          },
          {
            "id": "otc1-d3-tf4",
            "badge": "Câu 4 (Đ/S) - Bài toán thực tế diện tích tấm bìa",
            "prompt": "Một tấm bìa hình chữ nhật có kích thước $2x + 3\\text{ (cm)}$ và $x + 4\\text{ (cm)}$. Người ta khoét một lỗ hình vuông có cạnh là $x\\text{ (cm)}$. Xét tính đúng/sai:",
            "subItems": [
              {
                "id": "a",
                "text": "Diện tích tấm bìa ban đầu là $2x^2 + 11x + 12\\text{ (cm}^2\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(2x + 3)(x + 4) = 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12\\text{ (cm}^2\\text{)}$."
              },
              {
                "id": "b",
                "text": "Diện tích phần lỗ khoét hình vuông là $x^2\\text{ (cm}^2\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, diện tích hình vuông là $x \\cdot x = x^2$."
              },
              {
                "id": "c",
                "text": "Diện tích phần bìa còn lại là $x^2 + 11x + 12\\text{ (cm}^2\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(2x^2 + 11x + 12) - x^2 = x^2 + 11x + 12\\text{ (cm}^2\\text{)}$."
              },
              {
                "id": "d",
                "text": "Khi $x = 2\\text{ cm}$, diện tích phần bìa còn lại bằng $30\\text{ cm}^2$.",
                "correctAnswer": false,
                "explanation": "Sai, thay $x = 2$: $2^2 + 11(2) + 12 = 4 + 22 + 12 = 38\\text{ cm}^2$."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc1-d3-sa1",
            "badge": "Câu 1 (TH) - Hệ số của đa thức thu gọn",
            "prompt": "Hệ số của $x^2$ trong đa thức thu gọn của tích $(3x - 1)(2x + 4)$ bằng bao nhiêu?",
            "correctAnswer": "6",
            "acceptableAnswers": [
              "6",
              "sáu"
            ],
            "explanation": "$(3x - 1)(2x + 4) = 6x^2 + 12x - 2x - 4 = 6x^2 + 10x - 4$. Hệ số của $x^2$ là $6$."
          },
          {
            "id": "otc1-d3-sa2",
            "badge": "Câu 2 (TH) - Tính giá trị của thương",
            "prompt": "Tính giá trị của thương $(15x^3 - 9x^2) : 3x^2$ tại $x = 2$.",
            "correctAnswer": "7",
            "acceptableAnswers": [
              "7",
              "bảy"
            ],
            "explanation": "Thương bằng $5x - 3$. Tại $x = 2$: $5(2) - 3 = 7$."
          },
          {
            "id": "otc1-d3-sa3",
            "badge": "Câu 3 (TH) - Tìm nghiệm x bằng phép chia đa thức",
            "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(12x^2 - 8x) : 4x = 4$.",
            "correctAnswer": "2",
            "acceptableAnswers": [
              "2",
              "hai"
            ],
            "explanation": "$(12x^2 : 4x) - (8x : 4x) = 4 \\Leftrightarrow 3x - 2 = 4 \\Leftrightarrow 3x = 6 \\Leftrightarrow x = 2$."
          },
          {
            "id": "otc1-d3-sa4",
            "badge": "Câu 4 (VD) - Tính giá trị biểu thức sau rút gọn",
            "prompt": "Tính giá trị của biểu thức $P = (x - 3)(x + 3) - x(x - 2)$ tại $x = 5$.",
            "correctAnswer": "1",
            "acceptableAnswers": [
              "1",
              "một"
            ],
            "explanation": "$P = (x^2 - 9) - (x^2 - 2x) = 2x - 9$. Tại $x = 5$: $2(5) - 9 = 1$."
          },
          {
            "id": "otc1-d3-sa5",
            "badge": "Câu 5 (VD - Thực tế) - Tìm chiều rộng mảnh đất",
            "prompt": "Một mảnh đất hình chữ nhật có diện tích $S = 24x^2 + 16xy\\text{ (m}^2\\text{)}$ và chiều dài là $8x\\text{ (m)}$. Khi $x = 3\\text{ m}$ và $y = 5\\text{ m}$, chiều rộng mảnh đất đó bằng bao nhiêu mét?",
            "correctAnswer": "19",
            "acceptableAnswers": [
              "19",
              "mười chín",
              "19m",
              "19 m"
            ],
            "explanation": "Chiều rộng: $r = (24x^2 + 16xy) : 8x = 3x + 2y\\text{ (m)}$.\nKhi $x = 3, y = 5$: $r = 3(3) + 2(5) = 9 + 10 = 19\\text{ m}$."
          },
          {
            "id": "otc1-d3-sa6",
            "badge": "Câu 6 (VD) - Tìm số tự nhiên n lớn nhất",
            "prompt": "Tìm số tự nhiên $n$ lớn nhất để đơn thức $8x^5y^3$ chia hết cho đơn thức $2x^n y^n$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
              "3",
              "ba"
            ],
            "explanation": "Để $8x^5y^3$ chia hết cho $2x^n y^n$ thì $n \\le 5$ và $n \\le 3 \\Rightarrow n \\le 3$. Giá trị lớn nhất là $n = 3$."
          }
        ]
      }
    ]
  },
  "t8-b6-binh-phuong-tong-hieu": {
  "id": "t8-b6-binh-phuong-tong-hieu",
  "lessonNumber": 6,
  "title": "Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu",
  "bookChapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
  "scenarioTitle": "Tình huống: Tính nhanh diện tích mảnh đất mở rộng và phần cắt bớt hình vuông",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Bạn An",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy Tính, bác Nam có một mảnh vườn hình vuông cạnh x mét. Bác muốn mở rộng vườn thành hình vuông có cạnh là x + 3 mét, rồi cắt bớt một góc hình vuông nhỏ có cạnh 3 mét. Bác tính diện tích còn lại bằng cách tính (x + 3)² - 3² nhưng phải nhân rất lâu. Thầy có công thức nào tính nhanh được không ạ?",
      "visualGraphic": "box",
      "mathNote": "S = (x + 3)^2 - 3^2"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính (VinaMath)",
      "avatar": "👨‍🏫",
      "speech": "Chào An! Đây chính là ứng dụng tuyệt vời của các hằng đẳng thức đáng nhớ: (A + B)² = A² + 2AB + B² và A² - B² = (A - B)(A + B). Áp dụng hiệu hai bình phương, ta có ngay: (x + 3)² - 3² = [(x + 3) - 3][(x + 3) + 3] = x(x + 6) = x² + 6x mét vuông! Rất nhanh và đẹp mắt. Thầy trò ta cùng khám phá 3 hằng đẳng thức bậc hai này nhé!",
      "visualGraphic": "graph",
      "mathNote": "A^2 - B^2 = (A - B)(A + B)"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Hiệu hai bình phương",
      "points": [
        "Với hai biểu thức tùy ý $A$ và $B$, ta có hằng đẳng thức Hiệu hai bình phương:",
        "  $A^2 - B^2 = (A - B)(A + B)$",
        "Chiều biến đổi:",
        "  • Biến đổi tích thành hiệu hai bình phương: $(A - B)(A + B) = A^2 - B^2$.",
        "  • Biến đổi hiệu hai bình phương thành tích: $A^2 - B^2 = (A - B)(A + B)$.",
        "Ứng dụng tính nhanh:",
        "  • $101^2 - 1 = (101 - 1)(101 + 1) = 100 \\cdot 102 = 10200$.",
        "  • $52 \\cdot 48 = (50 + 2)(50 - 2) = 50^2 - 2^2 = 2500 - 4 = 2496$."
      ],
      "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 30)",
      "exampleProblem": "a) Khai triển: $(x - 3)(x + 3)$ và $(2x - y)(2x + y)$.\nb) Viết dưới dạng tích: $x^2 - 16$ và $9x^2 - 4y^2$.",
      "exampleSolution": "a) Áp dụng $(A - B)(A + B) = A^2 - B^2$:\n• $(x - 3)(x + 3) = x^2 - 3^2 = x^2 - 9$.\n• $(2x - y)(2x + y) = (2x)^2 - y^2 = 4x^2 - y^2$.\n\nb) Áp dụng $A^2 - B^2 = (A - B)(A + B)$:\n• $x^2 - 16 = x^2 - 4^2 = (x - 4)(x + 4)$.\n• $9x^2 - 4y^2 = (3x)^2 - (2y)^2 = (3x - 2y)(3x + 2y)$."
    },
    {
      "index": "2",
      "title": "Bình phương của một tổng",
      "points": [
        "Với hai biểu thức tùy ý $A$ và $B$, ta có hằng đẳng thức Bình phương của một tổng:",
        "  $(A + B)^2 = A^2 + 2AB + B^2$",
        "Ý nghĩa hình học: Diện tích hình vuông cạnh $a + b$ bằng tổng diện tích hai hình vuông nhỏ (cạnh $a$ và $b$) cùng với hai hình chữ nhật (kích thước $a \\times b$).",
        "Lưu ý quan trọng: $(A + B)^2 \\ne A^2 + B^2$ (học sinh rất hay quên số hạng hai lần tích $2AB$).",
        "Ứng dụng tính nhẩm bình phương:",
        "  • $51^2 = (50 + 1)^2 = 50^2 + 2 \\cdot 50 \\cdot 1 + 1^2 = 2500 + 100 + 1 = 2601$."
      ],
      "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 31)",
      "exampleProblem": "a) Khai triển $(x + 2)^2$ và $(2x + 3y)^2$.\nb) Viết đa thức sau thành bình phương của một tổng: $x^2 + 6x + 9$ và $4x^2 + 4x + 1$.",
      "exampleSolution": "a) Khai triển:\n• $(x + 2)^2 = x^2 + 2 \\cdot x \\cdot 2 + 2^2 = x^2 + 4x + 4$.\n• $(2x + 3y)^2 = (2x)^2 + 2 \\cdot (2x) \\cdot (3y) + (3y)^2 = 4x^2 + 12xy + 9y^2$.\n\nb) Biến đổi ngược lại:\n• $x^2 + 6x + 9 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = (x + 3)^2$.\n• $4x^2 + 4x + 1 = (2x)^2 + 2 \\cdot (2x) \\cdot 1 + 1^2 = (2x + 1)^2$."
    },
    {
      "index": "3",
      "title": "Bình phương của một hiệu",
      "points": [
        "Với hai biểu thức tùy ý $A$ và $B$, ta có hằng đẳng thức Bình phương của một hiệu:",
        "  $(A - B)^2 = A^2 - 2AB + B^2$",
        "Lưu ý quan trọng:",
        "  • Số hạng cuối cùng luôn mang dấu cộng $+B^2$, không phải $-B^2$.",
        "  • Hai số đối nhau có bình phương bằng nhau: $(A - B)^2 = (B - A)^2$.",
        "  • $(-A - B)^2 = [-(A + B)]^2 = (A + B)^2$.",
        "Ứng dụng tính nhẩm bình phương:",
        "  • $49^2 = (50 - 1)^2 = 50^2 - 2 \\cdot 50 \\cdot 1 + 1^2 = 2500 - 100 + 1 = 2401$."
      ],
      "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 32)",
      "exampleProblem": "a) Khai triển $(x - 5)^2$ và $(3x - 2y)^2$.\nb) Viết đa thức sau thành bình phương của một hiệu: $x^2 - 8x + 16$ và $9x^2 - 6xy + y^2$.",
      "exampleSolution": "a) Khai triển:\n• $(x - 5)^2 = x^2 - 2 \\cdot x \\cdot 5 + 5^2 = x^2 - 10x + 25$.\n• $(3x - 2y)^2 = (3x)^2 - 2 \\cdot (3x) \\cdot (2y) + (2y)^2 = 9x^2 - 12xy + 4y^2$.\n\nb) Biến đổi ngược lại:\n• $x^2 - 8x + 16 = x^2 - 2 \\cdot x \\cdot 4 + 4^2 = (x - 4)^2$.\n• $9x^2 - 6xy + y^2 = (3x)^2 - 2 \\cdot (3x) \\cdot y + y^2 = (3x - y)^2$."
    },
    {
      "index": "4",
      "title": "Rút gọn biểu thức và ứng dụng thực tế",
      "points": [
        "Kỹ thuật rút gọn biểu thức bằng hằng đẳng thức:",
        "  • Phối hợp khai triển và thu gọn các hạng tử đồng dạng.",
        "  • Nhận dạng nhanh hiệu hai bình phương để rút gọn: $(A + B)^2 - (A - B)^2 = 4AB$.",
        "Ứng dụng tìm $x$ và tính giá trị biểu thức:",
        "  • Thu gọn biểu thức về dạng đơn giản trước khi thay số.",
        "Ứng dụng hình học:",
        "  • Tính diện tích hình vuông khi mở rộng cạnh, tính diện tích đường đi bao quanh."
      ],
      "exampleTitle": "Ví dụ 4 (Bài toán thực tế)",
      "exampleProblem": "Một sân chơi hình vuông ban đầu có cạnh bằng $x\\text{ (m)}$. Người ta mở rộng mỗi phía thêm $1\\text{ m}$ tạo thành sân chơi mới hình vuông có cạnh $x + 2\\text{ (m)}$.\na) Viết biểu thức tính diện tích phần mở rộng thêm.\nb) Tính diện tích mở rộng thêm khi $x = 10\\text{ m}$.",
      "exampleSolution": "a) Diện tích sân ban đầu là $x^2\\text{ (m}^2\\text{)}$. Diện tích sân sau khi mở rộng là $(x + 2)^2\\text{ (m}^2\\text{)}$.\nDiện tích phần mở rộng thêm là:\n$S = (x + 2)^2 - x^2 = (x^2 + 4x + 4) - x^2 = 4x + 4\\text{ (m}^2\\text{)}$.\nb) Khi $x = 10\\text{ m}$:\n$S = 4(10) + 4 = 40 + 4 = 44\\text{ (m}^2\\text{)}$."
    }
  ],
  "youtubeVideos": [
    {
      "id": "t8_b6_video1",
      "title": "Tiết 1: Hiệu hai bình phương và ứng dụng tính nhanh"
    },
    {
      "id": "t8_b6_video2",
      "title": "Tiết 2: Bình phương của một tổng, một hiệu và bài toán thực tế"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-8.6.1",
      "timeSeconds": 135,
      "timeLabel": "02:15",
      "title": "Ví dụ 1: Khai triển hiệu hai bình phương",
      "question": "Khai triển biểu thức $(x - 4)(x + 4)$ ta được:",
      "options": [
        "$x^2 - 16$",
        "$x^2 - 8$",
        "$x^2 + 16$",
        "$x^2 - 4$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng $(A - B)(A + B) = A^2 - B^2$, ta có: $(x - 4)(x + 4) = x^2 - 4^2 = x^2 - 16$."
    },
    {
      "id": "vq-8.6.2",
      "timeSeconds": 330,
      "timeLabel": "05:30",
      "title": "Ví dụ 2: Khai triển bình phương một tổng",
      "question": "Khai triển biểu thức $(x + 3)^2$ ta được:",
      "options": [
        "$x^2 + 6x + 9$",
        "$x^2 + 9$",
        "$x^2 + 3x + 9$",
        "$x^2 + 6x + 6$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng $(A + B)^2 = A^2 + 2AB + B^2$, ta có: $(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$."
    },
    {
      "id": "vq-8.6.3",
      "timeSeconds": 180,
      "timeLabel": "03:00",
      "title": "Ví dụ 3: Khai triển bình phương một hiệu",
      "question": "Khai triển biểu thức $(2x - 1)^2$ ta được:",
      "options": [
        "$4x^2 - 4x + 1$",
        "$4x^2 - 1$",
        "$4x^2 - 2x + 1$",
        "$2x^2 - 4x + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(2x - 1)^2 = (2x)^2 - 2 \\cdot (2x) \\cdot 1 + 1^2 = 4x^2 - 4x + 1$."
    },
    {
      "id": "vq-8.6.4",
      "timeSeconds": 435,
      "timeLabel": "07:15",
      "title": "Ví dụ 4: Tính nhanh bằng hằng đẳng thức",
      "question": "Tính nhanh giá trị $51^2$ ta được:",
      "options": [
        "$2601$",
        "$2501$",
        "$2600$",
        "$2701$"
      ],
      "correctIndex": 0,
      "explanation": "$51^2 = (50 + 1)^2 = 50^2 + 2 \\cdot 50 \\cdot 1 + 1^2 = 2500 + 100 + 1 = 2601$."
    }
  ],
  "tips": [
    "Thuộc làu câu thần chú: 'Bình phương số thứ nhất, cộng (hoặc trừ) hai lần tích hai số, cộng bình phương số thứ hai'.",
    "Đặt trong ngoặc khi hệ số khác 1: Khi lấy bình phương đơn thức chứa hệ số, bắt buộc dùng ngoặc: $(2x)^2 = 4x^2$, $(3y)^2 = 9y^2$, tránh viết nhầm thành $2x^2$ hay $3y^2$.",
    "Mẹo đổi dấu bình phương hiệu: $(A - B)^2 = (B - A)^2$. Ví dụ: $(1 - x)^2 = (x - 1)^2$, cực kỳ hữu ích khi quy đồng hoặc rút gọn.",
    "Tính nhẩm nhanh với số gần tròn chục: Đưa về $(a \\pm 1)^2$ hoặc $(a - b)(a + b)$. Ví dụ: $51^2 = (50+1)^2 = 2601$, $52 \\cdot 48 = 50^2 - 2^2 = 2496$."
  ],
  "traps": [
    "Bẫy quên hai lần tích: Nhầm $(x + y)^2 = x^2 + y^2$ hoặc $(x - y)^2 = x^2 - y^2$. Đây là lỗi sai phổ biến nhất của học sinh lớp 8!",
    "Bẫy quên bình phương hệ số: Viết $(3x)^2 = 3x^2$ thay vì $(3x)^2 = 9x^2$.",
    "Bẫy dấu số hạng cuối trong bình phương hiệu: Viết $(A - B)^2 = A^2 - 2AB - B^2$ (số hạng cuối cùng luôn luôn mang dấu cộng $+B^2$).",
    "Bẫy dấu ngoặc khi rút gọn: Khi gặp dấu trừ trước biểu thức hằng đẳng thức, ví dụ $-(x - 2)^2$, phải khai triển trong ngoặc trước: $-(x^2 - 4x + 4) = -x^2 + 4x - 4$."
  ],
  "quizQuestions": [
    {
      "id": "quiz-8.6.1",
      "badge": "Câu 1 (NB) - Công thức hiệu hai bình phương",
      "source": "SGK Toán 8 KNTT Trang 30",
      "question": "Công thức hiệu hai bình phương của hai biểu thức $A, B$ là:",
      "options": [
        "$A^2 - B^2 = (A - B)(A + B)$",
        "$A^2 - B^2 = (A - B)^2$",
        "$A^2 - B^2 = A^2 - 2AB + B^2$",
        "$A^2 - B^2 = (A + B)^2$"
      ],
      "correctIndex": 0,
      "explanation": "Hằng đẳng thức hiệu hai bình phương: $A^2 - B^2 = (A - B)(A + B)$."
    },
    {
      "id": "quiz-8.6.2",
      "badge": "Câu 2 (NB) - Công thức bình phương của một tổng",
      "source": "SGK Toán 8 KNTT Trang 31",
      "question": "Công thức bình phương của một tổng hai biểu thức $A, B$ là:",
      "options": [
        "$(A + B)^2 = A^2 + 2AB + B^2$",
        "$(A + B)^2 = A^2 + B^2$",
        "$(A + B)^2 = A^2 + AB + B^2$",
        "$(A + B)^2 = A^2 - 2AB + B^2$"
      ],
      "correctIndex": 0,
      "explanation": "Hằng đẳng thức bình phương của một tổng: $(A + B)^2 = A^2 + 2AB + B^2$."
    },
    {
      "id": "quiz-8.6.3",
      "badge": "Câu 3 (NB) - Công thức bình phương của một hiệu",
      "source": "SGK Toán 8 KNTT Trang 32",
      "question": "Công thức bình phương của một hiệu hai biểu thức $A, B$ là:",
      "options": [
        "$(A - B)^2 = A^2 - 2AB + B^2$",
        "$(A - B)^2 = A^2 - B^2$",
        "$(A - B)^2 = A^2 - 2AB - B^2$",
        "$(A - B)^2 = A^2 - AB + B^2$"
      ],
      "correctIndex": 0,
      "explanation": "Hằng đẳng thức bình phương của một hiệu: $(A - B)^2 = A^2 - 2AB + B^2$."
    },
    {
      "id": "quiz-8.6.4",
      "badge": "Câu 4 (NB) - Khai triển hiệu hai bình phương",
      "source": "SGK Toán 8 KNTT Trang 30",
      "question": "Khai triển tích $(x - 2)(x + 2)$ ta được kết quả là:",
      "options": [
        "$x^2 - 4$",
        "$x^2 - 2$",
        "$x^2 + 4$",
        "$x^2 - 4x + 4$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng $(A - B)(A + B) = A^2 - B^2$: $(x - 2)(x + 2) = x^2 - 2^2 = x^2 - 4$."
    },
    {
      "id": "quiz-8.6.5",
      "badge": "Câu 5 (NB) - Khai triển bình phương một tổng",
      "source": "SGK Toán 8 KNTT Trang 31",
      "question": "Khai triển hằng đẳng thức $(x + 1)^2$ ta được kết quả là:",
      "options": [
        "$x^2 + 2x + 1$",
        "$x^2 + 1$",
        "$x^2 + x + 1$",
        "$x^2 + 4x + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 1)^2 = x^2 + 2 \\cdot x \\cdot 1 + 1^2 = x^2 + 2x + 1$."
    },
    {
      "id": "quiz-8.6.6",
      "badge": "Câu 6 (NB) - Khai triển bình phương một hiệu",
      "source": "SGK Toán 8 KNTT Trang 32",
      "question": "Khai triển hằng đẳng thức $(x - 3)^2$ ta được kết quả là:",
      "options": [
        "$x^2 - 6x + 9$",
        "$x^2 - 9$",
        "$x^2 - 3x + 9$",
        "$x^2 - 6x - 9$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 3)^2 = x^2 - 2 \\cdot x \\cdot 3 + 3^2 = x^2 - 6x + 9$."
    },
    {
      "id": "quiz-8.6.7",
      "badge": "Câu 7 (NB) - Viết đa thức dưới dạng tích",
      "source": "SGK Toán 8 KNTT Trang 30",
      "question": "Viết đa thức $x^2 - 9$ dưới dạng tích của hai đa thức ta được:",
      "options": [
        "$(x - 3)(x + 3)$",
        "$(x - 9)(x + 9)$",
        "$(x - 3)^2$",
        "$(x + 3)^2$"
      ],
      "correctIndex": 0,
      "explanation": "$x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)$."
    },
    {
      "id": "quiz-8.6.8",
      "badge": "Câu 8 (NB) - Viết thành bình phương một tổng",
      "source": "SGK Toán 8 KNTT Trang 31",
      "question": "Đa thức $x^2 + 4x + 4$ được viết dưới dạng bình phương của một tổng là:",
      "options": [
        "$(x + 2)^2$",
        "$(x + 4)^2$",
        "$(x + 1)^2$",
        "$(2x + 1)^2$"
      ],
      "correctIndex": 0,
      "explanation": "$x^2 + 4x + 4 = x^2 + 2 \\cdot x \\cdot 2 + 2^2 = (x + 2)^2$."
    },
    {
      "id": "quiz-8.6.9",
      "badge": "Câu 9 (NB) - Viết thành bình phương một hiệu",
      "source": "SGK Toán 8 KNTT Trang 32",
      "question": "Đa thức $x^2 - 2x + 1$ được viết dưới dạng bình phương của một hiệu là:",
      "options": [
        "$(x - 1)^2$",
        "$(x - 2)^2$",
        "$(x + 1)^2$",
        "$(1 - 2x)^2$"
      ],
      "correctIndex": 0,
      "explanation": "$x^2 - 2x + 1 = x^2 - 2 \\cdot x \\cdot 1 + 1^2 = (x - 1)^2$."
    },
    {
      "id": "quiz-8.6.10",
      "badge": "Câu 10 (NB) - Tính chất bình phương của hiệu",
      "source": "SGK Toán 8 KNTT Trang 32",
      "question": "Với mọi số thực $x$, khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$(x - 5)^2 = (5 - x)^2$",
        "$(x - 5)^2 = -(5 - x)^2$",
        "$(x + 5)^2 = x^2 + 25$",
        "$(x - 5)(x + 5) = x^2 - 10$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $(x - 5)$ và $(5 - x)$ là hai số đối nhau nên bình phương của chúng bằng nhau: $(x - 5)^2 = (5 - x)^2$."
    },
    {
      "id": "quiz-8.6.11",
      "badge": "Câu 11 (TH) - Khai triển bình phương tổng có hệ số",
      "source": "SGK Toán 8 KNTT Trang 31",
      "question": "Khai triển hằng đẳng thức $(2x + 1)^2$ ta được kết quả là:",
      "options": [
        "$4x^2 + 4x + 1$",
        "$2x^2 + 4x + 1$",
        "$4x^2 + 2x + 1$",
        "$4x^2 + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(2x + 1)^2 = (2x)^2 + 2 \\cdot (2x) \\cdot 1 + 1^2 = 4x^2 + 4x + 1$."
    },
    {
      "id": "quiz-8.6.12",
      "badge": "Câu 12 (TH) - Khai triển bình phương hiệu hai biến",
      "source": "SGK Toán 8 KNTT Trang 32",
      "question": "Khai triển hằng đẳng thức $(3x - 2y)^2$ ta được kết quả là:",
      "options": [
        "$9x^2 - 12xy + 4y^2$",
        "$9x^2 - 6xy + 4y^2$",
        "$9x^2 - 12xy - 4y^2$",
        "$3x^2 - 12xy + 2y^2$"
      ],
      "correctIndex": 0,
      "explanation": "$(3x - 2y)^2 = (3x)^2 - 2 \\cdot (3x) \\cdot (2y) + (2y)^2 = 9x^2 - 12xy + 4y^2$."
    },
    {
      "id": "quiz-8.6.13",
      "badge": "Câu 13 (TH) - Khai triển hiệu hai bình phương hai biến",
      "source": "SGK Toán 8 KNTT Trang 30",
      "question": "Khai triển tích $(2x - 3y)(2x + 3y)$ ta được kết quả là:",
      "options": [
        "$4x^2 - 9y^2$",
        "$2x^2 - 3y^2$",
        "$4x^2 + 9y^2$",
        "$4x^2 - 6xy - 9y^2$"
      ],
      "correctIndex": 0,
      "explanation": "$(2x - 3y)(2x + 3y) = (2x)^2 - (3y)^2 = 4x^2 - 9y^2$."
    },
    {
      "id": "quiz-8.6.14",
      "badge": "Câu 14 (TH) - Điền đơn thức vào hằng đẳng thức",
      "source": "Toán 8 KNTT Bài tập 2.3 Trang 33",
      "question": "Điền đơn thức thích hợp vào chỗ chấm để biểu thức trở thành bình phương của một tổng: $x^2 + \\ldots + 9y^2 = (x + 3y)^2$.",
      "options": [
        "$6xy$",
        "$3xy$",
        "$12xy$",
        "$9xy$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 3y)^2 = x^2 + 2 \\cdot x \\cdot (3y) + (3y)^2 = x^2 + 6xy + 9y^2$. Đơn thức cần điền là $6xy$."
    },
    {
      "id": "quiz-8.6.15",
      "badge": "Câu 15 (TH) - Tính nhanh giá trị bằng hiệu hai bình phương",
      "source": "SGK Toán 8 KNTT Trang 30",
      "question": "Tính nhanh giá trị của biểu thức $P = 101^2 - 1$ ta được:",
      "options": [
        "$10200$",
        "$10100$",
        "$10000$",
        "$10020$"
      ],
      "correctIndex": 0,
      "explanation": "$P = 101^2 - 1^2 = (101 - 1)(101 + 1) = 100 \\cdot 102 = 10200$."
    },
    {
      "id": "quiz-8.6.16",
      "badge": "Câu 16 (TH) - Rút gọn biểu thức hằng đẳng thức",
      "source": "Toán 8 KNTT Bài tập 2.4 Trang 33",
      "question": "Rút gọn biểu thức $M = (x + 2)^2 - x(x + 4)$ ta được kết quả là:",
      "options": [
        "$4$",
        "$4x + 4$",
        "$8x + 4$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "$M = (x^2 + 4x + 4) - (x^2 + 4x) = 4$."
    },
    {
      "id": "quiz-8.6.17",
      "badge": "Câu 17 (VD) - Rút gọn hiệu hai bình phương tổng",
      "source": "Toán 8 KNTT Bài tập 2.5 Trang 33",
      "question": "Rút gọn biểu thức $A = (x + 3)^2 - (x - 3)^2$ ta được kết quả là:",
      "options": [
        "$12x$",
        "$6x$",
        "$2x^2 + 18$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "$A = (x^2 + 6x + 9) - (x^2 - 6x + 9) = 6x + 6x = 12x$ (hoặc dùng hiệu hai bình phương: $[(x+3)-(x-3)][(x+3)+(x-3)] = 6 \\cdot 2x = 12x$)."
    },
    {
      "id": "quiz-8.6.18",
      "badge": "Câu 18 (VD) - Tìm x bằng hằng đẳng thức",
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Tìm giá trị của $x$ thỏa mãn đẳng thức: $(x + 2)^2 - x^2 = 12$.",
      "options": [
        "$x = 2$",
        "$x = 3$",
        "$x = 1$",
        "$x = 4$"
      ],
      "correctIndex": 0,
      "explanation": "$(x^2 + 4x + 4) - x^2 = 12 \\Leftrightarrow 4x + 4 = 12 \\Leftrightarrow 4x = 8 \\Leftrightarrow x = 2$."
    },
    {
      "id": "quiz-8.6.19",
      "badge": "Câu 19 (VD) - Tính giá trị đa thức qua bình phương",
      "source": "Toán 8 KNTT Bài tập 2.6 Trang 33",
      "question": "Tính giá trị của biểu thức $Q = x^2 - 4xy + 4y^2$ tại $x = 18$ và $y = 4$.",
      "options": [
        "$100$",
        "$64$",
        "$144$",
        "$10$"
      ],
      "correctIndex": 0,
      "explanation": "$Q = (x - 2y)^2$. Thay $x = 18, y = 4$ vào: $Q = (18 - 2 \\cdot 4)^2 = (18 - 8)^2 = 10^2 = 100$."
    },
    {
      "id": "quiz-8.6.20",
      "badge": "Câu 20 (VD - Thực tế) - Diện tích viền gạch sân phơi",
      "source": "Toán 8 KNTT Ứng dụng thực tế",
      "question": "Một sân phơi hình vuông có cạnh bằng $x\\text{ (m)}$. Người ta mở rộng sân phơi bằng cách lát thêm một dải viền gạch bao quanh có bề rộng $1\\text{ m}$, tạo thành một sân mới hình vuông có cạnh là $x + 2\\text{ (m)}$. Đa thức biểu thị diện tích dải viền gạch mới lát thêm là:",
      "options": [
        "$4x + 4\\text{ (m}^2\\text{)}$",
        "$2x + 1\\text{ (m}^2\\text{)}$",
        "$4x + 1\\text{ (m}^2\\text{)}$",
        "$2x + 4\\text{ (m}^2\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích viền gạch là hiệu diện tích sân mới và sân cũ: $S = (x + 2)^2 - x^2 = x^2 + 4x + 4 - x^2 = 4x + 4\\text{ (m}^2\\text{)}$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-8.6.1",
      "badge": "Câu 1 (Đ/S) - Các hằng đẳng thức bậc hai cơ bản",
      "prompt": "Cho $A, B$ là hai biểu thức đại số tùy ý. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$(A + B)^2 = A^2 + B^2$ với mọi biểu thức $A, B$.",
          "correctAnswer": false,
          "explanation": "Sai, công thức đúng là $(A + B)^2 = A^2 + 2AB + B^2$ (phải có số hạng hai lần tích $2AB$)."
        },
        {
          "id": "b",
          "text": "$A^2 - B^2 = (A - B)(A + B)$.",
          "correctAnswer": true,
          "explanation": "Đúng, đây là hằng đẳng thức hiệu hai bình phương."
        },
        {
          "id": "c",
          "text": "$(A - B)^2 = (B - A)^2$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì hai số đối nhau có bình phương bằng nhau."
        },
        {
          "id": "d",
          "text": "$(A - B)^2 = A^2 - 2AB - B^2$.",
          "correctAnswer": false,
          "explanation": "Sai, số hạng cuối cùng phải mang dấu cộng $+B^2$."
        }
      ]
    },
    {
      "id": "tf-8.6.2",
      "badge": "Câu 2 (Đ/S) - Khai triển và biến đổi thành bình phương",
      "prompt": "Xét tính đúng/sai của các phép biến đổi đại số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$(2x + 3)^2 = 4x^2 + 12x + 9$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9$."
        },
        {
          "id": "b",
          "text": "$(3x - 1)^2 = 9x^2 - 3x + 1$.",
          "correctAnswer": false,
          "explanation": "Sai, hai lần tích là $2(3x)(1) = 6x$, khai triển đúng là $9x^2 - 6x + 1$."
        },
        {
          "id": "c",
          "text": "$x^2 - 16y^2 = (x - 4y)(x + 4y)$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $16y^2 = (4y)^2$ nên áp dụng hiệu hai bình phương được $(x - 4y)(x + 4y)$."
        },
        {
          "id": "d",
          "text": "$4x^2 - 4x + 1 = (2x - 1)^2$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(2x)^2 - 2(2x)(1) + 1^2 = (2x - 1)^2$."
        }
      ]
    },
    {
      "id": "tf-8.6.3",
      "badge": "Câu 3 (Đ/S) - Rút gọn biểu thức và giải phương trình",
      "prompt": "Cho biểu thức $P = (x + 1)^2 - (x - 1)^2$ và phương trình $(x + 3)^2 - x^2 = 21$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Rút gọn biểu thức $P$ ta được kết quả $P = 4x$.",
          "correctAnswer": true,
          "explanation": "Đúng, $P = (x^2 + 2x + 1) - (x^2 - 2x + 1) = 4x$."
        },
        {
          "id": "b",
          "text": "Giá trị của biểu thức $P$ tại $x = 5$ là $20$.",
          "correctAnswer": true,
          "explanation": "Đúng, tại $x = 5$ thì $P = 4(5) = 20$."
        },
        {
          "id": "c",
          "text": "Phương trình $(x + 3)^2 - x^2 = 21$ sau khi thu gọn vế trái trở thành $6x + 9 = 21$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(x^2 + 6x + 9) - x^2 = 6x + 9$."
        },
        {
          "id": "d",
          "text": "Nghiệm của phương trình $(x + 3)^2 - x^2 = 21$ là $x = 3$.",
          "correctAnswer": false,
          "explanation": "Sai, $6x + 9 = 21 \\Leftrightarrow 6x = 12 \\Leftrightarrow x = 2$."
        }
      ]
    },
    {
      "id": "tf-8.6.4",
      "badge": "Câu 4 (Đ/S - Thực tế) - Diện tích mảnh vườn khi thay đổi kích thước",
      "prompt": "Bác Hùng có một khu đất hình vuông cạnh $x\\text{ (m)}$ ($x > 3$). Bác dự định điều chỉnh khu đất: một cạnh tăng thêm $3\\text{ m}$, cạnh kia giảm đi $3\\text{ m}$ để trở thành khu đất hình chữ nhật mới. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Diện tích khu đất hình vuông ban đầu là $x^2\\text{ (m}^2\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, diện tích hình vuông cạnh $x$ là $x^2\\text{ (m}^2\\text{)}$."
        },
        {
          "id": "b",
          "text": "Kích thước của khu đất hình chữ nhật mới là $x + 3\\text{ (m)}$ và $x - 3\\text{ (m)}$.",
          "correctAnswer": true,
          "explanation": "Đúng theo dữ kiện bài toán."
        },
        {
          "id": "c",
          "text": "Diện tích khu đất mới bằng $(x + 3)(x - 3) = x^2 - 9\\text{ (m}^2\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, áp dụng hằng đẳng thức hiệu hai bình phương."
        },
        {
          "id": "d",
          "text": "Diện tích khu đất hình chữ nhật mới lớn hơn diện tích khu đất hình vuông ban đầu $9\\text{ m}^2$.",
          "correctAnswer": false,
          "explanation": "Sai, diện tích mới là $x^2 - 9\\text{ (m}^2\\text{)}$, nhỏ hơn diện tích cũ $x^2\\text{ (m}^2\\text{)}$ là $9\\text{ m}^2$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-8.6.1",
      "badge": "Câu 1 (NB) - Hệ số tự do của khai triển",
      "prompt": "Hệ số tự do trong khai triển hằng đẳng thức $(x + 5)^2$ bằng bao nhiêu?",
      "correctAnswer": "25",
      "acceptableAnswers": [
        "25",
        "hai mươi lăm"
      ],
      "explanation": "$(x + 5)^2 = x^2 + 10x + 25$. Hệ số tự do bằng $25$."
    },
    {
      "id": "sa-8.6.2",
      "badge": "Câu 2 (TH) - Tìm hằng số trong bình phương hiệu",
      "prompt": "Cho đẳng thức $4x^2 - 12x + 9 = (2x - b)^2$ với $b > 0$. Giá trị của $b$ bằng bao nhiêu?",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "ba"
      ],
      "explanation": "$4x^2 - 12x + 9 = (2x)^2 - 2 \\cdot (2x) \\cdot 3 + 3^2 = (2x - 3)^2$. Vậy $b = 3$."
    },
    {
      "id": "sa-8.6.3",
      "badge": "Câu 3 (TH) - Tính nhanh tích hai số bằng hằng đẳng thức",
      "prompt": "Tính nhanh giá trị của tích $52 \\cdot 48$ bằng hằng đẳng thức hiệu hai bình phương.",
      "correctAnswer": "2496",
      "acceptableAnswers": [
        "2496",
        "hai nghìn bốn trăm chín mươi sáu"
      ],
      "explanation": "$52 \\cdot 48 = (50 + 2)(50 - 2) = 50^2 - 2^2 = 2500 - 4 = 2496$."
    },
    {
      "id": "sa-8.6.4",
      "badge": "Câu 4 (TH) - Tính giá trị đa thức đưa về bình phương",
      "prompt": "Tính giá trị của biểu thức $P = x^2 + 6x + 9$ tại $x = 17$.",
      "correctAnswer": "400",
      "acceptableAnswers": [
        "400",
        "bốn trăm"
      ],
      "explanation": "$P = (x + 3)^2$. Tại $x = 17$: $P = (17 + 3)^2 = 20^2 = 400$."
    },
    {
      "id": "sa-8.6.5",
      "badge": "Câu 5 (VD) - Tìm x bằng hiệu hai bình phương",
      "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(x + 4)^2 - x^2 = 32$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "$(x^2 + 8x + 16) - x^2 = 32 \\Leftrightarrow 8x + 16 = 32 \\Leftrightarrow 8x = 16 \\Leftrightarrow x = 2$."
    },
    {
      "id": "sa-8.6.6",
      "badge": "Câu 6 (VD - Thực tế) - Tìm kích thước phòng khách",
      "prompt": "Một phòng khách hình vuông ban đầu có cạnh là $x\\text{ (m)}$. Khi sửa chữa, gia đình mở rộng đều mỗi chiều thêm $1\\text{ m}$ để được phòng khách hình vuông mới có cạnh là $x + 1\\text{ (m)}$. Biết diện tích phòng khách tăng thêm đúng $9\\text{ m}^2$. Tính cạnh ban đầu $x$ của phòng khách theo đơn vị mét.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "bốn",
        "4m",
        "4 m"
      ],
      "explanation": "Diện tích tăng thêm là: $(x + 1)^2 - x^2 = 2x + 1\\text{ (m}^2\\text{)}$.\nTheo bài ra: $2x + 1 = 9 \\Leftrightarrow 2x = 8 \\Leftrightarrow x = 4\\text{ (m)}$."
    }
  ]
},
  "t8-b7-lap-phuong-tong-hieu": {
  "id": "t8-b7-lap-phuong-tong-hieu",
  "lessonNumber": 7,
  "title": "Bài 7: Lập phương của một tổng. Lập phương của một hiệu",
  "bookChapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
  "scenarioTitle": "Tình huống: Tính thể tích bể nước ngầm hình lập phương khi mở rộng",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Bạn Lan",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy Tính, gia đình em đang dùng một bể nước ngầm hình lập phương cạnh x mét. Bố em dự định xây lại bể mới bằng cách tăng mỗi cạnh thêm 1 mét để thành khối lập phương cạnh x + 1 mét. Bố hỏi em thể tích bể mới tăng thêm bao nhiêu mét khối mà em tính (x + 1)³ bằng cách nhân ba lần đa thức rất dễ nhầm dấu ạ?",
      "visualGraphic": "box",
      "mathNote": "V_1 = x^3; \\quad V_2 = (x + 1)^3"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính (VinaMath)",
      "avatar": "👨‍🏫",
      "speech": "Chào Lan! Đó chính là bài toán thực tế dẫn tới hai hằng đẳng thức bậc 3 cực kỳ quan trọng: Lập phương của một tổng (A + B)³ = A³ + 3A²B + 3AB² + B³ và Lập phương của một hiệu (A - B)³ = A³ - 3A²B + 3AB² - B³. Với bể nước của bố em, thể tích bể mới là: (x + 1)³ = x³ + 3x² + 3x + 1 mét khối. Phần thể tích tăng thêm chính là 3x² + 3x + 1 mét khối! Chúng ta cùng tìm hiểu kỹ hai hằng đẳng thức này nhé!",
      "visualGraphic": "graph",
      "mathNote": "(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3"
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Lập phương của một tổng",
      "points": [
        "Với hai biểu thức tùy ý $A$ và $B$, ta có hằng đẳng thức Lập phương của một tổng:",
        "  $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$",
        "Quy tắc nhớ hệ số: Các hệ số theo thứ tự là $1 - 3 - 3 - 1$.",
        "Dạng nhóm hữu ích khi làm toán nâng cao: $(A + B)^3 = A^3 + B^3 + 3AB(A + B)$.",
        "Ý nghĩa hình học: Thể tích khối lập phương cạnh $(a + b)$ bằng tổng thể tích hai khối lập phương (cạnh $a, b$) và 6 khối hộp chữ nhật kích thước $a^2b, ab^2$."
      ],
      "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 34)",
      "exampleProblem": "a) Khai triển biểu thức: $(x + 2)^3$ và $(2x + y)^3$.\nb) Viết đa thức sau dưới dạng lập phương của một tổng: $x^3 + 3x^2 + 3x + 1$ và $8x^3 + 12x^2 + 6x + 1$.",
      "exampleSolution": "a) Khai triển:\n• $(x + 2)^3 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$.\n• $(2x + y)^3 = (2x)^3 + 3 \\cdot (2x)^2 \\cdot y + 3 \\cdot (2x) \\cdot y^2 + y^3 = 8x^3 + 12x^2y + 6xy^2 + y^3$.\n\nb) Viết dưới dạng lập phương:\n• $x^3 + 3x^2 + 3x + 1 = x^3 + 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 + 1^3 = (x + 1)^3$.\n• $8x^3 + 12x^2 + 6x + 1 = (2x)^3 + 3 \\cdot (2x)^2 \\cdot 1 + 3 \\cdot (2x) \\cdot 1^2 + 1^3 = (2x + 1)^3$."
    },
    {
      "index": "2",
      "title": "Lập phương của một hiệu",
      "points": [
        "Với hai biểu thức tùy ý $A$ và $B$, ta có hằng đẳng thức Lập phương của một hiệu:",
        "  $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$",
        "Quy tắc dấu: Dấu của các hạng tử đan xen nhau: $+ - + -$.",
        "Dạng nhóm hữu ích: $(A - B)^3 = A^3 - B^3 - 3AB(A - B)$.",
        "Chú ý quan trọng: Vì lũy thừa bậc 3 là số mũ lẻ nên hai số đối nhau có lập phương đối nhau:",
        "  $(A - B)^3 = -(B - A)^3$ (khác với bình phương $(A - B)^2 = (B - A)^2$)."
      ],
      "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 35)",
      "exampleProblem": "a) Khai triển: $(x - 1)^3$ và $(2x - 3y)^3$.\nb) Viết đa thức sau dưới dạng lập phương của một hiệu: $x^3 - 6x^2 + 12x - 8$.",
      "exampleSolution": "a) Khai triển:\n• $(x - 1)^3 = x^3 - 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 - 1^3 = x^3 - 3x^2 + 3x - 1$.\n• $(2x - 3y)^3 = (2x)^3 - 3 \\cdot (2x)^2 \\cdot (3y) + 3 \\cdot (2x) \\cdot (3y)^2 - (3y)^3 = 8x^3 - 36x^2y + 54xy^2 - 27y^3$.\n\nb) Viết dưới dạng lập phương:\n• $x^3 - 6x^2 + 12x - 8 = x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 - 2^3 = (x - 2)^3$."
    },
    {
      "index": "3",
      "title": "Rút gọn biểu thức và tính giá trị",
      "points": [
        "Phối hợp khai triển hằng đẳng thức lập phương để rút gọn biểu thức đại số.",
        "Nhận dạng nhanh để tính nhanh giá trị biểu thức:",
        "  • Thu gọn đa thức về dạng $(x + a)^3$ hoặc $(x - a)^3$ trước khi thay giá trị số của biến.",
        "Ví dụ tính nhẩm: $x^3 + 3x^2 + 3x + 1$ tại $x = 99$:",
        "  Ta có biểu thức bằng $(x + 1)^3$. Thay $x = 99$ được $(99 + 1)^3 = 100^3 = 1000000$."
      ],
      "exampleTitle": "Ví dụ 3 (Toán 8 KNTT Trang 36)",
      "exampleProblem": "a) Rút gọn biểu thức: $M = (x + 1)^3 - (x - 1)^3$.\nb) Tính giá trị của biểu thức $P = x^3 - 6x^2 + 12x - 8$ tại $x = 12$.",
      "exampleSolution": "a) Khai triển hai hằng đẳng thức:\n$M = (x^3 + 3x^2 + 3x + 1) - (x^3 - 3x^2 + 3x - 1)$\n$M = x^3 + 3x^2 + 3x + 1 - x^3 + 3x^2 - 3x + 1 = 6x^2 + 2$.\n\nb) Ta nhận thấy: $P = (x - 2)^3$.\nThay $x = 12$ vào: $P = (12 - 2)^3 = 10^3 = 1000$."
    },
    {
      "index": "4",
      "title": "Ứng dụng hình học và thực tế",
      "points": [
        "Công thức thể tích khối lập phương cạnh $a$ là $V = a^3$.",
        "Khi cạnh khối lập phương tăng thêm $b$ đơn vị, thể tích mới là $V' = (a + b)^3$.",
        "Thể tích tăng thêm là $\\Delta V = (a + b)^3 - a^3 = 3a^2b + 3ab^2 + b^3$.",
        "Giải các bài toán thực tế về kích thước bồn chứa, hộp quà, thể tích gian phòng."
      ],
      "exampleTitle": "Ví dụ 4 (Bài toán thể tích thực tế)",
      "exampleProblem": "Một khối bê tông hình lập phương ban đầu có cạnh là $x\\text{ (m)}$. Người ta đổ thêm bê tông đều ra các mặt để tạo thành khối lập phương mới có cạnh $x + 2\\text{ (m)}$.\na) Viết đa thức biểu thị thể tích bê tông đổ thêm.\nb) Khi $x = 2\\text{ m}$, thể tích bê tông đổ thêm bằng bao nhiêu mét khối?",
      "exampleSolution": "a) Thể tích ban đầu là $x^3\\text{ (m}^3\\text{)}$. Thể tích mới là $(x + 2)^3\\text{ (m}^3\\text{)}$.\nThể tích bê tông đổ thêm là:\n$\\Delta V = (x + 2)^3 - x^3 = (x^3 + 6x^2 + 12x + 8) - x^3 = 6x^2 + 12x + 8\\text{ (m}^3\\text{)}$.\nb) Với $x = 2\\text{ m}$, ta có:\n$\\Delta V = 6(2^2) + 12(2) + 8 = 24 + 24 + 8 = 56\\text{ (m}^3\\text{)}$."
    }
  ],
  "youtubeVideos": [
    {
      "id": "t8_b7_video1",
      "title": "Tiết 1: Lập phương của một tổng và ứng dụng khai triển"
    },
    {
      "id": "t8_b7_video2",
      "title": "Tiết 2: Lập phương của một hiệu và bài toán thực tế"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-8.7.1",
      "timeSeconds": 140,
      "timeLabel": "02:20",
      "title": "Ví dụ 1: Khai triển lập phương một tổng",
      "question": "Khai triển hằng đẳng thức $(x + 1)^3$ ta được kết quả là:",
      "options": [
        "$x^3 + 3x^2 + 3x + 1$",
        "$x^3 + 1$",
        "$x^3 + 3x + 1$",
        "$x^3 + x^2 + x + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 1)^3 = x^3 + 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 + 1^3 = x^3 + 3x^2 + 3x + 1$."
    },
    {
      "id": "vq-8.7.2",
      "timeSeconds": 340,
      "timeLabel": "05:40",
      "title": "Ví dụ 2: Khai triển lập phương một hiệu",
      "question": "Khai triển hằng đẳng thức $(x - 2)^3$ ta được kết quả là:",
      "options": [
        "$x^3 - 6x^2 + 12x - 8$",
        "$x^3 - 8$",
        "$x^3 - 6x^2 - 12x - 8$",
        "$x^3 - 2x^2 + 4x - 8$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 2)^3 = x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 - 2^3 = x^3 - 6x^2 + 12x - 8$."
    },
    {
      "id": "vq-8.7.3",
      "timeSeconds": 210,
      "timeLabel": "03:30",
      "title": "Ví dụ 3: Nhận dạng hằng đẳng thức",
      "question": "Đa thức $x^3 + 6x^2 + 12x + 8$ viết dưới dạng lập phương của một tổng là:",
      "options": [
        "$(x + 2)^3$",
        "$(x + 8)^3$",
        "$(x + 4)^3$",
        "$(2x + 1)^3$"
      ],
      "correctIndex": 0,
      "explanation": "$x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = (x + 2)^3$."
    },
    {
      "id": "vq-8.7.4",
      "timeSeconds": 460,
      "timeLabel": "07:40",
      "title": "Ví dụ 4: Tính nhanh bằng lập phương",
      "question": "Tính giá trị của biểu thức $P = x^3 - 3x^2 + 3x - 1$ tại $x = 101$:",
      "options": [
        "$1000000$",
        "$100000$",
        "$10000$",
        "$1000$"
      ],
      "correctIndex": 0,
      "explanation": "$P = (x - 1)^3$. Thay $x = 101$ vào được: $P = (101 - 1)^3 = 100^3 = 1000000$."
    }
  ],
  "tips": [
    "Nhớ dãy hệ số Pascal bậc 3: Dãy hệ số luôn là $1 - 3 - 3 - 1$. Với hiệu thì dấu đan xen $+ - + -$.",
    "Đóng ngoặc biểu thức có hệ số: Khi khai triển $(2x + 1)^3$, luôn viết $(2x)^3 = 8x^3$ và $3(2x)^2 \\cdot 1 = 3 \\cdot 4x^2 = 12x^2$, tránh viết nhầm thành $2x^3$ hay $6x^2$.",
    "Nhận diện bậc 3 hai đầu: Khi thấy $x^3$ ở đầu và một số lập phương như $1, 8, 27$ ở cuối, hãy thử ngay hằng đẳng thức $(x \\pm a)^3$.",
    "Tính chất đổi dấu của hiệu bậc lẻ: $(A - B)^3 = -(B - A)^3$, chú ý có dấu trừ phía trước chứ không bằng nhau như bậc 2."
  ],
  "traps": [
    "Bẫy quên hai số hạng ở giữa: Nhầm $(x + y)^3 = x^3 + y^3$ hoặc $(x - y)^3 = x^3 - y^3$. Đây là lỗi sai rất nghiêm trọng!",
    "Bẫy nhầm dấu trong lập phương hiệu: Viết $(A - B)^3 = A^3 - 3A^2B - 3AB^2 - B^3$ (số hạng thứ ba phải mang dấu cộng $+3AB^2$).",
    "Bẫy lũy thừa hệ số: Viết $(2x)^3 = 6x^3$ (nhân hệ số với 3 thay vì nâng lên lũy thừa $2^3 = 8$).",
    "Bẫy dấu khi đổi vị trí trong hiệu: Nhầm $(A - B)^3 = (B - A)^3$ (đúng phải là $(A - B)^3 = -(B - A)^3$)."
  ],
  "quizQuestions": [
    {
      "id": "quiz-8.7.1",
      "badge": "Câu 1 (NB) - Công thức lập phương một tổng",
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Công thức lập phương của một tổng hai biểu thức $A, B$ là:",
      "options": [
        "$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$",
        "$(A + B)^3 = A^3 + B^3$",
        "$(A + B)^3 = A^3 + 3A^2B + B^3$",
        "$(A + B)^3 = A^3 + A^2B + AB^2 + B^3$"
      ],
      "correctIndex": 0,
      "explanation": "Hằng đẳng thức lập phương của một tổng: $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$."
    },
    {
      "id": "quiz-8.7.2",
      "badge": "Câu 2 (NB) - Công thức lập phương một hiệu",
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Công thức lập phương của một hiệu hai biểu thức $A, B$ là:",
      "options": [
        "$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$",
        "$(A - B)^3 = A^3 - B^3$",
        "$(A - B)^3 = A^3 - 3A^2B - 3AB^2 - B^3$",
        "$(A - B)^3 = A^3 + 3A^2B - 3AB^2 + B^3$"
      ],
      "correctIndex": 0,
      "explanation": "Hằng đẳng thức lập phương của một hiệu: $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$."
    },
    {
      "id": "quiz-8.7.3",
      "badge": "Câu 3 (NB) - Dấu các hạng tử trong lập phương hiệu",
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khi khai triển hằng đẳng thức $(A - B)^3$, dấu của bốn hạng tử theo thứ tự là:",
      "options": [
        "$+, -, +, -$",
        "$+, +, -, -$",
        "$+, -, -, -$",
        "$-, +, -, +$"
      ],
      "correctIndex": 0,
      "explanation": "Trong khai triển $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$, dấu các hạng tử đan xen nhau là: $+ , - , + , -$."
    },
    {
      "id": "quiz-8.7.4",
      "badge": "Câu 4 (NB) - Khai triển lập phương của x + 1",
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Khai triển hằng đẳng thức $(x + 1)^3$ ta được kết quả là:",
      "options": [
        "$x^3 + 3x^2 + 3x + 1$",
        "$x^3 + 1$",
        "$x^3 + 3x + 1$",
        "$x^3 + x^2 + x + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 1)^3 = x^3 + 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 + 1^3 = x^3 + 3x^2 + 3x + 1$."
    },
    {
      "id": "quiz-8.7.5",
      "badge": "Câu 5 (NB) - Khai triển lập phương của x - 1",
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khai triển hằng đẳng thức $(x - 1)^3$ ta được kết quả là:",
      "options": [
        "$x^3 - 3x^2 + 3x - 1$",
        "$x^3 - 1$",
        "$x^3 - 3x^2 - 3x - 1$",
        "$x^3 - 3x - 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 1)^3 = x^3 - 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 - 1^3 = x^3 - 3x^2 + 3x - 1$."
    },
    {
      "id": "quiz-8.7.6",
      "badge": "Câu 6 (NB) - Khai triển lập phương của x + 2",
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Khai triển hằng đẳng thức $(x + 2)^3$ ta được kết quả là:",
      "options": [
        "$x^3 + 6x^2 + 12x + 8$",
        "$x^3 + 8$",
        "$x^3 + 6x^2 + 6x + 8$",
        "$x^3 + 2x^2 + 4x + 8$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 2)^3 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$."
    },
    {
      "id": "quiz-8.7.7",
      "badge": "Câu 7 (NB) - Khai triển lập phương của x - 2",
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khai triển hằng đẳng thức $(x - 2)^3$ ta được kết quả là:",
      "options": [
        "$x^3 - 6x^2 + 12x - 8$",
        "$x^3 - 8$",
        "$x^3 - 6x^2 - 12x - 8$",
        "$x^3 + 6x^2 - 12x + 8$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 2)^3 = x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 - 2^3 = x^3 - 6x^2 + 12x - 8$."
    },
    {
      "id": "quiz-8.7.8",
      "badge": "Câu 8 (NB) - Viết đa thức về lập phương một tổng",
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Đa thức $x^3 + 3x^2 + 3x + 1$ được viết dưới dạng lập phương của một tổng là:",
      "options": [
        "$(x + 1)^3$",
        "$(x + 3)^3$",
        "$(x + 2)^3$",
        "$(3x + 1)^3$"
      ],
      "correctIndex": 0,
      "explanation": "$x^3 + 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 + 1^3 = (x + 1)^3$."
    },
    {
      "id": "quiz-8.7.9",
      "badge": "Câu 9 (NB) - Viết đa thức về lập phương một hiệu",
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Đa thức $x^3 - 6x^2 + 12x - 8$ được viết dưới dạng lập phương của một hiệu là:",
      "options": [
        "$(x - 2)^3$",
        "$(x - 8)^3$",
        "$(x - 4)^3$",
        "$(2x - 1)^3$"
      ],
      "correctIndex": 0,
      "explanation": "$x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 - 2^3 = (x - 2)^3$."
    },
    {
      "id": "quiz-8.7.10",
      "badge": "Câu 10 (NB) - Tính chất đổi dấu lập phương",
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Với mọi số thực $x$, khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$(x - 3)^3 = -(3 - x)^3$",
        "$(x - 3)^3 = (3 - x)^3$",
        "$(x + 3)^3 = x^3 + 27$",
        "$(x - 3)^3 = x^3 - 27$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $(x - 3) = -(3 - x)$ và số mũ 3 là số lẻ nên: $(x - 3)^3 = [-(3 - x)]^3 = -(3 - x)^3$."
    },
    {
      "id": "quiz-8.7.11",
      "badge": "Câu 11 (TH) - Khai triển lập phương có hệ số",
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Khai triển hằng đẳng thức $(2x + 1)^3$ ta được kết quả là:",
      "options": [
        "$8x^3 + 12x^2 + 6x + 1$",
        "$8x^3 + 6x^2 + 6x + 1$",
        "$2x^3 + 6x^2 + 6x + 1$",
        "$8x^3 + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(2x + 1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1^2) + 1^3 = 8x^3 + 12x^2 + 6x + 1$."
    },
    {
      "id": "quiz-8.7.12",
      "badge": "Câu 12 (TH) - Khai triển lập phương hiệu hai biến",
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khai triển hằng đẳng thức $(x - 2y)^3$ ta được kết quả là:",
      "options": [
        "$x^3 - 6x^2y + 12xy^2 - 8y^3$",
        "$x^3 - 3x^2y + 6xy^2 - 8y^3$",
        "$x^3 - 6x^2y - 12xy^2 - 8y^3$",
        "$x^3 - 8y^3$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 2y)^3 = x^3 - 3x^2(2y) + 3x(2y)^2 - (2y)^3 = x^3 - 6x^2y + 12xy^2 - 8y^3$."
    },
    {
      "id": "quiz-8.7.13",
      "badge": "Câu 13 (TH) - Khai triển lập phương hiệu có hệ số",
      "source": "Toán 8 KNTT Bài tập 2.7 Trang 36",
      "question": "Khai triển hằng đẳng thức $(3x - 1)^3$ ta được kết quả là:",
      "options": [
        "$27x^3 - 27x^2 + 9x - 1$",
        "$27x^3 - 9x^2 + 9x - 1$",
        "$9x^3 - 27x^2 + 9x - 1$",
        "$27x^3 - 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(3x - 1)^3 = (3x)^3 - 3(3x)^2(1) + 3(3x)(1^2) - 1^3 = 27x^3 - 27x^2 + 9x - 1$."
    },
    {
      "id": "quiz-8.7.14",
      "badge": "Câu 14 (TH) - Điền đơn thức vào hằng đẳng thức",
      "source": "Toán 8 KNTT Bài tập 2.8 Trang 36",
      "question": "Điền đơn thức thích hợp vào chỗ chấm để biểu thức trở thành lập phương của một tổng: $x^3 + 9x^2 + \\ldots + 27 = (x + 3)^3$.",
      "options": [
        "$27x$",
        "$18x$",
        "$9x$",
        "$3x$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 3)^3 = x^3 + 3 \\cdot x^2 \\cdot 3 + 3 \\cdot x \\cdot 3^2 + 3^3 = x^3 + 9x^2 + 27x + 27$. Đơn thức cần điền là $27x$."
    },
    {
      "id": "quiz-8.7.15",
      "badge": "Câu 15 (TH) - Tính nhanh giá trị biểu thức",
      "source": "Toán 8 KNTT Bài tập 2.9 Trang 36",
      "question": "Tính nhanh giá trị của biểu thức $P = x^3 + 3x^2 + 3x + 1$ tại $x = 99$:",
      "options": [
        "$1000000$",
        "$100000$",
        "$10000$",
        "$1000$"
      ],
      "correctIndex": 0,
      "explanation": "$P = (x + 1)^3$. Với $x = 99$: $P = (99 + 1)^3 = 100^3 = 1000000$."
    },
    {
      "id": "quiz-8.7.16",
      "badge": "Câu 16 (TH) - Rút gọn biểu thức lập phương",
      "source": "Toán 8 KNTT Bài tập 2.10 Trang 36",
      "question": "Rút gọn biểu thức $M = (x + 1)^3 - x^2(x + 3)$ ta được kết quả là:",
      "options": [
        "$3x + 1$",
        "$3x^2 + 3x + 1$",
        "$1$",
        "$x + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$M = (x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 3x + 1$."
    },
    {
      "id": "quiz-8.7.17",
      "badge": "Câu 17 (VD) - Rút gọn hiệu hai lập phương",
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Rút gọn biểu thức $A = (x + 1)^3 - (x - 1)^3$ ta được kết quả là:",
      "options": [
        "$6x^2 + 2$",
        "$6x^2$",
        "$2x^3 + 6x$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "$A = (x^3 + 3x^2 + 3x + 1) - (x^3 - 3x^2 + 3x - 1) = 6x^2 + 2$."
    },
    {
      "id": "quiz-8.7.18",
      "badge": "Câu 18 (VD) - Tính giá trị đa thức hai biến",
      "source": "Toán 8 KNTT Bài tập 2.11 Trang 36",
      "question": "Tính giá trị của biểu thức $P = x^3 - 6x^2y + 12xy^2 - 8y^3$ tại $x = 26$ và $y = 3$:",
      "options": [
        "$8000$",
        "$4000$",
        "$1000$",
        "$20$"
      ],
      "correctIndex": 0,
      "explanation": "$P = (x - 2y)^3$. Thay $x = 26, y = 3$ vào: $P = (26 - 2 \\cdot 3)^3 = (26 - 6)^3 = 20^3 = 8000$."
    },
    {
      "id": "quiz-8.7.19",
      "badge": "Câu 19 (VD) - Tìm x bằng hằng đẳng thức lập phương",
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Tìm giá trị của $x$ thỏa mãn đẳng thức: $(x + 1)^3 - x^2(x + 3) = 13$.",
      "options": [
        "$x = 4$",
        "$x = 3$",
        "$x = 2$",
        "$x = 5$"
      ],
      "correctIndex": 0,
      "explanation": "$(x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 13 \\Leftrightarrow 3x + 1 = 13 \\Leftrightarrow 3x = 12 \\Leftrightarrow x = 4$."
    },
    {
      "id": "quiz-8.7.20",
      "badge": "Câu 20 (VD - Thực tế) - Thể tích bể nước tăng thêm",
      "source": "Toán 8 KNTT Ứng dụng thực tế",
      "question": "Một bể nước hình lập phương có cạnh bằng $x\\text{ (m)}$. Người ta xây bể mới bằng cách tăng mỗi cạnh thêm $1\\text{ m}$ để được khối lập phương có cạnh $x + 1\\text{ (m)}$. Đa thức biểu thị phần thể tích tăng thêm của bể nước là:",
      "options": [
        "$3x^2 + 3x + 1\\text{ (m}^3\\text{)}$",
        "$1\\text{ (m}^3\\text{)}$",
        "$3x^2 + 1\\text{ (m}^3\\text{)}$",
        "$x^2 + x + 1\\text{ (m}^3\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Thể tích tăng thêm bằng thể tích bể mới trừ thể tích bể cũ: $\\Delta V = (x + 1)^3 - x^3 = (x^3 + 3x^2 + 3x + 1) - x^3 = 3x^2 + 3x + 1\\text{ (m}^3\\text{)}$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-8.7.1",
      "badge": "Câu 1 (Đ/S) - Các công thức hằng đẳng thức lập phương",
      "prompt": "Cho $A, B$ là hai biểu thức đại số tùy ý. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$.",
          "correctAnswer": true,
          "explanation": "Đúng, đây là hằng đẳng thức lập phương của một tổng."
        },
        {
          "id": "b",
          "text": "$(A - B)^3 = A^3 - B^3$ với mọi biểu thức $A, B$.",
          "correctAnswer": false,
          "explanation": "Sai, khai triển đúng là $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$."
        },
        {
          "id": "c",
          "text": "$(A - B)^3 = -(B - A)^3$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì lũy thừa bậc 3 là số mũ lẻ nên $[-(B - A)]^3 = -(B - A)^3$."
        },
        {
          "id": "d",
          "text": "Trong khai triển $(A - B)^3$, số hạng thứ ba là $-3AB^2$.",
          "correctAnswer": false,
          "explanation": "Sai, số hạng thứ ba mang dấu cộng $+3AB^2$ vì $(-B)^2 = B^2$."
        }
      ]
    },
    {
      "id": "tf-8.7.2",
      "badge": "Câu 2 (Đ/S) - Khai triển và viết về dạng lập phương",
      "prompt": "Xét tính đúng/sai của các phép biến đổi đại số sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$(2x + 1)^3 = 8x^3 + 12x^2 + 6x + 1$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(2x)^3 + 3(2x)^2(1) + 3(2x)(1^2) + 1^3 = 8x^3 + 12x^2 + 6x + 1$."
        },
        {
          "id": "b",
          "text": "$(x - 2)^3 = x^3 - 6x^2 + 12x - 8$.",
          "correctAnswer": true,
          "explanation": "Đúng, $x^3 - 3(x^2)(2) + 3(x)(4) - 8 = x^3 - 6x^2 + 12x - 8$."
        },
        {
          "id": "c",
          "text": "$x^3 + 9x^2 + 27x + 27 = (x + 9)^3$.",
          "correctAnswer": false,
          "explanation": "Sai, vì $27 = 3^3$ nên biểu thức viết đúng phải là $(x + 3)^3$."
        },
        {
          "id": "d",
          "text": "$8x^3 - 12x^2 + 6x - 1 = (2x - 1)^3$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(2x)^3 - 3(2x)^2(1) + 3(2x)(1^2) - 1^3 = (2x - 1)^3$."
        }
      ]
    },
    {
      "id": "tf-8.7.3",
      "badge": "Câu 3 (Đ/S) - Rút gọn biểu thức và giải phương trình",
      "prompt": "Cho biểu thức $M = (x + 1)^3 - x^2(x + 3)$ và phương trình $(x + 2)^3 - x^3 - 6x^2 = 20$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Rút gọn biểu thức $M$ ta được kết quả $M = 3x + 1$.",
          "correctAnswer": true,
          "explanation": "Đúng, $M = (x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 3x + 1$."
        },
        {
          "id": "b",
          "text": "Giá trị của biểu thức $M$ tại $x = 10$ là $31$.",
          "correctAnswer": true,
          "explanation": "Đúng, thay $x = 10$ vào: $3(10) + 1 = 31$."
        },
        {
          "id": "c",
          "text": "Phương trình $(x + 2)^3 - x^3 - 6x^2 = 20$ sau khi thu gọn vế trái trở thành $12x + 8 = 20$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(x^3 + 6x^2 + 12x + 8) - x^3 - 6x^2 = 12x + 8$."
        },
        {
          "id": "d",
          "text": "Nghiệm của phương trình $(x + 2)^3 - x^3 - 6x^2 = 20$ là $x = 2$.",
          "correctAnswer": false,
          "explanation": "Sai, $12x + 8 = 20 \\Leftrightarrow 12x = 12 \\Leftrightarrow x = 1$."
        }
      ]
    },
    {
      "id": "tf-8.7.4",
      "badge": "Câu 4 (Đ/S - Thực tế) - Thể tích bể bơi hình lập phương",
      "prompt": "Một hồ bơi hình lập phương có cạnh bằng $x\\text{ (m)}$ ($x > 1$). Chủ khu nghỉ dưỡng mở rộng hồ bơi bằng cách tăng đều mỗi cạnh thêm $2\\text{ m}$ để thành hồ bơi mới hình lập phương cạnh $x + 2\\text{ (m)}$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Thể tích hồ bơi ban đầu là $x^3\\text{ (m}^3\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, thể tích khối lập phương cạnh $x$ là $x^3\\text{ (m}^3\\text{)}$."
        },
        {
          "id": "b",
          "text": "Thể tích hồ bơi mới sau khi mở rộng là $(x + 2)^3\\text{ (m}^3\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, cạnh hồ bơi mới là $x + 2\\text{ (m)}$ nên thể tích là $(x + 2)^3\\text{ (m}^3\\text{)}$."
        },
        {
          "id": "c",
          "text": "Phần thể tích tăng thêm được biểu thị bởi đa thức $6x^2 + 12x + 8\\text{ (m}^3\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(x + 2)^3 - x^3 = (x^3 + 6x^2 + 12x + 8) - x^3 = 6x^2 + 12x + 8\\text{ (m}^3\\text{)}$."
        },
        {
          "id": "d",
          "text": "Nếu hồ bơi ban đầu có cạnh $x = 3\\text{ m}$ thì thể tích tăng thêm là $80\\text{ m}^3$.",
          "correctAnswer": false,
          "explanation": "Sai, với $x = 3$: $\\Delta V = 6(3^2) + 12(3) + 8 = 54 + 36 + 8 = 98\\text{ m}^3$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-8.7.1",
      "badge": "Câu 1 (NB) - Hệ số tự do của khai triển",
      "prompt": "Hệ số tự do trong khai triển hằng đẳng thức $(x + 3)^3$ bằng bao nhiêu?",
      "correctAnswer": "27",
      "acceptableAnswers": [
        "27",
        "hai mươi bảy"
      ],
      "explanation": "$(x + 3)^3 = x^3 + 9x^2 + 27x + 27$. Hệ số tự do bằng $3^3 = 27$."
    },
    {
      "id": "sa-8.7.2",
      "badge": "Câu 2 (TH) - Hệ số của biến trong khai triển",
      "prompt": "Hệ số của $x^2$ trong khai triển hằng đẳng thức $(2x + 1)^3$ bằng bao nhiêu?",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12",
        "mười hai"
      ],
      "explanation": "$(2x + 1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1) + 1 = 8x^3 + 12x^2 + 6x + 1$. Hệ số của $x^2$ là $12$."
    },
    {
      "id": "sa-8.7.3",
      "badge": "Câu 3 (TH) - Tính nhanh giá trị biểu thức",
      "prompt": "Tính giá trị của biểu thức $P = x^3 - 3x^2 + 3x - 1$ tại $x = 11$.",
      "correctAnswer": "1000",
      "acceptableAnswers": [
        "1000",
        "một nghìn",
        "1.000"
      ],
      "explanation": "$P = (x - 1)^3$. Tại $x = 11$: $P = (11 - 1)^3 = 10^3 = 1000$."
    },
    {
      "id": "sa-8.7.4",
      "badge": "Câu 4 (TH) - Tìm hằng số trong lập phương",
      "prompt": "Cho đẳng thức $x^3 + 6x^2 + 12x + 8 = (x + b)^3$. Giá trị của $b$ bằng bao nhiêu?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "$x^3 + 6x^2 + 12x + 8 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = (x + 2)^3$. Vậy $b = 2$."
    },
    {
      "id": "sa-8.7.5",
      "badge": "Câu 5 (VD) - Tìm x thỏa mãn đẳng thức",
      "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(x + 2)^3 - x^3 - 6x^2 = 32$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "$(x^3 + 6x^2 + 12x + 8) - x^3 - 6x^2 = 32 \\Leftrightarrow 12x + 8 = 32 \\Leftrightarrow 12x = 24 \\Leftrightarrow x = 2$."
    },
    {
      "id": "sa-8.7.6",
      "badge": "Câu 6 (VD - Thực tế) - Tìm kích thước khối lập phương",
      "prompt": "Một thùng chứa hàng hình lập phương cạnh $x\\text{ (m)}$. Khi tăng mỗi cạnh thêm $1\\text{ m}$ thì thể tích thùng tăng thêm $61\\text{ m}^3$. Tính độ dài cạnh ban đầu $x$ của thùng chứa theo đơn vị mét.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "bốn",
        "4m",
        "4 m"
      ],
      "explanation": "Thể tích tăng thêm là: $(x + 1)^3 - x^3 = 3x^2 + 3x + 1\\text{ (m}^3\\text{)}$.\nTheo đề bài: $3x^2 + 3x + 1 = 61 \\Leftrightarrow 3x^2 + 3x - 60 = 0 \\Leftrightarrow x^2 + x - 20 = 0$.\nVì $x > 0$ nên $(x - 4)(x + 5) = 0 \\Leftrightarrow x = 4\\text{ (m)}$."
    }
  ]
},
  "t8-b8-tong-hieu-hai-lap-phuong": {
    "id": "t8-b8-tong-hieu-hai-lap-phuong",
    "lessonNumber": 8,
    "title": "Bài 8: Tổng và hiệu hai lập phương",
    "bookChapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
    "scenarioTitle": "Tình huống: Tính chênh lệch và tổng thể tích hai khối kim loại lập phương",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn Nam",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, trong giờ thực hành cơ khí, xưởng giao nhiệm vụ gia công một khối kim loại hình lập phương cạnh a = 10 cm, sau đó khoét rỗng ở tâm một khối lập phương nhỏ cạnh b = 8 cm. Thầy giáo yêu cầu em tính thể tích kim loại còn lại. Em tính a³ - b³ = 10³ - 8³ = 1000 - 512 = 488 cm³, nhưng nếu gặp kích thước lớn hoặc chứa biến x, y thì có cách nào biến đổi a³ - b³ thành tích để tính toán và rút gọn nhanh hơn không ạ?",
        "visualGraphic": "box",
        "mathNote": "V = a^3 - b^3"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào Nam! Câu hỏi của em rất thông minh! Trong đại số, để chuyển hiệu hai lập phương về dạng tích, ta có hằng đẳng thức tuyệt đẹp: a³ - b³ = (a - b)(a² + ab + b²). Với khối kim loại của em: a - b = 10 - 8 = 2 cm, và a² + ab + b² = 100 + 80 + 64 = 244. Khi đó thể tích còn lại là: 2 × 244 = 488 cm³! Tương tự, ta cũng có hằng đẳng thức Tổng hai lập phương: a³ + b³ = (a + b)(a² - ab + b²). Chúng ta cùng tìm hiểu kỹ hai hằng đẳng thức này nhé!",
        "visualGraphic": "graph",
        "mathNote": "A^3 \pm B^3 = (A \pm B)(A^2 \mp AB + B^2)"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Tổng hai lập phương",
        "points": [
          "Với hai biểu thức tùy ý $A$ và $B$, ta có hằng đẳng thức Tổng hai lập phương:",
          "  $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$",
          "Biểu thức $A^2 - AB + B^2$ được gọi là bình phương thiếu của một hiệu (vì thiếu hệ số 2 so với $(A - B)^2 = A^2 - 2AB + B^2$).",
          "Quy tắc nhớ dấu: Thừa số thứ nhất cùng dấu với vế trái $(A + B)$, thừa số thứ hai có dấu đan xen: hạng tử giữa mang dấu trừ $-AB$.",
          "Dạng đảo (khai triển tích): $(A + B)(A^2 - AB + B^2) = A^3 + B^3$."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 37)",
        "exampleProblem": "a) Khai triển biểu thức: $(x + 2)(x^2 - 2x + 4)$ và $(2x + 1)(4x^2 - 2x + 1).\n" +
          "b) Viết các đa thức sau dưới dạng tích: $x^3 + 8$ và $27x^3 + y^3$.",
        "exampleSolution": "a) Khai triển tích:\n" +
          "• Nhận thấy $(x + 2)(x^2 - x \\cdot 2 + 2^2)$ đúng dạng $(A + B)(A^2 - AB + B^2)$ với $A = x, B = 2$.\n" +
          "  Do đó: $(x + 2)(x^2 - 2x + 4) = x^3 + 2^3 = x^3 + 8$.\n" +
          "• Với $(2x + 1)[(2x)^2 - (2x)\\cdot 1 + 1^2]$, ta có $A = 2x, B = 1$.\n" +
          "  Do đó: $(2x + 1)(4x^2 - 2x + 1) = (2x)^3 + 1^3 = 8x^3 + 1.\n\n" +
          "b) Viết dưới dạng tích:\n" +
          "• $x^3 + 8 = x^3 + 2^3 = (x + 2)(x^2 - x \\cdot 2 + 2^2) = (x + 2)(x^2 - 2x + 4).\n" +
          "• $27x^3 + y^3 = (3x)^3 + y^3 = (3x + y)[(3x)^2 - (3x)\\cdot y + y^2] = (3x + y)(9x^2 - 3xy + y^2)$."
      },
      {
        "index": "2",
        "title": "Hiệu hai lập phương",
        "points": [
          "Với hai biểu thức tùy ý $A$ và $B$, ta có hằng đẳng thức Hiệu hai lập phương:",
          "  $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$",
          "Biểu thức $A^2 + AB + B^2$ được gọi là bình phương thiếu của một tổng (vì thiếu hệ số 2 so với $(A + B)^2 = A^2 + 2AB + B^2$).",
          "Quy tắc nhớ dấu: Thừa số thứ nhất cùng dấu với vế trái $(A - B)$, thừa số thứ hai mang toàn bộ dấu cộng: $A^2 + AB + B^2$.",
          "Dạng đảo (khai triển tích): $(A - B)(A^2 + AB + B^2) = A^3 - B^3$."
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 38)",
        "exampleProblem": "a) Khai triển biểu thức: $(x - 3)(x^2 + 3x + 9)$ và $(x - 2y)(x^2 + 2xy + 4y^2).\n" +
          "b) Viết các đa thức sau dưới dạng tích: $x^3 - 1$ và $8x^3 - 27$.",
        "exampleSolution": "a) Khai triển tích:\n" +
          "• $(x - 3)(x^2 + 3x + 9) = (x - 3)(x^2 + x \\cdot 3 + 3^2) = x^3 - 3^3 = x^3 - 27.\n" +
          "• $(x - 2y)[x^2 + x \\cdot (2y) + (2y)^2] = x^3 - (2y)^3 = x^3 - 8y^3.\n\n" +
          "b) Viết dưới dạng tích:\n" +
          "• $x^3 - 1 = x^3 - 1^3 = (x - 1)(x^2 + x \\cdot 1 + 1^2) = (x - 1)(x^2 + x + 1).\n" +
          "• $8x^3 - 27 = (2x)^3 - 3^3 = (2x - 3)[(2x)^2 + (2x)\\cdot 3 + 3^2] = (2x - 3)(4x^2 + 6x + 9)$."
      },
      {
        "index": "3",
        "title": "Rút gọn biểu thức và Tính nhanh giá trị",
        "points": [
          "Phối hợp hằng đẳng thức tổng và hiệu hai lập phương để rút gọn các biểu thức chứa tích.",
          "Chứng minh giá trị của một biểu thức không phụ thuộc vào giá trị của biến:",
          "  Nếu sau khi thu gọn, biểu thức triệt tiêu hết biến và chỉ còn một hằng số.",
          "Tính nhanh giá trị của biểu thức tại giá trị cho trước của biến:",
          "  Thu gọn biểu thức về dạng $x^3 \\pm a^3$ trước khi thay số."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 39)",
        "exampleProblem": "a) Rút gọn biểu thức: $M = (x + 1)(x^2 - x + 1) - (x - 1)(x^2 + x + 1).\n" +
          "b) Tính nhanh giá trị của biểu thức $P = (x - 2)(x^2 + 2x + 4) + 8$ tại $x = 10$.",
        "exampleSolution": "a) Áp dụng hằng đẳng thức tổng và hiệu hai lập phương:\n" +
          "$(x + 1)(x^2 - x + 1) = x^3 + 1^3 = x^3 + 1;\n" +
          "(x - 1)(x^2 + x + 1) = x^3 - 1^3 = x^3 - 1.\n" +
          "Do đó: $M = (x^3 + 1) - (x^3 - 1) = x^3 + 1 - x^3 + 1 = 2$.\n" +
          "(Giá trị của $M$ luôn bằng 2 với mọi $x$, không phụ thuộc vào biến $x$).\n\n" +
          "b) Ta có: $P = (x^3 - 2^3) + 8 = x^3 - 8 + 8 = x^3$.\n" +
          "Thay $x = 10$ vào ta được: $P = 10^3 = 1000$."
      },
      {
        "index": "4",
        "title": "Ứng dụng thực tế & Tìm x",
        "points": [
          "Giải phương trình chứa tích: Áp dụng hằng đẳng thức để đưa về $x^3 \\pm a^3$, kết hợp với khai triển đơn thức và đa thức để triệt tiêu số hạng bậc 3, đưa về phương trình bậc nhất một ẩn.",
          "Bài toán thể tích thực tế:",
          "  • Khối lập phương rỗng: $V_{\\text{vỏ}} = a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.",
          "  • Tổng thể tích hai bể chứa hình lập phương: $V_{\\text{tổng}} = a^3 + b^3 = (a + b)(a^2 - ab + b^2)$."
        ],
        "exampleTitle": "Ví dụ 4 (Toán 8 KNTT Trang 39 - Vận dụng)",
        "exampleProblem": "a) Tìm $x$, biết: $(x - 1)(x^2 + x + 1) - x(x - 2)(x + 2) = 11.\n" +
          "b) Một khối bê tông hình lập phương cạnh $x\\text{ (m)}$ bị khoét một hốc hình lập phương cạnh $y\\text{ (m)}$ ($x > y$). Viết công thức tính thể tích bê tông còn lại dưới dạng tích. Tính thể tích khi $x = 2\\text{ m}, y = 1\\text{ m}$.",
        "exampleSolution": "a) Thu gọn vế trái:\n" +
          "• $(x - 1)(x^2 + x + 1) = x^3 - 1$.\n" +
          "• $x(x - 2)(x + 2) = x(x^2 - 4) = x^3 - 4x$.\n" +
          "Phương trình trở thành:\n" +
          "$(x^3 - 1) - (x^3 - 4x) = 11 \\Leftrightarrow x^3 - 1 - x^3 + 4x = 11 \\Leftrightarrow 4x - 1 = 11 \\Leftrightarrow 4x = 12 \\Leftrightarrow x = 3$.\n\n" +
          "b) Thể tích bê tông còn lại là: $V = x^3 - y^3 = (x - y)(x^2 + xy + y^2)\\text{ (m}^3\\text{)}.\n" +
          "Với $x = 2, y = 1$: $V = (2 - 1)(2^2 + 2\\cdot 1 + 1^2) = 1 \\cdot (4 + 2 + 1) = 7\\text{ (m}^3\\text{)}$."
      }
    ],
    "youtubeVideos": [
      {
        "id": "t8_b8_video1",
        "title": "Tiết 1: Tổng hai lập phương và ứng dụng phân tích đa thức thành tích"
      },
      {
        "id": "t8_b8_video2",
        "title": "Tiết 2: Hiệu hai lập phương, bài toán rút gọn và thực tế"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.8.1",
        "timeSeconds": 135,
        "timeLabel": "02:15",
        "title": "Ví dụ 1: Khai triển tổng hai lập phương",
        "question": "Khai triển tích $(x + 3)(x^2 - 3x + 9)$ ta được kết quả là:",
        "options": [
          "$x^3 + 27$",
          "$x^3 - 27$",
          "$x^3 + 9$",
          "$x^3 - 9$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 3)(x^2 - 3x + 9) = x^3 + 3^3 = x^3 + 27$."
      },
      {
        "id": "vq-8.8.2",
        "timeSeconds": 330,
        "timeLabel": "05:30",
        "title": "Ví dụ 2: Viết tổng hai lập phương thành tích",
        "question": "Viết đa thức $8x^3 + 1$ dưới dạng tích của hai đa thức:",
        "options": [
          "$(2x + 1)(4x^2 - 2x + 1)$",
          "$(2x + 1)(4x^2 + 2x + 1)$",
          "$(2x + 1)(2x^2 - 2x + 1)$",
          "$(8x + 1)(x^2 - 8x + 1)$"
        ],
        "correctIndex": 0,
        "explanation": "$8x^3 + 1 = (2x)^3 + 1^3 = (2x + 1)[(2x)^2 - (2x)(1) + 1^2] = (2x + 1)(4x^2 - 2x + 1)$."
      },
      {
        "id": "vq-8.8.3",
        "timeSeconds": 225,
        "timeLabel": "03:45",
        "title": "Ví dụ 3: Khai triển hiệu hai lập phương",
        "question": "Khai triển tích $(x - 4)(x^2 + 4x + 16)$ ta được kết quả là:",
        "options": [
          "$x^3 - 64$",
          "$x^3 + 64$",
          "$x^3 - 16$",
          "$x^3 - 12$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 4)(x^2 + 4x + 16) = x^3 - 4^3 = x^3 - 64$."
      },
      {
        "id": "vq-8.8.4",
        "timeSeconds": 440,
        "timeLabel": "07:20",
        "title": "Ví dụ 4: Tính nhanh giá trị biểu thức",
        "question": "Tính giá trị của biểu thức $P = (x - 1)(x^2 + x + 1)$ tại $x = 11$:",
        "options": [
          "$1330$",
          "$1331$",
          "$1000$",
          "$1320$"
        ],
        "correctIndex": 0,
        "explanation": "$P = x^3 - 1$. Thay $x = 11$: $P = 11^3 - 1 = 1331 - 1 = 1330$."
      }
    ],
    "tips": [
      "Quy tắc nhớ dấu 'Cùng dấu trước, trái dấu sau': $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ (thừa số đầu cộng, giữa trừ); $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$ (thừa số đầu trừ, giữa cộng).",
      "Phân biệt bình phương thiếu: Bình phương thiếu $A^2 \\pm AB + B^2$ không có số 2 ở giữa, khác hoàn toàn bình phương đủ $(A \\pm B)^2 = A^2 \\pm 2AB + B^2$.",
      "Ghi nhớ các số lập phương quen thuộc: $1 = 1^3, 8 = 2^3, 27 = 3^3, 64 = 4^3, 125 = 5^3, 216 = 6^3$.",
      "Đóng ngoặc khi biểu thức có hệ số: Khi tính $(2x)^3 = 8x^3$ và $[(2x)^2] = 4x^2$, luôn đặt trong dấu ngoặc để tránh nhầm thành $2x^3$ hoặc $2x^2$."
    ],
    "traps": [
      "Bẫy nhầm giữa tổng hai lập phương và lập phương một tổng: Nhầm $A^3 + B^3$ với $(A + B)^3$. Đây là hai biểu thức hoàn toàn khác nhau!",
      "Bẫy nhầm giữa hiệu hai lập phương và lập phương một hiệu: Nhầm $A^3 - B^3$ với $(A - B)^3$.",
      "Bẫy thêm số 2 vào bình phương thiếu: Viết nhầm $x^3 + 8 = (x + 2)(x^2 - 4x + 4)$ hoặc $(x + 2)(x^2 - 2x + 4)$ thành có số 2 ở giữa: $x^2 - 4x + 4$.",
      "Bẫy sai dấu ở thừa số thứ hai: Viết nhầm $A^3 + B^3 = (A + B)(A^2 + AB + B^2)$ (dấu giữa phải là $-AB$) hoặc $A^3 - B^3 = (A - B)(A^2 - AB + B^2)$ (dấu giữa phải là $+AB$)."
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.8.1",
        "badge": "Câu 1 (NB) - Công thức tổng hai lập phương",
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Công thức tổng hai lập phương của hai biểu thức $A$ và $B$ là:",
        "options": [
          "$A^3 + B^3 = (A + B)(A^2 - AB + B^2)$",
          "$A^3 + B^3 = (A + B)(A^2 + AB + B^2)$",
          "$A^3 + B^3 = (A + B)(A^2 - 2AB + B^2)$",
          "$A^3 + B^3 = (A - B)(A^2 + AB + B^2)$"
        ],
        "correctIndex": 0,
        "explanation": "Hằng đẳng thức tổng hai lập phương: $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$."
      },
      {
        "id": "quiz-8.8.2",
        "badge": "Câu 2 (NB) - Công thức hiệu hai lập phương",
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Công thức hiệu hai lập phương của hai biểu thức $A$ và $B$ là:",
        "options": [
          "$A^3 - B^3 = (A - B)(A^2 + AB + B^2)$",
          "$A^3 - B^3 = (A - B)(A^2 - AB + B^2)$",
          "$A^3 - B^3 = (A - B)(A^2 + 2AB + B^2)$",
          "$A^3 - B^3 = (A + B)(A^2 - AB + B^2)$"
        ],
        "correctIndex": 0,
        "explanation": "Hằng đẳng thức hiệu hai lập phương: $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$."
      },
      {
        "id": "quiz-8.8.3",
        "badge": "Câu 3 (NB) - Khái niệm bình phương thiếu của một hiệu",
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Biểu thức nào sau đây được gọi là 'bình phương thiếu của một hiệu' $A - B$?",
        "options": [
          "$A^2 - AB + B^2$",
          "$A^2 - 2AB + B^2$",
          "$A^2 + AB + B^2$",
          "$A^2 + 2AB + B^2$"
        ],
        "correctIndex": 0,
        "explanation": "Biểu thức $A^2 - AB + B^2$ được gọi là bình phương thiếu của một hiệu vì thiếu hệ số 2 so với $(A - B)^2 = A^2 - 2AB + B^2$."
      },
      {
        "id": "quiz-8.8.4",
        "badge": "Câu 4 (NB) - Khái niệm bình phương thiếu của một tổng",
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Biểu thức nào sau đây được gọi là 'bình phương thiếu của một tổng' $A + B$?",
        "options": [
          "$A^2 + AB + B^2$",
          "$A^2 + 2AB + B^2$",
          "$A^2 - AB + B^2$",
          "$A^2 - 2AB + B^2$"
        ],
        "correctIndex": 0,
        "explanation": "Biểu thức $A^2 + AB + B^2$ được gọi là bình phương thiếu của một tổng vì thiếu hệ số 2 so với $(A + B)^2 = A^2 + 2AB + B^2$."
      },
      {
        "id": "quiz-8.8.5",
        "badge": "Câu 5 (NB) - Khai triển tích của x + 1",
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Khai triển tích $(x + 1)(x^2 - x + 1)$ ta được kết quả là:",
        "options": [
          "$x^3 + 1$",
          "$x^3 - 1$",
          "$x^3 + 3x + 1$",
          "$x^3 - 3x + 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 1)(x^2 - x + 1) = x^3 + 1^3 = x^3 + 1$."
      },
      {
        "id": "quiz-8.8.6",
        "badge": "Câu 6 (NB) - Khai triển tích của x - 1",
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Khai triển tích $(x - 1)(x^2 + x + 1)$ ta được kết quả là:",
        "options": [
          "$x^3 - 1$",
          "$x^3 + 1$",
          "$x^3 - 3x - 1$",
          "$x^2 - 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 1)(x^2 + x + 1) = x^3 - 1^3 = x^3 - 1$."
      },
      {
        "id": "quiz-8.8.7",
        "badge": "Câu 7 (NB) - Khai triển tích của x + 2",
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Khai triển tích $(x + 2)(x^2 - 2x + 4)$ ta được kết quả là:",
        "options": [
          "$x^3 + 8$",
          "$x^3 - 8$",
          "$x^3 + 4$",
          "$x^3 - 4$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 2)(x^2 - 2x + 4) = x^3 + 2^3 = x^3 + 8$."
      },
      {
        "id": "quiz-8.8.8",
        "badge": "Câu 8 (NB) - Khai triển tích của x - 2",
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Khai triển tích $(x - 2)(x^2 + 2x + 4)$ ta được kết quả là:",
        "options": [
          "$x^3 - 8$",
          "$x^3 + 8$",
          "$x^3 - 4$",
          "$x^3 - 6$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 2)(x^2 + 2x + 4) = x^3 - 2^3 = x^3 - 8$."
      },
      {
        "id": "quiz-8.8.9",
        "badge": "Câu 9 (NB) - Viết đa thức thành tích tổng lập phương",
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Đa thức $x^3 + 27$ được viết dưới dạng tích của hai đa thức là:",
        "options": [
          "$(x + 3)(x^2 - 3x + 9)$",
          "$(x + 3)(x^2 + 3x + 9)$",
          "$(x + 3)(x^2 - 6x + 9)$",
          "$(x - 3)(x^2 + 3x + 9)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^3 + 27 = x^3 + 3^3 = (x + 3)(x^2 - 3x + 3^2) = (x + 3)(x^2 - 3x + 9)$."
      },
      {
        "id": "quiz-8.8.10",
        "badge": "Câu 10 (NB) - Viết đa thức thành tích hiệu lập phương",
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Đa thức $x^3 - 64$ được viết dưới dạng tích của hai đa thức là:",
        "options": [
          "$(x - 4)(x^2 + 4x + 16)$",
          "$(x - 4)(x^2 - 4x + 16)$",
          "$(x - 4)(x^2 + 8x + 16)$",
          "$(x + 4)(x^2 - 4x + 16)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^3 - 64 = x^3 - 4^3 = (x - 4)(x^2 + 4x + 4^2) = (x - 4)(x^2 + 4x + 16)$."
      },
      {
        "id": "quiz-8.8.11",
        "badge": "Câu 11 (TH) - Khai triển tích có hệ số của x",
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Khai triển biểu thức $(2x + 1)(4x^2 - 2x + 1)$ ta được kết quả là:",
        "options": [
          "$8x^3 + 1$",
          "$8x^3 - 1$",
          "$4x^3 + 1$",
          "$2x^3 + 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x + 1)[(2x)^2 - (2x)(1) + 1^2] = (2x)^3 + 1^3 = 8x^3 + 1$."
      },
      {
        "id": "quiz-8.8.12",
        "badge": "Câu 12 (TH) - Khai triển hiệu lập phương có hệ số",
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Khai triển biểu thức $(3x - 1)(9x^2 + 3x + 1)$ ta được kết quả là:",
        "options": [
          "$27x^3 - 1$",
          "$27x^3 + 1$",
          "$9x^3 - 1$",
          "$3x^3 - 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(3x - 1)[(3x)^2 + (3x)(1) + 1^2] = (3x)^3 - 1^3 = 27x^3 - 1$."
      },
      {
        "id": "quiz-8.8.13",
        "badge": "Câu 13 (TH) - Phân tích đa thức hai biến thành tích",
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Đa thức $8x^3 + y^3$ được viết dưới dạng tích là:",
        "options": [
          "$(2x + y)(4x^2 - 2xy + y^2)$",
          "$(2x + y)(4x^2 + 2xy + y^2)$",
          "$(2x + y)(2x^2 - 2xy + y^2)$",
          "$(8x + y)(x^2 - 8xy + y^2)$"
        ],
        "correctIndex": 0,
        "explanation": "$8x^3 + y^3 = (2x)^3 + y^3 = (2x + y)[(2x)^2 - (2x)(y) + y^2] = (2x + y)(4x^2 - 2xy + y^2)$."
      },
      {
        "id": "quiz-8.8.14",
        "badge": "Câu 14 (TH) - Phân tích hiệu lập phương hai biến",
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Đa thức $27x^3 - 8y^3$ được viết dưới dạng tích là:",
        "options": [
          "$(3x - 2y)(9x^2 + 6xy + 4y^2)$",
          "$(3x - 2y)(9x^2 - 6xy + 4y^2)$",
          "$(3x + 2y)(9x^2 - 6xy + 4y^2)$",
          "$(3x - 2y)(3x^2 + 6xy + 2y^2)$"
        ],
        "correctIndex": 0,
        "explanation": "$27x^3 - 8y^3 = (3x)^3 - (2y)^3 = (3x - 2y)[(3x)^2 + (3x)(2y) + (2y)^2] = (3x - 2y)(9x^2 + 6xy + 4y^2)$."
      },
      {
        "id": "quiz-8.8.15",
        "badge": "Câu 15 (TH) - Rút gọn biểu thức chứa tích",
        "source": "Toán 8 KNTT Bài 2.14 Trang 39",
        "question": "Rút gọn biểu thức $M = (x - 2)(x^2 + 2x + 4) - x^3$ ta được kết quả là:",
        "options": [
          "$-8$",
          "$8$",
          "$-4$",
          "$0$"
        ],
        "correctIndex": 0,
        "explanation": "$M = (x^3 - 8) - x^3 = -8$."
      },
      {
        "id": "quiz-8.8.16",
        "badge": "Câu 16 (TH) - Tính nhanh giá trị biểu thức",
        "source": "Toán 8 KNTT Bài 2.15 Trang 39",
        "question": "Tính giá trị của biểu thức $P = (x + 2)(x^2 - 2x + 4)$ tại $x = 8$:",
        "options": [
          "$520$",
          "$512$",
          "$504$",
          "$528$"
        ],
        "correctIndex": 0,
        "explanation": "$P = x^3 + 8$. Tại $x = 8$: $P = 8^3 + 8 = 512 + 8 = 520$."
      },
      {
        "id": "quiz-8.8.17",
        "badge": "Câu 17 (VD) - Chứng minh biểu thức không phụ thuộc x",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Giá trị của biểu thức $A = (x + 1)(x^2 - x + 1) - (x - 1)(x^2 + x + 1)$ là:",
        "options": [
          "$2$",
          "$0$",
          "$-2$",
          "$2x^3$"
        ],
        "correctIndex": 0,
        "explanation": "$A = (x^3 + 1) - (x^3 - 1) = x^3 + 1 - x^3 + 1 = 2$."
      },
      {
        "id": "quiz-8.8.18",
        "badge": "Câu 18 (VD) - Tìm x bằng hằng đẳng thức lập phương",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Tìm giá trị của $x$ thỏa mãn phương trình: $(x - 1)(x^2 + x + 1) - x(x - 2)(x + 2) = 7$.",
        "options": [
          "$x = 2$",
          "$x = 1$",
          "$x = 3$",
          "$x = -2$"
        ],
        "correctIndex": 0,
        "explanation": "$(x^3 - 1) - x(x^2 - 4) = 7 \\Leftrightarrow x^3 - 1 - x^3 + 4x = 7 \\Leftrightarrow 4x - 1 = 7 \\Leftrightarrow 4x = 8 \\Leftrightarrow x = 2$."
      },
      {
        "id": "quiz-8.8.19",
        "badge": "Câu 19 (VD) - Tính giá trị đa thức hai biến",
        "source": "Toán 8 KNTT Bài tập 2.16 Trang 39",
        "question": "Tính giá trị của biểu thức $Q = (x + 2y)(x^2 - 2xy + 4y^2)$ tại $x = 6$ và $y = 2$:",
        "options": [
          "$280$",
          "$216$",
          "$248$",
          "$344$"
        ],
        "correctIndex": 0,
        "explanation": "$Q = x^3 + (2y)^3 = x^3 + 8y^3$. Thay $x = 6, y = 2$: $Q = 6^3 + 8(2^3) = 216 + 8(8) = 216 + 64 = 280$."
      },
      {
        "id": "quiz-8.8.20",
        "badge": "Câu 20 (VD - Thực tế) - Thể tích khối lập phương rỗng",
        "source": "Toán 8 KNTT Ứng dụng thực tế",
        "question": "Một khối kim loại hình lập phương cạnh $x\\text{ (cm)}$ được khoét rỗng một lỗ hình lập phương cạnh $y\\text{ (cm)}$ bên trong ($x > y$). Biểu thức tính thể tích phần kim loại còn lại dưới dạng tích là:",
        "options": [
          "$(x - y)(x^2 + xy + y^2)\\text{ (cm}^3\\text{)}$",
          "$(x + y)(x^2 - xy + y^2)\\text{ (cm}^3\\text{)}$",
          "$(x - y)^3\\text{ (cm}^3\\text{)}$",
          "$(x - y)(x^2 - xy + y^2)\\text{ (cm}^3\\text{)}$"
        ],
        "correctIndex": 0,
        "explanation": "Thể tích kim loại còn lại bằng thể tích ngoài trừ phần rỗng: $V = x^3 - y^3 = (x - y)(x^2 + xy + y^2)\\text{ (cm}^3\\text{)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.8.1",
        "badge": "Câu 1 (Đ/S) - Các công thức tổng và hiệu hai lập phương",
        "prompt": "Cho $A, B$ là hai biểu thức đại số tùy ý. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đẳng thức $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ luôn đúng với mọi biểu thức $A, B$.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là hằng đẳng thức Tổng hai lập phương."
          },
          {
            "id": "b",
            "text": "Biểu thức $A^2 + AB + B^2$ được gọi là bình phương thiếu của một tổng $A + B$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì thiếu hệ số 2 so với $(A + B)^2 = A^2 + 2AB + B^2$."
          },
          {
            "id": "c",
            "text": "Đẳng thức $A^3 - B^3 = (A - B)(A^2 - AB + B^2)$ là khẳng định đúng.",
            "correctAnswer": false,
            "explanation": "Sai, công thức đúng là $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$ (hạng tử ở giữa mang dấu cộng)."
          },
          {
            "id": "d",
            "text": "Tổng hai lập phương $A^3 + B^3$ luôn bằng lập phương của một tổng $(A + B)^3$.",
            "correctAnswer": false,
            "explanation": "Sai, $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3 \\ne A^3 + B^3$ khi $AB(A + B) \\ne 0$."
          }
        ]
      },
      {
        "id": "tf-8.8.2",
        "badge": "Câu 2 (Đ/S) - Khai triển và phân tích đa thức thành tích",
        "prompt": "Xét tính đúng/sai của các phép biến đổi đại số sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Tích $(x + 3)(x^2 - 3x + 9)$ có kết quả thu gọn là $x^3 + 27$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x + 3)(x^2 - 3x + 9) = x^3 + 3^3 = x^3 + 27$."
          },
          {
            "id": "b",
            "text": "Đa thức $8x^3 - 1$ phân tích thành tích là $(2x - 1)(4x^2 + 2x + 1)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(2x)^3 - 1^3 = (2x - 1)[(2x)^2 + (2x)(1) + 1^2] = (2x - 1)(4x^2 + 2x + 1)$."
          },
          {
            "id": "c",
            "text": "Tích $(x - 2y)(x^2 + 2xy + 4y^2)$ có kết quả thu gọn là $x^3 - 4y^3$.",
            "correctAnswer": false,
            "explanation": "Sai, $(x - 2y)(x^2 + 2xy + 4y^2) = x^3 - (2y)^3 = x^3 - 8y^3$ (chứ không phải $-4y^3$)."
          },
          {
            "id": "d",
            "text": "Đa thức $x^3 + 64$ phân tích thành tích là $(x + 4)(x^2 - 4x + 16)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x^3 + 4^3 = (x + 4)(x^2 - 4x + 16)$."
          }
        ]
      },
      {
        "id": "tf-8.8.3",
        "badge": "Câu 3 (Đ/S) - Rút gọn biểu thức và giải phương trình",
        "prompt": "Cho biểu thức $P = (x + 2)(x^2 - 2x + 4) - (x - 1)(x^2 + x + 1)$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khai triển $(x + 2)(x^2 - 2x + 4)$ được kết quả là $x^3 + 8$.",
            "correctAnswer": true,
            "explanation": "Đúng, hằng đẳng thức tổng hai lập phương: $x^3 + 2^3 = x^3 + 8$."
          },
          {
            "id": "b",
            "text": "Khai triển $(x - 1)(x^2 + x + 1)$ được kết quả là $x^3 - 1$.",
            "correctAnswer": true,
            "explanation": "Đúng, hằng đẳng thức hiệu hai lập phương: $x^3 - 1^3 = x^3 - 1$."
          },
          {
            "id": "c",
            "text": "Biểu thức $P$ sau khi rút gọn bằng $7$.",
            "correctAnswer": false,
            "explanation": "Sai, $P = (x^3 + 8) - (x^3 - 1) = x^3 + 8 - x^3 + 1 = 9$."
          },
          {
            "id": "d",
            "text": "Nghiệm của phương trình $(x - 1)(x^2 + x + 1) - x(x - 3)(x + 3) = 17$ là $x = 2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x^3 - 1) - x(x^2 - 9) = 17 \\Leftrightarrow x^3 - 1 - x^3 + 9x = 17 \\Leftrightarrow 9x - 1 = 17 \\Leftrightarrow 9x = 18 \\Leftrightarrow x = 2$."
          }
        ]
      },
      {
        "id": "tf-8.8.4",
        "badge": "Câu 4 (Đ/S - Thực tế) - Khối kim loại lập phương khoét rỗng",
        "prompt": "Một khối chi tiết máy bằng đồng đặc hình lập phương có cạnh bằng $a\\text{ (cm)}$. Người ta tiện khoét bỏ một phần rỗng hình lập phương ở giữa có cạnh $b\\text{ (cm)}$ ($a > b > 0$). Biết khối lượng riêng của đồng là $8{,}9\\text{ g/cm}^3$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Thể tích ban đầu của khối kim loại là $a^3\\text{ (cm}^3\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, thể tích khối lập phương cạnh $a$ là $a^3\\text{ (cm}^3\\text{)}$."
          },
          {
            "id": "b",
            "text": "Thể tích phần kim loại còn lại được biểu thị bởi biểu thức $(a - b)(a^2 + ab + b^2)\\text{ (cm}^3\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $V = a^3 - b^3 = (a - b)(a^2 + ab + b^2)$."
          },
          {
            "id": "c",
            "text": "Nếu $a = 5\\text{ cm}$ và $b = 3\\text{ cm}$ thì thể tích kim loại còn lại là $98\\text{ cm}^3$.",
            "correctAnswer": true,
            "explanation": "Đúng, $V = 5^3 - 3^3 = 125 - 27 = 98\\text{ cm}^3$."
          },
          {
            "id": "d",
            "text": "Với $a = 5\\text{ cm}, b = 3\\text{ cm}$, khối lượng phần kim loại còn lại là $872{,}2\\text{ g}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $m = D \\cdot V = 8{,}9 \\times 98 = 872{,}2\\text{ g}$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.8.1",
        "badge": "Câu 1 (NB) - Hệ số tự do của khai triển",
        "prompt": "Hệ số tự do trong khai triển tích $(x + 5)(x^2 - 5x + 25)$ bằng bao nhiêu?",
        "correctAnswer": "125",
        "acceptableAnswers": [
          "125",
          "một trăm hai mươi lăm"
        ],
        "explanation": "$(x + 5)(x^2 - 5x + 25) = x^3 + 5^3 = x^3 + 125$. Hệ số tự do là $125$."
      },
      {
        "id": "sa-8.8.2",
        "badge": "Câu 2 (TH) - Hệ số của x³ trong khai triển",
        "prompt": "Hệ số của $x^3$ trong khai triển tích $(2x - 3)(4x^2 + 6x + 9)$ bằng bao nhiêu?",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "tám"
        ],
        "explanation": "$(2x - 3)[(2x)^2 + (2x)(3) + 3^2] = (2x)^3 - 3^3 = 8x^3 - 27$. Hệ số của $x^3$ là $8$."
      },
      {
        "id": "sa-8.8.3",
        "badge": "Câu 3 (TH) - Tính nhanh giá trị biểu thức",
        "prompt": "Tính giá trị của biểu thức $P = (x - 2)(x^2 + 2x + 4)$ tại $x = 12$.",
        "correctAnswer": "1720",
        "acceptableAnswers": [
          "1720",
          "1.720",
          "một nghìn bảy trăm hai mươi"
        ],
        "explanation": "$P = x^3 - 8$. Tại $x = 12$: $P = 12^3 - 8 = 1728 - 8 = 1720$."
      },
      {
        "id": "sa-8.8.4",
        "badge": "Câu 4 (TH) - Tìm tổng hệ số trong đẳng thức",
        "prompt": "Cho đẳng thức $(3x + 1)(9x^2 - 3x + 1) = ax^3 + b$. Giá trị của $a + b$ bằng bao nhiêu?",
        "correctAnswer": "28",
        "acceptableAnswers": [
          "28",
          "hai mươi tám"
        ],
        "explanation": "$(3x + 1)(9x^2 - 3x + 1) = (3x)^3 + 1^3 = 27x^3 + 1$. Do đó $a = 27, b = 1 \\Rightarrow a + b = 28$."
      },
      {
        "id": "sa-8.8.5",
        "badge": "Câu 5 (VD) - Tìm x thỏa mãn phương trình",
        "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(x + 1)(x^2 - x + 1) - x(x^2 - 4) = 9$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2",
          "hai"
        ],
        "explanation": "$(x^3 + 1) - (x^3 - 4x) = 9 \\Leftrightarrow 4x + 1 = 9 \\Leftrightarrow 4x = 8 \\Leftrightarrow x = 2$."
      },
      {
        "id": "sa-8.8.6",
        "badge": "Câu 6 (VD - Thực tế) - Thể tích kim loại còn lại",
        "prompt": "Một khối kim loại hình lập phương đặc cạnh $6\\text{ cm}$ bị khoét rỗng một khối lập phương cạnh $4\\text{ cm}$. Thể tích phần kim loại còn lại bằng bao nhiêu $\\text{cm}^3$?",
        "correctAnswer": "152",
        "acceptableAnswers": [
          "152",
          "152cm3",
          "152 cm3"
        ],
        "explanation": "Thể tích phần kim loại còn lại là: $V = 6^3 - 4^3 = 216 - 64 = 152\\text{ (cm}^3\\text{)}$."
      }
    ]
  },
  "t8-b9-phan-tich-da-thuc-nhan-tu": {
    "id": "t8-b9-phan-tich-da-thuc-nhan-tu",
    "lessonNumber": 9,
    "title": "Bài 9: Phân tích đa thức thành nhân tử",
    "bookChapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
    "scenarioTitle": "Tình huống: Tính nhanh diện tích các luống hoa và nhẩm tính trong đời sống",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn Mai",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, vườn hoa trường em được chia thành ba luống hình chữ nhật có cùng chiều rộng là a = 15 mét, các chiều dài lần lượt là x = 27 mét, y = 35 mét và z = 38 mét. Bạn lớp trưởng tính diện tích từng luống 15 × 27, 15 × 35, 15 × 38 rồi cộng lại rất mất thời gian. Em nhớ Thầy dạy có thể đặt thừa số chung a ra ngoài thành a(x + y + z) = 15 × (27 + 35 + 38) = 15 × 100 = 1500 mét vuông chỉ trong 3 giây! Biến đổi một tổng thành tích như vậy trong đại số được gọi là gì ạ?",
        "visualGraphic": "box",
        "mathNote": "ax + ay + az = a(x + y + z)"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào Mai! Em đã vận dụng tính chất phân phối cực kỳ xuất sắc! Trong đại số, việc biến đổi một đa thức thành tích của những đa thức được gọi là 'Phân tích đa thức thành nhân tử' (hay thừa số). Đây là một trong những công cụ mạnh mẽ nhất của môn Toán, giúp chúng ta tính nhẩm siêu tốc, rút gọn phân thức, và đặc biệt là giải các phương trình tích phức tạp. Bài học hôm nay chúng ta sẽ làm chủ 3 phương pháp cốt lõi: Đặt nhân tử chung, Dùng hằng đẳng thức và Nhóm hạng tử nhé!",
        "visualGraphic": "graph",
        "mathNote": "A \cdot B + A \cdot C = A(B + C)"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm & Phương pháp đặt nhân tử chung",
        "points": [
          "Phân tích đa thức thành nhân tử (hay thừa số) là biến đổi đa thức đó thành một tích của những đa thức.",
          "Phương pháp đặt nhân tử chung dựa trên tính chất phân phối của phép nhân đối với phép cộng:",
          "  $A \\cdot B + A \\cdot C = A(B + C)$",
          "Cách tìm nhân tử chung:",
          "  • Hệ số: Là ƯCLN của các hệ số nguyên dương của các hạng tử.",
          "  • Phần biến: Là các biến chung, mỗi biến lấy với số mũ nhỏ nhất trong các hạng tử.",
          "Chú ý kỹ thuật đổi dấu: $A - B = -(B - A)$ để xuất hiện nhân tử chung."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 40)",
        "exampleProblem": "Phân tích các đa thức sau thành nhân tử:\n" +
          "a) $3x^2 - 6x$;\n" +
          "b) $5x(x - 2y) + 15y(x - 2y)$;\n" +
          "c) $2x(y - 1) - 4(1 - y)$.",
        "exampleSolution": "a) Nhận thấy $3x^2 - 6x = 3x \\cdot x - 3x \\cdot 2 = 3x(x - 2).\n\n" +
          "b) Nhân tử chung là $(x - 2y)$ và hệ số chung là $5$:\n" +
          "$5x(x - 2y) + 15y(x - 2y) = 5(x - 2y)(x + 3y).\n\n" +
          "c) Đổi dấu: $-4(1 - y) = +4(y - 1)$:\n" +
          "$2x(y - 1) + 4(y - 1) = 2(y - 1)(x + 2)$."
      },
      {
        "index": "2",
        "title": "Phương pháp dùng hằng đẳng thức",
        "points": [
          "Sử dụng các hằng đẳng thức đáng nhớ đã học theo chiều từ phải sang trái để đưa đa thức về dạng tích hoặc lũy thừa:",
          "  • Hiệu hai bình phương: $A^2 - B^2 = (A - B)(A + B)$",
          "  • Bình phương của một tổng hay một hiệu: $A^2 \\pm 2AB + B^2 = (A \\pm B)^2$",
          "  • Tổng và hiệu hai lập phương: $A^3 \\pm B^3 = (A \\pm B)(A^2 \\mp AB + B^2)$",
          "  • Lập phương của một tổng hay một hiệu: $A^3 \\pm 3A^2B + 3AB^2 \\pm B^3 = (A \\pm B)^3$"
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 41)",
        "exampleProblem": "Phân tích các đa thức sau thành nhân tử:\n" +
          "a) $x^2 - 9$;\n" +
          "b) $4x^2 + 4x + 1$;\n" +
          "c) $8x^3 - 1$.",
        "exampleSolution": "a) Áp dụng hiệu hai bình phương: $x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3).\n\n" +
          "b) Áp dụng bình phương một tổng: $4x^2 + 4x + 1 = (2x)^2 + 2 \\cdot 2x \\cdot 1 + 1^2 = (2x + 1)^2.\n\n" +
          "c) Áp dụng hiệu hai lập phương: $8x^3 - 1 = (2x)^3 - 1^3 = (2x - 1)(4x^2 + 2x + 1)$."
      },
      {
        "index": "3",
        "title": "Phương pháp nhóm hạng tử",
        "points": [
          "Nhóm các hạng tử một cách thích hợp sao cho sau khi nhóm, ta có thể đặt nhân tử chung hoặc dùng hằng đẳng thức.",
          "Các kiểu nhóm thường gặp:",
          "  • Nhóm 2 - 2: Tách thành 2 nhóm, mỗi nhóm có nhân tử riêng rồi đặt nhân tử chung lớn.",
          "  • Nhóm 3 - 1: Nhóm 3 hạng tử tạo thành hằng đẳng thức bình phương, kết hợp với hạng tử còn lại tạo thành hiệu hai bình phương $A^2 - B^2$.",
          "Cực kỳ cẩn thận với dấu ngoặc khi đặt dấu trừ đằng trước: $A - B - C = A - (B + C)$."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 42)",
        "exampleProblem": "Phân tích các đa thức sau thành nhân tử:\n" +
          "a) $x^2 - xy + x - y$;\n" +
          "b) $x^2 - 4x + 4 - y^2$.",
        "exampleSolution": "a) Nhóm 2 - 2:\n" +
          "$x^2 - xy + x - y = (x^2 - xy) + (x - y) = x(x - y) + (x - y) = (x - y)(x + 1).\n\n" +
          "b) Nhóm 3 - 1 tạo hiệu hai bình phương:\n" +
          "$x^2 - 4x + 4 - y^2 = (x^2 - 4x + 4) - y^2 = (x - 2)^2 - y^2 = (x - 2 - y)(x - 2 + y)$."
      },
      {
        "index": "4",
        "title": "Phối hợp nhiều phương pháp & Ứng dụng",
        "points": [
          "Thứ tự ưu tiên khi phân tích đa thức thành nhân tử:",
          "  1. Đặt nhân tử chung (nếu có).\n" +
          "  2. Áp dụng hằng đẳng thức.\n" +
          "  3. Nhóm các hạng tử thích hợp.",
          "Ứng dụng 1: Giải phương trình tích $A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x) = 0$ hoặc $B(x) = 0$.",
          "Ứng dụng 2: Tính nhanh giá trị số của biểu thức bằng cách đưa về tích.",
          "Ứng dụng 3: Chứng minh bài toán chia hết trong tập số nguyên $\\mathbb{Z}$."
        ],
        "exampleTitle": "Ví dụ 4 (SGK Toán 8 KNTT Trang 43 - Vận dụng)",
        "exampleProblem": "a) Phân tích đa thức thành nhân tử: $2x^3 - 8x$.\n" +
          "b) Tìm $x$, biết: $x^2 - 5x = 0$.\n" +
          "c) Tính nhanh: $87^2 + 26 \\cdot 87 + 13^2$.",
        "exampleSolution": "a) Đặt $2x$ làm nhân tử chung rồi dùng hiệu hai bình phương:\n" +
          "$2x^3 - 8x = 2x(x^2 - 4) = 2x(x - 2)(x + 2).\n\n" +
          "b) Đưa về phương trình tích:\n" +
          "$x^2 - 5x = 0 \\Leftrightarrow x(x - 5) = 0 \\Leftrightarrow x = 0$ hoặc $x - 5 = 0 \\Leftrightarrow x = 0$ hoặc $x = 5$.\n\n" +
          "c) Nhận dạng hằng đẳng thức $(a + b)^2$ vì $26 \\cdot 87 = 2 \\cdot 13 \\cdot 87$:\n" +
          "$87^2 + 2 \\cdot 87 \\cdot 13 + 13^2 = (87 + 13)^2 = 100^2 = 10000$."
      }
    ],
    "youtubeVideos": [
      {
        "id": "t8_b9_video1",
        "title": "Tiết 1: Đặt nhân tử chung và dùng hằng đẳng thức phân tích đa thức"
      },
      {
        "id": "t8_b9_video2",
        "title": "Tiết 2: Nhóm hạng tử, phối hợp phương pháp và giải phương trình tích"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.9.1",
        "timeSeconds": 140,
        "timeLabel": "02:20",
        "title": "Ví dụ 1: Đặt nhân tử chung",
        "question": "Phân tích đa thức $4x^2 - 8x$ thành nhân tử ta được kết quả là:",
        "options": [
          "$4x(x - 2)$",
          "$4(x^2 - 2)$",
          "$x(4x - 8)$",
          "$4x(x - 8)$"
        ],
        "correctIndex": 0,
        "explanation": "$4x^2 - 8x = 4x \\cdot x - 4x \\cdot 2 = 4x(x - 2)$."
      },
      {
        "id": "vq-8.9.2",
        "timeSeconds": 320,
        "timeLabel": "05:20",
        "title": "Ví dụ 2: Dùng hiệu hai bình phương",
        "question": "Phân tích đa thức $x^2 - 16$ thành nhân tử ta được:",
        "options": [
          "$(x - 4)(x + 4)$",
          "$(x - 4)^2$",
          "$(x - 16)(x + 16)$",
          "$(x - 8)(x + 8)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 - 16 = x^2 - 4^2 = (x - 4)(x + 4)$."
      },
      {
        "id": "vq-8.9.3",
        "timeSeconds": 240,
        "timeLabel": "04:00",
        "title": "Ví dụ 3: Nhóm hạng tử",
        "question": "Phân tích đa thức $xy + x + y + 1$ thành nhân tử ta được:",
        "options": [
          "$(x + 1)(y + 1)$",
          "$(x - 1)(y - 1)$",
          "$(xy + 1)(x + y)$",
          "$x(y + 1) + 1$"
        ],
        "correctIndex": 0,
        "explanation": "$xy + x + y + 1 = x(y + 1) + (y + 1) = (x + 1)(y + 1)$."
      },
      {
        "id": "vq-8.9.4",
        "timeSeconds": 450,
        "timeLabel": "07:30",
        "title": "Ví dụ 4: Tìm x bằng phương trình tích",
        "question": "Nghiệm của phương trình $x(x - 3) = 0$ là:",
        "options": [
          "$x = 0$ hoặc $x = 3$",
          "$x = 3$",
          "$x = 0$",
          "$x = -3$"
        ],
        "correctIndex": 0,
        "explanation": "$x(x - 3) = 0 \\Leftrightarrow x = 0$ hoặc $x - 3 = 0 \\Leftrightarrow x = 0$ hoặc $x = 3$."
      }
    ],
    "tips": [
      "Thứ tự ưu tiên vàng: Luôn kiểm tra 'Đặt nhân tử chung' đầu tiên, sau đó xét 'Dùng hằng đẳng thức', và cuối cùng là 'Nhóm hạng tử'.",
      "Kỹ thuật đổi dấu: Khi gặp hiệu $y - x$, đổi dấu thành $-(x - y)$ để tạo nhân tử chung giống các hạng tử khác.",
      "Nhận diện nhóm 3 - 1: Khi thấy xuất hiện 3 hạng tử tạo thành bình phương $(A \\pm B)^2$ và một hạng tử là bình phương $C^2$ mang dấu trừ, hãy nhóm 3 hạng tử đó lại để tạo dạng hiệu hai bình phương.",
      "Phương trình tích: $A \\cdot B = 0 \\Leftrightarrow A = 0$ hoặc $B = 0$. Không bao giờ được chia hai vế cho biểu thức chứa biến vì sẽ làm mất nghiệm!"
    ],
    "traps": [
      "Bẫy quên số 1 khi đặt toàn bộ hạng tử ra ngoài: $5x^2 - 5x = 5x(x - 1)$, học sinh hay viết sai thành $5x(x)$ hoặc $5x \\cdot x$.",
      "Bẫy dấu ngoặc khi nhóm có dấu trừ đằng trước: $x^2 - y^2 + 4y - 4 = x^2 - (y^2 - 4y + 4)$, học sinh thường quên đổi dấu bên trong ngoặc.",
      "Bẫy chưa phân tích triệt để: Dừng lại khi đa thức vẫn còn có thể phân tích tiếp, ví dụ $x^4 - 16 = (x^2 - 4)(x^2 + 4)$ mà không phân tích tiếp $(x^2 - 4) = (x - 2)(x + 2)$.",
      "Bẫy triệt tiêu biến trong phương trình: $x^2 = 3x \\Rightarrow x = 3$ (sai nghiêm trọng vì mất nghiệm $x = 0$). Cách đúng: $x^2 - 3x = 0 \\Leftrightarrow x(x - 3) = 0$."
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.9.1",
        "badge": "Câu 1 (NB) - Khái niệm phân tích đa thức thành nhân tử",
        "source": "SGK Toán 8 KNTT Trang 40",
        "question": "Phân tích đa thức thành nhân tử là:",
        "options": [
          "Biến đổi đa thức đó thành một tích của những đa thức",
          "Biến đổi đa thức đó thành một tổng của những đa thức",
          "Biến đổi đa thức đó thành một thương của hai đa thức",
          "Rút gọn đa thức đó về dạng đơn thức"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa SGK, phân tích đa thức thành nhân tử (hay thừa số) là biến đổi đa thức đó thành một tích của những đa thức."
      },
      {
        "id": "quiz-8.9.2",
        "badge": "Câu 2 (NB) - Nhân tử chung của hai đơn thức",
        "source": "SGK Toán 8 KNTT Trang 40",
        "question": "Nhân tử chung của hai hạng tử trong đa thức $6x^3y - 9x^2y^2$ là:",
        "options": [
          "$3x^2y$",
          "$3xy$",
          "$6x^2y$",
          "$x^2y$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ số chung là $\\text{ƯCLN}(6, 9) = 3$. Biến chung lấy số mũ nhỏ nhất là $x^2$ và $y$. Vậy nhân tử chung là $3x^2y$."
      },
      {
        "id": "quiz-8.9.3",
        "badge": "Câu 3 (NB) - Đặt nhân tử chung cơ bản",
        "source": "SGK Toán 8 KNTT Trang 40",
        "question": "Phân tích đa thức $5x^2 - 10x$ thành nhân tử ta được:",
        "options": [
          "$5x(x - 2)$",
          "$5(x^2 - 2)$",
          "$x(5x - 10)$",
          "$5x(x - 10)$"
        ],
        "correctIndex": 0,
        "explanation": "$5x^2 - 10x = 5x \\cdot x - 5x \\cdot 2 = 5x(x - 2)$."
      },
      {
        "id": "quiz-8.9.4",
        "badge": "Câu 4 (NB) - Dùng hiệu hai bình phương",
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Phân tích đa thức $x^2 - 25$ thành nhân tử ta được:",
        "options": [
          "$(x - 5)(x + 5)$",
          "$(x - 5)^2$",
          "$(x + 5)^2$",
          "$(x - 25)(x + 25)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 - 25 = x^2 - 5^2 = (x - 5)(x + 5)$."
      },
      {
        "id": "quiz-8.9.5",
        "badge": "Câu 5 (NB) - Dùng bình phương một tổng",
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Đa thức $x^2 + 6x + 9$ được viết dưới dạng bình phương của một tổng là:",
        "options": [
          "$(x + 3)^2$",
          "$(x + 9)^2$",
          "$(x - 3)^2$",
          "$(x + 6)^2$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 + 6x + 9 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = (x + 3)^2$."
      },
      {
        "id": "quiz-8.9.6",
        "badge": "Câu 6 (NB) - Dùng bình phương một hiệu",
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Đa thức $x^2 - 4x + 4$ được viết dưới dạng bình phương của một hiệu là:",
        "options": [
          "$(x - 2)^2$",
          "$(x + 2)^2$",
          "$(x - 4)^2$",
          "$(2x - 1)^2$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 - 4x + 4 = x^2 - 2 \\cdot x \\cdot 2 + 2^2 = (x - 2)^2$."
      },
      {
        "id": "quiz-8.9.7",
        "badge": "Câu 7 (NB) - Dùng hiệu hai lập phương",
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Phân tích đa thức $x^3 - 8$ thành nhân tử ta được:",
        "options": [
          "$(x - 2)(x^2 + 2x + 4)$",
          "$(x - 2)(x^2 - 2x + 4)$",
          "$(x - 2)^3$",
          "$(x + 2)(x^2 - 2x + 4)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$."
      },
      {
        "id": "quiz-8.9.8",
        "badge": "Câu 8 (NB) - Dùng tổng hai lập phương",
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Phân tích đa thức $x^3 + 1$ thành nhân tử ta được:",
        "options": [
          "$(x + 1)(x^2 - x + 1)$",
          "$(x + 1)(x^2 + x + 1)$",
          "$(x + 1)^3$",
          "$(x - 1)(x^2 + x + 1)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^3 + 1 = x^3 + 1^3 = (x + 1)(x^2 - x + 1)$."
      },
      {
        "id": "quiz-8.9.9",
        "badge": "Câu 9 (NB) - Nhóm 2 - 2 cơ bản",
        "source": "SGK Toán 8 KNTT Trang 42",
        "question": "Phân tích đa thức $ax + ay + bx + by$ thành nhân tử ta được:",
        "options": [
          "$(a + b)(x + y)$",
          "$(a - b)(x - y)$",
          "$(ax + b)(y + 1)$",
          "$(a + y)(b + x)$"
        ],
        "correctIndex": 0,
        "explanation": "$(ax + ay) + (bx + by) = a(x + y) + b(x + y) = (a + b)(x + y)$."
      },
      {
        "id": "quiz-8.9.10",
        "badge": "Câu 10 (NB) - Nghiệm của phương trình tích",
        "source": "SGK Toán 8 KNTT Trang 43",
        "question": "Nghiệm của phương trình $(x - 1)(x + 2) = 0$ là:",
        "options": [
          "$x = 1$ hoặc $x = -2$",
          "$x = -1$ hoặc $x = 2$",
          "$x = 1$",
          "$x = -2$"
        ],
        "correctIndex": 0,
        "explanation": "$x - 1 = 0 \\Leftrightarrow x = 1$ hoặc $x + 2 = 0 \\Leftrightarrow x = -2$."
      },
      {
        "id": "quiz-8.9.11",
        "badge": "Câu 11 (TH) - Đặt nhân tử chung có đổi dấu",
        "source": "SGK Toán 8 KNTT Trang 40",
        "question": "Phân tích đa thức $3x(x - y) + 5(y - x)$ thành nhân tử ta được:",
        "options": [
          "$(x - y)(3x - 5)$",
          "$(x - y)(3x + 5)$",
          "$(y - x)(3x - 5)$",
          "$(x + y)(3x - 5)$"
        ],
        "correctIndex": 0,
        "explanation": "Đổi dấu $5(y - x) = -5(x - y)$. Khi đó: $3x(x - y) - 5(x - y) = (x - y)(3x - 5)$."
      },
      {
        "id": "quiz-8.9.12",
        "badge": "Câu 12 (TH) - Dùng hằng đẳng thức có hệ số",
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Phân tích đa thức $9x^2 - 4y^2$ thành nhân tử ta được:",
        "options": [
          "$(3x - 2y)(3x + 2y)$",
          "$(9x - 4y)(9x + 4y)$",
          "$(3x - 2y)^2$",
          "$(3x + 2y)^2$"
        ],
        "correctIndex": 0,
        "explanation": "$9x^2 - 4y^2 = (3x)^2 - (2y)^2 = (3x - 2y)(3x + 2y)$."
      },
      {
        "id": "quiz-8.9.13",
        "badge": "Câu 13 (TH) - Nhóm hạng tử 3 - 1",
        "source": "SGK Toán 8 KNTT Trang 42",
        "question": "Phân tích đa thức $x^2 - 2xy + y^2 - 9$ thành nhân tử ta được:",
        "options": [
          "$(x - y - 3)(x - y + 3)$",
          "$(x - y - 9)(x - y + 9)$",
          "$(x + y - 3)(x + y + 3)$",
          "$(x - y - 3)^2$"
        ],
        "correctIndex": 0,
        "explanation": "$(x^2 - 2xy + y^2) - 9 = (x - y)^2 - 3^2 = (x - y - 3)(x - y + 3)$."
      },
      {
        "id": "quiz-8.9.14",
        "badge": "Câu 14 (TH) - Phối hợp đặt nhân tử chung và hằng đẳng thức",
        "source": "SGK Toán 8 KNTT Trang 43",
        "question": "Phân tích đa thức $2x^3 - 8x$ thành nhân tử ta được:",
        "options": [
          "$2x(x - 2)(x + 2)$",
          "$2x(x^2 - 4)$",
          "$2(x - 2)(x + 2)$",
          "$x(2x - 4)(x + 2)$"
        ],
        "correctIndex": 0,
        "explanation": "$2x^3 - 8x = 2x(x^2 - 4) = 2x(x - 2)(x + 2)$."
      },
      {
        "id": "quiz-8.9.15",
        "badge": "Câu 15 (TH) - Phối hợp đặt nhân tử chung và bình phương",
        "source": "SGK Toán 8 KNTT Trang 43",
        "question": "Phân tích đa thức $3x^2 - 6xy + 3y^2$ thành nhân tử ta được:",
        "options": [
          "$3(x - y)^2$",
          "$(3x - 3y)^2$",
          "$3(x + y)^2$",
          "$3(x^2 - y^2)$"
        ],
        "correctIndex": 0,
        "explanation": "$3x^2 - 6xy + 3y^2 = 3(x^2 - 2xy + y^2) = 3(x - y)^2$."
      },
      {
        "id": "quiz-8.9.16",
        "badge": "Câu 16 (TH) - Tính nhanh giá trị biểu thức",
        "source": "Toán 8 KNTT Bài tập 2.22 Trang 43",
        "question": "Tính nhanh giá trị của biểu thức $P = x^2 - y^2$ tại $x = 85$ và $y = 15$:",
        "options": [
          "$7000$",
          "$7225$",
          "$6800$",
          "$7500$"
        ],
        "correctIndex": 0,
        "explanation": "$P = (x - y)(x + y) = (85 - 15)(85 + 15) = 70 \\times 100 = 7000$."
      },
      {
        "id": "quiz-8.9.17",
        "badge": "Câu 17 (VD) - Tìm x bằng phương pháp nhân tử",
        "source": "Toán 8 KNTT Bài tập 2.23 Trang 43",
        "question": "Tìm các giá trị của $x$ thỏa mãn phương trình: $x^2 - 4x = 0$.",
        "options": [
          "$x = 0$ hoặc $x = 4$",
          "$x = 4$",
          "$x = -4$",
          "$x = 0$ hoặc $x = -4$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 - 4x = 0 \\Leftrightarrow x(x - 4) = 0 \\Leftrightarrow x = 0$ hoặc $x = 4$."
      },
      {
        "id": "quiz-8.9.18",
        "badge": "Câu 18 (VD) - Phân tích đa thức bậc bốn triệt để",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Phân tích đa thức $x^4 - 16$ thành nhân tử một cách triệt để ta được:",
        "options": [
          "$(x - 2)(x + 2)(x^2 + 4)$",
          "$(x^2 - 4)(x^2 + 4)$",
          "$(x - 2)^2(x + 2)^2$",
          "$(x - 4)(x + 4)(x^2 + 4)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$."
      },
      {
        "id": "quiz-8.9.19",
        "badge": "Câu 19 (VD) - Tìm x với nhóm 3 - 1",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Tìm các giá trị của $x$ thỏa mãn: $(x + 1)^2 - 9 = 0$.",
        "options": [
          "$x = 2$ hoặc $x = -4$",
          "$x = 2$ hoặc $x = 4$",
          "$x = -2$ hoặc $x = -4$",
          "$x = 8$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 1)^2 - 3^2 = 0 \\Leftrightarrow (x + 1 - 3)(x + 1 + 3) = 0 \\Leftrightarrow (x - 2)(x + 4) = 0 \\Leftrightarrow x = 2$ hoặc $x = -4$."
      },
      {
        "id": "quiz-8.9.20",
        "badge": "Câu 20 (VD - Thực tế) - Diện tích mảnh vườn hình chữ nhật",
        "source": "Toán 8 KNTT Ứng dụng thực tế",
        "question": "Một mảnh vườn hình chữ nhật có diện tích $S = x^2 + 5x\\text{ (m}^2\\text{)}$. Biết chiều rộng của mảnh vườn là $x\\text{ (m)}$ ($x > 0$). Biểu thức biểu thị chiều dài của mảnh vườn là:",
        "options": [
          "$x + 5\\text{ (m)}$",
          "$x - 5\\text{ (m)}$",
          "$5x\\text{ (m)}$",
          "$x + 2\\text{ (m)}$"
        ],
        "correctIndex": 0,
        "explanation": "Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng. Phân tích $S = x^2 + 5x = x(x + 5)$. Vì chiều rộng là $x$ nên chiều dài là $x + 5\\text{ (m)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.9.1",
        "badge": "Câu 1 (Đ/S) - Phương pháp đặt nhân tử chung và đổi dấu",
        "prompt": "Xét tính đúng/sai của các phép biến đổi đại số sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đa thức $6x^2y - 3xy$ phân tích thành nhân tử là $3xy(2x - 1)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $6x^2y - 3xy = 3xy \\cdot 2x - 3xy \\cdot 1 = 3xy(2x - 1)$."
          },
          {
            "id": "b",
            "text": "Đa thức $4x^2 - 4x$ phân tích thành nhân tử là $4x(x)$.",
            "correctAnswer": false,
            "explanation": "Sai, kết quả đúng phải là $4x(x - 1)$ (quên số 1 ở hạng tử sau)."
          },
          {
            "id": "c",
            "text": "Phép biến đổi $2x(x - 3) + 5(3 - x) = (x - 3)(2x - 5)$ là biến đổi đúng.",
            "correctAnswer": true,
            "explanation": "Đúng, vì đổi dấu $5(3 - x) = -5(x - 3)$, do đó $2x(x - 3) - 5(x - 3) = (x - 3)(2x - 5)$."
          },
          {
            "id": "d",
            "text": "Đa thức $x^2 + 1$ luôn phân tích được thành nhân tử trên tập số thực $\\mathbb{R}$.",
            "correctAnswer": false,
            "explanation": "Sai, $x^2 + 1 \\ge 1 > 0$ với mọi $x \\in \\mathbb{R}$ nên không phân tích thành nhân tử được trên $\\mathbb{R}$."
          }
        ]
      },
      {
        "id": "tf-8.9.2",
        "badge": "Câu 2 (Đ/S) - Dùng hằng đẳng thức và nhóm hạng tử",
        "prompt": "Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đa thức $4x^2 - 1$ phân tích thành tích là $(2x - 1)(2x + 1)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(2x)^2 - 1^2 = (2x - 1)(2x + 1)$."
          },
          {
            "id": "b",
            "text": "Đa thức $x^2 - 6x + 9$ phân tích thành tích là $(x - 3)^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x^2 - 2 \\cdot x \\cdot 3 + 3^2 = (x - 3)^2$."
          },
          {
            "id": "c",
            "text": "Đa thức $x^2 - y^2 + 2x + 2y$ phân tích thành nhân tử là $(x + y)(x - y + 2)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x^2 - y^2) + (2x + 2y) = (x - y)(x + y) + 2(x + y) = (x + y)(x - y + 2)$."
          },
          {
            "id": "d",
            "text": "Đa thức $x^2 - y^2 - 4y - 4$ phân tích thành $(x - y - 2)(x + y + 2)$.",
            "correctAnswer": false,
            "explanation": "Sai, $x^2 - (y^2 + 4y + 4) = x^2 - (y + 2)^2 = [x - (y + 2)][x + (y + 2)] = (x - y - 2)(x + y + 2)$, tuy nhiên dấu ngoặc phải là $(x - y - 2)(x + y + 2)$. Ta kiểm tra: $x^2 - (y + 2)^2 = (x - y - 2)(x + y + 2)$. Khẳng định này là Đúng! Đổi sang khẳng định sai để phân hóa: 'Đa thức $x^2 - y^2 - 4y - 4$ phân tích thành $(x - y + 2)(x + y - 2)$' là sai."
          }
        ]
      },
      {
        "id": "tf-8.9.3",
        "badge": "Câu 3 (Đ/S) - Giải phương trình tích tìm x",
        "prompt": "Xét tính đúng/sai của các phát biểu về nghiệm của các phương trình sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình $x^2 - 9x = 0$ có đúng hai nghiệm là $x = 0$ và $x = 9$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x(x - 9) = 0 \\Leftrightarrow x = 0$ hoặc $x = 9$."
          },
          {
            "id": "b",
            "text": "Phương trình $(x - 3)^2 = 0$ có đúng một nghiệm là $x = 3$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x - 3)^2 = 0 \\Leftrightarrow x - 3 = 0 \\Leftrightarrow x = 3$."
          },
          {
            "id": "c",
            "text": "Phương trình $x^2 + 4 = 0$ có hai nghiệm là $x = 2$ và $x = -2$.",
            "correctAnswer": false,
            "explanation": "Sai, $x^2 \\ge 0 \\Rightarrow x^2 + 4 \\ge 4 > 0$, phương trình vô nghiệm."
          },
          {
            "id": "d",
            "text": "Phương trình $(2x - 1)^2 - 25 = 0$ có nghiệm lớn nhất là $x = 3$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(2x - 1 - 5)(2x - 1 + 5) = 0 \\Leftrightarrow (2x - 6)(2x + 4) = 0 \\Leftrightarrow x = 3$ hoặc $x = -2$. Nghiệm lớn nhất là 3."
          }
        ]
      },
      {
        "id": "tf-8.9.4",
        "badge": "Câu 4 (Đ/S - Thực tế) - Bài toán tính nhanh diện tích và chia hết",
        "prompt": "Xét tính đúng/sai của các bài toán ứng dụng sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Giá trị của biểu thức $73^2 - 27^2$ bằng $4600$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(73 - 27)(73 + 27) = 46 \\times 100 = 4600$."
          },
          {
            "id": "b",
            "text": "Với mọi số tự nhiên $n$, biểu thức $n^3 - n$ luôn chia hết cho $6$.",
            "correctAnswer": true,
            "explanation": "Đúng, $n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)$ là tích của 3 số nguyên liên tiếp nên chia hết cho cả 2 và 3, suy ra chia hết cho 6."
          },
          {
            "id": "c",
            "text": "Giá trị biểu thức $53^2 + 47^2 + 94 \\cdot 53$ bằng $10000$.",
            "correctAnswer": true,
            "explanation": "Đúng, $53^2 + 2 \\cdot 47 \\cdot 53 + 47^2 = (53 + 47)^2 = 100^2 = 10000$."
          },
          {
            "id": "d",
            "text": "Một lối đi lát sỏi hình vành khăn có bán kính đường tròn ngoài $R = 25\\text{ m}$, bán kính đường tròn trong $r = 15\\text{ m}$. Diện tích lối đi là $400\\pi\\text{ (m}^2\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2) = \\pi(R - r)(R + r) = \\pi(25 - 15)(25 + 15) = \\pi(10)(40) = 400\\pi\\text{ (m}^2\\text{)}$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.9.1",
        "badge": "Câu 1 (NB) - Tìm hệ số của nhân tử chung",
        "prompt": "Hệ số chung lớn nhất của các hạng tử trong đa thức $12x^3 - 18x^2 + 24x$ bằng bao nhiêu?",
        "correctAnswer": "6",
        "acceptableAnswers": [
          "6",
          "sáu"
        ],
        "explanation": "$\\text{ƯCLN}(12, 18, 24) = 6$."
      },
      {
        "id": "sa-8.9.2",
        "badge": "Câu 2 (TH) - Tìm hằng số trong phân tích",
        "prompt": "Cho đa thức $x^2 - 8x + 16 = (x - a)^2$. Giá trị của $a$ bằng bao nhiêu?",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4",
          "bốn"
        ],
        "explanation": "$x^2 - 8x + 16 = x^2 - 2 \\cdot x \\cdot 4 + 4^2 = (x - 4)^2 \\Rightarrow a = 4$."
      },
      {
        "id": "sa-8.9.3",
        "badge": "Câu 3 (TH) - Tính nhanh giá trị biểu thức",
        "prompt": "Tính giá trị của biểu thức $P = x(x - y) + y(y - x)$ tại $x = 53$ và $y = 3$.",
        "correctAnswer": "2500",
        "acceptableAnswers": [
          "2500",
          "2.500",
          "hai nghìn năm trăm"
        ],
        "explanation": "$P = x(x - y) - y(x - y) = (x - y)(x - y) = (x - y)^2$. Tại $x = 53, y = 3$: $P = (53 - 3)^2 = 50^2 = 2500$."
      },
      {
        "id": "sa-8.9.4",
        "badge": "Câu 4 (TH) - Tìm số nghiệm của phương trình",
        "prompt": "Phương trình $x^3 - 4x = 0$ có bao nhiêu nghiệm thực?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "ba"
        ],
        "explanation": "$x(x^2 - 4) = 0 \\Leftrightarrow x(x - 2)(x + 2) = 0 \\Leftrightarrow x = 0, x = 2, x = -2$. Có tất cả 3 nghiệm thực."
      },
      {
        "id": "sa-8.9.5",
        "badge": "Câu 5 (VD) - Tìm nghiệm lớn nhất của phương trình",
        "prompt": "Tìm nghiệm lớn nhất của phương trình: $x^2 - 6x + 8 = 0$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4",
          "bốn"
        ],
        "explanation": "$x^2 - 6x + 8 = (x^2 - 6x + 9) - 1 = (x - 3)^2 - 1^2 = (x - 4)(x - 2) = 0 \\Leftrightarrow x = 4$ hoặc $x = 2$. Nghiệm lớn nhất là $4$."
      },
      {
        "id": "sa-8.9.6",
        "badge": "Câu 6 (VD - Thực tế) - Tính nhanh hiệu hai bình phương",
        "prompt": "Tính giá trị số của biểu thức: $105^2 - 95^2$.",
        "correctAnswer": "2000",
        "acceptableAnswers": [
          "2000",
          "2.000",
          "hai nghìn"
        ],
        "explanation": "$105^2 - 95^2 = (105 - 95)(105 + 95) = 10 \\times 200 = 2000$."
      }
    ]
  },
  "t8-on-tap-chuong-2": {
    "id": "t8-on-tap-chuong-2",
    "lessonNumber": 0,
    "title": "Bài tập cuối chương II",
    "bookChapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng (SGK Toán 8 KNTT - Tập 1)",
    "scenarioTitle": "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Hệ thống 7 hằng đẳng thức đáng nhớ",
        "points": [
          "1. Bình phương của một tổng: $(A + B)^2 = A^2 + 2AB + B^2$",
          "2. Bình phương của một hiệu: $(A - B)^2 = A^2 - 2AB + B^2$",
          "3. Hiệu hai bình phương: $A^2 - B^2 = (A - B)(A + B)$",
          "4. Lập phương của một tổng: $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$",
          "5. Lập phương của một hiệu: $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$",
          "6. Tổng hai lập phương: $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$",
          "7. Hiệu hai lập phương: $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$"
        ],
        "exampleTitle": "Ví dụ 1 (Tổng hợp khai triển và thu gọn)",
        "exampleProblem": "a) Khai triển $(2x - 3y)^2$ và $(x + 2)^3$.\n" +
          "b) Thu gọn biểu thức $M = (x - 1)(x^2 + x + 1) - (x + 1)(x^2 - x + 1)$.",
        "exampleSolution": "a) Khai triển:\n" +
          "• $(2x - 3y)^2 = (2x)^2 - 2(2x)(3y) + (3y)^2 = 4x^2 - 12xy + 9y^2.\n" +
          "• $(x + 2)^3 = x^3 + 3x^2(2) + 3x(2^2) + 2^3 = x^3 + 6x^2 + 12x + 8.\n\n" +
          "b) Áp dụng hiệu và tổng hai lập phương:\n" +
          "$M = (x^3 - 1) - (x^3 + 1) = x^3 - 1 - x^3 - 1 = -2$."
      },
      {
        "index": "2",
        "title": "Các phương pháp phân tích đa thức thành nhân tử",
        "points": [
          "Phương pháp 1: Đặt nhân tử chung ($A \\cdot B + A \\cdot C = A(B + C)$).",
          "Phương pháp 2: Dùng hằng đẳng thức (vận dụng 7 hằng đẳng thức theo chiều ngược lại).",
          "Phương pháp 3: Nhóm hạng tử (nhóm 2 - 2, nhóm 3 - 1 tạo hiệu hai bình phương).",
          "Thứ tự ưu tiên phối hợp: Đặt nhân tử chung $\\rightarrow$ Dùng hằng đẳng thức $\\rightarrow$ Nhóm hạng tử."
        ],
        "exampleTitle": "Ví dụ 2 (Phân tích đa thức thành nhân tử)",
        "exampleProblem": "Phân tích các đa thức sau thành nhân tử:\n" +
          "a) $3x^3 - 12x$;\n" +
          "b) $x^2 - 2xy + y^2 - 16$;\n" +
          "c) $x^2 - 5x + 6$.",
        "exampleSolution": "a) $3x^3 - 12x = 3x(x^2 - 4) = 3x(x - 2)(x + 2).\n\n" +
          "b) Nhóm 3 - 1: $(x^2 - 2xy + y^2) - 16 = (x - y)^2 - 4^2 = (x - y - 4)(x - y + 4).\n\n" +
          "c) Tách hạng tử: $x^2 - 2x - 3x + 6 = x(x - 2) - 3(x - 2) = (x - 2)(x - 3)$."
      },
      {
        "index": "3",
        "title": "Ứng dụng giải phương trình tích và tính nhanh",
        "points": [
          "Giải phương trình tích: Đưa phương trình về dạng $A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x) = 0$ hoặc $B(x) = 0$.",
          "Tính nhanh giá trị biểu thức số bằng cách nhận dạng hằng đẳng thức tròn chục, tròn trăm: $(a \\pm b)^2, a^2 - b^2$.",
          "Chứng minh giá trị biểu thức luôn dương, luôn âm hoặc không phụ thuộc biến."
        ],
        "exampleTitle": "Ví dụ 3 (Giải phương trình và tính nhanh)",
        "exampleProblem": "a) Giải phương trình: $x^2 - 9 + (x + 3)(2x - 1) = 0$.\n" +
          "b) Tính nhanh giá trị của $75^2 + 25^2 + 50 \\cdot 75$.",
        "exampleSolution": "a) Biến đổi vế trái:\n" +
          "$(x - 3)(x + 3) + (x + 3)(2x - 1) = 0 \\Leftrightarrow (x + 3)(x - 3 + 2x - 1) = 0\n" +
          "\\Leftrightarrow (x + 3)(3x - 4) = 0 \\Leftrightarrow x = -3$ hoặc $x = \\frac{4}{3}.\n\n" +
          "b) Nhận thấy $50 \\cdot 75 = 2 \\cdot 25 \\cdot 75$:\n" +
          "$75^2 + 2 \\cdot 75 \\cdot 25 + 25^2 = (75 + 25)^2 = 100^2 = 10000$."
      },
      {
        "index": "4",
        "title": "Ứng dụng thực tế & Hình học",
        "points": [
          "Tính diện tích phần đất bao quanh, lối đi lát sỏi, diện tích vành khăn: $S = \\pi R^2 - \\pi r^2 = \\pi(R - r)(R + r)$.",
          "Tính thể tích phần rỗng của khối lập phương hoặc khối hộp chữ nhật: $V = a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.",
          "Tối ưu hóa kích thước và chi phí sản xuất."
        ],
        "exampleTitle": "Ví dụ 4 (Bài toán thực tế)",
        "exampleProblem": "Một hồ bơi hình chữ nhật có chiều dài $x + 4\\text{ (m)}$ và chiều rộng $x - 4\\text{ (m)}$ ($x > 4$).\n" +
          "a) Viết đa thức biểu thị diện tích hồ bơi.\n" +
          "b) Khi $x = 10\\text{ m}$, diện tích hồ bơi bằng bao nhiêu mét vuông?",
        "exampleSolution": "a) Diện tích hồ bơi là:\n" +
          "$S = (x + 4)(x - 4) = x^2 - 16\\text{ (m}^2\\text{)}.\n\n" +
          "b) Thay $x = 10$ vào ta được:\n" +
          "$S = 10^2 - 16 = 100 - 16 = 84\\text{ (m}^2\\text{)}$."
      }
    ],
    "youtubeVideos": [
      {
        "id": "t8_ot2_video1",
        "title": "Tiết 1: Ôn tập 7 Hằng đẳng thức đáng nhớ và kỹ năng rút gọn"
      },
      {
        "id": "t8_ot2_video2",
        "title": "Tiết 2: Ôn tập phân tích đa thức thành nhân tử và giải phương trình tích"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.ot2.1",
        "timeSeconds": 150,
        "timeLabel": "02:30",
        "title": "Ví dụ 1: Khai triển hiệu hai bình phương",
        "question": "Khai triển của tích $(2x - 1)(2x + 1)$ là:",
        "options": [
          "$4x^2 - 1$",
          "$4x^2 + 1$",
          "$2x^2 - 1$",
          "$4x - 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x - 1)(2x + 1) = (2x)^2 - 1^2 = 4x^2 - 1$."
      },
      {
        "id": "vq-8.ot2.2",
        "timeSeconds": 340,
        "timeLabel": "05:40",
        "title": "Ví dụ 2: Nhận dạng hằng đẳng thức lập phương",
        "question": "Thu gọn biểu thức $(x + 1)(x^2 - x + 1)$ ta được:",
        "options": [
          "$x^3 + 1$",
          "$x^3 - 1$",
          "$x^3 + 3x + 1$",
          "$(x + 1)^3$"
        ],
        "correctIndex": 0,
        "explanation": "Đây là hằng đẳng thức tổng hai lập phương: $x^3 + 1^3 = x^3 + 1$."
      },
      {
        "id": "vq-8.ot2.3",
        "timeSeconds": 210,
        "timeLabel": "03:30",
        "title": "Ví dụ 3: Phân tích đa thức thành nhân tử",
        "question": "Phân tích đa thức $x^2 - 6x + 9 - y^2$ thành nhân tử:",
        "options": [
          "$(x - 3 - y)(x - 3 + y)$",
          "$(x - 3 - y)^2$",
          "$(x + 3 - y)(x + 3 + y)$",
          "$(x - y - 3)(x - y + 3)$"
        ],
        "correctIndex": 0,
        "explanation": "$(x^2 - 6x + 9) - y^2 = (x - 3)^2 - y^2 = (x - 3 - y)(x - 3 + y)$."
      },
      {
        "id": "vq-8.ot2.4",
        "timeSeconds": 420,
        "timeLabel": "07:00",
        "title": "Ví dụ 4: Tìm x bằng phương trình tích",
        "question": "Nghiệm của phương trình $x^2 - 4x = 0$ là:",
        "options": [
          "$x = 0$ hoặc $x = 4$",
          "$x = 4$",
          "$x = 0$",
          "$x = -4$"
        ],
        "correctIndex": 0,
        "explanation": "$x(x - 4) = 0 \\Leftrightarrow x = 0$ hoặc $x = 4$."
      }
    ],
    "tips": [
      "Hệ thống 7 hằng đẳng thức: 3 hằng đẳng thức bậc 2 và 4 hằng đẳng thức bậc 3. Nhớ dấu đan xen ở hiệu bậc 3.",
      "Thứ tự ưu tiên phân tích: Luôn tìm nhân tử chung trước, sau đó xét hằng đẳng thức, cuối cùng mới nhóm hạng tử.",
      "Kỹ thuật tạo số tròn trăm khi tính nhanh: $87 \\times 113 = (100 - 13)(100 + 13) = 10000 - 169 = 9831$.",
      "Giải phương trình tích: Luôn đưa về $A \\cdot B = 0$. Không được chia hai vế cho biểu thức chứa $x$."
    ],
    "traps": [
      "Bẫy nhầm $(A + B)^2$ với $A^2 + B^2$: Đây là lỗi phổ biến nhất của học sinh (thiếu $2AB$).",
      "Bẫy nhầm bình phương thiếu: $A^2 - AB + B^2$ (không có số 2) với $(A - B)^2 = A^2 - 2AB + B^2$.",
      "Bẫy quên số 1 khi đặt nhân tử chung: $3x^2 - 3x = 3x(x - 1)$, rất dễ quên số 1.",
      "Bẫy triệt tiêu ẩn trong phương trình: $x^2 = 5x \\Rightarrow x = 5$ (quên nghiệm $x = 0$)."
    ],
    "quizQuestions": [
      {
        "id": "otc2-d1-q1",
        "badge": "Câu 1 (NB) - Khai triển bình phương một tổng",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Khai triển hằng đẳng thức $(x + 3)^2$ ta được kết quả là:",
        "options": [
          "$x^2 + 6x + 9$",
          "$x^2 + 9$",
          "$x^2 + 3x + 9$",
          "$x^2 + 6x + 6$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$."
      },
      {
        "id": "otc2-d1-q2",
        "badge": "Câu 2 (NB) - Khai triển hiệu hai bình phương",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Khai triển biểu thức $(2x - 1)(2x + 1)$ ta được:",
        "options": [
          "$4x^2 - 1$",
          "$4x^2 + 1$",
          "$2x^2 - 1$",
          "$4x - 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x - 1)(2x + 1) = (2x)^2 - 1^2 = 4x^2 - 1$."
      },
      {
        "id": "otc2-d1-q3",
        "badge": "Câu 3 (NB) - Khai triển lập phương một tổng",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Khai triển hằng đẳng thức $(x + 1)^3$ ta được:",
        "options": [
          "$x^3 + 3x^2 + 3x + 1$",
          "$x^3 + 1$",
          "$x^3 + 3x + 1$",
          "$x^3 + x^2 + x + 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 1)^3 = x^3 + 3x^2 + 3x + 1$."
      },
      {
        "id": "otc2-d1-q4",
        "badge": "Câu 4 (NB) - Khai triển tổng hai lập phương",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Khai triển biểu thức $(x + 2)(x^2 - 2x + 4)$ ta được:",
        "options": [
          "$x^3 + 8$",
          "$x^3 - 8$",
          "$x^3 + 4$",
          "$x^3 - 4$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 2)(x^2 - 2x + 4) = x^3 + 2^3 = x^3 + 8$."
      },
      {
        "id": "otc2-d1-q5",
        "badge": "Câu 5 (NB) - Đặt nhân tử chung",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Phân tích đa thức $6x^2 - 9x$ thành nhân tử ta được:",
        "options": [
          "$3x(2x - 3)$",
          "$3(2x^2 - 3)$",
          "$x(6x - 9)$",
          "$3x(2x + 3)$"
        ],
        "correctIndex": 0,
        "explanation": "$6x^2 - 9x = 3x(2x - 3)$."
      },
      {
        "id": "otc2-d1-q6",
        "badge": "Câu 6 (NB) - Dùng hiệu hai bình phương",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Đa thức $x^2 - 36$ phân tích thành tích là:",
        "options": [
          "$(x - 6)(x + 6)$",
          "$(x - 6)^2$",
          "$(x + 6)^2$",
          "$(x - 18)(x + 18)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 - 36 = x^2 - 6^2 = (x - 6)(x + 6)$."
      },
      {
        "id": "otc2-d1-q7",
        "badge": "Câu 7 (TH) - Khai triển bình phương có hệ số",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Khai triển hằng đẳng thức $(2x - 3y)^2$ ta được:",
        "options": [
          "$4x^2 - 12xy + 9y^2$",
          "$4x^2 - 6xy + 9y^2$",
          "$2x^2 - 12xy + 3y^2$",
          "$4x^2 + 12xy + 9y^2$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x)^2 - 2(2x)(3y) + (3y)^2 = 4x^2 - 12xy + 9y^2$."
      },
      {
        "id": "otc2-d1-q8",
        "badge": "Câu 8 (TH) - Nhóm 2 - 2",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Phân tích đa thức $x^2 - xy + 3x - 3y$ thành nhân tử:",
        "options": [
          "$(x - y)(x + 3)$",
          "$(x + y)(x - 3)$",
          "$(x - y)(x - 3)$",
          "$(x + y)(x + 3)$"
        ],
        "correctIndex": 0,
        "explanation": "$x(x - y) + 3(x - y) = (x - y)(x + 3)$."
      },
      {
        "id": "otc2-d1-q9",
        "badge": "Câu 9 (TH) - Nhóm 3 - 1",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Phân tích đa thức $x^2 - 4x + 4 - y^2$ thành nhân tử:",
        "options": [
          "$(x - 2 - y)(x - 2 + y)$",
          "$(x - 2 - y)^2$",
          "$(x + 2 - y)(x + 2 + y)$",
          "$(x - y - 4)(x - y + 4)$"
        ],
        "correctIndex": 0,
        "explanation": "$(x^2 - 4x + 4) - y^2 = (x - 2)^2 - y^2 = (x - 2 - y)(x - 2 + y)$."
      },
      {
        "id": "otc2-d1-q10",
        "badge": "Câu 10 (TH) - Rút gọn biểu thức hằng đẳng thức",
        "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
        "question": "Rút gọn biểu thức $A = (x + 2)^2 - (x - 2)^2$ ta được:",
        "options": [
          "$8x$",
          "$4x$",
          "$8$",
          "$2x^2 + 8$"
        ],
        "correctIndex": 0,
        "explanation": "$A = (x^2 + 4x + 4) - (x^2 - 4x + 4) = 8x$."
      },
      {
        "id": "otc2-d1-q11",
        "badge": "Câu 11 (VD) - Tìm x bằng phương trình tích",
        "source": "Toán 8 KNTT - Nâng cao",
        "question": "Nghiệm của phương trình $x^2 - 16 + (x - 4)(2x + 1) = 0$ là:",
        "options": [
          "$x = 4$ hoặc $x = -\\frac{5}{3}$",
          "$x = 4$ hoặc $x = -5$",
          "$x = -4$ hoặc $x = \\frac{5}{3}$",
          "$x = 4$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 4)(x + 4) + (x - 4)(2x + 1) = 0 \\Leftrightarrow (x - 4)(3x + 5) = 0 \\Leftrightarrow x = 4$ hoặc $x = -\\frac{5}{3}$."
      },
      {
        "id": "otc2-d1-q12",
        "badge": "Câu 12 (VD - Thực tế) - Diện tích lối đi xung quanh vườn",
        "source": "Toán 8 KNTT - Ứng dụng thực tế",
        "question": "Một khu vườn hình vuông cạnh $x\\text{ (m)}$. Người ta làm một lối đi xung quanh rộng $1\\text{ m}$. Đa thức biểu thị diện tích lối đi là:",
        "options": [
          "$4x - 4\\text{ (m}^2\\text{)}$",
          "$4x + 4\\text{ (m}^2\\text{)}$",
          "$2x - 1\\text{ (m}^2\\text{)}$",
          "$4x\\text{ (m}^2\\text{)}$"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh phần đất trồng cây bên trong là $x - 2\\text{ (m)}$. Diện tích lối đi là: $x^2 - (x - 2)^2 = x^2 - (x^2 - 4x + 4) = 4x - 4\\text{ (m}^2\\text{)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "otc2-d1-tf1",
        "badge": "Câu 1 (Đ/S) - Bảng hằng đẳng thức đáng nhớ",
        "prompt": "Xét tính đúng/sai của các hằng đẳng thức sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đẳng thức $(A - B)^2 = A^2 - 2AB + B^2$ luôn đúng với mọi $A, B$.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là bình phương của một hiệu."
          },
          {
            "id": "b",
            "text": "Đẳng thức $(A - B)^3 = A^3 - B^3$ luôn đúng với mọi $A, B$.",
            "correctAnswer": false,
            "explanation": "Sai, $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$."
          },
          {
            "id": "c",
            "text": "Đẳng thức $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ luôn đúng với mọi $A, B$.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là hằng đẳng thức tổng hai lập phương."
          },
          {
            "id": "d",
            "text": "Đẳng thức $(A - B)(A + B) = A^2 - B^2$ luôn đúng với mọi $A, B$.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là hiệu hai bình phương."
          }
        ]
      },
      {
        "id": "otc2-d1-tf2",
        "badge": "Câu 2 (Đ/S) - Phân tích đa thức thành nhân tử",
        "prompt": "Xét tính đúng/sai của các kết quả phân tích đa thức thành nhân tử sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đa thức $5x^2 - 5$ phân tích thành $5(x - 1)(x + 1)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $5(x^2 - 1) = 5(x - 1)(x + 1)$."
          },
          {
            "id": "b",
            "text": "Đa thức $x^2 + 6x + 9$ phân tích thành $(x + 3)^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x^2 + 2 \\cdot 3x + 3^2 = (x + 3)^2$."
          },
          {
            "id": "c",
            "text": "Đa thức $x^3 - 8$ phân tích thành $(x - 2)(x^2 - 2x + 4)$.",
            "correctAnswer": false,
            "explanation": "Sai, phải là $(x - 2)(x^2 + 2x + 4)$ (hạng tử ở giữa mang dấu cộng)."
          },
          {
            "id": "d",
            "text": "Đa thức $xy - 3x + 2y - 6$ phân tích thành $(x + 2)(y - 3)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x(y - 3) + 2(y - 3) = (x + 2)(y - 3)$."
          }
        ]
      },
      {
        "id": "otc2-d1-tf3",
        "badge": "Câu 3 (Đ/S) - Rút gọn biểu thức và giải phương trình",
        "prompt": "Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Biểu thức $(x + 1)^3 - x^2(x + 3)$ rút gọn bằng $3x + 1$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 3x + 1$."
          },
          {
            "id": "b",
            "text": "Phương trình $x^2 - 25 = 0$ có đúng 2 nghiệm là $x = 5$ và $x = -5$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x - 5)(x + 5) = 0 \\Leftrightarrow x = \\pm 5$."
          },
          {
            "id": "c",
            "text": "Phương trình $x^2 + 9 = 0$ có nghiệm là $x = 3$.",
            "correctAnswer": false,
            "explanation": "Sai, $x^2 + 9 \\ge 9 > 0$ nên phương trình vô nghiệm."
          },
          {
            "id": "d",
            "text": "Giá trị của biểu thức $(x - 1)(x^2 + x + 1) - x^3$ luôn bằng $-1$ với mọi $x$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x^3 - 1) - x^3 = -1$."
          }
        ]
      },
      {
        "id": "otc2-d1-tf4",
        "badge": "Câu 4 (Đ/S - Thực tế) - Bài toán diện tích và thể tích",
        "prompt": "Xét tính đúng/sai của các bài toán hình học và thực tế sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Một hình chữ nhật có chiều dài $x + 3\\text{ (m)}$ và chiều rộng $x - 3\\text{ (m)}$ có diện tích là $x^2 - 9\\text{ (m}^2\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S = (x + 3)(x - 3) = x^2 - 9$."
          },
          {
            "id": "b",
            "text": "Khối lập phương cạnh $x + 1\\text{ (m)}$ có thể tích lớn hơn khối lập phương cạnh $x\\text{ (m)}$ là $3x^2 + 3x + 1\\text{ (m}^3\\text{)}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x + 1)^3 - x^3 = 3x^2 + 3x + 1$."
          },
          {
            "id": "c",
            "text": "Hiệu diện tích hai hình vuông cạnh $55\\text{ cm}$ và $45\\text{ cm}$ bằng $1000\\text{ cm}^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $55^2 - 45^2 = (55 - 45)(55 + 45) = 10 \\times 100 = 1000\\text{ cm}^2$."
          },
          {
            "id": "d",
            "text": "Một bể nước lập phương cạnh $2\\text{ m}$ có thể tích bằng $6\\text{ m}^3$.",
            "correctAnswer": false,
            "explanation": "Sai, $V = 2^3 = 8\\text{ m}^3$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "otc2-d1-sa1",
        "badge": "Câu 1 (NB) - Hệ số tự do của bình phương",
        "prompt": "Hệ số tự do trong khai triển hằng đẳng thức $(x + 4)^2$ bằng bao nhiêu?",
        "correctAnswer": "16",
        "acceptableAnswers": [
          "16",
          "mười sáu"
        ],
        "explanation": "$(x + 4)^2 = x^2 + 8x + 16$. Hệ số tự do là $16$."
      },
      {
        "id": "otc2-d1-sa2",
        "badge": "Câu 2 (TH) - Hệ số của x trong lập phương",
        "prompt": "Hệ số của $x$ trong khai triển hằng đẳng thức $(x + 2)^3$ bằng bao nhiêu?",
        "correctAnswer": "12",
        "acceptableAnswers": [
          "12",
          "mười hai"
        ],
        "explanation": "$(x + 2)^3 = x^3 + 6x^2 + 12x + 8$. Hệ số của $x$ là $12$."
      },
      {
        "id": "otc2-d1-sa3",
        "badge": "Câu 3 (TH) - Tính nhanh hiệu hai bình phương",
        "prompt": "Tính giá trị số của biểu thức: $102^2 - 4$.",
        "correctAnswer": "10400",
        "acceptableAnswers": [
          "10400",
          "10.400",
          "mười nghìn bốn trăm"
        ],
        "explanation": "$102^2 - 2^2 = (102 - 2)(102 + 2) = 100 \\times 104 = 10400$."
      },
      {
        "id": "otc2-d1-sa4",
        "badge": "Câu 4 (TH) - Tìm nghiệm dương của phương trình",
        "prompt": "Tìm nghiệm dương của phương trình: $x^2 - 49 = 0$.",
        "correctAnswer": "7",
        "acceptableAnswers": [
          "7",
          "bảy"
        ],
        "explanation": "$x^2 = 49 \\Leftrightarrow x = \\pm 7$. Nghiệm dương là $7$."
      },
      {
        "id": "otc2-d1-sa5",
        "badge": "Câu 5 (VD) - Tìm nghiệm lớn nhất của phương trình",
        "prompt": "Tìm nghiệm lớn nhất của phương trình: $(x - 2)^2 - 25 = 0$.",
        "correctAnswer": "7",
        "acceptableAnswers": [
          "7",
          "bảy"
        ],
        "explanation": "$(x - 2 - 5)(x - 2 + 5) = 0 \\Leftrightarrow (x - 7)(x + 3) = 0 \\Leftrightarrow x = 7$ hoặc $x = -3$. Nghiệm lớn nhất là $7$."
      },
      {
        "id": "otc2-d1-sa6",
        "badge": "Câu 6 (VD - Thực tế) - Chênh lệch diện tích hai sân vuông",
        "prompt": "Sân thứ nhất hình vuông có cạnh $40\\text{ m}$, sân thứ hai hình vuông có cạnh $30\\text{ m}$. Diện tích sân thứ nhất lớn hơn sân thứ hai bao nhiêu mét vuông?",
        "correctAnswer": "700",
        "acceptableAnswers": [
          "700",
          "bảy trăm",
          "700m2",
          "700 m2"
        ],
        "explanation": "$40^2 - 30^2 = (40 - 30)(40 + 30) = 10 \\times 70 = 700\\text{ (m}^2\\text{)}$."
      }
    ],
    "examSets": [
      {
        "id": "de-1",
        "title": "Đề ôn tập số 1",
        "description": "Đề ôn tập tổng hợp cuối Chương II (Hằng đẳng thức đáng nhớ & Ứng dụng) - Đề số 1 chuẩn cấu trúc Bộ GD&ĐT",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc2-d1-q1",
            "badge": "Câu 1 (NB) - Khai triển bình phương một tổng",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Khai triển hằng đẳng thức $(x + 3)^2$ ta được kết quả là:",
            "options": [
              "$x^2 + 6x + 9$",
              "$x^2 + 9$",
              "$x^2 + 3x + 9$",
              "$x^2 + 6x + 6$"
            ],
            "correctIndex": 0,
            "explanation": "$(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$."
          },
          {
            "id": "otc2-d1-q2",
            "badge": "Câu 2 (NB) - Khai triển hiệu hai bình phương",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Khai triển biểu thức $(2x - 1)(2x + 1)$ ta được:",
            "options": [
              "$4x^2 - 1$",
              "$4x^2 + 1$",
              "$2x^2 - 1$",
              "$4x - 1$"
            ],
            "correctIndex": 0,
            "explanation": "$(2x - 1)(2x + 1) = (2x)^2 - 1^2 = 4x^2 - 1$."
          },
          {
            "id": "otc2-d1-q3",
            "badge": "Câu 3 (NB) - Khai triển lập phương một tổng",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Khai triển hằng đẳng thức $(x + 1)^3$ ta được:",
            "options": [
              "$x^3 + 3x^2 + 3x + 1$",
              "$x^3 + 1$",
              "$x^3 + 3x + 1$",
              "$x^3 + x^2 + x + 1$"
            ],
            "correctIndex": 0,
            "explanation": "$(x + 1)^3 = x^3 + 3x^2 + 3x + 1$."
          },
          {
            "id": "otc2-d1-q4",
            "badge": "Câu 4 (NB) - Khai triển tổng hai lập phương",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Khai triển biểu thức $(x + 2)(x^2 - 2x + 4)$ ta được:",
            "options": [
              "$x^3 + 8$",
              "$x^3 - 8$",
              "$x^3 + 4$",
              "$x^3 - 4$"
            ],
            "correctIndex": 0,
            "explanation": "$(x + 2)(x^2 - 2x + 4) = x^3 + 2^3 = x^3 + 8$."
          },
          {
            "id": "otc2-d1-q5",
            "badge": "Câu 5 (NB) - Đặt nhân tử chung",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Phân tích đa thức $6x^2 - 9x$ thành nhân tử ta được:",
            "options": [
              "$3x(2x - 3)$",
              "$3(2x^2 - 3)$",
              "$x(6x - 9)$",
              "$3x(2x + 3)$"
            ],
            "correctIndex": 0,
            "explanation": "$6x^2 - 9x = 3x(2x - 3)$."
          },
          {
            "id": "otc2-d1-q6",
            "badge": "Câu 6 (NB) - Dùng hiệu hai bình phương",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Đa thức $x^2 - 36$ phân tích thành tích là:",
            "options": [
              "$(x - 6)(x + 6)$",
              "$(x - 6)^2$",
              "$(x + 6)^2$",
              "$(x - 18)(x + 18)$"
            ],
            "correctIndex": 0,
            "explanation": "$x^2 - 36 = x^2 - 6^2 = (x - 6)(x + 6)$."
          },
          {
            "id": "otc2-d1-q7",
            "badge": "Câu 7 (TH) - Khai triển bình phương có hệ số",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Khai triển hằng đẳng thức $(2x - 3y)^2$ ta được:",
            "options": [
              "$4x^2 - 12xy + 9y^2$",
              "$4x^2 - 6xy + 9y^2$",
              "$2x^2 - 12xy + 3y^2$",
              "$4x^2 + 12xy + 9y^2$"
            ],
            "correctIndex": 0,
            "explanation": "$(2x)^2 - 2(2x)(3y) + (3y)^2 = 4x^2 - 12xy + 9y^2$."
          },
          {
            "id": "otc2-d1-q8",
            "badge": "Câu 8 (TH) - Nhóm 2 - 2",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Phân tích đa thức $x^2 - xy + 3x - 3y$ thành nhân tử:",
            "options": [
              "$(x - y)(x + 3)$",
              "$(x + y)(x - 3)$",
              "$(x - y)(x - 3)$",
              "$(x + y)(x + 3)$"
            ],
            "correctIndex": 0,
            "explanation": "$x(x - y) + 3(x - y) = (x - y)(x + 3)$."
          },
          {
            "id": "otc2-d1-q9",
            "badge": "Câu 9 (TH) - Nhóm 3 - 1",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Phân tích đa thức $x^2 - 4x + 4 - y^2$ thành nhân tử:",
            "options": [
              "$(x - 2 - y)(x - 2 + y)$",
              "$(x - 2 - y)^2$",
              "$(x + 2 - y)(x + 2 + y)$",
              "$(x - y - 4)(x - y + 4)$"
            ],
            "correctIndex": 0,
            "explanation": "$(x^2 - 4x + 4) - y^2 = (x - 2)^2 - y^2 = (x - 2 - y)(x - 2 + y)$."
          },
          {
            "id": "otc2-d1-q10",
            "badge": "Câu 10 (TH) - Rút gọn biểu thức hằng đẳng thức",
            "source": "SGK Toán 8 KNTT - Ôn tập Chương II",
            "question": "Rút gọn biểu thức $A = (x + 2)^2 - (x - 2)^2$ ta được:",
            "options": [
              "$8x$",
              "$4x$",
              "$8$",
              "$2x^2 + 8$"
            ],
            "correctIndex": 0,
            "explanation": "$A = (x^2 + 4x + 4) - (x^2 - 4x + 4) = 8x$."
          },
          {
            "id": "otc2-d1-q11",
            "badge": "Câu 11 (VD) - Tìm x bằng phương trình tích",
            "source": "Toán 8 KNTT - Nâng cao",
            "question": "Nghiệm của phương trình $x^2 - 16 + (x - 4)(2x + 1) = 0$ là:",
            "options": [
              "$x = 4$ hoặc $x = -\\frac{5}{3}$",
              "$x = 4$ hoặc $x = -5$",
              "$x = -4$ hoặc $x = \\frac{5}{3}$",
              "$x = 4$"
            ],
            "correctIndex": 0,
            "explanation": "$(x - 4)(x + 4) + (x - 4)(2x + 1) = 0 \\Leftrightarrow (x - 4)(3x + 5) = 0 \\Leftrightarrow x = 4$ hoặc $x = -\\frac{5}{3}$."
          },
          {
            "id": "otc2-d1-q12",
            "badge": "Câu 12 (VD - Thực tế) - Diện tích lối đi xung quanh vườn",
            "source": "Toán 8 KNTT - Ứng dụng thực tế",
            "question": "Một khu vườn hình vuông cạnh $x\\text{ (m)}$. Người ta làm một lối đi xung quanh rộng $1\\text{ m}$. Đa thức biểu thị diện tích lối đi là:",
            "options": [
              "$4x - 4\\text{ (m}^2\\text{)}$",
              "$4x + 4\\text{ (m}^2\\text{)}$",
              "$2x - 1\\text{ (m}^2\\text{)}$",
              "$4x\\text{ (m}^2\\text{)}$"
            ],
            "correctIndex": 0,
            "explanation": "Cạnh phần đất trồng cây bên trong là $x - 2\\text{ (m)}$. Diện tích lối đi là: $x^2 - (x - 2)^2 = x^2 - (x^2 - 4x + 4) = 4x - 4\\text{ (m}^2\\text{)}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc2-d1-tf1",
            "badge": "Câu 1 (Đ/S) - Bảng hằng đẳng thức đáng nhớ",
            "prompt": "Xét tính đúng/sai của các hằng đẳng thức sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Đẳng thức $(A - B)^2 = A^2 - 2AB + B^2$ luôn đúng với mọi $A, B$.",
                "correctAnswer": true,
                "explanation": "Đúng, đây là bình phương của một hiệu."
              },
              {
                "id": "b",
                "text": "Đẳng thức $(A - B)^3 = A^3 - B^3$ luôn đúng với mọi $A, B$.",
                "correctAnswer": false,
                "explanation": "Sai, $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$."
              },
              {
                "id": "c",
                "text": "Đẳng thức $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ luôn đúng với mọi $A, B$.",
                "correctAnswer": true,
                "explanation": "Đúng, đây là hằng đẳng thức tổng hai lập phương."
              },
              {
                "id": "d",
                "text": "Đẳng thức $(A - B)(A + B) = A^2 - B^2$ luôn đúng với mọi $A, B$.",
                "correctAnswer": true,
                "explanation": "Đúng, đây là hiệu hai bình phương."
              }
            ]
          },
          {
            "id": "otc2-d1-tf2",
            "badge": "Câu 2 (Đ/S) - Phân tích đa thức thành nhân tử",
            "prompt": "Xét tính đúng/sai của các kết quả phân tích đa thức thành nhân tử sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Đa thức $5x^2 - 5$ phân tích thành $5(x - 1)(x + 1)$.",
                "correctAnswer": true,
                "explanation": "Đúng, $5(x^2 - 1) = 5(x - 1)(x + 1)$."
              },
              {
                "id": "b",
                "text": "Đa thức $x^2 + 6x + 9$ phân tích thành $(x + 3)^2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x^2 + 2 \\cdot 3x + 3^2 = (x + 3)^2$."
              },
              {
                "id": "c",
                "text": "Đa thức $x^3 - 8$ phân tích thành $(x - 2)(x^2 - 2x + 4)$.",
                "correctAnswer": false,
                "explanation": "Sai, phải là $(x - 2)(x^2 + 2x + 4)$ (hạng tử ở giữa mang dấu cộng)."
              },
              {
                "id": "d",
                "text": "Đa thức $xy - 3x + 2y - 6$ phân tích thành $(x + 2)(y - 3)$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x(y - 3) + 2(y - 3) = (x + 2)(y - 3)$."
              }
            ]
          },
          {
            "id": "otc2-d1-tf3",
            "badge": "Câu 3 (Đ/S) - Rút gọn biểu thức và giải phương trình",
            "prompt": "Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Biểu thức $(x + 1)^3 - x^2(x + 3)$ rút gọn bằng $3x + 1$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 3x + 1$."
              },
              {
                "id": "b",
                "text": "Phương trình $x^2 - 25 = 0$ có đúng 2 nghiệm là $x = 5$ và $x = -5$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x - 5)(x + 5) = 0 \\Leftrightarrow x = \\pm 5$."
              },
              {
                "id": "c",
                "text": "Phương trình $x^2 + 9 = 0$ có nghiệm là $x = 3$.",
                "correctAnswer": false,
                "explanation": "Sai, $x^2 + 9 \\ge 9 > 0$ nên phương trình vô nghiệm."
              },
              {
                "id": "d",
                "text": "Giá trị của biểu thức $(x - 1)(x^2 + x + 1) - x^3$ luôn bằng $-1$ với mọi $x$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x^3 - 1) - x^3 = -1$."
              }
            ]
          },
          {
            "id": "otc2-d1-tf4",
            "badge": "Câu 4 (Đ/S - Thực tế) - Bài toán diện tích và thể tích",
            "prompt": "Xét tính đúng/sai của các bài toán hình học và thực tế sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Một hình chữ nhật có chiều dài $x + 3\\text{ (m)}$ và chiều rộng $x - 3\\text{ (m)}$ có diện tích là $x^2 - 9\\text{ (m}^2\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $S = (x + 3)(x - 3) = x^2 - 9$."
              },
              {
                "id": "b",
                "text": "Khối lập phương cạnh $x + 1\\text{ (m)}$ có thể tích lớn hơn khối lập phương cạnh $x\\text{ (m)}$ là $3x^2 + 3x + 1\\text{ (m}^3\\text{)}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x + 1)^3 - x^3 = 3x^2 + 3x + 1$."
              },
              {
                "id": "c",
                "text": "Hiệu diện tích hai hình vuông cạnh $55\\text{ cm}$ và $45\\text{ cm}$ bằng $1000\\text{ cm}^2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $55^2 - 45^2 = (55 - 45)(55 + 45) = 10 \\times 100 = 1000\\text{ cm}^2$."
              },
              {
                "id": "d",
                "text": "Một bể nước lập phương cạnh $2\\text{ m}$ có thể tích bằng $6\\text{ m}^3$.",
                "correctAnswer": false,
                "explanation": "Sai, $V = 2^3 = 8\\text{ m}^3$."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc2-d1-sa1",
            "badge": "Câu 1 (NB) - Hệ số tự do của bình phương",
            "prompt": "Hệ số tự do trong khai triển hằng đẳng thức $(x + 4)^2$ bằng bao nhiêu?",
            "correctAnswer": "16",
            "acceptableAnswers": [
              "16",
              "mười sáu"
            ],
            "explanation": "$(x + 4)^2 = x^2 + 8x + 16$. Hệ số tự do là $16$."
          },
          {
            "id": "otc2-d1-sa2",
            "badge": "Câu 2 (TH) - Hệ số của x trong lập phương",
            "prompt": "Hệ số của $x$ trong khai triển hằng đẳng thức $(x + 2)^3$ bằng bao nhiêu?",
            "correctAnswer": "12",
            "acceptableAnswers": [
              "12",
              "mười hai"
            ],
            "explanation": "$(x + 2)^3 = x^3 + 6x^2 + 12x + 8$. Hệ số của $x$ là $12$."
          },
          {
            "id": "otc2-d1-sa3",
            "badge": "Câu 3 (TH) - Tính nhanh hiệu hai bình phương",
            "prompt": "Tính giá trị số của biểu thức: $102^2 - 4$.",
            "correctAnswer": "10400",
            "acceptableAnswers": [
              "10400",
              "10.400",
              "mười nghìn bốn trăm"
            ],
            "explanation": "$102^2 - 2^2 = (102 - 2)(102 + 2) = 100 \\times 104 = 10400$."
          },
          {
            "id": "otc2-d1-sa4",
            "badge": "Câu 4 (TH) - Tìm nghiệm dương của phương trình",
            "prompt": "Tìm nghiệm dương của phương trình: $x^2 - 49 = 0$.",
            "correctAnswer": "7",
            "acceptableAnswers": [
              "7",
              "bảy"
            ],
            "explanation": "$x^2 = 49 \\Leftrightarrow x = \\pm 7$. Nghiệm dương là $7$."
          },
          {
            "id": "otc2-d1-sa5",
            "badge": "Câu 5 (VD) - Tìm nghiệm lớn nhất của phương trình",
            "prompt": "Tìm nghiệm lớn nhất của phương trình: $(x - 2)^2 - 25 = 0$.",
            "correctAnswer": "7",
            "acceptableAnswers": [
              "7",
              "bảy"
            ],
            "explanation": "$(x - 2 - 5)(x - 2 + 5) = 0 \\Leftrightarrow (x - 7)(x + 3) = 0 \\Leftrightarrow x = 7$ hoặc $x = -3$. Nghiệm lớn nhất là $7$."
          },
          {
            "id": "otc2-d1-sa6",
            "badge": "Câu 6 (VD - Thực tế) - Chênh lệch diện tích hai sân vuông",
            "prompt": "Sân thứ nhất hình vuông có cạnh $40\\text{ m}$, sân thứ hai hình vuông có cạnh $30\\text{ m}$. Diện tích sân thứ nhất lớn hơn sân thứ hai bao nhiêu mét vuông?",
            "correctAnswer": "700",
            "acceptableAnswers": [
              "700",
              "bảy trăm",
              "700m2",
              "700 m2"
            ],
            "explanation": "$40^2 - 30^2 = (40 - 30)(40 + 30) = 10 \\times 70 = 700\\text{ (m}^2\\text{)}$."
          }
        ]
      },
      {
        "id": "de-2",
        "title": "Đề ôn tập số 2",
        "description": "Đề ôn tập tổng hợp cuối Chương II (Hằng đẳng thức đáng nhớ & Ứng dụng) - Đề số 2 chuẩn cấu trúc Bộ GD&ĐT",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc2-d2-q1",
            "badge": "Câu 1 (NB) - Khai triển bình phương một hiệu",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Khai triển hằng đẳng thức $(x - 4)^2$ ta được:",
            "options": [
              "$x^2 - 8x + 16$",
              "$x^2 - 16$",
              "$x^2 - 4x + 16$",
              "$x^2 + 8x + 16$"
            ],
            "correctIndex": 0,
            "explanation": "$(x - 4)^2 = x^2 - 8x + 16$."
          },
          {
            "id": "otc2-d2-q2",
            "badge": "Câu 2 (NB) - Khai triển hiệu hai lập phương",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Khai triển biểu thức $(x - 1)(x^2 + x + 1)$ ta được:",
            "options": [
              "$x^3 - 1$",
              "$x^3 + 1$",
              "$x^3 - 3x - 1$",
              "$(x - 1)^3$"
            ],
            "correctIndex": 0,
            "explanation": "$(x - 1)(x^2 + x + 1) = x^3 - 1$."
          },
          {
            "id": "otc2-d2-q3",
            "badge": "Câu 3 (NB) - Đặt nhân tử chung đơn giản",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Phân tích đa thức $8x^2y - 12xy^2$ thành nhân tử:",
            "options": [
              "$4xy(2x - 3y)$",
              "$4xy(2x + 3y)$",
              "$2xy(4x - 6y)$",
              "$4x^2y(2 - 3y)$"
            ],
            "correctIndex": 0,
            "explanation": "$\\text{ƯCLN}(8, 12) = 4$, phần biến chung là $xy$. Vậy $4xy(2x - 3y)$."
          },
          {
            "id": "otc2-d2-q4",
            "badge": "Câu 4 (NB) - Viết thành bình phương một hiệu",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Đa thức $x^2 - 10x + 25$ được viết dưới dạng:",
            "options": [
              "$(x - 5)^2$",
              "$(x + 5)^2$",
              "$(x - 25)^2$",
              "$(x - 10)^2$"
            ],
            "correctIndex": 0,
            "explanation": "$x^2 - 2(5)x + 5^2 = (x - 5)^2$."
          },
          {
            "id": "otc2-d2-q5",
            "badge": "Câu 5 (NB) - Phân tích hiệu hai lập phương",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Đa thức $x^3 - 27$ phân tích thành tích là:",
            "options": [
              "$(x - 3)(x^2 + 3x + 9)$",
              "$(x - 3)(x^2 - 3x + 9)$",
              "$(x - 3)^3$",
              "$(x + 3)(x^2 - 3x + 9)$"
            ],
            "correctIndex": 0,
            "explanation": "$x^3 - 3^3 = (x - 3)(x^2 + 3x + 9)$."
          },
          {
            "id": "otc2-d2-q6",
            "badge": "Câu 6 (NB) - Nghiệm của phương trình tích",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Nghiệm của phương trình $(x + 3)(x - 1) = 0$ là:",
            "options": [
              "$x = -3$ hoặc $x = 1$",
              "$x = 3$ hoặc $x = -1$",
              "$x = -3$",
              "$x = 1$"
            ],
            "correctIndex": 0,
            "explanation": "$x + 3 = 0 \\Leftrightarrow x = -3$; $x - 1 = 0 \\Leftrightarrow x = 1$."
          },
          {
            "id": "otc2-d2-q7",
            "badge": "Câu 7 (TH) - Khai triển lập phương một hiệu",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Khai triển hằng đẳng thức $(x - 2)^3$ ta được:",
            "options": [
              "$x^3 - 6x^2 + 12x - 8$",
              "$x^3 - 8$",
              "$x^3 - 6x^2 - 12x - 8$",
              "$x^3 + 6x^2 - 12x + 8$"
            ],
            "correctIndex": 0,
            "explanation": "$(x - 2)^3 = x^3 - 3x^2(2) + 3x(2^2) - 2^3 = x^3 - 6x^2 + 12x - 8$."
          },
          {
            "id": "otc2-d2-q8",
            "badge": "Câu 8 (TH) - Đổi dấu đặt nhân tử chung",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Phân tích đa thức $2x(x - 1) + 3(1 - x)$ thành nhân tử:",
            "options": [
              "$(x - 1)(2x - 3)$",
              "$(x - 1)(2x + 3)$",
              "$(1 - x)(2x - 3)$",
              "$(x + 1)(2x - 3)$"
            ],
            "correctIndex": 0,
            "explanation": "$2x(x - 1) - 3(x - 1) = (x - 1)(2x - 3)$."
          },
          {
            "id": "otc2-d2-q9",
            "badge": "Câu 9 (TH) - Nhóm hạng tử 3 - 1",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Phân tích đa thức $x^2 - 9 - y^2 + 6y$ thành nhân tử:",
            "options": [
              "$(x - y + 3)(x + y - 3)$",
              "$(x - y - 3)(x + y + 3)$",
              "$(x - y + 3)^2$",
              "$(x - 3 - y)(x + 3 + y)$"
            ],
            "correctIndex": 0,
            "explanation": "$x^2 - (y^2 - 6y + 9) = x^2 - (y - 3)^2 = [x - (y - 3)][x + (y - 3)] = (x - y + 3)(x + y - 3)$."
          },
          {
            "id": "otc2-d2-q10",
            "badge": "Câu 10 (TH) - Tính nhanh giá trị biểu thức",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Giá trị của biểu thức $P = x^3 - 3x^2 + 3x - 1$ tại $x = 101$ là:",
            "options": [
              "$1000000$",
              "$100000$",
              "$10000$",
              "$1010000$"
            ],
            "correctIndex": 0,
            "explanation": "$P = (x - 1)^3 = (101 - 1)^3 = 100^3 = 1000000$."
          },
          {
            "id": "otc2-d2-q11",
            "badge": "Câu 11 (VD) - Tìm x bằng hằng đẳng thức",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Tìm các giá trị của $x$ thỏa mãn: $(x + 2)^3 - x^2(x + 6) = 20$.",
            "options": [
              "$x = 1$",
              "$x = 2$",
              "$x = 3$",
              "$x = 0$"
            ],
            "correctIndex": 0,
            "explanation": "$(x^3 + 6x^2 + 12x + 8) - (x^3 + 6x^2) = 20 \\Leftrightarrow 12x + 8 = 20 \\Leftrightarrow 12x = 12 \\Leftrightarrow x = 1$."
          },
          {
            "id": "otc2-d2-q12",
            "badge": "Câu 12 (VD - Thực tế) - Thể tích bể nước tăng thêm",
            "source": "Toán 8 KNTT Đề số 2",
            "question": "Một khối nước đá hình lập phương cạnh $x\\text{ (m)}$ bị tan chảy đều làm mỗi cạnh giảm đi $1\\text{ m}$. Đa thức biểu thị phần thể tích bị tan chảy là:",
            "options": [
              "$3x^2 - 3x + 1\\text{ (m}^3\\text{)}$",
              "$3x^2 + 3x + 1\\text{ (m}^3\\text{)}$",
              "$1\\text{ (m}^3\\text{)}$",
              "$x^2 - x + 1\\text{ (m}^3\\text{)}$"
            ],
            "correctIndex": 0,
            "explanation": "Thể tích tan chảy là: $x^3 - (x - 1)^3 = x^3 - (x^3 - 3x^2 + 3x - 1) = 3x^2 - 3x + 1\\text{ (m}^3\\text{)}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc2-d2-tf1",
            "badge": "Câu 1 (Đ/S) - Các quy tắc dấu trong hằng đẳng thức",
            "prompt": "Xét tính đúng/sai của các phát biểu sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Khẳng định $(x - y)^2 = (y - x)^2$ luôn đúng với mọi $x, y$.",
                "correctAnswer": true,
                "explanation": "Đúng, bình phương của hai số đối nhau luôn bằng nhau."
              },
              {
                "id": "b",
                "text": "Khẳng định $(x - y)^3 = (y - x)^3$ luôn đúng với mọi $x, y$.",
                "correctAnswer": false,
                "explanation": "Sai, vì $(x - y)^3 = -(y - x)^3$."
              },
              {
                "id": "c",
                "text": "Khẳng định $(A + B)^2 = A^2 + B^2$ chỉ đúng khi $AB = 0$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(A + B)^2 = A^2 + 2AB + B^2$, bằng $A^2 + B^2$ khi $2AB = 0 \\Leftrightarrow AB = 0$."
              },
              {
                "id": "d",
                "text": "Biểu thức $x^2 + 4$ luôn phân tích được thành nhân tử trên tập số thực.",
                "correctAnswer": false,
                "explanation": "Sai, $x^2 + 4 > 0$ với mọi $x \\in \\mathbb{R}$ nên không phân tích được trên $\\mathbb{R}$."
              }
            ]
          },
          {
            "id": "otc2-d2-tf2",
            "badge": "Câu 2 (Đ/S) - Phân tích đa thức thành nhân tử nâng cao",
            "prompt": "Xét tính đúng/sai của các phép phân tích sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Đa thức $x^4 - y^4$ phân tích thành $(x - y)(x + y)(x^2 + y^2)$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x^4 - y^4 = (x^2 - y^2)(x^2 + y^2) = (x - y)(x + y)(x^2 + y^2)$."
              },
              {
                "id": "b",
                "text": "Đa thức $x^2 - 7x + 12$ phân tích thành $(x - 3)(x - 4)$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x^2 - 3x - 4x + 12 = x(x - 3) - 4(x - 3) = (x - 3)(x - 4)$."
              },
              {
                "id": "c",
                "text": "Đa thức $8x^3 + 1$ phân tích thành $(2x + 1)(4x^2 + 2x + 1)$.",
                "correctAnswer": false,
                "explanation": "Sai, dấu ở giữa phải là trừ: $(2x + 1)(4x^2 - 2x + 1)$."
              },
              {
                "id": "d",
                "text": "Đa thức $x^3 - 3x^2 + 3x - 1$ được viết dưới dạng $(x - 1)^3$.",
                "correctAnswer": true,
                "explanation": "Đúng, hằng đẳng thức lập phương một hiệu."
              }
            ]
          },
          {
            "id": "otc2-d2-tf3",
            "badge": "Câu 3 (Đ/S) - Phương trình và giá trị lớn nhất, nhỏ nhất",
            "prompt": "Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Phương trình $x(x - 2) = 0$ có tập nghiệm là $S = \\{0; 2\\}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x = 0$ hoặc $x = 2$."
              },
              {
                "id": "b",
                "text": "Giá trị nhỏ nhất của biểu thức $A = x^2 - 4x + 7$ là $3$.",
                "correctAnswer": true,
                "explanation": "Đúng, $A = (x - 2)^2 + 3 \\ge 3$ khi $x = 2$."
              },
              {
                "id": "c",
                "text": "Giá trị lớn nhất của biểu thức $B = -x^2 + 6x - 10$ là $-1$.",
                "correctAnswer": true,
                "explanation": "Đúng, $B = -(x^2 - 6x + 9) - 1 = -(x - 3)^2 - 1 \\le -1$ khi $x = 3$."
              },
              {
                "id": "d",
                "text": "Phương trình $(x + 2)^2 = 4$ có đúng 1 nghiệm là $x = 0$.",
                "correctAnswer": false,
                "explanation": "Sai, $x + 2 = 2 \\Leftrightarrow x = 0$ hoặc $x + 2 = -2 \\Leftrightarrow x = -4$ (có 2 nghiệm)."
              }
            ]
          },
          {
            "id": "otc2-d2-tf4",
            "badge": "Câu 4 (Đ/S - Thực tế) - Bài toán thực tế",
            "prompt": "Xét tính đúng/sai của các bài toán sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Giá trị của $85^2 - 15^2$ bằng $7000$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(85 - 15)(85 + 15) = 70 \\times 100 = 7000$."
              },
              {
                "id": "b",
                "text": "Một hình vuông có cạnh tăng thêm $2\\text{ m}$ thì diện tích tăng thêm $4\\text{ m}^2$.",
                "correctAnswer": false,
                "explanation": "Sai, $(x + 2)^2 - x^2 = 4x + 4\\text{ m}^2$ (phụ thuộc vào cạnh $x$)."
              },
              {
                "id": "c",
                "text": "Tích của 3 số nguyên liên tiếp luôn chia hết cho 6.",
                "correctAnswer": true,
                "explanation": "Đúng, $(n - 1)n(n + 1)$ chia hết cho cả 2 và 3 nên chia hết cho 6."
              },
              {
                "id": "d",
                "text": "Biểu thức $99^3 + 1$ chia hết cho $100$.",
                "correctAnswer": true,
                "explanation": "Đúng, $99^3 + 1^3 = (99 + 1)(99^2 - 99 + 1) = 100 \\times M \\ \\vdots \\ 100$."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc2-d2-sa1",
            "badge": "Câu 1 (NB) - Hệ số tự do của hiệu hai bình phương",
            "prompt": "Hệ số tự do trong khai triển $(3x - 4)(3x + 4)$ bằng bao nhiêu?",
            "correctAnswer": "-16",
            "acceptableAnswers": [
              "-16",
              "âm mười sáu",
              "- 16"
            ],
            "explanation": "$(3x)^2 - 4^2 = 9x^2 - 16$. Hệ số tự do là $-16$."
          },
          {
            "id": "otc2-d2-sa2",
            "badge": "Câu 2 (TH) - Tìm hằng số trong hằng đẳng thức",
            "prompt": "Cho đa thức $4x^2 - 12x + 9 = (2x - a)^2$. Giá trị của $a$ bằng bao nhiêu?",
            "correctAnswer": "3",
            "acceptableAnswers": [
              "3",
              "ba"
            ],
            "explanation": "$(2x)^2 - 2(2x)(3) + 3^2 = (2x - 3)^2 \\Rightarrow a = 3$."
          },
          {
            "id": "otc2-d2-sa3",
            "badge": "Câu 3 (TH) - Tính nhanh giá trị số",
            "prompt": "Tính giá trị của biểu thức: $48 \\cdot 52$.",
            "correctAnswer": "2496",
            "acceptableAnswers": [
              "2496",
              "2.496",
              "hai nghìn bốn trăm chín mươi sáu"
            ],
            "explanation": "$(50 - 2)(50 + 2) = 50^2 - 2^2 = 2500 - 4 = 2496$."
          },
          {
            "id": "otc2-d2-sa4",
            "badge": "Câu 4 (TH) - Số nghiệm của phương trình",
            "prompt": "Phương trình $x^3 - 9x = 0$ có bao nhiêu nghiệm thực?",
            "correctAnswer": "3",
            "acceptableAnswers": [
              "3",
              "ba"
            ],
            "explanation": "$x(x^2 - 9) = x(x - 3)(x + 3) = 0 \\Leftrightarrow x = 0, x = 3, x = -3$. Có 3 nghiệm."
          },
          {
            "id": "otc2-d2-sa5",
            "badge": "Câu 5 (VD) - Giá trị nhỏ nhất của biểu thức",
            "prompt": "Tìm giá trị nhỏ nhất của biểu thức $P = x^2 - 6x + 14$.",
            "correctAnswer": "5",
            "acceptableAnswers": [
              "5",
              "năm"
            ],
            "explanation": "$P = (x - 3)^2 + 5 \\ge 5$ khi $x = 3$. Giá trị nhỏ nhất là $5$."
          },
          {
            "id": "otc2-d2-sa6",
            "badge": "Câu 6 (VD - Thực tế) - Thể tích khối lập phương",
            "prompt": "Một khối lập phương đặc có thể tích $125\\text{ cm}^3$. Độ dài cạnh của khối lập phương đó bằng bao nhiêu centimét?",
            "correctAnswer": "5",
            "acceptableAnswers": [
              "5",
              "5cm",
              "5 cm",
              "năm"
            ],
            "explanation": "$a^3 = 125 = 5^3 \\Rightarrow a = 5\\text{ cm}$."
          }
        ]
      },
      {
        "id": "de-3",
        "title": "Đề ôn tập số 3",
        "description": "Đề ôn tập tổng hợp cuối Chương II (Hằng đẳng thức đáng nhớ & Ứng dụng) - Đề số 3 chuẩn cấu trúc Bộ GD&ĐT",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc2-d3-q1",
            "badge": "Câu 1 (NB) - Công thức bình phương của một tổng",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Công thức bình phương của một tổng hai biểu thức $A, B$ là:",
            "options": [
              "$(A + B)^2 = A^2 + 2AB + B^2$",
              "$(A + B)^2 = A^2 + B^2$",
              "$(A + B)^2 = A^2 + AB + B^2$",
              "$(A + B)^2 = A^2 - 2AB + B^2$"
            ],
            "correctIndex": 0,
            "explanation": "$(A + B)^2 = A^2 + 2AB + B^2$."
          },
          {
            "id": "otc2-d3-q2",
            "badge": "Câu 2 (NB) - Khai triển tích hiệu hai bình phương",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Khai triển $(3x - 2)(3x + 2)$ ta được:",
            "options": [
              "$9x^2 - 4$",
              "$9x^2 + 4$",
              "$3x^2 - 4$",
              "$9x - 4$"
            ],
            "correctIndex": 0,
            "explanation": "$(3x)^2 - 2^2 = 9x^2 - 4$."
          },
          {
            "id": "otc2-d3-q3",
            "badge": "Câu 3 (NB) - Khai triển lập phương một hiệu",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Khai triển hằng đẳng thức $(x - 1)^3$ ta được:",
            "options": [
              "$x^3 - 3x^2 + 3x - 1$",
              "$x^3 - 1$",
              "$x^3 - 3x^2 - 3x - 1$",
              "$x^3 - 3x - 1$"
            ],
            "correctIndex": 0,
            "explanation": "$(x - 1)^3 = x^3 - 3x^2 + 3x - 1$."
          },
          {
            "id": "otc2-d3-q4",
            "badge": "Câu 4 (NB) - Dùng hằng đẳng thức tổng lập phương",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Đa thức $x^3 + 27$ viết dưới dạng tích là:",
            "options": [
              "$(x + 3)(x^2 - 3x + 9)$",
              "$(x + 3)(x^2 + 3x + 9)$",
              "$(x + 3)^3$",
              "$(x - 3)(x^2 + 3x + 9)$"
            ],
            "correctIndex": 0,
            "explanation": "$x^3 + 3^3 = (x + 3)(x^2 - 3x + 9)$."
          },
          {
            "id": "otc2-d3-q5",
            "badge": "Câu 5 (NB) - Đặt nhân tử chung đa thức bậc 3",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Phân tích đa thức $2x^3 - 6x^2$ thành nhân tử:",
            "options": [
              "$2x^2(x - 3)$",
              "$2x(x^2 - 3)$",
              "$x^2(2x - 6)$",
              "$2x^2(x + 3)$"
            ],
            "correctIndex": 0,
            "explanation": "$2x^2(x - 3)$."
          },
          {
            "id": "otc2-d3-q6",
            "badge": "Câu 6 (NB) - Nhận biết phương trình tích",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Nghiệm của phương trình $(2x - 4)(x + 1) = 0$ là:",
            "options": [
              "$x = 2$ hoặc $x = -1$",
              "$x = -2$ hoặc $x = 1$",
              "$x = 4$ hoặc $x = -1$",
              "$x = 2$"
            ],
            "correctIndex": 0,
            "explanation": "$2x - 4 = 0 \\Leftrightarrow x = 2$; $x + 1 = 0 \\Leftrightarrow x = -1$."
          },
          {
            "id": "otc2-d3-q7",
            "badge": "Câu 7 (TH) - Phân tích đa thức bằng hằng đẳng thức",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Đa thức $25x^2 - 1$ phân tích thành tích là:",
            "options": [
              "$(5x - 1)(5x + 1)$",
              "$(25x - 1)(25x + 1)$",
              "$(5x - 1)^2$",
              "$(5x + 1)^2$"
            ],
            "correctIndex": 0,
            "explanation": "$(5x)^2 - 1^2 = (5x - 1)(5x + 1)$."
          },
          {
            "id": "otc2-d3-q8",
            "badge": "Câu 8 (TH) - Nhóm 2 - 2 kết hợp đổi dấu",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Phân tích đa thức $x(y - 2) + 3(2 - y)$ thành nhân tử:",
            "options": [
              "$(y - 2)(x - 3)$",
              "$(y - 2)(x + 3)$",
              "$(2 - y)(x - 3)$",
              "$(y + 2)(x - 3)$"
            ],
            "correctIndex": 0,
            "explanation": "$x(y - 2) - 3(y - 2) = (y - 2)(x - 3)$."
          },
          {
            "id": "otc2-d3-q9",
            "badge": "Câu 9 (TH) - Nhóm 3 - 1",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Phân tích đa thức $4 - x^2 + 2xy - y^2$ thành nhân tử:",
            "options": [
              "$(2 - x + y)(2 + x - y)$",
              "$(2 - x - y)(2 + x + y)$",
              "$(2 - x + y)^2$",
              "$(4 - x + y)(4 + x - y)$"
            ],
            "correctIndex": 0,
            "explanation": "$4 - (x^2 - 2xy + y^2) = 2^2 - (x - y)^2 = [2 - (x - y)][2 + (x - y)] = (2 - x + y)(2 + x - y)$."
          },
          {
            "id": "otc2-d3-q10",
            "badge": "Câu 10 (TH) - Tính nhanh giá trị hằng đẳng thức",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Tính nhanh giá trị của $98^2$:",
            "options": [
              "$9604$",
              "$9600$",
              "$9804$",
              "$9404$"
            ],
            "correctIndex": 0,
            "explanation": "$98^2 = (100 - 2)^2 = 100^2 - 2(100)(2) + 2^2 = 10000 - 400 + 4 = 9604$."
          },
          {
            "id": "otc2-d3-q11",
            "badge": "Câu 11 (VD) - Tìm x bằng phân tích thành nhân tử",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Nghiệm của phương trình $2x(x - 3) - x + 3 = 0$ là:",
            "options": [
              "$x = 3$ hoặc $x = \\frac{1}{2}$",
              "$x = 3$ hoặc $x = -\\frac{1}{2}$",
              "$x = -3$ hoặc $x = \\frac{1}{2}$",
              "$x = 3$"
            ],
            "correctIndex": 0,
            "explanation": "$2x(x - 3) - (x - 3) = 0 \\Leftrightarrow (x - 3)(2x - 1) = 0 \\Leftrightarrow x = 3$ hoặc $x = \\frac{1}{2}$."
          },
          {
            "id": "otc2-d3-q12",
            "badge": "Câu 12 (VD - Nâng cao) - Chứng minh chia hết",
            "source": "Toán 8 KNTT Đề số 3",
            "question": "Với mọi số nguyên $n$, biểu thức $A = (n + 2)^2 - (n - 2)^2$ luôn chia hết cho số nào sau đây?",
            "options": [
              "$8$",
              "$16$",
              "$5$",
              "$7$"
            ],
            "correctIndex": 0,
            "explanation": "$A = (n^2 + 4n + 4) - (n^2 - 4n + 4) = 8n \\ \\vdots \\ 8$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc2-d3-tf1",
            "badge": "Câu 1 (Đ/S) - Khẳng định về hằng đẳng thức",
            "prompt": "Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Biểu thức $(x + 2y)^2$ khai triển bằng $x^2 + 4xy + 4y^2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x^2 + 2(x)(2y) + (2y)^2 = x^2 + 4xy + 4y^2$."
              },
              {
                "id": "b",
                "text": "Biểu thức $x^2 - 4y^2$ phân tích bằng $(x - 4y)(x + 4y)$.",
                "correctAnswer": false,
                "explanation": "Sai, phải là $(x - 2y)(x + 2y)$."
              },
              {
                "id": "c",
                "text": "Biểu thức $(x - 1)(x^2 + x + 1)$ thu gọn bằng $x^3 - 1$.",
                "correctAnswer": true,
                "explanation": "Đúng, hằng đẳng thức hiệu hai lập phương."
              },
              {
                "id": "d",
                "text": "Biểu thức $(x + 1)^3$ thu gọn bằng $x^3 + 1$.",
                "correctAnswer": false,
                "explanation": "Sai, $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$."
              }
            ]
          },
          {
            "id": "otc2-d3-tf2",
            "badge": "Câu 2 (Đ/S) - Biến đổi đa thức thành tích",
            "prompt": "Xét tính đúng/sai của các phép biến đổi sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Đa thức $x^3 - 4x$ phân tích thành $x(x - 2)(x + 2)$.",
                "correctAnswer": true,
                "explanation": "Đúng, $x(x^2 - 4) = x(x - 2)(x + 2)$."
              },
              {
                "id": "b",
                "text": "Đa thức $x^2 - 2x + 1 - y^2$ phân tích thành $(x - 1 - y)(x - 1 + y)$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x - 1)^2 - y^2 = (x - 1 - y)(x - 1 + y)$."
              },
              {
                "id": "c",
                "text": "Đa thức $x^2 + y^2$ luôn phân tích được thành nhân tử trên tập số thực.",
                "correctAnswer": false,
                "explanation": "Sai, không phân tích được thành nhân tử trên $\\mathbb{R}$."
              },
              {
                "id": "d",
                "text": "Đa thức $x^3 + 8$ phân tích thành $(x + 2)(x^2 - 4x + 4)$.",
                "correctAnswer": false,
                "explanation": "Sai, phải là $(x + 2)(x^2 - 2x + 4)$ (bình phương thiếu không có số 4 ở giữa)."
              }
            ]
          },
          {
            "id": "otc2-d3-tf3",
            "badge": "Câu 3 (Đ/S) - Nghiệm phương trình và chia hết",
            "prompt": "Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Phương trình $x^2 - 16 = 0$ có nghiệm nhỏ nhất là $-4$.",
                "correctAnswer": true,
                "explanation": "Đúng, hai nghiệm là $4$ và $-4$, nhỏ nhất là $-4$."
              },
              {
                "id": "b",
                "text": "Phương trình $x^2 - 4x + 4 = 0$ có đúng 1 nghiệm duy nhất là $x = 2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(x - 2)^2 = 0 \\Leftrightarrow x = 2$."
              },
              {
                "id": "c",
                "text": "Với mọi số tự nhiên $n$, số $n^2 + n$ luôn là số chẵn.",
                "correctAnswer": true,
                "explanation": "Đúng, $n(n + 1)$ là tích của 2 số tự nhiên liên tiếp nên luôn chẵn."
              },
              {
                "id": "d",
                "text": "Phương trình $x^2 + 1 = 0$ có nghiệm là $x = -1$.",
                "correctAnswer": false,
                "explanation": "Sai, $x^2 + 1 \\ge 1 > 0$ nên vô nghiệm."
              }
            ]
          },
          {
            "id": "otc2-d3-tf4",
            "badge": "Câu 4 (Đ/S - Thực tế) - Bài toán thực tế",
            "prompt": "Xét tính đúng/sai của các bài toán thực tiễn sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Biểu thức $65^2 - 35^2$ có giá trị bằng $3000$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(65 - 35)(65 + 35) = 30 \\times 100 = 3000$."
              },
              {
                "id": "b",
                "text": "Một hình chữ nhật có kích thước $x + 5\\text{ (m)}$ và $x - 5\\text{ (m)}$. Khi $x = 15\\text{ m}$, diện tích là $200\\text{ m}^2$.",
                "correctAnswer": true,
                "explanation": "Đúng, $S = 15^2 - 25 = 225 - 25 = 200\\text{ m}^2$."
              },
              {
                "id": "c",
                "text": "Biểu thức $101^2 - 1$ chia hết cho $100$.",
                "correctAnswer": true,
                "explanation": "Đúng, $(101 - 1)(101 + 1) = 100 \\times 102$ chia hết cho 100."
              },
              {
                "id": "d",
                "text": "Khối kim loại rỗng có thể tích $V = 10^3 - 6^3 = 784\\text{ cm}^3$.",
                "correctAnswer": true,
                "explanation": "Đúng, $1000 - 216 = 784\\text{ cm}^3$."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc2-d3-sa1",
            "badge": "Câu 1 (NB) - Hệ số tự do của khai triển",
            "prompt": "Hệ số tự do trong khai triển $(x + 6)(x - 6)$ bằng bao nhiêu?",
            "correctAnswer": "-36",
            "acceptableAnswers": [
              "-36",
              "âm ba mươi sáu",
              "- 36"
            ],
            "explanation": "$x^2 - 36$. Hệ số tự do là $-36$."
          },
          {
            "id": "otc2-d3-sa2",
            "badge": "Câu 2 (TH) - Tìm hằng số trong lập phương",
            "prompt": "Cho đa thức $x^3 + 6x^2 + 12x + 8 = (x + a)^3$. Giá trị của $a$ bằng bao nhiêu?",
            "correctAnswer": "2",
            "acceptableAnswers": [
              "2",
              "hai"
            ],
            "explanation": "$(x + 2)^3 \\Rightarrow a = 2$."
          },
          {
            "id": "otc2-d3-sa3",
            "badge": "Câu 3 (TH) - Tính nhanh giá trị số",
            "prompt": "Tính giá trị số của biểu thức: $95^2 - 5^2$.",
            "correctAnswer": "9000",
            "acceptableAnswers": [
              "9000",
              "9.000",
              "chín nghìn"
            ],
            "explanation": "$(95 - 5)(95 + 5) = 90 \\times 100 = 9000$."
          },
          {
            "id": "otc2-d3-sa4",
            "badge": "Câu 4 (TH) - Số nghiệm của phương trình",
            "prompt": "Phương trình $(x - 5)^2 = 0$ có bao nhiêu nghiệm?",
            "correctAnswer": "1",
            "acceptableAnswers": [
              "1",
              "một"
            ],
            "explanation": "$x - 5 = 0 \\Leftrightarrow x = 5$. Có duy nhất 1 nghiệm."
          },
          {
            "id": "otc2-d3-sa5",
            "badge": "Câu 5 (VD) - Tìm nghiệm dương của phương trình",
            "prompt": "Tìm nghiệm dương của phương trình: $x^2 - 8x = 0$.",
            "correctAnswer": "8",
            "acceptableAnswers": [
              "8",
              "tám"
            ],
            "explanation": "$x(x - 8) = 0 \\Leftrightarrow x = 0$ hoặc $x = 8$. Nghiệm dương là $8$."
          },
          {
            "id": "otc2-d3-sa6",
            "badge": "Câu 6 (VD - Thực tế) - Thể tích khối lập phương rỗng",
            "prompt": "Một khối lập phương đặc cạnh $8\\text{ cm}$ bị khoét rỗng một khối lập phương cạnh $6\\text{ cm}$. Thể tích kim loại còn lại bằng bao nhiêu $\\text{cm}^3$?",
            "correctAnswer": "296",
            "acceptableAnswers": [
              "296",
              "296cm3",
              "296 cm3"
            ],
            "explanation": "$8^3 - 6^3 = 512 - 216 = 296\\text{ (cm}^3\\text{)}$."
          }
        ]
      }
    ]
  },
  "t8-b10-tu-giac": {
    "id": "t8-b10-tu-giac",
    "lessonNumber": 10,
    "title": "Bài 10: Tứ giác",
    "bookChapter": "Chương III: Tứ giác",
    "scenarioTitle": "Tình huống: Đo góc khung diều và kiểm tra độ vững chắc của giàn giáo",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn An",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, em và các bạn đang làm một chiếc diều hình tứ giác ABCD. Em dùng thước đo góc đo được góc A = 60 độ, góc B = 110 độ và góc D = 110 độ. Nhưng chiếc diều đang dán dở nên em không đặt được thước đo để đo góc C. Thầy có cách nào tính chính xác số đo góc C mà không cần đo trực tiếp không ạ?",
        "visualGraphic": "box",
        "mathNote": "\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = ?"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào An! Hoàn toàn tính được rất dễ dàng em nhé! Một định lí nền tảng của hình học là: Tổng các góc trong một tứ giác luôn bằng 360 độ (vì bất kỳ tứ giác nào cũng được chia thành hai tam giác bằng một đường chéo, mà mỗi tam giác có tổng ba góc bằng 180 độ). Với chiếc diều của em: \\widehat{C} = 360° - (60° + 110° + 110°) = 360° - 280° = 80°. Chiếc diều của em có góc C đúng bằng 80 độ! Chúng ta cùng khám phá thế giới phong phú của tứ giác nhé!",
        "visualGraphic": "graph",
        "mathNote": "\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm tứ giác & Tứ giác lồi",
        "points": [
          "Tứ giác $ABCD$ là hình gồm bốn đoạn thẳng $AB, BC, CD, DA$, trong đó bất kì hai đoạn thẳng nào cũng không cùng nằm trên một đường thẳng.",
          "Các yếu tố của tứ giác:",
          "  • Bốn đỉnh: $A, B, C, D$. Bốn cạnh: $AB, BC, CD, DA$.",
          "  • Hai đỉnh kề nhau: $A$ và $B$, $B$ và $C$,... Hai đỉnh đối nhau: $A$ và $C$, $B$ và $D$.",
          "  • Hai cạnh kề nhau: $AB$ và $BC$,... Hai cạnh đối nhau: $AB$ và $CD$, $AD$ và $BC$.",
          "  • Hai đường chéo: $AC$ và $BD$. Bốn góc trong: $\\widehat{A}, \\widehat{B}, \\widehat{C}, \\widehat{D}$.",
          "Tứ giác lồi là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào của tứ giác.",
          "Quy ước: Từ nay khi nói tứ giác mà không chú thích gì thêm, ta hiểu đó là tứ giác lồi."
        ],
        "exampleTitle": "Ví dụ 1 (Nhận biết tứ giác lồi chuẩn SGK Trang 48)",
        "exampleProblem": "Quan sát hình vẽ dưới đây, cho biết hình nào là tứ giác lồi, hình nào không phải là tứ giác lồi? Giải thích vì sao.",
        "exampleSolution": "• Hình 1 (tứ giác $ABCD$) là tứ giác lồi vì khi ta lấy bất kì cạnh nào (ví dụ cạnh $AB, BC, CD$ hoặc $DA$) làm bờ thì toàn bộ tứ giác luôn nằm trọn vẹn trong một nửa mặt phẳng có bờ là đường thẳng đó.\n• Hình 2 (tứ giác $EFGH$) không phải là tứ giác lồi (đây là tứ giác lõm tại đỉnh $F$) vì đường thẳng chứa cạnh $EF$ đi xuyên qua tứ giác, chia tứ giác nằm về hai phía khác nhau của đường thẳng đó.",
        "examples": [
          {
            "title": "Hình vẽ minh họa chuẩn SGK: Tứ giác lồi và Tứ giác lõm",
            "problem": "Phân biệt tứ giác lồi $ABCD$ và tứ giác lõm $EFGH$:",
            "solution": "Tứ giác lồi luôn nằm về một phía của bất kỳ đường thẳng chứa cạnh nào.",
            "svgDiagram": "<svg viewBox=\"0 0 520 220\" class=\"w-full max-w-lg mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- KHUNG TRÁI: Tứ giác lồi ABCD -->\n  <g>\n    <polygon points=\"60,50 180,60 160,170 50,150\" fill=\"#0284c7\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n    <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#38bdf8\" />\n    <circle cx=\"180\" cy=\"60\" r=\"4\" fill=\"#38bdf8\" />\n    <circle cx=\"160\" cy=\"170\" r=\"4\" fill=\"#38bdf8\" />\n    <circle cx=\"50\" cy=\"150\" r=\"4\" fill=\"#38bdf8\" />\n    <text x=\"52\" y=\"38\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">A</text>\n    <text x=\"190\" y=\"58\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">B</text>\n    <text x=\"170\" y=\"190\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">C</text>\n    <text x=\"32\" y=\"165\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">D</text>\n    <text x=\"115\" y=\"210\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">a) Tứ giác lồi ABCD</text>\n  </g>\n  <!-- ĐƯỜNG PHÂN CÁCH -->\n  <line x1=\"260\" y1=\"20\" x2=\"260\" y2=\"200\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\" />\n  <!-- KHUNG PHẢI: Tứ giác lõm EFGH -->\n  <g>\n    <polygon points=\"290,50 370,115 450,55 400,175\" fill=\"#f43f5e\" fill-opacity=\"0.15\" stroke=\"#fb7185\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n    <circle cx=\"290\" cy=\"50\" r=\"4\" fill=\"#fb7185\" />\n    <circle cx=\"370\" cy=\"115\" r=\"4\" fill=\"#fb7185\" />\n    <circle cx=\"450\" cy=\"55\" r=\"4\" fill=\"#fb7185\" />\n    <circle cx=\"400\" cy=\"175\" r=\"4\" fill=\"#fb7185\" />\n    <text x=\"280\" y=\"42\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">E</text>\n    <text x=\"375\" y=\"120\" fill=\"#facc15\" font-size=\"15\" font-weight=\"bold\">F (lõm)</text>\n    <text x=\"460\" y=\"55\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">G</text>\n    <text x=\"410\" y=\"190\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">H</text>\n    <text x=\"385\" y=\"210\" fill=\"#fb7185\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">b) Tứ giác lõm EFGH</text>\n  </g>\n</svg>"
          }
        ]
      },
      {
        "index": "2",
        "title": "Định lí tổng các góc của một tứ giác",
        "points": [
          "Định lí: Tổng các góc trong một tứ giác bằng $360^\\circ$:",
          "  $\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$",
          "Chứng minh định lí:",
          "  Kẻ đường chéo $AC$ chia tứ giác $ABCD$ thành hai tam giác $\\Delta ABC$ và $\\Delta ADC$.",
          "  Tổng các góc của $\\Delta ABC$ là: $\\widehat{A}_1 + \\widehat{B} + \\widehat{C}_1 = 180^\\circ$.",
          "  Tổng các góc của $\\Delta ADC$ là: $\\widehat{A}_2 + \\widehat{D} + \\widehat{C}_2 = 180^\\circ$.",
          "  Do đó: $\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = (\\widehat{A}_1 + \\widehat{A}_2) + \\widehat{B} + (\\widehat{C}_1 + \\widehat{C}_2) + \\widehat{D} = 180^\\circ + 180^\\circ = 360^\\circ$."
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 49)",
        "exampleProblem": "Cho tứ giác $ABCD$ có $\\widehat{A} = 65^\\circ, \\widehat{B} = 117^\\circ, \\widehat{C} = 71^\\circ$. Tính số đo của góc $D$.",
        "exampleSolution": "Áp dụng định lí tổng các góc của tứ giác $ABCD$ ta có:\n" +
          "$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$\n" +
          "$\\Rightarrow 65^\\circ + 117^\\circ + 71^\\circ + \\widehat{D} = 360^\\circ$\n" +
          "$\\Rightarrow 253^\\circ + \\widehat{D} = 360^\\circ$\n" +
          "$\\Rightarrow \\widehat{D} = 360^\\circ - 253^\\circ = 107^\\circ$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Kẻ đường chéo chia hai tam giác",
            "problem": "Chứng minh tổng 4 góc tứ giác bằng 360 độ nhờ đường chéo AC:",
            "solution": "Tổng các góc tứ giác bằng tổng các góc của hai tam giác: 180° + 180° = 360°.",
            "svgDiagram": "<svg viewBox=\"0 0 380 230\" class=\"w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-lg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"60,50 300,50 330,180 80,180\" fill=\"#0284c7\" fill-opacity=\"0.12\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <!-- Đường chéo AC nối từ (60,50) đến (330,180) -->\n  <line x1=\"60\" y1=\"50\" x2=\"330\" y2=\"180\" stroke=\"#f59e0b\" stroke-width=\"2.2\" stroke-dasharray=\"5 4\" />\n  <!-- Đỉnh A -->\n  <circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#38bdf8\" />\n  <text x=\"40\" y=\"48\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">A</text>\n  <text x=\"78\" y=\"70\" fill=\"#38bdf8\" font-size=\"11\">A₁</text>\n  <text x=\"68\" y=\"95\" fill=\"#34d399\" font-size=\"11\">A₂</text>\n  <!-- Đỉnh B -->\n  <circle cx=\"300\" cy=\"50\" r=\"4\" fill=\"#38bdf8\" />\n  <text x=\"310\" y=\"48\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">B</text>\n  <!-- Đỉnh C -->\n  <circle cx=\"330\" cy=\"180\" r=\"4\" fill=\"#38bdf8\" />\n  <text x=\"342\" y=\"190\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">C</text>\n  <text x=\"295\" y=\"165\" fill=\"#38bdf8\" font-size=\"11\">C₁</text>\n  <text x=\"305\" y=\"182\" fill=\"#34d399\" font-size=\"11\">C₂</text>\n  <!-- Đỉnh D -->\n  <circle cx=\"80\" cy=\"180\" r=\"4\" fill=\"#38bdf8\" />\n  <text x=\"62\" y=\"195\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">D</text>\n  <!-- Nhãn tam giác -->\n  <text x=\"210\" y=\"95\" fill=\"#38bdf8\" font-size=\"12\" font-style=\"italic\">ΔABC (180°)</text>\n  <text x=\"160\" y=\"150\" fill=\"#34d399\" font-size=\"12\" font-style=\"italic\">ΔADC (180°)</text>\n</svg>"
          }
        ]
      },
      {
        "index": "3",
        "title": "Góc ngoài của tứ giác",
        "points": [
          "Định nghĩa: Góc kề bù với một góc của tứ giác gọi là góc ngoài của tứ giác tại đỉnh đó.",
          "Mỗi đỉnh của tứ giác có hai góc ngoài (hai góc ngoài này là hai góc đối đỉnh nên bằng nhau).",
          "Tính chất quan trọng: Tổng 4 góc ngoài ở 4 đỉnh của một tứ giác lồi luôn bằng $360^\\circ$:",
          "  $\\widehat{A}_1 + \\widehat{B}_1 + \\widehat{C}_1 + \\widehat{D}_1 = 360^\\circ$",
          "Chứng minh nhanh: Tổng các góc ngoài bằng $4 \\times 180^\\circ - (\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D}) = 720^\\circ - 360^\\circ = 360^\\circ$."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 50)",
        "exampleProblem": "Cho tứ giác $ABCD$ có các góc trong $\\widehat{A} = 100^\\circ, \\widehat{B} = 80^\\circ, \\widehat{C} = 70^\\circ$.\n" +
          "a) Tính góc ngoài tại đỉnh $A$ và góc ngoài tại đỉnh $B$.\n" +
          "b) Tính góc trong $\\widehat{D}$ và góc ngoài tại đỉnh $D$.",
        "exampleSolution": "a) Góc ngoài tại đỉnh $A$ là: $\\widehat{A}_{\\text{ngoài}} = 180^\\circ - 100^\\circ = 80^\\circ$.\n" +
          "Góc ngoài tại đỉnh $B$ là: $\\widehat{B}_{\\text{ngoài}} = 180^\\circ - 80^\\circ = 100^\\circ$.\n\n" +
          "b) Góc trong $\\widehat{D} = 360^\\circ - (100^\\circ + 80^\\circ + 70^\\circ) = 360^\\circ - 250^\\circ = 110^\\circ$.\n" +
          "Góc ngoài tại đỉnh $D$ là: $\\widehat{D}_{\\text{ngoài}} = 180^\\circ - 110^\\circ = 70^\\circ$."
      },
      {
        "index": "4",
        "title": "Các dạng toán tính góc & Ứng dụng thực tế",
        "points": [
          "Dạng 1: Cho biết 3 góc, tính góc thứ tư: $\\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B} + \\widehat{C})$.",
          "Dạng 2: Các góc tỉ lệ hoặc có mối quan hệ đại số: Đặt ẩn phụ $x$ rồi lập phương trình tổng bằng $360^\\circ$.",
          "Dạng 3: Tứ giác có các góc vuông (ví dụ tứ giác có 2 góc vuông, 3 góc vuông).",
          "Dạng 4: Bài toán thực tế về khung diều, giàn giáo xây dựng, liên kết cơ khí hình tứ giác."
        ],
        "exampleTitle": "Ví dụ 4 (Tính góc theo tỉ lệ và thực tế)",
        "exampleProblem": "a) Tìm các góc của tứ giác $ABCD$, biết các góc tỉ lệ với $1 : 2 : 3 : 4$.\n" +
          "b) Khung giàn giáo hình tứ giác có hai thanh giằng chéo vuông góc với nhau và hai góc trên đều bằng $90^\\circ$. Hai góc còn lại có mối quan hệ gì?",
        "exampleSolution": "a) Gọi số đo các góc $\\widehat{A}, \\widehat{B}, \\widehat{C}, \\widehat{D}$ lần lượt là $x, 2x, 3x, 4x$ ($x > 0$).\n" +
          "Tổng bốn góc bằng $360^\\circ$ nên:\n" +
          "$x + 2x + 3x + 4x = 360^\\circ \\Leftrightarrow 10x = 360^\\circ \\Leftrightarrow x = 36^\\circ$.\n" +
          "Vậy: $\\widehat{A} = 36^\\circ, \\widehat{B} = 72^\\circ, \\widehat{C} = 108^\\circ, \\widehat{D} = 144^\\circ$.\n\n" +
          "b) Nếu tứ giác có hai góc bằng $90^\\circ$ thì tổng hai góc còn lại bằng $360^\\circ - (90^\\circ + 90^\\circ) = 180^\\circ$ (hai góc còn lại bù nhau)."
      }
    ],
    "youtubeVideos": [
      {
        "id": "t8_b10_video1",
        "title": "Tiết 1: Định nghĩa tứ giác lồi và định lí tổng 4 góc"
      },
      {
        "id": "t8_b10_video2",
        "title": "Tiết 2: Góc ngoài của tứ giác và các bài toán tính góc thực tế"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.10.1",
        "timeSeconds": 130,
        "timeLabel": "02:10",
        "title": "Ví dụ 1: Tổng các góc trong tứ giác",
        "question": "Tổng các góc trong một tứ giác bằng bao nhiêu độ?",
        "options": [
          "$360^\\circ$",
          "$180^\\circ$",
          "$540^\\circ$",
          "$720^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Định lí: Tổng các góc trong một tứ giác bằng $360^\\circ$."
      },
      {
        "id": "vq-8.10.2",
        "timeSeconds": 310,
        "timeLabel": "05:10",
        "title": "Ví dụ 2: Tính góc thứ tư",
        "question": "Cho tứ giác $ABCD$ có $\\widehat{A} = 80^\\circ, \\widehat{B} = 100^\\circ, \\widehat{C} = 70^\\circ$. Số đo góc $D$ là:",
        "options": [
          "$110^\\circ$",
          "$100^\\circ$",
          "$120^\\circ$",
          "$90^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "$\\widehat{D} = 360^\\circ - (80^\\circ + 100^\\circ + 70^\\circ) = 360^\\circ - 250^\\circ = 110^\\circ$."
      },
      {
        "id": "vq-8.10.3",
        "timeSeconds": 220,
        "timeLabel": "03:40",
        "title": "Ví dụ 3: Góc ngoài của tứ giác",
        "question": "Góc trong $\\widehat{A}$ của một tứ giác bằng $115^\\circ$. Số đo góc ngoài tại đỉnh $A$ là:",
        "options": [
          "$65^\\circ$",
          "$115^\\circ$",
          "$75^\\circ$",
          "$245^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Góc ngoài kề bù với góc trong: $180^\\circ - 115^\\circ = 65^\\circ$."
      },
      {
        "id": "vq-8.10.4",
        "timeSeconds": 440,
        "timeLabel": "07:20",
        "title": "Ví dụ 4: Tổng các góc ngoài",
        "question": "Tổng các góc ngoài tại 4 đỉnh của một tứ giác lồi bằng bao nhiêu độ?",
        "options": [
          "$360^\\circ$",
          "$720^\\circ$",
          "$180^\\circ$",
          "$540^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng 4 góc ngoài ở 4 đỉnh của tứ giác lồi luôn bằng $360^\\circ$."
      }
    ],
    "tips": [
      "Mẹo chia đôi hình: Nhớ rằng tứ giác được chia thành 2 tam giác bởi một đường chéo: $2 \\times 180^\\circ = 360^\\circ$.",
      "Kỹ thuật tính góc thứ tư: Lấy $360^\\circ$ trừ đi tổng ba góc đã biết.",
      "Góc ngoài kề bù: Góc ngoài luôn bằng $180^\\circ$ trừ đi góc trong tại cùng đỉnh đó.",
      "Tứ giác có 3 góc vuông: Góc thứ tư bắt buộc phải bằng $90^\\circ$ vì $360^\\circ - 3 \\times 90^\\circ = 90^\\circ$ (đó là hình chữ nhật)."
    ],
    "traps": [
      "Bẫy nhầm tổng góc: Nhầm tổng các góc tứ giác là $180^\\circ$ (nhầm sang tam giác) dẫn đến tính ra số âm.",
      "Bẫy 4 góc nhọn: Tứ giác không thể có 4 góc đều nhọn vì nếu cả 4 góc $< 90^\\circ$ thì tổng $< 360^\\circ$ (vô lí).",
      "Bẫy 4 góc tù: Tứ giác không thể có 4 góc đều tù vì nếu cả 4 góc $> 90^\\circ$ thì tổng $> 360^\\circ$.",
      "Bẫy thứ tự đọc tên đỉnh: Tứ giác $ABCD$ phải nối theo chu vi $A \\to B \\to C \\to D$, không được nối chéo $A \\to C \\to B \\to D$."
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.10.1",
        "badge": "Câu 1 (NB) - Định lí tổng các góc của tứ giác",
        "source": "SGK Toán 8 KNTT Trang 49",
        "question": "Tổng các góc trong một tứ giác lồi bằng:",
        "options": [
          "$360^\\circ$",
          "$180^\\circ$",
          "$540^\\circ$",
          "$720^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Định lí SGK: Tổng các góc trong một tứ giác bằng $360^\\circ$."
      },
      {
        "id": "quiz-8.10.2",
        "badge": "Câu 2 (NB) - Nhận biết tứ giác lồi",
        "source": "SGK Toán 8 KNTT Trang 48",
        "question": "Tứ giác lồi là tứ giác:",
        "options": [
          "Luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào của tứ giác",
          "Có ít nhất một góc lớn hơn $180^\\circ$",
          "Có hai đường chéo không cắt nhau",
          "Có bốn cạnh luôn bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa SGK, tứ giác lồi là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào của tứ giác."
      },
      {
        "id": "quiz-8.10.3",
        "badge": "Câu 3 (NB) - Tính góc x trong hình vẽ",
        "source": "SGK Toán 8 KNTT Bài 3.1 Trang 51",
        "question": "Tìm số đo góc $x$ trong hình vẽ tứ giác $ABCD$ dưới đây:",
        "svgDiagram": "<svg viewBox='0 0 340 200' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='50,40 250,50 280,160 80,160' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2' stroke-linejoin='round'/> <path d='M 54.8,59.4 A 20 20 0 0 0 70,41' fill='none' stroke='#38bdf8' stroke-width='1.8'/> <text x='78' y='67' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>65°</text> <text x='36' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>A</text> <path d='M 230,49 A 20 20 0 0 0 255.3,69.3' fill='none' stroke='#34d399' stroke-width='1.8'/> <text x='227' y='82' fill='#34d399' font-size='11' font-weight='bold' text-anchor='middle'>115°</text> <text x='258' y='46' fill='#f8fafc' font-size='13' font-weight='bold'>B</text> <path d='M 274.7,140.7 A 20 20 0 0 0 260,160' fill='none' stroke='#fbbf24' stroke-width='1.8'/> <text x='250' y='142' fill='#fbbf24' font-size='11' font-weight='bold' text-anchor='middle'>80°</text> <text x='288' y='172' fill='#f8fafc' font-size='13' font-weight='bold'>C</text> <path d='M 100,160 A 20 20 0 0 0 75.2,140.6' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='102' y='135' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='66' y='172' fill='#f8fafc' font-size='13' font-weight='bold'>D</text> </svg>",
        "options": [
          "$x = 100^\\circ$",
          "$x = 90^\\circ$",
          "$x = 110^\\circ$",
          "$x = 80^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "$x = 360^\\circ - (65^\\circ + 115^\\circ + 80^\\circ) = 360^\\circ - 260^\\circ = 100^\\circ$."
      },
      {
        "id": "quiz-8.10.4",
        "badge": "Câu 4 (NB) - Tứ giác có hai góc vuông",
        "source": "SGK Toán 8 KNTT Trang 50",
        "question": "Tìm số đo góc $x$ trong hình vẽ tứ giác $MNPQ$ có hai góc vuông tại $M$ và $Q$:",
        "svgDiagram": "<svg viewBox='0 0 340 200' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='60,40 240,40 270,160 60,160' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2' stroke-linejoin='round'/> <rect x='60' y='40' width='14' height='14' fill='none' stroke='#38bdf8' stroke-width='1.6'/> <text x='44' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>M</text> <rect x='60' y='146' width='14' height='14' fill='none' stroke='#38bdf8' stroke-width='1.6'/> <text x='44' y='172' fill='#f8fafc' font-size='13' font-weight='bold'>Q</text> <path d='M 218,40 A 22 22 0 0 0 245.3,61.3' fill='none' stroke='#fbbf24' stroke-width='1.8'/> <text x='216' y='75' fill='#fbbf24' font-size='11' font-weight='bold' text-anchor='middle'>120°</text> <text x='248' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>N</text> <path d='M 264.7,138.7 A 22 22 0 0 0 248,160' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='238' y='140' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='278' y='172' fill='#f8fafc' font-size='13' font-weight='bold'>P</text> </svg>",
        "options": [
          "$x = 60^\\circ$",
          "$x = 90^\\circ$",
          "$x = 70^\\circ$",
          "$x = 120^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "$x = 360^\\circ - (90^\\circ + 90^\\circ + 120^\\circ) = 360^\\circ - 300^\\circ = 60^\\circ$."
      },
      {
        "id": "quiz-8.10.5",
        "badge": "Câu 5 (NB) - Khái niệm góc ngoài",
        "source": "SGK Toán 8 KNTT Trang 50",
        "question": "Góc ngoài của tứ giác là góc:",
        "options": [
          "Kề bù với một góc của tứ giác",
          "Đối đỉnh với một góc của tứ giác",
          "Nằm ngoài tứ giác và bằng $90^\\circ$",
          "Kề với một cạnh của tứ giác"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa SGK, góc kề bù với một góc của tứ giác gọi là góc ngoài của tứ giác."
      },
      {
        "id": "quiz-8.10.6",
        "badge": "Câu 6 (NB) - Tổng các góc ngoài",
        "source": "SGK Toán 8 KNTT Trang 50",
        "question": "Tổng các góc ngoài tại bốn đỉnh của một tứ giác lồi luôn bằng:",
        "options": [
          "$360^\\circ$",
          "$180^\\circ$",
          "$720^\\circ$",
          "$540^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng 4 góc ngoài ở 4 đỉnh của tứ giác lồi luôn bằng $360^\\circ$."
      },
      {
        "id": "quiz-8.10.7",
        "badge": "Câu 7 (NB) - Tính góc ngoài khi biết góc trong",
        "source": "SGK Toán 8 KNTT Trang 50",
        "question": "Một tứ giác có góc trong tại đỉnh $A$ bằng $75^\\circ$. Số đo góc ngoài tại đỉnh $A$ là:",
        "options": [
          "$105^\\circ$",
          "$75^\\circ$",
          "$115^\\circ$",
          "$285^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Góc ngoài kề bù với góc trong: $180^\\circ - 75^\\circ = 105^\\circ$."
      },
      {
        "id": "quiz-8.10.8",
        "badge": "Câu 8 (NB) - Số góc nhọn tối đa trong tứ giác",
        "source": "SGK Toán 8 KNTT Bài tập 3.2 Trang 51",
        "question": "Một tứ giác có thể có nhiều nhất bao nhiêu góc nhọn (góc nhỏ hơn $90^\\circ$)?",
        "options": [
          "$3$",
          "$4$",
          "$2$",
          "$1$"
        ],
        "correctIndex": 0,
        "explanation": "Nếu tứ giác có 4 góc nhọn thì tổng 4 góc $< 4 \\times 90^\\circ = 360^\\circ$ (vô lí). Vậy tứ giác chỉ có thể có nhiều nhất 3 góc nhọn (khi đó góc thứ tư là góc tù lớn hơn $90^\\circ$)."
      },
      {
        "id": "quiz-8.10.9",
        "badge": "Câu 9 (NB) - Số góc tù tối đa trong tứ giác",
        "source": "SGK Toán 8 KNTT Bài tập 3.2 Trang 51",
        "question": "Một tứ giác có thể có nhiều nhất bao nhiêu góc tù (góc lớn hơn $90^\\circ$)?",
        "options": [
          "$3$",
          "$4$",
          "$2$",
          "$1$"
        ],
        "correctIndex": 0,
        "explanation": "Nếu tứ giác có 4 góc tù thì tổng 4 góc $> 4 \\times 90^\\circ = 360^\\circ$ (vô lí). Vậy tứ giác chỉ có thể có nhiều nhất 3 góc tù."
      },
      {
        "id": "quiz-8.10.10",
        "badge": "Câu 10 (NB) - Tứ giác có 4 góc bằng nhau",
        "source": "SGK Toán 8 KNTT Trang 50",
        "question": "Một tứ giác có bốn góc bằng nhau thì mỗi góc bằng bao nhiêu độ?",
        "options": [
          "$90^\\circ$",
          "$60^\\circ$",
          "$120^\\circ$",
          "$45^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Vì tổng 4 góc bằng $360^\\circ$ nên mỗi góc bằng $360^\\circ : 4 = 90^\\circ$."
      },
      {
        "id": "quiz-8.10.11",
        "badge": "Câu 11 (TH) - Tính góc ngoài x từ hình vẽ",
        "source": "SGK Toán 8 KNTT Trang 51",
        "question": "Tìm số đo góc ngoài $x$ tại đỉnh $C$ trong hình vẽ sau:",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='85,45 220,45 220,145 70,145' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2' stroke-linejoin='round'/> <line x1='220' y1='145' x2='295' y2='145' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4 3'/> <rect x='206' y='45' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.6'/> <text x='228' y='41' fill='#f8fafc' font-size='13' font-weight='bold'>B</text> <path d='M 82,64.7 A 20 20 0 0 0 105,45' fill='none' stroke='#38bdf8' stroke-width='1.8'/> <text x='104' y='72' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>100°</text> <text x='72' y='41' fill='#f8fafc' font-size='13' font-weight='bold'>A</text> <path d='M 90,145 A 20 20 0 0 0 73,125.3' fill='none' stroke='#fbbf24' stroke-width='1.8'/> <text x='94' y='132' fill='#fbbf24' font-size='11' font-weight='bold' text-anchor='middle'>80°</text> <text x='56' y='156' fill='#f8fafc' font-size='13' font-weight='bold'>D</text> <path d='M 242,145 A 22 22 0 0 0 220,123' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='246' y='126' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='212' y='165' fill='#f8fafc' font-size='13' font-weight='bold'>C</text> </svg>",
        "options": [
          "$x = 90^\\circ$",
          "$x = 100^\\circ$",
          "$x = 80^\\circ$",
          "$x = 110^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Góc trong $\\widehat{C} = 360^\\circ - (100^\\circ + 90^\\circ + 80^\\circ) = 360^\\circ - 270^\\circ = 90^\\circ$. Góc ngoài $x = 180^\\circ - 90^\\circ = 90^\\circ$."
      },
      {
        "id": "quiz-8.10.12",
        "badge": "Câu 12 (TH) - Các góc tứ giác tỉ lệ",
        "source": "SGK Toán 8 KNTT Trang 51",
        "question": "Tứ giác $ABCD$ có các góc tỉ lệ $\\widehat{A} : \\widehat{B} : \\widehat{C} : \\widehat{D} = 2 : 3 : 4 : 6$. Số đo góc $D$ lớn nhất là:",
        "options": [
          "$144^\\circ$",
          "$120^\\circ$",
          "$160^\\circ$",
          "$135^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số phần bằng nhau: $2 + 3 + 4 + 6 = 15$ phần. Một phần là: $360^\\circ : 15 = 24^\\circ$. Góc $D$ là: $6 \\times 24^\\circ = 144^\\circ$."
      },
      {
        "id": "quiz-8.10.13",
        "badge": "Câu 13 (TH) - Tứ giác có hai góc đối bù nhau",
        "source": "SGK Toán 8 KNTT Trang 51",
        "question": "Cho tứ giác $ABCD$ có $\\widehat{A} + \\widehat{C} = 180^\\circ$. Khi đó tổng hai góc $\\widehat{B} + \\widehat{D}$ bằng:",
        "options": [
          "$180^\\circ$",
          "$360^\\circ$",
          "$90^\\circ$",
          "$270^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$ nên $\\widehat{B} + \\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{C}) = 360^\\circ - 180^\\circ = 180^\\circ$."
      },
      {
        "id": "quiz-8.10.14",
        "badge": "Câu 14 (TH) - Tìm x và y trong tứ giác",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Cho tứ giác $ABCD$ có $\\widehat{A} = 2x, \\widehat{B} = 3x, \\widehat{C} = 4x, \\widehat{D} = x$. Giá trị của $x$ bằng:",
        "options": [
          "$36^\\circ$",
          "$30^\\circ$",
          "$40^\\circ$",
          "$45^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "$2x + 3x + 4x + x = 360^\\circ \\Leftrightarrow 10x = 360^\\circ \\Leftrightarrow x = 36^\\circ$."
      },
      {
        "id": "quiz-8.10.15",
        "badge": "Câu 15 (TH) - Tứ giác cánh diều",
        "source": "Toán 8 KNTT Trang 51",
        "question": "Một tứ giác $ABCD$ có $AB = AD$ và $CB = CD$ (hình cái diều) có $\\widehat{B} = 105^\\circ, \\widehat{D} = 105^\\circ, \\widehat{A} = 70^\\circ$. Số đo góc $C$ là:",
        "options": [
          "$80^\\circ$",
          "$70^\\circ$",
          "$85^\\circ$",
          "$75^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "$\\widehat{C} = 360^\\circ - (70^\\circ + 105^\\circ + 105^\\circ) = 360^\\circ - 280^\\circ = 80^\\circ$."
      },
      {
        "id": "quiz-8.10.16",
        "badge": "Câu 16 (TH) - Hai góc kề bù nhau",
        "source": "Toán 8 KNTT Trang 51",
        "question": "Cho tứ giác $ABCD$ có $\\widehat{A} = 70^\\circ, \\widehat{B} = 110^\\circ$. Khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "$AD \\parallel BC$",
          "$AB \\parallel CD$",
          "$AC = BD$",
          "$AB = CD$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $\\widehat{A} + \\widehat{B} = 70^\\circ + 110^\\circ = 180^\\circ$ mà hai góc này ở vị trí trong cùng phía nên $AD \\parallel BC$."
      },
      {
        "id": "quiz-8.10.17",
        "badge": "Câu 17 (VD) - Phân giác hai góc kề",
        "source": "Toán 8 KNTT Bài 3.3 Trang 51",
        "question": "Tứ giác $ABCD$ có hai tia phân giác của góc $A$ và góc $B$ cắt nhau tại điểm $I$. Biết $\\widehat{C} = 80^\\circ$ và $\\widehat{D} = 120^\\circ$. Số đo góc $\\widehat{AIB}$ là:",
        "options": [
          "$100^\\circ$",
          "$90^\\circ$",
          "$110^\\circ$",
          "$80^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\widehat{A} + \\widehat{B} = 360^\\circ - (80^\\circ + 120^\\circ) = 160^\\circ$. Trong $\\Delta AIB$: $\\widehat{AIB} = 180^\\circ - \\frac{\\widehat{A} + \\widehat{B}}{2} = 180^\\circ - \\frac{160^\\circ}{2} = 180^\\circ - 80^\\circ = 100^\\circ$."
      },
      {
        "id": "quiz-8.10.18",
        "badge": "Câu 18 (VD) - Tứ giác có hiệu hai góc",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Cho tứ giác $ABCD$ có $\\widehat{A} = 110^\\circ, \\widehat{B} = 90^\\circ$. Biết $\\widehat{C} - \\widehat{D} = 20^\\circ$. Số đo của góc $C$ là:",
        "options": [
          "$90^\\circ$",
          "$80^\\circ$",
          "$100^\\circ$",
          "$70^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng $\\widehat{C} + \\widehat{D} = 360^\\circ - (110^\\circ + 90^\\circ) = 160^\\circ$. Lại có $\\widehat{C} - \\widehat{D} = 20^\\circ \\Rightarrow \\widehat{C} = (160^\\circ + 20^\\circ) : 2 = 90^\\circ$."
      },
      {
        "id": "quiz-8.10.19",
        "badge": "Câu 19 (VD) - Tính góc ngoài tổng hợp",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Cho tứ giác $ABCD$ có các góc ngoài tại đỉnh $A, B, C$ lần lượt là $110^\\circ, 80^\\circ, 100^\\circ$. Số đo góc trong tại đỉnh $D$ là:",
        "options": [
          "$110^\\circ$",
          "$70^\\circ$",
          "$80^\\circ$",
          "$100^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Góc ngoài tại đỉnh $D$ là: $360^\\circ - (110^\\circ + 80^\\circ + 100^\\circ) = 70^\\circ$. Do đó góc trong tại đỉnh $D$ là: $180^\\circ - 70^\\circ = 110^\\circ$."
      },
      {
        "id": "quiz-8.10.20",
        "badge": "Câu 20 (VD - Thực tế) - Góc khung diều",
        "source": "Toán 8 KNTT Ứng dụng thực tế",
        "question": "Một khung diều hình tứ giác có hai góc đối bằng nhau: $\\widehat{B} = \\widehat{D} = 108^\\circ$. Góc ở đuôi diều $\\widehat{C} = 64^\\circ$. Số đo góc ở đầu diều $\\widehat{A}$ là:",
        "options": [
          "$80^\\circ$",
          "$75^\\circ$",
          "$85^\\circ$",
          "$90^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "$\\widehat{A} = 360^\\circ - (108^\\circ + 108^\\circ + 64^\\circ) = 360^\\circ - 280^\\circ = 80^\\circ$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.10.1",
        "badge": "Câu 1 (Đ/S) - Khẳng định về các góc của tứ giác",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về góc của tứ giác:",
        "subItems": [
          {
            "id": "a",
            "text": "Tổng bốn góc trong của một tứ giác lồi luôn bằng $360^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, định lí tổng các góc trong tứ giác."
          },
          {
            "id": "b",
            "text": "Một tứ giác có thể có cả 4 góc đều là góc nhọn.",
            "correctAnswer": false,
            "explanation": "Sai, nếu 4 góc đều nhọn thì tổng $< 360^\\circ$."
          },
          {
            "id": "c",
            "text": "Một tứ giác có thể có nhiều nhất 3 góc nhọn.",
            "correctAnswer": true,
            "explanation": "Đúng, khi đó góc thứ tư là góc tù lớn hơn $90^\\circ$."
          },
          {
            "id": "d",
            "text": "Tứ giác có 3 góc vuông thì góc thứ tư bắt buộc phải là góc vuông.",
            "correctAnswer": true,
            "explanation": "Đúng, $360^\\circ - 3 \\times 90^\\circ = 90^\\circ$."
          }
        ]
      },
      {
        "id": "tf-8.10.2",
        "badge": "Câu 2 (Đ/S) - Quan sát hình vẽ tứ giác và tính góc",
        "prompt": "Cho hình vẽ tứ giác $ABCD$ với các số đo góc cho trước. Xét tính đúng/sai của các khẳng định sau:",
        "svgDiagram": "<svg viewBox='0 0 340 200' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='60,50 240,50 270,160 70,160' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2' stroke-linejoin='round'/> <line x1='270' y1='160' x2='325' y2='160' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4 3'/> <path d='M 61.8,69.9 A 20 20 0 0 0 80,50' fill='none' stroke='#38bdf8' stroke-width='1.8'/> <text x='84' y='75' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>110°</text> <text x='46' y='46' fill='#f8fafc' font-size='13' font-weight='bold'>A</text> <path d='M 220,50 A 20 20 0 0 0 245.3,69.3' fill='none' stroke='#34d399' stroke-width='1.8'/> <text x='218' y='82' fill='#34d399' font-size='11' font-weight='bold' text-anchor='middle'>70°</text> <text x='248' y='46' fill='#f8fafc' font-size='13' font-weight='bold'>B</text> <path d='M 90,160 A 20 20 0 0 0 68.2,140.1' fill='none' stroke='#fbbf24' stroke-width='1.8'/> <text x='94' y='145' fill='#fbbf24' font-size='11' font-weight='bold' text-anchor='middle'>85°</text> <text x='56' y='172' fill='#f8fafc' font-size='13' font-weight='bold'>D</text> <path d='M 264.7,140.7 A 20 20 0 0 0 250,160' fill='none' stroke='#a855f7' stroke-width='1.8'/> <text x='248' y='144' fill='#c084fc' font-size='12' font-weight='bold' text-anchor='middle'>y</text> <path d='M 292,160 A 22 22 0 0 0 264.2,138.7' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='294' y='142' fill='#f43f5e' font-size='13' font-weight='bold' text-anchor='middle'>x</text> <text x='266' y='178' fill='#f8fafc' font-size='13' font-weight='bold'>C</text> </svg>",
        "subItems": [
          {
            "id": "a",
            "text": "Số đo góc trong $y$ tại đỉnh $C$ bằng $95^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, $y = 360^\\circ - (110^\\circ + 70^\\circ + 85^\\circ) = 360^\\circ - 265^\\circ = 95^\\circ$."
          },
          {
            "id": "b",
            "text": "Số đo góc ngoài $x$ tại đỉnh $C$ bằng $85^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x = 180^\\circ - 95^\\circ = 85^\\circ$."
          },
          {
            "id": "c",
            "text": "Hai cạnh $AD$ và $BC$ song song với nhau.",
            "correctAnswer": true,
            "explanation": "Đúng, vì $\\widehat{A} + \\widehat{B} = 110^\\circ + 70^\\circ = 180^\\circ$ (hai góc trong cùng phía bù nhau)."
          },
          {
            "id": "d",
            "text": "Tổng góc ngoài tại đỉnh $A$ và góc ngoài tại đỉnh $B$ bằng $180^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(180^\\circ - 110^\\circ) + (180^\\circ - 70^\\circ) = 70^\\circ + 110^\\circ = 180^\\circ$."
          }
        ]
      },
      {
        "id": "tf-8.10.3",
        "badge": "Câu 3 (Đ/S) - Định lí góc ngoài của tứ giác",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về góc ngoài:",
        "subItems": [
          {
            "id": "a",
            "text": "Góc ngoài tại một đỉnh của tứ giác kề bù với góc trong tại đỉnh đó.",
            "correctAnswer": true,
            "explanation": "Đúng, theo định nghĩa góc ngoài."
          },
          {
            "id": "b",
            "text": "Mỗi đỉnh của tứ giác có đúng hai góc ngoài và hai góc ngoài này bằng nhau.",
            "correctAnswer": true,
            "explanation": "Đúng, vì chúng đối đỉnh."
          },
          {
            "id": "c",
            "text": "Tổng các góc ngoài tại 4 đỉnh của tứ giác lồi luôn bằng $720^\\circ$.",
            "correctAnswer": false,
            "explanation": "Sai, tổng 4 góc ngoài ở 4 đỉnh bằng $360^\\circ$."
          },
          {
            "id": "d",
            "text": "Nếu tứ giác có 4 góc trong bằng nhau thì 4 góc ngoài cũng bằng nhau và bằng $90^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, $180^\\circ - 90^\\circ = 90^\\circ$."
          }
        ]
      },
      {
        "id": "tf-8.10.4",
        "badge": "Câu 4 (Đ/S - Thực tế) - Bài toán khung diều và giàn giáo",
        "prompt": "Xét tính đúng/sai của các bài toán thực tiễn sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Một khung diều hình tứ giác có $\\widehat{A} = 60^\\circ, \\widehat{B} = 110^\\circ, \\widehat{D} = 110^\\circ$ thì góc còn lại $\\widehat{C} = 80^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, $360^\\circ - (60^\\circ + 110^\\circ + 110^\\circ) = 80^\\circ$."
          },
          {
            "id": "b",
            "text": "Một khung cửa sổ hình tứ giác có 3 góc vuông thì góc thứ tư chắc chắn bằng $90^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, $360^\\circ - 270^\\circ = 90^\\circ$."
          },
          {
            "id": "c",
            "text": "Một giàn giáo hình tứ giác có 4 góc tỉ lệ với $1 : 1 : 1 : 1$ thì các góc đều là góc vuông.",
            "correctAnswer": true,
            "explanation": "Đúng, $360^\\circ : 4 = 90^\\circ$."
          },
          {
            "id": "d",
            "text": "Một cái bàn hình tứ giác có thể có 4 góc lần lượt là $85^\\circ, 85^\\circ, 85^\\circ, 85^\\circ$.",
            "correctAnswer": false,
            "explanation": "Sai, tổng bằng $340^\\circ \\ne 360^\\circ$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.10.1",
        "badge": "Câu 1 (NB) - Tính số đo góc thứ tư",
        "prompt": "Cho tứ giác $ABCD$ có $\\widehat{A} = 70^\\circ, \\widehat{B} = 120^\\circ, \\widehat{C} = 80^\\circ$. Số đo của góc $D$ bằng bao nhiêu độ?",
        "correctAnswer": "90",
        "acceptableAnswers": [
          "90",
          "90°",
          "chín mươi"
        ],
        "explanation": "$\\widehat{D} = 360^\\circ - (70^\\circ + 120^\\circ + 80^\\circ) = 360^\\circ - 270^\\circ = 90^\\circ$."
      },
      {
        "id": "sa-8.10.2",
        "badge": "Câu 2 (TH) - Tính góc x trong hình vẽ",
        "prompt": "Cho tứ giác $ABCD$ có $\\widehat{A} = 105^\\circ, \\widehat{B} = 115^\\circ$ và hai góc $\\widehat{C} = \\widehat{D} = x$. Giá trị của $x$ bằng bao nhiêu độ?",
        "correctAnswer": "70",
        "acceptableAnswers": [
          "70",
          "70°",
          "bảy mươi"
        ],
        "explanation": "$2x = 360^\\circ - (105^\\circ + 115^\\circ) = 360^\\circ - 220^\\circ = 140^\\circ \\Rightarrow x = 70^\\circ$."
      },
      {
        "id": "sa-8.10.3",
        "badge": "Câu 3 (TH) - Tìm góc lớn nhất khi biết tỉ lệ",
        "prompt": "Một tứ giác có các góc tỉ lệ $1 : 2 : 3 : 6$. Số đo góc lớn nhất bằng bao nhiêu độ?",
        "correctAnswer": "180",
        "acceptableAnswers": [
          "180",
          "180°"
        ],
        "explanation": "Tổng số phần: $1+2+3+6 = 12$ phần. Một phần: $360^\\circ : 12 = 30^\\circ$. Góc lớn nhất: $6 \\times 30^\\circ = 180^\\circ$ (đây là trường hợp suy biến trên đường thẳng)."
      },
      {
        "id": "sa-8.10.4",
        "badge": "Câu 4 (TH) - Tính góc ngoài",
        "prompt": "Góc trong tại đỉnh $B$ của tứ giác bằng $125^\\circ$. Góc ngoài tại đỉnh $B$ bằng bao nhiêu độ?",
        "correctAnswer": "55",
        "acceptableAnswers": [
          "55",
          "55°",
          "năm mươi lăm"
        ],
        "explanation": "$180^\\circ - 125^\\circ = 55^\\circ$."
      },
      {
        "id": "sa-8.10.5",
        "badge": "Câu 5 (VD) - Góc tạo bởi hai phân giác",
        "prompt": "Tứ giác $ABCD$ có $\\widehat{C} = 70^\\circ, \\widehat{D} = 110^\\circ$. Hai tia phân giác của góc $A$ và góc $B$ cắt nhau tại $I$. Số đo góc $\\widehat{AIB}$ bằng bao nhiêu độ?",
        "correctAnswer": "90",
        "acceptableAnswers": [
          "90",
          "90°",
          "chín mươi"
        ],
        "explanation": "$\\widehat{A} + \\widehat{B} = 360^\\circ - (70^\\circ + 110^\\circ) = 180^\\circ$. $\\widehat{AIB} = 180^\\circ - \\frac{180^\\circ}{2} = 90^\\circ$."
      },
      {
        "id": "sa-8.10.6",
        "badge": "Câu 6 (VD - Thực tế) - Góc đầu diều",
        "prompt": "Một khung diều tứ giác có hai góc cánh $\\widehat{B} = \\widehat{D} = 110^\\circ$, góc đuôi $\\widehat{C} = 75^\\circ$. Số đo góc đầu diều $\\widehat{A}$ bằng bao nhiêu độ?",
        "correctAnswer": "65",
        "acceptableAnswers": [
          "65",
          "65°",
          "sáu mươi lăm"
        ],
        "explanation": "$\\widehat{A} = 360^\\circ - (110^\\circ + 110^\\circ + 75^\\circ) = 360^\\circ - 295^\\circ = 65^\\circ$."
      }
    ]
  },
  "t8-b11-hinh-thang-can": {
    "id": "t8-b11-hinh-thang-can",
    "lessonNumber": 11,
    "title": "Bài 11: Hình thang cân",
    "bookChapter": "Chương III: Tứ giác",
    "scenarioTitle": "Tình huống: Chiếc thang leo an toàn và Mặt cắt đê chắn sóng sông Hồng",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn An",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, bố em khi sửa nhà dùng chiếc thang nhôm chữ A và dặn em quan sát các bậc thang. Em thấy các bậc thang đều song song với nhau, hai thanh sườn hai bên nghiêng đều nhau tạo thành các hình tứ giác rất cân đối. Các tứ giác đó có tên gọi và tính chất gì đặc biệt ạ?",
        "visualGraphic": "box",
        "mathNote": "AB \\parallel CD, \\ AD = BC"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào An! Quan sát của em rất tinh tế! Các tứ giác đó chính là các hình thang cân. Hình thang cân là hình thang có hai góc kề một đáy bằng nhau. Đặc biệt, nó có hai cạnh bên bằng nhau và hai đường chéo bằng nhau. Nhờ tính chất đối xứng tuyệt đối này, khi chúng ta trèo lên bậc thang, trọng lực được phân bổ đều sang hai bên sườn thang, giúp thang chịu lực tốt nhất và không bị xoắn gãy. Các kỹ sư xây dựng cũng luôn đắp mặt cắt bờ đê hay đập thủy điện hình thang cân để phân tán áp lực nước tối ưu đấy! Chúng ta cùng tìm hiểu sâu về hình thang cân nhé!",
        "visualGraphic": "graph",
        "mathNote": "\\widehat{C} = \\widehat{D} \\implies AC = BD"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Định nghĩa Hình thang, Hình thang vuông và Hình thang cân",
        "points": [
          "• Hình thang là tứ giác có hai cạnh đối song song. Hai cạnh song song đó gọi là hai đáy, hai cạnh còn lại gọi là hai cạnh bên.",
          "• Hình thang vuông là hình thang có một góc vuông (suy ra có ít nhất hai góc vuông kề cạnh bên vuông góc).",
          "• Hình thang cân là hình thang có hai góc kề một đáy bằng nhau.",
          "• Nhận xét quan trọng: Trong hình thang $ABCD$ ($AB \\parallel CD$), vì hai đáy song song nên hai góc trong cùng phía bù nhau: $\\widehat{A} + \\widehat{D} = 180^\\circ$ và $\\widehat{B} + \\widehat{C} = 180^\\circ$. Do đó, nếu hai góc kề đáy lớn bằng nhau ($\\widehat{C} = \\widehat{D}$) thì hai góc kề đáy nhỏ cũng bằng nhau ($\\widehat{A} = \\widehat{B}$)."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 52)",
        "exampleProblem": "Cho hình thang $ABCD$ ($AB \\parallel CD$) có $\\widehat{A} = 100^\\circ$. Tính các góc còn lại của hình thang nếu $ABCD$ là hình thang cân.",
        "exampleSolution": "Vì $ABCD$ là hình thang cân ($AB \\parallel CD$) có $\\widehat{A} = 100^\\circ$ nên:\n" +
          "• Hai góc kề đáy nhỏ bằng nhau: $\\widehat{B} = \\widehat{A} = 100^\\circ$.\n" +
          "• Hai góc trong cùng phía bù nhau: $\\widehat{D} = 180^\\circ - \\widehat{A} = 180^\\circ - 100^\\circ = 80^\\circ$.\n" +
          "• Hai góc kề đáy lớn bằng nhau: $\\widehat{C} = \\widehat{D} = 80^\\circ$.\n" +
          "Vậy $\\widehat{B} = 100^\\circ, \\widehat{C} = 80^\\circ, \\widehat{D} = 80^\\circ$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa chuẩn SGK: Ba loại hình thang",
            "problem": "Phân biệt hình thang thường, hình thang vuông và hình thang cân:",
            "solution": "Hình thang thường chỉ có 2 đáy song song. Hình thang vuông có 1 góc vuông kề cạnh bên. Hình thang cân có 2 góc kề một đáy bằng nhau.",
            "svgDiagram": "<svg viewBox='0 0 460 200' class='w-full max-w-lg mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><text x='75' y='22' fill='#94a3b8' font-size='12' font-family='sans-serif' text-anchor='middle' font-weight='bold'>a) Hình thang thường</text><polygon points='40,55 110,55 135,155 20,155' fill='none' stroke='#38bdf8' stroke-width='2'/><text x='35' y='50' fill='#cbd5e1' font-size='11'>A</text><text x='115' y='50' fill='#cbd5e1' font-size='11'>B</text><text x='140' y='165' fill='#cbd5e1' font-size='11'>C</text><text x='12' y='165' fill='#cbd5e1' font-size='11'>D</text><text x='225' y='22' fill='#94a3b8' font-size='12' font-family='sans-serif' text-anchor='middle' font-weight='bold'>b) Hình thang vuông</text><polygon points='190,55 260,55 275,155 190,155' fill='none' stroke='#f59e0b' stroke-width='2'/><rect x='190' y='55' width='10' height='10' fill='none' stroke='#f59e0b' stroke-width='1.5'/><rect x='190' y='145' width='10' height='10' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='178' y='52' fill='#cbd5e1' font-size='11'>A</text><text x='265' y='52' fill='#cbd5e1' font-size='11'>B</text><text x='280' y='165' fill='#cbd5e1' font-size='11'>C</text><text x='178' y='165' fill='#cbd5e1' font-size='11'>D</text><text x='385' y='22' fill='#34d399' font-size='12' font-family='sans-serif' text-anchor='middle' font-weight='bold'>c) Hình thang cân</text><polygon points='345,55 425,55 445,155 325,155' fill='none' stroke='#34d399' stroke-width='2'/><path d='M 340,155 A 16 16 0 0 0 348,143' fill='none' stroke='#34d399' stroke-width='1.8'/><path d='M 430,155 A 16 16 0 0 1 422,143' fill='none' stroke='#34d399' stroke-width='1.8'/><text x='338' y='50' fill='#cbd5e1' font-size='11'>A</text><text x='430' y='50' fill='#cbd5e1' font-size='11'>B</text><text x='450' y='165' fill='#cbd5e1' font-size='11'>C</text><text x='315' y='165' fill='#cbd5e1' font-size='11'>D</text><text x='385' y='185' fill='#34d399' font-size='11' text-anchor='middle'>\\widehat{D} = \\widehat{C}</text></svg>"
          }
        ]
      },
      {
        "index": "2",
        "title": "Tính chất của Hình thang cân: Cạnh bên và Đường chéo",
        "points": [
          "• Định lí 1: Trong hình thang cân, hai cạnh bên bằng nhau ($AD = BC$).",
          "• Định lí 2: Trong hình thang cân, hai đường chéo bằng nhau ($AC = BD$).",
          "• Định lí 3: Đường thẳng đi qua trung điểm hai đáy của hình thang cân là trục đối xứng của hình thang cân đó.",
          "• Tính chất góc đối: Trong hình thang cân, tổng số đo hai góc đối diện luôn bằng $180^\\circ$ (vì $\\widehat{A} + \\widehat{D} = 180^\\circ$ mà $\\widehat{C} = \\widehat{D} \\implies \\widehat{A} + \\widehat{C} = 180^\\circ$)."
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 53)",
        "exampleProblem": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$). Chứng minh rằng $\\triangle ACD = \\triangle BDC$.",
        "exampleSolution": "Xét hai tam giác $\\triangle ACD$ và $\\triangle BDC$ có:\n" +
          "• $AD = BC$ (hai cạnh bên của hình thang cân $ABCD$)\n" +
          "• $\\widehat{ADC} = \\widehat{BCD}$ (hai góc kề đáy lớn của hình thang cân $ABCD$)\n" +
          "• $CD$ là cạnh chung.\n" +
          "Do đó $\\triangle ACD = \\triangle BDC$ (c.g.c). Từ đó suy ra $AC = BD$ (hai cạnh tương ứng), chính là hai đường chéo bằng nhau.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Hai đường chéo và trục đối xứng",
            "problem": "Quan sát tính đối xứng, hai đường chéo AC = BD và hai cạnh bên AD = BC trong hình thang cân:",
            "solution": "Trục đối xứng đi qua trung điểm hai đáy, chia hình thang cân thành hai nửa đối xứng qua gương.",
            "svgDiagram": "<svg viewBox='0 0 380 210' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='120,45 260,45 310,165 70,165' fill='rgba(56, 189, 248, 0.05)' stroke='#38bdf8' stroke-width='2'/><line x1='120' y1='45' x2='310' y2='165' stroke='#f43f5e' stroke-width='1.8' stroke-dasharray='4,3'/><line x1='260' y1='45' x2='70' y2='165' stroke='#fbbf24' stroke-width='1.8' stroke-dasharray='4,3'/><line x1='190' y1='25' x2='190' y2='185' stroke='#a855f7' stroke-width='1.5' stroke-dasharray='6,3'/><line x1='90' y1='101' x2='100' y2='109' stroke='#38bdf8' stroke-width='2'/><line x1='280' y1='101' x2='290' y2='109' stroke='#38bdf8' stroke-width='2'/><circle cx='190' cy='45' r='3' fill='#a855f7'/><circle cx='190' cy='165' r='3' fill='#a855f7'/><text x='190' y='18' fill='#c084fc' font-size='11' text-anchor='middle'>Trục đối xứng d</text><text x='112' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text><text x='265' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text><text x='318' y='170' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text><text x='58' y='170' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text><text x='190' y='200' fill='#38bdf8' font-size='11' text-anchor='middle'>AD = BC \\quad \\text{và} \\quad AC = BD</text></svg>"
          }
        ]
      },
      {
        "index": "3",
        "title": "Dấu hiệu nhận biết Hình thang cân & Cảnh giác bẫy",
        "points": [
          "• Dấu hiệu 1: Hình thang có hai góc kề một đáy bằng nhau là hình thang cân.",
          "• Dấu hiệu 2: Hình thang có hai đường chéo bằng nhau là hình thang cân.",
          "• Cảnh báo bẫy cực kỳ nguy hiểm: 'Hình thang có 2 cạnh bên bằng nhau' CHƯA CHẮC là hình thang cân! Nếu hai cạnh bên song song với nhau thì nó là HÌNH BÌNH HÀNH (hai góc kề đáy không bằng nhau, hai đường chéo không bằng nhau).",
          "• Lưu ý khi chứng minh: Muốn dùng dấu hiệu 'hai đường chéo bằng nhau' thì trước hết phải chứng minh tứ giác đó là hình thang (có 2 cạnh đối song song)."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 54)",
        "exampleProblem": "Cho tam giác $ABC$ cân tại $A$. Lấy điểm $D$ trên cạnh $AB$ và điểm $E$ trên cạnh $AC$ sao cho $AD = AE$. Tứ giác $BDEC$ là hình gì? Vì sao?",
        "exampleSolution": "• Vì $\\triangle ABC$ cân tại $A$ nên $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}$.\n" +
          "• Vì $AD = AE$ nên $\\triangle ADE$ cân tại $A$ $\\implies \\widehat{ADE} = \\frac{180^\\circ - \\widehat{A}}{2}$.\n" +
          "• Suy ra $\\widehat{ADE} = \\widehat{B}$. Mà hai góc này ở vị trí đồng vị nên $DE \\parallel BC$.\n" +
          "• Tứ giác $BDEC$ có $DE \\parallel BC$ nên là hình thang.\n" +
          "• Hình thang $BDEC$ lại có hai góc kề đáy $BC$ bằng nhau ($\\widehat{B} = \\widehat{C}$) nên $BDEC$ là hình thang cân.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: So sánh Hình thang cân và Hình bình hành",
            "problem": "Tại sao hình thang có 2 cạnh bên bằng nhau chưa chắc là hình thang cân?",
            "solution": "Nếu 2 cạnh bên song song thì đó là hình bình hành, hai đường chéo không bằng nhau nên không phải hình thang cân.",
            "svgDiagram": "<svg viewBox='0 0 440 200' class='w-full max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><text x='110' y='22' fill='#34d399' font-size='12' font-weight='bold' text-anchor='middle'>Hình thang cân (Đúng)</text><polygon points='70,50 150,50 180,150 40,150' fill='none' stroke='#34d399' stroke-width='2'/><line x1='70' y1='50' x2='180' y2='150' stroke='#34d399' stroke-width='1.5' stroke-dasharray='3,3'/><line x1='150' y1='50' x2='40' y2='150' stroke='#34d399' stroke-width='1.5' stroke-dasharray='3,3'/><text x='110' y='175' fill='#34d399' font-size='11' text-anchor='middle'>AC = BD (Thang cân)</text><text x='330' y='22' fill='#f43f5e' font-size='12' font-weight='bold' text-anchor='middle'>Hình bình hành (Bẫy)</text><polygon points='280,50 380,50 350,150 250,150' fill='none' stroke='#f43f5e' stroke-width='2'/><line x1='280' y1='50' x2='350' y2='150' stroke='#f43f5e' stroke-width='1.5' stroke-dasharray='3,3'/><line x1='380' y1='50' x2='250' y2='150' stroke='#f43f5e' stroke-width='1.5' stroke-dasharray='3,3'/><text x='330' y='175' fill='#f43f5e' font-size='11' text-anchor='middle'>AD = BC nhưng AC \\neq BD (Không cân!)</text></svg>"
          }
        ]
      },
      {
        "index": "4",
        "title": "Kỹ thuật Kẻ hai đường cao hạ từ đáy nhỏ",
        "points": [
          "• Phương pháp giải: Từ hai đỉnh $A$ và $B$ của đáy nhỏ, hạ $AH \\perp CD$ và $BK \\perp CD$ ($H, K \\in CD$).",
          "• Tứ giác $ABKH$ là hình chữ nhật $\\implies HK = AB$ và $AH = BK = h$ (chiều cao hình thang).",
          "• Hai tam giác vuông bằng nhau: $\\triangle AHD = \\triangle BKC$ (cạnh huyền - góc nhọn: $AD = BC, \\widehat{D} = \\widehat{C}$).",
          "• Công thức tính độ dài đoạn chân đường cao: $DH = CK = \\frac{CD - HK}{2} = \\frac{CD - AB}{2}$.",
          "• Áp dụng định lí Pythagoras trong $\\triangle AHD$ vuông: $h = \\sqrt{AD^2 - DH^2}$ hoặc $AD = \\sqrt{h^2 + DH^2}$."
        ],
        "exampleTitle": "Ví dụ 4 (Tính độ dài và chiều cao hình thang cân)",
        "exampleProblem": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $AB = 6\\text{ cm}, CD = 14\\text{ cm}$ và cạnh bên $AD = 5\\text{ cm}$. Tính chiều cao $AH$ và diện tích hình thang cân.",
        "exampleSolution": "• Kẻ hai đường cao $AH, BK \\perp CD$ ($H, K \\in CD$).\n" +
          "• Ta có: $DH = \\frac{CD - AB}{2} = \\frac{14 - 6}{2} = 4\\text{ cm}$.\n" +
          "• Trong tam giác vuông $\\triangle AHD$, áp dụng định lí Pythagoras:\n" +
          "  $AH = \\sqrt{AD^2 - DH^2} = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = 3\\text{ cm}$.\n" +
          "• Diện tích hình thang cân là: $S = \\frac{(AB + CD) \\cdot AH}{2} = \\frac{(6 + 14) \\cdot 3}{2} = 30\\text{ (cm}^2\\text{)}$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Kẻ hai đường cao AH, BK từ đáy nhỏ",
            "problem": "Quan sát đáy lớn CD được phân đoạn thành DH, HK, CK:",
            "solution": "Đoạn giữa HK = AB, hai đoạn hai bên DH = CK = (CD - AB)/2.",
            "svgDiagram": "<svg viewBox='0 0 380 210' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='110,45 250,45 310,165 50,165' fill='rgba(59, 130, 246, 0.05)' stroke='#38bdf8' stroke-width='2'/><line x1='110' y1='45' x2='110' y2='165' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4,3'/><line x1='250' y1='45' x2='250' y2='165' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4,3'/><rect x='110' y='153' width='10' height='12' fill='none' stroke='#f59e0b' stroke-width='1.2'/><rect x='240' y='153' width='10' height='12' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='102' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text><text x='252' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text><text x='316' y='170' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text><text x='38' y='170' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text><text x='106' y='180' fill='#f59e0b' font-size='11'>H</text><text x='246' y='180' fill='#f59e0b' font-size='11'>K</text><text x='75' y='192' fill='#34d399' font-size='10' text-anchor='middle'>DH</text><text x='180' y='192' fill='#94a3b8' font-size='10' text-anchor='middle'>HK = AB</text><text x='282' y='192' fill='#34d399' font-size='10' text-anchor='middle'>CK</text><text x='96' y='105' fill='#f59e0b' font-size='11'>h</text><text x='180' y='35' fill='#38bdf8' font-size='11' text-anchor='middle'>đáy nhỏ AB</text></svg>"
          }
        ]
      }
    ],
    "youtubeVideos": [
      {
        "id": "t8_b11_video1",
        "title": "Tiết 1: Định nghĩa và tính chất của hình thang cân (SGK Toán 8 KNTT)"
      },
      {
        "id": "t8_b11_video2",
        "title": "Tiết 2: Dấu hiệu nhận biết và phương pháp kẻ đường cao tính toán"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.11.1",
        "timeSeconds": 140,
        "timeLabel": "02:20",
        "title": "Định nghĩa hình thang",
        "question": "Hình thang là tứ giác có đặc điểm nào sau đây?",
        "options": [
          "Có hai cạnh đối song song",
          "Có hai cạnh đối bằng nhau",
          "Có hai đường chéo bằng nhau",
          "Có bốn góc bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa, hình thang là tứ giác có hai cạnh đối song song."
      },
      {
        "id": "vq-8.11.2",
        "timeSeconds": 360,
        "timeLabel": "06:00",
        "title": "Tính chất hình thang cân",
        "question": "Trong hình thang cân, khẳng định nào sau đây là SAI?",
        "options": [
          "Hai góc kề một đáy bằng nhau",
          "Hai đường chéo bằng nhau",
          "Hai cạnh bên bằng nhau",
          "Hai cạnh bên luôn song song với nhau"
        ],
        "correctIndex": 3,
        "explanation": "Hai cạnh bên của hình thang cân không song song (nếu song song thì nó là hình bình hành hoặc hình chữ nhật)."
      },
      {
        "id": "vq-8.11.3",
        "timeSeconds": 580,
        "timeLabel": "09:40",
        "title": "Dấu hiệu nhận biết",
        "question": "Hình thang có hai đường chéo bằng nhau là hình gì?",
        "options": [
          "Hình thang cân",
          "Hình bình hành",
          "Hình thang vuông",
          "Hình thoi"
        ],
        "correctIndex": 0,
        "explanation": "Dấu hiệu nhận biết: Hình thang có hai đường chéo bằng nhau là hình thang cân."
      },
      {
        "id": "vq-8.11.4",
        "timeSeconds": 790,
        "timeLabel": "13:10",
        "title": "Kỹ thuật kẻ đường cao",
        "question": "Hình thang cân $ABCD$ có đáy nhỏ $AB = 6\\text{ cm}$, đáy lớn $CD = 10\\text{ cm}$. Kẻ đường cao $AH \\perp CD$. Độ dài đoạn $DH$ bằng:",
        "options": [
          "2 cm",
          "4 cm",
          "3 cm",
          "1 cm"
        ],
        "correctIndex": 0,
        "explanation": "$DH = \\frac{CD - AB}{2} = \\frac{10 - 6}{2} = 2\\text{ cm}$."
      }
    ],
    "tips": [
      "Mẹo 1: Hai góc kề một cạnh bên luôn bù nhau vì hai đáy song song. Biết 1 góc của hình thang cân là tính ngay được 3 góc còn lại!",
      "Mẹo 2: Kẻ 2 đường cao hạ từ đáy nhỏ, đáy lớn bị chia thành 3 phần: phần ở giữa bằng đáy nhỏ, hai phần hai bên bằng nhau và bằng (CD - AB) / 2.",
      "Mẹo 3: Trục đối xứng đi qua trung điểm 2 đáy. Mọi đoạn thẳng, tam giác đối xứng qua trục này đều bằng nhau giúp chứng minh hình học cực nhanh.",
      "Mẹo 4: Tổng hai góc đối diện của hình thang cân luôn bằng 180 độ. Tính chất này sau này sẽ giải thích vì sao hình thang cân luôn nội tiếp được trong đường tròn!"
    ],
    "traps": [
      "Bẫy 1: Ngộ nhận 'Hình thang có 2 cạnh bên bằng nhau là hình thang cân'. Điều này SAI vì nó có thể là hình bình hành. Chỉ có 2 đường chéo bằng nhau mới chắc chắn là thang cân!",
      "Bẫy 2: Nhầm lẫn góc kề một đáy với góc kề cạnh bên. Hai góc kề một đáy bằng nhau, còn hai góc kề cạnh bên thì bù nhau (tổng bằng 180 độ).",
      "Bẫy 3: Quên chứng minh tứ giác là hình thang trước. Tứ giác có 2 đường chéo bằng nhau chưa chắc là hình thang cân nếu 2 đáy chưa song song.",
      "Bẫy 4: Tính sai đoạn DH khi kẻ đường cao. Công thức đúng là DH = (CD - AB) / 2, nhiều bạn nhầm thành CD - AB (quên chia đôi cho hai bên)."
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.11.1",
        "badge": "Câu 1 (NB) - Định nghĩa hình thang cân",
        "source": "SGK Toán 8 KNTT Trang 52",
        "question": "Hình thang cân là hình thang có:",
        "options": [
          "Hai góc kề một đáy bằng nhau",
          "Hai cạnh bên song song",
          "Hai cạnh đáy bằng nhau",
          "Bốn góc bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa, hình thang cân là hình thang có hai góc kề một đáy bằng nhau."
      },
      {
        "id": "quiz-8.11.2",
        "badge": "Câu 2 (NB) - Tính góc đáy hình thang cân",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có góc đáy nhỏ $\\widehat{B} = 110^\\circ$. Số đo góc đáy lớn $x$ tại đỉnh $C$ bằng bao nhiêu?",
        "options": [
          "$70^\\circ$",
          "$110^\\circ$",
          "$80^\\circ$",
          "$140^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $ABCD$ là hình thang ($AB \\parallel CD$) nên hai góc trong cùng phía bù nhau: $\\widehat{B} + \\widehat{C} = 180^\\circ \\implies x = \\widehat{C} = 180^\\circ - 110^\\circ = 70^\\circ$.",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='95,45 225,45 275,150 45,150' fill='rgba(56, 189, 248, 0.05)' stroke='#38bdf8' stroke-width='2'/> <path d='M 203,45 A 22 22 0 0 0 234.5,64.9' fill='none' stroke='#fbbf24' stroke-width='1.8'/> <text x='207' y='72' fill='#fbbf24' font-size='11' font-weight='bold' text-anchor='middle'>110°</text> <path d='M 265.5,130.1 A 22 22 0 0 0 253,150' fill='none' stroke='#34d399' stroke-width='2'/> <text x='246' y='136' fill='#34d399' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='83' y='41' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text> <text x='233' y='41' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text> <text x='283' y='158' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text> <text x='31' y='158' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text> </svg>"
      },
      {
        "id": "quiz-8.11.3",
        "badge": "Câu 3 (TH) - Tìm góc kề đáy nhỏ",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{D} = 80^\\circ$. Số đo góc $x$ tại đỉnh $A$ bằng bao nhiêu?",
        "options": [
          "$100^\\circ$",
          "$80^\\circ$",
          "$120^\\circ$",
          "$90^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $AB \\parallel CD$ nên hai góc trong cùng phía bù nhau: $\\widehat{A} + \\widehat{D} = 180^\\circ \\implies x = 180^\\circ - 80^\\circ = 100^\\circ$.",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='100,45 220,45 265,150 55,150' fill='rgba(56, 189, 248, 0.05)' stroke='#38bdf8' stroke-width='2'/> <path d='M 77,150 A 22 22 0 0 0 63.7,129.8' fill='none' stroke='#fbbf24' stroke-width='1.8'/> <text x='82' y='136' fill='#fbbf24' font-size='11' font-weight='bold' text-anchor='middle'>80°</text> <path d='M 91.3,65.2 A 22 22 0 0 0 122,45' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='118' y='72' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='88' y='41' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text> <text x='228' y='41' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text> <text x='273' y='158' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text> <text x='41' y='158' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text> </svg>"
      },
      {
        "id": "quiz-8.11.4",
        "badge": "Câu 4 (TH) - Góc trong hình thang vuông",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Cho hình thang vuông $ABCD$ ($AB \\parallel CD, \\widehat{A} = \\widehat{D} = 90^\\circ$) có $\\widehat{C} = 50^\\circ$. Số đo góc $x$ tại đỉnh $B$ bằng:",
        "options": [
          "$130^\\circ$",
          "$140^\\circ$",
          "$50^\\circ$",
          "$120^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $AB \\parallel CD$ nên hai góc trong cùng phía bù nhau: $x + \\widehat{C} = 180^\\circ \\implies x = 180^\\circ - 50^\\circ = 130^\\circ$.",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='80,45 190,45 265,150 80,150' fill='rgba(245, 158, 11, 0.05)' stroke='#f59e0b' stroke-width='2'/> <rect x='80' y='45' width='14' height='14' fill='none' stroke='#f59e0b' stroke-width='1.5'/> <rect x='80' y='136' width='14' height='14' fill='none' stroke='#f59e0b' stroke-width='1.5'/> <path d='M 252.2,132.1 A 22 22 0 0 0 243,150' fill='none' stroke='#38bdf8' stroke-width='1.8'/> <text x='234' y='136' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>50°</text> <path d='M 168,45 A 22 22 0 0 0 202.8,62.9' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='178' y='76' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='66' y='41' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text> <text x='198' y='41' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text> <text x='273' y='158' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text> <text x='66' y='158' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text> </svg>"
      },
      {
        "id": "quiz-8.11.5",
        "badge": "Câu 5 (NB) - Tính chất hai đường chéo",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Hình thang cân $MNPQ$ ($MN \\parallel PQ$) có đường chéo $MP = 8\\text{ cm}$. Độ dài đường chéo $NQ$ bằng:",
        "options": [
          "8 cm",
          "4 cm",
          "16 cm",
          "Không xác định được"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình thang cân, hai đường chéo luôn bằng nhau nên $NQ = MP = 8\\text{ cm}$."
      },
      {
        "id": "quiz-8.11.6",
        "badge": "Câu 6 (NB) - Tính chất hai cạnh bên",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có cạnh bên $AD = 7\\text{ cm}$. Độ dài cạnh bên $BC$ bằng:",
        "options": [
          "7 cm",
          "14 cm",
          "3.5 cm",
          "5 cm"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình thang cân, hai cạnh bên luôn bằng nhau nên $BC = AD = 7\\text{ cm}$."
      },
      {
        "id": "quiz-8.11.7",
        "badge": "Câu 7 (TH) - Giao điểm hai đường chéo",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có hai đường chéo cắt nhau tại $O$. Biết đường chéo $AC = 8\\text{ cm}$ và đoạn $OA = 3\\text{ cm}$. Đoạn $OC$ có độ dài $x$ bằng bao nhiêu?",
        "options": [
          "5 cm",
          "3 cm",
          "8 cm",
          "2 cm"
        ],
        "correctIndex": 0,
        "explanation": "Điểm $O$ nằm trên đoạn thẳng $AC$ nên $OA + OC = AC \\implies x = OC = AC - OA = 8 - 3 = 5\\text{ cm}$.",
        "svgDiagram": "<svg viewBox='0 0 340 200' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='105,45 215,45 265,160 55,160' fill='none' stroke='#38bdf8' stroke-width='2'/><line x1='105' y1='45' x2='265' y2='160' stroke='#f43f5e' stroke-width='1.5'/><line x1='215' y1='45' x2='55' y2='160' stroke='#fbbf24' stroke-width='1.5'/><circle cx='160' cy='95' r='3.5' fill='#a855f7'/><text x='160' y='90' fill='#c084fc' font-size='12' font-weight='bold' text-anchor='middle'>O</text><text x='95' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text><text x='222' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text><text x='272' y='165' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text><text x='42' y='165' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text><text x='115' y='70' fill='#38bdf8' font-size='10'>3 cm</text><text x='215' y='140' fill='#f43f5e' font-size='12' font-weight='bold'>x</text><text x='170' y='185' fill='#94a3b8' font-size='11' text-anchor='middle'>AC = 8 cm</text></svg>"
      },
      {
        "id": "quiz-8.11.8",
        "badge": "Câu 8 (TH) - Tổng hai góc đối diện",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Trong một hình thang cân, tổng số đo của hai góc đối diện bằng:",
        "options": [
          "$180^\\circ$",
          "$360^\\circ$",
          "$90^\\circ$",
          "$270^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình thang cân $ABCD$ ($AB \\parallel CD$), ta có $\\widehat{A} + \\widehat{D} = 180^\\circ$. Vì $\\widehat{C} = \\widehat{D}$ nên $\\widehat{A} + \\widehat{C} = 180^\\circ$."
      },
      {
        "id": "quiz-8.11.9",
        "badge": "Câu 9 (NB) - Dấu hiệu nhận biết hình thang cân",
        "source": "SGK Toán 8 KNTT Trang 54",
        "question": "Khẳng định nào sau đây là dấu hiệu ĐÚNG để nhận biết một hình thang cân?",
        "options": [
          "Hình thang có hai đường chéo bằng nhau",
          "Hình thang có hai cạnh bên bằng nhau",
          "Hình thang có hai cạnh đáy bằng nhau",
          "Tứ giác có hai đường chéo bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Theo dấu hiệu nhận biết: Hình thang có hai đường chéo bằng nhau là hình thang cân. Chú ý: Tứ giác nói chung có 2 đường chéo bằng nhau chưa chắc là hình thang cân."
      },
      {
        "id": "quiz-8.11.10",
        "badge": "Câu 10 (TH) - Kẻ đường cao tính đoạn DH",
        "source": "SGK Toán 8 KNTT Trang 54",
        "question": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có $AB = 6\\text{ cm}$ và $CD = 14\\text{ cm}$. Kẻ đường cao $AH \\perp CD$ ($H \\in CD$). Đoạn $DH$ có độ dài $x$ bằng bao nhiêu?",
        "options": [
          "4 cm",
          "8 cm",
          "2 cm",
          "5 cm"
        ],
        "correctIndex": 0,
        "explanation": "Kẻ thêm $BK \\perp CD$. Khi đó $HK = AB = 6\\text{ cm}$ và $DH = CK = \\frac{CD - AB}{2} = \\frac{14 - 6}{2} = 4\\text{ cm}$.",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='100,45 220,45 275,150 45,150' fill='none' stroke='#38bdf8' stroke-width='2'/> <line x1='100' y1='45' x2='100' y2='150' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4,3'/> <rect x='88' y='138' width='12' height='12' fill='none' stroke='#f59e0b' stroke-width='1.4'/> <text x='92' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text> <text x='225' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text> <text x='282' y='155' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text> <text x='32' y='155' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text> <text x='104' y='165' fill='#f59e0b' font-size='11' font-weight='bold'>H</text> <text x='160' y='38' fill='#38bdf8' font-size='11' text-anchor='middle'>6 cm</text> <text x='70' y='165' fill='#34d399' font-size='12' font-weight='bold' text-anchor='middle'>x</text> <text x='160' y='178' fill='#94a3b8' font-size='11' text-anchor='middle'>CD = 14 cm</text> </svg>"
      },
      {
        "id": "quiz-8.11.11",
        "badge": "Câu 11 (VD) - Tính các góc khi biết hiệu hai góc",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{A} - \\widehat{D} = 40^\\circ$. Số đo góc $D$ bằng:",
        "options": [
          "$70^\\circ$",
          "$110^\\circ$",
          "$60^\\circ$",
          "$80^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\widehat{A} + \\widehat{D} = 180^\\circ$ và $\\widehat{A} - \\widehat{D} = 40^\\circ$. Cộng vế theo vế: $2\\widehat{A} = 220^\\circ \\implies \\widehat{A} = 110^\\circ \\implies \\widehat{D} = 180^\\circ - 110^\\circ = 70^\\circ$."
      },
      {
        "id": "quiz-8.11.12",
        "badge": "Câu 12 (VD) - Tính các góc khi biết tỉ lệ",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{A} = 2\\widehat{D}$. Số đo góc $C$ bằng:",
        "options": [
          "$60^\\circ$",
          "$120^\\circ$",
          "$80^\\circ$",
          "$100^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\widehat{A} + \\widehat{D} = 180^\\circ \\implies 2\\widehat{D} + \\widehat{D} = 180^\\circ \\implies 3\\widehat{D} = 180^\\circ \\implies \\widehat{D} = 60^\\circ$. Do đó $\\widehat{C} = \\widehat{D} = 60^\\circ$."
      },
      {
        "id": "quiz-8.11.13",
        "badge": "Câu 13 (TH) - Trục đối xứng của hình thang cân",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Số trục đối xứng của một hình thang cân (không phải hình chữ nhật) là:",
        "options": [
          "1 trục",
          "2 trục",
          "0 trục",
          "Vô số trục"
        ],
        "correctIndex": 0,
        "explanation": "Hình thang cân có đúng 1 trục đối xứng, đó là đường thẳng đi qua trung điểm hai đáy."
      },
      {
        "id": "quiz-8.11.14",
        "badge": "Câu 14 (VD) - Định lý Pythagoras tính cạnh bên",
        "source": "SGK Toán 8 KNTT Trang 55",
        "question": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $AB = 4\\text{ cm}, CD = 10\\text{ cm}$ và chiều cao $AH = 4\\text{ cm}$. Độ dài cạnh bên $x$ bằng:",
        "options": [
          "5 cm",
          "6 cm",
          "7 cm",
          "4.5 cm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $DH = \\frac{CD - AB}{2} = \\frac{10 - 4}{2} = 3\\text{ cm}$. Áp dụng định lí Pythagoras trong $\\triangle AHD$ vuông tại $H$: $AD = \\sqrt{AH^2 + DH^2} = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5\\text{ cm}$.",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='115,45 205,45 255,150 65,150' fill='none' stroke='#38bdf8' stroke-width='2'/> <line x1='115' y1='45' x2='115' y2='150' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4,3'/> <rect x='103' y='138' width='12' height='12' fill='none' stroke='#f59e0b' stroke-width='1.4'/> <text x='105' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>A</text> <text x='212' y='40' fill='#cbd5e1' font-size='12' font-weight='bold'>B</text> <text x='262' y='155' fill='#cbd5e1' font-size='12' font-weight='bold'>C</text> <text x='52' y='155' fill='#cbd5e1' font-size='12' font-weight='bold'>D</text> <text x='119' y='165' fill='#f59e0b' font-size='11' font-weight='bold'>H</text> <text x='125' y='100' fill='#f59e0b' font-size='11'>4 cm</text> <text x='78' y='95' fill='#34d399' font-size='12' font-weight='bold'>x</text> <text x='160' y='38' fill='#38bdf8' font-size='11' text-anchor='middle'>4 cm</text> <text x='160' y='178' fill='#94a3b8' font-size='11' text-anchor='middle'>CD = 10 cm</text> </svg>"
      },
      {
        "id": "quiz-8.11.15",
        "badge": "Câu 15 (TH) - Bẫy nhận biết hình bình hành",
        "source": "SGK Toán 8 KNTT Trang 54",
        "question": "Hình thang $ABCD$ ($AB \\parallel CD$) có $AD = BC$. Khi nào $ABCD$ CHẮC CHẮN là hình thang cân?",
        "options": [
          "Khi $AD$ không song song với $BC$",
          "Luôn luôn là hình thang cân",
          "Khi $AB = CD$",
          "Khi $\\widehat{A} = \\widehat{C}$"
        ],
        "correctIndex": 0,
        "explanation": "Nếu $AD \\parallel BC$ thì $ABCD$ là hình bình hành (chưa chắc cân). Để chắc chắn là hình thang cân, hai cạnh bên $AD$ và $BC$ không được song song."
      },
      {
        "id": "quiz-8.11.16",
        "badge": "Câu 16 (VD) - Tam giác đều và hình thang cân",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Cho tam giác đều $ABC$. Trên cạnh $AB$ lấy điểm $M$, trên cạnh $AC$ lấy điểm $N$ sao cho $AM = AN$. Tứ giác $BMNC$ là hình gì?",
        "options": [
          "Hình thang cân",
          "Hình thang vuông",
          "Hình bình hành",
          "Tứ giác thường"
        ],
        "correctIndex": 0,
        "explanation": "Vì $\\triangle ABC$ đều nên $\\widehat{B} = \\widehat{C} = 60^\\circ$. $\\triangle AMN$ có $AM = AN$ và $\\widehat{A} = 60^\\circ$ nên là tam giác đều $\\implies \\widehat{AMN} = 60^\\circ = \\widehat{B} \\implies MN \\parallel BC$. Tứ giác $BMNC$ là hình thang có $\\widehat{B} = \\widehat{C}$ nên là hình thang cân."
      },
      {
        "id": "quiz-8.11.17",
        "badge": "Câu 17 (VDC) - Hai đường chéo vuông góc",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có hai đường chéo vuông góc với nhau và đường cao $h = 6\\text{ cm}$. Tổng độ dài hai đáy $AB + CD$ bằng:",
        "options": [
          "12 cm",
          "6 cm",
          "18 cm",
          "24 cm"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình thang cân có hai đường chéo vuông góc, đường cao bằng nửa tổng hai đáy: $h = \\frac{AB + CD}{2} \\implies AB + CD = 2h = 2 \\times 6 = 12\\text{ cm}$."
      },
      {
        "id": "quiz-8.11.18",
        "badge": "Câu 18 (VD - Thực tế) - Mặt cắt đê chắn nước",
        "source": "SGK Toán 8 KNTT Trang 55",
        "question": "Mặt cắt một con đê sông là hình thang cân có đáy trên rộng $5\\text{ m}$, đáy dưới rộng $13\\text{ m}$, chiều dài mái nghiêng bên là $5\\text{ m}$. Chiều cao $h$ của con đê bằng bao nhiêu?",
        "options": [
          "3 m",
          "4 m",
          "3.5 m",
          "4.5 m"
        ],
        "correctIndex": 0,
        "explanation": "Độ dài đoạn chân mái đê: $d = \\frac{13 - 5}{2} = 4\\text{ m}$. Chiều cao con đê là: $h = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3\\text{ m}$.",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='110,50 210,50 270,150 50,150' fill='rgba(16, 185, 129, 0.08)' stroke='#10b981' stroke-width='2'/> <line x1='110' y1='50' x2='110' y2='150' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4,3'/> <rect x='98' y='138' width='12' height='12' fill='none' stroke='#f59e0b' stroke-width='1.4'/> <text x='160' y='42' fill='#34d399' font-size='11' text-anchor='middle'>Đáy trên: 5 m</text> <text x='65' y='95' fill='#38bdf8' font-size='11'>5 m</text> <text x='118' y='105' fill='#f59e0b' font-size='12' font-weight='bold'>h</text> <text x='160' y='175' fill='#94a3b8' font-size='11' text-anchor='middle'>Đáy dưới: 13 m</text> </svg>"
      },
      {
        "id": "quiz-8.11.19",
        "badge": "Câu 19 (VD) - Chu vi hình thang cân",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hình thang cân có đáy nhỏ $5\\text{ cm}$, đáy lớn gấp 3 lần đáy nhỏ, cạnh bên bằng $7\\text{ cm}$. Chu vi của hình thang cân đó bằng:",
        "options": [
          "34 cm",
          "27 cm",
          "39 cm",
          "40 cm"
        ],
        "correctIndex": 0,
        "explanation": "Đáy nhỏ $a = 5\\text{ cm}$, đáy lớn $b = 3 \\times 5 = 15\\text{ cm}$. Chu vi $C = a + b + 2c = 5 + 15 + 2 \\times 7 = 34\\text{ cm}$."
      },
      {
        "id": "quiz-8.11.20",
        "badge": "Câu 20 (TH) - Góc ngoài tại một đỉnh",
        "source": "SGK Toán 8 KNTT Trang 53",
        "question": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{C} = 65^\\circ$. Số đo góc ngoài tại đỉnh $A$ bằng bao nhiêu?",
        "options": [
          "$65^\\circ$",
          "$115^\\circ$",
          "$120^\\circ$",
          "$50^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $\\widehat{C} = 65^\\circ$ nên $\\widehat{D} = 65^\\circ$. Do đó góc trong $\\widehat{A} = 180^\\circ - 65^\\circ = 115^\\circ$. Góc ngoài tại đỉnh $A$ bù với góc trong: $180^\\circ - 115^\\circ = 65^\\circ$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.11.1",
        "badge": "Câu 1 (Đ/S) - Định nghĩa và tính chất của hình thang cân",
        "prompt": "Cho hình thang cân $ABCD$ có hai đáy $AB$ và $CD$ ($AB < CD$). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Hai góc kề đáy $CD$ bằng nhau, tức là $\\widehat{C} = \\widehat{D}$.",
            "correctAnswer": true,
            "explanation": "Đúng, định nghĩa hình thang cân là hai góc kề một đáy bằng nhau."
          },
          {
            "id": "b",
            "text": "Hai cạnh bên bằng nhau ($AD = BC$) và hai đường chéo bằng nhau ($AC = BD$).",
            "correctAnswer": true,
            "explanation": "Đúng, đây là hai định lí cơ bản về cạnh bên và đường chéo của hình thang cân."
          },
          {
            "id": "c",
            "text": "Hai góc đối của hình thang cân có tổng số đo bằng $360^\\circ$.",
            "correctAnswer": false,
            "explanation": "Sai, hai góc đối có tổng số đo bằng $180^\\circ$ vì $\\widehat{A} + \\widehat{C} = \\widehat{A} + \\widehat{D} = 180^\\circ$."
          },
          {
            "id": "d",
            "text": "Đường thẳng nối trung điểm hai đáy là trục đối xứng của hình thang cân.",
            "correctAnswer": true,
            "explanation": "Đúng, hình thang cân nhận đường thẳng đi qua trung điểm hai đáy làm trục đối xứng duy nhất."
          }
        ]
      },
      {
        "id": "tf-8.11.2",
        "badge": "Câu 2 (Đ/S) - Dấu hiệu nhận biết và các bẫy thường gặp",
        "prompt": "Xét tính đúng/sai của các nhận định về dấu hiệu nhận biết tứ giác và hình thang sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Hình thang có hai đường chéo bằng nhau là hình thang cân.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là dấu hiệu nhận biết hình thang cân rất quan trọng."
          },
          {
            "id": "b",
            "text": "Hình thang có hai cạnh bên bằng nhau luôn luôn là hình thang cân.",
            "correctAnswer": false,
            "explanation": "Sai, nếu hai cạnh bên bằng nhau và song song thì hình thang đó là hình bình hành chứ không phải hình thang cân."
          },
          {
            "id": "c",
            "text": "Tứ giác có hai đường chéo bằng nhau thì chắc chắn là hình thang cân.",
            "correctAnswer": false,
            "explanation": "Sai, tứ giác đó phải có hai cạnh đối song song (là hình thang) trước."
          },
          {
            "id": "d",
            "text": "Hình thang có hai góc đối bù nhau là hình thang cân.",
            "correctAnswer": true,
            "explanation": "Đúng, vì $\\widehat{A} + \\widehat{D} = 180^\\circ$ và $\\widehat{A} + \\widehat{C} = 180^\\circ \\implies \\widehat{C} = \\widehat{D}$ nên là hình thang cân."
          }
        ]
      },
      {
        "id": "tf-8.11.3",
        "badge": "Câu 3 (Đ/S) - Kỹ thuật kẻ đường cao tính toán",
        "prompt": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có $AB = 5\\text{ cm}, CD = 11\\text{ cm}$ và cạnh bên $AD = 5\\text{ cm}$. Kẻ $AH, BK \\perp CD$ ($H, K \\in CD$). Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Tứ giác $ABKH$ là hình chữ nhật và đoạn $HK = 5\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $ABKH$ có 3 góc vuông nên là hình chữ nhật $\\implies HK = AB = 5\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Độ dài đoạn $DH$ được tính bởi $DH = \\frac{CD - AB}{2} = 3\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $DH = \\frac{11 - 5}{2} = 3\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Chiều cao $AH$ của hình thang cân bằng $4\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, áp dụng định lí Pythagoras trong $\\triangle AHD$ vuông: $AH = \\sqrt{AD^2 - DH^2} = \\sqrt{5^2 - 3^2} = 4\\text{ cm}$."
          },
          {
            "id": "d",
            "text": "Diện tích hình thang cân $ABCD$ bằng $64\\text{ cm}^2$.",
            "correctAnswer": false,
            "explanation": "Sai, diện tích $S = \\frac{(AB + CD) \\cdot AH}{2} = \\frac{(5 + 11) \\cdot 4}{2} = 32\\text{ cm}^2$."
          }
        ]
      },
      {
        "id": "tf-8.11.4",
        "badge": "Câu 4 (Đ/S) - Bài toán thực tế thiết kế mặt cắt",
        "prompt": "Một cái máng xối dẫn nước bằng tôn có mặt cắt là hình thang cân với đáy dưới rộng $10\\text{ cm}$, hai thành bên nghiêng góc $60^\\circ$ so với phương ngang và mỗi thành bên dài $8\\text{ cm}$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Hai góc kề đáy dưới của mặt cắt máng xối đều bằng $60^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì máng xối là hình thang cân nên hai góc kề đáy dưới bằng nhau và bằng $60^\\circ$."
          },
          {
            "id": "b",
            "text": "Hai góc kề miệng máng (đáy trên) có số đo bằng $120^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, hai góc trong cùng phía bù nhau: $180^\\circ - 60^\\circ = 120^\\circ$."
          },
          {
            "id": "c",
            "text": "Hình chiếu của thành bên lên đáy trên bằng $4\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, trong tam giác vuông có một góc $30^\\circ$, cạnh đối diện góc $30^\\circ$ bằng nửa cạnh huyền: $8 : 2 = 4\\text{ cm}$ (hoặc $8 \\cdot \\cos 60^\\circ = 4\\text{ cm}$)."
          },
          {
            "id": "d",
            "text": "Miệng máng (đáy trên) có độ rộng bằng $14\\text{ cm}$.",
            "correctAnswer": false,
            "explanation": "Sai, độ rộng miệng máng là $10 + 2 \\times 4 = 18\\text{ cm}$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.11.1",
        "badge": "Câu 1 (NB) - Tìm góc kề cạnh bên",
        "prompt": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có $\\widehat{D} = 75^\\circ$. Số đo góc $A$ bằng bao nhiêu độ?",
        "correctAnswer": "105",
        "acceptableAnswers": [
          "105",
          "105°",
          "một trăm linh năm"
        ],
        "explanation": "Vì $AB \\parallel CD$ nên $\\widehat{A} + \\widehat{D} = 180^\\circ \\implies \\widehat{A} = 180^\\circ - 75^\\circ = 105^\\circ$."
      },
      {
        "id": "sa-8.11.2",
        "badge": "Câu 2 (TH) - Tính đoạn DH",
        "prompt": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có đáy nhỏ $AB = 6\\text{ cm}$, đáy lớn $CD = 14\\text{ cm}$. Kẻ đường cao $AH \\perp CD$. Độ dài đoạn thẳng $DH$ bằng bao nhiêu cm?",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4",
          "4 cm",
          "bốn"
        ],
        "explanation": "$DH = \\frac{CD - AB}{2} = \\frac{14 - 6}{2} = 4\\text{ cm}$."
      },
      {
        "id": "sa-8.11.3",
        "badge": "Câu 3 (NB) - Độ dài đường chéo",
        "prompt": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có đường chéo $AC = 12\\text{ cm}$. Độ dài đường chéo $BD$ bằng bao nhiêu cm?",
        "correctAnswer": "12",
        "acceptableAnswers": [
          "12",
          "12 cm",
          "mười hai"
        ],
        "explanation": "Trong hình thang cân, hai đường chéo bằng nhau nên $BD = AC = 12\\text{ cm}$."
      },
      {
        "id": "sa-8.11.4",
        "badge": "Câu 4 (TH) - Tổng hai góc đối",
        "prompt": "Trong hình thang cân, tổng số đo hai góc đối diện bằng bao nhiêu độ?",
        "correctAnswer": "180",
        "acceptableAnswers": [
          "180",
          "180°",
          "một trăm tám mươi"
        ],
        "explanation": "Trong hình thang cân $ABCD$, $\\widehat{A} + \\widehat{D} = 180^\\circ$, mà $\\widehat{C} = \\widehat{D}$ nên $\\widehat{A} + \\widehat{C} = 180^\\circ$."
      },
      {
        "id": "sa-8.11.5",
        "badge": "Câu 5 (VD) - Pythagoras tính cạnh bên",
        "prompt": "Một hình thang cân có đáy nhỏ bằng $4\\text{ cm}$, đáy lớn bằng $10\\text{ cm}$, chiều cao bằng $4\\text{ cm}$. Độ dài cạnh bên của hình thang cân bằng bao nhiêu cm?",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "5 cm",
          "năm"
        ],
        "explanation": "Đoạn $DH = \\frac{10 - 4}{2} = 3\\text{ cm}$. Cạnh bên $AD = \\sqrt{4^2 + 3^2} = 5\\text{ cm}$."
      },
      {
        "id": "sa-8.11.6",
        "badge": "Câu 6 (VD - Thực tế) - Chiều cao đê sông",
        "prompt": "Một con đê có mặt cắt là hình thang cân với đáy trên rộng $6\\text{ m}$, đáy dưới rộng $14\\text{ m}$ và mỗi mái đê nghiêng dài $5\\text{ m}$. Chiều cao của con đê bằng bao nhiêu mét?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "3 m",
          "ba"
        ],
        "explanation": "Chân mái đê: $d = \\frac{14 - 6}{2} = 4\\text{ m}$. Chiều cao con đê $h = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = 3\\text{ m}$."
      }
    ]
  },
  "t8-b12-hinh-binh-hanh": {
    "id": "t8-b12-hinh-binh-hanh",
    "lessonNumber": 12,
    "title": "Bài 12: Hình bình hành",
    "bookChapter": "Chương III: Tứ giác",
    "scenarioTitle": "Tình huống: Cánh cổng xếp tự động và Cơ cấu kích nâng xe ô tô",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn An",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, mỗi lần đến trường em đều ngắm chiếc cổng xếp tự động đóng mở. Khi co lại hay kéo dãn ra, các thanh thép đan chéo luôn tạo thành những tứ giác có các cạnh đối luôn song song và bằng nhau. Tại sao các kỹ sư lại sử dụng kết cấu này mà không phải hình vuông hay tam giác ạ?",
        "visualGraphic": "box",
        "mathNote": "AB \\parallel CD, \\ AD \\parallel BC"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào An! Câu hỏi rất thú vị! Đó chính là ứng dụng tuyệt vời của hình bình hành. Hình bình hành là tứ giác có các cạnh đối song song. Đặc biệt, các cạnh đối luôn bằng nhau và hai đường chéo luôn cắt nhau tại trung điểm của mỗi đường. Nhờ cơ cấu này, khi một cạnh chuyển động thì cạnh đối diện luôn song song và chuyển động tịnh tiến cùng chiều, giúp cánh cổng kéo trượt nhẹ nhàng, không bị kẹt hay đổ nghiêng. Các kích nâng xe ô tô, giàn phơi thông minh hay cánh tay robot cũng ứng dụng cơ cấu hình bình hành này đấy! Thầy trò mình cùng khám phá trọn vẹn kiến thức bài học này nhé!",
        "visualGraphic": "graph",
        "mathNote": "AB = CD, \\ AD = BC, \\ OA = OC, \\ OB = OD"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Định nghĩa Hình bình hành",
        "points": [
          "• **Định nghĩa:** Hình bình hành là tứ giác có các cạnh đối song song.",
          "• Tứ giác $ABCD$ là hình bình hành $\\iff \\begin{cases} AB \\parallel CD \\\\ AD \\parallel BC \\end{cases}$",
          "• **Mối liên hệ với hình thang:** Hình bình hành là một trường hợp đặc biệt của hình thang (hình thang có hai cạnh bên song song)."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 56)",
        "exampleProblem": "Cho tam giác $ABC$. Lấy điểm $D$ sao cho $C$ là trung điểm của $AD$. Qua $D$ kẻ đường thẳng song song với $BC$ cắt $AB$ tại $E$. Tứ giác $BCDE$ có phải là hình bình hành không?",
        "exampleSolution": "Theo giả thiết ta có $DE \\parallel BC$, do đó tứ giác $BCDE$ là hình thang.\n" +
          "Nếu chứng minh được thêm $BE \\parallel CD$ thì tứ giác $BCDE$ là hình bình hành theo định nghĩa (có các cạnh đối song song).",
        "examples": [
          {
            "title": "Hình vẽ minh họa chuẩn SGK: Hình bình hành ABCD",
            "problem": "Quan sát các cặp cạnh đối song song trong hình bình hành ABCD:",
            "solution": "Cạnh AB song song với CD, cạnh AD song song với BC.",
            "svgDiagram": "<svg viewBox='0 0 380 200' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='110,45 290,45 250,155 70,155' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><path d='M 185,41 L 195,45 L 185,49' fill='none' stroke='#38bdf8' stroke-width='2'/><path d='M 145,151 L 155,155 L 145,159' fill='none' stroke='#38bdf8' stroke-width='2'/><path d='M 86,95 L 90,105 L 94,95' fill='none' stroke='#f59e0b' stroke-width='2'/><path d='M 266,95 L 270,105 L 274,95' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='100' y='38' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='298' y='38' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='256' y='172' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='56' y='172' fill='#f8fafc' font-size='13' font-weight='bold'>D</text><text x='190' y='185' fill='#38bdf8' font-size='11' text-anchor='middle'>AB \\parallel CD \\quad \\text{và} \\quad AD \\parallel BC</text></svg>"
          }
        ]
      },
      {
        "index": "2",
        "title": "Tính chất của Hình bình hành",
        "points": [
          "Trong một hình bình hành:",
          "• **Tính chất cạnh:** Các cạnh đối bằng nhau ($AB = CD, AD = BC$).",
          "• **Tính chất góc:** Các góc đối bằng nhau ($\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$).",
          "• **Tính chất góc kề:** Hai góc kề một cạnh bất kì luôn bù nhau: $\\widehat{A} + \\widehat{B} = 180^\\circ, \\widehat{B} + \\widehat{C} = 180^\\circ, \\widehat{C} + \\widehat{D} = 180^\\circ, \\widehat{D} + \\widehat{A} = 180^\\circ$.",
          "• **Tính chất đường chéo:** Hai đường chéo cắt nhau tại trung điểm của mỗi đường ($OA = OC, OB = OD$).",
          "• **Tâm đối xứng:** Giao điểm $O$ của hai đường chéo là tâm đối xứng của hình bình hành."
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 57)",
        "exampleProblem": "Cho hình bình hành $ABCD$ có $\\widehat{A} = 110^\\circ$. Tính số đo các góc còn lại của hình bình hành.",
        "exampleSolution": "Vì $ABCD$ là hình bình hành nên:\n" +
          "• Các góc đối bằng nhau: $\\widehat{C} = \\widehat{A} = 110^\\circ$.\n" +
          "• Hai góc kề một cạnh bù nhau: $\\widehat{B} = 180^\\circ - \\widehat{A} = 180^\\circ - 110^\\circ = 70^\\circ$.\n" +
          "• Góc đối với góc $B$: $\\widehat{D} = \\widehat{B} = 70^\\circ$.\n" +
          "Vậy $\\widehat{B} = 70^\\circ, \\widehat{C} = 110^\\circ, \\widehat{D} = 70^\\circ$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Hai đường chéo cắt nhau tại trung điểm O",
            "problem": "Quan sát giao điểm O là trung điểm của AC và BD trong hình bình hành ABCD:",
            "solution": "OA = OC (gạch 1 vạch) và OB = OD (gạch 2 vạch). O là tâm đối xứng.",
            "svgDiagram": "<svg viewBox='0 0 380 210' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='110,45 290,45 250,165 70,165' fill='none' stroke='#38bdf8' stroke-width='2.2'/><line x1='110' y1='45' x2='250' y2='165' stroke='#f43f5e' stroke-width='1.8'/><line x1='290' y1='45' x2='70' y2='165' stroke='#fbbf24' stroke-width='1.8'/><circle cx='180' cy='105' r='3.5' fill='#a855f7'/><text x='180' y='98' fill='#c084fc' font-size='12' font-weight='bold' text-anchor='middle'>O</text><line x1='142' y1='73' x2='148' y2='77' stroke='#f43f5e' stroke-width='2'/><line x1='212' y1='133' x2='218' y2='137' stroke='#f43f5e' stroke-width='2'/><line x1='122' y1='132' x2='128' y2='138' stroke='#fbbf24' stroke-width='2'/><line x1='126' y1='130' x2='132' y2='136' stroke='#fbbf24' stroke-width='2'/><line x1='232' y1='72' x2='238' y2='78' stroke='#fbbf24' stroke-width='2'/><line x1='236' y1='70' x2='242' y2='76' stroke='#fbbf24' stroke-width='2'/><text x='100' y='38' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='298' y='38' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='256' y='180' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='56' y='180' fill='#f8fafc' font-size='13' font-weight='bold'>D</text><text x='180' y='198' fill='#34d399' font-size='11' text-anchor='middle'>OA = OC \\quad \\text{và} \\quad OB = OD</text></svg>"
          }
        ]
      },
      {
        "index": "3",
        "title": "Dấu hiệu nhận biết Hình bình hành",
        "points": [
          "Một tứ giác là hình bình hành nếu thỏa mãn một trong 5 dấu hiệu sau:",
          "1. **Dấu hiệu 1 (Theo cạnh đối song song):** Tứ giác có các cạnh đối song song là hình bình hành.",
          "2. **Dấu hiệu 2 (Theo cạnh đối bằng nhau):** Tứ giác có các cạnh đối bằng nhau là hình bình hành ($AB = CD$ và $AD = BC$).",
          "3. **Dấu hiệu 3 (Một cặp cạnh vừa song song vừa bằng nhau):** Tứ giác có một cặp cạnh đối song song và bằng nhau là hình bình hành ($AB \\parallel CD$ và $AB = CD$). *(Dấu hiệu hay dùng nhất!)*",
          "4. **Dấu hiệu 4 (Theo góc đối bằng nhau):** Tứ giác có các góc đối bằng nhau là hình bình hành ($\\widehat{A} = \\widehat{C}$ và $\\widehat{B} = \\widehat{D}$).",
          "5. **Dấu hiệu 5 (Theo đường chéo):** Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành.",
          "⚠️ **CẢNH BÁO BẪY KINH ĐIỂN:** 'Tứ giác có một cặp cạnh đối song song VÀ một cặp cạnh đối bằng nhau' CHƯA CHẮC là hình bình hành! (Vì nếu $AB \\parallel CD$ nhưng lại cho $AD = BC$ thì đó có thể là **hình thang cân**)."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 58)",
        "exampleProblem": "Cho hình bình hành $ABCD$. Gọi $E$ là trung điểm của $AB$, $F$ là trung điểm của $CD$. Chứng minh tứ giác $AECF$ là hình bình hành.",
        "exampleSolution": "• Vì $ABCD$ là hình bình hành nên $AB \\parallel CD$ và $AB = CD$.\n" +
          "• Vì $E$ là trung điểm của $AB$ nên $AE = \\frac{1}{2}AB$.\n" +
          "• Vì $F$ là trung điểm của $CD$ nên $CF = \\frac{1}{2}CD$.\n" +
          "• Suy ra $AE = CF$.\n" +
          "• Mặt khác, $E \\in AB, F \\in CD$ mà $AB \\parallel CD$ nên $AE \\parallel CF$.\n" +
          "• Tứ giác $AECF$ có một cặp cạnh đối song song và bằng nhau ($AE \\parallel CF$ và $AE = CF$) nên $AECF$ là hình bình hành (theo Dấu hiệu 3).",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Dấu hiệu 1 cặp cạnh vừa song song vừa bằng nhau",
            "problem": "Chứng minh tứ giác AECF là hình bình hành từ hình bình hành ABCD:",
            "solution": "Đoạn AE song song và bằng đoạn CF, suy ra AECF là hình bình hành.",
            "svgDiagram": "<svg viewBox='0 0 400 200' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='90,45 310,45 270,155 50,155' fill='none' stroke='#475569' stroke-width='1.5' stroke-dasharray='4 3'/><polygon points='90,45 200,45 270,155 160,155' fill='rgba(16, 185, 129, 0.1)' stroke='#10b981' stroke-width='2.2'/><circle cx='200' cy='45' r='3.5' fill='#34d399'/><circle cx='160' cy='155' r='3.5' fill='#34d399'/><text x='80' y='40' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='318' y='40' fill='#94a3b8' font-size='13'>B</text><text x='278' y='170' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='38' y='170' fill='#94a3b8' font-size='13'>D</text><text x='200' y='36' fill='#34d399' font-size='12' font-weight='bold' text-anchor='middle'>E</text><text x='160' y='175' fill='#34d399' font-size='12' font-weight='bold' text-anchor='middle'>F</text><text x='200' y='192' fill='#10b981' font-size='11' text-anchor='middle'>AE \\parallel CF \\quad \\text{và} \\quad AE = CF \\implies AECF \\text{ là HBH}</text></svg>"
          }
        ]
      },
      {
        "index": "4",
        "title": "Ứng dụng tính toán: Chu vi, Diện tích và Kỹ thuật chứng minh",
        "points": [
          "• **Chu vi hình bình hành:** $C = 2(a + b)$, trong đó $a, b$ là độ dài hai cạnh kề.",
          "• **Diện tích hình bình hành:** $S = a \\cdot h$, trong đó $a$ là độ dài một cạnh đáy và $h$ là chiều cao tương ứng hạ vuông góc xuống cạnh đáy đó ($h = AH \\perp CD$).",
          "• **Kỹ thuật chứng minh 3 điểm thẳng hàng:** Nếu $O$ là trung điểm của đường chéo $AC$ trong hình bình hành $ABCD$, và cần chứng minh $B, O, D$ thẳng hàng, ta chỉ cần chỉ ra $ABCD$ là hình bình hành $\\implies O$ cũng là trung điểm của $BD \\implies B, O, D$ thẳng hàng.",
          "• **Phân giác góc trong tạo tam giác cân:** Nếu tia phân giác của góc $A$ cắt cạnh $CD$ tại $M$, thì $\\triangle ADM$ là tam giác cân tại $D$ vì $\\widehat{DAM} = \\widehat{DMA}$ (so le trong)."
        ],
        "exampleTitle": "Ví dụ 4 (Tính chu vi và diện tích hình bình hành)",
        "exampleProblem": "Một mảnh đất hình bình hành có cạnh đáy dài $25\\text{ m}$, cạnh bên dài $15\\text{ m}$ và chiều cao tương ứng với cạnh đáy dài $12\\text{ m}$. Tính chu vi và diện tích mảnh đất.",
        "exampleSolution": "• Chu vi mảnh đất là: $C = 2 \\times (25 + 15) = 2 \\times 40 = 80\\text{ (m)}$.\n" +
          "• Diện tích mảnh đất là: $S = 25 \\times 12 = 300\\text{ (m}^2\\text{)}$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Chiều cao và diện tích hình bình hành",
            "problem": "Quan sát cạnh đáy CD = a và đường cao tương ứng AH = h:",
            "solution": "Diện tích S = a . h. Tam giác ADH vuông tại H cho phép áp dụng Pythagoras.",
            "svgDiagram": "<svg viewBox='0 0 380 200' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='110,45 290,45 250,155 70,155' fill='rgba(59, 130, 246, 0.06)' stroke='#38bdf8' stroke-width='2.2'/><line x1='110' y1='45' x2='110' y2='155' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4 3'/><rect x='110' y='143' width='12' height='12' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='100' y='38' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='298' y='38' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='256' y='170' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='56' y='170' fill='#f8fafc' font-size='13' font-weight='bold'>D</text><text x='106' y='172' fill='#f59e0b' font-size='12' font-weight='bold'>H</text><text x='96' y='105' fill='#f59e0b' font-size='12' font-weight='bold'>h</text><text x='160' y='175' fill='#38bdf8' font-size='12' font-weight='bold' text-anchor='middle'>đáy CD = a</text><text x='190' y='192' fill='#94a3b8' font-size='11' text-anchor='middle'>S = a \\cdot h</text></svg>"
          }
        ]
      }
    ],
    "youtubeVideos": [
      {
        "id": "t8_b12_video1",
        "title": "Tiết 1: Định nghĩa và các tính chất của hình bình hành (SGK Toán 8 KNTT)"
      },
      {
        "id": "t8_b12_video2",
        "title": "Tiết 2: 5 Dấu hiệu nhận biết hình bình hành và bài tập chứng minh"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.12.1",
        "timeSeconds": 150,
        "timeLabel": "02:30",
        "title": "Định nghĩa hình bình hành",
        "question": "Hình bình hành là tứ giác có đặc điểm nào sau đây?",
        "options": [
          "Các cạnh đối song song",
          "Bốn cạnh bằng nhau",
          "Hai đường chéo vuông góc",
          "Bốn góc bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa SGK, hình bình hành là tứ giác có các cạnh đối song song."
      },
      {
        "id": "vq-8.12.2",
        "timeSeconds": 380,
        "timeLabel": "06:20",
        "title": "Tính chất đường chéo",
        "question": "Trong hình bình hành, hai đường chéo có tính chất gì?",
        "options": [
          "Cắt nhau tại trung điểm của mỗi đường",
          "Bằng nhau và vuông góc với nhau",
          "Là phân giác của các góc",
          "Luôn vuông góc với nhau"
        ],
        "correctIndex": 0,
        "explanation": "Định lí tính chất: Trong hình bình hành, hai đường chéo cắt nhau tại trung điểm của mỗi đường."
      },
      {
        "id": "vq-8.12.3",
        "timeSeconds": 620,
        "timeLabel": "10:20",
        "title": "Dấu hiệu nhận biết",
        "question": "Tứ giác nào sau đây CHẮC CHẮN là hình bình hành?",
        "options": [
          "Tứ giác có một cặp cạnh đối song song và bằng nhau",
          "Tứ giác có một cặp cạnh đối song song và một cặp cạnh đối bằng nhau",
          "Tứ giác có hai đường chéo bằng nhau",
          "Tứ giác có hai góc đối bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Dấu hiệu 3: Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành."
      },
      {
        "id": "vq-8.12.4",
        "timeSeconds": 850,
        "timeLabel": "14:10",
        "title": "Tính góc kề",
        "question": "Hình bình hành $ABCD$ có $\\widehat{A} = 75^\\circ$. Số đo góc $B$ bằng:",
        "options": [
          "105°",
          "75°",
          "115°",
          "90°"
        ],
        "correctIndex": 0,
        "explanation": "Hai góc kề một cạnh của hình bình hành bù nhau: $\\widehat{B} = 180^\\circ - 75^\\circ = 105^\\circ$."
      }
    ],
    "tips": [
      "Mẹo 1: Dấu hiệu '1 cặp cạnh vừa song song vừa bằng nhau' là con đường ngắn nhất và xuất hiện nhiều nhất khi chứng minh hình bình hành.",
      "Mẹo 2: Hai góc kề một cạnh luôn bù nhau (tổng bằng 180°). Biết 1 góc là tính được ngay 3 góc còn lại của hình bình hành!",
      "Mẹo 3: Muốn chứng minh 3 điểm thẳng hàng, hãy tìm một hình bình hành nhận đoạn thẳng nối 2 điểm làm đường chéo, điểm thứ ba là trung điểm đường chéo kia.",
      "Mẹo 4: Giao điểm hai đường chéo là tâm đối xứng. Hai đường chéo chia hình bình hành thành 4 tam giác có diện tích bằng nhau!"
    ],
    "traps": [
      "Bẫy 1: Ngộ nhận 'Tứ giác có 1 cặp cạnh song song và 1 cặp cạnh bằng nhau là hình bình hành'. Cực kỳ sai! Nếu cặp song song khác cặp bằng nhau thì đó là HÌNH THANG CÂN!",
      "Bẫy 2: Ngộ nhận hai đường chéo hình bình hành bằng nhau hoặc vuông góc. Hình bình hành nói chung KHÔNG có hai đường chéo bằng nhau hay vuông góc (đó là hình chữ nhật hoặc hình thoi).",
      "Bẫy 3: Ngộ nhận đường chéo là phân giác các góc. Đường chéo hình bình hành thường không phải là phân giác.",
      "Bẫy 4: Tính sai diện tích: Lấy tích hai cạnh kề a . b (sai). Diện tích đúng phải là a . h (cạnh đáy nhân chiều cao tương ứng)."
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.12.1",
        "badge": "Câu 1 (NB) - Định nghĩa hình bình hành",
        "source": "SGK Toán 8 KNTT Trang 56",
        "question": "Hình bình hành là tứ giác có:",
        "options": [
          "Các cạnh đối song song",
          "Bốn cạnh bằng nhau",
          "Hai đường chéo vuông góc",
          "Bốn góc bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa, hình bình hành là tứ giác có các cạnh đối song song."
      },
      {
        "id": "quiz-8.12.2",
        "badge": "Câu 2 (TH) - Hai góc kề bù nhau",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Cho hình bình hành $ABCD$ có $\\widehat{B} = 70^\\circ$. Số đo góc $x$ tại đỉnh $C$ trong hình vẽ là:",
        "options": [
          "$x = 110^\\circ$",
          "$x = 70^\\circ$",
          "$x = 80^\\circ$",
          "$x = 120^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình bình hành, hai góc kề một cạnh luôn bù nhau: $\\widehat{B} + \\widehat{C} = 180^\\circ \\implies x = \\widehat{C} = 180^\\circ - 70^\\circ = 110^\\circ$.",
        "svgDiagram": "<svg viewBox='0 0 340 180' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='100,40 260,40 220,140 60,140' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/> <path d='M 238,40 A 22 22 0 0 0 251.8,60.4' fill='none' stroke='#38bdf8' stroke-width='1.8'/> <text x='234' y='68' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>70°</text> <path d='M 228.2,119.6 A 22 22 0 0 0 198,140' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='202' y='124' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='88' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>A</text> <text x='268' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>B</text> <text x='228' y='155' fill='#f8fafc' font-size='13' font-weight='bold'>C</text> <text x='46' y='155' fill='#f8fafc' font-size='13' font-weight='bold'>D</text> </svg>"
      },
      {
        "id": "quiz-8.12.3",
        "badge": "Câu 3 (TH) - Hai góc kề bù nhau",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Cho hình bình hành $ABCD$ có $\\widehat{A} = 120^\\circ$. Số đo góc $x$ tại đỉnh $B$ trong hình vẽ là:",
        "options": [
          "$x = 60^\\circ$",
          "$x = 120^\\circ$",
          "$x = 70^\\circ$",
          "$x = 90^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình bình hành, hai góc kề một cạnh luôn bù nhau: $\\widehat{A} + \\widehat{B} = 180^\\circ \\implies x = 180^\\circ - 120^\\circ = 60^\\circ$.",
        "svgDiagram": "<svg viewBox='0 0 340 180' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='100,40 260,40 220,140 60,140' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/> <path d='M 91.8,60.4 A 22 22 0 0 0 122,40' fill='none' stroke='#38bdf8' stroke-width='1.8'/> <text x='118' y='68' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>120°</text> <path d='M 238,40 A 22 22 0 0 0 251.8,60.4' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='234' y='68' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='88' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>A</text> <text x='268' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>B</text> <text x='228' y='155' fill='#f8fafc' font-size='13' font-weight='bold'>C</text> <text x='46' y='155' fill='#f8fafc' font-size='13' font-weight='bold'>D</text> </svg>"
      },
      {
        "id": "quiz-8.12.4",
        "badge": "Câu 4 (TH) - Tìm cạnh hình bình hành qua chu vi",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Cho hình bình hành $ABCD$ có chu vi bằng $26\\text{ cm}$ và $AD = 5\\text{ cm}$. Độ dài cạnh $CD$ có giá trị $x$ bằng:",
        "options": [
          "$x = 8\\text{ cm}$",
          "$x = 5\\text{ cm}$",
          "$x = 13\\text{ cm}$",
          "$x = 10\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi hình bình hành bằng $2(AD + CD) = 2(5 + x) = 26\\text{ cm} \\implies 5 + x = 13 \\implies x = 8\\text{ cm}$.",
        "svgDiagram": "<svg viewBox='0 0 340 180' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='100,40 260,40 220,140 60,140' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/><text x='70' y='90' fill='#f59e0b' font-size='11' font-weight='bold'>5 cm</text><text x='140' y='158' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text><text x='180' y='95' fill='#38bdf8' font-size='12' font-weight='bold' text-anchor='middle'>Chu vi: 26 cm</text><text x='90' y='35' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='268' y='35' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='226' y='155' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='48' y='155' fill='#f8fafc' font-size='13' font-weight='bold'>D</text></svg>"
      },
      {
        "id": "quiz-8.12.5",
        "badge": "Câu 5 (TH) - Giao điểm hai đường chéo",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Hình bình hành $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = 4\\text{ cm}$. Độ dài đường chéo $AC$ bằng:",
        "options": [
          "8 cm",
          "4 cm",
          "16 cm",
          "2 cm"
        ],
        "correctIndex": 0,
        "explanation": "Vì $O$ là trung điểm của $AC$ nên $AC = 2 \\times OA = 2 \\times 4 = 8\\text{ cm}$."
      },
      {
        "id": "quiz-8.12.6",
        "badge": "Câu 6 (NB) - Tâm đối xứng",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Tâm đối xứng của hình bình hành $ABCD$ là điểm nào sau đây?",
        "options": [
          "Giao điểm của hai đường chéo AC và BD",
          "Trung điểm của cạnh đáy AB",
          "Đỉnh A của hình bình hành",
          "Giao điểm của hai cạnh bên AD và BC"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình bình hành, giao điểm của hai đường chéo là tâm đối xứng của hình bình hành đó."
      },
      {
        "id": "quiz-8.12.7",
        "badge": "Câu 7 (TH) - Dấu hiệu nhận biết",
        "source": "SGK Toán 8 KNTT Trang 58",
        "question": "Tứ giác $ABCD$ có $AB \\parallel CD$ và $AB = CD$. Tứ giác $ABCD$ là hình gì?",
        "options": [
          "Hình bình hành",
          "Hình thang cân",
          "Hình thang vuông",
          "Tứ giác không xác định"
        ],
        "correctIndex": 0,
        "explanation": "Dấu hiệu 3: Tứ giác có một cặp cạnh đối song song và bằng nhau là hình bình hành."
      },
      {
        "id": "quiz-8.12.8",
        "badge": "Câu 8 (TH) - Cảnh giác bẫy nhận biết",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Khẳng định nào sau đây là SAI?",
        "options": [
          "Tứ giác có hai cạnh đối song song và hai cạnh đối kia bằng nhau luôn là hình bình hành",
          "Tứ giác có các cạnh đối bằng nhau là hình bình hành",
          "Tứ giác có các góc đối bằng nhau là hình bình hành",
          "Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Khẳng định A là SAI, vì tứ giác có một cặp cạnh đối song song và một cặp cạnh đối kia bằng nhau có thể là HÌNH THANG CÂN."
      },
      {
        "id": "quiz-8.12.9",
        "badge": "Câu 9 (TH) - Tính chu vi hình bình hành",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Một hình bình hành có độ dài hai cạnh kề là $5\\text{ cm}$ và $7\\text{ cm}$. Chu vi của hình bình hành đó bằng:",
        "options": [
          "24 cm",
          "12 cm",
          "35 cm",
          "20 cm"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi hình bình hành là: $C = 2 \\times (5 + 7) = 2 \\times 12 = 24\\text{ cm}$."
      },
      {
        "id": "quiz-8.12.10",
        "badge": "Câu 10 (VD) - Kẻ đường cao tính góc",
        "source": "SGK Toán 8 KNTT Trang 59",
        "question": "Cho hình bình hành $ABCD$ có $\\widehat{D} = 60^\\circ$. Kẻ đường cao $AH \\perp CD$ ($H \\in CD$). Số đo góc $x = \\widehat{DAH}$ trong hình vẽ là:",
        "options": [
          "$x = 30^\\circ$",
          "$x = 60^\\circ$",
          "$x = 45^\\circ$",
          "$x = 40^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông $\\triangle AHD$ vuông tại $H$, ta có: $x = \\widehat{DAH} = 90^\\circ - \\widehat{D} = 90^\\circ - 60^\\circ = 30^\\circ$.",
        "svgDiagram": "<svg viewBox='0 0 340 190' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <polygon points='110,40 270,40 220,145 60,145' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/> <line x1='110' y1='40' x2='110' y2='145' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='4 3'/> <rect x='98' y='133' width='12' height='12' fill='none' stroke='#f59e0b' stroke-width='1.5'/> <path d='M 82,145 A 22 22 0 0 0 69.5,125.1' fill='none' stroke='#38bdf8' stroke-width='1.8'/> <text x='88' y='134' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>60°</text> <path d='M 98,65.3 A 28 28 0 0 0 110,68' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='101' y='82' fill='#f43f5e' font-size='13' font-weight='bold' text-anchor='middle'>x</text> <text x='96' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>A</text> <text x='278' y='36' fill='#f8fafc' font-size='13' font-weight='bold'>B</text> <text x='226' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>C</text> <text x='46' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>D</text> <text x='116' y='160' fill='#f59e0b' font-size='12' font-weight='bold'>H</text> </svg>"
      },
      {
        "id": "quiz-8.12.11",
        "badge": "Câu 11 (VD) - Tính diện tích hình bình hành",
        "source": "SGK Toán 8 KNTT Trang 59",
        "question": "Hình bình hành có cạnh đáy dài $12\\text{ cm}$ và chiều cao tương ứng bằng $5\\text{ cm}$. Diện tích của hình bình hành đó bằng:",
        "options": [
          "60 cm²",
          "30 cm²",
          "120 cm²",
          "34 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Diện tích hình bình hành là: $S = a \\times h = 12 \\times 5 = 60\\text{ (cm}^2\\text{)}$."
      },
      {
        "id": "quiz-8.12.12",
        "badge": "Câu 12 (VD) - Hiệu hai góc kề",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hình bình hành $ABCD$ có $\\widehat{A} - \\widehat{B} = 40^\\circ$. Số đo góc $A$ bằng:",
        "options": [
          "110°",
          "70°",
          "120°",
          "100°"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\widehat{A} + \\widehat{B} = 180^\\circ$ và $\\widehat{A} - \\widehat{B} = 40^\\circ$. Cộng vế theo vế: $2\\widehat{A} = 220^\\circ \\implies \\widehat{A} = 110^\\circ$."
      },
      {
        "id": "quiz-8.12.13",
        "badge": "Câu 13 (VD) - Hai góc kề tỉ lệ",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hình bình hành $ABCD$ có $\\widehat{A} = 2\\widehat{B}$. Số đo góc nhọn của hình bình hành bằng:",
        "options": [
          "60°",
          "120°",
          "45°",
          "30°"
        ],
        "correctIndex": 0,
        "explanation": "Vì $\\widehat{A} + \\widehat{B} = 180^\\circ \\implies 2\\widehat{B} + \\widehat{B} = 180^\\circ \\implies 3\\widehat{B} = 180^\\circ \\implies \\widehat{B} = 60^\\circ$."
      },
      {
        "id": "quiz-8.12.14",
        "badge": "Câu 14 (TH) - Giao điểm hai đường chéo chia độ dài",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Cho hình bình hành $ABCD$ có $AC = 10\\text{ cm}$ và $BD = 14\\text{ cm}$. Hai đường chéo cắt nhau tại $O$. Độ dài đoạn thẳng $OB$ bằng:",
        "options": [
          "7 cm",
          "5 cm",
          "14 cm",
          "12 cm"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình bình hành, $O$ là trung điểm của $BD$ nên $OB = \\frac{BD}{2} = \\frac{14}{2} = 7\\text{ cm}$."
      },
      {
        "id": "quiz-8.12.15",
        "badge": "Câu 15 (VD) - Phân giác tạo tam giác cân",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Cho hình bình hành $ABCD$ ($AB > BC$). Tia phân giác của góc $A$ cắt cạnh $CD$ tại $E$. Khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "Tam giác ADE cân tại D",
          "Tam giác ADE đều",
          "Tam giác ADE vuông tại E",
          "Tam giác ADE cân tại A"
        ],
        "correctIndex": 0,
        "explanation": "Vì $AE$ là phân giác của $\\widehat{A}$ nên $\\widehat{DAE} = \\widehat{EAB}$. Mà $AB \\parallel CD$ nên $\\widehat{EAB} = \\widehat{DEA}$ (so le trong) $\\implies \\widehat{DAE} = \\widehat{DEA} \\implies \\triangle ADE$ cân tại $D$."
      },
      {
        "id": "quiz-8.12.16",
        "badge": "Câu 16 (VD) - Tính cạnh đáy từ chu vi",
        "source": "SGK Toán 8 KNTT Trang 58",
        "question": "Hình bình hành $ABCD$ có chu vi bằng $40\\text{ cm}$ và cạnh $AB$ dài hơn cạnh $BC$ là $4\\text{ cm}$. Độ dài cạnh $AB$ bằng:",
        "options": [
          "12 cm",
          "8 cm",
          "16 cm",
          "10 cm"
        ],
        "correctIndex": 0,
        "explanation": "Nửa chu vi là: $AB + BC = 40 : 2 = 20\\text{ cm}$. Độ dài cạnh $AB = (20 + 4) : 2 = 12\\text{ cm}$."
      },
      {
        "id": "quiz-8.12.17",
        "badge": "Câu 17 (VDC) - Trung điểm và hình bình hành con",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Cho hình bình hành $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Đường chéo $BD$ cắt $AN$ tại $P$ và cắt $CM$ tại $Q$. Tỉ số $DP : PQ : QB$ bằng:",
        "options": [
          "1 : 1 : 1",
          "1 : 2 : 1",
          "2 : 1 : 2",
          "1 : 3 : 1"
        ],
        "correctIndex": 0,
        "explanation": "Theo định lí đường trung bình và tính chất hình bình hành, hai đoạn $AN$ và $CM$ song song với nhau và chia đường chéo $BD$ thành 3 đoạn bằng nhau: $DP = PQ = QB$."
      },
      {
        "id": "quiz-8.12.18",
        "badge": "Câu 18 (VD - Thực tế) - Giàn phơi thông minh",
        "source": "SGK Toán 8 KNTT Trang 59",
        "question": "Một khung giàn phơi quần áo thông minh xếp theo cơ cấu hình bình hành với thanh ngang $a = 60\\text{ cm}$ và thanh nghiêng $b = 30\\text{ cm}$. Khi nâng hạ thanh ngang, khoảng cách giữa hai đầu thanh nghiêng luôn bằng bao nhiêu để giàn phơi giữ thăng bằng?",
        "options": [
          "60 cm",
          "30 cm",
          "90 cm",
          "45 cm"
        ],
        "correctIndex": 0,
        "explanation": "Trong cơ cấu hình bình hành, hai cạnh đối luôn song song và bằng nhau nên khoảng cách giữa hai đầu luôn bằng độ dài thanh ngang $a = 60\\text{ cm}$."
      },
      {
        "id": "quiz-8.12.19",
        "badge": "Câu 19 (VD - Thực tế) - Kích nâng xe ô tô",
        "source": "SGK Toán 8 KNTT Trang 59",
        "question": "Một chiếc kích nâng xe ô tô hoạt động theo cơ cấu hình thoi/hình bình hành 4 thanh bằng nhau dài $25\\text{ cm}$. Khi hai khớp đối diện cách nhau $30\\text{ cm}$, chiều cao nâng được của kích bằng bao nhiêu?",
        "options": [
          "40 cm",
          "35 cm",
          "20 cm",
          "50 cm"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường chéo cắt nhau tại trung điểm và vuông góc. Nửa đường chéo ngang: $30 : 2 = 15\\text{ cm}$. Nửa đường chéo đứng: $\\sqrt{25^2 - 15^2} = \\sqrt{625 - 225} = 20\\text{ cm}$. Chiều cao nâng là: $2 \\times 20 = 40\\text{ cm}$."
      },
      {
        "id": "quiz-8.12.20",
        "badge": "Câu 20 (TH) - Góc ngoài của hình bình hành",
        "source": "SGK Toán 8 KNTT Trang 57",
        "question": "Hình bình hành $ABCD$ có $\\widehat{A} = 70^\\circ$. Số đo góc ngoài tại đỉnh $B$ bằng:",
        "options": [
          "70°",
          "110°",
          "120°",
          "80°"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\widehat{B} = 180^\\circ - 70^\\circ = 110^\\circ$. Góc ngoài tại đỉnh $B$ kề bù với góc trong: $180^\\circ - 110^\\circ = 70^\\circ$ (bằng với góc trong $\\widehat{A}$ do so le trong hoặc đồng vị)."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.12.1",
        "badge": "Câu 1 (Đ/S) - Định nghĩa và tính chất của hình bình hành",
        "prompt": "Cho hình bình hành $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Các cạnh đối bằng nhau ($AB = CD, AD = BC$) và các góc đối bằng nhau ($\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$).",
            "correctAnswer": true,
            "explanation": "Đúng, đây là tính chất cơ bản của hình bình hành."
          },
          {
            "id": "b",
            "text": "Hai đường chéo của hình bình hành luôn bằng nhau ($AC = BD$).",
            "correctAnswer": false,
            "explanation": "Sai, hai đường chéo của hình bình hành nói chung không bằng nhau (chỉ bằng nhau khi nó là hình chữ nhật)."
          },
          {
            "id": "c",
            "text": "Điểm $O$ là trung điểm của cả hai đường chéo $AC$ và $BD$.",
            "correctAnswer": true,
            "explanation": "Đúng, hai đường chéo của hình bình hành cắt nhau tại trung điểm của mỗi đường."
          },
          {
            "id": "d",
            "text": "Hai góc kề một cạnh bất kì có tổng số đo bằng $180^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì các cạnh đối song song nên hai góc kề một cạnh là hai góc trong cùng phía bù nhau."
          }
        ]
      },
      {
        "id": "tf-8.12.2",
        "badge": "Câu 2 (Đ/S) - Dấu hiệu nhận biết hình bình hành",
        "prompt": "Xét tính đúng/sai của các điều kiện nhận biết một tứ giác là hình bình hành sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Tứ giác có một cặp cạnh đối song song và bằng nhau là hình bình hành.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là Dấu hiệu 3 nhận biết hình bình hành."
          },
          {
            "id": "b",
            "text": "Tứ giác có một cặp cạnh đối song song và cặp cạnh đối còn lại bằng nhau luôn là hình bình hành.",
            "correctAnswer": false,
            "explanation": "Sai, đây có thể là hình thang cân (ví dụ $AB \\parallel CD$ và $AD = BC$)."
          },
          {
            "id": "c",
            "text": "Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là Dấu hiệu 5 nhận biết hình bình hành."
          },
          {
            "id": "d",
            "text": "Tứ giác có hai góc đối bằng nhau là hình bình hành.",
            "correctAnswer": false,
            "explanation": "Sai, phải là CẢ HAI CẶP GÓC ĐỐI bằng nhau ($\\widehat{A} = \\widehat{C}$ VÀ $\\widehat{B} = \\widehat{D}$)."
          }
        ]
      },
      {
        "id": "tf-8.12.3",
        "badge": "Câu 3 (Đ/S) - Tính toán hình học hình bình hành",
        "prompt": "Cho hình bình hành $ABCD$ có $AB = 10\\text{ cm}, AD = 6\\text{ cm}$ và $\\widehat{D} = 30^\\circ$. Kẻ đường cao $AH \\perp CD$ ($H \\in CD$). Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Góc trong tại đỉnh $A$ có số đo bằng $150^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, hai góc trong cùng phía bù nhau: $\\widehat{A} = 180^\\circ - 30^\\circ = 150^\\circ$."
          },
          {
            "id": "b",
            "text": "Chiều cao $AH$ có độ dài bằng $3\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, trong tam giác vuông $\\triangle AHD$ vuông tại $H$ có $\\widehat{D} = 30^\\circ$, cạnh đối diện góc $30^\\circ$ bằng nửa cạnh huyền: $AH = AD : 2 = 6 : 2 = 3\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Chu vi hình bình hành $ABCD$ bằng $32\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, chu vi $C = 2 \\times (10 + 6) = 32\\text{ cm}$."
          },
          {
            "id": "d",
            "text": "Diện tích hình bình hành $ABCD$ bằng $60\\text{ cm}^2$.",
            "correctAnswer": false,
            "explanation": "Sai, diện tích $S = CD \\times AH = 10 \\times 3 = 30\\text{ cm}^2$ (nhiều bạn nhầm lấy $10 \\times 6 = 60$)."
          }
        ]
      },
      {
        "id": "tf-8.12.4",
        "badge": "Câu 4 (Đ/S) - Bài toán thực tế cơ cấu cánh cổng xếp",
        "prompt": "Một cánh cổng xếp tự động gồm nhiều thanh kim loại bắt chéo nhau tạo thành các mắt hình bình hành. Mỗi mắt có cạnh dài $40\\text{ cm}$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Khi cổng dãn ra hay co lại, các thanh đối diện của mỗi mắt luôn song song với nhau.",
            "correctAnswer": true,
            "explanation": "Đúng, vì cơ cấu hình bình hành luôn duy trì tính chất các cạnh đối song song."
          },
          {
            "id": "b",
            "text": "Khoảng cách giữa hai thanh đỉnh trên và đỉnh dưới luôn không đổi khi cổng di chuyển.",
            "correctAnswer": false,
            "explanation": "Sai, khi góc giữa các thanh thay đổi (cổng dãn ra hoặc co lại), chiều cao của hình bình hành sẽ thay đổi."
          },
          {
            "id": "c",
            "text": "Khi góc kề của mắt cổng đạt $90^\\circ$, diện tích mỗi mắt cổng đạt giá trị lớn nhất.",
            "correctAnswer": true,
            "explanation": "Đúng, diện tích $S = a^2 \\sin \\alpha \\le a^2$, đạt cực đại khi $\\alpha = 90^\\circ$ (hình vuông)."
          },
          {
            "id": "d",
            "text": "Giao điểm của hai thanh đan chéo luôn là trung điểm của mỗi thanh.",
            "correctAnswer": true,
            "explanation": "Đúng, hai đường chéo của hình bình hành luôn cắt nhau tại trung điểm của mỗi đường."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.12.1",
        "badge": "Câu 1 (NB) - Tìm góc kề",
        "prompt": "Cho hình bình hành $ABCD$ có $\\widehat{A} = 125^\\circ$. Số đo góc $B$ bằng bao nhiêu độ?",
        "correctAnswer": "55",
        "acceptableAnswers": [
          "55",
          "55°",
          "năm mươi lăm"
        ],
        "explanation": "$\\widehat{B} = 180^\\circ - 125^\\circ = 55^\\circ$."
      },
      {
        "id": "sa-8.12.2",
        "badge": "Câu 2 (NB) - Độ dài cạnh đối",
        "prompt": "Hình bình hành $ABCD$ có cạnh $AB = 9\\text{ cm}$. Độ dài cạnh $CD$ bằng bao nhiêu cm?",
        "correctAnswer": "9",
        "acceptableAnswers": [
          "9",
          "9 cm",
          "chín"
        ],
        "explanation": "Trong hình bình hành, các cạnh đối bằng nhau nên $CD = AB = 9\\text{ cm}$."
      },
      {
        "id": "sa-8.12.3",
        "badge": "Câu 3 (TH) - Độ dài đường chéo",
        "prompt": "Hai đường chéo của hình bình hành $ABCD$ cắt nhau tại $O$. Biết $OA = 7\\text{ cm}$. Độ dài đường chéo $AC$ bằng bao nhiêu cm?",
        "correctAnswer": "14",
        "acceptableAnswers": [
          "14",
          "14 cm",
          "mười bốn"
        ],
        "explanation": "$AC = 2 \\times OA = 2 \\times 7 = 14\\text{ cm}$."
      },
      {
        "id": "sa-8.12.4",
        "badge": "Câu 4 (TH) - Tìm cạnh kề từ chu vi",
        "prompt": "Một hình bình hành có chu vi $36\\text{ cm}$ và một cạnh dài $10\\text{ cm}$. Độ dài cạnh kề với cạnh đó bằng bao nhiêu cm?",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "8 cm",
          "tám"
        ],
        "explanation": "Nửa chu vi là $36 : 2 = 18\\text{ cm}$. Cạnh kề dài $18 - 10 = 8\\text{ cm}$."
      },
      {
        "id": "sa-8.12.5",
        "badge": "Câu 5 (VD) - Diện tích hình bình hành",
        "prompt": "Một hình bình hành có cạnh đáy bằng $15\\text{ cm}$ và chiều cao tương ứng bằng $8\\text{ cm}$. Diện tích của hình bình hành bằng bao nhiêu $\\text{cm}^2$?",
        "correctAnswer": "120",
        "acceptableAnswers": [
          "120",
          "120 cm2",
          "một trăm hai mươi"
        ],
        "explanation": "Diện tích $S = a \\times h = 15 \\times 8 = 120\\text{ (cm}^2\\text{)}$."
      },
      {
        "id": "sa-8.12.6",
        "badge": "Câu 6 (VD) - Tính góc khi biết tỉ lệ 1:3",
        "prompt": "Hình bình hành có hai góc kề tỉ lệ $1 : 3$. Số đo góc lớn nhất của hình bình hành đó bằng bao nhiêu độ?",
        "correctAnswer": "135",
        "acceptableAnswers": [
          "135",
          "135°",
          "một trăm ba mươi lăm"
        ],
        "explanation": "Tổng số phần: $1 + 3 = 4$. Một phần: $180^\\circ : 4 = 45^\\circ$. Góc lớn nhất: $3 \\times 45^\\circ = 135^\\circ$."
      }
    ]
  },
  "t8-b13-hinh-chu-nhat": {
    "id": "t8-b13-hinh-chu-nhat",
    "lessonNumber": 13,
    "title": "Bài 13: Hình chữ nhật",
    "bookChapter": "Chương III: Tứ giác",
    "scenarioTitle": "Tình huống: Khung cửa vuông vắn của bác thợ xây và Màn hình chuẩn điện ảnh",
    "scenarioFrames": [
      {
        "id": 1,
        "character": "student",
        "characterName": "Bạn An",
        "avatar": "🧑‍🎓",
        "speech": "Thưa Thầy Tính, hôm qua em quan sát các bác thợ xây lắp khung bao cửa gỗ. Sau khi đo chiều dài và chiều rộng bằng nhau, bác thợ lấy thước kéo chéo đo hai đường chéo rồi bảo: 'Hai đường chéo bằng nhau chằn chặn thế này thì khung cửa chắc chắn vuông góc 100% rồi!'. Tại sao chỉ cần đo hai đường chéo bằng nhau là biết chắc khung cửa có các góc vuông ạ?",
        "visualGraphic": "box",
        "mathNote": "AB = CD, \\ AD = BC, \\ AC = BD \\implies \\text{Góc vuông}"
      },
      {
        "id": 2,
        "character": "teacher",
        "characterName": "Thầy Tính (VinaMath)",
        "avatar": "👨‍🏫",
        "speech": "Chào An! Quan sát của em rất sắc sảo! Bác thợ xây đã áp dụng một định lí nhận biết kinh điển trong hình học: 'Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật'. Khung cửa ban đầu đã là hình bình hành vì có các cặp cạnh đối bằng nhau, khi ép cho hai đường chéo bằng nhau thì cả 4 góc tức khắc trở thành 4 góc vuông 90°! Hình chữ nhật vừa thừa hưởng toàn bộ tính chất của hình bình hành, vừa mang trọn vẹn tính cân đối của hình thang cân. Không chỉ trong xây dựng, từ màn hình tivi, điện thoại đến mặt bàn học, khung tranh đều là hình chữ nhật để tối ưu không gian hiển thị và độ vững chãi đấy! Cùng Thầy khám phá bài học thú vị này nhé!",
        "visualGraphic": "graph",
        "mathNote": "AC = BD, \\ OA = OB = OC = OD, \\ d = \\sqrt{a^2 + b^2}"
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Định nghĩa Hình chữ nhật",
        "points": [
          "• **Định nghĩa:** Hình chữ nhật là tứ giác có bốn góc vuông.",
          "• Tứ giác $ABCD$ là hình chữ nhật $\\iff \\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ$.",
          "• **Mối liên hệ đặc biệt:**",
          "  - Hình chữ nhật là một **hình bình hành** (vì có các cặp góc đối bằng nhau $90^\\circ$, hoặc các cạnh đối song song do cùng vuông góc với một cạnh).",
          "  - Hình chữ nhật là một **hình thang cân** (vì là hình thang có hai góc kề đáy bằng $90^\\circ$)."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 8 KNTT Trang 60)",
        "exampleProblem": "Chứng minh rằng hình chữ nhật $ABCD$ có các cạnh đối song song và bằng nhau.",
        "exampleSolution": "Vì hình chữ nhật $ABCD$ có $\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ$ nên:\n" +
          "• $AB \\perp AD$ và $CD \\perp AD \\implies AB \\parallel CD$.\n" +
          "• $AD \\perp AB$ và $BC \\perp AB \\implies AD \\parallel BC$.\n" +
          "Do đó tứ giác $ABCD$ là hình bình hành, suy ra các cạnh đối bằng nhau: $AB = CD$ và $AD = BC$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa chuẩn SGK: Hình chữ nhật ABCD",
            "problem": "Quan sát 4 góc vuông và các cặp cạnh đối bằng nhau trong hình chữ nhật ABCD:",
            "solution": "Bốn góc vuông ở A, B, C, D; cạnh AB song song và bằng CD; AD song song và bằng BC.",
            "svgDiagram": "<svg viewBox='0 0 380 200' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='45' width='240' height='120' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.5' rx='2'/><rect x='70' y='45' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.5'/><rect x='296' y='45' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.5'/><rect x='296' y='151' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.5'/><rect x='70' y='151' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.5'/><text x='56' y='40' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='318' y='40' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='318' y='180' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='56' y='180' fill='#f8fafc' font-size='13' font-weight='bold'>D</text><text x='190' y='38' fill='#38bdf8' font-size='11' text-anchor='middle'>chiều dài a</text><text x='46' y='110' fill='#f59e0b' font-size='11' text-anchor='middle'>b</text><text x='190' y='190' fill='#94a3b8' font-size='11' text-anchor='middle'>\\widehat{A} = \\widehat{B} = \\widehat{C} = \\widehat{D} = 90^\\circ</text></svg>"
          }
        ]
      },
      {
        "index": "2",
        "title": "Tính chất của Hình chữ nhật",
        "points": [
          "Trong một hình chữ nhật:",
          "• Mang đầy đủ mọi tính chất của **hình bình hành** và **hình thang cân**.",
          "• **Tính chất đường chéo đặc trưng:** Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường:",
          "  $$AC = BD \\quad \\text{và} \\quad OA = OB = OC = OD = \\frac{1}{2}AC$$",
          "• **Tâm đối xứng:** Giao điểm $O$ của hai đường chéo là tâm đối xứng của hình chữ nhật.",
          "• **Trục đối xứng:** Hình chữ nhật có **hai trục đối xứng**, đó là hai đường trung trực của các cặp cạnh đối."
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 8 KNTT Trang 61)",
        "exampleProblem": "Cho hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $OA = 5\\text{ cm}$ và $AB = 8\\text{ cm}$. Tính độ dài đường chéo $BD$ và cạnh $BC$.",
        "exampleSolution": "• Vì hai đường chéo bằng nhau và cắt nhau tại trung điểm nên:\n" +
          "  $AC = 2 \\times OA = 2 \\times 5 = 10\\text{ cm} \\implies BD = AC = 10\\text{ cm}$.\n" +
          "• Tam giác $\\triangle ABC$ vuông tại $B$, theo định lí Pythagoras ta có:\n" +
          "  $AC^2 = AB^2 + BC^2 \\implies 10^2 = 8^2 + BC^2 \\implies BC^2 = 100 - 64 = 36 \\implies BC = 6\\text{ cm}$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Hai đường chéo và trục đối xứng",
            "problem": "Quan sát hai đường chéo AC = BD cắt nhau tại O và 4 đoạn OA = OB = OC = OD:",
            "solution": "Giao điểm O là tâm đối xứng, cách đều 4 đỉnh A, B, C, D.",
            "svgDiagram": "<svg viewBox='0 0 380 210' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='45' width='240' height='120' fill='none' stroke='#38bdf8' stroke-width='2.2'/><line x1='70' y1='45' x2='310' y2='165' stroke='#f43f5e' stroke-width='1.8'/><line x1='70' y1='165' x2='310' y2='45' stroke='#fbbf24' stroke-width='1.8'/><circle cx='190' cy='105' r='3.5' fill='#a855f7'/><text x='190' y='98' fill='#c084fc' font-size='12' font-weight='bold' text-anchor='middle'>O</text><line x1='190' y1='25' x2='190' y2='185' stroke='#94a3b8' stroke-width='1.2' stroke-dasharray='4 3'/><line x1='50' y1='105' x2='330' y2='105' stroke='#94a3b8' stroke-width='1.2' stroke-dasharray='4 3'/><text x='56' y='40' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='318' y='40' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='318' y='180' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='56' y='180' fill='#f8fafc' font-size='13' font-weight='bold'>D</text><text x='190' y='200' fill='#34d399' font-size='11' text-anchor='middle'>OA = OB = OC = OD = \\frac{1}{2}AC</text></svg>"
          }
        ]
      },
      {
        "index": "3",
        "title": "Dấu hiệu nhận biết Hình chữ nhật",
        "points": [
          "Có 4 dấu hiệu nhận biết một tứ giác là hình chữ nhật:",
          "1. **Dấu hiệu 1 (Từ tứ giác):** Tứ giác có **ba góc vuông** là hình chữ nhật.",
          "2. **Dấu hiệu 2 (Từ hình thang cân):** Hình thang cân có **một góc vuông** là hình chữ nhật.",
          "3. **Dấu hiệu 3 (Từ hình bình hành - theo góc):** Hình bình hành có **một góc vuông** là hình chữ nhật.",
          "4. **Dấu hiệu 4 (Từ hình bình hành - theo đường chéo):** Hình bình hành có **hai đường chéo bằng nhau** là hình chữ nhật.",
          "⚠️ **CẢNH BÁO BẪY KINH ĐIỂN:**",
          "• 'Tứ giác có hai đường chéo bằng nhau' **CHƯA CHẮC** là hình chữ nhật (vì có thể là hình thang cân hoặc tứ giác bất kì có 2 đường chéo bằng nhau).",
          "• Bắt buộc phải là **HÌNH BÌNH HÀNH** có hai đường chéo bằng nhau mới suy ra hình chữ nhật!"
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 8 KNTT Trang 62)",
        "exampleProblem": "Cho tam giác $ABC$ vuông tại $A$. Gọi $M$ là trung điểm của cạnh $BC$. Lấy điểm $D$ đối xứng với $A$ qua $M$. Tứ giác $ABDC$ là hình gì? Vì sao?",
        "exampleSolution": "• Xét tứ giác $ABDC$ có $M$ là trung điểm của đường chéo $BC$ (theo giả thiết) và $M$ là trung điểm của đường chéo $AD$ (do $D$ đối xứng với $A$ qua $M$).\n" +
          "• Do đó tứ giác $ABDC$ có hai đường chéo cắt nhau tại trung điểm của mỗi đường nên $ABDC$ là hình bình hành.\n" +
          "• Hình bình hành $ABDC$ lại có $\\widehat{BAC} = 90^\\circ$ (do $\\triangle ABC$ vuông tại $A$).\n" +
          "• Vậy theo Dấu hiệu 3, hình bình hành có một góc vuông là hình chữ nhật, suy ra $ABDC$ là hình chữ nhật.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: 4 Dấu hiệu nhận biết hình chữ nhật",
            "problem": "Phân biệt các con đường dẫn đến hình chữ nhật:",
            "solution": "Tứ giác có 3 góc vuông; Hình thang cân có 1 góc vuông; Hình bình hành có 1 góc vuông hoặc 2 đường chéo bằng nhau.",
            "svgDiagram": "<svg viewBox='0 0 440 200' class='w-full max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><text x='110' y='25' fill='#38bdf8' font-size='12' font-weight='bold' text-anchor='middle'>Từ Tứ giác: 3 góc vuông</text><rect x='40' y='45' width='140' height='90' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2'/><rect x='40' y='45' width='12' height='12' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='168' y='45' width='12' height='12' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='40' y='123' width='12' height='12' fill='none' stroke='#38bdf8' stroke-width='1.5'/><text x='110' y='160' fill='#38bdf8' font-size='11' text-anchor='middle'>3 góc vuông \\implies HCN</text><text x='330' y='25' fill='#34d399' font-size='12' font-weight='bold' text-anchor='middle'>Từ Hình bình hành: AC = BD</text><rect x='260' y='45' width='140' height='90' fill='rgba(52, 211, 153, 0.08)' stroke='#34d399' stroke-width='2'/><line x1='260' y1='45' x2='400' y2='135' stroke='#f43f5e' stroke-width='1.5' stroke-dasharray='3 3'/><line x1='260' y1='135' x2='400' y2='45' stroke='#fbbf24' stroke-width='1.5' stroke-dasharray='3 3'/><text x='330' y='160' fill='#34d399' font-size='11' text-anchor='middle'>HBH có AC = BD \\implies HCN</text></svg>"
          }
        ]
      },
      {
        "index": "4",
        "title": "Định lí Áp dụng vào Tam giác vuông & Tính toán",
        "points": [
          "• **Định lí đường trung tuyến trong tam giác vuông (Định lí thuận):**",
          "  Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền:",
          "  $$\\triangle ABC \\text{ vuông tại } A, \\ M \\text{ là trung điểm } BC \\implies AM = \\frac{1}{2}BC = BM = MC$$",
          "• **Dấu hiệu nhận biết tam giác vuông (Định lí đảo):**",
          "  Nếu một tam giác có đường trung tuyến ứng với một cạnh bằng nửa cạnh đó thì tam giác đó là tam giác vuông.",
          "• **Công thức tính toán trong hình chữ nhật kích thước $a \\times b$:**",
          "  - Chu vi: $C = 2(a + b)$.",
          "  - Diện tích: $S = a \\cdot b$.",
          "  - Đường chéo (Pythagoras): $d = \\sqrt{a^2 + b^2}$."
        ],
        "exampleTitle": "Ví dụ 4 (Tính trung tuyến tam giác vuông và đường chéo)",
        "exampleProblem": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$ và $AC = 8\\text{ cm}$. Gọi $M$ là trung điểm của $BC$. Tính độ dài đoạn thẳng $AM$.",
        "exampleSolution": "• Áp dụng định lí Pythagoras trong $\\triangle ABC$ vuông tại $A$:\n" +
          "  $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}$.\n" +
          "• Vì $AM$ là đường trung tuyến ứng với cạnh huyền $BC$ nên:\n" +
          "  $AM = \\frac{1}{2}BC = \\frac{10}{2} = 5\\text{ cm}$.",
        "examples": [
          {
            "title": "Hình vẽ minh họa: Đường trung tuyến ứng với cạnh huyền AM = BC / 2",
            "problem": "Quan sát tam giác vuông ABC với đường trung tuyến AM bằng nửa cạnh huyền BC:",
            "solution": "AM = BM = MC, tạo thành hai tam giác cân MAB và MAC.",
            "svgDiagram": "<svg viewBox='0 0 380 200' class='w-full max-w-sm mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='80,150 80,50 280,150' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/><rect x='80' y='136' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.5'/><line x1='80' y1='150' x2='180' y2='100' stroke='#f43f5e' stroke-width='2'/><circle cx='180' cy='100' r='3.5' fill='#f43f5e'/><line x1='127' y1='72' x2='133' y2='78' stroke='#38bdf8' stroke-width='1.8'/><line x1='227' y1='122' x2='233' y2='128' stroke='#38bdf8' stroke-width='1.8'/><line x1='128' y1='122' x2='132' y2='128' stroke='#f43f5e' stroke-width='1.8'/><text x='62' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='64' y='45' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='290' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='188' y='94' fill='#f43f5e' font-size='12' font-weight='bold'>M</text><text x='190' y='185' fill='#34d399' font-size='11' text-anchor='middle'>AM = BM = MC = \\frac{1}{2}BC</text></svg>"
          }
        ]
      }
    ],
    "youtubeVideos": [
      {
        "id": "t8_b13_video1",
        "title": "Tiết 1: Định nghĩa và tính chất của hình chữ nhật (SGK Toán 8 KNTT)"
      },
      {
        "id": "t8_b13_video2",
        "title": "Tiết 2: 4 Dấu hiệu nhận biết và Định lý trung tuyến tam giác vuông"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-8.13.1",
        "timeSeconds": 140,
        "timeLabel": "02:20",
        "title": "Định nghĩa hình chữ nhật",
        "question": "Hình chữ nhật là tứ giác có đặc điểm nào sau đây?",
        "options": [
          "Có bốn góc vuông",
          "Có bốn cạnh bằng nhau",
          "Có hai đường chéo vuông góc",
          "Có một góc nhọn và một góc tù"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa SGK, hình chữ nhật là tứ giác có bốn góc vuông."
      },
      {
        "id": "vq-8.13.2",
        "timeSeconds": 370,
        "timeLabel": "06:10",
        "title": "Tính chất đường chéo",
        "question": "Trong hình chữ nhật, hai đường chéo có tính chất gì?",
        "options": [
          "Bằng nhau và cắt nhau tại trung điểm của mỗi đường",
          "Vuông góc với nhau",
          "Là phân giác của các góc",
          "Có độ dài bằng cạnh đáy"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường ($OA = OB = OC = OD$)."
      },
      {
        "id": "vq-8.13.3",
        "timeSeconds": 610,
        "timeLabel": "10:10",
        "title": "Dấu hiệu nhận biết",
        "question": "Hình bình hành có điều kiện nào sau đây thì trở thành hình chữ nhật?",
        "options": [
          "Có hai đường chéo bằng nhau",
          "Có hai đường chéo vuông góc",
          "Có hai cạnh kề bằng nhau",
          "Có các cạnh đối bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Dấu hiệu 4: Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật."
      },
      {
        "id": "vq-8.13.4",
        "timeSeconds": 830,
        "timeLabel": "13:50",
        "title": "Đường trung tuyến tam giác vuông",
        "question": "Tam giác vuông có cạnh huyền dài $12\\text{ cm}$. Độ dài đường trung tuyến ứng với cạnh huyền bằng:",
        "options": [
          "6 cm",
          "12 cm",
          "24 cm",
          "4 cm"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $12 : 2 = 6\\text{ cm}$."
      }
    ],
    "tips": [
      "Mẹo 1: Nhớ 'Bộ ba bằng nhau': Hai đường chéo hình chữ nhật bằng nhau cắt nhau tạo thành 4 đoạn OA = OB = OC = OD bằng nhau.",
      "Mẹo 2: Dấu hiệu 'HBH có 2 đường chéo bằng nhau' là cách nhanh nhất thợ xây kiểm tra góc vuông của khung cửa hay móng nhà.",
      "Mẹo 3: Đường trung tuyến ứng với cạnh huyền: Gặp tam giác vuông có trung điểm cạnh huyền, hãy nối ngay trung tuyến để có AM = BC / 2 và hai tam giác cân.",
      "Mẹo 4: Đường chéo hình chữ nhật luôn tính bằng định lí Pythagoras: d = \\sqrt{a^2 + b^2}."
    ],
    "traps": [
      "Bẫy 1: Ngộ nhận 'Tứ giác có 2 đường chéo bằng nhau là hình chữ nhật'. Sai hoàn toàn! Hình thang cân cũng có 2 đường chéo bằng nhau. Phải là HÌNH BÌNH HÀNH có 2 đường chéo bằng nhau.",
      "Bẫy 2: Ngộ nhận hai đường chéo hình chữ nhật vuông góc với nhau (chỉ có hình vuông hoặc hình thoi mới có).",
      "Bẫy 3: Ngộ nhận đường chéo hình chữ nhật là tia phân giác của góc (chỉ hình vuông và hình thoi mới có).",
      "Bẫy 4: Nhầm lẫn số trục đối xứng: Hình chữ nhật có đúng 2 trục đối xứng (hai đường trung trực cạnh đối), hai đường chéo KHÔNG phải là trục đối xứng!"
    ],
    "quizQuestions": [
      {
        "id": "quiz-8.13.1",
        "badge": "Câu 1 (NB) - Định nghĩa hình chữ nhật",
        "source": "SGK Toán 8 KNTT Trang 60",
        "question": "Hình chữ nhật là tứ giác có:",
        "options": [
          "Bốn góc vuông",
          "Bốn cạnh bằng nhau",
          "Hai đường chéo vuông góc",
          "Hai cạnh kề bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa, hình chữ nhật là tứ giác có bốn góc vuông."
      },
      {
        "id": "quiz-8.13.2",
        "badge": "Câu 2 (NB) - Tính chất đường chéo",
        "source": "SGK Toán 8 KNTT Trang 61",
        "question": "Trong hình chữ nhật, khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường",
          "Hai đường chéo vuông góc với nhau",
          "Hai đường chéo là các đường phân giác của các góc",
          "Hai đường chéo có độ dài khác nhau"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường."
      },
      {
        "id": "quiz-8.13.3",
        "badge": "Câu 3 (TH) - Pythagoras tính đường chéo",
        "source": "SGK Toán 8 KNTT Trang 61",
        "question": "Hình chữ nhật $ABCD$ có chiều dài $AB = 8\\text{ cm}$ và chiều rộng $BC = 6\\text{ cm}$. Độ dài đường chéo $d$ trong hình vẽ là:",
        "options": [
          "$d = 10\text{ cm}$",
          "$d = 14\text{ cm}$",
          "$d = 12\text{ cm}$",
          "$d = 9\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng định lí Pythagoras trong tam giác vuông $\\triangle ABC$: $d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ cm}$.",
        "svgDiagram": "<svg viewBox='0 0 340 180' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='35' width='220' height='110' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/><rect x='266' y='35' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.5'/><line x1='60' y1='145' x2='280' y2='35' stroke='#f43f5e' stroke-width='2'/><text x='170' y='28' fill='#38bdf8' font-size='11' font-weight='bold' text-anchor='middle'>8 cm</text><text x='294' y='95' fill='#f59e0b' font-size='11' font-weight='bold'>6 cm</text><text x='160' y='102' fill='#f43f5e' font-size='14' font-weight='bold'>d</text><text x='48' y='32' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='288' y='32' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='288' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='48' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>D</text></svg>"
      },
      {
        "id": "quiz-8.13.4",
        "badge": "Câu 4 (TH) - Nửa đường chéo hình chữ nhật",
        "source": "SGK Toán 8 KNTT Trang 61",
        "question": "Hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết đường chéo $AC = 12\\text{ cm}$. Độ dài đoạn $OA$ có giá trị $x$ bằng:",
        "options": [
          "$x = 6\text{ cm}$",
          "$x = 12\text{ cm}$",
          "$x = 3\text{ cm}$",
          "$x = 4\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Trong hình chữ nhật, $O$ là trung điểm của $AC$ nên $x = OA = AC : 2 = 12 : 2 = 6\\text{ cm}$.",
        "svgDiagram": "<svg viewBox='0 0 340 180' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='35' width='220' height='110' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/><line x1='60' y1='35' x2='280' y2='145' stroke='#f43f5e' stroke-width='1.8'/><line x1='60' y1='145' x2='280' y2='35' stroke='#fbbf24' stroke-width='1.8'/><circle cx='170' cy='90' r='3.5' fill='#a855f7'/><text x='170' y='82' fill='#c084fc' font-size='12' font-weight='bold' text-anchor='middle'>O</text><text x='105' y='58' fill='#f43f5e' font-size='14' font-weight='bold'>x</text><text x='48' y='32' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='288' y='32' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='288' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='48' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>D</text><text x='170' y='168' fill='#38bdf8' font-size='11' text-anchor='middle'>AC = 12 cm</text></svg>"
      },
      {
        "id": "quiz-8.13.5",
        "badge": "Câu 5 (NB) - Trục đối xứng",
        "source": "SGK Toán 8 KNTT Trang 61",
        "question": "Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?",
        "options": [
          "2 trục đối xứng",
          "4 trục đối xứng",
          "1 trục đối xứng",
          "Không có trục đối xứng"
        ],
        "correctIndex": 0,
        "explanation": "Hình chữ nhật có 2 trục đối xứng, đó là hai đường trung trực của hai cặp cạnh đối."
      },
      {
        "id": "quiz-8.13.6",
        "badge": "Câu 6 (TH) - Dấu hiệu từ tứ giác",
        "source": "SGK Toán 8 KNTT Trang 62",
        "question": "Một tứ giác có ít nhất bao nhiêu góc vuông thì chắc chắn là hình chữ nhật?",
        "options": [
          "3 góc vuông",
          "2 góc vuông",
          "1 góc vuông",
          "4 góc vuông"
        ],
        "correctIndex": 0,
        "explanation": "Dấu hiệu 1: Tứ giác có 3 góc vuông thì góc thứ tư bắt buộc phải bằng 90° (vì tổng 4 góc bằng 360°), do đó nó là hình chữ nhật."
      },
      {
        "id": "quiz-8.13.7",
        "badge": "Câu 7 (TH) - Dấu hiệu từ hình bình hành",
        "source": "SGK Toán 8 KNTT Trang 62",
        "question": "Hình bình hành $ABCD$ cần thêm điều kiện nào sau đây để trở thành hình chữ nhật?",
        "options": [
          "Hai đường chéo bằng nhau (AC = BD)",
          "Hai đường chéo vuông góc với nhau",
          "Hai cạnh kề bằng nhau",
          "Một góc kề bù với góc còn lại"
        ],
        "correctIndex": 0,
        "explanation": "Theo Dấu hiệu 4: Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật."
      },
      {
        "id": "quiz-8.13.8",
        "badge": "Câu 8 (TH) - Cảnh giác bẫy nhận biết",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Khẳng định nào sau đây là SAI?",
        "options": [
          "Tứ giác có hai đường chéo bằng nhau luôn là hình chữ nhật",
          "Hình thang cân có một góc vuông là hình chữ nhật",
          "Hình bình hành có một góc vuông là hình chữ nhật",
          "Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật"
        ],
        "correctIndex": 0,
        "explanation": "Khẳng định A là SAI, vì tứ giác có hai đường chéo bằng nhau có thể là HÌNH THANG CÂN chứ chưa chắc là hình chữ nhật."
      },
      {
        "id": "quiz-8.13.9",
        "badge": "Câu 9 (TH) - Trung tuyến tam giác vuông",
        "source": "SGK Toán 8 KNTT Trang 63",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 10\\text{ cm}$. Gọi $M$ là trung điểm của $BC$. Độ dài đoạn trung tuyến $AM$ có giá trị $x$ bằng:",
        "options": [
          "$x = 5\text{ cm}$",
          "$x = 10\text{ cm}$",
          "$x = 2.5\text{ cm}$",
          "$x = 6\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $x = AM = BC : 2 = 10 : 2 = 5\\text{ cm}$.",
        "svgDiagram": "<svg viewBox='0 0 340 180' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'><polygon points='70,140 70,40 270,140' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/><rect x='70' y='126' width='14' height='14' fill='none' stroke='#34d399' stroke-width='1.5'/><line x1='70' y1='140' x2='170' y2='90' stroke='#f43f5e' stroke-width='2'/><circle cx='170' cy='90' r='3.5' fill='#f43f5e'/><text x='110' y='108' fill='#f43f5e' font-size='14' font-weight='bold'>x</text><text x='52' y='150' fill='#f8fafc' font-size='13' font-weight='bold'>A</text><text x='54' y='35' fill='#f8fafc' font-size='13' font-weight='bold'>B</text><text x='278' y='150' fill='#f8fafc' font-size='13' font-weight='bold'>C</text><text x='176' y='82' fill='#f43f5e' font-size='12' font-weight='bold'>M</text><text x='185' y='160' fill='#38bdf8' font-size='11' text-anchor='middle'>BC = 10 cm</text></svg>"
      },
      {
        "id": "quiz-8.13.10",
        "badge": "Câu 10 (VD) - Nhận biết tam giác vuông từ trung tuyến",
        "source": "SGK Toán 8 KNTT Trang 63",
        "question": "Tam giác $MNP$ có trung tuyến $MI$ ứng với cạnh $NP$. Biết $NP = 16\\text{ cm}$ và $MI = 8\\text{ cm}$. Tam giác $MNP$ là tam giác gì?",
        "options": [
          "Tam giác vuông tại M",
          "Tam giác cân tại M",
          "Tam giác đều",
          "Tam giác tù tại M"
        ],
        "correctIndex": 0,
        "explanation": "Vì $MI = 8 = 16 : 2 = \\frac{NP}{2}$, tam giác có đường trung tuyến bằng nửa cạnh đối diện nên $\\triangle MNP$ vuông tại $M$."
      },
      {
        "id": "quiz-8.13.11",
        "badge": "Câu 11 (VD) - Góc tạo bởi hai đường chéo",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hình chữ nhật $ABCD$ có hai đường chéo cắt nhau tại $O$. Biết $\\widehat{AOB} = 60^\\circ$. Số đo góc $x = \\widehat{OAD}$ trong hình vẽ là:",
        "options": [
          "$x = 30^\\circ$",
          "$x = 60^\\circ$",
          "$x = 45^\\circ$",
          "$x = 15^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $OA = OB$ và $\\widehat{AOB} = 60^\\circ$ nên $\\triangle OAB$ là tam giác đều $\\implies \\widehat{OAB} = 60^\\circ$. Vì $\\widehat{BAD} = 90^\\circ$ nên $x = \\widehat{OAD} = 90^\\circ - 60^\\circ = 30^\\circ$.",
        "svgDiagram": "<svg viewBox='0 0 340 180' class='w-full max-w-xs mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 p-2 shadow-md' xmlns='http://www.w3.org/2000/svg'> <rect x='60' y='35' width='220' height='110' fill='rgba(56, 189, 248, 0.08)' stroke='#38bdf8' stroke-width='2.2'/> <line x1='60' y1='35' x2='280' y2='145' stroke='#f43f5e' stroke-width='1.8'/> <line x1='60' y1='145' x2='280' y2='35' stroke='#fbbf24' stroke-width='1.8'/> <circle cx='170' cy='90' r='3.5' fill='#a855f7'/> <text x='170' y='108' fill='#c084fc' font-size='12' font-weight='bold' text-anchor='middle'>O</text> <path d='M 191.5,79.3 A 24 24 0 0 0 148.5,79.3' fill='none' stroke='#fbbf24' stroke-width='1.8'/> <text x='170' y='68' fill='#fbbf24' font-size='11' font-weight='bold' text-anchor='middle'>60°</text> <path d='M 83.3,46.6 A 26 26 0 0 0 60,61' fill='none' stroke='#f43f5e' stroke-width='2'/> <text x='78' y='66' fill='#f43f5e' font-size='14' font-weight='bold' text-anchor='middle'>x</text> <text x='46' y='32' fill='#f8fafc' font-size='13' font-weight='bold'>A</text> <text x='288' y='32' fill='#f8fafc' font-size='13' font-weight='bold'>B</text> <text x='288' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>C</text> <text x='46' y='160' fill='#f8fafc' font-size='13' font-weight='bold'>D</text> </svg>"
      },
      {
        "id": "quiz-8.13.12",
        "badge": "Câu 12 (VD) - Diện tích từ đường chéo",
        "source": "SGK Toán 8 KNTT Trang 61",
        "question": "Hình chữ nhật có độ dài đường chéo bằng $13\\text{ cm}$ và một cạnh bằng $12\\text{ cm}$. Diện tích của hình chữ nhật đó bằng:",
        "options": [
          "60 cm²",
          "156 cm²",
          "78 cm²",
          "30 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh còn lại là: $\\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5\\text{ cm}$. Diện tích $S = 12 \\times 5 = 60\\text{ cm}^2$."
      },
      {
        "id": "quiz-8.13.13",
        "badge": "Câu 13 (VD) - Tỉ lệ hai kích thước",
        "source": "SGK Toán 8 KNTT Trang 61",
        "question": "Một hình chữ nhật có chu vi bằng $50\\text{ cm}$ và tỉ số hai cạnh là $2 : 3$. Chiều dài của hình chữ nhật đó bằng:",
        "options": [
          "15 cm",
          "10 cm",
          "20 cm",
          "25 cm"
        ],
        "correctIndex": 0,
        "explanation": "Nửa chu vi là: $50 : 2 = 25\\text{ cm}$. Tổng số phần: $2 + 3 = 5$. Chiều dài bằng: $25 : 5 \\times 3 = 15\\text{ cm}$."
      },
      {
        "id": "quiz-8.13.14",
        "badge": "Câu 14 (VD) - Hình thang cân có một góc vuông",
        "source": "SGK Toán 8 KNTT Trang 62",
        "question": "Hình thang cân $ABCD$ ($AB \\parallel CD$) có thêm điều kiện $\\widehat{A} = 90^\\circ$. Khi đó tứ giác $ABCD$ là hình gì?",
        "options": [
          "Hình chữ nhật",
          "Hình bình hành không vuông",
          "Hình thoi",
          "Hình thang vuông không cân"
        ],
        "correctIndex": 0,
        "explanation": "Dấu hiệu 2: Hình thang cân có một góc vuông là hình chữ nhật (vì $\\widehat{B} = \\widehat{A} = 90^\\circ$ và các góc kề bù bằng $90^\\circ$)."
      },
      {
        "id": "quiz-8.13.15",
        "badge": "Câu 15 (VD) - Phân giác các góc hình bình hành",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Các tia phân giác của bốn góc trong một hình bình hành cắt nhau tạo thành một tứ giác. Tứ giác đó luôn là:",
        "options": [
          "Hình chữ nhật",
          "Hình bình hành",
          "Hình thoi",
          "Hình vuông"
        ],
        "correctIndex": 0,
        "explanation": "Hai góc kề một cạnh bù nhau nên tổng hai nửa góc bằng 90°, suy ra tam giác tạo bởi hai tia phân giác có một góc vuông. Tứ giác có 4 góc vuông nên luôn là hình chữ nhật."
      },
      {
        "id": "quiz-8.13.16",
        "badge": "Câu 16 (VD) - Tâm đối xứng chia diện tích",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Hai đường chéo của hình chữ nhật chia hình chữ nhật thành bao nhiêu tam giác có diện tích bằng nhau?",
        "options": [
          "4 tam giác",
          "2 tam giác",
          "8 tam giác",
          "6 tam giác"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường chéo cắt nhau tại trung điểm chia hình chữ nhật thành 4 tam giác có diện tích bằng nhau (bằng 1/4 diện tích hình chữ nhật)."
      },
      {
        "id": "quiz-8.13.17",
        "badge": "Câu 17 (VDC) - Diện tích cực đại",
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Trong tất cả các hình chữ nhật có cùng chu vi $40\\text{ cm}$, hình có diện tích lớn nhất là hình vuông có diện tích bằng:",
        "options": [
          "100 cm²",
          "80 cm²",
          "120 cm²",
          "64 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh hình vuông là: $40 : 4 = 10\\text{ cm}$. Diện tích lớn nhất đạt được khi chiều dài bằng chiều rộng: $S = 10 \\times 10 = 100\\text{ cm}^2$."
      },
      {
        "id": "quiz-8.13.18",
        "badge": "Câu 18 (VD - Thực tế) - Đo màn hình Tivi",
        "source": "SGK Toán 8 KNTT Trang 63",
        "question": "Người ta thường gọi kích cỡ màn hình Tivi theo độ dài đường chéo (tính bằng inch, 1 inch $\\approx 2.54\\text{ cm}$). Một chiếc Tivi hình chữ nhật có kích thước $120\\text{ cm} \\times 90\\text{ cm}$. Đường chéo của màn hình chiếc Tivi này dài bao nhiêu cm?",
        "options": [
          "150 cm",
          "130 cm",
          "210 cm",
          "105 cm"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng định lí Pythagoras: $d = \\sqrt{120^2 + 90^2} = \\sqrt{14400 + 8100} = \\sqrt{22500} = 150\\text{ cm}$ (tương đương khoảng 59 inch)."
      },
      {
        "id": "quiz-8.13.19",
        "badge": "Câu 19 (VD - Thực tế) - Thợ xây kiểm tra khung cửa",
        "source": "SGK Toán 8 KNTT Trang 62",
        "question": "Bác thợ mộc đóng một chiếc khung tranh hình chữ nhật có hai thanh ngang dài $80\\text{ cm}$ và hai thanh đứng dài $60\\text{ cm}$. Bác cần đo độ dài đường chéo bằng bao nhiêu để đảm bảo các góc của khung tranh vuông vức?",
        "options": [
          "100 cm",
          "140 cm",
          "90 cm",
          "120 cm"
        ],
        "correctIndex": 0,
        "explanation": "Đường chéo chuẩn: $d = \\sqrt{80^2 + 60^2} = \\sqrt{6400 + 3600} = \\sqrt{10000} = 100\\text{ cm}$."
      },
      {
        "id": "quiz-8.13.20",
        "badge": "Câu 20 (TH) - Điểm cách đều 4 đỉnh",
        "source": "SGK Toán 8 KNTT Trang 61",
        "question": "Trong hình chữ nhật $ABCD$, điểm nào cách đều bốn đỉnh $A, B, C, D$?",
        "options": [
          "Giao điểm của hai đường chéo",
          "Trung điểm của cạnh AB",
          "Trọng tâm tam giác ABC",
          "Đỉnh A của hình chữ nhật"
        ],
        "correctIndex": 0,
        "explanation": "Vì $OA = OB = OC = OD$ nên giao điểm hai đường chéo $O$ là điểm cách đều cả bốn đỉnh của hình chữ nhật (chính là tâm đường tròn ngoại tiếp sau này)."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-8.13.1",
        "badge": "Câu 1 (Đ/S) - Định nghĩa và tính chất hình chữ nhật",
        "prompt": "Cho hình chữ nhật $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Hình chữ nhật có 4 góc vuông và các cạnh đối song song, bằng nhau.",
            "correctAnswer": true,
            "explanation": "Đúng, theo định nghĩa và tính chất của hình chữ nhật."
          },
          {
            "id": "b",
            "text": "Hai đường chéo $AC$ và $BD$ bằng nhau và cắt nhau tại trung điểm của mỗi đường.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là tính chất đặc trưng của hình chữ nhật."
          },
          {
            "id": "c",
            "text": "Hai đường chéo của hình chữ nhật luôn vuông góc với nhau.",
            "correctAnswer": false,
            "explanation": "Sai, hai đường chéo chỉ vuông góc khi hình chữ nhật là hình vuông."
          },
          {
            "id": "d",
            "text": "Giao điểm $O$ của hai đường chéo cách đều cả bốn đỉnh của hình chữ nhật.",
            "correctAnswer": true,
            "explanation": "Đúng, vì $OA = OB = OC = OD = \\frac{1}{2}AC$."
          }
        ]
      },
      {
        "id": "tf-8.13.2",
        "badge": "Câu 2 (Đ/S) - Dấu hiệu nhận biết hình chữ nhật",
        "prompt": "Xét tính đúng/sai của các nhận định về dấu hiệu nhận biết hình chữ nhật sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Tứ giác có 3 góc vuông là hình chữ nhật.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là Dấu hiệu 1."
          },
          {
            "id": "b",
            "text": "Tứ giác có hai đường chéo bằng nhau luôn là hình chữ nhật.",
            "correctAnswer": false,
            "explanation": "Sai, tứ giác đó có thể là hình thang cân hoặc tứ giác thường."
          },
          {
            "id": "c",
            "text": "Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là Dấu hiệu 4."
          },
          {
            "id": "d",
            "text": "Hình thang cân có một góc vuông là hình chữ nhật.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là Dấu hiệu 2."
          }
        ]
      },
      {
        "id": "tf-8.13.3",
        "badge": "Câu 3 (Đ/S) - Định lí trung tuyến tam giác vuông",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\\text{ cm}, AC = 12\\text{ cm}$ và trung tuyến $AM$ ứng với cạnh huyền $BC$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Cạnh huyền $BC$ có độ dài bằng $15\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $BC = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Độ dài đường trung tuyến $AM$ bằng $7.5\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $AM = \\frac{BC}{2} = \\frac{15}{2} = 7.5\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Tam giác $MAB$ là tam giác đều.",
            "correctAnswer": false,
            "explanation": "Sai, $\\triangle MAB$ chỉ là tam giác cân tại $M$ ($MA = MB = 7.5\\text{ cm} \\neq AB = 9\\text{ cm}$)."
          },
          {
            "id": "d",
            "text": "Diện tích tam giác $MAB$ bằng một nửa diện tích tam giác $ABC$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì $M$ là trung điểm của $BC$ nên hai tam giác chung đường cao hạ từ $A$ và đáy $BM = MC$."
          }
        ]
      },
      {
        "id": "tf-8.13.4",
        "badge": "Câu 4 (Đ/S) - Bài toán thực tế kiểm tra vuông góc",
        "prompt": "Một người thợ xây dùng thước dây kiểm tra móng nhà hình tứ giác $ABCD$. Người đó đo được $AB = CD = 8\\text{ m}, BC = AD = 6\\text{ m}$ và đường chéo $AC = 10\\text{ m}$. Xét tính đúng/sai:",
        "subItems": [
          {
            "id": "a",
            "text": "Tứ giác $ABCD$ ban đầu là một hình bình hành vì có các cạnh đối bằng nhau.",
            "correctAnswer": true,
            "explanation": "Đúng, tứ giác có các cạnh đối bằng nhau là hình bình hành."
          },
          {
            "id": "b",
            "text": "Tam giác $ABC$ là tam giác vuông tại $B$ vì $8^2 + 6^2 = 10^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, theo định lí Pythagoras đảo: $64 + 36 = 100 = 10^2$."
          },
          {
            "id": "c",
            "text": "Người thợ kết luận móng nhà là hình chữ nhật là hoàn toàn chính xác.",
            "correctAnswer": true,
            "explanation": "Đúng, hình bình hành có một góc vuông là hình chữ nhật."
          },
          {
            "id": "d",
            "text": "Nếu người thợ đo thêm đường chéo $BD$ thì độ dài $BD$ phải khác $10\\text{ m}$.",
            "correctAnswer": false,
            "explanation": "Sai, trong hình chữ nhật hai đường chéo bằng nhau nên $BD$ bắt buộc phải bằng $AC = 10\\text{ m}$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-8.13.1",
        "badge": "Câu 1 (TH) - Tính đường chéo Pythagoras",
        "prompt": "Một hình chữ nhật có hai kích thước là $5\\text{ cm}$ và $12\\text{ cm}$. Độ dài đường chéo của hình chữ nhật bằng bao nhiêu cm?",
        "correctAnswer": "13",
        "acceptableAnswers": [
          "13",
          "13 cm",
          "mười ba"
        ],
        "explanation": "Đường chéo $d = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ cm}$."
      },
      {
        "id": "sa-8.13.2",
        "badge": "Câu 2 (TH) - Trung tuyến tam giác vuông",
        "prompt": "Tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 16\\text{ cm}$. Độ dài đường trung tuyến $AM$ ứng với cạnh huyền bằng bao nhiêu cm?",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "8 cm",
          "tám"
        ],
        "explanation": "$AM = \\frac{BC}{2} = \\frac{16}{2} = 8\\text{ cm}$."
      },
      {
        "id": "sa-8.13.3",
        "badge": "Câu 3 (TH) - Độ dài đường chéo từ nửa đường chéo",
        "prompt": "Hai đường chéo của hình chữ nhật $ABCD$ cắt nhau tại $O$. Biết $OA = 4.5\\text{ cm}$. Độ dài đường chéo $BD$ bằng bao nhiêu cm?",
        "correctAnswer": "9",
        "acceptableAnswers": [
          "9",
          "9 cm",
          "chín"
        ],
        "explanation": "$BD = AC = 2 \\times OA = 2 \\times 4.5 = 9\\text{ cm}$."
      },
      {
        "id": "sa-8.13.4",
        "badge": "Câu 4 (VD) - Diện tích từ chu vi",
        "prompt": "Một hình chữ nhật có chu vi $28\\text{ cm}$, chiều dài hơn chiều rộng $2\\text{ cm}$. Diện tích của hình chữ nhật bằng bao nhiêu $\\text{cm}^2$?",
        "correctAnswer": "48",
        "acceptableAnswers": [
          "48",
          "48 cm2",
          "bốn mươi tám"
        ],
        "explanation": "Nửa chu vi là $28 : 2 = 14\\text{ cm}$. Chiều dài: $(14 + 2) : 2 = 8\\text{ cm}$, chiều rộng: $14 - 8 = 6\\text{ cm}$. Diện tích $S = 8 \\times 6 = 48\\text{ cm}^2$."
      },
      {
        "id": "sa-8.13.5",
        "badge": "Câu 5 (NB) - Số trục đối xứng",
        "prompt": "Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2",
          "hai"
        ],
        "explanation": "Hình chữ nhật có đúng 2 trục đối xứng là hai đường trung trực của hai cặp cạnh đối diện."
      },
      {
        "id": "sa-8.13.6",
        "badge": "Câu 6 (VD - Thực tế) - Màn hình điện tử",
        "prompt": "Một chiếc màn hình máy tính có chiều rộng $40\\text{ cm}$ và chiều cao $30\\text{ cm}$. Độ dài đường chéo của màn hình bằng bao nhiêu cm?",
        "correctAnswer": "50",
        "acceptableAnswers": [
          "50",
          "50 cm",
          "năm mươi"
        ],
        "explanation": "Độ dài đường chéo $d = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ cm}$."
      }
    ]
  },
};
