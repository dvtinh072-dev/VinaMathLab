import { QuizQuestion } from "@/data/allGradesLessonsData";

/**
 * BỘ ĐỀ LUYỆN TẬP THÊM & CÁC BÀI TẬP TỪ NGUỒN TÀI LIỆU DỰ ÁN CHO TOÁN 7
 * 100% trích xuất từ TOÁN 7 - BỘ 2: Toán 7 Chương Số hữu tỉ & SGK Toán 7
 */
export const GRADE_7_AI_PRACTICE_DATA: { [lessonId: string]: QuizQuestion[] } = {
  "t7-b1-tap-hop-so-huu-ti": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10, đủ các dạng bài)
    {
      "id": "ai-7.1.1",
      "badge": "Luyện thêm 1 - Kí hiệu tập hợp",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 2 (Trang 1)",
      "question": "Cho hai số $-3$ và $-\\frac{2}{3}$. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$-3 \\in \\mathbb{Z}$ và $-\\frac{2}{3} \\notin \\mathbb{Z}$",
        "$-3 \\notin \\mathbb{Q}$",
        "$-\\frac{2}{3} \\in \\mathbb{Z}$",
        "$-3 \\in \\mathbb{N}$"
      ],
      "correctIndex": 0,
      "explanation": "$-3$ là số nguyên nên $-3 \\in \\mathbb{Z}$; $-\\frac{2}{3}$ là phân số không rút gọn thành số nguyên nên $-\\frac{2}{3} \\notin \\mathbb{Z}$."
    },
    {
      "id": "ai-7.1.2",
      "badge": "Luyện thêm 2 - Cặp số hữu tỉ bằng nhau",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 29 & Câu 34",
      "question": "Cặp số hữu tỉ nào dưới đây biểu diễn cùng một số hữu tỉ (bằng nhau)?",
      "options": [
        "$-\\frac{12}{8}$ và $-\\frac{3}{2}$",
        "$-\\frac{3}{5}$ và $\\frac{6}{10}$",
        "$0,4$ và $\\frac{1}{4}$",
        "$0,1$ và $10$"
      ],
      "correctIndex": 0,
      "explanation": "Ta rút gọn: $-\\frac{12}{8} = \\frac{-12 : 4}{8 : 4} = -\\frac{3}{2}$. Do đó cặp số $-\\frac{12}{8}$ và $-\\frac{3}{2}$ bằng nhau."
    },
    {
      "id": "ai-7.1.3",
      "badge": "Luyện thêm 3 - Số đối của số thập phân",
      "isAiGenerated": true,
      "source": "SGK Toán 7 Bài 1 Trang 7",
      "question": "Số đối của số hữu tỉ $-1,75$ là:",
      "options": [
        "$1,75$",
        "$-1,75$",
        "$-\\frac{7}{4}$",
        "$\\frac{4}{7}$"
      ],
      "correctIndex": 0,
      "explanation": "Số đối của số âm $-a$ là số dương $a$. Ta có số đối của $-1,75$ là $1,75 = \\frac{175}{100} = \\frac{7}{4}$."
    },
    {
      "id": "ai-7.1.4",
      "badge": "Luyện thêm 4 - So sánh số thập phân và phân số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 5c",
      "question": "So sánh hai số hữu tỉ $x = -0,75$ và $y = -\\frac{3}{4}$, khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$x = y$",
        "$x > y$",
        "$x < y$",
        "$x \\ne y$"
      ],
      "correctIndex": 0,
      "explanation": "Ta đổi sang phân số: $x = -0,75 = -\\frac{75}{100} = -\\frac{3}{4}$. Do đó $x = y$."
    },
    {
      "id": "ai-7.1.5",
      "badge": "Luyện thêm 5 - So sánh số âm và số dương",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 6",
      "question": "So sánh hai số hữu tỉ $a = -\\frac{2}{3}$ và $b = \\frac{1}{200}$, khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$a < b$",
        "$a > b$",
        "$a = b$",
        "Không so sánh được"
      ],
      "correctIndex": 0,
      "explanation": "Vì $a = -\\frac{2}{3} < 0$ (số âm) và $b = \\frac{1}{200} > 0$ (số dương) nên theo quy tắc so sánh, số âm luôn nhỏ hơn số dương ($a < b$)."
    },
    {
      "id": "ai-7.1.6",
      "badge": "Luyện thêm 6 - Sắp xếp thứ tự tăng dần",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 8",
      "question": "Sắp xếp các số hữu tỉ sau theo thứ tự tăng dần: $-\\frac{5}{6};\\ 0;\\ 0,3;\\ -1\\frac{2}{3}$.",
      "options": [
        "$-1\\frac{2}{3} < -\\frac{5}{6} < 0 < 0,3$",
        "$-\\frac{5}{6} < -1\\frac{2}{3} < 0 < 0,3$",
        "$0 < 0,3 < -\\frac{5}{6} < -1\\frac{2}{3}$",
        "$0,3 < 0 < -\\frac{5}{6} < -1\\frac{2}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $-1\\frac{2}{3} = -\\frac{5}{3} = -\\frac{10}{6}$. Vì $-10 < -5 < 0 < 1,8$ nên $-1\\frac{2}{3} < -\\frac{5}{6} < 0 < 0,3$."
    },
    {
      "id": "ai-7.1.7",
      "badge": "Luyện thêm 7 - Đếm số phân số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 36",
      "question": "Có bao nhiêu phân số có mẫu số bằng 7, lớn hơn $-\\frac{6}{7}$ và nhỏ hơn $-\\frac{2}{7}$?",
      "options": [
        "3 phân số",
        "2 phân số",
        "4 phân số",
        "5 phân số"
      ],
      "correctIndex": 0,
      "explanation": "Các phân số có mẫu là 7 thỏa mãn $-\\frac{6}{7} < \\frac{x}{7} < -\\frac{2}{7}$ là các phân số có tử số $x \\in \\{-5; -4; -3\\}$. Vậy có đúng 3 phân số."
    },
    {
      "id": "ai-7.1.8",
      "badge": "Luyện thêm 8 - Tính chất bắc cầu",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 9",
      "question": "Cho ba số hữu tỉ $x, y, z$. Biết rằng $x < 0$ và $0 < z$. Theo tính chất bắc cầu, kết luận nào sau đây là ĐÚNG?",
      "options": [
        "$x < z$",
        "$x > z$",
        "$x = z$",
        "$x + z < 0$"
      ],
      "correctIndex": 0,
      "explanation": "Do $x < 0$ và $0 < z$, áp dụng tính chất bắc cầu qua số trung gian 0 ta có: $x < z$."
    },
    {
      "id": "ai-7.1.9",
      "badge": "Luyện thêm 9 - Khoảng cách trên trục số",
      "isAiGenerated": true,
      "source": "SGK Toán 7 Bài 1 Trang 7",
      "question": "Trên trục số, khoảng cách giữa điểm biểu diễn số $-\\frac{1}{2}$ và điểm biểu diễn số $\\frac{1}{2}$ là:",
      "options": [
        "1 đơn vị",
        "0 đơn vị",
        "2 đơn vị",
        "$\\frac{1}{2}$ đơn vị"
      ],
      "correctIndex": 0,
      "explanation": "Hai điểm $-\\frac{1}{2}$ và $\\frac{1}{2}$ nằm đối xứng nhau qua gốc 0, mỗi điểm cách gốc 0 một khoảng $\\frac{1}{2}$ đơn vị. Do đó khoảng cách giữa chúng là $\\frac{1}{2} + \\frac{1}{2} = 1$ đơn vị."
    },
    {
      "id": "ai-7.1.10",
      "badge": "Luyện thêm 10 - Ứng dụng thực tế nhiệt độ",
      "isAiGenerated": true,
      "source": "SGK Toán 7 Trang 9 Bài tập thực tế",
      "question": "Nhiệt độ đo được tại đỉnh núi Fansipan vào bốn thời điểm trong ngày lần lượt là: $-1,5^\\circ\\text{C};\\ 0^\\circ\\text{C};\\ -3^\\circ\\text{C};\\ 2,5^\\circ\\text{C}$. Thời điểm nào có nhiệt độ thấp nhất?",
      "options": [
        "Thời điểm nhiệt độ là $-3^\\circ\\text{C}$",
        "Thời điểm nhiệt độ là $-1,5^\\circ\\text{C}$",
        "Thời điểm nhiệt độ là $0^\\circ\\text{C}$",
        "Thời điểm nhiệt độ là $2,5^\\circ\\text{C}$"
      ],
      "correctIndex": 0,
      "explanation": "So sánh các số hữu tỉ: $-3 < -1,5 < 0 < 2,5$. Số nhỏ nhất là $-3$, do đó thời điểm nhiệt độ $-3^\\circ\\text{C}$ là lạnh nhất (nhiệt độ thấp nhất)."
    },

    // CÁC CÂU CÒN LẠI TRONG TÀI LIỆU NGUỒN (Mục Thêm bài từ AI)
    {
      "id": "ai-7.1.11",
      "badge": "Bài tập mở rộng 1 - Rút gọn cùng biểu diễn",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 4 (Trang 2)",
      "question": "Trong các phân số sau: $-\\frac{14}{35};\\ -\\frac{27}{63};\\ -\\frac{26}{65};\\ -\\frac{36}{84};\\ -\\frac{34}{85}$, những phân số nào biểu diễn cùng số hữu tỉ $-\\frac{2}{5}$?",
      "options": [
        "$-\\frac{14}{35};\\ -\\frac{26}{65};\\ -\\frac{34}{85}$",
        "$-\\frac{27}{63};\\ -\\frac{36}{84}$",
        "$-\\frac{14}{35};\\ -\\frac{27}{63};\\ -\\frac{36}{84}$",
        "$-\\frac{26}{65};\\ -\\frac{34}{85};\\ -\\frac{36}{84}$"
      ],
      "correctIndex": 0,
      "explanation": "Rút gọn từng phân số:\n• $-\\frac{14}{35} = -\\frac{2}{5}$\n• $-\\frac{27}{63} = -\\frac{3}{7}$\n• $-\\frac{26}{65} = -\\frac{2}{5}$\n• $-\\frac{36}{84} = -\\frac{3}{7}$\n• $-\\frac{34}{85} = -\\frac{2}{5}$.\nVậy các phân số biểu diễn $-\\frac{2}{5}$ là $-\\frac{14}{35};\\ -\\frac{26}{65};\\ -\\frac{34}{85}$."
    },
    {
      "id": "ai-7.1.12",
      "badge": "Bài tập mở rộng 2 - So sánh phân số lớn",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 6.2",
      "question": "So sánh hai phân số $\\frac{139}{138}$ và $\\frac{1\\ 375}{1\\ 376}$, khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "$\\frac{139}{138} > \\frac{1\\ 375}{1\\ 376}$",
        "$\\frac{139}{138} < \\frac{1\\ 375}{1\\ 376}$",
        "$\\frac{139}{138} = \\frac{1\\ 375}{1\\ 376}$",
        "Không so sánh được"
      ],
      "correctIndex": 0,
      "explanation": "So sánh qua số trung gian 1:\n• $\\frac{139}{138} = 1 + \\frac{1}{138} > 1$\n• $\\frac{1\\ 375}{1\\ 376} = 1 - \\frac{1}{1\\ 376} < 1$.\nVì $\\frac{139}{138} > 1 > \\frac{1\\ 375}{1\\ 376}$ nên $\\frac{139}{138} > \\frac{1\\ 375}{1\\ 376}$."
    },
    {
      "id": "ai-7.1.13",
      "badge": "Bài tập mở rộng 3 - So sánh đúng",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 33",
      "question": "So sánh nào dưới đây là ĐÚNG?",
      "options": [
        "$-\\frac{9}{2} < -\\frac{7}{2}$",
        "$-\\frac{9}{2} > -\\frac{7}{2}$",
        "$\\frac{11}{5} < \\frac{11}{6}$",
        "$\\frac{79}{5} < \\frac{77}{4}$"
      ],
      "correctIndex": 0,
      "explanation": "Hai phân số có cùng mẫu số dương là 2. Vì $-9 < -7$ nên $-\\frac{9}{2} < -\\frac{7}{2}$."
    },
    {
      "id": "ai-7.1.14",
      "badge": "Bài tập mở rộng 4 - Sắp xếp dãy số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 35",
      "question": "Các số hữu tỉ $-\\frac{5}{11};\\ -\\frac{5}{9};\\ \\frac{7}{5};\\ \\frac{3}{5};\\ \\frac{18}{13}$ được sắp xếp theo thứ tự tăng dần là:",
      "options": [
        "$-\\frac{5}{9} < -\\frac{5}{11} < \\frac{3}{5} < \\frac{18}{13} < \\frac{7}{5}$",
        "$-\\frac{5}{11} < -\\frac{5}{9} < \\frac{3}{5} < \\frac{18}{13} < \\frac{7}{5}$",
        "$-\\frac{5}{9} < -\\frac{5}{11} < \\frac{7}{5} < \\frac{3}{5} < \\frac{18}{13}$",
        "$-\\frac{5}{11} < -\\frac{5}{9} < \\frac{18}{13} < \\frac{7}{5} < \\frac{3}{5}$"
      ],
      "correctIndex": 0,
      "explanation": "• Nhóm số âm: $-\\frac{5}{9}$ và $-\\frac{5}{11}$: vì $\\frac{5}{9} > \\frac{5}{11}$ nên $-\\frac{5}{9} < -\\frac{5}{11}$.\n• Nhóm số dương: $\\frac{3}{5} < 1$; $\\frac{18}{13} \\approx 1,38$; $\\frac{7}{5} = 1,4$. Vậy $\\frac{3}{5} < \\frac{18}{13} < \\frac{7}{5}$.\nKết hợp lại: $-\\frac{5}{9} < -\\frac{5}{11} < \\frac{3}{5} < \\frac{18}{13} < \\frac{7}{5}$."
    },
    {
      "id": "ai-7.1.15",
      "badge": "Bài tập mở rộng 5 - Tính chất số hữu tỉ xen giữa",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 11 (Trang 3)",
      "question": "Cho hai số hữu tỉ $x = \\frac{a}{m}$ và $y = \\frac{b}{m}$ ($a, b, m \\in \\mathbb{Z},\\ m > 0$). Nếu $x < y$ thì số hữu tỉ $z = \\frac{a + b}{2m}$ thỏa mãn điều kiện nào?",
      "options": [
        "$x < z < y$",
        "$z < x < y$",
        "$x < y < z$",
        "$z = x + y$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $x < y$ nên $a < b$. Ta có $a + a < a + b < b + b \\Leftrightarrow 2a < a + b < 2b$. Chia cả ba vế cho $2m > 0$ ta được: $\\frac{a}{m} < \\frac{a + b}{2m} < \\frac{b}{m}$, tức là $x < z < y$ (số hữu tỉ $z$ luôn nằm giữa $x$ và $y$)."
    }
  ],
  "t7-b2-cong-tru-nhan-chia-so-huu-ti": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10)
    {
      "id": "ai-7.2.1",
      "badge": "Luyện thêm 1 - Cộng hai số hữu tỉ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 1.2 (Trang 4)",
      "question": "Kết quả của phép tính $-\\frac{5}{7} + \\frac{8}{7}$ là:",
      "options": [
        "$\\frac{3}{7}$",
        "$-\\frac{3}{7}$",
        "$\\frac{13}{7}$",
        "$-\\frac{13}{7}$"
      ],
      "correctIndex": 0,
      "explanation": "Cộng hai phân số cùng mẫu: $-\\frac{5}{7} + \\frac{8}{7} = \\frac{-5 + 8}{7} = \\frac{3}{7}$."
    },
    {
      "id": "ai-7.2.2",
      "badge": "Luyện thêm 2 - Trừ hai số hữu tỉ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 3.5 (Trang 5)",
      "question": "Kết quả của phép tính $\\frac{1}{5} - \\frac{3}{4}$ là:",
      "options": [
        "$-\\frac{11}{20}$",
        "$\\frac{11}{20}$",
        "$-\\frac{2}{1}$",
        "$-\\frac{7}{20}$"
      ],
      "correctIndex": 0,
      "explanation": "Quy đồng mẫu số chung 20: $\\frac{1}{5} - \\frac{3}{4} = \\frac{4}{20} - \\frac{15}{20} = -\\frac{11}{20}$."
    },
    {
      "id": "ai-7.2.3",
      "badge": "Luyện thêm 3 - Tìm x cơ bản",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 2 (Trang 34)",
      "question": "Giá trị của $x$ trong đẳng thức $x - \\frac{1}{2} = \\frac{1}{2}$ là:",
      "options": [
        "$1$",
        "$0$",
        "$\\frac{1}{4}$",
        "$-\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng quy tắc chuyển vế: $x = \\frac{1}{2} + \\frac{1}{2} = 1$."
    },
    {
      "id": "ai-7.2.4",
      "badge": "Luyện thêm 4 - Tìm x nâng cao một bước",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 11 (Trang 34)",
      "question": "Giá trị của $x$ trong phép tính $2x - \\frac{1}{3} = \\frac{1}{2}$ là:",
      "options": [
        "$\\frac{5}{12}$",
        "$\\frac{5}{6}$",
        "$\\frac{1}{12}$",
        "$-\\frac{1}{12}$"
      ],
      "correctIndex": 0,
      "explanation": "Chuyển $-\\frac{1}{3}$ sang vế phải: $2x = \\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6} \\Rightarrow x = \\frac{5}{6} : 2 = \\frac{5}{12}$."
    },
    {
      "id": "ai-7.2.5",
      "badge": "Luyện thêm 5 - Tính giá trị ngoặc kép",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 3 (Trang 34)",
      "question": "Giá trị của biểu thức $-\\frac{1}{4} - \\left(\\frac{3}{2} + \\frac{1}{4}\\right)$ là:",
      "options": [
        "$-2$",
        "$2$",
        "$-\\frac{3}{2}$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Phá ngoặc có dấu trừ: $-\\frac{1}{4} - \\frac{3}{2} - \\frac{1}{4} = \\left(-\\frac{1}{4} - \\frac{1}{4}\\right) - \\frac{3}{2} = -\\frac{1}{2} - \\frac{3}{2} = -2$."
    },
    {
      "id": "ai-7.2.6",
      "badge": "Luyện thêm 6 - Phép nhân rút gọn chéo",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 9.3 (Trang 7)",
      "question": "Kết quả của phép nhân $-\\frac{7}{3} \\cdot \\frac{9}{14}$ là:",
      "options": [
        "$-\\frac{3}{2}$",
        "$\\frac{3}{2}$",
        "$-\\frac{2}{3}$",
        "$-\\frac{63}{42}$"
      ],
      "correctIndex": 0,
      "explanation": "Rút gọn trước khi nhân: $-\\frac{7}{3} \\cdot \\frac{9}{14} = \\frac{-7 \\cdot 9}{3 \\cdot 14} = \\frac{-1 \\cdot 3}{1 \\cdot 2} = -\\frac{3}{2}$."
    },
    {
      "id": "ai-7.2.7",
      "badge": "Luyện thêm 7 - Phép chia số hữu tỉ cho số nguyên",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 10.6 (Trang 7)",
      "question": "Kết quả của phép chia $-\\frac{15}{7} : 10$ là:",
      "options": [
        "$-\\frac{3}{14}$",
        "$\\frac{3}{14}$",
        "$-\\frac{150}{7}$",
        "$-\\frac{2}{7}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta nhân với nghịch đảo của 10: $-\\frac{15}{7} : 10 = -\\frac{15}{7} \\cdot \\frac{1}{10} = -\\frac{15}{70} = -\\frac{3}{14}$."
    },
    {
      "id": "ai-7.2.8",
      "badge": "Luyện thêm 8 - Tính nhanh tích với số 0",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 12.1 (Trang 8)",
      "question": "Giá trị của biểu thức $\\left(\\frac{3}{4} - \\frac{1}{2} - \\frac{1}{4}\\right) \\cdot \\left(-\\frac{2\\ 026}{2\\ 027}\\right)$ là:",
      "options": [
        "$0$",
        "$1$",
        "$-\\frac{2\\ 026}{2\\ 027}$",
        "$\\frac{2\\ 026}{2\\ 027}$"
      ],
      "correctIndex": 0,
      "explanation": "Tính trong ngoặc trước: $\\frac{3}{4} - \\frac{1}{2} - \\frac{1}{4} = \\frac{3}{4} - \\frac{2}{4} - \\frac{1}{4} = 0$. Vì $0$ nhân với số nào cũng bằng $0$ nên kết quả là $0$."
    },
    {
      "id": "ai-7.2.9",
      "badge": "Luyện thêm 9 - Phép tính cho kết quả số hữu tỉ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 25 (Trang 35)",
      "question": "Phép tính nào dưới đây có kết quả bằng $-\\frac{3}{8}$?",
      "options": [
        "$\\frac{1}{8} - \\frac{1}{2}$",
        "$\\frac{1}{2} - \\frac{1}{8}$",
        "$-\\frac{1}{8} - \\frac{1}{4}$",
        "$-\\frac{1}{2} + \\frac{1}{8}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $\\frac{1}{8} - \\frac{1}{2} = \\frac{1}{8} - \\frac{4}{8} = -\\frac{3}{8}$."
    },
    {
      "id": "ai-7.2.10",
      "badge": "Luyện thêm 10 - Bài toán phân số công việc",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 15 (Trang 8)",
      "question": "Một xưởng may tuần thứ nhất làm được $\\frac{4}{15}$ kế hoạch tháng, tuần hai làm được $\\frac{7}{30}$ kế hoạch, tuần ba làm được $\\frac{3}{10}$ kế hoạch. Sau 3 tuần, xưởng đã hoàn thành bao nhiêu phần kế hoạch?",
      "options": [
        "$\\frac{4}{5}$ kế hoạch",
        "$\\frac{3}{4}$ kế hoạch",
        "$\\frac{5}{6}$ kế hoạch",
        "$\\frac{7}{10}$ kế hoạch"
      ],
      "correctIndex": 0,
      "explanation": "Cộng ba tuần: $\\frac{4}{15} + \\frac{7}{30} + \\frac{3}{10} = \\frac{8 + 7 + 9}{30} = \\frac{24}{30} = \\frac{4}{5}$ kế hoạch."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-7.2.11",
      "badge": "Bài tập mở rộng 1 - Mua sách giảm giá thành viên",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 17 (Trang 8)",
      "question": "Bạn Lan mua 3 quyển sách, mỗi quyển giá $120\\ 000$ đồng. Nhờ thẻ thành viên, Lan được giảm $10\\%$ trên tổng hóa đơn. Lan đưa cô thu ngân $350\\ 000$ đồng. Hỏi Lan được trả lại bao nhiêu tiền?",
      "options": [
        "$26\\ 000$ đồng",
        "$30\\ 000$ đồng",
        "$24\\ 000$ đồng",
        "$15\\ 000$ đồng"
      ],
      "correctIndex": 0,
      "explanation": "Tổng tiền sách: $3 \\times 120\\ 000 = 360\\ 000$ đồng. Tiền được giảm $10\\%$: $360\\ 000 \\times 10\\% = 36\\ 000$ đồng. Tiền Lan phải trả: $360\\ 000 - 36\\ 000 = 324\\ 000$ đồng. Tiền trả lại: $350\\ 000 - 324\\ 000 = 26\\ 000$ đồng."
    },
    {
      "id": "ai-7.2.12",
      "badge": "Bài tập mở rộng 2 - Diện tích hình chữ nhật hỗn số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 20 (Trang 9)",
      "question": "Một hình chữ nhật có chiều dài $4\\frac{3}{7}\\text{ m}$ và chiều rộng $2\\frac{1}{5}\\text{ m}$. Diện tích của hình chữ nhật đó là:",
      "options": [
        "$\\frac{341}{35}\\text{ m}^2$",
        "$\\frac{62}{35}\\text{ m}^2$",
        "$8\\frac{3}{35}\\text{ m}^2$",
        "$\\frac{310}{35}\\text{ m}^2$"
      ],
      "correctIndex": 0,
      "explanation": "Đổi hỗn số sang phân số: $4\\frac{3}{7} = \\frac{31}{7}\\text{ m}$; $2\\frac{1}{5} = \\frac{11}{5}\\text{ m}$. Diện tích: $S = \\frac{31}{7} \\times \\frac{11}{5} = \\frac{341}{35}\\text{ m}^2$."
    },
    {
      "id": "ai-7.2.13",
      "badge": "Bài tập mở rộng 3 - Thùng đựng gạo",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 21 (Trang 9)",
      "question": "Một thùng đựng gạo. Lần 1 lấy đi $\\frac{2}{5}$ số gạo. Lần 2 tiếp tục lấy đi $25\\%$ số gạo đó (tức $\\frac{1}{4}$ thùng ban đầu). Hỏi trong thùng còn lại bao nhiêu phần gạo?",
      "options": [
        "$\\frac{7}{20}$ số gạo",
        "$\\frac{9}{20}$ số gạo",
        "$\\frac{3}{10}$ số gạo",
        "$\\frac{1}{2}$ số gạo"
      ],
      "correctIndex": 0,
      "explanation": "Tổng số phần gạo đã lấy qua 2 lần: $\\frac{2}{5} + 25\\% = \\frac{2}{5} + \\frac{1}{4} = \\frac{8 + 5}{20} = \\frac{13}{20}$ số gạo. Số phần gạo còn lại trong thùng là: $1 - \\frac{13}{20} = \\frac{7}{20}$ số gạo."
    },
    {
      "id": "ai-7.2.14",
      "badge": "Bài tập mở rộng 4 - Tỉ số hành tinh",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 22 (Trang 9)",
      "question": "Đường kính Sao Kim bằng $\\frac{6}{25}$ đường kính Sao Thiên Vương. Đường kính Sao Thiên Vương bằng $\\frac{5}{14}$ đường kính Sao Mộc. Đường kính Sao Kim bằng bao nhiêu phần đường kính Sao Mộc?",
      "options": [
        "$\\frac{3}{35}$",
        "$\\frac{6}{70}$",
        "$\\frac{5}{14}$",
        "$\\frac{1}{5}$"
      ],
      "correctIndex": 0,
      "explanation": "Tỉ số giữa đường kính Sao Kim và Sao Mộc là tích hai tỉ số: $\\frac{6}{25} \\cdot \\frac{5}{14} = \\frac{6 \\cdot 5}{25 \\cdot 14} = \\frac{3 \\cdot 1}{5 \\cdot 7} = \\frac{3}{35}$."
    },
    {
      "id": "ai-7.2.15",
      "badge": "Bài tập mở rộng 5 - Nhiệt độ tầng đối lưu",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 23 (Trang 9)",
      "question": "Trong tầng đối lưu, cứ lên cao $100\\text{ m}$ thì nhiệt độ không khí giảm $0,6^\\circ\\text{C}$ (tức lên $1\\text{ km}$ giảm $6^\\circ\\text{C}$). Nhiệt độ mặt đất là $28^\\circ\\text{C}$. Nhiệt độ bên ngoài một khinh khí cầu đang bay ở độ cao $2,8\\text{ km}$ là:",
      "options": [
        "$11,2^\\circ\\text{C}$",
        "$16,8^\\circ\\text{C}$",
        "$12^\\circ\\text{C}$",
        "$10,5^\\circ\\text{C}$"
      ],
      "correctIndex": 0,
      "explanation": "Độ giảm nhiệt độ khi lên cao $2,8\\text{ km}$ là: $2,8 \\times 6 = 16,8^\\circ\\text{C}$. Nhiệt độ bên ngoài khinh khí cầu là: $28 - 16,8 = 11,2^\\circ\\text{C}$."
    }
  ],
  "t7-b3-luy-thua-so-huu-ti": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10)
    {
      "id": "ai-7.3.1",
      "badge": "Luyện thêm 1 - Lũy thừa phân số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 4.11 (Trang 17)",
      "question": "Kết quả của phép tính $\\left(-\\frac{3}{4}\\right)^2$ là:",
      "options": [
        "$\\frac{9}{16}$",
        "$-\\frac{9}{16}$",
        "$\\frac{6}{8}$",
        "$-\\frac{6}{8}$"
      ],
      "correctIndex": 0,
      "explanation": "Lũy thừa bậc 2 (chẵn) của số âm là số dương: $\\left(-\\frac{3}{4}\\right)^2 = \\frac{(-3)^2}{4^2} = \\frac{9}{16}$."
    },
    {
      "id": "ai-7.3.2",
      "badge": "Luyện thêm 2 - Lũy thừa số mũ bằng 0",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Mục 1 (Trang 15)",
      "question": "Giá trị của biểu thức $\\left(-\\frac{2\\ 026}{2\\ 027}\\right)^0$ là:",
      "options": [
        "$1$",
        "$0$",
        "$-1$",
        "$-\\frac{2\\ 026}{2\\ 027}$"
      ],
      "correctIndex": 0,
      "explanation": "Quy ước: Với mọi số hữu tỉ $x \\ne 0$, ta luôn có $x^0 = 1$."
    },
    {
      "id": "ai-7.3.3",
      "badge": "Luyện thêm 3 - Nhân hai lũy thừa cùng cơ số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 5.8 (Trang 17)",
      "question": "Thu gọn tích $(-3)^3 \\cdot (-3)^5$ dưới dạng một lũy thừa ta được:",
      "options": [
        "$(-3)^8$",
        "$(-3)^{15}$",
        "$3^{15}$",
        "$9^8$"
      ],
      "correctIndex": 0,
      "explanation": "Giữ nguyên cơ số và cộng các số mũ: $(-3)^3 \\cdot (-3)^5 = (-3)^{3+5} = (-3)^8$."
    },
    {
      "id": "ai-7.3.4",
      "badge": "Luyện thêm 4 - Chia hai lũy thừa cùng cơ số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 8.1 (Trang 19)",
      "question": "Kết quả của phép chia $(-0,2)^5 : (-0,2)^2$ là:",
      "options": [
        "$-0,008$",
        "$0,008$",
        "$-0,08$",
        "$0,08$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $(-0,2)^5 : (-0,2)^2 = (-0,2)^{5-2} = (-0,2)^3 = -0,008$."
    },
    {
      "id": "ai-7.3.5",
      "badge": "Luyện thêm 5 - Lũy thừa của lũy thừa",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 7.15 (Trang 19)",
      "question": "Giá trị của biểu thức $\\left[\\left(-\\frac{1}{2}\\right)^2\\right]^3$ là:",
      "options": [
        "$\\frac{1}{64}$",
        "$-\\frac{1}{64}$",
        "$\\frac{1}{32}$",
        "$-\\frac{1}{32}$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng công thức lũy thừa của lũy thừa: $\\left[\\left(-\\frac{1}{2}\\right)^2\\right]^3 = \\left(-\\frac{1}{2}\\right)^{2 \\cdot 3} = \\left(-\\frac{1}{2}\\right)^6 = \\frac{1}{64}$."
    },
    {
      "id": "ai-7.3.6",
      "badge": "Luyện thêm 6 - Lũy thừa của một tích",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 6.1 (Trang 18)",
      "question": "Viết tích $8^4 \\cdot 125^4$ dưới dạng lũy thừa của một số:",
      "options": [
        "$1\\ 000^4$",
        "$1\\ 000^{16}$",
        "$100^4$",
        "$1\\ 000^8$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng quy tắc lũy thừa của một tích: $8^4 \\cdot 125^4 = (8 \\cdot 125)^4 = 1\\ 000^4$."
    },
    {
      "id": "ai-7.3.7",
      "badge": "Luyện thêm 7 - Lũy thừa của một thương",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 9.1 (Trang 20)",
      "question": "Kết quả của phép chia $\\frac{15^3}{5^3}$ là:",
      "options": [
        "$27$",
        "$9$",
        "$3$",
        "$81$"
      ],
      "correctIndex": 0,
      "explanation": "Đưa về lũy thừa của một thương: $\\frac{15^3}{5^3} = \\left(\\frac{15}{5}\\right)^3 = 3^3 = 27$."
    },
    {
      "id": "ai-7.3.8",
      "badge": "Luyện thêm 8 - Tìm x ở số mũ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 12.1 (Trang 20)",
      "question": "Giá trị của số tự nhiên $x$ thỏa mãn $2^x = 32$ là:",
      "options": [
        "$x = 5$",
        "$x = 4$",
        "$x = 6$",
        "$x = 16$"
      ],
      "correctIndex": 0,
      "explanation": "Ta viết $32 = 2^5$. Do đó $2^x = 2^5 \\Rightarrow x = 5$."
    },
    {
      "id": "ai-7.3.9",
      "badge": "Luyện thêm 9 - Tìm x ở cơ số mũ lẻ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 45 (Trang 37)",
      "question": "Tìm số hữu tỉ $x$ thỏa mãn $(2x - 1)^3 = -\\frac{8}{125}$:",
      "options": [
        "$x = \\frac{3}{10}$",
        "$x = -\\frac{3}{10}$",
        "$x = \\frac{7}{10}$",
        "$x = -\\frac{7}{10}$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $-\\frac{8}{125} = \\left(-\\frac{2}{5}\\right)^3$. Vì số mũ 3 lẻ nên: $2x - 1 = -\\frac{2}{5} \\Rightarrow 2x = 1 - \\frac{2}{5} = \\frac{3}{5} \\Rightarrow x = \\frac{3}{10}$."
    },
    {
      "id": "ai-7.3.10",
      "badge": "Luyện thêm 10 - So sánh hai lũy thừa",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 42 (Trang 36)",
      "question": "Khẳng định nào dưới đây là ĐÚNG khi so sánh hai số $(-0,7)^9$ và $(-0,9)^{10}$?",
      "options": [
        "$(-0,7)^9 < (-0,9)^{10}$",
        "$(-0,7)^9 > (-0,9)^{10}$",
        "$(-0,7)^9 = (-0,9)^{10}$",
        "$(-0,7)^9 \\ge (-0,9)^{10}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì mũ 9 là số lẻ nên $(-0,7)^9 < 0$ (số âm). Vì mũ 10 là số chẵn nên $(-0,9)^{10} > 0$ (số dương). Số âm luôn nhỏ hơn số dương, do đó $(-0,7)^9 < (-0,9)^{10}$."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-7.3.11",
      "badge": "Bài tập mở rộng 1 - Rút gọn biểu thức lũy thừa",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 16.1 (Trang 22)",
      "question": "Giá trị của biểu thức $P = \\frac{4^3 \\cdot 9^7}{27^5 \\cdot 8^2}$ là:",
      "options": [
        "$\\frac{1}{3}$",
        "$3$",
        "$1$",
        "$\\frac{2}{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Biến đổi về cơ số nguyên tố 2 và 3:\n$P = \\frac{(2^2)^3 \\cdot (3^2)^7}{(3^3)^5 \\cdot (2^3)^2} = \\frac{2^6 \\cdot 3^{14}}{3^{15} \\cdot 2^6} = \\frac{1}{3}$."
    },
    {
      "id": "ai-7.3.12",
      "badge": "Bài tập mở rộng 2 - Tìm x cơ số mũ chẵn",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Bài 15.1 (Trang 21)",
      "question": "Tập hợp các giá trị của $x$ thỏa mãn $\\left(x - \\frac{1}{2}\\right)^2 = \\frac{1}{4}$ là:",
      "options": [
        "$x \\in \\{0;\\ 1\\}$",
        "$x = 1$",
        "$x = 0$",
        "$x = \\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$ nên có 2 trường hợp:\n• TH1: $x - \\frac{1}{2} = \\frac{1}{2} \\Rightarrow x = 1$.\n• TH2: $x - \\frac{1}{2} = -\\frac{1}{2} \\Rightarrow x = 0$.\nVậy $x \\in \\{0;\\ 1\\}$."
    },
    {
      "id": "ai-7.3.13",
      "badge": "Bài tập mở rộng 3 - Đếm số chữ số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 7 Câu 46 (Trang 37)",
      "question": "Số $A = 2^{12} \\cdot 5^8$ có bao nhiêu chữ số khi viết trong hệ thập phân?",
      "options": [
        "$10\\text{ chữ số}$",
        "$9\\text{ chữ số}$",
        "$11\\text{ chữ số}$",
        "$12\\text{ chữ số}$"
      ],
      "correctIndex": 0,
      "explanation": "Tách số mũ để ghép thành lũy thừa của 10:\n$A = 2^4 \\cdot (2^8 \\cdot 5^8) = 16 \\cdot (2 \\cdot 5)^8 = 16 \\cdot 10^8 = 1\\ 600\\ 000\\ 000$.\nSố này gồm 2 chữ số của 16 và 8 chữ số 0, tổng cộng có $2 + 8 = 10$ chữ số."
    },
    {
      "id": "ai-7.3.14",
      "badge": "Bài tập mở rộng 4 - Khối lượng Trái Đất và Mặt Trăng",
      "isAiGenerated": true,
      "source": "SGK Toán 7 Bài 1.24 (Trang 21)",
      "question": "Khối lượng của Trái Đất khoảng $6 \\cdot 10^{24}\\text{ kg}$, khối lượng của Mặt Trăng khoảng $7,5 \\cdot 10^{22}\\text{ kg}$. Khối lượng Trái Đất gấp khoảng bao nhiêu lần khối lượng Mặt Trăng?",
      "options": [
        "$80\\text{ lần}$",
        "$8\\text{ lần}$",
        "$800\\text{ lần}$",
        "$125\\text{ lần}$"
      ],
      "correctIndex": 0,
      "explanation": "Tỉ số giữa khối lượng Trái Đất và Mặt Trăng là:\n$\\frac{6 \\cdot 10^{24}}{7,5 \\cdot 10^{22}} = \\frac{6}{7,5} \\cdot 10^{24-22} = 0,8 \\cdot 10^2 = 0,8 \\cdot 100 = 80$ lần."
    },
    {
      "id": "ai-7.3.15",
      "badge": "Bài tập mở rộng 5 - Vận tốc ánh sáng và thời gian truyền",
      "isAiGenerated": true,
      "source": "SGK Toán 7 Trang 21",
      "question": "Vận tốc ánh sáng xấp xỉ $3 \\cdot 10^5\\text{ km/s}$. Khoảng cách từ Mặt Trời đến Trái Đất khoảng $1,5 \\cdot 10^8\\text{ km}$. Thời gian ánh sáng truyền từ Mặt Trời đến Trái Đất là:",
      "options": [
        "$500\\text{ giây}$",
        "$450\\text{ giây}$",
        "$50\\text{ giây}$",
        "$300\\text{ giây}$"
      ],
      "correctIndex": 0,
      "explanation": "Thời gian truyền là: $t = \\frac{s}{v} = \\frac{1,5 \\cdot 10^8}{3 \\cdot 10^5} = \\frac{1,5}{3} \\cdot 10^{8-5} = 0,5 \\cdot 10^3 = 500\\text{ giây}$ (khoảng 8 phút 20 giây)."
    }
  ]
};
