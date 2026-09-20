import type { QuizQuestion } from "@/components/interactive/GamifiedMathQuiz";
import type { TrueFalseQuestion, ShortAnswerQuestion } from "@/data/allGradesLessonsData";

export interface Grade9AiPracticePackage {
  quizQuestions: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
}

export const GRADE_9_AI_PRACTICE_DATA: Record<string, QuizQuestion[] | Grade9AiPracticePackage> = {
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
      "question": "Cho hệ phương trình:\n$$\\begin{cases} mx + y = 3 \\\\ 2x - my = 1 \\end{cases}$$\nGiá trị của $m$ để hệ nhận cặp số $(1; 1)$ làm nghiệm là:",
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
      "question": "Nghiệm của hệ phương trình:\n$$\\begin{cases} x = y + 1 \\\\ 2x + y = 5 \\end{cases}$$\nlà:",
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
      "question": "Để triệt tiêu ẩn $y$ bằng phương pháp cộng đại số trong hệ:\n$$\\begin{cases} 3x - y = 2 \\\\ 2x + 3y = 5 \\end{cases}$$\nta có thể thực hiện thao tác nào?",
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
      "question": "Nghiệm của hệ phương trình:\n$$\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$$\nlà:",
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
      "question": "Biết $(x_0; y_0)$ là nghiệm của hệ phương trình:\n$$\\begin{cases} 2x - y = 3 \\\\ x + y = 3 \\end{cases}$$\nGiá trị của tích $x_0 \\cdot y_0$ là:",
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
      "question": "Gọi $(x; y)$ là nghiệm của hệ phương trình:\n$$\\begin{cases} 3x - y = 7 \\\\ x + y = 1 \\end{cases}$$\nGiá trị của biểu thức $x^2 - y^2$ là:",
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
      "question": "Nghiệm của hệ phương trình:\n$$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 1 \\\\ x - y = -3 \\end{cases}$$\nlà:",
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
      "question": "Giải hệ phương trình (với $x \\ne 0, y \\ne 0$):\n$$\\begin{cases} \\frac{1}{x} + \\frac{1}{y} = 5 \\\\ \\frac{2}{x} - \\frac{1}{y} = 1 \\end{cases}$$\nCặp nghiệm $(x; y)$ của hệ là:",
      "options": [
        "$\\left(\\frac{1}{2}; \\frac{1}{3}\\right)$",
        "$(2; 3)$",
        "$(3; 2)$",
        "$\\left(\\frac{1}{3}; \\frac{1}{2}\\right)$"
      ],
      "correctIndex": 0,
      "explanation": "Đặt $u = \\frac{1}{x}, v = \\frac{1}{y}$ ($u, v \\ne 0$), hệ trở thành:\n$$\\begin{cases} u + v = 5 \\\\ 2u - v = 1 \\end{cases}$$\nCộng hai vế được $3u = 6 \\Rightarrow u = 2 \\Rightarrow x = \\frac{1}{2}$. Thay vào được $v = 3 \\Rightarrow y = \\frac{1}{3}$."
    },
    {
      "id": "ai-9.2.12",
      "badge": "Bài tập mở rộng 2 - Điều kiện tham số để hệ có nghiệm duy nhất",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Nâng cao Hệ phương trình Toán 9",
      "question": "Hệ phương trình:\n$$\\begin{cases} mx + y = 3 \\\\ x + my = 2 \\end{cases}$$\ncó nghiệm duy nhất khi và chỉ khi:",
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
      "question": "Cho hệ phương trình:\n$$\\begin{cases} x + 2y = 3 \\\\ 2x - y = m \\end{cases}$$\nGiá trị của $m$ để nghiệm $(x; y)$ thỏa mãn $x + y = 2$ là:",
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
    },
    {
      "id": "ai-9.2.16",
      "badge": "Bài tập nâng cao 1 - Tìm m, n để hệ phương trình có nghiệm cho trước",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Nâng cao Hệ phương trình Toán 9",
      "question": "Biết hệ phương trình:\n$$\\begin{cases} mx + ny = 5 \\\\ 2mx - ny = 1 \\end{cases}$$\nnhận cặp số $(1; 1)$ làm nghiệm. Giá trị của $m$ và $n$ là:",
      "options": [
        "$m = 2;\\ n = 3$",
        "$m = 3;\\ n = 2$",
        "$m = 1;\\ n = 4$",
        "$m = -2;\\ n = 7$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 1, y = 1$ vào hệ phương trình, ta được:\n$$\\begin{cases} m(1) + n(1) = 5 \\\\ 2m(1) - n(1) = 1 \\end{cases} \\Leftrightarrow \\begin{cases} m + n = 5 \\\\ 2m - n = 1 \\end{cases}$$\nCộng từng vế hai phương trình: $3m = 6 \\Rightarrow m = 2$.\nThay $m = 2$ vào phương trình thứ nhất: $2 + n = 5 \\Rightarrow n = 3$.\nVậy $m = 2$ và $n = 3$."
    },
    {
      "id": "ai-9.2.17",
      "badge": "Bài tập nâng cao 2 - Tìm m, n để hệ phương trình có nghiệm cho trước",
      "isAiGenerated": true,
      "source": "Tuyển tập Đề thi Tuyển sinh vào 10 môn Toán",
      "question": "Tìm các hệ số $m$ và $n$ để hệ phương trình:\n$$\\begin{cases} 3mx - 2ny = -4 \\\\ mx + ny = 7 \\end{cases}$$\ncó nghiệm là $(x; y) = (2; -1)$.",
      "options": [
        "$m = 1;\\ n = -5$",
        "$m = -1;\\ n = 5$",
        "$m = 2;\\ n = -3$",
        "$m = 1;\\ n = 5$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 2, y = -1$ vào hệ phương trình ta được:\n$$\\begin{cases} 3m(2) - 2n(-1) = -4 \\\\ m(2) + n(-1) = 7 \\end{cases} \\Leftrightarrow \\begin{cases} 6m + 2n = -4 \\\\ 2m - n = 7 \\end{cases}$$\nNhân hai vế phương trình thứ hai với $2$: $4m - 2n = 14$.\nCộng từng vế với phương trình thứ nhất: $10m = 10 \\Rightarrow m = 1$.\nThay $m = 1$ vào $2m - n = 7$: $2(1) - n = 7 \\Rightarrow n = -5$.\nVậy $m = 1$ và $n = -5$."
    },
    {
      "id": "ai-9.2.18",
      "badge": "Bài tập nâng cao 3 - Tính tổng m + n từ nghiệm cho trước",
      "isAiGenerated": true,
      "source": "Tài liệu Bồi dưỡng học sinh giỏi Toán 9",
      "question": "Biết hệ phương trình:\n$$\\begin{cases} (m + 1)x - 2ny = 8 \\\\ mx + (n - 1)y = 1 \\end{cases}$$\nnhận cặp số $(2; -1)$ làm nghiệm. Giá trị của tổng $S = m + n$ là:",
      "options": [
        "$3$",
        "$5$",
        "$1$",
        "$-3$"
      ],
      "correctIndex": 0,
      "explanation": "Thay $x = 2$ và $y = -1$ vào hệ phương trình:\n$$\\begin{cases} (m + 1) \\cdot 2 - 2n \\cdot (-1) = 8 \\\\ m \\cdot 2 + (n - 1) \\cdot (-1) = 1 \\end{cases} \\Leftrightarrow \\begin{cases} 2m + 2n = 6 \\\\ 2m - n = 0 \\end{cases} \\Leftrightarrow \\begin{cases} m + n = 3 \\\\ n = 2m \\end{cases}$$\nThay $n = 2m$ vào $m + n = 3$: $3m = 3 \\Rightarrow m = 1$, suy ra $n = 2$.\nVậy $S = m + n = 1 + 2 = 3$."
    },
    {
      "id": "ai-9.2.19",
      "badge": "Bài tập nâng cao 4 - Tìm a, b của hàm số bậc nhất qua 2 điểm",
      "isAiGenerated": true,
      "source": "Tài liệu chuyên đề Hàm số bậc nhất và Hệ phương trình",
      "question": "Đồ thị hàm số bậc nhất $y = ax + b$ đi qua hai điểm $M(2; -1)$ và $N(-1; 5)$. Khi đó giá trị của $a$ và $b$ lần lượt là:",
      "options": [
        "$a = -2;\\ b = 3$",
        "$a = 2;\\ b = -3$",
        "$a = -2;\\ b = -3$",
        "$a = 3;\\ b = -2$"
      ],
      "correctIndex": 0,
      "explanation": "Đồ thị đi qua $M(2; -1) \\Rightarrow a(2) + b = -1 \\Leftrightarrow 2a + b = -1$.\nĐồ thị đi qua $N(-1; 5) \\Rightarrow a(-1) + b = 5 \\Leftrightarrow -a + b = 5$.\nTa có hệ phương trình:\n$$\\begin{cases} 2a + b = -1 \\\\ -a + b = 5 \\end{cases}$$\nTrừ từng vế phương trình thứ nhất cho phương trình thứ hai: $3a = -6 \\Rightarrow a = -2$.\nThay $a = -2$ vào $-a + b = 5$: $-(-2) + b = 5 \\Rightarrow b = 3$.\nVậy $a = -2$ và $b = 3$ (hàm số là $y = -2x + 3$)."
    },
    {
      "id": "ai-9.2.20",
      "badge": "Bài tập nâng cao 5 - Tìm a, b của hàm số bậc nhất qua 2 điểm",
      "isAiGenerated": true,
      "source": "Đề thi Tuyển sinh vào lớp 10 môn Toán",
      "question": "Biết đường thẳng $d: y = ax + b$ đi qua điểm $A(1; 1)$ và điểm $B(3; -3)$. Giá trị của tích $P = a \\cdot b$ là:",
      "options": [
        "$-6$",
        "$6$",
        "$-3$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "Đường thẳng $d$ đi qua $A(1; 1) \\Rightarrow a(1) + b = 1 \\Leftrightarrow a + b = 1$.\nĐường thẳng $d$ đi qua $B(3; -3) \\Rightarrow a(3) + b = -3 \\Leftrightarrow 3a + b = -3$.\nTa có hệ phương trình:\n$$\\begin{cases} a + b = 1 \\\\ 3a + b = -3 \\end{cases}$$\nLấy phương trình thứ hai trừ phương trình thứ nhất: $2a = -4 \\Rightarrow a = -2$.\nThay $a = -2$ vào $a + b = 1$: $-2 + b = 1 \\Rightarrow b = 3$.\nVậy $a = -2$ và $b = 3$, suy ra tích $P = a \\cdot b = (-2) \\cdot 3 = -6$."
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
  ],
  "t9-b4-pt-quy-ve-bac-nhat": {
    "quizQuestions": [
      {
        "id": "ai-9.4.1",
        "badge": "Luyện thêm 1 - Nhận biết điều kiện xác định",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.11 (Trang 21)",
        "question": "Điều kiện xác định của phương trình $\\frac{x - 1}{x + 5} = 3$ là:",
        "options": [
          "$x \\ne -5$",
          "$x \\ne 5$",
          "$x \\ne 1$",
          "$x \\ne 3$"
        ],
        "correctIndex": 0,
        "explanation": "Mẫu thức của phương trình là $x + 5$. Điều kiện xác định là mẫu thức khác 0: $x + 5 \\ne 0 \\Leftrightarrow x \\ne -5$."
      },
      {
        "id": "ai-9.4.2",
        "badge": "Luyện thêm 2 - Nghiệm của phương trình tích",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 15)",
        "question": "Nghiệm của phương trình tích $(3x - 9)(x + 4) = 0$ là:",
        "options": [
          "$x = 3$ hoặc $x = -4$",
          "$x = -3$ hoặc $x = 4$",
          "$x = 9$ hoặc $x = -4$",
          "$x = 3$ hoặc $x = 4$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $(3x - 9)(x + 4) = 0 \\Leftrightarrow 3x - 9 = 0$ hoặc $x + 4 = 0 \\Leftrightarrow x = 3$ hoặc $x = -4$."
      },
      {
        "id": "ai-9.4.3",
        "badge": "Luyện thêm 3 - Nhận biết ĐKXĐ chứa hai phân thức",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 18)",
        "question": "Điều kiện xác định của phương trình $\\frac{1}{x} + \\frac{2}{x - 3} = 1$ là:",
        "options": [
          "$x \\ne 0$ và $x \\ne 3$",
          "$x \\ne 3$",
          "$x \\ne 0$",
          "$x \\ne 0$ và $x \\ne -3$"
        ],
        "correctIndex": 0,
        "explanation": "Các mẫu thức là $x$ và $x - 3$. ĐKXĐ: $x \\ne 0$ và $x - 3 \\ne 0 \\Leftrightarrow x \\ne 0$ và $x \\ne 3$."
      },
      {
        "id": "ai-9.4.4",
        "badge": "Luyện thêm 4 - Tập nghiệm phương trình tích có nhân tử x",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12 (Trang 21)",
        "question": "Tập nghiệm của phương trình $x(5x - 15) = 0$ là:",
        "options": [
          "$S = \\{0; 3\\}$",
          "$S = \\{3\\}$",
          "$S = \\{0; -3\\}$",
          "$S = \\{0; 15\\}$"
        ],
        "correctIndex": 0,
        "explanation": "$x(5x - 15) = 0 \\Leftrightarrow x = 0$ hoặc $5x - 15 = 0 \\Leftrightarrow x = 0$ hoặc $x = 3$. Vậy $S = \\{0; 3\\}$."
      },
      {
        "id": "ai-9.4.5",
        "badge": "Luyện thêm 5 - ĐKXĐ phương trình có mẫu là hiệu hai bình phương",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 15)",
        "question": "Điều kiện xác định của phương trình $\\frac{x}{x^2 - 16} = 2$ là:",
        "options": [
          "$x \\ne 4$ và $x \\ne -4$",
          "$x \\ne 16$",
          "$x \\ne 4$",
          "$x \\ne -4$"
        ],
        "correctIndex": 0,
        "explanation": "Mẫu thức $x^2 - 16 \\ne 0 \\Leftrightarrow x^2 \\ne 16 \\Leftrightarrow x \\ne \\pm 4$."
      },
      {
        "id": "ai-9.4.6",
        "badge": "Luyện thêm 6 - Nhận biết nghiệm của phân thức",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 18)",
        "question": "Trong các số sau, số nào là nghiệm của phương trình $\\frac{x - 5}{2x + 1} = 0$?",
        "options": [
          "$x = 5$",
          "$x = -\\frac{1}{2}$",
          "$x = -5$",
          "$x = \\frac{1}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $2x + 1 \\ne 0 \\Leftrightarrow x \\ne -\\frac{1}{2}$. Phân thức bằng 0 khi tử thức bằng 0: $x - 5 = 0 \\Leftrightarrow x = 5$ (thỏa mãn ĐKXĐ)."
      },
      {
        "id": "ai-9.4.7",
        "badge": "Luyện thêm 7 - Đếm số nghiệm của phương trình tích ba nhân tử",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12 (Trang 21)",
        "question": "Phương trình $(x + 1)(x - 2)(2x - 8) = 0$ có tất cả bao nhiêu nghiệm phân biệt?",
        "options": [
          "3 nghiệm",
          "2 nghiệm",
          "1 nghiệm",
          "4 nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình có 3 nghiệm phân biệt là: $x + 1 = 0 \\Leftrightarrow x = -1$; $x - 2 = 0 \\Leftrightarrow x = 2$; $2x - 8 = 0 \\Leftrightarrow x = 4$. Vậy có đúng 3 nghiệm."
      },
      {
        "id": "ai-9.4.8",
        "badge": "Luyện thêm 8 - ĐKXĐ của hai phân thức khác nhau",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 15)",
        "question": "Điều kiện xác định của phương trình $\\frac{3}{2x - 6} = \\frac{x}{x + 2}$ là:",
        "options": [
          "$x \\ne 3$ và $x \\ne -2$",
          "$x \\ne -3$ và $x \\ne 2$",
          "$x \\ne 3$",
          "$x \\ne -2$"
        ],
        "correctIndex": 0,
        "explanation": "Các mẫu thức khác 0: $2x - 6 \\ne 0 \\Leftrightarrow x \\ne 3$ và $x + 2 \\ne 0 \\Leftrightarrow x \\ne -2$."
      },
      {
        "id": "ai-9.4.9",
        "badge": "Luyện thêm 9 - Giải phương trình tích bậc hai khuyết c",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13 (Trang 21)",
        "question": "Tập nghiệm của phương trình $x^2 - 5x = 0$ là:",
        "options": [
          "$S = \\{0; 5\\}$",
          "$S = \\{5\\}$",
          "$S = \\{0; -5\\}$",
          "$S = \\{-5; 5\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Đặt nhân tử chung: $x(x - 5) = 0 \\Leftrightarrow x = 0$ hoặc $x - 5 = 0 \\Leftrightarrow x = 0$ hoặc $x = 5$. Vậy $S = \\{0; 5\\}$."
      },
      {
        "id": "ai-9.4.10",
        "badge": "Luyện thêm 10 - Giải phương trình tích có nhân tử chung hai vế",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 15)",
        "question": "Giải phương trình $(x - 1)(2x + 3) = (x - 1)(x - 4)$. Tập nghiệm $S$ là:",
        "options": [
          "$S = \\{1; -7\\}$",
          "$S = \\{1; 7\\}$",
          "$S = \\{-1; 7\\}$",
          "$S = \\{1\\}$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển vế đặt nhân tử chung: $(x - 1)[(2x + 3) - (x - 4)] = 0 \\Leftrightarrow (x - 1)(x + 7) = 0 \\Leftrightarrow x = 1$ hoặc $x = -7$. Vậy $S = \\{1; -7\\}$."
      },
      {
        "id": "ai-9.4.11",
        "badge": "Luyện thêm 11 - Giải phương trình phân thức cơ bản",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 19)",
        "question": "Nghiệm của phương trình $\\frac{2x - 3}{x - 1} = 1$ là:",
        "options": [
          "$x = 2$",
          "$x = 1$",
          "$x = -2$",
          "Phương trình vô nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne 1$. Khử mẫu: $2x - 3 = x - 1 \\Leftrightarrow 2x - x = -1 + 3 \\Leftrightarrow x = 2$ (thỏa mãn ĐKXĐ). Vậy nghiệm là $x = 2$."
      },
      {
        "id": "ai-9.4.12",
        "badge": "Luyện thêm 12 - Giải phương trình dạng a^2 - b^2",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13 (Trang 21)",
        "question": "Nghiệm của phương trình $(3x - 2)^2 - 16 = 0$ là:",
        "options": [
          "$x = 2$ hoặc $x = -\\frac{2}{3}$",
          "$x = 2$ hoặc $x = \\frac{2}{3}$",
          "$x = 6$ hoặc $x = -2$",
          "$x = -2$ hoặc $x = -\\frac{2}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng hằng đẳng thức $a^2 - b^2$: $(3x - 2 - 4)(3x - 2 + 4) = 0 \\Leftrightarrow (3x - 6)(3x + 2) = 0 \\Leftrightarrow 3x - 6 = 0$ hoặc $3x + 2 = 0 \\Leftrightarrow x = 2$ hoặc $x = -\\frac{2}{3}$."
      },
      {
        "id": "ai-9.4.13",
        "badge": "Luyện thêm 13 - Kiểm tra nghiệm ngoại lai",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 15)",
        "question": "Phương trình $\\frac{x^2 - 1}{x + 1} = 0$ có bao nhiêu nghiệm?",
        "options": [
          "1 nghiệm",
          "2 nghiệm",
          "0 nghiệm (vô nghiệm)",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne -1$. Tử thức $x^2 - 1 = 0 \\Leftrightarrow x = \\pm 1$. Do $x = -1$ vi phạm ĐKXĐ nên bị loại, chỉ nhận nghiệm $x = 1$. Vậy phương trình có duy nhất 1 nghiệm."
      },
      {
        "id": "ai-9.4.14",
        "badge": "Luyện thêm 14 - Quy đồng khử mẫu phương trình phân thức",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 20)",
        "question": "Tập nghiệm của phương trình $\\frac{x + 1}{x - 1} - \\frac{1}{x} = 1$ là:",
        "options": [
          "$S = \\{-1\\}$",
          "$S = \\{1\\}$",
          "$S = \\{0; 1\\}$",
          "$S = \\emptyset$"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne 0$ và $x \\ne 1$. Quy đồng với mẫu thức chung $x(x - 1)$:\n$x(x + 1) - (x - 1) = x(x - 1) \\Leftrightarrow x^2 + 1 = x^2 - x \\Leftrightarrow -x = 1 \\Leftrightarrow x = -1$ (thỏa mãn ĐKXĐ). Vậy $S = \\{-1\\}$."
      },
      {
        "id": "ai-9.4.15",
        "badge": "Luyện thêm 15 - Vận dụng giải phương trình phân thức",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.15 (Trang 22)",
        "question": "Nghiệm của phương trình $\\frac{x + 3}{x - 3} - \\frac{x - 3}{x + 3} = \\frac{24}{x^2 - 9}$ là:",
        "options": [
          "$x = 2$",
          "$x = -2$",
          "$x = 3$",
          "Phương trình vô nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne \\pm 3$. Khử mẫu: $(x + 3)^2 - (x - 3)^2 = 24 \\Leftrightarrow 12x = 24 \\Leftrightarrow x = 2$ (thỏa mãn ĐKXĐ). Vậy nghiệm là $x = 2$."
      },
      {
        "id": "ai-9.4.16",
        "badge": "Luyện thêm 16 - Tìm m để phương trình phân thức có nghiệm dương",
        "isAiGenerated": true,
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hà Nội",
        "question": "Tìm tất cả các giá trị của tham số $m$ để phương trình $\\frac{x - 3m}{x + 1} = 2$ có nghiệm dương ($x > 0$).",
        "options": [
          "$m < -\\frac{2}{3}$",
          "$m > -\\frac{2}{3}$",
          "$m \\le -\\frac{2}{3}$",
          "$m \\ne -1$"
        ],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne -1$. Khử mẫu: $x - 3m = 2(x + 1) \\Leftrightarrow x - 3m = 2x + 2 \\Leftrightarrow x = -3m - 2$. Để nghiệm $x > 0$ thì $-3m - 2 > 0 \\Leftrightarrow -3m > 2 \\Leftrightarrow m < -\\frac{2}{3}$ (khi đó $x > 0 > -1$ nên luôn thỏa mãn ĐKXĐ $x \\ne -1$)."
      },
      {
        "id": "ai-9.4.17",
        "badge": "Luyện thêm 17 - Tích các nghiệm của phương trình tích",
        "isAiGenerated": true,
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hồ Chí Minh",
        "question": "Tích tất cả các nghiệm của phương trình $(x^2 - 3x + 2)(x^2 - 9) = 0$ là:",
        "options": [
          "$-18$",
          "$18$",
          "$-6$",
          "$6$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $(x - 1)(x - 2)(x - 3)(x + 3) = 0$. Phương trình có 4 nghiệm là $x = 1, 2, 3, -3$. Tích các nghiệm là: $1 \\cdot 2 \\cdot 3 \\cdot (-3) = -18$."
      },
      {
        "id": "ai-9.4.18",
        "badge": "Luyện thêm 18 - Toán thực tế chuyển động sông nước",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.16 (Trang 22)",
        "question": "Một chiếc ca nô chạy xuôi dòng $48\\text{ km}$ rồi quay ngược dòng trở lại hết tổng cộng $5\\text{ giờ}$. Biết vận tốc của dòng nước là $4\\text{ km/h}$. Vận tốc thực của ca nô khi nước yên lặng là:",
        "options": [
          "$20\\text{ km/h}$",
          "$16\\text{ km/h}$",
          "$24\\text{ km/h}$",
          "$18\\text{ km/h}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi vận tốc thực của ca nô là $v\\text{ (km/h)}$, $v > 4$. Vận tốc xuôi: $v + 4$, ngược: $v - 4$. Tổng thời gian: $\\frac{48}{v + 4} + \\frac{48}{v - 4} = 5$. Thay $v = 20$: $\\frac{48}{24} + \\frac{48}{16} = 2 + 3 = 5\\text{ (giờ)}$ (thỏa mãn). Vậy vận tốc thực là $20\\text{ km/h}$."
      },
      {
        "id": "ai-9.4.19",
        "badge": "Luyện thêm 19 - Toán thực tế năng suất làm chung làm riêng",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 4 (Trang 21)",
        "question": "Hai tổ công nhân cùng làm chung một công việc thì trong $12\\text{ giờ}$ hoàn thành. Nếu làm riêng một mình thì tổ một hoàn thành nhanh hơn tổ hai $10\\text{ giờ}$. Thời gian tổ một làm riêng một mình xong công việc là:",
        "options": [
          "$20\\text{ giờ}$",
          "$30\\text{ giờ}$",
          "$15\\text{ giờ}$",
          "$25\\text{ giờ}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi thời gian tổ một làm một mình xong việc là $x\\text{ (giờ)}$, $x > 0$. Tổ hai làm trong $x + 10\\text{ (giờ)}$. Phương trình: $\\frac{1}{x} + \\frac{1}{x + 10} = \\frac{1}{12} \\Leftrightarrow 12(2x + 10) = x(x + 10) \\Leftrightarrow x^2 - 14x - 120 = 0 \\Leftrightarrow (x - 20)(x + 6) = 0 \\Leftrightarrow x = 20\\text{ (giờ)}$ (nhận vì $x > 0$)."
      },
      {
        "id": "ai-9.4.20",
        "badge": "Luyện thêm 20 - Toán thực tế năng suất xí nghiệp may",
        "isAiGenerated": true,
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hải Phòng",
        "question": "Một xưởng may theo hợp đồng phải may $900$ chiếc áo jacket. Nhờ cải tiến kỹ thuật, mỗi ngày xưởng may thêm được $15$ chiếc áo nên đã hoàn thành hợp đồng trước thời hạn $3\\text{ ngày}$. Theo kế hoạch, mỗi ngày xưởng phải may bao nhiêu chiếc áo?",
        "options": [
          "$60\\text{ chiếc/ngày}$",
          "$75\\text{ chiếc/ngày}$",
          "$50\\text{ chiếc/ngày}$",
          "$45\\text{ chiếc/ngày}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số áo may mỗi ngày theo kế hoạch là $x$ ($x > 0$). Thời gian dự kiến là $\\frac{900}{x}\\text{ (ngày)}$. Thực tế may $x + 15$ áo/ngày nên mất $\\frac{900}{x + 15}\\text{ (ngày)}$. Phương trình: $\\frac{900}{x} - \\frac{900}{x + 15} = 3 \\Leftrightarrow x(x + 15) = 4500 \\Leftrightarrow x^2 + 15x - 4500 = 0 \\Leftrightarrow (x - 60)(x + 75) = 0 \\Leftrightarrow x = 60$ (thỏa mãn $x > 0$)."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-9.4.1",
        "badge": "Luyện thêm Đ/S 1 - Điều kiện xác định phân thức",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.11 (Trang 21)",
        "prompt": "Cho phương trình: $\\frac{3}{x - 5} - \\frac{1}{x + 2} = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 5$ và $x \\ne -2$.",
            "correctAnswer": true,
            "explanation": "Hai mẫu thức $x - 5$ và $x + 2$ khác 0 khi $x \\ne 5$ và $x \\ne -2$."
          },
          {
            "id": "b",
            "text": "Mẫu thức chung của hai phân thức là $(x - 5)(x + 2)$.",
            "correctAnswer": true,
            "explanation": "Mẫu chung là tích hai mẫu thức."
          },
          {
            "id": "c",
            "text": "Giá trị $x = -2$ thỏa mãn điều kiện xác định của phương trình.",
            "correctAnswer": false,
            "explanation": "Tại $x = -2$ thì mẫu thức $x + 2 = 0$ nên không thỏa mãn ĐKXĐ."
          },
          {
            "id": "d",
            "text": "Tại $x = 0$, cả hai phân thức trong phương trình đều xác định.",
            "correctAnswer": true,
            "explanation": "Thay $x = 0$ ta được $-5 \\ne 0$ và $2 \\ne 0$ nên phương trình xác định tại $x = 0$."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.2",
        "badge": "Luyện thêm Đ/S 2 - Phương trình tích cơ bản",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 15)",
        "prompt": "Cho phương trình tích: $(4x - 8)(x + 3) = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình tương đương với $4x - 8 = 0$ hoặc $x + 3 = 0$.",
            "correctAnswer": true,
            "explanation": "Quy tắc giải phương trình tích: $A \\cdot B = 0 \\Leftrightarrow A = 0$ hoặc $B = 0$."
          },
          {
            "id": "b",
            "text": "$x = 2$ là một nghiệm của phương trình.",
            "correctAnswer": true,
            "explanation": "$4x - 8 = 0 \\Leftrightarrow 4x = 8 \\Leftrightarrow x = 2$."
          },
          {
            "id": "c",
            "text": "$x = 3$ là một nghiệm của phương trình.",
            "correctAnswer": false,
            "explanation": "$x + 3 = 0 \\Leftrightarrow x = -3$ (không phải $3$)."
          },
          {
            "id": "d",
            "text": "Tổng các nghiệm của phương trình bằng $-1$.",
            "correctAnswer": true,
            "explanation": "Tổng hai nghiệm: $2 + (-3) = -1$."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.3",
        "badge": "Luyện thêm Đ/S 3 - Phân thức và loại nghiệm ngoại lai",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 19)",
        "prompt": "Cho phương trình: $\\frac{x^2 - 1}{x - 1} = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 1$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức khác 0: $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$."
          },
          {
            "id": "b",
            "text": "Tử thức $x^2 - 1 = 0$ khi $x = 1$ hoặc $x = -1$.",
            "correctAnswer": true,
            "explanation": "$x^2 = 1 \\Leftrightarrow x = \\pm 1$."
          },
          {
            "id": "c",
            "text": "Giá trị $x = 1$ là một nghiệm của phương trình đã cho.",
            "correctAnswer": false,
            "explanation": "$x = 1$ không thỏa mãn ĐKXĐ ($x \\ne 1$) nên bị loại (nghiệm ngoại lai)."
          },
          {
            "id": "d",
            "text": "Phương trình có duy nhất một nghiệm là $x = -1$.",
            "correctAnswer": true,
            "explanation": "Chỉ có $x = -1$ thỏa mãn ĐKXĐ nên $S = \\{-1\\}$."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.4",
        "badge": "Luyện thêm Đ/S 4 - Phương trình tích đặt nhân tử chung",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13 (Trang 21)",
        "prompt": "Cho phương trình: $x^2 - 9x = 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Biến đổi vế trái thành nhân tử ta được $x(x - 9) = 0$.",
            "correctAnswer": true,
            "explanation": "Đặt nhân tử chung là $x$."
          },
          {
            "id": "b",
            "text": "Phương trình có hai nghiệm phân biệt.",
            "correctAnswer": true,
            "explanation": "Hai nghiệm là $x = 0$ và $x = 9$."
          },
          {
            "id": "c",
            "text": "Nghiệm lớn nhất của phương trình là $9$.",
            "correctAnswer": true,
            "explanation": "So sánh $0$ và $9$ thì $9$ là nghiệm lớn nhất."
          },
          {
            "id": "d",
            "text": "Tích các nghiệm của phương trình bằng $9$.",
            "correctAnswer": false,
            "explanation": "Tích hai nghiệm là $0 \\cdot 9 = 0$ (không phải $9$)."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.5",
        "badge": "Luyện thêm Đ/S 5 - Phương trình tích có nhân tử chung hai vế",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 15)",
        "prompt": "Cho phương trình: $(x - 3)(2x + 1) = (x - 3)(x + 4)$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Chia cả hai vế cho $x - 3$ là phép biến đổi tương đương luôn đúng.",
            "correctAnswer": false,
            "explanation": "Chia hai vế cho $x - 3$ sẽ làm mất nghiệm $x = 3$ vì $x - 3$ có thể bằng 0."
          },
          {
            "id": "b",
            "text": "Chuyển vế đặt nhân tử chung ta được $(x - 3)[(2x + 1) - (x + 4)] = 0$.",
            "correctAnswer": true,
            "explanation": "Chuyển vế và đặt $x - 3$ làm nhân tử chung."
          },
          {
            "id": "c",
            "text": "Phương trình rút gọn về dạng $(x - 3)(x - 3) = 0$.",
            "correctAnswer": true,
            "explanation": "$(2x + 1) - (x + 4) = x - 3$, do đó phương trình là $(x - 3)^2 = 0$."
          },
          {
            "id": "d",
            "text": "Phương trình có nghiệm duy nhất là $x = 3$.",
            "correctAnswer": true,
            "explanation": "$(x - 3)^2 = 0 \\Leftrightarrow x = 3$."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.6",
        "badge": "Luyện thêm Đ/S 6 - Giải phương trình phân thức",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.14 (Trang 22)",
        "prompt": "Cho phương trình: $\\frac{3x - 2}{x - 1} = 2$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 1$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$."
          },
          {
            "id": "b",
            "text": "Khử mẫu ta được phương trình: $3x - 2 = 2(x - 1)$.",
            "correctAnswer": true,
            "explanation": "Nhân cả hai vế với mẫu thức $x - 1$."
          },
          {
            "id": "c",
            "text": "Nghiệm của phương trình là $x = 0$.",
            "correctAnswer": true,
            "explanation": "$3x - 2 = 2x - 2 \\Leftrightarrow x = 0$ (thỏa mãn $x \\ne 1$)."
          },
          {
            "id": "d",
            "text": "Phương trình đã cho vô nghiệm.",
            "correctAnswer": false,
            "explanation": "Phương trình có nghiệm thỏa mãn là $x = 0$."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.7",
        "badge": "Luyện thêm Đ/S 7 - Phương trình phân thức có mẫu đối xứng",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 20)",
        "prompt": "Cho phương trình: $\\frac{x}{x - 2} + \\frac{2}{x + 2} = \\frac{8}{x^2 - 4}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định là $x \\ne 2$ và $x \\ne -2$.",
            "correctAnswer": true,
            "explanation": "Mẫu chung là $x^2 - 4 = (x - 2)(x + 2) \\ne 0 \\Leftrightarrow x \\ne \\pm 2$."
          },
          {
            "id": "b",
            "text": "Khử mẫu ta được phương trình: $x(x + 2) + 2(x - 2) = 8$.",
            "correctAnswer": true,
            "explanation": "Quy đồng mẫu chung $x^2 - 4$ rồi khử mẫu."
          },
          {
            "id": "c",
            "text": "Phương trình sau khi thu gọn là $x^2 + 4x - 12 = 0$.",
            "correctAnswer": true,
            "explanation": "$x^2 + 2x + 2x - 4 = 8 \\Leftrightarrow x^2 + 4x - 12 = 0$."
          },
          {
            "id": "d",
            "text": "Tập nghiệm của phương trình là $S = \\{2; -6\\}$.",
            "correctAnswer": false,
            "explanation": "$x^2 + 4x - 12 = (x - 2)(x + 6) = 0 \\Leftrightarrow x = 2$ hoặc $x = -6$. Vì $x = 2$ không thỏa ĐKXĐ ($x \\ne 2$) nên chỉ nhận $x = -6$. Do đó $S = \\{-6\\}$."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.8",
        "badge": "Luyện thêm Đ/S 8 - Phương trình chứa tham số",
        "source": "Đề thi HSG Toán 9 & Chuyên đề phương trình",
        "prompt": "Cho phương trình chứa tham số $m$: $\\frac{x - m}{x - 3} = 2$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Điều kiện xác định của phương trình là $x \\ne 3$.",
            "correctAnswer": true,
            "explanation": "Mẫu thức khác 0: $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$."
          },
          {
            "id": "b",
            "text": "Biến đổi phương trình thu được $x = 6 - m$.",
            "correctAnswer": true,
            "explanation": "$x - m = 2(x - 3) \\Leftrightarrow x - m = 2x - 6 \\Leftrightarrow x = 6 - m$."
          },
          {
            "id": "c",
            "text": "Với $m = 3$, phương trình có nghiệm duy nhất $x = 3$.",
            "correctAnswer": false,
            "explanation": "Khi $m = 3$ thì $x = 6 - 3 = 3$, vi phạm ĐKXĐ ($x \\ne 3$) nên phương trình vô nghiệm."
          },
          {
            "id": "d",
            "text": "Phương trình có nghiệm khi và chỉ khi $m \\ne 3$.",
            "correctAnswer": true,
            "explanation": "Để nghiệm $x = 6 - m$ thỏa mãn ĐKXĐ thì $6 - m \\ne 3 \\Leftrightarrow m \\ne 3$."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.9",
        "badge": "Luyện thêm Đ/S 9 - Toán thực tế chuyển động sông nước",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.16 (Trang 22)",
        "prompt": "Một ca nô xuôi dòng $40\\text{ km}$ rồi quay ngược dòng trở lại khúc sông đó. Vận tốc dòng nước là $2\\text{ km/h}$. Gọi vận tốc thực của ca nô là $v\\text{ (km/h)}$ ($v > 2$). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Vận tốc của ca nô khi ngược dòng là $v - 2\\text{ (km/h)}$.",
            "correctAnswer": true,
            "explanation": "Vận tốc ngược dòng bằng vận tốc thực trừ vận tốc nước."
          },
          {
            "id": "b",
            "text": "Thời gian ca nô đi xuôi dòng $40\\text{ km}$ là $\\frac{40}{v + 2}\\text{ (giờ)}$.",
            "correctAnswer": true,
            "explanation": "Thời gian xuôi dòng bằng quãng đường chia vận tốc xuôi dòng."
          },
          {
            "id": "c",
            "text": "Nếu ca nô có vận tốc thực $18\\text{ km/h}$ thì thời gian xuôi dòng là $2\\text{ giờ}$.",
            "correctAnswer": true,
            "explanation": "Thời gian xuôi dòng: $\\frac{40}{18 + 2} = \\frac{40}{20} = 2\\text{ (giờ)}$."
          },
          {
            "id": "d",
            "text": "Với vận tốc thực $18\\text{ km/h}$, tổng thời gian ca nô đi cả xuôi lẫn ngược dòng là $5\\text{ giờ}$.",
            "correctAnswer": false,
            "explanation": "Thời gian ngược dòng: $\\frac{40}{18 - 2} = \\frac{40}{16} = 2,5\\text{ giờ}$. Tổng thời gian là $2 + 2,5 = 4,5\\text{ giờ}$ (không phải $5$ giờ)."
          }
        ]
      },
      {
        "id": "ai-tf-9.4.10",
        "badge": "Luyện thêm Đ/S 10 - Toán thực tế năng suất hai đội",
        "source": "SGK Toán 9 Cánh Diều Bài 4 (Trang 16)",
        "prompt": "Hai tổ công nhân cùng làm chung một công việc trong $12\\text{ ngày}$ thì hoàn thành. Nếu làm riêng một mình, tổ một làm nhanh hơn tổ hai $10\\text{ ngày}$. Gọi thời gian tổ một làm riêng một mình hoàn thành công việc là $x\\text{ (ngày)}$ ($x > 0$). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Trong $1\\text{ ngày}$, tổ một hoàn thành được $\\frac{1}{x}$ công việc.",
            "correctAnswer": true,
            "explanation": "Tổ một làm trong $x$ ngày nên mỗi ngày làm được $\\frac{1}{x}$ khối lượng công việc."
          },
          {
            "id": "b",
            "text": "Thời gian tổ hai làm riêng một mình hoàn thành công việc là $x - 10\\text{ (ngày)}$.",
            "correctAnswer": false,
            "explanation": "Tổ một nhanh hơn tổ hai 10 ngày thì tổ hai phải mất nhiều thời gian hơn tổ một: $x + 10$ ngày."
          },
          {
            "id": "c",
            "text": "Phương trình biểu diễn mối quan hệ là: $\\frac{1}{x} + \\frac{1}{x + 10} = \\frac{1}{12}$.",
            "correctAnswer": true,
            "explanation": "Năng suất mỗi ngày của hai tổ bằng $\\frac{1}{12}$ công việc."
          },
          {
            "id": "d",
            "text": "Tổ một làm riêng một mình mất $20\\text{ ngày}$ để hoàn thành công việc.",
            "correctAnswer": true,
            "explanation": "Giải phương trình ta được $x = 20\\text{ ngày}$ (thỏa mãn $x > 0$)."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-9.4.1",
        "badge": "Luyện thêm TLN 1 - Nghiệm dương của phương trình tích",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12 (Trang 21)",
        "prompt": "Tìm nghiệm dương của phương trình: $(x - 6)(x + 3) = 0$.",
        "correctAnswer": "6",
        "acceptableAnswers": ["6", "x=6", "x = 6"],
        "explanation": "Phương trình có 2 nghiệm: $x = 6$ hoặc $x = -3$. Nghiệm dương là $6$."
      },
      {
        "id": "ai-sa-9.4.2",
        "badge": "Luyện thêm TLN 2 - Giá trị làm mẫu thức triệt tiêu",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 15)",
        "prompt": "Tìm giá trị của $x$ để mẫu thức của phân thức $\\frac{5}{2x - 10}$ bằng 0.",
        "correctAnswer": "5",
        "acceptableAnswers": ["5", "x=5", "x = 5"],
        "explanation": "Mẫu thức bằng 0: $2x - 10 = 0 \\Leftrightarrow 2x = 10 \\Leftrightarrow x = 5$."
      },
      {
        "id": "ai-sa-9.4.3",
        "badge": "Luyện thêm TLN 3 - Số nghiệm của phương trình tích ba nhân tử",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 18)",
        "prompt": "Phương trình $(x - 2)(x + 1)(x - 5) = 0$ có tất cả bao nhiêu nghiệm phân biệt?",
        "correctAnswer": "3",
        "acceptableAnswers": ["3", "ba"],
        "explanation": "Phương trình có 3 nghiệm phân biệt là $x = 2, x = -1, x = 5$. Vậy có 3 nghiệm."
      },
      {
        "id": "ai-sa-9.4.4",
        "badge": "Luyện thêm TLN 4 - Nghiệm của phân thức bằng 0",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.12 (Trang 21)",
        "prompt": "Tìm nghiệm của phương trình $\\frac{x - 9}{x + 1} = 0$.",
        "correctAnswer": "9",
        "acceptableAnswers": ["9", "x=9", "x = 9"],
        "explanation": "ĐKXĐ: $x \\ne -1$. Phương trình $\\Rightarrow x - 9 = 0 \\Leftrightarrow x = 9$ (thỏa mãn ĐKXĐ)."
      },
      {
        "id": "ai-sa-9.4.5",
        "badge": "Luyện thêm TLN 5 - Tổng các nghiệm của phương trình tích",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.13 (Trang 21)",
        "prompt": "Tính tổng các nghiệm của phương trình: $(3x - 6)(2x + 8) = 0$.",
        "correctAnswer": "-2",
        "acceptableAnswers": ["-2"],
        "explanation": "Phương trình có hai nghiệm: $3x - 6 = 0 \\Leftrightarrow x = 2$ và $2x + 8 = 0 \\Leftrightarrow x = -4$. Tổng các nghiệm: $2 + (-4) = -2$."
      },
      {
        "id": "ai-sa-9.4.6",
        "badge": "Luyện thêm TLN 6 - Số nghiệm thỏa mãn ĐKXĐ",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 15)",
        "prompt": "Phương trình $\\frac{x^2 - 25}{x - 5} = 0$ có bao nhiêu nghiệm thỏa mãn điều kiện xác định?",
        "correctAnswer": "1",
        "acceptableAnswers": ["1", "một"],
        "explanation": "ĐKXĐ: $x \\ne 5$. $x^2 - 25 = 0 \\Leftrightarrow x = \\pm 5$. Do $x \\ne 5$ nên $x = 5$ bị loại, chỉ nhận $x = -5$. Vậy phương trình có đúng 1 nghiệm."
      },
      {
        "id": "ai-sa-9.4.7",
        "badge": "Luyện thêm TLN 7 - Nghiệm nguyên thỏa mãn điều kiện",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 19)",
        "prompt": "Giải phương trình $x^2 - 7x + 10 = 0$. Tìm nghiệm của phương trình thỏa mãn điều kiện $x > 3$.",
        "correctAnswer": "5",
        "acceptableAnswers": ["5", "x=5", "x = 5"],
        "explanation": "Ta có $x^2 - 7x + 10 = (x - 2)(x - 5) = 0 \\Leftrightarrow x = 2$ hoặc $x = 5$. Nghiệm thỏa mãn $x > 3$ là $x = 5$."
      },
      {
        "id": "ai-sa-9.4.8",
        "badge": "Luyện thêm TLN 8 - Tìm tham số m để phương trình có nghiệm",
        "source": "Đề thi tuyển sinh vào 10 THPT",
        "prompt": "Tìm giá trị của tham số $m$ để phương trình $\\frac{x - m}{x - 1} = 3$ nhận $x = 2$ làm nghiệm.",
        "correctAnswer": "-1",
        "acceptableAnswers": ["-1", "m=-1", "m = -1"],
        "explanation": "Thay $x = 2$ vào phương trình: $\\frac{2 - m}{2 - 1} = 3 \\Leftrightarrow 2 - m = 3 \\Leftrightarrow m = -1$."
      },
      {
        "id": "ai-sa-9.4.9",
        "badge": "Luyện thêm TLN 9 - Toán thực tế vận tốc ca nô",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1.16 (Trang 22)",
        "prompt": "Một ca nô đi xuôi dòng khúc sông dài $48\\text{ km}$ hết $2\\text{ giờ}$. Biết vận tốc dòng nước là $4\\text{ km/h}$. Tính vận tốc thực của ca nô khi nước yên lặng (theo đơn vị km/h).",
        "correctAnswer": "20",
        "acceptableAnswers": ["20", "20 km/h", "20km/h"],
        "explanation": "Vận tốc xuôi dòng của ca nô: $48 : 2 = 24\\text{ (km/h)}$. Vận tốc thực của ca nô khi nước yên lặng là: $v_{\\text{thực}} = 24 - 4 = 20\\text{ (km/h)}$."
      },
      {
        "id": "ai-sa-9.4.10",
        "badge": "Luyện thêm TLN 10 - Toán thực tế năng suất xưởng dệt",
        "source": "Đề thi tuyển sinh vào 10 THPT TP. Hải Phòng",
        "prompt": "Một xưởng dệt theo kế hoạch mỗi ngày phải dệt $40\\text{ m}$ vải. Nhờ tăng năng suất, mỗi ngày xưởng dệt được $50\\text{ m}$ vải nên đã hoàn thành hợp đồng trước $3\\text{ ngày}$. Tính tổng số mét vải xưởng phải dệt theo kế hoạch (theo đơn vị mét).",
        "correctAnswer": "600",
        "acceptableAnswers": ["600", "600m", "600 m"],
        "explanation": "Gọi tổng số mét vải xưởng phải dệt là $L\\text{ (m)}$, $L > 0$. Thời gian dự định là $\\frac{L}{40}\\text{ (ngày)}$, thời gian thực tế là $\\frac{L}{50}\\text{ (ngày)}$. Ta có phương trình: $\\frac{L}{40} - \\frac{L}{50} = 3 \\Leftrightarrow \\frac{L}{200} = 3 \\Leftrightarrow L = 600\\text{ m}$."
      }
    ]
  },
  "t9-on-tap-chuong-1": {
    "quizQuestions": [
      {
        "id": "ai-ot1-q1",
        "badge": "Luyện thêm 1 (NB) - Nhận biết phương trình bậc nhất hai ẩn",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 6)",
        "question": "Phương trình nào sau đây là phương trình bậc nhất hai ẩn?",
        "options": [
          "$5x - 4y = 9$",
          "$x^2 - y = 3$",
          "$2x + \\frac{3}{y} = 1$",
          "$0x + 0y = 7$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình bậc nhất hai ẩn có dạng $ax + by = c$ với $a \\ne 0$ hoặc $b \\ne 0$. Ở đây $5x - 4y = 9$ có $a = 5, b = -4$."
      },
      {
        "id": "ai-ot1-q2",
        "badge": "Luyện thêm 2 (NB) - Kiểm tra nghiệm",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 7)",
        "question": "Cặp số nào sau đây là nghiệm của phương trình $3x - y = 7$?",
        "options": [
          "$(3; 2)$",
          "$(2; 3)$",
          "$(1; -4)$",
          "$(0; 7)$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 3, y = 2$: $3(3) - 2 = 7$ (thỏa mãn)."
      },
      {
        "id": "ai-ot1-q3",
        "badge": "Luyện thêm 3 (NB) - Biểu diễn hình học",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 8)",
        "question": "Đường thẳng biểu diễn tập nghiệm của phương trình $0x + 2y = 4$ là đường thẳng:",
        "options": [
          "Song song với trục hoành $Ox$",
          "Song song với trục tung $Oy$",
          "Đi qua gốc tọa độ",
          "Trùng với trục tung $Oy$"
        ],
        "correctIndex": 0,
        "explanation": "$0x + 2y = 4 \\Leftrightarrow y = 2$, đường thẳng này song song với trục hoành $Ox$."
      },
      {
        "id": "ai-ot1-q4",
        "badge": "Luyện thêm 4 (NB) - Nghiệm của hệ",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1 (Trang 9)",
        "question": "Cặp số $(2; 1)$ là nghiệm của hệ phương trình nào dưới đây?",
        "options": [
          "$\\begin{cases} x + y = 3 \\\\ 2x - y = 3 \\end{cases}$",
          "$\\begin{cases} x - y = 3 \\\\ x + 2y = 3 \\end{cases}$",
          "$\\begin{cases} 2x + y = 4 \\\\ x - y = 0 \\end{cases}$",
          "$\\begin{cases} 3x - y = 4 \\\\ x + y = 2 \\end{cases}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 2, y = 1$: $2 + 1 = 3$ và $2(2) - 1 = 3$ (đều thỏa mãn)."
      },
      {
        "id": "ai-ot1-q5",
        "badge": "Luyện thêm 5 (NB) - Hệ có vô số nghiệm",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 12)",
        "question": "Hệ phương trình $\\begin{cases} 3x - y = 2 \\\\ 6x - 2y = 4 \\end{cases}$ có bao nhiêu nghiệm?",
        "options": [
          "Có vô số nghiệm",
          "Vô nghiệm",
          "Có 1 nghiệm duy nhất",
          "Có 2 nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Hai phương trình tương đương nên hai đường thẳng trùng nhau, hệ có vô số nghiệm."
      },
      {
        "id": "ai-ot1-q6",
        "badge": "Luyện thêm 6 (NB) - Hệ vô nghiệm",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 14)",
        "question": "Hệ phương trình $\\begin{cases} 2x - y = 1 \\\\ 2x - y = 5 \\end{cases}$ có số nghiệm là:",
        "options": [
          "$0$ (Vô nghiệm)",
          "$1$",
          "$2$",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường thẳng song song không cắt nhau nên hệ vô nghiệm."
      },
      {
        "id": "ai-ot1-q7",
        "badge": "Luyện thêm 7 (TH) - Giải hệ phương trình thế",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 15)",
        "question": "Giải hệ phương trình $\\begin{cases} y = 2x - 3 \\\\ 3x + 2y = 8 \\end{cases}$. Nghiệm $(x; y)$ là:",
        "options": [
          "$(2; 1)$",
          "$(1; 2)$",
          "$(3; 3)$",
          "$(0; -3)$"
        ],
        "correctIndex": 0,
        "explanation": "Thế $y = 2x - 3$ vào PT 2: $3x + 2(2x - 3) = 8 \\Leftrightarrow 7x = 14 \\Leftrightarrow x = 2 \\Rightarrow y = 1$."
      },
      {
        "id": "ai-ot1-q8",
        "badge": "Luyện thêm 8 (TH) - Giải hệ phương trình cộng đại số",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 13)",
        "question": "Giải hệ phương trình $\\begin{cases} 4x + 3y = 11 \\\\ 2x - y = 3 \\end{cases}$. Giá trị của $x + y$ là:",
        "options": [
          "$3$",
          "$4$",
          "$5$",
          "$2$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân PT 2 với 3: $6x - 3y = 9$. Cộng vào PT 1: $10x = 20 \\Rightarrow x = 2 \\Rightarrow y = 1$. Giá trị $x + y = 3$."
      },
      {
        "id": "ai-ot1-q9",
        "badge": "Luyện thêm 9 (TH) - Tìm a, b của hệ",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 14)",
        "question": "Biết hệ phương trình $\\begin{cases} ax + y = 5 \\\\ bx - 2y = 2 \\end{cases}$ nhận $(x; y) = (2; 1)$ làm nghiệm. Giá trị $a$ và $b$ là:",
        "options": [
          "$a = 2; b = 2$",
          "$a = 1; b = 2$",
          "$a = 2; b = 1$",
          "$a = 3; b = 2$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 2, y = 1$: $2a + 1 = 5 \\Rightarrow a = 2$; $2b - 2 = 2 \\Rightarrow 2b = 4 \\Rightarrow b = 2$."
      },
      {
        "id": "ai-ot1-q10",
        "badge": "Luyện thêm 10 (TH) - Giao điểm hai đường thẳng",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2 (Trang 16)",
        "question": "Tọa độ giao điểm của hai đường thẳng $y = 3x - 4$ và $y = -x + 4$ là:",
        "options": [
          "$(2; 2)$",
          "$(1; 3)$",
          "$(3; 1)$",
          "$(0; 4)$"
        ],
        "correctIndex": 0,
        "explanation": "$3x - 4 = -x + 4 \\Leftrightarrow 4x = 8 \\Leftrightarrow x = 2 \\Rightarrow y = 2$. Giao điểm là $(2; 2)$."
      },
      {
        "id": "ai-ot1-q11",
        "badge": "Luyện thêm 11 (VD) - Tìm tham số m để hai đường thẳng cắt nhau",
        "isAiGenerated": true,
        "source": "Đề thi tuyển sinh vào lớp 10 THPT",
        "question": "Tìm điều kiện của $m$ để hai đường thẳng $y = (m - 2)x + 1$ và $y = 2x - 3$ cắt nhau.",
        "options": [
          "$m \\ne 4$ và $m \\ne 2$",
          "$m \\ne 4$",
          "$m \\ne 2$",
          "$m = 4$"
        ],
        "correctIndex": 0,
        "explanation": "Để là đường thẳng bậc nhất thì $m - 2 \\ne 0 \\Leftrightarrow m \\ne 2$. Để cắt nhau thì $m - 2 \\ne 2 \\Leftrightarrow m \\ne 4$."
      },
      {
        "id": "ai-ot1-q12",
        "badge": "Luyện thêm 12 (VD) - Toán thực tế chu vi diện tích",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3 (Trang 18)",
        "question": "Một thửa ruộng hình chữ nhật có chu vi $80\\text{ m}$. Nếu tăng chiều dài thêm $5\\text{ m}$ và giảm chiều rộng $3\\text{ m}$ thì diện tích giảm $15\\text{ m}^2$. Diện tích ban đầu của thửa ruộng là:",
        "options": [
          "$375\\text{ m}^2$",
          "$400\\text{ m}^2$",
          "$360\\text{ m}^2$",
          "$384\\text{ m}^2$"
        ],
        "correctIndex": 0,
        "explanation": "Nửa chu vi $x + y = 40$. $(x + 5)(y - 3) = xy - 15 \\Leftrightarrow -3x + 5y = 0$. Giải hệ được $x = 25\\text{ m}, y = 15\\text{ m}$. Diện tích $S = 25 \\cdot 15 = 375\\text{ m}^2$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-ot1-tf1",
        "badge": "Luyện thêm Đ/S 1 (NB) - Phương trình bậc nhất hai ẩn",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 1",
        "prompt": "Cho phương trình $5x - 2y = 10$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Phương trình có các hệ số là $a = 5, b = -2, c = 10$.",
            "correctAnswer": true,
            "explanation": "Đúng theo dạng chuẩn $ax + by = c$."
          },
          {
            "id": "b",
            "text": "Cặp số $(2; 0)$ là một nghiệm của phương trình.",
            "correctAnswer": true,
            "explanation": "$5(2) - 2(0) = 10$ (thỏa mãn)."
          },
          {
            "id": "c",
            "text": "Cặp số $(0; 5)$ là một nghiệm của phương trình.",
            "correctAnswer": false,
            "explanation": "Tại $x = 0$: $-2y = 10 \\Rightarrow y = -5 \\ne 5$."
          },
          {
            "id": "d",
            "text": "Đường thẳng biểu diễn tập nghiệm cắt trục hoành tại điểm $(2; 0)$.",
            "correctAnswer": true,
            "explanation": "Giao điểm với trục hoành là điểm có $y = 0$, tọa độ $(2; 0)$."
          }
        ]
      },
      {
        "id": "ai-ot1-tf2",
        "badge": "Luyện thêm Đ/S 2 (TH) - Giải hệ bằng phương pháp cộng",
        "source": "SGK Toán 9 Cánh Diều Bài 2",
        "prompt": "Cho hệ phương trình: $\\begin{cases} 3x + 2y = 7 \\\\ 2x - y = 0 \\end{cases}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Nhân phương trình thứ hai với 2 ta được $4x - 2y = 0$.",
            "correctAnswer": true,
            "explanation": "$2(2x - y) = 2(0) \\Leftrightarrow 4x - 2y = 0$."
          },
          {
            "id": "b",
            "text": "Cộng hai phương trình vế theo vế được $7x = 7$.",
            "correctAnswer": true,
            "explanation": "$(3x + 4x) + (2y - 2y) = 7 + 0 \\Leftrightarrow 7x = 7$."
          },
          {
            "id": "c",
            "text": "Nghiệm của hệ phương trình là $(x; y) = (1; 2)$.",
            "correctAnswer": true,
            "explanation": "$7x = 7 \\Rightarrow x = 1 \\Rightarrow y = 2(1) = 2$."
          },
          {
            "id": "d",
            "text": "Giá trị của biểu thức $x - y$ bằng $1$.",
            "correctAnswer": false,
            "explanation": "$x - y = 1 - 2 = -1 \\ne 1$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-ot1-sa1",
        "badge": "Luyện thêm TLN 1 (TH) - Tổng nghiệm hệ phương trình",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2",
        "prompt": "Cho hệ phương trình $\\begin{cases} 4x - y = 7 \\\\ 2x + 3y = 7 \\end{cases}$. Tính giá trị tổng $x + y$.",
        "correctAnswer": "3",
        "acceptableAnswers": ["3", "x+y=3"],
        "explanation": "Từ PT 1: $y = 4x - 7$. Thế vào PT 2: $2x + 3(4x - 7) = 7 \\Leftrightarrow 14x = 28 \\Leftrightarrow x = 2 \\Rightarrow y = 1$. Giá trị $x + y = 3$."
      },
      {
        "id": "ai-ot1-sa2",
        "badge": "Luyện thêm TLN 2 (VD) - Toán thực tế dòng nước",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 3",
        "prompt": "Một ca nô xuôi dòng khúc sông dài $36\\text{ km}$ hết $1,5\\text{ giờ}$. Biết vận tốc dòng nước là $3\\text{ km/h}$. Tính vận tốc thực của ca nô (theo đơn vị km/h).",
        "correctAnswer": "21",
        "acceptableAnswers": ["21", "21 km/h", "21km/h"],
        "explanation": "Vận tốc xuôi: $36 : 1,5 = 24\\text{ (km/h)}$. Vận tốc thực: $24 - 3 = 21\\text{ (km/h)}$."
      }
    ]
  },
  "t9-b5-bat-dang-thuc": {
    "quizQuestions": [
      {
        "id": "ai-9.5.1",
        "badge": "Luyện thêm 1 - Viết bất đẳng thức từ thực tế",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.1 (Trang 28)",
        "question": "Khẳng định 'Nhiệt độ $t$ của cơ thể không vượt quá $37,5^\\circ\\text{C}$' được viết dưới dạng bất đẳng thức là:",
        "options": [
          "$t \\le 37,5$",
          "$t < 37,5$",
          "$t \\ge 37,5$",
          "$t > 37,5$"
        ],
        "correctIndex": 0,
        "explanation": "'Không vượt quá' có nghĩa là nhỏ hơn hoặc bằng, do đó ta viết là $t \\le 37,5$."
      },
      {
        "id": "ai-9.5.2",
        "badge": "Luyện thêm 2 - Cộng với số âm",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 26)",
        "question": "Cho $x > y$. Bất đẳng thức nào sau đây đúng khi trừ cả hai vế cho $4$?",
        "options": [
          "$x - 4 > y - 4$",
          "$x - 4 < y - 4$",
          "$x - 4 = y - 4$",
          "$x - 4 \\le y - 4$"
        ],
        "correctIndex": 0,
        "explanation": "Khi trừ cả hai vế cho cùng một số (hoặc cộng với $-4$), chiều bất đẳng thức giữ nguyên: $x - 4 > y - 4$."
      },
      {
        "id": "ai-9.5.3",
        "badge": "Luyện thêm 3 - Nhân với số dương",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 29)",
        "question": "Cho $a \\le b$. Bất đẳng thức nào sau đây đúng khi nhân cả hai vế với số dương $5$?",
        "options": [
          "$5a \\le 5b$",
          "$5a \\ge 5b$",
          "$5a < 5b$",
          "$5a > 5b$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $5 > 0$ nên khi nhân cả hai vế với $5$, chiều bất đẳng thức không đổi: $5a \\le 5b$."
      },
      {
        "id": "ai-9.5.4",
        "badge": "Luyện thêm 4 - Nhân với số âm đổi chiều",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.3 (Trang 29)",
        "question": "Cho $m \\ge n$. Khi nhân cả hai vế với số âm $-3$, ta thu được bất đẳng thức nào?",
        "options": [
          "$-3m \\le -3n$",
          "$-3m \\ge -3n$",
          "$-3m < -3n$",
          "$-3m > -3n$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $-3 < 0$ nên khi nhân cả hai vế với $-3$, ta phải đổi chiều: $-3m \\le -3n$."
      },
      {
        "id": "ai-9.5.5",
        "badge": "Luyện thêm 5 - Tính chất bắc cầu cơ bản",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 3 (Trang 26)",
        "question": "Cho $a < b$ và $b < 5$. Theo tính chất bắc cầu, kết luận nào sau đây đúng?",
        "options": [
          "$a < 5$",
          "$a > 5$",
          "$a = 5$",
          "$a \\ge 5$"
        ],
        "correctIndex": 0,
        "explanation": "Theo tính chất bắc cầu: $a < b$ và $b < 5 \\Rightarrow a < 5$."
      },
      {
        "id": "ai-9.5.6",
        "badge": "Luyện thêm 6 - Suy luận từ phép trừ",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 29)",
        "question": "Biết rằng $m - 7 > n - 7$. Khi so sánh $m$ và $n$, kết luận nào đúng?",
        "options": [
          "$m > n$",
          "$m < n$",
          "$m = n$",
          "$m \\le n$"
        ],
        "correctIndex": 0,
        "explanation": "Cộng cả hai vế với $7$: $(m - 7) + 7 > (n - 7) + 7 \\Leftrightarrow m > n$."
      },
      {
        "id": "ai-9.5.7",
        "badge": "Luyện thêm 7 - Suy luận từ phép nhân số âm",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.3 (Trang 29)",
        "question": "Biết $-3x < -3y$. Khi so sánh $x$ và $y$, kết luận nào sau đây đúng?",
        "options": [
          "$x > y$",
          "$x < y$",
          "$x = y$",
          "$x \\le y$"
        ],
        "correctIndex": 0,
        "explanation": "Chia cả hai vế cho số âm $-3$, ta phải đổi chiều bất đẳng thức: $x > y$."
      },
      {
        "id": "ai-9.5.8",
        "badge": "Luyện thêm 8 - Phối hợp nhân số dương và cộng",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Cánh Diều Bài 3 (Trang 26)",
        "question": "Cho $a < b$. Hãy so sánh hai biểu thức $3a - 5$ và $3b - 5$:",
        "options": [
          "$3a - 5 < 3b - 5$",
          "$3a - 5 > 3b - 5$",
          "$3a - 5 = 3b - 5$",
          "$3a - 5 \\ge 3b - 5$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $3 > 0$ nên $a < b \\Rightarrow 3a < 3b$. Trừ 5 ở cả hai vế: $3a - 5 < 3b - 5$."
      },
      {
        "id": "ai-9.5.9",
        "badge": "Luyện thêm 9 - Phối hợp nhân số âm và cộng",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 29)",
        "question": "Cho $x > y$. Hãy so sánh hai biểu thức $-2x + 7$ và $-2y + 7$:",
        "options": [
          "$-2x + 7 < -2y + 7$",
          "$-2x + 7 > -2y + 7$",
          "$-2x + 7 = -2y + 7$",
          "$-2x + 7 \\ge -2y + 7$"
        ],
        "correctIndex": 0,
        "explanation": "Vì $-2 < 0$ nên $x > y \\Rightarrow -2x < -2y$. Cộng 7 ở cả hai vế: $-2x + 7 < -2y + 7$."
      },
      {
        "id": "ai-9.5.10",
        "badge": "Luyện thêm 10 - Suy luận ngược hai bước",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.4 (Trang 29)",
        "question": "Biết $2a + 3 \\le 2b + 3$. Kết luận nào sau đây đúng khi so sánh $a$ và $b$?",
        "options": [
          "$a \\le b$",
          "$a \\ge b$",
          "$a < b$",
          "$a > b$"
        ],
        "correctIndex": 0,
        "explanation": "Trừ 3 ở cả hai vế: $2a \\le 2b$. Chia cả hai vế cho $2 > 0$: $a \\le b$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-9.5.1",
        "badge": "Luyện thêm Đ/S 1 - Tính chất phép cộng",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.2 (Trang 28)",
        "prompt": "Cho $x > y$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$x + 10 > y + 10$.",
            "correctAnswer": true,
            "explanation": "Cộng 10 vào hai vế giữ nguyên chiều bất đẳng thức."
          },
          {
            "id": "b",
            "text": "$x - 8 > y - 8$.",
            "correctAnswer": true,
            "explanation": "Trừ 8 vào hai vế giữ nguyên chiều bất đẳng thức."
          },
          {
            "id": "c",
            "text": "Nếu $x + 5 > y + 5$ thì $x > y$.",
            "correctAnswer": true,
            "explanation": "Trừ 5 ở cả hai vế ta được $x > y$."
          },
          {
            "id": "d",
            "text": "$x - 2 < y - 2$.",
            "correctAnswer": false,
            "explanation": "Trừ 2 thì chiều giữ nguyên $x - 2 > y - 2$, viết ngược lại là sai."
          }
        ]
      },
      {
        "id": "ai-tf-9.5.2",
        "badge": "Luyện thêm Đ/S 2 - Tính chất phép nhân",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 26)",
        "prompt": "Cho $a < b$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$4a < 4b$.",
            "correctAnswer": true,
            "explanation": "Nhân với $4 > 0$ giữ nguyên chiều."
          },
          {
            "id": "b",
            "text": "$-5a > -5b$.",
            "correctAnswer": true,
            "explanation": "Nhân với $-5 < 0$ đổi chiều bất đẳng thức."
          },
          {
            "id": "c",
            "text": "$-a < -b$.",
            "correctAnswer": false,
            "explanation": "Nhân với $-1$ phải đổi chiều: $-a > -b$."
          },
          {
            "id": "d",
            "text": "$\frac{a}{2} < \frac{b}{2}$.",
            "correctAnswer": true,
            "explanation": "Chia cho số dương 2 giữ nguyên chiều."
          }
        ]
      },
      {
        "id": "ai-tf-9.5.3",
        "badge": "Luyện thêm Đ/S 3 - Phối hợp nhân và cộng",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 29)",
        "prompt": "Cho $u \\le v$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "$2u + 5 \\le 2v + 5$.",
            "correctAnswer": true,
            "explanation": "Nhân $2 > 0$ rồi cộng 5 giữ nguyên chiều $\\le$."
          },
          {
            "id": "b",
            "text": "$-3u + 1 \\ge -3v + 1$.",
            "correctAnswer": true,
            "explanation": "Nhân $-3 < 0$ đổi chiều thành $\\ge$, rồi cộng 1."
          },
          {
            "id": "c",
            "text": "$5u - 2 \\ge 5v - 2$.",
            "correctAnswer": false,
            "explanation": "Phải là $5u - 2 \\le 5v - 2$."
          },
          {
            "id": "d",
            "text": "$-u - 4 \\ge -v - 4$.",
            "correctAnswer": true,
            "explanation": "Nhân $-1$ đổi chiều thành $\\ge$, rồi trừ 4."
          }
        ]
      },
      {
        "id": "ai-tf-9.5.4",
        "badge": "Luyện thêm Đ/S 4 - Ý nghĩa thực tế và bắc cầu",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.1 (Trang 28)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khẳng định 'Tuổi $T$ của học sinh ít nhất là 15 tuổi' được viết là $T \\ge 15$.",
            "correctAnswer": true,
            "explanation": "'Ít nhất' tương ứng với $\\ge$."
          },
          {
            "id": "b",
            "text": "Khẳng định 'Số tiền $S$ không quá 100 nghìn đồng' được viết là $S \\le 100$.",
            "correctAnswer": true,
            "explanation": "'Không quá' tương ứng với $\\le$."
          },
          {
            "id": "c",
            "text": "Nếu $x > y$ và $y > 4$ thì $x > 4$.",
            "correctAnswer": true,
            "explanation": "Theo tính chất bắc cầu."
          },
          {
            "id": "d",
            "text": "Nếu $m < n$ và $n < k$ thì $m > k$.",
            "correctAnswer": false,
            "explanation": "Theo tính chất bắc cầu thì $m < k$ (không phải $m > k$)."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-9.5.1",
        "badge": "Luyện thêm TLN 1 - Điền dấu sau khi cộng",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.2 (Trang 28)",
        "prompt": "Cho $x > y$. Giữa hai biểu thức $x + 12$ và $y + 12$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": ">",
        "acceptableAnswers": [">", "dấu >", "lon hon"],
        "explanation": "Vì $x > y$ nên khi cộng cùng số 12 ta được $x + 12 > y + 12$."
      },
      {
        "id": "ai-sa-9.5.2",
        "badge": "Luyện thêm TLN 2 - Điền dấu sau khi nhân số âm",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 26)",
        "prompt": "Cho $a < b$. Giữa hai biểu thức $-4a$ và $-4b$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": ">",
        "acceptableAnswers": [">", "dấu >", "lon hon"],
        "explanation": "Nhân cả hai vế với số âm $-4$ thì đổi chiều: $-4a > -4b$."
      },
      {
        "id": "ai-sa-9.5.3",
        "badge": "Luyện thêm TLN 3 - So sánh hai số ban đầu",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 29)",
        "prompt": "Biết $3m + 7 > 3n + 7$. Giữa hai số $m$ và $n$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": ">",
        "acceptableAnswers": [">", "dấu >", "lon hon"],
        "explanation": "Trừ 7 ở hai vế: $3m > 3n$. Chia cho $3 > 0$: $m > n$."
      },
      {
        "id": "ai-sa-9.5.4",
        "badge": "Luyện thêm TLN 4 - Điền dấu sau khi chia số âm",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.4 (Trang 29)",
        "prompt": "Biết $-2x < -2y$. Giữa hai số $x$ và $y$ ta điền dấu nào ($<$ hay $>$)?",
        "correctAnswer": ">",
        "acceptableAnswers": [">", "dấu >", "lon hon"],
        "explanation": "Chia cả hai vế cho số âm $-2$ thì đổi chiều: $x > y$."
      }
    ]
  },
  "t9-b6-bat-phuong-trinh-bac-nhat": {
    "quizQuestions": [
      {
        "id": "ai-9.6.1",
        "badge": "Luyện thêm 1 - Nhận biết dạng bất phương trình bậc nhất một ẩn",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1d (Trang 57)",
        "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
        "options": [
          "$\\frac{2}{5}x + 4 > 0$",
          "$0x - 3 \\le 0$",
          "$2x^2 + 1 > 0$",
          "$\\frac{3}{x} - 5 < 0$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình $\\frac{2}{5}x + 4 > 0$ có dạng $ax + b > 0$ với $a = \\frac{2}{5} \\ne 0$ và $b = 4$, nên là bất phương trình bậc nhất một ẩn."
      },
      {
        "id": "ai-9.6.2",
        "badge": "Luyện thêm 2 - Nhận biết hệ số a âm",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 3r (Trang 57)",
        "question": "Trong bất phương trình bậc nhất một ẩn $-6x - 2 \\le 0$, hệ số $a$ và $b$ lần lượt là:",
        "options": [
          "$a = -6;\\ b = -2$",
          "$a = 6;\\ b = 2$",
          "$a = -6;\\ b = 2$",
          "$a = -2;\\ b = -6$"
        ],
        "correctIndex": 0,
        "explanation": "Hệ số của $x$ là $a = -6$ và hạng tử tự do là $b = -2$."
      },
      {
        "id": "ai-9.6.3",
        "badge": "Luyện thêm 3 - Kiểm tra nghiệm âm",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 2 (Trang 57)",
        "question": "Số $x = -1$ là nghiệm của bất phương trình nào dưới đây?",
        "options": [
          "$-3x + 4 > 5$",
          "$2x - 8 > 0$",
          "$9 - 3x \\le 0$",
          "$x > 1$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = -1$ vào vế trái: $-3(-1) + 4 = 3 + 4 = 7 > 5$ (đúng). Do đó $x = -1$ là nghiệm của $-3x + 4 > 5$."
      },
      {
        "id": "ai-9.6.4",
        "badge": "Luyện thêm 4 - Quy tắc chuyển vế",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4 (Trang 58)",
        "question": "Bất phương trình $3x + 7 > x - 2$ tương đương với bất phương trình nào sau khi chuyển vế?",
        "options": [
          "$3x - x > -2 - 7$",
          "$3x + x > -2 + 7$",
          "$3x - x > 2 - 7$",
          "$3x - x < -2 - 7$"
        ],
        "correctIndex": 0,
        "explanation": "Chuyển $x$ từ vế phải sang vế trái thành $-x$, chuyển $+7$ sang vế phải thành $-7$: $3x - x > -2 - 7$."
      },
      {
        "id": "ai-9.6.5",
        "badge": "Luyện thêm 5 - Quy tắc đổi chiều khi chia số âm",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 4 (Trang 64)",
        "question": "Cho bất phương trình $-2x < 6$. Khẳng định nào sau đây là đúng?",
        "options": [
          "$x > -3$",
          "$x < -3$",
          "$x > 3$",
          "$x < 3$"
        ],
        "correctIndex": 0,
        "explanation": "Chia cả hai vế cho số âm $-2$, ta phải đổi chiều bất phương trình: $x > \\frac{6}{-2} = -3$."
      },
      {
        "id": "ai-9.6.6",
        "badge": "Luyện thêm 6 - Nhận biết bất phương trình có ẩn ở mẫu",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 14 (Trang 65)",
        "question": "Bất phương trình $\\frac{1}{2x + 1} > 0$ có phải là bất phương trình bậc nhất một ẩn hay không?",
        "options": [
          "Không, vì ẩn $x$ nằm ở mẫu thức",
          "Có, vì có ẩn $x$ bậc 1",
          "Có, vì có dạng $ax + b > 0$",
          "Không, vì hệ số $a = 0$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình có ẩn ở mẫu thức không phải là bất phương trình bậc nhất một ẩn vì không có dạng đa thức $ax + b > 0$."
      },
      {
        "id": "ai-9.6.7",
        "badge": "Luyện thêm 7 - Điều kiện tham số của bất phương trình bậc nhất một ẩn",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1 (Trang 57) & SGK Trang 32",
        "question": "Bất phương trình $(2m - 4)x - 7 \\le 0$ là bất phương trình bậc nhất một ẩn khi và chỉ khi:",
        "options": [
          "$m \\ne 2$",
          "$m = 2$",
          "$m > 2$",
          "$m \\ne 0$"
        ],
        "correctIndex": 0,
        "explanation": "Bất phương trình bậc nhất một ẩn đòi hỏi hệ số của $x$ khác 0: $2m - 4 \\ne 0 \\Leftrightarrow 2m \\ne 4 \\Leftrightarrow m \\ne 2$."
      },
      {
        "id": "ai-9.6.8",
        "badge": "Luyện thêm 8 - Nhận biết tính chất bắc cầu",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1 (Trang 55)",
        "question": "Nếu $a < b$ và $b < c$ thì theo tính chất bắc cầu ta có:",
        "options": [
          "$a < c$",
          "$a > c$",
          "$a = c$",
          "$b > c$"
        ],
        "correctIndex": 0,
        "explanation": "Theo tính chất bắc cầu của bất đẳng thức: nếu $a < b$ và $b < c$ thì $a < c$."
      },
      {
        "id": "ai-9.6.9",
        "badge": "Luyện thêm 9 - Giải bất phương trình bậc nhất một ẩn",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 3q (Trang 57)",
        "question": "Nghiệm của bất phương trình $5x - 3 < 0$ là:",
        "options": [
          "$x < 0,6$",
          "$x > 0,6$",
          "$x < -0,6$",
          "$x > -0,6$"
        ],
        "correctIndex": 0,
        "explanation": "$5x - 3 < 0 \\Leftrightarrow 5x < 3 \\Leftrightarrow x < \\frac{3}{5} = 0,6$."
      },
      {
        "id": "ai-9.6.10",
        "badge": "Luyện thêm 10 - Giải bất phương trình hệ số âm chuyển vế",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4x (Trang 58)",
        "question": "Tập nghiệm của bất phương trình $-8x + 1 \\ge x - 3$ là:",
        "options": [
          "$x \\le \\frac{4}{9}$",
          "$x \\ge \\frac{4}{9}$",
          "$x \\le -\\frac{4}{9}$",
          "$x \\ge -\\frac{4}{9}$"
        ],
        "correctIndex": 0,
        "explanation": "$-8x - x \\ge -3 - 1 \\Leftrightarrow -9x \\ge -4 \\Leftrightarrow x \\le \\frac{-4}{-9} = \\frac{4}{9}$ (chia cho $-9 < 0$ đổi chiều)."
      },
      {
        "id": "ai-9.6.11",
        "badge": "Luyện thêm 11 - Giải bất phương trình có ngoặc",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 5a (Trang 58)",
        "question": "Nghiệm của bất phương trình $3x - 5 > 2(x - 1) + x$ là:",
        "options": [
          "Bất phương trình vô nghiệm",
          "Mọi số thực $x$",
          "$x > 3$",
          "$x < -3$"
        ],
        "correctIndex": 0,
        "explanation": "Khai triển: $3x - 5 > 2x - 2 + x \\Leftrightarrow 3x - 5 > 3x - 2 \\Leftrightarrow 3x - 3x > -2 + 5 \\Leftrightarrow 0x > 3$ (vô lý). Vậy bất phương trình vô nghiệm."
      },
      {
        "id": "ai-9.6.12",
        "badge": "Luyện thêm 12 - Giải bất phương trình phân thức mẫu số",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 6a (Trang 58)",
        "question": "Nghiệm của bất phương trình $\\frac{x - 4}{3} < 2$ là:",
        "options": [
          "$x < 10$",
          "$x > 10$",
          "$x < 2$",
          "$x < 6$"
        ],
        "correctIndex": 0,
        "explanation": "Nhân hai vế với $3 > 0$: $x - 4 < 6 \\Leftrightarrow x < 6 + 4 = 10$."
      },
      {
        "id": "ai-9.6.13",
        "badge": "Luyện thêm 13 - Nghiệm nguyên dương nhỏ nhất",
        "isAiGenerated": true,
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.8 (Trang 35)",
        "question": "Số nguyên dương $x$ nhỏ nhất thỏa mãn bất phương trình $2x - 7 > 0$ là:",
        "options": [
          "$x = 4$",
          "$x = 3$",
          "$x = 5$",
          "$x = 3,5$"
        ],
        "correctIndex": 0,
        "explanation": "$2x - 7 > 0 \\Leftrightarrow 2x > 7 \\Leftrightarrow x > 3,5$. Số nguyên dương nhỏ nhất lớn hơn $3,5$ là $x = 4$."
      },
      {
        "id": "ai-9.6.14",
        "badge": "Luyện thêm 14 - Đếm số nghiệm nguyên trong một khoảng",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4 (Trang 58)",
        "question": "Có bao nhiêu số nguyên $x$ thỏa mãn đồng thời hai điều kiện: $x \\ge -2$ và $2x - 5 \\le 3$?",
        "options": [
          "7 số",
          "6 số",
          "5 số",
          "8 số"
        ],
        "correctIndex": 0,
        "explanation": "$2x - 5 \\le 3 \\Leftrightarrow 2x \\le 8 \\Leftrightarrow x \\le 4$. Kết hợp với $x \\ge -2$ ta được $-2 \\le x \\le 4$. Các số nguyên thỏa mãn là $\\{-2; -1; 0; 1; 2; 3; 4\\}$, gồm 7 số."
      },
      {
        "id": "ai-9.6.15",
        "badge": "Luyện thêm 15 - Vận dụng: Số tờ tiền tối đa",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 8 (Trang 59)",
        "question": "Một người có số tiền không quá $70\\,000$ đồng gồm 15 tờ giấy bạc với hai loại mệnh giá: $2\\,000$ đồng và $5\\,000$ đồng. Hỏi người đó có thể có nhiều nhất bao nhiêu tờ giấy bạc loại $5\\,000$ đồng?",
        "options": [
          "13 tờ",
          "14 tờ",
          "12 tờ",
          "15 tờ"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số tờ loại 5 000 đồng là $y$ ($y \\in \\mathbb{N}^*, y \\le 15$). Khi đó số tờ loại 2 000 đồng là $15 - y$. Tổng số tiền là $2000(15 - y) + 5000y = 30000 + 3000y$. Do số tiền không quá 70 000 đồng nên: $30000 + 3000y \\le 70000 \\Leftrightarrow 3000y \\le 40000 \\Leftrightarrow y \\le \\frac{40}{3} \\approx 13,33$. Vì $y$ nguyên nên người đó có nhiều nhất 13 tờ loại 5 000 đồng."
      },
      {
        "id": "ai-9.6.16",
        "badge": "Luyện thêm 16 - Vận dụng: Đi bộ và vận tốc",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 9 (Trang 59)",
        "question": "Một người đi bộ một quãng đường dài 18 km trong khoảng thời gian không nhiều hơn 4 giờ. Lúc đầu đi với vận tốc 5 km/h, đoạn đường về sau đi với vận tốc 4 km/h. Độ dài đoạn đường người đó đi với vận tốc 5 km/h phải thỏa mãn điều kiện nào?",
        "options": [
          "Ít nhất 10 km (từ 10 km đến 18 km)",
          "Nhiều nhất 10 km",
          "Ít nhất 8 km",
          "Từ 5 km đến 9 km"
        ],
        "correctIndex": 0,
        "explanation": "Gọi quãng đường đi với vận tốc 5 km/h là $x$ (km, $0 < x \\le 18$). Quãng đường còn lại là $18 - x$ (km). Thời gian đi là $\\frac{x}{5} + \\frac{18 - x}{4}$ (giờ). Do thời gian không nhiều hơn 4 giờ: $\\frac{x}{5} + \\frac{18 - x}{4} \\le 4 \\Leftrightarrow 4x + 5(18 - x) \\le 80 \\Leftrightarrow 4x + 90 - 5x \\le 80 \\Leftrightarrow -x \\le -10 \\Leftrightarrow x \\ge 10$. Vậy độ dài đoạn đường đó ít nhất là 10 km."
      },
      {
        "id": "ai-9.6.17",
        "badge": "Luyện thêm 17 - Vận dụng: Điểm thi 4 kỹ năng tiếng Anh",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 10 (Trang 59)",
        "question": "Một bài thi Tiếng Anh gồm 4 kĩ năng: nghe, nói, đọc và viết. Kết quả là điểm trung bình của 4 kĩ năng. Bạn Hà đạt điểm nghe 6,5; đọc 6,5; viết 5,5. Hà cần đạt ít nhất bao nhiêu điểm kỹ năng nói để kết quả bài thi đạt từ 6,25 trở lên?",
        "options": [
          "6,5 điểm",
          "6,0 điểm",
          "7,0 điểm",
          "6,25 điểm"
        ],
        "correctIndex": 0,
        "explanation": "Gọi điểm nói là $x$ ($0 \\le x \\le 10$). Điểm trung bình là: $\\frac{6,5 + 6,5 + 5,5 + x}{4} = \\frac{18,5 + x}{4}$. Yêu cầu điểm TB $\\ge 6,25 \\Leftrightarrow \\frac{18,5 + x}{4} \\ge 6,25 \\Leftrightarrow 18,5 + x \\ge 25 \\Leftrightarrow x \\ge 6,5$ điểm."
      },
      {
        "id": "ai-9.6.18",
        "badge": "Luyện thêm 18 - Vận dụng: Lãi suất tiền gửi tiết kiệm",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 14 (Trang 59)",
        "question": "Ngân hàng áp dụng lãi suất gửi tiết kiệm kì hạn 12 tháng là 7,4%/năm. Bà Mai cần số tiền lãi hằng năm ít nhất là 60 triệu đồng để chi tiêu. Hỏi bà Mai cần gửi tiết kiệm ít nhất bao nhiêu tiền (làm tròn đến triệu đồng)?",
        "options": [
          "811 triệu đồng",
          "810 triệu đồng",
          "800 triệu đồng",
          "815 triệu đồng"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số tiền gửi tiết kiệm là $A$ (triệu đồng, $A > 0$). Tiền lãi hàng năm là $A \\cdot 7,4\\% = 0,074A$. Để có lãi ít nhất 60 triệu: $0,074A \\ge 60 \\Leftrightarrow A \\ge \\frac{60}{0,074} \\approx 810,81$ triệu đồng. Làm tròn đến triệu đồng thì bà Mai cần gửi ít nhất 811 triệu đồng."
      },
      {
        "id": "ai-9.6.19",
        "badge": "Luyện thêm 19 - Vận dụng: Lập đội tuyển bóng rổ",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 20 (Trang 60)",
        "question": "Thầy thể dục tuyển chọn đội tuyển bóng rổ: mỗi bạn ném 15 quả bóng vào rổ, bóng vào rổ được +2 điểm, ném ra ngoài bị trừ 1 điểm. Bạn nào đạt từ 15 điểm trở lên sẽ được chọn. Hỏi học sinh phải ném vào rổ ít nhất bao nhiêu quả để được chọn?",
        "options": [
          "10 quả",
          "9 quả",
          "11 quả",
          "8 quả"
        ],
        "correctIndex": 0,
        "explanation": "Gọi số quả ném vào rổ là $x$ ($x \\in \\mathbb{N}, 0 \\le x \\le 15$). Số quả ném ra ngoài là $15 - x$. Tổng điểm: $2x - (15 - x) = 3x - 15$. Để đạt từ 15 điểm trở lên: $3x - 15 \\ge 15 \\Leftrightarrow 3x \\ge 30 \\Leftrightarrow x \\ge 10$ quả."
      },
      {
        "id": "ai-9.6.20",
        "badge": "Luyện thêm 20 - Vận dụng: Doanh số bán hàng đạt mục tiêu lợi nhuận",
        "isAiGenerated": true,
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 25 (Trang 61)",
        "question": "Chi phí sản xuất áo sơ mi của một doanh nghiệp là 410 triệu đồng/tháng. Giá bán mỗi chiếc áo là 350 nghìn đồng (0,35 triệu đồng). Trung bình mỗi tháng doanh nghiệp phải bán được ít nhất bao nhiêu chiếc áo sơ mi để thu được lợi nhuận ít nhất 1,38 tỉ đồng (1 380 triệu đồng) sau 1 năm?",
        "options": [
          "1 500 chiếc",
          "1 200 chiếc",
          "1 600 chiếc",
          "1 400 chiếc"
        ],
        "correctIndex": 0,
        "explanation": "Lợi nhuận mỗi tháng cần đạt ít nhất là: $\\frac{1380}{12} = 115$ triệu đồng. Gọi số áo bán ra mỗi tháng là $x$ ($x \\in \\mathbb{N}^*$). Doanh thu trừ chi phí là $0,35x - 410$ (triệu đồng). Ta có bất phương trình: $0,35x - 410 \\ge 115 \\Leftrightarrow 0,35x \\ge 525 \\Leftrightarrow x \\ge \\frac{525}{0,35} = 1500$ chiếc áo."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-9.6.1",
        "badge": "Luyện thêm Đ/S 1 - Nhận biết bất phương trình bậc nhất một ẩn",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 1 (Trang 57)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về bất phương trình bậc nhất một ẩn:",
        "subItems": [
          {
            "id": "a",
            "text": "Bất phương trình $-5x + 10 < 0$ có hệ số $a = -5$ và $b = 10$.",
            "correctAnswer": true,
            "explanation": "Hệ số $a$ đứng trước $x$ là $-5$, $b$ tự do là $10$."
          },
          {
            "id": "b",
            "text": "Bất phương trình $0x - 4 > 0$ là bất phương trình bậc nhất một ẩn.",
            "correctAnswer": false,
            "explanation": "Hệ số $a = 0$ nên không phải bất phương trình bậc nhất một ẩn."
          },
          {
            "id": "c",
            "text": "Bất phương trình $3x - 1 \\ge 0$ có một nghiệm là $x = 1$.",
            "correctAnswer": true,
            "explanation": "Thay $x = 1$: $3(1) - 1 = 2 \\ge 0$ (đúng)."
          },
          {
            "id": "d",
            "text": "Phương trình và bất phương trình có tập nghiệm giống nhau.",
            "correctAnswer": false,
            "explanation": "Bất phương trình thường có vô số nghiệm thỏa mãn bất đẳng thức, trong khi phương trình bậc nhất một ẩn chỉ có một nghiệm duy nhất."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.2",
        "badge": "Luyện thêm Đ/S 2 - Kiểm tra nghiệm của bất phương trình",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 2 (Trang 57)",
        "prompt": "Cho bất phương trình $4 - 2x > 0$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Số $x = 1$ là một nghiệm của bất phương trình.",
            "correctAnswer": true,
            "explanation": "Thay $x = 1$: $4 - 2(1) = 2 > 0$ (đúng)."
          },
          {
            "id": "b",
            "text": "Số $x = 2$ là một nghiệm của bất phương trình.",
            "correctAnswer": false,
            "explanation": "Thay $x = 2$: $4 - 2(2) = 0 > 0$ (sai vì không có dấu bằng)."
          },
          {
            "id": "c",
            "text": "Số $x = 0$ là một nghiệm của bất phương trình.",
            "correctAnswer": true,
            "explanation": "Thay $x = 0$: $4 - 0 = 4 > 0$ (đúng)."
          },
          {
            "id": "d",
            "text": "Số $x = -3$ là một nghiệm của bất phương trình.",
            "correctAnswer": true,
            "explanation": "Thay $x = -3$: $4 - 2(-3) = 10 > 0$ (đúng)."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.3",
        "badge": "Luyện thêm Đ/S 3 - Phép biến đổi tương đương",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 6 (Trang 64)",
        "prompt": "Xét tính đúng/sai của các phép biến đổi bất phương trình sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Cộng cùng số $-3$ vào hai vế của $x + 3 > 5$ ta được $x > 2$.",
            "correctAnswer": true,
            "explanation": "$x + 3 - 3 > 5 - 3 \\Leftrightarrow x > 2$."
          },
          {
            "id": "b",
            "text": "Nhân hai vế của $-x < 4$ với $-1$ ta được $x < -4$.",
            "correctAnswer": false,
            "explanation": "Nhân với số âm $-1$ phải đổi chiều: $x > -4$."
          },
          {
            "id": "c",
            "text": "Nhân hai vế của $\\frac{x}{3} \\ge 2$ với $3$ ta được $x \\ge 6$.",
            "correctAnswer": true,
            "explanation": "Vì $3 > 0$ nên giữ nguyên chiều: $x \\ge 6$."
          },
          {
            "id": "d",
            "text": "Chia hai vế của $-5x \\ge -15$ cho $-5$ ta được $x \\le 3$.",
            "correctAnswer": true,
            "explanation": "Chia cho số âm $-5$ đổi chiều $\\ge$ thành $\\le$: $x \\le 3$."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.4",
        "badge": "Luyện thêm Đ/S 4 - Nhận biết khái niệm nghiệm và tập nghiệm",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.5 (Trang 32)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau về nghiệm của bất phương trình:",
        "subItems": [
          {
            "id": "a",
            "text": "Tập nghiệm của bất phương trình là tập hợp tất cả các nghiệm của bất phương trình đó.",
            "correctAnswer": true,
            "explanation": "Đúng theo định nghĩa tập nghiệm."
          },
          {
            "id": "b",
            "text": "Giải một bất phương trình là tìm tập hợp tất cả các nghiệm của bất phương trình đó.",
            "correctAnswer": true,
            "explanation": "Đúng theo định nghĩa giải bất phương trình."
          },
          {
            "id": "c",
            "text": "Bất phương trình $2x < 6$ có tập hợp nghiệm gồm tất cả các số thực $x < 3$.",
            "correctAnswer": true,
            "explanation": "Chia cả hai vế cho $2 > 0$ giữ nguyên chiều: $x < 3$."
          },
          {
            "id": "d",
            "text": "Bất phương trình $x + 1 > x + 2$ có một nghiệm là $x = 0$.",
            "correctAnswer": false,
            "explanation": "Thay $x = 0$ ta được $0 + 1 > 0 + 2 \\Leftrightarrow 1 > 2$ (vô lý). BPT này thực chất vô nghiệm."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.5",
        "badge": "Luyện thêm Đ/S 5 - Giải bất phương trình chứa tích đa thức",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 5f (Trang 58)",
        "prompt": "Cho bất phương trình: $(x + 2)^2 - (x - 2)^2 > 8x - 2$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Vế trái $(x + 2)^2 - (x - 2)^2$ khai triển và thu gọn được $8x$.",
            "correctAnswer": true,
            "explanation": "$(x^2 + 4x + 4) - (x^2 - 4x + 4) = 8x$."
          },
          {
            "id": "b",
            "text": "Bất phương trình đã cho tương đương với $8x > 8x - 2$.",
            "correctAnswer": true,
            "explanation": "Thay vế trái bằng $8x$ được $8x > 8x - 2$."
          },
          {
            "id": "c",
            "text": "Chuyển vế ta được $0x > -2$, đây là khẳng định luôn đúng với mọi số thực $x$.",
            "correctAnswer": true,
            "explanation": "$8x - 8x > -2 \\Leftrightarrow 0 > -2$ (luôn đúng)."
          },
          {
            "id": "d",
            "text": "Bất phương trình đã cho vô nghiệm.",
            "correctAnswer": false,
            "explanation": "Vì $0 > -2$ luôn đúng nên bất phương trình nghiệm đúng với mọi số thực $x$ (tập nghiệm $S = \\mathbb{R}$)."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.6",
        "badge": "Luyện thêm Đ/S 6 - Bất phương trình chứa phân thức quy đồng",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 6l (Trang 58)",
        "prompt": "Cho bất phương trình: $\\frac{2x - 3}{3} < \\frac{x - 2}{5}$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Nhân hai vế với mẫu chung dương là 15 ta được: $5(2x - 3) < 3(x - 2)$.",
            "correctAnswer": true,
            "explanation": "Quy đồng và khử mẫu dương 15 giữ nguyên chiều."
          },
          {
            "id": "b",
            "text": "Khai triển vế trái được $10x - 15$ và vế phải được $3x - 6$.",
            "correctAnswer": true,
            "explanation": "$5(2x - 3) = 10x - 15$ và $3(x - 2) = 3x - 6$."
          },
          {
            "id": "c",
            "text": "Chuyển vế ta được: $7x < 9$.",
            "correctAnswer": true,
            "explanation": "$10x - 3x < -6 + 15 \\Leftrightarrow 7x < 9$."
          },
          {
            "id": "d",
            "text": "Nghiệm nguyên dương lớn nhất của bất phương trình là $x = 2$.",
            "correctAnswer": false,
            "explanation": "$x < \\frac{9}{7} \\approx 1,28$. Số nguyên dương thỏa mãn là $x = 1$, không thể bằng 2."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.7",
        "badge": "Luyện thêm Đ/S 7 - So sánh giá trị hai biểu thức",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 7b, c (Trang 58 - 59)",
        "prompt": "Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Để biểu thức $3x - 9$ nhận giá trị âm thì $x < 3$.",
            "correctAnswer": true,
            "explanation": "$3x - 9 < 0 \\Leftrightarrow 3x < 9 \\Leftrightarrow x < 3$."
          },
          {
            "id": "b",
            "text": "Để biểu thức $-5x + 15$ nhận giá trị không dương thì $x \\ge 3$.",
            "correctAnswer": true,
            "explanation": "'Không dương' nghĩa là $\\le 0$: $-5x + 15 \\le 0 \\Leftrightarrow -5x \\le -15 \\Leftrightarrow x \\ge 3$."
          },
          {
            "id": "c",
            "text": "Để giá trị của biểu thức $2x + 1$ lớn hơn giá trị của biểu thức $x + 5$ thì $x > 4$.",
            "correctAnswer": true,
            "explanation": "$2x + 1 > x + 5 \\Leftrightarrow x > 4$."
          },
          {
            "id": "d",
            "text": "Có 3 số nguyên dương $x$ thỏa mãn biểu thức $10 - 3x$ nhận giá trị dương.",
            "correctAnswer": true,
            "explanation": "$10 - 3x > 0 \\Leftrightarrow 3x < 10 \\Leftrightarrow x < 3,33$. Các số nguyên dương là $x \\in \\{1; 2; 3\\}$, có đúng 3 số."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.8",
        "badge": "Luyện thêm Đ/S 8 - Vận dụng: Tiết kiệm mua ô tô tải nhỏ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 29 (Trang 61)",
        "prompt": "Gia đình bác Hoa đã tiết kiệm được 250 triệu đồng. Sau thời điểm đó, mỗi tháng gia đình đều tiết kiệm thêm được 10 triệu đồng. Gia đình bác Hoa dự định mua một chiếc ô tô tải nhỏ với giá tối thiểu là 370 triệu đồng. Gọi $x$ là số tháng tiết kiệm thêm ($x \\in \\mathbb{N}^*$). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Tổng số tiền gia đình bác Hoa có sau $x$ tháng là $250 + 10x$ (triệu đồng).",
            "correctAnswer": true,
            "explanation": "Số tiền ban đầu cộng với số tiền tiết kiệm trong $x$ tháng."
          },
          {
            "id": "b",
            "text": "Bất phương trình diễn đạt điều kiện đủ tiền mua ô tô là $250 + 10x \\ge 370$.",
            "correctAnswer": true,
            "explanation": "Giá tối thiểu là 370 triệu nên số tiền cần $\\ge 370$."
          },
          {
            "id": "c",
            "text": "Giải bất phương trình trên ta được $x \\ge 12$.",
            "correctAnswer": true,
            "explanation": "$10x \\ge 370 - 250 = 120 \\Leftrightarrow x \\ge 12$."
          },
          {
            "id": "d",
            "text": "Sau ít nhất 10 tháng, gia đình bác Hoa đã đủ tiền mua chiếc ô tô tải đó.",
            "correctAnswer": false,
            "explanation": "Cần ít nhất 12 tháng (sau 10 tháng chỉ có $250 + 100 = 350 < 370$ triệu đồng)."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.9",
        "badge": "Luyện thêm Đ/S 9 - Vận dụng: Xuất kho xi măng dự trữ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 27 (Trang 61)",
        "prompt": "Một kho đang chứa 100 tấn xi măng. Mỗi ngày kho đều xuất đi 20 tấn xi măng. Gọi $x$ là số ngày xuất kho ($x \\in \\mathbb{N}^*$). Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khối lượng xi măng còn lại trong kho sau $x$ ngày là $100 - 20x$ (tấn).",
            "correctAnswer": true,
            "explanation": "Mỗi ngày xuất 20 tấn nên sau $x$ ngày xuất $20x$ tấn."
          },
          {
            "id": "b",
            "text": "Để khối lượng còn lại trong kho ít nhất là 10 tấn thì $100 - 20x \\ge 10$.",
            "correctAnswer": true,
            "explanation": "'Ít nhất 10 tấn' biểu diễn bởi dấu $\\ge 10$."
          },
          {
            "id": "c",
            "text": "Giải bất phương trình ta được $x \\le 4,5$.",
            "correctAnswer": true,
            "explanation": "$-20x \\ge -90 \\Leftrightarrow x \\le 4,5$ (chia cho số âm $-20$ đổi chiều)."
          },
          {
            "id": "d",
            "text": "Kho có thể xuất xi măng tối đa trong 5 ngày để lượng tồn kho vẫn còn ít nhất 10 tấn.",
            "correctAnswer": false,
            "explanation": "Vì $x$ nguyên và $x \\le 4,5$ nên tối đa chỉ là 4 ngày (sang ngày thứ 5 thì chỉ còn $100 - 20(5) = 0$ tấn, vi phạm điều kiện)."
          }
        ]
      },
      {
        "id": "ai-tf-9.6.10",
        "badge": "Luyện thêm Đ/S 10 - Vận dụng: Chuyển đổi thang nhiệt độ F và C",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 28 (Trang 61)",
        "prompt": "Công thức đổi từ độ Fahrenheit ($F$) sang độ Celsius ($C$) là: $C = \\frac{5}{9}(F - 32)$. Xét tính đúng/sai của các khẳng định sau:",
        "subItems": [
          {
            "id": "a",
            "text": "Khi $F = 32^\\circ F$ thì $C = 0^\\circ C$.",
            "correctAnswer": true,
            "explanation": "$C = \\frac{5}{9}(32 - 32) = 0^\\circ C$."
          },
          {
            "id": "b",
            "text": "Nếu nhiệt độ một ngày mùa hè ít nhất là $95^\\circ F$ thì bất phương trình là $\\frac{5}{9}(F - 32) \\ge \\frac{5}{9}(95 - 32)$.",
            "correctAnswer": true,
            "explanation": "$F \\ge 95 \\Rightarrow C \\ge \\frac{5}{9}(95 - 32) = 35^\\circ C$."
          },
          {
            "id": "c",
            "text": "Nhiệt độ $95^\\circ F$ tương ứng với $35^\\circ C$.",
            "correctAnswer": true,
            "explanation": "$\\frac{5}{9}(63) = 35^\\circ C$."
          },
          {
            "id": "d",
            "text": "Nếu nhiệt độ ít nhất là $36^\\circ C$ thì nhiệt độ tính theo độ F ít nhất là $100^\\circ F$.",
            "correctAnswer": false,
            "explanation": "$C \\ge 36 \\Leftrightarrow \\frac{5}{9}(F - 32) \\ge 36 \\Leftrightarrow F - 32 \\ge 64,8 \\Leftrightarrow F \\ge 96,8^\\circ F$ (không phải $100^\\circ F$)."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-9.6.1",
        "badge": "Luyện thêm TLN 1 - Xác định hệ số b",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.5 (Trang 32)",
        "prompt": "Trong bất phương trình bậc nhất một ẩn $2x - 15 \\le 0$, hệ số tự do $b$ bằng bao nhiêu?",
        "correctAnswer": "-15",
        "acceptableAnswers": [
          "-15",
          "- 15",
          "b = -15"
        ],
        "explanation": "Bất phương trình có dạng $ax + b \\le 0$ với $a = 2$ và $b = -15$."
      },
      {
        "id": "ai-sa-9.6.2",
        "badge": "Luyện thêm TLN 2 - Điền dấu sau khi đổi chiều",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Câu 6 (Trang 64)",
        "prompt": "Cho $-5x \\ge 25$. Khi chia cả hai vế cho $-5$, giữa $x$ và $-5$ ta điền dấu nào ($\\le$ hay $\\ge$)?",
        "correctAnswer": "<=",
        "acceptableAnswers": [
          "<=",
          "≤",
          "dấu <=",
          "nho hon hoac bang"
        ],
        "explanation": "Chia cho số âm $-5$ phải đổi chiều bất phương trình từ $\\ge$ thành $\\le$: $x \\le -5$."
      },
      {
        "id": "ai-sa-9.6.3",
        "badge": "Luyện thêm TLN 3 - Tìm nghiệm của bất phương trình",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 3 (Trang 57)",
        "prompt": "Cho bất phương trình $3x - 12 > 0$. Nghiệm của bất phương trình là $x > m$. Giá trị của $m$ là bao nhiêu?",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4",
          "m = 4"
        ],
        "explanation": "$3x > 12 \\Leftrightarrow x > 4$, do đó $m = 4$."
      },
      {
        "id": "ai-sa-9.6.4",
        "badge": "Luyện thêm TLN 4 - Kiểm tra nghiệm số",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 2 (Trang 57)",
        "prompt": "Số $x = 5$ có phải là nghiệm của bất phương trình $3x - 14 > 0$ hay không (điền 'có' hoặc 'không')?",
        "correctAnswer": "có",
        "acceptableAnswers": [
          "có",
          "co",
          "Có",
          "Co",
          "yes"
        ],
        "explanation": "Thay $x = 5$: $3(5) - 14 = 1 > 0$ (đúng), vậy $x = 5$ là nghiệm."
      },
      {
        "id": "ai-sa-9.6.5",
        "badge": "Luyện thêm TLN 5 - Tìm số nghiệm nguyên dương",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 2.9 (Trang 35)",
        "prompt": "Bất phương trình $4x - 15 < 0$ có bao nhiêu nghiệm nguyên dương?",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "3 nghiệm",
          "ba"
        ],
        "explanation": "$4x < 15 \\Leftrightarrow x < 3,75$. Các nghiệm nguyên dương là $x \\in \\{1; 2; 3\\}$, có 3 nghiệm."
      },
      {
        "id": "ai-sa-9.6.6",
        "badge": "Luyện thêm TLN 6 - Tìm nghiệm nguyên lớn nhất",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4 (Trang 58)",
        "prompt": "Tìm nghiệm nguyên lớn nhất của bất phương trình $5x - 7 \\le 2x + 5$.",
        "correctAnswer": "4",
        "acceptableAnswers": [
          "4",
          "x = 4"
        ],
        "explanation": "$5x - 2x \\le 5 + 7 \\Leftrightarrow 3x \\le 12 \\Leftrightarrow x \\le 4$. Nghiệm nguyên lớn nhất là 4."
      },
      {
        "id": "ai-sa-9.6.7",
        "badge": "Luyện thêm TLN 7 - Tìm nghiệm nguyên nhỏ nhất",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 4 (Trang 58)",
        "prompt": "Tìm số nguyên $x$ nhỏ nhất thỏa mãn bất phương trình $6 - 2x < 1$.",
        "correctAnswer": "3",
        "acceptableAnswers": [
          "3",
          "x = 3"
        ],
        "explanation": "$-2x < 1 - 6 \\Leftrightarrow -2x < -5 \\Leftrightarrow x > 2,5$. Số nguyên nhỏ nhất lớn hơn 2,5 là 3."
      },
      {
        "id": "ai-sa-9.6.8",
        "badge": "Luyện thêm TLN 8 - Vận dụng: Số câu ném bóng vào rổ tối thiểu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 20 (Trang 60)",
        "prompt": "Ném 15 quả bóng: vào rổ +2 điểm, ra ngoài -1 điểm. Cần đạt từ 15 điểm trở lên để được vào đội tuyển. Học sinh phải ném vào rổ ít nhất bao nhiêu quả?",
        "correctAnswer": "10",
        "acceptableAnswers": [
          "10",
          "10 quả",
          "10 qua"
        ],
        "explanation": "$2x - (15 - x) \\ge 15 \\Leftrightarrow 3x \\ge 30 \\Leftrightarrow x \\ge 10$ quả."
      },
      {
        "id": "ai-sa-9.6.9",
        "badge": "Luyện thêm TLN 9 - Vận dụng: Tiền gửi tiết kiệm tối thiểu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 24 (Trang 60 - 61)",
        "prompt": "Gửi tiết kiệm 12 tháng với lãi suất 7,2%/năm. Dự định tổng cả gốc và lãi nhận được ít nhất 21 440 000 đồng. Số tiền gửi ít nhất là bao nhiêu triệu đồng?",
        "correctAnswer": "20",
        "acceptableAnswers": [
          "20",
          "20 triệu",
          "20 trieu"
        ],
        "explanation": "$A(1 + 0,072) \\ge 21,44 \\Leftrightarrow 1,072A \\ge 21,44 \\Leftrightarrow A \\ge 20$ triệu đồng."
      },
      {
        "id": "ai-sa-9.6.10",
        "badge": "Luyện thêm TLN 10 - Vận dụng: Số tháng tiết kiệm tối thiểu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 29 (Trang 61)",
        "prompt": "Có sẵn 250 triệu đồng, mỗi tháng tiết kiệm thêm 10 triệu đồng. Cần tối thiểu 370 triệu đồng để mua xe. Cần ít nhất bao nhiêu tháng tiết kiệm thêm?",
        "correctAnswer": "12",
        "acceptableAnswers": [
          "12",
          "12 tháng",
          "12 thang"
        ],
        "explanation": "$250 + 10x \\ge 370 \\Leftrightarrow 10x \\ge 120 \\Leftrightarrow x \\ge 12$ tháng."
      }
    ]
  },
  "t9-on-tap-chuong-2": {
    "quizQuestions": [
        {
            "id": "ai-otc2-q1",
            "badge": "Luyện thêm 1 (NB) - Nhận biết phương trình tích",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 30)",
            "question": "Phương trình nào sau đây là phương trình tích?",
            "options": [
                "$(3x + 1)(x - 4) = 0$",
                "$(3x + 1) + (x - 4) = 0$",
                "$(3x + 1)(x - 4) = 2$",
                "$\\frac{3x + 1}{x - 4} = 0$"
            ],
            "correctIndex": 0,
            "explanation": "Phương trình tích có dạng chuẩn $A(x) \\cdot B(x) = 0$. Phương trình $(3x + 1)(x - 4) = 0$ có tích hai đa thức bằng 0."
        },
        {
            "id": "ai-otc2-q2",
            "badge": "Luyện thêm 2 (NB) - Điều kiện xác định của phương trình",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 32)",
            "question": "Điều kiện xác định của phương trình $\\frac{x + 3}{2x - 4} = 1$ là:",
            "options": [
                "$x \\ne 2$",
                "$x \\ne -3$",
                "$x \\ne 4$",
                "$x \\ne 0$"
            ],
            "correctIndex": 0,
            "explanation": "Mẫu thức khác 0: $2x - 4 \\ne 0 \\Leftrightarrow 2x \\ne 4 \\Leftrightarrow x \\ne 2$."
        },
        {
            "id": "ai-otc2-q3",
            "badge": "Luyện thêm 3 (NB) - Liên hệ thứ tự và phép nhân",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 38)",
            "question": "Cho $a > b$. Nhân cả hai vế với số dương 4 ta được:",
            "options": [
                "$4a > 4b$",
                "$4a < 4b$",
                "$-4a > -4b$",
                "$4a = 4b$"
            ],
            "correctIndex": 0,
            "explanation": "Khi nhân cả hai vế của bất đẳng thức với một số dương, ta được bất đẳng thức cùng chiều: $a > b \\Rightarrow 4a > 4b$."
        },
        {
            "id": "ai-otc2-q4",
            "badge": "Luyện thêm 4 (NB) - Nghiệm của bất phương trình cơ bản",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 42)",
            "question": "Nghiệm của bất phương trình $5x > 15$ là:",
            "options": [
                "$x > 3$",
                "$x < 3$",
                "$x \\ge 3$",
                "$x > -3$"
            ],
            "correctIndex": 0,
            "explanation": "Chia cả hai vế cho 5 (số dương): $x > \\frac{15}{5} \\Leftrightarrow x > 3$."
        },
        {
            "id": "ai-otc2-q5",
            "badge": "Luyện thêm 5 (TH) - Nghiệm của phương trình tích",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 31)",
            "question": "Nghiệm của phương trình $(2x - 1)(x + 5) = 0$ là:",
            "options": [
                "$x = \\frac{1}{2}$ hoặc $x = -5$",
                "$x = -\\frac{1}{2}$ hoặc $x = 5$",
                "$x = \\frac{1}{2}$ hoặc $x = 5$",
                "$x = 1$ hoặc $x = -5$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có: $2x - 1 = 0 \\Leftrightarrow x = \\frac{1}{2}$; $x + 5 = 0 \\Leftrightarrow x = -5$."
        },
        {
            "id": "ai-otc2-q6",
            "badge": "Luyện thêm 6 (TH) - Bất phương trình đổi chiều khi nhân chia số âm",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 6 (Trang 43)",
            "question": "Nghiệm của bất phương trình $-2x \\le 8$ là:",
            "options": [
                "$x \\ge -4$",
                "$x \\le -4$",
                "$x \\ge 4$",
                "$x \\le 4$"
            ],
            "correctIndex": 0,
            "explanation": "Chia cả hai vế cho số âm $-2$ và đổi chiều bất phương trình: $x \\ge \\frac{8}{-2} \\Leftrightarrow x \\ge -4$."
        },
        {
            "id": "ai-otc2-q7",
            "badge": "Luyện thêm 7 (TH) - Tìm nghiệm phương trình chứa ẩn ở mẫu",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 33)",
            "question": "Nghiệm của phương trình $\\frac{x - 3}{x + 2} = 0$ là:",
            "options": [
                "$x = 3$",
                "$x = -2$",
                "$x = 3$ hoặc $x = -2$",
                "Vô nghiệm"
            ],
            "correctIndex": 0,
            "explanation": "ĐKXĐ: $x \\ne -2$. Phương trình tương đương $x - 3 = 0 \\Leftrightarrow x = 3$ (thỏa mãn ĐKXĐ)."
        },
        {
            "id": "ai-otc2-q8",
            "badge": "Luyện thêm 8 (TH) - So sánh hai biểu thức",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 5 (Trang 37)",
            "question": "Cho $x < y$. So sánh $-3x + 1$ và $-3y + 1$ ta được:",
            "options": [
                "$-3x + 1 > -3y + 1$",
                "$-3x + 1 < -3y + 1$",
                "$-3x + 1 = -3y + 1$",
                "$-3x + 1 \\le -3y + 1$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $x < y \\Rightarrow -3x > -3y$ (nhân với số âm $-3$ đổi chiều). Cộng 1 vào hai vế ta được: $-3x + 1 > -3y + 1$."
        },
        {
            "id": "ai-otc2-q9",
            "badge": "Luyện thêm 9 (TH) - Bất phương trình dạng ax + b > 0",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Cánh Diều Bài 3 (Trang 44)",
            "question": "Tập nghiệm của bất phương trình $4x - 12 < 0$ là:",
            "options": [
                "$x < 3$",
                "$x > 3$",
                "$x \\le 3$",
                "$x < -3$"
            ],
            "correctIndex": 0,
            "explanation": "Chuyển vế: $4x < 12 \\Leftrightarrow x < 3$."
        },
        {
            "id": "ai-otc2-q10",
            "badge": "Luyện thêm 10 (VD) - Tìm số nghiệm nguyên dương",
            "isAiGenerated": true,
            "source": "Đề khảo sát Toán 9 Quận Đống Đa",
            "question": "Có bao nhiêu số nguyên dương thỏa mãn bất phương trình $3x - 10 < 0$?",
            "options": [
                "$3$",
                "$4$",
                "$2$",
                "Vô số"
            ],
            "correctIndex": 0,
            "explanation": "Ta có: $3x < 10 \\Leftrightarrow x < \\frac{10}{3} \\approx 3,33$. Các số nguyên dương thỏa mãn là $1, 2, 3$. Có 3 số."
        },
        {
            "id": "ai-otc2-q11",
            "badge": "Luyện thêm 11 (VD) - Tìm tham số m để phương trình có nghiệm cho trước",
            "isAiGenerated": true,
            "source": "Đề thi học kì I THCS Nguyễn Du",
            "question": "Tìm $m$ để phương trình $(2m - 1)x + 3 = 0$ nhận $x = 1$ làm nghiệm.",
            "options": [
                "$m = -1$",
                "$m = 1$",
                "$m = 2$",
                "$m = -2$"
            ],
            "correctIndex": 0,
            "explanation": "Thay $x = 1$: $(2m - 1)(1) + 3 = 0 \\Leftrightarrow 2m + 2 = 0 \\Leftrightarrow 2m = -2 \\Leftrightarrow m = -1$."
        },
        {
            "id": "ai-otc2-q12",
            "badge": "Luyện thêm 12 (VD) - Toán thực tế số người tham gia chuyến đi",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 3 (Trang 45)",
            "question": "Một nhóm bạn muốn thuê một chiếc xe du lịch với giá trọn gói $1\\,800\\,000$ đồng. Để chi phí mỗi người phải đóng không vượt quá $200\\,000$ đồng thì nhóm bạn cần có ít nhất bao nhiêu người?",
            "options": [
                "$9$ người",
                "$10$ người",
                "$8$ người",
                "$12$ người"
            ],
            "correctIndex": 0,
            "explanation": "Gọi số người là $x$ ($x \\in \\mathbb{N}^*$). Chi phí mỗi người phải đóng là $\\frac{1\\,800\\,000}{x}$ (đồng). Theo đề bài: $\\frac{1\\,800\\,000}{x} \\le 200\\,000 \\Leftrightarrow x \\ge \\frac{1\\,800\\,000}{200\\,000} = 9$. Vậy nhóm cần ít nhất 9 người."
        }
    ],
    "trueFalseQuestions": [
        {
            "id": "ai-otc2-tf1",
            "badge": "Luyện thêm Đúng/Sai 1 (TH) - Bất đẳng thức và thứ tự",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 5 (Trang 38)",
            "prompt": "Cho hai số thực $m$ và $n$ thỏa mãn $m > n$. Xét tính đúng/sai của các khẳng định sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$m + 4 > n + 4$.",
                    "correctAnswer": true,
                    "explanation": "Cộng 4 vào hai vế chiều bất đẳng thức không đổi."
                },
                {
                    "id": "b",
                    "text": "$-2m > -2n$.",
                    "correctAnswer": false,
                    "explanation": "Nhân với số âm $-2$ phải đổi chiều thành $-2m < -2n$."
                },
                {
                    "id": "c",
                    "text": "$3m - 1 > 3n - 1$.",
                    "correctAnswer": true,
                    "explanation": "Vì $m > n \\Rightarrow 3m > 3n \\Rightarrow 3m - 1 > 3n - 1$."
                },
                {
                    "id": "d",
                    "text": "$5 - m > 5 - n$.",
                    "correctAnswer": false,
                    "explanation": "Vì $m > n \\Rightarrow -m < -n \\Rightarrow 5 - m < 5 - n$."
                }
            ]
        },
        {
            "id": "ai-otc2-tf2",
            "badge": "Luyện thêm Đúng/Sai 2 (VD) - Phương trình và bất phương trình thực tế",
            "source": "SGK Toán 9 Cánh Diều Bài 3 (Trang 45)",
            "prompt": "Một cửa hàng văn phòng phẩm bán một chiếc bút bi với giá $5\\,000$ đồng và một quyển sổ giá $12\\,000$ đồng. Bạn Lan mua 2 chiếc bút bi và một số quyển sổ, mang theo $50\\,000$ đồng. Gọi $x$ là số quyển sổ Lan mua ($x \\in \\mathbb{N}^*$). Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Số tiền Lan trả cho 2 chiếc bút bi là $10\\,000$ đồng.",
                    "correctAnswer": true,
                    "explanation": "$2 \\cdot 5\\,000 = 10\\,000$ đồng."
                },
                {
                    "id": "b",
                    "text": "Bất phương trình biểu thị số tiền Lan mua hàng là $10\\,000 + 12\\,000x \\le 50\\,000$.",
                    "correctAnswer": true,
                    "explanation": "Tổng số tiền mua bút và sổ không vượt quá số tiền mang theo."
                },
                {
                    "id": "c",
                    "text": "Bất phương trình tương đương với $x \\le 3,33$.",
                    "correctAnswer": true,
                    "explanation": "$12\\,000x \\le 40\\,000 \\Leftrightarrow x \\le \\frac{40}{12} = \\frac{10}{3} \\approx 3,33$."
                },
                {
                    "id": "d",
                    "text": "Lan có thể mua tối đa 4 quyển sổ.",
                    "correctAnswer": false,
                    "explanation": "Vì $x \\le 3,33$ và $x \\in \\mathbb{N}^*$ nên Lan chỉ mua tối đa 3 quyển sổ."
                }
            ]
        }
    ],
    "shortAnswerQuestions": [
        {
            "id": "ai-otc2-sa1",
            "badge": "Luyện thêm Trả lời ngắn 1 (TH) - Tìm nghiệm của phương trình",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 4 (Trang 33)",
            "prompt": "Tìm nghiệm của phương trình $\\frac{4x - 3}{x + 1} = 3$.",
            "correctAnswer": "6",
            "acceptableAnswers": [
                "6",
                "x=6",
                "x = 6"
            ],
            "explanation": "ĐKXĐ: $x \\ne -1$. Quy đồng và khử mẫu: $4x - 3 = 3(x + 1) \\Leftrightarrow 4x - 3 = 3x + 3 \\Leftrightarrow x = 6$ (thỏa mãn ĐKXĐ)."
        },
        {
            "id": "ai-otc2-sa2",
            "badge": "Luyện thêm Trả lời ngắn 2 (VD) - Tìm số nguyên lớn nhất thỏa mãn",
            "source": "SGK Toán 9 Cánh Diều Bài 3 (Trang 44)",
            "prompt": "Tìm giá trị lớn nhất của số nguyên $x$ thỏa mãn bất phương trình $3(x + 1) - 2(x - 2) < 12$.",
            "correctAnswer": "4",
            "acceptableAnswers": [
                "4",
                "x=4",
                "x = 4"
            ],
            "explanation": "Khai triển và rút gọn vế trái: $3x + 3 - 2x + 4 < 12 \\Leftrightarrow x + 7 < 12 \\Leftrightarrow x < 5$. Vì $x$ là số nguyên nên giá trị lớn nhất của $x$ là 4."
        }
    ]
},
  "t9-b11-ti-so-luong-giac-goc-nhon": {
    "quizQuestions": [
        {
            "id": "ai-q-9.11.1",
            "badge": "Luyện thêm 1 (NB) - Tỉ số lượng giác Sin",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "question": "Trong tam giác vuông, sin của một góc nhọn bằng tỉ số giữa:",
            "options": [
                "Cạnh đối và cạnh huyền",
                "Cạnh kề và cạnh huyền",
                "Cạnh đối và cạnh kề",
                "Cạnh kề và cạnh đối"
            ],
            "correctIndex": 0,
            "explanation": "Sin của góc nhọn là tỉ số giữa cạnh đối và cạnh huyền."
        },
        {
            "id": "ai-q-9.11.2",
            "badge": "Luyện thêm 2 (NB) - Tỉ số lượng giác Cos",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 64)",
            "question": "Trong tam giác vuông, côsin của một góc nhọn bằng tỉ số giữa:",
            "options": [
                "Cạnh kề và cạnh huyền",
                "Cạnh đối và cạnh huyền",
                "Cạnh đối và cạnh kề",
                "Cạnh huyền và cạnh kề"
            ],
            "correctIndex": 0,
            "explanation": "Côsin của góc nhọn là tỉ số giữa cạnh kề và cạnh huyền."
        },
        {
            "id": "ai-q-9.11.3",
            "badge": "Luyện thêm 3 (NB) - Tỉ số lượng giác Tang",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 61)",
            "question": "Tang của góc nhọn $\\alpha$ là tỉ số giữa:",
            "options": [
                "Cạnh đối và cạnh kề",
                "Cạnh kề và cạnh đối",
                "Cạnh đối và cạnh huyền",
                "Cạnh kề và cạnh huyền"
            ],
            "correctIndex": 0,
            "explanation": "Tang là tỉ số giữa cạnh đối và cạnh kề."
        },
        {
            "id": "ai-q-9.11.4",
            "badge": "Luyện thêm 4 (NB) - Giá trị sin 45 độ",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "question": "Giá trị của $\\sin 45^\\circ$ là:",
            "options": [
                "$\\frac{\\sqrt{2}}{2}$",
                "$\\frac{1}{2}$",
                "$\\frac{\\sqrt{3}}{2}$",
                "$1$"
            ],
            "correctIndex": 0,
            "explanation": "Trong tam giác vuông cân có góc $45^\\circ$, $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."
        },
        {
            "id": "ai-q-9.11.5",
            "badge": "Luyện thêm 5 (NB) - Giá trị cos 30 độ",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Giá trị của $\\cos 30^\\circ$ bằng:",
            "options": [
                "$\\frac{\\sqrt{3}}{2}$",
                "$\\frac{1}{2}$",
                "$\\frac{\\sqrt{2}}{2}$",
                "$\\sqrt{3}$"
            ],
            "correctIndex": 0,
            "explanation": "Theo bảng lượng giác góc đặc biệt, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$."
        },
        {
            "id": "ai-q-9.11.6",
            "badge": "Luyện thêm 6 (NB) - Góc phụ nhau cos 75 độ",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "question": "Tỉ số lượng giác $\\cos 75^\\circ$ bằng tỉ số lượng giác nào sau đây?",
            "options": [
                "$\\sin 15^\\circ$",
                "$\\cos 15^\\circ$",
                "$\\tan 15^\\circ$",
                "$\\sin 75^\\circ$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $75^\\circ + 15^\\circ = 90^\\circ$ nên $\\cos 75^\\circ = \\sin 15^\\circ$."
        },
        {
            "id": "ai-q-9.11.7",
            "badge": "Luyện thêm 7 (NB) - Hệ thức tan và cot",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 62)",
            "question": "Cho góc nhọn $\\alpha$. Hệ thức nào sau đây đúng?",
            "options": [
                "$\\tan \\alpha = \\frac{1}{\\cot \\alpha}$",
                "$\\tan \\alpha = \\cot \\alpha$",
                "$\\tan \\alpha + \\cot \\alpha = 1$",
                "$\\tan \\alpha \\cdot \\cot \\alpha = 0$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $\\tan \\alpha \\cdot \\cot \\alpha = 1$ nên $\\tan \\alpha = \\frac{1}{\\cot \\alpha}$."
        },
        {
            "id": "ai-q-9.11.8",
            "badge": "Luyện thêm 8 (NB) - Giới hạn giá trị của sin và cos",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "question": "Với mọi góc nhọn $\\alpha$, giá trị của $\\sin \\alpha$ luôn thỏa mãn:",
            "options": [
                "$0 < \\sin \\alpha < 1$",
                "$\\sin \\alpha > 1$",
                "$\\sin \\alpha < 0$",
                "$\\sin \\alpha = 1$"
            ],
            "correctIndex": 0,
            "explanation": "Vì độ dài cạnh đối luôn nhỏ hơn cạnh huyền và lớn hơn 0 nên $0 < \\sin \\alpha < 1$."
        },
        {
            "id": "ai-q-9.11.9",
            "badge": "Luyện thêm 9 (TH) - Tính tang khi biết hai cạnh góc vuông",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 64)",
            "question": "Cho tam giác $MNP$ vuông tại $M$ có $MN = 6\\text{ cm}, MP = 8\\text{ cm}$. Giá trị của $\\tan N$ là:",
            "options": [
                "$\\frac{4}{3}$",
                "$\\frac{3}{4}$",
                "$\\frac{3}{5}$",
                "$\\frac{4}{5}$"
            ],
            "correctIndex": 0,
            "explanation": "Đối với góc $N$, cạnh đối là $MP = 8$, cạnh kề là $MN = 6$. Do đó $\\tan N = \\frac{MP}{MN} = \\frac{8}{6} = \\frac{4}{3}$."
        },
        {
            "id": "ai-q-9.11.10",
            "badge": "Luyện thêm 10 (TH) - Tính sin khi biết cos",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "question": "Cho góc nhọn $\\alpha$ có $\\cos \\alpha = \\frac{5}{13}$. Giá trị của $\\sin \\alpha$ là:",
            "options": [
                "$\\frac{12}{13}$",
                "$\\frac{8}{13}$",
                "$\\frac{12}{5}$",
                "$\\frac{5}{12}$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\sin \\alpha = \\sqrt{1 - \\cos^2 \\alpha} = \\sqrt{1 - \\frac{25}{169}} = \\sqrt{\\frac{144}{169}} = \\frac{12}{13}$."
        },
        {
            "id": "ai-q-9.11.11",
            "badge": "Luyện thêm 11 (TH) - Tính giá trị biểu thức lượng giác",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 63)",
            "question": "Tính giá trị của biểu thức $P = 2\\cos 60^\\circ - 3\\tan 45^\\circ + 4\\sin 30^\\circ$.",
            "options": [
                "$0$",
                "$1$",
                "$-1$",
                "$2$"
            ],
            "correctIndex": 0,
            "explanation": "Ta có $\\cos 60^\\circ = 0,5; \\tan 45^\\circ = 1; \\sin 30^\\circ = 0,5$. Thay vào: $P = 2(0,5) - 3(1) + 4(0,5) = 1 - 3 + 2 = 0$."
        },
        {
            "id": "ai-q-9.11.12",
            "badge": "Luyện thêm 12 (TH) - Rút gọn biểu thức góc phụ nhau",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "question": "Rút gọn biểu thức $S = \\frac{\\sin 40^\\circ}{\\cos 50^\\circ} + \\tan 25^\\circ \\cdot \\cot 25^\\circ$.",
            "options": [
                "$2$",
                "$1$",
                "$0$",
                "$\\sqrt{2}$"
            ],
            "correctIndex": 0,
            "explanation": "Vì $40^\\circ + 50^\\circ = 90^\\circ \\Rightarrow \\cos 50^\\circ = \\sin 40^\\circ \\Rightarrow \\frac{\\sin 40^\\circ}{\\cos 50^\\circ} = 1$. Lại có $\\tan 25^\\circ \\cdot \\cot 25^\\circ = 1$. Do đó $S = 1 + 1 = 2$."
        },
        {
            "id": "ai-q-9.11.13",
            "badge": "Luyện thêm 13 (TH) - Tính cạnh kề góc 60 độ",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "question": "Cho tam giác vuông có cạnh huyền bằng $10\\text{ cm}$ và một góc nhọn bằng $60^\\circ$. Cạnh kề với góc $60^\\circ$ có độ dài là:",
            "options": [
                "$5\\text{ cm}$",
                "$5\\sqrt{3}\\text{ cm}$",
                "$5\\sqrt{2}\\text{ cm}$",
                "$8\\text{ cm}$"
            ],
            "correctIndex": 0,
            "explanation": "Cạnh kề $= \\text{cạnh huyền} \\cdot \\cos 60^\\circ = 10 \\cdot \\frac{1}{2} = 5\\text{ cm}$."
        },
        {
            "id": "ai-q-9.11.14",
            "badge": "Luyện thêm 14 (TH) - Tính tang khi biết sin và cos",
            "isAiGenerated": true,
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "question": "Cho góc nhọn $\\alpha$ có $\\sin \\alpha = \\frac{1}{\\sqrt{5}}$ và $\\cos \\alpha = \\frac{2}{\\sqrt{5}}$. Giá trị của $\\tan \\alpha$ là:",
            "options": [
                "$\\frac{1}{2}$",
                "$2$",
                "$\\frac{2}{5}$",
                "$\\sqrt{5}$"
            ],
            "correctIndex": 0,
            "explanation": "$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{1/\\sqrt{5}}{2/\\sqrt{5}} = \\frac{1}{2}$."
        },
        {
            "id": "ai-q-9.11.15",
            "badge": "Luyện thêm 15 (VD) - Tính phân thức lượng giác theo cotang",
            "isAiGenerated": true,
            "source": "Đề thi học kì I THCS Giảng Võ",
            "question": "Cho $\\cot \\alpha = 2$. Giá trị của biểu thức $E = \\frac{3\\sin \\alpha - 2\\cos \\alpha}{\\sin \\alpha + \\cos \\alpha}$ bằng:",
            "options": [
                "$-\\frac{1}{3}$",
                "$\\frac{1}{3}$",
                "$-1$",
                "$1$"
            ],
            "correctIndex": 0,
            "explanation": "Chia cả tử và mẫu cho $\\sin \\alpha \\ne 0$: $E = \\frac{3 - 2\\cot \\alpha}{1 + \\cot \\alpha} = \\frac{3 - 2(2)}{1 + 2} = \\frac{-1}{3}$."
        },
        {
            "id": "ai-q-9.11.16",
            "badge": "Luyện thêm 16 (VD) - Tìm góc nghiêng của con dốc",
            "isAiGenerated": true,
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Đà Nẵng",
            "question": "Một con dốc leo núi nhân tạo cao $6\\text{ m}$, chiều dài từ chân dốc lên đỉnh dốc là $12\\text{ m}$. Góc nghiêng của con dốc so với mặt sàn bằng:",
            "options": [
                "$30^\\circ$",
                "$45^\\circ$",
                "$60^\\circ$",
                "$15^\\circ$"
            ],
            "correctIndex": 0,
            "explanation": "Gọi góc nghiêng là $\\alpha$. Ta có $\\sin \\alpha = \\frac{\\text{đối}}{\\text{huyền}} = \\frac{6}{12} = \\frac{1}{2}$. Vì $\\alpha$ nhọn nên $\\alpha = 30^\\circ$."
        },
        {
            "id": "ai-q-9.11.17",
            "badge": "Luyện thêm 17 (VD) - Toán thực tế khoảng cách hai bờ sông",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 73)",
            "question": "Để đo chiều rộng $AB$ của một khúc sông (với $A, B$ đối diện nhau ở hai bờ sông), một người đứng ở vị trí $C$ cùng bờ với $B$ sao cho $AB \\perp BC$. Biết khoảng cách $BC = 70\\text{ m}$ và góc $\\widehat{ACB} = 55^\\circ$. Chiều rộng $AB$ của khúc sông xấp xỉ bằng (biết $\\tan 55^\\circ \\approx 1,428$):",
            "options": [
                "$100\\text{ m}$",
                "$90\\text{ m}$",
                "$110\\text{ m}$",
                "$120\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Trong tam giác vuông $ABC$ vuông tại $B$: $\\tan C = \\frac{AB}{BC} \\Rightarrow AB = BC \\cdot \\tan 55^\\circ \\approx 70 \\cdot 1,428 = 99,96 \\approx 100\\text{ m}$."
        },
        {
            "id": "ai-q-9.11.18",
            "badge": "Luyện thêm 18 (VD) - Toán thực tế dây kéo cánh diều",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 16 (Trang 102)",
            "question": "Bạn Nam thả diều với đoạn dây diều dài $100\\text{ m}$. Khi dây diều căng thẳng và tạo với mặt đất một góc $40^\\circ$, độ cao của con diều so với tay cầm là bao nhiêu mét? (Biết $\\sin 40^\\circ \\approx 0,6428$):",
            "options": [
                "$64,3\\text{ m}$",
                "$76,6\\text{ m}$",
                "$50,0\\text{ m}$",
                "$83,9\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Độ cao của diều là cạnh đối diện góc $40^\\circ$: $h = 100 \\cdot \\sin 40^\\circ \\approx 100 \\cdot 0,6428 = 64,28 \\approx 64,3\\text{ m}$."
        },
        {
            "id": "ai-q-9.11.19",
            "badge": "Luyện thêm 19 (VD) - Toán thực tế góc nghiêng kim tự tháp",
            "source": "Đề thi học kì I THCS Archimedes Academy",
            "question": "Một mô hình kim tự tháp đáy vuông có chiều cao thẳng đứng $h = 10\\text{ cm}$, khoảng cách từ tâm đáy đến trung điểm một cạnh đáy là $10\\text{ cm}$. Góc dốc của mặt bên kim tự tháp so với mặt phẳng đáy là:",
            "options": [
                "$45^\\circ$",
                "$30^\\circ$",
                "$60^\\circ$",
                "$53^\\circ$"
            ],
            "correctIndex": 0,
            "explanation": "Tam giác vuông tạo bởi đường cao, trung đoạn và đoạn nối tâm đáy vuông cân vì hai cạnh góc vuông đều bằng $10\\text{ cm}$. Do đó $\\tan \\alpha = \\frac{10}{10} = 1 \\Rightarrow \\alpha = 45^\\circ$."
        },
        {
            "id": "ai-q-9.11.20",
            "badge": "Luyện thêm 20 (VD) - Toán thực tế tàu ngầm lặn xuống biển",
            "source": "Đề tuyển sinh vào 10 THPT Tỉnh Bà Rịa - Vũng Tàu",
            "question": "Một chiếc tàu ngầm di chuyển theo một đường thẳng lặn nghiêng xuống đáy biển một góc $21^\\circ$ so với mặt nước biển. Khi tàu ngầm di chuyển được quãng đường $600\\text{ m}$ thì độ sâu của tàu so với mặt nước biển là bao nhiêu mét? (Biết $\\sin 21^\\circ \\approx 0,3584$):",
            "options": [
                "$215\\text{ m}$",
                "$230\\text{ m}$",
                "$180\\text{ m}$",
                "$250\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Độ sâu là cạnh đối diện góc $21^\\circ$: $h = 600 \\cdot \\sin 21^\\circ \\approx 600 \\cdot 0,3584 = 215,04 \\approx 215\\text{ m}$."
        }
    ],
    "trueFalseQuestions": [
        {
            "id": "ai-tf-9.11.1",
            "badge": "Luyện thêm Đúng/Sai 1 (NB) - Định nghĩa sin, cos, tan, cot",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 68)",
            "prompt": "Cho tam giác $MNP$ vuông tại $M$. Xét tính đúng/sai của các tỉ số lượng giác góc $N$:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin N = \\frac{MP}{NP}$.",
                    "correctAnswer": true,
                    "explanation": "Cạnh đối là $MP$, cạnh huyền là $NP$."
                },
                {
                    "id": "b",
                    "text": "$\\cos N = \\frac{MN}{NP}$.",
                    "correctAnswer": true,
                    "explanation": "Cạnh kề là $MN$, cạnh huyền là $NP$."
                },
                {
                    "id": "c",
                    "text": "$\\tan N = \\frac{MN}{MP}$.",
                    "correctAnswer": false,
                    "explanation": "$\\tan N = \\frac{MP}{MN}$ (đối chia kề), khẳng định ngược lại là sai."
                },
                {
                    "id": "d",
                    "text": "$\\cot N = \\frac{MN}{MP}$.",
                    "correctAnswer": true,
                    "explanation": "$\\cot N = \\frac{MN}{MP}$ (kề chia đối)."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.2",
            "badge": "Luyện thêm Đúng/Sai 2 (NB) - Bảng lượng giác góc đặc biệt",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "prompt": "Xét tính đúng/sai của các giá trị lượng giác sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.",
                    "correctAnswer": true,
                    "explanation": "Đây là giá trị lượng giác góc đặc biệt chuẩn."
                },
                {
                    "id": "b",
                    "text": "$\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$.",
                    "correctAnswer": true,
                    "explanation": "Vì $30^\\circ + 60^\\circ = 90^\\circ$ nên $\\cos 30^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$."
                },
                {
                    "id": "c",
                    "text": "$\\tan 30^\\circ = \\sqrt{3}$.",
                    "correctAnswer": false,
                    "explanation": "$\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$, trong khi $\\tan 60^\\circ = \\sqrt{3}$."
                },
                {
                    "id": "d",
                    "text": "$\\cot 45^\\circ = 1$.",
                    "correctAnswer": true,
                    "explanation": "$\\cot 45^\\circ = \\tan 45^\\circ = 1$."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.3",
            "badge": "Luyện thêm Đúng/Sai 3 (TH) - Hệ thức lượng giác cơ bản",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 62)",
            "prompt": "Cho góc nhọn $\\alpha$. Xét tính đúng/sai của các hệ thức sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\tan \\alpha \\cdot \\cot \\alpha = 1$.",
                    "correctAnswer": true,
                    "explanation": "Tích tang và côtang cùng một góc nhọn luôn bằng 1."
                },
                {
                    "id": "b",
                    "text": "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.",
                    "correctAnswer": true,
                    "explanation": "Hằng đẳng thức cơ bản của lượng giác."
                },
                {
                    "id": "c",
                    "text": "$\\cot \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$.",
                    "correctAnswer": false,
                    "explanation": "$\\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$, không phải $\\frac{\\sin \\alpha}{\\cos \\alpha}$."
                },
                {
                    "id": "d",
                    "text": "$1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$.",
                    "correctAnswer": true,
                    "explanation": "$1 + \\cot^2 \\alpha = 1 + \\frac{\\cos^2 \\alpha}{\\sin^2 \\alpha} = \\frac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin^2 \\alpha} = \\frac{1}{\\sin^2 \\alpha}$."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.4",
            "badge": "Luyện thêm Đúng/Sai 4 (TH) - Tam giác vuông có cạnh 5, 12, 13",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5\\text{ cm}, BC = 13\\text{ cm}$. Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Độ dài cạnh $AC = 12\\text{ cm}$.",
                    "correctAnswer": true,
                    "explanation": "$AC = \\sqrt{13^2 - 5^2} = 12\\text{ cm}$."
                },
                {
                    "id": "b",
                    "text": "$\\sin B = \\frac{12}{13}$.",
                    "correctAnswer": true,
                    "explanation": "$\\sin B = \\frac{AC}{BC} = \\frac{12}{13}$."
                },
                {
                    "id": "c",
                    "text": "$\\cos B = \\frac{12}{13}$.",
                    "correctAnswer": false,
                    "explanation": "$\\cos B = \\frac{AB}{BC} = \\frac{5}{13}$."
                },
                {
                    "id": "d",
                    "text": "$\\tan B = \\frac{12}{5}$.",
                    "correctAnswer": true,
                    "explanation": "$\\tan B = \\frac{AC}{AB} = \\frac{12}{5}$."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.5",
            "badge": "Luyện thêm Đúng/Sai 5 (TH) - Tính toán biểu thức lượng giác",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 66)",
            "prompt": "Xét tính đúng/sai của các biểu thức sau:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin^2 30^\\circ + \\sin^2 60^\\circ = 1$.",
                    "correctAnswer": true,
                    "explanation": "Vì $30^\\circ + 60^\\circ = 90^\\circ \\Rightarrow \\sin^2 30^\\circ + \\cos^2 30^\\circ = 1$."
                },
                {
                    "id": "b",
                    "text": "$\\tan 15^\\circ \\cdot \\tan 75^\\circ = 1$.",
                    "correctAnswer": true,
                    "explanation": "Vì $15^\\circ + 75^\\circ = 90^\\circ \\Rightarrow \\tan 75^\\circ = \\cot 15^\\circ \\Rightarrow \\tan 15^\\circ \\cdot \\cot 15^\\circ = 1$."
                },
                {
                    "id": "c",
                    "text": "$\\cos 40^\\circ = \\cos 50^\\circ$.",
                    "correctAnswer": false,
                    "explanation": "Vì hai góc phụ nhau nên $\\cos 40^\\circ = \\sin 50^\\circ$, không phải $\\cos 50^\\circ$."
                },
                {
                    "id": "d",
                    "text": "$\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$.",
                    "correctAnswer": true,
                    "explanation": "Góc $45^\\circ$ phụ với chính nó nên sin và cos bằng nhau."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.6",
            "badge": "Luyện thêm Đúng/Sai 6 (TH) - Tìm các tỉ số lượng giác khi biết cos alpha",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "prompt": "Cho góc nhọn $\\alpha$ có $\\cos \\alpha = \\frac{4}{5}$. Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "$\\sin \\alpha = \\frac{3}{5}$.",
                    "correctAnswer": true,
                    "explanation": "$\\sin \\alpha = \\sqrt{1 - (4/5)^2} = \\frac{3}{5}$."
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
                    "explanation": "$\\cot \\alpha = \\frac{1}{\\tan \\alpha} = \\frac{4}{3}$."
                },
                {
                    "id": "d",
                    "text": "$\\tan \\alpha + \\cot \\alpha = \\frac{25}{12}$.",
                    "correctAnswer": true,
                    "explanation": "$\\frac{3}{4} + \\frac{4}{3} = \\frac{9 + 16}{12} = \\frac{25}{12}$."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.7",
            "badge": "Luyện thêm Đúng/Sai 7 (TH) - Chiều biến thiên các tỉ số lượng giác",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 63)",
            "prompt": "Xét tính đúng/sai về chiều biến thiên khi góc nhọn $\\alpha$ tăng:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Khi $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$, $\\sin \\alpha$ tăng dần.",
                    "correctAnswer": true,
                    "explanation": "Cạnh đối tăng nên sin tăng."
                },
                {
                    "id": "b",
                    "text": "Khi $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$, $\\tan \\alpha$ giảm dần.",
                    "correctAnswer": false,
                    "explanation": "Tang tăng dần theo góc, không phải giảm."
                },
                {
                    "id": "c",
                    "text": "Khi $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$, $\\cos \\alpha$ giảm dần.",
                    "correctAnswer": true,
                    "explanation": "Cạnh kề giảm nên cos giảm."
                },
                {
                    "id": "d",
                    "text": "Khi $\\alpha$ tăng từ $0^\\circ$ đến $90^\\circ$, $\\cot \\alpha$ giảm dần.",
                    "correctAnswer": true,
                    "explanation": "Côtang tỉ lệ nghịch với tang nên giảm dần."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.8",
            "badge": "Luyện thêm Đúng/Sai 8 (VD) - Tính phân thức lượng giác",
            "source": "Đề thi học kì I THCS Amsterdam",
            "prompt": "Cho góc nhọn $\\alpha$ có $\\tan \\alpha = 3$. Xét tính đúng/sai của biểu thức $A = \\frac{4\\sin \\alpha - \\cos \\alpha}{2\\sin \\alpha + 3\\cos \\alpha}$:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Chia cả tử và mẫu cho $\\cos \\alpha$ ta được $A = \\frac{4\\tan \\alpha - 1}{2\\tan \\alpha + 3}$.",
                    "correctAnswer": true,
                    "explanation": "Phép biến đổi chia cho $\\cos \\alpha \\ne 0$ hoàn toàn chính xác."
                },
                {
                    "id": "b",
                    "text": "Thay $\\tan \\alpha = 3$ vào tử số ta được $4(3) - 1 = 11$.",
                    "correctAnswer": true,
                    "explanation": "$12 - 1 = 11$."
                },
                {
                    "id": "c",
                    "text": "Thay $\\tan \\alpha = 3$ vào mẫu số ta được $2(3) + 3 = 9$.",
                    "correctAnswer": true,
                    "explanation": "$6 + 3 = 9$."
                },
                {
                    "id": "d",
                    "text": "Giá trị của biểu thức $A$ bằng $\\frac{9}{11}$.",
                    "correctAnswer": false,
                    "explanation": "Giá trị đúng là $A = \\frac{11}{9}$, không phải $\\frac{9}{11}$."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.9",
            "badge": "Luyện thêm Đúng/Sai 9 (VD) - Bài toán thực tế chiều cao ngọn hải đăng",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Hải Phòng",
            "prompt": "Từ vị trí quan sát $C$ trên bờ biển cách chân hải đăng $A$ một đoạn $60\\text{ m}$, người ta đo được góc nâng nhìn lên đỉnh hải đăng $B$ là $45^\\circ$. Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Tam giác $ABC$ là tam giác vuông cân tại $A$.",
                    "correctAnswer": true,
                    "explanation": "Tam giác vuông tại $A$ có một góc nhọn $45^\\circ$ là tam giác vuông cân."
                },
                {
                    "id": "b",
                    "text": "Chiều cao ngọn hải đăng bằng đúng khoảng cách $AC = 60\\text{ m}$.",
                    "correctAnswer": true,
                    "explanation": "Trong tam giác vuông cân, hai cạnh góc vuông bằng nhau $AB = AC = 60\\text{ m}$."
                },
                {
                    "id": "c",
                    "text": "Khoảng cách từ điểm quan sát đến đỉnh ngọn hải đăng là $60\\sqrt{2}\\text{ m}$.",
                    "correctAnswer": true,
                    "explanation": "$BC = \\sqrt{60^2 + 60^2} = 60\\sqrt{2}\\text{ m}$."
                },
                {
                    "id": "d",
                    "text": "Nếu lùi ra xa thêm $60\\text{ m}$ nữa thì góc nâng vẫn bằng $45^\\circ$.",
                    "correctAnswer": false,
                    "explanation": "Khi lùi ra xa khoảng cách tăng lên $120\\text{ m}$ nên góc nâng giảm xuống ($\\tan \\alpha = \\frac{60}{120} = 0,5 \\Rightarrow \\alpha \\approx 26,6^\\circ$)."
                }
            ]
        },
        {
            "id": "ai-tf-9.11.10",
            "badge": "Luyện thêm Đúng/Sai 10 (VD) - Bài toán thực tế chiếc thang dựa tường",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 67)",
            "prompt": "Một chiếc thang dài $4\\text{ m}$ dựa vào tường. Gọi $\\alpha$ là góc tạo bởi thang và mặt đất. Xét tính đúng/sai:",
            "subItems": [
                {
                    "id": "a",
                    "text": "Khoảng cách từ chân thang đến chân tường là $4 \\cdot \\cos \\alpha$.",
                    "correctAnswer": true,
                    "explanation": "Khoảng cách là cạnh kề góc $\\alpha$: $d = 4 \\cos \\alpha$."
                },
                {
                    "id": "b",
                    "text": "Chiều cao đỉnh thang chạm tường là $4 \\cdot \\sin \\alpha$.",
                    "correctAnswer": true,
                    "explanation": "Chiều cao là cạnh đối diện góc $\\alpha$: $h = 4 \\sin \\alpha$."
                },
                {
                    "id": "c",
                    "text": "Khi góc $\\alpha = 60^\\circ$, chân thang cách chân tường đúng $2\\text{ m}$.",
                    "correctAnswer": true,
                    "explanation": "$d = 4 \\cdot \\cos 60^\\circ = 4 \\cdot 0,5 = 2\\text{ m}$."
                },
                {
                    "id": "d",
                    "text": "Khi chân thang cách tường $2\\text{ m}$, đỉnh thang chạm tường ở độ cao $2\\sqrt{3}\\text{ m}$.",
                    "correctAnswer": true,
                    "explanation": "$h = \\sqrt{4^2 - 2^2} = \\sqrt{12} = 2\\sqrt{3}\\text{ m}$."
                }
            ]
        }
    ],
    "shortAnswerQuestions": [
        {
            "id": "ai-sa-9.11.1",
            "badge": "Luyện thêm Trả lời ngắn 1 (TH) - Tìm cạnh huyền qua định lí Pythagore",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\\text{ cm}$ và $AC = 12\\text{ cm}$. Tính độ dài cạnh huyền $BC$ (đơn vị: cm).",
            "correctAnswer": "15",
            "acceptableAnswers": [
                "15",
                "15 cm",
                "15cm"
            ],
            "explanation": "$BC = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$."
        },
        {
            "id": "ai-sa-9.11.2",
            "badge": "Luyện thêm Trả lời ngắn 2 (TH) - Tính giá trị biểu thức lượng giác",
            "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
            "prompt": "Tính giá trị của biểu thức $T = \\sin^2 40^\\circ + \\sin^2 50^\\circ + 2\\tan 45^\\circ$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
                "3"
            ],
            "explanation": "Vì $40^\\circ + 50^\\circ = 90^\\circ \\Rightarrow \\sin^2 40^\\circ + \\sin^2 50^\\circ = 1$. Lại có $\\tan 45^\\circ = 1 \\Rightarrow 2\\tan 45^\\circ = 2$. Do đó $T = 1 + 2 = 3$."
        },
        {
            "id": "ai-sa-9.11.3",
            "badge": "Luyện thêm Trả lời ngắn 3 (TH) - Tính biểu thức khi biết sin",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
            "prompt": "Cho góc nhọn $\\alpha$ có $\\sin \\alpha = 0,8$. Tính giá trị của biểu thức $5\\cos \\alpha$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
                "3"
            ],
            "explanation": "Ta có $\\cos \\alpha = \\sqrt{1 - 0,8^2} = 0,6$. Vậy $5\\cos \\alpha = 5 \\cdot 0,6 = 3$."
        },
        {
            "id": "ai-sa-9.11.4",
            "badge": "Luyện thêm Trả lời ngắn 4 (TH) - Tích tang hai góc phụ nhau",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 63)",
            "prompt": "Tính giá trị của biểu thức $K = 3\\tan 18^\\circ \\cdot \\tan 72^\\circ - \\cos 60^\\circ \\cdot 2$.",
            "correctAnswer": "2",
            "acceptableAnswers": [
                "2"
            ],
            "explanation": "$\\tan 18^\\circ \\cdot \\tan 72^\\circ = 1 \\Rightarrow 3 \\cdot 1 = 3$. Lại có $\\cos 60^\\circ \\cdot 2 = 0,5 \\cdot 2 = 1$. Do đó $K = 3 - 1 = 2$."
        },
        {
            "id": "ai-sa-9.11.5",
            "badge": "Luyện thêm Trả lời ngắn 5 (TH) - Tính cạnh kề trong tam giác vuông",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
            "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $\\widehat{B} = 60^\\circ$ và cạnh huyền $BC = 20\\text{ cm}$. Tính độ dài cạnh $AB$ (đơn vị: cm).",
            "correctAnswer": "10",
            "acceptableAnswers": [
                "10",
                "10 cm",
                "10cm"
            ],
            "explanation": "Cạnh kề $AB = BC \\cdot \\cos 60^\\circ = 20 \\cdot 0,5 = 10\\text{ cm}$."
        },
        {
            "id": "ai-sa-9.11.6",
            "badge": "Luyện thêm Trả lời ngắn 6 (VD) - Bài toán thực tế bóng cột điện",
            "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 11 (Trang 100)",
            "prompt": "Một cột điện cao $9\\text{ m}$ có bóng trên mặt đất dài đúng $9\\text{ m}$. Góc tạo bởi tia nắng mặt trời và mặt đất bằng bao nhiêu độ?",
            "correctAnswer": "45",
            "acceptableAnswers": [
                "45",
                "45 độ",
                "45°"
            ],
            "explanation": "Ta có $\\tan \\alpha = \\frac{\\text{chiều cao}}{\\text{bóng}} = \\frac{9}{9} = 1 \\Rightarrow \\alpha = 45^\\circ$."
        },
        {
            "id": "ai-sa-9.11.7",
            "badge": "Luyện thêm Trả lời ngắn 7 (VD) - Tính phân thức lượng giác",
            "source": "Đề thi học kì I THCS Yên Hòa",
            "prompt": "Cho góc nhọn $\\alpha$ có $\\tan \\alpha = 4$. Tính giá trị của biểu thức $H = \\frac{\\sin \\alpha + 2\\cos \\alpha}{\\sin \\alpha - 2\\cos \\alpha}$.",
            "correctAnswer": "3",
            "acceptableAnswers": [
                "3"
            ],
            "explanation": "Chia cả tử và mẫu cho $\\cos \\alpha$: $H = \\frac{\\tan \\alpha + 2}{\\tan \\alpha - 2} = \\frac{4 + 2}{4 - 2} = \\frac{6}{2} = 3$."
        },
        {
            "id": "ai-sa-9.11.8",
            "badge": "Luyện thêm Trả lời ngắn 8 (VD) - Bài toán thực tế độ cao cáp treo",
            "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 73)",
            "prompt": "Một chiếc cáp treo di chuyển theo đường cáp dài $800\\text{ m}$ nghiêng một góc $30^\\circ$ so với mặt phẳng nằm ngang. Độ cao mà cáp treo đưa hành khách lên được là bao nhiêu mét?",
            "correctAnswer": "400",
            "acceptableAnswers": [
                "400",
                "400 m",
                "400m"
            ],
            "explanation": "Độ cao $h = 800 \\cdot \\sin 30^\\circ = 800 \\cdot 0,5 = 400\\text{ m}$."
        },
        {
            "id": "ai-sa-9.11.9",
            "badge": "Luyện thêm Trả lời ngắn 9 (VD) - Bài toán thực tế bóng tòa tháp",
            "source": "Đề thi tuyển sinh vào 10 THPT TP. Cần Thơ",
            "prompt": "Một ngọn tháp cao $50\\text{ m}$ có bóng trên mặt đất khi góc nâng của mặt trời là $45^\\circ$. Chiều dài bóng của ngọn tháp trên mặt đất là bao nhiêu mét?",
            "correctAnswer": "50",
            "acceptableAnswers": [
                "50",
                "50 m",
                "50m"
            ],
            "explanation": "Chiều dài bóng $d = \\frac{h}{\\tan 45^\\circ} = \\frac{50}{1} = 50\\text{ m}$."
        },
        {
            "id": "ai-sa-9.11.10",
            "badge": "Luyện thêm Trả lời ngắn 10 (VD) - Bài toán thực tế cầu trượt trẻ em",
            "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 1 (Trang 64)",
            "prompt": "Một máng trượt nước tại công viên giải trí dài $10\\text{ m}$ và có góc nghiêng so với mặt nước là $30^\\circ$. Điểm xuất phát của máng trượt cao hơn mặt nước bao nhiêu mét?",
            "correctAnswer": "5",
            "acceptableAnswers": [
                "5",
                "5 m",
                "5m"
            ],
            "explanation": "Chiều cao $h = 10 \\cdot \\sin 30^\\circ = 10 \\cdot 0,5 = 5\\text{ m}$."
        }
    ]
},
  "t9-b12-he-thuc-canh-goc-tam-giac-vuong": {
    "quizQuestions": [
      {
        "id": "ai-q-9.12.1",
        "badge": "Luyện thêm Trắc nghiệm 1 (NB) - Hệ thức cạnh huyền và sin",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = a$ và góc nhọn $C$. Cạnh góc vuông $c = AB$ được tính theo hệ thức nào sau đây?",
        "options": [
          "$c = a \\cdot \\sin C$",
          "$c = a \\cdot \\cos C$",
          "$c = a \\cdot \\tan C$",
          "$c = a \\cdot \\cot C$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh huyền nhân với sin của góc đối diện: $c = a \\cdot \\sin C$."
      },
      {
        "id": "ai-q-9.12.2",
        "badge": "Luyện thêm Trắc nghiệm 2 (NB) - Hệ thức cạnh huyền và côsin",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = a$ và góc nhọn $B$. Cạnh góc vuông $b = AC$ được tính theo hệ thức nào sau đây?",
        "options": [
          "$b = a \\cdot \\cos B$",
          "$b = a \\cdot \\sin B$",
          "$b = a \\cdot \\tan B$",
          "$b = a \\cdot \\cot B$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh huyền nhân với côsin của góc kề: $b = a \\cdot \\cos B$."
      },
      {
        "id": "ai-q-9.12.3",
        "badge": "Luyện thêm Trắc nghiệm 3 (NB) - Hệ thức hai cạnh góc vuông với tang",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 78)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = c, AC = b$. Khi đó cạnh $c$ bằng:",
        "options": [
          "$c = b \\cdot \\tan C$",
          "$c = b \\cdot \\cot C$",
          "$c = b \\cdot \\sin C$",
          "$c = b \\cdot \\cos C$"
        ],
        "correctIndex": 0,
        "explanation": "Mỗi cạnh góc vuông bằng cạnh góc vuông kia nhân với tang của góc đối diện: $c = b \\cdot \\tan C$."
      },
      {
        "id": "ai-q-9.12.4",
        "badge": "Luyện thêm Trắc nghiệm 4 (NB) - Hệ thức hai cạnh góc vuông với côtang",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 78)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = c, AC = b$. Khi đó cạnh $c$ bằng:",
        "options": [
          "$c = b \\cdot \\cot B$",
          "$c = b \\cdot \\tan B$",
          "$c = b \\cdot \\sin B$",
          "$c = b \\cdot \\cos B$"
        ],
        "correctIndex": 0,
        "explanation": "Mỗi cạnh góc vuông bằng cạnh góc vuông kia nhân với côtang của góc kề: $c = b \\cdot \\cot B$."
      },
      {
        "id": "ai-q-9.12.5",
        "badge": "Luyện thêm Trắc nghiệm 5 (NB) - Tính cạnh đối góc 45 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "question": "Cho tam giác vuông có cạnh huyền bằng $12\\sqrt{2}\\text{ cm}$ và một góc nhọn bằng $45^\\circ$. Độ dài mỗi cạnh góc vuông là:",
        "options": [
          "$12\\text{ cm}$",
          "$6\\sqrt{2}\\text{ cm}$",
          "$24\\text{ cm}$",
          "$18\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Mỗi cạnh góc vuông bằng: $12\\sqrt{2} \\cdot \\sin 45^\\circ = 12\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 12\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.6",
        "badge": "Luyện thêm Trắc nghiệm 6 (NB) - Tính cạnh kề góc 60 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 14\\text{ cm}$ và góc $\\widehat{B} = 60^\\circ$. Độ dài cạnh $AB$ là:",
        "options": [
          "$7\\text{ cm}$",
          "$7\\sqrt{3}\\text{ cm}$",
          "$14\\sqrt{3}\\text{ cm}$",
          "$3,5\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh $AB$ kề góc $60^\\circ$ nên $AB = BC \\cdot \\cos 60^\\circ = 14 \\cdot 0,5 = 7\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.7",
        "badge": "Luyện thêm Trắc nghiệm 7 (NB) - Tính cạnh đối góc 60 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 14\\text{ cm}$ và góc $\\widehat{B} = 60^\\circ$. Độ dài cạnh $AC$ là:",
        "options": [
          "$7\\sqrt{3}\\text{ cm}$",
          "$7\\text{ cm}$",
          "$14\\sqrt{3}\\text{ cm}$",
          "$21\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh $AC$ đối diện góc $60^\\circ$ nên $AC = BC \\cdot \\sin 60^\\circ = 14 \\cdot \\frac{\\sqrt{3}}{2} = 7\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.8",
        "badge": "Luyện thêm Trắc nghiệm 8 (NB) - Cạnh góc vuông biết cạnh kề và tang",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 67)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5\\text{ cm}$ và $\\widehat{B} = 30^\\circ$. Độ dài cạnh $AC$ là:",
        "options": [
          "$\\frac{5\\sqrt{3}}{3}\\text{ cm}$",
          "$5\\sqrt{3}\\text{ cm}$",
          "$10\\text{ cm}$",
          "$2,5\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AC = AB \\cdot \\tan 30^\\circ = 5 \\cdot \\frac{\\sqrt{3}}{3} = \\frac{5\\sqrt{3}}{3}\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.9",
        "badge": "Luyện thêm Trắc nghiệm 9 (TH) - Giải tam giác vuông biết cạnh huyền và góc",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 16\\text{ cm}$ và $\\widehat{B} = 45^\\circ$. Diện tích của tam giác $ABC$ là:",
        "options": [
          "$64\\text{ cm}^2$",
          "$128\\text{ cm}^2$",
          "$32\\text{ cm}^2$",
          "$64\\sqrt{2}\\text{ cm}^2$"
        ],
        "correctIndex": 0,
        "explanation": "Tam giác vuông cân tại $A$ nên $AB = AC = 16 \\cdot \\sin 45^\\circ = 8\\sqrt{2}\\text{ cm}$. Diện tích $S = \\frac{1}{2} (8\\sqrt{2})^2 = 64\\text{ cm}^2$."
      },
      {
        "id": "ai-q-9.12.10",
        "badge": "Luyện thêm Trắc nghiệm 10 (TH) - Tính cạnh huyền từ cạnh kề",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\\text{ cm}$ và $\\widehat{B} = 30^\\circ$. Độ dài cạnh huyền $BC$ bằng:",
        "options": [
          "$6\\sqrt{3}\\text{ cm}$",
          "$18\\text{ cm}$",
          "$9\\sqrt{3}\\text{ cm}$",
          "$12\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\cos B = \\frac{AB}{BC} \\Rightarrow BC = \\frac{AB}{\\cos 30^\\circ} = \\frac{9}{\\frac{\\sqrt{3}}{2}} = \\frac{18}{\\sqrt{3}} = 6\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.11",
        "badge": "Luyện thêm Trắc nghiệm 11 (TH) - Tính góc nhọn khi biết cạnh đối và kề",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5\\text{ cm}$ và $AC = 5\\sqrt{3}\\text{ cm}$. Số đo của góc nhọn $\\widehat{B}$ là:",
        "options": [
          "$60^\\circ$",
          "$30^\\circ$",
          "$45^\\circ$",
          "$75^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\tan B = \\frac{AC}{AB} = \\frac{5\\sqrt{3}}{5} = \\sqrt{3} \\Rightarrow \\widehat{B} = 60^\\circ$."
      },
      {
        "id": "ai-q-9.12.12",
        "badge": "Luyện thêm Trắc nghiệm 12 (TH) - Hình chữ nhật đường chéo",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 68)",
        "question": "Một hình chữ nhật có chiều dài $8\\text{ cm}$ và đường chéo tạo với chiều dài một góc $30^\\circ$. Chiều rộng của hình chữ nhật đó là:",
        "options": [
          "$\\frac{8\\sqrt{3}}{3}\\text{ cm}$",
          "$8\\sqrt{3}\\text{ cm}$",
          "$4\\text{ cm}$",
          "$4\\sqrt{3}\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Chiều rộng $b = a \\cdot \\tan 30^\\circ = 8 \\cdot \\frac{\\sqrt{3}}{3} = \\frac{8\\sqrt{3}}{3}\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.13",
        "badge": "Luyện thêm Trắc nghiệm 13 (TH) - Hình thoi có góc 120 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
        "question": "Một hình thoi có cạnh bằng $6\\text{ cm}$ và góc tù bằng $120^\\circ$. Độ dài đường chéo lớn của hình thoi là:",
        "options": [
          "$6\\sqrt{3}\\text{ cm}$",
          "$6\\text{ cm}$",
          "$12\\text{ cm}$",
          "$3\\sqrt{3}\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Góc nhọn của hình thoi là $180^\\circ - 120^\\circ = 60^\\circ$. Nửa góc nhọn là $30^\\circ$. Nửa đường chéo lớn là $6 \\cdot \\cos 30^\\circ = 3\\sqrt{3}\\text{ cm} \\Rightarrow$ Đường chéo lớn là $6\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.14",
        "badge": "Luyện thêm Trắc nghiệm 14 (TH) - Đường cao tam giác vuông",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 20\\text{ cm}$ và $\\widehat{B} = 30^\\circ$. Độ dài đường cao $AH$ là:",
        "options": [
          "$5\\sqrt{3}\\text{ cm}$",
          "$10\\text{ cm}$",
          "$10\\sqrt{3}\\text{ cm}$",
          "$5\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AB = BC \\cdot \\cos 30^\\circ = 10\\sqrt{3}\\text{ cm}$. Trong tam giác $ABH$ vuông tại $H$: $AH = AB \\cdot \\sin 30^\\circ = 10\\sqrt{3} \\cdot 0,5 = 5\\sqrt{3}\\text{ cm}$."
      },
      {
        "id": "ai-q-9.12.15",
        "badge": "Luyện thêm Trắc nghiệm 15 (VD - Thực tế) - Dốc trượt công viên nước",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "question": "Một máng trượt nước dài $15\\text{ m}$ có góc nghiêng so với mặt đất là $28^\\circ$. Độ cao của đỉnh máng trượt so với mặt đất là bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "options": [
          "$7,0\\text{ m}$",
          "$8,2\\text{ m}$",
          "$6,5\\text{ m}$",
          "$9,1\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao đỉnh máng trượt: $h = 15 \\cdot \\sin 28^\\circ \\approx 15 \\cdot 0,4695 = 7,04 \\approx 7,0\\text{ m}$."
      },
      {
        "id": "ai-q-9.12.16",
        "badge": "Luyện thêm Trắc nghiệm 16 (VD - Thực tế) - Dốc xe lăn cho người khuyết tật",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 111)",
        "question": "Tiêu chuẩn dốc dành cho xe lăn của người khuyết tật quy định độ dốc không vượt quá $1:12$ (tương đương góc nghiêng khoảng $4,76^\\circ$). Nếu một bậc thềm cao $0,6\\text{ m}$ thì chiều dài tối thiểu của đường dốc xe lăn là bao nhiêu mét?",
        "options": [
          "$7,2\\text{ m}$",
          "$6,0\\text{ m}$",
          "$5,5\\text{ m}$",
          "$8,4\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Với tỉ lệ $1:12$, chiều dài mặt đáy là $0,6 \\times 12 = 7,2\\text{ m}$. Chiều dài đường dốc $L = \\sqrt{7,2^2 + 0,6^2} \\approx 7,22 \\approx 7,2\\text{ m}$."
      },
      {
        "id": "ai-q-9.12.17",
        "badge": "Luyện thêm Trắc nghiệm 17 (VD - Thực tế) - Dây diều trên bầu trời",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 112)",
        "question": "Một bạn thả diều với đoạn dây căng dài $100\\text{ m}$. Góc tạo bởi dây diều và phương nằm ngang là $40^\\circ$. Tay bạn cầm đầu dây cách mặt đất $1,2\\text{ m}$. Độ cao của con diều so với mặt đất là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "$65\\text{ m}$",
          "$70\\text{ m}$",
          "$60\\text{ m}$",
          "$75\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao từ tay cầm: $h_1 = 100 \\cdot \\sin 40^\\circ \\approx 100 \\cdot 0,6428 = 64,28\\text{ m}$. Chiều cao so với mặt đất: $h = 64,28 + 1,2 = 65,48 \\approx 65\\text{ m}$."
      },
      {
        "id": "ai-q-9.12.18",
        "badge": "Luyện thêm Trắc nghiệm 18 (VD - Thực tế) - Tàu ngầm lặn xuống biển",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 111)",
        "question": "Một tàu ngầm lặn xuống theo đường thẳng nghiêng với mặt nước biển một góc $21^\\circ$. Khi tàu di chuyển được quãng đường $300\\text{ m}$ theo hướng đó thì tàu đang ở độ sâu bao nhiêu mét dưới mặt nước (làm tròn đến hàng phần mười)?",
        "options": [
          "$107,5\\text{ m}$",
          "$115,2\\text{ m}$",
          "$98,4\\text{ m}$",
          "$120,0\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Độ sâu của tàu ngầm: $h = 300 \\cdot \\sin 21^\\circ \\approx 300 \\cdot 0,3584 = 107,52 \\approx 107,5\\text{ m}$."
      },
      {
        "id": "ai-q-9.12.19",
        "badge": "Luyện thêm Trắc nghiệm 19 (VD - Thực tế) - Thuyền bị dòng nước đẩy xiên",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
        "question": "Một khúc sông rộng $120\\text{ m}$. Một chiếc ca nô muốn sang bờ đối diện nhưng bị dòng nước đẩy xiên một góc $25^\\circ$ so với đường vuông góc ngắn nhất. Quãng đường thực tế ca nô phải di chuyển để sang bờ bên kia là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "$132\\text{ m}$",
          "$140\\text{ m}$",
          "$125\\text{ m}$",
          "$150\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Quãng đường di chuyển là cạnh huyền: $s = \\frac{120}{\\cos 25^\\circ} \\approx \\frac{120}{0,9063} \\approx 132,4 \\approx 132\\text{ m}$."
      },
      {
        "id": "ai-q-9.12.20",
        "badge": "Luyện thêm Trắc nghiệm 20 (VD - Thực tế) - Tháp truyền hình nhìn từ xa",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 82)",
        "question": "Một người đứng tại điểm quan sát cách chân tháp truyền hình $150\\text{ m}$. Góc nâng nhìn lên đỉnh tháp đo được là $32^\\circ$. Biết ống ngắm của thiết bị đo đặt cao $1,4\\text{ m}$ so với mặt đất. Chiều cao của tháp truyền hình là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "$95\\text{ m}$",
          "$90\\text{ m}$",
          "$102\\text{ m}$",
          "$88\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao từ ống ngắm lên đỉnh tháp: $h_1 = 150 \\cdot \\tan 32^\\circ \\approx 150 \\cdot 0,6249 = 93,735\\text{ m}$. Chiều cao của tháp: $h = 93,735 + 1,4 = 95,135 \\approx 95\\text{ m}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-9.12.1",
        "badge": "Luyện thêm Đúng/Sai 1 (NB) - Công thức tính cạnh góc vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $a$, hai cạnh góc vuông $b, c$. Xét tính đúng/sai của các mệnh đề:",
        "subItems": [
          {
            "id": "a",
            "text": "$b = a \\cdot \\sin B$.",
            "correctAnswer": true,
            "explanation": "Đúng, mỗi cạnh góc vuông bằng cạnh huyền nhân với sin của góc đối."
          },
          {
            "id": "b",
            "text": "$c = a \\cdot \\cos C$.",
            "correctAnswer": false,
            "explanation": "Sai, $c$ là cạnh đối góc $C$ nên $c = a \\cdot \\sin C$ hoặc $c = a \\cdot \\cos B$."
          },
          {
            "id": "c",
            "text": "$b = c \\cdot \\tan B$.",
            "correctAnswer": true,
            "explanation": "Đúng, cạnh góc vuông bằng cạnh góc vuông kia nhân với tang góc đối."
          },
          {
            "id": "d",
            "text": "$c = b \\cdot \\tan B$.",
            "correctAnswer": false,
            "explanation": "Sai, $c = b \\cdot \\tan C$ hoặc $c = b \\cdot \\cot B$."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.2",
        "badge": "Luyện thêm Đúng/Sai 2 (NB) - Giải tam giác vuông góc 30-60",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $\\widehat{B} = 30^\\circ$ và cạnh huyền $BC = 10\\text{ cm}$.",
        "subItems": [
          {
            "id": "a",
            "text": "Góc $\\widehat{C} = 60^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng vì hai góc nhọn phụ nhau: $\\widehat{C} = 90^\\circ - 30^\\circ = 60^\\circ$."
          },
          {
            "id": "b",
            "text": "Độ dài cạnh $AC = 5\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AC = BC \\cdot \\sin 30^\\circ = 10 \\cdot 0,5 = 5\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Độ dài cạnh $AB = 5\\sqrt{3}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AB = BC \\cdot \\cos 30^\\circ = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\text{ cm}$."
          },
          {
            "id": "d",
            "text": "Chu vi tam giác $ABC$ bằng $25\\text{ cm}$.",
            "correctAnswer": false,
            "explanation": "Sai, chu vi là $10 + 5 + 5\\sqrt{3} = 15 + 5\\sqrt{3} \\approx 23,66\\text{ cm} \\ne 25\\text{ cm}$."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.3",
        "badge": "Luyện thêm Đúng/Sai 3 (NB) - Giải tam giác vuông cân",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "prompt": "Cho tam giác $ABC$ vuông cân tại $A$ có cạnh huyền $BC = 8\\text{ cm}$.",
        "subItems": [
          {
            "id": "a",
            "text": "Số đo mỗi góc nhọn $\\widehat{B} = \\widehat{C} = 45^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, tam giác vuông cân có hai góc nhọn bằng nhau và bằng $45^\\circ$."
          },
          {
            "id": "b",
            "text": "Độ dài cạnh $AB = 4\\sqrt{2}\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $AB = 8 \\cdot \\sin 45^\\circ = 8 \\cdot \\frac{\\sqrt{2}}{2} = 4\\sqrt{2}\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Đường cao $AH$ kẻ từ $A$ xuống $BC$ có độ dài bằng $4\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, trong tam giác vuông cân đường cao ứng với cạnh huyền bằng nửa cạnh huyền: $8/2 = 4\\text{ cm}$."
          },
          {
            "id": "d",
            "text": "Diện tích tam giác $ABC$ bằng $32\\text{ cm}^2$.",
            "correctAnswer": false,
            "explanation": "Sai, diện tích $S = \\frac{1}{2} BC \\cdot AH = \\frac{1}{2} \\cdot 8 \\cdot 4 = 16\\text{ cm}^2$."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.4",
        "badge": "Luyện thêm Đúng/Sai 4 (NB) - Quy tắc và tỉ số giải tam giác",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "prompt": "Xét các mệnh đề sau về giải tam giác vuông:",
        "subItems": [
          {
            "id": "a",
            "text": "Biết cạnh huyền và một góc nhọn, ta luôn tìm được hai cạnh góc vuông bằng hàm lượng giác.",
            "correctAnswer": true,
            "explanation": "Đúng, $b = a\\sin B, c = a\\cos B$."
          },
          {
            "id": "b",
            "text": "Biết hai góc nhọn của tam giác vuông thì luôn tìm được độ dài các cạnh của nó.",
            "correctAnswer": false,
            "explanation": "Sai, cần ít nhất một yếu tố độ dài cạnh."
          },
          {
            "id": "c",
            "text": "Biết hai cạnh góc vuông, ta luôn tìm được số đo các góc nhọn qua hàm tang hoặc côtang.",
            "correctAnswer": true,
            "explanation": "Đúng, $\\tan B = \\frac{b}{c} \\Rightarrow$ tìm được góc $B$."
          },
          {
            "id": "d",
            "text": "Trong tam giác vuông, cạnh đối diện với góc lớn hơn thì có độ dài lớn hơn.",
            "correctAnswer": true,
            "explanation": "Đúng theo quan hệ giữa góc và cạnh đối diện trong tam giác."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.5",
        "badge": "Luyện thêm Đúng/Sai 5 (TH) - Tam giác vuông có cạnh huyền 26, cạnh góc vuông 10",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 107)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 26\\text{ cm}$ và $AB = 10\\text{ cm}$.",
        "subItems": [
          {
            "id": "a",
            "text": "Độ dài cạnh góc vuông $AC = 24\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $AC = \\sqrt{26^2 - 10^2} = \\sqrt{576} = 24\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Giá trị $\\sin B = \\frac{12}{13}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $\\sin B = \\frac{AC}{BC} = \\frac{24}{26} = \\frac{12}{13}$."
          },
          {
            "id": "c",
            "text": "Giá trị $\\cos B = \\frac{5}{13}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $\\cos B = \\frac{AB}{BC} = \\frac{10}{26} = \\frac{5}{13}$."
          },
          {
            "id": "d",
            "text": "Góc $\\widehat{B} < 45^\\circ$.",
            "correctAnswer": false,
            "explanation": "Sai, vì $AC = 24 > AB = 10$ nên $\\widehat{B} > \\widehat{C} \\Rightarrow \\widehat{B} > 45^\\circ$."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.6",
        "badge": "Luyện thêm Đúng/Sai 6 (TH) - Hình thang vuông ABCD",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 109)",
        "prompt": "Cho hình thang vuông $ABCD$ ($A = D = 90^\\circ$) có đáy nhỏ $AB = 4\\text{ cm}$, đáy lớn $CD = 10\\text{ cm}$, cạnh bên $BC = 10\\text{ cm}$. Kẻ đường cao $BH \\perp CD$.",
        "subItems": [
          {
            "id": "a",
            "text": "Đoạn thẳng $DH = 4\\text{ cm}$ và $HC = 6\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $ABHD$ là hình chữ nhật nên $DH = AB = 4\\text{ cm}$, do đó $HC = 10 - 4 = 6\\text{ cm}$."
          },
          {
            "id": "b",
            "text": "Độ dài đường cao $BH = 8\\text{ cm}$.",
            "correctAnswer": true,
            "explanation": "Đúng, tam giác $BHC$ vuông tại $H$: $BH = \\sqrt{10^2 - 6^2} = 8\\text{ cm}$."
          },
          {
            "id": "c",
            "text": "Giá trị $\\sin C = 0,8$.",
            "correctAnswer": true,
            "explanation": "Đúng, $\\sin C = \\frac{BH}{BC} = \\frac{8}{10} = 0,8$."
          },
          {
            "id": "d",
            "text": "Diện tích hình thang $ABCD$ bằng $60\\text{ cm}^2$.",
            "correctAnswer": false,
            "explanation": "Sai, $S = \\frac{(AB + CD) \\cdot BH}{2} = \\frac{(4 + 10) \\cdot 8}{2} = 56\\text{ cm}^2$."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.7",
        "badge": "Luyện thêm Đúng/Sai 7 (TH) - Tam giác nhọn và định lý diện tích",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 108)",
        "prompt": "Cho tam giác nhọn $ABC$ có hai cạnh $AB = c, AC = b$ và góc $\\widehat{A}$. Kẻ đường cao $BH \\perp AC$.",
        "subItems": [
          {
            "id": "a",
            "text": "Độ dài đường cao $BH = c \\cdot \\sin A$.",
            "correctAnswer": true,
            "explanation": "Đúng, trong tam giác $ABH$ vuông tại $H$: $BH = AB \\cdot \\sin A = c \\sin A$."
          },
          {
            "id": "b",
            "text": "Diện tích tam giác $ABC$ tính theo công thức $S = \\frac{1}{2} b \\cdot c \\cdot \\sin A$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S = \\frac{1}{2} AC \\cdot BH = \\frac{1}{2} b c \\sin A$."
          },
          {
            "id": "c",
            "text": "Nếu $b = 8\\text{ cm}, c = 6\\text{ cm}$ và $\\widehat{A} = 30^\\circ$ thì diện tích tam giác $ABC$ bằng $12\\text{ cm}^2$.",
            "correctAnswer": true,
            "explanation": "Đúng, $S = \\frac{1}{2} \\cdot 8 \\cdot 6 \\cdot \\sin 30^\\circ = 24 \\cdot 0,5 = 12\\text{ cm}^2$."
          },
          {
            "id": "d",
            "text": "Nếu tam giác có diện tích lớn nhất với $b, c$ cố định thì $\\widehat{A} = 60^\\circ$.",
            "correctAnswer": false,
            "explanation": "Sai, $\\sin A \\le 1$, đạt lớn nhất khi $\\sin A = 1 \\Leftrightarrow \\widehat{A} = 90^\\circ$."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.8",
        "badge": "Luyện thêm Đúng/Sai 8 (VD - Thực tế) - Độ dốc xe chạy trên cầu vượt",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "prompt": "Một cây cầu vượt đường bộ có đoạn dốc dài $120\\text{ m}$, điểm cao nhất của cầu vượt cao $6\\text{ m}$ so với mặt đường phẳng.",
        "subItems": [
          {
            "id": "a",
            "text": "Sin của góc nghiêng con dốc bằng $0,05$.",
            "correctAnswer": true,
            "explanation": "Đúng, $\\sin\\alpha = \\frac{6}{120} = 0,05$."
          },
          {
            "id": "b",
            "text": "Góc nghiêng của con dốc nhỏ hơn $3^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $\\sin 3^\\circ \\approx 0,0523 > 0,05 \\Rightarrow \\alpha \\approx 2^\\circ 52' < 3^\\circ$."
          },
          {
            "id": "c",
            "text": "Khoảng cách trên mặt đất từ chân dốc đến vị trí chiếu vuông góc của đỉnh dốc lớn hơn $119\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $d = \\sqrt{120^2 - 6^2} = \\sqrt{14400 - 36} = \\sqrt{14364} \\approx 119,85\\text{ m} > 119\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Nếu một chiếc xe đạp lên dốc với vận tốc $12\\text{ km/h}$ thì mất hơn $1\\text{ phút}$ để lên tới đỉnh.",
            "correctAnswer": false,
            "explanation": "Sai, đổi $12\\text{ km/h} = \\frac{12000}{3600} = \\frac{10}{3}\\text{ m/s}$. Thời gian: $t = \\frac{120}{10/3} = 36\\text{ giây} < 60\\text{ giây}$ (1 phút)."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.9",
        "badge": "Luyện thêm Đúng/Sai 9 (VD - Thực tế) - Cột đèn đường và góc mặt trời",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 130)",
        "prompt": "Một cột đèn chiếu sáng công cộng cao $8\\text{ m}$ vuông góc với mặt đất. Tại một thời điểm, tia nắng mặt trời tạo với mặt đất một góc $38^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Chiều dài bóng của cột đèn trên mặt đất tính bằng công thức $L = \\frac{8}{\\tan 38^\\circ}$.",
            "correctAnswer": true,
            "explanation": "Đúng, vì $\\tan 38^\\circ = \\frac{\\text{chiều cao}}{L} \\Rightarrow L = \\frac{8}{\\tan 38^\\circ}$."
          },
          {
            "id": "b",
            "text": "Chiều dài bóng của cột đèn xấp xỉ bằng $10,24\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $L = \\frac{8}{\\tan 38^\\circ} \\approx \\frac{8}{0,7813} \\approx 10,239 \\approx 10,24\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Nếu tia nắng mặt trời tạo với mặt đất một góc $45^\\circ$ thì bóng cột đèn dài $8\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $L = \\frac{8}{\\tan 45^\\circ} = 8\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Góc tạo bởi tia nắng mặt trời với mặt đất càng lớn thì bóng cột đèn trên mặt đất càng dài.",
            "correctAnswer": false,
            "explanation": "Sai, góc càng lớn (mặt trời lên càng cao) thì $\\tan\\alpha$ càng lớn, bóng cột đèn $L = \\frac{h}{\\tan\\alpha}$ càng ngắn lại."
          }
        ]
      },
      {
        "id": "ai-tf-9.12.10",
        "badge": "Luyện thêm Đúng/Sai 10 (VD - Thực tế) - Trạm hải đăng và khoảng cách hai tàu",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 131)",
        "prompt": "Từ đỉnh một ngọn hải đăng cao $70\\text{ m}$ so với mặt nước biển, một người quan sát hai chiếc tàu $A$ và $B$ thẳng hàng với chân hải đăng về cùng một hướng với các góc hạ lần lượt là $30^\\circ$ và $45^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Chiếc tàu có góc hạ $45^\\circ$ ở gần chân hải đăng hơn chiếc tàu có góc hạ $30^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng, góc hạ càng lớn thì tàu càng ở gần chân hải đăng."
          },
          {
            "id": "b",
            "text": "Khoảng cách từ chân hải đăng đến chiếc tàu gần hơn là $70\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $d_1 = \\frac{70}{\\tan 45^\\circ} = 70\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Khoảng cách từ chân hải đăng đến chiếc tàu xa hơn là $70\\sqrt{3}\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng, $d_2 = \\frac{70}{\\tan 30^\\circ} = 70\\sqrt{3}\\text{ m} \\approx 121,24\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Khoảng cách giữa hai chiếc tàu nhỏ hơn $50\\text{ m}$.",
            "correctAnswer": false,
            "explanation": "Sai, khoảng cách giữa hai tàu là $d_2 - d_1 = 70\\sqrt{3} - 70 = 70(\\sqrt{3}-1) \\approx 70 \\cdot 0,732 = 51,24\\text{ m} > 50\\text{ m}$."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-9.12.1",
        "badge": "Luyện thêm Trả lời ngắn 1 (NB) - Tính cạnh góc vuông theo cạnh huyền",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 22\\text{ cm}$ và $\\widehat{C} = 30^\\circ$. Tính độ dài cạnh góc vuông $AB$ theo đơn vị centimet.",
        "correctAnswer": "11",
        "acceptableAnswers": [
          "11",
          "11 cm",
          "11cm"
        ],
        "explanation": "Ta có $AB = BC \\cdot \\sin 30^\\circ = 22 \\cdot 0,5 = 11\\text{ cm}$."
      },
      {
        "id": "ai-sa-9.12.2",
        "badge": "Luyện thêm Trả lời ngắn 2 (NB) - Tính cạnh kề theo góc 60 độ",
        "source": "SGK Toán 9 Cánh Diều Bài 2 (Trang 79)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 16\\text{ cm}$ và $\\widehat{B} = 60^\\circ$. Tính độ dài cạnh góc vuông $AB$ theo đơn vị centimet.",
        "correctAnswer": "8",
        "acceptableAnswers": [
          "8",
          "8 cm",
          "8cm"
        ],
        "explanation": "Cạnh $AB$ kề góc $60^\\circ$: $AB = BC \\cdot \\cos 60^\\circ = 16 \\cdot 0,5 = 8\\text{ cm}$."
      },
      {
        "id": "ai-sa-9.12.3",
        "badge": "Luyện thêm Trả lời ngắn 3 (NB) - Tính cạnh góc vuông theo tang 45 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AC = 13\\text{ cm}$ và $\\widehat{B} = 45^\\circ$. Tính độ dài cạnh $AB$ theo đơn vị centimet.",
        "correctAnswer": "13",
        "acceptableAnswers": [
          "13",
          "13 cm",
          "13cm"
        ],
        "explanation": "Tam giác vuông cân nên $AB = AC = 13\\text{ cm}$."
      },
      {
        "id": "ai-sa-9.12.4",
        "badge": "Luyện thêm Trả lời ngắn 4 (NB) - Tính cạnh đối theo tang",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$ và $\\tan B = 1,5$. Tính độ dài cạnh $AC$ theo đơn vị centimet.",
        "correctAnswer": "9",
        "acceptableAnswers": [
          "9",
          "9 cm",
          "9cm"
        ],
        "explanation": "Ta có $AC = AB \\cdot \\tan B = 6 \\cdot 1,5 = 9\\text{ cm}$."
      },
      {
        "id": "ai-sa-9.12.5",
        "badge": "Luyện thêm Trả lời ngắn 5 (TH) - Tính cạnh huyền từ cạnh góc vuông và góc 30 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có $AC = 14\\text{ cm}$ và $\\widehat{B} = 30^\\circ$. Tính độ dài cạnh huyền $BC$ theo đơn vị centimet.",
        "correctAnswer": "28",
        "acceptableAnswers": [
          "28",
          "28 cm",
          "28cm"
        ],
        "explanation": "Ta có $BC = \\frac{AC}{\\sin 30^\\circ} = \\frac{14}{0,5} = 28\\text{ cm}$."
      },
      {
        "id": "ai-sa-9.12.6",
        "badge": "Luyện thêm Trả lời ngắn 6 (TH) - Diện tích tam giác vuông",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 76)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 10\\text{ cm}$ và $\\widehat{B} = 30^\\circ$. Tính diện tích tam giác $ABC$ theo đơn vị $\\text{cm}^2$ (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$).",
        "correctAnswer": "22",
        "acceptableAnswers": [
          "22",
          "22 cm2",
          "22cm2"
        ],
        "explanation": "$AC = 10 \\cdot \\sin 30^\\circ = 5\\text{ cm}$. $AB = 10 \\cdot \\cos 30^\\circ = 5\\sqrt{3} \\approx 8,66\\text{ cm}$. Diện tích: $S = \\frac{1}{2} \\cdot 5 \\cdot 8,66 = 21,65 \\approx 22\\text{ cm}^2$."
      },
      {
        "id": "ai-sa-9.12.7",
        "badge": "Luyện thêm Trả lời ngắn 7 (TH) - Chu vi hình chữ nhật",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 109)",
        "prompt": "Một mảnh vườn hình chữ nhật có đường chéo dài $50\\text{ m}$ và tạo với chiều rộng một góc $60^\\circ$. Tính chu vi mảnh vườn theo đơn vị mét (làm tròn đến hàng đơn vị, lấy $\\sqrt{3} \\approx 1,732$).",
        "correctAnswer": "137",
        "acceptableAnswers": [
          "137",
          "137 m",
          "137m"
        ],
        "explanation": "Chiều rộng: $50 \\cdot \\cos 60^\\circ = 25\\text{ m}$. Chiều dài: $50 \\cdot \\sin 60^\\circ = 25\\sqrt{3} \\approx 43,3\\text{ m}$. Chu vi: $2 \\cdot (25 + 43,3) = 2 \\cdot 68,3 = 136,6 \\approx 137\\text{ m}$."
      },
      {
        "id": "ai-sa-9.12.8",
        "badge": "Luyện thêm Trả lời ngắn 8 (VD - Thực tế) - Độ cao con dốc trượt tuyết",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
        "prompt": "Một đường trượt tuyết dài $500\\text{ m}$ có góc dốc so với phương ngang là $12^\\circ$. Tính độ chênh lệch độ cao giữa điểm đầu và điểm cuối của đường trượt theo mét (làm tròn đến hàng đơn vị, lấy $\\sin 12^\\circ \\approx 0,2079$).",
        "correctAnswer": "104",
        "acceptableAnswers": [
          "104",
          "104 m",
          "104m"
        ],
        "explanation": "Độ chênh lệch độ cao: $h = 500 \\cdot \\sin 12^\\circ \\approx 500 \\cdot 0,2079 = 103,95 \\approx 104\\text{ m}$."
      },
      {
        "id": "ai-sa-9.12.9",
        "badge": "Luyện thêm Trả lời ngắn 9 (VD - Thực tế) - Đo chiều cao cây xanh",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 110)",
        "prompt": "Để đo chiều cao một cây cổ thụ, bạn An đứng cách gốc cây $20\\text{ m}$ và dùng giác kế ngắm đỉnh cây với góc nâng $35^\\circ$. Biết giác kế đặt cao $1,4\\text{ m}$ so với mặt đất. Tính chiều cao của cây theo mét (làm tròn đến hàng phần mười, lấy $\\tan 35^\\circ \\approx 0,7002$).",
        "correctAnswer": "15.4",
        "acceptableAnswers": [
          "15.4",
          "15,4",
          "15.4 m",
          "15,4 m",
          "15.4m",
          "15,4m"
        ],
        "explanation": "Chiều cao cây: $h = 1,4 + 20 \\cdot \\tan 35^\\circ \\approx 1,4 + 20 \\cdot 0,7002 = 1,4 + 14,004 = 15,404 \\approx 15,4\\text{ m}$."
      },
      {
        "id": "ai-sa-9.12.10",
        "badge": "Luyện thêm Trả lời ngắn 10 (VD - Thực tế) - Chiếc thang tựa tường",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "prompt": "Một chiếc thang dài $6\\text{ m}$ tựa vào tường tạo với mặt đất góc $75^\\circ$. Hỏi đỉnh thang chạm tường ở độ cao bao nhiêu mét so với mặt đất (làm tròn đến hàng phần mười, lấy $\\sin 75^\\circ \\approx 0,9659$)?",
        "correctAnswer": "5.8",
        "acceptableAnswers": [
          "5.8",
          "5,8",
          "5.8 m",
          "5,8 m",
          "5.8m",
          "5,8m"
        ],
        "explanation": "Độ cao đỉnh thang chạm tường: $h = 6 \\cdot \\sin 75^\\circ \\approx 6 \\cdot 0,9659 = 5,7954 \\approx 5,8\\text{ m}$."
      }
    ]
  },
  "t9-on-tap-chuong-4": {
    "quizQuestions": [
      {
        "id": "ai-q-9.ot4.1",
        "badge": "Luyện thêm Trắc nghiệm 1 (NB) - Giá trị sin 30 độ",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
        "question": "Giá trị của biểu thức $\\sin 30^\\circ + \\cos 60^\\circ$ bằng:",
        "options": [
          "1",
          "0",
          "\\frac{1}{2}",
          "\\sqrt{3}"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\sin 30^\\circ = 0,5$ và $\\cos 60^\\circ = 0,5$. Tổng bằng $1$."
      },
      {
        "id": "ai-q-9.ot4.2",
        "badge": "Luyện thêm Trắc nghiệm 2 (NB) - Giá trị tang 45 độ",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 65)",
        "question": "Giá trị của $\\tan 45^\\circ \\cdot \\cot 45^\\circ$ bằng:",
        "options": [
          "1",
          "2",
          "0",
          "\\frac{1}{2}"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\tan 45^\\circ = 1, \\cot 45^\\circ = 1 \\Rightarrow 1 \\cdot 1 = 1$."
      },
      {
        "id": "ai-q-9.ot4.3",
        "badge": "Luyện thêm Trắc nghiệm 3 (NB) - Hai góc phụ nhau",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 69)",
        "question": "Cho $\\alpha + \\beta = 90^\\circ$. Khẳng định nào sau đây là sai?",
        "options": [
          "$\\sin \\alpha = \\sin \\beta$",
          "$\\sin \\alpha = \\cos \\beta$",
          "$\\tan \\alpha = \\cot \\beta$",
          "$\\cos \\alpha = \\sin \\beta$"
        ],
        "correctIndex": 0,
        "explanation": "Khẳng định $\\sin \\alpha = \\sin \\beta$ là sai (chỉ bằng khi $\\alpha = \\beta = 45^\\circ$)."
      },
      {
        "id": "ai-q-9.ot4.4",
        "badge": "Luyện thêm Trắc nghiệm 4 (NB) - Hệ thức cạnh huyền",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 74)",
        "question": "Trong tam giác $ABC$ vuông tại $A$, cạnh góc vuông $b$ bằng:",
        "options": [
          "$a \\cdot \\sin B$",
          "$a \\cdot \\tan B$",
          "$c \\cdot \\sin B$",
          "$a \\cdot \\cot B$"
        ],
        "correctIndex": 0,
        "explanation": "Theo định lý: $b = a \\cdot \\sin B$."
      },
      {
        "id": "ai-q-9.ot4.5",
        "badge": "Luyện thêm Trắc nghiệm 5 (TH) - Tính cạnh góc vuông theo góc 30 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 105)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $BC = 28\\text{ cm}, \\widehat{C} = 30^\\circ$. Độ dài cạnh $AB$ là:",
        "options": [
          "14 cm",
          "14\\sqrt{3} cm",
          "7 cm",
          "21 cm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AB = BC \\cdot \\sin 30^\\circ = 28 \\cdot 0,5 = 14\\text{ cm}$."
      },
      {
        "id": "ai-q-9.ot4.6",
        "badge": "Luyện thêm Trắc nghiệm 6 (TH) - Tính cạnh kề theo góc 60 độ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 106)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $BC = 24\\text{ cm}, \\widehat{B} = 60^\\circ$. Độ dài cạnh $AB$ là:",
        "options": [
          "12 cm",
          "12\\sqrt{3} cm",
          "24\\sqrt{3} cm",
          "6 cm"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $AB = BC \\cdot \\cos 60^\\circ = 24 \\cdot 0,5 = 12\\text{ cm}$."
      },
      {
        "id": "ai-q-9.ot4.7",
        "badge": "Luyện thêm Trắc nghiệm 7 (TH) - Biểu thức lượng giác phụ nhau",
        "source": "SGK Toán 9 Cánh Diều Bài 1 (Trang 66)",
        "question": "Giá trị của biểu thức $T = \\sin^2 22^\\circ + \\sin^2 68^\\circ$ bằng:",
        "options": [
          "1",
          "0",
          "2",
          "\\frac{1}{2}"
        ],
        "correctIndex": 0,
        "explanation": "Vì $22^\\circ + 68^\\circ = 90^\\circ$ nên $\\sin 68^\\circ = \\cos 22^\\circ \\Rightarrow T = \\sin^2 22^\\circ + \\cos^2 22^\\circ = 1$."
      },
      {
        "id": "ai-q-9.ot4.8",
        "badge": "Luyện thêm Trắc nghiệm 8 (TH) - Tìm góc nhọn tam giác vuông cân",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 71)",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = AC$. Khẳng định nào sau đây là đúng?",
        "options": [
          "$\\tan B = 1$",
          "$\\sin B = 1$",
          "$\\cos B = 1$",
          "$\\cot B = 0$"
        ],
        "correctIndex": 0,
        "explanation": "Vì tam giác vuông cân nên $\\widehat{B} = 45^\\circ \\Rightarrow \\tan B = 1$."
      },
      {
        "id": "ai-q-9.ot4.9",
        "badge": "Luyện thêm Trắc nghiệm 9 (VD - Thực tế) - Độ dốc mặt đường",
        "source": "SGK Toán 9 Chân Trời Sáng Tạo Bài 2 (Trang 72)",
        "question": "Một đoạn dốc dài $250\\text{ m}$ có góc nghiêng $5^\\circ$ so với mặt phẳng nằm ngang. Độ cao của đỉnh dốc so với chân dốc là bao nhiêu mét (làm tròn đến hàng đơn vị, lấy $\\sin 5^\\circ \\approx 0,0872$)?",
        "options": [
          "22 m",
          "25 m",
          "18 m",
          "28 m"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao $h = 250 \\cdot \\sin 5^\\circ \\approx 250 \\cdot 0,0872 = 21,8\\text{ m} \\approx 22\\text{ m}$."
      },
      {
        "id": "ai-q-9.ot4.10",
        "badge": "Luyện thêm Trắc nghiệm 10 (VD - Thực tế) - Dây diều trên trời",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 112)",
        "question": "Một dây diều dài $80\\text{ m}$ nghiêng một góc $45^\\circ$ so với phương ngang. Tay bạn cầm đầu dây cách mặt đất $1,3\\text{ m}$. Độ cao con diều là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
        "options": [
          "58 m",
          "60 m",
          "55 m",
          "62 m"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao: $h = 80 \\cdot \\sin 45^\\circ + 1,3 = 40\\sqrt{2} + 1,3 \\approx 56,57 + 1,3 = 57,87 \\approx 58\\text{ m}$."
      },
      {
        "id": "ai-q-9.ot4.11",
        "badge": "Luyện thêm Trắc nghiệm 11 (VD - Thực tế) - Bóng cột đèn trên mặt đất",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 72)",
        "question": "Một cột đèn cao $6\\text{ m}$ có bóng trên mặt đất dài $6\\sqrt{3}\\text{ m}$. Góc tạo bởi tia nắng mặt trời và mặt đất là:",
        "options": [
          "30°",
          "60°",
          "45°",
          "75°"
        ],
        "correctIndex": 0,
        "explanation": "Ta có $\\tan \\alpha = \\frac{6}{6\\sqrt{3}} = \\frac{\\sqrt{3}}{3} \\Rightarrow \\alpha = 30^\\circ$."
      },
      {
        "id": "ai-q-9.ot4.12",
        "badge": "Luyện thêm Trắc nghiệm 12 (VD - Thực tế) - Thang tựa tường",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 77)",
        "question": "Chiếc thang dài $3\\text{ m}$ tựa vào tường tạo với mặt đất góc $70^\\circ$. Chiều cao điểm tựa của thang trên tường là bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "options": [
          "2,8 m",
          "2,5 m",
          "2,9 m",
          "2,6 m"
        ],
        "correctIndex": 0,
        "explanation": "Chiều cao $h = 3 \\cdot \\sin 70^\\circ \\approx 3 \\cdot 0,9397 = 2,819 \\approx 2,8\\text{ m}$."
      }
    ],
    "trueFalseQuestions": [
      {
        "id": "ai-tf-9.ot4.1",
        "badge": "Luyện thêm Đúng/Sai 1 (NB) - Quan hệ lượng giác cơ bản",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 11 (Trang 70)",
        "prompt": "Xét tính đúng/sai của các hệ thức sau với góc nhọn $\\alpha$:",
        "subItems": [
          {
            "id": "a",
            "text": "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.",
            "correctAnswer": true,
            "explanation": "Đúng theo định lý cơ bản."
          },
          {
            "id": "b",
            "text": "$\\tan \\alpha \\cdot \\cot \\alpha = 1$.",
            "correctAnswer": true,
            "explanation": "Đúng vì tích hai đại lượng nghịch đảo bằng 1."
          },
          {
            "id": "c",
            "text": "$\\tan \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$.",
            "correctAnswer": false,
            "explanation": "Sai, phải là $\\frac{\\sin\\alpha}{\\cos\\alpha}$."
          },
          {
            "id": "d",
            "text": "$\\sin 30^\\circ = \\cos 60^\\circ$.",
            "correctAnswer": true,
            "explanation": "Đúng vì hai góc phụ nhau."
          }
        ]
      },
      {
        "id": "ai-tf-9.ot4.2",
        "badge": "Luyện thêm Đúng/Sai 2 (VD - Thực tế) - Đo chiều cao tháp",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 110)",
        "prompt": "Một bạn học sinh đặt giác kế cao $1,5\\text{ m}$ cách chân ngọn tháp $50\\text{ m}$ ngắm lên đỉnh tháp với góc nâng $45^\\circ$.",
        "subItems": [
          {
            "id": "a",
            "text": "Khoảng cách từ ống ngắm đến đỉnh tháp theo phương thẳng đứng là $50\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $50 \\cdot \\tan 45^\\circ = 50\\text{ m}$."
          },
          {
            "id": "b",
            "text": "Chiều cao ngọn tháp so với mặt đất là $51,5\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì $50 + 1,5 = 51,5\\text{ m}$."
          },
          {
            "id": "c",
            "text": "Độ dài đường ngắm từ giác kế lên đỉnh tháp bằng $50\\sqrt{2}\\text{ m}$.",
            "correctAnswer": true,
            "explanation": "Đúng vì là cạnh huyền tam giác vuông cân: $\\sqrt{50^2 + 50^2} = 50\\sqrt{2}\\text{ m}$."
          },
          {
            "id": "d",
            "text": "Nếu bạn học sinh lùi xa thêm $10\\text{ m}$ thì góc nâng ngắm lên đỉnh tháp tăng lên.",
            "correctAnswer": false,
            "explanation": "Sai, càng lùi xa chân tháp thì góc nâng phải càng giảm đi."
          }
        ]
      }
    ],
    "shortAnswerQuestions": [
      {
        "id": "ai-sa-9.ot4.1",
        "badge": "Luyện thêm Trả lời ngắn 1 (NB) - Tính cạnh góc vuông theo sin",
        "source": "SGK Toán 9 Kết Nối Tri Thức Bài 12 (Trang 75)",
        "prompt": "Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 20\\text{ cm}, \\widehat{B} = 30^\\circ$. Tính độ dài cạnh $AC$ theo centimet.",
        "correctAnswer": "10",
        "acceptableAnswers": [
          "10",
          "10 cm",
          "10cm"
        ],
        "explanation": "Ta có $AC = BC \\cdot \\sin 30^\\circ = 20 \\cdot 0,5 = 10\\text{ cm}$."
      },
      {
        "id": "ai-sa-9.ot4.2",
        "badge": "Luyện thêm Trả lời ngắn 2 (VD - Thực tế) - Chiều cao cột cờ",
        "source": "Tài liệu chuyên đề Toán 9 HK1 Bài 12 (Trang 110)",
        "prompt": "Một bạn học sinh đứng cách chân cột cờ $16\\text{ m}$ nhìn lên đỉnh cột cờ dưới góc nâng $45^\\circ$. Mắt cách đất $1,5\\text{ m}$. Chiều cao cột cờ là bao nhiêu mét (viết dưới dạng số thập phân)?",
        "correctAnswer": "17.5",
        "acceptableAnswers": [
          "17.5",
          "17,5",
          "17.5 m",
          "17,5 m",
          "17.5m",
          "17,5m"
        ],
        "explanation": "Chiều cao cột cờ: $h = 16 \\cdot \\tan 45^\\circ + 1,5 = 16 + 1,5 = 17,5\\text{ m}$."
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
  "quizQuestions": [
    {
      "id": "ai-9.7.1",
      "badge": "Luyện thêm 1 - Căn bậc hai số học của số chính phương",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Căn bậc hai số học của số $100$ là:",
      "options": [
        "$10$",
        "$-10$",
        "$\\pm 10$",
        "$10000$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $10 > 0$ và $10^2 = 100$ nên căn bậc hai số học của $100$ là $\\sqrt{100} = 10$."
    },
    {
      "id": "ai-9.7.2",
      "badge": "Luyện thêm 2 - Tìm các căn bậc hai của một số",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Các căn bậc hai của số $0,64$ là:",
      "options": [
        "$0,8$ và $-0,8$",
        "$0,8$",
        "$-0,8$",
        "$0,08$ và $-0,08$"
      ],
      "correctIndex": 0,
      "explanation": "Số dương $0,64$ có hai căn bậc hai là $0,8$ và $-0,8$ vì $(\\pm 0,8)^2 = 0,64$."
    },
    {
      "id": "ai-9.7.3",
      "badge": "Luyện thêm 3 - Căn bậc hai số học của phân số",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Căn bậc hai số học của $\\frac{9}{16}$ là:",
      "options": [
        "$\\frac{3}{4}$",
        "$\\pm \\frac{3}{4}$",
        "$-\\frac{3}{4}$",
        "$\\frac{81}{256}$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\frac{3}{4} > 0$ và $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$ nên căn bậc hai số học là $\\frac{3}{4}$."
    },
    {
      "id": "ai-9.7.4",
      "badge": "Luyện thêm 4 - So sánh hai số chứa căn",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "So sánh hai số $6$ và $\\sqrt{37}$:",
      "options": [
        "$6 < \\sqrt{37}$",
        "$6 > \\sqrt{37}$",
        "$6 = \\sqrt{37}$",
        "Không so sánh được"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $6 = \\sqrt{36}$. Vì $36 < 37$ nên $\\sqrt{36} < \\sqrt{37}$, do đó $6 < \\sqrt{37}$."
    },
    {
      "id": "ai-9.7.5",
      "badge": "Luyện thêm 5 - Điều kiện xác định căn thức",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Căn thức bậc hai $\\sqrt{5x - 10}$ xác định khi và chỉ khi:",
      "options": [
        "$x \\ge 2$",
        "$x > 2$",
        "$x \\le 2$",
        "$x < 2$"
      ],
      "correctIndex": 0,
      "explanation": "$5x - 10 \\ge 0 \\Leftrightarrow 5x \\ge 10 \\Leftrightarrow x \\ge 2$."
    },
    {
      "id": "ai-9.7.6",
      "badge": "Luyện thêm 6 - Điều kiện căn thức hệ số âm",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Căn thức bậc hai $\\sqrt{6 - 3x}$ có nghĩa khi và chỉ khi:",
      "options": [
        "$x \\le 2$",
        "$x \\ge 2$",
        "$x < 2$",
        "$x \\ge -2$"
      ],
      "correctIndex": 0,
      "explanation": "$6 - 3x \\ge 0 \\Leftrightarrow -3x \\ge -6 \\Leftrightarrow x \\le 2$."
    },
    {
      "id": "ai-9.7.7",
      "badge": "Luyện thêm 7 - Áp dụng hằng đẳng thức căn bình phương",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Giá trị của biểu thức $\\sqrt{(-11)^2}$ bằng:",
      "options": [
        "$11$",
        "$-11$",
        "$\\pm 11$",
        "$121$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sqrt{(-11)^2} = |-11| = 11$."
    },
    {
      "id": "ai-9.7.8",
      "badge": "Luyện thêm 8 - Rút gọn căn thức hiệu hai số",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Rút gọn biểu thức $\\sqrt{(\\sqrt{5} - 3)^2}$ ta được:",
      "options": [
        "$3 - \\sqrt{5}$",
        "$\\sqrt{5} - 3$",
        "$\\sqrt{5} + 3$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\sqrt{5} < \\sqrt{9} = 3 \\implies \\sqrt{5} - 3 < 0$, nên $|\\sqrt{5} - 3| = 3 - \\sqrt{5}$."
    },
    {
      "id": "ai-9.7.9",
      "badge": "Luyện thêm 9 - Tính giá trị biểu thức căn",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Giá trị của biểu thức $M = \\sqrt{36} + \\sqrt{64} - \\sqrt{49}$ là:",
      "options": [
        "$7$",
        "$9$",
        "$5$",
        "$11$"
      ],
      "correctIndex": 0,
      "explanation": "$M = 6 + 8 - 7 = 7$."
    },
    {
      "id": "ai-9.7.10",
      "badge": "Luyện thêm 10 - Tìm x không âm từ căn bậc hai",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Tìm $x$ không âm biết $\\sqrt{x} = 9$:",
      "options": [
        "$x = 81$",
        "$x = 3$",
        "$x = 9$",
        "$x = 18$"
      ],
      "correctIndex": 0,
      "explanation": "$x = 9^2 = 81$."
    },
    {
      "id": "ai-9.7.11",
      "badge": "Luyện thêm 11 - Điều kiện căn thức phân thức dương",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Biểu thức $\\sqrt{\\frac{2}{3x - 9}}$ có nghĩa khi và chỉ khi:",
      "options": [
        "$x > 3$",
        "$x \\ge 3$",
        "$x < 3$",
        "$x \\ne 3$"
      ],
      "correctIndex": 0,
      "explanation": "Tử số $2 > 0$ nên mẫu số $3x - 9 > 0 \\Leftrightarrow x > 3$."
    },
    {
      "id": "ai-9.7.12",
      "badge": "Luyện thêm 12 - Rút gọn biểu thức chứa biến âm",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Rút gọn biểu thức $B = \\sqrt{16x^2} - 5x$ với $x < 0$ ta được:",
      "options": [
        "$-9x$",
        "$-x$",
        "$9x$",
        "$x$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sqrt{16x^2} = |4x|$. Vì $x < 0$ nên $|4x| = -4x \\implies B = -4x - 5x = -9x$."
    },
    {
      "id": "ai-9.7.13",
      "badge": "Luyện thêm 13 - Giải phương trình căn thức cơ bản",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Nghiệm của phương trình $\\sqrt{x + 4} = 6$ là:",
      "options": [
        "$x = 32$",
        "$x = 2$",
        "$x = 8$",
        "$x = 40$"
      ],
      "correctIndex": 0,
      "explanation": "$x + 4 = 6^2 = 36 \\Leftrightarrow x = 32$ (thỏa mãn)."
    },
    {
      "id": "ai-9.7.14",
      "badge": "Luyện thêm 14 - Tìm nghiệm phương trình căn bình phương",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Tập nghiệm của phương trình $\\sqrt{x^2 - 2x + 1} = 4$ là:",
      "options": [
        "$S = \\{5; -3\\}$",
        "$S = \\{5\\}$",
        "$S = \\{-3\\}$",
        "$S = \\{3; -5\\}$"
      ],
      "correctIndex": 0,
      "explanation": "$\\sqrt{(x - 1)^2} = 4 \\Leftrightarrow |x - 1| = 4 \\Leftrightarrow x - 1 = 4$ hoặc $x - 1 = -4 \\Leftrightarrow x = 5$ hoặc $x = -3$."
    },
    {
      "id": "ai-9.7.15",
      "badge": "Luyện thêm 15 - Rút gọn hằng đẳng thức chứa biến",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Rút gọn biểu thức $K = \\sqrt{x^2 - 6x + 9} + 2x$ với $x \\ge 3$ ta được:",
      "options": [
        "$3x - 3$",
        "$x + 3$",
        "$-3x + 3$",
        "$3$"
      ],
      "correctIndex": 0,
      "explanation": "$K = |x - 3| + 2x$. Vì $x \\ge 3$ nên $|x - 3| = x - 3 \\implies K = x - 3 + 2x = 3x - 3$."
    },
    {
      "id": "ai-9.7.16",
      "badge": "Luyện thêm 16 - Giá trị nhỏ nhất của biểu thức chứa căn",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Giá trị nhỏ nhất của biểu thức $B = \\sqrt{2x - 6} - 3$ bằng:",
      "options": [
        "$-3$",
        "$3$",
        "$0$",
        "$-6$"
      ],
      "correctIndex": 0,
      "explanation": "Vì $\\sqrt{2x - 6} \\ge 0$ nên $B \\ge -3$. Đạt tại $x = 3$."
    },
    {
      "id": "ai-9.7.17",
      "badge": "Luyện thêm 17 - Bất phương trình căn bậc hai",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Tập hợp các số thực $x$ không âm thỏa mãn $\\sqrt{x} < 5$ là:",
      "options": [
        "$0 \\le x < 25$",
        "$x < 25$",
        "$x < 5$",
        "$0 \\le x < 5$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện $x \\ge 0$. Ta có $\\sqrt{x} < 5 \\Leftrightarrow x < 25$. Kết hợp điều kiện: $0 \\le x < 25$."
    },
    {
      "id": "ai-9.7.18",
      "badge": "Luyện thêm 18 - Bài toán thực tế: Sân chơi hình vuông",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Một sân chơi trường mầm non hình vuông có diện tích $64\\text{ m}^2$. Người ta muốn viền hàng rào nhựa bảo vệ xung quanh sân chơi đó. Chiều dài hàng rào nhựa cần mua là bao nhiêu mét?",
      "options": [
        "$32\\text{ m}$",
        "$16\\text{ m}$",
        "$8\\text{ m}$",
        "$24\\text{ m}$"
      ],
      "correctIndex": 0,
      "explanation": "Độ dài cạnh sân chơi hình vuông: $a = \\sqrt{64} = 8\\text{ m}$. Chiều dài hàng rào là chu vi: $4 \\times 8 = 32\\text{ m}$."
    },
    {
      "id": "ai-9.7.19",
      "badge": "Luyện thêm 19 - Bài toán thực tế: Vận tốc rơi chạm đáy",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Một quả bóng rơi tự do từ tầng thượng tòa nhà cao $40\\text{ m}$ xuống đất. Cho gia tốc trọng trường $g \\approx 9,8\\text{ m/s}^2$ và công thức vận tốc chạm đất $v = \\sqrt{2gh}$. Vận tốc chạm đất của quả bóng (làm tròn hàng đơn vị) là:",
      "options": [
        "$28\\text{ m/s}$",
        "$20\\text{ m/s}$",
        "$32\\text{ m/s}$",
        "$25\\text{ m/s}$"
      ],
      "correctIndex": 0,
      "explanation": "$v = \\sqrt{2 \\times 9,8 \\times 40} = \\sqrt{784} = 28\\text{ m/s}$."
    },
    {
      "id": "ai-9.7.20",
      "badge": "Luyện thêm 20 - Bài toán thực tế: Khoảng cách tầm nhìn",
      "isAiGenerated": true,
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "question": "Tầm nhìn xa của mắt người quan sát ở độ cao $h$ (mét) so với mặt nước biển được tính xấp xỉ bởi công thức $d = 3,57\\sqrt{h}$ (hải lý). Để có tầm nhìn xa là $35,7\\text{ hải lý}$ thì người quan sát cần ở độ cao bao nhiêu mét?",
      "options": [
        "$100\\text{ m}$",
        "$10\\text{ m}$",
        "$50\\text{ m}$",
        "$200\\text{ m}$"
      ],
      "correctIndex": 0,
      "explanation": "$35,7 = 3,57\\sqrt{h} \\implies \\sqrt{h} = 10 \\implies h = 10^2 = 100\\text{ m}$."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "ai-tf-9.7.1",
      "badge": "Luyện thêm TF 1 - Căn bậc hai và căn bậc hai số học",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Xét tính đúng/sai của các khẳng định sau về căn bậc hai:",
      "subItems": [
        {
          "id": "a",
          "text": "Số $121$ có hai căn bậc hai là $11$ và $-11$.",
          "correctAnswer": true,
          "explanation": "Mỗi số dương có hai căn bậc hai là $\\pm \\sqrt{121} = \\pm 11$."
        },
        {
          "id": "b",
          "text": "Căn bậc hai số học của $121$ là $\\sqrt{121} = 11$.",
          "correctAnswer": true,
          "explanation": "Căn bậc hai số học luôn mang giá trị không âm."
        },
        {
          "id": "c",
          "text": "Số $-25$ có căn bậc hai số học là $-5$.",
          "correctAnswer": false,
          "explanation": "Số âm không có căn bậc hai."
        },
        {
          "id": "d",
          "text": "Ta có $\\sqrt{(-9)^2} = -9$.",
          "correctAnswer": false,
          "explanation": "$\\sqrt{(-9)^2} = |-9| = 9 \\ne -9$."
        }
      ]
    },
    {
      "id": "ai-tf-9.7.2",
      "badge": "Luyện thêm TF 2 - So sánh căn bậc hai số học",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Xét tính đúng/sai của các so sánh sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Ta có $7 = \\sqrt{49} > \\sqrt{48}$, suy ra $7 > \\sqrt{48}$.",
          "correctAnswer": true,
          "explanation": "$49 > 48 \\implies \\sqrt{49} > \\sqrt{48}$."
        },
        {
          "id": "b",
          "text": "Ta có $\\sqrt{10} < 3$ vì $10 < 9$.",
          "correctAnswer": false,
          "explanation": "$10 > 9$ nên $\\sqrt{10} > 3$, khẳng định này sai."
        },
        {
          "id": "c",
          "text": "Với $x \\ge 0$, nếu $\\sqrt{x} > 6$ thì $x > 36$.",
          "correctAnswer": true,
          "explanation": "$\\sqrt{x} > \\sqrt{36} \\Leftrightarrow x > 36$."
        },
        {
          "id": "d",
          "text": "Với $x \\ge 0$, nếu $\\sqrt{x} < 1$ thì $0 \\le x < 1$.",
          "correctAnswer": true,
          "explanation": "Kết hợp $x \\ge 0$ và $x < 1^2 = 1$ ta được $0 \\le x < 1$."
        }
      ]
    },
    {
      "id": "ai-tf-9.7.3",
      "badge": "Luyện thêm TF 3 - Điều kiện xác định căn thức",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Xét tính đúng/sai của các khẳng định sau về điều kiện có nghĩa của căn thức:",
      "subItems": [
        {
          "id": "a",
          "text": "Căn thức $\\sqrt{4x - 8}$ xác định khi và chỉ khi $x \\ge 2$.",
          "correctAnswer": true,
          "explanation": "$4x - 8 \\ge 0 \\Leftrightarrow x \\ge 2$."
        },
        {
          "id": "b",
          "text": "Căn thức $\\sqrt{10 - 2x}$ xác định khi và chỉ khi $x \\le 5$.",
          "correctAnswer": true,
          "explanation": "$10 - 2x \\ge 0 \\Leftrightarrow -2x \\ge -10 \\Leftrightarrow x \\le 5$."
        },
        {
          "id": "c",
          "text": "Căn thức $\\sqrt{-x^2}$ không xác định với bất kì giá trị nào của $x$.",
          "correctAnswer": false,
          "explanation": "Tại $x = 0$, biểu thức dưới căn bằng $0 \\ge 0$, do đó căn thức vẫn xác định tại $x = 0$."
        },
        {
          "id": "d",
          "text": "Căn thức $\\sqrt{x^2 + 4}$ xác định với mọi số thực $x \\in \\mathbb{R}$.",
          "correctAnswer": true,
          "explanation": "Vì $x^2 + 4 \\ge 4 > 0, \\forall x$."
        }
      ]
    },
    {
      "id": "ai-tf-9.7.4",
      "badge": "Luyện thêm TF 4 - Hằng đẳng thức căn(A^2) = |A|",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Xét tính đúng/sai của các phép tính sau:",
      "subItems": [
        {
          "id": "a",
          "text": "$\\sqrt{(3 - \\sqrt{11})^2} = \\sqrt{11} - 3$.",
          "correctAnswer": true,
          "explanation": "Vì $3 < \\sqrt{11}$ nên $|3 - \\sqrt{11}| = \\sqrt{11} - 3$."
        },
        {
          "id": "b",
          "text": "$\\sqrt{(5 - \\sqrt{21})^2} = 5 - \\sqrt{21}$.",
          "correctAnswer": true,
          "explanation": "Vì $5 = \\sqrt{25} > \\sqrt{21}$ nên $5 - \\sqrt{21} > 0$, suy ra $|5 - \\sqrt{21}| = 5 - \\sqrt{21}$."
        },
        {
          "id": "c",
          "text": "Với $a < 0$, ta có $\\sqrt{25a^2} = 5a$.",
          "correctAnswer": false,
          "explanation": "Vì $a < 0$ nên $\\sqrt{25a^2} = |5a| = -5a \\ne 5a$."
        },
        {
          "id": "d",
          "text": "Với $x \\ge 1$, ta có $\\sqrt{x^2 - 2x + 1} = x - 1$.",
          "correctAnswer": true,
          "explanation": "$\\sqrt{(x - 1)^2} = |x - 1| = x - 1$ do $x \\ge 1$."
        }
      ]
    },
    {
      "id": "ai-tf-9.7.5",
      "badge": "Luyện thêm TF 5 - Giải phương trình chứa căn",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Cho phương trình: $\\sqrt{3x + 1} = 4$. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Điều kiện xác định của phương trình là $x \\ge -\\frac{1}{3}$.",
          "correctAnswer": true,
          "explanation": "$3x + 1 \\ge 0 \\Leftrightarrow x \\ge -\\frac{1}{3}$."
        },
        {
          "id": "b",
          "text": "Bình phương hai vế phương trình ta được: $3x + 1 = 16$.",
          "correctAnswer": true,
          "explanation": "$4^2 = 16$."
        },
        {
          "id": "c",
          "text": "Nghiệm của phương trình là $x = 5$.",
          "correctAnswer": true,
          "explanation": "$3x = 15 \\Leftrightarrow x = 5$ (thỏa mãn ĐKXĐ)."
        },
        {
          "id": "d",
          "text": "Giá trị $x = -5$ cũng là một nghiệm của phương trình.",
          "correctAnswer": false,
          "explanation": "Thay $x = -5$: $3(-5) + 1 = -14 < 0$ (không xác định), nên không phải nghiệm."
        }
      ]
    },
    {
      "id": "ai-tf-9.7.6",
      "badge": "Luyện thêm TF 6 - Bài toán thực tế: Tấm bạt che hình vuông",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Một chiếc bạt che sân hình vuông có diện tích là $49\\text{ m}^2$. Người ta may thêm viền phản quang xung quanh mép bạt. Xét tính đúng/sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Độ dài mỗi cạnh của chiếc bạt che là $\\sqrt{49} = 7\\text{ m}$.",
          "correctAnswer": true,
          "explanation": "Cạnh hình vuông bằng $\\sqrt{49} = 7\\text{ m}$."
        },
        {
          "id": "b",
          "text": "Tổng chiều dài viền phản quang cần may là $28\\text{ m}$.",
          "correctAnswer": true,
          "explanation": "Chu vi hình vuông là $4 \\times 7 = 28\\text{ m}$."
        },
        {
          "id": "c",
          "text": "Nếu diện tích bạt tăng gấp 4 lần ($196\\text{ m}^2$) thì cạnh của bạt tăng gấp 4 lần.",
          "correctAnswer": false,
          "explanation": "Cạnh bạt mới là $\\sqrt{196} = 14\\text{ m}$, chỉ tăng gấp 2 lần so với ban đầu (vì $\\sqrt{4} = 2$)."
        },
        {
          "id": "d",
          "text": "Với giá dây viền phản quang là $15\\,000$ đồng/mét, chi phí may viền chiếc bạt $49\\text{ m}^2$ là $420\\,000$ đồng.",
          "correctAnswer": true,
          "explanation": "$28 \\times 15\\,000 = 420\\,000$ đồng."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "ai-sa-9.7.1",
      "badge": "Luyện thêm SA 1 - Căn bậc hai số học",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Căn bậc hai số học của số $169$ bằng bao nhiêu?",
      "correctAnswer": "13",
      "acceptableAnswers": [
        "13",
        "13.0"
      ],
      "explanation": "Vì $13 > 0$ và $13^2 = 169$ nên $\\sqrt{169} = 13$."
    },
    {
      "id": "ai-sa-9.7.2",
      "badge": "Luyện thêm SA 2 - Tính giá trị biểu thức số",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Tính giá trị của biểu thức: $\\sqrt{225} - \\sqrt{64}$.",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "7.0"
      ],
      "explanation": "$\\sqrt{225} = 15, \\sqrt{64} = 8 \\implies 15 - 8 = 7$."
    },
    {
      "id": "ai-sa-9.7.3",
      "badge": "Luyện thêm SA 3 - Cận điều kiện xác định",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Căn thức $\\sqrt{3x - 15}$ xác định với mọi $x \\ge a$. Giá trị của số $a$ bằng bao nhiêu?",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "5.0"
      ],
      "explanation": "$3x - 15 \\ge 0 \\Leftrightarrow 3x \\ge 15 \\Leftrightarrow x \\ge 5$. Vậy $a = 5$."
    },
    {
      "id": "ai-sa-9.7.4",
      "badge": "Luyện thêm SA 4 - Áp dụng hằng đẳng thức",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Tính giá trị của biểu thức: $B = \\sqrt{(\\sqrt{7} - 4)^2} + \\sqrt{7}$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4.0"
      ],
      "explanation": "Vì $\\sqrt{7} < \\sqrt{16} = 4$ nên $|\\sqrt{7} - 4| = 4 - \\sqrt{7}$. Khi đó $B = 4 - \\sqrt{7} + \\sqrt{7} = 4$."
    },
    {
      "id": "ai-sa-9.7.5",
      "badge": "Luyện thêm SA 5 - Giải phương trình căn thức",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Tìm nghiệm của phương trình: $\\sqrt{3x + 4} = 5$.",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7",
        "x = 7"
      ],
      "explanation": "$3x + 4 = 5^2 = 25 \\Leftrightarrow 3x = 21 \\Leftrightarrow x = 7$."
    },
    {
      "id": "ai-sa-9.7.6",
      "badge": "Luyện thêm SA 6 - Bài toán thực tế: Chiều dài cạnh sàn gạch",
      "source": "Bộ Đề Tự Luyện Toán 9 - Bài 7",
      "prompt": "Một sân gạch hình vuông có diện tích bằng $100\\text{ m}^2$. Độ dài cạnh của sân gạch đó là bao nhiêu mét?",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10",
        "10.0",
        "10m",
        "10 m"
      ],
      "explanation": "Độ dài cạnh hình vuông bằng $\\sqrt{100} = 10\\text{ m}$."
    }
  ]
},
};
