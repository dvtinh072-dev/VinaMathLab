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
};
