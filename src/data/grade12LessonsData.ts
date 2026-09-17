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
      "speech": "Thưa Thầy Tính, khi phóng một tên lửa nghiên cứu khí quyển, vận tốc và độ cao của tên lửa biến thiên liên tục. Làm thế nào đạo hàm cấp 1 giúp ta xác định chính xác khoảng thời gian tên lửa tăng tốc và thời điểm nó đạt độ cao cực đại ạ?",
      "visualGraphic": "graph",
      "mathNote": "v(t) = h'(t) > 0 \\implies h(t) \\text{ tang dan}"
    },
    {
      "id": 2,
      "character": "teacher",
      "characterName": "Thầy Tính (VinaMath)",
      "avatar": "👨‍🏫",
      "speech": "Chào em! Dấu của đạo hàm f'(x) chính là chìa khóa vạn năng: f'(x) > 0 thì hàm số đồng biến (đồ thị đi lên), f'(x) < 0 thì hàm số nghịch biến (đồ thị đi xuống). Điểm mà tại đó f'(x) đổi dấu từ dương sang âm chính là điểm cực đại của hàm số!",
      "visualGraphic": "circle",
      "mathNote": "f'(x_0) = 0 \\text{ va doi dau } (+ \\to -) \\implies x_0 \\text{ la diem cuc dai}"
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
      "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như sau:\\n\\n| $x$ | $-\\infty$ | | $-1$ | | $2$ | | $+\\infty$ |\\n|---|---|---|---|---|---|---|---|\\n| $y'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |\\n| $y$ | $-\\infty$ | $\\nearrow$ | $3$ | $\\searrow$ | $-2$ | $\\nearrow$ | $+\\infty$ |\\n\\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
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
      "badge": "NB - Nhận biết khoảng nghịch biến từ đồ thị hàm số",
      "source": "SGK Toán 12 KNTT - Bài 1 Hình 1.3",
      "question": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị đi xuống từ trái sang phải trên khoảng $(-2; 1)$, đi lên trên các khoảng $(-\\infty; -2)$ và $(1; +\\infty)$. Mệnh đề nào sau đây đúng?",
      "options": [
        "Hàm số nghịch biến trên khoảng $(-2; 1)$.",
        "Hàm số đồng biến trên khoảng $(-2; 1)$.",
        "Hàm số nghịch biến trên khoảng $(-\\infty; -2)$.",
        "Hàm số đồng biến trên khoảng $(-\\infty; 1)$."
      ],
      "correctIndex": 0,
      "explanation": "Trên khoảng $(-2; 1)$, đồ thị hàm số có hướng đi xuống từ trái sang phải, suy ra hàm số nghịch biến trên khoảng $(-2; 1)$."
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
      "badge": "NB - Phân biệt điểm cực đại của hàm số từ bảng biến thiên",
      "source": "SGK Toán 12 KNTT - Bài 1 Mục 2",
      "question": "Cho hàm số $y = f(x)$ xác định và liên tục trên $\\mathbb{R}$, có bảng xét dấu đạo hàm như sau:\\n\\n| $x$ | $-\\infty$ | | $-2$ | | $1$ | | $4$ | | $+\\infty$ |\\n|---|---|---|---|---|---|---|---|---|---|\\n| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | $0$ | $-$ | |\\n\\nĐiểm cực đại của hàm số đã cho là:",
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
      "question": "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Đồ thị của hàm số đạo hàm $y = f'(x)$ cắt trục hoành tại 3 điểm phân biệt có hoành độ $x_1 < x_2 < x_3$ và tiếp xúc với trục hoành tại điểm có hoành độ $x_4 > x_3$. Hàm số $y = f(x)$ có bao nhiêu điểm cực trị?",
      "options": [
        "$3$",
        "$4$",
        "$2$",
        "$1$"
      ],
      "correctIndex": 0,
      "explanation": "Điểm cực trị của hàm số $f(x)$ là các điểm mà tại đó $f'(x) = 0$ và $f'(x)$ đổi dấu khi đi qua điểm đó.\\n- Tại 3 giao điểm cắt ngang $x_1, x_2, x_3$, $f'(x)$ đổi dấu nên đây là 3 điểm cực trị.\\n- Tại điểm tiếp xúc $x_4$, $f'(x) = 0$ nhưng không đổi dấu (nghiệm bội chẵn) nên không phải cực trị.\\nVậy hàm số $y = f(x)$ có đúng 3 điểm cực trị."
    },
    {
      "id": "quiz-12.1.12",
      "badge": "VD - Đọc khoảng đồng biến từ đồ thị đạo hàm f'(x)",
      "source": "Đề khảo sát Chuyên ĐHSP",
      "question": "Cho hàm số $y = f(x)$ có đồ thị đạo hàm $y = f'(x)$ như sau: $f'(x) > 0$ trên các khoảng $(-1; 1)$ và $(4; +\\infty)$; $f'(x) < 0$ trên $(-\\infty; -1)$ và $(1; 4)$. Hàm số $y = f(x)$ đồng biến trên khoảng nào sau đây?",
      "options": [
        "$(0; 1)$",
        "$(-2; 0)$",
        "$(1; 3)$",
        "$(2; 4)$"
      ],
      "correctIndex": 0,
      "explanation": "Hàm số $y = f(x)$ đồng biến khi $f'(x) > 0$. Theo giả thiết, $f'(x) > 0$ trên khoảng $(-1; 1)$ và $(4; +\\infty)$.\\nVì khoảng $(0; 1) \\subset (-1; 1)$ nên trên $(0; 1)$ ta có $f'(x) > 0$, suy ra hàm số đồng biến trên khoảng $(0; 1)$."
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
      "prompt": "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Biết rằng đồ thị đạo hàm $y = f'(x)$ là một parabol có đỉnh $I(1; -4)$, đi qua gốc tọa độ $O$ và cắt trục hoành tại hai điểm có hoành độ $x = -1$ và $x = 3$. Xét tính đúng hoặc sai của các khẳng định sau:",
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
      "prompt": "Cho hàm số bậc ba $y = f(x)$ có đồ thị hàm số đạo hàm $y = f'(x)$ là parabol cắt trục hoành tại hai điểm phân biệt có hoành độ $x = -2$ và $x = 4$. Hỏi hàm số $g(x) = f(1 - 2x)$ có bao nhiêu điểm cực trị?",
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
