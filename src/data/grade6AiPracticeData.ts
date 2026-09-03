import { QuizQuestion } from "@/data/allGradesLessonsData";

/**
 * BỘ ĐỀ LUYỆN TẬP THÊM (AI PRACTICE) 1-1 TƯƠNG ỨNG VỚI TỪNG BÀI TẬP SGK TOÁN 6
 * Dạng tương tự, khác số liệu, khác ngữ cảnh thực tế, chuẩn xác 100%
 */
export const GRADE_6_AI_PRACTICE_DATA: { [lessonId: string]: QuizQuestion[] } = {
  "t6-b1-tap-hop": [
    {
      "id": "ai-1.1",
      "badge": "Luyện tập 1",
      "isAiGenerated": true,
      "source": "Câu 2 - TN6 CI Bài 1 & SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các tập hợp sau đây, tập hợp nào có ĐÚNG một phần tử?",
      "options": [
        "$\\{x\\}$",
        "$\\{x; y\\}$",
        "$\\{x; 1\\}$",
        "$\\emptyset$"
      ],
      "correctIndex": 0,
      "explanation": "Tập hợp $\\{x\\}$ có đúng 1 phần tử là $x$. Tập $\\{x; y\\}$ và $\\{x; 1\\}$ đều có 2 phần tử; tập $\\emptyset$ là tập rỗng không có phần tử nào."
    },
    {
      "id": "ai-1.2",
      "badge": "Luyện tập 2",
      "isAiGenerated": true,
      "source": "Câu 5 - TN6 CI Bài 1 & SH6-CĐ 1.1 Bài 5 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho hai tập hợp $A = \\{2; 5; 8\\}$ và $B = \\{2; 6\\}$. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "Phần tử 2 vừa thuộc tập hợp $A$ vừa thuộc tập hợp $B$",
        "Phần tử 2 chỉ thuộc tập hợp $A$",
        "Phần tử 2 chỉ thuộc tập hợp $B$",
        "Phần tử 5 vừa thuộc tập hợp $A$ vừa thuộc tập hợp $B$"
      ],
      "correctIndex": 0,
      "explanation": "Ta thấy số 2 có mặt trong cả hai tập hợp $A$ và $B$ ($2 \\in A$ và $2 \\in B$), nên phần tử 2 vừa thuộc tập hợp $A$ vừa thuộc tập hợp $B$."
    },
    {
      "id": "ai-1.3",
      "badge": "Luyện tập 3",
      "isAiGenerated": true,
      "source": "Câu 7 - TN6 CI Bài 1 & SGK Toán 6 Trang 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Kí hiệu $\\mathbb{N}$ là tập hợp các số tự nhiên. Cách viết nào sau đây là ĐÚNG?",
      "options": [
        "$\\mathbb{N} = \\{0; 1; 2; 3; 4; \\dots\\}$",
        "$\\mathbb{N} = \\{1; 2; 3; 4; \\dots\\}$",
        "$\\mathbb{N} = \\{0; 1; 2; 3; 4\\}$",
        "$\\mathbb{N}^* = \\{0; 1; 2; 3; 4; \\dots\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Tập hợp các số tự nhiên $\\mathbb{N}$ bắt đầu từ số 0 và kéo dài vô tận: $\\mathbb{N} = \\{0; 1; 2; 3; 4; \\dots\\}$."
    },
    {
      "id": "ai-1.4",
      "badge": "Luyện tập 4",
      "isAiGenerated": true,
      "source": "Dạng 1 Bài 2 - SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Bằng cách liệt kê các phần tử, hãy viết tập hợp $Y$ các chữ cái xuất hiện trong từ \"TRÁCH NHIỆM\":",
      "options": [
        "$Y = \\{\\text{T; R; A; C; H; N; I; E; M}\\}$",
        "$Y = \\{\\text{T; R; A; C; H; N; H; I; E; M}\\}$",
        "$Y = \\{\\text{T; R; A; C; H; I; E; M}\\}$",
        "$Y = \\{\\text{R; A; C; H; N; I; E; M}\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Trong từ \"TRÁCH NHIỆM\", chữ cái H xuất hiện hai lần nhưng trong tập hợp chỉ được viết một lần. Tập hợp gồm các chữ cái: T, R, A, C, H, N, I, E, M."
    },
    {
      "id": "ai-1.5",
      "badge": "Luyện tập 5",
      "isAiGenerated": true,
      "source": "Bài 1.4 - SGK Toán 6 Tập 1, Trang 8 & SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Hãy viết tập hợp $B$ gồm các tháng (dương lịch) có 30 ngày trong năm:",
      "options": [
        "$B = \\{\\text{tháng Tư; tháng Sáu; tháng Chín; tháng Mười một}\\}$",
        "$B = \\{\\text{tháng Một; tháng Ba; tháng Năm; tháng Bảy}\\}$",
        "$B = \\{\\text{tháng Tư; tháng Sáu; tháng Tám; tháng Mười một}\\}$",
        "$B = \\{\\text{tháng Hai; tháng Tư; tháng Sáu; tháng Chín}\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Trong năm dương lịch, các tháng có đúng 30 ngày gồm: tháng Tư, tháng Sáu, tháng Chín và tháng Mười một. Do đó $B = \\{\\text{tháng Tư; tháng Sáu; tháng Chín; tháng Mười một}\\}$."
    },
    {
      "id": "ai-1.6",
      "badge": "Luyện tập 6",
      "isAiGenerated": true,
      "source": "Dạng 1 Bài 6 - SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho ba chữ số $0; 4; 7$. Viết tập hợp $S$ các số tự nhiên có hai chữ số lập được từ ba chữ số đã cho:",
      "options": [
        "$S = \\{40; 44; 47; 70; 74; 77\\}$",
        "$S = \\{40; 47; 70; 74\\}$",
        "$S = \\{04; 07; 40; 47; 70; 74\\}$",
        "$S = \\{44; 47; 74; 77\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Chữ số hàng chục phải khác 0 nên có 2 cách chọn (4 hoặc 7). Chữ số hàng đơn vị có 3 cách chọn (0; 4; 7). Các số lập được là: 40; 44; 47; 70; 74; 77."
    },
    {
      "id": "ai-1.7",
      "badge": "Luyện tập 7",
      "isAiGenerated": true,
      "source": "BTVN Bài 7 - SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho $A$ là tập hợp các số tự nhiên chia hết cho 5 và nhỏ hơn 25. Viết tập hợp $A$ bằng cách liệt kê các phần tử:",
      "options": [
        "$A = \\{0; 5; 10; 15; 20\\}$",
        "$A = \\{5; 10; 15; 20\\}$",
        "$A = \\{0; 5; 10; 15; 20; 25\\}$",
        "$A = \\{5; 10; 15; 20; 25\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Các số tự nhiên chia hết cho 5 và nhỏ hơn 25 gồm: 0; 5; 10; 15; 20. Do đó $A = \\{0; 5; 10; 15; 20\\}$."
    },
    {
      "id": "ai-1.8",
      "badge": "Luyện tập 8",
      "isAiGenerated": true,
      "source": "Dạng 1 Bài 5b - SH6-CĐ 1.1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Viết tập hợp $E$ các số tự nhiên có hai chữ số trong đó tổng chữ số hàng chục và chữ số hàng đơn vị là 15:",
      "options": [
        "$E = \\{69; 78; 87; 96\\}$",
        "$E = \\{59; 68; 77; 86; 95\\}$",
        "$E = \\{78; 87; 96\\}$",
        "$E = \\{69; 78; 87\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Các cặp chữ số từ 1 đến 9 có tổng bằng 15 là: $6 + 9 = 15$ và $7 + 8 = 15$. Từ đó lập được các số: 69; 78; 87; 96. Vậy $E = \\{69; 78; 87; 96\\}$."
    },
    {
      "id": "ai-1.9",
      "badge": "Luyện tập 9",
      "isAiGenerated": true,
      "source": "Câu 13 - TN6 CI Bài 1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho hai tập hợp $A = \\{1; 2; 3; 4; 5\\}$ và $B = \\{a; b; c; d\\}$. Có bao nhiêu tập hợp có hai phần tử thỏa mãn có một phần tử thuộc tập hợp $A$ và một phần tử thuộc tập hợp $B$?",
      "options": [
        "20 tập hợp",
        "16 tập hợp",
        "18 tập hợp",
        "9 tập hợp"
      ],
      "correctIndex": 0,
      "explanation": "Tập hợp $A$ có 5 phần tử, tập hợp $B$ có 4 phần tử. Mỗi phần tử của $A$ kết hợp với 1 phần tử của $B$ tạo thành 1 tập hợp có 2 phần tử. Vậy số tập hợp lập được là: $5 \\times 4 = 20$ tập hợp."
    },
    {
      "id": "ai-1.10",
      "badge": "Luyện tập 10",
      "isAiGenerated": true,
      "source": "Câu 14 - TN6 CI Bài 1 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Lớp 6A có 15 bạn thích môn Tiếng Việt, 20 bạn thích môn Toán. Trong số các bạn thích Tiếng Việt hoặc thích Toán có 8 bạn thích cả hai môn Tiếng Việt và Toán. Trong lớp vẫn còn có 10 bạn không thích môn nào (trong hai môn Tiếng Việt và Toán). Lớp 6A có tất cả bao nhiêu bạn?",
      "options": [
        "37 bạn",
        "40 bạn",
        "33 bạn",
        "53 bạn"
      ],
      "correctIndex": 0,
      "explanation": "Số học sinh chỉ thích môn Tiếng Việt là: $15 - 8 = 7$ (bạn). Số học sinh chỉ thích môn Toán là: $20 - 8 = 12$ (bạn). Tổng số học sinh lớp 6A là: $7 + 12 + 8 + 10 = 37$ (bạn)."
    }
  ],
  "t6-b2-cach-ghi-so-tu-nhien": [
    {
      "id": "ai-2.1",
      "badge": "Luyện tập 1",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.2 Dạng 1 Bài 1a (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Viết số tự nhiên có số chục là $135$ và chữ số hàng đơn vị là $7$:",
      "options": [
        "$1357$",
        "$13507$",
        "$1375$",
        "$1537$"
      ],
      "correctIndex": 0,
      "explanation": "Số tự nhiên có số chục là $135$, chữ số hàng đơn vị là $7$ được viết là: $135 \\times 10 + 7 = 1357$."
    },
    {
      "id": "ai-2.2",
      "badge": "Luyện tập 2",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.2 Dạng 1 Bài 1b (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho số $1425$. Số trăm và chữ số hàng trăm của số này lần lượt là:",
      "options": [
        "Số trăm là $14$, chữ số hàng trăm là $4$",
        "Số trăm là $4$, chữ số hàng trăm là $4$",
        "Số trăm là $142$, chữ số hàng trăm là $2$",
        "Số trăm là $14$, chữ số hàng trăm là $1$"
      ],
      "correctIndex": 0,
      "explanation": "Trong số $1425$, chữ số đứng ở hàng trăm là $4$, còn số trăm là $14$ (vì $1425 = 14 \\times 100 + 25$)."
    },
    {
      "id": "ai-2.3",
      "badge": "Luyện tập 3",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.2 Dạng 1 Bài 2b & TN6 CI Bài 2 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Số tự nhiên nhỏ nhất có bốn chữ số khác nhau là:",
      "options": [
        "$1023$",
        "$1000$",
        "$1234$",
        "$1032$"
      ],
      "correctIndex": 0,
      "explanation": "Chữ số hàng nghìn nhỏ nhất khác 0 là $1$, chữ số hàng trăm nhỏ nhất còn lại là $0$, chữ số hàng chục nhỏ nhất là $2$, chữ số hàng đơn vị nhỏ nhất là $3$. Số nhỏ nhất là $1023$."
    },
    {
      "id": "ai-2.4",
      "badge": "Luyện tập 4",
      "isAiGenerated": true,
      "source": "Câu 12 - TN6 CI Bài 2 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Một số tự nhiên được viết bởi ba chữ số $1$ và ba chữ số $0$ nằm xen kẽ nhau. Số đó là:",
      "options": [
        "$101010$",
        "$010101$",
        "$10101$",
        "$111000$"
      ],
      "correctIndex": 0,
      "explanation": "Chữ số đầu tiên của số tự nhiên phải khác 0, nên chữ số đầu tiên là 1. Các chữ số 1 và 0 xen kẽ nhau: $101010$."
    },
    {
      "id": "ai-2.5",
      "badge": "Luyện tập 5",
      "isAiGenerated": true,
      "source": "Câu 10 - TN6 CI Bài 2 & SH6-CĐ 1.2 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Các số La Mã $\\text{XI}$ và $\\text{XXII}$ lần lượt tương ứng với giá trị nào trong hệ thập phân?",
      "options": [
        "$11$ và $22$",
        "$11$ và $21$",
        "$9$ và $22$",
        "$11$ và $20$"
      ],
      "correctIndex": 0,
      "explanation": "$\\text{XI} = 10 + 1 = 11$; $\\text{XXII} = 10 + 10 + 1 + 1 = 22$."
    },
    {
      "id": "ai-2.6",
      "badge": "Luyện tập 6",
      "isAiGenerated": true,
      "source": "Câu 16 - TN6 CI Bài 2 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Dùng bốn chữ số $0; 3; 5; 7$, viết số tự nhiên nhỏ nhất có bốn chữ số khác nhau mà chữ số $7$ có giá trị bằng $70$. Số đó là:",
      "options": [
        "$3075$",
        "$3570$",
        "$5370$",
        "$3057$"
      ],
      "correctIndex": 0,
      "explanation": "Chữ số 7 có giá trị bằng 70 nên chữ số 7 phải đứng ở hàng chục. Để số nhỏ nhất, chữ số hàng nghìn phải là chữ số nhỏ nhất khác 0 trong các chữ số còn lại ($3$), hàng trăm là $0$, hàng chục là $7$, hàng đơn vị là $5$. Vậy số đó là $3075$."
    },
    {
      "id": "ai-2.7",
      "badge": "Luyện tập 7",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.2 Dạng 2 Bài 2 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Dùng cả năm chữ số $0; 2; 5; 6; 9$ (mỗi chữ số chỉ được viết một lần), số tự nhiên lớn nhất có thể viết được là:",
      "options": [
        "$96\\ 520$",
        "$96\\ 502$",
        "$95\\ 620$",
        "$96\\ 250$"
      ],
      "correctIndex": 0,
      "explanation": "Để viết số lớn nhất, ta xếp các chữ số theo thứ tự giảm dần từ hàng cao nhất đến hàng thấp nhất: hàng chục nghìn là 9, hàng nghìn là 6, hàng trăm là 5, hàng chục là 2, hàng đơn vị là 0. Số lớn nhất là $96\\ 520$."
    },
    {
      "id": "ai-2.8",
      "badge": "Luyện tập 8",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.2 Dạng 2 Bài 6b (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Viết tập hợp các số tự nhiên có hai chữ số mà chữ số hàng chục gấp ba lần chữ số hàng đơn vị bằng cách liệt kê:",
      "options": [
        "$\\{31; 62; 93\\}$",
        "$\\{30; 31; 62; 93\\}$",
        "$\\{13; 26; 39\\}$",
        "$\\{31; 62\\}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số đó là $\\overline{ab}$ ($a, b \\in \\mathbb{N}, 1 \\le a \\le 9, 0 \\le b \\le 9$). Vì $a = 3b$ và $a > 0$ nên $b \\in \\{1; 2; 3\\}$. Khi đó $a$ tương ứng là $3; 6; 9$. Ta được các số: $31; 62; 93$."
    },
    {
      "id": "ai-2.9",
      "badge": "Luyện tập 9",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.2 Dạng 3 Bài 4b (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Có tất cả bao nhiêu số tự nhiên có ba chữ số?",
      "options": [
        "$900$ số",
        "$899$ số",
        "$901$ số",
        "$999$ số"
      ],
      "correctIndex": 0,
      "explanation": "Số nhỏ nhất có ba chữ số là $100$, số lớn nhất có ba chữ số là $999$. Số các số có ba chữ số là: $(999 - 100) + 1 = 900$ số."
    },
    {
      "id": "ai-2.10",
      "badge": "Luyện tập 10",
      "isAiGenerated": true,
      "source": "Câu 18 - TN6 CI Bài 2 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Mẹ cho An 1 tờ tiền mệnh giá $100\\ 000$ đồng, 3 tờ tiền $20\\ 000$ đồng, 4 tờ tiền $10\\ 000$ đồng và 1 tờ tiền $5\\ 000$ đồng để mua vở. Biết giá mỗi quyển vở là $5\\ 500$ đồng. Hỏi An mua được nhiều nhất bao nhiêu quyển vở?",
      "options": [
        "$37$ quyển vở",
        "$38$ quyển vở",
        "$39$ quyển vở",
        "$40$ quyển vở"
      ],
      "correctIndex": 0,
      "explanation": "Tổng số tiền mẹ đưa cho An là: $100\\ 000 + 3 \\times 20\\ 000 + 4 \\times 10\\ 000 + 5\\ 000 = 205\\ 000$ (đồng). Ta có: $205\\ 000 : 5\\ 500 = 37$ (dư $1\\ 500$ đồng). Vậy An mua được nhiều nhất $37$ quyển vở."
    }
  ],
  "t6-b3-thu-tu-so-tu-nhien": [
    {
      "id": "ai-3.1",
      "badge": "Luyện tập 1",
      "isAiGenerated": true,
      "source": "Câu 3 - TN6 CI Bài 3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Điểm biểu diễn số tự nhiên nằm ngay bên phải điểm $9$ trên tia số là:",
      "options": [
        "Điểm $10$",
        "Điểm $8$",
        "Điểm $11$",
        "Điểm $0$"
      ],
      "correctIndex": 0,
      "explanation": "Số tự nhiên nằm ngay bên phải số 9 trên tia số là số liền sau của 9: $9 + 1 = 10$. Do đó điểm nằm ngay bên phải điểm 9 là điểm 10."
    },
    {
      "id": "ai-3.2",
      "badge": "Luyện tập 2",
      "isAiGenerated": true,
      "source": "Câu 2 Trắc nghiệm - SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Số tự nhiên lớn nhất có hai chữ số là số:",
      "options": [
        "$99$",
        "$98$",
        "$97$",
        "$100$"
      ],
      "correctIndex": 0,
      "explanation": "Các số tự nhiên có hai chữ số từ $10$ đến $99$. Vậy số tự nhiên lớn nhất có hai chữ số là $99$."
    },
    {
      "id": "ai-3.3",
      "badge": "Luyện tập 3",
      "isAiGenerated": true,
      "source": "Câu 5a - SH6-CĐ 1.3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Viết các số tự nhiên liền trước và liền sau của số $1200$ để được ba số tự nhiên liên tiếp tăng dần:",
      "options": [
        "$1199;\\ 1200;\\ 1201$",
        "$1198;\\ 1200;\\ 1202$",
        "$1201;\\ 1200;\\ 1199$",
        "$1190;\\ 1200;\\ 1210$"
      ],
      "correctIndex": 0,
      "explanation": "Số liền trước của 1200 là $1200 - 1 = 1199$, số liền sau của 1200 là $1200 + 1 = 1201$. Ba số liên tiếp tăng dần là: $1199;\\ 1200;\\ 1201$."
    },
    {
      "id": "ai-3.4",
      "badge": "Luyện tập 4",
      "isAiGenerated": true,
      "source": "Câu 13 - TN6 CI Bài 3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tích của số liền sau $2$ với số liền trước $4$ là:",
      "options": [
        "$9$",
        "$6$",
        "$8$",
        "$12$"
      ],
      "correctIndex": 0,
      "explanation": "Số liền sau của 2 là 3, số liền trước của 4 là 3. Tích của chúng là: $3 \\times 3 = 9$."
    },
    {
      "id": "ai-3.5",
      "badge": "Luyện tập 5",
      "isAiGenerated": true,
      "source": "Câu 14 - TN6 CI Bài 3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid 12 \\le x \\le 16\\}$. Tích các phần tử của tập hợp $A$ có chữ số tận cùng là:",
      "options": [
        "$0$",
        "$2$",
        "$4$",
        "$6$"
      ],
      "correctIndex": 0,
      "explanation": "Tập hợp $A = \\{12; 13; 14; 15; 16\\}$. Tích các phần tử chứa thừa số $15$ và các số chẵn ($12, 14, 16$) nên có tận cùng là chữ số $0$."
    },
    {
      "id": "ai-3.6",
      "badge": "Luyện tập 6",
      "isAiGenerated": true,
      "source": "Câu 8 - TN6 CI Bài 3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho $x$ là một số tự nhiên lớn hơn $5$ và nhỏ hơn $8$. Khi đó vị trí của điểm $x$ trên tia số nằm ngang là:",
      "options": [
        "Nằm giữa điểm $5$ và điểm $8$",
        "Ở bên trái điểm $5$",
        "Ở bên phải điểm $8$",
        "Trùng với điểm $5$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $5 < x < 8$ nên trên tia số nằm ngang, điểm $x$ nằm bên phải điểm $5$ và bên trái điểm $8$, tức là nằm giữa điểm $5$ và điểm $8$."
    },
    {
      "id": "ai-3.7",
      "badge": "Luyện tập 7",
      "isAiGenerated": true,
      "source": "Câu 16 - TN6 CI Bài 3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính tổng các phần tử của tập hợp $B = \\{x \\in \\mathbb{N} \\mid 21 \\le x \\le 25\\}$:",
      "options": [
        "$115$",
        "$110$",
        "$120$",
        "$125$"
      ],
      "correctIndex": 0,
      "explanation": "Tập hợp $B = \\{21; 22; 23; 24; 25\\}$. Tổng các phần tử là: $21 + 22 + 23 + 24 + 25 = 115$."
    },
    {
      "id": "ai-3.8",
      "badge": "Luyện tập 8",
      "isAiGenerated": true,
      "source": "Câu 19 - TN6 CI Bài 3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các bộ ba số dưới đây, bộ ba số nào cho ta ba số tự nhiên liên tiếp tăng dần (với $a \\in \\mathbb{N}^*$)?",
      "options": [
        "$a - 1;\\ a;\\ a + 1$",
        "$a + 1;\\ a;\\ a - 1$",
        "$a - 2;\\ a;\\ a + 2$",
        "$a;\\ a + 2;\\ a + 3$"
      ],
      "correctIndex": 0,
      "explanation": "Với $a \\in \\mathbb{N}^*$, ta có $a - 1 < a < a + 1$ và mỗi số hơn số đứng trước 1 đơn vị. Do đó $a - 1;\\ a;\\ a + 1$ là ba số tự nhiên liên tiếp tăng dần."
    },
    {
      "id": "ai-3.9",
      "badge": "Luyện tập 9",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.3 Dạng 2 Bài 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm bốn số tự nhiên liên tiếp, biết rằng tổng của chúng bằng $2010$:",
      "options": [
        "$501;\\ 502;\\ 503;\\ 504$",
        "$500;\\ 501;\\ 502;\\ 503$",
        "$502;\\ 503;\\ 504;\\ 505$",
        "$499;\\ 500;\\ 501;\\ 502$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi bốn số tự nhiên liên tiếp là $x, x+1, x+2, x+3$. Ta có: $4x + 6 = 2010 \\Rightarrow 4x = 2004 \\Rightarrow x = 501$. Bốn số cần tìm là: $501;\\ 502;\\ 503;\\ 504$."
    },
    {
      "id": "ai-3.10",
      "badge": "Luyện tập 10",
      "isAiGenerated": true,
      "source": "Câu 9 - TN6 CI Bài 3 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Ba bạn Giang cao $145\\text{ cm}$, Cường cao $148\\text{ cm}$, Hiển cao $152\\text{ cm}$. Đánh dấu chiều cao của ba bạn lên tường bởi ba điểm $A, B, C$ theo thứ tự từ trên xuống dưới. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "Điểm $A$ ứng với bạn Hiển, $B$ ứng với bạn Cường, $C$ ứng với bạn Giang",
        "Điểm $A$ ứng với bạn Giang, $B$ ứng với bạn Cường, $C$ ứng với bạn Hiển",
        "Điểm $A$ ứng với bạn Cường, $B$ ứng với bạn Hiển, $C$ ứng với bạn Giang",
        "Điểm $A$ ứng với bạn Hiển, $B$ ứng với bạn Giang, $C$ ứng với bạn Cường"
      ],
      "correctIndex": 0,
      "explanation": "So sánh chiều cao: $152\\text{ cm} > 148\\text{ cm} > 145\\text{ cm}$. Từ trên xuống dưới điểm cao nhất là $A$ (bạn Hiển), tiếp theo là $B$ (bạn Cường), điểm thấp nhất là $C$ (bạn Giang)."
    }
  ],
  "t6-b4-phep-cong-tru-so-tu-nhien": [
    {
      "id": "ai-4.1",
      "badge": "Luyện tập 1",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.4 & TN6 CI Bài 4 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính nhẩm nhanh bằng cách nhóm số tròn trăm: $74 + 235 + 26 = ?$",
      "options": [
        "$335$",
        "$325$",
        "$345$",
        "$315$"
      ],
      "correctIndex": 0,
      "explanation": "$(74 + 26) + 235 = 100 + 235 = 335$."
    },
    {
      "id": "ai-4.2",
      "badge": "Luyện tập 2",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.4 - Phép Cộng Và Trừ Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Thay dấu ? bằng số thích hợp trong đẳng thức: $? - 345 = 655$",
      "options": [
        "$1\\ 000$",
        "$310$",
        "$900$",
        "$1\\ 100$"
      ],
      "correctIndex": 0,
      "explanation": "Số bị trừ = Hiệu + Số trừ = $655 + 345 = 1\\ 000$."
    },
    {
      "id": "ai-4.3",
      "badge": "Luyện tập 3",
      "isAiGenerated": true,
      "source": "TN6 CI Bài 4 - Phép Cộng Trừ (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm số tự nhiên $x$, biết: $48 - x = 19$. Giá trị của $x$ là:",
      "options": [
        "$x = 29$",
        "$x = 67$",
        "$x = 28$",
        "$x = 39$"
      ],
      "correctIndex": 0,
      "explanation": "$x = 48 - 19 = 29$."
    },
    {
      "id": "ai-4.4",
      "badge": "Luyện tập 4",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.4 - Phép Cộng Và Trừ Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Một thư viện trường có $15\\ 420$ cuốn sách. Tháng này quyên góp thêm $2\\ 580$ cuốn sách. Tổng số sách thư viện hiện có là:",
      "options": [
        "$18\\ 000$ cuốn",
        "$17\\ 900$ cuốn",
        "$18\\ 100$ cuốn",
        "$17\\ 000$ cuốn"
      ],
      "correctIndex": 0,
      "explanation": "$15\\ 420 + 2\\ 580 = 18\\ 000$ (cuốn)."
    },
    {
      "id": "ai-4.5",
      "badge": "Luyện tập 5",
      "isAiGenerated": true,
      "source": "TN6 CI Bài 4 & SGK Toán 6 KNTT (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính hợp lý giá trị biểu thức: $145 + 360 + 155 + 240 = ?$",
      "options": [
        "$900$",
        "$800$",
        "$1\\ 000$",
        "$850$"
      ],
      "correctIndex": 0,
      "explanation": "Ghép cặp: $(145 + 155) + (360 + 240) = 300 + 600 = 900$."
    }
  ],
  "t6-b5-phep-nhan-chia-so-tu-nhien": [
    {
      "id": "ai-5.1",
      "badge": "Luyện tập 1",
      "isAiGenerated": true,
      "source": "TN6 CI Bài 5 - Phép Nhân Chia (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Thực hiện phép nhân: $47 \\times 273 = ?$",
      "options": [
        "$12\\ 831$",
        "$12\\ 731$",
        "$11\\ 831$",
        "$13\\ 831$"
      ],
      "correctIndex": 0,
      "explanation": "$47 \\times 273 = 12\\ 831$."
    },
    {
      "id": "ai-5.2",
      "badge": "Luyện tập 2",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.5 - Phép Nhân Chia Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính nhẩm nhanh bằng cách kết hợp: $3\\ 025 \\times 125 \\times 8 = ?$",
      "options": [
        "$3\\ 025\\ 000$",
        "$302\\ 500$",
        "$30\\ 250\\ 000$",
        "$24\\ 200\\ 000$"
      ],
      "correctIndex": 0,
      "explanation": "$3\\ 025 \\times (125 \\times 8) = 3\\ 025 \\times 1\\ 000 = 3\\ 025\\ 000$."
    },
    {
      "id": "ai-5.3",
      "badge": "Luyện tập 3",
      "isAiGenerated": true,
      "source": "SH6-CĐ 1.5 - Phép Nhân Chia Số Tự Nhiên (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính một cách hợp lý: $43 \\times 95 + 5 \\times 43 = ?$",
      "options": [
        "$4\\ 300$",
        "$430$",
        "$43\\ 000$",
        "$4\\ 000$"
      ],
      "correctIndex": 0,
      "explanation": "$43 \\times (95 + 5) = 43 \\times 100 = 4\\ 300$."
    },
    {
      "id": "ai-5.4",
      "badge": "Luyện tập 4",
      "isAiGenerated": true,
      "source": "TN6 CI Bài 5 - Phép Nhân Chia (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm thương và số dư của phép chia $8\\ 956$ cho $83$:",
      "options": [
        "Thương là 107 và dư 75",
        "Thương là 107 và dư 0",
        "Thương là 108 và dư 75",
        "Thương là 106 và dư 82"
      ],
      "correctIndex": 0,
      "explanation": "$8\\ 956 = 83 \\times 107 + 75$. Vì $75 < 83$ nên thương là 107 và số dư là 75."
    },
    {
      "id": "ai-5.5",
      "badge": "Luyện tập 5",
      "isAiGenerated": true,
      "source": "TN6 CI Bài 5 & SGK Toán 6 KNTT (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm số tự nhiên $x$, biết: $(x - 34) \\times 15 = 0$. Giá trị của $x$ là:",
      "options": [
        "$x = 34$",
        "$x = 0$",
        "$x = 15$",
        "$x = 49$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $15 \\ne 0$ nên $x - 34 = 0 \\Rightarrow x = 34$."
    }
  ],
  "t6-b6-luy-thua-so-mu-tu-nhien": [
    {
      "id": "ai-6.1",
      "badge": "Luyện tập 32",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Viết các tích sau dưới dạng một lũy thừa: 8 · 8 · 8 · 8 và x · x · x · x · x:",
      "options": [
        "8⁴ và x⁵",
        "8 · 4 và 5x",
        "4⁸ và x⁵",
        "8⁴ và x⁴"
      ],
      "correctIndex": 0,
      "explanation": "8 · 8 · 8 · 8 = 8⁴ và x · x · x · x · x = x⁵."
    },
    {
      "id": "ai-6.2",
      "badge": "Luyện tập 33",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cho lũy thừa 5⁴. Xác định cơ số, số mũ và tính giá trị của lũy thừa đó:",
      "options": [
        "Cơ số là 5, số mũ là 4, giá trị là 625",
        "Cơ số là 4, số mũ là 5, giá trị là 625",
        "Cơ số là 5, số mũ là 4, giá trị là 20",
        "Cơ số là 4, số mũ là 5, giá trị là 1 024"
      ],
      "correctIndex": 0,
      "explanation": "5 là cơ số, 4 là số mũ. Giá trị = 5 × 5 × 5 × 5 = 625."
    },
    {
      "id": "ai-6.3",
      "badge": "Luyện tập 34",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính giá trị của các lũy thừa sau: 2⁶ và 3⁴:",
      "options": [
        "2⁶ = 64 và 3⁴ = 81",
        "2⁶ = 12 và 3⁴ = 12",
        "2⁶ = 32 và 3⁴ = 81",
        "2⁶ = 64 và 3⁴ = 27"
      ],
      "correctIndex": 0,
      "explanation": "2⁶ = 64 và 3⁴ = 81."
    },
    {
      "id": "ai-6.4",
      "badge": "Luyện tập 35",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Viết số 438 thành tổng giá trị các chữ số bằng các lũy thừa của 10:",
      "options": [
        "4 · 10² + 3 · 10¹ + 8 · 10⁰ (hay 4 · 10² + 3 · 10 + 8)",
        "4 · 10³ + 3 · 10² + 8 · 10¹",
        "43 · 10¹ + 8",
        "4 · 10² + 38"
      ],
      "correctIndex": 0,
      "explanation": "438 = 4 · 100 + 3 · 10 + 8 = 4 · 10² + 3 · 10¹ + 8 · 10⁰."
    },
    {
      "id": "ai-6.5",
      "badge": "Luyện tập 36",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Biết 22² = 484 và 222² = 49 284. Hãy dự đoán số chữ số của 2 222² khi khai triển:",
      "options": [
        "7 chữ số",
        "8 chữ số",
        "6 chữ số",
        "9 chữ số"
      ],
      "correctIndex": 0,
      "explanation": "2 222² = 4 937 284 có đúng 7 chữ số."
    },
    {
      "id": "ai-6.6",
      "badge": "Luyện tập 37",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Biết 3⁵ = 243. Hãy tính giá trị của 3⁴ và 3⁶:",
      "options": [
        "3⁴ = 81 và 3⁶ = 729",
        "3⁴ = 240 và 3⁶ = 246",
        "3⁴ = 81 và 3⁶ = 243",
        "3⁴ = 729 và 3⁶ = 81"
      ],
      "correctIndex": 0,
      "explanation": "3⁴ = 243 : 3 = 81. 3⁶ = 243 · 3 = 729."
    },
    {
      "id": "ai-6.7",
      "badge": "Luyện tập 38",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính kết quả phép tính: 7⁸ : 7⁵ = ? và 3⁸ : 27 · 9 = ?",
      "options": [
        "7³ và 2 187 (vì 7⁸⁻⁵ = 7³; 3⁸ : 3³ · 3² = 3⁷ = 2 187)",
        "7³ và 729",
        "7¹³ và 2 187",
        "1³ và 243"
      ],
      "correctIndex": 0,
      "explanation": "7⁸ : 7⁵ = 7³. 3⁸ : 3³ · 3² = 3⁸⁻³⁺² = 3⁷ = 2 187."
    },
    {
      "id": "ai-6.8",
      "badge": "Luyện tập 39",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Viết tổng các số lẻ 1 + 3 + 5 + 7 + 9 + 11 dưới dạng bình phương của một số tự nhiên:",
      "options": [
        "6² (vì tổng bằng 36 = 6²)",
        "5²",
        "7²",
        "12²"
      ],
      "correctIndex": 0,
      "explanation": "Tổng của 6 số lẻ đầu tiên bằng 6² = 36."
    },
    {
      "id": "ai-6.9",
      "badge": "Luyện tập 40",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Sao Hỏa cách Mặt Trời khoảng 228 000 000 km. Viết khoảng cách này dưới dạng tích của một số với một lũy thừa của 10:",
      "options": [
        "228 · 10⁶ km (hoặc 22,8 · 10⁷ km)",
        "228 · 10⁵ km",
        "228 · 10⁷ km",
        "22 · 10⁷ km"
      ],
      "correctIndex": 0,
      "explanation": "228 000 000 = 228 · 1 000 000 = 228 · 10⁶ km."
    }
  ],
  "t6-b7-thu-tu-thuc-hien-phep-tinh": [
    {
      "id": "ai-7.1",
      "badge": "Luyện tập 41",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính giá trị biểu thức: 100 - 2 · 3² = ?",
      "options": [
        "82 (vì 100 - 2 · 9 = 100 - 18 = 82)",
        "882",
        "964",
        "94"
      ],
      "correctIndex": 0,
      "explanation": "100 - 2 · 9 = 100 - 18 = 82."
    },
    {
      "id": "ai-7.2",
      "badge": "Luyện tập 42",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính giá trị biểu thức 2 · (x + 3) - 5 khi x = 7:",
      "options": [
        "15 (vì 2 · (7 + 3) - 5 = 2 · 10 - 5 = 15)",
        "20",
        "25",
        "10"
      ],
      "correctIndex": 0,
      "explanation": "2 · 10 - 5 = 20 - 5 = 15."
    },
    {
      "id": "ai-7.3",
      "badge": "Luyện tập 43",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính nhẩm nhanh biểu thức 198 + 254 bằng cách thêm bớt hợp lý:",
      "options": [
        "452 (vì (198 + 2) + (254 - 2) = 200 + 252 = 452)",
        "442",
        "462",
        "450"
      ],
      "correctIndex": 0,
      "explanation": "(198 + 2) + (254 - 2) = 200 + 252 = 452."
    },
    {
      "id": "ai-7.4",
      "badge": "Luyện tập 44",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b8-quan-he-chia-het": [
    {
      "id": "ai-8.1",
      "badge": "Luyện tập 45",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm tất cả các ước của số 35:",
      "options": [
        "{1; 5; 7; 35}",
        "{5; 7; 35}",
        "{1; 5; 7}",
        "{0; 1; 5; 7; 35}"
      ],
      "correctIndex": 0,
      "explanation": "Ư(35) = {1; 5; 7; 35}."
    },
    {
      "id": "ai-8.2",
      "badge": "Luyện tập 46",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các số {8; 18; 28; 32; 40}, những số nào là bội của 8?",
      "options": [
        "8; 32; 40",
        "18; 28",
        "8; 18; 28",
        "Tất cả các số"
      ],
      "correctIndex": 0,
      "explanation": "Các số chia hết cho 8 là 8; 32; 40."
    },
    {
      "id": "ai-8.3",
      "badge": "Luyện tập 47",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm các số tự nhiên x sao cho x ∈ B(9) và x < 40:",
      "options": [
        "{0; 9; 18; 27; 36}",
        "{9; 18; 27; 36; 45}",
        "{0; 9; 18; 27; 36; 45}",
        "{9; 18; 27; 36}"
      ],
      "correctIndex": 0,
      "explanation": "Bội của 9 nhỏ hơn 40 gồm 0; 9; 18; 27; 36."
    },
    {
      "id": "ai-8.4",
      "badge": "Luyện tập 48",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Không tính giá trị, hiệu B = 400 - 324 có chia hết cho 4 không?",
      "options": [
        "B chia hết cho 4 vì cả 400 và 324 đều chia hết cho 4",
        "B không chia hết cho 4",
        "Chỉ có 400 chia hết cho 4",
        "Không xác định được"
      ],
      "correctIndex": 0,
      "explanation": "400 ⋮ 4 và 324 ⋮ 4 nên hiệu B chia hết cho 4."
    },
    {
      "id": "ai-8.5",
      "badge": "Luyện tập 49",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-8.6",
      "badge": "Luyện tập 50",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b9-dau-hieu-chia-het-2-5": [
    {
      "id": "ai-9.1",
      "badge": "Luyện tập 51",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các số sau: 436; 515; 1 080; 3 045, nhóm số nào chia hết cho 2 và nhóm số nào chia hết cho 5?",
      "options": [
        "Chia hết cho 2: {436; 1 080}; Chia hết cho 5: {515; 1 080; 3 045}",
        "Chia hết cho 2: {436; 515}; Chia hết cho 5: {1 080}",
        "Chia hết cho 2: {515; 3 045}; Chia hết cho 5: {436; 1 080}",
        "Tất cả các số đều chia hết cho cả 2 và 5"
      ],
      "correctIndex": 0,
      "explanation": "Các số tận cùng là 0, 6 (436; 1 080) chia hết cho 2. Các số tận cùng là 0, 5 (515; 1 080; 3 045) chia hết cho 5."
    },
    {
      "id": "ai-9.2",
      "badge": "Luyện tập 52",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Cặp số nào sau đây vừa chia hết cho 2 vừa chia hết cho 5?",
      "options": [
        "70 và 250 (các số có chữ số tận cùng bằng 0)",
        "34 và 45",
        "25 và 65",
        "14 và 28"
      ],
      "correctIndex": 0,
      "explanation": "Số có chữ số tận cùng là 0 thì vừa chia hết cho 2 vừa chia hết cho 5, đó là 70 và 250."
    },
    {
      "id": "ai-9.3",
      "badge": "Luyện tập 53",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Không thực hiện phép tính, tổng B = 250 + 138 chia hết cho những số nào trong hai số 2 và 5?",
      "options": [
        "B chia hết cho 2 nhưng không chia hết cho 5 (vì 250 và 138 đều ⋮ 2, nhưng 138 không ⋮ 5)",
        "B chia hết cho cả 2 và 5",
        "B chia hết cho 5 nhưng không chia hết cho 2",
        "B không chia hết cho cả 2 và 5"
      ],
      "correctIndex": 0,
      "explanation": "250 và 138 đều là số chẵn nên chia hết cho 2 ⇒ B ⋮ 2. Do 138 không chia hết cho 5 nên B không chia hết cho 5."
    },
    {
      "id": "ai-9.4",
      "badge": "Luyện tập 54",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Khối 6 có ba lớp: 6A có 44 học sinh, 6B có 40 học sinh, 6C có 35 học sinh. Lớp nào có thể xếp thành 2 hàng đều nhau, và lớp nào xếp được thành 5 hàng đều nhau?",
      "options": [
        "Xếp 2 hàng đều: Lớp 6A và 6B; Xếp 5 hàng đều: Lớp 6B và 6C",
        "Xếp 2 hàng đều: Lớp 6C; Xếp 5 hàng đều: Lớp 6A",
        "Cả 3 lớp đều xếp được 2 hàng",
        "Chỉ có lớp 6A xếp được 5 hàng"
      ],
      "correctIndex": 0,
      "explanation": "44 và 40 chia hết cho 2 nên lớp 6A và 6B xếp được 2 hàng đều nhau. 40 và 35 chia hết cho 5 nên lớp 6B và 6C xếp được 5 hàng đều nhau."
    }
  ],
  "t6-b10-dau-hieu-chia-het-3-9": [
    {
      "id": "ai-10.1",
      "badge": "Luyện tập 55",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các số {540; 234; 1 205; 3 105}, số nào chia hết cho 9?",
      "options": [
        "540; 234 và 3 105 (tổng các chữ số đều bằng 9)",
        "1 205",
        "Chỉ có 540",
        "Tất cả các số"
      ],
      "correctIndex": 0,
      "explanation": "540 (tổng = 9), 234 (tổng = 9), 3 105 (tổng = 9) đều chia hết cho 9."
    },
    {
      "id": "ai-10.2",
      "badge": "Luyện tập 56",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các số {180; 414; 5 211; 6 123}, số nào chia hết cho 3 nhưng KHÔNG chia hết cho 9?",
      "options": [
        "6 123 (vì 6+1+2+3 = 12 chia hết cho 3 nhưng không chia hết cho 9)",
        "180",
        "414",
        "5 211"
      ],
      "correctIndex": 0,
      "explanation": "6 123 có tổng các chữ số là 12, chia hết cho 3 nhưng không chia hết cho 9."
    },
    {
      "id": "ai-10.3",
      "badge": "Luyện tập 57",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Thay dấu * bởi một chữ số thích hợp để số 25*4 chia hết cho 9:",
      "options": [
        "* = 7 (vì 2 + 5 + 7 + 4 = 18 chia hết cho 9)",
        "* = 0",
        "* = 9",
        "* = 2"
      ],
      "correctIndex": 0,
      "explanation": "Tổng chữ số 2 + 5 + * + 4 = 11 + *. Để chia hết cho 9 thì * = 7 (11 + 7 = 18)."
    },
    {
      "id": "ai-10.4",
      "badge": "Luyện tập 58",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Thay dấu * bởi chữ số thích hợp để số 15*5 chia hết cho 3:",
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
      "id": "ai-10.5",
      "badge": "Luyện tập 59",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-10.6",
      "badge": "Luyện tập 60",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b11-so-nguyen-to": [
    {
      "id": "ai-11.1",
      "badge": "Luyện tập 61",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-11.2",
      "badge": "Luyện tập 62",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-11.3",
      "badge": "Luyện tập 63",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b12-uoc-chung-ucln": [
    {
      "id": "ai-12.1",
      "badge": "Luyện tập 64",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm ước chung lớn nhất của 50 và 70 (ƯCLN(50, 70)):",
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
      "id": "ai-12.2",
      "badge": "Luyện tập 65",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm ƯCLN của ba số 15, 80 và 56:",
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
      "id": "ai-12.3",
      "badge": "Luyện tập 66",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Rút gọn phân số 36/108 về dạng tối giản bằng cách chia cho ƯCLN:",
      "options": [
        "2/9 (chia cả tử và mẫu cho ƯCLN = 12)",
        "4/18",
        "6/27",
        "8/36"
      ],
      "correctIndex": 0,
      "explanation": "ƯCLN(24, 108) = 12. Chia cả tử và mẫu cho 12: 24 : 12 = 2, 108 : 12 = 9 ⇒ 2/9."
    }
  ],
  "t6-b13-boi-chung-bcnn": [
    {
      "id": "ai-13.1",
      "badge": "Luyện tập 67",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-13.2",
      "badge": "Luyện tập 68",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm BCNN của ba số 18, 36 và 50:",
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
      "id": "ai-13.3",
      "badge": "Luyện tập 69",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Quy đồng mẫu hai phân số 5/15 và 7/15 với mẫu số chung nhỏ nhất là:",
      "options": [
        "60 (vì BCNN(12, 15) = 60)",
        "180",
        "120",
        "30"
      ],
      "correctIndex": 0,
      "explanation": "BCNN(12, 15) = 60. Mẫu chung nhỏ nhất là 60."
    }
  ],
  "t6-b14-tap-hop-so-nguyen": [
    {
      "id": "ai-14.1",
      "badge": "Luyện tập 70",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-14.2",
      "badge": "Luyện tập 71",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-14.3",
      "badge": "Luyện tập 72",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-14.4",
      "badge": "Luyện tập 73",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b15-phep-cong-tru-so-nguyen": [
    {
      "id": "ai-15.1",
      "badge": "Luyện tập 74",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính kết quả phép cộng hai số nguyên âm: (-15) + (-36) = ?",
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
      "id": "ai-15.2",
      "badge": "Luyện tập 75",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính hiệu hai số nguyên: 23 - (-15) = ?",
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
      "id": "ai-15.3",
      "badge": "Luyện tập 76",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-15.4",
      "badge": "Luyện tập 77",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b16-phep-nhan-so-nguyen": [
    {
      "id": "ai-16.1",
      "badge": "Luyện tập 78",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-16.2",
      "badge": "Luyện tập 79",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-16.3",
      "badge": "Luyện tập 80",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-16.4",
      "badge": "Luyện tập 81",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Áp dụng tính chất phân phối để tính nhanh: (-15) · 25 + (-15) · 75 = ?",
      "options": [
        "-1 200 (vì (-12) · (25 + 75) = (-12) · 100 = -1 200)",
        "1 200",
        "-120",
        "120"
      ],
      "correctIndex": 0,
      "explanation": "(-12) · (25 + 75) = (-12) · 100 = -1 200."
    }
  ],
  "t6-b17-phep-chia-het-so-nguyen": [
    {
      "id": "ai-17.1",
      "badge": "Luyện tập 82",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-17.2",
      "badge": "Luyện tập 83",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu": [
    {
      "id": "ai-18.1",
      "badge": "Luyện tập 84",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-18.2",
      "badge": "Luyện tập 85",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-18.3",
      "badge": "Luyện tập 86",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can": [
    {
      "id": "ai-19.1",
      "badge": "Luyện tập 87",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-19.2",
      "badge": "Luyện tập 88",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-19.3",
      "badge": "Luyện tập 89",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b20-chu-vi-dien-tich-tu-giac": [
    {
      "id": "ai-20.1",
      "badge": "Luyện tập 90",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tính chu vi và diện tích hình chữ nhật có chiều dài 15 cm và chiều rộng 8 cm:",
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
      "id": "ai-20.2",
      "badge": "Luyện tập 91",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-20.3",
      "badge": "Luyện tập 92",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-20.4",
      "badge": "Luyện tập 93",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Một hình thang có hai đáy 15 cm, 8 cm và chiều cao 6 cm. Diện tích hình thang là:",
      "options": [
        "60 cm² (vì S = (12 + 8) × 6 / 2 = 60 cm²)",
        "120 cm²",
        "30 cm²",
        "48 cm²"
      ],
      "correctIndex": 0,
      "explanation": "S = (a + b) · h / 2 = (12 + 8) × 6 / 2 = 60 cm²."
    }
  ],
  "t6-b21-hinh-co-truc-doi-xung": [
    {
      "id": "ai-21.1",
      "badge": "Luyện tập 94",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-21.2",
      "badge": "Luyện tập 95",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b22-hinh-co-tam-doi-xung": [
    {
      "id": "ai-22.1",
      "badge": "Luyện tập 96",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-22.2",
      "badge": "Luyện tập 97",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b23-mo-rong-phan-so": [
    {
      "id": "ai-23.1",
      "badge": "Luyện tập 98",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-23.2",
      "badge": "Luyện tập 99",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-23.3",
      "badge": "Luyện tập 100",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Rút gọn phân số -18/36 về dạng tối giản:",
      "options": [
        "-3/4 (chia cả tử và mẫu cho 6)",
        "-9/12",
        "-6/8",
        "3/4"
      ],
      "correctIndex": 0,
      "explanation": "ƯCLN(18, 24) = 6. Chia cả tử và mẫu cho 6: -18 : 6 = -3, 24 : 6 = 4 ⇒ -3/4."
    }
  ],
  "t6-b24-so-sanh-phan-so": [
    {
      "id": "ai-24.1",
      "badge": "Luyện tập 101",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-24.2",
      "badge": "Luyện tập 102",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-24.3",
      "badge": "Luyện tập 103",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b25-phep-cong-tru-phan-so": [
    {
      "id": "ai-25.1",
      "badge": "Luyện tập 104",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-25.2",
      "badge": "Luyện tập 105",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-25.3",
      "badge": "Luyện tập 106",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b26-phep-nhan-chia-phan-so": [
    {
      "id": "ai-26.1",
      "badge": "Luyện tập 107",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-26.2",
      "badge": "Luyện tập 108",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-26.3",
      "badge": "Luyện tập 109",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b27-hai-bai-toan-ve-phan-so": [
    {
      "id": "ai-27.1",
      "badge": "Luyện tập 110",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-27.2",
      "badge": "Luyện tập 111",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm một số biết 2/3 của số đó bằng 36:",
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
      "id": "ai-27.3",
      "badge": "Luyện tập 112",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Lớp 6A có 50 học sinh, trong đó số học sinh giỏi chiếm 2/5 số học sinh cả lớp. Số học sinh giỏi của lớp 6A là:",
      "options": [
        "16 học sinh (vì 40 × 2/5 = 16)",
        "20 học sinh",
        "18 học sinh",
        "24 học sinh"
      ],
      "correctIndex": 0,
      "explanation": "40 × 2/5 = 16 học sinh."
    }
  ],
  "t6-b28-so-thap-phan": [
    {
      "id": "ai-28.1",
      "badge": "Luyện tập 113",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-28.2",
      "badge": "Luyện tập 114",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Số đối của số thập phân -15,45 là:",
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
      "id": "ai-28.3",
      "badge": "Luyện tập 115",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b29-tinh-toan-so-thap-phan": [
    {
      "id": "ai-29.1",
      "badge": "Luyện tập 116",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-29.2",
      "badge": "Luyện tập 117",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-29.3",
      "badge": "Luyện tập 118",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b30-lam-tron-uoc-luong": [
    {
      "id": "ai-30.1",
      "badge": "Luyện tập 119",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-30.2",
      "badge": "Luyện tập 120",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b31-ti-so-ti-so-phan-tram": [
    {
      "id": "ai-31.1",
      "badge": "Luyện tập 121",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Lớp 6A có 50 học sinh, trong đó có 36 học sinh nữ. Tỉ số phần trăm của số học sinh nữ so với cả lớp là:",
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
      "id": "ai-31.2",
      "badge": "Luyện tập 122",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-31.3",
      "badge": "Luyện tập 123",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Một chiếc áo có giá niêm yết 250 000 đồng, nhân dịp khai giảng được giảm giá 20%. Số tiền người mua phải trả là:",
      "options": [
        "192 000 đồng (vì 240 000 × (100% - 20%) = 192 000)",
        "200 000 đồng",
        "48 000 đồng",
        "180 000 đồng"
      ],
      "correctIndex": 0,
      "explanation": "Số tiền giảm: 240 000 × 20% = 48 000 đồng. Số tiền phải trả: 240 000 - 48 000 = 192 000 đồng."
    }
  ],
  "t6-b32-diem-duong-thang": [
    {
      "id": "ai-32.1",
      "badge": "Luyện tập 124",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-32.2",
      "badge": "Luyện tập 125",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b33-diem-nam-giua-tia": [
    {
      "id": "ai-33.1",
      "badge": "Luyện tập 126",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-33.2",
      "badge": "Luyện tập 127",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b34-doan-thang": [
    {
      "id": "ai-34.1",
      "badge": "Luyện tập 128",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-34.2",
      "badge": "Luyện tập 129",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Đoạn thẳng AB có độ dài 15 cm. Điểm C nằm giữa A và B sao cho AC = 5 cm. Độ dài đoạn thẳng CB là:",
      "options": [
        "7 cm (vì CB = AB - AC = 12 - 5 = 7 cm)",
        "17 cm",
        "6 cm",
        "8 cm"
      ],
      "correctIndex": 0,
      "explanation": "CB = AB - AC = 12 - 5 = 7 cm."
    }
  ],
  "t6-b35-trung-diem-doan-thang": [
    {
      "id": "ai-35.1",
      "badge": "Luyện tập 130",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-35.2",
      "badge": "Luyện tập 131",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b36-goc": [
    {
      "id": "ai-36.1",
      "badge": "Luyện tập 132",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-36.2",
      "badge": "Luyện tập 133",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b37-so-do-goc": [
    {
      "id": "ai-37.1",
      "badge": "Luyện tập 134",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-37.2",
      "badge": "Luyện tập 135",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các góc có số đo sau: 45°, 90°, 155°, 180°, góc nào là góc tù?",
      "options": [
        "125° (vì 90° < 125° < 180°)",
        "45°",
        "90°",
        "180°"
      ],
      "correctIndex": 0,
      "explanation": "Góc lớn hơn 90° và nhỏ hơn 180° là góc tù."
    }
  ],
  "t6-b38-du-lieu-thu-thap": [
    {
      "id": "ai-38.1",
      "badge": "Luyện tập 136",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b39-bang-thong-ke-bieu-do-tranh": [
    {
      "id": "ai-39.1",
      "badge": "Luyện tập 137",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b40-bieu-do-cot": [
    {
      "id": "ai-40.1",
      "badge": "Luyện tập 138",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b41-bieu-do-cot-kep": [
    {
      "id": "ai-41.1",
      "badge": "Luyện tập 139",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b42-ket-qua-su-kien": [
    {
      "id": "ai-42.1",
      "badge": "Luyện tập 140",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-42.2",
      "badge": "Luyện tập 141",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b43-xac-suat-thuc-nghiem": [
    {
      "id": "ai-43.1",
      "badge": "Luyện tập 142",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tung một đồng xu 20 lần thấy có 15 lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt ngửa là:",
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
      "id": "ai-43.2",
      "badge": "Luyện tập 143",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b9-dau-hieu-chia-het-cho-2-cho-5": [
    {
      "id": "ai-9.1",
      "badge": "Luyện tập 144",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các số sau: 336; 368; 2 020; 2 025, nhóm số nào chia hết cho 2 và nhóm số nào chia hết cho 5?",
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
      "id": "ai-9.2",
      "badge": "Luyện tập 145",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-9.3",
      "badge": "Luyện tập 146",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Không thực hiện phép tính, tổng A = 258 + 550 chia hết cho những số nào trong hai số 2 và 5?",
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
      "id": "ai-9.4",
      "badge": "Luyện tập 147",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b10-dau-hieu-chia-het-cho-3-cho-9": [
    {
      "id": "ai-10.1",
      "badge": "Luyện tập 148",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các số {450; 153; 2 019; 2 025}, số nào chia hết cho 9?",
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
      "id": "ai-10.2",
      "badge": "Luyện tập 149",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Trong các số {90; 630; 7 155; 8 136}, số nào chia hết cho 3 nhưng KHÔNG chia hết cho 9?",
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
      "id": "ai-10.3",
      "badge": "Luyện tập 150",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-10.4",
      "badge": "Luyện tập 151",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Thay dấu * bởi chữ số thích hợp để số 15*5 chia hết cho 3:",
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
      "id": "ai-10.5",
      "badge": "Luyện tập 152",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-10.6",
      "badge": "Luyện tập 153",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
  ],
  "t6-b12-uoc-chung-va-uoc-chung-lon-nhat": [
    {
      "id": "ai-12.1",
      "badge": "Luyện tập 154",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm ước chung lớn nhất của 50 và 70 (ƯCLN(50, 70)):",
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
      "id": "ai-12.2",
      "badge": "Luyện tập 155",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm ƯCLN của ba số 15, 80 và 56:",
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
      "id": "ai-12.3",
      "badge": "Luyện tập 156",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Rút gọn phân số 36/108 về dạng tối giản bằng cách chia cho ƯCLN:",
      "options": [
        "2/9 (chia cả tử và mẫu cho ƯCLN = 12)",
        "4/18",
        "6/27",
        "8/36"
      ],
      "correctIndex": 0,
      "explanation": "ƯCLN(24, 108) = 12. Chia cả tử và mẫu cho 12: 24 : 12 = 2, 108 : 12 = 9 ⇒ 2/9."
    }
  ],
  "t6-b13-boi-chung-va-boi-chung-nho-nhat": [
    {
      "id": "ai-13.1",
      "badge": "Luyện tập 157",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
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
      "id": "ai-13.2",
      "badge": "Luyện tập 158",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Tìm BCNN của ba số 18, 36 và 50:",
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
      "id": "ai-13.3",
      "badge": "Luyện tập 159",
      "isAiGenerated": true,
      "source": "Ngân hàng Trắc nghiệm & Chuyên đề Dạy thêm Toán 6 (Thư mục Anti/Tài Liệu Lớp 6)",
      "question": "Quy đồng mẫu hai phân số 5/15 và 7/15 với mẫu số chung nhỏ nhất là:",
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
};
