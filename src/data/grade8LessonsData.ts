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
  }
};
