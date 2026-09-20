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
},
  // ==========================================
  // BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ
  // ==========================================
  "t12-b2-gtln-gtnn": {
  "id": "t12-b2-gtln-gtnn",
  "lessonNumber": 2,
  "title": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
  "bookChapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
  "scenarioTitle": "Tình huống thực tế: Thiết kế bao bì tối ưu chi phí và cực đại hóa doanh thu sản xuất",
  "scenarioFrames": [
    {
      "id": 1,
      "character": "student",
      "characterName": "Bạn Minh (Khám phá)",
      "avatar": "🧑‍🎓",
      "speech": "Thưa Thầy Tính, khi tìm giá trị lớn nhất (GTLN) và nhỏ nhất (GTNN) của hàm số trên một đoạn [a; b], có cần thiết phải vẽ bảng biến thiên không ạ? Và khi nào thì chỉ cần so sánh giá trị ở các điểm cực trị với hai đầu mút?",
      "visualGraphic": "graph",
      "mathNote": "\\max_{[a; b]} f(x) = \\max\\{f(a), f(b), f(x_i)\\}"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính (VinaMath)",
      "avatar": "👨‍🏫",
      "speech": "Chào em! Nếu hàm số liên tục trên đoạn [a; b], theo định lý Weierstrass hàm luôn đạt GTLN và GTNN. Ta áp dụng quy trình 3 bước cực nhanh: chỉ cần tính đạo hàm, tìm các nghiệm x_i nằm trong khoảng (a; b), sau đó tính giá trị tại các nghiệm đó cùng hai đầu mút f(a), f(b) rồi chọn số lớn nhất, nhỏ nhất mà không cần lập bảng biến thiên! Nhưng trên khoảng mở hoặc miền vô hạn, bảng biến thiên là bắt buộc nhé!",
      "visualGraphic": "circle",
      "mathNote": "m \\le f(x) \\le M, \\quad \\exists x_0: f(x_0) = M"
    }
  ],
  "youtubeVideoId": "b9hXmI34bJ0",
  "youtubeVideoTitle": "Bài Giảng Video: Bài 2 - Giá trị lớn nhất và giá trị nhỏ nhất của hàm số - Toán 12 KNTT",
  "youtubeVideos": [
    {
      "id": "b9hXmI34bJ0",
      "title": "Tiết 1: Định nghĩa GTLN, GTNN & Quy tắc tìm trên đoạn [a; b]"
    },
    {
      "id": "K5Qj8nU64kU",
      "title": "Tiết 2: Tìm GTLN, GTNN trên khoảng mở & Bài toán tối ưu thực tế"
    }
  ],
  "videoQuestions": [
    {
      "id": "vq-12.2.1",
      "title": "Video Tiết 1: Tìm GTLN của hàm số trên đoạn",
      "question": "Giá trị lớn nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[0; 2]$ bằng bao nhiêu?",
      "options": [
        "$3$",
        "$1$",
        "$-1$",
        "$2$"
      ],
      "correctIndex": 0,
      "explanation": "Ta có $y' = 3x^2 - 3 = 3(x^2 - 1) = 0 \\Leftrightarrow x = 1 \\in (0; 2)$ (nghiệm $x = -1$ bị loại). Tính các giá trị: $f(0) = 1, f(1) = -1, f(2) = 2^3 - 3(2) + 1 = 3$. Vậy $\\max_{[0; 2]} y = f(2) = 3$."
    },
    {
      "id": "vq-12.2.2",
      "title": "Video Tiết 2: Nhận biết GTLN từ bảng biến thiên trên khoảng",
      "question": "Cho hàm số $y = f(x)$ liên tục trên khoảng $(0; +\\infty)$ và có $\\lim_{x \\to 0^+} f(x) = -\\infty$, $\\lim_{x \\to +\\infty} f(x) = -\\infty$. Biết $f'(x) = 0$ duy nhất tại $x = 3$ và $f(3) = 8$. Khẳng định nào sau đây đúng?",
      "options": [
        "$\\max_{(0; +\\infty)} f(x) = 8$",
        "$\\min_{(0; +\\infty)} f(x) = 8$",
        "Hàm số không có giá trị lớn nhất trên $(0; +\\infty)$",
        "$\\max_{(0; +\\infty)} f(x) = 3$"
      ],
      "correctIndex": 0,
      "explanation": "Vì đạo hàm $f'(x) = 0$ chỉ tại duy nhất điểm $x = 3$, hàm số tăng từ $-\\infty$ lên $f(3) = 8$ rồi giảm về $-\\infty$. Do đó giá trị lớn nhất của hàm số trên $(0; +\\infty)$ là $\\max f(x) = 8$ tại $x = 3$."
    }
  ],
  "theorySections": [
    {
      "index": "1",
      "title": "Khái niệm Giá trị lớn nhất và Giá trị nhỏ nhất của hàm số",
      "points": [
        "Cho hàm số $y = f(x)$ xác định trên tập hợp $D$.",
        "Số $M$ được gọi là giá trị lớn nhất (GTLN) của hàm số $f(x)$ trên tập $D$, kí hiệu $M = \\max_{D} f(x)$, nếu: $f(x) \\le M$ với mọi $x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$.",
        "Số $m$ được gọi là giá trị nhỏ nhất (GTNN) của hàm số $f(x)$ trên tập $D$, kí hiệu $m = \\min_{D} f(x)$, nếu: $f(x) \\ge m$ với mọi $x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = m$.",
        "Lưu ý cốt lõi: Để kết luận $M$ (hoặc $m$) là GTLN (hoặc GTNN), bắt buộc phải chỉ ra ít nhất một điểm $x_0 \\in D$ thỏa mãn dấu bằng $f(x_0) = M$ (hoặc $f(x_0) = m$)."
      ],
      "formula": "M = \\max_D f(x) \\Leftrightarrow \\begin{cases} f(x) \\le M, \\forall x \\in D \\\\ \\exists x_0 \\in D: f(x_0) = M \\end{cases}",
      "examples": [
        {
          "title": "Ví dụ 1: Nhận biết GTLN và GTNN từ đồ thị và bảng biến thiên (SGK Trang 14)",
          "problem": "Cho hàm số $y = f(x)$ xác định trên đoạn $[-2; 3]$ có bảng biến thiên với $f(-2) = -1$, $f(0) = 5$, $f(2) = 1$, $f(3) = 4$. Hãy tìm GTLN và GTNN của hàm số trên $[-2; 3]$.",
          "solution": "• Dựa vào bảng biến thiên trên đoạn $[-2; 3]$:\\n  - Số lớn nhất trong các giá trị của hàm số là $5$, đạt tại $x = 0 \\in [-2; 3]$. Vậy $\\max_{[-2; 3]} f(x) = 5$.\\n  - Số nhỏ nhất trong các giá trị của hàm số là $-1$, đạt tại $x = -2 \\in [-2; 3]$. Vậy $\\min_{[-2; 3]} f(x) = -1$."
        }
      ]
    },
    {
      "index": "2",
      "title": "Quy tắc 3 bước tìm GTLN và GTNN của hàm số trên một đoạn [a; b]",
      "points": [
        "Định lý Weierstrass: Mọi hàm số liên tục trên một đoạn $[a; b]$ đều luôn đạt được cả giá trị lớn nhất và giá trị nhỏ nhất trên đoạn đó.",
        "Quy trình thực hành 3 bước (không cần lập bảng biến thiên):",
        "Bước 1: Tính đạo hàm $f'(x)$. Tìm các điểm $x_1, x_2, \\dots, x_n$ thuộc khoảng mở $(a; b)$ mà tại đó $f'(x) = 0$ hoặc đạo hàm không xác định.",
        "Bước 2: Tính các giá trị $f(a), f(b)$ và $f(x_1), f(x_2), \\dots, f(x_n)$.",
        "Bước 3: So sánh các giá trị vừa tính: Số lớn nhất là $\\max_{[a; b]} f(x)$ và số nhỏ nhất là $\\min_{[a; b]} f(x)$."
      ],
      "formula": "\\max_{[a; b]} f(x) = \\max\\{f(a), f(b), f(x_i)\\}, \\quad \\min_{[a; b]} f(x) = \\min\\{f(a), f(b), f(x_i)\\}",
      "examples": [
        {
          "title": "Ví dụ 2: Tìm GTLN, GTNN hàm đa thức bậc ba trên đoạn (SGK Trang 16)",
          "problem": "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^3 - 3x^2 - 9x + 2$ trên đoạn $[-2; 2]$.",
          "solution": "• Hàm số liên tục trên đoạn $[-2; 2]$.\\n• Đạo hàm: $f'(x) = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$.\\n• $f'(x) = 0 \\Leftrightarrow x = -1 \\in (-2; 2)$ hoặc $x = 3 \\notin (-2; 2)$ (loại).\\n• Tính các giá trị:\\n  $f(-2) = (-2)^3 - 3(-2)^2 - 9(-2) + 2 = 0$.\\n  $f(2) = 2^3 - 3(2)^2 - 9(2) + 2 = -20$.\\n  $f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 2 = 7$.\\n• So sánh: $\\max_{[-2; 2]} f(x) = f(-1) = 7$ và $\\min_{[-2; 2]} f(x) = f(2) = -20$."
        }
      ]
    },
    {
      "index": "3",
      "title": "Phương pháp tìm GTLN và GTNN trên khoảng mở và tập vô hạn",
      "points": [
        "Trên một khoảng $(a; b)$, nửa khoảng $[a; b)$ hoặc khoảng vô hạn $(a; +\\infty)$, hàm số liên tục có thể KHÔNG có GTLN hoặc GTNN.",
        "Phương pháp: Bắt buộc lập Bảng biến thiên hoàn chỉnh của hàm số trên miền đang xét.",
        "Tính đạo hàm, lập bảng xét dấu và tính các giới hạn ở hai đầu mút: $\\lim_{x \\to a^+} f(x), \\lim_{x \\to b^-} f(x)$ (hoặc $\\lim_{x \\to \\pm\\infty} f(x)$).",
        "Định lý giá trị duy nhất: Nếu hàm số liên tục trên khoảng $K$ và có duy nhất một điểm cực trị $x_0$ trên $K$ thì: nếu $x_0$ là cực đại thì $f(x_0) = \\max_K f(x)$; nếu $x_0$ là cực tiểu thì $f(x_0) = \\min_K f(x)$."
      ],
      "examples": [
        {
          "title": "Ví dụ 3: Tìm GTNN trên khoảng dương bằng BĐT Cauchy và Đạo hàm (SGK Trang 17)",
          "problem": "Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{9}{x}$ trên khoảng $(0; +\\infty)$.",
          "solution": "• Tập xác định $D = (0; +\\infty)$.\\n• Đạo hàm: $y' = 1 - \\frac{9}{x^2} = \\frac{x^2 - 9}{x^2}$.\\n• Với $x > 0$, $y' = 0 \\Leftrightarrow x = 3$.\\n• Bảng biến thiên: trên $(0; 3)$ có $y' < 0$ (hàm giảm từ $+\\infty$ về $6$); trên $(3; +\\infty)$ có $y' > 0$ (hàm tăng từ $6$ lên $+\\infty$).\\n• Kết luận: $\\min_{(0; +\\infty)} y = y(3) = 6$ đạt tại $x = 3$."
        }
      ]
    },
    {
      "index": "4",
      "title": "Quy trình giải bài toán tối ưu hóa thực tiễn bằng Đạo hàm",
      "points": [
        "Bước 1: Chọn biến số thích hợp (thường là kích thước hình học $x$, số lượng sản phẩm $x$, thời gian $t$, giá bán $p$). Xác định điều kiện thực tế của biến số (tập xác định hình học/kinh tế).",
        "Bước 2: Thiết lập hàm số mục tiêu $y = f(x)$ biểu diễn đại lượng cần tối ưu (thể tích lớn nhất, chi phí nhỏ nhất, doanh thu cực đại, nồng độ thuốc đạt đỉnh).",
        "Bước 3: Sử dụng công cụ đạo hàm (quy tắc trên đoạn hoặc bảng biến thiên trên khoảng) để tìm GTLN hoặc GTNN của hàm số $f(x)$.",
        "Bước 4: Đối chiếu điều kiện thực tế và trả lời câu hỏi của bài toán."
      ],
      "examples": [
        {
          "title": "Ví dụ 4: Bài toán gập hộp tôn dung tích lớn nhất (SGK Trang 18)",
          "problem": "Từ một tấm tôn hình vuông cạnh $60\\text{ cm}$, người ta cắt ở bốn góc bốn hình vuông bằng nhau có cạnh $x\\text{ cm}$ rồi gập mép lại thành một chiếc hộp không nắp. Tìm $x$ để thể tích chiếc hộp là lớn nhất.",
          "solution": "• Điều kiện cạnh cắt: $0 < x < 30\\text{ cm}$.\\n• Đáy hộp là hình vuông cạnh $60 - 2x$, chiều cao hộp là $x$.\\n• Thể tích hộp: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2 = 4(x^3 - 60x^2 + 900x)$.\\n• Đạo hàm: $V'(x) = 4(3x^2 - 120x + 900) = 12(x^2 - 40x + 300) = 12(x - 10)(x - 30)$.\\n• Trong khoảng $(0; 30)$, $V'(x) = 0 \\Leftrightarrow x = 10$.\\n• Bảng biến thiên cho thấy $V(x)$ đạt cực đại duy nhất tại $x = 10$.\\n• Kết luận: Cạnh hình vuông cắt bỏ là $x = 10\\text{ cm}$, thể tích lớn nhất đạt $16000\\text{ cm}^3$."
        }
      ]
    }
  ],
  "tips": [
    "Phân biệt GTLN/GTNN với Cực đại/Cực tiểu: Cực trị chỉ có tính địa phương trong một lân cận hẹp, còn GTLN/GTNN là tính chất toàn cục trên toàn bộ tập xác định đang xét.",
    "Trên đoạn $[a; b]$, nếu hàm số luôn đơn điệu (đạo hàm không đổi dấu) thì GTLN và GTNN luôn nằm ngay tại hai đầu mút: nếu đồng biến thì $\\min = f(a), \\max = f(b)$; nếu nghịch biến thì $\\max = f(a), \\min = f(b)$.",
    "Khi giải bài toán tối ưu thực tế, bắt buộc phải tìm điều kiện thực tế của biến số (ví dụ $0 < x < \\frac{a}{2}$) để thu hẹp tập khảo sát, tránh lấy nhầm nghiệm ngoại lai."
  ],
  "traps": [
    "Bẫy kết luận GTLN/GTNN trên khoảng: Hàm số có thể không có max hoặc min trên khoảng $(a; b)$ nếu giá trị lớn nhất tiệm cận tại các đầu mút mà hàm không bao giờ chạm tới.",
    "Quên kiểm tra nghiệm $x_i$ có thuộc khoảng mở $(a; b)$ hay không: Chỉ tính giá trị $f(x_i)$ đối với các điểm nằm lọt hẳn bên trong khoảng $(a; b)$.",
    "Nhầm lẫn giữa giá trị cực đại và giá trị lớn nhất: Một hàm số có thể có cực đại nhưng cực đại đó chưa chắc đã là giá trị lớn nhất trên toàn miền."
  ],
  "interactiveType": "function",
  "quizQuestions": [
    {
      "id": "quiz-12.2.1",
      "badge": "NB - Đọc giá trị lớn nhất từ bảng biến thiên",
      "source": "SGK Toán 12 KNTT - Bài 2 Khởi động",
      "question": "Cho hàm số $y = f(x)$ xác định và liên tục trên đoạn $[-2; 3]$ có bảng biến thiên như hình vẽ sau. Giá trị lớn nhất của hàm số trên đoạn $[-2; 3]$ bằng:",
      "svgDiagram": "<svg viewBox=\"0 0 540 180\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"bbtArrUp_q1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#38bdf8\" />\n    </marker>\n    <marker id=\"bbtArrDown_q1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#f43f5e\" />\n    </marker>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"160\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"50\" x2=\"530\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"90\" x2=\"530\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <text x=\"42\" y=\"36\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"42\" y=\"76\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y'</text>\n  <text x=\"42\" y=\"138\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n  <text x=\"115\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-2</text>\n  <text x=\"230\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">0</text>\n  <text x=\"360\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">2</text>\n  <text x=\"485\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">3</text>\n  <text x=\"172\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"230\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"295\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"360\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"422\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"115\" y=\"155\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-1</text>\n  <line x1=\"135\" y1=\"148\" x2=\"210\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp_q1)\" />\n  <text x=\"230\" y=\"112\" fill=\"#38bdf8\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">5</text>\n  <line x1=\"250\" y1=\"116\" x2=\"340\" y2=\"154\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown_q1)\" />\n  <text x=\"360\" y=\"162\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">1</text>\n  <line x1=\"380\" y1=\"154\" x2=\"465\" y2=\"124\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp_q1)\" />\n  <text x=\"485\" y=\"122\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">4</text>\n</svg>",
      "options": [
        "$5$",
        "$4$",
        "$3$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Dựa vào bảng biến thiên trên đoạn $[-2; 3]$, giá trị lớn nhất của hàm số là số cao nhất trên dòng biến thiên $y$, đó là $y = 5$ đạt tại điểm $x = 0$."
    },
    {
      "id": "quiz-12.2.2",
      "badge": "NB - Đọc giá trị nhỏ nhất từ bảng biến thiên",
      "source": "SGK Toán 12 KNTT - Bài 2 Ví dụ 1",
      "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-1; 4]$ có bảng biến thiên như hình vẽ sau. Giá trị nhỏ nhất của hàm số trên đoạn $[-1; 4]$ bằng:",
      "svgDiagram": "<svg viewBox=\"0 0 540 180\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"bbtArrUp_q2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#38bdf8\" />\n    </marker>\n    <marker id=\"bbtArrDown_q2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#f43f5e\" />\n    </marker>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"160\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"50\" x2=\"530\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"90\" x2=\"530\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <text x=\"42\" y=\"36\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"42\" y=\"76\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y'</text>\n  <text x=\"42\" y=\"138\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n  <text x=\"115\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-1</text>\n  <text x=\"240\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">1</text>\n  <text x=\"370\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">3</text>\n  <text x=\"485\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">4</text>\n  <text x=\"175\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"240\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"305\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"370\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"430\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"115\" y=\"120\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">2</text>\n  <line x1=\"135\" y1=\"124\" x2=\"220\" y2=\"154\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown_q2)\" />\n  <text x=\"240\" y=\"162\" fill=\"#38bdf8\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-4</text>\n  <line x1=\"260\" y1=\"154\" x2=\"350\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp_q2)\" />\n  <text x=\"370\" y=\"112\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">3</text>\n  <line x1=\"390\" y1=\"116\" x2=\"465\" y2=\"140\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown_q2)\" />\n  <text x=\"485\" y=\"146\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">0</text>\n</svg>",
      "options": [
        "$-4$",
        "$1$",
        "$-1$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Quan sát bảng biến thiên trên đoạn $[-1; 4]$, giá trị thấp nhất trên dòng $y$ là $-4$ đạt tại $x = 1$. Do đó $\\min_{[-1; 4]} f(x) = -4$."
    },
    {
      "id": "quiz-12.2.3",
      "badge": "NB - Đọc GTLN và GTNN từ đồ thị hàm số",
      "source": "SGK Toán 12 KNTT - Bài 2 Hình vẽ 1.15",
      "question": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-2; 2]$ và có đồ thị như hình vẽ sau. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[-2; 2]$. Giá trị của $M + m$ bằng:",
      "svgDiagram": "<svg viewBox=\"0 0 440 280\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid_b2_q3\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\" x=\"200\" y=\"140\">\n      <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"0.8\" />\n    </pattern>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"260\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <!-- Lưới trực chuẩn 1:1 u = 30px -->\n  <rect x=\"30\" y=\"25\" width=\"375\" height=\"235\" fill=\"url(#grid_b2_q3)\" />\n  <!-- Trục Ox, Oy -->\n  <line x1=\"30\" y1=\"140\" x2=\"405\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"413,140 401,135 401,145\" fill=\"#94a3b8\" />\n  <text x=\"403\" y=\"132\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n  <line x1=\"200\" y1=\"260\" x2=\"200\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"200,17 195,29 205,29\" fill=\"#94a3b8\" />\n  <text x=\"210\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n  <!-- Gốc O -->\n  <text x=\"186\" y=\"156\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n  <!-- Vạch chia trục Ox: x = -2 (140), -1 (170), 1 (230), 2 (260) -->\n  <line x1=\"140\" y1=\"137\" x2=\"140\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"140\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">-2</text>\n  <line x1=\"170\" y1=\"137\" x2=\"170\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"170\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">-1</text>\n  <line x1=\"230\" y1=\"137\" x2=\"230\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"230\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">1</text>\n  <line x1=\"260\" y1=\"137\" x2=\"260\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"260\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">2</text>\n  <!-- Vạch chia trục Oy: y = 2 (80), 3 (50), -1 (170) -->\n  <line x1=\"197\" y1=\"80\" x2=\"203\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"186\" y=\"84\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">2</text>\n  <line x1=\"197\" y1=\"50\" x2=\"203\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"186\" y=\"54\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">3</text>\n  <line x1=\"197\" y1=\"170\" x2=\"197\" y2=\"170\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"186\" y=\"174\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">-1</text>\n  <!-- Đường cong hàm số trên [-2; 2]: y = -x^3 + 3x + 1 -->\n  <!-- Điểm mốc: (-2; 3), (-1; -1), (0; 1), (1; 3), (2; -1) -->\n  <path d=\"M 140 50 C 150 130, 160 170, 170 170 C 185 170, 190 110, 200 110 C 210 110, 220 50, 230 50 C 240 50, 250 130, 260 170\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <!-- Chấm các điểm mốc -->\n  <circle cx=\"140\" cy=\"50\" r=\"4\" fill=\"#facc15\" />\n  <circle cx=\"170\" cy=\"170\" r=\"4\" fill=\"#f43f5e\" />\n  <circle cx=\"230\" cy=\"50\" r=\"4\" fill=\"#facc15\" />\n  <circle cx=\"260\" cy=\"170\" r=\"4\" fill=\"#f43f5e\" />\n  <!-- Dóng tọa độ điểm lớn nhất (1; 3) và (-2; 3) -->\n  <line x1=\"140\" y1=\"50\" x2=\"200\" y2=\"50\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <line x1=\"230\" y1=\"50\" x2=\"200\" y2=\"50\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <line x1=\"230\" y1=\"50\" x2=\"230\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <!-- Dóng tọa độ điểm nhỏ nhất (-1; -1) và (2; -1) -->\n  <line x1=\"170\" y1=\"170\" x2=\"200\" y2=\"170\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <line x1=\"260\" y1=\"170\" x2=\"200\" y2=\"170\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n</svg>",
      "options": [
        "$2$",
        "$4$",
        "$0$",
        "$-2$"
      ],
      "correctIndex": 0,
      "explanation": "Quan sát đồ thị hàm số trên đoạn $[-2; 2]$, điểm cao nhất của đồ thị có tung độ $M = 3$ (đạt tại $x = -2$ và $x = 1$). Điểm thấp nhất có tung độ $m = -1$ (đạt tại $x = -1$ và $x = 2$). Do đó $M + m = 3 + (-1) = 2$."
    },
    {
      "id": "quiz-12.2.4",
      "badge": "NB - Định nghĩa giá trị lớn nhất của hàm số",
      "source": "SGK Toán 12 KNTT - Bài 2 Khái niệm",
      "question": "Cho hàm số $y = f(x)$ xác định trên tập hợp $D$. Mệnh đề nào sau đây là định nghĩa ĐÚNG của số $M$ là giá trị lớn nhất của hàm số $f(x)$ trên $D$?",
      "options": [
        "$f(x) \\le M, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$.",
        "$f(x) < M, \\forall x \\in D$.",
        "$f(x) \\ge M, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$.",
        "$f(x) \\le M, \\forall x \\in D$."
      ],
      "correctIndex": 0,
      "explanation": "Theo định nghĩa SGK Toán 12: Số $M$ là giá trị lớn nhất của $f(x)$ trên $D$ khi và chỉ khi $f(x) \\le M$ với mọi $x \\in D$ và phải có ít nhất một điểm $x_0 \\in D$ thỏa mãn $f(x_0) = M$."
    },
    {
      "id": "quiz-12.2.5",
      "badge": "NB - GTNN của tam thức bậc hai cơ bản",
      "source": "SGK Toán 12 KNTT - Bài 2 Luyện tập 1",
      "question": "Giá trị nhỏ nhất của hàm số $y = x^2 - 4x + 5$ trên $\\mathbb{R}$ bằng:",
      "options": [
        "$1$",
        "$2$",
        "$5$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Biến đổi tam thức bậc hai: $y = (x - 2)^2 + 1 \\ge 1$ với mọi $x \\in \\mathbb{R}$. Dấu bằng xảy ra khi $x = 2$. Vậy $\\min_{\\mathbb{R}} y = 1$."
    },
    {
      "id": "quiz-12.2.6",
      "badge": "NB - GTLN của tam thức bậc hai trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Ví dụ cơ bản",
      "question": "Giá trị lớn nhất của hàm số $y = -x^2 + 2x + 3$ trên đoạn $[0; 3]$ bằng:",
      "options": [
        "$4$",
        "$3$",
        "$0$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Đạo hàm $y' = -2x + 2 = 0 \\Leftrightarrow x = 1 \\in [0; 3]$.\\nTính các giá trị: $f(0) = 3, f(1) = 4, f(3) = -9 + 6 + 3 = 0$.\\nVậy giá trị lớn nhất là $4$ tại $x = 1$."
    },
    {
      "id": "quiz-12.2.7",
      "badge": "NB - Tính chất max min hàm đơn điệu trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Nhận xét",
      "question": "Cho hàm số $y = f(x)$ liên tục và nghịch biến trên đoạn $[a; b]$. Khẳng định nào sau đây là đúng?",
      "options": [
        "$\\max_{[a; b]} f(x) = f(a)$ và $\\min_{[a; b]} f(x) = f(b)$.",
        "$\\max_{[a; b]} f(x) = f(b)$ và $\\min_{[a; b]} f(x) = f(a)$.",
        "$\\max_{[a; b]} f(x) = f\\left(\\frac{a+b}{2}\\right)$.",
        "Hàm số không có giá trị lớn nhất và giá trị nhỏ nhất trên đoạn $[a; b]$."
      ],
      "correctIndex": 0,
      "explanation": "Vì hàm số liên tục và nghịch biến trên đoạn $[a; b]$ nên với mọi $x \\in [a; b]$ ta có $a \\le x \\le b \\implies f(b) \\le f(x) \\le f(a)$. Do đó $\\max_{[a; b]} f(x) = f(a)$ và $\\min_{[a; b]} f(x) = f(b)$."
    },
    {
      "id": "quiz-12.2.8",
      "badge": "NB - Điểm đạt GTNN của hàm đồng biến trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Câu hỏi nhanh",
      "question": "Cho hàm số $y = f(x)$ liên tục và đồng biến trên đoạn $[2; 6]$. Giá trị nhỏ nhất của hàm số trên đoạn $[2; 6]$ đạt tại điểm nào sau đây?",
      "options": [
        "$x = 2$",
        "$x = 6$",
        "$x = 4$",
        "$x = 0$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số đồng biến trên $[2; 6]$ thì giá trị tăng dần từ $f(2)$ đến $f(6)$. Do đó giá trị nhỏ nhất đạt tại đầu mút bên trái $x = 2$."
    },
    {
      "id": "quiz-12.2.9",
      "badge": "TH - GTLN của hàm số bậc ba trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Ví dụ 2",
      "question": "Giá trị lớn nhất của hàm số $y = x^3 - 3x + 2$ trên đoạn $[0; 2]$ bằng:",
      "options": [
        "$4$",
        "$2$",
        "$0$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Đạo hàm $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in (0; 2)$ (nghiệm $x = -1$ không thuộc đoạn $[0; 2]$).\\nTính các giá trị: $f(0) = 2, f(1) = 0, f(2) = 2^3 - 3(2) + 2 = 4$.\\nSo sánh các giá trị suy ra $\\max_{[0; 2]} y = 4$ tại $x = 2$."
    },
    {
      "id": "quiz-12.2.10",
      "badge": "TH - GTNN của hàm bậc ba có hai cực trị trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Luyện tập 2",
      "question": "Giá trị nhỏ nhất của hàm số $y = x^3 - 3x^2 - 9x + 1$ trên đoạn $[-2; 4]$ bằng:",
      "options": [
        "$-26$",
        "$-19$",
        "$-1$",
        "$6$"
      ],
      "correctIndex": 0,
      "explanation": "Đạo hàm $y' = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$.\\n$y' = 0 \\Leftrightarrow x = -1 \\in (-2; 4)$ hoặc $x = 3 \\in (-2; 4)$.\\nTính các giá trị: $f(-2) = -1, f(-1) = 6, f(3) = -26, f(4) = -19$.\\nSố nhỏ nhất là $-26$ đạt tại $x = 3$."
    },
    {
      "id": "quiz-12.2.11",
      "badge": "TH - Tổng GTLN và GTNN hàm phân thức bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 2 Bài tập 1.10",
      "question": "Gọi $M, m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\frac{x + 1}{x - 2}$ trên đoạn $[3; 5]$. Giá trị của biểu thức $M + m$ bằng:",
      "options": [
        "$6$",
        "$4$",
        "$2$",
        "$8$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số liên tục trên đoạn $[3; 5]$.\\nĐạo hàm $y' = \\frac{1 \\cdot (-2) - 1 \\cdot 1}{(x - 2)^2} = \\frac{-3}{(x - 2)^2} < 0, \\forall x \\in [3; 5]$.\\nHàm số luôn nghịch biến trên đoạn $[3; 5]$ nên $M = f(3) = \\frac{4}{1} = 4$ và $m = f(5) = \\frac{6}{3} = 2$.\\nVậy $M + m = 4 + 2 = 6$."
    },
    {
      "id": "quiz-12.2.12",
      "badge": "TH - GTNN của hàm phân thức đồng biến trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Ví dụ 3",
      "question": "Giá trị nhỏ nhất của hàm số $y = \\frac{2x - 1}{x + 1}$ trên đoạn $[0; 2]$ bằng:",
      "options": [
        "$-1$",
        "$1$",
        "$0$",
        "$\\frac{3}{2}$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$, hàm số liên tục trên $[0; 2]$.\\nĐạo hàm $y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\in [0; 2]$.\\nDo đó hàm số đồng biến trên $[0; 2]$, suy ra $\\min_{[0; 2]} y = y(0) = \\frac{-1}{1} = -1$."
    },
    {
      "id": "quiz-12.2.13",
      "badge": "TH - GTLN của hàm số trùng phương trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Luyện tập 3",
      "question": "Giá trị lớn nhất của hàm số $y = -x^4 + 2x^2 + 3$ trên đoạn $[-2; 2]$ bằng:",
      "options": [
        "$4$",
        "$3$",
        "$-5$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Đạo hàm: $y' = -4x^3 + 4x = -4x(x^2 - 1) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm 1$ (cả 3 nghiệm đều thuộc $(-2; 2)$).\\nTính các giá trị: $f(0) = 3, f(\\pm 1) = 4, f(\\pm 2) = -16 + 8 + 3 = -5$.\\nVậy giá trị lớn nhất của hàm số là $4$ đạt tại $x = \\pm 1$."
    },
    {
      "id": "quiz-12.2.14",
      "badge": "TH - GTNN trên khoảng mở bằng BĐT Cauchy",
      "source": "SGK Toán 12 KNTT - Bài 2 Ví dụ 4",
      "question": "Giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ bằng:",
      "options": [
        "$4$",
        "$2$",
        "$5$",
        "$0$"
      ],
      "correctIndex": 0,
      "explanation": "Với mọi $x > 0$, áp dụng bất đẳng thức Cauchy cho hai số dương $x$ và $\\frac{4}{x}$:\\n$x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$.\\nDấu bằng xảy ra khi $x = \\frac{4}{x} \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = 2$ (do $x > 0$).\\nVậy $\\min_{(0; +\\infty)} y = 4$."
    },
    {
      "id": "quiz-12.2.15",
      "badge": "VD - GTLN của hàm số chứa căn thức",
      "source": "SGK Toán 12 KNTT - Bài 2 Bài tập 1.12",
      "question": "Giá trị lớn nhất của hàm số $y = \\sqrt{9 - x^2}$ bằng:",
      "options": [
        "$3$",
        "$9$",
        "$0$",
        "$\\sqrt{3}$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định: $9 - x^2 \\ge 0 \\Leftrightarrow x \\in [-3; 3]$.\\nTa có $9 - x^2 \\le 9, \\forall x \\in [-3; 3] \\implies \\sqrt{9 - x^2} \\le 3$.\\nDấu bằng xảy ra khi $x = 0 \\in [-3; 3]$.\\nVậy giá trị lớn nhất của hàm số là $3$."
    },
    {
      "id": "quiz-12.2.16",
      "badge": "VD - GTLN hàm số tổng căn thức",
      "source": "Đề thi TN THPT - Bộ GD&ĐT",
      "question": "Giá trị lớn nhất của hàm số $y = x + \\sqrt{2 - x^2}$ trên tập xác định của nó bằng:",
      "options": [
        "$2$",
        "$\\sqrt{2}$",
        "$2\\sqrt{2}$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = [-\\sqrt{2}; \\sqrt{2}]$.\\nVới $x \\in (-\\sqrt{2}; \\sqrt{2})$, đạo hàm $y' = 1 - \\frac{x}{\\sqrt{2 - x^2}}$.\\n$y' = 0 \\Leftrightarrow \\sqrt{2 - x^2} = x \\Leftrightarrow \\begin{cases} x \\ge 0 \\\\ 2 - x^2 = x^2 \\end{cases} \\Leftrightarrow x = 1$.\\nTính các giá trị: $f(-\\sqrt{2}) = -\\sqrt{2}, f(\\sqrt{2}) = \\sqrt{2}, f(1) = 1 + 1 = 2$.\\nVậy giá trị lớn nhất của hàm số là $2$ đạt tại $x = 1$."
    },
    {
      "id": "quiz-12.2.17",
      "badge": "VD - Tìm tham số m để GTLN trên đoạn bằng số cho trước",
      "source": "Đề thi Khảo sát chất lượng Lớp 12",
      "question": "Tìm tất cả các giá trị của tham số $m$ để giá trị lớn nhất của hàm số $y = \\frac{x + m}{x + 1}$ trên đoạn $[1; 2]$ bằng $3$.",
      "options": [
        "$m = 5$",
        "$m = 7$",
        "$m = 3$",
        "$m = 1$"
      ],
      "correctIndex": 0,
      "explanation": "Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$, hàm liên tục trên $[1; 2]$.\\nĐạo hàm $y' = \\frac{1 - m}{(x+1)^2}$.\\n- Nếu $m > 1$ thì $y' < 0, \\forall x \\in [1; 2]$, hàm nghịch biến $\\implies \\max_{[1; 2]} y = y(1) = \\frac{1+m}{2}$.\\n  Theo đề bài: $\\frac{1+m}{2} = 3 \\Leftrightarrow 1 + m = 6 \\Leftrightarrow m = 5$ (thỏa mãn $m > 1$).\\n- Nếu $m < 1$ thì $y' > 0, \\forall x \\in [1; 2]$, hàm đồng biến $\\implies \\max_{[1; 2]} y = y(2) = \\frac{2+m}{3}$.\\n  Theo đề bài: $\\frac{2+m}{3} = 3 \\Leftrightarrow 2 + m = 9 \\Leftrightarrow m = 7$ (loại vì không thỏa mãn $m < 1$).\\nVậy $m = 5$."
    },
    {
      "id": "quiz-12.2.18",
      "badge": "VD - Bài toán thực tế: Diện tích rào vườn lớn nhất",
      "source": "SGK Toán 12 KNTT - Bài 2 Vận dụng 1",
      "question": "Bác An muốn rào một khu đất hình chữ nhật giáp một bờ sông thẳng (phía bờ sông không cần rào). Bác có sẵn một cuộn lưới thép dài $40\\text{ m}$. Diện tích lớn nhất của khu đất bác An có thể rào được là bao nhiêu mét vuông?",
      "options": [
        "$200\\text{ m}^2$",
        "$100\\text{ m}^2$",
        "$400\\text{ m}^2$",
        "$150\\text{ m}^2$"
      ],
      "correctIndex": 0,
      "explanation": "Gọi $x$ (m) là chiều rộng của khu vườn vuông góc với bờ sông ($0 < x < 20$).\\nKhi đó chiều dài của khu vườn dọc theo bờ sông là $40 - 2x$ (m).\\nDiện tích khu vườn rào được là: $S(x) = x(40 - 2x) = -2x^2 + 40x$.\\nĐạo hàm: $S'(x) = -4x + 40 = 0 \\Leftrightarrow x = 10$ (m).\\nVì tam thức bậc hai có $a = -2 < 0$ nên diện tích đạt giá trị lớn nhất tại đỉnh $x = 10$.\\nKhi đó $S_{\\max} = 10 \\times (40 - 20) = 200\\text{ m}^2$."
    },
    {
      "id": "quiz-12.2.19",
      "badge": "VDC - Bài toán thực tế: Thể tích hộp tôn lớn nhất",
      "source": "SGK Toán 12 KNTT - Bài 2 Vận dụng 2",
      "question": "Người ta gò một chiếc hộp hình chữ nhật không nắp từ một tấm tôn hình vuông cạnh $60\\text{ cm}$ bằng cách cắt bỏ ở bốn góc bốn hình vuông bằng nhau cạnh $x\\text{ cm}$ rồi gập mép lên. Chiếc hộp có thể tích lớn nhất khi $x$ bằng bao nhiêu xentimét?",
      "options": [
        "$10\\text{ cm}$",
        "$15\\text{ cm}$",
        "$20\\text{ cm}$",
        "$5\\text{ cm}$"
      ],
      "correctIndex": 0,
      "explanation": "Điều kiện cạnh cắt: $0 < x < 30\\text{ cm}$.\\nĐáy hộp là hình vuông cạnh $60 - 2x$, chiều cao hộp là $x$.\\nThể tích chiếc hộp: $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2 = 4(x^3 - 60x^2 + 900x)$.\\nĐạo hàm: $V'(x) = 4(3x^2 - 120x + 900) = 12(x^2 - 40x + 300) = 12(x - 10)(x - 30)$.\\nTrong khoảng $(0; 30)$, $V'(x) = 0 \\Leftrightarrow x = 10$.\\nBảng biến thiên cho thấy hàm số đạt cực đại duy nhất tại $x = 10$.\\nVậy để thể tích chiếc hộp lớn nhất thì $x = 10\\text{ cm}$."
    },
    {
      "id": "quiz-12.2.20",
      "badge": "VDC - Bài toán thực tế: Chi phí sản xuất trung bình nhỏ nhất",
      "source": "Đề thi Đánh giá Năng lực - ĐHQG Hà Nội",
      "question": "Chi phí sản xuất $x$ sản phẩm tại một nhà máy được cho bởi công thức: $C(x) = x^2 + 30x + 1600$ (nghìn đồng, $10 \\le x \\le 100$). Chi phí sản xuất trung bình cho mỗi sản phẩm là $\\overline{C}(x) = \\frac{C(x)}{x}$. Nhà máy cần sản xuất bao nhiêu sản phẩm để chi phí trung bình nhỏ nhất?",
      "options": [
        "$40$",
        "$30$",
        "$50$",
        "$20$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm chi phí sản xuất trung bình: $\\overline{C}(x) = \\frac{x^2 + 30x + 1600}{x} = x + 30 + \\frac{1600}{x}$ với $x \\in [10; 100]$.\\nĐạo hàm: $\\overline{C}'(x) = 1 - \\frac{1600}{x^2} = \\frac{x^2 - 1600}{x^2}$.\\n$\\overline{C}'(x) = 0 \\Leftrightarrow x^2 = 1600 \\Leftrightarrow x = 40$ (do $x > 0$).\\n- Trên $(10; 40)$: $\\overline{C}'(x) < 0$, hàm số nghịch biến.\\n- Trên $(40; 100)$: $\\overline{C}'(x) > 0$, hàm số đồng biến.\\nDo đó hàm số đạt cực tiểu tại $x = 40$, chi phí trung bình nhỏ nhất khi sản xuất 40 sản phẩm."
    }
  ],
  "trueFalseQuestions": [
    {
      "id": "tf-12.2.1",
      "badge": "Khảo sát GTLN và GTNN từ Bảng biến thiên",
      "source": "SGK Toán 12 KNTT - Bài 2 Bảng biến thiên",
      "prompt": "Cho hàm số $y = f(x)$ xác định và liên tục trên đoạn $[-2; 3]$ có bảng biến thiên như hình vẽ sau. Xét tính đúng hoặc sai của các khẳng định sau:",
      "svgDiagram": "<svg viewBox=\"0 0 540 180\" class=\"w-full max-w-lg mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"bbtArrUp_tf1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#38bdf8\" />\n    </marker>\n    <marker id=\"bbtArrDown_tf1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 1 2 L 8 5 L 1 8 z\" fill=\"#f43f5e\" />\n    </marker>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"160\" rx=\"6\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"50\" x2=\"530\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <line x1=\"10\" y1=\"90\" x2=\"530\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.6\" />\n  <text x=\"42\" y=\"36\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n  <text x=\"42\" y=\"76\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y'</text>\n  <text x=\"42\" y=\"138\" fill=\"#cbd5e1\" font-size=\"16\" font-style=\"italic\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n  <text x=\"115\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-2</text>\n  <text x=\"235\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">0</text>\n  <text x=\"360\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">2</text>\n  <text x=\"485\" y=\"36\" fill=\"#f8fafc\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">3</text>\n  <text x=\"175\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"235\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"295\" y=\"76\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">-</text>\n  <text x=\"360\" y=\"76\" fill=\"#cbd5e1\" font-size=\"15\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\">0</text>\n  <text x=\"425\" y=\"76\" fill=\"#10b981\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n  <text x=\"115\" y=\"156\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">-3</text>\n  <line x1=\"135\" y1=\"150\" x2=\"215\" y2=\"114\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp_tf1)\" />\n  <text x=\"235\" y=\"112\" fill=\"#38bdf8\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">5</text>\n  <line x1=\"255\" y1=\"116\" x2=\"340\" y2=\"154\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#bbtArrDown_tf1)\" />\n  <text x=\"360\" y=\"162\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">1</text>\n  <line x1=\"380\" y1=\"154\" x2=\"465\" y2=\"134\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#bbtArrUp_tf1)\" />\n  <text x=\"485\" y=\"132\" fill=\"#facc15\" font-size=\"16\" font-family=\"Times New Roman, serif\" text-anchor=\"middle\" font-weight=\"bold\">4</text>\n</svg>",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số đồng biến trên các khoảng $(-2; 0)$ và $(2; 3)$.",
          "correctAnswer": true,
          "explanation": "Dựa vào dòng $y'$, ta có $y' > 0$ trên các khoảng $(-2; 0)$ và $(2; 3)$. Do đó hàm số đồng biến trên hai khoảng này. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Giá trị lớn nhất của hàm số trên đoạn $[-2; 3]$ bằng $5$, đạt tại điểm $x = 0$.",
          "correctAnswer": true,
          "explanation": "Số lớn nhất trên dòng biến thiên $y$ là $5$ tại điểm $x = 0 \\in [-2; 3]$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Giá trị nhỏ nhất của hàm số trên đoạn $[-2; 3]$ bằng $1$, đạt tại điểm $x = 2$.",
          "correctAnswer": false,
          "explanation": "Tại $x = -2$, giá trị của hàm số là $f(-2) = -3$. Vì $-3 < 1$ nên giá trị nhỏ nhất của hàm số trên đoạn $[-2; 3]$ là $-3$ tại $x = -2$, chứ không phải $1$. Khẳng định này sai."
        },
        {
          "id": "d",
          "text": "Tổng của giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[-2; 3]$ bằng $2$.",
          "correctAnswer": true,
          "explanation": "Ta có $\\max = 5$ và $\\min = -3$. Khi đó tổng $\\max + \\min = 5 + (-3) = 2$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.2.2",
      "badge": "GTLN và GTNN của hàm bậc ba trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Khảo sát hàm đa thức",
      "prompt": "Cho hàm số $y = f(x) = 2x^3 - 3x^2 - 12x + 1$ trên đoạn $[-2; 1]$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Đạo hàm của hàm số là $f'(x) = 6(x + 1)(x - 2)$.",
          "correctAnswer": true,
          "explanation": "Ta có $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x + 1)(x - 2)$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Phương trình $f'(x) = 0$ có đúng một nghiệm thuộc khoảng $(-2; 1)$.",
          "correctAnswer": true,
          "explanation": "Phương trình $f'(x) = 0 \\Leftrightarrow x = -1$ hoặc $x = 2$. Vì $-1 \\in (-2; 1)$ và $2 \\notin (-2; 1)$ nên chỉ có đúng một nghiệm $x = -1$ thuộc khoảng $(-2; 1)$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Giá trị lớn nhất của hàm số trên đoạn $[-2; 1]$ bằng $8$ đạt tại $x = -1$.",
          "correctAnswer": true,
          "explanation": "Tính các giá trị: $f(-2) = 2(-8) - 3(4) - 12(-2) + 1 = -3$; $f(1) = 2(1) - 3(1) - 12(1) + 1 = -12$; $f(-1) = 2(-1) - 3(1) - 12(-1) + 1 = 8$. Số lớn nhất là $8$ tại $x = -1$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Giá trị nhỏ nhất của hàm số trên đoạn $[-2; 1]$ bằng $-3$.",
          "correctAnswer": false,
          "explanation": "Trong ba giá trị $f(-2) = -3, f(1) = -12, f(-1) = 8$, số nhỏ nhất là $-12$ tại $x = 1$. Do đó $\\min_{[-2; 1]} f(x) = -12 \\ne -3$. Khẳng định này sai."
        }
      ]
    },
    {
      "id": "tf-12.2.3",
      "badge": "GTLN và GTNN của hàm phân thức bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 2 Hàm hữu tỉ",
      "prompt": "Cho hàm số $y = \\frac{2x - 3}{x + 1}$ trên đoạn $[0; 4]$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số đã cho liên tục trên đoạn $[0; 4]$.",
          "correctAnswer": true,
          "explanation": "Mẫu số triệt tiêu tại $x = -1 \\notin [0; 4]$. Do đó hàm số xác định và liên tục trên đoạn $[0; 4]$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Đạo hàm của hàm số là $y' = \\frac{5}{(x + 1)^2}$ với mọi $x \\in [0; 4]$.",
          "correctAnswer": true,
          "explanation": "Ta có $y' = \\frac{2(1) - (-3)(1)}{(x+1)^2} = \\frac{5}{(x+1)^2}$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số nghịch biến trên đoạn $[0; 4]$.",
          "correctAnswer": false,
          "explanation": "Vì $y' = \\frac{5}{(x+1)^2} > 0, \\forall x \\in [0; 4]$ nên hàm số đồng biến trên đoạn $[0; 4]$. Khẳng định nói nghịch biến là sai."
        },
        {
          "id": "d",
          "text": "Tích của giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[0; 4]$ bằng $-3$.",
          "correctAnswer": true,
          "explanation": "Do hàm số đồng biến trên $[0; 4]$, giá trị nhỏ nhất là $m = y(0) = -3$ và giá trị lớn nhất là $M = y(4) = \\frac{8-3}{5} = 1$. Khi đó tích $M \\cdot m = 1 \\cdot (-3) = -3$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.2.4",
      "badge": "Khảo sát max min hàm phân thức bậc hai trên bậc nhất",
      "source": "SGK Toán 12 KNTT - Bài 2 Phân thức bậc 2/1",
      "prompt": "Cho hàm số $y = \\frac{x^2 + x + 4}{x + 1}$ trên đoạn $[0; 3]$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số có thể viết lại dưới dạng $y = x + \\frac{4}{x + 1}$.",
          "correctAnswer": true,
          "explanation": "Chia đa thức: $\\frac{x^2 + x + 4}{x + 1} = \\frac{x(x + 1) + 4}{x + 1} = x + \\frac{4}{x + 1}$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Đạo hàm của hàm số là $y' = \\frac{x^2 + 2x - 3}{(x + 1)^2}$.",
          "correctAnswer": true,
          "explanation": "Ta có $y' = 1 - \\frac{4}{(x+1)^2} = \\frac{(x+1)^2 - 4}{(x+1)^2} = \\frac{x^2 + 2x - 3}{(x+1)^2}$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Trong khoảng $(0; 3)$, phương trình $y' = 0$ có nghiệm duy nhất $x = 1$.",
          "correctAnswer": true,
          "explanation": "$x^2 + 2x - 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = -3$. Chỉ có nghiệm $x = 1 \\in (0; 3)$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Giá trị nhỏ nhất của hàm số trên đoạn $[0; 3]$ bằng $3$ và giá trị lớn nhất bằng $4$.",
          "correctAnswer": true,
          "explanation": "Tính các giá trị: $y(0) = 4$; $y(1) = 1 + \\frac{4}{2} = 3$; $y(3) = 3 + \\frac{4}{4} = 4$. Do đó $\\min_{[0; 3]} y = 3$ và $\\max_{[0; 3]} y = 4$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.2.5",
      "badge": "Đọc đồ thị hàm số và biện luận nghiệm - ĐGNL",
      "source": "Đề minh họa Đánh giá Năng lực 2025",
      "prompt": "Cho hàm số $y = f(x)$ liên tục trên đoạn $[-3; 3]$ có đồ thị như hình vẽ sau. Xét tính đúng hoặc sai của các khẳng định sau:",
      "svgDiagram": "<svg viewBox=\"0 0 440 280\" class=\"w-full max-w-md mx-auto my-3 select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid_b2_tf5\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\" x=\"200\" y=\"140\">\n      <path d=\"M 25 0 L 0 0 0 25\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"0.8\" />\n    </pattern>\n  </defs>\n  <rect x=\"10\" y=\"10\" width=\"420\" height=\"260\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <rect x=\"30\" y=\"25\" width=\"375\" height=\"235\" fill=\"url(#grid_b2_tf5)\" />\n  <line x1=\"30\" y1=\"140\" x2=\"405\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"413,140 401,135 401,145\" fill=\"#94a3b8\" />\n  <text x=\"403\" y=\"132\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">x</text>\n  <line x1=\"200\" y1=\"260\" x2=\"200\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\" />\n  <polygon points=\"200,17 195,29 205,29\" fill=\"#94a3b8\" />\n  <text x=\"210\" y=\"28\" fill=\"#cbd5e1\" font-size=\"14\" font-style=\"italic\" font-weight=\"bold\">y</text>\n  <text x=\"186\" y=\"156\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"bold\">O</text>\n  <!-- Vạch chia trục Ox: u = 25px -->\n  <line x1=\"125\" y1=\"137\" x2=\"125\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"125\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">-3</text>\n  <line x1=\"175\" y1=\"137\" x2=\"175\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"175\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">-1</text>\n  <line x1=\"250\" y1=\"137\" x2=\"250\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"250\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">2</text>\n  <line x1=\"275\" y1=\"137\" x2=\"275\" y2=\"143\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"275\" y=\"158\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">3</text>\n  <!-- Vạch chia trục Oy: y = 4 (40), y = -2 (190) -->\n  <line x1=\"197\" y1=\"40\" x2=\"203\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"186\" y=\"44\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">4</text>\n  <line x1=\"197\" y1=\"190\" x2=\"203\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"1.2\" />\n  <text x=\"186\" y=\"194\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">-2</text>\n  <!-- Đường cong trên [-3; 3] đi qua (-3; 0), (-1; 4), (2; -2), (3; 1) -->\n  <path d=\"M 125 140 C 150 50, 160 40, 175 40 C 195 40, 230 190, 250 190 C 265 190, 270 120, 275 115\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <circle cx=\"125\" cy=\"140\" r=\"4\" fill=\"#94a3b8\" />\n  <circle cx=\"175\" cy=\"40\" r=\"4\" fill=\"#facc15\" />\n  <circle cx=\"250\" cy=\"190\" r=\"4\" fill=\"#f43f5e\" />\n  <circle cx=\"275\" cy=\"115\" r=\"4\" fill=\"#94a3b8\" />\n  <line x1=\"175\" y1=\"40\" x2=\"200\" y2=\"40\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <line x1=\"175\" y1=\"40\" x2=\"175\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <line x1=\"250\" y1=\"190\" x2=\"200\" y2=\"190\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n  <line x1=\"250\" y1=\"190\" x2=\"250\" y2=\"140\" stroke=\"#64748b\" stroke-dasharray=\"3 3\" stroke-width=\"1.2\" />\n</svg>",
      "subItems": [
        {
          "id": "a",
          "text": "Hàm số đạt cực đại tại điểm $x = -1$ với giá trị cực đại $f(-1) = 4$.",
          "correctAnswer": true,
          "explanation": "Quan sát đỉnh lồi của đồ thị tại điểm $(-1; 4)$, đây là điểm cực đại của hàm số. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Giá trị lớn nhất của hàm số trên đoạn $[-3; 3]$ bằng $4$.",
          "correctAnswer": true,
          "explanation": "Điểm cao nhất của toàn bộ đồ thị trên đoạn $[-3; 3]$ là đỉnh $(-1; 4)$ với tung độ $4$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Giá trị nhỏ nhất của hàm số trên đoạn $[-3; 3]$ bằng $-2$ đạt tại $x = 2$.",
          "correctAnswer": true,
          "explanation": "Điểm thấp nhất của đồ thị trên $[-3; 3]$ là điểm đáy $(2; -2)$ với tung độ $-2$. Do đó $\\min_{[-3; 3]} f(x) = -2$ tại $x = 2$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Phương trình $f(x) = m$ có đúng $3$ nghiệm phân biệt trên đoạn $[-3; 3]$ khi và chỉ khi $-2 < m < 4$.",
          "correctAnswer": false,
          "explanation": "Tại đầu mút $x = -3$, đồ thị có $f(-3) = 0$ và tại $x = 3$ có $f(3) = 1$. Đường thẳng $y = m$ chỉ cắt đồ thị tại 3 điểm phân biệt khi $0 \\le m < 4$ (tại các giá trị âm $m \\in (-2; 0)$, chỉ cắt tại 2 điểm hoặc 1 điểm). Khẳng định điều kiện $-2 < m < 4$ là sai."
        }
      ]
    },
    {
      "id": "tf-12.2.6",
      "badge": "Khảo sát GTLN và GTNN hàm chứa căn thức",
      "source": "SGK Toán 12 KNTT - Bài 2 Nâng cao",
      "prompt": "Cho hàm số $y = f(x) = x - \\sqrt{4 - x^2}$. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Tập xác định của hàm số là đoạn $[-2; 2]$.",
          "correctAnswer": true,
          "explanation": "Điều kiện biểu thức dưới căn không âm: $4 - x^2 \\ge 0 \\Leftrightarrow x \\in [-2; 2]$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Với mọi $x \\in (-2; 2)$, đạo hàm của hàm số là $f'(x) = 1 + \\frac{x}{\\sqrt{4 - x^2}}$.",
          "correctAnswer": true,
          "explanation": "Ta có $f'(x) = 1 - \\frac{-2x}{2\\sqrt{4 - x^2}} = 1 + \\frac{x}{\\sqrt{4 - x^2}}$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Phương trình $f'(x) = 0$ có nghiệm duy nhất thuộc khoảng $(-2; 2)$ là $x = -\\sqrt{2}$.",
          "correctAnswer": true,
          "explanation": "$f'(x) = 0 \\Leftrightarrow \\frac{x}{\\sqrt{4 - x^2}} = -1 \\Leftrightarrow \\begin{cases} x < 0 \\\\ x^2 = 4 - x^2 \\end{cases} \\Leftrightarrow x = -\\sqrt{2} \\in (-2; 2)$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Giá trị nhỏ nhất của hàm số bằng $-2\\sqrt{2}$ và giá trị lớn nhất bằng $2$.",
          "correctAnswer": true,
          "explanation": "Tính các giá trị: $f(-2) = -2, f(2) = 2, f(-\\sqrt{2}) = -\\sqrt{2} - \\sqrt{2} = -2\\sqrt{2}$.\\nVì $-2\\sqrt{2} \\approx -2.828 < -2$ nên $\\min_{[-2; 2]} f(x) = -2\\sqrt{2}$ và $\\max_{[-2; 2]} f(x) = 2$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.2.7",
      "badge": "Bài toán thực tế: Thiết kế lon nước ngọt tiết kiệm vật liệu",
      "source": "SGK Toán 12 KNTT - Bài 2 Vận dụng cao",
      "prompt": "Một công ty cần sản xuất lon nước ngọt hình trụ bằng kim loại có thể tích không đổi là $V = 54\\pi\\text{ cm}^3$. Gọi $r$ (cm) là bán kính đáy và $h$ (cm) là chiều cao của lon nước ($r > 0, h > 0$). Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Chiều cao lon nước được biểu diễn theo bán kính đáy là $h = \\frac{54}{r^2}$.",
          "correctAnswer": true,
          "explanation": "Thể tích khối trụ $V = \\pi r^2 h = 54\\pi \\implies h = \\frac{54}{r^2}$. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Diện tích toàn phần của lon nước là $S(r) = 2\\pi r^2 + \\frac{108\\pi}{r}$.",
          "correctAnswer": true,
          "explanation": "Diện tích toàn phần lon nước hình trụ: $S(r) = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\left(\\frac{54}{r^2}\\right) = 2\\pi r^2 + \\frac{108\\pi}{r}$. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Để tiết kiệm vật liệu kim loại nhất (diện tích toàn phần nhỏ nhất) thì bán kính đáy cần thiết kế là $r = 3\\text{ cm}$.",
          "correctAnswer": true,
          "explanation": "Đạo hàm: $S'(r) = 4\\pi r - \\frac{108\\pi}{r^2} = \\frac{4\\pi(r^3 - 27)}{r^2}$.\\n$S'(r) = 0 \\Leftrightarrow r^3 = 27 \\Leftrightarrow r = 3\\text{ cm}$. Bảng biến thiên cho thấy hàm số đạt cực tiểu duy nhất tại $r = 3$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Khi đó diện tích toàn phần nhỏ nhất của lon nước là $54\\pi\\text{ cm}^2$.",
          "correctAnswer": true,
          "explanation": "Thay $r = 3$ vào diện tích toàn phần: $S(3) = 2\\pi(3^2) + \\frac{108\\pi}{3} = 18\\pi + 36\\pi = 54\\pi\\text{ cm}^2$. Khẳng định này đúng."
        }
      ]
    },
    {
      "id": "tf-12.2.8",
      "badge": "Bài toán thực tế: Tối ưu hóa doanh thu rạp chiếu phim",
      "source": "Đề thi Đánh giá Năng lực ĐHQG TP.HCM",
      "prompt": "Một rạp chiếu phim định mức giá vé $80$ nghìn đồng thì trung bình mỗi buổi có $300$ khán giả đến xem. Bộ phận khảo sát thị trường nhận thấy cứ mỗi lần giảm giá vé $5$ nghìn đồng thì số lượng khán giả lại tăng thêm $30$ người. Gọi $x$ (nghìn đồng, $0 \\le x \\le 80$) là số tiền giảm giá trên mỗi vé. Xét tính đúng hoặc sai của các khẳng định sau:",
      "subItems": [
        {
          "id": "a",
          "text": "Giá bán mỗi vé sau khi giảm là $80 - x$ nghìn đồng.",
          "correctAnswer": true,
          "explanation": "Giá ban đầu là 80 nghìn đồng, giảm $x$ nghìn đồng thì giá vé mới là $80 - x$ nghìn đồng. Khẳng định này đúng."
        },
        {
          "id": "b",
          "text": "Số lượng khán giả đến rạp sau khi giảm giá vé được biểu diễn bởi biểu thức $300 + 6x$ người.",
          "correctAnswer": true,
          "explanation": "Cứ giảm 5 nghìn đồng thì tăng 30 người, tức là mỗi nghìn đồng giảm giá sẽ tăng thêm $\\frac{30}{5} = 6$ người. Giảm $x$ nghìn đồng thì số người tăng thêm là $6x$. Tổng số khán giả là $300 + 6x$ người. Khẳng định này đúng."
        },
        {
          "id": "c",
          "text": "Hàm số biểu diễn doanh thu của rạp chiếu phim là $R(x) = -6x^2 + 180x + 24000$ (nghìn đồng).",
          "correctAnswer": true,
          "explanation": "Doanh thu = Giá vé $\\times$ Số vé = $(80 - x)(300 + 6x) = 24000 + 480x - 300x - 6x^2 = -6x^2 + 180x + 24000$. Khẳng định này đúng."
        },
        {
          "id": "d",
          "text": "Để doanh thu mỗi buổi chiếu đạt lớn nhất, rạp chiếu phim nên giảm giá vé $20$ nghìn đồng.",
          "correctAnswer": false,
          "explanation": "Tam thức bậc hai $R(x) = -6x^2 + 180x + 24000$ có $a = -6 < 0$, đạt giá trị lớn nhất tại đỉnh $x = -\\frac{180}{2(-6)} = 15$ nghìn đồng, chứ không phải $20$ nghìn đồng. Khẳng định này sai."
        }
      ]
    }
  ],
  "shortAnswerQuestions": [
    {
      "id": "sa-12.2.1",
      "badge": "GTLN của tam thức bậc hai",
      "source": "SGK Toán 12 KNTT - Bài 2 Khởi động",
      "prompt": "Giá trị lớn nhất của hàm số $y = -x^2 + 4x + 1$ bằng bao nhiêu?",
      "correctAnswer": "5",
      "acceptableAnswers": [
        "5",
        "5.0"
      ],
      "explanation": "Biến đổi: $y = -(x^2 - 4x + 4) + 5 = -(x - 2)^2 + 5 \\le 5$. Dấu bằng xảy ra khi $x = 2$. Vậy giá trị lớn nhất là 5."
    },
    {
      "id": "sa-12.2.2",
      "badge": "GTNN của hàm bậc ba trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Ví dụ 1",
      "prompt": "Tìm giá trị nhỏ nhất của hàm số $y = x^3 - 3x$ trên đoạn $[0; 2]$.",
      "correctAnswer": "-2",
      "acceptableAnswers": [
        "-2"
      ],
      "explanation": "Đạo hàm: $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in (0; 2)$ (loại $x = -1$).\\nTính các giá trị: $f(0) = 0, f(1) = -2, f(2) = 2$.\\nSố nhỏ nhất là $-2$ đạt tại $x = 1$."
    },
    {
      "id": "sa-12.2.3",
      "badge": "GTNN của hàm trùng phương trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Luyện tập",
      "prompt": "Cho hàm số $y = x^4 - 2x^2 + 3$. Tìm giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$.",
      "correctAnswer": "2",
      "acceptableAnswers": [
        "2",
        "2.0"
      ],
      "explanation": "Đạo hàm: $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0$ hoặc $x = 1 \\in (0; 2)$.\\nTính các giá trị: $f(0) = 3, f(1) = 2, f(2) = 16 - 8 + 3 = 11$.\\nVậy giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ là $2$ đạt tại $x = 1$."
    },
    {
      "id": "sa-12.2.4",
      "badge": "GTLN của hàm phân thức trên đoạn",
      "source": "SGK Toán 12 KNTT - Bài 2 Hàm hữu tỉ",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\frac{x + 2}{x - 1}$ trên đoạn $[2; 4]$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4.0"
      ],
      "explanation": "Hàm số liên tục trên đoạn $[2; 4]$.\\nĐạo hàm $y' = \\frac{1(-1) - 2(1)}{(x-1)^2} = \\frac{-3}{(x-1)^2} < 0, \\forall x \\in [2; 4]$.\\nDo đó hàm số nghịch biến trên $[2; 4]$, giá trị lớn nhất là $y(2) = \\frac{2+2}{2-1} = 4$."
    },
    {
      "id": "sa-12.2.5",
      "badge": "Tổng GTLN và GTNN hàm bậc ba trên đoạn",
      "source": "Đề thi TN THPT Quốc gia",
      "prompt": "Cho hàm số $y = x^3 - 3x^2 + 5$ trên đoạn $[1; 4]$. Gọi $M, m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số. Tính giá trị của biểu thức $P = M + m$.",
      "correctAnswer": "22",
      "acceptableAnswers": [
        "22"
      ],
      "explanation": "Đạo hàm $y' = 3x^2 - 6x = 3x(x - 2) = 0 \\Leftrightarrow x = 0$ (loại vì không thuộc $[1; 4]$) hoặc $x = 2 \\in (1; 4)$.\\nTính các giá trị: $f(1) = 3$; $f(2) = 8 - 12 + 5 = 1$; $f(4) = 64 - 48 + 5 = 21$.\\nTa có $M = 21, m = 1 \\implies P = M + m = 21 + 1 = 22$."
    },
    {
      "id": "sa-12.2.6",
      "badge": "GTNN hàm số trên khoảng dương",
      "source": "SGK Toán 12 KNTT - Bài 2 Mục 3",
      "prompt": "Giá trị nhỏ nhất của hàm số $y = x + \\frac{9}{x}$ trên khoảng $(0; +\\infty)$ bằng bao nhiêu?",
      "correctAnswer": "6",
      "acceptableAnswers": [
        "6",
        "6.0"
      ],
      "explanation": "Với mọi $x > 0$, áp dụng bất đẳng thức Cauchy:\\n$x + \\frac{9}{x} \\ge 2\\sqrt{x \\cdot \\frac{9}{x}} = 6$.\\nDấu bằng xảy ra khi $x = 3 > 0$. Vậy giá trị nhỏ nhất bằng 6."
    },
    {
      "id": "sa-12.2.7",
      "badge": "GTLN của hàm căn bậc hai",
      "source": "SGK Toán 12 KNTT - Bài 2 Bài tập",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = \\sqrt{16 - x^2}$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4.0"
      ],
      "explanation": "Tập xác định $[-4; 4]$.\\nTa có $16 - x^2 \\le 16 \\implies \\sqrt{16 - x^2} \\le 4$. Dấu bằng xảy ra khi $x = 0$. Vậy giá trị lớn nhất là 4."
    },
    {
      "id": "sa-12.2.8",
      "badge": "GTLN của hàm số tổng x và căn thức",
      "source": "Đề khảo sát chuyên Toán",
      "prompt": "Tìm giá trị lớn nhất của hàm số $y = x + \\sqrt{8 - x^2}$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4.0"
      ],
      "explanation": "Tập xác định $D = [-2\\sqrt{2}; 2\\sqrt{2}]$.\\nĐạo hàm: $y' = 1 - \\frac{x}{\\sqrt{8 - x^2}} = 0 \\Leftrightarrow x = \\sqrt{8 - x^2} \\Leftrightarrow x = 2$.\\nTính giá trị: $f(2) = 2 + \\sqrt{4} = 4$. Hai đầu mút $f(\\pm 2\\sqrt{2}) = \\pm 2\\sqrt{2} < 4$.\\nVậy giá trị lớn nhất bằng 4."
    },
    {
      "id": "sa-12.2.9",
      "badge": "Tìm tham số m để GTLN hàm phân thức đạt giá trị cho trước",
      "source": "Đề thi thử Tốt nghiệp THPT",
      "prompt": "Tìm giá trị của tham số thực $m$ để giá trị lớn nhất của hàm số $y = \\frac{x + m}{x + 2}$ trên đoạn $[0; 1]$ bằng $2$.",
      "correctAnswer": "4",
      "acceptableAnswers": [
        "4",
        "4.0"
      ],
      "explanation": "Đạo hàm $y' = \\frac{2 - m}{(x+2)^2}$.\\n- Nếu $m > 2$, hàm nghịch biến trên $[0; 1] \\implies \\max_{[0; 1]} y = y(0) = \\frac{m}{2}$.\\n  Theo đề bài: $\\frac{m}{2} = 2 \\Leftrightarrow m = 4$ (thỏa mãn $m > 2$).\\n- Nếu $m < 2$, hàm đồng biến trên $[0; 1] \\implies \\max_{[0; 1]} y = y(1) = \\frac{1+m}{3}$.\\n  Theo đề bài: $\\frac{1+m}{3} = 2 \\Leftrightarrow m = 5$ (loại vì không thỏa mãn $m < 2$).\\nVậy $m = 4$."
    },
    {
      "id": "sa-12.2.10",
      "badge": "Ứng dụng thực tế: Chiều dài hàng rào ngắn nhất",
      "source": "SGK Toán 12 KNTT - Bài toán thực tế",
      "prompt": "Một người cần rào một mảnh đất hình chữ nhật có diện tích $800\\text{ m}^2$, trong đó một cạnh giáp bờ sông thẳng không cần rào. Hỏi chiều dài hàng rào ngắn nhất cần dùng là bao nhiêu mét?",
      "correctAnswer": "80",
      "acceptableAnswers": [
        "80",
        "80.0"
      ],
      "explanation": "Gọi $x$ (m) là chiều rộng của mảnh đất vuông góc với bờ sông ($x > 0$).\\nChiều dài mảnh đất dọc bờ sông là $\\frac{800}{x}$ (m).\\nTổng chiều dài hàng rào: $L(x) = 2x + \\frac{800}{x}$.\\nÁp dụng BĐT Cauchy: $2x + \\frac{800}{x} \\ge 2\\sqrt{2x \\cdot \\frac{800}{x}} = 2\\sqrt{1600} = 80\\text{ m}$.\\nDấu bằng xảy ra khi $2x = \\frac{800}{x} \\Leftrightarrow x^2 = 400 \\Leftrightarrow x = 20\\text{ m}$.\\nVậy chiều dài hàng rào ngắn nhất là 80 mét."
    },
    {
      "id": "sa-12.2.11",
      "badge": "Ứng dụng thực tế: Cắt tôn làm hộp thể tích lớn nhất",
      "source": "Đề thi Đánh giá Năng lực - ĐHQG Hà Nội",
      "prompt": "Một mảnh tôn hình chữ nhật có kích thước $50\\text{ cm} \\times 80\\text{ cm}$. Người ta cắt ở bốn góc bốn hình vuông bằng nhau có cạnh bằng $x\\text{ cm}$ rồi gập mép lại thành một chiếc hộp chữ nhật không nắp. Để thể tích chiếc hộp đạt giá trị lớn nhất thì $x$ bằng bao nhiêu xentimét?",
      "correctAnswer": "10",
      "acceptableAnswers": [
        "10",
        "10.0"
      ],
      "explanation": "Điều kiện: $0 < x < 25\\text{ cm}$.\\nKích thước đáy hộp: $(50 - 2x)$ và $(80 - 2x)$, chiều cao $x$.\\nThể tích hộp: $V(x) = x(50 - 2x)(80 - 2x) = 4(x^3 - 65x^2 + 1000x)$.\\nĐạo hàm: $V'(x) = 4(3x^2 - 130x + 1000) = 0 \\Leftrightarrow x = 10$ hoặc $x = \\frac{100}{3} > 25$ (loại).\\nV'(x) đổi dấu từ dương sang âm khi qua $x = 10$, do đó thể tích lớn nhất khi $x = 10\\text{ cm}$."
    },
    {
      "id": "sa-12.2.12",
      "badge": "Ứng dụng thực tế: Giá bán tối ưu hóa lợi nhuận",
      "source": "Đề thi ĐGNL ĐHQG TP.HCM",
      "prompt": "Một cửa hàng bán một dòng điện thoại với giá $12$ triệu đồng/chiếc và mỗi tháng bán được $200$ chiếc. Ước tính nếu giảm giá $0.5$ triệu đồng/chiếc thì mỗi tháng sẽ bán thêm được $20$ chiếc. Biết chi phí nhập mỗi chiếc điện thoại là $6$ triệu đồng. Cửa hàng nên bán mỗi chiếc điện thoại với giá bao nhiêu triệu đồng để lợi nhuận mỗi tháng là lớn nhất?",
      "correctAnswer": "11.5",
      "acceptableAnswers": [
        "11.5",
        "11,5"
      ],
      "explanation": "Gọi $k$ là số lần giảm giá $0.5$ triệu đồng ($k \\ge 0$).\\nGiá bán mới: $12 - 0.5k$ (triệu đồng). Lợi nhuận mỗi chiếc: $12 - 0.5k - 6 = 6 - 0.5k$ (triệu đồng).\\nSố lượng điện thoại bán được: $200 + 20k$ (chiếc).\\nTổng lợi nhuận: $P(k) = (6 - 0.5k)(200 + 20k) = -10k^2 + 20k + 1200$.\\nTam thức bậc hai đạt cực đại tại đỉnh: $k = -\\frac{20}{2(-10)} = 1$.\\nVậy cửa hàng nên giảm giá 1 lần $0.5$ triệu đồng. Giá bán tối ưu là $12 - 0.5 = 11.5$ triệu đồng."
    }
  ]
},
};
