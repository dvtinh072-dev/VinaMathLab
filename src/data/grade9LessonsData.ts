import type { DetailedLessonData } from "./allGradesLessonsData";

export const GRADE_9_DETAILED_LESSONS: Record<string, DetailedLessonData> = {
  "t9-b1-khai-niem-he-phuong-trinh": {
    "id": "t9-b1-khai-niem-he-phuong-trinh",
    "lessonNumber": 1,
    "title": "Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",
    "bookChapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
    "scenarioTitle": "Tình huống: Tính số tiền mua vé và tọa độ giao điểm trên bản đồ",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Phương trình bậc nhất hai ẩn",
        "points": [
          "Phương trình bậc nhất hai ẩn $x$ và $y$ là hệ thức có dạng:",
          "  $ax + by = c$",
          "  trong đó $a, b, c$ là các số đã biết ($a \\ne 0$ hoặc $b \\ne 0$).",
          "Nghiệm của phương trình:",
          "  Nếu tại $x = x_0$ và $y = y_0$, giá trị hai vế của phương trình bằng nhau thì cặp số $(x_0; y_0)$ được gọi là một nghiệm của phương trình $ax + by = c$.",
          "  Ký hiệu cặp nghiệm là $(x; y) = (x_0; y_0)$."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề Trang 18 & SGK Trang 6)",
        "exampleProblem": "Trong các phương trình: $2x - y = 1;\\ 0x + 2y = 4;\\ 0x + 0y = 5$, phương trình nào là phương trình bậc nhất hai ẩn? Kiểm tra xem cặp số $(1; 1)$ có là nghiệm của $2x - y = 1$ không.",
        "exampleSolution": "• Bước 1 (Nhận biết phương trình): Các phương trình $2x - y = 1$ (hệ số $a = 2, b = -1$) và $0x + 2y = 4$ (hệ số $a = 0, b = 2$) là các phương trình bậc nhất hai ẩn.\n• Bước 2 (Kiểm tra nghiệm): Thay $x = 1, y = 1$ vào vế trái của $2x - y = 1$ được: $2 \\cdot 1 - 1 = 1$ (bằng vế phải). Vậy cặp số $(1; 1)$ là một nghiệm của phương trình."
      },
      {
        "index": "2",
        "title": "Tập nghiệm và biểu diễn hình học",
        "points": [
          "Phương trình bậc nhất hai ẩn luôn có vô số nghiệm.",
          "Trong mặt phẳng toạ độ $Oxy$, tập nghiệm của phương trình $ax + by = c$ được biểu diễn bởi đường thẳng $d: ax + by = c$:",
          "  Nếu $b \\ne 0$: Đường thẳng $d$ có dạng $y = -\\frac{a}{b}x + \\frac{c}{b}$.",
          "  Nếu $b = 0$ ($a \\ne 0$): Đường thẳng $d$ có dạng $x = \\frac{c}{a}$ (song song hoặc trùng với trục $Oy$).",
          "  Nếu $a = 0$ ($b \\ne 0$): Đường thẳng $d$ có dạng $y = \\frac{c}{b}$ (song song hoặc trùng với trục $Ox$)."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề Trang 18 & SGK Trang 7)",
        "exampleProblem": "Viết nghiệm tổng quát của phương trình: a) $2x - y = 3$;  b) $0x + 2y = 4$.",
        "exampleSolution": "• Phương trình $2x - y = 3$: Nghiệm tổng quát là $\\begin{cases} x \\in \\mathbb{R} \\\\ y = 2x - 3 \\end{cases}$ (biểu diễn bởi đường thẳng $y = 2x - 3$).\n• Phương trình $0x + 2y = 4$: Nghiệm tổng quát là $\\begin{cases} x \\in \\mathbb{R} \\\\ y = 2 \\end{cases}$ (biểu diễn bởi đường thẳng $y = 2$ song song trục $Ox$)."
      },
      {
        "index": "3",
        "title": "Hệ hai phương trình bậc nhất hai ẩn",
        "points": [
          "Hệ hai phương trình bậc nhất hai ẩn có dạng tổng quát:",
          "  $\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$",
          "  trong đó mỗi phương trình đều là phương trình bậc nhất hai ẩn.",
          "Nghiệm của hệ:",
          "  Cặp số $(x_0; y_0)$ đồng thời là nghiệm của cả hai phương trình được gọi là một nghiệm của hệ.",
          "  Giải hệ phương trình là tìm tất cả các nghiệm của hệ đó."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 18 & SGK Trang 9)",
        "exampleProblem": "Kiểm tra xem cặp số $(2; 1)$ có là nghiệm của hệ phương trình $\\begin{cases} 2x - y = 3 \\\\ x + 3y = 5 \\end{cases}$ hay không.",
        "exampleSolution": "• Bước 1 (Kiểm tra từng phương trình): Thay $x = 2, y = 1$ vào phương trình thứ nhất: $2(2) - 1 = 3$ (thỏa mãn); thay vào phương trình thứ hai: $2 + 3(1) = 5$ (thỏa mãn).\n• Bước 2 (Kết luận): Cặp số $(2; 1)$ thỏa mãn cả hai phương trình nên $(2; 1)$ là một nghiệm của hệ phương trình đã cho."
      },
      {
        "index": "4",
        "title": "Ý nghĩa hình học về số nghiệm của hệ",
        "points": [
          "Gọi $d: ax + by = c$ và $d': a'x + b'y = c'$. Số nghiệm của hệ bằng số điểm chung của hai đường thẳng $d$ và $d'$:",
          "  $d$ cắt $d'$: Hệ có nghiệm duy nhất (tọa độ giao điểm).",
          "  $d \\parallel d'$: Hệ vô nghiệm (hai đường thẳng song song không có điểm chung).",
          "  $d \\equiv d'$: Hệ có vô số nghiệm (hai đường thẳng trùng nhau)."
        ],
        "exampleTitle": "Ví dụ 4 (Tài liệu chuyên đề Trang 19 & SGK Trang 10)",
        "exampleProblem": "Dự đoán số nghiệm của hệ phương trình $\\begin{cases} x + y = 3 \\\\ x + y = 5 \\end{cases}$ dựa vào vị trí tương đối của hai đường thẳng.",
        "exampleSolution": "• Bước 1 (Xét vị trí tương đối): Hai đường thẳng $d_1: y = -x + 3$ và $d_2: y = -x + 5$ có cùng hệ số góc $-1$ và tung độ gốc khác nhau ($3 \\ne 5$) nên $d_1 \\parallel d_2$.\n• Bước 2 (Kết luận số nghiệm): Vì hai đường thẳng song song không có điểm chung nên hệ phương trình đã cho vô nghiệm."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-9.1.1",
        "badge": "Câu 1 - Nhận biết phương trình bậc nhất hai ẩn",
        "source": "Tài liệu chuyên đề Toán 9 Câu 28 (Trang 55)",
        "question": "Phương trình nào sau đây là phương trình bậc nhất hai ẩn?",
        "options": [
          "$2x - 3y = 5$",
          "$x^2 + 2y = 0$",
          "$\\frac{2}{x} + y = 1$",
          "$0x + 0y = 4$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình bậc nhất hai ẩn có dạng $ax + by = c$ với $a \\ne 0$ hoặc $b \\ne 0$. Do đó $2x - 3y = 5$ là phương trình bậc nhất hai ẩn (với $a = 2, b = -3, c = 5$)."
      },
      {
        "id": "quiz-9.1.2",
        "badge": "Câu 2 - Xác định hệ số a, b, c",
        "source": "Tài liệu chuyên đề Toán 9 Ví dụ 1a (Trang 18)",
        "question": "Cho phương trình bậc nhất hai ẩn $3x - 5y = -3$. Các hệ số $a, b, c$ của phương trình lần lượt là:",
        "options": [
          "$a = 3;\\ b = -5;\\ c = -3$",
          "$a = 3;\\ b = 5;\\ c = -3$",
          "$a = 3;\\ b = -5;\\ c = 3$",
          "$a = -3;\\ b = -5;\\ c = -3$"
        ],
        "correctIndex": 0,
        "explanation": "Đối chiếu với dạng $ax + by = c$, ta có $a = 3$, $b = -5$ và $c = -3$."
      },
      {
        "id": "quiz-9.1.3",
        "badge": "Câu 3 - Kiểm tra nghiệm của phương trình",
        "source": "Tài liệu chuyên đề Toán 9 Ví dụ 2 (Trang 18)",
        "question": "Cặp số nào sau đây là một nghiệm của phương trình $2x - y = 1$?",
        "options": [
          "$(1; 1)$",
          "$(0,5; 3)$",
          "$(2; 1)$",
          "$(-1; 1)$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1, y = 1$ vào vế trái: $2(1) - 1 = 1$ (bằng vế phải). Vậy cặp số $(1; 1)$ là một nghiệm của phương trình."
      },
      {
        "id": "quiz-9.1.4",
        "badge": "Câu 4 - Kiểm tra phương trình nhận nghiệm cho trước",
        "source": "Tài liệu chuyên đề Toán 9 Câu 29 (Trang 55)",
        "question": "Phương trình nào dưới đây nhận cặp số $(-2; 4)$ làm nghiệm?",
        "options": [
          "$2x + y = 0$",
          "$x - 2y = 0$",
          "$x + y = 2$",
          "$2x - y = 1$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = -2, y = 4$ vào phương trình $2x + y = 0$: $2(-2) + 4 = -4 + 4 = 0$ (thỏa mãn)."
      },
      {
        "id": "quiz-9.1.5",
        "badge": "Câu 5 - Nghiệm tổng quát của phương trình khuyết x",
        "source": "Tài liệu chuyên đề Toán 9 Câu 34 (Trang 55)",
        "question": "Tất cả các nghiệm của phương trình $0x + 4y = 16$ được biểu diễn bởi:",
        "options": [
          "$y = 4$",
          "$x = 4$",
          "$y = -4$",
          "$x = 16$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $0x + 4y = 16$, hay $4y = 16$, suy ra $y = 4$. Nghiệm tổng quát là $(x; 4)$ với $x \\in \\mathbb{R}$ tùy ý (đường thẳng $y = 4$ song song trục hoành)."
      },
      {
        "id": "quiz-9.1.6",
        "badge": "Câu 6 - Nghiệm tổng quát của phương trình khuyết y",
        "source": "Tài liệu chuyên đề Toán 9 Câu 35 (Trang 55)",
        "question": "Tất cả các nghiệm của phương trình $3x + 0y = 12$ được biểu diễn bởi:",
        "options": [
          "$x = 4$",
          "$y = 4$",
          "$x = -4$",
          "$y = 12$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $3x + 0y = 12$, hay $3x = 12$, suy ra $x = 4$. Nghiệm tổng quát là $(4; y)$ với $y \\in \\mathbb{R}$ tùy ý (đường thẳng $x = 4$ song song trục tung)."
      },
      {
        "id": "quiz-9.1.7",
        "badge": "Câu 7 - Nhận biết hệ phương trình bậc nhất hai ẩn",
        "source": "Tài liệu chuyên đề Toán 9 Ví dụ 5 (Trang 18)",
        "question": "Hệ phương trình nào sau đây là hệ hai phương trình bậc nhất hai ẩn?",
        "options": [
          "$\\begin{cases} 2x + y = 3 \\\\ x - 3y = 4 \\end{cases}$",
          "$\\begin{cases} x^2 + y = 1 \\\\ 2x - y = 3 \\end{cases}$",
          "$\\begin{cases} 0x + 0y = 2 \\\\ x + y = 5 \\end{cases}$",
          "$\\begin{cases} \\frac{1}{x} + y = 2 \\\\ x - y = 1 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ phương trình $\\begin{cases} 2x + y = 3 \\\\ x - 3y = 4 \\end{cases}$ gồm hai phương trình bậc nhất hai ẩn nên là hệ hai phương trình bậc nhất hai ẩn."
      },
      {
        "id": "quiz-9.1.8",
        "badge": "Câu 8 - Kiểm tra nghiệm của hệ phương trình",
        "source": "Tài liệu chuyên đề Toán 9 Câu 39 (Trang 56)",
        "question": "Cặp số $(x; y) = (1; 1)$ là nghiệm của hệ phương trình nào dưới đây?",
        "options": [
          "$\\begin{cases} 2x + 3y = 5 \\\\ 4x - y = 3 \\end{cases}$",
          "$\\begin{cases} 2x + 3y = 5 \\\\ 4x + y = 3 \\end{cases}$",
          "$\\begin{cases} x - y = 2 \\\\ 2x + y = 3 \\end{cases}$",
          "$\\begin{cases} 3x - y = 4 \\\\ x + y = 2 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1, y = 1$ vào hệ: $2(1) + 3(1) = 5$ (đúng) và $4(1) - 1 = 3$ (đúng). Vậy $(1; 1)$ là nghiệm của hệ."
      },
      {
        "id": "quiz-9.1.9",
        "badge": "Câu 9 - Tìm tham số m để phương trình nhận nghiệm cho trước",
        "source": "Tài liệu chuyên đề Toán 9 Câu 33 (Trang 55)",
        "question": "Tìm giá trị của $m$ để phương trình $(m - 1)x + 3y = 1$ nhận cặp số $(1; 1)$ làm nghiệm:",
        "options": [
          "$m = -1$",
          "$m = 1$",
          "$m = -2$",
          "$m = 2$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1, y = 1$ vào phương trình, ta được: $(m - 1) \\cdot 1 + 3 \\cdot 1 = 1$, hay $m - 1 + 3 = 1$, do đó $m + 2 = 1$, suy ra $m = -1$."
      },
      {
        "id": "quiz-9.1.10",
        "badge": "Câu 10 - Bài toán thực tế mua vé",
        "source": "SGK Toán 9 Bài 1.5 (Trang 11)",
        "question": "Một nhóm khách gồm $x$ người lớn và $y$ người trẻ em mua vé xem xiếc. Giá vé người lớn là $100\\ 000$ đồng, giá vé trẻ em là $60\\ 000$ đồng. Tổng số tiền mua vé là $680\\ 000$ đồng. Phương trình rút gọn biểu thị số tiền mua vé là:",
        "options": [
          "$5x + 3y = 34$",
          "$3x + 5y = 34$",
          "$5x + 3y = 68$",
          "$10x + 6y = 34$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số tiền là: $100\\ 000x + 60\\ 000y = 680\\ 000$. Chia cả hai vế cho $20\\ 000$ ta được phương trình rút gọn: $5x + 3y = 34$."
      }
    ]
  },
  "t9-b2-giai-he-phuong-trinh": {
    "id": "t9-b2-giai-he-phuong-trinh",
    "lessonNumber": 2,
    "title": "Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn",
    "bookChapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
    "scenarioTitle": "Tình huống: Tìm số lượng đồ dùng học tập và vận tốc ca nô",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Giải hệ phương trình bằng phương pháp thế",
        "points": [
          "Các bước giải hệ phương trình bằng phương pháp thế:",
          "  Bước 1: Từ một phương trình của hệ, biểu diễn một ẩn theo ẩn kia.",
          "  Bước 2: Thế biểu thức vừa tìm được vào phương trình còn lại để được phương trình một ẩn.",
          "  Bước 3: Giải phương trình một ẩn vừa nhận được.",
          "  Bước 4: Thay giá trị tìm được vào biểu thức ở Bước 1 để tìm ẩn còn lại, rồi kết luận."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề Trang 19 & SGK Trang 12)",
        "exampleProblem": "Giải hệ phương trình sau bằng phương pháp thế: $\\begin{cases} x - 3y = 2 \\\\ 2x + y = 11 \\end{cases}$.",
        "exampleSolution": "• Bước 1 (Biểu diễn ẩn $x$ theo $y$): Từ phương trình thứ nhất, ta có: $x = 3y + 2$.\n• Bước 2 (Thế vào phương trình thứ hai): Thay $x = 3y + 2$ vào phương trình thứ hai, ta được:\n  $2(3y + 2) + y = 11$.\n• Bước 3 (Giải phương trình một ẩn $y$):\n  $6y + 4 + y = 11$\n  $7y = 7$, suy ra $y = 1$.\n• Bước 4 (Tìm ẩn $x$ và kết luận): Thay $y = 1$ vào $x = 3y + 2$, ta được:\n  $x = 3(1) + 2 = 5$.\n• Vậy hệ phương trình có nghiệm duy nhất là $(5; 1)$."
      },
      {
        "index": "2",
        "title": "Giải hệ phương trình bằng phương pháp cộng đại số",
        "points": [
          "Các bước giải hệ phương trình bằng phương pháp cộng đại số:",
          "  Bước 1: Nhân hai vế của mỗi phương trình với số thích hợp (nếu cần) để các hệ số của một ẩn bằng nhau hoặc đối nhau.",
          "  Bước 2: Cộng hoặc trừ từng vế hai phương trình để triệt tiêu một ẩn, thu được phương trình một ẩn.",
          "  Bước 3: Giải phương trình một ẩn vừa nhận được.",
          "  Bước 4: Thay giá trị vừa tìm được vào một trong hai phương trình ban đầu để tìm ẩn còn lại, rồi kết luận."
        ],
        "examples": [
          {
            "title": "Ví dụ 2a (Trường hợp các hệ số của một ẩn đối nhau)",
            "problem": "Giải hệ phương trình sau bằng phương pháp cộng đại số: $\\begin{cases} 2x - 3y = 1 \\\\ 4x + 3y = 11 \\end{cases}$.",
            "solution": "• Bước 1 (Nhận xét hệ số): Hệ số của ẩn $y$ trong hai phương trình là $-3$ và $3$ là hai số đối nhau.\n• Bước 2 (Cộng từng vế để triệt tiêu $y$): Cộng từng vế hai phương trình của hệ, ta được:\n  $(2x + 4x) + (-3y + 3y) = 1 + 11$\n  $6x = 12$, suy ra $x = 2$.\n• Bước 3 (Tìm ẩn $y$ và kết luận): Thay $x = 2$ vào phương trình $4x + 3y = 11$, ta được:\n  $4(2) + 3y = 11$\n  $3y = 3$, suy ra $y = 1$.\n• Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
          },
          {
            "title": "Ví dụ 2b (Trường hợp các hệ số của một ẩn bằng nhau)",
            "problem": "Giải hệ phương trình sau bằng phương pháp cộng đại số: $\\begin{cases} 3x + 2y = 8 \\\\ 3x - y = 5 \\end{cases}$.",
            "solution": "• Bước 1 (Nhận xét hệ số): Hệ số của ẩn $x$ trong cả hai phương trình đều bằng $3$.\n• Bước 2 (Trừ từng vế để triệt tiêu $x$): Trừ từng vế phương trình thứ nhất cho phương trình thứ hai, ta được:\n  $(3x - 3x) + [2y - (-y)] = 8 - 5$\n  $3y = 3$, suy ra $y = 1$.\n• Bước 3 (Tìm ẩn $x$ và kết luận): Thay $y = 1$ vào phương trình $3x - y = 5$, ta được:\n  $3x - 1 = 5$\n  $3x = 6$, suy ra $x = 2$.\n• Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
          },
          {
            "title": "Ví dụ 2c (Trường hợp hệ số không bằng nhau và không đối nhau)",
            "problem": "Giải hệ phương trình sau bằng phương pháp cộng đại số: $\\begin{cases} 3x - 2y = 4 \\\\ 2x + y = 5 \\end{cases}$.",
            "solution": "• Bước 1 (Nhân tạo hệ số đối nhau): Nhân hai vế phương trình thứ hai với $2$, ta được hệ mới:\n  $\\begin{cases} 3x - 2y = 4 \\\\ 4x + 2y = 10 \\end{cases}$.\n• Bước 2 (Cộng từng vế để triệt tiêu $y$): Cộng từng vế hai phương trình của hệ, ta được:\n  $(3x + 4x) + (-2y + 2y) = 4 + 10$\n  $7x = 14$, suy ra $x = 2$.\n• Bước 3 (Tìm ẩn $y$ và kết luận): Thay $x = 2$ vào phương trình $2x + y = 5$, ta được:\n  $2(2) + y = 5$, suy ra $y = 1$.\n• Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
          }
        ]
      },
      {
        "index": "3",
        "title": "Hệ phương trình có vô số nghiệm hoặc vô nghiệm",
        "points": [
          "Khi dùng phương pháp thế hoặc cộng đại số để giải hệ hai phương trình bậc nhất hai ẩn:",
          "  Nếu xuất hiện phương trình có dạng $0x = 0$ (hoặc $0y = 0$) luôn đúng với mọi số thực thì hệ phương trình có vô số nghiệm.",
          "  Nếu xuất hiện phương trình có dạng $0x = k$ (hoặc $0y = k$) với $k \\ne 0$ vô nghiệm thì hệ phương trình đã cho vô nghiệm."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Trang 57 & SGK Trang 15)",
        "exampleProblem": "Giải hệ phương trình sau: $\\begin{cases} 2x - y = 5 \\\\ -2x + y = 1 \\end{cases}$.",
        "exampleSolution": "• Bước 1 (Cộng từng vế hai phương trình): Cộng từng vế hai phương trình của hệ, ta được:\n  $(2x - 2x) + (-y + y) = 5 + 1$\n  $0x + 0y = 6$ hay $0 = 6$ (vô lý).\n• Bước 2 (Kết luận): Vì phương trình nhận được là vô lý nên hệ phương trình đã cho vô nghiệm."
      },
      {
        "index": "4",
        "title": "Sử dụng máy tính cầm tay kiểm tra nghiệm",
        "points": [
          "Cách bấm máy tính cầm tay (MTCT) kiểm tra nghiệm của hệ hai phương trình bậc nhất hai ẩn:",
          "  Dòng máy fx-580VN X: Bấm MENU $\\to$ 9 $\\to$ 1 $\\to$ 2 để chọn giải hệ 2 phương trình bậc nhất 2 ẩn.",
          "  Dòng máy fx-570VN PLUS: Bấm MODE $\\to$ 5 $\\to$ 1.",
          "  Nhập lần lượt các hệ số $a, b, c$ của phương trình thứ nhất và $a', b', c'$ của phương trình thứ hai rồi nhấn dấu bằng \"=\" để nhận kết quả."
        ],
        "exampleTitle": "Ví dụ 4 (SGK Toán 9 Trang 16)",
        "exampleProblem": "Dùng MTCT kiểm tra nghiệm của hệ phương trình: $\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$.",
        "exampleSolution": "• Bước 1 (Nhập hệ số vào máy tính): Bấm MENU 9 1 2, nhập lần lượt các hệ số: $2 = 3 = 7 =$ và $3 = -1 = 5 =$.\n• Bước 2 (Đọc kết quả hiển thị): Màn hình hiển thị $x = 2$ và $y = 1$. Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-9.2.1",
        "badge": "Câu 1 - Biểu diễn ẩn theo ẩn còn lại",
        "source": "SGK Toán 9 Trang 12",
        "question": "Từ phương trình $x - 2y = 3$, biểu diễn ẩn $x$ theo ẩn $y$ ta được:",
        "options": [
          "$x = 2y + 3$",
          "$x = -2y + 3$",
          "$x = 2y - 3$",
          "$x = \\frac{y + 3}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển hạng tử $-2y$ sang vế phải đổi dấu thành $+2y$, ta được: $x = 2y + 3$."
      },
      {
        "id": "quiz-9.2.2",
        "badge": "Câu 2 - Thế ẩn vào phương trình thứ hai",
        "source": "Tài liệu chuyên đề Toán 9 Dạng 7 (Trang 19)",
        "question": "Khi giải hệ phương trình $\\begin{cases} x = 2y + 1 \\\\ 3x - 2y = 7 \\end{cases}$ bằng phương pháp thế, phương trình một ẩn $y$ thu được là:",
        "options": [
          "$4y + 3 = 7$",
          "$6y + 1 - 2y = 7$",
          "$4y - 3 = 7$",
          "$6y - 2y = 7$"
        ],
        "correctIndex": 0,
        "explanation": "Thế $x = 2y + 1$ vào phương trình thứ hai: $3(2y + 1) - 2y = 7$, tức là $6y + 3 - 2y = 7$, hay $4y + 3 = 7$."
      },
      {
        "id": "quiz-9.2.3",
        "badge": "Câu 3 - Giải hệ bằng phương pháp thế",
        "source": "Tài liệu chuyên đề Toán 9 Ví dụ 8b (Trang 19)",
        "question": "Nghiệm của hệ phương trình $\\begin{cases} x - 3y = 2 \\\\ 2x + y = 11 \\end{cases}$ là:",
        "options": [
          "$(5; 1)$",
          "$(1; 5)$",
          "$(2; 3)$",
          "$(8; 2)$"
        ],
        "correctIndex": 0,
        "explanation": "Từ PT 1: $x = 3y + 2$. Thế vào PT 2: $2(3y + 2) + y = 11$, suy ra $7y + 4 = 11$, hay $y = 1$, do đó $x = 3(1) + 2 = 5$."
      },
      {
        "id": "quiz-9.2.4",
        "badge": "Câu 4 - Cộng hai phương trình có hệ số đối nhau",
        "source": "SGK Toán 9 Trang 14",
        "question": "Cộng từng vế hai phương trình của hệ $\\begin{cases} 2x + 3y = 8 \\\\ 5x - 3y = 6 \\end{cases}$ ta thu được phương trình một ẩn là:",
        "options": [
          "$7x = 14$",
          "$3x = 14$",
          "$7x + 6y = 14$",
          "$7x = 2$"
        ],
        "correctIndex": 0,
        "explanation": "Cộng từng vế: $(2x + 5x) + (3y - 3y) = 8 + 6$, suy ra $7x = 14$."
      },
      {
        "id": "quiz-9.2.5",
        "badge": "Câu 5 - Trừ hai phương trình có hệ số bằng nhau",
        "source": "SGK Toán 9 Trang 14",
        "question": "Trừ từng vế phương trình thứ nhất cho phương trình thứ hai của hệ $\\begin{cases} 3x + 2y = 7 \\\\ 3x - y = 1 \\end{cases}$ ta thu được phương trình:",
        "options": [
          "$3y = 6$",
          "$y = 6$",
          "$3y = 8$",
          "$6x + y = 8$"
        ],
        "correctIndex": 0,
        "explanation": "Trừ từng vế: $(3x - 3x) + [2y - (-y)] = 7 - 1$, suy ra $3y = 6$."
      },
      {
        "id": "quiz-9.2.6",
        "badge": "Câu 6 - Giải hệ bằng phương pháp cộng đại số",
        "source": "Tài liệu chuyên đề Toán 9 Ví dụ 9b (Trang 19)",
        "question": "Nghiệm của hệ phương trình $\\begin{cases} 3x - 2y = 4 \\\\ 2x + y = 5 \\end{cases}$ là:",
        "options": [
          "$(2; 1)$",
          "$(1; 2)$",
          "$(3; 1)$",
          "$(2; -1)$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân PT 2 với 2: $4x + 2y = 10$. Cộng với PT 1: $7x = 14 \\Rightarrow x = 2$. Thay vào PT 2: $2(2) + y = 5 \\Rightarrow y = 1$."
      },
      {
        "id": "quiz-9.2.7",
        "badge": "Câu 7 - Tính tổng các tọa độ nghiệm S = x + y",
        "source": "Tài liệu chuyên đề Toán 9 Câu 45 (Trang 57)",
        "question": "Biết $(x; y)$ là nghiệm của hệ phương trình $\\begin{cases} 7x + 4y = 18 \\\\ 3x - 4y = 2 \\end{cases}$. Giá trị của tổng $S = x + y$ là:",
        "options": [
          "$3$",
          "$-3$",
          "$5$",
          "$-1$"
        ],
        "correctIndex": 0,
        "explanation": "Cộng hai vế: $10x = 20 \\Rightarrow x = 2$. Thay vào PT 2: $3(2) - 4y = 2$, suy ra $4y = 4$, do đó $y = 1$. Vậy $S = 2 + 1 = 3$."
      },
      {
        "id": "quiz-9.2.8",
        "badge": "Câu 8 - Nhận biết hệ vô nghiệm",
        "source": "Tài liệu chuyên đề Toán 9 Câu 47 (Trang 57)",
        "question": "Khẳng định nào sau đây là đúng về tập nghiệm của hệ phương trình $\\begin{cases} 2x - y = 5 \\\\ -2x + y = 1 \\end{cases}$?",
        "options": [
          "Hệ phương trình vô nghiệm",
          "Hệ có nghiệm duy nhất $(2; 1)$",
          "Hệ phương trình vô số nghiệm",
          "Hệ có nghiệm duy nhất $(3; 1)$"
        ],
        "correctIndex": 0,
        "explanation": "Cộng từng vế hai phương trình: $(2x - 2x) + (-y + y) = 5 + 1$, tức là $0 = 6$ (vô lý). Vậy hệ phương trình vô nghiệm."
      },
      {
        "id": "quiz-9.2.9",
        "badge": "Câu 9 - Nhận biết hệ vô số nghiệm",
        "source": "Tài liệu chuyên đề Toán 9 Câu 53 (Trang 57)",
        "question": "Hệ phương trình $\\begin{cases} 2x - 4y = -2 \\\\ x - 2y = -1 \\end{cases}$ có số nghiệm là:",
        "options": [
          "Vô số nghiệm",
          "$0$",
          "$1$",
          "$2$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân cả hai vế của phương trình thứ hai với 2 ta được: $2x - 4y = -2$, trùng khớp hoàn toàn với phương trình thứ nhất. Do đó hệ có vô số nghiệm."
      },
      {
        "id": "quiz-9.2.10",
        "badge": "Câu 10 - Bài toán thực tế tìm hai số tự nhiên",
        "source": "SGK Toán 9 Bài 1.6 (Trang 17)",
        "question": "Tìm hai số tự nhiên biết tổng của chúng bằng $100$ và số lớn hơn số bé là $30$. Gọi số lớn là $x$ và số bé là $y$. Hệ phương trình biểu thị bài toán là:",
        "options": [
          "$\\begin{cases} x + y = 100 \\\\ x - y = 30 \\end{cases}$",
          "$\\begin{cases} x + y = 100 \\\\ y - x = 30 \\end{cases}$",
          "$\\begin{cases} x - y = 100 \\\\ x + y = 30 \\end{cases}$",
          "$\\begin{cases} x + y = 30 \\\\ x - y = 100 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng hai số là $100$ nên $x + y = 100$. Số lớn hơn số bé $30$ nên $x - y = 30$. Ta có hệ phương trình: $\\begin{cases} x + y = 100 \\\\ x - y = 30 \\end{cases}$."
      }
    ]
  },

  // ==========================================
  // BÀI 3: GIẢI BÀI TOÁN BẰNG CÁCH LẬP HỆ PHƯƠNG TRÌNH
  // ==========================================
  "t9-b3-giai-toan-lap-he": {
    "id": "t9-b3-giai-toan-lap-he",
    "lessonNumber": 3,
    "title": "Bài 3: Giải bài toán bằng cách lập hệ phương trình",
    "bookChapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
    "scenarioTitle": "Tình huống thực tế: Bài toán chuyển động, năng suất và kích thước hình chữ nhật",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Các bước giải bài toán bằng cách lập hệ phương trình",
        "points": [
          "Quy trình giải bài toán bằng cách lập hệ phương trình gồm 3 bước chuẩn:",
          "  Bước 1 (Lập hệ phương trình):",
          "    - Chọn hai ẩn số biểu thị hai đại lượng chưa biết và đặt điều kiện thích hợp cho ẩn (kèm đơn vị).",
          "    - Biểu diễn các đại lượng chưa biết khác theo hai ẩn và các đại lượng đã biết.",
          "    - Lập hai phương trình biểu thị sự tương quan giữa các đại lượng để được hệ phương trình.",
          "  Bước 2 (Giải hệ phương trình): Sử dụng phương pháp thế hoặc phương pháp cộng đại số thích hợp.",
          "  Bước 3 (Kiểm tra và kết luận): Đối chiếu nghiệm của hệ với điều kiện đã đặt và trả lời theo yêu cầu bài toán."
        ],
        "exampleTitle": "Ví dụ 1 (Toán số học - Chuyên đề Trang 19 & SGK Trang 18)",
        "exampleProblem": "Tìm số tự nhiên có hai chữ số, biết rằng tổng hai chữ số bằng $12$, và nếu viết hai chữ số theo thứ tự ngược lại thì được một số mới lớn hơn số ban đầu là $36$ đơn vị.",
        "exampleSolution": "• Bước 1 (Gọi ẩn và đặt điều kiện):\n  Gọi chữ số hàng chục là $x$, chữ số hàng đơn vị là $y$ ($x, y \\in \\mathbb{N}^*$, $1 \\le x \\le 9$, $0 \\le y \\le 9$).\n  Số ban đầu là $\\overline{xy} = 10x + y$. Khi viết theo thứ tự ngược lại, ta được số mới là $\\overline{yx} = 10y + x$.\n• Bước 2 (Lập hệ phương trình):\n  Tổng hai chữ số bằng $12$, ta có: $x + y = 12$.\n  Số mới lớn hơn số ban đầu $36$ đơn vị, ta có:\n  $(10y + x) - (10x + y) = 36$\n  $9y - 9x = 36$, suy ra $y - x = 4$.\n  Ta có hệ phương trình: $\\begin{cases} x + y = 12 \\\\ -x + y = 4 \\end{cases}$.\n• Bước 3 (Giải hệ phương trình):\n  Cộng từng vế hai phương trình, ta được:\n  $2y = 16$, suy ra $y = 8$.\n  Thay $y = 8$ vào $x + y = 12$, ta được:\n  $x + 8 = 12$, suy ra $x = 4$ (thỏa mãn điều kiện).\n• Bước 4 (Kết luận): Vậy số tự nhiên cần tìm là $48$."
      },
      {
        "index": "2",
        "title": "Dạng toán chuyển động",
        "points": [
          "Ba đại lượng cơ bản của toán chuyển động:",
          "  Quãng đường $s = v \\cdot t$ (Vận tốc $\\times$ Thời gian). Suy ra $v = \\frac{s}{t}$ và $t = \\frac{s}{v}$.",
          "Chuyển động cùng chiều và ngược chiều:",
          "  Ngược chiều gặp nhau: Tổng quãng đường hai xe đi bằng khoảng cách ban đầu ($s_1 + s_2 = s_{\\text{tổng}}$).",
          "  Cùng chiều đuổi kịp: Hiệu quãng đường hai xe đi bằng khoảng cách ban đầu ($s_1 - s_2 = s_{\\text{ban đầu}}$).",
          "Chuyển động của ca nô trên dòng nước:",
          "  Vận tốc xuôi dòng = Vận tốc thực + Vận tốc dòng nước ($v_{\\text{xuôi}} = v_{\\text{thực}} + v_{\\text{nước}}$).",
          "  Vận tốc ngược dòng = Vận tốc thực - Vận tốc dòng nước ($v_{\\text{ngược}} = v_{\\text{thực}} - v_{\\text{nước}}$)."
        ],
        "exampleTitle": "Ví dụ 2 (Toán chuyển động đường sông - SGK Cánh Diều Bài 47 Trang 40)",
        "exampleProblem": "Một ca nô đi xuôi dòng khúc sông dài $42\\text{ km}$ hết $1$ giờ $30$ phút và đi ngược dòng khúc sông đó hết $2$ giờ $6$ phút. Tính vận tốc thật của ca nô khi nước yên lặng và vận tốc của dòng nước (biết vận tốc dòng nước không đổi).",
        "exampleSolution": "• Bước 1 (Đổi đơn vị và gọi ẩn):\n  Đổi: $1\\text{ giờ } 30\\text{ phút} = 1,5\\text{ giờ}$; $2\\text{ giờ } 6\\text{ phút} = 2,1\\text{ giờ}$.\n  Gọi vận tốc thực của ca nô là $x\\text{ (km/h)}$ và vận tốc dòng nước là $y\\text{ (km/h)}$ ($x > y > 0$).\n• Bước 2 (Lập hệ phương trình):\n  Vận tốc xuôi dòng là $x + y\\text{ (km/h)}$, ta có: $1,5(x + y) = 42$, suy ra $x + y = 28$.\n  Vận tốc ngược dòng là $x - y\\text{ (km/h)}$, ta có: $2,1(x - y) = 42$, suy ra $x - y = 20$.\n  Ta có hệ phương trình: $\\begin{cases} x + y = 28 \\\\ x - y = 20 \\end{cases}$.\n• Bước 3 (Giải hệ phương trình):\n  Cộng từng vế hai phương trình, ta được:\n  $2x = 48$, suy ra $x = 24$.\n  Thay $x = 24$ vào $x + y = 28$, ta được:\n  $24 + y = 28$, suy ra $y = 4$ (thỏa mãn điều kiện).\n• Bước 4 (Kết luận): Vậy vận tốc thực của ca nô là $24\\text{ km/h}$ và vận tốc dòng nước là $4\\text{ km/h}$."
      },
      {
        "index": "3",
        "title": "Dạng toán năng suất và sản xuất phần trăm",
        "points": [
          "Công thức năng suất lao động: Khối lượng công việc = Năng suất $\\times$ Thời gian.",
          "  Năng suất = Khối lượng công việc : Thời gian.",
          "Bài toán làm chung - làm riêng một công việc:",
          "  Coi toàn bộ công việc là $1$ đơn vị. Mỗi ngày (hoặc giờ) làm được $\\frac{1}{x}$ và $\\frac{1}{y}$ công việc.",
          "Bài toán tăng giảm tỉ lệ phần trăm:",
          "  Tổ sản xuất vượt mức $a\\%$ thì thực tế làm được: $x + a\\% \\cdot x = (1 + a\\%)x$.",
          "  Mặt hàng giảm giá $b\\%$ thì giá bán thực tế là: $y - b\\% \\cdot y = (1 - b\\%)y$."
        ],
        "exampleTitle": "Ví dụ 3 (Toán năng suất vượt mức - Chuyên đề Bài 24 Trang 33 & SGK CTST)",
        "exampleProblem": "Trong tháng thứ nhất, hai tổ sản xuất được $800$ chi tiết máy. Sang tháng thứ hai, tổ một sản xuất vượt mức $15\\%$, tổ hai sản xuất vượt mức $20\\%$ so với tháng thứ nhất nên cả hai tổ sản xuất được $945$ chi tiết máy. Hỏi trong tháng thứ nhất mỗi tổ sản xuất được bao nhiêu chi tiết máy?",
        "exampleSolution": "• Bước 1 (Gọi ẩn và đặt điều kiện):\n  Gọi số chi tiết máy tổ một sản xuất trong tháng thứ nhất là $x$ (chi tiết, $x \\in \\mathbb{N}^*$, $x < 800$).\n  Gọi số chi tiết máy tổ hai sản xuất trong tháng thứ nhất là $y$ (chi tiết, $y \\in \\mathbb{N}^*$, $y < 800$).\n• Bước 2 (Lập hệ phương trình):\n  Tháng thứ nhất hai tổ sản xuất được $800$ chi tiết máy, ta có: $x + y = 800$.\n  Tháng thứ hai cả hai tổ sản xuất được $945$ chi tiết máy, ta có:\n  $1,15x + 1,20y = 945$.\n  Ta có hệ phương trình: $\\begin{cases} x + y = 800 \\\\ 1,15x + 1,20y = 945 \\end{cases}$.\n• Bước 3 (Giải hệ phương trình):\n  Nhân hai vế phương trình thứ nhất với $1,15$, ta được: $1,15x + 1,15y = 920$.\n  Trừ từng vế hai phương trình, ta được:\n  $0,05y = 25$, suy ra $y = 500$.\n  Thay $y = 500$ vào $x + y = 800$, ta được:\n  $x + 500 = 800$, suy ra $x = 300$ (thỏa mãn điều kiện).\n• Bước 4 (Kết luận): Vậy trong tháng thứ nhất, tổ một sản xuất được $300$ chi tiết máy và tổ hai sản xuất được $500$ chi tiết máy."
      },
      {
        "index": "4",
        "title": "Dạng toán có yếu tố hình học",
        "points": [
          "Các công thức hình học thường gặp:",
          "  Hình chữ nhật: Chu vi $P = 2(x + y)$; Nửa chu vi $x + y = \\frac{P}{2}$; Diện tích ban đầu $S = x \\cdot y$.",
          "  Khi thay đổi kích thước hình chữ nhật:",
          "    Chiều dài mới: $x \\pm a$; Chiều rộng mới: $y \\pm b$.",
          "    Diện tích mới: $(x \\pm a)(y \\pm b) = xy \\pm \\Delta S$.",
          "    Rút gọn biểu thức hai vế ta triệt tiêu được tích $xy$, thu được phương trình bậc nhất hai ẩn đối với $x$ và $y$."
        ],
        "exampleTitle": "Ví dụ 4 (Toán hình học thực tế - Chuyên đề Bài 57 Trang 42 & SGK CTST)",
        "exampleProblem": "Một mảnh vườn hình chữ nhật có chu vi bằng $64\\text{ m}$. Nếu tăng chiều dài thêm $2\\text{ m}$ và tăng chiều rộng thêm $3\\text{ m}$ thì diện tích mảnh vườn tăng thêm $88\\text{ m}^2$. Tính chiều dài và chiều rộng của mảnh vườn ban đầu.",
        "exampleSolution": "• Bước 1 (Gọi ẩn và đặt điều kiện):\n  Gọi chiều dài của mảnh vườn ban đầu là $x\\text{ (m)}$, chiều rộng là $y\\text{ (m)}$ ($x > y > 0$).\n• Bước 2 (Lập hệ phương trình):\n  Nửa chu vi mảnh vườn là $64 : 2 = 32\\text{ m}$, ta có: $x + y = 32$.\n  Khi tăng chiều dài thêm $2\\text{ m}$ và chiều rộng thêm $3\\text{ m}$, diện tích tăng $88\\text{ m}^2$, ta có:\n  $(x + 2)(y + 3) = xy + 88$\n  $xy + 3x + 2y + 6 = xy + 88$\n  $3x + 2y = 82$.\n  Ta có hệ phương trình: $\\begin{cases} x + y = 32 \\\\ 3x + 2y = 82 \\end{cases}$.\n• Bước 3 (Giải hệ phương trình):\n  Nhân hai vế phương trình thứ nhất với $2$, ta được: $2x + 2y = 64$.\n  Trừ từng vế phương trình thứ hai cho phương trình trên, ta được:\n  $x = 82 - 64 = 18$.\n  Thay $x = 18$ vào $x + y = 32$, ta được:\n  $18 + y = 32$, suy ra $y = 14$ (thỏa mãn điều kiện).\n• Bước 4 (Kết luận): Vậy chiều dài mảnh vườn ban đầu là $18\\text{ m}$ và chiều rộng là $14\\text{ m}$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-9.3.1",
        "badge": "Câu 1 - Các bước giải bài toán lập hệ phương trình",
        "source": "SGK Toán 9 Bài 3 (Trang 18)",
        "question": "Thứ tự các bước chuẩn để giải một bài toán bằng cách lập hệ phương trình là:",
        "options": [
          "Lập hệ phương trình $\\to$ Giải hệ phương trình $\\to$ Kiểm tra và kết luận",
          "Giải hệ phương trình $\\to$ Lập hệ phương trình $\\to$ Kiểm tra và kết luận",
          "Kiểm tra và kết luận $\\to$ Lập hệ phương trình $\\to$ Giải hệ phương trình",
          "Lập hệ phương trình $\\to$ Kết luận ngay không cần giải hệ"
        ],
        "correctIndex": 0,
        "explanation": "Quy trình giải gồm 3 bước: Bước 1: Lập hệ phương trình; Bước 2: Giải hệ phương trình vừa tìm được; Bước 3: Kiểm tra điều kiện và kết luận."
      },
      {
        "id": "quiz-9.3.2",
        "badge": "Câu 2 - Toán số học tìm hai số tự nhiên",
        "source": "Tài liệu chuyên đề Toán 9 Bài 19 (Trang 32)",
        "question": "Tìm hai số tự nhiên biết tổng của chúng bằng $1006$. Nếu lấy số lớn chia cho số bé thì được thương là $2$ và số dư là $124$. Số lớn cần tìm là:",
        "options": [
          "$712$",
          "$294$",
          "$812$",
          "$612$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số lớn là $x$ và số bé là $y$ ($x > y$). Ta có hệ phương trình: $\\begin{cases} x + y = 1006 \\\\ x = 2y + 124 \\end{cases}$. Thế $x = 2y + 124$ vào phương trình thứ nhất, ta được: $2y + 124 + y = 1006$, hay $3y = 882$, suy ra $y = 294$. Khi đó số lớn là $x = 2(294) + 124 = 712$."
      },
      {
        "id": "quiz-9.3.3",
        "badge": "Câu 3 - Tìm số tự nhiên có hai chữ số",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 20 (Trang 32)",
        "question": "Tìm số tự nhiên $N$ có hai chữ số, biết rằng tổng hai chữ số bằng $12$, và nếu viết hai chữ số theo thứ tự ngược lại thì được một số lớn hơn $N$ là $36$ đơn vị.",
        "options": [
          "$48$",
          "$84$",
          "$39$",
          "$57$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi chữ số hàng chục là $a$, hàng đơn vị là $b$. Ta có hệ: $\\begin{cases} a + b = 12 \\\\ (10b + a) - (10a + b) = 36 \\end{cases}$, hay $\\begin{cases} a + b = 12 \\\\ -a + b = 4 \\end{cases}$. Cộng hai phương trình được $2b = 16$, suy ra $b = 8$. Do đó $a = 4$. Vậy số cần tìm là $48$."
      },
      {
        "id": "quiz-9.3.4",
        "badge": "Câu 4 - Toán chuyển động ngược chiều gặp nhau",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 45 (Trang 39)",
        "question": "Một xe khách đi từ TP.HCM đến Cần Thơ, quãng đường dài $170\\text{ km}$. Sau khi xe khách xuất phát $1$ giờ $40$ phút, một xe tải đi từ Cần Thơ về TP.HCM và gặp xe khách sau đó $40$ phút. Biết mỗi giờ xe khách đi nhanh hơn xe tải $15\\text{ km}$. Vận tốc của xe khách là:",
        "options": [
          "$60\\text{ km/h}$",
          "$45\\text{ km/h}$",
          "$50\\text{ km/h}$",
          "$70\\text{ km/h}$"
        ],
        "correctIndex": 0,
        "explanation": "Thời gian xe khách đi đến khi gặp xe tải là: $1\\text{h}40' + 40' = 2\\text{h}20' = \\frac{7}{3}\\text{ giờ}$. Thời gian xe tải đi là $40' = \\frac{2}{3}\\text{ giờ}$. Gọi vận tốc xe khách là $x$ và xe tải là $y$ ($x - y = 15$). Tổng quãng đường: $\\frac{7}{3}x + \\frac{2}{3}y = 170$, hay $7x + 2y = 510$. Giải hệ ta được $x = 60\\text{ km/h}$ và $y = 45\\text{ km/h}$."
      },
      {
        "id": "quiz-9.3.5",
        "badge": "Câu 5 - Toán chuyển động đường sông (ca nô)",
        "source": "SGK Toán 9 Cánh Diều Bài 47 (Trang 40)",
        "question": "Một ca nô đi xuôi dòng quãng đường $42\\text{ km}$ hết $1$ giờ $30$ phút và đi ngược dòng quãng đường đó hết $2$ giờ $6$ phút. Vận tốc của dòng nước là:",
        "options": [
          "$4\\text{ km/h}$",
          "$24\\text{ km/h}$",
          "$5\\text{ km/h}$",
          "$3\\text{ km/h}$"
        ],
        "correctIndex": 0,
        "explanation": "Vận tốc xuôi dòng là: $42 : 1,5 = 28\\text{ km/h}$ ($x + y = 28$). Vận tốc ngược dòng là: $42 : 2,1 = 20\\text{ km/h}$ ($x - y = 20$). Trừ từng vế hai phương trình: $2y = 8$, suy ra $y = 4\\text{ km/h}$."
      },
      {
        "id": "quiz-9.3.6",
        "badge": "Câu 6 - Toán năng suất trồng cây của hai lớp",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 35 (Trang 37)",
        "question": "Hai lớp 9A và 9B có tổng số $82$ học sinh. Trong dịp tết trồng cây, mỗi học sinh lớp 9A trồng được $3$ cây, mỗi học sinh lớp 9B trồng được $4$ cây nên cả hai lớp trồng được tổng cộng $288$ cây. Số học sinh lớp 9A là:",
        "options": [
          "$40\\text{ học sinh}$",
          "$42\\text{ học sinh}$",
          "$38\\text{ học sinh}$",
          "$44\\text{ học sinh}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số học sinh lớp 9A là $x$ và lớp 9B là $y$. Ta có hệ: $\\begin{cases} x + y = 82 \\\\ 3x + 4y = 288 \\end{cases}$. Nhân phương trình thứ nhất với $4$: $4x + 4y = 328$. Trừ vế theo vế được $x = 328 - 288 = 40\\text{ học sinh}$."
      },
      {
        "id": "quiz-9.3.7",
        "badge": "Câu 7 - Toán sản xuất vượt mức phần trăm",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 40 (Trang 38)",
        "question": "Năm ngoái hai đơn vị sản xuất nông nghiệp thu hoạch được $3600$ tấn thóc. Năm nay đơn vị thứ nhất làm vượt mức $15\\%$, đơn vị thứ hai vượt mức $12\\%$ so với năm ngoái nên cả hai đơn vị thu hoạch được $4095$ tấn thóc. Số thóc năm ngoái đơn vị thứ nhất thu hoạch được là:",
        "options": [
          "$2100\\text{ tấn}$",
          "$1500\\text{ tấn}$",
          "$2000\\text{ tấn}$",
          "$1800\\text{ tấn}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số thóc năm ngoái của hai đơn vị lần lượt là $x$ và $y$ ($x + y = 3600$). Năm nay hai đơn vị thu được $1,15x + 1,12y = 4095$. Giải hệ phương trình ta được $x = 2100\\text{ tấn}$ và $y = 1500\\text{ tấn}$."
      },
      {
        "id": "quiz-9.3.8",
        "badge": "Câu 8 - Toán tính điểm thi đấu bóng đá",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 38 (Trang 37)",
        "question": "Một đội bóng đá thi đấu $38$ trận mà không thua trận nào và giành được $90$ điểm. Biết mỗi trận thắng được $3$ điểm, mỗi trận hòa được $1$ điểm. Số trận thắng của đội bóng đó là:",
        "options": [
          "$26\\text{ trận}$",
          "$12\\text{ trận}$",
          "$28\\text{ trận}$",
          "$30\\text{ trận}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số trận thắng là $x$ và số trận hòa là $y$. Vì đội không thua trận nào nên $x + y = 38$. Mỗi trận thắng được 3 điểm, hòa 1 điểm nên $3x + y = 90$. Trừ hai phương trình: $2x = 52$, suy ra $x = 26\\text{ trận}$."
      },
      {
        "id": "quiz-9.3.9",
        "badge": "Câu 9 - Toán hình học thay đổi kích thước",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 57 (Trang 42)",
        "question": "Một mảnh vườn hình chữ nhật có chu vi bằng $64\\text{ m}$. Nếu tăng chiều dài thêm $2\\text{ m}$ và tăng chiều rộng thêm $3\\text{ m}$ thì diện tích mảnh vườn tăng thêm $88\\text{ m}^2$. Chiều dài ban đầu của mảnh vườn là:",
        "options": [
          "$18\\text{ m}$",
          "$14\\text{ m}$",
          "$20\\text{ m}$",
          "$16\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi chiều dài là $x\\text{ (m)}$, chiều rộng là $y\\text{ (m)}$. Nửa chu vi: $x + y = 32$. Diện tích tăng thêm: $(x + 2)(y + 3) - xy = 88$, hay $3x + 2y = 82$. Giải hệ phương trình ta được $x = 18\\text{ m}$ và $y = 14\\text{ m}$."
      },
      {
        "id": "quiz-9.3.10",
        "badge": "Câu 10 - Toán thực tế mua hàng giảm giá",
        "source": "SGK Toán 9 Cánh Diều Bài 29 (Trang 35)",
        "question": "Giá niêm yết của một chiếc tủ lạnh và một chiếc máy giặt có tổng số tiền là $25,4\\text{ triệu đồng}$. Nhân dịp khuyến mãi, tủ lạnh giảm giá $40\\%$ và máy giặt giảm giá $25\\%$ so với giá niêm yết nên khách hàng mua cả hai món hết $16,77\\text{ triệu đồng}$. Giá niêm yết của chiếc tủ lạnh là:",
        "options": [
          "$15,2\\text{ triệu đồng}$",
          "$10,2\\text{ triệu đồng}$",
          "$14,5\\text{ triệu đồng}$",
          "$16,0\\text{ triệu đồng}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi giá niêm yết tủ lạnh là $x$, máy giặt là $y$ (triệu đồng). Ta có $x + y = 25,4$. Giá sau giảm: $(1 - 0,4)x + (1 - 0,25)y = 16,77$, hay $0,6x + 0,75y = 16,77$. Giải hệ phương trình ta được $x = 15,2\\text{ triệu đồng}$ và $y = 10,2\\text{ triệu đồng}$."
      }
    ]
  }
};
