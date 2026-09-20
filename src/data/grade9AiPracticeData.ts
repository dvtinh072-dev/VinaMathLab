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
};
