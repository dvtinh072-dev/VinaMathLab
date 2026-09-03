import type { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";

export const GRADE_9_AI_PRACTICE_DATA: Record<string, QuizQuestion[]> = {
  "t9-b1-khai-niem-he-phuong-trinh": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10)
    {
      "id": "ai-9.1.1",
      "badge": "Luyện thêm 1 - Nhận dạng phương trình bậc nhất hai ẩn",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Ví dụ 1d (Trang 18)",
      "question": "Trong các phương trình sau, phương trình nào KHÔNG phải là phương trình bậc nhất hai ẩn?",
      "options": [
        "$0x + 0y = 7$",
        "$3x - 0y = 6$",
        "$0x + 2y = -4$",
        "$x - y = 1$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình bậc nhất hai ẩn yêu cầu hai hệ số $a$ và $b$ không đồng thời bằng 0 ($a^2 + b^2 \\ne 0$). Phương trình $0x + 0y = 7$ có cả $a = 0$ và $b = 0$ nên không phải là phương trình bậc nhất hai ẩn."
    },
    {
      "id": "ai-9.1.2",
      "badge": "Luyện thêm 2 - Kiểm tra nghiệm có tung độ âm",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 1 (Trang 20)",
      "question": "Cặp số nào sau đây là nghiệm của phương trình $5x - 2y = 6$?",
      "options": [
        "$(0; -3)$",
        "$(0; 3)$",
        "$(1; 1)$",
        "$(2; -1)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 0, y = -3$ vào phương trình: $5(0) - 2(-3) = 0 + 6 = 6$ (thỏa mãn)."
    },
    {
      "id": "ai-9.1.3",
      "badge": "Luyện thêm 3 - Tìm tung độ khi biết hoành độ",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Bài 1.1 (Trang 11)",
      "question": "Biết cặp số $(2; y_0)$ là một nghiệm của phương trình $3x + 2y = 10$. Giá trị của $y_0$ là:",
      "options": [
        "$2$",
        "$-2$",
        "$4$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 2$ vào phương trình: $3(2) + 2y_0 = 10$, hay $6 + 2y_0 = 10$, suy ra $2y_0 = 4$, do đó $y_0 = 2$."
    },
    {
      "id": "ai-9.1.4",
      "badge": "Luyện thêm 4 - Điểm thuộc đường thẳng nghiệm",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Dạng 3 (Trang 18)",
      "question": "Đường thẳng biểu diễn tập nghiệm của phương trình $x - 2y = 4$ đi qua điểm nào dưới đây?",
      "options": [
        "$(4; 0)$",
        "$(0; 2)$",
        "$(2; 1)$",
        "$(1; -1)$"
      ],
      "correctIndex": 0,
      "explanation": "Thay tọa độ $(4; 0)$ vào phương trình: $4 - 2(0) = 4 - 0 = 4$ (thỏa mãn)."
    },
    {
      "id": "ai-9.1.5",
      "badge": "Luyện thêm 5 - Kiểm tra nghiệm của hệ phương trình",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Câu 41 (Trang 56)",
      "question": "Cặp số $(x; y) = (2; -1)$ là nghiệm của hệ phương trình nào sau đây?",
      "options": [
        "$\\begin{cases} x + y = 1 \\\\ 2x - y = 5 \\end{cases}$",
        "$\\begin{cases} x + y = 3 \\\\ x - y = 1 \\end{cases}$",
        "$\\begin{cases} 2x + y = 3 \\\\ x - y = 1 \\end{cases}$",
        "$\\begin{cases} x + 2y = 0 \\\\ 2x + y = 5 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 2, y = -1$ vào hệ: $2 + (-1) = 1$ (thỏa mãn) và $2(2) - (-1) = 4 + 1 = 5$ (thỏa mãn)."
    },
    {
      "id": "ai-9.1.6",
      "badge": "Luyện thêm 6 - Số nghiệm của hệ hai đường thẳng song song",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Trang 10",
      "question": "Hai đường thẳng $d_1: 2x - y = 1$ và $d_2: 2x - y = 3$ song song với nhau. Số nghiệm của hệ phương trình $\\begin{cases} 2x - y = 1 \\\\ 2x - y = 3 \\end{cases}$ là:",
      "options": [
        "$0$",
        "$1$",
        "$2$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Vì hai đường thẳng song song không có điểm chung nên hệ phương trình tương ứng không có nghiệm nào (số nghiệm bằng 0)."
    },
    {
      "id": "ai-9.1.7",
      "badge": "Luyện thêm 7 - Tìm số nghiệm nguyên không âm",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Bài 1.2 (Trang 11)",
      "question": "Phương trình $2x + y = 4$ có bao nhiêu nghiệm nguyên không âm $(x; y \\in \\mathbb{N})$?",
      "options": [
        "$3$",
        "$2$",
        "$1$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Từ $2x + y = 4 \\Rightarrow y = 4 - 2x$. Do $y \\ge 0 \\Rightarrow 4 - 2x \\ge 0 \\Rightarrow x \\le 2$. Vì $x \\in \\mathbb{N}$ nên $x \\in \\{0; 1; 2\\}$, tương ứng có 3 nghiệm $(0; 4), (1; 2), (2; 0)$."
    },
    {
      "id": "ai-9.1.8",
      "badge": "Luyện thêm 8 - Đường thẳng đi qua gốc tọa độ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Câu 37 (Trang 56)",
      "question": "Đường thẳng biểu diễn tập nghiệm của phương trình $(2m - 4)x + (m - 1)y = m - 5$ đi qua gốc tọa độ $O(0; 0)$ khi:",
      "options": [
        "$m = 5$",
        "$m = 2$",
        "$m = 1$",
        "$m = -5$"
      ],
      "correctIndex": 0,
      "explanation": "Đường thẳng đi qua $O(0; 0)$ khi tọa độ $(0; 0)$ thỏa mãn phương trình: $(2m - 4) \\cdot 0 + (m - 1) \\cdot 0 = m - 5$, suy ra $0 = m - 5$, do đó $m = 5$."
    },
    {
      "id": "ai-9.1.9",
      "badge": "Luyện thêm 9 - Tọa độ giao điểm đồ thị",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Ví dụ 7 (Trang 19)",
      "question": "Giao điểm của hai đường thẳng $y = 2x - 3$ và $y = -x + 3$ có tọa độ là $(2; 1)$. Nghiệm của hệ phương trình $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases}$ là:",
      "options": [
        "$(2; 1)$",
        "$(1; 2)$",
        "$(3; 0)$",
        "$(0; 3)$"
      ],
      "correctIndex": 0,
      "explanation": "Nghiệm của hệ hai phương trình bậc nhất hai ẩn chính là tọa độ giao điểm của hai đường thẳng biểu diễn tập nghiệm. Do đó nghiệm của hệ là $(2; 1)$."
    },
    {
      "id": "ai-9.1.10",
      "badge": "Luyện thêm 10 - Bài toán thực tế hiệu vận tốc",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Bài 1.4 (Trang 11)",
      "question": "Vận tốc xe ô tô là $x\\text{ (km/h)}$, vận tốc xe máy là $y\\text{ (km/h)}$. Biết vận tốc xe ô tô lớn hơn xe máy là $20\\text{ km/h}$. Phương trình bậc nhất hai ẩn biểu thị mối quan hệ giữa vận tốc hai xe là:",
      "options": [
        "$x - y = 20$",
        "$x + y = 20$",
        "$y - x = 20$",
        "$x = 20y$"
      ],
      "correctIndex": 0,
      "explanation": "Hiệu vận tốc ô tô và xe máy là 20 nên ta có phương trình: $x - y = 20$."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-9.1.11",
      "badge": "Bài tập mở rộng 1 - Điều kiện phương trình bậc nhất hai ẩn",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Nâng cao Toán 9",
      "question": "Phương trình $(m^2 - 4)x + (m + 2)y = 3$ là phương trình bậc nhất hai ẩn khi và chỉ khi:",
      "options": [
        "$m \\ne -2$",
        "$m \\ne 2$",
        "$m = -2$",
        "$m = 2$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình là bậc nhất hai ẩn khi hai hệ số không đồng thời bằng 0. Ta có $m^2 - 4 = 0$ khi $m = \\pm 2$ và $m + 2 = 0$ khi $m = -2$. Khi $m = -2$ thì cả hai hệ số đều bằng 0. Do đó điều kiện là $m \\ne -2$."
    },
    {
      "id": "ai-9.1.12",
      "badge": "Bài tập mở rộng 2 - Tìm tham số để hệ nhận nghiệm cho trước",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Bài tập nâng cao hệ phương trình",
      "question": "Cho hệ phương trình $\\begin{cases} mx + y = 3 \\\\ 2x - my = 1 \\end{cases}$. Giá trị của $m$ để hệ nhận cặp số $(1; 1)$ làm nghiệm là:",
      "options": [
        "$m \\in \\emptyset$",
        "$m = 2$",
        "$m = 1$",
        "$m = 3$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $(1; 1)$ vào hệ: phương trình thứ nhất cho $m(1) + 1 = 3 \\Rightarrow m = 2$; phương trình thứ hai cho $2(1) - m(1) = 1 \\Rightarrow m = 1$. Vì hai giá trị $m$ mâu thuẫn nhau nên không có giá trị nào của $m$ thỏa mãn ($m \\in \\emptyset$)."
    },
    {
      "id": "ai-9.1.13",
      "badge": "Bài tập mở rộng 3 - Tọa độ giao điểm hình học",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Câu 44 (Trang 56)",
      "question": "Hai đường thẳng $d_1: x - 2y = -3$ và $d_2: x + y = 3$ cắt nhau tại điểm $M(x_0; y_0)$. Giá trị của tích $x_0 \\cdot y_0$ là:",
      "options": [
        "$2$",
        "$3$",
        "$-2$",
        "$6$"
      ],
      "correctIndex": 0,
      "explanation": "Giải hệ $\\begin{cases} x - 2y = -3 \\\\ x + y = 3 \\end{cases}$: Lấy phương trình dưới trừ phương trình trên được $3y = 6 \\Rightarrow y = 2 \\Rightarrow x = 3 - 2 = 1$. Do đó $(x_0; y_0) = (1; 2)$. Tích $x_0 \\cdot y_0 = 1 \\cdot 2 = 2$."
    },
    {
      "id": "ai-9.1.14",
      "badge": "Bài tập mở rộng 4 - Bài toán bài thi trắc nghiệm",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Bài toán thực tế Trang 49 & SGK Toán 9",
      "question": "Đề thi gồm 20 câu hỏi gồm 2 loại: câu hỏi Đúng/Sai (2 điểm mỗi câu) và câu hỏi Nhiều lựa chọn (4 điểm mỗi câu). Tổng số điểm toàn bài là 60 điểm. Gọi $x, y$ lần lượt là số câu hỏi Đúng/Sai và Nhiều lựa chọn. Hệ phương trình mô tả bài toán là:",
      "options": [
        "$\\begin{cases} x + y = 20 \\\\ 2x + 4y = 60 \\end{cases}$",
        "$\\begin{cases} x + y = 60 \\\\ 2x + 4y = 20 \\end{cases}$",
        "$\\begin{cases} x + y = 20 \\\\ 4x + 2y = 60 \\end{cases}$",
        "$\\begin{cases} x + y = 20 \\\\ x + 2y = 60 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng số câu hỏi là 20: $x + y = 20$. Tổng số điểm bài thi là 60 điểm: $2x + 4y = 60$. Ta có hệ: $\\begin{cases} x + y = 20 \\\\ 2x + 4y = 60 \\end{cases}$."
    },
    {
      "id": "ai-9.1.15",
      "badge": "Bài tập mở rộng 5 - Bài toán chu vi và kích thước hình chữ nhật",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Bài 1.5 (Trang 11)",
      "question": "Một mảnh đất hình chữ nhật có chu vi $64\\text{ m}$. Biết hai lần chiều dài hơn ba lần chiều rộng là $4\\text{ m}$. Gọi chiều dài là $x\\text{ (m)}$ và chiều rộng là $y\\text{ (m)}$. Hệ phương trình mô tả bài toán là:",
      "options": [
        "$\\begin{cases} x + y = 32 \\\\ 2x - 3y = 4 \\end{cases}$",
        "$\\begin{cases} x + y = 64 \\\\ 2x - 3y = 4 \\end{cases}$",
        "$\\begin{cases} x + y = 32 \\\\ 3x - 2y = 4 \\end{cases}$",
        "$\\begin{cases} 2x + 2y = 32 \\\\ 2x - 3y = 4 \\end{cases}$"
      ],
      "correctIndex": 0,
      "explanation": "Nửa chu vi mảnh đất là $64 : 2 = 32\\text{ m}$, do đó $x + y = 32$. Hai lần chiều dài hơn ba lần chiều rộng là $4\\text{ m}$, ta có $2x - 3y = 4$. Vậy hệ phương trình là $\\begin{cases} x + y = 32 \\\\ 2x - 3y = 4 \\end{cases}$."
    }
  ],
  "t9-b2-giai-he-phuong-trinh": [
    // 10 CÂU VÀO MỤC LUYỆN THÊM (Luyện tập 1 đến 10)
    {
      "id": "ai-9.2.1",
      "badge": "Luyện thêm 1 - Biểu diễn ẩn theo ẩn còn lại",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Trang 12",
      "question": "Từ phương trình $2x + y = 5$, biểu diễn ẩn $y$ theo ẩn $x$ ta được:",
      "options": [
        "$y = 5 - 2x$",
        "$y = 2x - 5$",
        "$y = 2x + 5$",
        "$y = \\frac{5 - x}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Chuyển hạng tử $2x$ sang vế phải đổi dấu: $y = 5 - 2x$."
    },
    {
      "id": "ai-9.2.2",
      "badge": "Luyện thêm 2 - Giải hệ phương trình bằng phương pháp thế",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Dạng 7 (Trang 19)",
      "question": "Nghiệm của hệ phương trình $\\begin{cases} x = y + 1 \\\\ 2x + y = 5 \\end{cases}$ là:",
      "options": [
        "$(2; 1)$",
        "$(1; 2)$",
        "$(3; 2)$",
        "$(0; 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Thế $x = y + 1$ vào phương trình thứ hai: $2(y + 1) + y = 5$, hay $3y + 2 = 5$, suy ra $3y = 3$, do đó $y = 1$. Khi đó $x = 1 + 1 = 2$."
    },
    {
      "id": "ai-9.2.3",
      "badge": "Luyện thêm 3 - Cách nhân để triệt tiêu ẩn",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Trang 14",
      "question": "Để triệt tiêu ẩn $y$ bằng phương pháp cộng đại số trong hệ $\\begin{cases} 3x - y = 2 \\\\ 2x + 3y = 5 \\end{cases}$, ta có thể thực hiện thao tác nào?",
      "options": [
        "Nhân hai vế của phương trình thứ nhất với $3$ rồi cộng từng vế với phương trình thứ hai",
        "Nhân hai vế của phương trình thứ nhất với $2$ rồi cộng từng vế với phương trình thứ hai",
        "Nhân hai vế của phương trình thứ hai với $3$ rồi trừ từng vế cho phương trình thứ nhất",
        "Trừ trực tiếp từng vế của hai phương trình cho nhau"
      ],
      "correctIndex": 0,
      "explanation": "Nhân phương trình 1 với 3 được $-3y$. Khi cộng với $3y$ của phương trình 2 thì ẩn $y$ sẽ bị triệt tiêu: $(-3y + 3y = 0)$."
    },
    {
      "id": "ai-9.2.4",
      "badge": "Luyện thêm 4 - Giải hệ bằng phương pháp cộng đại số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 3 (Trang 21)",
      "question": "Nghiệm của hệ phương trình $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$ là:",
      "options": [
        "$(3; 1)$",
        "$(1; 3)$",
        "$(4; 2)$",
        "$(5; 3)$"
      ],
      "correctIndex": 0,
      "explanation": "Cộng từng vế hai phương trình: $(2x + x) + (y - y) = 7 + 2$, suy ra $3x = 9$, do đó $x = 3$. Thay vào PT 2: $3 - y = 2$, suy ra $y = 1$."
    },
    {
      "id": "ai-9.2.5",
      "badge": "Luyện thêm 5 - Tính tích hai tọa độ nghiệm P = x . y",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Câu 51 (Trang 57)",
      "question": "Biết $(x_0; y_0)$ là nghiệm của hệ phương trình $\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases}$. Giá trị của tích $x_0 \\cdot y_0$ là:",
      "options": [
        "$2$",
        "$3$",
        "$1$",
        "$-2$"
      ],
      "correctIndex": 0,
      "explanation": "Cộng từng vế: $3x = 6 \\Rightarrow x_0 = 2$. Thay vào PT 2: $2 + y = 3 \\Rightarrow y_0 = 1$. Tích $x_0 \\cdot y_0 = 2 \\cdot 1 = 2$."
    },
    {
      "id": "ai-9.2.6",
      "badge": "Luyện thêm 6 - Tính hiệu hai bình phương x² - y²",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Câu 49 (Trang 57)",
      "question": "Gọi $(x; y)$ là nghiệm của hệ phương trình $\\begin{cases} 3x - y = 7 \\\\ x + y = 1 \\end{cases}$. Giá trị của biểu thức $x^2 - y^2$ là:",
      "options": [
        "$3$",
        "$5$",
        "$-3$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Cộng hai phương trình: $4x = 8 \\Rightarrow x = 2$. Thay vào PT 2: $2 + y = 1 \\Rightarrow y = -1$. Khi đó $x^2 - y^2 = 2^2 - (-1)^2 = 4 - 1 = 3$."
    },
    {
      "id": "ai-9.2.7",
      "badge": "Luyện thêm 7 - Tìm tọa độ giao điểm hai đường thẳng",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Câu 51 (Trang 57)",
      "question": "Tọa độ giao điểm của hai đường thẳng $y = 2x - 3$ và $x - y = 1$ là:",
      "options": [
        "$(2; 1)$",
        "$(1; 2)$",
        "$(3; 2)$",
        "$(4; 3)$"
      ],
      "correctIndex": 0,
      "explanation": "Thế $y = 2x - 3$ vào $x - y = 1$, ta được $x - (2x - 3) = 1$, hay $-x + 3 = 1$, suy ra $x = 2$. Do đó $y = 2(2) - 3 = 1$. Tọa độ giao điểm là $(2; 1)$."
    },
    {
      "id": "ai-9.2.8",
      "badge": "Luyện thêm 8 - Xác định hệ số đường thẳng qua hai điểm",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Ví dụ 10 (Trang 19)",
      "question": "Đường thẳng $y = ax + b$ đi qua hai điểm $A(1; 3)$ và $B(2; 5)$. Giá trị của $a$ và $b$ lần lượt là:",
      "options": [
        "$a = 2;\\ b = 1$",
        "$a = 1;\\ b = 2$",
        "$a = 3;\\ b = 0$",
        "$a = 2;\\ b = -1$"
      ],
      "correctIndex": 0,
      "explanation": "Thay tọa độ $A$ và $B$ vào ta được hệ: $\\begin{cases} a + b = 3 \\\\ 2a + b = 5 \\end{cases}$. Lấy PT 2 trừ PT 1 được $a = 2$, suy ra $b = 3 - 2 = 1$."
    },
    {
      "id": "ai-9.2.9",
      "badge": "Luyện thêm 9 - Hệ phương trình có hệ số phân số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Câu 48 (Trang 57)",
      "question": "Nghiệm của hệ phương trình $\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 1 \\\\ x - y = -3 \\end{cases}$ là:",
      "options": [
        "$(0; 3)$",
        "$(2; 5)$",
        "$(-1; 2)$",
        "$(1; 4)$"
      ],
      "correctIndex": 0,
      "explanation": "Quy đồng phương trình thứ nhất: $3x + 2y = 6$. Từ phương trình thứ hai: $x = y - 3$. Thế vào được $3(y - 3) + 2y = 6$, hay $5y = 15$, suy ra $y = 3$. Do đó $x = 3 - 3 = 0$."
    },
    {
      "id": "ai-9.2.10",
      "badge": "Luyện thêm 10 - Bài toán thực tế mua đồ dùng học tập",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Bài 1.6 (Trang 17)",
      "question": "Bạn An mua 2 quyển vở và 3 cây bút hết $35\\ 000$ đồng. Bạn Bình mua 3 quyển vở và 3 cây bút cùng loại hết $45\\ 000$ đồng. Giá tiền của 1 quyển vở và 1 cây bút lần lượt là:",
      "options": [
        "$10\\ 000\\text{ đồng và } 5\\ 000\\text{ đồng}$",
        "$8\\ 000\\text{ đồng và } 6\\ 000\\text{ đồng}$",
        "$12\\ 000\\text{ đồng và } 3\\ 000\\text{ đồng}$",
        "$9\\ 000\\text{ đồng và } 5\\ 000\\text{ đồng}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi giá 1 quyển vở là $x$ và giá 1 cây bút là $y$. Ta có hệ: $\\begin{cases} 2x + 3y = 35\\ 000 \\\\ 3x + 3y = 45\\ 000 \\end{cases}$. Lấy PT 2 trừ PT 1: $x = 10\\ 000$ đồng $\\Rightarrow 3y = 35\\ 000 - 20\\ 000 = 15\\ 000 \\Rightarrow y = 5\\ 000$ đồng."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-9.2.11",
      "badge": "Bài tập mở rộng 1 - Phương pháp đặt ẩn phụ",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Nâng cao Toán 9",
      "question": "Giải hệ phương trình $\\begin{cases} \\frac{1}{x} + \\frac{1}{y} = 5 \\\\ \\frac{2}{x} - \\frac{1}{y} = 1 \\end{cases}$ ($x \\ne 0, y \\ne 0$). Cặp nghiệm $(x; y)$ của hệ là:",
      "options": [
        "$(\\frac{1}{2}; \\frac{1}{3})$",
        "$(2; 3)$",
        "$(3; 2)$",
        "$(\\frac{1}{3}; \\frac{1}{2})$"
      ],
      "correctIndex": 0,
      "explanation": "Đặt $u = \\frac{1}{x}, v = \\frac{1}{y}$, hệ trở thành: $\\begin{cases} u + v = 5 \\\\ 2u - v = 1 \\end{cases}$. Cộng hai vế được $3u = 6 \\Rightarrow u = 2 \\Rightarrow x = \\frac{1}{2}$. Thay vào được $v = 3 \\Rightarrow y = \\frac{1}{3}$."
    },
    {
      "id": "ai-9.2.12",
      "badge": "Bài tập mở rộng 2 - Điều kiện tham số để hệ có nghiệm duy nhất",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Nâng cao Hệ phương trình Toán 9",
      "question": "Hệ phương trình $\\begin{cases} mx + y = 3 \\\\ x + my = 2 \\end{cases}$ có nghiệm duy nhất khi và chỉ khi:",
      "options": [
        "$m \\ne \\pm 1$",
        "$m \\ne 1$",
        "$m \\ne -1$",
        "$m = \\pm 1$"
      ],
      "correctIndex": 0,
      "explanation": "Hệ có nghiệm duy nhất khi $\\frac{a}{a'} \\ne \\frac{b}{b'}$, tức là $\\frac{m}{1} \\ne \\frac{1}{m}$, hay $m^2 \\ne 1$, do đó $m \\ne \\pm 1$."
    },
    {
      "id": "ai-9.2.13",
      "badge": "Bài tập mở rộng 3 - Tìm m để nghiệm thỏa mãn x + y = 2",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Bồi dưỡng HSG Toán 9",
      "question": "Cho hệ phương trình $\\begin{cases} x + 2y = 3 \\\\ 2x - y = m \\end{cases}$. Giá trị của $m$ để nghiệm $(x; y)$ thỏa mãn $x + y = 2$ là:",
      "options": [
        "$m = 1$",
        "$m = 2$",
        "$m = -1$",
        "$m = 3$"
      ],
      "correctIndex": 0,
      "explanation": "Từ $x + 2y = 3$ và $x + y = 2$, trừ hai vế được $y = 1$, suy ra $x = 1$. Thay cặp $(1; 1)$ vào phương trình thứ hai: $2(1) - 1 = m$, do đó $m = 1$."
    },
    {
      "id": "ai-9.2.14",
      "badge": "Bài tập mở rộng 4 - Bài toán chuyển động xuôi dòng, ngược dòng",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Bài toán chuyển động & Chuyên đề Trang 20",
      "question": "Một ca nô đi xuôi dòng một khúc sông dài $60\\text{ km}$ hết 2 giờ và đi ngược dòng khúc sông đó hết 3 giờ. Vận tốc thực của ca nô khi nước yên lặng là:",
      "options": [
        "$25\\text{ km/h}$",
        "$30\\text{ km/h}$",
        "$20\\text{ km/h}$",
        "$24\\text{ km/h}$"
      ],
      "correctIndex": 0,
      "explanation": "Vận tốc xuôi dòng là $60 : 2 = 30\\text{ km/h}$ ($x + y = 30$). Vận tốc ngược dòng là $60 : 3 = 20\\text{ km/h}$ ($x - y = 20$). Cộng hai phương trình được $2x = 50 \\Rightarrow x = 25\\text{ km/h}$."
    },
    {
      "id": "ai-9.2.15",
      "badge": "Bài tập mở rộng 5 - Bài toán pha trộn nồng độ phần trăm",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Dạng 9.1 Toán thực tế Trang 20",
      "question": "Người ta trộn $x\\text{ (g)}$ dung dịch muối $10\\%$ với $y\\text{ (g)}$ dung dịch muối $20\\%$ để được $500\\text{ g}$ dung dịch muối $16\\%$. Giá trị của $x$ và $y$ lần lượt là:",
      "options": [
        "$x = 200\\text{ g};\\ y = 300\\text{ g}$",
        "$x = 250\\text{ g};\\ y = 250\\text{ g}$",
        "$x = 300\\text{ g};\\ y = 200\\text{ g}$",
        "$x = 150\\text{ g};\\ y = 350\\text{ g}$"
      ],
      "correctIndex": 0,
      "explanation": "Tổng khối lượng: $x + y = 500$. Khối lượng muối nguyên chất: $0,1x + 0,2y = 0,16 \\times 500 = 80$. Giải hệ ta được $x = 200\\text{ g}$ và $y = 300\\text{ g}$."
    }
  ],

  // ==========================================
  // BÀI 3: GIẢI BÀI TOÁN BẰNG CÁCH LẬP HỆ PHƯƠNG TRÌNH
  // ==========================================
  "t9-b3-giai-toan-lap-he": [
    // 10 CÂU ĐẦU TIÊN VÀO MỤC "LUYỆN THÊM"
    {
      "id": "ai-9.3.1",
      "badge": "Luyện thêm 1 - Toán số học tìm hai số",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Câu 44 (Trang 57)",
      "question": "Tìm hai số tự nhiên biết tổng của chúng bằng $900$ và số lớn hơn $3$ lần số bé là $20$. Hai số đó là:",
      "options": [
        "$x = 680;\\ y = 220$",
        "$x = 650;\\ y = 250$",
        "$x = 700;\\ y = 200$",
        "$x = 600;\\ y = 300$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số lớn là $x$, số bé là $y$. Ta có hệ phương trình: $\\begin{cases} x + y = 900 \\\\ x - 3y = 20 \\end{cases}$. Trừ từng vế hai phương trình: $4y = 880$, suy ra $y = 220$. Do đó $x = 900 - 220 = 680$."
    },
    {
      "id": "ai-9.3.2",
      "badge": "Luyện thêm 2 - Tìm số tự nhiên có phép chia có dư",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 22 (Trang 32)",
      "question": "Tìm số tự nhiên có hai chữ số, biết hiệu giữa chữ số hàng chục và chữ số hàng đơn vị là $5$. Nếu lấy số đã cho chia cho số viết theo thứ tự ngược lại thì được thương là $3$ và số dư là $13$. Số cần tìm là:",
      "options": [
        "$61$",
        "$72$",
        "$50$",
        "$83$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số cần tìm là $\\overline{ab} = 10a + b$. Ta có $a - b = 5$. Chia cho số ngược lại $\\overline{ba} = 10b + a$: $10a + b = 3(10b + a) + 13$, hay $7a - 29b = 13$. Thế $a = b + 5$ vào: $7(b + 5) - 29b = 13$, hay $22b = 22$, suy ra $b = 1$. Do đó $a = 6$. Vậy số cần tìm là $61$."
    },
    {
      "id": "ai-9.3.3",
      "badge": "Luyện thêm 3 - Tỉ số giữa số đảo và số ban đầu",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 23 (Trang 33)",
      "question": "Tìm số tự nhiên có hai chữ số, biết tổng hai chữ số bằng $9$ và nếu viết hai chữ số theo thứ tự ngược lại thì được số mới bằng $\\frac{2}{9}$ số ban đầu. Số cần tìm là:",
      "options": [
        "$81$",
        "$72$",
        "$63$",
        "$90$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi chữ số hàng chục là $a$, hàng đơn vị là $b$ ($a + b = 9$). Số mới viết ngược lại: $10b + a = \\frac{2}{9}(10a + b)$, hay $9(10b + a) = 2(10a + b)$, rút gọn được $88b = 11a$, suy ra $a = 8b$. Thay vào $a + b = 9$ được $9b = 9$, suy ra $b = 1$ và $a = 8$. Vậy số cần tìm là $81$."
    },
    {
      "id": "ai-9.3.4",
      "badge": "Luyện thêm 4 - Năng suất may áo của hai tổ",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 36 (Trang 37)",
      "question": "Hai tổ sản xuất cùng may một loại áo khoác. Nếu tổ 1 may trong 7 ngày và tổ 2 may trong 5 ngày thì cả hai tổ may được $1540$ chiếc áo. Biết mỗi ngày tổ 2 may nhiều hơn tổ 1 là $20$ chiếc áo. Năng suất mỗi ngày của tổ 1 là:",
      "options": [
        "$120\\text{ chiếc}$",
        "$140\\text{ chiếc}$",
        "$110\\text{ chiếc}$",
        "$130\\text{ chiếc}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số áo tổ 1 và tổ 2 may mỗi ngày lần lượt là $x$ và $y$ ($y - x = 20$). Ta có $7x + 5y = 1540$. Thế $y = x + 20$ vào: $7x + 5(x + 20) = 1540$, hay $12x = 1440$, suy ra $x = 120\\text{ chiếc}$."
    },
    {
      "id": "ai-9.3.5",
      "badge": "Luyện thêm 5 - Năng suất lắp ráp linh kiện điện tử",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 39 (Trang 38)",
      "question": "Hai tổ công nhân lắp ráp linh kiện điện tử: nếu tổ A làm trong 5 ngày và tổ B làm trong 4 ngày thì xong $1900$ bộ. Biết mỗi ngày tổ A lắp ráp nhiều hơn tổ B là $20$ linh kiện. Số linh kiện mỗi ngày tổ B lắp ráp được là:",
      "options": [
        "$200\\text{ bộ}$",
        "$220\\text{ bộ}$",
        "$180\\text{ bộ}$",
        "$210\\text{ bộ}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số linh kiện tổ A và tổ B ráp mỗi ngày là $x$ và $y$ ($x - y = 20$). Ta có $5x + 4y = 1900$. Thế $x = y + 20$ vào: $5(y + 20) + 4y = 1900$, hay $9y = 1800$, suy ra $y = 200\\text{ bộ}$."
    },
    {
      "id": "ai-9.3.6",
      "badge": "Luyện thêm 6 - Năng suất cày đất của hai anh em",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 44 (Trang 39)",
      "question": "Hai anh em nông dân cùng cày ruộng. Mỗi ngày người anh cày hơn người em $10\\text{ m}^2$ đất. Sau 3 ngày làm việc, cả hai anh em cày được tất cả $930\\text{ m}^2$ đất. Năng suất mỗi ngày của người anh là:",
      "options": [
        "$160\\text{ m}^2$",
        "$150\\text{ m}^2$",
        "$170\\text{ m}^2$",
        "$140\\text{ m}^2$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi diện tích cày mỗi ngày của anh là $x\\text{ (m}^2\\text{)}$ và em là $y\\text{ (m}^2\\text{)}$ ($x - y = 10$). Sau 3 ngày cả hai cày được: $3(x + y) = 930$, hay $x + y = 310$. Cộng hai phương trình: $2x = 320$, suy ra $x = 160\\text{ m}^2$."
    },
    {
      "id": "ai-9.3.7",
      "badge": "Luyện thêm 7 - Toán chuyển động hai xe khởi hành lệch giờ",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Bài 50 (Trang 41)",
      "question": "Một xe khách chạy từ bến A đến bến B cách nhau $215\\text{ km}$. Sau khi xe khách xuất phát $1$ giờ, một xe ô tô bắt đầu đi từ B đến A và gặp xe khách sau khi ô tô đi được $1$ giờ $30$ phút. Biết mỗi giờ ô tô đi nhanh hơn xe khách $10\\text{ km}$. Vận tốc của xe khách là:",
      "options": [
        "$50\\text{ km/h}$",
        "$60\\text{ km/h}$",
        "$45\\text{ km/h}$",
        "$55\\text{ km/h}$"
      ],
      "correctIndex": 0,
      "explanation": "Thời gian xe khách đi là $1\\text{h} + 1,5\\text{h} = 2,5\\text{ giờ}$. Thời gian ô tô đi là $1,5\\text{ giờ}$. Gọi vận tốc xe khách là $x$ và ô tô là $y$ ($y - x = 10$). Tổng quãng đường: $2,5x + 1,5y = 215$. Thế $y = x + 10$ vào: $2,5x + 1,5(x + 10) = 215$, hay $4x = 200$, suy ra $x = 50\\text{ km/h}$."
    },
    {
      "id": "ai-9.3.8",
      "badge": "Luyện thêm 8 - Mua hai loại hàng tính thuế VAT",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Kết Nối Tri Thức Bài 27 (Trang 34) & Ví dụ 12 (Trang 20)",
      "question": "Một người mua hai loại hàng và phải trả tổng cộng $2,17\\text{ triệu đồng}$, kể cả thuế VAT $10\\%$ loại 1 và $8\\%$ loại 2. Nếu thuế VAT là $9\\%$ cho cả hai loại thì phải trả $2,18\\text{ triệu đồng}$. Giá của loại hàng thứ nhất khi chưa có thuế VAT là:",
      "options": [
        "$0,5\\text{ triệu đồng}$",
        "$1,5\\text{ triệu đồng}$",
        "$0,8\\text{ triệu đồng}$",
        "$1,2\\text{ triệu đồng}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi giá loại 1 là $x$, loại 2 là $y$ (triệu đồng). Ta có $1,10x + 1,08y = 2,17$ và $1,09(x + y) = 2,18$, suy ra $x + y = 2$. Thế $y = 2 - x$ vào phương trình thứ nhất: $1,10x + 1,08(2 - x) = 2,17$, hay $0,02x = 0,01$, suy ra $x = 0,5\\text{ triệu đồng}$."
    },
    {
      "id": "ai-9.3.9",
      "badge": "Luyện thêm 9 - Kích thước khu vườn hình chữ nhật",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 61 (Trang 42)",
      "question": "Một khu vườn hình chữ nhật có chu vi là $40\\text{ m}$. Nếu tăng chiều dài thêm $3\\text{ m}$ và tăng chiều rộng thêm $2\\text{ m}$ thì diện tích tăng thêm $53\\text{ m}^2$. Chiều rộng ban đầu của khu vườn là:",
      "options": [
        "$7\\text{ m}$",
        "$13\\text{ m}$",
        "$8\\text{ m}$",
        "$6\\text{ m}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi chiều dài là $x\\text{ (m)}$, chiều rộng là $y\\text{ (m)}$ ($x + y = 20$). Diện tích tăng thêm: $(x + 3)(y + 2) - xy = 53$, hay $2x + 3y = 47$. Nhân phương trình thứ nhất với 2: $2x + 2y = 40$. Trừ vế theo vế được $y = 47 - 40 = 7\\text{ m}$."
    },
    {
      "id": "ai-9.3.10",
      "badge": "Luyện thêm 10 - Mua đồ dùng học tập giảm giá",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 25 (Trang 33)",
      "question": "Bạn Thanh mua 20 quyển vở và 10 cây bút bi. Tổng số tiền phải trả nếu không giảm giá là $195\\ 000\\text{ đồng}$. Nhân dịp khai giảng, nhà sách giảm giá $10\\%$ mỗi quyển vở và $20\\%$ mỗi cây bút bi nên Thanh trả $172\\ 000\\text{ đồng}$. Giá niêm yết của 1 quyển vở là:",
      "options": [
        "$8\\ 000\\text{ đồng}$",
        "$3\\ 500\\text{ đồng}$",
        "$7\\ 500\\text{ đồng}$",
        "$9\\ 000\\text{ đồng}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi giá 1 quyển vở là $x$ và 1 cây bút là $y$ (đồng). Ta có: $20x + 10y = 195\\ 000$, hay $2x + y = 19\\ 500$. Thực tế trả: $20(0,9x) + 10(0,8y) = 172\\ 000$, hay $18x + 8y = 172\\ 000$, rút gọn là $9x + 4y = 86\\ 000$. Giải hệ ta được $x = 8\\ 000\\text{ đồng}$ và $y = 3\\ 500\\text{ đồng}$."
    },

    // CÁC CÂU CÒN LẠI VÀO MỤC "THÊM BÀI TỪ AI"
    {
      "id": "ai-9.3.11",
      "badge": "Bài tập mở rộng 1 - Hai vật chuyển động trên đường tròn",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Kết Nối Tri Thức Bài 46 (Trang 39)",
      "question": "Hai vật chuyển động đều trên một đường tròn đường kính $20\\text{ cm}$. Nếu chuyển động ngược chiều thì cứ $4\\text{ giây}$ gặp nhau, nếu cùng chiều thì cứ $20\\text{ giây}$ gặp nhau. Vận tốc của vật đi nhanh hơn là:",
      "options": [
        "$3\\pi\\text{ cm/s}$",
        "$2\\pi\\text{ cm/s}$",
        "$5\\pi\\text{ cm/s}$",
        "$4\\pi\\text{ cm/s}$"
      ],
      "correctIndex": 0,
      "explanation": "Chu vi đường tròn: $C = 20\\pi\\text{ cm}$. Khi chuyển động ngược chiều: $4(x + y) = 20\\pi$, suy ra $x + y = 5\\pi$. Khi cùng chiều: $20(x - y) = 20\\pi$, suy ra $x - y = \\pi$. Cộng hai phương trình: $2x = 6\\pi$, suy ra $x = 3\\pi\\text{ cm/s}$."
    },
    {
      "id": "ai-9.3.12",
      "badge": "Bài tập mở rộng 2 - Pha trộn tỉ lệ quặng sắt",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 31 (Trang 35)",
      "question": "Trộn quặng sắt chứa $72\\%$ sắt với quặng chứa $58\\%$ sắt thì được loại quặng chứa $62\\%$ sắt. Nếu tăng khối lượng mỗi loại thêm $15\\text{ tấn}$ thì được loại quặng chứa $63,25\\%$ sắt. Khối lượng quặng loại thứ nhất ban đầu là:",
      "options": [
        "$12\\text{ tấn}$",
        "$30\\text{ tấn}$",
        "$15\\text{ tấn}$",
        "$20\\text{ tấn}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi khối lượng hai loại quặng ban đầu là $x$ và $y$ (tấn). Ta có $0,72x + 0,58y = 0,62(x + y)$, hay $0,10x - 0,04y = 0$, suy ra $y = 2,5x$. Khi thêm mỗi loại 15 tấn: $0,72(x + 15) + 0,58(y + 15) = 0,6325(x + y + 30)$. Thay $y = 2,5x$ vào giải được $x = 12\\text{ tấn}$ và $y = 30\\text{ tấn}$."
    },
    {
      "id": "ai-9.3.13",
      "badge": "Bài tập mở rộng 3 - Năng suất máy cắt cỏ",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Cánh Diều Bài 42 (Trang 38)",
      "question": "Nếu sử dụng 3 máy cắt cỏ ngồi lái và 2 máy đẩy tay trong 10 phút thì cắt được $2990\\text{ m}^2$ cỏ. Nếu dùng 4 máy ngồi lái và 3 máy đẩy tay trong 10 phút thì cắt được $4060\\text{ m}^2$ cỏ. Trong 10 phút, một máy ngồi lái cắt được diện tích cỏ là:",
      "options": [
        "$850\\text{ m}^2$",
        "$220\\text{ m}^2$",
        "$750\\text{ m}^2$",
        "$900\\text{ m}^2$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi năng suất 10 phút của máy ngồi lái là $x\\text{ (m}^2\\text{)}$ và máy đẩy tay là $y\\text{ (m}^2\\text{)}$. Ta có hệ: $\\begin{cases} 3x + 2y = 2990 \\\\ 4x + 3y = 4060 \\end{cases}$. Nhân phương trình thứ nhất với 3 và thứ hai với 2: $9x + 6y = 8970$ và $8x + 6y = 8120$. Trừ vế theo vế được $x = 8970 - 8120 = 850\\text{ m}^2$."
    },
    {
      "id": "ai-9.3.14",
      "badge": "Bài tập mở rộng 4 - Tìm cạnh của tam giác vuông",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Toán 9 Bài 62 (Trang 42)",
      "question": "Một tam giác vuông có chu vi bằng $12\\text{ cm}$ và hai cạnh góc vuông hơn kém nhau $1\\text{ cm}$. Độ dài cạnh huyền của tam giác vuông đó là:",
      "options": [
        "$5\\text{ cm}$",
        "$4\\text{ cm}$",
        "$3\\text{ cm}$",
        "$6\\text{ cm}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi hai cạnh góc vuông là $a$ và $b$ ($a - b = 1$). Cạnh huyền $c = 12 - (a + b) = 12 - (2b + 1) = 11 - 2b$. Theo định lý Pythagore: $(b + 1)^2 + b^2 = (11 - 2b)^2$. Khai triển và giải phương trình được $b = 3\\text{ cm}$, suy ra $a = 4\\text{ cm}$ và cạnh huyền $c = 5\\text{ cm}$."
    },
    {
      "id": "ai-9.3.15",
      "badge": "Bài tập mở rộng 5 - Bài toán đầu tư tài chính hai khoản",
      "isAiGenerated": true,
      "source": "SGK Toán 9 Cánh Diều Bài 28 (Trang 35)",
      "question": "Bác Phương chia số tiền $800\\text{ triệu đồng}$ cho hai khoản đầu tư: khoản 1 có lãi suất $6\\%$/năm, khoản 2 có lãi suất $8\\%$/năm. Sau một năm, tổng tiền lãi bác thu được là $54\\text{ triệu đồng}$. Số tiền bác Phương đã đầu tư cho khoản thứ nhất là:",
      "options": [
        "$500\\text{ triệu đồng}$",
        "$300\\text{ triệu đồng}$",
        "$400\\text{ triệu đồng}$",
        "$600\\text{ triệu đồng}$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi số tiền đầu tư hai khoản lần lượt là $x$ và $y$ (triệu đồng, $x + y = 800$). Tiền lãi: $0,06x + 0,08y = 54$. Nhân phương trình đầu với $0,08$: $0,08x + 0,08y = 64$. Trừ vế theo vế được $0,02x = 10$, suy ra $x = 500\\text{ triệu đồng}$."
    }
  ]
};
