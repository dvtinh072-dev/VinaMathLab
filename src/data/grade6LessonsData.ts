import { DetailedLessonData } from "@/data/allGradesLessonsData";
import { LessonItem, GradeData } from "@/data/curriculumData";

/**
 * HỆ THỐNG GIÁO ÁN CHI TIẾT & ĐẤU TRƯỜNG BÀI TẬP SGK TOÁN 6
 * Đầy đủ 43 Bài Học - Bám sát 100% Sách Giáo Khoa "Kết Nối Tri Thức Với Cuộc Sống" (Tập 1 & Tập 2)
 */
export const GRADE_6_DETAILED_LESSONS: { [key: string]: DetailedLessonData } = {
  "t6-b1-tap-hop": {
    "id": "t6-b1-tap-hop",
    "lessonNumber": 1,
    "title": "Bài 1: Tập hợp",
    "bookChapter": "Chương I: Tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Phân loại đồ dùng học tập",
    "scenarioFrames": [],
    "youtubeVideoId": "Alz53g47Nbk",
    "youtubeVideoTitle": "Bài Giảng Video: Tập Hợp & Phần Tử Của Tập Hợp (Toán 6 KNTT)",
    "videoQuestions": [
      {
        "id": "vq-6.1.1",
        "title": "Câu hỏi tương tác 1: Nhận biết tập hợp",
        "timeLabel": "02:15",
        "question": "Trong các cách viết sau, cách viết nào đặt tên tập hợp và biểu diễn đúng quy ước SGK?",
        "options": [
          "A = {1; 2; 3; 4}",
          "a = {1; 2; 3; 4}",
          "A = (1, 2, 3, 4)",
          "A = [1; 2; 3; 4]"
        ],
        "correctIndex": 0,
        "explanation": "Tên tập hợp được đặt bằng chữ cái in hoa (A, B, C...) và các phần tử được viết trong dấu ngoặc nhọn { }, ngăn cách bởi dấu chấm phẩy (;)."
      },
      {
        "id": "vq-6.1.2",
        "title": "Câu hỏi tương tác 2: Ký hiệu thuộc (∈) và không thuộc (∉)",
        "timeLabel": "05:40",
        "question": "Cho tập hợp M = {x; y; z; 5}. Khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "x ∈ M và 2 ∉ M",
          "x ∉ M và 5 ∉ M",
          "z ∉ M và 2 ∈ M",
          "{x} ∈ M"
        ],
        "correctIndex": 0,
        "explanation": "Phần tử x có mặt trong M nên x ∈ M. Số 2 không có mặt trong M nên 2 ∉ M."
      },
      {
        "id": "vq-6.1.3",
        "title": "Câu hỏi tương tác 3: Liệt kê phần tử tập hợp",
        "timeLabel": "09:10",
        "question": "Viết tập hợp P các chữ cái xuất hiện trong từ \"NHA TRANG\" bằng cách liệt kê phần tử:",
        "options": [
          "P = {N; H; A; T; R; G}",
          "P = {N; H; A; T; R; A; N; G}",
          "P = {N; H; A; T; R}",
          "P = {n; h; a; t; r; g}"
        ],
        "correctIndex": 0,
        "explanation": "Theo quy tắc liệt kê, mỗi phần tử chỉ được viết một lần. Các chữ cái 'N' và 'A' lặp lại 2 lần chỉ được ghi 1 lần. Do đó P = {N; H; A; T; R; G}."
      }
    ],
    "theorySections": [
      {
        "index": "1",
        "title": "Khái niệm Tập hợp & Phần tử của tập hợp",
        "points": [
          "Tập hợp là khái niệm cơ bản thường dùng trong toán học và đời sống để chỉ một nhóm các đối tượng có chung tính chất (ví dụ: tập hợp học sinh lớp 6A, tập hợp các số tự nhiên nhỏ hơn 5,...).",
          "Tên tập hợp thường được đặt bằng các chữ cái in hoa: $A, B, C, X, Y,...$",
          "Mỗi đối tượng trong tập hợp được gọi là một **phần tử** của tập hợp đó."
        ],
        "formula": "A = \\{x_1;\\ x_2;\\ x_3;\\ \\dots\\}",
        "exampleTitle": "Ví dụ 1 (SGK Toán 6)",
        "exampleProblem": "Gọi $M$ là tập hợp các đồ dùng học tập có trên bàn: thước kẻ, bút bi, ê-ke. Hãy chỉ ra các phần tử của tập hợp $M$.",
        "exampleSolution": "Tập hợp $M$ gồm 3 phần tử là: thước kẻ, bút bi, ê-ke. Ta viết: $M = \\{\\text{thước kẻ};\\ \\text{bút bi};\\ \\text{ê-ke}\\}$."
      },
      {
        "index": "2",
        "title": "Ký hiệu thuộc (∈) và không thuộc (∉)",
        "points": [
          "Ký hiệu $a \\in A$ đọc là: \"$a$ thuộc $A$\" hoặc \"$a$ là phần tử của tập hợp $A$\".",
          "Ký hiệu $b \\notin A$ đọc là: \"$b$ không thuộc $A$\" hoặc \"$b$ không phải là phần tử của tập hợp $A$\".",
          "Lưu ý quan trọng: Ký hiệu $\\in, \\notin$ chỉ dùng để chỉ mối quan hệ giữa một **phần tử** với một **tập hợp**."
        ],
        "formula": "x \\in A \\quad \\text{hoặc} \\quad y \\notin A",
        "exampleTitle": "Ví dụ 2 (SGK Toán 6)",
        "exampleProblem": "Cho tập hợp $M = \\{a;\\ b;\\ x;\\ y\\}$. Dùng ký hiệu $\\in, \\notin$ để ghi nhận các phần tử $x, a, 1, 2$ có thuộc $M$ hay không?",
        "exampleSolution": "Ta có: $x \\in M$; $a \\in M$, nhưng $1 \\notin M$ và $2 \\notin M$ vì số 1 và số 2 không có mặt trong tập hợp $M$."
      },
      {
        "index": "3",
        "title": "Hai cách cho (biểu diễn) một tập hợp",
        "points": [
          "**Cách 1: Liệt kê các phần tử của tập hợp**\n• Viết các phần tử bên trong hai dấu ngoặc nhọn $\\{ \\}$, cách nhau bởi dấu chấm phẩy \";\" (để tránh nhầm lẫn với số thập phân).\n• **Mỗi phần tử chỉ được liệt kê một lần, thứ tự liệt kê tùy ý**.",
          "**Cách 2: Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp**\n• Viết dạng: $A = \\{x \\in \\mathbb{N} \\mid \\text{tính chất của } x\\}$."
        ],
        "formula": "A = \\{0;\\ 1;\\ 2;\\ 3\\} \\quad \\Longleftrightarrow \\quad A = \\{x \\in \\mathbb{N} \\mid x < 4\\}",
        "exampleTitle": "Ví dụ 3 (SGK Toán 6 & Dạy Thêm)",
        "exampleProblem": "Viết tập hợp $P$ các số tự nhiên lớn hơn 3 và không vượt quá 8 bằng hai cách:",
        "exampleSolution": "• Cách 1 (Liệt kê): $P = \\{4;\\ 5;\\ 6;\\ 7;\\ 8\\}$.\n• Cách 2 (Tính chất đặc trưng): $P = \\{x \\in \\mathbb{N} \\mid 3 < x \\le 8\\}$."
      },
      {
        "index": "4",
        "title": "Tập hợp các số tự nhiên ℕ và ℕ*",
        "points": [
          "Tập hợp các số tự nhiên được ký hiệu là $\\mathbb{N}$: $\\mathbb{N} = \\{0;\\ 1;\\ 2;\\ 3;\\ 4;\\ \\dots\\}$ (bao gồm cả số 0).",
          "Tập hợp các số tự nhiên khác 0 được ký hiệu là $\\mathbb{N}^*$: $\\mathbb{N}^* = \\{1;\\ 2;\\ 3;\\ 4;\\ \\dots\\}$.",
          "Mọi phần tử của $\\mathbb{N}^*$ đều thuộc $\\mathbb{N}$, tức là $\\mathbb{N}^* \\subset \\mathbb{N}$."
        ],
        "formula": "\\mathbb{N} = \\{0;\\ 1;\\ 2;\\ 3;\\ \\dots\\}, \\quad \\mathbb{N}^* = \\{1;\\ 2;\\ 3;\\ \\dots\\}",
        "exampleTitle": "Ví dụ 4",
        "exampleProblem": "Viết tập hợp $B = \\{x \\in \\mathbb{N}^* \\mid x \\le 3\\}$ bằng cách liệt kê phần tử:",
        "exampleSolution": "Vì $x \\in \\mathbb{N}^*$ nên $x > 0$. Kết hợp $x \\le 3$, ta có các phần tử là 1; 2; 3. Vậy $B = \\{1;\\ 2;\\ 3\\}$ (không có số 0)."
      },
      {
        "index": "5",
        "title": "Số phần tử của tập hợp & Tập hợp rỗng (∅)",
        "points": [
          "Một tập hợp có thể có một phần tử, nhiều phần tử, vô số phần tử, hoặc không có phần tử nào.",
          "Tập hợp không có phần tử nào gọi là **tập hợp rỗng**, ký hiệu là $\\emptyset$ (lưu ý không viết là $\\{\\emptyset\\}$).",
          "Số phần tử của tập hợp các số tự nhiên liên tiếp từ $a$ đến $b$ ($a \\le b$) là: $(b - a) + 1$."
        ],
        "formula": "\\text{Số phần tử} = (b - a) + 1 \\quad (a \\le b)",
        "exampleTitle": "Ví dụ 5",
        "exampleProblem": "Tập hợp $C$ các số tự nhiên $x$ thỏa mãn $5 < x < 6$ có bao nhiêu phần tử?",
        "exampleSolution": "Không có số tự nhiên nào nằm giữa hai số liên tiếp 5 và 6. Do đó tập hợp $C$ không có phần tử nào, ta viết $C = \\emptyset$."
      }
    ],
    "tips": [
      "Mỗi phần tử chỉ được liệt kê một lần duy nhất trong dấu ngoặc nhọn { }.",
      "Khi viết tập hợp có các phần tử là số, bắt buộc dùng dấu chấm phẩy ';' để phân cách, tránh nhầm lẫn với dấu phẩy trong số thập phân.",
      "Công thức tính nhanh số phần tử dãy số liên tiếp: (Số cuối - Số đầu) + 1."
    ],
    "traps": [
      "BẪY VIẾT TẬP HỢP CHỮ CÁI: Trong các từ có chữ cái lặp lại như 'NHA TRANG' hay 'TOAN HOC', mỗi chữ cái lặp lại chỉ được viết đúng 1 lần (ví dụ: {N; H; A; T; R; G}).",
      "BẪY KÝ HIỆU THUỘC VÀ CON: Ký hiệu ∈ và ∉ chỉ áp dụng cho PHẦN TỬ với TẬP HỢP (ví dụ: 1 ∈ A là đúng, nhưng {1} ∈ A là sai; phải viết {1} ⊂ A).",
      "BẪY TẬP HỢP ℕ VÀ ℕ*: Số 0 ∈ ℕ nhưng 0 ∉ ℕ*."
    ],
    "quizQuestions": [
      {
        "id": "quiz-1.1",
        "badge": "Câu 1 - TN6 CI Bài 1 & SGK Toán 6 Trang 7",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Tập hợp $X = \\{1; 2; 3\\}$ có số phần tử là:",
        "options": [
          "3 phần tử",
          "0 phần tử",
          "1 phần tử",
          "2 phần tử"
        ],
        "correctIndex": 0,
        "explanation": "Nhìn vào tập hợp $X = \\{1; 2; 3\\}$ ta thấy có 3 phần tử gồm các số 1, 2 và 3."
      },
      {
        "id": "quiz-1.2",
        "badge": "Bài 1.1 - SGK Toán 6 Tập 1, Trang 7 & Câu 3 TN6 CI",
        "source": "SGK Toán 6 Tập 1, Trang 7 & TN6 CI Bài 1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho tập hợp $M = \\{a; b; x; y\\}$. Khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "$y \\in M$",
          "$a \\notin M$",
          "$1 \\in M$",
          "$b \\notin M$"
        ],
        "correctIndex": 0,
        "explanation": "Phần tử $y$ có mặt trong tập hợp $M = \\{a; b; x; y\\}$ nên $y \\in M$ là khẳng định đúng."
      },
      {
        "id": "quiz-1.3",
        "badge": "Câu 4 - TN6 CI Bài 1 & SH6-CĐ 1.1",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho tập hợp $A = \\{1; 2; 3; 4; 5\\}$. Khẳng định nào sau đây là SAI?",
        "options": [
          "$0 \\in A$",
          "$1 \\in A$",
          "$6 \\notin A$",
          "$5 \\in A$"
        ],
        "correctIndex": 0,
        "explanation": "Tập hợp $A$ không chứa số $0$, nên viết $0 \\in A$ là SAI (khẳng định đúng phải là $0 \\notin A$)."
      },
      {
        "id": "quiz-1.4",
        "badge": "Bài 1.3 - SGK Toán 6 Tập 1, Trang 8 & SH6-CĐ 1.1",
        "source": "SGK Toán 6 Tập 1, Trang 8 & SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Bằng cách liệt kê phần tử, hãy viết tập hợp $K$ các chữ cái xuất hiện trong từ \"NHA TRANG\":",
        "options": [
          "$K = \\{\\text{N; H; A; T; R; G}\\}$",
          "$K = \\{\\text{N; H; A; T; R; A; N; G}\\}$",
          "$K = \\{\\text{N; H; A; T; R}\\}$",
          "$K = \\{\\text{H; A; T; R; G}\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Trong từ \"NHA TRANG\", chữ cái N và A xuất hiện hai lần nhưng trong tập hợp mỗi phần tử chỉ được liệt kê một lần. Do đó $K = \\{\\text{N; H; A; T; R; G}\\}$."
      },
      {
        "id": "quiz-1.5",
        "badge": "Bài 1.5 - SGK Toán 6 Tập 1, Trang 8 & SH6-CĐ 1.1",
        "source": "SGK Toán 6 Tập 1, Trang 8 & SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Một năm có 4 quý. Hãy viết tập hợp $M$ các tháng của Quý II trong năm (theo Dương lịch):",
        "options": [
          "$M = \\{\\text{tháng Tư; tháng Năm; tháng Sáu}\\}$",
          "$M = \\{\\text{tháng Một; tháng Hai; tháng Ba}\\}$",
          "$M = \\{\\text{tháng Bảy; tháng Tám; tháng Chín}\\}$",
          "$M = \\{\\text{tháng Mười; tháng Mười một; tháng Mười hai}\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Quý II trong năm gồm 3 tháng: tháng Tư, tháng Năm và tháng Sáu. Do đó $M = \\{\\text{tháng Tư; tháng Năm; tháng Sáu}\\}$."
      },
      {
        "id": "quiz-1.6",
        "badge": "Dạng 1 Bài 1 - SH6-CĐ 1.1 (Dạy thêm KNTT)",
        "source": "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Viết tập hợp các số tự nhiên nhỏ hơn 8 bằng cách liệt kê các phần tử:",
        "options": [
          "$\\{0; 1; 2; 3; 4; 5; 6; 7\\}$",
          "$\\{1; 2; 3; 4; 5; 6; 7\\}$",
          "$\\{0; 1; 2; 3; 4; 5; 6; 7; 8\\}$",
          "$\\{1; 2; 3; 4; 5; 6; 7; 8\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Các số tự nhiên nhỏ hơn 8 bắt đầu từ số 0 đến số 7 gồm: 0; 1; 2; 3; 4; 5; 6; 7. Do đó tập hợp là $\\{0; 1; 2; 3; 4; 5; 6; 7\\}$."
      },
      {
        "id": "quiz-1.7",
        "badge": "Câu 9 - TN6 CI Bài 1 (Mức độ Thông hiểu)",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid 4 < x \\le 9\\}$. Tập hợp $A$ viết dưới dạng liệt kê là:",
        "options": [
          "$A = \\{5; 6; 7; 8; 9\\}$",
          "$A = \\{4; 5; 6; 7; 8; 9\\}$",
          "$A = \\{4; 5; 6; 7; 8\\}$",
          "$A = \\{5; 6; 7; 8\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Do $x \\in \\mathbb{N}$ và $4 < x \\le 9$ nên $x$ nhận các giá trị $5; 6; 7; 8; 9$. Do đó $A = \\{5; 6; 7; 8; 9\\}$."
      },
      {
        "id": "quiz-1.8",
        "badge": "Câu 11 - TN6 CI Bài 1 & SH6-CĐ 1.1",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho tập hợp $C = \\{3; 4; 5; 6; 7; 8\\}$. Cách viết nào dưới đây biểu diễn tập hợp $C$ dưới dạng chỉ ra tính chất đặc trưng cho các phần tử?",
        "options": [
          "$C = \\{x \\in \\mathbb{N} \\mid 2 < x \\le 8\\}$",
          "$C = \\{x \\in \\mathbb{N} \\mid 2 < x < 8\\}$",
          "$C = \\{x \\in \\mathbb{N} \\mid 2 < x \\le 9\\}$",
          "$C = \\{x \\in \\mathbb{N} \\mid 2 \\le x < 9\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Tập hợp $C$ gồm các số tự nhiên từ 3 đến 8, tức là lớn hơn 2 và không vượt quá 8: $C = \\{x \\in \\mathbb{N} \\mid 2 < x \\le 8\\}$."
      },
      {
        "id": "quiz-1.9",
        "badge": "Câu 12 - TN6 CI Bài 1 (Mức độ Thông hiểu)",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Số phần tử của tập hợp $M = \\{x \\in \\mathbb{N} \\mid 10 < x \\le 20\\}$ là:",
        "options": [
          "10 phần tử",
          "11 phần tử",
          "12 phần tử",
          "9 phần tử"
        ],
        "correctIndex": 0,
        "explanation": "Tập hợp $M = \\{11; 12; 13; 14; 15; 16; 17; 18; 19; 20\\}$. Số phần tử của $M$ là: $(20 - 11) : 1 + 1 = 10$ phần tử."
      },
      {
        "id": "quiz-1.10",
        "badge": "Câu 10 - TN6 CI Bài 1 & SH6-CĐ 1.1 Bài 5a",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho tập hợp $A$ là tập hợp các số tự nhiên có hai chữ số mà chữ số hàng chục gấp đôi chữ số hàng đơn vị. Tập hợp $A$ viết theo cách liệt kê là:",
        "options": [
          "$A = \\{21; 42; 63; 84\\}$",
          "$A = \\{20; 21; 42; 63; 84\\}$",
          "$A = \\{12; 24; 36; 48\\}$",
          "$A = \\{10; 12; 24; 36; 48\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số cần tìm là $\\overline{ab}$ ($a, b \\in \\mathbb{N}, 1 \\le a \\le 9, 0 \\le b \\le 9$). Vì $a = 2b$ và $a > 0$ nên $b \\in \\{1; 2; 3; 4\\}$. Khi đó $a$ tương ứng là $2; 4; 6; 8$. Ta được các số: $21; 42; 63; 84$."
      }
    ]
  },
  "t6-b2-cach-ghi-so-tu-nhien": {
    "id": "t6-b2-cach-ghi-so-tu-nhien",
    "lessonNumber": 2,
    "title": "Bài 2: Cách ghi số tự nhiên",
    "bookChapter": "Chương I: Tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Đọc số dân và số La Mã",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "Hệ thập phân & Cấu tạo số tự nhiên (Hàng và Lớp)",
        "points": [
          "Để ghi số tự nhiên trong hệ thập phân, người ta dùng 10 chữ số: $0;\\ 1;\\ 2;\\ 3;\\ 4;\\ 5;\\ 6;\\ 7;\\ 8;\\ 9$.",
          "Trong hệ thập phân, cứ 10 đơn vị ở một hàng thì làm thành 1 đơn vị ở hàng liền trước nó.",
          "Khi viết các số tự nhiên có từ 4 chữ số trở lên, ta viết tách từng nhóm 3 chữ số từ phải sang trái (theo từng lớp: lớp đơn vị, lớp nghìn, lớp triệu, lớp tỉ,...) để dễ đọc và tránh nhầm lẫn."
        ],
        "exampleTitle": "Ví dụ 1 (SGK Toán 6 Tập 1, Trang 9)",
        "exampleProblem": "Đọc và viết số dân của Việt Nam theo thống kê năm 2020: \"chín mươi bảy triệu ba trăm ba mươi tám nghìn năm trăm bảy mươi chín người\".",
        "exampleSolution": "Số gồm 97 triệu, 338 nghìn và 579 đơn vị. Ta viết tách nhóm 3 chữ số: $97\\ 338\\ 579$ người."
      },
      {
        "index": "2",
        "title": "Giá trị của các chữ số theo vị trí & Phân biệt Số với Chữ số",
        "points": [
          "Mỗi chữ số trong một số tự nhiên có một giá trị phụ thuộc vào vị trí (hàng) mà nó đứng.",
          "Phân biệt rõ:",
          "    • Chữ số (chỉ gồm 1 ký tự từ 0 đến 9) khác với Số (giá trị hoàn chỉnh).",
          "    • Chữ số hàng chục (1 chữ số) khác với Số chục (toàn bộ phần số từ hàng chục trở về trước).",
          "    • Chữ số hàng trăm khác với Số trăm."
        ],
        "exampleTitle": "Ví dụ 2 (Chuyên đề CĐ 1.2 & SGK)",
        "exampleProblem": "Cho số $4\\ 315$. Hãy chỉ ra: các chữ số, chữ số hàng chục, số chục, chữ số hàng trăm, số trăm và giá trị của chữ số 4.",
        "exampleSolution": "• Các chữ số: 4, 3, 1, 5.\n• Chữ số hàng chục là 1; số chục là 431.\n• Chữ số hàng trăm là 3; số trăm là 43.\n• Chữ số 4 đứng ở hàng nghìn nên có giá trị là $4 \\times 1\\ 000 = 4\\ 000$."
      },
      {
        "index": "3",
        "title": "Biểu diễn (Khai triển) cấu tạo thập phân của số tự nhiên",
        "points": [
          "Để biểu diễn số tự nhiên mà các chữ số là chữ cái, ta bắt buộc phải dùng gạch ngang trên đầu:",
          "    • Số có 2 chữ số: $\\overline{ab} = 10a + b \\quad (a \\ne 0)$.",
          "    • Số có 3 chữ số: $\\overline{abc} = 100a + 10b + c \\quad (a \\ne 0)$.",
          "    • Số có 4 chữ số: $\\overline{abcd} = 1\\ 000a + 100b + 10c + d \\quad (a \\ne 0)$.",
          "Mỗi số tự nhiên đều viết được thành tổng giá trị các chữ số của nó."
        ],
        "exampleTitle": "Ví dụ 3 (SGK Toán 6 Tập 1, Trang 10)",
        "exampleProblem": "Khai triển cấu tạo thập phân của số 236 và số tổng quát $\\overline{ab}$:",
        "exampleSolution": "• $236 = 2 \\times 100 + 3 \\times 10 + 6$.\n• $\\overline{ab} = a \\times 10 + b$ (với $a \\ne 0$)."
      },
      {
        "index": "4",
        "title": "Hệ số La Mã (Bảng chuyển đổi từ 1 đến 30)",
        "points": [
          "Bảng các số La Mã từ 1 đến 30:"
        ],
        "hasRomanTable": true,
        "exampleTitle": "Ví dụ 4 (SGK Toán 6)",
        "exampleProblem": "Đọc các số La Mã sau: $\\text{XIV}$, $\\text{XXVI}$, $\\text{XXIX}$.",
        "exampleSolution": "• $\\text{XIV} = 10 + 4 = 14$ (mười bốn).\n• $\\text{XXVI} = 20 + 5 + 1 = 26$ (hai mươi sáu).\n• $\\text{XXIX} = 20 + 9 = 29$ (hai mươi chín)."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-2.1",
        "badge": "Câu 1 - TN6 CI Bài 2 & SGK Toán 6 Trang 9",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Viết số tự nhiên sau: \"Ba trăm hai mươi bảy tỉ bốn trăm chín mươi triệu không trăm ba mươi mốt nghìn năm trăm tám mươi bảy\":",
        "options": [
          "$327\\ 490\\ 031\\ 587$",
          "$32\\ 749\\ 031\\ 587$",
          "$327\\ 409\\ 031\\ 587$",
          "$300\\ 274\\ 031\\ 587$"
        ],
        "correctIndex": 0,
        "explanation": "Số gồm 327 tỉ, 490 triệu, 031 nghìn và 587 đơn vị. Ta viết là: $327\\ 490\\ 031\\ 587$."
      },
      {
        "id": "quiz-2.2",
        "badge": "Câu 2 - TN6 CI Bài 2 & SGK Toán 6 Trang 10",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Trong số $46\\ 308\\ 000$, chữ số $6$ nằm ở hàng nào và có giá trị bằng bao nhiêu?",
        "options": [
          "Hàng triệu, có giá trị là $6\\ 000\\ 000$",
          "Hàng trăm nghìn, có giá trị là $600\\ 000$",
          "Hàng chục triệu, có giá trị là $60\\ 000\\ 000$",
          "Hàng nghìn, có giá trị là $6\\ 000$"
        ],
        "correctIndex": 0,
        "explanation": "Số $46\\ 308\\ 000$ có chữ số $6$ ở hàng triệu (thuộc lớp triệu), nên có giá trị là: $6 \\times 1\\ 000\\ 000 = 6\\ 000\\ 000$."
      },
      {
        "id": "quiz-2.3",
        "badge": "Câu 7 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho số tự nhiên $5432$. Số chục và chữ số hàng chục của số này lần lượt là:",
        "options": [
          "Số chục là $543$, chữ số hàng chục là $3$",
          "Số chục là $32$, chữ số hàng chục là $3$",
          "Số chục là $3$, chữ số hàng chục là $3$",
          "Số chục là $43$, chữ số hàng chục là $3$"
        ],
        "correctIndex": 0,
        "explanation": "Trong số $5432$, chữ số đứng ở hàng chục là $3$, còn số chục là $543$ (vì $5432 = 543 \\times 10 + 2$)."
      },
      {
        "id": "quiz-2.4",
        "badge": "Câu 3 - TN6 CI Bài 2 & SGK Toán 6 Trang 11",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Số La Mã $\\text{XXVII}$ tương ứng với giá trị nào trong hệ thập phân?",
        "options": [
          "$27$",
          "$28$",
          "$29$",
          "$23$"
        ],
        "correctIndex": 0,
        "explanation": "Theo quy tắc ghi số La Mã: $\\text{XXVII} = 10 + 10 + 5 + 1 + 1 = 27$."
      },
      {
        "id": "quiz-2.5",
        "badge": "Câu 5 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Viết các số tự nhiên $19$ và $25$ bằng chữ số La Mã:",
        "options": [
          "$\\text{XIX}$ và $\\text{XXV}$",
          "$\\text{XVIV}$ và $\\text{XXV}$",
          "$\\text{XVIIII}$ và $\\text{XXV}$",
          "$\\text{XIX}$ và $\\text{XV}$"
        ],
        "correctIndex": 0,
        "explanation": "Số $19 = 10 + (10 - 1)$ viết là $\\text{XIX}$; số $25 = 20 + 5$ viết là $\\text{XXV}$."
      },
      {
        "id": "quiz-2.6",
        "badge": "Câu 13 - TN6 CI Bài 2 & SGK Toán 6 Trang 10",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho số tự nhiên có tổng giá trị các chữ số của nó là: $3 \\times 1000 + 8 \\times 10 + 6$. Số đó là:",
        "options": [
          "$3086$",
          "$3806$",
          "$3860$",
          "$3068$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có: $3 \\times 1000 + 8 \\times 10 + 6 = 3000 + 80 + 6 = 3086$. Số cần tìm là $3086$."
      },
      {
        "id": "quiz-2.7",
        "badge": "Câu 14 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Viết tập hợp các chữ số của số tự nhiên $2021$ bằng cách liệt kê phần tử:",
        "options": [
          "$\\{0; 1; 2\\}$",
          "$\\{2; 0; 2; 1\\}$",
          "$\\{2; 2; 1\\}$",
          "$\\{0; 2\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Số $2021$ được cấu tạo từ các chữ số $2, 0, 1$. Trong tập hợp mỗi phần tử chỉ liệt kê một lần: $\\{0; 1; 2\\}$."
      },
      {
        "id": "quiz-2.8",
        "badge": "Câu 4 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Số tự nhiên lớn nhất có ba chữ số khác nhau là:",
        "options": [
          "$987$",
          "$999$",
          "$988$",
          "$989$"
        ],
        "correctIndex": 0,
        "explanation": "Để số lớn nhất thì chữ số hàng trăm phải là lớn nhất ($9$), chữ số hàng chục lớn nhất tiếp theo khác 9 là $8$, chữ số hàng đơn vị lớn nhất khác 9 và 8 là $7$. Vậy số đó là $987$."
      },
      {
        "id": "quiz-2.9",
        "badge": "Câu 15 - TN6 CI Bài 2 & SH6-CĐ 1.2",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Dùng ba chữ số $0; 6; 8$ để viết số tự nhiên, hỏi có bao nhiêu số tự nhiên có ba chữ số mà các chữ số khác nhau?",
        "options": [
          "$4$ số",
          "$2$ số",
          "$3$ số",
          "$5$ số"
        ],
        "correctIndex": 0,
        "explanation": "Chữ số hàng trăm phải khác 0 nên có 2 cách chọn ($6$ hoặc $8$). Các số viết được là: $608; 680; 806; 860$. Vậy có tất cả $4$ số."
      },
      {
        "id": "quiz-2.10",
        "badge": "Câu 17 - TN6 CI Bài 2 (Mức độ Vận dụng)",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Nếu thêm chữ số $5$ vào sau một số tự nhiên có ba chữ số thì được số tự nhiên mới như thế nào so với số cũ?",
        "options": [
          "Tăng gấp $10$ lần và thêm $5$ đơn vị so với số tự nhiên cũ",
          "Tăng $5$ đơn vị so với số tự nhiên cũ",
          "Tăng gấp $10$ lần so với số tự nhiên cũ",
          "Giảm $10$ lần và thêm $5$ đơn vị so với số tự nhiên cũ"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số cũ là $\\overline{abc}$. Khi thêm chữ số $5$ vào bên phải ta được số mới là $\\overline{abc5} = \\overline{abc} \\times 10 + 5$. Do đó số mới tăng gấp $10$ lần và thêm $5$ đơn vị so với số cũ."
      }
    ]
  },
  "t6-b3-thu-tu-so-tu-nhien": {
    "id": "t6-b3-thu-tu-so-tu-nhien",
    "lessonNumber": 3,
    "title": "Bài 3: Thứ tự trong tập hợp các số tự nhiên",
    "bookChapter": "Chương I: Tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: So sánh độ cao và dân số",
    "scenarioFrames": [],
    "theorySections": [
      {
        "index": "1",
        "title": "So sánh hai số tự nhiên & Vị trí trên tia số",
        "points": [
          "Trong hai số tự nhiên khác nhau, luôn có một số nhỏ hơn số còn lại. Khi số $a$ nhỏ hơn số $b$, ta viết $a < b$ hoặc $b > a$.",
          "Trên tia số nằm ngang có chiều từ trái sang phải: nếu $a < b$ thì điểm $a$ nằm ở bên trái điểm $b$.",
          "Ký hiệu $a \\le b$ để chỉ $a < b$ hoặc $a = b$. Ký hiệu $a \\ge b$ để chỉ $a > b$ hoặc $a = b$."
        ],
        "exampleTitle": "Ví dụ 1 (SBT & SGK Trang 13)",
        "exampleProblem": "So sánh hai số $28\\ 091$ và $28\\ 100$. Trên tia số nằm ngang, điểm nào nằm bên trái điểm nào?",
        "exampleSolution": "Vì $28\\ 091 < 28\\ 100$ nên trên tia số, điểm $28\\ 091$ nằm ở bên trái điểm $28\\ 100$."
      },
      {
        "index": "2",
        "title": "Tính chất bắc cầu",
        "points": [
          "Nếu $a < b$ và $b < c$ thì $a < c$."
        ],
        "exampleTitle": "Ví dụ 2 (SBT & SGK Trang 14)",
        "exampleProblem": "Cho số tự nhiên $m$ thỏa mãn $m < 15$ và $15 < n$. So sánh $m$ và $n$.",
        "exampleSolution": "Theo tính chất bắc cầu: vì $m < 15$ và $15 < n$ nên ta có $m < n$."
      },
      {
        "index": "3",
        "title": "Số liền trước, số liền sau & Cặp số tự nhiên liên tiếp",
        "points": [
          "Mỗi số tự nhiên $a$ có đúng một số liền sau là $a + 1$.",
          "Mỗi số tự nhiên $a$ khác 0 có đúng một số liền trước là $a - 1$. Số 0 không có số liền trước.",
          "Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị.",
          "Ba số tự nhiên liên tiếp tăng dần có dạng: $a;\\ a + 1;\\ a + 2$ (với $a \\in \\mathbb{N}$)."
        ],
        "exampleTitle": "Ví dụ 3 (SBT Chuyên đề 1.3)",
        "exampleProblem": "a) Viết số liền sau của số 48 và số liền trước của số 78.\nb) Viết ba số tự nhiên liên tiếp giảm dần bắt đầu từ $m + 2$ (với $m \\in \\mathbb{N}$).",
        "exampleSolution": "a) Số liền sau của 48 là 49. Số liền trước của 78 là 77.\nb) Ba số tự nhiên liên tiếp giảm dần là: $m + 2;\\ m + 1;\\ m$."
      },
      {
        "index": "4",
        "title": "Số tự nhiên nhỏ nhất & Tập hợp số tự nhiên",
        "points": [
          "Số 0 là số tự nhiên nhỏ nhất ($0 \\le a$ với mọi $a \\in \\mathbb{N}$).",
          "Không có số tự nhiên lớn nhất (tập hợp $\\mathbb{N}$ có vô số phần tử)."
        ],
        "exampleTitle": "Ví dụ 4 (SBT Chuyên đề 1.3 & SGK Trang 14)",
        "exampleProblem": "Viết tập hợp $M$ các số tự nhiên biểu diễn trên đoạn thẳng từ 6 đến 10 trên tia số bằng cách nêu tính chất đặc trưng.",
        "exampleSolution": "Tập hợp các số tự nhiên nằm trên đoạn từ 6 đến 10 (tính cả hai đầu mút 6 và 10) được viết là: $M = \\{x \\in \\mathbb{N} \\mid 6 \\le x \\le 10\\}$."
      }
    ],
    "tips": [],
    "traps": [],
    "quizQuestions": [
      {
        "id": "quiz-3.1",
        "badge": "Câu 1 - TN6 CI Bài 3 & SGK Trang 13",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 13",
        "question": "Chọn phát biểu ĐÚNG trong các phát biểu sau. Cho hai số tự nhiên $a$ và $b$, nếu $a < b$ thì:",
        "options": [
          "Điểm $a$ nằm bên trái điểm $b$ trên tia số nằm ngang",
          "Điểm $a$ nằm bên phải điểm $b$ trên tia số nằm ngang",
          "Điểm $a$ và điểm $b$ trùng nhau trên tia số nằm ngang",
          "Điểm $b$ nằm bên trái điểm $a$ trên tia số nằm ngang"
        ],
        "correctIndex": 0,
        "explanation": "Trên tia số nằm ngang có chiều mũi tên từ trái sang phải, nếu $a < b$ thì điểm $a$ nằm bên trái điểm $b$."
      },
      {
        "id": "quiz-3.2",
        "badge": "Câu 2 - TN6 CI Bài 3 & SH6-CĐ 1.3",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Điểm biểu diễn số tự nhiên nằm ngay bên trái điểm $4$ trên tia số là:",
        "options": [
          "Điểm $3$",
          "Điểm $5$",
          "Điểm $2$",
          "Điểm $0$"
        ],
        "correctIndex": 0,
        "explanation": "Số tự nhiên nằm ngay bên trái số 4 là số liền trước của 4: $4 - 1 = 3$. Do đó điểm nằm ngay bên trái điểm 4 là điểm 3."
      },
      {
        "id": "quiz-3.3",
        "badge": "Câu 1 Trắc nghiệm - SH6-CĐ 1.3 & SGK Trang 14",
        "source": "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Số tự nhiên liền trước số $7428$ là số nào?",
        "options": [
          "$7427$",
          "$7429$",
          "$7439$",
          "$7426$"
        ],
        "correctIndex": 0,
        "explanation": "Số tự nhiên liền trước của số $7428$ là: $7428 - 1 = 7427$."
      },
      {
        "id": "quiz-3.4",
        "badge": "Câu 10 - TN6 CI Bài 3 & SH6-CĐ 1.3",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Trong các cặp số dưới đây, cặp số nào KHÔNG phải là hai số tự nhiên liên tiếp?",
        "options": [
          "$6$ và $4$",
          "$9$ và $10$",
          "$100$ và $101$",
          "$49$ và $50$"
        ],
        "correctIndex": 0,
        "explanation": "Hai số tự nhiên liên tiếp hơn kém nhau đúng 1 đơn vị. Cặp $6$ và $4$ có hiệu $6 - 4 = 2$ nên không phải là hai số tự nhiên liên tiếp."
      },
      {
        "id": "quiz-3.5",
        "badge": "Câu 12 - TN6 CI Bài 3 & SGK Trang 14",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 14",
        "question": "Cho ba số tự nhiên $a, b, c$ thỏa mãn $a < b$ và $b < c$. Khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "$a < c$",
          "$c < a$",
          "$a = c$",
          "$a > c$"
        ],
        "correctIndex": 0,
        "explanation": "Theo tính chất bắc cầu của thứ tự trong tập hợp số tự nhiên: nếu $a < b$ và $b < c$ thì $a < c$."
      },
      {
        "id": "quiz-3.6",
        "badge": "Câu 5 - TN6 CI Bài 3 & SGK Trang 14",
        "source": "Chuyên đề Trắc nghiệm Toán 6 Ba Bộ Sách & SGK Toán 6 Tập 1 Trang 14",
        "question": "Trên tia số, hai điểm $A$ và $B$ lần lượt biểu diễn số $6$ và số $10$. Gọi $M$ là tập hợp các số tự nhiên biểu diễn trên đoạn thẳng $AB$. Tập hợp $M$ được viết là:",
        "options": [
          "$M = \\{x \\in \\mathbb{N} \\mid 6 \\le x \\le 10\\}$",
          "$M = \\{x \\in \\mathbb{N} \\mid 6 < x < 10\\}$",
          "$M = \\{x \\in \\mathbb{N} \\mid 6 \\le x < 10\\}$",
          "$M = \\{x \\in \\mathbb{N} \\mid 6 < x \\le 10\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Các điểm nằm trên đoạn thẳng $AB$ bao gồm cả hai đầu mút biểu diễn số 6 và số 10. Do đó $M = \\{x \\in \\mathbb{N} \\mid 6 \\le x \\le 10\\}$."
      },
      {
        "id": "quiz-3.7",
        "badge": "Câu 3 Trắc nghiệm - SH6-CĐ 1.3 & TN6 CI",
        "source": "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Có bao nhiêu số tự nhiên $x$ thỏa mãn điều kiện $748 < x < 760$?",
        "options": [
          "$11$ số",
          "$10$ số",
          "$12$ số",
          "$13$ số"
        ],
        "correctIndex": 0,
        "explanation": "Các số tự nhiên $x$ thỏa mãn $748 < x < 760$ gồm: $749, 750, \\dots, 759$. Số lượng các số là: $(759 - 749) + 1 = 11$ số."
      },
      {
        "id": "quiz-3.8",
        "badge": "Câu 4 Trắc nghiệm - SH6-CĐ 1.3 & TN6 CI",
        "source": "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Trong các dòng sau, dòng nào cho ta ba số tự nhiên liên tiếp giảm dần (với $m \\in \\mathbb{N}$)?",
        "options": [
          "$m + 2;\\ m + 1;\\ m$",
          "$m;\\ m + 1;\\ m + 2$",
          "$m - 1;\\ m;\\ m + 1$",
          "$m + 1;\\ m + 2;\\ m + 3$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $(m + 2) - (m + 1) = 1$ và $(m + 1) - m = 1$, các số giảm dần 1 đơn vị liên tiếp. Vậy dòng $m + 2;\\ m + 1;\\ m$ là ba số tự nhiên liên tiếp giảm dần."
      },
      {
        "id": "quiz-3.9",
        "badge": "Dạng 1 Bài 4 - SH6-CĐ 1.3",
        "source": "Chuyên đề Dạy Thêm Toán 6 KNTT SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Tìm ba số tự nhiên liên tiếp, biết rằng tổng của chúng bằng $24$:",
        "options": [
          "$7;\\ 8;\\ 9$",
          "$6;\\ 7;\\ 8$",
          "$8;\\ 9;\\ 10$",
          "$5;\\ 6;\\ 7$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi ba số tự nhiên liên tiếp là $n, n+1, n+2$. Ta có $n + (n+1) + (n+2) = 24 \\Rightarrow 3n + 3 = 24 \\Rightarrow 3n = 21 \\Rightarrow n = 7$. Ba số cần tìm là $7;\\ 8;\\ 9$."
      },
      {
        "id": "quiz-3.10",
        "badge": "Bài 1.15 - SGK Toán 6 Tập 1 Trang 15",
        "source": "SGK Toán 6 Tập 1 Trang 15 & SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Bảng độ cao (theo mét) của 4 đỉnh núi tại Việt Nam: Fansipan ($3\\ 143\\text{ m}$), Pu Si Lung ($3\\ 083\\text{ m}$), Bạch Mộc Lương Tử ($3\\ 046\\text{ m}$), Tây Côn Lĩnh ($2\\ 427\\text{ m}$). Sắp xếp tên các đỉnh núi theo thứ tự độ cao GIẢM DẦN:",
        "options": [
          "Fansipan > Pu Si Lung > Bạch Mộc Lương Tử > Tây Côn Lĩnh",
          "Fansipan > Bạch Mộc Lương Tử > Pu Si Lung > Tây Côn Lĩnh",
          "Pu Si Lung > Fansipan > Bạch Mộc Lương Tử > Tây Côn Lĩnh",
          "Tây Côn Lĩnh > Bạch Mộc Lương Tử > Pu Si Lung > Fansipan"
        ],
        "correctIndex": 0,
        "explanation": "So sánh độ cao các đỉnh núi: $3\\ 143 > 3\\ 083 > 3\\ 046 > 2\\ 427$. Vậy thứ tự giảm dần là: Fansipan > Pu Si Lung > Bạch Mộc Lương Tử > Tây Côn Lĩnh."
      }
    ]
  },
  "t6-b4-phep-cong-tru-so-tu-nhien": {
    "id": "t6-b4-phep-cong-tru-so-tu-nhien",
    "lessonNumber": 4,
    "title": "Bài 4: Phép cộng và phép trừ số tự nhiên",
    "bookChapter": "Chương I: Tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Tính tổng chi phí mua sắm",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Kết hợp các số có tổng tròn chục, tròn trăm."
    ],
    "traps": [
      "a - b trong ℕ chỉ thực hiện được khi a ≥ b."
    ],
    "quizQuestions": [
      {
        "id": "quiz-4.1",
        "badge": "Bài 1.16 - SGK Toán 6 Tập 1, trang 19",
        "source": "SGK Toán 6 Tập 1, Trang 19 & TN6 CI Bài 4 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Tính nhanh tổng sau bằng cách kết hợp hợp lí: $48 + 235 + 52$:",
        "options": [
          "$335$",
          "$345$",
          "$325$",
          "$355$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng tính chất giao hoán và kết hợp: $(48 + 52) + 235 = 100 + 235 = 335$."
      },
      {
        "id": "quiz-4.2",
        "badge": "Bài 1.17 - SGK Toán 6 Tập 1, trang 19",
        "source": "SGK Toán 6 Tập 1, Trang 19 & TN6 CI Bài 4 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Cho hai số tự nhiên $a$ và $b$. Điều kiện trong tập hợp số tự nhiên để phép trừ $a - b$ thực hiện được là:",
        "options": [
          "$a \\ge b$",
          "$a > b$",
          "$a \\le b$",
          "$a < b$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tập hợp số tự nhiên $\\mathbb{N}$, phép trừ $a - b$ chỉ thực hiện được khi số bị trừ lớn hơn hoặc bằng số trừ: $a \\ge b$."
      },
      {
        "id": "quiz-4.3",
        "badge": "Bài 1.18 - SGK Toán 6 Tập 1, trang 19",
        "source": "SH6-CĐ 1.4 - Phép Cộng Và Trừ Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Tìm số tự nhiên $x$, biết: $x + 257 = 982$. Giá trị của $x$ là:",
        "options": [
          "$725$",
          "$735$",
          "$715$",
          "$745$"
        ],
        "correctIndex": 0,
        "explanation": "$x = 982 - 257 = 725$."
      },
      {
        "id": "quiz-4.4",
        "badge": "Bài 1.19 - SGK Toán 6 Tập 1, trang 19",
        "source": "SH6-CĐ 1.4 - Phép Cộng Và Trừ Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Tổng của số tự nhiên nhỏ nhất có 3 chữ số khác nhau và số tự nhiên lớn nhất có 3 chữ số khác nhau là:",
        "options": [
          "$1\\ 089$",
          "$1\\ 099$",
          "$1\\ 087$",
          "$1\\ 079$"
        ],
        "correctIndex": 0,
        "explanation": "Số tự nhiên nhỏ nhất có 3 chữ số khác nhau là 102. Số tự nhiên lớn nhất có 3 chữ số khác nhau là 987. Tổng là: $102 + 987 = 1\\ 089$."
      },
      {
        "id": "quiz-4.5",
        "badge": "Bài 1.20 - SGK Toán 6 Tập 1, trang 19",
        "source": "TN6 CI Bài 4 - Phép Cộng Trừ (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Một phép trừ có tổng của số bị trừ, số trừ và hiệu bằng $2\\ 020$. Số trừ lớn hơn hiệu là $48$. Tìm số bị trừ và số trừ:",
        "options": [
          "Số bị trừ là $1\\ 010$, số trừ là $529$",
          "Số bị trừ là $1\\ 010$, số trừ là $481$",
          "Số bị trừ là $1\\ 020$, số trừ là $529$",
          "Số bị trừ là $1\\ 000$, số trừ là $500$"
        ],
        "correctIndex": 0,
        "explanation": "Số bị trừ + Số trừ + Hiệu = 2 020. Vì Số trừ + Hiệu = Số bị trừ nên 2 lần Số bị trừ = 2 020 $\\Rightarrow$ Số bị trừ = $1\\ 010$. Lại có Số trừ + Hiệu = $1\\ 010$ và Số trừ - Hiệu = $48$ nên Số trừ = $(1\\ 010 + 48) : 2 = 529$."
      }
    ]
  },
  "t6-b5-phep-nhan-chia-so-tu-nhien": {
    "id": "t6-b5-phep-nhan-chia-so-tu-nhien",
    "lessonNumber": 5,
    "title": "Bài 5: Phép nhân và phép chia số tự nhiên",
    "bookChapter": "Chương I: Tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Chia phòng thi và đóng gói sản phẩm",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "a(b + c) = ab + ac và a(b - c) = ab - ac."
    ],
    "traps": [
      "Trong phép chia có dư a = b · q + r thì 0 ≤ r < b."
    ],
    "quizQuestions": [
      {
        "id": "quiz-5.1",
        "badge": "Bài 1.21 - SGK Toán 6 Tập 1, trang 22",
        "source": "SGK Toán 6 Tập 1, Trang 22 & TN6 CI Bài 5 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Tính nhanh biểu thức bằng cách áp dụng tính chất phân phối: $25 \\times 37 + 25 \\times 63$:",
        "options": [
          "$2\\ 500$",
          "$2\\ 600$",
          "$2\\ 400$",
          "$2\\ 550$"
        ],
        "correctIndex": 0,
        "explanation": "Đặt thừa số chung 25: $25 \\times (37 + 63) = 25 \\times 100 = 2\\ 500$."
      },
      {
        "id": "quiz-5.2",
        "badge": "Bài 1.22 - SGK Toán 6 Tập 1, trang 22",
        "source": "SGK Toán 6 Tập 1, Trang 22 & TN6 CI Bài 5 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Thương và số dư trong phép chia $157$ cho $12$ là:",
        "options": [
          "Thương bằng 13, số dư bằng 1",
          "Thương bằng 12, số dư bằng 13",
          "Thương bằng 13, số dư bằng 2",
          "Thương bằng 14, số dư bằng 1"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $157 = 12 \\times 13 + 1$ (với $1 < 12$). Vậy thương là 13, số dư là 1."
      },
      {
        "id": "quiz-5.3",
        "badge": "Bài 1.23 - SGK Toán 6 Tập 1, trang 22",
        "source": "SH6-CĐ 1.5 - Phép Nhân Chia Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Một phép chia có thương là 12, số dư là 5. Biết số bị chia là 101, số chia của phép chia đó là:",
        "options": [
          "8",
          "9",
          "7",
          "6"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số chia là $b$. Ta có $101 = b \\times 12 + 5 \\Rightarrow b \\times 12 = 101 - 5 = 96 \\Rightarrow b = 96 : 12 = 8$."
      },
      {
        "id": "quiz-5.4",
        "badge": "Bài 1.24 - SGK Toán 6 Tập 1, trang 23",
        "source": "TN6 CI Bài 5 - Phép Nhân Chia (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Một quyển vở 200 trang có giá 9 nghìn đồng. Với số tiền 100 nghìn đồng, bạn Huyền mua được nhiều nhất bao nhiêu quyển vở và còn thừa bao nhiêu tiền?",
        "options": [
          "Mua được 11 quyển và còn thừa 1 nghìn đồng",
          "Mua được 12 quyển và còn thừa 2 nghìn đồng",
          "Mua được 10 quyển và còn thừa 10 nghìn đồng",
          "Mua được 11 quyển và không thừa tiền"
        ],
        "correctIndex": 0,
        "explanation": "Thực hiện phép chia: $100 : 9 = 11$ (dư 1). Vậy bạn Huyền mua được nhiều nhất 11 quyển vở và còn thừa 1 nghìn đồng."
      },
      {
        "id": "quiz-5.5",
        "badge": "Bài 1.25 - SGK Toán 6 Tập 1, trang 23",
        "source": "TN6 CI Bài 5 & SGK Toán 6 KNTT Trang 23 (Thư mục Anti/Tài Liệu Lớp 6)",
        "question": "Một đoàn tàu hỏa cần chở 892 hành khách. Biết mỗi toa tàu có 10 khoang, mỗi khoang có 8 chỗ ngồi. Hỏi đoàn tàu cần ít nhất bao nhiêu toa để chở hết số khách đó?",
        "options": [
          "12 toa",
          "11 toa",
          "13 toa",
          "10 toa"
        ],
        "correctIndex": 0,
        "explanation": "Mỗi toa có: $10 \\times 8 = 80$ chỗ ngồi. Thực hiện phép chia: $892 : 80 = 11$ (dư 12). Vì còn dư 12 hành khách nên cần thêm 1 toa nữa. Vậy cần ít nhất $11 + 1 = 12$ toa."
      }
    ]
  },
  "t6-b6-luy-thua-so-mu-tu-nhien": {
    "id": "t6-b6-luy-thua-so-mu-tu-nhien",
    "lessonNumber": 6,
    "title": "Bài 6: Lũy thừa với số mũ tự nhiên",
    "bookChapter": "Chương I: Tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Tế bào phân chia theo cấp số nhân",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "aᵐ · aⁿ = aᵐ⁺ⁿ và aᵐ : aⁿ = aᵐ⁻ⁿ."
    ],
    "traps": [
      "a⁰ = 1 (với a ≠ 0). 2³ = 8 (không phải 6)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-6.1",
        "badge": "Câu 1",
        "question": "Viết các tích sau dưới dạng một lũy thừa: 9 · 9 · 9 · 9 · 9 và a · a · a · a · a · a:",
        "options": [
          "9⁵ và a⁶",
          "9 · 5 và 6a",
          "5⁹ và a⁶",
          "9⁵ và a⁵"
        ],
        "correctIndex": 0,
        "explanation": "9 · 9 · 9 · 9 · 9 = 9⁵ và a · a · a · a · a · a = a⁶."
      },
      {
        "id": "sgk-6.2",
        "badge": "Câu 2",
        "question": "Cho lũy thừa 4³. Xác định cơ số, số mũ và tính giá trị của lũy thừa đó:",
        "options": [
          "Cơ số là 4, số mũ là 3, giá trị là 64",
          "Cơ số là 3, số mũ là 4, giá trị là 64",
          "Cơ số là 4, số mũ là 3, giá trị là 12",
          "Cơ số là 3, số mũ là 4, giá trị là 81"
        ],
        "correctIndex": 0,
        "explanation": "Cơ số 4, số mũ 3. Giá trị = 4 × 4 × 4 = 64."
      },
      {
        "id": "sgk-6.3",
        "badge": "Câu 3",
        "question": "Tính giá trị của các lũy thừa sau: 2⁵ và 3³:",
        "options": [
          "2⁵ = 32 và 3³ = 27",
          "2⁵ = 10 và 3³ = 9",
          "2⁵ = 64 và 3³ = 27",
          "2⁵ = 32 và 3³ = 81"
        ],
        "correctIndex": 0,
        "explanation": "2⁵ = 32 và 3³ = 27."
      },
      {
        "id": "sgk-6.4",
        "badge": "Câu 4",
        "question": "Viết số 215 và 2 020 thành tổng giá trị các chữ số bằng các lũy thừa của 10:",
        "options": [
          "215 = 2 · 10² + 1 · 10¹ + 5 · 10⁰ và 2 020 = 2 · 10³ + 2 · 10¹",
          "215 = 2 · 10³ + 1 · 10² + 5 · 10¹ và 2 020 = 2 · 10² + 2 · 10¹",
          "215 = 21 · 10¹ + 5 và 2 020 = 20 · 10²",
          "215 = 2 · 10² + 15 và 2 020 = 2 · 10³ + 20"
        ],
        "correctIndex": 0,
        "explanation": "215 = 2 · 10² + 1 · 10¹ + 5 · 10⁰ và 2 020 = 2 · 10³ + 2 · 10¹."
      },
      {
        "id": "sgk-6.5",
        "badge": "Câu 5",
        "question": "Biết 11² = 121 và 111² = 12 321. Hãy dự đoán kết quả của 1 111²:",
        "options": [
          "1 234 321",
          "123 421",
          "1 234 543 21",
          "11 112"
        ],
        "correctIndex": 0,
        "explanation": "1 111² = 1 234 321."
      },
      {
        "id": "sgk-6.6",
        "badge": "Câu 6",
        "question": "Biết 2¹⁰ = 1 024. Hãy tính giá trị của 2⁹ và 2¹¹:",
        "options": [
          "2⁹ = 512 và 2¹¹ = 2 048",
          "2⁹ = 1 023 và 2¹¹ = 1 025",
          "2⁹ = 512 và 2¹¹ = 1 024",
          "2⁹ = 2 048 và 2¹¹ = 512"
        ],
        "correctIndex": 0,
        "explanation": "2⁹ = 1 024 : 2 = 512. 2¹¹ = 1 024 · 2 = 2 048."
      },
      {
        "id": "sgk-6.7",
        "badge": "Câu 7",
        "question": "Tính kết quả phép tính: 5⁷ · 5⁵ = ? và 2¹⁰ : 64 · 16 = ?",
        "options": [
          "5¹² và 256 (vì 5⁷⁺⁵ = 5¹²; 2¹⁰ : 2⁶ · 2⁴ = 2⁸ = 256)",
          "5³⁵ và 256",
          "5¹² và 64",
          "25¹² và 128"
        ],
        "correctIndex": 0,
        "explanation": "5⁷ · 5⁵ = 5¹² và 2¹⁰ : 2⁶ · 2⁴ = 2⁸ = 256."
      },
      {
        "id": "sgk-6.8",
        "badge": "Câu 8",
        "question": "Ta có 1 + 3 + 5 = 9 = 3². Viết tổng 1 + 3 + 5 + 7 + 9 dưới dạng bình phương của một số tự nhiên:",
        "options": [
          "5² (vì tổng bằng 25 = 5²)",
          "4²",
          "6²",
          "9²"
        ],
        "correctIndex": 0,
        "explanation": "1 + 3 + 5 + 7 + 9 = 25 = 5²."
      },
      {
        "id": "sgk-6.9",
        "badge": "Câu 9",
        "question": "Trái Đất cách Mặt Trời khoảng 150 000 000 km. Viết khoảng cách này dưới dạng tích của một số với một lũy thừa của 10:",
        "options": [
          "15 · 10⁷ km (hoặc 150 · 10⁶ km)",
          "15 · 10⁶ km",
          "15 · 10⁸ km",
          "150 · 10⁵ km"
        ],
        "correctIndex": 0,
        "explanation": "150 000 000 = 15 · 10⁷ km."
      }
    ]
  },
  "t6-b7-thu-tu-thuc-hien-phep-tinh": {
    "id": "t6-b7-thu-tu-thuc-hien-phep-tinh",
    "lessonNumber": 7,
    "title": "Bài 7: Thứ tự thực hiện các phép tính",
    "bookChapter": "Chương I: Tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Tính toán hóa đơn nhiều mức giá",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Thứ tự: Lũy thừa → Nhân & Chia → Cộng & Trừ."
    ],
    "traps": [
      "Thứ tự ngoặc: ( ) → [ ] → { }."
    ],
    "quizQuestions": [
      {
        "id": "sgk-7.1",
        "badge": "Câu 1",
        "question": "Tính giá trị biểu thức: 14 + 2 · 8² = ?",
        "options": [
          "142 (vì 14 + 2 · 64 = 14 + 128 = 142)",
          "1 024",
          "256",
          "138"
        ],
        "correctIndex": 0,
        "explanation": "14 + 2 · 64 = 14 + 128 = 142."
      },
      {
        "id": "sgk-7.2",
        "badge": "Câu 2",
        "question": "Tính giá trị biểu thức 1 + 2(a + b) - 4³ khi a = 25, b = 9:",
        "options": [
          "5 (vì 1 + 2 · 34 - 64 = 1 + 68 - 64 = 5)",
          "69",
          "59",
          "15"
        ],
        "correctIndex": 0,
        "explanation": "1 + 2 · 34 - 64 = 5."
      },
      {
        "id": "sgk-7.3",
        "badge": "Câu 3",
        "question": "Tính nhẩm nhanh biểu thức 99 + 142 bằng cách thêm bớt hợp lý:",
        "options": [
          "241 (vì (99 + 1) + (142 - 1) = 100 + 141 = 241)",
          "231",
          "251",
          "240"
        ],
        "correctIndex": 0,
        "explanation": "(99 + 1) + (142 - 1) = 241."
      },
      {
        "id": "sgk-7.4",
        "badge": "Câu 4",
        "question": "Tính giá trị biểu thức: {2³ + [1 + (3 - 1)²]} : 13 = ?",
        "options": [
          "1 (vì {8 + [1 + 4]} : 13 = 13 : 13 = 1)",
          "2",
          "0",
          "13"
        ],
        "correctIndex": 0,
        "explanation": "{8 + [1 + 4]} : 13 = 13 : 13 = 1."
      }
    ]
  },
  "t6-b8-quan-he-chia-het": {
    "id": "t6-b8-quan-he-chia-het",
    "lessonNumber": 8,
    "title": "Bài 8: Quan hệ chia hết và tính chất",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Chia đều phần thưởng",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "a ⋮ m và b ⋮ m ⇒ (a + b) ⋮ m."
    ],
    "traps": [
      "0 là bội của mọi số tự nhiên khác 0."
    ],
    "quizQuestions": [
      {
        "id": "sgk-8.1",
        "badge": "Câu 1",
        "question": "Tìm tất cả các ước của số 30:",
        "options": [
          "{1; 2; 3; 5; 6; 10; 15; 30}",
          "{2; 3; 5; 6; 10; 15; 30}",
          "{1; 2; 3; 5; 10; 30}",
          "{0; 1; 2; 3; 5; 6; 10; 15; 30}"
        ],
        "correctIndex": 0,
        "explanation": "Ư(30) = {1; 2; 3; 5; 6; 10; 15; 30}."
      },
      {
        "id": "sgk-8.2",
        "badge": "Câu 2",
        "question": "Trong các số {6; 15; 24; 32; 42}, những số nào là bội của 6?",
        "options": [
          "6; 24; 42",
          "15; 32",
          "6; 15; 24",
          "Tất cả các số"
        ],
        "correctIndex": 0,
        "explanation": "6; 24; 42 chia hết cho 6."
      },
      {
        "id": "sgk-8.3",
        "badge": "Câu 3",
        "question": "Tìm các số tự nhiên x sao cho x ∈ B(7) và x < 35:",
        "options": [
          "{0; 7; 14; 21; 28}",
          "{7; 14; 21; 28; 35}",
          "{0; 7; 14; 21; 28; 35}",
          "{7; 14; 21; 28}"
        ],
        "correctIndex": 0,
        "explanation": "x ∈ {0; 7; 14; 21; 28}."
      },
      {
        "id": "sgk-8.4",
        "badge": "Câu 4",
        "question": "Không tính giá trị, tổng A = 1 200 + 440 có chia hết cho 4 không?",
        "options": [
          "A chia hết cho 4 vì cả 1 200 và 440 đều chia hết cho 4",
          "A không chia hết cho 4",
          "Chỉ có 1 200 chia hết cho 4",
          "Không xác định được"
        ],
        "correctIndex": 0,
        "explanation": "1 200 ⋮ 4 và 440 ⋮ 4 nên A ⋮ 4."
      },
      {
        "id": "sgk-8.5",
        "badge": "Câu 5",
        "question": "Không tính giá trị, tổng B = 80 + 1 945 có chia hết cho 5 không?",
        "options": [
          "B chia hết cho 5 vì cả 80 và 1 945 đều chia hết cho 5",
          "B không chia hết cho 5",
          "Chỉ 80 chia hết cho 5",
          "Không chia hết"
        ],
        "correctIndex": 0,
        "explanation": "80 ⋮ 5 và 1 945 ⋮ 5 nên B ⋮ 5."
      },
      {
        "id": "sgk-8.6",
        "badge": "Câu 6",
        "question": "Một lớp có 45 học sinh. Giáo viên muốn chia lớp thành các tổ có số học sinh bằng nhau (từ 2 tổ trở lên). Số tổ có thể chia là:",
        "options": [
          "3; 5; 9; 15 tổ",
          "2; 4; 6 tổ",
          "Chỉ chia được 2 tổ",
          "10 tổ"
        ],
        "correctIndex": 0,
        "explanation": "Số tổ là ước của 45: 3; 5; 9; 15."
      }
    ]
  },
  "t6-b9-dau-hieu-chia-het-2-5": {
    "id": "t6-b9-dau-hieu-chia-het-2-5",
    "lessonNumber": 9,
    "title": "Bài 9: Dấu hiệu chia hết cho 2, cho 5",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Kiểm tra vé số trúng thưởng",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Số chia hết cho 2 tận cùng là 0, 2, 4, 6, 8. Cho 5 tận cùng là 0, 5."
    ],
    "traps": [
      "Số tận cùng là 0 thì vừa chia hết cho 2 vừa chia hết cho 5."
    ],
    "quizQuestions": [
      {
        "id": "sgk-9.1",
        "badge": "Câu 1",
        "question": "Trong các số sau: 324; 248; 2 020; 2 025, nhóm số nào chia hết cho 2 và nhóm số nào chia hết cho 5?",
        "options": [
          "Chia hết cho 2: {324; 248; 2 020}; Chia hết cho 5: {2 020; 2 025}",
          "Chia hết cho 2: {324; 248}; Chia hết cho 5: {2 025}",
          "Chia hết cho 2: {2 020; 2 025}; Chia hết cho 5: {324; 248}",
          "Tất cả các số đều chia hết cho cả 2 và 5"
        ],
        "correctIndex": 0,
        "explanation": "Tận cùng chẵn (0, 4, 8) chia hết cho 2; tận cùng 0, 5 chia hết cho 5."
      },
      {
        "id": "sgk-9.2",
        "badge": "Câu 2",
        "question": "Xét tính chia hết của các số tự nhiên: Cặp số nào sau đây vừa chia hết cho 2, vừa chia hết cho 5?",
        "options": [
          "50 và 120 (các số có chữ số tận cùng bằng 0)",
          "24 và 35",
          "15 và 45",
          "12 và 18"
        ],
        "correctIndex": 0,
        "explanation": "Tận cùng là 0 thì vừa chia hết cho 2 vừa chia hết cho 5."
      },
      {
        "id": "sgk-9.3",
        "badge": "Câu 3",
        "question": "Không thực hiện phép tính, tổng A = 146 + 550 chia hết cho những số nào trong hai số 2 và 5?",
        "options": [
          "A chia hết cho 2 nhưng không chia hết cho 5 (vì 146 và 550 đều ⋮ 2, nhưng 146 không ⋮ 5)",
          "A chia hết cho cả 2 và 5",
          "A chia hết cho 5 nhưng không chia hết cho 2",
          "A không chia hết cho cả 2 và 5"
        ],
        "correctIndex": 0,
        "explanation": "146 và 550 chẵn nên A ⋮ 2. Do 146 không chia hết cho 5 nên A không chia hết cho 5."
      },
      {
        "id": "sgk-9.4",
        "badge": "Câu 4",
        "question": "Lớp 6A có 42 học sinh, lớp 6B có 45 học sinh, lớp 6C có 48 học sinh. Lớp nào có thể xếp thành 2 hàng đều nhau, và lớp nào xếp được thành 5 hàng đều nhau?",
        "options": [
          "Xếp 2 hàng đều: Lớp 6A và 6C; Xếp 5 hàng đều: Lớp 6B",
          "Xếp 2 hàng đều: Lớp 6B; Xếp 5 hàng đều: Lớp 6A và 6C",
          "Cả 3 lớp đều xếp được 2 hàng",
          "Chỉ có lớp 6A xếp được 5 hàng"
        ],
        "correctIndex": 0,
        "explanation": "42 và 48 chia hết cho 2 (Lớp 6A, 6C); 45 chia hết cho 5 (Lớp 6B)."
      }
    ]
  },
  "t6-b10-dau-hieu-chia-het-3-9": {
    "id": "t6-b10-dau-hieu-chia-het-3-9",
    "lessonNumber": 10,
    "title": "Bài 10: Dấu hiệu chia hết cho 3, cho 9",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Chia nhóm học tập đều",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Số chia hết cho 3 có tổng các chữ số chia hết cho 3. Cho 9 có tổng chia hết cho 9."
    ],
    "traps": [
      "Chia hết cho 9 thì chắc chắn chia hết cho 3, nhưng ngược lại thì chưa chắc."
    ],
    "quizQuestions": [
      {
        "id": "sgk-10.1",
        "badge": "Câu 1",
        "question": "Trong các số {450; 123; 2 019; 2 025}, số nào chia hết cho 9?",
        "options": [
          "450 và 2 025 (vì tổng các chữ số bằng 9)",
          "123 và 2 019",
          "Chỉ có 450",
          "Tất cả các số"
        ],
        "correctIndex": 0,
        "explanation": "450 (4+5+0=9) và 2 025 (2+0+2+5=9) chia hết cho 9."
      },
      {
        "id": "sgk-10.2",
        "badge": "Câu 2",
        "question": "Trong các số {90; 630; 7 125; 8 136}, số nào chia hết cho 3 nhưng KHÔNG chia hết cho 9?",
        "options": [
          "7 125 (vì tổng bằng 15 chia hết cho 3, không chia hết cho 9)",
          "90",
          "630",
          "8 136"
        ],
        "correctIndex": 0,
        "explanation": "7 125 có tổng các chữ số là 15 (chia hết cho 3, không chia hết cho 9)."
      },
      {
        "id": "sgk-10.3",
        "badge": "Câu 3",
        "question": "Không tính giá trị, tổng A = 1 230 + 72 có chia hết cho 3 không?",
        "options": [
          "A chia hết cho 3 vì 1 230 ⋮ 3 và 72 ⋮ 3",
          "A không chia hết cho 3",
          "Chỉ có 1 230 chia hết cho 3",
          "Không xác định được"
        ],
        "correctIndex": 0,
        "explanation": "1 230 ⋮ 3, 72 ⋮ 3 ⇒ A ⋮ 3."
      },
      {
        "id": "sgk-10.4",
        "badge": "Câu 4",
        "question": "Thay dấu * bởi chữ số thích hợp để số 12*5 chia hết cho 3:",
        "options": [
          "* ∈ {1; 4; 7}",
          "* ∈ {0; 3; 6; 9}",
          "* ∈ {2; 5; 8}",
          "* = 1"
        ],
        "correctIndex": 0,
        "explanation": "1 + 2 + * + 5 = 8 + *. Để 8 + * ⋮ 3 thì * ∈ {1; 4; 7}."
      },
      {
        "id": "sgk-10.5",
        "badge": "Câu 5",
        "question": "Dùng ba trong bốn chữ số 4; 5; 3; 0 hãy ghép thành số tự nhiên có ba chữ số chia hết cho 9:",
        "options": [
          "450; 540; 405; 504",
          "435; 534",
          "340; 430",
          "453; 543"
        ],
        "correctIndex": 0,
        "explanation": "Chọn 4, 5, 0 có tổng bằng 9. Ghép được: 450; 540; 405; 504."
      },
      {
        "id": "sgk-10.6",
        "badge": "Câu 6",
        "question": "Mật mã mở khóa là số có 4 chữ số chia hết cho cả 2; 5 và 9. Số nào sau đây có thể là mật mã?",
        "options": [
          "1 350 (tận cùng 0 và tổng 1+3+5+0 = 9)",
          "1 355",
          "1 354",
          "1 300"
        ],
        "correctIndex": 0,
        "explanation": "1 350 thỏa mãn chia hết cho 2, 5 và 9."
      }
    ]
  },
  "t6-b11-so-nguyen-to": {
    "id": "t6-b11-so-nguyen-to",
    "lessonNumber": 11,
    "title": "Bài 11: Số nguyên tố",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Bảo mật thông tin bằng số nguyên tố",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Số 2 là số nguyên tố chẵn duy nhất và là số nguyên tố nhỏ nhất."
    ],
    "traps": [
      "Số 0 và số 1 không phải là số nguyên tố, cũng không phải là hợp số."
    ],
    "quizQuestions": [
      {
        "id": "sgk-11.1",
        "badge": "Câu 1",
        "question": "Phân tích số 70 ra thừa số nguyên tố:",
        "options": [
          "70 = 2 · 5 · 7",
          "70 = 7 · 10",
          "70 = 2 · 35",
          "70 = 1 · 70"
        ],
        "correctIndex": 0,
        "explanation": "70 = 2 × 5 × 7 (các thừa số đều là số nguyên tố)."
      },
      {
        "id": "sgk-11.2",
        "badge": "Câu 2",
        "question": "Tìm tất cả các ước nguyên tố của số 30:",
        "options": [
          "{2; 3; 5}",
          "{1; 2; 3; 5}",
          "{2; 3; 5; 6}",
          "{3; 5}"
        ],
        "correctIndex": 0,
        "explanation": "30 = 2 · 3 · 5 nên các ước nguyên tố của 30 là 2, 3, 5."
      },
      {
        "id": "sgk-11.3",
        "badge": "Câu 3",
        "question": "Khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "Số 2 là số nguyên tố chẵn duy nhất",
          "Ước nguyên tố của 30 là 5 và 6",
          "Tích của hai số nguyên tố bất kì luôn là số lẻ",
          "Mọi số nguyên tố đều là số lẻ"
        ],
        "correctIndex": 0,
        "explanation": "Số 2 là số nguyên tố chẵn duy nhất (các số chẵn khác > 2 đều có ước là 2 nên là hợp số)."
      }
    ]
  },
  "t6-b12-uoc-chung-ucln": {
    "id": "t6-b12-uoc-chung-ucln",
    "lessonNumber": 12,
    "title": "Bài 12: Ước chung và ước chung lớn nhất",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Chia tổ học tập đồng đều nhất",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "ƯCLN của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của các số đó."
    ],
    "traps": [
      "ƯCLN(a, 1) = 1 với mọi số tự nhiên a."
    ],
    "quizQuestions": [
      {
        "id": "sgk-12.1",
        "badge": "Câu 1",
        "question": "Tìm ước chung lớn nhất của 40 và 70 (ƯCLN(40, 70)):",
        "options": [
          "10",
          "5",
          "2",
          "20"
        ],
        "correctIndex": 0,
        "explanation": "40 = 2³ · 5, 70 = 2 · 5 · 7. ƯCLN(40, 70) = 2 · 5 = 10."
      },
      {
        "id": "sgk-12.2",
        "badge": "Câu 2",
        "question": "Tìm ƯCLN của ba số 12, 80 và 56:",
        "options": [
          "4",
          "2",
          "8",
          "6"
        ],
        "correctIndex": 0,
        "explanation": "12 = 2² · 3, 80 = 2⁴ · 5, 56 = 2³ · 7. Thừa số nguyên tố chung với số mũ nhỏ nhất là 2² = 4."
      },
      {
        "id": "sgk-12.3",
        "badge": "Câu 3",
        "question": "Rút gọn phân số 24/108 về dạng tối giản bằng cách chia cho ƯCLN:",
        "options": [
          "2/9 (chia cả tử và mẫu cho ƯCLN = 12)",
          "4/18",
          "6/27",
          "8/36"
        ],
        "correctIndex": 0,
        "explanation": "ƯCLN(24, 108) = 12. Chia cả tử và mẫu cho 12: 24 : 12 = 2, 108 : 12 = 9 ⇒ 2/9."
      }
    ]
  },
  "t6-b13-boi-chung-bcnn": {
    "id": "t6-b13-boi-chung-bcnn",
    "lessonNumber": 13,
    "title": "Bài 13: Bội chung và bội chung nhỏ nhất",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Đèn nhấp nháy cùng lúc",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "BCNN là số nhỏ nhất khác 0 trong tập hợp các bội chung."
    ],
    "traps": [
      "BCNN(a, b, 1) = BCNN(a, b)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-13.1",
        "badge": "Câu 1",
        "question": "Tìm bội chung nhỏ nhất khác 0 của 6 và 14 (BCNN(6, 14)):",
        "options": [
          "42",
          "84",
          "28",
          "14"
        ],
        "correctIndex": 0,
        "explanation": "6 = 2 · 3, 14 = 2 · 7. BCNN(6, 14) = 2 · 3 · 7 = 42."
      },
      {
        "id": "sgk-13.2",
        "badge": "Câu 2",
        "question": "Tìm BCNN của ba số 18, 24 và 40:",
        "options": [
          "360",
          "720",
          "180",
          "120"
        ],
        "correctIndex": 0,
        "explanation": "18 = 2 · 3², 24 = 2³ · 3, 40 = 2³ · 5. BCNN = 2³ · 3² · 5 = 8 · 9 · 5 = 360."
      },
      {
        "id": "sgk-13.3",
        "badge": "Câu 3",
        "question": "Quy đồng mẫu hai phân số 5/12 và 7/15 với mẫu số chung nhỏ nhất là:",
        "options": [
          "60 (vì BCNN(12, 15) = 60)",
          "180",
          "120",
          "30"
        ],
        "correctIndex": 0,
        "explanation": "BCNN(12, 15) = 60. Mẫu chung nhỏ nhất là 60."
      }
    ]
  },
  "t6-b14-tap-hop-so-nguyen": {
    "id": "t6-b14-tap-hop-so-nguyen",
    "lessonNumber": 14,
    "title": "Bài 14: Tập hợp các số nguyên",
    "bookChapter": "Chương III: Số nguyên",
    "scenarioTitle": "Tình huống: Nhiệt độ dưới 0°C và độ sâu mực nước biển",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Tập hợp ℤ gồm số nguyên âm, số 0 và số nguyên dương."
    ],
    "traps": [
      "Số 0 không là số nguyên dương cũng không là số nguyên âm."
    ],
    "quizQuestions": [
      {
        "id": "sgk-14.1",
        "badge": "Câu 1",
        "question": "Biểu diễn độ cao 5 mét dưới mực nước biển bằng số nguyên:",
        "options": [
          "-5 m",
          "+5 m",
          "0 m",
          "50 m"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao dưới mực nước biển được quy ước biểu diễn bằng số nguyên âm: -5 m."
      },
      {
        "id": "sgk-14.2",
        "badge": "Câu 2",
        "question": "Số đối của số nguyên -4 là:",
        "options": [
          "4 (hay +4)",
          "-4",
          "0",
          "1/4"
        ],
        "correctIndex": 0,
        "explanation": "Số đối của -4 là 4."
      },
      {
        "id": "sgk-14.3",
        "badge": "Câu 3",
        "question": "So sánh hai số nguyên: -5 và -2",
        "options": [
          "-5 < -2 (vì trên trục số, điểm -5 nằm bên trái điểm -2)",
          "-5 > -2",
          "-5 = -2",
          "Không so sánh được"
        ],
        "correctIndex": 0,
        "explanation": "-5 nằm bên trái -2 trên trục số nên -5 < -2."
      },
      {
        "id": "sgk-14.4",
        "badge": "Câu 4",
        "question": "Sắp xếp các số nguyên sau theo thứ tự tăng dần: 2; -4; 0; 5; -11; -3; 9:",
        "options": [
          "-11 < -4 < -3 < 0 < 2 < 5 < 9",
          "-11 < -3 < -4 < 0 < 2 < 5 < 9",
          "9 > 5 > 2 > 0 > -3 > -4 > -11",
          "-3 < -4 < -11 < 0 < 2 < 5 < 9"
        ],
        "correctIndex": 0,
        "explanation": "Thứ tự tăng dần: -11 < -4 < -3 < 0 < 2 < 5 < 9."
      }
    ]
  },
  "t6-b15-phep-cong-tru-so-nguyen": {
    "id": "t6-b15-phep-cong-tru-so-nguyen",
    "lessonNumber": 15,
    "title": "Bài 15: Phép cộng và phép trừ số nguyên",
    "bookChapter": "Chương III: Số nguyên",
    "scenarioTitle": "Tình huống: Tính tiền lãi và lỗ",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Cộng hai số cùng dấu âm: (-a) + (-b) = -(a + b)."
    ],
    "traps": [
      "Trừ hai số nguyên: a - b = a + (-b)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-15.1",
        "badge": "Câu 1",
        "question": "Tính kết quả phép cộng hai số nguyên âm: (-15) + (-24) = ?",
        "options": [
          "-39",
          "+39",
          "-9",
          "+9"
        ],
        "correctIndex": 0,
        "explanation": "(-15) + (-24) = -(15 + 24) = -39."
      },
      {
        "id": "sgk-15.2",
        "badge": "Câu 2",
        "question": "Tính hiệu hai số nguyên: 23 - (-12) = ?",
        "options": [
          "35 (vì 23 - (-12) = 23 + 12 = 35)",
          "11",
          "-35",
          "-11"
        ],
        "correctIndex": 0,
        "explanation": "23 - (-12) = 23 + 12 = 35."
      },
      {
        "id": "sgk-15.3",
        "badge": "Câu 3",
        "question": "Tính hợp lý tổng: 152 + (-73) + (-152) + 73 = ?",
        "options": [
          "0 (ghép [152 + (-152)] + [(-73) + 73] = 0 + 0 = 0)",
          "152",
          "-73",
          "100"
        ],
        "correctIndex": 0,
        "explanation": "Tổng hai số đối nhau bằng 0: [152 + (-152)] + [(-73) + 73] = 0 + 0 = 0."
      },
      {
        "id": "sgk-15.4",
        "badge": "Câu 4",
        "question": "Tìm số nguyên x biết: x + (-5) = -18",
        "options": [
          "x = -13 (vì x = -18 - (-5) = -18 + 5 = -13)",
          "x = -23",
          "x = 13",
          "x = 23"
        ],
        "correctIndex": 0,
        "explanation": "x = -18 - (-5) = -18 + 5 = -13."
      }
    ]
  },
  "t6-b16-phep-nhan-so-nguyen": {
    "id": "t6-b16-phep-nhan-so-nguyen",
    "lessonNumber": 16,
    "title": "Bài 16: Phép nhân số nguyên",
    "bookChapter": "Chương III: Số nguyên",
    "scenarioTitle": "Tình huống: Tăng giảm tài khoản định kỳ",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Nhân hai số cùng dấu cho kết quả dương. Nhân hai số khác dấu cho kết quả âm."
    ],
    "traps": [
      "(-a) · (-b) = a · b."
    ],
    "quizQuestions": [
      {
        "id": "sgk-16.1",
        "badge": "Câu 1",
        "question": "Tính tích hai số nguyên cùng dấu: (-8) · (-5) = ?",
        "options": [
          "40",
          "-40",
          "13",
          "-13"
        ],
        "correctIndex": 0,
        "explanation": "(-8) · (-5) = 8 · 5 = 40."
      },
      {
        "id": "sgk-16.2",
        "badge": "Câu 2",
        "question": "Dự đoán dấu của tích P = (-3) · (-5) · 4 · (-2):",
        "options": [
          "P mang dấu âm (vì có 3 thừa số âm, số lẻ thừa số âm)",
          "P mang dấu dương",
          "P = 0",
          "Không xác định được"
        ],
        "correctIndex": 0,
        "explanation": "Tích có 3 thừa số âm (số lẻ thừa số âm) nên tích mang dấu âm."
      },
      {
        "id": "sgk-16.3",
        "badge": "Câu 3",
        "question": "Tính nhanh bằng cách ghép nhóm hợp lý: (-25) · 68 · (-4) = ?",
        "options": [
          "6 800 (vì [(-25) · (-4)] · 68 = 100 · 68 = 6 800)",
          "-6 800",
          "680",
          "-680"
        ],
        "correctIndex": 0,
        "explanation": "[(-25) · (-4)] · 68 = 100 · 68 = 6 800."
      },
      {
        "id": "sgk-16.4",
        "badge": "Câu 4",
        "question": "Áp dụng tính chất phân phối để tính nhanh: (-12) · 25 + (-12) · 75 = ?",
        "options": [
          "-1 200 (vì (-12) · (25 + 75) = (-12) · 100 = -1 200)",
          "1 200",
          "-120",
          "120"
        ],
        "correctIndex": 0,
        "explanation": "(-12) · (25 + 75) = (-12) · 100 = -1 200."
      }
    ]
  },
  "t6-b17-phep-chia-het-so-nguyen": {
    "id": "t6-b17-phep-chia-het-so-nguyen",
    "lessonNumber": 17,
    "title": "Bài 17: Phép chia hết. Ước và bội của một số nguyên",
    "bookChapter": "Chương III: Số nguyên",
    "scenarioTitle": "Tình huống: Chia đều khoản nợ",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Các ước của số nguyên a gồm cả ước dương và ước âm."
    ],
    "traps": [
      "Ư(6) = {±1; ±2; ±3; ±6} gồm 8 phần tử."
    ],
    "quizQuestions": [
      {
        "id": "sgk-17.1",
        "badge": "Câu 1",
        "question": "Tính thương phép chia hai số nguyên: (-45) : 9 = ?",
        "options": [
          "-5",
          "5",
          "-54",
          "-36"
        ],
        "correctIndex": 0,
        "explanation": "(-45) : 9 = -(45 : 9) = -5."
      },
      {
        "id": "sgk-17.2",
        "badge": "Câu 2",
        "question": "Tìm tất cả các ước nguyên của số 6:",
        "options": [
          "{-6; -3; -2; -1; 1; 2; 3; 6}",
          "{1; 2; 3; 6}",
          "{-6; -3; -2; -1}",
          "{0; 1; 2; 3; 6}"
        ],
        "correctIndex": 0,
        "explanation": "Ước của 6 trong ℤ gồm cả số âm và số dương: ±1; ±2; ±3; ±6."
      }
    ]
  },
  "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu": {
    "id": "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu",
    "lessonNumber": 18,
    "title": "Bài 18: Tam giác đều. Hình vuông. Lục giác đều",
    "bookChapter": "Chương IV: Một số hình phẳng trong thực tiễn",
    "scenarioTitle": "Tình huống: Lát gạch trang trí",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng nhau và bằng 60°."
    ],
    "traps": [
      "Lục giác đều gồm 6 tam giác đều ghép lại."
    ],
    "quizQuestions": [
      {
        "id": "sgk-18.1",
        "badge": "Câu 1",
        "question": "Một tam giác đều có độ dài cạnh bằng 5 cm. Chu vi của tam giác đều đó là:",
        "options": [
          "15 cm (vì C = 3 × 5 = 15 cm)",
          "20 cm",
          "25 cm",
          "10 cm"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi tam giác đều cạnh a: C = 3a = 3 × 5 = 15 cm."
      },
      {
        "id": "sgk-18.2",
        "badge": "Câu 2",
        "question": "Một hình vuông có cạnh dài 4 cm. Chu vi và diện tích của hình vuông đó lần lượt là:",
        "options": [
          "C = 16 cm và S = 16 cm²",
          "C = 8 cm và S = 16 cm²",
          "C = 16 cm và S = 8 cm²",
          "C = 12 cm và S = 16 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi C = 4 × 4 = 16 cm. Diện tích S = 4² = 16 cm²."
      },
      {
        "id": "sgk-18.3",
        "badge": "Câu 3",
        "question": "Lục giác đều ABCDEF có bao nhiêu đường chéo chính cắt nhau tại một điểm?",
        "options": [
          "3 đường chéo chính (AD, BE, CF)",
          "6 đường chéo",
          "4 đường chéo",
          "2 đường chéo"
        ],
        "correctIndex": 0,
        "explanation": "Lục giác đều có 3 đường chéo chính nối các đỉnh đối diện cắt nhau tại tâm."
      }
    ]
  },
  "t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can": {
    "id": "t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can",
    "lessonNumber": 19,
    "title": "Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân",
    "bookChapter": "Chương IV: Một số hình phẳng trong thực tiễn",
    "scenarioTitle": "Tình huống: Khung cửa và hoa văn thổ cẩm",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Hình thoi có 4 cạnh bằng nhau và hai đường chéo vuông góc với nhau."
    ],
    "traps": [
      "Hình bình hành có các cạnh đối song song và bằng nhau."
    ],
    "quizQuestions": [
      {
        "id": "sgk-19.1",
        "badge": "Câu 1",
        "question": "Tứ giác có 4 cạnh bằng nhau và hai đường chéo vuông góc tại trung điểm mỗi đường là hình gì?",
        "options": [
          "Hình thoi",
          "Hình chữ nhật",
          "Hình thang cân",
          "Hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Đó là đặc điểm nhận biết của hình thoi."
      },
      {
        "id": "sgk-19.2",
        "badge": "Câu 2",
        "question": "Một hình thoi có cạnh bằng 6 cm. Chu vi của hình thoi đó là:",
        "options": [
          "24 cm (vì C = 4 × 6 = 24 cm)",
          "36 cm",
          "18 cm",
          "12 cm"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi hình thoi cạnh a: C = 4a = 4 × 6 = 24 cm."
      },
      {
        "id": "sgk-19.3",
        "badge": "Câu 3",
        "question": "Hình thang cân có tính chất nào sau đây?",
        "options": [
          "Hai cạnh bên bằng nhau và hai đường chéo bằng nhau",
          "Bốn cạnh bằng nhau",
          "Hai đường chéo vuông góc",
          "Bốn góc bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Hình thang cân có hai cạnh bên bằng nhau và hai đường chéo bằng nhau."
      }
    ]
  },
  "t6-b20-chu-vi-dien-tich-tu-giac": {
    "id": "t6-b20-chu-vi-dien-tich-tu-giac",
    "lessonNumber": 20,
    "title": "Bài 20: Chu vi và diện tích của một số tứ giác đã học",
    "bookChapter": "Chương IV: Một số hình phẳng trong thực tiễn",
    "scenarioTitle": "Tình huống: Tính diện tích sân bóng và mảnh vườn",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Diện tích hình thoi = 1/2 · d₁ · d₂. Diện tích hình thang = 1/2 · (a + b) · h."
    ],
    "traps": [
      "Nhớ đổi cùng đơn vị đo trước khi tính diện tích."
    ],
    "quizQuestions": [
      {
        "id": "sgk-20.1",
        "badge": "Câu 1",
        "question": "Tính chu vi và diện tích hình chữ nhật có chiều dài 12 cm và chiều rộng 8 cm:",
        "options": [
          "C = 40 cm và S = 96 cm²",
          "C = 20 cm và S = 96 cm²",
          "C = 40 cm và S = 48 cm²",
          "C = 96 cm và S = 40 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi C = (12 + 8) × 2 = 40 cm. Diện tích S = 12 × 8 = 96 cm²."
      },
      {
        "id": "sgk-20.2",
        "badge": "Câu 2",
        "question": "Một hình thoi có độ dài hai đường chéo là 8 cm và 10 cm. Diện tích của hình thoi đó là:",
        "options": [
          "40 cm² (vì S = 1/2 × 8 × 10 = 40 cm²)",
          "80 cm²",
          "36 cm²",
          "18 cm²"
        ],
        "correctIndex": 0,
        "explanation": "S = 1/2 · d₁ · d₂ = 1/2 × 8 × 10 = 40 cm²."
      },
      {
        "id": "sgk-20.3",
        "badge": "Câu 3",
        "question": "Một hình bình hành có cạnh đáy 15 cm và chiều cao tương ứng 8 cm. Diện tích hình bình hành là:",
        "options": [
          "120 cm² (vì S = 15 × 8 = 120 cm²)",
          "60 cm²",
          "240 cm²",
          "46 cm²"
        ],
        "correctIndex": 0,
        "explanation": "S = a · h = 15 × 8 = 120 cm²."
      },
      {
        "id": "sgk-20.4",
        "badge": "Câu 4",
        "question": "Một hình thang có hai đáy 12 cm, 8 cm và chiều cao 6 cm. Diện tích hình thang là:",
        "options": [
          "60 cm² (vì S = (12 + 8) × 6 / 2 = 60 cm²)",
          "120 cm²",
          "30 cm²",
          "48 cm²"
        ],
        "correctIndex": 0,
        "explanation": "S = (a + b) · h / 2 = (12 + 8) × 6 / 2 = 60 cm²."
      }
    ]
  },
  "t6-b21-hinh-co-truc-doi-xung": {
    "id": "t6-b21-hinh-co-truc-doi-xung",
    "lessonNumber": 21,
    "title": "Bài 21: Hình có trục đối xứng",
    "bookChapter": "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
    "scenarioTitle": "Tình huống: Cánh bướm và lá cây",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Trục đối xứng chia hình thành hai phần mà khi gấp theo trục thì hai phần chồng khít lên nhau."
    ],
    "traps": [
      "Hình tròn có vô số trục đối xứng."
    ],
    "quizQuestions": [
      {
        "id": "sgk-21.1",
        "badge": "Câu 1",
        "question": "Chữ cái in hoa nào sau đây có đúng 2 trục đối xứng?",
        "options": [
          "Chữ H",
          "Chữ A",
          "Chữ C",
          "Chữ M"
        ],
        "correctIndex": 0,
        "explanation": "Chữ H có 2 trục đối xứng (1 trục dọc và 1 trục ngang)."
      },
      {
        "id": "sgk-21.2",
        "badge": "Câu 2",
        "question": "Hình vuông có bao nhiêu trục đối xứng?",
        "options": [
          "4 trục đối xứng (2 đường chéo và 2 đường nối trung điểm cạnh đối)",
          "2 trục",
          "1 trục",
          "Vô số trục"
        ],
        "correctIndex": 0,
        "explanation": "Hình vuông có đúng 4 trục đối xứng."
      }
    ]
  },
  "t6-b22-hinh-co-tam-doi-xung": {
    "id": "t6-b22-hinh-co-tam-doi-xung",
    "lessonNumber": 22,
    "title": "Bài 22: Hình có tâm đối xứng",
    "bookChapter": "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
    "scenarioTitle": "Tình huống: Chong chóng gió và hoa sen",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Tâm đối xứng là điểm mà khi quay hình 180° quanh điểm đó, hình lại trùng khít với chính nó."
    ],
    "traps": [
      "Tam giác đều KHÔNG có tâm đối xứng."
    ],
    "quizQuestions": [
      {
        "id": "sgk-22.1",
        "badge": "Câu 1",
        "question": "Hình nào sau đây CÓ tâm đối xứng?",
        "options": [
          "Hình bình hành (tâm là giao điểm 2 đường chéo)",
          "Tam giác đều",
          "Hình thang cân",
          "Tam giác vuông"
        ],
        "correctIndex": 0,
        "explanation": "Hình bình hành có tâm đối xứng là giao điểm của hai đường chéo."
      },
      {
        "id": "sgk-22.2",
        "badge": "Câu 2",
        "question": "Chữ cái in hoa nào sau đây có tâm đối xứng?",
        "options": [
          "Chữ S (và chữ N, I, O)",
          "Chữ A",
          "Chữ M",
          "Chữ E"
        ],
        "correctIndex": 0,
        "explanation": "Chữ S có tâm đối xứng ở chính giữa (khi quay 180° giữ nguyên hình dạng)."
      }
    ]
  },
  "t6-b23-mo-rong-phan-so": {
    "id": "t6-b23-mo-rong-phan-so",
    "lessonNumber": 23,
    "title": "Bài 23: Mở rộng phân số. Phân số bằng nhau",
    "bookChapter": "Chương VI: Phân số",
    "scenarioTitle": "Tình huống: Chia đều phần ăn",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "a/b = c/d khi và chỉ khi a · d = b · c."
    ],
    "traps": [
      "Mẫu số b của phân số a/b luôn phải khác 0."
    ],
    "quizQuestions": [
      {
        "id": "sgk-23.1",
        "badge": "Câu 1",
        "question": "Cặp phân số nào sau đây bằng nhau?",
        "options": [
          "-3/4 và 6/-8 (vì (-3)·(-8) = 4·6 = 24)",
          "2/3 và 3/2",
          "-1/2 và 1/2",
          "3/5 và 6/15"
        ],
        "correctIndex": 0,
        "explanation": "Vì (-3) × (-8) = 24 và 4 × 6 = 24 nên -3/4 = 6/-8."
      },
      {
        "id": "sgk-23.2",
        "badge": "Câu 2",
        "question": "Tìm số nguyên x biết: x / 4 = 21 / 28",
        "options": [
          "x = 3 (vì x = 4 · 21 / 28 = 3)",
          "x = 4",
          "x = 7",
          "x = 21"
        ],
        "correctIndex": 0,
        "explanation": "x · 28 = 4 · 21 = 84 ⇒ x = 84 : 28 = 3."
      },
      {
        "id": "sgk-23.3",
        "badge": "Câu 3",
        "question": "Rút gọn phân số -18/24 về dạng tối giản:",
        "options": [
          "-3/4 (chia cả tử và mẫu cho 6)",
          "-9/12",
          "-6/8",
          "3/4"
        ],
        "correctIndex": 0,
        "explanation": "ƯCLN(18, 24) = 6. Chia cả tử và mẫu cho 6: -18 : 6 = -3, 24 : 6 = 4 ⇒ -3/4."
      }
    ]
  },
  "t6-b24-so-sanh-phan-so": {
    "id": "t6-b24-so-sanh-phan-so",
    "lessonNumber": 24,
    "title": "Bài 24: So sánh phân số. Hỗn số dương",
    "bookChapter": "Chương VI: Phân số",
    "scenarioTitle": "Tình huống: So sánh năng suất thu hoạch",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Quy đồng mẫu dương rồi so sánh các tử số."
    ],
    "traps": [
      "Phân số có tử và mẫu cùng dấu là phân số dương. Khác dấu là phân số âm."
    ],
    "quizQuestions": [
      {
        "id": "sgk-24.1",
        "badge": "Câu 1",
        "question": "So sánh hai phân số: -5/7 và -3/7",
        "options": [
          "-5/7 < -3/7 (vì -5 < -3)",
          "-5/7 > -3/7",
          "-5/7 = -3/7",
          "Không so sánh được"
        ],
        "correctIndex": 0,
        "explanation": "Hai phân số có cùng mẫu số dương 7, vì -5 < -3 nên -5/7 < -3/7."
      },
      {
        "id": "sgk-24.2",
        "badge": "Câu 2",
        "question": "Viết phân số 11/4 dưới dạng hỗn số dương:",
        "options": [
          "2 3/4 (vì 11 = 4 × 2 + 3)",
          "2 1/4",
          "3 1/4",
          "1 3/4"
        ],
        "correctIndex": 0,
        "explanation": "11 chia 4 được 2 dư 3 nên 11/4 = 2 3/4."
      },
      {
        "id": "sgk-24.3",
        "badge": "Câu 3",
        "question": "Đổi hỗn số 3 1/2 ra dạng phân số:",
        "options": [
          "7/2 (vì (3 × 2 + 1) / 2 = 7/2)",
          "5/2",
          "6/2",
          "3/2"
        ],
        "correctIndex": 0,
        "explanation": "3 1/2 = (3 × 2 + 1) / 2 = 7/2."
      }
    ]
  },
  "t6-b25-phep-cong-tru-phan-so": {
    "id": "t6-b25-phep-cong-tru-phan-so",
    "lessonNumber": 25,
    "title": "Bài 25: Phép cộng và phép trừ phân số",
    "bookChapter": "Chương VI: Phân số",
    "scenarioTitle": "Tình huống: Ghép các miếng bánh",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Muốn cộng trừ hai phân số khác mẫu, ta quy đồng mẫu rồi cộng trừ tử."
    ],
    "traps": [
      "Nhớ rút gọn kết quả về phân số tối giản."
    ],
    "quizQuestions": [
      {
        "id": "sgk-25.1",
        "badge": "Câu 1",
        "question": "Tính tổng hai phân số: -1/3 + 2/5 = ?",
        "options": [
          "1/15 (quy đồng mẫu 15: -5/15 + 6/15 = 1/15)",
          "-1/15",
          "1/8",
          "3/15"
        ],
        "correctIndex": 0,
        "explanation": "-1/3 + 2/5 = -5/15 + 6/15 = 1/15."
      },
      {
        "id": "sgk-25.2",
        "badge": "Câu 2",
        "question": "Tính hiệu hai phân số: 5/6 - 1/4 = ?",
        "options": [
          "7/12 (quy đồng mẫu 12: 10/12 - 3/12 = 7/12)",
          "4/2",
          "4/12",
          "1/2"
        ],
        "correctIndex": 0,
        "explanation": "Mẫu chung là 12: 10/12 - 3/12 = 7/12."
      },
      {
        "id": "sgk-25.3",
        "badge": "Câu 3",
        "question": "Tìm x biết: x - 1/4 = 5/8",
        "options": [
          "x = 7/8 (vì x = 5/8 + 2/8 = 7/8)",
          "x = 3/8",
          "x = 6/8",
          "x = 4/8"
        ],
        "correctIndex": 0,
        "explanation": "x = 5/8 + 1/4 = 5/8 + 2/8 = 7/8."
      }
    ]
  },
  "t6-b26-phep-nhan-chia-phan-so": {
    "id": "t6-b26-phep-nhan-chia-phan-so",
    "lessonNumber": 26,
    "title": "Bài 26: Phép nhân và phép chia phân số",
    "bookChapter": "Chương VI: Phân số",
    "scenarioTitle": "Tình huống: Tính diện tích mảnh đất tỉ lệ",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Nhân tử với tử, mẫu với mẫu. Chia phân số là nhân với phân số nghịch đảo."
    ],
    "traps": [
      "Số nghịch đảo của a/b là b/a (với a, b ≠ 0)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-26.1",
        "badge": "Câu 1",
        "question": "Tính tích: (-3/7) · (14/9) = ?",
        "options": [
          "-2/3 (rút gọn -3 với 9 thành 3, 14 với 7 thành 2)",
          "-42/63",
          "-6/7",
          "2/3"
        ],
        "correctIndex": 0,
        "explanation": "(-3 · 14) / (7 · 9) = -42/63 = -2/3."
      },
      {
        "id": "sgk-26.2",
        "badge": "Câu 2",
        "question": "Số nghịch đảo của phân số -7/4 là:",
        "options": [
          "-4/7",
          "4/7",
          "7/4",
          "-1/7"
        ],
        "correctIndex": 0,
        "explanation": "Số nghịch đảo của a/b là b/a, do đó số nghịch đảo của -7/4 là -4/7."
      },
      {
        "id": "sgk-26.3",
        "badge": "Câu 3",
        "question": "Tính thương: (5/8) : (-15/16) = ?",
        "options": [
          "-2/3 (nhân với nghịch đảo -16/15: 5/8 · (-16/15) = -2/3)",
          "-75/128",
          "2/3",
          "-1/3"
        ],
        "correctIndex": 0,
        "explanation": "5/8 · (-16/15) = (5 · (-16)) / (8 · 15) = -2/3."
      }
    ]
  },
  "t6-b27-hai-bai-toan-ve-phan-so": {
    "id": "t6-b27-hai-bai-toan-ve-phan-so",
    "lessonNumber": 27,
    "title": "Bài 27: Hai bài toán về phân số",
    "bookChapter": "Chương VI: Phân số",
    "scenarioTitle": "Tình huống: Tính lượng nước và khối lượng hàng",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Tìm m/n của số a: lấy a · (m/n). Tìm số biết m/n của nó là b: lấy b : (m/n)."
    ],
    "traps": [
      "Phân biệt rõ bài toán 'tìm phân số của một số' và 'tìm một số biết giá trị phân số'."
    ],
    "quizQuestions": [
      {
        "id": "sgk-27.1",
        "badge": "Câu 1",
        "question": "Tính 3/5 của 45 kg là bao nhiêu kg?",
        "options": [
          "27 kg (vì 45 × 3/5 = 27)",
          "75 kg",
          "15 kg",
          "18 kg"
        ],
        "correctIndex": 0,
        "explanation": "45 · (3/5) = 27 kg."
      },
      {
        "id": "sgk-27.2",
        "badge": "Câu 2",
        "question": "Tìm một số biết 2/3 của số đó bằng 24:",
        "options": [
          "36 (vì 24 : 2/3 = 24 × 3/2 = 36)",
          "16",
          "48",
          "30"
        ],
        "correctIndex": 0,
        "explanation": "Số cần tìm: 24 : (2/3) = 24 × 3/2 = 36."
      },
      {
        "id": "sgk-27.3",
        "badge": "Câu 3",
        "question": "Lớp 6A có 40 học sinh, trong đó số học sinh giỏi chiếm 2/5 số học sinh cả lớp. Số học sinh giỏi của lớp 6A là:",
        "options": [
          "16 học sinh (vì 40 × 2/5 = 16)",
          "20 học sinh",
          "18 học sinh",
          "24 học sinh"
        ],
        "correctIndex": 0,
        "explanation": "40 × 2/5 = 16 học sinh."
      }
    ]
  },
  "t6-b28-so-thap-phan": {
    "id": "t6-b28-so-thap-phan",
    "lessonNumber": 28,
    "title": "Bài 28: Số thập phân",
    "bookChapter": "Chương VII: Số thập phân",
    "scenarioTitle": "Tình huống: Đo chiều cao và cân nặng",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Số thập phân gồm phần nguyên và phần thập phân ngăn cách bởi dấu phẩy."
    ],
    "traps": [
      "Số đối của số thập phân a là -a."
    ],
    "quizQuestions": [
      {
        "id": "sgk-28.1",
        "badge": "Câu 1",
        "question": "Viết phân số -35/100 dưới dạng số thập phân:",
        "options": [
          "-0,35",
          "-3,5",
          "-0,035",
          "0,35"
        ],
        "correctIndex": 0,
        "explanation": "-35 / 100 = -0,35."
      },
      {
        "id": "sgk-28.2",
        "badge": "Câu 2",
        "question": "Số đối của số thập phân -12,45 là:",
        "options": [
          "12,45 (hay +12,45)",
          "-12,45",
          "0",
          "1/12,45"
        ],
        "correctIndex": 0,
        "explanation": "Số đối của -12,45 là 12,45."
      },
      {
        "id": "sgk-28.3",
        "badge": "Câu 3",
        "question": "So sánh hai số thập phân: -1,5 và -1,25",
        "options": [
          "-1,5 < -1,25 (vì 1,5 > 1,25 ⇒ -1,5 < -1,25)",
          "-1,5 > -1,25",
          "-1,5 = -1,25",
          "Không so sánh được"
        ],
        "correctIndex": 0,
        "explanation": "Vì 1,5 > 1,25 nên số đối -1,5 < -1,25."
      }
    ]
  },
  "t6-b29-tinh-toan-so-thap-phan": {
    "id": "t6-b29-tinh-toan-so-thap-phan",
    "lessonNumber": 29,
    "title": "Bài 29: Tính toán với số thập phân",
    "bookChapter": "Chương VII: Số thập phân",
    "scenarioTitle": "Tình huống: Tính tiền mua hàng tại siêu thị",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Đặt dấu phẩy thẳng cột khi cộng trừ. Đếm số chữ số thập phân khi nhân."
    ],
    "traps": [
      "(-a) · (-b) = a · b (tích hai số âm là số dương)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-29.1",
        "badge": "Câu 1",
        "question": "Tính tổng: (-2,5) + (-4,3) = ?",
        "options": [
          "-6,8",
          "+6,8",
          "-1,8",
          "+1,8"
        ],
        "correctIndex": 0,
        "explanation": "(-2,5) + (-4,3) = -(2,5 + 4,3) = -6,8."
      },
      {
        "id": "sgk-29.2",
        "badge": "Câu 2",
        "question": "Tính tích hai số thập phân cùng dấu âm: (-1,5) · (-0,4) = ?",
        "options": [
          "0,6 (tích hai số âm là số dương: 1,5 × 0,4 = 0,6)",
          "-0,6",
          "6",
          "-6"
        ],
        "correctIndex": 0,
        "explanation": "(-1,5) · (-0,4) = 1,5 · 0,4 = 0,6."
      },
      {
        "id": "sgk-29.3",
        "badge": "Câu 3",
        "question": "Tính nhanh giá trị biểu thức: (-3,2) · 15,4 + (-3,2) · 84,6 = ?",
        "options": [
          "-320 (vì (-3,2) · (15,4 + 84,6) = (-3,2) · 100 = -320)",
          "320",
          "-32",
          "32"
        ],
        "correctIndex": 0,
        "explanation": "(-3,2) · (15,4 + 84,6) = (-3,2) · 100 = -320."
      }
    ]
  },
  "t6-b30-lam-tron-uoc-luong": {
    "id": "t6-b30-lam-tron-uoc-luong",
    "lessonNumber": 30,
    "title": "Bài 30: Làm tròn và ước lượng",
    "bookChapter": "Chương VII: Số thập phân",
    "scenarioTitle": "Tình huống: Ước lượng chi phí chuyến đi",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Nếu chữ số đầu tiên bị bỏ đi < 5 thì giữ nguyên. Nếu ≥ 5 thì cộng 1 vào hàng làm tròn."
    ],
    "traps": [
      "Nhớ xác định đúng hàng cần làm tròn (hàng đơn vị, phần mười, phần trăm)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-30.1",
        "badge": "Câu 1",
        "question": "Làm tròn số thập phân 15,748 đến hàng phần mười (chữ số thập phân thứ nhất):",
        "options": [
          "15,7 (vì chữ số ngay sau là 4 < 5)",
          "15,8",
          "16,0",
          "15,75"
        ],
        "correctIndex": 0,
        "explanation": "Chữ số hàng phần mười là 7, số ngay sau là 4 (< 5) nên giữ nguyên: 15,7."
      },
      {
        "id": "sgk-30.2",
        "badge": "Câu 2",
        "question": "Làm tròn số 48 652 đến hàng nghìn:",
        "options": [
          "49 000 (vì chữ số hàng trăm là 6 ≥ 5)",
          "48 000",
          "50 000",
          "48 700"
        ],
        "correctIndex": 0,
        "explanation": "Chữ số hàng nghìn là 8, chữ số ngay sau (hàng trăm) là 6 ≥ 5 nên cộng 1 vào 8 thành 9: 49 000."
      }
    ]
  },
  "t6-b31-ti-so-ti-so-phan-tram": {
    "id": "t6-b31-ti-so-ti-so-phan-tram",
    "lessonNumber": 31,
    "title": "Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm",
    "bookChapter": "Chương VII: Số thập phân",
    "scenarioTitle": "Tình huống: Giảm giá khuyến mãi",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Tỉ số phần trăm của a và b: (a / b) · 100%."
    ],
    "traps": [
      "Giá trị phần trăm: a% của số b = b · (a / 100)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-31.1",
        "badge": "Câu 1",
        "question": "Lớp 6A có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm của số học sinh nữ so với cả lớp là:",
        "options": [
          "60% (vì 24 : 40 × 100% = 60%)",
          "50%",
          "40%",
          "75%"
        ],
        "correctIndex": 0,
        "explanation": "(24 / 40) × 100% = 0,6 × 100% = 60%."
      },
      {
        "id": "sgk-31.2",
        "badge": "Câu 2",
        "question": "Tính 15% của 200 000 đồng:",
        "options": [
          "30 000 đồng (vì 200 000 × 15% = 30 000)",
          "15 000 đồng",
          "170 000 đồng",
          "20 000 đồng"
        ],
        "correctIndex": 0,
        "explanation": "200 000 × 15% = 200 000 × 0,15 = 30 000 đồng."
      },
      {
        "id": "sgk-31.3",
        "badge": "Câu 3",
        "question": "Một chiếc áo có giá niêm yết 240 000 đồng, nhân dịp khai giảng được giảm giá 20%. Số tiền người mua phải trả là:",
        "options": [
          "192 000 đồng (vì 240 000 × (100% - 20%) = 192 000)",
          "200 000 đồng",
          "48 000 đồng",
          "180 000 đồng"
        ],
        "correctIndex": 0,
        "explanation": "Số tiền giảm: 240 000 × 20% = 48 000 đồng. Số tiền phải trả: 240 000 - 48 000 = 192 000 đồng."
      }
    ]
  },
  "t6-b32-diem-duong-thang": {
    "id": "t6-b32-diem-duong-thang",
    "lessonNumber": 32,
    "title": "Bài 32: Điểm và đường thẳng",
    "bookChapter": "Chương VIII: Những hình hình học cơ bản",
    "scenarioTitle": "Tình huống: Cột cờ và vạch kẻ đường",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Có một và chỉ một đường thẳng đi qua hai điểm phân biệt."
    ],
    "traps": [
      "Ba điểm cùng nằm trên một đường thẳng gọi là ba điểm thẳng hàng."
    ],
    "quizQuestions": [
      {
        "id": "sgk-32.1",
        "badge": "Câu 1",
        "question": "Có bao nhiêu đường thẳng đi qua hai điểm phân biệt A và B?",
        "options": [
          "Chỉ có 1 đường thẳng duy nhất",
          "Có 2 đường thẳng",
          "Có vô số đường thẳng",
          "Không có đường thẳng nào"
        ],
        "correctIndex": 0,
        "explanation": "Định lý hình học cơ bản: Có một và chỉ một đường thẳng đi qua hai điểm phân biệt."
      },
      {
        "id": "sgk-32.2",
        "badge": "Câu 2",
        "question": "Cho ba điểm A, B, C không thẳng hàng. Vẽ các đường thẳng đi qua từng cặp điểm. Có tất cả bao nhiêu đường thẳng?",
        "options": [
          "3 đường thẳng (đó là AB, BC, CA)",
          "1 đường thẳng",
          "2 đường thẳng",
          "Vô số đường thẳng"
        ],
        "correctIndex": 0,
        "explanation": "Ba điểm không thẳng hàng tạo thành 3 đường thẳng phân biệt: AB, BC, CA."
      }
    ]
  },
  "t6-b33-diem-nam-giua-tia": {
    "id": "t6-b33-diem-nam-giua-tia",
    "lessonNumber": 33,
    "title": "Bài 33: Điểm nằm giữa hai điểm. Tia",
    "bookChapter": "Chương VIII: Những hình hình học cơ bản",
    "scenarioTitle": "Tình huống: Tia laser và ngọn hải đăng",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Tia Ox bị giới hạn ở gốc O và không bị giới hạn về phía x."
    ],
    "traps": [
      "Hai tia chung gốc tạo thành một đường thẳng gọi là hai tia đối nhau."
    ],
    "quizQuestions": [
      {
        "id": "sgk-33.1",
        "badge": "Câu 1",
        "question": "Hình gồm điểm O và một phần đường thẳng bị chia ra bởi điểm O được gọi là:",
        "options": [
          "Một tia gốc O",
          "Một đoạn thẳng",
          "Một đường thẳng",
          "Một góc"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: Hình gồm điểm O và một phần đường thẳng bị chia bởi điểm O là tia gốc O."
      },
      {
        "id": "sgk-33.2",
        "badge": "Câu 2",
        "question": "Hai tia Ox và Oy chung gốc O tạo thành đường thẳng xy. Hai tia Ox và Oy được gọi là:",
        "options": [
          "Hai tia đối nhau",
          "Hai tia trùng nhau",
          "Hai tia vuông góc",
          "Hai đoạn thẳng"
        ],
        "correctIndex": 0,
        "explanation": "Hai tia chung gốc tạo thành đường thẳng gọi là hai tia đối nhau."
      }
    ]
  },
  "t6-b34-doan-thang": {
    "id": "t6-b34-doan-thang",
    "lessonNumber": 34,
    "title": "Bài 34: Đoạn thẳng. Độ dài đoạn thẳng",
    "bookChapter": "Chương VIII: Những hình hình học cơ bản",
    "scenarioTitle": "Tình huống: Đo khoảng cách giữa hai mốc tiêu",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Đoạn thẳng AB bị giới hạn ở cả hai đầu mút A và B."
    ],
    "traps": [
      "Nếu M nằm giữa A và B thì AM + MB = AB."
    ],
    "quizQuestions": [
      {
        "id": "sgk-34.1",
        "badge": "Câu 1",
        "question": "Cho điểm M nằm giữa hai điểm A và B. Biết AM = 4 cm, MB = 6 cm. Độ dài đoạn thẳng AB là:",
        "options": [
          "10 cm (vì AB = AM + MB = 4 + 6 = 10 cm)",
          "2 cm",
          "24 cm",
          "8 cm"
        ],
        "correctIndex": 0,
        "explanation": "Vì M nằm giữa A và B nên AB = AM + MB = 4 + 6 = 10 cm."
      },
      {
        "id": "sgk-34.2",
        "badge": "Câu 2",
        "question": "Đoạn thẳng AB có độ dài 12 cm. Điểm C nằm giữa A và B sao cho AC = 5 cm. Độ dài đoạn thẳng CB là:",
        "options": [
          "7 cm (vì CB = AB - AC = 12 - 5 = 7 cm)",
          "17 cm",
          "6 cm",
          "8 cm"
        ],
        "correctIndex": 0,
        "explanation": "CB = AB - AC = 12 - 5 = 7 cm."
      }
    ]
  },
  "t6-b35-trung-diem-doan-thang": {
    "id": "t6-b35-trung-diem-doan-thang",
    "lessonNumber": 35,
    "title": "Bài 35: Trung điểm của đoạn thẳng",
    "bookChapter": "Chương VIII: Những hình hình học cơ bản",
    "scenarioTitle": "Tình huống: Cầu bập bênh thăng bằng",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Trung điểm M của đoạn thẳng AB nằm giữa A, B và cách đều A, B (MA = MB = AB / 2)."
    ],
    "traps": [
      "Chỉ 'cách đều' chưa đủ, điểm M bắt buộc phải 'nằm giữa' A và B."
    ],
    "quizQuestions": [
      {
        "id": "sgk-35.1",
        "badge": "Câu 1",
        "question": "Điểm M là trung điểm của đoạn thẳng AB có độ dài 10 cm. Độ dài đoạn thẳng MA là:",
        "options": [
          "5 cm (vì MA = AB / 2 = 10 / 2 = 5 cm)",
          "10 cm",
          "2,5 cm",
          "20 cm"
        ],
        "correctIndex": 0,
        "explanation": "M là trung điểm AB nên MA = MB = AB / 2 = 10 / 2 = 5 cm."
      },
      {
        "id": "sgk-35.2",
        "badge": "Câu 2",
        "question": "Điều kiện để điểm M là trung điểm của đoạn thẳng AB là:",
        "options": [
          "M nằm giữa A, B và MA = MB",
          "MA = MB",
          "M nằm giữa A và B",
          "MA + MB = 2AB"
        ],
        "correctIndex": 0,
        "explanation": "Trung điểm phải thỏa mãn 2 điều kiện: M nằm giữa A, B và MA = MB."
      }
    ]
  },
  "t6-b36-goc": {
    "id": "t6-b36-goc",
    "lessonNumber": 36,
    "title": "Bài 36: Góc",
    "bookChapter": "Chương VIII: Những hình hình học cơ bản",
    "scenarioTitle": "Tình huống: Kim giờ và kim phút đồng hồ",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Góc là hình gồm hai tia chung gốc. Gốc chung gọi là đỉnh của góc."
    ],
    "traps": [
      "Ký hiệu góc xOy là ∠xOy hoặc xÔy."
    ],
    "quizQuestions": [
      {
        "id": "sgk-36.1",
        "badge": "Câu 1",
        "question": "Hình gồm hai tia chung gốc Ox và Oy được gọi là:",
        "options": [
          "Góc xOy (đỉnh O, hai cạnh Ox và Oy)",
          "Đoạn thẳng xy",
          "Đường thẳng xy",
          "Tia xy"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa góc: Góc là hình gồm hai tia chung gốc."
      },
      {
        "id": "sgk-36.2",
        "badge": "Câu 2",
        "question": "Góc bẹt là góc có hai cạnh là:",
        "options": [
          "Hai tia đối nhau (số đo 180°)",
          "Hai tia trùng nhau",
          "Hai đoạn thẳng bằng nhau",
          "Hai đường thẳng vuông góc"
        ],
        "correctIndex": 0,
        "explanation": "Góc bẹt là góc có hai cạnh là hai tia đối nhau (số đo bằng 180°)."
      }
    ]
  },
  "t6-b37-so-do-goc": {
    "id": "t6-b37-so-do-goc",
    "lessonNumber": 37,
    "title": "Bài 37: Số đo góc",
    "bookChapter": "Chương VIII: Những hình hình học cơ bản",
    "scenarioTitle": "Tình huống: Thước đo góc trong thiết kế",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Góc nhọn < 90°, góc vuông = 90°, góc tù (90° < góc tù < 180°), góc bẹt = 180°."
    ],
    "traps": [
      "Dùng thước đo độ cẩn thận đặt tâm thước trùng với đỉnh góc."
    ],
    "quizQuestions": [
      {
        "id": "sgk-37.1",
        "badge": "Câu 1",
        "question": "Một góc có số đo bằng 90° được gọi là:",
        "options": [
          "Góc vuông",
          "Góc nhọn",
          "Góc tù",
          "Góc bẹt"
        ],
        "correctIndex": 0,
        "explanation": "Góc có số đo 90° là góc vuông."
      },
      {
        "id": "sgk-37.2",
        "badge": "Câu 2",
        "question": "Trong các góc có số đo sau: 45°, 90°, 125°, 180°, góc nào là góc tù?",
        "options": [
          "125° (vì 90° < 125° < 180°)",
          "45°",
          "90°",
          "180°"
        ],
        "correctIndex": 0,
        "explanation": "Góc lớn hơn 90° và nhỏ hơn 180° là góc tù."
      }
    ]
  },
  "t6-b38-du-lieu-thu-thap": {
    "id": "t6-b38-du-lieu-thu-thap",
    "lessonNumber": 38,
    "title": "Bài 38: Dữ liệu và thu thập dữ liệu",
    "bookChapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "scenarioTitle": "Tình huống: Điều tra môn thể thao yêu thích",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Dữ liệu thu thập được có thể là số liệu hoặc chữ/hình ảnh."
    ],
    "traps": [
      "Dữ liệu là số gọi là số liệu."
    ],
    "quizQuestions": [
      {
        "id": "sgk-38.1",
        "badge": "Câu 1",
        "question": "Trong các dãy dữ liệu sau, dãy nào là dãy số liệu?",
        "options": [
          "Chiều cao của 4 bạn (cm): 145; 150; 148; 152",
          "Màu sắc yêu thích: Xanh, Đỏ, Vàng, Tím",
          "Tên các loài hoa: Hồng, Lan, Cúc, Mai",
          "Học lực: Giỏi, Khá, Trung bình"
        ],
        "correctIndex": 0,
        "explanation": "Dãy số liệu gồm các giá trị bằng số: 145; 150; 148; 152."
      }
    ]
  },
  "t6-b39-bang-thong-ke-bieu-do-tranh": {
    "id": "t6-b39-bang-thong-ke-bieu-do-tranh",
    "lessonNumber": 39,
    "title": "Bài 39: Bảng thống kê và biểu đồ tranh",
    "bookChapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "scenarioTitle": "Tình huống: Thống kê số lượng cây trồng của các lớp",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Chú ý mỗi biểu tượng trong biểu đồ tranh đại diện cho bao nhiêu đối tượng."
    ],
    "traps": [
      "Đọc kỹ phần chú giải ở cuối biểu đồ tranh."
    ],
    "quizQuestions": [
      {
        "id": "sgk-39.1",
        "badge": "Câu 1",
        "question": "Trong biểu đồ tranh, mỗi biểu tượng 🌳 đại diện cho 10 cây xanh. Nếu lớp 6A có 4 biểu tượng 🌳 thì số cây trồng được của lớp 6A là:",
        "options": [
          "40 cây (vì 4 × 10 = 40)",
          "4 cây",
          "14 cây",
          "400 cây"
        ],
        "correctIndex": 0,
        "explanation": "4 × 10 = 40 cây xanh."
      }
    ]
  },
  "t6-b40-bieu-do-cot": {
    "id": "t6-b40-bieu-do-cot",
    "lessonNumber": 40,
    "title": "Bài 40: Biểu đồ cột",
    "bookChapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "scenarioTitle": "Tình huống: So sánh số điểm tốt của các tổ",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Chiều cao của cột biểu diễn số lượng của đối tượng thống kê."
    ],
    "traps": [
      "Khoảng cách giữa các cột phải bằng nhau, độ rộng các cột bằng nhau."
    ],
    "quizQuestions": [
      {
        "id": "sgk-40.1",
        "badge": "Câu 1",
        "question": "Trên biểu đồ cột biểu diễn số học sinh giỏi của 4 lớp, cột biểu diễn lớp 6A cao nhất. Điều đó có nghĩa là:",
        "options": [
          "Lớp 6A có nhiều học sinh giỏi nhất",
          "Lớp 6A có ít học sinh nhất",
          "Lớp 6A có chiều cao trung bình lớn nhất",
          "Lớp 6A có điểm thấp nhất"
        ],
        "correctIndex": 0,
        "explanation": "Cột cao nhất biểu diễn số lượng lớn nhất."
      }
    ]
  },
  "t6-b41-bieu-do-cot-kep": {
    "id": "t6-b41-bieu-do-cot-kep",
    "lessonNumber": 41,
    "title": "Bài 41: Biểu đồ cột kép",
    "bookChapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "scenarioTitle": "Tình huống: So sánh số học sinh nam và nữ các lớp",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Biểu đồ cột kép dùng để so sánh từng cặp dữ liệu của hai nhóm đối tượng."
    ],
    "traps": [
      "Chú ý màu sắc quy ước cho từng đối tượng trong cột kép."
    ],
    "quizQuestions": [
      {
        "id": "sgk-41.1",
        "badge": "Câu 1",
        "question": "Biểu đồ cột kép thường được sử dụng hiệu quả nhất khi nào?",
        "options": [
          "Khi cần so sánh hai tập dữ liệu cùng loại của các đối tượng",
          "Khi chỉ có một đối tượng duy nhất",
          "Khi dữ liệu là chữ viết không có số lượng",
          "Khi vẽ hình học không gian"
        ],
        "correctIndex": 0,
        "explanation": "Biểu đồ cột kép dùng để so sánh 2 tập số liệu của cùng các nhóm đối tượng (ví dụ: nam và nữ, năm 2025 và 2026)."
      }
    ]
  },
  "t6-b42-ket-qua-su-kien": {
    "id": "t6-b42-ket-qua-su-kien",
    "lessonNumber": 42,
    "title": "Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm",
    "bookChapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "scenarioTitle": "Tình huống: Vòng quay may mắn và rút thăm",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Sự kiện chắc chắn luôn xảy ra, sự kiện không thể không bao giờ xảy ra."
    ],
    "traps": [
      "Sự kiện có thể có thể xảy ra hoặc không xảy ra."
    ],
    "quizQuestions": [
      {
        "id": "sgk-42.1",
        "badge": "Câu 1",
        "question": "Gieo một con xúc xắc 6 mặt (từ 1 đến 6 chấm). Sự kiện nào sau đây là sự kiện CHẮC CHẮN?",
        "options": [
          "Số chấm xuất hiện nhỏ hơn 7",
          "Số chấm xuất hiện là 7",
          "Số chấm xuất hiện là số lẻ",
          "Số chấm xuất hiện bằng 0"
        ],
        "correctIndex": 0,
        "explanation": "Mọi mặt xúc xắc đều có số chấm từ 1 đến 6 (nhỏ hơn 7) nên sự kiện này chắc chắn xảy ra."
      },
      {
        "id": "sgk-42.2",
        "badge": "Câu 2",
        "question": "Khi gieo một con xúc xắc 6 mặt, sự kiện nào sau đây là sự kiện KHÔNG THỂ?",
        "options": [
          "Số chấm xuất hiện là 7",
          "Số chấm xuất hiện là 6",
          "Số chấm xuất hiện là số chẵn",
          "Số chấm xuất hiện lớn hơn 1"
        ],
        "correctIndex": 0,
        "explanation": "Xúc xắc 6 mặt chỉ có từ 1 đến 6 chấm nên không thể xuất hiện mặt 7 chấm."
      }
    ]
  },
  "t6-b43-xac-suat-thuc-nghiem": {
    "id": "t6-b43-xac-suat-thuc-nghiem",
    "lessonNumber": 43,
    "title": "Bài 43: Xác suất thực nghiệm",
    "bookChapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "scenarioTitle": "Tình huống: Thống kê số lần tung đồng xu may mắn",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Xác suất thực nghiệm = (Số lần sự kiện xảy ra) / (Tổng số lần thực hiện)."
    ],
    "traps": [
      "Xác suất luôn là số từ 0 đến 1 (hoặc 0% đến 100%)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-43.1",
        "badge": "Câu 1",
        "question": "Tung một đồng xu 20 lần thấy có 12 lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt ngửa là:",
        "options": [
          "12/20 = 3/5 (hay 60%)",
          "12/8",
          "8/20",
          "1/2"
        ],
        "correctIndex": 0,
        "explanation": "Xác suất thực nghiệm = 12 / 20 = 3/5 (60%)."
      },
      {
        "id": "sgk-43.2",
        "badge": "Câu 2",
        "question": "Gieo một con xúc xắc 50 lần thấy có 15 lần xuất hiện mặt 6 chấm. Xác suất thực nghiệm xuất hiện mặt 6 chấm là:",
        "options": [
          "15/50 = 3/10 (hay 30%)",
          "15/6",
          "6/50",
          "1/6"
        ],
        "correctIndex": 0,
        "explanation": "Xác suất thực nghiệm = 15 / 50 = 3/10 = 30%."
      }
    ]
  },
  "t6-b9-dau-hieu-chia-het-cho-2-cho-5": {
    "id": "t6-b9-dau-hieu-chia-het-cho-2-cho-5",
    "lessonNumber": 9,
    "title": "Bài 9: Dấu hiệu chia hết cho 2, cho 5",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Kiểm tra vé số trúng thưởng",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Số chia hết cho 2 tận cùng là 0, 2, 4, 6, 8. Cho 5 tận cùng là 0, 5."
    ],
    "traps": [
      "Số tận cùng là 0 thì vừa chia hết cho 2 vừa chia hết cho 5."
    ],
    "quizQuestions": [
      {
        "id": "sgk-9.1",
        "badge": "Câu 1",
        "question": "Trong các số sau: 324; 248; 2 020; 2 025, nhóm số nào chia hết cho 2 và nhóm số nào chia hết cho 5?",
        "options": [
          "Chia hết cho 2: {324; 248; 2 020}; Chia hết cho 5: {2 020; 2 025}",
          "Chia hết cho 2: {324; 248}; Chia hết cho 5: {2 025}",
          "Chia hết cho 2: {2 020; 2 025}; Chia hết cho 5: {324; 248}",
          "Tất cả các số đều chia hết cho cả 2 và 5"
        ],
        "correctIndex": 0,
        "explanation": "Tận cùng chẵn (0, 4, 8) chia hết cho 2; tận cùng 0, 5 chia hết cho 5."
      },
      {
        "id": "sgk-9.2",
        "badge": "Câu 2",
        "question": "Xét tính chia hết của các số tự nhiên: Cặp số nào sau đây vừa chia hết cho 2, vừa chia hết cho 5?",
        "options": [
          "50 và 120 (các số có chữ số tận cùng bằng 0)",
          "24 và 35",
          "15 và 45",
          "12 và 18"
        ],
        "correctIndex": 0,
        "explanation": "Tận cùng là 0 thì vừa chia hết cho 2 vừa chia hết cho 5."
      },
      {
        "id": "sgk-9.3",
        "badge": "Câu 3",
        "question": "Không thực hiện phép tính, tổng A = 146 + 550 chia hết cho những số nào trong hai số 2 và 5?",
        "options": [
          "A chia hết cho 2 nhưng không chia hết cho 5 (vì 146 và 550 đều ⋮ 2, nhưng 146 không ⋮ 5)",
          "A chia hết cho cả 2 và 5",
          "A chia hết cho 5 nhưng không chia hết cho 2",
          "A không chia hết cho cả 2 và 5"
        ],
        "correctIndex": 0,
        "explanation": "146 và 550 chẵn nên A ⋮ 2. Do 146 không chia hết cho 5 nên A không chia hết cho 5."
      },
      {
        "id": "sgk-9.4",
        "badge": "Câu 4",
        "question": "Lớp 6A có 42 học sinh, lớp 6B có 45 học sinh, lớp 6C có 48 học sinh. Lớp nào có thể xếp thành 2 hàng đều nhau, và lớp nào xếp được thành 5 hàng đều nhau?",
        "options": [
          "Xếp 2 hàng đều: Lớp 6A và 6C; Xếp 5 hàng đều: Lớp 6B",
          "Xếp 2 hàng đều: Lớp 6B; Xếp 5 hàng đều: Lớp 6A và 6C",
          "Cả 3 lớp đều xếp được 2 hàng",
          "Chỉ có lớp 6A xếp được 5 hàng"
        ],
        "correctIndex": 0,
        "explanation": "42 và 48 chia hết cho 2 (Lớp 6A, 6C); 45 chia hết cho 5 (Lớp 6B)."
      }
    ]
  },
  "t6-b10-dau-hieu-chia-het-cho-3-cho-9": {
    "id": "t6-b10-dau-hieu-chia-het-cho-3-cho-9",
    "lessonNumber": 10,
    "title": "Bài 10: Dấu hiệu chia hết cho 3, cho 9",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Chia nhóm học tập đều",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "Số chia hết cho 3 có tổng các chữ số chia hết cho 3. Cho 9 có tổng chia hết cho 9."
    ],
    "traps": [
      "Chia hết cho 9 thì chắc chắn chia hết cho 3, nhưng ngược lại thì chưa chắc."
    ],
    "quizQuestions": [
      {
        "id": "sgk-10.1",
        "badge": "Câu 1",
        "question": "Trong các số {450; 123; 2 019; 2 025}, số nào chia hết cho 9?",
        "options": [
          "450 và 2 025 (vì tổng các chữ số bằng 9)",
          "123 và 2 019",
          "Chỉ có 450",
          "Tất cả các số"
        ],
        "correctIndex": 0,
        "explanation": "450 (4+5+0=9) và 2 025 (2+0+2+5=9) chia hết cho 9."
      },
      {
        "id": "sgk-10.2",
        "badge": "Câu 2",
        "question": "Trong các số {90; 630; 7 125; 8 136}, số nào chia hết cho 3 nhưng KHÔNG chia hết cho 9?",
        "options": [
          "7 125 (vì tổng bằng 15 chia hết cho 3, không chia hết cho 9)",
          "90",
          "630",
          "8 136"
        ],
        "correctIndex": 0,
        "explanation": "7 125 có tổng các chữ số là 15 (chia hết cho 3, không chia hết cho 9)."
      },
      {
        "id": "sgk-10.3",
        "badge": "Câu 3",
        "question": "Không tính giá trị, tổng A = 1 230 + 72 có chia hết cho 3 không?",
        "options": [
          "A chia hết cho 3 vì 1 230 ⋮ 3 và 72 ⋮ 3",
          "A không chia hết cho 3",
          "Chỉ có 1 230 chia hết cho 3",
          "Không xác định được"
        ],
        "correctIndex": 0,
        "explanation": "1 230 ⋮ 3, 72 ⋮ 3 ⇒ A ⋮ 3."
      },
      {
        "id": "sgk-10.4",
        "badge": "Câu 4",
        "question": "Thay dấu * bởi chữ số thích hợp để số 12*5 chia hết cho 3:",
        "options": [
          "* ∈ {1; 4; 7}",
          "* ∈ {0; 3; 6; 9}",
          "* ∈ {2; 5; 8}",
          "* = 1"
        ],
        "correctIndex": 0,
        "explanation": "1 + 2 + * + 5 = 8 + *. Để 8 + * ⋮ 3 thì * ∈ {1; 4; 7}."
      },
      {
        "id": "sgk-10.5",
        "badge": "Câu 5",
        "question": "Dùng ba trong bốn chữ số 4; 5; 3; 0 hãy ghép thành số tự nhiên có ba chữ số chia hết cho 9:",
        "options": [
          "450; 540; 405; 504",
          "435; 534",
          "340; 430",
          "453; 543"
        ],
        "correctIndex": 0,
        "explanation": "Chọn 4, 5, 0 có tổng bằng 9. Ghép được: 450; 540; 405; 504."
      },
      {
        "id": "sgk-10.6",
        "badge": "Câu 6",
        "question": "Mật mã mở khóa là số có 4 chữ số chia hết cho cả 2; 5 và 9. Số nào sau đây có thể là mật mã?",
        "options": [
          "1 350 (tận cùng 0 và tổng 1+3+5+0 = 9)",
          "1 355",
          "1 354",
          "1 300"
        ],
        "correctIndex": 0,
        "explanation": "1 350 thỏa mãn chia hết cho 2, 5 và 9."
      }
    ]
  },
  "t6-b12-uoc-chung-va-uoc-chung-lon-nhat": {
    "id": "t6-b12-uoc-chung-va-uoc-chung-lon-nhat",
    "lessonNumber": 12,
    "title": "Bài 12: Ước chung và ước chung lớn nhất",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Chia tổ học tập đồng đều nhất",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "ƯCLN của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của các số đó."
    ],
    "traps": [
      "ƯCLN(a, 1) = 1 với mọi số tự nhiên a."
    ],
    "quizQuestions": [
      {
        "id": "sgk-12.1",
        "badge": "Câu 1",
        "question": "Tìm ước chung lớn nhất của 40 và 70 (ƯCLN(40, 70)):",
        "options": [
          "10",
          "5",
          "2",
          "20"
        ],
        "correctIndex": 0,
        "explanation": "40 = 2³ · 5, 70 = 2 · 5 · 7. ƯCLN(40, 70) = 2 · 5 = 10."
      },
      {
        "id": "sgk-12.2",
        "badge": "Câu 2",
        "question": "Tìm ƯCLN của ba số 12, 80 và 56:",
        "options": [
          "4",
          "2",
          "8",
          "6"
        ],
        "correctIndex": 0,
        "explanation": "12 = 2² · 3, 80 = 2⁴ · 5, 56 = 2³ · 7. Thừa số nguyên tố chung với số mũ nhỏ nhất là 2² = 4."
      },
      {
        "id": "sgk-12.3",
        "badge": "Câu 3",
        "question": "Rút gọn phân số 24/108 về dạng tối giản bằng cách chia cho ƯCLN:",
        "options": [
          "2/9 (chia cả tử và mẫu cho ƯCLN = 12)",
          "4/18",
          "6/27",
          "8/36"
        ],
        "correctIndex": 0,
        "explanation": "ƯCLN(24, 108) = 12. Chia cả tử và mẫu cho 12: 24 : 12 = 2, 108 : 12 = 9 ⇒ 2/9."
      }
    ]
  },
  "t6-b13-boi-chung-va-boi-chung-nho-nhat": {
    "id": "t6-b13-boi-chung-va-boi-chung-nho-nhat",
    "lessonNumber": 13,
    "title": "Bài 13: Bội chung và bội chung nhỏ nhất",
    "bookChapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "scenarioTitle": "Tình huống: Đèn nhấp nháy cùng lúc",
    "scenarioFrames": [],
    "theorySections": [],
    "tips": [
      "BCNN là số nhỏ nhất khác 0 trong tập hợp các bội chung."
    ],
    "traps": [
      "BCNN(a, b, 1) = BCNN(a, b)."
    ],
    "quizQuestions": [
      {
        "id": "sgk-13.1",
        "badge": "Câu 1",
        "question": "Tìm bội chung nhỏ nhất khác 0 của 6 và 14 (BCNN(6, 14)):",
        "options": [
          "42",
          "84",
          "28",
          "14"
        ],
        "correctIndex": 0,
        "explanation": "6 = 2 · 3, 14 = 2 · 7. BCNN(6, 14) = 2 · 3 · 7 = 42."
      },
      {
        "id": "sgk-13.2",
        "badge": "Câu 2",
        "question": "Tìm BCNN của ba số 18, 24 và 40:",
        "options": [
          "360",
          "720",
          "180",
          "120"
        ],
        "correctIndex": 0,
        "explanation": "18 = 2 · 3², 24 = 2³ · 3, 40 = 2³ · 5. BCNN = 2³ · 3² · 5 = 8 · 9 · 5 = 360."
      },
      {
        "id": "sgk-13.3",
        "badge": "Câu 3",
        "question": "Quy đồng mẫu hai phân số 5/12 và 7/15 với mẫu số chung nhỏ nhất là:",
        "options": [
          "60 (vì BCNN(12, 15) = 60)",
          "180",
          "120",
          "30"
        ],
        "correctIndex": 0,
        "explanation": "BCNN(12, 15) = 60. Mẫu chung nhỏ nhất là 60."
      }
    ]
  }
};

