import type { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";
import type { TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export interface Grade8AiPracticePackage {
  quizQuestions: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
}

export const GRADE_8_AI_PRACTICE_DATA: Record<string, QuizQuestion[] | Grade8AiPracticePackage> = {
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
  "t8-b6-binh-phuong-tong-hieu": {
  "quizQuestions": [
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
  "trueFalseQuestions": [
    {
      "id": "ai-tf-8.6.1",
      "badge": "Đúng / Sai 1 (NB) - Khẳng định về hằng đẳng thức mở rộng",
      "prompt": "Xét tính đúng/sai của các khẳng định đại số sau với mọi số thực $x, y$:",
      "subItems": [
        {
          "id": "a",
          "text": "$(x + 2y)^2 = x^2 + 4xy + 4y^2$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $(x + 2y)^2 = x^2 + 2 \\cdot x \\cdot (2y) + (2y)^2 = x^2 + 4xy + 4y^2$."
        },
        {
          "id": "b",
          "text": "$(3x - 1)^2 = 9x^2 - 6x - 1$.",
          "correctAnswer": false,
          "explanation": "Sai, số hạng cuối cùng phải là $+1^2 = +1$, khai triển đúng là $9x^2 - 6x + 1$."
        },
        {
          "id": "c",
          "text": "$(-x - 2y)^2 = (x + 2y)^2$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $[- (x + 2y)]^2 = (x + 2y)^2$ (bình phương của hai số đối nhau luôn bằng nhau)."
        },
        {
          "id": "d",
          "text": "$(x - 4)(4 + x) = x^2 - 16$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $4 + x = x + 4$, áp dụng hiệu hai bình phương được $(x - 4)(x + 4) = x^2 - 16$."
        }
      ]
    },
    {
      "id": "ai-tf-8.6.2",
      "badge": "Đúng / Sai 2 (TH) - Viết đa thức về dạng tích hoặc bình phương",
      "prompt": "Xét tính đúng/sai của các phép biến đổi đa thức sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$4x^2 - 25 = (2x - 5)(2x + 5)$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5)$."
        },
        {
          "id": "b",
          "text": "$x^2 + 6x + 9 = (x + 3)^2$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $x^2 + 2 \\cdot x \\cdot 3 + 3^2 = (x + 3)^2$."
        },
        {
          "id": "c",
          "text": "$9x^2 - 12xy + 4y^2 = (3x - 4y)^2$.",
          "correctAnswer": false,
          "explanation": "Sai, vì $4y^2 = (2y)^2$ nên biểu thức viết đúng là $(3x - 2y)^2$."
        },
        {
          "id": "d",
          "text": "$1 - 16x^2 = (1 - 4x)(1 + 4x)$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $1 - 16x^2 = 1^2 - (4x)^2 = (1 - 4x)(1 + 4x)$."
        }
      ]
    },
    {
      "id": "ai-tf-8.6.3",
      "badge": "Đúng / Sai 3 (TH) - Rút gọn biểu thức và giải phương trình",
      "prompt": "Cho biểu thức $Q = (2x + 1)^2 - 4x(x + 1)$ và phương trình $(x + 5)^2 - x^2 = 35$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Rút gọn biểu thức $Q$ ta được kết quả $Q = 1$.",
          "correctAnswer": true,
          "explanation": "Đúng, $Q = (4x^2 + 4x + 1) - (4x^2 + 4x) = 1$."
        },
        {
          "id": "b",
          "text": "Giá trị của biểu thức $Q$ phụ thuộc vào giá trị của biến $x$.",
          "correctAnswer": false,
          "explanation": "Sai, vì $Q = 1$ luôn là một hằng số nên không phụ thuộc vào biến $x$."
        },
        {
          "id": "c",
          "text": "Phương trình $(x + 5)^2 - x^2 = 35$ sau khi khai triển vế trái tương đương với $10x + 25 = 35$.",
          "correctAnswer": true,
          "explanation": "Đúng, vế trái là $(x^2 + 10x + 25) - x^2 = 10x + 25$."
        },
        {
          "id": "d",
          "text": "Nghiệm của phương trình $(x + 5)^2 - x^2 = 35$ là $x = 1$.",
          "correctAnswer": true,
          "explanation": "Đúng, $10x + 25 = 35 \\Leftrightarrow 10x = 10 \\Leftrightarrow x = 1$."
        }
      ]
    },
    {
      "id": "ai-tf-8.6.4",
      "badge": "Đúng / Sai 4 (VD - Thực tế) - Diện tích đường dạo bộ công viên",
      "prompt": "Một công viên hình vuông ban đầu có cạnh bằng $x\\text{ (m)}$ ($x > 2$). Ban quản lý làm một đường đi dạo lát sỏi bao quanh bên ngoài có bề rộng $2\\text{ m}$, tạo thành một khu đất hình vuông lớn hơn có cạnh là $x + 4\\text{ (m)}$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Diện tích khu công viên hình vuông ban đầu là $x^2\\text{ (m}^2\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, diện tích hình vuông cạnh $x$ là $x^2\\text{ (m}^2\\text{)}$."
        },
        {
          "id": "b",
          "text": "Diện tích toàn bộ khu đất sau khi làm đường đi dạo là $(x + 4)^2\\text{ (m}^2\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì cạnh của khu đất mới là $x + 2 + 2 = x + 4\\text{ (m)}$."
        },
        {
          "id": "c",
          "text": "Diện tích con đường đi dạo lát sỏi được biểu thị bởi đa thức $8x + 16\\text{ (m}^2\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, diện tích con đường là $(x + 4)^2 - x^2 = (x^2 + 8x + 16) - x^2 = 8x + 16\\text{ (m}^2\\text{)}$."
        },
        {
          "id": "d",
          "text": "Nếu công viên ban đầu có cạnh $x = 20\\text{ m}$ thì diện tích con đường lát sỏi là $160\\text{ m}^2$.",
          "correctAnswer": false,
          "explanation": "Sai, khi $x = 20$, diện tích con đường là $8(20) + 16 = 160 + 16 = 176\\text{ m}^2$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-8.6.1",
      "badge": "Câu 1 (NB) - Hệ số của biến trong khai triển",
      "prompt": "Hệ số của $x$ trong đa thức sau khi khai triển hằng đẳng thức $(x + 4)^2$ bằng bao nhiêu?",
      "correctAnswer": "8",
      "acceptableAnswers": [
        "8",
        "tám"
      ],
      "explanation": "$(x + 4)^2 = x^2 + 2 \\cdot x \\cdot 4 + 4^2 = x^2 + 8x + 16$. Hệ số của $x$ là $8$."
    },
    {
      "id": "ai-sa-8.6.2",
      "badge": "Câu 2 (TH) - Tìm hệ số k trong hằng đẳng thức",
      "prompt": "Cho đẳng thức $9x^2 + kxy + 4y^2 = (3x + 2y)^2$. Giá trị của hệ số $k$ bằng bao nhiêu?",
      "correctAnswer": "12",
      "acceptableAnswers": [
        "12",
        "mười hai"
      ],
      "explanation": "$(3x + 2y)^2 = (3x)^2 + 2 \\cdot (3x) \\cdot (2y) + (2y)^2 = 9x^2 + 12xy + 4y^2$. Suy ra $k = 12$."
    },
    {
      "id": "ai-sa-8.6.3",
      "badge": "Câu 3 (TH) - Tính nhanh giá trị biểu thức",
      "prompt": "Tính nhanh giá trị của biểu thức $P = 102^2 - 4$ bằng hằng đẳng thức hiệu hai bình phương.",
      "correctAnswer": "10400",
      "acceptableAnswers": [
        "10400",
        "mười nghìn bốn trăm"
      ],
      "explanation": "$P = 102^2 - 2^2 = (102 - 2)(102 + 2) = 100 \\cdot 104 = 10400$."
    },
    {
      "id": "ai-sa-8.6.4",
      "badge": "Câu 4 (TH) - Tính giá trị đa thức đưa về bình phương",
      "prompt": "Tính giá trị của biểu thức $M = x^2 - 8x + 16$ tại $x = 24$.",
      "correctAnswer": "400",
      "acceptableAnswers": [
        "400",
        "bốn trăm"
      ],
      "explanation": "$M = (x - 4)^2$. Tại $x = 24$: $M = (24 - 4)^2 = 20^2 = 400$."
    },
    {
      "id": "ai-sa-8.6.5",
      "badge": "Câu 5 (VD) - Tìm x bằng hằng đẳng thức",
      "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(x + 3)^2 - (x - 1)(x + 1) = 16$.",
      "correctAnswer": "1",
      "acceptableAnswers": [
        "1",
        "một"
      ],
      "explanation": "$(x^2 + 6x + 9) - (x^2 - 1) = 16 \\Leftrightarrow 6x + 10 = 16 \\Leftrightarrow 6x = 6 \\Leftrightarrow x = 1$."
    },
    {
      "id": "ai-sa-8.6.6",
      "badge": "Câu 6 (VD - Thực tế) - Tìm cạnh bồn hoa ban đầu",
      "prompt": "Một bồn hoa hình vuông ban đầu có cạnh là $x\\text{ (m)}$. Người ta mở rộng mỗi phía thêm $1\\text{ m}$ để được bồn hoa mới hình vuông có cạnh là $x + 2\\text{ (m)}$. Biết diện tích phần đất mở rộng thêm bằng $20\\text{ m}^2$. Tính độ dài cạnh ban đầu $x$ của bồn hoa (theo đơn vị mét).",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "bốn",
        "4m",
        "4 m"
      ],
      "explanation": "Diện tích mở rộng thêm là: $(x + 2)^2 - x^2 = 4x + 4\\text{ (m}^2\\text{)}$.\nTheo bài ra: $4x + 4 = 20 \\Leftrightarrow 4x = 16 \\Leftrightarrow x = 4\\text{ (m)}$."
    }
  ]
},
  "t8-b7-lap-phuong-tong-hieu": {
  "quizQuestions": [
    {
      "id": "ai-8.7.1",
      "badge": "Luyện thêm 1 (NB) - Khai triển lập phương của x + 2",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Khai triển biểu thức $(x + 2)^3$ ta được kết quả là:",
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
      "id": "ai-8.7.2",
      "badge": "Luyện thêm 2 (NB) - Khai triển lập phương của x - 3",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khai triển biểu thức $(x - 3)^3$ ta được kết quả là:",
      "options": [
        "$x^3 - 9x^2 + 27x - 27$",
        "$x^3 - 27$",
        "$x^3 - 9x^2 - 27x - 27$",
        "$x^3 - 3x^2 + 9x - 27$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 3)^3 = x^3 - 3 \\cdot x^2 \\cdot 3 + 3 \\cdot x \\cdot 3^2 - 3^3 = x^3 - 9x^2 + 27x - 27$."
    },
    {
      "id": "ai-8.7.3",
      "badge": "Luyện thêm 3 (NB) - Viết đa thức thành lập phương một tổng",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Đa thức $x^3 + 3x^2 + 3x + 1$ viết dưới dạng lập phương của một tổng là:",
      "options": [
        "$(x + 1)^3$",
        "$(x + 3)^3$",
        "$(x + 2)^3$",
        "$(x + 4)^3$"
      ],
      "correctIndex": 0,
      "explanation": "$x^3 + 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 + 1^3 = (x + 1)^3$."
    },
    {
      "id": "ai-8.7.4",
      "badge": "Luyện thêm 4 (NB) - Viết đa thức thành lập phương một hiệu",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Đa thức $x^3 - 3x^2 + 3x - 1$ viết dưới dạng lập phương của một hiệu là:",
      "options": [
        "$(x - 1)^3$",
        "$(x - 3)^3$",
        "$(x + 1)^3$",
        "$(1 - x)^3$"
      ],
      "correctIndex": 0,
      "explanation": "$x^3 - 3 \\cdot x^2 \\cdot 1 + 3 \\cdot x \\cdot 1^2 - 1^3 = (x - 1)^3$."
    },
    {
      "id": "ai-8.7.5",
      "badge": "Luyện thêm 5 (NB) - Khẳng định về số mũ lẻ của hiệu",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khẳng định nào sau đây là ĐÚNG với mọi số thực $x$?",
      "options": [
        "$(x - 2)^3 = -(2 - x)^3$",
        "$(x - 2)^3 = (2 - x)^3$",
        "$(x + 2)^3 = x^3 + 8$",
        "$(x - 2)^3 = x^3 - 8$"
      ],
      "correctIndex": 0,
      "explanation": "Lũy thừa bậc lẻ của hai số đối nhau là hai số đối nhau: $(x - 2)^3 = -(2 - x)^3$."
    },
    {
      "id": "ai-8.7.6",
      "badge": "Luyện thêm 6 (TH) - Khai triển lập phương có hệ số 2x",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Khai triển biểu thức $(2x + 1)^3$ ta được kết quả là:",
      "options": [
        "$8x^3 + 12x^2 + 6x + 1$",
        "$6x^3 + 12x^2 + 6x + 1$",
        "$8x^3 + 6x^2 + 6x + 1$",
        "$8x^3 + 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(2x + 1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1) + 1 = 8x^3 + 12x^2 + 6x + 1$."
    },
    {
      "id": "ai-8.7.7",
      "badge": "Luyện thêm 7 (TH) - Khai triển lập phương hiệu hai biến",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khai triển biểu thức $(x - 2y)^3$ ta được kết quả là:",
      "options": [
        "$x^3 - 6x^2y + 12xy^2 - 8y^3$",
        "$x^3 - 6x^2y - 12xy^2 - 8y^3$",
        "$x^3 - 2x^2y + 4xy^2 - 8y^3$",
        "$x^3 - 8y^3$"
      ],
      "correctIndex": 0,
      "explanation": "$(x - 2y)^3 = x^3 - 3x^2(2y) + 3x(2y)^2 - (2y)^3 = x^3 - 6x^2y + 12xy^2 - 8y^3$."
    },
    {
      "id": "ai-8.7.8",
      "badge": "Luyện thêm 8 (TH) - Khai triển lập phương của 3x - 1",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Khai triển biểu thức $(3x - 1)^3$ ta được kết quả là:",
      "options": [
        "$27x^3 - 27x^2 + 9x - 1$",
        "$27x^3 - 9x^2 + 9x - 1$",
        "$9x^3 - 27x^2 + 9x - 1$",
        "$27x^3 - 1$"
      ],
      "correctIndex": 0,
      "explanation": "$(3x - 1)^3 = (3x)^3 - 3(3x)^2(1) + 3(3x)(1) - 1 = 27x^3 - 27x^2 + 9x - 1$."
    },
    {
      "id": "ai-8.7.9",
      "badge": "Luyện thêm 9 (TH) - Điền đơn thức vào lập phương một tổng",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 34",
      "question": "Biểu thức $x^3 + 6x^2 + \\ldots + 8 = (x + 2)^3$. Đơn thức thích hợp điền vào chỗ chấm là:",
      "options": [
        "$12x$",
        "$6x$",
        "$4x$",
        "$8x$"
      ],
      "correctIndex": 0,
      "explanation": "$(x + 2)^3 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$. Đơn thức là $12x$."
    },
    {
      "id": "ai-8.7.10",
      "badge": "Luyện thêm 10 (TH) - Tính giá trị đa thức đưa về lập phương",
      "isAiGenerated": true,
      "source": "SGK Toán 8 KNTT Trang 35",
      "question": "Tính giá trị của đa thức $A = x^3 - 6x^2 + 12x - 8$ tại $x = 12$:",
      "options": [
        "$1000$",
        "$10000$",
        "$100$",
        "$800$"
      ],
      "correctIndex": 0,
      "explanation": "$A = (x - 2)^3$. Tại $x = 12$: $A = (12 - 2)^3 = 10^3 = 1000$."
    },
    {
      "id": "ai-8.7.11",
      "badge": "Bài tập mở rộng 1 (VD) - Rút gọn hiệu hai lập phương",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Rút gọn biểu thức $P = (x + 2)^3 - (x - 2)^3$ ta được:",
      "options": [
        "$12x^2 + 16$",
        "$12x^2$",
        "$2x^3 + 24x$",
        "$16$"
      ],
      "correctIndex": 0,
      "explanation": "$P = (x^3 + 6x^2 + 12x + 8) - (x^3 - 6x^2 + 12x - 8) = 12x^2 + 16$."
    },
    {
      "id": "ai-8.7.12",
      "badge": "Bài tập mở rộng 2 (VD) - Tìm x bằng hằng đẳng thức",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Tìm giá trị của $x$ biết: $(x + 1)^3 - x^2(x + 3) = 7$.",
      "options": [
        "$x = 2$",
        "$x = 1$",
        "$x = 3$",
        "$x = 4$"
      ],
      "correctIndex": 0,
      "explanation": "$(x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 7 \\Leftrightarrow 3x + 1 = 7 \\Leftrightarrow 3x = 6 \\Leftrightarrow x = 2$."
    },
    {
      "id": "ai-8.7.13",
      "badge": "Bài tập mở rộng 3 (VD) - Tính giá trị đa thức hai biến",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Nâng cao",
      "question": "Tính giá trị của biểu thức $Q = x^3 + 3x^2y + 3xy^2 + y^3$ tại $x = 17$ và $y = 3$:",
      "options": [
        "$8000$",
        "$4000$",
        "$1000$",
        "$20$"
      ],
      "correctIndex": 0,
      "explanation": "$Q = (x + y)^3$. Thay $x = 17, y = 3$ vào: $Q = (17 + 3)^3 = 20^3 = 8000$."
    },
    {
      "id": "ai-8.7.14",
      "badge": "Bài tập mở rộng 4 (VD - Thực tế) - Thể tích bể nước tăng thêm",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Ứng dụng thực tế",
      "question": "Một bể nước ngầm hình lập phương có cạnh là $x\\text{ (m)}$. Khi tăng mỗi cạnh thêm $2\\text{ m}$ để được khối lập phương cạnh $x + 2\\text{ (m)}$, thể tích bể nước tăng thêm là:",
      "options": [
        "$6x^2 + 12x + 8\\text{ (m}^3\\text{)}$",
        "$8\\text{ (m}^3\\text{)}$",
        "$6x^2 + 8\\text{ (m}^3\\text{)}$",
        "$2x^2 + 4x + 8\\text{ (m}^3\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\Delta V = (x + 2)^3 - x^3 = (x^3 + 6x^2 + 12x + 8) - x^3 = 6x^2 + 12x + 8\\text{ (m}^3\\text{)}$."
    },
    {
      "id": "ai-8.7.15",
      "badge": "Bài tập mở rộng 5 (VD - Thực tế) - Thể tích hộp quà lưu niệm",
      "isAiGenerated": true,
      "source": "Toán 8 KNTT Ứng dụng thực tế",
      "question": "Một hộp quà lưu niệm hình lập phương có cạnh bằng $x\\text{ (cm)}$. Người thợ bọc thêm một lớp đệm dày $1\\text{ cm}$ đều khắp các mặt, tạo thành hộp ngoài hình lập phương có cạnh $x + 2\\text{ (cm)}$. Thể tích phần đệm bọc xung quanh hộp quà là:",
      "options": [
        "$6x^2 + 12x + 8\\text{ (cm}^3\\text{)}$",
        "$3x^2 + 3x + 1\\text{ (cm}^3\\text{)}$",
        "$8\\text{ (cm}^3\\text{)}$",
        "$12x + 8\\text{ (cm}^3\\text{)}$"
      ],
      "correctIndex": 0,
      "explanation": "Thể tích phần đệm bằng thể tích hộp ngoài trừ hộp quà bên trong: $(x + 2)^3 - x^3 = 6x^2 + 12x + 8\\text{ (cm}^3\\text{)}$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ai-tf-8.7.1",
      "badge": "Đúng / Sai 1 (NB) - Khẳng định về lập phương tổng và hiệu",
      "prompt": "Xét tính đúng/sai của các khẳng định đại số sau với mọi số thực $x, y$:",
      "subItems": [
        {
          "id": "a",
          "text": "$(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$.",
          "correctAnswer": true,
          "explanation": "Đúng, đây là hằng đẳng thức lập phương của một tổng."
        },
        {
          "id": "b",
          "text": "$(x - y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$.",
          "correctAnswer": true,
          "explanation": "Đúng, đây là hằng đẳng thức lập phương của một hiệu."
        },
        {
          "id": "c",
          "text": "$(x - y)^3 = (y - x)^3$.",
          "correctAnswer": false,
          "explanation": "Sai, vì lũy thừa bậc lẻ nên $(x - y)^3 = -(y - x)^3$."
        },
        {
          "id": "d",
          "text": "$(-x - y)^3 = -(x + y)^3$.",
          "correctAnswer": true,
          "explanation": "Đúng, vì $[- (x + y)]^3 = -(x + y)^3$."
        }
      ]
    },
    {
      "id": "ai-tf-8.7.2",
      "badge": "Đúng / Sai 2 (TH) - Khai triển và biến đổi thành lập phương",
      "prompt": "Xét tính đúng/sai của các phép biến đổi đa thức sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$(x + 3)^3 = x^3 + 9x^2 + 27x + 27$.",
          "correctAnswer": true,
          "explanation": "Đúng, $x^3 + 3(x^2)(3) + 3(x)(9) + 27 = x^3 + 9x^2 + 27x + 27$."
        },
        {
          "id": "b",
          "text": "$(2x - 1)^3 = 8x^3 - 12x^2 + 6x - 1$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(2x)^3 - 3(2x)^2(1) + 3(2x)(1) - 1 = 8x^3 - 12x^2 + 6x - 1$."
        },
        {
          "id": "c",
          "text": "$x^3 - 9x^2 + 27x - 27 = (x - 9)^3$.",
          "correctAnswer": false,
          "explanation": "Sai, vì $27 = 3^3$ nên biểu thức viết đúng là $(x - 3)^3$."
        },
        {
          "id": "d",
          "text": "$x^3 + 6x^2y + 12xy^2 + 8y^3 = (x + 2y)^3$.",
          "correctAnswer": true,
          "explanation": "Đúng, $x^3 + 3x^2(2y) + 3x(2y)^2 + (2y)^3 = (x + 2y)^3$."
        }
      ]
    },
    {
      "id": "ai-tf-8.7.3",
      "badge": "Đúng / Sai 3 (TH) - Rút gọn biểu thức và giải phương trình",
      "prompt": "Cho biểu thức $P = (x + 1)^3 - x(x + 1)(x - 1)$ và phương trình $(x + 1)^3 - x^2(x + 3) = 10$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Rút gọn biểu thức $P$ ta được kết quả $P = 3x^2 + 4x + 1$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(x^3 + 3x^2 + 3x + 1) - x(x^2 - 1) = x^3 + 3x^2 + 3x + 1 - x^3 + x = 3x^2 + 4x + 1$."
        },
        {
          "id": "b",
          "text": "Tại $x = 0$, giá trị của biểu thức $P$ bằng $1$.",
          "correctAnswer": true,
          "explanation": "Đúng, thay $x = 0$ vào ta được $P = 1$."
        },
        {
          "id": "c",
          "text": "Phương trình $(x + 1)^3 - x^2(x + 3) = 10$ sau khi thu gọn vế trái trở thành $3x + 1 = 10$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 3x + 1$."
        },
        {
          "id": "d",
          "text": "Nghiệm của phương trình $(x + 1)^3 - x^2(x + 3) = 10$ là $x = 3$.",
          "correctAnswer": true,
          "explanation": "Đúng, $3x + 1 = 10 \\Leftrightarrow 3x = 9 \\Leftrightarrow x = 3$."
        }
      ]
    },
    {
      "id": "ai-tf-8.7.4",
      "badge": "Đúng / Sai 4 (VD - Thực tế) - Thể tích khối lập phương bê tông",
      "prompt": "Một khối bê tông hình lập phương có cạnh bằng $x\\text{ (m)}$ ($x > 1$). Người ta đổ thêm bê tông đều xung quanh để tạo thành khối lập phương mới có cạnh $x + 1\\text{ (m)}$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Thể tích khối bê tông ban đầu là $x^3\\text{ (m}^3\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, thể tích khối lập phương cạnh $x$ là $x^3\\text{ (m}^3\\text{)}$."
        },
        {
          "id": "b",
          "text": "Thể tích khối bê tông mới sau khi đổ thêm là $(x + 1)^3\\text{ (m}^3\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, cạnh khối mới là $x + 1\\text{ (m)}$ nên thể tích là $(x + 1)^3\\text{ (m}^3\\text{)}$."
        },
        {
          "id": "c",
          "text": "Thể tích bê tông đổ thêm được biểu thị bởi đa thức $3x^2 + 3x + 1\\text{ (m}^3\\text{)}$.",
          "correctAnswer": true,
          "explanation": "Đúng, $(x + 1)^3 - x^3 = 3x^2 + 3x + 1\\text{ (m}^3\\text{)}$."
        },
        {
          "id": "d",
          "text": "Nếu khối bê tông ban đầu có cạnh $x = 3\\text{ m}$ thì thể tích bê tông đổ thêm là $36\\text{ m}^3$.",
          "correctAnswer": false,
          "explanation": "Sai, với $x = 3$: $\\Delta V = 3(3^2) + 3(3) + 1 = 27 + 9 + 1 = 37\\text{ m}^3$."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-8.7.1",
      "badge": "Câu 1 (NB) - Hệ số tự do của lập phương hiệu",
      "prompt": "Hệ số tự do trong khai triển hằng đẳng thức $(x - 4)^3$ bằng bao nhiêu?",
      "correctAnswer": "-64",
      "acceptableAnswers": [
        "-64",
        "âm sáu mươi tư"
      ],
      "explanation": "$(x - 4)^3 = x^3 - 12x^2 + 48x - 64$. Hệ số tự do là $(-4)^3 = -64$."
    },
    {
      "id": "ai-sa-8.7.2",
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
      "id": "ai-sa-8.7.3",
      "badge": "Câu 3 (TH) - Tính giá trị đa thức",
      "prompt": "Tính giá trị của biểu thức $P = x^3 + 6x^2 + 12x + 8$ tại $x = 8$.",
      "correctAnswer": "1000",
      "acceptableAnswers": [
        "1000",
        "một nghìn",
        "1.000"
      ],
      "explanation": "$P = (x + 2)^3$. Tại $x = 8$: $P = (8 + 2)^3 = 10^3 = 1000$."
    },
    {
      "id": "ai-sa-8.7.4",
      "badge": "Câu 4 (TH) - Tìm hệ số a trong lập phương",
      "prompt": "Cho đẳng thức $8x^3 - 12x^2 + 6x - 1 = (ax - 1)^3$. Giá trị của hệ số $a$ bằng bao nhiêu?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "Vì $(ax)^3 = 8x^3 \\Rightarrow a^3 = 8 \\Rightarrow a = 2$."
    },
    {
      "id": "ai-sa-8.7.5",
      "badge": "Câu 5 (VD) - Tìm x bằng lập phương",
      "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(x + 1)^3 - x^2(x + 3) = 7$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "hai"
      ],
      "explanation": "$(x^3 + 3x^2 + 3x + 1) - (x^3 + 3x^2) = 7 \\Leftrightarrow 3x + 1 = 7 \\Leftrightarrow 3x = 6 \\Leftrightarrow x = 2$."
    },
    {
      "id": "ai-sa-8.7.6",
      "badge": "Câu 6 (VD - Thực tế) - Thể tích khối lập phương mới",
      "prompt": "Một khối lập phương ban đầu có thể tích bằng $8\\text{ m}^3$. Người ta tăng đều mỗi cạnh thêm $2\\text{ m}$ để được khối lập phương mới. Thể tích của khối lập phương mới bằng bao nhiêu mét khối?",
      "correctAnswer": "64",
      "acceptableAnswers": [
        "64",
        "sáu mươi tư",
        "64m3",
        "64 m3"
      ],
      "explanation": "Thể tích ban đầu $x^3 = 8 \\Rightarrow x = 2\\text{ m}$.\nCạnh khối lập phương mới là $2 + 2 = 4\\text{ m}$.\nThể tích khối lập phương mới là $4^3 = 64\\text{ m}^3$."
    }
  ]
},
  "t8-b8-tong-hieu-hai-lap-phuong": {
    "quizQuestions": [
      {
        "id": "ai-8.8.1",
        "badge": "Luyện thêm 1 (NB) - Khai triển tổng hai lập phương",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Khai triển tích $(x + 4)(x^2 - 4x + 16)$ ta được kết quả là:",
        "options": [
          "$x^3 + 64$",
          "$x^3 - 64$",
          "$x^3 + 16$",
          "$x^3 + 8$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 4)(x^2 - 4x + 16) = x^3 + 4^3 = x^3 + 64$."
      },
      {
        "id": "ai-8.8.2",
        "badge": "Luyện thêm 2 (NB) - Khai triển hiệu hai lập phương",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Khai triển tích $(x - 5)(x^2 + 5x + 25)$ ta được kết quả là:",
        "options": [
          "$x^3 - 125$",
          "$x^3 + 125$",
          "$x^3 - 25$",
          "$x^3 - 15$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 5)(x^2 + 5x + 25) = x^3 - 5^3 = x^3 - 125$."
      },
      {
        "id": "ai-8.8.3",
        "badge": "Luyện thêm 3 (NB) - Viết tổng lập phương thành tích",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Đa thức $x^3 + 125$ viết dưới dạng tích là:",
        "options": [
          "$(x + 5)(x^2 - 5x + 25)$",
          "$(x + 5)(x^2 + 5x + 25)$",
          "$(x + 5)(x^2 - 10x + 25)$",
          "$(x - 5)(x^2 + 5x + 25)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^3 + 125 = x^3 + 5^3 = (x + 5)(x^2 - 5x + 25)$."
      },
      {
        "id": "ai-8.8.4",
        "badge": "Luyện thêm 4 (NB) - Viết hiệu lập phương thành tích",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Đa thức $x^3 - 8$ viết dưới dạng tích là:",
        "options": [
          "$(x - 2)(x^2 + 2x + 4)$",
          "$(x - 2)(x^2 - 2x + 4)$",
          "$(x - 2)(x^2 + 4x + 4)$",
          "$(x + 2)(x^2 - 2x + 4)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$."
      },
      {
        "id": "ai-8.8.5",
        "badge": "Luyện thêm 5 (TH) - Khai triển có hệ số",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 37",
        "question": "Khai triển biểu thức $(2x + 3)(4x^2 - 6x + 9)$ ta được kết quả là:",
        "options": [
          "$8x^3 + 27$",
          "$8x^3 - 27$",
          "$4x^3 + 9$",
          "$2x^3 + 27$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x + 3)[(2x)^2 - (2x)(3) + 3^2] = (2x)^3 + 3^3 = 8x^3 + 27$."
      },
      {
        "id": "ai-8.8.6",
        "badge": "Luyện thêm 6 (TH) - Khai triển hiệu lập phương có hệ số",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 38",
        "question": "Khai triển biểu thức $(2x - y)(4x^2 + 2xy + y^2)$ ta được kết quả là:",
        "options": [
          "$8x^3 - y^3$",
          "$8x^3 + y^3$",
          "$4x^3 - y^3$",
          "$2x^3 - y^3$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x - y)[(2x)^2 + (2x)(y) + y^2] = (2x)^3 - y^3 = 8x^3 - y^3$."
      },
      {
        "id": "ai-8.8.7",
        "badge": "Luyện thêm 7 (TH) - Rút gọn biểu thức",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Bài tập 2.14 Trang 39",
        "question": "Rút gọn biểu thức $B = (x + 3)(x^2 - 3x + 9) - (x^3 + 20)$ ta được kết quả là:",
        "options": [
          "$7$",
          "$-7$",
          "$47$",
          "$0$"
        ],
        "correctIndex": 0,
        "explanation": "$B = (x^3 + 27) - x^3 - 20 = 7$."
      },
      {
        "id": "ai-8.8.8",
        "badge": "Luyện thêm 8 (TH) - Tính nhanh giá trị biểu thức",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Bài tập 2.15 Trang 39",
        "question": "Tính giá trị của biểu thức $K = (x - 1)(x^2 + x + 1) + 1$ tại $x = 20$:",
        "options": [
          "$8000$",
          "$400$",
          "$7999$",
          "$8001$"
        ],
        "correctIndex": 0,
        "explanation": "$K = (x^3 - 1) + 1 = x^3$. Tại $x = 20$: $K = 20^3 = 8000$."
      },
      {
        "id": "ai-8.8.9",
        "badge": "Luyện thêm 9 (VD) - Tìm x bằng hằng đẳng thức",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Nâng cao",
        "question": "Tìm giá trị của $x$ thỏa mãn: $(x + 2)(x^2 - 2x + 4) - x(x - 1)(x + 1) = 9$.",
        "options": [
          "$x = 1$",
          "$x = 2$",
          "$x = -1$",
          "$x = 0$"
        ],
        "correctIndex": 0,
        "explanation": "$(x^3 + 8) - x(x^2 - 1) = 9 \\Leftrightarrow x^3 + 8 - x^3 + x = 9 \\Leftrightarrow x + 8 = 9 \\Leftrightarrow x = 1$."
      },
      {
        "id": "ai-8.8.10",
        "badge": "Luyện thêm 10 (VD - Thực tế) - Thể tích khối lập phương rỗng",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ứng dụng thực tế",
        "question": "Một khối bê tông hình lập phương cạnh $x\\text{ (m)}$ bị khoét bỏ một phần rỗng hình lập phương cạnh $1\\text{ (m)}$ bên trong. Thể tích bê tông còn lại được biểu diễn bởi đa thức:",
        "options": [
          "$(x - 1)(x^2 + x + 1)\\text{ (m}^3\\text{)}$",
          "$(x + 1)(x^2 - x + 1)\\text{ (m}^3\\text{)}$",
          "$(x - 1)^3\\text{ (m}^3\\text{)}$",
          "$(x - 1)(x^2 - x + 1)\\text{ (m}^3\\text{)}$"
        ],
        "correctIndex": 0,
        "explanation": "$V = x^3 - 1^3 = (x - 1)(x^2 + x + 1)\\text{ (m}^3\\text{)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-8.8.1",
        "badge": "Luyện thêm Đ/S 1 - Các phép biến đổi lập phương",
        "prompt": "Xét tính đúng/sai của các phép biến đổi hằng đẳng thức sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Tích $(x + 5)(x^2 - 5x + 25)$ bằng $x^3 + 125$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x + 5)(x^2 - 5x + 25) = x^3 + 5^3 = x^3 + 125$."
          },
          {
            "id": "b",
            "text": "Đa thức $27x^3 + 1$ phân tích thành tích là $(3x + 1)(9x^2 - 3x + 1)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(3x)^3 + 1^3 = (3x + 1)[(3x)^2 - (3x)(1) + 1^2] = (3x + 1)(9x^2 - 3x + 1)$."
          },
          {
            "id": "c",
            "text": "Tích $(2x - 1)(4x^2 + 2x + 1)$ có kết quả là $4x^3 - 1$.",
            "correctAnswer": false,
            "explanation": "Sai, $(2x)^3 - 1^3 = 8x^3 - 1$ (chứ không phải $4x^3 - 1$)."
          },
          {
            "id": "d",
            "text": "Đa thức $x^3 - 216$ phân tích thành tích là $(x - 6)(x^2 + 6x + 36)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x^3 - 6^3 = (x - 6)(x^2 + 6x + 36)$."
          }
        ]
      },
      {
        "id": "ai-tf-8.8.2",
        "badge": "Luyện thêm Đ/S 2 - Rút gọn và bài toán thực tế",
        "prompt": "Xét tính đúng/sai của các bài toán đại số và thực tế sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Giá trị của biểu thức $M = (x - 2)(x^2 + 2x + 4) - (x + 2)(x^2 - 2x + 4)$ bằng $-16$.",
            "correctAnswer": true,
            "explanation": "Đúng, $M = (x^3 - 8) - (x^3 + 8) = x^3 - 8 - x^3 - 8 = -16$."
          },
          {
            "id": "b",
            "text": "Nghiệm của phương trình $(x + 1)(x^2 - x + 1) - x^3 = 5$ là $x = 4$.",
            "correctAnswer": false,
            "explanation": "Sai, $(x^3 + 1) - x^3 = 5 \\Leftrightarrow 1 = 5$ (vô nghiệm)."
          },
          {
            "id": "c",
            "text": "Một khối lập phương cạnh $4\\text{ cm}$ có thể tích bằng $64\\text{ cm}^3$.",
            "correctAnswer": true,
            "explanation": "Đúng, $V = 4^3 = 64\\text{ cm}^3$."
          },
          {
            "id": "d",
            "text": "Hiệu thể tích giữa khối lập phương cạnh $5\\text{ cm}$ và khối lập phương cạnh $4\\text{ cm}$ là $61\\text{ cm}^3$.",
            "correctAnswer": true,
            "explanation": "Đúng, $5^3 - 4^3 = 125 - 64 = 61\\text{ cm}^3$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-8.8.1",
        "badge": "Câu 1 (NB) - Hệ số tự do của khai triển",
        "prompt": "Hệ số tự do trong khai triển tích $(x + 4)(x^2 - 4x + 16)$ bằng bao nhiêu?",
        "correctAnswer": "64",
        "acceptableAnswers": [
          "64",
          "sáu mươi tư"
        ],
        "explanation": "$(x + 4)(x^2 - 4x + 16) = x^3 + 4^3 = x^3 + 64$. Hệ số tự do là $64$."
      },
      {
        "id": "ai-sa-8.8.2",
        "badge": "Câu 2 (TH) - Hệ số tự do của hiệu lập phương",
        "prompt": "Hệ số tự do trong khai triển tích $(x - 5)(x^2 + 5x + 25)$ bằng bao nhiêu?",
        "correctAnswer": "-125",
        "acceptableAnswers": [
          "-125",
          "âm một trăm hai mươi lăm",
          "- 125"
        ],
        "explanation": "$(x - 5)(x^2 + 5x + 25) = x^3 - 5^3 = x^3 - 125$. Hệ số tự do là $-125$."
      },
      {
        "id": "ai-sa-8.8.3",
        "badge": "Câu 3 (TH) - Tính nhanh giá trị biểu thức",
        "prompt": "Tính giá trị của biểu thức $P = (x + 1)(x^2 - x + 1)$ tại $x = 9$.",
        "correctAnswer": "730",
        "acceptableAnswers": [
          "730",
          "bảy trăm ba mươi"
        ],
        "explanation": "$P = x^3 + 1$. Tại $x = 9$: $P = 9^3 + 1 = 729 + 1 = 730$."
      },
      {
        "id": "ai-sa-8.8.4",
        "badge": "Câu 4 (TH) - Tìm hệ số a trong tổng lập phương",
        "prompt": "Cho đẳng thức $(2x + 1)(4x^2 - 2x + 1) = ax^3 + 1$. Giá trị của $a$ bằng bao nhiêu?",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "tám"
        ],
        "explanation": "$(2x + 1)(4x^2 - 2x + 1) = (2x)^3 + 1 = 8x^3 + 1$. Vậy $a = 8$."
      },
      {
        "id": "ai-sa-8.8.5",
        "badge": "Câu 5 (VD) - Tìm x bằng hằng đẳng thức",
        "prompt": "Tìm giá trị của $x$ thỏa mãn phương trình: $(x - 1)(x^2 + x + 1) - x(x^2 - 2) = 5$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "ba"
        ],
        "explanation": "$(x^3 - 1) - (x^3 - 2x) = 5 \\Leftrightarrow 2x - 1 = 5 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."
      },
      {
        "id": "ai-sa-8.8.6",
        "badge": "Câu 6 (VD - Thực tế) - Thể tích hai bể nước lập phương",
        "prompt": "Một khu tập thể có hai bể chứa nước hình lập phương, bể thứ nhất có cạnh $3\\text{ m}$, bể thứ hai có cạnh $2\\text{ m}$. Tổng dung tích của hai bể chứa nước bằng bao nhiêu mét khối?",
        "correctAnswer": "35",
        "acceptableAnswers": [
          "35",
          "ba mươi lăm",
          "35m3",
          "35 m3"
        ],
        "explanation": "Tổng dung tích hai bể là: $V = 3^3 + 2^3 = 27 + 8 = 35\\text{ (m}^3\\text{)}$."
      }
    ]
  },
  "t8-b9-phan-tich-da-thuc-nhan-tu": {
    "quizQuestions": [
      {
        "id": "ai-8.9.1",
        "badge": "Luyện thêm 1 (NB) - Đặt nhân tử chung đơn giản",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 40",
        "question": "Phân tích đa thức $7x^2 - 14x$ thành nhân tử ta được:",
        "options": [
          "$7x(x - 2)$",
          "$7(x^2 - 2)$",
          "$x(7x - 14)$",
          "$7x(x - 14)$"
        ],
        "correctIndex": 0,
        "explanation": "$7x^2 - 14x = 7x \\cdot x - 7x \\cdot 2 = 7x(x - 2)$."
      },
      {
        "id": "ai-8.9.2",
        "badge": "Luyện thêm 2 (NB) - Dùng hiệu hai bình phương",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Phân tích đa thức $x^2 - 49$ thành nhân tử ta được:",
        "options": [
          "$(x - 7)(x + 7)$",
          "$(x - 7)^2$",
          "$(x + 7)^2$",
          "$(x - 49)(x + 49)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 - 49 = x^2 - 7^2 = (x - 7)(x + 7)$."
      },
      {
        "id": "ai-8.9.3",
        "badge": "Luyện thêm 3 (NB) - Dùng bình phương một tổng",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Đa thức $x^2 + 10x + 25$ được phân tích thành:",
        "options": [
          "$(x + 5)^2$",
          "$(x - 5)^2$",
          "$(x + 25)^2$",
          "$(x + 10)^2$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 + 2 \\cdot x \\cdot 5 + 5^2 = (x + 5)^2$."
      },
      {
        "id": "ai-8.9.4",
        "badge": "Luyện thêm 4 (NB) - Dùng bình phương một hiệu",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 41",
        "question": "Đa thức $4x^2 - 12x + 9$ được phân tích thành:",
        "options": [
          "$(2x - 3)^2$",
          "$(2x + 3)^2$",
          "$(4x - 9)^2$",
          "$(2x - 9)^2$"
        ],
        "correctIndex": 0,
        "explanation": "$(2x)^2 - 2(2x)(3) + 3^2 = (2x - 3)^2$."
      },
      {
        "id": "ai-8.9.5",
        "badge": "Luyện thêm 5 (TH) - Đặt nhân tử chung có đổi dấu",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 40",
        "question": "Phân tích đa thức $x(x - 2) + 3(2 - x)$ thành nhân tử ta được:",
        "options": [
          "$(x - 2)(x - 3)$",
          "$(x - 2)(x + 3)$",
          "$(x + 2)(x - 3)$",
          "$(2 - x)(x - 3)$"
        ],
        "correctIndex": 0,
        "explanation": "Đổi dấu $3(2 - x) = -3(x - 2)$. Khi đó $x(x - 2) - 3(x - 2) = (x - 2)(x - 3)$."
      },
      {
        "id": "ai-8.9.6",
        "badge": "Luyện thêm 6 (TH) - Nhóm 2 - 2",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 42",
        "question": "Phân tích đa thức $x^2 - xy + 2x - 2y$ thành nhân tử ta được:",
        "options": [
          "$(x - y)(x + 2)$",
          "$(x + y)(x - 2)$",
          "$(x - y)(x - 2)$",
          "$(x + y)(x + 2)$"
        ],
        "correctIndex": 0,
        "explanation": "$x(x - y) + 2(x - y) = (x - y)(x + 2)$."
      },
      {
        "id": "ai-8.9.7",
        "badge": "Luyện thêm 7 (TH) - Nhóm 3 - 1",
        "isAiGenerated": true,
        "source": "SGK Toán 8 KNTT Trang 42",
        "question": "Phân tích đa thức $x^2 - 4y^2 + 4y - 1$ thành nhân tử ta được:",
        "options": [
          "$(x - 2y + 1)(x + 2y - 1)$",
          "$(x - 2y - 1)(x + 2y + 1)$",
          "$(x - 2y + 1)^2$",
          "$(x - 4y + 1)(x + 4y - 1)$"
        ],
        "correctIndex": 0,
        "explanation": "$x^2 - (4y^2 - 4y + 1) = x^2 - (2y - 1)^2 = [x - (2y - 1)][x + (2y - 1)] = (x - 2y + 1)(x + 2y - 1)$."
      },
      {
        "id": "ai-8.9.8",
        "badge": "Luyện thêm 8 (TH) - Tính nhanh giá trị biểu thức",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Bài tập 2.22 Trang 43",
        "question": "Tính giá trị của biểu thức $M = x^2 - 2xy + y^2$ tại $x = 105$ và $y = 5$:",
        "options": [
          "$10000$",
          "$1000$",
          "$100$",
          "$11000$"
        ],
        "correctIndex": 0,
        "explanation": "$M = (x - y)^2 = (105 - 5)^2 = 100^2 = 10000$."
      },
      {
        "id": "ai-8.9.9",
        "badge": "Luyện thêm 9 (VD) - Tìm x bằng phương trình tích",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Bài tập 2.23 Trang 43",
        "question": "Nghiệm của phương trình $2x(x - 3) - (x - 3) = 0$ là:",
        "options": [
          "$x = 3$ hoặc $x = \\frac{1}{2}$",
          "$x = 3$ hoặc $x = -\\frac{1}{2}$",
          "$x = 3$ hoặc $x = 2$",
          "$x = -3$ hoặc $x = \\frac{1}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 3)(2x - 1) = 0 \\Leftrightarrow x = 3$ hoặc $x = \\frac{1}{2}$."
      },
      {
        "id": "ai-8.9.10",
        "badge": "Luyện thêm 10 (VD - Thực tế) - Diện tích sân gạch",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ứng dụng thực tế",
        "question": "Một khoảng sân hình vuông cạnh $a = 65\\text{ m}$ có một bồn hoa hình vuông ở giữa cạnh $b = 35\\text{ m}$. Diện tích phần sân lát gạch xung quanh bồn hoa là:",
        "options": [
          "$3000\\text{ m}^2$",
          "$3500\\text{ m}^2$",
          "$4000\\text{ m}^2$",
          "$2500\\text{ m}^2$"
        ],
        "correctIndex": 0,
        "explanation": "$S = a^2 - b^2 = (a - b)(a + b) = (65 - 35)(65 + 35) = 30 \\times 100 = 3000\\text{ (m}^2\\text{)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-8.9.1",
        "badge": "Luyện thêm Đ/S 1 - Các phép phân tích thành nhân tử",
        "prompt": "Xét tính đúng/sai của các phép phân tích đa thức thành nhân tử sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đa thức $x^2 - 36$ phân tích thành tích là $(x - 6)(x + 6)$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x^2 - 6^2 = (x - 6)(x + 6)$."
          },
          {
            "id": "b",
            "text": "Đa thức $x^2 + 4x + 4$ phân tích thành $(x + 2)^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x + 2)^2 = x^2 + 4x + 4$."
          },
          {
            "id": "c",
            "text": "Đa thức $3x^2 - 3$ phân tích thành $3(x - 1)$.",
            "correctAnswer": false,
            "explanation": "Sai, $3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1)$ (chưa phân tích triệt để)."
          },
          {
            "id": "d",
            "text": "Đa thức $x^3 - 27$ phân tích thành $(x - 3)(x^2 + 3x + 9)$.",
            "correctAnswer": true,
            "explanation": "Đúng, hằng đẳng thức hiệu hai lập phương $x^3 - 3^3 = (x - 3)(x^2 + 3x + 9)$."
          }
        ]
      },
      {
        "id": "ai-tf-8.9.2",
        "badge": "Luyện thêm Đ/S 2 - Giải phương trình và tính nhanh",
        "prompt": "Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình $x^2 - 25 = 0$ có hai nghiệm là $x = 5$ và $x = -5$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(x - 5)(x + 5) = 0 \\Leftrightarrow x = \\pm 5$."
          },
          {
            "id": "b",
            "text": "Phương trình $x^2 = 7x$ chỉ có duy nhất một nghiệm là $x = 7$.",
            "correctAnswer": false,
            "explanation": "Sai, $x^2 - 7x = 0 \\Leftrightarrow x(x - 7) = 0$ có 2 nghiệm là $x = 0$ và $x = 7$."
          },
          {
            "id": "c",
            "text": "Giá trị của biểu thức $55^2 - 45^2$ bằng $1000$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(55 - 45)(55 + 45) = 10 \\times 100 = 1000$."
          },
          {
            "id": "d",
            "text": "Tích của hai số tự nhiên liên tiếp chia hết cho 2.",
            "correctAnswer": true,
            "explanation": "Đúng, $n(n + 1)$ luôn chứa một số chẵn nên luôn chia hết cho 2."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-8.9.1",
        "badge": "Câu 1 (NB) - Tìm nhân tử chung",
        "prompt": "Hệ số chung lớn nhất của đa thức $15x^2 - 20x + 25$ bằng bao nhiêu?",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "năm"
        ],
        "explanation": "$\\text{ƯCLN}(15, 20, 25) = 5$."
      },
      {
        "id": "ai-sa-8.9.2",
        "badge": "Câu 2 (TH) - Tìm hằng số trong hằng đẳng thức",
        "prompt": "Cho đẳng thức $x^2 - 10x + 25 = (x - a)^2$. Giá trị của $a$ bằng bao nhiêu?",
        "correctAnswer": "5",
        "acceptableAnswers": [
          "5",
          "năm"
        ],
        "explanation": "$x^2 - 10x + 25 = (x - 5)^2 \\Rightarrow a = 5$."
      },
      {
        "id": "ai-sa-8.9.3",
        "badge": "Câu 3 (TH) - Tính nhanh giá trị",
        "prompt": "Tính giá trị của biểu thức $A = 75^2 - 25^2$.",
        "correctAnswer": "5000",
        "acceptableAnswers": [
          "5000",
          "5.000",
          "năm nghìn"
        ],
        "explanation": "$A = (75 - 25)(75 + 25) = 50 \\times 100 = 5000$."
      },
      {
        "id": "ai-sa-8.9.4",
        "badge": "Câu 4 (TH) - Số nghiệm của phương trình",
        "prompt": "Phương trình $x^2 - 16 = 0$ có bao nhiêu nghiệm thực?",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2",
          "hai"
        ],
        "explanation": "$(x - 4)(x + 4) = 0 \\Leftrightarrow x = 4$ hoặc $x = -4$. Có đúng 2 nghiệm."
      },
      {
        "id": "ai-sa-8.9.5",
        "badge": "Câu 5 (VD) - Tìm nghiệm dương của phương trình",
        "prompt": "Tìm nghiệm dương của phương trình: $x^2 - 9x = 0$.",
        "correctAnswer": "9",
        "acceptableAnswers": [
          "9",
          "chín"
        ],
        "explanation": "$x(x - 9) = 0 \\Leftrightarrow x = 0$ hoặc $x = 9$. Nghiệm dương là $9$."
      },
      {
        "id": "ai-sa-8.9.6",
        "badge": "Câu 6 (VD - Thực tế) - Diện tích lối đi",
        "prompt": "Một cái ao hình vuông cạnh $20\\text{ m}$ được đào ở giữa một mảnh đất hình vuông cạnh $30\\text{ m}$. Diện tích đất còn lại để trồng cỏ bằng bao nhiêu mét vuông?",
        "correctAnswer": "500",
        "acceptableAnswers": [
          "500",
          "năm trăm",
          "500m2",
          "500 m2"
        ],
        "explanation": "$S = 30^2 - 20^2 = (30 - 20)(30 + 20) = 10 \\times 50 = 500\\text{ (m}^2\\text{)}$."
      }
    ]
  },
  "t8-on-tap-chuong-2": {
    "quizQuestions": [
      {
        "id": "ai-8.ot2.1",
        "badge": "Luyện thêm 1 (NB) - Khai triển bình phương một tổng",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Khai triển biểu thức $(x + 5)^2$ ta được kết quả là:",
        "options": [
          "$x^2 + 10x + 25$",
          "$x^2 + 25$",
          "$x^2 + 5x + 25$",
          "$x^2 + 10x + 10$"
        ],
        "correctIndex": 0,
        "explanation": "$(x + 5)^2 = x^2 + 2(x)(5) + 5^2 = x^2 + 10x + 25$."
      },
      {
        "id": "ai-8.ot2.2",
        "badge": "Luyện thêm 2 (NB) - Khai triển hiệu hai bình phương",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Khai triển tích $(3x - 1)(3x + 1)$ ta được:",
        "options": [
          "$9x^2 - 1$",
          "$9x^2 + 1$",
          "$3x^2 - 1$",
          "$9x - 1$"
        ],
        "correctIndex": 0,
        "explanation": "$(3x)^2 - 1^2 = 9x^2 - 1$."
      },
      {
        "id": "ai-8.ot2.3",
        "badge": "Luyện thêm 3 (NB) - Lập phương một hiệu",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Khai triển hằng đẳng thức $(x - 2)^3$ ta được:",
        "options": [
          "$x^3 - 6x^2 + 12x - 8$",
          "$x^3 - 8$",
          "$x^3 - 6x^2 - 12x - 8$",
          "$x^3 + 6x^2 - 12x + 8$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 2)^3 = x^3 - 6x^2 + 12x - 8$."
      },
      {
        "id": "ai-8.ot2.4",
        "badge": "Luyện thêm 4 (NB) - Tổng hai lập phương",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Khai triển biểu thức $(x + 1)(x^2 - x + 1)$ ta được:",
        "options": [
          "$x^3 + 1$",
          "$x^3 - 1$",
          "$x^3 + 3x + 1$",
          "$(x + 1)^3$"
        ],
        "correctIndex": 0,
        "explanation": "$x^3 + 1^3 = x^3 + 1$."
      },
      {
        "id": "ai-8.ot2.5",
        "badge": "Luyện thêm 5 (TH) - Đặt nhân tử chung",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Phân tích đa thức $7x^2 - 14x$ thành nhân tử:",
        "options": [
          "$7x(x - 2)$",
          "$7(x^2 - 2)$",
          "$x(7x - 14)$",
          "$7x(x + 2)$"
        ],
        "correctIndex": 0,
        "explanation": "$7x(x - 2)$."
      },
      {
        "id": "ai-8.ot2.6",
        "badge": "Luyện thêm 6 (TH) - Nhóm 2 - 2",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Phân tích đa thức $x^2 - xy + 4x - 4y$ thành nhân tử:",
        "options": [
          "$(x - y)(x + 4)$",
          "$(x + y)(x - 4)$",
          "$(x - y)(x - 4)$",
          "$(x + y)(x + 4)$"
        ],
        "correctIndex": 0,
        "explanation": "$x(x - y) + 4(x - y) = (x - y)(x + 4)$."
      },
      {
        "id": "ai-8.ot2.7",
        "badge": "Luyện thêm 7 (TH) - Nhóm 3 - 1",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Phân tích đa thức $x^2 - 6x + 9 - y^2$ thành nhân tử:",
        "options": [
          "$(x - 3 - y)(x - 3 + y)$",
          "$(x - 3 - y)^2$",
          "$(x + 3 - y)(x + 3 + y)$",
          "$(x - y - 3)(x - y + 3)$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 3)^2 - y^2 = (x - 3 - y)(x - 3 + y)$."
      },
      {
        "id": "ai-8.ot2.8",
        "badge": "Luyện thêm 8 (TH) - Tính nhanh giá trị biểu thức",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Tính nhanh giá trị của $78 \\cdot 82$:",
        "options": [
          "$6396$",
          "$6400$",
          "$6394$",
          "$6404$"
        ],
        "correctIndex": 0,
        "explanation": "$(80 - 2)(80 + 2) = 80^2 - 2^2 = 6400 - 4 = 6396$."
      },
      {
        "id": "ai-8.ot2.9",
        "badge": "Luyện thêm 9 (VD) - Tìm x bằng phương trình tích",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Nghiệm của phương trình $x^2 - 36 + (x - 6)(x + 1) = 0$ là:",
        "options": [
          "$x = 6$ hoặc $x = -\\frac{7}{2}$",
          "$x = 6$ hoặc $x = 7$",
          "$x = -6$ hoặc $x = \\frac{7}{2}$",
          "$x = 6$"
        ],
        "correctIndex": 0,
        "explanation": "$(x - 6)(x + 6) + (x - 6)(x + 1) = 0 \\Leftrightarrow (x - 6)(2x + 7) = 0 \\Leftrightarrow x = 6$ hoặc $x = -\\frac{7}{2}$."
      },
      {
        "id": "ai-8.ot2.10",
        "badge": "Luyện thêm 10 (VD - Thực tế) - Diện tích sân gạch",
        "isAiGenerated": true,
        "source": "Toán 8 KNTT Ôn tập Chương II",
        "question": "Một khu đất hình vuông cạnh $50\\text{ m}$ có một hồ nước hình vuông cạnh $30\\text{ m}$ ở chính giữa. Diện tích đất xung quanh hồ bằng:",
        "options": [
          "$1600\\text{ m}^2$",
          "$2000\\text{ m}^2$",
          "$2500\\text{ m}^2$",
          "$1200\\text{ m}^2$"
        ],
        "correctIndex": 0,
        "explanation": "$50^2 - 30^2 = (50 - 30)(50 + 30) = 20 \\times 80 = 1600\\text{ (m}^2\\text{)}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-8.ot2.1",
        "badge": "Luyện thêm Đ/S 1 - Khẳng định về hằng đẳng thức",
        "prompt": "Xét tính đúng/sai của các phát biểu sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Đẳng thức $(x + 4)^2 = x^2 + 8x + 16$ là đúng.",
            "correctAnswer": true,
            "explanation": "Đúng, bình phương một tổng."
          },
          {
            "id": "b",
            "text": "Đa thức $x^2 - 9$ phân tích thành $(x - 3)(x + 3)$.",
            "correctAnswer": true,
            "explanation": "Đúng, hiệu hai bình phương."
          },
          {
            "id": "c",
            "text": "Đa thức $x^3 - 8$ phân tích thành $(x - 2)^3$.",
            "correctAnswer": false,
            "explanation": "Sai, $x^3 - 8 = (x - 2)(x^2 + 2x + 4) \\ne (x - 2)^3$."
          },
          {
            "id": "d",
            "text": "Phương trình $x^2 = 9$ có hai nghiệm là $x = 3$ và $x = -3$.",
            "correctAnswer": true,
            "explanation": "Đúng, $x^2 - 9 = 0 \\Leftrightarrow x = \\pm 3$."
          }
        ]
      },
      {
        "id": "ai-tf-8.ot2.2",
        "badge": "Luyện thêm Đ/S 2 - Rút gọn và thực tế",
        "prompt": "Xét tính đúng/sai của các bài toán sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Giá trị của biểu thức $(x + 2)^2 - (x - 2)^2$ bằng $8x$.",
            "correctAnswer": true,
            "explanation": "Đúng, $4x - (-4x) = 8x$."
          },
          {
            "id": "b",
            "text": "Giá trị của $65^2 - 35^2$ bằng $3000$.",
            "correctAnswer": true,
            "explanation": "Đúng, $(65 - 35)(65 + 35) = 30 \\times 100 = 3000$."
          },
          {
            "id": "c",
            "text": "Một khối lập phương cạnh $3\\text{ m}$ có thể tích là $9\\text{ m}^3$.",
            "correctAnswer": false,
            "explanation": "Sai, $V = 3^3 = 27\\text{ m}^3$."
          },
          {
            "id": "d",
            "text": "Với mọi $n \\in \\mathbb{N}$, số $n(n + 1)$ luôn chia hết cho 2.",
            "correctAnswer": true,
            "explanation": "Đúng, tích 2 số tự nhiên liên tiếp luôn chẵn."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-8.ot2.1",
        "badge": "Câu 1 (NB) - Hệ số tự do của bình phương",
        "prompt": "Hệ số tự do trong khai triển $(x - 5)^2$ bằng bao nhiêu?",
        "correctAnswer": "25",
        "acceptableAnswers": [
          "25",
          "hai mươi lăm"
        ],
        "explanation": "$(-5)^2 = 25$."
      },
      {
        "id": "ai-sa-8.ot2.2",
        "badge": "Câu 2 (TH) - Tìm hằng số trong hằng đẳng thức",
        "prompt": "Cho đa thức $x^2 - 12x + 36 = (x - a)^2$. Giá trị của $a$ bằng bao nhiêu?",
        "correctAnswer": "6",
        "acceptableAnswers": [
          "6",
          "sáu"
        ],
        "explanation": "$x^2 - 2(6)x + 6^2 = (x - 6)^2 \\Rightarrow a = 6$."
      },
      {
        "id": "ai-sa-8.ot2.3",
        "badge": "Câu 3 (TH) - Tính nhanh hiệu hai bình phương",
        "prompt": "Tính giá trị số của biểu thức: $105^2 - 25$.",
        "correctAnswer": "11000",
        "acceptableAnswers": [
          "11000",
          "11.000",
          "mười một nghìn"
        ],
        "explanation": "$105^2 - 5^2 = (105 - 5)(105 + 5) = 100 \\times 110 = 11000$."
      },
      {
        "id": "ai-sa-8.ot2.4",
        "badge": "Câu 4 (TH) - Số nghiệm của phương trình",
        "prompt": "Phương trình $x(x - 2)(x + 2) = 0$ có bao nhiêu nghiệm thực?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "ba"
        ],
        "explanation": "$x = 0, x = 2, x = -2$. Có 3 nghiệm."
      },
      {
        "id": "ai-sa-8.ot2.5",
        "badge": "Câu 5 (VD) - Tìm nghiệm dương của phương trình",
        "prompt": "Tìm nghiệm dương của phương trình: $x^2 - 64 = 0$.",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "tám"
        ],
        "explanation": "$x^2 = 64 \\Leftrightarrow x = \\pm 8$. Nghiệm dương là $8$."
      },
      {
        "id": "ai-sa-8.ot2.6",
        "badge": "Câu 6 (VD - Thực tế) - Thể tích bể nước tăng thêm",
        "prompt": "Một khối lập phương cạnh $4\\text{ m}$ có thể tích bằng bao nhiêu mét khối?",
        "correctAnswer": "64",
        "acceptableAnswers": [
          "64",
          "sáu mươi tư",
          "64m3",
          "64 m3"
        ],
        "explanation": "$V = 4^3 = 64\\text{ (m}^3\\text{)}$."
      }
    ]
  },
};
