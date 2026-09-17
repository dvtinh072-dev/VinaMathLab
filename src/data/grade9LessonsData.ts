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
  }
};