/**
 * Hàm lấy chi tiết bài học Lớp 6 chuẩn SGK
 */
export function getGrade6LessonDetail(lessonItem: LessonItem, gradeData: GradeData): DetailedLessonData {
  if (GRADE_6_DETAILED_LESSONS[lessonItem.id]) {
    return GRADE_6_DETAILED_LESSONS[lessonItem.id];
  }

  const parentChapter = gradeData.chapters.find((c) => c.lessons.some((l) => l.id === lessonItem.id)) || gradeData.chapters[0];
  const formulas = lessonItem.keyFormulas && lessonItem.keyFormulas.length > 0 ? lessonItem.keyFormulas : ["A = B"];

  return {
    id: lessonItem.id,
    lessonNumber: lessonItem.lessonNumber,
    title: lessonItem.title,
    bookChapter: parentChapter?.title || "SGK Toán 6 - Kết Nối Tri Thức",
    scenarioTitle: `Tình Huống: ${lessonItem.title}`,
    scenarioFrames: [],
    theorySections: [],
    tips: ["Nắm chắc định lý và quy tắc thực hiện phép toán trong SGK."],
    traps: ["Luôn kiểm tra kỹ điều kiện của bài toán."],
    interactiveType: "default",
    quizQuestions: [
      {
        id: `sgk-${lessonItem.lessonNumber}.1`,
        badge: `Bài ${lessonItem.lessonNumber}.1 SGK Toán 6`,
        question: `Theo bài học "${lessonItem.title}", khẳng định nào sau đây là CHUẨN XÁC nhất?`,
        options: [
          `Định lý cốt lõi: ${formulas[0]}`,
          "Chỉ áp dụng với các số tự nhiên chẵn",
          "Không có tính chất giao hoán và phân phối",
          "Bỏ qua điều kiện xác định",
        ],
        correctIndex: 0,
        explanation: `Kiến thức cốt lõi SGK: Công thức và quy tắc chuẩn của bài học là ${formulas[0]}.`,
      },
    ],
  };
}
