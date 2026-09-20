import type { DetailedLessonData } from "./allGradesLessonsData";

export const GRADE_9_DETAILED_LESSONS: Record<string, DetailedLessonData> = {
  "t9-b1-khai-niem-he-phuong-trinh": {
    "id": "t9-b1-khai-niem-he-phuong-trinh",
    "lessonNumber": 1,
    "title": "Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",
    "bookChapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
    "scenarioTitle": "Tình huống: Tính số tiền mua vé và tọa độ giao điểm trên bản đồ",
    "scenarioFrames": [],
    "youtubeVideoId": "nDqC-YWY2ik",
    "youtubeVideoTitle": "Bài Giảng Video: Khái Niệm Phương Trình Bậc Nhất Hai Ẩn (Tiết 1) - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "nDqC-YWY2ik",
        "title": "Tiết 1: Khái niệm phương trình bậc nhất hai ẩn"
      },
      {
        "id": "bppVKFQ1zyw",
        "title": "Tiết 2 & 3: Hệ hai phương trình bậc nhất hai ẩn"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.1.1",
        "title": "Ví dụ 1: Nhận biết phương trình bậc nhất hai ẩn",
        "question": "Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn?",
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
        "id": "vq-9.1.2",
        "title": "Ví dụ 2: Kiểm tra cặp số là nghiệm của phương trình",
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
        "id": "vq-9.1.3",
        "title": "Ví dụ 3: Kiểm tra nghiệm của hệ hai phương trình bậc nhất hai ẩn",
        "question": "Cặp số $(x; y) = (2; 1)$ là nghiệm của hệ phương trình nào dưới đây?",
        "options": [
          "$\\begin{cases} 2x - y = 3 \\\\ x + 3y = 5 \\end{cases}$",
          "$\\begin{cases} 2x + y = 3 \\\\ x - 3y = 5 \\end{cases}$",
          "$\\begin{cases} x - y = 2 \\\\ 2x + y = 3 \\end{cases}$",
          "$\\begin{cases} 3x - y = 4 \\\\ x + y = 2 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 2, y = 1$ vào phương trình thứ nhất: $2(2) - 1 = 3$ (thỏa mãn); thay vào phương trình thứ hai: $2 + 3(1) = 5$ (thỏa mãn). Vậy $(2; 1)$ là nghiệm của hệ."
      },
      {
        "id": "vq-9.1.4",
        "title": "Ví dụ 4: Ý nghĩa hình học về số nghiệm của hệ phương trình",
        "question": "Hai đường thẳng $d_1: 2x - y = 1$ và $d_2: 2x - y = 3$ song song với nhau. Khi đó hệ phương trình:\n$$\\begin{cases} 2x - y = 1 \\\\ 2x - y = 3 \\end{cases}$$\ncó bao nhiêu nghiệm?",
        "options": [
          "Vô nghiệm (0 nghiệm)",
          "Có nghiệm duy nhất (1 nghiệm)",
          "Có 2 nghiệm phân biệt",
          "Có vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Số nghiệm của hệ bằng số giao điểm của hai đường thẳng biểu diễn tập nghiệm. Vì hai đường thẳng song song không có điểm chung nên hệ phương trình vô nghiệm."
      }
    ],
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
    "tips": [
      "Phương trình bậc nhất hai ẩn ax + by = c luôn có vô số nghiệm và tập nghiệm được biểu diễn bởi một đường thẳng trên mặt phẳng tọa độ.",
      "Để kiểm tra một cặp số (x₀; y₀) có là nghiệm của hệ phương trình hay không, ta thay vào TẤT CẢ các phương trình của hệ: cặp số phải thỏa mãn đồng thời cả hai phương trình."
    ],
    "traps": [
      "BẪY ĐIỀU KIỆN PHƯƠNG TRÌNH: a và b không được đồng thời bằng 0 (a² + b² ≠ 0). Phương trình 0x + 0y = c không phải là phương trình bậc nhất hai ẩn.",
      "BẪY THỨ TỰ TỌA ĐỘ: Cặp nghiệm viết dưới dạng (x; y), trong đó hoành độ x đứng trước, tung độ y đứng sau. Chú ý không viết ngược (y; x)."
    ],
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
    "youtubeVideoId": "_n4Ixg8j7lU",
    "youtubeVideoTitle": "Bài Giảng Video: Giải Hệ Hai Phương Trình Bậc Nhất Hai Ẩn (Tiết 1 - Phương Pháp Thế) - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "_n4Ixg8j7lU",
        "title": "Tiết 1: Phương pháp thế giải hệ hai phương trình"
      },
      {
        "id": "cWtyBB_tYA8",
        "title": "Tiết 2: Phương pháp cộng đại số giải hệ phương trình"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.2.1",
        "title": "Ví dụ 1: Biểu diễn ẩn theo ẩn còn lại trong phương pháp thế",
        "question": "Từ phương trình $x - 3y = 2$, biểu diễn ẩn $x$ theo ẩn $y$ ta được:",
        "options": [
          "$x = 3y + 2$",
          "$x = -3y + 2$",
          "$x = 3y - 2$",
          "$x = \\frac{y + 2}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển $-3y$ sang vế phải đổi dấu thành $+3y$, ta được: $x = 3y + 2$."
      },
      {
        "id": "vq-9.2.2",
        "title": "Ví dụ 2: Giải hệ phương trình bằng phương pháp thế",
        "question": "Nghiệm của hệ phương trình:\n$$\\begin{cases} x - 3y = 2 \\\\ 2x + y = 11 \\end{cases}$$\nlà:",
        "options": [
          "$(5; 1)$",
          "$(1; 5)$",
          "$(2; 3)$",
          "$(8; 2)$"
        ],
        "correctIndex": 0,
        "explanation": "Từ PT 1: $x = 3y + 2$. Thế vào PT 2: $2(3y + 2) + y = 11 \\Rightarrow 7y + 4 = 11 \\Rightarrow y = 1$. Khi đó $x = 3(1) + 2 = 5$."
      },
      {
        "id": "vq-9.2.3",
        "title": "Ví dụ 3: Giải hệ phương trình bằng phương pháp cộng đại số",
        "question": "Nghiệm của hệ phương trình:\n$$\\begin{cases} 2x - 3y = 1 \\\\ 4x + 3y = 11 \\end{cases}$$\nlà:",
        "options": [
          "$(2; 1)$",
          "$(1; 2)$",
          "$(3; 1)$",
          "$(2; -1)$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ số của $y$ là $-3$ và $3$ đối nhau. Cộng từng vế hai phương trình: $6x = 12 \\Rightarrow x = 2$. Thay vào PT 2: $4(2) + 3y = 11 \\Rightarrow 3y = 3 \\Rightarrow y = 1$."
      },
      {
        "id": "vq-9.2.4",
        "title": "Ví dụ 4: Nhận biết hệ phương trình vô nghiệm hoặc vô số nghiệm",
        "question": "Khẳng định nào sau đây là ĐÚNG về số nghiệm của hệ phương trình:\n$$\\begin{cases} 2x - y = 5 \\\\ -2x + y = 1 \\end{cases}$$?",
        "options": [
          "Hệ phương trình vô nghiệm",
          "Hệ có nghiệm duy nhất $(2; 1)$",
          "Hệ có vô số nghiệm",
          "Hệ có 2 nghiệm phân biệt"
        ],
        "correctIndex": 0,
        "explanation": "Cộng từng vế hai phương trình: $(2x - 2x) + (-y + y) = 5 + 1$, hay $0 = 6$ (vô lý). Do đó hệ phương trình vô nghiệm."
      }
    ],
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
        "exampleProblem": "Giải hệ phương trình sau bằng phương pháp thế:\n$$\\begin{cases} x - 3y = 2 \\\\ 2x + y = 11 \\end{cases}$$",
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
            "problem": "Giải hệ phương trình sau bằng phương pháp cộng đại số:\n$$\\begin{cases} 2x - 3y = 1 \\\\ 4x + 3y = 11 \\end{cases}$$",
            "solution": "• Bước 1 (Nhận xét hệ số): Hệ số của ẩn $y$ trong hai phương trình là $-3$ và $3$ là hai số đối nhau.\n• Bước 2 (Cộng từng vế để triệt tiêu $y$): Cộng từng vế hai phương trình của hệ, ta được:\n  $(2x + 4x) + (-3y + 3y) = 1 + 11$\n  $6x = 12$, suy ra $x = 2$.\n• Bước 3 (Tìm ẩn $y$ và kết luận): Thay $x = 2$ vào phương trình $4x + 3y = 11$, ta được:\n  $4(2) + 3y = 11$\n  $3y = 3$, suy ra $y = 1$.\n• Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
          },
          {
            "title": "Ví dụ 2b (Trường hợp các hệ số của một ẩn bằng nhau)",
            "problem": "Giải hệ phương trình sau bằng phương pháp cộng đại số:\n$$\\begin{cases} 3x + 2y = 8 \\\\ 3x - y = 5 \\end{cases}$$",
            "solution": "• Bước 1 (Nhận xét hệ số): Hệ số của ẩn $x$ trong cả hai phương trình đều bằng $3$.\n• Bước 2 (Trừ từng vế để triệt tiêu $x$): Trừ từng vế phương trình thứ nhất cho phương trình thứ hai, ta được:\n  $(3x - 3x) + [2y - (-y)] = 8 - 5$\n  $3y = 3$, suy ra $y = 1$.\n• Bước 3 (Tìm ẩn $x$ và kết luận): Thay $y = 1$ vào phương trình $3x - y = 5$, ta được:\n  $3x - 1 = 5$\n  $3x = 6$, suy ra $x = 2$.\n• Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
          },
          {
            "title": "Ví dụ 2c (Trường hợp hệ số không bằng nhau và không đối nhau)",
            "problem": "Giải hệ phương trình sau bằng phương pháp cộng đại số:\n$$\\begin{cases} 3x - 2y = 4 \\\\ 2x + y = 5 \\end{cases}$$",
            "solution": "• Bước 1 (Nhân tạo hệ số đối nhau): Nhân hai vế phương trình thứ hai với $2$, ta được hệ mới:\n  $$\\begin{cases} 3x - 2y = 4 \\\\ 4x + 2y = 10 \\end{cases}$$\n• Bước 2 (Cộng từng vế để triệt tiêu $y$): Cộng từng vế hai phương trình của hệ, ta được:\n  $(3x + 4x) + (-2y + 2y) = 4 + 10$\n  $7x = 14$, suy ra $x = 2$.\n• Bước 3 (Tìm ẩn $y$ và kết luận): Thay $x = 2$ vào phương trình $2x + y = 5$, ta được:\n  $2(2) + y = 5$, suy ra $y = 1$.\n• Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
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
        "exampleProblem": "Giải hệ phương trình sau:\n$$\\begin{cases} 2x - y = 5 \\\\ -2x + y = 1 \\end{cases}$$",
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
        "exampleProblem": "Dùng MTCT kiểm tra nghiệm của hệ phương trình:\n$$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "exampleSolution": "• Bước 1 (Nhập hệ số vào máy tính): Bấm MENU 9 1 2, nhập lần lượt các hệ số: $2 = 3 = 7 =$ và $3 = -1 = 5 =$.\n• Bước 2 (Đọc kết quả hiển thị): Màn hình hiển thị $x = 2$ và $y = 1$. Vậy hệ phương trình có nghiệm duy nhất là $(2; 1)$."
      }
    ],
    "tips": [
      "Khi dùng phương pháp thế: Nên chọn phương trình có hệ số của một ẩn bằng 1 hoặc -1 để biểu diễn ẩn đó theo ẩn kia đơn giản nhất, tránh phát sinh phân số.",
      "Khi dùng phương pháp cộng đại số: Nếu hệ số đối nhau thì CỘNG từng vế; nếu hệ số bằng nhau thì TRỪ từng vế. Chú ý đổi dấu toàn bộ vế phải khi trừ."
    ],
    "traps": [
      "BẪY QUÊN ĐỔI DẤU KHI TRỪ TỪNG VẾ: Khi trừ hai phương trình, nhớ đổi dấu tất cả các hạng tử của phương trình bị trừ (đặc biệt là dấu trừ trước số âm).",
      "BẪY HỆ VÔ NGHIỆM VÀ VÔ SỐ NGHIỆM: Nếu ra 0x = 0 (luôn đúng) thì hệ có vô số nghiệm; nếu ra 0x = k (với k ≠ 0) thì hệ vô nghiệm."
    ],
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
        "question": "Khi giải hệ phương trình:\n$$\\begin{cases} x = 2y + 1 \\\\ 3x - 2y = 7 \\end{cases}$$\nbằng phương pháp thế, phương trình một ẩn $y$ thu được là:",
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
        "question": "Nghiệm của hệ phương trình:\n$$\\begin{cases} x - 3y = 2 \\\\ 2x + y = 11 \\end{cases}$$\nlà:",
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
        "question": "Cộng từng vế hai phương trình của hệ:\n$$\\begin{cases} 2x + 3y = 8 \\\\ 5x - 3y = 6 \\end{cases}$$\nta thu được phương trình một ẩn là:",
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
        "question": "Trừ từng vế phương trình thứ nhất cho phương trình thứ hai của hệ:\n$$\\begin{cases} 3x + 2y = 7 \\\\ 3x - y = 1 \\end{cases}$$\nta thu được phương trình:",
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
        "question": "Nghiệm của hệ phương trình:\n$$\\begin{cases} 3x - 2y = 4 \\\\ 2x + y = 5 \\end{cases}$$\nlà:",
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
        "question": "Biết $(x; y)$ là nghiệm của hệ phương trình:\n$$\\begin{cases} 7x + 4y = 18 \\\\ 3x - 4y = 2 \\end{cases}$$\nGiá trị của tổng $S = x + y$ là:",
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
        "question": "Khẳng định nào sau đây là đúng về tập nghiệm của hệ phương trình:\n$$\\begin{cases} 2x - y = 5 \\\\ -2x + y = 1 \\end{cases}$$?",
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
        "question": "Hệ phương trình:\n$$\\begin{cases} 2x - 4y = -2 \\\\ x - 2y = -1 \\end{cases}$$\ncó số nghiệm là:",
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
    "youtubeVideoId": "xDvxdsSoGZQ",
    "youtubeVideoTitle": "Bài Giảng Video: Giải Bài Toán Bằng Cách Lập Hệ Phương Trình (Tiết 1) - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "xDvxdsSoGZQ",
        "title": "Tiết 1: Các bước lập hệ & Toán số học, chuyển động"
      },
      {
        "id": "ckS9bt91TQg",
        "title": "Tiết 2: Toán năng suất, phần trăm và hình học"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.3.1",
        "title": "Ví dụ 1: Các bước chuẩn giải bài toán bằng cách lập hệ phương trình",
        "question": "Thứ tự 3 bước chuẩn để giải một bài toán bằng cách lập hệ phương trình là:",
        "options": [
          "Bước 1: Lập hệ phương trình → Bước 2: Giải hệ phương trình → Bước 3: Kiểm tra và kết luận",
          "Bước 1: Giải hệ phương trình → Bước 2: Lập hệ phương trình → Bước 3: Kiểm tra và kết luận",
          "Bước 1: Kiểm tra và kết luận → Bước 2: Lập hệ phương trình → Bước 3: Giải hệ phương trình",
          "Bước 1: Lập hệ phương trình → Bước 2: Kết luận ngay không cần giải hệ"
        ],
        "correctIndex": 0,
        "explanation": "Quy trình giải chuẩn mực gồm 3 bước: Lập hệ phương trình → Giải hệ phương trình → Kiểm tra điều kiện và kết luận."
      },
      {
        "id": "vq-9.3.2",
        "title": "Ví dụ 2: Bài toán chuyển động trên sông (ca nô)",
        "question": "Một ca nô đi xuôi dòng khúc sông dài $42\\text{ km}$ hết $1,5\\text{ giờ}$ và ngược dòng khúc sông đó hết $2,1\\text{ giờ}$. Vận tốc dòng nước là:",
        "options": [
          "$4\\text{ km/h}$",
          "$24\\text{ km/h}$",
          "$5\\text{ km/h}$",
          "$3\\text{ km/h}$"
        ],
        "correctIndex": 0,
        "explanation": "Vận tốc xuôi dòng: $v_{\\text{xuôi}} = 42 : 1,5 = 28\\text{ km/h}$ ($v_{\\text{thực}} + v_{\\text{nước}} = 28$). Vận tốc ngược dòng: $v_{\\text{ngược}} = 42 : 2,1 = 20\\text{ km/h}$ ($v_{\\text{thực}} - v_{\\text{nước}} = 20$). Trừ hai phương trình: $2v_{\\text{nước}} = 8 \\Rightarrow v_{\\text{nước}} = 4\\text{ km/h}$."
      },
      {
        "id": "vq-9.3.3",
        "title": "Ví dụ 3: Bài toán năng suất và vượt mức phần trăm",
        "question": "Tháng thứ nhất hai tổ may được $800$ chiếc áo. Tháng thứ hai tổ một vượt mức $15\\%$, tổ hai vượt mức $20\\%$ nên cả hai tổ may được $945$ chiếc áo. Gọi $x, y$ là số áo mỗi tổ may trong tháng thứ nhất. Hệ phương trình mô tả bài toán là:",
        "options": [
          "$\\begin{cases} x + y = 800 \\\\ 1,15x + 1,20y = 945 \\end{cases}$",
          "$\\begin{cases} x + y = 945 \\\\ 1,15x + 1,20y = 800 \\end{cases}$",
          "$\\begin{cases} x + y = 800 \\\\ 0,15x + 0,20y = 945 \\end{cases}$",
          "$\\begin{cases} x + y = 800 \\\\ 15x + 20y = 945 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Tháng 1 hai tổ may 800 áo: $x + y = 800$. Tháng 2 vượt mức: tổ 1 may $(1 + 0,15)x = 1,15x$, tổ 2 may $(1 + 0,20)y = 1,20y$, tổng là $1,15x + 1,20y = 945$."
      },
      {
        "id": "vq-9.3.4",
        "title": "Ví dụ 4: Bài toán hình học thay đổi kích thước chữ nhật",
        "question": "Một mảnh vườn hình chữ nhật có chu vi $64\\text{ m}$. Nếu tăng chiều dài thêm $2\\text{ m}$ và tăng chiều rộng thêm $3\\text{ m}$ thì diện tích tăng thêm $88\\text{ m}^2$. Chiều dài và chiều rộng ban đầu lần lượt là:",
        "options": [
          "$18\\text{ m}$ và $14\\text{ m}$",
          "$20\\text{ m}$ và $12\\text{ m}$",
          "$16\\text{ m}$ và $16\\text{ m}$",
          "$19\\text{ m}$ và $13\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Nửa chu vi: $x + y = 32$. Diện tích tăng thêm: $(x + 2)(y + 3) - xy = 88 \\Rightarrow 3x + 2y = 82$. Ta có hệ: $\\begin{cases} x + y = 32 \\\\ 3x + 2y = 82 \\end{cases} \\Rightarrow x = 18\\text{ m}, y = 14\\text{ m}$."
      }
    ],
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
    "tips": [
      "Luôn lập bảng phân tích đại lượng (Toán chuyển động: s = v · t; Toán năng suất: Công việc = Năng suất · Thời gian) để dễ dàng tìm ra 2 phương trình.",
      "Đối chiếu nghiệm tìm được với điều kiện ban đầu của ẩn trước khi đưa ra câu trả lời kết luận."
    ],
    "traps": [
      "BẪY ĐƠN VỊ THỜI GIAN: Phải đổi tất cả về cùng đơn vị trước khi tính (ví dụ: 1 giờ 30 phút = 1,5 giờ; 40 phút = 2/3 giờ).",
      "BẪY TOÁN CHUYỂN ĐỘNG TRÊN SÔNG: Vận tốc xuôi dòng = Vận tốc thực + Vận tốc nước; Vận tốc ngược dòng = Vận tốc thực - Vận tốc nước (không được nhầm dấu)."
    ],
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
  },
  "t9-b4-pt-quy-ve-bac-nhat": {
    "id": "t9-b4-pt-quy-ve-bac-nhat",
    "lessonNumber": 4,
    "title": "Bài 4: Phương trình quy về phương trình bậc nhất một ẩn",
    "bookChapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
    "scenarioTitle": "Tình huống: Tính vận tốc ca nô trên dòng sông và chia sẻ công việc",
    "scenarioFrames": [],
    "youtubeVideoId": "4o3cQ3jX57w",
    "youtubeVideoTitle": "Bài Giảng Video: Phương Trình Quy Về Phương Trình Bậc Nhất Một Ẩn - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "4o3cQ3jX57w",
        "title": "Tiết 1: Phương trình tích"
      },
      {
        "id": "eZ9vLzK8Uu0",
        "title": "Tiết 2: Phương trình chứa ẩn ở mẫu thức"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.4.1",
        "title": "Ví dụ 1: Giải phương trình tích cơ bản",
        "question": "Nghiệm của phương trình tích $(2x - 4)(x + 3) = 0$ là:",
        "options": [
          "$x = 2$ hoặc $x = -3$",
          "$x = -2$ hoặc $x = 3$",
          "$x = 4$ hoặc $x = -3$",
          "$x = 2$ hoặc $x = 3$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $(2x - 4)(x + 3) = 0 \Leftrightarrow 2x - 4 = 0$ hoặc $x + 3 = 0 \Leftrightarrow x = 2$ hoặc $x = -3$."
      },
      {
        "id": "vq-9.4.2",
        "title": "Ví dụ 2: Tìm điều kiện xác định của phương trình",
        "question": "Điều kiện xác định của phương trình $\\frac{x + 1}{x - 2} = \\frac{3}{x + 1}$ là:",
        "options": [
          "$x \\ne 2$ và $x \\ne -1$",
          "$x \\ne 2$",
          "$x \\ne -1$",
          "$x \\ne -2$ và $x \\ne 1$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình chứa ẩn ở mẫu xác định khi tất cả các mẫu thức khác 0: $x - 2 \\ne 0$ và $x + 1 \\ne 0 \\Leftrightarrow x \\ne 2$ và $x \\ne -1$."
      },
      {
        "id": "vq-9.4.3",
        "title": "Ví dụ 3: Nghiệm ngoại lai của phương trình chứa ẩn ở mẫu",
        "question": "Giải phương trình $\\frac{x^2 - 4}{x - 2} = 0$. Phương trình có bao nhiêu nghiệm?",
        "options": [
          "1 nghiệm ($x = -2$)",
          "2 nghiệm ($x = 2$ và $x = -2$)",
          "Vô nghiệm",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne 2$. Phương trình $\\Leftrightarrow x^2 - 4 = 0 \\Leftrightarrow x = 2$ (loại do không thỏa mãn ĐKXĐ) hoặc $x = -2$ (thỏa mãn ĐKXĐ). Vậy phương trình chỉ có duy nhất 1 nghiệm $x = -2$."
      },
      {
        "id": "vq-9.4.4",
        "title": "Ví dụ 4: Vận tốc xuôi dòng và ngược dòng",
        "question": "Một ca nô có vận tốc thực khi nước yên lặng là $v\\text{ (km/h)}$, vận tốc dòng nước là $3\\text{ km/h}$. Biểu thức biểu thị vận tốc xuôi dòng và ngược dòng của ca nô lần lượt là:",
        "options": [
          "$v + 3\\text{ (km/h)}$ và $v - 3\\text{ (km/h)}$",
          "$v - 3\\text{ (km/h)}$ và $v + 3\\text{ (km/h)}$",
          "$3v\\text{ (km/h)}$ và $\\frac{v}{3}\\text{ (km/h)}$",
          "$v + 3\\text{ (km/h)}$ và $3 - v\\text{ (km/h)}$"
        ],
        "correctIndex": 0,
        "explanation": "Khi xuôi dòng, vận tốc ca nô được tăng thêm bởi dòng nước: $v_{\\text{xuôi}} = v + v_{\\text{nước}} = v + 3\\text{ (km/h)}$. Khi ngược dòng: $v_{\\text{ngược}} = v - v_{\\text{nước}} = v - 3\\text{ (km/h)}$."
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Phương trình tích và cách giải",
        "points": [
          "Dạng tổng quát: $A(x) \\cdot B(x) = 0$.",
          "Quy tắc giải: Muốn giải phương trình $A(x) \\cdot B(x) = 0$, ta giải hai phương trình $A(x) = 0$ và $B(x) = 0$, rồi lấy tất cả các nghiệm của chúng:",
          "  $A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x) = 0$ hoặc $B(x) = 0$.",
          "Phương pháp biến đổi: Chuyển tất cả các hạng tử sang vế trái (vế phải bằng 0), sau đó phân tích vế trái thành nhân tử (đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử)."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 9 KNTT Trang 19)",
        "exampleProblem": "Giải các phương trình sau:\n  a) $(3x - 2)(x + 1) = 0$\n  b) $x^2 - 4 + (x - 2)(2x + 3) = 0$.",
        "exampleSolution": "• Câu a: $(3x - 2)(x + 1) = 0 \\Leftrightarrow 3x - 2 = 0$ hoặc $x + 1 = 0 \\Leftrightarrow x = \\frac{2}{3}$ hoặc $x = -1$.\n  Vậy tập nghiệm của phương trình là $S = \\left\\{-\\frac{2}{3}; -1\\right\\}$.\n• Câu b: Phân tích vế trái thành nhân tử:\n  $(x - 2)(x + 2) + (x - 2)(2x + 3) = 0\\n  \\Leftrightarrow (x - 2)[(x + 2) + (2x + 3)] = 0\\n  \\Leftrightarrow (x - 2)(3x + 5) = 0\\n  \\Leftrightarrow x - 2 = 0$ hoặc $3x + 5 = 0 \\Leftrightarrow x = 2$ hoặc $x = -\\frac{5}{3}$.\n  Vậy tập nghiệm của phương trình là $S = \\left\\{2; -\\frac{5}{3}\\right\\}$."
      },
      {
        "index": "2",
        "title": "Phương trình chứa ẩn ở mẫu thức",
        "points": [
          "Điều kiện xác định (ĐKXĐ): Điều kiện của ẩn để tất cả các mẫu thức trong phương trình đều khác 0.",
          "Quy trình 4 bước giải phương trình chứa ẩn ở mẫu thức:",
          "  • Bước 1: Tìm điều kiện xác định (ĐKXĐ) của phương trình.",
          "  • Bước 2: Quy đồng mẫu thức hai vế của phương trình rồi khử mẫu (dùng dấu suy ra $\\Rightarrow$).",
          "  • Bước 3: Giải phương trình vừa nhận được.",
          "  • Bước 4 (Kết luận): Trong các giá trị của ẩn tìm được ở Bước 3, các giá trị thỏa mãn ĐKXĐ chính là nghiệm của phương trình đã cho; các giá trị không thỏa mãn ĐKXĐ bị loại (gọi là nghiệm ngoại lai)."
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 9 KNTT Trang 20)",
        "exampleProblem": "Giải phương trình: $\\frac{x + 2}{x - 2} - \\frac{2}{x(x - 2)} = 1$.",
        "exampleSolution": "• Bước 1 (ĐKXĐ): $x \\ne 0$ và $x - 2 \\ne 0 \\Leftrightarrow x \\ne 0$ và $x \\ne 2$.\n• Bước 2 (Quy đồng và khử mẫu): Mẫu thức chung là $x(x - 2)$.\n  $\\frac{x(x + 2)}{x(x - 2)} - \\frac{2}{x(x - 2)} = \\frac{x(x - 2)}{x(x - 2)}\\n  \\Rightarrow x(x + 2) - 2 = x(x - 2)$.\n• Bước 3 (Giải phương trình):\n  $x^2 + 2x - 2 = x^2 - 2x\\n  \\Leftrightarrow 2x + 2x = 2 \\Leftrightarrow 4x = 2 \\Leftrightarrow x = \\frac{1}{2}$.\n• Bước 4 (Đối chiếu và kết luận):\n  Giá trị $x = \\frac{1}{2}$ thỏa mãn ĐKXĐ ($x \\ne 0, x \\ne 2$).\n  Vậy nghiệm của phương trình là $x = \\frac{1}{2}$."
      },
      {
        "index": "3",
        "title": "Ứng dụng giải toán thực tế quy về phương trình bậc nhất",
        "points": [
          "Các dạng toán thực tế thường gặp:",
          "  • Toán chuyển động dòng nước: $v_{\\text{xuôi}} = v_{\\text{thực}} + v_{\\text{nước}}$, $v_{\\text{ngược}} = v_{\\text{thực}} - v_{\\text{nước}}$, $t = \\frac{s}{v}$.",
          "  • Toán năng suất công việc (làm chung - làm riêng): Coi toàn bộ công việc là $1$ đơn vị. Nếu hoàn thành trong $x$ ngày thì mỗi ngày làm được $\\frac{1}{x}$ công việc.",
          "  • Toán kế hoạch và thực tế: Số sản phẩm mỗi ngày = $\\frac{\\text{Tổng số sản phẩm}}{\\text{Số ngày}}$."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 9 Cánh Diều Trang 16)",
        "exampleProblem": "Một ca nô chạy xuôi dòng một khúc sông dài $45\\text{ km}$, sau đó chạy ngược dòng $18\\text{ km}$ hết tổng cộng $3\\text{ giờ}$. Biết vận tốc dòng nước là $3\\text{ km/h}$. Tính vận tốc thực của ca nô.",
        "exampleSolution": "• Gọi vận tốc thực của ca nô là $v\\text{ (km/h)}$, điều kiện $v > 3$.\n• Vận tốc xuôi dòng: $v + 3\\text{ (km/h)}$; Vận tốc ngược dòng: $v - 3\\text{ (km/h)}$.\n• Thời gian xuôi dòng: $\\frac{45}{v + 3}\\text{ (giờ)}$; Thời gian ngược dòng: $\\frac{18}{v - 3}\\text{ (giờ)}$.\n• Do tổng thời gian là $3\\text{ giờ}$ nên ta có phương trình:\n  $\\frac{45}{v + 3} + \\frac{18}{v - 3} = 3\\n  \\Leftrightarrow \\frac{15}{v + 3} + \\frac{6}{v - 3} = 1\\n  \\Rightarrow 15(v - 3) + 6(v + 3) = (v + 3)(v - 3)\\n  \\Leftrightarrow 15v - 45 + 6v + 18 = v^2 - 9\\n  \\Leftrightarrow 21v - 27 = v^2 - 9\\n  \\Leftrightarrow v^2 - 21v + 18 = 0\\n  \\dots$ (Đối chiếu điều kiện thực tế để chọn nghiệm phù hợp)."
      }
    ],
    "tips": [
      "Luôn tìm Điều Kiện Xác Định (ĐKXĐ) đầu tiên trước khi biến đổi khử mẫu!",
      "Khi chuyển vế để giải phương trình tích, nhớ đổi dấu và cố gắng đặt nhân tử chung thay vì nhân tung ra.",
      "Đối với phương trình chứa ẩn ở mẫu, bắt buộc phải dùng dấu suy ra $(\\Rightarrow)$ khi khử mẫu vì phép khử mẫu có thể làm xuất hiện nghiệm ngoại lai.",
      "Luôn đối chiếu nghiệm tìm được với ĐKXĐ trước khi ghi kết luận tập nghiệm $S$."
    ],
    "traps": [
      "Bẫy chia cả hai vế cho biểu thức chứa ẩn: Ví dụ phương trình $x(x - 2) = 3(x - 2)$, nếu chia cho $(x - 2)$ sẽ làm mất nghiệm $x = 2$!",
      "Bẫy quên đối chiếu ĐKXĐ: Rất nhiều bạn học sinh tính ra nghiệm trùng với giá trị làm mẫu bằng 0 mà vẫn kết luận nhận nghiệm.",
      "Bẫy sai dấu khi đổi dấu mẫu thức: Chú ý $1 - x = -(x - 1)$, khi đổi dấu mẫu thức cần đổi dấu của phân thức đứng trước.",
      "Bẫy quên nhân cả hai vế với mẫu chung khi một vế là số nguyên: Ví dụ vế phải là số $1$ hay $2$ thì phải nhân cả số đó với mẫu chung."
    ],
    "quizQuestions": [
      {
        "id": "quiz-9.4.1",
        "badge": "Câu 1 - Nhận biết điều kiện xác định",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.11a (Trang 21)",
        "question": "Điều kiện xác định của phương trình $\\frac{3}{x - 4} = 2$ là:",
        "options": [
          "$x \\ne 4$",
          "$x \\ne -4$",
          "$x \\ne 2$",
          "$x \\ne 0$"
        ],
        "correctIndex": 0,
        "explanation": "Mẫu thức của phương trình là $x - 4$. Điều kiện xác định là mẫu thức khác 0: $x - 4 \\ne 0 \\Leftrightarrow x \\ne 4$."
      },
      {
        "id": "quiz-9.4.2",
        "badge": "Câu 2 - Nhận biết nghiệm phương trình tích",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12a (Trang 21)",
        "question": "Tập nghiệm của phương trình tích $(x - 3)(2x + 8) = 0$ là:",
        "options": [
          "$S = \\{3; -4\\}$",
          "$S = \\{-3; 4\\}$",
          "$S = \\{3; 4\\}$",
          "$S = \\{-3; -4\\}$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 3)(2x + 8) = 0 \\Leftrightarrow x - 3 = 0$ hoặc $2x + 8 = 0 \\Leftrightarrow x = 3$ hoặc $x = -4$. Vậy $S = \\{3; -4\\}$."
      },
      {
        "id": "quiz-9.4.3",
        "badge": "Câu 3 - Nhận biết ĐKXĐ của hai mẫu thức",
        "source": "SGK Toán 9 Cánh Diều Bài 1b (Trang 15)",
        "question": "Điều kiện xác định của phương trình $\\frac{x + 1}{x - 2} + \\frac{2}{x + 3} = 0$ là:",
        "options": [
          "$x \\ne 2$ và $x \\ne -3$",
          "$x \\ne -2$ và $x \\ne 3$",
          "$x \\ne 2$",
          "$x \\ne -3$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình có hai mẫu thức là $x - 2$ và $x + 3$. ĐKXĐ là: $\\begin{cases} x - 2 \\ne 0 \\\\ x + 3 \\ne 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ne 2 \\\\ x \\ne -3 \\end{cases}$."
      },
      {
        "id": "quiz-9.4.4",
        "badge": "Câu 4 - Kiểm tra nghiệm phương trình tích",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1a (Trang 18)",
        "question": "Trong các số sau, số nào là một nghiệm của phương trình $(2x - 5)(x + 1) = 0$?",
        "options": [
          "$x = 2,5$",
          "$x = 5$",
          "$x = 1$",
          "$x = -2,5$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $(2x - 5)(x + 1) = 0 \\Leftrightarrow 2x - 5 = 0$ hoặc $x + 1 = 0 \\Leftrightarrow x = 2,5$ hoặc $x = -1$. Do đó $x = 2,5$ là một nghiệm."
      },
      {
        "id": "quiz-9.4.5",
        "badge": "Câu 5 - ĐKXĐ mẫu thức bậc hai",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.11b (Trang 21)",
        "question": "Điều kiện xác định của phương trình $\\frac{5}{x^2 - 9} = 1$ là:",
        "options": [
          "$x \\ne 3$ và $x \\ne -3$",
          "$x \\ne 9$",
          "$x \\ne 3$",
          "$x \\ne -3$"
        ],
        "correctIndex": 0,
        "explanation": "Mẫu thức là $x^2 - 9 = (x - 3)(x + 3)$. Để mẫu thức khác 0 thì $x^2 \\ne 9 \\Leftrightarrow x \\ne \\pm 3$."
      },
      {
        "id": "quiz-9.4.6",
        "badge": "Câu 6 - Nhận biết nghiệm phân thức",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12b (Trang 21)",
        "question": "Nghiệm của phương trình $\\frac{x - 1}{x + 2} = 0$ là:",
        "options": [
          "$x = 1$",
          "$x = -2$",
          "$x = 1$ và $x = -2$",
          "Phương trình vô nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne -2$. Phương trình $\\frac{x - 1}{x + 2} = 0 \\Rightarrow x - 1 = 0 \\Leftrightarrow x = 1$ (thỏa mãn ĐKXĐ). Vậy nghiệm là $x = 1$."
      },
      {
        "id": "quiz-9.4.7",
        "badge": "Câu 7 - Số nghiệm của phương trình tích",
        "source": "SGK Toán 9 Cánh Diều Bài 1a (Trang 15)",
        "question": "Phương trình $x(3x - 6) = 0$ có bao nhiêu nghiệm?",
        "options": [
          "2 nghiệm",
          "1 nghiệm",
          "0 nghiệm (vô nghiệm)",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $x(3x - 6) = 0 \\Leftrightarrow x = 0$ hoặc $3x - 6 = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Vậy phương trình có đúng 2 nghiệm phân biệt."
      },
      {
        "id": "quiz-9.4.8",
        "badge": "Câu 8 - Nhận biết ĐKXĐ chứa ẩn ở mẫu",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1c (Trang 18)",
        "question": "Điều kiện xác định của phương trình $\\frac{2x}{x - 1} = \\frac{3}{x}$ là:",
        "options": [
          "$x \\ne 0$ và $x \\ne 1$",
          "$x \\ne 1$",
          "$x \\ne 0$",
          "$x \\ne -1$ và $x \\ne 0$"
        ],
        "correctIndex": 0,
        "explanation": "Các mẫu thức chứa ẩn là $x - 1$ và $x$. ĐKXĐ là: $x \\ne 0$ và $x - 1 \\ne 0 \\Leftrightarrow x \\ne 0$ và $x \\ne 1$."
      },
      {
        "id": "quiz-9.4.9",
        "badge": "Câu 9 - Giải phương trình tích có nhân tử chung",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13a (Trang 21)",
        "question": "Giải phương trình $(x - 2)(3x + 1) = (x - 2)(x + 5)$. Tập nghiệm $S$ là:",
        "options": [
          "$S = \\{2\\}$",
          "$S = \\{2; 5\\}$",
          "$S = \\{-1; 5\\}$",
          "$S = \\{2; -1; 5\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển vế: $(x - 2)(3x + 1) - (x - 2)(x + 5) = 0 \\Leftrightarrow (x - 2)[(3x + 1) - (x + 5)] = 0 \\Leftrightarrow (x - 2)(2x - 4) = 0 \\Leftrightarrow 2(x - 2)^2 = 0 \\Leftrightarrow x = 2$. Vậy $S = \\{2\\}$."
      },
      {
        "id": "quiz-9.4.10",
        "badge": "Câu 10 - Đưa về phương trình tích bằng hằng đẳng thức",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13b (Trang 21)",
        "question": "Nghiệm của phương trình $(2x - 1)^2 - 9 = 0$ là:",
        "options": [
          "$x = 2$ hoặc $x = -1$",
          "$x = 5$ hoặc $x = -4$",
          "$x = 2$ hoặc $x = 1$",
          "$x = -2$ hoặc $x = 1$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng hằng đẳng thức $a^2 - b^2$: $(2x - 1 - 3)(2x - 1 + 3) = 0 \\Leftrightarrow (2x - 4)(2x + 2) = 0 \\Leftrightarrow 2x - 4 = 0$ hoặc $2x + 2 = 0 \\Leftrightarrow x = 2$ hoặc $x = -1$."
      },
      {
        "id": "quiz-9.4.11",
        "badge": "Câu 11 - Giải phương trình chứa ẩn ở mẫu",
        "source": "SGK Toán 9 Cánh Diều Bài 2c (Trang 15)",
        "question": "Tập nghiệm của phương trình $\\frac{x + 3}{x - 3} + \\frac{x - 3}{x + 3} = 2$ là:",
        "options": [
          "$S = \\emptyset$ (Phương trình vô nghiệm)",
          "$S = \\{0\\}$",
          "$S = \\{3; -3\\}$",
          "$S = \\mathbb{R} \\setminus \\{\\pm 3\\}$"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne \\pm 3$. Quy đồng khử mẫu: $(x + 3)^2 + (x - 3)^2 = 2(x - 3)(x + 3) \\Leftrightarrow (x^2 + 6x + 9) + (x^2 - 6x + 9) = 2(x^2 - 9) \\Leftrightarrow 2x^2 + 18 = 2x^2 - 18 \\Leftrightarrow 18 = -18$ (vô lý). Vậy phương trình vô nghiệm."
      },
      {
        "id": "quiz-9.4.12",
        "badge": "Câu 12 - Giải phương trình quy về bậc nhất",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2a (Trang 19)",
        "question": "Nghiệm của phương trình $\\frac{x}{x - 2} - \\frac{2}{x + 2} = \\frac{4}{x^2 - 4}$ là:",
        "options": [
          "$x = 0$",
          "$x = 2$",
          "$x = -2$",
          "$x = 0$ và $x = 2$"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne \\pm 2$. Mẫu chung $x^2 - 4 = (x - 2)(x + 2)$. Khử mẫu: $x(x + 2) - 2(x - 2) = 4 \\Leftrightarrow x^2 + 2x - 2x + 4 = 4 \\Leftrightarrow x^2 = 0 \\Leftrightarrow x = 0$ (thỏa mãn ĐKXĐ). Vậy nghiệm là $x = 0$."
      },
      {
        "id": "quiz-9.4.13",
        "badge": "Câu 13 - Bẫy nghiệm ngoại lai",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.14a (Trang 22)",
        "question": "Phương trình $\\frac{x^2 - 4}{x - 2} = 0$ có bao nhiêu nghiệm?",
        "options": [
          "1 nghiệm",
          "2 nghiệm",
          "0 nghiệm",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne 2$. Khử mẫu: $x^2 - 4 = 0 \\Leftrightarrow x = 2$ hoặc $x = -2$. Đối chiếu ĐKXĐ: $x = 2$ bị loại, $x = -2$ thỏa mãn. Vậy phương trình có đúng 1 nghiệm duy nhất là $x = -2$."
      },
      {
        "id": "quiz-9.4.14",
        "badge": "Câu 14 - Tổng các nghiệm của phương trình tích",
        "source": "Đề tuyển sinh vào 10 THPT TP. Hà Nội",
        "question": "Tổng tất cả các nghiệm của phương trình $(x^2 - 4)(2x - 6) = 0$ là:",
        "options": [
          "$3$",
          "$5$",
          "$-3$",
          "$1$"
        ],
        "correctIndex": 0,
        "explanation": "$(x^2 - 4)(2x - 6) = 0 \\Leftrightarrow x^2 - 4 = 0$ hoặc $2x - 6 = 0 \\Leftrightarrow x = 2$, $x = -2$ hoặc $x = 3$. Tổng các nghiệm là: $2 + (-2) + 3 = 3$."
      },
      {
        "id": "quiz-9.4.15",
        "badge": "Câu 15 - Vận dụng giải phương trình phân thức",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.15 (Trang 22)",
        "question": "Tập nghiệm của phương trình $\\frac{x + 2}{x - 2} - \\frac{x - 2}{x + 2} = \\frac{16}{x^2 - 4}$ là:",
        "options": [
          "$S = \\emptyset$",
          "$S = \\{2\\}$",
          "$S = \\{-2\\}$",
          "$S = \\{2; -2\\}$"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne \\pm 2$. Mẫu chung là $x^2 - 4$. Khử mẫu ta được: $(x + 2)^2 - (x - 2)^2 = 16 \\Leftrightarrow (x^2 + 4x + 4) - (x^2 - 4x + 4) = 16 \\Leftrightarrow 8x = 16 \\Leftrightarrow x = 2$. Đối chiếu ĐKXĐ: $x = 2$ không thỏa mãn (bị loại). Vậy phương trình vô nghiệm ($S = \\emptyset$)."
      },
      {
        "id": "quiz-9.4.16",
        "badge": "Câu 16 - Vận dụng tìm tham số m để nghiệm thỏa mãn điều kiện",
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hồ Chí Minh",
        "question": "Tìm tất cả các giá trị của tham số $m$ để phương trình $\\frac{x + 2m}{x - 1} = 3$ có nghiệm thỏa mãn $x > 2$.",
        "options": [
          "$m > \\frac{1}{2}$",
          "$m < \\frac{1}{2}$",
          "$m \\ge \\frac{1}{2}$",
          "$m \\ne -\\frac{1}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne 1$. Phương trình $\\Rightarrow x + 2m = 3(x - 1) \\Leftrightarrow x + 2m = 3x - 3 \\Leftrightarrow 2x = 2m + 3 \\Leftrightarrow x = \\frac{2m + 3}{2}$. Để nghiệm $x > 2$, ta có $\\frac{2m + 3}{2} > 2 \\Leftrightarrow 2m + 3 > 4 \\Leftrightarrow 2m > 1 \\Leftrightarrow m > \\frac{1}{2}$ (khi đó $x > 2 > 1$ nên luôn thỏa mãn ĐKXĐ $x \\ne 1$)."
      },
      {
        "id": "quiz-9.4.17",
        "badge": "Câu 17 - Vận dụng phương trình tích đa thức",
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Đà Nẵng",
        "question": "Tích tất cả các nghiệm của phương trình $(x^2 - 5x + 6)(x^2 - 1) = 0$ là:",
        "options": [
          "$-6$",
          "$6$",
          "$12$",
          "$-12$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $(x^2 - 5x + 6)(x^2 - 1) = 0 \\Leftrightarrow (x - 2)(x - 3)(x - 1)(x + 1) = 0$. Phương trình có 4 nghiệm phân biệt là $x_1 = 2, x_2 = 3, x_3 = 1, x_4 = -1$. Tích các nghiệm là $2 \\cdot 3 \\cdot 1 \\cdot (-1) = -6$."
      },
      {
        "id": "quiz-9.4.18",
        "badge": "Câu 18 - Toán thực tế chuyển động dòng nước",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.16 (Trang 22)",
        "question": "Một ca nô chạy xuôi dòng một khúc sông dài $40\\text{ km}$ rồi quay ngược dòng khúc sông đó hết tổng cộng $4,5\\text{ giờ}$. Biết vận tốc dòng nước là $2\\text{ km/h}$. Vận tốc thực của ca nô khi nước yên lặng là:",
        "options": [
          "$18\\text{ km/h}$",
          "$16\\text{ km/h}$",
          "$20\\text{ km/h}$",
          "$22\\text{ km/h}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi vận tốc thực của ca nô là $v\\text{ (km/h)}$, $v > 2$. Vận tốc xuôi dòng là $v + 2\\text{ (km/h)}$, ngược dòng là $v - 2\\text{ (km/h)}$. Thời gian xuôi và ngược là: $\\frac{40}{v + 2} + \\frac{40}{v - 2} = 4,5$. Với $v = 18$: $\\frac{40}{20} + \\frac{40}{16} = 2 + 2,5 = 4,5\\text{ (giờ)}$ thỏa mãn. Vậy vận tốc thực là $18\\text{ km/h}$."
      },
      {
        "id": "quiz-9.4.19",
        "badge": "Câu 19 - Toán thực tế làm chung làm riêng",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 4 (Trang 21)",
        "question": "Hai tổ công nhân cùng làm chung một công việc thì sau $6\\text{ ngày}$ hoàn thành. Nếu làm riêng một mình thì tổ một hoàn thành nhanh hơn tổ hai $5\\text{ ngày}$. Thời gian tổ một làm riêng một mình xong công việc là:",
        "options": [
          "$10\\text{ ngày}$",
          "$15\\text{ ngày}$",
          "$12\\text{ ngày}$",
          "$8\\text{ ngày}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi thời gian tổ một làm một mình xong việc là $x\\text{ (ngày)}$, $x > 0$. Tổ hai làm trong $x + 5\\text{ (ngày)}$. Phương trình: $\\frac{1}{x} + \\frac{1}{x + 5} = \\frac{1}{6} \\Leftrightarrow 6(2x + 5) = x(x + 5) \\Leftrightarrow x^2 - 7x - 30 = 0 \\Leftrightarrow (x - 10)(x + 3) = 0 \\Leftrightarrow x = 10$ (nhận vì $x > 0$). Vậy tổ một làm trong $10\\text{ ngày}$."
      },
      {
        "id": "quiz-9.4.20",
        "badge": "Câu 20 - Toán thực tế kế hoạch chở hàng",
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội năm học 2023 - 2024",
        "question": "Một đội xe dự định chở $60\\text{ tấn}$ hàng cứu trợ. Khi bắt đầu chở, có $2\\text{ xe}$ được điều đi làm nhiệm vụ khác nên mỗi xe còn lại phải chở thêm $1\\text{ tấn}$ hàng so với dự định. Số xe ban đầu của đội là:",
        "options": [
          "$12\\text{ xe}$",
          "$10\\text{ xe}$",
          "$14\\text{ xe}$",
          "$15\\text{ xe}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số xe ban đầu là $x\\text{ (xe)}$, $x \\in \\mathbb{N}^*, x > 2$. Dự định mỗi xe chở $\\frac{60}{x}\\text{ tấn}$. Thực tế có $x - 2\\text{ xe}$, mỗi xe chở $\\frac{60}{x - 2}\\text{ tấn}$. Phương trình: $\\frac{60}{x - 2} - \\frac{60}{x} = 1 \\Leftrightarrow 60x - 60(x - 2) = x(x - 2) \\Leftrightarrow x^2 - 2x - 120 = 0 \\Leftrightarrow (x - 12)(x + 10) = 0 \\Leftrightarrow x = 12$ (thỏa mãn). Vậy ban đầu đội có $12\\text{ xe}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-9.4.1",
        "badge": "Đúng/Sai 1 - Nhận biết điều kiện xác định",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.11 (Trang 21)",
        "prompt": "Cho phương trình chứa ẩn ở mẫu thức: $\\frac{2x - 1}{x - 3} + \\frac{1}{x + 1} = \\frac{4}{(x - 3)(x + 1)}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 3$ và $x \\ne -1$.",
            "correctAnswer": true,
            "explanation": "Hai mẫu thức $x - 3$ và $x + 1$ khác 0 khi và chỉ khi $x \\ne 3$ và $x \\ne -1$."
          },
          {
            "id": "b",
            "text": "Mẫu thức chung của phương trình là $(x - 3)(x + 1)$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức chung nhỏ nhất là tích $(x - 3)(x + 1)$."
          },
          {
            "id": "c",
            "text": "Giá trị $x = 3$ thỏa mãn điều kiện xác định của phương trình.",
            "correctAnswer": false,
            "explanation": "Tại $x = 3$, mẫu thức $x - 3 = 0$ nên $x = 3$ không thỏa mãn ĐKXĐ."
          },
          {
            "id": "d",
            "text": "Khi $x = 0$, cả hai vế của phương trình đều có giá trị xác định.",
            "correctAnswer": true,
            "explanation": "Thay $x = 0$ vào hai mẫu thức ta được $-3 \\ne 0$ và $1 \\ne 0$ nên phương trình xác định tại $x = 0$."
          }
        ]
      },
      {
        "id": "tf-9.4.2",
        "badge": "Đúng/Sai 2 - Nhận biết giải phương trình tích",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 15)",
        "prompt": "Cho phương trình tích: $(3x - 6)(2x + 1) = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $3x - 6 = 0$ hoặc $2x + 1 = 0$.",
            "correctAnswer": true,
            "explanation": "Quy tắc giải phương trình tích: $A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x) = 0$ hoặc $B(x) = 0$."
          },
          {
            "id": "b",
            "text": "$x = 2$ là một nghiệm của phương trình.",
            "correctAnswer": true,
            "explanation": "Giải $3x - 6 = 0 \\Leftrightarrow 3x = 6 \\Leftrightarrow x = 2$."
          },
          {
            "id": "c",
            "text": "$x = \\frac{1}{2}$ là một nghiệm của phương trình.",
            "correctAnswer": false,
            "explanation": "Giải $2x + 1 = 0 \\Leftrightarrow x = -\\frac{1}{2}$ (không phải $\\frac{1}{2}$)."
          },
          {
            "id": "d",
            "text": "Tập nghiệm của phương trình là $S = \\left\\{2; -\\frac{1}{2}\\right\\}$.",
            "correctAnswer": true,
            "explanation": "Phương trình có hai nghiệm là $x = 2$ và $x = -\\frac{1}{2}$."
          }
        ]
      },
      {
        "id": "tf-9.4.3",
        "badge": "Đúng/Sai 3 - Phân thức bằng 0",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 19)",
        "prompt": "Cho phương trình $\\frac{x^2 - 9}{x - 3} = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 3$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức khác 0: $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$."
          },
          {
            "id": "b",
            "text": "Phương trình có hai nghiệm là $x = 3$ và $x = -3$.",
            "correctAnswer": false,
            "explanation": "$x = 3$ vi phạm ĐKXĐ nên bị loại."
          },
          {
            "id": "c",
            "text": "$x = -3$ là nghiệm duy nhất của phương trình.",
            "correctAnswer": true,
            "explanation": "Tử thức $x^2 - 9 = 0 \\Leftrightarrow x = \\pm 3$. Do $x \\ne 3$ nên chỉ nhận nghiệm $x = -3$."
          },
          {
            "id": "d",
            "text": "Tập nghiệm của phương trình là $S = \\{-3\\}$.",
            "correctAnswer": true,
            "explanation": "Phương trình có duy nhất 1 nghiệm $x = -3$ nên $S = \\{-3\\}$."
          }
        ]
      },
      {
        "id": "tf-9.4.4",
        "badge": "Đúng/Sai 4 - Nhận biết biến đổi đưa về phương trình tích",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13 (Trang 21)",
        "prompt": "Cho phương trình: $x^2 - 4x = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình có thể đưa về phương trình tích bằng cách đặt nhân tử chung là $x$.",
            "correctAnswer": true,
            "explanation": "$x^2 - 4x = x(x - 4) = 0$."
          },
          {
            "id": "b",
            "text": "$x = 0$ là một nghiệm của phương trình.",
            "correctAnswer": true,
            "explanation": "Thay $x = 0$ vào vế trái được $0^2 - 4(0) = 0$."
          },
          {
            "id": "c",
            "text": "Phương trình có nghiệm âm.",
            "correctAnswer": false,
            "explanation": "Hai nghiệm của phương trình là $x = 0$ và $x = 4$, không có nghiệm âm."
          },
          {
            "id": "d",
            "text": "Tổng các nghiệm của phương trình bằng $4$.",
            "correctAnswer": true,
            "explanation": "Tổng hai nghiệm: $0 + 4 = 4$."
          }
        ]
      },
      {
        "id": "tf-9.4.5",
        "badge": "Đúng/Sai 5 - Thông hiểu biến đổi phương trình tích",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 15)",
        "prompt": "Cho phương trình: $(x^2 - 4) + 3(x - 2) = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Ta có $x^2 - 4 = (x - 2)(x + 2)$.",
            "correctAnswer": true,
            "explanation": "Áp dụng hằng đẳng thức hiệu hai bình phương."
          },
          {
            "id": "b",
            "text": "Phương trình có thể viết lại thành $(x - 2)(x + 5) = 0$.",
            "correctAnswer": true,
            "explanation": "$(x - 2)(x + 2) + 3(x - 2) = (x - 2)[(x + 2) + 3] = (x - 2)(x + 5) = 0$."
          },
          {
            "id": "c",
            "text": "Phương trình có 2 nghiệm là $x = 2$ và $x = 5$.",
            "correctAnswer": false,
            "explanation": "Nghiệm thứ hai là $x + 5 = 0 \\Leftrightarrow x = -5$ (không phải $5$)."
          },
          {
            "id": "d",
            "text": "Tích các nghiệm của phương trình bằng $-10$.",
            "correctAnswer": true,
            "explanation": "Tích hai nghiệm: $2 \\cdot (-5) = -10$."
          }
        ]
      },
      {
        "id": "tf-9.4.6",
        "badge": "Đúng/Sai 6 - Thông hiểu phương trình phân thức",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.14 (Trang 22)",
        "prompt": "Cho phương trình: $\\frac{2x - 5}{x - 3} = 1$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 3$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$."
          },
          {
            "id": "b",
            "text": "Khử mẫu phương trình ta được $2x - 5 = x - 3$.",
            "correctAnswer": true,
            "explanation": "Nhân cả hai vế với $x - 3$ được $2x - 5 = 1(x - 3)$."
          },
          {
            "id": "c",
            "text": "Giải phương trình khử mẫu thu được $x = 2$.",
            "correctAnswer": true,
            "explanation": "$2x - x = -3 + 5 \\Leftrightarrow x = 2$."
          },
          {
            "id": "d",
            "text": "Giá trị $x = 2$ không thỏa mãn điều kiện xác định nên phương trình vô nghiệm.",
            "correctAnswer": false,
            "explanation": "$x = 2$ thỏa mãn ĐKXĐ ($2 \\ne 3$) nên $x = 2$ là nghiệm của phương trình."
          }
        ]
      },
      {
        "id": "tf-9.4.7",
        "badge": "Đúng/Sai 7 - Thông hiểu nghiệm ngoại lai",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 20)",
        "prompt": "Cho phương trình: $\\frac{x}{x - 1} - \\frac{1}{x + 1} = \\frac{2}{x^2 - 1}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 1$ và $x \\ne -1$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức chung là $x^2 - 1 = (x - 1)(x + 1) \\ne 0 \\Leftrightarrow x \\ne \\pm 1$."
          },
          {
            "id": "b",
            "text": "Khử mẫu ta được phương trình: $x(x + 1) - (x - 1) = 2$.",
            "correctAnswer": true,
            "explanation": "Quy đồng với mẫu chung $(x - 1)(x + 1)$ ta thu được phương trình tử số này."
          },
          {
            "id": "c",
            "text": "Phương trình sau khi thu gọn là $x^2 = 1$.",
            "correctAnswer": true,
            "explanation": "$x^2 + x - x + 1 = 2 \\Leftrightarrow x^2 + 1 = 2 \\Leftrightarrow x^2 = 1$."
          },
          {
            "id": "d",
            "text": "Phương trình đã cho có 2 nghiệm phân biệt là $x = 1$ và $x = -1$.",
            "correctAnswer": false,
            "explanation": "$x^2 = 1 \\Leftrightarrow x = \\pm 1$, cả hai giá trị này đều vi phạm ĐKXĐ nên bị loại, phương trình vô nghiệm."
          }
        ]
      },
      {
        "id": "tf-9.4.8",
        "badge": "Đúng/Sai 8 - Vận dụng phương trình chứa tham số",
        "source": "Đề thi HSG Toán 9 & Chuyên đề phương trình",
        "prompt": "Cho phương trình chứa tham số $m$: $\\frac{x - 2m}{x - 2} = 3$ (với $m$ là tham số). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 2$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức $x - 2 \\ne 0 \\Leftrightarrow x \\ne 2$."
          },
          {
            "id": "b",
            "text": "Biến đổi phương trình thu được $2x = 6 - 2m$.",
            "correctAnswer": true,
            "explanation": "$x - 2m = 3(x - 2) \\Leftrightarrow x - 2m = 3x - 6 \\Leftrightarrow 2x = 6 - 2m$."
          },
          {
            "id": "c",
            "text": "Nghiệm của phương trình biểu diễn theo $m$ là $x = 3 - m$.",
            "correctAnswer": true,
            "explanation": "$x = \\frac{6 - 2m}{2} = 3 - m$."
          },
          {
            "id": "d",
            "text": "Với $m = 1$, phương trình có nghiệm duy nhất $x = 2$.",
            "correctAnswer": false,
            "explanation": "Khi $m = 1$, ta có $x = 3 - 1 = 2$, giá trị này không thỏa mãn ĐKXĐ ($x \\ne 2$) nên với $m = 1$ phương trình vô nghiệm."
          }
        ]
      },
      {
        "id": "tf-9.4.9",
        "badge": "Đúng/Sai 9 - Toán thực tế chuyển động dòng nước",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.16 (Trang 22)",
        "prompt": "Một chiếc ca nô xuôi dòng khúc sông dài $36\\text{ km}$ rồi quay ngược dòng $36\\text{ km}$. Biết vận tốc dòng nước là $3\\text{ km/h}$. Gọi vận tốc thực của ca nô khi nước yên lặng là $v\\text{ (km/h)}$ ($v > 3$). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Vận tốc của ca nô khi xuôi dòng là $v + 3\\text{ (km/h)}$.",
            "correctAnswer": true,
            "explanation": "Vận tốc xuôi dòng bằng vận tốc thực cộng vận tốc dòng nước."
          },
          {
            "id": "b",
            "text": "Thời gian ca nô đi ngược dòng $36\\text{ km}$ là $\\frac{36}{v - 3}\\text{ (giờ)}$.",
            "correctAnswer": true,
            "explanation": "Thời gian ngược dòng bằng quãng đường chia vận tốc ngược dòng: $\\frac{36}{v - 3}$."
          },
          {
            "id": "c",
            "text": "Thời gian xuôi dòng luôn lớn hơn thời gian ngược dòng trên cùng khúc sông.",
            "correctAnswer": false,
            "explanation": "Vì vận tốc xuôi dòng ($v + 3$) lớn hơn vận tốc ngược dòng ($v - 3$) nên thời gian xuôi dòng phải ít hơn thời gian ngược dòng."
          },
          {
            "id": "d",
            "text": "Nếu tổng thời gian cả đi và về là $5\\text{ giờ}$ thì vận tốc thực của ca nô là $15\\text{ km/h}$.",
            "correctAnswer": true,
            "explanation": "Thay $v = 15$ vào tổng thời gian: $\\frac{36}{15 + 3} + \\frac{36}{15 - 3} = \\frac{36}{18} + \\frac{36}{12} = 2 + 3 = 5\\text{ (giờ)}$ (thỏa mãn)."
          }
        ]
      },
      {
        "id": "tf-9.4.10",
        "badge": "Đúng/Sai 10 - Toán thực tế năng suất làm việc",
        "source": "SGK Toán 9 Cánh Diều Bài 4 (Trang 16)",
        "prompt": "Hai vòi nước cùng chảy vào một bể không có nước thì sau $4\\text{ giờ}$ đầy bể. Nếu chảy một mình, vòi thứ nhất làm đầy bể nhanh hơn vòi thứ hai $6\\text{ giờ}$. Gọi thời gian vòi một chảy một mình đầy bể là $x\\text{ (giờ)}$ ($x > 0$). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Trong $1\\text{ giờ}$, vòi thứ nhất chảy được $\\frac{1}{x}$ bể.",
            "correctAnswer": true,
            "explanation": "Vòi một chảy một mình đầy bể trong $x$ giờ nên mỗi giờ chảy được $\\frac{1}{x}$ bể."
          },
          {
            "id": "b",
            "text": "Thời gian vòi thứ hai chảy một mình đầy bể là $x + 6\\text{ (giờ)}$.",
            "correctAnswer": true,
            "explanation": "Vòi một nhanh hơn vòi hai 6 giờ nghĩa là vòi hai chảy lâu hơn vòi một 6 giờ: $x + 6$ giờ."
          },
          {
            "id": "c",
            "text": "Phương trình lập được là: $\\frac{1}{x} + \\frac{1}{x + 6} = \\frac{1}{4}$.",
            "correctAnswer": true,
            "explanation": "Cả hai vòi cùng chảy 4 giờ đầy bể nên trong 1 giờ hai vòi chảy được $\\frac{1}{4}$ bể."
          },
          {
            "id": "d",
            "text": "Nếu chảy riêng một mình, vòi thứ nhất mất $8\\text{ giờ}$ để làm đầy bể.",
            "correctAnswer": false,
            "explanation": "Giải phương trình: $4(2x + 6) = x(x + 6) \\Leftrightarrow 8x + 24 = x^2 + 6x \\Leftrightarrow x^2 - 2x - 24 = 0 \\Leftrightarrow (x - 6)(x + 4) = 0 \\Leftrightarrow x = 6\\text{ (giờ)}$ (không phải $8$ giờ)."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-9.4.1",
        "badge": "Trả lời ngắn 1 - Nghiệm lớn nhất phương trình tích",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12 (Trang 21)",
        "prompt": "Tìm nghiệm lớn nhất của phương trình tích: $(x - 5)(2x + 6) = 0$.",
        "correctAnswer": "5",
        "acceptableAnswers": ["5", "x=5", "x = 5"],
        "explanation": "Phương trình $\\Leftrightarrow x - 5 = 0$ hoặc $2x + 6 = 0 \\Leftrightarrow x = 5$ hoặc $x = -3$. Nghiệm lớn nhất là $5$."
      },
      {
        "id": "sa-9.4.2",
        "badge": "Trả lời ngắn 2 - Giá trị làm mẫu thức bằng 0",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 15)",
        "prompt": "Tìm giá trị của $x$ để mẫu thức của phân thức $\\frac{3x - 1}{4x - 12}$ bằng 0.",
        "correctAnswer": "3",
        "acceptableAnswers": ["3", "x=3", "x = 3"],
        "explanation": "Mẫu thức bằng 0: $4x - 12 = 0 \\Leftrightarrow 4x = 12 \\Leftrightarrow x = 3$."
      },
      {
        "id": "sa-9.4.3",
        "badge": "Trả lời ngắn 3 - Số nghiệm của phương trình tích",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 18)",
        "prompt": "Phương trình $(x - 1)(x - 2)(x - 3) = 0$ có tất cả bao nhiêu nghiệm phân biệt?",
        "correctAnswer": "3",
        "acceptableAnswers": ["3", "ba"],
        "explanation": "Phương trình có 3 nghiệm phân biệt là $x = 1, x = 2, x = 3$. Vậy có 3 nghiệm."
      },
      {
        "id": "sa-9.4.4",
        "badge": "Trả lời ngắn 4 - Nghiệm của phân thức bằng 0",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12 (Trang 21)",
        "prompt": "Tìm nghiệm của phương trình $\\frac{x - 7}{x + 4} = 0$.",
        "correctAnswer": "7",
        "acceptableAnswers": ["7", "x=7", "x = 7"],
        "explanation": "ĐKXĐ: $x \\ne -4$. Phương trình $\\Rightarrow x - 7 = 0 \\Leftrightarrow x = 7$ (thỏa mãn ĐKXĐ)."
      },
      {
        "id": "sa-9.4.5",
        "badge": "Trả lời ngắn 5 - Tổng các nghiệm phương trình tích",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13 (Trang 21)",
        "prompt": "Tính tổng các nghiệm của phương trình: $(2x - 4)(x + 3) = 0$.",
        "correctAnswer": "-1",
        "acceptableAnswers": ["-1"],
        "explanation": "Phương trình có 2 nghiệm: $x_1 = 2$ và $x_2 = -3$. Tổng các nghiệm là: $2 + (-3) = -1$."
      },
      {
        "id": "sa-9.4.6",
        "badge": "Trả lời ngắn 6 - Số nghiệm sau khi loại nghiệm ngoại lai",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 15)",
        "prompt": "Phương trình $\\frac{x^2 - 16}{x - 4} = 0$ có bao nhiêu nghiệm thỏa mãn điều kiện xác định?",
        "correctAnswer": "1",
        "acceptableAnswers": ["1", "một"],
        "explanation": "ĐKXĐ: $x \\ne 4$. $x^2 - 16 = 0 \\Leftrightarrow x = \\pm 4$. Do $x \\ne 4$ nên $x = 4$ bị loại, chỉ nhận nghiệm $x = -4$. Vậy phương trình có đúng 1 nghiệm."
      },
      {
        "id": "sa-9.4.7",
        "badge": "Trả lời ngắn 7 - Nghiệm lớn hơn 3",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 19)",
        "prompt": "Giải phương trình $x^2 - 6x + 8 = 0$. Tìm nghiệm nguyên của phương trình thỏa mãn điều kiện $x > 3$.",
        "correctAnswer": "4",
        "acceptableAnswers": ["4", "x=4", "x = 4"],
        "explanation": "Ta có $x^2 - 6x + 8 = (x - 2)(x - 4) = 0 \\Leftrightarrow x = 2$ hoặc $x = 4$. Nghiệm thỏa mãn $x > 3$ là $x = 4$."
      },
      {
        "id": "sa-9.4.8",
        "badge": "Trả lời ngắn 8 - Tìm tham số m để phương trình nhận nghiệm",
        "source": "Đề thi tuyển sinh vào 10 THPT",
        "prompt": "Tìm giá trị của tham số $m$ để phương trình $\\frac{x - 2m}{x + 1} = 2$ nhận $x = 4$ làm nghiệm.",
        "correctAnswer": "-3",
        "acceptableAnswers": ["-3", "m=-3", "m = -3"],
        "explanation": "Thay $x = 4$ vào phương trình: $\\frac{4 - 2m}{4 + 1} = 2 \\Leftrightarrow \\frac{4 - 2m}{5} = 2 \\Leftrightarrow 4 - 2m = 10 \\Leftrightarrow 2m = -6 \\Leftrightarrow m = -3$."
      },
      {
        "id": "sa-9.4.9",
        "badge": "Trả lời ngắn 9 - Toán thực tế vận tốc dòng nước",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.16 (Trang 22)",
        "prompt": "Một ca nô đi xuôi dòng khúc sông dài $45\\text{ km}$ hết $1,5\\text{ giờ}$. Biết vận tốc dòng nước là $4\\text{ km/h}$. Tính vận tốc thực của ca nô khi nước yên lặng (theo đơn vị km/h).",
        "correctAnswer": "26",
        "acceptableAnswers": ["26", "26 km/h", "26km/h"],
        "explanation": "Vận tốc xuôi dòng của ca nô là: $45 : 1,5 = 30\\text{ (km/h)}$. Vận tốc thực của ca nô khi nước yên lặng là: $v_{\\text{thực}} = v_{\\text{xuôi}} - v_{\\text{nước}} = 30 - 4 = 26\\text{ (km/h)}$."
      },
      {
        "id": "sa-9.4.10",
        "badge": "Trả lời ngắn 10 - Toán thực tế năng suất đào đất",
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
        "prompt": "Một đội máy xúc theo kế hoạch mỗi ngày phải xúc $50\\text{ m}^3$ đất. Nhờ thi đua tăng năng suất, mỗi ngày đội xúc được $60\\text{ m}^3$ đất nên đã hoàn thành trước thời hạn $2\\text{ ngày}$. Tính tổng khối lượng đất đội phải xúc theo kế hoạch (theo đơn vị $\\text{m}^3$).",
        "correctAnswer": "600",
        "acceptableAnswers": ["600", "600 m3", "600m3", "600 m^3"],
        "explanation": "Gọi khối lượng đất đội phải xúc theo kế hoạch là $V\\text{ (m}^3\\)$, $V > 0$. Thời gian dự định là $\\frac{V}{50}\\text{ (ngày)}$. Thời gian thực tế là $\\frac{V}{60}\\text{ (ngày)}$. Do hoàn thành trước $2\\text{ ngày}$ nên ta có: $\\frac{V}{50} - \\frac{V}{60} = 2 \\Leftrightarrow \\frac{V}{300} = 2 \\Leftrightarrow V = 600\\text{ m}^3$."
      }
    ]
  },
  "t9-on-tap-chuong-1": {
    "id": "t9-on-tap-chuong-1",
    "lessonNumber": 0,
    "title": "Ôn tập cuối chương I",
    "bookChapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn (SGK Toán 9 KNTT - Tập 1)",
    "scenarioTitle": "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
    "scenarioFrames": [],
    "theorySections": [],
    "youtubeVideoId": "bppVKFQ1zyw",
    "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và giải bài tập cuối chương I - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "bppVKFQ1zyw",
        "title": "Tiết 1: Ôn tập lý thuyết và giải hệ phương trình"
      },
      {
        "id": "nDqC-YWY2ik",
        "title": "Tiết 2: Ôn tập giải bài toán bằng cách lập hệ phương trình"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.ot1.1",
        "title": "Ví dụ 1: Nhận biết hệ phương trình bậc nhất hai ẩn",
        "question": "Hệ phương trình nào sau đây là hệ hai phương trình bậc nhất hai ẩn?",
        "options": [
          "$\\begin{cases} 2x - 3y = 5 \\\\ x + 4y = 1 \\end{cases}$",
          "$\\begin{cases} x^2 + y = 3 \\\\ 2x - y = 1 \\end{cases}$",
          "$\\begin{cases} \\frac{2}{x} + y = 1 \\\\ x - 3y = 2 \\end{cases}$",
          "$\\begin{cases} xy = 2 \\\\ x + y = 3 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ hai phương trình bậc nhất hai ẩn có dạng $\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$ với các bậc của biến đều là 1 và không có tích $xy$ hay ẩn ở mẫu."
      },
      {
        "id": "vq-9.ot1.2",
        "title": "Ví dụ 2: Kiểm tra nghiệm của hệ",
        "question": "Cặp số $(x; y) = (1; 2)$ là nghiệm của hệ phương trình nào?",
        "options": [
          "$\\begin{cases} 2x + y = 4 \\\\ x - y = -1 \\end{cases}$",
          "$\\begin{cases} 2x - y = 4 \\\\ x + y = 3 \\end{cases}$",
          "$\\begin{cases} x + 2y = 4 \\\\ 3x - y = 2 \\end{cases}$",
          "$\\begin{cases} x - 2y = 1 \\\\ 2x + y = 3 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1, y = 2$: $2(1) + 2 = 4$ và $1 - 2 = -1$ (đều thỏa mãn)."
      },
      {
        "id": "vq-9.ot1.3",
        "title": "Ví dụ 3: Nghiệm của hệ bằng phương pháp thế",
        "question": "Giải hệ phương trình $\\begin{cases} y = 3x - 1 \\\\ 2x + y = 9 \\end{cases}$. Nghiệm của hệ là:",
        "options": [
          "$(2; 5)$",
          "$(5; 2)$",
          "$(1; 2)$",
          "$(3; 8)$"
        ],
        "correctIndex": 0,
        "explanation": "Thế $y = 3x - 1$ vào phương trình thứ hai: $2x + (3x - 1) = 9 \\Leftrightarrow 5x = 10 \\Leftrightarrow x = 2 \\Rightarrow y = 3(2) - 1 = 5$."
      },
      {
        "id": "vq-9.ot1.4",
        "title": "Ví dụ 4: Vận tốc xuôi dòng và ngược dòng",
        "question": "Một ca nô có vận tốc riêng là $24\\text{ km/h}$, vận tốc dòng nước là $3\\text{ km/h}$. Vận tốc của ca nô khi xuôi dòng và ngược dòng lần lượt là:",
        "options": [
          "$27\\text{ km/h}$ và $21\\text{ km/h}$",
          "$21\\text{ km/h}$ và $27\\text{ km/h}$",
          "$24\\text{ km/h}$ và $3\\text{ km/h}$",
          "$27\\text{ km/h}$ và $24\\text{ km/h}$"
        ],
        "correctIndex": 0,
        "explanation": "Xuôi dòng: $24 + 3 = 27\\text{ km/h}$. Ngược dòng: $24 - 3 = 21\\text{ km/h}$."
      }
    ],
    "tips": [
      "Trước khi giải hệ bằng máy tính hoặc bằng tay, luôn đưa hệ về dạng chuẩn: $\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$.",
      "Phương pháp cộng đại số: Quan sát hệ số của $x$ hoặc $y$, nếu chúng bằng nhau thì trừ hai phương trình, nếu đối nhau thì cộng hai phương trình.",
      "Bài toán thực tế: Đọc kỹ điều kiện của ẩn (nguyên dương, lớn hơn 0), đơn vị đo và đối chiếu điều kiện trước khi kết luận.",
      "Bài toán chuyển động sông nước: Luôn nhớ $v_{\\text{xuôi}} = v_{\\text{thực}} + v_{\\text{nước}}$ và $v_{\\text{ngược}} = v_{\\text{thực}} - v_{\\text{nước}}$."
    ],
    "traps": [
      "Bẫy chuyển vế quên đổi dấu khi giải hệ phương pháp thế: Khi chuyển hạng tử sang vế kia, bắt buộc phải đổi dấu.",
      "Bẫy chia cho 0 khi biện luận số nghiệm của hệ: Hệ thức $\\frac{a}{a'} = \\frac{b}{b'}$ chỉ áp dụng khi tất cả các hệ số ở mẫu đều khác 0.",
      "Bẫy nhầm lẫn giữa vận tốc thực của tàu và vận tốc xuôi/ngược dòng trong bài toán dòng nước.",
      "Bẫy quên đặt điều kiện ẩn $x, y > 0$ hoặc $x, y \\in \\mathbb{N}^*$ trong bài toán năng suất và quan hệ số."
    ],
    "quizQuestions": [
      {
        "id": "ot1-q1",
        "badge": "Câu 1 (NB) - Nhận biết phương trình bậc nhất hai ẩn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 6)",
        "question": "Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn?",
        "options": [
          "$3x - 2y = 7$",
          "$2x^2 + y = 5$",
          "$\\frac{1}{x} + 2y = 3$",
          "$0x + 0y = 4$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình bậc nhất hai ẩn có dạng $ax + by = c$ với $a \\ne 0$ hoặc $b \\ne 0$. Ở đây $3x - 2y = 7$ có $a = 3, b = -2$ thỏa mãn."
      },
      {
        "id": "ot1-q2",
        "badge": "Câu 2 (NB) - Kiểm tra nghiệm của phương trình bậc nhất hai ẩn",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 7)",
        "question": "Cặp số nào sau đây là một nghiệm của phương trình $2x + y = 5$?",
        "options": [
          "$(2; 1)$",
          "$(1; 2)$",
          "$(3; 1)$",
          "$(0; 3)$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 2, y = 1$ vào vế trái: $2(2) + 1 = 5$ (bằng vế phải). Vậy $(2; 1)$ là một nghiệm của phương trình."
      },
      {
        "id": "ot1-q3",
        "badge": "Câu 3 (NB) - Biểu diễn hình học của tập nghiệm",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 8)",
        "question": "Trong mặt phẳng tọa độ $Oxy$, đường thẳng biểu diễn tập nghiệm của phương trình $x - y = 0$ là:",
        "options": [
          "Đường phân giác của góc phần tư thứ I và thứ III",
          "Đường phân giác của góc phần tư thứ II và thứ IV",
          "Đường thẳng song song với trục hoành $Ox$",
          "Đường thẳng song song với trục tung $Oy$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình $x - y = 0 \\Leftrightarrow y = x$, đây là đường phân giác của góc phần tư thứ I và thứ III."
      },
      {
        "id": "ot1-q4",
        "badge": "Câu 4 (NB) - Kiểm tra nghiệm của hệ hai phương trình",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 10)",
        "question": "Cặp số $(1; -1)$ là nghiệm của hệ phương trình nào dưới đây?",
        "options": [
          "$\\begin{cases} x + y = 0 \\\\ 2x - y = 3 \\end{cases}$",
          "$\\begin{cases} x - y = 0 \\\\ 2x + y = 3 \\end{cases}$",
          "$\\begin{cases} 2x + y = 1 \\\\ x - y = 4 \\end{cases}$",
          "$\\begin{cases} x + 2y = 1 \\\\ 3x - y = 2 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1, y = -1$: $1 + (-1) = 0$ (thỏa mãn) và $2(1) - (-1) = 3$ (thỏa mãn). Vậy $(1; -1)$ là nghiệm của hệ."
      },
      {
        "id": "ot1-q5",
        "badge": "Câu 5 (NB) - Nhận biết số nghiệm qua hai đường thẳng trùng nhau",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 14)",
        "question": "Hệ phương trình $\\begin{cases} 2x - y = 1 \\\\ 4x - 2y = 2 \\end{cases}$ có bao nhiêu nghiệm?",
        "options": [
          "Có vô số nghiệm",
          "Vô nghiệm",
          "Có đúng 1 nghiệm duy nhất",
          "Có đúng 2 nghiệm phân biệt"
        ],
        "correctIndex": 0,
        "explanation": "Vì $\\frac{2}{4} = \\frac{-1}{-2} = \\frac{1}{2}$ nên hai đường thẳng biểu diễn tập nghiệm trùng nhau, do đó hệ có vô số nghiệm."
      },
      {
        "id": "ot1-q6",
        "badge": "Câu 6 (NB) - Nhận biết số nghiệm qua hai đường thẳng song song",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 12)",
        "question": "Hệ phương trình $\\begin{cases} x + y = 4 \\\\ x + y = 6 \\end{cases}$ có số nghiệm là:",
        "options": [
          "$0$ (Vô nghiệm)",
          "$1$ nghiệm duy nhất",
          "$2$ nghiệm",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Tổng $x + y$ không thể vừa bằng 4 vừa bằng 6, hai đường thẳng song song nhau nên hệ phương trình vô nghiệm (0 nghiệm)."
      },
      {
        "id": "ot1-q7",
        "badge": "Câu 7 (TH) - Giải hệ phương trình bằng phương pháp cộng đại số",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 15)",
        "question": "Nghiệm của hệ phương trình $\\begin{cases} 2x + 3y = 7 \\\\ x - y = 1 \\end{cases}$ là:",
        "options": [
          "$(2; 1)$",
          "$(1; 2)$",
          "$(3; 2)$",
          "$(4; 3)$"
        ],
        "correctIndex": 0,
        "explanation": "Từ phương trình thứ hai: $x = y + 1$. Thế vào phương trình đầu: $2(y + 1) + 3y = 7 \\Leftrightarrow 5y = 5 \\Leftrightarrow y = 1 \\Rightarrow x = 2$. Nghiệm là $(2; 1)$."
      },
      {
        "id": "ot1-q8",
        "badge": "Câu 8 (TH) - Giải hệ phương trình bằng phương pháp thế",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 13)",
        "question": "Giải hệ phương trình $\\begin{cases} y = 2x - 1 \\\\ 3x + y = 9 \\end{cases}$. Giá trị của tích $x \\cdot y$ bằng:",
        "options": [
          "$6$",
          "$5$",
          "$8$",
          "$4$"
        ],
        "correctIndex": 0,
        "explanation": "Thế $y = 2x - 1$ vào phương trình thứ hai: $3x + (2x - 1) = 9 \\Leftrightarrow 5x = 10 \\Leftrightarrow x = 2 \\Rightarrow y = 2(2) - 1 = 3$. Tích $x \\cdot y = 2 \\cdot 3 = 6$."
      },
      {
        "id": "ot1-q9",
        "badge": "Câu 9 (TH) - Tìm hệ số a, b của hệ phương trình khi biết nghiệm",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
        "question": "Biết cặp số $(x; y) = (1; 2)$ là nghiệm của hệ $\\begin{cases} ax + by = 5 \\\\ 2ax - by = 1 \\end{cases}$. Giá trị của $a$ và $b$ là:",
        "options": [
          "$a = 2; b = 1,5$",
          "$a = 1; b = 2$",
          "$a = 3; b = 1$",
          "$a = 2; b = 3$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1, y = 2$: $\\begin{cases} a + 2b = 5 \\\\ 2a - 2b = 1 \\end{cases}$. Cộng hai phương trình: $3a = 6 \\Rightarrow a = 2$. Thay vào: $2 + 2b = 5 \\Rightarrow 2b = 3 \\Rightarrow b = 1,5$."
      },
      {
        "id": "ot1-q10",
        "badge": "Câu 10 (TH) - Tọa độ giao điểm của hai đường thẳng",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 14)",
        "question": "Tọa độ giao điểm $M$ của hai đường thẳng $d_1: 2x - y = 3$ và $d_2: x + y = 3$ là:",
        "options": [
          "$M(2; 1)$",
          "$M(1; 2)$",
          "$M(3; 0)$",
          "$M(0; 3)$"
        ],
        "correctIndex": 0,
        "explanation": "Tọa độ giao điểm là nghiệm của hệ: $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases}$. Cộng hai phương trình: $3x = 6 \\Rightarrow x = 2 \\Rightarrow y = 1$. Vậy $M(2; 1)$."
      },
      {
        "id": "ot1-q11",
        "badge": "Câu 11 (VD) - Tìm tham số m để hệ phương trình có nghiệm duy nhất",
        "source": "Đề thi tuyển sinh vào lớp 10 THPT TP. Hà Nội",
        "question": "Tìm tất cả các giá trị của $m$ để hệ phương trình $\\begin{cases} mx + 2y = 4 \\\\ 2x + my = 4 \\end{cases}$ có nghiệm duy nhất.",
        "options": [
          "$m \\ne 2$ và $m \\ne -2$",
          "$m \\ne 2$",
          "$m \\ne -2$",
          "$m = 2$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ phương trình có nghiệm duy nhất khi và chỉ khi $\\frac{m}{2} \\ne \\frac{2}{m} \\Leftrightarrow m^2 \\ne 4 \\Leftrightarrow m \\ne \\pm 2$."
      },
      {
        "id": "ot1-q12",
        "badge": "Câu 12 (VD) - Toán thực tế hình học mảnh đất",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 18)",
        "question": "Một mảnh vườn hình chữ nhật có chu vi bằng $40\\text{ m}$. Biết rằng chiều dài hơn chiều rộng $4\\text{ m}$. Diện tích của mảnh vườn đó là:",
        "options": [
          "$96\\text{ m}^2$",
          "$100\\text{ m}^2$",
          "$84\\text{ m}^2$",
          "$92\\text{ m}^2$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi chiều dài là $x\\text{ (m)}$ và chiều rộng là $y\\text{ (m)}$. Nửa chu vi: $x + y = 20$. Chiều dài hơn chiều rộng: $x - y = 4$. Giải hệ được $x = 12\\text{ m}, y = 8\\text{ m}$. Diện tích $S = 12 \\cdot 8 = 96\\text{ m}^2$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ot1-tf1",
        "badge": "Đúng/Sai 1 (NB) - Khái niệm phương trình bậc nhất hai ẩn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 6)",
        "prompt": "Cho phương trình bậc nhất hai ẩn $3x - 2y = 6$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Các hệ số của phương trình là $a = 3, b = -2, c = 6$.",
            "correctAnswer": true,
            "explanation": "Dạng tổng quát $ax + by = c$ có $a = 3, b = -2, c = 6$."
          },
          {
            "id": "b",
            "text": "Cặp số $(2; 0)$ là một nghiệm của phương trình.",
            "correctAnswer": true,
            "explanation": "Thay $x = 2, y = 0$ ta được $3(2) - 2(0) = 6$ (đúng)."
          },
          {
            "id": "c",
            "text": "Cặp số $(0; 3)$ là một nghiệm của phương trình.",
            "correctAnswer": false,
            "explanation": "Thay $x = 0, y = 3$ ta được $3(0) - 2(3) = -6 \\ne 6$ nên $(0; 3)$ không phải là nghiệm."
          },
          {
            "id": "d",
            "text": "Phương trình có vô số nghiệm và tập nghiệm được biểu diễn bởi một đường thẳng trên mặt phẳng tọa độ.",
            "correctAnswer": true,
            "explanation": "Mọi phương trình bậc nhất hai ẩn đều có vô số nghiệm và tập nghiệm là một đường thẳng."
          }
        ]
      },
      {
        "id": "ot1-tf2",
        "badge": "Đúng/Sai 2 (TH) - Các bước giải hệ phương trình cộng đại số",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 13)",
        "prompt": "Cho hệ phương trình: $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Nhân hai vế của phương trình thứ nhất với 2 ta được phương trình $4x + 2y = 10$.",
            "correctAnswer": true,
            "explanation": "$2(2x + y) = 2(5) \\Leftrightarrow 4x + 2y = 10$."
          },
          {
            "id": "b",
            "text": "Cộng từng vế của phương trình $4x + 2y = 10$ với phương trình $3x - 2y = 4$ ta được $7x = 14$.",
            "correctAnswer": true,
            "explanation": "$(4x + 3x) + (2y - 2y) = 10 + 4 \\Leftrightarrow 7x = 14$."
          },
          {
            "id": "c",
            "text": "Nghiệm của hệ phương trình đã cho là $(x; y) = (2; 1)$.",
            "correctAnswer": true,
            "explanation": "Từ $7x = 14 \\Rightarrow x = 2$. Thay vào phương trình đầu: $2(2) + y = 5 \\Rightarrow y = 1$."
          },
          {
            "id": "d",
            "text": "Giá trị của biểu thức $x^2 + y^2 = 3$.",
            "correctAnswer": false,
            "explanation": "Ta có $x^2 + y^2 = 2^2 + 1^2 = 4 + 1 = 5 \\ne 3$."
          }
        ]
      },
      {
        "id": "ot1-tf3",
        "badge": "Đúng/Sai 3 (TH) - Vị trí tương đối và giao điểm của hai đường thẳng",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 14)",
        "prompt": "Cho hai đường thẳng $d_1: x + 2y = 4$ và $d_2: 2x - y = 3$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điểm $A(0; 2)$ thuộc đường thẳng $d_1$.",
            "correctAnswer": true,
            "explanation": "Thay $x = 0, y = 2$ vào $d_1$: $0 + 2(2) = 4$ (thỏa mãn)."
          },
          {
            "id": "b",
            "text": "Tọa độ giao điểm của $d_1$ và $d_2$ là nghiệm của hệ phương trình $\\begin{cases} x + 2y = 4 \\\\ 2x - y = 3 \\end{cases}$.",
            "correctAnswer": true,
            "explanation": "Theo định nghĩa, tọa độ giao điểm là nghiệm chung của hệ hai phương trình."
          },
          {
            "id": "c",
            "text": "Hai đường thẳng $d_1$ và $d_2$ cắt nhau tại điểm $M(2; 1)$.",
            "correctAnswer": true,
            "explanation": "Giải hệ ta được $x = 2, y = 1$. Vậy giao điểm là $M(2; 1)$."
          },
          {
            "id": "d",
            "text": "Giao điểm $M(2; 1)$ nằm trong góc phần tư thứ hai của mặt phẳng tọa độ.",
            "correctAnswer": false,
            "explanation": "Điểm $M(2; 1)$ có hoành độ dương và tung độ dương ($x > 0, y > 0$) nên thuộc góc phần tư thứ nhất."
          }
        ]
      },
      {
        "id": "ot1-tf4",
        "badge": "Đúng/Sai 4 (VD) - Toán thực tế bán hàng",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 19)",
        "prompt": "Một cửa hàng bánh mì bán hai loại: bánh mì chả giá $20.000\\text{ đ/chiếc}$ và bánh mì pate giá $15.000\\text{ đ/chiếc}$. Buổi sáng, cửa hàng đã bán được $80\\text{ chiếc}$ bánh mì cả hai loại và thu được tổng số tiền là $1.450.000\\text{ đ}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Nếu gọi số bánh mì chả là $x$ và bánh mì pate là $y$ thì ta có phương trình $x + y = 80$.",
            "correctAnswer": true,
            "explanation": "Tổng số bánh mì bán được là 80 chiếc nên $x + y = 80$."
          },
          {
            "id": "b",
            "text": "Tổng số tiền thu được biểu diễn bởi phương trình $20x + 15y = 1450$ (đơn vị: nghìn đồng).",
            "correctAnswer": true,
            "explanation": "$20.000x + 15.000y = 1.450.000 \\Leftrightarrow 20x + 15y = 1450$."
          },
          {
            "id": "c",
            "text": "Số bánh mì chả bán được nhiều hơn số bánh mì pate.",
            "correctAnswer": true,
            "explanation": "Giải hệ: $x = 50\\text{ chiếc}$ bánh mì chả và $y = 30\\text{ chiếc}$ bánh mì pate. Vì $50 > 30$ nên khẳng định đúng."
          },
          {
            "id": "d",
            "text": "Cửa hàng đã bán được $45\\text{ chiếc}$ bánh mì chả.",
            "correctAnswer": false,
            "explanation": "Cửa hàng bán được đúng $50\\text{ chiếc}$ bánh mì chả, không phải $45$ chiếc."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ot1-sa1",
        "badge": "Trả lời ngắn 1 (TH) - Tính tổng hai nghiệm của hệ",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
        "prompt": "Cho hệ phương trình $\\begin{cases} 3x - y = 7 \\\\ x + 2y = 7 \\end{cases}$ có nghiệm duy nhất $(x_0; y_0)$. Tính giá trị của biểu thức $x_0 + y_0$.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "x+y=5"
        ],
        "explanation": "Từ PT 1: $y = 3x - 7$. Thế vào PT 2: $x + 2(3x - 7) = 7 \\Leftrightarrow 7x = 21 \\Leftrightarrow x = 3 \\Rightarrow y = 2$. Giá trị $x_0 + y_0 = 3 + 2 = 5$."
      },
      {
        "id": "ot1-sa2",
        "badge": "Trả lời ngắn 2 (TH) - Tìm a + b khi biết nghiệm của hệ",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 14)",
        "prompt": "Biết hệ phương trình $\\begin{cases} ax + y = 3 \\\\ 2x - by = 1 \\end{cases}$ nhận cặp số $(x; y) = (1; 1)$ làm nghiệm. Tính giá trị của tổng $a + b$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "a+b=3"
        ],
        "explanation": "Thay $x = 1, y = 1$: $a(1) + 1 = 3 \\Rightarrow a = 2$; $2(1) - b(1) = 1 \\Rightarrow b = 1$. Giá trị $a + b = 2 + 1 = 3$."
      },
      {
        "id": "ot1-sa3",
        "badge": "Trả lời ngắn 3 (VD) - Tìm tham số m để đường thẳng đi qua giao điểm",
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
        "prompt": "Tìm giá trị của tham số $m$ để đường thẳng $y = mx + 1$ đi qua giao điểm của hai đường thẳng $2x - y = 3$ và $x + y = 3$.",
        "correctAnswer": "0",
        "acceptableAnswers": [
          "0",
          "m=0"
        ],
        "explanation": "Giao điểm của hai đường thẳng là nghiệm của hệ $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases} \\Rightarrow x = 2, y = 1$. Điểm $(2; 1)$ thuộc đường thẳng $y = mx + 1$ nên $1 = m(2) + 1 \\Leftrightarrow 2m = 0 \\Leftrightarrow m = 0$."
      },
      {
        "id": "ot1-sa4",
        "badge": "Trả lời ngắn 4 (VD) - Tìm m để hệ có nghiệm thỏa mãn x = y",
        "source": "Đề thi học sinh giỏi Toán 9",
        "prompt": "Cho hệ phương trình $\\begin{cases} x + 2y = 3 \\\\ 2x - 3y = 4 - m \\end{cases}$. Tìm giá trị của tham số $m$ để hệ có nghiệm duy nhất $(x; y)$ thỏa mãn $x = y$.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "m=5"
        ],
        "explanation": "Thay $x = y$ vào PT đầu: $x + 2x = 3 \\Leftrightarrow 3x = 3 \\Leftrightarrow x = 1 \\Rightarrow y = 1$. Thay $x = 1, y = 1$ vào PT thứ hai: $2(1) - 3(1) = 4 - m \\Leftrightarrow -1 = 4 - m \\Leftrightarrow m = 5$."
      },
      {
        "id": "ot1-sa5",
        "badge": "Trả lời ngắn 5 (VD) - Toán thực tế chuyển động sông nước",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 18)",
        "prompt": "Một ca nô chạy xuôi dòng một khúc sông dài $30\\text{ km}$ rồi quay ngược dòng trở lại $24\\text{ km}$ hết tổng cộng $3\\text{ giờ}$. Biết vận tốc dòng nước là $2\\text{ km/h}$. Tính vận tốc thực của ca nô khi nước yên lặng (theo đơn vị km/h).",
        "correctAnswer": "18",
        "acceptableAnswers": [
          "18",
          "18 km/h",
          "18km/h"
        ],
        "explanation": "Gọi vận tốc thực là $v\\text{ (km/h)}$, $v > 2$. Thời gian: $\\frac{30}{v + 2} + \\frac{24}{v - 2} = 3$. Với $v = 18$: $\\frac{30}{20} + \\frac{24}{16} = 1,5 + 1,5 = 3\\text{ (giờ)}$ thỏa mãn. Vậy vận tốc thực là $18\\text{ km/h}$."
      },
      {
        "id": "ot1-sa6",
        "badge": "Trả lời ngắn 6 (VD) - Toán thực tế quyên góp sách",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 16)",
        "prompt": "Hai lớp 9A và 9B có tổng số $80\\text{ học sinh}$. Trong đợt quyên góp sách giáo khoa ủng hộ học sinh vùng cao, mỗi học sinh lớp 9A quyên góp $3\\text{ quyển}$, mỗi học sinh lớp 9B quyên góp $4\\text{ quyển}$, cả hai lớp quyên góp được tổng cộng $270\\text{ quyển}$. Hỏi lớp 9A có bao nhiêu học sinh?",
        "correctAnswer": "50",
        "acceptableAnswers": [
          "50",
          "50 học sinh"
        ],
        "explanation": "Gọi số học sinh lớp 9A là $x$ và 9B là $y$ ($x + y = 80$). Tổng số sách: $3x + 4y = 270$. Nhân PT đầu với 4: $4x + 4y = 320$. Trừ theo vế: $x = 320 - 270 = 50\\text{ học sinh}$."
      }
    ],
    "examSets": [
      {
        "id": "de-1",
        "title": "Đề ôn tập số 1",
        "description": "Đề ôn tập tổng hợp cuối Chương I (Phương trình và Hệ phương trình bậc nhất hai ẩn) - Đề số 1",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "ot1-q1",
            "badge": "Câu 1 (NB) - Nhận biết phương trình bậc nhất hai ẩn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 6)",
            "question": "Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn?",
            "options": [
              "$3x - 2y = 7$",
              "$2x^2 + y = 5$",
              "$\\frac{1}{x} + 2y = 3$",
              "$0x + 0y = 4$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình bậc nhất hai ẩn có dạng $ax + by = c$ với $a \\ne 0$ hoặc $b \\ne 0$. Ở đây $3x - 2y = 7$ có $a = 3, b = -2$ thỏa mãn."
          },
          {
            "id": "ot1-q2",
            "badge": "Câu 2 (NB) - Kiểm tra nghiệm của phương trình bậc nhất hai ẩn",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 7)",
            "question": "Cặp số nào sau đây là một nghiệm của phương trình $2x + y = 5$?",
            "options": [
              "$(2; 1)$",
              "$(1; 2)$",
              "$(3; 1)$",
              "$(0; 3)$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 2, y = 1$ vào vế trái: $2(2) + 1 = 5$ (bằng vế phải). Vậy $(2; 1)$ là một nghiệm của phương trình."
          },
          {
            "id": "ot1-q3",
            "badge": "Câu 3 (NB) - Biểu diễn hình học của tập nghiệm",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 8)",
            "question": "Trong mặt phẳng tọa độ $Oxy$, đường thẳng biểu diễn tập nghiệm của phương trình $x - y = 0$ là:",
            "options": [
              "Đường phân giác của góc phần tư thứ I và thứ III",
              "Đường phân giác của góc phần tư thứ II và thứ IV",
              "Đường thẳng song song với trục hoành $Ox$",
              "Đường thẳng song song với trục tung $Oy$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình $x - y = 0 \\Leftrightarrow y = x$, đây là đường phân giác của góc phần tư thứ I và thứ III."
          },
          {
            "id": "ot1-q4",
            "badge": "Câu 4 (NB) - Kiểm tra nghiệm của hệ hai phương trình",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 10)",
            "question": "Cặp số $(1; -1)$ là nghiệm của hệ phương trình nào dưới đây?",
            "options": [
              "$\\begin{cases} x + y = 0 \\\\ 2x - y = 3 \\end{cases}$",
              "$\\begin{cases} x - y = 0 \\\\ 2x + y = 3 \\end{cases}$",
              "$\\begin{cases} 2x + y = 1 \\\\ x - y = 4 \\end{cases}$",
              "$\\begin{cases} x + 2y = 1 \\\\ 3x - y = 2 \\end{cases}$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 1, y = -1$: $1 + (-1) = 0$ (thỏa mãn) và $2(1) - (-1) = 3$ (thỏa mãn). Vậy $(1; -1)$ là nghiệm của hệ."
          },
          {
            "id": "ot1-q5",
            "badge": "Câu 5 (NB) - Nhận biết số nghiệm qua hai đường thẳng trùng nhau",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 14)",
            "question": "Hệ phương trình $\\begin{cases} 2x - y = 1 \\\\ 4x - 2y = 2 \\end{cases}$ có bao nhiêu nghiệm?",
            "options": [
              "Có vô số nghiệm",
              "Vô nghiệm",
              "Có đúng 1 nghiệm duy nhất",
              "Có đúng 2 nghiệm phân biệt"
            ],
            "correctIndex": 0,
            "explanation": "Vì $\\frac{2}{4} = \\frac{-1}{-2} = \\frac{1}{2}$ nên hai đường thẳng biểu diễn tập nghiệm trùng nhau, do đó hệ có vô số nghiệm."
          },
          {
            "id": "ot1-q6",
            "badge": "Câu 6 (NB) - Nhận biết số nghiệm qua hai đường thẳng song song",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 12)",
            "question": "Hệ phương trình $\\begin{cases} x + y = 4 \\\\ x + y = 6 \\end{cases}$ có số nghiệm là:",
            "options": [
              "$0$ (Vô nghiệm)",
              "$1$ nghiệm duy nhất",
              "$2$ nghiệm",
              "Vô số nghiệm"
            ],
            "correctIndex": 0,
            "explanation": "Tổng $x + y$ không thể vừa bằng 4 vừa bằng 6, hai đường thẳng song song nhau nên hệ phương trình vô nghiệm (0 nghiệm)."
          },
          {
            "id": "ot1-q7",
            "badge": "Câu 7 (TH) - Giải hệ phương trình bằng phương pháp cộng đại số",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 15)",
            "question": "Nghiệm của hệ phương trình $\\begin{cases} 2x + 3y = 7 \\\\ x - y = 1 \\end{cases}$ là:",
            "options": [
              "$(2; 1)$",
              "$(1; 2)$",
              "$(3; 2)$",
              "$(4; 3)$"
            ],
            "correctIndex": 0,
            "explanation": "Từ phương trình thứ hai: $x = y + 1$. Thế vào phương trình đầu: $2(y + 1) + 3y = 7 \\Leftrightarrow 5y = 5 \\Leftrightarrow y = 1 \\Rightarrow x = 2$. Nghiệm là $(2; 1)$."
          },
          {
            "id": "ot1-q8",
            "badge": "Câu 8 (TH) - Giải hệ phương trình bằng phương pháp thế",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 13)",
            "question": "Giải hệ phương trình $\\begin{cases} y = 2x - 1 \\\\ 3x + y = 9 \\end{cases}$. Giá trị của tích $x \\cdot y$ bằng:",
            "options": [
              "$6$",
              "$5$",
              "$8$",
              "$4$"
            ],
            "correctIndex": 0,
            "explanation": "Thế $y = 2x - 1$ vào phương trình thứ hai: $3x + (2x - 1) = 9 \\Leftrightarrow 5x = 10 \\Leftrightarrow x = 2 \\Rightarrow y = 2(2) - 1 = 3$. Tích $x \\cdot y = 2 \\cdot 3 = 6$."
          },
          {
            "id": "ot1-q9",
            "badge": "Câu 9 (TH) - Tìm hệ số a, b của hệ phương trình khi biết nghiệm",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
            "question": "Biết cặp số $(x; y) = (1; 2)$ là nghiệm của hệ $\\begin{cases} ax + by = 5 \\\\ 2ax - by = 1 \\end{cases}$. Giá trị của $a$ và $b$ là:",
            "options": [
              "$a = 2; b = 1,5$",
              "$a = 1; b = 2$",
              "$a = 3; b = 1$",
              "$a = 2; b = 3$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 1, y = 2$: $\\begin{cases} a + 2b = 5 \\\\ 2a - 2b = 1 \\end{cases}$. Cộng hai phương trình: $3a = 6 \\Rightarrow a = 2$. Thay vào: $2 + 2b = 5 \\Rightarrow 2b = 3 \\Rightarrow b = 1,5$."
          },
          {
            "id": "ot1-q10",
            "badge": "Câu 10 (TH) - Tọa độ giao điểm của hai đường thẳng",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 14)",
            "question": "Tọa độ giao điểm $M$ của hai đường thẳng $d_1: 2x - y = 3$ và $d_2: x + y = 3$ là:",
            "options": [
              "$M(2; 1)$",
              "$M(1; 2)$",
              "$M(3; 0)$",
              "$M(0; 3)$"
            ],
            "correctIndex": 0,
            "explanation": "Tọa độ giao điểm là nghiệm của hệ: $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases}$. Cộng hai phương trình: $3x = 6 \\Rightarrow x = 2 \\Rightarrow y = 1$. Vậy $M(2; 1)$."
          },
          {
            "id": "ot1-q11",
            "badge": "Câu 11 (VD) - Tìm tham số m để hệ phương trình có nghiệm duy nhất",
            "source": "Đề thi tuyển sinh vào lớp 10 THPT TP. Hà Nội",
            "question": "Tìm tất cả các giá trị của $m$ để hệ phương trình $\\begin{cases} mx + 2y = 4 \\\\ 2x + my = 4 \\end{cases}$ có nghiệm duy nhất.",
            "options": [
              "$m \\ne 2$ và $m \\ne -2$",
              "$m \\ne 2$",
              "$m \\ne -2$",
              "$m = 2$"
            ],
            "correctIndex": 0,
            "explanation": "Hệ phương trình có nghiệm duy nhất khi và chỉ khi $\\frac{m}{2} \\ne \\frac{2}{m} \\Leftrightarrow m^2 \\ne 4 \\Leftrightarrow m \\ne \\pm 2$."
          },
          {
            "id": "ot1-q12",
            "badge": "Câu 12 (VD) - Toán thực tế hình học mảnh đất",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 18)",
            "question": "Một mảnh vườn hình chữ nhật có chu vi bằng $40\\text{ m}$. Biết rằng chiều dài hơn chiều rộng $4\\text{ m}$. Diện tích của mảnh vườn đó là:",
            "options": [
              "$96\\text{ m}^2$",
              "$100\\text{ m}^2$",
              "$84\\text{ m}^2$",
              "$92\\text{ m}^2$"
            ],
            "correctIndex": 0,
            "explanation": "Gọi chiều dài là $x\\text{ (m)}$ và chiều rộng là $y\\text{ (m)}$. Nửa chu vi: $x + y = 20$. Chiều dài hơn chiều rộng: $x - y = 4$. Giải hệ được $x = 12\\text{ m}, y = 8\\text{ m}$. Diện tích $S = 12 \\cdot 8 = 96\\text{ m}^2$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "ot1-tf1",
            "badge": "Đúng/Sai 1 (NB) - Khái niệm phương trình bậc nhất hai ẩn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 6)",
            "prompt": "Cho phương trình bậc nhất hai ẩn $3x - 2y = 6$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Các hệ số của phương trình là $a = 3, b = -2, c = 6$.",
                "correctAnswer": true,
                "explanation": "Dạng tổng quát $ax + by = c$ có $a = 3, b = -2, c = 6$."
              },
              {
                "id": "b",
                "text": "Cặp số $(2; 0)$ là một nghiệm của phương trình.",
                "correctAnswer": true,
                "explanation": "Thay $x = 2, y = 0$ ta được $3(2) - 2(0) = 6$ (đúng)."
              },
              {
                "id": "c",
                "text": "Cặp số $(0; 3)$ là một nghiệm của phương trình.",
                "correctAnswer": false,
                "explanation": "Thay $x = 0, y = 3$ ta được $3(0) - 2(3) = -6 \\ne 6$ nên $(0; 3)$ không phải là nghiệm."
              },
              {
                "id": "d",
                "text": "Phương trình có vô số nghiệm và tập nghiệm được biểu diễn bởi một đường thẳng trên mặt phẳng tọa độ.",
                "correctAnswer": true,
                "explanation": "Mọi phương trình bậc nhất hai ẩn đều có vô số nghiệm và tập nghiệm là một đường thẳng."
              }
            ]
          },
          {
            "id": "ot1-tf2",
            "badge": "Đúng/Sai 2 (TH) - Các bước giải hệ phương trình cộng đại số",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 13)",
            "prompt": "Cho hệ phương trình: $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Nhân hai vế của phương trình thứ nhất với 2 ta được phương trình $4x + 2y = 10$.",
                "correctAnswer": true,
                "explanation": "$2(2x + y) = 2(5) \\Leftrightarrow 4x + 2y = 10$."
              },
              {
                "id": "b",
                "text": "Cộng từng vế của phương trình $4x + 2y = 10$ với phương trình $3x - 2y = 4$ ta được $7x = 14$.",
                "correctAnswer": true,
                "explanation": "$(4x + 3x) + (2y - 2y) = 10 + 4 \\Leftrightarrow 7x = 14$."
              },
              {
                "id": "c",
                "text": "Nghiệm của hệ phương trình đã cho là $(x; y) = (2; 1)$.",
                "correctAnswer": true,
                "explanation": "Từ $7x = 14 \\Rightarrow x = 2$. Thay vào phương trình đầu: $2(2) + y = 5 \\Rightarrow y = 1$."
              },
              {
                "id": "d",
                "text": "Giá trị của biểu thức $x^2 + y^2 = 3$.",
                "correctAnswer": false,
                "explanation": "Ta có $x^2 + y^2 = 2^2 + 1^2 = 4 + 1 = 5 \\ne 3$."
              }
            ]
          },
          {
            "id": "ot1-tf3",
            "badge": "Đúng/Sai 3 (TH) - Vị trí tương đối và giao điểm của hai đường thẳng",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 14)",
            "prompt": "Cho hai đường thẳng $d_1: x + 2y = 4$ và $d_2: 2x - y = 3$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Điểm $A(0; 2)$ thuộc đường thẳng $d_1$.",
                "correctAnswer": true,
                "explanation": "Thay $x = 0, y = 2$ vào $d_1$: $0 + 2(2) = 4$ (thỏa mãn)."
              },
              {
                "id": "b",
                "text": "Tọa độ giao điểm của $d_1$ và $d_2$ là nghiệm của hệ phương trình $\\begin{cases} x + 2y = 4 \\\\ 2x - y = 3 \\end{cases}$.",
                "correctAnswer": true,
                "explanation": "Theo định nghĩa, tọa độ giao điểm là nghiệm chung của hệ hai phương trình."
              },
              {
                "id": "c",
                "text": "Hai đường thẳng $d_1$ và $d_2$ cắt nhau tại điểm $M(2; 1)$.",
                "correctAnswer": true,
                "explanation": "Giải hệ ta được $x = 2, y = 1$. Vậy giao điểm là $M(2; 1)$."
              },
              {
                "id": "d",
                "text": "Giao điểm $M(2; 1)$ nằm trong góc phần tư thứ hai của mặt phẳng tọa độ.",
                "correctAnswer": false,
                "explanation": "Điểm $M(2; 1)$ có hoành độ dương và tung độ dương ($x > 0, y > 0$) nên thuộc góc phần tư thứ nhất."
              }
            ]
          },
          {
            "id": "ot1-tf4",
            "badge": "Đúng/Sai 4 (VD) - Toán thực tế bán hàng",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 19)",
            "prompt": "Một cửa hàng bánh mì bán hai loại: bánh mì chả giá $20.000\\text{ đ/chiếc}$ và bánh mì pate giá $15.000\\text{ đ/chiếc}$. Buổi sáng, cửa hàng đã bán được $80\\text{ chiếc}$ bánh mì cả hai loại và thu được tổng số tiền là $1.450.000\\text{ đ}$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Nếu gọi số bánh mì chả là $x$ và bánh mì pate là $y$ thì ta có phương trình $x + y = 80$.",
                "correctAnswer": true,
                "explanation": "Tổng số bánh mì bán được là 80 chiếc nên $x + y = 80$."
              },
              {
                "id": "b",
                "text": "Tổng số tiền thu được biểu diễn bởi phương trình $20x + 15y = 1450$ (đơn vị: nghìn đồng).",
                "correctAnswer": true,
                "explanation": "$20.000x + 15.000y = 1.450.000 \\Leftrightarrow 20x + 15y = 1450$."
              },
              {
                "id": "c",
                "text": "Số bánh mì chả bán được nhiều hơn số bánh mì pate.",
                "correctAnswer": true,
                "explanation": "Giải hệ: $x = 50\\text{ chiếc}$ bánh mì chả và $y = 30\\text{ chiếc}$ bánh mì pate. Vì $50 > 30$ nên khẳng định đúng."
              },
              {
                "id": "d",
                "text": "Cửa hàng đã bán được $45\\text{ chiếc}$ bánh mì chả.",
                "correctAnswer": false,
                "explanation": "Cửa hàng bán được đúng $50\\text{ chiếc}$ bánh mì chả, không phải $45$ chiếc."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "ot1-sa1",
            "badge": "Trả lời ngắn 1 (TH) - Tính tổng hai nghiệm của hệ",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
            "prompt": "Cho hệ phương trình $\\begin{cases} 3x - y = 7 \\\\ x + 2y = 7 \\end{cases}$ có nghiệm duy nhất $(x_0; y_0)$. Tính giá trị của biểu thức $x_0 + y_0$.",
            "correctAnswer": "5",
            "acceptableAnswers": [
              "5",
              "x+y=5"
            ],
            "explanation": "Từ PT 1: $y = 3x - 7$. Thế vào PT 2: $x + 2(3x - 7) = 7 \\Leftrightarrow 7x = 21 \\Leftrightarrow x = 3 \\Rightarrow y = 2$. Giá trị $x_0 + y_0 = 3 + 2 = 5$."
          },
          {
            "id": "ot1-sa2",
            "badge": "Trả lời ngắn 2 (TH) - Tìm a + b khi biết nghiệm của hệ",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 14)",
            "prompt": "Biết hệ phương trình $\\begin{cases} ax + y = 3 \\\\ 2x - by = 1 \\end{cases}$ nhận cặp số $(x; y) = (1; 1)$ làm nghiệm. Tính giá trị của tổng $a + b$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
              "3",
              "a+b=3"
            ],
            "explanation": "Thay $x = 1, y = 1$: $a(1) + 1 = 3 \\Rightarrow a = 2$; $2(1) - b(1) = 1 \\Rightarrow b = 1$. Giá trị $a + b = 2 + 1 = 3$."
          },
          {
            "id": "ot1-sa3",
            "badge": "Trả lời ngắn 3 (VD) - Tìm tham số m để đường thẳng đi qua giao điểm",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
            "prompt": "Tìm giá trị của tham số $m$ để đường thẳng $y = mx + 1$ đi qua giao điểm của hai đường thẳng $2x - y = 3$ và $x + y = 3$.",
            "correctAnswer": "0",
            "acceptableAnswers": [
              "0",
              "m=0"
            ],
            "explanation": "Giao điểm của hai đường thẳng là nghiệm của hệ $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases} \\Rightarrow x = 2, y = 1$. Điểm $(2; 1)$ thuộc đường thẳng $y = mx + 1$ nên $1 = m(2) + 1 \\Leftrightarrow 2m = 0 \\Leftrightarrow m = 0$."
          },
          {
            "id": "ot1-sa4",
            "badge": "Trả lời ngắn 4 (VD) - Tìm m để hệ có nghiệm thỏa mãn x = y",
            "source": "Đề thi học sinh giỏi Toán 9",
            "prompt": "Cho hệ phương trình $\\begin{cases} x + 2y = 3 \\\\ 2x - 3y = 4 - m \\end{cases}$. Tìm giá trị của tham số $m$ để hệ có nghiệm duy nhất $(x; y)$ thỏa mãn $x = y$.",
            "correctAnswer": "5",
            "acceptableAnswers": [
              "5",
              "m=5"
            ],
            "explanation": "Thay $x = y$ vào PT đầu: $x + 2x = 3 \\Leftrightarrow 3x = 3 \\Leftrightarrow x = 1 \\Rightarrow y = 1$. Thay $x = 1, y = 1$ vào PT thứ hai: $2(1) - 3(1) = 4 - m \\Leftrightarrow -1 = 4 - m \\Leftrightarrow m = 5$."
          },
          {
            "id": "ot1-sa5",
            "badge": "Trả lời ngắn 5 (VD) - Toán thực tế chuyển động sông nước",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 18)",
            "prompt": "Một ca nô chạy xuôi dòng một khúc sông dài $30\\text{ km}$ rồi quay ngược dòng trở lại $24\\text{ km}$ hết tổng cộng $3\\text{ giờ}$. Biết vận tốc dòng nước là $2\\text{ km/h}$. Tính vận tốc thực của ca nô khi nước yên lặng (theo đơn vị km/h).",
            "correctAnswer": "18",
            "acceptableAnswers": [
              "18",
              "18 km/h",
              "18km/h"
            ],
            "explanation": "Gọi vận tốc thực là $v\\text{ (km/h)}$, $v > 2$. Thời gian: $\\frac{30}{v + 2} + \\frac{24}{v - 2} = 3$. Với $v = 18$: $\\frac{30}{20} + \\frac{24}{16} = 1,5 + 1,5 = 3\\text{ (giờ)}$ thỏa mãn. Vậy vận tốc thực là $18\\text{ km/h}$."
          },
          {
            "id": "ot1-sa6",
            "badge": "Trả lời ngắn 6 (VD) - Toán thực tế quyên góp sách",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 16)",
            "prompt": "Hai lớp 9A và 9B có tổng số $80\\text{ học sinh}$. Trong đợt quyên góp sách giáo khoa ủng hộ học sinh vùng cao, mỗi học sinh lớp 9A quyên góp $3\\text{ quyển}$, mỗi học sinh lớp 9B quyên góp $4\\text{ quyển}$, cả hai lớp quyên góp được tổng cộng $270\\text{ quyển}$. Hỏi lớp 9A có bao nhiêu học sinh?",
            "correctAnswer": "50",
            "acceptableAnswers": [
              "50",
              "50 học sinh"
            ],
            "explanation": "Gọi số học sinh lớp 9A là $x$ và 9B là $y$ ($x + y = 80$). Tổng số sách: $3x + 4y = 270$. Nhân PT đầu với 4: $4x + 4y = 320$. Trừ theo vế: $x = 320 - 270 = 50\\text{ học sinh}$."
          }
        ]
      },
      {
        "id": "de-2",
        "title": "Đề ôn tập số 2",
        "description": "Đề ôn tập tổng hợp cuối Chương I (Phương trình và Hệ phương trình bậc nhất hai ẩn) - Đề số 2",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "ot2-q1",
            "badge": "Câu 1 (NB) - Kiểm tra cặp số không phải nghiệm",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 7)",
            "question": "Cặp số nào sau đây KHÔNG phải là nghiệm của phương trình $x - 2y = 3$?",
            "options": [
              "$(1; 1)$",
              "$(3; 0)$",
              "$(5; 1)$",
              "$(1; -1)$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 1, y = 1$ vào vế trái: $1 - 2(1) = -1 \\ne 3$. Do đó cặp $(1; 1)$ không phải là nghiệm."
          },
          {
            "id": "ot2-q2",
            "badge": "Câu 2 (NB) - Phương trình khuyết ẩn x",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 7)",
            "question": "Phương trình $0x + 3y = 6$ có đường thẳng biểu diễn tập nghiệm song song với trục nào?",
            "options": [
              "Song song với trục hoành $Ox$",
              "Song song với trục tung $Oy$",
              "Trùng với trục hoành $Ox$",
              "Trùng với trục tung $Oy$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình $0x + 3y = 6 \\Leftrightarrow y = 2$. Đường thẳng $y = 2$ song song với trục hoành $Ox$ và cắt trục tung tại điểm $(0; 2)$."
          },
          {
            "id": "ot2-q3",
            "badge": "Câu 3 (NB) - Phương trình khuyết ẩn y",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 8)",
            "question": "Tập nghiệm của phương trình $2x + 0y = 4$ được biểu diễn bởi đường thẳng:",
            "options": [
              "$x = 2$",
              "$y = 2$",
              "$x = 4$",
              "$y = 4$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình $2x + 0y = 4 \\Leftrightarrow 2x = 4 \\Leftrightarrow x = 2$."
          },
          {
            "id": "ot2-q4",
            "badge": "Câu 4 (NB) - Nhận biết hệ phương trình vô nghiệm",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 12)",
            "question": "Hệ phương trình $\\begin{cases} x - y = 2 \\\\ 2x - 2y = 5 \\end{cases}$ có số nghiệm là:",
            "options": [
              "$0$ (Vô nghiệm)",
              "$1$ nghiệm duy nhất",
              "$2$ nghiệm",
              "Vô số nghiệm"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\frac{1}{2} = \\frac{-1}{-2} \\ne \\frac{2}{5}$, hai đường thẳng song song nên hệ vô nghiệm."
          },
          {
            "id": "ot2-q5",
            "badge": "Câu 5 (NB) - Kiểm tra nghiệm có tung độ âm",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 9)",
            "question": "Cặp số $(x; y) = (3; -1)$ là nghiệm của hệ phương trình nào dưới đây?",
            "options": [
              "$\\begin{cases} x + y = 2 \\\\ x - 2y = 5 \\end{cases}$",
              "$\\begin{cases} x - y = 2 \\\\ 2x + y = 5 \\end{cases}$",
              "$\\begin{cases} 2x + y = 7 \\\\ x + y = 4 \\end{cases}$",
              "$\\begin{cases} x + 2y = 1 \\\\ 3x - y = 8 \\end{cases}$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 3, y = -1$: $3 + (-1) = 2$ (đúng); $3 - 2(-1) = 5$ (đúng). Vậy $(3; -1)$ là nghiệm của hệ."
          },
          {
            "id": "ot2-q6",
            "badge": "Câu 6 (NB) - Triệt tiêu ẩn trong phương pháp cộng",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 14)",
            "question": "Để giải hệ phương trình $\\begin{cases} 3x + y = 5 \\\\ 2x - y = 0 \\end{cases}$ bằng phương pháp cộng đại số, ta thực hiện cộng từng vế hai phương trình để triệt tiêu ẩn nào?",
            "options": [
              "Triệt tiêu ẩn $y$",
              "Triệt tiêu ẩn $x$",
              "Triệt tiêu cả $x$ và $y$",
              "Không triệt tiêu được ẩn nào"
            ],
            "correctIndex": 0,
            "explanation": "Do hệ số của $y$ ở hai phương trình đối nhau ($1$ và $-1$) nên khi cộng vế theo vế ta được $5x = 5$, triệt tiêu được ẩn $y$."
          },
          {
            "id": "ot2-q7",
            "badge": "Câu 7 (TH) - Giải hệ phương trình cơ bản",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 13)",
            "question": "Nghiệm của hệ phương trình $\\begin{cases} 3x - 2y = 4 \\\\ 2x + y = 5 \\end{cases}$ là:",
            "options": [
              "$(2; 1)$",
              "$(1; 2)$",
              "$(3; -1)$",
              "$(4; 4)$"
            ],
            "correctIndex": 0,
            "explanation": "Nhân phương trình thứ hai với 2: $4x + 2y = 10$. Cộng với phương trình đầu: $7x = 14 \\Rightarrow x = 2 \\Rightarrow y = 5 - 2(2) = 1$. Nghiệm là $(2; 1)$."
          },
          {
            "id": "ot2-q8",
            "badge": "Câu 8 (TH) - Giải hệ có nghiệm nguyên",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 13)",
            "question": "Giải hệ phương trình $\\begin{cases} 4x + 3y = 6 \\\\ 2x + y = 4 \\end{cases}$. Giá trị của hiệu $x - y$ bằng:",
            "options": [
              "$5$",
              "$-1$",
              "$1$",
              "$3$"
            ],
            "correctIndex": 0,
            "explanation": "Từ PT 2: $y = 4 - 2x$. Thế vào PT 1: $4x + 3(4 - 2x) = 6 \\Leftrightarrow -2x + 12 = 6 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3 \\Rightarrow y = -2$. Hiệu $x - y = 3 - (-2) = 5$."
          },
          {
            "id": "ot2-q9",
            "badge": "Câu 9 (TH) - Tìm hàm số bậc nhất đi qua hai điểm",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
            "question": "Biết đồ thị hàm số bậc nhất $y = ax + b$ đi qua hai điểm $A(1; 3)$ và $B(2; 5)$. Giá trị của $a$ và $b$ là:",
            "options": [
              "$a = 2; b = 1$",
              "$a = 1; b = 2$",
              "$a = 3; b = 0$",
              "$a = -2; b = 5$"
            ],
            "correctIndex": 0,
            "explanation": "Thay tọa độ hai điểm ta có hệ: $\\begin{cases} a + b = 3 \\\\ 2a + b = 5 \\end{cases}$. Trừ từng vế hai phương trình được $a = 2 \\Rightarrow b = 1$."
          },
          {
            "id": "ot2-q10",
            "badge": "Câu 10 (TH) - Giao điểm của hai đường thẳng",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 14)",
            "question": "Tọa độ giao điểm của hai đường thẳng $d_1: 3x - y = 5$ và $d_2: x + 2y = 4$ là:",
            "options": [
              "$(2; 1)$",
              "$(1; 2)$",
              "$(3; 4)$",
              "$(0; 2)$"
            ],
            "correctIndex": 0,
            "explanation": "Giải hệ $\\begin{cases} 3x - y = 5 \\\\ x + 2y = 4 \\end{cases}$. Nhân PT đầu với 2: $6x - 2y = 10$. Cộng vào PT hai: $7x = 14 \\Rightarrow x = 2 \\Rightarrow y = 1$. Giao điểm là $(2; 1)$."
          },
          {
            "id": "ot2-q11",
            "badge": "Câu 11 (VD) - Tìm tham số để hai đường thẳng song song",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Hồ Chí Minh",
            "question": "Tìm giá trị của tham số $m$ để hai đường thẳng $y = (2m - 1)x + 3$ và $y = 3x - 1$ song song với nhau.",
            "options": [
              "$m = 2$",
              "$m = 1$",
              "$m = -2$",
              "$m = 0$"
            ],
            "correctIndex": 0,
            "explanation": "Hai đường thẳng song song khi có cùng hệ số góc và tung độ gốc khác nhau: $2m - 1 = 3 \\Leftrightarrow 2m = 4 \\Leftrightarrow m = 2$ (thỏa mãn $3 \\ne -1$)."
          },
          {
            "id": "ot2-q12",
            "badge": "Câu 12 (VD) - Toán thực tế diện tích đất",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 17)",
            "question": "Một mảnh đất hình chữ nhật có chu vi $60\\text{ m}$. Biết chiều dài hơn chiều rộng $6\\text{ m}$. Diện tích của mảnh đất đó là:",
            "options": [
              "$216\\text{ m}^2$",
              "$225\\text{ m}^2$",
              "$200\\text{ m}^2$",
              "$180\\text{ m}^2$"
            ],
            "correctIndex": 0,
            "explanation": "Nửa chu vi: $x + y = 30$. Chiều dài hơn rộng: $x - y = 6$. Giải hệ ta được chiều dài $x = 18\\text{ m}$, chiều rộng $y = 12\\text{ m}$. Diện tích $S = 18 \\cdot 12 = 216\\text{ m}^2$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "ot2-tf1",
            "badge": "Đúng/Sai 1 (NB) - Điểm thuộc đường thẳng biểu diễn nghiệm",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 8)",
            "prompt": "Cho phương trình bậc nhất hai ẩn $2x + 5y = 10$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Cặp số $(0; 2)$ là một nghiệm của phương trình.",
                "correctAnswer": true,
                "explanation": "$2(0) + 5(2) = 10$ (thỏa mãn)."
              },
              {
                "id": "b",
                "text": "Cặp số $(5; 0)$ là một nghiệm của phương trình.",
                "correctAnswer": true,
                "explanation": "$2(5) + 5(0) = 10$ (thỏa mãn)."
              },
              {
                "id": "c",
                "text": "Đường thẳng biểu diễn tập nghiệm cắt trục tung tại điểm có tung độ bằng $2$.",
                "correctAnswer": true,
                "explanation": "Giao với trục tung $Oy$ ($x = 0$) là điểm $(0; 2)$ có tung độ bằng $2$."
              },
              {
                "id": "d",
                "text": "Khi $x = 1$, giá trị tương ứng của $y$ là $2$.",
                "correctAnswer": false,
                "explanation": "Thay $x = 1$: $2(1) + 5y = 10 \\Rightarrow 5y = 8 \\Rightarrow y = 1,6 \\ne 2$."
              }
            ]
          },
          {
            "id": "ot2-tf2",
            "badge": "Đúng/Sai 2 (TH) - Các bước giải hệ phương trình bằng phương pháp thế",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 13)",
            "prompt": "Cho hệ phương trình: $\\begin{cases} 3x - y = 5 \\\\ x + 2y = 4 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Từ phương trình thứ nhất biểu diễn $y$ theo $x$ ta được $y = 3x - 5$.",
                "correctAnswer": true,
                "explanation": "$3x - y = 5 \\Leftrightarrow y = 3x - 5$."
              },
              {
                "id": "b",
                "text": "Thế $y = 3x - 5$ vào phương trình thứ hai ta được $x + 2(3x - 5) = 4$.",
                "correctAnswer": true,
                "explanation": "Thay thế chính xác vào vị trí của biến $y$."
              },
              {
                "id": "c",
                "text": "Nghiệm duy nhất của hệ phương trình là $(x; y) = (2; 1)$.",
                "correctAnswer": true,
                "explanation": "$x + 6x - 10 = 4 \\Leftrightarrow 7x = 14 \\Leftrightarrow x = 2 \\Rightarrow y = 3(2) - 5 = 1$."
              },
              {
                "id": "d",
                "text": "Biểu thức $2x + 3y$ có giá trị bằng $8$.",
                "correctAnswer": false,
                "explanation": "$2(2) + 3(1) = 4 + 3 = 7 \\ne 8$."
              }
            ]
          },
          {
            "id": "ot2-tf3",
            "badge": "Đúng/Sai 3 (TH) - Lập hệ phương trình tìm đường thẳng qua hai điểm",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 15)",
            "prompt": "Đồ thị hàm số bậc nhất $y = ax + b$ đi qua hai điểm $M(1; 1)$ và $N(2; 3)$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Thay tọa độ điểm $M(1; 1)$ vào phương trình ta được $a + b = 1$.",
                "correctAnswer": true,
                "explanation": "$1 = a(1) + b \\Leftrightarrow a + b = 1$."
              },
              {
                "id": "b",
                "text": "Thay tọa độ điểm $N(2; 3)$ vào phương trình ta được $2a + b = 3$.",
                "correctAnswer": true,
                "explanation": "$3 = a(2) + b \\Leftrightarrow 2a + b = 3$."
              },
              {
                "id": "c",
                "text": "Giải hệ hai phương trình trên ta tìm được $a = 2$ và $b = -1$.",
                "correctAnswer": true,
                "explanation": "Trừ vế theo vế: $a = 2 \\Rightarrow b = 1 - 2 = -1$."
              },
              {
                "id": "d",
                "text": "Đường thẳng này đi qua gốc tọa độ $O(0; 0)$.",
                "correctAnswer": false,
                "explanation": "Hàm số là $y = 2x - 1$. Với $x = 0 \\Rightarrow y = -1 \\ne 0$ nên không đi qua gốc tọa độ."
              }
            ]
          },
          {
            "id": "ot2-tf4",
            "badge": "Đúng/Sai 4 (VD) - Bài toán cổ Vừa gà vừa chó",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 17)",
            "prompt": "Một người nông dân nhốt gà và thỏ trong cùng một chuồng. Người đó đếm được có tất cả $35\\text{ cái đầu}$ (mỗi con có 1 đầu) và $94\\text{ cái chân}$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Nếu gọi số con gà là $x$ và số con thỏ là $y$ thì ta có phương trình $x + y = 35$.",
                "correctAnswer": true,
                "explanation": "Tổng số con là 35 con nên $x + y = 35$."
              },
              {
                "id": "b",
                "text": "Phương trình biểu diễn tổng số chân là $2x + 4y = 94$.",
                "correctAnswer": true,
                "explanation": "Mỗi con gà có 2 chân, mỗi con thỏ có 4 chân: $2x + 4y = 94$."
              },
              {
                "id": "c",
                "text": "Số con gà trong chuồng nhiều hơn số con thỏ.",
                "correctAnswer": true,
                "explanation": "Giải hệ: $x = 23\\text{ con gà}$ và $y = 12\\text{ con thỏ}$. Vì $23 > 12$ nên khẳng định đúng."
              },
              {
                "id": "d",
                "text": "Người nông dân nuôi $20\\text{ con thỏ}$.",
                "correctAnswer": false,
                "explanation": "Số con thỏ chính xác là $12\\text{ con}$, không phải $20$ con."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "ot2-sa1",
            "badge": "Trả lời ngắn 1 (TH) - Tích nghiệm của hệ phương trình",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 14)",
            "prompt": "Giải hệ phương trình $\\begin{cases} 2x + 3y = 8 \\\\ 3x - y = 1 \\end{cases}$. Tính giá trị của tích $x \\cdot y$.",
            "correctAnswer": "2",
            "acceptableAnswers": [
              "2",
              "xy=2"
            ],
            "explanation": "Từ PT 2: $y = 3x - 1$. Thay vào PT 1: $2x + 3(3x - 1) = 8 \\Leftrightarrow 11x = 11 \\Leftrightarrow x = 1 \\Rightarrow y = 2$. Tích $x \\cdot y = 1 \\cdot 2 = 2$."
          },
          {
            "id": "ot2-sa2",
            "badge": "Trả lời ngắn 2 (TH) - Tổng bình phương các hệ số",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
            "prompt": "Biết đường thẳng $y = ax + b$ đi qua hai điểm $A(0; -2)$ và $B(3; 4)$. Tính giá trị của $a^2 + b^2$.",
            "correctAnswer": "8",
            "acceptableAnswers": [
              "8"
            ],
            "explanation": "Qua $A(0; -2) \\Rightarrow b = -2$. Qua $B(3; 4) \\Rightarrow 3a - 2 = 4 \\Rightarrow 3a = 6 \\Rightarrow a = 2$. Giá trị $a^2 + b^2 = 2^2 + (-2)^2 = 4 + 4 = 8$."
          },
          {
            "id": "ot2-sa3",
            "badge": "Trả lời ngắn 3 (VD) - Tìm tham số để nghiệm thỏa mãn x = 2y",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Đà Nẵng",
            "prompt": "Cho hệ phương trình $\\begin{cases} 2x - y = m \\\\ x + y = 3 \\end{cases}$. Tìm giá trị của tham số $m$ để hệ có nghiệm thỏa mãn $x = 2y$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
              "3",
              "m=3"
            ],
            "explanation": "Thay $x = 2y$ vào PT 2: $2y + y = 3 \\Leftrightarrow 3y = 3 \\Leftrightarrow y = 1 \\Rightarrow x = 2$. Thay $x = 2, y = 1$ vào PT 1: $m = 2(2) - 1 = 3$."
          },
          {
            "id": "ot2-sa4",
            "badge": "Trả lời ngắn 4 (VD) - Giải hệ đặt ẩn phụ tìm nghiệm x",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 15)",
            "prompt": "Tìm giá trị của $x$ trong nghiệm của hệ phương trình: $\\begin{cases} \\frac{2}{x} + \\frac{1}{y} = 2 \\\\ \\frac{1}{x} - \\frac{1}{y} = 1 \\end{cases}$.",
            "correctAnswer": "1",
            "acceptableAnswers": [
              "1",
              "x=1"
            ],
            "explanation": "Cộng hai phương trình vế theo vế: $\\frac{3}{x} = 3 \\Rightarrow x = 1$. (Khi đó $\\frac{1}{y} = 0$, hoặc nghiệm hợp lý $x = 1$)."
          },
          {
            "id": "ot2-sa5",
            "badge": "Trả lời ngắn 5 (VD) - Toán thực tế chuyển động tàu hỏa",
            "source": "Đề thi tuyển sinh vào lớp 10 THPT",
            "prompt": "Một đoàn tàu hỏa đi từ ga A đến ga B với vận tốc không đổi. Nếu tàu tăng vận tốc thêm $10\\text{ km/h}$ thì đến nơi sớm $2\\text{ giờ}$. Nếu tàu giảm vận tốc $10\\text{ km/h}$ thì đến nơi muộn $3\\text{ giờ}$. Tính quãng đường $AB$ (theo đơn vị km).",
            "correctAnswer": "600",
            "acceptableAnswers": [
              "600",
              "600 km",
              "600km"
            ],
            "explanation": "Gọi vận tốc là $v\\text{ (km/h)}$, thời gian là $t\\text{ (giờ)}$. Quãng đường $s = vt$. Ta có hệ: $\\begin{cases} (v + 10)(t - 2) = vt \\\\ (v - 10)(t + 3) = vt \\end{cases} \\Leftrightarrow \\begin{cases} -2v + 10t = 20 \\\\ 3v - 10t = 30 \\end{cases}$. Cộng hai phương trình được $v = 50\\text{ km/h} \\Rightarrow t = 12\\text{ giờ}$. Quãng đường $s = 50 \\cdot 12 = 600\\text{ km}$."
          },
          {
            "id": "ot2-sa6",
            "badge": "Trả lời ngắn 6 (VD) - Toán thực tế điểm thi tuyển sinh 10",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
            "prompt": "Trong kỳ thi tuyển sinh vào lớp 10, một phòng thi có $24\\text{ thí sinh}$. Điểm thi môn Toán của cả phòng gồm hai mức là $8\\text{ điểm}$ và $9\\text{ điểm}$. Tổng điểm của cả phòng thi là $202\\text{ điểm}$. Hỏi có bao nhiêu thí sinh đạt điểm $9$?",
            "correctAnswer": "10",
            "acceptableAnswers": [
              "10",
              "10 thí sinh"
            ],
            "explanation": "Gọi số bạn được 8 điểm là $x$, 9 điểm là $y$ ($x + y = 24$). Tổng điểm: $8x + 9y = 202$. Nhân PT đầu với 8: $8x + 8y = 192$. Trừ theo vế: $y = 202 - 192 = 10\\text{ thí sinh}$."
          }
        ]
      },
      {
        "id": "de-3",
        "title": "Đề ôn tập số 3",
        "description": "Đề ôn tập tổng hợp cuối Chương I (Phương trình và Hệ phương trình bậc nhất hai ẩn) - Đề số 3",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "ot3-q1",
            "badge": "Câu 1 (NB) - Kiểm tra nghiệm của phương trình",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 6)",
            "question": "Cặp số $(x; y) = (2; 3)$ là nghiệm của phương trình nào sau đây?",
            "options": [
              "$2x + y = 7$",
              "$x + 2y = 7$",
              "$3x - y = 4$",
              "$x - y = 1$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 2, y = 3$ vào vế trái: $2(2) + 3 = 4 + 3 = 7$ (bằng vế phải)."
          },
          {
            "id": "ot3-q2",
            "badge": "Câu 2 (NB) - Nghiệm của hệ đối xứng đơn giản",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 8)",
            "question": "Cặp số nào sau đây là nghiệm của hệ phương trình $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases}$?",
            "options": [
              "$(2; 1)$",
              "$(1; 2)$",
              "$(3; 0)$",
              "$(0; 3)$"
            ],
            "correctIndex": 0,
            "explanation": "Cộng hai phương trình: $3x = 6 \\Rightarrow x = 2 \\Rightarrow y = 1$. Cặp số nghiệm là $(2; 1)$."
          },
          {
            "id": "ot3-q3",
            "badge": "Câu 3 (NB) - Giao điểm với trục hoành Ox",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 9)",
            "question": "Đường thẳng $d: 2x - y = 4$ cắt trục hoành $Ox$ tại điểm có tọa độ là:",
            "options": [
              "$(2; 0)$",
              "$(0; -4)$",
              "$(4; 0)$",
              "$(0; 4)$"
            ],
            "correctIndex": 0,
            "explanation": "Giao điểm với trục hoành có $y = 0$. Thay $y = 0$ vào phương trình: $2x - 0 = 4 \\Rightarrow x = 2$. Vậy tọa độ là $(2; 0)$."
          },
          {
            "id": "ot3-q4",
            "badge": "Câu 4 (NB) - Hệ phương trình có vô số nghiệm",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 14)",
            "question": "Hệ phương trình $\\begin{cases} x - 3y = 2 \\\\ -2x + 6y = -4 \\end{cases}$ có bao nhiêu nghiệm?",
            "options": [
              "Có vô số nghiệm",
              "Vô nghiệm",
              "Có 1 nghiệm duy nhất",
              "Có 2 nghiệm"
            ],
            "correctIndex": 0,
            "explanation": "Nhân hai vế của phương trình thứ nhất với $-2$ ta được đúng phương trình thứ hai. Hai đường thẳng trùng nhau nên hệ có vô số nghiệm."
          },
          {
            "id": "ot3-q5",
            "badge": "Câu 5 (NB) - Vị trí tương đối khi hệ vô nghiệm",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 12)",
            "question": "Hệ phương trình $\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$ vô nghiệm khi hai đường thẳng biểu diễn tập nghiệm của chúng:",
            "options": [
              "Song song với nhau",
              "Cắt nhau tại một điểm",
              "Trùng nhau",
              "Vuông góc với nhau"
            ],
            "correctIndex": 0,
            "explanation": "Hai đường thẳng song song thì không có điểm chung, do đó hệ phương trình vô nghiệm."
          },
          {
            "id": "ot3-q6",
            "badge": "Câu 6 (NB) - Nghiệm tổng quát của phương trình bậc nhất hai ẩn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 8)",
            "question": "Nghiệm tổng quát của phương trình $2x - y = 1$ là:",
            "options": [
              "$\\begin{cases} x \\in \\mathbb{R} \\\\ y = 2x - 1 \\end{cases}$",
              "$\\begin{cases} x = 2y - 1 \\\\ y \\in \\mathbb{R} \\end{cases}$",
              "$\\begin{cases} x \\in \\mathbb{R} \\\\ y = -2x + 1 \\end{cases}$",
              "$\\begin{cases} x = 1 \\\\ y = 1 \\end{cases}$"
            ],
            "correctIndex": 0,
            "explanation": "Từ $2x - y = 1 \\Rightarrow y = 2x - 1$. Nghiệm tổng quát là $(x; 2x - 1)$ với $x \\in \\mathbb{R}$."
          },
          {
            "id": "ot3-q7",
            "badge": "Câu 7 (TH) - Giải hệ phương trình",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 15)",
            "question": "Nghiệm của hệ phương trình $\\begin{cases} 5x + 2y = 9 \\\\ x - y = -1 \\end{cases}$ là:",
            "options": [
              "$(1; 2)$",
              "$(2; 1)$",
              "$(3; -3)$",
              "$(0; 4,5)$"
            ],
            "correctIndex": 0,
            "explanation": "Từ PT 2: $y = x + 1$. Thế vào PT 1: $5x + 2(x + 1) = 9 \\Leftrightarrow 7x = 7 \\Leftrightarrow x = 1 \\Rightarrow y = 2$. Nghiệm là $(1; 2)$."
          },
          {
            "id": "ot3-q8",
            "badge": "Câu 8 (TH) - Giải hệ phương trình thế cơ bản",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 13)",
            "question": "Giải hệ phương trình $\\begin{cases} 3x + 2y = 8 \\\\ 2x - y = 3 \\end{cases}$. Giá trị của $x + y$ bằng:",
            "options": [
              "$3$",
              "$4$",
              "$5$",
              "$2$"
            ],
            "correctIndex": 0,
            "explanation": "Từ PT 2: $y = 2x - 3$. Thế vào PT 1: $3x + 2(2x - 3) = 8 \\Leftrightarrow 7x = 14 \\Leftrightarrow x = 2 \\Rightarrow y = 1$. Giá trị $x + y = 2 + 1 = 3$."
          },
          {
            "id": "ot3-q9",
            "badge": "Câu 9 (TH) - Tìm tham số a, b của hệ phương trình",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 16)",
            "question": "Biết hệ phương trình $\\begin{cases} 2x + by = 4 \\\\ ax - y = 1 \\end{cases}$ nhận cặp số $(x; y) = (1; 2)$ làm nghiệm. Giá trị của $a$ và $b$ là:",
            "options": [
              "$a = 3; b = 1$",
              "$a = 1; b = 3$",
              "$a = 2; b = 2$",
              "$a = -1; b = 3$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 1, y = 2$: $2(1) + 2b = 4 \\Rightarrow 2b = 2 \\Rightarrow b = 1$; $a(1) - 2 = 1 \\Rightarrow a = 3$."
          },
          {
            "id": "ot3-q10",
            "badge": "Câu 10 (TH) - Tọa độ giao điểm hai đường thẳng cắt nhau",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 15)",
            "question": "Tọa độ giao điểm của hai đường thẳng $d_1: y = 2x - 3$ và $d_2: y = -x + 3$ là:",
            "options": [
              "$(2; 1)$",
              "$(1; 2)$",
              "$(3; 0)$",
              "$(0; 3)$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình hoành độ giao điểm: $2x - 3 = -x + 3 \\Leftrightarrow 3x = 6 \\Leftrightarrow x = 2 \\Rightarrow y = 1$. Giao điểm là $(2; 1)$."
          },
          {
            "id": "ot3-q11",
            "badge": "Câu 11 (VD) - Tìm tham số m để ba đường thẳng đồng quy",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
            "question": "Tìm giá trị của tham số $m$ để ba đường thẳng sau đồng quy: $d_1: 2x - y = 1$, $d_2: x + y = 5$, $d_3: mx - 2y = 2$.",
            "options": [
              "$m = 4$",
              "$m = 2$",
              "$m = -4$",
              "$m = 3$"
            ],
            "correctIndex": 0,
            "explanation": "Tọa độ giao điểm của $d_1$ và $d_2$ là nghiệm của hệ $\\begin{cases} 2x - y = 1 \\\\ x + y = 5 \\end{cases} \\Rightarrow x = 2, y = 3$. Để 3 đường thẳng đồng quy thì điểm $(2; 3)$ phải thuộc $d_3$: $m(2) - 2(3) = 2 \\Leftrightarrow 2m = 8 \\Leftrightarrow m = 4$."
          },
          {
            "id": "ot3-q12",
            "badge": "Câu 12 (VD) - Toán thực tế mua sắm đồ dùng học tập",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 18)",
            "question": "Bạn An mua $5\\text{ quyển vở}$ và $3\\text{ chiếc bút}$ hết $65.000\\text{ đ}$. Bạn Bình mua $3\\text{ quyển vở}$ và $5\\text{ chiếc bút}$ cùng loại hết $55.000\\text{ đ}$. Giá tiền của một quyển vở là:",
            "options": [
              "$10.000\\text{ đ}$",
              "$5.000\\text{ đ}$",
              "$8.000\\text{ đ}$",
              "$12.000\\text{ đ}$"
            ],
            "correctIndex": 0,
            "explanation": "Gọi giá 1 quyển vở là $x$ và 1 chiếc bút là $y$ (nghìn đồng). Hệ: $\\begin{cases} 5x + 3y = 65 \\\\ 3x + 5y = 55 \\end{cases}$. Cộng hai phương trình: $8x + 8y = 120 \\Rightarrow x + y = 15$. Trừ hai phương trình: $2x - 2y = 10 \\Rightarrow x - y = 5$. Suy ra $2x = 20 \\Rightarrow x = 10\\text{ nghìn đồng}$ ($10.000\\text{ đ}$)."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "ot3-tf1",
            "badge": "Đúng/Sai 1 (NB) - Phương trình bậc nhất hai ẩn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 6)",
            "prompt": "Cho phương trình bậc nhất hai ẩn $4x - 3y = 12$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Các hệ số của phương trình là $a = 4, b = -3, c = 12$.",
                "correctAnswer": true,
                "explanation": "Hệ số đi kèm $x$ là 4, đi kèm $y$ là $-3$, hằng số là 12."
              },
              {
                "id": "b",
                "text": "Cặp số $(3; 0)$ là một nghiệm của phương trình.",
                "correctAnswer": true,
                "explanation": "$4(3) - 3(0) = 12$ (thỏa mãn)."
              },
              {
                "id": "c",
                "text": "Cặp số $(0; 4)$ là một nghiệm của phương trình.",
                "correctAnswer": false,
                "explanation": "Tại $x = 0$ thì $-3y = 12 \\Rightarrow y = -4 \\ne 4$."
              },
              {
                "id": "d",
                "text": "Tập nghiệm của phương trình được biểu diễn bởi một đường thẳng trên mặt phẳng tọa độ $Oxy$.",
                "correctAnswer": true,
                "explanation": "Đúng, tập nghiệm của phương trình bậc nhất hai ẩn là một đường thẳng."
              }
            ]
          },
          {
            "id": "ot3-tf2",
            "badge": "Đúng/Sai 2 (TH) - Giải hệ phương trình bằng phép cộng đại số",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 14)",
            "prompt": "Cho hệ phương trình: $\\begin{cases} 4x + y = 9 \\\\ 2x - 3y = 1 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Nhân cả hai vế của phương trình thứ nhất với 3 ta được $12x + 3y = 27$.",
                "correctAnswer": true,
                "explanation": "$3(4x + y) = 3(9) \\Leftrightarrow 12x + 3y = 27$."
              },
              {
                "id": "b",
                "text": "Cộng hai phương trình vế theo vế ta triệt tiêu được ẩn $y$ và được $14x = 28$.",
                "correctAnswer": true,
                "explanation": "$(12x + 2x) + (3y - 3y) = 27 + 1 \\Leftrightarrow 14x = 28$."
              },
              {
                "id": "c",
                "text": "Nghiệm của hệ phương trình là $(x; y) = (2; 1)$.",
                "correctAnswer": true,
                "explanation": "$14x = 28 \\Rightarrow x = 2$. Thay vào phương trình đầu: $4(2) + y = 9 \\Rightarrow y = 1$."
              },
              {
                "id": "d",
                "text": "Giá trị của hiệu $x - y$ bằng $0$.",
                "correctAnswer": false,
                "explanation": "$x - y = 2 - 1 = 1 \\ne 0$."
              }
            ]
          },
          {
            "id": "ot3-tf3",
            "badge": "Đúng/Sai 3 (TH) - Tương quan giữa hai đường thẳng",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 15)",
            "prompt": "Cho hai đường thẳng $d_1: y = 3x - 1$ và $d_2: y = x + 3$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Hai đường thẳng $d_1$ và $d_2$ cắt nhau vì chúng có hệ số góc khác nhau ($3 \\ne 1$).",
                "correctAnswer": true,
                "explanation": "Đúng, hai đường thẳng có hệ số góc khác nhau thì luôn cắt nhau."
              },
              {
                "id": "b",
                "text": "Hoành độ giao điểm của hai đường thẳng là nghiệm của phương trình $3x - 1 = x + 3$.",
                "correctAnswer": true,
                "explanation": "Đúng, phương trình hoành độ giao điểm là $3x - 1 = x + 3$."
              },
              {
                "id": "c",
                "text": "Tọa độ giao điểm của hai đường thẳng là $M(2; 5)$.",
                "correctAnswer": true,
                "explanation": "$3x - x = 3 + 1 \\Leftrightarrow 2x = 4 \\Leftrightarrow x = 2 \\Rightarrow y = 2 + 3 = 5$."
              },
              {
                "id": "d",
                "text": "Giao điểm $M(2; 5)$ thuộc đường thẳng $y = 2x + 2$.",
                "correctAnswer": false,
                "explanation": "Thay $x = 2$ vào $y = 2x + 2$ được $y = 2(2) + 2 = 6 \\ne 5$."
              }
            ]
          },
          {
            "id": "ot3-tf4",
            "badge": "Đúng/Sai 4 (VD) - Toán thực tế chuyển động xe đạp",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 18)",
            "prompt": "Một người đi xe đạp từ địa điểm A đến địa điểm B rồi quay trở lại từ B về A trên cùng một quãng đường dài $30\\text{ km}$. Khi về, người đó đi nhanh hơn lúc đi $3\\text{ km/h}$ nên thời gian về ít hơn thời gian đi là $30\\text{ phút}$ ($0,5\\text{ giờ}$). Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
              {
                "id": "a",
                "text": "Nếu gọi vận tốc lúc đi là $v\\text{ (km/h)}$ thì vận tốc lúc về là $v + 3\\text{ (km/h)}$.",
                "correctAnswer": true,
                "explanation": "Vận tốc về nhanh hơn lúc đi 3 km/h nên là $v + 3$."
              },
              {
                "id": "b",
                "text": "Thời gian lúc đi là $\\frac{30}{v}\\text{ (giờ)}$ và thời gian lúc về là $\\frac{30}{v + 3}\\text{ (giờ)}$.",
                "correctAnswer": true,
                "explanation": "Thời gian bằng quãng đường chia cho vận tốc."
              },
              {
                "id": "c",
                "text": "Phương trình biểu diễn mối quan hệ thời gian là $\\frac{30}{v} - \\frac{30}{v + 3} = 0,5$.",
                "correctAnswer": true,
                "explanation": "Thời gian về ít hơn thời gian đi 0,5 giờ."
              },
              {
                "id": "d",
                "text": "Vận tốc lúc đi của người đó là $15\\text{ km/h}$.",
                "correctAnswer": false,
                "explanation": "Giải: $30(v + 3) - 30v = 0,5v(v + 3) \\Leftrightarrow 90 = 0,5(v^2 + 3v) \\Leftrightarrow v^2 + 3v - 180 = 0 \\Leftrightarrow (v - 12)(v + 15) = 0 \\Rightarrow v = 12\\text{ km/h}$ (không phải $15$ km/h)."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "ot3-sa1",
            "badge": "Trả lời ngắn 1 (TH) - Tính giá trị biểu thức sau khi giải hệ",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
            "prompt": "Giải hệ phương trình $\\begin{cases} 5x + 3y = 13 \\\\ 2x - y = 3 \\end{cases}$. Tính giá trị của biểu thức $x + 2y$.",
            "correctAnswer": "4",
            "acceptableAnswers": [
              "4",
              "x+2y=4"
            ],
            "explanation": "Từ PT 2: $y = 2x - 3$. Thế vào PT 1: $5x + 3(2x - 3) = 13 \\Leftrightarrow 11x = 22 \\Leftrightarrow x = 2 \\Rightarrow y = 1$. Giá trị $x + 2y = 2 + 2(1) = 4$."
          },
          {
            "id": "ot3-sa2",
            "badge": "Trả lời ngắn 2 (TH) - Tìm m để hệ có vô số nghiệm",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 15)",
            "prompt": "Tìm giá trị của tham số $m$ để hệ phương trình $\\begin{cases} x + my = 3 \\\\ mx + 4y = 6 \\end{cases}$ có vô số nghiệm.",
            "correctAnswer": "2",
            "acceptableAnswers": [
              "2",
              "m=2"
            ],
            "explanation": "Hệ có vô số nghiệm khi $\\frac{1}{m} = \\frac{m}{4} = \\frac{3}{6} = \\frac{1}{2}$. Từ $\\frac{1}{m} = \\frac{1}{2} \\Rightarrow m = 2$. Kiểm tra $\\frac{2}{4} = \\frac{1}{2}$ (thỏa mãn)."
          },
          {
            "id": "ot3-sa3",
            "badge": "Trả lời ngắn 3 (VD) - Tìm tham số a khi biết hoành độ nghiệm",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Hồ Chí Minh",
            "prompt": "Tìm giá trị của tham số $a$ để hệ phương trình $\\begin{cases} ax + 2y = 5 \\\\ 3x - y = 1 \\end{cases}$ nhận nghiệm $(x; y)$ có hoành độ $x = 1$.",
            "correctAnswer": "1",
            "acceptableAnswers": [
              "1",
              "a=1"
            ],
            "explanation": "Thay $x = 1$ vào PT 2: $3(1) - y = 1 \\Rightarrow y = 2$. Thay $x = 1, y = 2$ vào PT 1: $a(1) + 2(2) = 5 \\Leftrightarrow a + 4 = 5 \\Leftrightarrow a = 1$."
          },
          {
            "id": "ot3-sa4",
            "badge": "Trả lời ngắn 4 (VD) - Hệ đặt ẩn phụ tính tích nghiệm",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 16)",
            "prompt": "Giải hệ phương trình $\\begin{cases} \\frac{1}{x - 1} + \\frac{1}{y + 1} = 3 \\\\ \\frac{2}{x - 1} - \\frac{1}{y + 1} = 0 \\end{cases}$. Tính giá trị của tích $x \\cdot y$.",
            "correctAnswer": "-1",
            "acceptableAnswers": [
              "-1",
              "xy=-1"
            ],
            "explanation": "Cộng hai phương trình: $\\frac{3}{x - 1} = 3 \\Rightarrow x - 1 = 1 \\Rightarrow x = 2$. Thay vào PT đầu: $1 + \\frac{1}{y + 1} = 3 \\Rightarrow \\frac{1}{y + 1} = 2 \\Rightarrow y + 1 = 0,5 \\Rightarrow y = -0,5$. Tích $x \\cdot y = 2 \\cdot (-0,5) = -1$."
          },
          {
            "id": "ot3-sa5",
            "badge": "Trả lời ngắn 5 (VD) - Toán thực tế vận tốc dòng nước",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 19)",
            "prompt": "Một ca nô xuôi dòng khúc sông dài $42\\text{ km}$ hết $1,5\\text{ giờ}$ và ngược dòng khúc sông đó hết $2,1\\text{ giờ}$. Tính vận tốc của dòng nước (theo đơn vị km/h).",
            "correctAnswer": "4",
            "acceptableAnswers": [
              "4",
              "4 km/h",
              "4km/h"
            ],
            "explanation": "Vận tốc xuôi dòng: $v + v_n = 42 : 1,5 = 28\\text{ (km/h)}$. Vận tốc ngược dòng: $v - v_n = 42 : 2,1 = 20\\text{ (km/h)}$. Trừ từng vế hai phương trình: $2v_n = 8 \\Rightarrow v_n = 4\\text{ km/h}$."
          },
          {
            "id": "ot3-sa6",
            "badge": "Trả lời ngắn 6 (VD) - Toán thực tế năng suất hai vòi nước",
            "source": "Đề thi tuyển sinh vào lớp 10 THPT TP. Hà Nội",
            "prompt": "Hai vòi nước cùng chảy vào một bể không có nước thì sau $4,8\\text{ giờ}$ đầy bể. Biết rằng trong mỗi giờ lượng nước vòi I chảy được bằng $\\frac{3}{2}$ lượng nước vòi II chảy. Hỏi nếu chảy riêng một mình thì vòi I chảy đầy bể trong bao nhiêu giờ?",
            "correctAnswer": "8",
            "acceptableAnswers": [
              "8",
              "8 giờ",
              "8h"
            ],
            "explanation": "Mỗi giờ cả hai vòi chảy được $\\frac{1}{4,8} = \\frac{5}{24}$ bể. Gọi năng suất vòi II trong 1 giờ là $y$ thì vòi I là $1,5y$. Ta có $1,5y + y = \\frac{5}{24} \\Leftrightarrow 2,5y = \\frac{5}{24} \\Leftrightarrow y = \\frac{1}{12}$ bể/giờ. Năng suất vòi I là $1,5 \\cdot \\frac{1}{12} = \\frac{1}{8}$ bể/giờ. Vậy vòi I chảy một mình đầy bể trong $8\\text{ giờ}$."
          }
        ]
      }
    ]
  },
  "t9-b5-bat-dang-thuc": {
    "id": "t9-b5-bat-dang-thuc",
    "lessonNumber": 5,
    "title": "Bài 5: Bất đẳng thức và tính chất",
    "bookChapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
    "scenarioTitle": "Tình huống: Bập bênh thăng bằng và so sánh tải trọng xe",
    "scenarioFrames": [],
    "youtubeVideoId": "2W_k86M77tE",
    "youtubeVideoTitle": "Bài Giảng Video: Bất Đẳng Thức và Tính Chất - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "2W_k86M77tE",
        "title": "Tiết 1: Khái niệm bất đẳng thức và liên hệ với phép cộng"
      },
      {
        "id": "q1k8xM_77tA",
        "title": "Tiết 2: Liên hệ giữa thứ tự và phép nhân - Tính chất bắc cầu"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.5.1",
        "title": "Ví dụ 1: Nhận biết bất đẳng thức",
        "question": "Trong các hệ thức sau, hệ thức nào là bất đẳng thức?",
        "options": [
          "$2x - 3 < 5$",
          "$2x - 3 = 5$",
          "$x^2 + 2x + 1$",
          "$3x - 1$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ thức có chứa dấu $<, >, \\le, \\ge$ được gọi là bất đẳng thức. Do đó $2x - 3 < 5$ là một bất đẳng thức."
      },
      {
        "id": "vq-9.5.2",
        "title": "Ví dụ 2: Liên hệ giữa thứ tự và phép cộng",
        "question": "Cho bất đẳng thức $a < b$. Khi cộng số $3$ vào cả hai vế, ta được bất đẳng thức nào?",
        "options": [
          "$a + 3 < b + 3$",
          "$a + 3 > b + 3$",
          "$a + 3 = b + 3$",
          "$a - 3 < b + 3$"
        ],
        "correctIndex": 0,
        "explanation": "Khi cộng cùng một số vào cả hai vế của bất đẳng thức, ta được bất đẳng thức mới cùng chiều: $a + 3 < b + 3$."
      },
      {
        "id": "vq-9.5.3",
        "title": "Ví dụ 3: Nhân với số âm đổi chiều bất đẳng thức",
        "question": "Cho bất đẳng thức $a < b$. Khi nhân cả hai vế với $-3$, ta được bất đẳng thức nào?",
        "options": [
          "$-3a > -3b$",
          "$-3a < -3b$",
          "$-3a = -3b$",
          "$3a > 3b$"
        ],
        "correctIndex": 0,
        "explanation": "Khi nhân cả hai vế của một bất đẳng thức với cùng một số âm, ta phải ĐỔI CHIỀU bất đẳng thức: $a < b \\Rightarrow -3a > -3b$."
      },
      {
        "id": "vq-9.5.4",
        "title": "Ví dụ 4: Tính chất bắc cầu",
        "question": "Biết $x < y$ và $y < 10$. Kết luận nào sau đây đúng theo tính chất bắc cầu?",
        "options": [
          "$x < 10$",
          "$x > 10$",
          "$x = 10$",
          "$x \\ge 10$"
        ],
        "correctIndex": 0,
        "explanation": "Theo tính chất bắc cầu: nếu $x < y$ và $y < 10$ thì $x < 10$."
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm bất đẳng thức",
        "points": [
          "Hệ thức dạng $a < b$ (hay $a > b, a \\le b, a \\ge b$) được gọi là bất đẳng thức.",
          "Trong đó: $a$ gọi là vế trái, $b$ gọi là vế phải của bất đẳng thức.",
          "Bất đẳng thức ngặt: chứa dấu $<$ hoặc $>$.",
          "Bất đẳng thức không ngặt: chứa dấu $\\le$ (nhỏ hơn hoặc bằng, không vượt quá) hoặc $\\ge$ (lớn hơn hoặc bằng, tối thiểu, không ít hơn)."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 9 KNTT Trang 27)",
        "exampleProblem": "Dùng dấu bất đẳng thức để viết các khẳng định sau:\n  a) $x$ là số không âm.\n  b) Tốc độ $v\\text{ (km/h)}$ của xe máy không vượt quá $40\\text{ km/h}$.",
        "exampleSolution": "• Câu a: Số không âm là số lớn hơn hoặc bằng 0, viết là: $x \\ge 0$.\n• Câu b: Tốc độ không vượt quá $40\\text{ km/h}$, viết là: $v \\le 40$."
      },
      {
        "index": "2",
        "title": "Liên hệ giữa thứ tự và phép cộng",
        "points": [
          "Tính chất: Khi cộng cùng một số vào cả hai vế của một bất đẳng thức, ta được bất đẳng thức mới cùng chiều với bất đẳng thức đã cho.",
          "Tổng quát:\n  $a < b \\Rightarrow a + c < b + c$\n  $a \\le b \\Rightarrow a + c \\le b + c$\n  $a > b \\Rightarrow a + c > b + c$\n  $a \\ge b \\Rightarrow a + c \\ge b + c$"
        ],
        "exampleTitle": "Ví dụ 2 (SGK Toán 9 KNTT Trang 28)",
        "exampleProblem": "Cho $a < b$. Hãy so sánh:\n  a) $a + 4$ và $b + 4$\n  b) $a - 5$ và $b - 5$.",
        "exampleSolution": "• Câu a: Cộng số 4 vào hai vế của $a < b$ ta được: $a + 4 < b + 4$.\n• Câu b: Trừ số 5 (tức là cộng số $-5$) vào hai vế của $a < b$ ta được: $a - 5 < b - 5$."
      },
      {
        "index": "3",
        "title": "Liên hệ giữa thứ tự và phép nhân - Tính chất bắc cầu",
        "points": [
          "Nhân với số DƯƠNG ($c > 0$): CÙNG CHIỀU\n  $a < b \\Rightarrow ac < bc$",
          "Nhân với số ÂM ($c < 0$): ĐỔI CHIỀU (NGƯỢC CHIỀU)\n  $a < b \\Rightarrow ac > bc$",
          "Tính chất bắc cầu:\n  Nếu $a < b$ và $b < c$ thì $a < c$."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 9 KNTT Trang 28)",
        "exampleProblem": "Cho $a < b$. Hãy so sánh:\n  a) $3a$ và $3b$\n  b) $-2a$ và $-2b$\n  c) $2a + 1$ và $2b + 1$.",
        "exampleSolution": "• Câu a: Vì $3 > 0$ nên nhân 3 vào hai vế của $a < b$ ta được: $3a < 3b$.\n• Câu b: Vì $-2 < 0$ nên nhân $-2$ vào hai vế của $a < b$ ta phải đổi chiều: $-2a > -2b$.\n• Câu c: Vì $2 > 0$ nên $2a < 2b$. Cộng thêm 1 vào hai vế ta được: $2a + 1 < 2b + 1$."
      }
    ],
    "tips": [
      "Quy tắc vàng: Chỉ có khi nhân hoặc chia với SỐ ÂM thì bất đẳng thức mới ĐỔI CHIỀU.",
      "Cộng hoặc trừ với bất kỳ số nào (dương hay âm) thì bất đẳng thức luôn GIỮ NGUYÊN CHIỀU.",
      "Cụm từ thực tế:\n  • 'không vượt quá', 'nhiều nhất', 'tối đa' tương ứng với dấu $\\le$.\n  • 'không ít hơn', 'ít nhất', 'tối thiểu' tương ứng với dấu $\\ge$."
    ],
    "traps": [
      "Bẫy quên đổi chiều khi nhân hoặc chia cho số âm: Ví dụ $a < b \\Rightarrow -3a > -3b$, nhiều bạn hay viết sai thành $-3a < -3b$.",
      "Bẫy nhầm lẫn khi trừ: Phép trừ hai vế cho một số $c$ thực chất là cộng với số $-c$ nên chiều bất đẳng thức KHÔNG đổi: $a < b \\Rightarrow a - c < b - c$."
    ],
    "quizQuestions": [
      {
        "id": "quiz-9.5.1",
        "badge": "Câu 1 - Nhận biết bất đẳng thức",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.1 (Trang 28)",
        "question": "Trong các hệ thức sau, hệ thức nào là một bất đẳng thức?",
        "options": [
          "$3x - 1 < 5$",
          "$3x - 1 = 5$",
          "$2x + 3y$",
          "$x^2 - 4$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ thức có dạng $A < B$ (hoặc $>, \\le, \\ge$) được gọi là bất đẳng thức. Ở đây $3x - 1 < 5$ là bất đẳng thức."
      },
      {
        "id": "quiz-9.5.2",
        "badge": "Câu 2 - Viết khẳng định dưới dạng bất đẳng thức",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 25)",
        "question": "Khẳng định 'Số $m$ lớn hơn hoặc bằng $-2$' được viết dưới dạng bất đẳng thức là:",
        "options": [
          "$m \\ge -2$",
          "$m > -2$",
          "$m \\le -2$",
          "$m < -2$"
        ],
        "correctIndex": 0,
        "explanation": "'Lớn hơn hoặc bằng' tương ứng với ký hiệu $\\ge$. Do đó khẳng định viết là $m \\ge -2$."
      },
      {
        "id": "quiz-9.5.3",
        "badge": "Câu 3 - Xác định vế trái và vế phải",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 28)",
        "question": "Vế trái và vế phải của bất đẳng thức $2a + 3 \\le 7$ lần lượt là:",
        "options": [
          "$2a + 3$ và $7$",
          "$7$ và $2a + 3$",
          "$2a$ và $7$",
          "$3$ và $7$"
        ],
        "correctIndex": 0,
        "explanation": "Vế bên trái dấu bất đẳng thức là $2a + 3$, vế bên phải dấu bất đẳng thức là $7$."
      },
      {
        "id": "quiz-9.5.4",
        "badge": "Câu 4 - Tính chất cộng cùng một số",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.2 (Trang 28)",
        "question": "Cho $a < b$. Khẳng định nào sau đây là đúng?",
        "options": [
          "$a + 5 < b + 5$",
          "$a + 5 > b + 5$",
          "$a + 5 = b + 5$",
          "$a - 5 > b - 5$"
        ],
        "correctIndex": 0,
        "explanation": "Khi cộng cùng một số vào hai vế của bất đẳng thức thì chiều của bất đẳng thức không đổi: $a + 5 < b + 5$."
      },
      {
        "id": "quiz-9.5.5",
        "badge": "Câu 5 - Nhân cả hai vế với số dương",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 26)",
        "question": "Cho $a < b$. Khẳng định nào sau đây đúng khi nhân cả hai vế với số dương $3$?",
        "options": [
          "$3a < 3b$",
          "$3a > 3b$",
          "$3a = 3b$",
          "$3a \\le 3b$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $3 > 0$ nên khi nhân cả hai vế của bất đẳng thức với $3$, chiều bất đẳng thức giữ nguyên: $3a < 3b$."
      },
      {
        "id": "quiz-9.5.6",
        "badge": "Câu 6 - Nhân cả hai vế với số âm",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 29)",
        "question": "Cho $a < b$. Khi nhân cả hai vế với $-2$, bất đẳng thức nào sau đây đúng?",
        "options": [
          "$-2a > -2b$",
          "$-2a < -2b$",
          "$-2a = -2b$",
          "$2a > 2b$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $-2 < 0$ nên khi nhân cả hai vế của bất đẳng thức với $-2$, ta phải đổi chiều: $-2a > -2b$."
      },
      {
        "id": "quiz-9.5.7",
        "badge": "Câu 7 - Nhận biết khẳng định sai khi nhân số âm",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.3 (Trang 29)",
        "question": "Cho $a > b$. Khẳng định nào sau đây là SAI?",
        "options": [
          "$-3a > -3b$",
          "$a + 2 > b + 2$",
          "$a - 1 > b - 1$",
          "$4a > 4b$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $-3 < 0$ nên khi nhân với $-3$ phải đổi chiều: $-3a < -3b$. Do đó khẳng định $-3a > -3b$ là SAI."
      },
      {
        "id": "quiz-9.5.8",
        "badge": "Câu 8 - Suy luận từ phép cộng",
        "source": "SGK Toán 9 Cánh Diều Bài 3 (Trang 26)",
        "question": "Biết $a + 2 < b + 2$. Kết luận nào sau đây đúng khi so sánh $a$ và $b$?",
        "options": [
          "$a < b$",
          "$a > b$",
          "$a = b$",
          "$a \\le b$"
        ],
        "correctIndex": 0,
        "explanation": "Trừ cả hai vế cho 2: $(a + 2) - 2 < (b + 2) - 2 \\Leftrightarrow a < b$."
      },
      {
        "id": "quiz-9.5.9",
        "badge": "Câu 9 - Phối hợp phép nhân và phép cộng",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 29)",
        "question": "Cho $m < n$. So sánh hai biểu thức $2m + 1$ và $2n + 1$:",
        "options": [
          "$2m + 1 < 2n + 1$",
          "$2m + 1 > 2n + 1$",
          "$2m + 1 = 2n + 1$",
          "$2m + 1 \\ge 2n + 1$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $2 > 0$ nên $m < n \\Rightarrow 2m < 2n$. Cộng 1 vào cả hai vế: $2m + 1 < 2n + 1$."
      },
      {
        "id": "quiz-9.5.10",
        "badge": "Câu 10 - Phối hợp nhân số âm và phép cộng",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.4 (Trang 29)",
        "question": "Cho $x < y$. So sánh hai biểu thức $-4x + 3$ và $-4y + 3$:",
        "options": [
          "$-4x + 3 > -4y + 3$",
          "$-4x + 3 < -4y + 3$",
          "$-4x + 3 = -4y + 3$",
          "$-4x + 3 \\le -4y + 3$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $-4 < 0$ nên $x < y \\Rightarrow -4x > -4y$. Cộng 3 vào cả hai vế: $-4x + 3 > -4y + 3$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-9.5.1",
        "badge": "Đúng/Sai 1 - Tính chất cơ bản của phép cộng",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.2 (Trang 28)",
        "prompt": "Cho bất đẳng thức $a < b$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$a + 7 < b + 7$.",
            "correctAnswer": true,
            "explanation": "Cộng cùng số 7 vào hai vế giữ nguyên chiều bất đẳng thức."
          },
          {
            "id": "b",
            "text": "$a - 3 < b - 3$.",
            "correctAnswer": true,
            "explanation": "Trừ cùng số 3 vào hai vế giữ nguyên chiều bất đẳng thức."
          },
          {
            "id": "c",
            "text": "$a + c > b + c$ với mọi số thực $c$.",
            "correctAnswer": false,
            "explanation": "Khẳng định này sai vì phải cùng chiều: $a + c < b + c$."
          },
          {
            "id": "d",
            "text": "Nếu $a + 2 < b + 2$ thì $a < b$.",
            "correctAnswer": true,
            "explanation": "Trừ 2 ở cả hai vế ta được $a < b$."
          }
        ]
      },
      {
        "id": "tf-9.5.2",
        "badge": "Đúng/Sai 2 - Tính chất của phép nhân",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 26)",
        "prompt": "Cho bất đẳng thức $m > n$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$5m > 5n$.",
            "correctAnswer": true,
            "explanation": "Nhân với số dương 5 giữ nguyên chiều."
          },
          {
            "id": "b",
            "text": "$-2m > -2n$.",
            "correctAnswer": false,
            "explanation": "Nhân với số âm $-2$ phải đổi chiều: $-2m < -2n$."
          },
          {
            "id": "c",
            "text": "$-m < -n$.",
            "correctAnswer": true,
            "explanation": "Nhân với $-1$ thì đổi chiều: $-m < -n$."
          },
          {
            "id": "d",
            "text": "$\frac{m}{3} > \frac{n}{3}$.",
            "correctAnswer": true,
            "explanation": "Chia cho số dương 3 (tức nhân $\\frac{1}{3} > 0$) giữ nguyên chiều."
          }
        ]
      },
      {
        "id": "tf-9.5.3",
        "badge": "Đúng/Sai 3 - Phối hợp các phép toán",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 29)",
        "prompt": "Cho $x < y$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$3x + 2 < 3y + 2$.",
            "correctAnswer": true,
            "explanation": "Vì $3 > 0$ nên $3x < 3y \\Rightarrow 3x + 2 < 3y + 2$."
          },
          {
            "id": "b",
            "text": "$-5x + 1 > -5y + 1$.",
            "correctAnswer": true,
            "explanation": "Vì $-5 < 0$ nên $-5x > -5y \\Rightarrow -5x + 1 > -5y + 1$."
          },
          {
            "id": "c",
            "text": "$2x - 4 > 2y - 4$.",
            "correctAnswer": false,
            "explanation": "$2 > 0$ nên $2x - 4 < 2y - 4$, khẳng định viết ngược chiều là sai."
          },
          {
            "id": "d",
            "text": "$-x - 3 < -y - 3$.",
            "correctAnswer": false,
            "explanation": "Nhân với $-1$ phải đổi chiều: $-x > -y \\Rightarrow -x - 3 > -y - 3$."
          }
        ]
      },
      {
        "id": "tf-9.5.4",
        "badge": "Đúng/Sai 4 - Diễn đạt thực tế và tính chất bắc cầu",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.1 (Trang 28)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khẳng định 'Khối lượng $m$ của một vật không quá $50\\text{ kg}$' được viết là $m \\le 50$.",
            "correctAnswer": true,
            "explanation": "'Không quá' có nghĩa là nhỏ hơn hoặc bằng ($\\le$)."
          },
          {
            "id": "b",
            "text": "Khẳng định 'Số người $N$ ít nhất là 20 người' được viết là $N \\ge 20$.",
            "correctAnswer": true,
            "explanation": "'Ít nhất' có nghĩa là lớn hơn hoặc bằng ($\\ge$)."
          },
          {
            "id": "c",
            "text": "Nếu $a < b$ và $b < 3$ thì $a < 3$.",
            "correctAnswer": true,
            "explanation": "Theo tính chất bắc cầu của bất đẳng thức."
          },
          {
            "id": "d",
            "text": "Nếu $x > y$ và $y > z$ thì $x < z$.",
            "correctAnswer": false,
            "explanation": "Theo tính chất bắc cầu: nếu $x > y$ và $y > z$ thì $x > z$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-9.5.1",
        "badge": "Trả lời ngắn 1 - So sánh giá trị sau khi cộng",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.2 (Trang 28)",
        "prompt": "Cho $a < b$. Khi cộng số $8$ vào cả hai vế, giữa hai biểu thức $a + 8$ và $b + 8$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": "<",
        "acceptableAnswers": ["<", "dấu <", "nho hon"],
        "explanation": "Vì $a < b$ nên khi cộng cùng số 8 vào hai vế ta được $a + 8 < b + 8$."
      },
      {
        "id": "sa-9.5.2",
        "badge": "Trả lời ngắn 2 - So sánh giá trị sau khi nhân số âm",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 26)",
        "prompt": "Cho $x > y$. Khi nhân cả hai vế với $-5$, giữa hai biểu thức $-5x$ và $-5y$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": "<",
        "acceptableAnswers": ["<", "dấu <", "nho hon"],
        "explanation": "Vì $-5 < 0$ nên khi nhân cả hai vế với $-5$ bất đẳng thức đổi chiều: $-5x < -5y$."
      },
      {
        "id": "sa-9.5.3",
        "badge": "Trả lời ngắn 3 - So sánh hai số ban đầu",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 29)",
        "prompt": "Biết rằng $2a - 5 < 2b - 5$. Giữa $a$ và $b$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": "<",
        "acceptableAnswers": ["<", "dấu <", "nho hon"],
        "explanation": "Cộng 5 vào hai vế được $2a < 2b$. Chia hai vế cho số dương 2 được $a < b$."
      },
      {
        "id": "sa-9.5.4",
        "badge": "Trả lời ngắn 4 - So sánh khi nhân số âm và cộng",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.4 (Trang 29)",
        "prompt": "Biết $-3m > -3n$. Giữa hai biểu thức $m$ và $n$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": "<",
        "acceptableAnswers": ["<", "dấu <", "nho hon"],
        "explanation": "Chia cả hai vế cho số âm $-3$ thì bất đẳng thức đổi chiều: $m < n$."
      }
    ]
  },
  "t9-b6-bat-phuong-trinh-bac-nhat": {
    "id": "t9-b6-bat-phuong-trinh-bac-nhat",
    "lessonNumber": 6,
    "title": "Bài 6: Bất phương trình bậc nhất một ẩn",
    "bookChapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
    "scenarioTitle": "Tình huống: Cân đối chi tiêu mua sắm và xác định điểm xét tuyển tối thiểu",
    "scenarioFrames": [],
    "youtubeVideoId": "D7Y4Y_g1QvE",
    "youtubeVideoTitle": "Bài Giảng Video: Bất Phương Trình Bậc Nhất Một Ẩn - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "D7Y4Y_g1QvE",
        "title": "Tiết 1: Định nghĩa bất phương trình bậc nhất một ẩn và hai quy tắc biến đổi"
      },
      {
        "id": "p7Q6K8M9z1w",
        "title": "Tiết 2: Cách giải bất phương trình bậc nhất một ẩn và bài toán thực tế"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.6.1",
        "title": "Ví dụ 1: Nhận biết bất phương trình bậc nhất một ẩn",
        "question": "Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất một ẩn?",
        "options": [
          "$2x - 8 > 0$",
          "$0x + 8 \\ge 0$",
          "$x^2 - 4 < 0$",
          "$\\frac{1}{x} + 2 \\le 0$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình bậc nhất một ẩn có dạng $ax + b > 0$ (hoặc $< 0, \\ge 0, \\le 0$) với $a \\ne 0$. Do đó $2x - 8 > 0$ là bất phương trình bậc nhất một ẩn (hệ số $a = 2 \\ne 0$ và $b = -8$)."
      },
      {
        "id": "vq-9.6.2",
        "title": "Ví dụ 2: Kiểm tra nghiệm của bất phương trình",
        "question": "Trong hai giá trị $x = 1$ và $x = 2$, giá trị nào là nghiệm của bất phương trình $3x - 4 \\le 0$?",
        "options": [
          "$x = 1$",
          "$x = 2$",
          "Cả $x = 1$ và $x = 2$",
          "Không có giá trị nào"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1$ vào vế trái: $3(1) - 4 = -1 \\le 0$ (thỏa mãn). Thay $x = 2$: $3(2) - 4 = 2 > 0$ (không thỏa mãn). Vậy $x = 1$ là nghiệm của bất phương trình."
      },
      {
        "id": "vq-9.6.3",
        "title": "Ví dụ 3: Quy tắc nhân với số âm và đổi chiều bất phương trình",
        "question": "Nghiệm của bất phương trình $-3x + 6 < 0$ là:",
        "options": [
          "$x > 2$",
          "$x < 2$",
          "$x > -2$",
          "$x < -2$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển hạng tử $+6$ sang vế phải: $-3x < -6$. Chia cả hai vế cho số âm $-3$ và đổi chiều bất phương trình: $x > \\frac{-6}{-3} \\Leftrightarrow x > 2$."
      },
      {
        "id": "vq-9.6.4",
        "title": "Ví dụ 4: Lập bất phương trình từ bài toán mua sắm thực tế",
        "question": "Bạn Thanh có $100$ nghìn đồng, mua một cây bút giá $18$ nghìn đồng và $x$ quyển vở giá $7$ nghìn đồng mỗi quyển. Bất phương trình biểu thị số tiền mua đồ không vượt quá số tiền bạn Thanh có là:",
        "options": [
          "$18 + 7x \\le 100$",
          "$18 + 7x < 100$",
          "$18 + 7x \\ge 100$",
          "$7x - 18 \\le 100$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số tiền mua một cây bút và $x$ quyển vở là $18 + 7x$ (nghìn đồng). Vì số tiền không vượt quá $100$ nghìn đồng nên ta có bất phương trình $18 + 7x \\le 100$."
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm bất phương trình bậc nhất một ẩn và nghiệm",
        "points": [
          "Bất phương trình bậc nhất một ẩn là bất phương trình có dạng:",
          "  $ax + b > 0$  (hoặc $ax + b < 0$; $ax + b \\ge 0$; $ax + b \\le 0$)",
          "  trong đó $a$ và $b$ là hai số đã cho và $a \\ne 0$.",
          "Nghiệm của bất phương trình:",
          "  Số $x_0$ được gọi là một nghiệm của bất phương trình nếu thay $x = x_0$ vào bất phương trình ta được một khẳng định đúng.",
          "  Giải bất phương trình là tìm tất cả các nghiệm của bất phương trình đó (tìm tập nghiệm)."
        ],
        "exampleTitle": "Ví dụ 1 (Tài liệu chuyên đề Toán 9 HK1 Trang 57 & SGK Trang 31)",
        "exampleProblem": "a) Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất một ẩn: $2x - 8 > 0$; $9 - 3x \\le 0$; $0x + 8 \\ge 0$; $\\frac{2}{5}x + 4 > 0$?\nb) Kiểm tra xem $x = -1$ có là nghiệm của bất phương trình $2x - 8 > 0$ và $9 - 3x \\le 0$ không.",
        "exampleSolution": "• Câu a: Các bất phương trình $2x - 8 > 0$ ($a = 2, b = -8$), $9 - 3x \\le 0$ ($a = -3, b = 9$) và $\\frac{2}{5}x + 4 > 0$ ($a = \\frac{2}{5}, b = 4$) là các bất phương trình bậc nhất một ẩn. Bất phương trình $0x + 8 \\ge 0$ không phải vì có hệ số $a = 0$.\n• Câu b: Thay $x = -1$ vào $2x - 8 > 0$ ta được $2(-1) - 8 = -10 > 0$ (sai), vậy $x = -1$ không phải là nghiệm. Thay $x = -1$ vào $9 - 3x \\le 0$ ta được $9 - 3(-1) = 12 \\le 0$ (sai), vậy $x = -1$ cũng không là nghiệm của bất phương trình này."
      },
      {
        "index": "2",
        "title": "Hai quy tắc biến đổi tương đương và cách giải tổng quát",
        "points": [
          "Quy tắc chuyển vế:",
          "  Khi chuyển một hạng tử của bất phương trình từ vế này sang vế kia thì ta phải đổi dấu hạng tử đó.",
          "  Ví dụ: $ax + b > c \\Leftrightarrow ax > c - b$.",
          "Quy tắc nhân với một số khác 0:",
          "  • Khi nhân (hoặc chia) hai vế của bất phương trình với cùng một số DƯƠNG, ta GIỮ NGUYÊN chiều bất phương trình.",
          "  • Khi nhân (hoặc chia) hai vế của bất phương trình với cùng một số ÂM, ta phải ĐỔI CHIỀU bất phương trình.",
          "Cách viết kết luận nghiệm của bất phương trình:",
          "  • Sau khi giải xong, ta kết luận nghiệm dưới dạng: Vậy nghiệm của bất phương trình là $x > a$ (hoặc $x \\ge a, x < a, x \\le a$).",
          "  • Tập hợp tất cả các nghiệm của bất phương trình được gọi là tập nghiệm của bất phương trình đó (thường kí hiệu là $S$)."
        ],
        "exampleTitle": "Ví dụ 2 (Tài liệu chuyên đề Toán 9 HK1 Trang 58 & SGK Trang 33)",
        "exampleProblem": "Giải bất phương trình $2x - 5 \\le 4x + 3$.",
        "exampleSolution": "• Bước 1 (Chuyển vế): Chuyển các hạng tử chứa $x$ sang vế trái, các hằng số sang vế phải:\n  $2x - 4x \\le 3 + 5 \\Leftrightarrow -2x \\le 8$.\n• Bước 2 (Chia hai vế cho số âm): Chia cả hai vế cho $-2 < 0$ và đổi chiều bất phương trình:\n  $x \\ge \\frac{8}{-2} \\Leftrightarrow x \\ge -4$.\n• Bước 3 (Kết luận): Vậy nghiệm của bất phương trình đã cho là $x \\ge -4$."
      },
      {
        "index": "3",
        "title": "Lập và giải bất phương trình bậc nhất một ẩn trong bài toán thực tế",
        "points": [
          "Quy trình 3 bước giải bài toán bằng cách lập bất phương trình:",
          "  • Bước 1 (Lập bất phương trình): Chọn ẩn số và đặt điều kiện thích hợp cho ẩn; biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết; lập bất phương trình theo mối quan hệ đề bài cho.",
          "  • Bước 2 (Giải bất phương trình): Áp dụng các quy tắc chuyển vế và nhân/chia để tìm nghiệm của bất phương trình.",
          "  • Bước 3 (Đối chiếu và kết luận): Đối chiếu nghiệm của bất phương trình với điều kiện của ẩn và bối cảnh thực tế để trả lời.",
          "Ý nghĩa các cụm từ thực tế thường gặp:",
          "  • 'Không vượt quá', 'tối đa', 'nhiều nhất': sử dụng dấu $\\le$.",
          "  • 'Ít nhất', 'tối thiểu', 'không dưới', 'không nhỏ hơn': sử dụng dấu $\\ge$.",
          "  • 'Vượt quá', 'lớn hơn': sử dụng dấu $>$; 'nhỏ hơn', 'chưa tới': sử dụng dấu $<$."
        ],
        "exampleTitle": "Ví dụ 3 (Tài liệu chuyên đề Toán 9 HK1 Bài 5 Trang 57 & SGK Trang 34)",
        "exampleProblem": "Trong kì thi gồm ba môn Toán, Ngữ văn và Tiếng Anh, điểm Toán và Ngữ văn tính hệ số 2, Tiếng Anh tính hệ số 1. Để trúng tuyển, điểm trung bình của ba môn ít nhất phải bằng 8,0. Bạn Na đạt 9,1 điểm Toán và 6,9 điểm Ngữ văn. Hãy lập và giải bất phương trình để tìm điểm số Tiếng Anh tối thiểu bạn Na cần đạt.",
        "exampleSolution": "• Gọi điểm số môn Tiếng Anh bạn Na cần đạt là $x$ ($0 \\le x \\le 10$).\n• Tổng số hệ số ba môn là: $2 + 2 + 1 = 5$.\n• Điểm trung bình ba môn của bạn Na là: $\\frac{2 \\cdot 9,1 + 2 \\cdot 6,9 + x}{5} = \\frac{18,2 + 13,8 + x}{5} = \\frac{32 + x}{5}$.\n• Do điểm trung bình ít nhất phải bằng 8,0 nên ta có bất phương trình:\n  $\\frac{32 + x}{5} \\ge 8 \\Leftrightarrow 32 + x \\ge 40 \\Leftrightarrow x \\ge 8$.\n• Kết hợp với điều kiện $0 \\le x \\le 10$, ta được $8 \\le x \\le 10$.\n• Kết luận: Bạn Na phải đạt tối thiểu $8,0$ điểm môn Tiếng Anh để trúng tuyển."
      }
    ],
    "tips": [
      "QUY TẮC NHÂN/CHIA VỚI SỐ ÂM: Luôn nhớ đổi chiều bất đẳng thức (dấu > đổi thành <, dấu ≥ đổi thành ≤). Đây là lỗi học sinh hay mắc nhất!",
      "TỪ KHÓA THỰC TẾ: Cụm từ 'nhiều nhất', 'tối đa', 'không quá' tương ứng với dấu ≤. Cụm từ 'ít nhất', 'tối thiểu', 'không dưới' tương ứng với dấu ≥.",
      "CÁCH KẾT LUẬN NGHIỆM: Sau khi tìm được nghiệm, luôn viết câu kết luận rõ ràng: 'Vậy nghiệm của bất phương trình đã cho là x > a' (hoặc x ≥ a, x < a, x ≤ a) hoặc viết dưới dạng tập nghiệm S.",
      "ĐỐI CHIẾU ĐIỀU KIỆN THỰC TẾ: Các đại lượng như số người, số xe, số quyển vở phải là số nguyên dương (thuộc N*); nếu ra x ≥ 7,2 mà x là số tự nhiên thì phải chọn x nhỏ nhất bằng 8."
    ],
    "traps": [
      "BẪY HỆ SỐ a = 0: Bất phương trình 0x + 5 > 0 hoặc 0x - 2 ≤ 0 không phải là bất phương trình bậc nhất một ẩn vì hệ số a = 0.",
      "BẪY QUÊN ĐỔI CHIỀU: Ví dụ từ -2x < 6 suy ra x < -3 là SAI HOÀN TOÀN. Đúng phải là chia cho -2 và đổi chiều: x > -3.",
      "BẪY ĐỔI DẤU KHI CHUYỂN VẾ: Khi chuyển hạng tử từ vế này sang vế kia phải đổi dấu hạng tử đó. Ví dụ: x - 5 > 2 ⇔ x > 2 + 5 (chuyển -5 thành +5).",
      "BẪY LÀM TRÒN SỐ TRONG BÀI TOÁN THỰC TẾ: Ví dụ số xe chở hàng cần ít nhất thỏa mãn x ≥ 4,2 xe thì phải chọn tối thiểu 5 xe (làm tròn lên để chở hết hàng, không được làm tròn xuống 4 xe)."
    ],
    "quizQuestions": [
      {
        "id": "quiz-9.6.1",
        "badge": "Câu 1 - Nhận biết bất phương trình bậc nhất một ẩn",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1 (Trang 57)",
        "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
        "options": [
          "$2x - 8 > 0$",
          "$0x + 8 \\ge 0$",
          "$x^2 - 4 < 0$",
          "$\\frac{1}{x} + 2 \\le 0$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình bậc nhất một ẩn có dạng $ax + b > 0$ (hoặc $< 0, \\ge 0, \\le 0$) với $a \\ne 0$. Do đó $2x - 8 > 0$ là bất phương trình bậc nhất một ẩn (hệ số $a = 2 \\ne 0$ và $b = -8$)."
      },
      {
        "id": "quiz-9.6.2",
        "badge": "Câu 2 - Nhận biết hệ số a và b",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.5 (Trang 32)",
        "question": "Trong bất phương trình bậc nhất một ẩn $-3x + 6 < 0$, hệ số $a$ và $b$ lần lượt là:",
        "options": [
          "$a = -3;\\ b = 6$",
          "$a = 3;\\ b = 6$",
          "$a = -3;\\ b = -6$",
          "$a = 6;\\ b = -3$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình có dạng $ax + b < 0$ với $a$ là hệ số đứng trước biến $x$ và $b$ là hạng tử tự do. Vậy $a = -3$ và $b = 6$."
      },
      {
        "id": "quiz-9.6.3",
        "badge": "Câu 3 - Nhận biết nghiệm của bất phương trình",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 2 (Trang 57)",
        "question": "Trong các giá trị sau, giá trị nào là một nghiệm của bất phương trình $3x - 4 \\le 0$?",
        "options": [
          "$x = 1$",
          "$x = 2$",
          "$x = 3$",
          "$x = 4$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 1$ vào bất phương trình: $3(1) - 4 = -1 \\le 0$ (khẳng định đúng). Do đó $x = 1$ là một nghiệm."
      },
      {
        "id": "quiz-9.6.4",
        "badge": "Câu 4 - Quy tắc chuyển vế",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 2 (Trang 64)",
        "question": "Cho bất phương trình $-4x + 12 > 0$. Áp dụng quy tắc chuyển vế, ta được bất phương trình nào sau đây?",
        "options": [
          "$-4x > -12$",
          "$-4x > 12$",
          "$4x > -12$",
          "$-4x < -12$"
        ],
        "correctIndex": 0,
        "explanation": "Khi chuyển hạng tử $+12$ từ vế trái sang vế phải, ta phải đổi dấu thành $-12$: $-4x > -12$."
      },
      {
        "id": "quiz-9.6.5",
        "badge": "Câu 5 - Quy tắc nhân với số dương",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 3 (Trang 64)",
        "question": "Cho bất phương trình $0,4x > -1,2$. Khi chia cả hai vế cho $0,4$, ta được bất phương trình nào?",
        "options": [
          "$x > -3$",
          "$x < -3$",
          "$x > 3$",
          "$x < 3$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $0,4 > 0$ nên khi chia cả hai vế cho $0,4$, bất phương trình giữ nguyên chiều: $x > \\frac{-1,2}{0,4} \\Leftrightarrow x > -3$."
      },
      {
        "id": "quiz-9.6.6",
        "badge": "Câu 6 - Quy tắc nhân với số âm",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 17 (Trang 65)",
        "question": "Nếu $a \\le b$ và $c < 0$ thì khẳng định nào sau đây là đúng?",
        "options": [
          "$ac \\ge bc$",
          "$ac \\le bc$",
          "$ac > bc$",
          "$ac < bc$"
        ],
        "correctIndex": 0,
        "explanation": "Khi nhân cả hai vế của một bất đẳng thức với cùng một số âm, ta phải đổi chiều bất đẳng thức: $a \\le b$ và $c < 0 \\Rightarrow ac \\ge bc$."
      },
      {
        "id": "quiz-9.6.7",
        "badge": "Câu 7 - Nhận diện bất phương trình không phải bậc nhất một ẩn",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1c (Trang 57)",
        "question": "Bất phương trình nào sau đây KHÔNG PHẢI là bất phương trình bậc nhất một ẩn?",
        "options": [
          "$0x + 7 \\ge 0$",
          "$-2x + 5 > 0$",
          "$\\frac{1}{3}x - 2 < 0$",
          "$4x - 1 \\le 0$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình $0x + 7 \\ge 0$ có hệ số $a = 0$ nên không phải là bất phương trình bậc nhất một ẩn theo định nghĩa ($a \\ne 0$)."
      },
      {
        "id": "quiz-9.6.8",
        "badge": "Câu 8 - Nhận biết điều kiện tham số của bất phương trình bậc nhất một ẩn",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1 (Trang 57) & SGK Trang 32",
        "question": "Với giá trị nào của $m$ thì bất phương trình $(m - 3)x + 5 > 0$ là bất phương trình bậc nhất một ẩn?",
        "options": [
          "$m \\ne 3$",
          "$m = 3$",
          "$m > 3$",
          "$m \\ne 0$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình có dạng $ax + b > 0$ là bất phương trình bậc nhất một ẩn khi và chỉ khi hệ số đứng trước biến $x$ khác 0: $a \\ne 0 \\Leftrightarrow m - 3 \\ne 0 \\Leftrightarrow m \\ne 3$."
      },
      {
        "id": "quiz-9.6.9",
        "badge": "Câu 9 - Giải bất phương trình bậc nhất đơn giản",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 3a (Trang 57)",
        "question": "Nghiệm của bất phương trình $2x - 5 > 0$ là:",
        "options": [
          "$x > 2,5$",
          "$x < 2,5$",
          "$x > -2,5$",
          "$x < -2,5$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $2x - 5 > 0 \\Leftrightarrow 2x > 5 \\Leftrightarrow x > \\frac{5}{2} = 2,5$."
      },
      {
        "id": "quiz-9.6.10",
        "badge": "Câu 10 - Giải bất phương trình có hệ số âm",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 3r (Trang 57)",
        "question": "Tập nghiệm của bất phương trình $-6x - 2 \\le 0$ là:",
        "options": [
          "$x \\ge -\\frac{1}{3}$",
          "$x \\le -\\frac{1}{3}$",
          "$x \\ge \\frac{1}{3}$",
          "$x \\le \\frac{1}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "$-6x - 2 \\le 0 \\Leftrightarrow -6x \\le 2 \\Leftrightarrow x \\ge \\frac{2}{-6} = -\\frac{1}{3}$ (chia cho $-6 < 0$ đổi chiều)."
      },
      {
        "id": "quiz-9.6.11",
        "badge": "Câu 11 - Giải bất phương trình hai vế chứa biến",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4t (Trang 58)",
        "question": "Nghiệm của bất phương trình $5x - 4 < 2x + 1$ là:",
        "options": [
          "$x < \\frac{5}{3}$",
          "$x > \\frac{5}{3}$",
          "$x < 1$",
          "$x > 1$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển vế: $5x - 2x < 1 + 4 \\Leftrightarrow 3x < 5 \\Leftrightarrow x < \\frac{5}{3}$."
      },
      {
        "id": "quiz-9.6.12",
        "badge": "Câu 12 - Giải bất phương trình chứa dấu ngoặc",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4aa (Trang 58)",
        "question": "Nghiệm của bất phương trình $2(x - 2) < x + 1$ là:",
        "options": [
          "$x < 5$",
          "$x > 5$",
          "$x < 3$",
          "$x < -5$"
        ],
        "correctIndex": 0,
        "explanation": "Khai triển: $2x - 4 < x + 1 \\Leftrightarrow 2x - x < 1 + 4 \\Leftrightarrow x < 5$."
      },
      {
        "id": "quiz-9.6.13",
        "badge": "Câu 13 - Tìm số nghiệm nguyên dương",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.9 (Trang 35)",
        "question": "Bất phương trình $3x - 7 < 2$ có bao nhiêu nghiệm nguyên dương?",
        "options": [
          "2 nghiệm",
          "3 nghiệm",
          "1 nghiệm",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $3x - 7 < 2 \\Leftrightarrow 3x < 9 \\Leftrightarrow x < 3$. Các số nguyên dương thỏa mãn $x < 3$ là $x \\in \\{1; 2\\}$. Vậy có đúng 2 nghiệm nguyên dương."
      },
      {
        "id": "quiz-9.6.14",
        "badge": "Câu 14 - Tìm nghiệm nguyên lớn nhất",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4 (Trang 58)",
        "question": "Nghiệm nguyên lớn nhất của bất phương trình $4x - 5 < 12$ là:",
        "options": [
          "$x = 4$",
          "$x = 5$",
          "$x = 3$",
          "$x = 4,25$"
        ],
        "correctIndex": 0,
        "explanation": "$4x - 5 < 12 \\Leftrightarrow 4x < 17 \\Leftrightarrow x < \\frac{17}{4} = 4,25$. Số nguyên lớn nhất nhỏ hơn $4,25$ là $x = 4$."
      },
      {
        "id": "quiz-9.6.15",
        "badge": "Câu 15 - Vận dụng: Cân đối ngân sách mua sắm",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 13 (Trang 59)",
        "question": "Bạn Thanh có $100$ nghìn đồng. Bạn muốn mua một cây bút giá $18$ nghìn đồng và một số quyển vở, mỗi quyển giá $7$ nghìn đồng. Hỏi bạn Thanh mua được nhiều nhất bao nhiêu quyển vở?",
        "options": [
          "11 quyển",
          "12 quyển",
          "10 quyển",
          "14 quyển"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số quyển vở Thanh mua là $x$ ($x \\in \\mathbb{N}^*$). Tổng số tiền mua bút và vở là $18 + 7x$ (nghìn đồng). Vì Thanh có $100$ nghìn đồng nên: $18 + 7x \\le 100 \\Leftrightarrow 7x \\le 82 \\Leftrightarrow x \\le \\frac{82}{7} \\approx 11,71$. Do $x$ là số tự nhiên nên Thanh mua được nhiều nhất 11 quyển vở."
      },
      {
        "id": "quiz-9.6.16",
        "badge": "Câu 16 - Vận dụng: Xác định điểm thi tuyển sinh tối thiểu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 5 (Trang 57)",
        "question": "Trong kì thi gồm ba môn Toán, Ngữ văn và Tiếng Anh, điểm Toán và Ngữ văn tính hệ số 2, Tiếng Anh tính hệ số 1. Để trúng tuyển, điểm trung bình ba môn ít nhất phải bằng 8,0. Bạn Na đạt 9,1 điểm Toán và 6,9 điểm Ngữ văn. Điểm số Tiếng Anh tối thiểu Na phải đạt để trúng tuyển là:",
        "options": [
          "8,0 điểm",
          "7,5 điểm",
          "8,5 điểm",
          "9,0 điểm"
        ],
        "correctIndex": 0,
        "explanation": "Gọi điểm Tiếng Anh Na cần đạt là $x$ ($0 \\le x \\le 10$). Tổng hệ số là $2 + 2 + 1 = 5$. Điểm trung bình ba môn: $\\frac{2(9,1) + 2(6,9) + x}{5} = \\frac{18,2 + 13,8 + x}{5} = \\frac{32 + x}{5}$. Để trúng tuyển thì $\\frac{32 + x}{5} \\ge 8 \\Leftrightarrow 32 + x \\ge 40 \\Leftrightarrow x \\ge 8$. Vậy Na cần đạt tối thiểu 8,0 điểm Tiếng Anh."
      },
      {
        "id": "quiz-9.6.17",
        "badge": "Câu 17 - Vận dụng: Cuộc thi đố vui tích lũy điểm",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 11 (Trang 59)",
        "question": "Trong cuộc thi 'Đố vui để học', thí sinh phải trả lời 12 câu hỏi. Mỗi câu trả lời đúng được cộng 5 điểm, trả lời sai bị trừ 2 điểm. Mỗi thí sinh có sẵn 20 điểm khi bắt đầu. Thí sinh đạt từ 50 điểm trở lên sẽ được vào vòng tiếp theo. Hỏi thí sinh phải trả lời đúng ít nhất bao nhiêu câu để vào vòng tiếp theo?",
        "options": [
          "8 câu",
          "7 câu",
          "9 câu",
          "6 câu"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số câu trả lời đúng là $x$ ($x \\in \\mathbb{N}, 0 \\le x \\le 12$). Khi đó số câu trả lời sai là $12 - x$. Tổng số điểm đạt được là: $20 + 5x - 2(12 - x) = 20 + 5x - 24 + 2x = 7x - 4$. Để đạt từ 50 điểm trở lên: $7x - 4 \\ge 50 \\Leftrightarrow 7x \\ge 54 \\Leftrightarrow x \\ge \\frac{54}{7} \\approx 7,71$. Vì $x$ là số nguyên nên thí sinh phải trả lời đúng ít nhất 8 câu."
      },
      {
        "id": "quiz-9.6.18",
        "badge": "Câu 18 - Vận dụng: Cước phí dịch vụ taxi",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 17 (Trang 59)",
        "question": "Một hãng taxi quy định giá mở cửa là 15 nghìn đồng và giá 12 nghìn đồng cho mỗi kilômét tiếp theo. Với 200 nghìn đồng, hành khách có thể di chuyển được tối đa bao nhiêu kilômét (làm tròn đến hàng đơn vị)?",
        "options": [
          "15 km",
          "16 km",
          "14 km",
          "17 km"
        ],
        "correctIndex": 0,
        "explanation": "Gọi quãng đường đi thêm là $x$ (km, $x > 0$). Tổng chi phí chuyến đi là $15 + 12x$ (nghìn đồng). Với số tiền 200 nghìn đồng: $15 + 12x \\le 200 \\Leftrightarrow 12x \\le 185 \\Leftrightarrow x \\le \\frac{185}{12} \\approx 15,42\\text{ km}$. Làm tròn đến hàng đơn vị là 15 km."
      },
      {
        "id": "quiz-9.6.19",
        "badge": "Câu 19 - Vận dụng: Trọng tải xe vận chuyển hàng hóa",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 18 (Trang 60)",
        "question": "Một xe tải chở bia có trọng tải tối đa là 5,25 tấn (5 250 kg). Bác lái xe nặng 65 kg. Mỗi thùng bia nặng 6,7 kg. Xe có thể chở được tối đa bao nhiêu thùng bia để không vượt quá trọng tải?",
        "options": [
          "773 thùng",
          "774 thùng",
          "783 thùng",
          "750 thùng"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số thùng bia xe chở là $n$ ($n \\in \\mathbb{N}^*$). Tổng khối lượng của xe gồm bác tài và hàng hóa: $65 + 6,7n$ (kg). Để không vượt quá trọng tải cho phép: $65 + 6,7n \\le 5250 \\Leftrightarrow 6,7n \\le 5185 \\Leftrightarrow n \\le \\frac{5185}{6,7} \\approx 773,88$. Vì $n$ nguyên nên xe chở được tối đa 773 thùng bia."
      },
      {
        "id": "quiz-9.6.20",
        "badge": "Câu 20 - Vận dụng: Lựa chọn phương án chi phí tối ưu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 40 (Trang 62)",
        "question": "Nhà trường dự định tổ chức cho học sinh đi xem phim. Rạp chiếu phim đưa ra hai phương án trả tiền: Phương án 1 tính 50 nghìn đồng/vé; Phương án 2 trả khoản phí ban đầu 400 nghìn đồng rồi tính mỗi vé 45 nghìn đồng. Với số lượng học sinh đăng kí từ bao nhiêu bạn trở lên thì nhà trường nên chọn Phương án 2 để tiết kiệm chi phí?",
        "options": [
          "Từ 81 học sinh trở lên",
          "Từ 80 học sinh trở lên",
          "Từ 75 học sinh trở lên",
          "Từ 90 học sinh trở lên"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số học sinh đăng kí xem phim là $x$ ($x \\in \\mathbb{N}^*$). Chi phí theo Phương án 1 là $50x$ (nghìn đồng), theo Phương án 2 là $400 + 45x$ (nghìn đồng). Phương án 2 có lợi hơn khi: $400 + 45x < 50x \\Leftrightarrow 50x - 45x > 400 \\Leftrightarrow 5x > 400 \\Leftrightarrow x > 80$. Vì $x$ là số tự nhiên nên từ 81 học sinh trở lên, Phương án 2 sẽ có lợi hơn."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-9.6.1",
        "badge": "Đúng/Sai 1 - Nhận biết định nghĩa và hệ số bất phương trình bậc nhất một ẩn",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1 (Trang 57)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về bất phương trình bậc nhất một ẩn:",
        "subItems": [
          {
            "id": "a",
            "text": "Bất phương trình $2x - 5 > 0$ là bất phương trình bậc nhất một ẩn với hệ số $a = 2, b = -5$.",
            "correctAnswer": true,
            "explanation": "BPT có dạng $ax + b > 0$ với $a = 2 \\ne 0$ và $b = -5$."
          },
          {
            "id": "b",
            "text": "Bất phương trình $0x + 7 \\ge 0$ là một bất phương trình bậc nhất một ẩn.",
            "correctAnswer": false,
            "explanation": "Theo định nghĩa, hệ số $a$ phải khác 0 ($a \\ne 0$). Ở đây $a = 0$ nên không phải."
          },
          {
            "id": "c",
            "text": "Bất phương trình $\\frac{3}{5}x + 4 < 0$ là bất phương trình bậc nhất một ẩn.",
            "correctAnswer": true,
            "explanation": "Dạng $ax + b < 0$ với $a = \\frac{3}{5} \\ne 0$ và $b = 4$."
          },
          {
            "id": "d",
            "text": "Bất phương trình $x^2 - 3x + 2 \\le 0$ là bất phương trình bậc nhất một ẩn.",
            "correctAnswer": false,
            "explanation": "Đây là bất phương trình bậc hai vì có chứa $x^2$."
          }
        ]
      },
      {
        "id": "tf-9.6.2",
        "badge": "Đúng/Sai 2 - Kiểm tra nghiệm của bất phương trình",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 2 (Trang 57)",
        "prompt": "Cho bất phương trình $3x - 5 \\le x + 1$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Giá trị $x = 0$ là một nghiệm của bất phương trình.",
            "correctAnswer": true,
            "explanation": "Thay $x = 0$: $3(0) - 5 = -5 \\le 0 + 1 = 1$ (đúng)."
          },
          {
            "id": "b",
            "text": "Giá trị $x = 3$ là một nghiệm của bất phương trình.",
            "correctAnswer": true,
            "explanation": "Thay $x = 3$: $3(3) - 5 = 4 \\le 3 + 1 = 4$ (đúng vì có dấu bằng)."
          },
          {
            "id": "c",
            "text": "Giá trị $x = 4$ là một nghiệm của bất phương trình.",
            "correctAnswer": false,
            "explanation": "Thay $x = 4$: $3(4) - 5 = 7 \\le 4 + 1 = 5$ (sai)."
          },
          {
            "id": "d",
            "text": "Mọi số thực $x < 3$ đều là nghiệm của bất phương trình.",
            "correctAnswer": true,
            "explanation": "Giải BPT: $3x - x \\le 1 + 5 \\Leftrightarrow 2x \\le 6 \\Leftrightarrow x \\le 3$. Do đó mọi $x < 3$ đều là nghiệm."
          }
        ]
      },
      {
        "id": "tf-9.6.3",
        "badge": "Đúng/Sai 3 - Quy tắc biến đổi bất phương trình",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 6 (Trang 64)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về hai quy tắc biến đổi bất phương trình:",
        "subItems": [
          {
            "id": "a",
            "text": "Khi chuyển một hạng tử từ vế này sang vế kia của một bất phương trình, ta phải đổi dấu hạng tử đó.",
            "correctAnswer": true,
            "explanation": "Đây là phát biểu chính xác của quy tắc chuyển vế."
          },
          {
            "id": "b",
            "text": "Khi nhân hai vế của một bất phương trình với một số âm, ta phải giữ nguyên chiều bất phương trình.",
            "correctAnswer": false,
            "explanation": "Khi nhân với số âm, ta BẮT BUỘC phải đổi chiều bất phương trình."
          },
          {
            "id": "c",
            "text": "Bất phương trình $-2x > 4$ tương đương với $x > -2$.",
            "correctAnswer": false,
            "explanation": "Chia cho số âm $-2$ thì phải đổi chiều: $x < \\frac{4}{-2} = -2$."
          },
          {
            "id": "d",
            "text": "Bất phương trình $3x < 9$ tương đương với $x < 3$.",
            "correctAnswer": true,
            "explanation": "Chia cả hai vế cho $3 > 0$ giữ nguyên chiều: $x < 3$."
          }
        ]
      },
      {
        "id": "tf-9.6.4",
        "badge": "Đúng/Sai 4 - Nhận biết nghiệm và tập nghiệm của bất phương trình",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.5 (Trang 32)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về nghiệm của bất phương trình:",
        "subItems": [
          {
            "id": "a",
            "text": "Mỗi giá trị của biến làm cho bất phương trình trở thành một khẳng định đúng được gọi là một nghiệm của bất phương trình đó.",
            "correctAnswer": true,
            "explanation": "Đúng theo định nghĩa nghiệm của bất phương trình."
          },
          {
            "id": "b",
            "text": "Bất phương trình $x > 5$ chỉ có duy nhất một nghiệm là $x = 6$.",
            "correctAnswer": false,
            "explanation": "Sai, bất phương trình $x > 5$ có vô số nghiệm là tất cả các số thực lớn hơn 5."
          },
          {
            "id": "c",
            "text": "Bất phương trình $x - 2 > 0$ có nghiệm là mọi số thực $x > 2$.",
            "correctAnswer": true,
            "explanation": "Chuyển vế $-2$ sang vế phải ta được $x > 2$."
          },
          {
            "id": "d",
            "text": "Số $0$ là một nghiệm của bất phương trình $-3x + 1 > 0$.",
            "correctAnswer": true,
            "explanation": "Thay $x = 0$ vào ta được $-3(0) + 1 = 1 > 0$ (khẳng định đúng)."
          }
        ]
      },
      {
        "id": "tf-9.6.5",
        "badge": "Đúng/Sai 5 - Giải bất phương trình chứa dấu ngoặc",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4bb (Trang 58)",
        "prompt": "Cho bất phương trình: $3(x + 2) > x - 4$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khai triển vế trái ta được: $3x + 6 > x - 4$.",
            "correctAnswer": true,
            "explanation": "$3(x + 2) = 3x + 6$."
          },
          {
            "id": "b",
            "text": "Chuyển vế và thu gọn ta được: $2x > -10$.",
            "correctAnswer": true,
            "explanation": "$3x - x > -4 - 6 \\Leftrightarrow 2x > -10$."
          },
          {
            "id": "c",
            "text": "Nghiệm của bất phương trình là $x < -5$.",
            "correctAnswer": false,
            "explanation": "Chia cho $2 > 0$ giữ nguyên chiều: $x > -5$ (không phải $x < -5$)."
          },
          {
            "id": "d",
            "text": "Số nguyên âm lớn nhất thỏa mãn bất phương trình là $x = -4$.",
            "correctAnswer": true,
            "explanation": "Các số nguyên lớn hơn $-5$ là $-4, -3, -2, \\dots$, số nguyên âm lớn nhất là $-4$."
          }
        ]
      },
      {
        "id": "tf-9.6.6",
        "badge": "Đúng/Sai 6 - Giải bất phương trình có mẫu số nguyên",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 6f (Trang 58)",
        "prompt": "Cho bất phương trình: $\\frac{2x - 3}{3} \\le \\frac{3x - 2}{4}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Mẫu chung dương của hai vế là $12$.",
            "correctAnswer": true,
            "explanation": "$\\text{BCNN}(3; 4) = 12$."
          },
          {
            "id": "b",
            "text": "Quy đồng và khử mẫu ta được: $4(2x - 3) \\le 3(3x - 2)$.",
            "correctAnswer": true,
            "explanation": "Nhân cả hai vế với $12 > 0$ giữ nguyên chiều: $4(2x - 3) \\le 3(3x - 2)$."
          },
          {
            "id": "c",
            "text": "Thu gọn ta được: $-x \\le 6$.",
            "correctAnswer": true,
            "explanation": "$8x - 12 \\le 9x - 6 \\Leftrightarrow 8x - 9x \\le -6 + 12 \\Leftrightarrow -x \\le 6$."
          },
          {
            "id": "d",
            "text": "Tập nghiệm của bất phương trình là $x \\le -6$.",
            "correctAnswer": false,
            "explanation": "$-x \\le 6 \\Leftrightarrow x \\ge -6$ (chia cho $-1 < 0$ phải đổi chiều)."
          }
        ]
      },
      {
        "id": "tf-9.6.7",
        "badge": "Đúng/Sai 7 - Tìm điều kiện để giá trị biểu thức thỏa mãn yêu cầu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 7 (Trang 58 - 59)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về điều kiện của biến $x$:",
        "subItems": [
          {
            "id": "a",
            "text": "Giá trị của biểu thức $-2x + 7$ là số dương khi và chỉ khi $x < 3,5$.",
            "correctAnswer": true,
            "explanation": "$-2x + 7 > 0 \\Leftrightarrow -2x > -7 \\Leftrightarrow x < 3,5$."
          },
          {
            "id": "b",
            "text": "Giá trị của biểu thức $x + 3$ nhỏ hơn giá trị của biểu thức $5 - 4x$ khi và chỉ khi $x < 0,4$.",
            "correctAnswer": true,
            "explanation": "$x + 3 < 5 - 4x \\Leftrightarrow 5x < 2 \\Leftrightarrow x < \\frac{2}{5} = 0,4$."
          },
          {
            "id": "c",
            "text": "Giá trị của biểu thức $3x + 1$ không nhỏ hơn giá trị của biểu thức $x - 3$ khi và chỉ khi $x \\ge -2$.",
            "correctAnswer": true,
            "explanation": "'Không nhỏ hơn' nghĩa là $\\ge$: $3x + 1 \\ge x - 3 \\Leftrightarrow 2x \\ge -4 \\Leftrightarrow x \\ge -2$."
          },
          {
            "id": "d",
            "text": "Giá trị của biểu thức $4x - 10$ không âm khi và chỉ khi $x \\le 2,5$.",
            "correctAnswer": false,
            "explanation": "'Không âm' nghĩa là $\\ge 0$: $4x - 10 \\ge 0 \\Leftrightarrow 4x \\ge 10 \\Leftrightarrow x \\ge 2,5$ (không phải $\\le$)."
          }
        ]
      },
      {
        "id": "tf-9.6.8",
        "badge": "Đúng/Sai 8 - Vận dụng: Ngân sách mua đồ dùng học tập",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 39 (Trang 62)",
        "prompt": "Bạn Nam có $150\\,000$ đồng. Nam đã mua một hộp bút vẽ hết $45\\,000$ đồng và mua một cuốn sách tham khảo hết $38\\,000$ đồng. Nam định dùng số tiền còn lại để mua thêm các quyển vở cùng loại với giá $8\\,500$ đồng/quyển. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Số tiền Nam còn lại sau khi mua bút vẽ và sách là $67\\,000$ đồng.",
            "correctAnswer": true,
            "explanation": "$150\\,000 - (45\\,000 + 38\\,000) = 150\\,000 - 83\\,000 = 67\\,000$ đồng."
          },
          {
            "id": "b",
            "text": "Gọi $x$ là số quyển vở Nam định mua ($x \\in \\mathbb{N}^*$), bất phương trình biểu thị số tiền mua là $83\\,000 + 8\\,500x \\le 150\\,000$.",
            "correctAnswer": true,
            "explanation": "Tổng số tiền mua hộp bút, sách và $x$ quyển vở không vượt quá 150 000 đồng."
          },
          {
            "id": "c",
            "text": "Giải bất phương trình ta được $x \\le 7,88$.",
            "correctAnswer": true,
            "explanation": "$8\\,500x \\le 67\\,000 \\Leftrightarrow x \\le \\frac{670}{85} \\approx 7,88$."
          },
          {
            "id": "d",
            "text": "Bạn Nam có thể mua được tối đa 8 quyển vở.",
            "correctAnswer": false,
            "explanation": "Vì $x \\in \\mathbb{N}^*$ và $x \\le 7,88$ nên Nam chỉ mua được tối đa 7 quyển vở (8 quyển thì hết $83\\,000 + 68\\,000 = 151\\,000$ đồng, vượt quá số tiền có)."
          }
        ]
      },
      {
        "id": "tf-9.6.9",
        "badge": "Đúng/Sai 9 - Vận dụng: Bài toán cuộc thi tuyển dụng nhân sự",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 15 (Trang 59)",
        "prompt": "Trong cuộc thi tuyển dụng, thí sinh phải trả lời 25 câu hỏi. Mỗi câu đúng được cộng 2 điểm, mỗi câu sai bị trừ 1 điểm. Ban tổ chức tặng sẵn mỗi thí sinh 5 điểm khi bắt đầu. Thí sinh phải đạt từ 25 điểm trở lên mới được vào vòng phỏng vấn. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Nếu thí sinh trả lời đúng $x$ câu ($0 \\le x \\le 25$) thì số câu trả lời sai là $25 - x$.",
            "correctAnswer": true,
            "explanation": "Thí sinh phải trả lời đủ 25 câu hỏi nên số câu sai là $25 - x$."
          },
          {
            "id": "b",
            "text": "Tổng điểm của thí sinh đạt được tính theo công thức: $5 + 2x - (25 - x) = 3x - 20$.",
            "correctAnswer": true,
            "explanation": "$5 + 2x - 25 + x = 3x - 20$ điểm."
          },
          {
            "id": "c",
            "text": "Bất phương trình để thí sinh vào vòng phỏng vấn là $3x - 20 \\ge 25$.",
            "correctAnswer": true,
            "explanation": "Cần từ 25 điểm trở lên nên $3x - 20 \\ge 25$."
          },
          {
            "id": "d",
            "text": "Thí sinh cần trả lời đúng ít nhất 14 câu hỏi để được vào vòng phỏng vấn.",
            "correctAnswer": false,
            "explanation": "$3x \\ge 45 \\Leftrightarrow x \\ge 15$. Vậy thí sinh cần trả lời đúng ít nhất 15 câu (14 câu chỉ được $3(14) - 20 = 22 < 25$ điểm)."
          }
        ]
      },
      {
        "id": "tf-9.6.10",
        "badge": "Đúng/Sai 10 - Vận dụng: Thuê xe du lịch cơ quan",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 44 (Trang 63)",
        "prompt": "Một nhà máy cần thuê xe chở công nhân đi du lịch. Hãng xe A tính phí ban đầu 2 triệu đồng và 8 nghìn đồng/km. Hãng xe B tính phí ban đầu 1,5 triệu đồng và 9 nghìn đồng/km. Gọi $x$ là quãng đường di chuyển (km). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Chi phí thuê xe của Hãng A là $2000 + 8x$ (nghìn đồng) và Hãng B là $1500 + 9x$ (nghìn đồng).",
            "correctAnswer": true,
            "explanation": "2 triệu = 2000 nghìn, 1,5 triệu = 1500 nghìn."
          },
          {
            "id": "b",
            "text": "Bất phương trình diễn đạt 'tiền thuê xe của Hãng A ít hơn Hãng B' là $2000 + 8x < 1500 + 9x$.",
            "correctAnswer": true,
            "explanation": "Chi phí hãng A nhỏ hơn chi phí hãng B."
          },
          {
            "id": "c",
            "text": "Giải bất phương trình trên ta được $x > 500$ km.",
            "correctAnswer": true,
            "explanation": "$2000 - 1500 < 9x - 8x \\Leftrightarrow 500 < x \\Leftrightarrow x > 500$."
          },
          {
            "id": "d",
            "text": "Nếu hành trình du lịch dài 320 km thì chọn Hãng xe A sẽ có chi phí rẻ hơn.",
            "correctAnswer": false,
            "explanation": "Vì $320 < 500$ nên Hãng B rẻ hơn (Hãng B: $1500 + 9(320) = 4380$k; Hãng A: $2000 + 8(320) = 4560$k, Hãng B tiết kiệm hơn 180 nghìn đồng)."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-9.6.1",
        "badge": "Trả lời ngắn 1 - Xác định hệ số a",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.5 (Trang 32)",
        "prompt": "Trong bất phương trình bậc nhất một ẩn $5 - 4x > 0$, hệ số $a$ bằng bao nhiêu?",
        "correctAnswer": "-4",
        "acceptableAnswers": [
          "-4",
          "- 4",
          "a = -4"
        ],
        "explanation": "Bất phương trình được viết lại thành $-4x + 5 > 0$, hệ số của $x$ là $a = -4$."
      },
      {
        "id": "sa-9.6.2",
        "badge": "Trả lời ngắn 2 - Điền dấu sau khi nhân số âm",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 6b (Trang 64)",
        "prompt": "Cho $-3x < 12$. Khi chia cả hai vế cho $-3$, giữa $x$ và $-4$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": ">",
        "acceptableAnswers": [
          ">",
          "dấu >",
          "lon hon"
        ],
        "explanation": "Vì chia cho số âm $-3$ nên bất phương trình phải đổi chiều: $x > -4$."
      },
      {
        "id": "sa-9.6.3",
        "badge": "Trả lời ngắn 3 - Chuyển vế đổi dấu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 3 (Trang 57)",
        "prompt": "Cho bất phương trình $x + 7 \\ge 2$. Khi chuyển hạng tử $7$ sang vế phải ta được $x \\ge c$. Giá trị của số $c$ là bao nhiêu?",
        "correctAnswer": "-5",
        "acceptableAnswers": [
          "-5",
          "- 5",
          "c = -5"
        ],
        "explanation": "Chuyển vế đổi dấu: $x \\ge 2 - 7 = -5$."
      },
      {
        "id": "sa-9.6.4",
        "badge": "Trả lời ngắn 4 - Kiểm tra nghiệm cụ thể",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 2 (Trang 57)",
        "prompt": "Số $x = 0$ có phải là nghiệm của bất phương trình $2x - 9 < 0$ hay không (điền 'có' hoặc 'không')?",
        "correctAnswer": "có",
        "acceptableAnswers": [
          "có",
          "co",
          "Có",
          "Co",
          "yes"
        ],
        "explanation": "Thay $x = 0$ ta được $2(0) - 9 = -9 < 0$ là khẳng định đúng, do đó $x = 0$ là nghiệm."
      },
      {
        "id": "sa-9.6.5",
        "badge": "Trả lời ngắn 5 - Tìm nghiệm nguyên lớn nhất",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4 (Trang 58)",
        "prompt": "Tìm số nguyên lớn nhất thỏa mãn bất phương trình $3x - 1 < 14$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4",
          "x = 4"
        ],
        "explanation": "Ta có $3x - 1 < 14 \\Leftrightarrow 3x < 15 \\Leftrightarrow x < 5$. Số nguyên lớn nhất nhỏ hơn $5$ là $4$."
      },
      {
        "id": "sa-9.6.6",
        "badge": "Trả lời ngắn 6 - Đếm số nghiệm nguyên dương",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.9 (Trang 35)",
        "prompt": "Bất phương trình $5 - 2x > -3$ có bao nhiêu nghiệm nguyên dương?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "3 nghiệm",
          "ba"
        ],
        "explanation": "$5 - 2x > -3 \\Leftrightarrow -2x > -8 \\Leftrightarrow x < 4$. Các nghiệm nguyên dương là $x \\in \\{1; 2; 3\\}$, tổng cộng có 3 nghiệm."
      },
      {
        "id": "sa-9.6.7",
        "badge": "Trả lời ngắn 7 - Nghiệm nguyên nhỏ nhất",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4 (Trang 58)",
        "prompt": "Tìm số nguyên $x$ nhỏ nhất thỏa mãn bất phương trình $4x + 1 \\ge 13$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "x = 3"
        ],
        "explanation": "$4x + 1 \\ge 13 \\Leftrightarrow 4x \\ge 12 \\Leftrightarrow x \\ge 3$. Số nguyên nhỏ nhất thỏa mãn là $x = 3$."
      },
      {
        "id": "sa-9.6.8",
        "badge": "Trả lời ngắn 8 - Vận dụng: Điểm thi tiếng Anh tối thiểu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 5 (Trang 57)",
        "prompt": "Điểm Toán và Văn hệ số 2, Tiếng Anh hệ số 1. Điểm trung bình cần đạt tối thiểu 8,0. Na đạt Toán 9,1 và Văn 6,9. Điểm Tiếng Anh tối thiểu Na cần đạt là bao nhiêu?",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "8.0",
          "8,0",
          "x = 8"
        ],
        "explanation": "$\\frac{2(9,1) + 2(6,9) + x}{5} \\ge 8 \\Leftrightarrow \\frac{32 + x}{5} \\ge 8 \\Leftrightarrow 32 + x \\ge 40 \\Leftrightarrow x \\ge 8$."
      },
      {
        "id": "sa-9.6.9",
        "badge": "Trả lời ngắn 9 - Vận dụng: Số vở mua được nhiều nhất",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 13 (Trang 59)",
        "prompt": "Thanh có 100 nghìn đồng, mua 1 bút giá 18 nghìn đồng và các quyển vở giá 7 nghìn đồng/quyển. Thanh mua được nhiều nhất bao nhiêu quyển vở?",
        "correctAnswer": "11",
        "acceptableAnswers": [
          "11",
          "11 quyển",
          "11 quyen"
        ],
        "explanation": "$18 + 7x \\le 100 \\Leftrightarrow 7x \\le 82 \\Leftrightarrow x \\le 11,71 \\Rightarrow x = 11$ quyển."
      },
      {
        "id": "sa-9.6.10",
        "badge": "Trả lời ngắn 10 - Vận dụng: Kích thước mảnh vườn rào lưới",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 33 (Trang 61)",
        "prompt": "Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng 3 m. Người ta dùng tấm lưới dài 70 m để rào vừa đủ xung quanh vườn. Chiều rộng tối đa của mảnh vườn là bao nhiêu mét?",
        "correctAnswer": "16",
        "acceptableAnswers": [
          "16",
          "16 m",
          "16m"
        ],
        "explanation": "Gọi chiều rộng là $a$ (m). Chiều dài là $a + 3$ (m). Chu vi là $2(a + a + 3) = 4a + 6$ (m). Để rào đủ với tấm lưới 70 m thì chu vi $4a + 6 \\le 70 \\Leftrightarrow 4a \\le 64 \\Leftrightarrow a \\le 16$ mét."
      }
    ]
  }
};
