import type { QuizQuestion, TrueFalseQuestion, ShortAnswerQuestion } from "./allGradesLessonsData";

export interface Grade12AiPracticePackage {
  quizQuestions: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  shortAnswerQuestions?: ShortAnswerQuestion[];
}

export const GRADE_12_AI_PRACTICE_DATA: Record<string, Grade12AiPracticePackage> = {
  // ==========================================
  // BÀI 1: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ
  // ==========================================
  "t12-b1-don-dieu-cuc-tri": {
    quizQuestions: [
  {
    "id": "ai-12.1.1",
    "badge": "Luyện thêm 1 - Đọc khoảng đồng biến từ bảng biến thiên",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ có bảng biến thiên như hình vẽ sau. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "svgDiagram": "<svg viewBox=\"0 0 540 180\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"bbtArrUp\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#38bdf8\" />\n    </marker>\n    <marker id=\"bbtArrDown\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#f43f5e\" />\n    </marker>\n  </defs>\n\n  <!-- Khung ngoài chữ nhật -->\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"160\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ dọc ngăn cột tiêu đề -->\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng x -->\n  <line x1=\"10\" y1=\"50\" x2=\"530\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng y' -->\n  <line x1=\"10\" y1=\"90\" x2=\"530\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Tiêu đề cột bên trái -->\n  <text x=\"42\" y=\"36\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"42\" y=\"76\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y'</text>\n  <text x=\"42\" y=\"138\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n\n  <!-- Dòng x -->\n  <text x=\"115\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <text x=\"220\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-2</text>\n  <text x=\"360\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">1</text>\n  <text x=\"485\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n\n  <!-- Dòng y' -->\n  <text x=\"165\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"220\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"290\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"360\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"425\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n\n  <!-- Dòng y -->\n  <text x=\"115\" y=\"160\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <line x1=\"135\" y1=\"154\" x2=\"200\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"220\" y=\"112\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">4</text>\n  <line x1=\"240\" y1=\"116\" x2=\"340\" y2=\"154\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown)\" />\n  <text x=\"360\" y=\"162\" fill=\"#38bdf8\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-3</text>\n  <line x1=\"380\" y1=\"154\" x2=\"465\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"485\" y=\"112\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n</svg>",
    "options": [
      "$(-\\infty; -2)$",
      "$(-2; 1)$",
      "$(-\\infty; 1)$",
      "$(-3; 4)$"
    ],
    "correctIndex": 0,
    "explanation": "Dựa vào bảng biến thiên, ta thấy $y' > 0$ trên $(-\\infty; -2)$ và $(1; +\\infty)$. Do đó hàm số đồng biến trên mỗi khoảng $(-\\infty; -2)$ và $(1; +\\infty)$. Phương án đúng là $(-\\infty; -2)$."
  },
  {
    "id": "ai-12.1.2",
    "badge": "Luyện thêm 2 - Đọc khoảng nghịch biến từ bảng biến thiên",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng biến thiên như hình vẽ sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
    "svgDiagram": "<svg viewBox=\"0 0 540 180\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"bbtArrUp\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#38bdf8\" />\n    </marker>\n    <marker id=\"bbtArrDown\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#f43f5e\" />\n    </marker>\n  </defs>\n\n  <!-- Khung ngoài chữ nhật -->\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"160\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ dọc ngăn cột tiêu đề -->\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng x -->\n  <line x1=\"10\" y1=\"50\" x2=\"530\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng y' -->\n  <line x1=\"10\" y1=\"90\" x2=\"530\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Tiêu đề cột bên trái -->\n  <text x=\"42\" y=\"36\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"42\" y=\"76\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y'</text>\n  <text x=\"42\" y=\"138\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n\n  <!-- Dòng x -->\n  <text x=\"115\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <text x=\"220\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">0</text>\n  <text x=\"360\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">3</text>\n  <text x=\"485\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n\n  <!-- Dòng y' -->\n  <text x=\"165\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"220\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"290\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"360\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"425\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n\n  <!-- Dòng y -->\n  <text x=\"115\" y=\"160\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <line x1=\"135\" y1=\"154\" x2=\"200\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"220\" y=\"112\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">5</text>\n  <line x1=\"240\" y1=\"116\" x2=\"340\" y2=\"154\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown)\" />\n  <text x=\"360\" y=\"162\" fill=\"#38bdf8\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-1</text>\n  <line x1=\"380\" y1=\"154\" x2=\"465\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"485\" y=\"112\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n</svg>",
    "options": [
      "$(0; 3)$",
      "$(-\\infty; 0)$",
      "$(3; +\\infty)$",
      "$(-\\infty; 3)$"
    ],
    "correctIndex": 0,
    "explanation": "Dựa vào bảng biến thiên, trên khoảng $(0; 3)$ ta có $y' < 0$ và mũi tên biến thiên đi xuống từ $5$ về $-1$. Do đó hàm số nghịch biến trên khoảng $(0; 3)$."
  },
  {
    "id": "ai-12.1.3",
    "badge": "Luyện thêm 3 - Xét tính đơn điệu hàm bậc ba cơ bản",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Hàm số $y = x^3 - 6x^2 + 9x + 1$ nghịch biến trên khoảng nào sau đây?",
    "options": [
      "$(1; 3)$",
      "$(-\\infty; 1)$",
      "$(3; +\\infty)$",
      "$(0; 4)$"
    ],
    "correctIndex": 0,
    "explanation": "Tập xác định $D = \\mathbb{R}$. Đạo hàm $y' = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$.\\n$y' = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$.\\nTam thức bậc hai $y'$ mang dấu âm trên khoảng $(1; 3)$, do đó hàm số nghịch biến trên khoảng $(1; 3)$."
  },
  {
    "id": "ai-12.1.4",
    "badge": "Luyện thêm 4 - Xét tính đồng biến hàm bậc ba hệ số âm",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Hàm số $y = -x^3 + 12x - 3$ đồng biến trên khoảng nào dưới đây?",
    "options": [
      "$(-2; 2)$",
      "$(2; +\\infty)$",
      "$(-\\infty; -2)$",
      "$(-3; 3)$"
    ],
    "correctIndex": 0,
    "explanation": "Tập xác định $D = \\mathbb{R}$. Đạo hàm $y' = -3x^2 + 12 = -3(x^2 - 4)$.\\n$y' = 0 \\Leftrightarrow x = \\pm 2$.\\nVì hệ số $a = -3 < 0$ nên $y' > 0$ trên khoảng $(-2; 2)$. Do đó hàm số đồng biến trên khoảng $(-2; 2)$."
  },
  {
    "id": "ai-12.1.5",
    "badge": "Luyện thêm 5 - Tính đơn điệu của hàm phân thức bậc nhất",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Cho hàm số $y = \\frac{3x - 2}{x + 2}$. Mệnh đề nào sau đây đúng?",
    "options": [
      "Hàm số đồng biến trên từng khoảng $(-\\infty; -2)$ và $(-2; +\\infty)$.",
      "Hàm số nghịch biến trên từng khoảng $(-\\infty; -2)$ và $(-2; +\\infty)$.",
      "Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-2\\}$.",
      "Hàm số đồng biến trên khoảng $(-\\infty; +\\infty)$."
    ],
    "correctIndex": 0,
    "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-2\\}$.\\nĐạo hàm: $y' = \\frac{3 \\cdot 2 - (-2) \\cdot 1}{(x+2)^2} = \\frac{8}{(x+2)^2} > 0, \\forall x \\ne -2$.\\nDo đó hàm số đồng biến trên từng khoảng $(-\\infty; -2)$ và $(-2; +\\infty)$."
  },
  {
    "id": "ai-12.1.6",
    "badge": "Luyện thêm 6 - Nghịch biến của hàm phân thức bậc nhất",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Hàm số nào dưới đây nghịch biến trên từng khoảng xác định của nó?",
    "options": [
      "$y = \\frac{2x + 5}{x - 1}$",
      "$y = \\frac{x - 3}{x + 1}$",
      "$y = \\frac{2x - 1}{x + 3}$",
      "$y = \\frac{3x + 1}{x + 2}$"
    ],
    "correctIndex": 0,
    "explanation": "Xét hàm số $y = \\frac{2x + 5}{x - 1}$ có đạo hàm $y' = \\frac{2 \\cdot (-1) - 5 \\cdot 1}{(x-1)^2} = \\frac{-7}{(x-1)^2} < 0, \\forall x \\ne 1$. Do đó hàm số nghịch biến trên từng khoảng xác định $(-\\infty; 1)$ và $(1; +\\infty)$."
  },
  {
    "id": "ai-12.1.7",
    "badge": "Luyện thêm 7 - Phân biệt điểm cực tiểu của hàm số",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu đạo hàm như hình vẽ sau. Điểm cực tiểu của hàm số đã cho là:",
    "svgDiagram": "<svg viewBox=\"0 0 540 110\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"90\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"55\" x2=\"530\" y2=\"55\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <text x=\"45\" y=\"38\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"45\" y=\"84\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">f'(x)</text>\n\n  <text x=\"110\" y=\"38\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <text x=\"190\" y=\"38\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-3</text>\n  <text x=\"300\" y=\"38\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">0</text>\n  <text x=\"410\" y=\"38\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">2</text>\n  <text x=\"490\" y=\"38\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n\n  <text x=\"150\" y=\"84\" fill=\"#f43f5e\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"190\" y=\"84\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"245\" y=\"84\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"300\" y=\"84\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"355\" y=\"84\" fill=\"#f43f5e\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"410\" y=\"84\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"455\" y=\"84\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n</svg>",
    "options": [
      "$x = -3$ và $x = 2$",
      "$x = 0$",
      "$x = -3$",
      "$x = 2$"
    ],
    "correctIndex": 0,
    "explanation": "Đạo hàm $f'(x)$ đổi dấu từ âm sang dương khi đi qua các điểm $x = -3$ và $x = 2$. Do đó hàm số đạt cực tiểu tại hai điểm $x = -3$ và $x = 2$."
  },
  {
    "id": "ai-12.1.8",
    "badge": "Luyện thêm 8 - Tìm giá trị cực đại của hàm số bậc ba",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Giá trị cực đại của hàm số $y = -x^3 + 3x^2 + 1$ bằng:",
    "options": [
      "$5$",
      "$1$",
      "$2$",
      "$-3$"
    ],
    "correctIndex": 0,
    "explanation": "Tập xác định $D = \\mathbb{R}$. Đạo hàm $y' = -3x^2 + 6x = -3x(x - 2)$.\\n$y' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$.\\nTa thấy $y'$ đổi dấu từ dương sang âm khi qua $x = 2$, nên hàm số đạt cực đại tại $x = 2$.\\nGiá trị cực đại là $y_{\\text{CD}} = y(2) = -(2)^3 + 3(2)^2 + 1 = -8 + 12 + 1 = 5$."
  },
  {
    "id": "ai-12.1.9",
    "badge": "Luyện thêm 9 - Số điểm cực trị của hàm trùng phương",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Hàm số $y = x^4 + 4x^2 + 5$ có bao nhiêu điểm cực trị?",
    "options": [
      "$1$",
      "$3$",
      "$2$",
      "$0$"
    ],
    "correctIndex": 0,
    "explanation": "Đạo hàm $y' = 4x^3 + 8x = 4x(x^2 + 2)$.\\nVì $x^2 + 2 > 0, \\forall x$ nên phương trình $y' = 0 \\Leftrightarrow x = 0$.\\nĐạo hàm chỉ đổi dấu khi qua nghiệm đơn $x = 0$. Vậy hàm số có đúng 1 điểm cực trị (là điểm cực tiểu)."
  },
  {
    "id": "ai-12.1.10",
    "badge": "Luyện thêm 10 - Cực trị từ biểu thức đạo hàm phân tích",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x + 1)^2 (x - 2)^3 (x - 5)$. Số điểm cực trị của hàm số đã cho là:",
    "options": [
      "$2$",
      "$3$",
      "$1$",
      "$6$"
    ],
    "correctIndex": 0,
    "explanation": "Nghiệm của $f'(x) = 0$ gồm $x = -1$ (bội 2), $x = 2$ (bội 3), $x = 5$ (bội 1).\\nĐạo hàm chỉ đổi dấu khi qua các nghiệm bội lẻ là $x = 2$ và $x = 5$.\\nVậy hàm số có đúng 2 điểm cực trị."
  },
  {
    "id": "ai-12.1.11",
    "badge": "Luyện thêm 11 - Đọc số điểm cực trị từ đồ thị đạo hàm f'(x)",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Cho hàm số $y = f(x)$ có đồ thị đạo hàm $y = f'(x)$ được cho như hình vẽ sau. Số điểm cực trị của hàm số $y = f(x)$ là:",
    "svgDiagram": "<svg viewBox=\"0 0 420 230\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"10\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"380\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"388,120 376,115 376,125\" fill=\"#94a3b8\" />\n  <text x=\"382\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"240\" y1=\"205\" x2=\"240\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"240,17 235,29 245,29\" fill=\"#94a3b8\" />\n  <text x=\"250\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"226\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học -->\n  <path d=\"M 72 26.4 Q 200 333.6 328 26.4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"325\" y=\"40\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"120\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"120\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-3</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"280\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"280\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">1</text>\n\n  \n</svg>",
    "options": [
      "$2$",
      "$3$",
      "$1$",
      "$4$"
    ],
    "correctIndex": 0,
    "explanation": "Tại 2 giao điểm cắt ngang $x = -3$ và $x = 1$, đạo hàm $f'(x)$ đổi dấu. Do đó hàm số $y = f(x)$ có đúng 2 điểm cực trị."
  },
  {
    "id": "ai-12.1.12",
    "badge": "Luyện thêm 12 - Đọc khoảng nghịch biến từ đồ thị đạo hàm f'(x)",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Cho hàm số $y = f(x)$ có đồ thị đạo hàm $y = f'(x)$ như hình vẽ sau. Hàm số $y = f(x)$ nghịch biến trên khoảng nào dưới đây?",
    "svgDiagram": "<svg viewBox=\"0 0 420 230\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"10\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"380\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"388,120 376,115 376,125\" fill=\"#94a3b8\" />\n  <text x=\"382\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"160\" y1=\"205\" x2=\"160\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"160,17 155,29 165,29\" fill=\"#94a3b8\" />\n  <text x=\"170\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"146\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học -->\n  <path d=\"M 72 26.4 Q 200 333.6 328 26.4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"325\" y=\"40\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"120\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"120\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-1</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"280\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"280\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">3</text>\n\n  \n  <!-- Đỉnh parabol và các đường dóng tọa độ -->\n  <circle cx=\"200\" cy=\"180\" r=\"4\" fill=\"#ec4899\" />\n  <line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"180\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"200\" cy=\"120\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"200\" y=\"112\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">1</text>\n  \n  <line x1=\"160\" y1=\"180\" x2=\"200\" y2=\"180\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"160\" cy=\"180\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"144\" y=\"184\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-4</text>\n  \n</svg>",
    "options": [
      "$(-1; 3)$",
      "$(3; +\\infty)$",
      "$(-\\infty; -1)$",
      "$(0; 4)$"
    ],
    "correctIndex": 0,
    "explanation": "Hàm số $y = f(x)$ nghịch biến khi $f'(x) < 0$, tức là phần đồ thị của $y = f'(x)$ nằm hoàn toàn phía dưới trục hoành $Ox$. Quan sát hình vẽ, $f'(x) < 0$ trên khoảng $(-1; 3)$. Do đó hàm số nghịch biến trên khoảng $(-1; 3)$."
  },
  {
    "id": "ai-12.1.13",
    "badge": "Luyện thêm 13 - Tính đơn điệu của hàm phân thức bậc hai trên bậc nhất",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Hàm số $y = \\frac{x^2 + x + 1}{x + 1}$ đồng biến trên khoảng nào sau đây?",
    "options": [
      "$(0; +\\infty)$",
      "$(-2; -1)$",
      "$(-1; 0)$",
      "$(-2; 0)$"
    ],
    "correctIndex": 0,
    "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$.\\nBiến đổi $y = x + \\frac{1}{x+1} \\implies y' = 1 - \\frac{1}{(x+1)^2} = \\frac{(x+1)^2 - 1}{(x+1)^2} = \\frac{x(x+2)}{(x+1)^2}$.\\n$y' > 0 \\Leftrightarrow x(x+2) > 0$ và $x \\ne -1 \\Leftrightarrow x \\in (-\\infty; -2) \\cup (0; +\\infty)$.\\nDo đó hàm số đồng biến trên mỗi khoảng $(-\\infty; -2)$ và $(0; +\\infty)$. Khoảng $(0; +\\infty)$ là đáp án đúng."
  },
  {
    "id": "ai-12.1.14",
    "badge": "Luyện thêm 14 - Cực trị hàm phân thức bậc hai trên bậc nhất",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Điểm cực tiểu của hàm số $y = \\frac{x^2 - 4x + 5}{x - 2}$ là:",
    "options": [
      "$x = 3$",
      "$x = 1$",
      "$x = 2$",
      "$x = 5$"
    ],
    "correctIndex": 0,
    "explanation": "Biến đổi $y = x - 2 + \\frac{1}{x - 2} \\implies y' = 1 - \\frac{1}{(x-2)^2} = \\frac{(x-2)^2 - 1}{(x-2)^2} = \\frac{(x - 3)(x - 1)}{(x-2)^2}$.\\n$y' = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$.\\nĐạo hàm đổi dấu từ âm sang dương khi qua $x = 3$, do đó $x = 3$ là điểm cực tiểu của hàm số."
  },
  {
    "id": "ai-12.1.15",
    "badge": "Luyện thêm 15 - Xét tính đơn điệu hàm chứa căn thức",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Hàm số $y = \\sqrt{9 - x^2}$ nghịch biến trên khoảng nào dưới đây?",
    "options": [
      "$(0; 3)$",
      "$(-3; 0)$",
      "$(-3; 3)$",
      "$(0; +\\infty)$"
    ],
    "correctIndex": 0,
    "explanation": "Tập xác định $D = [-3; 3]$.\\nVới $x \\in (-3; 3)$, đạo hàm $y' = \\frac{-x}{\\sqrt{9 - x^2}}$.\\n$y' < 0 \\Leftrightarrow -x < 0 \\Leftrightarrow x > 0$. Kết hợp tập xác định suy ra $x \\in (0; 3)$.\\nVậy hàm số nghịch biến trên khoảng $(0; 3)$."
  },
  {
    "id": "ai-12.1.16",
    "badge": "Luyện thêm 16 - Tìm m để hàm bậc ba đồng biến trên R",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + 9x + 2$ đồng biến trên toàn trục số $\\mathbb{R}$.",
    "options": [
      "$-3 \\le m \\le 3$",
      "$-3 < m < 3$",
      "$m \\le -3$ hoặc $m \\ge 3$",
      "$m \\le 3$"
    ],
    "correctIndex": 0,
    "explanation": "Đạo hàm: $y' = x^2 - 2mx + 9$. Để hàm số đồng biến trên $\\mathbb{R}$ thì $\\Delta' = m^2 - 9 \\le 0 \\Leftrightarrow -3 \\le m \\le 3$."
  },
  {
    "id": "ai-12.1.17",
    "badge": "Luyện thêm 17 - Tìm m để hàm phân thức nghịch biến",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-10; 10]$ để hàm số $y = \\frac{mx - 2}{x + 3}$ nghịch biến trên từng khoảng xác định?",
    "options": [
      "$10$",
      "$11$",
      "$9$",
      "$8$"
    ],
    "correctIndex": 0,
    "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-3\\}$.\\nĐạo hàm $y' = \\frac{3m - (-2)}{(x+3)^2} = \\frac{3m + 2}{(x+3)^2}$.\\nHàm số nghịch biến trên từng khoảng xác định $\\Leftrightarrow y' < 0, \\forall x \\ne -3 \\Leftrightarrow 3m + 2 < 0 \\Leftrightarrow m < -\\frac{2}{3}$.\\nVì $m \\in \\mathbb{Z}$ và $m \\in [-10; 10]$ nên $m \\in \\{-10; -9; -8; -7; -6; -5; -4; -3; -2; -1\\}$.\\nSố giá trị nguyên thỏa mãn là $-1 - (-10) + 1 = 10$ giá trị."
  },
  {
    "id": "ai-12.1.18",
    "badge": "Luyện thêm 18 - Tìm m để hàm bậc ba có hai điểm cực trị",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = x^3 - 3x^2 + 3(1 - m)x + 2$ có hai điểm cực trị.",
    "options": [
      "$m > 0$",
      "$m < 0$",
      "$m \\ge 0$",
      "$m \\le 0$"
    ],
    "correctIndex": 0,
    "explanation": "Đạo hàm $y' = 3x^2 - 6x + 3(1 - m) = 3[x^2 - 2x + 1 - m]$.\\nHàm số có 2 điểm cực trị $\\Leftrightarrow y' = 0$ có 2 nghiệm phân biệt $\\Leftrightarrow \\Delta' = (-1)^2 - 1(1 - m) = m > 0$."
  },
  {
    "id": "ai-12.1.19",
    "badge": "Luyện thêm 19 - Ứng dụng nồng độ dược phẩm theo thời gian",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Nồng độ một chất phản ứng trong dung dịch sau $t$ phút ($t \\ge 0$) được xác định bởi công thức $C(t) = \\frac{6t}{t^2 + 9}$ (đơn vị: mol/L). Sau bao nhiêu phút thì nồng độ chất phản ứng đạt giá trị cực đại?",
    "options": [
      "$3$ phút",
      "$2$ phút",
      "$9$ phút",
      "$6$ phút"
    ],
    "correctIndex": 0,
    "explanation": "Đạo hàm: $C'(t) = \\frac{6(t^2 + 9) - 6t(2t)}{(t^2 + 9)^2} = \\frac{54 - 6t^2}{(t^2 + 9)^2} = \\frac{6(9 - t^2)}{(t^2 + 9)^2}$.\\n$C'(t) = 0 \\Leftrightarrow t = 3$ (do $t \\ge 0$).\\nĐạo hàm đổi dấu từ dương sang âm khi qua $t = 3$. Do đó nồng độ đạt cực đại sau đúng 3 phút."
  },
  {
    "id": "ai-12.1.20",
    "badge": "Luyện thêm 20 - Ứng dụng kinh tế: Tăng trưởng doanh thu",
    "isAiGenerated": true,
    "source": "Bộ Đề Tự Luyện Toán 12 - Phát triển Bài 1",
    "question": "Doanh thu $R(x)$ (triệu đồng) của một xí nghiệp khi sản xuất và bán $x$ tấn sản phẩm ($0 \\le x \\le 40$) được mô hình bởi hàm số: $R(x) = -x^3 + 30x^2 + 900x$. Khoảng sản xuất nào dưới đây làm cho doanh thu của xí nghiệp tiếp tục tăng trưởng (hàm số đồng biến)?",
    "options": [
      "$(0; 30)$",
      "$(30; 40)$",
      "$(32; 38)$",
      "$(25; 35)$"
    ],
    "correctIndex": 0,
    "explanation": "Đạo hàm: $R'(x) = -3x^2 + 60x + 900 = -3(x^2 - 20x - 300) = -3(x - 30)(x + 10)$.\\n$R'(x) = 0 \\Leftrightarrow x = 30$ (do $x \\ge 0$).\\nVới $x \\in (0; 30)$, $R'(x) > 0$, hàm số $R(x)$ đồng biến, nghĩa là doanh thu tiếp tục tăng trưởng.\\nVới $x \\in (30; 40)$, $R'(x) < 0$, doanh thu giảm.\\nVậy khoảng sản xuất làm doanh thu tiếp tục tăng trưởng là $(0; 30)$."
  }
],
    trueFalseQuestions: [
  {
    "id": "ai-tf-12.1.1",
    "badge": "Luyện thêm TF 1 - Khảo sát hàm bậc ba",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = f(x) = 2x^3 - 3x^2 - 12x + 5$ xác định và liên tục trên $\\mathbb{R}$. Xét tính đúng hoặc sai của các khẳng định sau:",
    "subItems": [
      {
        "id": "a",
        "text": "Đạo hàm của hàm số là $f'(x) = 6x^2 - 6x - 12$.",
        "correctAnswer": true,
        "explanation": "Ta có $(2x^3 - 3x^2 - 12x + 5)' = 6x^2 - 6x - 12$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Hàm số đồng biến trên khoảng $(-1; 2)$ và nghịch biến trên khoảng $(2; +\\infty)$.",
        "correctAnswer": false,
        "explanation": "$f'(x) = 6(x^2 - x - 2) = 6(x + 1)(x - 2)$. $f'(x) < 0$ trên $(-1; 2)$ nên hàm số nghịch biến trên $(-1; 2)$ và đồng biến trên $(-\\infty; -1) \\cup (2; +\\infty)$. Khẳng định này sai."
      },
      {
        "id": "c",
        "text": "Hàm số đạt cực đại tại $x = -1$ và giá trị cực đại là $y_{\\text{CD}} = 12$.",
        "correctAnswer": true,
        "explanation": "Đạo hàm đổi dấu từ dương sang âm khi qua $x = -1$, nên hàm số đạt cực đại tại $x = -1$. Giá trị cực đại là $f(-1) = 2(-1) - 3(1) - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12$. Khẳng định này đúng."
      },
      {
        "id": "d",
        "text": "Tích hai giá trị cực trị của hàm số là $y_{\\text{CD}} \\cdot y_{\\text{CT}} = -180$.",
        "correctAnswer": true,
        "explanation": "Hàm số đạt cực tiểu tại $x = 2$ với $y_{\\text{CT}} = f(2) = 16 - 12 - 24 + 5 = -15$. Tích hai giá trị cực trị là $12 \\cdot (-15) = -180$. Khẳng định này đúng."
      }
    ]
  },
  {
    "id": "ai-tf-12.1.2",
    "badge": "Luyện thêm TF 2 - Tính đơn điệu hàm phân thức bậc nhất",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = \\frac{3x - 1}{x + 2}$. Xét tính đúng hoặc sai của các khẳng định sau:",
    "subItems": [
      {
        "id": "a",
        "text": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-2\\}$.",
        "correctAnswer": true,
        "explanation": "Mẫu số $x + 2 \\ne 0 \\Leftrightarrow x \\ne -2$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Đạo hàm của hàm số là $y' = \\frac{7}{(x + 2)^2}$ với mọi $x \\ne -2$.",
        "correctAnswer": true,
        "explanation": "Ta có $y' = \\frac{3 \\cdot 2 - (-1) \\cdot 1}{(x+2)^2} = \\frac{6 + 1}{(x+2)^2} = \\frac{7}{(x+2)^2}$. Khẳng định này đúng."
      },
      {
        "id": "c",
        "text": "Hàm số đồng biến trên toàn bộ tập xác định $\\mathbb{R} \\setminus \\{-2\\}$.",
        "correctAnswer": false,
        "explanation": "Phải kết luận hàm số đồng biến trên từng khoảng $(-\\infty; -2)$ và $(-2; +\\infty)$, không được dùng ký hiệu tập hợp $\\setminus$. Khẳng định này sai."
      },
      {
        "id": "d",
        "text": "Hàm số không có điểm cực trị.",
        "correctAnswer": true,
        "explanation": "Vì $y' = \\frac{7}{(x+2)^2} > 0$ với mọi $x \\ne -2$ nên đạo hàm không đổi dấu, hàm số không có cực trị. Khẳng định này đúng."
      }
    ]
  },
  {
    "id": "ai-tf-12.1.3",
    "badge": "Luyện thêm TF 3 - Khảo sát hàm phân thức bậc hai trên bậc nhất",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = \\frac{x^2 - 2x + 4}{x - 1}$. Xét tính đúng hoặc sai của các khẳng định sau:",
    "subItems": [
      {
        "id": "a",
        "text": "Đạo hàm của hàm số là $y' = \\frac{x^2 - 2x - 2}{(x - 1)^2}$.",
        "correctAnswer": true,
        "explanation": "Biến đổi $y = x - 1 + \\frac{3}{x - 1} \\implies y' = 1 - \\frac{3}{(x-1)^2} = \\frac{(x-1)^2 - 3}{(x-1)^2} = \\frac{x^2 - 2x - 2}{(x-1)^2}$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Hàm số có hai điểm cực trị là $x = 1 - \\sqrt{3}$ và $x = 1 + \\sqrt{3}$.",
        "correctAnswer": true,
        "explanation": "Phương trình $y' = 0 \\Leftrightarrow x^2 - 2x - 2 = 0 \\Leftrightarrow x = 1 \\pm \\sqrt{3}$. Hai nghiệm này phân biệt và khác 1, qua đó $y'$ đổi dấu nên đây là 2 điểm cực trị. Khẳng định này đúng."
      },
      {
        "id": "c",
        "text": "Hàm số đồng biến trên khoảng $(1 - \\sqrt{3}; 1 + \\sqrt{3})$.",
        "correctAnswer": false,
        "explanation": "Tam thức $x^2 - 2x - 2 < 0$ trên $(1 - \\sqrt{3}; 1 + \\sqrt{3})$ nên $y' < 0$. Do đó hàm số nghịch biến trên $(1 - \\sqrt{3}; 1)$ và $(1; 1 + \\sqrt{3})$. Khẳng định này sai."
      },
      {
        "id": "d",
        "text": "Giá trị cực đại của hàm số nhỏ hơn giá trị cực tiểu của hàm số.",
        "correctAnswer": true,
        "explanation": "Hàm số đạt cực đại tại $x = 1 - \\sqrt{3} < 1$ với $y_{\\text{CD}} = -2\\sqrt{3} < 0$. Hàm số đạt cực tiểu tại $x = 1 + \\sqrt{3} > 1$ với $y_{\\text{CT}} = 2\\sqrt{3} > 0$. Như vậy $y_{\\text{CD}} < y_{\\text{CT}}$, một tính chất đặc trưng của nhánh hyperbol xiên. Khẳng định này đúng."
      }
    ]
  },
  {
    "id": "ai-tf-12.1.4",
    "badge": "Luyện thêm TF 4 - Đọc đồ thị đạo hàm f'(x)",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Đồ thị đạo hàm $y = f'(x)$ là một đường cong parabol như hình vẽ sau. Xét tính đúng hoặc sai của các khẳng định sau:",
    "svgDiagram": "<svg viewBox=\"0 0 420 230\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"10\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"380\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"388,120 376,115 376,125\" fill=\"#94a3b8\" />\n  <text x=\"382\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"200\" y1=\"205\" x2=\"200\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"200,17 195,29 205,29\" fill=\"#94a3b8\" />\n  <text x=\"210\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"186\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học -->\n  <path d=\"M 72 26.4 Q 200 333.6 328 26.4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"325\" y=\"40\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"120\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"120\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-√3</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"280\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"280\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">√3</text>\n\n  \n  <!-- Đỉnh parabol và các đường dóng tọa độ -->\n  <circle cx=\"200\" cy=\"180\" r=\"4\" fill=\"#ec4899\" />\n  \n  \n  \n  \n  <line x1=\"200\" y1=\"180\" x2=\"200\" y2=\"180\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"200\" cy=\"180\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"184\" y=\"184\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-3</text>\n  \n</svg>",
    "subItems": [
      {
        "id": "a",
        "text": "Biểu thức của đạo hàm là $f'(x) = x^2 - 3$.",
        "correctAnswer": true,
        "explanation": "Parabol có dạng $f'(x) = ax^2 - 3$. Cắt trục hoành tại $x = \\pm \\sqrt{3} \\implies a(3) - 3 = 0 \\implies a = 1$. Vậy $f'(x) = x^2 - 3$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Hàm số $y = f(x)$ đồng biến trên khoảng $(-\\sqrt{3}; \\sqrt{3})$.",
        "correctAnswer": false,
        "explanation": "Trên khoảng $(-\\sqrt{3}; \\sqrt{3})$, parabol nằm dưới trục hoành nên $f'(x) < 0$, suy ra hàm số nghịch biến. Khẳng định này sai."
      },
      {
        "id": "c",
        "text": "Điểm cực đại của hàm số $y = f(x)$ là $x = -\\sqrt{3}$.",
        "correctAnswer": true,
        "explanation": "Khi đi qua $x = -\\sqrt{3}$, $f'(x)$ đổi dấu từ dương sang âm nên $x = -\\sqrt{3}$ là điểm cực đại của hàm số. Khẳng định này đúng."
      },
      {
        "id": "d",
        "text": "Hàm số $g(x) = f(1 - x)$ nghịch biến trên khoảng $(1 - \\sqrt{3}; 1 + \\sqrt{3})$.",
        "correctAnswer": false,
        "explanation": "Ta có $g'(x) = -f'(1 - x)$. Để $g(x)$ nghịch biến thì $g'(x) < 0 \\Leftrightarrow -f'(1 - x) < 0 \\Leftrightarrow f'(1 - x) > 0 \\Leftrightarrow 1 - x < -\\sqrt{3}$ hoặc $1 - x > \\sqrt{3} \\Leftrightarrow x > 1 + \\sqrt{3}$ hoặc $x < 1 - \\sqrt{3}$. Vậy trên $(1 - \\sqrt{3}; 1 + \\sqrt{3})$ thì $g'(x) > 0$ (đồng biến). Khẳng định này sai."
      }
    ]
  },
  {
    "id": "ai-tf-12.1.5",
    "badge": "Luyện thêm TF 5 - Khảo sát hàm chứa căn thức",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = f(x) = \\sqrt{4x - x^2}$. Xét tính đúng hoặc sai của các khẳng định sau:",
    "subItems": [
      {
        "id": "a",
        "text": "Tập xác định của hàm số là đoạn $[0; 4]$.",
        "correctAnswer": true,
        "explanation": "Điều kiện: $4x - x^2 \\ge 0 \\Leftrightarrow 0 \\le x \\le 4$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Đạo hàm của hàm số với $x \\in (0; 4)$ là $f'(x) = \\frac{2 - x}{\\sqrt{4x - x^2}}$.",
        "correctAnswer": true,
        "explanation": "Ta có $f'(x) = \\frac{4 - 2x}{2\\sqrt{4x - x^2}} = \\frac{2 - x}{\\sqrt{4x - x^2}}$. Khẳng định này đúng."
      },
      {
        "id": "c",
        "text": "Hàm số đồng biến trên khoảng $(0; 2)$ và nghịch biến trên khoảng $(2; 4)$.",
        "correctAnswer": true,
        "explanation": "Với $x \\in (0; 2)$, $2 - x > 0 \\implies f'(x) > 0$ (đồng biến). Với $x \\in (2; 4)$, $2 - x < 0 \\implies f'(x) < 0$ (nghịch biến). Khẳng định này đúng."
      },
      {
        "id": "d",
        "text": "Giá trị cực đại của hàm số bằng $4$.",
        "correctAnswer": false,
        "explanation": "Hàm số đạt cực đại tại $x = 2$, giá trị cực đại là $f(2) = \\sqrt{4(2) - 2^2} = \\sqrt{8 - 4} = 2 \\ne 4$. Khẳng định này sai."
      }
    ]
  },
  {
    "id": "ai-tf-12.1.6",
    "badge": "Luyện thêm TF 6 - Bài toán tham số m hàm bậc ba",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = \\frac{1}{3}x^3 - (m + 1)x^2 + (m^2 + 2m)x - 5$ với $m$ là tham số thực. Xét tính đúng hoặc sai của các khẳng định sau:",
    "subItems": [
      {
        "id": "a",
        "text": "Đạo hàm của hàm số là $y' = x^2 - 2(m + 1)x + m^2 + 2m$.",
        "correctAnswer": true,
        "explanation": "Tính đạo hàm: $(\\frac{1}{3}x^3)' = x^2$, $(-(m+1)x^2)' = -2(m+1)x$, $((m^2+2m)x)' = m^2+2m$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Biệt thức thu gọn của tam thức bậc hai $y'$ là $\\Delta' = 1$.",
        "correctAnswer": true,
        "explanation": "Ta có $\\Delta' = (m + 1)^2 - 1 \\cdot (m^2 + 2m) = m^2 + 2m + 1 - m^2 - 2m = 1 > 0$. Khẳng định này đúng."
      },
      {
        "id": "c",
        "text": "Tồn tại ít nhất một giá trị của $m$ để hàm số đồng biến trên toàn bộ $\\mathbb{R}$.",
        "correctAnswer": false,
        "explanation": "Vì $\\Delta' = 1 > 0$ với mọi $m$ nên tam thức $y' = 0$ luôn có 2 nghiệm phân biệt với mọi $m$. Do đó hàm số luôn có khoảng nghịch biến và không bao giờ đồng biến trên toàn $\\mathbb{R}$. Khẳng định này sai."
      },
      {
        "id": "d",
        "text": "Đồ thị hàm số luôn có hai điểm cực trị với mọi $m \\in \\mathbb{R}$.",
        "correctAnswer": true,
        "explanation": "Vì phương trình $y' = 0$ luôn có hai nghiệm phân biệt $x_1 = m, x_2 = m + 2$ với mọi $m$, nên đồ thị hàm số luôn có hai điểm cực trị với mọi $m$. Khẳng định này đúng."
      }
    ]
  },
  {
    "id": "ai-tf-12.1.7",
    "badge": "Luyện thêm TF 7 - Bài toán tham số m hàm phân thức",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = \\frac{mx - 9}{x - m}$ với $m$ là tham số thực. Xét tính đúng hoặc sai của các khẳng định sau:",
    "subItems": [
      {
        "id": "a",
        "text": "Điều kiện xác định của hàm số là $x \\ne m$.",
        "correctAnswer": true,
        "explanation": "Mẫu số $x - m \\ne 0 \\Leftrightarrow x \\ne m$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Đạo hàm của hàm số là $y' = \\frac{-m^2 + 9}{(x - m)^2}$.",
        "correctAnswer": true,
        "explanation": "Ta có $y' = \\frac{m(-m) - (-9)(1)}{(x-m)^2} = \\frac{-m^2 + 9}{(x-m)^2}$. Khẳng định này đúng."
      },
      {
        "id": "c",
        "text": "Hàm số đồng biến trên từng khoảng xác định khi $-3 < m < 3$.",
        "correctAnswer": true,
        "explanation": "$y' > 0 \\Leftrightarrow -m^2 + 9 > 0 \\Leftrightarrow m^2 < 9 \\Leftrightarrow -3 < m < 3$. Khẳng định này đúng."
      },
      {
        "id": "d",
        "text": "Có đúng 5 giá trị nguyên của $m$ để hàm số đồng biến trên từng khoảng xác định.",
        "correctAnswer": true,
        "explanation": "Các giá trị nguyên thỏa mãn $-3 < m < 3$ là $m \\in \\{-2; -1; 0; 1; 2\\}$. Có đúng 5 giá trị nguyên. Khẳng định này đúng."
      }
    ]
  },
  {
    "id": "ai-tf-12.1.8",
    "badge": "Luyện thêm TF 8 - Mô hình lưu lượng nước trong hồ thủy điện",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Lưu lượng nước xả qua cửa đập thủy điện (đơn vị: nghìn $m^3$/phút) tại thời điểm $t$ giờ ($0 \\le t \\le 10$) sau khi mở cửa xả được mô hình bởi hàm số: $Q(t) = \\frac{8t}{t^2 + 16}$. Xét tính đúng hoặc sai của các khẳng định sau:",
    "subItems": [
      {
        "id": "a",
        "text": "Đạo hàm của hàm lưu lượng là $Q'(t) = \\frac{8(16 - t^2)}{(t^2 + 16)^2}$.",
        "correctAnswer": true,
        "explanation": "Ta có $Q'(t) = \\frac{8(t^2 + 16) - 8t(2t)}{(t^2 + 16)^2} = \\frac{128 - 8t^2}{(t^2 + 16)^2} = \\frac{8(16 - t^2)}{(t^2 + 16)^2}$. Khẳng định này đúng."
      },
      {
        "id": "b",
        "text": "Lưu lượng nước xả qua đập tăng liên tục trong 4 giờ đầu tiên kể từ khi mở cửa xả.",
        "correctAnswer": true,
        "explanation": "Với $t \\in (0; 4)$, $16 - t^2 > 0 \\implies Q'(t) > 0$. Do đó lưu lượng nước tăng liên tục trong 4 giờ đầu tiên. Khẳng định này đúng."
      },
      {
        "id": "c",
        "text": "Lưu lượng xả đạt giá trị lớn nhất tại thời điểm $t = 4$ giờ và giá trị lớn nhất bằng $1$ nghìn $m^3$/phút.",
        "correctAnswer": true,
        "explanation": "Tại $t = 4$, $Q(4) = \\frac{8 \\times 4}{4^2 + 16} = \\frac{32}{32} = 1$ nghìn $m^3$/phút. Khẳng định này đúng."
      },
      {
        "id": "d",
        "text": "Sau thời điểm $t = 4$ giờ, lưu lượng xả qua cửa đập tiếp tục tăng thêm một giai đoạn ngắn trước khi giảm.",
        "correctAnswer": false,
        "explanation": "Với mọi $t > 4$, $16 - t^2 < 0 \\implies Q'(t) < 0$, do đó hàm số nghịch biến hoàn toàn trên khoảng $(4; 10]$. Lưu lượng nước giảm liên tục, không có hiện tượng tăng lại. Khẳng định này sai."
      }
    ]
  }
],
    shortAnswerQuestions: [
  {
    "id": "ai-sa-12.1.1",
    "badge": "Luyện thêm SA 1 - Giá trị cực đại hàm bậc ba",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số bậc ba $y = x^3 - 3x^2 - 9x + 15$. Giá trị cực đại của hàm số đã cho bằng bao nhiêu?",
    "correctAnswer": "20",
    "acceptableAnswers": [
      "20",
      "20.0"
    ],
    "explanation": "Đạo hàm: $y' = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3)$.\\n$y' = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$.\\nĐạo hàm đổi dấu từ dương sang âm khi qua $x = -1$, do đó hàm số đạt cực đại tại $x = -1$.\\nGiá trị cực đại: $y_{\\text{CD}} = y(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 15 = -1 - 3 + 9 + 15 = 20$."
  },
  {
    "id": "ai-sa-12.1.2",
    "badge": "Luyện thêm SA 2 - Tổng bình phương hai điểm cực trị",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = 2x^3 - 3x^2 - 12x + 7$. Gọi $x_1, x_2$ là hai điểm cực trị của hàm số. Tính giá trị của biểu thức $P = x_1^2 + x_2^2$.",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "explanation": "Ta có $y' = 6x^2 - 6x - 12 = 6(x^2 - x - 2)$.\\n$y' = 0 \\Leftrightarrow x = -1$ hoặc $x = 2$.\\nDo đó hai điểm cực trị là $x_1 = -1$ và $x_2 = 2$.\\nVậy $P = (-1)^2 + 2^2 = 1 + 4 = 5$."
  },
  {
    "id": "ai-sa-12.1.3",
    "badge": "Luyện thêm SA 3 - Số điểm cực trị từ đạo hàm nhân tử",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ có đạo hàm $f'(x) = x^4 (x - 2)^5 (x + 3)^2 (x - 4)^3$. Hàm số đã cho có bao nhiêu điểm cực trị?",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "explanation": "Các nghiệm của $f'(x) = 0$ là: $x = 0$ (bội 4), $x = 2$ (bội 5), $x = -3$ (bội 2), $x = 4$ (bội 3).\\nĐạo hàm chỉ đổi dấu khi đi qua các nghiệm bội lẻ là $x = 2$ và $x = 4$.\\nDo đó hàm số có đúng 2 điểm cực trị."
  },
  {
    "id": "ai-sa-12.1.4",
    "badge": "Luyện thêm SA 4 - Cực tiểu hàm phân thức bậc hai trên bậc nhất",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = \\frac{x^2 - x + 4}{x - 1}$. Tìm giá trị cực tiểu của hàm số đã cho.",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5.0"
    ],
    "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.\\nBiến đổi $y = x + \\frac{4}{x - 1} = x - 1 + \\frac{4}{x - 1} + 1$.\\nĐạo hàm $y' = 1 - \\frac{4}{(x-1)^2} = \\frac{(x-1)^2 - 4}{(x-1)^2} = \\frac{(x - 3)(x + 1)}{(x-1)^2}$.\\n$y' = 0 \\Leftrightarrow x = 3$ hoặc $x = -1$.\\nĐạo hàm đổi dấu từ âm sang dương khi qua $x = 3$, do đó hàm số đạt cực tiểu tại $x = 3$.\\nGiá trị cực tiểu là $y(3) = \\frac{9 - 3 + 4}{3 - 1} = \\frac{10}{2} = 5$."
  },
  {
    "id": "ai-sa-12.1.5",
    "badge": "Luyện thêm SA 5 - Đếm số giá trị nguyên tham số m",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-8; 8]$ để hàm số $y = \\frac{1}{3}x^3 - 2mx^2 + 16x - 3$ đồng biến trên toàn trục số $\\mathbb{R}$?",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "explanation": "Đạo hàm: $y' = x^2 - 4mx + 16$.\\nHàm số đồng biến trên $\\mathbb{R} \\Leftrightarrow y' \\ge 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta' = 4m^2 - 16 \\le 0 \\Leftrightarrow m^2 \\le 4 \\Leftrightarrow -2 \\le m \\le 2$.\\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-2; -1; 0; 1; 2\\}$.\\nSố giá trị nguyên thỏa mãn là 5 giá trị."
  },
  {
    "id": "ai-sa-12.1.6",
    "badge": "Luyện thêm SA 6 - Đếm tham số m hàm phân thức",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-10; 10]$ để hàm số $y = \\frac{x + 3m}{x + 6}$ đồng biến trên từng khoảng xác định?",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12"
    ],
    "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-6\\}$.\\nĐạo hàm: $y' = \\frac{1 \\cdot 6 - 3m \\cdot 1}{(x+6)^2} = \\frac{6 - 3m}{(x+6)^2}$.\\nHàm số đồng biến trên từng khoảng xác định $\\Leftrightarrow 6 - 3m > 0 \\Leftrightarrow 3m < 6 \\Leftrightarrow m < 2$.\\nKết hợp $m \\in \\mathbb{Z}$ và $m \\in [-10; 10]$, ta được $m \\in \\{-10; -9; ...; 0; 1\\}$.\\nSố giá trị nguyên thỏa mãn là $1 - (-10) + 1 = 12$ giá trị."
  },
  {
    "id": "ai-sa-12.1.7",
    "badge": "Luyện thêm SA 7 - Bình phương khoảng cách giữa hai điểm cực trị",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = 2x^3 - 3x^2 - 12x + 1$ có hai điểm cực trị là $A$ và $B$. Tính bình phương độ dài đoạn thẳng $AB^2$.",
    "correctAnswer": "738",
    "acceptableAnswers": [
      "738"
    ],
    "explanation": "Ta có $y' = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x + 1)(x - 2)$.\\n$y' = 0 \\Leftrightarrow x = -1$ hoặc $x = 2$.\\n- Với $x = -1$: $y(-1) = 2(-1) - 3(1) - 12(-1) + 1 = 8 \\implies A(-1; 8)$.\\n- Với $x = 2$: $y(2) = 2(8) - 3(4) - 12(2) + 1 = 16 - 12 - 24 + 1 = -19 \\implies B(2; -19)$.\\nKhoảng cách giữa hai điểm cực trị:\\n$\\Delta x = 2 - (-1) = 3$, $\\Delta y = -19 - 8 = -27$.\\nVậy $AB^2 = 3^2 + (-27)^2 = 9 + 729 = 738$."
  },
  {
    "id": "ai-sa-12.1.8",
    "badge": "Luyện thêm SA 8 - Cực trị hàm hợp g(x) = f(a - bx)",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$ và đồ thị $y = f'(x)$ như hình vẽ sau. Hỏi hàm số $g(x) = f(3 - 4x)$ có bao nhiêu điểm cực trị?",
    "svgDiagram": "<svg viewBox=\"0 0 420 230\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"10\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"380\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"388,120 376,115 376,125\" fill=\"#94a3b8\" />\n  <text x=\"382\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"147\" y1=\"205\" x2=\"147\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"147,17 142,29 152,29\" fill=\"#94a3b8\" />\n  <text x=\"157\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"133\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học -->\n  <path d=\"M 72 26.4 Q 200 333.6 328 26.4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"325\" y=\"40\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"120\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"120\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-1</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"280\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"280\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">5</text>\n\n  \n</svg>",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "explanation": "Quan sát đồ thị, $f'(x)$ cắt trục hoành tại 2 điểm phân biệt $x = -1$ và $x = 5$.\\nTa có $g'(x) = -4 f'(3 - 4x)$.\\nPhương trình $g'(x) = 0 \\Leftrightarrow f'(3 - 4x) = 0 \\Leftrightarrow 3 - 4x = -1$ hoặc $3 - 4x = 5$.\\n$\\Leftrightarrow 4x = 4 \\implies x = 1$, hoặc $4x = -2 \\implies x = -0.5$.\\nVì đây là các nghiệm đơn nên $g'(x)$ đổi dấu qua cả 2 nghiệm này. Vậy hàm số $g(x)$ có đúng 2 điểm cực trị."
  },
  {
    "id": "ai-sa-12.1.9",
    "badge": "Luyện thêm SA 9 - Độ dài khoảng nghịch biến hàm chứa căn thức",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Cho hàm số $y = \\sqrt{16 - x^2}$. Tính độ dài của khoảng nghịch biến của hàm số đã cho.",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "explanation": "Tập xác định $D = [-4; 4]$.\\nĐạo hàm $y' = \\frac{-x}{\\sqrt{16 - x^2}}$ với $x \\in (-4; 4)$.\\n$y' < 0 \\Leftrightarrow -x < 0 \\Leftrightarrow x > 0$. Kết hợp tập xác định suy ra hàm số nghịch biến trên khoảng $(0; 4)$.\\nĐộ dài khoảng nghịch biến là $4 - 0 = 4$."
  },
  {
    "id": "ai-sa-12.1.10",
    "badge": "Luyện thêm SA 10 - Tìm hệ số hàm bậc ba",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Biết rằng đồ thị hàm số $y = x^3 + ax^2 + bx + 1$ đạt cực trị tại hai điểm $x = 1$ và $x = 3$. Tính giá trị của biểu thức $S = a + b$.",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "explanation": "Đạo hàm $y' = 3x^2 + 2ax + b$.\\nVì $x = 1$ và $x = 3$ là các điểm cực trị nên chúng là nghiệm của $y' = 0$:\\nTheo định lý Vi-ét cho phương trình bậc hai $3x^2 + 2ax + b = 0$:\\n$\\begin{cases} 1 + 3 = -\\frac{2a}{3} \\\\ 1 \\cdot 3 = \\frac{b}{3} \\end{cases} \\Leftrightarrow \\begin{cases} -\\frac{2a}{3} = 4 \\\\ \\frac{b}{3} = 3 \\end{cases} \\Leftrightarrow \\begin{cases} a = -6 \\\\ b = 9 \\end{cases}$.\\nVậy $S = a + b = -6 + 9 = 3$."
  },
  {
    "id": "ai-sa-12.1.11",
    "badge": "Luyện thêm SA 11 - Ứng dụng thực tế: Chi phí nhỏ nhất",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Chi phí trung bình để sản xuất $x$ tấn sản phẩm trong một ngày tại một nhà máy được cho bởi công thức: $f(x) = 2x + 150 + \\frac{1800}{x}$ (nghìn đồng/tấn) với $x > 0$. Số tấn sản phẩm cần sản xuất để chi phí trung bình nhỏ nhất là bao nhiêu?",
    "correctAnswer": "30",
    "acceptableAnswers": [
      "30"
    ],
    "explanation": "Đạo hàm: $f'(x) = 2 - \\frac{1800}{x^2} = \\frac{2x^2 - 1800}{x^2}$.\\n$f'(x) = 0 \\Leftrightarrow 2x^2 = 1800 \\Leftrightarrow x^2 = 900 \\Leftrightarrow x = 30$ (do $x > 0$).\\nĐạo hàm đổi dấu từ âm sang dương qua $x = 30$, do đó chi phí trung bình nhỏ nhất khi sản xuất 30 tấn sản phẩm."
  },
  {
    "id": "ai-sa-12.1.12",
    "badge": "Luyện thêm SA 12 - Vận tốc cực đại của vật thể",
    "source": "Bộ Đề Tự Luyện Toán 12 - Bài 1",
    "prompt": "Một vật chuyển động có phương trình vận tốc theo thời gian $t$ (giây, $0 \\le t \\le 10$) là: $v(t) = -t^3 + 6t^2 + 36t$ (m/s). Sau bao nhiêu giây kể từ lúc bắt đầu chuyển động thì vận tốc của vật đạt giá trị cực đại?",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6",
      "6.0"
    ],
    "explanation": "Xét hàm số $v(t) = -t^3 + 6t^2 + 36t$ trên đoạn $[0; 10]$.\\nGia tốc $a(t) = v'(t) = -3t^2 + 12t + 36 = -3(t^2 - 4t - 12)$.\\n$v'(t) = 0 \\Leftrightarrow t^2 - 4t - 12 = 0 \\Leftrightarrow (t - 6)(t + 2) = 0 \\Leftrightarrow t = 6$ (do $t \\ge 0$).\\n- Với $0 < t < 6$: $v'(t) > 0$, vận tốc vật tăng.\\n- Với $t > 6$: $v'(t) < 0$, vận tốc vật giảm.\\nDo đó sau 6 giây, vật đạt vận tốc cực đại."
  }
]
  }
};
