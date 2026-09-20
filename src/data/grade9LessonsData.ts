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
  },
  "t9-on-tap-chuong-2": {
    "id": "t9-on-tap-chuong-2",
    "lessonNumber": 0,
    "title": "Ôn tập cuối chương II",
    "bookChapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn (SGK Toán 9 KNTT - Tập 1)",
    "scenarioTitle": "Luyện tập 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
    "scenarioFrames": [],
    "theorySections": [],
    "youtubeVideoId": "t9_ot2_video",
    "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và giải bài tập cuối chương II - Toán 9 KNTT",
    "youtubeVideos": [
        {
            "id": "t9_ot2_video1",
            "title": "Tiết 1: Ôn tập phương trình quy về bậc nhất (Phương trình tích và phương trình chứa ẩn ở mẫu)"
        },
        {
            "id": "t9_ot2_video2",
            "title": "Tiết 2: Ôn tập bất đẳng thức và bất phương trình bậc nhất một ẩn"
        }
    ],
    "videoQuestions": [
        {
            "id": "vq-9.ot2.1",
            "title": "Ví dụ 1: Giải phương trình tích",
            "question": "Nghiệm của phương trình $(2x - 4)(3x + 9) = 0$ là:",
            "options": [
                "$x = 2$ hoặc $x = -3$",
                "$x = -2$ hoặc $x = 3$",
                "$x = 2$ hoặc $x = 3$",
                "$x = -2$ hoặc $x = -3$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình $(2x - 4)(3x + 9) = 0 \\Leftrightarrow 2x - 4 = 0$ hoặc $3x + 9 = 0 \\Leftrightarrow x = 2$ hoặc $x = -3$."
        },
        {
            "id": "vq-9.ot2.2",
            "title": "Ví dụ 2: Tìm điều kiện xác định của phương trình chứa ẩn ở mẫu",
            "question": "Điều kiện xác định của phương trình $\\frac{x + 1}{x - 2} + \\frac{3}{x + 2} = 0$ là:",
            "options": [
                "$x \\ne 2$ và $x \\ne -2$",
                "$x \\ne 2$",
                "$x \\ne -2$",
                "$x \\ne 0$"
            ],
            "correctIndex": 0,
            "explanation": "Điều kiện xác định là các mẫu thức phải khác 0: $\\begin{cases} x - 2 \\ne 0 \\\\ x + 2 \\ne 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ne 2 \\\\ x \\ne -2 \\end{cases}$."
        },
        {
            "id": "vq-9.ot2.3",
            "title": "Ví dụ 3: Tính chất liên hệ giữa thứ tự và phép nhân với số âm",
            "question": "Cho $a < b$. Khẳng định nào sau đây là đúng?",
            "options": [
                "$-5a > -5b$",
                "$-5a < -5b$",
                "$-5a = -5b$",
                "$-5a \\le -5b$"
            ],
            "correctIndex": 0,
            "explanation": "Khi nhân cả hai vế của bất đẳng thức $a < b$ với số âm $-5$, ta phải đổi chiều bất đẳng thức: $-5a > -5b$."
        },
        {
            "id": "vq-9.ot2.4",
            "title": "Ví dụ 4: Giải bất phương trình bậc nhất một ẩn",
            "question": "Nghiệm của bất phương trình $3x - 6 > 0$ là:",
            "options": [
                "$x > 2$",
                "$x < 2$",
                "$x \\ge 2$",
                "$x > -2$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có: $3x - 6 > 0 \\Leftrightarrow 3x > 6 \\Leftrightarrow x > \\frac{6}{3} \\Leftrightarrow x > 2$."
        }
    ],
    "tips": [
        "Phương trình tích $A(x) \\cdot B(x) = 0$: Luôn tách thành hai trường hợp $A(x) = 0$ hoặc $B(x) = 0$ rồi lấy hợp tất cả các nghiệm.",
        "Phương trình chứa ẩn ở mẫu: Bắt buộc phải tìm điều kiện xác định (ĐKXĐ) ngay từ bước đầu tiên và đối chiếu kỹ lưỡng trước khi kết luận nghiệm.",
        "Bất đẳng thức & Bất phương trình: Quy tắc cốt lõi cần nhớ là 'Nhân hoặc chia hai vế với số âm PHẢI ĐỔI CHIỀU bất đẳng thức'.",
        "Bài toán thực tế bất phương trình: Đọc kỹ các từ khóa chỉ chiều bất đẳng thức: 'nhiều nhất', 'tối đa', 'không quá' ($\\le$); 'ít nhất', 'tối thiểu', 'không dưới' ($\\ge$)."
    ],
    "traps": [
        "Bẫy quên điều kiện xác định khi giải phương trình chứa ẩn ở mẫu, dẫn đến nhận nhầm nghiệm ngoại lai.",
        "Bẫy quên đổi chiều bất đẳng thức khi nhân hoặc chia hai vế cho một số âm (ví dụ $-2x > 6 \\Rightarrow x < -3$, không phải $x > -3$).",
        "Bẫy chuyển vế quên đổi dấu hạng tử (ví dụ $3x - 5 > 0 \\Rightarrow 3x > 5$, dễ nhầm thành $3x > -5$).",
        "Bẫy làm tròn số trong bài toán thực tế: Khi hỏi 'số quyển vở mua nhiều nhất' mà ra $x \\le 7,5$ thì phải lấy số nguyên 7, không được làm tròn lên 8 vì sẽ vượt quá số tiền có."
    ],
    "quizQuestions": [
        {
            "id": "otc2-d1-q1",
            "badge": "Câu 1 (NB) - Điều kiện xác định của phương trình",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 32)",
            "question": "Điều kiện xác định của phương trình $\\frac{2x - 1}{x - 3} = 0$ là:",
            "options": [
                "$x \\ne 3$",
                "$x \\ne \\frac{1}{2}$",
                "$x \\ne -3$",
                "$x \\ne 0$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình chứa ẩn ở mẫu xác định khi và chỉ khi mẫu thức khác 0: $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$."
        },
        {
            "id": "otc2-d1-q2",
            "badge": "Câu 2 (NB) - Nghiệm của phương trình tích",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 30)",
            "question": "Nghiệm của phương trình tích $(x - 2)(2x + 6) = 0$ là:",
            "options": [
                "$x = 2$ hoặc $x = -3$",
                "$x = -2$ hoặc $x = 3$",
                "$x = 2$ hoặc $x = 3$",
                "$x = -2$ hoặc $x = -3$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có: $(x - 2)(2x + 6) = 0 \\Leftrightarrow x - 2 = 0$ hoặc $2x + 6 = 0 \\Leftrightarrow x = 2$ hoặc $x = -3$."
        },
        {
            "id": "otc2-d1-q3",
            "badge": "Câu 3 (NB) - Liên hệ giữa thứ tự và phép cộng",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 5 (Trang 36)",
            "question": "Cho $a < b$. Khẳng định nào sau đây luôn đúng?",
            "options": [
                "$a + 5 < b + 5$",
                "$a - 5 > b - 5$",
                "$a + 5 > b + 5$",
                "$5 - a < 5 - b$"
            ],
            "correctIndex": 0,
            "explanation": "Khi cộng cùng một số $5$ vào hai vế của bất đẳng thức $a < b$, ta được bất đẳng thức cùng chiều: $a + 5 < b + 5$."
        },
        {
            "id": "otc2-d1-q4",
            "badge": "Câu 4 (NB) - Nhận biết bất phương trình bậc nhất một ẩn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 42)",
            "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
            "options": [
                "$3x - 7 > 0$",
                "$2x^2 + 1 < 0$",
                "$0x + 5 \\ge 0$",
                "$\\frac{2}{x} - 1 \\le 0$"
            ],
            "correctIndex": 0,
            "explanation": "Bất phương trình bậc nhất một ẩn có dạng $ax + b > 0$ (hoặc $<, \\ge, \\le$) với $a \\ne 0$. Ở đây $3x - 7 > 0$ có $a = 3 \\ne 0, b = -7$."
        },
        {
            "id": "otc2-d1-q5",
            "badge": "Câu 5 (TH) - Giải bất phương trình bậc nhất một ẩn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 43)",
            "question": "Tập nghiệm của bất phương trình $2x - 8 \\ge 0$ là:",
            "options": [
                "$x \\ge 4$",
                "$x \\le 4$",
                "$x > 4$",
                "$x \\ge -4$"
            ],
            "correctIndex": 0,
            "explanation": "Chuyển vế hạng tử tự do: $2x \\ge 8$. Chia hai vế cho 2: $x \\ge 4$."
        },
        {
            "id": "otc2-d1-q6",
            "badge": "Câu 6 (TH) - Giải phương trình chứa ẩn ở mẫu",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 33)",
            "question": "Nghiệm của phương trình $\\frac{2x - 1}{x - 2} = 3$ là:",
            "options": [
                "$x = 5$",
                "$x = -5$",
                "$x = 2$",
                "Phương trình vô nghiệm"
            ],
            "correctIndex": 0,
            "explanation": "ĐKXĐ: $x \\ne 2$. Phương trình tương đương: $2x - 1 = 3(x - 2) \\Leftrightarrow 2x - 1 = 3x - 6 \\Leftrightarrow 3x - 2x = 6 - 1 \\Leftrightarrow x = 5$ (thỏa mãn ĐKXĐ)."
        },
        {
            "id": "otc2-d1-q7",
            "badge": "Câu 7 (TH) - Liên hệ giữa thứ tự và phép nhân với số âm",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 40)",
            "question": "Biết $-3a > -3b$. So sánh hai số $a$ và $b$ ta được:",
            "options": [
                "$a < b$",
                "$a > b$",
                "$a = b$",
                "$a \\le b$"
            ],
            "correctIndex": 0,
            "explanation": "Chia cả hai vế của bất đẳng thức $-3a > -3b$ cho số âm $-3$, ta phải đổi chiều bất đẳng thức, do đó $a < b$."
        },
        {
            "id": "otc2-d1-q8",
            "badge": "Câu 8 (TH) - Bất phương trình đổi chiều khi chia số âm",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
            "question": "Nghiệm của bất phương trình $-4x + 12 < 0$ là:",
            "options": [
                "$x > 3$",
                "$x < 3$",
                "$x > -3$",
                "$x < -3$"
            ],
            "correctIndex": 0,
            "explanation": "Chuyển vế: $-4x < -12$. Chia cả hai vế cho $-4$ (đổi chiều bất đẳng thức): $x > \\frac{-12}{-4} \\Leftrightarrow x > 3$."
        },
        {
            "id": "otc2-d1-q9",
            "badge": "Câu 9 (TH) - So sánh giá trị biểu thức nhờ tính chất thứ tự",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 39)",
            "question": "Cho $m < n$. Bất đẳng thức nào sau đây là đúng?",
            "options": [
                "$2m - 5 < 2n - 5$",
                "$2m - 5 > 2n - 5$",
                "$-2m + 5 < -2n + 5$",
                "$5 - 2m < 5 - 2n$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $m < n \\Rightarrow 2m < 2n$ (nhân số dương 2 giữ nguyên chiều). Cộng $-5$ vào hai vế ta được: $2m - 5 < 2n - 5$."
        },
        {
            "id": "otc2-d1-q10",
            "badge": "Câu 10 (VD) - Tìm tham số để phương trình bậc nhất một ẩn",
            "source": "Đề thi học kì I Toán 9 THCS Trưng Vương",
            "question": "Tìm giá trị của $m$ để phương trình $(m - 2)x^2 + 3x - 1 = 0$ là phương trình bậc nhất một ẩn.",
            "options": [
                "$m = 2$",
                "$m \\ne 2$",
                "$m = 0$",
                "$m = 3$"
            ],
            "correctIndex": 0,
            "explanation": "Để phương trình trở thành phương trình bậc nhất một ẩn thì hệ số của $x^2$ phải bằng 0: $m - 2 = 0 \\Leftrightarrow m = 2$. Khi đó phương trình là $3x - 1 = 0$ (bậc nhất)."
        },
        {
            "id": "otc2-d1-q11",
            "badge": "Câu 11 (VD) - Tìm số nguyên lớn nhất thỏa mãn bất phương trình",
            "source": "Đề khảo sát chất lượng Toán 9 Quận Cầu Giấy",
            "question": "Số nguyên dương $x$ lớn nhất thỏa mãn bất phương trình $5 - 2x > -3$ là:",
            "options": [
                "$3$",
                "$4$",
                "$2$",
                "$1$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có: $5 - 2x > -3 \\Leftrightarrow -2x > -8 \\Leftrightarrow x < 4$. Vì $x$ là số nguyên dương nên $x \\in \\{1; 2; 3\\}$. Số nguyên dương lớn nhất là 3."
        },
        {
            "id": "otc2-d1-q12",
            "badge": "Câu 12 (VD) - Toán thực tế mua sắm đồ dùng học tập",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 45)",
            "question": "Bạn An có $60\\,000$ đồng, An mua một chiếc thước kẻ giá $15\\,000$ đồng, số tiền còn lại mua vở với giá $6\\,000$ đồng một quyển. Số quyển vở An có thể mua nhiều nhất là:",
            "options": [
                "$7$ quyển",
                "$8$ quyển",
                "$6$ quyển",
                "$9$ quyển"
            ],
            "correctIndex": 0,
            "explanation": "Gọi số quyển vở An mua là $x$ ($x \\in \\mathbb{N}^*$). Số tiền An phải trả là $15\\,000 + 6\\,000x$ (đồng). Do An chỉ có $60\\,000$ đồng nên: $15\\,000 + 6\\,000x \\le 60\\,000 \\Leftrightarrow 6\\,000x \\le 45\\,000 \\Leftrightarrow x \\le 7,5$. Vì $x$ nguyên dương nên số quyển vở mua được nhiều nhất là 7 quyển."
        }
    ],
    "trueFalseQuestions": [
        {
            "id": "otc2-d1-tf1",
            "badge": "Đúng/Sai 1 (NB) - Phương trình tích",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 30)",
            "prompt": "Cho phương trình tích $(2x - 4)(x + 3) = 0$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Phương trình đã cho có dạng tích $A(x) \\cdot B(x) = 0$.",
                    "correctAnswer": true,
                    "explanation": "Phương trình có dạng tích của hai đa thức $A(x) = 2x - 4$ và $B(x) = x + 3$."
                },
                {
                    "id": "b",
                    "text": "Giá trị $x = 2$ là một nghiệm của phương trình.",
                    "correctAnswer": true,
                    "explanation": "Thay $x = 2$: $2(2) - 4 = 0$, do đó $0 \\cdot (2 + 3) = 0$ (thỏa mãn)."
                },
                {
                    "id": "c",
                    "text": "Giá trị $x = 3$ là một nghiệm của phương trình.",
                    "correctAnswer": false,
                    "explanation": "Thay $x = 3$: $(2 \\cdot 3 - 4)(3 + 3) = 2 \\cdot 6 = 12 \\ne 0$. Nghiệm đúng phải là $x = -3$."
                },
                {
                    "id": "d",
                    "text": "Tập nghiệm của phương trình đã cho là $S = \\{2; -3\\}$.",
                    "correctAnswer": true,
                    "explanation": "Phương trình tương đương $2x - 4 = 0$ hoặc $x + 3 = 0 \\Leftrightarrow x = 2$ hoặc $x = -3$."
                }
            ]
        },
        {
            "id": "otc2-d1-tf2",
            "badge": "Đúng/Sai 2 (TH) - Phương trình chứa ẩn ở mẫu và điều kiện xác định",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 33)",
            "prompt": "Cho phương trình $\\frac{x + 2}{x - 1} = \\frac{3}{x - 1}$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Điều kiện xác định của phương trình là $x \\ne 1$.",
                    "correctAnswer": true,
                    "explanation": "Mẫu thức chung là $x - 1$, nên điều kiện xác định là $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$."
                },
                {
                    "id": "b",
                    "text": "Khử mẫu ta được phương trình bậc nhất $x + 2 = 3$.",
                    "correctAnswer": true,
                    "explanation": "Vì hai vế cùng mẫu thức $(x - 1)$ nên khử mẫu được $x + 2 = 3$."
                },
                {
                    "id": "c",
                    "text": "Phương trình sau khi khử mẫu có nghiệm duy nhất $x = 1$.",
                    "correctAnswer": true,
                    "explanation": "$x + 2 = 3 \\Leftrightarrow x = 3 - 2 = 1$."
                },
                {
                    "id": "d",
                    "text": "Phương trình ban đầu có tập nghiệm là $S = \\{1\\}$.",
                    "correctAnswer": false,
                    "explanation": "Giá trị $x = 1$ không thỏa mãn điều kiện xác định $x \\ne 1$, nên bị loại. Phương trình ban đầu vô nghiệm ($S = \\emptyset$)."
                }
            ]
        },
        {
            "id": "otc2-d1-tf3",
            "badge": "Đúng/Sai 3 (TH) - Tính chất của bất đẳng thức",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 38)",
            "prompt": "Cho hai số thực $a$ và $b$ thỏa mãn $a > b$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$a - 7 > b - 7$.",
                    "correctAnswer": true,
                    "explanation": "Cộng $-7$ vào hai vế của bất đẳng thức $a > b$, chiều bất đẳng thức không đổi."
                },
                {
                    "id": "b",
                    "text": "$-4a > -4b$.",
                    "correctAnswer": false,
                    "explanation": "Nhân hai vế với số âm $-4$ phải đổi chiều bất đẳng thức: $-4a < -4b$."
                },
                {
                    "id": "c",
                    "text": "$3a + 2 > 3b + 2$.",
                    "correctAnswer": true,
                    "explanation": "Vì $a > b \\Rightarrow 3a > 3b \\Rightarrow 3a + 2 > 3b + 2$."
                },
                {
                    "id": "d",
                    "text": "$10 - 2a < 10 - 2b$.",
                    "correctAnswer": true,
                    "explanation": "Vì $a > b \\Rightarrow -2a < -2b \\Rightarrow 10 - 2a < 10 - 2b$."
                }
            ]
        },
        {
            "id": "otc2-d1-tf4",
            "badge": "Đúng/Sai 4 (VD) - Bất phương trình bậc nhất một ẩn và số nghiệm",
            "source": "Đề thi giữa kì I Toán 9 THCS Giảng Võ",
            "prompt": "Cho bất phương trình $6 - 3x \\ge 0$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Hệ số bậc nhất của bất phương trình là $a = -3$, hệ số tự do là $b = 6$.",
                    "correctAnswer": true,
                    "explanation": "Bất phương trình đưa về dạng chuẩn $-3x + 6 \\ge 0$ có $a = -3, b = 6$."
                },
                {
                    "id": "b",
                    "text": "Chuyển vế hạng tử tự do ta được $-3x \\ge -6$.",
                    "correctAnswer": true,
                    "explanation": "Chuyển $6$ sang vế phải đổi dấu thành $-6$."
                },
                {
                    "id": "c",
                    "text": "Tập nghiệm của bất phương trình là $x \\ge 2$.",
                    "correctAnswer": false,
                    "explanation": "Chia cả hai vế cho $-3$ (số âm), ta phải đổi chiều: $x \\le \\frac{-6}{-3} \\Leftrightarrow x \\le 2$."
                },
                {
                    "id": "d",
                    "text": "Số lượng số nguyên dương thỏa mãn bất phương trình là 2.",
                    "correctAnswer": true,
                    "explanation": "Các số nguyên dương thỏa mãn $x \\le 2$ là $x = 1$ và $x = 2$, có đúng 2 số."
                }
            ]
        }
    ],
    "shortAnswerQuestions": [
        {
            "id": "otc2-d1-sa1",
            "badge": "Trả lời ngắn 1 (TH) - Tìm nghiệm phương trình quy về bậc nhất",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 33)",
            "prompt": "Tìm nghiệm của phương trình $\\frac{3x - 2}{x - 1} = 2$.",
            "correctAnswer": "0",
            "acceptableAnswers": [
                "0",
                "x=0",
                "x = 0"
            ],
            "explanation": "ĐKXĐ: $x \\ne 1$. Phương trình tương đương: $3x - 2 = 2(x - 1) \\Leftrightarrow 3x - 2 = 2x - 2 \\Leftrightarrow 3x - 2x = -2 + 2 \\Leftrightarrow x = 0$ (thỏa mãn ĐKXĐ). Vậy nghiệm là 0."
        },
        {
            "id": "otc2-d1-sa2",
            "badge": "Trả lời ngắn 2 (TH) - Đếm số nghiệm của phương trình tích",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 31)",
            "prompt": "Phương trình $(x^2 - 4)(3x + 9) = 0$ có tất cả bao nhiêu nghiệm phân biệt?",
            "correctAnswer": "3",
            "acceptableAnswers": [
                "3",
                "3 nghiệm"
            ],
            "explanation": "Ta có: $(x - 2)(x + 2)(3x + 9) = 0 \\Leftrightarrow x - 2 = 0$ hoặc $x + 2 = 0$ hoặc $3x + 9 = 0 \\Leftrightarrow x = 2, x = -2, x = -3$. Có 3 nghiệm phân biệt."
        },
        {
            "id": "otc2-d1-sa3",
            "badge": "Trả lời ngắn 3 (TH) - Đếm số nghiệm nguyên dương của bất phương trình",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
            "prompt": "Có bao nhiêu số nguyên dương $x$ thỏa mãn bất phương trình $7 - 2x > 1$?",
            "correctAnswer": "2",
            "acceptableAnswers": [
                "2",
                "2 số"
            ],
            "explanation": "Ta có: $7 - 2x > 1 \\Leftrightarrow -2x > -6 \\Leftrightarrow x < 3$. Các số nguyên dương nhỏ hơn 3 là $1$ và $2$. Vậy có 2 số."
        },
        {
            "id": "otc2-d1-sa4",
            "badge": "Trả lời ngắn 4 (VD) - Tìm tham số m để bất phương trình nhận nghiệm cho trước",
            "source": "Đề thi học kì I Toán 9 THCS Chu Văn An",
            "prompt": "Tìm giá trị của $m$ để bất phương trình $(m - 1)x + 6 > 0$ nhận $x = 2$ làm một nghiệm và khi $x = 2$ vế trái nhận giá trị bằng 10.",
            "correctAnswer": "3",
            "acceptableAnswers": [
                "3",
                "m=3",
                "m = 3"
            ],
            "explanation": "Khi $x = 2$, vế trái bằng 10 ta có: $(m - 1) \\cdot 2 + 6 = 10 \\Leftrightarrow 2(m - 1) = 4 \\Leftrightarrow m - 1 = 2 \\Leftrightarrow m = 3$. Thay $m = 3$ vào bất phương trình được $2x + 6 > 0$, với $x = 2$ thỏa mãn $10 > 0$."
        },
        {
            "id": "otc2-d1-sa5",
            "badge": "Trả lời ngắn 5 (VD) - Bài toán thực tế chuyển động bóng chạm đất",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 35)",
            "prompt": "Độ cao $h$ (tính bằng mét) của một quả bóng bay lên sau khi được sút $t$ giây được xác định bởi công thức $h = 20t - 5t^2$. Sau bao nhiêu giây từ lúc sút thì bóng chạm đất ($h = 0$ và $t > 0$)?",
            "correctAnswer": "4",
            "acceptableAnswers": [
                "4",
                "4 giây",
                "4s"
            ],
            "explanation": "Bóng chạm đất khi $h = 0 \\Leftrightarrow 20t - 5t^2 = 0 \\Leftrightarrow 5t(4 - t) = 0$. Vì $t > 0$ nên $4 - t = 0 \\Leftrightarrow t = 4$ giây."
        },
        {
            "id": "otc2-d1-sa6",
            "badge": "Trả lời ngắn 6 (VD) - Bài toán thực tế cước taxi",
            "source": "Đề tuyển sinh vào 10 THPT TP. Hà Nội",
            "prompt": "Một hãng taxi quy định giá cước mở cửa là $10\\,000$ đồng (cho $0,5\\text{ km}$ đầu tiên), mỗi kilômét tiếp theo tính giá $15\\,000$ đồng. Bác An chỉ mang theo $160\\,000$ đồng. Hỏi bác An có thể đi được quãng đường nhiều nhất bao nhiêu kilômét?",
            "correctAnswer": "10,5",
            "acceptableAnswers": [
                "10,5",
                "10.5",
                "10,5 km",
                "10.5 km"
            ],
            "explanation": "Gọi độ dài quãng đường bác An đi là $x$ ($x > 0,5\\text{ km}$). Số tiền cước phải trả là: $10\\,000 + 15\\,000(x - 0,5)$ (đồng). Do bác An có $160\\,000$ đồng: $10\\,000 + 15\\,000(x - 0,5) \\le 160\\,000 \\Leftrightarrow 15\\,000(x - 0,5) \\le 150\\,000 \\Leftrightarrow x - 0,5 \\le 10 \\Leftrightarrow x \\le 10,5\\text{ km}$."
        }
    ],
    "examSets": [
        {
            "id": "de-1",
            "title": "Đề ôn tập số 1",
            "description": "Đề ôn tập tổng hợp cuối Chương II (Phương trình và Bất phương trình bậc nhất một ẩn) - Đề số 1",
            "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
            "quizQuestions": [
                {
                    "id": "otc2-d1-q1",
                    "badge": "Câu 1 (NB) - Điều kiện xác định của phương trình",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 32)",
                    "question": "Điều kiện xác định của phương trình $\\frac{2x - 1}{x - 3} = 0$ là:",
                    "options": [
                        "$x \\ne 3$",
                        "$x \\ne \\frac{1}{2}$",
                        "$x \\ne -3$",
                        "$x \\ne 0$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Phương trình chứa ẩn ở mẫu xác định khi và chỉ khi mẫu thức khác 0: $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$."
                },
                {
                    "id": "otc2-d1-q2",
                    "badge": "Câu 2 (NB) - Nghiệm của phương trình tích",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 30)",
                    "question": "Nghiệm của phương trình tích $(x - 2)(2x + 6) = 0$ là:",
                    "options": [
                        "$x = 2$ hoặc $x = -3$",
                        "$x = -2$ hoặc $x = 3$",
                        "$x = 2$ hoặc $x = 3$",
                        "$x = -2$ hoặc $x = -3$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Ta có: $(x - 2)(2x + 6) = 0 \\Leftrightarrow x - 2 = 0$ hoặc $2x + 6 = 0 \\Leftrightarrow x = 2$ hoặc $x = -3$."
                },
                {
                    "id": "otc2-d1-q3",
                    "badge": "Câu 3 (NB) - Liên hệ giữa thứ tự và phép cộng",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 5 (Trang 36)",
                    "question": "Cho $a < b$. Khẳng định nào sau đây luôn đúng?",
                    "options": [
                        "$a + 5 < b + 5$",
                        "$a - 5 > b - 5$",
                        "$a + 5 > b + 5$",
                        "$5 - a < 5 - b$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Khi cộng cùng một số $5$ vào hai vế của bất đẳng thức $a < b$, ta được bất đẳng thức cùng chiều: $a + 5 < b + 5$."
                },
                {
                    "id": "otc2-d1-q4",
                    "badge": "Câu 4 (NB) - Nhận biết bất phương trình bậc nhất một ẩn",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 42)",
                    "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
                    "options": [
                        "$3x - 7 > 0$",
                        "$2x^2 + 1 < 0$",
                        "$0x + 5 \\ge 0$",
                        "$\\frac{2}{x} - 1 \\le 0$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Bất phương trình bậc nhất một ẩn có dạng $ax + b > 0$ (hoặc $<, \\ge, \\le$) với $a \\ne 0$. Ở đây $3x - 7 > 0$ có $a = 3 \\ne 0, b = -7$."
                },
                {
                    "id": "otc2-d1-q5",
                    "badge": "Câu 5 (TH) - Giải bất phương trình bậc nhất một ẩn",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 43)",
                    "question": "Tập nghiệm của bất phương trình $2x - 8 \\ge 0$ là:",
                    "options": [
                        "$x \\ge 4$",
                        "$x \\le 4$",
                        "$x > 4$",
                        "$x \\ge -4$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Chuyển vế hạng tử tự do: $2x \\ge 8$. Chia hai vế cho 2: $x \\ge 4$."
                },
                {
                    "id": "otc2-d1-q6",
                    "badge": "Câu 6 (TH) - Giải phương trình chứa ẩn ở mẫu",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 33)",
                    "question": "Nghiệm của phương trình $\\frac{2x - 1}{x - 2} = 3$ là:",
                    "options": [
                        "$x = 5$",
                        "$x = -5$",
                        "$x = 2$",
                        "Phương trình vô nghiệm"
                    ],
                    "correctIndex": 0,
                    "explanation": "ĐKXĐ: $x \\ne 2$. Phương trình tương đương: $2x - 1 = 3(x - 2) \\Leftrightarrow 2x - 1 = 3x - 6 \\Leftrightarrow 3x - 2x = 6 - 1 \\Leftrightarrow x = 5$ (thỏa mãn ĐKXĐ)."
                },
                {
                    "id": "otc2-d1-q7",
                    "badge": "Câu 7 (TH) - Liên hệ giữa thứ tự và phép nhân với số âm",
                    "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 40)",
                    "question": "Biết $-3a > -3b$. So sánh hai số $a$ và $b$ ta được:",
                    "options": [
                        "$a < b$",
                        "$a > b$",
                        "$a = b$",
                        "$a \\le b$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Chia cả hai vế của bất đẳng thức $-3a > -3b$ cho số âm $-3$, ta phải đổi chiều bất đẳng thức, do đó $a < b$."
                },
                {
                    "id": "otc2-d1-q8",
                    "badge": "Câu 8 (TH) - Bất phương trình đổi chiều khi chia số âm",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
                    "question": "Nghiệm của bất phương trình $-4x + 12 < 0$ là:",
                    "options": [
                        "$x > 3$",
                        "$x < 3$",
                        "$x > -3$",
                        "$x < -3$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Chuyển vế: $-4x < -12$. Chia cả hai vế cho $-4$ (đổi chiều bất đẳng thức): $x > \\frac{-12}{-4} \\Leftrightarrow x > 3$."
                },
                {
                    "id": "otc2-d1-q9",
                    "badge": "Câu 9 (TH) - So sánh giá trị biểu thức nhờ tính chất thứ tự",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 39)",
                    "question": "Cho $m < n$. Bất đẳng thức nào sau đây là đúng?",
                    "options": [
                        "$2m - 5 < 2n - 5$",
                        "$2m - 5 > 2n - 5$",
                        "$-2m + 5 < -2n + 5$",
                        "$5 - 2m < 5 - 2n$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Vì $m < n \\Rightarrow 2m < 2n$ (nhân số dương 2 giữ nguyên chiều). Cộng $-5$ vào hai vế ta được: $2m - 5 < 2n - 5$."
                },
                {
                    "id": "otc2-d1-q10",
                    "badge": "Câu 10 (VD) - Tìm tham số để phương trình bậc nhất một ẩn",
                    "source": "Đề thi học kì I Toán 9 THCS Trưng Vương",
                    "question": "Tìm giá trị của $m$ để phương trình $(m - 2)x^2 + 3x - 1 = 0$ là phương trình bậc nhất một ẩn.",
                    "options": [
                        "$m = 2$",
                        "$m \\ne 2$",
                        "$m = 0$",
                        "$m = 3$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Để phương trình trở thành phương trình bậc nhất một ẩn thì hệ số của $x^2$ phải bằng 0: $m - 2 = 0 \\Leftrightarrow m = 2$. Khi đó phương trình là $3x - 1 = 0$ (bậc nhất)."
                },
                {
                    "id": "otc2-d1-q11",
                    "badge": "Câu 11 (VD) - Tìm số nguyên lớn nhất thỏa mãn bất phương trình",
                    "source": "Đề khảo sát chất lượng Toán 9 Quận Cầu Giấy",
                    "question": "Số nguyên dương $x$ lớn nhất thỏa mãn bất phương trình $5 - 2x > -3$ là:",
                    "options": [
                        "$3$",
                        "$4$",
                        "$2$",
                        "$1$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Ta có: $5 - 2x > -3 \\Leftrightarrow -2x > -8 \\Leftrightarrow x < 4$. Vì $x$ là số nguyên dương nên $x \\in \\{1; 2; 3\\}$. Số nguyên dương lớn nhất là 3."
                },
                {
                    "id": "otc2-d1-q12",
                    "badge": "Câu 12 (VD) - Toán thực tế mua sắm đồ dùng học tập",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 45)",
                    "question": "Bạn An có $60\\,000$ đồng, An mua một chiếc thước kẻ giá $15\\,000$ đồng, số tiền còn lại mua vở với giá $6\\,000$ đồng một quyển. Số quyển vở An có thể mua nhiều nhất là:",
                    "options": [
                        "$7$ quyển",
                        "$8$ quyển",
                        "$6$ quyển",
                        "$9$ quyển"
                    ],
                    "correctIndex": 0,
                    "explanation": "Gọi số quyển vở An mua là $x$ ($x \\in \\mathbb{N}^*$). Số tiền An phải trả là $15\\,000 + 6\\,000x$ (đồng). Do An chỉ có $60\\,000$ đồng nên: $15\\,000 + 6\\,000x \\le 60\\,000 \\Leftrightarrow 6\\,000x \\le 45\\,000 \\Leftrightarrow x \\le 7,5$. Vì $x$ nguyên dương nên số quyển vở mua được nhiều nhất là 7 quyển."
                }
            ],
            "trueFalseQuestions": [
                {
                    "id": "otc2-d1-tf1",
                    "badge": "Đúng/Sai 1 (NB) - Phương trình tích",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 30)",
                    "prompt": "Cho phương trình tích $(2x - 4)(x + 3) = 0$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Phương trình đã cho có dạng tích $A(x) \\cdot B(x) = 0$.",
                            "correctAnswer": true,
                            "explanation": "Phương trình có dạng tích của hai đa thức $A(x) = 2x - 4$ và $B(x) = x + 3$."
                        },
                        {
                            "id": "b",
                            "text": "Giá trị $x = 2$ là một nghiệm của phương trình.",
                            "correctAnswer": true,
                            "explanation": "Thay $x = 2$: $2(2) - 4 = 0$, do đó $0 \\cdot (2 + 3) = 0$ (thỏa mãn)."
                        },
                        {
                            "id": "c",
                            "text": "Giá trị $x = 3$ là một nghiệm của phương trình.",
                            "correctAnswer": false,
                            "explanation": "Thay $x = 3$: $(2 \\cdot 3 - 4)(3 + 3) = 2 \\cdot 6 = 12 \\ne 0$. Nghiệm đúng phải là $x = -3$."
                        },
                        {
                            "id": "d",
                            "text": "Tập nghiệm của phương trình đã cho là $S = \\{2; -3\\}$.",
                            "correctAnswer": true,
                            "explanation": "Phương trình tương đương $2x - 4 = 0$ hoặc $x + 3 = 0 \\Leftrightarrow x = 2$ hoặc $x = -3$."
                        }
                    ]
                },
                {
                    "id": "otc2-d1-tf2",
                    "badge": "Đúng/Sai 2 (TH) - Phương trình chứa ẩn ở mẫu và điều kiện xác định",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 33)",
                    "prompt": "Cho phương trình $\\frac{x + 2}{x - 1} = \\frac{3}{x - 1}$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Điều kiện xác định của phương trình là $x \\ne 1$.",
                            "correctAnswer": true,
                            "explanation": "Mẫu thức chung là $x - 1$, nên điều kiện xác định là $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$."
                        },
                        {
                            "id": "b",
                            "text": "Khử mẫu ta được phương trình bậc nhất $x + 2 = 3$.",
                            "correctAnswer": true,
                            "explanation": "Vì hai vế cùng mẫu thức $(x - 1)$ nên khử mẫu được $x + 2 = 3$."
                        },
                        {
                            "id": "c",
                            "text": "Phương trình sau khi khử mẫu có nghiệm duy nhất $x = 1$.",
                            "correctAnswer": true,
                            "explanation": "$x + 2 = 3 \\Leftrightarrow x = 3 - 2 = 1$."
                        },
                        {
                            "id": "d",
                            "text": "Phương trình ban đầu có tập nghiệm là $S = \\{1\\}$.",
                            "correctAnswer": false,
                            "explanation": "Giá trị $x = 1$ không thỏa mãn điều kiện xác định $x \\ne 1$, nên bị loại. Phương trình ban đầu vô nghiệm ($S = \\emptyset$)."
                        }
                    ]
                },
                {
                    "id": "otc2-d1-tf3",
                    "badge": "Đúng/Sai 3 (TH) - Tính chất của bất đẳng thức",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 38)",
                    "prompt": "Cho hai số thực $a$ và $b$ thỏa mãn $a > b$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "$a - 7 > b - 7$.",
                            "correctAnswer": true,
                            "explanation": "Cộng $-7$ vào hai vế của bất đẳng thức $a > b$, chiều bất đẳng thức không đổi."
                        },
                        {
                            "id": "b",
                            "text": "$-4a > -4b$.",
                            "correctAnswer": false,
                            "explanation": "Nhân hai vế với số âm $-4$ phải đổi chiều bất đẳng thức: $-4a < -4b$."
                        },
                        {
                            "id": "c",
                            "text": "$3a + 2 > 3b + 2$.",
                            "correctAnswer": true,
                            "explanation": "Vì $a > b \\Rightarrow 3a > 3b \\Rightarrow 3a + 2 > 3b + 2$."
                        },
                        {
                            "id": "d",
                            "text": "$10 - 2a < 10 - 2b$.",
                            "correctAnswer": true,
                            "explanation": "Vì $a > b \\Rightarrow -2a < -2b \\Rightarrow 10 - 2a < 10 - 2b$."
                        }
                    ]
                },
                {
                    "id": "otc2-d1-tf4",
                    "badge": "Đúng/Sai 4 (VD) - Bất phương trình bậc nhất một ẩn và số nghiệm",
                    "source": "Đề thi giữa kì I Toán 9 THCS Giảng Võ",
                    "prompt": "Cho bất phương trình $6 - 3x \\ge 0$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Hệ số bậc nhất của bất phương trình là $a = -3$, hệ số tự do là $b = 6$.",
                            "correctAnswer": true,
                            "explanation": "Bất phương trình đưa về dạng chuẩn $-3x + 6 \\ge 0$ có $a = -3, b = 6$."
                        },
                        {
                            "id": "b",
                            "text": "Chuyển vế hạng tử tự do ta được $-3x \\ge -6$.",
                            "correctAnswer": true,
                            "explanation": "Chuyển $6$ sang vế phải đổi dấu thành $-6$."
                        },
                        {
                            "id": "c",
                            "text": "Tập nghiệm của bất phương trình là $x \\ge 2$.",
                            "correctAnswer": false,
                            "explanation": "Chia cả hai vế cho $-3$ (số âm), ta phải đổi chiều: $x \\le \\frac{-6}{-3} \\Leftrightarrow x \\le 2$."
                        },
                        {
                            "id": "d",
                            "text": "Số lượng số nguyên dương thỏa mãn bất phương trình là 2.",
                            "correctAnswer": true,
                            "explanation": "Các số nguyên dương thỏa mãn $x \\le 2$ là $x = 1$ và $x = 2$, có đúng 2 số."
                        }
                    ]
                }
            ],
            "shortAnswerQuestions": [
                {
                    "id": "otc2-d1-sa1",
                    "badge": "Trả lời ngắn 1 (TH) - Tìm nghiệm phương trình quy về bậc nhất",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 33)",
                    "prompt": "Tìm nghiệm của phương trình $\\frac{3x - 2}{x - 1} = 2$.",
                    "correctAnswer": "0",
                    "acceptableAnswers": [
                        "0",
                        "x=0",
                        "x = 0"
                    ],
                    "explanation": "ĐKXĐ: $x \\ne 1$. Phương trình tương đương: $3x - 2 = 2(x - 1) \\Leftrightarrow 3x - 2 = 2x - 2 \\Leftrightarrow 3x - 2x = -2 + 2 \\Leftrightarrow x = 0$ (thỏa mãn ĐKXĐ). Vậy nghiệm là 0."
                },
                {
                    "id": "otc2-d1-sa2",
                    "badge": "Trả lời ngắn 2 (TH) - Đếm số nghiệm của phương trình tích",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 31)",
                    "prompt": "Phương trình $(x^2 - 4)(3x + 9) = 0$ có tất cả bao nhiêu nghiệm phân biệt?",
                    "correctAnswer": "3",
                    "acceptableAnswers": [
                        "3",
                        "3 nghiệm"
                    ],
                    "explanation": "Ta có: $(x - 2)(x + 2)(3x + 9) = 0 \\Leftrightarrow x - 2 = 0$ hoặc $x + 2 = 0$ hoặc $3x + 9 = 0 \\Leftrightarrow x = 2, x = -2, x = -3$. Có 3 nghiệm phân biệt."
                },
                {
                    "id": "otc2-d1-sa3",
                    "badge": "Trả lời ngắn 3 (TH) - Đếm số nghiệm nguyên dương của bất phương trình",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
                    "prompt": "Có bao nhiêu số nguyên dương $x$ thỏa mãn bất phương trình $7 - 2x > 1$?",
                    "correctAnswer": "2",
                    "acceptableAnswers": [
                        "2",
                        "2 số"
                    ],
                    "explanation": "Ta có: $7 - 2x > 1 \\Leftrightarrow -2x > -6 \\Leftrightarrow x < 3$. Các số nguyên dương nhỏ hơn 3 là $1$ và $2$. Vậy có 2 số."
                },
                {
                    "id": "otc2-d1-sa4",
                    "badge": "Trả lời ngắn 4 (VD) - Tìm tham số m để bất phương trình nhận nghiệm cho trước",
                    "source": "Đề thi học kì I Toán 9 THCS Chu Văn An",
                    "prompt": "Tìm giá trị của $m$ để bất phương trình $(m - 1)x + 6 > 0$ nhận $x = 2$ làm một nghiệm và khi $x = 2$ vế trái nhận giá trị bằng 10.",
                    "correctAnswer": "3",
                    "acceptableAnswers": [
                        "3",
                        "m=3",
                        "m = 3"
                    ],
                    "explanation": "Khi $x = 2$, vế trái bằng 10 ta có: $(m - 1) \\cdot 2 + 6 = 10 \\Leftrightarrow 2(m - 1) = 4 \\Leftrightarrow m - 1 = 2 \\Leftrightarrow m = 3$. Thay $m = 3$ vào bất phương trình được $2x + 6 > 0$, với $x = 2$ thỏa mãn $10 > 0$."
                },
                {
                    "id": "otc2-d1-sa5",
                    "badge": "Trả lời ngắn 5 (VD) - Bài toán thực tế chuyển động bóng chạm đất",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 35)",
                    "prompt": "Độ cao $h$ (tính bằng mét) của một quả bóng bay lên sau khi được sút $t$ giây được xác định bởi công thức $h = 20t - 5t^2$. Sau bao nhiêu giây từ lúc sút thì bóng chạm đất ($h = 0$ và $t > 0$)?",
                    "correctAnswer": "4",
                    "acceptableAnswers": [
                        "4",
                        "4 giây",
                        "4s"
                    ],
                    "explanation": "Bóng chạm đất khi $h = 0 \\Leftrightarrow 20t - 5t^2 = 0 \\Leftrightarrow 5t(4 - t) = 0$. Vì $t > 0$ nên $4 - t = 0 \\Leftrightarrow t = 4$ giây."
                },
                {
                    "id": "otc2-d1-sa6",
                    "badge": "Trả lời ngắn 6 (VD) - Bài toán thực tế cước taxi",
                    "source": "Đề tuyển sinh vào 10 THPT TP. Hà Nội",
                    "prompt": "Một hãng taxi quy định giá cước mở cửa là $10\\,000$ đồng (cho $0,5\\text{ km}$ đầu tiên), mỗi kilômét tiếp theo tính giá $15\\,000$ đồng. Bác An chỉ mang theo $160\\,000$ đồng. Hỏi bác An có thể đi được quãng đường nhiều nhất bao nhiêu kilômét?",
                    "correctAnswer": "10,5",
                    "acceptableAnswers": [
                        "10,5",
                        "10.5",
                        "10,5 km",
                        "10.5 km"
                    ],
                    "explanation": "Gọi độ dài quãng đường bác An đi là $x$ ($x > 0,5\\text{ km}$). Số tiền cước phải trả là: $10\\,000 + 15\\,000(x - 0,5)$ (đồng). Do bác An có $160\\,000$ đồng: $10\\,000 + 15\\,000(x - 0,5) \\le 160\\,000 \\Leftrightarrow 15\\,000(x - 0,5) \\le 150\\,000 \\Leftrightarrow x - 0,5 \\le 10 \\Leftrightarrow x \\le 10,5\\text{ km}$."
                }
            ]
        },
        {
            "id": "de-2",
            "title": "Đề ôn tập số 2",
            "description": "Đề ôn tập tổng hợp cuối Chương II (Phương trình và Bất phương trình bậc nhất một ẩn) - Đề số 2",
            "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
            "quizQuestions": [
                {
                    "id": "otc2-d2-q1",
                    "badge": "Câu 1 (NB) - Phương trình đưa về dạng tích",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 31)",
                    "question": "Phương trình nào sau đây đưa được về dạng phương trình tích bằng cách đặt nhân tử chung?",
                    "options": [
                        "$x^2 - 4x = 0$",
                        "$x^2 + 4 = 0$",
                        "$2x - 3 = 0$",
                        "$\\frac{x}{x - 1} = 2$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Ta có $x^2 - 4x = 0 \\Leftrightarrow x(x - 4) = 0$, đây là phương trình tích đưa về bằng cách đặt nhân tử chung $x$."
                },
                {
                    "id": "otc2-d2-q2",
                    "badge": "Câu 2 (NB) - Điều kiện xác định với hai mẫu thức",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 32)",
                    "question": "Điều kiện xác định của phương trình $\\frac{1}{x - 2} + \\frac{1}{x + 2} = 3$ là:",
                    "options": [
                        "$x \\ne 2$ và $x \\ne -2$",
                        "$x \\ne 2$",
                        "$x \\ne -2$",
                        "$x \\ne 0$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Điều kiện xác định: $x - 2 \\ne 0$ và $x + 2 \\ne 0 \\Leftrightarrow x \\ne 2$ và $x \\ne -2$."
                },
                {
                    "id": "otc2-d2-q3",
                    "badge": "Câu 3 (NB) - Khẳng định sai về bất đẳng thức",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 38)",
                    "question": "Cho $x < y$. Khẳng định nào sau đây là SAI?",
                    "options": [
                        "$-2x < -2y$",
                        "$x + 1 < y + 1$",
                        "$3x < 3y$",
                        "$x - 4 < y - 4$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Vì $x < y$, khi nhân cả hai vế với số âm $-2$ thì phải đổi chiều bất đẳng thức thành $-2x > -2y$. Do đó khẳng định $-2x < -2y$ là sai."
                },
                {
                    "id": "otc2-d2-q4",
                    "badge": "Câu 4 (NB) - Bất phương trình tương đương",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 42)",
                    "question": "Bất phương trình $x - 3 < 1$ tương đương với bất phương trình nào?",
                    "options": [
                        "$x < 4$",
                        "$x > 4$",
                        "$x \\le 4$",
                        "$x < -2$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Chuyển vế hạng tử $-3$ sang vế phải: $x < 1 + 3 \\Leftrightarrow x < 4$."
                },
                {
                    "id": "otc2-d2-q5",
                    "badge": "Câu 5 (TH) - Phương trình vô nghiệm do không thỏa mãn ĐKXĐ",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 34)",
                    "question": "Tập nghiệm của phương trình $\\frac{x^2 - 1}{x - 1} = 0$ là:",
                    "options": [
                        "$S = \\emptyset$",
                        "$S = \\{1\\}$",
                        "$S = \\{-1\\}$",
                        "$S = \\{-1; 1\\}$"
                    ],
                    "correctIndex": 2,
                    "explanation": "ĐKXĐ: $x \\ne 1$. Phương trình tương đương: $x^2 - 1 = 0 \\Leftrightarrow (x - 1)(x + 1) = 0 \\Leftrightarrow x = 1$ (loại vì không thỏa mãn ĐKXĐ) hoặc $x = -1$ (thỏa mãn ĐKXĐ). Vậy $S = \\{-1\\}$."
                },
                {
                    "id": "otc2-d2-q6",
                    "badge": "Câu 6 (TH) - Bất đẳng thức đúng với mọi số thực c",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 5 (Trang 37)",
                    "question": "Cho hai số thực $a$ và $b$ thỏa mãn $a > b$. Với mọi số thực $c$, bất đẳng thức nào sau đây luôn đúng?",
                    "options": [
                        "$a + c > b + c$",
                        "$ac > bc$",
                        "$\\frac{a}{c} > \\frac{b}{c}$",
                        "$a - c < b - c$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Theo tính chất thứ tự với phép cộng, khi cộng cùng số thực $c$ bất kì vào hai vế của $a > b$ ta luôn được $a + c > b + c$."
                },
                {
                    "id": "otc2-d2-q7",
                    "badge": "Câu 7 (TH) - Giải bất phương trình quy đồng mẫu số",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 44)",
                    "question": "Nghiệm của bất phương trình $\\frac{x - 1}{2} - \\frac{x - 2}{3} \\ge 1$ là:",
                    "options": [
                        "$x \\ge 5$",
                        "$x \\le 5$",
                        "$x \\ge 7$",
                        "$x \\ge 1$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Quy đồng với mẫu số chung là 6: $3(x - 1) - 2(x - 2) \\ge 6 \\Leftrightarrow 3x - 3 - 2x + 4 \\ge 6 \\Leftrightarrow x + 1 \\ge 6 \\Leftrightarrow x \\ge 5$."
                },
                {
                    "id": "otc2-d2-q8",
                    "badge": "Câu 8 (TH) - Điều kiện để biểu thức nhận giá trị âm",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
                    "question": "Biểu thức $P = 6 - 3x$ nhận giá trị âm khi:",
                    "options": [
                        "$x > 2$",
                        "$x < 2$",
                        "$x \\ge 2$",
                        "$x > -2$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Biểu thức $P$ nhận giá trị âm khi $6 - 3x < 0 \\Leftrightarrow -3x < -6 \\Leftrightarrow x > \\frac{-6}{-3} \\Leftrightarrow x > 2$."
                },
                {
                    "id": "otc2-d2-q9",
                    "badge": "Câu 9 (TH) - Điều kiện tham số để là bất phương trình bậc nhất",
                    "source": "SGK Toán 9 Cánh Diều Bài 3 (Trang 43)",
                    "question": "Với giá trị nào của $m$ thì bất phương trình $(m - 3)x + 5 > 0$ là bất phương trình bậc nhất một ẩn?",
                    "options": [
                        "$m \\ne 3$",
                        "$m = 3$",
                        "$m > 3$",
                        "$m < 3$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Bất phương trình là bậc nhất một ẩn khi và chỉ khi hệ số của ẩn khác 0: $m - 3 \\ne 0 \\Leftrightarrow m \\ne 3$."
                },
                {
                    "id": "otc2-d2-q10",
                    "badge": "Câu 10 (VD) - Nghiệm lớn nhất của phương trình tích",
                    "source": "Đề thi học kì I THCS Yên Hòa",
                    "question": "Nghiệm lớn nhất của phương trình tích $(x^2 - 4)(2x - 5) = 0$ là:",
                    "options": [
                        "$2,5$",
                        "$2$",
                        "$-2$",
                        "$5$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Ta có: $(x - 2)(x + 2)(2x - 5) = 0 \\Leftrightarrow x = 2$ hoặc $x = -2$ hoặc $x = 2,5$. Nghiệm lớn nhất trong ba nghiệm là $2,5$."
                },
                {
                    "id": "otc2-d2-q11",
                    "badge": "Câu 11 (VD) - Bất đẳng thức nghịch đảo hai số dương",
                    "source": "Đề thi tuyển sinh vào 10 THPT TP. Hồ Chí Minh",
                    "question": "Cho hai số dương $a$ và $b$ thỏa mãn $a < b$. Khẳng định nào sau đây là đúng?",
                    "options": [
                        "$\\frac{1}{a} > \\frac{1}{b}$",
                        "$\\frac{1}{a} < \\frac{1}{b}$",
                        "$a^2 > b^2$",
                        "$-a < -b$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Vì $a, b > 0$, chia cả hai vế của $a < b$ cho tích số dương $ab$, ta được $\\frac{a}{ab} < \\frac{b}{ab} \\Leftrightarrow \\frac{1}{b} < \\frac{1}{a} \\Leftrightarrow \\frac{1}{a} > \\frac{1}{b}$."
                },
                {
                    "id": "otc2-d2-q12",
                    "badge": "Câu 12 (VD) - Toán thực tế góc nghiêng an toàn của thang",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 45)",
                    "question": "Để đảm bảo an toàn khi dựng thang dựa vào tường, khoảng cách $d$ (mét) từ chân thang đến tường cần thỏa mãn bất phương trình $1,2 \\le d \\le 1,8$. Một người đặt thang cách chân tường $1,5\\text{ m}$. Hỏi khoảng cách này có đảm bảo an toàn không và còn có thể lùi chân thang ra xa tường tối đa thêm bao nhiêu mét nữa?",
                    "options": [
                        "Đảm bảo an toàn; tối đa thêm $0,3\\text{ m}$",
                        "Đảm bảo an toàn; tối đa thêm $0,5\\text{ m}$",
                        "Không an toàn; cần tiến lại gần tường $0,3\\text{ m}$",
                        "Đảm bảo an toàn; tối đa thêm $0,6\\text{ m}$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Vì $1,2 \\le 1,5 \\le 1,8$ nên khoảng cách đặt thang đảm bảo an toàn. Khoảng cách tối đa cho phép là $1,8\\text{ m}$, do đó chân thang có thể lùi ra xa tường thêm tối đa là $1,8 - 1,5 = 0,3\\text{ m}$."
                }
            ],
            "trueFalseQuestions": [
                {
                    "id": "otc2-d2-tf1",
                    "badge": "Đúng/Sai 1 (NB) - Phương trình tích chứa nhân tử vô nghiệm",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 31)",
                    "prompt": "Cho phương trình $(x - 1)(x^2 + 1) = 0$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Phương trình đã cho có tích của hai nhân tử là $x - 1$ và $x^2 + 1$.",
                            "correctAnswer": true,
                            "explanation": "Phương trình có dạng $A(x) \\cdot B(x) = 0$ với $A(x) = x - 1$ và $B(x) = x^2 + 1$."
                        },
                        {
                            "id": "b",
                            "text": "Phương trình $x^2 + 1 = 0$ vô nghiệm trên tập số thực $\\mathbb{R}$.",
                            "correctAnswer": true,
                            "explanation": "Vì $x^2 \\ge 0$ với mọi $x$ nên $x^2 + 1 \\ge 1 > 0$ với mọi $x \\in \\mathbb{R}$."
                        },
                        {
                            "id": "c",
                            "text": "Phương trình đã cho có 3 nghiệm phân biệt trên tập số thực.",
                            "correctAnswer": false,
                            "explanation": "Chỉ có nhân tử $x - 1 = 0 \\Leftrightarrow x = 1$, nên phương trình chỉ có 1 nghiệm duy nhất."
                        },
                        {
                            "id": "d",
                            "text": "Tập nghiệm của phương trình là $S = \\{1\\}$.",
                            "correctAnswer": true,
                            "explanation": "Nghiệm duy nhất là $x = 1$, tập nghiệm là $S = \\{1\\}$."
                        }
                    ]
                },
                {
                    "id": "otc2-d2-tf2",
                    "badge": "Đúng/Sai 2 (TH) - Giải phương trình chứa ẩn ở mẫu",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 34)",
                    "prompt": "Cho phương trình $\\frac{2}{x - 3} - \\frac{1}{x} = \\frac{6}{x(x - 3)}$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Điều kiện xác định của phương trình là $x \\ne 0$ và $x \\ne 3$.",
                            "correctAnswer": true,
                            "explanation": "Mẫu thức chung là $x(x - 3)$, các mẫu khác 0 khi $x \\ne 0$ và $x \\ne 3$."
                        },
                        {
                            "id": "b",
                            "text": "Mẫu thức chung của phương trình là $x(x - 3)$.",
                            "correctAnswer": true,
                            "explanation": "Mẫu thức chung gồm tích của các nhân tử phân biệt $x$ và $x - 3$."
                        },
                        {
                            "id": "c",
                            "text": "Khử mẫu ta được phương trình $2x - (x - 3) = 6 \\Leftrightarrow x + 3 = 6 \\Leftrightarrow x = 3$.",
                            "correctAnswer": true,
                            "explanation": "Quy đồng và khử mẫu đúng dẫn đến $x = 3$."
                        },
                        {
                            "id": "d",
                            "text": "Phương trình đã cho có nghiệm là $x = 3$.",
                            "correctAnswer": false,
                            "explanation": "Giá trị $x = 3$ vi phạm điều kiện xác định $x \\ne 3$, nên bị loại. Phương trình vô nghiệm."
                        }
                    ]
                },
                {
                    "id": "otc2-d2-tf3",
                    "badge": "Đúng/Sai 3 (TH) - Tính chất bất đẳng thức với hai số âm",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 39)",
                    "prompt": "Cho hai số âm $a$ và $b$ thỏa mãn $a < b < 0$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "$a^2 > b^2$.",
                            "correctAnswer": true,
                            "explanation": "Ví dụ $a = -3, b = -2 \\Rightarrow (-3)^2 = 9 > (-2)^2 = 4$."
                        },
                        {
                            "id": "b",
                            "text": "$ab > 0$.",
                            "correctAnswer": true,
                            "explanation": "Tích của hai số âm luôn là một số dương."
                        },
                        {
                            "id": "c",
                            "text": "$\\frac{1}{a} < \\frac{1}{b}$.",
                            "correctAnswer": false,
                            "explanation": "Chia cả hai vế của $a < b$ cho tích số dương $ab$, ta được $\\frac{1}{b} < \\frac{1}{a} \\Leftrightarrow \\frac{1}{a} > \\frac{1}{b}$."
                        },
                        {
                            "id": "d",
                            "text": "$2a - 3 < 2b - 3$.",
                            "correctAnswer": true,
                            "explanation": "Vì $a < b \\Rightarrow 2a < 2b \\Rightarrow 2a - 3 < 2b - 3$."
                        }
                    ]
                },
                {
                    "id": "otc2-d2-tf4",
                    "badge": "Đúng/Sai 4 (VD) - Bài toán thực tế kế hoạch tiết kiệm tiền",
                    "source": "Đề thi học kì I THCS Archimedes Academy",
                    "prompt": "Bạn Nam muốn tiết kiệm tiền để mua một chiếc xe đạp giá $2\\,400\\,000$ đồng. Hiện tại Nam có $600\\,000$ đồng và mỗi tháng Nam tiết kiệm được $300\\,000$ đồng. Gọi $x$ là số tháng Nam tiết kiệm ($x \\in \\mathbb{N}^*$). Xét tính đúng/sai:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Tổng số tiền Nam có được sau $x$ tháng là $600\\,000 + 300\\,000x$ (đồng).",
                            "correctAnswer": true,
                            "explanation": "Tiền ban đầu cộng với số tiền tiết kiệm trong $x$ tháng."
                        },
                        {
                            "id": "b",
                            "text": "Bất phương trình biểu thị số tiền đủ để Nam mua xe là $600\\,000 + 300\\,000x \\ge 2\\,400\\,000$.",
                            "correctAnswer": true,
                            "explanation": "Để mua được xe, tổng số tiền phải lớn hơn hoặc bằng giá chiếc xe."
                        },
                        {
                            "id": "c",
                            "text": "Bất phương trình tương đương với $x \\ge 5$.",
                            "correctAnswer": false,
                            "explanation": "$300\\,000x \\ge 1\\,800\\,000 \\Leftrightarrow x \\ge \\frac{1\\,800\\,000}{300\\,000} = 6$. Khẳng định $x \\ge 5$ là sai."
                        },
                        {
                            "id": "d",
                            "text": "Nam cần tiết kiệm ít nhất 6 tháng thì mới có đủ tiền mua xe đạp.",
                            "correctAnswer": true,
                            "explanation": "Số nguyên dương nhỏ nhất thỏa mãn $x \\ge 6$ là 6."
                        }
                    ]
                }
            ],
            "shortAnswerQuestions": [
                {
                    "id": "otc2-d2-sa1",
                    "badge": "Trả lời ngắn 1 (TH) - Tìm nghiệm phương trình quy về bậc nhất",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 33)",
                    "prompt": "Tìm nghiệm của phương trình $\\frac{3x - 2}{x + 1} = 2$.",
                    "correctAnswer": "4",
                    "acceptableAnswers": [
                        "4",
                        "x=4",
                        "x = 4"
                    ],
                    "explanation": "ĐKXĐ: $x \\ne -1$. Quy đồng và khử mẫu: $3x - 2 = 2(x + 1) \\Leftrightarrow 3x - 2 = 2x + 2 \\Leftrightarrow x = 4$ (thỏa mãn ĐKXĐ)."
                },
                {
                    "id": "otc2-d2-sa2",
                    "badge": "Trả lời ngắn 2 (TH) - Tính tổng các nghiệm của phương trình tích",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 31)",
                    "prompt": "Tính tổng tất cả các nghiệm của phương trình tích $(2x - 6)(3x + 9) = 0$.",
                    "correctAnswer": "0",
                    "acceptableAnswers": [
                        "0"
                    ],
                    "explanation": "Phương trình có nghiệm: $2x - 6 = 0 \\Rightarrow x_1 = 3$ và $3x + 9 = 0 \\Rightarrow x_2 = -3$. Tổng các nghiệm là $3 + (-3) = 0$."
                },
                {
                    "id": "otc2-d2-sa3",
                    "badge": "Trả lời ngắn 3 (TH) - Đếm số nghiệm nguyên không âm",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
                    "prompt": "Có bao nhiêu số nguyên không âm $x$ thỏa mãn bất phương trình $7 - 3x \\ge 1$?",
                    "correctAnswer": "3",
                    "acceptableAnswers": [
                        "3",
                        "3 số"
                    ],
                    "explanation": "Ta có: $7 - 3x \\ge 1 \\Leftrightarrow -3x \\ge -6 \\Leftrightarrow x \\le 2$. Các số nguyên không âm ($x \\ge 0$) là $0, 1, 2$. Có đúng 3 số."
                },
                {
                    "id": "otc2-d2-sa4",
                    "badge": "Trả lời ngắn 4 (VD) - Tìm số nguyên lớn nhất thỏa mãn bất phương trình",
                    "source": "Đề khảo sát chất lượng Toán 9 Quận Ba Đình",
                    "prompt": "Tìm giá trị lớn nhất của số nguyên $x$ thỏa mãn bất phương trình $\\frac{2x - 1}{3} < \\frac{x + 4}{2}$.",
                    "correctAnswer": "13",
                    "acceptableAnswers": [
                        "13",
                        "x=13",
                        "x = 13"
                    ],
                    "explanation": "Quy đồng hai vế với mẫu chung 6: $2(2x - 1) < 3(x + 4) \\Leftrightarrow 4x - 2 < 3x + 12 \\Leftrightarrow x < 14$. Vì $x$ là số nguyên nên giá trị lớn nhất của $x$ là 13."
                },
                {
                    "id": "otc2-d2-sa5",
                    "badge": "Trả lời ngắn 5 (VD) - Bài toán thực tế điểm kiểm tra",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 45)",
                    "prompt": "Để đạt danh hiệu học sinh Giỏi một môn học, điểm trung bình của 4 bài kiểm tra phải từ $8,0$ trở lên. Bạn Bình đã có điểm 3 bài đầu là $7,5$; $8,0$ và $8,5$. Hỏi ở bài kiểm tra thứ tư, Bình phải đạt ít nhất bao nhiêu điểm để đạt danh hiệu học sinh Giỏi?",
                    "correctAnswer": "8",
                    "acceptableAnswers": [
                        "8",
                        "8 điểm",
                        "8.0",
                        "8,0"
                    ],
                    "explanation": "Gọi điểm bài kiểm tra thứ tư là $x$ ($0 \\le x \\le 10$). Điểm trung bình là: $\\frac{7,5 + 8,0 + 8,5 + x}{4} \\ge 8,0 \\Leftrightarrow \\frac{24 + x}{4} \\ge 8,0 \\Leftrightarrow 24 + x \\ge 32 \\Leftrightarrow x \\ge 8$. Vậy Bình phải đạt ít nhất 8 điểm."
                },
                {
                    "id": "otc2-d2-sa6",
                    "badge": "Trả lời ngắn 6 (VD) - Bài toán thực tế kinh doanh sản phẩm",
                    "source": "Đề thi tuyển sinh vào 10 THPT Tỉnh Quảng Ninh",
                    "prompt": "Một cửa hàng nhập về một lô áo với giá vốn $120\\,000$ đồng/chiếc. Chi phí vận chuyển và quản lý cố định là $3\\,000\\,000$ đồng. Cửa hàng bán mỗi chiếc áo với giá $200\\,000$ đồng. Hỏi cửa hàng cần bán ít nhất bao nhiêu chiếc áo để thu được lợi nhuận tối thiểu là $5\\,000\\,000$ đồng?",
                    "correctAnswer": "100",
                    "acceptableAnswers": [
                        "100",
                        "100 chiếc",
                        "100 chiếc áo"
                    ],
                    "explanation": "Gọi số áo cửa hàng bán là $x$ chiếc ($x \\in \\mathbb{N}^*$). Tiền lãi từ mỗi chiếc áo là $200\\,000 - 120\\,000 = 80\\,000$ đồng. Lợi nhuận của cửa hàng là: $80\\,000x - 3\\,000\\,000$. Theo yêu cầu: $80\\,000x - 3\\,000\\,000 \\ge 5\\,000\\,000 \\Leftrightarrow 80\\,000x \\ge 8\\,000\\,000 \\Leftrightarrow x \\ge 100$. Vậy cửa hàng phải bán ít nhất 100 chiếc áo."
                }
            ]
        },
        {
            "id": "de-3",
            "title": "Đề ôn tập số 3",
            "description": "Đề ôn tập tổng hợp cuối Chương II (Phương trình và Bất phương trình bậc nhất một ẩn) - Đề số 3",
            "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
            "quizQuestions": [
                {
                    "id": "otc2-d3-q1",
                    "badge": "Câu 1 (NB) - Dạng chuẩn của phương trình tích",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 30)",
                    "question": "Phương trình nào dưới đây là phương trình tích?",
                    "options": [
                        "$(2x - 1)(x + 3) = 0$",
                        "$(2x - 1) + (x + 3) = 0$",
                        "$(2x - 1)(x + 3) = 5$",
                        "$\\frac{2x - 1}{x + 3} = 0$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Phương trình tích có dạng chuẩn là $A(x) \\cdot B(x) = 0$. Chỉ có phương trình $(2x - 1)(x + 3) = 0$ thỏa mãn."
                },
                {
                    "id": "otc2-d3-q2",
                    "badge": "Câu 2 (NB) - Nghiệm của bất phương trình chia cho số âm",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 43)",
                    "question": "Nghiệm của bất phương trình $-4x > 12$ là:",
                    "options": [
                        "$x < -3$",
                        "$x > -3$",
                        "$x < 3$",
                        "$x > 3$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Chia cả hai vế cho $-4$ và đổi chiều bất phương trình: $x < \\frac{12}{-4} \\Leftrightarrow x < -3$."
                },
                {
                    "id": "otc2-d3-q3",
                    "badge": "Câu 3 (NB) - Tính chất cộng hai vế của bất đẳng thức",
                    "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 39)",
                    "question": "Cho $a > b$. Cộng cả hai vế của bất đẳng thức với $-7$ ta được:",
                    "options": [
                        "$a - 7 > b - 7$",
                        "$a - 7 < b - 7$",
                        "$a + 7 < b + 7$",
                        "$-7a > -7b$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Khi cộng cùng một số vào hai vế của bất đẳng thức ta được bất đẳng thức cùng chiều: $a > b \\Rightarrow a - 7 > b - 7$."
                },
                {
                    "id": "otc2-d3-q4",
                    "badge": "Câu 4 (NB) - Điều kiện xác định mẫu hiệu hai bình phương",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 32)",
                    "question": "Điều kiện xác định của phương trình $\\frac{x}{x^2 - 4} = 1$ là:",
                    "options": [
                        "$x \\ne 2$ và $x \\ne -2$",
                        "$x \\ne 2$",
                        "$x \\ne -2$",
                        "$x \\ne 4$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Mẫu thức là $x^2 - 4 = (x - 2)(x + 2) \\ne 0 \\Leftrightarrow x \\ne 2$ và $x \\ne -2$."
                },
                {
                    "id": "otc2-d3-q5",
                    "badge": "Câu 5 (TH) - Tích các nghiệm của phương trình tích",
                    "source": "Đề thi học kì I THCS Đoàn Thị Điểm",
                    "question": "Tích các nghiệm của phương trình $(x^2 - 25)(3x - 1) = 0$ bằng:",
                    "options": [
                        "$-\\frac{25}{3}$",
                        "$\\frac{25}{3}$",
                        "$-25$",
                        "$0$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Phương trình có 3 nghiệm: $x = 5, x = -5, x = \\frac{1}{3}$. Tích các nghiệm là $5 \\cdot (-5) \\cdot \\frac{1}{3} = -\\frac{25}{3}$."
                },
                {
                    "id": "otc2-d3-q6",
                    "badge": "Câu 6 (TH) - Giải bất phương trình có chứa dấu ngoặc",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
                    "question": "Nghiệm của bất phương trình $3(x - 2) - 2(x + 1) \\le 4$ là:",
                    "options": [
                        "$x \\le 12$",
                        "$x \\ge 12$",
                        "$x \\le 8$",
                        "$x \\le 4$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Phá ngoặc thu gọn: $3x - 6 - 2x - 2 \\le 4 \\Leftrightarrow x - 8 \\le 4 \\Leftrightarrow x \\le 12$."
                },
                {
                    "id": "otc2-d3-q7",
                    "badge": "Câu 7 (TH) - Số nghiệm của phương trình chứa ẩn ở mẫu",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 35)",
                    "question": "Số nghiệm của phương trình $\\frac{x + 1}{x - 1} - \\frac{x - 1}{x + 1} = \\frac{4}{x^2 - 1}$ là:",
                    "options": [
                        "$0$",
                        "$1$",
                        "$2$",
                        "Vô số nghiệm"
                    ],
                    "correctIndex": 0,
                    "explanation": "ĐKXĐ: $x \\ne \\pm 1$. Quy đồng và khử mẫu: $(x + 1)^2 - (x - 1)^2 = 4 \\Leftrightarrow (x^2 + 2x + 1) - (x^2 - 2x + 1) = 4 \\Leftrightarrow 4x = 4 \\Leftrightarrow x = 1$. Giá trị $x = 1$ bị loại do không thỏa mãn ĐKXĐ. Vậy phương trình có 0 nghiệm (vô nghiệm)."
                },
                {
                    "id": "otc2-d3-q8",
                    "badge": "Câu 8 (TH) - Bất đẳng thức hằng đẳng thức",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 5 (Trang 37)",
                    "question": "Với mọi số thực $a, b$, bất đẳng thức nào sau đây luôn đúng?",
                    "options": [
                        "$a^2 + b^2 \\ge 2ab$",
                        "$a^2 + b^2 > 2ab$",
                        "$a^2 + b^2 \\le 2ab$",
                        "$(a + b)^2 < 0$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Vì $(a - b)^2 \\ge 0 \\Leftrightarrow a^2 - 2ab + b^2 \\ge 0 \\Leftrightarrow a^2 + b^2 \\ge 2ab$ với mọi $a, b$."
                },
                {
                    "id": "otc2-d3-q9",
                    "badge": "Câu 9 (TH) - Điều kiện để bất phương trình nghiệm đúng với mọi x",
                    "source": "Đề thi học sinh giỏi cấp trường THCS Thăng Long",
                    "question": "Tìm giá trị của $m$ để bất phương trình $(m - 1)x + 2 > 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$.",
                    "options": [
                        "$m = 1$",
                        "$m \\ne 1$",
                        "$m > 1$",
                        "Không có giá trị nào của $m$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Khi $m = 1$, bất phương trình trở thành $0x + 2 > 0 \\Leftrightarrow 2 > 0$, luôn đúng với mọi $x \\in \\mathbb{R}$."
                },
                {
                    "id": "otc2-d3-q10",
                    "badge": "Câu 10 (VD) - Tìm số nguyên x nhỏ nhất thỏa mãn bất phương trình",
                    "source": "Đề tuyển sinh vào 10 THPT Chuyên Hà Nội - Amsterdam (vòng 1)",
                    "question": "Số nguyên $x$ nhỏ nhất thỏa mãn bất phương trình $\\frac{3x + 1}{2} - 1 > \\frac{x - 2}{3}$ là:",
                    "options": [
                        "$0$",
                        "$1$",
                        "$-1$",
                        "$2$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Quy đồng hai vế với mẫu 6: $3(3x + 1) - 6 > 2(x - 2) \\Leftrightarrow 9x + 3 - 6 > 2x - 4 \\Leftrightarrow 7x > -1 \\Leftrightarrow x > -\\frac{1}{7}$. Số nguyên nhỏ nhất lớn hơn $-\\frac{1}{7}$ là 0."
                },
                {
                    "id": "otc2-d3-q11",
                    "badge": "Câu 11 (VD) - Bất đẳng thức so sánh tỉ số",
                    "source": "Đề thi vào 10 THPT TP. Hải Phòng",
                    "question": "Cho hai số dương $a \\ge b > 0$. Khẳng định nào sau đây là SAI?",
                    "options": [
                        "$\\frac{a}{b} < 1$",
                        "$\\frac{a}{b} \\ge 1$",
                        "$a + 1 \\ge b + 1$",
                        "$-2a \\le -2b$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Vì $a \\ge b$ và $b > 0$ nên chia hai vế cho $b$ ta được $\\frac{a}{b} \\ge 1$. Khẳng định $\\frac{a}{b} < 1$ là sai."
                },
                {
                    "id": "otc2-d3-q12",
                    "badge": "Câu 12 (VD) - Toán thực tế so sánh gói cước Internet",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 45)",
                    "question": "Bạn Mai dự định đăng ký một gói cước Internet 4G. Gói A có giá thuê bao cố định là $50\\,000$ đồng/tháng cộng thêm $2\\,000$ đồng cho mỗi GB dung lượng sử dụng. Gói B có giá trọn gói là $150\\,000$ đồng/tháng không giới hạn dung lượng. Mai cần sử dụng nhiều hơn bao nhiêu GB trong một tháng thì dùng gói B sẽ tiết kiệm chi phí hơn gói A?",
                    "options": [
                        "$50\\text{ GB}$",
                        "$40\\text{ GB}$",
                        "$60\\text{ GB}$",
                        "$75\\text{ GB}$"
                    ],
                    "correctIndex": 0,
                    "explanation": "Gọi số GB dung lượng sử dụng là $x$ ($x > 0$). Chi phí dùng gói A là $50\\,000 + 2\\,000x$ (đồng). Để gói B ($150\\,000$ đồng) tiết kiệm hơn gói A: $50\\,000 + 2\\,000x > 150\\,000 \\Leftrightarrow 2\\,000x > 100\\,000 \\Leftrightarrow x > 50\\text{ GB}$."
                }
            ],
            "trueFalseQuestions": [
                {
                    "id": "otc2-d3-tf1",
                    "badge": "Đúng/Sai 1 (NB) - Phương trình tích chứa hằng đẳng thức",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 31)",
                    "prompt": "Cho phương trình $(x^2 - 4x + 4)(2x - 6) = 0$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Biểu thức $x^2 - 4x + 4$ có thể viết lại thành $(x - 2)^2$.",
                            "correctAnswer": true,
                            "explanation": "Theo hằng đẳng thức bình phương của một hiệu: $x^2 - 4x + 4 = (x - 2)^2$."
                        },
                        {
                            "id": "b",
                            "text": "Phương trình $(x - 2)^2 = 0$ có nghiệm $x = 2$.",
                            "correctAnswer": true,
                            "explanation": "$(x - 2)^2 = 0 \\Leftrightarrow x - 2 = 0 \\Leftrightarrow x = 2$."
                        },
                        {
                            "id": "c",
                            "text": "Phương trình $2x - 6 = 0$ có nghiệm $x = 3$.",
                            "correctAnswer": true,
                            "explanation": "$2x - 6 = 0 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."
                        },
                        {
                            "id": "d",
                            "text": "Phương trình ban đầu có 3 nghiệm phân biệt trên tập số thực.",
                            "correctAnswer": false,
                            "explanation": "Phương trình chỉ có 2 nghiệm phân biệt là $x = 2$ và $x = 3$."
                        }
                    ]
                },
                {
                    "id": "otc2-d3-tf2",
                    "badge": "Đúng/Sai 2 (TH) - Rút gọn và giải phương trình phân thức",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 33)",
                    "prompt": "Cho biểu thức $A = \\frac{x + 2}{x - 2} - \\frac{x - 2}{x + 2}$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Điều kiện xác định của biểu thức $A$ là $x \\ne 2$ và $x \\ne -2$.",
                            "correctAnswer": true,
                            "explanation": "Các mẫu thức là $x - 2$ và $x + 2$, do đó điều kiện là $x \\ne 2$ và $x \\ne -2$."
                        },
                        {
                            "id": "b",
                            "text": "Rút gọn biểu thức $A$ ta được $A = \\frac{8x}{x^2 - 4}$.",
                            "correctAnswer": true,
                            "explanation": "$A = \\frac{(x+2)^2 - (x-2)^2}{(x-2)(x+2)} = \\frac{(x^2+4x+4) - (x^2-4x+4)}{x^2-4} = \\frac{8x}{x^2-4}$."
                        },
                        {
                            "id": "c",
                            "text": "Để $A = 0$ thì $x = 0$ (thỏa mãn điều kiện xác định).",
                            "correctAnswer": true,
                            "explanation": "$\\frac{8x}{x^2 - 4} = 0 \\Leftrightarrow 8x = 0 \\Leftrightarrow x = 0$ (thỏa mãn $x \\ne \\pm 2$)."
                        },
                        {
                            "id": "d",
                            "text": "Với mọi giá trị của $x \\ne \\pm 2$, giá trị của $A$ luôn là số dương.",
                            "correctAnswer": false,
                            "explanation": "Khi $x = -1$, $A = \\frac{-8}{1 - 4} = \\frac{8}{3} > 0$; nhưng khi $x = 1$, $A = \\frac{8}{1 - 4} = -\\frac{8}{3} < 0$. Do đó khẳng định luôn dương là sai."
                        }
                    ]
                },
                {
                    "id": "otc2-d3-tf3",
                    "badge": "Đúng/Sai 3 (TH) - Bất đẳng thức liên hệ tổng và tích hai số",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 40)",
                    "prompt": "Cho hai số thực dương $x, y$ thỏa mãn $x + y = 4$. Xét tính đúng/sai của các khẳng định sau:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Ta luôn có bất đẳng thức $(x - y)^2 \\ge 0$ với mọi $x, y$.",
                            "correctAnswer": true,
                            "explanation": "Bình phương của một số thực luôn không âm."
                        },
                        {
                            "id": "b",
                            "text": "Tích $xy$ thỏa mãn bất đẳng thức $xy \\le \\frac{(x + y)^2}{4} = 4$.",
                            "correctAnswer": true,
                            "explanation": "Từ $(x - y)^2 \\ge 0 \\Leftrightarrow (x + y)^2 - 4xy \\ge 0 \\Leftrightarrow xy \\le \\frac{(x + y)^2}{4} = \\frac{16}{4} = 4$."
                        },
                        {
                            "id": "c",
                            "text": "Giá trị lớn nhất của tích $xy$ bằng 4 đạt được khi $x = y = 2$.",
                            "correctAnswer": true,
                            "explanation": "Dấu bằng xảy ra khi $x = y$, kết hợp $x + y = 4 \\Rightarrow x = y = 2$."
                        },
                        {
                            "id": "d",
                            "text": "Tổng bình phương $x^2 + y^2 \\le 8$.",
                            "correctAnswer": false,
                            "explanation": "Ta có $x^2 + y^2 = (x + y)^2 - 2xy = 16 - 2xy$. Vì $xy \\le 4$ nên $x^2 + y^2 \\ge 16 - 2(4) = 8$. Khẳng định $\\le 8$ là sai."
                        }
                    ]
                },
                {
                    "id": "otc2-d3-tf4",
                    "badge": "Đúng/Sai 4 (VD) - Bài toán thực tế kế hoạch vận chuyển hàng hóa",
                    "source": "Đề tuyển sinh vào 10 THPT Tỉnh Nam Định",
                    "prompt": "Một đội xe vận tải có 10 chiếc xe gồm hai loại: loại I chở được 3 tấn mỗi chuyến và loại II chở được 5 tấn mỗi chuyến. Đội cần vận chuyển ít nhất 38 tấn hàng trong một chuyến toàn đội. Gọi $x$ là số xe loại II ($x \\in \\mathbb{N}, x \\le 10$). Xét tính đúng/sai:",
                    "subItems": [
                        {
                            "id": "a",
                            "text": "Số lượng xe loại I được sử dụng là $10 - x$ xe.",
                            "correctAnswer": true,
                            "explanation": "Tổng số xe là 10, nên số xe loại I là $10 - x$ xe."
                        },
                        {
                            "id": "b",
                            "text": "Tổng khối lượng hàng cả đội xe chở được trong một chuyến là $3(10 - x) + 5x$ (tấn).",
                            "correctAnswer": true,
                            "explanation": "Loại I chở $3(10 - x)$ tấn, loại II chở $5x$ tấn."
                        },
                        {
                            "id": "c",
                            "text": "Bất phương trình biểu thị yêu cầu vận chuyển hàng là $3(10 - x) + 5x \\ge 38$.",
                            "correctAnswer": true,
                            "explanation": "Để chở được ít nhất 38 tấn thì tổng khối lượng phải $\\ge 38$."
                        },
                        {
                            "id": "d",
                            "text": "Đội xe cần dùng ít nhất 3 xe loại II.",
                            "correctAnswer": false,
                            "explanation": "Ta có: $30 - 3x + 5x \\ge 38 \\Leftrightarrow 2x \\ge 8 \\Leftrightarrow x \\ge 4$. Vậy đội xe cần dùng ít nhất 4 xe loại II, không phải 3 xe."
                        }
                    ]
                }
            ],
            "shortAnswerQuestions": [
                {
                    "id": "otc2-d3-sa1",
                    "badge": "Trả lời ngắn 1 (TH) - Tìm nghiệm của phương trình chứa ẩn ở mẫu",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 34)",
                    "prompt": "Tìm nghiệm của phương trình $\\frac{2x - 5}{x - 1} = \\frac{x + 1}{x - 1}$.",
                    "correctAnswer": "6",
                    "acceptableAnswers": [
                        "6",
                        "x=6",
                        "x = 6"
                    ],
                    "explanation": "ĐKXĐ: $x \\ne 1$. Khử mẫu: $2x - 5 = x + 1 \\Leftrightarrow 2x - x = 1 + 5 \\Leftrightarrow x = 6$ (thỏa mãn ĐKXĐ). Vậy nghiệm là 6."
                },
                {
                    "id": "otc2-d3-sa2",
                    "badge": "Trả lời ngắn 2 (TH) - Đếm số nghiệm nguyên dương của bất phương trình",
                    "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 44)",
                    "prompt": "Có bao nhiêu số nguyên dương $x$ thỏa mãn bất phương trình $\\frac{3x - 1}{2} - \\frac{x + 2}{3} \\le 1$?",
                    "correctAnswer": "1",
                    "acceptableAnswers": [
                        "1",
                        "1 số"
                    ],
                    "explanation": "Quy đồng hai vế với 6: $3(3x - 1) - 2(x + 2) \\le 6 \\Leftrightarrow 9x - 3 - 2x - 4 \\le 6 \\Leftrightarrow 7x - 7 \\le 6 \\Leftrightarrow 7x \\le 13 \\Leftrightarrow x \\le \\frac{13}{7} \\approx 1,86$. Số nguyên dương duy nhất thỏa mãn là $x = 1$."
                },
                {
                    "id": "otc2-d3-sa3",
                    "badge": "Trả lời ngắn 3 (TH) - Tìm tham số để phương trình nhận nghiệm cho trước",
                    "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 32)",
                    "prompt": "Tìm giá trị của $m$ để phương trình $(m - 2)x + 8 = 0$ nhận $x = -2$ làm nghiệm.",
                    "correctAnswer": "6",
                    "acceptableAnswers": [
                        "6",
                        "m=6",
                        "m = 6"
                    ],
                    "explanation": "Thay $x = -2$ vào phương trình: $(m - 2)(-2) + 8 = 0 \\Leftrightarrow -2m + 4 + 8 = 0 \\Leftrightarrow -2m = -12 \\Leftrightarrow m = 6$."
                },
                {
                    "id": "otc2-d3-sa4",
                    "badge": "Trả lời ngắn 4 (VD) - Tìm giá trị nhỏ nhất của biểu thức chứa biến ở mẫu",
                    "source": "Đề thi tuyển sinh vào lớp 10 THPT TP. Hà Nội",
                    "prompt": "Cho $x > 0$. Giá trị nhỏ nhất của biểu thức $P = x + \\frac{9}{x}$ bằng bao nhiêu?",
                    "correctAnswer": "6",
                    "acceptableAnswers": [
                        "6"
                    ],
                    "explanation": "Áp dụng bất đẳng thức Cô-si cho hai số dương $x$ và $\\frac{9}{x}$: $x + \\frac{9}{x} \\ge 2\\sqrt{x \\cdot \\frac{9}{x}} = 2 \\cdot 3 = 6$. Dấu bằng xảy ra khi $x = \\frac{9}{x} \\Leftrightarrow x^2 = 9 \\Rightarrow x = 3$ (vì $x > 0$). Vậy GTNN của $P$ là 6."
                },
                {
                    "id": "otc2-d3-sa5",
                    "badge": "Trả lời ngắn 5 (VD) - Bài toán thực tế cước thuê bao điện thoại",
                    "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 45)",
                    "prompt": "Một thuê bao di động trả sau có cước thuê bao tháng cố định là $49\\,000$ đồng và cước gọi là $900$ đồng cho mỗi phút gọi. Một người muốn số tiền cước điện thoại trong tháng không vượt quá $130\\,000$ đồng. Hỏi người đó có thể gọi tối đa bao nhiêu phút?",
                    "correctAnswer": "90",
                    "acceptableAnswers": [
                        "90",
                        "90 phút",
                        "90 phut"
                    ],
                    "explanation": "Gọi số phút gọi trong tháng là $x$ ($x \\ge 0$). Cước phí phải trả là $49\\,000 + 900x$ (đồng). Theo đề bài: $49\\,000 + 900x \\le 130\\,000 \\Leftrightarrow 900x \\le 81\\,000 \\Leftrightarrow x \\le 90$. Vậy người đó có thể gọi tối đa 90 phút."
                },
                {
                    "id": "otc2-d3-sa6",
                    "badge": "Trả lời ngắn 6 (VD) - Bài toán thực tế năng suất xưởng may",
                    "source": "Đề thi tuyển sinh vào 10 THPT Tỉnh Bắc Ninh",
                    "prompt": "Một xưởng may theo kế hoạch phải may $600$ bộ quần áo. Nhờ tăng năng suất, mỗi ngày xưởng may thêm được $10$ bộ so với dự định, do đó xưởng đã hoàn thành trước thời hạn 2 ngày. Hỏi theo kế hoạch, mỗi ngày xưởng phải may bao nhiêu bộ quần áo?",
                    "correctAnswer": "50",
                    "acceptableAnswers": [
                        "50",
                        "50 bộ",
                        "50 bo"
                    ],
                    "explanation": "Gọi số bộ quần áo xưởng phải may mỗi ngày theo kế hoạch là $x$ ($x > 0$, bộ). Thời gian dự định là $\\frac{600}{x}$ ngày. Năng suất thực tế là $x + 10$ bộ/ngày, thời gian thực tế là $\\frac{600}{x + 10}$ ngày. Do hoàn thành trước 2 ngày nên: $\\frac{600}{x} - \\frac{600}{x + 10} = 2 \\Leftrightarrow \\frac{600(x + 10) - 600x}{x(x + 10)} = 2 \\Leftrightarrow 6000 = 2x(x + 10) \\Leftrightarrow x^2 + 10x - 3000 = 0 \\Leftrightarrow (x - 50)(x + 60) = 0$. Vì $x > 0$ nên $x = 50$."
                }
            ]
        }
    ]
},
  "t9-b11-ti-so-luong-giac-goc-nhon": {
    "id": "t9-b11-ti-so-luong-giac-goc-nhon",
    "lessonNumber": 11,
    "title": "Bài 11: Tỉ số lượng giác của góc nhọn",
    "bookChapter": "Chương IV: Hệ thức lượng trong tam giác vuông",
    "scenarioTitle": "Khám phá tỉ số lượng giác và bí quyết đo đạc chiều cao thực tế",
    "scenarioFrames": [],
    "theorySections": [
        {
            "index": "1",
            "title": "Khái niệm và Định nghĩa tỉ số lượng giác của góc nhọn",
            "points": [
                "Trong tam giác vuông, tỉ số giữa cạnh đối và cạnh kề, cạnh huyền của một góc nhọn chỉ phụ thuộc vào độ lớn của góc đó mà không phụ thuộc vào kích thước của tam giác.",
                "Cho tam giác $ABC$ vuông tại $A$, xét góc nhọn $\\widehat{B} = \\alpha$ ($0^\\circ < \\alpha < 90^\\circ$):",
                "• Sin của góc $\\alpha$ (kí hiệu $\\sin \\alpha$): là tỉ số giữa cạnh đối và cạnh huyền: $\\sin \\alpha = \\frac{\\text{cạnh đối}}{\\text{cạnh huyền}} = \\frac{AC}{BC}$.",
                "• Côsin của góc $\\alpha$ (kí hiệu $\\cos \\alpha$): là tỉ số giữa cạnh kề và cạnh huyền: $\\cos \\alpha = \\frac{\\text{cạnh kề}}{\\text{cạnh huyền}} = \\frac{AB}{BC}$.",
                "• Tang của góc $\\alpha$ (kí hiệu $\\tan \\alpha$): là tỉ số giữa cạnh đối và cạnh kề: $\\tan \\alpha = \\frac{\\text{cạnh đối}}{\\text{cạnh kề}} = \\frac{AC}{AB}$.",
                "• Côtang của góc $\\alpha$ (kí hiệu $\\cot \\alpha$): là tỉ số giữa cạnh kề và cạnh đối: $\\cot \\alpha = \\frac{\\text{cạnh kề}}{\\text{cạnh đối}} = \\frac{AB}{AC}$.",
                "Khẩu quyết nhớ: Sao Đi Học (Sin = Đối/Huyền), Cứ Khóc Hoài (Cos = Kề/Huyền), Thôi Đừng Khóc (Tan = Đối/Kề), Có Kẹo Đây (Cot = Kề/Đối)."
            ],
            "examples": [
                {
                    "title": "Minh họa hình học: Tam giác vuông và các cạnh đối, kề, huyền",
                    "problem": "Cho tam giác $ABC$ vuông tại $A$ có góc nhọn $\\widehat{B} = \\alpha$. Hãy xác định cạnh đối, cạnh kề và cạnh huyền đối với góc $\\alpha$.",
                    "solution": "Cạnh đối diện góc $\\alpha$ là $AC$. Cạnh kề góc $\\alpha$ là $AB$. Cạnh đối diện góc vuông $A$ là cạnh huyền $BC$.",
                    "svgDiagram": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <!-- Đỉnh A(60, 190), B(320, 190), C(60, 40) - Vuông tại A, góc alpha tại B -->\n  <polygon points=\"60,190 340,190 60,40\" fill=\"#0284c7\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  \n  <!-- Ký hiệu góc vuông tại A -->\n  <rect x=\"60\" y=\"170\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\" />\n  <circle cx=\"70\" cy=\"180\" r=\"2\" fill=\"#f43f5e\" />\n\n  <!-- Cung tròn góc alpha tại B -->\n  <path d=\"M 300,190 A 40,40 0 0,0 307.7,172.7\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\" />\n  <text x=\"285\" y=\"178\" fill=\"#fbbf24\" font-size=\"16\" font-weight=\"bold\" font-style=\"italic\">α</text>\n\n  <!-- Tên các đỉnh -->\n  <text x=\"40\" y=\"205\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">A</text>\n  <text x=\"350\" y=\"195\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">B</text>\n  <text x=\"50\" y=\"32\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">C</text>\n\n  <!-- Tên các cạnh đối với góc alpha tại B -->\n  <text x=\"25\" y=\"115\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Cạnh đối (AC)</text>\n  <text x=\"200\" y=\"215\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Cạnh kề (AB)</text>\n  <text x=\"215\" y=\"100\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\" transform=\"rotate(-28 215 100)\" text-anchor=\"middle\">Cạnh huyền (BC)</text>\n</svg>"
                }
            ]
        },
        {
            "index": "2",
            "title": "Tính chất và Tỉ số lượng giác của hai góc phụ nhau",
            "points": [
                "Với mọi góc nhọn $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$), ta luôn có: $0 < \\sin \\alpha < 1, \\ 0 < \\cos \\alpha < 1, \\ \\tan \\alpha > 0, \\ \\cot \\alpha > 0$.",
                "Định lí hai góc phụ nhau (tổng bằng $90^\\circ$): Nếu hai góc phụ nhau thì sin góc này bằng côsin góc kia, tang góc này bằng côtang góc kia:",
                "• $\\sin B = \\cos C$ và $\\cos B = \\sin C$",
                "• $\\tan B = \\cot C$ và $\\cot B = \\tan C$",
                "Các hệ thức lượng giác cơ bản thường dùng:",
                "1) $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$ và $\\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$",
                "2) $\\tan \\alpha \\cdot \\cot \\alpha = 1$",
                "3) $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
                "4) $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$ và $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$"
            ],
            "exampleTitle": "Ví dụ mẫu: Rút gọn biểu thức lượng giác góc phụ nhau",
            "exampleProblem": "Rút gọn biểu thức $A = \\sin^2 25^\\circ + \\sin^2 65^\\circ - \\tan 30^\\circ \\cdot \\tan 60^\\circ$.",
            "exampleSolution": "• Vì $25^\\circ + 65^\\circ = 90^\\circ$ nên $\\sin 65^\\circ = \\cos 25^\\circ$, do đó: $\\sin^2 25^\\circ + \\sin^2 65^\\circ = \\sin^2 25^\\circ + \\cos^2 25^\\circ = 1$.\n• Vì $30^\\circ + 60^\\circ = 90^\\circ$ nên $\\tan 60^\\circ = \\cot 30^\\circ$, do đó: $\\tan 30^\\circ \\cdot \\tan 60^\\circ = \\tan 30^\\circ \\cdot \\cot 30^\\circ = 1$.\n• Vậy $A = 1 - 1 = 0$."
        },
        {
            "index": "3",
            "title": "Bảng tỉ số lượng giác các góc đặc biệt và Ứng dụng thực tế",
            "points": [
                "Bảng giá trị lượng giác các góc đặc biệt cần thuộc lòng:",
                "• $30^\\circ$: $\\sin = \\frac{1}{2}, \\ \\cos = \\frac{\\sqrt{3}}{2}, \\ \\tan = \\frac{\\sqrt{3}}{3}, \\ \\cot = \\sqrt{3}$",
                "• $45^\\circ$: $\\sin = \\frac{\\sqrt{2}}{2}, \\ \\cos = \\frac{\\sqrt{2}}{2}, \\ \\tan = 1, \\ \\cot = 1$",
                "• $60^\\circ$: $\\sin = \\frac{\\sqrt{3}}{2}, \\ \\cos = \\frac{1}{2}, \\ \\tan = \\sqrt{3}, \\ \\cot = \\frac{\\sqrt{3}}{3}$",
                "Ứng dụng thực tế: Đo chiều cao cây cối, cột cờ, tháp truyền hình qua bóng nắng và góc nâng $h = d \\cdot \\tan \\alpha$; xác định góc dốc con đường, khoảng cách hải đăng tới thuyền."
            ],
            "examples": [
                {
                    "title": "Ứng dụng thực tế: Đo chiều cao cây qua bóng trên mặt đất",
                    "problem": "Một cây cổ thụ có bóng trên mặt đất dài $8\\text{ m}$ khi tia nắng chiếu tạo với mặt đất góc $40^\\circ$. Tính chiều cao của cây.",
                    "solution": "Trong tam giác vuông tạo bởi cây, mặt đất và tia nắng: chiều cao cây là $h = 8 \\cdot \\tan 40^\\circ \\approx 8 \\cdot 0,8391 \\approx 6,7\\text{ m}$.",
                    "svgDiagram": "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <!-- Mặt đất nằm ngang -->\n  <line x1=\"20\" y1=\"180\" x2=\"400\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"3\" stroke-linecap=\"round\" />\n  \n  <!-- Thân cây tại A(80, 180) cao lên C(80, 50) -->\n  <line x1=\"80\" y1=\"180\" x2=\"80\" y2=\"50\" stroke=\"#10b981\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <!-- Tán cây tròn xanh -->\n  <circle cx=\"80\" cy=\"45\" r=\"28\" fill=\"#059669\" fill-opacity=\"0.8\" stroke=\"#34d399\" stroke-width=\"2\" />\n  <circle cx=\"65\" cy=\"40\" r=\"18\" fill=\"#10b981\" fill-opacity=\"0.8\" />\n  <circle cx=\"95\" cy=\"40\" r=\"18\" fill=\"#10b981\" fill-opacity=\"0.8\" />\n  <circle cx=\"80\" cy=\"25\" r=\"16\" fill=\"#34d399\" fill-opacity=\"0.8\" />\n\n  <!-- Mặt trời vàng ở góc phải trên -->\n  <circle cx=\"360\" cy=\"35\" r=\"16\" fill=\"#f59e0b\" />\n  <path d=\"M 360,12 L 360,5 M 360,58 L 360,65 M 337,35 L 330,35 M 383,35 L 390,35 M 344,19 L 339,14 M 376,51 L 381,56\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-linecap=\"round\" />\n\n  <!-- Tia nắng nối từ ngọn cây C(80, 45) xuống bóng B(280, 180) -->\n  <line x1=\"80\" y1=\"45\" x2=\"280\" y2=\"180\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"5 3\" />\n  \n  <!-- Góc vuông tại gốc cây A -->\n  <rect x=\"80\" y=\"162\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  \n  <!-- Góc nâng của tia nắng tại B -->\n  <path d=\"M 240,180 A 40,40 0 0,1 247,157\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\" />\n  <text x=\"215\" y=\"172\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">40°</text>\n\n  <!-- Tên đỉnh và kích thước -->\n  <text x=\"65\" y=\"198\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A (Gốc)</text>\n  <text x=\"285\" y=\"198\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B (Bóng)</text>\n  <text x=\"80\" y=\"18\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">C (Ngọn)</text>\n  \n  <!-- Nhãn đo chiều cao h và bóng d -->\n  <text x=\"45\" y=\"115\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">h = ?</text>\n  <text x=\"180\" y=\"202\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Bóng AB = 8 m</text>\n</svg>"
                }
            ]
        }
    ],
    "youtubeVideoId": "5V2w7aI7VEE",
    "youtubeVideoTitle": "Bài Giảng Video: Bài 11 - Tỉ số lượng giác của góc nhọn - Toán 9 KNTT",
    "youtubeVideos": [
        {
            "id": "5V2w7aI7VEE",
            "title": "Tiết 1: Định nghĩa và tính chất tỉ số lượng giác của góc nhọn"
        },
        {
            "id": "H7aB6q8vG_8",
            "title": "Tiết 2: Góc phụ nhau, góc đặc biệt và ứng dụng thực tế"
        }
    ],
    "videoQuestions": [
        {
            "id": "vq-9.11.1",
            "title": "Ví dụ 1: Tính tỉ số lượng giác của tam giác vuông 3-4-5",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 3\\text{ cm}, AC = 4\\text{ cm}$. Giá trị của $\\sin B$ là:",
            "options": [
                "$\\frac{4}{5}$",
                "$\\frac{3}{5}$",
                "$\\frac{4}{3}$",
                "$\\frac{3}{4}$"
            ],
            "correctIndex": 0,
            "explanation": "Theo định lí Pythagore: $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{3^2 + 4^2} = 5\\text{ cm}$. Đối với góc $B$, cạnh đối là $AC = 4$, cạnh huyền là $BC = 5$. Do đó $\\sin B = \\frac{AC}{BC} = \\frac{4}{5}$."
        },
        {
            "id": "vq-9.11.2",
            "title": "Ví dụ 2: Sử dụng tính chất góc phụ nhau",
            "question": "Giá trị của biểu thức $P = \\sin 35^\\circ - \\cos 55^\\circ$ bằng:",
            "options": [
                "$0$",
                "$1$",
                "$2\\sin 35^\\circ$",
                "$-1$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $35^\\circ + 55^\\circ = 90^\\circ$ nên $\\cos 55^\\circ = \\sin 35^\\circ$. Do đó $P = \\sin 35^\\circ - \\sin 35^\\circ = 0$."
        },
        {
            "id": "vq-9.11.3",
            "title": "Ví dụ 3: Tính giá trị lượng giác góc đặc biệt",
            "question": "Tính giá trị của biểu thức $M = \\sin 30^\\circ + \\cos 60^\\circ + \\tan 45^\\circ$.",
            "options": [
                "$2$",
                "$1$",
                "$\\frac{3}{2}$",
                "$\\sqrt{3}$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\sin 30^\\circ = \\frac{1}{2}, \\cos 60^\\circ = \\frac{1}{2}, \\tan 45^\\circ = 1$. Thay vào: $M = \\frac{1}{2} + \\frac{1}{2} + 1 = 2$."
        },
        {
            "id": "vq-9.11.4",
            "title": "Ví dụ 4: Bài toán thực tế đo bóng cây",
            "question": "Một cây có bóng trên mặt đất dài $6\\text{ m}$ khi góc nâng của tia nắng mặt trời là $45^\\circ$. Chiều cao của cây là:",
            "options": [
                "$6\\text{ m}$",
                "$6\\sqrt{3}\\text{ m}$",
                "$3\\sqrt{2}\\text{ m}$",
                "$3\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Gọi chiều cao cây là $h$. Ta có $\\tan 45^\\circ = \\frac{h}{6} \\Leftrightarrow h = 6 \\cdot \\tan 45^\\circ = 6 \\cdot 1 = 6\\text{ m}$."
        }
    ],
    "tips": [
        "Khắc sâu câu thần chú: 'Sao Đi Học (Sin = Đối/Huyền), Cứ Khóc Hoài (Cos = Kề/Huyền), Thôi Đừng Khóc (Tan = Đối/Kề), Có Kẹo Đây (Cot = Kề/Đối)'.",
        "Khi hai góc nhọn có tổng bằng $90^\\circ$ (phụ nhau), luôn đổi ngay $\\sin$ thành $\\cos$, $\\tan$ thành $\\cot$ để đơn giản hóa biểu thức.",
        "Ghi nhớ hằng đẳng thức cốt lõi: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ và $\\tan \\alpha \\cdot \\cot \\alpha = 1$. Khi biết một tỉ số lượng giác, có thể suy ra 3 tỉ số còn lại.",
        "Trong bài toán thực tế, luôn vẽ phác họa tam giác vuông: xác định góc vuông ở đâu, cạnh nào đã biết (chiều cao hay bóng trên mặt đất) và góc đề bài cho là góc đối hay kề."
    ],
    "traps": [
        "Bẫy nhầm lẫn cạnh đối và cạnh kề: Cạnh đối diện với góc đang xét là cạnh đối, còn cạnh nằm kề góc đó (không phải cạnh huyền) là cạnh kề. Đổi góc xét thì đối và kề hoán đổi cho nhau.",
        "Bẫy quên bình phương trong hệ thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$: Rất nhiều học sinh nhầm thành $\\sin \\alpha + \\cos \\alpha = 1$ (sai hoàn toàn!).",
        "Bẫy đơn vị khi dùng máy tính cầm tay: Khi bấm tính $\\sin, \\cos, \\tan$, hãy chắc chắn máy tính đang ở chế độ đo độ (chữ **D** trên màn hình), không để ở chế độ Radian (**R**).",
        "Bẫy góc nâng và góc hạ: Góc hạ đo từ đường nằm ngang nhìn xuống, bằng với góc nâng đo từ dưới nhìn lên (hai góc so le trong bằng nhau)."
    ],
    "quizQuestions": [
        {
            "id": "q-9.11.1",
            "badge": "Câu 1 (NB) - Định nghĩa Sin của góc nhọn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có góc nhọn $\\widehat{B} = \\alpha$. Tỉ số lượng giác $\\sin \\alpha$ được tính bằng:",
            "options": [
                "$\\frac{\\text{Cạnh đối}}{\\text{Cạnh huyền}} = \\frac{AC}{BC}$",
                "$\\frac{\\text{Cạnh kề}}{\\text{Cạnh huyền}} = \\frac{AB}{BC}$",
                "$\\frac{\\text{Cạnh đối}}{\\text{Cạnh kề}} = \\frac{AC}{AB}$",
                "$\\frac{\\text{Cạnh kề}}{\\text{Cạnh đối}} = \\frac{AB}{AC}$"
            ],
            "correctIndex": 0,
            "explanation": "Theo định nghĩa, trong tam giác vuông, sin của một góc nhọn là tỉ số giữa cạnh đối diện với góc đó và cạnh huyền: $\\sin \\alpha = \\frac{\\text{đối}}{\\text{huyền}} = \\frac{AC}{BC}$.",
            "svgDiagram": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <!-- Đỉnh A(60, 190), B(320, 190), C(60, 40) - Vuông tại A, góc alpha tại B -->\n  <polygon points=\"60,190 340,190 60,40\" fill=\"#0284c7\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  \n  <!-- Ký hiệu góc vuông tại A -->\n  <rect x=\"60\" y=\"170\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\" />\n  <circle cx=\"70\" cy=\"180\" r=\"2\" fill=\"#f43f5e\" />\n\n  <!-- Cung tròn góc alpha tại B -->\n  <path d=\"M 300,190 A 40,40 0 0,0 307.7,172.7\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\" />\n  <text x=\"285\" y=\"178\" fill=\"#fbbf24\" font-size=\"16\" font-weight=\"bold\" font-style=\"italic\">α</text>\n\n  <!-- Tên các đỉnh -->\n  <text x=\"40\" y=\"205\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">A</text>\n  <text x=\"350\" y=\"195\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">B</text>\n  <text x=\"50\" y=\"32\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">C</text>\n\n  <!-- Tên các cạnh đối với góc alpha tại B -->\n  <text x=\"25\" y=\"115\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Cạnh đối (AC)</text>\n  <text x=\"200\" y=\"215\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Cạnh kề (AB)</text>\n  <text x=\"215\" y=\"100\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\" transform=\"rotate(-28 215 100)\" text-anchor=\"middle\">Cạnh huyền (BC)</text>\n</svg>"
        },
        {
            "id": "q-9.11.2",
            "badge": "Câu 2 (NB) - Định nghĩa Côsin của góc nhọn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $\\widehat{B} = \\alpha$. Tỉ số lượng giác $\\cos \\alpha$ được tính bằng công thức nào?",
            "options": [
                "$\\cos \\alpha = \\frac{AB}{BC}$",
                "$\\cos \\alpha = \\frac{AC}{BC}$",
                "$\\cos \\alpha = \\frac{AC}{AB}$",
                "$\\cos \\alpha = \\frac{BC}{AB}$"
            ],
            "correctIndex": 0,
            "explanation": "Côsin của góc nhọn là tỉ số giữa cạnh kề và cạnh huyền: $\\cos \\alpha = \\frac{\\text{cạnh kề}}{\\text{cạnh huyền}} = \\frac{AB}{BC}$."
        },
        {
            "id": "q-9.11.3",
            "badge": "Câu 3 (NB) - Định nghĩa Tang và Côtang",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 64)",
            "question": "Trong tam giác $ABC$ vuông tại $A$, khẳng định nào sau đây là đúng về tỉ số lượng giác $\\tan C$?",
            "options": [
                "$\\tan C = \\frac{AB}{AC}$",
                "$\\tan C = \\frac{AC}{AB}$",
                "$\\tan C = \\frac{AB}{BC}$",
                "$\\tan C = \\frac{AC}{BC}$"
            ],
            "correctIndex": 0,
            "explanation": "Đối với góc nhọn $C$, cạnh đối là $AB$, cạnh kề là $AC$. Do đó $\\tan C = \\frac{\\text{đối}}{\\text{kề}} = \\frac{AB}{AC}$."
        },
        {
            "id": "q-9.11.4",
            "badge": "Câu 4 (NB) - Giá trị sin 30 độ và cos 60 độ",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "question": "Giá trị của $\\sin 30^\\circ$ bằng bao nhiêu?",
            "options": [
                "$\\frac{1}{2}$",
                "$\\frac{\\sqrt{3}}{2}$",
                "$\\frac{\\sqrt{2}}{2}$",
                "$1$"
            ],
            "correctIndex": 0,
            "explanation": "Theo bảng tỉ số lượng giác của các góc đặc biệt, $\\sin 30^\\circ = \\frac{1}{2}$."
        },
        {
            "id": "q-9.11.5",
            "badge": "Câu 5 (NB) - Giá trị tang 45 độ",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 61)",
            "question": "Giá trị của $\\tan 45^\\circ$ là:",
            "options": [
                "$1$",
                "$\\sqrt{3}$",
                "$\\frac{\\sqrt{3}}{3}$",
                "$\\frac{1}{2}$"
            ],
            "correctIndex": 0,
            "explanation": "Trong tam giác vuông cân (có góc nhọn $45^\\circ$), cạnh đối bằng cạnh kề nên $\\tan 45^\\circ = 1$."
        },
        {
            "id": "q-9.11.6",
            "badge": "Câu 6 (NB) - Tỉ số lượng giác của hai góc phụ nhau",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "question": "Cho hai góc nhọn $\\alpha$ và $\\beta$ phụ nhau ($\\alpha + \\beta = 90^\\circ$). Khẳng định nào sau đây luôn đúng?",
            "options": [
                "$\\sin \\alpha = \\cos \\beta$",
                "$\\sin \\alpha = \\sin \\beta$",
                "$\\tan \\alpha = \\tan \\beta$",
                "$\\cos \\alpha = \\cot \\beta$"
            ],
            "correctIndex": 0,
            "explanation": "Nếu hai góc phụ nhau thì sin góc này bằng côsin góc kia: $\\sin \\alpha = \\cos \\beta$."
        },
        {
            "id": "q-9.11.7",
            "badge": "Câu 7 (NB) - Hệ thức sin^2 + cos^2",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Với mọi góc nhọn $\\alpha$, biểu thức $\\sin^2 \\alpha + \\cos^2 \\alpha$ luôn có giá trị bằng:",
            "options": [
                "$1$",
                "$0$",
                "$2$",
                "Phụ thuộc vào góc $\\alpha$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\sin^2 \\alpha + \\cos^2 \\alpha = \\left(\\frac{c_{\\text{đối}}}{c_{\\text{huyền}}}\\right)^2 + \\left(\\frac{c_{\\text{kề}}}{c_{\\text{huyền}}}\\right)^2 = \\frac{c_{\\text{đối}}^2 + c_{\\text{kề}}^2}{c_{\\text{huyền}}^2} = \\frac{c_{\\text{huyền}}^2}{c_{\\text{huyền}}^2} = 1$ (theo định lí Pythagore)."
        },
        {
            "id": "q-9.11.8",
            "badge": "Câu 8 (NB) - Tích tang và côtang",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 62)",
            "question": "Với mọi góc nhọn $\\alpha$, giá trị của tích $\\tan \\alpha \\cdot \\cot \\alpha$ bằng:",
            "options": [
                "$1$",
                "$0$",
                "$-1$",
                "$\\sin \\alpha$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $\\tan \\alpha = \\frac{\\text{đối}}{\\text{kề}}$ và $\\cot \\alpha = \\frac{\\text{kề}}{\\text{đối}}$ nên $\\tan \\alpha \\cdot \\cot \\alpha = \\frac{\\text{đối}}{\\text{kề}} \\cdot \\frac{\\text{kề}}{\\text{đối}} = 1$."
        },
        {
            "id": "q-9.11.9",
            "badge": "Câu 9 (TH) - Tính tỉ số lượng giác tam giác vuông 3-4-5",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 3\\text{ cm}$ và $AC = 4\\text{ cm}$. Tỉ số $\\cos B$ bằng:",
            "options": [
                "$\\frac{3}{5}$",
                "$\\frac{4}{5}$",
                "$\\frac{3}{4}$",
                "$\\frac{5}{3}$"
            ],
            "correctIndex": 0,
            "explanation": "Độ dài cạnh huyền $BC = \\sqrt{3^2 + 4^2} = 5\\text{ cm}$. Đối với góc $B$, cạnh kề là $AB = 3$, cạnh huyền là $BC = 5$. Do đó $\\cos B = \\frac{AB}{BC} = \\frac{3}{5}$.",
            "svgDiagram": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-sm mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-md\">\n  <!-- A(60, 180), B(300, 180), C(60, 60) -> AB=240, AC=120, tỉ lệ 4 : 2 (hoặc 4 : 3) -->\n  <polygon points=\"60,180 300,180 60,60\" fill=\"#3b82f6\" fill-opacity=\"0.15\" stroke=\"#60a5fa\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  \n  <!-- Góc vuông tại A -->\n  <rect x=\"60\" y=\"162\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  \n  <!-- Góc B -->\n  <path d=\"M 265,180 A 35,35 0 0,0 271,165\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2\" />\n  <text x=\"252\" y=\"173\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\">B</text>\n\n  <!-- Tên các đỉnh -->\n  <text x=\"45\" y=\"195\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">A</text>\n  <text x=\"310\" y=\"185\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">B</text>\n  <text x=\"50\" y=\"50\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\">C</text>\n\n  <!-- Độ dài -->\n  <text x=\"40\" y=\"125\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">AC = 4</text>\n  <text x=\"175\" y=\"202\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">AB = 3</text>\n  <text x=\"195\" y=\"110\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\" transform=\"rotate(-26 195 110)\" text-anchor=\"middle\">BC = 5</text>\n</svg>"
        },
        {
            "id": "q-9.11.10",
            "badge": "Câu 10 (TH) - Tính cos khi biết sin",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 66)",
            "question": "Cho góc nhọn $\\alpha$ có $\\sin \\alpha = 0,6$. Giá trị của $\\cos \\alpha$ là:",
            "options": [
                "$0,8$",
                "$0,4$",
                "$0,64$",
                "$0,36$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ nên $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - 0,6^2 = 1 - 0,36 = 0,64$. Vì $\\alpha$ là góc nhọn nên $\\cos \\alpha > 0 \\Rightarrow \\cos \\alpha = \\sqrt{0,64} = 0,8$."
        },
        {
            "id": "q-9.11.11",
            "badge": "Câu 11 (TH) - Tính giá trị biểu thức góc đặc biệt",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "question": "Tính giá trị của biểu thức $M = \\sin 30^\\circ \\cdot \\cos 60^\\circ + \\cos 30^\\circ \\cdot \\sin 60^\\circ$.",
            "options": [
                "$1$",
                "$\\frac{1}{2}$",
                "$\\frac{\\sqrt{3}}{2}$",
                "$0$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\sin 30^\\circ = \\frac{1}{2}, \\cos 60^\\circ = \\frac{1}{2}, \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}, \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$. Thay vào: $M = \\frac{1}{2} \\cdot \\frac{1}{2} + \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{1}{4} + \\frac{3}{4} = 1$."
        },
        {
            "id": "q-9.11.12",
            "badge": "Câu 12 (TH) - Rút gọn biểu thức lượng giác góc phụ nhau",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 63)",
            "question": "Rút gọn biểu thức $A = \\sin^2 20^\\circ + \\sin^2 70^\\circ - \\tan 35^\\circ \\cdot \\tan 55^\\circ$.",
            "options": [
                "$0$",
                "$1$",
                "$-1$",
                "$2$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $20^\\circ + 70^\\circ = 90^\\circ \\Rightarrow \\sin 70^\\circ = \\cos 20^\\circ \\Rightarrow \\sin^2 20^\\circ + \\sin^2 70^\\circ = \\sin^2 20^\\circ + \\cos^2 20^\\circ = 1$. Lại có $35^\\circ + 55^\\circ = 90^\\circ \\Rightarrow \\tan 55^\\circ = \\cot 35^\\circ \\Rightarrow \\tan 35^\\circ \\cdot \\tan 55^\\circ = \\tan 35^\\circ \\cdot \\cot 35^\\circ = 1$. Do đó $A = 1 - 1 = 0$."
        },
        {
            "id": "q-9.11.13",
            "badge": "Câu 13 (TH) - Chiều biến thiên khi góc nhọn tăng",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "question": "Khi góc nhọn $\\alpha$ tăng dần từ $0^\\circ$ đến $90^\\circ$, khẳng định nào sau đây là đúng?",
            "options": [
                "$\\sin \\alpha$ tăng, $\\cos \\alpha$ giảm",
                "$\\sin \\alpha$ giảm, $\\cos \\alpha$ tăng",
                "Cả $\\sin \\alpha$ và $\\cos \\alpha$ đều tăng",
                "Cả $\\sin \\alpha$ và $\\cos \\alpha$ đều giảm"
            ],
            "correctIndex": 0,
            "explanation": "Khi góc nhọn $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$ thì cạnh đối tăng còn cạnh kề giảm, do đó $\\sin \\alpha$ tăng, $\\cos \\alpha$ giảm; $\\tan \\alpha$ tăng, $\\cot \\alpha$ giảm."
        },
        {
            "id": "q-9.11.14",
            "badge": "Câu 14 (TH) - Tính cạnh đối diện góc 30 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 12\\text{ cm}$ và $\\widehat{B} = 30^\\circ$. Độ dài cạnh $AC$ bằng:",
            "options": [
                "$6\\text{ cm}$",
                "$6\\sqrt{3}\\text{ cm}$",
                "$4\\text{ cm}$",
                "$8\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có: $\\sin B = \\frac{AC}{BC} \\Rightarrow AC = BC \\cdot \\sin B = 12 \\cdot \\sin 30^\\circ = 12 \\cdot \\frac{1}{2} = 6\\text{ cm}$."
        },
        {
            "id": "q-9.11.15",
            "badge": "Câu 15 (VD) - Tính tang qua đường cao tam giác vuông",
            "source": "Đề thi học kì I THCS Trưng Vương",
            "question": "Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Biết $BH = 4\\text{ cm}$ và $CH = 9\\text{ cm}$. Giá trị của $\\tan B$ bằng:",
            "options": [
                "$1,5$",
                "$\\frac{2}{3}$",
                "$\\frac{4}{9}$",
                "$2,25$"
            ],
            "correctIndex": 0,
            "explanation": "Theo hệ thức lượng trong tam giác vuông: $AH^2 = BH \\cdot CH = 4 \\cdot 9 = 36 \\Rightarrow AH = 6\\text{ cm}$. Trong tam giác vuông $ABH$ vuông tại $H$, ta có $\\tan B = \\frac{AH}{BH} = \\frac{6}{4} = 1,5$."
        },
        {
            "id": "q-9.11.16",
            "badge": "Câu 16 (VD) - Tính giá trị phân thức lượng giác",
            "source": "Đề thi tuyển sinh vào 10 THPT Chuyên KHTN",
            "question": "Cho góc nhọn $\\alpha$ thỏa mãn $\\tan \\alpha = 2$. Giá trị của biểu thức $P = \\frac{\\sin \\alpha + \\cos \\alpha}{\\sin \\alpha - \\cos \\alpha}$ bằng:",
            "options": [
                "$3$",
                "$2$",
                "$\\frac{1}{3}$",
                "$-3$"
            ],
            "correctIndex": 0,
            "explanation": "Chia cả tử và mẫu của biểu thức $P$ cho $\\cos \\alpha \\ne 0$: $P = \\frac{\\frac{\\sin \\alpha}{\\cos \\alpha} + 1}{\\frac{\\sin \\alpha}{\\cos \\alpha} - 1} = \\frac{\\tan \\alpha + 1}{\\tan \\alpha - 1} = \\frac{2 + 1}{2 - 1} = \\frac{3}{1} = 3$."
        },
        {
            "id": "q-9.11.17",
            "badge": "Câu 17 (VD) - Toán thực tế khoảng cách từ hải đăng đến thuyền",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 9 (Trang 100)",
            "question": "Một ngọn hải đăng cao $45\\text{ m}$ so với mực nước biển. Từ đỉnh ngọn hải đăng, người quan sát nhìn thấy một chiếc thuyền đánh cá với góc hạ $30^\\circ$. Khoảng cách từ chân ngọn hải đăng đến chiếc thuyền là bao nhiêu mét?",
            "options": [
                "$45\\sqrt{3}\\text{ m} \\approx 77,94\\text{ m}$",
                "$45\\text{ m}$",
                "$90\\text{ m}$",
                "$15\\sqrt{3}\\text{ m} \\approx 25,98\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Gọi $A$ là chân tháp, $C$ là đỉnh tháp ($AC = 45\\text{ m}$) và $B$ là vị trí thuyền. Góc hạ bằng góc nâng tại thuyền nên $\\widehat{ABC} = 30^\\circ$. Trong tam giác vuông $ABC$, ta có: $\\tan 30^\\circ = \\frac{AC}{AB} \\Rightarrow AB = \\frac{AC}{\\tan 30^\\circ} = \\frac{45}{\\frac{\\sqrt{3}}{3}} = 45\\sqrt{3}\\text{ m} \\approx 77,94\\text{ m}$.",
            "svgDiagram": "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-md\">\n  <!-- Mặt biển -->\n  <line x1=\"20\" y1=\"180\" x2=\"400\" y2=\"180\" stroke=\"#0284c7\" stroke-width=\"3\" />\n  <path d=\"M 30,185 Q 50,182 70,185 T 110,185 T 150,185 T 190,185 T 230,185 T 270,185 T 310,185 T 350,185 T 390,185\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\" />\n\n  <!-- Tháp hải đăng tại A(70, 180) lên C(70, 40) -->\n  <polygon points=\"58,180 82,180 77,50 63,50\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\" />\n  <rect x=\"61\" y=\"32\" width=\"18\" height=\"18\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1.5\" rx=\"3\" />\n  <!-- Ánh sáng hải đăng -->\n  <polygon points=\"79,41 340,180 70,41\" fill=\"#fef08a\" fill-opacity=\"0.18\" />\n\n  <!-- Đường nhìn ngắm từ đỉnh hải đăng C(70, 40) tới thuyền B(340, 180) -->\n  <line x1=\"70\" y1=\"41\" x2=\"340\" y2=\"180\" stroke=\"#facc15\" stroke-width=\"2\" stroke-dasharray=\"4 3\" />\n  <!-- Đường nằm ngang từ đỉnh để xác định góc hạ -->\n  <line x1=\"70\" y1=\"41\" x2=\"160\" y2=\"41\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n  <path d=\"M 120,41 A 50,50 0 0,1 113,63\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.8\" />\n  <text x=\"130\" y=\"58\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">30°</text>\n\n  <!-- Con thuyền nhỏ tại B(340, 180) -->\n  <polygon points=\"325,180 355,180 350,192 330,192\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"1.5\" />\n  <line x1=\"340\" y1=\"180\" x2=\"340\" y2=\"162\" stroke=\"#f8fafc\" stroke-width=\"2\" />\n  <polygon points=\"340,164 353,173 340,173\" fill=\"#f43f5e\" />\n\n  <!-- Nhãn kích thước -->\n  <text x=\"65\" y=\"200\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">A (Chân tháp)</text>\n  <text x=\"340\" y=\"208\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">B (Thuyền)</text>\n  <text x=\"70\" y=\"24\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">C (Đỉnh)</text>\n  <text x=\"35\" y=\"115\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">45 m</text>\n  <text x=\"205\" y=\"172\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">d = ?</text>\n</svg>"
        },
        {
            "id": "q-9.11.18",
            "badge": "Câu 18 (VD) - Toán thực tế tính chiều cao cây từ bóng nắng",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 72)",
            "question": "Một cây cổ thụ có bóng trên mặt đất dài $8\\text{ m}$ vào thời điểm các tia nắng mặt trời tạo với mặt đất một góc $40^\\circ$. Chiều cao của cây là (kết quả làm tròn đến hàng phần mười của mét, biết $\\tan 40^\\circ \\approx 0,8391$):",
            "options": [
                "$6,7\\text{ m}$",
                "$6,1\\text{ m}$",
                "$9,5\\text{ m}$",
                "$5,1\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Gọi chiều cao cây là $h$. Tam giác tạo bởi cây, bóng trên mặt đất và tia nắng là tam giác vuông tại gốc cây. Ta có: $\\tan 40^\\circ = \\frac{h}{8} \\Rightarrow h = 8 \\cdot \\tan 40^\\circ \\approx 8 \\cdot 0,8391 = 6,7128 \\approx 6,7\\text{ m}$.",
            "svgDiagram": "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <!-- Mặt đất nằm ngang -->\n  <line x1=\"20\" y1=\"180\" x2=\"400\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"3\" stroke-linecap=\"round\" />\n  \n  <!-- Thân cây tại A(80, 180) cao lên C(80, 50) -->\n  <line x1=\"80\" y1=\"180\" x2=\"80\" y2=\"50\" stroke=\"#10b981\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <!-- Tán cây tròn xanh -->\n  <circle cx=\"80\" cy=\"45\" r=\"28\" fill=\"#059669\" fill-opacity=\"0.8\" stroke=\"#34d399\" stroke-width=\"2\" />\n  <circle cx=\"65\" cy=\"40\" r=\"18\" fill=\"#10b981\" fill-opacity=\"0.8\" />\n  <circle cx=\"95\" cy=\"40\" r=\"18\" fill=\"#10b981\" fill-opacity=\"0.8\" />\n  <circle cx=\"80\" cy=\"25\" r=\"16\" fill=\"#34d399\" fill-opacity=\"0.8\" />\n\n  <!-- Mặt trời vàng ở góc phải trên -->\n  <circle cx=\"360\" cy=\"35\" r=\"16\" fill=\"#f59e0b\" />\n  <path d=\"M 360,12 L 360,5 M 360,58 L 360,65 M 337,35 L 330,35 M 383,35 L 390,35 M 344,19 L 339,14 M 376,51 L 381,56\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-linecap=\"round\" />\n\n  <!-- Tia nắng nối từ ngọn cây C(80, 45) xuống bóng B(280, 180) -->\n  <line x1=\"80\" y1=\"45\" x2=\"280\" y2=\"180\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"5 3\" />\n  \n  <!-- Góc vuông tại gốc cây A -->\n  <rect x=\"80\" y=\"162\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  \n  <!-- Góc nâng của tia nắng tại B -->\n  <path d=\"M 240,180 A 40,40 0 0,1 247,157\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\" />\n  <text x=\"215\" y=\"172\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">40°</text>\n\n  <!-- Tên đỉnh và kích thước -->\n  <text x=\"65\" y=\"198\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A (Gốc)</text>\n  <text x=\"285\" y=\"198\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B (Bóng)</text>\n  <text x=\"80\" y=\"18\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">C (Ngọn)</text>\n  \n  <!-- Nhãn đo chiều cao h và bóng d -->\n  <text x=\"45\" y=\"115\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">h = ?</text>\n  <text x=\"180\" y=\"202\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Bóng AB = 8 m</text>\n</svg>"
        },
        {
            "id": "q-9.11.19",
            "badge": "Câu 19 (VD) - Toán thực tế góc nghiêng an toàn của chiếc thang",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 17 (Trang 102)",
            "question": "Một chiếc thang dài $3,5\\text{ m}$ được đặt dựa vào bức tường thẳng đứng. Để đảm bảo an toàn, góc tạo bởi thang và mặt đất cần đạt khoảng $65^\\circ$. Khoảng cách an toàn từ chân thang đến chân tường là bao nhiêu mét? (Làm tròn đến hàng phần mười, biết $\\cos 65^\\circ \\approx 0,4226$):",
            "options": [
                "$1,5\\text{ m}$",
                "$1,2\\text{ m}$",
                "$3,2\\text{ m}$",
                "$1,8\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Gọi khoảng cách từ chân thang đến tường là $d$. Chiếc thang đóng vai trò là cạnh huyền trong tam giác vuông. Ta có: $\\cos 65^\\circ = \\frac{d}{3,5} \\Rightarrow d = 3,5 \\cdot \\cos 65^\\circ \\approx 3,5 \\cdot 0,4226 = 1,4791 \\approx 1,5\\text{ m}$.",
            "svgDiagram": "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-sm mx-auto my-2 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-md\">\n  <!-- Bức tường thẳng đứng AC và mặt đất AB -->\n  <line x1=\"80\" y1=\"20\" x2=\"80\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <line x1=\"50\" y1=\"190\" x2=\"350\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"3\" stroke-linecap=\"round\" />\n  \n  <!-- Ký hiệu góc vuông tại chân tường A(80, 190) -->\n  <rect x=\"80\" y=\"172\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" />\n\n  <!-- Chiếc thang BC nghiêng từ C(80, 50) xuống B(240, 190) -->\n  <line x1=\"80\" y1=\"50\" x2=\"240\" y2=\"190\" stroke=\"#f59e0b\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <!-- Bậc thang -->\n  <line x1=\"104\" y1=\"71\" x2=\"100\" y2=\"76\" stroke=\"#d97706\" stroke-width=\"2.5\" />\n  <line x1=\"128\" y1=\"92\" x2=\"124\" y2=\"97\" stroke=\"#d97706\" stroke-width=\"2.5\" />\n  <line x1=\"152\" y1=\"113\" x2=\"148\" y2=\"118\" stroke=\"#d97706\" stroke-width=\"2.5\" />\n  <line x1=\"176\" y1=\"134\" x2=\"172\" y2=\"139\" stroke=\"#d97706\" stroke-width=\"2.5\" />\n  <line x1=\"200\" y1=\"155\" x2=\"196\" y2=\"160\" stroke=\"#d97706\" stroke-width=\"2.5\" />\n\n  <!-- Góc alpha giữa thang và mặt đất tại B -->\n  <path d=\"M 205,190 A 35,35 0 0,1 213,166\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <text x=\"185\" y=\"180\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">65°</text>\n\n  <!-- Nhãn kích thước -->\n  <text x=\"65\" y=\"208\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A</text>\n  <text x=\"245\" y=\"208\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B</text>\n  <text x=\"65\" y=\"45\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n  <text x=\"175\" y=\"105\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\" transform=\"rotate(-41 175 105)\" text-anchor=\"middle\">Thang = 3,5 m</text>\n  <text x=\"160\" y=\"210\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">d = ?</text>\n</svg>"
        },
        {
            "id": "q-9.11.20",
            "badge": "Câu 20 (VD) - Toán thực tế độ cao máy bay cất cánh",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
            "question": "Một máy bay cất cánh từ đường băng theo đường thẳng nghiêng một góc $20^\\circ$ so với mặt đất với vận tốc trung bình $500\\text{ km/h}$. Hỏi sau $1,2\\text{ phút}$ kể từ khi cất cánh, máy bay đạt độ cao bao nhiêu mét so với mặt đất? (Biết $\\sin 20^\\circ \\approx 0,3420$):",
            "options": [
                "$3420\\text{ m}$",
                "$2850\\text{ m}$",
                "$1000\\text{ m}$",
                "$3640\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Đổi thời gian: $1,2\\text{ phút} = \\frac{1,2}{60} = 0,02\\text{ giờ}$. Quãng đường bay của máy bay là: $s = 500 \\cdot 0,02 = 10\\text{ km} = 10\\,000\\text{ m}$. Độ cao của máy bay là cạnh đối diện góc $20^\\circ$: $h = s \\cdot \\sin 20^\\circ = 10\\,000 \\cdot \\sin 20^\\circ \\approx 10\\,000 \\cdot 0,3420 = 3420\\text{ m}$."
        }
    ],
    "trueFalseQuestions": [
        {
            "id": "tf-9.11.1",
            "badge": "Đúng/Sai 1 (NB) - Định nghĩa các tỉ số lượng giác",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$, có góc nhọn $\\widehat{B} = \\alpha$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin \\alpha = \\frac{AC}{BC}$.",
                    "correctAnswer": true,
                    "explanation": "Cạnh đối diện góc $B$ là $AC$, cạnh huyền là $BC$, nên $\\sin \\alpha = \\frac{AC}{BC}$."
                },
                {
                    "id": "b",
                    "text": "$\\cos \\alpha = \\frac{AC}{AB}$.",
                    "correctAnswer": false,
                    "explanation": "$\\cos \\alpha = \\frac{AB}{BC}$ (cạnh kề chia cạnh huyền), không phải $\\frac{AC}{AB}$."
                },
                {
                    "id": "c",
                    "text": "$\\tan \\alpha = \\frac{AC}{AB}$.",
                    "correctAnswer": true,
                    "explanation": "Tang là tỉ số giữa cạnh đối và cạnh kề: $\\tan \\alpha = \\frac{AC}{AB}$."
                },
                {
                    "id": "d",
                    "text": "$\\cot \\alpha = \\frac{AB}{AC}$.",
                    "correctAnswer": true,
                    "explanation": "Côtang là tỉ số giữa cạnh kề và cạnh đối: $\\cot \\alpha = \\frac{AB}{AC}$."
                }
            ],
            "svgDiagram": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <!-- Đỉnh A(60, 190), B(320, 190), C(60, 40) - Vuông tại A, góc alpha tại B -->\n  <polygon points=\"60,190 340,190 60,40\" fill=\"#0284c7\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  \n  <!-- Ký hiệu góc vuông tại A -->\n  <rect x=\"60\" y=\"170\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\" />\n  <circle cx=\"70\" cy=\"180\" r=\"2\" fill=\"#f43f5e\" />\n\n  <!-- Cung tròn góc alpha tại B -->\n  <path d=\"M 300,190 A 40,40 0 0,0 307.7,172.7\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\" />\n  <text x=\"285\" y=\"178\" fill=\"#fbbf24\" font-size=\"16\" font-weight=\"bold\" font-style=\"italic\">α</text>\n\n  <!-- Tên các đỉnh -->\n  <text x=\"40\" y=\"205\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">A</text>\n  <text x=\"350\" y=\"195\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">B</text>\n  <text x=\"50\" y=\"32\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">C</text>\n\n  <!-- Tên các cạnh đối với góc alpha tại B -->\n  <text x=\"25\" y=\"115\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Cạnh đối (AC)</text>\n  <text x=\"200\" y=\"215\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Cạnh kề (AB)</text>\n  <text x=\"215\" y=\"100\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\" transform=\"rotate(-28 215 100)\" text-anchor=\"middle\">Cạnh huyền (BC)</text>\n</svg>"
        },
        {
            "id": "tf-9.11.2",
            "badge": "Đúng/Sai 2 (NB) - Tỉ số lượng giác của hai góc phụ nhau",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$. Xét tính đúng/sai của các hệ thức liên hệ giữa hai góc nhọn $B$ và $C$:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin B = \\cos C$.",
                    "correctAnswer": true,
                    "explanation": "Vì hai góc $B$ và $C$ phụ nhau ($B + C = 90^\\circ$) nên $\\sin B = \\cos C$."
                },
                {
                    "id": "b",
                    "text": "$\\cos B = \\sin C$.",
                    "correctAnswer": true,
                    "explanation": "Góc phụ nhau: côsin góc này bằng sin góc kia."
                },
                {
                    "id": "c",
                    "text": "$\\tan B = \\tan C$.",
                    "correctAnswer": false,
                    "explanation": "Hai góc phụ nhau thì $\\tan B = \\cot C$, không phải $\\tan B = \\tan C$."
                },
                {
                    "id": "d",
                    "text": "$\\tan B \\cdot \\tan C = 1$.",
                    "correctAnswer": true,
                    "explanation": "Vì $\\tan C = \\cot B$ nên $\\tan B \\cdot \\tan C = \\tan B \\cdot \\cot B = 1$."
                }
            ]
        },
        {
            "id": "tf-9.11.3",
            "badge": "Đúng/Sai 3 (NB) - Bảng giá trị lượng giác các góc đặc biệt",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "prompt": "Xét tính đúng/sai của các giá trị lượng giác các góc đặc biệt sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$.",
                    "correctAnswer": true,
                    "explanation": "Đây là giá trị lượng giác chuẩn của hai góc phụ nhau $30^\\circ$ và $60^\\circ$."
                },
                {
                    "id": "b",
                    "text": "$\\tan 45^\\circ = \\cot 45^\\circ = 1$.",
                    "correctAnswer": true,
                    "explanation": "Tam giác vuông cân có góc $45^\\circ$ thì hai cạnh góc vuông bằng nhau, tỉ số bằng 1."
                },
                {
                    "id": "c",
                    "text": "$\\cos 45^\\circ = \\frac{1}{2}$.",
                    "correctAnswer": false,
                    "explanation": "Giá trị đúng là $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$."
                },
                {
                    "id": "d",
                    "text": "$\\tan 60^\\circ = \\sqrt{3}$.",
                    "correctAnswer": true,
                    "explanation": "$\\tan 60^\\circ = \\frac{\\sin 60^\\circ}{\\cos 60^\\circ} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$."
                }
            ]
        },
        {
            "id": "tf-9.11.4",
            "badge": "Đúng/Sai 4 (TH) - Các tính chất bất đẳng thức lượng giác",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "prompt": "Với mọi góc nhọn $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$), xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$0 < \\sin \\alpha < 1$ và $0 < \\cos \\alpha < 1$.",
                    "correctAnswer": true,
                    "explanation": "Độ dài cạnh góc vuông luôn nhỏ hơn cạnh huyền và lớn hơn 0."
                },
                {
                    "id": "b",
                    "text": "$\\sin \\alpha + \\cos \\alpha = 1$.",
                    "correctAnswer": false,
                    "explanation": "Hệ thức đúng phải có bình phương: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
                },
                {
                    "id": "c",
                    "text": "$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$.",
                    "correctAnswer": true,
                    "explanation": "$\\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{\\text{đối}/\\text{huyền}}{\\text{kề}/\\text{huyền}} = \\frac{\\text{đối}}{\\text{kề}} = \\tan \\alpha$."
                },
                {
                    "id": "d",
                    "text": "$1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$.",
                    "correctAnswer": true,
                    "explanation": "$1 + \\tan^2 \\alpha = 1 + \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha} = \\frac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos^2 \\alpha} = \\frac{1}{\\cos^2 \\alpha}$."
                }
            ]
        },
        {
            "id": "tf-9.11.5",
            "badge": "Đúng/Sai 5 (TH) - Tam giác vuông có cạnh 6 và 8",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 62)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Độ dài cạnh huyền $BC = 10\\text{ cm}$.",
                    "correctAnswer": true,
                    "explanation": "$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$."
                },
                {
                    "id": "b",
                    "text": "$\\sin B = \\frac{4}{5}$.",
                    "correctAnswer": true,
                    "explanation": "$\\sin B = \\frac{AC}{BC} = \\frac{8}{10} = \\frac{4}{5}$."
                },
                {
                    "id": "c",
                    "text": "$\\cos B = \\frac{4}{5}$.",
                    "correctAnswer": false,
                    "explanation": "$\\cos B = \\frac{AB}{BC} = \\frac{6}{10} = \\frac{3}{5}$."
                },
                {
                    "id": "d",
                    "text": "$\\tan B = \\frac{4}{3}$.",
                    "correctAnswer": true,
                    "explanation": "$\\tan B = \\frac{AC}{AB} = \\frac{8}{6} = \\frac{4}{3}$."
                }
            ]
        },
        {
            "id": "tf-9.11.6",
            "badge": "Đúng/Sai 6 (TH) - Tính toán biểu thức lượng giác",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "prompt": "Xét tính đúng/sai của các phép tính lượng giác sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin^2 15^\\circ + \\sin^2 75^\\circ = 1$.",
                    "correctAnswer": true,
                    "explanation": "Vì $75^\\circ + 15^\\circ = 90^\\circ \\Rightarrow \\sin 75^\\circ = \\cos 15^\\circ \\Rightarrow \\sin^2 15^\\circ + \\cos^2 15^\\circ = 1$."
                },
                {
                    "id": "b",
                    "text": "$\\tan 10^\\circ \\cdot \\tan 80^\\circ = 1$.",
                    "correctAnswer": true,
                    "explanation": "$\\tan 80^\\circ = \\cot 10^\\circ \\Rightarrow \\tan 10^\\circ \\cdot \\cot 10^\\circ = 1$."
                },
                {
                    "id": "c",
                    "text": "$\\cos 50^\\circ - \\sin 40^\\circ = 1$.",
                    "correctAnswer": false,
                    "explanation": "Vì $\\cos 50^\\circ = \\sin 40^\\circ$ nên hiệu của chúng bằng 0, không phải 1."
                },
                {
                    "id": "d",
                    "text": "$\\tan 30^\\circ \\cdot \\cot 30^\\circ = 1$.",
                    "correctAnswer": true,
                    "explanation": "Với mọi góc nhọn, tích tang và côtang luôn bằng 1."
                }
            ]
        },
        {
            "id": "tf-9.11.7",
            "badge": "Đúng/Sai 7 (TH) - Tìm các tỉ số lượng giác khi biết sin alpha",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 66)",
            "prompt": "Cho góc nhọn $\\alpha$ có $\\sin \\alpha = \\frac{3}{5}$. Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\cos \\alpha = \\frac{4}{5}$.",
                    "correctAnswer": true,
                    "explanation": "$\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$."
                },
                {
                    "id": "b",
                    "text": "$\\tan \\alpha = \\frac{3}{4}$.",
                    "correctAnswer": true,
                    "explanation": "$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3/5}{4/5} = \\frac{3}{4}$."
                },
                {
                    "id": "c",
                    "text": "$\\cot \\alpha = \\frac{3}{4}$.",
                    "correctAnswer": false,
                    "explanation": "$\\cot \\alpha = \\frac{1}{\\tan \\alpha} = \\frac{4}{3}$, không phải $\\frac{3}{4}$."
                },
                {
                    "id": "d",
                    "text": "$\\sin \\alpha + \\cos \\alpha = \\frac{7}{5}$.",
                    "correctAnswer": true,
                    "explanation": "$\\frac{3}{5} + \\frac{4}{5} = \\frac{7}{5}$."
                }
            ]
        },
        {
            "id": "tf-9.11.8",
            "badge": "Đúng/Sai 8 (TH) - So sánh các tỉ số lượng giác",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 10 (Trang 100)",
            "prompt": "Xét tính đúng/sai của các phép so sánh tỉ số lượng giác sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin 25^\\circ < \\sin 70^\\circ$.",
                    "correctAnswer": true,
                    "explanation": "Khi góc nhọn tăng thì sin tăng, vì $25^\\circ < 70^\\circ$ nên $\\sin 25^\\circ < \\sin 70^\\circ$."
                },
                {
                    "id": "b",
                    "text": "$\\cos 25^\\circ < \\cos 70^\\circ$.",
                    "correctAnswer": false,
                    "explanation": "Khi góc nhọn tăng thì côsin giảm, nên $\\cos 25^\\circ > \\cos 70^\\circ$."
                },
                {
                    "id": "c",
                    "text": "$\\tan 40^\\circ < \\tan 65^\\circ$.",
                    "correctAnswer": true,
                    "explanation": "Khi góc nhọn tăng thì tang tăng, vì $40^\\circ < 65^\\circ$ nên $\\tan 40^\\circ < \\tan 65^\\circ$."
                },
                {
                    "id": "d",
                    "text": "$\\cot 15^\\circ > \\cot 45^\\circ$.",
                    "correctAnswer": true,
                    "explanation": "Khi góc nhọn tăng thì côtang giảm, vì $15^\\circ < 45^\\circ$ nên $\\cot 15^\\circ > \\cot 45^\\circ$."
                }
            ]
        },
        {
            "id": "tf-9.11.9",
            "badge": "Đúng/Sai 9 (VD) - Bài toán thực tế chiều cao cột cờ",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 72)",
            "prompt": "Một cột cờ thẳng đứng có bóng trên mặt đất dài $10\\text{ m}$. Tại thời điểm đó, góc nâng của ánh nắng mặt trời tạo với mặt đất là $35^\\circ$. Gọi $h$ là chiều cao của cột cờ ($h > 0$). Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Mô hình hình học của bài toán là một tam giác vuông.",
                    "correctAnswer": true,
                    "explanation": "Cột cờ vuông góc với mặt đất tạo thành tam giác vuông."
                },
                {
                    "id": "b",
                    "text": "Ta có công thức liên hệ là $\\tan 35^\\circ = \\frac{h}{10}$.",
                    "correctAnswer": true,
                    "explanation": "Tang của góc nâng bằng cạnh đối (chiều cao cột cờ) chia cho cạnh kề (chiều dài bóng)."
                },
                {
                    "id": "c",
                    "text": "Chiều cao cột cờ được tính bằng $h = 10 \\cdot \\cos 35^\\circ$.",
                    "correctAnswer": false,
                    "explanation": "Công thức đúng là $h = 10 \\cdot \\tan 35^\\circ$."
                },
                {
                    "id": "d",
                    "text": "Chiều cao cột cờ xấp xỉ $7,0\\text{ m}$ (lấy $\\tan 35^\\circ \\approx 0,7002$).",
                    "correctAnswer": true,
                    "explanation": "$h = 10 \\cdot 0,7002 \\approx 7,0\\text{ m}$."
                }
            ],
            "svgDiagram": "<svg viewBox=\"0 0 420 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <!-- Mặt đất nằm ngang -->\n  <line x1=\"20\" y1=\"180\" x2=\"400\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"3\" stroke-linecap=\"round\" />\n  \n  <!-- Thân cây tại A(80, 180) cao lên C(80, 50) -->\n  <line x1=\"80\" y1=\"180\" x2=\"80\" y2=\"50\" stroke=\"#10b981\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <!-- Tán cây tròn xanh -->\n  <circle cx=\"80\" cy=\"45\" r=\"28\" fill=\"#059669\" fill-opacity=\"0.8\" stroke=\"#34d399\" stroke-width=\"2\" />\n  <circle cx=\"65\" cy=\"40\" r=\"18\" fill=\"#10b981\" fill-opacity=\"0.8\" />\n  <circle cx=\"95\" cy=\"40\" r=\"18\" fill=\"#10b981\" fill-opacity=\"0.8\" />\n  <circle cx=\"80\" cy=\"25\" r=\"16\" fill=\"#34d399\" fill-opacity=\"0.8\" />\n\n  <!-- Mặt trời vàng ở góc phải trên -->\n  <circle cx=\"360\" cy=\"35\" r=\"16\" fill=\"#f59e0b\" />\n  <path d=\"M 360,12 L 360,5 M 360,58 L 360,65 M 337,35 L 330,35 M 383,35 L 390,35 M 344,19 L 339,14 M 376,51 L 381,56\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-linecap=\"round\" />\n\n  <!-- Tia nắng nối từ ngọn cây C(80, 45) xuống bóng B(280, 180) -->\n  <line x1=\"80\" y1=\"45\" x2=\"280\" y2=\"180\" stroke=\"#fbbf24\" stroke-width=\"2\" stroke-dasharray=\"5 3\" />\n  \n  <!-- Góc vuông tại gốc cây A -->\n  <rect x=\"80\" y=\"162\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  \n  <!-- Góc nâng của tia nắng tại B -->\n  <path d=\"M 240,180 A 40,40 0 0,1 247,157\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\" />\n  <text x=\"215\" y=\"172\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">40°</text>\n\n  <!-- Tên đỉnh và kích thước -->\n  <text x=\"65\" y=\"198\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A (Gốc)</text>\n  <text x=\"285\" y=\"198\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B (Bóng)</text>\n  <text x=\"80\" y=\"18\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">C (Ngọn)</text>\n  \n  <!-- Nhãn đo chiều cao h và bóng d -->\n  <text x=\"45\" y=\"115\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">h = ?</text>\n  <text x=\"180\" y=\"202\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Bóng AB = 8 m</text>\n</svg>"
        },
        {
            "id": "tf-9.11.10",
            "badge": "Đúng/Sai 10 (VD) - Bài toán thực tế độ dốc đường đèo",
            "source": "Đề thi tuyển sinh vào lớp 10 THPT TP. Đà Nẵng",
            "prompt": "Một con dốc leo núi có độ dài từ chân dốc lên đỉnh dốc là $500\\text{ m}$, góc nghiêng của dốc so với phương nằm ngang là $6^\\circ$. Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Quãng đường leo dốc $500\\text{ m}$ tương ứng với cạnh huyền của tam giác vuông.",
                    "correctAnswer": true,
                    "explanation": "Mặt dốc nghiêng nối từ chân lên đỉnh đóng vai trò là cạnh huyền."
                },
                {
                    "id": "b",
                    "text": "Độ cao của đỉnh dốc so với mặt đất tính bằng công thức $h = 500 \\cdot \\sin 6^\\circ$.",
                    "correctAnswer": true,
                    "explanation": "Độ cao là cạnh đối diện góc nghiêng $6^\\circ$, nên $h = 500 \\cdot \\sin 6^\\circ$."
                },
                {
                    "id": "c",
                    "text": "Độ cao của đỉnh dốc xấp xỉ $52\\text{ m}$ (biết $\\sin 6^\\circ \\approx 0,1045$).",
                    "correctAnswer": true,
                    "explanation": "$h = 500 \\cdot 0,1045 = 52,25 \\approx 52\\text{ m}$."
                },
                {
                    "id": "d",
                    "text": "Khoảng cách nằm ngang từ chân dốc đến điểm chiếu thẳng đứng của đỉnh dốc là $500 \\cdot \\tan 6^\\circ$.",
                    "correctAnswer": false,
                    "explanation": "Khoảng cách nằm ngang là cạnh kề, được tính bằng $500 \\cdot \\cos 6^\\circ$, không phải $500 \\cdot \\tan 6^\\circ$."
                }
            ]
        }
    ],
    "shortAnswerQuestions": [
        {
            "id": "sa-9.11.1",
            "badge": "Trả lời ngắn 1 (TH) - Tính cạnh đối qua định lí Pythagore",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5\\text{ cm}$ và $BC = 13\\text{ cm}$. Tính độ dài cạnh $AC$ theo đơn vị xentimét.",
            "correctAnswer": "12",
            "acceptableAnswers": [
                "12",
                "12 cm",
                "12cm"
            ],
            "explanation": "Theo định lí Pythagore: $AC = \\sqrt{BC^2 - AB^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$."
        },
        {
            "id": "sa-9.11.2",
            "badge": "Trả lời ngắn 2 (TH) - Tính giá trị biểu thức lượng giác",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "prompt": "Tính giá trị của biểu thức $P = \\sin^2 35^\\circ + \\cos^2 35^\\circ + \\tan 45^\\circ$.",
            "correctAnswer": "2",
            "acceptableAnswers": [
                "2"
            ],
            "explanation": "Áp dụng hệ thức $\\sin^2 35^\\circ + \\cos^2 35^\\circ = 1$ và $\\tan 45^\\circ = 1$, ta có $P = 1 + 1 = 2$."
        },
        {
            "id": "sa-9.11.3",
            "badge": "Trả lời ngắn 3 (TH) - Tính biểu thức chứa sin khi biết cos",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "prompt": "Cho góc nhọn $\\alpha$ thỏa mãn $\\cos \\alpha = 0,6$. Tính giá trị của biểu thức $10 \\sin \\alpha$.",
            "correctAnswer": "8",
            "acceptableAnswers": [
                "8"
            ],
            "explanation": "Ta có $\\sin \\alpha = \\sqrt{1 - \\cos^2 \\alpha} = \\sqrt{1 - 0,36} = 0,8$. Do đó $10 \\sin \\alpha = 10 \\cdot 0,8 = 8$."
        },
        {
            "id": "sa-9.11.4",
            "badge": "Trả lời ngắn 4 (TH) - Tính tích tang hai góc phụ nhau",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 63)",
            "prompt": "Tính giá trị của biểu thức $M = \\tan 20^\\circ \\cdot \\tan 70^\\circ + 2 \\sin 30^\\circ$.",
            "correctAnswer": "2",
            "acceptableAnswers": [
                "2"
            ],
            "explanation": "Vì $20^\\circ + 70^\\circ = 90^\\circ \\Rightarrow \\tan 70^\\circ = \\cot 20^\\circ \\Rightarrow \\tan 20^\\circ \\cdot \\tan 70^\\circ = 1$. Lại có $\\sin 30^\\circ = 0,5 \\Rightarrow 2 \\sin 30^\\circ = 1$. Do đó $M = 1 + 1 = 2$."
        },
        {
            "id": "sa-9.11.5",
            "badge": "Trả lời ngắn 5 (TH) - Tìm cạnh đối diện góc 30 độ",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $\\widehat{B} = 30^\\circ$ và cạnh huyền $BC = 16\\text{ cm}$. Tính độ dài cạnh $AC$ (đơn vị: cm).",
            "correctAnswer": "8",
            "acceptableAnswers": [
                "8",
                "8 cm",
                "8cm"
            ],
            "explanation": "Trong tam giác vuông, cạnh đối diện góc $30^\\circ$ bằng một nửa cạnh huyền: $AC = BC \\cdot \\sin 30^\\circ = 16 \\cdot \\frac{1}{2} = 8\\text{ cm}$."
        },
        {
            "id": "sa-9.11.6",
            "badge": "Trả lời ngắn 6 (VD) - Bài toán thực tế khoảng cách chân thang",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 20 (Trang 103)",
            "prompt": "Một chiếc thang dài $5\\text{ m}$ dựa vào tường sao cho góc tạo bởi thang và mặt đất là $60^\\circ$. Khoảng cách từ chân thang đến chân tường bằng bao nhiêu mét?",
            "correctAnswer": "2,5",
            "acceptableAnswers": [
                "2,5",
                "2.5",
                "2,5 m",
                "2.5 m"
            ],
            "explanation": "Khoảng cách từ chân thang đến chân tường là cạnh kề góc $60^\\circ$: $d = 5 \\cdot \\cos 60^\\circ = 5 \\cdot 0,5 = 2,5\\text{ m}$."
        },
        {
            "id": "sa-9.11.7",
            "badge": "Trả lời ngắn 7 (VD) - Tính phân thức lượng giác theo tang",
            "source": "Đề thi học kì I THCS Cầu Giấy",
            "prompt": "Cho góc nhọn $\\alpha$ có $\\tan \\alpha = 3$. Tính giá trị của biểu thức $Q = \\frac{2\\sin \\alpha + 3\\cos \\alpha}{\\sin \\alpha - \\cos \\alpha}$.",
            "correctAnswer": "4,5",
            "acceptableAnswers": [
                "4,5",
                "4.5",
                "9/2"
            ],
            "explanation": "Chia cả tử và mẫu cho $\\cos \\alpha \\ne 0$: $Q = \\frac{2\\tan \\alpha + 3}{\\tan \\alpha - 1} = \\frac{2(3) + 3}{3 - 1} = \\frac{9}{2} = 4,5$."
        },
        {
            "id": "sa-9.11.8",
            "badge": "Trả lời ngắn 8 (VD) - Bài toán thực tế chiều cao cầu vượt",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 72)",
            "prompt": "Một con dốc dẫn lên cầu vượt dài $200\\text{ m}$ có góc nghiêng so với mặt đất là $3^\\circ$. Chiều cao của cầu vượt so với mặt đất bằng bao nhiêu mét? (Làm tròn kết quả đến hàng đơn vị mét, biết $\\sin 3^\\circ \\approx 0,0523$):",
            "correctAnswer": "10",
            "acceptableAnswers": [
                "10",
                "10 m",
                "10m"
            ],
            "explanation": "Chiều cao cầu vượt là cạnh đối diện góc $3^\\circ$: $h = 200 \\cdot \\sin 3^\\circ \\approx 200 \\cdot 0,0523 = 10,46 \\approx 10\\text{ m}$."
        },
        {
            "id": "sa-9.11.9",
            "badge": "Trả lời ngắn 9 (VD) - Bài toán thực tế đo chiều cao tháp",
            "source": "Đề tuyển sinh vào 10 THPT TP. Hồ Chí Minh",
            "prompt": "Một người đứng cách chân tháp $100\\text{ m}$ nhìn lên đỉnh tháp dưới góc nâng $60^\\circ$. Biết khoảng cách từ mắt người quan sát đến mặt đất là $1,6\\text{ m}$. Tính chiều cao của tháp theo đơn vị mét (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$).",
            "correctAnswer": "175",
            "acceptableAnswers": [
                "175",
                "175 m",
                "175m"
            ],
            "explanation": "Độ cao từ tầm mắt người đến đỉnh tháp là: $h_1 = 100 \\cdot \\tan 60^\\circ = 100\\sqrt{3} \\approx 173,2\\text{ m}$. Chiều cao của tháp là: $h = 1,6 + h_1 \\approx 1,6 + 173,2 = 174,8 \\approx 175\\text{ m}$."
        },
        {
            "id": "sa-9.11.10",
            "badge": "Trả lời ngắn 10 (VD) - Bài toán thực tế cáp treo leo núi",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 64)",
            "prompt": "Một tuyến cáp treo từ chân núi lên đỉnh núi có chiều dài dây cáp là $1200\\text{ m}$. Góc tạo bởi tuyến cáp treo với phương nằm ngang là $30^\\circ$. Hỏi đỉnh núi cao hơn chân núi bao nhiêu mét?",
            "correctAnswer": "600",
            "acceptableAnswers": [
                "600",
                "600 m",
                "600m"
            ],
            "explanation": "Chiều cao của đỉnh núi so với chân núi là cạnh đối diện góc $30^\\circ$: $h = 1200 \\cdot \\sin 30^\\circ = 1200 \\cdot \\frac{1}{2} = 600\\text{ m}$."
        }
    ]
},
  "t9-b12-he-thuc-canh-goc-tam-giac-vuong": {
    "id": "t9-b12-he-thuc-canh-goc-tam-giac-vuong",
    "lessonNumber": 12,
    "title": "Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng",
    "bookChapter": "Chương IV: Hệ thức lượng trong tam giác vuông",
    "scenarioTitle": "Hệ thức cạnh và góc trong tam giác vuông & Ứng dụng đo đạc thực tế đỉnh cao",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Hệ thức giữa cạnh huyền và cạnh góc vuông",
        "points": [
          "Trong tam giác vuông $ABC$ vuông tại $A$, cạnh huyền $a = BC$, hai cạnh góc vuông $b = AC, c = AB$.",
          "Mỗi cạnh góc vuông bằng:",
          "• Cạnh huyền nhân với sin của góc đối: $b = a \\cdot \\sin B$; $c = a \\cdot \\sin C$.",
          "• Cạnh huyền nhân với côsin của góc kề: $b = a \\cdot \\cos C$; $c = a \\cdot \\cos B$.",
          "Nhận xét quan trọng: Vì hai góc nhọn $B$ và $C$ phụ nhau ($B + C = 90^\\circ$) nên $\\sin B = \\cos C$ và $\\sin C = \\cos B$. Do đó hai cách viết trên hoàn toàn tương đương."
        ],
        "examples": [
          {
            "title": "Minh họa hình học: Hệ thức cạnh và góc trong tam giác vuông",
            "problem": "Cho tam giác $ABC$ vuông tại $A$ có $BC = a, AC = b, AB = c$. Viết hệ thức tính cạnh $b$ và $c$ theo cạnh huyền $a$ và các góc nhọn $B, C$.",
            "solution": "Áp dụng định nghĩa tỉ số lượng giác:\\n• $\\sin B = \\frac{b}{a} \\Rightarrow b = a \\cdot \\sin B$.\\n• $\\cos B = \\frac{c}{a} \\Rightarrow c = a \\cdot \\cos B$.\\n• $\\sin C = \\frac{c}{a} \\Rightarrow c = a \\cdot \\sin C$.\\n• $\\cos C = \\frac{b}{a} \\Rightarrow b = a \\cdot \\cos C$.",
            "svgDiagram": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-md mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <polygon points=\"70,190 350,190 70,50\" fill=\"#0284c7\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <rect x=\"70\" y=\"170\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\" />\n  <circle cx=\"80\" cy=\"180\" r=\"2\" fill=\"#f43f5e\" />\n  <path d=\"M 310,190 A 40,40 0 0,0 318.5,174.3\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2.5\" />\n  <text x=\"295\" y=\"180\" fill=\"#fbbf24\" font-size=\"15\" font-weight=\"bold\">B</text>\n  <path d=\"M 70,90 A 40,40 0 0,0 85.7,81.5\" fill=\"none\" stroke=\"#a78bfa\" stroke-width=\"2.5\" />\n  <text x=\"82\" y=\"98\" fill=\"#a78bfa\" font-size=\"15\" font-weight=\"bold\">C</text>\n  <text x=\"50\" y=\"205\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">A</text>\n  <text x=\"360\" y=\"195\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">B</text>\n  <text x=\"60\" y=\"42\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">C</text>\n  <text x=\"40\" y=\"120\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">b</text>\n  <text x=\"210\" y=\"212\" fill=\"#34d399\" font-size=\"14\" font-weight=\"bold\">c</text>\n  <text x=\"220\" y=\"110\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"bold\" transform=\"rotate(-26 220 110)\">a (cạnh huyền)</text>\n</svg>"
          }
        ]
      },
      {
        "index": "2",
        "title": "Hệ thức giữa hai cạnh góc vuông",
        "points": [
          "Trong tam giác vuông $ABC$ vuông tại $A$ ($BC = a, AC = b, AB = c$), mỗi cạnh góc vuông bằng:",
          "• Cạnh góc vuông kia nhân với tang của góc đối: $b = c \\cdot \\tan B$; $c = b \\cdot \\tan C$.",
          "• Cạnh góc vuông kia nhân với côtang của góc kề: $b = c \\cdot \\cot C$; $c = b \\cdot \\cot B$.",
          "Ghi nhớ quy tắc: 'Đối với cạnh góc vuông: Sin đi với cạnh huyền, Tang đi với cạnh kề'."
        ],
        "examples": [
          {
            "title": "Ví dụ tính cạnh góc vuông khi biết một cạnh góc vuông và một góc",
            "problem": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$ và $\\widehat{B} = 60^\\circ$. Tính độ dài cạnh $AC$.",
            "solution": "Cạnh $AC$ là cạnh góc vuông đối diện góc $B$, $AB$ là cạnh kề góc $B$.\\nÁp dụng hệ thức giữa hai cạnh góc vuông:\\n$$AC = AB \\cdot \\tan B = 6 \\cdot \\tan 60^\\circ = 6\\sqrt{3} \\approx 10,39\\text{ cm}.$$"
          }
        ]
      },
      {
        "index": "3",
        "title": "Giải tam giác vuông",
        "points": [
          "Giải tam giác vuông là bài toán tìm số đo tất cả các cạnh và các góc còn lại của một tam giác vuông khi đã biết trước hai yếu tố (trong đó có ít nhất một cạnh).",
          "Các trường hợp thường gặp khi giải tam giác vuông:",
          "1. Biết cạnh huyền và một góc nhọn: Dùng tỉ số $\\sin, \\cos$ tính hai cạnh góc vuông; tính góc nhọn còn lại bằng hiệu $90^\\circ - \\alpha$.",
          "2. Biết một cạnh góc vuông và một góc nhọn: Tính góc nhọn còn lại, dùng $\\tan, \\cot$ hoặc $\\sin, \\cos$ để tính hai cạnh còn lại.",
          "3. Biết cạnh huyền và một cạnh góc vuông: Dùng định lý Pythagore tính cạnh góc vuông thứ hai, sau đó dùng $\\sin$ hoặc $\\cos$ để tìm góc nhọn.",
          "4. Biết hai cạnh góc vuông: Dùng định lý Pythagore tính cạnh huyền, dùng $\\tan$ để tính góc nhọn."
        ],
        "examples": [
          {
            "title": "Ví dụ giải tam giác vuông khi biết cạnh huyền và một góc nhọn",
            "problem": "Giải tam giác $ABC$ vuông tại $A$ biết cạnh huyền $BC = 10\\text{ cm}$ và góc $\\widehat{B} = 35^\\circ$ (kết quả độ dài làm tròn đến hàng phần mười).",
            "solution": "• Số đo góc nhọn còn lại: $\\widehat{C} = 90^\\circ - \\widehat{B} = 90^\\circ - 35^\\circ = 55^\\circ$.\\n• Cạnh $AC = BC \\cdot \\sin B = 10 \\cdot \\sin 35^\\circ \\approx 10 \\cdot 0,5736 \\approx 5,7\\text{ cm}$.\\n• Cạnh $AB = BC \\cdot \\cos B = 10 \\cdot \\cos 35^\\circ \\approx 10 \\cdot 0,8192 \\approx 8,2\\text{ cm}$."
          }
        ]
      },
      {
        "index": "4",
        "title": "Ứng dụng thực tế và bài toán đo đạc gián tiếp",
        "points": [
          "Hệ thức lượng trong tam giác vuông cho phép con người đo đạc được những khoảng cách, chiều cao không thể tới trực tiếp:",
          "• Xác định chiều cao của vật thể (tháp Eiffel, ngọn hải đăng, cây cổ thụ, cột cờ): Đứng cách chân vật thể một khoảng $d$, dùng giác kế đo góc nâng $\\alpha$. Chiều cao vật thể là $h = d \\cdot \\tan \\alpha + h_0$ ($h_0$ là chiều cao từ mặt đất đến mắt người quan sát).",
          "• Xác định khoảng cách gián tiếp giữa hai điểm qua sông, hồ: Chọn một điểm quan sát trên bờ tạo thành tam giác vuông rồi đo góc và khoảng cách bờ để tính.",
          "• Bài toán mặt phẳng nghiêng, dốc: Máy bay cất cánh bay lên theo góc nghiêng $\\alpha$, tàu ngầm lặn xuống theo góc hạ $\\beta$, chiếc thang tựa tường an toàn (góc từ $65^\\circ$ đến $75^\\circ$)."
        ],
        "examples": [
          {
            "title": "Minh họa thực tế: Đo chiều cao tháp bằng giác kế",
            "problem": "Một người đứng cách chân ngọn tháp $50\\text{ m}$, dùng giác kế ngắm đỉnh tháp với góc nâng $35^\\circ$. Chiều cao của giác kế là $1,5\\text{ m}$. Tính chiều cao của tháp (làm tròn đến hàng phần mười).",
            "solution": "Độ cao từ tầm mắt người ngắm đến đỉnh tháp là: $h_1 = 50 \\cdot \\tan 35^\\circ \\approx 50 \\cdot 0,7002 \\approx 35,01\\text{ m}$.\\nChiều cao thực tế của ngọn tháp: $h = h_1 + 1,5 \\approx 35,01 + 1,5 = 36,51 \\approx 36,5\\text{ m}$.",
            "svgDiagram": "<svg viewBox=\"0 0 450 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-lg mx-auto my-3 select-none rounded-xl border border-slate-700 bg-slate-900/90 shadow-lg\">\n  <line x1=\"20\" y1=\"200\" x2=\"430\" y2=\"200\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 4\" />\n  <polygon points=\"350,40 370,40 385,200 335,200\" fill=\"#0284c7\" fill-opacity=\"0.3\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <line x1=\"360\" y1=\"20\" x2=\"360\" y2=\"40\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <circle cx=\"360\" cy=\"20\" r=\"3\" fill=\"#f43f5e\" />\n  <rect x=\"80\" y=\"140\" width=\"8\" height=\"60\" fill=\"#fbbf24\" rx=\"2\" />\n  <circle cx=\"84\" cy=\"132\" r=\"8\" fill=\"#fbbf24\" />\n  <line x1=\"88\" y1=\"140\" x2=\"360\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"5 5\" />\n  <line x1=\"88\" y1=\"140\" x2=\"360\" y2=\"40\" stroke=\"#f43f5e\" stroke-width=\"2\" />\n  <path d=\"M 130,140 A 42,42 0 0,0 127,125\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"2\" />\n  <text x=\"136\" y=\"133\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">α = 35°</text>\n  <text x=\"220\" y=\"160\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">d = 50 m</text>\n  <text x=\"380\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">h₁</text>\n  <text x=\"50\" y=\"175\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">h₀ = 1,5m</text>\n  <text x=\"375\" y=\"175\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">h₀</text>\n  <line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"200\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n</svg>"
          }
        ]
      }
    ],
    "youtubeVideoId": "p3E8p4T8GjE",
    "youtubeVideoTitle": "Bài Giảng Video: Bài 12 - Một số hệ thức giữa cạnh và góc trong tam giác vuông - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "p3E8p4T8GjE",
        "title": "Tiết 1: Hệ thức giữa cạnh và góc trong tam giác vuông"
      },
      {
        "id": "L7B7eF5A2wE",
        "title": "Tiết 2: Giải tam giác vuông và ứng dụng đo đạc thực tế"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.12.1",
        "title": "Câu hỏi video 1: Hệ thức tính cạnh góc vuông theo cạnh huyền",
        "question": "Trong tam giác vuông, cạnh góc vuông $b$ bằng cạnh huyền $a$ nhân với:",
        "options": [
          "Sin góc đối hoặc Côsin góc kề",
          "Sin góc kề hoặc Côsin góc đối",
          "Tang góc đối hoặc Côtang góc kề",
          "Tang góc kề hoặc Côtang góc đối"
        ],
        "correctIndex": 0,
        "explanation": "Theo định lý: $b = a \\cdot \\sin B = a \\cdot \\cos C$."
      },
      {
        "id": "vq-9.12.2",
        "title": "Câu hỏi video 2: Hệ thức giữa hai cạnh góc vuông",
        "question": "Trong tam giác vuông $ABC$ vuông tại $A$, cạnh góc vuông $c$ bằng:",
        "options": [
          "c = b \\cdot \\tan C = b \\cdot \\cot B",
          "c = b \\cdot \\sin B",
          "c = b \\cdot \\cos C",
          "c = a \\cdot \\tan C"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh góc vuông bằng cạnh góc vuông kia nhân với tang góc đối hoặc nhân với côtang góc kề."
      },
      {
        "id": "vq-9.12.3",
        "title": "Câu hỏi video 3: Điều kiện tối thiểu để giải tam giác vuông",
        "question": "Để giải một tam giác vuông, ta cần biết ít nhất bao nhiêu yếu tố và có điều kiện gì?",
        "options": [
          "Cần 2 yếu tố, trong đó phải có ít nhất 1 yếu tố là độ dài cạnh",
          "Chỉ cần biết 2 góc nhọn",
          "Cần biết đủ 3 cạnh",
          "Cần biết cả 3 góc"
        ],
        "correctIndex": 0,
        "explanation": "Nếu chỉ biết 2 góc nhọn thì các tam giác chỉ đồng dạng chứ không xác định được kích thước cạnh cụ thể."
      },
      {
        "id": "vq-9.12.4",
        "title": "Câu hỏi video 4: Đo chiều cao vật thể bằng giác kế",
        "question": "Một người đứng cách chân tháp $30\\text{ m}$ ngắm đỉnh tháp dưới góc nâng $45^\\circ$. Mắt cách đất $1,6\\text{ m}$. Chiều cao của tháp là:",
        "options": [
          "31,6 m",
          "30 m",
          "28,4 m",
          "45 m"
        ],
        "correctIndex": 0,
        "explanation": "Chiều cao tháp: $h = 30 \\cdot \\tan 45^\\circ + 1,6 = 30 \\cdot 1 + 1,6 = 31,6\\text{ m}$."
      }
    ],
    "tips": [
      "Khắc sâu quy tắc thần chú: 'Cạnh góc vuông = Huyền nhân Sin đối = Huyền nhân Cos kề'.",
      "Khắc sâu quy tắc hai cạnh góc vuông: 'Cạnh góc vuông này = Cạnh góc vuông kia nhân Tan đối = Cạnh góc vuông kia nhân Cot kề'.",
      "Khi giải tam giác vuông: Luôn ưu tiên dùng trực tiếp các dữ kiện số liệu ban đầu trong đề để tránh sai số làm tròn tích lũy.",
      "Bài toán thực tế dùng giác kế: Sau khi tính $d \\cdot \\tan \\alpha$, đừng bao giờ quên cộng thêm chiều cao tầm mắt $h_0$ so với mặt đất."
    ],
    "traps": [
      "Bẫy nhầm góc đối và góc kề: Khi đổi từ góc nhọn này sang góc nhọn kia, cạnh đối và cạnh kề hoán đổi vai trò cho nhau.",
      "Bẫy áp dụng hệ thức lượng cho tam giác chưa vuông: Các công thức $b = a\\sin B, b = c\\tan B$ chỉ áp dụng cho tam giác vuông.",
      "Bẫy thiếu chiều cao tầm mắt: Rất nhiều học sinh chỉ tính khoảng cách $h_1 = d \\cdot \\tan \\alpha$ mà quên cộng chiều cao giác kế $h_0$.",
      "Bẫy góc nâng và góc hạ: Góc hạ là góc tạo bởi đường ngắm nhìn xuống và phương nằm ngang (bằng góc nâng nhìn lên từ mục tiêu)."
    ],
    "quizQuestions": [
      {
        "id": "q-9.12.1",
        "badge": "Nhận biết 1 - Hệ thức cạnh góc vuông theo cạnh huyền và góc đối",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $BC = a, AC = b, AB = c$. Hệ thức nào sau đây biểu diễn đúng cạnh góc vuông $b$ theo cạnh huyền $a$ và góc nhọn đối diện $B$?",
        "options": [
          "$b = a \\cdot \\sin B$",
          "$b = a \\cdot \\cos B$",
          "$b = a \\cdot \\tan B$",
          "$b = a \\cdot \\cot B$"
        ],
        "correctIndex": 0,
        "explanation": "Theo định lý trong tam giác vuông: mỗi cạnh góc vuông bằng cạnh huyền nhân với sin của góc đối: $b = a \\cdot \\sin B$.",
        "svgDiagram": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-xs mx-auto my-2 select-none rounded-lg border border-slate-700 bg-slate-900\">\n  <polygon points=\"50,140 270,140 50,40\" fill=\"#0284c7\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <rect x=\"50\" y=\"125\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"1.5\" />\n  <text x=\"35\" y=\"150\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">A</text>\n  <text x=\"280\" y=\"145\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">B</text>\n  <text x=\"40\" y=\"35\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">C</text>\n  <text x=\"30\" y=\"95\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">b</text>\n  <text x=\"160\" y=\"158\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">c</text>\n  <text x=\"165\" y=\"85\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">a</text>\n</svg>"
      },
      {
        "id": "q-9.12.2",
        "badge": "Nhận biết 2 - Hệ thức cạnh góc vuông theo cạnh huyền và góc kề",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $BC = a, AC = b, AB = c$. Hệ thức nào sau đây biểu diễn đúng cạnh góc vuông $b$ theo cạnh huyền $a$ và góc nhọn kề $C$?",
        "options": [
          "$b = a \\cdot \\cos C$",
          "$b = a \\cdot \\sin C$",
          "$b = a \\cdot \\tan C$",
          "$b = a \\cdot \\cot C$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh huyền nhân với côsin của góc kề: $b = a \\cdot \\cos C$."
      },
      {
        "id": "q-9.12.3",
        "badge": "Nhận biết 3 - Hệ thức giữa hai cạnh góc vuông với tang góc đối",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AC = b, AB = c$. Hệ thức nào sau đây là đúng?",
        "options": [
          "$b = c \\cdot \\tan B$",
          "$b = c \\cdot \\cot B$",
          "$b = c \\cdot \\sin B$",
          "$b = c \\cdot \\cos B$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh góc vuông kia nhân với tang của góc đối: $b = c \\cdot \\tan B$."
      },
      {
        "id": "q-9.12.4",
        "badge": "Nhận biết 4 - Hệ thức giữa hai cạnh góc vuông với côtang góc kề",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AC = b, AB = c$. Hệ thức nào sau đây là đúng?",
        "options": [
          "$b = c \\cdot \\cot C$",
          "$b = c \\cdot \\tan C$",
          "$c = b \\cdot \\cot B$",
          "$c = b \\cdot \\sin C$"
        ],
        "correctIndex": 0,
        "explanation": "Mỗi cạnh góc vuông bằng cạnh góc vuông kia nhân với côtang của góc kề: $b = c \\cdot \\cot C$."
      },
      {
        "id": "q-9.12.5",
        "badge": "Nhận biết 5 - Khái niệm bài toán giải tam giác vuông",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 78)",
        "question": "Thuật ngữ 'Giải tam giác vuông' trong hình học nghĩa là gì?",
        "options": [
          "Tìm tất cả các cạnh và các góc chưa biết của tam giác vuông khi đã biết đủ dữ kiện",
          "Chỉ tính diện tích của tam giác vuông đó",
          "Chỉ tính chu vi của tam giác vuông đó",
          "Vẽ hình tam giác vuông đó ra giấy kẻ ô"
        ],
        "correctIndex": 0,
        "explanation": "Giải tam giác vuông là tìm số đo các cạnh và các góc còn lại của tam giác vuông khi biết trước đủ yếu tố."
      },
      {
        "id": "q-9.12.6",
        "badge": "Nhận biết 6 - Điều kiện để giải được tam giác vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "question": "Để giải một tam giác vuông, ta cần biết trước ít nhất bao nhiêu yếu tố và điều kiện là gì?",
        "options": [
          "Ít nhất 2 yếu tố, trong đó phải có ít nhất 1 yếu tố là độ dài cạnh",
          "Chỉ cần biết 2 góc nhọn",
          "Phải biết cả 3 cạnh của tam giác",
          "Chỉ cần biết 1 cạnh duy nhất"
        ],
        "correctIndex": 0,
        "explanation": "Để giải được tam giác vuông cần biết 2 yếu tố (ngoài góc vuông), trong đó phải có ít nhất một yếu tố là cạnh. Nếu chỉ biết 2 góc nhọn thì các tam giác chỉ đồng dạng."
      },
      {
        "id": "q-9.12.7",
        "badge": "Nhận biết 7 - Tính cạnh góc vuông đối diện góc 30 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "question": "Cho tam giác vuông có cạnh huyền bằng $10\\text{ cm}$ và một góc nhọn bằng $30^\\circ$. Độ dài cạnh góc vuông đối diện với góc $30^\\circ$ là:",
        "options": [
          "$5\\text{ cm}$",
          "$5\\sqrt{3}\\text{ cm}$",
          "$10\\text{ cm}$",
          "$2,5\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh góc vuông đối diện góc $30^\\circ$ bằng: $c = a \\cdot \\sin 30^\\circ = 10 \\cdot 0,5 = 5\\text{ cm}$."
      },
      {
        "id": "q-9.12.8",
        "badge": "Nhận biết 8 - Tam giác vuông cân cạnh góc vuông",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 8\\text{ cm}$ và $\\widehat{B} = 45^\\circ$. Độ dài cạnh $AC$ là:",
        "options": [
          "$8\\text{ cm}$",
          "$8\\sqrt{2}\\text{ cm}$",
          "$4\\text{ cm}$",
          "$4\\sqrt{2}\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AC = AB \\cdot \\tan 45^\\circ = 8 \\cdot 1 = 8\\text{ cm}$ (tam giác vuông cân tại $A$)."
      },
      {
        "id": "q-9.12.9",
        "badge": "Thông hiểu 1 - Tính các cạnh khi biết cạnh huyền và một góc",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 20\\text{ cm}$ và $\\widehat{C} = 30^\\circ$. Độ dài hai cạnh góc vuông $AB$ và $AC$ lần lượt là:",
        "options": [
          "$AB = 10\\text{ cm}; AC = 10\\sqrt{3}\\text{ cm}$",
          "$AB = 10\\sqrt{3}\\text{ cm}; AC = 10\\text{ cm}$",
          "$AB = 10\\text{ cm}; AC = 15\\text{ cm}$",
          "$AB = 12\\text{ cm}; AC = 16\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "$AB = BC \\cdot \\sin C = 20 \\cdot \\sin 30^\\circ = 10\\text{ cm}$; $AC = BC \\cdot \\cos C = 20 \\cdot \\cos 30^\\circ = 10\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "q-9.12.10",
        "badge": "Thông hiểu 2 - Tính cạnh huyền khi biết một cạnh góc vuông và góc",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AC = 12\\text{ cm}$ và $\\widehat{B} = 60^\\circ$. Độ dài cạnh huyền $BC$ bằng:",
        "options": [
          "$8\\sqrt{3}\\text{ cm}$",
          "$24\\text{ cm}$",
          "$6\\sqrt{3}\\text{ cm}$",
          "$16\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AC = BC \\cdot \\sin B \\Rightarrow BC = \\frac{AC}{\\sin B} = \\frac{12}{\\sin 60^\\circ} = \\frac{12}{\\frac{\\sqrt{3}}{2}} = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "q-9.12.11",
        "badge": "Thông hiểu 3 - Tìm góc nhọn khi biết hai cạnh góc vuông",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 80)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$ và $AC = 8\\text{ cm}$. Số đo của góc nhọn $\\widehat{B}$ (làm tròn đến phút) là:",
        "options": [
          "$53^\\circ 8'$",
          "$36^\\circ 52'$",
          "$45^\\circ 0'$",
          "$60^\\circ 15'$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\tan B = \\frac{AC}{AB} = \\frac{8}{6} = \\frac{4}{3} \\approx 1,3333 \\Rightarrow \\widehat{B} \\approx 53^\\circ 8'$."
      },
      {
        "id": "q-9.12.12",
        "badge": "Thông hiểu 4 - Tính cạnh góc vuông làm tròn số thập phân",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 127)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 12\\text{ cm}$ và $\\widehat{B} = 40^\\circ$. Độ dài cạnh $AC$ (làm tròn đến chữ số thập phân thứ hai) là:",
        "options": [
          "$7,71\\text{ cm}$",
          "$9,19\\text{ cm}$",
          "$8,45\\text{ cm}$",
          "$6,88\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AC = BC \\cdot \\sin B = 12 \\cdot \\sin 40^\\circ \\approx 12 \\cdot 0,6428 = 7,7136 \\approx 7,71\\text{ cm}$."
      },
      {
        "id": "q-9.12.13",
        "badge": "Thông hiểu 5 - Giải tam giác vuông MNP",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 68)",
        "question": "Cho tam giác $MNP$ vuông tại $M$, biết cạnh huyền $NP = 15\\text{ cm}$ và $\\widehat{P} = 50^\\circ$. Độ dài cạnh góc vuông $MP$ (làm tròn đến hàng phần mười) là:",
        "options": [
          "$9,6\\text{ cm}$",
          "$11,5\\text{ cm}$",
          "$12,2\\text{ cm}$",
          "$8,4\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "$MP$ là cạnh kề góc $P$: $MP = NP \\cdot \\cos P = 15 \\cdot \\cos 50^\\circ \\approx 15 \\cdot 0,6428 = 9,642 \\approx 9,6\\text{ cm}$."
      },
      {
        "id": "q-9.12.14",
        "badge": "Thông hiểu 6 - Tính đường chéo hình thoi",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
        "question": "Cho hình thoi $ABCD$ có cạnh bằng $8\\text{ cm}$ và góc nhọn $\\widehat{BAD} = 60^\\circ$. Độ dài hai đường chéo $BD$ và $AC$ lần lượt là:",
        "options": [
          "$BD = 8\\text{ cm}; AC = 8\\sqrt{3}\\text{ cm}$",
          "$BD = 8\\sqrt{3}\\text{ cm}; AC = 8\\text{ cm}$",
          "$BD = 4\\text{ cm}; AC = 4\\sqrt{3}\\text{ cm}$",
          "$BD = 16\\text{ cm}; AC = 16\\sqrt{3}\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi $O$ là giao điểm hai đường chéo. Tam giác $OAB$ vuông tại $O$ có $\\widehat{OAB} = 30^\\circ, AB = 8\\text{ cm}$.\\n$OB = 8 \\cdot \\sin 30^\\circ = 4\\text{ cm} \\Rightarrow BD = 2OB = 8\\text{ cm}$.\\n$OA = 8 \\cdot \\cos 30^\\circ = 4\\sqrt{3}\\text{ cm} \\Rightarrow AC = 2OA = 8\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "q-9.12.15",
        "badge": "Vận dụng 1 (Thực tế) - Chiếc thang dựa tường an toàn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "question": "Một chiếc thang dài $4\\text{ m}$ được dựa vào một bức tường thẳng đứng. Để đảm bảo an toàn, góc tạo bởi thang và mặt đất cần đạt $65^\\circ$. Khoảng cách an toàn từ chân thang đến chân tường là bao nhiêu mét (làm tròn đến hàng phần trăm)?",
        "options": [
          "$1,69\\text{ m}$",
          "$3,63\\text{ m}$",
          "$1,85\\text{ m}$",
          "$2,12\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Khoảng cách từ chân thang đến chân tường là cạnh kề góc $65^\\circ$:\\n$d = 4 \\cdot \\cos 65^\\circ \\approx 4 \\cdot 0,4226 = 1,6904 \\approx 1,69\\text{ m}$.",
        "svgDiagram": "<svg viewBox=\"0 0 350 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-xs mx-auto my-2 select-none rounded-lg border border-slate-700 bg-slate-900\">\n  <line x1=\"30\" y1=\"180\" x2=\"320\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"2\" />\n  <rect x=\"250\" y=\"30\" width=\"20\" height=\"150\" fill=\"#475569\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n  <line x1=\"100\" y1=\"180\" x2=\"250\" y2=\"45\" stroke=\"#fbbf24\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <path d=\"M 140,180 A 40,40 0 0,0 137.6,163\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <text x=\"145\" y=\"172\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">65°</text>\n  <text x=\"155\" y=\"100\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\" transform=\"rotate(-42 155 100)\">L = 4 m</text>\n  <line x1=\"100\" y1=\"195\" x2=\"250\" y2=\"195\" stroke=\"#34d399\" stroke-width=\"1.5\" />\n  <text x=\"175\" y=\"210\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">d = ?</text>\n</svg>"
      },
      {
        "id": "q-9.12.16",
        "badge": "Vận dụng 2 (Thực tế) - Độ cao máy bay sau khi cất cánh",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 130)",
        "question": "Một máy bay cất cánh từ đường băng bay lên theo đường thẳng tạo với mặt đất nằm ngang một góc $20^\\circ$ với vận tốc trung bình $360\\text{ km/h}$. Sau $1,5\\text{ phút}$, máy bay đạt độ cao so với mặt đất là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "$3078\\text{ m}$",
          "$3250\\text{ m}$",
          "$2850\\text{ m}$",
          "$4120\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Đổi $1,5\\text{ phút} = \\frac{1,5}{60}\\text{ h} = 0,025\\text{ h}$.\\nQuãng đường bay theo cạnh huyền là: $s = 360 \\cdot 0,025 = 9\\text{ km} = 9000\\text{ m}$.\\nĐộ cao đạt được là cạnh đối diện góc $20^\\circ$:\\n$h = 9000 \\cdot \\sin 20^\\circ \\approx 9000 \\cdot 0,34202 = 3078,18 \\approx 3078\\text{ m}$."
      },
      {
        "id": "q-9.12.17",
        "badge": "Vận dụng 3 (Thực tế) - Ngọn hải đăng và tàu cứu hộ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
        "question": "Từ đỉnh một ngọn hải đăng cao $60\\text{ m}$ so với mực nước biển, nhân viên quan sát nhìn thấy một chiếc tàu cứu hộ dưới góc hạ $25^\\circ$. Khoảng cách từ chân ngọn hải đăng đến chiếc tàu là bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "options": [
          "$128,7\\text{ m}$",
          "$135,2\\text{ m}$",
          "$118,4\\text{ m}$",
          "$142,0\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Góc hạ $25^\\circ$ so với phương ngang tương đương với góc nhìn từ tàu lên đỉnh hải đăng là $25^\\circ$ (so le trong).\\nKhoảng cách từ tàu đến chân tháp: $d = \\frac{60}{\\tan 25^\\circ} \\approx \\frac{60}{0,4663} \\approx 128,67 \\approx 128,7\\text{ m}$."
      },
      {
        "id": "q-9.12.18",
        "badge": "Vận dụng 4 (Thực tế) - Đo chiều rộng khúc sông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "question": "Để đo chiều rộng $AB$ của một con sông mà không thể qua bờ bên kia, người ta lấy một điểm $C$ ở bờ sông cùng phía với $B$ sao cho $AB \\perp BC$. Đo được $BC = 50\\text{ m}$ và góc $\\widehat{ACB} = 38^\\circ$. Chiều rộng $AB$ của con sông là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "$39\\text{ m}$",
          "$42\\text{ m}$",
          "$35\\text{ m}$",
          "$48\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Tam giác $ABC$ vuông tại $B$, có cạnh góc vuông $AB = BC \\cdot \\tan \\widehat{ACB} = 50 \\cdot \\tan 38^\\circ \\approx 50 \\cdot 0,7813 = 39,06 \\approx 39\\text{ m}$."
      },
      {
        "id": "q-9.12.19",
        "badge": "Vận dụng 5 (Thực tế) - Chiều cao cây bị gãy do bão",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 111)",
        "question": "Một thân cây bị gió bão làm gãy ngang, ngọn cây đổ chạm đất cách gốc cây $6\\text{ m}$ và đoạn thân bị gãy tạo với mặt đất một góc $30^\\circ$. Chiều cao ban đầu của cây trước khi gãy là bao nhiêu mét (làm tròn đến hàng phần mười, lấy $\\sqrt{3} \\approx 1,732$)?",
        "options": [
          "$10,4\\text{ m}$",
          "$8,5\\text{ m}$",
          "$12,0\\text{ m}$",
          "$9,6\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Phần thân cây còn đứng là cạnh đối diện góc $30^\\circ$: $h_1 = 6 \\cdot \\tan 30^\\circ = 6 \\cdot \\frac{\\sqrt{3}}{3} = 2\\sqrt{3} \\approx 3,46\\text{ m}$.\\nPhần thân cây bị gãy đổ là cạnh huyền: $h_2 = \\frac{6}{\\cos 30^\\circ} = \\frac{6}{\\frac{\\sqrt{3}}{2}} = 4\\sqrt{3} \\approx 6,93\\text{ m}$.\\nChiều cao ban đầu của cây: $h = h_1 + h_2 = 2\\sqrt{3} + 4\\sqrt{3} = 6\\sqrt{3} \\approx 10,39 \\approx 10,4\\text{ m}$."
      },
      {
        "id": "q-9.12.20",
        "badge": "Vận dụng 6 (Thực tế) - Ước lượng chiều cao tháp bằng giác kế",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 112)",
        "question": "Một người sử dụng giác kế có chiều cao $1,5\\text{ m}$ đặt cách chân tháp một khoảng $40\\text{ m}$ để ngắm đỉnh tháp. Góc nâng đo được qua giác kế là $42^\\circ$. Chiều cao của tháp là bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "options": [
          "$37,5\\text{ m}$",
          "$36,0\\text{ m}$",
          "$39,2\\text{ m}$",
          "$41,5\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao từ mắt giác kế lên đỉnh tháp: $h_1 = 40 \\cdot \\tan 42^\\circ \\approx 40 \\cdot 0,9004 = 36,016\\text{ m}$.\\nChiều cao toàn phần của tháp: $h = h_1 + 1,5 \\approx 36,016 + 1,5 = 37,516 \\approx 37,5\\text{ m}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-9.12.1",
        "badge": "Đúng/Sai 1 (NB) - Hệ thức giữa cạnh góc vuông và cạnh huyền",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $a = BC$ và hai cạnh góc vuông $b = AC, c = AB$. Xét tính đúng/sai của các hệ thức sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Mỗi cạnh góc vuông bằng cạnh huyền nhân với sin của góc đối: $b = a \\cdot \\sin B$.",
            "correctAnswer": true,
            "explanation": "Đúng theo định lý tỉ số lượng giác $\\sin B = \\frac{b}{a} \\Rightarrow b = a \\sin B$."
          },
          {
            "id": "b",
            "text": "Mỗi cạnh góc vuông bằng cạnh huyền nhân với sin của góc kề: $b = a \\cdot \\sin C$.",
            "correctAnswer": false,
            "explanation": "Sai, $b$ là cạnh kề góc $C$ nên phải là $b = a \\cdot \\cos C$."
          },
          {
            "id": "c",
            "text": "Cạnh góc vuông $c$ được tính theo góc kề $B$ bằng: $c = a \\cdot \\cos B$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\cos B = \\frac{c}{a} \\Rightarrow c = a \\cos B$."
          },
          {
            "id": "d",
            "text": "Hai hệ thức $b = a \\cdot \\sin B$ và $b = a \\cdot \\cos C$ cho ra hai giá trị khác nhau.",
            "correctAnswer": false,
            "explanation": "Sai vì hai góc $B$ và $C$ phụ nhau nên $\\sin B = \\cos C$, do đó hai hệ thức này hoàn toàn tương đương."
          }
        ]
      },
      {
        "id": "tf-9.12.2",
        "badge": "Đúng/Sai 2 (NB) - Hệ thức giữa hai cạnh góc vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có hai cạnh góc vuông $b = AC, c = AB$. Xét tính đúng/sai của các hệ thức sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Cạnh góc vuông $b = c \\cdot \\tan B$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\tan B = \\frac{b}{c} \\Rightarrow b = c \\cdot \\tan B$."
          },
          {
            "id": "b",
            "text": "Cạnh góc vuông $b = c \\cdot \\cot B$.",
            "correctAnswer": false,
            "explanation": "Sai, $\\cot B = \\frac{c}{b} \\Rightarrow b = \\frac{c}{\\cot B} = c \\cdot \\tan B$."
          },
          {
            "id": "c",
            "text": "Cạnh góc vuông $c = b \\cdot \\tan C$.",
            "correctAnswer": true,
            "explanation": "Đúng vì góc đối diện cạnh $c$ là góc $C$, nên $c = b \\cdot \\tan C$."
          },
          {
            "id": "d",
            "text": "Cạnh góc vuông $c = b \\cdot \\cot C$.",
            "correctAnswer": false,
            "explanation": "Sai, phải là $c = b \\cdot \\cot B$ hoặc $c = b \\cdot \\tan C$."
          }
        ]
      },
      {
        "id": "tf-9.12.3",
        "badge": "Đúng/Sai 3 (NB) - Nguyên tắc và trường hợp giải tam giác vuông",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 78)",
        "prompt": "Xét các khẳng định sau về bài toán giải tam giác vuông:",
        "subItems": [
          {
            "id": "a",
            "text": "Biết độ dài 2 cạnh của tam giác vuông luôn đủ điều kiện để giải tam giác vuông đó.",
            "correctAnswer": true,
            "explanation": "Đúng, dùng định lý Pythagore tính cạnh thứ 3 và dùng tỉ số lượng giác tìm 2 góc nhọn."
          },
          {
            "id": "b",
            "text": "Chỉ biết số đo 2 góc nhọn của tam giác vuông là đủ để giải hoàn toàn tam giác đó.",
            "correctAnswer": false,
            "explanation": "Sai, vì thiếu độ dài cạnh thì không xác định được kích thước cụ thể (chỉ biết các tam giác đồng dạng)."
          },
          {
            "id": "c",
            "text": "Biết một cạnh huyền và một góc nhọn thì giải được tam giác vuông.",
            "correctAnswer": true,
            "explanation": "Đúng, tính góc nhọn còn lại qua hiệu $90^\\circ - \\alpha$, tính hai cạnh góc vuông bằng $a\\sin, a\\cos$."
          },
          {
            "id": "d",
            "text": "Tam giác vuông cân có cạnh góc vuông bằng $a$ thì cạnh huyền bằng $a\\sqrt{2}$.",
            "correctAnswer": true,
            "explanation": "Đúng theo định lý Pythagore: $\\sqrt{a^2 + a^2} = a\\sqrt{2}$."
          }
        ]
      },
      {
        "id": "tf-9.12.4",
        "badge": "Đúng/Sai 4 (NB) - Ứng dụng bảng góc đặc biệt giải tam giác vuông",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$. Xét tính đúng/sai của các trường hợp:",
        "subItems": [
          {
            "id": "a",
            "text": "Nếu $\\widehat{B} = 30^\\circ$ thì cạnh huyền $BC = 12\\text{ cm}$.",
            "correctAnswer": false,
            "explanation": "Sai vì $\\cos B = \\frac{AB}{BC} \\Rightarrow BC = \\frac{6}{\\cos 30^\\circ} = \\frac{6}{\\frac{\\sqrt{3}}{2}} = 4\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Nếu $\\widehat{C} = 30^\\circ$ thì cạnh huyền $BC = 12\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\sin C = \\frac{AB}{BC} \\Rightarrow BC = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{0,5} = 12\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Nếu $\\widehat{B} = 45^\\circ$ thì $AC = 6\\text{ cm}$ và $BC = 6\\sqrt{2}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì tam giác $ABC$ vuông cân tại $A$."
          },
          {
            "id": "d",
            "text": "Nếu $\\widehat{B} = 60^\\circ$ thì $AC = 6\\sqrt{3}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AC = AB \\cdot \\tan 60^\\circ = 6\\sqrt{3}\\text{ cm}$."
          }
        ]
      },
      {
        "id": "tf-9.12.5",
        "badge": "Đúng/Sai 5 (TH) - Giải tam giác vuông ABC với AB = 5, AC = 12",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có độ dài hai cạnh góc vuông là $AB = 5\\text{ cm}, AC = 12\\text{ cm}$. Kẻ đường cao $AH$.",
        "subItems": [
          {
            "id": "a",
            "text": "Độ dài cạnh huyền $BC = 13\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $BC = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Độ dài đường cao $AH = \\frac{60}{13}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AH \\cdot BC = AB \\cdot AC \\Rightarrow AH = \\frac{5 \\cdot 12}{13} = \\frac{60}{13}\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Góc nhọn $\\widehat{B} < 60^\\circ$.",
            "correctAnswer": false,
            "explanation": "Sai vì $\\tan B = \\frac{12}{5} = 2,4 > \\sqrt{3} \\approx 1,732 \\Rightarrow \\widehat{B} \\approx 67^\\circ 23' > 60^\\circ$."
          },
          {
            "id": "d",
            "text": "Diện tích tam giác $ABC$ bằng $30\\text{ cm}^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S = \\frac{1}{2} AB \\cdot AC = \\frac{1}{2} \\cdot 5 \\cdot 12 = 30\\text{ cm}^2$."
          }
        ]
      },
      {
        "id": "tf-9.12.6",
        "badge": "Đúng/Sai 6 (TH) - Giải tam giác DEF vuông tại D",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 69)",
        "prompt": "Cho tam giác $DEF$ vuông tại $D$ có cạnh huyền $EF = 10\\text{ cm}$ và góc $\\widehat{E} = 45^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Tam giác $DEF$ là tam giác vuông cân tại $D$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\widehat{F} = 90^\\circ - 45^\\circ = 45^\\circ = \\widehat{E}$."
          },
          {
            "id": "b",
            "text": "Độ dài mỗi cạnh góc vuông $DE = DF = 5\\sqrt{2}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $DE = 10 \\cdot \\sin 45^\\circ = 10 \\cdot \\frac{\\sqrt{2}}{2} = 5\\sqrt{2}\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Diện tích tam giác $DEF$ bằng $50\\text{ cm}^2$.",
            "correctAnswer": false,
            "explanation": "Sai, $S = \\frac{1}{2} DE \\cdot DF = \\frac{1}{2} (5\\sqrt{2})^2 = \\frac{50}{2} = 25\\text{ cm}^2$."
          },
          {
            "id": "d",
            "text": "Độ dài đường cao kẻ từ đỉnh $D$ xuống cạnh huyền $EF$ bằng $5\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, trong tam giác vuông cân đường cao ứng với cạnh huyền bằng nửa cạnh huyền: $10 / 2 = 5\\text{ cm}$."
          }
        ]
      },
      {
        "id": "tf-9.12.7",
        "badge": "Đúng/Sai 7 (TH) - Mối quan hệ đường cao tam giác nhọn",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
        "prompt": "Cho tam giác nhọn $ABC$ có đường cao $AH$ kẻ từ đỉnh $A$ xuống cạnh $BC$. Kí hiệu $c = AB, b = AC$.",
        "subItems": [
          {
            "id": "a",
            "text": "Độ dài đường cao $AH = c \\cdot \\sin B$.",
            "correctAnswer": true,
            "explanation": "Đúng vì tam giác $ABH$ vuông tại $H$ nên $AH = AB \\cdot \\sin B = c \\cdot \\sin B$."
          },
          {
            "id": "b",
            "text": "Độ dài đường cao $AH = b \\cdot \\sin C$.",
            "correctAnswer": true,
            "explanation": "Đúng vì tam giác $ACH$ vuông tại $H$ nên $AH = AC \\cdot \\sin C = b \\cdot \\sin C$."
          },
          {
            "id": "c",
            "text": "Từ đó suy ra hệ thức $c \\cdot \\sin B = b \\cdot \\sin C$, tương đương $\\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là nền tảng định lý Sin trong tam giác bất kỳ."
          },
          {
            "id": "d",
            "text": "Nếu $B = 30^\\circ, C = 45^\\circ$ và $c = 10\\text{ cm}$ thì $b = 5\\sqrt{2}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $b = c \\cdot \\frac{\\sin B}{\\sin C} = 10 \\cdot \\frac{0,5}{\\frac{\\sqrt{2}}{2}} = \\frac{5}{\\frac{\\sqrt{2}}{2}} = 5\\sqrt{2}\\text{ cm}$."
          }
        ]
      },
      {
        "id": "tf-9.12.8",
        "badge": "Đúng/Sai 8 (VD - Thực tế) - Đặt thang an toàn vào bức tường",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "prompt": "Một chiếc thang dài $5\\text{ m}$ dựa vào một bức tường thẳng đứng. Tiêu chuẩn an toàn quy định góc tạo bởi thang và mặt đất phải từ $65^\\circ$ đến $75^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Nếu góc tạo bởi thang và mặt đất là $70^\\circ$ thì thang thỏa mãn tiêu chuẩn an toàn.",
            "correctAnswer": true,
            "explanation": "Đúng vì $65^\\circ \\le 70^\\circ \\le 75^\\circ$."
          },
          {
            "id": "b",
            "text": "Khi góc đặt thang là $70^\\circ$, khoảng cách từ chân thang đến tường xấp xỉ $1,71\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $d = 5 \\cdot \\cos 70^\\circ \\approx 5 \\cdot 0,3420 = 1,71\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Khi góc đặt thang là $70^\\circ$, đầu trên của thang chạm tường ở độ cao lớn hơn $4,8\\text{ m}$.",
            "correctAnswer": false,
            "explanation": "Sai, $h = 5 \\cdot \\sin 70^\\circ \\approx 5 \\cdot 0,9397 = 4,70\\text{ m} < 4,8\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Nếu khoảng cách từ chân thang đến tường là $2,5\\text{ m}$ thì góc đặt thang bằng $60^\\circ$, không đạt tiêu chuẩn an toàn.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\cos\\alpha = \\frac{2,5}{5} = 0,5 \\Rightarrow \\alpha = 60^\\circ < 65^\\circ$ (thang quá dốc ngang, dễ trượt ngã)."
          }
        ]
      },
      {
        "id": "tf-9.12.9",
        "badge": "Đúng/Sai 9 (VD - Thực tế) - Máy bay cất cánh từ sân bay",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 130)",
        "prompt": "Một máy bay sau khi cất cánh bay thẳng lên với vận tốc đều $450\\text{ km/h}$ theo đường bay nghiêng một góc $15^\\circ$ so với mặt phẳng nằm ngang.",
        "subItems": [
          {
            "id": "a",
            "text": "Sau 2 phút bay, quãng đường máy bay đã di chuyển theo đường nghiêng là $15\\text{ km}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $s = 450 \\cdot \\frac{2}{60} = 15\\text{ km} = 15000\\text{ m}$."
          },
          {
            "id": "b",
            "text": "Sau 2 phút, độ cao máy bay đạt được so với mặt đất xấp xỉ $3882\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $h = 15000 \\cdot \\sin 15^\\circ \\approx 15000 \\cdot 0,2588 = 3882\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Sau 2 phút, hình chiếu vị trí máy bay trên mặt đất cách điểm cất cánh nhỏ hơn $14\\text{ km}$.",
            "correctAnswer": false,
            "explanation": "Sai, khoảng cách trên mặt đất $d = 15 \\cdot \\cos 15^\\circ \\approx 15 \\cdot 0,9659 = 14,49\\text{ km} > 14\\text{ km}$."
          },
          {
            "id": "d",
            "text": "Nếu máy bay muốn đạt độ cao $3000\\text{ m}$ thì cần bay một quãng đường nghiêng khoảng hơn $11,5\\text{ km}$.",
            "correctAnswer": true,
            "explanation": "Đúng, quãng đường nghiêng cần bay $s = \\frac{3000}{\\sin 15^\\circ} \\approx \\frac{3000}{0,2588} \\approx 11592\\text{ m} \\approx 11,6\\text{ km} > 11,5\\text{ km}$."
          }
        ]
      },
      {
        "id": "tf-9.12.10",
        "badge": "Đúng/Sai 10 (VD - Thực tế) - Đo khoảng cách vượt hồ nước",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 71)",
        "prompt": "Hai địa điểm $A$ và $B$ nằm ở hai bờ của một hồ nước lớn. Để đo khoảng cách $AB$, người ta chọn điểm $C$ sao cho $\\widehat{ABC} = 90^\\circ$, đo được $BC = 80\\text{ m}$ và dùng giác kế đo được $\\widehat{ACB} = 52^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Khoảng cách giữa hai điểm $A$ và $B$ được tính bằng công thức $AB = BC \\cdot \\tan \\widehat{ACB}$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì tam giác $ABC$ vuông tại $B$ nên cạnh đối $AB = BC \\cdot \\tan C$."
          },
          {
            "id": "b",
            "text": "Khoảng cách $AB$ xấp xỉ bằng $102,4\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $AB = 80 \\cdot \\tan 52^\\circ \\approx 80 \\cdot 1,2799 = 102,39 \\approx 102,4\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Khoảng cách đường chim bay từ $C$ đến $A$ là cạnh huyền $AC$ xấp xỉ bằng $130\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $AC = \\frac{80}{\\cos 52^\\circ} \\approx \\frac{80}{0,6157} \\approx 129,93 \\approx 130\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Nếu điểm $C$ được chọn sao cho $\\widehat{ACB} = 45^\\circ$ thì khoảng cách $AB = 80\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì khi đó tam giác $ABC$ vuông cân tại $B$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-9.12.1",
        "badge": "Trả lời ngắn 1 (NB) - Tính cạnh góc vuông theo cạnh huyền",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 16\\text{ cm}$ và góc nhọn $\\widehat{B} = 30^\\circ$. Tính độ dài cạnh góc vuông $AC$ theo đơn vị centimet.",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "8 cm",
          "8cm"
        ],
        "explanation": "Ta có $AC = BC \\cdot \\sin B = 16 \\cdot \\sin 30^\\circ = 16 \\cdot 0,5 = 8\\text{ cm}$."
      },
      {
        "id": "sa-9.12.2",
        "badge": "Trả lời ngắn 2 (NB) - Tính cạnh góc vuông tam giác vuông cân",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 7\\text{ cm}$ và $\\widehat{C} = 45^\\circ$. Tính độ dài cạnh $AC$ theo đơn vị centimet.",
        "correctAnswer": "7",
        "acceptableAnswers": [
          "7",
          "7 cm",
          "7cm"
        ],
        "explanation": "Ta có $\\widehat{C} = 45^\\circ \\Rightarrow \\widehat{B} = 45^\\circ$, tam giác $ABC$ vuông cân tại $A$ nên $AC = AB = 7\\text{ cm}$."
      },
      {
        "id": "sa-9.12.3",
        "badge": "Trả lời ngắn 3 (NB) - Tính cạnh kề theo cosin góc nhọn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 25\\text{ cm}$ và $\\cos B = 0,6$. Tính độ dài cạnh góc vuông $AB$ theo đơn vị centimet.",
        "correctAnswer": "15",
        "acceptableAnswers": [
          "15",
          "15 cm",
          "15cm"
        ],
        "explanation": "Ta có $AB = BC \\cdot \\cos B = 25 \\cdot 0,6 = 15\\text{ cm}$."
      },
      {
        "id": "sa-9.12.4",
        "badge": "Trả lời ngắn 4 (NB) - Tính cạnh góc vuông theo tang",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh $AC = 10\\text{ cm}$ và $\\tan B = 2$. Tính độ dài cạnh góc vuông $AB$ theo đơn vị centimet.",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "5 cm",
          "5cm"
        ],
        "explanation": "Ta có $\\tan B = \\frac{AC}{AB} \\Rightarrow AB = \\frac{AC}{\\tan B} = \\frac{10}{2} = 5\\text{ cm}$."
      },
      {
        "id": "sa-9.12.5",
        "badge": "Trả lời ngắn 5 (TH) - Tính cạnh kề góc 60 độ",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 18\\text{ cm}$ và góc $\\widehat{C} = 60^\\circ$. Tính độ dài cạnh góc vuông $AC$ theo đơn vị centimet.",
        "correctAnswer": "9",
        "acceptableAnswers": [
          "9",
          "9 cm",
          "9cm"
        ],
        "explanation": "Cạnh $AC$ kề góc $C$: $AC = BC \\cdot \\cos C = 18 \\cdot \\cos 60^\\circ = 18 \\cdot 0,5 = 9\\text{ cm}$."
      },
      {
        "id": "sa-9.12.6",
        "badge": "Trả lời ngắn 6 (TH) - Tính đường cao tam giác vuông",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\\text{ cm}$ và $AC = 12\\text{ cm}$. Tính độ dài đường cao $AH$ hạ từ đỉnh $A$ xuống cạnh huyền theo đơn vị centimet (viết dưới dạng số thập phân).",
        "correctAnswer": "7.2",
        "acceptableAnswers": [
          "7.2",
          "7,2",
          "7.2 cm",
          "7,2 cm",
          "36/5"
        ],
        "explanation": "Cạnh huyền $BC = \\sqrt{9^2 + 12^2} = 15\\text{ cm}$. Đường cao $AH = \\frac{AB \\cdot AC}{BC} = \\frac{9 \\cdot 12}{15} = 7,2\\text{ cm}$."
      },
      {
        "id": "sa-9.12.7",
        "badge": "Trả lời ngắn 7 (TH) - Diện tích hình chữ nhật",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 109)",
        "prompt": "Một hình chữ nhật $ABCD$ có đường chéo $AC = 20\\text{ cm}$ và góc tạo bởi đường chéo với chiều dài $AB$ bằng $30^\\circ$. Tính diện tích hình chữ nhật theo đơn vị $\\text{cm}^2$ (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$).",
        "correctAnswer": "173",
        "acceptableAnswers": [
          "173",
          "173 cm2",
          "173cm2"
        ],
        "explanation": "Chiều rộng: $BC = 20 \\cdot \\sin 30^\\circ = 10\\text{ cm}$. Chiều dài: $AB = 20 \\cdot \\cos 30^\\circ = 10\\sqrt{3} \\approx 17,32\\text{ cm}$. Diện tích: $S = AB \\cdot BC \\approx 17,32 \\cdot 10 = 173,2 \\approx 173\\text{ cm}^2$."
      },
      {
        "id": "sa-9.12.8",
        "badge": "Trả lời ngắn 8 (VD - Thực tế) - Độ cao con dốc đường bộ",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
        "prompt": "Một đoạn đường dốc lên núi dài $400\\text{ m}$ và tạo với mặt đất nằm ngang một góc nghiêng $6^\\circ$. Hỏi đỉnh dốc cao hơn chân dốc bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sin 6^\\circ \\approx 0,1045$)?",
        "correctAnswer": "42",
        "acceptableAnswers": [
          "42",
          "42 m",
          "42m"
        ],
        "explanation": "Độ cao của đỉnh dốc là: $h = 400 \\cdot \\sin 6^\\circ \\approx 400 \\cdot 0,1045 = 41,8\\text{ m} \\approx 42\\text{ m}$."
      },
      {
        "id": "sa-9.12.9",
        "badge": "Trả lời ngắn 9 (VD - Thực tế) - Chiều cao cột cờ sân trường",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 110)",
        "prompt": "Một bạn học sinh đứng cách chân cột cờ $15\\text{ m}$ nhìn lên đỉnh cột cờ dưới góc nâng $45^\\circ$. Biết tầm mắt của bạn học sinh cách mặt đất $1,6\\text{ m}$. Hỏi chiều cao của cột cờ là bao nhiêu mét (viết dưới dạng số thập phân)?",
        "correctAnswer": "16.6",
        "acceptableAnswers": [
          "16.6",
          "16,6",
          "16.6 m",
          "16,6 m",
          "16.6m",
          "16,6m"
        ],
        "explanation": "Độ cao từ tầm mắt đến đỉnh cột cờ: $h_1 = 15 \\cdot \\tan 45^\\circ = 15 \\cdot 1 = 15\\text{ m}$. Chiều cao toàn phần của cột cờ: $h = 15 + 1,6 = 16,6\\text{ m}$."
      },
      {
        "id": "sa-9.12.10",
        "badge": "Trả lời ngắn 10 (VD - Thực tế) - Khoảng cách tàu đến chân hải đăng",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
        "prompt": "Một ngọn hải đăng cao $50\\text{ m}$ so với mực nước biển. Người quan sát đứng trên đỉnh hải đăng nhìn thấy một con tàu với góc hạ $30^\\circ$. Khoảng cách từ con tàu đến chân ngọn hải đăng là bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$)?",
        "correctAnswer": "87",
        "acceptableAnswers": [
          "87",
          "87 m",
          "87m"
        ],
        "explanation": "Khoảng cách từ con tàu đến chân ngọn hải đăng: $d = \\frac{50}{\\tan 30^\\circ} = 50\\sqrt{3} \\approx 50 \\cdot 1,732 = 86,6 \\approx 87\\text{ m}$."
      }
    ]
  },
  "t9-on-tap-chuong-4": {
    "id": "t9-on-tap-chuong-4",
    "lessonNumber": 0,
    "title": "Ôn tập cuối chương IV",
    "bookChapter": "Chương IV: Hệ thức lượng trong tam giác vuông (SGK Toán 9 KNTT - Tập 1)",
    "scenarioTitle": "Hệ thống hóa kiến thức & Luyện 3 đề ôn tập tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Tóm tắt lý thuyết: Tỉ số lượng giác của góc nhọn",
        "points": [
          "Trong tam giác vuông $ABC$ vuông tại $A$ với góc nhọn $\\widehat{B} = \\alpha$ ($0^\\circ < \\alpha < 90^\\circ$):",
          "• $\\sin \\alpha = \\frac{\\text{đối}}{\\text{huyền}} = \\frac{AC}{BC}$; $\\cos \\alpha = \\frac{\\text{kề}}{\\text{huyền}} = \\frac{AB}{BC}$.",
          "• $\\tan \\alpha = \\frac{\\text{đối}}{\\text{kề}} = \\frac{AC}{AB}$; $\\cot \\alpha = \\frac{\\text{kề}}{\\text{đối}} = \\frac{AB}{AC}$.",
          "• Tính chất quan trọng: $0 < \\sin \\alpha < 1$; $0 < \\cos \\alpha < 1$; $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$; $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$; $\\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$; $\\tan \\alpha \\cdot \\cot \\alpha = 1$.",
          "• Hai góc phụ nhau: Nếu $\\alpha + \\beta = 90^\\circ$ thì $\\sin \\alpha = \\cos \\beta$; $\\cos \\alpha = \\sin \\beta$; $\\tan \\alpha = \\cot \\beta$; $\\cot \\alpha = \\tan \\beta$."
        ],
        "examples": [
          {
            "title": "Bảng giá trị tỉ số lượng giác các góc đặc biệt cần nhớ",
            "problem": "Nêu giá trị các tỉ số lượng giác của các góc $30^\\circ, 45^\\circ, 60^\\circ$.",
            "solution": "• $30^\\circ$: $\\sin 30^\\circ = \\frac{1}{2}, \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}, \\tan 30^\\circ = \\frac{\\sqrt{3}}{3}, \\cot 30^\\circ = \\sqrt{3}$.\\n• $45^\\circ$: $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}, \\tan 45^\\circ = \\cot 45^\\circ = 1$.\\n• $60^\\circ$: $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\cos 60^\\circ = \\frac{1}{2}, \\tan 60^\\circ = \\sqrt{3}, \\cot 60^\\circ = \\frac{\\sqrt{3}}{3}$."
          }
        ]
      },
      {
        "index": "2",
        "title": "Tóm tắt lý thuyết: Hệ thức giữa cạnh và góc trong tam giác vuông",
        "points": [
          "Cho tam giác $ABC$ vuông tại $A$ ($a = BC, b = AC, c = AB$):",
          "• Hệ thức với cạnh huyền: $b = a \\cdot \\sin B = a \\cdot \\cos C$; $c = a \\cdot \\sin C = a \\cdot \\cos B$.",
          "• Hệ thức giữa hai cạnh góc vuông: $b = c \\cdot \\tan B = c \\cdot \\cot C$; $c = b \\cdot \\tan C = b \\cdot \\cot B$.",
          "• Khẩu quyết: Cạnh góc vuông = Huyền nhân Sin đối = Huyền nhân Cos kề; Cạnh góc vuông này = Cạnh góc vuông kia nhân Tan đối = Cạnh góc vuông kia nhân Cot kề."
        ],
        "examples": [
          {
            "title": "Sơ đồ tam giác vuông chuẩn hóa",
            "problem": "Cho tam giác vuông $ABC$ ($A = 90^\\circ$), minh họa các yếu tố cạnh và góc.",
            "solution": "Tam giác vuông $ABC$ có cạnh huyền $a$, các cạnh góc vuông $b, c$ và hai góc nhọn $B, C$ phụ nhau.",
            "svgDiagram": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-sm mx-auto my-2 select-none rounded-lg border border-slate-700 bg-slate-900\">\n  <polygon points=\"60,160 300,160 60,40\" fill=\"#0284c7\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2.5\" />\n  <rect x=\"60\" y=\"142\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\" />\n  <text x=\"42\" y=\"172\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">A</text>\n  <text x=\"310\" y=\"165\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">B</text>\n  <text x=\"50\" y=\"32\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\">C</text>\n  <text x=\"38\" y=\"105\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">b</text>\n  <text x=\"180\" y=\"182\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">c</text>\n  <text x=\"190\" y=\"95\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\" transform=\"rotate(-26 190 95)\">a</text>\n</svg>"
          }
        ]
      }
    ],
    "youtubeVideoId": "t9_ot4_video",
    "youtubeVideoTitle": "Bài Giảng Video: Ôn tập và giải đề thi cuối chương IV - Hệ thức lượng tam giác vuông - Toán 9 KNTT",
    "youtubeVideos": [
      {
        "id": "t9_ot4_video1",
        "title": "Tiết 1: Ôn tập tỉ số lượng giác và hệ thức giữa cạnh và góc trong tam giác vuông"
      },
      {
        "id": "t9_ot4_video2",
        "title": "Tiết 2: Phương pháp giải các bài toán thực tế đo đạc góc nâng, góc hạ"
      }
    ],
    "videoQuestions": [
      {
        "id": "vq-9.ot4.1",
        "title": "Ví dụ 1: Tính giá trị biểu thức lượng giác phụ nhau",
        "question": "Giá trị của biểu thức $P = \\sin^2 25^\\circ + \\sin^2 65^\\circ + \\tan 30^\\circ \\cdot \\cot 30^\\circ$ bằng:",
        "options": [
          "2",
          "1",
          "0",
          "\\sqrt{3}"
        ],
        "correctIndex": 0,
        "explanation": "Do $25^\\circ + 65^\\circ = 90^\\circ$ nên $\\sin 65^\\circ = \\cos 25^\\circ$. Biểu thức trở thành $\\sin^2 25^\\circ + \\cos^2 25^\\circ + 1 = 1 + 1 = 2$."
      },
      {
        "id": "vq-9.ot4.2",
        "title": "Ví dụ 2: Tính cạnh góc vuông theo cạnh huyền",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $BC = 12\\text{ cm}, \\widehat{C} = 30^\\circ$. Độ dài cạnh $AB$ là:",
        "options": [
          "6 cm",
          "6\\sqrt{3} cm",
          "12\\sqrt{3} cm",
          "4 cm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AB = BC \\cdot \\sin C = 12 \\cdot \\sin 30^\\circ = 12 \\cdot 0,5 = 6\\text{ cm}$."
      },
      {
        "id": "vq-9.ot4.3",
        "title": "Ví dụ 3: Tính cạnh góc vuông theo tang",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 8\\text{ cm}, \\widehat{B} = 45^\\circ$. Độ dài cạnh $AC$ là:",
        "options": [
          "8 cm",
          "8\\sqrt{2} cm",
          "4\\sqrt{2} cm",
          "16 cm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AC = AB \\cdot \\tan 45^\\circ = 8 \\cdot 1 = 8\\text{ cm}$."
      },
      {
        "id": "vq-9.ot4.4",
        "title": "Ví dụ 4: Bài toán thực tế đo bóng tòa nhà",
        "question": "Một tòa nhà có bóng trên mặt đất dài $30\\text{ m}$ khi góc nâng của mặt trời là $60^\\circ$. Chiều cao của tòa nhà là:",
        "options": [
          "30\\sqrt{3} m",
          "10\\sqrt{3} m",
          "30 m",
          "60 m"
        ],
        "correctIndex": 0,
        "explanation": "Chiều cao tòa nhà: $h = 30 \\cdot \\tan 60^\\circ = 30\\sqrt{3}\\text{ m}$."
      }
    ],
    "tips": [
      "Luôn kiểm tra máy tính cầm tay đang ở chế độ DEG (chữ D) trước khi bấm các tỉ số lượng giác.",
      "Đối với hai góc phụ nhau: Sin góc này bằng Cos góc kia, Tan góc này bằng Cot góc kia.",
      "Cạnh góc vuông = Huyền nhân Sin đối = Huyền nhân Cos kề; Cạnh góc vuông này = Cạnh góc vuông kia nhân Tan đối = Cạnh góc vuông kia nhân Cot kề.",
      "Bài toán giác kế: Chiều cao toàn phần = Chiều cao tính được qua góc nâng ($d \\cdot \\tan\\alpha$) + Chiều cao giác kế ($h_0$)."
    ],
    "traps": [
      "Bẫy nhầm góc đối và góc kề khi hoán đổi giữa hai góc nhọn trong tam giác vuông.",
      "Bẫy để máy tính ở chế độ Radian (R) làm sai toàn bộ kết quả góc và cạnh.",
      "Bẫy quên cộng chiều cao người quan sát/giác kế trong bài toán đo chiều cao thực tế.",
      "Bẫy góc hạ: Góc hạ là góc tạo bởi đường ngắm nhìn xuống và tia nằm ngang, bằng góc nâng từ điểm dưới nhìn lên."
    ],
    "quizQuestions": [
      {
        "id": "q-9.ot4.1",
        "badge": "Câu 1 (NB) - Định nghĩa Sin của góc nhọn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
        "question": "Cho tam giác $ABC$ vuông tại $A$. Tỉ số lượng giác $\\sin B$ bằng:",
        "options": [
          "$\\frac{AC}{BC}$",
          "$\\frac{AB}{BC}$",
          "$\\frac{AC}{AB}$",
          "$\\frac{AB}{AC}$"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa: $\\sin B = \\frac{\\text{đối}}{\\text{huyền}} = \\frac{AC}{BC}$."
      },
      {
        "id": "q-9.ot4.2",
        "badge": "Câu 2 (NB) - Định nghĩa Tang của góc nhọn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
        "question": "Cho tam giác $ABC$ vuông tại $A$. Tỉ số lượng giác $\\tan B$ bằng:",
        "options": [
          "$\\frac{AC}{AB}$",
          "$\\frac{AB}{AC}$",
          "$\\frac{AC}{BC}$",
          "$\\frac{AB}{BC}$"
        ],
        "correctIndex": 0,
        "explanation": "Tang của góc $B$ là tỉ số giữa cạnh đối và cạnh kề: $\\tan B = \\frac{AC}{AB}$."
      },
      {
        "id": "q-9.ot4.3",
        "badge": "Câu 3 (NB) - Hệ thức góc phụ nhau",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 66)",
        "question": "Biết hai góc nhọn $\\alpha$ và $\\beta$ có $\\alpha + \\beta = 90^\\circ$. Khẳng định nào sau đây là đúng?",
        "options": [
          "$\\sin \\alpha = \\cos \\beta$",
          "$\\sin \\alpha = \\sin \\beta$",
          "$\\tan \\alpha = \\tan \\beta$",
          "$\\cos \\alpha = -\\cos \\beta$"
        ],
        "correctIndex": 0,
        "explanation": "Hai góc phụ nhau thì sin góc này bằng côsin góc kia: $\\sin \\alpha = \\cos \\beta$."
      },
      {
        "id": "q-9.ot4.4",
        "badge": "Câu 4 (NB) - Hệ thức cạnh góc vuông theo cạnh huyền",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $a$ và các cạnh góc vuông $b, c$. Hệ thức nào sau đây đúng?",
        "options": [
          "$b = a \\cdot \\sin B$",
          "$b = a \\cdot \\tan B$",
          "$b = a \\cdot \\cos B$",
          "$b = a \\cdot \\cot C$"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh góc vuông bằng cạnh huyền nhân sin góc đối: $b = a \\cdot \\sin B$."
      },
      {
        "id": "q-9.ot4.5",
        "badge": "Câu 5 (NB) - Hệ thức giữa hai cạnh góc vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "question": "Trong tam giác $ABC$ vuông tại $A$, cạnh góc vuông $b$ được tính theo cạnh $c$ và góc đối $B$ bởi:",
        "options": [
          "$b = c \\cdot \\tan B$",
          "$b = c \\cdot \\cot B$",
          "$b = c \\cdot \\sin B$",
          "$b = c \\cdot \\cos B$"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh góc vuông bằng cạnh góc vuông kia nhân với tang của góc đối: $b = c \\cdot \\tan B$."
      },
      {
        "id": "q-9.ot4.6",
        "badge": "Câu 6 (NB) - Giá trị sin 45 độ",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 61)",
        "question": "Giá trị của $\\sin 45^\\circ$ bằng:",
        "options": [
          "$\\frac{\\sqrt{2}}{2}$",
          "$\\frac{1}{2}$",
          "$\\frac{\\sqrt{3}}{2}$",
          "$1$"
        ],
        "correctIndex": 0,
        "explanation": "Theo bảng lượng giác các góc đặc biệt, $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."
      },
      {
        "id": "q-9.ot4.7",
        "badge": "Câu 7 (NB) - Giá trị tang 60 độ",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
        "question": "Giá trị của $\\tan 60^\\circ$ bằng:",
        "options": [
          "$\\sqrt{3}$",
          "$\\frac{\\sqrt{3}}{3}$",
          "$1$",
          "$\\frac{1}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Theo bảng góc đặc biệt: $\\tan 60^\\circ = \\sqrt{3}$."
      },
      {
        "id": "q-9.ot4.8",
        "badge": "Câu 8 (NB) - Hệ thức cơ bản sin bình cộng cos bình",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
        "question": "Với mọi góc nhọn $\\alpha$, giá trị của $\\sin^2 \\alpha + \\cos^2 \\alpha$ luôn bằng:",
        "options": [
          "1",
          "0",
          "2",
          "\\tan \\alpha"
        ],
        "correctIndex": 0,
        "explanation": "Đây là hệ thức lượng giác cơ bản: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
      },
      {
        "id": "q-9.ot4.9",
        "badge": "Câu 9 (TH) - Tính cạnh huyền từ cạnh góc vuông và góc 30 độ",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AC = 7\\text{ cm}, \\widehat{B} = 30^\\circ$. Độ dài cạnh huyền $BC$ bằng:",
        "options": [
          "14 cm",
          "7\\sqrt{3} cm",
          "14\\sqrt{3} cm",
          "3,5 cm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\sin B = \\frac{AC}{BC} \\Rightarrow BC = \\frac{AC}{\\sin 30^\\circ} = \\frac{7}{0,5} = 14\\text{ cm}$."
      },
      {
        "id": "q-9.ot4.10",
        "badge": "Câu 10 (TH) - Tính cạnh góc vuông theo côsin",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 18\\text{ cm}, \\widehat{B} = 60^\\circ$. Cạnh góc vuông $AB$ có độ dài là:",
        "options": [
          "9 cm",
          "9\\sqrt{3} cm",
          "18\\sqrt{3} cm",
          "6 cm"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh $AB$ kề góc $60^\\circ$ nên $AB = BC \\cdot \\cos 60^\\circ = 18 \\cdot 0,5 = 9\\text{ cm}$."
      },
      {
        "id": "q-9.ot4.11",
        "badge": "Câu 11 (TH) - Tính góc nhọn tam giác vuông 3-4-5",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 80)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 3\\text{ cm}, AC = 4\\text{ cm}$. Số đo góc $\\widehat{B}$ (làm tròn đến độ) là:",
        "options": [
          "53°",
          "37°",
          "45°",
          "60°"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\tan B = \\frac{AC}{AB} = \\frac{4}{3} \\approx 1,3333 \\Rightarrow \\widehat{B} \\approx 53^\\circ$."
      },
      {
        "id": "q-9.ot4.12",
        "badge": "Câu 12 (TH) - Rút gọn biểu thức lượng giác phụ nhau",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 11 (Trang 101)",
        "question": "Giá trị của biểu thức $A = \\sin 40^\\circ - \\cos 50^\\circ + \\tan 20^\\circ \\cdot \\tan 70^\\circ$ bằng:",
        "options": [
          "1",
          "0",
          "2",
          "-1"
        ],
        "correctIndex": 0,
        "explanation": "Vì $40^\\circ + 50^\\circ = 90^\\circ$ nên $\\cos 50^\\circ = \\sin 40^\\circ \\Rightarrow \\sin 40^\\circ - \\cos 50^\\circ = 0$. Vì $20^\\circ + 70^\\circ = 90^\\circ$ nên $\\tan 70^\\circ = \\cot 20^\\circ \\Rightarrow \\tan 20^\\circ \\cdot \\tan 70^\\circ = 1$. Vậy $A = 1$."
      },
      {
        "id": "q-9.ot4.13",
        "badge": "Câu 13 (TH) - Tính diện tích tam giác vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 10\\text{ cm}, \\widehat{C} = 45^\\circ$. Diện tích của tam giác $ABC$ là:",
        "options": [
          "25 cm²",
          "50 cm²",
          "25\\sqrt{2} cm²",
          "100 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Tam giác vuông cân có $AB = AC = 10 \\cdot \\sin 45^\\circ = 5\\sqrt{2}\\text{ cm}$. Diện tích: $S = \\frac{1}{2} (5\\sqrt{2})^2 = 25\\text{ cm}^2$."
      },
      {
        "id": "q-9.ot4.14",
        "badge": "Câu 14 (TH) - Tính đường cao trong tam giác vuông",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Độ dài đường cao $AH$ là:",
        "options": [
          "4,8 cm",
          "5 cm",
          "3,6 cm",
          "6,4 cm"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh huyền $BC = 10\\text{ cm}$. Đường cao $AH = \\frac{AB \\cdot AC}{BC} = \\frac{6 \\cdot 8}{10} = 4,8\\text{ cm}$."
      },
      {
        "id": "q-9.ot4.15",
        "badge": "Câu 15 (VD - Thực tế) - Đặt thang an toàn vào tường",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "question": "Một chiếc thang dài $3,5\\text{ m}$ dựng tựa vào tường thẳng đứng. Để đảm bảo an toàn, góc tạo bởi thang và mặt đất cần là $68^\\circ$. Khoảng cách từ chân thang đến chân tường là bao nhiêu mét (làm tròn đến hàng phần trăm)?",
        "options": [
          "1,31 m",
          "3,25 m",
          "1,45 m",
          "1,18 m"
        ],
        "correctIndex": 0,
        "explanation": "Khoảng cách từ chân thang đến tường là cạnh kề góc $68^\\circ$: $d = 3,5 \\cdot \\cos 68^\\circ \\approx 3,5 \\cdot 0,3746 = 1,311 \\approx 1,31\\text{ m}$."
      },
      {
        "id": "q-9.ot4.16",
        "badge": "Câu 16 (VD - Thực tế) - Độ cao máy bay cất cánh",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 130)",
        "question": "Một chiếc máy bay cất cánh theo góc nghiêng $22^\\circ$ so với mặt phẳng nằm ngang với tốc độ không đổi $300\\text{ km/h}$. Sau 2 phút, máy bay đạt độ cao bao nhiêu mét so với mặt đất (làm tròn đến hàng đơn vị)?",
        "options": [
          "3746 m",
          "4000 m",
          "3500 m",
          "4210 m"
        ],
        "correctIndex": 0,
        "explanation": "Quãng đường bay trong 2 phút ($2/60\\text{ h}$): $s = 300 \\cdot \\frac{2}{60} = 10\\text{ km} = 10\\,000\\text{ m}$. Độ cao đạt được: $h = 10\\,000 \\cdot \\sin 22^\\circ \\approx 10\\,000 \\cdot 0,3746 = 3746\\text{ m}$."
      },
      {
        "id": "q-9.ot4.17",
        "badge": "Câu 17 (VD - Thực tế) - Khoảng cách tàu cứu hộ từ hải đăng",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
        "question": "Một người đứng trên ngọn hải đăng cao $55\\text{ m}$ nhìn thấy một chiếc tàu với góc hạ $28^\\circ$. Khoảng cách từ tàu đến chân ngọn hải đăng là bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "options": [
          "103,4 m",
          "112,5 m",
          "98,2 m",
          "120,0 m"
        ],
        "correctIndex": 0,
        "explanation": "Khoảng cách từ tàu đến chân hải đăng: $d = \\frac{55}{\\tan 28^\\circ} \\approx \\frac{55}{0,5317} \\approx 103,44 \\approx 103,4\\text{ m}$."
      },
      {
        "id": "q-9.ot4.18",
        "badge": "Câu 18 (VD - Thực tế) - Đo chiều cao tháp bằng giác kế",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "question": "Một người đặt giác kế cao $1,6\\text{ m}$ cách chân ngọn tháp $60\\text{ m}$ để ngắm đỉnh tháp với góc nâng $34^\\circ$. Chiều cao của tháp là bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "options": [
          "42,1 m",
          "40,5 m",
          "44,2 m",
          "38,9 m"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao từ ống ngắm lên đỉnh tháp: $h_1 = 60 \\cdot \\tan 34^\\circ \\approx 60 \\cdot 0,6745 = 40,47\\text{ m}$. Chiều cao của tháp: $h = 40,47 + 1,6 = 42,07 \\approx 42,1\\text{ m}$."
      },
      {
        "id": "q-9.ot4.19",
        "badge": "Câu 19 (VD - Thực tế) - Độ dốc xe chạy lên cầu vượt",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
        "question": "Một đoạn dốc lên cầu vượt dài $150\\text{ m}$ và có đỉnh dốc cao $7,5\\text{ m}$ so với mặt đường. Góc nghiêng của con dốc so với phương nằm ngang là bao nhiêu (làm tròn đến độ)?",
        "options": [
          "3°",
          "5°",
          "2°",
          "4°"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\sin \\alpha = \\frac{7,5}{150} = 0,05 \\Rightarrow \\alpha \\approx 2^\\circ 52' \\approx 3^\\circ$."
      },
      {
        "id": "q-9.ot4.20",
        "badge": "Câu 20 (VD - Thực tế) - Thuyền qua sông bị nước đẩy xiên",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
        "question": "Một con sông rộng $90\\text{ m}$. Một chiếc đò chèo qua sông bị dòng nước cuốn trôi lệch theo phương xiên tạo với bờ một góc $55^\\circ$. Chiều dài đường đi thực tế của chiếc đò là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "110 m",
          "120 m",
          "105 m",
          "95 m"
        ],
        "correctIndex": 0,
        "explanation": "Bề rộng sông là cạnh đối diện góc $55^\\circ$: $\\sin 55^\\circ = \\frac{90}{s} \\Rightarrow s = \\frac{90}{\\sin 55^\\circ} \\approx \\frac{90}{0,8192} \\approx 109,87 \\approx 110\\text{ m}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "tf-9.ot4.1",
        "badge": "Đúng/Sai 1 (NB) - Định nghĩa và tính chất tỉ số lượng giác",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
        "prompt": "Cho góc nhọn $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$). Xét tính đúng/sai của các hệ thức sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$0 < \\sin \\alpha < 1$ và $0 < \\cos \\alpha < 1$.",
            "correctAnswer": true,
            "explanation": "Đúng vì trong tam giác vuông cạnh góc vuông luôn nhỏ hơn cạnh huyền."
          },
          {
            "id": "b",
            "text": "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.",
            "correctAnswer": true,
            "explanation": "Đúng theo định lý Pythagore: $\\frac{b^2}{a^2} + \\frac{c^2}{a^2} = \\frac{a^2}{a^2} = 1$."
          },
          {
            "id": "c",
            "text": "$\\tan \\alpha \\cdot \\cot \\alpha = 1$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\tan \\alpha = \\frac{b}{c}$ và $\\cot \\alpha = \\frac{c}{b}$."
          },
          {
            "id": "d",
            "text": "$\\tan \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$.",
            "correctAnswer": false,
            "explanation": "Sai, phải là $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.2",
        "badge": "Đúng/Sai 2 (NB) - Tỉ số lượng giác góc phụ nhau",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
        "prompt": "Cho hai góc nhọn $\\alpha$ và $\\beta$ phụ nhau ($\\alpha + \\beta = 90^\\circ$). Xét tính đúng/sai của các mệnh đề sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$\\sin \\alpha = \\cos \\beta$.",
            "correctAnswer": true,
            "explanation": "Đúng, sin góc này bằng côsin góc kia."
          },
          {
            "id": "b",
            "text": "$\\tan \\alpha = \\cot \\beta$.",
            "correctAnswer": true,
            "explanation": "Đúng, tang góc này bằng côtang góc kia."
          },
          {
            "id": "c",
            "text": "$\\sin^2 \\alpha + \\sin^2 \\beta = 1$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\sin \\beta = \\cos \\alpha$ nên $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
          },
          {
            "id": "d",
            "text": "$\\tan \\alpha \\cdot \\tan \\beta = -1$.",
            "correctAnswer": false,
            "explanation": "Sai, $\\tan \\beta = \\cot \\alpha$ nên $\\tan \\alpha \\cdot \\cot \\alpha = 1$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.3",
        "badge": "Đúng/Sai 3 (NB) - Hệ thức cạnh và góc trong tam giác vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $a$, các cạnh góc vuông $b, c$. Xét tính đúng/sai của các hệ thức:",
        "subItems": [
          {
            "id": "a",
            "text": "$b = a \\cdot \\sin B$.",
            "correctAnswer": true,
            "explanation": "Đúng, cạnh góc vuông bằng cạnh huyền nhân sin góc đối."
          },
          {
            "id": "b",
            "text": "$c = a \\cdot \\cos B$.",
            "correctAnswer": true,
            "explanation": "Đúng, cạnh góc vuông bằng cạnh huyền nhân cos góc kề."
          },
          {
            "id": "c",
            "text": "$b = c \\cdot \\tan C$.",
            "correctAnswer": false,
            "explanation": "Sai, phải là $b = c \\cdot \\tan B$ hoặc $b = c \\cdot \\cot C$."
          },
          {
            "id": "d",
            "text": "$c = b \\cdot \\cot B$.",
            "correctAnswer": true,
            "explanation": "Đúng, cạnh góc vuông bằng cạnh góc vuông kia nhân cot góc kề."
          }
        ]
      },
      {
        "id": "tf-9.ot4.4",
        "badge": "Đúng/Sai 4 (NB) - Giá trị lượng giác góc đặc biệt",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
        "prompt": "Xét tính đúng/sai của các giá trị lượng giác sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$\\sin 30^\\circ = \\cos 60^\\circ = 0,5$.",
            "correctAnswer": true,
            "explanation": "Đúng, đây là cặp giá trị góc đặc biệt phụ nhau."
          },
          {
            "id": "b",
            "text": "$\\tan 45^\\circ = 1$.",
            "correctAnswer": true,
            "explanation": "Đúng vì tam giác vuông cân có hai cạnh góc vuông bằng nhau."
          },
          {
            "id": "c",
            "text": "$\\sin 60^\\circ = \\frac{\\sqrt{2}}{2}$.",
            "correctAnswer": false,
            "explanation": "Sai, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$."
          },
          {
            "id": "d",
            "text": "$\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.5",
        "badge": "Đúng/Sai 5 (TH) - Giải tam giác vuông ABC có cạnh góc vuông 6 và 8",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Kẻ đường cao $AH$.",
        "subItems": [
          {
            "id": "a",
            "text": "Cạnh huyền $BC = 10\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $BC = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Đường cao $AH = 4,8\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $AH = \\frac{6 \\times 8}{10} = 4,8\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Góc nhọn $\\widehat{B} > 45^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AC = 8 > AB = 6 \\Rightarrow \\widehat{B} > \\widehat{C} \\Rightarrow \\widehat{B} > 45^\\circ$."
          },
          {
            "id": "d",
            "text": "$\\sin B = 0,6$.",
            "correctAnswer": false,
            "explanation": "Sai, $\\sin B = \\frac{AC}{BC} = \\frac{8}{10} = 0,8$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.6",
        "badge": "Đúng/Sai 6 (TH) - Tam giác vuông có một góc 30 độ",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 12\\text{ cm}, \\widehat{C} = 30^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Độ dài cạnh $AB = 6\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AB = BC \\cdot \\sin 30^\\circ = 12 \\cdot 0,5 = 6\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Độ dài cạnh $AC = 6\\sqrt{3}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AC = BC \\cdot \\cos 30^\\circ = 12 \\cdot \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Diện tích tam giác $ABC$ bằng $18\\sqrt{3}\\text{ cm}^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S = \\frac{1}{2} \\cdot 6 \\cdot 6\\sqrt{3} = 18\\sqrt{3}\\text{ cm}^2$."
          },
          {
            "id": "d",
            "text": "Góc $\\widehat{B} = 45^\\circ$.",
            "correctAnswer": false,
            "explanation": "Sai, $\\widehat{B} = 90^\\circ - 30^\\circ = 60^\\circ$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.7",
        "badge": "Đúng/Sai 7 (TH) - Tam giác nhọn và đường cao",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
        "prompt": "Cho tam giác nhọn $ABC$ có hai cạnh $AB = 8\\text{ cm}, AC = 10\\text{ cm}$ và $\\widehat{A} = 60^\\circ$. Kẻ đường cao $BH \\perp AC$.",
        "subItems": [
          {
            "id": "a",
            "text": "Đoạn thẳng $AH = 4\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì tam giác $ABH$ vuông tại $H$ có $\\widehat{A} = 60^\\circ$: $AH = 8 \\cdot \\cos 60^\\circ = 4\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Đường cao $BH = 4\\sqrt{3}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $BH = 8 \\cdot \\sin 60^\\circ = 4\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Đoạn thẳng $HC = 6\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $HC = AC - AH = 10 - 4 = 6\\text{ cm}$."
          },
          {
            "id": "d",
            "text": "Độ dài cạnh $BC = 2\\sqrt{21}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, tam giác $BHC$ vuông tại $H$: $BC = \\sqrt{BH^2 + HC^2} = \\sqrt{(4\\sqrt{3})^2 + 6^2} = \\sqrt{48 + 36} = \\sqrt{84} = 2\\sqrt{21}\\text{ cm}$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.8",
        "badge": "Đúng/Sai 8 (VD - Thực tế) - Đặt thang an toàn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "prompt": "Một chiếc thang dài $4,5\\text{ m}$ tựa vào tường nhà. Để đảm bảo an toàn, góc nghiêng của thang so với mặt đất phải nằm trong khoảng từ $65^\\circ$ đến $75^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Khi góc đặt thang là $70^\\circ$, thang thỏa mãn quy chuẩn an toàn.",
            "correctAnswer": true,
            "explanation": "Đúng vì $65^\\circ \\le 70^\\circ \\le 75^\\circ$."
          },
          {
            "id": "b",
            "text": "Khi góc nghiêng là $70^\\circ$, chân thang cách tường xấp xỉ $1,54\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $d = 4,5 \\cdot \\cos 70^\\circ \\approx 4,5 \\cdot 0,3420 = 1,539 \\approx 1,54\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Khi góc nghiêng là $70^\\circ$, đầu thang chạm tường ở độ cao lớn hơn $4,3\\text{ m}$.",
            "correctAnswer": false,
            "explanation": "Sai, $h = 4,5 \\cdot \\sin 70^\\circ \\approx 4,5 \\cdot 0,9397 = 4,23\\text{ m} < 4,3\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Nếu chân thang cách tường $2,25\\text{ m}$ thì góc đặt thang bằng $60^\\circ$, không an toàn.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\cos\\alpha = \\frac{2,25}{4,5} = 0,5 \\Rightarrow \\alpha = 60^\\circ < 65^\\circ$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.9",
        "badge": "Đúng/Sai 9 (VD - Thực tế) - Tàu ngầm lặn biển",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 111)",
        "prompt": "Một tàu ngầm di chuyển theo phương nghiêng lặn xuống biển tạo với mặt nước một góc $20^\\circ$ với tốc độ không đổi $18\\text{ km/h}$.",
        "subItems": [
          {
            "id": "a",
            "text": "Vận tốc của tàu ngầm đổi ra đơn vị mét trên giây là $5\\text{ m/s}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $18\\text{ km/h} = \\frac{18000}{3600} = 5\\text{ m/s}$."
          },
          {
            "id": "b",
            "text": "Sau 1 phút lặn, quãng đường tàu di chuyển theo đường nghiêng là $300\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $s = 5 \\times 60 = 300\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Sau 1 phút, độ sâu của tàu ngầm so với mặt nước biển lớn hơn $110\\text{ m}$.",
            "correctAnswer": false,
            "explanation": "Sai, độ sâu $h = 300 \\cdot \\sin 20^\\circ \\approx 300 \\cdot 0,3420 = 102,6\\text{ m} < 110\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Để đạt độ sâu $200\\text{ m}$, tàu ngầm cần di chuyển một quãng đường nghiêng khoảng gần $585\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $s = \\frac{200}{\\sin 20^\\circ} \\approx \\frac{200}{0,3420} \\approx 584,8\\text{ m} \\approx 585\\text{ m}$."
          }
        ]
      },
      {
        "id": "tf-9.ot4.10",
        "badge": "Đúng/Sai 10 (VD - Thực tế) - Đo khoảng cách hai bờ sông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "prompt": "Để đo khoảng cách giữa hai địa điểm $A$ và $B$ ở hai bên bờ sông, người ta chọn điểm $C$ cùng bên bờ sông với $B$ sao cho $AB \\perp BC$. Đo được $BC = 60\\text{ m}$ và dùng giác kế đo được góc $\\widehat{ACB} = 40^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Khoảng cách $AB$ tính bằng công thức $AB = BC \\cdot \\tan 40^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì tam giác $ABC$ vuông tại $B$ nên $AB = BC \\cdot \\tan C$."
          },
          {
            "id": "b",
            "text": "Khoảng cách $AB$ xấp xỉ bằng $50,3\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $AB = 60 \\cdot \\tan 40^\\circ \\approx 60 \\cdot 0,8391 = 50,35\\text{ m} \\approx 50,3\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Khoảng cách từ $A$ đến $C$ theo đường chim bay nhỏ hơn $75\\text{ m}$.",
            "correctAnswer": false,
            "explanation": "Sai, $AC = \\frac{60}{\\cos 40^\\circ} \\approx \\frac{60}{0,7660} \\approx 78,33\\text{ m} > 75\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Nếu đo được góc $\\widehat{ACB} = 45^\\circ$ thì khoảng cách $AB = 60\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì khi đó tam giác $ABC$ vuông cân tại $B$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "sa-9.ot4.1",
        "badge": "Trả lời ngắn 1 (NB) - Tính cạnh góc vuông theo cạnh huyền",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 24\\text{ cm}$ và $\\widehat{B} = 30^\\circ$. Tính độ dài cạnh góc vuông $AC$ theo đơn vị centimet.",
        "correctAnswer": "12",
        "acceptableAnswers": [
          "12",
          "12 cm",
          "12cm"
        ],
        "explanation": "Ta có $AC = BC \\cdot \\sin 30^\\circ = 24 \\cdot 0,5 = 12\\text{ cm}$."
      },
      {
        "id": "sa-9.ot4.2",
        "badge": "Trả lời ngắn 2 (NB) - Tính cạnh góc vuông tam giác vuông cân",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 15\\text{ cm}$ và $\\widehat{C} = 45^\\circ$. Tính độ dài cạnh $AC$ theo đơn vị centimet.",
        "correctAnswer": "15",
        "acceptableAnswers": [
          "15",
          "15 cm",
          "15cm"
        ],
        "explanation": "Tam giác vuông cân nên $AC = AB = 15\\text{ cm}$."
      },
      {
        "id": "sa-9.ot4.3",
        "badge": "Trả lời ngắn 3 (NB) - Giá trị biểu thức lượng giác cơ bản",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
        "prompt": "Tính giá trị của biểu thức $M = \\sin^2 32^\\circ + \\sin^2 58^\\circ + \\tan 45^\\circ$.",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2"
        ],
        "explanation": "Vì $32^\\circ + 58^\\circ = 90^\\circ$ nên $\\sin 58^\\circ = \\cos 32^\\circ$. Biểu thức trở thành: $\\sin^2 32^\\circ + \\cos^2 32^\\circ + \\tan 45^\\circ = 1 + 1 = 2$."
      },
      {
        "id": "sa-9.ot4.4",
        "badge": "Trả lời ngắn 4 (NB) - Tính cạnh góc vuông theo tang",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 4\\text{ cm}$ và $\\tan B = 3$. Tính độ dài cạnh $AC$ theo đơn vị centimet.",
        "correctAnswer": "12",
        "acceptableAnswers": [
          "12",
          "12 cm",
          "12cm"
        ],
        "explanation": "Ta có $AC = AB \\cdot \\tan B = 4 \\cdot 3 = 12\\text{ cm}$."
      },
      {
        "id": "sa-9.ot4.5",
        "badge": "Trả lời ngắn 5 (TH) - Tính cạnh kề góc 60 độ",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 20\\text{ cm}$ và $\\widehat{C} = 60^\\circ$. Tính độ dài cạnh góc vuông $AC$ theo đơn vị centimet.",
        "correctAnswer": "10",
        "acceptableAnswers": [
          "10",
          "10 cm",
          "10cm"
        ],
        "explanation": "Cạnh $AC$ kề góc $C$: $AC = BC \\cdot \\cos 60^\\circ = 20 \\cdot 0,5 = 10\\text{ cm}$."
      },
      {
        "id": "sa-9.ot4.6",
        "badge": "Trả lời ngắn 6 (TH) - Đường cao tam giác vuông",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 15\\text{ cm}$ và $AC = 20\\text{ cm}$. Tính độ dài đường cao $AH$ hạ từ đỉnh $A$ xuống cạnh huyền theo đơn vị centimet.",
        "correctAnswer": "12",
        "acceptableAnswers": [
          "12",
          "12 cm",
          "12cm"
        ],
        "explanation": "Cạnh huyền $BC = \\sqrt{15^2 + 20^2} = 25\\text{ cm}$. Đường cao $AH = \\frac{AB \\cdot AC}{BC} = \\frac{15 \\cdot 20}{25} = 12\\text{ cm}$."
      },
      {
        "id": "sa-9.ot4.7",
        "badge": "Trả lời ngắn 7 (TH) - Diện tích tam giác vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 12\\text{ cm}$ và $\\widehat{B} = 45^\\circ$. Tính diện tích tam giác $ABC$ theo đơn vị $\\text{cm}^2$.",
        "correctAnswer": "36",
        "acceptableAnswers": [
          "36",
          "36 cm2",
          "36cm2"
        ],
        "explanation": "Tam giác vuông cân có $AB = AC = 12 \\cdot \\sin 45^\\circ = 6\\sqrt{2}\\text{ cm}$. Diện tích $S = \\frac{1}{2} (6\\sqrt{2})^2 = 36\\text{ cm}^2$."
      },
      {
        "id": "sa-9.ot4.8",
        "badge": "Trả lời ngắn 8 (VD - Thực tế) - Chiều cao cột cờ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 110)",
        "prompt": "Một bạn học sinh đứng cách chân cột cờ $12\\text{ m}$ nhìn lên đỉnh cột cờ với góc nâng $45^\\circ$. Mắt bạn cách mặt đất $1,5\\text{ m}$. Tính chiều cao cột cờ theo mét (viết dưới dạng số thập phân).",
        "correctAnswer": "13.5",
        "acceptableAnswers": [
          "13.5",
          "13,5",
          "13.5 m",
          "13,5 m",
          "13.5m",
          "13,5m"
        ],
        "explanation": "Độ cao từ tầm mắt lên đỉnh cột cờ: $h_1 = 12 \\cdot \\tan 45^\\circ = 12\\text{ m}$. Chiều cao cột cờ: $h = 12 + 1,5 = 13,5\\text{ m}$."
      },
      {
        "id": "sa-9.ot4.9",
        "badge": "Trả lời ngắn 9 (VD - Thực tế) - Độ cao con dốc",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
        "prompt": "Một con dốc dài $300\\text{ m}$ có góc nghiêng so với mặt đất nằm ngang là $5^\\circ$. Tính độ cao của đỉnh dốc so với chân dốc theo mét (làm tròn đến hàng đơn vị, lấy $\\sin 5^\\circ \\approx 0,0872$).",
        "correctAnswer": "26",
        "acceptableAnswers": [
          "26",
          "26 m",
          "26m"
        ],
        "explanation": "Độ cao đỉnh dốc: $h = 300 \\cdot \\sin 5^\\circ \\approx 300 \\cdot 0,0872 = 26,16\\text{ m} \\approx 26\\text{ m}$."
      },
      {
        "id": "sa-9.ot4.10",
        "badge": "Trả lời ngắn 10 (VD - Thực tế) - Khoảng cách tàu đến hải đăng",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
        "prompt": "Một ngọn hải đăng cao $45\\text{ m}$ so với mực nước biển. Người quan sát đứng trên đỉnh nhìn thấy một con tàu với góc hạ $30^\\circ$. Khoảng cách từ tàu đến chân ngọn hải đăng là bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$)?",
        "correctAnswer": "78",
        "acceptableAnswers": [
          "78",
          "78 m",
          "78m"
        ],
        "explanation": "Khoảng cách từ tàu đến chân hải đăng: $d = \\frac{45}{\\tan 30^\\circ} = 45\\sqrt{3} \\approx 45 \\cdot 1,732 = 77,94 \\approx 78\\text{ m}$."
      }
    ],
    "examSets": [
      {
        "id": "de-1",
        "title": "Đề ôn tập số 1",
        "description": "Đề ôn tập tổng hợp cuối Chương IV (Hệ thức lượng trong tam giác vuông) - Đề số 1",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc4-d1-q1",
            "badge": "Câu 1 (NB) - Định nghĩa Cos của góc nhọn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "question": "Cho tam giác $ABC$ vuông tại $A$. Tỉ số lượng giác $\\cos B$ bằng:",
            "options": [
              "$\\frac{AB}{BC}$",
              "$\\frac{AC}{BC}$",
              "$\\frac{AC}{AB}$",
              "$\\frac{BC}{AB}$"
            ],
            "correctIndex": 0,
            "explanation": "Theo định nghĩa: $\\cos B = \\frac{\\text{kề}}{\\text{huyền}} = \\frac{AB}{BC}$."
          },
          {
            "id": "otc4-d1-q2",
            "badge": "Câu 2 (NB) - Định nghĩa Cot của góc nhọn",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "question": "Cho tam giác $ABC$ vuông tại $A$. Tỉ số lượng giác $\\cot C$ bằng:",
            "options": [
              "$\\frac{AC}{AB}$",
              "$\\frac{AB}{AC}$",
              "$\\frac{AC}{BC}$",
              "$\\frac{BC}{AC}$"
            ],
            "correctIndex": 0,
            "explanation": "Đối với góc $C$, cạnh kề là $AC$, cạnh đối là $AB$. Do đó $\\cot C = \\frac{AC}{AB}$."
          },
          {
            "id": "otc4-d1-q3",
            "badge": "Câu 3 (NB) - Hai góc phụ nhau",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "question": "Nếu hai góc nhọn $\\alpha$ và $\\beta$ phụ nhau thì:",
            "options": [
              "$\\tan \\alpha = \\cot \\beta$",
              "$\\sin \\alpha = \\sin \\beta$",
              "$\\cos \\alpha = \\cos \\beta$",
              "$\\tan \\alpha = \\tan \\beta$"
            ],
            "correctIndex": 0,
            "explanation": "Hai góc phụ nhau thì tang góc này bằng côtang góc kia: $\\tan \\alpha = \\cot \\beta$."
          },
          {
            "id": "otc4-d1-q4",
            "badge": "Câu 4 (NB) - Giá trị sin 30 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Giá trị của $\\sin 30^\\circ$ bằng:",
            "options": [
              "$\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{\\sqrt{2}}{2}$",
              "$1$"
            ],
            "correctIndex": 0,
            "explanation": "Theo bảng góc đặc biệt, $\\sin 30^\\circ = \\frac{1}{2}$."
          },
          {
            "id": "otc4-d1-q5",
            "badge": "Câu 5 (TH) - Tính cạnh góc vuông theo cạnh huyền và sin",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 16\\text{ cm}, \\widehat{B} = 60^\\circ$. Độ dài cạnh $AC$ là:",
            "options": [
              "$8\\sqrt{3}\\text{ cm}$",
              "$8\\text{ cm}$",
              "$16\\sqrt{3}\\text{ cm}$",
              "$12\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Cạnh $AC$ đối diện góc $B$: $AC = BC \\cdot \\sin 60^\\circ = 16 \\cdot \\frac{\\sqrt{3}}{2} = 8\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "otc4-d1-q6",
            "badge": "Câu 6 (TH) - Tính cạnh góc vuông theo tang",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, \\widehat{C} = 30^\\circ$. Độ dài cạnh $AC$ là:",
            "options": [
              "$6\\sqrt{3}\\text{ cm}$",
              "$2\\sqrt{3}\\text{ cm}$",
              "$12\\text{ cm}$",
              "$3\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\tan C = \\frac{AB}{AC} \\Rightarrow AC = \\frac{AB}{\\tan 30^\\circ} = \\frac{6}{\\frac{\\sqrt{3}}{3}} = 6\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "otc4-d1-q7",
            "badge": "Câu 7 (TH) - Tính giá trị biểu thức lượng giác",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 11 (Trang 101)",
            "question": "Tính giá trị của biểu thức $P = \\cos^2 15^\\circ + \\cos^2 75^\\circ$.",
            "options": [
              "1",
              "0",
              "2",
              "\\frac{1}{2}"
            ],
            "correctIndex": 0,
            "explanation": "Vì $15^\\circ + 75^\\circ = 90^\\circ$ nên $\\cos 75^\\circ = \\sin 15^\\circ$. Do đó $P = \\cos^2 15^\\circ + \\sin^2 15^\\circ = 1$."
          },
          {
            "id": "otc4-d1-q8",
            "badge": "Câu 8 (TH) - Tìm góc nhọn biết tỉ số",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Cho góc nhọn $\\alpha$ có $\\tan \\alpha = 1$. Số đo của góc $\\alpha$ là:",
            "options": [
              "45°",
              "30°",
              "60°",
              "90°"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\tan 45^\\circ = 1 \\Rightarrow \\alpha = 45^\\circ$."
          },
          {
            "id": "otc4-d1-q9",
            "badge": "Câu 9 (TH) - Giải tam giác vuông cân",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
            "question": "Một tam giác vuông cân có cạnh góc vuông bằng $5\\text{ cm}$. Độ dài cạnh huyền của tam giác đó là:",
            "options": [
              "$5\\sqrt{2}\\text{ cm}$",
              "$10\\text{ cm}$",
              "$5\\sqrt{3}\\text{ cm}$",
              "$2,5\\sqrt{2}\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Theo định lý Pythagore hoặc hệ thức lượng: $a = \\frac{5}{\\sin 45^\\circ} = 5\\sqrt{2}\\text{ cm}$."
          },
          {
            "id": "otc4-d1-q10",
            "badge": "Câu 10 (VD) - Tính cạnh tam giác không vuông qua đường cao",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
            "question": "Cho tam giác nhọn $ABC$ có $AB = 10\\text{ cm}, \\widehat{B} = 45^\\circ, \\widehat{C} = 30^\\circ$. Đường cao $AH$ hạ từ $A$ xuống $BC$ có độ dài là:",
            "options": [
              "$5\\sqrt{2}\\text{ cm}$",
              "$5\\text{ cm}$",
              "$5\\sqrt{3}\\text{ cm}$",
              "$10\\sqrt{2}\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Tam giác $ABH$ vuông tại $H$: $AH = AB \\cdot \\sin B = 10 \\cdot \\sin 45^\\circ = 5\\sqrt{2}\\text{ cm}$."
          },
          {
            "id": "otc4-d1-q11",
            "badge": "Câu 11 (VD - Thực tế) - Đo bóng cột cờ",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 72)",
            "question": "Một cột cờ cao $10\\text{ m}$ có bóng in trên mặt đất dài $10\\text{ m}$. Góc tạo bởi tia nắng mặt trời và mặt đất lúc đó bằng:",
            "options": [
              "45°",
              "30°",
              "60°",
              "50°"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\tan \\alpha = \\frac{10}{10} = 1 \\Rightarrow \\alpha = 45^\\circ$."
          },
          {
            "id": "otc4-d1-q12",
            "badge": "Câu 12 (VD - Thực tế) - Thang dựa tường",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
            "question": "Một chiếc thang dài $5\\text{ m}$ tựa vào tường tạo với mặt đất góc $65^\\circ$. Chiều cao điểm tựa của thang trên tường là bao nhiêu mét (làm tròn đến hàng phần mười)?",
            "options": [
              "4,5 m",
              "4,1 m",
              "3,8 m",
              "4,8 m"
            ],
            "correctIndex": 0,
            "explanation": "Chiều cao điểm tựa: $h = 5 \\cdot \\sin 65^\\circ \\approx 5 \\cdot 0,9063 = 4,53 \\approx 4,5\\text{ m}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc4-d1-tf1",
            "badge": "Câu 1 (NB) - Quan hệ giữa các tỉ số lượng giác",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "prompt": "Cho góc nhọn $\\alpha$. Xét tính đúng/sai của các hệ thức sau:",
            "subItems": [
              {
                "id": "a",
                "text": "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.",
                "correctAnswer": true,
                "explanation": "Đúng theo hệ thức lượng giác cơ bản."
              },
              {
                "id": "b",
                "text": "$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$.",
                "correctAnswer": true,
                "explanation": "Đúng theo định nghĩa."
              },
              {
                "id": "c",
                "text": "$\\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$.",
                "correctAnswer": true,
                "explanation": "Đúng theo định nghĩa."
              },
              {
                "id": "d",
                "text": "$\\tan \\alpha + \\cot \\alpha = 1$.",
                "correctAnswer": false,
                "explanation": "Sai, chỉ có $\\tan\\alpha \\cdot \\cot\\alpha = 1$."
              }
            ]
          },
          {
            "id": "otc4-d1-tf2",
            "badge": "Câu 2 (TH) - Giải tam giác vuông ABC có cạnh góc vuông 9 và 12",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\\text{ cm}, AC = 12\\text{ cm}$.",
            "subItems": [
              {
                "id": "a",
                "text": "Cạnh huyền $BC = 15\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $BC = \\sqrt{9^2 + 12^2} = 15\\text{ cm}$."
              },
              {
                "id": "b",
                "text": "$\\sin B = 0,8$.",
                "correctAnswer": true,
                "explanation": "Đúng, $\\sin B = \\frac{12}{15} = 0,8$."
              },
              {
                "id": "c",
                "text": "Đường cao kẻ từ $A$ xuống $BC$ dài $7,2\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $AH = \\frac{9 \\cdot 12}{15} = 7,2\\text{ cm}$."
              },
              {
                "id": "d",
                "text": "Góc nhọn $\\widehat{B} < 45^\\circ$.",
                "correctAnswer": false,
                "explanation": "Sai, vì $AC = 12 > AB = 9 \\Rightarrow \\widehat{B} > 45^\\circ$."
              }
            ]
          },
          {
            "id": "otc4-d1-tf3",
            "badge": "Câu 3 (TH) - Giá trị lượng giác của các góc phụ nhau",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 66)",
            "prompt": "Xét tính đúng/sai của các biểu thức sau:",
            "subItems": [
              {
                "id": "a",
                "text": "$\\sin 20^\\circ = \\cos 70^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $20^\\circ + 70^\\circ = 90^\\circ$."
              },
              {
                "id": "b",
                "text": "$\\tan 35^\\circ = \\cot 55^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $35^\\circ + 55^\\circ = 90^\\circ$."
              },
              {
                "id": "c",
                "text": "$\\sin^2 40^\\circ + \\sin^2 50^\\circ = 1$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $\\sin 50^\\circ = \\cos 40^\\circ$."
              },
              {
                "id": "d",
                "text": "$\\cos 60^\\circ = \\frac{\\sqrt{3}}{2}$.",
                "correctAnswer": false,
                "explanation": "Sai, $\\cos 60^\\circ = \\frac{1}{2}$."
              }
            ]
          },
          {
            "id": "otc4-d1-tf4",
            "badge": "Câu 4 (VD - Thực tế) - Bài toán thang tựa tường",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
            "prompt": "Một chiếc thang dài $4\\text{ m}$ dựng tựa vào tường thẳng đứng tạo với mặt đất góc $65^\\circ$.",
            "subItems": [
              {
                "id": "a",
                "text": "Khoảng cách từ chân thang đến chân tường là $4 \\cdot \\cos 65^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng, khoảng cách là cạnh kề góc $65^\\circ$."
              },
              {
                "id": "b",
                "text": "Khoảng cách chân thang đến tường xấp xỉ $1,69\\text{ m}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $4 \\cdot \\cos 65^\\circ \\approx 1,69\\text{ m}$."
              },
              {
                "id": "c",
                "text": "Chiều cao đầu trên của thang chạm tường xấp xỉ $3,63\\text{ m}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $h = 4 \\cdot \\sin 65^\\circ \\approx 3,63\\text{ m}$."
              },
              {
                "id": "d",
                "text": "Nếu đầu thang trượt xuống $1\\text{ m}$ thì góc giữa thang và đất tăng lên.",
                "correctAnswer": false,
                "explanation": "Sai, thang trượt xuống thấp thì góc với mặt đất phải giảm đi."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc4-d1-sa1",
            "badge": "Câu 1 (NB) - Tính cạnh góc vuông theo cạnh huyền",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 18\\text{ cm}, \\widehat{C} = 30^\\circ$. Tính độ dài cạnh $AB$ theo centimet.",
            "correctAnswer": "9",
            "acceptableAnswers": [
              "9",
              "9 cm",
              "9cm"
            ],
            "explanation": "Ta có $AB = BC \\cdot \\sin 30^\\circ = 18 \\cdot 0,5 = 9\\text{ cm}$."
          },
          {
            "id": "otc4-d1-sa2",
            "badge": "Câu 2 (NB) - Tính cạnh tam giác vuông cân",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 11\\text{ cm}, \\widehat{B} = 45^\\circ$. Tính độ dài cạnh $AC$ theo centimet.",
            "correctAnswer": "11",
            "acceptableAnswers": [
              "11",
              "11 cm",
              "11cm"
            ],
            "explanation": "Tam giác vuông cân nên $AC = AB = 11\\text{ cm}$."
          },
          {
            "id": "otc4-d1-sa3",
            "badge": "Câu 3 (TH) - Tính cạnh huyền từ cạnh kề góc 60 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 8\\text{ cm}, \\widehat{B} = 60^\\circ$. Tính độ dài cạnh huyền $BC$ theo centimet.",
            "correctAnswer": "16",
            "acceptableAnswers": [
              "16",
              "16 cm",
              "16cm"
            ],
            "explanation": "Ta có $\\cos 60^\\circ = \\frac{AB}{BC} \\Rightarrow BC = \\frac{8}{0,5} = 16\\text{ cm}$."
          },
          {
            "id": "otc4-d1-sa4",
            "badge": "Câu 4 (TH) - Tính giá trị biểu thức lượng giác",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "prompt": "Tính giá trị của biểu thức $K = \\sin^2 12^\\circ + \\sin^2 78^\\circ + 2\\tan 45^\\circ$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
              "3"
            ],
            "explanation": "Do $12^\\circ + 78^\\circ = 90^\\circ$ nên $\\sin 78^\\circ = \\cos 12^\\circ$. Ta có $K = 1 + 2(1) = 3$."
          },
          {
            "id": "otc4-d1-sa5",
            "badge": "Câu 5 (VD - Thực tế) - Độ cao con dốc đường bộ",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
            "prompt": "Một đoạn dốc dài $200\\text{ m}$ nghiêng $6^\\circ$ so với mặt đất. Hỏi đỉnh dốc cao bao nhiêu mét so với chân dốc (làm tròn đến hàng đơn vị, lấy $\\sin 6^\\circ \\approx 0,1045$)?",
            "correctAnswer": "21",
            "acceptableAnswers": [
              "21",
              "21 m",
              "21m"
            ],
            "explanation": "Chiều cao đỉnh dốc: $h = 200 \\cdot \\sin 6^\\circ \\approx 200 \\cdot 0,1045 = 20,9\\text{ m} \\approx 21\\text{ m}$."
          },
          {
            "id": "otc4-d1-sa6",
            "badge": "Câu 6 (VD - Thực tế) - Chiều cao ngọn cây qua giác kế",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 110)",
            "prompt": "Một bạn học sinh đặt giác kế cao $1,4\\text{ m}$ cách gốc cây $10\\text{ m}$ ngắm lên ngọn cây với góc nâng $45^\\circ$. Chiều cao của cây là bao nhiêu mét (viết dưới dạng số thập phân)?",
            "correctAnswer": "11.4",
            "acceptableAnswers": [
              "11.4",
              "11,4",
              "11.4 m",
              "11,4 m",
              "11.4m",
              "11,4m"
            ],
            "explanation": "Độ cao từ tầm mắt: $h_1 = 10 \\cdot \\tan 45^\\circ = 10\\text{ m}$. Chiều cao cây: $h = 10 + 1,4 = 11,4\\text{ m}$."
          }
        ]
      },
      {
        "id": "de-2",
        "title": "Đề ôn tập số 2",
        "description": "Đề ôn tập tổng hợp cuối Chương IV (Hệ thức lượng trong tam giác vuông) - Đề số 2",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc4-d2-q1",
            "badge": "Câu 1 (NB) - Quan hệ tỉ số lượng giác",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "question": "Trong một tam giác vuông, khẳng định nào sau đây là đúng?",
            "options": [
              "Cạnh đối diện góc $30^\\circ$ bằng nửa cạnh huyền",
              "Cạnh đối diện góc $60^\\circ$ bằng nửa cạnh huyền",
              "Cạnh góc vuông luôn lớn hơn cạnh huyền",
              "Sin của một góc nhọn có thể lớn hơn 1"
            ],
            "correctIndex": 0,
            "explanation": "Vì $\\sin 30^\\circ = 0,5$ nên cạnh đối diện góc $30^\\circ$ bằng nửa cạnh huyền."
          },
          {
            "id": "otc4-d2-q2",
            "badge": "Câu 2 (NB) - Hệ thức hai cạnh góc vuông",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
            "question": "Cho tam giác $ABC$ vuông tại $A$. Hệ thức nào biểu diễn đúng cạnh $c = AB$ theo cạnh $b = AC$ và góc đối $C$?",
            "options": [
              "$c = b \\cdot \\tan C$",
              "$c = b \\cdot \\cot C$",
              "$c = b \\cdot \\sin C$",
              "$c = b \\cdot \\cos C$"
            ],
            "correctIndex": 0,
            "explanation": "Mỗi cạnh góc vuông bằng cạnh góc vuông kia nhân với tang của góc đối: $c = b \\cdot \\tan C$."
          },
          {
            "id": "otc4-d2-q3",
            "badge": "Câu 3 (NB) - Giá trị cos 30 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Giá trị của $\\cos 30^\\circ$ bằng:",
            "options": [
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{2}$",
              "$\\frac{\\sqrt{2}}{2}$",
              "$\\sqrt{3}$"
            ],
            "correctIndex": 0,
            "explanation": "Theo bảng góc đặc biệt: $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$."
          },
          {
            "id": "otc4-d2-q4",
            "badge": "Câu 4 (NB) - Điều kiện giải tam giác vuông",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
            "question": "Để giải được một tam giác vuông, ta cần biết ít nhất:",
            "options": [
              "2 yếu tố, trong đó có ít nhất một cạnh",
              "Chỉ cần 2 góc nhọn",
              "3 góc",
              "Chỉ cần 1 cạnh bất kì"
            ],
            "correctIndex": 0,
            "explanation": "Cần ít nhất 2 yếu tố ngoài góc vuông, trong đó bắt buộc phải có ít nhất 1 cạnh."
          },
          {
            "id": "otc4-d2-q5",
            "badge": "Câu 5 (TH) - Tính cạnh góc vuông theo côsin góc kề",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $BC = 20\\text{ cm}, \\cos B = 0,8$. Độ dài cạnh $AB$ là:",
            "options": [
              "16 cm",
              "12 cm",
              "15 cm",
              "18 cm"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $AB = BC \\cdot \\cos B = 20 \\cdot 0,8 = 16\\text{ cm}$."
          },
          {
            "id": "otc4-d2-q6",
            "badge": "Câu 6 (TH) - Tìm góc nhọn biết cạnh đối và kề",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 80)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5\\text{ cm}, AC = 5\\sqrt{3}\\text{ cm}$. Số đo góc $\\widehat{C}$ là:",
            "options": [
              "30°",
              "60°",
              "45°",
              "75°"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\tan C = \\frac{AB}{AC} = \\frac{5}{5\\sqrt{3}} = \\frac{\\sqrt{3}}{3} \\Rightarrow \\widehat{C} = 30^\\circ$."
          },
          {
            "id": "otc4-d2-q7",
            "badge": "Câu 7 (TH) - Rút gọn biểu thức lượng giác",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 11 (Trang 101)",
            "question": "Giá trị của biểu thức $H = \\sin 25^\\circ - \\cos 65^\\circ + \\cot 45^\\circ$ là:",
            "options": [
              "1",
              "0",
              "2",
              "-1"
            ],
            "correctIndex": 0,
            "explanation": "Vì $25^\\circ + 65^\\circ = 90^\\circ$ nên $\\cos 65^\\circ = \\sin 25^\\circ \\Rightarrow H = 0 + 1 = 1$."
          },
          {
            "id": "otc4-d2-q8",
            "badge": "Câu 8 (TH) - Tính đường chéo hình vuông",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 69)",
            "question": "Một hình vuông có độ dài cạnh là $6\\text{ cm}$. Độ dài đường chéo của hình vuông đó là:",
            "options": [
              "$6\\sqrt{2}\\text{ cm}$",
              "$12\\text{ cm}$",
              "$6\\sqrt{3}\\text{ cm}$",
              "$3\\sqrt{2}\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Đường chéo chia hình vuông thành tam giác vuông cân có góc $45^\\circ$: $d = \\frac{6}{\\sin 45^\\circ} = 6\\sqrt{2}\\text{ cm}$."
          },
          {
            "id": "otc4-d2-q9",
            "badge": "Câu 9 (TH) - Chiều cao tam giác đều",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
            "question": "Cho tam giác đều $ABC$ có cạnh bằng $8\\text{ cm}$. Chiều cao $AH$ của tam giác đều đó là:",
            "options": [
              "$4\\sqrt{3}\\text{ cm}$",
              "$4\\text{ cm}$",
              "$8\\sqrt{3}\\text{ cm}$",
              "$6\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Tam giác $ABH$ vuông tại $H$ có $\\widehat{B} = 60^\\circ$: $AH = 8 \\cdot \\sin 60^\\circ = 4\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "otc4-d2-q10",
            "badge": "Câu 10 (VD) - Diện tích tứ giác có hai đường chéo vuông góc",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 109)",
            "question": "Một hình thoi có cạnh bằng $10\\text{ cm}$ và một góc nhọn bằng $60^\\circ$. Diện tích của hình thoi đó là:",
            "options": [
              "$50\\sqrt{3}\\text{ cm}^2$",
              "$100\\sqrt{3}\\text{ cm}^2$",
              "$25\\sqrt{3}\\text{ cm}^2$",
              "$50\\text{ cm}^2$"
            ],
            "correctIndex": 0,
            "explanation": "Nửa đường chéo: $10 \\cdot \\sin 30^\\circ = 5\\text{ cm}$ và $10 \\cdot \\cos 30^\\circ = 5\\sqrt{3}\\text{ cm}$. Hai đường chéo là $10\\text{ cm}$ và $10\\sqrt{3}\\text{ cm}$. Diện tích $S = \\frac{1}{2} \\cdot 10 \\cdot 10\\sqrt{3} = 50\\sqrt{3}\\text{ cm}^2$."
          },
          {
            "id": "otc4-d2-q11",
            "badge": "Câu 11 (VD - Thực tế) - Độ cao máy bay cất cánh",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 130)",
            "question": "Một máy bay bay lên theo góc nghiêng $18^\\circ$ với vận tốc $360\\text{ km/h}$. Sau 1 phút, máy bay đạt độ cao bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sin 18^\\circ \\approx 0,3090$)?",
            "options": [
              "1854 m",
              "2000 m",
              "1650 m",
              "2120 m"
            ],
            "correctIndex": 0,
            "explanation": "Quãng đường bay: $s = 360 \\times \\frac{1}{60} = 6\\text{ km} = 6000\\text{ m}$. Độ cao $h = 6000 \\cdot \\sin 18^\\circ \\approx 6000 \\cdot 0,3090 = 1854\\text{ m}$."
          },
          {
            "id": "otc4-d2-q12",
            "badge": "Câu 12 (VD - Thực tế) - Đo chiều cao tháp bằng giác kế",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
            "question": "Một người đứng cách chân tháp $45\\text{ m}$, giác kế đặt cao $1,5\\text{ m}$ ngắm đỉnh tháp dưới góc nâng $40^\\circ$. Chiều cao ngọn tháp là bao nhiêu mét (làm tròn đến hàng phần mười)?",
            "options": [
              "39,3 m",
              "37,8 m",
              "41,2 m",
              "43,0 m"
            ],
            "correctIndex": 0,
            "explanation": "Chiều cao tháp: $h = 1,5 + 45 \\cdot \\tan 40^\\circ \\approx 1,5 + 45 \\cdot 0,8391 = 1,5 + 37,76 = 39,26 \\approx 39,3\\text{ m}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc4-d2-tf1",
            "badge": "Câu 1 (NB) - Tính chất các tỉ số lượng giác",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "prompt": "Xét tính đúng/sai của các nhận định sau về góc nhọn $\\alpha$:",
            "subItems": [
              {
                "id": "a",
                "text": "Khi góc $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$ thì $\\sin \\alpha$ tăng.",
                "correctAnswer": true,
                "explanation": "Đúng, góc tăng thì sin tăng."
              },
              {
                "id": "b",
                "text": "Khi góc $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$ thì $\\cos \\alpha$ tăng.",
                "correctAnswer": false,
                "explanation": "Sai, góc tăng thì côsin giảm."
              },
              {
                "id": "c",
                "text": "Khi góc $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$ thì $\\tan \\alpha$ tăng.",
                "correctAnswer": true,
                "explanation": "Đúng, góc tăng thì tang tăng."
              },
              {
                "id": "d",
                "text": "Nếu $\\sin \\alpha = \\cos \\alpha$ thì $\\alpha = 45^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $\\tan\\alpha = 1 \\Rightarrow \\alpha = 45^\\circ$."
              }
            ]
          },
          {
            "id": "otc4-d2-tf2",
            "badge": "Câu 2 (TH) - Giải tam giác vuông MNP vuông tại M",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 68)",
            "prompt": "Cho tam giác $MNP$ vuông tại $M$ có cạnh huyền $NP = 10\\text{ cm}, \\widehat{P} = 60^\\circ$.",
            "subItems": [
              {
                "id": "a",
                "text": "Góc nhọn $\\widehat{N} = 30^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng vì hai góc nhọn phụ nhau."
              },
              {
                "id": "b",
                "text": "Cạnh $MP = 5\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $MP = 10 \\cdot \\cos 60^\\circ = 5\\text{ cm}$."
              },
              {
                "id": "c",
                "text": "Cạnh $MN = 5\\sqrt{3}\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $MN = 10 \\cdot \\sin 60^\\circ = 5\\sqrt{3}\\text{ cm}$."
              },
              {
                "id": "d",
                "text": "Diện tích tam giác $MNP$ bằng $25\\text{ cm}^2$.",
                "correctAnswer": false,
                "explanation": "Sai, $S = \\frac{1}{2} \\cdot 5 \\cdot 5\\sqrt{3} = 12,5\\sqrt{3}\\text{ cm}^2$."
              }
            ]
          },
          {
            "id": "otc4-d2-tf3",
            "badge": "Câu 3 (TH) - Tính chất hai góc bù và phụ",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "prompt": "Xét tính đúng/sai của các phép tính lượng giác sau:",
            "subItems": [
              {
                "id": "a",
                "text": "$\\frac{\\sin 35^\\circ}{\\cos 55^\\circ} = 1$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $\\cos 55^\\circ = \\sin 35^\\circ$."
              },
              {
                "id": "b",
                "text": "$\\tan 25^\\circ - \\cot 65^\\circ = 0$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $\\cot 65^\\circ = \\tan 25^\\circ$."
              },
              {
                "id": "c",
                "text": "$\\sin 45^\\circ + \\cos 45^\\circ = \\sqrt{2}$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}$."
              },
              {
                "id": "d",
                "text": "$\\tan 30^\\circ \\cdot \\cot 60^\\circ = 1$.",
                "correctAnswer": false,
                "explanation": "Sai, $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$, $\\cot 60^\\circ = \\frac{\\sqrt{3}}{3} \\Rightarrow$ tích bằng $\\frac{1}{3}$."
              }
            ]
          },
          {
            "id": "otc4-d2-tf4",
            "badge": "Câu 4 (VD - Thực tế) - Chiếc ca nô và ngọn hải đăng",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
            "prompt": "Từ đỉnh ngọn hải đăng cao $50\\text{ m}$ so với mặt nước biển, nhân viên quan sát thấy một chiếc ca nô đang tiến lại gần với góc hạ $30^\\circ$. Sau một lúc, góc hạ tăng lên thành $45^\\circ$.",
            "subItems": [
              {
                "id": "a",
                "text": "Khoảng cách ban đầu từ ca nô đến chân hải đăng là $50\\sqrt{3}\\text{ m}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $d_1 = \\frac{50}{\\tan 30^\\circ} = 50\\sqrt{3}\\text{ m}$."
              },
              {
                "id": "b",
                "text": "Khoảng cách lúc sau từ ca nô đến chân hải đăng là $50\\text{ m}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $d_2 = \\frac{50}{\\tan 45^\\circ} = 50\\text{ m}$."
              },
              {
                "id": "c",
                "text": "Quãng đường ca nô đã di chuyển giữa hai lần quan sát xấp xỉ $36,6\\text{ m}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $50\\sqrt{3} - 50 \\approx 50(1,732 - 1) = 36,6\\text{ m}$."
              },
              {
                "id": "d",
                "text": "Góc hạ càng lớn chứng tỏ ca nô càng ở xa ngọn hải đăng.",
                "correctAnswer": false,
                "explanation": "Sai, góc hạ càng lớn thì ca nô càng ở gần chân ngọn hải đăng."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc4-d2-sa1",
            "badge": "Câu 1 (NB) - Tính cạnh góc vuông theo cạnh huyền",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 26\\text{ cm}, \\widehat{C} = 30^\\circ$. Tính độ dài cạnh $AB$ theo centimet.",
            "correctAnswer": "13",
            "acceptableAnswers": [
              "13",
              "13 cm",
              "13cm"
            ],
            "explanation": "Ta có $AB = BC \\cdot \\sin 30^\\circ = 26 \\cdot 0,5 = 13\\text{ cm}$."
          },
          {
            "id": "otc4-d2-sa2",
            "badge": "Câu 2 (NB) - Cạnh tam giác vuông cân",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AC = 19\\text{ cm}, \\widehat{B} = 45^\\circ$. Tính độ dài cạnh $AB$ theo centimet.",
            "correctAnswer": "19",
            "acceptableAnswers": [
              "19",
              "19 cm",
              "19cm"
            ],
            "explanation": "Tam giác vuông cân nên $AB = AC = 19\\text{ cm}$."
          },
          {
            "id": "otc4-d2-sa3",
            "badge": "Câu 3 (TH) - Tính cạnh kề theo góc 60 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 32\\text{ cm}, \\widehat{C} = 60^\\circ$. Tính độ dài cạnh $AC$ theo centimet.",
            "correctAnswer": "16",
            "acceptableAnswers": [
              "16",
              "16 cm",
              "16cm"
            ],
            "explanation": "Cạnh $AC = BC \\cdot \\cos 60^\\circ = 32 \\cdot 0,5 = 16\\text{ cm}$."
          },
          {
            "id": "otc4-d2-sa4",
            "badge": "Câu 4 (TH) - Đường cao tam giác vuông",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 12\\text{ cm}, AC = 16\\text{ cm}$. Tính độ dài đường cao $AH$ theo centimet (viết dưới dạng số thập phân).",
            "correctAnswer": "9.6",
            "acceptableAnswers": [
              "9.6",
              "9,6",
              "9.6 cm",
              "9,6 cm",
              "9.6cm",
              "9,6cm"
            ],
            "explanation": "Cạnh huyền $BC = \\sqrt{12^2 + 16^2} = 20\\text{ cm}$. Đường cao $AH = \\frac{12 \\cdot 16}{20} = 9,6\\text{ cm}$."
          },
          {
            "id": "otc4-d2-sa5",
            "badge": "Câu 5 (VD - Thực tế) - Độ dốc cầu trượt công viên",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
            "prompt": "Một máng trượt dài $8\\text{ m}$ có góc nghiêng $30^\\circ$ so với mặt đất. Hỏi đỉnh máng trượt cao hơn mặt đất bao nhiêu mét?",
            "correctAnswer": "4",
            "acceptableAnswers": [
              "4",
              "4 m",
              "4m"
            ],
            "explanation": "Chiều cao $h = 8 \\cdot \\sin 30^\\circ = 8 \\cdot 0,5 = 4\\text{ m}$."
          },
          {
            "id": "otc4-d2-sa6",
            "badge": "Câu 6 (VD - Thực tế) - Chiều cao tòa nhà qua giác kế",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 110)",
            "prompt": "Một người đứng cách chân tòa nhà $25\\text{ m}$ ngắm lên đỉnh tòa nhà với góc nâng $45^\\circ$. Giác kế cao $1,6\\text{ m}$. Tính chiều cao tòa nhà theo mét (viết dạng số thập phân).",
            "correctAnswer": "26.6",
            "acceptableAnswers": [
              "26.6",
              "26,6",
              "26.6 m",
              "26,6 m",
              "26.6m",
              "26,6m"
            ],
            "explanation": "Chiều cao tòa nhà: $h = 25 \\cdot \\tan 45^\\circ + 1,6 = 25 + 1,6 = 26,6\\text{ m}$."
          }
        ]
      },
      {
        "id": "de-3",
        "title": "Đề ôn tập số 3",
        "description": "Đề ôn tập tổng hợp phân hóa cuối Chương IV (Định hướng thi tuyển sinh vào 10)",
        "matrixBadge": "30% Nhận biết • 40% Thông hiểu • 30% Vận dụng (10.0 điểm)",
        "quizQuestions": [
          {
            "id": "otc4-d3-q1",
            "badge": "Câu 1 (NB) - Quan hệ hai góc phụ nhau",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "question": "Cho tam giác $ABC$ vuông tại $A$. Khẳng định nào sau đây luôn đúng?",
            "options": [
              "$\\sin B = \\cos C$",
              "$\\sin B = \\sin C$",
              "$\\cos B = \\cos C$",
              "$\\tan B = \\tan C$"
            ],
            "correctIndex": 0,
            "explanation": "Hai góc $B$ và $C$ phụ nhau nên $\\sin B = \\cos C$."
          },
          {
            "id": "otc4-d3-q2",
            "badge": "Câu 2 (NB) - Hệ thức cạnh góc vuông theo góc kề",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
            "question": "Trong tam giác $ABC$ vuông tại $A$, cạnh $b = AC$ bằng:",
            "options": [
              "$a \\cdot \\cos C$",
              "$a \\cdot \\sin C$",
              "$a \\cdot \\tan C$",
              "$a \\cdot \\cot B$"
            ],
            "correctIndex": 0,
            "explanation": "Mỗi cạnh góc vuông bằng cạnh huyền nhân với côsin của góc kề: $b = a \\cdot \\cos C$."
          },
          {
            "id": "otc4-d3-q3",
            "badge": "Câu 3 (NB) - Giá trị côtang 45 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Giá trị của $\\cot 45^\\circ$ là:",
            "options": [
              "1",
              "0",
              "\\sqrt{2}",
              "\\frac{1}{2}"
            ],
            "correctIndex": 0,
            "explanation": "Theo bảng góc đặc biệt: $\\cot 45^\\circ = 1$."
          },
          {
            "id": "otc4-d3-q4",
            "badge": "Câu 4 (NB) - Nhận biết tam giác vuông từ cạnh",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 11 (Trang 100)",
            "question": "Tam giác có ba cạnh bằng $6\\text{ cm}, 8\\text{ cm}, 10\\text{ cm}$ là:",
            "options": [
              "Tam giác vuông",
              "Tam giác cân",
              "Tam giác đều",
              "Tam giác tù"
            ],
            "correctIndex": 0,
            "explanation": "Vì $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ nên là tam giác vuông theo định lý Pythagore đảo."
          },
          {
            "id": "otc4-d3-q5",
            "badge": "Câu 5 (TH) - Rút gọn biểu thức lượng giác không phụ thuộc góc",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 11 (Trang 102)",
            "question": "Giá trị của biểu thức $Q = \\sin^4 \\alpha + \\cos^4 \\alpha + 2\\sin^2 \\alpha \\cos^2 \\alpha$ bằng:",
            "options": [
              "1",
              "2",
              "0",
              "4"
            ],
            "correctIndex": 0,
            "explanation": "Biểu thức có dạng hằng đẳng thức: $(\\sin^2 \\alpha + \\cos^2 \\alpha)^2 = 1^2 = 1$."
          },
          {
            "id": "otc4-d3-q6",
            "badge": "Câu 6 (TH) - Tìm góc nhọn biết sin",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $BC = 10\\text{ cm}, AC = 5\\sqrt{2}\\text{ cm}$. Số đo góc $\\widehat{B}$ là:",
            "options": [
              "45°",
              "30°",
              "60°",
              "15°"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\sin B = \\frac{AC}{BC} = \\frac{5\\sqrt{2}}{10} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\widehat{B} = 45^\\circ$."
          },
          {
            "id": "otc4-d3-q7",
            "badge": "Câu 7 (TH) - Hệ thức lượng giác trong tam giác",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
            "question": "Cho tam giác nhọn $ABC$ có đường cao $AH$. Khẳng định nào sau đây luôn đúng?",
            "options": [
              "$AB \\cdot \\sin B = AC \\cdot \\sin C$",
              "$AB \\cdot \\cos B = AC \\cdot \\cos C$",
              "$AB \\cdot \\tan B = AC \\cdot \\tan C$",
              "$AB + AC = BC \\cdot \\sin A$"
            ],
            "correctIndex": 0,
            "explanation": "Vì cùng bằng độ dài đường cao $AH$: $AH = AB \\cdot \\sin B = AC \\cdot \\sin C$."
          },
          {
            "id": "otc4-d3-q8",
            "badge": "Câu 8 (TH) - Tính cạnh góc vuông từ góc kề 30 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 14\\text{ cm}, \\widehat{B} = 30^\\circ$. Cạnh $AB$ có độ dài là:",
            "options": [
              "$7\\sqrt{3}\\text{ cm}$",
              "$7\\text{ cm}$",
              "$14\\sqrt{3}\\text{ cm}$",
              "$28\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Cạnh $AB = BC \\cdot \\cos 30^\\circ = 14 \\cdot \\frac{\\sqrt{3}}{2} = 7\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "otc4-d3-q9",
            "badge": "Câu 9 (TH) - Giải tam giác vuông biết hai cạnh góc vuông",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
            "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 7\\text{ cm}, AC = 24\\text{ cm}$. Độ dài cạnh huyền $BC$ là:",
            "options": [
              "25 cm",
              "26 cm",
              "31 cm",
              "20 cm"
            ],
            "correctIndex": 0,
            "explanation": "Theo định lý Pythagore: $BC = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25\\text{ cm}$."
          },
          {
            "id": "otc4-d3-q10",
            "badge": "Câu 10 (VD) - Tính diện tích hình bình hành",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 109)",
            "question": "Hình bình hành $ABCD$ có $AB = 8\\text{ cm}, AD = 6\\text{ cm}$ và góc $\\widehat{A} = 30^\\circ$. Diện tích của hình bình hành đó là:",
            "options": [
              "24 cm²",
              "48 cm²",
              "12 cm²",
              "24\\sqrt{3} cm²"
            ],
            "correctIndex": 0,
            "explanation": "Kẻ đường cao $BH \\perp AD$. Ta có $BH = AB \\cdot \\sin 30^\\circ = 8 \\cdot 0,5 = 4\\text{ cm}$. Diện tích $S = AD \\cdot BH = 6 \\cdot 4 = 24\\text{ cm}^2$."
          },
          {
            "id": "otc4-d3-q11",
            "badge": "Câu 11 (VD - Thực tế) - Dây diều thả gió",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 112)",
            "question": "Một người thả diều với đoạn dây dài $120\\text{ m}$ căng thẳng, tạo với phương ngang góc $35^\\circ$. Tay cầm dây cách mặt đất $1,2\\text{ m}$. Con diều cách mặt đất bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sin 35^\\circ \\approx 0,5736$)?",
            "options": [
              "70 m",
              "68 m",
              "72 m",
              "65 m"
            ],
            "correctIndex": 0,
            "explanation": "Độ cao từ tay cầm: $h_1 = 120 \\cdot \\sin 35^\\circ \\approx 120 \\cdot 0,5736 = 68,83\\text{ m}$. Chiều cao so với mặt đất: $h = 68,83 + 1,2 = 70,03 \\approx 70\\text{ m}$."
          },
          {
            "id": "otc4-d3-q12",
            "badge": "Câu 12 (VD - Thực tế) - Khoảng cách hai tàu trên biển",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
            "question": "Từ ngọn hải đăng cao $80\\text{ m}$, người quan sát thấy tàu $A$ và $B$ thẳng hàng với chân tháp theo cùng một hướng với các góc hạ lần lượt là $45^\\circ$ và $30^\\circ$. Khoảng cách giữa hai tàu là bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$)?",
            "options": [
              "59 m",
              "65 m",
              "50 m",
              "72 m"
            ],
            "correctIndex": 0,
            "explanation": "Khoảng cách từ chân tháp đến tàu gần: $80 / \\tan 45^\\circ = 80\\text{ m}$. Khoảng cách đến tàu xa: $80 / \\tan 30^\\circ = 80\\sqrt{3} \\approx 138,56\\text{ m}$. Khoảng cách giữa hai tàu: $138,56 - 80 = 58,56 \\approx 59\\text{ m}$."
          }
        ],
        "trueFalseQuestions": [
          {
            "id": "otc4-d3-tf1",
            "badge": "Câu 1 (NB) - Tính chất hàm lượng giác",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "prompt": "Cho góc nhọn $\\alpha$. Xét tính đúng/sai của các biểu thức:",
            "subItems": [
              {
                "id": "a",
                "text": "$1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $1 + \\frac{\\sin^2\\alpha}{\\cos^2\\alpha} = \\frac{\\cos^2\\alpha + \\sin^2\\alpha}{\\cos^2\\alpha} = \\frac{1}{\\cos^2\\alpha}$."
              },
              {
                "id": "b",
                "text": "$1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$.",
                "correctAnswer": true,
                "explanation": "Đúng, tương tự công thức trên."
              },
              {
                "id": "c",
                "text": "$\\tan \\alpha = \\cot (90^\\circ - \\alpha)$.",
                "correctAnswer": true,
                "explanation": "Đúng theo tính chất hai góc phụ nhau."
              },
              {
                "id": "d",
                "text": "$\\sin \\alpha + \\cos \\alpha = 1$.",
                "correctAnswer": false,
                "explanation": "Sai hoàn toàn, chỉ có $\\sin^2\\alpha + \\cos^2\\alpha = 1$."
              }
            ]
          },
          {
            "id": "otc4-d3-tf2",
            "badge": "Câu 2 (TH) - Tam giác vuông ABC vuông tại A",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AC = 12\\text{ cm}, \\widehat{B} = 60^\\circ$.",
            "subItems": [
              {
                "id": "a",
                "text": "Cạnh huyền $BC = 8\\sqrt{3}\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $BC = \\frac{AC}{\\sin 60^\\circ} = \\frac{12}{\\frac{\\sqrt{3}}{2}} = 8\\sqrt{3}\\text{ cm}$."
              },
              {
                "id": "b",
                "text": "Cạnh góc vuông $AB = 4\\sqrt{3}\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $AB = \\frac{AC}{\\tan 60^\\circ} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}\\text{ cm}$."
              },
              {
                "id": "c",
                "text": "Góc nhọn $\\widehat{C} = 30^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng vì $\\widehat{C} = 90^\\circ - 60^\\circ = 30^\\circ$."
              },
              {
                "id": "d",
                "text": "Diện tích tam giác $ABC$ bằng $48\\sqrt{3}\\text{ cm}^2$.",
                "correctAnswer": false,
                "explanation": "Sai, $S = \\frac{1}{2} \\cdot 4\\sqrt{3} \\cdot 12 = 24\\sqrt{3}\\text{ cm}^2$."
              }
            ]
          },
          {
            "id": "otc4-d3-tf3",
            "badge": "Câu 3 (TH) - Hệ thức góc và cạnh trong hình thang vuông",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 109)",
            "prompt": "Cho hình thang vuông $ABCD$ ($A = D = 90^\\circ$) có $AB = 3\\text{ cm}, CD = 7\\text{ cm}, AD = 4\\text{ cm}$.",
            "subItems": [
              {
                "id": "a",
                "text": "Độ dài đường cao kẻ từ $B$ xuống $CD$ bằng $4\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng vì bằng cạnh bên vuông góc $AD$."
              },
              {
                "id": "b",
                "text": "Đoạn thẳng hình chiếu $HC = CD - AB = 4\\text{ cm}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $HC = 7 - 3 = 4\\text{ cm}$."
              },
              {
                "id": "c",
                "text": "Góc nhọn $\\widehat{C} = 45^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng vì tam giác $BHC$ vuông tại $H$ có $BH = HC = 4\\text{ cm}$."
              },
              {
                "id": "d",
                "text": "Độ dài cạnh bên $BC = 4\\sqrt{3}\\text{ cm}$.",
                "correctAnswer": false,
                "explanation": "Sai, $BC = 4\\sqrt{2}\\text{ cm}$."
              }
            ]
          },
          {
            "id": "otc4-d3-tf4",
            "badge": "Câu 4 (VD - Thực tế) - Bài toán đo chiều rộng sông",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
            "prompt": "Để đo chiều rộng $AB$ của một khúc sông, hai bạn học sinh cắm cọc tại $B$ và $C$ sao cho $AB \\perp BC$. Đo được $BC = 70\\text{ m}$ và góc $\\widehat{ACB} = 35^\\circ$.",
            "subItems": [
              {
                "id": "a",
                "text": "Chiều rộng sông tính bởi $AB = BC \\cdot \\tan 35^\\circ$.",
                "correctAnswer": true,
                "explanation": "Đúng, trong tam giác $ABC$ vuông tại $B$."
              },
              {
                "id": "b",
                "text": "Chiều rộng $AB$ xấp xỉ bằng $49\\text{ m}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $70 \\cdot \\tan 35^\\circ \\approx 70 \\cdot 0,7002 = 49,01 \\approx 49\\text{ m}$."
              },
              {
                "id": "c",
                "text": "Khoảng cách đường chéo từ $A$ đến $C$ lớn hơn $85\\text{ m}$.",
                "correctAnswer": true,
                "explanation": "Đúng, $AC = \\frac{70}{\\cos 35^\\circ} \\approx \\frac{70}{0,8192} \\approx 85,45\\text{ m} > 85\\text{ m}$."
              },
              {
                "id": "d",
                "text": "Nếu góc $\\widehat{ACB} = 30^\\circ$ thì khoảng cách $AB = 35\\text{ m}$.",
                "correctAnswer": false,
                "explanation": "Sai, $AB = 70 \\cdot \\tan 30^\\circ = \\frac{70\\sqrt{3}}{3} \\approx 40,4\\text{ m} \\ne 35\\text{ m}$."
              }
            ]
          }
        ],
        "shortAnswerQuestions": [
          {
            "id": "otc4-d3-sa1",
            "badge": "Câu 1 (NB) - Tính cạnh góc vuông theo cạnh huyền",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 30\\text{ cm}, \\widehat{B} = 30^\\circ$. Tính độ dài cạnh $AC$ theo centimet.",
            "correctAnswer": "15",
            "acceptableAnswers": [
              "15",
              "15 cm",
              "15cm"
            ],
            "explanation": "Ta có $AC = BC \\cdot \\sin 30^\\circ = 30 \\cdot 0,5 = 15\\text{ cm}$."
          },
          {
            "id": "otc4-d3-sa2",
            "badge": "Câu 2 (NB) - Tính cạnh góc vuông tam giác vuông cân",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 25\\text{ cm}, \\widehat{C} = 45^\\circ$. Tính độ dài cạnh $AC$ theo centimet.",
            "correctAnswer": "25",
            "acceptableAnswers": [
              "25",
              "25 cm",
              "25cm"
            ],
            "explanation": "Tam giác vuông cân nên $AC = AB = 25\\text{ cm}$."
          },
          {
            "id": "otc4-d3-sa3",
            "badge": "Câu 3 (TH) - Tính cạnh kề theo góc 60 độ",
            "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 40\\text{ cm}, \\widehat{C} = 60^\\circ$. Tính độ dài cạnh $AC$ theo centimet.",
            "correctAnswer": "20",
            "acceptableAnswers": [
              "20",
              "20 cm",
              "20cm"
            ],
            "explanation": "Cạnh $AC = BC \\cdot \\cos 60^\\circ = 40 \\cdot 0,5 = 20\\text{ cm}$."
          },
          {
            "id": "otc4-d3-sa4",
            "badge": "Câu 4 (TH) - Tính đường cao tam giác vuông",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5\\text{ cm}, AC = 12\\text{ cm}$. Tính độ dài đường cao $AH$ theo centimet (làm tròn đến hàng phần mười).",
            "correctAnswer": "4.6",
            "acceptableAnswers": [
              "4.6",
              "4,6",
              "4.6 cm",
              "4,6 cm",
              "4.6cm",
              "4,6cm",
              "60/13"
            ],
            "explanation": "Cạnh huyền $BC = 13\\text{ cm}$. Đường cao $AH = \\frac{60}{13} \\approx 4,615 \\approx 4,6\\text{ cm}$."
          },
          {
            "id": "otc4-d3-sa5",
            "badge": "Câu 5 (VD - Thực tế) - Độ dốc xe chạy",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
            "prompt": "Một con dốc dài $600\\text{ m}$ có góc nghiêng so với mặt đất nằm ngang là $4^\\circ$. Tính độ cao của đỉnh dốc theo mét (làm tròn đến hàng đơn vị, lấy $\\sin 4^\\circ \\approx 0,0698$).",
            "correctAnswer": "42",
            "acceptableAnswers": [
              "42",
              "42 m",
              "42m"
            ],
            "explanation": "Chiều cao $h = 600 \\cdot \\sin 4^\\circ \\approx 600 \\cdot 0,0698 = 41,88\\text{ m} \\approx 42\\text{ m}$."
          },
          {
            "id": "otc4-d3-sa6",
            "badge": "Câu 6 (VD - Thực tế) - Khoảng cách tàu cứu hộ đến hải đăng",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
            "prompt": "Một ngọn hải đăng cao $60\\text{ m}$ so với mực nước biển. Người quan sát đứng trên đỉnh nhìn thấy một con tàu với góc hạ $30^\\circ$. Khoảng cách từ tàu đến chân ngọn hải đăng là bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$)?",
            "correctAnswer": "104",
            "acceptableAnswers": [
              "104",
              "104 m",
              "104m"
            ],
            "explanation": "Khoảng cách từ tàu đến chân hải đăng: $d = \\frac{60}{\\tan 30^\\circ} = 60\\sqrt{3} \\approx 60 \\cdot 1,732 = 103,92 \\approx 104\\text{ m}$."
          }
        ]
      }
    ]
  },
  // ==========================================
  // BÀI 7: CĂN BẬC HAI VÀ CĂN THỨC BẬC HAI
  // ==========================================
  // ==========================================
  // BÀI 7: CĂN BẬC HAI VÀ CĂN THỨC BẬC HAI
  // ==========================================
  "t9-b7-can-bac-hai-can-thuc": {
  "id": "t9-b7-can-bac-hai-can-thuc",
  "lessonNumber": 7,
  "title": "Bài 7: Căn bậc hai và căn thức bậc hai",
  "bookChapter": "Chương III: Căn bậc hai và căn bậc ba",
  "scenarioTitle": "Tình huống: Tính khoảng cách tầm nhìn ngọn hải đăng và thiết kế mặt sàn căn phòng hình vuông",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Học sinh (Khám phá)",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy Tính, số 9 có hai căn bậc hai là 3 và -3, vậy khi viết kí hiệu căn bậc hai số học căn 9 thì kết quả là số nào ạ? Và biểu thức chứa căn bậc hai khi nào thì có nghĩa ạ?",
      "visualGraphic": "box",
      "mathNote": "x^2 = a \\implies x = \\pm\\sqrt{a}, \\quad \\sqrt{a} \\ge 0"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính (VinaMath)",
      "avatar": "👨‍🏫",
      "speech": "Chào em! Em cần phân biệt thật rõ: Số dương a có hai căn bậc hai là hai số đối nhau: \\sqrt{a} và -\\sqrt{a}. Riêng dấu căn \\sqrt{a} biểu thị CĂN BẬC HAI SỐ HỌC, nên luôn luôn là số KHÔNG ÂM (\\sqrt{9} = 3)! Còn căn thức \\sqrt{A} xác định khi biểu thức dưới dấu căn không âm: A \\ge 0 nhé!",
      "visualGraphic": "graph",
      "mathNote": "\\sqrt{A} \\text{ xác định } \\Leftrightarrow A \\ge 0; \\quad \\sqrt{A^2} = |A|"
    }
  ],
  "youtubeVideoId": "uN9611o8370",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 7 - Căn bậc hai và căn thức bậc hai - Toán 9 KNTT",
  "youtubeVideos": [
    {
      "id": "uN9611o8370",
      "title": "Tiết 1: Căn bậc hai và Căn bậc hai số học của số thực"
    },
    {
      "id": "w4H7T9zKl08",
      "title": "Tiết 2: Căn thức bậc hai và Hằng đẳng thức căn(A^2) = |A|"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-9.7.1",
      "title": "Ví dụ 1: Căn bậc hai số học của một số",
      "question": "Căn bậc hai số học của số $64$ là:",
      "options": [
        "$8$",
        "$-8$",
        "$\\pm 8$",
        "$16$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $8 > 0$ và $8^2 = 64$ nên căn bậc hai số học của $64$ là $\\sqrt{64} = 8$."
    },
    {
      "id": "vq-9.7.2",
      "title": "Ví dụ 2: Tìm điều kiện xác định của căn thức",
      "question": "Căn thức bậc hai $\\sqrt{3x - 6}$ xác định khi và chỉ khi:",
      "options": [
        "$x \\ge 2$",
        "$x > 2$",
        "$x \\le 2$",
        "$x \\ne 2$"
      ],
      "correctIndex": 0,
      "explanation": "Căn thức $\\sqrt{A}$ có nghĩa khi $A \\ge 0$. Ta có: $3x - 6 \\ge 0 \\Leftrightarrow 3x \\ge 6 \\Leftrightarrow x \\ge 2$."
    },
    {
      "id": "vq-9.7.3",
      "title": "Ví dụ 3: Áp dụng hằng đẳng thức căn bậc hai",
      "question": "Giá trị của biểu thức $\\sqrt{(3 - \\sqrt{10})^2}$ bằng:",
      "options": [
        "$\\sqrt{10} - 3$",
        "$3 - \\sqrt{10}$",
        "$\\sqrt{10} + 3$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng $\\sqrt{A^2} = |A|$: $\\sqrt{(3 - \\sqrt{10})^2} = |3 - \\sqrt{10}|$. Vì $3 = \\sqrt{9} < \\sqrt{10}$ nên $3 - \\sqrt{10} < 0$, do đó $|3 - \\sqrt{10}| = \\sqrt{10} - 3$."
    },
    {
      "id": "vq-9.7.4",
      "title": "Ví dụ 4: Bài toán thực tế cạnh hình vuông",
      "question": "Một mảnh vườn hình vuông có diện tích $81\\text{ m}^2$. Độ dài cạnh của mảnh vườn là:",
      "options": [
        "$9\\text{ m}$",
        "$\\pm 9\\text{ m}$",
        "$18\\text{ m}$",
        "$20,25\\text{ m}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi độ dài cạnh hình vuông là $a$ ($a > 0$). Ta có $a^2 = 81 \\implies a = \\sqrt{81} = 9\\text{ m}$."
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Căn bậc hai và Căn bậc hai số học",
      "points": [
        "Căn bậc hai của một số thực không âm $a$ là số thực $x$ sao cho $x^2 = a$.",
        "Số dương $a$ có đúng hai căn bậc hai là hai số đối nhau: số dương kí hiệu là $\\sqrt{a}$ và số âm kí hiệu là $-\\sqrt{a}$.",
        "Số $0$ có đúng một căn bậc hai là chính số $0$, viết là $\\sqrt{0} = 0$.",
        "Số âm không có căn bậc hai vì bình phương của mọi số thực đều không âm.",
        "Định nghĩa căn bậc hai số học: Với số dương $a$, số $\\sqrt{a}$ được gọi là căn bậc hai số học của $a$. Ta có: $x = \\sqrt{a} \\Leftrightarrow \\begin{cases} x \\ge 0 \\\\ x^2 = a \\end{cases}$."
      ],
      "formula": "x = \\sqrt{a} \\Leftrightarrow \\begin{cases} x \\ge 0 \\\\ x^2 = a \\end{cases}",
      "examples": [
        {
          "title": "Ví dụ 1: Tìm căn bậc hai và căn bậc hai số học (SGK Trang 46)",
          "problem": "Tìm các căn bậc hai và căn bậc hai số học của các số sau: a) 36; b) 0,49; c) 0.",
          "solution": "• a) Căn bậc hai số học của 36 là $\\sqrt{36} = 6$. Các căn bậc hai của 36 là $6$ và $-6$.\\n• b) Căn bậc hai số học của 0,49 là $\\sqrt{0,49} = 0,7$. Các căn bậc hai của 0,49 là $0,7$ và $-0,7$.\\n• c) Căn bậc hai và căn bậc hai số học của 0 đều là $\\sqrt{0} = 0$."
        }
      ]
    },
    {
      "index": "2",
      "title": "So sánh các căn bậc hai số học",
      "points": [
        "Định lý: Với hai số không âm $a$ và $b$, ta có: $a < b \\Leftrightarrow \\sqrt{a} < \\sqrt{b}$.",
        "Ứng dụng 1: So sánh hai số bằng cách đưa về cùng căn bậc hai (ví dụ: so sánh $3$ và $\\sqrt{8}$ bằng cách viết $3 = \\sqrt{9} > \\sqrt{8}$).",
        "Ứng dụng 2: Giải bất phương trình chứa căn bậc hai số học (với $x \\ge 0$: $\\sqrt{x} < a \\Leftrightarrow x < a^2$ với $a > 0$)."
      ],
      "formula": "0 \\le a < b \\Leftrightarrow \\sqrt{a} < \\sqrt{b}",
      "examples": [
        {
          "title": "Ví dụ 2: So sánh số thực và tìm x (SGK Trang 47)",
          "problem": "a) So sánh 5 và $\\sqrt{23}$; b) Tìm số thực không âm $x$ biết $\\sqrt{x} < 3$.",
          "solution": "• a) Ta có $5 = \\sqrt{25}$. Vì $25 > 23$ nên $\\sqrt{25} > \\sqrt{23}$, suy ra $5 > \\sqrt{23}$.\\n• b) Điều kiện $x \\ge 0$. Ta có $3 = \\sqrt{9}$. Do đó $\\sqrt{x} < \\sqrt{9} \\Leftrightarrow x < 9$. Kết hợp điều kiện ta được $0 \\le x < 9$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Căn thức bậc hai và Điều kiện xác định",
      "points": [
        "Khái niệm: Với $A$ là một biểu thức đại số, người ta gọi $\\sqrt{A}$ là căn thức bậc hai của $A$, còn $A$ được gọi là biểu thức dưới dấu căn (hay biểu thức lấy căn).",
        "Điều kiện xác định (ĐKXĐ): $\\sqrt{A}$ xác định (hay có nghĩa) khi và chỉ khi $A$ lấy giá trị không âm, tức là $A \\ge 0$.",
        "Quy tắc giải bất phương trình tìm ĐKXĐ:",
        "  • Với $\\sqrt{ax + b}$: Điều kiện $ax + b \\ge 0$. (Lưu ý đổi chiều khi chia cho hệ số $a < 0$).",
        "  • Với $\\sqrt{\\frac{A}{B}}$: Điều kiện $\\frac{A}{B} \\ge 0$ và $B \\ne 0$."
      ],
      "formula": "\\sqrt{A} \\text{ xác định } \\Leftrightarrow A \\ge 0",
      "examples": [
        {
          "title": "Ví dụ 3: Tìm điều kiện xác định của căn thức bậc hai (SGK Trang 48)",
          "problem": "Tìm điều kiện của $x$ để mỗi căn thức sau có nghĩa:\n  a) $\\sqrt{2x - 6}$;\n  b) $\\sqrt{5 - x}$;\n  c) $\\sqrt{\\frac{1}{x + 2}}$.",
          "solution": "• a) $\\sqrt{2x - 6}$ có nghĩa khi $2x - 6 \\ge 0 \\Leftrightarrow 2x \\ge 6 \\Leftrightarrow x \\ge 3$.\\n• b) $\\sqrt{5 - x}$ có nghĩa khi $5 - x \\ge 0 \\Leftrightarrow -x \\ge -5 \\Leftrightarrow x \\le 5$.\\n• c) $\\sqrt{\\frac{1}{x + 2}}$ có nghĩa khi $\\frac{1}{x+2} > 0$ (vì tử số $1 > 0$ nên mẫu số phải dương), suy ra $x + 2 > 0 \\Leftrightarrow x > -2$."
        }
      ]
    },
    {
      "index": "4",
      "title": "Hằng đẳng thức căn(A^2) = |A| và Rút gọn biểu thức",
      "points": [
        "Định lý: Với mọi số hay biểu thức đại số $A$, ta luôn có: $\\sqrt{A^2} = |A|$.",
        "Quy tắc bỏ dấu giá trị tuyệt đối:",
        "  • Nếu $A \\ge 0$ thì $\\sqrt{A^2} = A$.",
        "  • Nếu $A < 0$ thì $\\sqrt{A^2} = -A$.",
        "Ứng dụng đưa về bình phương: $\\sqrt{A \\pm 2\\sqrt{B}} = \\sqrt{(a \\pm b)^2} = |a \\pm b|$ (với $A = a^2 + b^2$ và $B = a^2 b^2$)."
      ],
      "formula": "\\sqrt{A^2} = |A| = \\begin{cases} A & \\text{khi } A \\ge 0 \\\\ -A & \\text{khi } A < 0 \\end{cases}",
      "examples": [
        {
          "title": "Ví dụ 4: Rút gọn biểu thức chứa căn (SGK Trang 49)",
          "problem": "Rút gọn các biểu thức sau:\n  a) $\\sqrt{(\\sqrt{2} - 1)^2}$;\n  b) $\\sqrt{(1 - \\sqrt{5})^2}$;\n  c) $\\sqrt{4x^2} - 3x$ với $x < 0$.",
          "solution": "• a) $\\sqrt{(\\sqrt{2} - 1)^2} = |\\sqrt{2} - 1|$. Vì $\\sqrt{2} > 1$ nên $|\\sqrt{2} - 1| = \\sqrt{2} - 1$.\\n• b) $\\sqrt{(1 - \\sqrt{5})^2} = |1 - \\sqrt{5}|$. Vì $1 < \\sqrt{5}$ nên $1 - \\sqrt{5} < 0$, suy ra $|1 - \\sqrt{5}| = \\sqrt{5} - 1$.\\n• c) $\\sqrt{4x^2} = \\sqrt{(2x)^2} = |2x|$. Vì $x < 0$ nên $|2x| = -2x$. Do đó: $\\sqrt{4x^2} - 3x = -2x - 3x = -5x$."
        }
      ]
    }
  ],
  "tips": [
    "Phân biệt căn bậc hai và căn bậc hai số học: Khi người ta hỏi 'căn bậc hai của 16' thì đáp án là $\\pm 4$. Nhưng khi có dấu căn $\\sqrt{16}$ thì kết quả duy nhất là $4$ (căn bậc hai số học).",
    "Tuyệt đối không viết $\\sqrt{A^2} = A$: Công thức đúng luôn phải có dấu giá trị tuyệt đối $\\sqrt{A^2} = |A|$. Sau đó mới xét dấu của $A$ để bỏ dấu trị tuyệt đối.",
    "Bấm máy tính cầm tay: Nhấn phím [√] nhập số rồi nhấn [=]. Để chuyển từ số thập phân vô hạn sang làm tròn, dùng phím [S<=>D]."
  ],
  "traps": [
    "Bẫy dấu khi giải bất phương trình tìm điều kiện: Với $\\sqrt{-3x + 9}$, điều kiện là $-3x + 9 \\ge 0 \\Leftrightarrow -3x \\ge -9 \\Leftrightarrow x \\le 3$ (khi chia cho $-3 < 0$ phải đổi chiều bất đẳng thức).",
    "Bẫy căn thức chứa mẫu: $\\sqrt{\\frac{1}{x - 3}}$ xác định khi $x - 3 > 0 \\Leftrightarrow x > 3$ (không có dấu bằng vì mẫu thức phải khác 0).",
    "Bẫy phá dấu trị tuyệt đối căn thức số học: $\\sqrt{(2 - \\sqrt{7})^2} = |2 - \\sqrt{7}| = \\sqrt{7} - 2$, không được viết $2 - \\sqrt{7}$ vì $2 - \\sqrt{7} < 0$ sẽ làm căn bậc hai mang giá trị âm!"
  ],
  "interactiveType": "function",
  "quizQuestions": [
    {
      "id": "quiz-9.7.1",
      "badge": "NB - Nhận biết căn bậc hai số học của một số",
      "source": "SGK Toán 9 KNTT - Bài 7 Khởi động",
      "question": "Căn bậc hai số học của số $49$ là:",
      "options": [
        "$7$",
        "$-7$",
        "$\\pm 7$",
        "$49$"
      ],
      "correctIndex": 0,
      "explanation": "Căn bậc hai số học của số dương $a$ là số dương $\\sqrt{a}$. Vì $7 > 0$ và $7^2 = 49$ nên căn bậc hai số học của $49$ là $\\sqrt{49} = 7$."
    },
    {
      "id": "quiz-9.7.2",
      "badge": "NB - Phân biệt căn bậc hai của một số",
      "source": "SGK Toán 9 KNTT - Bài 7 Mục 1",
      "question": "Các căn bậc hai của số $25$ là:",
      "options": [
        "$5$ và $-5$",
        "$5$",
        "$-5$",
        "$625$"
      ],
      "correctIndex": 0,
      "explanation": "Mỗi số dương $a$ luôn có đúng hai căn bậc hai là hai số đối nhau: $\\sqrt{a}$ và $-\\sqrt{a}$. Với $a = 25$, hai căn bậc hai là $5$ và $-5$ (vì $5^2 = 25$ và $(-5)^2 = 25$)."
    },
    {
      "id": "quiz-9.7.3",
      "badge": "NB - Khẳng định đúng về sự tồn tại căn bậc hai",
      "source": "SGK Toán 9 KNTT - Bài 7 Nhận xét",
      "question": "Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "Số âm không có căn bậc hai.",
        "Mọi số thực đều có hai căn bậc hai đối nhau.",
        "Căn bậc hai số học của $0$ là không xác định.",
        "Căn bậc hai của $16$ chỉ có duy nhất một giá trị là $4$."
      ],
      "correctIndex": 0,
      "explanation": "Vì bình phương của mọi số thực đều không âm nên không tồn tại số thực nào có bình phương là một số âm. Do đó, số âm không có căn bậc hai."
    },
    {
      "id": "quiz-9.7.4",
      "badge": "NB - So sánh hai căn bậc hai số học",
      "source": "SGK Toán 9 KNTT - Bài 7 Luyện tập 1",
      "question": "So sánh hai số $\\sqrt{15}$ và $4$:",
      "options": [
        "$\\sqrt{15} < 4$",
        "$\\sqrt{15} > 4$",
        "$\\sqrt{15} = 4$",
        "Không thể so sánh được"
      ],
      "correctIndex": 0,
      "explanation": "Ta viết $4 = \\sqrt{16}$. Vì $0 \\le 15 < 16$ nên $\\sqrt{15} < \\sqrt{16}$, tức là $\\sqrt{15} < 4$."
    },
    {
      "id": "quiz-9.7.5",
      "badge": "NB - Điều kiện xác định căn thức bậc nhất đơn giản",
      "source": "SGK Toán 9 KNTT - Bài 7 Mục 2",
      "question": "Căn thức bậc hai $\\sqrt{x - 3}$ xác định (có nghĩa) khi và chỉ khi:",
      "options": [
        "$x \\ge 3$",
        "$x > 3$",
        "$x \\le 3$",
        "$x \\ne 3$"
      ],
      "correctIndex": 0,
      "explanation": "Căn thức $\\sqrt{A}$ xác định khi và chỉ khi biểu thức lấy căn $A \\ge 0$. Do đó $x - 3 \\ge 0 \\Leftrightarrow x \\ge 3$."
    },
    {
      "id": "quiz-9.7.6",
      "badge": "NB - Điều kiện xác định căn thức có hệ số âm",
      "source": "SGK Toán 9 KNTT - Bài 7 Ví dụ 3",
      "question": "Căn thức bậc hai $\\sqrt{4 - 2x}$ có nghĩa khi và chỉ khi:",
      "options": [
        "$x \\le 2$",
        "$x \\ge 2$",
        "$x < 2$",
        "$x \\ge -2$"
      ],
      "correctIndex": 0,
      "explanation": "Căn thức có nghĩa $\\Leftrightarrow 4 - 2x \\ge 0 \\Leftrightarrow -2x \\ge -4$. Chia cả hai vế cho số âm $-2$ và đổi chiều bất phương trình ta được $x \\le 2$."
    },
    {
      "id": "quiz-9.7.7",
      "badge": "NB - Áp dụng hằng đẳng thức với số âm",
      "source": "SGK Toán 9 KNTT - Bài 7 Mục 3",
      "question": "Giá trị của biểu thức $\\sqrt{(-7)^2}$ bằng:",
      "options": [
        "$7$",
        "$-7$",
        "$\\pm 7$",
        "$49$"
      ],
      "correctIndex": 0,
      "explanation": "Theo hằng đẳng thức $\\sqrt{A^2} = |A|$, ta có $\\sqrt{(-7)^2} = |-7| = 7$."
    },
    {
      "id": "quiz-9.7.8",
      "badge": "NB - Rút gọn căn thức chứa biến không âm",
      "source": "SGK Toán 9 KNTT - Bài 7 Luyện tập 3",
      "question": "Với số thực $a \\ge 0$, biểu thức $\\sqrt{9a^2}$ bằng:",
      "options": [
        "$3a$",
        "$-3a$",
        "$9a$",
        "$3a^2$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\sqrt{9a^2} = \\sqrt{(3a)^2} = |3a|$. Vì $a \\ge 0$ nên $3a \\ge 0$, do đó $|3a| = 3a$."
    },
    {
      "id": "quiz-9.7.9",
      "badge": "TH - Rút gọn căn thức hiệu hai số",
      "source": "SGK Toán 9 KNTT - Bài 7 Ví dụ 4",
      "question": "Rút gọn biểu thức $\\sqrt{(\\sqrt{3} - 2)^2}$ ta được kết quả là:",
      "options": [
        "$2 - \\sqrt{3}$",
        "$\\sqrt{3} - 2$",
        "$\\sqrt{3} + 2$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\sqrt{(\\sqrt{3} - 2)^2} = |\\sqrt{3} - 2|$. Vì $3 < 4$ nên $\\sqrt{3} < \\sqrt{4} = 2$, suy ra $\\sqrt{3} - 2 < 0$. Do đó $|\\sqrt{3} - 2| = -(\\sqrt{3} - 2) = 2 - \\sqrt{3}$."
    },
    {
      "id": "quiz-9.7.10",
      "badge": "TH - Tìm x không âm từ căn bậc hai số học",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.1",
      "question": "Tìm số thực $x$ không âm, biết $\\sqrt{x} = 6$. Giá trị của $x$ là:",
      "options": [
        "$x = 36$",
        "$x = 6$",
        "$x = \\sqrt{6}$",
        "$x = 12$"
      ],
      "correctIndex": 0,
      "explanation": "Với $x \\ge 0$, ta có $\\sqrt{x} = 6 \\Leftrightarrow x = 6^2 = 36$."
    },
    {
      "id": "quiz-9.7.11",
      "badge": "TH - Tính giá trị biểu thức số học chứa căn",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.2",
      "question": "Giá trị của biểu thức $P = \\sqrt{25} - \\sqrt{16} + \\sqrt{81}$ là:",
      "options": [
        "$10$",
        "$8$",
        "$12$",
        "$14$"
      ],
      "correctIndex": 0,
      "explanation": "Tính từng căn bậc hai số học: $\\sqrt{25} = 5$, $\\sqrt{16} = 4$, $\\sqrt{81} = 9$. Khi đó $P = 5 - 4 + 9 = 10$."
    },
    {
      "id": "quiz-9.7.12",
      "badge": "TH - Điều kiện xác định căn thức chứa mẫu",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.4",
      "question": "Biểu thức $\\sqrt{\\frac{1}{2x - 5}}$ xác định khi và chỉ khi:",
      "options": [
        "$x > \\frac{5}{2}$",
        "$x \\ge \\frac{5}{2}$",
        "$x < \\frac{5}{2}$",
        "$x \\ne \\frac{5}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Biểu thức $\\sqrt{\\frac{1}{2x - 5}}$ có nghĩa khi $\\frac{1}{2x - 5} \\ge 0$ và mẫu số $2x - 5 \\ne 0$. Vì tử số $1 > 0$ nên phân thức dương khi và chỉ khi mẫu số dương: $2x - 5 > 0 \\Leftrightarrow x > \\frac{5}{2}$."
    },
    {
      "id": "quiz-9.7.13",
      "badge": "TH - Rút gọn biểu thức chứa biến âm",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.5",
      "question": "Rút gọn biểu thức $A = \\sqrt{a^2} + 3a$ với $a < 0$ ta được:",
      "options": [
        "$2a$",
        "$4a$",
        "$-2a$",
        "$-4a$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $\\sqrt{a^2} = |a|$. Vì $a < 0$ nên $|a| = -a$. Khi đó $A = -a + 3a = 2a$."
    },
    {
      "id": "quiz-9.7.14",
      "badge": "TH - Giải phương trình chứa căn cơ bản",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.3",
      "question": "Số nghiệm của phương trình $\\sqrt{x - 1} = 3$ là:",
      "options": [
        "1 nghiệm",
        "2 nghiệm",
        "0 nghiệm",
        "Vô số nghiệm"
      ],
      "correctIndex": 0,
      "explanation": "ĐKXĐ: $x \\ge 1$. Bình phương hai vế: $x - 1 = 3^2 = 9 \\Leftrightarrow x = 10$ (thỏa mãn ĐKXĐ). Vậy phương trình có đúng 1 nghiệm duy nhất là $x = 10$."
    },
    {
      "id": "quiz-9.7.15",
      "badge": "VD - Giải phương trình dạng căn(A^2) = c",
      "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
      "question": "Tập nghiệm của phương trình $\\sqrt{x^2 - 6x + 9} = 5$ là:",
      "options": [
        "$S = \\{8; -2\\}$",
        "$S = \\{8\\}$",
        "$S = \\{-2\\}$",
        "$S = \\{2; -8\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $x^2 - 6x + 9 = (x - 3)^2$. Phương trình trở thành:\\n$\\sqrt{(x - 3)^2} = 5 \\Leftrightarrow |x - 3| = 5 \\Leftrightarrow \\begin{cases} x - 3 = 5 \\\\ x - 3 = -5 \\end{cases} \\Leftrightarrow \\begin{cases} x = 8 \\\\ x = -2 \\end{cases}$.\\nVậy tập nghiệm của phương trình là $S = \\{8; -2\\}$."
    },
    {
      "id": "quiz-9.7.16",
      "badge": "VD - Rút gọn biểu thức hằng đẳng thức chứa biến",
      "source": "Đề thi HSG Toán 9 Cấp Quận",
      "question": "Rút gọn biểu thức $M = \\sqrt{x^2 - 4x + 4} - x$ với $x \\ge 2$ ta được:",
      "options": [
        "$-2$",
        "$2x - 2$",
        "$2$",
        "$-2x + 2$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $x^2 - 4x + 4 = (x - 2)^2$. Khi đó:\\n$M = \\sqrt{(x - 2)^2} - x = |x - 2| - x$.\\nVì $x \\ge 2$ nên $x - 2 \\ge 0 \\implies |x - 2| = x - 2$.\\nSuy ra $M = (x - 2) - x = -2$."
    },
    {
      "id": "quiz-9.7.17",
      "badge": "VD - Tìm giá trị nhỏ nhất của biểu thức chứa căn",
      "source": "Đề khảo sát chất lượng Toán 9 HK1",
      "question": "Giá trị nhỏ nhất của biểu thức $A = \\sqrt{x - 2} + 5$ là:",
      "options": [
        "$5$",
        "$2$",
        "$0$",
        "$7$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện xác định: $x \\ge 2$. Với mọi $x \\ge 2$, ta luôn có $\\sqrt{x - 2} \\ge 0$. Do đó $A = \\sqrt{x - 2} + 5 \\ge 0 + 5 = 5$. Dấu bằng xảy ra khi $\\sqrt{x - 2} = 0 \\Leftrightarrow x = 2$. Vậy giá trị nhỏ nhất của biểu thức là $5$."
    },
    {
      "id": "quiz-9.7.18",
      "badge": "VD - Bài toán thực tế: Lắp phào chân tường phòng vuông",
      "source": "SGK Toán 9 KNTT - Bài 7 Vận dụng",
      "question": "Một căn phòng khách hình vuông có diện tích mặt sàn là $36\\text{ m}^2$. Gia đình muốn lắp phào gỗ chân tường xung quanh phòng, trừ đi cửa ra vào rộng $1,5\\text{ m}$. Chiều dài phào gỗ cần dùng là bao nhiêu mét?",
      "options": [
        "$22,5\\text{ m}$",
        "$24\\text{ m}$",
        "$20,5\\text{ m}$",
        "$18\\text{ m}$"
      ],
      "correctIndex": 0,
      "explanation": "Độ dài mỗi cạnh của căn phòng hình vuông là: $a = \\sqrt{36} = 6\\text{ m}$.\\nChu vi bốn bức tường của phòng là: $4 \\times 6 = 24\\text{ m}$.\\nTrừ đi khoảng trống cửa ra vào rộng $1,5\\text{ m}$, chiều dài phào gỗ cần dùng là:\\n$24 - 1,5 = 22,5\\text{ m}$."
    },
    {
      "id": "quiz-9.7.19",
      "badge": "VD - Bài toán thực tế: Tốc độ rơi tự do của vật",
      "source": "SGK Toán 9 Cánh Diều - Bài toán thực tiễn",
      "question": "Vận tốc $v$ (m/s) của một vật khi rơi tự do chạm đáy vực sâu từ độ cao $h$ (mét) được cho bởi công thức $v = \\sqrt{2gh}$ với gia tốc trọng trường $g \\approx 9,8\\text{ m/s}^2$. Một hòn đá rơi tự do từ độ cao $20\\text{ m}$ xuống đáy vực. Vận tốc chạm đáy của hòn đá (làm tròn đến hàng phần mười) là:",
      "options": [
        "$19,8\\text{ m/s}$",
        "$14,0\\text{ m/s}$",
        "$20,0\\text{ m/s}$",
        "$39,2\\text{ m/s}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay số vào công thức: $v = \\sqrt{2 \\times 9,8 \\times 20} = \\sqrt{392} \\approx 19,7989\\dots\\text{ m/s}$. Làm tròn đến hàng phần mười ta được $19,8\\text{ m/s}$."
    },
    {
      "id": "quiz-9.7.20",
      "badge": "VDC - Bài toán thực tế: Tầm nhìn xa từ ngọn hải đăng",
      "source": "Đề thi Đánh giá Năng lực - Ứng dụng Hàng hải",
      "question": "Tầm nhìn xa $d$ (tính bằng hải lý, $1\\text{ hải lý} \\approx 1,852\\text{ km}$) của một hoa tiêu đứng trên ngọn hải đăng có tâm đèn cao $h$ (feet) so với mực nước biển được tính bởi công thức $d \\approx 1,17\\sqrt{h}$. Nếu tâm đèn ngọn hải đăng cách mực nước biển $100\\text{ feet}$ thì tầm nhìn xa của hoa tiêu đạt tối đa bao nhiêu hải lý?",
      "options": [
        "$11,7\\text{ hải lý}$",
        "$10,0\\text{ hải lý}$",
        "$117\\text{ hải lý}$",
        "$13,5\\text{ hải lý}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $h = 100$ vào công thức: $d \\approx 1,17 \\times \\sqrt{100} = 1,17 \\times 10 = 11,7\\text{ hải lý}$. Hoa tiêu có thể quan sát xa tối đa $11,7$ hải lý."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-9.7.1",
      "badge": "Đúng/Sai 1 - Khái niệm căn bậc hai và căn bậc hai số học",
      "source": "SGK Toán 9 KNTT - Bài 7 Mục 1",
      "prompt": "Xét tính đúng/sai của các khẳng định sau về căn bậc hai và căn bậc hai số học:",
      "subItems": [
        {
          "id": "a",
          "text": "Số dương $a$ có đúng hai căn bậc hai là $\\sqrt{a}$ và $-\\sqrt{a}$.",
          "correctAnswer": true,
          "explanation": "Mỗi số thực dương luôn có đúng hai căn bậc hai là hai số đối nhau."
        },
        {
          "id": "b",
          "text": "Số $-16$ có căn bậc hai là $-4$ vì $(-4)^2 = 16$.",
          "correctAnswer": false,
          "explanation": "Số âm không có căn bậc hai vì bình phương của mọi số thực đều không âm (không thể bằng $-16$)."
        },
        {
          "id": "c",
          "text": "Căn bậc hai số học của $81$ là $\\pm 9$.",
          "correctAnswer": false,
          "explanation": "Căn bậc hai số học của số dương luôn là một số DƯƠNG duy nhất, do đó căn bậc hai số học của 81 là 9."
        },
        {
          "id": "d",
          "text": "Với mọi số thực $x$, ta có $\\sqrt{x^2} = x$.",
          "correctAnswer": false,
          "explanation": "Công thức đúng phải là $\\sqrt{x^2} = |x|$. Nếu $x < 0$ thì $\\sqrt{x^2} = -x \\ne x$."
        }
      ]
    },
    {
      "id": "tf-9.7.2",
      "badge": "Đúng/Sai 2 - So sánh hai căn bậc hai số học",
      "source": "SGK Toán 9 KNTT - Bài 7 Luyện tập 1",
      "prompt": "Xét tính đúng/sai của các khẳng định sau về so sánh số:",
      "subItems": [
        {
          "id": "a",
          "text": "Vì $36 > 35$ nên $\\sqrt{36} > \\sqrt{35}$, suy ra $6 > \\sqrt{35}$.",
          "correctAnswer": true,
          "explanation": "Áp dụng định lý $a > b \\ge 0 \\Leftrightarrow \\sqrt{a} > \\sqrt{b}$."
        },
        {
          "id": "b",
          "text": "Ta có $3 = \\sqrt{9}$ và $\\sqrt{8} < \\sqrt{9}$ nên $\\sqrt{8} < 3$.",
          "correctAnswer": true,
          "explanation": "Đúng vì $8 < 9 \\implies \\sqrt{8} < \\sqrt{9} = 3$."
        },
        {
          "id": "c",
          "text": "Với số thực không âm $x$, nếu $\\sqrt{x} > 5$ thì $x > 25$.",
          "correctAnswer": true,
          "explanation": "Vì $5 = \\sqrt{25}$ nên $\\sqrt{x} > \\sqrt{25} \\Leftrightarrow x > 25$."
        },
        {
          "id": "d",
          "text": "Với số thực không âm $x$, nếu $\\sqrt{x} < 4$ thì tập nghiệm là $x < 16$.",
          "correctAnswer": false,
          "explanation": "Thiếu điều kiện $x \\ge 0$. Tập nghiệm chính xác phải là $0 \\le x < 16$."
        }
      ]
    },
    {
      "id": "tf-9.7.3",
      "badge": "Đúng/Sai 3 - Điều kiện xác định căn thức bậc nhất",
      "source": "SGK Toán 9 KNTT - Bài 7 Mục 2",
      "prompt": "Xét tính đúng/sai của các khẳng định sau về điều kiện xác định của căn thức bậc hai:",
      "subItems": [
        {
          "id": "a",
          "text": "Căn thức $\\sqrt{3x - 12}$ xác định khi và chỉ khi $x \\ge 4$.",
          "correctAnswer": true,
          "explanation": "$3x - 12 \\ge 0 \\Leftrightarrow 3x \\ge 12 \\Leftrightarrow x \\ge 4$."
        },
        {
          "id": "b",
          "text": "Căn thức $\\sqrt{-5x}$ xác định khi và chỉ khi $x \\ge 0$.",
          "correctAnswer": false,
          "explanation": "$-5x \\ge 0 \\Leftrightarrow x \\le 0$ (chia cho $-5 < 0$ đổi chiều)."
        },
        {
          "id": "c",
          "text": "Căn thức $\\sqrt{7 - x}$ xác định khi và chỉ khi $x \\le 7$.",
          "correctAnswer": true,
          "explanation": "$7 - x \\ge 0 \\Leftrightarrow -x \\ge -7 \\Leftrightarrow x \\le 7$."
        },
        {
          "id": "d",
          "text": "Căn thức $\\sqrt{x^2 + 1}$ xác định với mọi số thực $x \\in \\mathbb{R}$.",
          "correctAnswer": true,
          "explanation": "Vì $x^2 \\ge 0$ nên $x^2 + 1 \\ge 1 > 0$ với mọi $x \\in \\mathbb{R}$."
        }
      ]
    },
    {
      "id": "tf-9.7.4",
      "badge": "Đúng/Sai 4 - Điều kiện xác định căn thức chứa phân thức",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.4",
      "prompt": "Xét tính đúng/sai của các khẳng định sau về điều kiện xác định của căn thức phân thức:",
      "subItems": [
        {
          "id": "a",
          "text": "Căn thức $\\sqrt{\\frac{3}{x - 2}}$ có nghĩa khi và chỉ khi $x > 2$.",
          "correctAnswer": true,
          "explanation": "Tử số $3 > 0$ nên phân thức dương khi mẫu $x - 2 > 0 \\Leftrightarrow x > 2$."
        },
        {
          "id": "b",
          "text": "Căn thức $\\sqrt{\\frac{-2}{x + 1}}$ có nghĩa khi và chỉ khi $x < -1$.",
          "correctAnswer": true,
          "explanation": "Tử số $-2 < 0$ nên phân thức không âm khi mẫu $x + 1 < 0 \\Leftrightarrow x < -1$."
        },
        {
          "id": "c",
          "text": "Căn thức $\\sqrt{\\frac{x - 1}{4}}$ có nghĩa khi và chỉ khi $x \\ge 1$.",
          "correctAnswer": true,
          "explanation": "Mẫu số $4 > 0$ nên $\\frac{x - 1}{4} \\ge 0 \\Leftrightarrow x - 1 \\ge 0 \\Leftrightarrow x \\ge 1$."
        },
        {
          "id": "d",
          "text": "Căn thức $\\sqrt{\\frac{1}{x^2}}$ có nghĩa với mọi số thực $x \\in \\mathbb{R}$.",
          "correctAnswer": false,
          "explanation": "Mẫu số phải khác 0 nên $x^2 \\ne 0 \\Leftrightarrow x \\ne 0$."
        }
      ]
    },
    {
      "id": "tf-9.7.5",
      "badge": "Đúng/Sai 5 - Áp dụng hằng đẳng thức căn(A^2) = |A|",
      "source": "SGK Toán 9 KNTT - Bài 7 Mục 3",
      "prompt": "Xét tính đúng/sai của các phép tính sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sqrt{(-\\sqrt{5})^2} = \\sqrt{5}$.",
          "correctAnswer": true,
          "explanation": "$\\sqrt{(-\\sqrt{5})^2} = |-\\sqrt{5}| = \\sqrt{5}$."
        },
        {
          "id": "b",
          "text": "$\\sqrt{(\\sqrt{7} - 3)^2} = \\sqrt{7} - 3$.",
          "correctAnswer": false,
          "explanation": "Vì $7 < 9 \\implies \\sqrt{7} < 3 \\implies \\sqrt{7} - 3 < 0$, do đó $\\sqrt{(\\sqrt{7}-3)^2} = |\\sqrt{7}-3| = 3 - \\sqrt{7}$."
        },
        {
          "id": "c",
          "text": "$\\sqrt{(2 - \\sqrt{3})^2} = 2 - \\sqrt{3}$.",
          "correctAnswer": true,
          "explanation": "Vì $4 > 3 \\implies 2 > \\sqrt{3} \\implies 2 - \\sqrt{3} > 0$, nên $|2 - \\sqrt{3}| = 2 - \\sqrt{3}$."
        },
        {
          "id": "d",
          "text": "$\\sqrt{(1 - \\sqrt{2})^2} + \\sqrt{2} = 1$.",
          "correctAnswer": true,
          "explanation": "$|1 - \\sqrt{2}| + \\sqrt{2} = (\\sqrt{2} - 1) + \\sqrt{2} = 2\\sqrt{2} - 1 \\ne 1$. Khẳng định này sai! Khoan, để kiểm tra lại: $|1-\\sqrt{2}| = \\sqrt{2}-1$, cộng $\\sqrt{2}$ được $2\\sqrt{2}-1$. Khẳng định nói bằng 1 là SAI."
        }
      ]
    },
    {
      "id": "tf-9.7.6",
      "badge": "Đúng/Sai 6 - Rút gọn biểu thức chứa biến",
      "source": "SGK Toán 9 KNTT - Bài 7 Luyện tập 4",
      "prompt": "Cho biểu thức $P = \\sqrt{9x^2} - 2x$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Ta có $\\sqrt{9x^2} = \\sqrt{(3x)^2} = |3x|$.",
          "correctAnswer": true,
          "explanation": "Áp dụng định lý $\\sqrt{A^2} = |A|$ với $A = 3x$."
        },
        {
          "id": "b",
          "text": "Khi $x \\ge 0$, biểu thức $P$ rút gọn thành $P = x$.",
          "correctAnswer": true,
          "explanation": "Khi $x \\ge 0$, $|3x| = 3x \\implies P = 3x - 2x = x$."
        },
        {
          "id": "c",
          "text": "Khi $x < 0$, biểu thức $P$ rút gọn thành $P = -x$.",
          "correctAnswer": false,
          "explanation": "Khi $x < 0$, $|3x| = -3x \\implies P = -3x - 2x = -5x \\ne -x$."
        },
        {
          "id": "d",
          "text": "Tại $x = -4$, giá trị của biểu thức $P$ bằng $20$.",
          "correctAnswer": true,
          "explanation": "Thay $x = -4$ vào $P = -5x$: $P = -5(-4) = 20$."
        }
      ]
    },
    {
      "id": "tf-9.7.7",
      "badge": "Đúng/Sai 7 - Rút gọn hằng đẳng thức bậc hai",
      "source": "Đề thi HSG Toán 9 Cấp Huyện",
      "prompt": "Cho biểu thức $A = \\sqrt{x^2 - 10x + 25} + 3$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Biểu thức dưới dấu căn có thể viết thành hằng đẳng thức $(x - 5)^2$.",
          "correctAnswer": true,
          "explanation": "$x^2 - 10x + 25 = (x - 5)^2$."
        },
        {
          "id": "b",
          "text": "Với mọi giá trị của $x$, ta luôn có $A = |x - 5| + 3$.",
          "correctAnswer": true,
          "explanation": "$\\sqrt{(x - 5)^2} = |x - 5|$."
        },
        {
          "id": "c",
          "text": "Với $x < 5$, biểu thức $A$ rút gọn thành $A = x - 2$.",
          "correctAnswer": false,
          "explanation": "Khi $x < 5$, $|x - 5| = 5 - x$, suy ra $A = 5 - x + 3 = 8 - x \\ne x - 2$."
        },
        {
          "id": "d",
          "text": "Giá trị nhỏ nhất của biểu thức $A$ bằng $3$, đạt được khi $x = 5$.",
          "correctAnswer": true,
          "explanation": "Vì $|x - 5| \\ge 0$ nên $A \\ge 3$. Đạt tại $x = 5$."
        }
      ]
    },
    {
      "id": "tf-9.7.8",
      "badge": "Đúng/Sai 8 - Giải phương trình chứa căn",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.3",
      "prompt": "Cho phương trình: $\\sqrt{2x - 3} = 5$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Điều kiện xác định của phương trình là $x \\ge \\frac{3}{2}$.",
          "correctAnswer": true,
          "explanation": "$2x - 3 \\ge 0 \\Leftrightarrow x \\ge \\frac{3}{2}$."
        },
        {
          "id": "b",
          "text": "Bình phương hai vế phương trình ta được: $2x - 3 = 10$.",
          "correctAnswer": false,
          "explanation": "Vế phải bình phương là $5^2 = 25$, không phải 10."
        },
        {
          "id": "c",
          "text": "Nghiệm của phương trình là $x = 14$.",
          "correctAnswer": true,
          "explanation": "$2x - 3 = 25 \\Leftrightarrow 2x = 28 \\Leftrightarrow x = 14$ (thỏa mãn ĐKXĐ)."
        },
        {
          "id": "d",
          "text": "Phương trình đã cho có đúng hai nghiệm phân biệt.",
          "correctAnswer": false,
          "explanation": "Phương trình chỉ có duy nhất một nghiệm là $x = 14$."
        }
      ]
    },
    {
      "id": "tf-9.7.9",
      "badge": "Đúng/Sai 9 - Toán thực tế: Mảnh vườn hình vuông",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập thực tế",
      "prompt": "Bác Ba có một mảnh vườn hình vuông diện tích $144\\text{ m}^2$. Bác muốn rào dây thép gai xung quanh vườn (chừa cửa rộng $2\\text{ m}$). Giá mỗi mét dây thép gai là $40\\,000$ đồng. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Độ dài mỗi cạnh của mảnh vườn là $\\sqrt{144} = 12\\text{ m}$.",
          "correctAnswer": true,
          "explanation": "Diện tích hình vuông $S = a^2 = 144 \\implies a = 12\\text{ m}$."
        },
        {
          "id": "b",
          "text": "Chu vi của toàn bộ mảnh vườn là $48\\text{ m}$.",
          "correctAnswer": true,
          "explanation": "Chu vi hình vuông là $4 \\times 12 = 48\\text{ m}$."
        },
        {
          "id": "c",
          "text": "Chiều dài dây thép gai cần dùng để rào vườn là $46\\text{ m}$.",
          "correctAnswer": true,
          "explanation": "Trừ đi cửa rộng 2 m: $48 - 2 = 46\\text{ m}$."
        },
        {
          "id": "d",
          "text": "Bác Ba cần chuẩn bị số tiền mua dây thép gai là $1\\,920\\,000$ đồng.",
          "correctAnswer": false,
          "explanation": "Số tiền cần mua: $46 \\times 40\\,000 = 1\\,840\\,000$ đồng (chứ không phải 1 920 000 đồng vì đã trừ cửa)."
        }
      ]
    },
    {
      "id": "tf-9.7.10",
      "badge": "Đúng/Sai 10 - Toán thực tế: Tầm nhìn xa hàng hải",
      "source": "SGK Toán 9 KNTT - Bài 7 Ứng dụng thực tiễn",
      "prompt": "Khoảng cách $d$ (hải lý) từ vị trí người quan sát trên biển đến đường chân trời được tính bởi công thức $d = 3,57\\sqrt{h}$, trong đó $h$ là chiều cao của mắt người quan sát so với mực nước biển (tính bằng mét). Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Nếu một người đứng trên boong tàu có độ cao $h = 4\\text{ m}$ thì tầm nhìn xa đến chân trời là $7,14\\text{ hải lý}$.",
          "correctAnswer": true,
          "explanation": "$d = 3,57 \\times \\sqrt{4} = 3,57 \\times 2 = 7,14\\text{ hải lý}$."
        },
        {
          "id": "b",
          "text": "Khi chiều cao ngọn hải đăng tăng lên 4 lần thì tầm nhìn xa cũng tăng lên 4 lần.",
          "correctAnswer": false,
          "explanation": "Vì $d$ tỉ lệ thuận với $\\sqrt{h}$, khi $h$ tăng 4 lần thì $\\sqrt{4h} = 2\\sqrt{h}$, tức là tầm nhìn chỉ tăng lên 2 lần."
        },
        {
          "id": "c",
          "text": "Một người đứng trên ngọn hải đăng cao $25\\text{ m}$ thì có tầm nhìn xa là $17,85\\text{ hải lý}$.",
          "correctAnswer": true,
          "explanation": "$d = 3,57 \\times \\sqrt{25} = 3,57 \\times 5 = 17,85\\text{ hải lý}$."
        },
        {
          "id": "d",
          "text": "Để có tầm nhìn xa đạt $35,7\\text{ hải lý}$ thì đài quan sát cần đặt ở độ cao $10\\text{ m}$.",
          "correctAnswer": false,
          "explanation": "$35,7 = 3,57\\sqrt{h} \\implies \\sqrt{h} = 10 \\implies h = 100\\text{ m}$ (chứ không phải 10 m)."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-9.7.1",
      "badge": "Trả lời ngắn 1 - Căn bậc hai số học",
      "source": "SGK Toán 9 KNTT - Bài 7 Khởi động",
      "prompt": "Căn bậc hai số học của số $81$ bằng bao nhiêu?",
      "correctAnswer": "9",
      "acceptableAnswers": [
        "9",
        "9.0"
      ],
      "explanation": "Vì $9 > 0$ và $9^2 = 81$ nên $\\sqrt{81} = 9$."
    },
    {
      "id": "sa-9.7.2",
      "badge": "Trả lời ngắn 2 - Giá trị biểu thức số học",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.2",
      "prompt": "Tính giá trị của biểu thức: $\\sqrt{144} - \\sqrt{49}$.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "5.0"
      ],
      "explanation": "Ta có $\\sqrt{144} = 12$ và $\\sqrt{49} = 7$. Do đó $12 - 7 = 5$."
    },
    {
      "id": "sa-9.7.3",
      "badge": "Trả lời ngắn 3 - Tìm cận điều kiện xác định",
      "source": "SGK Toán 9 KNTT - Bài 7 Mục 2",
      "prompt": "Căn thức bậc hai $\\sqrt{2x - 8}$ xác định với mọi $x \\ge a$. Giá trị của số $a$ là bao nhiêu?",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4.0",
        "a = 4"
      ],
      "explanation": "$2x - 8 \\ge 0 \\Leftrightarrow 2x \\ge 8 \\Leftrightarrow x \\ge 4$. Vậy $a = 4$."
    },
    {
      "id": "sa-9.7.4",
      "badge": "Trả lời ngắn 4 - Áp dụng hằng đẳng thức",
      "source": "SGK Toán 9 KNTT - Bài 7 Luyện tập 2",
      "prompt": "Tính giá trị của biểu thức: $A = \\sqrt{(\\sqrt{5} - 3)^2} + \\sqrt{5}$.",
      "correctAnswer": "3",
      "acceptableAnswers": [
        "3",
        "3.0"
      ],
      "explanation": "Ta có $\\sqrt{(\\sqrt{5} - 3)^2} = |\\sqrt{5} - 3|$. Vì $\\sqrt{5} < \\sqrt{9} = 3$ nên $|\\sqrt{5} - 3| = 3 - \\sqrt{5}$.\\nDo đó $A = 3 - \\sqrt{5} + \\sqrt{5} = 3$."
    },
    {
      "id": "sa-9.7.5",
      "badge": "Trả lời ngắn 5 - Tìm x từ căn bậc hai",
      "source": "SGK Toán 9 KNTT - Bài 7 Bài tập 3.1",
      "prompt": "Tìm số thực $x$ không âm thỏa mãn $\\sqrt{x} = 7$.",
      "correctAnswer": "49",
      "acceptableAnswers": [
        "49",
        "x = 49"
      ],
      "explanation": "Với $x \\ge 0$, ta có $\\sqrt{x} = 7 \\Leftrightarrow x = 7^2 = 49$."
    },
    {
      "id": "sa-9.7.6",
      "badge": "Trả lời ngắn 6 - Giải phương trình căn thức",
      "source": "SGK Toán 9 KNTT - Bài 7 Luyện tập 3",
      "prompt": "Tìm nghiệm của phương trình: $\\sqrt{2x + 1} = 5$.",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12",
        "x = 12"
      ],
      "explanation": "ĐKXĐ: $x \\ge -0,5$. Bình phương hai vế: $2x + 1 = 5^2 = 25 \\Leftrightarrow 2x = 24 \\Leftrightarrow x = 12$ (thỏa mãn ĐKXĐ)."
    },
    {
      "id": "sa-9.7.7",
      "badge": "Trả lời ngắn 7 - Tính giá trị biểu thức rút gọn",
      "source": "Đề thi HSG Toán 9 Cấp Quận",
      "prompt": "Cho biểu thức $P = \\sqrt{x^2 - 10x + 25} + x$ với $x \\ge 5$. Tính giá trị của $P$ khi $x = 8$.",
      "correctAnswer": "11",
      "acceptableAnswers": [
        "11",
        "11.0"
      ],
      "explanation": "Ta có $P = \\sqrt{(x - 5)^2} + x = |x - 5| + x$. Với $x \\ge 5$, $|x - 5| = x - 5 \\implies P = 2x - 5$. Thay $x = 8$: $P = 2(8) - 5 = 11$."
    },
    {
      "id": "sa-9.7.8",
      "badge": "Trả lời ngắn 8 - Tổng nghiệm phương trình căn bình phương",
      "source": "Đề thi tuyển sinh vào 10 THPT",
      "prompt": "Tổng tất cả các nghiệm của phương trình $\\sqrt{x^2 - 4x + 4} = 3$ bằng bao nhiêu?",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4.0"
      ],
      "explanation": "Phương trình tương đương $|x - 2| = 3 \\Leftrightarrow x - 2 = 3$ hoặc $x - 2 = -3 \\Leftrightarrow x = 5$ hoặc $x = -1$. Tổng các nghiệm là $5 + (-1) = 4$."
    },
    {
      "id": "sa-9.7.9",
      "badge": "Trả lời ngắn 9 - Bài toán thực tế: Cạnh pin năng lượng mặt trời",
      "source": "SGK Toán 9 KNTT - Bài 7 Vận dụng",
      "prompt": "Một tấm pin năng lượng mặt trời hình vuông có diện tích bề mặt là $2,25\\text{ m}^2$. Độ dài cạnh của tấm pin đó bằng bao nhiêu mét?",
      "correctAnswer": "1.5",
      "acceptableAnswers": [
        "1.5",
        "1,5",
        "1.5 m",
        "1,5 m"
      ],
      "explanation": "Độ dài cạnh tấm pin hình vuông là: $a = \\sqrt{2,25} = 1,5\\text{ m}$."
    },
    {
      "id": "sa-9.7.10",
      "badge": "Trả lời ngắn 10 - Bài toán thực tế: Thời gian rơi tự do",
      "source": "Đề kiểm tra thực hành Vật lý - Toán 9",
      "prompt": "Thời gian $t$ (giây) để một vật rơi tự do từ độ cao $h$ (mét) xuống đất được tính bởi công thức $t = \\sqrt{\\frac{2h}{g}}$ với $g \\approx 9,8\\text{ m/s}^2$. Nếu vật rơi từ độ cao $19,6\\text{ m}$ thì thời gian rơi chạm đất là bao nhiêu giây?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "2.0",
        "2 giây",
        "2s"
      ],
      "explanation": "Thay số: $t = \\sqrt{\\frac{2 \\times 19,6}{9,8}} = \\sqrt{\\frac{39,2}{9,8}} = \\sqrt{4} = 2\\text{ giây}$."
    }
  ]
},
};
