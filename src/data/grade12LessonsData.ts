import type { DetailedLessonData } from "./allGradesLessonsData";

export const GRADE_12_DETAILED_LESSONS: Record<string, DetailedLessonData> = {
  // ==========================================
  // BÀI 1: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ
  // ==========================================
  "t12-b1-don-dieu-cuc-tri": {
  "id": "t12-b1-don-dieu-cuc-tri",
  "lessonNumber": 1,
  "title": "Bài 1: Tính đơn điệu và cực trị của hàm số",
  "bookChapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
  "scenarioTitle": "Tình huống thực tế: Tối ưu hóa vận tốc tên lửa và kiểm soát nồng độ dược chất",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Học sinh (Khám phá)",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy Tính, khi quan sát bảng biến thiên của một hàm số, làm thế nào nhìn thấy ngay các khoảng đồng biến, nghịch biến và các điểm cực trị mà không cần tính toán phức tạp ạ?",
      "visualGraphic": "graph",
      "mathNote": "y' > 0 \\implies y \\text{ dong bien (mui ten di len)}"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính (VinaMath)",
      "avatar": "👨‍🏫",
      "speech": "Chào em! Bảng biến thiên chính là bức tranh toàn cảnh: dòng y' cho biết dấu đạo hàm (dấu + là đồng biến, dấu - là nghịch biến), dòng y vẽ mũi tên biến thiên đi lên cực đại rồi đi xuống cực tiểu!",
      "visualGraphic": "circle",
      "mathNote": "x_0 \\text{ la diem cuc dai khi } y' \\text{ doi dau } (+ \\to -)"
    }
  ],
  "youtubeVideoId": "Fj-y57v-yC8",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 1 - Tính đơn điệu và cực trị của hàm số (Tiết 1) - Toán 12 KNTT",
  "youtubeVideos": [
    {
      "id": "Fj-y57v-yC8",
      "title": "Tiết 1: Tính đơn điệu của hàm số & Dấu đạo hàm bậc nhất"
    },
    {
      "id": "mlDaCqG_--g",
      "title": "Tiết 2: Cực trị của hàm số & Kỹ năng đọc bảng biến thiên"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-12.1.1",
      "title": "Video Tiết 1: Dấu của đạo hàm và chiều biến thiên",
      "question": "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x^2 - 4x + 3$ trên $\\mathbb{R}$. Hàm số đồng biến trên khoảng nào sau đây?",
      "options": [
        "$(3; +\\infty)$",
        "$(1; 3)$",
        "$(0; 2)$",
        "$(-\\infty; 2)$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $f'(x) = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Vì $a = 1 > 0$ nên $f'(x) > 0$ trên $(-\\infty; 1)$ và $(3; +\\infty)$; $f'(x) < 0$ trên $(1; 3)$. Do đó hàm số đồng biến trên khoảng $(3; +\\infty)$."
    },
    {
      "id": "vq-12.1.2",
      "title": "Video Tiết 2: Nhận biết điểm cực trị qua đổi dấu đạo hàm",
      "question": "Hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x)$ đổi dấu từ âm sang dương khi đi qua $x = -2$. Khi đó khẳng định nào sau đây là đúng?",
      "options": [
        "Hàm số đạt cực tiểu tại điểm $x = -2$.",
        "Hàm số đạt cực đại tại điểm $x = -2$.",
        "Hàm số không có cực trị tại $x = -2$.",
        "Đồ thị hàm số nhận $x = -2$ làm tiệm cận đứng."
      ],
      "correctIndex": 0,
      "explanation": "Theo định lý về điều kiện đủ của cực trị: nếu đạo hàm $f'(x)$ đổi dấu từ âm sang dương khi đi qua $x_0$ thì hàm số đạt cực tiểu tại $x_0$."
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Khái niệm tính đơn điệu và mối liên hệ với đạo hàm cấp 1",
      "points": [
        "Hàm số $f(x)$ đồng biến (tăng) trên khoảng $K$ nếu với mọi $x_1, x_2 \\in K, x_1 < x_2 \\implies f(x_1) < f(x_2)$. Đồ thị đi lên từ trái sang phải.",
        "Hàm số $f(x)$ nghịch biến (giảm) trên khoảng $K$ nếu với mọi $x_1, x_2 \\in K, x_1 < x_2 \\implies f(x_1) > f(x_2)$. Đồ thị đi xuống từ trái sang phải.",
        "Định lý về dấu đạo hàm: Nếu $f'(x) > 0$ với mọi $x \\in K$ thì $f(x)$ đồng biến trên $K$; nếu $f'(x) < 0$ với mọi $x \\in K$ thì $f(x)$ nghịch biến trên $K$.",
        "Định lý mở rộng: Nếu $f'(x) \\ge 0$ (hoặc $f'(x) \\le 0$) với mọi $x \\in K$ và $f'(x) = 0$ chỉ tại một số hữu hạn điểm thì $f(x)$ đồng biến (hoặc nghịch biến) trên $K$."
      ],
      "formula": "f'(x) > 0, \\forall x \\in K \\implies f(x) \\text{ dong bien tren } K",
      "examples": [
        {
          "title": "Ví dụ 1: Xét tính đơn điệu hàm bậc ba (SGK Trang 6)",
          "problem": "Xét chiều biến thiên của hàm số $y = x^3 - 3x^2 + 2$ trên $\\mathbb{R}$.",
          "solution": "• Tập xác định: $D = \\mathbb{R}$.\\n• Đạo hàm: $y' = 3x^2 - 6x = 3x(x - 2)$.\\n• $y' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$.\\n• Bảng xét dấu: $y' > 0$ trên $(-\\infty; 0)$ và $(2; +\\infty)$; $y' < 0$ trên $(0; 2)$.\\n• Kết luận: Hàm số đồng biến trên mỗi khoảng $(-\\infty; 0)$ và $(2; +\\infty)$; nghịch biến trên khoảng $(0; 2)$."
        }
      ]
    },
    {
      "index": "2",
      "title": "Quy trình 4 bước xét tính đơn điệu của hàm số",
      "points": [
        "Bước 1: Tìm tập xác định $D$ của hàm số.",
        "Bước 2: Tính đạo hàm $y' = f'(x)$. Tìm các điểm $x_i \\in D$ mà tại đó $f'(x_i) = 0$ hoặc đạo hàm không xác định.",
        "Bước 3: Sắp xếp các điểm $x_i$ theo thứ tự tăng dần và lập bảng biến thiên (xét dấu đạo hàm trên từng khoảng xác định).",
        "Bước 4: Rút ra kết luận cụ thể về các khoảng đồng biến và nghịch biến.",
        "Lưu ý quan trọng: Kết luận phải dùng liên từ 'và' hoặc dấu phẩy giữa các khoảng riêng biệt, tuyệt đối không dùng ký hiệu hợp $\\cup$ hay phép trừ tập hợp $\\setminus$."
      ],
      "examples": [
        {
          "title": "Ví dụ 2: Tính đơn điệu hàm phân thức bậc nhất (SGK Trang 8)",
          "problem": "Xét tính đơn điệu của hàm số $y = \\frac{2x - 1}{x + 1}$.",
          "solution": "• Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\\n• Đạo hàm: $y' = \\frac{2 \\cdot 1 - (-1) \\cdot 1}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\ne -1$.\\n• Kết luận: Hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Khái niệm cực trị của hàm số và quy tắc tìm cực trị",
      "points": [
        "Điểm $x_0$ gọi là điểm cực đại của hàm số nếu tồn tại khoảng $(a; b)$ chứa $x_0$ sao cho $f(x) < f(x_0)$ với mọi $x \\in (a; b) \\setminus \\{x_0\\}$. Giá trị $f(x_0)$ là giá trị cực đại.",
        "Điểm $x_0$ gọi là điểm cực tiểu của hàm số nếu tồn tại khoảng $(a; b)$ chứa $x_0$ sao cho $f(x) > f(x_0)$ với mọi $x \\in (a; b) \\setminus \\{x_0\\}$. Giá trị $f(x_0)$ là giá trị cực tiểu.",
        "Điều kiện đủ (Quy tắc 1): Nếu $f'(x)$ đổi dấu từ dương sang âm khi đi qua $x_0$ thì hàm số đạt cực đại tại $x_0$.",
        "Nếu $f'(x)$ đổi dấu từ âm sang dương khi đi qua $x_0$ thì hàm số đạt cực tiểu tại $x_0$.",
        "Nếu $f'(x)$ không đổi dấu khi đi qua $x_0$ thì $x_0$ không phải là điểm cực trị của hàm số."
      ],
      "formula": "f'(x_0) = 0 \\text{ va doi dau } (+ \\to -) \\implies x_0 \\text{ la diem cuc dai}",
      "examples": [
        {
          "title": "Ví dụ 3: Tìm cực trị hàm bậc ba (SGK Trang 11)",
          "problem": "Tìm các điểm cực trị và giá trị cực trị của hàm số $y = x^3 - 3x + 1$.",
          "solution": "• $D = \\mathbb{R}$. Đạo hàm: $y' = 3x^2 - 3 = 3(x^2 - 1)$.\\n• $y' = 0 \\Leftrightarrow x = \\pm 1$.\\n• Qua $x = -1$, $y'$ đổi dấu từ $+$ sang $-$ nên hàm số đạt cực đại tại $x = -1$, giá trị cực đại $y_{\\text{CD}} = y(-1) = 3$.\\n• Qua $x = 1$, $y'$ đổi dấu từ $-$ sang $+$ nên hàm số đạt cực tiểu tại $x = 1$, giá trị cực tiểu $y_{\\text{CT}} = y(1) = -1$."
        }
      ]
    },
    {
      "index": "4",
      "title": "Kỹ năng đọc đồ thị đạo hàm f'(x) và ứng dụng thực tế",
      "points": [
        "Phân biệt đồ thị hàm số $y = f(x)$ và đồ thị đạo hàm $y = f'(x)$:",
        "Hàm số $y = f(x)$ đồng biến trên những khoảng mà đồ thị $y = f'(x)$ nằm hoàn toàn PHÍA TRÊN trục hoành ($f'(x) > 0$).",
        "Hàm số $y = f(x)$ nghịch biến trên những khoảng mà đồ thị $y = f'(x)$ nằm hoàn toàn PHÍA DƯỚI trục hoành ($f'(x) < 0$).",
        "Điểm cực trị của hàm số $y = f(x)$ là các hoành độ giao điểm mà đồ thị đạo hàm $f'(x)$ CẮT NGANG qua trục hoành (nghiệm bội lẻ). Điểm tiếp xúc không là cực trị.",
        "Ứng dụng thực tiễn: Xác định thời điểm nồng độ thuốc trong máu đạt đỉnh, điểm hòa vốn và tối đa hóa lợi nhuận trong kinh tế, hoặc vận tốc cực đại trong cơ học."
      ],
      "examples": [
        {
          "title": "Ví dụ 4: Ứng dụng thực tế kiểm soát nồng độ thuốc (ĐGNL 2025)",
          "problem": "Nồng độ thuốc trong máu sau $t$ giờ tiêm là $C(t) = \\frac{4t}{t^2 + 4}$ ($t \\ge 0$, mg/L). Tìm thời điểm nồng độ thuốc lớn nhất.",
          "solution": "• $C'(t) = \\frac{4(t^2 + 4) - 4t(2t)}{(t^2 + 4)^2} = \\frac{16 - 4t^2}{(t^2 + 4)^2}$.\\n• $C'(t) = 0 \\Leftrightarrow 4 - t^2 = 0 \\Leftrightarrow t = 2$ (do $t \\ge 0$).\\n• Bảng biến thiên cho thấy $C(t)$ đạt cực đại tại $t = 2$.\\n• Kết luận: Sau đúng 2 giờ kể từ khi tiêm, nồng độ thuốc trong máu đạt cực đại với giá trị $C(2) = 1$ mg/L."
        }
      ]
    }
  ],
  "tips": [
    "Phân biệt rõ 3 khái niệm: Điểm cực trị của hàm số ($x_0$), Giá trị cực trị của hàm số ($y_0 = f(x_0)$) và Điểm cực trị của đồ thị hàm số ($M(x_0; y_0)$).",
    "Với đồ thị đạo hàm $f'(x)$, điểm cực trị của $f(x)$ là giao điểm của đồ thị $f'(x)$ cắt xuyên qua trục hoành $Ox$. Điểm tiếp xúc (nghiệm kép/bội chẵn) không tạo thành cực trị.",
    "Hàm phân thức $y = \\frac{ax+b}{cx+d}$ luôn đơn điệu trên từng khoảng xác định, có đạo hàm $y' = \\frac{ad-bc}{(cx+d)^2}$ không đổi dấu và không bao giờ có cực trị."
  ],
  "traps": [
    "Bẫy kết luận đơn điệu dùng ký hiệu $\\cup$ hoặc $\\mathbb{R} \\setminus \\{x_0\\}$: Luôn phải viết tách rời: 'đồng biến trên khoảng $(-\\infty; x_0)$ và $(x_0; +\\infty)$'.",
    "Nhầm lẫn giữa đồ thị hàm số $f(x)$ và đồ thị đạo hàm $f'(x)$: Khi đề cho đồ thị $f'(x)$, không được nhìn đỉnh cong làm cực trị mà phải xét dấu trên/dưới trục hoành.",
    "Bẫy hàm số bậc ba đồng biến trên $\\mathbb{R}$: Điều kiện là $a > 0$ và $\\Delta' \\le 0$ (phải có dấu bằng ở $\\Delta'$ vì đạo hàm bằng 0 tại hữu hạn điểm hàm vẫn đồng biến)."
  ],
  "interactiveType": "function",
  "quizQuestions": [
    {
      "id": "quiz-12.1.1",
      "badge": "NB - Nhận biết khoảng đồng biến từ bảng biến thiên",
      "source": "SGK Toán 12 KNTT - Bài 1 Khởi động",
      "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ sau. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
      "svgDiagram": "<svg viewBox=\"0 0 540 180\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"bbtArrUp\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#38bdf8\" />\n    </marker>\n    <marker id=\"bbtArrDown\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#f43f5e\" />\n    </marker>\n  </defs>\n\n  <!-- Khung ngoài chữ nhật -->\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"160\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ dọc ngăn cột tiêu đề -->\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng x -->\n  <line x1=\"10\" y1=\"50\" x2=\"530\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng y' -->\n  <line x1=\"10\" y1=\"90\" x2=\"530\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Tiêu đề cột bên trái -->\n  <text x=\"42\" y=\"36\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"42\" y=\"76\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y'</text>\n  <text x=\"42\" y=\"138\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n\n  <!-- Dòng x -->\n  <text x=\"115\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <text x=\"220\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-1</text>\n  <text x=\"360\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">2</text>\n  <text x=\"485\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n\n  <!-- Dòng y' -->\n  <text x=\"165\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"220\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"290\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"360\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"425\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n\n  <!-- Dòng y -->\n  <text x=\"115\" y=\"160\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <line x1=\"135\" y1=\"154\" x2=\"200\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"220\" y=\"112\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">3</text>\n  <line x1=\"240\" y1=\"116\" x2=\"340\" y2=\"154\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown)\" />\n  <text x=\"360\" y=\"162\" fill=\"#38bdf8\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-2</text>\n  <line x1=\"380\" y1=\"154\" x2=\"465\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"485\" y=\"112\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n</svg>",
      "options": [
        "$(2; +\\infty)$",
        "$(-1; 2)$",
        "$(-\\infty; 2)$",
        "$(3; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Dựa vào bảng biến thiên, ta thấy $y' > 0$ trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$. Do đó, hàm số đồng biến trên mỗi khoảng $(-\\infty; -1)$ và $(2; +\\infty)$. Trong các phương án đã cho, khoảng $(2; +\\infty)$ thỏa mãn."
    },
    {
      "id": "quiz-12.1.2",
      "badge": "NB - Nhận biết khoảng nghịch biến từ bảng biến thiên",
      "source": "SGK Toán 12 KNTT - Bài 1 Ví dụ chuẩn",
      "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
      "svgDiagram": "<svg viewBox=\"0 0 540 180\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"bbtArrUp\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#38bdf8\" />\n    </marker>\n    <marker id=\"bbtArrDown\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#f43f5e\" />\n    </marker>\n  </defs>\n\n  <!-- Khung ngoài chữ nhật -->\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"160\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ dọc ngăn cột tiêu đề -->\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng x -->\n  <line x1=\"10\" y1=\"50\" x2=\"530\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Đường kẻ ngang phân cách dòng y' -->\n  <line x1=\"10\" y1=\"90\" x2=\"530\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <!-- Tiêu đề cột bên trái -->\n  <text x=\"42\" y=\"36\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"42\" y=\"76\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y'</text>\n  <text x=\"42\" y=\"138\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n\n  <!-- Dòng x -->\n  <text x=\"115\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <text x=\"220\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">1</text>\n  <text x=\"360\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">3</text>\n  <text x=\"485\" y=\"36\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n\n  <!-- Dòng y' -->\n  <text x=\"165\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"220\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"290\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"360\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"425\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n\n  <!-- Dòng y -->\n  <text x=\"115\" y=\"160\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <line x1=\"135\" y1=\"154\" x2=\"200\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"220\" y=\"112\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">0</text>\n  <line x1=\"240\" y1=\"116\" x2=\"340\" y2=\"154\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown)\" />\n  <text x=\"360\" y=\"162\" fill=\"#38bdf8\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-2</text>\n  <line x1=\"380\" y1=\"154\" x2=\"465\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp)\" />\n  <text x=\"485\" y=\"112\" fill=\"#94a3b8\" font-size=\"14\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n</svg>",
      "options": [
        "$(1; 3)$",
        "$(-2; 0)$",
        "$(-\\infty; 0)$",
        "$(3; +\\infty)$"
      ],
      "correctIndex": 0,
      "explanation": "Dựa vào bảng biến thiên, trên khoảng $(1; 3)$ ta có $y' < 0$ và mũi tên dòng $y$ đi xuống từ $0$ đến $-2$. Do đó hàm số nghịch biến trên khoảng $(1; 3)$."
    },
    {
      "id": "quiz-12.1.3",
      "badge": "TH - Xét tính đơn điệu hàm bậc ba cơ bản",
      "source": "SGK Toán 12 KNTT - Bài 1 Ví dụ 1",
      "question": "Hàm số $y = x^3 - 3x^2 + 2$ đồng biến trên khoảng nào sau đây?",
      "options": [
        "$(2; +\\infty)$",
        "$(0; 2)$",
        "$(-\\infty; 2)$",
        "$(-1; 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R}$.\\nTa có $y' = 3x^2 - 6x = 3x(x - 2)$.\\n$y' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$.\\nBảng xét dấu $y'$: $y' > 0$ khi $x \\in (-\\infty; 0) \\cup (2; +\\infty)$ và $y' < 0$ khi $x \\in (0; 2)$.\\nVậy hàm số đồng biến trên các khoảng $(-\\infty; 0)$ và $(2; +\\infty)$."
    },
    {
      "id": "quiz-12.1.4",
      "badge": "TH - Xét tính nghịch biến hàm bậc ba hệ số âm",
      "source": "SGK Toán 12 KNTT - Bài 1 Luyện tập 1",
      "question": "Hàm số $y = -x^3 + 3x - 5$ nghịch biến trên khoảng nào dưới đây?",
      "options": [
        "$(1; +\\infty)$",
        "$(-1; 1)$",
        "$(-\\infty; 1)$",
        "$(0; 2)$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R}$.\\nTa có $y' = -3x^2 + 3 = -3(x^2 - 1)$.\\n$y' = 0 \\Leftrightarrow x = -1$ hoặc $x = 1$.\\nVì hệ số $a = -3 < 0$ nên $y' < 0$ trên $(-\\infty; -1)$ và $(1; +\\infty)$; $y' > 0$ trên $(-1; 1)$.\\nDo đó hàm số nghịch biến trên các khoảng $(-\\infty; -1)$ và $(1; +\\infty)$."
    },
    {
      "id": "quiz-12.1.5",
      "badge": "TH - Tính đơn điệu của hàm phân thức bậc nhất trên bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 1 Ví dụ 2",
      "question": "Cho hàm số $y = \\frac{2x - 1}{x + 1}$. Mệnh đề nào sau đây đúng?",
      "options": [
        "Hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.",
        "Hàm số nghịch biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.",
        "Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$.",
        "Hàm số đồng biến trên $(-\\infty; -1) \\cup (-1; +\\infty)$."
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$.\\nĐạo hàm $y' = \\frac{2 \\cdot 1 - (-1) \\cdot 1}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\ne -1$.\\nDo đó hàm số đồng biến trên mỗi khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$. (Lưu ý không dùng kí hiệu hợp $\\cup$ hay phép trừ tập hợp $\\setminus$ khi kết luận khoảng đơn điệu)."
    },
    {
      "id": "quiz-12.1.6",
      "badge": "TH - Nghịch biến hàm phân thức bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 1 Luyện tập 2",
      "question": "Hàm số nào dưới đây nghịch biến trên từng khoảng xác định của nó?",
      "options": [
        "$y = \\frac{x + 3}{x - 2}$",
        "$y = \\frac{2x + 1}{x - 1}$",
        "$y = \\frac{x - 4}{x + 1}$",
        "$y = \\frac{3x - 2}{x + 2}$"
      ],
      "correctIndex": 0,
      "explanation": "Xét hàm số $y = \\frac{x + 3}{x - 2}$ có $y' = \\frac{1 \\cdot (-2) - 3 \\cdot 1}{(x - 2)^2} = \\frac{-5}{(x - 2)^2} < 0, \\forall x \\ne 2$. Do đó hàm số nghịch biến trên từng khoảng $(-\\infty; 2)$ và $(2; +\\infty)$.\\nCác hàm số còn lại đều có đạo hàm dương."
    },
    {
      "id": "quiz-12.1.7",
      "badge": "NB - Phân biệt điểm cực đại của hàm số từ bảng xét dấu",
      "source": "SGK Toán 12 KNTT - Bài 1 Mục 2",
      "question": "Cho hàm số $y = f(x)$ xác định và liên tục trên $\\mathbb{R}$, có bảng xét dấu đạo hàm như hình vẽ sau. Điểm cực đại của hàm số đã cho là:",
      "svgDiagram": "<svg viewBox=\"0 0 540 110\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"90\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"55\" x2=\"530\" y2=\"55\" stroke=\"#475569\" stroke-width=\"1.6\" />\n\n  <text x=\"45\" y=\"38\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"45\" y=\"84\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">f'(x)</text>\n\n  <text x=\"110\" y=\"38\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">-∞</text>\n  <text x=\"190\" y=\"38\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-2</text>\n  <text x=\"300\" y=\"38\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">1</text>\n  <text x=\"410\" y=\"38\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">4</text>\n  <text x=\"490\" y=\"38\" fill=\"#94a3b8\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">+∞</text>\n\n  <text x=\"150\" y=\"84\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"190\" y=\"84\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"245\" y=\"84\" fill=\"#f43f5e\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"300\" y=\"84\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"355\" y=\"84\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"410\" y=\"84\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"455\" y=\"84\" fill=\"#f43f5e\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n</svg>",
      "options": [
        "$x = -2$ và $x = 4$",
        "$x = 1$",
        "$x = -2$",
        "$x = 4$"
      ],
      "correctIndex": 0,
      "explanation": "Đạo hàm $f'(x)$ đổi dấu từ dương sang âm khi đi qua $x = -2$ và $x = 4$. Do đó, hàm số đạt cực đại tại hai điểm $x = -2$ và $x = 4$. (Tại $x = 1$, đạo hàm đổi dấu từ âm sang dương nên $x = 1$ là điểm cực tiểu)."
    },
    {
      "id": "quiz-12.1.8",
      "badge": "TH - Tìm giá trị cực tiểu của hàm số bậc ba",
      "source": "SGK Toán 12 KNTT - Bài 1 Ví dụ 3",
      "question": "Giá trị cực tiểu của hàm số $y = x^3 - 3x + 1$ bằng:",
      "options": [
        "$-1$",
        "$1$",
        "$3$",
        "$-2$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R}$.\\n$y' = 3x^2 - 3 = 3(x^2 - 1)$.\\n$y' = 0 \\Leftrightarrow x = \\pm 1$.\\nTa có $y' > 0$ trên $(-\\infty; -1)$ và $(1; +\\infty)$; $y' < 0$ trên $(-1; 1)$.\\nSuy ra hàm số đạt cực tiểu tại $x = 1$, và giá trị cực tiểu là $y_{\\text{CT}} = y(1) = 1^3 - 3(1) + 1 = -1$."
    },
    {
      "id": "quiz-12.1.9",
      "badge": "TH - Số điểm cực trị của hàm trùng phương",
      "source": "SGK Toán 12 KNTT - Bài 1 Bài tập 1.4",
      "question": "Số điểm cực trị của hàm số $y = x^4 - 2x^2 + 3$ là:",
      "options": [
        "$3$",
        "$1$",
        "$2$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R}$.\\n$y' = 4x^3 - 4x = 4x(x^2 - 1)$.\\n$y' = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm 1$.\\nPhương trình $y' = 0$ có 3 nghiệm đơn phân biệt, do đó đạo hàm đổi dấu khi qua cả 3 nghiệm này. Vậy hàm số có đúng 3 điểm cực trị (2 cực tiểu tại $x = \\pm 1$ và 1 cực đại tại $x = 0$)."
    },
    {
      "id": "quiz-12.1.10",
      "badge": "VD - Số điểm cực trị từ biểu thức đạo hàm phân tích nhân tử",
      "source": "Đề tham khảo TN THPT 2025 - Bộ GD&ĐT",
      "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ và có đạo hàm $f'(x) = x(x - 1)^2(x + 2)^3$. Số điểm cực trị của hàm số đã cho là:",
      "options": [
        "$2$",
        "$3$",
        "$1$",
        "$6$"
      ],
      "correctIndex": 0,
      "explanation": "Phương trình $f'(x) = 0 \\Leftrightarrow x = 0$ (nghiệm bội 1), $x = 1$ (nghiệm bội 2), $x = -2$ (nghiệm bội 3).\\n- Qua nghiệm bội chẵn $x = 1$, đạo hàm $f'(x)$ không đổi dấu.\\n- Qua các nghiệm bội lẻ $x = 0$ và $x = -2$, đạo hàm $f'(x)$ đổi dấu.\\nVậy hàm số có đúng 2 điểm cực trị."
    },
    {
      "id": "quiz-12.1.11",
      "badge": "VD - Đọc số điểm cực trị từ đồ thị hàm số đạo hàm f'(x)",
      "source": "Đề minh họa ĐGNL ĐHQG",
      "question": "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Đồ thị của hàm số đạo hàm $y = f'(x)$ được cho như hình vẽ sau. Hàm số $y = f(x)$ có bao nhiêu điểm cực trị?",
      "svgDiagram": "<svg viewBox=\"0 0 440 280\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid_4_30\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\" x=\"180\" y=\"120\">\n      <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"0.8\" />\n    </pattern>\n  </defs>\n\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"260\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Lưới ô vuông trực chuẩn 1:1 -->\n  <rect x=\"30\" y=\"25\" width=\"375\" height=\"235\" fill=\"url(#grid_4_30)\" />\n\n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"405\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"413,120 401,115 401,125\" fill=\"#94a3b8\" />\n  <text x=\"403\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"180\" y1=\"260\" x2=\"180\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"180,17 175,29 185,29\" fill=\"#94a3b8\" />\n  <text x=\"190\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"166\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Vạch chia đơn vị bằng nhau trên 2 trục -->\n  <line x1=\"60\" y1=\"117\" x2=\"60\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"90\" y1=\"117\" x2=\"90\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"120\" y1=\"117\" x2=\"120\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"150\" y1=\"117\" x2=\"150\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"210\" y1=\"117\" x2=\"210\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"240\" y1=\"117\" x2=\"240\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"270\" y1=\"117\" x2=\"270\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"300\" y1=\"117\" x2=\"300\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"330\" y1=\"117\" x2=\"330\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"360\" y1=\"117\" x2=\"360\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"390\" y1=\"117\" x2=\"390\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"270\" x2=\"183\" y2=\"270\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"240\" x2=\"183\" y2=\"240\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"210\" x2=\"183\" y2=\"210\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"180\" x2=\"183\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"150\" x2=\"183\" y2=\"150\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"90\" x2=\"183\" y2=\"90\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"60\" x2=\"183\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"30\" x2=\"183\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học tỉ lệ 1:1 -->\n  <path d=\"M 132.0 37.2 Q 210.0 442.8 288.0 37.2\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"294\" y=\"45\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"150.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"150.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-1</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"270.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"270.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">3</text>\n\n  \n  <!-- Đỉnh parabol và các đường dóng tọa độ -->\n  <circle cx=\"210\" cy=\"240\" r=\"4\" fill=\"#ec4899\" />\n  <line x1=\"210\" y1=\"120\" x2=\"210\" y2=\"240\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"210\" cy=\"120\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"210\" y=\"112\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">1</text>\n  \n  <line x1=\"180\" y1=\"240\" x2=\"210\" y2=\"240\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"180\" cy=\"240\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"164\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-4</text>\n  \n</svg>",
      "options": [
        "$2$",
        "$3$",
        "$1$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Điểm cực trị của hàm số $f(x)$ là các hoành độ giao điểm mà tại đó đồ thị đạo hàm $f'(x)$ cắt ngang qua trục hoành $Ox$.\\nQuan sát hình vẽ, đồ thị $y = f'(x)$ cắt trục hoành tại hai điểm phân biệt $x = -1$ và $x = 3$.\\nDo đó, đạo hàm $f'(x)$ đổi dấu 2 lần khi đi qua 2 điểm này. Vậy hàm số $y = f(x)$ có đúng 2 điểm cực trị."
    },
    {
      "id": "quiz-12.1.12",
      "badge": "VD - Đọc khoảng đồng biến từ đồ thị đạo hàm f'(x)",
      "source": "Đề khảo sát Chuyên ĐHSP",
      "question": "Cho hàm số $y = f(x)$ có đồ thị đạo hàm $y = f'(x)$ như hình vẽ sau. Hàm số $y = f(x)$ đồng biến trên khoảng nào sau đây?",
      "svgDiagram": "<svg viewBox=\"0 0 440 280\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid_4_30\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\" x=\"180\" y=\"120\">\n      <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"0.8\" />\n    </pattern>\n  </defs>\n\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"260\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Lưới ô vuông trực chuẩn 1:1 -->\n  <rect x=\"30\" y=\"25\" width=\"375\" height=\"235\" fill=\"url(#grid_4_30)\" />\n\n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"405\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"413,120 401,115 401,125\" fill=\"#94a3b8\" />\n  <text x=\"403\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"180\" y1=\"260\" x2=\"180\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"180,17 175,29 185,29\" fill=\"#94a3b8\" />\n  <text x=\"190\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"166\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Vạch chia đơn vị bằng nhau trên 2 trục -->\n  <line x1=\"60\" y1=\"117\" x2=\"60\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"90\" y1=\"117\" x2=\"90\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"120\" y1=\"117\" x2=\"120\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"150\" y1=\"117\" x2=\"150\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"210\" y1=\"117\" x2=\"210\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"240\" y1=\"117\" x2=\"240\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"270\" y1=\"117\" x2=\"270\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"300\" y1=\"117\" x2=\"300\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"330\" y1=\"117\" x2=\"330\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"360\" y1=\"117\" x2=\"360\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"390\" y1=\"117\" x2=\"390\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"270\" x2=\"183\" y2=\"270\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"240\" x2=\"183\" y2=\"240\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"210\" x2=\"183\" y2=\"210\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"180\" x2=\"183\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"150\" x2=\"183\" y2=\"150\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"90\" x2=\"183\" y2=\"90\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"60\" x2=\"183\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"30\" x2=\"183\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học tỉ lệ 1:1 -->\n  <path d=\"M 132.0 37.2 Q 210.0 442.8 288.0 37.2\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"294\" y=\"45\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"150.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"150.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-1</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"270.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"270.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">3</text>\n\n  \n  <!-- Đỉnh parabol và các đường dóng tọa độ -->\n  <circle cx=\"210\" cy=\"240\" r=\"4\" fill=\"#ec4899\" />\n  <line x1=\"210\" y1=\"120\" x2=\"210\" y2=\"240\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"210\" cy=\"120\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"210\" y=\"112\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">1</text>\n  \n  <line x1=\"180\" y1=\"240\" x2=\"210\" y2=\"240\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"180\" cy=\"240\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"164\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-4</text>\n  \n</svg>",
      "options": [
        "$(3; +\\infty)$",
        "$(-1; 3)$",
        "$(0; 2)$",
        "$(-2; 1)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = f(x)$ đồng biến khi $f'(x) > 0$, tức là phần đồ thị của $y = f'(x)$ nằm hoàn toàn phía trên trục hoành $Ox$.\\nQuan sát đồ thị đạo hàm, ta thấy $f'(x) > 0$ trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$. Do đó, hàm số đồng biến trên khoảng $(3; +\\infty)$."
    },
    {
      "id": "quiz-12.1.13",
      "badge": "TH - Xét tính đơn điệu của hàm phân thức bậc hai trên bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 1 Mục 1 Ví dụ 4",
      "question": "Hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ nghịch biến trên khoảng nào sau đây?",
      "options": [
        "$(0; 1)$",
        "$(-\\infty; 0)$",
        "$(2; +\\infty)$",
        "$(1; 3)$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.\\nĐạo hàm: $y' = \\frac{(2x - 1)(x - 1) - (x^2 - x + 1) \\cdot 1}{(x - 1)^2} = \\frac{2x^2 - 3x + 1 - x^2 + x - 1}{(x - 1)^2} = \\frac{x^2 - 2x}{(x - 1)^2}$.\\n$y' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$.\\nXét dấu: $y' < 0 \\Leftrightarrow x(x - 2) < 0$ và $x \\ne 1 \\Leftrightarrow x \\in (0; 1) \\cup (1; 2)$.\\nDo đó hàm số nghịch biến trên mỗi khoảng $(0; 1)$ và $(1; 2)$."
    },
    {
      "id": "quiz-12.1.14",
      "badge": "TH - Cực trị của hàm phân thức bậc hai trên bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 1 Bài tập 1.5",
      "question": "Tọa độ điểm cực đại của đồ thị hàm số $y = \\frac{x^2 + 3x + 3}{x + 2}$ là:",
      "options": [
        "$(-3; -3)$",
        "$(-1; 1)$",
        "$(1; 7)$",
        "$(-2; 0)$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-2\\}$.\\nBiến đổi: $y = x + 1 + \\frac{1}{x + 2} \\implies y' = 1 - \\frac{1}{(x + 2)^2} = \\frac{(x+2)^2 - 1}{(x+2)^2} = \\frac{x^2 + 4x + 3}{(x+2)^2}$.\\n$y' = 0 \\Leftrightarrow x = -3$ hoặc $x = -1$.\\nLập bảng biến thiên: $y'$ đổi dấu từ dương sang âm khi qua $x = -3$, đổi dấu từ âm sang dương khi qua $x = -1$.\\nDo đó hàm số đạt cực đại tại $x = -3$, với $y(-3) = \\frac{9 - 9 + 3}{-1} = -3$.\\nVậy điểm cực đại của đồ thị hàm số là $(-3; -3)$."
    },
    {
      "id": "quiz-12.1.15",
      "badge": "VD - Xét tính đơn điệu hàm số chứa căn thức",
      "source": "SGK Toán 12 KNTT - Bài 1 Luyện tập 3",
      "question": "Hàm số $y = \\sqrt{4 - x^2}$ đồng biến trên khoảng nào dưới đây?",
      "options": [
        "$(-2; 0)$",
        "$(0; 2)$",
        "$(-2; 2)$",
        "$(-\\infty; 0)$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định: $4 - x^2 \\ge 0 \\Leftrightarrow x \\in [-2; 2]$.\\nVới $x \\in (-2; 2)$, đạo hàm $y' = \\frac{-2x}{2\\sqrt{4 - x^2}} = \\frac{-x}{\\sqrt{4 - x^2}}$.\\n$y' > 0 \\Leftrightarrow -x > 0 \\Leftrightarrow x < 0$. Kết hợp điều kiện $x \\in (-2; 2)$, ta được $x \\in (-2; 0)$.\\nVậy hàm số đồng biến trên khoảng $(-2; 0)$ và nghịch biến trên khoảng $(0; 2)$."
    },
    {
      "id": "quiz-12.1.16",
      "badge": "VD - Tìm m để hàm bậc ba đồng biến trên R",
      "source": "Đề thi TN THPT - Mã đề 101",
      "question": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + 4x - 1$ đồng biến trên khoảng $(-\\infty; +\\infty)$.",
      "options": [
        "$-2 \\le m \\le 2$",
        "$-2 < m < 2$",
        "$m \\le -2$ hoặc $m \\ge 2$",
        "$m < 2$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R}$. Ta có $y' = x^2 - 2mx + 4$.\\nHàm số đồng biến trên $\\mathbb{R} \\Leftrightarrow y' \\ge 0, \\forall x \\in \\mathbb{R}$ (và $y'=0$ tại hữu hạn điểm).\\nĐiều này tương đương với: $\\Delta' = m^2 - 4 \\le 0 \\Leftrightarrow -2 \\le m \\le 2$."
    },
    {
      "id": "quiz-12.1.17",
      "badge": "VD - Tìm m để hàm phân thức đơn điệu trên từng khoảng xác định",
      "source": "Đề ôn luyện THPT Quốc Gia",
      "question": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-5; 5]$ để hàm số $y = \\frac{x + m}{x + 2}$ đồng biến trên từng khoảng xác định?",
      "options": [
        "$7$",
        "$8$",
        "$3$",
        "$4$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-2\\}$.\\nĐạo hàm $y' = \\frac{1 \\cdot 2 - m \\cdot 1}{(x+2)^2} = \\frac{2 - m}{(x+2)^2}$.\\nHàm số đồng biến trên từng khoảng xác định $\\Leftrightarrow y' > 0, \\forall x \\ne -2 \\Leftrightarrow 2 - m > 0 \\Leftrightarrow m < 2$.\\nVì $m \\in \\mathbb{Z}$ và $m \\in [-5; 5]$ nên $m \\in \\{-5; -4; -3; -2; -1; 0; 1\\}$.\\nSố giá trị nguyên thỏa mãn là $1 - (-5) + 1 = 7$ giá trị."
    },
    {
      "id": "quiz-12.1.18",
      "badge": "VD - Tìm m để hàm bậc ba có hai điểm cực trị",
      "source": "Đề thi Khảo sát chất lượng Lớp 12",
      "question": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2 - 4)x + 1$ có hai điểm cực trị.",
      "options": [
        "Luôn có hai điểm cực trị với mọi $m \\in \\mathbb{R}$",
        "$m > 2$",
        "$-2 < m < 2$",
        "$m < -2$ hoặc $m > 2$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R}$.\\n$y' = 3x^2 - 6mx + 3(m^2 - 4) = 3[x^2 - 2mx + m^2 - 4]$.\\nHàm số có 2 điểm cực trị $\\Leftrightarrow y' = 0$ có 2 nghiệm phân biệt $\\Leftrightarrow \\Delta' > 0$.\\nTa có $\\Delta' = (-m)^2 - 1 \\cdot (m^2 - 4) = m^2 - m^2 + 4 = 4 > 0, \\forall m \\in \\mathbb{R}$.\\nVậy hàm số luôn có hai điểm cực trị với mọi giá trị thực của tham số $m$."
    },
    {
      "id": "quiz-12.1.19",
      "badge": "VDC - Ứng dụng thực tế: Kiểm soát nồng độ thuốc trong máu",
      "source": "Đề thi Đánh giá Năng lực - ĐHQG Hà Nội",
      "question": "Nồng độ của một loại thuốc trong máu của bệnh nhân sau $t$ giờ kể từ khi tiêm vào cơ thể được xác định bởi công thức $C(t) = \\frac{4t}{t^2 + 4}$ ($t \\ge 0$, đơn vị mg/L). Sau khi tiêm bao nhiêu giờ thì nồng độ thuốc trong máu bắt đầu giảm dần?",
      "options": [
        "$2$ giờ",
        "$1$ giờ",
        "$4$ giờ",
        "$3$ giờ"
      ],
      "correctIndex": 0,
      "explanation": "Xét hàm số $C(t) = \\frac{4t}{t^2 + 4}$ với $t \\ge 0$.\\nĐạo hàm: $C'(t) = \\frac{4(t^2 + 4) - 4t(2t)}{(t^2 + 4)^2} = \\frac{16 - 4t^2}{(t^2 + 4)^2} = \\frac{4(4 - t^2)}{(t^2 + 4)^2}$.\\n$C'(t) = 0 \\Leftrightarrow 4 - t^2 = 0 \\Leftrightarrow t = 2$ (do $t \\ge 0$).\\n- Trên khoảng $(0; 2)$: $C'(t) > 0$, hàm số đồng biến (nồng độ thuốc tăng dần).\\n- Trên khoảng $(2; +\\infty)$: $C'(t) < 0$, hàm số nghịch biến (nồng độ thuốc giảm dần).\\nVậy sau $2$ giờ, nồng độ thuốc trong máu bắt đầu giảm dần."
    },
    {
      "id": "quiz-12.1.20",
      "badge": "VDC - Ứng dụng kinh tế: Tối ưu quy mô sản xuất",
      "source": "Đề thi ĐGNL ĐHQG TP.HCM",
      "question": "Một công ty sản xuất một loại sản phẩm công nghệ. Lợi nhuận $P(x)$ (đơn vị: triệu đồng) khi sản xuất và tiêu thụ $x$ sản phẩm ($0 \\le x \\le 50$) được mô hình hóa bởi hàm số: $P(x) = -x^3 + 45x^2 + 1200x - 1000$. Khoảng sản xuất nào dưới đây làm cho lợi nhuận của công ty tiếp tục tăng trưởng (hàm số đồng biến)?",
      "options": [
        "$(0; 40)$",
        "$(40; 50)$",
        "$(10; 45)$",
        "$(30; 50)$"
      ],
      "correctIndex": 0,
      "explanation": "Đạo hàm lợi nhuận: $P'(x) = -3x^2 + 90x + 1200 = -3(x^2 - 30x - 400)$.\\n$P'(x) = 0 \\Leftrightarrow x^2 - 30x - 400 = 0 \\Leftrightarrow x = 40$ hoặc $x = -10$ (loại vì $x \\ge 0$).\\nVới $x \\in (0; 40)$, ta có $P'(x) > 0$, hàm số $P(x)$ đồng biến, nghĩa là lợi nhuận tiếp tục tăng.\\nVới $x \\in (40; 50)$, ta có $P'(x) < 0$, lợi nhuận giảm.\\nVậy trong khoảng sản xuất $(0; 40)$ sản phẩm, lợi nhuận công ty tiếp tục tăng trưởng."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-12.1.1",
      "badge": "Khảo sát tính đơn điệu và cực trị hàm số bậc ba",
      "source": "SGK Toán 12 KNTT - Bài 1 Khảo sát toàn diện",
      "prompt": "Cho hàm số $y = f(x) = x^3 - 3x^2 - 9x + 2$ xác định và liên tục trên $\\mathbb{R}$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đạo hàm của hàm số đã cho là $f'(x) = 3x^2 - 6x - 9$.",
          "correctAnswer": true,
          "explanation": "Ta có $(x^3 - 3x^2 - 9x + 2)' = 3x^2 - 6x - 9$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Hàm số đồng biến trên khoảng $(-1; 3)$ và nghịch biến trên khoảng $(3; +\\infty)$.",
          "correctAnswer": false,
          "explanation": "$f'(x) = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3)$. Ta có $f'(x) < 0$ trên $(-1; 3)$ (nghịch biến) và $f'(x) > 0$ trên $(-\\infty; -1) \\cup (3; +\\infty)$ (đồng biến). Do đó khẳng định này sai."
        },
        {
          "id": "c",
          "text": "Hàm số đạt cực đại tại điểm $x = -1$ và giá trị cực đại là $y_{\\text{CD}} = 7$.",
          "correctAnswer": true,
          "explanation": "Đạo hàm $f'(x)$ đổi dấu từ dương sang âm khi đi qua $x = -1$, nên hàm số đạt cực đại tại $x = -1$. Giá trị cực đại là $f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 2 = -1 - 3 + 9 + 2 = 7$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Tích của hai giá trị cực trị của hàm số là $y_{\\text{CD}} \\cdot y_{\\text{CT}} = -175$.",
          "correctAnswer": true,
          "explanation": "Hàm số đạt cực tiểu tại $x = 3$ với giá trị cực tiểu $y_{\\text{CT}} = f(3) = 27 - 27 - 27 + 2 = -25$. Khi đó tích hai giá trị cực trị là $7 \\cdot (-25) = -175$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.1.2",
      "badge": "Tính đơn điệu và tính chất hàm phân thức bậc nhất trên bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 1 Mục 1",
      "prompt": "Cho hàm số $y = \\frac{2x - 3}{x - 1}$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.",
          "correctAnswer": true,
          "explanation": "Điều kiện mẫu số khác 0: $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$. Do đó tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$."
        },
        {
          "id": "b",
          "text": "Đạo hàm của hàm số là $y' = \\frac{1}{(x - 1)^2}$ với mọi $x \\ne 1$.",
          "correctAnswer": true,
          "explanation": "Ta có $y' = \\frac{2 \\cdot (-1) - (-3) \\cdot 1}{(x - 1)^2} = \\frac{-2 + 3}{(x - 1)^2} = \\frac{1}{(x - 1)^2}$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số đồng biến trên toàn bộ tập xác định $\\mathbb{R} \\setminus \\{1\\}$.",
          "correctAnswer": false,
          "explanation": "Theo định nghĩa tính đơn điệu, tính đồng biến chỉ được xét trên từng khoảng rời nhau: $(-\\infty; 1)$ và $(1; +\\infty)$, không được kết luận trên tập $\\mathbb{R} \\setminus \\{1\\}$. Khẳng định này sai."
        },
        {
          "id": "d",
          "text": "Hàm số đã cho có đúng một điểm cực trị.",
          "correctAnswer": false,
          "explanation": "Vì $y' = \\frac{1}{(x - 1)^2} > 0, \\forall x \\ne 1$, đạo hàm không bao giờ triệt tiêu và không đổi dấu nên hàm số phân thức bậc nhất trên bậc nhất không bao giờ có điểm cực trị. Khẳng định này sai."
        }
      ]
    },
    {
      "id": "tf-12.1.3",
      "badge": "Khảo sát hàm phân thức bậc hai trên bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 1 Hàm hữu tỉ",
      "prompt": "Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 2}$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đạo hàm của hàm số là $y' = \\frac{x^2 - 4x}{(x - 2)^2}$.",
          "correctAnswer": true,
          "explanation": "Biến đổi $y = x - 1 + \\frac{4}{x - 2} \\implies y' = 1 - \\frac{4}{(x-2)^2} = \\frac{(x-2)^2 - 4}{(x-2)^2} = \\frac{x^2 - 4x}{(x-2)^2}$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Hàm số nghịch biến trên khoảng $(0; 2)$ và khoảng $(2; 4)$.",
          "correctAnswer": true,
          "explanation": "$y' = 0 \\Leftrightarrow x^2 - 4x = 0 \\Leftrightarrow x = 0$ hoặc $x = 4$. Dấu của $y'$ cùng dấu với $x^2 - 4x$. Do đó $y' < 0$ khi $x \\in (0; 4) \\setminus \\{2\\}$. Vậy hàm số nghịch biến trên $(0; 2)$ và $(2; 4)$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số đạt cực đại tại điểm $x = 0$ và giá trị cực đại bằng $-3$.",
          "correctAnswer": true,
          "explanation": "Qua điểm $x = 0$, $y'$ đổi dấu từ dương sang âm nên hàm số đạt cực đại tại $x = 0$. Giá trị cực đại là $y(0) = \\frac{6}{-2} = -3$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng $4\\sqrt{2}$.",
          "correctAnswer": false,
          "explanation": "Hai điểm cực trị của đồ thị là $A(0; -3)$ và $B(4; 5)$. Khoảng cách $AB = \\sqrt{(4-0)^2 + (5 - (-3))^2} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5} \\ne 4\\sqrt{2}$. Do đó khẳng định này sai."
        }
      ]
    },
    {
      "id": "tf-12.1.4",
      "badge": "Đọc đồ thị hàm số đạo hàm f'(x) - ĐGNL",
      "source": "Đề thi Đánh giá Năng lực ĐHQG Hà Nội",
      "prompt": "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Biết rằng đồ thị đạo hàm $y = f'(x)$ là một parabol như hình vẽ sau. Xét tính đúng hoặc sai của các khẳng định sau:",
      "svgDiagram": "<svg viewBox=\"0 0 440 280\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid_4_30\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\" x=\"180\" y=\"120\">\n      <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"0.8\" />\n    </pattern>\n  </defs>\n\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"260\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Lưới ô vuông trực chuẩn 1:1 -->\n  <rect x=\"30\" y=\"25\" width=\"375\" height=\"235\" fill=\"url(#grid_4_30)\" />\n\n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"405\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"413,120 401,115 401,125\" fill=\"#94a3b8\" />\n  <text x=\"403\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"180\" y1=\"260\" x2=\"180\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"180,17 175,29 185,29\" fill=\"#94a3b8\" />\n  <text x=\"190\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"166\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Vạch chia đơn vị bằng nhau trên 2 trục -->\n  <line x1=\"60\" y1=\"117\" x2=\"60\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"90\" y1=\"117\" x2=\"90\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"120\" y1=\"117\" x2=\"120\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"150\" y1=\"117\" x2=\"150\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"210\" y1=\"117\" x2=\"210\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"240\" y1=\"117\" x2=\"240\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"270\" y1=\"117\" x2=\"270\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"300\" y1=\"117\" x2=\"300\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"330\" y1=\"117\" x2=\"330\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"360\" y1=\"117\" x2=\"360\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"390\" y1=\"117\" x2=\"390\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"270\" x2=\"183\" y2=\"270\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"240\" x2=\"183\" y2=\"240\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"210\" x2=\"183\" y2=\"210\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"180\" x2=\"183\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"150\" x2=\"183\" y2=\"150\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"90\" x2=\"183\" y2=\"90\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"60\" x2=\"183\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"177\" y1=\"30\" x2=\"183\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học tỉ lệ 1:1 -->\n  <path d=\"M 132.0 37.2 Q 210.0 442.8 288.0 37.2\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"294\" y=\"45\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"150.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"150.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-1</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"270.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"270.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">3</text>\n\n  \n  <!-- Đỉnh parabol và các đường dóng tọa độ -->\n  <circle cx=\"210\" cy=\"240\" r=\"4\" fill=\"#ec4899\" />\n  <line x1=\"210\" y1=\"120\" x2=\"210\" y2=\"240\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"210\" cy=\"120\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"210\" y=\"112\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">1</text>\n  \n  <line x1=\"180\" y1=\"240\" x2=\"210\" y2=\"240\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <circle cx=\"180\" cy=\"240\" r=\"2.5\" fill=\"#94a3b8\" />\n  <text x=\"164\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\" text-anchor=\"middle\">-4</text>\n  \n</svg>",
      "subItems": [
        {
          "id": "a",
          "text": "Biểu thức của đạo hàm là $f'(x) = x^2 - 2x - 3$.",
          "correctAnswer": true,
          "explanation": "Parabol có hai giao điểm với trục hoành là $x = -1, x = 3$ và đỉnh $(1; -4)$ nên có dạng $f'(x) = a(x+1)(x-3) = a(x^2 - 2x - 3)$. Tại $x = 1$, $f'(1) = a(-4) = -4 \\implies a = 1$. Do đó $f'(x) = x^2 - 2x - 3$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Hàm số $y = f(x)$ nghịch biến trên khoảng $(-1; 3)$.",
          "correctAnswer": true,
          "explanation": "Trên khoảng $(-1; 3)$, đồ thị $f'(x)$ nằm hoàn toàn phía dưới trục hoành nên $f'(x) < 0$. Do đó hàm số $f(x)$ nghịch biến trên khoảng $(-1; 3)$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số $y = f(x)$ đạt cực đại tại điểm $x = 3$.",
          "correctAnswer": false,
          "explanation": "Khi đi qua $x = 3$, $f'(x)$ đổi dấu từ âm (dưới trục hoành) sang dương (trên trục hoành), do đó $x = 3$ là điểm cực tiểu của hàm số $f(x)$. Khẳng định này sai."
        },
        {
          "id": "d",
          "text": "Hàm số $g(x) = f(2 - x)$ đồng biến trên khoảng $(-1; 3)$.",
          "correctAnswer": true,
          "explanation": "Ta có $g'(x) = (2 - x)' \\cdot f'(2 - x) = -f'(2 - x)$. Để $g(x)$ đồng biến thì $g'(x) > 0 \\Leftrightarrow -f'(2 - x) > 0 \\Leftrightarrow f'(2 - x) < 0$. Vì $f'(u) < 0 \\Leftrightarrow -1 < u < 3$ nên $-1 < 2 - x < 3 \\Leftrightarrow -3 < -x < 1 \\Leftrightarrow -1 < x < 3$. Vậy $g(x)$ đồng biến trên $(-1; 3)$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.1.5",
      "badge": "Khảo sát tính đơn điệu và cực trị hàm chứa căn thức",
      "source": "SGK Toán 12 KNTT - Bài 1 Nâng cao",
      "prompt": "Cho hàm số $y = f(x) = \\sqrt{2x - x^2}$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập xác định của hàm số là đoạn $[0; 2]$.",
          "correctAnswer": true,
          "explanation": "Điều kiện biểu thức dưới căn không âm: $2x - x^2 \\ge 0 \\Leftrightarrow x(2 - x) \\ge 0 \\Leftrightarrow 0 \\le x \\le 2$. Tập xác định là $D = [0; 2]$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Với mọi $x \\in (0; 2)$, đạo hàm của hàm số là $f'(x) = \\frac{1 - x}{\\sqrt{2x - x^2}}$.",
          "correctAnswer": true,
          "explanation": "Ta có $f'(x) = \\frac{(2x - x^2)'}{2\\sqrt{2x - x^2}} = \\frac{2 - 2x}{2\\sqrt{2x - x^2}} = \\frac{1 - x}{\\sqrt{2x - x^2}}$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số nghịch biến trên khoảng $(0; 1)$ và đồng biến trên khoảng $(1; 2)$.",
          "correctAnswer": false,
          "explanation": "Với $x \\in (0; 1)$, $1 - x > 0 \\implies f'(x) > 0$, hàm số đồng biến. Với $x \\in (1; 2)$, $1 - x < 0 \\implies f'(x) < 0$, hàm số nghịch biến. Do đó khẳng định này sai."
        },
        {
          "id": "d",
          "text": "Hàm số đạt cực đại tại $x = 1$ với giá trị cực đại bằng $1$.",
          "correctAnswer": true,
          "explanation": "Tại $x = 1$, $f'(1) = 0$ và đổi dấu từ dương sang âm, nên hàm số đạt cực đại tại $x = 1$. Giá trị cực đại là $f(1) = \\sqrt{2(1) - 1^2} = 1$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.1.6",
      "badge": "Bài toán tham số m về tính đơn điệu hàm bậc ba",
      "source": "Đề thi thử Tốt nghiệp THPT 2025",
      "prompt": "Cho hàm số $y = \\frac{1}{3}x^3 - (m - 1)x^2 + (m^2 - 3m + 2)x + 1$ với $m$ là tham số thực. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đạo hàm của hàm số là $y' = x^2 - 2(m - 1)x + m^2 - 3m + 2$.",
          "correctAnswer": true,
          "explanation": "Tính đạo hàm: $(\\frac{1}{3}x^3)' = x^2$, $(-(m-1)x^2)' = -2(m-1)x$, $((m^2-3m+2)x)' = m^2-3m+2$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Biệt thức thu gọn của tam thức bậc hai $y'$ là $\\Delta' = m - 1$.",
          "correctAnswer": true,
          "explanation": "Ta có $\\Delta' = (m - 1)^2 - 1 \\cdot (m^2 - 3m + 2) = (m^2 - 2m + 1) - (m^2 - 3m + 2) = m - 1$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số đồng biến trên $\\mathbb{R}$ khi và chỉ khi $m \\le 1$.",
          "correctAnswer": true,
          "explanation": "Hàm số bậc ba với hệ số $a = 1 > 0$ đồng biến trên $\\mathbb{R} \\Leftrightarrow y' \\ge 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta' \\le 0 \\Leftrightarrow m - 1 \\le 0 \\Leftrightarrow m \\le 1$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Có đúng 3 giá trị nguyên của $m \\in [0; 5]$ để hàm số có hai điểm cực trị.",
          "correctAnswer": false,
          "explanation": "Hàm số có hai điểm cực trị khi và chỉ khi phương trình $y' = 0$ có 2 nghiệm phân biệt $\\Leftrightarrow \\Delta' > 0 \\Leftrightarrow m - 1 > 0 \\Leftrightarrow m > 1$. Với $m \\in \\mathbb{Z}$ và $m \\in [0; 5]$, ta có $m \\in \\{2; 3; 4; 5\\}$ (gồm 4 giá trị nguyên). Khẳng định nói có 3 giá trị là sai."
        }
      ]
    },
    {
      "id": "tf-12.1.7",
      "badge": "Bài toán tham số m của hàm phân thức hữu tỉ",
      "source": "Đề Khảo sát THPT Quốc gia",
      "prompt": "Cho hàm số $y = \\frac{mx - 4}{x - m}$ với $m$ là tham số thực. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập xác định của hàm số với mỗi giá trị $m$ là $D = \\mathbb{R} \\setminus \\{m\\}$.",
          "correctAnswer": true,
          "explanation": "Điều kiện mẫu số $x - m \\ne 0 \\Leftrightarrow x \\ne m$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Đạo hàm của hàm số là $y' = \\frac{-m^2 + 4}{(x - m)^2}$ với mọi $x \\ne m$.",
          "correctAnswer": true,
          "explanation": "Ta có $y' = \\frac{m \\cdot (-m) - (-4) \\cdot 1}{(x - m)^2} = \\frac{-m^2 + 4}{(x - m)^2}$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số đồng biến trên từng khoảng xác định khi và chỉ khi $-2 < m < 2$.",
          "correctAnswer": true,
          "explanation": "Hàm số đồng biến trên từng khoảng xác định $\\Leftrightarrow y' > 0, \\forall x \\ne m \\Leftrightarrow -m^2 + 4 > 0 \\Leftrightarrow m^2 < 4 \\Leftrightarrow -2 < m < 2$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Để hàm số đồng biến trên khoảng $(2; +\\infty)$ thì điều kiện cần và đủ là $-2 < m < 2$.",
          "correctAnswer": true,
          "explanation": "Hàm số đồng biến trên khoảng $(2; +\\infty) \\Leftrightarrow y' > 0, \\forall x > 2$ và $m \\notin (2; +\\infty) \\Leftrightarrow -m^2 + 4 > 0$ và $m \\le 2 \\Leftrightarrow -2 < m < 2$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.1.8",
      "badge": "Ứng dụng thực tế đạo hàm: Mô hình nồng độ dược chất",
      "source": "Đề Đánh giá Năng lực - Ứng dụng Y sinh",
      "prompt": "Sau khi một bệnh nhân được tiêm một liều thuốc kháng sinh, nồng độ của thuốc trong huyết tương (tính bằng mg/L) sau $t$ giờ ($t \\ge 0$) được mô hình hóa bởi hàm số: $C(t) = \\frac{0.5t}{t^2 + 9}$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đạo hàm của hàm nồng độ thuốc là $C'(t) = \\frac{0.5(9 - t^2)}{(t^2 + 9)^2}$ với mọi $t \\ge 0$.",
          "correctAnswer": true,
          "explanation": "Ta có $C'(t) = \\frac{0.5(t^2 + 9) - 0.5t(2t)}{(t^2 + 9)^2} = \\frac{0.5t^2 + 4.5 - t^2}{(t^2 + 9)^2} = \\frac{4.5 - 0.5t^2}{(t^2 + 9)^2} = \\frac{0.5(9 - t^2)}{(t^2 + 9)^2}$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Trong khoảng thời gian từ $0$ đến $3$ giờ sau khi tiêm, nồng độ thuốc trong huyết tương liên tục tăng.",
          "correctAnswer": true,
          "explanation": "Với $t \\in (0; 3)$, $9 - t^2 > 0 \\implies C'(t) > 0$, hàm số $C(t)$ đồng biến. Do đó nồng độ thuốc liên tục tăng trong 3 giờ đầu tiên. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Nồng độ thuốc trong huyết tương đạt giá trị lớn nhất tại thời điểm $t = 3$ giờ với giá trị $C_{\\text{max}} = \\frac{1}{12}$ mg/L.",
          "correctAnswer": true,
          "explanation": "Tại $t = 3$, $C'(3) = 0$ và đổi dấu từ dương sang âm, nên hàm số đạt cực đại tại $t = 3$. Giá trị cực đại là $C(3) = \\frac{0.5 \\times 3}{3^2 + 9} = \\frac{1.5}{18} = \\frac{1}{12}$ mg/L. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Sau thời điểm $t = 3$ giờ, nồng độ thuốc trong máu có lúc tăng có lúc giảm do quá trình đào thải không đều.",
          "correctAnswer": false,
          "explanation": "Với mọi $t > 3$, $9 - t^2 < 0 \\implies C'(t) < 0$, do đó hàm số $C(t)$ luôn nghịch biến trên khoảng $(3; +\\infty)$. Nồng độ thuốc giảm liên tục và tiến dần về 0, không có hiện tượng tăng lại. Khẳng định này sai."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-12.1.1",
      "badge": "Tính giá trị cực đại hàm số bậc ba",
      "source": "SGK Toán 12 KNTT - Bài 1 Khởi động",
      "prompt": "Cho hàm số bậc ba $y = x^3 - 6x^2 + 9x - 2$. Giá trị cực đại của hàm số đã cho bằng bao nhiêu?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "2.0"
      ],
      "explanation": "Ta có $y' = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$.\\n$y' = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$.\\nĐạo hàm đổi dấu từ dương sang âm qua $x = 1$, do đó hàm số đạt cực đại tại $x = 1$.\\nGiá trị cực đại $y_{\\text{CD}} = y(1) = 1^3 - 6(1)^2 + 9(1) - 2 = 2$."
    },
    {
      "id": "sa-12.1.2",
      "badge": "Tổng bình phương các điểm cực trị",
      "source": "SGK Toán 12 KNTT - Bài tập rèn luyện",
      "prompt": "Cho hàm số $y = -x^3 + 3x^2 + 9x - 1$. Gọi $x_1, x_2$ là hai điểm cực trị của hàm số. Tính giá trị của biểu thức $T = x_1^2 + x_2^2$.",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10"
      ],
      "explanation": "Đạo hàm: $y' = -3x^2 + 6x + 9 = -3(x^2 - 2x - 3)$.\\n$y' = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$.\\nDo đó hai điểm cực trị là $x_1 = -1, x_2 = 3$.\\nVậy $T = (-1)^2 + 3^2 = 1 + 9 = 10$."
    },
    {
      "id": "sa-12.1.3",
      "badge": "Số điểm cực trị từ đạo hàm phân tích nhân tử",
      "source": "Đề tham khảo Bộ GD&ĐT 2025",
      "prompt": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ và có đạo hàm $f'(x) = x^2 (x - 1)^3 (x + 2) (x - 3)^4$. Hàm số đã cho có bao nhiêu điểm cực trị?",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Nghiệm của $f'(x) = 0$ là: $x = 0$ (bội 2), $x = 1$ (bội 3), $x = -2$ (bội 1), $x = 3$ (bội 4).\\nĐạo hàm $f'(x)$ chỉ đổi dấu khi đi qua các nghiệm bội lẻ là $x = 1$ và $x = -2$.\\nDo đó, hàm số có đúng 2 điểm cực trị."
    },
    {
      "id": "sa-12.1.4",
      "badge": "Cực tiểu của hàm phân thức bậc hai trên bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 1 Ví dụ nâng cao",
      "prompt": "Cho hàm số $y = \\frac{x^2 + 2x + 4}{x + 2}$. Tìm giá trị cực tiểu của hàm số đã cho.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "2.0"
      ],
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-2\\}$.\\nBiến đổi $y = x + \\frac{4}{x + 2} \\implies y' = 1 - \\frac{4}{(x+2)^2} = \\frac{(x+2)^2 - 4}{(x+2)^2} = \\frac{x^2 + 4x}{(x+2)^2}$.\\n$y' = 0 \\Leftrightarrow x = 0$ hoặc $x = -4$.\\nLập bảng biến thiên, ta thấy hàm số đạt cực tiểu tại $x = 0$.\\nGiá trị cực tiểu là $y(0) = \\frac{0 + 0 + 4}{0 + 2} = 2$."
    },
    {
      "id": "sa-12.1.5",
      "badge": "Số giá trị nguyên tham số m để hàm bậc ba đồng biến trên R",
      "source": "Đề thi thử THPT Quốc gia",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-10; 10]$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + 9x - 1$ đồng biến trên toàn trục số $\\mathbb{R}$?",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7"
      ],
      "explanation": "Ta có $y' = x^2 - 2mx + 9$.\\nHàm số đồng biến trên $\\mathbb{R} \\Leftrightarrow y' \\ge 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta' = m^2 - 9 \\le 0 \\Leftrightarrow -3 \\le m \\le 3$.\\nVì $m \\in \\mathbb{Z}$ và $m \\in [-10; 10]$ nên $m \\in \\{-3; -2; -1; 0; 1; 2; 3\\}$.\\nVậy có đúng 7 giá trị nguyên thỏa mãn."
    },
    {
      "id": "sa-12.1.6",
      "badge": "Đếm tham số m của hàm phân thức đơn điệu",
      "source": "Đề thi thử Tốt nghiệp THPT",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-5; 15]$ để hàm số $y = \\frac{x + 2m}{x + 4}$ đồng biến trên từng khoảng xác định?",
      "correctAnswer": "7",
      "acceptableAnswers": [
        "7"
      ],
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-4\\}$.\\nĐạo hàm: $y' = \\frac{1 \\cdot 4 - 2m \\cdot 1}{(x+4)^2} = \\frac{4 - 2m}{(x+4)^2}$.\\nHàm số đồng biến trên từng khoảng xác định $\\Leftrightarrow y' > 0, \\forall x \\ne -4 \\Leftrightarrow 4 - 2m > 0 \\Leftrightarrow m < 2$.\\nKết hợp $m \\in \\mathbb{Z}$ và $m \\in [-5; 15]$, ta có $m \\in \\{-5; -4; -3; -2; -1; 0; 1\\}$.\\nSố giá trị nguyên là $1 - (-5) + 1 = 7$ giá trị."
    },
    {
      "id": "sa-12.1.7",
      "badge": "Bình phương khoảng cách giữa hai điểm cực trị",
      "source": "Đề thi Chuyên Phan Bội Châu",
      "prompt": "Cho hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x + 1$ ($m$ là tham số). Biết rằng đồ thị hàm số luôn có hai điểm cực trị $A, B$ với mọi $m$. Tính bình phương khoảng cách $AB^2$.",
      "correctAnswer": "20",
      "acceptableAnswers": [
        "20"
      ],
      "explanation": "Ta có $y' = 3[x^2 - 2mx + m^2 - 1]$. Phương trình $y' = 0 \\Leftrightarrow (x - m)^2 = 1 \\Leftrightarrow x = m - 1$ hoặc $x = m + 1$.\\n- Với $x = m - 1$: $y = (m-1)^3 - 3m(m-1)^2 + 3(m^2-1)(m-1) + 1 = 3m - 1$. Tọa độ $A(m - 1; 3m - 1)$.\\n- Với $x = m + 1$: $y = (m+1)^3 - 3m(m+1)^2 + 3(m^2-1)(m+1) + 1 = 3m - 5$. Tọa độ $B(m + 1; 3m - 5)$.\\nKhi đó véctơ $\\overrightarrow{AB} = (2; -4)$.\\nBình phương khoảng cách $AB^2 = 2^2 + (-4)^2 = 4 + 16 = 20$."
    },
    {
      "id": "sa-12.1.8",
      "badge": "Cực trị của hàm hợp g(x) = f(u(x)) - ĐGNL",
      "source": "Đề minh họa ĐGNL ĐHQG",
      "prompt": "Cho hàm số bậc ba $y = f(x)$ có đồ thị hàm số đạo hàm $y = f'(x)$ như hình vẽ sau. Hỏi hàm số $g(x) = f(1 - 2x)$ có bao nhiêu điểm cực trị?",
      "svgDiagram": "<svg viewBox=\"0 0 440 280\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid_6_24\" width=\"24\" height=\"24\" patternUnits=\"userSpaceOnUse\" x=\"186\" y=\"120\">\n      <path d=\"M 24 0 L 0 0 0 24\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"0.8\" />\n    </pattern>\n  </defs>\n\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"260\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  \n  <!-- Lưới ô vuông trực chuẩn 1:1 -->\n  <rect x=\"30\" y=\"25\" width=\"375\" height=\"235\" fill=\"url(#grid_6_24)\" />\n\n  <!-- Trục tọa độ Ox, Oy -->\n  <line x1=\"30\" y1=\"120\" x2=\"405\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"413,120 401,115 401,125\" fill=\"#94a3b8\" />\n  <text x=\"403\" y=\"112\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n\n  <line x1=\"186\" y1=\"260\" x2=\"186\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"186,17 181,29 191,29\" fill=\"#94a3b8\" />\n  <text x=\"196\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n\n  <!-- Gốc tọa độ O -->\n  <text x=\"172\" y=\"136\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n\n  <!-- Vạch chia đơn vị bằng nhau trên 2 trục -->\n  <line x1=\"42\" y1=\"117\" x2=\"42\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"66\" y1=\"117\" x2=\"66\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"90\" y1=\"117\" x2=\"90\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"114\" y1=\"117\" x2=\"114\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"138\" y1=\"117\" x2=\"138\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"162\" y1=\"117\" x2=\"162\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"210\" y1=\"117\" x2=\"210\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"234\" y1=\"117\" x2=\"234\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"258\" y1=\"117\" x2=\"258\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"282\" y1=\"117\" x2=\"282\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"306\" y1=\"117\" x2=\"306\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"330\" y1=\"117\" x2=\"330\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"354\" y1=\"117\" x2=\"354\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"378\" y1=\"117\" x2=\"378\" y2=\"123\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"264\" x2=\"189\" y2=\"264\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"240\" x2=\"189\" y2=\"240\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"216\" x2=\"189\" y2=\"216\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"192\" x2=\"189\" y2=\"192\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"168\" x2=\"189\" y2=\"168\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"144\" x2=\"189\" y2=\"144\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"96\" x2=\"189\" y2=\"96\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"72\" x2=\"189\" y2=\"72\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <line x1=\"183\" y1=\"48\" x2=\"189\" y2=\"48\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n\n  <!-- Đường cong Parabol y = f'(x) chuẩn xác toán học tỉ lệ 1:1 -->\n  <path d=\"M 116.4 45.5 Q 210.0 410.5 303.6 45.5\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <text x=\"310\" y=\"53\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">y = f'(x)</text>\n\n  <!-- Giao điểm x1 trên Ox -->\n  <circle cx=\"138.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"138.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">-2</text>\n\n  <!-- Giao điểm x2 trên Ox -->\n  <circle cx=\"282.0\" cy=\"120\" r=\"4\" fill=\"#facc15\" />\n  <text x=\"282.0\" y=\"142\" fill=\"#facc15\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">4</text>\n\n  \n</svg>",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Ta có $g'(x) = (1 - 2x)' \\cdot f'(1 - 2x) = -2 \\cdot f'(1 - 2x)$.\\nPhương trình $g'(x) = 0 \\Leftrightarrow f'(1 - 2x) = 0 \\Leftrightarrow 1 - 2x = -2$ hoặc $1 - 2x = 4$.\\n$\\Leftrightarrow 2x = 3 \\Leftrightarrow x = 1.5$ hoặc $2x = -3 \\Leftrightarrow x = -1.5$.\\nVì $x = -2$ và $x = 4$ là nghiệm đơn của $f'(x) = 0$ nên qua hai điểm $x = 1.5$ và $x = -1.5$, $g'(x)$ đều đổi dấu.\\nVậy hàm số $g(x)$ có đúng 2 điểm cực trị."
    },
    {
      "id": "sa-12.1.9",
      "badge": "Độ dài khoảng đồng biến hàm chứa căn thức",
      "source": "SGK Toán 12 KNTT - Bài 1 Vận dụng",
      "prompt": "Cho hàm số $y = \\sqrt{25 - x^2}$. Tính độ dài của khoảng đồng biến của hàm số đã cho.",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "5.0"
      ],
      "explanation": "Tập xác định: $25 - x^2 \\ge 0 \\Leftrightarrow x \\in [-5; 5]$.\\nVới $x \\in (-5; 5)$, đạo hàm $y' = \\frac{-x}{\\sqrt{25 - x^2}}$.\\n$y' > 0 \\Leftrightarrow -x > 0 \\Leftrightarrow x < 0$. Kết hợp tập xác định suy ra hàm số đồng biến trên khoảng $(-5; 0)$.\\nĐộ dài khoảng đồng biến là $0 - (-5) = 5$."
    },
    {
      "id": "sa-12.1.10",
      "badge": "Xác định hệ số hàm bậc ba qua điểm cực trị",
      "source": "Đề thi Khảo sát THPT Quốc gia",
      "prompt": "Biết đồ thị hàm số $y = x^3 + ax^2 + bx + c$ đạt cực đại tại điểm $A(1; 3)$ và đạt cực tiểu tại $x = 3$. Tính giá trị của biểu thức $T = a + b + c$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2"
      ],
      "explanation": "Đạo hàm $y' = 3x^2 + 2ax + b$.\\nVì $x = 1$ và $x = 3$ là hai điểm cực trị nên chúng là nghiệm của $y' = 0$:\\n$\\begin{cases} 3(1)^2 + 2a(1) + b = 0 \\\\ 3(3)^2 + 2a(3) + b = 0 \\end{cases} \\Leftrightarrow \\begin{cases} 2a + b = -3 \\\\ 6a + b = -27 \\end{cases} \\Leftrightarrow \\begin{cases} a = -6 \\\\ b = 9 \\end{cases}$.\\nĐồ thị đi qua điểm cực đại $A(1; 3) \\implies y(1) = 3 \\implies 1^3 + (-6)(1)^2 + 9(1) + c = 3 \\implies 4 + c = 3 \\implies c = -1$.\\nVậy $T = a + b + c = -6 + 9 + (-1) = 2$."
    },
    {
      "id": "sa-12.1.11",
      "badge": "Ứng dụng thực tế: Chi phí sản xuất trung bình nhỏ nhất",
      "source": "Đề thi Đánh giá Năng lực ĐHQG TP.HCM",
      "prompt": "Một cơ sở sản xuất thiết bị viễn thông có chi phí trung bình để sản xuất $x$ sản phẩm trong một ngày được xác định bởi hàm số: $\\overline{C}(x) = x + 100 + \\frac{2500}{x}$ (nghìn đồng/sản phẩm) với $x > 0$. Số sản phẩm cơ sở cần sản xuất mỗi ngày để chi phí trung bình đạt mức nhỏ nhất là bao nhiêu?",
      "correctAnswer": "50",
      "acceptableAnswers": [
        "50"
      ],
      "explanation": "Xét hàm số $\\overline{C}(x) = x + 100 + \\frac{2500}{x}$ trên $(0; +\\infty)$.\\nĐạo hàm: $\\overline{C}'(x) = 1 - \\frac{2500}{x^2} = \\frac{x^2 - 2500}{x^2}$.\\n$\\overline{C}'(x) = 0 \\Leftrightarrow x^2 = 2500 \\Leftrightarrow x = 50$ (do $x > 0$).\\n- Với $0 < x < 50$: $\\overline{C}'(x) < 0$, chi phí trung bình giảm.\\n- Với $x > 50$: $\\overline{C}'(x) > 0$, chi phí trung bình tăng.\\nDo đó hàm số đạt cực tiểu tại $x = 50$, nghĩa là chi phí trung bình nhỏ nhất khi sản xuất 50 sản phẩm."
    },
    {
      "id": "sa-12.1.12",
      "badge": "Ứng dụng thực tế: Chuyển động và độ cao cực đại",
      "source": "SGK Toán 12 KNTT - Bài 1 Bài toán mở đầu",
      "prompt": "Độ cao (tính bằng mét) của một quả khí cầu nghiên cứu thời tiết sau $t$ phút ($0 \\le t \\le 12$) được xác định bởi công thức: $h(t) = -t^3 + 9t^2 + 48t$. Sau bao nhiêu phút kể từ thời điểm cất cánh thì khí cầu đạt độ cao cực đại?",
      "correctAnswer": "8",
      "acceptableAnswers": [
        "8",
        "8.0"
      ],
      "explanation": "Xét hàm số $h(t) = -t^3 + 9t^2 + 48t$ trên đoạn $[0; 12]$.\\nVận tốc thẳng đứng: $v(t) = h'(t) = -3t^2 + 18t + 48 = -3(t^2 - 6t - 16)$.\\n$h'(t) = 0 \\Leftrightarrow t^2 - 6t - 16 = 0 \\Leftrightarrow (t - 8)(t + 2) = 0 \\Leftrightarrow t = 8$ (do $t \\ge 0$).\\n- Trên khoảng $(0; 8)$: $h'(t) > 0$, khí cầu đang bay lên.\\n- Trên khoảng $(8; 12)$: $h'(t) < 0$, khí cầu bắt đầu hạ độ cao.\\nVậy sau đúng 8 phút kể từ khi cất cánh, quả khí cầu đạt độ cao cực đại."
    }
  ]
}
};
