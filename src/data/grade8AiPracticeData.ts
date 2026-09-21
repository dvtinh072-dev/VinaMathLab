import type { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";

export const GRADE_8_AI_PRACTICE_DATA: Record<string, QuizQuestion[]> = {
  "t8-b1-don-thuc": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10)
    {
      "id": "ai-8.1.1",
      "badge": "Luyện thêm 1 - Nhận dạng đơn thức thu gọn",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Trang 8",
      "question": "Trong các đơn thức sau, đơn thức nào là đơn thức thu gọn?",
      "options": [
        "$-2x^2y^3z$",
        "$3x^2y \\cdot 2x$",
        "$-x \\cdot y \\cdot x$",
        "$5x^2 \\cdot y^2 \\cdot z \\cdot x$"
      ],
      "correctIndex": 0,
      "explanation": "Đơn thức $-2x^2y^3z$ có mỗi biến $x, y, z$ chỉ được viết một lần với số mũ nguyên dương nên là đơn thức thu gọn. Các đơn thức còn lại đều có biến xuất hiện từ 2 lần trở lên."
    },
    {
      "id": "ai-8.1.2",
      "badge": "Luyện thêm 2 - Thu gọn tích đơn thức",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Câu 5 (Trang 77)",
      "question": "Thu gọn đơn thức $x^2 \\cdot xyz$ ta được kết quả là:",
      "options": [
        "$x^3yz$",
        "$x^3y^2z$",
        "$x^2yz$",
        "$xyz^2$"
      ],
      "correctIndex": 0,
      "explanation": "Ta nhân các lũy thừa cùng cơ số $x$: $x^2 \\cdot xyz = (x^2 \\cdot x)yz = x^3yz$."
    },
    {
      "id": "ai-8.1.3",
      "badge": "Luyện thêm 3 - Bậc của số thực khác 0",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Mục 2 & SGK Trang 9",
      "question": "Bậc của đơn thức $-2\\ 026$ là:",
      "options": [
        "0",
        "1",
        "2",
        "2 026"
      ],
      "correctIndex": 0,
      "explanation": "Theo quy ước, một số thực khác 0 là một đơn thức có bậc bằng 0 (chỉ có số 0 là không có bậc)."
    },
    {
      "id": "ai-8.1.4",
      "badge": "Luyện thêm 4 - Bậc của đơn thức tích",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 8a (Trang 5)",
      "question": "Đơn thức thu gọn của tích $(-2x^2y) \\cdot (3xy^2)$ có bậc là:",
      "options": [
        "6",
        "5",
        "4",
        "7"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn tích: $(-2x^2y) \\cdot (3xy^2) = -6x^3y^3$. Bậc của đơn thức này là tổng số mũ của $x$ và $y$: $3 + 3 = 6$."
    },
    {
      "id": "ai-8.1.5",
      "badge": "Luyện thêm 5 - Cặp đơn thức đồng dạng",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 6 (Trang 2)",
      "question": "Cặp đơn thức nào sau đây đồng dạng với nhau?",
      "options": [
        "$-\\frac{1}{2}x^2y$ và $3x^2y$",
        "$2xy^2$ và $2x^2y$",
        "$5x^2y$ và $5x^2z$",
        "$-3xy$ và $-3x^2y^2$"
      ],
      "correctIndex": 0,
      "explanation": "Hai đơn thức $-\\frac{1}{2}x^2y$ và $3x^2y$ có hệ số khác 0 và có cùng phần biến là $x^2y$ nên đồng dạng với nhau."
    },
    {
      "id": "ai-8.1.6",
      "badge": "Luyện thêm 6 - Cộng nhiều đơn thức đồng dạng",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 8b (Trang 3)",
      "question": "Rút gọn biểu thức $2x^2y + 3x^2y + x^2y$ ta được:",
      "options": [
        "$6x^2y$",
        "$5x^2y$",
        "$6x^6y^3$",
        "$5x^6y^3$"
      ],
      "correctIndex": 0,
      "explanation": "Cộng các hệ số: $2x^2y + 3x^2y + x^2y = (2 + 3 + 1)x^2y = 6x^2y$."
    },
    {
      "id": "ai-8.1.7",
      "badge": "Luyện thêm 7 - Hiệu hai đơn thức phân số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 10b (Trang 6)",
      "question": "Kết quả của phép tính $2x^3y - \\frac{1}{4}x^3y$ là:",
      "options": [
        "$\\frac{7}{4}x^3y$",
        "$\\frac{9}{4}x^3y$",
        "$-\\frac{7}{4}x^3y$",
        "$\\frac{1}{4}x^3y$"
      ],
      "correctIndex": 0,
      "explanation": "Trừ hệ số: $\\left(2 - \\frac{1}{4}\\right)x^3y = \\left(\\frac{8}{4} - \\frac{1}{4}\\right)x^3y = \\frac{7}{4}x^3y$."
    },
    {
      "id": "ai-8.1.8",
      "badge": "Luyện thêm 8 - Tìm đơn thức chưa biết",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 10a (Trang 3)",
      "question": "Tìm đơn thức $M$ thỏa mãn: $M + 2x^4y^3 = -3x^4y^3$:",
      "options": [
        "$M = -5x^4y^3$",
        "$M = -x^4y^3$",
        "$M = 5x^4y^3$",
        "$M = x^4y^3$"
      ],
      "correctIndex": 0,
      "explanation": "Chuyển vế đổi dấu: $M = -3x^4y^3 - 2x^4y^3 = (-3 - 2)x^4y^3 = -5x^4y^3$."
    },
    {
      "id": "ai-8.1.9",
      "badge": "Luyện thêm 9 - Tính giá trị của đơn thức",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 13b (Trang 6)",
      "question": "Giá trị của đơn thức $-\\frac{1}{2}x^3y^2$ tại $x = -\\frac{1}{2}$ và $y = -4$ là:",
      "options": [
        "1",
        "-1",
        "2",
        "-2"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = -\\frac{1}{2}$ và $y = -4$ vào đơn thức:\n$-\\frac{1}{2} \\cdot \\left(-\\frac{1}{2}\\right)^3 \\cdot (-4)^2 = -\\frac{1}{2} \\cdot \\left(-\\frac{1}{8}\\right) \\cdot 16 = \\frac{1}{16} \\cdot 16 = 1$."
    },
    {
      "id": "ai-8.1.10",
      "badge": "Luyện thêm 10 - Đồng dạng với số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Mục 3 (Trang 1) & SGK Trang 9",
      "question": "Số nào dưới đây đồng dạng với đơn thức $-7$?",
      "options": [
        "$\\frac{2\\ 026}{2\\ 027}$",
        "$7x$",
        "$-7y$",
        "$x^0y$"
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa: Hai số thực khác 0 bất kì luôn được coi là hai đơn thức đồng dạng với nhau (có cùng phần biến là bậc 0). Do đó $\\frac{2\\ 026}{2\\ 027}$ đồng dạng với $-7$."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-8.1.11",
      "badge": "Bài tập mở rộng 1 - Thu gọn đơn thức có chứa tham số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 8f (Trang 5)",
      "question": "Thu gọn đơn thức $A = \\left(-\\frac{1}{4}a^2x\\right) \\cdot (-2bxy^2) \\cdot (-4x^2y)$ (với $a, b$ là hằng số) ta được:",
      "options": [
        "$-2a^2bx^4y^3$",
        "$2a^2bx^4y^3$",
        "$-2a^2bx^3y^3$",
        "$-a^2bx^4y^3$"
      ],
      "correctIndex": 0,
      "explanation": "Nhân các hệ số và các biến cùng loại với nhau:\n$A = \\left[\\left(-\\frac{1}{4}\\right) \\cdot (-2) \\cdot (-4)\\right] \\cdot (a^2 \\cdot b) \\cdot (x \\cdot x \\cdot x^2) \\cdot (y^2 \\cdot y) = -2a^2bx^4y^3$."
    },
    {
      "id": "ai-8.1.12",
      "badge": "Bài tập mở rộng 2 - Tìm đơn thức thỏa mãn hiệu",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 10b (Trang 3)",
      "question": "Tìm đơn thức $M$ biết rằng: $2x^3y^3 - M = 4x^3y^3$:",
      "options": [
        "$M = -2x^3y^3$",
        "$M = 2x^3y^3$",
        "$M = 6x^3y^3$",
        "$M = -6x^3y^3$"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng quy tắc tìm số trừ: $M = 2x^3y^3 - 4x^3y^3 = (2 - 4)x^3y^3 = -2x^3y^3$."
    },
    {
      "id": "ai-8.1.13",
      "badge": "Bài tập mở rộng 3 - Rút gọn rồi tính giá trị",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 9 (Trang 3)",
      "question": "Giá trị của biểu thức $P = 2\\ 011x^2y + 12x^2y - 2\\ 015x^2y$ tại $x = -1$ và $y = 2$ là:",
      "options": [
        "16",
        "-16",
        "8",
        "32"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn đa thức trước: $P = (2\\ 011 + 12 - 2\\ 015)x^2y = 8x^2y$.\nThay $x = -1; y = 2$ vào ta được: $P = 8 \\cdot (-1)^2 \\cdot 2 = 8 \\cdot 1 \\cdot 2 = 16$."
    },
    {
      "id": "ai-8.1.14",
      "badge": "Bài tập mở rộng 4 - Thể tích hình hộp chữ nhật",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Câu 13 (Trang 78) & SGK Bài 1.6 (Trang 10)",
      "question": "Một khối gỗ hình hộp chữ nhật có ba kích thước lần lượt là $x\\text{ (cm)}$, $2y\\text{ (cm)}$ và $3z\\text{ (cm)}$. Thể tích của khối gỗ đó được biểu thị bằng đơn thức:",
      "options": [
        "$6xyz\\text{ (cm}^3\\text{)}$",
        "$5xyz\\text{ (cm}^3\\text{)}$",
        "$6x^2y^2z^2\\text{ (cm}^3\\text{)}$",
        "$3xyz\\text{ (cm}^3\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Thể tích hình hộp chữ nhật bằng tích ba kích thước: $V = x \\cdot 2y \\cdot 3z = (1 \\cdot 2 \\cdot 3) \\cdot (x \\cdot y \\cdot z) = 6xyz\\text{ (cm}^3\\text{)}$."
    },
    {
      "id": "ai-8.1.15",
      "badge": "Bài tập mở rộng 5 - Diện tích xung quanh lăng trụ đứng",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Trang 10 & Chuyên đề Toán 8",
      "question": "Đáy của một hình lăng trụ đứng là tam giác đều có độ dài cạnh là $x\\text{ (cm)}$, chiều cao lăng trụ là $2y\\text{ (cm)}$. Đơn thức biểu thị diện tích xung quanh của hình lăng trụ đó là:",
      "options": [
        "$6xy\\text{ (cm}^2\\text{)}$",
        "$3xy\\text{ (cm}^2\\text{)}$",
        "$2xy\\text{ (cm}^2\\text{)}$",
        "$6x^2y\\text{ (cm}^2\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Chu vi đáy tam giác đều là $C = 3x\\text{ (cm)}$. Diện tích xung quanh hình lăng trụ là tích chu vi đáy với chiều cao: $S_{xq} = 3x \\cdot 2y = 6xy\\text{ (cm}^2\\text{)}$."
    }
  ],
  "t8-b2-da-thuc": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10)
    {
      "id": "ai-8.2.1",
      "badge": "Luyện thêm 1 - Nhận dạng đa thức thu gọn",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Trang 12",
      "question": "Trong các đa thức sau, đa thức nào là đa thức đã thu gọn?",
      "options": [
        "$x^3 - 2x^2y + 3xy^2 - y^3$",
        "$2x^2y + 3xy - x^2y$",
        "$x^2 + y^2 - 2xy + 3x^2$",
        "$5x - 3y + 2x - 1$"
      ],
      "correctIndex": 0,
      "explanation": "Đa thức $x^3 - 2x^2y + 3xy^2 - y^3$ không còn hai hạng tử nào đồng dạng nên là đa thức đã thu gọn. Các đa thức còn lại đều chứa các hạng tử đồng dạng chưa được nhóm và rút gọn."
    },
    {
      "id": "ai-8.2.2",
      "badge": "Luyện thêm 2 - Thu gọn đa thức bậc hai",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 11a (Trang 6)",
      "question": "Thu gọn đa thức $P = 3x^2 - 2xy + 5y^2 + 2x^2 + 2xy - 3y^2$ ta được:",
      "options": [
        "$5x^2 + 2y^2$",
        "$5x^2 - 4xy + 2y^2$",
        "$5x^2 + 8y^2$",
        "$x^2 + 2y^2$"
      ],
      "correctIndex": 0,
      "explanation": "Nhóm các hạng tử đồng dạng:\n$P = (3x^2 + 2x^2) + (-2xy + 2xy) + (5y^2 - 3y^2) = 5x^2 + 0 + 2y^2 = 5x^2 + 2y^2$."
    },
    {
      "id": "ai-8.2.3",
      "badge": "Luyện thêm 3 - Thu gọn đa thức có hệ số phân số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 11d (Trang 6)",
      "question": "Thu gọn đa thức $D = \\frac{3}{4}x^2y - \\frac{1}{2}xy + \\frac{1}{4}x^2y - \\frac{1}{2}xy$ ta được:",
      "options": [
        "$x^2y - xy$",
        "$x^2y + xy$",
        "$\\frac{1}{2}x^2y - xy$",
        "$x^2y - 2xy$"
      ],
      "correctIndex": 0,
      "explanation": "Nhóm các hạng tử đồng dạng:\n$D = \\left(\\frac{3}{4} + \\frac{1}{4}\\right)x^2y + \\left(-\\frac{1}{2} - \\frac{1}{2}\\right)xy = 1x^2y - 1xy = x^2y - xy$."
    },
    {
      "id": "ai-8.2.4",
      "badge": "Luyện thêm 4 - Bậc của đa thức thu gọn",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Trang 13",
      "question": "Bậc của đa thức $M = 4x^5y^2 - 3x^3y^3 + 7x^2y - 10$ là:",
      "options": [
        "7",
        "6",
        "5",
        "8"
      ],
      "correctIndex": 0,
      "explanation": "Đa thức đã thu gọn. Hạng tử $4x^5y^2$ có bậc $5 + 2 = 7$; $-3x^3y^3$ có bậc $3 + 3 = 6$; $7x^2y$ có bậc $3$; $-10$ có bậc $0$. Bậc cao nhất là 7, vậy bậc của đa thức là 7."
    },
    {
      "id": "ai-8.2.5",
      "badge": "Luyện thêm 5 - Bậc của hằng số khác 0",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Trang 13",
      "question": "Bậc của đa thức $P = 2\\ 026$ là:",
      "options": [
        "0",
        "1",
        "2 026",
        "2"
      ],
      "correctIndex": 0,
      "explanation": "Một số thực khác 0 là đa thức bậc 0. Do đó đa thức $P = 2\\ 026$ có bậc là 0."
    },
    {
      "id": "ai-8.2.6",
      "badge": "Luyện thêm 6 - Bậc của đa thức sau thu gọn",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 11c (Trang 6)",
      "question": "Bậc của đa thức $N = 2x^3y^4 - 5xy^3 + 3 - 2x^3y^4 + 6xy^3$ là:",
      "options": [
        "4",
        "7",
        "3",
        "0"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn đa thức trước: $N = (2x^3y^4 - 2x^3y^4) + (-5xy^3 + 6xy^3) + 3 = xy^3 + 3$. Bậc cao nhất là bậc của $xy^3$, tức $1 + 3 = 4$."
    },
    {
      "id": "ai-8.2.7",
      "badge": "Luyện thêm 7 - Hệ số của hạng tử bậc cao nhất",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 12a (Trang 6)",
      "question": "Sau khi thu gọn đa thức $F = 5x^3y^2 - 2x^2y^3 + 3x^3y^2 - 4$, hệ số của hạng tử có bậc cao nhất là:",
      "options": [
        "8",
        "5",
        "-2",
        "3"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn đa thức: $F = (5 + 3)x^3y^2 - 2x^2y^3 - 4 = 8x^3y^2 - 2x^2y^3 - 4$. Cả hai hạng tử $8x^3y^2$ và $-2x^2y^3$ đều có bậc $5$ cao nhất. Trong các phương án đưa ra, $8$ là hệ số của hạng tử $8x^3y^2$."
    },
    {
      "id": "ai-8.2.8",
      "badge": "Luyện thêm 8 - Tính giá trị của đa thức tại x = 0",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 12b (Trang 6)",
      "question": "Giá trị của đa thức $B = x^6 + 2x^2y^3 - x^5 + xy - xy^5 - 2$ tại $x = 0$ và $y = \\frac{1}{4}$ là:",
      "options": [
        "-2",
        "2",
        "0",
        "-\\frac{1}{4}"
      ],
      "correctIndex": 0,
      "explanation": "Vì $x = 0$ nên tất cả các hạng tử chứa $x$ đều nhận giá trị bằng 0. Do đó $B = 0 + 0 - 0 + 0 - 0 - 2 = -2$."
    },
    {
      "id": "ai-8.2.9",
      "badge": "Luyện thêm 9 - Tính giá trị đa thức nhanh",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Bài 1.11 (Trang 14)",
      "question": "Giá trị của đa thức $Q = x^2 - 2xy + y^2$ tại $x = 101$ và $y = 1$ là:",
      "options": [
        "10 000",
        "100",
        "1 000",
        "100 000"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 101, y = 1$ vào: $Q = 101^2 - 2 \\cdot 101 \\cdot 1 + 1^2 = 10\\ 201 - 202 + 1 = 10\\ 000$ (hoặc nhận xét $Q = (x - y)^2 = (101 - 1)^2 = 100^2 = 10\\ 000$)."
    },
    {
      "id": "ai-8.2.10",
      "badge": "Luyện thêm 10 - Thu gọn rồi tính giá trị đa thức",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 14a (Trang 6)",
      "question": "Thu gọn rồi tính giá trị của đa thức $A = 2x^2y + 3xy^2 - 2x^2y + xy^2$ tại $x = 5$ và $y = -2$:",
      "options": [
        "80",
        "-80",
        "40",
        "-40"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn: $A = (2x^2y - 2x^2y) + (3xy^2 + xy^2) = 4xy^2$.\nThay $x = 5, y = -2$ vào ta được: $A = 4 \\cdot 5 \\cdot (-2)^2 = 20 \\cdot 4 = 80$."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-8.2.11",
      "badge": "Bài tập mở rộng 1 - Thu gọn đa thức 3 biến",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 12c (Trang 4)",
      "question": "Thu gọn đa thức $C = x^2 + y^2 + z^2 + x^2 - y^2 + z^2 + x^2 + y^2 - z^2$ ta được:",
      "options": [
        "$3x^2 + y^2 + z^2$",
        "$3x^2 + 3y^2 + 3z^2$",
        "$x^2 + y^2 + z^2$",
        "$3x^2 - y^2 + z^2$"
      ],
      "correctIndex": 0,
      "explanation": "Nhóm các biến cùng loại:\n$C = (x^2 + x^2 + x^2) + (y^2 - y^2 + y^2) + (z^2 + z^2 - z^2) = 3x^2 + y^2 + z^2$."
    },
    {
      "id": "ai-8.2.12",
      "badge": "Bài tập mở rộng 2 - Tìm bậc của đa thức chứa tham số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Nâng cao Toán 8",
      "question": "Cho đa thức $P = (m - 2)x^3y^2 + 5x^2y^2 - 1$. Với giá trị nào của $m$ thì đa thức $P$ có bậc là $4$?",
      "options": [
        "$m = 2$",
        "$m \\ne 2$",
        "$m = 0$",
        "$m = 5$"
      ],
      "correctIndex": 0,
      "explanation": "Hạng tử $x^3y^2$ có bậc là $3 + 2 = 5$. Hạng tử $5x^2y^2$ có bậc là $2 + 2 = 4$. Để đa thức $P$ có bậc là 4 thì hạng tử bậc 5 phải triệt tiêu, tức hệ số $m - 2 = 0 \\Leftrightarrow m = 2$."
    },
    {
      "id": "ai-8.2.13",
      "badge": "Bài tập mở rộng 3 - Tính giá trị bằng cách nhóm hợp lý",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Bài 15 (Trang 6)",
      "question": "Cho $x + y = 3$. Giá trị của đa thức $M = 2x + 2y - 5$ là:",
      "options": [
        "1",
        "6",
        "-1",
        "11"
      ],
      "correctIndex": 0,
      "explanation": "Đặt thừa số chung: $M = 2(x + y) - 5$. Thay $x + y = 3$ vào ta được: $M = 2 \\cdot 3 - 5 = 6 - 5 = 1$."
    },
    {
      "id": "ai-8.2.14",
      "badge": "Bài tập mở rộng 4 - Ứng dụng diện tích mảnh vườn",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Bài 1.13 (Trang 14)",
      "question": "Một mảnh vườn hình chữ nhật có chiều dài là $2x + 3\\text{ (m)}$ và chiều rộng là $x + 1\\text{ (m)}$. Một lối đi xung quanh vườn có diện tích là $4x + 2\\text{ (m}^2\\text{)}$. Đa thức biểu thị diện tích phần đất trồng hoa còn lại là:",
      "options": [
        "$2x^2 + x + 1\\text{ (m}^2\\text{)}$",
        "$2x^2 + 9x + 5\\text{ (m}^2\\text{)}$",
        "$2x^2 + 5x + 3\\text{ (m}^2\\text{)}$",
        "$2x^2 - x + 1\\text{ (m}^2\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích toàn bộ mảnh vườn là: $(2x + 3)(x + 1) = 2x^2 + 2x + 3x + 3 = 2x^2 + 5x + 3\\text{ (m}^2\\text{)}$.\nDiện tích trồng hoa còn lại là: $(2x^2 + 5x + 3) - (4x + 2) = 2x^2 + x + 1\\text{ (m}^2\\text{)}$."
    },
    {
      "id": "ai-8.2.15",
      "badge": "Bài tập mở rộng 5 - Bài toán thực tế sơn bề mặt hai khối gỗ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Câu 13 (Trang 78)",
      "question": "Bác Huỳnh muốn sơn bề mặt của hai khối gỗ có dạng hình hộp chữ nhật. Khối thứ nhất có ba kích thước là $x, 2y, z\\text{ (cm)}$; khối thứ hai có ba kích thước là $2x, 2y, 3z\\text{ (cm)}$. Đa thức biểu thị tổng diện tích bề mặt hai khối gỗ cần sơn là:",
      "options": [
        "$12xy + 16yz + 14zx\\text{ (cm}^2\\text{)}$",
        "$10xy + 5yz + 4zx\\text{ (cm}^2\\text{)}$",
        "$2xy + 4yz + 10zx\\text{ (cm}^2\\text{)}$",
        "$6xy + 8yz + 7zx\\text{ (cm}^2\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích toàn phần khối 1: $S_1 = 2(x \\cdot 2y + 2y \\cdot z + z \\cdot x) = 4xy + 4yz + 2zx$.\nDiện tích toàn phần khối 2: $S_2 = 2(2x \\cdot 2y + 2y \\cdot 3z + 3z \\cdot 2x) = 8xy + 12yz + 12zx$.\nTổng diện tích cần sơn: $S = S_1 + S_2 = (4 + 8)xy + (4 + 12)yz + (2 + 12)zx = 12xy + 16yz + 14zx\\text{ (cm}^2\\text{)}$."
    }
  ],
  "t8-b3-phep-cong-tru-da-thuc": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10)
    {
      "id": "ai-8.3.1",
      "badge": "Luyện thêm 1 - Cộng hai đa thức đối nhau",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Trang 16",
      "question": "Cho $P = x^2 - y^2$ và $Q = y^2 - x^2$. Tổng $P + Q$ bằng:",
      "options": [
        "$0$",
        "$2x^2$",
        "$2y^2$",
        "$2x^2 - 2y^2$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $P + Q = (x^2 - y^2) + (y^2 - x^2) = (x^2 - x^2) + (-y^2 + y^2) = 0$."
    },
    {
      "id": "ai-8.3.2",
      "badge": "Luyện thêm 2 - Trừ hai đa thức cùng bậc",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 1c (Trang 11)",
      "question": "Cho $P = 2x^2 - 3y^2$ và $Q = 3x^2 - 4y^2$. Hiệu $P - Q$ bằng:",
      "options": [
        "$-x^2 + y^2$",
        "$5x^2 - 7y^2$",
        "$-x^2 - 7y^2$",
        "$x^2 - y^2$"
      ],
      "correctIndex": 0,
      "explanation": "Bỏ ngoặc đổi dấu: $P - Q = (2x^2 - 3y^2) - (3x^2 - 4y^2) = 2x^2 - 3y^2 - 3x^2 + 4y^2 = -x^2 + y^2$."
    },
    {
      "id": "ai-8.3.3",
      "badge": "Luyện thêm 3 - Rút gọn biểu thức tổng và hiệu",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 2a (Trang 8)",
      "question": "Rút gọn biểu thức $(x^2 - 2xy + y^2) + (2x^2 + 2xy - y^2)$ ta được:",
      "options": [
        "$3x^2$",
        "$3x^2 + 4xy$",
        "$3x^2 + 2y^2$",
        "$x^2 + 4xy$"
      ],
      "correctIndex": 0,
      "explanation": "Nhóm các hạng tử đồng dạng:\n$(x^2 + 2x^2) + (-2xy + 2xy) + (y^2 - y^2) = 3x^2 + 0 + 0 = 3x^2$."
    },
    {
      "id": "ai-8.3.4",
      "badge": "Luyện thêm 4 - Cộng đa thức chứa phân số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 1d (Trang 8)",
      "question": "Cho $A = \\frac{1}{2}x^2y + xy$ và $B = \\frac{3}{2}x^2y - 2xy$. Tổng $A + B$ là:",
      "options": [
        "$2x^2y - xy$",
        "$2x^2y + xy$",
        "$x^2y - xy$",
        "$2x^2y - 3xy$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có: $A + B = \\left(\\frac{1}{2} + \\frac{3}{2}\\right)x^2y + (1 - 2)xy = 2x^2y - xy$."
    },
    {
      "id": "ai-8.3.5",
      "badge": "Luyện thêm 5 - Hiệu hai đa thức có số hạng tự do",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Bài 1.15 (Trang 18)",
      "question": "Cho $A = 3x^2 - 5x + 7$ và $B = 2x^2 - 5x - 3$. Hiệu $A - B$ bằng:",
      "options": [
        "$x^2 + 10$",
        "$x^2 + 4$",
        "$5x^2 - 10x + 4$",
        "$x^2 - 10x + 10$"
      ],
      "correctIndex": 0,
      "explanation": "Bỏ ngoặc đổi dấu: $A - B = (3x^2 - 5x + 7) - (2x^2 - 5x - 3) = 3x^2 - 5x + 7 - 2x^2 + 5x + 3 = x^2 + 10$."
    },
    {
      "id": "ai-8.3.6",
      "badge": "Luyện thêm 6 - Bậc của tổng hai đa thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Trang 17",
      "question": "Cho hai đa thức $P = -3x^3y + 2x^2 - 1$ và $Q = 3x^3y + 5xy^2 + 4$. Bậc của đa thức $P + Q$ là:",
      "options": [
        "3",
        "4",
        "2",
        "0"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn tổng: $P + Q = (-3x^3y + 3x^3y) + 5xy^2 + 2x^2 + (-1 + 4) = 5xy^2 + 2x^2 + 3$. Hạng tử $5xy^2$ có bậc cao nhất là $1 + 2 = 3$. Vậy bậc của $P + Q$ là 3."
    },
    {
      "id": "ai-8.3.7",
      "badge": "Luyện thêm 7 - Tìm đa thức thỏa mãn hiệu bằng 0",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 12d (Trang 12)",
      "question": "Biết rằng $M - (x^2y - 3xy^2 + 2) = 0$. Đa thức $M$ là:",
      "options": [
        "$x^2y - 3xy^2 + 2$",
        "$-x^2y + 3xy^2 - 2$",
        "$x^2y + 3xy^2 + 2$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Vì hiệu bằng 0 nên số bị trừ bằng số trừ: $M = x^2y - 3xy^2 + 2$."
    },
    {
      "id": "ai-8.3.8",
      "badge": "Luyện thêm 8 - Tìm đa thức khi biết tổng",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 4a (Trang 8)",
      "question": "Cho $P + (2x^2 - y^2) = 5x^2 - 3y^2 + 1$. Đa thức $P$ là:",
      "options": [
        "$3x^2 - 2y^2 + 1$",
        "$7x^2 - 4y^2 + 1$",
        "$3x^2 - 4y^2 + 1$",
        "$3x^2 + 2y^2 + 1$"
      ],
      "correctIndex": 0,
      "explanation": "Chuyển vế đổi dấu: $P = (5x^2 - 3y^2 + 1) - (2x^2 - y^2) = 5x^2 - 3y^2 + 1 - 2x^2 + y^2 = 3x^2 - 2y^2 + 1$."
    },
    {
      "id": "ai-8.3.9",
      "badge": "Luyện thêm 9 - Tính giá trị của tổng hai đa thức",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Bài 14a (Trang 12)",
      "question": "Cho $A = 2x^2y + 3xy^2$ và $B = -x^2y + xy^2$. Giá trị của $A + B$ tại $x = 2, y = -1$ là:",
      "options": [
        "4",
        "-4",
        "12",
        "-12"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn tổng trước: $A + B = x^2y + 4xy^2$.\nThay $x = 2, y = -1$ vào: $2^2 \\cdot (-1) + 4 \\cdot 2 \\cdot (-1)^2 = -4 + 8 = 4$."
    },
    {
      "id": "ai-8.3.10",
      "badge": "Luyện thêm 10 - Tính giá trị của hiệu hai đa thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Bài 1.16 (Trang 18)",
      "question": "Cho $P = 5x^2 - 2xy + y^2$ và $Q = 4x^2 - 2xy + y^2$. Giá trị của $P - Q$ tại $x = -3, y = 100$ là:",
      "options": [
        "9",
        "-9",
        "109",
        "-91"
      ],
      "correctIndex": 0,
      "explanation": "Thu gọn hiệu: $P - Q = (5x^2 - 4x^2) + (-2xy + 2xy) + (y^2 - y^2) = x^2$.\nThay $x = -3$ vào ta được: $(-3)^2 = 9$ (không phụ thuộc vào $y$)."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-8.3.11",
      "badge": "Bài tập mở rộng 1 - Tính tổng ba đa thức nhiều biến",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8 Ví dụ 3d (Trang 8)",
      "question": "Cho ba đa thức $A = x^2 - 2xy + y^2$, $B = y^2 - 2yz + z^2$ và $C = z^2 - 2zx + x^2$. Kết quả của $A + B + C$ là:",
      "options": [
        "$2x^2 + 2y^2 + 2z^2 - 2xy - 2yz - 2zx$",
        "$2x^2 + 2y^2 + 2z^2$",
        "$0$",
        "$x^2 + y^2 + z^2 - xy - yz - zx$"
      ],
      "correctIndex": 0,
      "explanation": "Cộng vế theo vế và nhóm các đơn thức cùng loại:\n$A + B + C = (x^2 + x^2) + (y^2 + y^2) + (z^2 + z^2) - 2xy - 2yz - 2zx = 2x^2 + 2y^2 + 2z^2 - 2xy - 2yz - 2zx$."
    },
    {
      "id": "ai-8.3.12",
      "badge": "Bài tập mở rộng 2 - Tìm tham số để triệt tiêu bậc cao nhất",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Nâng cao Toán 8",
      "question": "Cho $A = (m - 1)x^3y + 2x^2 - 5$ và $B = 2x^3y - 3xy^2 + 1$. Với giá trị nào của $m$ thì tổng $A + B$ không chứa hạng tử bậc 4?",
      "options": [
        "$m = -1$",
        "$m = 1$",
        "$m = 3$",
        "$m = -3$"
      ],
      "correctIndex": 0,
      "explanation": "Hạng tử bậc 4 trong $A + B$ là $[(m - 1) + 2]x^3y = (m + 1)x^3y$. Để không chứa hạng tử bậc 4 thì hệ số $m + 1 = 0 \\Leftrightarrow m = -1$."
    },
    {
      "id": "ai-8.3.13",
      "badge": "Bài tập mở rộng 3 - Biểu thức có dấu ngoặc lồng nhau",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Bài 5b (Trang 11)",
      "question": "Thu gọn biểu thức $M = 2x^2 - [3xy - (x^2 - 2xy + y^2)]$ ta được:",
      "options": [
        "$3x^2 - 5xy + y^2$",
        "$x^2 - 5xy + y^2$",
        "$3x^2 - xy - y^2$",
        "$x^2 + xy - y^2$"
      ],
      "correctIndex": 0,
      "explanation": "Bỏ ngoặc tròn bên trong: $3xy - x^2 + 2xy - y^2 = 5xy - x^2 - y^2$.\nBỏ ngoặc vuông có dấu trừ: $M = 2x^2 - (5xy - x^2 - y^2) = 2x^2 - 5xy + x^2 + y^2 = 3x^2 - 5xy + y^2$."
    },
    {
      "id": "ai-8.3.14",
      "badge": "Bài tập mở rộng 4 - Bài toán thực tế hiệu diện tích",
      "isAiGenerated": true,
      "source": "SGK Toán 8 Bài 1.17 (Trang 18)",
      "question": "Bác An có một mảnh đất hình chữ nhật diện tích $S_1 = 4x^2 + 6xy\\text{ (m}^2\\text{)}$. Bác dùng một phần đất có diện tích $S_2 = 2x^2 + 3xy - 5\\text{ (m}^2\\text{)}$ để làm nhà. Đa thức biểu thị diện tích phần đất còn lại làm sân vườn là:",
      "options": [
        "$2x^2 + 3xy + 5\\text{ (m}^2\\text{)}$",
        "$2x^2 + 3xy - 5\\text{ (m}^2\\text{)}$",
        "$6x^2 + 9xy - 5\\text{ (m}^2\\text{)}$",
        "$2x^2 + 9xy + 5\\text{ (m}^2\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Diện tích sân vườn còn lại: $S = S_1 - S_2 = (4x^2 + 6xy) - (2x^2 + 3xy - 5) = 4x^2 + 6xy - 2x^2 - 3xy + 5 = 2x^2 + 3xy + 5\\text{ (m}^2\\text{)}$."
    },
    {
      "id": "ai-8.3.15",
      "badge": "Bài tập mở rộng 5 - Bài toán thực tế lượng nước cần đổ thêm",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 8",
      "question": "Một bể nước có dung tích tối đa là $V_1 = 3x^2y + 5xy^2\\text{ (dm}^3\\text{)}$. Hiện tại lượng nước trong bể là $V_2 = x^2y + 2xy^2\\text{ (dm}^3\\text{)}$. Đa thức biểu thị lượng nước cần đổ thêm vào để đầy bể là:",
      "options": [
        "$2x^2y + 3xy^2\\text{ (dm}^3\\text{)}$",
        "$4x^2y + 7xy^2\\text{ (dm}^3\\text{)}$",
        "$2x^2y - 3xy^2\\text{ (dm}^3\\text{)}$",
        "$3x^2y + 3xy^2\\text{ (dm}^3\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Lượng nước cần đổ thêm vào: $\\Delta V = V_1 - V_2 = (3x^2y + 5xy^2) - (x^2y + 2xy^2) = (3 - 1)x^2y + (5 - 2)xy^2 = 2x^2y + 3xy^2\\text{ (dm}^3\\text{)}$."
    }
  ],
  // BÀI 4: PHÉP NHÂN ĐA THỨC
  "t8-b4-phep-nhan-da-thuc": [
    {
      "id": "ai-8.4.1",
      "badge": "Luyện thêm 1 (NB) - Nhân đơn thức với nhị thức cơ bản",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 19",
      "question": "Tích của đơn thức $3x$ và đa thức $x - 2$ là:",
      "options": [
        "$3x^2 - 6x$",
        "$3x^2 - 2$",
        "$3x^2 - 5x$",
        "$3x - 6$"
      ],
      "correctIndex": 0,
      "explanation": "$3x(x - 2) = 3x \\cdot x - 3x \\cdot 2 = 3x^2 - 6x$."
    },
    {
      "id": "ai-8.4.2",
      "badge": "Luyện thêm 2 (NB) - Nhân đơn thức âm với đa thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 19",
      "question": "Kết quả của phép nhân $-2x(x^2 - 4)$ là:",
      "options": [
        "$-2x^3 + 8x$",
        "$-2x^3 - 8x$",
        "$2x^3 - 8x$",
        "$-2x^3 + 4$"
      ],
      "correctIndex": 0,
      "explanation": "$(-2x) \\cdot x^2 + (-2x) \\cdot (-4) = -2x^3 + 8x$."
    },
    {
      "id": "ai-8.4.3",
      "badge": "Luyện thêm 3 (NB) - Nhân đơn thức hai biến",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 20",
      "question": "Tích của $2x^2y$ và $3xy - 1$ là:",
      "options": [
        "$6x^3y^2 - 2x^2y$",
        "$6x^2y^2 - 2x^2y$",
        "$5x^3y^2 - 2x^2y$",
        "$6x^3y - 1$"
      ],
      "correctIndex": 0,
      "explanation": "$2x^2y \\cdot 3xy - 2x^2y \\cdot 1 = 6x^3y^2 - 2x^2y$."
    },
    {
      "id": "ai-8.4.4",
      "badge": "Luyện thêm 4 (NB) - Khai triển tích hai nhị thức cộng",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 20",
      "question": "Khai triển tích $(x + 3)(x + 4)$ ta được:",
      "options": [
        "$x^2 + 7x + 12$",
        "$x^2 + 12x + 7$",
        "$x^2 + 7x + 7$",
        "$x^2 + 12$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 3)(x + 4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$."
    },
    {
      "id": "ai-8.4.5",
      "badge": "Luyện thêm 5 (NB) - Khai triển tích có số âm",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 20",
      "question": "Khai triển tích $(x - 5)(x + 2)$ ta được:",
      "options": [
        "$x^2 - 3x - 10$",
        "$x^2 + 3x - 10$",
        "$x^2 - 7x - 10$",
        "$x^2 - 10$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 5)(x + 2) = x^2 + 2x - 5x - 10 = x^2 - 3x - 10$."
    },
    {
      "id": "ai-8.4.6",
      "badge": "Luyện thêm 6 (NB) - Bậc của tích",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 20",
      "question": "Bậc của đa thức tích $(-3x^3)(2x^2 - 5x + 1)$ là:",
      "options": [
        "$5$",
        "$6$",
        "$3$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Hạng tử có bậc cao nhất là $(-3x^3) \\cdot 2x^2 = -6x^5$, bậc của đa thức tích là $5$."
    },
    {
      "id": "ai-8.4.7",
      "badge": "Luyện thêm 7 (TH) - Nhân đơn thức với tam thức bậc hai",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 20",
      "question": "Thực hiện phép tính $x^2(2x^2 - 3x + 5)$ ta được:",
      "options": [
        "$2x^4 - 3x^3 + 5x^2$",
        "$2x^3 - 3x^2 + 5x$",
        "$2x^4 + 3x^3 + 5x^2$",
        "$2x^4 - 3x^2 + 5$"
      ],
      "correctIndex": 0,
      "explanation": "$x^2 \\cdot 2x^2 - x^2 \\cdot 3x + x^2 \\cdot 5 = 2x^4 - 3x^3 + 5x^2$."
    },
    {
      "id": "ai-8.4.8",
      "badge": "Luyện thêm 8 (TH) - Nhân hai đa thức có hệ số",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 21",
      "question": "Khai triển và thu gọn đa thức $(3x - 2)(x + 1)$ ta được:",
      "options": [
        "$3x^2 + x - 2$",
        "$3x^2 - x - 2$",
        "$3x^2 + 5x - 2$",
        "$3x^2 - 2$"
      ],
      "correctIndex": 0,
      "explanation": "$(3x - 2)(x + 1) = 3x^2 + 3x - 2x - 2 = 3x^2 + x - 2$."
    },
    {
      "id": "ai-8.4.9",
      "badge": "Luyện thêm 9 (TH) - Rút gọn biểu thức chứa phép nhân",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 21",
      "question": "Rút gọn biểu thức $A = 2x(x + 3) - 2x^2$ ta được:",
      "options": [
        "$6x$",
        "$-6x$",
        "$4x^2 + 6x$",
        "$6$"
      ],
      "correctIndex": 0,
      "explanation": "$A = 2x^2 + 6x - 2x^2 = 6x$."
    },
    {
      "id": "ai-8.4.10",
      "badge": "Luyện thêm 10 (TH) - Tìm x bằng phép nhân đa thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 21",
      "question": "Tìm giá trị của $x$ thỏa mãn phương trình: $x(x - 5) - x^2 = 15$:",
      "options": [
        "$x = -3$",
        "$x = 3$",
        "$x = -5$",
        "$x = 5$"
      ],
      "correctIndex": 0,
      "explanation": "$x^2 - 5x - x^2 = 15 \\Leftrightarrow -5x = 15 \\Leftrightarrow x = -3$."
    },
    {
      "id": "ai-8.4.11",
      "badge": "Bài tập mở rộng 1 (VD) - Rút gọn biểu thức tích hai nhị thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Nâng cao",
      "question": "Rút gọn biểu thức $M = (x - 2)(x + 2) - (x - 3)(x + 1)$ ta được:",
      "options": [
        "$2x - 1$",
        "$-2x - 1$",
        "$2x - 7$",
        "$-1$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 2)(x + 2) = x^2 - 4$.\n$(x - 3)(x + 1) = x^2 + x - 3x - 3 = x^2 - 2x - 3$.\n$M = (x^2 - 4) - (x^2 - 2x - 3) = x^2 - 4 - x^2 + 2x + 3 = 2x - 1$."
    },
    {
      "id": "ai-8.4.12",
      "badge": "Bài tập mở rộng 2 (VD) - Tính giá trị của biểu thức tích",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Nâng cao",
      "question": "Giá trị của biểu thức $P = (2x - y)(4x^2 + 2xy + y^2)$ tại $x = 1$ và $y = 2$ là:",
      "options": [
        "$0$",
        "$16$",
        "$-8$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $P = (2x)^3 - y^3 = 8x^3 - y^3$. Thay $x = 1, y = 2$: $P = 8(1)^3 - 2^3 = 8 - 8 = 0$."
    },
    {
      "id": "ai-8.4.13",
      "badge": "Bài tập mở rộng 3 (VD) - Chứng minh không phụ thuộc biến",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Bài 1.26 Trang 21",
      "question": "Cho biểu thức $H = (x - 1)(x + 2) - x(x + 1) + 5$. Giá trị của $H$ là:",
      "options": [
        "$3$",
        "$5$",
        "$-3$",
        "$7$"
      ],
      "correctIndex": 0,
      "explanation": "$H = (x^2 + 2x - x - 2) - (x^2 + x) + 5 = x^2 + x - 2 - x^2 - x + 5 = 3$."
    },
    {
      "id": "ai-8.4.14",
      "badge": "Bài tập mở rộng 4 (VD - Thực tế) - Diện tích hình chữ nhật",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT - Bài toán thực tế",
      "question": "Một mảnh đất hình chữ nhật có chiều dài là $2x + 3\\text{ (m)}$ và chiều rộng là $x + 1\\text{ (m)}$. Đa thức biểu thị diện tích mảnh đất đó là:",
      "options": [
        "$2x^2 + 5x + 3\\text{ (m}^2\\text{)}$",
        "$2x^2 + 3x + 3\\text{ (m}^2\\text{)}$",
        "$2x^2 + 6x + 3\\text{ (m}^2\\text{)}$",
        "$3x + 4\\text{ (m}^2\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "$S = (2x + 3)(x + 1) = 2x^2 + 2x + 3x + 3 = 2x^2 + 5x + 3\\text{ (m}^2\\text{)}$."
    },
    {
      "id": "ai-8.4.15",
      "badge": "Bài tập mở rộng 5 (VD - Thực tế) - Thể tích bể nước hình hộp",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT - Bài toán thực tế",
      "question": "Một bể chứa nước hình hộp chữ nhật có đáy hình vuông cạnh $x\\text{ (m)}$ và chiều cao là $x + 1\\text{ (m)}$. Đa thức biểu thị dung tích của bể nước đó là:",
      "options": [
        "$x^3 + x^2\\text{ (m}^3\\text{)}$",
        "$x^3 + 1\\text{ (m}^3\\text{)}$",
        "$x^2 + x\\text{ (m}^3\\text{)}$",
        "$3x + 1\\text{ (m}^3\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Dung tích khối hộp chữ nhật: $V = x \\cdot x \\cdot (x + 1) = x^2(x + 1) = x^3 + x^2\\text{ (m}^3\\text{)}$."
    }
  ],
  // BÀI 5: PHÉP CHIA ĐA THỨC CHO ĐƠN THỨC
  "t8-b5-phep-chia-da-thuc-don-thuc": [
    {
      "id": "ai-8.5.1",
      "badge": "Luyện thêm 1 (NB) - Chia hai lũy thừa cùng cơ số",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 22",
      "question": "Kết quả của phép chia $y^8 : y^3$ là:",
      "options": [
        "$y^5$",
        "$y^{11}$",
        "$y^{24}$",
        "$y^2$"
      ],
      "correctIndex": 0,
      "explanation": "$y^8 : y^3 = y^{8-3} = y^5$."
    },
    {
      "id": "ai-8.5.2",
      "badge": "Luyện thêm 2 (NB) - Chia đơn thức một biến có hệ số",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 22",
      "question": "Kết quả của phép chia $10x^4 : 2x^2$ là:",
      "options": [
        "$5x^2$",
        "$5x^6$",
        "$8x^2$",
        "$5x$"
      ],
      "correctIndex": 0,
      "explanation": "$(10 : 2)(x^4 : x^2) = 5x^2$."
    },
    {
      "id": "ai-8.5.3",
      "badge": "Luyện thêm 3 (NB) - Chia đơn thức hai biến",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 22",
      "question": "Kết quả của phép chia $16x^3y^2 : 4x^2y$ là:",
      "options": [
        "$4xy$",
        "$4x^2y$",
        "$4x$",
        "$12xy$"
      ],
      "correctIndex": 0,
      "explanation": "$(16 : 4)(x^3 : x^2)(y^2 : y) = 4xy$."
    },
    {
      "id": "ai-8.5.4",
      "badge": "Luyện thêm 4 (NB) - Chia đơn thức chứa dấu âm",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 22",
      "question": "Kết quả của phép chia $-20x^5y^3 : (-5x^3y)$ là:",
      "options": [
        "$4x^2y^2$",
        "$-4x^2y^2$",
        "$4x^2y$",
        "$-4x^8y^4$"
      ],
      "correctIndex": 0,
      "explanation": "$[-20 : (-5)](x^5 : x^3)(y^3 : y) = 4x^2y^2$."
    },
    {
      "id": "ai-8.5.5",
      "badge": "Luyện thêm 5 (NB) - Chia nhị thức cho đơn thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 23",
      "question": "Kết quả của phép chia $(6x^3 + 3x^2) : 3x^2$ là:",
      "options": [
        "$2x + 1$",
        "$2x$",
        "$2x + 3$",
        "$x + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(6x^3 : 3x^2) + (3x^2 : 3x^2) = 2x + 1$."
    },
    {
      "id": "ai-8.5.6",
      "badge": "Luyện thêm 6 (NB) - Chia đa thức hai biến cho đơn thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 23",
      "question": "Kết quả của phép chia $(8x^2y - 4xy) : 4xy$ là:",
      "options": [
        "$2x - 1$",
        "$2x$",
        "$2x - 4$",
        "$x - 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(8x^2y : 4xy) - (4xy : 4xy) = 2x - 1$."
    },
    {
      "id": "ai-8.5.7",
      "badge": "Luyện thêm 7 (TH) - Chia đa thức ba hạng tử",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 23",
      "question": "Kết quả của phép chia $(9x^4 - 6x^3 + 3x^2) : 3x^2$ là:",
      "options": [
        "$3x^2 - 2x + 1$",
        "$3x^2 - 2x$",
        "$3x^2 - 2x + 3$",
        "$3x^2 - 3x + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(9x^4 : 3x^2) - (6x^3 : 3x^2) + (3x^2 : 3x^2) = 3x^2 - 2x + 1$."
    },
    {
      "id": "ai-8.5.8",
      "badge": "Luyện thêm 8 (TH) - Chia đa thức cho đơn thức âm",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 23",
      "question": "Kết quả của phép chia $(8x^3 - 4x^2) : (-2x)$ là:",
      "options": [
        "$-4x^2 + 2x$",
        "$-4x^2 - 2x$",
        "$4x^2 - 2x$",
        "$-4x^2 + 4x$"
      ],
      "correctIndex": 0,
      "explanation": "$[8x^3 : (-2x)] - [4x^2 : (-2x)] = -4x^2 - (-2x) = -4x^2 + 2x$."
    },
    {
      "id": "ai-8.5.9",
      "badge": "Luyện thêm 9 (TH) - Rút gọn biểu thức chứa phép chia",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 24",
      "question": "Rút gọn biểu thức $A = (10x^3 - 5x^2) : 5x^2 + 2$ ta được:",
      "options": [
        "$2x + 1$",
        "$2x - 1$",
        "$2x + 2$",
        "$2x$"
      ],
      "correctIndex": 0,
      "explanation": "$A = (2x - 1) + 2 = 2x + 1$."
    },
    {
      "id": "ai-8.5.10",
      "badge": "Luyện thêm 10 (TH) - Tìm x bằng phép chia đa thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 24",
      "question": "Tìm giá trị của $x$ thỏa mãn: $(8x^2 - 6x) : 2x = 5$:",
      "options": [
        "$x = 2$",
        "$x = -2$",
        "$x = 4$",
        "$x = 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(8x^2 : 2x) - (6x : 2x) = 4x - 3$.\n$4x - 3 = 5 \\Leftrightarrow 4x = 8 \\Leftrightarrow x = 2$."
    },
    {
      "id": "ai-8.5.11",
      "badge": "Bài tập mở rộng 1 (VD) - Rút gọn biểu thức kết hợp nhân và chia",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Rút gọn biểu thức $M = (6x^3 - 9x^2) : 3x^2 - x(1 - x)$ ta được:",
      "options": [
        "$x^2 + x - 3$",
        "$x^2 - x - 3$",
        "$x^2 - 3$",
        "$2x - 3$"
      ],
      "correctIndex": 0,
      "explanation": "$(6x^3 - 9x^2) : 3x^2 = 2x - 3$.\n$-x(1 - x) = -x + x^2$.\nCộng lại: $(2x - 3) - x + x^2 = x^2 + x - 3$."
    },
    {
      "id": "ai-8.5.12",
      "badge": "Bài tập mở rộng 2 (VD) - Tính giá trị của biểu thức hai biến",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Giá trị của biểu thức $P = (16x^3y^2 - 8x^2y^3) : 8x^2y^2$ tại $x = 5, y = 3$ là:",
      "options": [
        "$7$",
        "$10$",
        "$3$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "$P = (16x^3y^2 : 8x^2y^2) - (8x^2y^3 : 8x^2y^2) = 2x - y$.\nTại $x = 5, y = 3$: $P = 2(5) - 3 = 10 - 3 = 7$."
    },
    {
      "id": "ai-8.5.13",
      "badge": "Bài tập mở rộng 3 (VD) - Chứng minh biểu thức không phụ thuộc biến",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Bài 1.31 Trang 24",
      "question": "Giá trị của biểu thức $H = (8x^4 - 4x^3 + 2x^2) : 2x^2 - (4x^2 - 2x)$ là:",
      "options": [
        "$1$",
        "$0$",
        "$-1$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "$(8x^4 - 4x^3 + 2x^2) : 2x^2 = 4x^2 - 2x + 1$.\n$H = (4x^2 - 2x + 1) - (4x^2 - 2x) = 1$."
    },
    {
      "id": "ai-8.5.14",
      "badge": "Bài tập mở rộng 4 (VD - Thực tế) - Chiều rộng mảnh vườn chữ nhật",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT - Bài toán thực tế",
      "question": "Một mảnh vườn hình chữ nhật có diện tích là $S = 8x^2y + 12xy^2\\text{ (m}^2\\text{)}$ và chiều dài là $4xy\\text{ (m)}$. Chiều rộng của mảnh vườn là:",
      "options": [
        "$2x + 3y\\text{ (m)}$",
        "$2x - 3y\\text{ (m)}$",
        "$3x + 2y\\text{ (m)}$",
        "$2x^2 + 3y^2\\text{ (m)}$"
      ],
      "correctIndex": 0,
      "explanation": "Chiều rộng = Diện tích : Chiều dài:\n$r = (8x^2y + 12xy^2) : 4xy = 2x + 3y\\text{ (m)}$."
    },
    {
      "id": "ai-8.5.15",
      "badge": "Bài tập mở rộng 5 (VD - Thực tế) - Chiều cao bể nước hình hộp",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT - Bài toán thực tế",
      "question": "Một bể nước hình hộp chữ nhật có dung tích là $V = 15x^3 + 20x^2\\text{ (dm}^3\\text{)}$ và diện tích đáy là $S = 5x^2\\text{ (dm}^2\\text{)}$. Chiều cao của bể nước đó là:",
      "options": [
        "$3x + 4\\text{ (dm)}$",
        "$3x - 4\\text{ (dm)}$",
        "$4x + 3\\text{ (dm)}$",
        "$3x^2 + 4\\text{ (dm)}$"
      ],
      "correctIndex": 0,
      "explanation": "Chiều cao bể nước: $h = V : S = (15x^3 + 20x^2) : 5x^2 = 3x + 4\\text{ (dm)}$."
    }
  ],
  // BÀI TẬP CUỐI CHƯƠNG I: ĐA THỨC
  "t8-on-tap-chuong-1": [
    {
      "id": "ai-8.ot1.1",
      "badge": "Luyện thêm 1 (NB) - Nhận diện đơn thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Biểu thức nào sau đây là đơn thức?",
      "options": [
        "$-5x^3y$",
        "$x + y$",
        "$\\frac{x}{y}$",
        "$2x - 3$"
      ],
      "correctIndex": 0,
      "explanation": "Biểu thức $-5x^3y$ chỉ gồm tích giữa số và các biến nên là đơn thức."
    },
    {
      "id": "ai-8.ot1.2",
      "badge": "Luyện thêm 2 (NB) - Bậc của đơn thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Bậc của đơn thức $4x^2y^3z^2$ là:",
      "options": [
        "$7$",
        "$6$",
        "$5$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Bậc của đơn thức là $2 + 3 + 2 = 7$."
    },
    {
      "id": "ai-8.ot1.3",
      "badge": "Luyện thêm 3 (NB) - Cộng đơn thức đồng dạng",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Tổng của $3x^2y$ và $5x^2y$ là:",
      "options": [
        "$8x^2y$",
        "$8x^4y^2$",
        "$15x^2y$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "$(3 + 5)x^2y = 8x^2y$."
    },
    {
      "id": "ai-8.ot1.4",
      "badge": "Luyện thêm 4 (NB) - Nhân đơn thức với nhị thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Kết quả của phép nhân $3x(x - 2)$ là:",
      "options": [
        "$3x^2 - 6x$",
        "$3x^2 - 2$",
        "$3x^2 - 5x$",
        "$3x - 6$"
      ],
      "correctIndex": 0,
      "explanation": "$3x \\cdot x - 3x \\cdot 2 = 3x^2 - 6x$."
    },
    {
      "id": "ai-8.ot1.5",
      "badge": "Luyện thêm 5 (NB) - Chia đơn thức cho đơn thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Kết quả của phép chia $15x^5y^3 : 5x^2y$ là:",
      "options": [
        "$3x^3y^2$",
        "$3x^2y^2$",
        "$3x^3y$",
        "$10x^3y^2$"
      ],
      "correctIndex": 0,
      "explanation": "$(15 : 5)(x^5 : x^2)(y^3 : y) = 3x^3y^2$."
    },
    {
      "id": "ai-8.ot1.6",
      "badge": "Luyện thêm 6 (TH) - Thu gọn đa thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Thu gọn đa thức $P = 4x^2 - 3x + 2 - x^2 + 3x$ ta được:",
      "options": [
        "$3x^2 + 2$",
        "$3x^2 - 6x + 2$",
        "$5x^2 + 2$",
        "$3x^2$"
      ],
      "correctIndex": 0,
      "explanation": "$P = (4x^2 - x^2) + (-3x + 3x) + 2 = 3x^2 + 2$."
    },
    {
      "id": "ai-8.ot1.7",
      "badge": "Luyện thêm 7 (TH) - Hiệu hai đa thức",
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "isAiGenerated": true,
      "question": "Cho $A = 2x^2 + y^2$ và $B = x^2 - y^2$. Hiệu $A - B$ bằng:",
      "options": [
        "$x^2 + 2y^2$",
        "$x^2$",
        "$3x^2$",
        "$x^2 - 2y^2$"
      ],
      "correctIndex": 0,
      "explanation": "$A - B = (2x^2 + y^2) - (x^2 - y^2) = 2x^2 + y^2 - x^2 + y^2 = x^2 + 2y^2$."
    },
    {
      "id": "ai-8.ot1.8",
      "badge": "Luyện thêm 8 (TH) - Khai triển tích hai nhị thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Khai triển $(x + 4)(x - 3)$ ta được:",
      "options": [
        "$x^2 + x - 12$",
        "$x^2 - x - 12$",
        "$x^2 + 7x - 12$",
        "$x^2 - 12$"
      ],
      "correctIndex": 0,
      "explanation": "$x^2 - 3x + 4x - 12 = x^2 + x - 12$."
    },
    {
      "id": "ai-8.ot1.9",
      "badge": "Luyện thêm 9 (TH) - Chia đa thức cho đơn thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Kết quả của phép chia $(12x^3 - 8x^2) : 4x^2$ là:",
      "options": [
        "$3x - 2$",
        "$3x - 2x$",
        "$3x^2 - 2$",
        "$3x + 2$"
      ],
      "correctIndex": 0,
      "explanation": "$(12x^3 : 4x^2) - (8x^2 : 4x^2) = 3x - 2$."
    },
    {
      "id": "ai-8.ot1.10",
      "badge": "Luyện thêm 10 (TH) - Tính giá trị đa thức",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT - Ôn tập Chương I",
      "question": "Giá trị của đa thức $M = 2x^2 - 3xy$ tại $x = 2, y = 1$ là:",
      "options": [
        "$2$",
        "$8$",
        "$-2$",
        "$5$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 2, y = 1$: $2(2)^2 - 3(2)(1) = 8 - 6 = 2$."
    },
    {
      "id": "ai-8.ot1.11",
      "badge": "Bài tập mở rộng 1 (VD) - Rút gọn biểu thức tổng hợp",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Rút gọn biểu thức $A = (x - 2)(x + 2) - x(x - 4)$ ta được:",
      "options": [
        "$4x - 4$",
        "$-4x - 4$",
        "$4x + 4$",
        "$-4$"
      ],
      "correctIndex": 0,
      "explanation": "$(x^2 - 4) - (x^2 - 4x) = 4x - 4$."
    },
    {
      "id": "ai-8.ot1.12",
      "badge": "Bài tập mở rộng 2 (VD) - Chứng minh không phụ thuộc biến",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Giá trị của biểu thức $B = (x - 1)(x + 3) - x(x + 2) + 5$ là:",
      "options": [
        "$2$",
        "$0$",
        "$-2$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "$(x^2 + 2x - 3) - (x^2 + 2x) + 5 = -3 + 5 = 2$."
    },
    {
      "id": "ai-8.ot1.13",
      "badge": "Bài tập mở rộng 3 (VD) - Tìm x",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Tìm giá trị của $x$ biết rằng: $(8x^2 - 4x) : 4x = 5$:",
      "options": [
        "$x = 3$",
        "$x = -3$",
        "$x = 2$",
        "$x = 4$"
      ],
      "correctIndex": 0,
      "explanation": "$2x - 1 = 5 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."
    },
    {
      "id": "ai-8.ot1.14",
      "badge": "Bài tập mở rộng 4 (VD - Thực tế) - Diện tích mảnh vườn mở rộng",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT - Bài toán thực tế",
      "question": "Một mảnh vườn hình chữ nhật có chiều dài là $x + 5\\text{ (m)}$ và chiều rộng là $x + 2\\text{ (m)}$. Đa thức biểu thị diện tích mảnh vườn là:",
      "options": [
        "$x^2 + 7x + 10\\text{ (m}^2\\text{)}$",
        "$x^2 + 10x + 7\\text{ (m}^2\\text{)}$",
        "$x^2 + 7x + 7\\text{ (m}^2\\text{)}$",
        "$2x + 7\\text{ (m}^2\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "$S = (x + 5)(x + 2) = x^2 + 2x + 5x + 10 = x^2 + 7x + 10\\text{ (m}^2\\text{)}$."
    },
    {
      "id": "ai-8.ot1.15",
      "badge": "Bài tập mở rộng 5 (VD - Thực tế) - Chiều dài khu đất",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT - Bài toán thực tế",
      "question": "Một khu đất hình chữ nhật có diện tích $S = 15x^2 + 10xy\\text{ (m}^2\\text{)}$ và chiều rộng là $5x\\text{ (m)}$. Chiều dài của khu đất là:",
      "options": [
        "$3x + 2y\\text{ (m)}$",
        "$3x - 2y\\text{ (m)}$",
        "$2x + 3y\\text{ (m)}$",
        "$3x^2 + 2y\\text{ (m)}$"
      ],
      "correctIndex": 0,
      "explanation": "$d = (15x^2 + 10xy) : 5x = 3x + 2y\\text{ (m)}$."
    }
  ],
  "t8-b6-binh-phuong-tong-hieu": [
  {
    "id": "ai-8.6.1",
    "badge": "Luyện thêm 1 (NB) - Khai triển hiệu hai bình phương",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 30",
    "question": "Khai triển biểu thức $(x - 4)(x + 4)$ ta được kết quả là:",
    "options": [
      "$x^2 - 16$",
      "$x^2 - 4$",
      "$x^2 + 16$",
      "$x^2 - 8$"
    ],
    "correctIndex": 0,
    "explanation": "$(x - 4)(x + 4) = x^2 - 4^2 = x^2 - 16$."
  },
  {
    "id": "ai-8.6.2",
    "badge": "Luyện thêm 2 (NB) - Khai triển bình phương một tổng",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 31",
    "question": "Khai triển biểu thức $(x + 3)^2$ ta được kết quả là:",
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
    "id": "ai-8.6.3",
    "badge": "Luyện thêm 3 (NB) - Khai triển bình phương một hiệu",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 32",
    "question": "Khai triển biểu thức $(x - 1)^2$ ta được kết quả là:",
    "options": [
      "$x^2 - 2x + 1$",
      "$x^2 - 1$",
      "$x^2 - 2x - 1$",
      "$x^2 + 2x + 1$"
    ],
    "correctIndex": 0,
    "explanation": "$(x - 1)^2 = x^2 - 2 \\cdot x \\cdot 1 + 1^2 = x^2 - 2x + 1$."
  },
  {
    "id": "ai-8.6.4",
    "badge": "Luyện thêm 4 (NB) - Viết đa thức thành tích",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 30",
    "question": "Viết đa thức $x^2 - 25$ dưới dạng tích của hai đa thức ta được:",
    "options": [
      "$(x - 5)(x + 5)$",
      "$(x - 25)(x + 25)$",
      "$(x - 5)^2$",
      "$(x + 5)^2$"
    ],
    "correctIndex": 0,
    "explanation": "$x^2 - 25 = x^2 - 5^2 = (x - 5)(x + 5)$."
  },
  {
    "id": "ai-8.6.5",
    "badge": "Luyện thêm 5 (NB) - Viết thành bình phương một tổng",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 31",
    "question": "Đa thức $x^2 + 10x + 25$ được viết dưới dạng bình phương của một tổng là:",
    "options": [
      "$(x + 5)^2$",
      "$(x + 10)^2$",
      "$(x + 25)^2$",
      "$(x + 2)^2$"
    ],
    "correctIndex": 0,
    "explanation": "$x^2 + 10x + 25 = x^2 + 2 \\cdot x \\cdot 5 + 5^2 = (x + 5)^2$."
  },
  {
    "id": "ai-8.6.6",
    "badge": "Luyện thêm 6 (NB) - Viết thành bình phương một hiệu",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 32",
    "question": "Đa thức $x^2 - 12x + 36$ được viết dưới dạng bình phương của một hiệu là:",
    "options": [
      "$(x - 6)^2$",
      "$(x - 12)^2$",
      "$(x - 36)^2$",
      "$(x + 6)^2$"
    ],
    "correctIndex": 0,
    "explanation": "$x^2 - 12x + 36 = x^2 - 2 \\cdot x \\cdot 6 + 6^2 = (x - 6)^2$."
  },
  {
    "id": "ai-8.6.7",
    "badge": "Luyện thêm 7 (TH) - Khai triển bình phương tổng có hệ số",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 31",
    "question": "Khai triển hằng đẳng thức $(3x + 1)^2$ ta được kết quả là:",
    "options": [
      "$9x^2 + 6x + 1$",
      "$3x^2 + 6x + 1$",
      "$9x^2 + 3x + 1$",
      "$9x^2 + 1$"
    ],
    "correctIndex": 0,
    "explanation": "$(3x + 1)^2 = (3x)^2 + 2 \\cdot (3x) \\cdot 1 + 1^2 = 9x^2 + 6x + 1$."
  },
  {
    "id": "ai-8.6.8",
    "badge": "Luyện thêm 8 (TH) - Khai triển bình phương hiệu có hệ số",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 32",
    "question": "Khai triển hằng đẳng thức $(2x - 5)^2$ ta được kết quả là:",
    "options": [
      "$4x^2 - 20x + 25$",
      "$4x^2 - 10x + 25$",
      "$4x^2 - 20x - 25$",
      "$2x^2 - 20x + 25$"
    ],
    "correctIndex": 0,
    "explanation": "$(2x - 5)^2 = (2x)^2 - 2 \\cdot (2x) \\cdot 5 + 5^2 = 4x^2 - 20x + 25$."
  },
  {
    "id": "ai-8.6.9",
    "badge": "Luyện thêm 9 (TH) - Khai triển hiệu hai bình phương có hệ số",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 30",
    "question": "Khai triển tích $(3x - 2)(3x + 2)$ ta được kết quả là:",
    "options": [
      "$9x^2 - 4$",
      "$3x^2 - 4$",
      "$9x^2 + 4$",
      "$9x^2 - 12x + 4$"
    ],
    "correctIndex": 0,
    "explanation": "$(3x - 2)(3x + 2) = (3x)^2 - 2^2 = 9x^2 - 4$."
  },
  {
    "id": "ai-8.6.10",
    "badge": "Luyện thêm 10 (TH) - Tính nhẩm bình phương số gần tròn chục",
    "isAiGenerated": true,
    "source": "SGK Toán 8 KNTT Trang 31",
    "question": "Tính nhanh giá trị $51^2$ bằng hằng đẳng thức ta được:",
    "options": [
      "$2601$",
      "$2501$",
      "$2611$",
      "$2510$"
    ],
    "correctIndex": 0,
    "explanation": "$51^2 = (50 + 1)^2 = 50^2 + 2 \\cdot 50 \\cdot 1 + 1^2 = 2500 + 100 + 1 = 2601$."
  },
  {
    "id": "ai-8.6.11",
    "badge": "Bài tập mở rộng 1 (VD) - Rút gọn hiệu hai bình phương",
    "isAiGenerated": true,
    "source": "Toán 8 KNTT Nâng cao",
    "question": "Rút gọn biểu thức $P = (x + 2)^2 - (x - 2)^2$ ta được kết quả là:",
    "options": [
      "$8x$",
      "$4x$",
      "$2x^2 + 8$",
      "$0$"
    ],
    "correctIndex": 0,
    "explanation": "$P = (x^2 + 4x + 4) - (x^2 - 4x + 4) = 8x$."
  },
  {
    "id": "ai-8.6.12",
    "badge": "Bài tập mở rộng 2 (VD) - Tìm x bằng hiệu hai bình phương",
    "isAiGenerated": true,
    "source": "Toán 8 KNTT Nâng cao",
    "question": "Tìm giá trị của $x$ biết: $(x + 5)^2 - x^2 = 45$.",
    "options": [
      "$x = 2$",
      "$x = 3$",
      "$x = 4$",
      "$x = 1$"
    ],
    "correctIndex": 0,
    "explanation": "$x^2 + 10x + 25 - x^2 = 45 \\Leftrightarrow 10x = 20 \\Leftrightarrow x = 2$."
  },
  {
    "id": "ai-8.6.13",
    "badge": "Bài tập mở rộng 3 (VD) - Tính giá trị đa thức thu gọn",
    "isAiGenerated": true,
    "source": "Toán 8 KNTT Nâng cao",
    "question": "Tính giá trị của biểu thức $A = x^2 - 6xy + 9y^2$ tại $x = 26$ và $y = 2$.",
    "options": [
      "$400$",
      "$200$",
      "$100$",
      "$20$"
    ],
    "correctIndex": 0,
    "explanation": "$A = (x - 3y)^2$. Thay $x = 26, y = 2$: $A = (26 - 3 \\cdot 2)^2 = (26 - 6)^2 = 20^2 = 400$."
  },
  {
    "id": "ai-8.6.14",
    "badge": "Bài tập mở rộng 4 (VD) - Tính nhanh tích hai số đối xứng",
    "isAiGenerated": true,
    "source": "Toán 8 KNTT Nâng cao",
    "question": "Tính nhanh giá trị của tích $102 \\cdot 98$ bằng hằng đẳng thức hiệu hai bình phương:",
    "options": [
      "$9996$",
      "$9994$",
      "$9986$",
      "$10004$"
    ],
    "correctIndex": 0,
    "explanation": "$102 \\cdot 98 = (100 + 2)(100 - 2) = 100^2 - 2^2 = 10000 - 4 = 9996$."
  },
  {
    "id": "ai-8.6.15",
    "badge": "Bài tập mở rộng 5 (VD - Thực tế) - Biến đổi diện tích chuồng trại",
    "isAiGenerated": true,
    "source": "Toán 8 KNTT - Bài toán thực tế",
    "question": "Một hộ chăn nuôi có chuồng trại hình vuông cạnh $x\\text{ (m)}$ ($x > 3$). Bác chủ trại điều chỉnh kích thước: tăng chiều dài thêm $3\\text{ m}$ và giảm chiều rộng đi $3\\text{ m}$. Hỏi diện tích chuồng trại mới thay đổi thế nào so với ban đầu?",
    "options": [
      "Giảm đi $9\\text{ m}^2$",
      "Tăng thêm $9\\text{ m}^2$",
      "Không thay đổi",
      "Giảm đi $6\\text{ m}^2$"
    ],
    "correctIndex": 0,
    "explanation": "Diện tích ban đầu là $x^2\\text{ (m}^2\\text{)}$.\nDiện tích mới là: $(x + 3)(x - 3) = x^2 - 9\\text{ (m}^2\\text{)}$.\nSo với ban đầu, diện tích giảm đi đúng $9\\text{ m}^2$."
  }
],
};
